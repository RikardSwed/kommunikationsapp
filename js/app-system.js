// app-system.js — feedback mode settings, access levels, input bundles, progress bar
// Part of Deckstack v1.25.0

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

if (homeSettingsBtn) {
  homeSettingsBtn.addEventListener('click', () => {
    feedbackModeToggle.checked = feedbackMode;
    navToSettings();
  });
  homeSettingsBtn.addEventListener('touchend', e => { e.preventDefault(); homeSettingsBtn.click(); }, { passive: false });
}

const homeSettingsBackBtn = document.getElementById('homeSettingsBackBtn');
if (homeSettingsBackBtn) {
  homeSettingsBackBtn.addEventListener('click', navFromSettings);
  homeSettingsBackBtn.addEventListener('touchend', e => { e.preventDefault(); navFromSettings(); }, { passive: false });
}
const devSettingsDoneBtn = document.getElementById('devSettingsDoneBtn');
if (devSettingsDoneBtn) {
  devSettingsDoneBtn.addEventListener('click', navFromSettings);
  devSettingsDoneBtn.addEventListener('touchend', e => { e.preventDefault(); navFromSettings(); }, { passive: false });
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
  if (window.updateModeGearVisibility) window.updateModeGearVisibility();
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
    const stored = localStorage.getItem(LEVEL_KEY) || 'complete';
    // Lifetime Pro (one-time purchase): the level never drops below pro
    if (stored === 'freemium') {
      try {
        const owned = JSON.parse(localStorage.getItem('ds_extended_owned')) || [];
        if (owned.includes('lifetime-pro')) return 'pro';
      } catch {}
    }
    return stored;
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

  // ── Program routes: is this pack delivered via a Program, and if so is
  //    any of its sections unlocked (all previous checkpoints passed)? ──────
  function _programState(packKey) {
    const state = { inAnyProgram: false, availableRoute: false, lockedRoute: false };
    if (typeof programsData === 'undefined' || !Array.isArray(programsData)) return state;
    let progress = {};
    try { progress = JSON.parse(localStorage.getItem('ds_program_progress')) || {}; } catch {}
    const cpPassed = (progId, cpId) => !!(progress[progId] && progress[progId][cpId]);
    const level   = getLevel();
    const isProUp = level === 'pro' || level === 'complete';
    const extIds  = window.EXTENDED_PROGRAM_IDS || ['conversation-skills'];
    const owned   = getExtendedOwned();
    programsData.forEach(prog => {
      const isExt     = extIds.includes(prog.id);
      const progOwned = !isExt || level === 'complete' || owned.includes(prog.id);
      prog.sections.forEach((sec, si) => {
        if (!sec.packs || !sec.packs.some(p => p.key === packKey)) return;
        state.inAnyProgram = true;
        if (!progOwned) return;
        // Section unlocked = every previous checkpoint passed
        for (let i = 0; i < si; i++) {
          const cp = prog.sections[i].checkpoint;
          if (cp && !cpPassed(prog.id, cp.id)) return;
        }
        // Extended programs require Pro even when owned (yearly Pro model)
        if (isExt && !isProUp) state.lockedRoute = true;
        else state.availableRoute = true;
      });
    });
    return state;
  }

  // ── Pack visibility — the single source of truth for every surface ──────
  // 'available' — fully usable
  // 'locked'    — shown with a Pro badge; tapping shows the upgrade toast
  // 'hidden'    — not shown anywhere (packs, topics, search, favorites, folders)
  function packVisibility(packKey) {
    const level = getLevel();
    if (level === 'complete') return 'available';
    const cfg = PACK_CONFIG[packKey];
    const isProUp = level === 'pro';
    let standalone = 'none';
    if (cfg) {
      if (cfg.minLevel === 'extended') {
        // Extended packs require BOTH purchase and an active Pro plan
        if (!getExtendedOwned().includes(packKey)) standalone = 'hidden';
        else standalone = isProUp ? 'available' : 'locked';
      } else if (cfg.minLevel === 'complete') {
        standalone = 'hidden';
      } else if (levelIndex(level) >= levelIndex(cfg.minLevel)) {
        standalone = 'available';
      } else {
        standalone = 'locked';
      }
    }
    const prog = _programState(packKey);
    if (standalone === 'available' || prog.availableRoute) return 'available';
    if (standalone === 'locked'    || prog.lockedRoute)    return 'locked';
    if (cfg || prog.inAnyProgram) return 'hidden';
    return 'available';   // unknown pack: no config, not in any program
  }

  function canAccess(packKey) {
    return packVisibility(packKey) === 'available';
  }

  function badgeLabel(packKey) {
    // Locked packs always upsell Pro (extended purchases also require Pro)
    if (packVisibility(packKey) === 'locked') {
      return { text: 'Pro', cls: 'pack-lock-badge--pro' };
    }
    const cfg = PACK_CONFIG[packKey];
    if (cfg && cfg.minLevel === 'extended') {
      return { text: 'Extended', cls: 'pack-lock-badge--extended' };
    }
    return null;
  }

  // Apply to all collection-card elements that have data-key
  function applyAccessLevel() {
    const curLevel = getLevel();
    document.querySelectorAll('.collection-card[data-key]').forEach(card => {
      // Skip cards not in Library (e.g. recommended, dashboard cards)
      if (!card.closest('#libTabPacks, #libTabTopics, #libTabFavorites')) return;
      const key = card.dataset.key;
      const vis = packVisibility(key);
      const oldBadge = card.querySelector('.pack-lock-badge');
      if (oldBadge) oldBadge.remove();
      card.style.display = (vis === 'hidden') ? 'none' : '';
      card.classList.toggle('collection-card--locked', vis === 'locked');
      if (vis === 'locked') {
        const badge = badgeLabel(key);
        if (badge) {
          const el = document.createElement('div');
          el.className = `pack-lock-badge ${badge.cls}`;
          el.textContent = badge.text;
          card.appendChild(el);
        }
        // Static listeners from app-core still fire, but showModeScreen's
        // access gate turns the tap into the upgrade toast.
        card.onclick = null;
        card.ontouchend = null;
      }
    });
    // Topics (13): hide topic groups with no visible pack. Complete shows
    // every topic, including empty ones.
    document.querySelectorAll('#libTabTopics .topic-group').forEach(group => {
      if (curLevel === 'complete') { group.style.display = ''; return; }
      const anyVisible = Array.from(group.querySelectorAll('.collection-card[data-key]'))
        .some(c => c.style.display !== 'none');
      group.style.display = anyVisible ? '' : 'none';
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
    // Favorites lists are rendered from data, not static cards — refresh
    // them so visibility changes take effect there too.
    if (window._favRenderTab)  window._favRenderTab();
    if (window._favRenderDash) window._favRenderDash();
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
        // Uppgift 20a — remove pointerEvents:none so click can fire toast
        el.style.pointerEvents = '';
        // Bind locked-click toast (idempotent via dataset flag)
        // Locked-mode taps are gated centrally in addModeListener's launch()
        // (app-core.js) — that path covers both touchend and click.
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
      if (icon)  icon.className  = 'ti ti-diamond';
      if (label) label.textContent = 'Extended';
    }
  }

  // Expose for other modules
  window.accessLevel = { getLevel, canAccess, badgeLabel, applyModeLocks, updateNavUpgradeBtn, packVisibility, applyAccessLevel };
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
      description: '2 sequences available to all users.',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '2 additional sequences — 4 total with Free. Unlocked with Pro.',
    },
    {
      id: 'workplace',
      tier: 'pro-opt',
      name: 'Workplace & Social',
      description: '3 sequences for professional situations — colleagues, managers, and meetings.',
    },
    {
      id: 'domestic',
      tier: 'extended',
      name: 'Domestic Situations',
      description: '3 sequences for home and close relationships — partners, family, and housemates.',
    },
  ]
};
window.BUNDLE_DEFS = BUNDLE_DEFS;

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

  const isExtendedBundleOwned = (bundleId) =>
    level === 'complete' || extOwned.includes(`${packKey}::${bundleId}`);

  const canUseTier = (tier, bundleId) => {
    if (tier === 'free') return true;
    if (tier === 'pro' || tier === 'pro-opt') return level === 'pro' || level === 'complete';
    // Extended bundles require pro/complete level AND ownership —
    // freemium always sees only the free bundle
    if (tier === 'extended') return (level === 'pro' || level === 'complete') && isExtendedBundleOwned(bundleId);
    return false;
  };

  const saved = getBundleState(packKey) || [];
  const proOffMarker = saved.includes('pro:off');
  const hasProBundle = defs.some(b => b.tier === 'pro');
  const hasFreeBundle = defs.some(b => b.tier === 'free');
  const isPro = canUseTier('pro', 'pro');

  // Base bundles (auto, not toggleable).
  // The free bundle is tied to the pro bundle: pro's cards are the EXTRAS on
  // top of free, so together they form the "pro experience". When a pro user
  // turns the pro bundle off, free goes with it — only explicitly enabled
  // bundles (workplace/domestic etc.) remain. Free stands alone only for
  // freemium users, or in packs that have no pro bundle at all.
  let base = [];
  const proOn = isPro && hasProBundle && !proOffMarker;
  if (proOn) {
    if (hasFreeBundle) base.push('free');
    base.push('pro');
  } else if (!isPro || !hasProBundle) {
    // Freemium, or pack without a pro bundle: free is the standalone base
    if (hasFreeBundle) base.push('free');
  }
  // (isPro && hasProBundle && proOffMarker => no base; only toggled bundles show)

  // Opt-in bundles (pro-opt and owned extended) if saved
  const toggleable = defs.filter(b =>
    (b.tier === 'pro-opt' || b.tier === 'extended') &&
    canUseTier(b.tier, b.id) &&
    saved.includes(b.id)
  ).map(b => b.id);

  const result = [...new Set([...base, ...toggleable])];
  if (result.length === 0) {
    // Safety net — the UI enforces "at least one bundle active", but if state
    // ends up empty anyway (e.g. Clear Extended Purchases removed the only
    // active bundle while pro:off lingered) fall back to the default view
    // rather than an empty screen.
    return isPro && hasProBundle ? ['free', 'pro'] : ['free'];
  }
  return result;
}

