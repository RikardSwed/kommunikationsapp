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
    masculine1: { label: 'The Masculine Blueprint – Part 1', minLevel: 'complete' },
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
    assertivecomm1: { label: 'Assertive Communication 1 — Coping with Criticism', minLevel: 'freemium' },
    assertivecomm2: { label: 'Assertive Communication 2 — Social & Equal Connections', minLevel: 'extended' },
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
      if (!getExtendedOwned().includes(progId)) return 'hidden';
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
  };
  const GRANT_KEY  = 'ds_beta_grant';    // { level, until, code }
  const PACKS_KEY  = 'ds_pack_grants';   // { packKey: { until, code } }

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
    if (!out.length) return null;
    // Backwards compatible: callers that expect the old single object still
    // get the level grant's fields, with the full list on `.all`.
    const level = out.find(x => x.kind === 'level');
    return Object.assign({}, level || out[0], { all: out });
  }

  // v1.26.90 — hands a device back to freemium immediately. Without it the
  // only way off a redeemed code is to wait out the 60 days or clear site
  // data by hand, which also wipes progress and favourites.
  function clearGrant() {
    const had = readGrant() || Object.keys(readPackGrants()).length;
    localStorage.removeItem(GRANT_KEY);
    localStorage.removeItem(PACKS_KEY);
    if (had) {
      localStorage.setItem(LEVEL_KEY, 'freemium');
      localStorage.setItem('dev_level_forced', 'true');
      applyAccessLevel();
    }
    return !!had;
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

    const until = Date.now() + def.days * 86400000;

    if (def.kind === 'pack') {
      if (def.requiresPro) {
        const lvl = getLevel();
        if (lvl !== 'pro' && lvl !== 'complete') {
          return { ok: false, message: 'That code needs Pro.' };
        }
      }
      const g = readPackGrants();
      (def.packs || []).forEach(k => { g[k] = { until: until, code: code }; });
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
    const cpPassed = (progId, cpId) => !!(progress[progId] && progress[progId][cpId]);
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
        if (!getExtendedOwned().includes(packKey)) standalone = 'hidden';
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
    // Re-bind clicks on accessible cards in Library Packs tab
    document.querySelectorAll('#libTabPacks .collection-card[data-key]').forEach(card => {
      if (!canAccess(card.dataset.key)) return;
      card.onclick = () => showModeScreen(card.dataset.key, card.dataset.label);
      let cSY = 0, cMv = false;
      card.ontouchstart = e => { cSY = e.touches[0].clientY; cMv = false; };
      card.ontouchmove  = e => { if (Math.abs(e.touches[0].clientY - cSY) > 8) cMv = true; };
      card.ontouchend   = () => { if (!cMv) showModeScreen(card.dataset.key, card.dataset.label); };
    });
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
    Object.entries(MODE_CONFIG).forEach(([id, cfg]) => {
      const el = document.getElementById(id);
      if (!el) return;
      const accessible = levelIndex(curLevel) >= levelIndex(cfg.minLevel)
                      || freeHere.indexOf(id) > -1;
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
    const line = x => (x.kind === 'pack' ? nameOf(x.pack)
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

  (function bindClearGrant() {
    const btn = document.getElementById('clearGrantBtn');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const had = clearGrant();
      loadDevLevelUI();
      renderGrantStatus(had ? 'Beta code cleared \u2014 back to freemium.' : 'No beta code to clear.');
      setTimeout(() => renderGrantStatus(), 2500);
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

  window.accessLevel = { getLevel, canAccess, badgeLabel, applyModeLocks, updateNavUpgradeBtn, packVisibility, programVisibility, sectionVisibility, programRoutePending, applyAccessLevel, redeemCode, grantStatus, clearGrant, packGranted, codes: ACCESS_CODES };
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

  const isExtendedBundleOwned = (bundleId) =>
    level === 'complete' || extOwned.includes(`${packKey}::${bundleId}`);

  const canUseTier = (tier, bundleId) => {
    if (tier === 'free') return true;
    if (tier === 'pro' || tier === 'pro-opt') return level === 'pro' || level === 'complete';
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
      (level === 'pro' && extOwned.includes(`${packKey}::${bundleId}`));
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
  if (window.showToast) showToast('Redeemed codes cleared.');
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
  {
    version: 'v1.27.50', date: 'August 2026', title: 'Assertive Communication, in two parts',
    items: [
      '<strong>Assertive Communication 1 — Coping with Criticism</strong>, free. The four moves Manuel J. Smith taught for the moment somebody is criticising, pressuring or guilt-tripping you: <em>Broken Record</em>, <em>Fogging</em>, <em>Negative Assertion</em> and <em>Negative Inquiry</em>.',
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
    const entries = mode === 'dev' ? WHATS_NEW : WHATS_NEW.filter(e => e.audience !== 'dev');
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
    boundaries:   ['assertive', 'sayingno', 'makingrequests', 'brokenrecord'],
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
    firststrategies: {
      pages: [
        {
          title: 'First Strategies',
          html:
            // v1.26.79: the intro text above the list was cut to one short
            // paragraph — the six rows plus a long lead-in pushed the page into
            // scrolling, which made the first pack look like a lot of work.
            '<p class="ob-text">Deckstack is a rehearsal room. You practise things to say ' +
            'here, so they are already yours when a real conversation arrives.</p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>Opening Statement</strong> &mdash; a remark, not a question.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Follow the Thread</strong> &mdash; use what they just said.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">3</span><p><strong>Say It Back</strong> &mdash; show you understood.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">4</span><p><strong>Ask Plainly</strong> &mdash; say what you want, in one sentence.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">5</span><p><strong>A Friendly No</strong> &mdash; decline warmly and clearly.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">6</span><p><strong>Answer With a Hook</strong> &mdash; leave them somewhere to go.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">Six strategies that make one small conversation. ' +
            'The next pages explain each one.</p>'
        },
        {
          title: 'Opening Statement',
          html:
            '<p class="ob-text">Say something instead of asking something. A question hands ' +
            'the other person a job; a statement hands them material.</p>' +
            '<p class="ob-text">It also lets them out politely. An unanswered question is ' +
            'awkward &mdash; an unanswered remark is not.</p>' +
            '<p class="ob-text ob-text--dim">Standing in a long queue<br>&rarr; &ldquo;This queue has not moved in five minutes.&rdquo;</p>'
        },
        {
          title: 'Follow the Thread',
          html:
            '<p class="ob-text">Take one word out of what they just said and go into it. ' +
            'People put more into a sentence than they expect anyone to notice.</p>' +
            '<p class="ob-text">It solves the real problem in conversation, which is not ' +
            'shyness but having nothing to say next. You do not need something new.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;We drove back from Malm\u00f6 on Sunday.&rdquo;<br>&rarr; &ldquo;Malm\u00f6 &mdash; what took you down there?&rdquo;</p>'
        },
        {
          title: 'Say It Back',
          html:
            '<p class="ob-text">Repeat what you understood before you answer. It proves you ' +
            'were listening, and it buys you a few seconds to think.</p>' +
            '<p class="ob-text">Say it in your own words. Repeating their exact sentence ' +
            'sounds like a technique; rewording it proves you understood.</p>' +
            '<p class="ob-text ob-text--dim">A tangled complaint about work<br>&rarr; &ldquo;So the deadline moved and nobody told you.&rdquo;</p>'
        },
        {
          title: 'Ask Plainly',
          html:
            '<p class="ob-text">Say what you want, in one sentence, without building up to ' +
            'it. Then stop talking.</p>' +
            '<p class="ob-text">The long run-up is what makes a request awkward, not the ' +
            'request. And every reason you add afterwards is something to argue with.</p>' +
            '<p class="ob-text ob-text--dim">You need Thursday covered<br>&rarr; &ldquo;Could you take the Thursday meeting? I\u2019m away.&rdquo;</p>'
        },
        {
          title: 'A Friendly No',
          html:
            '<p class="ob-text">Say no clearly, warmly, and without a pile of reasons.</p>' +
            '<p class="ob-text">Soften the delivery, never the answer. &ldquo;Maybe&rdquo; feels ' +
            'kinder and costs the other person a week of waiting.</p>' +
            '<p class="ob-text ob-text--dim">Asked to take on more this month<br>&rarr; &ldquo;I can\u2019t take anything else on, sorry.&rdquo;</p>'
        },
        {
          title: 'Answer With a Hook',
          html:
            '<p class="ob-text">When someone asks about you, answer with something they can ' +
            'ask about. One extra detail is the whole technique.</p>' +
            '<p class="ob-text">A closed answer leaves them with nothing, so they have to ' +
            'invent a new question. Two of those and most people give up.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;How was your week?&rdquo;<br>&rarr; &ldquo;Good &mdash; long, though. I\u2019ve spent it arguing with a printer.&rdquo;</p>'
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
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>Ask Follow-up Questions</strong> &mdash; ask what only a listener could ask.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Loop Back or Rephrase</strong> &mdash; say their point back in your own words.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">3</span><p><strong>Relate Through Sharing</strong> &mdash; offer something of your own.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">The next pages explain each one, and how to choose.</p>'
        },
        {
          title: 'Ask Follow-up Questions',
          html:
            '<p class="ob-text">Ask for more &mdash; a question that could only come from ' +
            'someone who was actually listening.</p>' +
            '<p class="ob-text">The proof is in the detail you pick up. A general question ' +
            'could have been asked by anyone; a specific one could not.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;It\u2019s been a lot since the move.&rdquo;<br>&rarr; &ldquo;A lot how &mdash; the flat, or everything at once?&rdquo;</p>'
        },
        {
          title: 'Loop Back or Rephrase',
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
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Answer What They Are Really Asking</strong> &mdash; the version about you, not the job title.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">3</span><p><strong>Say the Small True Thing</strong> &mdash; true and specific beats impressive.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">&ldquo;How was your week?&rdquo;<br>&rarr; &ldquo;Good &mdash; long, though. I spent most of it arguing with a printer.&rdquo;</p>'
        },
        {
          title: 'Deciding How Much',
          html:
            '<p class="ob-text">Two strategies for size rather than content. Depth is a ' +
            'staircase: one step below what they offered, taken after they take theirs.</p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>Match What They Gave</strong> &mdash; a corridor question wants one line; a real one wants more.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Keep Something Back</strong> &mdash; a partial answer, warmly given, for what you would rather skip.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">&ldquo;Weren\u2019t you with someone for years?&rdquo;<br>&rarr; &ldquo;I was. Short version: it ended badly, and I\u2019m not doing the long one tonight.&rdquo;</p>'
        },
        {
          title: 'Name What You Are Into',
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
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>Linking</strong> &mdash; catch one word and use it as the bridge.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Finding Common Ground</strong> &mdash; &ldquo;that&rsquo;s like when I&hellip;&rdquo;, and the new direction opens itself.</p></div>' +
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
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Respectful Exit</strong> &mdash; for a topic that has been covered, or is going round again.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">&ldquo;Sounds like an amazing trip &mdash; I think we&rsquo;ve covered it well. So what else is new?&rdquo;</p>'
        },
        {
          title: 'No Bridge At All',
          html:
            '<p class="ob-text"><strong>Random or Light Switch</strong> &mdash; change the ' +
            'subject openly, and say that you are doing it.</p>' +
            '<p class="ob-text">Naming the switch is what makes it work. An unannounced jump ' +
            'is jarring; an announced one is just a bit of lightness, and everyone is usually ' +
            'relieved.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;Okay, before we get too philosophical &mdash; seen any good films lately?&rdquo;</p>'
        },
        {
          title: 'When It Gets Uncomfortable',
          html:
            '<p class="ob-text"><strong>Steering Away from Sensitive Topics</strong> &mdash; ' +
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
  function render(id) {
    const g = GUIDES[id];
    if (!g) return;
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
    screen.querySelector('#gdSkipBtn').addEventListener('click', finish);

    screen.classList.remove('ob-leaving');
    screen.style.display = 'flex';
    showStep(0);
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
  function maybeShow(id) {
    const key = 'ds_guide_' + id;
    if (localStorage.getItem(key) === 'seen') return false;
    try { localStorage.setItem(key, 'seen'); } catch (e) {}
    render(id);
    return true;
  }

  window.showGuide = render;
  window.maybeShowGuide = maybeShow;
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
