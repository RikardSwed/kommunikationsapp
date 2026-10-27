// app-handsfree.js — handsfree training mode definitions
// Part of Deckstack v1.25.0
//
// Each mode is a declarative config handed to DS.createHandsfreeMode().
// The TTS playback loop, skip/stop logic, manual navigation, settings
// overlay wiring and bundle filtering all live in mode-engine.js.

// ─── SHARED HELPERS ───────────────────────────────────────────────────────────

// Open a handsfree settings panel — renders bundle section dynamically
function openHfSettings(overlayId, placeholderId, counterCheckboxId) {
  if (window.renderBundleSection && activeCollectionKey) {
    const placeholder = document.getElementById(placeholderId);
    if (placeholder) renderBundleSection(placeholder, activeCollectionKey);
  }
  document.getElementById(overlayId).classList.add('open');
}

// Apply input counter visibility for all HF screens
function applyHfInputCounterVisibility() {
  const map = {
    hf: 'hfScreen', hfMem: 'hfMemScreen', hfChall: 'hfChallScreen',
    hfFlow: 'hfFlowScreen', hfMind: 'hfMindScreen', hfColl: 'hfCollScreen',
  };
  Object.keys(map).forEach(prefix => {
    const cb = document.getElementById(prefix + 'ShowInputCounter');
    const screen = document.getElementById(map[prefix]);
    if (!cb || !screen) return;
    screen.querySelectorAll('.sub-counter, .counter-sep').forEach(el => {
      el.style.display = cb.checked ? 'inline' : 'none';
    });
  });
}

// Voice debug helper
const _hfVoiceDebugBtn = document.getElementById('hfVoiceDebugBtn');
if (_hfVoiceDebugBtn) _hfVoiceDebugBtn.addEventListener('click', async () => {
  // Report WHICH engine is live and, when it is not the native one, why.
  // Guessing at this from the outside cost us a whole build.
  if (DS.tts) { try { await DS.tts.loadNativeVoices(); } catch (e) {} }
  const d = DS.tts ? DS.tts.diagnostics() : null;

  if (d && d.ready) {
    alert('ENGINE: native (iOS speech)\n\n'
      + DS.tts.voices().map(v => v.name + '  —  ' + v.lang).join('\n'));
    return;
  }
  // Android's WebView may have no speechSynthesis at all. This button exists
  // to explain a broken engine, so it must not itself throw on the platform
  // where the engine is most likely to be missing.
  const voices = window.speechSynthesis ? speechSynthesis.getVoices() : [];
  const en = voices.filter(v => v.lang && v.lang.startsWith('en'))
                   .filter(v => !DS.tts || DS.tts.isRealVoice(v.name))
                   .map(v => v.name).join('\n');
  const why = d
    ? ('Capacitor: ' + (d.capacitor ? 'yes' : 'no')
       + '\nNative platform: ' + (d.nativePlatform ? 'yes' : 'no')
       + '\nPlugin found: ' + (d.pluginFound ? 'yes' : 'no')
       + (d.note ? '\n→ ' + d.note : ''))
    : '';
  alert('ENGINE: browser (Web Speech)\n' + (why ? why + '\n' : '')
    + '\n' + (en || 'No voices loaded yet — try again in a moment'));
});

// ── Voice pickers (v1.26.58) ────────────────────────────────────────────
// In the browser the Voice setting stays a plain Female / Male choice, because
// the Web Speech API on iOS only offers a couple of usable voices anyway.
// In the native app we can list every English voice actually installed on the
// device — including the Enhanced and Premium ones downloaded under Settings →
// Accessibility → Spoken Content → Voices — so the same control becomes a real
// picker. The choice is stored so it survives leaving the screen.
const HF_VOICE_SELECTS = ['hfVoice', 'hfMemVoice', 'hfChallVoice', 'hfFlowVoice', 'hfMindVoice', 'hfCollVoice'];
const HF_VOICE_KEY = 'ds_hf_voice';

