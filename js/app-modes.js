// app-modes.js — standard training modes, keyboard, settings
// Part of Deckstack v1.19.4 — split from app.js

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
  subCounter.textContent   = `${inputIdx + 1} / ${inputOrders[stratOrder[stratIdx]].length}`;
  flip(false, false);
}

function flip(val, animate = true) {
  if (val && !flipped && window.progCardFlipped) {
    const totalCards = strategies.reduce((sum, s) => sum + s.inputs.length, 0);
    const cardsSoFar = stratOrder.slice(0, stratIdx).reduce((sum, si) => sum + inputOrders[si].length, 0) + inputIdx + 1;
    progCardFlipped(cardsSoFar, totalCards);
  }
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
  document.getElementById('memSubCounter').textContent = `${memCardIdx + 1} / ${strat.cards.length}`;
  memFlipFn(false, false);
}

function memFlipFn(val, animate = true) {
  if (val && !memFlipped && window.progCardFlipped) {
    const totalCards = memStrategies.reduce((s, st) => s + st.cards.length, 0);
    const cardsSoFar = memStrategies.slice(0, memStratIdx).reduce((s, st) => s + st.cards.length, 0) + memCardIdx + 1;
    progCardFlipped(cardsSoFar, totalCards);
  }
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
  let src = (collections[activeCollectionKey] || []).find(s => s.name === name);
  if (!src && name.startsWith('Challenge: ')) {
    const challName = name.replace('Challenge: ', '');
    src = (challengesCollections[activeCollectionKey] || []).find(c =>
      c.name === challName || c.name.includes(challName) || challName.includes(c.name)
    );
  }
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
  if (val && !msFlipped && window.progCardFlipped) {
    const totalSteps = msStrategies.reduce((s, st) => s + st.inputs.reduce((ss, inp) => ss + inp.steps.length, 0), 0);
    const stepsSoFar = msStrategies.slice(0, msStratIdx).reduce((s, st) => s + st.inputs.reduce((ss, inp) => ss + inp.steps.length, 0), 0)
      + msStrategies[msStratIdx].inputs.slice(0, msInputIdx).reduce((s, inp) => s + inp.steps.length, 0) + msStepIdx + 1;
    progCardFlipped(stepsSoFar, totalSteps);
  }
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

  const isTraining = id => document.getElementById(id).style.display === 'flex';

  if (e.key === 'Escape') {
    const activeTraining = TRAINING_SCREENS.find(isTraining);
    if (activeTraining) closeTraining(activeTraining);
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
function openTrainingSettings() {
  const panel = document.querySelector('#settingsOverlay .settings-panel');
  if (panel && window.renderBundleSection && activeCollectionKey) {
    renderBundleSection(panel, activeCollectionKey);
  }
  document.getElementById('settingsOverlay').classList.add('open');
}

document.getElementById('settingsBtn').addEventListener('click', openTrainingSettings);
document.getElementById('settingsBtn').addEventListener('touchend', e => { e.preventDefault(); openTrainingSettings(); }, { passive: false });

document.getElementById('settingsClose').addEventListener('click', () => {
  document.getElementById('settingsOverlay').classList.remove('open');
  applySettings();
  if (typeof showTraining === 'function') { window._noTrainingAnim = true; showTraining(); }
});

document.getElementById('settingsOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('settingsOverlay')) {
    document.getElementById('settingsOverlay').classList.remove('open');
    applySettings();
    if (typeof showTraining === 'function') { window._noTrainingAnim = true; showTraining(); }
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

  applyInputCounterVisibility();
}

function applyInputCounterVisibility() {
  const show = document.getElementById('showInputCounter').checked;
  document.querySelectorAll('.sub-counter, .counter-sep').forEach(el => {
    el.style.display = show ? 'inline' : 'none';
  });
}

// ─── FLOW MODE ───────────────────────────────────────────────────────────────
const flowScreen    = document.getElementById('flowScreen');
const flowCard      = document.getElementById('flowCard');
const flowCardInner = document.getElementById('flowCardInner');
const flowComboName = document.getElementById('flowComboName');
const flowFrontText = document.getElementById('flowFrontText');
const flowBackText  = document.getElementById('flowBackText');
const flowCounter   = document.getElementById('flowCounter');
const flowCardInfo  = document.getElementById('flowCardInfo');

let flowStrategies = [], flowComboIdx = 0, flowCardIdx = 0;
let flowFlipped = false, flowAnimating = false, flowSequence = [];

// Info panel — tap combo name to open
flowComboName.addEventListener('click', () => {
  if (!flowStrategies.length) return;
  const combo = flowStrategies[flowComboIdx];
  document.getElementById('flowCardInfoText').textContent = combo.description || 'No description available.';
  flowCardInfo.classList.add('visible');
});
flowComboName.addEventListener('touchend', e => { e.preventDefault(); flowComboName.click(); }, { passive: false });
document.getElementById('flowCardInfoClose').addEventListener('click', e => { e.stopPropagation(); flowCardInfo.classList.remove('visible'); flowCardInfo.scrollTop = 0; });
flowCardInfo.addEventListener('touchstart', e => e.stopPropagation(), { passive: true });
flowCardInfo.addEventListener('touchmove',  e => e.stopPropagation(), { passive: true });
flowCardInfo.addEventListener('touchend',   e => e.stopPropagation(), { passive: true });

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
  document.getElementById('flowSubCounter').textContent = `${flowCardIdx + 1} / ${flowSequence.length}`;
  flowFlipFn(false, false);
}

function flowFlipFn(val, animate = true) {
  if (val && !flowFlipped && window.progCardFlipped) progCardFlipped();
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
document.getElementById('flowCloseBtn').addEventListener('click', ()=>closeTraining('flowScreen'));
document.getElementById('flowSettingsBtn').addEventListener('click', ()=>document.getElementById('settingsOverlay').classList.add('open'));
registerMode('modeFlow', showFlow);

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
  if (val && !guidedFlipped && window.progCardFlipped) progCardFlipped();
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
document.getElementById('guidedCloseBtn').addEventListener('click', ()=>closeTraining('guidedScreen'));
document.getElementById('guidedSettingsBtn').addEventListener('click', ()=>document.getElementById('settingsOverlay').classList.add('open'));
registerMode('modeGuided', showGuided);


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
  document.getElementById('collSubCounter').textContent = `${collInputIdx + 1} / ${col.inputs.length}`;
  collFlipFn(false, false);
  // hints
  const hints = document.getElementById('collHint');
  if (hints) hints.style.display = document.getElementById('showHints').checked ? '' : 'none';
  // feedback
  const frontKey = fbKey('coll', collIdx, collInputIdx, 'front');
  const backKey  = fbKey('coll', collIdx, collInputIdx, 'back');
  fbRender('fb-coll-front', frontKey);
  fbRender('fb-coll-back',  backKey);
  if (window.alRender && window.alKey) {
    window.alRender('al-coll-front', window.alKey('coll', collIdx, collInputIdx, 'front'));
    window.alRender('al-coll-back',  window.alKey('coll', collIdx, collInputIdx, 'back'));
  }
}

function collFlipFn(val, animate = true) {
  if (val && !collFlipped && window.progCardFlipped) progCardFlipped();
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
document.getElementById('collCardInfoClose').addEventListener('click', e => {
  e.stopPropagation();
  collCardInfo.classList.remove('visible');
  collCardInfo.scrollTop = 0;
});
collCardInfo.addEventListener('touchstart', e => e.stopPropagation(), { passive: true });
collCardInfo.addEventListener('touchmove',  e => e.stopPropagation(), { passive: true });
collCardInfo.addEventListener('touchend',   e => e.stopPropagation(), { passive: true });


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
document.getElementById('collCloseBtn').addEventListener('click', () => closeTraining('collScreen'));

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

registerMode('modeCollections', showCollections);

// Init feedback bars for coll screen
fbInitBar('fb-coll-front');
fbInitBar('fb-coll-back');


// ── CHALLENGES MODE ───────────────────────────────────────────────────────────

let challChallenges = [];
let challIdx        = 0;
let challInputIdx   = 0;
let challFlipped    = false;
let challAnimating  = false;

const challScreen    = document.getElementById('challScreen');
const challCardEl    = document.getElementById('challCard');
const challCardInner = document.getElementById('challCardInner');
const challCardInfo  = document.getElementById('challCardInfo');

function challCurrent()      { return challChallenges[challIdx]; }
function challCurrentInput() { return challCurrent().inputs[challInputIdx]; }

function challFlipFn(val, animate = true) {
  if (val && !challFlipped && window.progCardFlipped) progCardFlipped();
  challFlipped = val;
  challCardInner.style.transition = animate ? 'transform 0.4s ease' : 'none';
  challCardInner.classList.toggle('flipped', challFlipped);
}

function challRender() {
  const ch  = challCurrent();
  const inp = challCurrentInput();
  document.getElementById('challName').textContent      = ch.name;
  document.getElementById('challFrontText').textContent = inp.q;
  document.getElementById('challBackText').textContent  = inp.a;
  document.getElementById('challCounter').textContent   = `${challIdx + 1} / ${challChallenges.length}`;
  document.getElementById('challSubCounter').textContent = `${challInputIdx + 1} / ${ch.inputs.length}`;
  challFlipFn(false, false);
  const hints = document.getElementById('challHint');
  if (hints) hints.style.display = document.getElementById('showHints').checked ? '' : 'none';
  fbRender('fb-chall-front', fbKey('chall', challIdx, challInputIdx, 'front'));
  if (window.alRender && window.alKey) window.alRender('al-chall-front', window.alKey('chall', challIdx, challInputIdx, 'front'));
  fbRender('fb-chall-back',  fbKey('chall', challIdx, challInputIdx, 'back'));
  if (window.alRender && window.alKey) window.alRender('al-chall-back', window.alKey('chall', challIdx, challInputIdx, 'back'));
}

function challTrig(dir, cb) {
  if (challAnimating) return; challAnimating = true;
  challCardEl.classList.add('swipe-' + dir);
  setTimeout(() => { challCardEl.classList.remove('swipe-' + dir); cb(); challAnimating = false; }, 220);
}

function challNext()       { challTrig('left',  () => { challIdx = (challIdx + 1) % challChallenges.length; challInputIdx = 0; challRender(); }); }
function challPrev()       { challTrig('right', () => { challIdx = (challIdx - 1 + challChallenges.length) % challChallenges.length; challInputIdx = 0; challRender(); }); }
function challNextInput()  { challTrig('up',    () => { challInputIdx = (challInputIdx + 1) % challCurrent().inputs.length; challRender(); }); }
function challPrevInput()  { challTrig('down',  () => { challInputIdx = (challInputIdx - 1 + challCurrent().inputs.length) % challCurrent().inputs.length; challRender(); }); }

// Info panel
document.getElementById('challName').addEventListener('click', () => {
  if (!challChallenges.length) return;
  document.getElementById('challCardInfoText').textContent = challCurrent().description;
  challCardInfo.classList.add('visible');
});
document.getElementById('challName').addEventListener('touchend', e => { e.preventDefault(); document.getElementById('challName').click(); }, { passive: false });
document.getElementById('challCardInfoClose').addEventListener('click', e => { e.stopPropagation(); challCardInfo.classList.remove('visible'); challCardInfo.scrollTop = 0; });
challCardInfo.addEventListener('touchstart', e => e.stopPropagation(), { passive: true });
challCardInfo.addEventListener('touchmove',  e => e.stopPropagation(), { passive: true });
challCardInfo.addEventListener('touchend',   e => e.stopPropagation(), { passive: true });

// Settings button reuses main settings overlay
document.getElementById('challSettingsBtn').addEventListener('click', () => document.getElementById('settingsOverlay').classList.add('open'));

// Touch
let chTx=0,chTy=0,chTt=0,chMov=false;
challCardEl.addEventListener('touchstart', e => { chTx=e.touches[0].clientX; chTy=e.touches[0].clientY; chTt=Date.now(); chMov=false; e.preventDefault(); }, { passive: false });
challCardEl.addEventListener('touchmove',  e => { if (Math.abs(e.touches[0].clientX-chTx)>10||Math.abs(e.touches[0].clientY-chTy)>10) chMov=true; e.preventDefault(); }, { passive: false });
challCardEl.addEventListener('touchend',   e => {
  e.preventDefault();
  const dx=e.changedTouches[0].clientX-chTx, dy=e.changedTouches[0].clientY-chTy;
  const adx=Math.abs(dx), ady=Math.abs(dy);
  if (!chMov && Date.now()-chTt<500)       { challFlipFn(!challFlipped); return; }
  if (chMov && adx>40 && adx>ady) { dx>0 ? challPrev() : challNext(); return; }
  if (chMov && ady>40 && ady>adx) { dy>0 ? challPrevInput() : challNextInput(); return; }
}, { passive: false });

// Buttons
document.getElementById('challNextBtn').addEventListener('click', challNext);
document.getElementById('challPrevBtn').addEventListener('click', challPrev);
document.getElementById('challNextInputBtn').addEventListener('click', challNextInput);
document.getElementById('challPrevInputBtn').addEventListener('click', challPrevInput);
document.getElementById('challCloseBtn').addEventListener('click', () => closeTraining('challScreen'));

// Show Challenges mode
function showChallenges() {
  const key = activeCollectionKey;
  if (!challengesCollections[key] || !challengesCollections[key].length) return;
  challChallenges = challengesCollections[key];
  challIdx      = 0;
  challInputIdx = 0;
  navToTraining('challScreen');
  challRender();
}

registerMode('modeChallenges', showChallenges);

// Add challScreen to TRAINING_SCREENS
TRAINING_SCREENS.push('challScreen');

// Init feedback bars
fbInitBar('fb-chall-front');
fbInitBar('fb-chall-back');


// ── MINDSET MODE ──────────────────────────────────────────────────────────────

let mindStrategies = [];
let mindIdx        = 0;
let mindInputIdx    = 0;
let mindFlipped     = false;
let mindAnimating   = false;

const mindScreen    = document.getElementById('mindScreen');
const mindCardEl    = document.getElementById('mindCard');
const mindCardInner = document.getElementById('mindCardInner');
const mindCardInfo  = document.getElementById('mindCardInfo');

function mindCurrent()      { return mindStrategies[mindIdx]; }
function mindCurrentInput() { return mindCurrent().inputs[mindInputIdx]; }

function mindFlipFn(val, animate = true) {
  if (val && !mindFlipped && window.progCardFlipped) progCardFlipped();
  mindFlipped = val;
  mindCardInner.style.transition = animate ? 'transform 0.4s ease' : 'none';
  mindCardInner.classList.toggle('flipped', mindFlipped);
}

function mindRender() {
  const m   = mindCurrent();
  const inp = mindCurrentInput();
  document.getElementById('mindName').textContent      = m.name;
  document.getElementById('mindFrontText').textContent = inp.q;
  document.getElementById('mindBackText').textContent  = inp.a;
  document.getElementById('mindCounter').textContent   = `${mindIdx + 1} / ${mindStrategies.length}`;
  document.getElementById('mindSubCounter').textContent = `${mindInputIdx + 1} / ${m.inputs.length}`;
  mindFlipFn(false, false);
  const hints = document.getElementById('mindHint');
  if (hints) hints.style.display = document.getElementById('showHints').checked ? '' : 'none';
  fbRender('fb-mind-front', fbKey('mind', mindIdx, mindInputIdx, 'front'));
  if (window.alRender && window.alKey) window.alRender('al-mind-front', window.alKey('mind', mindIdx, mindInputIdx, 'front'));
  fbRender('fb-mind-back',  fbKey('mind', mindIdx, mindInputIdx, 'back'));
  if (window.alRender && window.alKey) window.alRender('al-mind-back', window.alKey('mind', mindIdx, mindInputIdx, 'back'));
}

function mindTrig(dir, cb) {
  if (mindAnimating) return; mindAnimating = true;
  mindCardEl.classList.add('swipe-' + dir);
  setTimeout(() => { mindCardEl.classList.remove('swipe-' + dir); cb(); mindAnimating = false; }, 220);
}

function mindNext()       { mindTrig('left',  () => { mindIdx = (mindIdx + 1) % mindStrategies.length; mindInputIdx = 0; mindRender(); }); }
function mindPrev()       { mindTrig('right', () => { mindIdx = (mindIdx - 1 + mindStrategies.length) % mindStrategies.length; mindInputIdx = 0; mindRender(); }); }
function mindNextInput()  { mindTrig('up',    () => { mindInputIdx = (mindInputIdx + 1) % mindCurrent().inputs.length; mindRender(); }); }
function mindPrevInput()  { mindTrig('down',  () => { mindInputIdx = (mindInputIdx - 1 + mindCurrent().inputs.length) % mindCurrent().inputs.length; mindRender(); }); }

// Info panel
document.getElementById('mindName').addEventListener('click', () => {
  if (!mindStrategies.length) return;
  document.getElementById('mindCardInfoText').textContent = mindCurrent().description;
  mindCardInfo.classList.add('visible');
});
document.getElementById('mindName').addEventListener('touchend', e => { e.preventDefault(); document.getElementById('mindName').click(); }, { passive: false });
document.getElementById('mindCardInfoClose').addEventListener('click', e => { e.stopPropagation(); mindCardInfo.classList.remove('visible'); mindCardInfo.scrollTop = 0; });
mindCardInfo.addEventListener('touchstart', e => e.stopPropagation(), { passive: true });
mindCardInfo.addEventListener('touchmove',  e => e.stopPropagation(), { passive: true });
mindCardInfo.addEventListener('touchend',   e => e.stopPropagation(), { passive: true });

// Settings button reuses main settings overlay
document.getElementById('mindSettingsBtn').addEventListener('click', () => document.getElementById('settingsOverlay').classList.add('open'));

// Touch
let mnTx=0,mnTy=0,mnTt=0,mnMov=false;
mindCardEl.addEventListener('touchstart', e => { mnTx=e.touches[0].clientX; mnTy=e.touches[0].clientY; mnTt=Date.now(); mnMov=false; e.preventDefault(); }, { passive: false });
mindCardEl.addEventListener('touchmove',  e => { if (Math.abs(e.touches[0].clientX-mnTx)>10||Math.abs(e.touches[0].clientY-mnTy)>10) mnMov=true; e.preventDefault(); }, { passive: false });
mindCardEl.addEventListener('touchend',   e => {
  e.preventDefault();
  const dx=e.changedTouches[0].clientX-mnTx, dy=e.changedTouches[0].clientY-mnTy;
  const adx=Math.abs(dx), ady=Math.abs(dy);
  if (!mnMov && Date.now()-mnTt<500)       { mindFlipFn(!mindFlipped); return; }
  if (mnMov && adx>40 && adx>ady) { dx>0 ? mindPrev() : mindNext(); return; }
  if (mnMov && ady>40 && ady>adx) { dy>0 ? mindPrevInput() : mindNextInput(); return; }
}, { passive: false });

// Buttons
document.getElementById('mindNextBtn').addEventListener('click', mindNext);
document.getElementById('mindPrevBtn').addEventListener('click', mindPrev);
document.getElementById('mindNextInputBtn').addEventListener('click', mindNextInput);
document.getElementById('mindPrevInputBtn').addEventListener('click', mindPrevInput);
document.getElementById('mindCloseBtn').addEventListener('click', () => closeTraining('mindScreen'));

// Show Mindset mode
function showMindset() {
  mindStrategies = mindsetCollections[activeCollectionKey] || [];
  if (!mindStrategies.length) return;
  mindIdx      = 0;
  mindInputIdx = 0;
  navToTraining('mindScreen');
  mindRender();
}

registerMode('modeMindset', showMindset);

// Add mindScreen to TRAINING_SCREENS
TRAINING_SCREENS.push('mindScreen');

// Init feedback bars
fbInitBar('fb-mind-front');
fbInitBar('fb-mind-back');
