// editor-ui.js &mdash; Deckstack Pack Editor UI

let currentPack        = null;
let currentMode        = MODES[0].id;
let currentStrat       = 0;
let currentBundle      = 'free';
let currentScenarioIdx = 0;
let showCardGuides     = false;   // reveal per-card guide fields (v1.8.0)

// ── INIT ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    showHome();
    bindProgramEditorControls();
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
  ['screen-home','screen-editor','screen-program'].forEach(s => hideEl(s));
  showEl(id);
}

// ── HOME ──────────────────────────────────────────────────────────────────────
function showHome() {
  currentPack = null;
  showScreen('screen-home');
  renderPackList();
  renderProgramList();
}

function renderProgramList() {
  const appPrograms    = loadAppPrograms();
  const editorPrograms = getAllEditorPrograms();
  const myIds          = Object.keys(editorPrograms);

  // App programs
  let appHtml = '';
  if (appPrograms.length) {
    appPrograms.forEach(p => { appHtml += programRow(p.title, p.id, 'app', p.icon); });
  } else {
    appHtml = `<div class="empty-state-small">No app programs found.</div>`;
  }
  setHTML('program-list-app', appHtml);

  // App checkpoints (tests) — flat list of all checkpoints from app programs
  let testHtml = '';
  const allCPs = [];
  appPrograms.forEach(prog => {
    (prog.sections || []).forEach(s => {
      if (s.checkpoint) allCPs.push({ progTitle: prog.title, cp: s.checkpoint });
    });
  });
  if (allCPs.length) {
    allCPs.forEach(({ progTitle, cp }) => {
      testHtml += `<div class="pack-row pack-row--test">
        <span class="pack-row-name">${escHtml(cp.title)}</span>
        <span class="pack-row-meta">${escHtml(progTitle)} · ${cp.questions ? cp.questions.length : 0} Q</span>
      </div>`;
    });
  } else {
    testHtml = `<div class="empty-state-small">No tests found in app programs.</div>`;
  }
  setHTML('program-list-tests', testHtml);

  // My programs
  let myHtml = '';
  if (myIds.length) {
    myIds.forEach(id => { myHtml += programRow(editorPrograms[id].title, id, 'my', editorPrograms[id].icon); });
  } else {
    myHtml = `<div class="empty-state-small">No programs yet. Import from AI to create one.</div>`;
  }
  setHTML('program-list-my', myHtml);

  document.querySelectorAll('.program-row .prog-del').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      if (confirm(`Delete "${btn.dataset.title}"?`)) {
        deleteEditorProgram(btn.dataset.id);
        renderProgramList();
      }
    });
  });
  document.querySelectorAll('.program-row .prog-export').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const prog = getAllEditorPrograms()[btn.dataset.id];
      if (prog) exportProgram(prog);
    });
  });

  // App programs — click opens read-only program editor with Save as Mine option
  document.querySelectorAll('#program-list-app .program-row').forEach(row => {
    row.style.cursor = 'pointer';
    row.addEventListener('click', () => {
      const prog = (window._dsPrograms || []).find(p => p.id === row.dataset.id);
      if (!prog) return;
      // Show in editor as read-only, with Save as Mine button
      const copy = JSON.parse(JSON.stringify(prog));
      copy._readOnly = true;
      showProgramEditor(copy);
    });
  });

  // App tests — click shows questions list
  document.querySelectorAll('#program-list-tests .pack-row--test').forEach((row, idx) => {
    row.style.cursor = 'pointer';
    const item = allCPs[idx];
    if (!item) return;
    row.addEventListener('click', () => {
      const qs = (item.cp.questions || []).map((q, i) =>
        `<div style="padding:8px 0;border-bottom:1px solid var(--border);">
          <div style="font-size:13px;font-weight:600;margin-bottom:4px;">${i+1}. ${escHtml(q.q)}</div>
          ${['A','B','C','D'].map((l, li) => q.options[li]
            ? `<div style="font-size:12px;color:${li === q.correct ? 'var(--acc)' : 'var(--txt3)'};">${l}: ${escHtml(q.options[li])}</div>`
            : '').join('')}
        </div>`
      ).join('');
      showInfoModal(item.cp.title,
        `<div style="font-size:12px;color:var(--txt3);margin-bottom:12px;">${item.progTitle} · ${item.cp.questions ? item.cp.questions.length : 0} questions · ${item.cp.timeLimit}s per question</div>` +
        (qs || '<div style="color:var(--txt3);font-size:13px;">No questions yet</div>')
      );
    });
  });

  // My programs — click opens editor
  document.querySelectorAll('#program-list-my .program-row').forEach(row => {
    row.style.cursor = 'pointer';
    row.addEventListener('click', e => {
      if (e.target.closest('.prog-del, .prog-export')) return;
      const prog = getAllEditorPrograms()[row.dataset.id];
      if (prog) showProgramEditor(prog);
    });
  });
}

// Simple info modal for read-only program/test details
function showInfoModal(title, bodyHtml) {
  let modal = document.getElementById('editor-info-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'editor-info-modal';
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);
  }
  modal.innerHTML = `
    <div class="modal" style="max-height:80vh;overflow-y:auto;">
      <div class="modal-header">
        <h2>${escHtml(title)}</h2>
        <button class="icon-btn" id="info-modal-close">&#x2715;</button>
      </div>
      <div style="padding:0 4px 8px;">${bodyHtml}</div>
      <div class="modal-actions">
        <button class="btn btn--ghost" id="info-modal-done">Close</button>
      </div>
    </div>`;
  modal.style.display = 'flex';
  document.getElementById('info-modal-close').onclick = () => { modal.style.display = 'none'; };
  document.getElementById('info-modal-done').onclick  = () => { modal.style.display = 'none'; };
}

// ── PROGRAM EDITOR ────────────────────────────────────────────────────────────

let currentProgram = null;

function showProgramEditor(program) {
  currentProgram = JSON.parse(JSON.stringify(program)); // deep copy
  showScreen('screen-program');
  renderProgramEditor();
}

function renderProgramEditor() {
  const p = currentProgram;
  const ro = !!p._readOnly;

  const titleEl = document.getElementById('prog-title-display');
  if (titleEl) titleEl.textContent = p.title || 'Untitled Program';

  const renameBtn = document.getElementById('prog-rename-btn');
  if (renameBtn) renameBtn.style.display = ro ? 'none' : '';

  // Show/hide Save as Mine button
  let saveAsMineBtn = document.getElementById('prog-save-as-mine-btn');
  if (ro && !saveAsMineBtn) {
    saveAsMineBtn = document.createElement('button');
    saveAsMineBtn.id = 'prog-save-as-mine-btn';
    saveAsMineBtn.className = 'btn btn--secondary btn--sm';
    saveAsMineBtn.textContent = 'Save as Mine';
    document.querySelector('.pack-actions')?.appendChild(saveAsMineBtn);
    saveAsMineBtn.onclick = () => {
      const name = prompt('Save as (new name):', p.title + ' (copy)');
      if (!name?.trim()) return;
      const copy = JSON.parse(JSON.stringify(p));
      delete copy._readOnly;
      copy.id = slugify(name.trim()) + '_' + Date.now().toString(36).slice(-4);
      copy.title = name.trim();
      const all = getAllEditorPrograms();
      all[copy.id] = copy;
      try { localStorage.setItem('ds_editor_programs', JSON.stringify(all)); } catch(e) {}
      showToast(`Saved as "${copy.title}"`);
      currentProgram = copy;
      renderProgramEditor();
    };
  } else if (!ro && saveAsMineBtn) {
    saveAsMineBtn.remove();
  }

  const exportBtn = document.getElementById('prog-export-btn');
  if (exportBtn) exportBtn.style.display = ro ? 'none' : '';

  const descTa = document.getElementById('prog-desc-ta');
  if (descTa) {
    descTa.value = p.description || '';
    descTa.readOnly = ro;
    descTa.oninput = ro ? null : () => { p.description = descTa.value; };
  }
  const iconInput = document.getElementById('prog-icon-input');
  const iconPreview = document.getElementById('prog-icon-preview');
  if (iconInput) {
    iconInput.value = p.icon || 'ti-stack';
    iconInput.readOnly = ro;
    iconInput.oninput = ro ? null : () => {
      p.icon = iconInput.value.trim();
      if (iconPreview) iconPreview.innerHTML = `<i class="ti ${p.icon}"></i>`;
    };
    if (iconPreview) iconPreview.innerHTML = `<i class="ti ${p.icon || 'ti-stack'}"></i>`;
  }

  const addSecBtn = document.getElementById('prog-add-section-btn');
  if (addSecBtn) addSecBtn.style.display = ro ? 'none' : '';

  const area = document.getElementById('prog-sections-area');
  if (!area) return;
  area.innerHTML = '';
  (p.sections || []).forEach((sec, si) => {
    area.appendChild(buildSectionCard(sec, si, ro));
  });
}

