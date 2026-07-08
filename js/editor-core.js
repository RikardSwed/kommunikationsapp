// editor-core.js — Deckstack Pack Editor
// Depends on: data.js, challengesData.js, mindsetData.js, multiStepData.js, memorizeData.js

const EDITOR_VERSION = 'v1.1.0';
const STORAGE_KEY    = 'ds_editor_packs';
const ACTIVE_KEY     = 'ds_editor_active';

// ── MODE DEFINITIONS ──────────────────────────────────────────────────────────

const MODES = [
  { id: 'single',      label: 'Single Strategy', stratLabel: 'Strategy',  cardLabel: 'Card' },
  { id: 'collections', label: 'Collections',      stratLabel: 'Collection',cardLabel: 'Card' },
  { id: 'memorize',    label: 'Memorize',         stratLabel: 'Strategy',  cardLabel: 'Card' },
  { id: 'sequences',   label: 'Sequences',        stratLabel: 'Combo',     cardLabel: 'Step' },
  { id: 'challenges',  label: 'Challenges',       stratLabel: 'Category',  cardLabel: 'Card' },
  { id: 'mindset',     label: 'Mindset',          stratLabel: 'Mindset',   cardLabel: 'Card' },
];

// ── APP DATA ACCESS ───────────────────────────────────────────────────────────
// Data files declare const variables — bridge script in admin.html
// copies them to window._ds* so we can access them here.

function getDS(name) { return window[name] || {}; }

function loadAppPacks() {
  const src = getDS('_dsCollections');
  if (!src || !Object.keys(src).length) return [];
  return Object.keys(src).map(key => ({ key, name: packDisplayName(key), source: 'app' }));
}

function packDisplayName(key) {
  return key.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase()).trim();
}

function packFromAppData(key) {
  const pack = { key, name: packDisplayName(key), isNew: false, source: 'app', createdAt: Date.now(), versions: [] };

  function mapInputs(arr) {
    return (arr||[]).map(i => ({ q: i.q||'', a: i.a||'', bundle: i.bundle||'default' }));
  }
  function mapCards(arr) {
    return (arr||[]).map(c => ({ q: c.q||'', a: c.a||'' }));
  }
  function deriveBundles(strategies) {
    const ids = new Set();
    strategies.forEach(s => (s.inputs||[]).forEach(i => { if (i.bundle && i.bundle !== 'default') ids.add(i.bundle); }));
    return [...ids].map(id => ({ id, name: id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g,' ') }));
  }

  const rawSingle = (getDS('_dsCollections'))[key] || [];
  const singleStrats = rawSingle.map(s => ({ name: s.name||'', description: s.description||'', inputs: mapInputs(s.inputs) }));
  pack.single      = { strategies: singleStrats, bundles: deriveBundles(singleStrats) };
  pack.collections = { strategies: singleStrats.map(s => ({...s, inputs: [...s.inputs]})), bundles: [] };

  const rawChall = (getDS('_dsChallenges'))[key] || [];
  const challStrats = rawChall.map(s => ({ name: s.name||'', description: s.description||'', inputs: mapInputs(s.inputs) }));
  pack.challenges = { strategies: challStrats, bundles: deriveBundles(challStrats) };

  const rawMind = (getDS('_dsMindset'))[key] || [];
  const mindStrats = rawMind.map(s => ({ name: s.name||'', description: s.description||'', inputs: mapInputs(s.inputs) }));
  pack.mindset = { strategies: mindStrats, bundles: deriveBundles(mindStrats) };

  const rawMem = (getDS('_dsMemorize'))[key] || [];
  pack.memorize = {
    strategies: rawMem.map(s => ({ name: s.name||'', description: s.description||'', cards: mapCards(s.cards) })),
    bundles: [],
  };

  const rawSeq = (getDS('_dsMultiStep'))[key] || [];
  pack.sequences = {
    strategies: rawSeq.map(s => ({ name: s.name||'', description: s.description||'', steps: mapInputs(s.steps||s.inputs) })),
    bundles: [],
  };

  return pack;
}

// ── DEFAULT STRUCTURES ────────────────────────────────────────────────────────

function emptyInput()  { return { q: '', a: '', bundle: 'default' }; }
function emptyCard()   { return { q: '', a: '' }; }
function emptyStrategy(modeId) {
  if (modeId === 'memorize')  return { name: '', description: '', cards:  [emptyCard()]  };
  if (modeId === 'sequences') return { name: '', description: '', steps:  [emptyInput()] };
  return                             { name: '', description: '', inputs: [emptyInput()] };
}
function emptyModeData(modeId) { return { strategies: [emptyStrategy(modeId)], bundles: [] }; }
function emptyPack(name) {
  const key  = slugify(name);
  const pack = { key, name, isNew: true, createdAt: Date.now(), versions: [] };
  MODES.forEach(m => { pack[m.id] = emptyModeData(m.id); });
  return pack;
}

// ── SLUGIFY ───────────────────────────────────────────────────────────────────

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '').slice(0, 32) || 'pack';
}

// ── STORAGE ───────────────────────────────────────────────────────────────────

function getAllEditorPacks() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { return {}; }
}
function saveEditorPack(pack) {
  const all = getAllEditorPacks();
  all[pack.key] = pack;
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(all)); return true; } catch { return false; }
}
function deleteEditorPack(key) {
  const all = getAllEditorPacks(); delete all[key];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}
