// app-handsfree.js — handsfree training mode variants
// Part of Deckstack v1.19.4 — split from app.js

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
  const _hfStrat = strategies[stratOrder[stratIdx]];
  if (_hfStrat) document.getElementById('hfSubCounter').textContent = `${inputIdx + 1} / ${_hfStrat.inputs.length}`;
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
  const prefixes = ['hf','hfMem','hfChall','hfFlow','hfMind','hfColl'];
  prefixes.forEach(prefix => {
    const cb = document.getElementById(prefix + 'ShowInputCounter');
    if (!cb) return;
    const show = cb.checked;
    // Each HF screen has sub-counter and counter-sep elements
    const screen = document.getElementById(
      prefix === 'hf' ? 'hfScreen' :
      prefix === 'hfMem' ? 'hfMemScreen' :
      prefix === 'hfChall' ? 'hfChallScreen' :
      prefix === 'hfFlow' ? 'hfFlowScreen' :
      prefix === 'hfMind' ? 'hfMindScreen' : 'hfCollScreen'
    );
    if (!screen) return;
    screen.querySelectorAll('.sub-counter, .counter-sep').forEach(el => {
      el.style.display = show ? 'inline' : 'none';
    });
  });
}
document.getElementById('hfSettingsBtn').addEventListener('click', () =>
  openHfSettings('hfSettingsOverlay', 'hfBundlePlaceholder', 'hfShowInputCounter'));
document.getElementById('hfShowInputCounter') && document.getElementById('hfShowInputCounter').addEventListener('change', applyHfInputCounterVisibility);
document.getElementById('hfSettingsClose').addEventListener('click', () =>
  document.getElementById('hfSettingsOverlay').classList.remove('open'));
document.getElementById('hfSettingsOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('hfSettingsOverlay'))
    document.getElementById('hfSettingsOverlay').classList.remove('open');
});

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
  const _hfSt2 = strategies[stratOrder ? stratOrder[stratIdx] : stratIdx];
  if (_hfSt2) document.getElementById('hfSubCounter').textContent = `${inputIdx + 1} / ${_hfSt2.inputs.length}`;
  hfCardInner.style.transition = 'none';
  hfCardInner.classList.remove('flipped');
}

let hfTx=0,hfTy=0,hfTt=0,hfMov=false;
hfCard.addEventListener('touchstart',e=>{hfTx=e.touches[0].clientX;hfTy=e.touches[0].clientY;hfTt=Date.now();hfMov=false;e.preventDefault();},{passive:false});
hfCard.addEventListener('touchmove', e=>{if(Math.abs(e.touches[0].clientX-hfTx)>10||Math.abs(e.touches[0].clientY-hfTy)>10)hfMov=true;e.preventDefault();},{passive:false});
hfCard.addEventListener('touchend',  e=>{
  e.preventDefault();
  const dx=e.changedTouches[0].clientX-hfTx,dy=e.changedTouches[0].clientY-hfTy,adx=Math.abs(dx),ady=Math.abs(dy);
  if(!hfMov&&Date.now()-hfTt<500){if(window.progCardFlipped&&!hfCardInner.classList.contains('flipped'))progCardFlipped();hfCardInner.classList.toggle('flipped');return;}
  if(hfMov&&adx>40&&adx>ady){stratIdx=dx>0?(stratIdx-1+strategies.length)%strategies.length:(stratIdx+1)%strategies.length;inputIdx=0;hfRender();return;}
  if(hfMov&&ady>40&&ady>adx){const o=inputOrders[stratOrder[stratIdx]];inputIdx=dy>0?(inputIdx-1+o.length)%o.length:(inputIdx+1)%o.length;hfRender();return;}
},{passive:false});

document.getElementById('hfPrevStratBtn').addEventListener('click',()=>{stratIdx=(stratIdx-1+strategies.length)%strategies.length;inputIdx=0;hfRender();});
document.getElementById('hfNextStratBtn').addEventListener('click',()=>{stratIdx=(stratIdx+1)%strategies.length;inputIdx=0;hfRender();});
document.getElementById('hfPrevInputBtn').addEventListener('click',()=>{const o=inputOrders[stratOrder[stratIdx]];inputIdx=(inputIdx-1+o.length)%o.length;hfRender();});
document.getElementById('hfNextInputBtn').addEventListener('click',()=>{const o=inputOrders[stratOrder[stratIdx]];inputIdx=(inputIdx+1)%o.length;hfRender();});