function buildSectionCard(sec, si, ro) {
  ro = !!ro;
  const p = currentProgram;
  const hasCp  = !!sec.checkpoint;
  const packLabel = sec.packs && sec.packs.length ? sec.packs.map(pk => pk.label || pk.key).join(', ') : '— no pack —';

  const card = document.createElement('div');
  card.className = 'prog-section-card';
  card.dataset.si = si;

  card.innerHTML = `
    <div class="prog-section-header" id="prog-sec-hdr-${si}">
      <span class="prog-section-num">§${si + 1}</span>
      <div style="flex:1;min-width:0;">
        <div class="prog-section-title-display">${escHtml(sec.title || 'Untitled section')}</div>
        <div class="prog-section-pack-label">${escHtml(packLabel)}</div>
      </div>
      ${hasCp ? `<span class="prog-section-cp-badge">Test</span>` : ''}
      ${!ro ? `
      <div class="prog-section-move">
        ${si > 0 ? `<button class="icon-btn prog-sec-up" data-si="${si}" title="Move up">↑</button>` : ''}
        ${si < (p.sections.length - 1) ? `<button class="icon-btn prog-sec-down" data-si="${si}" title="Move down">↓</button>` : ''}
      </div>
      <button class="icon-btn danger prog-sec-del" data-si="${si}" title="Delete section">&#x2715;</button>
      ` : ''}
    </div>
    <div class="prog-section-body" id="prog-sec-body-${si}" style="display:none;">
      <div class="field-block">
        <label class="field-label">Section title</label>
        <input type="text" class="input" id="sec-title-${si}" value="${escHtml(sec.title || '')}" placeholder="e.g. Chapter 1 — Starting Conversations" ${ro ? 'readonly' : ''} />
      </div>
      <div class="field-block">
        <label class="field-label">Pack</label>
        <select class="select" id="sec-pack-${si}" ${ro ? 'disabled' : ''}>
          <option value="">— None —</option>
          ${buildPackOptions(sec.packs && sec.packs[0] ? sec.packs[0].key : '')}
        </select>
      </div>
      ${!ro ? `<div class="prog-section-actions">
        <label style="display:flex;align-items:center;gap:6px;font-size:13px;cursor:pointer;">
          <input type="checkbox" id="sec-cp-toggle-${si}" ${hasCp ? 'checked' : ''} />
          Include checkpoint test
        </label>
      </div>` : ''}
      <div class="cp-editor" id="cp-editor-${si}" style="${hasCp ? '' : 'display:none;'}">
        ${buildCpEditor(sec, si, ro)}
      </div>
    </div>`;

  // Toggle body
  card.querySelector(`#prog-sec-hdr-${si}`).addEventListener('click', e => {
    if (e.target.closest('.prog-sec-up,.prog-sec-down,.prog-sec-del')) return;
    const body = document.getElementById(`prog-sec-body-${si}`);
    if (body) body.style.display = body.style.display === 'none' ? '' : 'none';
  });

  // Title input
  const titleIn = card.querySelector(`#sec-title-${si}`);
  if (titleIn) titleIn.addEventListener('input', () => {
    sec.title = titleIn.value;
    const disp = card.querySelector('.prog-section-title-display');
    if (disp) disp.textContent = sec.title || 'Untitled section';
  });

  // Pack select
  const packSel = card.querySelector(`#sec-pack-${si}`);
  if (packSel) packSel.addEventListener('change', () => {
    const key = packSel.value;
    const allPacks = [...loadAppPacks(), ...Object.values(getAllEditorPacks())];
    const found = allPacks.find(pk => pk.key === key);
    sec.packs = key ? [{ key, label: found ? found.name : key }] : [];
    const lbl = card.querySelector('.prog-section-pack-label');
    if (lbl) lbl.textContent = sec.packs.length ? sec.packs[0].label : '— no pack —';
  });

  // Checkpoint toggle
  const cpToggle = card.querySelector(`#sec-cp-toggle-${si}`);
  const cpEditor = card.querySelector(`#cp-editor-${si}`);
  if (cpToggle) cpToggle.addEventListener('change', () => {
    if (cpToggle.checked) {
      if (!sec.checkpoint) {
        sec.checkpoint = {
          id: 'cp_' + Date.now().toString(36),
          title: (sec.title || 'Section') + ' — Test',
          timeLimit: 90, drawCount: 10, questions: []
        };
      }
      if (cpEditor) { cpEditor.innerHTML = buildCpEditor(sec, si); bindCpEditor(sec, si, card); cpEditor.style.display = ''; }
      const badge = card.querySelector('.prog-section-cp-badge');
      if (!badge) {
        const span = document.createElement('span');
        span.className = 'prog-section-cp-badge';
        span.textContent = 'Test';
        card.querySelector('.prog-section-title-display').after(span);
      }
    } else {
      sec.checkpoint = null;
      if (cpEditor) cpEditor.style.display = 'none';
      const badge = card.querySelector('.prog-section-cp-badge');
      if (badge) badge.remove();
    }
  });

  if (hasCp) bindCpEditor(sec, si, card, ro);

  // Move up/down
  card.querySelectorAll('.prog-sec-up').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation();
      const i = parseInt(btn.dataset.si);
      [p.sections[i-1], p.sections[i]] = [p.sections[i], p.sections[i-1]];
      renderProgramEditor();
    });
  });
  card.querySelectorAll('.prog-sec-down').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation();
      const i = parseInt(btn.dataset.si);
      [p.sections[i], p.sections[i+1]] = [p.sections[i+1], p.sections[i]];
      renderProgramEditor();
    });
  });

  // Delete section
  card.querySelectorAll('.prog-sec-del').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation();
      if (!confirm('Delete this section?')) return;
      p.sections.splice(parseInt(btn.dataset.si), 1);
      renderProgramEditor();
    });
  });

  return card;
}

function buildPackOptions(selectedKey) {
  const appPacks = loadAppPacks();
  const myPacks  = Object.values(getAllEditorPacks());
  let opts = '';
  if (appPacks.length) {
    opts += `<optgroup label="App packs">`;
    appPacks.forEach(pk => { opts += `<option value="${pk.key}" ${pk.key === selectedKey ? 'selected' : ''}>${escHtml(pk.name)}</option>`; });
    opts += `</optgroup>`;
  }
  if (myPacks.length) {
    opts += `<optgroup label="My packs">`;
    myPacks.forEach(pk => { opts += `<option value="${pk.key}" ${pk.key === selectedKey ? 'selected' : ''}>${escHtml(pk.name)}</option>`; });
    opts += `</optgroup>`;
  }
  return opts;
}

function buildCpEditor(sec, si, ro) {
  ro = !!ro;
  const cp = sec.checkpoint;
  if (!cp) return '';
  let html = `
    <div style="display:flex;gap:12px;margin-bottom:10px;flex-wrap:wrap;">
      <div class="field-block" style="flex:1;min-width:120px;">
        <label class="field-label">Test title</label>
        <input type="text" class="input" id="cp-title-${si}" value="${escHtml(cp.title || '')}" placeholder="e.g. Chapter 1 Test" ${ro ? 'readonly' : ''} />
      </div>
      <div class="field-block" style="width:80px;">
        <label class="field-label">Time (s)</label>
        <input type="number" class="input" id="cp-time-${si}" value="${cp.timeLimit || 90}" min="10" max="300" ${ro ? 'readonly' : ''} />
      </div>
      <div class="field-block" style="width:80px;">
        <label class="field-label">Draw</label>
        <input type="number" class="input" id="cp-draw-${si}" value="${cp.drawCount || 10}" min="1" max="50" ${ro ? 'readonly' : ''} />
      </div>
    </div>
    <div class="cp-questions-area" id="cp-qs-${si}">
      ${(cp.questions || []).map((q, qi) => buildQuestionRow(q, qi, si, ro)).join('')}
    </div>
    ${!ro ? `<button class="btn btn--ghost btn--sm cp-add-q" data-si="${si}" style="width:100%;margin-top:6px;">+ Add question</button>` : ''}`;
  return html;
}

function buildQuestionRow(q, qi, si, ro) {
  ro = !!ro;
  return `
    <div class="cp-question-row" data-qi="${qi}">
      <textarea class="card-ta cp-q-text" data-qi="${qi}" data-si="${si}" rows="2" placeholder="Question..." ${ro ? 'readonly' : ''}>${escHtml(q.q || '')}</textarea>
      <div class="cp-opts-row" style="display:contents;">
        ${['A','B','C','D'].map((l, li) => `<input type="text" class="input cp-opt" data-qi="${qi}" data-si="${si}" data-li="${li}" value="${escHtml((q.options||[])[li]||'')}" placeholder="${l}..." ${ro ? 'readonly' : ''} />`).join('')}
      </div>
      <select class="cp-correct-select" data-qi="${qi}" data-si="${si}" ${ro ? 'disabled' : ''}>
        ${['A','B','C','D'].map((l,li) => `<option value="${li}" ${q.correct===li?'selected':''}>${l}</option>`).join('')}
      </select>
      ${!ro ? `<button class="icon-btn danger cp-del-q" data-qi="${qi}" data-si="${si}" title="Remove">&#x2715;</button>` : '<span></span>'}
    </div>`;
}

function bindCpEditor(sec, si, card, ro) {
  const cp = sec.checkpoint;
  if (!cp || ro) return;  // read-only: no bindings needed

  const cpArea = card.querySelector(`#cp-editor-${si}`);
  if (!cpArea) return;

  function rebind() {
    const tIn = cpArea.querySelector(`#cp-title-${si}`);
    const tmIn = cpArea.querySelector(`#cp-time-${si}`);
    const drIn = cpArea.querySelector(`#cp-draw-${si}`);
    if (tIn)  tIn.oninput  = () => { cp.title     = tIn.value; };
    if (tmIn) tmIn.oninput = () => { cp.timeLimit  = parseInt(tmIn.value) || 90; };
    if (drIn) drIn.oninput = () => { cp.drawCount  = parseInt(drIn.value) || 10; };

    cpArea.querySelectorAll('.cp-q-text').forEach(ta => {
      ta.oninput = () => { const qi = parseInt(ta.dataset.qi); if (cp.questions[qi]) cp.questions[qi].q = ta.value; };
    });
    cpArea.querySelectorAll('.cp-opt').forEach(inp => {
      inp.oninput = () => {
        const qi = parseInt(inp.dataset.qi), li = parseInt(inp.dataset.li);
        if (cp.questions[qi]) {
          if (!cp.questions[qi].options) cp.questions[qi].options = ['','','',''];
          cp.questions[qi].options[li] = inp.value;
        }
      };
    });
    cpArea.querySelectorAll('.cp-correct-select').forEach(sel => {
      sel.onchange = () => { const qi = parseInt(sel.dataset.qi); if (cp.questions[qi]) cp.questions[qi].correct = parseInt(sel.value); };
    });
    cpArea.querySelectorAll('.cp-del-q').forEach(btn => {
      btn.onclick = () => {
        cp.questions.splice(parseInt(btn.dataset.qi), 1);
        const qsArea = cpArea.querySelector(`#cp-qs-${si}`);
        if (qsArea) { qsArea.innerHTML = cp.questions.map((q, qi) => buildQuestionRow(q, qi, si, false)).join(''); rebind(); }
      };
    });
    const addQ = cpArea.querySelector('.cp-add-q');
    if (addQ) addQ.onclick = () => {
      cp.questions.push({ id: 'q_' + Date.now().toString(36), q: '', options: ['','','',''], correct: 0 });
      const qsArea = cpArea.querySelector(`#cp-qs-${si}`);
      if (qsArea) { qsArea.innerHTML = cp.questions.map((q, qi) => buildQuestionRow(q, qi, si, false)).join(''); rebind(); }
    };
  }
  rebind();
}

