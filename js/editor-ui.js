// editor-ui.js — Deckstack Pack Editor UI

let currentPack   = null;
let currentMode   = MODES[0].id;
let currentStrat  = 0;
let currentBundle = 'default';

// ── INIT ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    console.log('[Editor] showHome called, appPacks:', loadAppPacks().length);
    console.log('[Editor] pack-list-app:', document.getElementById('pack-list-app'));
    showHome();
  }, 200);
});

// ── AUTO-SAVE ─────────────────────────────────────────────────────────────────
function markDirty() {
  if (!currentPack) return;
  if (currentPack._fromApp) {
    showSaveIndicator(null);
    return; // never persist app pack changes
  }
  const ok = saveEditorPack(currentPack);
  showSaveIndicator(ok);
}

function showSaveIndicator(ok) {
  const el = document.getElementById('save-indicator');
  if (!el) return;
  if (ok === null) {
    el.textContent = '⚠ Save as new to keep changes';
    el.style.color = 'var(--acc)';
  } else {
    el.textContent = ok ? '✓ Saved' : '⚠ Save failed';
    el.style.color = ok ? 'var(--txt2)' : 'var(--danger)';
  }
  el.style.opacity = '1';
  clearTimeout(el._t);
  el._t = setTimeout(() => { el.style.opacity = '0'; }, 3000);
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
  const myKeys      = Object.keys(editorPacks).filter(k => !appKeys.has(k));

  let appHtml = '';
  let myHtml  = '';

  if (appPacks.length) {
    appPacks.forEach(p => { appHtml += packRow(p.name, p.key, 'app'); });
  } else {
    const debug = Object.keys(window._dsCollections || {});
    appHtml = `<div class="empty-state">No app packs found.<br>
      <small style="color:#aaa">_dsCollections: ${debug.length ? debug.join(', ') : 'none'}</small></div>`;
  }

  if (myKeys.length) {
    myKeys.forEach(key => { myHtml += packRow(editorPacks[key].name, key, 'my'); });
  } else {
    myHtml = `<div class="empty-state-small">No packs yet. Create one or import from AI.</div>`;
  }

  setHTML('pack-list-app', appHtml);
  setHTML('pack-list-my',  myHtml);

  // Import buttons
  const importJsonBtn = document.getElementById('import-json-btn');
  const importTextBtn = document.getElementById('import-text-btn');
  const jsonFileInput = document.getElementById('json-file-input');
  if (importJsonBtn) importJsonBtn.onclick = () => jsonFileInput && jsonFileInput.click();
  if (jsonFileInput) jsonFileInput.addEventListener('change', handleJsonFileImport);
  if (importTextBtn) importTextBtn.onclick = showPasteDialog;

  document.querySelectorAll('.pack-row').forEach(el => {
    el.addEventListener('click', () => openPack(el.dataset.key, el.dataset.source));
  });
  document.querySelectorAll('.pack-del').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      if (confirm(`Delete "${btn.dataset.name}"? This cannot be undone.`)) {
        deleteEditorPack(btn.dataset.key);
        renderPackList();
      }
    });
  });
}

function packRow(name, key, type) {
  const delBtn = (type === 'my')
    ? `<button class="icon-btn pack-del" data-key="${key}" data-name="${name}" title="Delete">✕</button>`
    : '';
  return `
    <div class="pack-row" data-key="${key}" data-source="${type}">
      <span class="pack-row-name">${name}</span>
      ${delBtn}
    </div>`;
}

// ── IMPORT HANDLERS ──────────────────────────────────────────────────────────

function handleJsonFileImport(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const pack = importFromJSON(ev.target.result);
      // If key exists, make unique
      const all = getAllEditorPacks();
      if (all[pack.key]) pack.key = pack.key + '_' + Date.now().toString(36);
      saveEditorPack(pack);
      showToast(`Imported "${pack.name}"`);
      renderPackList();
    } catch (err) {
      alert('Import failed: ' + err.message);
    }
    e.target.value = '';
  };
  reader.readAsText(file);
}

