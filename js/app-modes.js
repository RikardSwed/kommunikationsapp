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
  // v1.27.03 — per-card notes. The panel is keyed off the SAME id and
  // groupKey as `fb` above, so a note and a rating on one card side share
  // an identity and the export can merge them without any matching.
  note: { panel: 'cardNote', area: 'cardNoteArea', close: 'cardNoteClose', hint: 'hint' },
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
    // Where a Memorize deck's theory text comes from (v1.27.14).
    //
    // A Memorize deck mirrors something else in the pack, so it borrows that
    // thing's description: a deck named exactly like a Single Strategy shows
    // that strategy's theory, and "Challenge: X" shows challenge X's. That
    // borrowing is why the names have to match character for character.
    //
    // But it was the ONLY source, and a deck matching nothing showed an empty
    // panel — 100 of the app's 415 Memorize decks did, including every single
    // "Core Idea". Nothing was wrong with those decks; they simply had theory
    // nowhere to put it. So the deck's own description is now the fallback,
    // which also lets a deck that combines several things (What goes wrong,
    // In what order) carry its own text.
    getText: g => {
      if (!g) return '';
      let src = (collections[activeCollectionKey] || []).find(s => s.name === g.name);
      if (!src && g.name.startsWith('Challenge: ')) {
        const challName = g.name.replace('Challenge: ', '');
        src = (challengesCollections[activeCollectionKey] || []).find(c =>
          c.name === challName || c.name.includes(challName) || challName.includes(c.name)
        );
      }
      if (src && src.description) return src.description;
      return g.description || '';
    },
  },
  getGroups: () => DS.loadGroups(memorizeCollections, activeCollectionKey, 'cards'),
  getItems: g => g.cards,
  groupTitle: g => g.name,
  itemFront: it => it.q,
  itemBack:  it => it.a,
  barPrefix: 'mem',
  note: { panel: 'memCardNote', area: 'memCardNoteArea', close: 'memCardNoteClose', hint: 'memHint' },
  fb: { id: 'mem', groupKey: (g, gi) => gi },
  al: { id: 'mem', groupKey: (g, gi) => gi },
});

// ─── SEQUENCES (FLOW) ─────────────────────────────────────────────────────────
// A combo's items are its flattened sequence: situation card + step cards.

// The moves in a scenario, as a numbered list — the back of the scenario card.
//
// It is derived rather than written because it is the same information twice:
// the steps are already there, and a hand-written copy of them is one more
// thing that can fall out of step with the scenario it describes.
//
// TWO SPELLINGS EXIST IN THE LIBRARY and both have to work, which is why this
// is not a one-line split:
//
//     "Opening Statement — the board changes to delayed again."   name FIRST
//     "Step 1 — Claim the turn"                                   name LAST
//
// 405 of the app's 467 scenarios yield a full list. The other 62 are mostly
// one pack (describethings) whose steps are lines of dialogue with no move in
// them — there is nothing to list, so those scenario cards keep their old
// behaviour and do not turn. Returning '' is how that is said.
function scenarioMoveList(inp) {
  const steps = (inp && inp.steps) || [];
  if (!steps.length) return '';
  const names = steps.map(s => {
    const parts = String(s.front || '').split(/\s+[—–]\s+/);
    if (parts.length < 2) return '';
    const first = parts[0].trim(), second = parts[1].trim();
    const name = /^(step|steg)\s*\d+\.?$/i.test(first) ? second : first;
    // A whole sentence is a description, not a move. 60 characters is well
    // clear of the longest real strategy name in the library.
    return (name && name.length <= 60) ? name : '';
  });
  if (names.some(n => !n)) return '';          // all or nothing — a half list misleads
  return names.map((n, i) => (i + 1) + '. ' + n).join('\n');
}

