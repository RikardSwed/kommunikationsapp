// editor-core.js — Deckstack Pack Editor
// Depends on: data.js, challengesData.js, mindsetData.js, multiStepData.js, memorizeData.js

const EDITOR_VERSION = 'v1.7.1';
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

const PACK_DISPLAY_NAMES = {
  assertive:          'Assertive Communication',
  conversational:     'Conversational Skills',
  humour:             'Humour Practise',
  criticism:          'Criticism & Correction',
  teasing:            'Teasing & Playfulness',
  conversationaldepth:'Conversational Depth',
  compliments:        'Compliments & Appreciation',
  selfhumour:         'Self Humour & Playfulness',
  startingconnecting: 'Starting & Connecting',
  listeningresponding:'Listening & Responding',
  influenceframing:   'Influence & Framing',
  storytelling:       'Storytelling',
};

function packDisplayName(key) {
  return PACK_DISPLAY_NAMES[key] || key.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase()).trim();
}

function packFromAppData(key) {
  const pack = { key, name: packDisplayName(key), isNew: false, source: 'app', createdAt: Date.now(), versions: [] };

  function mapInputs(arr) {
    return (arr||[]).map(i => ({ q: i.q||'', a: i.a||'', bundle: i.bundle || 'free' }));
  }
  function mapCards(arr) {
    return (arr||[]).map(c => ({ q: c.q||'', a: c.a||'', bundle: c.bundle || 'free' }));
  }
  function deriveBundles(strategies) {
    const ids = new Set();
    strategies.forEach(s => (s.inputs || s.cards || s.steps || []).forEach(i => {
      if (i.bundle) ids.add(i.bundle);
    }));
    // Remove 'default' — not a real bundle tier
    ids.delete('default');
    // TIER_MAP: fallback when pack not in window.BUNDLE_DEFS
    const TIER_MAP = { free: 'free', pro: 'pro', workplace: 'pro-opt', domestic: 'extended' };
    // Use window.BUNDLE_DEFS as single source of truth if available
    const appDefs = (window.BUNDLE_DEFS && window.BUNDLE_DEFS[key]) || [];
    return [...ids].map(id => {
      const appDef = appDefs.find(d => d.id === id);
      return {
        id,
        name: appDef ? appDef.name
          : (id === 'free' ? 'Free Bundle' : id === 'pro' ? 'Pro Bundle'
            : id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g,' ')),
        tier: appDef ? appDef.tier : (TIER_MAP[id] || 'pro-opt'),
      };
    });
  }

  const mapGuides = s => ({ guideFront: s.guideFront || '', guideBack: s.guideBack || '' });
  const rawSingle = (getDS('_dsCollections'))[key] || [];
  const singleStrats = rawSingle.map(s => ({ name: s.name||'', description: s.description||'', ...mapGuides(s), inputs: mapInputs(s.inputs) }));
  pack.single      = { strategies: singleStrats, bundles: deriveBundles(singleStrats) };
  // v1.7.1: Collections has its own data source in the app (strategy combos)
  const rawCollMode = (getDS('_dsCollectionsMode'))[key] || [];
  const collModeStrats = rawCollMode.map(s => ({ name: s.name||'', description: s.description||'', ...mapGuides(s), inputs: mapInputs(s.inputs) }));
  pack.collections = { strategies: collModeStrats, bundles: deriveBundles(collModeStrats) };

  const rawChall = (getDS('_dsChallenges'))[key] || [];
  const challStrats = rawChall.map(s => ({ name: s.name||'', description: s.description||'', ...mapGuides(s), inputs: mapInputs(s.inputs) }));
  pack.challenges = { strategies: challStrats, bundles: deriveBundles(challStrats) };

  const rawMind = (getDS('_dsMindset'))[key] || [];
  const mindStrats = rawMind.map(s => ({ name: s.name||'', description: s.description||'', ...mapGuides(s), inputs: mapInputs(s.inputs) }));
  pack.mindset = { strategies: mindStrats, bundles: deriveBundles(mindStrats) };

  const rawMem = (getDS('_dsMemorize'))[key] || [];
  pack.memorize = {
    strategies: rawMem.map(s => ({ name: s.name||'', description: s.description||'', ...mapGuides(s), cards: mapCards(s.cards) })),
    bundles: deriveBundles(rawMem.map(s => ({ cards: s.cards||[] }))),
  };

  const rawSeq = (getDS('_dsMultiStep'))[key] || [];
  pack.sequences = {
    strategies: rawSeq.map(s => ({
      name: s.name || '',
      description: s.subtitle || s.description || '',
      guideFront: s.guideFront || '', guideBack: s.guideBack || '',
      inputs: (s.inputs || []).map(inp => ({
        bundle: inp.bundle || 'free',
        situation: inp.situation || '',
        steps: (inp.steps || []).map(st => ({ front: st.front || '', back: st.back || '' })),
      })),
    })),
    bundles: deriveBundles(rawSeq.map(s => ({ inputs: s.inputs || [] }))),
  };

  // Load tags from tagsData.js if available
  if (typeof packTags !== 'undefined' && packTags[key]) {
    pack.tags = [...packTags[key]];
  }

  return pack;
}

