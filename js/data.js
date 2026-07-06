// data.js — All collection and strategy content
// To add a new collection: add a key here and a card in index.html

const collections = {

  assertive: [
    {
      name: "Fogging",
      description: "Fogging means responding to criticism by calmly agreeing with what might be true — without defending yourself, explaining, or getting upset.\n\nYou are like fog: criticism hits nothing solid, it just passes through. This signals confidence and unshakeable calm.\n\nTypical fogging responses:\n• \"You might be right about that.\"\n• \"Yes, that could be.\"\n• \"You may have a point there.\"\n\nThree types of fogging:\n1. Agree with what might be true — \"You're probably right.\"\n2. Agree with the possibility — \"It's possible that I…\"\n3. Agree with the logic — \"I can see why you think so.\"\n\nMindset: You don't need to defend yourself. Agreeing is not giving up — it's strength.",
      inputs: [
        { q: "Someone criticises your driving",          a: '"You might be right about that."',      bundle: 'default' },
        { q: "Someone says you are too sensitive",       a: '"You could have a point there."',        bundle: 'default' },
        { q: "Someone calls you selfish for saying no",  a: '"I understand it might look that way."',  bundle: 'default' },
        { q: "Someone mocks something you made or said", a: '"Yeah, that probably wasn\'t my best."', bundle: 'default' },
        { q: "A colleague says your idea won\'t work",   a: '"You might be right — what would you suggest instead?"', bundle: 'test' },
        { q: "Someone says you\'re not experienced enough", a: '"That could be fair. I\'m still learning."', bundle: 'test' },
        { q: "Someone implies you\'re being naive",      a: '"It\'s possible I\'m missing something. What do you see?"', bundle: 'test' },
        { q: "Someone says your taste is questionable",  a: '"You might have a point there."', bundle: 'test' },
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
  ],

  conversationaldepth: [
    {
      name: "Storytelling",
      description: "A good story needs more than a memory — it needs structure, timing, and feeling. Storytelling as a communication skill means being able to pull out relevant stories spontaneously and deliver them in a way that engages the listener.\n\nStructure:\n1. Hook — open with something that sparks curiosity: \"You know what happened to me?\"\n2. Context — set the scene briefly: who, where, when\n3. Conflict / Twist — what makes it interesting — the unexpected or funny part\n4. Resolution — what happened in the end\n5. Point (optional) — sometimes none is needed\n\nWhat makes a story engaging:\n• Specific details — not \"someone\" but \"my colleague Marcus\"\n• Vary the pace — slow down at the dramatic part\n• Show how you felt, not just what happened\n• A clear twist or point\n\nMindset: Tell it to share an experience — not to impress.",
      inputs: [
        { q: "Last time you hurt yourself",             a: "Tell it with build-up and humour — hook, context, twist, resolution." },
        { q: "Last time you had a really good time",    a: "Tell it with energy and warmth — include one specific detail that brings it to life." },
        { q: "Something funny that happened recently",  a: "Build toward the punchline — time the payoff, don't rush it." },
        { q: "A time you were embarrassed",             a: "Use self-distance and humour — own it, don't hide it." },
        { q: "A time you were proud of something",     a: "Tell it with quiet confidence — specific detail, no need to oversell." },
        { q: "A childhood memory",                     a: "Set the scene with one vivid detail — make the listener see it." },
        { q: "Something unexpected that happened",     a: "Open with the hook, build the tension — then land it." },
      ]
    },
    {
      name: "Deep Questions",
      description: "Deep questions move a conversation from facts to experience, from events to meaning. They show genuine interest and create space for the other person to share more of who they actually are.\n\nFour types:\n• Experience questions — \"How did that feel?\" / \"What were you thinking in that moment?\"\n• Meaning questions — \"What does that mean to you?\" / \"What was the most important part?\"\n• Motivation questions — \"What made you want to do that?\" / \"Why that specifically?\"\n• Hypothetical — \"If you could do it again, what would you do differently?\"\n\nThe technique:\n• Start with a simple question → listen → follow up deeper\n• Use pauses — most people go deeper if you don't fill the silence\n• One question at a time — not an interrogation\n\nMindset: Genuinely curious — not looking for a clever question.",
      inputs: [
        { q: "Someone gives a surface answer",                  a: '"What made you choose that?" — go one level deeper.' },
        { q: "Someone shares something interesting",            a: '"What struck you most about it?" — invite more.' },
        { q: "You want to move from facts to feelings",         a: "They describe an event → \"How did that actually feel?\"" },
        { q: "Someone says something surprising",              a: '"Wait — what do you mean by that?" — open it up.' },
        { q: "You want to understand what drives someone",      a: '"What is it that motivates you in that?"' },
        { q: "The conversation is staying too surface level",   a: '"Can I ask something a bit more personal?"' },
      ]
    },
    {
      name: "Sharing Opinions",
      description: "Sharing opinions creates personality and makes conversations alive. Many avoid it to avoid conflict — but opinions are what make you real to others.\n\nSix ways to share:\n1. Direct and clear — \"I actually think X is better than Y, and here's why.\"\n2. Spontaneous — \"You know what I think? I actually believe that...\"\n3. With humour — \"Controversial opinion: [opinion]. I'm ready for the consequences.\"\n4. Soft and open — \"I'm not sure everyone agrees, but I think...\"\n5. Playfully provocative — \"I actually think [unexpected view] — and I'll defend it.\"\n6. With curiosity — share your view and immediately invite theirs\n\nWhat makes it work:\n• Specificity — not \"it was good\" but \"what I liked most was X because...\"\n• Authenticity — share what you actually think\n• Openness — share without demanding agreement\n\nMindset: My opinions are part of who I am — they're worth sharing.",
      inputs: [
        { q: "Share an opinion on a current event",               a: "Direct and clear, without lecturing — state your view and invite theirs." },
        { q: "Share an opinion on something controversial but light", a: '"Controversial opinion: [opinion]. Fight me." — warm tone, open to pushback.' },
        { q: "Share an opinion on food, music or film",           a: "Specific and genuine — what do you actually think, and why?" },
        { q: "Share something you feel strongly about",           a: "Share with conviction, calmly — without shutting the other person down." },
        { q: "Share a spontaneous opinion mid-conversation",      a: '"You know what, I actually think..." — natural, unplanned.' },
        { q: "Share an opinion with humour",                     a: '"Controversial opinion: [opinion]. I\'m ready to defend it."' },
        { q: "Share an opinion seriously and directly",           a: "Calm, clear, no hedging — just say what you think." },
      ]
    },
    {
      name: "Sharing Emotions",
      description: "Many people talk about what happens but avoid saying how they actually feel. Sharing emotions creates depth and connection — and it doesn't have to be a big thing.\n\nThree levels:\n• Light — \"I'm actually pretty pleased with how that went.\"\n• Mid — \"This makes me a bit nervous, if I'm honest.\"\n• Deeper — \"That affected me more than I expected it to.\"\n\nWhat makes it authentic:\n• Specificity — not \"I feel fine\" but \"I actually felt proud\"\n• Timing — share it when it's relevant, not forced\n• No need for a reaction — you share, you don't demand a response\n\nMindset: Sharing how I feel is not weakness — it's connection.",
      inputs: [
        { q: "Share that you felt proud of something",   a: '"I\'m actually pretty proud of how that went — better than I expected."' },
        { q: "Share that you felt disappointed",         a: '"That was a bit of a letdown, if I\'m honest."' },
        { q: "Share that you felt excited",              a: '"I\'m actually really looking forward to it."' },
        { q: "Share that you felt frustrated",           a: '"It\'s frustrating — I don\'t understand why it keeps happening."' },
        { q: "Share that you felt grateful for someone", a: '"I\'m actually grateful you said that."' },
        { q: "Share that you felt nervous",              a: '"I was more nervous going into that than I usually am."' },
      ]
    }
  ],

  compliments: [
    {
      name: "Giving Compliments",
      description: "Giving compliments is one of the most fundamental social strategies. It can happen naturally and genuinely — but the skill also trains the ability to give compliments in situations where it's not obvious: when something has gone wrong, when you want something, or when you want to soften a tense atmosphere.\n\nWhat to compliment:\n• Appearance — clothes, style, expression\n• Competence — work, craft, sport, music\n• Personality — humour, warmth, patience, courage\n• Actions — something they did, a decision they made\n• Way of being — how they handle difficult situations\n\nThree types:\n1. Natural — something positive happens and you express it genuinely\n2. Strategic — you want to achieve something, soften the mood, or open a conversation\n3. Repairing — something has gone wrong; the compliment creates connection before the issue is addressed\n\nMindset: I'm actively looking for something positive to lift up. A genuine compliment opens doors that arguments never can.",
      inputs: [
        { q: "Someone does something impressive",           a: "Specific and genuine — name what they did, not just that it was good." },
        { q: "Someone looks good today",                   a: "Give a specific compliment on their appearance — one detail is more powerful than a general statement." },
        { q: "Someone handled a difficult situation well",  a: "Name what they did: \"The way you stayed calm when that happened — that was impressive.\"" },
        { q: "Someone made something — food, art, work",    a: "Be specific — what exactly was good, and why?" },
        { q: "You want to soften the mood before something difficult", a: "Start with a genuine compliment, then address the issue — the order matters." },
        { q: "Someone has a quality you genuinely admire",  a: "Name the quality directly: \"I've always admired how you...\"" },
        { q: "Someone does something bad but also something right", a: "Find something genuine to lift even in a difficult moment — it creates contact." },
      ]
    },
    {
      name: "Accepting Compliments",
      description: "Many people don't know how to receive a compliment. Common traps: dismissing it (\"No no, it was nothing\"), overdoing the thanks, or going awkwardly silent. The skill is to receive with confidence and warmth.\n\nThree ways to receive:\n1. Warm and genuine — \"Thank you, that means a lot.\" Simple, sincere.\n2. Playful and confident — \"Thanks — I see you have good taste.\" / \"Good that you noticed.\"\n3. Curious and reciprocal — \"Thank you! What made you think of that?\"\n\nWhat to avoid:\n• Dismissing: \"No but it was nothing special...\"\n• Overdoing: \"Oh my god thank you so much really!!\"\n• Going stiff: silence or a nervous smile without responding\n\nMindset: I deserve to receive this. Receiving well is a gift back to the person giving it.",
      inputs: [
        { q: "Someone says you look great today",           a: "Receive with warmth or lightness — not \"no no it's nothing\"." },
        { q: "Someone compliments your work",              a: "Receive genuinely — maybe add something real about the process." },
        { q: "Someone says you handled something well",    a: '"Thank you — that was important to me." — confirm without diminishing.' },
        { q: "Someone compliments your sense of humour",  a: "Receive playfully — it fits the tone." },
        { q: "Someone says you are talented",             a: "Receive calmly without dismissing or overdoing it." },
      ]
    },
    {
      name: "Self Disclosure",
      description: "Self disclosure means sharing your actual emotional reaction to a situation — openly and without blaming the other person. It's not complaining or defending — it's communicating what's actually happening in you.\n\nWhy it works: if you say \"you're being unfair\" the other person can dispute it. If you say \"I feel treated unfairly\" — that's a fact about you. It can't be disputed.\n\nStructure:\n1. Feeling — \"I feel...\" / \"This makes me...\"\n2. Situation — \"...when you say X\" / \"...in situations like this\"\n3. Optional wish — \"I'd like...\"\n\nExamples:\n• \"I feel pressured when you keep asking. I've said what I think.\"\n• \"That makes me sad to hear. I thought we were on the same page.\"\n• \"I feel torn — I want to help but this doesn't work for me right now.\"\n\nMindset: I-statements disarm. You-statements escalate.",
      inputs: [
        { q: "Someone criticises you and you feel hurt",       a: '"I feel hurt by what you said." — feeling, not counterattack.' },
        { q: "Someone is pressuring you",                      a: '"I feel pressured right now and that doesn\'t work for me."' },
        { q: "You want to de-escalate a conflict",            a: "Share the feeling without accusing — open up instead of closing down." },
        { q: "You feel defensive but want to stay open",      a: '"I notice I\'m getting defensive — I want to understand what you mean."' },
        { q: "You feel torn between helping and your own limits", a: '"I want to help, but I feel like this doesn\'t work for me right now."' },
        { q: "Someone makes a demand you don't want to meet", a: '"I feel conflicted about this — can I explain where I\'m at?"' },
      ]
    }
  ],

  selfhumour: [
    {
      name: "Self Humour",
      description: "Self humour means joking about yourself in a way that shows self-distance — you see your own flaws and don't take them too seriously. It's not self-criticism or self-contempt. It's a sign of security: you don't need to be perfect to be okay.\n\nThe difference:\n• Self-criticism: \"I'm always so stupid, I can't do anything right.\"\n• Self humour: \"Yeah, that wasn't exactly my sharpest moment — but I'm consistent.\"\n\nFour techniques:\n1. Acknowledge with humour — \"Yes, that's true. I'm not exactly an expert on that.\"\n2. Exaggerate the flaw — \"That was classic me — I'm probably the worst person in the world at this.\"\n3. Accept with dignity — \"Yes, it's a fact. I've made peace with it.\"\n4. Turn it into charm — \"It's one of my more interesting qualities.\"\n\nMindset: I don't need to be perfect to be okay. Self-distance is strength, not weakness.",
      inputs: [
        { q: "You make a mistake in front of others",          a: "Acknowledge it with a joke, move on — don't dwell." },
        { q: "You say something awkward",                     a: '"Yeah, that was awkward. You all witnessed that." — own it with humour.' },
        { q: "You trip or do something clumsy",               a: '"Elegant as always." — brief, warm, move on.' },
        { q: "You are bad at something someone else is good at", a: '"Yeah, that\'s not exactly my strongest area — we can agree on that."' },
        { q: "You say something embarrassing",                a: "Accept it with a warm comment about yourself — don't try to erase it." },
        { q: "Someone teases you about a flaw",               a: "Receive it with humour instead of defending — maybe exaggerate it even more." },
      ]
    },
    {
      name: "Jokingly Bragging",
      description: "Jokingly bragging means exaggerating your own qualities or achievements in a way that's obviously a joke — the opposite of self-deprecation, but just as playful.\n\nWhat makes it work:\n• The exaggeration is so obvious it's clearly play\n• Warm tone — not actual arrogance\n• Quick and light — one line, move on\n• Best when combined with self-humour (brag about one thing, joke about another)\n\nExamples:\n• \"I woke up like this. Some people are just gifted.\"\n• \"That was excellent — even by my standards.\"\n• \"I don't want to brag, but... actually, I do.\"\n\nMindset: Play and lightness — not actual superiority.",
      inputs: [
        { q: "You do something well",                          a: '"That was excellent — even by my standards."' },
        { q: "Someone notices something good about you",       a: '"I know. It\'s a gift, really."' },
        { q: "You want to brag about something minor",         a: '"I don\'t want to brag, but... actually, I do."' },
        { q: "Something goes unexpectedly right",              a: '"I planned it that way."' },
        { q: "You look good today",                           a: '"I woke up like this. Some people are just gifted."' },
      ]
    },
    {
      name: "Push-Pull",
      description: "Push-pull means alternating between pulling someone in (warmth, interest, compliment) and pushing them back (light challenge, tease, withdrawal of attention). The rhythm creates tension and keeps the interaction alive.\n\nWhy it works:\nConstant approval is predictable. Constant challenge is exhausting. The alternation creates a dynamic where the other person stays engaged and curious.\n\nExamples:\n• \"You're actually really interesting — I wasn't expecting that.\" (pull → implied push)\n• \"That's a good point.\" [pause] \"I'm still not completely convinced.\" (pull → push)\n• \"I like you.\" \"You're a lot to handle sometimes.\" (pull → push)\n\nKey principle:\n• Push and pull in the same sentence or nearby — not hours apart\n• Warm tone throughout — this is play, not real rejection\n• Don't explain the technique\n\nMindset: Genuine reactions create more tension than performed ones.",
      inputs: [
        { q: "Someone says something impressive",              a: '"That was actually good." [brief pause] "I\'m still thinking about whether I agree though."' },
        { q: "Someone seems very interested in you",           a: "Show interest, then pull back slightly — don't match their energy fully." },
        { q: "You want to create playful tension",            a: '"I like you." — then let a beat pass without filling it.' },
        { q: "Someone gives you a lot of attention",           a: "Receive it warmly, then redirect — don't become the pursuer." },
        { q: "Someone makes a good point",                    a: '"Fair point." [pause] "I\'m not totally convinced yet though."' },
      ]
    },
    {
      name: "Joke About My Flaws",
      description: "Joking about your own flaws in social situations — a specific application of self humour that works especially well in group settings or when you're first getting to know someone.\n\nThe principle: if you name your flaw first, nobody else can use it against you. And when you frame it with lightness, it becomes a feature rather than a weakness.\n\nExamples:\n• \"I'm the kind of person who [flaw]. You've been warned.\"\n• \"I know, I know — it's a character flaw. I'm working on it.\"\n• \"Classic me.\"\n\nMindset: Naming my own flaws with warmth disarms them. I own it before anyone else can.",
      inputs: [
        { q: "You arrive somewhere and you're late",           a: '"Classic me — I\'ve been late to everything since 1994."' },
        { q: "You forget something obvious",                  a: '"I know, I know. It\'s a character flaw. I\'m working on it."' },
        { q: "You make the same mistake as usual",            a: '"You\'d think I\'d have learned by now. You\'d be wrong."' },
        { q: "Someone points out a recurring weakness",       a: '"Yes. I\'m fully aware. I\'ve made peace with it."' },
        { q: "You do something uncharacteristically well",    a: '"I surprise myself sometimes."' },
      ]
    }
  ],

  startingconnecting: [
    {
      name: "Starting Conversations",
      description: "Most people wait for conversations to start themselves. Taking the initiative is a skill — and it's about having a repertoire of natural openers for different situations.\n\nKey opener types:\n1. Simple greeting — \"Hi, how are you?\"\n2. Introduce yourself — \"I don't think we've met — I'm...\"\n3. Specific compliment — \"I like your jacket.\"\n4. Comment on the situation — \"It's really packed in here today.\"\n5. Question about the situation — \"Is this your first time here?\"\n6. Shared experience — \"That was a tough presentation, wasn't it?\"\n7. Open question — \"What do you do when you're not here?\"\n8. Observation about them — \"You look like someone who's done this before.\"\n9. Humour — \"This queue is probably faster if we walk.\"\n10. Framing — \"I'd kick myself if I didn't come say hi.\"\n\nMindset: Simple openers work best — I don't need to be clever, just natural.",
      inputs: [
        { q: "Start a conversation with a stranger at a social event",    a: "Situational opener: comment on something you both notice — then ask a question." },
        { q: "Start a conversation with someone you've met briefly before", a: '"I think we\'ve met once — I\'m [name]. How do you know [host]?"' },
        { q: "Start a conversation in a queue or waiting situation",       a: "Light observation about the shared situation — keep it brief and warm." },
        { q: "Start a conversation with someone interesting",             a: "Observation about them + natural follow-up: \"You look like someone who...\"" },
        { q: "You're new somewhere and want to connect",                  a: '"I\'m new here — how are you?" / introduce yourself directly.' },
        { q: "Re-engage someone you haven't spoken to in a while",        a: "Reference something relevant to your history — then update each other." },
        { q: "You want to start a conversation but feel hesitant",        a: '"I\'d kick myself if I didn\'t come say hi." — frame it honestly, then go.' },
        { q: "Someone gives a short answer to your opener",               a: "Try a different angle — share something about yourself to invite them in." },
      ]
    },
    {
      name: "Small Talk Flow",
      description: "Small talk isn't meaningless — it's the social glue that creates safety and opens the door to deeper conversations. The skill is navigating surface conversations with ease: keeping things flowing, switching topics naturally, and reading when someone is engaged.\n\nCore principles:\n• Build on what they say — every answer contains a new thread\n• Share back — small talk is mutual, not an interview\n• Read the energy — short answers mean try a different topic\n• Switch topics smoothly — use bridges: \"That reminds me of...\" / \"Completely different topic but...\"\n• End well — \"This was great to talk to you\" + a natural close\n\nTopic progression:\nThe situation you're in → Work → Interests → Light opinions and preferences\n\nMindset: Small talk creates safety — I build on what they say, there's always a thread.",
      inputs: [
        { q: "You're talking with someone you just met at a party",      a: "Start with the situation, then build on one detail they mention." },
        { q: "You're in a work break room with a colleague you don't know well", a: "Shared context (work) is the natural starting point — then move somewhere lighter." },
        { q: "There's an awkward silence",                               a: "Comment on the situation you're both in — it's always available." },
        { q: "A conversation has stalled",                               a: '"Completely different topic — what do you do when you\'re not working?"' },
        { q: "Someone gives short answers",                              a: "Try a different topic, or share something about yourself to invite them in." },
        { q: "You want to move to something more interesting",           a: '"This is a basic question but — what are you actually good at?"' },
      ]
    },
    {
      name: "Finding Common Ground",
      description: "Common ground is the fastest way to build rapport. It's not about having the same interests — it's about finding overlaps in experiences, reactions, values or perspectives and making them visible in the conversation.\n\nFive types of common ground:\n1. Experiences — you've been in similar situations\n2. Reactions — you respond the same way to something\n3. Values — you care about similar things\n4. Interests — you like the same things\n5. Resistance — you dislike the same things (powerful, use carefully)\n\nKey techniques:\n• Relate back — \"That's exactly like when I...\"\n• Me too moment — \"Wait, you too? I thought I was the only one.\"\n• Common reaction — \"I know exactly what you mean — it's completely absurd.\"\n• Make it explicit — \"It's funny, we seem to think the same way about that.\"\n\nMindset: There's always something in common — I look for it actively.",
      inputs: [
        { q: "Someone mentions their job",                                a: "Find one aspect you can relate to — even tangentially — and lift it." },
        { q: "Someone has a very different background from you",          a: "Look for a common reaction or value rather than a common experience." },
        { q: "Someone shares an interest you don't have",                a: '"I don\'t know much about it — but that thing about X sounds familiar actually."' },
        { q: "You want to build rapport quickly",                         a: "Scan what they say for any overlap, name the first one you find explicitly." },
        { q: "You notice something you have in common",                  a: '"Wait — you too? I thought I was the only one." — make it explicit.' },
        { q: "Someone shares an experience similar to yours",            a: '"I know exactly what you mean — I had exactly that feeling when..."' },
      ]
    },
    {
      name: "Mirroring & Paraphrasing",
      description: "Mirroring and paraphrasing are techniques for showing you've genuinely listened — and for inviting the other person to say more. Used by therapists and negotiators alike, they're among the most powerful tools for building connection.\n\nThree levels:\n1. Keyword mirroring — repeat the last word or a key word as a question: \"Stressful?\" / \"Three years?\"\n2. Paraphrasing — restate what they said in your own words: \"So if I understand right, you mean...\"\n3. Emotion reflection — reflect the feeling behind the words: \"That sounds really frustrating.\"\n\nWhy it works:\n• Shows you actually listened\n• Invites them to confirm, correct, or go deeper\n• Takes pressure off you to say something clever\n• Creates a space where they feel heard\n\nAvoid: parrot-mirroring (repeating word for word), interrupting mid-sentence, interpreting too far.\n\nMindset: My job right now is to understand — not to respond.",
      inputs: [
        { q: "Someone tells you about their weekend",              a: "Pick up a keyword or feeling: \"Sounds like it was a bit chaotic?\"" },
        { q: "Someone shares something they're excited about",     a: "Match the energy: \"Wait — three years you've been doing this?\"" },
        { q: "Someone describes a problem they had",               a: '"That sounds really frustrating." — emotion reflection, not advice.' },
        { q: "You want to deepen a surface conversation",          a: '"So if I get it right, it\'s not X that bothers you, it\'s more Y?"' },
        { q: "Someone gives a one-word answer",                    a: "Keyword mirror: they say \"fine\" → \"Just fine?\"" },
        { q: "You want to show you really heard someone",          a: '"If I understand right, what you\'re actually saying is..." — then invite correction.' },
      ]
    }
  ],

  listeningresponding: [
    {
      name: "Listening",
      description: "Active listening is one of the most underrated social skills. Most people listen to respond — not to understand. The skill is to actually hear what the other person is saying, show it, and respond to what they actually meant.\n\nSeven components:\n1. Presence — phone away, eye contact, body toward them\n2. Non-verbal signals — nods, \"mm\", open expression\n3. Don't interrupt — let them finish before responding\n4. Acknowledge — \"I hear you\" / \"That sounds tough\"\n5. Follow-up question — \"What happened then?\" / \"What did you mean by X?\"\n6. Summarise — \"If I understand right, you mean...\"\n7. Listen for the feeling, not just the facts\n\nAvoid: preparing your reply while they talk / interrupting with your own experiences / minimising / giving advice without being asked.\n\nMindset: I listen to understand — not to respond.",
      inputs: [
        { q: "Someone is telling a long story",                       a: "Stay in it — nod, follow-up questions at natural pauses, don't rush them." },
        { q: "Someone is explaining something complicated",           a: '"If I understand right, you mean..." — summarise to confirm.' },
        { q: "Someone is sharing something emotionally difficult",    a: "Presence and acknowledgement first — not solutions." },
        { q: "Someone is giving you feedback",                        a: "Listen all the way through without defending — understand first." },
        { q: "Someone is describing a problem they have",             a: '"Do you want me to listen, or would you like some thoughts?" — ask first.' },
        { q: "You notice your mind wandering while someone talks",    a: '"Sorry — can you say that again?" — notice it, reconnect honestly.' },
        { q: "Someone is sharing something you disagree with",        a: "Listen all the way and understand their point fully before responding." },
      ]
    },
    {
      name: "Agreeing",
      description: "Agreeing is more than saying \"yes\" or \"exactly\". It's a way to create connection, show you're listening, and build on what the other person said. But reflexive or false agreement loses its power — it has to feel real.\n\nSix ways to agree:\n1. Simple and genuine — \"Yes, that's really true.\"\n2. Enthusiastic — \"Exactly! That's exactly what I think.\"\n3. With recognition — \"Yes, and I felt exactly the same when...\"\n4. With nuance — \"Yes, largely — though I'd add...\"\n5. Build on it — \"Yes, and that makes me think...\"\n6. Validate the feeling — \"I completely understand that — it makes total sense you'd feel that way.\"\n\nAvoid: reflexive agreement without listening / agreeing with things you don't believe / agreeing then immediately changing topic.\n\nMindset: Genuine agreement builds trust. Empty agreement does the opposite.",
      inputs: [
        { q: "Someone shares an opinion you genuinely agree with",      a: '"I completely agree — and I\'ve been thinking about that for a while."' },
        { q: "Someone describes an experience similar to yours",        a: '"Yes, and I felt exactly the same when..." — relate back.' },
        { q: "Someone makes a point you hadn't considered",             a: '"That\'s a good way to see it — I hadn\'t thought of it that way."' },
        { q: "You want to build on what someone said",                  a: '"Yes, and that makes me think..." — agree and extend.' },
        { q: "Someone expresses a feeling you recognise",              a: '"I completely get that — it makes total sense you\'d feel that way."' },
        { q: "You agree but want to add nuance",                       a: '"Yes, largely — though I\'d add one thing..."' },
      ]
    },
    {
      name: "Disagree",
      description: "Disagreeing is often harder than agreeing — fear of conflict makes many people go along with things against their will. The skill is to actually say what you think when it's different — in the right way for the situation.\n\nSix ways to disagree:\n1. Direct and clear — \"I actually don't agree with that. I think...\"\n2. Soft but firm — \"I see it a bit differently — for me it's more about...\"\n3. Via question — \"Are you sure about that? I thought it was more...\"\n4. With respect for their view — \"I understand why you think that — and still I think...\"\n5. Playful — \"No, that's actually completely wrong. And I'll explain why.\" (with a smile)\n6. Strong and direct — \"No, that's not right. Here's why.\"\n\nAvoid: agreeing to avoid discomfort / attacking the person instead of the opinion / backing down without reason.\n\nMindset: Disagreeing is not an attack — it's honesty.",
      inputs: [
        { q: "Someone states something you genuinely disagree with",    a: '"I actually don\'t agree with that — I think..."' },
        { q: "Someone makes a factual claim you know is wrong",         a: '"Are you sure about that? I thought it was more..."' },
        { q: "Someone expresses a value you don't share",               a: '"I understand why you think that — and I see it differently."' },
        { q: "You want to push back without creating conflict",         a: "Soft but firm — hold your line warmly, don't fold." },
        { q: "You disagree but want to keep the relationship warm",     a: '"That\'s an interesting angle — I actually think the opposite though."' },
        { q: "You disagree strongly and want to be direct",            a: '"No, that\'s not right. Here\'s why." — calm, clear, no hedging.' },
      ]
    },
    {
      name: "Share Feelings",
      description: "Most people answer \"how are you?\" with \"fine\" — regardless of how things actually are. The skill is to practise actually answering honestly, and to share feelings spontaneously in the right context.\n\nThis requires both awareness of what you're actually feeling, and the courage to share it.\n\nHow to share authentically:\n• Specific feeling — not \"fine\" but \"actually a bit tired but otherwise okay\"\n• Calibrated depth — not too personal too fast, but not empty either\n• Without demanding a reaction — you share, you don't need comfort\n• With openness — \"I'm not sure exactly why, but it feels like...\"\n\nThree levels:\n• Light — \"I'm actually a bit stressed right now, but it'll sort itself out.\"\n• Mid — \"I'm carrying a feeling I can't quite put my finger on.\"\n• Deep — \"What I actually feel about this is...\"\n\nMindset: Sharing how I feel is not weakness — it's connection.",
      inputs: [
        { q: "Someone asks how you are",                               a: '"Actually a bit [X] right now." — answer honestly, not just \"fine\".' },
        { q: "Share how you feel about something happening in your life", a: "Name the feeling specifically — what is it actually?" },
        { q: "Share how you feel about something someone did for you",  a: '"I was actually touched by that." — share the feeling, not just a thank you.' },
        { q: "Share a feeling you've been carrying for a while",       a: "Find the words for it — share it without needing a specific reaction." },
        { q: "Share a feeling that surprised you",                     a: '"I didn\'t expect to feel this way, but..." — honest and open.' },
        { q: "You want to go deeper in a conversation",                a: "Share something real about how you feel — invite them to do the same." },
      ]
    }
  ],

  influenceframing: [
    {
      name: "Persuasion Framing",
      description: "Persuasion that works is rarely about having the best arguments — it's about understanding the other person's perspective and presenting your idea in a way that fits their values and needs.\n\nFive principles:\n1. Understand their perspective first — what do they care about? What's their concern?\n2. Find common ground — start with what you agree on, not where you differ\n3. Frame your proposal in their values — \"This would help you achieve X\" (their X, not yours)\n4. Use concrete images and stories — facts rarely persuade; feeling and image do\n5. Give them a choice — \"There are a couple of ways we could do this...\"\n\nHandling resistance:\nInvitation → acknowledge → reframe → offer new perspective\n\"I understand that X feels risky. And you're right that it requires Y. What I'd suggest is...\"\n\nMindset: I'm not persuading against them — I'm helping them see something new.",
      inputs: [
        { q: "You want someone to consider a new idea",                a: '"I thought of something I think you\'d actually like — it\'s about X."' },
        { q: "Someone is hesitant about something",                    a: "Acknowledge the concern, then reframe: \"I understand that. And what I'm proposing actually takes that into account.\"" },
        { q: "You're making a case for something at work",             a: "Start with shared ground: \"We all want X to work — here's one way.\"" },
        { q: "You want to change someone's mind without a debate",     a: "Ask their perspective first. Listen. Then share yours." },
        { q: "Someone is resistant",                                   a: '"That\'s a fair objection." — acknowledge it, then reframe, not argue.' },
        { q: "You want to pitch an idea persuasively",                 a: "Concrete image + their value + a choice: \"You could either X or Y — which fits better?\"" },
      ]
    },
    {
      name: "Reframe",
      description: "Reframing means taking a statement or situation and presenting it from a different angle — so that it either loses its sting, gains a new positive charge, or reveals a different truth.\n\nTypes of reframe:\n1. Positive reframe — find the upside or neutral reading of something negative\n2. Context reframe — the same behaviour means something different in a different context\n3. Meaning reframe — change what the event means, not what it is\n4. Humorous reframe — take something seriously, present it absurdly (or vice versa)\n\nExamples:\n• \"You're always so serious\" → \"I take the things that matter seriously — I think that's a good thing.\"\n• \"That failed\" → \"That's one version of events — here's another way to look at it.\"\n• \"This is too hard\" → \"Hard and impossible aren't the same thing.\"\n\nMindset: Every frame is a choice. I can choose a different one.",
      inputs: [
        { q: "Someone says something negative about you",              a: "Find the alternative reading — present it calmly and directly." },
        { q: "A situation looks like a failure",                       a: '"That\'s one way to see it. Here\'s another."' },
        { q: "Someone says you have a flaw",                          a: "Reframe the flaw as a feature in a different context." },
        { q: "Someone presents a limiting belief as a fact",          a: '"Hard and impossible aren\'t the same thing."' },
        { q: "A situation feels stuck",                               a: "Change the frame: what would this look like if it were actually going well?" },
        { q: "Someone tries to define you negatively",                a: "Reframe it: \"I'd call it [alternative framing] — and I'm okay with that.\"" },
      ]
    },
    {
      name: "Grounding",
      description: "Grounding means being anchored in yourself — knowing what you value and being able to communicate it naturally. It creates authenticity and depth in conversations, and is the foundation for building real rapport.\n\nThis isn't lecturing about your values — it's sharing them as a natural part of a conversation.\n\nWays to ground yourself in conversation:\n• Share what you believe without it feeling like a manifesto\n• Tell about a time your values were tested — or showed themselves\n• Answer a question about yourself with something that's actually true and important to you\n• Say no to something that doesn't fit who you are — and know why\n\nExamples:\n• \"What really grounds me is having time to myself in the morning — without it, the rest of the day is harder.\"\n• \"I believe strongly in honesty even when it's uncomfortable. It's cost me things, but it's worth it.\"\n\nMindset: I know what I stand for — and it's okay to show it.",
      inputs: [
        { q: "Share what you value most in friendships",              a: "Share what matters most — specifically, not generally." },
        { q: "Share what grounds you when things are chaotic",        a: '"What really grounds me is..." — concrete and genuine.' },
        { q: "Share a core principle you actually live by",           a: "State it clearly and concretely — and maybe when it was tested." },
        { q: "Share what kind of person you're trying to be",         a: "Honest and unpretentious — not a CV, an actual answer." },
        { q: "Share what matters most to you right now in life",      a: "Answer genuinely — what are you actually prioritising?" },
        { q: "Someone asks what you believe in",                      a: "Share one real belief — not a list, just one thing that's actually true." },
      ]
    },
    {
      name: "Observation",
      description: "The ability to observe — to really see what's around you and in the person you're talking to — is the foundation for many other strategies. A sharp observer notices things others miss, and that gives them material for humour, curiosity, compliments, and depth.\n\nWhat to observe:\n• The environment — something unusual, a detail that sets the tone, a contrast\n• The person — appearance, expression, energy, way of moving, tone of voice\n• The behaviour — patterns, deviations, reactions\n• The atmosphere — what's in the room but not being said\n\nWhat to do with the observation:\n• Comment on it\n• Exaggerate it for humour\n• Use it as an entry point to a question\n• Keep it and let it inform how you act\n\nMindset: I train myself to actually see — not just look.",
      inputs: [
        { q: "Notice something unusual about the environment",        a: "Name it specifically — what does it tell you about this place?" },
        { q: "Notice something specific about a person's appearance", a: "What's most characteristic about them right now — how would you describe it to someone who couldn't see them?" },
        { q: "Notice a change in someone's mood or energy",           a: "How are they different now compared to ten minutes ago?" },
        { q: "Notice something most people would walk past",          a: "A detail that's easy to miss but says something — what is it?" },
        { q: "Notice a pattern in how someone behaves",               a: "What do they do consistently? What does it tell you?" },
        { q: "Notice something that creates an interesting contrast", a: "Two things that don't quite fit together — what's the tension there?" },
      ]
    }
  ]

};

// ─── CHALLENGES COLLECTIONS ───────────────────────────────────────────────────

const challengesCollections = {

  assertive: [
    { name: "Assertive Communication", description: "Harder situations — pushback, pressure, edge cases where it's tempting to back down.", inputs: [
      { q: "Someone keeps pushing after you've said no clearly", a: "Don't explain or apologise more. Repeat calmly: \"My answer is still no.\" Persistence is not a reason to change your position." },
      { q: "Someone raises their voice to get their way", a: "Stay calm and lower your own voice if anything. \"I'll talk when the tone comes down.\" Don't match the aggression." },
      { q: "You're in a group and someone steamrolls your point", a: "Re-enter clearly: \"I wasn't finished — \" then complete your thought. Don't ask for the floor, take it." },
      { q: "Someone makes you feel guilty for having a need", a: "Acknowledge their feeling, hold your position: \"I hear that's frustrating for you. I still need X.\"" },
      { q: "Someone agrees in the moment but doesn't follow through", a: "Name it directly: \"You said X last time, and it didn't happen. I need to know this is going to change.\"" },
    ]}
  ],

  compliments: [
    { name: "Compliments & Appreciation", description: "Harder compliment situations — when it feels awkward or doesn't land.", inputs: [
      { q: "You give a compliment and the person dismisses it immediately", a: "Don't withdraw it. \"I mean it — I noticed it specifically.\" Let it stand." },
      { q: "You want to compliment someone but you've never done it before", a: "Specific and brief: name exactly what you noticed. Specificity cuts through the awkwardness." },
      { q: "Someone gives you a compliment you genuinely don't believe", a: "Receive it without arguing: \"Thank you — I'll take that.\" You don't have to agree to accept it graciously." },
      { q: "The group dynamic makes giving a sincere compliment feel weird", a: "Say it anyway, briefly and directly. Groups follow whoever acts with the most ease." },
      { q: "You want to express appreciation for something that mattered", a: "Be specific about what and why: \"What you did when [X] — it actually made a difference to me.\"" },
    ]}
  ],

  influenceframing: [
    { name: "Influence & Framing", description: "Harder influence situations — when resistance is high, under pressure, or the stakes are real.", inputs: [
      { q: "Someone keeps returning to their original objection even after you've addressed it", a: "Name the loop: \"I think we keep coming back to X. What would actually need to change for you to feel differently about it?\"" },
      { q: "You're trying to persuade someone who has already decided", a: "Don't argue the decision — question the frame: \"What would it take for you to reconsider?\" Then listen." },
      { q: "Someone reframes what you said to mean something you didn't intend", a: "Correct it directly: \"That's not what I said — what I actually mean is...\" Don't let the distorted version stand." },
      { q: "You need to change the direction of a meeting or conversation", a: "Name the shift: \"I want to take this in a slightly different direction — \" and then do it. You don't need permission." },
      { q: "Someone is catastrophising and won't hear alternatives", a: "Don't contradict the feeling — reframe the scale: \"That's a real concern. Is it definitely that, or could it be [smaller version]?\"" },
    ]}
  ],

  humour: [
    { name: "Humour Practise", description: "Harder humour situations — when it doesn't land, when the moment is tense, or when someone reacts unexpectedly.", inputs: [
      { q: "Someone is visibly offended by something you meant as a joke", a: "Don't over-explain. Acknowledge briefly: \"That came out wrong — not what I meant.\" Then move on. Over-apologising makes it bigger." },
      { q: "You make a joke and no one laughs", a: "\"And that's why I don't do stand-up.\" — own it with self-irony and continue. Don't explain the joke." },
      { q: "Someone misreads your humour as serious", a: "Clarify lightly: \"That was me being ridiculous — I probably should have added a sign.\" Brief, then move on." },
      { q: "A group conversation turns heavy unexpectedly and you want to lighten it", a: "One well-timed observation — name something everyone has noticed. Give people permission to breathe without forcing it." },
      { q: "Someone uses humour aggressively at your expense", a: "Respond with self-irony rather than defence: \"Fair. I had that coming.\" It's harder to attack someone who agrees." },
    ]}
  ],

  teasing: [
    { name: "Teasing & Playfulness", description: "Harder teasing situations — when it misfires, escalates, or lands on something unintentionally sensitive.", inputs: [
      { q: "Someone doesn't take the tease well and goes quiet", a: "Soften immediately: \"That was me being silly — I'm just messing with you.\" Brief, warm, no lecture." },
      { q: "You misjudge the tone and the tease lands wrong", a: "Own it without over-apologising: \"Okay, that came out wrong. Let me try that again.\"" },
      { q: "Someone tries to tease you back aggressively", a: "Receive it with self-irony: \"Fair. Completely fair.\" Don't match the aggression — that ends the play." },
      { q: "You're in a group and want to tease without it feeling targeted", a: "Tease something situational that includes everyone, not one person alone." },
      { q: "Someone is sensitive about the exact thing you just teased", a: "\"Sorry — that was thoughtless. I didn't mean it.\" Clean and direct. Don't qualify." },
    ]}
  ],

  selfhumour: [
    { name: "Self-Humour", description: "Harder self-humour situations — when it risks reading as deflection, or when someone uses it against you.", inputs: [
      { q: "Someone criticises something real about you and expects a serious response", a: "Acknowledge what's true with humour, then engage directly: \"You're not wrong — and that's the worst part.\" Then address it." },
      { q: "You're in a situation where self humour might seem like deflection", a: "Use it lightly once, then engage genuinely: \"Okay, self-irony aside — here's what I actually think.\"" },
      { q: "Someone keeps making the same joke about your flaw", a: "\"I appreciate the consistency. Truly.\" — then let it land without more reaction. Once is enough." },
      { q: "You genuinely feel bad about something you did", a: "Self humour is not the right tool here. Acknowledge it directly first. Don't use humour to avoid the thing." },
      { q: "Someone uses your self-deprecating joke against you seriously", a: "\"That was me being ridiculous — I don't actually think that.\" Name the difference clearly." },
    ]}
  ],

  conversationaldepth: [
    { name: "Conversational Depth", description: "Harder depth situations — short answers, going too deep too fast, or one-sided conversations.", inputs: [
      { q: "Someone gives a short answer to a deep question", a: "Don't push — reflect back and leave space: \"Interesting.\" [pause] Often they'll continue. Silence is an invitation." },
      { q: "You ask a deep question and they deflect with humour", a: "Let it go this time. Come back to it later from a different angle. You can't force depth." },
      { q: "You go too deep too fast and the person becomes uncomfortable", a: "Pull back to lighter territory and let them set the pace from there. Don't explain why you're backing off." },
      { q: "The conversation has turned one-sided — you're asking, they're not", a: "Share something yourself first: \"I ask because I've been thinking about this a lot myself — [brief share]. What about you?\"" },
      { q: "Someone shares something deeply personal and you don't know how to respond", a: "You don't need to match it immediately. Acknowledge it: \"Thank you for saying that — that's not something people usually share.\"" },
    ]}
  ],

  startingconnecting: [
    { name: "Starting & Connecting", description: "Harder starting situations — when the opener doesn't land, when you go blank, or when the conversation stalls.", inputs: [
      { q: "You approach someone and they respond very briefly and turn away", a: "Read it as a no and move on. Not every opener lands — that's situational, not personal." },
      { q: "You start a conversation and then go completely blank on what to say next", a: "Ask one simple question about them or the situation. \"What brings you here?\" is always available." },
      { q: "You want to approach someone you find interesting but feel conspicuous", a: "The framing opener: \"I'd regret not coming over — I'm [name].\" It names the dynamic, which removes some of the awkwardness." },
      { q: "You've run through three topics and everything keeps dying", a: "That's okay. Not every conversation takes off. \"It was nice talking to you — enjoy the rest of the evening.\"" },
      { q: "Someone starts a conversation with you and you'd rather not engage", a: "Brief and kind: \"I'm actually a bit in my head right now — but enjoy the evening.\"" },
    ]}
  ],

  listeningresponding: [
    { name: "Listening & Responding", description: "Harder listening situations — uncomfortable content, lost thread, or someone who needs more than you know how to give.", inputs: [
      { q: "Someone shares something emotionally heavy and you don't know what to say", a: "\"That sounds really hard. I'm glad you told me.\" You don't need to say anything clever. Presence is enough." },
      { q: "Someone gives you sharp or unexpected criticism", a: "Breathe. Listen to the end. Don't defend mid-sentence. \"Can I think about that for a second?\"" },
      { q: "Someone keeps talking and you've genuinely lost the thread", a: "\"I want to make sure I'm following — can you tell me the main thing you want me to understand?\"" },
      { q: "Someone shares something you find hard to take seriously", a: "Your job is to understand why it matters to them, not to evaluate whether it should." },
      { q: "Someone is telling you something that's clearly bothering them but framing it as fine", a: "\"That sounds like it might have been harder than you're letting on — how are you actually doing with it?\"" },
    ]}
  ],

};

// ─── MINDSET COLLECTIONS ──────────────────────────────────────────────────────

const mindsetCollections = {

  assertive: [
    { name: "Assertive Communication", description: "The thinking patterns behind assertive communication — what gets in the way, and what to replace it with.", inputs: [
      { q: "Why does assertiveness feel like aggression to many people?", a: "Because they've only seen two models: doormat or bulldozer. Assertiveness is a third thing — clear and calm. It takes practice to feel the difference." },
      { q: "What is the difference between a need and a demand?", a: "A need is something you state clearly and own. A demand requires the other person to comply or be wrong. You can be firm about a need without making it a demand." },
      { q: "Why do people back down when they're pushed back on?", a: "Usually because they confuse persistence with reason. Someone pushing harder is not a counter-argument. You only update when given a real reason, not just more pressure." },
      { q: "What does it mean to hold your position without being rigid?", a: "You stay with your view until you've heard a genuine reason to update it. New argument or fact = update. Emotion or repetition = hold." },
    ]}
  ],

  compliments: [
    { name: "Compliments & Appreciation", description: "The mindset behind giving and receiving compliments — why it feels uncomfortable, and what changes when you do it well.", inputs: [
      { q: "Why do compliments often fall flat even when sincere?", a: "Because they're too general. \"You're great\" is hard to receive. \"The way you handled that conversation\" lands — there's something specific to hold on to." },
      { q: "Why is receiving a compliment without deflecting hard for many people?", a: "Because deflecting feels humble. But it actually rejects the other person's observation. Receiving graciously is the more generous move." },
      { q: "What is the difference between a compliment and flattery?", a: "A compliment names something specific and real. Flattery is designed to get something. The difference is in the intent — and people can usually feel it." },
    ]}
  ],

  influenceframing: [
    { name: "Influence & Framing", description: "The mindset behind influence — what persuasion actually is, and the internal posture that makes it work.", inputs: [
      { q: "What is the difference between persuasion and manipulation?", a: "Persuasion helps someone see something new — their choice remains free. Manipulation removes or distorts that choice. The difference is whether you respect their autonomy." },
      { q: "Why do good arguments often fail to persuade?", a: "Because people don't change their minds based on logic alone — they change when they feel understood first. Acknowledging their view before presenting yours is not weakness; it's the method." },
      { q: "What does it mean to frame something in their values, not yours?", a: "You understand what matters to them — then show how your proposal serves that. \"This would help you get X\" where X is their X, not yours." },
    ]}
  ],

  humour: [
    { name: "Humour Practise", description: "The mindset behind humour — what it actually is, why trying hard kills it, and the right internal posture.", inputs: [
      { q: "What is the right internal posture for humour?", a: "Noticing, not performing. Humour arises when expectations are broken in a safe way — your job is to notice when that's happening, not to manufacture it." },
      { q: "Why does trying too hard to be funny usually fail?", a: "Because it signals that you need the laugh. Humour that lands comes from a place of not needing it to. The lighter your investment in the outcome, the better it works." },
      { q: "What do you do when a joke falls flat?", a: "Move on without explanation or apology. Self-irony works: \"And that's why I don't do stand-up.\" Then continue. Never explain the joke." },
    ]}
  ],

  teasing: [
    { name: "Teasing & Playfulness", description: "The mindset behind teasing — what makes it connect rather than cut, and what to check internally before doing it.", inputs: [
      { q: "What is the right internal posture for teasing?", a: "Warmth with a light edge. You're playing with the person, not at their expense. If you feel contempt or frustration underneath the tease, it will come through — don't tease when you're actually annoyed." },
      { q: "What does it mean when someone can't be teased?", a: "Either they're not yet comfortable with you, the topic is too close to something real, or the tone was off. None of these are permanent — calibrate and try a different angle, or wait." },
      { q: "Why does teasing build connection?", a: "Because it signals social comfort. You don't playfully tease people you're trying to impress. Teasing someone says: I'm relaxed around you, and I think you can handle a little friction." },
    ]}
  ],

  selfhumour: [
    { name: "Self-Humour", description: "The mindset behind self humour — the difference between healthy distance and self-diminishment, and what it signals.", inputs: [
      { q: "Why is self humour a sign of strength rather than weakness?", a: "Because it requires you to see yourself clearly and not need others to see you as perfect. Needing to protect your image is the weakness — not the flaws themselves." },
      { q: "What is the internal posture that makes self humour work?", a: "Genuine ease. Not performed humility, not fishing for reassurance. You're not saying \"please tell me I'm not that bad\" — you're saying \"yes, and I find this funny too.\"" },
      { q: "How do you know if self humour is healthy vs harmful?", a: "Healthy: you say it once, laugh, and move on. Harmful: you repeat it, wait for others to contradict you, or feel worse after saying it." },
    ]}
  ],

  conversationaldepth: [
    { name: "Conversational Depth", description: "The mindset behind depth in conversations — genuine curiosity vs technique, and what makes people open up.", inputs: [
      { q: "What is the right internal posture for asking deep questions?", a: "Genuine curiosity, not technique. If you're asking to appear interesting or to perform depth, it reads as hollow. If you're actually curious about the answer, the question lands differently." },
      { q: "Why do pauses make deep questions work better?", a: "Because the first answer is often the surface answer. The pause gives the person room to go further — to say the thing they wouldn't say if you'd already moved on." },
      { q: "What is the difference between sharing and performing in conversation?", a: "Sharing invites the other person in. Performing keeps the focus on you. A story that ends in a question is sharing. A story that ends in a pause waiting for applause is performing." },
      { q: "Why does depth in conversation require vulnerability from both sides?", a: "Because depth is reciprocal — if only one person goes deep, it becomes an interrogation or a therapy session. You have to give to receive." },
    ]}
  ],

  startingconnecting: [
    { name: "Starting & Connecting", description: "The mindset behind initiating — what gets in the way, and what replaces performance pressure with something that actually works.", inputs: [
      { q: "What is the right internal posture for starting conversations?", a: "Curiosity, not agenda. You're not trying to impress them — you're interested in them. The pressure drops when the goal shifts from \"make this work\" to \"find out something about this person.\"" },
      { q: "Why does a simple opener work better than a clever one?", a: "Because a clever opener signals that you've been preparing, which creates slight performance pressure. A simple opener signals ease — and ease is attractive." },
      { q: "What do you do when an opener doesn't land?", a: "Move on without interpreting it as failure. Most openers that don't land are situational, not personal. Try a different angle or walk away gracefully." },
    ]}
  ],

  listeningresponding: [
    { name: "Listening & Responding", description: "The mindset behind real listening — what gets in the way, and what listening to understand actually feels like.", inputs: [
      { q: "What is the difference between listening to reply and listening to understand?", a: "When you listen to reply, the other person is talking but your focus is already on what you'll say next. When you listen to understand, your only job is to follow what they mean — the response comes after." },
      { q: "Why is silence a form of listening?", a: "Because most people fill silence too quickly. A pause after someone speaks gives them room to go deeper. The thing they say into the silence is often the most important thing." },
      { q: "What does it mean to listen for feeling, not just fact?", a: "People rarely say the most important thing directly. They describe events and let the feelings hang in the background. Listening for feeling means tracking what's underneath the narrative." },
    ]}
  ],

};
