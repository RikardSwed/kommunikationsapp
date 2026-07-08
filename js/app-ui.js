// app-ui.js — library, navigation tabs, dashboard, favorites, progress tracking, theme, splash
// Part of Deckstack v1.19.4 — split from app.js

// ─── TOPICS ACCORDION ───────────────────────────────────────────────────────

(function initTopics() {
  document.querySelectorAll('#libTabTopics .topic-header').forEach(header => {
    const group = header.parentElement;
    if (group.classList.contains('topic-group--empty')) return;
    const packs = group.querySelector('.topic-packs');
    if (!packs) return;

    let tStartY = 0, tMoved = false, tDidTouch = false;

    header.addEventListener('touchstart', e => {
      tStartY = e.touches[0].clientY; tMoved = false; tDidTouch = true;
    }, { passive: true });
    header.addEventListener('touchmove', e => {
      if (Math.abs(e.touches[0].clientY - tStartY) > 8) tMoved = true;
    }, { passive: true });
    header.addEventListener('touchend', () => {
      if (tMoved) return;
      toggle();
    });
    header.addEventListener('click', () => {
      if (tDidTouch) { tDidTouch = false; return; } // already handled by touchend
      toggle();
    });

    function toggle() {
      const isOpen = header.classList.contains('open');
      header.classList.toggle('open', !isOpen);
      packs.classList.toggle('open', !isOpen);
    }
  });

  // Pack cards inside topics
  document.querySelectorAll('#libTabTopics .collection-card').forEach(card => {
    let cStartY = 0, cMoved = false;
    card.addEventListener('touchstart', e => { cStartY = e.touches[0].clientY; cMoved = false; }, { passive: true });
    card.addEventListener('touchmove',  e => { if (Math.abs(e.touches[0].clientY - cStartY) > 8) cMoved = true; }, { passive: true });
    card.addEventListener('touchend', () => { if (!cMoved) showModeScreen(card.dataset.key, card.dataset.label); });
    card.addEventListener('click', () => showModeScreen(card.dataset.key, card.dataset.label));
  });
})();

// ─── LIBRARY SUB-NAV ────────────────────────────────────────────────────────

const LIB_TABS = {
  packs:     'libTabPacks',
  topics:    'libTabTopics',
  programs:  'libTabPrograms',
  folders:   'libTabFolders',
  favorites: 'libTabFavorites'
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
  function saveLastPack(key, label, progressPct) {
    localStorage.setItem(LASTPACK_KEY, JSON.stringify({ key, label, progressPct: progressPct || 0 }));
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
    lastPackCard.className = 'dash-continue-card';
    lastPackCard.innerHTML = `
      <div class="dash-continue-inner">
        <div>
          <div class="dash-continue-name">${last.label}</div>
          <div class="dash-continue-meta">${(()=>{const m=getLastMode&&getLastMode(last.key);const l={modeFlashcard:'Single Strategy',modeMemorize:'Memorize',modeFlow:'Sequences',modeCollections:'Collections',modeChallenges:'Challenges',modeMindset:'Mindset',modeHandsfree:'Handsfree',modeGuided:'Guided'};return m&&l[m]?l[m]:'Continue';})()}</div>
        </div>
        <div class="dash-continue-arrow">›</div>
      </div>
      <div class="dash-continue-progress">
        <div class="dash-continue-progress-fill" style="width:${last.progressPct || 0}%"></div>
      </div>`;
    let lpStartY = 0, lpMoved = false;
    lastPackCard.ontouchstart = e => { lpStartY = e.touches[0].clientY; lpMoved = false; };
    lastPackCard.ontouchmove  = e => { if (Math.abs(e.touches[0].clientY - lpStartY) > 8) lpMoved = true; };
    lastPackCard.ontouchend   = e => { if (!lpMoved) { launchLastMode(last.key, last.label); } };
    lastPackCard.onclick      = () => { launchLastMode(last.key, last.label); };
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
      let rStartY = 0, rMoved = false;
      el.ontouchstart = e => { rStartY = e.touches[0].clientY; rMoved = false; };
      el.ontouchmove  = e => { if (Math.abs(e.touches[0].clientY - rStartY) > 8) rMoved = true; };
      el.ontouchend   = () => {
        if (!rMoved) {
          const key   = el.dataset.key;
          const label = el.dataset.label;
          addRecent(query.trim());
          saveLastPack(key, label);
          exitSearch(false);
          showModeScreen(key, label);
        }
      };
      el.onclick = () => {
        const key   = el.dataset.key;
        const label = el.dataset.label;
        addRecent(query.trim());
        saveLastPack(key, label);
        exitSearch(false);
        showModeScreen(key, label);
      };
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
    renderRecent(); // show recent searches only when entering search mode
    runSearch(searchInput.value);
  }

  function exitSearch(clearInput = true) {
    searching = false;
    cancelBtn.textContent = '⚙️';
    cancelBtn.style.fontSize = '';
    if (clearInput) searchInput.value = '';
    searchClear.style.display = 'none';
    defaultView.style.display = '';
    searchView.style.display  = 'none';
    if (recentSection) recentSection.style.display = 'none'; // hide recent on exit
    searchInput.blur();
    updateWelcome();
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
  renderLastPack();

  // Recommended cards
  document.querySelectorAll('#dashRecommendedSection .collection-card').forEach(card => {
    let rSY = 0, rMv = false;
    card.ontouchstart = e => { rSY = e.touches[0].clientY; rMv = false; };
    card.ontouchmove  = e => { if (Math.abs(e.touches[0].clientY - rSY) > 8) rMv = true; };
    card.ontouchend   = () => { if (!rMv) showModeScreen(card.dataset.key, card.dataset.label); };
    card.onclick      = () => showModeScreen(card.dataset.key, card.dataset.label);
  });

})();

