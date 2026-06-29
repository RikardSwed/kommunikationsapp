// app.js — All application logic for Communication Trainer
// Depends on: data.js and multiStepData.js (must be loaded first)

const VERSION = 'v1.8.5';

// ─── SCREEN TRANSITION SYSTEM ─────────────────────────────────────────────────

const homeScreen     = document.getElementById('homeScreen');
const modeScreen     = document.getElementById('modeScreen');
const trainingScreen = document.getElementById('trainingScreen');
const msScreen       = document.getElementById('msScreen');
const memScreen      = document.getElementById('memScreen');

const TRAINING_SCREENS = [
  'trainingScreen','memScreen','msScreen','flowScreen','guidedScreen',
  'hfScreen','hfMemScreen','collScreen'
];

// Set a screen's transform state without transition
function screenSet(el, state) {
  el.style.transition = 'none';
  el.style.transform  = state;
  void el.offsetWidth; // force reflow
}

// Animate a screen to a transform state
function screenAnimate(el, toState, onDone) {
  el.style.transition = 'transform 0.32s cubic-bezier(0.4,0,0.2,1)';
  el.style.transform  = toState;
  if (onDone) el.addEventListener('transitionend', onDone, { once: true });
}

function hideAllTraining() {
  TRAINING_SCREENS.forEach(id => {
    const el = document.getElementById(id);
    el.style.transition = 'none';
    el.style.transform  = 'translateY(100%)';
    el.style.pointerEvents = 'none';
  });
}

function navToHome() {
  // Mode slides right, home comes back
  screenAnimate(modeScreen, 'translateX(100%)');
  modeScreen.style.pointerEvents = 'none';
  screenSet(homeScreen, 'translateX(0)');
  homeScreen.style.pointerEvents = '';
  hideAllTraining();
}

function navToMode() {
  // Home slides left (stays behind), mode slides in from right
  screenSet(modeScreen, 'translateX(100%)');
  modeScreen.style.pointerEvents = '';
  screenAnimate(modeScreen, 'translateX(0)');
  homeScreen.style.pointerEvents = 'none';
  hideAllTraining();
}

function navToTraining(id) {
  hideAllTraining();
  const el = document.getElementById(id);
  screenSet(el, 'translateY(100%)');
  el.style.pointerEvents = '';
  screenAnimate(el, 'translateY(0)');
  modeScreen.style.pointerEvents = 'none';
}

function navFromTraining(id) {
  const el = document.getElementById(id);
  screenAnimate(el, 'translateY(100%)');
  setTimeout(() => { el.style.pointerEvents = 'none'; }, 340);
  modeScreen.style.pointerEvents = '';
  modeScreen.style.transition = 'none';
  modeScreen.style.transform  = 'translateX(0)';
}

// Initialise positions
screenSet(modeScreen, 'translateX(100%)');
modeScreen.style.pointerEvents = 'none';
hideAllTraining();

// ─── DOM — SINGLE STRATEGY ───────────────────────────────────────────────────
const card           = document.getElementById('card');
const cardInner      = document.getElementById('cardInner');
const cardInfo       = document.getElementById('cardInfo');
const cardInfoText   = document.getElementById('cardInfoText');
const strategyName   = document.getElementById('strategyName');
const inputText      = document.getElementById('inputText');
const answerText     = document.getElementById('answerText');
const counter        = document.getElementById('counter');
const hint           = document.getElementById('hint');

// ─── DOM — MULTIPLE STEPS ────────────────────────────────────────────────────
const msCard         = document.getElementById('msCard');
const msCardInner    = document.getElementById('msCardInner');
const msStrategyName = document.getElementById('msStrategyName');
const msSituation    = document.getElementById('msSituation');
const msStepText     = document.getElementById('msStepText');
const msAnswerText   = document.getElementById('msAnswerText');
const msStepCounter  = document.getElementById('msStepCounter');
const msInputCounter = document.getElementById('msInputCounter');
const msHint         = document.getElementById('msHint');

// ─── DOM — MEMORIZE ──────────────────────────────────────────────────────────
const memCard         = document.getElementById('memCard');
const memCardInner    = document.getElementById('memCardInner');
const memStrategyName = document.getElementById('memStrategyName');
const memQuestionText = document.getElementById('memQuestionText');
const memAnswerText   = document.getElementById('memAnswerText');
const memCounter      = document.getElementById('memCounter');
const memHint         = document.getElementById('memHint');

// ─── STATE — SHARED ───────────────────────────────────────────────────────────
let activeCollectionKey   = null;
let activeCollectionLabel = null;

// ─── STATE — SINGLE STRATEGY ─────────────────────────────────────────────────
let strategies    = [];
let stratOrder    = [];
let inputOrders   = [];
let stratIdx = 0, inputIdx = 0;
let flipped = false, animating = false;

// ─── STATE — MULTIPLE STEPS ──────────────────────────────────────────────────
let memStrategies = [];
let memStratIdx   = 0;
let memCardIdx    = 0;
let memFlipped    = false;
let memAnimating  = false;

let msStrategies = [];
let msStratIdx   = 0;
let msInputIdx   = 0;
let msStepIdx    = 0;
let msFlipped    = false;
let msAnimating  = false;

// ─── NAVIGATION ──────────────────────────────────────────────────────────────
function showHome() {
  navToHome();
  closeInfo();
}

function showModeScreen(key, label) {
  activeCollectionKey   = key;
  activeCollectionLabel = label;
  document.getElementById('modeCollectionName').textContent = label;
  navToMode();
}

function showTraining() {
  strategies  = collections[activeCollectionKey] || [];
  if (!strategies.length) return;
  stratOrder  = strategies.map((_, i) => i);
  inputOrders = strategies.map(s => s.inputs.map((_, i) => i));
  stratIdx = 0; inputIdx = 0;
  navToTraining('trainingScreen');
  render();
}

function showMultiStep() {
  msStrategies = multiStepCollections[activeCollectionKey] || [];
  if (msStrategies.length === 0) return;
  msStratIdx = 0; msInputIdx = 0; msStepIdx = 0;
  navToTraining('msScreen');
  msRender();
}

// Collection cards → mode screen
function showMemorize() {
  memStrategies = memorizeCollections[activeCollectionKey] || [];
  if (memStrategies.length === 0) return;
  memStratIdx = 0; memCardIdx = 0;
  navToTraining('memScreen');
  memRender();
}


function addModeListener(id, fn) {
  const el = document.getElementById(id);
  let mStartY = 0, mMoved = false, didTouch = false;
  el.addEventListener('touchstart', e => { mStartY = e.touches[0].clientY; mMoved = false; didTouch = true; }, { passive: true });
  el.addEventListener('touchmove',  e => { if (Math.abs(e.touches[0].clientY - mStartY) > 8) mMoved = true; }, { passive: true });
  el.addEventListener('touchend',   e => { if (!mMoved) { fn(); } });
  el.addEventListener('click',      e => { if (didTouch) { didTouch = false; return; } fn(); });
}

document.querySelectorAll('.collection-card').forEach(el => {
  const key   = el.dataset.key;
  const label = el.dataset.label;
  let cStartY = 0, cMoved = false, cDidTouch = false;
  el.addEventListener('touchstart', e => { cStartY = e.touches[0].clientY; cMoved = false; cDidTouch = true; }, { passive: true });
  el.addEventListener('touchmove',  e => { if (Math.abs(e.touches[0].clientY - cStartY) > 8) cMoved = true; }, { passive: true });
  el.addEventListener('touchend',   e => { if (!cMoved) showModeScreen(key, label); });
  el.addEventListener('click',      () => { if (cDidTouch) { cDidTouch = false; return; } showModeScreen(key, label); });
});

document.getElementById('modeBackBtn').addEventListener('click', showHome);

// Beta section toggle
function toggleBeta() {
  const list  = document.getElementById('modeBetaList');
  const arrow = document.getElementById('modeBetaArrow');
  const open  = list.classList.toggle('open');
  arrow.classList.toggle('open', open);
}
document.getElementById('modeBetaToggle').addEventListener('click', toggleBeta);
document.getElementById('modeBetaToggle').addEventListener('touchend', e => { e.preventDefault(); toggleBeta(); }, { passive: false });

addModeListener('modeFlashcard', showTraining);

addModeListener('modeMultiStep', showMultiStep);

addModeListener('modeMemorize', showMemorize);

// Back buttons
document.getElementById('closeBtn').addEventListener('click',   () => showModeScreen(activeCollectionKey, activeCollectionLabel));
document.getElementById('msCloseBtn').addEventListener('click',  () => showModeScreen(activeCollectionKey, activeCollectionLabel));
document.getElementById('memCloseBtn').addEventListener('click', () => showModeScreen(activeCollectionKey, activeCollectionLabel));

// ─── SINGLE STRATEGY — INFO OVERLAY ──────────────────────────────────────────
let infoOpen = false;

function openInfo() {
  if (infoOpen) { closeInfo(); return; }
  infoOpen = true;
  cardInfoText.textContent = currentStrategy().description;
  cardInfo.classList.add('visible');
}

function closeInfo() {
  infoOpen = false;
  cardInfo.classList.remove('visible');
  cardInfo.scrollTop = 0;
}