// Filter inputs/cards by active bundle IDs.
// Only shows cards whose bundle is in the active list.
// Cards without a bundle field are always shown (backwards compatible).
window.filterInputsByBundle = function(inputs, packKey) {
  const defs = BUNDLE_DEFS[packKey];
  if (!defs) return inputs;
  const active = getActiveBundles(packKey);
  if (!active) return inputs;
  // Stable sort by bundle order in BUNDLE_DEFS (untagged cards count as free)
  const order = id => defs.findIndex(b => b.id === id);
  return inputs
    .filter(inp => !inp.bundle || active.includes(inp.bundle))
    .sort((a, b) => order(a.bundle) - order(b.bundle));
};

window.filterCardsByBundle = function(cards, packKey) {
  const defs = BUNDLE_DEFS[packKey];
  if (!defs) return cards;
  const active = getActiveBundles(packKey);
  if (!active) return cards;
  const order = id => defs.findIndex(b => b.id === id);
  return cards
    .filter(c => !c.bundle || active.includes(c.bundle))
    .sort((a, b) => order(a.bundle) - order(b.bundle));
};

// Render Input Bundles section into a settings panel
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
  const canUseTier = (tier, bundleId) => {
    if (tier === 'free') return true;
    if (tier === 'pro' || tier === 'pro-opt') return level === 'pro' || level === 'complete';
    if (tier === 'extended') return level === 'complete' ||
      (level === 'pro' && extOwned.includes(`${packKey}::${bundleId}`));
    return false;
  };

  const isPro = level === 'pro' || level === 'complete';
  const hasProBundle = defs.some(b => b.tier === 'pro');
  const saved = getBundleState(packKey) || [];
  const active = getActiveBundles(packKey);

  // Brief inline hint when a toggle is blocked ("at least one bundle")
  function showBundleHint() {
    let hint = section.querySelector('.bundle-hint');
    if (!hint) {
      hint = document.createElement('div');
      hint.className = 'bundle-hint';
      hint.style.cssText = 'font-size:12px;color:var(--ds-acc,#B05A28);padding:6px 2px 0;transition:opacity 0.4s;';
      section.appendChild(hint);
    }
    hint.textContent = 'At least one bundle must be active.';
    hint.style.opacity = '1';
    clearTimeout(hint._t);
    hint._t = setTimeout(() => { hint.style.opacity = '0'; }, 2200);
  }

  defs.forEach(bundle => {
    const accessible = canUseTier(bundle.tier, bundle.id);
    const row = document.createElement('div');

    if (bundle.tier === 'free') {
      if (hasProBundle && isPro) return; // hidden for pro — filter includes free cards automatically
      row.innerHTML = `
        <div class="bundle-row bundle-row--auto">
          <div class="bundle-info">
            <div class="bundle-name">${bundle.name}</div>
            <div class="bundle-desc-preview">${bundle.description}</div>
          </div>
          <span class="bundle-status">Active</span>
        </div>`;

    } else if (bundle.tier === 'pro') {
      if (!accessible) {
        // Freemium: locked with Pro badge
        row.innerHTML = `
          <div class="bundle-row bundle-row--locked">
            <div class="bundle-info">
              <div class="bundle-name">${bundle.name}</div>
              <div class="bundle-desc-preview">${bundle.description}</div>
            </div>
            <span class="bundle-status bundle-status--locked">Pro</span>
          </div>`;
      } else {
        // Pro users: toggleable — can switch off if another bundle is on
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
            if (!this.checked) {
              // Turning pro off also removes free (they belong together), so
              // at least one other bundle must be active to take over.
              const otherActive = defs.some(b =>
                (b.tier === 'pro-opt' || b.tier === 'extended') &&
                canUseTier(b.tier, b.id) &&
                cur.includes(b.id)
              );
              if (!otherActive) { this.checked = true; showBundleHint(); return; }
              setBundleState(packKey, [...cur.filter(id => id !== 'pro:off'), 'pro:off']);
            } else {
              // Remove pro:off marker to re-enable pro (free follows along)
              setBundleState(packKey, cur.filter(id => id !== 'pro:off'));
            }
          });
        }
      }

    } else if (bundle.tier === 'pro-opt' || bundle.tier === 'extended') {
      if (!accessible) {
        // Extended bundles the user bought stay listed when Pro lapses,
        // with a Pro badge and an upgrade toast (yearly Pro model).
        const ownedExt = bundle.tier === 'extended' && extOwned.includes(`${packKey}::${bundle.id}`);
        if (!ownedExt) return;
        row.innerHTML = `
          <div class="bundle-row bundle-row--locked">
            <div class="bundle-info">
              <div class="bundle-name">${bundle.name}</div>
              <div class="bundle-desc-preview">${bundle.description}</div>
            </div>
            <span class="bundle-status bundle-status--locked">Pro</span>
          </div>`;
        row.addEventListener('click', () => {
          if (window.showToast) showToast('This bundle requires Pro. Upgrade to unlock it.');
        });
        section.appendChild(row);
        return;
      }
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
          if (!this.checked) {
            // At least one bundle must stay active: pro (which carries free),
            // another opt-in/extended bundle — or, in packs without a pro
            // bundle, the standalone free base.
            const proIsOn = hasProBundle && isPro && !cur.includes('pro:off');
            const otherOptActive = defs.some(b =>
              b.id !== bundle.id &&
              (b.tier === 'pro-opt' || b.tier === 'extended') &&
              canUseTier(b.tier, b.id) &&
              cur.includes(b.id)
            );
            const freeStandsAlone = !hasProBundle && defs.some(b => b.tier === 'free');
            if (!proIsOn && !otherOptActive && !freeStandsAlone) {
              this.checked = true; showBundleHint(); return;
            }
            setBundleState(packKey, cur.filter(id => id !== bundle.id));
          } else {
            setBundleState(packKey, [...new Set([...cur, bundle.id])]);
          }
        });
      }
    }  // end else if pro-opt/extended

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

