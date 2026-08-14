// mode-engine.js — Deckstack mode engine
// Part of Deckstack v1.25.0
//
// A single shared foundation for all training modes.
// Standard modes are created with DS.createCardMode(config),
// handsfree modes with DS.createHandsfreeMode(config).
//
// The engine owns: state, rendering, flip, swipe, buttons, keyboard,
// feedback/access-level bars, progress bar hooks, progress tracking,
// and bundle-aware reload. Mode files only declare *what* a mode shows,
// never *how* cards behave.
//
// Load order: after all data files, BEFORE app-core.js.
// No ES modules — classic global script (GitHub Pages).

const DS = (function () {
  'use strict';

  // ── Registry ────────────────────────────────────────────────────────────
  // All created modes, keyed by screenId. Used for reload + keyboard dispatch.
  const modesByScreen = {};
  const cardModes = [];   // standard card modes (keyboard-enabled)

  const $ = id => document.getElementById(id);

  // ── Shared helpers ──────────────────────────────────────────────────────

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Bundle-aware group loader.
  // source: e.g. collections / challengesCollections / memorizeCollections
  // itemsProp: 'inputs' or 'cards'
  // Groups whose items are all filtered away are dropped; if *everything*
  // is filtered away we fall back to the unfiltered data (never a blank screen).
  function loadGroups(source, packKey, itemsProp) {
    const raw = (source && source[packKey]) || [];
    if (!raw.length || !window.filterInputsByBundle) return raw;
    const filtered = raw
      .map(g => Object.assign({}, g, {
        [itemsProp]: window.filterInputsByBundle(g[itemsProp] || [], packKey)
      }))
      .filter(g => g[itemsProp].length);
    return filtered.length ? filtered : raw;
  }

  // Attach the standard tap/swipe gesture set to a card element.
  // handlers: { tap, left, right, up, down, enabled? }
  function attachSwipe(el, handlers, opts) {
    if (!el) return;
    const passive = !!(opts && opts.passive);
    let sx = 0, sy = 0, st = 0, moved = false;
    const on = () => !handlers.enabled || handlers.enabled();

    el.addEventListener('touchstart', e => {
      if (!on()) return;
      sx = e.touches[0].clientX; sy = e.touches[0].clientY;
      st = Date.now(); moved = false;
      if (!passive) e.preventDefault();
    }, { passive });

    el.addEventListener('touchmove', e => {
      if (!on()) return;
      if (Math.abs(e.touches[0].clientX - sx) > 10 ||
          Math.abs(e.touches[0].clientY - sy) > 10) moved = true;
      if (!passive) e.preventDefault();
    }, { passive });

    el.addEventListener('touchend', e => {
      if (!on()) return;
      if (!passive) e.preventDefault();
      const dx = e.changedTouches[0].clientX - sx;
      const dy = e.changedTouches[0].clientY - sy;
      const adx = Math.abs(dx), ady = Math.abs(dy);
      if (!moved && Date.now() - st < 500) { handlers.tap && handlers.tap(); return; }
      if (moved && adx > 40 && adx > ady) { (dx > 0 ? handlers.right : handlers.left)(); return; }
      if (moved && ady > 40 && ady > adx) { (dy > 0 ? handlers.down : handlers.up)(); return; }
    }, { passive });
  }

  function bindTapButton(el, fn, stop) {
    if (!el) return;
    el.addEventListener('click', fn);
    el.addEventListener('touchend', e => {
      if (stop) e.stopPropagation();
      e.preventDefault();
      fn();
    }, { passive: false });
  }

  // ── Info overlay (tap the title to read the strategy description) ───────
  function setupInfoOverlay(cfg, getText) {
    if (!cfg) return { open() {}, close() {} };
    const panel = $(cfg.panel), text = $(cfg.text);
    const trigger = $(cfg.trigger), closeBtn = $(cfg.close);
    if (!panel || !text) return { open() {}, close() {} };

    let open = false;
    function doOpen() {
      if (open) { doClose(); return; }
      open = true;
      // The user found the name — remove the "tap to learn" hint instantly
      if (window.hideTapHint) hideTapHint();
      text.textContent = getText() || 'No description available.';
      panel.classList.add('visible');
    }
    function doClose() {
      open = false;
      panel.classList.remove('visible');
      panel.scrollTop = 0;
    }
    if (trigger) trigger.addEventListener('click', doOpen);
    if (closeBtn) closeBtn.addEventListener('click', e => { e.stopPropagation(); doClose(); });
    // Let the panel scroll without triggering card gestures
    ['touchstart', 'touchmove', 'touchend'].forEach(ev =>
      panel.addEventListener(ev, e => e.stopPropagation(), { passive: true }));
    return { open: doOpen, close: doClose };
  }

  // ── Per-card notes panel (v1.27.03) ──────────────────────────────────────
  // Opened by three taps on the hint line under the card. Covers the card the
  // same way the description panel does, but is writable.
  //
  // Three things it has to get right:
  //   · save before it can be lost — on every keystroke, on close, on
  //     navigation, and on the page being hidden (iOS kills backgrounded web
  //     views without warning)
  //   · swallow touch events, or writing in it swipes the card underneath
  //   · follow the card: setKey() is called on every render, so the panel
  //     always shows the note for the side you are looking at
  function setupNotePanel(cfg) {
    const noop = { setKey() {}, close() {}, isOpen: () => false };
    if (!cfg) return noop;
    const panel = $(cfg.panel), area = $(cfg.area);
    const closeBtn = $(cfg.close), hint = $(cfg.hint);
    if (!panel || !area) return noop;

    let open = false, key = null;

    function save() {
      if (!key || !window.noteSet) return;
      noteSet(key, area.value);
      markHint();
    }
    function markHint() {
      if (!hint) return;
      hint.classList.toggle('has-note', !!(key && window.noteGet && noteGet(key).trim()));
    }
    function doOpen() {
      if (!key) return;
      if (open) { doClose(); return; }
      open = true;
      area.value = window.noteGet ? noteGet(key) : '';
      panel.classList.add('visible');
      // let the panel land before the keyboard is asked for, or iOS scrolls
      // the whole screen instead of the field
      setTimeout(() => area.focus(), 60);
    }
    function doClose() {
      if (!open) return;
      save();
      open = false;
      area.blur();
      panel.classList.remove('visible');
    }
    function setKey(k) {
      if (open && key && k !== key) save();
      key = k;
      if (open) area.value = window.noteGet ? noteGet(key) : '';
      markHint();
    }

    area.addEventListener('input', save);
    if (closeBtn) closeBtn.addEventListener('click', e => { e.stopPropagation(); doClose(); });

    // three taps on the hint line
    let taps = 0, timer = null;
    if (hint) {
      const onTap = e => {
        e.stopPropagation();
        taps++;
        clearTimeout(timer);
        timer = setTimeout(() => { taps = 0; }, 1200);
        if (taps >= 3) { taps = 0; doOpen(); }
      };
      hint.addEventListener('click', onTap);
    }

    // the card underneath must not see any of this
    ['touchstart', 'touchmove', 'touchend', 'click'].forEach(ev =>
      panel.addEventListener(ev, e => e.stopPropagation(), { passive: true }));

    // a backgrounded web view can be killed without another event firing
    document.addEventListener('visibilitychange', () => { if (document.hidden) save(); });

    return { setKey, close: doClose, isOpen: () => open };
  }

  // ═════════════════════════════════════════════════════════════════════════
  // STANDARD CARD MODE
  // ═════════════════════════════════════════════════════════════════════════
  //
  // config = {
  //   id:            'modeChallenges'          — mode-card button id (registerMode)
  //   screenId:      'challScreen'
  //   els: { card, inner, title, front, back, counter, subCounter,
  //          prevGroupBtn, nextGroupBtn, prevItemBtn, nextItemBtn,
  //          closeBtn, settingsBtn }            — all element IDs (strings)
  //   getGroups():   array of groups (already bundle-filtered)
  //   getItems(g):   items in a group
  //   groupTitle(g), itemFront(item, g), itemBack(item, g)
  //   info:          { panel, text, trigger, close, getText(group) } | null
  //   shuffle:       true  — obey shuffleStrategies/shuffleInputs checkboxes
  //   fb:            { id, groupKey(g, gi) }   — feedback-bar key parts | null
  //   al:            { id, groupKey(g, gi) }   — access-level bar key parts | null
  //   barPrefix:     'chall'                    — fb-chall-front / al-chall-front etc.
  //   keyboard:      true
  // }
  function createCardMode(cfg) {
    const els = {};
    for (const k in cfg.els) els[k] = $(cfg.els[k]);

    const mode = {
      id: cfg.id,
      screenId: cfg.screenId,
      kind: 'card',
      groups: [], groupOrder: [], itemOrders: [],
      gi: 0, ii: 0,
      flipped: false, animating: false,
      _pbBound: false,
    };

    const group = () => mode.groups[mode.groupOrder[mode.gi]];
    const items = g => cfg.getItems(g) || [];
    const item  = () => items(group())[mode.itemOrders[mode.groupOrder[mode.gi]][mode.ii]];

    const info = setupInfoOverlay(cfg.info, () =>
      cfg.info && cfg.info.getText ? cfg.info.getText(group()) : (group() && group().description));
    const note = setupNotePanel(cfg.note);

    // ── Orders (shuffle) ───────────────────────────────────────────────────
    function buildOrders() {
      const shG = cfg.shuffle && $('shuffleStrategies') && $('shuffleStrategies').checked;
      const shI = cfg.shuffle && $('shuffleInputs') && $('shuffleInputs').checked;
      const base = mode.groups.map((_, i) => i);
      mode.groupOrder = shG ? shuffle(base) : base;
      mode.itemOrders = mode.groups.map(g => {
        const idx = items(g).map((_, i) => i);
        return shI ? shuffle(idx) : idx;
      });
    }

    // ── Guide text (v1.26.22) ──────────────────────────────────────────────────
    // Short framing lines shown above the card text, authored per strategy
    // and mode (guideFront / guideBack on the group object). The toggle is
    // remembered per pack AND per mode: absence of the key means ON.
    const guideKey = () => 'guideText:' + cfg.id + ':' +
      (typeof activeCollectionKey !== 'undefined' ? activeCollectionKey : '');
    function guideEnabled() { return localStorage.getItem(guideKey()) !== 'off'; }
    function guideElFor(anchor) {
      if (!anchor || !anchor.parentNode) return null;
      const prev = anchor.previousElementSibling;
      if (prev && prev.classList && prev.classList.contains('card-guide')) return prev;
      const el = document.createElement('div');
      el.className = 'card-guide';
      anchor.parentNode.insertBefore(el, anchor);
      return el;
    }
    function renderGuide(g, it) {
      // Per-card guide text (v1.26.32): the card's own guideFront/guideBack
      // wins when present; otherwise the strategy-level value applies
      // (which the editor has already resolved against the mode default).
      const on = guideEnabled();
      const gf = guideElFor(els.front), gb = guideElFor(els.back);
      if (gf) {
        const t = on ? ((it && it.guideFront) || (g && g.guideFront) || '') : '';
        gf.textContent = t; gf.style.display = t ? '' : 'none';
      }
      if (gb) {
        const t = on ? ((it && it.guideBack) || (g && g.guideBack) || '') : '';
        gb.textContent = t; gb.style.display = t ? '' : 'none';
      }
    }
    mode._setGuide = function (on) {
      if (on) localStorage.removeItem(guideKey());
      else localStorage.setItem(guideKey(), 'off');
      render();
    };
    // One shared toggle in #settingsOverlay dispatches to the active mode
    const guideToggle = $('showGuideText');
    if (guideToggle && !guideToggle._guideBound) {
      guideToggle._guideBound = true;
      guideToggle.addEventListener('change', function () {
        const m = window._guideActiveMode;
        if (m && m._setGuide) m._setGuide(this.checked);
      });
    }

    // ── Render ─────────────────────────────────────────────────────────────
    function render() {
      const g = group();
      if (!g) return;
      const it = item();
      if (els.title)      els.title.textContent = cfg.groupTitle(g);
      if (els.front)      els.front.textContent = cfg.itemFront(it, g);
      if (els.back)       els.back.textContent  = cfg.itemBack(it, g);
      renderGuide(g, it);
      // Continue card mirrors the training progress bar (same formula as
      // pbUpdate: position / (total - 1)) — list 7 #1
      if (window.progSetPosition && typeof activeCollectionKey !== 'undefined') {
        progSetPosition(activeCollectionKey,
          (typeof activeCollectionLabel !== 'undefined' && activeCollectionLabel) || activeCollectionKey,
          mode.gi, mode.groups.length);
      }
      if (els.counter)    els.counter.textContent = `${mode.gi + 1} / ${mode.groups.length}`;
      if (els.subCounter) els.subCounter.textContent =
        `${mode.ii + 1} / ${mode.itemOrders[mode.groupOrder[mode.gi]].length}`;
      flip(false, false);
      renderBars();
      renderPb();
    }

    // ── Feedback / access-level bars, and the note key ─────────────────────
    //
    // v1.27.03 — THE INDICES CHANGED HERE, and it was a bug fix rather than a
    // refactor. mode.gi and mode.ii are positions in the SHUFFLED order, not
    // the card's own place in the pack. Keying a rating on them tied it to a
    // slot: rate a card with Shuffle strategies on, come back tomorrow, and
    // the same key is showing on a different card. The real indices below are
    // stable whatever the shuffle does.
    //
    // With shuffle OFF the two are identical, so every rating given without
    // shuffling keeps exactly the key it had. Nothing is lost by the change
    // except ratings that were already pointing at the wrong card.
    //
    // Challenges, Mindset and Collections were never affected — their
    // groupKey is g.name, which does not move.
    function realIndices() {
      const gi = (mode.groupOrder && mode.groupOrder.length) ? mode.groupOrder[mode.gi] : mode.gi;
      const orders = mode.itemOrders && mode.itemOrders[gi];
      const ii = (orders && orders.length) ? orders[mode.ii] : mode.ii;
      return { gi, ii };
    }

    function renderBars() {
      const g = group();
      const { gi, ii } = realIndices();
      if (cfg.fb && window.fbRender && window.fbKey) {
        const gk = cfg.fb.groupKey(g, gi);
        fbRender(`fb-${cfg.barPrefix}-front`, fbKey(cfg.fb.id, gk, ii, 'front'));
        fbRender(`fb-${cfg.barPrefix}-back`,  fbKey(cfg.fb.id, gk, ii, 'back'));
      }
      if (cfg.al && window.alRender && window.alKey) {
        const gk = cfg.al.groupKey(g, gi);
        alRender(`al-${cfg.barPrefix}-front`, alKey(cfg.al.id, gk, ii, 'front'));
        alRender(`al-${cfg.barPrefix}-back`,  alKey(cfg.al.id, gk, ii, 'back'));
      }
      // The note follows the side you are looking at, so flip() re-runs this.
      if (cfg.note && cfg.fb && window.noteKey) {
        const gk = cfg.fb.groupKey(g, gi);
        note.setKey(noteKey(cfg.fb.id, gk, ii, mode.flipped ? 'back' : 'front'));
      }
    }

    // ── Progress bar (divider) ─────────────────────────────────────────────
    const pbDivider = document.querySelector(`#${cfg.screenId} .divider`);
    function renderPb() {
      if (window.pbUpdate) pbUpdate(pbDivider, mode.gi, mode.groups.length);
      if (!mode._pbBound && window.pbBindClick) {
        mode._pbBound = true;
        pbBindClick(pbDivider, () => mode.groups.length, idx => {
          mode.gi = idx; mode.ii = 0; render();
        });
      }
    }

    // ── Flip / swipe ───────────────────────────────────────────────────────
    function flip(val, animate = true) {
      if (val && !mode.flipped && window.progCardFlipped) {
        const total = mode.groups.reduce((s, g) => s + items(g).length, 0);
        const soFar = mode.groupOrder.slice(0, mode.gi)
          .reduce((s, oi) => s + mode.itemOrders[oi].length, 0) + mode.ii + 1;
        progCardFlipped(soFar, total);
      }
      mode.flipped = val;
      if (els.inner) {
        els.inner.style.transition = animate ? 'transform 0.4s ease' : 'none';
        els.inner.classList.toggle('flipped', mode.flipped);
      }
      // front and back are two different notes
      renderBars();
    }

    function trig(dir, cb) {
      if (mode.animating) return;
      mode.animating = true;
      els.card.classList.add('swipe-' + dir);
      setTimeout(() => {
        els.card.classList.remove('swipe-' + dir);
        cb(); mode.animating = false;
      }, 220);
    }

    const itemCount = () => mode.itemOrders[mode.groupOrder[mode.gi]].length;
    function nextItem()  { trig('up',    () => { mode.ii = (mode.ii + 1) % itemCount(); render(); }); }
    function prevItem()  { trig('down',  () => { mode.ii = (mode.ii - 1 + itemCount()) % itemCount(); render(); }); }
    function nextGroup() { trig('left',  () => { info.close(); note.close(); mode.gi = (mode.gi + 1) % mode.groups.length; mode.ii = 0; render(); }); }
    function prevGroup() { trig('right', () => { info.close(); note.close(); mode.gi = (mode.gi - 1 + mode.groups.length) % mode.groups.length; mode.ii = 0; render(); }); }

    attachSwipe(els.card, {
      tap: () => flip(!mode.flipped),
      left: nextGroup, right: prevGroup, up: nextItem, down: prevItem,
    });
    if (els.card) els.card.addEventListener('click', () => flip(!mode.flipped));

    // ── Buttons ────────────────────────────────────────────────────────────
    if (els.nextItemBtn)  els.nextItemBtn.addEventListener('click', nextItem);
    if (els.prevItemBtn)  els.prevItemBtn.addEventListener('click', prevItem);
    if (els.nextGroupBtn) els.nextGroupBtn.addEventListener('click', nextGroup);
    if (els.prevGroupBtn) els.prevGroupBtn.addEventListener('click', prevGroup);
    if (els.closeBtn)     els.closeBtn.addEventListener('click', () => closeTraining(cfg.screenId));
    if (els.settingsBtn)  bindTapButton(els.settingsBtn, () => DS.openTrainingSettings(), true);

    // ── Show / reload ──────────────────────────────────────────────────────
    mode.show = function () {
      mode.groups = cfg.getGroups() || [];
      if (!mode.groups.length) return;
      info.close();
      buildOrders();
      mode.gi = 0; mode.ii = 0;
      // Guide toggle reflects the persisted choice for THIS pack + mode
      window._guideActiveMode = mode;
      const gt = $('showGuideText');
      if (gt) gt.checked = guideEnabled();
      navToTraining(cfg.screenId);
      render();
    };

    // Re-render in place after settings/bundle changes (keeps screen open).
    // Position is preserved where possible (clamped if the data shrank).
    mode.reload = function () {
      mode.groups = cfg.getGroups() || [];
      if (!mode.groups.length) return;
      buildOrders();
      mode.gi = Math.min(mode.gi, mode.groups.length - 1);
      mode.ii = Math.min(mode.ii, mode.itemOrders[mode.groupOrder[mode.gi]].length - 1);
      render();
    };

    mode.applyOrders = buildOrders;
    mode.flip = flip;
    mode.render = render;
    mode.keys = cfg.keyboard === false ? null : {
      ArrowRight: nextGroup, ArrowLeft: prevGroup,
      ArrowDown: nextItem,   ArrowUp: prevItem,
      ' ': () => flip(!mode.flipped),
    };

    modesByScreen[cfg.screenId] = mode;
    cardModes.push(mode);
    if (typeof TRAINING_SCREENS !== 'undefined' && !TRAINING_SCREENS.includes(cfg.screenId)) {
      TRAINING_SCREENS.push(cfg.screenId);
    }
    registerMode(cfg.id, mode.show);
    return mode;
  }

  // ═════════════════════════════════════════════════════════════════════════
  // HANDSFREE MODE (TTS playback)
  // ═════════════════════════════════════════════════════════════════════════

  // ── Shared voice cache ───────────────────────────────────────────────────
  let cachedVoices = [];
  function loadVoices() {
    const v = window.speechSynthesis ? speechSynthesis.getVoices() : [];
    if (v.length) cachedVoices = v;
  }
  if (window.speechSynthesis) {
    loadVoices();
    if (typeof speechSynthesis.onvoiceschanged !== 'undefined') {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
  }

  // ── Speech engine ──────────────────────────────────────────────
  // Two backends behind one interface (v1.26.58).
  //
  // In a browser we use the Web Speech API. On iOS that API only ever exposes
  // the pre-installed "compact" voices — Apple deliberately hides the Enhanced
  // and Premium voices a user has downloaded — and it cannot keep talking with
  // the screen off.
  //
  // In the native app we therefore hand the job to the Capacitor TextToSpeech
  // plugin, which drives AVSpeechSynthesizer directly. That reaches every voice
  // installed on the device, and asking for the 'playback' audio category is
  // what lets handsfree continue when the screen locks.
  //
  // The web path is kept as the fallback, so the PWA and the desktop browser
  // behave exactly as before.
  const TTS = (function () {
    let plugin = null;
    let ready  = false;   // true only once the plugin has actually answered us
    let lastError = '';

    // Reaching the native plugin without a bundler.
    // www/ is plain script tags — the plugin's own npm JS is never loaded — so
    // Capacitor.Plugins.TextToSpeech may not exist even when the native side is
    // installed. Capacitor.registerPlugin() asks the native bridge directly and
    // is the route that works for a build like ours.
    function bridge() {
      const C = window.Capacitor;
      if (!C) { lastError = 'no Capacitor bridge (running in a browser)'; return null; }
      if (typeof C.isNativePlatform === 'function' && !C.isNativePlatform()) {
        lastError = 'Capacitor present but not a native platform';
        return null;
      }
      if (plugin) return plugin;
      if (typeof C.registerPlugin === 'function') {
        try { plugin = C.registerPlugin('TextToSpeech'); } catch (e) { plugin = null; }
      }
      if (!plugin && C.Plugins) plugin = C.Plugins.TextToSpeech || null;
      if (!plugin) lastError = 'TextToSpeech plugin not registered — run npm install + npx cap sync ios';
      return plugin;
    }

    let nativeVoices = [];   // [{ index, name, lang }] — index is what speak() wants

    // Apple ships a set of novelty "voices" (Bells, Boing, Bubbles, Jester,
    // Trinoids, Whisper…) that sing or gargle rather than speak. They are
    // useless for reading cards aloud and must never be picked by a fallback.
    const NOVELTY = /^(albert|bad news|bahh|bells|boing|bubbles|cellos|good news|jester|junior|organ|superstar|trinoids|whisper|wobble|zarvox|deranged|hysterical|pipe organ|princess)$/i;
    function isRealVoice(name) { return !NOVELTY.test(String(name || '').trim()); }

    // Probe the plugin for real. registerPlugin() hands back a proxy whether or
    // not the native half exists, so we only trust it once it has actually
    // returned a voice list — otherwise we would silently speak into nothing.
    async function loadNativeVoices() {
      const p = bridge();
      if (!p || typeof p.getSupportedVoices !== 'function') { ready = false; return []; }
      try {
        const res = await p.getSupportedVoices();
        const all = (res && res.voices) || [];
        nativeVoices = all
          .map((v, index) => ({ index, name: v.name || '', lang: v.lang || '' }))
          .filter(v => /^en/i.test(v.lang) && isRealVoice(v.name));
        ready = all.length > 0;
        if (!ready) lastError = 'plugin answered but returned no voices';
      } catch (e) {
        ready = false;
        nativeVoices = [];
        lastError = 'plugin call failed: ' + (e && e.message ? e.message : e);
      }
      return nativeVoices;
    }

    function isNative() { return ready; }
    function voices() { return nativeVoices; }

    // Plain-language report for the in-app voice list, so a failure says WHY.
    function diagnostics() {
      const C = window.Capacitor;
      return {
        capacitor: !!C,
        nativePlatform: !!(C && typeof C.isNativePlatform === 'function' && C.isNativePlatform()),
        pluginFound: !!plugin,
        ready,
        voices: nativeVoices.length,
        note: ready ? '' : lastError,
      };
    }

    function speak(text, opts) {
      const rate = (opts && opts.rate) || 1;
      const pick = opts ? opts.voice : null;

      if (ready && plugin) {
        const req = {
          text,
          lang: 'en-US',
          rate,
          pitch: 1.0,
          volume: 1.0,
          // 'playback' keeps audio alive when the screen locks; 'ambient'
          // would be silenced. This is the background-audio switch.
          category: 'playback',
        };
        const chosen = nativeVoices.find(v => String(v.index) === String(pick));
        if (chosen) req.voice = chosen.index;
        // Resolves when the utterance finishes, which is what the caller awaits.
        // Never reject — a failed line must not stall the playback loop.
        return plugin.speak(req).catch(() => {});
      }

      return new Promise(resolve => {
        const utt = new SpeechSynthesisUtterance(text);
        utt.lang = 'en-US';
        utt.rate = rate;
        const voice = pickVoice(pick);
        if (voice) utt.voice = voice;
        utt.onend = () => resolve();
        utt.onerror = () => resolve();
        speechSynthesis.speak(utt);
      });
    }

    function stop() {
      if (ready && plugin) { try { plugin.stop(); } catch (e) {} return; }
      try { speechSynthesis.cancel(); } catch (e) {}
    }

    // Browsers need a user-gesture-time utterance before audio will play.
    // The native path has no such restriction.
    function unlock() {
      if (ready) return;
      try {
        const u = new SpeechSynthesisUtterance(' ');
        u.volume = 0;
        speechSynthesis.speak(u);
      } catch (e) {}
    }

    // Keeping the app awake between utterances.
    // "Background Modes: Audio" only keeps an app running while audio is
    // ACTUALLY playing. Our handsfree loop has deliberate silent gaps — the
    // think pause and the pause between cards — and during those iOS sees an
    // idle app and suspends the web view. Suspending freezes setTimeout, and
    // since delay() is a chain of timers the loop never reaches the next card:
    // the speech simply stops partway through, which is exactly the symptom.
    // Looping a silent clip for the whole session keeps the audio session busy
    // so the gaps no longer look like idleness.
    let keepAliveEl = null;

    function silentWavUrl(seconds) {
      const rate = 8000, n = Math.floor(rate * seconds);
      const bytes = new Uint8Array(44 + n);
      const dv = new DataView(bytes.buffer);
      const put = (o, s) => { for (let i = 0; i < s.length; i++) bytes[o + i] = s.charCodeAt(i); };
      put(0, 'RIFF');  dv.setUint32(4, 36 + n, true);  put(8, 'WAVE');
      put(12, 'fmt '); dv.setUint32(16, 16, true);
      dv.setUint16(20, 1, true);  dv.setUint16(22, 1, true);
      dv.setUint32(24, rate, true); dv.setUint32(28, rate, true);
      dv.setUint16(32, 1, true);  dv.setUint16(34, 8, true);
      put(36, 'data'); dv.setUint32(40, n, true);
      bytes.fill(128, 44);          // 8-bit PCM silence is 128, not 0
      let bin = '';
      for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
      return 'data:audio/wav;base64,' + btoa(bin);
    }

    function keepAlive(on) {
      // Browsers do not need this, and starting stray audio there would be rude.
      if (!ready) return;
      try {
        if (on) {
          if (!keepAliveEl) {
            keepAliveEl = new Audio(silentWavUrl(0.25));
            keepAliveEl.loop = true;
          }
          // Called from the play button, so we are inside a user gesture.
          const pr = keepAliveEl.play();
          if (pr && pr.catch) pr.catch(() => {});
        } else if (keepAliveEl) {
          keepAliveEl.pause();
          keepAliveEl.currentTime = 0;
        }
      } catch (e) {}
    }

    return { isNative, loadNativeVoices, voices, speak, stop, unlock, isRealVoice, diagnostics, keepAlive };
  })();
  // NOTE: do NOT write `DS.tts = TTS` here. Everything in this file runs inside
  // the IIFE that produces DS, so DS is still in its temporal dead zone at this
  // point and touching it throws "Cannot access 'DS' before initialization",
  // which aborts the whole module and leaves the app with no training modes at
  // all. The engine is exported on the returned object instead — see `tts:`
  // near the bottom.

  // ── Native background session (iOS app only) ────────────────────────
  // A second native path, used ONLY inside the Capacitor app and ONLY for
  // handsfree. The TTS engine above speaks one line at a time, driven by the
  // JS loop; that dies when the screen locks because WKWebView freezes all
  // JavaScript in the background. This hands the WHOLE session to our own
  // DeckstackSpeech plugin up front, so AVSpeechSynthesizer plays it through
  // — pauses included (as postUtteranceDelay) — with no JS timer to freeze.
  // The browser and PWA never reach this; they keep the Web Speech path.
  const DSNative = (function () {
    let plugin = null;
    let ready = false;
    let voicesByName = {};   // lowercased voice name → AVSpeech identifier
    let bound = false;
    let stepCb = null, doneCb = null, stateCb = null;

    function bridge() {
      const C = window.Capacitor;
      if (!C) return null;
      if (typeof C.isNativePlatform === 'function' && !C.isNativePlatform()) return null;
      if (plugin) return plugin;
      if (typeof C.registerPlugin === 'function') {
        try { plugin = C.registerPlugin('DeckstackSpeech'); } catch (e) { plugin = null; }
      }
      if (!plugin && C.Plugins) plugin = C.Plugins.DeckstackSpeech || null;
      return plugin;
    }

    // registerPlugin() returns a proxy whether or not the native half exists,
    // so only trust it once it has actually answered with a voice list.
    async function probe() {
      const p = bridge();
      if (!p || typeof p.getVoices !== 'function') { ready = false; return; }
      try {
        const res = await p.getVoices();
        const list = (res && res.voices) || [];
        voicesByName = {};
        list.forEach(v => { if (v && v.name) voicesByName[String(v.name).toLowerCase()] = v.id; });
        ready = list.length > 0;
      } catch (e) { ready = false; }
    }

    function isReady() { return ready; }
    function voiceIdForName(name) {
      return name ? (voicesByName[String(name).toLowerCase()] || null) : null;
    }

    function listen(onStep, onDone) {
      stepCb = onStep; doneCb = onDone;
      const p = bridge();
      if (!p || bound) return;
      bound = true;
      try {
        p.addListener('dsSpeechStep', d => { if (stepCb) stepCb(d); });
        p.addListener('dsSpeechDone', () => { if (doneCb) doneCb(); });
        // v1.26.87 — the headset centre button pauses and resumes natively,
        // because JS is frozen while the screen is locked. This is how the
        // web side finds out it happened.
        p.addListener('dsSpeechPlayState', d => { if (stateCb) stateCb(!!(d && d.playing)); });
      } catch (e) {}
    }

    async function start(payload, onStep, onDone, onPlayState) {
      const p = bridge();
      if (!p) return;
      stateCb = onPlayState || null;
      listen(onStep, onDone);
      try { await p.startSession(payload); } catch (e) {}
    }
    async function stop()  { const p = bridge(); if (p) { try { await p.stopSession(); } catch (e) {} } }
    async function togglePlay() { const p = bridge(); if (p && p.togglePlay) { try { await p.togglePlay(); } catch (e) {} } }
    async function next()  { const p = bridge(); if (p && p.next)     { try { await p.next(); }     catch (e) {} } }
    async function prev()  { const p = bridge(); if (p && p.previous) { try { await p.previous(); } catch (e) {} } }
    async function getState() { const p = bridge(); if (!p) return null; try { return await p.getState(); } catch (e) { return null; } }

    probe();   // resolve readiness at load, well before the user hits play

    return { isReady, voiceIdForName, start, stop, togglePlay, next, prev, getState, probe };
  })();

  function pickVoice(gender) {
    const voices = cachedVoices.length ? cachedVoices : speechSynthesis.getVoices();
    // Only ever consider real speaking voices — without this filter a missing
    // preferred name could fall through to Albert or Bad News and read the
    // cards in a novelty voice.
    const en = voices.filter(v => v.lang && v.lang.startsWith('en') && TTS.isRealVoice(v.name));
    if (!en.length) return null;
    if (gender === 'male') {
      const pref = ['Daniel', 'Aaron', 'Fred', 'Gordon', 'Thomas', 'Arthur', 'Oliver', 'Jamie'];
      for (const name of pref) { const v = en.find(v => v.name.includes(name)); if (v) return v; }
      return en.find(v => !v.name.match(/Samantha|Victoria|Karen|Moira|Fiona|Allison|Ava|Susan|Zoe|Emma|Tessa|Kathy|Serena/i)) || en[0];
    }
    const pref = ['Samantha', 'Ava', 'Allison', 'Victoria', 'Karen', 'Moira'];
    for (const name of pref) { const v = en.find(v => v.name.includes(name)); if (v) return v; }
    return en[0];
  }

  // config = {
  //   id, screenId, prefix ('hfChall'),
  //   els: { title, front, back, prevGroupBtn, nextGroupBtn,
  //          prevItemBtn, nextItemBtn }         — the non-derivable IDs
  //   maxItemsId:  'hfChallMaxInputs' | null     — max-items <select>, if any
  //   getGroups(), getItems(g), groupTitle(g), groupDescription(g),
  //   itemFront(item, g), itemBack(item, g),
  //   speakBack(item):  bool                     — default true
  // }
  //
  // Derived from prefix: Card, CardInner, Counter, SubCounter, PlayBtn,
  // PrevStepBtn, NextStepBtn, CloseBtn, SettingsBtn, SettingsClose,
  // SettingsOverlay, BundlePlaceholder, ShowInputCounter, CardInfo,
  // CardInfoText, Explanation, CardBack, ThinkPause, GenPause,
  // LoopStrategy, Rate, Voice.
  function createHandsfreeMode(cfg) {
    const p = cfg.prefix;
    const els = {
      card:      $(p + 'Card'),
      inner:     $(p + 'CardInner'),
      counter:   $(p + 'Counter'),
      subCounter:$(p + 'SubCounter'),
      playBtn:   $(p + 'PlayBtn'),
      prevStep:  $(p + 'PrevStepBtn'),
      nextStep:  $(p + 'NextStepBtn'),
      closeBtn:  $(p + 'CloseBtn'),
      settings:  $(p + 'SettingsBtn'),
      info:      $(p + 'CardInfo'),
      infoText:  $(p + 'CardInfoText'),
    };
    for (const k in cfg.els) els[k] = $(cfg.els[k]);

    const mode = {
      id: cfg.id, screenId: cfg.screenId, kind: 'handsfree',
      groups: [], gi: 0, ii: 0,
      playing: false, abort: false, skipStep: false,
      timeouts: [], delayResolve: null,
      _pbBound: false,
      animating: false,
    };

    const group = () => mode.groups[mode.gi];
    const items = g => cfg.getItems(g) || [];
    const speakBack = cfg.speakBack || (() => true);

    // ── Guide text (v1.26.25) — shown on the card AND read aloud ────────
    // Same per-pack + per-mode persistence as the card modes: the key's
    // absence means ON, 'off' means the user disabled it for this pack.
    const guideKey = () => 'guideText:' + cfg.id + ':' +
      (typeof activeCollectionKey !== 'undefined' ? activeCollectionKey : '');
    const guideEnabled = () => localStorage.getItem(guideKey()) !== 'off';
    function guideElFor(anchor) {
      if (!anchor || !anchor.parentNode) return null;
      const prev = anchor.previousElementSibling;
      if (prev && prev.classList && prev.classList.contains('card-guide')) return prev;
      const el = document.createElement('div');
      el.className = 'card-guide';
      anchor.parentNode.insertBefore(el, anchor);
      return el;
    }
    function renderGuide(g, it) {
      // Per-card guide text (v1.26.32) — same resolution as card modes.
      const on = guideEnabled();
      const gf = guideElFor(els.front), gb = guideElFor(els.back);
      if (gf) {
        const t = on ? ((it && it.guideFront) || (g && g.guideFront) || '') : '';
        gf.textContent = t; gf.style.display = t ? '' : 'none';
      }
      if (gb) {
        const t = on ? ((it && it.guideBack) || (g && g.guideBack) || '') : '';
        gb.textContent = t; gb.style.display = t ? '' : 'none';
      }
    }
    const guideToggleHf = $(p + 'GuideText');
    if (guideToggleHf) guideToggleHf.addEventListener('change', () => {
      if (guideToggleHf.checked) localStorage.removeItem(guideKey());
      else localStorage.setItem(guideKey(), 'off');
      renderGuide(group(), mode._lastItem);
    });

    function settings() {
      const v = id => $(id);
      return {
        explanation : v(p + 'Explanation') ? v(p + 'Explanation').checked : true,
        cardBack    : v(p + 'CardBack')    ? v(p + 'CardBack').checked    : true,
        maxItems    : cfg.maxItemsId && v(cfg.maxItemsId) ? v(cfg.maxItemsId).value : 'all',
        thinkPause  : v(p + 'ThinkPause') ? parseFloat(v(p + 'ThinkPause').value) : 3,
        genPause    : v(p + 'GenPause')   ? parseFloat(v(p + 'GenPause').value)   : 1,
        loop        : v(p + 'LoopStrategy') ? v(p + 'LoopStrategy').checked : false,
        rate        : v(p + 'Rate')  ? parseFloat(v(p + 'Rate').value) : 1,
        voiceGender : v(p + 'Voice') ? v(p + 'Voice').value : 'female',
        // Uppgift 10 — shuffle toggles (same naming convention as regular modes)
        shuffleGroups : v(p + 'ShuffleStrategies') ? v(p + 'ShuffleStrategies').checked : false,
        shuffleItems  : v(p + 'ShuffleInputs')     ? v(p + 'ShuffleInputs').checked     : false,
        guideText     : guideEnabled(),
      };
    }

    // ── TTS primitives (per-instance state, shared implementation) ────────
    function speak(text, cfg2) {
      if (mode.abort || !text) return Promise.resolve();
      if (mode.skipStep) { mode.skipStep = false; return Promise.resolve(); }
      return TTS.speak(text, { rate: cfg2.rate, voice: cfg2.voiceGender });
    }

    function delay(ms) {
      return new Promise(resolve => {
        mode.delayResolve = resolve;
        if (mode.abort || mode.skipStep) { mode.delayResolve = null; resolve(); return; }
        const step = 80;
        let elapsed = 0;
        function tick() {
          if (mode.abort || mode.skipStep) { mode.delayResolve = null; resolve(); return; }
          elapsed += step;
          if (elapsed >= ms) { mode.delayResolve = null; resolve(); return; }
          mode.timeouts.push(setTimeout(tick, step));
        }
        mode.timeouts.push(setTimeout(tick, step));
      });
    }

    function clearTimeouts() {
      mode.timeouts.forEach(id => clearTimeout(id));
      mode.timeouts = [];
    }

    // ── Display ────────────────────────────────────────────────────────────
    function showCard(front, back, flipped, it) {
      const g = group();
      mode._lastItem = it || null;
      if (els.title) els.title.textContent = cfg.groupTitle(g);
      if (els.front) els.front.textContent = front;
      if (els.back)  els.back.textContent  = back;
      renderGuide(g, it);
      // Continue card mirrors the position in handsfree too (list 7 #1)
      if (window.progSetPosition && typeof activeCollectionKey !== 'undefined') {
        progSetPosition(activeCollectionKey,
          (typeof activeCollectionLabel !== 'undefined' && activeCollectionLabel) || activeCollectionKey,
          mode.gi, mode.groups.length);
      }
      if (els.counter) els.counter.textContent = `${mode.gi + 1} / ${mode.groups.length}`;
      if (els.subCounter && g) els.subCounter.textContent = `${mode.ii + 1} / ${items(g).length}`;
      if (els.inner) {
        els.inner.style.transition = 'transform 0.4s ease';
        els.inner.classList.toggle('flipped', !!flipped);
      }
      renderPb();
    }

    const HF_PLAY_SVG  = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>';
    const HF_PAUSE_SVG = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="8" y1="5" x2="8" y2="19"/><line x1="16" y1="5" x2="16" y2="19"/></svg>';

    function updateButtons() {
      if (!els.playBtn) return;
      // A natively paused session is still playing as far as the session is
      // concerned, but the button has to show what pressing it will DO.
      const showPause = mode.playing && !mode._nativePaused;
      els.playBtn.innerHTML = showPause ? HF_PAUSE_SVG : HF_PLAY_SVG;
      // PrevStep/NextStep work both during playback and as manual nav —
      // always enabled, always full opacity.
      [els.prevStep, els.nextStep].forEach(b => {
        if (!b) return;
        b.disabled = false;
        b.style.opacity = '1';
      });
      // The info overlay's close button only exists outside playback;
      // during playback the panel is read-along-scrollable but closes itself.
      if (hfInfoClose) hfInfoClose.style.display = mode.playing ? 'none' : '';
    }

    const pbDivider = document.querySelector(`#${cfg.screenId} .divider`);
    function renderPb() {
      if (window.pbUpdate) pbUpdate(pbDivider, mode.gi, mode.groups.length);
      if (!mode._pbBound && window.pbBindClick) {
        mode._pbBound = true;
        pbBindClick(pbDivider, () => mode.groups.length, idx => {
          mode.gi = idx; mode.ii = 0; renderManual();
        }, () => mode.playing);
      }
    }

    function showInfo(text) {
      if (!els.info || !els.infoText) return;
      els.infoText.textContent = text;
      els.info.classList.add('visible');
    }
    function hideInfo() {
      if (!els.info) return;
      els.info.classList.remove('visible');
      els.info.scrollTop = 0;
    }

    // ── Manual info overlay (tap the strategy name, like card modes) ──────
    const hfInfoClose = $(p + 'CardInfoClose');
    let hfInfoOpen = false;
    function openHfInfo() {
      if (mode.playing) return;             // playback owns the panel
      if (!els.info || !els.infoText) return;
      if (hfInfoOpen) { closeHfInfo(); return; }
      const g = group();
      const desc = cfg.groupDescription ? cfg.groupDescription(g)
                                        : (g && g.description);
      hfInfoOpen = true;
      if (window.hideTapHint) hideTapHint();
      showInfo(desc || 'No description available.');
    }
    function closeHfInfo() {
      hfInfoOpen = false;
      hideInfo();
    }
    if (els.title) els.title.addEventListener('click', openHfInfo);
    if (hfInfoClose) hfInfoClose.addEventListener('click', e => {
      e.stopPropagation();
      closeHfInfo();
    });

    // ── Native session (iOS app) ─────────────────────────────────────────
    // Resolve the picker's stored value (a community-plugin voice index, or
    // 'female'/'male' in the browser) to the voice NAME, so DSNative can map
    // it to a stable AVSpeech identifier. Gender values → null (native default).
    function currentVoiceName(s) {
      const val = s.voiceGender;
      if (!val || val === 'female' || val === 'male') return null;
      const list = TTS.voices() || [];
      const v = list.find(x => String(x.index) === String(val));
      return v ? v.name : null;
    }

    // Build the whole session as a flat step list — the SAME sequence the JS
    // loop below would speak — and hand it to native in one call.
    function startNativeSession() {
      const s = settings();
      const maxItems = s.maxItems === 'all' ? Infinity : parseInt(s.maxItems);
      const startGi = mode.gi, startIi = mode.ii;
      const skipIntro = startIi > 0 || mode.pausedInGroup === mode.gi;
      mode.pausedInGroup = null;

      const groupOrder = s.shuffleGroups ? shuffle(mode.groups.map((_, i) => i))
                                         : mode.groups.map((_, i) => i);
      const itemOrders = mode.groups.map(g => {
        const idx = items(g).map((_, i) => i);
        return s.shuffleItems ? shuffle(idx) : idx;
      });

      const voiceId = DSNative.voiceIdForName(currentVoiceName(s));
      const steps = [];
      const push = (text, side, postMs, gi, ii, groupStart, gTitle) => {
        if (!text) return;
        steps.push({ text: text, voiceId: voiceId, rate: s.rate,
                     postDelayMs: postMs, gi: gi, ii: ii, side: side,
                     groupStart: groupStart, groupTitle: gTitle });
      };

      const loop = !!s.loop;
      // Loop mode repeats the CURRENT strategy only (like the JS loop), so
      // build just that one group and let native repeat it.
      const lastGi = loop ? startGi : groupOrder.length - 1;

      for (let gi2 = startGi; gi2 <= lastGi; gi2++) {
        const realGi = groupOrder[gi2];
        const g = mode.groups[realGi];
        const list = items(g);
        const gTitle = cfg.groupTitle(g);
        let firstOfGroup = true;

        if (!skipIntro || gi2 > startGi) {
          push(gTitle, 'title', s.genPause * 1000, realGi, 0, true, gTitle);
          firstOfGroup = false;
          const desc = cfg.groupDescription ? cfg.groupDescription(g) : g.description;
          if (s.explanation && desc) push(desc, 'desc', s.genPause * 1000, realGi, 0, false, gTitle);
        }

        const limit = Math.min(list.length, maxItems);
        const from = (gi2 === startGi) ? startIi : 0;
        const iOrder = itemOrders[realGi];

        for (let ii2 = from; ii2 < limit; ii2++) {
          const it = list[iOrder[ii2]];
          const front = cfg.itemFront(it, g);
          const back  = cfg.itemBack(it, g);
          const effGF = (it && it.guideFront) || g.guideFront;
          const effGB = (it && it.guideBack)  || g.guideBack;
          const gFront = (s.guideText && effGF) ? effGF + ' ' : '';
          const gBack  = (s.guideText && effGB) ? effGB + ' ' : '';

          push(gFront + front, 'front', s.thinkPause * 1000, realGi, ii2, firstOfGroup, gTitle);
          firstOfGroup = false;
          if (s.cardBack && speakBack(it)) {
            push(gBack + back, 'back', s.genPause * 1000, realGi, ii2, false, gTitle);
          }
        }
      }

      if (!steps.length) return;

      // When looping, repeat from the first card so the strategy title is
      // heard once, not on every lap.
      let loopStartIndex = 0;
      if (loop) {
        const fi = steps.findIndex(st => st.side === 'front');
        loopStartIndex = fi < 0 ? 0 : fi;
      }

      mode.playing = true; mode.abort = false; mode._nativeActive = true;
      mode._nativePaused = false;
      hfInfoOpen = false; hideInfo();
      updateButtons();

      applyNativeStep(steps[0]);   // show the first card at once; events then drive it
      bindNativeForeground();
      DSNative.start({ steps: steps, loop: loop, loopStartIndex: loopStartIndex },
                     onNativeStep, onNativeDone, onNativePlayState);
    }

    // v1.26.87 — native told us it paused or resumed, which happens when the
    // headset's centre button is pressed (or the lock-screen control). The
    // session is still alive; only the play button has to catch up.
    function onNativePlayState(playing) {
      if (!mode._nativeActive) return;
      mode._nativePaused = !playing;
      updateButtons();
    }

    // Move the card display to a given step (called live in the foreground and
    // on foreground-return to catch up with where native reached).
    function applyNativeStep(step) {
      if (!step) return;
      mode.gi = step.gi;
      mode.ii = step.ii;
      const g = group();
      if (!g) return;
      const gTitle = cfg.groupTitle(g);
      if (step.side === 'title') {
        hideInfo();
        showCard(gTitle, '', false, null);
      } else if (step.side === 'desc') {
        showCard(gTitle, '', false, null);
        const desc = cfg.groupDescription ? cfg.groupDescription(g) : g.description;
        showInfo(desc || '');
      } else {
        hideInfo();
        const it = items(g)[step.ii];
        const front = it ? cfg.itemFront(it, g) : '';
        const back  = it ? cfg.itemBack(it, g)  : '';
        showCard(front, back, step.side === 'back', it);
      }
    }

    function onNativeStep(d) {
      if (!mode._nativeActive || !d) return;
      // While backgrounded the web view is frozen and these events buffer,
      // firing on return; the visibilitychange resync is the authority, so
      // applying the latest here is just the live foreground update.
      applyNativeStep(d);
    }

    function onNativeDone() {
      mode._nativeActive = false;
      mode._nativePaused = false;
      mode.playing = false;
      mode.pausedInGroup = null;
      updateButtons();
    }

    // On returning to the foreground, ask native where it actually is and jump
    // the card there — the display could not update while JS was frozen.
    function bindNativeForeground() {
      if (mode._nativeVisBound) return;
      mode._nativeVisBound = true;
      document.addEventListener('visibilitychange', function () {
        if (document.hidden) return;
        if (!mode._nativeActive || !mode.playing) return;
        DSNative.getState().then(function (st) {
          if (st && typeof st.index === 'number' && st.index >= 0) {
            applyNativeStep({ gi: st.gi, ii: st.ii, side: st.side });
          }
        });
      });
    }

    // ── Playback loop ──────────────────────────────────────────────────────
    async function play() {
      // v1.26.87 — paused from a headset or the lock screen: the native
      // session is still loaded, so the on-screen button resumes it instead of
      // tearing the session down and rebuilding it from the current card.
      if (mode._nativeActive && mode._nativePaused) {
        mode._nativePaused = false;
        DSNative.togglePlay();
        updateButtons();
        return;
      }
      if (mode.playing) { stop(); return; }
      if (!mode.groups.length) return;

      // iOS app: hand the whole session to native so it survives a screen lock.
      // Browser and PWA fall through to the Web Speech loop below, unchanged.
      if (DSNative.isReady()) { startNativeSession(); return; }

      // iOS unlock (browser only — the native engine needs no gesture)
      TTS.unlock();
      // Hold the audio session open for the whole session so iOS cannot
      // suspend us during the silent pauses between cards.
      TTS.keepAlive(true);

      mode.playing = true; mode.abort = false; mode.skipStep = false;
      hfInfoOpen = false; hideInfo();   // manual overlay yields to playback
      updateButtons();

      const s = settings();
      const maxItems = s.maxItems === 'all' ? Infinity : parseInt(s.maxItems);
      const startGi = mode.gi, startIi = mode.ii;
      // Skip the strategy intro when mid-strategy OR when resuming a pause
      // in the same strategy (v1.26.35) — pausing on the first card used to
      // replay the whole intro, which felt like restarting from the top.
      const skipIntro = startIi > 0 || mode.pausedInGroup === mode.gi;
      mode.pausedInGroup = null;

      // Uppgift 10 — build shuffled play order
      const groupOrder = s.shuffleGroups ? shuffle(mode.groups.map((_, i) => i)) : mode.groups.map((_, i) => i);
      const itemOrders = mode.groups.map(g => {
        const idx = items(g).map((_, i) => i);
        return s.shuffleItems ? shuffle(idx) : idx;
      });

      outer:
      for (let gi2 = startGi; gi2 < groupOrder.length; gi2++) {
        if (mode.abort) break;
        mode.gi = groupOrder[gi2];
        const g = group();
        const list = items(g);

        // Intro: group name + optional description
        if (!skipIntro || gi2 > startGi) {
          showCard(cfg.groupTitle(g), '', false);
          await speak(cfg.groupTitle(g), s);
          if (mode.abort) break;
          if (!mode.skipStep) await delay(s.genPause * 1000);
          mode.skipStep = false;

          const desc = cfg.groupDescription ? cfg.groupDescription(g) : g.description;
          if (s.explanation && desc) {
            showInfo(desc);
            await speak(desc, s);
            hideInfo();
            if (mode.abort) break;
            if (!mode.skipStep) await delay(s.genPause * 1000);
            mode.skipStep = false;
          }
        }

        const limit = Math.min(list.length, maxItems);
        const from = (gi2 === startGi) ? startIi : 0;
        const iOrder = itemOrders[mode.gi];

        for (let ii2 = from; ii2 < limit; ii2++) {
          if (mode.abort) break outer;
          mode.ii = ii2;
          const it = list[iOrder[ii2]];
          const front = cfg.itemFront(it, g);
          const back  = cfg.itemBack(it, g);
          // Guide text is spoken as a lead-in to each side when enabled.
          // Per-card guide (v1.26.32) overrides the strategy default.
          const effGF = (it && it.guideFront) || g.guideFront;
          const effGB = (it && it.guideBack)  || g.guideBack;
          const gFront = (s.guideText && effGF) ? effGF + ' ' : '';
          const gBack  = (s.guideText && effGB) ? effGB + ' '  : '';

          showCard(front, back, false, it);
          await speak(gFront + front, s);
          if (mode.abort) break outer;
          if (!mode.skipStep) await delay(s.thinkPause * 1000);
          mode.skipStep = false;

          if (s.cardBack && speakBack(it)) {
            showCard(front, back, true, it);
            await speak(gBack + back, s);
            if (mode.abort) break outer;
            if (!mode.skipStep) await delay(s.genPause * 1000);
            mode.skipStep = false;
          }

          if (s.loop && ii2 === limit - 1) ii2 = -1;
        }

        if (s.loop) gi2--;
      }

      mode.playing = false; mode.abort = false; mode.skipStep = false;
      TTS.stop();
      TTS.keepAlive(false);
      clearTimeouts();
      updateButtons();
    }

    function stop() {
      mode.abort = true; mode.playing = false; mode.skipStep = false;
      // Resume marker (v1.26.35): remember which strategy we paused in so
      // the next play() skips the intro and continues where we left off.
      mode.pausedInGroup = mode.gi;
      // Native session (iOS app): only our own plugin is involved. Do NOT also
      // poke the community TTS engine — it shares the AVAudioSession and can
      // interfere with a clean stop/restart. There is no JS loop to unwind.
      if (mode._nativeActive) {
        mode._nativeActive = false;
        mode._nativePaused = false;
        DSNative.stop();
        updateButtons();
        return;
      }
      // Release a pending pause-delay BEFORE clearing timeouts — otherwise
      // the play coroutine stays suspended on that promise forever and its
      // cleanup tail never runs.
      if (mode.delayResolve) { mode.delayResolve(); mode.delayResolve = null; }
      TTS.stop();
      TTS.keepAlive(false);
      clearTimeouts();
      updateButtons();
    }

    function skipForward() {
      if (!mode.playing) {
        // Not playing: step forward to the next input (same direction as
        // playback). Wraps within the strategy via manNextItem's modulo.
        manNextItem();
        return;
      }
      // Native session owns playback — let it advance one reading step.
      if (mode._nativeActive) { DSNative.next(); return; }
      mode.skipStep = true;
      TTS.stop();
      clearTimeouts();
      if (mode.delayResolve) { mode.delayResolve(); mode.delayResolve = null; }
    }

    function skipBack() {
      if (!mode.playing) {
        // Not playing: jump to the start of the current strategy, or to the
        // previous strategy if already at its first input (mirrors playback).
        if (mode.ii === 0 && mode.gi > 0) mode.gi--;
        mode.ii = 0;
        renderManual();
        return;
      }
      // Native session owns playback — let it restart the strategy.
      if (mode._nativeActive) { DSNative.prev(); return; }
      if (mode.ii === 0 && mode.gi > 0) mode.gi--;
      mode.ii = 0;
      mode.abort = true;
      TTS.stop();
      clearTimeouts();
      if (mode.delayResolve) { mode.delayResolve(); mode.delayResolve = null; }
      setTimeout(() => {
        mode.abort = false; mode.playing = false;
        play();
      }, 50);
    }

    // ── Manual navigation (when not playing) ──────────────────────────────
    function renderManual() {
      const g = group();
      if (!g) return;
      const it = items(g)[mode.ii];
      showCard(cfg.itemFront(it, g), cfg.itemBack(it, g), false, it);
      if (els.inner) els.inner.style.transition = 'none';
    }

    function trig(dir, cb) {
      if (mode.animating || mode.playing) return;
      mode.animating = true;
      if (els.card) els.card.classList.add('swipe-' + dir);
      setTimeout(() => {
        if (els.card) els.card.classList.remove('swipe-' + dir);
        cb(); mode.animating = false;
      }, 220);
    }

    const itemCount = () => items(group()).length;
    const manNextGroup = () => { trig('left',  () => { mode.gi = (mode.gi + 1) % mode.groups.length; mode.ii = 0; renderManual(); }); };
    const manPrevGroup = () => { trig('right', () => { mode.gi = (mode.gi - 1 + mode.groups.length) % mode.groups.length; mode.ii = 0; renderManual(); }); };
    const manNextItem  = () => { trig('up',    () => { mode.ii = (mode.ii + 1) % itemCount(); renderManual(); }); };
    const manPrevItem  = () => { trig('down',  () => { mode.ii = (mode.ii - 1 + itemCount()) % itemCount(); renderManual(); }); };

    attachSwipe(els.card, {
      enabled: () => !mode.playing,
      tap: () => {
        if (window.progCardFlipped && els.inner && !els.inner.classList.contains('flipped')) progCardFlipped();
        if (els.inner) {
          els.inner.style.transition = 'transform 0.4s ease';
          els.inner.classList.toggle('flipped');
        }
      },
      left: manNextGroup, right: manPrevGroup, up: manNextItem, down: manPrevItem,
    }, { passive: true });

    if (els.nextGroupBtn) els.nextGroupBtn.addEventListener('click', manNextGroup);
    if (els.prevGroupBtn) els.prevGroupBtn.addEventListener('click', manPrevGroup);
    if (els.nextItemBtn)  els.nextItemBtn.addEventListener('click', manNextItem);
    if (els.prevItemBtn)  els.prevItemBtn.addEventListener('click', manPrevItem);

    bindTapButton(els.playBtn, play, true);
    bindTapButton(els.nextStep, skipForward, true);
    bindTapButton(els.prevStep, skipBack, true);

    if (els.closeBtn) els.closeBtn.addEventListener('click', () => {
      stop();
      closeTraining(cfg.screenId);
    });

    if (els.settings) els.settings.addEventListener('click', () =>
      openHfSettings(p + 'SettingsOverlay', p + 'BundlePlaceholder', p + 'ShowInputCounter'));

    const showCounterCb = $(p + 'ShowInputCounter');
    if (showCounterCb) showCounterCb.addEventListener('change', () => applyHfInputCounterVisibility());

    const settingsClose = $(p + 'SettingsClose');
    const settingsOverlay = $(p + 'SettingsOverlay');
    if (settingsClose && settingsOverlay) {
      settingsClose.addEventListener('click', () => {
        settingsOverlay.classList.remove('open');
        DS.reloadActive();
      });
      settingsOverlay.addEventListener('click', e => {
        if (e.target === settingsOverlay) {
          settingsOverlay.classList.remove('open');
          DS.reloadActive();
        }
      });
    }

    if (els.info) {
      ['touchstart', 'touchmove', 'touchend'].forEach(ev =>
        els.info.addEventListener(ev, e => e.stopPropagation(), { passive: true }));
    }

    // ── Show / reload ──────────────────────────────────────────────────────
    mode.show = function () {
      mode.groups = cfg.getGroups() || [];
      if (!mode.groups.length) return;
      mode.gi = 0; mode.ii = 0;
      // Guide toggle reflects the persisted choice for THIS pack + mode
      if (guideToggleHf) guideToggleHf.checked = guideEnabled();
      hfInfoOpen = false; hideInfo();
      mode.pausedInGroup = null;
      navToTraining(cfg.screenId);
      renderManual();
      updateButtons();
    };

    // Never interrupts active playback — settings are read fresh on the next
    // play() anyway, and bundle changes apply on the next reload/show.
    mode.reload = function () {
      if (mode.playing) return;
      mode.groups = cfg.getGroups() || [];
      if (!mode.groups.length) return;
      mode.gi = Math.min(mode.gi, mode.groups.length - 1);
      mode.ii = Math.min(mode.ii, items(group()).length - 1);
      renderManual();
      updateButtons();
    };

    mode.stop = stop;

    modesByScreen[cfg.screenId] = mode;
    if (typeof TRAINING_SCREENS !== 'undefined' && !TRAINING_SCREENS.includes(cfg.screenId)) {
      TRAINING_SCREENS.push(cfg.screenId);
    }
    registerMode(cfg.id, mode.show);
    return mode;
  }

  // ── Active mode helpers ───────────────────────────────────────────────────
  function activeMode() {
    for (const screenId in modesByScreen) {
      const el = $(screenId);
      if (el && el.style.display !== 'none' && el.style.display !== '') {
        return modesByScreen[screenId];
      }
    }
    return null;
  }

  // Re-render the currently open training mode with fresh data
  // (called when a settings/bundle overlay closes).
  function reloadActive() {
    const m = activeMode();
    if (m && m.reload) m.reload();
  }

  // ── Global keyboard dispatch (one listener for all card modes) ───────────
  document.addEventListener('keydown', e => {
    const anyOverlayOpen = document.querySelector('.settings-overlay.open, #settingsOverlay.open, #packSettingsOverlay.open');
    if (anyOverlayOpen) return;

    if (e.key === 'Escape') {
      const m = activeMode();
      if (m) { if (m.stop) m.stop(); closeTraining(m.screenId); return; }
      if (typeof modeScreen !== 'undefined' && modeScreen.classList.contains('screen--active')) showHome();
      return;
    }

    const m = activeMode();
    if (!m || !m.keys || !m.keys[e.key]) return;
    if (e.key === ' ') e.preventDefault();
    m.keys[e.key]();
  });

  return {
    createCardMode,
    createHandsfreeMode,
    reloadActive,
    activeMode,
    loadGroups,
    shuffle,
    pickVoice,
    tts: TTS,
    attachSwipe,
    // Set by app-modes.js — opens the shared training settings overlay
    openTrainingSettings: function () {
      const overlay = $('settingsOverlay');
      if (overlay) overlay.classList.add('open');
    },
    modesByScreen,
  };
})();

window.DS = DS;
