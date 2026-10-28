// app-voices.js — Library → Voices: the studio voices on this phone (beta, v1.29.85)
//
// A tab after Favorites, in the iPhone app (v1.29.86: no longer behind a
// developer switch). v1.29.88: also in the web app, as a developer preview
// (downloads kept in the browser, played with the screen on — DSWebStudio in
// mode-engine.js). The release build turns the web part off.
//
//   • One row per pack that HAS studio voices (the list comes from index.json
//     on voices.deckstack.app — see DSStudio in mode-engine.js). Packs the user
//     cannot see are left out (Extended not bought, program packs not yet
//     reached); packs they can see but not use show a Pro badge, the same badge
//     as in the Packs tab. Studio voices are a Pro feature like handsfree
//     itself — except First Strategies, which is open to everyone.
//   • Row status: the voices downloaded for that pack and their size, or
//     "Not downloaded". A tap opens a sheet: every voice with Download (size)
//     or Remove, and "Remove all voices for this pack".
//   • The gear in the banner opens Voice settings: download over mobile data
//     (off by default), space used, download all (v1.29.88), remove everything.
//
// The same downloads are also offered in each handsfree settings sheet
// (app-handsfree.js, renderStudioPanels). Both read and write through DSStudio.

(function initVoicesTab() {
  const S = window.DSStudio;
  if (!S || typeof LIB_TABS === 'undefined') return;

  // ── Build the tab, its button and the gear (once) ─────────────────────────
  const subnav = document.getElementById('librarySubnav');
  const after  = document.getElementById('libTabFavorites');
  const banner = document.getElementById('libBannerPlusBtn');
  if (!subnav || !after || !banner) return;

  const tabBtn = document.createElement('button');
  tabBtn.className = 'library-subnav-btn';
  tabBtn.dataset.libTab = 'voices';
  tabBtn.textContent = 'Voices';
  tabBtn.style.display = 'none';
  subnav.appendChild(tabBtn);
  tabBtn.addEventListener('click', () => showLibraryTab('voices'));

  const content = document.createElement('div');
  content.className = 'library-tab-content';
  content.id = 'libTabVoices';
  content.style.display = 'none';
  after.insertAdjacentElement('afterend', content);

  const gear = document.createElement('button');
  gear.className = 'lib-banner-btn';
  gear.id = 'libBannerGearBtn';
  gear.title = 'Voice settings';
  gear.setAttribute('aria-label', 'Voice settings');
  // The same gear as on the home screen and in the training modes (v1.29.86).
  gear.innerHTML = '<svg width="22" height="22" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 4.5h6l.7 3a7.5 7.5 0 0 1 2.3 1.35l2.9-.9 3 5.2-2.3 1.8a7.5 7.5 0 0 1 0 2.1l2.3 1.8-3 5.2-2.9-.9a7.5 7.5 0 0 1-2.3 1.35l-.7 3H13l-.7-3a7.5 7.5 0 0 1-2.3-1.35l-2.9.9-3-5.2 2.3-1.8a7.5 7.5 0 0 1 0-2.1L4.1 14.1l3-5.2 2.9.9A7.5 7.5 0 0 1 12.3 8Z"/><circle cx="16" cy="16" r="4.5"/></svg>';
  gear.style.display = 'none';
  banner.insertAdjacentElement('beforebegin', gear);
  gear.addEventListener('click', openSettingsSheet);

  LIB_TABS.voices = 'libTabVoices';
  TAB_LABELS.voices = 'Voices';

  const origShow = showLibraryTab;
  showLibraryTab = function (tab) {           // eslint-disable-line no-global-assign
    origShow(tab);
    gear.style.display = tab === 'voices' ? '' : 'none';
    if (tab === 'voices') render();
  };

  function on() { return !!S.available(); }
  function sync() {
    const visible = on();
    tabBtn.style.display = visible ? '' : 'none';
    if (!visible && typeof activeLibraryTab !== 'undefined' && activeLibraryTab === 'voices') showLibraryTab('packs');
  }
  window.dsVoicesSync = sync;
  // The native voice probe answers a moment after start.
  [0, 800, 2500].forEach(ms => setTimeout(sync, ms));

  // ── Helpers ───────────────────────────────────────────────────────────────
  const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  const mb  = b => (b / 1048576).toFixed(b < 10485760 ? 1 : 0) + ' MB';
  const short = v => S.label(v).split(' (')[0];
  function packCard(pack) { return document.querySelector('#libTabPacks .collection-card[data-key="' + String(pack).replace(/["\\]/g, '\\$&') + '"]'); }
  function packName(pack) { const c = packCard(pack); return (c && c.dataset.label) || pack; }
  function packOrder(pack) {
    const cards = [...document.querySelectorAll('#libTabPacks .collection-card[data-key]')];
    const i = cards.findIndex(c => c.dataset.key === pack);
    return i < 0 ? 1e6 : i;
  }
  // 'hidden' | 'pro' | 'ok'
  function access(pack) {
    // v1.29.87 — a pack that is not in THIS build is never listed. The release
    // build strips the complete-level packs entirely, and accessLevel treats a
    // pack it has no config for as 'available' — so a studio voice recorded
    // for a complete pack would otherwise show up for every customer.
    if (!packCard(pack)) return 'hidden';
    const a = window.accessLevel;
    if (!a) return 'ok';
    const vis = a.packVisibility ? a.packVisibility(pack) : 'available';
    if (vis === 'hidden') return 'hidden';
    if (vis !== 'available') return 'pro';
    const level = a.getLevel ? a.getLevel() : 'pro';
    if (level === 'freemium' && pack !== 'firststrategies') return 'pro';
    return 'ok';
  }
  function afterChange() {
    if (window.initHandsfreeVoicePickers) window.initHandsfreeVoicePickers();
    if (window.renderStudioPanels) window.renderStudioPanels();
    if (activeLibraryTab === 'voices') render();
  }

  // ── The list ──────────────────────────────────────────────────────────────
  let openList = [];
  // v1.30.01 (Rikard 2026-10-28) — "Open in Handsfree" in a pack's sheet: the
  // mode screen for that pack, already turned to handsfree. Next goes through
  // the packs on the Voices tab; Back returns to the Voices tab.
  function openInHandsfree(pack) {
    const label = packName(pack);
    if (window.accessLevel && window.accessLevel.canAccess && !window.accessLevel.canAccess(pack)) { showModeScreen(pack, label); return; }
    const list = openList.some(p => p.key === pack) ? openList : [{ key: pack, label }];
    if (typeof setPackContext === 'function') setPackContext(list, pack, 'voices');
    window._returningFromTraining = true;          // keep the mode screen from flipping back to Standard
    showModeScreen(pack, label);
    if (window._setHfToggle) window._setHfToggle(true);
  }
  async function render() {
    if (!on()) { content.innerHTML = ''; return; }
    if (!content.innerHTML) content.innerHTML = '<div class="voices-note">Looking for studio voices…</div>';
    const [idx, inst] = await Promise.all([S.index(), S.installed()]);
    if (idx.error) {
      content.innerHTML = '<div class="voices-note">' + esc(idx.error) + '</div>' +
        '<button class="voices-retry" type="button">Try again</button>';
      content.querySelector('.voices-retry').addEventListener('click', async () => { await S.index(true); render(); });
      return;
    }
    const byPack = {};
    (idx.voices || []).forEach(v => Object.keys(v.packs || {}).forEach(p => {
      (byPack[p] = byPack[p] || []).push({ voice: v.voice, bytes: v.packs[p].bytes });
    }));
    const packs = Object.keys(byPack)
      .map(p => ({ pack: p, acc: access(p) }))
      .filter(x => x.acc !== 'hidden')
      .sort((a, b) => packOrder(a.pack) - packOrder(b.pack));
    const row = ({ pack, acc }) => {
      const mine = inst.filter(r => r.pack === pack);
      const stale = mine.some(r => S.outdated(idx, r));
      // v1.29.86 — one symbol instead of names and sizes (Rikard): a cloud
      // with an arrow = can be downloaded, a green tick = something is on
      // the phone. Which voices, and how big, is in the sheet behind a tap.
      let status;
      if (acc === 'pro') status = '<span class="pack-lock-badge pack-lock-badge--pro">Pro</span>';
      // v1.29.89 — a newer recording on the server: orange round arrow.
      else if (stale) status = '<i class="ti ti-refresh voices-icon voices-update" aria-label="Update available"></i>';
      else if (mine.length) status = '<i class="ti ti-circle-check voices-icon voices-ok" aria-label="Downloaded"></i>';
      else status = '<i class="ti ti-cloud-download voices-icon" aria-label="Not downloaded"></i>';
      // v1.30.00 — a locked row is grey like a locked pack on Packs, without the arrow
      return '<button class="voices-row' + (acc === 'pro' ? ' voices-row--locked' : '') + '" type="button" data-pack="' + esc(pack) + '" data-acc="' + acc + '">' +
               '<span class="voices-row-main"><span class="voices-row-name">' + esc(packName(pack)) + '</span></span>' +
               '<span class="voices-row-side">' + status + (acc === 'pro' ? '' : '<span class="voices-chev" aria-hidden="true">›</span>') + '</span>' +
             '</button>';
    };
    // v1.30.00 (Rikard 2026-10-28) — the same headings as the Packs tab:
    // freemium gets "Available free studio voices", then "Pro studio voices";
    // everyone else "Available studio voices". The explanation moves to the
    // bottom, under the list.
    const open = packs.filter(x => x.acc !== 'pro'), locked = packs.filter(x => x.acc === 'pro');
    const free = !!(window.accessLevel && window.accessLevel.getLevel && window.accessLevel.getLevel() === 'freemium');
    const head = t => '<div class="tab-info voices-head">' + t + '</div>';
    let list = '';
    if (!packs.length) list = '<div class="voices-note">No studio voices yet.</div>';
    else {
      list = head(free ? 'Available free studio voices' : 'Available studio voices') + open.map(row).join('');
      if (locked.length) list += (free ? head('Pro studio voices') : '') + locked.map(row).join('');
    }
    // v1.30.01 — the packs that can be opened from here, in this order: the
    // mode screen's next arrow walks this list (Rikard 2026-10-28).
    openList = open.map(x => ({ key: x.pack, label: packName(x.pack) }));
    content.innerHTML = list +
      '<div class="voices-note voices-foot">Download a voice, then choose it under Voice in the handsfree settings.</div>' +
      '<div class="voices-note">More packs get studio voices over time. Studio voices are AI-generated.</div>';
    content.querySelectorAll('.voices-row').forEach(r => r.addEventListener('click', () => {
      // v1.30.00 — like a locked pack: a short message, not the Upgrade screen
      if (r.dataset.acc === 'pro') { if (window.showToast) window.showToast('This voice requires Pro. Upgrade to unlock it.'); return; }
      openPackSheet(r.dataset.pack, byPack[r.dataset.pack]);
    }));
  }

  // ── Sheets ────────────────────────────────────────────────────────────────
  function sheet(html) {
    let b = document.getElementById('voicesSheetBackdrop');
    if (b) b.remove();
    b = document.createElement('div');
    b.id = 'voicesSheetBackdrop';
    b.className = 'fol-sheet-backdrop';
    b.innerHTML = '<div class="fol-sheet voices-sheet">' + html + '<button class="fol-sheet-btn fol-cancel" data-close>Close</button></div>';
    document.body.appendChild(b);
    b.addEventListener('click', e => { if (e.target === b || e.target.hasAttribute('data-close')) b.remove(); });
    return b;
  }

  async function openPackSheet(pack, voices) {
    const [inst, idx] = await Promise.all([S.installed(), S.index()]);
    const mineRecs = inst.filter(r => r.pack === pack);
    const have = new Set(mineRecs.map(r => r.voice));
    const stale = new Set(mineRecs.filter(r => S.outdated(idx, r)).map(r => r.voice));
    const rows = voices.map(v => {
      const pct = S.progress[v.voice + '/' + pack];
      const act = pct != null
        ? '<span class="studio-state">Downloading ' + pct + ' %</span>'
        : stale.has(v.voice)
          ? '<button class="studio-btn" data-act="download" data-voice="' + esc(v.voice) + '">Update · ' + mb(v.bytes) + '</button><button class="studio-btn studio-btn--quiet" data-act="remove" data-voice="' + esc(v.voice) + '">Remove</button>'
        : have.has(v.voice)
          ? '<span class="studio-state studio-ok">✓</span><button class="studio-btn studio-btn--quiet" data-act="remove" data-voice="' + esc(v.voice) + '">Remove</button>'
          : '<button class="studio-btn" data-act="download" data-voice="' + esc(v.voice) + '">Download · ' + mb(v.bytes) + '</button>';
      return '<div class="studio-row"><span class="studio-name">' + esc(S.label(v.voice)) + '</span><span class="studio-actions">' + act + '</span></div>';
    }).join('');
    const b = sheet('<div class="fol-sheet-title">' + esc(packName(pack)) + '</div>' + rows +
      // v1.30.02 — light like Download all, and always there: the iPhone voice works without a download
      '<button class="fol-sheet-btn voices-sheet-gap voices-open-btn" data-act="open">Open in Handsfree</button>' +
      (have.size ? '<button class="fol-sheet-btn fol-danger-btn voices-sheet-gap" data-act="remove-all">Remove all voices for this pack</button>' : '') +
      (S.web() ? '' : '<div class="voices-note">Wi-Fi only unless mobile data is allowed in Voice settings (⚙).</div>'));
    b.addEventListener('click', async e => {
      const btn = e.target.closest('[data-act]');
      if (!btn || btn.disabled) return;
      if (btn.dataset.act === 'open') { b.remove(); openInHandsfree(pack); return; }
      btn.disabled = true;
      const act = btn.dataset.act, voice = btn.dataset.voice;
      if (act === 'download') {
        const tick = setInterval(() => { btn.textContent = 'Downloading ' + (S.progress[voice + '/' + pack] || 0) + ' %'; }, 300);
        try { await S.download(voice, pack); }
        catch (err) {
          const msg = (err && err.message) || '';
          if (window.showToast) window.showToast(/offline|not connected|cellular|internet/i.test(msg) && !S.cellular()
            ? 'No Wi-Fi. Connect to Wi-Fi, or allow mobile data in Voice settings.'
            : 'The download did not finish. Try again.');
        } finally { clearInterval(tick); }
      } else if (act === 'remove') {
        await S.remove(voice, pack);
      } else if (act === 'remove-all') {
        for (const v of have) await S.remove(v, pack);
      }
      afterChange();
      if (document.getElementById('voicesSheetBackdrop')) openPackSheet(pack, voices);
    });
  }

  // ── Download all (v1.29.88) ───────────────────────────────────────────────
  // Every voice of every pack the user can use ('ok') that is not on the
  // phone yet, one after the other. What is already there is skipped, so
  // nothing is downloaded twice. Runs on if the sheet is closed; reopening
  // the sheet shows how far it has come.
  let bulk = null;                    // { done, total, current: 'voice/pack' } while running
  async function missingDownloads() {
    const [idx, inst] = await Promise.all([S.index(), S.installed()]);
    if (idx.error) return { error: idx.error, list: [] };
    // v1.29.89 — an out-of-date download counts as missing (Update).
    const have = new Set(inst.filter(r => !S.outdated(idx, r)).map(r => r.voice + '/' + r.pack));
    const any = new Set(inst.map(r => r.voice + '/' + r.pack));
    const list = [];
    (idx.voices || []).forEach(v => Object.keys(v.packs || {}).forEach(p => {
      const k = v.voice + '/' + p;
      if (access(p) === 'ok' && !have.has(k)) list.push({ voice: v.voice, pack: p, bytes: v.packs[p].bytes || 0, update: any.has(k) });
    }));
    list.sort((a, b) => packOrder(a.pack) - packOrder(b.pack));
    return { list };
  }
  function bulkText() {
    if (!bulk) return '';
    const pct = bulk.current != null ? (S.progress[bulk.current] || 0) : 0;
    return 'Downloading ' + Math.min(bulk.done + 1, bulk.total) + ' of ' + bulk.total + ' · ' + pct + ' %';
  }
  async function downloadAll(list) {
    bulk = { done: 0, total: list.length, current: null };
    let failed = null;
    for (const it of list) {
      bulk.current = it.voice + '/' + it.pack;
      try { await S.download(it.voice, it.pack); }
      catch (err) { failed = err; break; }
      bulk.done++;
      afterChange();
    }
    bulk = null;
    if (failed && window.showToast) {
      const msg = (failed && failed.message) || '';
      window.showToast(/offline|not connected|cellular|internet/i.test(msg) && !S.cellular() && !S.web()
        ? 'No Wi-Fi. Connect to Wi-Fi, or allow mobile data above.'
        : 'The download did not finish. Try again — what is done is kept.');
    }
    afterChange();
    if (document.getElementById('voicesSettingsOverlay')) openSettingsSheet();
  }

  // v1.29.97 (Rikard) — Voice settings looks like the other settings panels:
  // title, rows, buttons, the note, the guide, the version, and Done.
  function settingsPanel(html) {
    let o = document.getElementById('voicesSettingsOverlay');
    if (o) o.remove();
    o = document.createElement('div');
    o.id = 'voicesSettingsOverlay';
    o.className = 'settings-overlay open';
    const ver = typeof VERSION !== 'undefined' ? VERSION : '';
    o.innerHTML = '<div class="settings-panel voices-settings">' + html +
      '<div class="settings-version">' + ver + '</div>' +
      '<button class="settings-close" type="button" data-close>Done</button></div>';
    document.body.appendChild(o);
    o.addEventListener('click', e => { if (e.target === o || e.target.hasAttribute('data-close')) o.remove(); });
    return o;
  }

  async function openSettingsSheet() {
    const [inst, miss] = await Promise.all([S.installed(), missingDownloads()]);
    const used = inst.reduce((s, r) => s + (r.bytes || 0), 0);
    const need = miss.list.reduce((s, r) => s + r.bytes, 0);
    let allBtn;
    if (bulk) allBtn = '<button class="fol-sheet-btn voices-sheet-gap voices-all-btn" data-act="download-all" disabled>' + bulkText() + '</button>';
    else if (miss.error) allBtn = '';
    else if (miss.list.length) allBtn = '<button class="fol-sheet-btn voices-sheet-gap voices-all-btn" data-act="download-all">' +
      (miss.list.every(x => x.update) ? 'Update all studio voices · ' : 'Download all studio voices · ') + mb(need) + '</button>';
    else allBtn = '<div class="voices-note">All studio voices you have access to are downloaded and up to date.</div>';
    const b = settingsPanel(
      '<div class="settings-title">Voice settings</div>' +
      (S.web() ? '' :
      '<div class="settings-row voices-setting"><label>Download over mobile data</label>' +
        '<label class="toggle"><input type="checkbox" id="voicesCellular"' + (S.cellular() ? ' checked' : '') + '><span class="toggle-slider"></span></label></div>') +
      '<div class="settings-row voices-setting"><label>Space used</label><span class="voices-status">' +
        (inst.length ? mb(used) + ' · ' + inst.length + (inst.length === 1 ? ' download' : ' downloads') : 'Nothing downloaded') + '</span></div>' +
      allBtn +
      (inst.length ? '<button class="fol-sheet-btn fol-danger-btn voices-sheet-gap" data-act="remove-everything"' + (bulk ? ' disabled' : '') + '>Remove all downloaded voices</button>' : '') +
      '<div class="voices-note">' + (S.web()
        ? 'Developer preview: the voices are kept in this browser and play while the screen is on.'
        : 'Studio voices are AI-generated. Downloaded voices work offline and are not backed up to iCloud; you can download them again at any time.') + '</div>' +
      // v1.29.96 — the guide to this tab, under the note
      '<div class="gd-settings-head">Guides</div>' +
      '<div class="settings-row voices-setting"><label>The Voices tab</label><button class="gd-btn" type="button" data-act="guide">View</button></div>');
    b.querySelector('[data-act="guide"]').addEventListener('click', e => {
      e.stopPropagation(); b.remove();
      if (window.showGuide) window.showGuide('voices-tab');
    });
    const cell = b.querySelector('#voicesCellular');
    if (cell) cell.addEventListener('change', e => S.setCellular(e.target.checked));
    const dl = b.querySelector('[data-act="download-all"]');
    if (dl && bulk) {
      const tick = setInterval(() => {
        if (!document.body.contains(dl) || !bulk) { clearInterval(tick); return; }
        dl.textContent = bulkText();
      }, 300);
    } else if (dl) dl.addEventListener('click', () => {
      dl.disabled = true;
      const run = downloadAll(miss.list);
      openSettingsSheet();
      return run;
    });
    const all = b.querySelector('[data-act="remove-everything"]');
    if (all) all.addEventListener('click', async () => {
      all.disabled = true; all.textContent = 'Removing…';
      for (const r of inst) await S.remove(r.voice, r.pack);
      afterChange();
      openSettingsSheet();
    });
  }
})();