// ── DEFAULT STRUCTURES ────────────────────────────────────────────────────────

function emptyScenario(bundle) { return { bundle: bundle || 'free', situation: '', steps: [{ front: '', back: '' }, { front: '', back: '' }, { front: '', back: '' }] }; }
function emptyInput()  { return { q: '', a: '', bundle: 'default' }; }
function emptyCard()   { return { q: '', a: '' }; }
function emptyStep()   { return { front: '', back: '' }; }
function emptyStrategy(modeId) {
  if (modeId === 'memorize')  return { name: '', description: '', guideFront: '', guideBack: '', cards:  [emptyCard()]  };
  if (modeId === 'sequences') return { name: '', description: '', guideFront: '', guideBack: '', inputs: [emptyScenario('free')] };
  return                             { name: '', description: '', guideFront: '', guideBack: '', inputs: [emptyInput()] };
}
function emptyModeData(modeId) { return { strategies: [emptyStrategy(modeId)], bundles: [], guideFront: '', guideBack: '' }; }
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

// ── PROGRAM STORAGE ───────────────────────────────────────────────────────────

const PROGRAM_KEY = 'ds_editor_programs';

function getAllEditorPrograms() {
  try { return JSON.parse(localStorage.getItem(PROGRAM_KEY) || '{}'); } catch { return {}; }
}
function saveEditorProgram(program) {
  const all = getAllEditorPrograms();
  all[program.id] = program;
  try { localStorage.setItem(PROGRAM_KEY, JSON.stringify(all)); return true; } catch { return false; }
}
function deleteEditorProgram(id) {
  const all = getAllEditorPrograms(); delete all[id];
  localStorage.setItem(PROGRAM_KEY, JSON.stringify(all));
}

function loadAppPrograms() {
  const src = window._dsPrograms || [];
  return src.map(p => ({ id: p.id, title: p.title, icon: p.icon || 'ti-stack', source: 'app', sections: p.sections || [] }));
}

