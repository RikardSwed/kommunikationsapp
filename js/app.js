// app.js — All application logic for Communication Trainer
// Depends on: data.js and multiStepData.js (must be loaded first)

const VERSION = 'v1.4';

// ─── SCREENS ─────────────────────────────────────────────────────────────────
const homeScreen     = document.getElementById('homeScreen');
const modeScreen     = document.getElementById('modeScreen');
const trainingScreen = document.getElementById('trainingScreen');
const msScreen       = document.getElementById('msScreen');
const memScreen      = document.getElementById('memScreen');

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
  homeScreen.style.display     = 'flex';
  modeScreen.style.display     = 'none';
  trainingScreen.style.display = 'none';
  msScreen.style.display       = 'none';
  memScreen.style.display      = 'none';
  document.getElementById('flowScreen').style.display   = 'none';
  document.getElementById('guidedScreen').style.display = 'none';
  closeInfo();
}

function showModeScreen(key, label) {
  activeCollectionKey   = key;
  activeCollectionLabel = label;
  document.getElementById('modeCollectionName').textContent = label;
  homeScreen.style.display     = 'none';
  modeScreen.style.display     = 'flex';
  trainingScreen.style.display = 'none';
  msScreen.style.display       = 'none';
  memScreen.style.display      = 'none';
  document.getElementById('flowScreen').style.display   = 'none';
  document.getElementById('guidedScreen').style.display = 'none';
}

function showTraining() {
  strategies = collections[activeCollectionKey];
  modeScreen.style.display     = 'none';
  trainingScreen.style.display = 'flex';
  stratIdx = 0; inputIdx = 0;
  applySettings();
}

function showMultiStep() {
  msStrategies = multiStepCollections[activeCollectionKey] || [];
  if (msStrategies.length === 0) return;
  modeScreen.style.display = 'none';
  msScreen.style.display   = 'flex';
  msStratIdx = 0; msInputIdx = 0; msStepIdx = 0;
  msRender();
}

// Collection cards → mode screen
function showMemorize() {
  memStrategies = memorizeCollections[activeCollectionKey] || [];
  if (memStrategies.length === 0) return;
  modeScreen.style.display = 'none';
  memScreen.style.display  = 'flex';
  memStratIdx = 0; memCardIdx = 0;
  memRender();
}

document.querySelectorAll('.collection-card').forEach(el => {
  const key   = el.dataset.key;
  const label = el.dataset.label;
  el.addEventListener('click', () => showModeScreen(key, label));
  el.addEventListener('touchend', e => { e.preventDefault(); showModeScreen(key, label); }, { passive: false });
});

document.getElementById('modeBackBtn').addEventListener('click', showHome);

document.getElementById('modeFlashcard').addEventListener('click', showTraining);
document.getElementById('modeFlashcard').addEventListener('touchend', e => { e.preventDefault(); showTraining(); }, { passive: false });

document.getElementById('modeMultiStep').addEventListener('click', showMultiStep);
document.getElementById('modeMultiStep').addEventListener('touchend', e => { e.preventDefault(); showMultiStep(); }, { passive: false });

document.getElementById('modeMemorize').addEventListener('click', showMemorize);
document.getElementById('modeMemorize').addEventListener('touchend', e => { e.preventDefault(); showMemorize(); }, { passive: false });

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

  if (e.key === 'Escape') {
    if (trainingScreen.style.display !== 'none' || msScreen.style.display !== 'none' || memScreen.style.display !== 'none')
      showModeScreen(activeCollectionKey, activeCollectionLabel);
    else if (modeScreen.style.display !== 'none') showHome();
    return;
  }

  if (trainingScreen.style.display !== 'none') {
    if (e.key === 'ArrowRight') nextStrategy();
    if (e.key === 'ArrowLeft')  prevStrategy();
    if (e.key === 'ArrowDown')  nextInput();
    if (e.key === 'ArrowUp')    prevInput();
    if (e.key === ' ')          { e.preventDefault(); flip(!flipped); }
  }

  if (msScreen.style.display !== 'none') {
    if (e.key === 'ArrowRight') msNextStep();
    if (e.key === 'ArrowLeft')  msPrevStep();
    if (e.key === 'ArrowDown')  msNextInput();
    if (e.key === 'ArrowUp')    msPrevInput();
    if (e.key === ' ')          { e.preventDefault(); msFlip(!msFlipped); }
  }

  if (memScreen.style.display !== 'none') {
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
  if (strategies.length > 0) {
    stratOrder  = shS ? shuffle(strategies.map((_, i) => i)) : strategies.map((_, i) => i);
    inputOrders = strategies.map(s => shI ? shuffle(s.inputs.map((_, i) => i)) : s.inputs.map((_, i) => i));
    hint.style.visibility   = showH ? 'visible' : 'hidden';
    msHint.style.visibility = showH ? 'visible' : 'hidden';
    stratIdx = 0; inputIdx = 0;
    render();
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
  modeScreen.style.display = 'none'; flowScreen.style.display = 'flex';
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
document.getElementById('modeFlow').addEventListener('click', showFlow);
document.getElementById('modeFlow').addEventListener('touchend', e=>{e.preventDefault();showFlow();},{passive:false});

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
  modeScreen.style.display = 'none'; guidedScreen.style.display = 'flex';
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
document.getElementById('modeGuided').addEventListener('click', showGuided);
document.getElementById('modeGuided').addEventListener('touchend', e=>{e.preventDefault();showGuided();},{passive:false});