// Bind top-level program editor controls
function bindProgramEditorControls() {
  const backBtn = document.getElementById('prog-back-btn');
  if (backBtn) backBtn.onclick = () => {
    const ro = currentProgram && currentProgram._readOnly;
    if (!ro && currentProgram && confirm('Save changes?')) saveProgramAndClose();
    else { currentProgram = null; showScreen('screen-home'); renderProgramList(); }
  };

  const renameBtn = document.getElementById('prog-rename-btn');
  if (renameBtn) renameBtn.onclick = () => {
    const name = prompt('Program title:', currentProgram.title || '');
    if (name === null) return;
    currentProgram.title = name.trim() || currentProgram.title;
    renderProgramEditor();
  };

  const exportBtn = document.getElementById('prog-export-btn');
  if (exportBtn) exportBtn.onclick = () => {
    saveProgramAndClose(false);
    exportProgram(currentProgram);
  };

  const addSecBtn = document.getElementById('prog-add-section-btn');
  if (addSecBtn) addSecBtn.onclick = () => {
    if (!currentProgram.sections) currentProgram.sections = [];
    const idx = currentProgram.sections.length;
    currentProgram.sections.push({
      id: 'section-' + (idx + 1),
      title: 'Section ' + (idx + 1),
      packs: [],
    });
    renderProgramEditor();
    // Auto-scroll to new section
    setTimeout(() => {
      const area = document.getElementById('prog-sections-area');
      if (area) area.lastElementChild?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const newProg = document.getElementById('new-program-btn');
  if (newProg) newProg.onclick = () => {
    const title = prompt('Program title:');
    if (!title?.trim()) return;
    const prog = {
      id: slugify(title.trim()) + '_' + Date.now().toString(36).slice(-4),
      title: title.trim(),
      description: '',
      icon: 'ti-stack',
      sections: [],
    };
    showProgramEditor(prog);
  };
}

function saveProgramAndClose(goHome = true) {
  if (!currentProgram) return;
  if (!currentProgram._readOnly) {
    const all = getAllEditorPrograms();
    all[currentProgram.id] = currentProgram;
    try { localStorage.setItem('ds_editor_programs', JSON.stringify(all)); } catch(e) {}
  }
  if (goHome) {
    showScreen('screen-home');
    renderProgramList();
    currentProgram = null;
  }
}

// Auto-save on unload
window.addEventListener('beforeunload', () => {
  if (currentProgram) saveProgramAndClose(false);
});



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
    ? `<button class="icon-btn pack-del" data-key="${key}" data-name="${name}" title="Delete">&#x2715;</button>`
    : '';
  return `
    <div class="pack-row" data-key="${key}" data-source="${type}">
      <span class="pack-row-name">${escHtml(name)}</span>
      ${delBtn}
    </div>`;
}

function programRow(title, id, type, icon) {
  const ico = icon || 'ti-stack';
  const actions = type === 'my'
    ? `<button class="icon-btn prog-export" data-id="${id}" title="Export JSON" style="font-size:13px;">↓</button>
       <button class="icon-btn pack-del prog-del" data-id="${id}" data-title="${escHtml(title)}" title="Delete">&#x2715;</button>`
    : '';
  return `<div class="pack-row program-row" data-id="${id}" data-type="${type}">
    <span class="pack-row-icon"><i class="ti ${ico}"></i></span>
    <span class="pack-row-name">${escHtml(title)}</span>
    ${actions}
  </div>`;
}

// ── TAG HELPERS ───────────────────────────────────────────────────────────────

function renderEditorTagSection(obj, editable) {
  const tags = obj.tags || [];
  const chips = tags.map((t, i) =>
    editable
      ? `<span class="editor-tag-chip">${escHtml(t)}<button class="editor-tag-del" data-i="${i}">×</button></span>`
      : `<span class="editor-tag-chip">${escHtml(t)}</span>`
  ).join('');
  const inputRow = editable
    ? `<div class="editor-tag-input-row">
         <input type="text" class="editor-tag-input" id="editorTagInput" placeholder="Add tag…" />
         <button class="editor-tag-add-btn" id="editorTagAddBtn">+</button>
       </div>`
    : '';
  return `<div class="editor-tag-section">
    <div class="editor-tag-label">Tags</div>
    <div class="editor-tag-list" id="editorTagList">${chips || '<span class="tag-empty">No tags</span>'}</div>
    ${inputRow}
  </div>`;
}

function bindEditorTagSection(obj, onSave) {
  const list   = document.getElementById('editorTagList');
  const input  = document.getElementById('editorTagInput');
  const addBtn = document.getElementById('editorTagAddBtn');
  if (!list) return;

  function rebind() {
    document.querySelectorAll('.editor-tag-del').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        if (!obj.tags) obj.tags = [];
        obj.tags.splice(parseInt(btn.dataset.i), 1);
        onSave();
        const tags = obj.tags;
        list.innerHTML = tags.map((t, i) =>
          `<span class="editor-tag-chip">${escHtml(t)}<button class="editor-tag-del" data-i="${i}">×</button></span>`
        ).join('') || '<span class="tag-empty">No tags</span>';
        rebind();
      });
    });
  }
  rebind();

  if (addBtn && input) {
    const doAdd = () => {
      const val = input.value.trim().toLowerCase();
      if (!val) return;
      if (!obj.tags) obj.tags = [];
      if (!obj.tags.includes(val)) { obj.tags.push(val); onSave(); }
      input.value = '';
      list.innerHTML = obj.tags.map((t, i) =>
        `<span class="editor-tag-chip">${escHtml(t)}<button class="editor-tag-del" data-i="${i}">×</button></span>`
      ).join('') || '<span class="tag-empty">No tags</span>';
      rebind();
    };
    addBtn.addEventListener('click', doAdd);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); doAdd(); } });
  }
}

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

// ── SEQUENCES EVENT BINDING ───────────────────────────────────────────────────

function bindEventsSeq(modeData, strats, strat, bundleScenarios, scenario, bundles) {
  const allScenarios = strat.inputs || [];
  const scenarioAbsIdx = allScenarios.indexOf(scenario);

  // Use .onchange/.onclick (not addEventListener) to prevent listener stacking on re-render
  const stratSel = document.getElementById('strat-select');
  if (stratSel) stratSel.onchange = e => {
    currentStrat = parseInt(e.target.value); currentScenarioIdx = 0; renderModeContent();
  };
  const renameBtn = document.getElementById('strat-rename-btn');
  if (renameBtn) renameBtn.onclick = () => {
    const name = prompt('Name:', strat.name || ''); if (name === null) return;
    strat.name = name.trim(); markDirty(); renderModeContent();
  };
  const addStratBtn = document.getElementById('add-strat-btn');
  if (addStratBtn) addStratBtn.onclick = () => {
    const name = prompt('Name for new combo:'); if (!name?.trim()) return;
    const s = emptyStrategy('sequences'); s.name = name.trim();
    modeData.strategies.push(s); currentStrat = modeData.strategies.length - 1;
    currentScenarioIdx = 0; markDirty(); renderModeContent();
  };
  const delStratBtn = document.getElementById('del-strat-btn');
  if (delStratBtn) delStratBtn.onclick = () => {
    if (modeData.strategies.length <= 1) { showToast('Need at least one combo'); return; }
    if (!confirm(`Delete "${strat.name || 'this combo'}"?`)) return;
    modeData.strategies.splice(currentStrat, 1);
    currentStrat = Math.max(0, currentStrat - 1); currentScenarioIdx = 0;
    markDirty(); renderModeContent();
  };
  const descTa = document.getElementById('desc-ta');
  if (descTa) descTa.oninput = () => { strat.description = descTa.value; markDirty(); };

  // Bundle select — onchange prevents listener stacking
  const bundleSelSeq = document.getElementById('bundle-select');
  if (bundleSelSeq) bundleSelSeq.onchange = e => {
    currentBundle = e.target.value;
    currentScenarioIdx = 0;
    renderModeContent();
  };

  // Scenario tabs — onclick prevents stacking
  document.querySelectorAll('.scenario-tab[data-sc]').forEach(btn => {
    btn.onclick = () => { currentScenarioIdx = parseInt(btn.dataset.sc); renderModeContent(); };
  });
  const addScBtn = document.getElementById('add-scenario-btn');
  if (addScBtn) addScBtn.onclick = () => {
    strat.inputs = strat.inputs || [];
    const bundle = currentBundle === 'default' ? 'free' : currentBundle;
    strat.inputs.push(emptyScenario(bundle));
    const bundleCount = strat.inputs.filter(sc => (sc.bundle||'free') === bundle).length;
    currentScenarioIdx = bundleCount - 1; markDirty(); renderModeContent();
  };
  const delScBtn = document.getElementById('del-scenario-btn');
  if (delScBtn) delScBtn.onclick = () => {
    if (bundleScenarios.length <= 1) { showToast('Need at least one scenario in this bundle'); return; }
    if (!confirm('Delete this scenario?')) return;
    if (scenarioAbsIdx >= 0) strat.inputs.splice(scenarioAbsIdx, 1);
    currentScenarioIdx = Math.max(0, currentScenarioIdx - 1); markDirty(); renderModeContent();
  };

  // Situation textarea
  const sitTa = document.querySelector('[data-sc-field="situation"]');
  if (sitTa) sitTa.oninput = () => { scenario.situation = sitTa.value; markDirty(); };

  // Step textareas
  document.querySelectorAll('.card-ta[data-step]').forEach(ta => {
    ta.oninput = () => {
      const idx = parseInt(ta.dataset.step);
      const field = ta.dataset.field;
      if (!scenario.steps[idx]) scenario.steps[idx] = { front: '', back: '' };
      scenario.steps[idx][field] = ta.value; markDirty();
    };
  });

  // Add step
  const addStepBtn = document.querySelector('.add-step-btn');
  if (addStepBtn) addStepBtn.onclick = () => {
    scenario.steps = scenario.steps || [];
    scenario.steps.push(emptyStep()); markDirty(); renderModeContent();
  };

  // Delete step
  document.querySelectorAll('.step-del').forEach(btn => {
    btn.onclick = () => {
      const idx = parseInt(btn.dataset.step);
      scenario.steps.splice(idx, 1); markDirty(); renderModeContent();
    };
  });

  // Add bundle
  const addBundleBtn = document.getElementById('add-bundle-btn');
  if (addBundleBtn) addBundleBtn.onclick = () => {
    const name = prompt('Bundle name (e.g. "Workplace & Social"):'); if (!name?.trim()) return;
    const id = slugify(name.trim());
    if (modeData.bundles.find(b => b.id === id)) { showToast('Bundle already exists'); return; }
    const tierChoice = prompt('Bundle tier:\n1 = Pro opt-in\n2 = Extended\n\nEnter 1 or 2:', '1');
    const tier = tierChoice === '2' ? 'extended' : 'pro-opt';
    modeData.bundles.push({ id, name: name.trim(), tier });
    markDirty(); renderModeContent();
  };
}