document.getElementById('strategyName').addEventListener('click', openInfo);
document.getElementById('cardInfoClose').addEventListener('click', e => { e.stopPropagation(); closeInfo(); });
cardInfo.addEventListener('touchstart', e => e.stopPropagation(), { passive: true });
cardInfo.addEventListener('touchmove',  e => e.stopPropagation(), { passive: true });
cardInfo.addEventListener('touchend',   e => e.stopPropagation(), { passive: true });

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function currentStrategy() { return strategies[stratOrder[stratIdx]]; }
function currentInput()    { return currentStrategy().inputs[inputOrders[stratOrder[stratIdx]][inputIdx]]; }

// ─── SINGLE STRATEGY — RENDER ────────────────────────────────────────────────
function render() {
  const inp = currentInput();
  strategyName.textContent = currentStrategy().name;
  inputText.textContent    = inp.q;
  answerText.textContent   = inp.a;
  counter.textContent      = `${stratIdx + 1} / ${strategies.length}`;
  flip(false, false);
}

function flip(val, animate = true) {
  flipped = val;
  cardInner.style.transition = animate ? 'transform 0.4s ease' : 'none';
  cardInner.classList.toggle('flipped', flipped);
}

function triggerSwipe(dir, callback) {
  if (animating) return;
  animating = true;
  card.classList.add('swipe-' + dir);
  setTimeout(() => { card.classList.remove('swipe-' + dir); callback(); animating = false; }, 220);
}

function nextInput()    { triggerSwipe('up',    () => { inputIdx = (inputIdx + 1) % inputOrders[stratOrder[stratIdx]].length; render(); }); }
function prevInput()    { triggerSwipe('down',  () => { inputIdx = (inputIdx - 1 + inputOrders[stratOrder[stratIdx]].length) % inputOrders[stratOrder[stratIdx]].length; render(); }); }
function nextStrategy() { triggerSwipe('left',  () => { closeInfo(); stratIdx = (stratIdx + 1) % strategies.length; inputIdx = 0; render(); }); }
function prevStrategy() { triggerSwipe('right', () => { closeInfo(); stratIdx = (stratIdx - 1 + strategies.length) % strategies.length; inputIdx = 0; render(); }); }

// ─── SINGLE STRATEGY — TOUCH ─────────────────────────────────────────────────
let tx = 0, ty = 0, tt = 0, moved = false;

card.addEventListener('touchstart', e => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; tt = Date.now(); moved = false; e.preventDefault(); }, { passive: false });
card.addEventListener('touchmove',  e => { if (Math.abs(e.touches[0].clientX - tx) > 10 || Math.abs(e.touches[0].clientY - ty) > 10) moved = true; e.preventDefault(); }, { passive: false });
card.addEventListener('touchend',   e => {
  e.preventDefault();
  const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
  const adx = Math.abs(dx), ady = Math.abs(dy);
  if (!moved && Date.now() - tt < 500)        { flip(!flipped); return; }
  if (moved && adx > 40 && adx > ady) { dx > 0 ? prevStrategy() : nextStrategy(); return; }
  if (moved && ady > 40 && ady > adx) { dy > 0 ? prevInput()    : nextInput();    return; }
}, { passive: false });

// ─── SINGLE STRATEGY — BUTTONS ───────────────────────────────────────────────
document.getElementById('nextInputBtn').addEventListener('click',  nextInput);
document.getElementById('prevInputBtn').addEventListener('click',  prevInput);
document.getElementById('nextStratBtn').addEventListener('click',  nextStrategy);
document.getElementById('prevStratBtn').addEventListener('click',  prevStrategy);

// ─── MEMORIZE — RENDER ───────────────────────────────────────────────────────
function memCurrentStrategy() { return memStrategies[memStratIdx]; }
function memCurrentCard()     { return memCurrentStrategy().cards[memCardIdx]; }

function memRender() {
  const strat = memCurrentStrategy();
  const c     = memCurrentCard();
  memStrategyName.textContent = strat.name;
  memQuestionText.textContent = c.q;
  memAnswerText.textContent   = c.a;
  memCounter.textContent      = `${memStratIdx + 1} / ${memStrategies.length}`;
  memFlipFn(false, false);
}

function memFlipFn(val, animate = true) {
  memFlipped = val;
  memCardInner.style.transition = animate ? 'transform 0.4s ease' : 'none';
  memCardInner.classList.toggle('flipped', memFlipped);
}

function memTriggerSwipe(dir, callback) {
  if (memAnimating) return;
  memAnimating = true;
  memCard.classList.add('swipe-' + dir);
  setTimeout(() => { memCard.classList.remove('swipe-' + dir); callback(); memAnimating = false; }, 220);
}

function memNextCard()     { memTriggerSwipe('up',    () => { memCardIdx  = (memCardIdx  + 1) % memCurrentStrategy().cards.length; memRender(); }); }
function memPrevCard()     { memTriggerSwipe('down',  () => { memCardIdx  = (memCardIdx  - 1 + memCurrentStrategy().cards.length) % memCurrentStrategy().cards.length; memRender(); }); }
function memNextStrategy() { memTriggerSwipe('left',  () => { memStratIdx = (memStratIdx + 1) % memStrategies.length; memCardIdx = 0; memRender(); }); }
function memPrevStrategy() { memTriggerSwipe('right', () => { memStratIdx = (memStratIdx - 1 + memStrategies.length) % memStrategies.length; memCardIdx = 0; memRender(); }); }

// ─── MEMORIZE — TOUCH ────────────────────────────────────────────────────────
let memTx = 0, memTy = 0, memTt = 0, memMoved = false;

memCard.addEventListener('touchstart', e => { memTx = e.touches[0].clientX; memTy = e.touches[0].clientY; memTt = Date.now(); memMoved = false; e.preventDefault(); }, { passive: false });
memCard.addEventListener('touchmove',  e => { if (Math.abs(e.touches[0].clientX - memTx) > 10 || Math.abs(e.touches[0].clientY - memTy) > 10) memMoved = true; e.preventDefault(); }, { passive: false });
memCard.addEventListener('touchend',   e => {
  e.preventDefault();
  const dx = e.changedTouches[0].clientX - memTx, dy = e.changedTouches[0].clientY - memTy;
  const adx = Math.abs(dx), ady = Math.abs(dy);
  if (!memMoved && Date.now() - memTt < 500)      { memFlipFn(!memFlipped); return; }
  if (memMoved && adx > 40 && adx > ady) { dx > 0 ? memPrevStrategy() : memNextStrategy(); return; }
  if (memMoved && ady > 40 && ady > adx) { dy > 0 ? memPrevCard()     : memNextCard();     return; }
}, { passive: false });

// ─── MEMORIZE — BUTTONS ──────────────────────────────────────────────────────
document.getElementById('memNextCardBtn').addEventListener('click',  memNextCard);
document.getElementById('memPrevCardBtn').addEventListener('click',  memPrevCard);
document.getElementById('memNextStratBtn').addEventListener('click', memNextStrategy);
document.getElementById('memPrevStratBtn').addEventListener('click', memPrevStrategy);
document.getElementById('memSettingsBtn').addEventListener('click', () =>
  document.getElementById('settingsOverlay').classList.add('open'));

// ── Memorize info overlay ─────────────────────────────────────────────────────
let memInfoOpen = false;

function memOpenInfo() {
  if (memInfoOpen) { memCloseInfo(); return; }
  memInfoOpen = true;
  const name = memCurrentStrategy().name;
  const src  = (collections[activeCollectionKey] || []).find(s => s.name === name);
  document.getElementById('memCardInfoText').textContent = src ? src.description : 'No description available.';
  document.getElementById('memCardInfo').classList.add('visible');
}

function memCloseInfo() {
  memInfoOpen = false;
  document.getElementById('memCardInfo').classList.remove('visible');
  document.getElementById('memCardInfo').scrollTop = 0;
}

document.getElementById('memStrategyName').addEventListener('click', memOpenInfo);
document.getElementById('memCardInfoClose').addEventListener('click', e => { e.stopPropagation(); memCloseInfo(); });
document.getElementById('memCardInfo').addEventListener('touchstart', e => e.stopPropagation(), { passive: true });
document.getElementById('memCardInfo').addEventListener('touchmove',  e => e.stopPropagation(), { passive: true });
document.getElementById('memCardInfo').addEventListener('touchend',   e => e.stopPropagation(), { passive: true });

// ─── MULTIPLE STEPS — RENDER ─────────────────────────────────────────────────
function msCurrentStrategy() { return msStrategies[msStratIdx]; }
function msCurrentInput()    { return msCurrentStrategy().inputs[msInputIdx]; }
function msCurrentStep()     { return msCurrentInput().steps[msStepIdx]; }

function msRender() {
  const strat = msCurrentStrategy();
  const input = msCurrentInput();
  const step  = msCurrentStep();
  msStrategyName.textContent = strat.name;
  msSituation.textContent    = input.situation;
  msStepText.textContent     = step.front;
  msAnswerText.textContent   = step.back;
  msStepCounter.textContent  = `Step ${msStepIdx + 1} / ${input.steps.length}`;
  msInputCounter.textContent = `${msInputIdx + 1} / ${strat.inputs.length}`;
  msFlip(false, false);
}