// NOTE (v1.25.0): The render/progress-bar monkey-patch block that used to
// live here has been removed. It referenced functions from the deleted beta
// modes (msRender, guidedRender) which threw a ReferenceError at load time
// and silently killed everything below this point (feedback hooks, tag mode,
// Clear Extended Purchases, al-suggest mode). Feedback bars, access-level
// bars and progress-bar updates are now built into mode-engine.js.

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
    if (window.updateModeGearVisibility) window.updateModeGearVisibility();
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
  // Uppgift 9 — close on backdrop click
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });

  // Uppgift 8 — show gear only when at least one feedback mode is active
  function updateModeGearVisibility() {
    const gearBtn = document.getElementById('modePackSettingsBtn');
    const pinBtn  = document.getElementById('modePinBtn');
    if (!gearBtn) return;
    const anyActive = feedbackMode || alSuggestMode ||
      (localStorage.getItem('tagMode') === 'true');
    gearBtn.style.display = anyActive ? '' : 'none';
    if (pinBtn) {
      pinBtn.classList.toggle('mode-pin-centered', !anyActive);
    }
  }
  // Expose so settings toggles can trigger a refresh
  window.updateModeGearVisibility = updateModeGearVisibility;
  updateModeGearVisibility();
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

// v1.26.26 dev tools: clear redeemed store codes (list 7 #2) and reset the
// first-run state — favorites, continue card, tap hint counter (list 7 #5)
const clearCodesBtn = document.getElementById('clearCodesBtn');
if (clearCodesBtn) clearCodesBtn.addEventListener('click', () => {
  localStorage.removeItem('ds_redeemed_codes');
  if (window.renderExtendedStore) renderExtendedStore();
  if (window.showToast) showToast('Redeemed codes cleared.');
});