async function initHandsfreeVoicePickers() {
  if (!DS.tts) return;
  // Probe FIRST — isNative() only reports true once the plugin has answered,
  // so checking it before loading would always be false and skip the picker.
  const voices = await DS.tts.loadNativeVoices();
  if (!DS.tts.isNative()) { await initWebStudioPickers(); return; }
  if (!voices.length) return;

  const saved = localStorage.getItem(HF_VOICE_KEY);
  // Studio voices (beta, 2026-10-26): only with the developer switch on, and
  // only voices that are actually on the phone. Off = the list is exactly as
  // before, and a saved studio choice falls back to an iPhone voice.
  const studio = window.DSStudio ? await window.DSStudio.voices() : [];
  const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  const iphoneOpts = voices
    .map(v => `<option value="${v.index}">${esc(v.name)} (${esc(v.lang)})</option>`)
    .join('');
  const optionsHtml = studio.length
    ? '<optgroup label="Studio voices">' +
        studio.map(v => `<option value="${esc(window.DSStudio.PREFIX + v)}">${esc(window.DSStudio.label(v))}</option>`).join('') +
      '</optgroup><optgroup label="iPhone voices">' + iphoneOpts + '</optgroup>'
    : iphoneOpts;
  const fallback = voices.find(v => /samantha|ava|allison|karen|serena|moira|tessa/i.test(v.name));
  const fallbackVal = String((fallback || voices[0]).index);
  // The iPhone voice used for pieces a studio voice has no file for.
  if (!voices.some(v => String(v.index) === localStorage.getItem('ds_hf_voice_iphone'))) {
    localStorage.setItem('ds_hf_voice_iphone',
      (saved !== null && voices.some(v => String(v.index) === saved)) ? saved : fallbackVal);
  }
  HF_VOICE_SELECTS.forEach(id => {
    const sel = document.getElementById(id);
    if (!sel) return;
    sel.innerHTML = optionsHtml;
    // Restore the saved voice, else prefer a female-sounding default so the
    // app still sounds the way it did before.
    const has = v => [...sel.options].some(o => o.value === v);
    const want = (saved !== null && has(saved)) ? saved : fallbackVal;
    sel.value = want;
    if (sel._voiceBound) return;   // re-running must not stack listeners
    sel._voiceBound = true;
    sel.addEventListener('change', () => {
      localStorage.setItem(HF_VOICE_KEY, sel.value);
      if (!(window.DSStudio && window.DSStudio.isStudio(sel.value))) {
        localStorage.setItem('ds_hf_voice_iphone', sel.value);
      }
      // Keep every handsfree mode on the same voice.
      HF_VOICE_SELECTS.forEach(other => {
        const o = document.getElementById(other);
        if (o && o !== sel) o.value = sel.value;
      });
    });
  });
}
initHandsfreeVoicePickers();

// Web app (developer preview, v1.29.88): Female / Male as before, plus the
// studio voices downloaded in this browser. A piece a studio voice has no
// clip for is read by the last Female/Male choice (ds_hf_voice_browser).
async function initWebStudioPickers() {
  const S = window.DSStudio;
  const studio = (S && S.available()) ? await S.voices() : [];
  const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  const basic = '<option value="female">Female</option><option value="male">Male</option>';
  const optionsHtml = studio.length
    ? '<optgroup label="Studio voices">' +
        studio.map(v => `<option value="${esc(S.PREFIX + v)}">${esc(S.label(v))}</option>`).join('') +
      '</optgroup><optgroup label="Browser voices">' + basic + '</optgroup>'
    : basic;
  let saved = null;
  try { saved = localStorage.getItem(HF_VOICE_KEY); } catch (e) {}
  HF_VOICE_SELECTS.forEach(id => {
    const sel = document.getElementById(id);
    if (!sel) return;
    const was = sel.value;
    sel.innerHTML = optionsHtml;
    const has = v => [...sel.options].some(o => o.value === v);
    sel.value = (saved && has(saved)) ? saved : (has(was) ? was : 'female');
    if (sel._voiceBound) return;
    sel._voiceBound = true;
    sel.addEventListener('change', () => {
      try {
        localStorage.setItem(HF_VOICE_KEY, sel.value);
        if (sel.value === 'female' || sel.value === 'male') localStorage.setItem('ds_hf_voice_browser', sel.value);
      } catch (e) {}
      HF_VOICE_SELECTS.forEach(other => {
        const o = document.getElementById(other);
        if (o && o !== sel) o.value = sel.value;
      });
    });
  });
}


