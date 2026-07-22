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

const TAB_LABELS = { packs: 'Packs', topics: 'Topics', programs: 'Programs', folders: 'Folders', favorites: 'Favorites' };

let activeLibraryTab = 'packs'; // session default; resets on reload

function showLibraryTab(tab) {
  if (!LIB_TABS[tab]) return;
  activeLibraryTab = tab;
  // Leaving/entering tabs always exits an open folder (restores sub-nav & banner)
  if (window._folderResetView) window._folderResetView();
  sessionStorage.setItem('libraryTab', tab);
  Object.keys(LIB_TABS).forEach(key => {
    const content = document.getElementById(LIB_TABS[key]);
    if (content) content.style.display = key === tab ? '' : 'none';
  });
  document.querySelectorAll('.library-subnav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.libTab === tab);
  });
  // Update banner title
  const title = document.getElementById('libBannerTitle');
  if (title) title.textContent = TAB_LABELS[tab] || tab;
  // Show plus button only on Folders and Favorites
  const plus = document.getElementById('libBannerPlusBtn');
  if (plus) plus.style.display = (tab === 'folders' || tab === 'favorites') ? '' : 'none';
  // Re-wire plus button for the active tab (modules expose these)
  if (tab === 'favorites' && window._favWirePlus) window._favWirePlus();
  if (tab === 'folders' && window._folderWirePlus) window._folderWirePlus();
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
  upgrade:   'upgradeScreen',
  extended:  'extendedScreen'
};

// Program IDs that require Extended purchase
const EXTENDED_PROGRAM_IDS = ['conversation-skills'];
window.EXTENDED_PROGRAM_IDS = EXTENDED_PROGRAM_IDS;

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
  // Continue card mirrors the training position (list 7 #1) — re-render it
  // with fresh data every time the dashboard becomes visible.
  if (tab === 'dashboard' && window.renderContinueCard) window.renderContinueCard();
  if (tab === 'dashboard' && window._renderDashStreak) window._renderDashStreak();
}

document.querySelectorAll('.nav-tab').forEach(btn => {
  btn.addEventListener('click', () => showTab(btn.dataset.tab));
});

// ─── DASHBOARD: SEARCH + WELCOME + LAST PACK ───────────────────────────────

