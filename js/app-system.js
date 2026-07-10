// app-system.js — feedback mode settings, access levels, input bundles, progress bar + render patches
// Part of Deckstack v1.19.4 — split from app.js

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
  if (feedbackMode && alSuggestMode) {
    alSuggestMode = false;
    localStorage.setItem('alSuggestMode', 'false');
    if (alSuggestToggle) alSuggestToggle.checked = false;
    document.body.classList.remove('al-suggest-mode');
  }
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

// ─── ACCESS LEVEL SYSTEM ───────────────────────────────────────────────────────────

(function initAccessLevel() {

  const LEVEL_KEY = 'dev_access_level';

  // Pack definitions per level
  const PACK_CONFIG = {
    assertive:      { label: 'Assertive Communication', minLevel: 'freemium' },
    conversational: { label: 'Conversational Skills',   minLevel: 'freemium' },
    humour:         { label: 'Humour Practise',          minLevel: 'pro'      },
    criticism:      { label: 'Criticism & Correction',   minLevel: 'pro'      },
    teasing:        { label: 'Teasing & Playfulness',    minLevel: 'complete' },
  };

  // Mode definitions per level
  const MODE_CONFIG = {
    modeFlashcard:          { minLevel: 'freemium' },
    modeMemorize:           { minLevel: 'freemium' },
    modeCollections:        { minLevel: 'pro'      },
    modeFlow:               { minLevel: 'pro'      },
    modeChallenges:         { minLevel: 'pro'      },
    modeMindset:            { minLevel: 'pro'      },
    modeHandsfree:          { minLevel: 'pro'      },
    modeHandsfreeCollections: { minLevel: 'pro'    },
    modeHandsfreeSequences: { minLevel: 'pro'      },
    modeHandsfreeChallenges:{ minLevel: 'pro'      },
    modeHandsfreeMindset:   { minLevel: 'pro'      },
    modeHandsfreeMemorize:  { minLevel: 'pro'      },
  };

  const LEVEL_ORDER = ['freemium', 'pro', 'complete'];

  function getLevel() {
    return localStorage.getItem(LEVEL_KEY) || 'complete';
  }

  function setLevel(level) {
    localStorage.setItem(LEVEL_KEY, level);
  }

  function levelIndex(level) {
    return LEVEL_ORDER.indexOf(level);
  }

  function canAccess(packKey) {
    const cfg = PACK_CONFIG[packKey];
    if (!cfg) return true;
    return levelIndex(getLevel()) >= levelIndex(cfg.minLevel);
  }

  function badgeLabel(packKey) {
    const cfg = PACK_CONFIG[packKey];
    if (!cfg) return null;
    const min = cfg.minLevel;
    if (min === 'pro')      return { text: 'Pro',      cls: 'pack-lock-badge--pro' };
    if (min === 'complete') return { text: 'Complete', cls: 'pack-lock-badge--complete' };
    return null;
  }

  // Apply to all collection-card elements that have data-key
  function applyAccessLevel() {
    document.querySelectorAll('.collection-card[data-key]').forEach(card => {
      // Skip cards not in Library (e.g. recommended, dashboard cards)
      if (!card.closest('#libTabPacks, #libTabTopics, #libTabFavorites')) return;
      const key = card.dataset.key;
      const cfg = PACK_CONFIG[key];
      if (!cfg) return;
      const curLevel = getLevel();
      const accessible = levelIndex(curLevel) >= levelIndex(cfg.minLevel);
      // Complete-level packs: hide entirely when not accessible
      if (cfg.minLevel === 'complete') {
        card.style.display = accessible ? '' : 'none';
        return;
      }
      // Pro-level packs: show but locked
      card.style.display = '';
      card.classList.toggle('collection-card--locked', !accessible);
      const old = card.querySelector('.pack-lock-badge');
      if (old) old.remove();
      if (!accessible) {
        const badge = badgeLabel(key);
        if (badge) {
          const el = document.createElement('div');
          el.className = `pack-lock-badge ${badge.cls}`;
          el.textContent = badge.text;
          card.appendChild(el);
        }
        card.onclick = null;
        card.ontouchend = null;
      }
    });
    // Re-bind clicks on accessible cards in Library Packs tab
    document.querySelectorAll('#libTabPacks .collection-card[data-key]').forEach(card => {
      if (!canAccess(card.dataset.key)) return;
      card.onclick = () => showModeScreen(card.dataset.key, card.dataset.label);
      let cSY = 0, cMv = false;
      card.ontouchstart = e => { cSY = e.touches[0].clientY; cMv = false; };
      card.ontouchmove  = e => { if (Math.abs(e.touches[0].clientY - cSY) > 8) cMv = true; };
      card.ontouchend   = () => { if (!cMv) showModeScreen(card.dataset.key, card.dataset.label); };
    });
    // Apply mode locks
    applyModeLocks();
    // Update nav button label (Upgrade ↔ Extended)
    updateNavUpgradeBtn();
  }

  function applyModeLocks() {
    const curLevel = getLevel();
    Object.entries(MODE_CONFIG).forEach(([id, cfg]) => {
      const el = document.getElementById(id);
      if (!el) return;
      const accessible = levelIndex(curLevel) >= levelIndex(cfg.minLevel);
      el.classList.toggle('mode-card--locked', !accessible);
      // Remove old badge
      const old = el.querySelector('.mode-lock-badge');
      if (old) old.remove();
      if (!accessible) {
        const badge = document.createElement('div');
        badge.className = 'mode-lock-badge pack-lock-badge pack-lock-badge--pro';
        badge.textContent = 'Pro';
        el.appendChild(badge);
        el.style.opacity = '0.45';
        el.style.cursor  = 'default';
        el.style.pointerEvents = 'none';
      } else {
        el.style.opacity = '';
        el.style.cursor  = '';
        el.style.pointerEvents = '';
      }
    });
  }

  // Load radio in developer settings
  function loadDevLevelUI() {
    const level = getLevel();
    const radio = document.getElementById(
      level === 'pro' ? 'devLevelPro' :
      level === 'freemium' ? 'devLevelFreemium' : 'devLevelComplete'
    );
    if (radio) radio.checked = true;
  }

  // Listen to radio changes
  ['devLevelComplete', 'devLevelPro', 'devLevelFreemium'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', () => {
      if (el.checked) { setLevel(el.value); applyAccessLevel(); }
    });
  });

  // Hook into navToSettings so radio is always current
  const _origNavToSettings = navToSettings;
  window.navToSettings = function() {
    _origNavToSettings();
    loadDevLevelUI();
  };

  // ── Nav upgrade/extended button ──────────────────────────────────────────────
  function updateNavUpgradeBtn() {
    const btn   = document.getElementById('navUpgradeBtn');
    const icon  = btn && btn.querySelector('.nav-tab-icon i');
    const label = btn && btn.querySelector('.nav-tab-label');
    if (!btn) return;
    const level = getLevel();
    if (level === 'freemium') {
      btn.dataset.tab      = 'upgrade';
      btn.className        = 'nav-tab nav-tab--upgrade';
      if (icon)  icon.className  = 'ti ti-crown';
      if (label) label.textContent = 'Upgrade';
    } else {
      btn.dataset.tab      = 'extended';
      btn.className        = 'nav-tab nav-tab--extended';
      if (icon)  icon.className  = 'ti ti-sparkles';
      if (label) label.textContent = 'Extended';
    }
  }

  // Expose for other modules
  window.accessLevel = { getLevel, canAccess, applyModeLocks, updateNavUpgradeBtn };

  // Init
  loadDevLevelUI();
  applyAccessLevel();
  updateNavUpgradeBtn();

  // Re-apply mode locks whenever mode screen becomes visible
  const _modeScreenEl = document.getElementById('modeScreen');
  if (_modeScreenEl) {
    new MutationObserver(() => {
      if (_modeScreenEl.style.display === 'flex') applyModeLocks();
    }).observe(_modeScreenEl, { attributes: true, attributeFilter: ['style'] });
  }

})();

