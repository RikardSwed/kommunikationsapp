// editor-ui.js — Deckstack Pack Editor UI
// Depends on editor-core.js being loaded first

// ── STATE ─────────────────────────────────────────────────────────────────────
let currentPack   = null;  // the pack object being edited
let currentMode   = null;  // which mode tab is open
let currentStrat  = 0;     // selected strategy index
let currentBundle = 'default'; // selected bundle id
let isDirty       = false;  // unsaved changes

// ── INIT ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  showHome();
});

// ── AUTO-SAVE ─────────────────────────────────────────────────────────────────
function markDirty() {
  isDirty = true;
  if (currentPack) saveEditorPack(currentPack);
}

// ── SCREEN MANAGEMENT ────────────────────────────────────────────────────────
function showEl(id)  { document.getElementById(id).style.display = ''; }
function hideEl(id)  { document.getElementById(id).style.display = 'none'; }
function setHTML(id, html) { document.getElementById(id).innerHTML = html; }

function showScreen(id) {
  ['screen-home','screen-editor'].forEach(s => hideEl(s));
  showEl(id);
}

// ── HOME SCREEN ───────────────────────────────────────────────────────────────
function showHome() {
  showScreen('screen-home');
  renderPackList();
}

function renderPackList() {
  const appPacks    = loadAppPacks();
  const editorPacks = getAllEditorPacks();

  // Merge: editor drafts that are also app packs show as "edit existing"
  // Pure editor drafts (isNew) show as "in progress"
  const appKeys     = new Set(appPacks.map(p => p.key));
  const draftKeys   = Object.keys(editorPacks).filter(k => !appKeys.has(k));
  const existingKeys = appPacks.map(p => p.key);

  let html = '';

  // In-progress new packs
  if (draftKeys.length) {
    html += `<div class="list-section-label">In progress</div>`;
    draftKeys.forEach(key => {
      const p = editorPacks[key];
      html += packListItem(p.name, key, 'draft');
    });
  }

  // App packs
  html += `<div class="list-section-label">App packs</div>`;
  existingKeys.forEach(key => {
    const draft = editorPacks[key];
    const label = draft ? draft.name : appPacks.find(p => p.key === key).name;
    html += packListItem(label, key, draft ? 'modified' : 'app');
  });

  setHTML('pack-list', html);

  // Bind clicks
  document.querySelectorAll('.pack-list-item').forEach(el => {
    el.addEventListener('click', () => openPack(el.dataset.key));
  });

  // Delete buttons
  document.querySelectorAll('.pack-delete-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      confirmDeletePack(btn.dataset.key, btn.dataset.name);
    });
  });
}

function packListItem(name, key, type) {
  const badge = type === 'modified' ? '<span class="badge badge--modified">Modified</span>'
              : type === 'draft'    ? '<span class="badge badge--draft">Draft</span>'
              : '';
  return `
    <div class="pack-list-item" data-key="${key}">
      <span class="pack-list-name">${name}${badge}</span>
      <button class="icon-btn pack-delete-btn" data-key="${key}" data-name="${name}" title="Delete draft">✕</button>
    </div>`;
}

function confirmDeletePack(key, name) {
  const confirmed = confirm(`Delete draft "${name}"? This cannot be undone.`);
  if (confirmed) {
    deleteEditorPack(key);
    renderPackList();
  }
}

// ── OPEN PACK ────────────────────────────────────────────────────────────────
function openPack(key) {
  const editorPacks = getAllEditorPacks();
  if (editorPacks[key]) {
    currentPack = editorPacks[key];
  } else {
    // Load from app data
    currentPack = packFromAppData(key);
    saveEditorPack(currentPack);
  }
  setActivePack(key);
  showEditor();
}

function createNewPack() {
  const name = prompt('Pack name:');
  if (!name || !name.trim()) return;
  const pack = emptyPack(name.trim());
  saveEditorPack(pack);
  currentPack = pack;
  setActivePack(pack.key);
  showEditor();
}

