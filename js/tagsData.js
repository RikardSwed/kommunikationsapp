// tagsData.js — Search tags per pack
// Tags are used to surface packs when searching for related concepts,
// emotions, situations or synonyms not covered by strategy names.
// Add or edit tags here, or via Developer Tools in the app.

const packTags = {
  thehappyno: [
    'saying no', 'declining requests', 'warmth', 'boundaries', 'guilt free'
  ],
  theregretfulno: [
    'saying no', 'regret', 'sincerity', 'declining invitations', 'boundaries'
  ],
  speakingupingroups: [
    'meetings', 'groups', 'taking the floor', 'interruptions',
    'being talked over', 'speaking up'
  ],
  playfulrefusals: [
    'saying no', 'refusing', 'humour', 'playful',
    'declining requests', 'boundaries'
  ],
  transitions: [
    'transitions', 'changing topic', 'conversation flow', 'small talk',
    'steering the conversation', 'awkward silence', 'changing subject', 'handing over'
  ],
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
  setupstatement: [
    'conversation', 'starting', 'connecting'
  ],
  firststrategies: [
    'getting started', 'first conversations', 'beginner', 'everyday talk', 'the basic moves'
  ],
  startingconversations1: [
    'starting conversations', 'openers', 'small talk', 'strangers', 'first words'
  ],
  showunderstanding: [
    'listening', 'understanding', 'empathy', 'conversation'
  ],
  startingconversations4: [
    'starting conversations', 'openers', 'humour', 'saying what you feel', 'approaching people'
  ],
  apologizing2: [
    'apologizing', 'repair', 'when someone is hurt', 'making amends', 'difficult conversations'
  ],
  startingconversations2: [
    'starting conversations', 'openers', 'common ground', 'asking for help', 'small talk'
  ],
  startingconversations3: [
    'starting conversations', 'openers', 'compliments', 'curiosity about people', 'small talk'
  ],
  endingconversations: [
    'ending conversations', 'leaving', 'goodbyes', 'closing a conversation', 'exits'
  ],
  changingtopics: [
    'conversation', 'transitions', 'managing'
  ],
  reactingtounexpectedstatements: [
    'caught off guard', 'not knowing what to say', 'buying time', 'surprising remarks', 'thinking before answering'
  ],
  exploringatopic: [
    'conversation', 'group conversation', 'topics'
  ],
  deepquestions: [
    'conversation', 'curiosity', 'connection'
  ],
  howtointerrupt: [
    'interrupting', 'groups', 'speaking up', 'conversation'
  ],
  handleinterruptions: [
    'conversation', 'interruptions', 'assertiveness'
  ],
  validation: [
    'validation', 'listening', 'empathy', 'support'
  ],
  supportingconversations: [
    'supporting someone', 'listening', 'what they need', 'comforting', 'being there'
  ],
  talkingaboutyourself: [
    'answering questions', 'small talk', 'self-disclosure', 'opening up', 'what do you do', 'being asked about yourself'
  ],
  describethings: [
    'describing', 'detail', 'vocabulary', 'painting a picture', 'being specific'
  ],
  explainthings: [
    'explaining', 'clarity', 'instructions', 'describing', 'making yourself understood'
  ],
  givingexamples: [
    'examples', 'being concrete', 'making a point land', 'evidence', 'illustrating'
  ],
  storytellingwiththesixws: [
    'storytelling', 'structure', 'clarity', 'conversation'
  ],
  storiesinconversation: [
    'telling a story', 'anecdotes', 'taking the floor', 'group conversation', 'when a story lands', 'holding attention'
  ],
  praiseandencouragement: [
    'praise', 'encouragement', 'appreciation', 'positive feedback', 'building confidence'
  ],
  givingcriticism: [
    'giving criticism', 'feedback', 'correcting someone', 'constructive criticism', 'difficult conversations'
  ],
  receivingfeedbackandcriticism: [
    'feedback', 'criticism', 'composure'
  ],
  apologizing1: [
    'apologizing', 'saying sorry', 'owning a mistake', 'everyday apologies', 'putting it right'
  ],
  agreeing: [
    'agreeing', 'opinions', 'support', 'conversation'
  ],
  disagreeing: [
    'disagreeing', 'different opinion', 'pushing back', 'discussion', 'standing your ground'
  ],
  persuasionandinfluence1: [
    'persuasion', 'influence', 'making a case', 'changing minds', 'getting agreement'
  ],
  persuasionandinfluence2: [
    'persuasion', 'influence', 'lowering resistance', 'getting agreement', 'guiding not pushing'
  ],
  negotiationandcompromise: [
    'negotiation', 'compromise', 'finding a solution', 'meeting halfway', 'agreeing on a plan'
  ],
  brokenrecord: [
    'broken record', 'standing your ground', 'pressure', 'holding a position', 'assertiveness'
  ],
  respondingtopassiveaggression: [
    'passive aggression', 'sarcasm', 'digs', 'indirect criticism', 'staying calm'
  ],
  makingrequests: [
    'asking for things', 'favours', 'asking for help', 'being direct', 'hinting', 'requests at work'
  ],
  sayingno: [
    'saying no', 'declining', 'boundaries', 'turning down requests', 'refusing politely'
  ],
  emotionlabellingandregulation: [
    'emotions', 'self-awareness', 'composure', 'listening'
  ],
  conflictemotions: [
    'conflict', 'expressing feelings', 'needs', 'difficult conversations', 'saying what bothers you'
  ],
  rolebasedhumour: [
    'humour', 'banter', 'playfulness', 'characters'
  ],
  complimenting: [
    'compliments', 'appreciation', 'praise', 'receiving praise', 'saying nice things', 'noticing people'
  ],
  responsivehumour: [
    'humour', 'being funny', 'quick replies', 'banter', 'playfulness', 'reacting'
  ],
  masculine1: [
    'masculinity', 'leadership', 'relationships', 'boundaries', 'presence', 'communication'
  ],
  masculine2: [
    'masculinity', 'leadership', 'relationships', 'repair', 'sexual leadership', 'boundaries'
  ],
  masculine3: [
    'masculinity', 'leadership', 'relationships', 'intimacy', 'nervous system', 'vulnerability'
  ],
  masculine4: [
    'masculinity', 'leadership', 'anxiety', 'grounding', 'boundaries', 'shadow-work'
  ],
  masculine5: [
    'masculinity', 'leadership', 'provider', 'protector', 'stability', 'logistics'
  ],
  masculine6: [
    'masculinity', 'embodiment', 'meditation', 'nervous system', 'presence', 'grounding'
  ],
  masculinesv: [
    'maskulinitet', 'ledarskap', 'relationer', 'gränser', 'närvaro', 'kommunikation'
  ],
  parenting1: [
    'parenting', 'connection', 'empathy', 'mamalakis', 'kingdom'
  ],
  parenting2: [
    'parenting', 'limits', 'discipline', 'mamalakis', 'kingdom', 'structure'
  ],
  parenting3: [
    'parenting', 'struggle', 'competence', 'mamalakis', 'kingdom', 'growth'
  ],
  parenting4: [
    'parenting', 'self-regulation', 'pushback', 'mamalakis', 'kingdom', 'calm'
  ],
  parenting5: [
    'parenting', 'repentance', 'repair', 'mamalakis', 'kingdom', 'modeling'
  ],
  praxframe1: [
    'praxeology', 'frame', 'rian stone', 'ooda loop', 'mindset', 'calibration'
  ],
  praxframe2: [
    'praxeology', 'subtext', 'status', 'harmony', 'communication', 'rian stone'
  ],
  praxframe3: [
    'praxeology', 'assertiveness', 'frame', 'boundaries', 'conflict', 'rian stone'
  ],
  praxframe4: [
    'praxeology', 'nice-guy', 'covert-contracts', 'assertiveness', 'boundaries', 'rian-stone'
  ],
  praxframe5: [
    'praxeology', 'leadership', 'vision', 'rule zero', 'dhv', 'rian stone'
  ],
  praxdread1: [
    'praxeology', 'dread', 'frame', 'rian stone', 'stfu', 'leadership'
  ],
  praxdread2: [
    'praxeology', 'dread', 'marketing', 'status', 'rian stone'
  ],
  praxdread3: [
    'praxeology', 'dread', 'rejection', 'intimacy', 'leadership', 'rian stone'
  ],
  praxdread4: [
    'praxeology', 'dread', 'emotions', 'anger', 'main event', 'rian stone'
  ],
  praxdread5: [
    'praxeology', 'dread', 'agency', 'vision', 'leadership', 'treasury', 'remorse', 'rian stone'
  ],
  listeningthroughquestions: [
    'listening', 'questions', 'curiosity', 'drawing someone out', 'following up'
  ],
  showunderstanding2: [
    'listening', 'understanding', 'checking', 'connecting', 'sharing'
  ],
};

