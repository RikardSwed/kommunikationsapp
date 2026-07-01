// app.js — All application logic for Communication Trainer
// Depends on: data.js and multiStepData.js (must be loaded first)

const VERSION = 'v1.14.0';

// ─── SCREENS ──────────────────────────────────────────────────────────────────
const homeScreen     = document.getElementById('homeScreen');
const modeScreen     = document.getElementById('modeScreen');
const trainingScreen = document.getElementById('trainingScreen');
const msScreen       = document.getElementById('msScreen');
const memScreen      = document.getElementById('memScreen');

const TRAINING_SCREENS = [
  'trainingScreen','memScreen','msScreen','flowScreen','guidedScreen',
  'hfScreen','hfMemScreen','collScreen'
];

function hideAll() {
  [homeScreen, modeScreen,
   ...TRAINING_SCREENS.map(id => document.getElementById(id))
  ].forEach(el => { el.style.display = 'none'; });
}

function navToHome() {
  // Hide the Library screen immediately so it can't flash during the slide-out
  homeScreen.style.display = 'none';
  modeScreen.classList.remove('slide-in-right', 'slide-out-right');
  void modeScreen.offsetWidth;
  modeScreen.classList.add('slide-out-right');
  setTimeout(() => {
    modeScreen.style.display = 'none';
    modeScreen.classList.remove('slide-out-right');
    showTab(_tabBeforeMode || 'library');
  }, 300);
  showBottomNav();
}

let _tabBeforeMode = 'library'; // track which tab opened the mode screen

function navToMode() {
  // Remember which tab we came from
  const activeTab = document.querySelector('.nav-tab.active');
  _tabBeforeMode = activeTab ? activeTab.dataset.tab : 'library';
  // Hide all tab screens, show Library behind mode screen
  ['dashboardScreen','homeScreen','progressScreen','upgradeScreen'].forEach(id => {
    const el = document.getElementById(id); if (el) el.style.display = 'none';
  });
  homeScreen.style.display = 'flex';
  modeScreen.style.display = 'flex';
  modeScreen.classList.remove('slide-in-right', 'slide-out-right');
  void modeScreen.offsetWidth;
  modeScreen.classList.add('slide-in-right');
  hideBottomNav();
}

function navToTraining(id) {
  // Mode stays visible behind — animate training in over it
  modeScreen.style.display = 'flex';
  const el = document.getElementById(id);
  el.style.display = 'flex';
  el.classList.remove('slide-in-bottom', 'slide-out-bottom');
  void el.offsetWidth;
  el.classList.add('slide-in-bottom');
  // Hide mode after training has fully covered it
  setTimeout(() => { modeScreen.style.display = 'none'; }, 320);
}

function navFromTraining(id) {
  // Show mode immediately behind (no animation), hide home
  homeScreen.style.display = 'none';
  modeScreen.style.display = 'flex';
  modeScreen.classList.remove('slide-in-right', 'slide-out-right');
  const el = document.getElementById(id);
  el.classList.remove('slide-in-bottom', 'slide-out-bottom');
  void el.offsetWidth;
  el.classList.add('slide-out-bottom');
  setTimeout(() => {
    el.style.display = 'none';
    el.classList.remove('slide-out-bottom');
  }, 300);
}

const card           = document.getElementById('card');
const cardInner      = document.getElementById('cardInner');
const cardInfo       = document.getElementById('cardInfo');
const cardInfoText   = document.getElementById('cardInfoText');
const strategyName   = document.getElementById('strategyName');
const inputText      = document.getElementById('inputText');
const answerText     = document.getElementById('answerText');
const counter        = document.getElementById('counter');
const subCounter     = document.getElementById('subCounter');
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
  // Save last pack for dashboard
  try { localStorage.setItem('dash_last_pack', JSON.stringify({ key, label })); } catch {}
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

// Handsfree flip toggle
(function initHfToggle() {
  const toggle = document.getElementById('modeHfToggle');
  const label  = document.getElementById('modeHfToggleLabel');
  const inners = document.querySelectorAll('.mode-flip-inner');
  let hfActive = false;

  function flip() {
    hfActive = !hfActive;
    inners.forEach(el => el.classList.toggle('flipped', hfActive));
    toggle.classList.toggle('active', hfActive);
    label.textContent = hfActive ? 'Switch to Standard' : 'Switch to Handsfree';
  }

  toggle.addEventListener('click', flip);
  toggle.addEventListener('touchend', e => { e.preventDefault(); flip(); }, { passive: false });

  // Reset to standard whenever mode screen is opened
  const modeBackBtn = document.getElementById('modeBackBtn');
  const origShowMode = showModeScreen;
  // Patch showModeScreen to reset flip state on open
  const _resetHf = () => {
    if (hfActive) {
      hfActive = false;
      inners.forEach(el => el.classList.remove('flipped'));
      toggle.classList.remove('active');
      label.textContent = 'Switch to Handsfree';
    }
  };
  // Hook into showModeScreen via event on the screen becoming visible
  const observer = new MutationObserver(() => {
    const ms = document.getElementById('modeScreen');
    if (ms && ms.style.display === 'flex') _resetHf();
  });
  const ms = document.getElementById('modeScreen');
  if (ms) observer.observe(ms, { attributes: true, attributeFilter: ['style'] });
})();

addModeListener('modeFlashcard', showTraining);

addModeListener('modeMultiStep', showMultiStep);

addModeListener('modeMemorize', showMemorize);

// Back buttons
function closeTraining(screenId) {
  navFromTraining(screenId);
  // showModeScreen sets activeCollection labels etc but we don't want hideAll
  // so we call it after the animation starts
  document.getElementById('modeCollectionName').textContent = activeCollectionLabel;
}

document.getElementById('closeBtn').addEventListener('click',   () => closeTraining('trainingScreen'));
document.getElementById('msCloseBtn').addEventListener('click',  () => closeTraining('msScreen'));
document.getElementById('memCloseBtn').addEventListener('click', () => closeTraining('memScreen'));

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
document.getElementById('guidedCloseBtn').addEventListener('click', ()=>closeTraining('guidedScreen'));
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
  closeTraining('hfScreen');
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
  closeTraining('hfMemScreen');
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
const homeSettingsScreen  = document.getElementById('homeSettingsScreen');
const feedbackModeToggle  = document.getElementById('feedbackModeToggle');
const feedbackExportBtn   = document.getElementById('feedbackExportBtn');

function applyFeedbackMode() {
  document.body.classList.toggle('feedback-mode', feedbackMode);
  feedbackModeToggle.checked = feedbackMode;
}

// Open/close home settings screen (slides in/out from the right, like modeScreen)
function navToSettings() {
  homeSettingsScreen.style.display = 'flex';
  homeSettingsScreen.classList.remove('slide-in-right', 'slide-out-right');
  void homeSettingsScreen.offsetWidth;
  homeSettingsScreen.classList.add('slide-in-right');
  hideBottomNav();
}

function navFromSettings() {
  homeSettingsScreen.classList.remove('slide-in-right', 'slide-out-right');
  void homeSettingsScreen.offsetWidth;
  homeSettingsScreen.classList.add('slide-out-right');
  setTimeout(() => {
    homeSettingsScreen.style.display = 'none';
    homeSettingsScreen.classList.remove('slide-out-right');
  }, 320);
  showBottomNav();
}

homeSettingsBtn.addEventListener('click', () => {
  feedbackModeToggle.checked = feedbackMode;
  navToSettings();
});
homeSettingsBtn.addEventListener('touchend', e => { e.preventDefault(); homeSettingsBtn.click(); }, { passive: false });

const homeSettingsBackBtn = document.getElementById('homeSettingsBackBtn');
if (homeSettingsBackBtn) {
  homeSettingsBackBtn.addEventListener('click', navFromSettings);
  homeSettingsBackBtn.addEventListener('touchend', e => { e.preventDefault(); navFromSettings(); }, { passive: false });
}

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
applyInputCounterVisibility();

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

addModeListener('modeCollections', showCollections);

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
  fbRender('fb-chall-back',  fbKey('chall', challIdx, challInputIdx, 'back'));
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

addModeListener('modeChallenges', showChallenges);

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
  fbRender('fb-mind-back',  fbKey('mind', mindIdx, mindInputIdx, 'back'));
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

addModeListener('modeMindset', showMindset);

// Add mindScreen to TRAINING_SCREENS
TRAINING_SCREENS.push('mindScreen');

// Init feedback bars
fbInitBar('fb-mind-front');
fbInitBar('fb-mind-back');