// ── EDITOR SCREEN ─────────────────────────────────────────────────────────────
function showEditor() {
  showScreen('screen-editor');
  currentMode   = MODES[0].id;
  currentStrat  = 0;
  currentBundle = 'default';
  renderEditor();
}

function renderEditor() {
  renderPackHeader();
  renderModeTabs();
  renderModeContent();
}

// ── PACK HEADER ───────────────────────────────────────────────────────────────
function renderPackHeader() {
  const el = document.getElementById('pack-header');
  el.innerHTML = `
    <div class="pack-title-row">
      <span class="pack-title" id="pack-title-display">${currentPack.name}</span>
      <button class="icon-btn" id="pack-rename-btn" title="Rename pack">✎</button>
    </div>
    <div class="pack-actions">
      <button class="btn btn--secondary" id="save-version-btn">Save version</button>
      <button class="btn btn--primary" id="export-btn">Export JSON</button>
      <button class="btn btn--ghost" id="back-btn">← All packs</button>
    </div>`;

  document.getElementById('pack-rename-btn').addEventListener('click', renamePack);
  document.getElementById('save-version-btn').addEventListener('click', doSaveVersion);
  document.getElementById('export-btn').addEventListener('click', () => downloadExport(currentPack));
  document.getElementById('back-btn').addEventListener('click', showHome);
}

function renamePack() {
  const name = prompt('New pack name:', currentPack.name);
  if (!name || !name.trim()) return;
  currentPack.name = name.trim();
  markDirty();
  renderPackHeader();
}

function doSaveVersion() {
  const name = prompt('Version name (e.g. "Added workplace bundle"):');
  if (!name || !name.trim()) return;
  saveVersion(currentPack, name.trim());
  showToast('Version saved');
}

// ── MODE TABS ────────────────────────────────────────────────────────────────
function renderModeTabs() {
  const html = MODES.map(m => `
    <button class="mode-tab ${m.id === currentMode ? 'mode-tab--active' : ''}" data-mode="${m.id}">
      ${m.label}
    </button>`).join('');
  setHTML('mode-tabs', html);
  document.querySelectorAll('.mode-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      currentMode   = btn.dataset.mode;
      currentStrat  = 0;
      currentBundle = 'default';
      renderModeTabs();
      renderModeContent();
    });
  });
}

// ── MODE CONTENT ──────────────────────────────────────────────────────────────
function renderModeContent() {
  const modeData = currentPack[currentMode] || emptyModeData(currentMode);
  if (!currentPack[currentMode]) {
    currentPack[currentMode] = modeData;
    markDirty();
  }

  const strats  = modeData.strategies || [];
  const bundles = modeData.bundles    || [];

  let html = `<div class="mode-body">`;

  // ── Strategy selector
  html += `<div class="section-row">
    <label class="field-label">Strategy</label>
    <div class="strategy-selector-row">
      <select class="select" id="strategy-select">
        ${strats.map((s,i) => `<option value="${i}" ${i===currentStrat?'selected':''}>${s.name || '(unnamed)'}</option>`).join('')}
      </select>
      <button class="icon-btn" id="strat-rename-btn" title="Rename strategy">✎</button>
      <button class="btn btn--ghost btn--sm" id="add-strat-btn">+ Strategy</button>
      <button class="icon-btn danger" id="del-strat-btn" title="Delete strategy">✕</button>
    </div>
  </div>`;

  // ── Description
  const strat = strats[currentStrat] || emptyStrategy(currentMode);
  html += `<div class="section-row">
    <details class="expandable" id="desc-expandable">
      <summary class="expandable-summary">Explanation <span class="expand-hint">${strat.description ? '(has content)' : '(empty)'}</span></summary>
      <textarea class="textarea" id="desc-textarea" rows="6" placeholder="Strategy explanation...">${escHtml(strat.description || '')}</textarea>
    </details>
  </div>`;

  // ── Bundle selector (only for modes with inputs)
  const hasBundles = currentMode !== 'memorize';
  if (hasBundles) {
    const allBundles = [{ id: 'default', name: 'Default bundle' }, ...bundles];
    html += `<div class="section-row bundle-row">
      <label class="field-label">Input bundle</label>
      <div class="bundle-selector-row">
        <select class="select" id="bundle-select">
          ${allBundles.map(b => `<option value="${b.id}" ${b.id===currentBundle?'selected':''}>${b.name}</option>`).join('')}
        </select>
        <button class="btn btn--ghost btn--sm" id="add-bundle-btn">+ Bundle</button>
        ${currentBundle !== 'default' ? `<button class="icon-btn danger" id="del-bundle-btn" title="Delete bundle">✕</button>` : ''}
      </div>
    </div>`;
  }

  // ── Cards / inputs
  html += `<div class="cards-section">`;
  html += renderCards(strat, currentMode, currentBundle);
  html += `</div>`;
  html += `</div>`; // mode-body

  setHTML('mode-content', html);
  bindModeEvents(modeData, strats, bundles);
}