// Refresh the list every time a handsfree settings panel is opened, so a voice
// downloaded in iOS Settings shows up without restarting the app.
['hf', 'hfMem', 'hfChall', 'hfFlow', 'hfMind', 'hfColl'].forEach(prefix => {
  const btn = document.getElementById(prefix + 'SettingsBtn');
  if (btn) btn.addEventListener('click', () => { initHandsfreeVoicePickers(); renderStudioPanels(); });
});

// ── Studio voices: download panel (beta, v1.29.83) ───────────────────────────
// Under the Voice row in each handsfree settings sheet, in the iPhone app: the recorded voices available for the open
// pack, each with Download (size) / progress / Downloaded · Remove. With the
// switch off the panel is removed, so nothing of it shows. The Voices tab in
// the Library comes later and will reuse DSStudio.
async function renderStudioPanels() {
  const S = window.DSStudio;
  const on = !!(S && S.available());                 // iPhone app, or the web preview (v1.29.88)
  HF_VOICE_SELECTS.forEach(id => {
    const sel = document.getElementById(id);
    const row = sel && sel.closest('.settings-row');
    if (!row) return;
    let panel = row.nextElementSibling;
    if (!(panel && panel.classList.contains('studio-panel'))) panel = null;
    if (!on) { if (panel) panel.remove(); return; }
    if (!panel) {
      panel = document.createElement('div');
      panel.className = 'studio-panel';
      row.insertAdjacentElement('afterend', panel);
      panel.addEventListener('click', onStudioPanelClick);
    }
    panel.innerHTML = '<div class="studio-panel-note">Looking for studio voices…</div>';
  });
  if (!on) return;
  const pack = typeof activeCollectionKey !== 'undefined' ? activeCollectionKey : '';
  const [idx, inst] = await Promise.all([S.index(), S.installed()]);
  const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  const mb = b => (b / 1048576).toFixed(b < 10485760 ? 1 : 0) + ' MB';
  const have = new Set(inst.filter(r => r.pack === pack).map(r => r.voice));
  let body;
  if (idx.error) {
    body = '<div class="studio-panel-note">' + esc(idx.error) + '</div>';
  } else {
    const list = (idx.voices || []).filter(v => v.packs && v.packs[pack]);
    body = list.length ? list.map(v => {
      const item = v.packs[pack], key = v.voice + '/' + pack, pct = S.progress[key];
      const action = pct != null
        ? '<span class="studio-state">Downloading ' + pct + ' %</span>'
        : have.has(v.voice)
          ? '<span class="studio-state studio-ok">✓ Downloaded</span><button class="studio-btn studio-btn--quiet" data-act="remove" data-voice="' + esc(v.voice) + '">Remove</button>'
          : '<button class="studio-btn" data-act="download" data-voice="' + esc(v.voice) + '">Download · ' + mb(item.bytes) + '</button>';
      return '<div class="studio-row"><span class="studio-name">' + esc(S.label(v.voice)) + '</span><span class="studio-actions">' + action + '</span></div>';
    }).join('') : '<div class="studio-panel-note">No studio voices for this pack yet.</div>';
  }
  // v1.29.85 — the mobile-data choice lives in Library → Voices → ⚙ now.
  const foot = '<div class="studio-panel-note">A downloaded voice is chosen under Voice above.</div>';
  document.querySelectorAll('.studio-panel').forEach(p => {
    p.innerHTML = '<div class="studio-panel-title">Studio voices for this pack</div>' + body + foot;
  });
}
window.renderStudioPanels = renderStudioPanels;

