// tagsData.js — Search tags per pack
// Tags are used to surface packs when searching for related concepts,
// emotions, situations or synonyms not covered by strategy names.
// Add or edit tags here, or via Developer Tools in the app.

const packTags = {
  assertive: [
    'boundaries', 'criticism', 'confidence', 'saying no', 'self-esteem',
    'conflict', 'pressure', 'confrontation', 'defending yourself',
    'calm', 'disagreement', 'pushback', 'fogging', 'broken record',
    'negative inquiry', 'negative assertion', 'assertiveness'
  ],
  humour: [
    'funny', 'jokes', 'comedy', 'wit', 'banter', 'laughter',
    'playful', 'lighthearted', 'timing', 'punchline', 'amusing'
  ],
  teasing: [
    'playful teasing', 'banter', 'flirting', 'rapport', 'fun',
    'ribbing', 'joking around', 'not taking seriously'
  ],
  criticism: [
    'feedback', 'critique', 'giving feedback', 'difficult conversations',
    'correction', 'negative feedback', 'constructive criticism'
  ],
  conversationaldepth: [
    'deep talk', 'meaningful conversation', 'connection', 'vulnerability',
    'intimacy', 'opening up', 'real conversations', 'depth'
  ],
  compliments: [
    'appreciation', 'praise', 'gratitude', 'positive feedback',
    'acknowledging others', 'encouragement', 'kind words'
  ],
  selfhumour: [
    'self-deprecating', 'laughing at yourself', 'not taking yourself seriously',
    'humility', 'owning mistakes', 'embarrassment', 'self-awareness'
  ],
  startingconnecting: [
    'small talk', 'introductions', 'meeting people', 'networking',
    'starting conversations', 'icebreakers', 'social anxiety', 'awkward'
  ],
  listeningresponding: [
    'active listening', 'empathy', 'understanding', 'reflecting',
    'responding well', 'being present', 'follow-up questions'
  ],
  influenceframing: [
    'persuasion', 'reframing', 'influence', 'negotiation', 'leadership',
    'presenting ideas', 'changing minds', 'framing', 'rhetoric'
  ],
  storytelling: [
    'stories', 'anecdotes', 'narrative', 'engaging', 'hook',
    'punchline', 'structure', 'timing', 'sharing', 'performing'
  ],
  humourpractise: [
    'humour', 'self humour', 'wit', 'social confidence', 'lightness',
    'awkward moments', 'laughing at yourself'
  ],
  conversational: [],
};

// ─── TOPICS ──────────────────────────────────────────────────────────
// Data source for the Library "Topics" tab (rendered by renderTopics in
// app-core.js). Each topic groups one or more packs by theme; a pack may
// appear under several topics (recommendation: max 2). `packs` holds pack
// keys only — each card's name/meta/label is mirrored from its canonical
// card in #libTabPacks, so the Packs and Topics tabs can never drift.
// An empty `packs: []` renders as a "No packs yet" placeholder group.
// Order here = display order in the tab. Edit via the Pack Editor's topic
// field (export regenerates this array) or by hand.
const TOPICS = [
  { id: 'assertiveness',      title: 'Assertiveness',                             packs: ['assertive'] },
  { id: 'humour',             title: 'Humour & Playfulness',                      packs: ['humour', 'teasing', 'selfhumour', 'humourpractise'] },
  { id: 'criticism',          title: 'Criticism & Correction',                    packs: ['criticism'] },
  { id: 'conversation',       title: 'Conversation & Flow',                       packs: ['conversational', 'conversationaldepth'] },
  { id: 'compliments',        title: 'Compliments & Validation',                  packs: ['compliments'] },
  { id: 'storytelling',       title: 'Storytelling & Explanation',                packs: ['storytelling'] },
  { id: 'questions',          title: 'Questions & Conversation Starters',         packs: ['startingconnecting'] },
  { id: 'transitions',        title: 'Transitions & Flow',                        packs: [] },
  { id: 'emotions',           title: 'Emotions & Emotional Regulation',           packs: [] },
  { id: 'opinions',           title: 'Opinions & Argumentation',                  packs: ['influenceframing'] },
  { id: 'boundaries',         title: 'Boundaries & Refusal',                      packs: [] },
  { id: 'rapport',            title: 'Rapport & Connection',                      packs: ['listeningresponding'] },
  { id: 'bodyvoice',          title: 'Body Language & Voice',                     packs: [] },
  { id: 'giving',             title: 'Giving & Receiving',                        packs: [] },
  { id: 'observation',        title: 'Observation & Description',                 packs: [] },
  { id: 'dynamics',           title: 'Conversation Dynamics',                     packs: [] },
  { id: 'selfpresentation',   title: 'Self-Presentation',                         packs: [] },
  { id: 'flirt',              title: 'Flirting',                                  packs: [] },
  { id: 'emotionalboundaries',title: 'Emotional Refusal',                         packs: [] },
  { id: 'leadership',         title: 'Leadership & Relationship Dynamics',        packs: [] },
  { id: 'emotionregulation',  title: 'Emotional Regulation in Relationships',     packs: [] },
  { id: 'relationshipcomm',   title: 'Communication in Relationships',            packs: [] },
];