function showSyntaxGuide() {

  // ── REGLER ──────────────────────────────────────────────────────────────────

  var packRules =
    '<h3>Pack syntax — rules</h3>' +
    '<ul class="syntax-rules">' +
    '<li><code>PACK: Pack Name</code> — pack name, one line. Multiple <code>PACK:</code> blocks in one paste = multiple packs.</li>' +
    '<li><code>BUNDLE IMPORT: pack-key</code> — use instead of <code>PACK:</code> to add a bundle to an existing pack (e.g. <code>BUNDLE IMPORT: assertive</code>). Only include the mode and bundle you are adding.</li>' +
    '<li><code>TAGS: tag one, tag two</code> — optional comma-separated tags placed after the <code>PACK:</code> line. Tags feed search.</li>' +
    '<li><code>TOPICS: Topic One, Topic Two</code> — optional, and separate from <code>TAGS:</code>. Topics decide which group the pack appears under in the Library&rsquo;s Topics tab. Names are matched against the existing topics ignoring case, by title or by id, so <code>Humour &amp; Playfulness</code> and <code>humour</code> both find the same one. A name that matches nothing creates a NEW topic, and the import tells you it did. Works inside a program section too. Singular <code>TOPIC:</code> is also accepted.</li>' +
    '<li><code>MODE:</code> — one of: <code>single</code>, <code>collections</code>, <code>memorize</code>, <code>sequences</code>, <code>challenges</code>, <code>mindset</code>. Only include modes you need.</li>' +
    '<li><code>## Strategy: Name</code> — starts a new strategy. Use <code>## Category:</code> for challenges, <code>## Combo:</code> for sequences, <code>## Collection:</code> for collections, <code>## Mindset:</code> for mindset.</li>' +
    '<li><code>**Explanation:**</code> — descriptive text explaining the strategy.</li>' +
    '<li><code>GUIDE FRONT: text</code> / <code>GUIDE BACK: text</code> — mode-level guide text, placed after the <code>MODE:</code> line. Shown above every card front/back in that mode (and read aloud in handsfree).</li>' +
    '<li><code>- Guide Front: text</code> / <code>- Guide Back: text</code> — exception for one strategy, placed after its <code>## Strategy:</code> line. Overrides the mode default for that strategy only.</li>' +
    '<li>Per-card exception — append to any card or step line (either or both, any order):<br>' +
    '&nbsp;&nbsp;<code>- Situation: X | Response: Y | Guide Front: text | Guide Back: text</code><br>' +
    '&nbsp;&nbsp;<code>- Step: label | explanation | Guide Front: text</code><br>' +
    'Overrides the strategy guide for that single card. Cards without it inherit the strategy default.</li>' +
    '<li><code>BUNDLE: free</code> — base tier, seen by everyone. Convention: 5 inputs per strategy.</li>' +
    '<li><code>BUNDLE: pro</code> — extra pro tier, shown together with free for Pro users. Convention: 3 more per strategy, so 8 in total.</li>' +
    '<li>Only <code>single</code> and <code>memorize</code> are open to free users. <code>collections</code>, <code>sequences</code>, <code>challenges</code> and <code>mindset</code> all need Pro, so a free bundle there would never be seen — put everything in <code>BUNDLE: pro</code>. Convention: 8 per unit.</li>' +
    '<li><code>BUNDLE: workplace</code> or <code>BUNDLE: domestic</code> — opt-in bundles activated manually. Convention: 3 inputs per strategy each.</li>' +
    '<li>Card format for single / collections / challenges / mindset:<br>' +
    '&nbsp;&nbsp;<code>- Situation: X | Response: Y</code></li>' +
    '<li>Memorize card format:<br>' +
    '&nbsp;&nbsp;<code>- Front: X | Back: Y</code></li>' +
    '<li>Sequences format — each scenario starts with <code>### Scenario:</code>:<br>' +
    '&nbsp;&nbsp;<code>BUNDLE: free</code><br>' +
    '&nbsp;&nbsp;<code>### Scenario:</code><br>' +
    '&nbsp;&nbsp;<code>- Situation: Describe the situation</code><br>' +
    '&nbsp;&nbsp;<code>- Step: Step 1 label | Step 1 explanation</code><br>' +
    '&nbsp;&nbsp;<code>- Step: Step 2 label | Step 2 explanation</code><br>' +
    'Change <code>BUNDLE:</code> between scenarios to assign each to a different bundle. Sequences need Pro, so the convention is about 3 scenarios per combo, all in <code>BUNDLE: pro</code>.</li>' +
    '</ul>';

  var programRules =
    '<h3>Program syntax — rules</h3>' +
    '<ul class="syntax-rules">' +
    '<li><code>PROGRAM:</code> — Program title. This line triggers program mode: packs defined inside become sections of the program, not standalone packs in the library.</li>' +
    '<li><code>TAGS: tag one, tag two</code> — optional comma-separated search tags for the program, placed directly after <code>PROGRAM:</code>.</li>' +
    '<li><code>DESCRIPTION:</code> — Short description shown in the programs list in the app.</li>' +
    '<li><code>ICON:</code> — A Tabler icon name, e.g. <code>ti-book</code>, <code>ti-brain</code>, <code>ti-message-circle</code>, <code>ti-award</code>. See tabler.io/icons for the full list.</li>' +
    '<li><code>SECTION:</code> — Starts a new section. Everything between this and the next <code>SECTION:</code> belongs to it — the pack definition and optionally a checkpoint.</li>' +
    '<li><code>PACK:</code> inside a section — defines the pack for that section using normal pack syntax. The pack is also saved individually in My packs.</li>' +
    '<li><code>CHECKPOINT:</code> — Optional. A test at the end of a section. If omitted, the section has no test.</li>' +
    '<li><code>TIME:</code> — Seconds allowed per question (default: 90).</li>' +
    '<li><code>DRAW:</code> — How many questions to draw from the pool per session (default: 20). Make the pool larger than the draw count for variety.</li>' +
    '<li><code>- Q: Question? | Correct: B | A: Option A | B: Option B | C: Option C | D: Option D</code> — one question per line. <code>Correct:</code> is the letter of the right answer (A, B, C, or D).</li>' +
    '<li>You can mix sections with and without checkpoints in the same program.</li>' +
    '</ul>';

  // ── EXEMPEL ─────────────────────────────────────────────────────────────────

  var exSinglePack = [
    'PACK: Assertive Communication',
    'TAGS: assertiveness, boundaries, saying no, confidence, pushback',
    'TOPICS: Assertiveness',
    '',
    '# ── SINGLE STRATEGY ──────────────────────────────────────────────────────',
    'MODE: single',
    'GUIDE FRONT: Use this strategy when...',
    'GUIDE BACK: A possible response...',
    '',
    '## Strategy: The Broken Record',
    '**Explanation:** Calmly repeat your position without escalating. Useful when someone keeps pushing back. Stay neutral and consistent — not louder or more emotional.',
    '- Guide Front: Use Broken Record when someone keeps pushing.',
    '',
    'BUNDLE: free',
    '- Situation: Someone keeps asking after you already said no. | Response: \"I understand, but my answer is still no.\"',
    '- Situation: A colleague dismisses your concern again. | Response: \"I hear you — and I do want to come back to this.\" | Guide Front: This one is about staying calm under repetition.',
    '- Situation: A salesperson pushes after you declined. | Response: \"That does not work for me.\" — calm, no smile, no apology.',
    '- Situation: Someone tries to argue you out of a decision. | Response: \"I have made my decision.\" — no explanation, no new arguments.',
    '- Situation: Someone escalates pressure when you decline. | Response: Hold the same tone as the pressure rises. That is exactly when the technique is being tested.',
    '',
    'BUNDLE: pro',
    '- Situation: A colleague keeps pushing back on a boundary at work. | Response: \"That is my boundary.\" — calm, clear, repeated.',
    '- Situation: A family member pressures you about a life choice. | Response: \"I have made my choice.\" — warmly but without wavering.',
    '- Situation: Someone tries to negotiate after you said no. | Response: \"No is still my answer.\" — no softening, no new reasons.',
    '',
    '## Strategy: The Soft No',
    '**Explanation:** Decline without over-explaining or apologising. Works well when you want to stay warm but firm.',
    '',
    'BUNDLE: free',
    '- Situation: A friend asks for help you do not have capacity for. | Response: \"I can not make that work right now — I hope it goes well.\"',
    '- Situation: You are invited to something you do not want to attend. | Response: \"I will have to skip this one — thanks for thinking of me.\"',
    '- Situation: Someone asks for a favour you cannot commit to. | Response: \"That does not work for me right now.\"',
    '- Situation: You need to decline a last-minute request. | Response: \"I am not able to take that on — good luck with it.\"',
    '- Situation: Someone asks if you can help and you genuinely cannot. | Response: \"Not this time — I hope you find someone.\"',
    '',
    'BUNDLE: pro',
    '- Situation: A manager adds to your plate when you are at capacity. | Response: \"I want to do this well — can we talk about what moves down the list?\"',
    '- Situation: A client asks for something outside the agreed scope. | Response: \"That is outside what we agreed — happy to discuss it as a separate piece.\"',
    '- Situation: Someone keeps asking despite a previous no. | Response: \"My answer has not changed.\" — warm but steady.',
    '',
    '# ── MEMORIZE ──────────────────────────────────────────────────────────────',
    'MODE: memorize',
    '',
    '## Strategy: Assertiveness principles',
    '**Explanation:** Key concepts behind assertive communication.',
    '',
    'BUNDLE: free',
    '- Front: What is the broken record technique? | Back: Calmly repeating your position without escalating — same words, same tone, regardless of pushback.',
    '- Front: What is the difference between assertive and aggressive? | Back: Assertive respects both your needs and theirs. Aggressive prioritises your needs at their expense.',
    '- Front: What does a soft no sound like? | Back: Warm but clear. No apology, no long explanation — just a brief, kind decline.',
    '- Front: Why does broken record work? | Back: Every time you explain yourself, you give the other person new material to argue against. Repeating removes the fuel.',
    '- Front: What should you avoid when saying no? | Back: Over-explaining, apologising, or softening with \"maybe later\" — these invite further pressure.',
    '',
    'BUNDLE: pro',
    '- Front: What is the most important moment in broken record? | Back: When the pressure escalates. That is when most people cave. Holding the same tone is the whole skill.',
    '- Front: When should you NOT use a soft no? | Back: When the request deserves a real conversation. A soft no can feel dismissive if the person has a legitimate need.',
    '- Front: How do you combine broken record with acknowledgement? | Back: \"I hear that you are frustrated — and my answer is still no.\" Acknowledge without moving.',
  ].join('\n');


  var exMultiPack = [
    'PACK: Starting Conversations',
    'TAGS: small talk, starting conversations, social anxiety, meeting people',
    'TOPICS: Questions & Conversation Starters',
    '',
    'MODE: single',
    '',
    '## Strategy: The Situational Opener',
    '**Explanation:** Comment on something real and shared in the immediate environment — the most natural way to start a conversation with a stranger.',
    '',
    'BUNDLE: free',
    '- Situation: Waiting in line with someone. | Response: Comment on the wait or the place: \"Have you been here before?\"',
    '- Situation: At a social event where you know no one. | Response: \"How do you know [host]?\" — almost always opens a conversation.',
    '- Situation: Someone nearby is doing something interesting. | Response: \"What are you working on?\" with genuine curiosity.',
    '- Situation: At a professional event. | Response: \"What brings you here today?\" — open and easy.',
    '- Situation: You are in a waiting room or shared space. | Response: Comment on something both of you can see — weather, the room, a shared wait.',
    '',
    'BUNDLE: pro',
    '- Situation: You want to extend a brief opener into a real conversation. | Response: Follow their answer with \"How long have you been into that?\" or \"What do you like about it?\"',
    '- Situation: The opener gets a short reply and then silence. | Response: Offer something about yourself: \"I ask because I have been here once before and loved it.\"',
    '- Situation: You want to open with someone who seems busy or guarded. | Response: Keep it brief and low-demand: \"Good crowd today.\" Then wait.',
    '',
    'PACK: Conversational Depth',
    'TAGS: deep conversation, connection, follow-up questions, meaningful talk',
    'TOPICS: Conversation & Flow, Rapport & Connection',
    '',
    'MODE: single',
    '',
    '## Strategy: The Follow-Up Question',
    '**Explanation:** Instead of moving to a new topic after someone answers, go deeper on what they just said. This signals genuine interest and leads to more meaningful conversation.',
    '',
    'BUNDLE: free',
    '- Situation: Someone mentions they just came back from a trip. | Response: \"What was the best part?\" rather than moving on.',
    '- Situation: Someone says they have been busy with work. | Response: \"What kind of work are you in?\" or \"What has been keeping you busiest?\"',
    '- Situation: Someone gives a one-word answer. | Response: \"Tell me more about that.\" — simple and almost always works.',
    '- Situation: You want to move from small talk to something more interesting. | Response: \"What is something you have been thinking about lately?\"',
    '- Situation: Someone shares something they seem excited about. | Response: \"What got you into that?\" — invites them to talk about something they love.',
    '',
    'BUNDLE: pro',
    '- Situation: Someone shares something difficult or personal. | Response: Reflect it back before asking more: \"That sounds like a lot — how are you holding up?\"',
    '- Situation: A conversation is getting surface-level again. | Response: \"Can I ask you something a bit different?\" — signals a shift without being jarring.',
    '- Situation: You want to share something of your own to deepen the exchange. | Response: Match their level of depth — not more, not less.',
    '',
    'MODE: memorize',
    '',
    '## Strategy: Depth principles',
    '**Explanation:** What to remember about creating conversational depth.',
    '',
    'BUNDLE: free',
    '- Front: What is the single best way to deepen a conversation? | Back: Ask a follow-up question about what was just said — go deeper rather than wider.',
    '- Front: What does \"follow the energy\" mean? | Back: Notice what the other person seems most animated by and ask more about that.',
    '- Front: Why do one-word answers kill conversations? | Back: They signal low investment. A follow-up question is the fastest way to restart the flow.',
    '- Front: What is the risk of asking too many questions? | Back: It starts to feel like an interview. Share something of your own at roughly the same level of depth.',
    '- Front: What makes a follow-up question better than a new topic? | Back: It shows you were listening. People feel heard — which is what creates real connection.',
    '',
    'BUNDLE: pro',
    '- Front: When should you NOT go deeper in a conversation? | Back: When the person is signalling they want to keep it light. Depth imposed on someone who is not ready feels uncomfortable.',
    '- Front: What is the difference between depth and intensity? | Back: Depth is curiosity and presence. Intensity is pressure. The former draws people in; the latter pushes them back.',
  ].join('\n');


  var exProgramNoCP = [
    'PROGRAM: Conversation Skills Foundations',
    'DESCRIPTION: Build confidence starting conversations, keeping them going, and creating genuine connection.',
    'ICON: ti-message-circle',
    'TAGS: conversation, social anxiety, connection, small talk',
    '',
    'SECTION: Part 1 — Starting Conversations',
    'PACK: Starting Conversations',
    'TOPICS: Questions & Conversation Starters',
    '',
    'MODE: single',
    '',
    '## Strategy: The Situational Opener',
    '**Explanation:** Comment on something real and shared in the immediate environment.',
    '',
    'BUNDLE: free',
    '- Situation: Waiting in line with someone. | Response: \"Have you been here before?\"',
    '- Situation: At a social event where you know no one. | Response: \"How do you know [host]?\"',
    '- Situation: Someone nearby is doing something interesting. | Response: \"What are you working on?\"',
    '- Situation: At a professional event. | Response: \"What brings you here today?\"',
    '- Situation: In a shared waiting space. | Response: Comment on something you both can see.',
    '',
    'BUNDLE: pro',
    '- Situation: You want to extend a brief opener into a real conversation. | Response: Follow their answer with \"How long have you been into that?\"',
    '- Situation: The opener gets a short reply and then silence. | Response: Offer something about yourself to re-open the exchange.',
    '- Situation: You want to open with someone who seems busy. | Response: Keep it brief and low-demand: \"Good crowd today.\" Then wait.',
    '',
    'SECTION: Part 2 — Conversational Depth',
    'PACK: Conversational Depth',
    '',
    'MODE: single',
    '',
    '## Strategy: The Follow-Up Question',
    '**Explanation:** Go deeper on what someone just said rather than moving to a new topic.',
    '',
    'BUNDLE: free',
    '- Situation: Someone mentions they just came back from a trip. | Response: \"What was the best part?\"',
    '- Situation: Someone says they have been busy with work. | Response: \"What kind of work are you in?\"',
    '- Situation: Someone gives a one-word answer. | Response: \"Tell me more about that.\"',
    '- Situation: Someone shares something they seem excited about. | Response: \"What got you into that?\"',
    '- Situation: You want to move from small talk to something more interesting. | Response: \"What is something you have been thinking about lately?\"',
    '',
    'BUNDLE: pro',
    '- Situation: Someone shares something difficult. | Response: Reflect before asking more: \"That sounds like a lot — how are you holding up?\"',
    '- Situation: A conversation is getting surface-level again. | Response: \"Can I ask you something a bit different?\"',
    '- Situation: You want to share something of your own. | Response: Match their level of depth — not more, not less.',
  ].join('\n');


  var exProgramWithCP = [
    'PROGRAM: Assertive Communication Course',
    'DESCRIPTION: A structured course in standing your ground, setting limits, and expressing yourself clearly.',
    'ICON: ti-shield',
    'TAGS: assertiveness, boundaries, confidence, course',
    '',
    'SECTION: Module 1 — Core Techniques',
    'PACK: Assertive Core',
    'TOPICS: Assertiveness',
    '',
    'MODE: single',
    '',
    '## Strategy: The Broken Record',
    '**Explanation:** Calmly repeat your position without escalating.',
    '',
    'BUNDLE: free',
    '- Situation: Someone keeps pushing after you said no. | Response: \"I understand — and my answer is still no.\"',
    '- Situation: A colleague dismisses your concern. | Response: \"I hear you — and I do want to come back to this.\"',
    '- Situation: A salesperson pushes after you declined. | Response: \"That does not work for me.\" — calm, no apology.',
    '- Situation: Someone tries to argue you out of a decision. | Response: \"I have made my decision.\" — no new arguments.',
    '- Situation: Someone escalates pressure. | Response: Hold the same tone. That is exactly when the technique is being tested.',
    '',
    'BUNDLE: pro',
    '- Situation: A colleague keeps pushing back on a boundary. | Response: \"That is my boundary.\" — calm, clear, repeated.',
    '- Situation: A family member pressures you about a life choice. | Response: \"I have made my choice.\" — warmly but without wavering.',
    '- Situation: Someone tries to negotiate after you said no. | Response: \"No is still my answer.\" — no softening.',
    '',
    'CHECKPOINT: Module 1 Test',
    'TIME: 90',
    'DRAW: 5',
    '- Q: What is the broken record technique? | Correct: C | A: Repeating yourself loudly until heard | B: Changing your argument each time | C: Calmly restating your position with the same tone | D: Agreeing to end the conflict',
    '- Q: When someone keeps pushing back, what should you avoid? | Correct: D | A: Repeating your position | B: Staying calm | C: Acknowledging them | D: Escalating emotionally or getting louder',
    '- Q: Why does broken record work? | Correct: B | A: It confuses the other person | B: It removes the fuel — no new arguments to respond to | C: It shows you are angry | D: It ends the conversation faster',
    '',
    'SECTION: Module 2 — Saying No',
    'PACK: Saying No',
    '',
    'MODE: single',
    '',
    '## Strategy: The Soft No',
    '**Explanation:** Decline without over-explaining or apologising.',
    '',
    'BUNDLE: free',
    '- Situation: A friend asks for help you do not have capacity for. | Response: \"I can not make that work right now — I hope it goes well.\"',
    '- Situation: You are invited somewhere you do not want to go. | Response: \"I will have to skip this one — thanks for thinking of me.\"',
    '- Situation: Someone asks for a favour you cannot commit to. | Response: \"That does not work for me right now.\"',
    '- Situation: You need to decline a last-minute request. | Response: \"I am not able to take that on — good luck with it.\"',
    '- Situation: Someone asks if you can help and you genuinely cannot. | Response: \"Not this time — I hope you find someone.\"',
    '',
    'BUNDLE: pro',
    '- Situation: A manager adds to your plate when you are at capacity. | Response: \"I want to do this well — can we talk about what moves down the list?\"',
    '- Situation: A client asks for something outside the agreed scope. | Response: \"That is outside what we agreed — happy to discuss it separately.\"',
    '- Situation: Someone keeps asking despite a previous no. | Response: \"My answer has not changed.\" — warm but steady.',
    '',
    'CHECKPOINT: Module 2 Test',
    'TIME: 90',
    'DRAW: 5',
    '- Q: A soft no avoids what? | Correct: A | A: Over-explaining and apologising | B: Warmth | C: Clarity | D: Eye contact',
    '- Q: Which response is an example of a soft no? | Correct: B | A: \"No, absolutely not.\" | B: \"I will have to skip this one — thanks for thinking of me.\" | C: \"I guess I could try...\" | D: \"Sorry, I am just so busy.\"',
    '- Q: What makes a no stronger? | Correct: C | A: Explaining your reasons in detail | B: Apologising first | C: Keeping it short and not over-justifying | D: Offering an alternative every time',
  ].join('\n');


  // ── MODAL ───────────────────────────────────────────────────────────────────

  var modal = document.getElementById('syntax-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'syntax-modal';
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);
  }

  modal.innerHTML =
    '<div class="modal modal--wide">' +
      '<div class="modal-header">' +
        '<h2>Import Syntax Guide</h2>' +
        '<button class="icon-btn" id="sg-close">&#x2715;</button>' +
      '</div>' +
      '<p class="modal-desc">Give the rules and a template to any AI tool — Claude, NotebookLM, ChatGPT — to generate importable packs or programs. Use the tabs below to switch between pack and program syntax, and see working examples you can copy directly.</p>' +

      // Top-level tabs
      '<div class="syntax-tabs" id="sg-top-tabs">' +
        '<button class="syntax-tab syntax-tab--active" data-stab="pack">Packs</button>' +
        '<button class="syntax-tab" data-stab="program">Programs</button>' +
      '</div>' +

      // ── PACKS TAB
      '<div class="syntax-section" id="stab-pack">' +
        packRules +
        '<h3 style="margin-top:20px;">Examples</h3>' +
        '<div class="syntax-tabs" id="sg-pack-ex-tabs">' +
          '<button class="syntax-ex-tab syntax-ex-tab--active" data-ex="single">Single pack</button>' +
          '<button class="syntax-ex-tab" data-ex="multi">Multiple packs</button>' +
        '</div>' +
        '<div id="sg-ex-single">' +
          '<p class="modal-desc" style="margin:8px 0;">A single pack with two strategies, two modes (single + memorize), and free/pro bundles.</p>' +
          '<button class="btn btn--primary btn--sm sg-copy-ex" data-ex="single" style="margin-bottom:8px;">Copy this example</button>' +
          '<pre class="syntax-pre" id="sg-tmpl-single"></pre>' +
        '</div>' +
        '<div id="sg-ex-multi" style="display:none">' +
          '<p class="modal-desc" style="margin:8px 0;">Two separate packs in one paste — each gets its own entry in My packs.</p>' +
          '<button class="btn btn--primary btn--sm sg-copy-ex" data-ex="multi" style="margin-bottom:8px;">Copy this example</button>' +
          '<pre class="syntax-pre" id="sg-tmpl-multi"></pre>' +
        '</div>' +
      '</div>' +

      // ── PROGRAMS TAB
      '<div class="syntax-section" id="stab-program" style="display:none">' +
        programRules +
        '<h3 style="margin-top:20px;">Examples</h3>' +
        '<div class="syntax-tabs" id="sg-prog-ex-tabs">' +
          '<button class="syntax-ex-tab syntax-ex-tab--active" data-ex="prog-nocp">Program without checkpoints</button>' +
          '<button class="syntax-ex-tab" data-ex="prog-cp">Program with checkpoints</button>' +
        '</div>' +
        '<div id="sg-ex-prog-nocp">' +
          '<p class="modal-desc" style="margin:8px 0;">Two sections, each with a pack. No tests — useful when the focus is on practice rather than assessment.</p>' +
          '<button class="btn btn--primary btn--sm sg-copy-ex" data-ex="prog-nocp" style="margin-bottom:8px;">Copy this example</button>' +
          '<pre class="syntax-pre" id="sg-tmpl-prog-nocp"></pre>' +
        '</div>' +
        '<div id="sg-ex-prog-cp" style="display:none">' +
          '<p class="modal-desc" style="margin:8px 0;">Two sections, each with a pack and a checkpoint test. Questions use A–D multiple choice.</p>' +
          '<button class="btn btn--primary btn--sm sg-copy-ex" data-ex="prog-cp" style="margin-bottom:8px;">Copy this example</button>' +
          '<pre class="syntax-pre" id="sg-tmpl-prog-cp"></pre>' +
        '</div>' +
      '</div>' +

      '<div class="modal-actions"><button class="btn btn--ghost" id="sg-done">Close</button></div>' +
    '</div>';

  modal.style.display = 'flex';

  // Inject template content
  document.getElementById('sg-tmpl-single').textContent    = exSinglePack;
  document.getElementById('sg-tmpl-multi').textContent     = exMultiPack;
  document.getElementById('sg-tmpl-prog-nocp').textContent = exProgramNoCP;
  document.getElementById('sg-tmpl-prog-cp').textContent   = exProgramWithCP;

  // Close buttons
  document.getElementById('sg-close').onclick = function() { modal.style.display = 'none'; };
  document.getElementById('sg-done').onclick  = function() { modal.style.display = 'none'; };

  // Top tabs (Packs / Programs)
  document.querySelectorAll('#sg-top-tabs .syntax-tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
      document.querySelectorAll('#sg-top-tabs .syntax-tab').forEach(function(t) { t.classList.remove('syntax-tab--active'); });
      tab.classList.add('syntax-tab--active');
      document.getElementById('stab-pack').style.display    = tab.dataset.stab === 'pack'    ? '' : 'none';
      document.getElementById('stab-program').style.display = tab.dataset.stab === 'program' ? '' : 'none';
    });
  });

  // Pack example sub-tabs
  document.querySelectorAll('#sg-pack-ex-tabs .syntax-ex-tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
      document.querySelectorAll('#sg-pack-ex-tabs .syntax-ex-tab').forEach(function(t) { t.classList.remove('syntax-ex-tab--active'); });
      tab.classList.add('syntax-ex-tab--active');
      document.getElementById('sg-ex-single').style.display = tab.dataset.ex === 'single' ? '' : 'none';
      document.getElementById('sg-ex-multi').style.display  = tab.dataset.ex === 'multi'  ? '' : 'none';
    });
  });

  // Program example sub-tabs
  document.querySelectorAll('#sg-prog-ex-tabs .syntax-ex-tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
      document.querySelectorAll('#sg-prog-ex-tabs .syntax-ex-tab').forEach(function(t) { t.classList.remove('syntax-ex-tab--active'); });
      tab.classList.add('syntax-ex-tab--active');
      document.getElementById('sg-ex-prog-nocp').style.display = tab.dataset.ex === 'prog-nocp' ? '' : 'none';
      document.getElementById('sg-ex-prog-cp').style.display   = tab.dataset.ex === 'prog-cp'   ? '' : 'none';
    });
  });

  // Copy buttons
  var exMap = {
    'single':    exSinglePack,
    'multi':     exMultiPack,
    'prog-nocp': exProgramNoCP,
    'prog-cp':   exProgramWithCP,
  };
  document.querySelectorAll('.sg-copy-ex').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var text = exMap[btn.dataset.ex] || '';
      navigator.clipboard.writeText(text).then(function() { showToast('Example copied!'); });
    });
  });
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
          <button class="icon-btn" id="paste-modal-close">&#x2715;</button>
        </div>
        <p class="modal-desc">Paste AI-generated text using the Deckstack format. <a href="#" id="show-syntax-btn">Show syntax guide</a></p>
        <div class="syntax-guide" id="syntax-guide" style="display:none">
