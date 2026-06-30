// data.js — All collection and strategy content
// To add a new collection: add a key here and a card in index.html

const collections = {

  assertive: [
    {
      name: "Fogging",
      description: "Fogging means responding to criticism by calmly agreeing with what might be true — without defending yourself, explaining, or getting upset.\n\nYou are like fog: criticism hits nothing solid, it just passes through. This signals confidence and unshakeable calm.\n\nTypical fogging responses:\n• \"You might be right about that.\"\n• \"Yes, that could be.\"\n• \"You may have a point there.\"\n\nThree types of fogging:\n1. Agree with what might be true — \"You're probably right.\"\n2. Agree with the possibility — \"It's possible that I…\"\n3. Agree with the logic — \"I can see why you think so.\"\n\nMindset: You don't need to defend yourself. Agreeing is not giving up — it's strength.",
      inputs: [
        { q: "Someone criticises your driving",          a: '"You might be right about that."' },
        { q: "Someone says you are too sensitive",       a: '"You could have a point there."' },
        { q: "Someone calls you selfish for saying no",  a: '"I understand it might look that way."' },
        { q: "Someone mocks something you made or said", a: '"Yeah, that probably wasn\'t my best."' },
      ]
    },
    {
      name: "Negative Inquiry",
      description: "Negative inquiry means calmly and genuinely asking for more criticism when someone criticises you — instead of defending yourself.\n\nIt disarms the other person and gives you information about what the actual problem is.\n\nTypical phrases:\n• \"What is it specifically I do that bothers you?\"\n• \"What do you mean by that?\"\n• \"How would you prefer I handle it?\"\n\nThree purposes:\n1. Disarm — hard to keep attacking someone who genuinely listens\n2. Clarify — find out what the criticism is actually about\n3. Show confidence — you're not afraid of more criticism\n\nMindset: I'm not afraid of criticism. Asking is control, not weakness.",
      inputs: [
        { q: "Someone says you are being difficult",       a: '"What is it specifically that I\'m doing that feels difficult?"' },
        { q: "Someone seems annoyed by something you did", a: '"Can you tell me more about what\'s bothering you?"' },
        { q: "Someone gives you vague criticism",          a: '"What do you mean exactly? I\'d like to understand."' },
        { q: "Someone says you always do this",            a: '"What is it I do that you\'re reacting to?"' },
      ]
    },
    {
      name: "Negative Assertion",
      description: "Negative assertion means actively and calmly agreeing with your own faults when someone points them out — without over-apologising or getting defensive.\n\nThe key principle: acknowledge without shrinking.\n\nNot: \"Oh no, I'm so sorry…\"\nNot: \"Yes but it's because…\" (explanation = defence)\nYes: \"You're right. That's true.\" — short, calm, owned.\n\nMindset: I can be wrong and still be okay. Acknowledging a mistake shows strength.",
      inputs: [
        { q: "Someone points out you were late",               a: '"You\'re right, I was late. That\'s on me."' },
        { q: "Someone says your joke wasn\'t funny",           a: '"No, that one didn\'t land."' },
        { q: "Someone criticises how you handled a situation", a: '"You\'re right, I could have done that differently."' },
        { q: "Someone points out a mistake you made at work",  a: '"Yes, that was a mistake. I\'ll fix it."' },
      ]
    },
    {
      name: "Broken Record",
      description: "Broken record means returning to the same calm, short response over and over — without being drawn into argument, explanation, or apology.\n\nEvery time you explain yourself you give the other person a new argument to counter. When you just repeat — there is nothing to respond to.\n\nHow to use it:\n• Choose a short, clear sentence\n• Repeat it calmly every time they push\n• Don't change your wording, don't raise your voice, don't apologise\n\nMindset: I don't need to justify my boundaries. Repeating myself is stable, not strange.",
      inputs: [
        { q: "Someone keeps pressuring you after you said no", a: "Choose one calm sentence. Repeat it — without changing the wording, no matter what they say." },
        { q: "A salesperson won't take no for an answer",      a: '"That doesn\'t work for me." — said calmly, three times if needed. No smile, no apology.' },
        { q: "A friend repeatedly asks the same favour",       a: '"I can\'t help with that." — unchanged, regardless of how they rephrase.' },
        { q: "Someone tries to argue you out of a decision",   a: '"I\'ve made my decision." — not "I\'ve decided because…" — no explanation.' },
        { q: "Someone escalates pressure when you decline",    a: "Hold the same tone as the pressure rises. That's exactly when the technique is being tested." },
        { q: "A colleague keeps pushing back on a boundary",   a: '"That\'s my boundary." — calm, clear, repeated.' },
      ]
    }
  ],

  humour: [
    {
      name: "Exaggerating",
      description: "Exaggerating means deliberately overstating something for humorous or rhetorical effect.\n\nThe key is that the exaggeration is obvious. Nobody believes you — that's the point.\n\nFour types:\n1. Value — overstate how important something is\n2. Looks — overstate someone's appearance\n3. Opinions — present your view as the most obviously correct thing ever\n4. Intent — exaggerate someone's motive dramatically\n\nWhat makes it land:\n• Commit to it — half-hearted exaggeration is just inaccuracy\n• Keep it short — one sentence, then let it breathe\n• The absurdity does the work — don't explain the joke\n\nMindset: Go bigger than feels comfortable. That's usually where the funny is.",
      inputs: [
        { q: "Exaggerate the value of something ordinary",  a: '"This coffee? Probably the single most important thing that\'s happened to me this week."' },
        { q: "Exaggerate someone\'s looks as a compliment", a: '"You walked in and the lighting in this room genuinely improved."' },
        { q: "Exaggerate your own opinion to make a point", a: '"This is not a preference. This is objectively, scientifically, historically the correct answer."' },
        { q: "Exaggerate someone\'s intent or attitude",    a: '"The way you said that, I assumed you were announcing a hostile takeover."' },
      ]
    },
    {
      name: "Irony",
      description: "Irony means saying the opposite of what you mean — in a way that's clear to the listener.\n\nFour types:\n1. Verbal irony — say the opposite: \"Yes, that was a brilliant decision.\"\n2. Situational irony — reality is opposite of expectation\n3. Socratic irony — pretend ignorance to lead toward a point\n4. Self-irony — \"Impeccably timed, as always.\"\n\nIrony vs sarcasm: irony is warm and playful. Sarcasm is sharper and can sting.\n\nMindset: Irony gives you distance from difficult situations without complaining.",
      inputs: [
        { q: "Someone says you're always late",    a: '"Yes — impeccably timed, as always."' },
        { q: "Someone complains about the weather", a: '"Absolutely lovely. Couldn\'t ask for more."' },
        { q: "Someone says a task is hard",         a: '"Easy. No problem at all."' },
        { q: "A situation is clearly going wrong",  a: '"Going great. Better couldn\'t be."' },
        { q: "Someone gives you unwanted advice",   a: '"Thank you. That changes everything."' },
      ]
    },
    {
      name: "Deliberate Misunderstanding",
      description: "Deliberate misunderstanding means pretending to misunderstand what someone said — in a way that's obviously a joke.\n\nThree variants:\n1. Literal interpretation — take an idiom at face value\n2. Absurd interpretation — choose the most unreasonable reading\n3. Double meaning pick — choose the unintended meaning\n\nFormula: catch the phrase → pick the wrong interpretation → react briefly → move on\n\nMindset: Listen for phrases that could be read another way — they're everywhere.",
      inputs: [
        { q: 'Someone says "can you give me a hand?"',   a: '"Sure — but I\'d like it back."' },
        { q: 'Someone says "I could eat a horse"',       a: '"You really shouldn\'t. They bite."' },
        { q: 'Someone says "break a leg"',               a: '"That seems excessive. I\'ll just do my best."' },
        { q: 'Someone says they\'re "dying of boredom"', a: '"Should I call someone?"' },
        { q: 'Someone says "we need to nail this"',      a: '"I\'ll get the toolbox."' },
        { q: "Someone gives a vague instruction",        a: "Choose the most absurd possible interpretation and act on it briefly, then smile." },
        { q: "Someone uses a common idiom",              a: "Treat it as a factual statement and react accordingly — keep it short and obvious." },
      ]
    },
    {
      name: "Verbal Sparring",
      description: "Verbal sparring is a playful verbal duel — you either hype yourself up or playfully discredit the other person.\n\nThe tone is everything: this is play, not real conflict.\n\nSix modes:\n1. Hype your opinions\n2. Hype your likes\n3. Hype your looks\n4. Discredit their behaviour\n5. Discredit their looks\n6. Discredit their opinion\n\nMindset: This is play. Go in with energy.",
      inputs: [
        { q: "Hype your opinion on something",           a: '"This is not an opinion. This is fact."' },
        { q: "Hype something you like",                  a: '"If you haven\'t tried this, you haven\'t lived."' },
        { q: "Hype your own looks",                      a: '"I woke up like this. Some people are just gifted."' },
        { q: "Discredit something the other person did", a: '"I\'ve seen better. From a child. On their first attempt."' },
        { q: "Discredit the other person\'s looks",      a: '"I\'m not saying it\'s bad. I\'m saying it\'s... a choice."' },
        { q: "Discredit the other person\'s opinion",    a: '"I\'m going to pretend you didn\'t say that."' },
      ]
    }
  ],

  teasing: [
    {
      name: "Teasing",
      description: "Teasing means playfully poking fun at someone — in a way that creates warmth and laughter rather than hurt.\n\nWhat makes teasing land:\n• Warm tone — it's obvious you like the person\n• Light touch — one tease, then move on\n• Pick something observable and harmless\n• Be ready to laugh at yourself too\n\nWhat to avoid:\n• Teasing about insecurities someone has shared\n• Repeating the same tease until it stops being funny\n• Teasing when someone is already upset\n\nMindset: Teasing is a sign of comfort and affection — not cruelty.",
      inputs: [
        { q: "Tease someone about their looks playfully", a: "Pick something observable and comment with a warm smile — keep it light, one line, move on." },
        { q: "Tease someone about their clothes",         a: "Notice something specific and comment on it in an affectionate, playful way." },
      ]
    },
    {
      name: "Disqualification",
      description: "Disqualification means subtly signalling that you're not automatically impressed — it flips the usual dynamic.\n\nExamples:\n• \"You're interesting — I'm just not sure we'd get along.\"\n• \"Not bad. Not quite what I expected, but not bad.\"\n• \"That was a good attempt.\"\n\nWhat makes it work:\n• Tone is everything — playful and warm, not cold\n• Use sparingly\n• Combine with pull for best effect\n\nMindset: I have my own criteria — I'm not automatically impressed.",
      inputs: [
        { q: "Someone approaches you with confidence",    a: '"You\'re interesting. I\'m just not sure we\'d get along — but interesting."' },
        { q: "Someone seems very interested in you",      a: "Don't match their intensity — stay calm, show you have your own criteria." },
        { q: "Someone gives you a lot of attention",      a: "Receive it calmly without becoming overly grateful or immediately reciprocating." },
        { q: "Someone tries to impress you",             a: '"Good attempt." + small smile.' },
        { q: "Someone compliments you",                  a: '"Thanks. You\'re not bad yourself."' },
      ]
    },
    {
      name: "Verbal Sparring",
      description: "Verbal sparring is a playful verbal duel — you either hype yourself up or playfully discredit the other person.\n\nThe tone is everything: this is play, not real conflict.\n\nSix modes:\n1. Hype your opinions\n2. Hype your likes\n3. Hype your looks\n4. Discredit their behaviour\n5. Discredit their looks\n6. Discredit their opinion\n\nMindset: This is play. Go in with energy and don't take yourself too seriously.",
      inputs: [
        { q: "Hype your opinion on something",           a: '"This is not an opinion. This is fact."' },
        { q: "Hype something you like",                  a: '"If you haven\'t tried this, you haven\'t lived."' },
        { q: "Hype your own looks",                      a: '"I woke up like this. Some people are just gifted."' },
        { q: "Discredit something the other person did", a: '"I\'ve seen better. From a child. On their first attempt."' },
        { q: "Discredit the other person\'s looks",      a: '"I\'m not saying it\'s bad. I\'m saying it\'s... a choice."' },
        { q: "Discredit the other person\'s opinion",    a: '"I\'m going to pretend you didn\'t say that."' },
      ]
    },
    {
      name: "Push / Pull",
      description: "Push/pull means creating a rhythm of closeness and distance — you give something (pull) then take a little back (push).\n\nPull: a compliment, genuine curiosity, warmth\nPush: a playful disqualification, becoming slightly more distant, a tease\n\nEffective variant: give on one dimension, take on another — compliment looks but critique taste in music.\n\nPrinciple: contrast creates engagement.\n\nMindset: I don't need to be constantly available. Contrast creates engagement.",
      inputs: [
        { q: "Compliment looks + critique taste in music",     a: '"You look really good today. Your music taste is a separate problem."' },
        { q: "Compliment personality + tease their hobby",     a: '"You\'re genuinely fun to talk to. I still don\'t understand how you spend your free time."' },
        { q: "Compliment style + mock food choices",           a: '"The style is good. But what you eat is an active choice against yourself."' },
        { q: "Compliment work ethic + tease for being boring", a: '"You work hard — impressive. But you have it a little boring, don\'t you?"' },
        { q: "Show warm interest then become more neutral",    a: "Be genuinely engaged — then pull back slightly, as if remembering not to be too easily impressed." },
        { q: "Someone is very eager",                          a: "Don't match their intensity — cool down a little, let them come to you." },
        { q: "Say something critical then follow with warmth", a: '"But on a serious note — that was actually good."' },
      ]
    },
    {
      name: "Twist",
      description: "A twist means breaking against expectations — you say or do something that is the opposite of what the situation seems to call for.\n\nTypes:\n1. Ironic reversal — say the opposite of what's expected\n2. Unexpected interpretation — read something a completely different way\n3. Break the script — everyone expects reaction A, you give reaction B\n4. Absurd conclusion — take something to its logical but absurd endpoint\n\nMindset: Unpredictability creates interest.",
      inputs: [
        { q: "Someone says something predictable",              a: "Break from the expected response — go somewhere they didn't anticipate." },
        { q: "Someone expects you to react a certain way",      a: "Give them the opposite reaction, playfully." },
        { q: "Someone makes an assumption about you",           a: "Confirm it — but in an unexpected way that reframes it entirely." },
        { q: "Someone gives a compliment",                      a: "Respond unexpectedly — nonchalant, absurd conclusion, or strangely reflective." },
        { q: "Someone is very serious about something trivial", a: "Take it even more seriously than they do — escalate to the absurd." },
      ]
    },
    {
      name: "Convert Criticism to Tease",
      description: "Taking a genuine criticism and wrapping it in humour — exaggeration, warmth, or drama — so the message is there, but the tone is playful.\n\nFour techniques:\n1. Exaggerate — make the criticism so extreme it's obviously not serious\n2. Warm admiration mixed with critique\n3. Dramatic tone — pretend to be deeply affected\n4. Fond complaint — treat it like an established in-joke\n\nMindset: I can communicate something that bothers me without creating conflict.",
      inputs: [
        { q: "Someone always talks too fast",        a: '"You talk so fast I need to pause you like a podcast."' },
        { q: "Someone always talks about one topic", a: '"It\'s almost impressive — it\'s like a calling for you."' },
        { q: "Someone is always late",               a: '"Fashionably late as always. It\'s your brand at this point."' },
        { q: "Someone has a quirky recurring habit", a: "Lift it with fond drama — exaggerate the impact it has on you." },
        { q: "Someone made a questionable decision", a: '"That was brave. Not wise, but brave."' },
      ]
    },
    {
      name: "Convert Criticism to Tease with Irony",
      description: "Flip the criticism and present the negative quality as if it were a merit or talent. The absurdity of the reversal is the joke.\n\nExamples:\n• Someone talks too fast → \"It's a talent — full presentation, 40 seconds. Respect.\"\n• Someone is messy → \"That's not disorder — that's a creative system.\"\n• Someone made a bad decision → \"Brave. Not wise, but brave.\"\n\nWhat makes it land:\n• Deliver with a completely straight, convinced tone\n• The reversal must be obviously absurd\n\nMindset: I can turn a criticism into something that makes us both laugh.",
      inputs: [
        { q: "Someone talks too fast",                     a: '"It\'s a talent — full presentation, 40 seconds. Respect."' },
        { q: "Someone is always messy",                    a: '"That\'s not disorder. That\'s a creative system. I see it now."' },
        { q: "Someone is always distracted",               a: '"That\'s advanced-level multitasking."' },
        { q: "Someone made a questionable decision",       a: '"Brave. Not wise, but brave."' },
        { q: "Someone has a habit that seems inefficient", a: "Present it as a sophisticated method — with full conviction and a straight face." },
      ]
    }
  ],

  criticism: [
    {
      name: "Critique",
      description: "Giving good criticism is an art. Bad criticism creates defensiveness. Good criticism creates change.\n\nSix principles:\n1. Specific — not \"you're always late\" but \"you were 20 minutes late today\"\n2. Behaviour, not person — not \"you're careless\" but \"this needs to be redone\"\n3. Right timing — not in the middle of a conflict\n4. Private when possible\n5. One thing at a time\n6. Future focus — what you want to see, not just what went wrong\n\nMindset: Good criticism is a gift — not an attack.",
      inputs: [
        { q: "Criticise someone's work quality",                         a: '"This needs to be redone because... next time, what would help is..."' },
        { q: "Criticise a repeated behaviour that bothers you",          a: '"I\'ve noticed X happens often — that doesn\'t work for me."' },
        { q: "Criticise a decision someone made",                        a: '"I understand why you chose that — I think it might have worked better if..."' },
        { q: "Raise a small issue before it becomes a bigger problem",   a: "Bring it up early and calmly — one specific observation, future focus." },
        { q: "Criticise someone you care about without damaging things", a: '"I\'m saying this because I care — [specific behaviour], [specific impact]."' },
        { q: "Criticise a child's behaviour constructively",             a: '"What you did was X, what I need is Y." — address the behaviour, not the person.' },
      ]
    },
    {
      name: "Feedback Handling",
      description: "Feedback is one of the most important tools for growth — but only if you can actually receive it.\n\nFour situations:\n1. Positive feedback — receive it genuinely, without minimising\n2. Constructive feedback — listen fully, acknowledge, ask if needed\n3. Harsh feedback — separate content from form\n4. Feedback you disagree with — listen fully, then share your view\n\nMindset: Feedback is information. I listen genuinely and then decide what to do with it.",
      inputs: [
        { q: "Someone gives critical feedback on your work", a: '"Can you tell me more about what didn\'t work?" — listen fully, then acknowledge.' },
        { q: "Someone gives positive feedback",              a: '"Thank you, that\'s good to hear." — don\'t minimise.' },
        { q: "Someone gives feedback in a harsh way",        a: "Separate content from form — take in what's relevant, let the tone go." },
        { q: "Someone gives feedback that surprises you",    a: '"Interesting — I hadn\'t thought of it that way."' },
        { q: "Someone gives feedback you disagree with",     a: '"I actually see it a bit differently..." — listen fully first.' },
        { q: "You receive feedback in a group setting",      a: "Stay calm and open — not defensive in front of others." },
      ]
    },
    {
      name: "Delay Correction",
      description: "Not all criticism needs to be given immediately. Sometimes the timing is wrong.\n\nVariants:\n• Joke in the moment, address seriously later\n• Change subject and return when things have settled\n• Wait for the right moment\n• Let it go entirely\n\nWhen to delay:\n• The person is too upset to receive it right now\n• The situation is public\n• The thing is small and the moment is good\n• You're too upset yourself\n\nMindset: Choosing when to address something is a strength, not avoidance.",
      inputs: [
        { q: "Someone made a small mistake that annoyed you",  a: "Let it pass now — decide later whether it's worth raising at all." },
        { q: "Someone told you what to do in a nasty way",     a: "Let the moment pass — address how they said it later when you're both calm." },
        { q: "The right moment to correct has already passed", a: '"I wanted to mention something about what happened earlier — is now a good time?"' },
        { q: "Timing feels wrong right now",                   a: "Identify why, then actively choose a better moment — don't just avoid it indefinitely." },
        { q: "Someone forgot to do something minor",           a: "Joke about it lightly if appropriate, then raise it properly if it becomes a pattern." },
      ]
    },
    {
      name: "Friend Related Critique",
      description: "It's socially complex when a friend criticises another friend. You want to stand up for the person being criticised, but without escalating conflict.\n\nSix strategies:\n1. Nuance without attacking\n2. Defend with facts\n3. Shift perspective — \"Have you talked to them about it?\"\n4. Take a clear but calm position\n5. Redirect — \"That might be something they need to work out between themselves.\"\n6. Support the absent person\n\nMindset: I can stand up for someone without creating a new conflict.",
      inputs: [
        { q: "A mutual friend is criticised in front of you",          a: '"I understand what you mean — and I think there might be more behind it."' },
        { q: "Someone criticises a close friend who isn't there",      a: '"I know that he/she actually... it\'s a bit more complicated than that."' },
        { q: "Someone makes an unfair generalisation about a friend",  a: '"That\'s not quite right — it\'s more nuanced than that."' },
        { q: "Two friends are in conflict and one asks for your take", a: '"That might be something you two need to work out between yourselves."' },
        { q: "Someone has a strong opinion about what a friend did",   a: '"Have you spoken to them about it? There might be a side you haven\'t heard."' },
      ]
    }
  ]

};

