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
if (_hfVoiceDebugBtn) _hfVoiceDebugBtn.addEventListener('click', () => {
  const voices = speechSynthesis.getVoices();
  const en = voices.filter(v => v.lang.startsWith('en')).map(v => v.name).join('\n');
  alert('Available English voices:\n\n' + (en || 'None loaded yet — try again in a moment'));
});

// ─── HANDSFREE: SINGLE STRATEGY ───────────────────────────────────────────────
DS.createHandsfreeMode({
  id: 'modeHandsfree',
  screenId: 'hfScreen',
  prefix: 'hf',
  els: {
    title: 'hfStrategyName', front: 'hfInputText', back: 'hfAnswerText',
    prevGroupBtn: 'hfPrevStratBtn', nextGroupBtn: 'hfNextStratBtn',
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
    prevGroupBtn: 'hfMemPrevStratBtn', nextGroupBtn: 'hfMemNextStratBtn',
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
    prevGroupBtn: 'hfChallPrevBtn', nextGroupBtn: 'hfChallNextBtn',
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
    prevGroupBtn: 'hfFlowPrevComboBtn', nextGroupBtn: 'hfFlowNextComboBtn',
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
    prevGroupBtn: 'hfMindPrevBtn', nextGroupBtn: 'hfMindNextBtn',
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
    prevGroupBtn: 'hfCollPrevBtn', nextGroupBtn: 'hfCollNextBtn',
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