// ── HANDSFREE: CHALLENGES MODE ────────────────────────────────────────────────

let hfChallPlaying  = false;
let hfChallAbort    = false;
let hfChallSkipStep = false;
let hfChallTimeouts = [];
let hfChallDelayResolve = null;

function hfChallSettings() {
  return {
    explanation : document.getElementById('hfChallExplanation').checked,
    cardBack    : document.getElementById('hfChallCardBack').checked,
    maxInputs   : document.getElementById('hfChallMaxInputs').value,
    thinkPause  : parseFloat(document.getElementById('hfChallThinkPause').value),
    genPause    : parseFloat(document.getElementById('hfChallGenPause').value),
    rate        : parseFloat(document.getElementById('hfChallRate').value),
    voiceGender : document.getElementById('hfChallVoice').value,
    loopStrategy: document.getElementById('hfChallLoopStrategy').checked
  };
}

function hfChallSpeak(text, cfg) {
  return new Promise(resolve => {
    if (!text) { resolve(); return; }
    speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang  = 'en-US';
    utt.rate  = cfg.rate;
    const voice = hfPickVoice(cfg.voiceGender);
    if (voice) utt.voice = voice;
    utt.onend   = () => resolve();
    utt.onerror = () => resolve();
    if (hfChallSkipStep) { hfChallSkipStep = false; resolve(); return; }
    speechSynthesis.speak(utt);
  });
}

function hfChallDelay(ms) {
  return new Promise(resolve => {
    hfChallDelayResolve = resolve;
    if (hfChallAbort || hfChallSkipStep) { hfChallDelayResolve = null; resolve(); return; }
    const step = 80;
    let elapsed = 0;
    function tick() {
      if (hfChallAbort || hfChallSkipStep) { hfChallDelayResolve = null; resolve(); return; }
      elapsed += step;
      if (elapsed >= ms) { hfChallDelayResolve = null; resolve(); return; }
      const id = setTimeout(tick, step);
      hfChallTimeouts.push(id);
    }
    const id = setTimeout(tick, step);
    hfChallTimeouts.push(id);
  });
}

function hfChallClearTimeouts() {
  hfChallTimeouts.forEach(id => clearTimeout(id));
  hfChallTimeouts = [];
}

const hfChallCardInnerEl = document.getElementById('hfChallCardInner');

function hfChallShowCard(q, a, flipped) {
  document.getElementById('hfChallName').textContent      = challChallenges[challIdx].name;
  document.getElementById('hfChallFrontText').textContent = q;
  document.getElementById('hfChallBackText').textContent  = a;
  document.getElementById('hfChallCounter').textContent   = `${challIdx + 1} / ${challChallenges.length}`;
  hfChallCardInnerEl.style.transition = 'transform 0.4s ease';
  hfChallCardInnerEl.classList.toggle('flipped', flipped);
}

function hfChallUpdateButtons() {
  const playBtn = document.getElementById('hfChallPlayBtn');
  const prevBtn = document.getElementById('hfChallPrevStepBtn');
  const nextBtn = document.getElementById('hfChallNextStepBtn');
  playBtn.textContent = hfChallPlaying ? '⏹' : '▶';
  prevBtn.disabled = !hfChallPlaying;
  nextBtn.disabled = !hfChallPlaying;
  prevBtn.style.opacity = hfChallPlaying ? '1' : '0.35';
  nextBtn.style.opacity = hfChallPlaying ? '1' : '0.35';
}

async function hfChallPlay() {
  if (hfChallPlaying) { hfChallStop(); return; }
  if (!challChallenges.length) return;

  const unlock = new SpeechSynthesisUtterance(' ');
  unlock.volume = 0;
  speechSynthesis.speak(unlock);

  hfChallPlaying  = true;
  hfChallAbort    = false;
  hfChallSkipStep = false;
  hfChallUpdateButtons();

  const cfg    = hfChallSettings();
  const maxInp = cfg.maxInputs === 'all' ? Infinity : parseInt(cfg.maxInputs);

  const startSi       = challIdx;
  const startInputIdx = challInputIdx;
  const skipIntro      = startInputIdx > 0;

  outer:
  for (let si = startSi; si < challChallenges.length; si++) {
    if (hfChallAbort) break;
    challIdx = si;
    const cat = challChallenges[si];

    if (!skipIntro || si > startSi) {
      hfChallShowCard(cat.name, '', false);
      document.getElementById('hfChallFrontText').textContent = cat.name;
      await hfChallSpeak(cat.name, cfg);
      if (hfChallAbort) break;
      if (!hfChallSkipStep) await hfChallDelay(cfg.genPause * 1000);
      hfChallSkipStep = false;

      if (cfg.explanation && cat.description) {
        document.getElementById('hfChallCardInfoText').textContent = cat.description;
        document.getElementById('hfChallCardInfo').classList.add('visible');
        await hfChallSpeak(cat.description, cfg);
        document.getElementById('hfChallCardInfo').classList.remove('visible');
        document.getElementById('hfChallCardInfo').scrollTop = 0;
        if (hfChallAbort) break;
        if (!hfChallSkipStep) await hfChallDelay(cfg.genPause * 1000);
        hfChallSkipStep = false;
      }
    }

    const limit   = Math.min(cat.inputs.length, maxInp);
    const startIi = (si === startSi) ? startInputIdx : 0;

    for (let ii = startIi; ii < limit; ii++) {
      if (hfChallAbort) break outer;
      challInputIdx = ii;
      const inp = cat.inputs[ii];

      hfChallShowCard(inp.q, inp.a, false);
      await hfChallSpeak(inp.q, cfg);
      if (hfChallAbort) break outer;
      if (!hfChallSkipStep) await hfChallDelay(cfg.thinkPause * 1000);
      hfChallSkipStep = false;

      if (cfg.cardBack) {
        hfChallShowCard(inp.q, inp.a, true);
        await hfChallSpeak(inp.a, cfg);
        if (hfChallAbort) break outer;
        if (!hfChallSkipStep) await hfChallDelay(cfg.genPause * 1000);
        hfChallSkipStep = false;
      }

      if (cfg.loopStrategy && ii === limit - 1) ii = -1;
    }

    if (cfg.loopStrategy) si--;
  }

  hfChallPlaying  = false;
  hfChallAbort    = false;
  hfChallSkipStep = false;
  speechSynthesis.cancel();
  hfChallClearTimeouts();
  hfChallUpdateButtons();
}

function hfChallStop() {
  hfChallAbort    = true;
  hfChallPlaying  = false;
  hfChallSkipStep = false;
  speechSynthesis.cancel();
  hfChallClearTimeouts();
  hfChallUpdateButtons();
}

function hfChallSkipForward() {
  if (!hfChallPlaying) return;
  hfChallSkipStep = true;
  speechSynthesis.cancel();
  hfChallClearTimeouts();
  if (hfChallDelayResolve) { hfChallDelayResolve(); hfChallDelayResolve = null; }
}

function hfChallSkipBack() {
  if (!hfChallPlaying) return;
  if (challInputIdx === 0 && challIdx > 0) challIdx--;
  challInputIdx = 0;
  hfChallAbort = true;
  speechSynthesis.cancel();
  hfChallClearTimeouts();
  if (hfChallDelayResolve) { hfChallDelayResolve(); hfChallDelayResolve = null; }
  setTimeout(() => {
    hfChallAbort   = false;
    hfChallPlaying = false;
    hfChallPlay();
  }, 50);
}

document.getElementById('hfChallPlayBtn').addEventListener('click', hfChallPlay);
document.getElementById('hfChallPlayBtn').addEventListener('touchend', e => { e.stopPropagation(); e.preventDefault(); hfChallPlay(); }, { passive: false });
document.getElementById('hfChallNextStepBtn').addEventListener('click', hfChallSkipForward);
document.getElementById('hfChallNextStepBtn').addEventListener('touchend', e => { e.stopPropagation(); e.preventDefault(); hfChallSkipForward(); }, { passive: false });
document.getElementById('hfChallPrevStepBtn').addEventListener('click', hfChallSkipBack);
document.getElementById('hfChallPrevStepBtn').addEventListener('touchend', e => { e.stopPropagation(); e.preventDefault(); hfChallSkipBack(); }, { passive: false });
document.getElementById('hfChallCloseBtn').addEventListener('click', () => {
  hfChallStop();
  closeTraining('hfChallScreen');
});
document.getElementById('hfChallSettingsBtn').addEventListener('click', () =>
  document.getElementById('hfChallSettingsOverlay').classList.add('open'));
