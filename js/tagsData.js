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
  apologizing2: [
    'apologizing', 'repair', 'when someone is hurt', 'making amends', 'difficult conversations'
  ],
  startingconversations3: [
    'starting conversations', 'openers', 'compliments', 'curiosity about people', 'small talk'
  ],
  endingconversations: [
    'ending conversations', 'leaving', 'goodbyes', 'closing a conversation', 'exits'
  ],
  reactingtounexpectedstatements: [
    'caught off guard', 'not knowing what to say', 'buying time', 'surprising remarks', 'thinking before answering'
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
  setupquestion: [
    'conversation', 'starting', 'connecting'
  ],
  givingcounterexamples: [
    'examples', 'disagreeing', 'nuance', 'evidence', 'discussion'
  ],
  discussing: [
    'discussion', 'opinions', 'listening', 'disagreement', 'keeping it civil'
  ],
  storybanter: [
    'humour', 'banter', 'improvisation', 'playfulness', 'building together'
  ],
  explainthings2: [
    'explaining', 'being clear', 'teaching', 'context', 'everyday things'
  ],
  buildingastory: [
    'storytelling', 'structure', 'telling it well', 'thinking on your feet', 'emotion'
  ],
  reframing: [
    'reframing', 'perspective', 'handling criticism', 'resilience', 'conversation'
  ],
  danbacon1: [
    'banter', 'flirting', 'sexual attraction', 'humor', 'conversation', 'first impressions', 'unpredictable'
  ],
  danbacon2: [
    'status', 'frame', 'confidence', 'alpha', 'prize', 'selector', 'masculinity', 'pressure'
  ],
  danbacon3: [
    'relationship mastery', 'attraction', 'leadership', 'emotional independence', 'boundaries', 'respect', 'commitment'
  ],
  danbacon4: [
    'relationship management', 'frame control', 'boundaries', 'attraction', 'masculinity', 'long term', 'sparks'
  ],
  oconnor1: [
    'boundaries', 'professional', 'verbal-defense', 'workplace-communication', 'power-phrases'
  ],
  oconnor2: [
    'boundaries', 'time management', 'work-life balance', 'productivity', 'saying no', 'interruptions'
  ],
  oconnor3: [
    'narcissism', 'toxic people', 'workplace conflict', 'boundaries', 'emotional control'
  ],
  oconnor4: [
    'leadership', 'feedback', 'accountability', 'professional image', 'management', 'communication'
  ],
  oconnor5: [
    'confidence', 'body language', 'executive presence', 'non-verbal', 'status', 'authority'
  ],
  oconnor6: [
    'resilience', 'self-regulation', 'persistence', 'boundaries', 'self-worth', 'negotiations'
  ],
  oconnor7: [
    'social skills', 'small talk', 'networking', 'names', 'rapport', 'confidence', 'connection'
  ],
  jimmy1: [
    'safety', 'respect', 'trust', 'values', 'choosing a partner', 'influence'
  ],
  jimmy2: [
    'communication', 'conflict', 'expression', 'soft startup', 'vulnerability', 'marriage'
  ],
  jimmy3: [
    'listening', 'validation', 'empathy', 'bids', 'vulnerability', 'emotional presence'
  ],
  jimmy4: [
    'conflict', 'repair', 'flooding', 'boundaries', 'accountability', 'safety'
  ],
  jimmy5: [
    'intimacy', 'appreciation', 'affection', 'mental load', 'check-in', 'friendship'
  ],
  jimmy6: [
    'boundaries', 'narcissism', 'people-pleasing', 'self-worth', 'respect', 'accountability'
  ],
  toddv1: [
    'opening', 'approach', 'verbal game', 'high value', 'first impressions', 'hook'
  ],
  toddv2: [
    'tension', 'push-pull', 'negging', 'qualifying', 'disqualification', 'sexual tension', 'verbal game'
  ],
  toddv3: [
    'connection', 'rapport', 'blueprint', 'storytelling', 'cold reading', 'values', 'deep conversation'
  ],
  toddv4: [
    'closing', 'logistics', 'leading', 'pull', 'dates', 'premise', 'results'
  ],
  toddv5: [
    'tests', 'social pressure', 'inner game', 'group theory', 'frame control', 'value', 'comfort'
  ],
  firststrategies: [
    'getting started', 'first conversations', 'beginner', 'everyday talk', 'the basic strategies'
  ],
  jfisher1: [
    'pressure', 'defense', 'conflict', 'boundaries', 'self-regulation'
  ],
  jfisher2: [
    'assertive', 'connection', 'boundaries', 'negotiations', 'communication'
  ],
  talkingaboutyourself: [
    'answering questions', 'small talk', 'self-disclosure', 'opening up', 'what do you do', 'being asked about yourself'
  ],
  startingconversations1: [
    'starting conversations', 'openers', 'small talk', 'strangers', 'first words'
  ],
  startingconversations2: [
    'starting conversations', 'openers', 'common ground', 'asking for help', 'small talk'
  ],
  startingconversations4: [
    'starting conversations', 'openers', 'humour', 'saying what you feel', 'approaching people'
  ],
  showunderstanding: [
    'listening', 'understanding', 'empathy', 'conversation'
  ],
  exploringatopic: [
    'conversation', 'group conversation', 'topics'
  ],
  changingtopics: [
    'conversation', 'topic change', 'transitions', 'small talk'
  ],
  complimenting: [
    'compliments', 'appreciation', 'praise', 'receiving praise', 'saying nice things', 'noticing people'
  ],
  responsivehumour: [
    'humour', 'being funny', 'quick replies', 'banter', 'playfulness', 'reacting'
  ],
  assertivecomm1: [
    'assertiveness', 'criticism', 'boundaries', 'coping', 'commercial', 'authority'
  ],
  assertivecomm2: [
    'assertiveness', 'social', 'conversation', 'relationships', 'dating', 'equal'
  ],
  assertivecommadv: [
    'assertiveness', 'combinations', 'criticism', 'boundaries', 'negotiation', 'advanced'
  ],
  integratedmaster: [
    'assertiveness', 'masterclass', 'integration', 'advanced', 'relationships', 'boundaries'
  ],
  counseling1: [
    'counseling', 'restoration', 'personal', 'obedience', 'congregation'
  ],
  counseling2: [
    'counseling', 'conflict', 'reconciliation', 'peacemaking', 'congregation'
  ],
  seenandtrusted1thesafetyshereads: [
    'relationships', 'safety', 'reliability', 'conflict', 'boundaries', 'presence'
  ],
  seenandtrusted2careshedidnotaskf: [
    'relationships', 'care', 'initiative', 'attention', 'appreciation', 'presence'
  ],
  seenandtrusted3askingtobetrusted: [
    'relationships', 'respect', 'autonomy', 'asking', 'appreciation', 'withdrawal'
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
  { id: 'startingconversations', title: 'Starting Conversations',        packs: ['startingconnecting', 'setupstatement', 'startingconversations3', 'setupquestion', 'oconnor7', 'firststrategies', 'startingconversations1', 'startingconversations2', 'startingconversations4', 'exploringatopic'] },
  { id: 'questions',             title: 'Questions & Curiosity',         packs: ['deepquestions'] },
  { id: 'flowtransitions',       title: 'Flow & Transitions',            packs: ['conversational', 'transitions', 'reactingtounexpectedstatements', 'changingtopics'] },
  { id: 'endingconversations',   title: 'Ending Conversations',          packs: ['endingconversations'] },

  // ── Being with the other person ───────────────────────────────────
  { id: 'listening',             title: 'Listening & Understanding',     packs: ['listeningresponding', 'validation', 'listeningthroughquestions', 'showunderstanding2', 'jimmy3', 'showunderstanding'] },
  { id: 'depth',                 title: 'Depth & Connection',            packs: ['conversationaldepth', 'supportingconversations', 'talkingaboutyourself'] },

  // ── Holding the floor ─────────────────────────────────────────────
  { id: 'storytelling',          title: 'Storytelling',                  packs: ['storytelling', 'storytellingwiththesixws', 'storiesinconversation', 'buildingastory'] },
  { id: 'explaining',            title: 'Explaining & Describing',       packs: ['describethings', 'explainthings', 'givingexamples', 'explainthings2'] },
  { id: 'interruptions',         title: 'Interruptions & Speaking Up',   packs: ['speakingupingroups', 'howtointerrupt', 'handleinterruptions'] },

  // ── Giving and taking it ──────────────────────────────────────────
  { id: 'praise',                title: 'Praise & Compliments',          packs: ['compliments', 'praiseandencouragement', 'complimenting'] },
  { id: 'feedback',              title: 'Feedback & Criticism',          packs: ['criticism', 'givingcriticism', 'receivingfeedbackandcriticism'] },
  { id: 'repair',                title: 'Repair & Apology',              packs: ['apologizing2', 'apologizing1', 'jimmy4'] },

  // ── Standing your ground ──────────────────────────────────────────
  { id: 'opinions',              title: 'Opinions & Argumentation',      packs: ['influenceframing', 'agreeing', 'disagreeing', 'givingcounterexamples', 'discussing'] },
  { id: 'persuasion',            title: 'Persuasion & Negotiation',      packs: ['influenceframing', 'persuasionandinfluence1', 'persuasionandinfluence2', 'negotiationandcompromise'] },
  { id: 'assertiveness',         title: 'Assertiveness & Pressure',      packs: ['assertive', 'brokenrecord', 'respondingtopassiveaggression', 'oconnor1', 'oconnor3', 'jfisher1', 'jfisher2', 'assertivecomm1', 'assertivecomm2', 'assertivecommadv', 'integratedmaster'] },
  { id: 'boundaries',            title: 'Asking & Saying No',            packs: ['playfulrefusals', 'thehappyno', 'theregretfulno', 'makingrequests', 'sayingno', 'oconnor2', 'jimmy6'] },

  // ── The hard end ──────────────────────────────────────────────────
  { id: 'emotions',              title: 'Emotions & Regulation',         packs: ['emotionlabellingandregulation', 'conflictemotions', 'praxdread4', 'reframing', 'oconnor6'] },

  // ── Lightness ─────────────────────────────────────────────────────
  { id: 'humour',                title: 'Humour & Banter',               packs: ['humour', 'teasing', 'selfhumour', 'humourpractise', 'playfulrefusals', 'rolebasedhumour', 'storybanter', 'responsivehumour'] },

  // ── Placeholders: no material yet, hidden below Complete ──────────
  { id: 'bodyvoice',             title: 'Body Language & Voice',         packs: [] },
  { id: 'giving',                title: 'Giving & Receiving',            packs: [] },
  { id: 'selfpresentation',      title: 'Self-Presentation',             packs: [] },
  { id: 'flirt',                 title: 'Flirting',                      packs: ['danbacon1', 'danbacon2', 'danbacon3', 'danbacon4', 'toddv1', 'toddv2', 'toddv3', 'toddv4', 'toddv5'] },
  { id: 'leadership',            title: 'Leadership',                    packs: ['praxframe5', 'praxdread5', 'oconnor4', 'oconnor5'] },
  { id: 'relationshipcomm',      title: 'Communication in Relationships',packs: ['masculine1', 'masculine2', 'masculine3', 'masculine4', 'masculine5', 'masculine6', 'masculinesv', 'parenting1', 'parenting2', 'parenting3', 'parenting4', 'parenting5', 'praxframe1', 'praxframe2', 'praxframe3', 'praxframe4', 'praxdread1', 'praxdread2', 'praxdread3', 'jimmy1', 'jimmy2', 'jimmy5', 'seenandtrusted1thesafetyshereads', 'seenandtrusted2careshedidnotaskf', 'seenandtrusted3askingtobetrusted'] },

  // ── Mutual care in a congregation (v1.27.54) ──────────────────────
  // Added for the Jay Adams packs. Both sit at minLevel 'complete', so this
  // topic row is invisible to freemium and pro users: app-system.js hides a
  // topic group with no VISIBLE pack, and only 'complete' shows empty topics.
  // Redeeming the per-pack code makes the packs visible and the topic appears
  // with them. Do not add packs here that are meant for everybody.
  { id: 'counseling',            title: 'Counseling & Restoration',      packs: ['counseling1', 'counseling2'] },
];