// ─── INPUT BUNDLES ──────────────────────────────────────────────────────────────

// Bundle definitions — keyed by packKey only (applies to whole pack in a mode)
const BUNDLE_DEFS = {
  assertive: [
    {
      id: 'default',
      name: 'Default Bundle',
      description: 'The core inputs — everyday situations covering all strategies in this pack.',
      default: true,
    },
    {
      id: 'test',
      name: 'Workplace & Social Bundle',
      description: 'Additional inputs focused on professional and social contexts — colleagues, work situations and social judgement.',
      default: false,
    },
  ]
};

// Bundle state storage: key = 'bundles:{packKey}'
function getBundleState(packKey) {
  const k = `bundles:${packKey}`;
  try { return JSON.parse(localStorage.getItem(k)); } catch { return null; }
}

function setBundleState(packKey, state) {
  const k = `bundles:${packKey}`;
  localStorage.setItem(k, JSON.stringify(state));
}

// Get active bundle IDs for a pack
function getActiveBundles(packKey) {
  const defs = BUNDLE_DEFS[packKey];
  if (!defs) return null;
  const saved = getBundleState(packKey);
  if (saved) return saved;
  const defaults = defs.filter(b => b.default).map(b => b.id);
  return defaults.length ? defaults : [defs[0].id];
}