// ─── TOPICS ──────────────────────────────────────────────────────────
// Data source for the Library "Topics" tab (rendered by renderTopics in
// app-core.js). Each topic groups one or more packs by theme; a pack may
// appear under several topics (recommendation: max 3 — a pack that needs
// more than three is usually defined too broadly). `packs` holds pack
// keys only — each card's name/meta/label is mirrored from its canonical
// card in #libTabPacks, so the Packs and Topics tabs can never drift.
// An empty `packs: []` renders as a "No packs yet" placeholder group, and
// is hidden entirely below the Complete level — so an empty topic is a
// free placeholder for material that is planned but not written yet.
//
// DISPLAY ORDER: renderTopics() currently sorts alphabetically by `title`,
// so array order does NOT affect what the user sees. The array below is
// nevertheless kept in a deliberate beginner-to-advanced sequence, so a
// future "suggested order" sort can use the index without a data migration.
// Other sorts worth preparing for: difficulty, and time spent per pack
// (least-practised first). Both would need a per-topic or per-pack field
// that does not exist yet.
//
// Restructured v1.26.64 to absorb the Speaking Strategies Handbook material
// (8 chapters, 46 parts). Retired: conversation, transitions and dynamics
// merged into flowtransitions/interruptions; rapport split into listening
// and depth; observation folded into explaining; emotionregulation and
// emotionalboundaries merged into emotions and boundaries.
const TOPICS = [
  // ── Getting a conversation going ──────────────────────────────────
  { id: 'startingconversations', title: 'Starting Conversations',        packs: ['startingconnecting', 'setupstatement', 'firststrategies', 'startingconversations1', 'startingconversations4', 'startingconversations2', 'startingconversations3'] },
  { id: 'questions',             title: 'Questions & Curiosity',         packs: ['exploringatopic', 'deepquestions'] },
  { id: 'flowtransitions',       title: 'Flow & Transitions',            packs: ['conversational', 'transitions', 'changingtopics', 'reactingtounexpectedstatements'] },
  { id: 'endingconversations',   title: 'Ending Conversations',          packs: ['endingconversations'] },

  // ── Being with the other person ───────────────────────────────────
  { id: 'listening',             title: 'Listening & Understanding',     packs: ['listeningresponding', 'showunderstanding', 'validation', 'listeningthroughquestions', 'showunderstanding2'] },
  { id: 'depth',                 title: 'Depth & Connection',            packs: ['conversationaldepth', 'supportingconversations', 'talkingaboutyourself'] },

  // ── Holding the floor ─────────────────────────────────────────────
  { id: 'storytelling',          title: 'Storytelling',                  packs: ['storytelling', 'storytellingwiththesixws', 'storiesinconversation'] },
  { id: 'explaining',            title: 'Explaining & Describing',       packs: ['describethings', 'explainthings', 'givingexamples'] },
  { id: 'interruptions',         title: 'Interruptions & Speaking Up',   packs: ['speakingupingroups', 'howtointerrupt', 'handleinterruptions'] },

  // ── Giving and taking it ──────────────────────────────────────────
  { id: 'praise',                title: 'Praise & Compliments',          packs: ['compliments', 'praiseandencouragement', 'complimenting'] },
  { id: 'feedback',              title: 'Feedback & Criticism',          packs: ['criticism', 'givingcriticism', 'receivingfeedbackandcriticism'] },
  { id: 'repair',                title: 'Repair & Apology',              packs: ['apologizing2', 'apologizing1'] },

  // ── Standing your ground ──────────────────────────────────────────
  { id: 'opinions',              title: 'Opinions & Argumentation',      packs: ['influenceframing', 'agreeing', 'disagreeing'] },
  { id: 'persuasion',            title: 'Persuasion & Negotiation',      packs: ['influenceframing', 'persuasionandinfluence1', 'persuasionandinfluence2', 'negotiationandcompromise'] },
  { id: 'assertiveness',         title: 'Assertiveness & Pressure',      packs: ['assertive', 'brokenrecord', 'respondingtopassiveaggression'] },
  { id: 'boundaries',            title: 'Asking & Saying No',            packs: ['playfulrefusals', 'thehappyno', 'theregretfulno', 'makingrequests', 'sayingno'] },

  // ── The hard end ──────────────────────────────────────────────────
  { id: 'emotions',              title: 'Emotions & Regulation',         packs: ['emotionlabellingandregulation', 'conflictemotions', 'praxdread4'] },

  // ── Lightness ─────────────────────────────────────────────────────
  { id: 'humour',                title: 'Humour & Banter',               packs: ['humour', 'teasing', 'selfhumour', 'humourpractise', 'playfulrefusals', 'rolebasedhumour', 'responsivehumour'] },

  // ── Placeholders: no material yet, hidden below Complete ──────────
  { id: 'bodyvoice',             title: 'Body Language & Voice',         packs: [] },
  { id: 'giving',                title: 'Giving & Receiving',            packs: [] },
  { id: 'selfpresentation',      title: 'Self-Presentation',             packs: [] },
  { id: 'flirt',                 title: 'Flirting',                      packs: [] },
  { id: 'leadership',            title: 'Leadership',                    packs: ['praxframe5', 'praxdread5'] },
  { id: 'relationshipcomm',      title: 'Communication in Relationships',packs: ['masculine1', 'masculine2', 'masculine3', 'masculine4', 'masculine5', 'masculine6', 'masculinesv', 'parenting1', 'parenting2', 'parenting3', 'parenting4', 'parenting5', 'praxframe1', 'praxframe2', 'praxframe3', 'praxframe4', 'praxdread1', 'praxdread2', 'praxdread3'] },
];
