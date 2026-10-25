// ─── IN-APP PURCHASES (v1.29.77) ─────────────────────────────────────────────
//
// Real App Store purchases for the iPhone app, through the Capacitor plugin
// @capgo/native-purchases (StoreKit 2). In the browser, the PWA and on desktop
// this file does nothing: DSIAP.available() stays false and the store keeps its
// "Coming soon" buttons exactly as before.
//
// WHY THERE IS NO SERVER. StoreKit 2 signs every transaction and verifies the
// signature on the device. The plugin only ever returns VERIFIED transactions,
// and getPurchases({ onlyCurrentEntitlements: true }) asks StoreKit for what the
// signed-in Apple ID owns right now — expired subscriptions and refunded items
// are already left out. That is the whole receipt check; the app has no
// accounts, so there is nothing a server could add.
//
// WHAT THIS FILE OWNS
//   • finding the native plugin (registerPlugin, as for the TTS plugin — www is
//     plain script tags with no bundler, so the plugin's npm JS is never loaded)
//   • loading product info (localized prices) from the App Store
//   • buying, restoring, opening "Manage subscription"
//   • the list of product ids the user is entitled to, cached in localStorage
//     under ds_iap_entitled so the app opens right even offline
//
// WHAT IT DOES NOT OWN. What a product unlocks. That mapping lives in the
// store catalog in app-ui.js (each item's `productId`), which turns the
// entitled product ids into catalog ids (kits expand to their contents) and
// writes them to ds_iap_owned / ds_iap_pro for app-system.js to read.
//
// PRODUCT IDS ARE PERMANENT. Apple never lets an id be reused, not even after a
// product is deleted. Do not rename one; add a new id instead.

