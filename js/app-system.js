// app-system.js — feedback mode settings, access levels, input bundles, progress bar
// Part of Deckstack v1.25.0

// ── FEEDBACK MODE ─────────────────────────────────────────────────────────────

let feedbackMode = localStorage.getItem('feedbackMode') === 'true';

const homeSettingsBtn     = document.getElementById('homeSettingsBtn');
const homeSettingsScreen  = document.getElementById('homeSettingsScreen');
const feedbackModeToggle  = document.getElementById('feedbackModeToggle');
const feedbackExportBtn   = document.getElementById('feedbackExportBtn');

function applyFeedbackMode() {
  document.body.classList.toggle('feedback-mode', feedbackMode);
  // v1.27.02 — null-guarded because tools/build-release.js deletes #devSection
  // from the public build, and an unguarded throw here would stop the rest of
  // this file from ever running.
  if (feedbackModeToggle) feedbackModeToggle.checked = feedbackMode;
}

// Open/close home settings screen (slides in/out from the right, like modeScreen)
function navToSettings() {
  homeSettingsScreen.style.display = 'flex';
  homeSettingsScreen.classList.remove('slide-in-right', 'slide-out-right');
  void homeSettingsScreen.offsetWidth;
  homeSettingsScreen.classList.add('slide-in-right');
  hideBottomNav();
}

function navFromSettings() {
  homeSettingsScreen.classList.remove('slide-in-right', 'slide-out-right');
  void homeSettingsScreen.offsetWidth;
  homeSettingsScreen.classList.add('slide-out-right');
  setTimeout(() => {
    homeSettingsScreen.style.display = 'none';
    homeSettingsScreen.classList.remove('slide-out-right');
  }, 320);
  showBottomNav();
}

// v1.26.75 — the settings button has ONE owner, and it is app-ui.js.
// It used to be bound here as well, so during a search BOTH handlers fired:
// app-ui's exited the search and this one opened settings on top of it.
// app-ui's version does exactly what this did when no search is running, and
// checks the search state first — see the `cancelBtn` block there. Do not
// re-add a listener here.

// ─── PACK CARD META (v1.26.77) ───────────────────────────────────
// Every library card said "N strategies · Flashcard mode". That is both
// uninformative and slightly untrue: every pack has all six modes, Flashcard
// is just the one a free user sees. The topic is the single word that
// actually says what the pack is about, so it goes there instead.
// Done at startup rather than in the markup because import-pack.js writes the
// old wording into every card it creates — fixing the HTML would last exactly
// until the next import.
function relabelPackCards() {
  if (typeof collections === 'undefined') return;
  const topicOf = {};
  (typeof TOPICS !== 'undefined' ? TOPICS : []).forEach(t => {
    (t.packs || []).forEach(k => { if (!topicOf[k]) topicOf[k] = t.title; });
  });
  document.querySelectorAll('#libTabPacks .collection-card').forEach(card => {
    const key  = card.dataset.key;
    const meta = card.querySelector('.collection-meta');
    if (!key || !meta) return;
    const n    = (collections[key] || []).length;
    const bits = [];
    if (n) bits.push(n + (n === 1 ? ' strategy' : ' strategies'));
    if (topicOf[key]) bits.push(topicOf[key]);
    if (bits.length) meta.innerHTML = bits.join(' &nbsp;\u00b7&nbsp; ');
  });
}
relabelPackCards();

const homeSettingsBackBtn = document.getElementById('homeSettingsBackBtn');
if (homeSettingsBackBtn) {
  homeSettingsBackBtn.addEventListener('click', navFromSettings);
  homeSettingsBackBtn.addEventListener('touchend', e => { e.preventDefault(); navFromSettings(); }, { passive: false });
}
const devSettingsDoneBtn = document.getElementById('devSettingsDoneBtn');
if (devSettingsDoneBtn) {
  devSettingsDoneBtn.addEventListener('click', navFromSettings);
  devSettingsDoneBtn.addEventListener('touchend', e => { e.preventDefault(); navFromSettings(); }, { passive: false });
}

// Feedback toggle (guarded — see applyFeedbackMode above)
if (feedbackModeToggle) feedbackModeToggle.addEventListener('change', () => {
  feedbackMode = feedbackModeToggle.checked;
  localStorage.setItem('feedbackMode', feedbackMode);
  if (feedbackMode && alSuggestMode) {
    alSuggestMode = false;
    localStorage.setItem('alSuggestMode', 'false');
    if (alSuggestToggle) alSuggestToggle.checked = false;
    document.body.classList.remove('al-suggest-mode');
  }
  applyFeedbackMode();
  if (window.updateModeGearVisibility) window.updateModeGearVisibility();
});

// ─── FEEDBACK & NOTES EXPORT (v1.27.03) ──────────────────────────────────────
//
// Ratings live under fb_… and notes under note_…, and the two key formats are
// identical apart from the prefix (see fbKey / noteKey in app-core.js). That
// is the whole design: strip the prefix and the rest of the key IS the card's
// identity, so a rating and a note for the same card side collapse onto one
// row without any matching logic.
//
// The raw key is not enough on its own, though. It carries indices, and
// indices move when a pack is re-imported with its strategies in a different
// order. So every exported entry also carries the RESOLVED strategy name and
// the card's own text: if the indices ever drift, the file still says exactly
// which card was meant.

// key -> { pack, mode, group, item, side }  (null if it is not one of ours)
function _fbParseKey(key) {
  const body = key.replace(/^(fb_|note_)/, '');
  const parts = body.split('_');
  if (parts.length < 5) return null;
  // side and item are the last two; mode and group are in between; the pack
  // key is everything before them. Pack keys never contain '_', but group
  // keys can be strategy NAMES, which do — so parse from the right.
  const side = parts[parts.length - 1];
  const item = parts[parts.length - 2];
  const pack = parts[0];
  const mode = parts[1];
  const group = parts.slice(2, parts.length - 2).join('_');
  return { pack, mode, group, item, side };
}

// Resolve a parsed key to the strategy name and the card's own text.
// Returns {} when the pack or card is gone — an export must never throw on a
// note left behind by a deleted pack.
const _MODE_SOURCES = {
  single:      () => (typeof collections           !== 'undefined' ? collections           : null),
  mem:         () => (typeof memorizeCollections   !== 'undefined' ? memorizeCollections   : null),
  flow:        () => (typeof multiStepCollections  !== 'undefined' ? multiStepCollections  : null),
  challScreen: () => (typeof challengesCollections !== 'undefined' ? challengesCollections : null),
  mindScreen:  () => (typeof mindsetCollections    !== 'undefined' ? mindsetCollections    : null),
  collScreen:  () => (typeof collectionsModeData   !== 'undefined' ? collectionsModeData   : null),
};
const _MODE_LABELS = {
  single: 'Single Strategy', mem: 'Memorize', flow: 'Sequences',
  challScreen: 'Challenges', mindScreen: 'Mindset', collScreen: 'Collections',
};

// The indices in a key are positions in the BUNDLE-FILTERED list the user was
// actually looking at, not in the raw data — DS.loadGroups drops groups with
// no visible items and filters the items inside the rest. Resolving against
// the raw data would name the wrong card for anyone below Pro. This mirrors
// loadGroups exactly, so the export is correct for the level the export is
// run at, which is the level the keys were written at.
function _fbFilteredGroups(src, packKey, itemsProp) {
  const raw = (src && src[packKey]) || [];
  if (!raw.length || !window.filterInputsByBundle) return raw;
  const filtered = raw
    .map(g => Object.assign({}, g, {
      [itemsProp]: window.filterInputsByBundle(g[itemsProp] || [], packKey)
    }))
    .filter(g => g[itemsProp].length);
  return filtered.length ? filtered : raw;
}

function _fbResolve(p) {
  const out = { modeLabel: _MODE_LABELS[p.mode] || p.mode };
  const src = (_MODE_SOURCES[p.mode] || (() => null))();
  const itemsProp = (p.mode === 'mem') ? 'cards' : 'inputs';
  // Sequences are the exception: multiStepCollections is read unfiltered by
  // the mode, and its scenarios are filtered later inside buildFlowSequence.
  const groups = (p.mode === 'flow')
    ? ((src && src[p.pack]) || [])
    : _fbFilteredGroups(src, p.pack, itemsProp);
  if (!groups.length) return out;
  // group is either an index (single, mem, flow) or a strategy name
  const g = /^\d+$/.test(p.group) ? groups[parseInt(p.group, 10)]
                                  : groups.find(x => x && x.name === p.group);
  if (!g) return out;
  out.strategy = g.name;
  const list = g.inputs || g.cards || [];
  const it = list[parseInt(p.item, 10)];
  if (!it) return out;
  if (p.mode === 'flow') {
    // a sequences item is a scenario, not a single card
    out.card = it.situation || '';
  } else {
    out.card = (p.side === 'back') ? (it.a || '') : (it.q || '');
  }
  return out;
}

// Every rating and note in storage, merged onto one row per card side.
function collectFeedbackAndNotes() {
  const rows = {};
  // v1.27.18 — pack-wide and programme-wide entries, gathered first so they
  // sort to the top of their pack. They are NOT cards: they have no mode, no
  // strategy and no side, and the shape below says so with nulls rather than
  // with invented values, so a reader can never mistake one for a card.
  const scope = {};
  const scopeRow = (bucket, id) => {
    const k = bucket + '|' + id;
    if (!scope[k]) scope[k] = {
      scope: bucket, pack: bucket === 'pack' ? id : null, program: bucket === 'program' ? id : null,
      mode: null, strategy: null, cardIndex: null, side: null, card: null,
      rating: null, note: null,
    };
    return scope[k];
  };
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.indexOf('fb_pack_')   === 0) scopeRow('pack',    key.slice(8)).rating  = parseInt(localStorage.getItem(key), 10);
    else if (key.indexOf('note_pack_') === 0) scopeRow('pack',    key.slice(10)).note = localStorage.getItem(key);
    else if (key.indexOf('fb_prog_')   === 0) scopeRow('program', key.slice(8)).rating  = parseInt(localStorage.getItem(key), 10);
    else if (key.indexOf('note_prog_') === 0) scopeRow('program', key.slice(10)).note = localStorage.getItem(key);
  }

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const isFb = key.indexOf('fb_') === 0;
    const isNote = key.indexOf('note_') === 0;
    if (!isFb && !isNote) continue;
    // The pack- and programme-wide keys are handled above. Skipping them here
    // matters for more than tidiness: `note_pack_<key>` would otherwise be fed
    // to a parser that expects six underscore-separated segments and would
    // read the pack name as a mode.
    if (key.indexOf('fb_pack_') === 0 || key.indexOf('note_pack_') === 0 ||
        key.indexOf('fb_prog_') === 0 || key.indexOf('note_prog_') === 0) continue;
    const p = _fbParseKey(key);
    if (!p) continue;
    const id = p.pack + '|' + p.mode + '|' + p.group + '|' + p.item + '|' + p.side;
    if (!rows[id]) {
      const r = _fbResolve(p);
      rows[id] = {
        scope: 'card',
        pack: p.pack, program: null, mode: r.modeLabel, strategy: r.strategy || null,
        cardIndex: parseInt(p.item, 10), side: p.side,
        card: r.card || null, rating: null, note: null,
      };
    }
    if (isFb) rows[id].rating = parseInt(localStorage.getItem(key), 10);
    else      rows[id].note   = localStorage.getItem(key);
  }
  // stable, readable order — the pack and programme entries first
  return Object.keys(scope).sort().map(k => scope[k])
    .concat(Object.keys(rows).sort().map(k => rows[k]));
}
window.collectFeedbackAndNotes = collectFeedbackAndNotes;

// ─── EXPORT — THREE WAYS OUT, IN ORDER OF USEFULNESS (v1.27.11) ──────────────
//
// `<a download>` alone was a silent failure. In an installed app — iOS PWA,
// TestFlight build, Android APK — the WebView has nowhere to put a file, so
// the click does nothing at all: no file, no error, no toast. The pack-tag
// export was rewritten as a copyable modal for exactly this reason (see the
// comment further down this file); the notes and ratings exports were not,
// which meant a beta tester could press "Export" and get silence.
//
// Three tiers, tried in order:
//   1. navigator.share() with a real File — the share sheet on a phone, so a
//      tester can mail the file to me in two taps. Best case, and the only
//      one that produces an actual file on iOS.
//   2. <a download> — desktop browsers, where it has always worked. Skipped
//      when we can tell we are installed, because there it is the silent case.
//   3. A copyable modal — works literally everywhere, including Android
//      WebView, which implements neither share nor download.
//
// A share that the user cancels is NOT a failure and must not fall through to
// the modal; anything else does fall through, so there is no path that ends
// in nothing happening.

function _dsIsInstalled() {
  if (document.documentElement.classList.contains('ds-native')) return true;
  if (window.navigator.standalone === true) return true;
  try {
    if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) return true;
  } catch (e) {}
  return false;
}

function _dsCanShareFile(text, filename, mime) {
  try {
    if (typeof File !== 'function' || !navigator.share || !navigator.canShare) return false;
    return navigator.canShare({ files: [new File([text], filename, { type: mime })] });
  } catch (e) { return false; }
}

// The universal fallback. Also reachable on its own, so a tester who cancels
// the share sheet by accident is not stuck.
function _dsExportModal(text, title, filename) {
  let ov = document.getElementById('dsExportOverlay');
  if (!ov) {
    ov = document.createElement('div');
    ov.id = 'dsExportOverlay';
    ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.45);z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px;';
    ov.innerHTML =
      '<div style="background:var(--ds-card,#fff);border-radius:16px;max-width:520px;width:100%;max-height:80vh;display:flex;flex-direction:column;padding:16px;box-shadow:0 8px 32px rgba(0,0,0,0.25);">' +
        '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">' +
          '<strong id="dsExportTitle" style="font-size:15px;"></strong>' +
          '<button id="dsExportClose" aria-label="Close" style="border:none;background:none;font-size:18px;cursor:pointer;padding:4px 8px;">✕</button>' +
        '</div>' +
        '<div style="font-size:12px;color:var(--ds-txt3,#777);margin-bottom:10px;">Copy this and paste it into an email or a note.</div>' +
        '<textarea id="dsExportText" readonly spellcheck="false" style="flex:1;min-height:220px;font-family:ui-monospace,Menlo,monospace;font-size:12px;border:1px solid var(--ds-border,#ddd);border-radius:10px;padding:10px;resize:none;-webkit-user-select:text;user-select:text;"></textarea>' +
        '<div style="display:flex;gap:8px;margin-top:12px;">' +
          '<button id="dsExportCopy" style="flex:1;font-size:14px;font-weight:600;color:#fff;background:#2c7a4b;border:none;border-radius:10px;padding:10px;cursor:pointer;">Copy to clipboard</button>' +
          '<button id="dsExportShare" style="display:none;font-size:14px;font-weight:600;color:var(--ds-txt,#333);background:var(--ds-bg2,#f0f0f0);border:1px solid var(--ds-border,#ddd);border-radius:10px;padding:10px 14px;cursor:pointer;">Share…</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(ov);
    ov.addEventListener('click', e => { if (e.target === ov) ov.style.display = 'none'; });
    ov.querySelector('#dsExportClose').addEventListener('click', () => { ov.style.display = 'none'; });
    ov.querySelector('#dsExportCopy').addEventListener('click', () => {
      const ta = ov.querySelector('#dsExportText');
      const done = () => { if (window.showToast) showToast('Copied to clipboard.'); };
      const manual = () => {
        ta.focus(); ta.select();
        try { document.execCommand('copy'); done(); }
        catch (e) { if (window.showToast) showToast('Copy failed — select the text manually.'); }
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(ta.value).then(done).catch(manual);
      } else manual();
    });
    // Sharing plain text works in places where sharing a File does not.
    ov.querySelector('#dsExportShare').addEventListener('click', () => {
      const ta = ov.querySelector('#dsExportText');
      try {
        navigator.share({ title: ov.querySelector('#dsExportTitle').textContent, text: ta.value })
          .catch(() => {});
      } catch (e) {}
    });
  }
  ov.querySelector('#dsExportTitle').textContent = title || filename || 'Export';
  ov.querySelector('#dsExportText').value = text;
  ov.querySelector('#dsExportShare').style.display = navigator.share ? '' : 'none';
  ov.style.display = 'flex';
}
window._dsExportModal = _dsExportModal;

// Returns which route it took — 'share' | 'download' | 'modal' — so a test can
// assert on the decision without a real share sheet.
function _dsExport(text, filename, mime, title) {
  const label = title || filename;

  if (_dsCanShareFile(text, filename, mime)) {
    try {
      const file = new File([text], filename, { type: mime });
      const p = navigator.share({ files: [file], title: label });
      if (p && p.catch) p.catch(err => {
        // Cancelling the sheet is a decision, not a failure.
        if (err && (err.name === 'AbortError' || err.name === 'NotAllowedError')) return;
        _dsExportModal(text, label, filename);
      });
      return 'share';
    } catch (e) { /* fall through */ }
  }

  if (!_dsIsInstalled() && 'download' in document.createElement('a')) {
    try {
      const blob = new Blob([text], { type: mime });
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement('a');
      a.href     = url;
      a.download = filename;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      return 'download';
    } catch (e) { /* fall through */ }
  }

  _dsExportModal(text, label, filename);
  return 'modal';
}

// Kept so older call sites keep working unchanged.
function _download(text, filename, mime) { return _dsExport(text, filename, mime, filename); }
window._dsDownload = _dsExport;
window._dsExport   = _dsExport;

// Developer export — ratings AND notes, JSON, one entry per card side.
if (feedbackExportBtn) feedbackExportBtn.addEventListener('click', () => {
  const entries = collectFeedbackAndNotes();
  if (!entries.length) {
    alert('No ratings or notes yet.');
    return;
  }
  const payload = {
    exportedAt: new Date().toISOString(),
    appVersion: (typeof VERSION !== 'undefined' ? VERSION : ''),
    counts: {
      total: entries.length,
      withRating: entries.filter(e => e.rating !== null).length,
      withNote: entries.filter(e => e.note !== null).length,
      withBoth: entries.filter(e => e.rating !== null && e.note !== null).length,
    },
    entries,
  };
  _dsExport(JSON.stringify(payload, null, 2),
            `deckstack_feedback_${new Date().toISOString().slice(0, 10)}.json`,
            'application/json',
            'Ratings and notes — JSON');
});


// ─── USER-FACING NOTES EXPORT (v1.27.03) ─────────────────────────────────────
//
// Markdown rather than JSON, on purpose. This button is in the ordinary
// settings screen, so the person pressing it is not a developer — they want
// to read their own notes, or mail them to somebody. A .md file opens as
// plain text everywhere and still has enough structure to be useful when a
// beta tester sends it back. The developer export next to the ratings is the
// machine-readable one.
const notesExportBtn = document.getElementById('notesExportBtn');
if (notesExportBtn) notesExportBtn.addEventListener('click', () => {
  const entries = (window.collectFeedbackAndNotes ? collectFeedbackAndNotes() : [])
    .filter(e => e.note);
  if (!entries.length) {
    alert('You have not written any notes yet.\n\nOpen a card, tap three times on the line under it, and write.');
    return;
  }
  const packLabel = k => {
    const card = document.querySelector('.collection-card[data-key="' + k + '"]');
    return (card && card.dataset.label) || k;
  };
  // v1.27.18 — programme notes have no pack, so they get their own section
  // rather than being filed under a pack they do not belong to.
  const progNotes = entries.filter(e => e.scope === 'program');
  const byPack = {};
  entries.filter(e => e.scope !== 'program')
         .forEach(e => { (byPack[e.pack] = byPack[e.pack] || []).push(e); });

  const out = [];
  out.push('# My Deckstack notes');
  out.push('');
  out.push(entries.length + (entries.length === 1 ? ' note' : ' notes') +
           ' · exported ' + new Date().toISOString().slice(0, 10) +
           (typeof VERSION !== 'undefined' ? ' · ' + VERSION : ''));
  out.push('');
  Object.keys(byPack).sort().forEach(pack => {
    out.push('## ' + packLabel(pack));
    out.push('');
    byPack[pack].sort((a, b) =>
      // The whole-pack note first; it is about everything below it.
      (a.scope === 'pack' ? '' : '1' + a.mode + (a.strategy || ''))
        .localeCompare(b.scope === 'pack' ? '' : '1' + b.mode + (b.strategy || ''))
    ).forEach(e => {
      if (e.scope === 'pack') {
        out.push('### About this pack');
        out.push('');
        if (e.rating !== null) { out.push('Rating ' + e.rating + '/4'); out.push(''); }
        out.push(e.note);
        out.push('');
        return;
      }
      out.push('### ' + (e.strategy || 'Unknown strategy') + '  ·  ' + e.mode);
      if (e.card) out.push('> ' + String(e.card).replace(/\n/g, '\n> '));
      out.push('');
      out.push('Card ' + (e.cardIndex + 1) + ', ' + e.side +
               (e.rating !== null ? '  ·  rating ' + e.rating + '/4' : ''));
      out.push('');
      out.push(e.note);
      out.push('');
    });
  });
  if (progNotes.length) {
    out.push('## Programs');
    out.push('');
    progNotes.sort((a, b) => String(a.program).localeCompare(String(b.program))).forEach(e => {
      out.push('### ' + e.program);
      out.push('');
      if (e.rating !== null) { out.push('Rating ' + e.rating + '/4'); out.push(''); }
      out.push(e.note);
      out.push('');
    });
  }
  window._dsExport(out.join('\n'),
    'deckstack_notes_' + new Date().toISOString().slice(0, 10) + '.md',
    'text/markdown',
    'My Deckstack notes');
});

// ─── CLEAR RATINGS AND NOTES (v1.27.03) ──────────────────────────────────────
//
// Its own button, deliberately separate from "Reset first-run state". That one
// clears favourites, the continue card, the tap hint and onboarding, and it
// has NEVER touched fb_ or note_ keys — which is right: you reset the first
// run to see the app fresh, not to throw away the feedback you collected on
// the way. This is the button for throwing that away, once it has been read
// and acted on.
const clearFeedbackBtn = document.getElementById('clearFeedbackBtn');
if (clearFeedbackBtn) clearFeedbackBtn.addEventListener('click', () => {
  const doomed = Object.keys(localStorage)
    .filter(k => k.indexOf('fb_') === 0 || k.indexOf('note_') === 0);
  if (!doomed.length) {
    if (window.showToast) showToast('There are no ratings or notes to clear.');
    return;
  }
  const notes = doomed.filter(k => k.indexOf('note_') === 0).length;
  const ratings = doomed.length - notes;
  if (!confirm('Delete ' + ratings + ' rating(s) and ' + notes + ' note(s)?\n\nThis cannot be undone. Export them first if you have not.')) return;
  doomed.forEach(k => localStorage.removeItem(k));
  document.querySelectorAll('.hint.has-note').forEach(el => el.classList.remove('has-note'));
  if (window.showToast) showToast('Ratings and notes cleared.');
});

applyFeedbackMode();
applyInputCounterVisibility();

// ─── ACCESS LEVEL SYSTEM ───────────────────────────────────────────────────────────

(function initAccessLevel() {

  const LEVEL_KEY = 'dev_access_level';

  // Pack definitions per level
  const PACK_CONFIG = {
    // v1.27.41 — RENAMED AND PUT AWAY. The pack itself is untouched: its key is
    // still `assertive`, so every rating, note, favourite, folder and bit of
    // progress a user has follows it (the keys are fb_assertive_… and
    // note_assertive_…). Only the label on screen changed, and the level.
    //
    // Why: Rikard is keeping this version as it is — it has personal value —
    // and will build new packs from the current rules called Assertive
    // Communication Part 1, Part 2 and possibly more. Two packs cannot both be
    // called Assertive Communication in the library, so this one took a name of
    // its own. `The Assertive Four` says what it is: the four Manuel J. Smith
    // drills (Fogging, Negative Inquiry, Negative Assertion, Broken Record).
    //
    // 'complete' really does hide it: social-confidence, the only programme
    // that lists it, is itself 'complete' (see PROGRAM_CONFIG), so no programme
    // route reopens it in packVisibility.
    //
    // SETTLED v1.27.48: `assertive::domestic` was an Extended bundle sold for
    // this pack, and inside all three kits, which meant the store charged for
    // inputs to a pack no real user can open. It is out of the store and out
    // of the kits, and the bundle is now tier 'pro-opt' in BUNDLE_DEFS — a
    // toggle inside the pack, like its sibling `workplace`. Nothing was
    // deleted: the cards are still tagged `domestic`, only the gate is gone.
    assertive:      { label: 'The Assertive Four', minLevel: 'complete'  },
    // v1.26.67 — the pre-handbook packs are put AWAY, not deleted: minLevel
    // 'complete' hides them from every real user while leaving them intact
    // for Rikard to review at the developer level. Assertive Communication is
    // the deliberate exception and stays as the fourth freemium pack.
    // compliments, influenceframing and selfhumour had NO entry at all, which
    // meant the last line of packVisibility() returned 'available' and they
    // were free for everyone by accident — they get entries here.
    // NOT listed until v1.26.81: startingconnecting, conversationaldepth,
    // listeningresponding, thehappyno and theregretfulno. They were left out
    // because their programs kept them reachable, but that made them depend
    // on a program existing — delete the program and the last line of
    // packVisibility() would hand them to everyone for free. They are now
    // 'complete' like the rest of the old library, and their programs are
    // 'complete' too (see PROGRAM_CONFIG).
    startingconnecting:  { label: 'Starting & Connecting',  minLevel: 'complete' },
    conversationaldepth: { label: 'Conversational Depth',   minLevel: 'complete' },
    listeningresponding: { label: 'Listening & Responding',  minLevel: 'complete' },
    thehappyno:          { label: 'The Happy No',            minLevel: 'complete' },
    theregretfulno:      { label: 'The Regretful No',        minLevel: 'complete' },
    conversational: { label: 'Conversational Skills',   minLevel: 'complete'  },
    humour:         { label: 'Humour Practise',          minLevel: 'complete'  },
    criticism:      { label: 'Criticism & Correction',   minLevel: 'complete'  },
    teasing:        { label: 'Teasing & Playfulness',    minLevel: 'complete'  },
    storytelling:   { label: 'Storytelling',             minLevel: 'complete'  },
    humourpractise: { label: 'Humour Practise (new)',    minLevel: 'complete'  },
    transitions:    { label: 'Transitions',              minLevel: 'complete'  },
    speakingupingroups: { label: 'Speaking Up in Groups', minLevel: 'complete' },
    playfulrefusals:    { label: 'Playful Refusals',      minLevel: 'complete' },
    compliments:        { label: 'Compliments & Self-Disclosure', minLevel: 'complete' },
    influenceframing:   { label: 'Influence & Framing',   minLevel: 'complete' },
    selfhumour:         { label: 'Self-Humour',           minLevel: 'complete' },
    // ── minLevel: 'program' (v1.26.82) ─────────────────────────────
    // These packs exist ONLY inside a program. They are not in the Packs
    // list, not in Topics, not in search — not even greyed with a badge —
    // until the checkpoint on their Part is passed, and then they appear
    // everywhere at once. That arrival is the reward the programs are built
    // around. The Part each one sits on is named so the link is findable
    // from this end too.
    // v1.26.88 — Exploring a Topic, Talking About Yourself and Compliments were
    // handed BACK to pro. They were the three cases where a Part 1 had no open
    // pack at all, and the standalone packs list had fallen to 22. Their Parts
    // keep working: the programme route overrides the tier, so a freemium user
    // who passes the Conversation Foundations Part 2 checkpoint still opens
    // Exploring a Topic even though it is a Pro pack. No exception needed.
    // v1.27.00 — PROMOTED TO FREEMIUM. Without Assertive Communication the
    // free tier can open a conversation and understand the other person, but
    // has nothing to SAY — this is the pack that fills that hole, and it is
    // the least confrontational one in the library, which is the point.
    // It is also Say It Well Part 1, so a free user who likes it is already
    // one step inside a Pro programme.
    // THE PLAN: Assertive Communication stays freemium through the beta so
    // testers get it, and moves to 'pro' before the App Store release, to
    // keep the free tier free of conflict material. When that happens this
    // pack is its replacement — the swap is two lines, both here.
    // Its bundles were checked at promotion time: 5 free inputs per strategy
    // in Single Strategy and 3 free cards per strategy in Memorize, which are
    // the only two modes a freemium user can reach (see MODE_CONFIG). Same
    // shape as Starting Conversations Pt. 1. Nothing needed changing.
// Conversation Foundations, Part 2
    validation: { label: 'Validation', minLevel: 'program' },                   // Conversation Foundations, Part 3
    deepquestions: { label: 'Deep Questions', minLevel: 'program' },            // Conversation Foundations, Part 4
    givingexamples: { label: 'Giving Examples', minLevel: 'program' },          // Say It Well, Part 2
    storiesinconversation: { label: 'Stories in Conversation', minLevel: 'program' },// Say It Well, Part 3
    supportingconversations: { label: 'Supporting Conversations', minLevel: 'program' }, // Warmth & Connection, Part 2
    emotionlabellingandregulation: { label: 'Emotion Labelling and Regulation', minLevel: 'program' }, // Warmth & Connection, Part 3
    // Difficult Conversations is an EXTENDED program, so these three are
    // unreachable without buying it. That is three packs taken out of Pro —
    // the one decision here with a price on it.
    conflictemotions: { label: 'Conflict Emotions', minLevel: 'program' },      // Difficult Conversations, Part 2
    givingcriticism: { label: 'Giving Criticism', minLevel: 'program' },        // Difficult Conversations, Part 3
    receivingfeedbackandcriticism: { label: 'Receiving Feedback and Criticism', minLevel: 'program' }, // Difficult Conversations, Part 3
    // v1.26.85 — the two ladders. A pack series with a sequel is the natural
    // shape for a program: the earlier rungs stay open so the ladder is
    // visible, and the last one is the reward. Starting Conversations Pt. 1
    // (freemium) and Pt. 2 (pro) are both still open on their own; only Pt. 3
    // is locked. Same for Persuasion, where Pt. 1 stays open with Pro.
    setupstatement: { label: 'Setup Statement', minLevel: 'program' },          // Opening a Conversation, Part 2
    startingconversations3: { label: 'Starting Conversations — Pt. 3', minLevel: 'program' }, // Opening a Conversation, Part 3
    persuasionandinfluence2: { label: 'Persuasion and Influence — Pt. 2', minLevel: 'program' }, // Persuasion & Negotiation, Part 2
    negotiationandcompromise: { label: 'Negotiation and Compromise', minLevel: 'program' },      // Persuasion & Negotiation, Part 3

    apologizing2: { label: 'Apologizing — Pt. 2', minLevel: 'extended' },
    endingconversations: { label: 'Ending Conversations', minLevel: 'pro' },
    reactingtounexpectedstatements: { label: 'Reacting to Unexpected Statements', minLevel: 'pro' },
    howtointerrupt: { label: 'How to Interrupt', minLevel: 'pro' },
    handleinterruptions: { label: 'Handle Interruptions', minLevel: 'pro' },
    describethings: { label: 'Describe Things', minLevel: 'pro' },
    explainthings: { label: 'Explain Things', minLevel: 'pro' },
    storytellingwiththesixws: { label: 'Storytelling with the Six W\'s', minLevel: 'pro' },
    praiseandencouragement: { label: 'Praise and Encouragement', minLevel: 'pro' },
    apologizing1: { label: 'Apologizing — Pt. 1', minLevel: 'pro' },
    agreeing: { label: 'Agreeing', minLevel: 'pro' },
    disagreeing: { label: 'Disagreeing', minLevel: 'pro' },
    persuasionandinfluence1: { label: 'Persuasion and Influence — Pt. 1', minLevel: 'pro' },
    brokenrecord: { label: 'Broken Record', minLevel: 'pro' },
    respondingtopassiveaggression: { label: 'Responding to Passive Aggression', minLevel: 'pro' },
    makingrequests: { label: 'Making Requests', minLevel: 'pro' },
    sayingno: { label: 'Saying No', minLevel: 'pro' },
    rolebasedhumour: { label: 'Role Based Humour', minLevel: 'program' },      // Humour, Part 2,
    // v1.27.00 — the two listening packs. import-pack.js writes no PACK_CONFIG
    // entry for a --program import, which works only as long as the programme
    // exists: delete it and the last line of packVisibility() hands the pack
    // to everyone for free, which is exactly the bug v1.26.81 fixed. These
    // entries are written by hand for the same reason as the ones above.
    listeningthroughquestions: { label: 'Listening Through Questions', minLevel: 'program' }, // Listening in Depth, Part 2
    showunderstanding2: { label: 'Show Understanding — Pt. 2', minLevel: 'program' },         // Listening in Depth, Part 3
    storybanter: { label: 'Story Banter', minLevel: 'program' },                              // Humour, Part 3
    masculine2: { label: 'The Masculine Blueprint – Part 2', minLevel: 'complete' },
    masculine3: { label: 'The Masculine Blueprint – Part 3', minLevel: 'complete' },
    masculine4: { label: 'The Masculine Blueprint – Part 4', minLevel: 'complete' },
    masculine5: { label: 'The Masculine Blueprint – Part 5', minLevel: 'complete' },
    masculine6: { label: 'The Masculine Blueprint – Part 6', minLevel: 'complete' },
    masculinesv: { label: 'The Masculine Blueprint – Svenska', minLevel: 'complete' },
    parenting1: { label: 'Parenting 01 – The Heart of Connection', minLevel: 'complete' },
    parenting2: { label: 'Parenting 02 – The Architecture of Limits', minLevel: 'complete' },
    parenting3: { label: 'Parenting 03 – Mastering the Struggle', minLevel: 'complete' },
    parenting4: { label: 'Parenting 04 – Calm in the Storm', minLevel: 'complete' },
    parenting5: { label: 'Parenting 05 – The Path of Repentance', minLevel: 'complete' },
    praxframe1: { label: 'Praxeology Frame 01 – The Foundation of Frame', minLevel: 'complete' },
    praxframe2: { label: 'Praxeology Frame 02 – Mastering Subtext', minLevel: 'complete' },
    praxframe3: { label: 'Praxeology Frame 03 – Assertive Defense', minLevel: 'complete' },
    praxframe4: { label: 'Praxeology Frame 04 – Breaking the Nice Guy Loop', minLevel: 'complete' },
    praxframe5: { label: 'Praxeology Frame 05 – Leadership and Vision', minLevel: 'complete' },
    praxdread1: { label: 'Praxeology Dread 01 – The Silent Shift', minLevel: 'complete' },
    praxdread2: { label: 'Praxeology Dread 02 – The Marketing of Value', minLevel: 'complete' },
    praxdread3: { label: 'Praxeology Dread 03 – Enforcing Expectations', minLevel: 'complete' },
    praxdread4: { label: 'Praxeology Dread 04 – Emotional Mechanics', minLevel: 'complete' },
    praxdread5: { label: 'Praxeology Dread 05 – The Roadmap to Agency', minLevel: 'complete' },
    setupquestion: { label: 'Setup Question', minLevel: 'pro' },
    givingcounterexamples: { label: 'Giving Counter Examples', minLevel: 'pro' },
    discussing: { label: 'Discussing', minLevel: 'pro' },
    explainthings2: { label: 'Explain Things — Pt. 2', minLevel: 'extended' },
    buildingastory: { label: 'Building a Story', minLevel: 'extended' },
    reframing: { label: 'Reframing', minLevel: 'extended' },
    danbacon1: { label: 'Dan Bacon 1 — Creating the Spark', minLevel: 'complete' },
    danbacon2: { label: 'Dan Bacon 2 — Assertive Presence', minLevel: 'complete' },
    danbacon3: { label: 'Dan Bacon 3 — Relationship Mastery', minLevel: 'complete' },
    danbacon4: { label: 'Dan Bacon 4 — Holding the Frame', minLevel: 'complete' },
    oconnor1: { label: 'Dan o Connor 1 — Tactical Verbal Defense', minLevel: 'complete' },
    oconnor2: { label: 'Dan o Connor 2 — Professional Boundaries', minLevel: 'complete' },
    oconnor3: { label: 'Dan o Connor 3 — Disempowering Narcissists', minLevel: 'complete' },
    oconnor4: { label: 'Dan o Connor 4 — Influential Leadership', minLevel: 'complete' },
    oconnor5: { label: 'Dan o Connor 5 — Executive Presence', minLevel: 'complete' },
    oconnor6: { label: 'Dan o Connor 6 — The Mindful Communicator', minLevel: 'complete' },
    oconnor7: { label: 'Dan o Connor 7 — Social Fluidity', minLevel: 'complete' },
    jimmy1: { label: 'Jimmy 1 — The Foundations of Safety', minLevel: 'complete' },
    jimmy2: { label: 'Jimmy 2 — Healthy Expression', minLevel: 'complete' },
    jimmy3: { label: 'Jimmy 3 — Listening & Emotional Presence', minLevel: 'complete' },
    jimmy4: { label: 'Jimmy 4 — Handling Conflict & Repair', minLevel: 'complete' },
    jimmy5: { label: 'Jimmy 5 — Nurturing Connection', minLevel: 'complete' },
    jimmy6: { label: 'Jimmy 6 — Boundaries & Your Worth', minLevel: 'complete' },
    toddv1: { label: 'Todd V 1 — High-Value Openings', minLevel: 'complete' },
    toddv2: { label: 'Todd V 2 — Tension & Banter', minLevel: 'complete' },
    toddv3: { label: 'Todd V 3 — Advanced Connection', minLevel: 'complete' },
    toddv4: { label: 'Todd V 4 — Closing & Logistics', minLevel: 'complete' },
    toddv5: { label: 'Todd V 5 — Unflappable Presence', minLevel: 'complete' },
    firststrategies: { label: 'First Strategies', minLevel: 'freemium' },
    jfisher1: { label: 'Jefferson Fisher 1 — Control under Pressure', minLevel: 'complete' },
    jfisher2: { label: 'Jefferson Fisher 2 — Assertive Connection', minLevel: 'complete' },
    talkingaboutyourself: { label: 'Talking About Yourself', minLevel: 'freemium' },
    startingconversations1: { label: 'Starting Conversations — Pt. 1', minLevel: 'freemium' },
    startingconversations2: { label: 'Starting Conversations — Pt. 2', minLevel: 'pro' },
    startingconversations4: { label: 'Starting Conversations — Pt. 4', minLevel: 'extended' },
    showunderstanding: { label: 'Show Understanding', minLevel: 'freemium' },
    exploringatopic: { label: 'Exploring a Topic', minLevel: 'pro' },
    changingtopics: { label: 'Changing Topics', minLevel: 'pro' },
    complimenting: { label: 'Compliments', minLevel: 'pro' },
    responsivehumour: { label: 'Responsive Humour', minLevel: 'pro' },
    assertivecomm1: { label: 'Assertive Communication', minLevel: 'freemium' },
    assertivecomm2: { label: 'Assertive Communication 2 — Social & Equal Connections', minLevel: 'extended' },
    assertivecommadv: { label: 'Assertive Communication — Advanced', minLevel: 'complete' },
    integratedmaster: { label: 'The Integrated Masterclass', minLevel: 'complete' },
    counseling1: { label: 'Biblical Counseling 1 — Personal Restoration', minLevel: 'complete' },
    counseling2: { label: 'Biblical Counseling 2 — Conflict and Reconciliation', minLevel: 'complete' },
    seenandtrusted2careshedidnotaskf: { label: 'Seen and Trusted 2 — Care She Did Not Ask For', minLevel: 'complete' },
    seenandtrusted3askingtobetrusted: { label: 'Seen and Trusted 3 — Asking to Be Trusted', minLevel: 'complete' },
    seenandtrusted1thesafetyshereads: { label: 'Seen and Trusted 1 — The Safety She Reads For', minLevel: 'complete' },
    masculine1: { label: 'The Masculine Blueprint – Part 1', minLevel: 'complete' },
    askingforclarity: { label: 'Asking for Clarity', minLevel: 'complete' },
    calibratinghumour: { label: 'Calibrating Humour', minLevel: 'complete' },
    brokenpromises: { label: 'Broken Promises and Trust', minLevel: 'complete' },
    askingpermission: { label: 'Asking for Permission', minLevel: 'complete' },
    toneinmessages: { label: 'Tone in Messages', minLevel: 'complete' },
    replyingandnotreplying: { label: 'Replying and Not Replying', minLevel: 'complete' },
    whentostoptyping: { label: 'When to Stop Typing', minLevel: 'complete' },
    alexandergrace1: { label: 'Alexander Grace 1 — Saying No', minLevel: 'complete' },
    alexandergrace2: { label: 'Alexander Grace 2 — Fights That End Closer', minLevel: 'complete' },
    alexandergrace3: { label: 'Alexander Grace 3 — Confident Connection', minLevel: 'complete' },
    alexandergrace4: { label: 'Alexander Grace 4 — Saying It Early', minLevel: 'complete' },
    alexandergrace5: { label: 'Alexander Grace 5 — Steady Under Criticism', minLevel: 'complete' },
    alexandergrace6: { label: 'Alexander Grace 6 — Letting Her In', minLevel: 'complete' },
    alexandergrace7: { label: 'Alexander Grace 7 — Hard Talks, Well Timed', minLevel: 'complete' },
    alexandergrace8: { label: 'Alexander Grace 8 — Honest and Fair', minLevel: 'complete' },
  };

  // ── PROGRAM_CONFIG (v1.26.81) ─────────────────────────────────────────
  // Programs had no tier of their own. Visibility was decided by one array,
  // EXTENDED_PROGRAM_IDS, so a program was either buyable-in-Extended or
  // free for absolutely everyone — there was no way to say "Pro" or "put
  // this one away", which is what the old programs needed.
  //
  // Levels mean the same as in PACK_CONFIG:
  //   freemium  — open to everyone
  //   pro       — listed for freemium with a Pro badge, opens on upgrade
  //   extended  — must be bought AND requires an active Pro plan
  //   complete  — hidden from every real user, still there for Rikard
  //
  // A program that is missing here is treated as 'pro' and warned about, so
  // a new one can never leak out free by accident the way three packs did.
  const PROGRAM_CONFIG = {
    'conversation-foundations': { minLevel: 'freemium' },
    // The three pre-handbook programs, put away in v1.26.81 together with the
    // packs they deliver. conversation-skills was already unbuyable after the
    // v1.26.80 store cleanup; this makes it invisible rather than merely
    // unsellable, and puts all three in the same place.
    'saying-no':           { minLevel: 'complete' },
    'social-confidence':   { minLevel: 'complete' },
    'conversation-skills': { minLevel: 'complete' },
    // v1.26.82 — the three handbook programs.
    'say-it-well':            { minLevel: 'pro' },
    'warmth-connection':      { minLevel: 'pro' },
    'opening-a-conversation': { minLevel: 'pro' },
    'persuasion-negotiation': { minLevel: 'pro' },
    'humour':                 { minLevel: 'pro' },
    // v1.27.00 — the listening programme. Pro like the other four handbook
    // programmes; Extended already carries Difficult Conversations and a
    // second paid programme would thin both.
    'listening-in-depth':     { minLevel: 'pro' },
    'difficult-conversations': { minLevel: 'extended' },
  };
  const _warnedPrograms = {};

  // 'available' — open | 'locked' — shown with a Pro badge | 'hidden'
  function programVisibility(progId) {
    const level = getLevel();
    if (level === 'complete') return 'available';
    let cfg = PROGRAM_CONFIG[progId];
    if (!cfg) {
      if (!_warnedPrograms[progId]) {
        _warnedPrograms[progId] = true;
        console.warn('[Deckstack] Program "' + progId + '" has no PROGRAM_CONFIG entry — treating it as Pro.');
      }
      cfg = { minLevel: 'pro' };
    }
    if (cfg.minLevel === 'complete') return 'hidden';
    if (cfg.minLevel === 'extended') {
      if (!ownsExtended(progId)) return 'hidden';
      // Extended purchases still need an active Pro plan (yearly Pro model)
      return level === 'pro' ? 'available' : 'locked';
    }
    return levelIndex(level) >= levelIndex(cfg.minLevel) ? 'available' : 'locked';
  }

  // A single Part inside a program (v1.26.82). A section may carry its own
  // minLevel, which is how one program can be partly free: Conversation
  // Foundations is open through Part 2 and needs Pro from Part 3. The section
  // can never be more open than the program it sits in.
  function sectionVisibility(prog, sec) {
    const progVis = programVisibility(prog.id);
    if (progVis !== 'available' || !sec || !sec.minLevel) return progVis;
    const level = getLevel();
    if (level === 'complete') return 'available';
    if (sec.minLevel === 'complete' || sec.minLevel === 'program') return 'hidden';
    return levelIndex(level) >= levelIndex(sec.minLevel) ? 'available' : 'locked';
  }

  // Mode definitions per level
  const MODE_CONFIG = {
    modeFlashcard:          { minLevel: 'freemium' },
    modeMemorize:           { minLevel: 'freemium' },
    modeCollections:        { minLevel: 'pro'      },
    modeFlow:               { minLevel: 'pro'      },
    modeChallenges:         { minLevel: 'pro'      },
    modeMindset:            { minLevel: 'pro'      },
    modeHandsfree:          { minLevel: 'pro'      },
    modeHandsfreeCollections: { minLevel: 'pro'    },
    modeHandsfreeSequences: { minLevel: 'pro'      },
    modeHandsfreeChallenges:{ minLevel: 'pro'      },
    modeHandsfreeMindset:   { minLevel: 'pro'      },
    modeHandsfreeMemorize:  { minLevel: 'pro'      },
  };

  // v1.26.67 — PER-PACK MODE EXCEPTIONS.
  // First Strategies is the introduction pack and the only place a freemium
  // user can see what the other modes actually ARE. A hidden lock icon sells
  // Pro far worse than five minutes of using Challenges does.
  // THIS IS ONLY SAFE FOR A PACK WHOSE CARDS ARE TAGGED free IN EVERY MODE.
  // In every other pack only Single Strategy and Memorize carry free cards, so
  // unlocking a mode there would open onto an empty screen. Check the bundles
  // before adding a pack to this table.
  const MODE_FREE_FOR = {
    firststrategies: [
      'modeCollections', 'modeFlow', 'modeChallenges', 'modeMindset',
      'modeHandsfree', 'modeHandsfreeCollections', 'modeHandsfreeSequences',
      'modeHandsfreeChallenges', 'modeHandsfreeMindset', 'modeHandsfreeMemorize',
    ],
  };

  const LEVEL_ORDER = ['freemium', 'pro', 'complete'];

  function getLevel() {
    // v1.26.89 — a beta code can grant Pro for a fixed number of days. The
    // grant lives in localStorage on the tester's own device, so changing the
    // app does NOT take it back; it has to expire by itself, and this is where
    // that happens. Checked before anything else so an expired grant cannot
    // leak through any of the paths below.
    expireBetaGrant();
    expirePackGrants();
    expireUnlockGrants();
    // v1.26.75 — DEFAULT IS NOW freemium, not complete. A fresh install used
    // to see the entire library, which would have made the beta test say
    // nothing at all about the paid model. This is the primary of five sites;
    // the other four are fallbacks used before window.accessLevel is up, and
    // they were changed with it.
    const stored = localStorage.getItem(LEVEL_KEY) || 'freemium';
    // Lifetime Pro (one-time purchase): the level never drops below pro —
    // UNLESS the level was set explicitly via the developer radio (v1.26.44).
    // Picking "Freemium" there is a deliberate simulation and must win, so
    // devs don't have to clear their purchases just to preview freemium.
    if (stored === 'freemium' && localStorage.getItem('dev_level_forced') !== 'true') {
      try {
        const owned = JSON.parse(localStorage.getItem('ds_extended_owned')) || [];
        if (owned.includes('lifetime-pro')) return 'pro';
      } catch {}
    }
    return stored;
  }

  function setLevel(level) {
    localStorage.setItem(LEVEL_KEY, level);
  }

  // ── Beta access codes (v1.26.89) ─────────────────────────────────────────
  // A tester gets Pro without being able to reach 'complete'. The grant is a
  // timestamp, not a flag, because the app is served over the web: the tester
  // keeps whatever is in their localStorage no matter what Rikard changes on
  // GitHub, so the only way to take Pro back is to have written down when it
  // ends. Add or retire a code by editing this table.
  // ── ACCESS CODES (v1.27.10) ──────────────────────────────────────────────
  // Two kinds, redeemed in the same field on the home settings screen.
  //
  //   kind: 'level'  raises the whole access level for a while (the beta code)
  //   kind: 'pack'   opens NAMED PACKS for a while and touches nothing else
  //
  // Fields:
  //   days        how long the grant lasts from the moment it is redeemed
  //   requiresPro true = refuse the code unless the device is already Pro
  //   notAfter    optional 'YYYY-MM-DD'. The code stops working entirely on
  //               that date, whatever anyone does. This is the only real
  //               limit available without a server — see the note on
  //               reinstalling in `Åtkomstkoder — register.md`.
  //               v1.27.47: both codes end 2026-12-31. It gates REDEMPTION,
  //               not the grant — a code redeemed on 30 December still runs
  //               its 60 days into 2027. That is the intent: nobody loses
  //               access mid-test, and the code stops spreading at new year.
  //   label       what the person sees when it works
  //
  // KEEP `Appdokumentation/Åtkomstkoder — register.md` IN STEP WITH THIS TABLE.
  // It is the only place the codes are written down in plain language.
  const ACCESS_CODES = {
    BETA2026: {
      kind: 'level', level: 'pro', days: 60,
      notAfter: '2026-12-31',
      label: 'Pro unlocked for 60 days.',
    },
    // Newsletter code: one Pro pack, opened for everybody who has the code,
    // Pro or not. The pack is at minLevel 'complete', so a grant is the ONLY
    // way to reach it — which is what makes it worth handing out.
    PARENT60: {
      kind: 'pack', packs: ['parenting1'], days: 60, requiresPro: false,
      notAfter: '2026-12-31',
      label: 'Parenting 01 unlocked for 60 days.',
    },
    // v1.27.56 — the two Jay Adams packs, for the people Rikard hands them to
    // before the beta. `fullAccess` is the new flag: the grant opens the pro
    // bundles and the pro modes inside THESE packs only, so a freemium tester
    // gets the whole thing rather than five cards and four empty modes.
    // Without it the code would still work, but the pack would follow the
    // ordinary freemium rules — which is the right choice for a pack that has
    // a real free tier, and the wrong one here.
    COUNSEL60: {
      kind: 'pack', packs: ['counseling1', 'counseling2'],
      days: 180, requiresPro: false, fullAccess: true,
      notAfter: '2026-12-31',
      label: 'Biblical Counseling 1 & 2 unlocked in full for 180 days.',
    },
    // v1.28.97 \u2014 three blanket codes, all running to the turn of the year.
    // They do not raise the LEVEL: they hand out the two things a Pro user can
    // still be missing. EXTENDED26 grants ownership of everything in the
    // extended store, which behaves exactly like a purchase and therefore still
    // needs an active Pro plan to use. PROGRAMS26 counts every programme
    // checkpoint as passed, so nothing inside a programme is waiting on a test.
    // ALLACCESS26 is both at once.
    EXTENDED26: {
      kind: 'unlock', unlocks: ['extended'],
      until: '2026-12-31', notAfter: '2026-12-31',
      label: 'Extended store unlocked until the end of the year. Needs Pro to use.',
    },
    PROGRAMS26: {
      kind: 'unlock', unlocks: ['programs'],
      until: '2026-12-31', notAfter: '2026-12-31',
      label: 'Every programme checkpoint counts as passed, until the end of the year.',
    },
    ALLACCESS26: {
      kind: 'unlock', unlocks: ['extended', 'programs'],
      until: '2026-12-31', notAfter: '2026-12-31',
      label: 'Extended store and all programme parts unlocked until the end of the year.',
    },
  };
  const GRANT_KEY  = 'ds_beta_grant';    // { level, until, code }
  const PACKS_KEY  = 'ds_pack_grants';   // { packKey: { until, code } }
  const UNLOCK_KEY = 'ds_unlock_grants'; // { extended: {until,code}, programs: {until,code} }

  // ── Blanket unlocks (v1.28.97) ───────────────────────────────────────────
  // A third kind of grant, next to the level grant and the pack grants. It
  // does not change the level and it does not name packs: it switches off one
  // specific gate for as long as it lasts.
  //
  //   extended \u2014 everything in the extended store counts as owned. Ownership
  //              is not the same as access: an extended item still needs Pro,
  //              exactly as a bought one does.
  //   programs \u2014 every programme checkpoint counts as passed, so no Part is
  //              waiting on a test. Parts that need Pro still need Pro.
  function readUnlocks() {
    try { return JSON.parse(localStorage.getItem(UNLOCK_KEY)) || {}; }
    catch { return {}; }
  }
  function writeUnlocks(o) {
    try { localStorage.setItem(UNLOCK_KEY, JSON.stringify(o)); } catch (e) {}
  }
  function expireUnlockGrants() {
    const g = readUnlocks();
    const now = Date.now();
    let changed = false;
    Object.keys(g).forEach(k => {
      if (!g[k] || !g[k].until || g[k].until <= now) { delete g[k]; changed = true; }
    });
    if (changed) writeUnlocks(g);
  }
  function unlockActive(kind) {
    const g = readUnlocks()[kind];
    return !!(g && g.until && g.until > Date.now());
  }
  // The single ownership test for extended items \u2014 packs, programs and the
  // `pack::bundle` ids. Everything that used to read ds_extended_owned
  // directly goes through here, so the grant reaches all of them at once.
  function ownsExtended(id) {
    if (unlockActive('extended')) return true;
    return getExtendedOwned().includes(id);
  }
  // Used by the programme route here and by isCheckpointPassed in app-ui.js.
  function checkpointsUnlocked() { return unlockActive('programs'); }

  function readGrant() {
    try { return JSON.parse(localStorage.getItem(GRANT_KEY)) || null; }
    catch { return null; }
  }

  // Drops the level back to freemium the moment the grant runs out.
  function expireBetaGrant() {
    const g = readGrant();
    if (!g || !g.until) return;
    if (Date.now() < g.until) return;
    localStorage.removeItem(GRANT_KEY);
    // Only take back what the code gave. If the level was changed since (a
    // real purchase, or the developer radio), leave it alone.
    if (localStorage.getItem(LEVEL_KEY) === g.level) {
      localStorage.setItem(LEVEL_KEY, 'freemium');
      localStorage.setItem('dev_level_forced', 'true');
    }
  }

  // ── Pack grants ──────────────────────────────────────────────────────────
  // Independent of the level grant and of each other: several codes can be
  // live at once, each with its own expiry, and a level code does not disturb
  // them. Stored per pack so a second code for the same pack simply extends it.
  function readPackGrants() {
    try { return JSON.parse(localStorage.getItem(PACKS_KEY)) || {}; }
    catch { return {}; }
  }
  function writePackGrants(o) {
    try { localStorage.setItem(PACKS_KEY, JSON.stringify(o)); } catch (e) {}
  }
  function expirePackGrants() {
    const g = readPackGrants();
    const now = Date.now();
    let changed = false;
    Object.keys(g).forEach(k => {
      if (!g[k] || !g[k].until || g[k].until <= now) { delete g[k]; changed = true; }
    });
    if (changed) writePackGrants(g);
  }
  function packGranted(packKey) {
    const g = readPackGrants()[packKey];
    return !!(g && g.until && g.until > Date.now());
  }

  // v1.27.56. A pack grant makes the pack VISIBLE; it says nothing about the
  // cards inside it, which are gated separately by bundle tier and by mode.
  // `fullAccess` on the code adds that second half: getActiveBundles and
  // applyModeLocks both treat a full-granted pack as if the user were pro,
  // for that pack alone. Extended bundles are deliberately NOT included —
  // those are purchases, and a beta code should not hand them out.
  function packGrantFull(packKey) {
    const g = readPackGrants()[packKey];
    return !!(g && g.full && g.until && g.until > Date.now());
  }

  function grantStatus() {
    const out = [];
    const g = readGrant();
    if (g && g.until) {
      out.push({ kind: 'level', level: g.level, code: g.code,
                 days: Math.max(0, Math.ceil((g.until - Date.now()) / 86400000)) });
    }
    const pg = readPackGrants();
    Object.keys(pg).forEach(k => {
      if (!pg[k] || !pg[k].until) return;
      out.push({ kind: 'pack', pack: k, code: pg[k].code,
                 days: Math.max(0, Math.ceil((pg[k].until - Date.now()) / 86400000)) });
    });
    const ug = readUnlocks();
    Object.keys(ug).forEach(k => {
      if (!ug[k] || !ug[k].until) return;
      out.push({ kind: 'unlock', unlock: k, code: ug[k].code,
                 days: Math.max(0, Math.ceil((ug[k].until - Date.now()) / 86400000)) });
    });
    if (!out.length) return null;
    // Backwards compatible: callers that expect the old single object still
    // get the level grant's fields, with the full list on `.all`.
    const level = out.find(x => x.kind === 'level');
    return Object.assign({}, level || out[0], { all: out });
  }

  // v1.26.90 — hands a device back to freemium immediately. Without it the
  // only way off a redeemed code is to wait out the 60 days or clear site
  // data by hand, which also wipes progress and favourites.
  // v1.27.59 \u2014 returnerar VAD som togs bort, och sanker bara nivan om det
  // var en nivakod som hojde den. En packkod ror aldrig nivan, sa att klippa
  // den och samtidigt kasta ner en Pro-anvandare i freemium var fel: knappen
  // tog bort mer an den gav, och gjorde det tyst.
  function clearGrant() {
    const hadLevel = !!readGrant();
    const packs    = Object.keys(readPackGrants());
    const unlocks  = Object.keys(readUnlocks());
    localStorage.removeItem(GRANT_KEY);
    localStorage.removeItem(PACKS_KEY);
    localStorage.removeItem(UNLOCK_KEY);
    if (hadLevel) {
      localStorage.setItem(LEVEL_KEY, 'freemium');
      localStorage.setItem('dev_level_forced', 'true');
    }
    if (hadLevel || packs.length || unlocks.length) applyAccessLevel();
    return { level: hadLevel, packs: packs, unlocks: unlocks,
             any: hadLevel || packs.length > 0 || unlocks.length > 0 };
  }

  // Returns { ok, message }. Never throws — it is wired to a text field.
  function redeemCode(raw) {
    const code = String(raw || '').trim().toUpperCase();
    if (!code) return { ok: false, message: 'Enter a code first.' };
    const def = ACCESS_CODES[code];
    if (!def) return { ok: false, message: 'That code is not valid.' };

    // A hard cut-off date, if the code has one. This is the only limit that a
    // reinstall cannot get around, because it does not depend on anything
    // stored on the device.
    if (def.notAfter && Date.now() > Date.parse(def.notAfter + 'T23:59:59')) {
      return { ok: false, message: 'That code has expired.' };
    }

    // A code either runs for a number of days from redemption, or to a fixed
    // date \u2014 which is what makes a year-end code mean the same thing whenever
    // it is entered.
    const until = def.until ? Date.parse(def.until + 'T23:59:59')
                            : Date.now() + def.days * 86400000;
    if (!(until > Date.now())) return { ok: false, message: 'That code has expired.' };

    if (def.kind === 'unlock') {
      const g = readUnlocks();
      (def.unlocks || []).forEach(k => { g[k] = { until: until, code: code }; });
      writeUnlocks(g);
      applyAccessLevel();
      return { ok: true, message: def.label || 'Unlocked.' };
    }


    if (def.kind === 'pack') {
      if (def.requiresPro) {
        const lvl = getLevel();
        if (lvl !== 'pro' && lvl !== 'complete') {
          return { ok: false, message: 'That code needs Pro.' };
        }
      }
      const g = readPackGrants();
      (def.packs || []).forEach(k => { g[k] = { until: until, code: code, full: !!def.fullAccess }; });
      writePackGrants(g);
      applyAccessLevel();
      return { ok: true, message: def.label ||
        ((def.packs || []).length + ' pack(s) unlocked for ' + def.days + ' days.') };
    }

    // kind: 'level'
    localStorage.setItem(GRANT_KEY, JSON.stringify({ level: def.level, until: until, code: code }));
    localStorage.setItem(LEVEL_KEY, def.level);
    // Beats the lifetime-pro auto-promotion logic either way, and means the
    // level survives until expireBetaGrant() takes it back.
    localStorage.setItem('dev_level_forced', 'true');
    applyAccessLevel();
    return { ok: true, message: def.label || (def.level === 'pro'
      ? 'Pro unlocked for ' + def.days + ' days.'
      : 'Unlocked for ' + def.days + ' days.') };
  }

  function levelIndex(level) {
    return LEVEL_ORDER.indexOf(level);
  }

  function getExtendedOwned() {
    try { return JSON.parse(localStorage.getItem('ds_extended_owned')) || []; }
    catch { return []; }
  }

  // ── Program routes: is this pack delivered via a Program, and if so is
  //    any of its sections unlocked (all previous checkpoints passed)? ──────
  function _programState(packKey) {
    // pendingOpenRoute (v1.27.46) — the pack sits in a Part that is unlocked
    // AND covered by the user's plan, but that Part's own checkpoint has not
    // been passed yet. That is the state the discovery rule below calls
    // "trainable inside the programme, invisible everywhere else", and until
    // now nothing could act on it: pendingRoute alone was also true for a Part
    // behind Pro, so it could not be used to open anything.
    const state = { inAnyProgram: false, availableRoute: false, lockedRoute: false,
                    pendingRoute: false, pendingOpenRoute: false };
    if (typeof programsData === 'undefined' || !Array.isArray(programsData)) return state;
    let progress = {};
    try { progress = JSON.parse(localStorage.getItem('ds_program_progress')) || {}; } catch {}
    const cpPassed = (progId, cpId) =>
      checkpointsUnlocked() || !!(progress[progId] && progress[progId][cpId]);
    const level   = getLevel();
    const isProUp = level === 'pro' || level === 'complete';
    programsData.forEach(prog => {
      // v1.26.81 — the program's own tier decides the route. Previously only
      // Extended programs could gate anything; a 'complete' or Pro program
      // handed its packs to everyone through the program route.
      const progVis = programVisibility(prog.id);
      prog.sections.forEach((sec, si) => {
        if (!sec.packs || !sec.packs.some(p => p.key === packKey)) return;
        state.inAnyProgram = true;
        if (progVis === 'hidden') return;
        const secVis = sectionVisibility(prog, sec);
        if (secVis === 'hidden') return;
        // Section unlocked = every previous checkpoint passed
        for (let i = 0; i < si; i++) {
          const cp = prog.sections[i].checkpoint;
          if (cp && !cpPassed(prog.id, cp.id)) return;
        }
        // v1.26.56 — discovery rule. A pack in an unlocked section is trainable
        // inside the PROGRAM straight away; you need it to prepare for that
        // section's test. It only spreads to the rest of the app — the Packs
        // tab, Topics, search, favourites, folders — once that section's OWN
        // checkpoint is passed, so working through a program keeps revealing
        // new material. The program screen is unaffected: it has its own
        // isSectionUnlocked in app-ui.js and never calls packVisibility.
        // A section with no checkpoint has nothing to wait for, so it releases
        // as soon as it unlocks.
        const ownCp = sec.checkpoint;
        if (ownCp && !cpPassed(prog.id, ownCp.id)) {
          state.pendingRoute = true;
          if (secVis === 'available') state.pendingOpenRoute = true;
          return;
        }
        // A locked program (Pro badge, or Extended owned without Pro) offers a
        // locked route, not an open one. So does a Pro-only section inside an
        // otherwise free program.
        if (secVis === 'locked') state.lockedRoute = true;
        else state.availableRoute = true;
      });
    });
    return state;
  }

  // ── Pack visibility — the single source of truth for every surface ──────
  // 'available' — fully usable
  // 'locked'    — shown with a Pro badge; tapping shows the upgrade toast
  // 'hidden'    — not shown anywhere (packs, topics, search, favorites, folders)
  function packVisibility(packKey) {
    const level = getLevel();
    if (level === 'complete') return 'available';
    // v1.27.10 — an access code can open a single pack for a while, whatever
    // its minLevel says. Checked before everything else so it can reach even a
    // 'complete' pack: that is the point of a newsletter code, since a pack
    // nobody can otherwise get is the only kind worth giving away.
    if (packGranted(packKey)) return 'available';
    const cfg = PACK_CONFIG[packKey];
    const isProUp = level === 'pro';
    let standalone = 'none';
    if (cfg) {
      if (cfg.minLevel === 'extended') {
        // Extended packs require BOTH purchase and an active Pro plan
        if (!ownsExtended(packKey)) standalone = 'hidden';
        else standalone = isProUp ? 'available' : 'locked';
      } else if (cfg.minLevel === 'complete') {
        standalone = 'hidden';
      } else if (cfg.minLevel === 'program') {
        // v1.26.82 — the pack does not exist outside its program. It is not
        // shown greyed with a badge anywhere: a locked pack in the list is a
        // reminder of something you cannot do, while a pack that APPEARS when
        // you pass a checkpoint is a reward. The program route below is the
        // only thing that can turn this into 'available'.
        standalone = 'hidden';
      } else if (levelIndex(level) >= levelIndex(cfg.minLevel)) {
        standalone = 'available';
      } else {
        standalone = 'locked';
      }
    }
    const prog = _programState(packKey);
    if (standalone === 'available' || prog.availableRoute) return 'available';
    if (standalone === 'locked'    || prog.lockedRoute)    return 'locked';
    if (cfg || prog.inAnyProgram) return 'hidden';
    return 'available';   // unknown pack: no config, not in any program
  }

  function canAccess(packKey) {
    return packVisibility(packKey) === 'available';
  }

  function badgeLabel(packKey) {
    // Locked packs always upsell Pro (extended purchases also require Pro)
    if (packVisibility(packKey) === 'locked') {
      return { text: 'Pro', cls: 'pack-lock-badge--pro' };
    }
    const cfg = PACK_CONFIG[packKey];
    if (cfg && cfg.minLevel === 'extended') {
      return { text: 'Extended', cls: 'pack-lock-badge--extended' };
    }
    return null;
  }

  // Apply to all collection-card elements that have data-key
  function applyAccessLevel() {
    const curLevel = getLevel();
    document.querySelectorAll('.collection-card[data-key]').forEach(card => {
      // Skip cards not in Library (e.g. recommended, dashboard cards)
      if (!card.closest('#libTabPacks, #libTabTopics, #libTabFavorites')) return;
      const key = card.dataset.key;
      const vis = packVisibility(key);
      const oldBadge = card.querySelector('.pack-lock-badge');
      if (oldBadge) oldBadge.remove();
      card.style.display = (vis === 'hidden') ? 'none' : '';
      card.classList.toggle('collection-card--locked', vis === 'locked');
      if (vis === 'locked') {
        const badge = badgeLabel(key);
        if (badge) {
          const el = document.createElement('div');
          el.className = `pack-lock-badge ${badge.cls}`;
          el.textContent = badge.text;
          card.appendChild(el);
        }
        // Static listeners from app-core still fire, but showModeScreen's
        // access gate turns the tap into the upgrade toast.
        card.onclick = null;
        card.ontouchend = null;
      }
    });
    // Topics (13): hide topic groups with no visible pack. Complete shows
    // every topic, including empty ones.
    // v1.26.52: the counter is recomputed here rather than baked in by
    // renderTopics, so it always matches what the user can actually SEE.
    // Locked packs still show (keyhole badge) and therefore still count;
    // packs hidden entirely at this level do not. Empty topics keep their
    // "No packs yet" placeholder untouched.
    document.querySelectorAll('#libTabTopics .topic-group').forEach(group => {
      const visible = Array.from(group.querySelectorAll('.collection-card[data-key]'))
        .filter(c => c.style.display !== 'none').length;
      const countEl = group.querySelector('.topic-count:not(.topic-count--empty)');
      if (countEl) countEl.textContent = `${visible} pack${visible === 1 ? '' : 's'}`;
      if (curLevel === 'complete') { group.style.display = ''; return; }
      group.style.display = visible ? '' : 'none';
    });
    // v1.27.77 - THE RE-BIND THAT USED TO SIT HERE IS GONE.
    // It set card.onclick/.ontouchend on every accessible card in the Packs
    // tab, on top of the addEventListener that app-core.js already puts on
    // all 130 static cards at load. Both fired, so one tap opened the pack
    // TWICE: two progStartSession calls, two recordPackTrained, and - the
    // reason it was found - the first open showed the training-modes guide
    // and marked it seen, and the second open, seeing the flag, ran the
    // pack intro straight over the top of it. Coming in from the Packs tab
    // you therefore never saw that guide at all.
    // The cards are static HTML, so app-core's binding covers every one of
    // them, and it also sets the navigation context, which this one did not.
    // Group the Packs tab for freemium users (v1.26.71)
    applyLibraryGrouping();
    // Apply mode locks
    applyModeLocks();
    // Update nav button label (Upgrade ↔ Extended)
    updateNavUpgradeBtn();
    // Favorites lists are rendered from data, not static cards — refresh
    // them so visibility changes take effect there too.
    if (window._favRenderTab)  window._favRenderTab();
    if (window._favRenderDash) window._favRenderDash();
  }

  // ── Library grouping (v1.26.71) ───────────────────────────────────
  // "Available packs" over a list where most items wear a padlock reads as a
  // small lie. For freemium the list is split in two: what you can actually
  // train with, then what Pro adds — each alphabetical. Pro and Complete are
  // untouched, since there the heading is simply true.
  // Runs on every access-level change and is idempotent: it recomputes the
  // groups from scratch and reuses the same heading element.
  function applyLibraryGrouping() {
    const host = document.getElementById('libTabPacks');
    if (!host) return;
    const info       = host.querySelector('.tab-info');
    const topicsInfo = document.querySelector('#libTabTopics .tab-info');
    let heading      = document.getElementById('libProHeading');

    if (getLevel() !== 'freemium') {
      if (info)       info.textContent       = 'Available packs';
      if (topicsInfo) topicsInfo.textContent = 'Available packs organised by topics';
      if (heading) heading.remove();
      if (typeof sortPackCards === 'function') sortPackCards();   // back to one flat list
      return;
    }

    if (info)       info.textContent       = 'Available free packs';
    if (topicsInfo) topicsInfo.textContent = 'Packs organised by topics';

    const name = c => (c.querySelector('.collection-name') || {}).textContent || c.dataset.label || c.dataset.key;
    const free = [], pro = [], hidden = [];
    Array.from(host.querySelectorAll(':scope > .collection-card[data-key]')).forEach(c => {
      if (c.style.display === 'none')   hidden.push(c);   // extended/complete: not for this level
      else if (canAccess(c.dataset.key)) free.push(c);
      else                               pro.push(c);
    });
    const alpha = (a, b) => (typeof dsAlpha === 'function' ? dsAlpha(name(a), name(b)) : 0);
    free.sort(alpha);
    pro.sort(alpha);

    if (!pro.length) { if (heading) heading.remove(); }
    else if (!heading) {
      heading = document.createElement('div');
      heading.className = 'tab-info';
      heading.id = 'libProHeading';
      heading.textContent = 'Pro packs';
    }

    free.forEach(c => host.appendChild(c));
    if (pro.length && heading) host.appendChild(heading);
    pro.forEach(c => host.appendChild(c));
    hidden.forEach(c => host.appendChild(c));
  }

  function applyModeLocks() {
    const curLevel = getLevel();
    // applyModeLocks runs on every pack opening, and activeCollectionKey is
    // set by then — so the exception table can be read per pack. Both gates
    // (this one and launch() in app-core.js) read the same CSS class, so
    // toggling it here is enough to open the mode for real.
    const freeHere = MODE_FREE_FOR[window.activeCollectionKey] || [];
    // A code with `fullAccess` opens every mode for its own pack (v1.27.56).
    const fullHere = packGrantFull(window.activeCollectionKey);
    Object.entries(MODE_CONFIG).forEach(([id, cfg]) => {
      const el = document.getElementById(id);
      if (!el) return;
      const accessible = levelIndex(curLevel) >= levelIndex(cfg.minLevel)
                      || freeHere.indexOf(id) > -1
                      || fullHere;
      el.classList.toggle('mode-card--locked', !accessible);
      // Remove old badge
      const old = el.querySelector('.mode-lock-badge');
      if (old) old.remove();
      if (!accessible) {
        const badge = document.createElement('div');
        badge.className = 'mode-lock-badge pack-lock-badge pack-lock-badge--pro';
        badge.textContent = 'Pro';
        el.appendChild(badge);
        el.style.opacity = '0.45';
        el.style.cursor  = 'default';
        // Uppgift 20a — remove pointerEvents:none so click can fire toast
        el.style.pointerEvents = '';
        // Bind locked-click toast (idempotent via dataset flag)
        // Locked-mode taps are gated centrally in addModeListener's launch()
        // (app-core.js) — that path covers both touchend and click.
      } else {
        el.style.opacity = '';
        el.style.cursor  = '';
        el.style.pointerEvents = '';
      }
    });
  }

  // Load radio in developer settings
  function loadDevLevelUI() {
    const level = getLevel();
    const radio = document.getElementById(
      level === 'pro' ? 'devLevelPro' :
      level === 'freemium' ? 'devLevelFreemium' : 'devLevelComplete'
    );
    if (radio) radio.checked = true;
  }

  // Listen to radio changes
  ['devLevelComplete', 'devLevelPro', 'devLevelFreemium'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', () => {
      if (el.checked) {
        setLevel(el.value);
        // Mark the level as explicitly chosen so it overrides the
        // lifetime-pro auto-promotion in getLevel() (v1.26.44)
        localStorage.setItem('dev_level_forced', 'true');
        applyAccessLevel();
      }
    });
  });

  // Hook into navToSettings so radio is always current
  const _origNavToSettings = navToSettings;
  window.navToSettings = function() {
    _origNavToSettings();
    loadDevLevelUI();
    renderGrantStatus();
  };

  // ── Beta code field (v1.26.89) ───────────────────────────────────────────
  function renderGrantStatus(msg) {
    const row = document.getElementById('betaCodeStatusRow');
    const el  = document.getElementById('betaCodeStatus');
    if (!row || !el) return;
    const g = grantStatus();
    const nameOf = k => {
      const c = document.querySelector('.collection-card[data-key="' + k + '"]');
      return (c && c.dataset.label) || k;
    };
    const UNLOCK_LABEL = { extended: 'Extended store', programs: 'All programme parts' };
    const line = x => (x.kind === 'pack'   ? nameOf(x.pack)
                     : x.kind === 'unlock' ? (UNLOCK_LABEL[x.unlock] || x.unlock)
                     : (x.level === 'pro' ? 'Pro access' : x.level)) +
      ' \u2014 ' + (x.days === 0 ? 'expires today' : x.days + ' days left');
    const text = msg || (g ? (g.all || [g]).map(line).join('  \u00b7  ') : '');
    el.textContent = text;
    row.style.display = text ? '' : 'none';
  }

  (function bindBetaCode() {
    const btn = document.getElementById('betaCodeBtn');
    const inp = document.getElementById('betaCodeInput');
    if (!btn || !inp) return;
    const submit = () => {
      const res = redeemCode(inp.value);
      if (res.ok) { inp.value = ''; loadDevLevelUI(); }
      renderGrantStatus(res.message);
      if (res.ok) setTimeout(() => renderGrantStatus(), 2500);
    };
    btn.addEventListener('click', submit);
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') submit(); });
  })();

  // v1.27.61 \u2014 en knapp som lamnar tillbaka enheten till utgangslaget.
  // De tre sakerna som kan ha andrats sitter i tre olika system med tre olika
  // nycklar, och att veta vilken som gav en ett visst pack ar inte anvandarens
  // jobb. Den har tar dem alla och sager vad den tog.
  (function bindResetAccess() {
    const btn = document.getElementById('resetAccessBtn');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const parts = [];
      const res = clearGrant();                      // niva- och packgrants
      if (res.level) parts.push('level code');
      if (res.packs.length) parts.push(res.packs.length + ' pack grant'
        + (res.packs.length === 1 ? '' : 's'));
      if (res.unlocks && res.unlocks.length) parts.push(res.unlocks.length + ' unlock code'
        + (res.unlocks.length === 1 ? '' : 's'));

      const store = (() => {
        try { return (JSON.parse(localStorage.getItem('ds_redeemed_codes')) || []).length; }
        catch (e) { return 0; }
      })();
      if (store) parts.push(store + ' store code' + (store === 1 ? '' : 's'));
      localStorage.removeItem('ds_redeemed_codes');

      ['ds_owned', 'ds_extended_owned'].forEach(k => {
        try {
          const n = (JSON.parse(localStorage.getItem(k)) || []).length;
          if (n) parts.push(n + ' purchase' + (n === 1 ? '' : 's'));
        } catch (e) {}
        localStorage.removeItem(k);
      });

      localStorage.setItem(LEVEL_KEY, 'freemium');
      localStorage.setItem('dev_level_forced', 'true');
      applyAccessLevel();
      loadDevLevelUI();
      if (window.renderExtendedStore) renderExtendedStore();
      const msg = parts.length
        ? 'Cleared: ' + parts.join(', ') + '. Back to freemium.'
        : 'Nothing to clear \u2014 already at freemium with no codes.';
      renderGrantStatus(msg);
      if (window.showToast) showToast(msg);
      setTimeout(() => renderGrantStatus(), 12000);
    });
  })();

  (function bindClearGrant() {
    const btn = document.getElementById('clearGrantBtn');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const res = clearGrant();
      loadDevLevelUI();
      // v1.28.97 \u2014 tre sorters grant nu, sa meddelandet byggs av delar
      // i stallet for att rakna upp kombinationerna.
      const bits = [];
      if (res.level) bits.push('level code');
      if (res.packs.length) bits.push(res.packs.length + ' pack grant'
        + (res.packs.length === 1 ? '' : 's'));
      if (res.unlocks && res.unlocks.length) bits.push(res.unlocks.length + ' unlock code'
        + (res.unlocks.length === 1 ? '' : 's'));
      let msg = 'No access code to clear.';
      if (bits.length) {
        msg = 'Cleared: ' + bits.join(', ') + '.'
            + (res.level ? ' Back to freemium.' : ' Your level is unchanged.');
      }
      renderGrantStatus(msg);
      // v1.27.60 \u2014 2,5 s var for kort: knappen sag ut att inte gora
      // nagot alls, for meddelandet hann forsvinna innan man last det.
      setTimeout(() => renderGrantStatus(), 12000);
    });
  })();

  // ── Nav upgrade/extended button ──────────────────────────────────────────────
  function updateNavUpgradeBtn() {
    const btn   = document.getElementById('navUpgradeBtn');
    const icon  = btn && btn.querySelector('.nav-tab-icon i');
    const label = btn && btn.querySelector('.nav-tab-label');
    if (!btn) return;
    const level = getLevel();
    if (level === 'freemium') {
      btn.dataset.tab      = 'upgrade';
      btn.className        = 'nav-tab nav-tab--upgrade';
      if (icon)  icon.className  = 'ti ti-crown';
      if (label) label.textContent = 'Upgrade';
    } else {
      btn.dataset.tab      = 'extended';
      btn.className        = 'nav-tab nav-tab--extended';
      if (icon)  icon.className  = 'ti ti-diamond';
      if (label) label.textContent = 'Extended';
    }
  }

  // Expose for other modules
  // `codes` is exposed read-only so the registry document can be checked
  // against the real table rather than kept in step by hand.
  // v1.27.46 — the programme route, asked as a question.
  //
  // canAccess() answers for the app at large, and it is right to say no here:
  // a pack whose Part is unlocked but whose checkpoint is unpassed must NOT
  // turn up in the Packs tab, Topics, search, favourites or folders. That is
  // the discovery rule, and passing the checkpoint is what releases it.
  //
  // But the programme screen is a different surface with a different answer,
  // and it had no way to say so: it opened packs through showModeScreen, which
  // asks canAccess and refused. A freemium user who had passed Part 1 of
  // Conversation Foundations was told "This pack requires Pro" on the two
  // packs Part 2 had just handed them — and the forward arrow skipped straight
  // past them to the next test. Both now ask this instead.
  function programRoutePending(packKey) { return !!_programState(packKey).pendingOpenRoute; }

  window.accessLevel = { getLevel, canAccess, badgeLabel, applyModeLocks, updateNavUpgradeBtn, packVisibility, programVisibility, sectionVisibility, programRoutePending, applyAccessLevel, redeemCode, grantStatus, clearGrant, packGranted, packGrantFull, ownsExtended, checkpointsUnlocked, codes: ACCESS_CODES };
  window._applyAccessLevel = applyAccessLevel;

  // Init
  loadDevLevelUI();
  applyAccessLevel();
  updateNavUpgradeBtn();

  // Re-apply mode locks whenever mode screen becomes visible
  const _modeScreenEl = document.getElementById('modeScreen');
  if (_modeScreenEl) {
    new MutationObserver(() => {
      if (_modeScreenEl.style.display === 'flex') applyModeLocks();
    }).observe(_modeScreenEl, { attributes: true, attributeFilter: ['style'] });
  }

})();

// ─── INPUT BUNDLES ──────────────────────────────────────────────────────────────

// Bundle definitions — keyed by packKey only (applies to whole pack in a mode)
// Bundle definitions per pack.
// tier: 'free'     — alltid aktivt för alla, ingen toggle
// tier: 'pro'      — aktivt för pro+, ingen toggle (free+pro bundles ersätter free-only)
// tier: 'pro-opt'  — valbar toggle för pro+-användare
// tier: 'extended' — valbar toggle om köpt via Extended store
const BUNDLE_DEFS = {
  assertive: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
    {
      id: 'workplace',
      tier: 'pro-opt',
      name: 'Workplace & Social',
      description: 'Professional situations — colleagues, managers and meetings.',
    },
    // v1.27.48 — var `extended`, alltså en toggle som först måste köpas i
    // Extended-butiken. Butiksvaran är borttagen och innehållet ingår nu i
    // packet: samma tier som systerbunten `workplace`, en valbar toggle för
    // Pro utan köp. Ingen data har flyttats — korten är taggade `domestic`
    // som förut, det är bara grinden framför dem som är borta.
    {
      id: 'domestic',
      tier: 'pro-opt',
      name: 'Domestic Situations',
      description: 'Home and close relationships — partners, family and housemates.',
    },
  ],
  humourpractise: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
    {
      id: 'family',
      tier: 'pro-opt',
      name: 'Family & Get-Togethers',
      description: 'Family dinners, reunions and holidays — same moves, home context.',
    },
  ],
  setupstatement: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  apologizing2: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  startingconversations3: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  endingconversations: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  reactingtounexpectedstatements: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  deepquestions: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  howtointerrupt: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  handleinterruptions: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  validation: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  supportingconversations: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  describethings: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  explainthings: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  givingexamples: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  storytellingwiththesixws: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  storiesinconversation: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  praiseandencouragement: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  givingcriticism: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  receivingfeedbackandcriticism: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  apologizing1: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  agreeing: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  disagreeing: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  persuasionandinfluence1: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  persuasionandinfluence2: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  negotiationandcompromise: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  brokenrecord: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
    {
      id: 'services',
      tier: 'pro-opt',
      name: 'Services',
      description: '',
    },
    {
      id: 'family',
      tier: 'extended',
      name: 'Family',
      description: '',
    },
  ],
  respondingtopassiveaggression: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  makingrequests: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  sayingno: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  emotionlabellingandregulation: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  conflictemotions: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  rolebasedhumour: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  masculine2: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  masculine3: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  masculine4: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  masculine5: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  masculine6: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  masculinesv: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  parenting1: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  parenting2: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  parenting3: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  parenting4: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  parenting5: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  praxframe1: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  praxframe2: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  praxframe3: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  praxframe4: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  praxframe5: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  praxdread1: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  praxdread2: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  praxdread3: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  praxdread4: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  praxdread5: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  listeningthroughquestions: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  showunderstanding2: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  setupquestion: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  givingcounterexamples: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  discussing: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  storybanter: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  explainthings2: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  buildingastory: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  reframing: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  danbacon1: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  danbacon2: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  danbacon3: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  danbacon4: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  oconnor1: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  oconnor2: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  oconnor3: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  oconnor4: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  oconnor5: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  oconnor6: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  oconnor7: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  jimmy1: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  jimmy2: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  jimmy3: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  jimmy4: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  jimmy5: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  jimmy6: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  toddv1: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  toddv2: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  toddv3: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  toddv4: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  toddv5: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  firststrategies: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
  ],
  jfisher1: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  jfisher2: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  talkingaboutyourself: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  startingconversations1: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  startingconversations2: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  startingconversations4: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  showunderstanding: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  exploringatopic: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  changingtopics: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  complimenting: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  responsivehumour: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  assertivecomm1: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  assertivecomm2: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  assertivecommadv: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  integratedmaster: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  counseling1: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  counseling2: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  seenandtrusted2careshedidnotaskf: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  seenandtrusted3askingtobetrusted: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  seenandtrusted1thesafetyshereads: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  masculine1: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  askingforclarity: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  calibratinghumour: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  brokenpromises: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  askingpermission: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  toneinmessages: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  replyingandnotreplying: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  whentostoptyping: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  alexandergrace1: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  alexandergrace2: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  alexandergrace3: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  alexandergrace4: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  alexandergrace5: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  alexandergrace6: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  alexandergrace7: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
  alexandergrace8: [
    {
      id: 'free',
      tier: 'free',
      name: 'Free Bundle',
      description: '',
    },
    {
      id: 'pro',
      tier: 'pro',
      name: 'Pro Bundle',
      description: '',
    },
  ],
};
window.BUNDLE_DEFS = BUNDLE_DEFS;

// Bundle state storage: key = 'bundles:{packKey}'
// Only stores user-toggled pro-opt and extended bundles
function getBundleState(packKey) {
  const k = `bundles:${packKey}`;
  try { return JSON.parse(localStorage.getItem(k)); } catch { return null; }
}

function setBundleState(packKey, state) {
  const k = `bundles:${packKey}`;
  localStorage.setItem(k, JSON.stringify(state));
}

// Get active bundle IDs for a pack, based on access level
function getActiveBundles(packKey) {
  const defs = BUNDLE_DEFS[packKey];
  if (!defs) return null;

  const level = (window.accessLevel && window.accessLevel.getLevel())
              || localStorage.getItem('dev_access_level') || 'freemium';
  const extOwned = (() => {
    try { return JSON.parse(localStorage.getItem('ds_extended_owned')) || []; }
    catch { return []; }
  })();

  const ownsExt = (id) => (window.accessLevel && window.accessLevel.ownsExtended)
    ? window.accessLevel.ownsExtended(id) : extOwned.includes(id);
  const isExtendedBundleOwned = (bundleId) =>
    level === 'complete' || ownsExt(`${packKey}::${bundleId}`);

  // v1.27.56 — a pack opened by a `fullAccess` code counts as pro for its own
  // bundles. Extended bundles stay out: those are bought, not granted.
  const fullPack = !!(window.accessLevel && window.accessLevel.packGrantFull
                   && window.accessLevel.packGrantFull(packKey));

  const canUseTier = (tier, bundleId) => {
    if (tier === 'free') return true;
    if (tier === 'pro' || tier === 'pro-opt') return fullPack || level === 'pro' || level === 'complete';
    // Extended bundles require pro/complete level AND ownership —
    // freemium always sees only the free bundle
    if (tier === 'extended') return (level === 'pro' || level === 'complete') && isExtendedBundleOwned(bundleId);
    return false;
  };

  const saved = getBundleState(packKey) || [];
  const proOffMarker = saved.includes('pro:off');
  const hasProBundle = defs.some(b => b.tier === 'pro');
  const hasFreeBundle = defs.some(b => b.tier === 'free');
  const isPro = canUseTier('pro', 'pro');

  // Base bundles (auto, not toggleable).
  // The free bundle is tied to the pro bundle: pro's cards are the EXTRAS on
  // top of free, so together they form the "pro experience". When a pro user
  // turns the pro bundle off, free goes with it — only explicitly enabled
  // bundles (workplace/domestic etc.) remain. Free stands alone only for
  // freemium users, or in packs that have no pro bundle at all.
  let base = [];
  const proOn = isPro && hasProBundle && !proOffMarker;
  if (proOn) {
    if (hasFreeBundle) base.push('free');
    base.push('pro');
  } else if (!isPro || !hasProBundle) {
    // Freemium, or pack without a pro bundle: free is the standalone base
    if (hasFreeBundle) base.push('free');
  }
  // (isPro && hasProBundle && proOffMarker => no base; only toggled bundles show)

  // Opt-in bundles (pro-opt and owned extended) if saved
  const toggleable = defs.filter(b =>
    (b.tier === 'pro-opt' || b.tier === 'extended') &&
    canUseTier(b.tier, b.id) &&
    saved.includes(b.id)
  ).map(b => b.id);

  const result = [...new Set([...base, ...toggleable])];
  if (result.length === 0) {
    // Safety net — the UI enforces "at least one bundle active", but if state
    // ends up empty anyway (e.g. Clear Extended Purchases removed the only
    // active bundle while pro:off lingered) fall back to the default view
    // rather than an empty screen.
    return isPro && hasProBundle ? ['free', 'pro'] : ['free'];
  }
  return result;
}

// Filter inputs/cards by active bundle IDs.
// Only shows cards whose bundle is in the active list.
// Cards without a bundle field are always shown (backwards compatible).
window.filterInputsByBundle = function(inputs, packKey) {
  const defs = BUNDLE_DEFS[packKey];
  if (!defs) return inputs;
  const active = getActiveBundles(packKey);
  if (!active) return inputs;
  // Stable sort by bundle order in BUNDLE_DEFS (untagged cards count as free)
  const order = id => defs.findIndex(b => b.id === id);
  return inputs
    .filter(inp => !inp.bundle || active.includes(inp.bundle))
    .sort((a, b) => order(a.bundle) - order(b.bundle));
};

window.filterCardsByBundle = function(cards, packKey) {
  const defs = BUNDLE_DEFS[packKey];
  if (!defs) return cards;
  const active = getActiveBundles(packKey);
  if (!active) return cards;
  const order = id => defs.findIndex(b => b.id === id);
  return cards
    .filter(c => !c.bundle || active.includes(c.bundle))
    .sort((a, b) => order(a.bundle) - order(b.bundle));
};

// Render Input Bundles section into a settings panel
// Render Input Bundles section into a settings panel
// Bundle description text (v1.26.50)
// BUNDLE_DEFS carries only mode-neutral flavour text. The counts shown in a
// settings screen are computed here from the real data for whichever mode is
// open, so a bundle can never claim "2 sequences" while you are standing in
// Single Strategy. Freemium can only reach Single Strategy and Memorize (see
// MODE_CONFIG), so only those two modes say "free for everyone"; every other
// mode — and all handsfree modes — needs Pro, so the text there just states
// the amount.
const BUNDLE_MODES = {
  trainingScreen: { src: () => (typeof collections          !== 'undefined' ? collections          : null), items: 'inputs', unit: ['input','inputs'],       per: 'per strategy', freeMode: true  },
  memScreen:      { src: () => (typeof memorizeCollections   !== 'undefined' ? memorizeCollections   : null), items: 'cards',  unit: ['card','cards'],         per: 'per strategy', freeMode: true  },
  flowScreen:     { src: () => (typeof multiStepCollections  !== 'undefined' ? multiStepCollections  : null), items: 'inputs', unit: ['scenario','scenarios'], per: 'per sequence', freeMode: false },
  challScreen:    { src: () => (typeof challengesCollections !== 'undefined' ? challengesCollections : null), items: 'inputs', unit: ['input','inputs'],       per: 'per category', freeMode: false },
  mindScreen:     { src: () => (typeof mindsetCollections    !== 'undefined' ? mindsetCollections    : null), items: 'inputs', unit: ['card','cards'],         per: 'per unit',     freeMode: false },
  collScreen:     { src: () => (typeof collectionsModeData   !== 'undefined' ? collectionsModeData   : null), items: 'inputs', unit: ['input','inputs'],       per: 'per set',      freeMode: false },
};
// Handsfree screens read the same data, but none of them are free.
const BUNDLE_MODE_ALIASES = {
  hfScreen: 'trainingScreen', hfMemScreen: 'memScreen', hfFlowScreen: 'flowScreen',
  hfChallScreen: 'challScreen', hfMindScreen: 'mindScreen', hfCollScreen: 'collScreen',
};

function activeBundleMode() {
  const shown = id => {
    const el = document.getElementById(id);
    return !!(el && el.style.display && el.style.display !== 'none');
  };
  for (const id of Object.keys(BUNDLE_MODES)) {
    if (shown(id)) return BUNDLE_MODES[id];
  }
  for (const hf of Object.keys(BUNDLE_MODE_ALIASES)) {
    if (shown(hf)) {
      const base = BUNDLE_MODES[BUNDLE_MODE_ALIASES[hf]];
      return base ? Object.assign({}, base, { freeMode: false }) : null;
    }
  }
  return null;
}

// How many cards/inputs a bundle contributes PER GROUP in the open mode.
// Bundles are always described per strategy/sequence/etc., never as a grand
// total: 5 strategies with 5 free inputs each is "5 per strategy", not 25.
// Groups that don't carry the bundle at all are ignored, so a bonus group
// (e.g. Memorize's pro-only "Beyond the Strategies") can't drag the figure
// off. If the remaining groups still disagree, use the most common value.
// Untagged cards count as free, matching filterInputsByBundle.
function typicalCount(counts) {
  const nz = counts.filter(n => n > 0);
  if (!nz.length) return 0;
  if (new Set(nz).size === 1) return nz[0];
  const freq = {};
  nz.forEach(n => { freq[n] = (freq[n] || 0) + 1; });
  let best = nz[0], bestFreq = 0;
  Object.keys(freq).forEach(k => {
    const n = Number(k), f = freq[k];
    if (f > bestFreq || (f === bestFreq && n > best)) { best = n; bestFreq = f; }
  });
  return best;
}

function countBundleItems(packKey, mode, bundleId) {
  const src = mode && mode.src();
  const groups = src && src[packKey];
  if (!Array.isArray(groups) || !groups.length) return null;
  const counts = groups.map(g => {
    const items = g && g[mode.items];
    if (!Array.isArray(items)) return 0;
    return items.filter(it => (it && it.bundle ? it.bundle : 'free') === bundleId).length;
  });
  const per = typicalCount(counts);
  if (!per) return null;
  return { per, groups: counts.length, carrying: counts.filter(n => n > 0).length };
}

function bundleDescFor(packKey, bundle) {
  const flavour = (bundle.description || '').trim();
  const mode = activeBundleMode();
  const c = mode ? countBundleItems(packKey, mode, bundle.id) : null;
  if (!c) return flavour;

  const amount = c.per;
  const unit   = amount === 1 ? mode.unit[0] : mode.unit[1];
  const scope  = c.groups > 1 ? ' ' + mode.per : '';
  let line;

  if (bundle.tier === 'free') {
    line = `${amount} ${unit}${scope}` + (mode.freeMode ? ' \u2014 free for everyone.' : '.');
  } else if (bundle.tier === 'pro') {
    const free = countBundleItems(packKey, mode, 'free');
    const freeAmount = free ? free.per : 0;
    line = freeAmount
      ? `${amount} more ${unit}${scope} \u2014 ${freeAmount + amount} in total` + (mode.freeMode ? ' with Pro.' : '.')
      : `${amount} ${unit}${scope}` + (mode.freeMode ? ' \u2014 unlocked with Pro.' : '.');
  } else {
    line = `${amount} ${unit}${scope}.`;
  }
  return flavour ? `${line} ${flavour}` : line;
}

window.renderBundleSection = function(containerEl, packKey) {
  const defs = BUNDLE_DEFS[packKey];
  const old = containerEl.querySelector('.bundle-section');
  if (old) old.remove();

  const section = document.createElement('div');
  section.className = 'bundle-section';
  section.innerHTML = `<div class="bundle-section-title">Input Bundles</div>`;

  if (!defs || !defs.length) {
    section.innerHTML += `<div style="font-size:13px;color:#bbb;padding:8px 0;">No extra bundles available for this pack yet.</div>`;
    containerEl.appendChild(section);
    return;
  }

  const level = (window.accessLevel && window.accessLevel.getLevel())
              || localStorage.getItem('dev_access_level') || 'freemium';
  const extOwned = (() => {
    try { return JSON.parse(localStorage.getItem('ds_extended_owned')) || []; }
    catch { return []; }
  })();
  const canUseTier = (tier, bundleId) => {
    if (tier === 'free') return true;
    if (tier === 'pro' || tier === 'pro-opt') return level === 'pro' || level === 'complete';
    if (tier === 'extended') return level === 'complete' ||
      (level === 'pro' && ((window.accessLevel && window.accessLevel.ownsExtended)
        ? window.accessLevel.ownsExtended(`${packKey}::${bundleId}`)
        : extOwned.includes(`${packKey}::${bundleId}`)));
    return false;
  };

  const isPro = level === 'pro' || level === 'complete';
  const hasProBundle = defs.some(b => b.tier === 'pro');
  const saved = getBundleState(packKey) || [];
  const active = getActiveBundles(packKey);

  // Brief inline hint when a toggle is blocked ("at least one bundle")
  function showBundleHint() {
    let hint = section.querySelector('.bundle-hint');
    if (!hint) {
      hint = document.createElement('div');
      hint.className = 'bundle-hint';
      hint.style.cssText = 'font-size:12px;color:var(--ds-acc,#B05A28);padding:6px 2px 0;transition:opacity 0.4s;';
      section.appendChild(hint);
    }
    hint.textContent = 'At least one bundle must be active.';
    hint.style.opacity = '1';
    clearTimeout(hint._t);
    hint._t = setTimeout(() => { hint.style.opacity = '0'; }, 2200);
  }

  defs.forEach(bundle => {
    // Swap in the mode-aware description before any row is built, so all
    // five row templates below show counts that match the open mode.
    bundle = Object.assign({}, bundle, { description: bundleDescFor(packKey, bundle) });
    const accessible = canUseTier(bundle.tier, bundle.id);
    const row = document.createElement('div');

    if (bundle.tier === 'free') {
      if (hasProBundle && isPro) return; // hidden for pro — filter includes free cards automatically
      row.innerHTML = `
        <div class="bundle-row bundle-row--auto">
          <div class="bundle-info">
            <div class="bundle-name">${bundle.name}</div>
            <div class="bundle-desc-preview">${bundle.description}</div>
          </div>
          <span class="bundle-status">Active</span>
        </div>`;

    } else if (bundle.tier === 'pro') {
      if (!accessible) {
        // Freemium: locked with Pro badge
        row.innerHTML = `
          <div class="bundle-row bundle-row--locked">
            <div class="bundle-info">
              <div class="bundle-name">${bundle.name}</div>
              <div class="bundle-desc-preview">${bundle.description}</div>
            </div>
            <span class="bundle-status bundle-status--locked">Pro</span>
          </div>`;
      } else {
        // Pro users: toggleable — can switch off if another bundle is on
        const isOn = active.includes(bundle.id);
        row.innerHTML = `
          <div class="bundle-row">
            <div class="bundle-info">
              <div class="bundle-name">${bundle.name}</div>
              <div class="bundle-desc-preview">${bundle.description}</div>
            </div>
            <label class="toggle"><input type="checkbox" class="bundle-toggle" data-bundle="${bundle.id}" ${isOn ? 'checked' : ''} /><span class="toggle-slider"></span></label>
          </div>`;
        const toggle = row.querySelector('.bundle-toggle');
        if (toggle) {
          toggle.addEventListener('change', function() {
            const cur = getBundleState(packKey) || [];
            if (!this.checked) {
              // Turning pro off also removes free (they belong together), so
              // at least one other bundle must be active to take over.
              const otherActive = defs.some(b =>
                (b.tier === 'pro-opt' || b.tier === 'extended') &&
                canUseTier(b.tier, b.id) &&
                cur.includes(b.id)
              );
              if (!otherActive) { this.checked = true; showBundleHint(); return; }
              setBundleState(packKey, [...cur.filter(id => id !== 'pro:off'), 'pro:off']);
            } else {
              // Remove pro:off marker to re-enable pro (free follows along)
              setBundleState(packKey, cur.filter(id => id !== 'pro:off'));
            }
          });
        }
      }

    } else if (bundle.tier === 'pro-opt' || bundle.tier === 'extended') {
      if (!accessible) {
        // Extended bundles the user bought stay listed when Pro lapses,
        // with a Pro badge and an upgrade toast (yearly Pro model).
        const ownedExt = bundle.tier === 'extended' && extOwned.includes(`${packKey}::${bundle.id}`);
        if (!ownedExt) return;
        row.innerHTML = `
          <div class="bundle-row bundle-row--locked">
            <div class="bundle-info">
              <div class="bundle-name">${bundle.name}</div>
              <div class="bundle-desc-preview">${bundle.description}</div>
            </div>
            <span class="bundle-status bundle-status--locked">Pro</span>
          </div>`;
        row.addEventListener('click', () => {
          if (window.showToast) showToast('This bundle requires Pro. Upgrade to unlock it.');
        });
        section.appendChild(row);
        return;
      }
      const isOn = active.includes(bundle.id);
      row.innerHTML = `
        <div class="bundle-row">
          <div class="bundle-info">
            <div class="bundle-name">${bundle.name}</div>
            <div class="bundle-desc-preview">${bundle.description}</div>
          </div>
          <label class="toggle"><input type="checkbox" class="bundle-toggle" data-bundle="${bundle.id}" ${isOn ? 'checked' : ''} /><span class="toggle-slider"></span></label>
        </div>`;
      const toggle = row.querySelector('.bundle-toggle');
      if (toggle) {
        toggle.addEventListener('change', function() {
          const cur = getBundleState(packKey) || [];
          if (!this.checked) {
            // At least one bundle must stay active: pro (which carries free),
            // another opt-in/extended bundle — or, in packs without a pro
            // bundle, the standalone free base.
            const proIsOn = hasProBundle && isPro && !cur.includes('pro:off');
            const otherOptActive = defs.some(b =>
              b.id !== bundle.id &&
              (b.tier === 'pro-opt' || b.tier === 'extended') &&
              canUseTier(b.tier, b.id) &&
              cur.includes(b.id)
            );
            const freeStandsAlone = !hasProBundle && defs.some(b => b.tier === 'free');
            if (!proIsOn && !otherOptActive && !freeStandsAlone) {
              this.checked = true; showBundleHint(); return;
            }
            setBundleState(packKey, cur.filter(id => id !== bundle.id));
          } else {
            setBundleState(packKey, [...new Set([...cur, bundle.id])]);
          }
        });
      }
    }  // end else if pro-opt/extended

    if (row.innerHTML) section.appendChild(row);
  });

  containerEl.appendChild(section);
};

// ─── INPUT COUNTER DEFAULT (v1.26.44) ─────────────────────────────────────
// Global user setting: whether the input counter starts ON in every training
// mode. Applied to all mode checkboxes at startup; the per-mode toggles still
// work as session overrides, exactly as before.
(function initInputCounterDefault() {
  const IC_KEY  = 'ds_input_counter_default';
  const toggle  = document.getElementById('inputCounterDefaultToggle');
  const MODE_CBS = ['showInputCounter', 'hfShowInputCounter', 'hfMemShowInputCounter',
                    'hfChallShowInputCounter', 'hfFlowShowInputCounter',
                    'hfMindShowInputCounter', 'hfCollShowInputCounter'];

  // Default is ON unless the user has turned the global setting off
  function icDefault() { return localStorage.getItem(IC_KEY) !== 'false'; }

  function applyDefaults() {
    const on = icDefault();
    MODE_CBS.forEach(id => {
      const cb = document.getElementById(id);
      if (cb) cb.checked = on;
    });
    if (typeof applyInputCounterVisibility === 'function') applyInputCounterVisibility();
    if (typeof applyHfInputCounterVisibility === 'function') applyHfInputCounterVisibility();
    if (toggle) toggle.checked = on;
  }

  if (toggle) {
    toggle.addEventListener('change', () => {
      localStorage.setItem(IC_KEY, toggle.checked ? 'true' : 'false');
      applyDefaults();
    });
  }

  applyDefaults();
})();

// ─── PROGRESS BAR ──────────────────────────────────────────────────────────────

(function initProgressBar() {
  const PB_KEY = 'showProgressBar';
  const toggle = document.getElementById('showProgressBar');

  // ─ Apply / read setting ────────────────────────────────────────────
  function pbEnabled() { return localStorage.getItem(PB_KEY) === 'true'; }

  function applyPb() {
    document.body.classList.toggle('pb-enabled', pbEnabled());
    if (toggle) toggle.checked = pbEnabled();
  }

  if (toggle) {
    toggle.addEventListener('change', () => {
      localStorage.setItem(PB_KEY, toggle.checked);
      applyPb();
    });
  }

  applyPb();

  // ─ Update fill on a divider ────────────────────────────────────────
  // current = 0-based index, total = total items
  window.pbUpdate = function(dividerEl, current, total) {
    if (!dividerEl) return;
    const pct = total > 1 ? (current / (total - 1)) * 100 : 100;
    dividerEl.style.setProperty('--pb-fill', pct.toFixed(2));
  };

  // ─ Jump on click/touch ─────────────────────────────────────────────
  window.pbBindClick = function(dividerEl, total, jumpFn, isPlaying) {
    if (!dividerEl) return;
    function handleSeek(clientX) {
      if (!pbEnabled()) return;
      if (typeof isPlaying === 'function' && isPlaying()) return;
      const rect = dividerEl.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const idx = Math.round(ratio * (total() - 1));
      jumpFn(idx);
    }
    dividerEl.addEventListener('click', e => handleSeek(e.clientX));
    dividerEl.addEventListener('touchend', e => {
      e.preventDefault();
      handleSeek(e.changedTouches[0].clientX);
    }, { passive: false });
  };

})();

// NOTE (v1.25.0): The render/progress-bar monkey-patch block that used to
// live here has been removed. It referenced functions from the deleted beta
// modes (msRender, guidedRender) which threw a ReferenceError at load time
// and silently killed everything below this point (feedback hooks, tag mode,
// Clear Extended Purchases, al-suggest mode). Feedback bars, access-level
// bars and progress-bar updates are now built into mode-engine.js.

// ── ACCESS LEVEL SUGGEST MODE ────────────────────────────────────────────────
let alSuggestMode = localStorage.getItem('alSuggestMode') === 'true';
const alSuggestToggle = document.getElementById('accessLevelSuggestToggle');

function applyAlSuggestMode() {
  document.body.classList.toggle('al-suggest-mode', alSuggestMode);
  if (alSuggestToggle) alSuggestToggle.checked = alSuggestMode;
}
applyAlSuggestMode();

if (alSuggestToggle) {
  alSuggestToggle.addEventListener('change', () => {
    alSuggestMode = alSuggestToggle.checked;
    localStorage.setItem('alSuggestMode', alSuggestMode);
    // Exclusive with feedback mode
    if (alSuggestMode && feedbackMode) {
      feedbackMode = false;
      localStorage.setItem('feedbackMode', 'false');
      if (feedbackModeToggle) feedbackModeToggle.checked = false;
      document.body.classList.remove('feedback-mode');
    }
    applyAlSuggestMode();
    if (window.updateModeGearVisibility) window.updateModeGearVisibility();
  });
}

// ── AL KEY HELPERS ───────────────────────────────────────────────────────────
// Key: al_{packKey}_{screen}_{stratId}_{cardId}_{side}
// Pack-level key: al_pack_{packKey}
function alKey(screen, stratId, cardId, side) {
  return 'al_' + (window.activeCollectionKey||'') + '_' + screen + '_' + stratId + '_' + cardId + '_' + side;
}
window.alKey = alKey;
function alGet(key) {
  try { const v = localStorage.getItem(key); return v !== null ? parseInt(v) : null; } catch { return null; }
}
function alSet(key, val) {
  try { localStorage.setItem(key, val); } catch {}
}
function alPackKey(packKey) { return `al_pack_${packKey}`; }

// ── AL BAR RENDER & INIT ─────────────────────────────────────────────────────
const AL_LABELS = { 1: 'Free', 2: 'Pro', 3: 'Extended' };

function alRender(barId, key) {
  const bar = document.getElementById(barId);
  if (!bar) return;
  bar.dataset.alKey = key;
  const saved = alGet(key);
  bar.querySelectorAll('.al-btn').forEach(btn => {
    const v = parseInt(btn.dataset.val);
    btn.classList.remove('al-selected', 'al-dimmed');
    if (saved === null) return;
    if (v === saved) btn.classList.add('al-selected');
    else btn.classList.add('al-dimmed');
  });
}
window.alRender = alRender;

function alInitBar(barId) {
  const bar = document.getElementById(barId);
  if (!bar) return;
  bar.querySelectorAll('.al-btn').forEach(btn => {
    const handler = e => {
      e.stopPropagation();
      const key = bar.dataset.alKey;
      if (!key) {
        // Key not set yet — bar hasn't been rendered with current card.
        // Force a render using current app state if possible.
        const screenId = barId.replace('al-','').replace('-front','').replace('-back','');
return;
      }
      alSet(key, parseInt(btn.dataset.val));
      alRender(barId, key);
    };
    btn.addEventListener('click', handler);
    btn.addEventListener('touchend', e => { e.preventDefault(); e.stopPropagation(); handler(e); }, { passive: false });
  });
}
window.alInitBar  = alInitBar;
window.alKey      = alKey;
window.alPackKey  = alPackKey;

// Init all al-bars on cards
['al-single-front','al-single-back','al-mem-front','al-mem-back',
 'al-flow-front','al-flow-back','al-chall-front','al-chall-back',
 'al-mind-front','al-mind-back','al-coll-front','al-coll-back'].forEach(alInitBar);

// Pack-level al-bar
const alPackBar = document.getElementById('al-pack-bar');
// Init feedback pack bar
const fbPackBar = document.getElementById('fb-pack-bar');
if (fbPackBar) {
  fbPackBar.querySelectorAll('.fb-btn').forEach(btn => {
    const handler = e => {
      e.stopPropagation();
      const key = fbPackBar.dataset.fbKey;
      if (!key) return;
      fbSet(key, parseInt(btn.dataset.val));
      fbRender('fb-pack-bar', key);
    };
    btn.addEventListener('click', handler);
    btn.addEventListener('touchend', e => { e.preventDefault(); e.stopPropagation(); handler(e); }, { passive: false });
  });
  fbPackBar.dataset.fbKey = '';
}

if (alPackBar) {
  alPackBar.querySelectorAll('.al-btn').forEach(btn => {
    const handler = e => {
      e.stopPropagation();
      const key = alPackBar.dataset.alKey;
      if (!key) return;
      alSet(key, parseInt(btn.dataset.val));
      alRender('al-pack-bar', key);
    };
    btn.addEventListener('click', handler);
    btn.addEventListener('touchend', e => { e.preventDefault(); e.stopPropagation(); handler(e); }, { passive: false });
  });
}

// ── WHICH REVIEW MODES ARE ON — ONE ANSWER, NOT THREE ────────────────────────
// (v1.27.19)
//
// `feedbackMode` and `alSuggestMode` are file-scope `let`s in THIS file and
// have never been on window; `tagMode` is read from localStorage in three
// different places. app-ui.js draws the programme screen and could see none of
// them, so its gear checked `window.feedbackMode` — permanently undefined —
// and only ever appeared in tag mode. That is the bug Rikard hit: the gear was
// there for tags and missing for feedback, which looks like a rendering
// problem and is actually a scope one.
function dsReviewModes() {
  return {
    feedback: !!feedbackMode,
    al:       !!alSuggestMode,
    tag:      localStorage.getItem('tagMode') === 'true',
    get any() { return this.feedback || this.al || this.tag; },
  };
}
window.dsReviewModes = dsReviewModes;

// The programme rating and access-level bars. Same shape as the pack bars
// above; written once here rather than a third and fourth copy of the loop.
function _bindScopeBar(barId, kind) {
  const bar = document.getElementById(barId);
  if (!bar) return;
  const sel = kind === 'fb' ? '.fb-btn' : '.al-btn';
  bar.querySelectorAll(sel).forEach(btn => {
    const handler = e => {
      e.stopPropagation();
      const key = kind === 'fb' ? bar.dataset.fbKey : bar.dataset.alKey;
      if (!key) return;
      if (kind === 'fb') { fbSet(key, parseInt(btn.dataset.val)); fbRender(barId, key); }
      else               { alSet(key, parseInt(btn.dataset.val)); alRender(barId, key); }
    };
    btn.addEventListener('click', handler);
    btn.addEventListener('touchend', e => { e.preventDefault(); e.stopPropagation(); handler(e); }, { passive: false });
  });
}
_bindScopeBar('fb-prog-bar', 'fb');
_bindScopeBar('al-prog-bar', 'al');

// Pack settings overlay
(function() {
  const btn     = document.getElementById('modePackSettingsBtn');
  const overlay = document.getElementById('packSettingsOverlay');
  const close   = document.getElementById('packSettingsClose');
  const title   = document.getElementById('packSettingsTitle');
  const ver     = document.getElementById('packSettingsVersion');
  if (!btn || !overlay) return;
  btn.addEventListener('click', () => {
    // v1.27.18 — the button stays in the document when no feedback mode is on,
    // so that three taps can reach the pack note. A SINGLE tap there must go
    // on doing nothing, exactly as it did when the button was display:none.
    if (btn.classList.contains('mode-gear--silent')) return;
    const packKey = window.activeCollectionKey;
    const label   = window.activeCollectionLabel || packKey;
    if (title) title.textContent = label + ' — Settings';
    const noteSection = document.getElementById('packSettingsNoteSection');
    if (noteSection) noteSection.style.display = '';
    if (ver)   ver.textContent   = typeof VERSION !== 'undefined' ? VERSION : '';
    // Show/hide sections based on active mode
    const fbSection = document.getElementById('packSettingsFbSection');
    const alSection = document.getElementById('packSettingsAlSection');
    if (fbSection) fbSection.style.display = feedbackMode ? '' : 'none';
    if (alSection) alSection.style.display = alSuggestMode ? '' : 'none';
    // Render bars
    const _alPK = alPackKey(packKey || '');
    const _fbPK = 'fb_pack_' + (packKey || '');
    // Set keys on bars before rendering so click handlers can read them
    const _alBar = document.getElementById('al-pack-bar');
    const _fbBar = document.getElementById('fb-pack-bar');
    if (_alBar) _alBar.dataset.alKey = _alPK;
    if (_fbBar) _fbBar.dataset.fbKey = _fbPK;
    alRender('al-pack-bar', _alPK);
    if (_fbBar && typeof fbRender === 'function') fbRender('fb-pack-bar', _fbPK);
    // v1.27.18 — the pack note. Always rendered, whatever the modes say.
    _scopeNoteBind('packNoteArea', window.packNoteKey ? packNoteKey(packKey || '') : '');
    // Render tag section if tag mode is on
    if (window.renderPackTagSection) window.renderPackTagSection(packKey || '');
    overlay.classList.add('open');
  });
  if (close) close.addEventListener('click', () => { _scopeNoteSaveAll(); overlay.classList.remove('open'); });
  // Uppgift 9 — close on backdrop click
  overlay.addEventListener('click', e => {
    if (e.target === overlay) { _scopeNoteSaveAll(); overlay.classList.remove('open'); }
  });

  // Uppgift 8 — show gear only when at least one feedback mode is active
  //
  // v1.27.18 — IT NO LONGER LEAVES THE DOCUMENT. The button used to be
  // display:none here, which also removed the only thing on the mode screen
  // you could press. The pack note now lives behind three taps in exactly that
  // spot, so the button stays and only its icon goes (.mode-gear--silent).
  // Layout is untouched: .mode-topbar-center is flex:1 and holds the middle
  // whether anything is drawn in it or not.
  function updateModeGearVisibility() {
    const gearBtn = document.getElementById('modePackSettingsBtn');
    const pinBtn  = document.getElementById('modePinBtn');
    // The programme gear follows the same rule, and is refreshed here too so
    // that toggling a mode while standing on the programme screen takes effect
    // without a re-render.
    const progGear = document.getElementById('prog-settings-btn');
    if (progGear) {
      const on = dsReviewModes().any;
      progGear.classList.toggle('prog-gear--silent', !on);
      progGear.setAttribute('aria-hidden', on ? 'false' : 'true');
    }
    if (!gearBtn) return;
    const anyActive = dsReviewModes().any;
    gearBtn.style.display = '';
    gearBtn.classList.toggle('mode-gear--silent', !anyActive);
    gearBtn.setAttribute('aria-hidden', anyActive ? 'false' : 'true');
    if (pinBtn) {
      pinBtn.classList.toggle('mode-pin-centered', !anyActive);
    }
  }
  // Expose so settings toggles can trigger a refresh
  window.updateModeGearVisibility = updateModeGearVisibility;
  updateModeGearVisibility();

  // Three taps on the silent gear open the same overlay, note only. A single
  // tap there must keep doing nothing — the click handler above is bound to
  // the same element, so it checks the class and bails.
  if (btn && window.dsTripleTap) {
    dsTripleTap(btn, () => {
      if (!btn.classList.contains('mode-gear--silent')) return;  // gear visible: ordinary click already works
      _openScopeOverlayNoteOnly(overlay, {
        title:  (window.activeCollectionLabel || window.activeCollectionKey || 'Pack') + ' — Note',
        hide:   ['packSettingsFbSection', 'packSettingsAlSection', 'packSettingsTagSection'],
        noteSection: 'packSettingsNoteSection',
        area:   'packNoteArea',
        key:    window.packNoteKey ? packNoteKey(window.activeCollectionKey || '') : '',
        titleEl: 'packSettingsTitle',
      });
    });
  }
})();

// ── SCOPE NOTES: shared plumbing for the pack and programme notes ────────────
// (v1.27.18)
//
// Small on purpose. A textarea in a settings sheet does not need the card note
// panel's machinery — no keyboard timing, no swipe swallowing, no follow-the-
// card key changes. What it DOES need is the one thing that panel got right:
// save on every keystroke, on close, and when the page is hidden, because an
// iOS web view is killed in the background without another event firing.
const _scopeNotes = new Map();   // textarea id -> storage key

function _scopeNoteBind(areaId, key) {
  const area = document.getElementById(areaId);
  if (!area) return;
  _scopeNotes.set(areaId, key);
  area.value = (key && window.noteGet) ? noteGet(key) : '';
  if (!area._scopeBound) {
    area._scopeBound = true;
    area.addEventListener('input', () => {
      const k = _scopeNotes.get(areaId);
      if (k && window.noteSet) noteSet(k, area.value);
    });
    // Nothing typed in here may reach the app's single-key shortcuts.
    area.addEventListener('keydown', e => e.stopPropagation());
  }
}

function _scopeNoteSaveAll() {
  _scopeNotes.forEach((key, areaId) => {
    const area = document.getElementById(areaId);
    if (area && key && window.noteSet) noteSet(key, area.value);
  });
}
document.addEventListener('visibilitychange', () => { if (document.hidden) _scopeNoteSaveAll(); });

// Open one of the two settings overlays showing ONLY its note. This is the
// three-tap path: the same note the gear shows, reached where there is no gear.
function _openScopeOverlayNoteOnly(overlay, o) {
  if (!overlay) return;
  const titleEl = document.getElementById(o.titleEl);
  if (titleEl) titleEl.textContent = o.title;
  o.hide.forEach(id => { const el = document.getElementById(id); if (el) el.style.display = 'none'; });
  const noteSection = document.getElementById(o.noteSection || '');
  if (noteSection) noteSection.style.display = '';
  _scopeNoteBind(o.area, o.key);
  if (overlay.classList.contains('settings-overlay')) overlay.classList.add('open');
  overlay.style.display = '';
  setTimeout(() => { const a = document.getElementById(o.area); if (a) a.focus(); }, 60);
}
window._scopeNoteBind = _scopeNoteBind;
window._scopeNoteSaveAll = _scopeNoteSaveAll;

// ── AL EXPORT ────────────────────────────────────────────────────────────────
function exportAlSuggestions() {
  const data = { exportedAt: new Date().toISOString(), packSuggestions: {}, cardSuggestions: [] };
  const AL_NAMES = { 1: 'free', 2: 'pro', 3: 'extended' };

  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!k.startsWith('al_')) continue;
    const v = parseInt(localStorage.getItem(k));
    const levelName = AL_NAMES[v] || String(v);

    if (k.startsWith('al_pack_')) {
      const packKey = k.replace('al_pack_', '');
      data.packSuggestions[packKey] = levelName;
    } else if (k.startsWith('al_prog_')) {
      // v1.27.19 — programme suggestions get their own bucket. Without this
      // branch the key falls into the card parser below and is reported as a
      // card in a pack called "prog", which is the same shape of silent
      // mistake the pack and programme NOTES had in the other export.
      (data.programSuggestions = data.programSuggestions || {})[k.replace('al_prog_', '')] = levelName;
    } else {
      // al_{pack}_{screen}_{stratId}_{cardId}_{side}
      const parts = k.split('_');
      // parts: ['al', pack, screen, stratId, cardId, side]
      data.cardSuggestions.push({ key: k, pack: parts[1], screen: parts[2], suggested: levelName });
    }
  }

  _dsExport(JSON.stringify(data, null, 2),
            `deckstack-al-suggestions-${Date.now()}.json`,
            'application/json',
            'Access-level suggestions — JSON');
}

const alExportBtn = document.getElementById('alExportBtn');
if (alExportBtn) alExportBtn.addEventListener('click', exportAlSuggestions);

// v1.26.26 dev tools: clear redeemed store codes (list 7 #2) and reset the
// first-run state — favorites, continue card, tap hint counter (list 7 #5)
const clearCodesBtn = document.getElementById('clearCodesBtn');
if (clearCodesBtn) clearCodesBtn.addEventListener('click', () => {
  localStorage.removeItem('ds_redeemed_codes');
  if (window.renderExtendedStore) renderExtendedStore();
  if (window.showToast) showToast('Store codes cleared. Access codes are a separate button.');
});

const resetFirstRunBtn = document.getElementById('resetFirstRunBtn');
if (resetFirstRunBtn) resetFirstRunBtn.addEventListener('click', () => {
  ['fav_packs', 'dash_last_pack', 'ds_last_modes', 'ds_tap_hint_count',
   'ds_onboarding_done', 'ds_onboarding', 'ds_reco_packs',
   'ds_seen_home', 'ds_pro_nudge', 'ds_reco'].forEach(k => localStorage.removeItem(k));
  // Pack intro counters (v1.26.44) and guide flags (v1.27.09) — dynamic keys.
  // The guides belong here for the same reason the pack intros do: this button
  // means "show me the app as a new user sees it", and a new user has not seen
  // them. It still does NOT touch fb_ or note_ — feedback survives a reset on
  // purpose; the button for wiping that is in developer settings.
  Object.keys(localStorage)
    .filter(k => k.indexOf('ds_packintro_') === 0 || k.indexOf('ds_guide_') === 0)
    .forEach(k => localStorage.removeItem(k));
  if (window._favRenderTab)  window._favRenderTab();
  if (window._favRenderDash) window._favRenderDash();
  if (window.renderContinueCard) window.renderContinueCard();
  if (window.showToast) showToast('Favorites, continue, hints, guides and onboarding reset.');
});

// ─── ABOUT & PRIVACY (v1.26.36) ────────────────────────────────────────────
(function initAbout() {
  const btn     = document.getElementById('aboutBtn');
  const overlay = document.getElementById('aboutOverlay');
  const close   = document.getElementById('aboutClose');
  const verEl   = document.getElementById('aboutVersion');
  if (!btn || !overlay) return;
  if (verEl && typeof VERSION !== 'undefined') verEl.textContent = VERSION;
  btn.addEventListener('click', () => overlay.classList.add('open'));
  if (close) close.addEventListener('click', () => overlay.classList.remove('open'));
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });
})();

// ─── WHAT'S NEW (v1.26.66) ──────────────────────────────────────────
// A user-facing release list, reached from its own row in Settings — the
// version number keeps opening developer settings after 7 taps.
// EDITING RULE: this list is NOT updated every release. Add an entry only
// for a NEW PACK or a real feature; bugfixes and internal work stay out.
// Newest first. Keep each line in the user's language, not the changelog's.
//
// TWO AUDIENCES (v1.26.97). An entry with no `audience` is a normal user
// entry: it shows in the Settings row everybody can reach, AND in the
// developer list. An entry with `audience: 'dev'` shows ONLY in developer
// settings, marked with a tag. What belongs where:
//   user  — packs, programs and features a freemium or Pro user can actually
//           reach and use. Written in their language.
//   dev   — developer-only tooling (feedback mode, tag mode, the editor,
//           the import scripts), anything at minLevel 'complete' since it is
//           invisible to everyone else, and structural work worth being able
//           to date later.
// Both lists are in the same array so a user entry never has to be written
// twice; the developer list is simply the unfiltered one.
const WHATS_NEW = [
  { version: 'v1.29.18', date: 'September 2026', title: 'Praxeology Frame 1–5 completed with NotebookLM', audience: 'dev', items: ['Collections, Sequences, Challenges, Mindset and Memorize filled out in all five Praxeology Frame packs, merged into the existing packs.', 'Content is NotebookLM\'s own, kept as written; only syntax, deck headings and one TOPICS line were fixed.', 'Step names in the older sequence scenarios now match the strategy names (e.g. Observe \u2192 The OODA Loop, Status Calibration \u2192 Status/Harmony Calibration, Rule Zero \u2192 Rule Zero (Rational Egoism)).'] },
  { version: 'v1.29.17', date: 'September 2026', title: 'Todd V 1–5 completed with NotebookLM', audience: 'dev', items: ['Collections, Sequences, Challenges, Mindset and Memorize filled out in all five Todd V packs, merged into the existing packs.', 'Content is NotebookLM\'s own, kept as written; only syntax, strategy tags, step names and deck headings were fixed.', 'Todd V 1 got its Core Idea deck in a separate NotebookLM run.'] },
  { version: 'v1.29.16', date: 'September 2026', title: 'Dan Bacon 1–4 completed with NotebookLM', audience: 'dev', items: ['Collections, Sequences, Challenges, Mindset and Memorize filled out in all four Dan Bacon packs, merged into the existing packs.', 'Content is NotebookLM\'s own, kept as written; only syntax, strategy tags, deck names and a few outright errors were fixed.', 'Suggested content changes are collected in the vault for review, not applied.'] },
  { version: 'v1.29.15', date: 'September 2026', title: 'Alexander Grace 7 and 8, from the third source PDF', audience: 'dev', items: ['Alexander Grace 7 — Hard Talks, Well Timed and 8 — Honest and Fair added to Communication in Relationships.', 'Built directly from videos 201–300; only two packs, because about six of the 33 videos had practical material.', 'Every ground rule and move in both packs applies to both partners.'] },
  { version: 'v1.29.14', date: 'September 2026', title: 'Three more Alexander Grace packs, from the second source PDF', audience: 'dev', items: ['Alexander Grace 4 — Saying It Early, 5 — Steady Under Criticism and 6 — Letting Her In added to Communication in Relationships.', 'Built directly from videos 101–200; the practical sections were kept and the commentary about women as a group was left out.', 'Reuses existing moves under their library names: Name It Early, Say How It Lands, Suggest What to Do Instead, Apologise for What You Did, Name the Feeling and Express Appreciation.'] },
  { version: 'v1.29.13', date: 'September 2026', title: 'Three Alexander Grace packs, built from source', audience: 'dev', items: ['Alexander Grace 1 — Saying No, 2 — Fights That End Closer and 3 — Confident Connection added to Communication in Relationships.', 'Built directly from the transcript PDF rather than through Notebook; about a quarter of the source was trainable.', 'All three sit on the complete tier: 6 strategies, 3 collections, 3 sequences, 5 challenges, 6 mindset decks and Memorize each.'] },
  {
    version: 'v1.29.12', date: 'September 2026', title: 'A new topic: Messages & Writing \u2014 three packs', audience: 'dev',
    items: [
      'A new topic, <strong>Messages &amp; Writing</strong> (<code>written</code>), with three packs, all imported at <strong>complete</strong>, all <strong>0 errors and 0 warnings</strong> in check-pack, and all built as <strong>grid packs</strong> (row type <em>situation</em>).',
      '<strong>Tone in Messages</strong> \u2014 how it sounds without a voice. Add the Warmth Back, Say Your Tone, Read It Kindly, Check Before You Worry, Match Their Length, Read It as Them, Soften It After.',
      '<strong>Replying and Not Replying</strong> \u2014 what happens to a thread. Say You\u2019ve Seen It, Reply Late Keep It Short, Answer All of It, Close the Thread, Follow Up Once (shared with Making Requests), Revive a Dead Thread, Step Out of the Chat.',
      '<strong>When to Stop Typing</strong> \u2014 choosing the channel. Move It to a Call, Say It in Person, Take the Argument Offline, Stop at One Message, Reply When You\u2019re Calm \u2014 and Put It in Writing, for when writing is the right channel after a conversation.',
      'The area is the one place where a card front is not an approximation of the situation: the incoming message <em>is</em> the situation, quoted word for word.',
    ],
  },
  {
    version: 'v1.29.11', date: 'September 2026', title: 'Asking for Permission \u2014 the third grid pack', audience: 'dev',
    items: [
      'A new pack, <strong>Asking for Permission</strong> (<code>askingpermission</code>, Asking &amp; Saying No), imported at <strong>complete</strong>. 36 decks, 273 units, <strong>0 errors and 0 warnings</strong> in check-pack.',
      '<strong>Making Requests</strong> asks for someone\u2019s time. This pack asks for their approval of something that is theirs \u2014 their photo, their idea, their news, their things. Seven strategies: <strong>Ask First</strong>, <strong>Announce and Pause</strong>, <strong>Name the Limits</strong>, <strong>Leave Room to Refuse</strong>, <strong>Take a No Well</strong>, <strong>Ask for Someone Else</strong>, <strong>Check What You Assumed</strong>.',
      'Two of them share their names and guide pairs with Making Requests, by the rule that one move has one name across the library (\u00a711d-c): <em>Leave Room to Refuse</em> and <em>Take a No Well</em>. Their descriptions are written for permission, not favours.',
      '<strong>Grid pack</strong>, row type <em>situation</em>: card N is the same thing you are about to do in all seven columns \u2014 raising Sara\u2019s idea, posting the party photo, borrowing the bike, recording the call. 87% of cards match their own row in every other column.',
    ],
  },
  {
    version: 'v1.29.10', date: 'September 2026', title: 'Broken Promises and Trust', audience: 'dev',
    items: [
      'A new pack, <strong>Broken Promises and Trust</strong> (<code>brokenpromises</code>, Repair &amp; Apology), imported at <strong>complete</strong>. 36 decks, 273 units, <strong>0 errors and 0 warnings</strong> in check-pack.',
      'Seven strategies that follow a broken promise in time. Before it: <strong>Tell Them Early</strong>, <strong>Offer What You Can Still Do</strong>. At it: <strong>Say What It Cost Them</strong>, <strong>Correct the Cover Story</strong>, <strong>Accept the Consequence</strong>. After it: <strong>Promise Small</strong>, <strong>Report It Done</strong>.',
      'Built on the research on restoring violated trust: a promise to do better does help, but only if the action follows \u2014 and a lie about the broken promise costs far more than the promise itself. That finding is the <em>Correct the Cover Story</em> strategy and the <em>Cover Story</em> mindset.',
      'The boundary with Apologizing: an apology is about what happened; this pack is about the promise \u2014 telling in time, what happens instead, and getting trust back. Not a grid pack: its rows would be <em>stage</em>, which belongs in Sequences.',
    ],
  },
  {
    version: 'v1.29.09', date: 'September 2026', title: 'Calibrating Humour \u2014 the second grid pack', audience: 'dev',
    items: [
      'A new pack, <strong>Calibrating Humour</strong> (<code>calibratinghumour</code>, Humour &amp; Banter), imported at <strong>complete</strong>. 36 decks, 273 units, <strong>0 errors and 0 warnings</strong> in check-pack.',
      'The humour topic had three packs that teach how to make jokes and none that teach how to size them. Seven strategies: <strong>Land It Smaller</strong>, <strong>Commit to It</strong> and <strong>Stop the Bit</strong> for size, and four repairs from light to serious \u2014 <strong>Move Straight On</strong>, <strong>Name That It Missed</strong>, <strong>Give Them the Out</strong>, <strong>Take It Back Cleanly</strong>.',
      'The five Challenges decks are the ones lifted out of <strong>Role Based Humour</strong> in v1.28.81, now with a pack whose own strategies solve them. <strong>Commit to It</strong> was added as a seventh strategy for exactly that reason: <em>You Cannot Commit</em> had nothing to answer it.',
      '<strong>Grid pack</strong>, row type <em>situation</em>: card N is the same joke in all seven columns \u2014 the report redo, the nervous host\u2019s lasagne, the printer joke in a meeting, the birthday toast \u2014 written from each strategy\u2019s angle. 90% of cards match their own row in every other column.',
    ],
  },
  {
    version: 'v1.29.08', date: 'September 2026', title: 'Asking for Clarity \u2014 the first grid pack', audience: 'dev',
    items: [
      'A new pack, <strong>Asking for Clarity</strong> (<code>askingforclarity</code>, Listening &amp; Understanding), imported at <strong>complete</strong> so it sits outside the release scope until its tier is decided. 36 decks, 273 units, <strong>0 errors and 0 warnings</strong> in check-pack.',
      'Seven strategies for asking about something you did not catch or did not understand, ordered by how much work they leave for the other person: <strong>Say You Missed It</strong>, <strong>Ask Which One</strong>, <strong>Repeat the Unclear Part</strong>, <strong>Offer Your Best Guess</strong>, <strong>Ask About the Word</strong> \u2014 and two for when asking is awkward or late, <strong>Own the Miss</strong> and <strong>Come Back to It</strong>. The structure comes from conversation analysis (other-initiated repair), where offering a guess is the most common form in real talk.',
      '<strong>Built as a grid pack from the first card</strong> (\u00a711k, row type <em>situation</em>). Single Strategy is 7 \u00d7 8, and card N is the same event in every column \u2014 the manager in the corridor, the receptionist on a bad line, the mechanic\u2019s \u201cfour-fifty\u201d \u2014 written from each strategy\u2019s own angle rather than copied. The Memorize strategy decks follow the same idea: question N is the same question about each strategy.',
      'Nothing in the code knows it is a grid pack yet: no <code>gridAxis</code> field, no badge, and <em>Shuffle inputs</em> still works against it. Try it with <strong>Stay on the same card</strong> on and shuffle off.',
    ],
  },
  {
    version: 'v1.29.07', date: 'September 2026', title: 'check-pack run across all 52 release packs at once', audience: 'dev',
    items: [
      'Every check so far this month was run on the packs being changed. This is the first sweep of <strong>all 52 at once</strong>: <strong>0 errors</strong>, 207 warnings, 29 packs completely clean.',
      '<strong>124 of the 207 are one harmless class</strong> \u2014 a Memorize strategy deck carrying its own description, which the app never displays because the strategy\u2019s own text is used. Another 60 are descriptions outside the template\u2019s character range. Neither is visible to anyone.',
      'The rest were small and real, and are fixed here: <strong>three duplicated words</strong> (\u201cwork it out out loud\u201d in Conflict Emotions, in both Mindset and Memorize), and <strong>two guide fronts that repeated their whole strategy name</strong> \u2014 <em>Ask for time before you answer when\u2026</em> and <em>Build from both positions when\u2026</em>, which \u00a711b-VI has never allowed. The replacements propagated to the 15 sequence steps that inherit those pairs.',
      'What this sweep does <em>not</em> tell us: it is a check on the data, not on the app. Nothing here replaces playing through it.',
    ],
  },
  {
    version: 'v1.29.06', date: 'September 2026', title: 'The user-facing list catches up', audience: 'dev',
    items: [
      '<strong>WHATS_NEW_USER</strong> had not been touched since v1.28.55. Everything between then and here was either internal or already covered by the entry about the six modes — with one exception, which is now written: <strong>Stay on the same card</strong>, the sideways-swipe setting from v1.28.99.',
      'Nothing else from the cleanup went in, by the list’s own rules: deck names, step fronts and mindset voice are improvements to material that was already there, and the user list carries features rather than corrections.',
      '<strong>If the toggle moves to developer settings before release, this entry moves with it.</strong> A user-facing note about a switch nobody can find is worse than no note.',
    ],
  },
  {
    version: 'v1.29.05', date: 'September 2026', title: 'Mindset deck names, the last round — twenty-one packs', audience: 'dev',
    items: [
      '<strong>74 decks renamed</strong>, finishing the sweep. Every mindset deck in the release scope is now named for the area its beliefs are about rather than the insight they lead to. <strong>Conflict Emotions</strong> had five in a row — A Feeling Points at a Need, Describe Do Not Diagnose, Finish the Sentence, They Have a Version Too, One Word Is Not Enough — now <strong>Needs</strong>, <strong>Diagnosis</strong>, <strong>Stopping Halfway</strong>, <strong>Their Version</strong> and <strong>The Feeling Word</strong>.',
      'The packs built during the volume sweep mostly use the <em>The X Mindset</em> form, which archetype 9 asks for. That form is kept — only the X changed where it was an answer rather than an area: <strong>The No Instant Verdict Mindset</strong> is now <strong>The Instant Verdict Mindset</strong>, and <strong>The Thanking Is Not Agreeing Mindset</strong> is <strong>The Thanking Mindset</strong>.',
      'Two packs needed nothing: <strong>Assertive Communication Pt. 2</strong>, whose four decks are single words — Responsibilities, Consistency, Decisions, Obligations — and <strong>Setup Statement</strong>.',
      'Names that state the belief stay. <strong>Being the Easy-Going One</strong>, <strong>Not Being Quick</strong>, <strong>Always Having One Ready</strong> — those are the decks built on a belief that feels like a strength, and naming the belief is naming the area.',
      'The Memorize decks moved with them, 210 references in all, and eleven of their summary lines were rewritten where the old deck name had been doing work in the sentence.',
      'Across the three rounds: <strong>135 decks renamed in 41 packs.</strong>',
    ],
  },
  {
    version: 'v1.29.04', date: 'September 2026', title: 'Mindset decks that changed speaker halfway through', audience: 'dev',
    items: [
      'Archetype 9 has said since July that a mindset card is <strong>a thought on the front and one sentence you could say to yourself on the back</strong>. The volume sweep filled several four-card decks up to eight in that form — and left the original four in the old one. The result was <strong>19 decks where card 4 was quoted self-talk and card 5 was the coach talking to you</strong>. Two different speakers, two different tenses, one deck.',
      '<strong>Setup Question</strong> was the clearest case. Card 4: <em>“Curiosity works on a flat day. Being interesting does not.”</em> Card 6: <em>They set the first subject. You set the second.</em> Both true, neither in the same voice.',
      'All 19 now converge: the front is the thought in his own words, unquoted, and the back is one quoted sentence in the first person. <strong>256 cards across 32 decks</strong>, in seven packs — Agreeing, Handle Interruptions, How to Interrupt, Setup Question, Storytelling with the Six W’s, Describe Things and Giving Counterexamples.',
      'The thirteen decks that were internally consistent but in the <em>other</em> form went with them, because leaving them would have moved the inconsistency from inside a deck to between decks in the same pack. Those seven packs now run one voice from end to end.',
      'Measured after: <strong>no deck in the release scope changes speaker mid-deck, and no pack mixes the two forms.</strong> The remaining 32 packs are all consistently in the older form and are a separate job.',
    ],
  },
  {
    version: 'v1.29.03', date: 'September 2026', title: 'The sequence step that answered itself — 271 of them', audience: 'dev',
    items: [
      'A sequence step hides its strategy name: the front carries only the stimulus, and the name reappears in brackets on the back once you turn it. That has been the rule since v1.27.88 — but the split only runs when the step carries <em>its own</em> guide, and <strong>271 steps of 1,692 had none</strong>. Those fronts read “Step 2 · Normalise the Reaction — they say…”: the answer, printed above the question. All 271 now split.',
      '<strong>212 were filled from the strategy’s own guide pair</strong>, which is where the other steps in the same deck already got theirs. Nothing was invented — the text was sitting in Single Strategy the whole time.',
      '<strong>59 more are steps that are not strategies</strong> but beats — the moment you notice a bit has gone flat, the pause you leave after asking, the correction you take before answering. Those got a guide pair written for them.',
      'Along the way <strong>66 step names were replaced by the real strategy</strong> their own deck description already named. <strong>Validation</strong> is the clearest: its three sequences said “Name the feeling / Say it is ordinary / Back their thinking” on the front while the description said Reflect the Feeling, Normalise the Reaction, Acknowledge the Perspective. The bracket on the back now teaches a name the pack actually uses.',
      '<strong>Setup Statement</strong> gained something it did not have: its opening step said only “Setup” in all three scenarios, where the three are in fact a <strong>Purpose Setup</strong>, a <strong>Feeling Setup</strong> and an <strong>Opinion Setup</strong>. Three different moves under one word.',
      'Twenty packs touched, no card counts changed, no card text rewritten.',
    ],
  },
  {
    version: 'v1.29.02', date: 'September 2026', title: 'Mindset deck names, round two — twelve more packs', audience: 'dev',
    items: [
      '30 more decks named for the area rather than the answer, across eight packs. <strong>Saying No</strong> had four in a row — A Clear No Is the Kind One, No Is a Complete Answer, You Are Allowed to Take a Minute, Their Disappointment Is Not Your Fault — now <strong>Softening</strong>, <strong>Explanations</strong>, <strong>The Instant Yes</strong> and <strong>Their Disappointment</strong>.',
      'Two of the renamed decks were names <strong>First Strategies had already dropped</strong> when the rule was written. <em>Asking Is Not Imposing</em> became Favours there and was still sitting unchanged in Making Requests; it is now <strong>Imposition</strong>. <em>You Don’t Have to Be Interesting</em> became Speaking First there and is now <strong>Being Interesting</strong> in Setup Question.',
      'Four packs were left entirely alone: <strong>Handle Interruptions</strong>, <strong>How to Interrupt</strong>, <strong>Storytelling with the Six W’s</strong> and <strong>Responsive Humour</strong>. Their names are whole sentences too — Yielding Is Losing, Nothing Happens to Me — but they state the <em>belief</em>, which is the category. Naming the problem is the job; only naming the answer is the fault.',
      'Same as last round: the Memorize decks that list each pack’s mindset areas were rewritten to match, 60 references in all. No card counts changed, no card text was touched, and feedback saved under the 30 old names is orphaned.',
    ],
  },
  {
    version: 'v1.29.01', date: 'September 2026', title: 'Mindset deck names that stop answering the card', audience: 'dev',
    items: [
      'A mindset card asks <em>what is true instead?</em> — and in 31 decks across twelve packs the heading above it had already said. <strong>Short Is Not Rude</strong>, <strong>Detail Is Kindness</strong>, <strong>You Do Not Have to Win</strong>, <strong>Repetition Is Not Rudeness</strong>: the answer, printed over the question. Those 31 now name the area instead — <strong>Length</strong>, <strong>Detail</strong>, <strong>Winning</strong>, <strong>Repetition</strong> — and the insight stays where it belongs, on the back of the card and in the deck description.',
      'The rule is from August: a mindset deck is named for the area the beliefs are about, not the insight they lead to. <strong>First Strategies</strong> was rebuilt to it — Speaking First, Questions, Refusals, Modesty, Favours, Pauses — and the rest of the library never followed.',
      '<strong>Explain Things</strong> shows the whole effect at once. Four decks called Explaining Is Not Performing, Their Confusion Is Information, Short Is Not Rude and You Are Allowed Not To Know are now <strong>Performing</strong>, <strong>Their Confusion</strong>, <strong>Length</strong> and <strong>Not Knowing</strong> — four words where there were seventeen, and not one of them gives the game away.',
      'Names that state the <em>belief</em> rather than the answer were left alone — <strong>Later Means Never</strong>, <strong>A Compromise Is a Loss</strong>, <strong>I Don’t Have One</strong>. They name the problem, which is what a category name is for. Twenty-three of those are still standing, on purpose.',
      'The Memorize decks that list each pack’s mindset areas were rewritten to match — 62 references across the same twelve packs, so the theory cards and the training cards still name the same things.',
      'Saved feedback is keyed on the deck name, so feedback left under the 31 old names is now orphaned. Nothing else moved: no card counts changed, and no card text was touched.',
    ],
  },
  {
    version: 'v1.29.00', date: 'September 2026', title: 'Sequence steps that ask for something \u2014 the first cleanup round', audience: 'dev',
    items: [
      '<strong>81 step fronts in five packs said nothing but a label.</strong> \u201cStep 1 \u00b7 Put the Feeling In\u201d, three times in a row, with no stimulus and no task \u2014 so there was nothing to produce an answer from. \u00a711b-VIII has required a stimulus or a concrete task since July; these had neither. All 81 now carry one.',
      'The worst of them was <strong>Same Story, Different Feeling</strong> in Building a Story. The deck asks for one event told three ways \u2014 flat, funny, and honest \u2014 but all three fronts read \u201cPut the Feeling In\u201d, so there was no way to know which version was wanted. The fronts now say <em>tell it flat</em>, <em>tell it for the laugh</em>, <em>tell it for what it cost</em>.',
      '<strong>Ten step names that named nothing</strong> are gone. Six became real strategies out of their own pack \u2014 \u201cBuy the time\u201d is now <strong>Announce the Pause</strong>, \u201cPut a word on it\u201d is <strong>Label the Emotion</strong>, \u201cName both\u201d is <strong>Link to Earlier</strong>, \u201cWhere / Who\u201d are <strong>Where It Belongs</strong> and <strong>Who It Is For</strong>. The rest are defined in their deck description, which is what \u00a711f requires.',
      '<strong>Play Along</strong> in Role Based Humour named its three steps differently in different scenarios \u2014 one scenario ran \u201cPlay it straight / Stay straight / Let them land it\u201d while the others ran \u201cMatch it / Hold it / Drop out together\u201d. One set now, in all three.',
      '<strong>45 steps got the guide they were missing.</strong> A step front is only split into stimulus and strategy name when the step carries its own guide \u2014 without one, the name stayed on the front and answered the card before it was turned. Every step in the ten rebuilt decks now has its strategy\u2019s guide pair.',
      'No card counts changed. Nothing was renamed above step level, so no saved feedback was orphaned.',
    ],
  },
  {
    version: 'v1.28.99', date: 'September 2026', title: 'Stay on the same card \u2014 an experiment in the training settings', audience: 'dev',
    items: [
      'A new toggle in the settings sheet inside a training session: <strong>Stay on the same card</strong>. Sideways normally means \u201cnext strategy, back to card 1\u201d. With this on it means \u201cnext strategy, same card\u201d \u2014 card 6 of 8 stays card 6 of 8, in both directions.',
      'It matters because some packs are written so that card N is the <em>same situation</em> in every strategy. <strong>Storytelling with the Six W\u2019s</strong> is the clearest: one event, six ways of describing it, the same event on every card number. <strong>Role Based Humour</strong> gives seven roles one line to answer. <strong>Receiving Feedback</strong> gives four strategies the same piece of criticism, word for word. In those packs the sideways swipe becomes an exercise the app has never offered: one situation, several ways to handle it.',
      'Off by default, and remembered per device rather than per session. It is read live, so it takes effect on the next swipe rather than the next reload.',
      'Where the next strategy has fewer cards the position is <em>clamped</em>, not wrapped \u2014 card 7 lands on the last card rather than quietly starting over at card 1, which would undo the point of the setting.',
      'Ten new checks in the new test-cardpos suite: the default, both directions, the clamp, the live read, and the toggle writing its key.',
    ],
  },
  {
    version: 'v1.28.98', date: 'September 2026', title: 'The volume sweep is finished \u2014 all six modes, all 52 release packs', audience: 'dev',
    items: [
      'The last five packs are complete in Memorize: <strong>Explain Things \u2014 Pt. 2</strong>, <strong>Persuasion and Influence \u2014 Pt. 2</strong>, <strong>Starting Conversations Pt. 3</strong> and <strong>Pt. 4</strong>, and <strong>Validation</strong>. 210 cards, 20 new decks.',
      '<strong>That closes the sweep that started at v1.28.82.</strong> 2 140 cards across six passes \u2014 three new strategies, 391 Challenges cards, 520 Mindset cards, 82 Collections cards, 74 Sequences scenarios and 1 063 Memorize cards. Every one of the 52 release packs now stands complete in all six modes.',
      'Two more leftovers from earlier in the sweep, both fixed: <strong>Validation\u2019s</strong> Core Idea still described \u201cthe three things you can validate\u201d, from before the fourth strategy was added in pass 0 \u2014 while the cards underneath it already said four. And five more Core Idea descriptions were under the template minimum.',
      'The observation lines this round: <em>Explain Things</em> \u2014 none of its five challenges is about being wrong; all five are about being unusable. <em>Persuasion</em> \u2014 two of its three sequences end without agreement on purpose, because that is the realistic outcome and the one people practise least. <em>Starting Conversations Pt. 3</em> \u2014 only two of its five challenges are mistakes; the other three are the openers doing exactly what they are for.',
      'What remains on the list is cleanup rather than content: sequence step fronts that name no strategy, the Mindset deck-name sweep, and the first-person / second-person voice difference between packs in Mindset.',
    ],
  },
  {
    version: 'v1.28.97', date: 'September 2026', title: 'Three blanket access codes', audience: 'dev',
    items: [
      'Three new codes for the Settings field, all running to <strong>31 December 2026</strong> whenever they are entered \u2014 a fixed date rather than a number of days, so a code redeemed in November is not still live in February.',
      '<strong>EXTENDED26</strong> \u2014 everything in the extended store counts as owned: the extended packs, the extended programmes and the extended bundles inside packs. Ownership is not access, exactly as with a real purchase, so it takes effect in Pro; at freemium the items show as locked rather than opening.',
      '<strong>PROGRAMS26</strong> \u2014 every programme checkpoint counts as passed, so nothing inside a programme is waiting on a test. Parts that need Pro still need Pro; the code removes the checkpoint gate, not the tier gate.',
      '<strong>ALLACCESS26</strong> \u2014 both at once.',
      'They are a third kind of grant next to the level codes and the pack codes, stored in <code>ds_unlock_grants</code> and shown in the Settings status row with the days left. <strong>Reset access</strong> and <strong>Clear code</strong> in developer settings both take them back, and say how many they took.',
      'Neither code writes anything into the purchase list, so clearing it leaves no trace of a purchase that never happened. 18 new checks in test-codes cover the two gates separately, the freemium case, the reset and the year-end expiry.',
    ],
  },
  {
    version: 'v1.28.96', date: 'September 2026', title: 'Memorize, round 3 \u2014 seventeen packs down, five to go', audience: 'dev',
    items: [
      'Five more packs complete: <strong>Story Banter</strong>, <strong>Supporting Conversations</strong>, <strong>Apologizing \u2014 Pt. 2</strong>, <strong>Conflict Emotions</strong> and <strong>Giving Examples</strong>. 222 cards, 20 new decks.',
      '<strong>Story Banter\u2019s</strong> overview deck was called <em>The Arc</em> \u2014 the only pack in the library not using <em>Core Idea</em>, and the content was exactly that. Renamed, and its two new cards name the six moves, which no card in the pack did before.',
      'The observation lines this round: <em>Story Banter</em> \u2014 blocking and going personal are the only two failures that damage anything; the other three are a story ending badly. <em>Supporting Conversations</em> \u2014 three of its five mindset decks are about the urge to be useful, which is what makes the pack hard. <em>Apologizing</em> \u2014 two of its five challenges are about doing too little and two about doing too much.',
      '<strong>Conflict Emotions</strong> got the one that ties its mindset decks together: three of the five are about the same moment \u2014 the sentence you are halfway through.',
      'Four more Core Idea descriptions brought up to the template length. One round left: Explain Things \u2014 Pt. 2, Persuasion Pt. 2, Starting Conversations Pt. 3 and Pt. 4, and Validation.',
    ],
  },
  {
    version: 'v1.28.95', date: 'September 2026', title: 'Memorize, round 2 \u2014 twelve packs done, ten to go', audience: 'dev',
    items: [
      'Six more packs are complete in Memorize: <strong>Deep Questions</strong>, <strong>Show Understanding \u2014 Pt. 2</strong>, <strong>Negotiation and Compromise</strong>, <strong>Emotion Labelling and Regulation</strong>, <strong>Building a Story</strong> and <strong>Receiving Feedback and Criticism</strong>. 290 cards, 24 new decks.',
      'The observation line at the end of each mode deck is doing the work again. <em>Negotiation</em>: three of its seven mindset decks are about agreements you should not have made. <em>Show Understanding</em>: the first three moves cost nothing, the other three cost airtime, which is why each has a rule attached. <em>Deep Questions</em>: four of the five challenge repairs are going back down a rung rather than finding a better question.',
      '<strong>Building a Story</strong> got the sharpest one: four of its five challenges are about the shape, and the fifth is about being too slow \u2014 which is where most stories are actually lost.',
      'Another stale strategy name turned up and is fixed: <em>Receiving Feedback</em>\u2019s Core Idea still listed \u201cshow you understand their view\u201d, renamed to <em>See Their Side</em> in batch 4. A full pass over every data file found no others.',
      'All twelve finished packs also got a proper Core Idea description \u2014 they were all under the 150-character minimum.',
    ],
  },
  {
    version: 'v1.28.94', date: 'September 2026', title: 'Memorize, round 1 \u2014 the four decks that ask about the other modes', audience: 'dev',
    items: [
      'Six packs are now complete in Memorize: <strong>Setup Statement</strong>, <strong>Role Based Humour</strong>, <strong>Giving Criticism</strong>, <strong>Stories in Conversation</strong>, <strong>Listening Through Questions</strong> and <strong>Reframing</strong>. 341 cards, and 25 new decks.',
      'Every pack was missing the same four: <strong>Collections</strong>, <strong>Sequences</strong>, <strong>Challenges</strong> and <strong>Mindset</strong> \u2014 the decks that ask theory questions about the other modes\u2019 content. They are the reason Memorize had to come last, and they can be written now because the last two versions finished what they ask about.',
      'Each one lists the pack\u2019s decks in that mode and ends on an observation rather than a summary. <em>Giving Criticism</em>: four of its eight mindset decks are reasons not to speak at all. <em>Stories in Conversation</em>: three of the seven strategies happen before you say a word. <em>Role Based Humour</em>: the size of the role goes down as the stakes go up.',
      '<strong>Choose the Size</strong> in Giving Criticism finally has its own Memorize deck \u2014 the strategy has existed since the pack was built and the theory deck was never written.',
      'Sixteen packs left, in three rounds.',
    ],
  },
  {
    version: 'v1.28.93', date: 'September 2026', title: 'Collections and Sequences complete \u2014 only Memorize left', audience: 'dev',
    items: [
      'The last eleven packs are done: 39 cards and 34 scenarios across <strong>Role Based Humour</strong>, <strong>Giving Criticism</strong>, <strong>Listening Through Questions</strong>, <strong>Stories in Conversation</strong>, <strong>Negotiation and Compromise</strong>, <strong>Building a Story</strong>, <strong>Story Banter</strong>, <strong>Supporting Conversations</strong>, <strong>Persuasion and Influence \u2014 Pt. 2</strong>, <strong>Apologizing \u2014 Pt. 2</strong> and <strong>Conflict Emotions</strong>. Every release pack now stands at 3 \u00d7 8 in Collections and 3 \u00d7 3 in Sequences.',
      'Seven decks that offered a choice between two strategies now offer three, using the same number of cards. <em>Keep It Moving</em> gains <em>Bring Someone In</em>, <em>Generous or Stingy</em> gains <em>The Bossy Leader</em>, <em>The Apology Itself</em> gains <em>Say Their Feelings Matter</em>, and so on \u2014 in each case a strategy that already belonged under that heading and had simply never been used there.',
      '<strong>Closing a Subject Well</strong> in Listening Through Questions had a single scenario where every other sequence deck in the release scope had two. It now has three, like the rest.',
      'Four of the six modes are now complete across all 52 release packs. Memorize is the only one left: 1 065 cards, and its four mode decks per pack ask about exactly the content these last two versions finished.',
    ],
  },
  {
    version: 'v1.28.92', date: 'September 2026', title: 'Collections and Sequences, round 1 \u2014 and the deck that was not a choice', audience: 'dev',
    items: [
      'Eleven packs now meet the spec in Collections and Sequences: 43 cards and 40 new scenarios across <strong>Reframing</strong>, <strong>Explain Things \u2014 Pt. 2</strong>, <strong>Show Understanding \u2014 Pt. 2</strong>, <strong>Deep Questions</strong>, <strong>Emotion Labelling</strong>, <strong>Setup Statement</strong>, <strong>Validation</strong>, <strong>Giving Examples</strong>, <strong>Starting Conversations \u2014 Pt. 3</strong> and <strong>Pt. 4</strong>, and <strong>Receiving Feedback</strong>.',
      'The three strategies added in the volume sweep had reached every mode except Collections. Fixing that turned up an older fault: <strong>How Much To Say</strong> in Explain Things had the same label on all six answers, so it trained no choice at all. Its two new cards carry <em>Where Your Knowledge Ends</em>, and the deck is now a real decision \u2014 how much, against how far.',
      '<strong>Validation</strong> was restructured around the fourth strategy. <em>Any of the Three</em> becomes <strong>Any of the Four</strong> and takes two <em>Say What Was Not Okay</em> cards; <em>Emotion or Reasoning</em> becomes <strong>Without Taking a Side</strong> \u2014 the three moves that acknowledge without judging what happened, kept deliberately separate from the one that does.',
      '<strong>Setup Statement</strong> had only two sequence decks. The third, <strong>Feeling, Ask, Match</strong>, uses the Feeling Setup and trains the step people skip: meeting a small admission at the size it was offered rather than topping it.',
      'No Collections deck in the release scope now answers with a single strategy.',
    ],
  },
  {
    version: 'v1.28.91', date: 'September 2026', title: 'Mindset complete \u2014 the last six packs, and the composure that costs something', audience: 'dev',
    items: [
      'The Mindset sweep is finished. <strong>Emotion Labelling and Regulation</strong>, <strong>Explain Things \u2014 Pt. 2</strong>, <strong>Giving Examples</strong>, <strong>Receiving Feedback and Criticism</strong> and <strong>Starting Conversations \u2014 Pt. 3</strong> and <strong>Pt. 4</strong> now meet the spec. Four new decks, 112 cards. Every release pack has one Mindset deck per strategy, eight cards each.',
      '<strong>The Keeping It Together Mindset</strong> (the price) is the one Emotion Labelling was missing: composure is a real skill, and never naming anything is what it costs. <em>"Nobody can tell when you are annoyed"</em> &rarr; <em>"So nobody adjusts, and I carry it alone. That\u2019s the deal I made."</em>',
      '<strong>The Taking It Well Mindset</strong> does the same for Receiving Feedback \u2014 taking it well can become its own way of not engaging. <em>"You have had this feedback before and took it well then too"</em> &rarr; <em>"Taken well twice, changed nothing once. That\u2019s the bit they\u2019ll notice."</em>',
      '<strong>Answering What Was Asked</strong> (two truths) covers the most ordinary obstacle in Explain Things: they asked what it is, and answering what somebody asked is not a fault. The addition is assuming the words are the whole question.',
      '<strong>It Does Not Prove Anything</strong> is for the person who goes quiet because an example is not evidence. It isn\u2019t \u2014 it shows what you mean, and you can say which of the two you are offering.',
      'Sixteen existing Mindset decks across the six packs were filled out to eight cards.',
    ],
  },
  {
    version: 'v1.28.90', date: 'September 2026', title: 'Volume sweep, Mindset round 5 — the virtue that keeps you quiet', audience: 'dev',
    items: [
      '<strong>Setup Statement</strong>, <strong>Show Understanding \u2014 Pt. 2</strong> and <strong>Deep Questions</strong> now meet the spec in Mindset. Five new decks, 84 cards.',
      '<strong>Being a Good Listener</strong> (the price) is the one this pack needed most: preferring to listen is a real virtue, and it is also why every person you meet has to be the one who opens. <em>"I would rather hear about them than talk about me"</em> &rarr; <em>"Then every conversation you have starts with somebody else deciding to work."</em>',
      '<strong>Getting It Wrong Out Loud</strong> (two truths) covers saying a version back and having it be wrong. A wrong version really does show you missed something, so flatly denying that would be dishonest \u2014 the back keeps the judgement and drops the conclusion.',
      '<strong>Nothing Interesting to Offer</strong>, <strong>Only Catching Half</strong> and <strong>The Staying With It Mindset</strong> are swap decks. The last one comes straight out of the pack\u2019s challenge <em>A Sensitive Area</em>: the instinct to back out is what makes it awkward, not the subject.',
      'Fourteen existing Mindset decks in the three packs were filled out to eight cards.',
    ],
  },
  {
    version: 'v1.28.89', date: 'September 2026', title: 'Volume sweep, Mindset round 4 — the belief that keeps people out of a pack', audience: 'dev',
    items: [
      '<strong>Role Based Humour</strong> and <strong>Listening Through Questions</strong> now meet the spec in Mindset, 7 decks each. Six new decks, 76 cards.',
      'Both packs turned out to be missing the same kind of deck: the belief that stops somebody using the pack at all. <strong>Not Being a Performer</strong> (two truths) is the one for Role Based Humour — <em>"You cannot do voices or accents"</em> &rarr; <em>"Nor does this need any. Flat delivery is the correct delivery."</em> The assessment is accurate; the requirement it assumes was never there.',
      '<strong>Asking Feels Like Prying</strong> does the same job for Listening Through Questions, and it is the clearest case yet for the form: some questions genuinely are prying, so a flat contradiction would be wrong. <em>"It is not your place to ask"</em> &rarr; <em>"Some of it isn\'t. The part they just said out loud is."</em>',
      '<strong>Being the One Who Lifts the Mood</strong> (the price) is the belief that keeps a bit running after the room has stopped wanting one: <em>"Nobody has ever asked you to stop"</em> &rarr; <em>"Nobody asks. They just stop starting."</em>',
      'Three swap decks joined them: <em>Picking the Role</em>, <em>How a Question Lands</em> and <em>What If They Actually Tell Me</em> — the last of these being the worry that an honest answer will be too big to handle, which is what most unasked questions are actually about.',
      'Mindset stands at 24 of 33 new decks and 332 of 520 cards. Eleven packs finished, eleven to go.',
    ],
  },
  {
    version: 'v1.28.88', date: 'September 2026', title: 'Volume sweep, Mindset round 3 — four packs finished', audience: 'dev',
    items: [
      '<strong>Stories in Conversation</strong> (7 decks), <strong>Story Banter</strong> (6), <strong>Validation</strong> (5) and <strong>Persuasion and Influence — Pt. 2</strong> (4) now meet the spec in Mindset. Five new decks, 92 cards.',
      'A fourth source was added to the hunt for obstacles: <strong>the <em>Mindset:</em> line that ends every strategy description</strong>. Stories in Conversation\'s <em>Answer, Don\'t Outdo</em> ends with <em>put yours beside theirs, not on top of it</em> &mdash; and no mindset deck covered the belief behind that, so <strong>Always Having One Ready</strong> was written from it, in the price form: <em>"People enjoy my stories"</em> &rarr; <em>"They do. Ask when you last heard one of theirs all the way through."</em>',
      '<strong>Not Being Quick</strong> (Story Banter, two truths) answers the challenge <em>You Have Nothing</em>. The belief is half right and saying so is the point: <em>"You think you are not quick enough for this"</em> &rarr; <em>"True, at inventing. Following what they just said needs no speed at all."</em>',
      'Three swap decks joined them: <em>Ending It Early</em> and <em>Stories That Are Not Yours</em> in Stories in Conversation, and <em>Adding the Wrong Thing</em> in Story Banter.',
      'A bundle error from the volume sweep\'s first pass was fixed: the three mindset decks built alongside the new strategies had a 5 free / 3 pro split. Mindset is pro-only throughout, so all 15 cards are now pro.',
      'Mindset stands at 18 of 33 new decks and 256 of 520 cards. Nine packs are finished; thirteen remain.',
    ],
  },
  {
    version: 'v1.28.87', date: 'September 2026', title: 'Volume sweep, Mindset round 2 — obstacles read out of the Challenges decks', audience: 'dev',
    items: [
      '<strong>Supporting Conversations</strong> (5 decks), <strong>Negotiation and Compromise</strong> (7) and <strong>Reframing</strong> (7) now meet the spec in Mindset. Seven new decks, 92 cards.',
      'The rule is that a mindset deck is one obstacle, not one strategy — the deck count only matches the strategy count as a volume measure. So the new decks were found by reading each pack\'s <em>Challenges</em> decks, which already name its problems, rather than by looking for strategies without a deck.',
      '<strong>Being the Reasonable One</strong> (Negotiation, the price) comes straight out of the challenge <em>You Are Conceding Too Fast</em>: <em>"I always meet people halfway"</em> &rarr; <em>"Every time. Which means the halfway point has been drifting for years."</em>',
      '<strong>Labels Other People Put on You</strong> (Reframing, two truths) fills the gap behind <em>Reframe What They Said About You</em>, where a flat denial would be dishonest: <em>"She said I\'m too intense, and she\'s right"</em> &rarr; <em>"Intense, yes. \'Too\' is her word, and I\'ve been carrying it as though it were mine."</em>',
      '<strong>You Are the One People Come To</strong> (Supporting Conversations, the price) is the belief behind <em>It Is Beyond You</em>. The other four new decks use the swap: <em>Splitting the Difference</em>, <em>Naming a Limit</em>, <em>Making It Smaller</em> and <em>When Somebody Does It to You</em>.',
      'Mindset now stands at 13 of 33 new decks and 164 of 520 cards.',
    ],
  },
  {
    version: 'v1.28.86', date: 'September 2026', title: 'Volume sweep, Mindset round 1 — and the two card forms that had never been used', audience: 'dev',
    items: [
      '<strong>Giving Criticism</strong> (8 decks, 64 cards) and <strong>Building a Story</strong> (6 decks, 48 cards) now meet the spec in Mindset. Six new decks, 72 cards.',
      '<strong>Archetype 9b, written in September, had never been applied anywhere.</strong> It gives Mindset three card forms, not one: the swap (a limiting thought, then what is true instead), the price (a belief that feels like a virtue, then what it quietly costs), and two truths (a half-true belief, then which part to keep). A check of all 376 deck guide pairs found every single deck on the swap.',
      '<strong>Being the Easy-Going One</strong> in Giving Criticism is the first deck built on <em>the price</em>. Its fronts are not mistakes — <em>"I pick my battles"</em>, <em>"I\'m being generous by letting it go"</em> — so the backs do not correct them, they add up the bill: <em>"You\'ve picked none this year. That isn\'t picking."</em> The deck declares the form through its own guide pair, <em>A belief that feels like a strength / What it quietly costs</em>.',
      '<strong>Some Days Are Not Stories</strong> in Building a Story is the first deck built on <em>two truths</em>. <em>"Most of what happens to me isn\'t worth telling"</em> is half right, so a flat contradiction would be dishonest: <em>"True. And \'so I\'ve got nothing\' is the part I added."</em> Guide pair: <em>Something true, taken too far / The part to keep, and the part to drop</em>.',
      'The other four new decks use the swap, as will most of the pass. One deck holds one form; a pack may mix — which is now true of both of these packs.',
    ],
  },
  {
    version: 'v1.28.85', date: 'September 2026', title: 'Volume sweep — the Challenges pass is finished', audience: 'dev',
    items: [
      'Rounds 3 and 4 in one version: <strong>Deep Questions</strong>, <strong>Listening Through Questions</strong>, <strong>Starting Conversations Pt. 3 and Pt. 4</strong>, <strong>Persuasion and Influence — Pt. 2</strong>, <strong>Stories in Conversation</strong>, <strong>Building a Story</strong>, <strong>Story Banter</strong>, <strong>Reframing</strong> and <strong>Negotiation and Compromise</strong>. 154 cards.',
      '<strong>Every pack in the release scope now has 5 Challenges decks of 8 cards.</strong> 391 cards written across four rounds, each carrying one of its own pack\'s strategies and inheriting that strategy\'s back guide. No pack refers to a strategy it does not have.',
      'Two packs needed care rather than filling. <strong>Listening Through Questions</strong> was short by nineteen rather than fifteen, because four cards were lifted out in batch 6 — the decks that lost them are rebuilt with questions the pack actually has. <strong>Starting Conversations — Pt. 3</strong> had a deck answered entirely by one strategy; the new cards give it two more.',
      'Next in the sweep: Mindset, 520 cards.',
    ],
  },
  {
    version: 'v1.28.84', date: 'September 2026', title: 'Volume sweep, Challenges round 2 — five packs filled', audience: 'dev',
    items: [
      '<strong>Conflict Emotions</strong>, <strong>Emotion Labelling and Regulation</strong>, <strong>Supporting Conversations</strong>, <strong>Apologizing — Pt. 2</strong> and <strong>Giving Criticism</strong>: every Challenges deck goes from five cards to eight. 75 cards, all carrying one of the pack\'s own strategies and inheriting its back guide.',
      'No new decks and no category decisions in this round — the five packs already had the right five situations, they were simply three cards short in each.',
      'Challenges now stands at 40 cards in twelve of the twenty-two packs under spec. 154 cards left in the pass, across ten packs.',
    ],
  },
  {
    version: 'v1.28.83', date: 'September 2026', title: 'Volume sweep, Challenges round 1 — 162 cards, ten new decks', audience: 'dev',
    items: [
      'The seven packs where Challenges needed a decision rather than just filling. All seven now stand at the spec: <strong>5 decks, 40 cards</strong>.',
      '<strong>Role Based Humour got its five decks back.</strong> They are built from the pack\'s own Single Strategy inputs, and the pack made it easy: all seven roles answer the same eleven ordinary lines, so grouping those gives the categories — <em>Something Small Has Gone Wrong</em>, <em>They Are Complaining About Something</em>, <em>There Is Work Coming</em>, <em>Something Has Run Out</em>, <em>They Have Suggested Something</em>. The two opposite roles, Super Generous and Super Stingy, share the shortage deck, exactly as the Collections deck <em>Generous or Stingy</em> already does.',
      '<strong>Show Understanding — Pt. 2</strong> got the three decks approved in round 9 — <em>A Long Account Has Ended</em>, <em>You Might Have It Wrong</em>, <em>Two Things That Belong Together</em> — and <em>You Agreed With Something You Do Not Believe</em> became <strong>They Are Upset About a Principle</strong>, a situation rather than a mistake, with a new description to match.',
      '<strong>Setup Statement</strong> gained <em>Everyone Already Knows Each Other</em>. Its four existing decks are all about the other person being difficult; its inputs are full of arriving somewhere the group is already formed, and no deck covered it.',
      '<strong>Giving Examples</strong> gained <em>They Want Proof, Not a Story</em>, replacing the lifted <em>Too Many Examples</em>.',
      'The three strategies from pass 0 took their places: <em>Where Your Knowledge Ends</em> in two Explain Things 2 decks, <em>Ask for Time</em> in three Receiving Feedback decks, and <em>Say What Was Not Okay</em> in three Validation decks — <strong>deliberately not in <em>You Think They Are Wrong</em></strong>, where the pack\'s own rule says you should not say it.',
    ],
  },
  {
    version: 'v1.28.82', date: 'September 2026', title: 'Volume sweep, pass 0 — three new strategies', audience: 'dev',
    items: [
      'The volume sweep opens with the three strategies the name batches asked for, because a new strategy adds cards to Single Strategy, Mindset and Memorize at once &mdash; built later, parts of those passes would be rewritten.',
      '<strong>Where Your Knowledge Ends</strong> (Explain Things &mdash; Pt. 2): answer as far as you actually know and mark the line after it, instead of letting the sentence drift into guesswork. The pack goes from five strategies to six.',
      '<strong>Ask for Time</strong> (Receiving Feedback and Criticism): say you want to think, and say when you will come back. Four sequence steps had been waiting for it since batch 4 &mdash; <em>Say you need time</em> and <em>Name when you will come back</em> now carry its guide.',
      '<strong>Say What Was Not Okay</strong> (Validation): name the specific part of what happened that was wrong &mdash; the event, not the feeling. The pack had three strategies, all of which validate how somebody felt, reacted or thought; none said anything about what was done to them. It is the only move in the pack that involves agreeing, so it names an action rather than a person.',
      'Each brought 8 Single Strategy cards, a Mindset deck and a Memorize deck &mdash; 72 cards. The Core Idea decks were updated where they counted the pack\'s moves.',
    ],
  },
  {
    version: 'v1.28.81', date: 'September 2026', title: 'Names and guides, batch 6 — the last one', audience: 'dev',
    items: [
      'The final batch: <strong>Story Banter</strong>, <strong>Role Based Humour</strong>, <strong>Reframing</strong>, plus the 64 cards in <strong>Storytelling with the Six W\'s</strong> that never received their inherited back guide. All 20 strategies now have their own guide pair. <strong>Every strategy in all 52 release packs has one.</strong>',
      '<strong>Role Based Humour\'s 45 labels were in round brackets and lower case</strong> &mdash; <em>(the super generous one)</em> rather than <em>[The Super Generous One]</em>. The 20 Collections cards converted straight across.',
      '<strong>All five of its Challenges decks are lifted out.</strong> 22 of their 25 cards taught backing off, stepping out of character and repairing a joke that landed wrong &mdash; calibrating humour, not playing a role. The pack stays about the roles; the material becomes the seed of a pack of its own. Challenges will be rebuilt from the pack\'s own Single Strategy inputs in the volume sweep.',
      '<strong>Story Banter\'s <em>It Went On Too Long</em> is now the pack\'s own move.</strong> Its five cards ended the bit without naming how; <em>Solve It Ridiculously</em> is described as exactly that release valve, so four replies were rewritten to end the story by solving it absurdly.',
      '<strong>Reframing\'s two rule strategies did most of the work.</strong> 17 of 25 challenge replies are <em>Know When Not To</em> and six are <em>Offer It, Don\'t Impose It</em> &mdash; which is what a challenges deck about misfired reframes should be.',
      'Sequence steps: Story Banter 16 of 28, Reframing 18 of 18. Role Based Humour\'s 18 steps name no role and wait for the sequence-step pass.',
    ],
  },
  {
    version: 'v1.28.80', date: 'September 2026', title: 'Names and guides, batch 5 — questions and stories', audience: 'dev',
    items: [
      'Batch 5: <strong>Deep Questions</strong>, <strong>Listening Through Questions</strong>, <strong>Stories in Conversation</strong> and <strong>Building a Story</strong>. All 25 strategies get their own guide pair, 176 Collections and Challenges cards inherit their strategy\'s back guide, and <strong>73 of 74 sequence steps</strong> now carry theirs &mdash; up from 24.',
      'One rename: <em>Tell It With the Feeling In It</em> &rarr; <strong>Put the Feeling In</strong>.',
      '<strong>89 labels were invalid across two packs.</strong> 39 were the strategy in shorthand (<em>[detail]</em>, <em>[why]</em>, <em>[opening]</em>, <em>[turn]</em>) and translated straight across; 42 more were repair moves whose replies already did one of the pack\'s strategies. Four replies in Building a Story taught abandoning the story &mdash; which is <em>Cut It Loose</em> in the neighbouring pack &mdash; and were rewritten onto this pack\'s own moves.',
      '<strong>Listening Through Questions lost four challenge cards.</strong> They answered an interview that had stalled by putting the question down and offering something instead. Seven question strategies in a row is how a conversation becomes an interrogation, but the answer is not an eighth question strategy: the material is lifted out as the seed of a pack about the border between asking and talking.',
      'Sequence steps in three packs were the strategies in lowercase shorthand &mdash; <em>Detail</em>, <em>Why</em>, <em>Open</em>, <em>Turn</em>, <em>Takeaway</em>. 49 were renamed to the strategy they are, so they now inherit its guide like every other step.',
    ],
  },
  {
    version: 'v1.28.79', date: 'September 2026', title: 'Names and guides, batch 4 — criticism, feedback, negotiation, examples', audience: 'dev',
    items: [
      'Batch 4: <strong>Giving Criticism</strong>, <strong>Receiving Feedback and Criticism</strong>, <strong>Negotiation and Compromise</strong> and <strong>Giving Examples</strong>. All 25 strategies were sharing one guide row per pack &mdash; <em>This is the step you are on. Say your version out loud.</em> and the like, which describe the exercise rather than the move. All 25 now have their own pair, 185 Collections and Challenges cards inherit their strategy\'s back guide, and 70 sequence steps carry theirs.',
      'Four renames, all to shorten: <em>Show You Understand Their View</em> &rarr; <strong>See Their Side</strong> in Receiving Feedback, and in Negotiation <em>Show You Understood Theirs</em> &rarr; <strong>Say Theirs Back</strong>, <em>Offer Something That Includes Both</em> &rarr; <strong>Build From Both</strong>, <em>Say What You Cannot Move On</em> &rarr; <strong>Name Your Limit</strong>. Negotiation now reads as a series of seven short moves.',
      '<strong>Receiving Feedback had 0 of 22 sequence steps naming a strategy</strong> &mdash; the steps were the strategies in lowercase shorthand (<em>Acknowledge</em>, <em>Reflect openly</em>, <em>Look ahead</em>). 18 were renamed to the strategy they are. The remaining four ask for time before answering, which the pack has no strategy for; they wait for <em>Ask for Time</em> in the volume sweep.',
      '<strong>Giving Examples challenges had 25 labels and not one of them a strategy.</strong> 11 replies already did one and were relabelled &mdash; all five of <em>The Number Is Shaky</em> are Numbers and Evidence done honestly, which is what that strategy is about. Nine replies were rewritten. The deck <em>Too Many Examples</em> teaches when to stop rather than how to give an example, so it is lifted out to the content-gap list and replaced in the volume sweep.',
    ],
  },
  {
    version: 'v1.28.78', date: 'September 2026', title: 'Names and guides, batch 3 — the four emotion packs', audience: 'dev',
    items: [
      'Batch 3: <strong>Conflict Emotions</strong>, <strong>Emotion Labelling and Regulation</strong>, <strong>Validation</strong> and <strong>Supporting Conversations</strong>. All 18 strategies now have their own detailed guide pair, 182 Collections and Challenges cards inherit their strategy\'s back guide, and 46 sequence steps carry theirs.',
      'One rename: <em>Regulate Out Loud</em> &rarr; <strong>Announce the Pause</strong>. The old name described the mechanism rather than the move, and seven of its eight cards are exactly that &mdash; saying you are taking a moment, and taking it. The eighth was a reframe rather than a pause and has been rewritten, and the description\'s third route now reads <em>Name the return</em>.',
      '<strong>Validation:</strong> the four cards in <em>They Will Not Accept It</em> that carried <em>(ask what you got wrong)</em> &mdash; a move the pack does not have &mdash; now answer with Reflect the Feeling and Acknowledge the Perspective instead of handing the question back.',
      'Two near-duplicate pairs across packs were left standing on purpose: <em>Say What Happened</em> / <em>Name the Situation</em> and <em>Name Your Feeling</em> / <em>Label the Emotion</em>. Conflict Emotions aims its steps at the other person mid-conflict; Emotion Labelling is about understanding your own feeling. The guides carry the difference &mdash; <em>Express how you felt</em> against <em>Name and explain the feeling</em>.',
    ],
  },
  {
    version: 'v1.28.77', date: 'September 2026', title: 'Deck-level guide rows cleared across the release scope', audience: 'dev',
    items: [
      'A deck could carry its own guide row between the mode\'s row and the card\'s. In the core that layer was cleared long ago; outside it, <strong>405 decks in 21 packs still had one</strong> — including <em>What has gone wrong with this explanation?</em> (a question, and about difficulty — two things rule 6 forbids) and <strong>264 rows ending in "with the strategy in brackets"</strong>, which the label on the card already says.',
      'All of them now take the mode\'s row: <em>Choose a strategy when… / One way it could sound</em> in Collections and Challenges, <em>Use the planned strategy when…</em> in Sequences, <em>A limiting thought / A way to reset it</em> in Mindset, and nothing at all in Memorize (110 stray rows removed there). Detailed guide text is unaffected: the front comes from the mode, the back from the card\'s own strategy.',
      'Every deck in all 52 release packs is now on its mode\'s row — 1,272 of 1,272. The one exception found on the way was a Describe Things mindset deck with no guide rows at all.',
    ],
  },
  {
    version: 'v1.28.76', date: 'September 2026', title: 'Names and guides, batch 2 — and three decks lifted out of Show Understanding 2', audience: 'dev',
    items: [
      'Batch 2 of the programme and Extended packs: <strong>Explain Things — Pt. 2</strong>, <strong>Persuasion and Influence — Pt. 2</strong>, <strong>Assertive Communication 2</strong> and <strong>Setup Statement</strong>. All 18 strategies have their own detailed guide pair, 187 Collections and Challenges cards inherit their strategy\'s back guide, and 50 sequence steps carry theirs.',
      'Renamed: <em>Start Short, Then Go Deeper</em> → <strong>Short Version First</strong> · <em>Answer the W They Actually Asked</em> → <strong>The W They Need</strong> · <em>Status Setup</em> → <strong>Feeling Setup</strong> · <em>Background Setup</em> → <strong>Arrival Setup</strong>, the last two mirroring the rename in Setup Question. The type names in descriptions, memorize decks and sequence steps followed.',
      '<strong>Explain Things — Pt. 2 had no valid labels at all.</strong> All 44 Collections and Challenges cards carried move names (<em>when</em>, <em>land it</em>, <em>switch W</em>) and four carried Pt. 1\'s strategies. 41 were relabelled, three replies rewritten, and the deck <em>All Six</em> — which deliberately mixed both packs — became <strong>Which W Is Missing</strong>, built from this pack\'s own five.',
      '<strong>Three challenges decks left Show Understanding 2:</strong> <em>You Got It Wrong</em>, <em>The Summary Became a Speech</em> and <em>Checking Turned Into Interrupting</em>. Each taught a move the pack does not have — misunderstanding, brevity, interrupting — and each is a subject of its own. All fifteen cards are saved in Innehållsluckor §1e as material for future packs. The pack keeps two decks and gets new ones in the volume sweep.',
      'New rule <strong>§11i</strong>: a pack\'s challenges categories are built from its Single Strategy input cards, grouped by situation. Then every category is provably solvable with the pack\'s own strategies — which is exactly what went wrong above.',
    ],
  },
  {
    version: 'v1.28.75', date: 'September 2026', title: 'Bug fix: handsfree could not be opened at all', audience: 'dev',
    items: [
      '<strong>Every handsfree mode has been dead since v1.28.62.</strong> Tapping a handsfree card on the mode screen did nothing: <code>mode.show</code> still read the single checkbox <code>guideToggleHf</code>, which that same version had replaced with two (detailed / simple) and <code>syncGuideTogglesHf()</code>. The variable no longer existed, so the line threw a ReferenceError before <code>navToTraining()</code> ran — and a thrown listener is silent, so the screen simply never opened.',
      'One line fixed. All six handsfree modes open again, and the guide text follows the same three settings as the card modes.',
      'Why nothing caught it: no suite had ever called a handsfree <code>show()</code>. New <code>tools/test-handsfree.js</code> boots the app, flips the handsfree toggle and clicks all six cards, then checks the guide in detailed, simple and off. It is in <code>tools/run-tests.js</code>, which now runs fourteen suites.',
    ],
  },
  {
    version: 'v1.28.74', date: 'September 2026', title: 'Names and guides, batch 1 of the programme and Extended packs', audience: 'dev',
    items: [
      'First batch of the 23 programme and Extended packs that were never read through: <strong>Apologizing — Pt. 2</strong>, <strong>Starting Conversations — Pt. 3</strong>, <strong>Pt. 4</strong> and <strong>Show Understanding — Pt. 2</strong>. Every strategy now has its own detailed guide pair, and every Collections and Challenges card whose label names a strategy inherits that strategy\'s back guide (164 cards). Sequence steps that name a strategy carry its guide (75 steps).',
      'Renamed: <em>Make a Guess About Them</em> → <strong>Make a Guess</strong> · <em>Use Humour or Irony</em> → <strong>Joke About the Situation</strong> · <em>Mention Something That Happened</em> → <strong>Bring Something In</strong> · in Show Understanding 2 <em>Ask If You Got It Right</em> → <strong>Check Your Version</strong>, <em>Connect It to What They Said Earlier</em> → <strong>Link to Earlier</strong>, <em>Summarise the Whole Thing Back</em> → <strong>Sum It Up</strong>, <em>Say You Felt That Too</em> → <strong>Shared Feeling</strong>, <em>Name the Value You Share</em> → <strong>Shared Value</strong>, <em>Share, Then Bring It Back</em> → <strong>Share and Return</strong>. Memorize decks and five checkpoint questions followed.',
      '<strong>Apologizing — Pt. 1 goes back to the long names</strong> for its two shared steps: <em>What You Did</em> → <strong>Apologise for What You Did</strong>, <em>The Plan</em> → <strong>Say What You\'ll Do Differently</strong>. Rikard\'s decision: Pt. 1 and Pt. 2 are one process split by depth, so the steps they share carry the same name, and here the explanatory name is worth more than a short one. Apologizing 2 keeps all five of its names. <em>The Plan Is Empty</em> and <em>The Plan Is the Proof</em> are deck names and were left alone.',
      'Show Understanding 2: 26 of 44 Collections and Challenges labels were lower-case move names (<em>check</em>, <em>return</em>, <em>cut to three</em>) that mapped straight onto a strategy and now name it. The other 18 (<em>drop it</em>, <em>save it</em>, <em>honest half</em> …) are repair moves the pack has no strategy for, and wait for a label proposal (§11g).',
    ],
  },
  {
    version: 'v1.28.73', date: 'September 2026', title: 'Bug fix: app-system.js restored', audience: 'dev',
    items: [
      '<strong>app-system.js had lost its first 3,930 lines</strong> since v1.28.71 — feedback mode, pack card meta, the whole access level system (<code>PACK_CONFIG</code>, <code>window.accessLevel</code>), <code>BUNDLE_DEFS</code> and input bundles, the input counter default, the progress bar, access-level suggest mode and About. The file still parsed, so the app started, but no pack was locked and bundles were not filtered. The v1.28.71 What\'s New entry was inserted at the top of the list, and everything above the list was dropped in the same write.',
      'Restored from the v1.28.69 file on GitHub. Those 3,930 lines did not change between v1.28.69 and v1.28.72, so nothing newer was lost. Every other file was checked against both GitHub versions: all identical, or differing only by the known v1.28.70–72 changes.',
      'Why it got through: <code>verify-build</code> printed <em>PACK_CONFIG has 0 entries</em> without counting it as an error, and the three suites run that round do not touch app-system.js. The five that would have caught it need jsdom. verify-build now fails on an empty PACK_CONFIG or a missing access level system, and <code>tools/run-tests.js</code> runs all twelve suites in one go, including a new one that boots the whole app and reads the Sequences guide in all three guide modes.',
    ],
  },
  {
    version: 'v1.28.72', date: 'September 2026', title: 'The user list gets the guide setting', audience: 'dev',
    items: [
      'Nine versions of content work shipped since the user-facing list was last touched, and by the editorial rules almost none of it belongs there — pack improvements are bundled, not enumerated. One thing does: the <strong>detailed / simple guide text</strong> setting is a choice the user makes, so it gets an entry.',
      'Written to the rules above WHATS_NEW_USER: what you can do with it, not what was wrong before. The rewritten guides are one closing line, not a list.',
    ],
  },
  {
    version: 'v1.28.71', date: 'September 2026', title: 'Sequences get the same kind of guide as every other mode', audience: 'dev',
    items: [
      'The simple-mode front guide in Sequences read <em>What\'s happening, and the strategy to use</em>. Half of it was false — since v1.27.88 the strategy name is deliberately stripped from a step\'s front and moved to the back in brackets — and the other half was redundant, because describing the situation is what every front in the app does. It now reads <strong>Use the planned strategy when…</strong>',
      'That puts the three modes in one series, differing only in how the move is decided: <em>Use this strategy when…</em> in Single Strategy, where the name stands as the deck title · <em>Choose a strategy when…</em> in Collections and Challenges, where you pick · <em>Use the planned strategy when…</em> in Sequences, where the plan on the scenario card has already picked.',
      'Detailed mode is unchanged — a step has always shown its own guide there. 138 stored copies in the data were updated, along with the checker and both guide test suites; the ellipsis moved it into the group that must not gain a spoken full stop.',
    ],
  },
  {
    version: 'v1.28.69', date: 'September 2026', title: 'Broken Record was never over the spec', audience: 'dev',
    items: [
      '<strong>The 48 surplus cards are extra input bundles, not surplus.</strong> Broken Record\'s eight Single decks hold 5 free + 3 pro — exactly the spec — plus three <em>Services</em> and three <em>Family</em> cards each, declared in BUNDLE_DEFS and built on purpose. check-pack counted all fourteen against a spec of eight and had warned about it since the volume sweep. It now counts free + pro only and reports the rest as what they are: <em>Single Strategy: 8 decks, 64 cards (+48 in extra bundles)</em>. Broken Record went from 18 warnings to 2, and no card was deleted. Assertive Communication (workplace, domestic) and Humour Practise (family) were measured the same wrong way.',
      '<strong>Sequences now quote their lines in every core pack.</strong> Describe Things, Explain Things, Praise and Encouragement and Disagreeing wrote their sequence backs as bare sentences while the rest of the library quoted — 126 steps across twelve decks. It matters most in hands-free, where an unquoted back is ambiguous between a line to say and an instruction to follow. All four packs are at 0 errors and 0 warnings.',
      '<strong>26 of 27 core packs are now at zero errors and zero warnings.</strong> The one exception is Broken Record, where two reused backs remain — and one of those, the same sentence twice inside Keep the Same Words, is the strategy working as intended.',
    ],
  },
  {
    version: 'v1.28.68', date: 'September 2026', title: 'Two checks were wrong, and the last two loose cards', audience: 'dev',
    items: [
      '<strong>check-pack\'s label reader tested the wrong thing.</strong> A trailing bracket was dismissed as a stage direction when it <em>began</em> with and/then/let/say/pause/stop/wait — so real labels like <code>[say it back]</code> and <code>[stop and check]</code> were invisible. What decides is the position, exactly as the comment beside it always claimed: a reply before the bracket makes it a label. Across the whole library this surfaced only two hidden labels in the core, both in Describe Things, both long known.',
      'Those two cards are rewritten. <em>Too Much At Once</em> card 3 and <em>They Have Never Seen One</em> card 5 taught stopping the description and showing a picture — outside what the pack is about — and now use What It Is For and What It Resembles instead. Describe Things is at 0 errors.',
      'The doubled-word check also flagged correct English: <em>"What is it about that that is bad?"</em>. It now allows <code>that that</code> and <code>had had</code>. And Responding to Passive Aggression declares its two silent sequence steps in the description, the way §9b-3 asks — Let It Go often looks like nothing at all, and the deck now says so.',
    ],
  },
  {
    version: 'v1.28.67', date: 'September 2026', title: 'Eleven strategies renamed', audience: 'dev',
    items: [
      '<strong>278 occurrences across ten packs.</strong> Every one of the eleven names pointed somewhere other than the move it teaches. Five were idioms that mean something else in ordinary English — <em>Respectful Exit</em> reads as leaving the conversation in a pack about staying in it; <em>Get Out Cleanly</em> reads as escaping when the move is handing the floor back. Four pointed at a sibling strategy in the same pack: <em>Expand to a Subtopic</em> described what <em>Build on Their Point</em> does, and its own back-guide had to correct it in writing.',
      '<strong>Loop Back is now Say It Back</strong>, which the library already used in First Strategies for the same move with the identical back-guide. One move, one name. The pack that misnamed it had written four Challenges cards about handing the floor back rather than paraphrasing — the name, not carelessness, put them there.',
      'Two renames made a front guide repeat its own strategy name and were rewritten (§11b-VI), and <em>Step Sideways</em> let one of the remaining negating guides go: <em>A neighbouring subject, not a new one</em> became <em>A neighbouring subject</em>, because a clear name does the work the negation was doing.',
    ],
  },
  {
    version: 'v1.28.66', date: 'September 2026', title: 'The D-sweep, applied across nine packs', audience: 'dev',
    items: [
      '<strong>Sixteen cards rewritten and three guides reworded</strong>, all of them found by reading the inherited back-guide against the reply it sits above. Nine packs, all at 0 errors afterwards. Seven cards taught a move their pack does not have and were replaced in place; nine were faithful to their deck but not to the strategy named in the bracket.',
      '<strong>A guide should say what the back is, not what it is not.</strong> Three of the eighteen collisions were caused by the negation itself — <em>A concrete offer, not a wish</em> over a wish, <em>A postponement, not a refusal</em> over a refusal, <em>The detail, not the category</em> over a card that names no detail. A positive guide can be a little wide; a negating one can be flatly false. The thing to avoid belongs in Challenges, where the learner practises the right move against it.',
      'Two decks turned out to be following their own descriptions rather than drifting: <em>Show Understanding / Taking the Floor</em> and <em>Starting Conversations / A Flat Reply</em> both had a line assigning a move to a strategy that means something else. The strategies keep their meaning — Loop Back is paraphrasing, Simple Greeting opens — and the decks were brought back into line.',
    ],
  },
  {
    version: 'v1.28.65', date: 'September 2026', title: 'Saying No swaps its fifth challenge', audience: 'dev',
    items: [
      '<strong>You Should Actually Say Yes is out of the pack.</strong> The inherited back-guide exposed it the day it shipped: four of its eight cards answer with a yes while the guide above them read <em>A plain refusal</em>. The deck was not miswritten — it taught something the pack does not, six strategies for declining against one deck about not declining. It is held for a Saying No — Pt. 2, written up as §1c of Innehållsluckor along with its cards and four candidate strategies.',
      '<strong>Its replacement is You Are Put on the Spot</strong> — asked with no warning and no time, in a doorway, in a group chat, in front of other people. It was the real gap among the remaining four, and it is the natural home for Ask for Time First, which the pack had but never built a deck around. All six strategies appear across its eight cards.',
      'The guard survives the removal, which was the only objection worth testing: <em>They Have Power Over You</em> already ends with "If it is something they are entitled to ask, this is not the right pack", and Core Idea card 7 draws the same kind of boundary. Saying No is at 0 errors, 0 warnings and full volume.',
    ],
  },
  {
    version: 'v1.28.64', date: 'September 2026', title: 'Every card in Collections and Challenges carries its own back-guide', audience: 'dev',
    items: [
      '<strong>1774 cards</strong> across 225 decks in the 29 core packs now inherit the back-guide of the strategy their bracket names, instead of the mode default <em>One way it could sound</em>. The front guide stays general — on the front the move has not been chosen yet. Only two cards were left untouched, the known loose pair in Describe Things. Written up as §11b-IX of the Mönsterbibliotek, which amends §11b-II rather than overturning it.',
      '<strong>Twenty Single Strategy guides were rewritten first</strong>, because a guide that misses its own cards would otherwise have been copied 1774 times. All twenty were found by measuring each guide against its own eight backs: <em>Wish Them Well</em> said "towards their evening" on eight cards where none was about the evening; <em>What It Is</em> said "what you would see" over explanations of things you cannot see; <em>Offer a Workable Compromise</em> said "costs you nothing" over an offer of an hour. 110 sequence steps that had copied the old wording followed.',
      'A pattern worth recording: <strong>three silence guides in a row proved too narrow.</strong> Let Them Finish, Let It Go and Give a Short Reason all described the silent case as though it were the whole move, while most of their cards are lines you actually say.',
    ],
  },
  {
    version: 'v1.28.63', date: 'September 2026', title: 'The guide-text pair, wired properly', audience: 'dev',
    items: [
      'The two guide toggles now claim the settings overlay from <code>reload()</code> as well as <code>show()</code>, and the overlay re-reads the stored choice every time it opens (<code>DS.syncGuideToggles</code>). Before, a mode entered by any path that did not call <code>show()</code> left <code>_guideActiveMode</code> pointing at a mode the user had left, so a click could write under the wrong key or do nothing at all.',
      'New test harness: <code>tools/dom-shim.js</code> plus <code>tools/test-guidemode.js</code> load the real <code>mode-engine.js</code> and click the real toggles, instead of reading the source for the right-looking strings. jsdom still cannot be installed here, and the shim is the smallest thing that makes the engine runnable — 15 assertions, and the two toggles can no longer both be on after a sync.',
      'v1.28.62 shipped with all 44 source-reading guide tests green, which is exactly why the wiring gap got through. Tests that read code prove the code says something; only a test that runs it proves the code does something.',
    ],
  },
  {
    version: 'v1.28.62', date: 'September 2026', title: 'Guide text has three settings, not two', audience: 'dev',
    items: [
      'The training-screen setting <em>Show guide text</em> is now a pair: <strong>Show detailed guide text</strong> (the strategy\'s own line, and a card\'s own line where one exists) and <strong>Show simple guide text</strong> (the mode\'s general pair, the same on every card). They are mutually exclusive, and turning both off hides guides entirely — the old off state. Both card modes and all six hands-free modes.',
      'Detailed is the state a new user starts in, because a beginner needs the most guidance. Existing users keep what they had: the stored key is absent for anyone who had guides on, which reads as detailed, and <code>off</code> still reads as off. No migration.',
      'The mode defaults are resolved away at export time, so the app could not recover them — each mode config now declares its own <code>baseGuide</code> pair. Sequences\' situation card carries its own, since it is not a step. Memorize has no guides in either state.',
    ],
  },
  {
    version: 'v1.28.61', date: 'September 2026', title: 'The inherited back-guide — a test in three decks', audience: 'dev',
    items: [
      'The back-guide in Collections and Challenges is the mode default (<em>One way it could sound</em>) in all 233 core decks, while the card already names its strategy in brackets. The idea under test: on the back the strategy is known, so the card can carry that strategy\'s own Single Strategy guide instead. <strong>Three decks now do</strong> — Discussing / It Got Personal (single-strategy, the easy case), First Strategies / Read and Reply (four strategies, all guides fit) and Discussing / Two Monologues (mixed, and it contains the known misfits).',
      'No engine work was needed. <code>mode-engine.js</code> has resolved <code>(card.guideBack || deck.guideBack)</code> in every mode since v1.26.32, in training, hands-free and the editor alike; only sequences had used it. Per-card guides are therefore authorable today in all six modes.',
      'Three Single Strategy guides were rewritten first, because the test showed them too narrow for <em>their own</em> decks: <strong>Opening Statement</strong> <em>A remark about the room</em> → <em>A comment on the situation</em> (the deck\'s description names three kinds of statement and only one is the room); <strong>Ask What They Mean</strong> <em>A question about one word</em> → <em>A question that narrows it</em> (one of its eight cards was about a word); <strong>Let Them Finish</strong> <em>Silence, until they stop</em> → <em>Silence, or handing it back</em> (four of eight are spoken lines). The six sequence steps that had copied the old wording follow.',
    ],
  },
  {
    version: 'v1.28.52', date: 'September 2026', title: 'Memorize is finished in every Pro pack',
    items: [
      'Every Pro and freemium pack now has a Memorize deck for each of its strategies <em>and</em> one for each of the other five modes — Collections, Sequences, Challenges and Mindset — so the theory behind a collection or a challenge can be learned rather than only met in practice.',
      'The strategy decks went from six cards to eight, and the extra two in each are free.',
      '<strong>921 new cards in 20 packs</strong>, the last of them Giving Counter Examples, Discussing, Setup Question and Responding to Passive Aggression.',
    ],
  },
  {
    version: 'v1.28.52', date: 'September 2026', title: 'All six modes complete across the core library', audience: 'dev',
    items: [
      'Single Strategy, Collections, Sequences, Challenges, Mindset and Memorize are now at full volume in all 29 Pro and freemium packs. The volume sweep that began at v1.28.45 is closed: <strong>Collections 68 cards, Sequences 60 scenarios, Mindset 3 decks, Memorize 921 cards and 80 new mode decks.</strong>',
      'What remains is the read-through pass, not volume: descriptions against the templates, deck names, and whether the strategy boundaries hold. Most of the outstanding <strong>check-pack</strong> errors live there — Challenges labels that name the move rather than the strategy (Describe Things, Explain Things, Praise and Encouragement, Disagreeing, Giving Counter Examples, Discussing), and §9b-3 stage-direction backs in Single Strategy.',
      'Known deviations, flagged rather than changed: <strong>How to Interrupt / Get Out Cleanly</strong> is split 3 free + 5 pro instead of 5 + 3; <strong>Giving Counter Examples / Core Idea</strong> is 4 + 4; <strong>Broken Record</strong> has 14 cards per Single deck against a spec of 8; <strong>First Strategies</strong> has its Collections cards on free.',
    ],
  },
  {
    version: 'v1.28.43', date: 'September 2026', title: 'Sequences say which move you just made',
    items: [
      'Every step in a Sequence now names the strategy it uses, and the name appears on the back of the card in brackets once you have answered — so the front is only the situation, and you find out afterwards what the move was called.',
      'Scenario cards list the moves in order before you start. In several packs that list was empty and the card would not turn at all. It does now.',
      '<strong>Discussing</strong> was the worst of them: not one of its six scenarios used a strategy the pack teaches. Five steps now carry their real names — <em>Play It Back</em>, <em>Your Own View</em>, <em>Ask What They Mean</em>, <em>Keep the Temperature Down</em>.',
    ],
  },
  {
    version: 'v1.28.43', date: 'September 2026', title: 'Two ways a step could go unnamed', audience: 'dev',
    items: [
      '<code>splitMoveName</code> splits a step front at the em dash. A front written without one returns no name at all — the card showed the writer’s instruction as its front and got no bracket, and nothing flagged it. 22 steps were written that way.',
      '<code>scenarioMoveList</code> built the list from the fronts as written while <code>splitMoveName</code> stripped the <code>Step 1 ·</code> scaffolding for the bracket, so the list read <em>1. Step 1 · Concede</em> and the back read <em>[Concede]</em>. 878 steps across 47 packs use that prefix. Both now strip it, and <strong>test-flow.js</strong> asserts the rule so they cannot drift apart again.',
      'The measure worth keeping: <strong>192 of 195 scenarios</strong> in the pro and freemium packs now contain at least one strategy step. The three that do not are Setup Question’s first deck, where the phase exception applies.',
    ],
  },
  {
    version: 'v1.28.44', date: 'September 2026', title: 'Where the library actually stands', audience: 'dev',
    items: [
      'Complete across all Pro and freemium packs: <strong>Single Strategy</strong>, <strong>Challenges</strong>, <strong>Mindset</strong> (bar 24 cards), strategy names, guide texts and sequence step names.',
      'Outstanding volume: <strong>Collections 60 cards</strong>, <strong>Sequences 57 scenarios</strong> (the third scenario is missing in most decks), <strong>Memorize 825 cards</strong>. Eight of twenty-eight packs are finished outright.',
      '<strong>Apologizing — Pt. 2</strong> still uses <em>Apologise for What You Did</em> and <em>Say What You’ll Do Differently</em>, renamed in Pt. 1 only. It sits at Extended, outside the Pro sweep, so anyone owning both sees one strategy under two names.',
      'Describe Things, Explain Things and Praise and Encouragement have Challenges labels naming the move rather than the strategy — a boundary question for the read-through pass, not a format error.',
    ],
  },
  {
    version: 'v1.28.42', date: 'September 2026', title: 'Giving Counter Examples has two more strategies',
    items: [
      '<strong>The Smaller Claim</strong> — for when your example is met with “that’s just one person”. Instead of defending the example, you offer a narrower version of their claim that yours fits inside, and there is nothing left to argue about.',
      '<strong>Ask for Theirs</strong> — for when you doubt a sweeping claim but have no case of your own. You ask the person who made it to find the exception. It gets you information, and it is much harder to dismiss a hole someone finds in their own argument.',
      'Both come with their own cards in every training mode, and a fourth collection that makes you choose between them.',
    ],
  },
  {
    version: 'v1.28.41', date: 'September 2026', title: 'Setup Question, three ways',
    items: [
      'A setup question is a question you answer yourself. Its three Sequence decks now practise that in three different resolutions: <strong>Ask, Listen, Share</strong> breaks one question into its three beats, <strong>Changing the Question</strong> treats each question type as a whole move, and <strong>A Real Conversation</strong> mixes them the way it actually goes.',
      'The pack went from six scenarios to nine.',
    ],
  },
  {
    version: 'v1.28.39', date: 'September 2026', title: 'How to Interrupt: getting out again',
    items: [
      'The pack had five strategies for getting <em>into</em> a conversation and none for getting out of it. <strong>Get Out Cleanly</strong> is the sixth — saying your piece and handing the floor back, so the interruption ends as a contribution rather than a takeover.',
    ],
  },
  {
    version: 'v1.28.38', date: 'September 2026', title: 'Shorter strategy names, and a guide on every card',
    items: [
      'Fifty-six strategies across twenty-nine packs have been renamed. Long descriptions like <em>Answer What They Are Really Asking</em> have become names you can actually say — <em>Behind the Question</em> — and the meaning moved into the guide text under the card instead.',
      'Every card now carries two short lines: what the move is for, and what the answer should be. <em>Offer the version you both accept when…</em> / <em>A narrower claim, agreed.</em>',
      '<strong>Ratings and notes you left on a renamed deck will not follow it.</strong> The cards are the same; only the name changed.',
    ],
  },
  {
    version: 'v1.28.36', date: 'September 2026', title: 'What the tooling learned this month', audience: 'dev',
    items: [
      '<strong>check-pack.js</strong> §11b-VII rule 4 was flagging every back containing <em>answer</em>, including <em>An answer of the same size</em> where the qualifier carries the whole meaning. It now flags only the bare noun standing last. No pack text changed.',
      '<strong>514 card labels normalised</strong> (v1.28.18) from lower-case parentheses to bracketed strategy names — <code>(signal the interruption)</code> to <code>[Signal the Interruption]</code> — across thirteen packs. Stage directions in parentheses were left alone; the conversion only fired when the label matched a strategy the pack actually has.',
      '<strong>test-flow.js</strong> had encoded a bug as a fixture — <em>“expected at least one scenario with no derivable list”</em> — and failed when the bug was fixed. Rewritten to test the rule across the whole library. An assertion that names one pack as an example of a defect dies with the defect.',
      'Run <strong>verify-build.js</strong> <em>after</em> the version bump, not before. It checks <code>VERSION</code> against the <code>?v=</code> cache-bust tags in index.html, and run early it passes on the old pair while sixteen stale tags ship.',
    ],
  },
  {
    version: 'v1.28.30', date: 'September 2026', title: 'Challenges, filled out everywhere',
    items: [
      'Three hundred new Challenges cards across twenty packs. Every Pro pack now has all five kinds of thing-that-goes-wrong, with eight cards each — the mode is complete across the library.',
      'The new cards lean on the strategies that had almost no Challenges coverage, so the choice you are asked to make is a real one more often.',
    ],
  },
  {
    version: 'v1.28.07', date: 'September 2026', title: 'Mindset, complete in every Pro pack',
    items: [
      'A hundred new Mindset cards, and fifteen decks renamed from the training mode to the thought that actually stops people — <em>The Interrupting Mindset</em> is now <em>Interrupting Is Always Rude</em>, which is the sentence you are arguing with.',
      'Five new decks, including two that name something rarely said out loud: that inviting someone in feels like losing the floor, and that a joke feels like it undercuts your point.',
      'Ratings on the renamed Mindset decks do not carry over.',
    ],
  },
  {
    version: 'v1.27.50', date: 'August 2026', title: 'Assertive Communication, in two parts',
    items: [
      '<strong>Assertive Communication</strong>, free. The four moves Manuel J. Smith taught for the moment somebody is criticising, pressuring or guilt-tripping you: <em>Broken Record</em>, <em>Fogging</em>, <em>Negative Assertion</em> and <em>Negative Inquiry</em>.',
      '<strong>Part 2 — Social &amp; Equal Connections</strong>, in the Extended store. The other half, and the one nobody teaches: catching the details people drop without being asked, saying what you actually feel, declaring a want with no excuse attached, and trading the practical half of a conflict without giving up the part that matters.',
      'Part 1 is what to do when it is coming at you. Part 2 is what to do first.',
    ],
  },
  {
    version: 'v1.27.50', date: 'August 2026', title: 'A book in, two packs out', audience: 'dev',
    items: [
      'Both Assertive Communication packs were planned and drafted in Gemini Notebook from <em>When I Say No, I Feel Guilty</em>, then corrected against <strong>check-pack.js</strong> over four rounds. It found all seven named techniques, including the three the old pack had dropped, and mapped the Bill of Assertive Rights to nine Mindset decks.',
      'What it kept getting wrong is worth remembering: it fixes the line you point at, not the rule behind it. Told to repair one malformed step name it repaired that one and wrote two more in the next pack.',
      '<strong>check-pack.js</strong> gained three checks it had been missing — bullet-list names in descriptions, the <code>[Strategy]</code> label on a card measured against the pack’s own list, and a sequence step name with text appended. Zero false positives across all 116 packs.',
      '<strong>tools/verify-build.js</strong> — compares the published app file by file against the local one. VERSION only proves that <em>app-core.js</em> arrived; this counts the packs in the data too.',
    ],
  },
  {
    version: 'v1.27.49', date: 'August 2026', title: 'Two packs, rebuilt',
    items: [
      '<strong>Compliments</strong> and <strong>Responsive Humour</strong> have been rewritten to the size the newer packs are — roughly half as much material again in each, with every training mode filled out properly.',
      'Compliments gained the half almost nobody practises: three new collections that make you choose <em>what</em> you are praising, how far to go, and what to do when one is coming at you.',
    ],
  },
  {
    version: 'v1.27.48', date: 'August 2026', title: 'Domestic Situations comes with the pack', audience: 'dev',
    items: [
      '<strong>assertive::domestic</strong> was sold in Extended and in all three kits, for a pack sitting at minLevel ‘complete’ that no real user can open. It is out of the store; the bundle is now tier <code>pro-opt</code>, a toggle inside the pack like its sibling <em>Workplace &amp; Social</em>. No cards moved — only the gate.',
      'The parts got 19 kr cheaper, so the kit prices followed. They have been re-set twice since: 129/169/89, then 149/189/99 when Assertive Pt. 2 joined. <strong>test-store.js</strong> now recomputes the ratios from the catalogue itself, so the discount cannot quietly drift again.',
    ],
  },
  {
    version: 'v1.27.47', date: 'August 2026', title: 'The Extended store is not open yet',
    items: [
      'Every <em>Add</em> button now says <strong>Coming soon</strong> and does nothing. Purchases are not built, and until they are, nothing should look like it can be bought.',
      'Everything else in the store still works — browse it, read what each pack contains, see what it will cost.',
    ],
  },
  {
    version: 'v1.27.46', date: 'August 2026', title: 'Packs a programme has just given you', audience: 'dev',
    items: [
      'The discovery rule has two halves: a pack in an unlocked Part is trainable <em>inside</em> the programme immediately, and spreads to the Library, Topics and search only once that Part’s own checkpoint is passed. The second half worked. The first half never had.',
      'The programme screen opens packs through <code>showModeScreen</code>, which asked <code>canAccess()</code> and was told no — so a free user who had passed Part 1 of Conversation Foundations got “This pack requires Pro” on the two packs Part 2 had just handed them.',
      'Fixed with an explicit <code>viaProgram</code> flag, and pinned by <strong>test-progroute.js</strong>, which checks both halves at the same moment.',
    ],
  },
  {
    version: 'v1.27.45', date: 'August 2026', title: 'Five packs rebuilt, three new introductions',
    items: [
      '<strong>Show Understanding</strong>, <strong>Starting Conversations — Pt. 1</strong>, <strong>Talking About Yourself</strong>, <strong>Exploring a Topic</strong> and <strong>Changing Topics</strong> have all been rewritten. Every mode is filled out, the collections make you choose between three strategies rather than two, and every sequence has three scenarios instead of one.',
      'Three of them had no introduction at all. Talking About Yourself, Exploring a Topic and Changing Topics now open with one, and every introduction ends on the same page: <em>Choosing One</em>. Picking the right move is the exercise, and it was the part none of them said out loud.',
      'Some deck names have changed, so a rating or a note you left on a renamed deck will not follow it.',
    ],
  },
  {
    version: 'v1.27.42', date: 'August 2026', title: 'Measuring the library instead of reading it', audience: 'dev',
    items: [
      '<strong>tools/check-pack.js</strong> reads a pack with the app’s own parser and measures it against the specification — deck and card counts, free/pro split, guide texts, description lengths, repeated backs, and the one a human cannot do at scale: a sequence or collection naming a strategy that lives in a different pack.',
      '<strong>Packregister — status och regelnivå.md</strong>, generated by <strong>tools/pack-register.js</strong>. Three rule levels, measured from the app data, plus a hand-filled date for when each pack was last rewritten. It survives regeneration.',
      'Where it stands: 12 of 116 packs at R3.',
    ],
  },
  {
    version: 'v1.27.41', date: 'August 2026', title: 'The Assertive Four', audience: 'dev',
    items: [
      'The original <em>Assertive Communication</em> is now called <strong>The Assertive Four</strong> and sits at minLevel ‘complete’. The pack key is untouched, so ratings, notes and favourites follow it.',
      'The name was freed deliberately, for the new packs built from the current rules. The old one is kept exactly as it was.',
    ],
  },
  {
    version: 'v1.27.40', date: 'August 2026', title: 'The scenario card turns again', audience: 'dev',
    items: [
      'In Sequences, the card that sets the scene lists the moves in order on its back. <code>scenarioMoveList</code> required an em dash in each step front to find the move’s name, so a pack that wrote <em>Agreement on facts (I know)</em> produced an empty list and a card that would not turn at all.',
      'When a step front has no dash, the whole front is the name. That repaired 65 of 71 broken scenario cards across 14 packs. The remaining six are content rather than code — four write their steps as whole sentences, two are purely reactive.',
    ],
  },
  {
    version: 'v1.27.16', date: 'August 2026', title: 'Notes, and text that reads properly',
    items: [
      'You can keep a <strong>note on a pack or a programme</strong> now, not just on a card — reach it from the gear on the pack screen. Notes come along in the export.',
      'In Sequences, the card that sets the scene now shows the moves in order on its back.',
      'Bold text in a strategy’s explanation is finally rendered as bold, instead of showing the asterisks.',
    ],
  },
  {
    version: 'v1.27.10', date: 'August 2026', title: 'A code can open a single pack',
    items: [
      'Access codes come in two kinds now. One raises your whole level for a period; the other opens <strong>named packs</strong> and changes nothing else. Several pack codes can run at once, each with its own end date, and the row under the code field counts them down.',
      'A pack code works whatever level the pack normally needs — which is the point of handing one out.',
    ],
  },
  {
    version: 'v1.26.97', date: 'August 2026', title: 'Feedback circles, and this screen', audience: 'dev',
    items: [
      'The rating circles in feedback mode sit at the bottom edge of the card now. They were positioned against the inner card face, which left 40px of the card’s own padding underneath them — that is why three rounds of extra padding barely moved them.',
      'The bar no longer swallows touches. Only the circles themselves take a tap, so a swipe or a flip that starts near them reaches the card.',
      '<strong>What’s new</strong> is two lists. The row in normal settings shows what a user can use; this one shows everything, including developer-only work.',
    ],
  },
  {
    version: 'v1.26.96', date: 'August 2026', title: 'Checkpoint questions come from the vault', audience: 'dev',
    items: [
      '<strong>tools/import-test.js</strong> and <strong>tools/export-tests.js</strong> — question banks now live as .md files in <em>Programs/Tests/</em> and import into the app the same way packs do. No manifest: each file names its own program, section and checkpoint.',
      'The syntax is the one the in-app editor already reads, so a test file can be pasted into the editor as well. Full reference in <em>Appdokumentation/import syntax/Testsyntax</em>.',
      'Question banks finished so far: Conversation Foundations, Say It Well, Opening a Conversation and Warmth &amp; Connection — 40 questions each, 20 drawn.',
    ],
  },
  {
    version: 'v1.26.92', date: 'August 2026', title: '22 packs at complete level', audience: 'dev',
    items: [
      'Imported from NotebookLM and visible to nobody but you: <strong>The Masculine Blueprint</strong> Pt. 1–6 plus the Swedish one, <strong>Parenting</strong> 01–05, <strong>Praxeology Frame</strong> 01–05 and <strong>Praxeology Dread</strong> 01–05.',
      'All at minLevel ‘complete’, so they appear in no list at freemium, Pro or Extended.',
      'Open question before any of it ships: the <em>Refusing the Rejection</em> strategy in The Masculine Blueprint.',
    ],
  },
  {
    version: 'v1.26.90', date: 'August 2026', title: 'Beta codes, both ways', audience: 'dev',
    items: [
      '<strong>BETA2026</strong> grants Pro for 60 days, redeemed in Settings. The grant is a date rather than a flag, so it lapses on the tester’s own device whatever you push. The code itself stops being redeemable after 2026-12-31.',
      '<strong>Clear beta access code</strong> in developer settings takes it back immediately, without wiping progress or favourites.',
    ],
  },
  {
    version: 'v1.26.89', date: 'August 2026', title: 'If you have an access code',
    items: [
      'Settings now has <strong>Have an access code?</strong> — enter one to unlock Pro for a set period. Codes are given out for testing.',
    ],
  },
  {
    version: 'v1.26.86', date: 'August 2026', title: 'Six programmes to work through',
    items: [
      'New programmes: <strong>Say It Well</strong>, <strong>Warmth &amp; Connection</strong>, <strong>Opening a Conversation</strong>, <strong>Persuasion &amp; Negotiation</strong> and <strong>Humour</strong> — alongside Conversation Foundations, which stays free through Part 2.',
      'Some packs are now <em>earned</em>. They are not in the Library at all until you pass the checkpoint that releases them, and then they appear everywhere at once and stay yours.',
      '<strong>Difficult Conversations</strong> is available in the Extended store as a programme of its own.',
    ],
  },
  {
    version: 'v1.26.82', date: 'August 2026', title: 'Programme tiers', audience: 'dev',
    items: [
      'PROGRAM_CONFIG gives programmes the same four levels as packs, and a programme missing from the table defaults to ‘pro’ with a console warning rather than being handed out free.',
      'New pack level <strong>program</strong>: hidden everywhere until a checkpoint releases it. Sections carry their own minLevel, which is how Conversation Foundations is free through Part 2 and Pro from Part 3.',
    ],
  },
  {
    date: 'Earlier builds', title: 'Developer tools', audience: 'dev',
    items: [
      '<strong>Feedback mode</strong> — four circles on every card for rating the content as you train. The ratings are yours alone; tapping the selected circle again clears it.',
      '<strong>Tag mode</strong> — adds tagging controls, including the gear on a programme screen and the Free/Pro/Ext bar for setting a card’s access level.',
      '<strong>The editor</strong> — builds and edits packs and programmes in the browser, and reads the same paste format the import scripts use.',
    ],
  },
  {
    version: 'v1.26.78', date: 'August 2026', title: 'Two new packs',
    items: [
      '<strong>Compliments</strong> \u2014 saying the specific thing, praising a choice rather than luck, and the half nobody practises: taking one without deflecting it.',
      '<strong>Responsive Humour</strong> \u2014 five ways to answer an ordinary sentence: exaggeration, understatement, misdirection, deliberate misunderstanding and irony.',
    ],
  },
  {
    version: 'v1.26.75', date: 'August 2026', title: 'A programme to start with',
    items: [
      'New programme: <strong>Conversation Foundations</strong>. Four parts, from your first sentence to a conversation that goes somewhere \u2014 and the packs you pass stay yours.',
    ],
  },
  {
    version: 'v1.26.74', date: 'August 2026', title: 'Introductions and suggestions',
    items: [
      'Every free pack now opens with a short introduction to its strategies. Tap the pack name above the training modes to read it again.',
      'The Recommended row on the home screen updates itself, based on the topics you have actually been training.',
    ],
  },
  {
    version: 'v1.26.73', date: 'August 2026', title: 'Finding things in a bigger library',
    items: [
      'Search is <strong>ranked</strong> now. A match in a pack\u2019s name comes before a match in a strategy, which comes before a mention somewhere in the cards \u2014 and each result tells you why it turned up.',
      'Topics are searchable too, so &ldquo;repair&rdquo; finds the Apologizing packs even where the word is on no card.',
      'The Library separates what you can train with today from what Pro adds.',
    ],
  },
  {
    version: 'v1.26.67', date: 'August 2026', title: 'The library, many times over',
    items: [
      '<strong>38 new packs</strong> across every topic \u2014 Saying No, Making Requests, Giving Criticism, Deep Questions, Handling Conflict, Persuasion, Storytelling and thirty more.',
      'New in the free version: <strong>First Strategies</strong>, six strategies that make a whole small conversation \u2014 with <em>every</em> training mode unlocked, so you can see what the others are.',
      'Also free: <strong>Show Understanding</strong> and <strong>Starting Conversations \u2014 Pt. 1</strong>.',
    ],
  },
  {
    version: 'v1.26.66', date: 'August 2026', title: 'Progress and programs',
    items: [
      'The Progress calendar can now show your week as a <strong>bar chart</strong> of minutes per day \u2014 tap Bars above the calendar.',
      'Passing a checkpoint in a program now tells you exactly <strong>which packs it added to your library</strong>, and what comes next.',
    ],
  },
  {
    version: 'v1.26.65', date: 'July 2026', title: 'New pack',
    items: [
      '<strong>Setup Statement</strong> \u2014 open a conversation by giving the other person something to react to.',
    ],
  },
  {
    version: 'v1.26.62', date: 'July 2026', title: 'Finding things faster',
    items: [
      'Packs and topics are now listed <strong>alphabetically</strong> everywhere in the Library.',
      'The Pro screen shows the free trial and both plans clearly.',
    ],
  },
  {
    version: 'v1.26.56', date: 'July 2026', title: 'Programs, and a new one to try',
    items: [
      'New program: <strong>Saying No With Confidence</strong>, with the packs <strong>The Happy No</strong> and <strong>The Regretful No</strong>.',
      'Packs you earn in a program now stay yours \u2014 once you pass that part\u2019s checkpoint they appear in the Library, Topics and search.',
    ],
  },
  {
    version: 'v1.26.55', date: 'July 2026', title: 'Two new packs',
    items: [
      '<strong>Speaking Up in Groups</strong> \u2014 taking the floor, and handling interruptions.',
      '<strong>Playful Refusals</strong> \u2014 saying no with a light touch.',
    ],
  },
  {
    version: 'v1.26.53', date: 'July 2026', title: 'New pack',
    items: [
      '<strong>Transitions</strong> \u2014 moving a conversation from one thing to another without it feeling abrupt.',
    ],
  },
  {
    version: 'v1.26.49', date: 'July 2026', title: 'A real training calendar',
    items: [
      'Progress now shows a calendar over week, two weeks or a month, shaded by how much you trained. Tap any day, week or the title to see what you practised.',
    ],
  },
  {
    version: 'v1.26.44', date: 'July 2026', title: 'Pack introductions',
    items: [
      'Packs can now open with a short introduction to their strategies. Tap the pack name above the training modes to see it again.',
    ],
  },
];

// ── WHATS_NEW_USER ───────────────────────────────────────────────────────────
// v1.28.55, Rikards beslut. Den användarvända listan är INTE ett filtrerat
// WHATS_NEW längre — den är en egen, kurerad lista, och de två redigeras efter
// helt olika regler.
//
//   WHATS_NEW      — utvecklarloggen. Varje version, varje fynd, all detalj.
//                    Syns bara i developer settings. Rör den som förut.
//   WHATS_NEW_USER — vad användaren ser. Nya funktioner som är värda att bli
//                    glad över, sammanfattade över längre tid.
//
// Redigeringsregler för den här listan, i Rikards ord: *"kort, imponerande och
// enkelt att följa"*. Alltså:
//
//   • En post per TEMA eller PERIOD, inte per version. `version` utelämnas när
//     posten spänner över flera — då visas bara månaden.
//   • Högst tre punkter per post, och varje punkt är en funktion man kan
//     använda, inte en ändring som gjorts.
//   • Förbättringar buntas allmänt ("pack improvements"), aldrig uppräknade.
//   • Inga erkännanden av hur något var trasigt förut, inga siffror på hur
//     mycket som var fel, inga varningar om vad som går förlorat.
//   • Lägg bara till när något nytt är värt att öppna appen för. De flesta
//     versioner ska ALDRIG stå här.
const WHATS_NEW_USER = [
  {
    date: 'September 2026', title: 'Stay on the same card',
    items: [
      'A new switch in the training settings. Swiping sideways normally means <em>next strategy, back to card one</em>. With this on it means <em>next strategy, same card</em> — card six of eight stays card six of eight, in both directions.',
      'Some packs are written so that the same card number is the same situation in every strategy. <strong>Storytelling with the Six W’s</strong> is the clearest: one event, six ways of telling it. <strong>Role Based Humour</strong> gives seven characters the same line to answer. In those packs a sideways swipe becomes its own exercise — one situation, several ways to handle it, side by side.',
      'Off to begin with, and remembered on your device.',
    ],
  },
  {
    date: 'September 2026', title: 'Choose how much the guide tells you',
    items: [
      'The training settings now offer <strong>detailed</strong> or <strong>simple</strong> guide text. Detailed names the move — <em>a line that lowers the heat</em>, <em>their point, in your words</em> — so you know what the answer should do before you turn the card. Simple keeps one steady line instead. Turn both off and the cards stand on their own.',
      'Detailed is on to begin with, and the choice is remembered per pack and per mode, so you can keep the help where you still want it and drop it where you do not.',
      'The guides themselves were rewritten across the library to say what the card actually does.',
    ],
  },
  {
    date: 'September 2026', title: 'Six ways to train, in every Pro pack',
    items: [
      'Single Strategy, Collections, Sequences, Challenges, Mindset and Memorize are now filled out in full across every Pro and freemium pack — whichever mode you reach for, the material is there.',
      '<strong>Memorize</strong> has grown the most: a deck for every strategy, and one for each of the other modes, so the thinking behind a collection or a challenge is something you can learn rather than only run into.',
      'Pack improvements throughout, including new strategies in the packs whose material called for them.',
    ],
  },
  {
    date: 'September 2026', title: 'Every card tells you what the move was',
    items: [
      'Each card now carries two short lines: what the move is for, and what your answer should sound like.',
      'In <strong>Sequences</strong>, the back of a card names the strategy you just used, and the scenario card lists the moves in order before you start.',
      'Strategy names across the library are short enough to carry in your head — <em>Behind the Question</em> rather than a sentence describing it.',
    ],
  },
  {
    version: 'v1.27.50', date: 'August 2026', title: 'Assertive Communication, in two parts',
    items: [
      '<strong>Assertive Communication</strong>, free. The four moves Manuel J. Smith taught for the moment somebody is criticising, pressuring or guilt-tripping you: Broken Record, Fogging, Negative Assertion and Negative Inquiry.',
      '<strong>Part 2 — Social &amp; Equal Connections</strong>, in the Extended store. Catching the details people drop without being asked, saying what you actually feel, and declaring a want with no excuse attached.',
      'Part 1 is what to do when it is coming at you. Part 2 is what to do first.',
    ],
  },
  {
    date: 'August 2026', title: 'A much bigger library',
    items: [
      '38 new packs across every topic — Saying No, Making Requests, Giving Criticism, Deep Questions, Persuasion, Storytelling and thirty more.',
      'Free to train with: <strong>First Strategies</strong>, with every mode unlocked so you can see what the others are, plus <strong>Show Understanding</strong> and <strong>Starting Conversations — Pt. 1</strong>.',
      'The Extended store is open to browse: read what each pack contains and what it will cost.',
    ],
  },
  {
    date: 'August 2026', title: 'Programmes to work through',
    items: [
      'Six programmes: <strong>Conversation Foundations</strong>, free through Part 2, alongside Say It Well, Warmth &amp; Connection, Opening a Conversation, Persuasion &amp; Negotiation and Humour.',
      'Packs you earn by passing a checkpoint stay yours — they appear in the Library, Topics and search all at once.',
      '<strong>Difficult Conversations</strong> is available as a programme of its own.',
    ],
  },
  {
    date: 'August 2026', title: 'Finding things, keeping notes, unlocking packs',
    items: [
      'Search is ranked and tells you why each result turned up — and it covers topics, so “repair” finds the Apologizing packs even where the word is on no card.',
      'Keep a note on a pack or a programme, not just on a card. Notes come along in the export.',
      'Settings has <strong>Have an access code?</strong> — one kind raises your level for a period, the other opens named packs. Several can run at once, each with its own end date.',
    ],
  },
  {
    date: 'July 2026', title: 'Progress you can look back at',
    items: [
      'A calendar over a week, two weeks or a month, shaded by how much you trained. Tap any day, week or the title to see what you practised.',
      'Or switch to bars for minutes per day.',
    ],
  },
  {
    date: 'July 2026', title: 'Every pack opens with an introduction',
    items: [
      'A short introduction to a pack’s strategies before you start. Tap the pack name above the training modes to read it again.',
      'The Recommended row on the home screen updates itself from the topics you have actually been training.',
    ],
  },
];

(function initWhatsNew() {
  const btn     = document.getElementById('whatsNewBtn');
  const overlay = document.getElementById('whatsNewOverlay');
  const close   = document.getElementById('whatsNewClose');
  const body    = document.getElementById('whatsNewBody');
  const title   = document.getElementById('whatsNewTitle');
  if (!overlay || !body) return;

  // v1.26.97 \u2014 rendered per opening rather than once, because the same
  // overlay now shows two different lists. 'dev' shows everything.
  function render(mode) {
    // v1.28.55: två listor, inte en filtrerad. Dev-läget visar hela
    // utvecklarloggen som förut; användarläget visar den kurerade listan.
    // `audience: 'dev'` har därmed ingen effekt längre — taggen står kvar i
    // WHATS_NEW eftersom den fortfarande märker ut posterna i dev-vyn.
    const entries = mode === 'dev' ? WHATS_NEW : WHATS_NEW_USER;
    if (title) title.innerHTML = mode === 'dev' ? 'What&rsquo;s new \u2014 all entries' : 'What&rsquo;s new';
    body.innerHTML = entries.map(e =>
      '<div class="whatsnew-entry">'
      + '<div class="whatsnew-title">' + e.title
      + (mode === 'dev' && e.audience === 'dev' ? '<span class="whatsnew-tag">dev</span>' : '')
      + '</div>'
      + '<div class="whatsnew-meta">' + e.date + (e.version ? ' \u00b7 ' + e.version : '') + '</div>'
      + '<ul class="whatsnew-list">'
      + e.items.map(i => '<li>' + i + '</li>').join('')
      + '</ul></div>'
    ).join('');
    body.scrollTop = 0;
  }

  window._whatsNew = { open: mode => { render(mode === 'dev' ? 'dev' : 'user'); overlay.classList.add('open'); } };

  if (btn) btn.addEventListener('click', () => window._whatsNew.open('user'));
  if (close) close.addEventListener('click', () => overlay.classList.remove('open'));
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });
})();

// ─── SHARED PROMPT SPACING (v1.26.66) ──────────────────────────────
// Every prompt the app raises on its own — the Pro nudge, the rating gate —
// writes its timestamp here, and none of them may appear within a few days of
// another. Without this the two can stack on the same afternoon and the app
// starts to feel like it wants something from you.
const DS_PROMPT_KEY      = 'ds_last_prompt';
const DS_PROMPT_GAP_DAYS = 3;
function dsPromptRecently(days) {
  const t = parseInt(localStorage.getItem(DS_PROMPT_KEY) || '0', 10);
  return t > 0 && (Date.now() - t) / 86400000 < (days || DS_PROMPT_GAP_DAYS);
}
function dsMarkPrompt() { try { localStorage.setItem(DS_PROMPT_KEY, String(Date.now())); } catch {} }

// ─── PRO NUDGE (v1.26.66) ────────────────────────────────────────
// Freemium users get an occasional reminder that Pro exists. All the pacing
// sits in PRO_NUDGE_RULES so it can be tuned in one place. The intent: it
// turns up now and then, never twice within a few days, never during
// onboarding, and only every few times you touch a locked pack.
const PRO_NUDGE_RULES = {
  graceDays:          3,  // nothing at all in the first days after install
  firstMinSessions:   3,  // and not before the app has actually been used
  dayInterval:        7,  // eligible again this many days after the last one
  sessionInterval:    8,  // or after this many pack openings — whichever first
  cooldownDays:       4,  // hard floor between two nudges, whatever triggered
  lockedEvery:        4,  // only every Nth tap on a locked pack
  lockedCooldownDays: 2,  // and not if one turned up very recently
  slowAfter:          4,  // once shown this many times, every interval doubles
};

(function initProNudge() {
  const KEY     = 'ds_pro_nudge';
  const DAY     = 86400000;
  const R       = PRO_NUDGE_RULES;
  const overlay = document.getElementById('proNudgeOverlay');
  if (!overlay) return;

  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } };
  const save = s => { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch {} };

  function state() {
    const s = load();
    if (!s.installed) { s.installed = Date.now(); save(s); }
    s.sessions   = s.sessions   || 0;   // pack openings that were NOT locked
    s.shown      = s.shown      || 0;
    s.lockedTaps = s.lockedTaps || 0;
    return s;
  }

  const isFreemium = () => !!(window.accessLevel && window.accessLevel.getLevel() === 'freemium');
  const daysSince  = ts => (Date.now() - ts) / DAY;
  const mult       = s  => (s.shown >= R.slowAfter ? 2 : 1);
  const cooledDown = (s, days) => !s.lastShown || daysSince(s.lastShown) >= days;

  // Never land on top of something else the user is in the middle of.
  function busy() {
    if (!localStorage.getItem('ds_onboarding_done')) return true;
    const intro = document.getElementById('packIntroScreen');
    if (intro && intro.style.display !== 'none') return true;
    return !!document.querySelector('.settings-overlay.open');
  }

  function show(reason) {
    if (!isFreemium() || busy() || dsPromptRecently()) return false;
    const s = state();
    s.shown         += 1;
    s.lastShown      = Date.now();
    s.sessionsAtLast = s.sessions;
    s.lastReason     = reason;
    save(s);
    dsMarkPrompt();
    overlay.classList.add('open');
    return true;
  }

  // Developer preview: opens the screen without touching any of the timers,
  // so looking at it does not push the real one further away.
  function preview() { overlay.classList.add('open'); }

  // Time- and usage-based check. Runs at startup and when the user comes back
  // to the dashboard, so the session rule can fire without waiting a restart.
  function maybeShowPeriodic() {
    if (!isFreemium()) return false;
    const s = state();
    const m = mult(s);
    if (daysSince(s.installed) < R.graceDays) return false;
    if (!s.shown && s.sessions < R.firstMinSessions) return false;
    if (!cooledDown(s, R.cooldownDays * m)) return false;
    const since      = s.lastShown || s.installed;
    const byDays     = daysSince(since) >= R.dayInterval * m;
    const bySessions = (s.sessions - (s.sessionsAtLast || 0)) >= R.sessionInterval * m;
    return (byDays || bySessions) ? show('periodic') : false;
  }

  // Count pack openings, and catch taps on locked packs. showModeScreen is a
  // global function declaration in app-core.js, so every caller goes through
  // this wrapper; the original still owns the "requires Pro" toast.
  const origShowMode = window.showModeScreen;
  if (typeof origShowMode === 'function') {
    window.showModeScreen = function (key, label, opts) {
      // v1.27.46 — a pack opened through the programme route is not a locked
      // tap. It is the user training exactly what the programme just gave
      // them, and answering that with an upgrade nudge would be absurd.
      const viaProgram = !!(opts && opts.viaProgram)
        && !!(window.accessLevel && window.accessLevel.programRoutePending
              && window.accessLevel.programRoutePending(key));
      const locked = !viaProgram && !!(window.accessLevel && !window.accessLevel.canAccess(key));
      const s = state();
      if (locked) {
        if (isFreemium()) {
          s.lockedTaps += 1;
          save(s);
          if (s.lockedTaps % R.lockedEvery === 0 && cooledDown(s, R.lockedCooldownDays * mult(s))) {
            setTimeout(() => show('locked'), 900);   // let the toast be read first
          }
        }
      } else {
        s.sessions += 1;
        save(s);
      }
      return origShowMode.apply(this, arguments);
    };
  }

  const closeIt = () => overlay.classList.remove('open');
  const seeBtn  = document.getElementById('proNudgeSee');
  const laterBtn = document.getElementById('proNudgeLater');
  // v1.26.72 — leaving the settings screen first. Pressing this from the
  // developer preview looked like a dead button: showTab() DID switch to the
  // Upgrade screen, but the full-screen settings panel (z-index 700) was
  // still covering it. Same family as the overlay z-index bug.
  const leaveSettingsIfOpen = () => {
    const s = document.getElementById('homeSettingsScreen');
    if (s && s.style.display !== 'none' && typeof navFromSettings === 'function') navFromSettings();
  };

  if (seeBtn)   seeBtn.addEventListener('click', () => { closeIt(); leaveSettingsIfOpen(); if (window.showTab) window.showTab('upgrade'); });
  if (laterBtn) laterBtn.addEventListener('click', closeIt);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeIt(); });

  document.addEventListener('click', e => {
    const tab = e.target.closest && e.target.closest('.nav-tab[data-tab="dashboard"]');
    if (tab) setTimeout(maybeShowPeriodic, 700);
  });

  setTimeout(maybeShowPeriodic, 2500);

  // Exposed for the developer settings and for tests
  window._proNudge = { state, show, preview, maybeShowPeriodic, rules: R };
})();

// ─── RATING GATE (v1.26.66) ────────────────────────────────────
// Ask how it is going BEFORE asking for a review: a happy answer goes to
// Apple's own rating dialog, an unhappy one goes to a private message to the
// developer instead of a one-star review. Nothing about the user is collected
// either way — the only thing that ever leaves the device is text they typed.
//
// TO FINISH BEFORE RELEASE:
//   1. FEEDBACK_ENDPOINT — paste the Formspree form URL. Until it is set,
//      messages are kept in a local queue and sent once it is.
//   2. APP_STORE_ID — the numeric id, once the app exists in the store. Used
//      only as a fallback when the native plugin is not available.
//   3. In DeckstackApp: npm i @capacitor-community/in-app-review (8.x for
//      Capacitor 8 — the major tracks Capacitor's, same trap as the TTS
//      plugin), then npx cap sync on the Mac.
const FEEDBACK_ENDPOINT = '';   // e.g. 'https://formspree.io/f/xxxxxxxx'
const APP_STORE_ID      = '';   // e.g. '1234567890'

const RATING_RULES = {
  minSessionMinutes: 3,      // a pack session at least this long can trigger it
  streakDays:      [7, 14],  // each of these streaks may trigger it once, ever
  graceDays:         4,      // never in the first days after install
  askAgainDays:     60,      // after an ask that was ignored or dismissed
  answeredQuietDays: 240,    // after the user actually answered, leave them be
};

(function initRatingGate() {
  const KEY     = 'ds_rating';
  const QKEY    = 'ds_feedback_queue';
  const DAY     = 86400000;
  const R       = RATING_RULES;
  const overlay = document.getElementById('ratingOverlay');
  if (!overlay) return;

  const panels = {
    ask:    document.getElementById('ratingAsk'),
    thanks: document.getElementById('ratingThanks'),
    form:   document.getElementById('ratingForm'),
  };

  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } };
  const save = s => { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch {} };
  const daysSince = ts => (Date.now() - ts) / DAY;

  function state() {
    const s = load();
    if (!s.installed) { s.installed = Date.now(); save(s); }
    s.asks        = s.asks        || 0;
    s.usedStreaks = s.usedStreaks || [];
    return s;
  }

  // Native discovery follows the lesson from the TTS plugin: www/ is plain
  // script tags with no bundler, so the plugin's own JS is never loaded and
  // Capacitor.Plugins can be empty even when the native half is installed.
  // Ask the bridge directly instead.
  function reviewPlugin() {
    try {
      const C = window.Capacitor;
      if (!C || !C.isNativePlatform || !C.isNativePlatform()) return null;
      if (C.registerPlugin) return C.registerPlugin('InAppReview');
      return (C.Plugins && C.Plugins.InAppReview) || null;
    } catch { return null; }
  }

  function panel(name) {
    Object.keys(panels).forEach(k => { if (panels[k]) panels[k].style.display = (k === name ? '' : 'none'); });
  }
  function open(which) { panel(which || 'ask'); overlay.classList.add('open'); }
  function closeIt() { overlay.classList.remove('open'); }

  function busy() {
    if (!localStorage.getItem('ds_onboarding_done')) return true;
    const intro = document.getElementById('packIntroScreen');
    if (intro && intro.style.display !== 'none') return true;
    return !!document.querySelector('.settings-overlay.open');
  }

  function eligible() {
    const s = state();
    if (daysSince(s.installed) < R.graceDays) return false;
    if (s.answered && daysSince(s.answeredAt || 0) < R.answeredQuietDays) return false;
    if (s.lastAsk && daysSince(s.lastAsk) < R.askAgainDays) return false;
    if (dsPromptRecently()) return false;
    return !busy();
  }

  function ask(reason) {
    if (!eligible()) return false;
    const s = state();
    s.lastAsk    = Date.now();
    s.asks      += 1;
    s.lastReason = reason;
    save(s);
    dsMarkPrompt();
    open('ask');
    return true;
  }

  // ─ Sending ─────────────────────────────────────────────────
  // A failed send is queued and retried at the next launch, so a message
  // written on a train is not lost. The queue holds only what the user wrote.
  const readQ  = () => { try { return JSON.parse(localStorage.getItem(QKEY)) || []; } catch { return []; } };
  const writeQ = q => { try { localStorage.setItem(QKEY, JSON.stringify(q)); } catch {} };

  function post(item) {
    if (!FEEDBACK_ENDPOINT) return Promise.resolve(false);
    return fetch(FEEDBACK_ENDPOINT, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body:    JSON.stringify({ message: item.message, version: item.version }),
    }).then(res => !!res.ok).catch(() => false);
  }

  function flushQueue() {
    const q = readQ();
    if (!q.length || !FEEDBACK_ENDPOINT) return Promise.resolve();
    return q.reduce((chain, item) =>
      chain.then(left => post(item).then(sent => (sent ? left : left.concat([item])))),
      Promise.resolve([])
    ).then(writeQ);
  }

  // ─ Answers ────────────────────────────────────────────────
  const yesBtn    = document.getElementById('ratingYes');
  const noBtn     = document.getElementById('ratingNo');
  const sendBtn   = document.getElementById('ratingSend');
  const skipBtn   = document.getElementById('ratingSkip');
  const doneBtn   = document.getElementById('ratingThanksClose');
  const textEl    = document.getElementById('ratingFormText');
  const thanksTxt = document.getElementById('ratingThanksText');

  function markAnswered(kind) {
    const s = state();
    s.answered   = kind;
    s.answeredAt = Date.now();
    save(s);
  }

  if (yesBtn) yesBtn.addEventListener('click', () => {
    markAnswered('yes');
    const plugin = reviewPlugin();
    panel('thanks');
    if (plugin && plugin.requestReview) {
      if (thanksTxt) thanksTxt.textContent = 'That means a lot.';
      try { Promise.resolve(plugin.requestReview()).catch(() => {}); } catch {}
    } else if (APP_STORE_ID) {
      if (thanksTxt) thanksTxt.textContent = 'A rating in the App Store helps other people find Deckstack.';
      try { window.open('https://apps.apple.com/app/id' + APP_STORE_ID + '?action=write-review', '_blank'); } catch {}
    } else if (thanksTxt) {
      thanksTxt.textContent = 'That means a lot. If you have a moment, a rating in the App Store helps other people find Deckstack.';
    }
  });

  if (noBtn) noBtn.addEventListener('click', () => panel('form'));

  if (sendBtn) sendBtn.addEventListener('click', () => {
    const msg = ((textEl && textEl.value) || '').trim();
    markAnswered('feedback');
    if (!msg) { closeIt(); return; }          // writing nothing sends nothing
    const item = {
      message: msg,
      version: (typeof VERSION !== 'undefined' ? VERSION : ''),
      at:      new Date().toISOString(),
    };
    if (textEl) textEl.value = '';
    if (thanksTxt) thanksTxt.textContent = 'Thank you \u2014 your message is on its way to the developer.';
    panel('thanks');
    post(item).then(sent => { if (!sent) writeQ(readQ().concat([item])); });
  });

  if (skipBtn) skipBtn.addEventListener('click', closeIt);
  if (doneBtn) doneBtn.addEventListener('click', closeIt);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeIt(); });

  // ─ Triggers ───────────────────────────────────────────────
  // 1. A pack session of a few minutes. Timed here rather than read from
  //    Progress, because progress tracking is off unless the user enables it.
  let startedAt = 0;
  const origShowMode = window.showModeScreen;
  if (typeof origShowMode === 'function') {
    window.showModeScreen = function () {
      startedAt = Date.now();
      return origShowMode.apply(this, arguments);
    };
  }
  const origCloseTraining = window.closeTraining;
  if (typeof origCloseTraining === 'function') {
    window.closeTraining = function () {
      const minutes = startedAt ? (Date.now() - startedAt) / 60000 : 0;
      startedAt = 0;
      const out = origCloseTraining.apply(this, arguments);
      if (minutes >= R.minSessionMinutes) setTimeout(() => ask('session'), 900);
      return out;
    };
  }

  // 2. A streak worth noticing. Each length fires at most once, ever.
  function checkStreak() {
    let cur = 0;
    try { cur = JSON.parse(localStorage.getItem('prog_streak_cur')) || 0; } catch {}
    const s   = state();
    const hit = R.streakDays.filter(d => cur >= d && s.usedStreaks.indexOf(d) === -1).pop();
    if (!hit) return false;
    if (!ask('streak' + hit)) return false;
    const after = state();
    after.usedStreaks = after.usedStreaks.concat([hit]);
    save(after);
    return true;
  }

  setTimeout(checkStreak, 3500);
  setTimeout(flushQueue, 5000);

  window._rating = { state, ask, open, close: closeIt, checkStreak, flushQueue, queue: readQ, rules: R };
})();

// ─── RECOMMENDATIONS (v1.26.66) ──────────────────────────────────
// Two surfaces, deliberately unequal:
//   THE ROW on the dashboard is the primary one. It updates silently, costs
//   the user nothing, and is always there.
//   THE SCREEN after a session is the exception. It interrupts, so it is
//   rationed hard and shares `ds_last_prompt` with the Pro nudge and the
//   rating gate — no two self-raised prompts within a few days of each other.
//
// The signal is minutes per TOPIC, summed from this module's own per-pack
// timer rather than from prog_sessions, because progress tracking is off
// unless the user turns it on and the recommendation would then never learn
// anything. Onboarding picks seed it until there is real data.
//
// Two kinds of suggestion only — "more like this" and "something different".
// A third category would need a hand-written map of which topics are far
// apart from each other, which is a content decision, not a code one.
const RECO_RULES = {
  minSessionMinutes: 5,    // a session at least this long may trigger the screen
  everyDays:         5,    // and the screen appears at most this often
  dismissDays:      90,    // "not interested" hides a pack for this long, not forever
  maxLocked:         1,    // at most one locked pack in the row
  rowSize:           3,
};

(function initRecommendations() {
  const KEY = 'ds_reco';
  const DAY = 86400000;
  const R   = RECO_RULES;

  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } };
  const save = s => { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch {} };
  const daysSince = ts => (Date.now() - ts) / DAY;

  function state() {
    const s = load();
    s.minutes   = s.minutes   || {};   // packKey -> minutes trained
    s.dismissed = s.dismissed || {};   // packKey -> timestamp of "not interested"
    s.shown     = s.shown     || 0;
    return s;
  }

  // The pack cards in index.html are the app's master register (search,
  // favorites, folders and Topics all read them), so the library is the right
  // place to ask what packs exist — imported packs appear here automatically.
  function libraryPacks() {
    return Array.from(document.querySelectorAll('#libTabPacks .collection-card'))
      .map(c => ({ key: c.dataset.key, label: c.dataset.label }))
      .filter(p => p.key && p.label);
  }
  const topicsFor = key =>
    (typeof TOPICS !== 'undefined' ? TOPICS : []).filter(t => (t.packs || []).indexOf(key) > -1);
  const isLocked = key => !!(window.accessLevel && !window.accessLevel.canAccess(key));

  // Minutes per topic. Falls back to the onboarding picks so a new user still
  // gets something better than a static list on day one.
  function topicWeights() {
    const s = state();
    const w = {};
    let any = false;
    Object.keys(s.minutes).forEach(k => {
      topicsFor(k).forEach(t => { w[t.id] = (w[t.id] || 0) + s.minutes[k]; any = true; });
    });
    if (any) return { weights: w, seeded: false };
    try {
      (JSON.parse(localStorage.getItem('ds_reco_packs') || '[]') || []).forEach(p => {
        if (p && p.key) topicsFor(p.key).forEach(t => { w[t.id] = (w[t.id] || 0) + 1; });
      });
    } catch {}
    return { weights: w, seeded: true };
  }

  const topicTitle = id => {
    const t = (typeof TOPICS !== 'undefined' ? TOPICS : []).find(x => x.id === id);
    return t ? t.title : '';
  };

  // Everything the user has not trained, is not currently in, and has not
  // waved away in the last dismissDays.
  function candidates(excludeKey) {
    const s = state();
    const last = (function () {
      try { return (JSON.parse(localStorage.getItem('dash_last_pack') || 'null') || {}).key; } catch { return null; }
    })();
    return libraryPacks().filter(p =>
      !s.minutes[p.key] &&
      p.key !== excludeKey &&
      p.key !== last &&
      !(s.dismissed[p.key] && daysSince(s.dismissed[p.key]) < R.dismissDays)
    );
  }

  // Score a pack by how much time the user has spent in its topics, and say
  // which topic earned it the score — that sentence is the whole point of the
  // suggestion, since a recommendation without a reason reads as an advert.
  function scored(excludeKey) {
    const { weights, seeded } = topicWeights();
    return candidates(excludeKey).map(p => {
      let best = null, score = 0;
      topicsFor(p.key).forEach(t => {
        const v = weights[t.id] || 0;
        score += v;
        if (v > 0 && (!best || v > (weights[best] || 0))) best = t.id;
      });
      return {
        key: p.key, label: p.label, score, locked: isLocked(p.key),
        kind:   score > 0 ? 'similar' : 'different',
        reason: score > 0
          ? (seeded ? 'From your onboarding picks' : 'Close to ' + topicTitle(best))
          : 'A new area to try',
      };
    }).sort((a, b) => b.score - a.score);
  }

  // The dashboard row: mostly what they already like, with one deliberate
  // step sideways so the library does not shrink to three packs.
  function forDashboard() {
    const all       = scored(null);
    const similar   = all.filter(p => p.kind === 'similar');
    const different = all.filter(p => p.kind === 'different');
    const wanted    = similar.slice(0, R.rowSize - 1).concat(different.slice(0, 1));
    const pool      = wanted.concat(all.filter(p => wanted.indexOf(p) === -1));

    // At most one locked pack, and never as the first card — the row should
    // read as a suggestion, not as a shop window. v1.26.67: this is applied
    // across the WHOLE candidate list, not just the three picked first. After
    // the library import almost every pack is Pro, so filtering a pre-picked
    // row left a freemium user looking at a row of padlocks.
    const firstFree = pool.find(p => !p.locked);
    const row       = firstFree ? [firstFree] : [];
    let lockedUsed  = 0;
    pool.forEach(p => {
      if (p === firstFree || row.length >= R.rowSize) return;
      if (p.locked) {
        if (lockedUsed >= R.maxLocked) return;
        lockedUsed += 1;
      }
      row.push(p);
    });
    // Only if literally nothing unlocked is left: one locked suggestion still
    // beats an empty row.
    if (!row.length && pool.length) row.push(pool[0]);

    return row.map(p => Object.assign({}, p, { reason: p.reason + (p.locked ? ' \u00b7 Pro' : '') }));
  }

  // ─ The screen ───────────────────────────────────────────────
  const overlay = document.getElementById('recoOverlay');
  let current = null;

  function busy() {
    if (!localStorage.getItem('ds_onboarding_done')) return true;
    const intro = document.getElementById('packIntroScreen');
    if (intro && intro.style.display !== 'none') return true;
    return !!document.querySelector('.settings-overlay.open');
  }

  function render(pick) {
    current = pick;
    const reason = document.getElementById('recoReason');
    const pack   = document.getElementById('recoPack');
    if (reason) reason.textContent = pick.kind === 'different'
      ? 'Something a bit different from what you have been training.'
      : pick.reason.replace(/^Close to /, 'Because you have been training ') + '.';
    if (pack) pack.innerHTML = '<div class="reco-pack-name">' + pick.label + '</div>'
      + (pick.locked ? '<div class="reco-pack-tag">Pro</div>' : '');
  }

  // Alternates between the two kinds, so a run of suggestions does not narrow
  // the user into one corner of the library.
  function suggest(afterKey) {
    if (!overlay || busy()) return false;
    const s    = state();
    const all  = scored(afterKey);
    if (!all.length) return false;
    const wantDifferent = (s.shown % 2) === 1;
    const pool = all.filter(p => (p.kind === 'different') === wantDifferent);
    const pick = (pool.length ? pool : all)[0];
    s.shown += 1;
    s.lastSuggest = Date.now();
    save(s);
    dsMarkPrompt();
    render(pick);
    overlay.classList.add('open');
    return true;
  }

  function maybeSuggest(afterKey, minutes) {
    if (minutes < R.minSessionMinutes) return false;
    const s = state();
    if (s.lastSuggest && daysSince(s.lastSuggest) < R.everyDays) return false;
    if (dsPromptRecently()) return false;
    return suggest(afterKey);
  }

  // Developer preview: opens the screen without spending the interval.
  function preview() {
    const all = scored(null);
    if (!all.length) { if (window.showToast) showToast('Nothing left to suggest.'); return false; }
    render(all[0]);
    overlay.classList.add('open');
    return true;
  }

  const closeIt = () => overlay && overlay.classList.remove('open');
  if (overlay) {
    const openBtn  = document.getElementById('recoOpen');
    const laterBtn = document.getElementById('recoLater');
    const neverBtn = document.getElementById('recoNever');
    if (openBtn)  openBtn.addEventListener('click', () => {
      const p = current; closeIt();
      // Same reason as the Pro screen's "See plans": the settings panel would
      // otherwise stay on top of the pack you just opened.
      const s = document.getElementById('homeSettingsScreen');
      if (s && s.style.display !== 'none' && typeof navFromSettings === 'function') navFromSettings();
      if (p && window.showModeScreen) showModeScreen(p.key, p.label);
    });
    if (laterBtn) laterBtn.addEventListener('click', closeIt);
    if (neverBtn) neverBtn.addEventListener('click', () => {
      if (current) { const s = state(); s.dismissed[current.key] = Date.now(); save(s); }
      closeIt();
      if (window._personalizeRecommended) window._personalizeRecommended();
    });
    overlay.addEventListener('click', e => { if (e.target === overlay) closeIt(); });
  }

  // ─ Learning ───────────────────────────────────────────────
  let openedKey = null, openedAt = 0;
  const origShowMode = window.showModeScreen;
  if (typeof origShowMode === 'function') {
    window.showModeScreen = function (key) {
      if (!isLocked(key)) { openedKey = key; openedAt = Date.now(); }
      return origShowMode.apply(this, arguments);
    };
  }
  const origCloseTraining = window.closeTraining;
  if (typeof origCloseTraining === 'function') {
    window.closeTraining = function () {
      const key     = openedKey;
      const minutes = openedAt ? (Date.now() - openedAt) / 60000 : 0;
      openedKey = null; openedAt = 0;
      const out = origCloseTraining.apply(this, arguments);
      if (key && minutes > 0.5) {
        const s = state();
        s.minutes[key] = (s.minutes[key] || 0) + minutes;
        save(s);
        if (window._personalizeRecommended) window._personalizeRecommended();
        setTimeout(() => maybeSuggest(key, minutes), 1200);
      }
      return out;
    };
  }

  window._reco = { state, forDashboard, suggest, maybeSuggest, preview, close: closeIt, rules: R };
})();

// ─── DEVELOPER PREVIEWS (v1.26.66) ────────────────────────────────
// Screens that normally take days of real use to appear. Every preview opens
// the screen WITHOUT touching its timers, so looking at one does not change
// when the real one turns up.
(function initDevPreviews() {
  const on = (id, fn) => { const el = document.getElementById(id); if (el) el.addEventListener('click', fn); };

  on('devShowProNudge', () => { if (window._proNudge) window._proNudge.preview(); });
  on('devShowRating',   () => { if (window._rating) window._rating.open('ask'); });
  on('devShowFeedback', () => { if (window._rating) window._rating.open('form'); });
  on('devShowWhatsNew', () => {
    // v1.26.97 — the developer list: user entries plus the dev-only ones.
    if (window._whatsNew) window._whatsNew.open('dev');
    else { const o = document.getElementById('whatsNewOverlay'); if (o) o.classList.add('open'); }
  });
  on('devShowPackIntro', () => {
    let k = window.activeCollectionKey;
    if (!k) { try { k = (JSON.parse(localStorage.getItem('dash_last_pack') || 'null') || {}).key; } catch {} }
    if (k && window.replayPackIntro) window.replayPackIntro(k);
    else if (window.showToast) showToast('Open a pack once first.');
  });
  on('devShowReco',     () => { if (window._reco) window._reco.preview(); });
  on('devResetPrompts', () => {
    ['ds_pro_nudge', 'ds_rating', 'ds_last_prompt', 'ds_reco'].forEach(k => localStorage.removeItem(k));
    if (window.showToast) showToast('Prompt timers cleared \u2014 both screens can appear again.');
  });
})();

// ─── DEVELOPER SETTINGS UNLOCK (v1.26.35) ──────────────────────────────
// The gear menu is the USER settings screen. Developer rows live in
// #devSection, hidden until the version number is tapped 7 times (the classic
// Android build-number gesture). Persisted in ds_dev_unlocked; the "Hide
// developer settings" row inside the section reverses it.
(function initDevUnlock() {
  const KEY = 'ds_dev_unlocked';
  const sec = document.getElementById('devSection');
  const ver = document.getElementById('homeSettingsVersion');
  if (!sec || !ver) return;
  const apply = on => { sec.style.display = on ? '' : 'none'; };
  apply(localStorage.getItem(KEY) === 'true');
  let taps = 0, timer = null;
  const onTap = () => {
    if (localStorage.getItem(KEY) === 'true') return;
    taps++;
    clearTimeout(timer);
    timer = setTimeout(() => { taps = 0; }, 1500);
    if (taps >= 7) {
      localStorage.setItem(KEY, 'true');
      apply(true);
      taps = 0;
      if (window.showToast) showToast('Developer settings unlocked.');
    } else if (taps >= 4 && window.showToast) {
      showToast((7 - taps) + ' taps from developer settings\u2026');
    }
  };
  ver.addEventListener('click', onTap);
  const hideBtn = document.getElementById('hideDevBtn');
  if (hideBtn) hideBtn.addEventListener('click', () => {
    localStorage.removeItem(KEY);
    apply(false);
    if (window.showToast) showToast('Developer settings hidden.');
  });
})();

// Replay onboarding immediately: clear the flag and restart the app so the
// full first-run experience (splash -> onboarding) runs again.
const replayOnboardingBtn = document.getElementById('replayOnboardingBtn');
if (replayOnboardingBtn) replayOnboardingBtn.addEventListener('click', () => {
  localStorage.removeItem('ds_onboarding_done');
  localStorage.removeItem('ds_onboarding');
  localStorage.removeItem('ds_reco_packs');
  location.reload();
});

// ─── DATA BACKUP: EXPORT / IMPORT (v1.26.34) ─────────────────────────────
// Everything the app knows lives in localStorage (progress, favorites,
// redeemed codes, settings, editor packs). Export shows it all as copyable
// JSON; import overwrites from pasted JSON and reloads. Modal + clipboard is
// used instead of file download, which installed iOS web apps don't support.
(function initDataBackup() {
  function buildModal(id, title, buttonLabel, readonly) {
    let ov = document.getElementById(id);
    if (ov) return ov;
    ov = document.createElement('div');
    ov.id = id;
    ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.45);z-index:10000;display:none;align-items:center;justify-content:center;padding:20px;';
    ov.innerHTML =
      '<div style="background:var(--ds-card,#fff);border-radius:16px;max-width:520px;width:100%;max-height:80vh;display:flex;flex-direction:column;padding:16px;box-shadow:0 8px 32px rgba(0,0,0,0.25);">' +
        '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">' +
          '<strong style="font-size:15px;">' + title + '</strong>' +
          '<button data-close style="border:none;background:none;font-size:18px;cursor:pointer;padding:4px 8px;">\u2715</button>' +
        '</div>' +
        '<textarea data-ta ' + (readonly ? 'readonly ' : '') + 'spellcheck="false" placeholder="' + (readonly ? '' : 'Paste your exported Deckstack data here...') + '" style="flex:1;min-height:220px;font-family:ui-monospace,Menlo,monospace;font-size:12px;border:1px solid var(--ds-border,#ddd);border-radius:10px;padding:10px;resize:none;-webkit-user-select:text;user-select:text;"></textarea>' +
        '<button data-action style="margin-top:12px;font-size:14px;font-weight:600;color:#fff;background:#2c7a4b;border:none;border-radius:10px;padding:10px;cursor:pointer;">' + buttonLabel + '</button>' +
      '</div>';
    document.body.appendChild(ov);
    ov.addEventListener('click', e => { if (e.target === ov) ov.style.display = 'none'; });
    ov.querySelector('[data-close]').addEventListener('click', () => { ov.style.display = 'none'; });
    return ov;
  }

  const exportBtn = document.getElementById('exportDataBtn');
  if (exportBtn) exportBtn.addEventListener('click', () => {
    const ov = buildModal('dataExportOverlay', 'Your Deckstack data', 'Copy to clipboard', true);
    const dump = { _deckstack: true, version: typeof VERSION !== 'undefined' ? VERSION : '', exportedAt: new Date().toISOString(), data: {} };
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      dump.data[k] = localStorage.getItem(k);
    }
    const ta = ov.querySelector('[data-ta]');
    ta.value = JSON.stringify(dump, null, 2);
    const copyBtn = ov.querySelector('[data-action]');
    copyBtn.onclick = () => {
      const done = () => { if (window.showToast) showToast('Copied - save it somewhere safe.'); };
      const fallback = () => {
        ta.focus(); ta.select();
        try { document.execCommand('copy'); done(); }
        catch (e) { if (window.showToast) showToast('Copy failed - select the text manually.'); }
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(ta.value).then(done).catch(fallback);
      } else fallback();
    };
    ov.style.display = 'flex';
  });

  const importBtn = document.getElementById('importDataBtn');
  if (importBtn) importBtn.addEventListener('click', () => {
    const ov = buildModal('dataImportOverlay', 'Restore Deckstack data', 'Restore & reload', false);
    const ta = ov.querySelector('[data-ta]');
    ta.value = '';
    const applyBtn = ov.querySelector('[data-action]');
    applyBtn.onclick = () => {
      let dump;
      try { dump = JSON.parse(ta.value); } catch (e) {
        if (window.showToast) showToast('Not valid JSON - paste the whole export.');
        return;
      }
      if (!dump || dump._deckstack !== true || typeof dump.data !== 'object') {
        if (window.showToast) showToast('This does not look like a Deckstack export.');
        return;
      }
      if (!confirm('Restore this backup? Current data in the app will be overwritten.')) return;
      Object.keys(dump.data).forEach(k => {
        try { localStorage.setItem(k, dump.data[k]); } catch (e) {}
      });
      location.reload();
    };
    ov.style.display = 'flex';
  });
})();

// Export pack tags as JSON. Shown in a copyable modal rather than as a
// blob download — installed iOS/iPadOS web apps can't download files, which
// is why the previous <a download> approach silently did nothing there.
const exportTagsBtn = document.getElementById('exportTagsBtn');
if (exportTagsBtn) exportTagsBtn.addEventListener('click', () => {
  try {
    // Union of base packTags keys and any user-edited keys (ds_tag_edits
    // can hold keys that don't exist in tagsData.js, e.g. 'prog:...').
    const keys = new Set(typeof packTags !== 'undefined' ? Object.keys(packTags) : []);
    try {
      const edits = JSON.parse(localStorage.getItem('ds_tag_edits')) || {};
      Object.keys(edits).forEach(k => keys.add(k));
    } catch (e2) {}
    const result = {};
    [...keys].sort().forEach(key => {
      result[key] = window.getTagsForKey
        ? window.getTagsForKey(key)
        : ((typeof packTags !== 'undefined' && packTags[key]) || []);
    });
    const json = JSON.stringify(result, null, 2);

    // Build (or reuse) the export modal
    let ov = document.getElementById('tagExportOverlay');
    if (!ov) {
      ov = document.createElement('div');
      ov.id = 'tagExportOverlay';
      ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.45);z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px;';
      ov.innerHTML =
        '<div style="background:var(--ds-card,#fff);border-radius:16px;max-width:520px;width:100%;max-height:80vh;display:flex;flex-direction:column;padding:16px;box-shadow:0 8px 32px rgba(0,0,0,0.25);">' +
          '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">' +
            '<strong style="font-size:15px;">Pack tags — JSON</strong>' +
            '<button id="tagExportClose" style="border:none;background:none;font-size:18px;cursor:pointer;padding:4px 8px;">\u2715</button>' +
          '</div>' +
          '<textarea id="tagExportText" readonly spellcheck="false" style="flex:1;min-height:220px;font-family:ui-monospace,Menlo,monospace;font-size:12px;border:1px solid var(--ds-border,#ddd);border-radius:10px;padding:10px;resize:none;-webkit-user-select:text;user-select:text;"></textarea>' +
          '<button id="tagExportCopy" style="margin-top:12px;font-size:14px;font-weight:600;color:#fff;background:#2c7a4b;border:none;border-radius:10px;padding:10px;cursor:pointer;">Copy to clipboard</button>' +
        '</div>';
      document.body.appendChild(ov);
      ov.addEventListener('click', e => { if (e.target === ov) ov.style.display = 'none'; });
      ov.querySelector('#tagExportClose').addEventListener('click', () => { ov.style.display = 'none'; });
      ov.querySelector('#tagExportCopy').addEventListener('click', () => {
        const ta = ov.querySelector('#tagExportText');
        const done = () => { if (window.showToast) showToast('Copied to clipboard.'); };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(ta.value).then(done).catch(() => {
            ta.focus(); ta.select();
            try { document.execCommand('copy'); done(); }
            catch (e3) { if (window.showToast) showToast('Copy failed — select the text manually.'); }
          });
        } else {
          ta.focus(); ta.select();
          try { document.execCommand('copy'); done(); }
          catch (e3) { if (window.showToast) showToast('Copy failed — select the text manually.'); }
        }
      });
    }
    ov.querySelector('#tagExportText').value = json;
    ov.style.display = 'flex';
  } catch (e) {
    if (window.showToast) showToast('Export failed: ' + e.message);
  }
});

const clearExtendedBtn = document.getElementById('clearExtendedBtn');
if (clearExtendedBtn) clearExtendedBtn.addEventListener('click', () => {
  // Rensa purchases
  localStorage.removeItem('ds_extended_owned');
  if (window.accessLevel && window.accessLevel.applyAccessLevel) window.accessLevel.applyAccessLevel();
  // Rensa bundle states explicit per känd pack
  const knownPacks = Object.keys(BUNDLE_DEFS);
  knownPacks.forEach(packKey => {
    const k = `bundles:${packKey}`;
    try {
      const cur = JSON.parse(localStorage.getItem(k)) || [];
      const filtered = cur.filter(id => id !== 'domestic' && id !== 'pro:off');
      if (filtered.length) localStorage.setItem(k, JSON.stringify(filtered));
      else localStorage.removeItem(k);
    } catch(e) { localStorage.removeItem(`bundles:${packKey}`); }
  });
  // Visuell feedback — grön "Cleared ✓" i 2.5 sek
  clearExtendedBtn.textContent = 'Cleared ✓';
  clearExtendedBtn.style.cssText = 'font-size:13px;color:#1a7a3a;background:#eafaf1;border:1px solid #a8d5ba;border-radius:8px;padding:6px 12px;cursor:pointer;';
  setTimeout(() => {
    clearExtendedBtn.textContent = 'Clear';
    clearExtendedBtn.style.cssText = 'font-size:13px;color:#c0392b;background:#fdf0ee;border:1px solid #f5c6c2;border-radius:8px;padding:6px 12px;cursor:pointer;';
  }, 2500);
  if (window._applyAccessLevel) window._applyAccessLevel();
  if (window.renderExtendedStore) window.renderExtendedStore();
  if (window.renderProgramList) window.renderProgramList();
});

// ── TAG MODE ──────────────────────────────────────────────────────────────────

(function initTagMode() {
  const TAG_EDITS_KEY = 'ds_tag_edits'; // {packKey: [tags], 'prog:programId': [tags]}

  let tagMode = localStorage.getItem('tagMode') === 'true';

  function getTagEdits() {
    try { return JSON.parse(localStorage.getItem(TAG_EDITS_KEY)) || {}; }
    catch { return {}; }
  }
  function saveTagEdits(edits) {
    localStorage.setItem(TAG_EDITS_KEY, JSON.stringify(edits));
  }

  // Get current tags for a key (pack key or 'prog:id')
  // Merges tagsData.js base tags with any edits
  window.getTagsForKey = function(key) {
    const edits = getTagEdits();
    if (edits[key] !== undefined) return [...edits[key]];
    // Fall back to packTags base data
    if (typeof packTags !== 'undefined' && packTags[key]) return [...packTags[key]];
    return [];
  };

  // Set tags for a key and mark as edited
  window.setTagsForKey = function(key, tags) {
    const edits = getTagEdits();
    edits[key] = tags;
    saveTagEdits(edits);
  };

  // Apply tag mode state
  function applyTagMode() {
    document.body.classList.toggle('tag-mode', tagMode);
    const toggle = document.getElementById('tagModeToggle');
    if (toggle) toggle.checked = tagMode;
    const exportRow = document.getElementById('tagExportRow');
    if (exportRow) exportRow.style.display = tagMode ? '' : 'none';
    // Show/hide tag section in pack settings
    const tagSection = document.getElementById('packSettingsTagSection');
    if (tagSection) tagSection.style.display = tagMode ? '' : 'none';
  }

  // Toggle listener
  const tagModeToggle = document.getElementById('tagModeToggle');
  if (tagModeToggle) {
    tagModeToggle.addEventListener('change', () => {
      tagMode = tagModeToggle.checked;
      localStorage.setItem('tagMode', tagMode);
      applyTagMode();
      if (window.updateModeGearVisibility) window.updateModeGearVisibility();
    });
  }

  // Export tag changes
  const tagExportBtn = document.getElementById('tagExportBtn');
  if (tagExportBtn) {
    tagExportBtn.addEventListener('click', () => {
      const edits = getTagEdits();
      if (!Object.keys(edits).length) {
        alert('No tag changes to export yet.');
        return;
      }
      const out = {
        meta: { exportedAt: new Date().toISOString(), version: typeof VERSION !== 'undefined' ? VERSION : '' },
        tagEdits: edits,
      };
      _dsExport(JSON.stringify(out, null, 2),
                'deckstack-tag-edits-' + Date.now() + '.json',
                'application/json',
                'Tag edits — JSON');
    });
  }

  // ── Pack tag UI in packSettingsOverlay ───────────────────────────────────────

  window.renderPackTagSection = function(packKey) {
    const section = document.getElementById('packSettingsTagSection');
    if (!section) return;
    section.style.display = tagMode ? '' : 'none';
    if (!tagMode) return;

    const listEl  = document.getElementById('packTagsList');
    const input   = document.getElementById('packTagInput');
    const addBtn  = document.getElementById('packTagAddBtn');

    function renderTags() {
      const tags = window.getTagsForKey(packKey);
      listEl.innerHTML = tags.length
        ? tags.map((t, i) => `<span class="tag-chip">${t}<button class="tag-chip-del" data-i="${i}">×</button></span>`).join('')
        : '<span class="tag-empty">No tags yet</span>';
      listEl.querySelectorAll('.tag-chip-del').forEach(btn => {
        btn.addEventListener('click', () => {
          const cur = window.getTagsForKey(packKey);
          cur.splice(parseInt(btn.dataset.i), 1);
          window.setTagsForKey(packKey, cur);
          renderTags();
        });
      });
    }

    renderTags();
    input.value = '';

    // Remove old listeners by cloning
    const newAdd = addBtn.cloneNode(true);
    addBtn.parentNode.replaceChild(newAdd, addBtn);
    newAdd.addEventListener('click', () => {
      const val = document.getElementById('packTagInput').value.trim().toLowerCase();
      if (!val) return;
      const cur = window.getTagsForKey(packKey);
      if (!cur.includes(val)) { cur.push(val); window.setTagsForKey(packKey, cur); }
      document.getElementById('packTagInput').value = '';
      renderTags();
    });
    document.getElementById('packTagInput').addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); document.getElementById('packTagAddBtn').click(); }
    });
  };

  // ── Program Settings overlay ─────────────────────────────────────────────────

  const progSettingsOverlay = document.getElementById('programSettingsOverlay');
  const progSettingsClose   = document.getElementById('programSettingsClose');
  if (progSettingsClose) {
    progSettingsClose.addEventListener('click', () => {
      if (window._scopeNoteSaveAll) _scopeNoteSaveAll();
      if (progSettingsOverlay) progSettingsOverlay.style.display = 'none';
    });
  }
  // Uppgift 9 — close on backdrop click
  if (progSettingsOverlay) {
    progSettingsOverlay.addEventListener('click', e => {
      if (e.target === progSettingsOverlay) {
        if (window._scopeNoteSaveAll) _scopeNoteSaveAll();
        progSettingsOverlay.style.display = 'none';
      }
    });
  }

  // v1.27.18 — noteOnly is the three-taps-on-a-blank-space path. Same overlay,
  // same note; everything a feedback mode owns is hidden.
  window.openProgramSettings = function(programId, programTitle, noteOnly) {
    if (!progSettingsOverlay) return;
    const titleEl = document.getElementById('programSettingsTitle');
    if (titleEl) titleEl.textContent = (programTitle || 'Program') + (noteOnly ? ' — Note' : ' Settings');

    // The programme rating, alongside the note. It follows feedback mode the
    // way the pack rating does; the note does not.
    const fbSection = document.getElementById('programSettingsFbSection');
    if (fbSection) fbSection.style.display = (!noteOnly && feedbackMode) ? '' : 'none';
    if (!noteOnly && feedbackMode) {
      const fbKeyProg = window.progFbKey ? progFbKey(programId) : ('fb_prog_' + programId);
      const fbBar = document.getElementById('fb-prog-bar');
      if (fbBar) fbBar.dataset.fbKey = fbKeyProg;
      if (fbBar && typeof fbRender === 'function') fbRender('fb-prog-bar', fbKeyProg);
    }

    // v1.27.19 — a programme can be suggested for a tier too. Same reasoning
    // as the pack bar beside it: the question "should this be free or pro"
    // comes up while reviewing, and had nowhere to go for programmes.
    const alSection = document.getElementById('programSettingsAlSection');
    if (alSection) alSection.style.display = (!noteOnly && alSuggestMode) ? '' : 'none';
    if (!noteOnly && alSuggestMode) {
      const alKeyProg = 'al_prog_' + programId;
      const alBar = document.getElementById('al-prog-bar');
      if (alBar) alBar.dataset.alKey = alKeyProg;
      if (typeof alRender === 'function') alRender('al-prog-bar', alKeyProg);
    }

    const noteSection = document.getElementById('programSettingsNoteSection');
    if (noteSection) noteSection.style.display = '';
    if (window._scopeNoteBind) {
      _scopeNoteBind('progNoteArea', window.progNoteKey ? progNoteKey(programId) : ('note_prog_' + programId));
    }

    const listEl  = document.getElementById('programTagsList');
    const input   = document.getElementById('programTagInput');
    const addBtn  = document.getElementById('programTagAddBtn');
    const tagKey  = 'prog:' + programId;

    // Only show tag section if tag mode is on — and never on the note-only path
    const tagSection = document.getElementById('programSettingsTagSection');
    if (tagSection) tagSection.style.display = (tagMode && !noteOnly) ? '' : 'none';

    if (tagMode && !noteOnly && listEl) {
      function renderProgTags() {
        const tags = window.getTagsForKey(tagKey);
        listEl.innerHTML = tags.length
          ? tags.map((t, i) => `<span class="tag-chip">${t}<button class="tag-chip-del" data-i="${i}">×</button></span>`).join('')
          : '<span class="tag-empty">No tags yet</span>';
        listEl.querySelectorAll('.tag-chip-del').forEach(btn => {
          btn.addEventListener('click', () => {
            const cur = window.getTagsForKey(tagKey);
            cur.splice(parseInt(btn.dataset.i), 1);
            window.setTagsForKey(tagKey, cur);
            renderProgTags();
          });
        });
      }
      renderProgTags();
      if (input) input.value = '';

      const newAdd = addBtn.cloneNode(true);
      addBtn.parentNode.replaceChild(newAdd, addBtn);
      newAdd.addEventListener('click', () => {
        const val = document.getElementById('programTagInput').value.trim().toLowerCase();
        if (!val) return;
        const cur = window.getTagsForKey(tagKey);
        if (!cur.includes(val)) { cur.push(val); window.setTagsForKey(tagKey, cur); }
        document.getElementById('programTagInput').value = '';
        renderProgTags();
      });
      document.getElementById('programTagInput').addEventListener('keydown', e => {
        if (e.key === 'Enter') { e.preventDefault(); document.getElementById('programTagAddBtn').click(); }
      });
    }

    progSettingsOverlay.style.display = 'flex';
    if (noteOnly) setTimeout(() => { const a = document.getElementById('progNoteArea'); if (a) a.focus(); }, 60);
  };

  // Init
  tagMode = localStorage.getItem('tagMode') === 'true';
  applyTagMode();
})();

// ─── ONBOARDING (v1.26.33) ────────────────────────────────────────────────
// First-run intro shown once, revealed as the splash fades. Steps: welcome,
// three quick questions (habit / interests / training style) and a short
// how-it-works. Answers are stored in ds_onboarding for future
// personalisation; ds_onboarding_done gates the whole flow.
(function initOnboarding() {
  const DONE_KEY = 'ds_onboarding_done';
  const DATA_KEY = 'ds_onboarding';
  const screen = document.getElementById('onboardingScreen');
  if (!screen) return;
  if (localStorage.getItem(DONE_KEY)) return;   // already seen

  const steps   = Array.from(screen.querySelectorAll('.ob-step'));
  const dotsEl  = document.getElementById('obDots');
  const nextBtn = document.getElementById('obNextBtn');
  const skipBtn = document.getElementById('obSkipBtn');
  let step = 0;
  const answers = {};

  // Build progress dots
  dotsEl.innerHTML = steps.map((_, i) =>
    '<span class="ob-dot' + (i === 0 ? ' ob-dot--active' : '') + '"></span>').join('');
  const dots = Array.from(dotsEl.children);

  // A step is "answerable" if it contains an .ob-options block. Single-select
  // steps require a pick before Continue; multi-select can be skipped (0 picks
  // is a valid answer).
  function stepOptions(i) { return steps[i].querySelector('.ob-options'); }
  function requiresPick(i) {
    const opts = stepOptions(i);
    return opts && opts.dataset.type === 'single';
  }
  function hasPick(i) {
    const opts = stepOptions(i);
    return opts && !!opts.querySelector('.ob-option--selected');
  }

  function updateNext() {
    nextBtn.disabled = requiresPick(step) && !hasPick(step);
    nextBtn.textContent = (step === steps.length - 1) ? 'Start training' : 'Continue';
  }

  function showStep(i) {
    steps.forEach((s, j) => { s.style.display = j === i ? 'flex' : 'none'; });
    dots.forEach((d, j) => d.classList.toggle('ob-dot--active', j === i));
    step = i;
    updateNext();
  }

  // Option selection (event delegation per options block)
  screen.querySelectorAll('.ob-options').forEach(opts => {
    const multi = opts.dataset.type === 'multi';
    opts.addEventListener('click', e => {
      const btn = e.target.closest('.ob-option');
      if (!btn) return;
      if (multi) {
        // Keep PICK order (not DOM order) — the first thing the user taps
        // is treated as their top priority for favorites/recommendations.
        const key = opts.dataset.key;
        answers[key] = answers[key] || [];
        if (btn.classList.toggle('ob-option--selected')) {
          answers[key].push(btn.dataset.val);
        } else {
          answers[key] = answers[key].filter(v => v !== btn.dataset.val);
        }
      } else {
        opts.querySelectorAll('.ob-option').forEach(b => b.classList.remove('ob-option--selected'));
        btn.classList.add('ob-option--selected');
        answers[opts.dataset.key] = btn.dataset.val;
        // Habit step: reveal the reassurance line once a choice is made
        const reassure = opts.parentNode.querySelector('.ob-reassure');
        if (reassure) reassure.style.visibility = 'visible';
      }
      updateNext();
    });
  });

  // Interest chip -> pack keys. Order inside each entry = priority.
  // v1.26.76 — rewritten for the imported library. Every entry here used to
  // point at a pre-handbook pack, and those are all at minLevel 'complete'
  // now, so a new user's answers produced recommendations for packs they
  // could not even see. Where a free pack fits an interest it is listed
  // FIRST, so the first suggestion is something they can open today.
  // Keep in sync with the chips in index.html step 3.
  const OB_PACK_MAP = {
    starting:     ['firststrategies', 'startingconversations1', 'setupstatement'],
    conversation: ['exploringatopic', 'changingtopics', 'reactingtounexpectedstatements'],
    listening:    ['showunderstanding', 'validation', 'supportingconversations'],
    depth:        ['deepquestions', 'talkingaboutyourself', 'supportingconversations'],
    boundaries:   ['sayingno', 'makingrequests', 'brokenrecord'],
    // v1.27.60 \u2014 `assertive` (The Assertive Four) satt har och ligger pa
    // minLevel 'complete': en ny freemium-anvandare fick alltsa ett pack
    // rekommenderat som hen inte kan oppna. `assertivecomm1` ar freemium och
    // lar ut samma fyra drag.
    assertive:    ['assertivecomm1', 'brokenrecord', 'receivingfeedbackandcriticism'],
    humour:       ['humour', 'teasing', 'selfhumour', 'humourpractise'],
    conflict:     ['conflictemotions', 'respondingtopassiveaggression', 'emotionlabellingandregulation'],
    feedback:     ['givingcriticism', 'receivingfeedbackandcriticism', 'praiseandencouragement'],
    repair:       ['apologizing1'],
    persuasion:   ['persuasionandinfluence1', 'disagreeing', 'negotiationandcompromise'],
    storytelling: ['storiesinconversation', 'explainthings', 'storytellingwiththesixws', 'describethings'],
  };

  // Turn the picked interests into an ordered list of {key, label} packs
  // (labels resolved from the library DOM so they always match the data),
  // then: store them for the Recommended list + Start-here card, and seed
  // favorites if the user has none yet.
  function personalize() {
    const interests = answers.interests || [];
    if (!interests.length) return;
    const labelOf = {};
    document.querySelectorAll('#libTabPacks .collection-card').forEach(c => {
      if (c.dataset.key) labelOf[c.dataset.key] = c.dataset.label;
    });
    const packs = [];
    interests.forEach(val => (OB_PACK_MAP[val] || []).forEach(key => {
      if (labelOf[key] && !packs.some(p => p.key === key)) {
        packs.push({ key, label: labelOf[key] });
      }
    }));
    if (!packs.length) return;
    try { localStorage.setItem('ds_reco_packs', JSON.stringify(packs)); } catch (e) {}
    // Seed favorites (max 4) only if the user has none
    try {
      const fav = JSON.parse(localStorage.getItem('fav_packs') || '[]');
      if (!fav.length) {
        localStorage.setItem('fav_packs', JSON.stringify(packs.slice(0, 4)));
        if (window._favRenderTab)  window._favRenderTab();
        if (window._favRenderDash) window._favRenderDash();
      }
    } catch (e) {}
    if (window._personalizeRecommended) window._personalizeRecommended();
    if (window.renderContinueCard) window.renderContinueCard();
  }

  function finish(skipped) {
    answers.skipped = !!skipped;
    answers.completedAt = new Date().toISOString();
    try { localStorage.setItem(DATA_KEY, JSON.stringify(answers)); } catch (e) {}
    localStorage.setItem(DONE_KEY, 'true');
    if (!skipped) personalize();
    screen.classList.add('ob-leaving');
    setTimeout(() => { screen.style.display = 'none'; }, 450);
  }

  nextBtn.addEventListener('click', () => {
    if (nextBtn.disabled) return;
    if (step < steps.length - 1) showStep(step + 1);
    else finish(false);
  });
  skipBtn.addEventListener('click', () => finish(true));

  // Reveal under the splash: the splash (z 9999) fades out on its own
  // schedule; the onboarding simply sits beneath it from the start.
  screen.style.display = 'flex';
  showStep(0);
})();

// ─── PACK INTROS (v1.26.44) ────────────────────────────────────────────
// Informational per-pack intro in the onboarding style (Continue at the
// bottom, Skip top right, progress dots). Shown automatically the first
// 3 times a pack is opened; after that, tapping the pack NAME on the mode
// screen replays it. Add a new pack intro by adding an entry to PACK_INTROS.
(function initPackIntros() {
  const screen = document.getElementById('packIntroScreen');
  if (!screen) return;

  const SHOW_TIMES = 3;

  // page: { title, html } — html is the body below the title.
  const PACK_INTROS = {
    // First Strategies is the first pack a new user ever opens, so its first
    // page does one extra job the others do not: it says what the app is for.
    // Every other intro goes straight to preparing the training.
    // First Strategies ar det forsta packet en ny anvandare oppnar, och det
    // kommer direkt efter onboarding. v1.27.59 kortade det fran atta sidor
    // till tre: en sida per strategi betydde sex skarmar text innan ett enda
    // kort, ovanpa allt introturen redan visat. Strategierna kommer nu tre och
    // tre, med tva rader var \u2014 nog for att kanna igen ett namn nar det
    // dyker upp pa nasta skarm, och inte mer an sa.
    firststrategies: {
      pages: [
        {
          title: 'First Strategies',
          html:
            '<p class="ob-text">Deckstack is a rehearsal room. You practise things to say ' +
            'here, so they are already yours when a real conversation arrives.</p>' +
            '<p class="ob-text">This pack holds six moves. Together they make one small ' +
            'conversation, from the first remark to a good ending.</p>' +
            '<p class="ob-text ob-text--dim">The next two pages introduce them. You do not ' +
            'have to remember the names &mdash; you will meet them one at a time.</p>'
        },
        {
          title: 'Getting it going',
          html:
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>Opening Statement</strong><br>Say something instead of asking something. A remark hands the other person material; a question hands them a job.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Follow the Thread</strong><br>Take one word out of what they just said and go into it. You never need a new topic.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">3</span><p><strong>Say It Back</strong><br>Show that you understood before you add anything of your own. It is the cheapest way to be easy to talk to.</p></div>' +
            '</div>'
        },
        {
          title: 'Saying what you want',
          html:
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">4</span><p><strong>Ask Plainly</strong><br>Say what you want in one sentence, without building up to it. The ask is shorter than the run-up.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">5</span><p><strong>A Friendly No</strong><br>Decline warmly and clearly at the same time. Warmth is not the same as a maybe.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">6</span><p><strong>Answer With a Hook</strong><br>Leave something in your answer for them to pick up, so the turn comes back to you.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">Six moves, one conversation. Start anywhere.</p>'
        }
      ]
    },

    startingconversations1: {
      pages: [
        {
          title: 'Starting Conversations \u2014 Pt. 1',
          html:
            '<p class="ob-text">The four safest ways to start a conversation with someone ' +
            'you do not know. None of them requires you to be interesting.</p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>Simple Greeting</strong> &mdash; say hello, and nothing more.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Introduce Yourself</strong> &mdash; give them a reason to say their name.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">3</span><p><strong>Comment on the Situation</strong> &mdash; say something about where you both are.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">4</span><p><strong>Ask About the Situation</strong> &mdash; ask something about it instead.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">This is the first of four parts. The later ones ask more of you.</p>'
        },
        {
          title: 'Simple Greeting',
          html:
            '<p class="ob-text">Say hello. That is the whole strategy.</p>' +
            '<p class="ob-text">A greeting asks for nothing and risks nothing, which is ' +
            'exactly why it works. It opens a door without insisting anyone walks through it.</p>' +
            '<p class="ob-text ob-text--dim">Someone sits down beside you<br>&rarr; &ldquo;Morning.&rdquo;</p>'
        },
        {
          title: 'Introduce Yourself',
          html:
            '<p class="ob-text">Say your name and give them a reason to say theirs.</p>' +
            '<p class="ob-text">This is the opener that turns a stranger into someone you ' +
            'have met. Most people are relieved that you went first.</p>' +
            '<p class="ob-text ob-text--dim">Waiting for the same meeting<br>&rarr; &ldquo;I don\u2019t think we\u2019ve met &mdash; I\u2019m&hellip;&rdquo;</p>'
        },
        {
          title: 'Comment on the Situation',
          html:
            '<p class="ob-text">Say something about the thing you are both in. The room, the ' +
            'queue, the weather, the delay.</p>' +
            '<p class="ob-text">It is the safest remark there is, because it is already true ' +
            'for both of you. Nobody has to know anything to answer it.</p>' +
            '<p class="ob-text ob-text--dim">A room that is far too warm<br>&rarr; &ldquo;Whoever booked this room did not think about the sun.&rdquo;</p>'
        },
        {
          title: 'Ask About the Situation',
          html:
            '<p class="ob-text">Ask them something about where you both are &mdash; when it ' +
            'starts, where the room is, whether they have been before.</p>' +
            '<p class="ob-text">A question about the situation is easy to answer, and it ' +
            'gives them the small pleasure of knowing something you do not.</p>' +
            '<p class="ob-text ob-text--dim">First time at a regular event<br>&rarr; &ldquo;Do you know if this usually runs over?&rdquo;</p>'
        },
        {
          // v1.27.43 — added when the pack was rewritten. The four openers were
          // never the hard part; choosing between them is, and the intro said
          // nothing about it. Two questions cover nearly every real moment, and
          // they are what the three collections now drill.
          title: 'Choosing One',
          html:
            '<p class="ob-text">All four work almost anywhere. Two questions decide which, ' +
            'and neither needs thinking about.</p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>How much do they want to be spoken to?</strong> Headphones and a book &mdash; greet or comment. Relaxed and looking around &mdash; ask.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Will you see them again?</strong> If so, give them your name now. It only gets more awkward later.</p></div>' +
            '</div>' +
            '<p class="ob-text">And when the reply is short: try one more thing, then let it ' +
            'go warmly. One flat answer means nothing. Two means something.</p>' +
            '<p class="ob-text ob-text--dim">Any of the four beats saying nothing. Pick one and start.</p>'
        }
      ]
    },

    showunderstanding: {
      pages: [
        {
          title: 'Show Understanding',
          html:
            '<p class="ob-text">Understanding someone is not enough on its own. They have to ' +
            'be able to tell that you did &mdash; and that is a separate skill.</p>' +
            '<p class="ob-text">Three ways to make it visible &mdash; and you use ' +
            '<strong>one</strong> at a time.</p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>Follow-up Question</strong> &mdash; ask what only a listener could ask.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Say It Back</strong> &mdash; say their point back in your own words.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">3</span><p><strong>Relate Through Sharing</strong> &mdash; offer something of your own.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">The next pages explain each one, and how to choose.</p>'
        },
        {
          title: 'Follow-up Question',
          html:
            '<p class="ob-text">Ask for more &mdash; a question that could only come from ' +
            'someone who was actually listening.</p>' +
            '<p class="ob-text">The proof is in the detail you pick up. A general question ' +
            'could have been asked by anyone; a specific one could not.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;It\u2019s been a lot since the move.&rdquo;<br>&rarr; &ldquo;A lot how &mdash; the flat, or everything at once?&rdquo;</p>'
        },
        {
          title: 'Say It Back',
          html:
            '<p class="ob-text">Say their point back in your own words, so they can hear that ' +
            'it arrived intact &mdash; or correct you before it costs anyone anything.</p>' +
            '<p class="ob-text">Your own words matter. Repeating their sentence sounds like a ' +
            'technique; rewording it proves the meaning got through.</p>' +
            '<p class="ob-text ob-text--dim">A long, tangled story<br>&rarr; &ldquo;So she said yes, then changed her mind on the day.&rdquo;</p>'
        },
        {
          title: 'Relate Through Sharing',
          html:
            '<p class="ob-text">Offer something of your own &mdash; a time you felt the same, ' +
            'kept small enough that the subject stays theirs.</p>' +
            '<p class="ob-text">Done briefly it says: I recognise this, you are not strange. ' +
            'Done at length it quietly takes the conversation away from them.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;I felt completely out of my depth.&rdquo;<br>&rarr; &ldquo;I know that one. My first week I hid in the stairwell.&rdquo;</p>'
        },
        {
          // v1.27.42 — added when the pack was rewritten. Choosing between the
          // three IS the exercise, and the intro had never said so: it
          // introduced three moves and left the reader to work out that they
          // are alternatives rather than a sequence.
          title: 'Choosing One',
          html:
            '<p class="ob-text">Knowing the three moves is the easy half. Reading which one ' +
            'the moment wants is the skill this pack trains.</p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p>Still telling it &mdash; <strong>ask</strong>.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p>Just landed something &mdash; <strong>loop</strong>.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">3</span><p>Finished and settled &mdash; <strong>relate</strong>.</p></div>' +
            '</div>' +
            '<p class="ob-text">For anything difficult: loop first, ask second, relate last. ' +
            'Most people do it backwards.</p>' +
            '<p class="ob-text ob-text--dim">One move, then wait. The pause is part of it.</p>'
        }
      ]
    },

    assertive: {
      pages: [
        {
          title: 'The Assertive Four',
          html:
            '<p class="ob-text">This pack trains you to stand your ground calmly &mdash; ' +
            'without getting defensive, without attacking back, and without giving in.</p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>Fogging</strong> &mdash; calmly agree with the truth in a criticism.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Negative Inquiry</strong> &mdash; ask for more about the criticism.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">3</span><p><strong>Negative Assertion</strong> &mdash; own your mistakes without excuses.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">4</span><p><strong>Broken Record</strong> &mdash; repeat your point, calmly, as needed.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">The next pages explain each strategy.</p>'
        },
        {
          title: 'Fogging',
          html:
            '<p class="ob-text">When someone criticises you, calmly agree with whatever is true in it &mdash; ' +
            'without defending yourself and without agreeing to change.</p>' +
            '<p class="ob-text">Like fog, you give the critic nothing solid to push against. ' +
            'The attack loses its power because you refuse to fight it.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;You\u2019re late again.&rdquo;<br>&rarr; &ldquo;You\u2019re right, I am late.&rdquo;</p>'
        },
        {
          title: 'Negative Inquiry',
          html:
            '<p class="ob-text">Instead of defending yourself, calmly ask for more: what exactly is the problem?</p>' +
            '<p class="ob-text">It shows you are not afraid of the criticism &mdash; and it turns a vague attack ' +
            'into concrete information you can actually use.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;I don\u2019t like your attitude.&rdquo;<br>&rarr; &ldquo;What is it about my attitude that bothers you?&rdquo;</p>'
        },
        {
          title: 'Negative Assertion',
          html:
            '<p class="ob-text">When you really have made a mistake, own it openly &mdash; ' +
            'without excuses, and without beating yourself up.</p>' +
            '<p class="ob-text">A mistake is a fact, not a verdict on who you are. ' +
            'Accepting it calmly leaves the critic nothing more to add.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;You forgot the report.&rdquo;<br>&rarr; &ldquo;Yes, I did &mdash; that was careless of me.&rdquo;</p>'
        },
        {
          title: 'Broken Record',
          html:
            '<p class="ob-text">Repeat your point calmly, in the same even tone, as many times as it takes.</p>' +
            '<p class="ob-text">You don\u2019t need new arguments, and you don\u2019t need to raise your voice. ' +
            'Steady repetition shows that pressure will not move you.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;I understand, but I\u2019m not able to help this weekend.&rdquo;<br>' +
            '&hellip;and again, just as calmly: &ldquo;I understand, but I\u2019m not able to help this weekend.&rdquo;</p>'
        }
      ]
    },

    // v1.27.53 \u2014 Assertive Communication (assertivecomm1), renamed from
    // "Assertive Communication 1 \u2014 Coping with Criticism". A freemium pack with
    // no intro at all: one of the packs a free user can open said nothing about
    // itself. Four strategies, so each gets a page, and the first page does the
    // one job the pack's own Core Idea cannot \u2014 say what the four have in
    // common and which question picks between them.
    // v1.27.53, ordningen rattad v1.27.59. Sidorna foljer nu packets egen
    // deckordning: Broken Record, Fogging, Negative Assertion, Negative
    // Inquiry. Forsta versionen arvde ordningen fran The Assertive Four, som
    // listar dem tvartom, och da stamde introt inte med det anvandaren motte
    // pa nasta skarm.
    assertivecomm1: {
      pages: [
        {
          title: 'Assertive Communication',
          html:
            '<p class="ob-text">Four things to say when someone is criticising you, ' +
            'pressuring you, or working on your guilt. They are defences, not attacks &mdash; ' +
            'each one ends the pressure without starting a fight.</p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>Broken Record</strong> &mdash; repeat what you want, unchanged.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Fogging</strong> &mdash; agree with what is true in it.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">3</span><p><strong>Negative Assertion</strong> &mdash; own a real mistake, plainly.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">4</span><p><strong>Negative Inquiry</strong> &mdash; ask what they actually mean.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">One question picks between them: what did the ' +
            'other person just do?</p>'
        },
        {
          title: 'Broken Record',
          html:
            '<p class="ob-text">Say what you want in the same words, in the same even tone, ' +
            'as many times as it takes. No new arguments.</p>' +
            '<p class="ob-text">Every reason you add is something for them to solve. The want ' +
            'itself cannot be solved, which is why repeating it works and arguing does not.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;But it is store policy.&rdquo;<br>&rarr; &ldquo;I understand that&rsquo;s the policy, and I want a refund.&rdquo;</p>'
        },
        {
          title: 'Fogging',
          html:
            '<p class="ob-text">Agree with whatever is true, likely, or fair in the criticism &mdash; ' +
            'and with nothing else. You are not promising to change. You are removing the fight ' +
            'they were expecting.</p>' +
            '<p class="ob-text">A critic needs something solid to hit. Agree, and the exaggeration ' +
            'is left standing on its own, which is where it looks worst.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;You&rsquo;re always so disorganised.&rdquo;<br>&rarr; &ldquo;I probably am, some days.&rdquo;</p>'
        },
        {
          title: 'Negative Assertion',
          html:
            '<p class="ob-text">When you really did it, say so &mdash; once, flatly, without ' +
            'excuses and without crawling.</p>' +
            '<p class="ob-text">A mistake is an inefficiency, not a verdict on you. Owning it ' +
            'immediately takes away the only thing the other person was holding.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;You forgot the report.&rdquo;<br>&rarr; &ldquo;I did &mdash; that was careless of me.&rdquo;</p>'
        },
        {
          title: 'Negative Inquiry',
          html:
            '<p class="ob-text">Ask for the complaint instead of answering the mood. ' +
            'Calmly, without an edge: what specifically am I doing?</p>' +
            '<p class="ob-text">Vague criticism runs on being vague. One plain question forces it ' +
            'to become an actual event you can do something about &mdash; or to stop.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;I don&rsquo;t like your attitude.&rdquo;<br>&rarr; &ldquo;What is it about my attitude that bothers you?&rdquo;</p>'
        }
      ]
    },

    // v1.27.44 \u2014 written from scratch. This pack is freemium and had no intro
    // at all, which meant one of the four packs a free user can open said
    // nothing about itself. Seven strategies is too many to give a page each
    // without the intro turning into a manual, so the pages follow the pack's
    // own grouping: three that answer the question, two that decide the size,
    // one for enthusiasm, one for the handover.
    talkingaboutyourself: {
      pages: [
        {
          title: 'Talking About Yourself',
          html:
            '<p class="ob-text">Everything else in this app teaches you to <strong>ask</strong>. ' +
            'This is the half where the question comes back to you.</p>' +
            '<p class="ob-text">It goes wrong in two opposite ways, and both come from the ' +
            'same mistake &mdash; reading the question as a test of how interesting you are.</p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>Too little.</strong> Four words, and now they are carrying the whole conversation.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Too much, too soon.</strong> A step nobody offered to take.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">Attention on you is an offer, not an exam.</p>'
        },
        {
          title: 'Answering the Question',
          html:
            '<p class="ob-text">Three strategies for an ordinary question landing on you. ' +
            'Each one fixes a different way the answer dies.</p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>Give a Detail</strong> &mdash; answer, then add one concrete thing they can pick up.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Behind the Question</strong> &mdash; the version about you, not the job title.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">3</span><p><strong>True, Not Impressive</strong> &mdash; true and specific beats impressive.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">&ldquo;How was your week?&rdquo;<br>&rarr; &ldquo;Good &mdash; long, though. I spent most of it arguing with a printer.&rdquo;</p>'
        },
        {
          title: 'Deciding How Much',
          html:
            '<p class="ob-text">Two strategies for size rather than content. Depth is a ' +
            'staircase: one step below what they offered, taken after they take theirs.</p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>Match Their Depth</strong> &mdash; a corridor question wants one line; a real one wants more.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Keep Something Back</strong> &mdash; a partial answer, warmly given, for what you would rather skip.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">&ldquo;Weren\u2019t you with someone for years?&rdquo;<br>&rarr; &ldquo;I was. Short version: it ended badly, and I\u2019m not doing the long one tonight.&rdquo;</p>'
        },
        {
          title: "What You're Into",
          html:
            '<p class="ob-text">Say the thing you actually care about, plainly, and then stop ' +
            'talking.</p>' +
            '<p class="ob-text">Enthusiasm is the most attractive thing most people have and ' +
            'the thing they hide hardest. What you are afraid of is not the enthusiasm &mdash; ' +
            'it is the lecture, and those are different. Name it, give one line, and let them ' +
            'decide whether to open it.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;What do you do with your time?&rdquo;<br>&rarr; &ldquo;I\u2019ve got very into bread lately. Not in a normal amount.&rdquo;</p>'
        },
        {
          title: 'Hand It Back',
          html:
            '<p class="ob-text">Return the attention &mdash; but only after you have answered.</p>' +
            '<p class="ob-text">Answering in four words and immediately asking a question ' +
            'looks like interest and works like a shield. They learn nothing about you, they ' +
            'do all the work, and after a while they stop asking.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;That\u2019s my week, anyway. What about yours?&rdquo;</p>'
        },
        {
          title: 'Choosing One',
          html:
            '<p class="ob-text">One question sorts most of it: <strong>what would my answer ' +
            'leave them with?</strong></p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p>Nothing to ask about &mdash; <strong>give a detail</strong>.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p>A job title &mdash; <strong>answer what they were really asking</strong>.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">3</span><p>Nothing true &mdash; <strong>say the small thing</strong>.</p></div>' +
            '</div>' +
            '<p class="ob-text">Everything else is a question of size, and the answer to that ' +
            'one is always: look at what they just gave you.</p>' +
            '<p class="ob-text ob-text--dim">The bar is true and specific. Nobody is grading this.</p>'
        }
      ]
    },

    // v1.27.45 — the two packs a freemium user reaches through the
    // Conversation Foundations programme rather than from the Packs tab. Both
    // are Pro standalone, so they had no intro: nobody thought of them as packs
    // a free user opens, and they are exactly that after a checkpoint.
    exploringatopic: {
      pages: [
        {
          title: 'Exploring a Topic',
          html:
            '<p class="ob-text">Most conversations die by hopping. A subject comes up, ' +
            'somebody says one thing about it, and then everyone starts hunting for a new one.</p>' +
            '<p class="ob-text">This pack is the opposite skill: <strong>staying</strong>. ' +
            'Five ways to add something to the subject already on the table.</p>' +
            '<p class="ob-text ob-text--dim">You do not need to know anything about the topic to keep it going.</p>'
        },
        {
          title: 'Going Deeper',
          html:
            '<p class="ob-text">Two ways to go further into what is already being said.</p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>Ask an Open Question</strong> &mdash; a what, how or why about the subject in hand.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Build on Their Point</strong> &mdash; take their own word and go one layer down.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">&ldquo;I grow most of our vegetables in the summer.&rdquo;<br>&rarr; &ldquo;You said <em>most</em> &mdash; what is the one thing that never works?&rdquo;</p>'
        },
        {
          title: 'Adding Your Own',
          html:
            '<p class="ob-text">Two ways to put something of yours into the topic without ' +
            'taking it over.</p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>Share a Related Experience</strong> &mdash; it does not have to be impressive, only related.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Share, Then Invite</strong> &mdash; one part you, one part them, in the same breath.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">&ldquo;I tried herbs on the windowsill &mdash; the basil lasted about a week. What do you grow?&rdquo;</p>'
        },
        {
          title: 'When It Runs Out',
          html:
            '<p class="ob-text"><strong>Expand to a Related Subtopic</strong> &mdash; step ' +
            'sideways rather than away.</p>' +
            '<p class="ob-text">A thread does eventually finish, and the instinct then is to ' +
            'jump to something unrelated. Moving to the next room instead of the next house ' +
            'keeps everything said so far still useful.</p>' +
            '<p class="ob-text ob-text--dim">Balcony gardening dries up<br>&rarr; &ldquo;Does anyone keep plants indoors? Mine never survive the winter.&rdquo;</p>'
        },
        {
          title: 'Choosing One',
          html:
            '<p class="ob-text">One question decides it: <strong>is the thread still ' +
            'alive?</strong></p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p>Yes, and they are talking &mdash; <strong>ask</strong> or <strong>build</strong>.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p>Yes, but it is your turn &mdash; <strong>share</strong>, then invite.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">3</span><p>No &mdash; <strong>expand sideways</strong>, and only sideways.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">Stay one move longer than feels natural. That is where the conversation usually is.</p>'
        }
      ]
    },

    changingtopics: {
      pages: [
        {
          title: 'Changing Topics',
          html:
            '<p class="ob-text">Every subject ends. What people notice is not that you changed ' +
            'it &mdash; it is the gap where the change happened.</p>' +
            '<p class="ob-text">Six ways to move on, sorted by how much of a bridge you build ' +
            'from the old subject to the new one.</p>' +
            '<p class="ob-text ob-text--dim">A switch with a bridge feels like a conversation. Without one it feels like an interruption.</p>'
        },
        {
          title: 'Bridging From What They Said',
          html:
            '<p class="ob-text">The smoothest two, because the new subject grows out of their ' +
            'own words.</p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>The Bridge</strong> &mdash; catch one word and use it as the bridge.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Common Ground</strong> &mdash; &ldquo;that&rsquo;s like when I&hellip;&rdquo;, and the new direction opens itself.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">&ldquo;I was up late finishing a report.&rdquo;<br>&rarr; &ldquo;Late nights &mdash; that reminds me, have you had any proper time off lately?&rdquo;</p>'
        },
        {
          title: 'Closing Before Opening',
          html:
            '<p class="ob-text">Two ways to finish the old subject on purpose, so the new one ' +
            'is not standing on top of it.</p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>Acknowledge and Redirect</strong> &mdash; a short wrap-up, then the new subject.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Close and Open</strong> &mdash; for a topic that has been covered, or is going round again.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">&ldquo;Sounds like an amazing trip &mdash; I think we&rsquo;ve covered it well. So what else is new?&rdquo;</p>'
        },
        {
          title: 'No Bridge At All',
          html:
            '<p class="ob-text"><strong>The Random Switch</strong> &mdash; change the ' +
            'subject openly, and say that you are doing it.</p>' +
            '<p class="ob-text">Naming the switch is what makes it work. An unannounced jump ' +
            'is jarring; an announced one is just a bit of lightness, and everyone is usually ' +
            'relieved.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;Okay, before we get too philosophical &mdash; seen any good films lately?&rdquo;</p>'
        },
        {
          title: 'When It Gets Uncomfortable',
          html:
            '<p class="ob-text"><strong>Steer Away</strong> &mdash; ' +
            'acknowledge it, then offer safer ground.</p>' +
            '<p class="ob-text">The acknowledgement is the part people skip, and it is the part ' +
            'that matters. Moving on without it reads as not having noticed, which is worse ' +
            'than staying.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;That sounds really hard &mdash; no need to get into it. How have you been otherwise?&rdquo;</p>'
        },
        {
          title: 'Choosing One',
          html:
            '<p class="ob-text">One question: <strong>can you build a bridge from what they ' +
            'just said?</strong></p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p>Yes &mdash; <strong>link</strong>, or find common ground.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p>No, but the subject is finished &mdash; <strong>close it</strong>, then open.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">3</span><p>No, and you just want out &mdash; <strong>say so</strong>, lightly.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">Whatever you do, do not leave the gap unmarked. That is the only part anyone notices.</p>'
        }
      ]
    },

    humourpractise: {
      pages: [
        {
          title: 'Humour Practise',
          html:
            '<p class="ob-text">This pack trains you to bring lightness into a conversation on purpose &mdash; ' +
            'to play, tease and not take yourself too seriously, instead of waiting for a joke to happen.</p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>Observation Humour</strong> &mdash; find something funny in the moment you\u2019re both in.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Teasing</strong> &mdash; poke fun at the other person, warmly and lightly.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">3</span><p><strong>Self Humour</strong> &mdash; laugh at yourself before anyone else has to.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">4</span><p><strong>Joke About My Flaws</strong> &mdash; when someone points at a flaw, disarm it with a joke.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">5</span><p><strong>Jokingly Brag</strong> &mdash; brag so big it&rsquo;s obviously a joke.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">There\u2019s rarely one right line here. Each page shows one way to play it &mdash; aim for a version that sounds like you.</p>'
        },
        {
          title: 'Observation Humour',
          html:
            '<p class="ob-text">When there\u2019s nothing to react to, look at what\u2019s around you &mdash; the wait, the room, ' +
            'the situation you\u2019re both stuck in &mdash; and point out something funny in it.</p>' +
            '<p class="ob-text">It works because you\u2019re sharing the moment, not performing. The other person is already ' +
            'in on it, because they can see exactly what you mean.</p>' +
            '<p class="ob-text ob-text--dim">A long, silent lift ride&hellip;<br>&rarr; &ldquo;This is the most eye contact I\u2019ve avoided all day.&rdquo;</p>'
        },
        {
          title: 'Teasing',
          html:
            '<p class="ob-text">Playfully poke fun at the other person about something small &mdash; always warm, never a real dig. ' +
            'The affection has to show through.</p>' +
            '<p class="ob-text">Good teasing says &ldquo;I notice you, and I\u2019m comfortable enough to play.&rdquo; It builds closeness &mdash; ' +
            'as long as they can tell you\u2019re on their side.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;You\u2019ve reorganised your desk again?&rdquo;<br>&rarr; &ldquo;At this point the desk should pay you rent.&rdquo;</p>'
        },
        {
          title: 'Self Humour',
          html:
            '<p class="ob-text">Laugh at your own small mistakes and awkward moments before anyone else does. ' +
            'You bring it up yourself, lightly.</p>' +
            '<p class="ob-text">It shows you don\u2019t take yourself too seriously &mdash; which puts everyone at ease ' +
            'and takes the sting out of the moment.</p>' +
            '<p class="ob-text ob-text--dim">You walk straight into the glass door&hellip;<br>&rarr; &ldquo;Smooth. Meant to do that, obviously.&rdquo;</p>'
        },
        {
          title: 'Joke About My Flaws',
          html:
            '<p class="ob-text">When someone points at a real flaw of yours, don\u2019t defend it &mdash; agree, and make it funny. ' +
            'You take the criticism and turn it into a joke you\u2019re both in on.</p>' +
            '<p class="ob-text">Because you got there first, there\u2019s nothing left to attack. Owning it lightly ' +
            'is far stronger than denying it.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;You\u2019re always late.&rdquo;<br>&rarr; &ldquo;Punctuality just isn\u2019t one of my three skills.&rdquo;</p>'
        },
        {
          title: 'Jokingly Brag',
          html:
            '<p class="ob-text">Brag about yourself so wildly and obviously over-the-top that it can\u2019t be taken seriously. ' +
            'The joke is that no one could.</p>' +
            '<p class="ob-text">It\u2019s confidence played for laughs &mdash; you look secure enough to poke fun ' +
            'at your own ego.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;Nice parking.&rdquo;<br>&rarr; &ldquo;Thank you. They\u2019re thinking of putting my name on the spot.&rdquo;</p>'
        }
      ]
    }
  };

  function show(key, forced) {
    const intro = PACK_INTROS[key];
    if (!intro) return;
    const cKey = 'ds_packintro_' + key;
    if (!forced) {
      const n = parseInt(localStorage.getItem(cKey) || '0');
      if (n >= SHOW_TIMES) return;
      try { localStorage.setItem(cKey, n + 1); } catch (e) {}
    }
    screen.innerHTML =
      '<div class="ob-top"><div class="ob-dots" id="piDots"></div>' +
      '<button class="ob-skip" id="piSkipBtn">Skip</button></div>' +
      intro.pages.map((p, i) =>
        '<div class="ob-step" style="display:' + (i === 0 ? 'flex' : 'none') + ';">' +
        '<h2 class="ob-title">' + p.title + '</h2>' + p.html + '</div>').join('') +
      '<div class="ob-bottom"><button class="ob-next" id="piNextBtn">Continue</button></div>';

    const steps   = Array.from(screen.querySelectorAll('.ob-step'));
    const dotsEl  = screen.querySelector('#piDots');
    const nextBtn = screen.querySelector('#piNextBtn');
    dotsEl.innerHTML = steps.map((_, i) =>
      '<span class="ob-dot' + (i === 0 ? ' ob-dot--active' : '') + '"></span>').join('');
    const dots = Array.from(dotsEl.children);
    let step = 0;

    function showStep(i) {
      steps.forEach((st, j) => { st.style.display = j === i ? 'flex' : 'none'; });
      dots.forEach((d, j) => d.classList.toggle('ob-dot--active', j === i));
      step = i;
      nextBtn.textContent = (i === steps.length - 1) ? 'Got it' : 'Continue';
    }
    function finish() {
      screen.classList.add('ob-leaving');
      setTimeout(() => {
        screen.style.display = 'none';
        screen.classList.remove('ob-leaving');
        screen.innerHTML = '';
      }, 450);
    }
    nextBtn.addEventListener('click', () => {
      if (step < steps.length - 1) showStep(step + 1);
      else finish();
    });
    screen.querySelector('#piSkipBtn').addEventListener('click', finish);

    screen.classList.remove('ob-leaving');
    screen.style.display = 'flex';
    showStep(0);
  }

  // Called by showModeScreen / goNextPack (app-core.js)
  window.maybeShowPackIntro = key => show(key, false);
  window.replayPackIntro    = key => show(key, true);

  // Replay: tap the pack name on the mode screen
  const nameEl = document.getElementById('modeCollectionName');
  if (nameEl) {
    nameEl.style.cursor = 'pointer';
    nameEl.addEventListener('click', () => {
      const k = window.activeCollectionKey;
      if (k && PACK_INTROS[k]) show(k, true);
    });
  }
})();

// ─── GUIDES (v1.27.08) ───────────────────────────────────────────────────────
//
// Four walkthroughs that explain the training screens. They are NOT onboarding:
// onboarding runs once at first launch and explains the app. These run the
// first time you open a training screen, and afterwards live behind the gear.
//
//   training-basics   · shown automatically on the first standard training screen
//   training-more     · settings only
//   handsfree-basics  · shown automatically on the first handsfree screen
//   handsfree-more    · settings only
//
// They reuse #packIntroScreen and the .ob-* styles, so a guide looks and moves
// exactly like a pack intro — same dots, same Skip, same Continue.
//
// THE PICTURES ARE DRAWN, NOT SCREENSHOTTED. See the .gd-art note in style.css.
(function initGuides() {
  const screen = document.getElementById('packIntroScreen');
  if (!screen) return;

  // ── The word for "the thing you swipe sideways between" ──────────────────
  // In the data it is a group: a strategy in Single Strategy, a category in
  // Memorize and Challenges, a combo in Sequences, a collection in Collections.
  // The user needs ONE word for all six, and it is DECK — which is also where
  // the app's name comes from: a pack is a stack of decks.
  //
  // EVERY user-facing use of that word in this file goes through D. Renaming it
  // later is this one object.
  const D = { one: 'deck', One: 'Deck', many: 'decks', Many: 'Decks' };

  // ── Illustration kit ─────────────────────────────────────────────────────
  // Small SVG scenes of the training screen. Coordinates are a 250×150 stage.
  const svg = (h, body) =>
    '<svg class="gd-art" viewBox="0 0 250 ' + h + '" role="img" aria-hidden="true">' + body + '</svg>';

  // a card with a few text lines on it
  const card = (x, y, w, h, lines, opts) => {
    opts = opts || {};
    let s = '<rect class="gd-card" x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="10"/>';
    for (let i = 0; i < lines; i++) {
      const lw = (i === lines - 1) ? w * 0.45 : w * (0.72 - i * 0.06);
      s += '<rect class="gd-line' + (opts.strong && i === 0 ? ' gd-line--strong' : '') + '" x="' +
           (x + w * 0.14) + '" y="' + (y + h * 0.3 + i * 11) + '" width="' + lw + '" height="4.5" rx="2.2"/>';
    }
    return s;
  };
  const arrow = (x1, y1, x2, y2, head) => {
    const a = '<path class="gd-arrow" d="M' + x1 + ' ' + y1 + ' L' + x2 + ' ' + y2 + '"/>';
    return a + '<path class="gd-arrow" d="' + head + '"/>';
  };
  const label = (x, y, t, cls) =>
    '<text class="' + (cls || 'gd-label') + '" x="' + x + '" y="' + y + '" text-anchor="middle">' + t + '</text>';

  const ART = {
    // tapping the deck name above the card opens its description
    deckName: () => svg(150,
      '<rect class="gd-panel" x="55" y="8" width="140" height="20" rx="7"/>' +
      '<rect class="gd-line gd-line--strong" x="80" y="16" width="90" height="4.5" rx="2.2"/>' +
      '<circle class="gd-ring" cx="125" cy="18" r="17"/>' +
      '<circle class="gd-ring" cx="125" cy="18" r="25" opacity=".25"/>' +
      card(55, 40, 140, 100, 4) +
      label(125, 149, 'TAP THE NAME')),

    // the card itself, front and back
    flip: () => svg(150,
      card(15, 20, 105, 110, 3) +
      card(130, 20, 105, 110, 3, { strong: true }) +
      arrow(122, 75, 128, 75, 'M124 71 L129 75 L124 79') +
      label(67, 148, 'FRONT SIDE') +
      label(182, 148, 'BACK SIDE')),

    // swipe down: a new input inside the same deck
    newInput: () => svg(160,
      card(70, 6, 110, 84, 3) +
      card(70, 60, 110, 84, 3) +
      '<rect class="gd-card" x="70" y="60" width="110" height="84" rx="10"/>' +
      '<rect class="gd-line" x="85" y="85" width="72" height="4.5" rx="2.2"/>' +
      '<rect class="gd-line" x="85" y="96" width="62" height="4.5" rx="2.2"/>' +
      '<rect class="gd-line" x="85" y="107" width="42" height="4.5" rx="2.2"/>' +
      arrow(35, 40, 35, 110, 'M29 102 L35 111 L41 102') +
      label(35, 128, 'SWIPE', 'gd-muted') +
      label(35, 138, 'DOWN', 'gd-muted') +
      label(125, 159, 'A NEW INPUT')),

    // swipe right: the next deck
    nextDeck: () => svg(150,
      card(8, 25, 96, 96, 3) +
      card(146, 25, 96, 96, 3) +
      arrow(112, 73, 138, 73, 'M132 67 L139 73 L132 79') +
      label(56, 137, 'THIS ' + D.One.toUpperCase()) +
      label(194, 137, 'NEXT ' + D.One.toUpperCase()) +
      label(125, 16, 'SWIPE RIGHT', 'gd-muted')),

    // the counters above the card
    counters: () => svg(120,
      '<rect class="gd-panel" x="70" y="10" width="110" height="22" rx="7"/>' +
      '<text class="gd-label" x="125" y="25" text-anchor="middle">3 / 8  ·  2 / 5</text>' +
      arrow(100, 52, 100, 38, 'M95 44 L100 37 L105 44') +
      arrow(152, 52, 152, 38, 'M147 44 L152 37 L157 44') +
      '<text class="gd-muted" x="100" y="70" text-anchor="middle">input</text>' +
      '<text class="gd-muted" x="152" y="70" text-anchor="middle">' + D.one + '</text>' +
      card(70, 82, 110, 34, 2)),

    // the four arrows at the bottom
    navBar: () => svg(110,
      card(70, 4, 110, 46, 2) +
      '<rect class="gd-panel" x="45" y="60" width="160" height="34" rx="10"/>' +
      '<path class="gd-arrow" d="M70 77 L62 77 M66 73 L61 77 L66 81"/>' +
      '<path class="gd-arrow" d="M104 82 L104 72 M100 76 L104 71 L108 76"/>' +
      '<path class="gd-arrow" d="M146 72 L146 82 M142 78 L146 83 L150 78"/>' +
      '<path class="gd-arrow" d="M180 77 L188 77 M184 73 L189 77 L184 81"/>' +
      '<text class="gd-muted" x="66" y="107" text-anchor="middle">prev ' + D.one + '</text>' +
      '<text class="gd-muted" x="184" y="107" text-anchor="middle">next ' + D.one + '</text>'),

    // three taps on the hint line opens a note
    notes: () => svg(150,
      card(70, 6, 110, 74, 3) +
      '<rect class="gd-line" x="92" y="92" width="66" height="4" rx="2" opacity=".45"/>' +
      '<circle class="gd-dot" cx="125" cy="110" r="3.5"/>' +
      '<circle class="gd-ring" cx="125" cy="110" r="9"/>' +
      '<circle class="gd-ring" cx="125" cy="110" r="15" opacity=".3"/>' +
      label(125, 136, 'TAP THREE TIMES') +
      label(125, 148, 'BELOW THE CARD', 'gd-muted')),

    // handsfree: the app talks, the screen can sleep
    handsfree: () => svg(150,
      card(30, 20, 100, 100, 3) +
      '<path class="gd-arrow" d="M158 52 L172 52 L188 38 L188 102 L172 88 L158 88 Z"/>' +
      '<path class="gd-ring" d="M199 50 a22 22 0 0 1 0 40"/>' +
      '<path class="gd-ring" d="M207 40 a34 34 0 0 1 0 60" opacity=".4"/>' +
      label(125, 143, 'IT READS TO YOU')),

    // handsfree: adding voices on iPhone
    voices: () => svg(130,
      '<rect class="gd-panel" x="35" y="10" width="180" height="26" rx="8"/>' +
      '<text class="gd-muted" x="125" y="27" text-anchor="middle">Settings &#8250; Accessibility</text>' +
      '<rect class="gd-panel" x="35" y="44" width="180" height="26" rx="8"/>' +
      '<text class="gd-muted" x="125" y="61" text-anchor="middle">Spoken Content &#8250; Voices</text>' +
      '<rect class="gd-panel" x="35" y="78" width="180" height="26" rx="8"/>' +
      '<text class="gd-muted" x="125" y="95" text-anchor="middle">English &#8250; download one</text>' +
      '<path class="gd-arrow" d="M125 38 L125 42 M121 39 L125 43 L129 39"/>' +
      '<path class="gd-arrow" d="M125 72 L125 76 M121 73 L125 77 L129 73"/>' +
      label(125, 123, 'ONCE, ON THE PHONE')),
  };

  const P = t => '<p class="ob-text">' + t + '</p>';
  const Pdim = t => '<p class="ob-text ob-text--dim">' + t + '</p>';
  const cap = t => '<div class="gd-cap">' + t + '</div>';
  const rows = list =>
    '<div class="ob-how">' + list.map((r, i) =>
      '<div class="ob-how-row"><span class="ob-how-num">' + (i + 1) + '</span><p>' + r + '</p></div>'
    ).join('') + '</div>';

  // ── The guides ───────────────────────────────────────────────────────────
  const GUIDES = {
    // v1.27.59 \u2014 the six modes, side by side. The four older guides all
    // explain what to do once you are INSIDE a training screen; none of them
    // said what the six choices on the mode screen actually are. This one is
    // shown on the first pack the user ever opens, immediately before that
    // pack's own intro, and afterwards lives under the gear on the home
    // screen. Three pages, deliberately: it arrives right after onboarding.
    // v1.27.59, redrawn v1.27.60. The four older guides explain what to do
    // once you are INSIDE a training screen; none of them said what the six
    // choices on the mode screen actually are. Shown on the first pack the
    // user ever opens, ahead of that pack's own intro, and afterwards under
    // the gear on the home screen.
    //
    // The tiles carry the same Tabler icons as the mode cards, so the guide
    // and the screen it describes look like the same thing. Three modes a
    // page: six tiles do not fit one screen without scrolling.
    //
    // NOTE ON CHALLENGES. An earlier draft called these "the hard situations".
    // Rikard, 2026-08-29: that is not what the mode is. The situations are no
    // harder than anywhere else \u2014 the difference is that the deck is
    // sorted by the PROBLEM rather than by the strategy, which is a different
    // way in, not a difficulty setting. The two page groupings follow that
    // same axis and nothing else.
    'modes-overview': {
      title: 'Training modes',
      pages: [
        {
          title: 'Six ways to train',
          html:
            '<p class="ob-text">Every pack holds the same strategies, taught six different ways.</p>' +
            '<p class="ob-text">Three of them start from a strategy and work outwards. ' +
            'Three come at it from somewhere else entirely.</p>' +
            '<p class="ob-text ob-text--dim">You do not have to use them all. Most people ' +
            'live in one or two.</p>'
        },
        {
          title: 'From the strategy',
          html:
            '<div class="gd-modes">' +
            '<div class="gd-mode"><div class="gd-mode-ic"><i class="ti ti-cards" aria-hidden="true"></i></div>' +
            '<div class="gd-mode-tx"><strong>Single Strategy</strong><span>One move at a time. A situation on the front, something you could say on the back. This is where a move becomes yours.</span></div></div>' +
            
            '<div class="gd-mode"><div class="gd-mode-ic"><i class="ti ti-layout-grid" aria-hidden="true"></i></div>' +
            '<div class="gd-mode-tx"><strong>Collections</strong><span>Two or more moves side by side, and the question of which one this moment calls for. Knowing a move and picking it are different skills.</span></div></div>' +
            
            '<div class="gd-mode"><div class="gd-mode-ic"><i class="ti ti-list-numbers" aria-hidden="true"></i></div>' +
            '<div class="gd-mode-tx"><strong>Sequences</strong><span>A whole conversation, step by step, with the other person answering in between. The only mode where the order is the lesson.</span></div></div>' +
            
            '</div>'
        },
        {
          title: 'From another angle',
          html:
            '<div class="gd-modes">' +
            '<div class="gd-mode"><div class="gd-mode-ic"><i class="ti ti-trophy" aria-hidden="true"></i></div>' +
            '<div class="gd-mode-tx"><strong>Challenges</strong><span>The same moves, sorted by the problem instead of the strategy. You meet the comment first and pick the answer yourself.</span></div></div>' +
            
            '<div class="gd-mode"><div class="gd-mode-ic"><i class="ti ti-sparkles" aria-hidden="true"></i></div>' +
            '<div class="gd-mode-tx"><strong>Mindset</strong><span>Not about what to say at all. It takes the belief that stops you saying it, one thought at a time.</span></div></div>' +
            
            '<div class="gd-mode"><div class="gd-mode-ic"><i class="ti ti-brain" aria-hidden="true"></i></div>' +
            '<div class="gd-mode-tx"><strong>Memorize</strong><span>Flashcards: the names, the mechanisms, the reasons. Short sessions, and it holds the pack together.</span></div></div>' +
            
            '</div>'
        },
        {
          title: 'Ready',
          html:
            '<p class="ob-text">That is how the training works. Now for the material.</p>' +
            '<p class="ob-text">Every pack teaches its own set of strategies, and each one ' +
            'opens with a short introduction to them.</p>' +
            '<p class="ob-text ob-text--dim">Here is your first.</p>'
        }
      ]
    },
    // v1.27.77 - PROGRAMS, explained once. Shown the first time the user taps
    // any programme card, ahead of the programme screen, and afterwards under
    // the gear on the home screen.
    //
    // It fires on LOCKED programmes too. A Pro programme is browsable on
    // purpose - being able to look inside is the whole reason it is listed -
    // and someone looking at a route they cannot run yet needs the
    // explanation more than someone who can just start it.
    //
    // Rikard, 2026-09-03: the guide comes first, the programme screen after.
    'programs-overview': {
      title: 'Programs',
      pages: [
        {
          title: 'A route, not a pack',
          html:
            P('A pack is a set of strategies you can train in any order. A <strong>program</strong> is a route through several of them, in the order that makes each one easier than it would have been alone.') +
            P('You do not have to use one. They exist for the times when you know roughly what you want and not where to start.') +
            Pdim('Everything inside a program is also a normal pack. Nothing is locked away in here.')
        },
        {
          title: 'Parts and checkpoints',
          html:
            rows([
              'A program is split into <strong>Parts</strong>. Each Part is a pack, sometimes two.',
              'At the end of a Part there is a <strong>checkpoint</strong> &mdash; a short test on what that Part taught.',
              'Pass it and the next Part opens. <strong>70% is the pass mark</strong>, and the questions are drawn fresh each attempt, so a retake is a different test.',
            ]) +
            Pdim('You can retake a checkpoint as often as you like. Nothing is lost by failing one.')
        },
        {
          title: 'What passing gives you',
          html:
            P('Passing a Part&rsquo;s checkpoint does two things. It opens the next Part &mdash; and it releases that Part&rsquo;s packs into your library, permanently.') +
            P('That second one matters more than it sounds. In <strong>Conversation Foundations</strong> the later Parts are Pro packs, and a free user who works through the route earns them one checkpoint at a time.') +
            Pdim('Once a pack is released it behaves like any other: your library, your favourites, handsfree, all of it.')
        },
        {
          title: 'The ones marked Pro',
          html:
            P('A program with a <strong>Pro</strong> badge can still be opened. You can read every Part, see which packs it uses and what each checkpoint asks &mdash; you just cannot run it yet.') +
            P('That is deliberate. Deciding whether a route is worth it is hard to do from a title alone.') +
            Pdim('Next: the Parts, and where you are in them.')
        }
      ]
    },
    'training-basics': {
      title: 'How training works',
      pages: [
        {
          title: 'How training works',
          html:
            P('Every screen is the same loop. You read a situation, you decide what you would <strong>actually say</strong>, and then you check it against a suggested answer.') +
            rows([
              'Read the <strong>front side</strong> &mdash; the situation.',
              'Say your answer, out loud or in your head.',
              'Tap the card for a <strong>suggested answer</strong>.',
            ]) +
            Pdim('Answering before you look is the whole exercise. Reading both sides teaches you nothing.'),
        },
        {
          title: 'The two sides',
          html:
            ART.flip() +
            cap('Tap anywhere on the card') +
            P('The front gives you a situation. The back gives you <strong>one</strong> answer that would work &mdash; not the only one, and not one to memorise word for word.') +
            Pdim('If yours was different and it holds up, yours was right too.'),
        },
        {
          title: 'What you are practising',
          html:
            ART.deckName() +
            cap('Tap the name above the card') +
            P('The name above the card is the ' + D.one + ' you are in. Tap it and you get the explanation: what this ' + D.one + ' trains, when it works, and what makes it fail.') +
            Pdim('Worth reading once per ' + D.one + '. It is the part that makes the cards make sense.'),
        },
        {
          title: 'Swipe down: a new input',
          html:
            ART.newInput() +
            cap('Same ' + D.one + ', a different situation') +
            P('Swiping up or down keeps you on the same ' + D.one + ' and hands you another situation to try it on.') +
            Pdim('This is where the reps are. One situation proves nothing; eight starts to stick.'),
        },
        {
          title: 'Swipe right: the next ' + D.one,
          html:
            ART.nextDeck() +
            cap('A new thing to practise') +
            P('Swiping left or right moves to the next <strong>' + D.one + '</strong> &mdash; a different move, with its own name, its own explanation and its own set of inputs.') +
            Pdim('A pack is a stack of ' + D.many + '. A ' + D.one + ' is a stack of input cards.'),
        },
        {
          title: 'That is the whole thing',
          html:
            P('Three gestures. Tap to reveal, swipe down for another input, swipe right for the next ' + D.one + '.') +
            rows([
              'You can open this guide again from the <strong>gear</strong> on any training screen.',
              'There is a <strong>second guide</strong> in the same place, for the counters, the arrows, notes and the settings.',
            ]) +
            Pdim('Nothing else is required. Everything below is optional.'),
        },
      ],
    },

    'training-more': {
      title: 'The rest of the screen',
      pages: [
        {
          title: 'The numbers at the top',
          html:
            ART.counters() +
            cap('input  ·  ' + D.one) +
            P('The left pair is where you are among this ' + D.one + '&rsquo;s inputs. The right pair is where you are among the ' + D.many + ' in the pack.') +
            Pdim('The left one is hidden by default. Turn on <strong>Show input counter</strong> if you want it.'),
        },
        {
          title: 'The arrows at the bottom',
          html:
            ART.navBar() +
            cap('The same moves, as buttons') +
            P('The outer two step between ' + D.many + '. The inner two step between inputs. They do exactly what the swipes do, for when one hand is busy.') +
            Pdim('Go forward past the last ' + D.one + ' and you land in the <strong>next pack</strong> in whatever list you opened this one from.'),
        },
        {
          title: 'Notes',
          html:
            ART.notes() +
            cap('Three taps on the line under the card') +
            P('Writes a note attached to <strong>this card, this side</strong>. Use it for a thought, a better phrasing of your own, or something that did not work when you tried it.') +
            Pdim('A card that has a note shows a heavier dot on that line. Export them all from Settings on the home screen.'),
        },
        {
          title: 'Settings',
          html:
            P('The gear on a training screen holds the things worth changing:') +
            rows([
              '<strong>Shuffle</strong> &mdash; ' + D.many + ' and inputs in a different order each session.',
              '<strong>Guide text</strong> &mdash; the small framing line above the card.',
              '<strong>Hints</strong> &mdash; the line under the card. Turning it off keeps the three-tap for notes.',
              '<strong>Progress bar</strong> &mdash; how far through the pack you are.',
            ]) +
            Pdim('The same panel has a button for each of these two guides.'),
        },
      ],
    },

    'handsfree-basics': {
      title: 'Handsfree',
      pages: [
        {
          title: 'Handsfree',
          html:
            ART.handsfree() +
            cap('Screen off, headphones in') +
            P('Handsfree reads the cards to you and leaves a pause where your answer goes. It is the same material as the normal screen, out loud.') +
            Pdim('Made for walking, driving and washing up &mdash; the times you can rehearse but cannot look.'),
        },
        {
          title: 'How a round runs',
          html:
            rows([
              'It reads the ' + D.one + '&rsquo;s <strong>explanation</strong>, once.',
              'It reads a <strong>situation</strong>, then goes quiet.',
              'You answer <strong>out loud</strong>, into the pause.',
              'It reads the <strong>suggested answer</strong>, then moves on.',
            ]) +
            P('It keeps going by itself until you stop it. Say your answer properly &mdash; out loud, in a full sentence. Thinking it is not the same exercise.'),
        },
        {
          title: 'Better voices',
          html:
            ART.voices() +
            cap('iPhone') +
            P('The default voice is flat and it makes an hour of this hard work. iOS has much better ones, free, but they have to be downloaded first:') +
            rows([
              'iPhone <strong>Settings &#8250; Accessibility</strong>.',
              '<strong>Spoken Content &#8250; Voices &#8250; English</strong>.',
              'Download a <strong>Premium</strong> or <strong>Enhanced</strong> voice.',
              'Come back here and pick it under <strong>Voice</strong> in the gear.',
            ]) +
            Pdim('Worth the four minutes. It is the single biggest difference in handsfree.'),
        },
        {
          title: 'That is the whole thing',
          html:
            P('Start it, put the phone away, and answer out loud.') +
            rows([
              'This guide is behind the <strong>gear</strong> on any handsfree screen.',
              'A <strong>second guide</strong> in the same place covers the pace, the pauses and what gets read.',
            ]) +
            Pdim('The screen can sleep. It keeps talking.'),
        },
      ],
    },

    'handsfree-more': {
      title: 'Handsfree settings',
      pages: [
        {
          title: 'What gets read',
          html:
            rows([
              '<strong>Strategy explanation</strong> &mdash; the full description at the start of each ' + D.one + '. Turn it off once you know them.',
              '<strong>Card back</strong> &mdash; the suggested answer. Off means you answer and never hear a model.',
              '<strong>Guide text</strong> &mdash; the short framing line.',
            ]) +
            Pdim('Explanation off and card back on is the usual setting after the first few rounds.'),
        },
        {
          title: 'Time to think',
          html:
            rows([
              '<strong>Thinking pause</strong> &mdash; the silence after a situation. This is your answer. Make it long enough to say a real sentence.',
              '<strong>General pause</strong> &mdash; the gaps everywhere else.',
              '<strong>Speech rate</strong> &mdash; how fast it talks.',
            ]) +
            P('If you find yourself rushing, the thinking pause is too short. It is meant to feel slightly too long.'),
        },
        {
          title: 'How much, and in what order',
          html:
            rows([
              '<strong>Max inputs per ' + D.one + '</strong> &mdash; caps how many situations you get before it moves on.',
              '<strong>Loop current ' + D.one + '</strong> &mdash; stay on one until you stop it.',
              '<strong>Shuffle</strong> &mdash; a different order each session.',
              '<strong>Voice</strong> &mdash; see the first guide for how to add better ones.',
            ]) +
            Pdim('Looping one ' + D.one + ' with a long thinking pause is the closest thing to real rehearsal in the app.'),
        },
      ],
    },
  };

  // ── Renderer ─────────────────────────────────────────────────────────────
  // Same shape as the pack intro so the two feel like one mechanism.
  // v1.27.77 - which guide is on screen right now, or null. Without it a
  // second call could draw a new guide over a live one, which is exactly what
  // the duplicated Packs-tab handler used to do.
  let openGuide = null;

  function render(id, onDone, onSeen) {
    const g = GUIDES[id];
    if (!g) { if (onDone) onDone(); return false; }
    if (openGuide) return false;
    openGuide = id;
    screen.innerHTML =
      '<div class="ob-top"><div class="ob-dots" id="gdDots"></div>' +
      '<button class="ob-skip" id="gdSkipBtn">Skip</button></div>' +
      g.pages.map((p, i) =>
        '<div class="ob-step" style="display:' + (i === 0 ? 'flex' : 'none') + ';">' +
        '<h2 class="ob-title">' + p.title + '</h2>' + p.html + '</div>').join('') +
      '<div class="ob-bottom"><button class="ob-next" id="gdNextBtn">Continue</button></div>';

    const steps = Array.from(screen.querySelectorAll('.ob-step'));
    const dotsEl = screen.querySelector('#gdDots');
    const nextBtn = screen.querySelector('#gdNextBtn');
    dotsEl.innerHTML = steps.map((_, i) =>
      '<span class="ob-dot' + (i === 0 ? ' ob-dot--active' : '') + '"></span>').join('');
    const dots = Array.from(dotsEl.children);
    let step = 0;

    function showStep(i) {
      steps.forEach((st, j) => { st.style.display = j === i ? 'flex' : 'none'; });
      dots.forEach((d, j) => d.classList.toggle('ob-dot--active', j === i));
      step = i;
      nextBtn.textContent = (i === steps.length - 1) ? 'Got it' : 'Continue';
      screen.scrollTop = 0;
    }
    // v1.27.59 \u2014 onDone lets one guide hand over to whatever should follow
    // it. The mode guide uses it to start the pack intro, so a first-time user
    // sees the two in sequence instead of on top of each other.
    let done = false;
    function finish() {
      if (done) return;
      done = true;
      // v1.27.60 \u2014 when something follows, hand over WITHOUT the fade.
      // The fade takes 450 ms with the screen hidden at the end of it, and in
      // that gap the mode screen underneath was revealed and then covered
      // again: a flash of a screen the user had not asked for yet. Handing
      // over while the overlay is still up means the pack intro simply
      // replaces the guide, and the mode screen is not seen until both are
      // finished with.
      openGuide = null;
      // v1.27.77 - the flag is written HERE, not when the guide opens. Marking
      // it seen up front meant a guide that was drawn and then covered counted
      // as read. Worst case now is that it appears once more.
      if (onSeen) onSeen();
      if (onDone) {
        screen.innerHTML = '';
        onDone();
        // v1.27.77 - the handover contract is that the callback draws into
        // this same screen. If it did not - the pack has no intro of its own,
        // or the callback opened a different screen - this element would
        // otherwise stay display:flex and empty, a blank sheet over the whole
        // app with nothing to tap. Open a pack with no intro as a first-run
        // user and that is precisely what happened.
        if (!screen.innerHTML) {
          screen.style.display = 'none';
          screen.classList.remove('ob-leaving');
        }
        return;
      }
      screen.classList.add('ob-leaving');
      setTimeout(() => {
        screen.style.display = 'none';
        screen.classList.remove('ob-leaving');
        screen.innerHTML = '';
      }, 450);
    }
    nextBtn.addEventListener('click', () => {
      if (step < steps.length - 1) showStep(step + 1);
      else finish();
    });
    screen.querySelector('#gdSkipBtn').addEventListener('click', finish);

    screen.classList.remove('ob-leaving');
    screen.style.display = 'flex';
    showStep(0);
    return true;
  }

  // Show once, ever. The flag is per guide so adding a fifth one later does
  // not re-show the first four.
  //
  // v1.27.09 — RENDERS IMMEDIATELY and returns whether it did. It used to wait
  // 520 ms for the training screen to finish sliding in, which meant you saw
  // the screen swipe up and then get covered a moment later: a flicker, and it
  // read as two separate things happening. Now the guide is simply there, and
  // the training screen is revealed underneath when you close it. The caller
  // uses the return value to suppress the slide-in it would otherwise start.
  function maybeShow(id, onDone) {
    // A guide is already up. Return true so the caller does NOT run its
    // fallback - that fallback is what used to draw over the live guide.
    if (openGuide) return true;
    const key = 'ds_guide_' + id;
    if (localStorage.getItem(key) === 'seen') return false;
    return render(id, onDone, () => {
      try { localStorage.setItem(key, 'seen'); } catch (e) {}
    });
  }

  window.showGuide = render;
  window.maybeShowGuide = maybeShow;

  // Replay fran kugghjulet pa hemskarmen. De fyra aldre guiderna nas inifran
  // ett traningslage; den har handlar om valet MELLAN lagena, sa den hor hemma
  // ett steg tidigare.
  // v1.27.77 - two rows now, same behaviour: close settings, then draw.
  [['modeGuideBtn', 'modes-overview'], ['programGuideBtn', 'programs-overview']]
    .forEach(([btnId, guideId]) => {
      const b = document.getElementById(btnId);
      if (!b) return;
      b.addEventListener('click', e => {
        e.stopPropagation();
        const panel = b.closest('.settings-screen') || b.closest('.settings-panel');
        if (panel && panel.classList) panel.classList.remove('open');
        const back = document.getElementById('settingsBackBtn');
        if (back) back.click();
        setTimeout(() => render(guideId), 60);
      });
    });
  window.DECK_TERM = D;

  // ── The rows inside every training settings panel ────────────────────────
  // Injected rather than written into index.html seven times: the standard
  // panel plus six handsfree ones, and a new mode would need an eighth.
  const PANELS = [
    { overlay: 'settingsOverlay',       basics: 'training-basics',  more: 'training-more'  },
    { overlay: 'hfSettingsOverlay',      basics: 'handsfree-basics', more: 'handsfree-more' },
    { overlay: 'hfMemSettingsOverlay',   basics: 'handsfree-basics', more: 'handsfree-more' },
    { overlay: 'hfChallSettingsOverlay', basics: 'handsfree-basics', more: 'handsfree-more' },
    { overlay: 'hfFlowSettingsOverlay',  basics: 'handsfree-basics', more: 'handsfree-more' },
    { overlay: 'hfMindSettingsOverlay',  basics: 'handsfree-basics', more: 'handsfree-more' },
    { overlay: 'hfCollSettingsOverlay',  basics: 'handsfree-basics', more: 'handsfree-more' },
  ];

  PANELS.forEach(cfg => {
    const overlay = document.getElementById(cfg.overlay);
    if (!overlay) return;
    const panel = overlay.querySelector('.settings-panel');
    if (!panel || panel.querySelector('.gd-settings-head')) return;

    const head = document.createElement('div');
    head.className = 'gd-settings-head';
    head.textContent = 'Guides';

    const mk = (text, guideId) => {
      const row = document.createElement('div');
      row.className = 'settings-row';
      const lab = document.createElement('label');
      lab.textContent = text;
      const btn = document.createElement('button');
      btn.className = 'gd-btn';
      btn.textContent = 'View';
      btn.addEventListener('click', e => {
        e.stopPropagation();
        overlay.classList.remove('open');
        render(guideId);
      });
      row.appendChild(lab);
      row.appendChild(btn);
      return row;
    };

    // sit above the version line and the Done button
    const anchor = panel.querySelector('.settings-version') || panel.querySelector('.settings-close');
    const add = el => anchor ? panel.insertBefore(el, anchor) : panel.appendChild(el);
    add(head);
    add(mk(GUIDES[cfg.basics].title, cfg.basics));
    add(mk(GUIDES[cfg.more].title, cfg.more));
  });
})();
