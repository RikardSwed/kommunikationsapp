// app-modes.js — standard training mode definitions + shared settings
// Part of Deckstack v1.25.0
//
// Each mode is a declarative config handed to DS.createCardMode().
// All behaviour (swipe, flip, render, counters, feedback bars, progress bar,
// keyboard, bundle filtering) lives in mode-engine.js.
//
// To add a new mode: add a config block here + a screen in index.html.

// ─── SINGLE STRATEGY ──────────────────────────────────────────────────────────
DS.createCardMode({
  id: 'modeFlashcard',
  screenId: 'trainingScreen',
  els: {
    card: 'card', inner: 'cardInner', title: 'strategyName',
    front: 'inputText', back: 'answerText',
    counter: 'counter', subCounter: 'subCounter',
    prevGroupBtn: 'prevStratBtn', nextGroupBtn: 'nextStratBtn',
    prevItemBtn: 'prevInputBtn',  nextItemBtn: 'nextInputBtn',
    closeBtn: 'closeBtn', settingsBtn: 'settingsBtn',
  },
  info: { panel: 'cardInfo', text: 'cardInfoText', trigger: 'strategyName', close: 'cardInfoClose' },
  getGroups: () => DS.loadGroups(collections, activeCollectionKey, 'inputs'),
  getItems: g => g.inputs,
  groupTitle: g => g.name,
  itemFront: it => it.q,
  itemBack:  it => it.a,
  shuffle: true,
  barPrefix: 'single',
  fb: { id: 'single', groupKey: (g, gi) => gi },
  al: { id: 'single', groupKey: (g, gi) => gi },
});

// ─── MEMORIZE ─────────────────────────────────────────────────────────────────
DS.createCardMode({
  id: 'modeMemorize',
  screenId: 'memScreen',
  els: {
    card: 'memCard', inner: 'memCardInner', title: 'memStrategyName',
    front: 'memQuestionText', back: 'memAnswerText',
    counter: 'memCounter', subCounter: 'memSubCounter',
    prevGroupBtn: 'memPrevStratBtn', nextGroupBtn: 'memNextStratBtn',
    prevItemBtn: 'memPrevCardBtn',   nextItemBtn: 'memNextCardBtn',
    closeBtn: 'memCloseBtn', settingsBtn: 'memSettingsBtn',
  },
  info: {
    panel: 'memCardInfo', text: 'memCardInfoText',
    trigger: 'memStrategyName', close: 'memCardInfoClose',
    // Memorize decks have no own description — look it up in the source pack
    getText: g => {
      if (!g) return '';
      let src = (collections[activeCollectionKey] || []).find(s => s.name === g.name);
      if (!src && g.name.startsWith('Challenge: ')) {
        const challName = g.name.replace('Challenge: ', '');
        src = (challengesCollections[activeCollectionKey] || []).find(c =>
          c.name === challName || c.name.includes(challName) || challName.includes(c.name)
        );
      }
      return src ? src.description : '';
    },
  },
  getGroups: () => DS.loadGroups(memorizeCollections, activeCollectionKey, 'cards'),
  getItems: g => g.cards,
  groupTitle: g => g.name,
  itemFront: it => it.q,
  itemBack:  it => it.a,
  barPrefix: 'mem',
  fb: { id: 'mem', groupKey: (g, gi) => gi },
  al: { id: 'mem', groupKey: (g, gi) => gi },
});

// ─── SEQUENCES (FLOW) ─────────────────────────────────────────────────────────
// A combo's items are its flattened sequence: situation card + step cards.
function buildFlowSequence(combo) {
  const seq = [];
  // Filter inputs by active bundle before flattening to cards.
  // Each input is one scenario (situation + steps) — filtering here
  // keeps only the scenarios that belong to the active bundles.
  const filtered = window.filterInputsByBundle
    ? window.filterInputsByBundle(combo.inputs || [], activeCollectionKey)
    : (combo.inputs || []);
  filtered.forEach(inp => {
    seq.push({ type: 'situation', front: '\u{1F4CD} ' + inp.situation, back: inp.situation });
    (inp.steps || []).forEach(s => seq.push({ type: 'step', front: s.front, back: s.back }));
  });
  return seq;
}

DS.createCardMode({
  id: 'modeFlow',
  screenId: 'flowScreen',
  els: {
    card: 'flowCard', inner: 'flowCardInner', title: 'flowComboName',
    front: 'flowFrontText', back: 'flowBackText',
    counter: 'flowCounter', subCounter: 'flowSubCounter',
    prevGroupBtn: 'flowPrevComboBtn', nextGroupBtn: 'flowNextComboBtn',
    prevItemBtn: 'flowPrevCardBtn',   nextItemBtn: 'flowNextCardBtn',
    closeBtn: 'flowCloseBtn', settingsBtn: 'flowSettingsBtn',
  },
  info: { panel: 'flowCardInfo', text: 'flowCardInfoText', trigger: 'flowComboName', close: 'flowCardInfoClose' },
  getGroups: () => multiStepCollections[activeCollectionKey] || [],
  getItems: buildFlowSequence,
  groupTitle: g => g.name,
  itemFront: it => it.front,
  itemBack:  it => it.back,
  barPrefix: 'flow',
  fb: { id: 'flow', groupKey: (g, gi) => gi },
  al: { id: 'flow', groupKey: (g, gi) => gi },
});