// ── CARD LIST ─────────────────────────────────────────────────────────────────
function renderCards(strat, modeId, bundleId) {
  if (modeId === 'memorize') {
    const cards = strat.cards || [];
    return cardsTable(cards, 'card', 'Front', 'Back');
  }
  // Filter inputs by bundle
  const allInputs = strat.inputs || strat.steps || [];
  const inputs    = allInputs.filter(i => !i.bundle || i.bundle === bundleId);
  const label     = modeId === 'sequences' ? 'Prompt' : 'Situation';
  return cardsTable(inputs, bundleId === 'default' ? 'default' : bundleId, label, 'Response');
}

function cardsTable(items, bundleId, frontLabel, backLabel) {
  let html = `
    <div class="cards-header">
      <span class="cards-col-label">${frontLabel}</span>
      <span class="cards-col-label">${backLabel}</span>
      <span></span>
    </div>`;

  items.forEach((item, i) => {
    const front = item.q || item.front || '';
    const back  = item.a || item.back  || '';
    html += `
      <div class="card-row" data-index="${i}" data-bundle="${bundleId}">
        <textarea class="card-field card-front" data-field="q" rows="2" placeholder="${frontLabel}...">${escHtml(front)}</textarea>
        <textarea class="card-field card-back"  data-field="a" rows="2" placeholder="${backLabel}...">${escHtml(back)}</textarea>
        <button class="icon-btn danger card-del-btn" data-index="${i}" title="Remove">✕</button>
      </div>`;
  });

  html += `<button class="btn btn--ghost add-card-btn" data-bundle="${bundleId}">+ Add card</button>`;
  return html;
}

