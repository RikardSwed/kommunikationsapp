// speech-text.js — the ONE place that decides what a studio voice says (2026-10-26)
//
// Studio voices (see "Plan — ljudfiler per pack (förslag 2)" in the vault) are
// audio files recorded in advance, one per spoken piece of text. A file is
// named after a fingerprint of the voice and the text, so the app can find the
// right file for a line without any list to keep in step. That only works if
// the generator script (tools/voice-*.js) and the app turn a card's text into
// EXACTLY the same words, down to the last space. Both therefore use this file.
//
// NOT LOADED BY THE APP YET. index.html does not include it, so the app is
// unchanged. It is wired in behind the "Studio voices (beta)" switch in
// developer settings when the playback side is built.
//
// What it does to a text:
//   • drops emoji (the 📍 on scenario cards) and markdown emphasis (**…**)
//   • drops list bullets (•, -) at the start of a line; numbered lines stay,
//     because "1. Opening Statement" reads well aloud
//   • turns each line into a sentence (adds a full stop where a line has no
//     end punctuation) and joins the lines, so a line break becomes a pause
//   • keeps a closing strategy label — '"…" [Opening Statement]' is read as
//     '"…" Opening Statement.' (Rikard 2026-10-26: read it, as today)
//   • keeps any other bracketed word as a plain word ("[Name]" → "Name")
//
// CHANGING THIS FILE CHANGES EVERY FINGERPRINT. Files already recorded keep
// working only for texts that come out the same, so treat a change here like a
// change of voice: run the generator again afterwards.

(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.DSSpeechText = api;
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const VERSION = 1;   // part of every fingerprint; bump when the rules change

  const END_PUNCT = /[.!?:;…"'”’)\]]$/;

  function speechText(input) {
    let t = String(input == null ? '' : input);
    t = t.replace(/\r\n?/g, '\n');
    // emoji and the invisible characters that ride along with them
    t = t.replace(/\p{Extended_Pictographic}/gu, '').replace(/[︎️‍]/g, '');
    // markdown emphasis: **bold**, __bold__, *italic*, _italic_
    t = t.replace(/\*\*(.+?)\*\*/g, '$1').replace(/__(.+?)__/g, '$1');
    t = t.replace(/(^|[\s(])\*(\S(?:.*?\S)?)\*(?=[\s).,;:!?]|$)/g, '$1$2');
    t = t.replace(/(^|[\s(])_(\S(?:.*?\S)?)_(?=[\s).,;:!?]|$)/g, '$1$2');

    const lines = t.split('\n')
      .map(l => l.trim())
      .map(l => l.replace(/^[•·▪◦‣\-–]\s+/, ''))      // bullets, not numbers
      .filter(Boolean)
      .map(l => {
        // a closing label: '"…" [Opening Statement]' → '"…" Opening Statement.'
        l = l.replace(/\s*\[([^\]]+)\]\s*$/, (m, name) => ' ' + name.trim() + (END_PUNCT.test(name.trim()) ? '' : '.'));
        // any other bracket: keep the word, lose the brackets
        l = l.replace(/\[([^\]]+)\]/g, '$1');
        l = l.replace(/\s+/g, ' ').trim();
        return END_PUNCT.test(l) ? l : l + '.';
      });

    return lines.join(' ').replace(/\s+/g, ' ').trim();
  }

  // A guide is spoken as its own short piece before the card ("Start with a
  // statement when..."). mode-engine.js glues it to the card with
  // dsSpokenGuide(); this is the same rule, kept here so the generator splits
  // a step exactly where the app does.
  function spokenGuide(g) {
    const t = String(g == null ? '' : g).trim();
    if (!t) return '';
    if (/(\.\.\.|…)$/.test(t)) return t + ' ';
    if (/[.!?:;,—–-]$/.test(t)) return t + ' ';
    return t + '. ';
  }

  // Google's limit is 5,000 bytes per request. Long descriptions are split at
  // sentence ends into pieces well under that, and played one after another.
  const MAX_BYTES = 3500;
  function byteLen(s) {
    return typeof TextEncoder !== 'undefined' ? new TextEncoder().encode(s).length : Buffer.byteLength(s, 'utf8');
  }
  function splitLong(text) {
    if (byteLen(text) <= MAX_BYTES) return [text];
    const sentences = text.match(/[^.!?…]+(?:[.!?…]+["'”’)]?|$)\s*/g) || [text];
    const out = [];
    let cur = '';
    sentences.forEach(s => {
      if (cur && byteLen(cur + s) > MAX_BYTES) { out.push(cur.trim()); cur = ''; }
      cur += s;
    });
    if (cur.trim()) out.push(cur.trim());
    return out;
  }

  // The pieces one spoken step is made of, already cleaned. `guide` is the
  // lead-in (may be empty); `body` is the rest of the line.
  function pieces(guide, body) {
    const out = [];
    const g = speechText(guide);
    if (g) out.push(g);
    splitLong(speechText(body)).forEach(p => { if (p) out.push(p); });
    return out;
  }

  // Fingerprint of one recorded piece: voice + rules version + text.
  function fingerprintSource(voice, text) {
    return 'v' + VERSION + '\n' + voice + '\n' + text;
  }
  function hexOf(buf) {
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
  }
  // Node (the generator): synchronous.
  function clipIdSync(voice, text) {
    const crypto = require('crypto');
    return crypto.createHash('sha256').update(fingerprintSource(voice, text), 'utf8').digest('hex').slice(0, 24);
  }
  // The app: crypto.subtle is asynchronous.
  async function clipId(voice, text) {
    if (typeof crypto !== 'undefined' && crypto.subtle) {
      const data = new TextEncoder().encode(fingerprintSource(voice, text));
      return hexOf(await crypto.subtle.digest('SHA-256', data)).slice(0, 24);
    }
    return clipIdSync(voice, text);
  }

  return { VERSION, speechText, spokenGuide, splitLong, pieces, clipId, clipIdSync, MAX_BYTES };
});
