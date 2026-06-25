// app.js — All application logic for Communication Trainer
// Depends on: data.js (must be loaded first)

const VERSION = 'v1.1';

// ─── SCREENS ─────────────────────────────────────────────────────────────────
const homeScreen     = document.getElementById('homeScreen');
const modeScreen     = document.getElementById('modeScreen');
const trainingScreen = document.getElementById('trainingScreen');

// ─── DOM ─────────────────────────────────────────────────────────────────────
const card           = document.getElementById('card');
const cardInner      = document.getElementById('cardInner');
const cardInfo       = document.getElementById('cardInfo');
const cardInfoText   = document.getElementById('cardInfoText');
const strategyName   = document.getElementById('strategyName');
const inputText      = document.getElementById('inputText');
const answerText     = document.getElementById('answerText');
const counter        = document.getElementById('counter');
const hint           = document.getElementById('hint');

// ─── STATE ───────────────────────────────────────────────────────────────────
let strategies    = [];
let stratOrder    = [];
let inputOrders   = [];
let stratIdx = 0, inputIdx = 0;
let flipped = false, animating = false;
let activeCollectionKey   = null;
let activeCollectionLabel = null;

// ─── NAVIGATION ──────────────────────────────────────────────────────────────
function showHome() {
  homeScreen.style.display     = 'flex';
  modeScreen.style.display     = 'none';
  trainingScreen.style.display = 'none';
  closeInfo();
}

function showModeScreen(key, label) {
  activeCollectionKey   = key;
  activeCollectionLabel = label;
  document.getElementById('modeCollectionName').textContent = label;
  homeScreen.style.display     = 'none';
  modeScreen.style.display     = 'flex';
  trainingScreen.style.display = 'none';
}

function showTraining() {
  strategies = collections[activeCollectionKey];
  modeScreen.style.display     = 'none';
  trainingScreen.style.display = 'flex';
  stratIdx = 0;
  inputIdx = 0;
  applySettings();
}

// Collection cards → mode screen
document.querySelectorAll('.collection-card').forEach(el => {
  const key   = el.dataset.key;
  const label = el.dataset.label;
  el.addEventListener('click', () => showModeScreen(key, label));
  el.addEventListener('touchend', e => { e.preventDefault(); showModeScreen(key, label); }, { passive: false });
});

// Mode screen back button
document.getElementById('modeBackBtn').addEventListener('click', showHome);

// Mode cards
document.getElementById('modeFlashcard').addEventListener('click', showTraining);
document.getElementById('modeFlashcard').addEventListener('touchend', e => { e.preventDefault(); showTraining(); }, { passive: false });

// Coming soon modes — no action
document.getElementById('modeMemorize').addEventListener('click',   () => {});
document.getElementById('modeMultiStep').addEventListener('click',  () => {});

// Training back button → mode screen
document.getElementById('closeBtn').addEventListener('click', () => showModeScreen(activeCollectionKey, activeCollectionLabel));

// ─── INFO OVERLAY ────────────────────────────────────────────────────────────
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

// ─── RENDER ──────────────────────────────────────────────────────────────────
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

// ─── TOUCH ───────────────────────────────────────────────────────────────────
let tx = 0, ty = 0, tt = 0, moved = false;

card.addEventListener('touchstart', e => {
  tx = e.touches[0].clientX; ty = e.touches[0].clientY;
  tt = Date.now(); moved = false;
  e.preventDefault();
}, { passive: false });

card.addEventListener('touchmove', e => {
  if (Math.abs(e.touches[0].clientX - tx) > 10 || Math.abs(e.touches[0].clientY - ty) > 10) moved = true;
  e.preventDefault();
}, { passive: false });

card.addEventListener('touchend', e => {
  e.preventDefault();
  const dx = e.changedTouches[0].clientX - tx;
  const dy = e.changedTouches[0].clientY - ty;
  const adx = Math.abs(dx), ady = Math.abs(dy);
  if (!moved && Date.now() - tt < 500)        { flip(!flipped); return; }
  if (moved && adx > 40 && adx > ady) { dx > 0 ? prevStrategy() : nextStrategy(); return; }
  if (moved && ady > 40 && ady > adx) { dy > 0 ? prevInput()    : nextInput();    return; }
}, { passive: false });

// ─── BUTTONS & KEYBOARD ──────────────────────────────────────────────────────
document.getElementById('nextInputBtn').addEventListener('click',  nextInput);
document.getElementById('prevInputBtn').addEventListener('click',  prevInput);
document.getElementById('nextStratBtn').addEventListener('click',  nextStrategy);
document.getElementById('prevStratBtn').addEventListener('click',  prevStrategy);

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

document.addEventListener('keydown', e => {
  if (document.getElementById('settingsOverlay').classList.contains('open')) return;
  if (e.key === 'Escape')     {
    if (trainingScreen.style.display !== 'none') showModeScreen(activeCollectionKey, activeCollectionLabel);
    else if (modeScreen.style.display !== 'none') showHome();
    return;
  }
  if (trainingScreen.style.display === 'none') return;
  if (e.key === 'ArrowRight') nextStrategy();
  if (e.key === 'ArrowLeft')  prevStrategy();
  if (e.key === 'ArrowDown')  nextInput();
  if (e.key === 'ArrowUp')    prevInput();
  if (e.key === ' ')          { e.preventDefault(); flip(!flipped); }
});

// ─── SETTINGS ────────────────────────────────────────────────────────────────
function applySettings() {
  const shS   = document.getElementById('shuffleStrategies').checked;
  const shI   = document.getElementById('shuffleInputs').checked;
  const showH = document.getElementById('showHints').checked;
  stratOrder  = shS ? shuffle(strategies.map((_, i) => i)) : strategies.map((_, i) => i);
  inputOrders = strategies.map(s => shI ? shuffle(s.inputs.map((_, i) => i)) : s.inputs.map((_, i) => i));
  hint.style.visibility = showH ? 'visible' : 'hidden';
  stratIdx = 0; inputIdx = 0;
  render();
}
