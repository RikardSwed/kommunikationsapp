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
    assertive:      { label: 'Assertive Communication', minLevel: 'freemium'  },
    conversational: { label: 'Conversational Skills',   minLevel: 'freemium'  },
    humour:         { label: 'Humour Practise',          minLevel: 'pro'       },
    criticism:      { label: 'Criticism & Correction',   minLevel: 'pro'       },
    teasing:        { label: 'Teasing & Playfulness',    minLevel: 'complete'  },
    storytelling:   { label: 'Storytelling',             minLevel: 'extended'  },
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

  function getExtendedOwned() {
    try { return JSON.parse(localStorage.getItem('ds_extended_owned')) || []; }
    catch { return []; }
  }

  function canAccess(packKey) {
    const cfg = PACK_CONFIG[packKey];
    if (!cfg) return true;
    if (cfg.minLevel === 'extended') {
      return getLevel() === 'complete' || getExtendedOwned().includes(packKey);
    }
    return levelIndex(getLevel()) >= levelIndex(cfg.minLevel);
  }

  function badgeLabel(packKey) {
    const cfg = PACK_CONFIG[packKey];
    if (!cfg) return null;
    const min = cfg.minLevel;
    if (min === 'pro')      return { text: 'Pro',      cls: 'pack-lock-badge--pro' };
    if (min === 'complete') return { text: 'Complete', cls: 'pack-lock-badge--complete' };
    if (min === 'extended') return { text: 'Extended', cls: 'pack-lock-badge--extended' };
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
      const accessible = canAccess(key);
      // Extended-level packs: show only when owned or complete
      if (cfg.minLevel === 'extended') {
        card.style.display = accessible ? '' : 'none';
        if (accessible) {
          card.classList.remove('collection-card--locked');
          const old = card.querySelector('.pack-lock-badge');
          if (old) old.remove();
        }
        return;
      }
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
  window._applyAccessLevel = applyAccessLevel;

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
// Bundle definitions per pack.
// tier: 'free'     — alltid aktivt för alla, ingen toggle
// tier: 'pro'      — aktivt för pro+, ingen toggle (free+pro bundles ersätter free-only)
// tier: 'pro-opt'  — valbar toggle för pro+-användare
// tier: 'extended' — valbar toggle om köpt via Extended store
const BUNDLE_DEFS = {
  assertive: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: 'Core inputs — 5 situations per strategy, available to all users.',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: 'Expanded inputs — 8 situations per strategy, unlocked with Pro. Replaces the Free Bundle.',
    },
    {
      id: 'workplace',
      tier: 'pro-opt',
      name: 'Workplace & Social',
      description: 'Extra situations focused on professional and social contexts — colleagues, meetings, and social judgement.',
    },
  ]
};

// Bundle state storage: key = 'bundles:{packKey}'
// Only stores user-toggled pro-opt and extended bundles
function getBundleState(packKey) {
  const k = `bundles:${packKey}`;
  try { return JSON.parse(localStorage.getItem(k)); } catch { return null; }
}

function setBundleState(packKey, state) {
  const k = `bundles:${packKey}`;
  localStorage.setItem(k, JSON.stringify(state));
}

// Get active bundle IDs for a pack, based on access level
function getActiveBundles(packKey) {
  const defs = BUNDLE_DEFS[packKey];
  if (!defs) return null;

  const level = (window.accessLevel && window.accessLevel.getLevel())
              || localStorage.getItem('dev_access_level') || 'complete';
  const extOwned = (() => {
    try { return JSON.parse(localStorage.getItem('ds_extended_owned')) || []; }
    catch { return []; }
  })();

  // Tiers accessible at each level
  const canUseTier = (tier) => {
    if (tier === 'free') return true;
    if (tier === 'pro' || tier === 'pro-opt') return level === 'pro' || level === 'complete';
    if (tier === 'extended') return level === 'complete' || extOwned.includes(packKey);
    return false;
  };

  // Always-on bundles (free + pro — not user-toggleable)
  const autoActive = defs
    .filter(b => (b.tier === 'free' || b.tier === 'pro') && canUseTier(b.tier))
    .map(b => b.id);

  // For pro: pro bundle replaces free bundle
  // So if pro is active, remove free
  const hasProAuto = autoActive.includes('pro') || defs.some(b => b.tier === 'pro' && canUseTier(b.tier));
  const hasFree    = defs.some(b => b.tier === 'free');
  const base = hasProAuto && hasFree
    ? autoActive.filter(id => {
        const def = defs.find(b => b.id === id);
        return def && def.tier !== 'free';
      })
    : autoActive;

  // User-toggleable bundles (pro-opt and owned extended)
  const saved = getBundleState(packKey) || [];
  const toggleable = defs.filter(b =>
    (b.tier === 'pro-opt' || b.tier === 'extended') &&
    canUseTier(b.tier) &&
    saved.includes(b.id)
  ).map(b => b.id);

  return [...new Set([...base, ...toggleable])];
}