// Land on the Home tab by default
if (document.getElementById('dashboardScreen')) showTab('dashboard');

// ─── FAVORITES ──────────────────────────────────────────────────────────

(function initFavorites() {
  const FAV_KEY      = 'fav_packs';       // ordered array of {key, label}
  const TRAINED_KEY  = 'dash_last_pack';  // existing last-pack key
  const ALL_PACKS = [
    { key: 'assertive',      label: 'Assertive Communication' },
    { key: 'humour',         label: 'Humour Practise' },
    { key: 'teasing',        label: 'Teasing & Playfulness' },
    { key: 'criticism',      label: 'Criticism & Correction' },
    { key: 'conversational', label: 'Conversational Skills' }
  ];

  // ─ Storage helpers ──────────────────────────────────────────────────
  function getFavs() {
    try { return JSON.parse(localStorage.getItem(FAV_KEY)) || []; } catch { return []; }
  }
  function saveFavs(arr) {
    localStorage.setItem(FAV_KEY, JSON.stringify(arr));
  }
  function isFav(key) {
    return getFavs().some(f => f.key === key);
  }
  function toggleFav(key, label) {
    let arr = getFavs();
    if (arr.some(f => f.key === key)) {
      arr = arr.filter(f => f.key !== key);
    } else {
      arr.push({ key, label });
    }
    saveFavs(arr);
    return arr.some(f => f.key === key); // return new pinned state
  }

  // Record training time per pack for favorites sorting on Home
  const TRAINED_TIMES_KEY = 'fav_trained_times';
  function getTrainedTimes() {
    try { return JSON.parse(localStorage.getItem(TRAINED_TIMES_KEY)) || {}; } catch { return {}; }
  }
  window.recordPackTrained = function(key) {
    const times = getTrainedTimes();
    times[key] = Date.now();
    localStorage.setItem(TRAINED_TIMES_KEY, JSON.stringify(times));
  };

  // ─ Apply pinned state to all pin buttons ──────────────────────────────
  function refreshPinBtns() {
    document.querySelectorAll('.pin-btn').forEach(btn => {
      btn.classList.toggle('pinned', isFav(btn.dataset.key));
    });
    const modePinBtn = document.getElementById('modePinBtn');
    if (modePinBtn && activeCollectionKey) {
      modePinBtn.classList.toggle('pinned', isFav(activeCollectionKey));
    }
  }

  // ─ Library pack-card pin buttons ─────────────────────────────────────
  document.querySelectorAll('.pin-btn').forEach(btn => {
    const key   = btn.dataset.key;
    const pack  = ALL_PACKS.find(p => p.key === key);
    const label = pack ? pack.label : key;
    btn.addEventListener('click', e => {
      e.stopPropagation(); // don't open the pack
      toggleFav(key, label);
      refreshPinBtns();
      renderFavTab();
      renderDashFavs();
    });
    btn.addEventListener('touchend', e => {
      e.stopPropagation();
      e.preventDefault();
      toggleFav(key, label);
      refreshPinBtns();
      renderFavTab();
      renderDashFavs();
    }, { passive: false });
  });

  // ─ Mode screen pin button ───────────────────────────────────────────
  const modePinBtn = document.getElementById('modePinBtn');
  if (modePinBtn) {
    const doPinToggle = () => {
      if (!activeCollectionKey) return;
      const pack = ALL_PACKS.find(p => p.key === activeCollectionKey);
      toggleFav(activeCollectionKey, pack ? pack.label : activeCollectionKey);
      refreshPinBtns();
      renderFavTab();
      renderDashFavs();
    };
    modePinBtn.addEventListener('click', doPinToggle);
    modePinBtn.addEventListener('touchend', e => { e.preventDefault(); doPinToggle(); }, { passive: false });
  }

  // Update mode pin button whenever a pack is opened
  const _origShowModeForPin = showModeScreen;
  const _showModeWrapped = showModeScreen; // already defined above
  // Hook via MutationObserver on modeScreen visibility
  const modeScreenEl = document.getElementById('modeScreen');
  if (modeScreenEl) {
    new MutationObserver(() => {
      if (modeScreenEl.style.display === 'flex') refreshPinBtns();
    }).observe(modeScreenEl, { attributes: true, attributeFilter: ['style'] });
  }

  // ─ Favorites tab render ──────────────────────────────────────────────
  function renderFavTab() {
    const favs       = getFavs();
    const emptyState = document.getElementById('favEmptyState');
    const favList    = document.getElementById('favList');
    if (!favList) return;
    if (!favs.length) {
      if (emptyState) emptyState.style.display = '';
      favList.innerHTML = '';
      return;
    }
    if (emptyState) emptyState.style.display = 'none';
    favList.innerHTML = favs.map(f =>
      `<div class="collection-card fav-card" data-key="${f.key}" data-label="${f.label.replace(/"/g,'&quot;')}">
        <div>
          <div class="collection-name">${f.label}</div>
        </div>
        <div class="collection-arrow">›</div>
       </div>`
    ).join('');
    // Bind fav-card clicks → open pack
    favList.querySelectorAll('.fav-card').forEach(card => {
      let fStartY = 0, fMoved = false;
      card.addEventListener('touchstart', e => { fStartY = e.touches[0].clientY; fMoved = false; }, { passive: true });
      card.addEventListener('touchmove',  e => { if (Math.abs(e.touches[0].clientY - fStartY) > 8) fMoved = true; }, { passive: true });
      card.addEventListener('touchend',   e => { if (!fMoved) { e.preventDefault(); showModeScreen(card.dataset.key, card.dataset.label); } }, { passive: false });
      card.addEventListener('click',      () => showModeScreen(card.dataset.key, card.dataset.label));
    });
  }

  // ─ Home screen favorites render (up to 4, sorted by last trained) ───────
  function renderDashFavs() {
    const favSec  = document.getElementById('dashFavSection');
    const favList = document.getElementById('dashFavList');
    if (!favSec || !favList) return;
    const favs  = getFavs();
    if (!favs.length) { favSec.style.display = 'none'; return; }
    const times = getTrainedTimes();
    const sorted = [...favs].sort((a, b) => (times[b.key] || 0) - (times[a.key] || 0));
    const shown  = sorted.slice(0, 2);
    favSec.style.display = '';
    favList.innerHTML = `<div class="dash-fav-grid">${
      shown.map(f =>
        `<div class="dash-fav-card" data-key="${f.key}" data-label="${f.label.replace(/"/g,'&quot;')}">
          <div class="dash-fav-icon">${packIcon(f.key)}</div>
          <div class="dash-fav-name">${f.label}</div>
        </div>`
      ).join('')
    }</div>`;
    favList.querySelectorAll('.dash-fav-card').forEach(card => {
      let fStartY = 0, fMoved = false;
      card.ontouchstart = e => { fStartY = e.touches[0].clientY; fMoved = false; };
      card.ontouchmove  = e => { if (Math.abs(e.touches[0].clientY - fStartY) > 8) fMoved = true; };
      card.ontouchend   = () => { if (!fMoved) showModeScreen(card.dataset.key, card.dataset.label); };
      card.onclick      = () => showModeScreen(card.dataset.key, card.dataset.label);
    });
  }

  // ─ Init ─────────────────────────────────────────────────────────────────
  refreshPinBtns();
  renderFavTab();
  renderDashFavs();

  // Expose so showModeScreen patch can call recordPackTrained
  window._favRenderDash = renderDashFavs;

})();

