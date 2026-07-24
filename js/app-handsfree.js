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
  const voices = speechSynthesis.getVoices();
  const en = voices.filter(v => v.lang.startsWith('en'))
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
  if (!DS.tts.isNative() || !voices.length) return;

  const saved = localStorage.getItem(HF_VOICE_KEY);
  HF_VOICE_SELECTS.forEach(id => {
    const sel = document.getElementById(id);
    if (!sel) return;
    sel.innerHTML = voices
      .map(v => `<option value="${v.index}">${v.name} (${v.lang})</option>`)
      .join('');
    // Restore the saved voice, else prefer a female-sounding default so the
    // app still sounds the way it did before.
    const fallback = voices.find(v => /samantha|ava|allison|karen|serena|moira|tessa/i.test(v.name));
    const want = (saved !== null && voices.some(v => String(v.index) === saved))
      ? saved
      : String((fallback || voices[0]).index);
    sel.value = want;
    if (sel._voiceBound) return;   // re-running must not stack listeners
    sel._voiceBound = true;
    sel.addEventListener('change', () => {
      localStorage.setItem(HF_VOICE_KEY, sel.value);
      // Keep every handsfree mode on the same voice.
      HF_VOICE_SELECTS.forEach(other => {
        const o = document.getElementById(other);
        if (o && o !== sel) o.value = sel.value;
      });
    });
  });
}
initHandsfreeVoicePickers();

// Refresh the list every time a handsfree settings panel is opened, so a voice
// downloaded in iOS Settings shows up without restarting the app.
['hf', 'hfMem', 'hfChall', 'hfFlow', 'hfMind', 'hfColl'].forEach(prefix => {
  const btn = document.getElementById(prefix + 'SettingsBtn');
  if (btn) btn.addEventListener('click', () => { initHandsfreeVoicePickers(); });
});

// ─── HANDSFREE: SINGLE STRATEGY ───────────────────────────────────────────────
DS.createHandsfreeMode({
  id: 'modeHandsfree',
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
  itemFront: it => it.front,
  itemBack:  it => it.back,
  // Situation cards have front === back — don't read them twice
  speakBack: it => it.back !== it.front,
});

// ─── HANDSFREE: MINDSET ───────────────────────────────────────────────────────
DS.createHandsfreeMode({
  id: 'modeHandsfreeMindset',
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