function buildFlowSequence(combo) {
  const seq = [];
  // Filter inputs by active bundle before flattening to cards.
  // Each input is one scenario (situation + steps) — filtering here
  // keeps only the scenarios that belong to the active bundles.
  const filtered = window.filterInputsByBundle
    ? window.filterInputsByBundle(combo.inputs || [], activeCollectionKey)
    : (combo.inputs || []);
  filtered.forEach(inp => {
    // THE SCENARIO CARD (v1.27.16, back rewritten v1.27.17). It opens a
    // scenario and sets the scene. Its back used to hold the same sentence as
    // its front, so the flip returned you to where you already were; now it
    // holds the moves as a numbered list, which makes the flip a test — can
    // you name the steps before you look?
    //
    //   guideFront  its own guide, DEFAULTED HERE, NOT HARDCODED. Without one
    //               the card inherited the combo's — "What they said, and the
    //               strategy to answer it with." — on a card where nobody has
    //               said anything and there is no strategy. In handsfree that
    //               sentence was read ALOUD before the scenario. A pack that
    //               wants different words writes them on the Situation line;
    //               see the parser in editor-core.js.
    //   back        the move list, or whatever the pack wrote instead. Empty
    //               when neither exists — see scenarioMoveList above.
    //   plain       the same sentence without the pin, for the voice. The pin
    //               is a visual marker; the synthesiser has no use for it.
    //   type        what `canFlip` and handsfree's `speakBack` test against.
    //               They used to compare front with back, which stopped
    //               working the moment the pin was prepended to the front —
    //               see app-handsfree.js.
    const sBack = (inp.back && String(inp.back).trim()) || scenarioMoveList(inp);
    seq.push({
      type: 'situation',
      front: '\u{1F4CD} ' + inp.situation,
      back: sBack,
      hasBack: !!sBack,
      plain: inp.situation,
      guideFront: inp.guideFront || 'The scenario',
      guideBack:  inp.guideBack  || 'The steps, in order',
    });
    (inp.steps || []).forEach(s => seq.push({
      type: 'step', front: s.front, back: s.back,
      // Per-card guide text (v1.26.32) — carried through so the engine
      // can override the strategy default for individual steps.
      guideFront: s.guideFront, guideBack: s.guideBack,
    }));
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
  // A scenario card turns only when it has something else on the back — the
  // move list, or text the pack wrote. In the scenarios where neither exists
  // there is nothing to turn to, so it stays put.
  canFlip: it => !it || it.type !== 'situation' || !!it.hasBack,
  barPrefix: 'flow',
  note: { panel: 'flowCardNote', area: 'flowCardNoteArea', close: 'flowCardNoteClose', hint: 'flowHint' },
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
  info: { panel: 'challCardInfo', text: 'challCardInfoText', trigger: 'challName', close: 'challCardInfoClose' },
  getGroups: () => DS.loadGroups(challengesCollections, activeCollectionKey, 'inputs'),
  getItems: g => g.inputs,
  groupTitle: g => g.name,
  itemFront: it => it.q,
  itemBack:  it => it.a,
  barPrefix: 'chall',
  // Preserves existing localStorage keys: fb_{pack}_challScreen_{name}_{idx}_{side}
  note: { panel: 'challCardNote', area: 'challCardNoteArea', close: 'challCardNoteClose', hint: 'challHint' },
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
  info: { panel: 'mindCardInfo', text: 'mindCardInfoText', trigger: 'mindName', close: 'mindCardInfoClose' },
  getGroups: () => DS.loadGroups(mindsetCollections, activeCollectionKey, 'inputs'),
  getItems: g => g.inputs,
  groupTitle: g => g.name,
  itemFront: it => it.q,
  itemBack:  it => it.a,
  barPrefix: 'mind',
  note: { panel: 'mindCardNote', area: 'mindCardNoteArea', close: 'mindCardNoteClose', hint: 'mindHint' },
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
    closeBtn: 'collCloseBtn', settingsBtn: 'collSettingsBtn',
  },
  info: { panel: 'collCardInfo', text: 'collCardInfoText', trigger: 'collName', close: 'collCardInfoClose' },
  // v1.26.26: Collections has its OWN data source (strategy combinations),
  // no longer shared with Single Strategy.
  getGroups: () => DS.loadGroups(collectionsModeData, activeCollectionKey, 'inputs'),
  getItems: g => g.inputs,
  groupTitle: g => g.name,
  itemFront: it => it.q,
  itemBack:  it => it.a,
  barPrefix: 'coll',
  note: { panel: 'collCardNote', area: 'collCardNoteArea', close: 'collCardNoteClose', hint: 'collHint' },
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

  // v1.27.04 — this used to set `visibility: hidden`, which hides the line AND
  // stops it receiving taps. Since v1.27.03 the same line is the three-tap
  // target that opens a card's note, so turning hints off silently removed the
  // way in. A class that makes the text transparent keeps the box, the layout
  // and the taps; only the words go.
  //
  // The list also gained challHint, mindHint and collHint. They were missing,
  // so "Show hints" never did anything on Challenges, Mindset or Collections.
  ['hint','memHint','msHint','flowHint','guidedHint','hfHint',
   'challHint','mindHint','collHint'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.visibility = '';            // clear the old inline style
    el.classList.toggle('hint--muted', !showH);
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