<pre>PACK: Pack Name
TAGS: tag one, tag two
TOPICS: Topic Name
MODE: single
GUIDE FRONT: Use this strategy when...
GUIDE BACK: A possible response...

## Strategy: Strategy Name
**Explanation:** Explanation text here.
- Guide Front: Exception shown for this strategy only.

- Situation: Someone says X | Response: "You say Y."
- Situation: Another trigger | Response: "Another answer." | Guide Front: Per-card exception (optional)

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
      const result = importFromText(text);

      // Program import
      if (result && result.type === 'program') {
        // Save all embedded packs
        result.packs.forEach(pack => {
          const all = getAllEditorPacks();
          if (all[pack.key]) pack.key = pack.key + '_' + Date.now().toString(36);
          saveEditorPack(pack);
        });
        // Save program
        const all = getAllEditorPrograms();
        if (all[result.program.id]) result.program.id = result.program.id + '_' + Date.now().toString(36);
        saveEditorProgram(result.program);
        modal.style.display = 'none';
        showToast(`Imported program "${result.program.title}" with ${result.packs.length} pack${result.packs.length !== 1 ? 's' : ''}`);
        renderPackList();
        renderProgramList();
        return;
      }

      // Multi-pack import
      if (Array.isArray(result)) {
        const all = getAllEditorPacks();
        result.forEach(pack => {
          if (all[pack.key]) pack.key = pack.key + '_' + Date.now().toString(36);
          saveEditorPack(pack);
        });
        modal.style.display = 'none';
        showToast(`Imported ${result.length} packs`);
        renderPackList();
        return;
      }

      // Single pack import
      const all = getAllEditorPacks();
      if (all[result.key]) result.key = result.key + '_' + Date.now().toString(36);
      saveEditorPack(result);
      modal.style.display = 'none';
      showToast(`Imported "${result.name}"`);
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
    // Load from app data &mdash; never save to localStorage
    currentPack = packFromAppData(key);
    currentPack._fromApp = true;
  }
  setActivePack(key);
  currentMode   = MODES[0].id;
  currentStrat  = 0;
  currentBundle = 'free';
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
  currentBundle = 'free';
  showEditor();
}

