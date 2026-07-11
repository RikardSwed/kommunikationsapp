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


// ─── CHALLENGES MODE ──────────────────────────────────────────────────────────

let challStrategies = [], challStratIdx = 0, challInputIdx = 0;
let challFlipped = false, challAnimating = false;

function showChallenges() {
  const raw = challengesCollections[activeCollectionKey] || [];
  challStrategies = window.filterInputsByBundle
    ? raw.map(s => ({ ...s, inputs: window.filterInputsByBundle(s.inputs, activeCollectionKey) })).filter(s => s.inputs.length)
    : raw;
  if (!challStrategies.length) return;
  challStratIdx = 0; challInputIdx = 0;
  navToTraining('challScreen');
  challRender();
}

function challRender() {
  const s = challStrategies[challStratIdx];
  const inp = s.inputs[challInputIdx];
  document.getElementById('challName').textContent    = s.name;
  document.getElementById('challFrontText').textContent = inp.q;
  document.getElementById('challBackText').textContent  = inp.a;
  document.getElementById('challCounter').textContent  = `${challStratIdx + 1} / ${challStrategies.length}`;
  document.getElementById('challSubCounter').textContent = `${challInputIdx + 1} / ${s.inputs.length}`;
  challFlipFn(false, false);
  if (window.alRender) { window.alRender('al-chall-front', window.alKey('challScreen', s.name, challInputIdx, 'front')); window.alRender('al-chall-back', window.alKey('challScreen', s.name, challInputIdx, 'back')); }
  if (window.fbRender) { window.fbRender('fb-chall-front', fbKey('challScreen', s.name, challInputIdx, 'front')); window.fbRender('fb-chall-back', fbKey('challScreen', s.name, challInputIdx, 'back')); }
}

function challFlipFn(val, animate = true) {
  if (val && !challFlipped && window.progCardFlipped) progCardFlipped();
  challFlipped = val;
  const ci = document.getElementById('challCardInner');
  ci.style.transition = animate ? 'transform 0.4s ease' : 'none';
  ci.classList.toggle('flipped', challFlipped);
}

function challTrig(dir, cb) {
  if (challAnimating) return; challAnimating = true;
  const card = document.getElementById('challCard');
  card.classList.add('swipe-' + dir);
  setTimeout(() => { card.classList.remove('swipe-' + dir); cb(); challAnimating = false; }, 220);
}

function challNext()       { challTrig('left',  () => { challStratIdx = (challStratIdx + 1) % challStrategies.length; challInputIdx = 0; challRender(); }); }
function challPrev()       { challTrig('right', () => { challStratIdx = (challStratIdx - 1 + challStrategies.length) % challStrategies.length; challInputIdx = 0; challRender(); }); }
function challNextInput()  { challTrig('up',    () => { const s = challStrategies[challStratIdx]; challInputIdx = (challInputIdx + 1) % s.inputs.length; challRender(); }); }
function challPrevInput()  { challTrig('down',  () => { const s = challStrategies[challStratIdx]; challInputIdx = (challInputIdx - 1 + s.inputs.length) % s.inputs.length; challRender(); }); }

const challCard = document.getElementById('challCard');
if (challCard) {
  let cTx=0,cTy=0,cTt=0,cMov=false;
  challCard.addEventListener('touchstart',e=>{cTx=e.touches[0].clientX;cTy=e.touches[0].clientY;cTt=Date.now();cMov=false;e.preventDefault();},{passive:false});
  challCard.addEventListener('touchmove', e=>{if(Math.abs(e.touches[0].clientX-cTx)>10||Math.abs(e.touches[0].clientY-cTy)>10)cMov=true;e.preventDefault();},{passive:false});
  challCard.addEventListener('touchend',  e=>{
    e.preventDefault();
    const dx=e.changedTouches[0].clientX-cTx,dy=e.changedTouches[0].clientY-cTy,adx=Math.abs(dx),ady=Math.abs(dy);
    if(!cMov&&Date.now()-cTt<500){challFlipFn(!challFlipped);return;}
    if(cMov&&adx>40&&adx>ady){dx>0?challPrev():challNext();return;}
    if(cMov&&ady>40&&ady>adx){dy>0?challPrevInput():challNextInput();return;}
  },{passive:false});
  challCard.addEventListener('click', ()=>challFlipFn(!challFlipped));
}
document.getElementById('challPrevBtn')      ?.addEventListener('click', challPrev);
document.getElementById('challNextBtn')      ?.addEventListener('click', challNext);
document.getElementById('challPrevInputBtn') ?.addEventListener('click', challPrevInput);
document.getElementById('challNextInputBtn') ?.addEventListener('click', challNextInput);
document.getElementById('challCloseBtn')     ?.addEventListener('click', ()=>closeTraining('challScreen'));
document.getElementById('challSettingsBtn')  ?.addEventListener('click', ()=>document.getElementById('settingsOverlay').classList.add('open'));
registerMode('modeChallenges', showChallenges);