// ─── PROGRESS TRACKING ───────────────────────────────────────────────────────────

(function initProgressTracking() {

  // ─ Storage keys ──────────────────────────────────────────────────────
  const K = {
    enabled:      'prog_enabled',
    streakMode:   'prog_streak_mode',    // 'card' | 'time'
    streakMinMin: 'prog_streak_min',     // minutes threshold for time mode
    weeklyGoal:   'prog_weekly_goal',    // minutes
    dailyGoal:    'prog_daily_goal',     // minutes or 0 = none
    sessions:     'prog_sessions',       // [{date, packKey, packLabel, minutes, cards}]
    streakCur:    'prog_streak_cur',
    streakBest:   'prog_streak_best',
    period:       'prog_period',         // 'week' | 'month'
  };

  // ─ Helpers ────────────────────────────────────────────────────────────────
  const get  = k => { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } };
  const set  = (k, v) => localStorage.setItem(k, JSON.stringify(v));
  const bool = k => get(k) === true;

  function todayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  }

  function getSessions() { return get(K.sessions) || []; }
  function saveSessions(s) { set(K.sessions, s); }

  function getSettings() {
    return {
      enabled:      bool(K.enabled),
      streakMode:   get(K.streakMode)   || 'card',
      streakMinMin: get(K.streakMinMin) || 5,
      weeklyGoal:   get(K.weeklyGoal)   || 60,
      dailyGoal:    get(K.dailyGoal)    || 0,
      period:       get(K.period)       || 'week',
    };
  }

  // ─ Session tracking ───────────────────────────────────────────────────
  // Time tracking: activity-based only.
  // - Visibility API: pause timer when app goes to background
  // - Inactivity timeout: stop counting if no card flip for 90 seconds
  // Only time with actual card flips within 90s counts.

  const INACTIVITY_LIMIT = 90; // seconds without a flip = inactive

  let _sessionPack       = null;
  let _sessionCards      = 0;
  let _activeSeconds     = 0;   // accumulated active seconds
  let _lastFlipTime      = null; // timestamp of last flip
  let _tickInterval      = null; // 1-second interval
  let _sessionActive     = false;

  function _startTick() {
    if (_tickInterval) return;
    _tickInterval = setInterval(() => {
      if (!_sessionActive || !_lastFlipTime) return;
      const secondsSinceFlip = (Date.now() - _lastFlipTime) / 1000;
      if (secondsSinceFlip < INACTIVITY_LIMIT) {
        _activeSeconds++;
      }
    }, 1000);
  }

  function _stopTick() {
    if (_tickInterval) { clearInterval(_tickInterval); _tickInterval = null; }
  }

  // Pause/resume on visibility change
  document.addEventListener('visibilitychange', () => {
    if (!_sessionActive) return;
    if (document.hidden) {
      _stopTick();
    } else {
      // Reset lastFlipTime so inactivity gap while hidden doesn't count
      _lastFlipTime = null;
      _startTick();
    }
  });

  window.progStartSession = function(packKey, packLabel) {
    if (!bool(K.enabled)) return;
    _sessionPack   = { key: packKey, label: packLabel };
    _sessionCards  = 0;
    _activeSeconds = 0;
    _lastFlipTime  = null;
    _sessionActive = true;
    _startTick();
  };

  window.progCardFlipped = function(cardIndex, cardTotal) {
    if (!bool(K.enabled) || !_sessionActive) return;
    _sessionCards++;
    _lastFlipTime = Date.now();
    // Update progress on the last pack using the session's pack info
    if (_sessionPack && cardTotal > 0 && cardIndex >= 0) {
      const pct = Math.round((cardIndex / cardTotal) * 100);
      try {
        localStorage.setItem('dash_last_pack', JSON.stringify({
          key: _sessionPack.key,
          label: _sessionPack.label,
          progressPct: pct
        }));
      } catch {}
    }
  };

  // Lightweight helper for modes that track position differently
  window.progSetProgress = function(pct) {
    if (!_sessionPack) return;
    try {
      localStorage.setItem('dash_last_pack', JSON.stringify({
        key: _sessionPack.key,
        label: _sessionPack.label,
        progressPct: Math.max(0, Math.min(100, Math.round(pct)))
      }));
    } catch {}
  };

  window.progEndSession = function() {
    if (!bool(K.enabled) || !_sessionPack) return;
    _stopTick();
    _sessionActive = false;
    const minutes = _activeSeconds / 60;
    if (minutes < 0.05 && _sessionCards === 0) {
      _sessionPack = null; _activeSeconds = 0; return;
    }
    const s = getSessions();
    s.push({
      date:      todayStr(),
      packKey:   _sessionPack.key,
      packLabel: _sessionPack.label,
      minutes:   Math.max(0, Math.round(minutes * 10) / 10),
      cards:     _sessionCards,
    });
    saveSessions(s);
    _sessionPack   = null;
    _activeSeconds = 0;
    _lastFlipTime  = null;
    _sessionCards  = 0;
    updateStreak();
    if (document.getElementById('progressScreen') &&
        document.getElementById('progressScreen').style.display !== 'none') {
      renderProgress();
    }
  };

  // ─ Streak ─────────────────────────────────────────────────────────────────
  function qualifiesForStreak(sessions, dateStr) {
    const s = getSettings();
    const daySess = sessions.filter(x => x.date === dateStr);
    if (!daySess.length) return false;
    if (s.streakMode === 'card') return daySess.some(x => x.cards > 0);
    const mins = daySess.reduce((a, x) => a + x.minutes, 0);
    return mins >= s.streakMinMin;
  }

  function updateStreak() {
    const sessions = getSessions();
    const today = todayStr();
    let cur = 0;
    let d = new Date();
    while (true) {
      const ds = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
      if (!qualifiesForStreak(sessions, ds)) break;
      cur++;
      d.setDate(d.getDate() - 1);
    }
    const best = Math.max(cur, get(K.streakBest) || 0);
    set(K.streakCur,  cur);
    set(K.streakBest, best);
  }

  // ─ Render ────────────────────────────────────────────────────────────────
  function renderProgress() {
    const s = getSettings();
    const disabled = document.getElementById('progressDisabledMsg');
    const content  = document.getElementById('progressContent');
    if (!s.enabled) {
      if (disabled) disabled.style.display = '';
      if (content)  content.style.display  = 'none';
      return;
    }
    if (disabled) disabled.style.display = 'none';
    if (content)  content.style.display  = '';

    const sessions = getSessions();
    const today = todayStr();

    // Streak
    updateStreak();
    const cur  = get(K.streakCur)  || 0;
    const best = get(K.streakBest) || 0;
    document.getElementById('progStreakNum').textContent  = cur;
    document.getElementById('progStreakBest').textContent = best;

    // Calendar — last 14 days
    const cal = document.getElementById('progCalendar');
    if (cal) {
      cal.innerHTML = '';
      for (let i = 13; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const ds = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
        const dot = document.createElement('div');
        dot.className = 'prog-cal-dot' +
          (qualifiesForStreak(sessions, ds) ? ' active' : '') +
          (ds === today ? ' today' : '');
        cal.appendChild(dot);
      }
    }

    // Period
    const period = s.period;
    const cutoff = new Date();
    if (period === 'week') cutoff.setDate(cutoff.getDate() - 6);
    else cutoff.setDate(cutoff.getDate() - 29);
    const cutoffStr = `${cutoff.getFullYear()}-${String(cutoff.getMonth()+1).padStart(2,'0')}-${String(cutoff.getDate()).padStart(2,'0')}`;
    const periodSess = sessions.filter(x => x.date >= cutoffStr);

    // Weekly goal ring
    const weekCutoff = new Date(); weekCutoff.setDate(weekCutoff.getDate() - 6);
    const weekStr = `${weekCutoff.getFullYear()}-${String(weekCutoff.getMonth()+1).padStart(2,'0')}-${String(weekCutoff.getDate()).padStart(2,'0')}`;
    const weekMins = sessions.filter(x => x.date >= weekStr).reduce((a, x) => a + x.minutes, 0);
    const wGoal = s.weeklyGoal;
    const wPct  = Math.min(100, Math.round((weekMins / wGoal) * 100));
    const circumference = 163.4;
    const wOffset = circumference - (circumference * wPct / 100);
    const ringFill = document.getElementById('progRingFill');
    if (ringFill) ringFill.style.strokeDashoffset = wOffset;
    const ringLabel = document.getElementById('progRingLabel');
    if (ringLabel) ringLabel.textContent = wPct + '%';
    const goalMain = document.getElementById('progGoalMain');
    if (goalMain) goalMain.textContent = `${Math.round(weekMins)} / ${wGoal} min`;

    // Daily goal ring
    const dailySection = document.getElementById('progDailySection');
    if (dailySection) dailySection.style.display = s.dailyGoal > 0 ? '' : 'none';
    if (s.dailyGoal > 0) {
      const dayMins = sessions.filter(x => x.date === today).reduce((a, x) => a + x.minutes, 0);
      const dPct = Math.min(100, Math.round((dayMins / s.dailyGoal) * 100));
      const dOffset = circumference - (circumference * dPct / 100);
      const dRing = document.getElementById('progDailyRingFill');
      if (dRing) dRing.style.strokeDashoffset = dOffset;
      const dLabel = document.getElementById('progDailyRingLabel');
      if (dLabel) dLabel.textContent = dPct + '%';
      const dMain = document.getElementById('progDailyGoalMain');
      if (dMain) dMain.textContent = `${Math.round(dayMins)} / ${s.dailyGoal} min`;
    }

    // Bars per pack
    const packTotals = {};
    periodSess.forEach(x => {
      if (!packTotals[x.packKey]) packTotals[x.packKey] = { label: x.packLabel, minutes: 0 };
      packTotals[x.packKey].minutes += x.minutes;
    });
    const sortedPacks = Object.values(packTotals).sort((a, b) => b.minutes - a.minutes);
    const maxMins = sortedPacks.length ? sortedPacks[0].minutes : 1;
    const barsEl = document.getElementById('progBars');
    const emptyEl = document.getElementById('progBarsEmpty');
    if (barsEl) {
      if (!sortedPacks.length) {
        barsEl.innerHTML = '';
        if (emptyEl) emptyEl.style.display = '';
      } else {
        if (emptyEl) emptyEl.style.display = 'none';
        barsEl.innerHTML = sortedPacks.map(p => {
          const pct = Math.round((p.minutes / maxMins) * 100);
          const label = Math.round(p.minutes) + 'm';
          return `<div class="prog-bar-row">
            <div class="prog-bar-name" title="${p.label}">${p.label}</div>
            <div class="prog-bar-track"><div class="prog-bar-fill" style="width:${pct}%"></div></div>
            <div class="prog-bar-val">${label}</div>
          </div>`;
        }).join('');
      }
    }

    // Totals
    const totalMin   = sessions.reduce((a, x) => a + x.minutes, 0);
    const totalCards = sessions.reduce((a, x) => a + x.cards, 0);
    const totalSess  = sessions.length;
    const el = id => document.getElementById(id);
    if (el('progTotalMin'))     el('progTotalMin').textContent     = Math.round(totalMin);
    if (el('progTotalCards'))   el('progTotalCards').textContent   = totalCards;
    if (el('progTotalSessions'))el('progTotalSessions').textContent = totalSess;
  }

  // ─ Settings overlay ───────────────────────────────────────────────────
  function loadSettingsUI() {
    const s = getSettings();
    const tog = document.getElementById('progTrackingToggle');
    if (tog) tog.checked = s.enabled;
    const body = document.getElementById('progSettingsBody');
    if (body) body.style.opacity = s.enabled ? '1' : '0.4';

    const sm = document.getElementById(s.streakMode === 'time' ? 'streakModeTime' : 'streakModeCard');
    if (sm) sm.checked = true;
    const smt = document.getElementById('streakMinThreshold');
    if (smt) smt.value = s.streakMinMin;

    const wSel = document.getElementById('progWeeklyGoalSelect');
    const wCustRow = document.getElementById('progWeeklyCustomRow');
    const wCust = document.getElementById('progWeeklyCustom');
    const wPresets = ['30','60','90','120'];
    if (wSel) {
      if (wPresets.includes(String(s.weeklyGoal))) { wSel.value = String(s.weeklyGoal); }
      else { wSel.value = 'custom'; if (wCust) wCust.value = s.weeklyGoal; }
      if (wCustRow) wCustRow.style.display = wSel.value === 'custom' ? '' : 'none';
    }

    const dSel = document.getElementById('progDailyGoalSelect');
    const dCustRow = document.getElementById('progDailyCustomRow');
    const dCust = document.getElementById('progDailyCustom');
    const dPresets = ['none','5','10','15','20'];
    if (dSel) {
      const dv = s.dailyGoal > 0 ? String(s.dailyGoal) : 'none';
      if (dPresets.includes(dv)) { dSel.value = dv; }
      else { dSel.value = 'custom'; if (dCust) dCust.value = s.dailyGoal; }
      if (dCustRow) dCustRow.style.display = dSel.value === 'custom' ? '' : 'none';
    }
  }

  function saveSettingsFromUI() {
    const tog = document.getElementById('progTrackingToggle');
    set(K.enabled, tog ? tog.checked : false);

    const smTime = document.getElementById('streakModeTime');
    set(K.streakMode, smTime && smTime.checked ? 'time' : 'card');
    const smt = document.getElementById('streakMinThreshold');
    set(K.streakMinMin, smt ? parseInt(smt.value) || 5 : 5);

    const wSel = document.getElementById('progWeeklyGoalSelect');
    const wCust = document.getElementById('progWeeklyCustom');
    if (wSel) {
      set(K.weeklyGoal, wSel.value === 'custom'
        ? (parseInt(wCust && wCust.value) || 60)
        : parseInt(wSel.value));
    }

    const dSel = document.getElementById('progDailyGoalSelect');
    const dCust = document.getElementById('progDailyCustom');
    if (dSel) {
      set(K.dailyGoal, dSel.value === 'none' ? 0
        : dSel.value === 'custom' ? (parseInt(dCust && dCust.value) || 10)
        : parseInt(dSel.value));
    }
  }

  // Open/close
  const progBtn = document.getElementById('progressSettingsBtn');
  const progOverlay = document.getElementById('progressSettingsOverlay');
  const progClose = document.getElementById('progressSettingsClose');

  if (progBtn) {
    const open = () => { loadSettingsUI(); if (progOverlay) progOverlay.classList.add('open'); };
    progBtn.addEventListener('click', open);
    progBtn.addEventListener('touchend', e => { e.preventDefault(); open(); }, { passive: false });
  }

  if (progClose) {
    const close = () => {
      saveSettingsFromUI();
      if (progOverlay) progOverlay.classList.remove('open');
      renderProgress();
    };
    progClose.addEventListener('click', close);
    progClose.addEventListener('touchend', e => { e.preventDefault(); close(); }, { passive: false });
  }

  if (progOverlay) {
    progOverlay.addEventListener('click', e => {
      if (e.target === progOverlay) {
        saveSettingsFromUI();
        progOverlay.classList.remove('open');
        renderProgress();
      }
    });
  }

  // Tracking toggle dims settings body
  const tog = document.getElementById('progTrackingToggle');
  if (tog) {
    tog.addEventListener('change', () => {
      const body = document.getElementById('progSettingsBody');
      if (body) body.style.opacity = tog.checked ? '1' : '0.4';
    });
  }

  // Weekly goal custom row
  const wSel = document.getElementById('progWeeklyGoalSelect');
  if (wSel) {
    wSel.addEventListener('change', () => {
      const row = document.getElementById('progWeeklyCustomRow');
      if (row) row.style.display = wSel.value === 'custom' ? '' : 'none';
    });
  }

  // Daily goal custom row
  const dSel = document.getElementById('progDailyGoalSelect');
  if (dSel) {
    dSel.addEventListener('change', () => {
      const row = document.getElementById('progDailyCustomRow');
      if (row) row.style.display = dSel.value === 'custom' ? '' : 'none';
    });
  }

  // Period toggle
  document.querySelectorAll('.prog-period-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.prog-period-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      set(K.period, btn.dataset.period);
      renderProgress();
    });
  });

  // Reset button
  const resetBtn = document.getElementById('progResetBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Reset all progress data? This cannot be undone.')) {
        [K.sessions, K.streakCur, K.streakBest].forEach(k => localStorage.removeItem(k));
        if (progOverlay) progOverlay.classList.remove('open');
        renderProgress();
      }
    });
  }

  // Render when Progress tab is opened
  const origShowTab = showTab;
  window.showTab = function(tab) {
    origShowTab(tab);
    if (tab === 'progress') {
      const ps = getSettings();
      const periodBtn = document.getElementById(ps.period === 'month' ? 'progPeriodMonth' : 'progPeriodWeek');
      document.querySelectorAll('.prog-period-btn').forEach(b => b.classList.remove('active'));
      if (periodBtn) periodBtn.classList.add('active');
      renderProgress();
    }
  };

  // Init render
  renderProgress();

  // Expose endSession so showModeScreen and navFromTraining can call it
  window._progEndSession = window.progEndSession;

})();