(function initDashboard() {
  // ── All packs available for search ──────────────────────────────────────
  // Built dynamically from collection-cards so new packs are included automatically
  function buildPackList() {
    const cards = document.querySelectorAll('#libTabPacks .collection-card');
    const packs = [];
    cards.forEach(c => {
      if (c.dataset.key && c.dataset.label) packs.push({ key: c.dataset.key, label: c.dataset.label });
    });
    return packs;
  }

  // Build a search index from live app data — strategy names, descriptions, inputs
  function buildSearchIndex(packs) {
    return packs.map(pack => {
      const key    = pack.key;
      const label  = pack.label;
      const strats = [];
      const terms  = [label.toLowerCase()];

      // Single strategy / collections data
      const src = (typeof collections !== 'undefined' ? collections[key] : null) || [];
      src.forEach(s => {
        if (s.name)        { terms.push(s.name.toLowerCase()); strats.push(s.name); }
        if (s.description) terms.push(s.description.toLowerCase());
        (s.inputs || []).forEach(i => {
          if (i.q) terms.push(i.q.toLowerCase());
          if (i.a) terms.push(i.a.toLowerCase());
        });
      });

      // Challenges
      const chall = (typeof challengesCollections !== 'undefined' ? challengesCollections[key] : null) || [];
      chall.forEach(c => {
        if (c.name) { terms.push(c.name.toLowerCase()); if (!strats.includes(c.name)) strats.push(c.name); }
        if (c.description) terms.push(c.description.toLowerCase());
        (c.inputs || []).forEach(i => { if (i.q) terms.push(i.q.toLowerCase()); });
      });

      // Mindset
      const mind = (typeof mindsetCollections !== 'undefined' ? mindsetCollections[key] : null) || [];
      mind.forEach(m => {
        if (m.name) { terms.push(m.name.toLowerCase()); if (!strats.includes(m.name)) strats.push(m.name); }
        if (m.description) terms.push(m.description.toLowerCase());
      });

      // Memorize
      const mem = (typeof memorizeCollections !== 'undefined' ? memorizeCollections[key] : null) || [];
      mem.forEach(s => {
        if (s.name) { terms.push(s.name.toLowerCase()); }
        (s.cards || []).forEach(c => { if (c.q) terms.push(c.q.toLowerCase()); });
      });

      // Tags from packTags
      const tags = (typeof packTags !== 'undefined' && packTags[key]) ? packTags[key] : [];
      tags.forEach(t => terms.push(t.toLowerCase()));

      return { key, label, terms, strats, tags };
    });
  }

  let _searchIndex = null;
  function getSearchIndex() {
    if (!_searchIndex) _searchIndex = buildSearchIndex(buildPackList());
    return _searchIndex;
  }

  const RECENT_KEY  = 'dash_recent_searches';
  const LASTPACK_KEY = 'dash_last_pack';
  const MAX_RECENT  = 5;

  // ── DOM refs ─────────────────────────────────────────────────────────────
  const searchInput    = document.getElementById('dashSearchInput');
  const searchClear    = document.getElementById('dashSearchClear');
  const cancelBtn      = document.getElementById('homeSettingsBtn');
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
  // Save SVG innerHTML of the settings/cancel button so we can restore it after search
  const cancelBtnOriginalHTML = cancelBtn ? cancelBtn.innerHTML : '';

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
    let pct = progressPct || 0;
    if (!progressPct) {
      try {
        const ex = JSON.parse(localStorage.getItem(LASTPACK_KEY));
        if (ex && ex.key === key) pct = ex.progressPct || 0;
      } catch {}
    }
    localStorage.setItem(LASTPACK_KEY, JSON.stringify({ key, label, progressPct: pct }));
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
    if (!lastPackSec) return;
    const secLabel = lastPackSec.querySelector('.dash-section-label');
    if (!last) {
      // Start here (v1.26.34): before any training has happened, point new
      // users to ONE concrete pack picked from their onboarding interests.
      // The moment they train anything, the Continue card takes over.
      const sh = window._getStartHerePack ? window._getStartHerePack() : null;
      if (!sh) { lastPackSec.style.display = 'none'; return; }
      lastPackSec.style.display = '';
      if (secLabel) secLabel.textContent = 'Start here';
      lastPackCard.className = 'dash-continue-card';
      lastPackCard.innerHTML = `
        <div class="dash-continue-inner">
          <div>
            <div class="dash-continue-name">${sh.label}</div>
            <div class="dash-continue-meta">Based on your goals \u2014 tap to begin</div>
          </div>
          <div class="dash-continue-arrow">\u203A</div>
        </div>`;
      let shSY = 0, shMv = false;
      lastPackCard.ontouchstart = e => { shSY = e.touches[0].clientY; shMv = false; };
      lastPackCard.ontouchmove  = e => { if (Math.abs(e.touches[0].clientY - shSY) > 8) shMv = true; };
      lastPackCard.ontouchend   = () => { if (!shMv) showModeScreen(sh.key, sh.label); };
      lastPackCard.onclick      = () => showModeScreen(sh.key, sh.label);
      return;
    }
    lastPackSec.style.display = '';
    if (secLabel) secLabel.textContent = 'Continue';
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
    if (!q) { searchResults.innerHTML = ''; noResults.style.display = 'none'; return; }

    const index = getSearchIndex();
    const hits  = [];

    index.forEach(pack => {
      // Find which terms matched
      const matchedStrats = pack.strats.filter(s => s.toLowerCase().includes(q));
      const termMatch     = pack.terms.some(t => t.includes(q));
      if (!termMatch && !matchedStrats.length) return;
      // Hidden packs (unowned extended, checkpoint-locked) never surface in search
      if (window.accessLevel && window.accessLevel.packVisibility
          && window.accessLevel.packVisibility(pack.key) === 'hidden') return;

      // Build subtitle showing what matched
      let subtitle = '';
      const matchedTags = (pack.tags || []).filter(t => t.toLowerCase().includes(q));
      if (matchedStrats.length) {
        const shown = matchedStrats.slice(0, 3).join(', ');
        subtitle = shown + (matchedStrats.length > 3 ? ' +' + (matchedStrats.length - 3) + ' more' : '');
      } else if (matchedTags.length) {
        subtitle = 'Tag: ' + matchedTags.slice(0, 3).join(', ');
      } else if (!pack.label.toLowerCase().includes(q)) {
        subtitle = 'Match in content';
      }
      hits.push({ key: pack.key, label: pack.label, subtitle });
    });

    searchResults.innerHTML = hits.map(p => {
      const accessible = !window.accessLevel || window.accessLevel.canAccess(p.key);
      const badge = (!accessible && window.accessLevel) ? window.accessLevel.badgeLabel(p.key) : null;
      const badgeHtml = badge
        ? `<div class="pack-lock-badge ${badge.cls}" style="position:relative;display:inline-block;margin-left:6px;vertical-align:middle;">${badge.text}</div>`
        : '';
      return `<div class="collection-card dash-result-card${!accessible ? ' collection-card--locked' : ''}" data-key="${p.key}" data-label="${p.label.replace(/"/g,'&quot;')}" data-locked="${!accessible}">`+
        `<div style="display:flex;align-items:center;flex-wrap:wrap;">`+
          `<div class="collection-name" style="display:inline;">${p.label}</div>${badgeHtml}`+
          (p.subtitle ? `<div class="collection-meta" style="margin-top:2px;width:100%;">${p.subtitle}</div>` : '')+
        `</div>`+
        `<div class="collection-arrow">›</div>`+
      `</div>`;
    }).join('');
    noResults.style.display = (!q || hits.length) ? 'none' : '';
    searchResults.querySelectorAll('.dash-result-card').forEach(el => {
      const locked = el.dataset.locked === 'true';
      let rStartY = 0, rMoved = false;
      el.ontouchstart = e => { rStartY = e.touches[0].clientY; rMoved = false; };
      el.ontouchmove  = e => { if (Math.abs(e.touches[0].clientY - rStartY) > 8) rMoved = true; };
      el.ontouchend   = () => {
        if (!rMoved) {
          if (locked) {
            const cfg = window.PACK_CONFIG && window.PACK_CONFIG[el.dataset.key];
            const tier = cfg ? cfg.minLevel : 'Pro';
            if (window.showToast) showToast('This pack requires ' + tier[0].toUpperCase() + tier.slice(1) + '. Upgrade to unlock it.');
            return;
          }
          const key   = el.dataset.key;
          const label = el.dataset.label;
          addRecent(query.trim());
          saveLastPack(key, label);
          exitSearch(false);
          showModeScreen(key, label);
        }
      };
      el.onclick = () => {
        if (locked) {
          const cfg = window.PACK_CONFIG && window.PACK_CONFIG[el.dataset.key];
          const tier = cfg ? cfg.minLevel : 'Pro';
          if (window.showToast) showToast('This pack requires ' + tier[0].toUpperCase() + tier.slice(1) + '. Upgrade to unlock it.');
          return;
        }
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
    cancelBtn.innerHTML = '';
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
    cancelBtn.innerHTML = cancelBtnOriginalHTML;
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
  // Exposed so dev tools (first-run reset) can refresh the continue card
  window.renderContinueCard = renderLastPack;

  // ── Personalization from onboarding (v1.26.34) ───────────────────────
  // ds_reco_packs (written when onboarding finishes) is an ordered list of
  // {key, label}. The Recommended section shows the top 3 the user can
  // access; the Start-here card uses the first accessible one.
  function _recoPacks() {
    try {
      const packs = JSON.parse(localStorage.getItem('ds_reco_packs') || '[]');
      return packs.filter(p => p && p.key && p.label &&
        (!window.accessLevel || accessLevel.canAccess(p.key)));
    } catch { return []; }
  }
  window._getStartHerePack = function () {
    const packs = _recoPacks();
    return packs.length ? packs[0] : null;
  };
  function personalizeRecommended() {
    const sec = document.getElementById('dashRecommendedSection');
    if (!sec) return;
    const packs = _recoPacks().slice(0, 3);
    if (!packs.length) return;   // no onboarding picks -> keep static defaults
    const label = sec.querySelector('.dash-section-label');
    sec.innerHTML = '';
    if (label) { label.textContent = 'Picked for you'; sec.appendChild(label); }
    packs.forEach(p => {
      const card = document.createElement('div');
      card.className = 'collection-card';
      card.dataset.key = p.key;
      card.dataset.label = p.label;
      card.innerHTML = '<div><div class="collection-name">' + p.label + '</div>' +
        '<div class="collection-meta">From your onboarding picks</div></div>' +
        '<div class="collection-arrow">\u203A</div>';
      let rSY = 0, rMv = false;
      card.ontouchstart = e => { rSY = e.touches[0].clientY; rMv = false; };
      card.ontouchmove  = e => { if (Math.abs(e.touches[0].clientY - rSY) > 8) rMv = true; };
      card.ontouchend   = () => { if (!rMv) showModeScreen(p.key, p.label); };
      card.onclick      = () => showModeScreen(p.key, p.label);
      sec.appendChild(card);
    });
    renderLastPack();   // refresh the Start-here card alongside
  }
  window._personalizeRecommended = personalizeRecommended;
  personalizeRecommended();

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
  // Mode-screen pin button is gone (list 3 #6). Pinning is now a pull-down
  // gesture on the mode screen: drag down from the top past the threshold to
  // toggle the pin; a small confirmation fades in at the top and out after 1 s.
  (function initPullPin() {
    const screen = document.getElementById('modeScreen');
    if (!screen) return;
    const THRESHOLD = 70;
    let startY = 0, tracking = false, fired = false;

    // The scrolling element is #modeScreen itself (overflow-y:auto); .mode-list
    // has no overflow, so its scrollTop was always 0 and the pull-pin gesture
    // fired from any position. Read the real scroller so it only arms at the top.
    const scroller = () => screen;

    function showPinToast(pinned) {
      let t = document.getElementById('modePinToast');
      if (!t) {
        t = document.createElement('div');
        t.id = 'modePinToast';
        t.className = 'mode-pin-toast';
        screen.appendChild(t);
      }
      t.innerHTML = '<i class="ti ' + (pinned ? 'ti-pin-filled' : 'ti-pin') + '" aria-hidden="true"></i>'
        + '<span>' + (pinned ? 'Pack pinned' : 'Pin removed') + '</span>';
      t.classList.add('show');
      clearTimeout(t._t);
      t._t = setTimeout(() => t.classList.remove('show'), 1000);
    }

    screen.addEventListener('touchstart', e => {
      tracking = scroller().scrollTop <= 0;
      fired = false;
      startY = e.touches[0].clientY;
    }, { passive: true });

    screen.addEventListener('touchmove', e => {
      if (!tracking || fired) return;
      const dy = e.touches[0].clientY - startY;
      if (dy > THRESHOLD) {
        fired = true;                       // one toggle per gesture
        if (!activeCollectionKey) return;
        const pack = ALL_PACKS.find(p => p.key === activeCollectionKey);
        toggleFav(activeCollectionKey, pack ? pack.label : activeCollectionKey);
        refreshPinBtns();
        renderFavTab();
        renderDashFavs();
        if (navigator.vibrate) navigator.vibrate(10);
        showPinToast(isFav(activeCollectionKey));
      }
    }, { passive: true });
  })();

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
  let favSortMode = 'pinned'; // 'pinned' | 'az' | 'used'
  let _favPlusHandler = null;
  window._favWirePlus = function() {
    const b = document.getElementById('libBannerPlusBtn');
    if (!b) return;
    if (!_favPlusHandler) renderFavTab(); // builds the handler
    if (_favPlusHandler) b.onclick = _favPlusHandler;
  };

  function renderFavTab() {
    const _vis = k => (window.accessLevel && window.accessLevel.packVisibility) ? window.accessLevel.packVisibility(k) : 'available';
    // Hidden packs (extended not owned, checkpoint-locked) drop out of the
    // list; locked ones stay visible with a Pro badge (19).
    const allFavs    = getFavs().filter(f => _vis(f.key) !== 'hidden');
    const emptyState = document.getElementById('favEmptyState');
    const favList    = document.getElementById('favList');
    const sortRow    = document.getElementById('favSortRow');
    const plusBtn    = document.getElementById('libBannerPlusBtn');
    if (!favList) return;

    // Build (or rebuild) the pin-picker handler; wired below and by _favWirePlus
    _favPlusHandler = () => {
        const allCards = document.querySelectorAll('#libTabPacks .collection-card');
        const _vis = k => (window.accessLevel && window.accessLevel.packVisibility) ? window.accessLevel.packVisibility(k) : 'available';
        const allPacks = Array.from(allCards).map(c => ({ key: c.dataset.key, label: c.dataset.label }))
          .filter(p => p.key)
          .filter(p => _vis(p.key) === 'available');   // hidden & locked packs can't be pinned
        const alreadyPinned = new Set(getFavs().map(f => f.key));

        // Build tag-style picker modal
        let modal = document.getElementById('fav-pin-modal');
        if (!modal) {
          modal = document.createElement('div');
          modal.id = 'fav-pin-modal';
          modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.45);display:flex;align-items:flex-end;justify-content:center;z-index:400;padding:0;';
          document.body.appendChild(modal);
        }

        const pinned = new Set(getFavs().map(f => f.key));
        let html = '<div style="background:var(--ds-card,#fff);border-radius:20px 20px 0 0;padding:20px 20px 100px;width:100%;max-width:420px;max-height:70vh;overflow-y:auto;">'
          + '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">'
          + '<strong style="font-size:16px;color:var(--ds-txt)">Pin packs to Favorites</strong>'
          + '<button id="fav-modal-close" style="background:none;border:none;font-size:22px;cursor:pointer;color:var(--ds-txt2)">&#x2715;</button>'
          + '</div>'
          + '<div style="display:flex;flex-wrap:wrap;gap:8px;">';

        allPacks.forEach(pack => {
          const isPinned = pinned.has(pack.key);
          html += '<button class="fav-tag-btn" data-key="' + pack.key + '" data-label="' + pack.label.replace(/"/g,'&quot;') + '" '
            + 'style="padding:8px 16px;border-radius:20px;font-size:14px;font-weight:600;cursor:pointer;border:2px solid '
            + (isPinned ? 'var(--ds-acc,#B05A28);background:var(--ds-acc,#B05A28);color:#fff' : 'var(--ds-border,#ccc);background:var(--ds-card,#fff);color:var(--ds-txt)')
            + ';">' + pack.label + '</button>';
        });

        html += '</div>'
          + '<button id="fav-modal-done" style="margin-top:20px;width:100%;padding:14px;border-radius:12px;background:var(--ds-acc,#B05A28);border:none;color:#fff;font-size:15px;font-weight:700;cursor:pointer;">Done</button>'
          + '</div>';

        modal.innerHTML = html;
        modal.style.display = 'flex';

        modal.querySelector('#fav-modal-close').onclick = () => { modal.style.display = 'none'; };
        modal.querySelector('#fav-modal-done').onclick  = () => { modal.style.display = 'none'; };
        modal.onclick = e => { if (e.target === modal) modal.style.display = 'none'; };

        modal.querySelectorAll('.fav-tag-btn').forEach(btn => {
          btn.onclick = () => {
            const key   = btn.dataset.key;
            const label = btn.dataset.label;
            const favs  = getFavs();
            const idx   = favs.findIndex(f => f.key === key);
            if (idx >= 0) {
              // Already pinned — unpin
              favs.splice(idx, 1);
              btn.style.background = 'var(--ds-card,#fff)';
              btn.style.color = 'var(--ds-txt)';
              btn.style.borderColor = 'var(--ds-border,#ccc)';
            } else {
              // Pin it
              favs.push({ key, label });
              btn.style.background = 'var(--ds-acc,#B05A28)';
              btn.style.color = '#fff';
              btn.style.borderColor = 'var(--ds-acc,#B05A28)';
            }
            saveFavs(favs);
            renderFavTab();
            renderDashFavs();
          };
        });
    };
    if (plusBtn && activeLibraryTab === 'favorites') plusBtn.onclick = _favPlusHandler;

    if (!allFavs.length) {
      if (emptyState) emptyState.style.display = '';
      if (sortRow) sortRow.style.display = 'none';
      favList.innerHTML = '';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (sortRow) sortRow.style.display = '';

    // Sort
    let favs = [...allFavs];
    if (favSortMode === 'az') {
      favs.sort((a, b) => a.label.localeCompare(b.label));
    } else if (favSortMode === 'used') {
      const trained = JSON.parse(localStorage.getItem('ds_pack_trained') || '{}');
      favs.sort((a, b) => (trained[b.key] || 0) - (trained[a.key] || 0));
    }
    // 'pinned' = insertion order (default)

    favList.innerHTML = favs.map(f => {
      const locked = _vis(f.key) === 'locked';
      const badge  = locked ? '<div class="pack-lock-badge pack-lock-badge--pro" style="position:relative;display:inline-block;margin-left:6px;vertical-align:middle;">Pro</div>' : '';
      return `<div class="collection-card fav-card${locked ? ' collection-card--locked' : ''}" data-key="${f.key}" data-label="${f.label.replace(/"/g,'&quot;')}">
        <div><div class="collection-name" style="display:inline;">${f.label}</div>${badge}</div>
        <div class="collection-arrow">›</div>
       </div>`;
    }).join('');

    // Sort button listeners
    document.querySelectorAll('.fav-sort-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.sort === favSortMode);
      btn.onclick = () => { favSortMode = btn.dataset.sort; renderFavTab(); };
    });

    // Bind fav-card clicks → open pack
    favList.querySelectorAll('.fav-card').forEach(card => {
      let fStartY = 0, fMoved = false;
      card.addEventListener('touchstart', e => { fStartY = e.touches[0].clientY; fMoved = false; }, { passive: true });
      card.addEventListener('touchmove',  e => { if (Math.abs(e.touches[0].clientY - fStartY) > 8) fMoved = true; }, { passive: true });
      card.addEventListener('touchend',   e => { if (!fMoved) { e.preventDefault(); showModeScreen(card.dataset.key, card.dataset.label); } }, { passive: false });
      card.addEventListener('click',      () => showModeScreen(card.dataset.key, card.dataset.label));
    });
  }

  // ─ Home screen favorites render (up to 8, horizontal carousel) ──────────
  function renderDashFavs() {
    const favSec  = document.getElementById('dashFavSection');
    const favList = document.getElementById('dashFavList');
    if (!favSec || !favList) return;
    const _vis = k => (window.accessLevel && window.accessLevel.packVisibility) ? window.accessLevel.packVisibility(k) : 'available';
    const favs  = getFavs().filter(f => _vis(f.key) !== 'hidden');
    if (!favs.length) { favSec.style.display = 'none'; return; }
    const times = getTrainedTimes();
    const sorted = [...favs].sort((a, b) => (times[b.key] || 0) - (times[a.key] || 0));
    const shown  = sorted.slice(0, 8);
    favSec.style.display = '';
    favList.innerHTML = shown.map(f =>
        `<div class="dash-fav-card" data-key="${f.key}" data-label="${f.label.replace(/"/g,'&quot;')}">`+
          `<div class="dash-fav-icon">${packIcon(f.key)}</div>`+
          `<div class="dash-fav-name">${f.label}</div>`+
        `</div>`
      ).join('');
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
  // Exposed so applyAccessLevel can refresh the favorites list when
  // visibility changes (level switch, purchases, checkpoint unlocks)
  window._favRenderTab = renderFavTab;

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
    // Always update continue-card progress, independent of progress-tracking setting
    if (cardTotal > 0 && cardIndex >= 0) {
      try {
        const existing = JSON.parse(localStorage.getItem('dash_last_pack') || 'null');
        if (existing && existing.key) {
          existing.progressPct = Math.round((cardIndex / cardTotal) * 100);
          localStorage.setItem('dash_last_pack', JSON.stringify(existing));
        }
      } catch {}
    }
    if (!bool(K.enabled) || !_sessionActive) return;
    _sessionCards++;
    _lastFlipTime = Date.now();
  };

  // Continue-card position sync (list 7 #1): called by the mode engine on
  // every card render. Mirrors the training progress bar exactly
  // (position/(total-1)) and works regardless of the progress-tracking
  // setting — it also CREATES the entry, so every launch path counts.
  window.progSetPosition = function(key, label, idx, total) {
    if (!key || !total) return;
    try {
      const pct = total > 1 ? Math.round((idx / (total - 1)) * 100) : 100;
      localStorage.setItem('dash_last_pack', JSON.stringify({
        key, label, progressPct: Math.max(0, Math.min(100, pct))
      }));
    } catch {}
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
    renderDashStreak();
  }

  // Home-screen streak card (v1.26.37): sits at the bottom of the dashboard,
  // after Recommended. Shows the current streak from the existing Progress
  // streak system; hidden when tracking is off or the streak is 0.
  function renderDashStreak() {
    const sec = document.getElementById('dashStreakSection');
    if (!sec) return;
    const s = getSettings();
    const cur = get(K.streakCur) || 0;
    if (!s.enabled || cur < 1) { sec.style.display = 'none'; return; }
    sec.style.display = '';
    const cnt = document.getElementById('dashStreakCount');
    const sub = document.getElementById('dashStreakSub');
    if (cnt) cnt.textContent = cur + ' day streak';
    const best = get(K.streakBest) || 0;
    if (sub) sub.textContent = best > cur
      ? 'Best: ' + best + ' days'
      : 'Your best so far \u2014 keep it going!';
  }
  window._renderDashStreak = renderDashStreak;
  renderDashStreak();

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

  // ── View state (list of folders vs one open folder, browse vs edit) ────
  let view = 'list';      // 'list' | 'folder'
  let openId = null;      // id of the open folder
  let editMode = false;   // inside a folder: edit (add/remove packs) or browse

  // ── Storage ────────────────────────────────────────────────
  function getFolders() {
    try { return JSON.parse(localStorage.getItem(FOLDERS_KEY) || '[]'); } catch { return []; }
  }
  function saveFolders(folders) {
    localStorage.setItem(FOLDERS_KEY, JSON.stringify(folders));
  }
  function newFolder(name) {
    return { id: Date.now().toString(36), name, packs: [] };
  }
  function findFolder(folders, id) {
    return folders.find(f => f.id === id) || null;
  }

  // ── All available packs (from collection-cards in Packs tab) ────────
  function getAllPacks() {
    const _vis = k => (window.accessLevel && window.accessLevel.packVisibility) ? window.accessLevel.packVisibility(k) : 'available';
    const cards = document.querySelectorAll('#libTabPacks .collection-card');
    const packs = [];
    cards.forEach(c => {
      if (c.dataset.key && c.dataset.label && _vis(c.dataset.key) === 'available') {
        packs.push({ key: c.dataset.key, label: c.dataset.label });
      }
    });
    return packs;
  }

  // ── Bottom sheet (create / rename / delete) — no native prompt/confirm ──
  // opts: { title, text?, input? (string shows an input), confirmLabel,
  //         danger?, onConfirm(value) }
  function openSheet(opts) {
    let backdrop = document.getElementById('folSheetBackdrop');
    if (backdrop) backdrop.remove();
    backdrop = document.createElement('div');
    backdrop.id = 'folSheetBackdrop';
    backdrop.className = 'fol-sheet-backdrop';

    const hasInput = typeof opts.input === 'string';
    backdrop.innerHTML =
      '<div class="fol-sheet">'
      + '<div class="fol-sheet-title">' + escHtml(opts.title) + '</div>'
      + (opts.text ? '<div class="fol-sheet-text">' + escHtml(opts.text) + '</div>' : '')
      + (hasInput ? '<input class="fol-sheet-input" id="folSheetInput" type="text" maxlength="40" placeholder="Folder name" autocomplete="off">' : '')
      + '<button class="fol-sheet-btn ' + (opts.danger ? 'fol-danger-btn' : 'fol-primary') + '" id="folSheetConfirm">' + escHtml(opts.confirmLabel) + '</button>'
      + '<button class="fol-sheet-btn fol-cancel" id="folSheetCancel">Cancel</button>'
      + '</div>';
    document.body.appendChild(backdrop);

    const close = () => backdrop.remove();
    const input = backdrop.querySelector('#folSheetInput');
    if (input) {
      input.value = opts.input;
      setTimeout(() => { input.focus(); input.select(); }, 50);
      input.addEventListener('keydown', e => { if (e.key === 'Enter') confirmBtn.click(); });
    }
    const confirmBtn = backdrop.querySelector('#folSheetConfirm');
    confirmBtn.addEventListener('click', () => {
      if (hasInput) {
        const val = input.value.trim();
        if (!val) { input.focus(); return; }
        close(); opts.onConfirm(val);
      } else {
        close(); opts.onConfirm();
      }
    });
    backdrop.querySelector('#folSheetCancel').addEventListener('click', close);
    backdrop.addEventListener('click', e => { if (e.target === backdrop) close(); });
  }

  function promptNewFolder() {
    openSheet({
      title: 'New folder',
      input: '',
      confirmLabel: 'Create folder',
      onConfirm: name => {
        const fols = getFolders();
        fols.push(newFolder(name));
        saveFolders(fols);
        render();
      }
    });
  }

  // ── Banner wiring (shared lib-banner) ──────────────────────────
  function wireFolderPlus() {
    const plusBtn = document.getElementById('libBannerPlusBtn');
    if (!plusBtn) return;
    plusBtn.onclick = promptNewFolder;
    updateBanner();
  }
  window._folderWirePlus = wireFolderPlus;

  // Called by showLibraryTab on every tab switch: leave folder view and
  // restore the sub-nav so other tabs are never left without it.
  window._folderResetView = function () {
    view = 'list'; openId = null; editMode = false;
    const subnav = document.getElementById('librarySubnav');
    if (subnav) subnav.style.display = '';
    const back = document.getElementById('libBannerBackBtn');
    if (back) back.style.display = 'none';
    const edit = document.getElementById('libBannerEditBtn');
    if (edit) edit.style.display = 'none';
  };

  function updateBanner() {
    const title  = document.getElementById('libBannerTitle');
    const plus   = document.getElementById('libBannerPlusBtn');
    const back   = document.getElementById('libBannerBackBtn');
    const edit   = document.getElementById('libBannerEditBtn');
    const subnav = document.getElementById('librarySubnav');
    const inFolder = view === 'folder';

    if (inFolder) {
      const f = findFolder(getFolders(), openId);
      if (title)  title.textContent = f ? f.name : 'Folder';
      if (plus)   plus.style.display = 'none';
      if (back)   { back.style.display = ''; back.onclick = onBannerBack; }
      if (edit)   {
        edit.style.display = '';
        edit.textContent = editMode ? 'Done' : 'Edit';
        edit.onclick = onBannerEdit;
      }
      if (subnav) subnav.style.display = 'none';
    } else {
      if (title)  title.textContent = 'Folders';
      if (plus)   plus.style.display = '';
      if (back)   back.style.display = 'none';
      if (edit)   edit.style.display = 'none';
      if (subnav) subnav.style.display = '';
    }
  }

  function onBannerBack() {
    if (editMode) { editMode = false; render(); }   // leave edit mode first
    else { view = 'list'; openId = null; render(); }
  }
  function onBannerEdit() {
    editMode = !editMode;
    render();
  }

  // ── Render ──────────────────────────────────────────────────
  function render() {
    const container = document.getElementById('libTabFolders');
    if (!container) return;
    const folders = getFolders();

    // If the open folder was deleted elsewhere, fall back to the list
    if (view === 'folder' && !findFolder(folders, openId)) {
      view = 'list'; openId = null; editMode = false;
    }

    // Only touch the shared banner when the Folders tab is actually visible —
    // render() also runs at script init while another tab may be active.
    const visible = activeLibraryTab === 'folders' && container.style.display !== 'none';
    if (visible) { wireFolderPlus(); }

    container.className = 'library-tab-content';
    if (view === 'folder') renderFolder(container, folders);
    else renderList(container, folders);
  }

  function escHtml(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  // ── Uppgift 15 — shared delete-folder confirmation ──────────────────────────
  function confirmDeleteFolder(folders, folder) {
    openSheet({
      title: 'Delete folder',
      text: 'Delete \u201c' + folder.name + '\u201d? Your packs will not be removed from the app.',
      confirmLabel: 'Delete folder',
      danger: true,
      onConfirm: () => {
        const idx = folders.findIndex(f => f.id === folder.id);
        if (idx >= 0) { folders.splice(idx, 1); saveFolders(folders); }
        // If we're inside the deleted folder, fall back to list
        if (view === 'folder' && openId === folder.id) {
          view = 'list'; openId = null; editMode = false;
        }
        render();
      }
    });
  }

  // ── List view (variant A) ────────────────────────────────────
  function renderList(container, folders) {
    let html = folders.length ? '<div class="tab-info">Your own training structure</div>' : '';
    if (!folders.length) {
      html += '<div class="fol-empty">'
        + '<div class="fol-empty-icon">&#x1F4C1;</div>'
        + '<div class="fol-empty-title">No folders yet</div>'
        + '<div class="fol-empty-text">Group your packs into folders to build your own training structure.</div>'
        + '</div>';
    } else {
      folders.forEach(folder => {
        const n = folder.packs.length;
        html += '<div class="fol-card" data-id="' + folder.id + '">'
          + '<span class="fol-card-icon"><i class="ti ti-folder" aria-hidden="true"></i></span>'
          + '<span class="fol-card-name">' + escHtml(folder.name) + '</span>'
          + '<span class="fol-card-count">' + n + (n === 1 ? ' pack' : ' packs') + '</span>'
          + '<span class="fol-card-chevron">&#x203a;</span>'
          + '</div>';
      });
    }
    html += '<div class="fol-new-btn" id="folNewBtn">'
      + '<span class="fol-new-plus">+</span><span>New folder</span></div>';
    if (folders.length) {
      html += '<div class="fol-swipe-hint">Swipe left on a folder to delete</div>';
    }

    container.innerHTML = html;

    container.querySelectorAll('.fol-card[data-id]').forEach(card => {
      let swipeStartX = 0, swipeStartY = 0, swiped = false;

      card.addEventListener('touchstart', e => {
        swipeStartX = e.touches[0].clientX;
        swipeStartY = e.touches[0].clientY;
        swiped = false;
      }, { passive: true });

      card.addEventListener('touchmove', e => {
        const dx = e.touches[0].clientX - swipeStartX;
        const dy = e.touches[0].clientY - swipeStartY;
        if (Math.abs(dy) > 30) return; // vertical scroll, ignore
        if (dx < -60 && Math.abs(dy) < 30) {
          swiped = true;
        }
        // Visual feedback: follow finger up to -80px
        if (dx < 0 && Math.abs(dy) < 30) {
          card.style.transform = 'translateX(' + Math.max(dx, -80) + 'px)';
          card.style.transition = 'none';
        }
      }, { passive: true });

      card.addEventListener('touchend', () => {
        // Spring back
        card.style.transition = 'transform 0.25s ease';
        card.style.transform = '';
        if (swiped) {
          const f = findFolder(getFolders(), card.dataset.id);
          if (f) confirmDeleteFolder(getFolders(), f);
        }
      }, { passive: true });

      card.addEventListener('click', () => {
        if (swiped) return; // swipe fired — ignore tap
        const f = findFolder(getFolders(), card.dataset.id);
        if (!f) return;
        view = 'folder';
        openId = f.id;
        editMode = f.packs.length === 0;   // empty folder opens straight in edit mode
        render();
      });
    });
    const newBtn = container.querySelector('#folNewBtn');
    if (newBtn) newBtn.addEventListener('click', promptNewFolder);
  }

  // ── Open folder view ─────────────────────────────────────────
  function renderFolder(container, folders) {
    const folder = findFolder(folders, openId);
    if (!folder) return;
    if (editMode) renderFolderEdit(container, folders, folder);
    else renderFolderView(container, folder);
  }

  // Browse mode — packs listed like the Favorites screen
  function renderFolderView(container, folder) {
    const _vis = k => (window.accessLevel && window.accessLevel.packVisibility) ? window.accessLevel.packVisibility(k) : 'available';
    // Hidden packs (checkpoint-locked, unowned extended) drop out of the
    // view but stay in the folder's data, so they return when unlocked.
    const visPacks = folder.packs.filter(p => _vis(p.key) !== 'hidden');
    if (!visPacks.length) {
      container.innerHTML = '<div class="fol-view-empty">' + (folder.packs.length
        ? 'The packs in this folder are not available right now.'
        : 'This folder is empty.<br>Tap Edit to add packs.') + '</div>';
      return;
    }
    container.innerHTML = '<div class="tab-info">Practise your chosen packs.</div>' + visPacks.map(p => {
      const locked = _vis(p.key) === 'locked';
      const badge  = locked ? '<div class="pack-lock-badge pack-lock-badge--pro" style="position:relative;display:inline-block;margin-left:6px;vertical-align:middle;">Pro</div>' : '';
      return '<div class="collection-card fol-pack-card' + (locked ? ' collection-card--locked' : '') + '" data-key="' + p.key + '" data-label="' + escHtml(p.label) + '">'
      + '<div><div class="collection-name" style="display:inline;">' + escHtml(p.label) + '</div>' + badge + '</div>'
      + '<div class="collection-arrow">&#x203a;</div>'
      + '</div>';
    }).join('');

    container.querySelectorAll('.fol-pack-card').forEach(card => {
      // Next-arrow context: the folder's own pack list, in folder order
      const openPack = () => {
        if (window.setPackContext) {
          setPackContext(folder.packs.map(pp => ({ key: pp.key, label: pp.label })), card.dataset.key);
        }
        showModeScreen(card.dataset.key, card.dataset.label);
      };
      let cY = 0, cMv = false;
      card.addEventListener('touchstart', e => { cY = e.touches[0].clientY; cMv = false; }, { passive: true });
      card.addEventListener('touchmove',  e => { if (Math.abs(e.touches[0].clientY - cY) > 8) cMv = true; }, { passive: true });
      card.addEventListener('touchend',   e => { if (!cMv) { e.preventDefault(); openPack(); } }, { passive: false });
      card.addEventListener('click',      openPack);
    });
  }

  // Edit mode — split view: current packs (−) + add from library (+)
  function renderFolderEdit(container, folders, folder) {
    const inFolder  = folder.packs;
    const existing  = new Set(inFolder.map(p => p.key));
    const available = getAllPacks().filter(p => !existing.has(p.key));

    let html = '<div class="fol-section-label">In this folder (' + inFolder.length + ')</div>';
    if (!inFolder.length) {
      html += '<div class="fol-edit-msg">No packs yet &mdash; add some below.</div>';
    } else {
      inFolder.forEach((p, i) => {
        html += '<div class="fol-edit-row fol-row-in" data-idx="' + i + '">'
          + '<span class="fol-row-name">' + escHtml(p.label) + '</span>'
          + '<button class="fol-row-btn fol-row-rem" data-key="' + p.key + '" aria-label="Remove">&minus;</button>'
          + '</div>';
      });
    }

    html += '<div class="fol-section-label">Add from library</div>';
    if (!available.length) {
      html += '<div class="fol-edit-msg">All packs are already in this folder.</div>';
    } else {
      available.forEach(p => {
        html += '<div class="fol-edit-row">'
          + '<span class="fol-row-name">' + escHtml(p.label) + '</span>'
          + '<button class="fol-row-btn fol-row-add" data-key="' + p.key + '" data-label="' + escHtml(p.label) + '" aria-label="Add">+</button>'
          + '</div>';
      });
    }

    html += '<div class="fol-manage-row">'
      + '<button class="fol-manage-btn" id="folRenameBtn">Rename folder</button>'
      + '<button class="fol-manage-btn fol-danger" id="folDeleteBtn">Delete folder</button>'
      + '</div>';

    container.innerHTML = html;

    // Remove pack
    container.querySelectorAll('.fol-row-rem').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = folder.packs.findIndex(p => p.key === btn.dataset.key);
        if (idx >= 0) { folder.packs.splice(idx, 1); saveFolders(folders); render(); }
      });
    });

    // Add pack
    container.querySelectorAll('.fol-row-add').forEach(btn => {
      btn.addEventListener('click', () => {
        folder.packs.push({ key: btn.dataset.key, label: btn.dataset.label });
        saveFolders(folders); render();
      });
    });

    // Rename
    const renameBtn = container.querySelector('#folRenameBtn');
    if (renameBtn) renameBtn.addEventListener('click', () => {
      openSheet({
        title: 'Rename folder',
        input: folder.name,
        confirmLabel: 'Save',
        onConfirm: name => { folder.name = name; saveFolders(folders); render(); }
      });
    });

    // Delete
    const deleteBtn = container.querySelector('#folDeleteBtn');
    if (deleteBtn) deleteBtn.addEventListener('click', () => {
      confirmDeleteFolder(folders, folder);
    });

    enableRowDrag(container, folders, folder);
  }

  // ── Long-press drag to reorder packs inside a folder (list 3 #2) ───────
  // Hold a pack row ~350 ms, then drag: the row follows the finger, siblings
  // shift out of the way, and releasing saves the new order.
  function enableRowDrag(container, folders, folder) {
    const rows = Array.from(container.querySelectorAll('.fol-edit-row.fol-row-in'));
    if (rows.length < 2) return;
    rows.forEach(row => {
      const idx = parseInt(row.dataset.idx, 10);
      let timer = null, dragging = false, startY = 0, targetIdx = idx;
      const step = () => row.offsetHeight + 8;   // row height + margin gap

      const reset = () => {
        clearTimeout(timer); timer = null;
        dragging = false;
        rows.forEach(r => { r.style.transform = ''; r.classList.remove('fol-row-dragging'); });
      };

      row.addEventListener('touchstart', e => {
        if (e.target.closest('.fol-row-btn')) return;   // the − button is not a handle
        startY = e.touches[0].clientY;
        targetIdx = idx;
        timer = setTimeout(() => {
          dragging = true;
          row.classList.add('fol-row-dragging');
          if (navigator.vibrate) navigator.vibrate(10);
        }, 350);
      }, { passive: true });

      row.addEventListener('touchmove', e => {
        const dy = e.touches[0].clientY - startY;
        if (!dragging) {
          // Movement before the long-press fires means scrolling, not dragging
          if (Math.abs(dy) > 10) { clearTimeout(timer); timer = null; }
          return;
        }
        e.preventDefault();                              // lock page scroll
        row.style.transform = 'translateY(' + dy + 'px)';
        const h = step();
        targetIdx = Math.max(0, Math.min(rows.length - 1, idx + Math.round(dy / h)));
        rows.forEach(r => {
          if (r === row) return;
          const ri = parseInt(r.dataset.idx, 10);
          let t = 0;
          if (ri > idx && ri <= targetIdx) t = -h;
          else if (ri < idx && ri >= targetIdx) t = h;
          r.style.transform = t ? 'translateY(' + t + 'px)' : '';
        });
      }, { passive: false });

      row.addEventListener('touchend', () => {
        const wasDragging = dragging;
        const to = targetIdx;
        reset();
        if (wasDragging && to !== idx) {
          const moved = folder.packs.splice(idx, 1)[0];
          folder.packs.splice(to, 0, moved);
          saveFolders(folders);
          render();
        }
      });
      row.addEventListener('touchcancel', reset);
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

// ─── PROGRAMS ─────────────────────────────────────────────────────────────────
(function initPrograms() {
  const PROG_KEY = 'ds_program_progress'; // { programId: { checkpointId: passed, unlockedPacks: [] } }

  // ── Storage ──────────────────────────────────────────────────────────────────
  function getProgress() {
    try { return JSON.parse(localStorage.getItem(PROG_KEY) || '{}'); } catch { return {}; }
  }
  function saveProgress(p) { localStorage.setItem(PROG_KEY, JSON.stringify(p)); }

  function isCheckpointPassed(programId, checkpointId) {
    const p = getProgress();
    return !!(p[programId] && p[programId][checkpointId]);
  }
  function passCheckpoint(programId, checkpointId) {
    const p = getProgress();
    if (!p[programId]) p[programId] = {};
    p[programId][checkpointId] = true;
    saveProgress(p);
  }

  // ── Section lock logic ───────────────────────────────────────────────────────
  // Section N is unlocked if all previous sections' checkpoints are passed
  function isSectionUnlocked(program, sectionIndex) {
    if (sectionIndex === 0) return true;
    for (let i = 0; i < sectionIndex; i++) {
      const cp = program.sections[i].checkpoint;
      if (cp && !isCheckpointPassed(program.id, cp.id)) return false;
    }
    return true;
  }

  // ── Render program list ──────────────────────────────────────────────────────
  function renderProgramList() {
    const container = document.getElementById('libTabPrograms');
    if (!container) return;
    if (typeof programsData === 'undefined' || !programsData.length) {
      container.className = 'library-tab-content library-placeholder';
      container.innerHTML = '<div class="library-placeholder-icon">\u25c8</div>'
        + '<div class="library-placeholder-title">No programs yet</div>'
        + '<div class="library-placeholder-text">Programs are structured learning paths through multiple packs.</div>';
      return;
    }

    container.className = 'library-tab-content';
    let html = '<div class="tab-info">Available programs</div>'
      + '<div class="programs-list">';

    // Filter: hide Extended programs unless owned or complete
    const extOwned = (() => {
      try { return JSON.parse(localStorage.getItem('ds_extended_owned')) || []; }
      catch { return []; }
    })();
    const curLevel = localStorage.getItem('dev_access_level') || 'complete';
    const visiblePrograms = programsData.filter(prog => {
      if (!EXTENDED_PROGRAM_IDS.includes(prog.id)) return true;
      return curLevel === 'complete' || extOwned.includes(prog.id);
    });

    // Owned extended programs still require Pro (yearly Pro model) — in
    // freemium they stay listed with a Pro badge and an upgrade toast (19).
    const progLocked = prog =>
      EXTENDED_PROGRAM_IDS.includes(prog.id) && curLevel === 'freemium';

    visiblePrograms.forEach(prog => {
      // Count progress
      const totalCPs  = prog.sections.filter(s => s.checkpoint).length;
      const passedCPs = prog.sections.filter(s => s.checkpoint && isCheckpointPassed(prog.id, s.checkpoint.id)).length;
      const pct       = totalCPs ? Math.round((passedCPs / totalCPs) * 100) : 0;

      const locked = progLocked(prog);
      html += '<div class="program-card' + (locked ? ' collection-card--locked' : '') + '" data-prog-id="' + prog.id + '" data-locked="' + locked + '">'
        + (locked ? '<div class="pack-lock-badge pack-lock-badge--pro">Pro</div>' : '')
        + '<div class="program-card-icon" style="pointer-events:none"><i class="ti ' + (prog.icon || 'ti-stack') + '"></i></div>'
        + '<div class="program-card-body" style="pointer-events:none">'
        + '<div class="program-card-title">' + prog.title + '</div>'
        + '<div class="program-card-desc">' + prog.description + '</div>'
        + '<div class="program-progress-bar-wrap">'
        + '<div class="program-progress-bar" style="width:' + pct + '%"></div>'
        + '</div>'
        + '<div class="program-progress-label">' + passedCPs + ' / ' + totalCPs + ' checkpoints passed</div>'
        + '</div>'
        + '</div>';
    });
    html += '</div>';
    container.innerHTML = html;

    // Use event delegation to avoid duplicate listeners on re-render
    container.onclick = e => {
      const card = e.target.closest('.program-card');
      if (!card) return;
      if (card.dataset.locked === 'true') {
        if (window.showToast) showToast('This program requires Pro. Upgrade to unlock it.');
        return;
      }
      const prog = programsData.find(p => p.id === card.dataset.progId);
      if (prog) renderProgramDetail(prog);
    };
  }

  // ── Render program detail ─────────────────────────────────────────────────────
  function renderProgramDetail(program) {
    const container = document.getElementById('libTabPrograms');
    let html = '<div class="program-detail">'
      + '<div class="program-detail-topbar">'
      + '<button class="program-back-btn" id="prog-back-btn">\u2190 Programs</button>'
      + '<button class="program-settings-btn" id="prog-settings-btn" title="Program settings"><i class="ti ti-settings"></i></button>'
      + '</div>'
      + '<h2 class="program-detail-title">' + program.title + '</h2>'
      + '<p class="program-detail-desc">' + program.description + '</p>';

    program.sections.forEach((section, si) => {
      const unlocked = isSectionUnlocked(program, si);
      html += '<div class="prog-section' + (unlocked ? '' : ' prog-section--locked') + '">'
        + '<div class="prog-section-label">' + section.title + '</div>';

      // Pack cards
      section.packs.forEach(pack => {
        html += '<div class="collection-card prog-pack-card' + (unlocked ? '' : ' prog-card--locked') + '" '
          + 'data-key="' + pack.key + '" data-label="' + pack.label + '">'
          + '<div><div class="collection-name">' + pack.label + '</div></div>'
          + (unlocked
            ? '<div class="collection-arrow">\u203a</div>'
            : '<div class="prog-lock-icon"><i class="ti ti-lock"></i></div>')
          + '</div>';
      });

      // Checkpoint card
      if (section.checkpoint) {
        const cp     = section.checkpoint;
        const passed = isCheckpointPassed(program.id, cp.id);
        html += '<div class="prog-checkpoint-card' + (!unlocked ? ' prog-card--locked' : '') + '" '
          + 'data-prog-id="' + program.id + '" data-cp-id="' + cp.id + '" data-section="' + si + '">'
          + '<div class="prog-checkpoint-icon">'
          + (passed ? '<i class="ti ti-circle-check" style="color:#4CAF50"></i>'
            : unlocked ? '<i class="ti ti-flag"></i>'
            : '<i class="ti ti-lock"></i>')
          + '</div>'
          + '<div class="prog-checkpoint-body">'
          + '<div class="prog-checkpoint-title">' + cp.title + '</div>'
          + '<div class="prog-checkpoint-meta">'
          + (passed ? 'Passed \u2713'
            : unlocked ? cp.drawCount + ' questions \u00b7 ' + cp.timeLimit + 's per question'
            : 'Complete previous section to unlock')
          + '</div>'
          + '</div>'
          + (unlocked && !passed ? '<div class="collection-arrow">\u203a</div>' : '')
          + '</div>';
      }

      html += '</div>'; // prog-section
    });

    html += '</div>'; // program-detail
    container.innerHTML = html;

    // Back button
    document.getElementById('prog-back-btn').addEventListener('click', renderProgramList);
    const progSettingsBtn = document.getElementById('prog-settings-btn');
    if (progSettingsBtn) {
      progSettingsBtn.addEventListener('click', () => {
        if (window.openProgramSettings) window.openProgramSettings(program.id, program.title);
      });
    }

    // Pack clicks
    container.querySelectorAll('.prog-pack-card').forEach(card => {
      if (!card.classList.contains('prog-card--locked')) {
        card.addEventListener('click', () => {
          // Build context from all unlocked packs in this section
          const section = card.closest('.prog-section');
          const sectionPacks = section
            ? Array.from(section.querySelectorAll('.prog-pack-card:not(.prog-card--locked)')).map(c => ({ key: c.dataset.key, label: c.dataset.label }))
            : [];
          if (window.setPackContext && sectionPacks.length > 1) setPackContext(sectionPacks, card.dataset.key);
          showModeScreen(card.dataset.key, card.dataset.label);
        });
      }
    });

    // Checkpoint clicks
    container.querySelectorAll('.prog-checkpoint-card').forEach(card => {
      const si = parseInt(card.dataset.section);
      if (!isSectionUnlocked(program, si)) return;
      if (isCheckpointPassed(program.id, card.dataset.cpId)) return;
      card.addEventListener('click', () => {
        const cp = program.sections[si].checkpoint;
        startCheckpoint(program, cp, si);
      });
    });
  }

  // ── Checkpoint (quiz) ─────────────────────────────────────────────────────────
  function startCheckpoint(program, checkpoint, sectionIndex) {
    // Draw random questions
    const pool     = [...checkpoint.questions];
    const shuffled = pool.sort(() => Math.random() - 0.5);
    const drawn    = shuffled.slice(0, Math.min(checkpoint.drawCount, pool.length));

    let current   = 0;
    let correct   = 0;
    let timeLeft  = checkpoint.timeLimit;
    let timer     = null;
    let answered  = false;

    const screen = document.getElementById('checkpointScreen');
    const prog   = document.getElementById('checkpointProgress');
    const qText  = document.getElementById('checkpointQuestion');
    const opts   = document.getElementById('checkpointOptions');
    const timEl  = document.getElementById('checkpointTimer');
    const titleEl = document.getElementById('checkpointTitle');

    if (!screen) return;
    titleEl.textContent  = checkpoint.title;
    screen.style.display = 'flex';

    function showQuestion() {
      answered = false;
      clearInterval(timer);
      timeLeft = checkpoint.timeLimit;

      const q = drawn[current];
      prog.textContent  = (current + 1) + ' / ' + drawn.length;
      qText.textContent = q.q;
      timEl.textContent = timeLeft + 's';
      timEl.style.color = '';

      // Shuffle options for display
      const order = q.options.map((o, i) => i).sort(() => Math.random() - 0.5);
      opts.innerHTML = order.map(i =>
        '<button class="cp-option" data-idx="' + i + '">' + q.options[i] + '</button>'
      ).join('');

      opts.querySelectorAll('.cp-option').forEach(btn => {
        btn.addEventListener('click', () => {
          if (answered) return;
          answered = true;
          clearInterval(timer);
          const chosen = parseInt(btn.dataset.idx);
          if (chosen === q.correct) {
            correct++;
            btn.classList.add('cp-option--correct');
          } else {
            btn.classList.add('cp-option--wrong');
            opts.querySelectorAll('.cp-option').forEach(b => {
              if (parseInt(b.dataset.idx) === q.correct) b.classList.add('cp-option--correct');
            });
          }
          setTimeout(nextQuestion, 1000);
        });
      });

      // Timer
      timer = setInterval(() => {
        timeLeft--;
        timEl.textContent = timeLeft + 's';
        if (timeLeft <= 10) timEl.style.color = '#C0392B';
        if (timeLeft <= 0) {
          clearInterval(timer);
          if (!answered) {
            answered = true;
            // Highlight correct answer
            opts.querySelectorAll('.cp-option').forEach(b => {
              if (parseInt(b.dataset.idx) === q.correct) b.classList.add('cp-option--correct');
              else b.classList.add('cp-option--wrong');
            });
            setTimeout(nextQuestion, 1000);
          }
        }
      }, 1000);
    }

    function nextQuestion() {
      current++;
      if (current >= drawn.length) {
        showResult();
      } else {
        showQuestion();
      }
    }

    function showResult() {
      clearInterval(timer);
      const pct     = Math.round((correct / drawn.length) * 100);
      const passed  = pct >= 70;

      if (passed) {
        passCheckpoint(program.id, checkpoint.id);
        // Newly unlocked packs become visible everywhere (packs, topics,
        // search, favorites, folders) — re-apply the visibility layer.
        if (window.accessLevel && window.accessLevel.applyAccessLevel) window.accessLevel.applyAccessLevel();
        if (window._favRenderDash) _favRenderDash();
      }

      titleEl.textContent = checkpoint.title;
      qText.textContent   = '';
      timEl.textContent   = '';
      prog.textContent    = '';
      opts.innerHTML      = '<div class="cp-result">'
        + '<div class="cp-result-score" style="color:' + (passed ? '#4CAF50' : '#C0392B') + '">'
        + correct + ' / ' + drawn.length + '</div>'
        + '<div class="cp-result-pct">' + pct + '%</div>'
        + '<div class="cp-result-label">' + (passed ? 'Checkpoint passed! \u2713' : 'Not passed — try again') + '</div>'
        + '<div class="cp-result-hint">' + (passed ? 'The next section is now unlocked.' : 'You need 70% to pass. Questions are drawn randomly each attempt.') + '</div>'
        + '<button class="btn-primary cp-result-btn" id="cp-done-btn">' + (passed ? 'Continue' : 'Try again') + '</button>'
        + (!passed ? '<button class="btn-secondary cp-result-back-btn" id="cp-back-btn">Back to program</button>' : '')
        + '</div>';

      document.getElementById('cp-done-btn').addEventListener('click', () => {
        screen.style.display = 'none';
        if (passed) {
          renderProgramDetail(program);
          // Scroll to next section after render
          setTimeout(() => {
            const sections = document.querySelectorAll('.prog-section');
            const next = sections[sectionIndex + 1];
            if (next) next.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        } else {
          startCheckpoint(program, checkpoint, sectionIndex);
        }
      });
      const backBtn = document.getElementById('cp-back-btn');
      if (backBtn) {
        backBtn.addEventListener('click', () => {
          screen.style.display = 'none';
          renderProgramDetail(program);
        });
      }
    }

    showQuestion();
  }

  // ── Init ─────────────────────────────────────────────────────────────────────
  window.renderProgramList = renderProgramList;

  const observer = new MutationObserver(() => {
    const el = document.getElementById('libTabPrograms');
    if (el && el.style.display !== 'none') renderProgramList();
  });
  const tabEl = document.getElementById('libTabPrograms');
  if (tabEl) observer.observe(tabEl, { attributes: true, attributeFilter: ['style'] });
  renderProgramList();
})();

// ─── EXTENDED STORE ───────────────────────────────────────────────────────────

(function initExtendedStore() {

  const OWNED_KEY = 'ds_extended_owned';
  const CODES_KEY = 'ds_redeemed_codes';

  // ── Catalog ────────────────────────────────────────────────────────
  // Items may carry an optional `code`: they stay hidden from browsing and
  // search until the code is entered in the search field (case-insensitive).
  // Kits bundle other items: contents = [{ type: 'pack'|'program'|'bundle', id }].
  const CATALOG = {
    packs: [
      {
        id: 'storytelling',
        title: 'Storytelling',
        icon: 'ti-book',
        description: 'Learn to structure and deliver stories that hold attention, create emotion, and make you memorable in any conversation.',
        price: '29 kr',
        details: [
          'Most people tell stories the way they happened. Great storytellers tell them the way they land. This pack teaches the difference.',
          'You get a full training pack with proven storytelling strategies \u2014 story selection, suspense & buildup, transitions, and delivery \u2014 each with real situations to visualize and strong example responses to make your own.',
          'Works in every training mode you own, including handsfree, so you can rehearse your stories while walking or doing chores.',
          'What you\u2019ll get better at: choosing the right story for the moment, hooking listeners in the first sentence, building tension instead of rambling, and landing endings that people remember.',
        ],
      },
    ],
    programs: [
      {
        id: 'conversation-skills',
        title: 'Conversation Skills Foundations',
        icon: 'ti-message-circle',
        description: 'Start conversations with confidence, keep them going, and create genuine connection — from small talk to meaningful depth.',
        price: '49 kr',
        details: [
          'A guided program \u2014 not just a pack. It takes you step by step from opening a conversation with a stranger to creating the kind of depth that turns acquaintances into friends.',
          'The program is organised in sections with checkpoints: you train a set of strategies, prove you\u2019ve got them, and unlock the next stage. Structure keeps you moving where loose browsing stalls.',
          'Covers starting conversations naturally, keeping them alive without interrogating, transitioning to personal topics, and really listening \u2014 the skill everyone thinks they have.',
          'If you only get one thing from Extended, this is the foundation everything else builds on.',
        ],
      },
    ],
    bundles: [
      {
        id: 'assertive::domestic',
        packKey: 'assertive',
        bundleId: 'domestic',
        packTitle: 'Assertive Communication',
        title: 'Domestic Situations',
        icon: 'ti-home',
        description: 'Extra inputs for home and close relationships — partners, family, neighbours, friends. Covers all four assertive strategies.',
        price: '19 kr',
        details: [
          'The hardest place to stay assertive isn\u2019t the office \u2014 it\u2019s home. The stakes are personal, the patterns are old, and the other person knows exactly which buttons to push.',
          'This bundle adds a full set of home-and-close-relationship situations to your Assertive Communication pack: partners, parents, siblings, neighbours and old friends.',
          'Every card plugs straight into the strategies you already train \u2014 Fogging, Broken Record, Negative Inquiry and Negative Assertion \u2014 so the extra material appears right inside your normal sessions.',
          'Small price, big blind spot covered.',
        ],
      },
    ],
    kits: [
      {
        id: 'kit-communicator',
        title: 'The Communicator Kit',
        icon: 'ti-packages',
        description: 'Everything in Extended at a discount — the Storytelling pack, the Conversation Skills program, and the Domestic Situations bundle.',
        price: '79 kr',
        details: [
          'The complete Extended collection in one purchase \u2014 and cheaper than buying the parts separately (97 kr bought one by one).',
          'You get the Storytelling pack, the Conversation Skills Foundations program, and the Domestic Situations bundle. Together they cover the full arc: open a conversation, keep it alive, tell stories that land, and hold your ground with the people closest to you.',
          'Everything is unlocked immediately and works in all your training modes, including handsfree.',
        ],
        contents: [
          { type: 'pack',    id: 'storytelling' },
          { type: 'program', id: 'conversation-skills' },
          { type: 'bundle',  id: 'assertive::domestic' },
        ],
      },
      {
        id: 'kit-classroom',
        title: 'Classroom Kit',
        icon: 'ti-school',
        description: 'The full Extended catalog for classroom use. Available with an access code.',
        price: '59 kr',
        code: 'DEMO2026',
        details: [
          'The full Extended catalog at a special rate for classroom and group use \u2014 unlocked with an access code from your teacher or course leader.',
          'Includes the Storytelling pack, the Conversation Skills Foundations program, and the Domestic Situations bundle, all available in every training mode.',
        ],
        contents: [
          { type: 'pack',    id: 'storytelling' },
          { type: 'program', id: 'conversation-skills' },
          { type: 'bundle',  id: 'assertive::domestic' },
        ],
      },
    ],
  };

  const LIFETIME = {
    id: 'lifetime-pro',
    title: 'Lifetime Pro',
    icon: 'ti-infinity',
    price: '499 kr',
    description: 'One payment, Pro forever. All Pro packs and every Extended purchase stay available — nothing ever expires.',
    details: [
      'Pay once, own it forever. No subscription, no renewal date, no losing your training library the month money is tight.',
      'Lifetime Pro unlocks every Pro pack \u2014 current and future \u2014 plus the Pro-only features like handsfree training. Everything you buy in Extended stays yours on top of it.',
      'If you plan to train for more than a year, this pays for itself. If you plan to train for life, it\u2019s the obvious choice.',
    ],
  };

  const CAT_ORDER = ['packs', 'programs', 'bundles', 'kits'];
  const CAT_LISTS = { packs: 'extPackList', programs: 'extProgramList', bundles: 'extBundleList', kits: 'extKitList' };
  const CAT_MORE  = { packs: 'extMorePacks', programs: 'extMorePrograms', bundles: 'extMoreBundles', kits: 'extMoreKits' };
  const CAT_LABEL = { packs: 'packs', programs: 'programs', bundles: 'bundles', kits: 'kits' };

  // "Load more" expansion state — kept for the session so a purchase
  // re-render doesn't collapse the section the user just expanded.
  const expanded = { packs: false, programs: false, bundles: false, kits: false };

  function getOwned() {
    try { return JSON.parse(localStorage.getItem(OWNED_KEY)) || []; }
    catch { return []; }
  }

  function setOwned(arr) {
    localStorage.setItem(OWNED_KEY, JSON.stringify(arr));
    // Purchases change pack/program visibility across the whole app
    if (window.accessLevel && window.accessLevel.applyAccessLevel) window.accessLevel.applyAccessLevel();
  }

  function isOwned(id) {
    return getOwned().includes(id);
  }

  function getRedeemed() {
    try { return JSON.parse(localStorage.getItem(CODES_KEY)) || []; }
    catch { return []; }
  }
  function redeem(code) {
    const arr = getRedeemed();
    if (!arr.includes(code)) { arr.push(code); localStorage.setItem(CODES_KEY, JSON.stringify(arr)); }
  }

  function getAccessLevel() {
    return (window.accessLevel && window.accessLevel.getLevel()) ||
           localStorage.getItem('dev_access_level') || 'complete';
  }

  // An item is browsable when it has no code, or its code has been redeemed
  function isRevealed(item) {
    return !item.code || getRedeemed().includes(item.code.toUpperCase());
  }
  function visibleItems(cat) {
    return CATALOG[cat].filter(isRevealed);
  }

  // ── Purchasing ─────────────────────────────────────────────────
  function activateBundle(item) {
    const bKey = `bundles:${item.packKey}`;
    try {
      const cur = JSON.parse(localStorage.getItem(bKey)) || [];
      if (!cur.includes(item.bundleId)) { cur.push(item.bundleId); localStorage.setItem(bKey, JSON.stringify(cur)); }
    } catch (e) { localStorage.setItem(bKey, JSON.stringify([item.bundleId])); }
  }

  function buy(type, item) {
    const o = getOwned();
    const add = id => { if (!o.includes(id)) o.push(id); };
    add(item.id);
    if (type === 'bundles') activateBundle(item);
    if (type === 'kits') {
      // A kit grants every item it contains
      (item.contents || []).forEach(c => {
        add(c.id);
        if (c.type === 'bundle') {
          const b = CATALOG.bundles.find(x => x.id === c.id);
          if (b) activateBundle(b);
        }
      });
    }
    setOwned(o);
    if (window.renderProgramList) window.renderProgramList();
    renderExtendedStore();
  }

  // Owned items navigate to their home surface
  function goToOwned(type, item) {
    if (type === 'packs') {
      showTab('library');
      document.querySelectorAll('.library-subnav-btn').forEach(b => b.classList.toggle('active', b.dataset.libTab === 'packs'));
      document.querySelectorAll('.library-tab-content').forEach(t => t.style.display = 'none');
      const pt = document.getElementById('libTabPacks'); if (pt) pt.style.display = '';
      showModeScreen(item.id, item.title);
    } else if (type === 'programs') {
      showTab('library');
      document.querySelectorAll('.library-subnav-btn').forEach(b => b.classList.toggle('active', b.dataset.libTab === 'programs'));
      document.querySelectorAll('.library-tab-content').forEach(t => t.style.display = 'none');
      const pt = document.getElementById('libTabPrograms'); if (pt) pt.style.display = '';
    }
  }

  // ── Info overlay (v1.26.39): selling copy for every purchasable item ──
  function ensureInfoOverlay() {
    let ov = document.getElementById('extInfoOverlay');
    if (ov) return ov;
    ov = document.createElement('div');
    ov.id = 'extInfoOverlay';
    ov.className = 'settings-overlay';
    ov.innerHTML = `
      <div class="settings-panel ext-info-panel">
        <div class="ext-info-head">
          <div class="ext-store-icon" id="extInfoIcon"></div>
          <div>
            <div class="ext-info-title" id="extInfoTitle"></div>
            <div class="ext-store-pack-label" id="extInfoPackLabel" style="display:none;"></div>
          </div>
        </div>
        <div class="ext-info-body" id="extInfoBody"></div>
        <div class="ext-info-includes" id="extInfoIncludes" style="display:none;"></div>
        <div class="ext-store-card-bottom ext-info-bottom">
          <div class="ext-store-price" id="extInfoPrice"></div>
          <button class="ext-store-btn" id="extInfoBuy">Add</button>
          <div class="ext-store-owned" id="extInfoOwned" style="display:none;"><i class="ti ti-check" aria-hidden="true"></i> Added</div>
        </div>
        <button class="settings-close" id="extInfoClose">Close</button>
      </div>`;
    document.body.appendChild(ov);
    ov.addEventListener('click', e => { if (e.target === ov) ov.classList.remove('open'); });
    ov.querySelector('#extInfoClose').addEventListener('click', () => ov.classList.remove('open'));
    return ov;
  }

  function openExtInfo(type, item) {
    const ov = ensureInfoOverlay();
    ov.querySelector('#extInfoIcon').innerHTML = `<i class="ti ${item.icon || 'ti-sparkles'}" aria-hidden="true"></i>`;
    ov.querySelector('#extInfoTitle').textContent = item.title;
    const pl = ov.querySelector('#extInfoPackLabel');
    pl.style.display = item.packTitle ? '' : 'none';
    pl.textContent = item.packTitle ? 'for ' + item.packTitle : '';
    // Selling copy: `details` paragraphs, falling back to the short description
    const body = ov.querySelector('#extInfoBody');
    const paras = (item.details && item.details.length) ? item.details : [item.description];
    body.innerHTML = paras.map(p => '<p>' + p + '</p>').join('');
    // Kit contents
    const inc = ov.querySelector('#extInfoIncludes');
    if (type === 'kits' && item.contents) {
      inc.style.display = '';
      inc.innerHTML = '<div class="ext-info-includes-label">Included in this kit</div>' +
        item.contents.map(c => {
          const srcList = c.type === 'pack' ? CATALOG.packs : c.type === 'program' ? CATALOG.programs : CATALOG.bundles;
          const it = srcList.find(x => x.id === c.id);
          if (!it) return '';
          return `<div class="ext-info-include-row"><i class="ti ${it.icon}" aria-hidden="true"></i> ${it.title}</div>`;
        }).join('');
    } else {
      inc.style.display = 'none';
    }
    // Price / buy / owned
    const owned = type === 'lifetime'
      ? isOwned(item.id)
      : (isOwned(item.id) || getAccessLevel() === 'complete');
    ov.querySelector('#extInfoPrice').style.display = owned ? 'none' : '';
    ov.querySelector('#extInfoPrice').textContent = item.price;
    const buyBtn = ov.querySelector('#extInfoBuy');
    const ownedEl = ov.querySelector('#extInfoOwned');
    buyBtn.style.display = owned ? 'none' : '';
    ownedEl.style.display = owned ? '' : 'none';
    buyBtn.textContent = type === 'lifetime' ? 'Get Lifetime Pro' : 'Add';
    buyBtn.onclick = () => {
      if (type === 'lifetime') {
        const o = getOwned();
        if (!o.includes(item.id)) o.push(item.id);
        setOwned(o);
        if (window.showToast) showToast('Lifetime Pro activated.');
        renderExtendedStore();
      } else {
        buy(type, item);
      }
      ov.classList.remove('open');
    };
    ov.classList.add('open');
    ov.querySelector('.ext-info-panel').scrollTop = 0;
  }

  // ── Card factory (shared by browsing and search results) ──────────────
  function makeCard(type, item) {
    const owned = isOwned(item.id) || getAccessLevel() === 'complete';
    const card = document.createElement('div');
    card.className = 'ext-store-card';
    const packLabel = item.packTitle ? `<div class="ext-store-pack-label">for ${item.packTitle}</div>` : '';
    const includes = (type === 'kits' && item.contents)
      ? `<div class="ext-store-includes">Includes: ` + item.contents.map(c => {
          const src = c.type === 'pack' ? CATALOG.packs : c.type === 'program' ? CATALOG.programs : CATALOG.bundles;
          const it = src.find(x => x.id === c.id);
          return it ? it.title : c.id;
        }).join(', ') + `</div>`
      : '';
    card.innerHTML = `
      <div class="ext-store-card-top">
        <div class="ext-store-icon"><i class="ti ${item.icon}" aria-hidden="true"></i></div>
        <div class="ext-store-info">
          <div class="ext-store-title">${item.title}</div>
          ${packLabel}
          <div class="ext-store-desc">${item.description}</div>
          ${includes}
        </div>
      </div>
      <div class="ext-store-card-bottom">
        ${owned
          ? `<div class="ext-store-actions">
               <button class="ext-info-btn" aria-label="More about ${item.title}"><i class="ti ti-info-circle" aria-hidden="true"></i> Info</button>
               <div class="ext-store-owned"><i class="ti ti-check" aria-hidden="true"></i> Added</div>
             </div>`
          : `<div class="ext-store-price">${item.price}</div>
             <div class="ext-store-actions">
               <button class="ext-info-btn" aria-label="More about ${item.title}"><i class="ti ti-info-circle" aria-hidden="true"></i> Info</button>
               <button class="ext-store-btn">Add</button>
             </div>`
        }
      </div>`;
    card.querySelector('.ext-info-btn').addEventListener('click', e => {
      e.stopPropagation();
      openExtInfo(type, item);
    });
    if (!owned) {
      card.querySelector('.ext-store-btn').addEventListener('click', () => buy(type, item));
    } else if (type === 'packs' || type === 'programs') {
      card.style.cursor = 'pointer';
      card.addEventListener('click', () => goToOwned(type, item));
    }
    return card;
  }

  // ── Lifetime Pro offer ───────────────────────────────────────────
  function renderLifetime() {
    const host = document.getElementById('extLifetimeCard');
    if (!host) return;
    const owned = isOwned(LIFETIME.id);
    host.innerHTML = `
      <div class="ext-lifetime-title"><i class="ti ti-infinity" aria-hidden="true"></i> ${LIFETIME.title}</div>
      <div class="ext-lifetime-desc">${LIFETIME.description}</div>
      <div class="ext-lifetime-bottom">
        ${owned
          ? `<div class="ext-store-actions">
               <button class="ext-info-btn ext-info-btn--light" id="extLifetimeInfo"><i class="ti ti-info-circle" aria-hidden="true"></i> Info</button>
               <div class="ext-lifetime-owned"><i class="ti ti-check" aria-hidden="true"></i> Lifetime Pro active</div>
             </div>`
          : `<div class="ext-lifetime-price">${LIFETIME.price}</div>
             <div class="ext-store-actions">
               <button class="ext-info-btn ext-info-btn--light" id="extLifetimeInfo"><i class="ti ti-info-circle" aria-hidden="true"></i> Info</button>
               <button class="ext-lifetime-btn" id="extLifetimeBuy">Get Lifetime Pro</button>
             </div>`
        }
      </div>`;
    const infoBtn = host.querySelector('#extLifetimeInfo');
    if (infoBtn) infoBtn.addEventListener('click', () => openExtInfo('lifetime', LIFETIME));
    const btn = host.querySelector('#extLifetimeBuy');
    if (btn) btn.addEventListener('click', () => {
      const o = getOwned();
      if (!o.includes(LIFETIME.id)) o.push(LIFETIME.id);
      setOwned(o);
      if (window.showToast) showToast('Lifetime Pro activated.');
      renderExtendedStore();
    });
  }

  // ── Browsing sections (v1.26.39): max 3 items per category, then a
  //    "View more" button that expands the rest; expanded sections get a
  //    "Show fewer" button that collapses back to 3. State is per-session
  //    so a purchase re-render keeps whatever the user expanded.
  const CAT_PREVIEW = 3;
  function renderBrowse() {
    CAT_ORDER.forEach(cat => {
      const listEl = document.getElementById(CAT_LISTS[cat]);
      const moreEl = document.getElementById(CAT_MORE[cat]);
      if (!listEl) return;
      const items = visibleItems(cat);
      const shown = expanded[cat] ? items : items.slice(0, CAT_PREVIEW);
      listEl.innerHTML = '';
      shown.forEach(item => listEl.appendChild(makeCard(cat, item)));
      if (moreEl) {
        if (items.length <= CAT_PREVIEW) {
          moreEl.style.display = 'none';
        } else if (!expanded[cat]) {
          moreEl.style.display = '';
          moreEl.textContent = 'View more ' + CAT_LABEL[cat] + ' (' + (items.length - shown.length) + ')';
          moreEl.onclick = () => { expanded[cat] = true; renderBrowse(); };
        } else {
          moreEl.style.display = '';
          moreEl.textContent = 'Show fewer ' + CAT_LABEL[cat];
          moreEl.onclick = () => { expanded[cat] = false; renderBrowse(); };
        }
      }
    });
  }

  // ── Search + code redemption ───────────────────────────────────────
  function runExtSearch() {
    const input   = document.getElementById('extSearchInput');
    const results = document.getElementById('extSearchResults');
    const browse  = document.getElementById('extBrowse');
    if (!input || !results || !browse) return;
    const q = input.value.trim().toLowerCase();

    if (!q) {
      results.innerHTML = '';
      browse.style.display = '';
      return;
    }

    // Code redemption: an exact match against an unredeemed code unlocks it
    const codeQ = input.value.trim().toUpperCase();
    let redeemedNow = null;
    CAT_ORDER.forEach(cat => {
      CATALOG[cat].forEach(item => {
        if (item.code && item.code.toUpperCase() === codeQ && !getRedeemed().includes(item.code.toUpperCase())) {
          redeem(item.code.toUpperCase());
          redeemedNow = item;
        }
      });
    });
    if (redeemedNow) {
      input.value = '';
      results.innerHTML = '<div class="ext-code-msg">Code accepted \u2014 \u201c' + redeemedNow.title + '\u201d unlocked.</div>';
      browse.style.display = '';
      renderBrowse();
      return;
    }

    // Plain search across all revealed items
    browse.style.display = 'none';
    results.innerHTML = '';
    let hits = 0;
    CAT_ORDER.forEach(cat => {
      visibleItems(cat).forEach(item => {
        const hay = (item.title + ' ' + item.description + ' ' + (item.packTitle || '')).toLowerCase();
        if (hay.includes(q)) { results.appendChild(makeCard(cat, item)); hits++; }
      });
    });
    if (!hits) {
      results.innerHTML = '<div class="ext-search-empty">No matches. If you have an access code, enter the full code.</div>';
    }
  }

  function renderExtendedStore() {
    renderLifetime();
    renderBrowse();
    runExtSearch();   // keeps active search results in sync after purchases
  }
  // Expose so showTab can trigger re-render
  window.renderExtendedStore = renderExtendedStore;

  const searchInput = document.getElementById('extSearchInput');
  if (searchInput) searchInput.addEventListener('input', runExtSearch);

  // Re-render when Extended tab is shown
  const origShowTab2 = window.showTab || showTab;
  window.showTab = function(tab) {
    origShowTab2(tab);
    if (tab === 'extended') renderExtendedStore();
  };

  // Also re-apply when access level changes (so Owned state updates)
  const extScreen = document.getElementById('extendedScreen');
  if (extScreen) {
    new MutationObserver(() => {
      if (extScreen.style.display === 'flex') renderExtendedStore();
    }).observe(extScreen, { attributes: true, attributeFilter: ['style'] });
  }

})();