// Filter inputs based on active bundles (applies to all strategies in pack)
window.filterInputsByBundle = function(inputs, packKey) {
  const defs = BUNDLE_DEFS[packKey];
  if (!defs) return inputs;
  const active = getActiveBundles(packKey);
  return inputs.filter(inp => !inp.bundle || active.includes(inp.bundle));
};

// Render Input Bundles section into a settings panel
window.renderBundleSection = function(containerEl, packKey) {
  const defs = BUNDLE_DEFS[packKey];
  const old = containerEl.querySelector('.bundle-section');
  if (old) old.remove();

  const section = document.createElement('div');
  section.className = 'bundle-section';
  section.innerHTML = `<div class="bundle-section-title">Input Bundles</div>`;

  if (!defs || !defs.length) {
    section.innerHTML += `<div style="font-size:13px;color:#bbb;padding:8px 0;">No extra bundles available for this pack yet.</div>`;
    containerEl.appendChild(section);
    return;
  }

  const active = getActiveBundles(packKey);

  defs.forEach(bundle => {
    const isOn = active.includes(bundle.id);
    const row = document.createElement('div');
    row.innerHTML = `
      <div class="bundle-row">
        <div class="bundle-info">
          <div class="bundle-name">${bundle.name}</div>
          <div class="bundle-desc-preview">Tap ⓘ for details</div>
        </div>
        <button class="bundle-expand" data-bundle="${bundle.id}" title="About this bundle">ⓘ</button>
        <label class="toggle"><input type="checkbox" class="bundle-toggle" data-bundle="${bundle.id}" ${isOn ? 'checked' : ''} /><span class="toggle-slider"></span></label>
      </div>
      <div class="bundle-detail" id="bundle-detail-${bundle.id}">${bundle.description}</div>
    `;
    section.appendChild(row);

    row.querySelector('.bundle-toggle').addEventListener('change', function() {
      const cur = getActiveBundles(packKey);
      const newState = this.checked
        ? [...new Set([...cur, bundle.id])]
        : cur.filter(id => id !== bundle.id);
      if (newState.length === 0) { this.checked = true; return; }
      setBundleState(packKey, newState);
    });

    row.querySelector('.bundle-expand').addEventListener('click', () => {
      const detail = document.getElementById(`bundle-detail-${bundle.id}`);
      if (detail) detail.classList.toggle('open');
    });
  });

  containerEl.appendChild(section);
};

// ─── PROGRESS BAR ──────────────────────────────────────────────────────────────

(function initProgressBar() {
  const PB_KEY = 'showProgressBar';
  const toggle = document.getElementById('showProgressBar');

  // ─ Apply / read setting ────────────────────────────────────────────
  function pbEnabled() { return localStorage.getItem(PB_KEY) === 'true'; }

  function applyPb() {
    document.body.classList.toggle('pb-enabled', pbEnabled());
    if (toggle) toggle.checked = pbEnabled();
  }

  if (toggle) {
    toggle.addEventListener('change', () => {
      localStorage.setItem(PB_KEY, toggle.checked);
      applyPb();
    });
  }

  applyPb();

  // ─ Update fill on a divider ────────────────────────────────────────
  // current = 0-based index, total = total items
  window.pbUpdate = function(dividerEl, current, total) {
    if (!dividerEl) return;
    const pct = total > 1 ? (current / (total - 1)) * 100 : 100;
    dividerEl.style.setProperty('--pb-fill', pct.toFixed(2));
  };

  // ─ Jump on click/touch ─────────────────────────────────────────────
  window.pbBindClick = function(dividerEl, total, jumpFn, isPlaying) {
    if (!dividerEl) return;
    function handleSeek(clientX) {
      if (!pbEnabled()) return;
      if (typeof isPlaying === 'function' && isPlaying()) return;
      const rect = dividerEl.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const idx = Math.round(ratio * (total() - 1));
      jumpFn(idx);
    }
    dividerEl.addEventListener('click', e => handleSeek(e.clientX));
    dividerEl.addEventListener('touchend', e => {
      e.preventDefault();
      handleSeek(e.changedTouches[0].clientX);
    }, { passive: false });
  };

})();