const resetFirstRunBtn = document.getElementById('resetFirstRunBtn');
if (resetFirstRunBtn) resetFirstRunBtn.addEventListener('click', () => {
  ['fav_packs', 'dash_last_pack', 'ds_last_modes', 'ds_tap_hint_count',
   'ds_onboarding_done', 'ds_onboarding', 'ds_reco_packs'].forEach(k => localStorage.removeItem(k));
  if (window._favRenderTab)  window._favRenderTab();
  if (window._favRenderDash) window._favRenderDash();
  if (window.renderContinueCard) window.renderContinueCard();
  if (window.showToast) showToast('Favorites, continue, tap hint and onboarding reset.');
});

// ─── ABOUT & PRIVACY (v1.26.36) ────────────────────────────────────────────
(function initAbout() {
  const btn     = document.getElementById('aboutBtn');
  const overlay = document.getElementById('aboutOverlay');
  const close   = document.getElementById('aboutClose');
  const verEl   = document.getElementById('aboutVersion');
  if (!btn || !overlay) return;
  if (verEl && typeof VERSION !== 'undefined') verEl.textContent = VERSION;
  btn.addEventListener('click', () => overlay.classList.add('open'));
  if (close) close.addEventListener('click', () => overlay.classList.remove('open'));
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });
})();