document.getElementById('hfChallSettingsClose').addEventListener('click', () =>
  document.getElementById('hfChallSettingsOverlay').classList.remove('open'));

const hfChallCardInfoEl = document.getElementById('hfChallCardInfo');
hfChallCardInfoEl.addEventListener('touchstart', e => e.stopPropagation(), { passive: true });
hfChallCardInfoEl.addEventListener('touchmove',  e => e.stopPropagation(), { passive: true });
hfChallCardInfoEl.addEventListener('touchend',   e => e.stopPropagation(), { passive: true });

// Manual navigation
const hfChallCard = document.getElementById('hfChallCard');
function hfChallRenderManual() {
  if (!challChallenges.length) return;
  hfChallShowCard(challChallenges[challIdx].inputs[challInputIdx].q, challChallenges[challIdx].inputs[challInputIdx].a, false);
}
let hcTx=0,hcTy=0,hcTt=0,hcMov=false;
hfChallCard.addEventListener('touchstart', e => { if (hfChallPlaying) return; hcTx=e.touches[0].clientX; hcTy=e.touches[0].clientY; hcTt=Date.now(); hcMov=false; }, { passive: true });
hfChallCard.addEventListener('touchmove',  e => { if (hfChallPlaying) return; if (Math.abs(e.touches[0].clientX-hcTx)>10||Math.abs(e.touches[0].clientY-hcTy)>10) hcMov=true; }, { passive: true });
hfChallCard.addEventListener('touchend',   e => {
  if (hfChallPlaying) return;
  const dx=e.changedTouches[0].clientX-hcTx, dy=e.changedTouches[0].clientY-hcTy, adx=Math.abs(dx), ady=Math.abs(dy);
  if (!hcMov && Date.now()-hcTt<500) { hfChallCardInnerEl.classList.toggle('flipped'); return; }
  if (hcMov && adx>40 && adx>ady) { challIdx = dx>0 ? (challIdx-1+challChallenges.length)%challChallenges.length : (challIdx+1)%challChallenges.length; challInputIdx=0; hfChallRenderManual(); return; }
  if (hcMov && ady>40 && ady>adx) { challInputIdx = dy>0 ? (challInputIdx-1+challChallenges[challIdx].inputs.length)%challChallenges[challIdx].inputs.length : (challInputIdx+1)%challChallenges[challIdx].inputs.length; hfChallRenderManual(); return; }
});

document.getElementById('hfChallPrevBtn').addEventListener('click', () => { if (hfChallPlaying) return; challIdx=(challIdx-1+challChallenges.length)%challChallenges.length; challInputIdx=0; hfChallRenderManual(); });
document.getElementById('hfChallNextBtn').addEventListener('click', () => { if (hfChallPlaying) return; challIdx=(challIdx+1)%challChallenges.length; challInputIdx=0; hfChallRenderManual(); });
document.getElementById('hfChallPrevInputBtn').addEventListener('click', () => { if (hfChallPlaying) return; challInputIdx=(challInputIdx-1+challChallenges[challIdx].inputs.length)%challChallenges[challIdx].inputs.length; hfChallRenderManual(); });
document.getElementById('hfChallNextInputBtn').addEventListener('click', () => { if (hfChallPlaying) return; challInputIdx=(challInputIdx+1)%challChallenges[challIdx].inputs.length; hfChallRenderManual(); });

function showHandsfreeChallenges() {
  challChallenges = challengesCollections[activeCollectionKey] || [];
  if (!challChallenges.length) return;
  challIdx = 0; challInputIdx = 0;
  navToTraining('hfChallScreen');
  hfChallRenderManual();
  document.getElementById('hfChallName').textContent = challChallenges[0].name;
  document.getElementById('hfChallCounter').textContent = `1 / ${challChallenges.length}`;
  hfChallUpdateButtons();
}

addModeListener('modeHandsfreeChallenges', showHandsfreeChallenges);
TRAINING_SCREENS.push('hfChallScreen');


// ── HANDSFREE: SEQUENCES MODE ─────────────────────────────────────────────────

let hfFlowPlaying  = false;
let hfFlowAbort    = false;
let hfFlowSkipStep = false;
let hfFlowTimeouts = [];
let hfFlowDelayResolve = null;
let hfFlowSequence = [];

function hfFlowSettings() {
  return {
    explanation : document.getElementById('hfFlowExplanation').checked,
    cardBack    : document.getElementById('hfFlowCardBack').checked,
    thinkPause  : parseFloat(document.getElementById('hfFlowThinkPause').value),
    genPause    : parseFloat(document.getElementById('hfFlowGenPause').value),
    rate        : parseFloat(document.getElementById('hfFlowRate').value),
    voiceGender : document.getElementById('hfFlowVoice').value,
    loopStrategy: document.getElementById('hfFlowLoopStrategy').checked
  };
}

function hfFlowSpeak(text, cfg) {
  return new Promise(resolve => {
    if (!text) { resolve(); return; }
    speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang  = 'en-US';
    utt.rate  = cfg.rate;
    const voice = hfPickVoice(cfg.voiceGender);
    if (voice) utt.voice = voice;
    utt.onend   = () => resolve();
    utt.onerror = () => resolve();
    if (hfFlowSkipStep) { hfFlowSkipStep = false; resolve(); return; }
    speechSynthesis.speak(utt);
  });
}

function hfFlowDelay(ms) {
  return new Promise(resolve => {
    hfFlowDelayResolve = resolve;
    if (hfFlowAbort || hfFlowSkipStep) { hfFlowDelayResolve = null; resolve(); return; }
    const step = 80;
    let elapsed = 0;
    function tick() {
      if (hfFlowAbort || hfFlowSkipStep) { hfFlowDelayResolve = null; resolve(); return; }
      elapsed += step;
      if (elapsed >= ms) { hfFlowDelayResolve = null; resolve(); return; }
      const id = setTimeout(tick, step);
      hfFlowTimeouts.push(id);
    }
    const id = setTimeout(tick, step);
    hfFlowTimeouts.push(id);
  });
}

function hfFlowClearTimeouts() {
  hfFlowTimeouts.forEach(id => clearTimeout(id));
  hfFlowTimeouts = [];
}

const hfFlowCardInnerEl = document.getElementById('hfFlowCardInner');

function hfFlowShowCard(item, flipped) {
  document.getElementById('hfFlowComboName').textContent = flowStrategies[flowComboIdx].name;
  document.getElementById('hfFlowFrontText').textContent = item.front;
  document.getElementById('hfFlowBackText').textContent  = item.back;
  document.getElementById('hfFlowCounter').textContent   = `${flowComboIdx + 1} / ${flowStrategies.length}`;
  hfFlowCardInnerEl.style.transition = 'transform 0.4s ease';
  hfFlowCardInnerEl.classList.toggle('flipped', flipped);
}

function hfFlowUpdateButtons() {
  const playBtn = document.getElementById('hfFlowPlayBtn');
  const prevBtn = document.getElementById('hfFlowPrevStepBtn');
  const nextBtn = document.getElementById('hfFlowNextStepBtn');
  playBtn.textContent = hfFlowPlaying ? '⏹' : '▶';
  prevBtn.disabled = !hfFlowPlaying;
  nextBtn.disabled = !hfFlowPlaying;
  prevBtn.style.opacity = hfFlowPlaying ? '1' : '0.35';
  nextBtn.style.opacity = hfFlowPlaying ? '1' : '0.35';
}

