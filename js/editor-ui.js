// editor-ui.js — Deckstack Pack Editor UI

let currentPack   = null;
let currentMode   = MODES[0].id;
let currentStrat  = 0;
let currentBundle = 'default';

// ── INIT ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  showHome();
});

// ── AUTO-SAVE ─────────────────────────────────────────────────────────────────
function markDirty() {
  if (!currentPack) return;
  const ok = saveEditorPack(currentPack);
  showSaveIndicator(ok);
}

function showSaveIndicator(ok) {
  const el = document.getElementById('save-indicator');
  if (!el) return;
  el.textContent = ok ? '✓ Saved' : '⚠ Save failed';
  el.style.opacity = '1';
  clearTimeout(el._t);
  el._t = setTimeout(() => { el.style.opacity = '0'; }, 1800);
}

// ── SCREENS ───────────────────────────────────────────────────────────────────
function showEl(id)  { const e = document.getElementById(id); if (e) e.style.display = ''; }
function hideEl(id)  { const e = document.getElementById(id); if (e) e.style.display = 'none'; }
function setHTML(id, html) { const e = document.getElementById(id); if (e) e.innerHTML = html; }

function showScreen(id) {
  ['screen-home','screen-editor'].forEach(s => hideEl(s));
  showEl(id);
}

// ── HOME ──────────────────────────────────────────────────────────────────────
function showHome() {
  currentPack = null;
  showScreen('screen-home');
  renderPackList();
}

function renderPackList() {
  const appPacks    = loadAppPacks();
  const editorPacks = getAllEditorPacks();
  const appKeys     = new Set(appPacks.map(p => p.key));
  const draftKeys   = Object.keys(editorPacks).filter(k => !appKeys.has(k));

  let html = '';

  if (draftKeys.length) {
    html += `<div class="list-label">In progress</div>`;
    draftKeys.forEach(key => {
      html += packRow(editorPacks[key].name, key, 'draft');
    });
  }

  if (appPacks.length) {
    html += `<div class="list-label">App packs</div>`;
    appPacks.forEach(p => {
      const hasDraft = !!editorPacks[p.key];
      html += packRow(editorPacks[p.key]?.name || p.name, p.key, hasDraft ? 'modified' : 'app');
    });
  } else {
    html += `<div class="empty-state">No app packs found. Make sure the data files are loaded correctly.</div>`;
  }

  setHTML('pack-list', html);

  document.querySelectorAll('.pack-row').forEach(el => {
    el.addEventListener('click', () => openPack(el.dataset.key));
  });
  document.querySelectorAll('.pack-del').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      if (confirm(`Delete draft "${btn.dataset.name}"? This cannot be undone.`)) {
        deleteEditorPack(btn.dataset.key);
        renderPackList();
      }
    });
  });
}

function packRow(name, key, type) {
  const badge = type === 'modified' ? `<span class="badge badge--mod">Unsaved changes</span>`
              : type === 'draft'    ? `<span class="badge badge--draft">Draft</span>`
              : '';
  const delBtn = (type !== 'app')
    ? `<button class="icon-btn pack-del" data-key="${key}" data-name="${name}" title="Delete draft">✕</button>`
    : '';
  return `
    <div class="pack-row" data-key="${key}">
      <span class="pack-row-name">${name}${badge}</span>
      ${delBtn}
    </div>`;
}

// ── OPEN / CREATE ─────────────────────────────────────────────────────────────
function openPack(key) {
  const drafts = getAllEditorPacks();
  currentPack  = drafts[key] || packFromAppData(key);
  if (!drafts[key]) saveEditorPack(currentPack);
  setActivePack(key);
  currentMode   = MODES[0].id;
  currentStrat  = 0;
  currentBundle = 'default';
  showEditor();
}

function createNewPack() {
  const name = prompt('Pack name:');
  if (!name?.trim()) return;
  currentPack = emptyPack(name.trim());
  saveEditorPack(currentPack);
  setActivePack(currentPack.key);
  currentMode   = MODES[0].id;
  currentStrat  = 0;
  currentBundle = 'default';
  showEditor();
}

// ── EDITOR ────────────────────────────────────────────────────────────────────
function showEditor() {
  showScreen('screen-editor');
  renderPackHeader();
  renderModeTabs();
  renderModeContent();
}