// ─── DEVELOPER SETTINGS UNLOCK (v1.26.35) ──────────────────────────────
// The gear menu is the USER settings screen. Developer rows live in
// #devSection, hidden until the version number is tapped 7 times (the classic
// Android build-number gesture). Persisted in ds_dev_unlocked; the "Hide
// developer settings" row inside the section reverses it.
(function initDevUnlock() {
  const KEY = 'ds_dev_unlocked';
  const sec = document.getElementById('devSection');
  const ver = document.getElementById('homeSettingsVersion');
  if (!sec || !ver) return;
  const apply = on => { sec.style.display = on ? '' : 'none'; };
  apply(localStorage.getItem(KEY) === 'true');
  let taps = 0, timer = null;
  const onTap = () => {
    if (localStorage.getItem(KEY) === 'true') return;
    taps++;
    clearTimeout(timer);
    timer = setTimeout(() => { taps = 0; }, 1500);
    if (taps >= 7) {
      localStorage.setItem(KEY, 'true');
      apply(true);
      taps = 0;
      if (window.showToast) showToast('Developer settings unlocked.');
    } else if (taps >= 4 && window.showToast) {
      showToast((7 - taps) + ' taps from developer settings\u2026');
    }
  };
  ver.addEventListener('click', onTap);
  const hideBtn = document.getElementById('hideDevBtn');
  if (hideBtn) hideBtn.addEventListener('click', () => {
    localStorage.removeItem(KEY);
    apply(false);
    if (window.showToast) showToast('Developer settings hidden.');
  });
})();

// Replay onboarding immediately: clear the flag and restart the app so the
// full first-run experience (splash -> onboarding) runs again.
const replayOnboardingBtn = document.getElementById('replayOnboardingBtn');
if (replayOnboardingBtn) replayOnboardingBtn.addEventListener('click', () => {
  localStorage.removeItem('ds_onboarding_done');
  localStorage.removeItem('ds_onboarding');
  localStorage.removeItem('ds_reco_packs');
  location.reload();
});