async function hfFlowPlay() {
  if (hfFlowPlaying) { hfFlowStop(); return; }
  if (!flowStrategies.length) return;

  const unlock = new SpeechSynthesisUtterance(' ');
  unlock.volume = 0;
  speechSynthesis.speak(unlock);

  hfFlowPlaying  = true;
  hfFlowAbort    = false;
  hfFlowSkipStep = false;
  hfFlowUpdateButtons();

  const cfg = hfFlowSettings();

  const startCi = flowComboIdx;
  const startCardIdx = flowCardIdx;

  outer:
  for (let ci = startCi; ci < flowStrategies.length; ci++) {
    if (hfFlowAbort) break;
    flowComboIdx = ci;
    const combo = flowStrategies[ci];
    const seq = buildFlowSequence(combo);
    const startIi = (ci === startCi) ? startCardIdx : 0;
    const skipIntro = (ci === startCi) && startCardIdx > 0;

    if (!skipIntro) {
      document.getElementById('hfFlowComboName').textContent = combo.name;
      document.getElementById('hfFlowFrontText').textContent = combo.name;
      document.getElementById('hfFlowBackText').textContent  = '';
      hfFlowCardInnerEl.classList.remove('flipped');
      await hfFlowSpeak(combo.name, cfg);
      if (hfFlowAbort) break;
      if (!hfFlowSkipStep) await hfFlowDelay(cfg.genPause * 1000);
      hfFlowSkipStep = false;

      if (cfg.explanation && combo.description) {
        document.getElementById('hfFlowCardInfoText').textContent = combo.description;
        document.getElementById('hfFlowCardInfo').classList.add('visible');
        await hfFlowSpeak(combo.description, cfg);
        document.getElementById('hfFlowCardInfo').classList.remove('visible');
        document.getElementById('hfFlowCardInfo').scrollTop = 0;
        if (hfFlowAbort) break;
        if (!hfFlowSkipStep) await hfFlowDelay(cfg.genPause * 1000);
        hfFlowSkipStep = false;
      }
    }

    for (let ii = startIi; ii < seq.length; ii++) {
      if (hfFlowAbort) break outer;
      flowCardIdx = ii;
      const item = seq[ii];

      hfFlowShowCard(item, false);
      await hfFlowSpeak(item.front, cfg);
      if (hfFlowAbort) break outer;
      if (!hfFlowSkipStep) await hfFlowDelay(cfg.thinkPause * 1000);
      hfFlowSkipStep = false;

      if (cfg.cardBack && item.back !== item.front) {
        hfFlowShowCard(item, true);
        await hfFlowSpeak(item.back, cfg);
        if (hfFlowAbort) break outer;
        if (!hfFlowSkipStep) await hfFlowDelay(cfg.genPause * 1000);
        hfFlowSkipStep = false;
      }

      if (cfg.loopStrategy && ii === seq.length - 1) ii = -1;
    }

    if (cfg.loopStrategy) ci--;
  }

  hfFlowPlaying  = false;
  hfFlowAbort    = false;
  hfFlowSkipStep = false;
  speechSynthesis.cancel();
  hfFlowClearTimeouts();
  hfFlowUpdateButtons();
}

function hfFlowStop() {
  hfFlowAbort    = true;
  hfFlowPlaying  = false;
  hfFlowSkipStep = false;
  speechSynthesis.cancel();
  hfFlowClearTimeouts();
  hfFlowUpdateButtons();
}

function hfFlowSkipForward() {
  if (!hfFlowPlaying) return;
  hfFlowSkipStep = true;
  speechSynthesis.cancel();
  hfFlowClearTimeouts();
  if (hfFlowDelayResolve) { hfFlowDelayResolve(); hfFlowDelayResolve = null; }
}

function hfFlowSkipBack() {
  if (!hfFlowPlaying) return;
  if (flowCardIdx === 0 && flowComboIdx > 0) flowComboIdx--;
  flowCardIdx = 0;
  hfFlowAbort = true;
  speechSynthesis.cancel();
  hfFlowClearTimeouts();
  if (hfFlowDelayResolve) { hfFlowDelayResolve(); hfFlowDelayResolve = null; }
  setTimeout(() => {
    hfFlowAbort   = false;
    hfFlowPlaying = false;
    hfFlowPlay();
  }, 50);
}

document.getElementById('hfFlowPlayBtn').addEventListener('click', hfFlowPlay);
document.getElementById('hfFlowPlayBtn').addEventListener('touchend', e => { e.stopPropagation(); e.preventDefault(); hfFlowPlay(); }, { passive: false });
document.getElementById('hfFlowNextStepBtn').addEventListener('click', hfFlowSkipForward);
document.getElementById('hfFlowNextStepBtn').addEventListener('touchend', e => { e.stopPropagation(); e.preventDefault(); hfFlowSkipForward(); }, { passive: false });
document.getElementById('hfFlowPrevStepBtn').addEventListener('click', hfFlowSkipBack);
document.getElementById('hfFlowPrevStepBtn').addEventListener('touchend', e => { e.stopPropagation(); e.preventDefault(); hfFlowSkipBack(); }, { passive: false });
document.getElementById('hfFlowCloseBtn').addEventListener('click', () => {
  hfFlowStop();
  closeTraining('hfFlowScreen');
});
document.getElementById('hfFlowSettingsBtn').addEventListener('click', () =>
  document.getElementById('hfFlowSettingsOverlay').classList.add('open'));
document.getElementById('hfFlowSettingsClose').addEventListener('click', () =>
  document.getElementById('hfFlowSettingsOverlay').classList.remove('open'));
const hfFlowCardInfoEl = document.getElementById('hfFlowCardInfo');
hfFlowCardInfoEl.addEventListener('touchstart', e => e.stopPropagation(), { passive: true });
hfFlowCardInfoEl.addEventListener('touchmove',  e => e.stopPropagation(), { passive: true });
hfFlowCardInfoEl.addEventListener('touchend',   e => e.stopPropagation(), { passive: true });

// Manual navigation
const hfFlowCard = document.getElementById('hfFlowCard');
function hfFlowRenderManual() {
  if (!flowStrategies.length) return;
  const seq = buildFlowSequence(flowStrategies[flowComboIdx]);
  hfFlowShowCard(seq[flowCardIdx], false);
}
let hfTx2=0,hfTy2=0,hfTt2=0,hfMov2=false;
hfFlowCard.addEventListener('touchstart', e => { if (hfFlowPlaying) return; hfTx2=e.touches[0].clientX; hfTy2=e.touches[0].clientY; hfTt2=Date.now(); hfMov2=false; }, { passive: true });
hfFlowCard.addEventListener('touchmove',  e => { if (hfFlowPlaying) return; if (Math.abs(e.touches[0].clientX-hfTx2)>10||Math.abs(e.touches[0].clientY-hfTy2)>10) hfMov2=true; }, { passive: true });
hfFlowCard.addEventListener('touchend',   e => {
  if (hfFlowPlaying) return;
  const dx=e.changedTouches[0].clientX-hfTx2, dy=e.changedTouches[0].clientY-hfTy2, adx=Math.abs(dx), ady=Math.abs(dy);
  const seqLen = buildFlowSequence(flowStrategies[flowComboIdx]).length;
  if (!hfMov2 && Date.now()-hfTt2<500) { hfFlowCardInnerEl.classList.toggle('flipped'); return; }
  if (hfMov2 && adx>40 && adx>ady) { flowComboIdx = dx>0 ? (flowComboIdx-1+flowStrategies.length)%flowStrategies.length : (flowComboIdx+1)%flowStrategies.length; flowCardIdx=0; hfFlowRenderManual(); return; }
  if (hfMov2 && ady>40 && ady>adx) { flowCardIdx = dy>0 ? (flowCardIdx-1+seqLen)%seqLen : (flowCardIdx+1)%seqLen; hfFlowRenderManual(); return; }
});

document.getElementById('hfFlowPrevComboBtn').addEventListener('click', () => { if (hfFlowPlaying) return; flowComboIdx=(flowComboIdx-1+flowStrategies.length)%flowStrategies.length; flowCardIdx=0; hfFlowRenderManual(); });
document.getElementById('hfFlowNextComboBtn').addEventListener('click', () => { if (hfFlowPlaying) return; flowComboIdx=(flowComboIdx+1)%flowStrategies.length; flowCardIdx=0; hfFlowRenderManual(); });
document.getElementById('hfFlowPrevCardBtn').addEventListener('click', () => { if (hfFlowPlaying) return; const len=buildFlowSequence(flowStrategies[flowComboIdx]).length; flowCardIdx=(flowCardIdx-1+len)%len; hfFlowRenderManual(); });
document.getElementById('hfFlowNextCardBtn').addEventListener('click', () => { if (hfFlowPlaying) return; const len=buildFlowSequence(flowStrategies[flowComboIdx]).length; flowCardIdx=(flowCardIdx+1)%len; hfFlowRenderManual(); });

function showHandsfreeSequences() {
  flowStrategies = multiStepCollections[activeCollectionKey] || [];
  if (!flowStrategies.length) return;
  flowComboIdx = 0; flowCardIdx = 0;
  navToTraining('hfFlowScreen');
  hfFlowRenderManual();
  hfFlowUpdateButtons();
}

addModeListener('modeHandsfreeSequences', showHandsfreeSequences);
TRAINING_SCREENS.push('hfFlowScreen');


// ── HANDSFREE: MINDSET MODE ───────────────────────────────────────────────────

let hfMindPlaying  = false;
let hfMindAbort    = false;
let hfMindSkipStep = false;
let hfMindTimeouts = [];
let hfMindDelayResolve = null;