// ── CONVERSATIONAL COLLECTIONS ────────────────────────────────────────────────
// Used by the Collections training mode in the Conversational Skills pack.
// Each collection has a name, a description (shown as info card), and inputs.
// Input types: direct, situation, choose3, identify, free, contrast

const conversationalCollections = {

  conversational: [

    {
      name: "Starting Conversations",
      description: "17 ways to open a conversation — grouped into four categories:\n\n**Basic:** Simple greeting · Introduce yourself · Situational comment · Polite request\n\n**Question-based:** Ask about the situation · Open question · Curiosity · Genuine curiosity about how they are · Ask about them\n\n**Statement & feeling:** Specific compliment · Statement or guess about the person · Express a feeling\n\n**Relationship-building:** Shared experience · Something that happened · Relevant topic · Framing\n\n**Playful:** Humour (irony or exaggeration)\n\nMindset: Simple openings work best — you don't need to be clever, just natural. Most people want someone to take the initiative.",
      inputs: [
        // Direct — name the strategy, demonstrate it
        { type: "direct", q: "Use a simple greeting to start a conversation", a: "\"Hey \u2014 how's it going?\" or \"Morning!\" \u2014 short, warm, no pressure." },
        { type: "direct", q: "Introduce yourself to someone you haven't met", a: '"I don\'t think we\'ve met — I\'m [name]." — direct and confident.' },
        { type: "direct", q: "Use a specific compliment to open", a: '"That\'s a great jacket." or "I like your notebook." — specific, not generic.' },
        { type: "direct", q: "Open with a question about the situation", a: '"Is this your first time here?" or "Do you know when it starts?" — low stakes, easy to answer.' },
        { type: "direct", q: "Use humour to open a conversation", a: 'Irony or exaggeration: "This queue moves like it\'s on strike." — commit to it, keep it short.' },
        { type: "direct", q: "Make a statement or guess about the person", a: '"You look like someone who\'s done this before." — confident, invites a reaction.' },
        { type: "direct", q: "Use framing to open", a: '"I\'d regret it if I didn\'t come over and say hi." — honest and disarming.' },
        { type: "direct", q: "Open with genuine curiosity about how they are", a: '"Are you okay? You seem a little stressed." — warm, attentive, only if it fits.' },

        // Situation — context given, choose and apply an opening
        { type: "situation", q: "You're at a social event and spot someone standing alone", a: 'Situational comment or direct approach: "Looks like we\'re both doing the \'standing near the snacks\' thing." or simply introduce yourself.' },
        { type: "situation", q: "You're waiting in a long queue", a: 'Light observation about the situation: "This is moving impressively slowly." — easy, shared experience.' },
        { type: "situation", q: "You're new at a school or workplace", a: '"I\'m new here — how are you?" or "I\'m [name] — I just started." — direct and honest.' },
        { type: "situation", q: "You want to re-engage someone you haven't talked to in a while", a: 'Relevant topic: "How did that exam/project/trip go?" — shows you remember something about them.' },
        { type: "situation", q: "You're at a party where you know no one", a: 'Shared experience: "Do you know many people here?" or introduce yourself directly — most people are waiting for someone to start.' },
        { type: "situation", q: "You find someone interesting and want to approach them", a: 'Statement + question: "You look like someone who\'s passionate about what they do — what is it?" — bold but genuine.' },
        { type: "situation", q: "You're sitting next to someone at a lecture or class", a: 'Ask about the situation: "Have you had this teacher before?" or shared experience: "That last part went fast."' },

        // Choose 3 — pick the best from three options
        { type: "choose3", q: "Which three opening types work best when you know nothing about the person?", a: '1. Situational comment — safe, shared context\n2. Simple greeting + introduce yourself — always appropriate\n3. Curiosity question — "I\'m curious — how did you end up here?"' },
        { type: "choose3", q: "Which three openings are best for leaving a strong impression?", a: '1. Specific compliment — shows you noticed something real\n2. Statement or guess about the person — confident and engaging\n3. Framing — "I\'d kick myself if I didn\'t come over" — memorable and honest' },
        { type: "choose3", q: "Which three openings work well when energy is low or the setting is quiet?", a: '1. Polite request — low stakes, practical\n2. Simple greeting — no pressure\n3. Genuine curiosity about how they are — warm and personal' },

        // Identify — given an example, name the type
        { type: "identify", q: '"I\'m curious — why does everyone always end up in the kitchen at parties?" — which opening type is this?', a: 'Curiosity — you share an observation framed as a genuine question. It invites discussion without requiring a specific answer.' },
        { type: "identify", q: '"That\'s a really specific tattoo — there\'s a story there." — which opening type is this?', a: 'Statement or guess about the person — you make a confident observation that invites them to share something.' },
        { type: "identify", q: '"I\'d feel bad if I left without saying hello." — which opening type is this?', a: 'Framing — you give a personal reason for approaching. Honest and disarming.' },
        { type: "identify", q: '"Toughest lecture of the year, right?" — which opening type is this?', a: 'Shared experience — you reference something you both just went through. Creates instant common ground.' },

        // Free — situation only, no strategy named
        { type: "free", q: "You're standing next to someone at a museum exhibit you both just looked at", a: 'Any natural opening works: "That one got me thinking." / "What did you make of that?" / "Interesting choice to put it next to the other one." — follow your genuine reaction.' },
        { type: "free", q: "You're on a long train journey and the person next to you catches your eye", a: 'Start small: a smile, a light comment about the journey, or simply introduce yourself if the moment feels right. No pressure to be clever.' },
      ]
    },

    {
      name: "Ending Conversations",
      description: "Seven techniques for ending a conversation naturally and warmly:\n\n1. **Exit phrase** — Short standard phrase: \"See you!\" / \"Take care!\"\n2. **Give a reason** — Explain why you need to go: \"I need to catch my bus.\"\n3. **Offer to continue later** — \"We should continue this another time.\"\n4. **Say something positive** — \"It was really good talking to you.\"\n5. **Wish them well** — \"Good luck with the exam.\"\n6. **Curious exit** — \"Before I go — I'm genuinely curious about what you said about X.\"\n7. **Humorous contrast** — \"We'll never see each other again!\" (with a smile)\n\n**The high note principle:** End shortly after a laugh or a positive moment — leave when the mood is good.\n\n**Combine techniques:** Positive comment + Wish them well works naturally together.\n\nMindset: Ending well is as important as starting well. Take the initiative — it's a favour to both of you.",
      inputs: [
        // Direct
        { type: "direct", q: "Use an exit phrase to end a conversation", a: '"See you!" / "Take care!" / "Catch you later!" — short, warm, natural.' },
        { type: "direct", q: "Give a reason for leaving", a: '"I need to get to class." / "I should catch my bus." — simple and honest, no over-explanation needed.' },
        { type: "direct", q: "End by offering to continue later", a: '"We should pick this up another time." / "I\'ll tell you the rest next time." — shows genuine interest.' },
        { type: "direct", q: "End with something positive about the conversation", a: '"It was really good talking to you." / "That was an interesting conversation." — leave them with a warm feeling.' },
        { type: "direct", q: "Use a curious exit", a: '"Before I go — I\'m genuinely curious about what you said about X. Can you tell me more?" — shows you were listening.' },
        { type: "direct", q: "End with humour using the humorous contrast technique", a: '"Well, we\'ll never see each other again!" (with a smile) — playful, memorable, lightens the exit.' },

        // Situation
        { type: "situation", q: "The conversation has run its course but neither of you ends it", a: 'Take the initiative: "I think I\'m going to head off — but it was genuinely good talking to you." — both of you will feel relieved.' },
        { type: "situation", q: "You're at an event and want to move on to talk to others", a: '"I want to make sure I say hi to a few others — but this was great." — honest, warm, and clean.' },
        { type: "situation", q: "A phone call needs wrapping up", a: '"I\'ll let you go — but good to hear from you." or "I should get back to it, but let\'s catch up properly soon."' },
        { type: "situation", q: "You've had a great conversation and want to leave on a high note", a: 'Apply the high note principle: end shortly after the best moment — "I\'ll leave it there — that was a good one." ' },
        { type: "situation", q: "The conversation is dragging and you want to exit gracefully", a: 'Take the initiative early before it drags further: "I should get going — but it was good to chat." — kind and decisive.' },
        { type: "situation", q: "You want to end but also signal you want to talk again", a: 'Combine: "It was really good talking to you — we should continue this properly sometime." — positive + offer to continue.' },

        // Choose 3
        { type: "choose3", q: "Which three techniques work best when you want to leave a strong positive impression?", a: '1. Say something positive — "That was a genuinely good conversation."\n2. Wish them well — personalised, shows you were listening\n3. Curious exit — leaves them feeling interesting and valued' },
        { type: "choose3", q: "Which three techniques are most useful in a casual social setting?", a: '1. Exit phrase — natural and frictionless\n2. Humorous contrast — memorable and light\n3. High note principle — timing over technique' },

        // Identify
        { type: "identify", q: '"Before I leave — I\'m still thinking about what you said about your trip. Tell me more." — which technique is this?', a: 'Curious exit — you signal genuine interest before leaving, which makes the other person feel heard and valued.' },
        { type: "identify", q: '"I\'ll let you get back to it — but this was great." — which technique is this?', a: 'Give a reason + positive comment combined — practical exit softened by genuine warmth.' },
        { type: "identify", q: '"Goodbye forever!" (with a big smile) — which technique is this?', a: 'Humorous contrast — saying the opposite of what you mean for a playful, memorable exit.' },

        // Free
        { type: "free", q: "A conversation with a classmate has naturally wound down. End it well.", a: 'Any combination works: "Good talking to you — good luck with everything." — simple, warm, done. The key is taking the initiative rather than letting it trail off.' },
        { type: "free", q: "You've been talking to someone at a party for a while and want to move on, but you'd like to talk again", a: 'Be honest and warm: "I want to circulate a bit — but I\'d genuinely like to continue this. Find me later?" — direct and flattering.' },
      ]
    }

  ]

};

