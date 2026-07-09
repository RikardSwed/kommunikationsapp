// app-core.js — globals, DOM refs, shared state, navigation, mode registry, feedback bar helpers
// Part of Deckstack v1.19.4 — split from app.js

// app.js — All application logic for Communication Trainer
// Depends on: data.js and multiStepData.js (must be loaded first)

const VERSION = 'v1.21.6';

// Pack icon map — global so both dashboard and favorites can use it
const PACK_ICONS = {
  assertive:          'ti-messages',
  conversational:     'ti-mood-happy',
  humour:             'ti-mood-smile',
  teasing:            'ti-mood-wink',
  criticism:          'ti-message-2',
  conversationaldepth:'ti-book',
  compliments:        'ti-heart',
  selfhumour:         'ti-mood-laugh',
  startingconnecting: 'ti-users',
  listeningresponding:'ti-ear',
  influenceframing:   'ti-bulb',
  storytelling:       'ti-book',
};
function packIcon(key) {
  const name = PACK_ICONS[key] || 'ti-cards';
  return `<i class="ti ${name}" aria-hidden="true"></i>`;
}

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

// Track whether mode screen was opened from dashboard or library
let _modeOrigin = 'library';

// Pack navigation context
let _packContext = null; // { packs: [{key,label}], index: N } | null

function navToHome() {
  homeScreen.style.display = 'none';
  modeScreen.classList.remove('slide-in-right', 'slide-out-right');
  void modeScreen.offsetWidth;
  modeScreen.classList.add('slide-out-right');
  setTimeout(() => {
    modeScreen.style.display = 'none';
    modeScreen.classList.remove('slide-out-right');
    if (_modeOrigin === 'dashboard') {
      showTab('dashboard');
    } else {
      showTab('library');
    }
  }, 300);
  showBottomNav();
}

function navToMode() {
  const activeTab = document.querySelector('.nav-tab.active');
  const activeTabName = activeTab ? activeTab.dataset.tab : 'library';
  _modeOrigin = (activeTabName === 'dashboard') ? 'dashboard' : 'library';
  ['dashboardScreen','homeScreen','progressScreen','upgradeScreen'].forEach(id => {
    const el = document.getElementById(id); if (el) el.style.display = 'none';
  });
  if (_modeOrigin === 'library') homeScreen.style.display = 'flex';
  modeScreen.style.display = 'flex';
  modeScreen.classList.remove('slide-in-right', 'slide-out-right');
  void modeScreen.offsetWidth;
  modeScreen.classList.add('slide-in-right');
  hideBottomNav();
}

function navToTraining(id) {
  modeScreen.style.display = 'flex';
  const el = document.getElementById(id);
  el.style.display = 'flex';
  if (window._noTrainingAnim) {
    window._noTrainingAnim = false;
    el.classList.remove('slide-in-bottom', 'slide-out-bottom');
    modeScreen.style.display = 'none';
    return;
  }
  el.classList.remove('slide-in-bottom', 'slide-out-bottom');
  void el.offsetWidth;
  el.classList.add('slide-in-bottom');
  setTimeout(() => { modeScreen.style.display = 'none'; }, 320);
}

function navFromTraining(id) {
  window._returningFromTraining = true;
  if (window.progEndSession) progEndSession();
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
  // Save last pack and record training time for favorites sorting
  try {
    localStorage.setItem('dash_last_pack', JSON.stringify({ key, label }));
    if (window.recordPackTrained) recordPackTrained(key);
    if (window._favRenderDash) _favRenderDash();
  } catch {}
  // Progress: end previous session, start new one
  if (window.progEndSession) progEndSession();
  navToMode();
  if (window.progStartSession) progStartSession(key, label);
}

// Set the navigation context (called by Library, Folders, Programs)
function setPackContext(packs, currentKey) {
  const index = packs.findIndex(p => p.key === currentKey);
  _packContext = (index >= 0 && packs.length > 1) ? { packs, index } : null;
  updateNextBtn();
}

// Show/hide the next-pack arrow based on context
function updateNextBtn() {
  const btn = document.getElementById('modeNextBtn');
  if (!btn) return;
  const hasNext = _packContext && _packContext.index < _packContext.packs.length - 1;
  btn.style.visibility = hasNext ? 'visible' : 'hidden';
}

// Navigate to next pack in context
function goNextPack() {
  if (!_packContext) return;
  const next = _packContext.packs[_packContext.index + 1];
  if (!next) return;
  _packContext.index++;
  showModeScreen(next.key, next.label);
  updateNextBtn();
}

// Save which training mode was last used for a pack
function saveLastMode(packKey, modeName) {
  try {
    const modes = JSON.parse(localStorage.getItem('ds_last_modes') || '{}');
    modes[packKey] = modeName;
    localStorage.setItem('ds_last_modes', JSON.stringify(modes));
  } catch {}
}
function getLastMode(packKey) {
  try {
    const modes = JSON.parse(localStorage.getItem('ds_last_modes') || '{}');
    return modes[packKey] || null;
  } catch { return null; }
}

function showTraining() {
  strategies  = (collections[activeCollectionKey] || []).map(strat => {
    if (!window.filterInputsByBundle) return strat;
    const filtered = window.filterInputsByBundle(strat.inputs, activeCollectionKey);
    return Object.assign({}, strat, { inputs: filtered.length ? filtered : strat.inputs });
  });
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
  if (!el) return;
  let mStartY = 0, mMoved = false, didTouch = false;
  const launch = () => { saveLastMode(activeCollectionKey, id); fn(); };
  el.addEventListener('touchstart', e => { mStartY = e.touches[0].clientY; mMoved = false; didTouch = true; }, { passive: true });
  el.addEventListener('touchmove',  e => { if (Math.abs(e.touches[0].clientY - mStartY) > 8) mMoved = true; }, { passive: true });
  el.addEventListener('touchend',   e => { if (!mMoved) { launch(); } });
  el.addEventListener('click',      e => { if (didTouch) { didTouch = false; return; } launch(); });
}