function hfMindSettings() {
  return {
    explanation : document.getElementById('hfMindExplanation').checked,
    cardBack    : document.getElementById('hfMindCardBack').checked,
    maxInputs   : document.getElementById('hfMindMaxInputs').value,
    thinkPause  : parseFloat(document.getElementById('hfMindThinkPause').value),
    genPause    : parseFloat(document.getElementById('hfMindGenPause').value),
    rate        : parseFloat(document.getElementById('hfMindRate').value),
    voiceGender : document.getElementById('hfMindVoice').value,
    loopStrategy: document.getElementById('hfMindLoopStrategy').checked
  };
}

function hfMindSpeak(text, cfg) {
  return new Promise(resolve => {
    if (!text) { resolve(); return; }
    speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang  = 'en-US';
    utt.rate  = cfg.rate;
    const voice = hfPickVoice(cfg.voiceGender);
    if (voice) utt.voice = voice;
    utt.onend   = () => resolve();
    utt.onerror = () => resolve();
    if (hfMindSkipStep) { hfMindSkipStep = false; resolve(); return; }
    speechSynthesis.speak(utt);
  });
}

function hfMindDelay(ms) {
  return new Promise(resolve => {
    hfMindDelayResolve = resolve;
    if (hfMindAbort || hfMindSkipStep) { hfMindDelayResolve = null; resolve(); return; }
    const step = 80;
    let elapsed = 0;
    function tick() {
      if (hfMindAbort || hfMindSkipStep) { hfMindDelayResolve = null; resolve(); return; }
      elapsed += step;
      if (elapsed >= ms) { hfMindDelayResolve = null; resolve(); return; }
      const id = setTimeout(tick, step);
      hfMindTimeouts.push(id);
    }
    const id = setTimeout(tick, step);
    hfMindTimeouts.push(id);
  });
}

function hfMindClearTimeouts() {
  hfMindTimeouts.forEach(id => clearTimeout(id));
  hfMindTimeouts = [];
}

const hfMindCardInnerEl = document.getElementById('hfMindCardInner');

function hfMindShowCard(q, a, flipped) {
  document.getElementById('hfMindName').textContent      = mindStrategies[mindIdx].name;
  document.getElementById('hfMindFrontText').textContent = q;
  document.getElementById('hfMindBackText').textContent  = a;
  document.getElementById('hfMindCounter').textContent   = `${mindIdx + 1} / ${mindStrategies.length}`;
  hfMindCardInnerEl.style.transition = 'transform 0.4s ease';
  hfMindCardInnerEl.classList.toggle('flipped', flipped);
}

function hfMindUpdateButtons() {
  const playBtn = document.getElementById('hfMindPlayBtn');
  const prevBtn = document.getElementById('hfMindPrevStepBtn');
  const nextBtn = document.getElementById('hfMindNextStepBtn');
  playBtn.textContent = hfMindPlaying ? '⏹' : '▶';
  prevBtn.disabled = !hfMindPlaying;
  nextBtn.disabled = !hfMindPlaying;
  prevBtn.style.opacity = hfMindPlaying ? '1' : '0.35';
  nextBtn.style.opacity = hfMindPlaying ? '1' : '0.35';
}

async function hfMindPlay() {
  if (hfMindPlaying) { hfMindStop(); return; }
  if (!mindStrategies.length) return;

  const unlock = new SpeechSynthesisUtterance(' ');
  unlock.volume = 0;
  speechSynthesis.speak(unlock);

  hfMindPlaying  = true;
  hfMindAbort    = false;
  hfMindSkipStep = false;
  hfMindUpdateButtons();

  const cfg    = hfMindSettings();
  const maxInp = cfg.maxInputs === 'all' ? Infinity : parseInt(cfg.maxInputs);

  const startSi       = mindIdx;
  const startInputIdx = mindInputIdx;
  const skipIntro      = startInputIdx > 0;

  outer:
  for (let si = startSi; si < mindStrategies.length; si++) {
    if (hfMindAbort) break;
    mindIdx = si;
    const m = mindStrategies[si];

    if (!skipIntro || si > startSi) {
      hfMindShowCard(m.name, '', false);
      document.getElementById('hfMindFrontText').textContent = m.name;
      await hfMindSpeak(m.name, cfg);
      if (hfMindAbort) break;
      if (!hfMindSkipStep) await hfMindDelay(cfg.genPause * 1000);
      hfMindSkipStep = false;

      if (cfg.explanation && m.description) {
        document.getElementById('hfMindCardInfoText').textContent = m.description;
        document.getElementById('hfMindCardInfo').classList.add('visible');
        await hfMindSpeak(m.description, cfg);
        document.getElementById('hfMindCardInfo').classList.remove('visible');
        document.getElementById('hfMindCardInfo').scrollTop = 0;
        if (hfMindAbort) break;
        if (!hfMindSkipStep) await hfMindDelay(cfg.genPause * 1000);
        hfMindSkipStep = false;
      }
    }

    const limit   = Math.min(m.inputs.length, maxInp);
    const startIi = (si === startSi) ? startInputIdx : 0;

    for (let ii = startIi; ii < limit; ii++) {
      if (hfMindAbort) break outer;
      mindInputIdx = ii;
      const inp = m.inputs[ii];

      hfMindShowCard(inp.q, inp.a, false);
      await hfMindSpeak(inp.q, cfg);
      if (hfMindAbort) break outer;
      if (!hfMindSkipStep) await hfMindDelay(cfg.thinkPause * 1000);
      hfMindSkipStep = false;

      if (cfg.cardBack) {
        hfMindShowCard(inp.q, inp.a, true);
        await hfMindSpeak(inp.a, cfg);
        if (hfMindAbort) break outer;
        if (!hfMindSkipStep) await hfMindDelay(cfg.genPause * 1000);
        hfMindSkipStep = false;
      }

      if (cfg.loopStrategy && ii === limit - 1) ii = -1;
    }

    if (cfg.loopStrategy) si--;
  }

  hfMindPlaying  = false;
  hfMindAbort    = false;
  hfMindSkipStep = false;
  speechSynthesis.cancel();
  hfMindClearTimeouts();
  hfMindUpdateButtons();
}

function hfMindStop() {
  hfMindAbort    = true;
  hfMindPlaying  = false;
  hfMindSkipStep = false;
  speechSynthesis.cancel();
  hfMindClearTimeouts();
  hfMindUpdateButtons();
}

function hfMindSkipForward() {
  if (!hfMindPlaying) return;
  hfMindSkipStep = true;
  speechSynthesis.cancel();
  hfMindClearTimeouts();
  if (hfMindDelayResolve) { hfMindDelayResolve(); hfMindDelayResolve = null; }
}

function hfMindSkipBack() {
  if (!hfMindPlaying) return;
  if (mindInputIdx === 0 && mindIdx > 0) mindIdx--;
  mindInputIdx = 0;
  hfMindAbort = true;
  speechSynthesis.cancel();
  hfMindClearTimeouts();
  if (hfMindDelayResolve) { hfMindDelayResolve(); hfMindDelayResolve = null; }
  setTimeout(() => {
    hfMindAbort   = false;
    hfMindPlaying = false;
    hfMindPlay();
  }, 50);
}

document.getElementById('hfMindPlayBtn').addEventListener('click', hfMindPlay);
document.getElementById('hfMindPlayBtn').addEventListener('touchend', e => { e.stopPropagation(); e.preventDefault(); hfMindPlay(); }, { passive: false });
document.getElementById('hfMindNextStepBtn').addEventListener('click', hfMindSkipForward);
document.getElementById('hfMindNextStepBtn').addEventListener('touchend', e => { e.stopPropagation(); e.preventDefault(); hfMindSkipForward(); }, { passive: false });
document.getElementById('hfMindPrevStepBtn').addEventListener('click', hfMindSkipBack);
document.getElementById('hfMindPrevStepBtn').addEventListener('touchend', e => { e.stopPropagation(); e.preventDefault(); hfMindSkipBack(); }, { passive: false });
document.getElementById('hfMindCloseBtn').addEventListener('click', () => {
  hfMindStop();
  closeTraining('hfMindScreen');
});
document.getElementById('hfMindSettingsBtn').addEventListener('click', () =>
  document.getElementById('hfMindSettingsOverlay').classList.add('open'));
document.getElementById('hfMindSettingsClose').addEventListener('click', () =>
  document.getElementById('hfMindSettingsOverlay').classList.remove('open'));