function exportProgram(program) {
  const out = {
    meta: { id: program.id, title: program.title, exportedAt: new Date().toISOString(), editorVersion: EDITOR_VERSION },
    data: program,
  };
  const blob = new Blob([JSON.stringify(out, null, 2)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = `deckstack-program-${program.id}-${Date.now()}.json`;
  a.click(); URL.revokeObjectURL(url);
}

// ── EXPORT ────────────────────────────────────────────────────────────────────

function exportPack(pack) {
  const out = {
    meta: { key: pack.key, name: pack.name, exportedAt: new Date().toISOString(), editorVersion: EDITOR_VERSION },
    data: {},
  };
  MODES.forEach(m => { if (pack[m.id]) out.data[m.id] = resolveGuides(pack[m.id]); });
  return JSON.stringify(out, null, 2);
}
// Materialise the effective guide text onto every strategy: the strategy's
// own value wins (exception), otherwise the mode-level default applies.
// The app only reads strategy-level guideFront/guideBack, so exports always
// carry the resolved values.
function resolveGuides(modeData) {
  const gf = (modeData.guideFront || '').trim();
  const gb = (modeData.guideBack  || '').trim();
  return {
    ...modeData,
    strategies: (modeData.strategies || []).map(s => {
      const eff = { ...s };
      const f = (s.guideFront || '').trim() || gf;
      const b = (s.guideBack  || '').trim() || gb;
      if (f) eff.guideFront = f; else delete eff.guideFront;
      if (b) eff.guideBack  = b; else delete eff.guideBack;
      return eff;
    }),
  };
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
// Supports three modes:
//
// 1. Single pack:
//    PACK: Pack Name
//    MODE: single
//    ## Strategy: ...
//    BUNDLE: free
//    - Situation: X | Response: Y
//    BUNDLE: pro
//    - Situation: X | Response: Y
//
// 2. Multiple packs (no PROGRAM line) — returns array of packs:
//    PACK: Pack A
//    ...
//    PACK: Pack B
//    ...
//
// 3. Program with embedded packs:
//    PROGRAM: Title
//    DESCRIPTION: ...
//    ICON: ti-book
//    SECTION: Chapter 1
//    PACK: Pack Name
//    ...
//    CHECKPOINT: Chapter 1 Test
//    TIME: 90
//    DRAW: 10
//    - Q: Question? | Correct: B | A: Opt A | B: Opt B | C: Opt C | D: Opt D
//
// Returns: single pack object, array of pack objects, or {type:'program', program, packs[]}

function importFromText(text) {
  const lines = text.split('\n');

  // Detect mode
  const hasProgram = lines.some(l => /^PROGRAM:/i.test(l.trim()));
  const packStarts = lines.reduce((a, l, i) => { if (/^PACK:/i.test(l.trim())) a.push(i); return a; }, []);

  if (hasProgram) return _parseProgram(lines);
  if (packStarts.length > 1) return _parseMultiplePacks(lines, packStarts);
  return _parseSinglePack(lines);
}

// ── SHARED: parse a block of lines into a pack object ────────────────────────

function _parsePack(lines) {
  let packName = 'Imported pack';
  let packTagsArr = [];
  let currentModeId = 'single';
  let currentBundle = 'default';
  let isBundleImport = false;
  let bundleImportTarget = null;
  const modeBuffers = {};
  MODES.forEach(m => { modeBuffers[m.id] = []; });

  let currentStrat    = null;
  let currentScenario = null; // sequences only
  let inExplanation   = false;
  let explanationLines = [];
  const modeGuides = {};   // per-mode guide defaults, applied to pack[mode] at the end

  function pushScenario() {
    if (currentScenario && currentStrat && currentModeId === 'sequences') {
      currentStrat.inputs.push(currentScenario);
    }
    currentScenario = null;
  }

  function pushStrat() {
    pushScenario();
    if (!currentStrat) return;
    if (inExplanation) { currentStrat.description = explanationLines.join('\n').trim(); inExplanation = false; explanationLines = []; }
    modeBuffers[currentModeId].push(currentStrat);
    currentStrat = null;
  }

  function newStrat(name) {
    pushStrat();
    currentBundle = 'default';
    const isMem = currentModeId === 'memorize';
    const isSeq = currentModeId === 'sequences';
    currentStrat = { name, description: '', ...(isMem ? { cards: [] } : isSeq ? { inputs: [] } : { inputs: [] }) };
  }

  function newScenario() {
    pushScenario();
    currentScenario = { bundle: currentBundle === 'default' ? 'free' : currentBundle, situation: '', steps: [] };
  }

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) { if (inExplanation) { inExplanation = false; currentStrat && (currentStrat.description = explanationLines.join('\n').trim()); } continue; }

    if (/^BUNDLE IMPORT:/i.test(line)) { isBundleImport = true; bundleImportTarget = line.replace(/^BUNDLE IMPORT:/i,'').trim().toLowerCase(); continue; }
    if (/^PACK:/i.test(line)) { packName = line.replace(/^PACK:/i,'').trim(); continue; }
    if (/^TAGS:/i.test(line)) { packTagsArr = line.replace(/^TAGS:/i,'').split(',').map(t => t.trim().toLowerCase()).filter(Boolean); continue; }

    if (/^MODE:/i.test(line)) {
      pushStrat();
      const mId = line.replace(/^MODE:/i,'').trim().toLowerCase();
      const found = MODES.find(m => m.id === mId || m.label.toLowerCase() === mId);
      if (found) currentModeId = found.id;
      currentBundle = 'default';
      continue;
    }

    if (/^BUNDLE:/i.test(line)) {
      const bName = line.replace(/^BUNDLE:/i,'').trim();
      currentBundle = bName.toLowerCase() === 'default' ? 'default' : slugify(bName) || bName.toLowerCase();
      if (currentScenario && currentModeId === 'sequences') currentScenario.bundle = currentBundle;
      continue;
    }

    // GUIDE FRONT/BACK: — mode-level default (applies to every strategy in the mode)
    const modeGuideMatch = line.match(/^GUIDE\s+(FRONT|BACK):\s*(.*)$/i);
    if (modeGuideMatch) {
      const side = modeGuideMatch[1].toLowerCase() === 'front' ? 'guideFront' : 'guideBack';
      modeGuides[currentModeId] = modeGuides[currentModeId] || {};
      modeGuides[currentModeId][side] = modeGuideMatch[2].trim();
      continue;
    }

    const stratMatch = line.match(/^##\s+(?:Strategy|Category|Combo|Collection|Mindset):\s*(.+)/i);
    if (stratMatch) { newStrat(stratMatch[1].trim()); continue; }

    // - Guide Front/Back: — per-strategy exception, overrides the mode default
    const stratGuideMatch = line.match(/^-\s+Guide\s+(Front|Back):\s*(.*)$/i);
    if (stratGuideMatch && currentStrat) {
      const side = stratGuideMatch[1].toLowerCase() === 'front' ? 'guideFront' : 'guideBack';
      currentStrat[side] = stratGuideMatch[2].trim();
      continue;
    }

    // ### Scenario: — starts a new scenario within a sequences combo
    if (/^###\s+Scenario:/i.test(line) && currentModeId === 'sequences') {
      newScenario(); continue;
    }

    // - Situation: text — sets situation for current scenario (sequences)
    if (/^-\s+Situation:\s*/i.test(line) && currentModeId === 'sequences' && currentStrat) {
      if (!currentScenario) newScenario();
      currentScenario.situation = line.replace(/^-\s+Situation:\s*/i,'').trim();
      continue;
    }

    // - Step: Front | Back — adds a step to current scenario (sequences)
    if (/^-\s+Step:\s*/i.test(line) && currentModeId === 'sequences' && currentStrat) {
      if (!currentScenario) newScenario();
      const rest  = line.replace(/^-\s+Step:\s*/i,'');
      const parts = rest.split(/\s*\|\s*/);
      currentScenario.steps.push({ front: parts[0]?.trim() || '', back: parts[1]?.trim() || '' });
      continue;
    }

    if (/^\*\*Explanation:\*\*/i.test(line)) {
      if (currentStrat) { inExplanation = true; explanationLines = [line.replace(/^\*\*Explanation:\*\*\s*/i,'')]; }
      continue;
    }

    if (inExplanation && currentStrat && !line.startsWith('-')) { explanationLines.push(line); continue; }

    // Standard card (non-sequences modes)
    const cardMatch = line.match(/^-\s+(?:Situation|Front|Prompt|Q):\s*(.+?)\s*\|\s*(?:Response|Back|A):\s*(.+)/i);
    if (cardMatch && currentStrat && currentModeId !== 'sequences') {
      const q = cardMatch[1].trim(), a = cardMatch[2].trim();
      if (currentModeId === 'memorize') currentStrat.cards.push({ q, a, bundle: currentBundle });
      else                              currentStrat.inputs.push({ q, a, bundle: currentBundle });
    }
  }
  pushStrat();

  const pack = emptyPack(packName);
  pack._isBundleImport  = isBundleImport;
  pack._bundleImportTarget = bundleImportTarget;

  MODES.forEach(m => {
    if (modeBuffers[m.id].length) {
      const bundleIds = new Set();
      modeBuffers[m.id].forEach(s => {
        (s.inputs || s.cards || []).forEach(i => {
          const b = i.bundle;
          if (b && b !== 'default') bundleIds.add(b);
        });
      });
      pack[m.id] = {
        strategies: modeBuffers[m.id],
        ...(modeGuides[m.id] || {}),
        bundles: [...bundleIds].map(id => ({
          id,
          name: id === 'free' ? 'Free Bundle' : id === 'pro' ? 'Pro Bundle' : id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g,' '),
          tier: id === 'free' ? 'free' : id === 'pro' ? 'pro' : 'pro-opt',
        })),
      };
    }
  });
  if (packTagsArr.length) pack.tags = packTagsArr;
  return pack;
}


function _parseSinglePack(lines) {
  return _parsePack(lines);
}

// ── PARSE: multiple packs ─────────────────────────────────────────────────────

function _parseMultiplePacks(lines, starts) {
  return starts.map((start, i) => {
    const end = starts[i + 1] || lines.length;
    return _parsePack(lines.slice(start, end));
  });
}

// ── PARSE: program ────────────────────────────────────────────────────────────

function _parseCheckpointQuestion(line) {
  // - Q: Question text? | Correct: B | A: Option A | B: Option B | C: Option C | D: Option D
  const qMatch = line.match(/^-\s+Q:\s*(.+?)\s*\|/i);
  if (!qMatch) return null;
  const q = qMatch[1].trim();
  const correctMatch = line.match(/\|\s*Correct:\s*([A-D])/i);
  const correct = correctMatch ? 'ABCD'.indexOf(correctMatch[1].toUpperCase()) : 0;
  const opts = [];
  ['A','B','C','D'].forEach(letter => {
    const m = line.match(new RegExp('\\|\\s*' + letter + ':\\s*([^|]+)', 'i'));
    opts.push(m ? m[1].trim() : '');
  });
  return { id: 'q_' + Math.random().toString(36).slice(2,8), q, options: opts, correct };
}

function _parseProgram(lines) {
  let programTitle = 'Imported Program';
  let programDesc  = '';
  let programIcon  = 'ti-stack';
  let programTags  = [];
  const sections   = [];
  const packs      = [];

  let currentSection    = null;
  let currentCheckpoint = null;
  let inPackLines       = [];
  let inPack            = false;

  function flushPack() {
    if (!inPack || !inPackLines.length) return;
    const pack = _parsePack(inPackLines);
    packs.push(pack);
    if (currentSection) currentSection.packKey = pack.key;
    inPackLines = [];
    inPack = false;
  }

  function flushSection() {
    flushPack();
    if (currentSection) {
      if (currentCheckpoint) { currentSection.checkpoint = currentCheckpoint; currentCheckpoint = null; }
      sections.push(currentSection);
    }
    currentSection = null;
  }

  for (const raw of lines) {
    const line = raw.trim();

    if (/^PROGRAM:/i.test(line)) { programTitle = line.replace(/^PROGRAM:/i,'').trim(); inPack = false; continue; }
    if (/^DESCRIPTION:/i.test(line)) { programDesc = line.replace(/^DESCRIPTION:/i,'').trim(); continue; }
    if (/^ICON:/i.test(line)) { programIcon = line.replace(/^ICON:/i,'').trim(); continue; }
    if (/^TAGS:/i.test(line) && !inPack) { programTags = line.replace(/^TAGS:/i,'').split(',').map(t => t.trim().toLowerCase()).filter(Boolean); continue; }

    if (/^SECTION:/i.test(line)) {
      flushSection();
      currentSection = { id: 'section-' + (sections.length + 1), title: line.replace(/^SECTION:/i,'').trim(), packKey: null, checkpoint: null };
      continue;
    }

    if (/^PACK:/i.test(line)) {
      flushPack();
      inPack = true;
      inPackLines = [raw];
      continue;
    }

    if (inPack && !/^SECTION:/i.test(line) && !/^CHECKPOINT:/i.test(line)) {
      inPackLines.push(raw);
      continue;
    }

    if (/^CHECKPOINT:/i.test(line)) {
      flushPack();
      currentCheckpoint = {
        id: 'cp_' + slugify(line.replace(/^CHECKPOINT:/i,'').trim()).slice(0,12) + '_' + Date.now().toString(36).slice(-4),
        title: line.replace(/^CHECKPOINT:/i,'').trim(),
        timeLimit: 90,
        drawCount: 20,
        questions: [],
      };
      continue;
    }

    if (/^TIME:/i.test(line) && currentCheckpoint) { currentCheckpoint.timeLimit = parseInt(line.replace(/^TIME:/i,'').trim()) || 90; continue; }
    if (/^DRAW:/i.test(line) && currentCheckpoint) { currentCheckpoint.drawCount = parseInt(line.replace(/^DRAW:/i,'').trim()) || 20; continue; }

    if (currentCheckpoint && /^-\s+Q:/i.test(line)) {
      const q = _parseCheckpointQuestion(line);
      if (q) currentCheckpoint.questions.push(q);
      continue;
    }
  }
  flushSection();

  const program = {
    id: slugify(programTitle) + '_' + Date.now().toString(36).slice(-4),
    title: programTitle,
    description: programDesc,
    icon: programIcon,
    ...(programTags.length ? { tags: programTags } : {}),
    sections: sections.map((s, i) => ({
      id: s.id,
      title: s.title,
      packs: s.packKey ? [{ key: s.packKey, label: packs.find(p => p.key === s.packKey)?.name || s.packKey }] : [],
      ...(s.checkpoint ? { checkpoint: s.checkpoint } : {}),
    })),
  };

  return { type: 'program', program, packs };
}