// ── showHandsfree ─────────────────────────────────────────────────────────────
function showHandsfree() {
  strategies  = (collections[activeCollectionKey] || []).map(strat => {
    if (!window.filterInputsByBundle) return strat;
    const filtered = window.filterInputsByBundle(strat.inputs, activeCollectionKey);
    return Object.assign({}, strat, { inputs: filtered.length ? filtered : strat.inputs });
  });
  if (!strategies.length) return;
  stratOrder  = strategies.map((_,i)=>i);
  inputOrders = strategies.map(s=>s.inputs.map((_,i)=>i));
  stratIdx = 0; inputIdx = 0;
  navToTraining('hfScreen');
  hfRender();
  hfUpdateButtons();
}

registerMode('modeHandsfree', showHandsfree);


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
  const _hfMemStrat = memStrategies[memStratIdx];
  if (_hfMemStrat) document.getElementById('hfMemSubCounter').textContent = `${memCardIdx + 1} / ${_hfMemStrat.cards.length}`;
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
  openHfSettings('hfMemSettingsOverlay', 'hfMemBundlePlaceholder', 'hfMemShowInputCounter'));
document.getElementById('hfMemShowInputCounter') && document.getElementById('hfMemShowInputCounter').addEventListener('change', applyHfInputCounterVisibility);

document.getElementById('hfMemSettingsClose').addEventListener('click', () =>
  document.getElementById('hfMemSettingsOverlay').classList.remove('open'));
document.getElementById('hfMemSettingsOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('hfMemSettingsOverlay'))
    document.getElementById('hfMemSettingsOverlay').classList.remove('open');
});

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
  const _hfMemSt2 = memStrategies[memStratIdx];
  if (_hfMemSt2) document.getElementById('hfMemSubCounter').textContent = `${memCardIdx + 1} / ${_hfMemSt2.cards.length}`;
  hfMemCardInner.style.transition = 'none';
  hfMemCardInner.classList.remove('flipped');
}

let hfMTx=0,hfMTy=0,hfMTt=0,hfMMov=false;
hfMemCard.addEventListener('touchstart',e=>{hfMTx=e.touches[0].clientX;hfMTy=e.touches[0].clientY;hfMTt=Date.now();hfMMov=false;e.preventDefault();},{passive:false});
hfMemCard.addEventListener('touchmove', e=>{if(Math.abs(e.touches[0].clientX-hfMTx)>10||Math.abs(e.touches[0].clientY-hfMTy)>10)hfMMov=true;e.preventDefault();},{passive:false});
hfMemCard.addEventListener('touchend',  e=>{
  e.preventDefault();
  const dx=e.changedTouches[0].clientX-hfMTx,dy=e.changedTouches[0].clientY-hfMTy,adx=Math.abs(dx),ady=Math.abs(dy);
  if(!hfMMov&&Date.now()-hfMTt<500){if(window.progCardFlipped&&!hfMemCardInner.classList.contains('flipped'))progCardFlipped();hfMemCardInner.classList.toggle('flipped');return;}
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

registerMode('modeHandsfreeMemorize', showHandsfreeMemorize);

// ── Voice debug helper ────────────────────────────────────────────────────────
document.getElementById('hfVoiceDebugBtn').addEventListener('click', () => {
  const voices = speechSynthesis.getVoices();
  const en = voices.filter(v => v.lang.startsWith('en')).map(v => v.name).join('\n');
  alert('Available English voices:\n\n' + (en || 'None loaded yet — try again in a moment'));
});


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
  const _hfCh = challChallenges[challIdx];
  if (_hfCh) document.getElementById('hfChallSubCounter').textContent = `${challInputIdx + 1} / ${_hfCh.inputs.length}`;
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
  openHfSettings('hfChallSettingsOverlay', 'hfChallBundlePlaceholder', 'hfChallShowInputCounter'));
document.getElementById('hfChallShowInputCounter') && document.getElementById('hfChallShowInputCounter').addEventListener('change', applyHfInputCounterVisibility);
document.getElementById('hfChallSettingsClose').addEventListener('click', () =>
  document.getElementById('hfChallSettingsOverlay').classList.remove('open'));
document.getElementById('hfChallSettingsOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('hfChallSettingsOverlay'))
    document.getElementById('hfChallSettingsOverlay').classList.remove('open');
});

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
  if (!hcMov && Date.now()-hcTt<500) { if(window.progCardFlipped&&!hfChallCardInnerEl.classList.contains('flipped'))progCardFlipped(); hfChallCardInnerEl.classList.toggle('flipped'); return; }
  if (hcMov && adx>40 && adx>ady) { challIdx = dx>0 ? (challIdx-1+challChallenges.length)%challChallenges.length : (challIdx+1)%challChallenges.length; challInputIdx=0; hfChallRenderManual(); return; }
  if (hcMov && ady>40 && ady>adx) { challInputIdx = dy>0 ? (challInputIdx-1+challChallenges[challIdx].inputs.length)%challChallenges[challIdx].inputs.length : (challInputIdx+1)%challChallenges[challIdx].inputs.length; hfChallRenderManual(); return; }
});

