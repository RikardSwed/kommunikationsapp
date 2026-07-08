// editor-core.js — Deckstack Pack Editor
// Depends on: data.js, challengesData.js, mindsetData.js, multiStepData.js, memorizeData.js

const EDITOR_VERSION = 'v1.0.0';
const STORAGE_KEY    = 'ds_editor_packs';
const ACTIVE_KEY     = 'ds_editor_active';

// ── MODE DEFINITIONS ──────────────────────────────────────────────────────────

const MODES = [
  { id: 'single',      label: 'Single Strategy',  stratLabel: 'Strategy', cardLabel: 'Card'  },
  { id: 'collections', label: 'Collections',       stratLabel: 'Collection', cardLabel: 'Card' },
  { id: 'memorize',    label: 'Memorize',          stratLabel: 'Strategy', cardLabel: 'Card'  },
  { id: 'sequences',   label: 'Sequences',         stratLabel: 'Combo',    cardLabel: 'Step'  },
  { id: 'challenges',  label: 'Challenges',        stratLabel: 'Category', cardLabel: 'Card'  },
  { id: 'mindset',     label: 'Mindset',           stratLabel: 'Mindset',  cardLabel: 'Card'  },
];

// ── DEFAULT STRUCTURES ────────────────────────────────────────────────────────

function emptyInput()  { return { q: '', a: '', bundle: 'default' }; }
function emptyCard()   { return { q: '', a: '' }; }

function emptyStrategy(modeId) {
  if (modeId === 'memorize')  return { name: '', description: '', cards:  [emptyCard()]  };
  if (modeId === 'sequences') return { name: '', description: '', steps:  [emptyInput()] };
  return                             { name: '', description: '', inputs: [emptyInput()] };
}

function emptyModeData(modeId) {
  return { strategies: [emptyStrategy(modeId)], bundles: [] };
}

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

// ── LOAD APP PACKS ────────────────────────────────────────────────────────────
// Reads from the global data objects loaded by the app's own data files.
// Uses direct variable references (not window.*) since const at top-level
// may not be enumerable on window in all environments.

function getAppData(varName) {
  // Try window first, then eval as fallback
  try { return window[varName] || eval(varName); } catch { return null; }
}

function loadAppPacks() {
  const src = getAppData('collections');
  if (!src) return [];
  return Object.keys(src).map(key => ({ key, name: packDisplayName(key), source: 'app' }));
}

function packDisplayName(key) {
  // Convert camelCase/lowercase key to readable name
  return key.replace(/([A-Z])/g, ' $1')
            .replace(/^./, c => c.toUpperCase())
            .trim();
}

// Build a full editor pack from live app data
function packFromAppData(key) {
  const pack = {
    key,
    name:      packDisplayName(key),
    isNew:     false,
    source:    'app',
    createdAt: Date.now(),
    versions:  [],
  };

  function mapInputs(arr) {
    return (arr || []).map(i => ({ q: i.q || '', a: i.a || '', bundle: i.bundle || 'default' }));
  }
  function mapCards(arr) {
    return (arr || []).map(c => ({ q: c.q || '', a: c.a || '' }));
  }
  function deriveBundles(strategies) {
    const ids = new Set();
    strategies.forEach(s => (s.inputs || []).forEach(i => { if (i.bundle && i.bundle !== 'default') ids.add(i.bundle); }));
    return [...ids].map(id => ({ id, name: id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, ' ') }));
  }

  // Single Strategy
  const rawSingle = (getAppData('collections') || {})[key] || [];
  const singleStrats = rawSingle.map(s => ({ name: s.name || '', description: s.description || '', inputs: mapInputs(s.inputs) }));
  pack.single = { strategies: singleStrats, bundles: deriveBundles(singleStrats) };

  // Collections (same source as single for now)
  pack.collections = { strategies: singleStrats.map(s => ({...s, inputs: [...s.inputs]})), bundles: [] };

  // Challenges
  const rawChall = (getAppData('challengesCollections') || {})[key] || [];
  const challStrats = rawChall.map(s => ({ name: s.name || '', description: s.description || '', inputs: mapInputs(s.inputs) }));
  pack.challenges = { strategies: challStrats, bundles: deriveBundles(challStrats) };

  // Mindset
  const rawMind = (getAppData('mindsetCollections') || {})[key] || [];
  const mindStrats = rawMind.map(s => ({ name: s.name || '', description: s.description || '', inputs: mapInputs(s.inputs) }));
  pack.mindset = { strategies: mindStrats, bundles: deriveBundles(mindStrats) };

  // Memorize
  const rawMem = (getAppData('memorizeCollections') || {})[key] || [];
  pack.memorize = {
    strategies: rawMem.map(s => ({ name: s.name || '', description: s.description || '', cards: mapCards(s.cards) })),
    bundles: [],
  };

  // Sequences
  const rawSeq = (getAppData('multiStepCollections') || {})[key] || [];
  pack.sequences = {
    strategies: rawSeq.map(s => ({ name: s.name || '', description: s.description || '', steps: mapInputs(s.steps || s.inputs) })),
    bundles: [],
  };

  return pack;
}

// ── EDITOR STORAGE ────────────────────────────────────────────────────────────

function getAllEditorPacks() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { return {}; }
}

function saveEditorPack(pack) {
  const all = getAllEditorPacks();
  all[pack.key] = pack;
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(all)); } catch { return false; }
  return true;
}

function deleteEditorPack(key) {
  const all = getAllEditorPacks();
  delete all[key];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

function setActivePack(key) { localStorage.setItem(ACTIVE_KEY, key); }
function getActivePack()    { return localStorage.getItem(ACTIVE_KEY) || null; }

function saveVersion(pack, versionName) {
  const snapshot      = JSON.parse(JSON.stringify(pack));
  snapshot.versionName = versionName;
  snapshot.savedAt     = Date.now();
  pack.versions        = pack.versions || [];
  pack.versions.push(snapshot);
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