// ─ Hook pbUpdate into each render function ─────────────────────────────

// Single Strategy
const _pbDivSingle = document.querySelector('#trainingScreen .divider');
const _origRenderSingle = window.render;
window.render = function() {
  _origRenderSingle();
  if (window.pbUpdate) pbUpdate(_pbDivSingle, stratIdx, strategies.length);
};
pbBindClick(_pbDivSingle, () => strategies.length, idx => { stratIdx = idx; inputIdx = 0; flip(false, false); render(); });

// Memorize
const _pbDivMem = document.querySelector('#memScreen .divider');
const _origMemRenderPb = window.memRender;
window.memRender = function() {
  _origMemRenderPb();
  if (window.pbUpdate) pbUpdate(_pbDivMem, memStratIdx, memStrategies.length);
};
pbBindClick(_pbDivMem, () => memStrategies.length, idx => { memStratIdx = idx; memCardIdx = 0; memFlipFn(false, false); memRender(); });

// Multiple Steps
const _pbDivMs = document.querySelector('#msScreen .divider');
const _origMsRenderPb = msRender;
window.msRender = function() {
  _origMsRenderPb();
  if (window.pbUpdate) pbUpdate(_pbDivMs, msStratIdx, msStrategies.length);
};
pbBindClick(_pbDivMs, () => msStrategies.length, idx => { msStratIdx = idx; msInputIdx = 0; msStepIdx = 0; msFlip(false, false); msRender(); });

// Flow / Sequences
const _pbDivFlow = document.querySelector('#flowScreen .divider');
const _origFlowRenderPb = window.flowRender;
window.flowRender = function() {
  _origFlowRenderPb();
  if (window.pbUpdate) pbUpdate(_pbDivFlow, flowComboIdx, flowStrategies.length);
};
pbBindClick(_pbDivFlow, () => flowStrategies.length, idx => { flowComboIdx = idx; flowCardIdx = 0; flowFlipFn(false, false); flowRender(); });

// Guided
const _pbDivGuided = document.querySelector('#guidedScreen .divider');
const _origGuidedRenderPb = guidedRender;
window.guidedRender = function() {
  _origGuidedRenderPb();
  if (window.pbUpdate) pbUpdate(_pbDivGuided, guidedComboIdx, guidedStrategies.length);
};
pbBindClick(_pbDivGuided, () => guidedStrategies.length, idx => { guidedComboIdx = idx; guidedInputIdx = 0; guidedStepIdx = 0; guidedFlipFn(false, false); guidedRender(); });

// Challenges
const _pbDivChall = document.querySelector('#challScreen .divider');
const _origChallRenderPb = challRender;
window.challRender = function() {
  _origChallRenderPb();
  if (window.pbUpdate) pbUpdate(_pbDivChall, challIdx, challChallenges.length);
};
pbBindClick(_pbDivChall, () => challChallenges.length, idx => { challIdx = idx; challInputIdx = 0; challFlipFn(false, false); challRender(); });

// Mindset
const _pbDivMind = document.querySelector('#mindScreen .divider');
const _origMindRenderPb = mindRender;
window.mindRender = function() {
  _origMindRenderPb();
  if (window.pbUpdate) pbUpdate(_pbDivMind, mindIdx, mindStrategies.length);
};
pbBindClick(_pbDivMind, () => mindStrategies.length, idx => { mindIdx = idx; mindInputIdx = 0; mindFlipFn(false, false); mindRender(); });

// Collections
const _pbDivColl = document.querySelector('#collScreen .divider');
const _origCollRenderPb = collRender;
window.collRender = function() {
  _origCollRenderPb();
  if (window.pbUpdate) pbUpdate(_pbDivColl, collIdx, collCollections.length);
};
pbBindClick(_pbDivColl, () => collCollections.length, idx => { collIdx = idx; collInputIdx = 0; collFlipFn(false, false); collRender(); });