// ── EDITOR ────────────────────────────────────────────────────────────────────
function showEditor() {
  showScreen('screen-editor');
  renderPackHeader();
  // Bind tag editing — editable for my packs, read-only view for app packs
  if (currentPack && !currentPack._fromApp) {
    bindEditorTagSection(currentPack, () => {
      saveEditorPack(currentPack);
    });
  }
  // App packs: tags shown read-only, no binding needed
  renderModeTabs();
  renderModeContent();
}

function renderPackHeader() {
  const isApp = !!currentPack._fromApp;
  const titleExtra  = isApp
    ? '<span class="app-pack-badge">App pack &mdash; read only</span>'
    : '<button class="icon-btn" id="rename-btn" title="Rename">&#9998;</button>';
  const resetBtn    = isApp
    ? '<button class="btn btn--ghost btn--sm" id="reset-btn">&#8634; Reset to original</button>'
    : '';
  const versionLabel = isApp ? 'Save as new&hellip;' : 'Save version&hellip;';

  setHTML('pack-header',
    '<div class="pack-title-row">' +
      '<span class="pack-title">' + escHtml(currentPack.name) + '</span>' +
      titleExtra +
      '<span id="save-indicator" style="font-size:12px;color:#8A6040;margin-left:8px;opacity:0;transition:opacity .3s;"></span>' +
    '</div>' +
    '<div class="pack-actions">' +
      '<button class="btn btn--ghost btn--sm" id="back-btn">&larr; All packs</button>' +
      resetBtn +
      '<button class="btn btn--secondary btn--sm" id="version-btn">' + versionLabel + '</button>' +
      '<button class="btn btn--primary btn--sm" id="export-btn">Export JSON</button>' +
    '</div>'
  );

  // Render tag section in its own container (between header and mode tabs)
  const packTagsEl = document.getElementById('pack-tags');
  if (packTagsEl) {
    packTagsEl.innerHTML = renderEditorTagSection(currentPack, !isApp);
  }

  const renameBtn = document.getElementById('rename-btn');
  if (renameBtn) renameBtn.onclick = () => {
    const name = prompt('New name:', currentPack.name);
    if (!name?.trim()) return;
    currentPack.name = name.trim();
    markDirty();
    renderPackHeader();
  };
  document.getElementById('back-btn').onclick = showHome;
  const resetBtnEl = document.getElementById('reset-btn');
  if (resetBtnEl) resetBtnEl.onclick = () => {
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
      currentBundle = 'free';
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
  let   bundles = modeData.bundles    || [];
  const strat   = strats[currentStrat] || emptyStrategy(currentMode);

  // If bundles array is empty but cards/inputs have bundle fields, derive them on the fly
  if (!bundles.length) {
    const ids = new Set();
    strats.forEach(s => {
      (s.inputs || s.cards || s.steps || []).forEach(i => { if (i.bundle && i.bundle !== 'default') ids.add(i.bundle); });
    });
    if (ids.size) {
      const TIER_MAP = { free: 'free', pro: 'pro' };
      bundles = [...ids].map(id => ({
        id,
        name: id === 'free' ? 'Free Bundle' : id === 'pro' ? 'Pro Bundle' : id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g,' '),
        tier: TIER_MAP[id] || 'pro-opt',
      }));
      modeData.bundles = bundles; // cache it
    }
  }

  const isMem  = currentMode === 'memorize';
  const isSeq  = currentMode === 'sequences';
  const hasBundles = bundles.length > 0;

  let html = `<div class="mode-body">`;

  // ── Strategy / category selector
  const readOnly = !!currentPack._fromApp;
  html += `
    <div class="field-block">
      <label class="field-label">${mode.stratLabel}</label>
      <div class="selector-row">
        <select class="select" id="strat-select" ${strats.length <= 1 && !readOnly ? 'disabled' : ''}>
          ${strats.map((s,i) => `<option value="${i}" ${i===currentStrat?'selected':''}>${escHtml(s.name||'(unnamed)')}</option>`).join('')}
        </select>
        ${!readOnly ? `
        <button class="icon-btn" id="strat-rename-btn" title="Rename ${mode.stratLabel}">&#9998;</button>
        <button class="btn btn--ghost btn--sm" id="add-strat-btn">+ Add</button>
        <button class="icon-btn danger" id="del-strat-btn" title="Delete">&#x2715;</button>` : ''}
      </div>
    </div>`;

  // ── Guide text — mode-level default for every entry in this mode
  html += `
    <div class="field-block">
      <details class="expandable">
        <summary class="expandable-summary">
          Guide text (all ${mode.stratLabel.toLowerCase()}s)
          <span class="hint-text">${(modeData.guideFront || modeData.guideBack) ? '&mdash; has content' : '&mdash; empty'}</span>
        </summary>
        <p class="hint-text" style="margin:6px 0 8px;">Short framing lines shown above the card text — front and back — for every ${mode.stratLabel.toLowerCase()} in this mode. Read aloud in handsfree. Set exceptions per ${mode.stratLabel.toLowerCase()} below.</p>
        <input class="input" id="mode-guide-front" ${readOnly ? 'readonly' : ''} placeholder="Guide front — e.g. Use this strategy when..." value="${escHtml(modeData.guideFront || '')}" />
        <input class="input" id="mode-guide-back" ${readOnly ? 'readonly' : ''} placeholder="Guide back — e.g. A possible response..." value="${escHtml(modeData.guideBack || '')}" style="margin-top:6px;" />
      </details>
    </div>`;

  // ── Explanation
  html += `
    <div class="field-block">
      <details class="expandable">
        <summary class="expandable-summary">
          Explanation
          <span class="hint-text">${strat.description ? '&mdash; has content' : '&mdash; empty'}</span>
        </summary>
        <textarea class="textarea" id="desc-ta" rows="7" ${readOnly ? 'readonly' : ''} placeholder="Explain this ${mode.stratLabel.toLowerCase()}...">${escHtml(strat.description||'')}</textarea>
      </details>
    </div>`;

  // ── Guide text — exception for this specific entry
  html += `
    <div class="field-block">
      <details class="expandable">
        <summary class="expandable-summary">
          Guide text (this ${mode.stratLabel.toLowerCase()} only)
          <span class="hint-text">${(strat.guideFront || strat.guideBack) ? '&mdash; has exception' : '&mdash; uses mode default'}</span>
        </summary>
        <input class="input" id="strat-guide-front" ${readOnly ? 'readonly' : ''} placeholder="${escHtml(modeData.guideFront ? 'Default: ' + modeData.guideFront : 'Guide front for this ' + mode.stratLabel.toLowerCase() + ' only')}" value="${escHtml(strat.guideFront || '')}" />
        <input class="input" id="strat-guide-back" ${readOnly ? 'readonly' : ''} placeholder="${escHtml(modeData.guideBack ? 'Default: ' + modeData.guideBack : 'Guide back for this ' + mode.stratLabel.toLowerCase() + ' only')}" value="${escHtml(strat.guideBack || '')}" style="margin-top:6px;" />
      </details>
    </div>`;

  // ── Bundle picker
  if (hasBundles) {
    // Filter out 'default' — not a real bundle
    const validBundles = bundles.filter(b => b.id !== 'default');
    // If the selected bundle does not exist in this pack, fall back to the
    // first real one. 'default' is one case; the important one is a pro-only
    // mode (sequences, challenges, mindset, collections) where no free bundle
    // exists at all — currentBundle starts as 'free', so without this the
    // scenario list filters down to nothing and the mode looks empty even
    // though the data is there.
    if (validBundles.length && !validBundles.some(b => b.id === currentBundle)) {
      currentBundle = validBundles[0].id;
    }
    const tierLabel = (b) => {
      if (b.tier === 'free') return '<span class="bundle-tier-badge tier-free">Free</span>';
      if (b.tier === 'pro')  return '<span class="bundle-tier-badge tier-pro">Pro</span>';
      if (b.tier === 'pro-opt') return '<span class="bundle-tier-badge tier-pro">Pro opt-in</span>';
      if (b.tier === 'extended') return '<span class="bundle-tier-badge tier-ext">Extended</span>';
      return '';
    };
    html += `
      <div class="field-block bundle-block">
        <label class="field-label">Input bundle</label>
        <div class="selector-row" style="align-items:center;gap:8px;">
          <select class="select" id="bundle-select" style="flex:1;min-width:0;">
            ${validBundles.map(b => `<option value="${b.id}" ${b.id===currentBundle?'selected':''}>${escHtml(b.name)}</option>`).join('')}
          </select>
          <span style="min-width:80px;text-align:left;">${validBundles.map(b => b.id === currentBundle ? tierLabel(b) : '').join('')}</span>
          <button class="btn btn--ghost btn--sm" id="add-bundle-btn" style="white-space:nowrap;flex-shrink:0;">+ Add bundle</button>
          <button class="icon-btn danger" id="del-bundle-btn" title="Delete bundle" style="flex-shrink:0;visibility:${currentBundle !== 'free' ? 'visible' : 'hidden'};">&#x2715;</button>
        </div>
      </div>`;
  }

  // ── Labels for card columns (used by non-sequences modes below)
  const frontLabel = isMem ? 'Front' : 'Situation';
  const backLabel  = isMem ? 'Back'  : 'Response';

  // ── Sequences: scenario tab UI ───────────────────────────────────────────────
  if (isSeq) {
    const allScenarios = strat.inputs || [];
    // Show only scenarios matching the current bundle
    const bundleScenarios = allScenarios.filter(sc => (sc.bundle || 'free') === currentBundle);
    if (currentScenarioIdx >= bundleScenarios.length) currentScenarioIdx = 0;
    const scenario = bundleScenarios[currentScenarioIdx] || { bundle: currentBundle, situation: '', steps: [] };
    const scenarioAbsIdx = allScenarios.indexOf(scenario);

    html += `
      <div class="field-block">
        <label class="field-label">Scenarios for <strong>${escHtml(currentBundle)}</strong>
          <span class="hint-text"> — swipe vertically in the app</span>
        </label>
        <div class="scenario-tabs" id="scenario-tabs">
          ${bundleScenarios.map((sc, i) => `
            <button class="scenario-tab${i === currentScenarioIdx ? ' scenario-tab--active' : ''}" data-sc="${i}">
              Scenario ${i + 1}
            </button>`).join('')}
          ${!readOnly ? `<button class="scenario-tab scenario-tab--add" id="add-scenario-btn">+ Add</button>` : ''}
        </div>
      </div>

      <div class="cards-section">
        <p class="hint-text" style="margin:0 0 10px 0;">
          Card 1 describes the situation. Cards 2+ are the steps, one per card.
        </p>
        ${!readOnly ? `<button class="btn btn--danger btn--sm" id="del-scenario-btn" title="Delete this scenario" style="margin-bottom:8px;">&#x2715; Delete scenario</button>` : ''}
        <div class="cards-header">
          <span class="col-label">Front</span>
          <span class="col-label">Back</span>
          <span></span>
        </div>

        <div class="card-row card-row--situation" data-sc-field="situation">
          <textarea class="card-ta" data-sc-field="situation" rows="2" ${readOnly?'readonly':''} placeholder="Describe the situation...">${escHtml(scenario.situation||'')}</textarea>
          <div class="card-ta card-ta--placeholder" style="background:transparent;border:1px dashed var(--ds-border,#ccc);display:flex;align-items:center;justify-content:center;color:#aaa;font-size:12px;">auto-filled on back</div>
          <span class="card-inherited-badge">Situation</span>
        </div>

        <label class="hint-text" style="display:flex;align-items:center;gap:6px;margin:0 0 8px 0;cursor:pointer;user-select:none;">
          <input type="checkbox" id="card-guides-toggle" ${showCardGuides ? 'checked' : ''} />
          Card guides — per-step guide text; empty fields inherit the combo default
        </label>
        ${(scenario.steps||[]).map((st, i) => {
          const seqInhF = (strat.guideFront || '').trim() || (modeData.guideFront || '').trim();
          const seqInhB = (strat.guideBack  || '').trim() || (modeData.guideBack  || '').trim();
          return `
        <div class="card-row" data-step="${i}">
          <textarea class="card-ta" data-step="${i}" data-field="front" rows="2" ${readOnly?'readonly':''} placeholder="Step ${i+1} — label…">${escHtml(st.front||'')}</textarea>
          <textarea class="card-ta" data-step="${i}" data-field="back" rows="2" ${readOnly?'readonly':''} placeholder="Step ${i+1} — explanation…">${escHtml(st.back||'')}</textarea>
          ${!readOnly ? `<button class="icon-btn danger step-del" data-step="${i}" title="Remove step">&#x2715;</button>` : '<span></span>'}
        </div>${showCardGuides ? `
        <div class="card-row card-row--guide" data-step="${i}">
          <textarea class="card-ta card-ta--guide" data-step="${i}" data-field="guideFront" rows="1" ${readOnly?'readonly':''} placeholder="${escHtml(seqInhF ? 'Guide front — default: ' + seqInhF : 'Guide front (no default set)')}">${escHtml(st.guideFront||'')}</textarea>
          <textarea class="card-ta card-ta--guide" data-step="${i}" data-field="guideBack" rows="1" ${readOnly?'readonly':''} placeholder="${escHtml(seqInhB ? 'Guide back — default: ' + seqInhB : 'Guide back (no default set)')}">${escHtml(st.guideBack||'')}</textarea>
          <span></span>
        </div>` : ''}`;
        }).join('')}

        ${!readOnly ? `<button class="btn btn--ghost add-step-btn" style="width:100%;margin-top:8px;">+ Add step</button>` : ''}
      </div>`;

    html += `</div>`; // mode-body
    setHTML('mode-content', html);
    bindEventsSeq(modeData, strats, strat, bundleScenarios, scenario, bundles);
    bindGuideFields(modeData, strat);
    return;
  }
  // ── End sequences UI ─────────────────────────────────────────────────────────
  // Build items list — for 'pro' bundle, include free cards (shown locked) + pro cards
  const isPro = currentBundle === 'pro';
  const getItems = () => {
    if (isMem) {
      const all = strat.cards || [];
      if (isPro) return all.filter(c => !c.bundle || c.bundle === 'free' || c.bundle === 'pro');
      return all.filter(c => !c.bundle || c.bundle === currentBundle || currentBundle === 'free');
    }
    if (isSeq) {
      // sequences handled separately above — should not reach here
      return [];
    }
    // single, challenges, mindset, collections
    const all = strat.inputs || [];
    if (isPro) return all.filter(i => !i.bundle || i.bundle === 'free' || i.bundle === 'pro');
    let result = all.filter(i => !i.bundle || i.bundle === currentBundle);
    // Defensive: if nothing matched, fall back to free or untagged
    if (!result.length && currentBundle !== 'free') {
      result = all.filter(i => !i.bundle || i.bundle === 'free');
      if (result.length) currentBundle = 'free';
    }
    // Final fallback: show all if still empty (handles packs with no bundle tags)
    if (!result.length) result = all;
    return result;
  };
  const items = getItems();

  // Effective strategy-level guide defaults (what a card inherits when its
  // own guide fields are left empty) — used as placeholders in the guide rows.
  const inhF = (strat.guideFront || '').trim() || (modeData.guideFront || '').trim();
  const inhB = (strat.guideBack  || '').trim() || (modeData.guideBack  || '').trim();

  html += `
    <div class="cards-section">
      <div class="cards-header">
        <span class="col-label">${frontLabel}</span>
        <span class="col-label">${backLabel}</span>
        <span></span>
      </div>
      <label class="hint-text" style="display:flex;align-items:center;gap:6px;margin:0 0 8px 0;cursor:pointer;user-select:none;">
        <input type="checkbox" id="card-guides-toggle" ${showCardGuides ? 'checked' : ''} />
        Card guides — per-card guide text; empty fields inherit the ${mode.stratLabel.toLowerCase()} default
      </label>
      ${items.map((item, i) => {
        const isFreeInPro = isPro && (item.bundle === 'free' || !item.bundle);
        const isLocked = readOnly || isFreeInPro;
        const rowClass = isFreeInPro ? 'card-row card-row--inherited' : 'card-row';
        return `
        <div class="${rowClass}" data-index="${i}">
          <textarea class="card-ta" data-field="q" rows="2" ${isLocked ? 'readonly' : ''} placeholder="${frontLabel}...">${escHtml(item.q||item.front||'')}</textarea>
          <textarea class="card-ta" data-field="a" rows="2" ${isLocked ? 'readonly' : ''} placeholder="${backLabel}...">${escHtml(item.a||item.back||'')}</textarea>
          ${isFreeInPro
            ? `<span class="card-inherited-badge" title="From Free bundle — edit in Free view">Free</span>`
            : !readOnly ? `<button class="icon-btn danger card-del" data-index="${i}" title="Remove">&#x2715;</button>` : '<span></span>'
          }
        </div>${showCardGuides ? `
        <div class="card-row card-row--guide" data-index="${i}">
          <textarea class="card-ta card-ta--guide" data-field="guideFront" rows="1" ${isLocked ? 'readonly' : ''} placeholder="${escHtml(inhF ? 'Guide front — default: ' + inhF : 'Guide front (no default set)')}">${escHtml(item.guideFront||'')}</textarea>
          <textarea class="card-ta card-ta--guide" data-field="guideBack" rows="1" ${isLocked ? 'readonly' : ''} placeholder="${escHtml(inhB ? 'Guide back — default: ' + inhB : 'Guide back (no default set)')}">${escHtml(item.guideBack||'')}</textarea>
          <span></span>
        </div>` : ''}`;
      }).join('')}
      ${!readOnly ? `<button class="btn btn--ghost add-card-btn" style="width:100%;margin-top:8px;">+ Add ${mode.cardLabel.toLowerCase()}</button>` : ''}
    </div>`;

  html += `</div>`; // mode-body
  setHTML('mode-content', html);
  bindEvents(modeData, strats, strat, bundles, isMem, isSeq);
  bindGuideFields(modeData, strat);
}

// ── EVENT BINDING ─────────────────────────────────────────────────────────────
// Guide text inputs (mode default + per-entry exception) — shared by all modes
function bindGuideFields(modeData, strat) {
  const wire = (id, obj, key) => {
    const el = document.getElementById(id);
    if (el && !el.readOnly) el.addEventListener('input', () => { obj[key] = el.value; markDirty(); });
  };
  wire('mode-guide-front',  modeData, 'guideFront');
  wire('mode-guide-back',   modeData, 'guideBack');
  wire('strat-guide-front', strat,    'guideFront');
  wire('strat-guide-back',  strat,    'guideBack');
  // Per-card guides visibility toggle (v1.8.0) — onchange avoids stacking
  const cgToggle = document.getElementById('card-guides-toggle');
  if (cgToggle) cgToggle.onchange = () => {
    showCardGuides = cgToggle.checked;
    renderModeContent();
  };
}


function bindEvents(modeData, strats, strat, bundles, isMem, isSeq) {

  // Strategy select
  const stratSel = document.getElementById('strat-select');
  if (stratSel) stratSel.addEventListener('change', e => {
    currentStrat = parseInt(e.target.value);
    currentBundle = 'free';
    currentScenarioIdx = 0;
    renderModeContent();
  });

  // Rename strategy
  const renameStratBtn = document.getElementById('strat-rename-btn');
  if (renameStratBtn) renameStratBtn.addEventListener('click', () => {
    const name = prompt('Name:', strat.name || '');
    if (name === null) return;
    strat.name = name.trim();
    markDirty(); renderModeContent();
  });

  // Add strategy
  const addStratBtn = document.getElementById('add-strat-btn');
  if (addStratBtn) addStratBtn.addEventListener('click', () => {
    const name = prompt('Name for new entry:');
    if (!name?.trim()) return;
    const s = emptyStrategy(currentMode); s.name = name.trim();
    modeData.strategies.push(s);
    currentStrat = modeData.strategies.length - 1;
    markDirty(); renderModeContent();
  });

  // Delete strategy
  const delStratBtn = document.getElementById('del-strat-btn');
  if (delStratBtn) delStratBtn.addEventListener('click', () => {
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
      const tierChoice = prompt('Bundle tier:\n1 = Pro opt-in (included with Pro, user can toggle on/off)\n2 = Extended (requires separate purchase)\n\nEnter 1 or 2:', '1');
      const tier = tierChoice === '2' ? 'extended' : 'pro-opt';
      modeData.bundles.push({ id, name: name.trim(), tier });
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
      currentBundle = 'free';
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
  const _addCardBtn = document.querySelector('.add-card-btn');   // absent for read-only app packs
  if (_addCardBtn) _addCardBtn.addEventListener('click', () => {
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