// ── CHALLENGES DATA ───────────────────────────────────────────────────────────
// Used by the Challenges training mode.
// Each challenge has a name, description (shown as info card), and inputs.
// Input format: { q: "the challenge", a: '"Example response." (Strategy)' }

const challengesCollections = {

  assertive: [
    {
      name: "Direct Criticism",
      description: "Someone criticises you directly — your behaviour, your work, your choices, or your character.\n\nThis is the most common form of verbal challenge. The criticism may be fair or unfair, but either way your response shapes the dynamic.\n\nWhat makes it hard:\n• The instinct to defend, explain, or counter-attack\n• Shame or embarrassment when others are present\n• Uncertainty about whether the criticism is valid\n\nUseful strategies here:\n• Fogging — agree with what might be true, stay calm\n• Negative Assertion — own the mistake cleanly, without over-apologising\n• Negative Inquiry — ask for more detail to clarify and disarm\n\nMindset: You don't have to defend yourself. Receiving criticism calmly is a strength.",
      inputs: [
        { q: '"You\'re always late."', a: '"You might be right — I have been cutting it close lately." (Fogging)' },
        { q: '"That was a really poor decision."', a: '"Yes, that didn\'t go well. I\'ll handle it differently next time." (Negative Assertion)' },
        { q: '"You never listen to anyone."', a: '"What is it specifically that I do that gives you that impression?" (Negative Inquiry)' },
        { q: '"You\'re not good at this."', a: '"You could have a point. What would you suggest I do differently?" (Fogging + Negative Inquiry)' },
        { q: '"That was embarrassing to watch."', a: '"Yeah, that wasn\'t my best moment." (Negative Assertion)' },
        { q: '"You handled that really badly."', a: '"I can see why it looked that way." (Fogging)' },
        { q: '"You were completely wrong about that."', a: '"You\'re right, I was wrong about that." (Negative Assertion)' },
      ]
    },
    {
      name: "Vague or Indirect Criticism",
      description: "Someone criticises you in a way that's hard to pin down — through tone, implication, or deliberately vague language.\n\nThis is often more destabilising than direct criticism because there's nothing concrete to respond to. You're left guessing what they actually mean.\n\nWhat makes it hard:\n• You can't defend against something that was never clearly said\n• Pushing back risks sounding oversensitive\n• The ambiguity can make you doubt yourself\n\nUseful strategies here:\n• Negative Inquiry — the most powerful tool here. Ask them to be specific.\n• Fogging — if there's a grain of truth you can acknowledge\n\nMindset: Clarity is your friend. Asking for specifics isn't weakness — it puts the responsibility back on them.",
      inputs: [
        { q: '"It\'s just... interesting that you did it that way."', a: '"What do you mean by interesting?" (Negative Inquiry)' },
        { q: 'A sigh and an eye roll after you speak', a: '"It seems like something\'s bothering you — what is it?" (Negative Inquiry)' },
        { q: '"Some people just don\'t get it."', a: '"Are you referring to something I\'ve done?" (Negative Inquiry)' },
        { q: '"I just expected more, I suppose."', a: '"What specifically were you expecting?" (Negative Inquiry)' },
        { q: '"Never mind, it doesn\'t matter."', a: '"It seems like it does matter to you — I\'d like to understand." (Negative Inquiry)' },
        { q: '"You know what you did."', a: '"I want to make sure I understand — can you be specific?" (Negative Inquiry)' },
      ]
    },
    {
      name: "Pressure & Pushback",
      description: "Someone keeps pushing after you've said no — repeating their request, escalating, or trying to find a new angle to wear you down.\n\nThis is one of the most common forms of social pressure, and one of the hardest to hold firm against without feeling rude.\n\nWhat makes it hard:\n• The discomfort of the ongoing tension\n• Fear of damaging the relationship\n• The sense that you should have a better reason\n\nUseful strategies here:\n• Broken Record — repeat your position calmly without changing the wording or explaining further. Every explanation gives them a new angle to argue.\n\nMindset: You don't owe anyone a reason. Repeating yourself calmly is not aggressive — it's stable.",
      inputs: [
        { q: '"Come on, just this once."', a: '"I understand — and no, it doesn\'t work for me." (Broken Record)' },
        { q: '"But why not? Give me one good reason."', a: '"I\'m not going to do it." (Broken Record — no explanation needed)' },
        { q: '"Everyone else is fine with it."', a: '"That may be — it still doesn\'t work for me." (Broken Record)' },
        { q: '"You\'re being really difficult right now."', a: '"I can see it feels that way. My answer is still no." (Fogging + Broken Record)' },
        { q: '"I thought you were my friend."', a: '"I am. And I\'m still not going to do it." (Broken Record)' },
        { q: '"Fine, forget it." (said pointedly, expecting you to back down)', a: 'Stay quiet. Let the silence hold. You don\'t need to fill it. (Broken Record — silence is a form of repetition)' },
        { q: '"You always say no to everything."', a: '"I can see why it feels that way sometimes." (Fogging — without giving in)' },
      ]
    },
    {
      name: "Manipulation",
      description: "Someone uses indirect tactics to influence your behaviour — guilt, flattery, false urgency, or appeals to what 'everyone' thinks.\n\nManipulation works by bypassing your rational judgement and targeting emotions instead. Recognising the pattern is the first step.\n\nCommon forms:\n• Guilt tripping — making you feel responsible for their emotions\n• Social proof — 'everyone agrees with me'\n• Flattery before a request\n• Victimhood — making themselves the wronged party\n\nUseful strategies here:\n• Fogging — acknowledge the surface without accepting the implied responsibility\n• Negative Inquiry — ask what they actually want\n• Broken Record — hold your position regardless of the tactic\n\nMindset: You are not responsible for managing other people's emotions. Staying calm is the best counter to manipulation.",
      inputs: [
        { q: '"After everything I\'ve done for you..."', a: '"I appreciate what you\'ve done — and I\'m still not going to do this." (Fogging + Broken Record)' },
        { q: '"Everyone thinks you\'re being unreasonable."', a: '"What is it specifically that you think I should do differently?" (Negative Inquiry)' },
        { q: '"I just feel so hurt that you would say that."', a: '"I can see this is upsetting for you." (Fogging — without taking responsibility)' },
        { q: '"You\'re the only one who can help me."', a: '"What exactly do you need?" (Negative Inquiry — get specific before committing)' },
        { q: '"If you really cared, you\'d do this."', a: '"You might see it that way — I still can\'t do it." (Fogging + Broken Record)' },
        { q: '"I\'m not angry, I\'m just disappointed."', a: '"What is it I\'ve done that disappoints you?" (Negative Inquiry)' },
      ]
    },
    {
      name: "Dismissiveness",
      description: "Someone minimises what you say, feel, or experience — making you feel like your perspective doesn't count.\n\nDismissiveness can be aggressive or casual. It might come from a place of superiority, impatience, or simply not caring. Either way it's a form of invalidation.\n\nCommon forms:\n• 'You're overreacting'\n• Talking over you or ignoring what you said\n• 'That's not a big deal'\n• Laughing at something you said seriously\n\nUseful strategies here:\n• Negative Assertion — own your reaction without shrinking\n• Fogging — agree that your reaction might seem big to them, without apologising for it\n• Negative Inquiry — ask what they think you should do instead\n\nMindset: Your experience is valid. You don't need permission to feel what you feel.",
      inputs: [
        { q: '"You\'re overreacting."', a: '"I may be — this is still how it felt to me." (Fogging + Negative Assertion)' },
        { q: '"That\'s not a big deal, just let it go."', a: '"It is a big deal to me." (Negative Assertion)' },
        { q: '"You\'re too sensitive."', a: '"You might have a point — this still matters to me." (Fogging)' },
        { q: 'Your point is ignored and someone else speaks over you', a: 'Wait for a pause, then: "I\'d like to finish what I was saying." (Broken Record tone — calm and clear)' },
        { q: '"It was just a joke, calm down."', a: '"I heard the joke. It still landed badly for me." (Negative Assertion)' },
        { q: '"Why do you always make everything into such a drama?"', a: '"What is it I said that felt dramatic to you?" (Negative Inquiry)' },
      ]
    },
    {
      name: "Situational Pressure",
      description: "The challenge comes not from what someone says but from the situation itself — a context that creates social pressure to act against your own interests or values.\n\nExamples:\n• A group dynamic where everyone seems to agree except you\n• Being put on the spot in front of others\n• A social situation where saying no feels socially costly\n• Being expected to take sides\n\nUseful strategies here:\n• Broken Record — hold your position despite the social pressure\n• Fogging — acknowledge the awkwardness without changing course\n• Negative Inquiry — ask clarifying questions to slow things down\n\nMindset: Social pressure is real, but it's not an argument. You are allowed to be the only one in the room who disagrees.",
      inputs: [
        { q: 'Everyone in the group has agreed to something you\'re uncomfortable with', a: '"I understand everyone\'s on board — I\'m not able to go along with this one." (Broken Record)' },
        { q: 'You\'re asked for your opinion on the spot in front of others', a: '"I\'d like to think about it before I say anything." (Broken Record — calm deflection)' },
        { q: 'Someone puts you on the spot to take sides in a conflict', a: '"That\'s something they need to work out between themselves." (Broken Record)' },
        { q: 'You feel obliged to stay at an event you want to leave', a: 'Give yourself permission to leave: "I\'m going to head off — it was good to see you." No explanation needed.' },
        { q: 'Someone keeps asking what\'s wrong when you don\'t want to talk about it', a: '"I\'m fine — I just don\'t want to talk about it right now." (Broken Record)' },
        { q: 'You\'re in a meeting where your idea is dismissed without discussion', a: '"I\'d like to come back to that point." (Broken Record — raise it again calmly)' },
      ]
    },
    {
      name: "Feeling Overwhelmed",
      description: "The challenge is internal — you're flooded with emotion and it's hard to respond clearly or calmly.\n\nFeeling overwhelmed in a confrontation is one of the most common reasons assertive behaviour breaks down. You either freeze, over-explain, or react more strongly than you intended.\n\nWhat triggers it:\n• Unexpected criticism\n• Being put on the spot\n• A build-up of smaller incidents\n• Feeling attacked by someone you care about\n\nUseful strategies here:\n• Buy time — it's always acceptable to pause before responding\n• Fogging — a calm, short response reduces emotional escalation\n• Broken Record — a short repeated phrase is easier to deliver when overwhelmed\n\nMindset: You don't have to respond immediately. Pausing is not weakness — it's control.",
      inputs: [
        { q: 'You receive unexpected strong criticism and feel your face flush', a: '"Let me think about that for a moment." — pause before responding. (Buy time)' },
        { q: 'You feel tears coming during a difficult conversation', a: '"I need a moment." — say it and take it. There is no rule that says you have to continue immediately.' },
        { q: 'You feel the urge to over-explain and justify yourself', a: 'Catch it. One short sentence is enough: "You might be right." (Fogging — resist the urge to add more)' },
        { q: 'You feel anger rising and worry you\'ll say something you regret', a: '"I\'m going to come back to this." — remove yourself from the situation briefly. (Delay — intentional)' },
        { q: 'You freeze and can\'t think of anything to say', a: 'Silence is fine. A small nod buys time. You don\'t have to fill every pause.' },
        { q: 'You feel guilty for setting a boundary, even though you know it\'s right', a: 'The guilt is normal — it doesn\'t mean you\'re wrong. Hold the position. (Broken Record — internal)' },
      ]
    }
  ]

};