function renderPackHeader() {
  setHTML('pack-header', `
    <div class="pack-title-row">
      <span class="pack-title">${escHtml(currentPack.name)}</span>
      <button class="icon-btn" id="rename-btn" title="Rename">✎</button>
      <span id="save-indicator" style="font-size:12px;color:#8A6040;margin-left:8px;opacity:0;transition:opacity .3s;"></span>
    </div>
    <div class="pack-actions">
      <button class="btn btn--ghost btn--sm" id="back-btn">← All packs</button>
      <button class="btn btn--secondary btn--sm" id="version-btn">Save version…</button>
      <button class="btn btn--primary btn--sm" id="export-btn">Export JSON</button>
    </div>`);

  document.getElementById('rename-btn').addEventListener('click', () => {
    const name = prompt('New name:', currentPack.name);
    if (!name?.trim()) return;
    currentPack.name = name.trim();
    markDirty();
    renderPackHeader();
  });
  document.getElementById('back-btn').addEventListener('click', showHome);
  document.getElementById('version-btn').addEventListener('click', () => {
    const name = prompt('Version name (e.g. "Added workplace bundle"):');
    if (!name?.trim()) return;
    saveVersion(currentPack, name.trim());
    showToast('Version saved');
  });
  document.getElementById('export-btn').addEventListener('click', () => downloadExport(currentPack));
}

// ── MODE TABS ─────────────────────────────────────────────────────────────────
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
  const mode     = MODES.find(m => m.id === currentMode);
  const modeData = currentPack[currentMode] || emptyModeData(currentMode);
  if (!currentPack[currentMode]) { currentPack[currentMode] = modeData; markDirty(); }

  const strats  = modeData.strategies || [];
  const bundles = modeData.bundles    || [];
  const strat   = strats[currentStrat] || emptyStrategy(currentMode);

  const isMem  = currentMode === 'memorize';
  const isSeq  = currentMode === 'sequences';
  const hasBundles = !isMem;

  let html = `<div class="mode-body">`;

  // ── Strategy / category selector
  html += `
    <div class="field-block">
      <label class="field-label">${mode.stratLabel}</label>
      <div class="selector-row">
        <select class="select" id="strat-select">
          ${strats.map((s,i) => `<option value="${i}" ${i===currentStrat?'selected':''}>${escHtml(s.name||'(unnamed)')}</option>`).join('')}
        </select>
        <button class="icon-btn" id="strat-rename-btn" title="Rename">✎</button>
        <button class="btn btn--ghost btn--sm" id="add-strat-btn">+ Add</button>
        <button class="icon-btn danger" id="del-strat-btn" title="Delete">✕</button>
      </div>
    </div>`;

  // ── Explanation
  html += `
    <div class="field-block">
      <details class="expandable">
        <summary class="expandable-summary">
          Explanation
          <span class="hint-text">${strat.description ? '— has content' : '— empty'}</span>
        </summary>
        <textarea class="textarea" id="desc-ta" rows="7" placeholder="Explain this ${mode.stratLabel.toLowerCase()}...">${escHtml(strat.description||'')}</textarea>
      </details>
    </div>`;

  // ── Bundle picker
  if (hasBundles) {
    const allBundles = [{ id: 'default', name: 'Default bundle' }, ...bundles];
    html += `
      <div class="field-block bundle-block">
        <label class="field-label">Input bundle</label>
        <div class="selector-row">
          <select class="select" id="bundle-select">
            ${allBundles.map(b => `<option value="${b.id}" ${b.id===currentBundle?'selected':''}>${escHtml(b.name)}</option>`).join('')}
          </select>
          <button class="btn btn--ghost btn--sm" id="add-bundle-btn">+ Add bundle</button>
          ${currentBundle !== 'default' ? `<button class="icon-btn danger" id="del-bundle-btn" title="Delete bundle">✕</button>` : ''}
        </div>
      </div>`;
  }

  // ── Cards table
  const frontLabel = isMem ? 'Front' : (isSeq ? 'Prompt' : 'Situation');
  const backLabel  = isMem ? 'Back'  : 'Response';
  const items      = isMem
    ? (strat.cards || [])
    : isSeq
      ? (strat.steps || [])
      : (strat.inputs || []).filter(i => !i.bundle || i.bundle === currentBundle);

  html += `
    <div class="cards-section">
      <div class="cards-header">
        <span class="col-label">${frontLabel}</span>
        <span class="col-label">${backLabel}</span>
        <span></span>
      </div>
      ${items.map((item, i) => `
        <div class="card-row" data-index="${i}">
          <textarea class="card-ta" data-field="q" rows="2" placeholder="${frontLabel}...">${escHtml(item.q||item.front||'')}</textarea>
          <textarea class="card-ta" data-field="a" rows="2" placeholder="${backLabel}...">${escHtml(item.a||item.back||'')}</textarea>
          <button class="icon-btn danger card-del" data-index="${i}" title="Remove">✕</button>
        </div>`).join('')}
      <button class="btn btn--ghost add-card-btn" style="width:100%;margin-top:8px;">+ Add ${mode.cardLabel.toLowerCase()}</button>
    </div>`;

  html += `</div>`; // mode-body
  setHTML('mode-content', html);
  bindEvents(modeData, strats, strat, bundles, isMem, isSeq);
}