(function () {
  'use strict';

  const PRO_YEARLY   = 'se.deckstack.app.pro.yearly';
  const PRO_LIFETIME = 'se.deckstack.app.pro.lifetime';
  const CACHE_KEY    = 'ds_iap_entitled';

  let plugin = null;        // the native plugin proxy, once found
  let ready = false;        // true only after the plugin has actually answered
  let note = 'not started';
  const products = {};      // productId -> product info from the App Store
  const listeners = [];

  function isNativePlatform() {
    try {
      return !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());
    } catch (e) { return false; }
  }

  function findPlugin() {
    if (!isNativePlatform()) { note = 'not the native app'; return null; }
    const C = window.Capacitor;
    try {
      if (C.registerPlugin) return C.registerPlugin('NativePurchases');
    } catch (e) {}
    return (C.Plugins && C.Plugins.NativePurchases) || null;
  }

  // ── Entitlement cache ─────────────────────────────────────────────────────
  function readCache() {
    try { return JSON.parse(localStorage.getItem(CACHE_KEY)) || { ids: [] }; }
    catch (e) { return { ids: [] }; }
  }
  function writeCache(ids) {
    try { localStorage.setItem(CACHE_KEY, JSON.stringify({ ids, at: Date.now() })); } catch (e) {}
  }
  function entitled() { return (readCache().ids || []).slice(); }

  function emit() {
    const ids = entitled();
    listeners.forEach(fn => { try { fn(ids); } catch (e) {} });
    try { window.dispatchEvent(new CustomEvent('ds-iap-changed', { detail: { ids } })); } catch (e) {}
  }

  // Asks StoreKit what this Apple ID owns right now. A failed call keeps the
  // cache as it was — a flaky network must never take a purchase away.
  async function refresh() {
    if (!ready) return entitled();
    try {
      const res = await plugin.getPurchases({ onlyCurrentEntitlements: true });
      const ids = [];
      ((res && res.purchases) || []).forEach(t => {
        if (!t || !t.productIdentifier) return;
        if (t.revocationDate) return;                 // refunded
        if (t.productIdentifier === PRO_YEARLY && t.isActive === false) return;
        if (!ids.includes(t.productIdentifier)) ids.push(t.productIdentifier);
      });
      writeCache(ids);
      note = 'ok';
      emit();
    } catch (e) {
      note = 'refresh failed: ' + (e && e.message || e);
    }
    return entitled();
  }

  // ── Start-up ──────────────────────────────────────────────────────────────
  // `ids` is every product id the app sells; app-ui.js passes them in from the
  // catalog so this file never needs editing when a product is added.
  async function init(ids) {
    plugin = findPlugin();
    if (!plugin) return false;
    try {
      const all = Array.from(new Set([PRO_YEARLY, PRO_LIFETIME].concat(ids || [])));
      const res = await plugin.getProducts({ productIdentifiers: all });
      ((res && res.products) || []).forEach(p => { if (p && p.identifier) products[p.identifier] = p; });
      // registerPlugin() hands back a proxy even when the native half is
      // missing, so `ready` waits for a real answer (same rule as the TTS).
      ready = true;
      note = Object.keys(products).length ? 'ok' : 'plugin answered, but no products came back (not in App Store Connect / no StoreKit file?)';
      try {
        plugin.addListener('transactionUpdated', () => { refresh(); });
      } catch (e) {}
      await refresh();
      return true;
    } catch (e) {
      ready = false;
      note = 'plugin not reachable: ' + (e && e.message || e);
      return false;
    }
  }

  // ── Actions ───────────────────────────────────────────────────────────────
  function isCancel(e) {
    const m = String((e && (e.message || e.code)) || e || '').toLowerCase();
    return m.includes('cancel');
  }

  // Resolves { ok } on success, { cancelled } when the user backed out, or
  // { error } with a message. Never throws, so a caller cannot get stuck.
  async function buy(productId) {
    if (!ready) return { error: 'Purchases are not available right now.' };
    try {
      await plugin.purchaseProduct({
        productIdentifier: productId,
        productType: productId === PRO_YEARLY ? 'subs' : 'inapp',
        quantity: 1,
      });
      await refresh();
      return { ok: true };
    } catch (e) {
      if (isCancel(e)) return { cancelled: true };
      return { error: (e && e.message) || 'The purchase did not go through.' };
    }
  }

  async function restore() {
    if (!ready) return { error: 'Purchases are not available right now.' };
    try {
      await plugin.restorePurchases();
    } catch (e) {
      // Restoring can fail while the entitlement check still works (StoreKit 2
      // syncs by itself); refresh either way and report what we have.
    }
    const ids = await refresh();
    return { ok: true, count: ids.length };
  }

  // Apple's own sheet for offer codes (newsletter gifts, codes said out loud).
  // A redeemed code arrives as a normal transaction, so the transactionUpdated
  // listener unlocks it; the refreshes below catch it if the event is missed.
  async function redeemCode() {
    if (!ready) return { error: 'Codes can only be redeemed in the iPhone app.' };
    try {
      await plugin.presentOfferCodeRedeemSheet();
      setTimeout(refresh, 3000); setTimeout(refresh, 15000);
      return { ok: true };
    } catch (e) {
      return { error: 'The code sheet could not open. It needs iOS 16.3 or later.' };
    }
  }

  async function manage() {
    if (!ready) return false;
    try { await plugin.manageSubscriptions(); return true; } catch (e) { return false; }
  }

  // ── Product info ──────────────────────────────────────────────────────────
  function product(id) { return products[id] || null; }
  function priceString(id) { const p = products[id]; return p ? p.priceString : null; }

  function periodWords(per) {
    if (!per) return null;
    const n = per.numberOfUnits || per.value || 1;
    const unit = per.unitString || ['day', 'week', 'month', 'year'][per.unit];
    if (!unit || unit === 'unknown') return null;
    return n === 1 ? unit : n + ' ' + unit + 's';
  }

  // "week" / "2 weeks" for a subscription's free trial, or null when there is
  // none or StoreKit says this Apple ID has already used it (introEligibility
  // 1 = ineligible). Apple rejects apps that promise a trial the buyer will
  // not get, so the screen only offers one when this returns text.
  function trialText(id) {
    const p = products[id];
    const intro = p && p.introductoryPrice;
    if (!intro || (intro.price && intro.price > 0)) return null;
    if (p.introEligibility === 1) return null;
    return periodWords(intro.subscriptionPeriod);
  }

  // "year" for the yearly plan, read from StoreKit rather than assumed.
  function periodText(id) {
    const p = products[id];
    return p ? periodWords(p.subscriptionPeriod) : null;
  }

  // Formats a sum in the store's own currency, for the kits' "bought
  // separately" line. Falls back to null when prices are not loaded.
  function formatSum(ids) {
    let sum = 0, cur = null;
    for (const id of ids) {
      const p = products[id];
      if (!p || typeof p.price !== 'number') return null;
      sum += p.price; cur = cur || p.currencyCode;
    }
    if (!cur) return null;
    try {
      return new Intl.NumberFormat(undefined, { style: 'currency', currency: cur, maximumFractionDigits: 0 }).format(sum);
    } catch (e) { return null; }
  }

  function proActive() {
    const ids = entitled();
    return ids.includes(PRO_YEARLY) || ids.includes(PRO_LIFETIME);
  }

  window.DSIAP = {
    PRO_YEARLY, PRO_LIFETIME,
    available: () => ready,
    native: isNativePlatform,
    init, refresh, buy, restore, manage, redeemCode,
    entitled, proActive, product, priceString, trialText, periodText, formatSum,
    onChange: fn => { if (typeof fn === 'function') listeners.push(fn); },
    diagnostics: () => ({ nativePlatform: isNativePlatform(), pluginFound: !!plugin, ready, note,
                          products: Object.keys(products), entitled: entitled() }),
  };
})();