// ── EVENT BINDING ─────────────────────────────────────────────────────────────
function bindModeEvents(modeData, strats, bundles) {
  const strat = strats[currentStrat];

  // Strategy select
  document.getElementById('strategy-select').addEventListener('change', e => {
    currentStrat = parseInt(e.target.value);
    renderModeContent();
  });

  // Rename strategy
  document.getElementById('strat-rename-btn').addEventListener('click', () => {
    const name = prompt('Strategy name:', strat.name || '');
    if (name === null) return;
    strat.name = name.trim();
    markDirty();
    renderModeContent();
  });

  // Add strategy
  document.getElementById('add-strat-btn').addEventListener('click', () => {
    const name = prompt('New strategy name:');
    if (!name || !name.trim()) return;
    const s = emptyStrategy(currentMode);
    s.name = name.trim();
    modeData.strategies.push(s);
    currentStrat = modeData.strategies.length - 1;
    markDirty();
    renderModeContent();
  });

  // Delete strategy
  document.getElementById('del-strat-btn').addEventListener('click', () => {
    if (modeData.strategies.length <= 1) { showToast('Need at least one strategy'); return; }
    if (!confirm(`Delete "${strat.name || 'this strategy'}"?`)) return;
    modeData.strategies.splice(currentStrat, 1);
    currentStrat = Math.max(0, currentStrat - 1);
    markDirty();
    renderModeContent();
  });

  // Description textarea
  const descTA = document.getElementById('desc-textarea');
  if (descTA) {
    descTA.addEventListener('input', () => {
      strat.description = descTA.value;
      markDirty();
    });
  }

  // Bundle select
  const bundleSel = document.getElementById('bundle-select');
  if (bundleSel) {
    bundleSel.addEventListener('change', e => {
      currentBundle = e.target.value;
      renderModeContent();
    });
  }

  // Add bundle
  const addBundleBtn = document.getElementById('add-bundle-btn');
  if (addBundleBtn) {
    addBundleBtn.addEventListener('click', () => {
      const name = prompt('Bundle name (e.g. "Workplace & Social"):');
      if (!name || !name.trim()) return;
      const b = emptyBundle(name.trim());
      modeData.bundles.push(b);
      currentBundle = b.id;
      markDirty();
      renderModeContent();
    });
  }

  // Delete bundle
  const delBundleBtn = document.getElementById('del-bundle-btn');
  if (delBundleBtn) {
    delBundleBtn.addEventListener('click', () => {
      if (!confirm(`Delete bundle "${currentBundle}"? Cards in this bundle will also be removed.`)) return;
      // Remove inputs with this bundle tag
      if (strat.inputs) strat.inputs = strat.inputs.filter(i => i.bundle !== currentBundle);
      const idx = modeData.bundles.findIndex(b => b.id === currentBundle);
      if (idx >= 0) modeData.bundles.splice(idx, 1);
      currentBundle = 'default';
      markDirty();
      renderModeContent();
    });
  }

  // Card field edits
  document.querySelectorAll('.card-field').forEach(ta => {
    ta.addEventListener('input', () => {
      const row    = ta.closest('.card-row');
      const idx    = parseInt(row.dataset.index);
      const bundle = row.dataset.bundle;
      const field  = ta.dataset.field;
      const items  = currentMode === 'memorize'
        ? (strat.cards || [])
        : (strat.inputs || strat.steps || []).filter(i => !i.bundle || i.bundle === bundle);
      if (items[idx]) {
        items[idx][field] = ta.value;
        markDirty();
      }
    });
  });

  // Add card
  document.querySelectorAll('.add-card-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const bundle = btn.dataset.bundle;
      if (currentMode === 'memorize') {
        strat.cards = strat.cards || [];
        strat.cards.push(emptyCard());
      } else {
        strat.inputs = strat.inputs || [];
        const newInput = emptyInput();
        if (bundle !== 'default') newInput.bundle = bundle;
        strat.inputs.push(newInput);
      }
      markDirty();
      renderModeContent();
      // Scroll to bottom of cards section
      setTimeout(() => {
        const last = document.querySelector('.card-row:last-of-type');
        if (last) last.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
    });
  });

  // Delete card
  document.querySelectorAll('.card-del-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx    = parseInt(btn.dataset.index);
      const bundle = btn.closest('.card-row').dataset.bundle;
      if (currentMode === 'memorize') {
        if ((strat.cards || []).length <= 1) { showToast('Need at least one card'); return; }
        strat.cards.splice(idx, 1);
      } else {
        const all     = strat.inputs || strat.steps || [];
        const filtered = all.filter(i => !i.bundle || i.bundle === bundle);
        if (filtered.length <= 1) { showToast('Need at least one card'); return; }
        const globalIdx = all.indexOf(filtered[idx]);
        if (globalIdx >= 0) all.splice(globalIdx, 1);
      }
      markDirty();
      renderModeContent();
    });
  });
}

// ── TOAST ─────────────────────────────────────────────────────────────────────
function showToast(msg) {
  let t = document.getElementById('editor-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'editor-toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('toast--visible');
  setTimeout(() => t.classList.remove('toast--visible'), 2200);
}

// ── UTIL ──────────────────────────────────────────────────────────────────────
function escHtml(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