// ─── DATA BACKUP: EXPORT / IMPORT (v1.26.34) ─────────────────────────────
// Everything the app knows lives in localStorage (progress, favorites,
// redeemed codes, settings, editor packs). Export shows it all as copyable
// JSON; import overwrites from pasted JSON and reloads. Modal + clipboard is
// used instead of file download, which installed iOS web apps don't support.
(function initDataBackup() {
  function buildModal(id, title, buttonLabel, readonly) {
    let ov = document.getElementById(id);
    if (ov) return ov;
    ov = document.createElement('div');
    ov.id = id;
    ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.45);z-index:10000;display:none;align-items:center;justify-content:center;padding:20px;';
    ov.innerHTML =
      '<div style="background:var(--ds-card,#fff);border-radius:16px;max-width:520px;width:100%;max-height:80vh;display:flex;flex-direction:column;padding:16px;box-shadow:0 8px 32px rgba(0,0,0,0.25);">' +
        '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">' +
          '<strong style="font-size:15px;">' + title + '</strong>' +
          '<button data-close style="border:none;background:none;font-size:18px;cursor:pointer;padding:4px 8px;">\u2715</button>' +
        '</div>' +
        '<textarea data-ta ' + (readonly ? 'readonly ' : '') + 'spellcheck="false" placeholder="' + (readonly ? '' : 'Paste your exported Deckstack data here...') + '" style="flex:1;min-height:220px;font-family:ui-monospace,Menlo,monospace;font-size:12px;border:1px solid var(--ds-border,#ddd);border-radius:10px;padding:10px;resize:none;-webkit-user-select:text;user-select:text;"></textarea>' +
        '<button data-action style="margin-top:12px;font-size:14px;font-weight:600;color:#fff;background:#2c7a4b;border:none;border-radius:10px;padding:10px;cursor:pointer;">' + buttonLabel + '</button>' +
      '</div>';
    document.body.appendChild(ov);
    ov.addEventListener('click', e => { if (e.target === ov) ov.style.display = 'none'; });
    ov.querySelector('[data-close]').addEventListener('click', () => { ov.style.display = 'none'; });
    return ov;
  }

  const exportBtn = document.getElementById('exportDataBtn');
  if (exportBtn) exportBtn.addEventListener('click', () => {
    const ov = buildModal('dataExportOverlay', 'Your Deckstack data', 'Copy to clipboard', true);
    const dump = { _deckstack: true, version: typeof VERSION !== 'undefined' ? VERSION : '', exportedAt: new Date().toISOString(), data: {} };
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      dump.data[k] = localStorage.getItem(k);
    }
    const ta = ov.querySelector('[data-ta]');
    ta.value = JSON.stringify(dump, null, 2);
    const copyBtn = ov.querySelector('[data-action]');
    copyBtn.onclick = () => {
      const done = () => { if (window.showToast) showToast('Copied - save it somewhere safe.'); };
      const fallback = () => {
        ta.focus(); ta.select();
        try { document.execCommand('copy'); done(); }
        catch (e) { if (window.showToast) showToast('Copy failed - select the text manually.'); }
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(ta.value).then(done).catch(fallback);
      } else fallback();
    };
    ov.style.display = 'flex';
  });

  const importBtn = document.getElementById('importDataBtn');
  if (importBtn) importBtn.addEventListener('click', () => {
    const ov = buildModal('dataImportOverlay', 'Restore Deckstack data', 'Restore & reload', false);
    const ta = ov.querySelector('[data-ta]');
    ta.value = '';
    const applyBtn = ov.querySelector('[data-action]');
    applyBtn.onclick = () => {
      let dump;
      try { dump = JSON.parse(ta.value); } catch (e) {
        if (window.showToast) showToast('Not valid JSON - paste the whole export.');
        return;
      }
      if (!dump || dump._deckstack !== true || typeof dump.data !== 'object') {
        if (window.showToast) showToast('This does not look like a Deckstack export.');
        return;
      }
      if (!confirm('Restore this backup? Current data in the app will be overwritten.')) return;
      Object.keys(dump.data).forEach(k => {
        try { localStorage.setItem(k, dump.data[k]); } catch (e) {}
      });
      location.reload();
    };
    ov.style.display = 'flex';
  });
})();

// Export pack tags as JSON. Shown in a copyable modal rather than as a
// blob download — installed iOS/iPadOS web apps can't download files, which
// is why the previous <a download> approach silently did nothing there.
const exportTagsBtn = document.getElementById('exportTagsBtn');
if (exportTagsBtn) exportTagsBtn.addEventListener('click', () => {
  try {
    // Union of base packTags keys and any user-edited keys (ds_tag_edits
    // can hold keys that don't exist in tagsData.js, e.g. 'prog:...').
    const keys = new Set(typeof packTags !== 'undefined' ? Object.keys(packTags) : []);
    try {
      const edits = JSON.parse(localStorage.getItem('ds_tag_edits')) || {};
      Object.keys(edits).forEach(k => keys.add(k));
    } catch (e2) {}
    const result = {};
    [...keys].sort().forEach(key => {
      result[key] = window.getTagsForKey
        ? window.getTagsForKey(key)
        : ((typeof packTags !== 'undefined' && packTags[key]) || []);
    });
    const json = JSON.stringify(result, null, 2);

    // Build (or reuse) the export modal
    let ov = document.getElementById('tagExportOverlay');
    if (!ov) {
      ov = document.createElement('div');
      ov.id = 'tagExportOverlay';
      ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.45);z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px;';
      ov.innerHTML =
        '<div style="background:var(--ds-card,#fff);border-radius:16px;max-width:520px;width:100%;max-height:80vh;display:flex;flex-direction:column;padding:16px;box-shadow:0 8px 32px rgba(0,0,0,0.25);">' +
          '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">' +
            '<strong style="font-size:15px;">Pack tags — JSON</strong>' +
            '<button id="tagExportClose" style="border:none;background:none;font-size:18px;cursor:pointer;padding:4px 8px;">\u2715</button>' +
          '</div>' +
          '<textarea id="tagExportText" readonly spellcheck="false" style="flex:1;min-height:220px;font-family:ui-monospace,Menlo,monospace;font-size:12px;border:1px solid var(--ds-border,#ddd);border-radius:10px;padding:10px;resize:none;-webkit-user-select:text;user-select:text;"></textarea>' +
          '<button id="tagExportCopy" style="margin-top:12px;font-size:14px;font-weight:600;color:#fff;background:#2c7a4b;border:none;border-radius:10px;padding:10px;cursor:pointer;">Copy to clipboard</button>' +
        '</div>';
      document.body.appendChild(ov);
      ov.addEventListener('click', e => { if (e.target === ov) ov.style.display = 'none'; });
      ov.querySelector('#tagExportClose').addEventListener('click', () => { ov.style.display = 'none'; });
      ov.querySelector('#tagExportCopy').addEventListener('click', () => {
        const ta = ov.querySelector('#tagExportText');
        const done = () => { if (window.showToast) showToast('Copied to clipboard.'); };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(ta.value).then(done).catch(() => {
            ta.focus(); ta.select();
            try { document.execCommand('copy'); done(); }
            catch (e3) { if (window.showToast) showToast('Copy failed — select the text manually.'); }
          });
        } else {
          ta.focus(); ta.select();
          try { document.execCommand('copy'); done(); }
          catch (e3) { if (window.showToast) showToast('Copy failed — select the text manually.'); }
        }
      });
    }
    ov.querySelector('#tagExportText').value = json;
    ov.style.display = 'flex';
  } catch (e) {
    if (window.showToast) showToast('Export failed: ' + e.message);
  }
});