function showPasteDialog() {
  // Build modal
  let modal = document.getElementById('paste-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'paste-modal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal">
        <div class="modal-header">
          <h2>Import from text</h2>
          <button class="icon-btn" id="paste-modal-close">✕</button>
        </div>
        <p class="modal-desc">Paste AI-generated text using the Deckstack format. <a href="#" id="show-syntax-btn">Show syntax guide</a></p>
        <div class="syntax-guide" id="syntax-guide" style="display:none">
<pre>PACK: Pack Name
MODE: single

## Strategy: Strategy Name
**Explanation:** Explanation text here.

- Situation: Someone says X | Response: "You say Y."
- Situation: Another trigger | Response: "Another answer."

## Strategy: Next Strategy Name
...

MODE: challenges
## Category: Category Name
...</pre>
          <p style="margin-top:8px;font-size:12px;color:#8A6040;">Copy this format and give it to NotebookLM, Claude, or any AI tool. Supported modes: single, collections, memorize, sequences, challenges, mindset.</p>
        </div>
        <textarea class="textarea" id="paste-ta" rows="14" placeholder="Paste AI-generated text here..."></textarea>
        <div class="modal-actions">
          <button class="btn btn--ghost" id="paste-cancel-btn">Cancel</button>
          <button class="btn btn--primary" id="paste-import-btn">Import</button>
        </div>
      </div>`;
    document.body.appendChild(modal);
  }
  modal.style.display = 'flex';

  document.getElementById('paste-modal-close').onclick = () => { modal.style.display = 'none'; };
  document.getElementById('paste-cancel-btn').onclick  = () => { modal.style.display = 'none'; };
  document.getElementById('show-syntax-btn').onclick   = e => {
    e.preventDefault();
    const g = document.getElementById('syntax-guide');
    g.style.display = g.style.display === 'none' ? 'block' : 'none';
  };
  document.getElementById('paste-import-btn').onclick = () => {
    const text = document.getElementById('paste-ta').value.trim();
    if (!text) { showToast('Nothing to import'); return; }
    try {
      const pack = importFromText(text);
      const all  = getAllEditorPacks();
      if (all[pack.key]) pack.key = pack.key + '_' + Date.now().toString(36);
      saveEditorPack(pack);
      modal.style.display = 'none';
      showToast(`Imported "${pack.name}"`);
      renderPackList();
    } catch (err) {
      alert('Import failed: ' + err.message);
    }
  };
}

// ── OPEN / CREATE ─────────────────────────────────────────────────────────────
function openPack(key, source) {
  const drafts = getAllEditorPacks();
  if (source === 'my' && drafts[key]) {
    currentPack = drafts[key];
    currentPack._fromApp = false;
  } else {
    // Load from app data — never save to localStorage
    currentPack = packFromAppData(key);
    currentPack._fromApp = true;
  }
  setActivePack(key);
  currentMode   = MODES[0].id;
  currentStrat  = 0;
  currentBundle = 'default';
  showEditor();
}

// Reset an app pack to its original data (clears any accidental localStorage copy)
function resetPackFromApp(key) {
  const all = getAllEditorPacks();
  delete all[key];
  localStorage.setItem('ds_editor_packs', JSON.stringify(all));
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
  const isApp = !!currentPack._fromApp;
  setHTML('pack-header', `
    <div class="pack-title-row">
      <span class="pack-title">${escHtml(currentPack.name)}</span>
      ${isApp ? '<span class="app-pack-badge">App pack — read only</span>' : `<button class="icon-btn" id="rename-btn" title="Rename">✎</button>`}
      <span id="save-indicator" style="font-size:12px;color:#8A6040;margin-left:8px;opacity:0;transition:opacity .3s;"></span>
    </div>
    <div class="pack-actions">
      <button class="btn btn--ghost btn--sm" id="back-btn">← All packs</button>
      ${isApp ? `<button class="btn btn--ghost btn--sm" id="reset-btn">↺ Reset to original</button>` : ''}
      <button class="btn btn--secondary btn--sm" id="version-btn">${isApp ? 'Save as new…' : 'Save version…'}</button>
      <button class="btn btn--primary btn--sm" id="export-btn">Export JSON</button>
    </div>`);

  document.getElementById('rename-btn').onclick = () => {
    const name = prompt('New name:', currentPack.name);
    if (!name?.trim()) return;
    currentPack.name = name.trim();
    markDirty();
    renderPackHeader();
  });
  document.getElementById('back-btn').onclick = showHome;
  const resetBtn = document.getElementById('reset-btn');
  if (resetBtn) resetBtn.onclick = () => {
    if (!confirm('Reset to original app data? This removes any changes you made here.')) return;
    resetPackFromApp(currentPack.key);
    openPack(currentPack.key, 'app');
  };
  document.getElementById('version-btn').onclick = () => {
    if (currentPack._fromApp) {
      const name = prompt('Save as new pack name:', currentPack.name + ' (copy)');
      if (!name?.trim()) return;
      // Create a new independent copy in My packs
      const slug   = name.trim().toLowerCase().replace(/[^a-z0-9]+/g,'').slice(0,28);
      const newKey = slug + '_' + Date.now().toString(36);
      currentPack          = JSON.parse(JSON.stringify(currentPack));
      currentPack.name     = name.trim();
      currentPack.key      = newKey;
      currentPack._fromApp = false;
      currentPack.isNew    = true;
      currentPack.createdAt = Date.now();
      currentPack.versions  = [];
      saveEditorPack(currentPack);
      setActivePack(newKey);
      // Re-render header so title and indicator update
      renderPackHeader();
      showToast('Saved as "' + name.trim() + '" in My packs');
    } else {
      const name = prompt('Version name (e.g. "Added workplace bundle"):');
      if (!name?.trim()) return;
      saveVersion(currentPack, name.trim());
      showToast('Version saved');
    }
  };
  document.getElementById('export-btn').onclick = () => downloadExport(currentPack);
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
  if (!currentPack[currentMode]) { currentPack[currentMode] = modeData; if (!currentPack._fromApp) saveEditorPack(currentPack); }

  const strats  = modeData.strategies || [];
  const bundles = modeData.bundles    || [];
  const strat   = strats[currentStrat] || emptyStrategy(currentMode);

  const isMem  = currentMode === 'memorize';
  const isSeq  = currentMode === 'sequences';
  const hasBundles = !isMem;

  let html = `<div class="mode-body">`;

  // ── Strategy / category selector
  const readOnly = !!currentPack._fromApp;
  html += `
    <div class="field-block">
      <label class="field-label">${mode.stratLabel}</label>
      <div class="selector-row">
        <select class="select" id="strat-select" ${readOnly ? 'disabled' : ''}>
          ${strats.map((s,i) => `<option value="${i}" ${i===currentStrat?'selected':''}>${escHtml(s.name||'(unnamed)')}</option>`).join('')}
        </select>
        ${!readOnly ? `
        <button class="icon-btn" id="strat-rename-btn" title="Rename ${mode.stratLabel}">✎</button>
        <button class="btn btn--ghost btn--sm" id="add-strat-btn">+ Add</button>
        <button class="icon-btn danger" id="del-strat-btn" title="Delete">✕</button>` : ''}
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
        <textarea class="textarea" id="desc-ta" rows="7" ${readOnly ? 'readonly' : ''} placeholder="Explain this ${mode.stratLabel.toLowerCase()}...">${escHtml(strat.description||'')}</textarea>
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
          <textarea class="card-ta" data-field="q" rows="2" ${readOnly ? 'readonly' : ''} placeholder="${frontLabel}...">${escHtml(item.q||item.front||'')}</textarea>
          <textarea class="card-ta" data-field="a" rows="2" ${readOnly ? 'readonly' : ''} placeholder="${backLabel}...">${escHtml(item.a||item.back||'')}</textarea>
          ${!readOnly ? `<button class="icon-btn danger card-del" data-index="${i}" title="Remove">✕</button>` : '<span></span>'}
        </div>`).join('')}
      ${!readOnly ? `<button class="btn btn--ghost add-card-btn" style="width:100%;margin-top:8px;">+ Add ${mode.cardLabel.toLowerCase()}</button>` : ''}
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