function msFlip(val, animate = true) {
  msFlipped = val;
  msCardInner.style.transition = animate ? 'transform 0.4s ease' : 'none';
  msCardInner.classList.toggle('flipped', msFlipped);
}

function msTriggerSwipe(dir, callback) {
  if (msAnimating) return;
  msAnimating = true;
  msCard.classList.add('swipe-' + dir);
  setTimeout(() => { msCard.classList.remove('swipe-' + dir); callback(); msAnimating = false; }, 220);
}

function msNextStep() {
  msTriggerSwipe('left', () => {
    msStepIdx = (msStepIdx + 1) % msCurrentInput().steps.length;
    msRender();
  });
}

function msPrevStep() {
  msTriggerSwipe('right', () => {
    msStepIdx = (msStepIdx - 1 + msCurrentInput().steps.length) % msCurrentInput().steps.length;
    msRender();
  });
}

function msNextInput() {
  msTriggerSwipe('up', () => {
    msInputIdx = (msInputIdx + 1) % msCurrentStrategy().inputs.length;
    msStepIdx  = 0;
    msRender();
  });
}

function msPrevInput() {
  msTriggerSwipe('down', () => {
    msInputIdx = (msInputIdx - 1 + msCurrentStrategy().inputs.length) % msCurrentStrategy().inputs.length;
    msStepIdx  = 0;
    msRender();
  });
}

function msNextStrategy() {
  msTriggerSwipe('left', () => {
    msStratIdx = (msStratIdx + 1) % msStrategies.length;
    msInputIdx = 0; msStepIdx = 0;
    msRender();
  });
}

function msPrevStrategy() {
  msTriggerSwipe('right', () => {
    msStratIdx = (msStratIdx - 1 + msStrategies.length) % msStrategies.length;
    msInputIdx = 0; msStepIdx = 0;
    msRender();
  });
}

// ─── MULTIPLE STEPS — TOUCH ──────────────────────────────────────────────────
let msTx = 0, msTy = 0, msTt = 0, msMoved = false;

msCard.addEventListener('touchstart', e => { msTx = e.touches[0].clientX; msTy = e.touches[0].clientY; msTt = Date.now(); msMoved = false; e.preventDefault(); }, { passive: false });
msCard.addEventListener('touchmove',  e => { if (Math.abs(e.touches[0].clientX - msTx) > 10 || Math.abs(e.touches[0].clientY - msTy) > 10) msMoved = true; e.preventDefault(); }, { passive: false });
msCard.addEventListener('touchend',   e => {
  e.preventDefault();
  const dx = e.changedTouches[0].clientX - msTx, dy = e.changedTouches[0].clientY - msTy;
  const adx = Math.abs(dx), ady = Math.abs(dy);
  if (!msMoved && Date.now() - msTt < 500)      { msFlip(!msFlipped); return; }
  if (msMoved && adx > 40 && adx > ady) { dx > 0 ? msPrevStep()  : msNextStep();  return; }
  if (msMoved && ady > 40 && ady > adx) { dy > 0 ? msPrevInput() : msNextInput(); return; }
}, { passive: false });

// ─── MULTIPLE STEPS — BUTTONS ────────────────────────────────────────────────
document.getElementById('msNextStepBtn').addEventListener('click',  msNextStep);
document.getElementById('msPrevStepBtn').addEventListener('click',  msPrevStep);
document.getElementById('msNextInputBtn').addEventListener('click', msNextInput);
document.getElementById('msPrevInputBtn').addEventListener('click', msPrevInput);
document.getElementById('msNextStrat').addEventListener('click',    msNextStrategy);
document.getElementById('msPrevStrat').addEventListener('click',    msPrevStrategy);

// ─── KEYBOARD ────────────────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (document.getElementById('settingsOverlay').classList.contains('open')) return;

  const isTraining = id => document.getElementById(id).classList.contains('screen--active');

  if (e.key === 'Escape') {
    if (TRAINING_SCREENS.some(isTraining))
      showModeScreen(activeCollectionKey, activeCollectionLabel);
    else if (modeScreen.classList.contains('screen--active')) showHome();
    return;
  }

  if (isTraining('trainingScreen')) {
    if (e.key === 'ArrowRight') nextStrategy();
    if (e.key === 'ArrowLeft')  prevStrategy();
    if (e.key === 'ArrowDown')  nextInput();
    if (e.key === 'ArrowUp')    prevInput();
    if (e.key === ' ')          { e.preventDefault(); flip(!flipped); }
  }

  if (isTraining('msScreen')) {
    if (e.key === 'ArrowRight') msNextStep();
    if (e.key === 'ArrowLeft')  msPrevStep();
    if (e.key === 'ArrowDown')  msNextInput();
    if (e.key === 'ArrowUp')    msPrevInput();
    if (e.key === ' ')          { e.preventDefault(); msFlip(!msFlipped); }
  }

  if (isTraining('memScreen')) {
    if (e.key === 'ArrowRight') memNextStrategy();
    if (e.key === 'ArrowLeft')  memPrevStrategy();
    if (e.key === 'ArrowDown')  memNextCard();
    if (e.key === 'ArrowUp')    memPrevCard();
    if (e.key === ' ')          { e.preventDefault(); memFlipFn(!memFlipped); }
  }

});

// ─── SETTINGS ────────────────────────────────────────────────────────────────
document.getElementById('settingsBtn').addEventListener('click', () =>
  document.getElementById('settingsOverlay').classList.add('open'));

document.getElementById('settingsClose').addEventListener('click', () => {
  document.getElementById('settingsOverlay').classList.remove('open');
  applySettings();
});

document.getElementById('settingsOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('settingsOverlay')) {
    document.getElementById('settingsOverlay').classList.remove('open');
    applySettings();
  }
});

function applySettings() {
  const shS   = document.getElementById('shuffleStrategies').checked;
  const shI   = document.getElementById('shuffleInputs').checked;
  const showH = document.getElementById('showHints').checked;
  const showHVal = showH ? 'visible' : 'hidden';

  // Update hint visibility on all screens safely
  ['hint','memHint','msHint','flowHint','guidedHint','hfHint'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.visibility = showHVal;
  });

  // Only rebuild order and re-render if strategies are loaded
  if (strategies.length > 0) {
    stratOrder  = shS ? shuffle(strategies.map((_, i) => i)) : strategies.map((_, i) => i);
    inputOrders = strategies.map(s => shI ? shuffle(s.inputs.map((_, i) => i)) : s.inputs.map((_, i) => i));
    // Re-render whichever training screen is currently visible
    if (document.getElementById('trainingScreen').classList.contains('screen--active')) { stratIdx = 0; inputIdx = 0; render(); }
  }
}

// ─── FLOW MODE ───────────────────────────────────────────────────────────────
const flowScreen    = document.getElementById('flowScreen');
const flowCard      = document.getElementById('flowCard');
const flowCardInner = document.getElementById('flowCardInner');
const flowComboName = document.getElementById('flowComboName');
const flowFrontText = document.getElementById('flowFrontText');
const flowBackText  = document.getElementById('flowBackText');
const flowCounter   = document.getElementById('flowCounter');

let flowStrategies = [], flowComboIdx = 0, flowCardIdx = 0;
let flowFlipped = false, flowAnimating = false, flowSequence = [];

function buildFlowSequence(combo) {
  const seq = [];
  combo.inputs.forEach(inp => {
    seq.push({ type: 'situation', front: '\u{1F4CD} ' + inp.situation, back: inp.situation });
    inp.steps.forEach(s => seq.push({ type: 'step', front: s.front, back: s.back }));
  });
  return seq;
}

function showFlow() {
  flowStrategies = multiStepCollections[activeCollectionKey] || [];
  if (!flowStrategies.length) return;
  navToTraining('flowScreen');
  flowComboIdx = 0; flowCardIdx = 0;
  flowSequence = buildFlowSequence(flowStrategies[0]);
  flowRender();
}

function flowRender() {
  const combo = flowStrategies[flowComboIdx];
  flowSequence = buildFlowSequence(combo);
  const item = flowSequence[flowCardIdx];
  flowComboName.textContent = combo.name;
  flowFrontText.textContent = item.front;
  flowBackText.textContent  = item.back;
  flowCounter.textContent   = `${flowComboIdx + 1} / ${flowStrategies.length}`;
  flowFlipFn(false, false);
}

function flowFlipFn(val, animate = true) {
  flowFlipped = val;
  flowCardInner.style.transition = animate ? 'transform 0.4s ease' : 'none';
  flowCardInner.classList.toggle('flipped', flowFlipped);
}

function flowTrig(dir, cb) {
  if (flowAnimating) return; flowAnimating = true;
  flowCard.classList.add('swipe-' + dir);
  setTimeout(() => { flowCard.classList.remove('swipe-' + dir); cb(); flowAnimating = false; }, 220);
}

function flowNextCard()  { flowTrig('up',    () => { flowCardIdx = (flowCardIdx + 1) % flowSequence.length; flowRender(); }); }
function flowPrevCard()  { flowTrig('down',  () => { flowCardIdx = (flowCardIdx - 1 + flowSequence.length) % flowSequence.length; flowRender(); }); }
function flowNextCombo() { flowTrig('left',  () => { flowComboIdx = (flowComboIdx + 1) % flowStrategies.length; flowCardIdx = 0; flowRender(); }); }
function flowPrevCombo() { flowTrig('right', () => { flowComboIdx = (flowComboIdx - 1 + flowStrategies.length) % flowStrategies.length; flowCardIdx = 0; flowRender(); }); }