// ─── MINDSET MODE ─────────────────────────────────────────────────────────────

let mindStrategies = [], mindStratIdx = 0, mindInputIdx = 0;
let mindFlipped = false, mindAnimating = false;

function showMindset() {
  const raw = mindsetCollections[activeCollectionKey] || [];
  mindStrategies = window.filterInputsByBundle
    ? raw.map(s => ({ ...s, inputs: window.filterInputsByBundle(s.inputs, activeCollectionKey) })).filter(s => s.inputs.length)
    : raw;
  if (!mindStrategies.length) return;
  mindStratIdx = 0; mindInputIdx = 0;
  navToTraining('mindScreen');
  mindRender();
}

function mindRender() {
  const s = mindStrategies[mindStratIdx];
  const inp = s.inputs[mindInputIdx];
  document.getElementById('mindName').textContent      = s.name;
  document.getElementById('mindFrontText').textContent = inp.q;
  document.getElementById('mindBackText').textContent  = inp.a;
  document.getElementById('mindCounter').textContent   = `${mindStratIdx + 1} / ${mindStrategies.length}`;
  document.getElementById('mindSubCounter').textContent = `${mindInputIdx + 1} / ${s.inputs.length}`;
  mindFlipFn(false, false);
  if (window.alRender) { window.alRender('al-mind-front', window.alKey('mindScreen', s.name, mindInputIdx, 'front')); window.alRender('al-mind-back', window.alKey('mindScreen', s.name, mindInputIdx, 'back')); }
  if (window.fbRender) { window.fbRender('fb-mind-front', fbKey('mindScreen', s.name, mindInputIdx, 'front')); window.fbRender('fb-mind-back', fbKey('mindScreen', s.name, mindInputIdx, 'back')); }
}

function mindFlipFn(val, animate = true) {
  if (val && !mindFlipped && window.progCardFlipped) progCardFlipped();
  mindFlipped = val;
  const ci = document.getElementById('mindCardInner');
  ci.style.transition = animate ? 'transform 0.4s ease' : 'none';
  ci.classList.toggle('flipped', mindFlipped);
}

function mindTrig(dir, cb) {
  if (mindAnimating) return; mindAnimating = true;
  const card = document.getElementById('mindCard');
  card.classList.add('swipe-' + dir);
  setTimeout(() => { card.classList.remove('swipe-' + dir); cb(); mindAnimating = false; }, 220);
}

function mindNext()       { mindTrig('left',  () => { mindStratIdx = (mindStratIdx + 1) % mindStrategies.length; mindInputIdx = 0; mindRender(); }); }
function mindPrev()       { mindTrig('right', () => { mindStratIdx = (mindStratIdx - 1 + mindStrategies.length) % mindStrategies.length; mindInputIdx = 0; mindRender(); }); }
function mindNextInput()  { mindTrig('up',    () => { const s = mindStrategies[mindStratIdx]; mindInputIdx = (mindInputIdx + 1) % s.inputs.length; mindRender(); }); }
function mindPrevInput()  { mindTrig('down',  () => { const s = mindStrategies[mindStratIdx]; mindInputIdx = (mindInputIdx - 1 + s.inputs.length) % s.inputs.length; mindRender(); }); }

const mindCard = document.getElementById('mindCard');
if (mindCard) {
  let mTx=0,mTy=0,mTt=0,mMov=false;
  mindCard.addEventListener('touchstart',e=>{mTx=e.touches[0].clientX;mTy=e.touches[0].clientY;mTt=Date.now();mMov=false;e.preventDefault();},{passive:false});
  mindCard.addEventListener('touchmove', e=>{if(Math.abs(e.touches[0].clientX-mTx)>10||Math.abs(e.touches[0].clientY-mTy)>10)mMov=true;e.preventDefault();},{passive:false});
  mindCard.addEventListener('touchend',  e=>{
    e.preventDefault();
    const dx=e.changedTouches[0].clientX-mTx,dy=e.changedTouches[0].clientY-mTy,adx=Math.abs(dx),ady=Math.abs(dy);
    if(!mMov&&Date.now()-mTt<500){mindFlipFn(!mindFlipped);return;}
    if(mMov&&adx>40&&adx>ady){dx>0?mindPrev():mindNext();return;}
    if(mMov&&ady>40&&ady>adx){dy>0?mindPrevInput():mindNextInput();return;}
  },{passive:false});
  mindCard.addEventListener('click', ()=>mindFlipFn(!mindFlipped));
}
document.getElementById('mindPrevBtn')      ?.addEventListener('click', mindPrev);
document.getElementById('mindNextBtn')      ?.addEventListener('click', mindNext);
document.getElementById('mindPrevInputBtn') ?.addEventListener('click', mindPrevInput);
document.getElementById('mindNextInputBtn') ?.addEventListener('click', mindNextInput);
document.getElementById('mindCloseBtn')     ?.addEventListener('click', ()=>closeTraining('mindScreen'));
document.getElementById('mindSettingsBtn')  ?.addEventListener('click', ()=>document.getElementById('settingsOverlay').classList.add('open'));
registerMode('modeMindset', showMindset);