// Handsfree: Single Strategy
const _pbDivHf = document.querySelector('#hfScreen .divider');
const _origHfRenderPb = hfRender;
window.hfRender = function() {
  _origHfRenderPb();
  if (window.pbUpdate) pbUpdate(_pbDivHf, stratIdx, strategies.length);
};
pbBindClick(_pbDivHf, () => strategies.length, idx => { if (hfPlaying) return; stratIdx = idx; inputIdx = 0; hfRender(); }, () => hfPlaying);

// Handsfree: Memorize
const _pbDivHfMem = document.querySelector('#hfMemScreen .divider');
const _origHfMemRenderPb = hfMemRender;
window.hfMemRender = function() {
  _origHfMemRenderPb();
  if (window.pbUpdate) pbUpdate(_pbDivHfMem, memStratIdx, memStrategies.length);
};
pbBindClick(_pbDivHfMem, () => memStrategies.length, idx => { if (hfMemPlaying) return; memStratIdx = idx; memCardIdx = 0; hfMemRender(); }, () => hfMemPlaying);

// Handsfree: Challenges
const _pbDivHfChall = document.querySelector('#hfChallScreen .divider');
const _origHfChallRenderManualPb = hfChallRenderManual;
window.hfChallRenderManual = function() {
  _origHfChallRenderManualPb();
  if (window.pbUpdate) pbUpdate(_pbDivHfChall, challIdx, challChallenges.length);
};
pbBindClick(_pbDivHfChall, () => challChallenges.length, idx => { if (hfChallPlaying) return; challIdx = idx; challInputIdx = 0; hfChallRenderManual(); }, () => hfChallPlaying);

// Handsfree: Sequences
const _pbDivHfFlow = document.querySelector('#hfFlowScreen .divider');
const _origHfFlowRenderManualPb = hfFlowRenderManual;
window.hfFlowRenderManual = function() {
  _origHfFlowRenderManualPb();
  if (window.pbUpdate) pbUpdate(_pbDivHfFlow, flowComboIdx, flowStrategies.length);
};
pbBindClick(_pbDivHfFlow, () => flowStrategies.length, idx => { if (hfFlowPlaying) return; flowComboIdx = idx; flowCardIdx = 0; hfFlowRenderManual(); }, () => hfFlowPlaying);

// Handsfree: Mindset
const _pbDivHfMind = document.querySelector('#hfMindScreen .divider');
const _origHfMindRenderManualPb = hfMindRenderManual;
window.hfMindRenderManual = function() {
  _origHfMindRenderManualPb();
  if (window.pbUpdate) pbUpdate(_pbDivHfMind, mindIdx, mindStrategies.length);
};
pbBindClick(_pbDivHfMind, () => mindStrategies.length, idx => { if (hfMindPlaying) return; mindIdx = idx; mindInputIdx = 0; hfMindRenderManual(); }, () => hfMindPlaying);

// Handsfree: Collections
const _pbDivHfColl = document.querySelector('#hfCollScreen .divider');
const _origHfCollRenderManualPb = hfCollRenderManual;
window.hfCollRenderManual = function() {
  _origHfCollRenderManualPb();
  if (window.pbUpdate) pbUpdate(_pbDivHfColl, collIdx, collCollections.length);
};
pbBindClick(_pbDivHfColl, () => collCollections.length, idx => { if (hfCollPlaying) return; collIdx = idx; collInputIdx = 0; hfCollRenderManual(); }, () => hfCollPlaying);

// ── HOOK INTO RENDER FUNCTIONS ────────────────────────────────────────────────

// Single Strategy
const _origRender = render;
window.render = function() {
  _origRender();
  const frontKey = fbKey('single', stratIdx, inputIdx, 'front');
  const backKey  = fbKey('single', stratIdx, inputIdx, 'back');
  fbRender('fb-single-front', frontKey);
  fbRender('fb-single-back',  backKey);
  alRender('al-single-front', alKey('single', stratIdx, inputIdx, 'front'));
  alRender('al-single-back',  alKey('single', stratIdx, inputIdx, 'back'));
};