let fTx=0,fTy=0,fTt=0,fMov=false;
flowCard.addEventListener('touchstart',e=>{fTx=e.touches[0].clientX;fTy=e.touches[0].clientY;fTt=Date.now();fMov=false;e.preventDefault();},{passive:false});
flowCard.addEventListener('touchmove', e=>{if(Math.abs(e.touches[0].clientX-fTx)>10||Math.abs(e.touches[0].clientY-fTy)>10)fMov=true;e.preventDefault();},{passive:false});
flowCard.addEventListener('touchend',  e=>{
  e.preventDefault();
  const dx=e.changedTouches[0].clientX-fTx,dy=e.changedTouches[0].clientY-fTy,adx=Math.abs(dx),ady=Math.abs(dy);
  if(!fMov&&Date.now()-fTt<500){flowFlipFn(!flowFlipped);return;}
  if(fMov&&adx>40&&adx>ady){dx>0?flowPrevCombo():flowNextCombo();return;}
  if(fMov&&ady>40&&ady>adx){dy>0?flowPrevCard():flowNextCard();return;}
},{passive:false});

document.getElementById('flowNextCardBtn').addEventListener('click',  flowNextCard);
document.getElementById('flowPrevCardBtn').addEventListener('click',  flowPrevCard);
document.getElementById('flowNextComboBtn').addEventListener('click', flowNextCombo);
document.getElementById('flowPrevComboBtn').addEventListener('click', flowPrevCombo);
document.getElementById('flowCloseBtn').addEventListener('click', ()=>showModeScreen(activeCollectionKey,activeCollectionLabel));
document.getElementById('flowSettingsBtn').addEventListener('click', ()=>document.getElementById('settingsOverlay').classList.add('open'));
addModeListener('modeFlow', showFlow);

// ─── GUIDED MODE ─────────────────────────────────────────────────────────────
const guidedScreen        = document.getElementById('guidedScreen');
const guidedCard          = document.getElementById('guidedCard');
const guidedCardInner     = document.getElementById('guidedCardInner');
const guidedComboName     = document.getElementById('guidedComboName');
const guidedFrontText     = document.getElementById('guidedFrontText');
const guidedBackText      = document.getElementById('guidedBackText');
const guidedCounter       = document.getElementById('guidedCounter');
const guidedStepLabel     = document.getElementById('guidedStepLabel');
const guidedStepLabelBack = document.getElementById('guidedStepLabelBack');

let guidedStrategies=[], guidedComboIdx=0, guidedInputIdx=0, guidedStepIdx=0;
let guidedFlipped=false, guidedAnimating=false;

function showGuided() {
  guidedStrategies = multiStepCollections[activeCollectionKey] || [];
  if (!guidedStrategies.length) return;
  navToTraining('guidedScreen');
  guidedComboIdx=0; guidedInputIdx=0; guidedStepIdx=0;
  guidedRender();
}

function gCombo() { return guidedStrategies[guidedComboIdx]; }
function gInput() { return gCombo().inputs[guidedInputIdx]; }
function gStep()  { return gInput().steps[guidedStepIdx]; }

function guidedRender() {
  const step = gStep(), inp = gInput(), combo = gCombo();
  const label = `Step ${guidedStepIdx+1} / ${inp.steps.length}`;
  guidedComboName.textContent     = combo.name;
  guidedFrontText.textContent     = inp.situation + '\n\n' + step.front;
  guidedBackText.textContent      = step.back;
  guidedCounter.textContent       = `${guidedComboIdx+1} / ${guidedStrategies.length}`;
  guidedStepLabel.textContent     = label;
  guidedStepLabelBack.textContent = label;
  const isLast = guidedStepIdx === inp.steps.length - 1;
  const btnTxt = isLast ? 'done \u2713' : 'next step \u2192';
  document.getElementById('guidedNextStepBtn').textContent     = btnTxt;
  document.getElementById('guidedNextStepBtnBack').textContent = btnTxt;
  guidedFlipFn(false, false);
}

function guidedFlipFn(val, animate=true) {
  guidedFlipped=val;
  guidedCardInner.style.transition = animate?'transform 0.4s ease':'none';
  guidedCardInner.classList.toggle('flipped', guidedFlipped);
}

function gTrig(dir,cb) {
  if(guidedAnimating)return; guidedAnimating=true;
  guidedCard.classList.add('swipe-'+dir);
  setTimeout(()=>{guidedCard.classList.remove('swipe-'+dir);cb();guidedAnimating=false;},220);
}

function guidedAdvanceStep() {
  if (guidedStepIdx < gInput().steps.length - 1) {
    gTrig('up', ()=>{ guidedStepIdx++; guidedRender(); });
  } else { guidedNextInput(); }
}

function guidedNextInput() { gTrig('up',    ()=>{ guidedInputIdx=(guidedInputIdx+1)%gCombo().inputs.length; guidedStepIdx=0; guidedRender(); }); }
function guidedPrevInput() { gTrig('down',  ()=>{ guidedInputIdx=(guidedInputIdx-1+gCombo().inputs.length)%gCombo().inputs.length; guidedStepIdx=0; guidedRender(); }); }
function guidedNextCombo() { gTrig('left',  ()=>{ guidedComboIdx=(guidedComboIdx+1)%guidedStrategies.length; guidedInputIdx=0; guidedStepIdx=0; guidedRender(); }); }
function guidedPrevCombo() { gTrig('right', ()=>{ guidedComboIdx=(guidedComboIdx-1+guidedStrategies.length)%guidedStrategies.length; guidedInputIdx=0; guidedStepIdx=0; guidedRender(); }); }

let gTx=0,gTy=0,gTt=0,gMov=false;
guidedCard.addEventListener('touchstart',e=>{gTx=e.touches[0].clientX;gTy=e.touches[0].clientY;gTt=Date.now();gMov=false;e.preventDefault();},{passive:false});
guidedCard.addEventListener('touchmove', e=>{if(Math.abs(e.touches[0].clientX-gTx)>10||Math.abs(e.touches[0].clientY-gTy)>10)gMov=true;e.preventDefault();},{passive:false});
guidedCard.addEventListener('touchend',  e=>{
  e.preventDefault();
  const dx=e.changedTouches[0].clientX-gTx,dy=e.changedTouches[0].clientY-gTy,adx=Math.abs(dx),ady=Math.abs(dy);
  if(!gMov&&Date.now()-gTt<500){guidedFlipFn(!guidedFlipped);return;}
  if(gMov&&adx>40&&adx>ady){dx>0?guidedPrevCombo():guidedNextCombo();return;}
  if(gMov&&ady>40&&ady>adx){dy>0?guidedPrevInput():guidedNextInput();return;}
},{passive:false});

document.getElementById('guidedNextStepBtn').addEventListener('click', guidedAdvanceStep);
document.getElementById('guidedNextStepBtn').addEventListener('touchend', e => { e.stopPropagation(); e.preventDefault(); guidedAdvanceStep(); }, { passive: false });
document.getElementById('guidedNextStepBtnBack').addEventListener('click', guidedAdvanceStep);
document.getElementById('guidedNextStepBtnBack').addEventListener('touchend', e => { e.stopPropagation(); e.preventDefault(); guidedAdvanceStep(); }, { passive: false });
document.getElementById('guidedNextComboBtn').addEventListener('click',    guidedNextCombo);
document.getElementById('guidedPrevComboBtn').addEventListener('click',    guidedPrevCombo);
document.getElementById('guidedNextInputBtn').addEventListener('click',    guidedNextInput);
document.getElementById('guidedPrevInputBtn').addEventListener('click',    guidedPrevInput);
document.getElementById('guidedCloseBtn').addEventListener('click', ()=>showModeScreen(activeCollectionKey,activeCollectionLabel));
document.getElementById('guidedSettingsBtn').addEventListener('click', ()=>document.getElementById('settingsOverlay').classList.add('open'));
addModeListener('modeGuided', showGuided);

// ─── HANDSFREE MODE ──────────────────────────────────────────────────────────

function hfSettings() {
  return {
    explanation : document.getElementById('hfExplanation').checked,
    cardBack    : document.getElementById('hfCardBack').checked,
    maxInputs   : document.getElementById('hfMaxInputs').value,
    thinkPause  : parseInt(document.getElementById('hfThinkPause').value),
    genPause    : parseInt(document.getElementById('hfGenPause').value),
    loopStrategy: document.getElementById('hfLoopStrategy').checked,
    rate        : parseFloat(document.getElementById('hfRate').value),
    voiceGender : document.getElementById('hfVoice').value,
  };
}

// ── State ─────────────────────────────────────────────────────────────────────
let hfPlaying   = false;
let hfAbort     = false;
let hfSkipStep  = false;  // true = skip current speech and move to next step
let hfTimeouts  = [];

// ── Playback sequence step enum ───────────────────────────────────────────────
// Steps in order: 'stratName' → 'explanation' → 'inputFront' → 'inputBack' → repeat
let hfSeqStep = 'stratName';  // current position in sequence

