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

    // ── Feedback / access-level bars ───────────────────────────────────────
    function renderBars() {
      const g = group();
      if (cfg.fb && window.fbRender && window.fbKey) {
        const gk = cfg.fb.groupKey(g, mode.gi);
        fbRender(`fb-${cfg.barPrefix}-front`, fbKey(cfg.fb.id, gk, mode.ii, 'front'));
        fbRender(`fb-${cfg.barPrefix}-back`,  fbKey(cfg.fb.id, gk, mode.ii, 'back'));
      }
      if (cfg.al && window.alRender && window.alKey) {
        const gk = cfg.al.groupKey(g, mode.gi);
        alRender(`al-${cfg.barPrefix}-front`, alKey(cfg.al.id, gk, mode.ii, 'front'));
        alRender(`al-${cfg.barPrefix}-back`,  alKey(cfg.al.id, gk, mode.ii, 'back'));
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
    function nextGroup() { trig('left',  () => { info.close(); mode.gi = (mode.gi + 1) % mode.groups.length; mode.ii = 0; render(); }); }
    function prevGroup() { trig('right', () => { info.close(); mode.gi = (mode.gi - 1 + mode.groups.length) % mode.groups.length; mode.ii = 0; render(); }); }

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
    function plugin() {
      return (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.TextToSpeech) || null;
    }
    function isNative() {
      return !!(window.Capacitor
        && typeof window.Capacitor.isNativePlatform === 'function'
        && window.Capacitor.isNativePlatform()
        && plugin());
    }

    let nativeVoices = [];   // [{ index, name, lang }] — index is what speak() wants

    // Apple ships a set of novelty "voices" (Bells, Boing, Bubbles, Jester,
    // Trinoids, Whisper…) that sing or gargle rather than speak. They are
    // useless for reading cards aloud and must never be picked by a fallback.
    const NOVELTY = /^(albert|bad news|bahh|bells|boing|bubbles|cellos|good news|jester|junior|organ|superstar|trinoids|whisper|wobble|zarvox|deranged|hysterical|pipe organ|princess)$/i;
    function isRealVoice(name) { return !NOVELTY.test(String(name || '').trim()); }

    async function loadNativeVoices() {
      const p = plugin();
      if (!p) return [];
      try {
        const res = await p.getSupportedVoices();
        const all = (res && res.voices) || [];
        nativeVoices = all
          .map((v, index) => ({ index, name: v.name || '', lang: v.lang || '' }))
          .filter(v => /^en/i.test(v.lang) && isRealVoice(v.name));
      } catch (e) {
        nativeVoices = [];
      }
      return nativeVoices;
    }

    function voices() { return nativeVoices; }

    function speak(text, opts) {
      const rate = (opts && opts.rate) || 1;
      const pick = opts ? opts.voice : null;
      const p = plugin();

      if (isNative() && p) {
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
        // The plugin resolves when the utterance finishes, which is exactly
        // what the caller awaits. Never reject — a failed line must not stall
        // the playback loop.
        return p.speak(req).catch(() => {});
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
      const p = plugin();
      if (isNative() && p) { try { p.stop(); } catch (e) {} return; }
      try { speechSynthesis.cancel(); } catch (e) {}
    }

    // Browsers need a user-gesture-time utterance before audio will play.
    // The native path has no such restriction.
    function unlock() {
      if (isNative()) return;
      try {
        const u = new SpeechSynthesisUtterance(' ');
        u.volume = 0;
        speechSynthesis.speak(u);
      } catch (e) {}
    }

    return { isNative, loadNativeVoices, voices, speak, stop, unlock, isRealVoice };
  })();
  // NOTE: do NOT write `DS.tts = TTS` here. Everything in this file runs inside
  // the IIFE that produces DS, so DS is still in its temporal dead zone at this
  // point and touching it throws "Cannot access 'DS' before initialization",
  // which aborts the whole module and leaves the app with no training modes at
  // all. The engine is exported on the returned object instead — see `tts:`
  // near the bottom.

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
      els.playBtn.innerHTML = mode.playing ? HF_PAUSE_SVG : HF_PLAY_SVG;
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

    // ── Playback loop ──────────────────────────────────────────────────────
    async function play() {
      if (mode.playing) { stop(); return; }
      if (!mode.groups.length) return;

      // iOS unlock (browser only — the native engine needs no gesture)
      TTS.unlock();

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
      clearTimeouts();
      updateButtons();
    }

    function stop() {
      mode.abort = true; mode.playing = false; mode.skipStep = false;
      // Resume marker (v1.26.35): remember which strategy we paused in so
      // the next play() skips the intro and continues where we left off.
      mode.pausedInGroup = mode.gi;
      // Release a pending pause-delay BEFORE clearing timeouts — otherwise
      // the play coroutine stays suspended on that promise forever and its
      // cleanup tail never runs.
      if (mode.delayResolve) { mode.delayResolve(); mode.delayResolve = null; }
      TTS.stop();
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