const hfMindCardInfoEl = document.getElementById('hfMindCardInfo');
hfMindCardInfoEl.addEventListener('touchstart', e => e.stopPropagation(), { passive: true });
hfMindCardInfoEl.addEventListener('touchmove',  e => e.stopPropagation(), { passive: true });
hfMindCardInfoEl.addEventListener('touchend',   e => e.stopPropagation(), { passive: true });

// Manual navigation
const hfMindCard = document.getElementById('hfMindCard');
function hfMindRenderManual() {
  if (!mindStrategies.length) return;
  hfMindShowCard(mindStrategies[mindIdx].inputs[mindInputIdx].q, mindStrategies[mindIdx].inputs[mindInputIdx].a, false);
}
let hmTx=0,hmTy=0,hmTt=0,hmMov=false;
hfMindCard.addEventListener('touchstart', e => { if (hfMindPlaying) return; hmTx=e.touches[0].clientX; hmTy=e.touches[0].clientY; hmTt=Date.now(); hmMov=false; }, { passive: true });
hfMindCard.addEventListener('touchmove',  e => { if (hfMindPlaying) return; if (Math.abs(e.touches[0].clientX-hmTx)>10||Math.abs(e.touches[0].clientY-hmTy)>10) hmMov=true; }, { passive: true });
hfMindCard.addEventListener('touchend',   e => {
  if (hfMindPlaying) return;
  const dx=e.changedTouches[0].clientX-hmTx, dy=e.changedTouches[0].clientY-hmTy, adx=Math.abs(dx), ady=Math.abs(dy);
  if (!hmMov && Date.now()-hmTt<500) { hfMindCardInnerEl.classList.toggle('flipped'); return; }
  if (hmMov && adx>40 && adx>ady) { mindIdx = dx>0 ? (mindIdx-1+mindStrategies.length)%mindStrategies.length : (mindIdx+1)%mindStrategies.length; mindInputIdx=0; hfMindRenderManual(); return; }
  if (hmMov && ady>40 && ady>adx) { mindInputIdx = dy>0 ? (mindInputIdx-1+mindStrategies[mindIdx].inputs.length)%mindStrategies[mindIdx].inputs.length : (mindInputIdx+1)%mindStrategies[mindIdx].inputs.length; hfMindRenderManual(); return; }
});

document.getElementById('hfMindPrevBtn').addEventListener('click', () => { if (hfMindPlaying) return; mindIdx=(mindIdx-1+mindStrategies.length)%mindStrategies.length; mindInputIdx=0; hfMindRenderManual(); });
document.getElementById('hfMindNextBtn').addEventListener('click', () => { if (hfMindPlaying) return; mindIdx=(mindIdx+1)%mindStrategies.length; mindInputIdx=0; hfMindRenderManual(); });
document.getElementById('hfMindPrevInputBtn').addEventListener('click', () => { if (hfMindPlaying) return; mindInputIdx=(mindInputIdx-1+mindStrategies[mindIdx].inputs.length)%mindStrategies[mindIdx].inputs.length; hfMindRenderManual(); });
document.getElementById('hfMindNextInputBtn').addEventListener('click', () => { if (hfMindPlaying) return; mindInputIdx=(mindInputIdx+1)%mindStrategies[mindIdx].inputs.length; hfMindRenderManual(); });

function showHandsfreeMindset() {
  mindStrategies = mindsetCollections[activeCollectionKey] || [];
  if (!mindStrategies.length) return;
  mindIdx = 0; mindInputIdx = 0;
  navToTraining('hfMindScreen');
  hfMindRenderManual();
  document.getElementById('hfMindName').textContent = mindStrategies[0].name;
  document.getElementById('hfMindCounter').textContent = `1 / ${mindStrategies.length}`;
  hfMindUpdateButtons();
}

addModeListener('modeHandsfreeMindset', showHandsfreeMindset);
TRAINING_SCREENS.push('hfMindScreen');


// ── HANDSFREE: COLLECTIONS MODE ───────────────────────────────────────────────

let hfCollPlaying  = false;
let hfCollAbort    = false;
let hfCollSkipStep = false;
let hfCollTimeouts = [];
let hfCollDelayResolve = null;

function hfCollSettings() {
  return {
    explanation : document.getElementById('hfCollExplanation').checked,
    cardBack    : document.getElementById('hfCollCardBack').checked,
    maxInputs   : document.getElementById('hfCollMaxInputs').value,
    thinkPause  : parseFloat(document.getElementById('hfCollThinkPause').value),
    genPause    : parseFloat(document.getElementById('hfCollGenPause').value),
    rate        : parseFloat(document.getElementById('hfCollRate').value),
    voiceGender : document.getElementById('hfCollVoice').value,
    loopStrategy: document.getElementById('hfCollLoopStrategy').checked
  };
}

function hfCollSpeak(text, cfg) {
  return new Promise(resolve => {
    if (!text) { resolve(); return; }
    speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang  = 'en-US';
    utt.rate  = cfg.rate;
    const voice = hfPickVoice(cfg.voiceGender);
    if (voice) utt.voice = voice;
    utt.onend   = () => resolve();
    utt.onerror = () => resolve();
    if (hfCollSkipStep) { hfCollSkipStep = false; resolve(); return; }
    speechSynthesis.speak(utt);
  });
}

function hfCollDelay(ms) {
  return new Promise(resolve => {
    hfCollDelayResolve = resolve;
    if (hfCollAbort || hfCollSkipStep) { hfCollDelayResolve = null; resolve(); return; }
    const step = 80;
    let elapsed = 0;
    function tick() {
      if (hfCollAbort || hfCollSkipStep) { hfCollDelayResolve = null; resolve(); return; }
      elapsed += step;
      if (elapsed >= ms) { hfCollDelayResolve = null; resolve(); return; }
      const id = setTimeout(tick, step);
      hfCollTimeouts.push(id);
    }
    const id = setTimeout(tick, step);
    hfCollTimeouts.push(id);
  });
}

function hfCollClearTimeouts() {
  hfCollTimeouts.forEach(id => clearTimeout(id));
  hfCollTimeouts = [];
}

const hfCollCardInnerEl = document.getElementById('hfCollCardInner');

function hfCollShowCard(q, a, flipped) {
  document.getElementById('hfCollName').textContent      = collCollections[collIdx].name;
  document.getElementById('hfCollFrontText').textContent = q;
  document.getElementById('hfCollBackText').textContent  = a;
  document.getElementById('hfCollCounter').textContent   = `${collIdx + 1} / ${collCollections.length}`;
  hfCollCardInnerEl.style.transition = 'transform 0.4s ease';
  hfCollCardInnerEl.classList.toggle('flipped', flipped);
}

function hfCollUpdateButtons() {
  const playBtn = document.getElementById('hfCollPlayBtn');
  const prevBtn = document.getElementById('hfCollPrevStepBtn');
  const nextBtn = document.getElementById('hfCollNextStepBtn');
  playBtn.textContent = hfCollPlaying ? '⏹' : '▶';
  prevBtn.disabled = !hfCollPlaying;
  nextBtn.disabled = !hfCollPlaying;
  prevBtn.style.opacity = hfCollPlaying ? '1' : '0.35';
  nextBtn.style.opacity = hfCollPlaying ? '1' : '0.35';
}