// Filter inputs based on active bundles
// Bakåtkompatibelt: kort utan bundle-fält visas alltid
window.filterInputsByBundle = function(inputs, packKey) {
  const defs = BUNDLE_DEFS[packKey];
  if (!defs) return inputs;
  const active = getActiveBundles(packKey);
  return inputs.filter(inp => !inp.bundle || active.includes(inp.bundle));
};

// Generic version for memorize cards and sequences steps
window.filterCardsByBundle = function(cards, packKey) {
  const defs = BUNDLE_DEFS[packKey];
  if (!defs) return cards;
  const active = getActiveBundles(packKey);
  return cards.filter(c => !c.bundle || active.includes(c.bundle));
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

  const level = (window.accessLevel && window.accessLevel.getLevel())
              || localStorage.getItem('dev_access_level') || 'complete';
  const extOwned = (() => {
    try { return JSON.parse(localStorage.getItem('ds_extended_owned')) || []; }
    catch { return []; }
  })();
  const canUseTier = (tier) => {
    if (tier === 'free') return true;
    if (tier === 'pro' || tier === 'pro-opt') return level === 'pro' || level === 'complete';
    if (tier === 'extended') return level === 'complete' || extOwned.includes(packKey);
    return false;
  };

  const hasProBundle = defs.some(b => b.tier === 'pro');
  const saved = getBundleState(packKey) || [];
  const active = getActiveBundles(packKey);

  defs.forEach(bundle => {
    const accessible = canUseTier(bundle.tier);
    const row = document.createElement('div');

    if (bundle.tier === 'free') {
      // Free bundle — always on, show as locked info row if pro bundle exists
      if (hasProBundle && (level === 'pro' || level === 'complete')) return; // hidden when pro replaces it
      row.innerHTML = `
        <div class="bundle-row bundle-row--auto">
          <div class="bundle-info">
            <div class="bundle-name">${bundle.name}</div>
            <div class="bundle-desc-preview">${bundle.description}</div>
          </div>
          <span class="bundle-status">Active</span>
        </div>`;

    } else if (bundle.tier === 'pro') {
      // Pro bundle — auto-on for pro+, show as locked for freemium
      row.innerHTML = accessible ? `
        <div class="bundle-row bundle-row--auto">
          <div class="bundle-info">
            <div class="bundle-name">${bundle.name}</div>
            <div class="bundle-desc-preview">${bundle.description}</div>
          </div>
          <span class="bundle-status">Active</span>
        </div>` : `
        <div class="bundle-row bundle-row--locked">
          <div class="bundle-info">
            <div class="bundle-name">${bundle.name}</div>
            <div class="bundle-desc-preview">${bundle.description}</div>
          </div>
          <span class="bundle-status bundle-status--locked">Pro</span>
        </div>`;

    } else if (bundle.tier === 'pro-opt' || bundle.tier === 'extended') {
      // Toggleable — only shown if accessible
      if (!accessible) return;
      const isOn = active.includes(bundle.id);
      row.innerHTML = `
        <div class="bundle-row">
          <div class="bundle-info">
            <div class="bundle-name">${bundle.name}</div>
            <div class="bundle-desc-preview">${bundle.description}</div>
          </div>
          <label class="toggle"><input type="checkbox" class="bundle-toggle" data-bundle="${bundle.id}" ${isOn ? 'checked' : ''} /><span class="toggle-slider"></span></label>
        </div>`;

      const toggle = row.querySelector('.bundle-toggle');
      if (toggle) {
        toggle.addEventListener('change', function() {
          const cur = getBundleState(packKey) || [];
          const newState = this.checked
            ? [...new Set([...cur, bundle.id])]
            : cur.filter(id => id !== bundle.id);
          setBundleState(packKey, newState);
        });
      }
    }

    if (row.innerHTML) section.appendChild(row);
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
    // Render tag section if tag mode is on
    if (window.renderPackTagSection) window.renderPackTagSection(packKey || '');
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

const clearExtendedBtn = document.getElementById('clearExtendedBtn');
if (clearExtendedBtn) clearExtendedBtn.addEventListener('click', () => {
  localStorage.removeItem('ds_extended_owned');
  if (window._applyAccessLevel) window._applyAccessLevel();
  if (window.renderExtendedStore) window.renderExtendedStore();
});

// ── TAG MODE ──────────────────────────────────────────────────────────────────

(function initTagMode() {
  const TAG_EDITS_KEY = 'ds_tag_edits'; // {packKey: [tags], 'prog:programId': [tags]}

  let tagMode = localStorage.getItem('tagMode') === 'true';

  function getTagEdits() {
    try { return JSON.parse(localStorage.getItem(TAG_EDITS_KEY)) || {}; }
    catch { return {}; }
  }
  function saveTagEdits(edits) {
    localStorage.setItem(TAG_EDITS_KEY, JSON.stringify(edits));
  }

  // Get current tags for a key (pack key or 'prog:id')
  // Merges tagsData.js base tags with any edits
  window.getTagsForKey = function(key) {
    const edits = getTagEdits();
    if (edits[key] !== undefined) return [...edits[key]];
    // Fall back to packTags base data
    if (typeof packTags !== 'undefined' && packTags[key]) return [...packTags[key]];
    return [];
  };

  // Set tags for a key and mark as edited
  window.setTagsForKey = function(key, tags) {
    const edits = getTagEdits();
    edits[key] = tags;
    saveTagEdits(edits);
  };

  // Apply tag mode state
  function applyTagMode() {
    document.body.classList.toggle('tag-mode', tagMode);
    const toggle = document.getElementById('tagModeToggle');
    if (toggle) toggle.checked = tagMode;
    const exportRow = document.getElementById('tagExportRow');
    if (exportRow) exportRow.style.display = tagMode ? '' : 'none';
    // Show/hide tag section in pack settings
    const tagSection = document.getElementById('packSettingsTagSection');
    if (tagSection) tagSection.style.display = tagMode ? '' : 'none';
  }

  // Toggle listener
  const tagModeToggle = document.getElementById('tagModeToggle');
  if (tagModeToggle) {
    tagModeToggle.addEventListener('change', () => {
      tagMode = tagModeToggle.checked;
      localStorage.setItem('tagMode', tagMode);
      applyTagMode();
    });
  }

  // Export tag changes
  const tagExportBtn = document.getElementById('tagExportBtn');
  if (tagExportBtn) {
    tagExportBtn.addEventListener('click', () => {
      const edits = getTagEdits();
      if (!Object.keys(edits).length) {
        alert('No tag changes to export yet.');
        return;
      }
      const out = {
        meta: { exportedAt: new Date().toISOString(), version: typeof VERSION !== 'undefined' ? VERSION : '' },
        tagEdits: edits,
      };
      const blob = new Blob([JSON.stringify(out, null, 2)], { type: 'application/json' });
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement('a');
      a.href = url; a.download = 'deckstack-tag-edits-' + Date.now() + '.json';
      a.click(); URL.revokeObjectURL(url);
    });
  }

  // ── Pack tag UI in packSettingsOverlay ───────────────────────────────────────

  window.renderPackTagSection = function(packKey) {
    const section = document.getElementById('packSettingsTagSection');
    if (!section) return;
    section.style.display = tagMode ? '' : 'none';
    if (!tagMode) return;

    const listEl  = document.getElementById('packTagsList');
    const input   = document.getElementById('packTagInput');
    const addBtn  = document.getElementById('packTagAddBtn');

    function renderTags() {
      const tags = window.getTagsForKey(packKey);
      listEl.innerHTML = tags.length
        ? tags.map((t, i) => `<span class="tag-chip">${t}<button class="tag-chip-del" data-i="${i}">×</button></span>`).join('')
        : '<span class="tag-empty">No tags yet</span>';
      listEl.querySelectorAll('.tag-chip-del').forEach(btn => {
        btn.addEventListener('click', () => {
          const cur = window.getTagsForKey(packKey);
          cur.splice(parseInt(btn.dataset.i), 1);
          window.setTagsForKey(packKey, cur);
          renderTags();
        });
      });
    }

    renderTags();
    input.value = '';

    // Remove old listeners by cloning
    const newAdd = addBtn.cloneNode(true);
    addBtn.parentNode.replaceChild(newAdd, addBtn);
    newAdd.addEventListener('click', () => {
      const val = document.getElementById('packTagInput').value.trim().toLowerCase();
      if (!val) return;
      const cur = window.getTagsForKey(packKey);
      if (!cur.includes(val)) { cur.push(val); window.setTagsForKey(packKey, cur); }
      document.getElementById('packTagInput').value = '';
      renderTags();
    });
    document.getElementById('packTagInput').addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); document.getElementById('packTagAddBtn').click(); }
    });
  };

  // ── Program Settings overlay ─────────────────────────────────────────────────

  const progSettingsOverlay = document.getElementById('programSettingsOverlay');
  const progSettingsClose   = document.getElementById('programSettingsClose');
  if (progSettingsClose) {
    progSettingsClose.addEventListener('click', () => {
      if (progSettingsOverlay) progSettingsOverlay.style.display = 'none';
    });
  }

  window.openProgramSettings = function(programId, programTitle) {
    if (!progSettingsOverlay) return;
    const titleEl = document.getElementById('programSettingsTitle');
    if (titleEl) titleEl.textContent = programTitle || 'Program Settings';

    const listEl  = document.getElementById('programTagsList');
    const input   = document.getElementById('programTagInput');
    const addBtn  = document.getElementById('programTagAddBtn');
    const tagKey  = 'prog:' + programId;

    // Only show tag section if tag mode is on
    const tagSection = document.getElementById('programSettingsTagSection');
    if (tagSection) tagSection.style.display = tagMode ? '' : 'none';

    if (tagMode && listEl) {
      function renderProgTags() {
        const tags = window.getTagsForKey(tagKey);
        listEl.innerHTML = tags.length
          ? tags.map((t, i) => `<span class="tag-chip">${t}<button class="tag-chip-del" data-i="${i}">×</button></span>`).join('')
          : '<span class="tag-empty">No tags yet</span>';
        listEl.querySelectorAll('.tag-chip-del').forEach(btn => {
          btn.addEventListener('click', () => {
            const cur = window.getTagsForKey(tagKey);
            cur.splice(parseInt(btn.dataset.i), 1);
            window.setTagsForKey(tagKey, cur);
            renderProgTags();
          });
        });
      }
      renderProgTags();
      if (input) input.value = '';

      const newAdd = addBtn.cloneNode(true);
      addBtn.parentNode.replaceChild(newAdd, addBtn);
      newAdd.addEventListener('click', () => {
        const val = document.getElementById('programTagInput').value.trim().toLowerCase();
        if (!val) return;
        const cur = window.getTagsForKey(tagKey);
        if (!cur.includes(val)) { cur.push(val); window.setTagsForKey(tagKey, cur); }
        document.getElementById('programTagInput').value = '';
        renderProgTags();
      });
      document.getElementById('programTagInput').addEventListener('keydown', e => {
        if (e.key === 'Enter') { e.preventDefault(); document.getElementById('programTagAddBtn').click(); }
      });
    }

    progSettingsOverlay.style.display = 'flex';
  };

  // Init
  tagMode = localStorage.getItem('tagMode') === 'true';
  applyTagMode();
})();