// ─── COLLECTIONS MODE ─────────────────────────────────────────────────────────

let collStrategies = [], collStratIdx = 0, collInputIdx = 0;
let collFlipped = false, collAnimating = false;

function showCollection() {
  const raw = collections[activeCollectionKey] || [];
  collStrategies = window.filterInputsByBundle
    ? raw.map(s => ({ ...s, inputs: window.filterInputsByBundle(s.inputs, activeCollectionKey) })).filter(s => s.inputs.length)
    : raw;
  if (!collStrategies.length) return;
  collStratIdx = 0; collInputIdx = 0;
  navToTraining('collScreen');
  collRender();
}

function collRender() {
  const s = collStrategies[collStratIdx];
  const inp = s.inputs[collInputIdx];
  document.getElementById('collName').textContent      = s.name;
  document.getElementById('collFrontText').textContent = inp.q;
  document.getElementById('collBackText').textContent  = inp.a;
  document.getElementById('collCounter').textContent   = `${collStratIdx + 1} / ${collStrategies.length}`;
  document.getElementById('collSubCounter').textContent = `${collInputIdx + 1} / ${s.inputs.length}`;
  collFlipFn(false, false);
  if (window.alRender) { window.alRender('al-coll-front', window.alKey('collScreen', s.name, collInputIdx, 'front')); window.alRender('al-coll-back', window.alKey('collScreen', s.name, collInputIdx, 'back')); }
  if (window.fbRender) { window.fbRender('fb-coll-front', fbKey('collScreen', s.name, collInputIdx, 'front')); window.fbRender('fb-coll-back', fbKey('collScreen', s.name, collInputIdx, 'back')); }
}

function collFlipFn(val, animate = true) {
  if (val && !collFlipped && window.progCardFlipped) progCardFlipped();
  collFlipped = val;
  const ci = document.getElementById('collCardInner');
  ci.style.transition = animate ? 'transform 0.4s ease' : 'none';
  ci.classList.toggle('flipped', collFlipped);
}

function collTrig(dir, cb) {
  if (collAnimating) return; collAnimating = true;
  const card = document.getElementById('collCard');
  card.classList.add('swipe-' + dir);
  setTimeout(() => { card.classList.remove('swipe-' + dir); cb(); collAnimating = false; }, 220);
}

function collNext()       { collTrig('left',  () => { collStratIdx = (collStratIdx + 1) % collStrategies.length; collInputIdx = 0; collRender(); }); }
function collPrev()       { collTrig('right', () => { collStratIdx = (collStratIdx - 1 + collStrategies.length) % collStrategies.length; collInputIdx = 0; collRender(); }); }
function collNextInput()  { collTrig('up',    () => { const s = collStrategies[collStratIdx]; collInputIdx = (collInputIdx + 1) % s.inputs.length; collRender(); }); }
function collPrevInput()  { collTrig('down',  () => { const s = collStrategies[collStratIdx]; collInputIdx = (collInputIdx - 1 + s.inputs.length) % s.inputs.length; collRender(); }); }

const collCard = document.getElementById('collCard');
if (collCard) {
  let coTx=0,coTy=0,coTt=0,coMov=false;
  collCard.addEventListener('touchstart',e=>{coTx=e.touches[0].clientX;coTy=e.touches[0].clientY;coTt=Date.now();coMov=false;e.preventDefault();},{passive:false});
  collCard.addEventListener('touchmove', e=>{if(Math.abs(e.touches[0].clientX-coTx)>10||Math.abs(e.touches[0].clientY-coTy)>10)coMov=true;e.preventDefault();},{passive:false});
  collCard.addEventListener('touchend',  e=>{
    e.preventDefault();
    const dx=e.changedTouches[0].clientX-coTx,dy=e.changedTouches[0].clientY-coTy,adx=Math.abs(dx),ady=Math.abs(dy);
    if(!coMov&&Date.now()-coTt<500){collFlipFn(!collFlipped);return;}
    if(coMov&&adx>40&&adx>ady){dx>0?collPrev():collNext();return;}
    if(coMov&&ady>40&&ady>adx){dy>0?collPrevInput():collNextInput();return;}
  },{passive:false});
  collCard.addEventListener('click', ()=>collFlipFn(!collFlipped));
}
document.getElementById('collCloseBtn')     ?.addEventListener('click', ()=>closeTraining('collScreen'));
registerMode('modeCollections', showCollection);
