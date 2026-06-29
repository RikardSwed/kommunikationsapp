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