// Memorize
const _origMemRender = memRender;
window.memRender = function() {
  _origMemRender();
  const frontKey = fbKey('mem', memStratIdx, memCardIdx, 'front');
  const backKey  = fbKey('mem', memStratIdx, memCardIdx, 'back');
  fbRender('fb-mem-front', frontKey);
  fbRender('fb-mem-back',  backKey);
  alRender('al-mem-front', alKey('mem', memStratIdx, memCardIdx, 'front'));
  alRender('al-mem-back',  alKey('mem', memStratIdx, memCardIdx, 'back'));
};

// Flow (Sequences)
const _origFlowRender = flowRender;
window.flowRender = function() {
  _origFlowRender();
  const frontKey = fbKey('flow', flowComboIdx, flowCardIdx, 'front');
  const backKey  = fbKey('flow', flowComboIdx, flowCardIdx, 'back');
  fbRender('fb-flow-front', frontKey);
  fbRender('fb-flow-back',  backKey);
  alRender('al-flow-front', alKey('flow', flowComboIdx, flowCardIdx, 'front'));
  alRender('al-flow-back',  alKey('flow', flowComboIdx, flowCardIdx, 'back'));
};


// ── ACCESS LEVEL SUGGEST MODE ────────────────────────────────────────────────
let alSuggestMode = localStorage.getItem('alSuggestMode') === 'true';
const alSuggestToggle = document.getElementById('accessLevelSuggestToggle');

function applyAlSuggestMode() {
  document.body.classList.toggle('al-suggest-mode', alSuggestMode);
  if (alSuggestToggle) alSuggestToggle.checked = alSuggestMode;
}
applyAlSuggestMode();

if (alSuggestToggle) {
  alSuggestToggle.addEventListener('change', () => {
    alSuggestMode = alSuggestToggle.checked;
    localStorage.setItem('alSuggestMode', alSuggestMode);
    // Exclusive with feedback mode
    if (alSuggestMode && feedbackMode) {
      feedbackMode = false;
      localStorage.setItem('feedbackMode', 'false');
      if (feedbackModeToggle) feedbackModeToggle.checked = false;
      document.body.classList.remove('feedback-mode');
    }
    applyAlSuggestMode();
  });
}

// ── AL KEY HELPERS ───────────────────────────────────────────────────────────
// Key: al_{packKey}_{screen}_{stratId}_{cardId}_{side}
// Pack-level key: al_pack_{packKey}
function alKey(screen, stratId, cardId, side) {
  return 'al_' + (window.activeCollectionKey||'') + '_' + screen + '_' + stratId + '_' + cardId + '_' + side;
}
window.alKey = alKey;
function alGet(key) {
  try { const v = localStorage.getItem(key); return v !== null ? parseInt(v) : null; } catch { return null; }
}
function alSet(key, val) {
  try { localStorage.setItem(key, val); } catch {}
}
function alPackKey(packKey) { return `al_pack_${packKey}`; }

// ── AL BAR RENDER & INIT ─────────────────────────────────────────────────────
const AL_LABELS = { 1: 'Free', 2: 'Pro', 3: 'Extended' };

function alRender(barId, key) {
  const bar = document.getElementById(barId);
  if (!bar) return;
  bar.dataset.alKey = key;
  const saved = alGet(key);
  bar.querySelectorAll('.al-btn').forEach(btn => {
    const v = parseInt(btn.dataset.val);
    btn.classList.remove('al-selected', 'al-dimmed');
    if (saved === null) return;
    if (v === saved) btn.classList.add('al-selected');
    else btn.classList.add('al-dimmed');
  });
}
window.alRender = alRender;

function alInitBar(barId) {
  const bar = document.getElementById(barId);
  if (!bar) return;
  bar.querySelectorAll('.al-btn').forEach(btn => {
    const handler = e => {
      e.stopPropagation();
      const key = bar.dataset.alKey;
      if (!key) {
        // Key not set yet — bar hasn't been rendered with current card.
        // Force a render using current app state if possible.
        const screenId = barId.replace('al-','').replace('-front','').replace('-back','');
return;
      }
      alSet(key, parseInt(btn.dataset.val));
      alRender(barId, key);
    };
    btn.addEventListener('click', handler);
    btn.addEventListener('touchend', e => { e.preventDefault(); e.stopPropagation(); handler(e); }, { passive: false });
  });
}
window.alInitBar  = alInitBar;
window.alKey      = alKey;
window.alPackKey  = alPackKey;