// ── EVENT BINDING ─────────────────────────────────────────────────────────────
function bindEvents(modeData, strats, strat, bundles, isMem, isSeq) {

  // Strategy select
  document.getElementById('strat-select').addEventListener('change', e => {
    currentStrat = parseInt(e.target.value);
    currentBundle = 'default';
    renderModeContent();
  });

  // Rename strategy
  document.getElementById('strat-rename-btn').addEventListener('click', () => {
    const name = prompt('Name:', strat.name || '');
    if (name === null) return;
    strat.name = name.trim();
    markDirty(); renderModeContent();
  });

  // Add strategy
  document.getElementById('add-strat-btn').addEventListener('click', () => {
    const name = prompt('Name for new entry:');
    if (!name?.trim()) return;
    const s = emptyStrategy(currentMode); s.name = name.trim();
    modeData.strategies.push(s);
    currentStrat = modeData.strategies.length - 1;
    markDirty(); renderModeContent();
  });

  // Delete strategy
  document.getElementById('del-strat-btn').addEventListener('click', () => {
    if (modeData.strategies.length <= 1) { showToast('Need at least one entry'); return; }
    if (!confirm(`Delete "${strat.name || 'this entry'}"?`)) return;
    modeData.strategies.splice(currentStrat, 1);
    currentStrat = Math.max(0, currentStrat - 1);
    markDirty(); renderModeContent();
  });

  // Description
  const descTa = document.getElementById('desc-ta');
  if (descTa) {
    descTa.addEventListener('input', () => { strat.description = descTa.value; markDirty(); });
  }

  // Bundle select
  const bundleSel = document.getElementById('bundle-select');
  if (bundleSel) {
    bundleSel.addEventListener('change', e => { currentBundle = e.target.value; renderModeContent(); });
  }

  // Add bundle
  const addBundleBtn = document.getElementById('add-bundle-btn');
  if (addBundleBtn) {
    addBundleBtn.addEventListener('click', () => {
      const name = prompt('Bundle name (e.g. "Workplace & Social"):');
      if (!name?.trim()) return;
      const id = slugify(name.trim());
      if (modeData.bundles.find(b => b.id === id)) { showToast('Bundle already exists'); return; }
      modeData.bundles.push({ id, name: name.trim() });
      currentBundle = id;
      markDirty(); renderModeContent();
    });
  }

  // Delete bundle
  const delBundleBtn = document.getElementById('del-bundle-btn');
  if (delBundleBtn) {
    delBundleBtn.addEventListener('click', () => {
      if (!confirm(`Delete bundle "${currentBundle}" and all its cards?`)) return;
      if (strat.inputs) strat.inputs = strat.inputs.filter(i => i.bundle !== currentBundle);
      const idx = modeData.bundles.findIndex(b => b.id === currentBundle);
      if (idx >= 0) modeData.bundles.splice(idx, 1);
      currentBundle = 'default';
      markDirty(); renderModeContent();
    });
  }

  // Card field edits
  document.querySelectorAll('.card-ta').forEach(ta => {
    ta.addEventListener('input', () => {
      const idx   = parseInt(ta.closest('.card-row').dataset.index);
      const field = ta.dataset.field;
      const items = isMem ? (strat.cards||[]) : isSeq ? (strat.steps||[])
        : (strat.inputs||[]).filter(i => !i.bundle || i.bundle === currentBundle);
      if (items[idx]) { items[idx][field] = ta.value; markDirty(); }
    });
  });

  // Add card
  document.querySelector('.add-card-btn').addEventListener('click', () => {
    if (isMem) {
      (strat.cards = strat.cards || []).push(emptyCard());
    } else if (isSeq) {
      (strat.steps = strat.steps || []).push(emptyInput());
    } else {
      const inp = emptyInput();
      if (currentBundle !== 'default') inp.bundle = currentBundle;
      (strat.inputs = strat.inputs || []).push(inp);
    }
    markDirty(); renderModeContent();
    setTimeout(() => {
      const last = document.querySelector('.card-row:last-of-type');
      if (last) last.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 60);
  });

  // Delete card
  document.querySelectorAll('.card-del').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.index);
      if (isMem) {
        if ((strat.cards||[]).length <= 1) { showToast('Need at least one card'); return; }
        strat.cards.splice(idx, 1);
      } else if (isSeq) {
        if ((strat.steps||[]).length <= 1) { showToast('Need at least one step'); return; }
        strat.steps.splice(idx, 1);
      } else {
        const filtered = (strat.inputs||[]).filter(i => !i.bundle || i.bundle === currentBundle);
        if (filtered.length <= 1) { showToast('Need at least one card'); return; }
        const gi = (strat.inputs||[]).indexOf(filtered[idx]);
        if (gi >= 0) strat.inputs.splice(gi, 1);
      }
      markDirty(); renderModeContent();
    });
  });
}

// ── TOAST ─────────────────────────────────────────────────────────────────────
function showToast(msg) {
  let t = document.getElementById('editor-toast');
  t.textContent = msg;
  t.classList.add('toast--visible');
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove('toast--visible'), 2200);
}

// ── UTIL ──────────────────────────────────────────────────────────────────────
function escHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