async function hfCollPlay() {
  if (hfCollPlaying) { hfCollStop(); return; }
  if (!collCollections.length) return;

  const unlock = new SpeechSynthesisUtterance(' ');
  unlock.volume = 0;
  speechSynthesis.speak(unlock);

  hfCollPlaying  = true;
  hfCollAbort    = false;
  hfCollSkipStep = false;
  hfCollUpdateButtons();

  const cfg    = hfCollSettings();
  const maxInp = cfg.maxInputs === 'all' ? Infinity : parseInt(cfg.maxInputs);

  const startSi       = collIdx;
  const startInputIdx = collInputIdx;
  const skipIntro      = startInputIdx > 0;

  outer:
  for (let si = startSi; si < collCollections.length; si++) {
    if (hfCollAbort) break;
    collIdx = si;
    const col = collCollections[si];

    if (!skipIntro || si > startSi) {
      hfCollShowCard(col.name, '', false);
      document.getElementById('hfCollFrontText').textContent = col.name;
      await hfCollSpeak(col.name, cfg);
      if (hfCollAbort) break;
      if (!hfCollSkipStep) await hfCollDelay(cfg.genPause * 1000);
      hfCollSkipStep = false;

      if (cfg.explanation && col.description) {
        document.getElementById('hfCollCardInfoText').textContent = col.description;
        document.getElementById('hfCollCardInfo').classList.add('visible');
        await hfCollSpeak(col.description, cfg);
        document.getElementById('hfCollCardInfo').classList.remove('visible');
        document.getElementById('hfCollCardInfo').scrollTop = 0;
        if (hfCollAbort) break;
        if (!hfCollSkipStep) await hfCollDelay(cfg.genPause * 1000);
        hfCollSkipStep = false;
      }
    }

    const limit   = Math.min(col.inputs.length, maxInp);
    const startIi = (si === startSi) ? startInputIdx : 0;

    for (let ii = startIi; ii < limit; ii++) {
      if (hfCollAbort) break outer;
      collInputIdx = ii;
      const inp = col.inputs[ii];

      hfCollShowCard(inp.q, inp.a, false);
      await hfCollSpeak(inp.q, cfg);
      if (hfCollAbort) break outer;
      if (!hfCollSkipStep) await hfCollDelay(cfg.thinkPause * 1000);
      hfCollSkipStep = false;

      if (cfg.cardBack) {
        hfCollShowCard(inp.q, inp.a, true);
        await hfCollSpeak(inp.a, cfg);
        if (hfCollAbort) break outer;
        if (!hfCollSkipStep) await hfCollDelay(cfg.genPause * 1000);
        hfCollSkipStep = false;
      }

      if (cfg.loopStrategy && ii === limit - 1) ii = -1;
    }

    if (cfg.loopStrategy) si--;
  }

  hfCollPlaying  = false;
  hfCollAbort    = false;
  hfCollSkipStep = false;
  speechSynthesis.cancel();
  hfCollClearTimeouts();
  hfCollUpdateButtons();
}

function hfCollStop() {
  hfCollAbort    = true;
  hfCollPlaying  = false;
  hfCollSkipStep = false;
  speechSynthesis.cancel();
  hfCollClearTimeouts();
  hfCollUpdateButtons();
}

function hfCollSkipForward() {
  if (!hfCollPlaying) return;
  hfCollSkipStep = true;
  speechSynthesis.cancel();
  hfCollClearTimeouts();
  if (hfCollDelayResolve) { hfCollDelayResolve(); hfCollDelayResolve = null; }
}

function hfCollSkipBack() {
  if (!hfCollPlaying) return;
  if (collInputIdx === 0 && collIdx > 0) collIdx--;
  collInputIdx = 0;
  hfCollAbort = true;
  speechSynthesis.cancel();
  hfCollClearTimeouts();
  if (hfCollDelayResolve) { hfCollDelayResolve(); hfCollDelayResolve = null; }
  setTimeout(() => {
    hfCollAbort   = false;
    hfCollPlaying = false;
    hfCollPlay();
  }, 50);
}

document.getElementById('hfCollPlayBtn').addEventListener('click', hfCollPlay);
document.getElementById('hfCollPlayBtn').addEventListener('touchend', e => { e.stopPropagation(); e.preventDefault(); hfCollPlay(); }, { passive: false });
document.getElementById('hfCollNextStepBtn').addEventListener('click', hfCollSkipForward);
document.getElementById('hfCollNextStepBtn').addEventListener('touchend', e => { e.stopPropagation(); e.preventDefault(); hfCollSkipForward(); }, { passive: false });
document.getElementById('hfCollPrevStepBtn').addEventListener('click', hfCollSkipBack);
document.getElementById('hfCollPrevStepBtn').addEventListener('touchend', e => { e.stopPropagation(); e.preventDefault(); hfCollSkipBack(); }, { passive: false });
document.getElementById('hfCollCloseBtn').addEventListener('click', () => {
  hfCollStop();
  closeTraining('hfCollScreen');
});
document.getElementById('hfCollSettingsBtn').addEventListener('click', () =>
  document.getElementById('hfCollSettingsOverlay').classList.add('open'));
document.getElementById('hfCollSettingsClose').addEventListener('click', () =>
  document.getElementById('hfCollSettingsOverlay').classList.remove('open'));

const hfCollCardInfoEl = document.getElementById('hfCollCardInfo');
hfCollCardInfoEl.addEventListener('touchstart', e => e.stopPropagation(), { passive: true });
hfCollCardInfoEl.addEventListener('touchmove',  e => e.stopPropagation(), { passive: true });
hfCollCardInfoEl.addEventListener('touchend',   e => e.stopPropagation(), { passive: true });

// Manual navigation
const hfCollCard = document.getElementById('hfCollCard');
function hfCollRenderManual() {
  if (!collCollections.length) return;
  hfCollShowCard(collCollections[collIdx].inputs[collInputIdx].q, collCollections[collIdx].inputs[collInputIdx].a, false);
}
let hclTx=0,hclTy=0,hclTt=0,hclMov=false;
hfCollCard.addEventListener('touchstart', e => { if (hfCollPlaying) return; hclTx=e.touches[0].clientX; hclTy=e.touches[0].clientY; hclTt=Date.now(); hclMov=false; }, { passive: true });
hfCollCard.addEventListener('touchmove',  e => { if (hfCollPlaying) return; if (Math.abs(e.touches[0].clientX-hclTx)>10||Math.abs(e.touches[0].clientY-hclTy)>10) hclMov=true; }, { passive: true });
hfCollCard.addEventListener('touchend',   e => {
  if (hfCollPlaying) return;
  const dx=e.changedTouches[0].clientX-hclTx, dy=e.changedTouches[0].clientY-hclTy, adx=Math.abs(dx), ady=Math.abs(dy);
  if (!hclMov && Date.now()-hclTt<500) { hfCollCardInnerEl.classList.toggle('flipped'); return; }
  if (hclMov && adx>40 && adx>ady) { collIdx = dx>0 ? (collIdx-1+collCollections.length)%collCollections.length : (collIdx+1)%collCollections.length; collInputIdx=0; hfCollRenderManual(); return; }
  if (hclMov && ady>40 && ady>adx) { collInputIdx = dy>0 ? (collInputIdx-1+collCollections[collIdx].inputs.length)%collCollections[collIdx].inputs.length : (collInputIdx+1)%collCollections[collIdx].inputs.length; hfCollRenderManual(); return; }
});

document.getElementById('hfCollPrevBtn').addEventListener('click', () => { if (hfCollPlaying) return; collIdx=(collIdx-1+collCollections.length)%collCollections.length; collInputIdx=0; hfCollRenderManual(); });
document.getElementById('hfCollNextBtn').addEventListener('click', () => { if (hfCollPlaying) return; collIdx=(collIdx+1)%collCollections.length; collInputIdx=0; hfCollRenderManual(); });
document.getElementById('hfCollPrevInputBtn').addEventListener('click', () => { if (hfCollPlaying) return; collInputIdx=(collInputIdx-1+collCollections[collIdx].inputs.length)%collCollections[collIdx].inputs.length; hfCollRenderManual(); });
document.getElementById('hfCollNextInputBtn').addEventListener('click', () => { if (hfCollPlaying) return; collInputIdx=(collInputIdx+1)%collCollections[collIdx].inputs.length; hfCollRenderManual(); });

function showHandsfreeCollections() {
  const key = activeCollectionKey;
  if (!conversationalCollections[key] || !conversationalCollections[key].length) return;
  collCollections = conversationalCollections[key];
  collIdx = 0; collInputIdx = 0;
  navToTraining('hfCollScreen');
  hfCollRenderManual();
  document.getElementById('hfCollName').textContent = collCollections[0].name;
  document.getElementById('hfCollCounter').textContent = `1 / ${collCollections.length}`;
  hfCollUpdateButtons();
}

addModeListener('modeHandsfreeCollections', showHandsfreeCollections);
TRAINING_SCREENS.push('hfCollScreen');


// ─── LIBRARY SUB-NAV ────────────────────────────────────────────────────────

const LIB_TABS = {
  packs:    'libTabPacks',
  topics:   'libTabTopics',
  programs: 'libTabPrograms',
  folders:  'libTabFolders'
};

let activeLibraryTab = 'packs'; // session default; resets on reload

function showLibraryTab(tab) {
  if (!LIB_TABS[tab]) return;
  activeLibraryTab = tab;
  sessionStorage.setItem('libraryTab', tab);
  Object.keys(LIB_TABS).forEach(key => {
    const content = document.getElementById(LIB_TABS[key]);
    if (content) content.style.display = key === tab ? '' : 'none';
  });
  document.querySelectorAll('.library-subnav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.libTab === tab);
  });
}