// ── MINDSET DATA ──────────────────────────────────────────────────────────────
// Used by the Mindset training mode.
// Each mindset strategy has a name, description, and inputs.
// Back of card: self-talk sentence + brief explanation in parentheses.

const mindsetCollections = {

  assertive: [
    {
      name: "I Am My Own Judge",
      description: "The foundational right from Manuel Smith's Bill of Assertive Rights: you have the right to judge your own behaviour, thoughts, and emotions — and to take responsibility for them yourself.\n\nThis is the prime assertive right. All other rights flow from it. No one else gets to be the final authority on what you did, thought, or felt — only you.\n\nWhy it matters: People can only manipulate you to the extent that you let them be the judge of you instead of yourself. When you reclaim that role, manipulation loses its grip.\n\nMindset: I decide what my actions mean. Other people can have opinions — but they don't get the final word.",
      inputs: [
        { q: "Someone tells you that you're wrong to feel the way you do", a: '"I get to decide what I feel. Their opinion doesn\'t override my own judgment of myself." (You remain the final authority on your own experience — not them.)' },
        { q: "You want to make a decision that others might disapprove of", a: '"I am allowed to judge this for myself." (Their approval isn\'t required for the decision to be valid.)' },
        { q: "Someone implies that your choice was objectively the wrong one", a: '"There can be more than one reasonable way to see this — including mine." (Disagreement doesn\'t mean you were wrong; it means you see it differently.)' },
        { q: "You catch yourself seeking reassurance before trusting your own view", a: '"I don\'t need permission to trust my own judgment." (Outsourcing your judgment to others keeps you dependent on their approval.)' },
        { q: "You want to build confidence in trusting your own read of a situation", a: '"My read of this is valid simply because it\'s mine." (Confidence grows by practising self-trust, not by waiting for certainty.)' },
      ]
    },
    {
      name: "I Don't Owe Explanations",
      description: "The second assertive right: you have the right to offer no reasons or excuses for justifying your behaviour.\n\nThis doesn't mean you should never explain yourself — it means explanations are optional, not owed. Choosing to explain is different from feeling obligated to.\n\nWhy it matters: Every justification you offer can become a new angle for someone to argue against. The compulsion to explain often comes from feeling like your choices need external approval to be valid.\n\nMindset: My reasons are mine. I can share them if I want to — but I don't have to.",
      inputs: [
        { q: '"Why not? Just tell me why."', a: '"I don\'t need a reason — it just doesn\'t work for me." (You can decline without converting the decision into a debate.)' },
        { q: "You want to turn down an invitation without a long justification", a: '"I appreciate the invite — I won\'t be able to make it." (A short answer is complete. No elaboration is owed.)' },
        { q: "You feel the urge to justify a decision that's already final", a: '"This is decided — I don\'t need to defend it." (Catching the urge to over-explain is the skill itself.)' },
        { q: "Someone implies you need a 'good enough' reason to say no", a: '"Not wanting to is reason enough." (There is no minimum bar of justification required for a boundary to be valid.)' },
        { q: "You want to decline a request from someone you respect, without guilt", a: '"I can say no and still respect them — explanations aren\'t what makes that true." (Respect and explanation are not the same thing.)' },
      ]
    },
    {
      name: "I'm Not Responsible for Others' Problems",
      description: "The third assertive right: you have the right to judge whether you are responsible for finding solutions to other people's problems.\n\nThis is one of the most liberating rights — and one of the hardest to hold onto, especially with people you care about. Caring about someone is not the same as being responsible for solving what's wrong for them.\n\nWhy it matters: If you don't recognise this right, others can present their problems as if they were automatically yours to fix — and you'll feel obligated to comply.\n\nMindset: I can care without carrying. Their problem can matter to me without becoming my job.",
      inputs: [
        { q: "A friend presents their inconvenience as something you need to fix", a: '"I hear that this is hard for you — and it\'s not something I need to solve." (Empathy doesn\'t require ownership of the solution.)' },
        { q: "Someone implies you're letting them down by not helping", a: '"I can care about this without taking it on myself." (Feeling guilty doesn\'t mean you\'re actually obligated.)' },
        { q: "You want to support someone without absorbing their problem as your own", a: '"I\'m here for you — and this is still yours to carry." (Support and ownership are two different things.)' },
        { q: "You're asked to fix a problem you didn't create and don't have the means to solve", a: '"I understand this is difficult — it\'s not mine to fix." (Recognising the limits of your responsibility protects you from unsustainable obligations.)' },
        { q: "You feel guilty for prioritising your own time over someone else's request", a: '"My time is mine to allocate." (Guilt is a feeling, not evidence that you did something wrong.)' },
      ]
    },
    {
      name: "I'm Allowed to Change My Mind",
      description: "The fourth assertive right: you have the right to change your mind.\n\nYou are not bound forever by a past decision, especially if new information or feelings have shifted things. Consistency for its own sake isn't a virtue — it can become a trap.\n\nWhy it matters: People sometimes use your past commitments against you, as if changing your mind were a character flaw. It isn't.\n\nMindset: The person who decided this isn't obligated to be identical to the person I am now.",
      inputs: [
        { q: '"But you said you wanted to do this."', a: '"I did — and I\'ve changed my mind since then." (A past decision doesn\'t bind your present judgment.)' },
        { q: "You agreed to something and now realise it doesn't feel right", a: '"It\'s okay that this isn\'t what I want anymore." (Recognising a shift in feeling is information, not a failure.)' },
        { q: "Someone uses your earlier agreement to pressure you into following through", a: '"I understand I said yes before — I\'m saying no now." (Consistency isn\'t owed when circumstances or feelings have changed.)' },
        { q: "You want permission to reconsider a major life decision", a: '"I\'m allowed to reconsider this, even publicly." (Changing your mind in view of others doesn\'t make it less valid.)' },
        { q: "You feel embarrassed about reversing a stated opinion", a: '"Updating my view is a sign of thinking, not weakness." (Rigid consistency is often mistaken for integrity — it isn\'t the same thing.)' },
      ]
    },
    {
      name: "I'm Allowed to Make Mistakes",
      description: "The fifth assertive right, and the mindset underlying Negative Assertion: you have the right to make mistakes — and to be responsible for them, without collapsing into shame.\n\nThis is the belief that makes Negative Assertion possible. If you secretly believe mistakes mean you're fundamentally flawed, owning them calmly will always feel threatening.\n\nWhy it matters: A mistake is a single event, not a verdict on your worth. Acknowledging it cleanly — without spiralling into apology or self-attack — requires believing this first.\n\nMindset: I can be wrong about something and still be okay. Owning a mistake is strength, not damage.",
      inputs: [
        { q: "You're pointed out for something you got wrong", a: '"Yes, that was a mistake. I can own that and move on." (Owning it fully, without minimising or spiralling, is what makes Negative Assertion calm rather than defensive.)' },
        { q: "You feel a wave of shame after making an error", a: '"Being wrong doesn\'t make me bad at this — it makes me human." (Shame treats the mistake as identity; this mindset treats it as an event.)' },
        { q: "You want to apologise without over-apologising", a: '"One honest acknowledgment is enough." (Excessive apology often comes from believing the mistake needs more defending than it does.)' },
        { q: "Someone seems to expect you to be devastated by your error", a: '"I\'m not going to perform more guilt than I actually feel." (You don\'t owe anyone a dramatic reaction to validate their criticism.)' },
        { q: "You're preparing to try something you might not be good at yet", a: '"I\'m allowed to be bad at this while I learn." (Permission to be imperfect is what makes growth possible.)' },
      ]
    },
    {
      name: "I Don't Need to Know Everything",
      description: "The sixth assertive right: you have the right to say \"I don't know.\"\n\nThere's social pressure to always have an answer, an opinion, or a plan. This right gives you permission to be genuinely uncertain without faking confidence you don't have.\n\nWhy it matters: Pretending to know things you don't creates pressure and sets you up for being caught out. Honesty about uncertainty is more stable in the long run.\n\nMindset: Not knowing is a legitimate answer. I don't need to perform certainty I don't have.",
      inputs: [
        { q: "You're asked a question you genuinely don't have an answer to", a: '"I don\'t know — I haven\'t thought that through yet." (A direct admission is more stable than an improvised guess.)' },
        { q: "You feel pressure to have an opinion on something you haven't considered", a: '"I don\'t have a view on this yet, and that\'s fine." (You\'re not required to have instant opinions on everything.)' },
        { q: "Someone expects you to know the outcome of an uncertain situation", a: '"I genuinely don\'t know how this will go." (Certainty you don\'t have isn\'t worth faking.)' },
        { q: "You're put on the spot in a meeting and don't know the answer", a: '"I\'ll need to look into that before I can answer properly." (This is a complete, professional response — not a failure.)' },
        { q: "You want to stop pretending to understand something to avoid looking uninformed", a: '"I\'d rather ask than fake understanding." (Asking protects you from bigger problems down the line.)' },
      ]
    },
    {
      name: "Criticism Can't Threaten Me",
      description: "The core mindset behind Fogging: criticism is just information — it doesn't have power over you unless you treat it as a verdict that must be fought or fled.\n\nFogging only works if you actually believe this. If you secretly think every criticism is a threat to defend against, your fogging responses will sound hollow or sarcastic instead of calm.\n\nWhy it matters: When you stop treating criticism as an attack, you stop needing to defend. Like fog, it passes through you because there's nothing rigid for it to hit.\n\nMindset: Criticism is just someone's perspective. I don't need to defend against a perspective.",
      inputs: [
        { q: "Someone delivers harsh criticism in front of others", a: '"This is their perspective — it doesn\'t require my defence." (Treating it as a perspective rather than a verdict removes the urge to fight back.)' },
        { q: "You feel your guard going up as soon as someone starts criticising you", a: '"I can let this pass through without needing to block it." (Resistance is what makes criticism feel like an attack — softness lets it pass.)' },
        { q: "You're criticised by someone whose opinion you respect", a: '"Even their view is just one perspective, not a fact about me." (Respecting someone doesn\'t mean their criticism becomes absolute truth.)' },
        { q: "You notice yourself rehearsing a defence before someone has even finished speaking", a: '"I don\'t need a defence ready. There\'s nothing to defend against yet." (Preparing to fight assumes the criticism is an attack before it\'s even landed.)' },
        { q: "You want to stay calm while receiving feedback you disagree with", a: '"I can hear this calmly, whether or not I agree." (Calm listening doesn\'t mean agreement — it just means no defensiveness.)' },
      ]
    },
    {
      name: "I'm Not Afraid of More Criticism",
      description: "The core mindset behind Negative Inquiry: you can handle hearing more — even if the criticism gets more specific or more uncomfortable.\n\nNegative Inquiry requires genuinely wanting to know more, not just performing curiosity while secretly hoping the conversation ends. If you're afraid of what more detail might reveal, the technique falls apart.\n\nWhy it matters: People often avoid asking for specifics because they fear what they'll hear. But avoiding the detail doesn't make the underlying issue go away — it just keeps it vague and unresolved.\n\nMindset: I can survive hearing exactly what they mean. More information helps me, it doesn't hurt me.",
      inputs: [
        { q: "Someone gives you vague criticism and you feel the urge to let it drop", a: '"I\'d rather know exactly what they mean than guess." (Avoiding detail leaves the criticism vague and unresolved — asking resolves it.)' },
        { q: "You're nervous about what asking \"what do you mean?\" might reveal", a: '"Whatever they say, I can handle hearing it." (The fear of detail is usually worse than the detail itself.)' },
        { q: "Someone seems reluctant to be more specific about their criticism", a: '"I genuinely want to understand, not just move past this." (Real curiosity, not performance, is what makes Negative Inquiry land.)' },
        { q: "You feel your stomach tighten as you ask for more feedback", a: '"This discomfort is temporary, and the clarity is worth it." (The anticipation is usually harder than the actual answer.)' },
        { q: "You're worried that asking for specifics will make the criticism feel more real", a: '"Specifics make it solvable, not bigger." (Vague criticism feels larger because it\'s undefined — detail actually shrinks it.)' },
      ]
    },
    {
      name: "I Don't Need to Convince Anyone",
      description: "The core mindset behind Broken Record: your position doesn't need to win an argument to be valid. You're not trying to convince — you're holding steady.\n\nThe instinct to explain, argue, or persuade comes from believing you need the other person's agreement for your boundary to count. Broken Record only stays calm if you let go of that need.\n\nWhy it matters: The moment you try to convince someone, you've entered a debate — and debates can be lost. Holding a position doesn't require winning anyone over.\n\nMindset: My position doesn't need their agreement to be valid. I'm not trying to win — I'm just staying steady.",
      inputs: [
        { q: "Someone keeps presenting new arguments to change your mind", a: '"I don\'t need to win this — I just need to stay where I am." (Engaging each new argument turns this into a debate you don\'t need to have.)' },
        { q: "You feel the urge to explain your reasoning one more time, hoping it will finally land", a: '"They don\'t have to agree with me for my answer to stand." (One more explanation rarely changes the outcome — it just prolongs the pressure.)' },
        { q: "Someone seems frustrated that you won't engage with their counterarguments", a: '"Their frustration doesn\'t mean I\'m wrong to hold this." (Frustration is information about their reaction, not about the validity of your position.)' },
        { q: "You catch yourself preparing a more persuasive version of your answer", a: '"The simple version is enough. I don\'t need a better argument." (Reaching for persuasion means you\'ve started trying to win instead of just holding steady.)' },
        { q: "You want to end a repetitive disagreement without losing your composure", a: '"I can repeat myself calmly for as long as this takes." (Patience with repetition is the entire technique — there\'s no need to escalate.)' },
      ]
    }
  ]

};