const clearExtendedBtn = document.getElementById('clearExtendedBtn');
if (clearExtendedBtn) clearExtendedBtn.addEventListener('click', () => {
  // Rensa purchases
  localStorage.removeItem('ds_extended_owned');
  if (window.accessLevel && window.accessLevel.applyAccessLevel) window.accessLevel.applyAccessLevel();
  // Rensa bundle states explicit per känd pack
  const knownPacks = Object.keys(BUNDLE_DEFS);
  knownPacks.forEach(packKey => {
    const k = `bundles:${packKey}`;
    try {
      const cur = JSON.parse(localStorage.getItem(k)) || [];
      const filtered = cur.filter(id => id !== 'domestic' && id !== 'pro:off');
      if (filtered.length) localStorage.setItem(k, JSON.stringify(filtered));
      else localStorage.removeItem(k);
    } catch(e) { localStorage.removeItem(`bundles:${packKey}`); }
  });
  // Visuell feedback — grön "Cleared ✓" i 2.5 sek
  clearExtendedBtn.textContent = 'Cleared ✓';
  clearExtendedBtn.style.cssText = 'font-size:13px;color:#1a7a3a;background:#eafaf1;border:1px solid #a8d5ba;border-radius:8px;padding:6px 12px;cursor:pointer;';
  setTimeout(() => {
    clearExtendedBtn.textContent = 'Clear';
    clearExtendedBtn.style.cssText = 'font-size:13px;color:#c0392b;background:#fdf0ee;border:1px solid #f5c6c2;border-radius:8px;padding:6px 12px;cursor:pointer;';
  }, 2500);
  if (window._applyAccessLevel) window._applyAccessLevel();
  if (window.renderExtendedStore) window.renderExtendedStore();
  if (window.renderProgramList) window.renderProgramList();
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
      if (window.updateModeGearVisibility) window.updateModeGearVisibility();
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
  // Uppgift 9 — close on backdrop click
  if (progSettingsOverlay) {
    progSettingsOverlay.addEventListener('click', e => {
      if (e.target === progSettingsOverlay) progSettingsOverlay.style.display = 'none';
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

// ─── ONBOARDING (v1.26.33) ────────────────────────────────────────────────
// First-run intro shown once, revealed as the splash fades. Steps: welcome,
// three quick questions (habit / interests / training style) and a short
// how-it-works. Answers are stored in ds_onboarding for future
// personalisation; ds_onboarding_done gates the whole flow.
(function initOnboarding() {
  const DONE_KEY = 'ds_onboarding_done';
  const DATA_KEY = 'ds_onboarding';
  const screen = document.getElementById('onboardingScreen');
  if (!screen) return;
  if (localStorage.getItem(DONE_KEY)) return;   // already seen

  const steps   = Array.from(screen.querySelectorAll('.ob-step'));
  const dotsEl  = document.getElementById('obDots');
  const nextBtn = document.getElementById('obNextBtn');
  const skipBtn = document.getElementById('obSkipBtn');
  let step = 0;
  const answers = {};

  // Build progress dots
  dotsEl.innerHTML = steps.map((_, i) =>
    '<span class="ob-dot' + (i === 0 ? ' ob-dot--active' : '') + '"></span>').join('');
  const dots = Array.from(dotsEl.children);

  // A step is "answerable" if it contains an .ob-options block. Single-select
  // steps require a pick before Continue; multi-select can be skipped (0 picks
  // is a valid answer).
  function stepOptions(i) { return steps[i].querySelector('.ob-options'); }
  function requiresPick(i) {
    const opts = stepOptions(i);
    return opts && opts.dataset.type === 'single';
  }
  function hasPick(i) {
    const opts = stepOptions(i);
    return opts && !!opts.querySelector('.ob-option--selected');
  }

  function updateNext() {
    nextBtn.disabled = requiresPick(step) && !hasPick(step);
    nextBtn.textContent = (step === steps.length - 1) ? 'Start training' : 'Continue';
  }

  function showStep(i) {
    steps.forEach((s, j) => { s.style.display = j === i ? 'flex' : 'none'; });
    dots.forEach((d, j) => d.classList.toggle('ob-dot--active', j === i));
    step = i;
    updateNext();
  }

  // Option selection (event delegation per options block)
  screen.querySelectorAll('.ob-options').forEach(opts => {
    const multi = opts.dataset.type === 'multi';
    opts.addEventListener('click', e => {
      const btn = e.target.closest('.ob-option');
      if (!btn) return;
      if (multi) {
        // Keep PICK order (not DOM order) — the first thing the user taps
        // is treated as their top priority for favorites/recommendations.
        const key = opts.dataset.key;
        answers[key] = answers[key] || [];
        if (btn.classList.toggle('ob-option--selected')) {
          answers[key].push(btn.dataset.val);
        } else {
          answers[key] = answers[key].filter(v => v !== btn.dataset.val);
        }
      } else {
        opts.querySelectorAll('.ob-option').forEach(b => b.classList.remove('ob-option--selected'));
        btn.classList.add('ob-option--selected');
        answers[opts.dataset.key] = btn.dataset.val;
        // Habit step: reveal the reassurance line once a choice is made
        const reassure = opts.parentNode.querySelector('.ob-reassure');
        if (reassure) reassure.style.visibility = 'visible';
      }
      updateNext();
    });
  });

  // Interest chip -> pack keys. Order inside each entry = priority.
  const OB_PACK_MAP = {
    starting:     ['startingconnecting'],
    conversation: ['conversational'],
    depth:        ['conversationaldepth'],
    storytelling: ['storytelling'],
    humour:       ['humour', 'teasing'],
    listening:    ['listeningresponding'],
    feedback:     ['criticism'],
    boundaries:   ['assertive'],
    influence:    ['influenceframing'],
  };

  // Turn the picked interests into an ordered list of {key, label} packs
  // (labels resolved from the library DOM so they always match the data),
  // then: store them for the Recommended list + Start-here card, and seed
  // favorites if the user has none yet.
  function personalize() {
    const interests = answers.interests || [];
    if (!interests.length) return;
    const labelOf = {};
    document.querySelectorAll('#libTabPacks .collection-card').forEach(c => {
      if (c.dataset.key) labelOf[c.dataset.key] = c.dataset.label;
    });
    const packs = [];
    interests.forEach(val => (OB_PACK_MAP[val] || []).forEach(key => {
      if (labelOf[key] && !packs.some(p => p.key === key)) {
        packs.push({ key, label: labelOf[key] });
      }
    }));
    if (!packs.length) return;
    try { localStorage.setItem('ds_reco_packs', JSON.stringify(packs)); } catch (e) {}
    // Seed favorites (max 4) only if the user has none
    try {
      const fav = JSON.parse(localStorage.getItem('fav_packs') || '[]');
      if (!fav.length) {
        localStorage.setItem('fav_packs', JSON.stringify(packs.slice(0, 4)));
        if (window._favRenderTab)  window._favRenderTab();
        if (window._favRenderDash) window._favRenderDash();
      }
    } catch (e) {}
    if (window._personalizeRecommended) window._personalizeRecommended();
    if (window.renderContinueCard) window.renderContinueCard();
  }

  function finish(skipped) {
    answers.skipped = !!skipped;
    answers.completedAt = new Date().toISOString();
    try { localStorage.setItem(DATA_KEY, JSON.stringify(answers)); } catch (e) {}
    localStorage.setItem(DONE_KEY, 'true');
    if (!skipped) personalize();
    screen.classList.add('ob-leaving');
    setTimeout(() => { screen.style.display = 'none'; }, 450);
  }

  nextBtn.addEventListener('click', () => {
    if (nextBtn.disabled) return;
    if (step < steps.length - 1) showStep(step + 1);
    else finish(false);
  });
  skipBtn.addEventListener('click', () => finish(true));

  // Reveal under the splash: the splash (z 9999) fades out on its own
  // schedule; the onboarding simply sits beneath it from the start.
  screen.style.display = 'flex';
  showStep(0);
})();