document.querySelectorAll('.library-subnav-btn').forEach(btn => {
  if (btn) btn.addEventListener('click', () => showLibraryTab(btn.dataset.libTab));
});

// Restore last tab within this session (resets to 'packs' on page reload)
const _savedLibTab = sessionStorage.getItem('libraryTab');
if (_savedLibTab && LIB_TABS[_savedLibTab]) {
  showLibraryTab(_savedLibTab);
} else {
  showLibraryTab('packs');
}

// ─── BOTTOM NAVIGATION ────────────────────────────────────────────────────

const TAB_SCREENS = {
  dashboard: 'dashboardScreen',
  library:   'homeScreen',
  progress:  'progressScreen',
  upgrade:   'upgradeScreen'
};

const bottomNav = document.getElementById('bottomNav');

function showBottomNav() { if (bottomNav) bottomNav.style.display = 'flex'; }
function hideBottomNav() { if (bottomNav) bottomNav.style.display = 'none'; }

function showTab(tab) {
  Object.values(TAB_SCREENS).forEach(id => { const el = document.getElementById(id); if (el) el.style.display = 'none'; });
  const target = document.getElementById(TAB_SCREENS[tab]);
  if (target) target.style.display = 'flex';
  document.querySelectorAll('.nav-tab').forEach(btn => btn.classList.toggle('active', btn.dataset.tab === tab));
  showBottomNav();
  closeInfo();
}

document.querySelectorAll('.nav-tab').forEach(btn => {
  btn.addEventListener('click', () => showTab(btn.dataset.tab));
});

// ─── DASHBOARD: SEARCH + WELCOME + LAST PACK ───────────────────────────────

(function initDashboard() {
  // ── All packs available for search ──────────────────────────────────────
  const ALL_PACKS = [
    { key: 'assertive',      label: 'Assertive Communication' },
    { key: 'humour',         label: 'Humour Practise' },
    { key: 'teasing',        label: 'Teasing & Playfulness' },
    { key: 'criticism',      label: 'Criticism & Correction' },
    { key: 'conversational', label: 'Conversational Skills' }
  ];

  const RECENT_KEY  = 'dash_recent_searches';
  const LASTPACK_KEY = 'dash_last_pack';
  const MAX_RECENT  = 5;

  // ── DOM refs ─────────────────────────────────────────────────────────────
  const searchInput    = document.getElementById('dashSearchInput');
  const searchClear    = document.getElementById('dashSearchClear');
  const cancelBtn      = document.getElementById('dashboardSettingsBtn');
  const defaultView    = document.getElementById('dashDefaultView');
  const searchView     = document.getElementById('dashSearchView');
  const recentSection  = document.getElementById('dashRecentSection');
  const recentList     = document.getElementById('dashRecentList');
  const searchResults  = document.getElementById('dashSearchResults');
  const noResults      = document.getElementById('dashNoResults');
  const lastPackSec    = document.getElementById('dashLastPackSection');
  const lastPackCard   = document.getElementById('dashLastPackCard');
  const lastPackName   = document.getElementById('dashLastPackName');
  const welcomeTitle   = document.getElementById('dashWelcomeTitle');
  const welcomeSub     = document.getElementById('dashWelcomeSubtitle');

  // ── State ─────────────────────────────────────────────────────────────────
  let searching = false;

  // ── localStorage helpers ─────────────────────────────────────────────────
  function getRecent() {
    try { return JSON.parse(localStorage.getItem(RECENT_KEY)) || []; } catch { return []; }
  }
  function saveRecent(arr) {
    localStorage.setItem(RECENT_KEY, JSON.stringify(arr));
  }
  function addRecent(term) {
    if (!term.trim()) return;
    let arr = getRecent().filter(t => t.toLowerCase() !== term.toLowerCase());
    arr.unshift(term.trim());
    arr = arr.slice(0, MAX_RECENT);
    saveRecent(arr);
  }
  function getLastPack() {
    try { return JSON.parse(localStorage.getItem(LASTPACK_KEY)); } catch { return null; }
  }
  function saveLastPack(key, label) {
    localStorage.setItem(LASTPACK_KEY, JSON.stringify({ key, label }));
  }

  // ── Welcome text ─────────────────────────────────────────────────────────
  function updateWelcome() {
    const last = getLastPack();
    if (last) {
      if (welcomeTitle)  welcomeTitle.textContent  = 'Welcome back';
      if (welcomeSub)    welcomeSub.textContent    = 'Continue where you left off';
    }
  }

  // ── Recent searches render ────────────────────────────────────────────────
  function renderRecent() {
    const arr = getRecent();
    if (!recentSection || !recentList) return;
    if (!arr.length) { recentSection.style.display = 'none'; return; }
    recentSection.style.display = '';
    recentList.innerHTML = arr.map(t =>
      `<div class="dash-recent-item" data-term="${t.replace(/"/g,'&quot;')}">
        <span class="dash-recent-icon">🔍</span>${t}
       </div>`
    ).join('');
    recentList.querySelectorAll('.dash-recent-item').forEach(el => {
      el.addEventListener('click', () => {
        searchInput.value = el.dataset.term;
        enterSearch();
        runSearch(el.dataset.term);
      });
    });
  }

  // ── Last pack render ──────────────────────────────────────────────────────
  function renderLastPack() {
    const last = getLastPack();
    if (!lastPackSec || !last) { if (lastPackSec) lastPackSec.style.display = 'none'; return; }
    lastPackSec.style.display = '';
    lastPackName.textContent = last.label;
    lastPackCard.onclick = () => {
      saveLastPack(last.key, last.label);
      showModeScreen(last.key, last.label);
    };
  }

  // ── Search results render ─────────────────────────────────────────────────
  function runSearch(query) {
    const q = query.trim().toLowerCase();
    const hits = q ? ALL_PACKS.filter(p => p.label.toLowerCase().includes(q)) : [];
    searchResults.innerHTML = hits.map(p =>
      `<div class="collection-card dash-result-card" data-key="${p.key}" data-label="${p.label.replace(/"/g,'&quot;')}">
        <div><div class="collection-name">${p.label}</div></div>
        <div class="collection-arrow">›</div>
       </div>`
    ).join('');
    noResults.style.display = (!q || hits.length) ? 'none' : '';
    searchResults.querySelectorAll('.dash-result-card').forEach(el => {
      el.addEventListener('click', () => {
        const key   = el.dataset.key;
        const label = el.dataset.label;
        addRecent(query.trim());
        saveLastPack(key, label);
        exitSearch(false);
        showModeScreen(key, label);
      });
    });
  }

  // ── Enter / exit search mode ──────────────────────────────────────────────
  function enterSearch() {
    if (searching) return;
    searching = true;
    cancelBtn.textContent = 'Cancel';
    cancelBtn.style.fontSize = '15px';
    defaultView.style.display = 'none';
    searchView.style.display  = '';
    searchClear.style.display = searchInput.value ? '' : 'none';
  }

  function exitSearch(clearInput = true) {
    searching = false;
    cancelBtn.textContent = '⚙️';
    cancelBtn.style.fontSize = '';
    if (clearInput) searchInput.value = '';
    searchClear.style.display = 'none';
    defaultView.style.display = '';
    searchView.style.display  = 'none';
    searchInput.blur();
    updateWelcome();
    renderRecent();
    renderLastPack();
  }

  // ── Event listeners ───────────────────────────────────────────────────────
  if (searchInput) {
    searchInput.addEventListener('focus', enterSearch);
    searchInput.addEventListener('input', () => {
      const val = searchInput.value;
      searchClear.style.display = val ? '' : 'none';
      runSearch(val);
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      searchClear.style.display = 'none';
      runSearch('');
      searchInput.focus();
    });
  }

  if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
      if (searching) {
        exitSearch();
      } else {
        // Original gear behaviour — open developer settings
        feedbackModeToggle.checked = feedbackMode;
        navToSettings();
      }
    });
    cancelBtn.addEventListener('touchend', e => { e.preventDefault(); cancelBtn.click(); }, { passive: false });
  }

  // ── Init ─────────────────────────────────────────────────────────────────
  updateWelcome();
  renderRecent();
  renderLastPack();

})();

// Land on the Home tab by default
if (document.getElementById('dashboardScreen')) showTab('dashboard');

// ─── SPLASH SCREEN ────────────────────────────────────────────────────
(function initSplash() {
  const splash = document.getElementById('splashScreen');
  if (!splash) return;
  setTimeout(() => {
    splash.classList.add('hidden');
    setTimeout(() => { splash.style.display = 'none'; }, 500);
  }, 1500);
})();
