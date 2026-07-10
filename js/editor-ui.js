// editor-ui.js &mdash; Deckstack Pack Editor UI

let currentPack   = null;
let currentMode   = MODES[0].id;
let currentStrat  = 0;
let currentBundle = 'free';

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

  // App programs — click shows program detail modal
  document.querySelectorAll('#program-list-app .program-row').forEach(row => {
    row.style.cursor = 'pointer';
    row.addEventListener('click', () => {
      const prog = (window._dsPrograms || []).find(p => p.id === row.dataset.id);
      if (!prog) return;
      const sections = (prog.sections || []).map(s => {
        const cps = s.checkpoint ? ` · <span style="color:var(--acc)">Checkpoint</span>` : '';
        const packs = (s.packs || []).map(p => p.label || p.key).join(', ');
        return `<div style="padding:6px 0; border-bottom:1px solid var(--border);">
          <div style="font-weight:600;font-size:13px;">${escHtml(s.title)}</div>
          <div style="font-size:12px;color:var(--txt3);">${escHtml(packs)}${cps}</div>
        </div>`;
      }).join('');
      showInfoModal(prog.title, `
        <p style="color:var(--txt2);font-size:13px;margin:0 0 12px;">${escHtml(prog.description || '')}</p>
        <div style="font-size:11px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:var(--txt3);margin-bottom:8px;">Sections</div>
        ${sections || '<div style="color:var(--txt3);font-size:13px;">No sections</div>'}
      `);
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

  // My programs — click shows detail
  document.querySelectorAll('#program-list-my .program-row').forEach(row => {
    row.style.cursor = 'pointer';
    row.addEventListener('click', e => {
      if (e.target.closest('.prog-del, .prog-export')) return;
      const prog = getAllEditorPrograms()[row.dataset.id];
      if (!prog) return;
      const sections = (prog.sections || []).map(s => {
        const packs = (s.packs || []).map(p => p.label || p.key).join(', ');
        const cps = s.checkpoint ? ` · <span style="color:var(--acc)">Checkpoint (${s.checkpoint.questions ? s.checkpoint.questions.length : 0} Q)</span>` : '';
        return `<div style="padding:6px 0;border-bottom:1px solid var(--border);">
          <div style="font-weight:600;font-size:13px;">${escHtml(s.title)}</div>
          <div style="font-size:12px;color:var(--txt3);">${escHtml(packs)}${cps}</div>
        </div>`;
      }).join('');
      showInfoModal(prog.title, `
        <p style="color:var(--txt2);font-size:13px;margin:0 0 12px;">${escHtml(prog.description || '')}</p>
        ${sections || '<div style="color:var(--txt3);font-size:13px;">No sections yet</div>'}
      `);
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

function showSyntaxGuide() {

  // ── REGLER ──────────────────────────────────────────────────────────────────

  var packRules =
    '<h3>Pack syntax — rules</h3>' +
    '<ul class="syntax-rules">' +
    '<li><code>PACK:</code> — Pack name, one line. To import several packs in one paste, just use multiple <code>PACK:</code> blocks one after another.</li>' +
    '<li><code>TAGS: tag one, tag two, tag three</code> — optional comma-separated list of search tags, placed directly after the <code>PACK:</code> line. Tags are used by the in-app search to surface packs for related concepts and synonyms.</li>' +
    '<li><code>MODE:</code> — one of: <code>single</code>, <code>collections</code>, <code>memorize</code>, <code>sequences</code>, <code>challenges</code>, <code>mindset</code>. Only include modes relevant to the pack — you do not need all of them.</li>' +
    '<li><code>## Strategy: Name</code> — starts a new strategy within a mode. Use <code>## Category:</code> for challenges, <code>## Combo:</code> for sequences, <code>## Collection:</code> for collections, <code>## Mindset:</code> for mindset.</li>' +
    '<li><code>**Explanation:**</code> — descriptive text explaining the strategy. Can be several sentences on the same line or continued on the next non-empty line.</li>' +
    '<li><code>BUNDLE: free</code> — the free-tier input cards (typically 5 per strategy). Always include this.</li>' +
    '<li><code>BUNDLE: pro</code> — the <em>extra</em> pro-tier cards only (typically 3 per strategy). Do NOT repeat the free cards here — the app automatically includes free cards when pro is active. Pro users see all 8 (5 free + 3 pro); free users see the 5 free cards.</li>' +
    '<li><code>BUNDLE: Name</code> — optional thematic bundle, e.g. "Workplace &amp; Social". Users activate these manually in the app.</li>' +
    '<li>Card format depends on mode:<br>' +
    '&nbsp;&nbsp;<code>- Situation: X | Response: Y</code> — single, collections, challenges, mindset<br>' +
    '&nbsp;&nbsp;<code>- Front: X | Back: Y</code> — memorize<br>' +
    '&nbsp;&nbsp;<code>- Prompt: X | Response: Y</code> — sequences</li>' +
    '<li>Memorize and sequences modes do not use bundles — omit <code>BUNDLE:</code> lines there.</li>' +
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
    '',
    '# ── SINGLE STRATEGY ──────────────────────────────────────────────────────',
    'MODE: single',
    '',
    '## Strategy: The Broken Record',
    '**Explanation:** Calmly repeat your position without escalating. Useful when someone keeps pushing back. Stay neutral and consistent — not louder or more emotional.',
    '',
    'BUNDLE: free',
    '- Situation: Someone keeps asking after you already said no. | Response: \"I understand, but my answer is still no.\"',
    '- Situation: A colleague dismisses your concern again. | Response: \"I hear you — and I do want to come back to this.\"',
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

  // ── Bundle picker
  if (hasBundles) {
    // Filter out 'default' — not a real bundle
    const validBundles = bundles.filter(b => b.id !== 'default');
    // If currentBundle is 'default', switch to first valid bundle
    if (currentBundle === 'default' && validBundles.length) {
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
        <div class="selector-row">
          <select class="select" id="bundle-select">
            ${validBundles.map(b => `<option value="${b.id}" ${b.id===currentBundle?'selected':''}>${escHtml(b.name)}</option>`).join('')}
          </select>
          ${validBundles.map(b => b.id === currentBundle ? tierLabel(b) : '').join('')}
          <button class="btn btn--ghost btn--sm" id="add-bundle-btn">+ Add bundle</button>
          ${currentBundle !== 'free' ? `<button class="icon-btn danger" id="del-bundle-btn" title="Delete bundle">&#x2715;</button>` : ''}
        </div>
      </div>`;
  }

  // ── Cards table
  const frontLabel = isMem ? 'Front' : (isSeq ? 'Prompt' : 'Situation');
  const backLabel  = isMem ? 'Back'  : 'Response';
  // Build items list — for 'pro' bundle, include free cards (shown locked) + pro cards
  const isPro = currentBundle === 'pro';
  const getItems = () => {
    if (isMem) {
      const all = strat.cards || [];
      if (isPro) return all.filter(c => !c.bundle || c.bundle === 'free' || c.bundle === 'pro');
      return all.filter(c => !c.bundle || c.bundle === currentBundle || currentBundle === 'free');
    }
    if (isSeq) {
      const all = strat.steps || [];
      if (isPro) return all.filter(s => !s.bundle || s.bundle === 'free' || s.bundle === 'pro');
      return all.filter(s => !s.bundle || s.bundle === currentBundle || currentBundle === 'free');
    }
    // single, challenges, mindset, collections
    const all = strat.inputs || [];
    if (isPro) return all.filter(i => !i.bundle || i.bundle === 'free' || i.bundle === 'pro');
    return all.filter(i => !i.bundle || i.bundle === currentBundle);
  };
  const items = getItems();

  html += `
    <div class="cards-section">
      <div class="cards-header">
        <span class="col-label">${frontLabel}</span>
        <span class="col-label">${backLabel}</span>
        <span></span>
      </div>
      ${items.map((item, i) => {
        const isFreeInPro = isPro && (item.bundle === 'free' || !item.bundle);
        const isLocked = readOnly || isFreeInPro;
        const rowClass = isFreeInPro ? 'card-row card-row--inherited' : 'card-row';
        const lockBadge = isFreeInPro ? `<span class="card-inherited-badge" title="From Free bundle — edit in Free view">Free</span>` : '';
        return `
        <div class="${rowClass}" data-index="${i}">
          ${lockBadge}
          <textarea class="card-ta" data-field="q" rows="2" ${isLocked ? 'readonly' : ''} placeholder="${frontLabel}...">${escHtml(item.q||item.front||'')}</textarea>
          <textarea class="card-ta" data-field="a" rows="2" ${isLocked ? 'readonly' : ''} placeholder="${backLabel}...">${escHtml(item.a||item.back||'')}</textarea>
          ${!isLocked ? `<button class="icon-btn danger card-del" data-index="${i}" title="Remove">&#x2715;</button>` : '<span></span>'}
        </div>`;
      }).join('')}
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
    currentBundle = 'free';
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