async function onStudioPanelClick(e) {
  const btn = e.target.closest('[data-act]');
  if (!btn || btn.disabled) return;
  const S = window.DSStudio, voice = btn.getAttribute('data-voice');
  const pack = typeof activeCollectionKey !== 'undefined' ? activeCollectionKey : '';
  const act = btn.getAttribute('data-act');
  btn.disabled = true;
  if (act === 'download') {
    // Show the progress while it runs; the plugin reports per cent.
    const tick = setInterval(() => {
      const pct = S.progress[voice + '/' + pack];
      document.querySelectorAll('.studio-panel [data-voice="' + String(voice).replace(/["\\]/g, '\\$&') + '"][data-act="download"]')
        .forEach(b => { b.textContent = 'Downloading ' + (pct || 0) + ' %'; b.disabled = true; });
    }, 300);
    try {
      await S.download(voice, pack);
      await initHandsfreeVoicePickers();
    } catch (err) {
      const msg = (err && err.message) || String(err);
      const offline = /offline|not connected|cellular|internet/i.test(msg);
      if (window.showToast) window.showToast(offline && !S.cellular()
        ? 'No Wi-Fi. Connect to Wi-Fi, or allow mobile data in Library → Voices → ⚙.'
        : 'The download did not finish. Try again.');
    } finally { clearInterval(tick); }
  } else if (act === 'remove') {
    try { await S.remove(voice, pack); await initHandsfreeVoicePickers(); } catch (err) {}
  }
  renderStudioPanels();
}

// ─── HANDSFREE: SINGLE STRATEGY ───────────────────────────────────────────────
DS.createHandsfreeMode({
  id: 'modeHandsfree',
  baseGuide: ['Use this strategy when...', 'One way it could sound'],
  screenId: 'hfScreen',
  prefix: 'hf',
  els: {
    title: 'hfStrategyName', front: 'hfInputText', back: 'hfAnswerText',
    prevGroupBtn: 'hfPrevStepBtn', nextGroupBtn: 'hfNextStepBtn',
    prevItemBtn: 'hfPrevInputBtn',  nextItemBtn: 'hfNextInputBtn',
    counter: 'hfCounter', subCounter: 'hfSubCounter',
  },
  maxItemsId: 'hfMaxInputs',
  getGroups: () => DS.loadGroups(collections, activeCollectionKey, 'inputs'),
  getItems: g => g.inputs,
  groupTitle: g => g.name,
  itemFront: it => it.q,
  itemBack:  it => it.a,
});

// ─── HANDSFREE: MEMORIZE ──────────────────────────────────────────────────────
DS.createHandsfreeMode({
  id: 'modeHandsfreeMemorize',
  baseGuide: ['', ''],
  screenId: 'hfMemScreen',
  prefix: 'hfMem',
  els: {
    title: 'hfMemStrategyName', front: 'hfMemQuestionText', back: 'hfMemAnswerText',
    prevGroupBtn: 'hfMemPrevStepBtn', nextGroupBtn: 'hfMemNextStepBtn',
    prevItemBtn: 'hfMemPrevCardBtn',   nextItemBtn: 'hfMemNextCardBtn',
    counter: 'hfMemCounter', subCounter: 'hfMemSubCounter',
  },
  maxItemsId: 'hfMemMaxCards',
  getGroups: () => DS.loadGroups(memorizeCollections, activeCollectionKey, 'cards'),
  getItems: g => g.cards,
  groupTitle: g => g.name,
  // Memorize decks borrow their description from the source pack
  groupDescription: g => {
    const src = (collections[activeCollectionKey] || []).find(s => s.name === g.name);
    return src ? src.description : '';
  },
  itemFront: it => it.q,
  itemBack:  it => it.a,
});

// ─── HANDSFREE: CHALLENGES ────────────────────────────────────────────────────
DS.createHandsfreeMode({
  id: 'modeHandsfreeChallenges',
  baseGuide: ['Choose a strategy when...', 'One way it could sound'],
  screenId: 'hfChallScreen',
  prefix: 'hfChall',
  els: {
    title: 'hfChallName', front: 'hfChallFrontText', back: 'hfChallBackText',
    prevGroupBtn: 'hfChallPrevStepBtn', nextGroupBtn: 'hfChallNextStepBtn',
    prevItemBtn: 'hfChallPrevInputBtn', nextItemBtn: 'hfChallNextInputBtn',
    counter: 'hfChallCounter', subCounter: 'hfChallSubCounter',
  },
  maxItemsId: 'hfChallMaxInputs',
  getGroups: () => DS.loadGroups(challengesCollections, activeCollectionKey, 'inputs'),
  getItems: g => g.inputs,
  groupTitle: g => g.name,
  itemFront: it => it.q,
  itemBack:  it => it.a,
});

// ─── HANDSFREE: SEQUENCES ─────────────────────────────────────────────────────
DS.createHandsfreeMode({
  id: 'modeHandsfreeSequences',
  baseGuide: ["Use the planned strategy when...", 'One way it could sound'],
  screenId: 'hfFlowScreen',
  prefix: 'hfFlow',
  els: {
    title: 'hfFlowComboName', front: 'hfFlowFrontText', back: 'hfFlowBackText',
    prevGroupBtn: 'hfFlowPrevStepBtn', nextGroupBtn: 'hfFlowNextStepBtn',
    prevItemBtn: 'hfFlowPrevCardBtn',   nextItemBtn: 'hfFlowNextCardBtn',
    counter: 'hfFlowCounter', subCounter: 'hfFlowSubCounter',
  },
  maxItemsId: null,
  getGroups: () => multiStepCollections[activeCollectionKey] || [],
  getItems: buildFlowSequence,   // from app-modes.js
  groupTitle: g => g.name,
  // The scenario card is read from `plain` — the same sentence without the
  // pin, which the synthesiser would otherwise have to make something of.
  itemFront: it => it.plain || it.front,
  itemBack:  it => it.back,
  // A back is read when there is one. From v1.27.17 the scenario card's back
  // is the numbered move list, which is worth hearing — "can you name the
  // steps?" works aloud as well as on screen. Turn Card back off in handsfree
  // settings to skip every back, this one included.
  //
  // v1.27.16 — THIS GUARD USED TO BE `it.back !== it.front` AND IT NEVER ONCE
  // FIRED. The comment beside it said "situation cards have front === back",
  // which stopped being true the moment buildFlowSequence prepended a pin to
  // the front. So handsfree read the whole scenario, paused, and read it again
  // with "One way it could sound." in front of it. Testing on what the card
  // HAS rather than on how its text reads means a cosmetic change can no
  // longer silently switch off how it sounds.
  speakBack: it => it.type !== 'situation' || !!it.hasBack,
  canFlip:   it => !it || it.type !== 'situation' || !!it.hasBack,
});

// ─── HANDSFREE: MINDSET ───────────────────────────────────────────────────────
DS.createHandsfreeMode({
  id: 'modeHandsfreeMindset',
  baseGuide: ['A limiting thought', 'A way to reset it'],
  screenId: 'hfMindScreen',
  prefix: 'hfMind',
  els: {
    title: 'hfMindName', front: 'hfMindFrontText', back: 'hfMindBackText',
    prevGroupBtn: 'hfMindPrevStepBtn', nextGroupBtn: 'hfMindNextStepBtn',
    prevItemBtn: 'hfMindPrevInputBtn', nextItemBtn: 'hfMindNextInputBtn',
    counter: 'hfMindCounter', subCounter: 'hfMindSubCounter',
  },
  maxItemsId: 'hfMindMaxInputs',
  getGroups: () => DS.loadGroups(mindsetCollections, activeCollectionKey, 'inputs'),
  getItems: g => g.inputs,
  groupTitle: g => g.name,
  itemFront: it => it.q,
  itemBack:  it => it.a,
});

// ─── HANDSFREE: COLLECTIONS ───────────────────────────────────────────────────
DS.createHandsfreeMode({
  id: 'modeHandsfreeCollections',
  baseGuide: ['Choose a strategy when...', 'One way it could sound'],
  screenId: 'hfCollScreen',
  prefix: 'hfColl',
  els: {
    title: 'hfCollName', front: 'hfCollFrontText', back: 'hfCollBackText',
    prevGroupBtn: 'hfCollPrevStepBtn', nextGroupBtn: 'hfCollNextStepBtn',
    prevItemBtn: 'hfCollPrevInputBtn', nextItemBtn: 'hfCollNextInputBtn',
    counter: 'hfCollCounter', subCounter: 'hfCollSubCounter',
  },
  maxItemsId: 'hfCollMaxInputs',
  // v1.26.26: Collections has its OWN data source (strategy combinations)
  getGroups: () => DS.loadGroups(collectionsModeData, activeCollectionKey, 'inputs'),
  getItems: g => g.inputs,
  groupTitle: g => g.name,
  itemFront: it => it.q,
  itemBack:  it => it.a,
});

// Apply saved counter visibility once at startup
applyHfInputCounterVisibility();

// ─── UPPGIFT 7 — Persist HF shuffle toggles ───────────────────────────────────
(function persistHfShuffle() {
  const prefixes = ['hf', 'hfMem', 'hfChall', 'hfFlow', 'hfMind', 'hfColl'];
  const suffixes = ['ShuffleStrategies', 'ShuffleInputs'];
  prefixes.forEach(p => {
    suffixes.forEach(s => {
      const id = p + s;
      const el = document.getElementById(id);
      if (!el) return;
      const key = 'hfShuffle:' + id;
      // Restore saved state
      const saved = localStorage.getItem(key);
      if (saved !== null) el.checked = saved === 'true';
      // Save on change
      el.addEventListener('change', () => localStorage.setItem(key, el.checked));
    });
  });
})();

// ─── Persist the remaining HF training settings ─────────────────────────
// Previously ONLY the shuffle toggles were saved, so Card back, Explainer,
// Loop and the pause / rate / max-inputs selects reset to their HTML defaults
// on every app launch. In the native app — where you close the app between
// runs — a setting you had turned off silently came back on, which looked like
// "the setting won't turn off". Persist them per prefix, the same way shuffle
// is. (Guide text is stored separately, per pack, in mode-engine.js.)
(function persistHfControls() {
  const prefixes = ['hf', 'hfMem', 'hfChall', 'hfFlow', 'hfMind', 'hfColl'];
  const checkboxes = ['Explanation', 'CardBack', 'LoopStrategy'];
  const selects    = ['ThinkPause', 'GenPause', 'Rate', 'MaxInputs'];
  prefixes.forEach(p => {
    checkboxes.forEach(s => {
      const el = document.getElementById(p + s);
      if (!el) return;
      const key = 'hfSet:' + p + s;
      const saved = localStorage.getItem(key);
      if (saved !== null) el.checked = saved === 'true';
      el.addEventListener('change', () => localStorage.setItem(key, el.checked));
    });
    selects.forEach(s => {
      const el = document.getElementById(p + s);
      if (!el) return;
      const key = 'hfSet:' + p + s;
      const saved = localStorage.getItem(key);
      if (saved !== null) el.value = saved;
      el.addEventListener('change', () => localStorage.setItem(key, el.value));
    });
  });
})();