// Map mode id to launch function — used by Continue card to jump straight in
const MODE_LAUNCHERS = {};
function registerMode(id, fn) {
  MODE_LAUNCHERS[id] = fn;
  addModeListener(id, fn);
}

function launchLastMode(packKey, packLabel) {
  const lastMode = getLastMode(packKey);
  if (lastMode && MODE_LAUNCHERS[lastMode]) {
    // Set up state without showing Library (homeScreen) at all
    activeCollectionKey   = packKey;
    activeCollectionLabel = packLabel;
    document.getElementById('modeCollectionName').textContent = packLabel;
    try {
      const existing = JSON.parse(localStorage.getItem('dash_last_pack') || 'null');
      const progressPct = (existing && existing.key === packKey) ? (existing.progressPct || 0) : 0;
      localStorage.setItem('dash_last_pack', JSON.stringify({ key: packKey, label: packLabel, progressPct }));
      if (window.recordPackTrained) recordPackTrained(packKey);
      if (window._favRenderDash) _favRenderDash();
    } catch {}
    if (window.progEndSession) progEndSession();
    if (window.progStartSession) progStartSession(packKey, packLabel);
    // Mark origin as dashboard so closing modeScreen returns there
    _modeOrigin = 'dashboard';
    // Hide all tab screens, do NOT show Library behind
    ['dashboardScreen','homeScreen','progressScreen','upgradeScreen'].forEach(id => {
      const el = document.getElementById(id); if (el) el.style.display = 'none';
    });
    const modeEl = document.getElementById('modeScreen');
    if (modeEl) modeEl.style.display = 'none';
    hideBottomNav();
    // Launch with normal slide-up animation; reveal modeScreen underneath once training has landed
    saveLastMode(packKey, lastMode);
    MODE_LAUNCHERS[lastMode]();
    setTimeout(() => { if (modeEl) modeEl.style.display = 'flex'; }, 350);
  } else {
    showModeScreen(packKey, packLabel);
  }
}

// Build ordered pack list from #libTabPacks for next/prev navigation
function _buildLibPackList() {
  return Array.from(document.querySelectorAll('#libTabPacks .collection-card'))
    .map(c => ({ key: c.dataset.key, label: c.dataset.label }))
    .filter(p => p.key && p.label);
}

document.querySelectorAll('.collection-card').forEach(el => {
  const key   = el.dataset.key;
  const label = el.dataset.label;
  let cStartY = 0, cMoved = false, cDidTouch = false;
  el.addEventListener('touchstart', e => { cStartY = e.touches[0].clientY; cMoved = false; cDidTouch = true; }, { passive: true });
  el.addEventListener('touchmove',  e => { if (Math.abs(e.touches[0].clientY - cStartY) > 8) cMoved = true; }, { passive: true });
  el.addEventListener('touchend',   e => {
    if (!cMoved) {
      // Set context only if clicked from Packs tab (not folders/programs which set their own)
      if (el.closest('#libTabPacks') || el.closest('#libTabTopics')) {
        setPackContext(_buildLibPackList(), key);
      }
      showModeScreen(key, label);
    }
  });
  el.addEventListener('click', () => {
    if (cDidTouch) { cDidTouch = false; return; }
    if (el.closest('#libTabPacks') || el.closest('#libTabTopics')) {
      setPackContext(_buildLibPackList(), key);
    }
    showModeScreen(key, label);
  });
});

document.getElementById('modeBackBtn').addEventListener('click', showHome);
document.getElementById('modeNextBtn') && document.getElementById('modeNextBtn').addEventListener('click', goNextPack);

// Pack settings button
(function() {
  const btn     = document.getElementById('modePackSettingsBtn');
  const overlay = document.getElementById('packSettingsOverlay');
  const close   = document.getElementById('packSettingsClose');
  if (btn && overlay) {
    btn.addEventListener('click', () => overlay.classList.add('open'));
    if (close) close.addEventListener('click', () => overlay.classList.remove('open'));
  }
})();

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

  function resetInstant() {
    if (!hfActive) return;
    // Disable transition, reset, re-enable — all while screen is hidden
    inners.forEach(el => el.classList.add('no-transition'));
    hfActive = false;
    inners.forEach(el => el.classList.remove('flipped'));
    toggle.classList.remove('active');
    label.textContent = 'Switch to Handsfree';
    // Re-enable transition after a frame
    requestAnimationFrame(() => {
      inners.forEach(el => el.classList.remove('no-transition'));
    });
  }

  toggle.addEventListener('click', flip);
  toggle.addEventListener('touchend', e => { e.preventDefault(); flip(); }, { passive: false });

  // Reset instantly when mode-screen opens fresh (not when returning from training)
  const modeScreenEl = document.getElementById('modeScreen');
  if (modeScreenEl) {
    let _prevDisplay = 'none';
    new MutationObserver(() => {
      const cur = modeScreenEl.style.display;
      if (cur === 'flex' && _prevDisplay !== 'flex') {
        // Only reset if NOT returning from a training screen
        if (!window._returningFromTraining) resetInstant();
        window._returningFromTraining = false;
      }
      _prevDisplay = cur;
    }).observe(modeScreenEl, { attributes: true, attributeFilter: ['style'] });
  }
})();

registerMode('modeFlashcard', showTraining);

registerMode('modeMultiStep', showMultiStep);

registerMode('modeMemorize', showMemorize);

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