// Init all al-bars on cards
['al-single-front','al-single-back','al-mem-front','al-mem-back',
 'al-flow-front','al-flow-back','al-chall-front','al-chall-back',
 'al-mind-front','al-mind-back','al-coll-front','al-coll-back'].forEach(alInitBar);

// Pack-level al-bar
const alPackBar = document.getElementById('al-pack-bar');
// Init feedback pack bar
const fbPackBar = document.getElementById('fb-pack-bar');
if (fbPackBar) {
  fbPackBar.querySelectorAll('.fb-btn').forEach(btn => {
    const handler = e => {
      e.stopPropagation();
      const key = fbPackBar.dataset.fbKey;
      if (!key) return;
      fbSet(key, parseInt(btn.dataset.val));
      fbRender('fb-pack-bar', key);
    };
    btn.addEventListener('click', handler);
    btn.addEventListener('touchend', e => { e.preventDefault(); e.stopPropagation(); handler(e); }, { passive: false });
  });
  fbPackBar.dataset.fbKey = '';
}

if (alPackBar) {
  alPackBar.querySelectorAll('.al-btn').forEach(btn => {
    const handler = e => {
      e.stopPropagation();
      const key = alPackBar.dataset.alKey;
      if (!key) return;
      alSet(key, parseInt(btn.dataset.val));
      alRender('al-pack-bar', key);
    };
    btn.addEventListener('click', handler);
    btn.addEventListener('touchend', e => { e.preventDefault(); e.stopPropagation(); handler(e); }, { passive: false });
  });
}

// Pack settings overlay
(function() {
  const btn     = document.getElementById('modePackSettingsBtn');
  const overlay = document.getElementById('packSettingsOverlay');
  const close   = document.getElementById('packSettingsClose');
  const title   = document.getElementById('packSettingsTitle');
  const ver     = document.getElementById('packSettingsVersion');
  if (!btn || !overlay) return;
  btn.addEventListener('click', () => {
    const packKey = window.activeCollectionKey;
    const label   = window.activeCollectionLabel || packKey;
    if (title) title.textContent = label + ' — Settings';
    if (ver)   ver.textContent   = typeof VERSION !== 'undefined' ? VERSION : '';
    // Show/hide sections based on active mode
    const fbSection = document.getElementById('packSettingsFbSection');
    const alSection = document.getElementById('packSettingsAlSection');
    if (fbSection) fbSection.style.display = feedbackMode ? '' : 'none';
    if (alSection) alSection.style.display = alSuggestMode ? '' : 'none';
    // Render bars
    const _alPK = alPackKey(packKey || '');
    const _fbPK = 'fb_pack_' + (packKey || '');
    // Set keys on bars before rendering so click handlers can read them
    const _alBar = document.getElementById('al-pack-bar');
    const _fbBar = document.getElementById('fb-pack-bar');
    if (_alBar) _alBar.dataset.alKey = _alPK;
    if (_fbBar) _fbBar.dataset.fbKey = _fbPK;
    alRender('al-pack-bar', _alPK);
    if (_fbBar && typeof fbRender === 'function') fbRender('fb-pack-bar', _fbPK);
    overlay.classList.add('open');
  });
  if (close) close.addEventListener('click', () => overlay.classList.remove('open'));
})();

// ── AL EXPORT ────────────────────────────────────────────────────────────────
function exportAlSuggestions() {
  const data = { exportedAt: new Date().toISOString(), packSuggestions: {}, cardSuggestions: [] };
  const AL_NAMES = { 1: 'free', 2: 'pro', 3: 'extended' };

  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!k.startsWith('al_')) continue;
    const v = parseInt(localStorage.getItem(k));
    const levelName = AL_NAMES[v] || String(v);

    if (k.startsWith('al_pack_')) {
      const packKey = k.replace('al_pack_', '');
      data.packSuggestions[packKey] = levelName;
    } else {
      // al_{pack}_{screen}_{stratId}_{cardId}_{side}
      const parts = k.split('_');
      // parts: ['al', pack, screen, stratId, cardId, side]
      data.cardSuggestions.push({ key: k, pack: parts[1], screen: parts[2], suggested: levelName });
    }
  }

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = `deckstack-al-suggestions-${Date.now()}.json`;
  a.click(); URL.revokeObjectURL(url);
}

const alExportBtn = document.getElementById('alExportBtn');
if (alExportBtn) alExportBtn.addEventListener('click', exportAlSuggestions);