document.getElementById('hfChallPrevBtn').addEventListener('click', () => { if (hfChallPlaying) return; challIdx=(challIdx-1+challChallenges.length)%challChallenges.length; challInputIdx=0; hfChallRenderManual(); });
document.getElementById('hfChallNextBtn').addEventListener('click', () => { if (hfChallPlaying) return; challIdx=(challIdx+1)%challChallenges.length; challInputIdx=0; hfChallRenderManual(); });
document.getElementById('hfChallPrevInputBtn').addEventListener('click', () => { if (hfChallPlaying) return; challInputIdx=(challInputIdx-1+challChallenges[challIdx].inputs.length)%challChallenges[challIdx].inputs.length; hfChallRenderManual(); });
document.getElementById('hfChallNextInputBtn').addEventListener('click', () => { if (hfChallPlaying) return; challInputIdx=(challInputIdx+1)%challChallenges[challIdx].inputs.length; hfChallRenderManual(); });

function showHandsfreeChallenges() {
  const _rawChall = challengesCollections[activeCollectionKey] || [];
  challChallenges = _rawChall.map(cat => {
    if (!window.filterInputsByBundle) return cat;
    const filtered = window.filterInputsByBundle(cat.inputs, activeCollectionKey);
    return Object.assign({}, cat, { inputs: filtered.length ? filtered : cat.inputs });
  });
  if (!challChallenges.length) return;
  challIdx = 0; challInputIdx = 0;
  navToTraining('hfChallScreen');
  hfChallRenderManual();
  document.getElementById('hfChallName').textContent = challChallenges[0].name;
  document.getElementById('hfChallCounter').textContent = `1 / ${challChallenges.length}`;
  const _hfChI = challChallenges[0];
  if (_hfChI) document.getElementById('hfChallSubCounter').textContent = `1 / ${_hfChI.inputs.length}`;
  hfChallUpdateButtons();
}

registerMode('modeHandsfreeChallenges', showHandsfreeChallenges);
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
  document.getElementById('hfFlowSubCounter').textContent = `${flowCardIdx + 1} / ${flowSequence.length}`;
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
  openHfSettings('hfFlowSettingsOverlay', 'hfFlowBundlePlaceholder', 'hfFlowShowInputCounter'));
document.getElementById('hfFlowShowInputCounter') && document.getElementById('hfFlowShowInputCounter').addEventListener('change', applyHfInputCounterVisibility);
document.getElementById('hfFlowSettingsClose').addEventListener('click', () =>
  document.getElementById('hfFlowSettingsOverlay').classList.remove('open'));
document.getElementById('hfFlowSettingsOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('hfFlowSettingsOverlay'))
    document.getElementById('hfFlowSettingsOverlay').classList.remove('open');
});
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
  if (!hfMov2 && Date.now()-hfTt2<500) { if(window.progCardFlipped&&!hfFlowCardInnerEl.classList.contains('flipped'))progCardFlipped(); hfFlowCardInnerEl.classList.toggle('flipped'); return; }
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

registerMode('modeHandsfreeSequences', showHandsfreeSequences);
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
  const _hfMind = mindStrategies[mindIdx];
  if (_hfMind) document.getElementById('hfMindSubCounter').textContent = `${mindInputIdx + 1} / ${_hfMind.inputs.length}`;
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
  openHfSettings('hfMindSettingsOverlay', 'hfMindBundlePlaceholder', 'hfMindShowInputCounter'));
document.getElementById('hfMindShowInputCounter') && document.getElementById('hfMindShowInputCounter').addEventListener('change', applyHfInputCounterVisibility);
document.getElementById('hfMindSettingsClose').addEventListener('click', () =>
  document.getElementById('hfMindSettingsOverlay').classList.remove('open'));