// ─── DARK MODE (THEME) ────────────────────────────────────────────────
(function initTheme() {
  const THEME_KEY = 'dev_dark_mode';

  function applyTheme(dark) {
    if (dark) {
      document.body.classList.add('theme-ember');
    } else {
      document.body.classList.remove('theme-ember');
    }
  }

  // Apply saved preference immediately (before any render)
  const saved = localStorage.getItem(THEME_KEY) === 'true';
  applyTheme(saved);

  // Wire up the toggle once DOM is ready
  const toggle = document.getElementById('devDarkModeToggle');
  if (toggle) {
    toggle.checked = saved;
    toggle.addEventListener('change', () => {
      const dark = toggle.checked;
      localStorage.setItem(THEME_KEY, dark);
      applyTheme(dark);
    });
  }
})();

// ─── SPLASH SCREEN ────────────────────────────────────────────────────
(function initSplash() {
  const splash = document.getElementById('splashScreen');
  if (!splash) return;
  setTimeout(() => {
    splash.classList.add('hidden');
    setTimeout(() => { splash.style.display = 'none'; }, 500);
  }, 1500);
})();

// ─── FOLDERS ──────────────────────────────────────────────────────────────────
(function initFolders() {
  const FOLDERS_KEY = 'ds_folders';

  // ── Storage ─────────────────────────────────────────────────────────────────
  function getFolders() {
    try { return JSON.parse(localStorage.getItem(FOLDERS_KEY) || '[]'); } catch { return []; }
  }
  function saveFolders(folders) {
    localStorage.setItem(FOLDERS_KEY, JSON.stringify(folders));
  }
  function newFolder(name) {
    return { id: Date.now().toString(36), name, packs: [] };
  }

  // ── All available packs (from collection-cards in Packs tab) ──────────────
  function getAllPacks() {
    const cards = document.querySelectorAll('#libTabPacks .collection-card');
    const packs = [];
    cards.forEach(c => {
      if (c.dataset.key && c.dataset.label) {
        packs.push({ key: c.dataset.key, label: c.dataset.label });
      }
    });
    return packs;
  }

  // ── Render ──────────────────────────────────────────────────────────────────
  function render() {
    const container = document.getElementById('libTabFolders');
    if (!container) return;
    const folders = getFolders();

    let html = '<div class="folders-header">'
      + '<span class="folders-title">My Folders</span>'
      + '<button class="btn-add-folder" id="btn-new-folder">+ New folder</button>'
      + '</div>';

    if (!folders.length) {
      html += '<div class="folders-empty">No folders yet. Create one to organise your packs.</div>';
    } else {
      folders.forEach((folder, fi) => {
        html += '<div class="folder-item" data-fi="' + fi + '">'
          + '<div class="folder-header-row">'
          + '<button class="folder-toggle-btn" data-fi="' + fi + '">'
          + '<span class="folder-chevron" id="chev-' + fi + '">&#9654;</span>'
          + '<span class="folder-name">' + escHtml(folder.name) + '</span>'
          + '<span class="folder-count">(' + folder.packs.length + ')</span>'
          + '</button>'
          + '<div class="folder-actions">'
          + '<button class="folder-btn" data-fi="' + fi + '" data-action="rename" title="Rename">&#9998;</button>'
          + '<button class="folder-btn danger" data-fi="' + fi + '" data-action="delete" title="Delete folder">&#x2715;</button>'
          + '</div>'
          + '</div>'
          + '<div class="folder-body" id="folder-body-' + fi + '" style="display:none;">';

        if (!folder.packs.length) {
          html += '<div class="folder-empty-msg">No packs in this folder yet.</div>';
        } else {
          folder.packs.forEach((pack, pi) => {
            html += '<div class="folder-pack-row">'
              + '<div class="collection-card folder-pack-card" data-key="' + pack.key + '" data-label="' + escHtml(pack.label) + '">'
              + '<div><div class="collection-name">' + escHtml(pack.label) + '</div></div>'
              + '<div class="collection-arrow">&#x203a;</div>'
              + '</div>'
              + '<button class="folder-remove-pack" data-fi="' + fi + '" data-pi="' + pi + '" title="Remove from folder">&#x2715;</button>'
              + '</div>';
          });
        }

        html += '<button class="folder-add-pack-btn" data-fi="' + fi + '">+ Add pack</button>'
          + '</div>'
          + '</div>';
      });
    }

    container.className = 'library-tab-content';
    container.innerHTML = html;
    bindEvents(folders);
  }

  function escHtml(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  // ── Bind events ─────────────────────────────────────────────────────────────
  function bindEvents(folders) {
    // New folder
    const newBtn = document.getElementById('btn-new-folder');
    if (newBtn) newBtn.addEventListener('click', () => {
      const name = prompt('Folder name:');
      if (!name || !name.trim()) return;
      folders.push(newFolder(name.trim()));
      saveFolders(folders);
      render();
    });

    // Toggle open/close
    document.querySelectorAll('.folder-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const fi   = btn.dataset.fi;
        const body = document.getElementById('folder-body-' + fi);
        const chev = document.getElementById('chev-' + fi);
        if (!body) return;
        const open = body.style.display === 'none';
        body.style.display = open ? 'block' : 'none';
        chev.innerHTML = open ? '&#9660;' : '&#9654;';
      });
    });

    // Folder actions (rename, delete)
    document.querySelectorAll('.folder-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const fi     = parseInt(btn.dataset.fi);
        const action = btn.dataset.action;
        if (action === 'rename') {
          const name = prompt('New name:', folders[fi].name);
          if (!name || !name.trim()) return;
          folders[fi].name = name.trim();
          saveFolders(folders);
          render();
        } else if (action === 'delete') {
          if (!confirm('Delete folder "' + folders[fi].name + '"? Packs will not be removed from the app.')) return;
          folders.splice(fi, 1);
          saveFolders(folders);
          render();
        }
      });
    });

    // Remove pack from folder
    document.querySelectorAll('.folder-remove-pack').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const fi = parseInt(btn.dataset.fi);
        const pi = parseInt(btn.dataset.pi);
        folders[fi].packs.splice(pi, 1);
        saveFolders(folders);
        render();
        // Re-open the folder
        const body = document.getElementById('folder-body-' + fi);
        const chev = document.getElementById('chev-' + fi);
        if (body) { body.style.display = 'block'; if (chev) chev.innerHTML = '&#9660;'; }
      });
    });

    // Pack card click — open mode screen
    document.querySelectorAll('.folder-pack-card').forEach(card => {
      card.addEventListener('click', () => showModeScreen(card.dataset.key, card.dataset.label));
    });

    // Add pack to folder
    document.querySelectorAll('.folder-add-pack-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const fi      = parseInt(btn.dataset.fi);
        const folder  = folders[fi];
        const allPacks = getAllPacks();
        const existing = new Set(folder.packs.map(p => p.key));

        // Build picker modal
        let modal = document.getElementById('folder-pack-modal');
        if (!modal) {
          modal = document.createElement('div');
          modal.id = 'folder-pack-modal';
          modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.45);display:flex;align-items:center;justify-content:center;z-index:300;padding:24px;';
          document.body.appendChild(modal);
        }

        const available = allPacks.filter(p => !existing.has(p.key));
        let pickerHtml = '<div style="background:#fff;border-radius:12px;padding:24px;max-width:480px;width:100%;max-height:70vh;overflow-y:auto;">'
          + '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">'
          + '<strong style="font-size:16px;">Add pack to \u201c' + escHtml(folder.name) + '\u201d</strong>'
          + '<button id="folder-modal-close" style="background:none;border:none;font-size:20px;cursor:pointer;">&#x2715;</button>'
          + '</div>';

        if (!available.length) {
          pickerHtml += '<p style="color:#888;font-size:14px;">All available packs are already in this folder.</p>';
        } else {
          available.forEach(pack => {
            pickerHtml += '<div class="folder-picker-item" data-key="' + pack.key + '" data-label="' + escHtml(pack.label) + '" '
              + 'style="padding:12px 16px;border:1px solid #e0d8cc;border-radius:8px;margin-bottom:8px;cursor:pointer;font-size:14px;font-weight:500;">'
              + escHtml(pack.label)
              + '</div>';
          });
        }
        pickerHtml += '</div>';
        modal.innerHTML = pickerHtml;
        modal.style.display = 'flex';

        document.getElementById('folder-modal-close').addEventListener('click', () => { modal.style.display = 'none'; });
        modal.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });

        modal.querySelectorAll('.folder-picker-item').forEach(item => {
          item.addEventListener('mouseenter', () => { item.style.borderColor = '#B05A28'; });
          item.addEventListener('mouseleave', () => { item.style.borderColor = '#e0d8cc'; });
          item.addEventListener('click', () => {
            folders[fi].packs.push({ key: item.dataset.key, label: item.dataset.label });
            saveFolders(folders);
            modal.style.display = 'none';
            render();
            const body = document.getElementById('folder-body-' + fi);
            const chev = document.getElementById('chev-' + fi);
            if (body) { body.style.display = 'block'; if (chev) chev.innerHTML = '&#9660;'; }
          });
        });
      });
    });
  }

  // ── Init — render when Folders tab is shown ──────────────────────────────
  // Re-render each time tab becomes visible
  const observer = new MutationObserver(() => {
    const el = document.getElementById('libTabFolders');
    if (el && el.style.display !== 'none') render();
  });
  const tabEl = document.getElementById('libTabFolders');
  if (tabEl) observer.observe(tabEl, { attributes: true, attributeFilter: ['style'] });

  // Also render immediately if already visible
  render();
})();
