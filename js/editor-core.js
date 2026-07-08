// editor-core.js — Deckstack Pack Editor
// Handles data structures, localStorage persistence, and JSON export

const EDITOR_VERSION = 'v1.0.0';
const STORAGE_KEY    = 'ds_editor_packs';   // all editor drafts
const ACTIVE_KEY     = 'ds_editor_active';  // key of currently open pack

// ── MODE DEFINITIONS ──────────────────────────────────────────────────────────

const MODES = [
  { id: 'single',      label: 'Single Strategy',  dataKey: 'collections'          },
  { id: 'collections', label: 'Collections',       dataKey: 'collectionsData'      },
  { id: 'memorize',    label: 'Memorize',          dataKey: 'memorizeCollections'  },
  { id: 'sequences',   label: 'Sequences',         dataKey: 'multiStepCollections' },
  { id: 'challenges',  label: 'Challenges',        dataKey: 'challengesCollections'},
  { id: 'mindset',     label: 'Mindset',           dataKey: 'mindsetCollections'   },
];

// ── DEFAULT STRUCTURES ────────────────────────────────────────────────────────

function emptyInput()    { return { q: '', a: '', bundle: 'default' }; }
function emptyCard()     { return { q: '', a: '' }; }
function emptyStrategy(modeId) {
  const base = { name: '', description: '', inputs: [emptyInput()] };
  if (modeId === 'memorize')    return { name: '', description: '', cards: [emptyCard()] };
  if (modeId === 'sequences')   return { name: '', description: '', steps: [emptyInput()] };
  if (modeId === 'collections') return { name: '', description: '', inputs: [emptyInput()] };
  return base;
}

function emptyBundle(name) {
  return { id: slugify(name), name, inputs: [emptyInput()] };
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

// ── LOAD APP PACKS (read-only source) ────────────────────────────────────────
// Reads from the global data objects loaded by the app's own data files.
// Returns an array of pack descriptors with live data references.

function loadAppPacks() {
  const packs = [];
  const keys  = Object.keys(window.collections || {});
  keys.forEach(key => {
    packs.push({
      key,
      name:   key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1'),
      source: 'app',
    });
  });
  return packs;
}

// Build a full editor pack from live app data for a given key
function packFromAppData(key) {
  const name = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
  const pack = { key, name, isNew: false, source: 'app', createdAt: Date.now(), versions: [] };

  // Single Strategy
  const raw = (window.collections || {})[key] || [];
  pack.single = {
    strategies: raw.map(s => ({
      name:        s.name        || '',
      description: s.description || '',
      inputs:      (s.inputs || []).map(i => ({ q: i.q || '', a: i.a || '', bundle: i.bundle || 'default' })),
    })),
    bundles: [],
  };
  // Derive extra bundles from input bundle tags
  const bundleIds = new Set();
  pack.single.strategies.forEach(s => s.inputs.forEach(i => { if (i.bundle && i.bundle !== 'default') bundleIds.add(i.bundle); }));
  bundleIds.forEach(id => { pack.single.bundles.push({ id, name: id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g,' '), inputs: [] }); });

  // Challenges
  const chall = (window.challengesCollections || {})[key] || [];
  pack.challenges = {
    strategies: chall.map(c => ({
      name:        c.name        || '',
      description: c.description || '',
      inputs:      (c.inputs || []).map(i => ({ q: i.q || '', a: i.a || '', bundle: i.bundle || 'default' })),
    })),
    bundles: [],
  };

  // Mindset
  const mind = (window.mindsetCollections || {})[key] || [];
  pack.mindset = {
    strategies: mind.map(m => ({
      name:        m.name        || '',
      description: m.description || '',
      inputs:      (m.inputs || []).map(i => ({ q: i.q || '', a: i.a || '', bundle: i.bundle || 'default' })),
    })),
    bundles: [],
  };

  // Memorize
  const mem = (window.memorizeCollections || {})[key] || [];
  pack.memorize = {
    strategies: mem.map(s => ({
      name:        s.name        || '',
      description: s.description || '',
      cards:       (s.cards || []).map(c => ({ q: c.q || '', a: c.a || '' })),
    })),
    bundles: [],
  };

  // Sequences
  const seq = (window.multiStepCollections || {})[key] || [];
  pack.sequences = {
    strategies: seq.map(s => ({
      name:        s.name        || '',
      description: s.description || '',
      steps:       (s.steps || s.inputs || []).map(i => ({ q: i.q || '', a: i.a || '' })),
    })),
    bundles: [],
  };

  // Collections (conversational)
  const coll = (window.collections || {})[key] || [];
  pack.collections = {
    strategies: coll.map(s => ({
      name:        s.name        || '',
      description: s.description || '',
      inputs:      (s.inputs || []).map(i => ({ q: i.q || '', a: i.a || '', bundle: i.bundle || 'default' })),
    })),
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
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

function deleteEditorPack(key) {
  const all = getAllEditorPacks();
  delete all[key];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

function setActivePack(key) { localStorage.setItem(ACTIVE_KEY, key); }
function getActivePack()    { return localStorage.getItem(ACTIVE_KEY) || null; }

// Save a named version snapshot
function saveVersion(pack, versionName) {
  const snapshot = JSON.parse(JSON.stringify(pack));
  snapshot.versionName = versionName;
  snapshot.savedAt     = Date.now();
  pack.versions = pack.versions || [];
  pack.versions.push(snapshot);
  saveEditorPack(pack);
}

// ── EXPORT ────────────────────────────────────────────────────────────────────

function exportPack(pack) {
  const out = {
    meta: {
      key:       pack.key,
      name:      pack.name,
      exportedAt: new Date().toISOString(),
      editorVersion: EDITOR_VERSION,
    },
    data: {},
  };
  MODES.forEach(m => { if (pack[m.id]) out.data[m.id] = pack[m.id]; });
  return JSON.stringify(out, null, 2);
}

function downloadExport(pack) {
  const json = exportPack(pack);
  const blob = new Blob([json], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `deckstack-pack-${pack.key}-${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}