document.getElementById('hfMindSettingsOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('hfMindSettingsOverlay'))
    document.getElementById('hfMindSettingsOverlay').classList.remove('open');
});

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
  if (!hmMov && Date.now()-hmTt<500) { if(window.progCardFlipped&&!hfMindCardInnerEl.classList.contains('flipped'))progCardFlipped(); hfMindCardInnerEl.classList.toggle('flipped'); return; }
  if (hmMov && adx>40 && adx>ady) { mindIdx = dx>0 ? (mindIdx-1+mindStrategies.length)%mindStrategies.length : (mindIdx+1)%mindStrategies.length; mindInputIdx=0; hfMindRenderManual(); return; }
  if (hmMov && ady>40 && ady>adx) { mindInputIdx = dy>0 ? (mindInputIdx-1+mindStrategies[mindIdx].inputs.length)%mindStrategies[mindIdx].inputs.length : (mindInputIdx+1)%mindStrategies[mindIdx].inputs.length; hfMindRenderManual(); return; }
});

document.getElementById('hfMindPrevBtn').addEventListener('click', () => { if (hfMindPlaying) return; mindIdx=(mindIdx-1+mindStrategies.length)%mindStrategies.length; mindInputIdx=0; hfMindRenderManual(); });
document.getElementById('hfMindNextBtn').addEventListener('click', () => { if (hfMindPlaying) return; mindIdx=(mindIdx+1)%mindStrategies.length; mindInputIdx=0; hfMindRenderManual(); });
document.getElementById('hfMindPrevInputBtn').addEventListener('click', () => { if (hfMindPlaying) return; mindInputIdx=(mindInputIdx-1+mindStrategies[mindIdx].inputs.length)%mindStrategies[mindIdx].inputs.length; hfMindRenderManual(); });
document.getElementById('hfMindNextInputBtn').addEventListener('click', () => { if (hfMindPlaying) return; mindInputIdx=(mindInputIdx+1)%mindStrategies[mindIdx].inputs.length; hfMindRenderManual(); });

function showHandsfreeMindset() {
  const _rawMind = mindsetCollections[activeCollectionKey] || [];
  mindStrategies = _rawMind.map(m => {
    if (!window.filterInputsByBundle) return m;
    const filtered = window.filterInputsByBundle(m.inputs, activeCollectionKey);
    return Object.assign({}, m, { inputs: filtered.length ? filtered : m.inputs });
  });
  if (!mindStrategies.length) return;
  mindIdx = 0; mindInputIdx = 0;
  navToTraining('hfMindScreen');
  hfMindRenderManual();
  document.getElementById('hfMindName').textContent = mindStrategies[0].name;
  document.getElementById('hfMindCounter').textContent = `1 / ${mindStrategies.length}`;
  const _hfMindI = mindStrategies[0];
  if (_hfMindI) document.getElementById('hfMindSubCounter').textContent = `1 / ${_hfMindI.inputs.length}`;
  hfMindUpdateButtons();
}

registerMode('modeHandsfreeMindset', showHandsfreeMindset);
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
  const _hfCol = collCollections[collIdx];
  if (_hfCol) document.getElementById('hfCollSubCounter').textContent = `${collInputIdx + 1} / ${_hfCol.inputs.length}`;
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
  openHfSettings('hfCollSettingsOverlay', 'hfCollBundlePlaceholder', 'hfCollShowInputCounter'));
document.getElementById('hfCollShowInputCounter') && document.getElementById('hfCollShowInputCounter').addEventListener('change', applyHfInputCounterVisibility);
document.getElementById('hfCollSettingsClose').addEventListener('click', () =>
  document.getElementById('hfCollSettingsOverlay').classList.remove('open'));
document.getElementById('hfCollSettingsOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('hfCollSettingsOverlay'))
    document.getElementById('hfCollSettingsOverlay').classList.remove('open');
});

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
  if (!hclMov && Date.now()-hclTt<500) { if(window.progCardFlipped&&!hfCollCardInnerEl.classList.contains('flipped'))progCardFlipped(); hfCollCardInnerEl.classList.toggle('flipped'); return; }
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
  const _hfColI = collCollections[0];
  if (_hfColI) document.getElementById('hfCollSubCounter').textContent = `1 / ${_hfColI.inputs.length}`;
  hfCollUpdateButtons();
}

registerMode('modeHandsfreeCollections', showHandsfreeCollections);
TRAINING_SCREENS.push('hfCollScreen');