// ─── CHALLENGES ───────────────────────────────────────────────────────────────
DS.createCardMode({
  id: 'modeChallenges',
  screenId: 'challScreen',
  els: {
    card: 'challCard', inner: 'challCardInner', title: 'challName',
    front: 'challFrontText', back: 'challBackText',
    counter: 'challCounter', subCounter: 'challSubCounter',
    prevGroupBtn: 'challPrevBtn', nextGroupBtn: 'challNextBtn',
    prevItemBtn: 'challPrevInputBtn', nextItemBtn: 'challNextInputBtn',
    closeBtn: 'challCloseBtn', settingsBtn: 'challSettingsBtn',
  },
  getGroups: () => DS.loadGroups(challengesCollections, activeCollectionKey, 'inputs'),
  getItems: g => g.inputs,
  groupTitle: g => g.name,
  itemFront: it => it.q,
  itemBack:  it => it.a,
  barPrefix: 'chall',
  // Preserves existing localStorage keys: fb_{pack}_challScreen_{name}_{idx}_{side}
  fb: { id: 'challScreen', groupKey: g => g.name },
  al: { id: 'challScreen', groupKey: g => g.name },
});

// ─── MINDSET ──────────────────────────────────────────────────────────────────
DS.createCardMode({
  id: 'modeMindset',
  screenId: 'mindScreen',
  els: {
    card: 'mindCard', inner: 'mindCardInner', title: 'mindName',
    front: 'mindFrontText', back: 'mindBackText',
    counter: 'mindCounter', subCounter: 'mindSubCounter',
    prevGroupBtn: 'mindPrevBtn', nextGroupBtn: 'mindNextBtn',
    prevItemBtn: 'mindPrevInputBtn', nextItemBtn: 'mindNextInputBtn',
    closeBtn: 'mindCloseBtn', settingsBtn: 'mindSettingsBtn',
  },
  getGroups: () => DS.loadGroups(mindsetCollections, activeCollectionKey, 'inputs'),
  getItems: g => g.inputs,
  groupTitle: g => g.name,
  itemFront: it => it.q,
  itemBack:  it => it.a,
  barPrefix: 'mind',
  fb: { id: 'mindScreen', groupKey: g => g.name },
  al: { id: 'mindScreen', groupKey: g => g.name },
});

// ─── COLLECTIONS ──────────────────────────────────────────────────────────────
DS.createCardMode({
  id: 'modeCollections',
  screenId: 'collScreen',
  els: {
    card: 'collCard', inner: 'collCardInner', title: 'collName',
    front: 'collFrontText', back: 'collBackText',
    counter: 'collCounter', subCounter: 'collSubCounter',
    closeBtn: 'collCloseBtn',
  },
  getGroups: () => DS.loadGroups(collections, activeCollectionKey, 'inputs'),
  getItems: g => g.inputs,
  groupTitle: g => g.name,
  itemFront: it => it.q,
  itemBack:  it => it.a,
  barPrefix: 'coll',
  fb: { id: 'collScreen', groupKey: g => g.name },
  al: { id: 'collScreen', groupKey: g => g.name },
});

// ─── SHARED TRAINING SETTINGS OVERLAY ────────────────────────────────────────
// One overlay (#settingsOverlay) serves all standard modes.
// Opening it always refreshes the Input Bundles section for the active pack;
// closing it re-applies settings and reloads the open training mode.

DS.openTrainingSettings = function () {
  const panel = document.querySelector('#settingsOverlay .settings-panel');
  if (panel && window.renderBundleSection && activeCollectionKey) {
    renderBundleSection(panel, activeCollectionKey);
  }
  document.getElementById('settingsOverlay').classList.add('open');
};

function closeTrainingSettings() {
  document.getElementById('settingsOverlay').classList.remove('open');
  applySettings();
  window._noTrainingAnim = true;
  DS.reloadActive();
}

document.getElementById('settingsClose').addEventListener('click', closeTrainingSettings);
document.getElementById('settingsOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('settingsOverlay')) closeTrainingSettings();
});

function applySettings() {
  const showH = document.getElementById('showHints').checked;
  const showHVal = showH ? 'visible' : 'hidden';

  // Update hint visibility on all screens safely
  ['hint','memHint','msHint','flowHint','guidedHint','hfHint'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.visibility = showHVal;
  });

  applyInputCounterVisibility();
}

function applyInputCounterVisibility() {
  const show = document.getElementById('showInputCounter').checked;
  document.querySelectorAll('.sub-counter, .counter-sep').forEach(el => {
    el.style.display = show ? 'inline' : 'none';
  });
}

// Backwards-compatible helper (app-ui.js calls this when switching tabs):
// closes any open card-info panel on any screen.
function closeInfo() {
  document.querySelectorAll('.card-info.visible, [id$="CardInfo"].visible, #cardInfo.visible')
    .forEach(el => { el.classList.remove('visible'); el.scrollTop = 0; });
}