function setActivePack(key) { localStorage.setItem(ACTIVE_KEY, key); }
function getActivePack()    { return localStorage.getItem(ACTIVE_KEY) || null; }
function saveVersion(pack, versionName) {
  const snap = JSON.parse(JSON.stringify(pack));
  snap.versionName = versionName; snap.savedAt = Date.now();
  pack.versions = pack.versions || [];
  pack.versions.push(snap);
  saveEditorPack(pack);
}

// ── EXPORT ────────────────────────────────────────────────────────────────────

function exportPack(pack) {
  const out = {
    meta: { key: pack.key, name: pack.name, exportedAt: new Date().toISOString(), editorVersion: EDITOR_VERSION },
    data: {},
  };
  MODES.forEach(m => { if (pack[m.id]) out.data[m.id] = pack[m.id]; });
  return JSON.stringify(out, null, 2);
}
function downloadExport(pack) {
  const blob = new Blob([exportPack(pack)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = `deckstack-pack-${pack.key}-${Date.now()}.json`;
  a.click(); URL.revokeObjectURL(url);
}

// ── IMPORT: JSON FILE ─────────────────────────────────────────────────────────

function importFromJSON(jsonString) {
  const data = JSON.parse(jsonString);
  // Accept both raw pack objects and our export format {meta, data}
  if (data.meta && data.data) {
    // Our own export format
    const pack = emptyPack(data.meta.name || 'Imported pack');
    pack.key   = data.meta.key || pack.key;
    pack.name  = data.meta.name || pack.name;
    MODES.forEach(m => { if (data.data[m.id]) pack[m.id] = data.data[m.id]; });
    return pack;
  }
  // Assume it's a raw pack object
  if (data.key && data.name) return data;
  throw new Error('Unrecognised JSON format');
}

// ── IMPORT: AI TEXT (paste syntax) ───────────────────────────────────────────
// Expected syntax (produced by AI tools like NotebookLM or Claude):
//
// PACK: Pack Name
// MODE: single
//
// ## Strategy: Strategy Name
// **Explanation:** Explanation text here...
//
// - Situation: Someone says X | Response: "You say Y."
// - Situation: Another trigger | Response: "Another answer."
//
// ## Strategy: Next Strategy Name
// ...
//
// MODE: challenges
// ## Category: Category Name
// ...

function importFromText(text) {
  const lines = text.split('\n');
  let packName   = 'Imported pack';
  let currentModeId = 'single';
  const modeBuffers = {}; // modeId -> [{name, description, inputs/cards/steps}]
  MODES.forEach(m => { modeBuffers[m.id] = []; });

  let currentStrat = null;
  let inExplanation = false;
  let explanationLines = [];

  function pushStrat() {
    if (!currentStrat) return;
    if (inExplanation) { currentStrat.description = explanationLines.join('\n').trim(); inExplanation = false; explanationLines = []; }
    modeBuffers[currentModeId].push(currentStrat);
    currentStrat = null;
  }

  function newStrat(name) {
    pushStrat();
    const isMem = currentModeId === 'memorize';
    const isSeq = currentModeId === 'sequences';
    currentStrat = { name, description: '', ...(isMem ? { cards: [] } : isSeq ? { steps: [] } : { inputs: [] }) };
  }

  for (const raw of lines) {
    const line = raw.trim();

    // Pack name
    if (/^PACK:/i.test(line)) { packName = line.replace(/^PACK:/i, '').trim(); continue; }

    // Mode switch
    if (/^MODE:/i.test(line)) {
      pushStrat();
      const mId = line.replace(/^MODE:/i,'').trim().toLowerCase();
      const found = MODES.find(m => m.id === mId || m.label.toLowerCase() === mId);
      if (found) currentModeId = found.id;
      continue;
    }

    // Strategy / category heading
    const stratMatch = line.match(/^##\s+(?:Strategy|Category|Combo|Collection|Mindset):\s*(.+)/i);
    if (stratMatch) { newStrat(stratMatch[1].trim()); inExplanation = false; continue; }

    // Explanation start
    if (/^\*\*Explanation:\*\*/i.test(line)) {
      if (currentStrat) {
        inExplanation = true;
        explanationLines = [line.replace(/^\*\*Explanation:\*\*\s*/i, '')];
      }
      continue;
    }

    // Continued explanation (non-empty, non-card line)
    if (inExplanation && currentStrat && !line.startsWith('-')) {
      if (line === '') { inExplanation = false; currentStrat.description = explanationLines.join('\n').trim(); }
      else { explanationLines.push(line); }
      continue;
    }

    // Card / input line:  - Situation: X | Response: Y
    //                     - Front: X | Back: Y
    //                     - Prompt: X | Response: Y
    const cardMatch = line.match(/^-\s+(?:Situation|Front|Prompt|Q):\s*(.+?)\s*\|\s*(?:Response|Back|A):\s*(.+)/i);
    if (cardMatch && currentStrat) {
      const q = cardMatch[1].trim();
      const a = cardMatch[2].trim();
      if (currentModeId === 'memorize')       currentStrat.cards.push({ q, a });
      else if (currentModeId === 'sequences') currentStrat.steps.push({ q, a, bundle: 'default' });
      else                                    currentStrat.inputs.push({ q, a, bundle: 'default' });
      continue;
    }
  }
  pushStrat(); // flush last strategy

  const pack = emptyPack(packName);
  MODES.forEach(m => {
    if (modeBuffers[m.id].length) {
      pack[m.id] = { strategies: modeBuffers[m.id], bundles: [] };
    }
  });
  return pack;
}