// ── Voice ─────────────────────────────────────────────────────────────────────
let cachedVoices = [];
function loadVoices() {
  const v = speechSynthesis.getVoices();
  if (v.length) cachedVoices = v;
}
loadVoices();
if (typeof speechSynthesis.onvoiceschanged !== 'undefined') {
  speechSynthesis.onvoiceschanged = loadVoices;
}

function hfPickVoice(gender) {
  const voices = cachedVoices.length ? cachedVoices : speechSynthesis.getVoices();
  const enVoices = voices.filter(v => v.lang.startsWith('en'));
  if (!enVoices.length) return null;
  if (gender === 'male') {
    const pref = ['Daniel', 'Aaron', 'Fred', 'Gordon', 'Thomas', 'Arthur', 'Oliver', 'Jamie'];
    for (const name of pref) { const v = enVoices.find(v => v.name.includes(name)); if (v) return v; }
    return enVoices.find(v => !v.name.match(/Samantha|Victoria|Karen|Moira|Fiona|Allison|Ava|Susan|Zoe|Emma/i)) || enVoices[0];
  } else {
    const pref = ['Samantha', 'Ava', 'Allison', 'Victoria', 'Karen', 'Moira'];
    for (const name of pref) { const v = enVoices.find(v => v.name.includes(name)); if (v) return v; }
    return enVoices[0];
  }
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function hfSpeak(text, cfg) {
  return new Promise(resolve => {
    if (hfAbort) { resolve(); return; }
    const utt  = new SpeechSynthesisUtterance(text);
    utt.lang   = 'en-US';
    utt.rate   = cfg.rate;
    const voice = hfPickVoice(cfg.voiceGender);
    if (voice) utt.voice = voice;
    utt.onend   = () => resolve();
    utt.onerror = () => resolve();
    // If skip requested, cancel immediately
    if (hfSkipStep) { hfSkipStep = false; resolve(); return; }
    speechSynthesis.speak(utt);
  });
}

let hfDelayResolve = null;  // holds resolve() of the active hfDelay promise

function hfDelay(ms) {
  return new Promise(resolve => {
    hfDelayResolve = resolve;
    if (hfAbort || hfSkipStep) { hfDelayResolve = null; resolve(); return; }
    const step = 80;
    let elapsed = 0;
    function tick() {
      if (hfAbort || hfSkipStep) { hfDelayResolve = null; resolve(); return; }
      elapsed += step;
      if (elapsed >= ms) { hfDelayResolve = null; resolve(); return; }
      const id = setTimeout(tick, step);
      hfTimeouts.push(id);
    }
    const id = setTimeout(tick, step);
    hfTimeouts.push(id);
  });
}

function hfClearTimeouts() {
  hfTimeouts.forEach(id => clearTimeout(id));
  hfTimeouts = [];
}

// ── Card display ──────────────────────────────────────────────────────────────
const hfCardInnerEl = document.getElementById('hfCardInner');

function hfShowCard(q, a, flipped) {
  document.getElementById('hfStrategyName').textContent = currentStrategy().name;
  document.getElementById('hfInputText').textContent    = q;
  document.getElementById('hfAnswerText').textContent   = a;
  document.getElementById('hfCounter').textContent      = `${stratIdx + 1} / ${strategies.length}`;
  hfCardInnerEl.style.transition = 'transform 0.4s ease';
  hfCardInnerEl.classList.toggle('flipped', flipped);
}

function hfUpdateButtons() {
  const playBtn = document.getElementById('hfPlayBtn');
  const prevBtn = document.getElementById('hfPrevStepBtn');
  const nextBtn = document.getElementById('hfNextStepBtn');
  playBtn.textContent = hfPlaying ? '⏹' : '▶';
  prevBtn.disabled = !hfPlaying;
  nextBtn.disabled = !hfPlaying;
  prevBtn.style.opacity = hfPlaying ? '1' : '0.35';
  nextBtn.style.opacity = hfPlaying ? '1' : '0.35';
}

// ── Main playback loop ────────────────────────────────────────────────────────
async function hfPlay() {
  if (hfPlaying) { hfStop(); return; }

  const unlock = new SpeechSynthesisUtterance(' ');
  unlock.volume = 0;
  speechSynthesis.speak(unlock);

  hfPlaying   = true;
  hfAbort     = false;
  hfSkipStep  = false;
  hfUpdateButtons();

  const cfg    = hfSettings();
  const maxInp = cfg.maxInputs === 'all' ? Infinity : parseInt(cfg.maxInputs);

  // Determine start position — if inputIdx > 0, skip strategy name + explanation
  const startSi       = stratIdx;
  const startInputIdx = inputIdx;
  const skipIntro     = startInputIdx > 0;

  outer:
  for (let si = startSi; si < strategies.length; si++) {
    if (hfAbort) break;
    stratIdx = si;

    const strat = currentStrategy();

    if (!skipIntro || si > startSi) {
      // Strategy name
      hfSeqStep = 'stratName';
      hfShowCard(strat.name, '', false);
      document.getElementById('hfInputText').textContent = strat.name;
      await hfSpeak(strat.name, cfg);
      if (hfAbort) break;
      if (!hfSkipStep) await hfDelay(cfg.genPause * 1000);
      hfSkipStep = false;

      // Explanation
      if (cfg.explanation && strat.description) {
        hfSeqStep = 'explanation';
        document.getElementById('hfCardInfoText').textContent = strat.description;
        document.getElementById('hfCardInfo').classList.add('visible');
        await hfSpeak(strat.description, cfg);
        document.getElementById('hfCardInfo').classList.remove('visible');
        document.getElementById('hfCardInfo').scrollTop = 0;
        if (hfAbort) break;
        if (!hfSkipStep) await hfDelay(cfg.genPause * 1000);
        hfSkipStep = false;
      }
    }

    const ord   = inputOrders[stratOrder[si]];
    const limit = Math.min(ord.length, maxInp);
    const startIi = (si === startSi) ? startInputIdx : 0;

    for (let ii = startIi; ii < limit; ii++) {
      if (hfAbort) break outer;
      inputIdx = ii;
      const inp = currentInput();

      // Input front
      hfSeqStep = 'inputFront';
      hfShowCard(inp.q, inp.a, false);
      await hfSpeak(inp.q, cfg);
      if (hfAbort) break outer;
      if (!hfSkipStep) await hfDelay(cfg.thinkPause * 1000);
      hfSkipStep = false;

      // Input back
      if (cfg.cardBack) {
        hfSeqStep = 'inputBack';
        hfShowCard(inp.q, inp.a, true);
        await hfSpeak(inp.a, cfg);
        if (hfAbort) break outer;
        if (!hfSkipStep) await hfDelay(cfg.genPause * 1000);
        hfSkipStep = false;
      }

      if (cfg.loopStrategy && ii === limit - 1) ii = -1;
    }

    if (cfg.loopStrategy) si--;
  }

  hfPlaying   = false;
  hfAbort     = false;
  hfSkipStep  = false;
  speechSynthesis.cancel();
  hfClearTimeouts();
  hfUpdateButtons();
}

function hfStop() {
  hfAbort     = true;
  hfPlaying   = false;
  hfSkipStep  = false;
  speechSynthesis.cancel();
  hfClearTimeouts();
  hfUpdateButtons();
}

// Skip forward — cancel current speech, next iteration picks up next step
function hfSkipForward() {
  if (!hfPlaying) return;
  hfSkipStep = true;
  speechSynthesis.cancel();
  hfClearTimeouts();
  if (hfDelayResolve) { hfDelayResolve(); hfDelayResolve = null; }
}

// Skip back — go to start of current strategy (stratName step)
function hfSkipBack() {
  if (!hfPlaying) return;
  // If already at first input of current strategy, go to previous strategy
  if (inputIdx === 0 && stratIdx > 0) stratIdx--;
  inputIdx = 0;
  // Abort current loop cleanly, then restart from new position
  hfAbort  = true;
  speechSynthesis.cancel();
  hfClearTimeouts();
  if (hfDelayResolve) { hfDelayResolve(); hfDelayResolve = null; }
  setTimeout(() => {
    hfAbort   = false;
    hfPlaying = false;
    hfPlay();
  }, 50);
}

// ── Buttons ───────────────────────────────────────────────────────────────────
document.getElementById('hfPlayBtn').addEventListener('click', hfPlay);
document.getElementById('hfPlayBtn').addEventListener('touchend', e => { e.stopPropagation(); e.preventDefault(); hfPlay(); }, { passive: false });

document.getElementById('hfNextStepBtn').addEventListener('click', hfSkipForward);
document.getElementById('hfNextStepBtn').addEventListener('touchend', e => { e.stopPropagation(); e.preventDefault(); hfSkipForward(); }, { passive: false });

document.getElementById('hfPrevStepBtn').addEventListener('click', hfSkipBack);
document.getElementById('hfPrevStepBtn').addEventListener('touchend', e => { e.stopPropagation(); e.preventDefault(); hfSkipBack(); }, { passive: false });

document.getElementById('hfCloseBtn').addEventListener('click', () => {
  hfStop();
  showModeScreen(activeCollectionKey, activeCollectionLabel);
});
document.getElementById('hfSettingsBtn').addEventListener('click', () =>
  document.getElementById('hfSettingsOverlay').classList.add('open'));

// Allow scrolling in hfCardInfo overlay
const hfCardInfoEl = document.getElementById('hfCardInfo');
hfCardInfoEl.addEventListener('touchstart', e => e.stopPropagation(), { passive: true });
hfCardInfoEl.addEventListener('touchmove',  e => e.stopPropagation(), { passive: true });
hfCardInfoEl.addEventListener('touchend',   e => e.stopPropagation(), { passive: true });

// ── Manual navigation on hf screen ───────────────────────────────────────────
const hfCard      = document.getElementById('hfCard');
const hfCardInner = document.getElementById('hfCardInner');

function hfRender() {
  if (!strategies.length) return;
  document.getElementById('hfStrategyName').textContent = currentStrategy().name;
  document.getElementById('hfInputText').textContent    = currentInput().q;
  document.getElementById('hfAnswerText').textContent   = currentInput().a;
  document.getElementById('hfCounter').textContent      = `${stratIdx + 1} / ${strategies.length}`;
  hfCardInner.style.transition = 'none';
  hfCardInner.classList.remove('flipped');
}

let hfTx=0,hfTy=0,hfTt=0,hfMov=false;
hfCard.addEventListener('touchstart',e=>{hfTx=e.touches[0].clientX;hfTy=e.touches[0].clientY;hfTt=Date.now();hfMov=false;e.preventDefault();},{passive:false});
hfCard.addEventListener('touchmove', e=>{if(Math.abs(e.touches[0].clientX-hfTx)>10||Math.abs(e.touches[0].clientY-hfTy)>10)hfMov=true;e.preventDefault();},{passive:false});
hfCard.addEventListener('touchend',  e=>{
  e.preventDefault();
  const dx=e.changedTouches[0].clientX-hfTx,dy=e.changedTouches[0].clientY-hfTy,adx=Math.abs(dx),ady=Math.abs(dy);
  if(!hfMov&&Date.now()-hfTt<500){hfCardInner.classList.toggle('flipped');return;}
  if(hfMov&&adx>40&&adx>ady){stratIdx=dx>0?(stratIdx-1+strategies.length)%strategies.length:(stratIdx+1)%strategies.length;inputIdx=0;hfRender();return;}
  if(hfMov&&ady>40&&ady>adx){const o=inputOrders[stratOrder[stratIdx]];inputIdx=dy>0?(inputIdx-1+o.length)%o.length:(inputIdx+1)%o.length;hfRender();return;}
},{passive:false});

document.getElementById('hfPrevStratBtn').addEventListener('click',()=>{stratIdx=(stratIdx-1+strategies.length)%strategies.length;inputIdx=0;hfRender();});
document.getElementById('hfNextStratBtn').addEventListener('click',()=>{stratIdx=(stratIdx+1)%strategies.length;inputIdx=0;hfRender();});
document.getElementById('hfPrevInputBtn').addEventListener('click',()=>{const o=inputOrders[stratOrder[stratIdx]];inputIdx=(inputIdx-1+o.length)%o.length;hfRender();});
document.getElementById('hfNextInputBtn').addEventListener('click',()=>{const o=inputOrders[stratOrder[stratIdx]];inputIdx=(inputIdx+1)%o.length;hfRender();});

// ── showHandsfree ─────────────────────────────────────────────────────────────
function showHandsfree() {
  strategies  = collections[activeCollectionKey] || [];
  if (!strategies.length) return;
  stratOrder  = strategies.map((_,i)=>i);
  inputOrders = strategies.map(s=>s.inputs.map((_,i)=>i));
  stratIdx = 0; inputIdx = 0;
  navToTraining('hfScreen');
  hfRender();
  hfUpdateButtons();
}

addModeListener('modeHandsfree', showHandsfree);


// ─── HANDSFREE MEMORIZE MODE ─────────────────────────────────────────────────

function hfMemSettings() {
  return {
    explanation : document.getElementById('hfMemExplanation').checked,
    cardBack    : document.getElementById('hfMemCardBack').checked,
    maxCards    : document.getElementById('hfMemMaxCards').value,
    thinkPause  : parseInt(document.getElementById('hfMemThinkPause').value),
    genPause    : parseInt(document.getElementById('hfMemGenPause').value),
    loopStrategy: document.getElementById('hfMemLoopStrategy').checked,
    rate        : parseFloat(document.getElementById('hfMemRate').value),
    voiceGender : document.getElementById('hfMemVoice').value,
  };
}

let hfMemPlaying   = false;
let hfMemAbort     = false;
let hfMemSkipStep  = false;
let hfMemTimeouts  = [];

let hfMemDelayResolve = null;  // holds resolve() of the active hfMemDelay promise

function hfMemDelay(ms) {
  return new Promise(resolve => {
    hfMemDelayResolve = resolve;
    if (hfMemAbort || hfMemSkipStep) { hfMemDelayResolve = null; resolve(); return; }
    const step = 80;
    let elapsed = 0;
    function memTick() {
      if (hfMemAbort || hfMemSkipStep) { hfMemDelayResolve = null; resolve(); return; }
      elapsed += step;
      if (elapsed >= ms) { hfMemDelayResolve = null; resolve(); return; }
      const id = setTimeout(memTick, step);
      hfMemTimeouts.push(id);
    }
    const id = setTimeout(memTick, step);
    hfMemTimeouts.push(id);
  });
}

function hfMemClearTimeouts() {
  hfMemTimeouts.forEach(id => clearTimeout(id));
  hfMemTimeouts = [];
}

function hfMemSpeak(text, cfg) {
  return new Promise(resolve => {
    if (hfMemAbort) { resolve(); return; }
    const utt  = new SpeechSynthesisUtterance(text);
    utt.lang   = 'en-US';
    utt.rate   = cfg.rate;
    const voice = hfPickVoice(cfg.voiceGender);
    if (voice) utt.voice = voice;
    utt.onend   = () => resolve();
    utt.onerror = () => resolve();
    if (hfMemSkipStep) { hfMemSkipStep = false; resolve(); return; }
    speechSynthesis.speak(utt);
  });
}

const hfMemCardInnerEl = document.getElementById('hfMemCardInner');
const hfMemCardInfoEl  = document.getElementById('hfMemCardInfo');

function hfMemShowCard(q, a, flipped) {
  document.getElementById('hfMemStrategyName').textContent = memCurrentStrategy().name;
  document.getElementById('hfMemQuestionText').textContent = q;
  document.getElementById('hfMemAnswerText').textContent   = a;
  document.getElementById('hfMemCounter').textContent      = `${memStratIdx + 1} / ${memStrategies.length}`;
  hfMemCardInnerEl.style.transition = 'transform 0.4s ease';
  hfMemCardInnerEl.classList.toggle('flipped', flipped);
}

function hfMemUpdateButtons() {
  const playBtn = document.getElementById('hfMemPlayBtn');
  const prevBtn = document.getElementById('hfMemPrevStepBtn');
  const nextBtn = document.getElementById('hfMemNextStepBtn');
  playBtn.textContent   = hfMemPlaying ? '⏹' : '▶';
  prevBtn.disabled      = !hfMemPlaying;
  nextBtn.disabled      = !hfMemPlaying;
  prevBtn.style.opacity = hfMemPlaying ? '1' : '0.35';
  nextBtn.style.opacity = hfMemPlaying ? '1' : '0.35';
}

async function hfMemPlay() {
  if (hfMemPlaying) { hfMemStop(); return; }

  const unlock = new SpeechSynthesisUtterance(' ');
  unlock.volume = 0;
  speechSynthesis.speak(unlock);

  hfMemPlaying  = true;
  hfMemAbort    = false;
  hfMemSkipStep = false;
  hfMemUpdateButtons();

  const cfg      = hfMemSettings();
  const maxCards = cfg.maxCards === 'all' ? Infinity : parseInt(cfg.maxCards);
  const startSi  = memStratIdx;
  const startCi  = memCardIdx;
  const skipIntro = startCi > 0;

  outer:
  for (let si = startSi; si < memStrategies.length; si++) {
    if (hfMemAbort) break;
    memStratIdx = si;
    const strat = memCurrentStrategy();
    const collStrat = (collections[activeCollectionKey] || []).find(s => s.name === strat.name);
    const desc = collStrat ? collStrat.description : '';

    if (!skipIntro || si > startSi) {
      // Strategy name
      document.getElementById('hfMemStrategyName').textContent = strat.name;
      document.getElementById('hfMemQuestionText').textContent = strat.name;
      hfMemCardInnerEl.classList.remove('flipped');
      await hfMemSpeak(strat.name, cfg);
      if (hfMemAbort) break;
      if (!hfMemSkipStep) await hfMemDelay(cfg.genPause * 1000);
      hfMemSkipStep = false;

      // Explanation
      if (cfg.explanation && desc) {
        document.getElementById('hfMemCardInfoText').textContent = desc;
        hfMemCardInfoEl.classList.add('visible');
        await hfMemSpeak(desc, cfg);
        hfMemCardInfoEl.classList.remove('visible');
        hfMemCardInfoEl.scrollTop = 0;
        if (hfMemAbort) break;
        if (!hfMemSkipStep) await hfMemDelay(cfg.genPause * 1000);
        hfMemSkipStep = false;
      }
    }

    const limit  = Math.min(strat.cards.length, maxCards);
    const startCi2 = (si === startSi) ? startCi : 0;

    for (let ci = startCi2; ci < limit; ci++) {
      if (hfMemAbort) break outer;
      memCardIdx = ci;
      const card = memCurrentCard();

      // Front
      hfMemShowCard(card.q, card.a, false);
      await hfMemSpeak(card.q, cfg);
      if (hfMemAbort) break outer;
      if (!hfMemSkipStep) await hfMemDelay(cfg.thinkPause * 1000);
      hfMemSkipStep = false;

      // Back
      if (cfg.cardBack) {
        hfMemShowCard(card.q, card.a, true);
        await hfMemSpeak(card.a, cfg);
        if (hfMemAbort) break outer;
        if (!hfMemSkipStep) await hfMemDelay(cfg.genPause * 1000);
        hfMemSkipStep = false;
      }

      if (cfg.loopStrategy && ci === limit - 1) ci = -1;
    }

    if (cfg.loopStrategy) si--;
  }

  hfMemPlaying  = false;
  hfMemAbort    = false;
  hfMemSkipStep = false;
  speechSynthesis.cancel();
  hfMemClearTimeouts();
  hfMemUpdateButtons();
}

function hfMemStop() {
  hfMemAbort    = true;
  hfMemPlaying  = false;
  hfMemSkipStep = false;
  speechSynthesis.cancel();
  hfMemClearTimeouts();
  hfMemUpdateButtons();
}

function hfMemSkipForward() {
  if (!hfMemPlaying) return;
  hfMemSkipStep = true;
  speechSynthesis.cancel();
  hfMemClearTimeouts();
  if (hfMemDelayResolve) { hfMemDelayResolve(); hfMemDelayResolve = null; }
}

function hfMemSkipBack() {
  if (!hfMemPlaying) return;
  // If already at first card of current strategy, go to previous strategy
  if (memCardIdx === 0 && memStratIdx > 0) memStratIdx--;
  memCardIdx = 0;
  // Abort current loop cleanly, then restart from new position
  hfMemAbort = true;
  speechSynthesis.cancel();
  hfMemClearTimeouts();
  if (hfMemDelayResolve) { hfMemDelayResolve(); hfMemDelayResolve = null; }
  setTimeout(() => {
    hfMemAbort   = false;
    hfMemPlaying = false;
    hfMemPlay();
  }, 50);
}

// ── Buttons ───────────────────────────────────────────────────────────────────
document.getElementById('hfMemPlayBtn').addEventListener('click', hfMemPlay);
document.getElementById('hfMemPlayBtn').addEventListener('touchend', e => { e.stopPropagation(); e.preventDefault(); hfMemPlay(); }, { passive: false });

document.getElementById('hfMemNextStepBtn').addEventListener('click', hfMemSkipForward);
document.getElementById('hfMemNextStepBtn').addEventListener('touchend', e => { e.stopPropagation(); e.preventDefault(); hfMemSkipForward(); }, { passive: false });

document.getElementById('hfMemPrevStepBtn').addEventListener('click', hfMemSkipBack);
document.getElementById('hfMemPrevStepBtn').addEventListener('touchend', e => { e.stopPropagation(); e.preventDefault(); hfMemSkipBack(); }, { passive: false });

document.getElementById('hfMemCloseBtn').addEventListener('click', () => {
  hfMemStop();
  showModeScreen(activeCollectionKey, activeCollectionLabel);
});
document.getElementById('hfMemSettingsBtn').addEventListener('click', () =>
  document.getElementById('hfMemSettingsOverlay').classList.add('open'));

document.getElementById('hfMemSettingsClose').addEventListener('click', () =>
  document.getElementById('hfMemSettingsOverlay').classList.remove('open'));

// Allow scrolling in hfMemCardInfo overlay
hfMemCardInfoEl.addEventListener('touchstart', e => e.stopPropagation(), { passive: true });
hfMemCardInfoEl.addEventListener('touchmove',  e => e.stopPropagation(), { passive: true });
hfMemCardInfoEl.addEventListener('touchend',   e => e.stopPropagation(), { passive: true });

// ── Manual nav ────────────────────────────────────────────────────────────────
const hfMemCard      = document.getElementById('hfMemCard');
const hfMemCardInner = document.getElementById('hfMemCardInner');

function hfMemRender() {
  if (!memStrategies.length) return;
  document.getElementById('hfMemStrategyName').textContent = memCurrentStrategy().name;
  document.getElementById('hfMemQuestionText').textContent = memCurrentCard().q;
  document.getElementById('hfMemAnswerText').textContent   = memCurrentCard().a;
  document.getElementById('hfMemCounter').textContent      = `${memStratIdx + 1} / ${memStrategies.length}`;
  hfMemCardInner.style.transition = 'none';
  hfMemCardInner.classList.remove('flipped');
}

let hfMTx=0,hfMTy=0,hfMTt=0,hfMMov=false;
hfMemCard.addEventListener('touchstart',e=>{hfMTx=e.touches[0].clientX;hfMTy=e.touches[0].clientY;hfMTt=Date.now();hfMMov=false;e.preventDefault();},{passive:false});
hfMemCard.addEventListener('touchmove', e=>{if(Math.abs(e.touches[0].clientX-hfMTx)>10||Math.abs(e.touches[0].clientY-hfMTy)>10)hfMMov=true;e.preventDefault();},{passive:false});
hfMemCard.addEventListener('touchend',  e=>{
  e.preventDefault();
  const dx=e.changedTouches[0].clientX-hfMTx,dy=e.changedTouches[0].clientY-hfMTy,adx=Math.abs(dx),ady=Math.abs(dy);
  if(!hfMMov&&Date.now()-hfMTt<500){hfMemCardInner.classList.toggle('flipped');return;}
  if(hfMMov&&adx>40&&adx>ady){memStratIdx=dx>0?(memStratIdx-1+memStrategies.length)%memStrategies.length:(memStratIdx+1)%memStrategies.length;memCardIdx=0;hfMemRender();return;}
  if(hfMMov&&ady>40&&ady>adx){memCardIdx=dy>0?(memCardIdx-1+memCurrentStrategy().cards.length)%memCurrentStrategy().cards.length:(memCardIdx+1)%memCurrentStrategy().cards.length;hfMemRender();return;}
},{passive:false});

document.getElementById('hfMemPrevStratBtn').addEventListener('click',()=>{memStratIdx=(memStratIdx-1+memStrategies.length)%memStrategies.length;memCardIdx=0;hfMemRender();});
document.getElementById('hfMemNextStratBtn').addEventListener('click',()=>{memStratIdx=(memStratIdx+1)%memStrategies.length;memCardIdx=0;hfMemRender();});
document.getElementById('hfMemPrevCardBtn').addEventListener('click', ()=>{memCardIdx=(memCardIdx-1+memCurrentStrategy().cards.length)%memCurrentStrategy().cards.length;hfMemRender();});
document.getElementById('hfMemNextCardBtn').addEventListener('click', ()=>{memCardIdx=(memCardIdx+1)%memCurrentStrategy().cards.length;hfMemRender();});

function showHandsfreeMemorize() {
  memStrategies = memorizeCollections[activeCollectionKey] || [];
  if (!memStrategies.length) return;
  memStratIdx = 0; memCardIdx = 0;
  navToTraining('hfMemScreen');
  hfMemRender();
  hfMemUpdateButtons();
}

addModeListener('modeHandsfreeMemorize', showHandsfreeMemorize);

// ── Voice debug helper ────────────────────────────────────────────────────────
document.getElementById('hfVoiceDebugBtn').addEventListener('click', () => {
  const voices = speechSynthesis.getVoices();
  const en = voices.filter(v => v.lang.startsWith('en')).map(v => v.name).join('\n');
  alert('Available English voices:\n\n' + (en || 'None loaded yet — try again in a moment'));
});

// ── FEEDBACK MODE ─────────────────────────────────────────────────────────────

let feedbackMode = localStorage.getItem('feedbackMode') === 'true';

const homeSettingsBtn     = document.getElementById('homeSettingsBtn');
const homeSettingsOverlay = document.getElementById('homeSettingsOverlay');
const homeSettingsClose   = document.getElementById('homeSettingsClose');
const feedbackModeToggle  = document.getElementById('feedbackModeToggle');
const feedbackExportBtn   = document.getElementById('feedbackExportBtn');

function applyFeedbackMode() {
  document.body.classList.toggle('feedback-mode', feedbackMode);
  feedbackModeToggle.checked = feedbackMode;
}

// Open/close home settings panel
homeSettingsBtn.addEventListener('click', () => {
  feedbackModeToggle.checked = feedbackMode;
  homeSettingsOverlay.classList.add('open');
});
homeSettingsBtn.addEventListener('touchend', e => { e.preventDefault(); homeSettingsBtn.click(); }, { passive: false });

homeSettingsClose.addEventListener('click', () => homeSettingsOverlay.classList.remove('open'));
homeSettingsOverlay.addEventListener('click', e => { if (e.target === homeSettingsOverlay) homeSettingsOverlay.classList.remove('open'); });

// Feedback toggle
feedbackModeToggle.addEventListener('change', () => {
  feedbackMode = feedbackModeToggle.checked;
  localStorage.setItem('feedbackMode', feedbackMode);
  applyFeedbackMode();
});

// Export feedback data as JSON
feedbackExportBtn.addEventListener('click', () => {
  const data = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('fb_')) {
      data[key] = parseInt(localStorage.getItem(key));
    }
  }
  if (!Object.keys(data).length) {
    alert('No feedback data yet.');
    return;
  }
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `feedback_${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
});

applyFeedbackMode();

// ── FEEDBACK STORAGE KEYS ─────────────────────────────────────────────────────
// Key format: fb_{collection}_{screen}_{comboOrStratId}_{cardId}_{side}

function fbKey(screen, comboId, cardId, side) {
  return `fb_${activeCollectionKey}_${screen}_${comboId}_${cardId}_${side}`;
}

function fbGet(key) {
  return localStorage.getItem(key) ? parseInt(localStorage.getItem(key)) : null;
}

function fbSet(key, val) {
  localStorage.setItem(key, val);
}

// ── FEEDBACK BAR RENDER ───────────────────────────────────────────────────────

function fbRender(barId, key) {
  const bar = document.getElementById(barId);
  if (!bar) return;
  // Store current key on the bar so click handlers always use the latest
  bar.dataset.fbKey = key;
  const saved = fbGet(key);
  bar.querySelectorAll('.fb-btn').forEach(btn => {
    const v = parseInt(btn.dataset.val);
    btn.classList.remove('fb-selected', 'fb-dimmed');
    if (saved === null) return;
    if (v === saved) btn.classList.add('fb-selected');
    else btn.classList.add('fb-dimmed');
  });
}

// Bind click handlers once per bar at startup
function fbInitBar(barId) {
  const bar = document.getElementById(barId);
  if (!bar) return;
  bar.querySelectorAll('.fb-btn').forEach(btn => {
    const handler = e => {
      e.stopPropagation();
      const key = bar.dataset.fbKey;
      if (!key) return;
      fbSet(key, parseInt(btn.dataset.val));
      fbRender(barId, key);
    };
    btn.addEventListener('click', handler);
    btn.addEventListener('touchend', e => { e.preventDefault(); e.stopPropagation(); handler(e); }, { passive: false });
  });
}

fbInitBar('fb-single-front');
fbInitBar('fb-single-back');
fbInitBar('fb-mem-front');
fbInitBar('fb-mem-back');
fbInitBar('fb-flow-front');
fbInitBar('fb-flow-back');

// ── HOOK INTO RENDER FUNCTIONS ────────────────────────────────────────────────

// Single Strategy
const _origRender = render;
window.render = function() {
  _origRender();
  const frontKey = fbKey('single', stratIdx, inputIdx, 'front');
  const backKey  = fbKey('single', stratIdx, inputIdx, 'back');
  fbRender('fb-single-front', frontKey);
  fbRender('fb-single-back',  backKey);
};

// Memorize
const _origMemRender = memRender;
window.memRender = function() {
  _origMemRender();
  const frontKey = fbKey('mem', memStratIdx, memCardIdx, 'front');
  const backKey  = fbKey('mem', memStratIdx, memCardIdx, 'back');
  fbRender('fb-mem-front', frontKey);
  fbRender('fb-mem-back',  backKey);
};

// Flow (Sequences)
const _origFlowRender = flowRender;
window.flowRender = function() {
  _origFlowRender();
  const frontKey = fbKey('flow', flowComboIdx, flowCardIdx, 'front');
  const backKey  = fbKey('flow', flowComboIdx, flowCardIdx, 'back');
  fbRender('fb-flow-front', frontKey);
  fbRender('fb-flow-back',  backKey);
};


// ── COLLECTIONS MODE ──────────────────────────────────────────────────────────

let collCollections = [];   // array of collections for active pack
let collIdx     = 0;        // current collection index
let collInputIdx = 0;       // current input index
let collFlipped  = false;
let collAnimating = false;

const collScreen    = document.getElementById('collScreen');
const collCardEl    = document.getElementById('collCard');
const collCardInner = document.getElementById('collCardInner');
const collCardInfo  = document.getElementById('collCardInfo');

function collCurrent()      { return collCollections[collIdx]; }
function collCurrentInput() { return collCurrent().inputs[collInputIdx]; }

function collRender() {
  const col = collCurrent();
  const inp = collCurrentInput();
  document.getElementById('collName').textContent      = col.name;
  document.getElementById('collFrontText').textContent = inp.q;
  document.getElementById('collBackText').textContent  = inp.a;
  document.getElementById('collCounter').textContent   = `${collIdx + 1} / ${collCollections.length}`;
  collFlipFn(false, false);
  // type badge on front
  const typeLabels = { direct: 'Direct', situation: 'Situation', choose3: 'Choose 3', identify: 'Identify', free: 'Free', contrast: 'Contrast' };
  const badge = typeLabels[inp.type] || '';
  document.getElementById('collName').textContent = `${col.name}${badge ? ' — ' + badge : ''}`;
  // hints
  const hints = document.getElementById('collHint');
  if (hints) hints.style.display = document.getElementById('showHints').checked ? '' : 'none';
  // feedback
  const frontKey = fbKey('coll', collIdx, collInputIdx, 'front');
  const backKey  = fbKey('coll', collIdx, collInputIdx, 'back');
  fbRender('fb-coll-front', frontKey);
  fbRender('fb-coll-back',  backKey);
}

function collFlipFn(val, animate = true) {
  collFlipped = val;
  collCardInner.style.transition = animate ? 'transform 0.4s ease' : 'none';
  collCardInner.classList.toggle('flipped', collFlipped);
}

function collTrig(dir, cb) {
  if (collAnimating) return; collAnimating = true;
  collCardEl.classList.add('swipe-' + dir);
  setTimeout(() => { collCardEl.classList.remove('swipe-' + dir); cb(); collAnimating = false; }, 220);
}

function collNextInput() {
  collTrig('up', () => {
    collInputIdx = (collInputIdx + 1) % collCurrent().inputs.length;
    collRender();
  });
}
function collPrevInput() {
  collTrig('down', () => {
    collInputIdx = (collInputIdx - 1 + collCurrent().inputs.length) % collCurrent().inputs.length;
    collRender();
  });
}
function collNext() {
  collTrig('left', () => {
    collIdx = (collIdx + 1) % collCollections.length;
    collInputIdx = 0;
    collRender();
  });
}
function collPrev() {
  collTrig('right', () => {
    collIdx = (collIdx - 1 + collCollections.length) % collCollections.length;
    collInputIdx = 0;
    collRender();
  });
}

// Info panel — tap strategy name to open, like Single Strategy
document.getElementById('collName').addEventListener('click', () => {
  if (!collCollections.length) return;
  document.getElementById('collCardInfoText').textContent = collCurrent().description;
  collCardInfo.classList.add('visible');
});
document.getElementById('collName').addEventListener('touchend', e => { e.preventDefault(); document.getElementById('collName').click(); }, { passive: false });
document.getElementById('collCardInfoClose').addEventListener('click', () => {
  collCardInfo.classList.remove('visible');
  collCardInfo.scrollTop = 0;
});

// Touch
let cTx=0,cTy=0,cTt=0,cMov=false;
collCardEl.addEventListener('touchstart', e => { cTx=e.touches[0].clientX; cTy=e.touches[0].clientY; cTt=Date.now(); cMov=false; e.preventDefault(); }, { passive: false });
collCardEl.addEventListener('touchmove',  e => { if (Math.abs(e.touches[0].clientX-cTx)>10||Math.abs(e.touches[0].clientY-cTy)>10) cMov=true; e.preventDefault(); }, { passive: false });
collCardEl.addEventListener('touchend',   e => {
  e.preventDefault();
  const dx=e.changedTouches[0].clientX-cTx, dy=e.changedTouches[0].clientY-cTy;
  const adx=Math.abs(dx), ady=Math.abs(dy);
  if (!cMov && Date.now()-cTt<500)       { collFlipFn(!collFlipped); return; }
  if (cMov && adx>40 && adx>ady) { dx>0 ? collPrev() : collNext(); return; }
  if (cMov && ady>40 && ady>adx) { dy>0 ? collPrevInput() : collNextInput(); return; }
}, { passive: false });

// Buttons
document.getElementById('collNextBtn').addEventListener('click', collNext);
document.getElementById('collPrevBtn').addEventListener('click', collPrev);
document.getElementById('collNextInputBtn').addEventListener('click', collNextInput);
document.getElementById('collPrevInputBtn').addEventListener('click', collPrevInput);
document.getElementById('collCloseBtn').addEventListener('click', () => showModeScreen(activeCollectionKey, activeCollectionLabel));

// Show Collections mode
function showCollections() {
  const key = activeCollectionKey;
  if (!conversationalCollections[key] || !conversationalCollections[key].length) return;
  collCollections = conversationalCollections[key];
  collIdx      = 0;
  collInputIdx = 0;
  navToTraining('collScreen');
  collRender();
}

addModeListener('modeCollections', showCollections);

// Init feedback bars for coll screen
fbInitBar('fb-coll-front');
fbInitBar('fb-coll-back');
