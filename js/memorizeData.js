// memorizeData.js — Theory flashcard data for Memorize mode
// Each strategy has theory questions (front) and answers (back)

const memorizeCollections = {

  assertive: [
    {
      name: "Fogging",
      guideFront: "Answer from memory...",
      guideBack: "The answer...",
      cards: [
        { bundle: 'free', q: "What is the core idea behind fogging?", a: "You agree with what might be true in a criticism — without defending yourself, explaining, or getting upset. Criticism passes through you like fog: nothing solid to hit." },
        { bundle: 'free', q: "What are the three types of fogging?", a: "1. Agree with what might be true — \"You're probably right.\"\n2. Agree with the possibility — \"It's possible that I…\"\n3. Agree with the logic — \"I can see why you think so.\"" },
        { bundle: 'free', q: "What is fogging NOT?", a: "It's not agreeing that the criticism is definitely true. It's not an apology. It's not giving in. Agreeing with what might be true is a position of strength — not surrender." },
        { bundle: 'free', q: "What signals does fogging send to the other person?", a: "That you are not threatened by their criticism. That you don't need to defend yourself. That you are confident enough to absorb what they say without reacting." },
        { bundle: 'free', q: "What is the key difference between fogging and negative assertion?", a: "Fogging agrees with what might be true — it leaves room for doubt. Negative assertion agrees that something actually is true. Fogging: \"You could have a point.\" Assertion: \"Yes, I was late.\"" },
        { bundle: 'pro', q: "What is the common mistake when using fogging for the first time?", a: "Sounding sarcastic or passive-aggressive. The tone must be genuinely calm and open — not a performance of calmness. If the other person feels mocked, the technique has failed." },
        { bundle: 'pro', q: "When is fogging NOT the right tool?", a: "When the criticism is clearly valid and the other person needs a real acknowledgement. Fogging a legitimate concern can feel dismissive. Use negative assertion instead — own it directly." },
      ]
    },
    {
      name: "Negative Inquiry",
      guideFront: "Answer from memory...",
      guideBack: "The answer...",
      cards: [
        { bundle: 'free', q: "What is the core idea behind negative inquiry?", a: "When someone criticises you, you ask calmly for more — more detail, more specifics. Instead of defending yourself, you show genuine curiosity about the criticism." },
        { bundle: 'free', q: "What are the three main purposes of negative inquiry?", a: "1. Disarm — it's hard to keep attacking someone who is genuinely listening.\n2. Clarify — find out what the criticism is actually about.\n3. Show confidence — you're not afraid of more criticism." },
        { bundle: 'free', q: "Give three example phrases for negative inquiry.", a: "• \"What is it specifically I do that bothers you?\"\n• \"What do you mean by that exactly?\"\n• \"How would you prefer I handle it?\"" },
        { bundle: 'free', q: "What is the tone of negative inquiry?", a: "Calm and genuinely curious — not sarcastic, not passive-aggressive. The question must feel like a real invitation to explain, not a challenge or a trap." },
        { bundle: 'free', q: "Why is negative inquiry described as a form of control?", a: "Because by asking, you direct the conversation. You force the critic to be specific, which often reveals that the criticism is vague or less valid than it first seemed." },
        { bundle: 'pro', q: "What do you do when negative inquiry surfaces a valid point you had not considered?", a: "Acknowledge it directly: \"That's fair — I hadn't thought of it that way.\" The goal is clarity, not winning. Negative inquiry that uncovers a real issue is a success, not a failure." },
        { bundle: 'pro', q: "How does negative inquiry differ from interrogating someone?", a: "Interrogating challenges. Negative inquiry invites. The difference is in intent and tone — you are asking because you genuinely want to understand, not because you want to expose a flaw in their argument." },
      ]
    },
    {
      name: "Negative Assertion",
      guideFront: "Answer from memory...",
      guideBack: "The answer...",
      cards: [
        { bundle: 'free', q: "What is the core idea behind negative assertion?", a: "You actively and calmly agree with your own faults when someone points them out — without over-apologising, explaining, or getting defensive." },
        { bundle: 'free', q: "What does negative assertion signal about self-esteem?", a: "High self-esteem. You know you have flaws and that's okay. You don't need to minimise, justify, or collapse when a fault is pointed out." },
        { bundle: 'free', q: "What are the three things negative assertion avoids?", a: "1. Over-apologising — \"Oh no, I'm so sorry, I'm terrible at this…\"\n2. Explaining — \"Yes but it's because…\" (explanation = defence)\n3. Deflecting — changing the subject or turning it back on them." },
        { bundle: 'free', q: "What is the ideal format for a negative assertion response?", a: "Short, calm, owned. \"Yes, I was late. It happens.\" or \"You're right, I could have done that differently.\" No padding, no apology spiral, no justification." },
        { bundle: 'free', q: "What is the difference between negative assertion and apologising?", a: "An apology focuses on the other person's feelings and asks for forgiveness. Negative assertion simply acknowledges a fact about yourself — calmly and without emotional loading." },
        { bundle: 'pro', q: "What happens after a negative assertion — do you need to fix the problem?", a: "Not in the same breath. The assertion stands on its own. If action is needed, you decide when and how. \"Yes, I was late\" is complete. You don't need to add \"I'll never do it again.\"" },
        { bundle: 'pro', q: "How do you use negative assertion when you only partly agree with the criticism?", a: "Assert only the part that is true. \"Yes, I was abrupt in that moment — the rest I see differently.\" This keeps you honest without accepting more than is accurate." },
      ]
    },
    {
      name: "Broken Record",
      guideFront: "Answer from memory...",
      guideBack: "The answer...",
      cards: [
        { bundle: 'free', q: "What is the core idea behind broken record?", a: "You return to the same calm, short response every time someone pushes — without being drawn into argument, explanation, or apology. Like a vinyl record that skips." },
        { bundle: 'free', q: "Why does broken record work?", a: "Every time you explain or justify yourself, you give the other person new material to argue against. When you just repeat — there is nothing to respond to. The technique removes the fuel." },
        { bundle: 'free', q: "What are the four rules for using broken record?", a: "1. Choose a short, clear sentence.\n2. Repeat it calmly every time they push.\n3. Don't change your wording.\n4. Don't raise your voice, don't apologise, don't add new arguments." },
        { bundle: 'free', q: "What is the most important moment in broken record — and why?", a: "When the pressure escalates. That's when most people cave and start explaining. Holding the same tone as the pressure rises is exactly what the technique trains you for." },
        { bundle: 'free', q: "What is the difference between broken record and stubbornness?", a: "Stubbornness refuses to engage. Broken record stays calm and present — you hear them, you just don't move. The tone is steady and non-aggressive, not dismissive or cold." },
        { bundle: 'pro', q: "How do you combine broken record with acknowledging the other person?", a: "\"I hear that you're frustrated — and my answer is still no.\" The acknowledgement shows you are listening; the return to your position shows you are not moving. Both matter." },
        { bundle: 'pro', q: "When should you stop using broken record?", a: "When the other person has genuinely heard you and the dynamic has shifted. Broken record is for resistance, not for normal conversation. Once they stop pushing, stop repeating — move forward." },
      ]
    },
    {
      name: "Beyond the Strategies",
      guideFront: "Answer from memory...",
      guideBack: "The answer...",
      // v1.26.29 (list 6): Pro-only theory deck covering the REST of the pack
      // — combinations, sequences, challenge types and the shared mindset.
      cards: [
        { bundle: 'pro', q: "Why combine strategies instead of always using one?", a: "Because real situations rarely fit one tool. A collection gives you options — Fogging OR Negative Inquiry can both defuse criticism — and choosing in the moment is itself a skill worth training." },
        { bundle: 'pro', q: "What is the idea behind a sequence like Broken Record → Fogging → Broken Record?", a: "Each strategy covers the other's weak spot: Broken Record states the position, Fogging absorbs the pushback without arguing, and returning to the exact same sentence shows the pressure changed nothing." },
        { bundle: 'pro', q: "What are the four challenge types this pack trains for?", a: "Criticism (fair or unfair), Pressure (pushing after your answer), Guilt-tripping (obligation as a lever), and Being Called Out (when the criticism is actually true)." },
        { bundle: 'pro', q: "Which strategies fit which challenge?", a: "Criticism → Fogging or Negative Inquiry. Pressure → Broken Record. Guilt → Fogging plus a held position. A real mistake → Negative Assertion — own it cleanly." },
        { bundle: 'pro', q: "What is the shared mindset behind all four strategies?", a: "You don't need to defend yourself to hold your ground. Criticism, pressure and guilt only steer you if you argue with them — calm acknowledgement plus an unmoved position beats both." },
        { bundle: 'pro', q: "When should you NOT use these techniques?", a: "When the other person raises a genuine concern that deserves real engagement. Fogging a legitimate worry feels dismissive — switch to actually listening, or to Negative Assertion if you were wrong." },
      ]
    },
  ],


  humour: [
    {
      name: "Humour",
      description: "Understanding humour as a communication tool — the mechanisms, the timing, and the mindset.",
      cards: [
        { q: "What are the seven humour mechanisms?", a: "Misreading / Unexpected interpretation\nExaggeration\nIrony\nAbsurdity\nTiming\nSelf-irony\nObservation" },
        { q: "What is the timing rule for delivering humour?", a: "Pause before the punchline. Deliver calmly. Move on.\nNever laugh at your own joke before it lands." },
        { q: "What is the difference between irony and sarcasm in social humour?", a: "Irony says the opposite of what you mean in a light, shared way — both parties are in on it.\nSarcasm can carry an edge of contempt. Irony connects; sarcasm can cut." },
        { q: "What makes an observation funny rather than just awkward?", a: "It names something everyone has already noticed but no one has said. The recognition is the punchline — you're not explaining why it's funny." },
        { q: "When does humour fail, even when the mechanism is correct?", a: "When it lacks relevance to the situation, when the timing is off, or when the tone signals nervousness rather than ease." }
      ]
    }
  ],

  teasing: [
    {
      name: "Teasing",
      description: "What makes teasing connect rather than cut — the principles, the types, and how to recover.",
      cards: [
        { q: "What is the core difference between teasing and mocking?", a: "Teasing is warm underneath — both people are in on it and no one is diminished.\nMocking carries contempt and uses laughter as a weapon. The tone and intent separate them." },
        { q: "What does good teasing leave room for?", a: "The other person to fire back, deflect with humour, or laugh.\nIt doesn't corner them or require them to defend themselves seriously." },
        { q: "What are the four types of teasing?", a: "Observation tease\nPlayful exaggeration\nMock disbelief\nGentle role reversal" },
        { q: "How do you recover when a tease lands wrong?", a: "Soften or own it without over-apologising.\n\"That came out wrong — let me try that again.\" or \"I'm just messing with you.\"\nBrief acknowledgement, then move on." }
      ]
    }
  ],


  conversational: [
    {
      name: "Finding Common Ground",
      description: "Actively finding and naming shared experiences, reactions or values to create genuine rapport.",
      cards: [
        { q: "What are the five types of common ground?", a: "Experiences\nReactions\nValues\nInterests\nResistance" },
        { q: "What are the three techniques for finding common ground?", a: "Relate back — \"That's exactly like when I...\"\nMe too moment — \"Wait — you too?\"\nShared reaction — \"I know exactly what you mean.\"" },
        { q: "Why is lifting common ground explicitly important?", a: "Because it only creates connection if the other person knows you've noticed it. Recognising something internally doesn't count — naming it does." },
        { q: "What do you do when there's no obvious common ground?", a: "Ask a question that might surface it. Listen for the emotional logic rather than the surface detail. Shared reactions to the immediate situation are always available." }
      ]
    },
    {
      name: "Mirroring & Paraphrasing",
      description: "Reflecting back what someone said — through a keyword, paraphrase, or feeling — to show you've heard and invite them to go further.",
      cards: [
        { q: "What are the three levels of mirroring?", a: "Keyword mirroring — repeat the last or key word as a question: \"Stressful?\"\nParaphrasing — restate in your own words\nFeeling mirroring — reflect the emotion: \"That sounds really frustrating.\"" },
        { q: "What is the function of keyword mirroring?", a: "Repeating a single word as a question. It keeps the focus on them, shows you heard the specific word, and invites them to go deeper without asking a new question." },
        { q: "What is the difference between paraphrasing and interpreting?", a: "Paraphrasing restates what they said in your words, staying close to their meaning.\nInterpreting adds your own conclusion. Paraphrase: \"So the issue is the timing.\" Interpret: \"So you don't trust them.\"" },
        { q: "What do you do when silence follows a mirror?", a: "Let it sit. The silence is doing the work — it gives them room to continue. Filling it immediately wastes what the mirror created." }
      ]
    }
  ],

  conversationaldepth: [
    {
      name: "Storytelling",
      cards: [
        {
          q: "What is the structure of a good story?",
          a: "1. Hook — open with something that sparks curiosity\n2. Context — set the scene briefly: who, where, when\n3. Conflict / Twist — what makes it interesting\n4. Resolution — what happened in the end\n5. Point (optional) — sometimes none is needed"
        },
        {
          q: "What are the five things that make a story engaging?",
          a: "1. Specific details — not 'someone' but 'my colleague Marcus'\n2. Varied pace — slow down at the dramatic part\n3. Feeling — show how you felt, not just what happened\n4. Eye contact and body language while telling it\n5. A clear twist or point"
        },
        {
          q: "What is the function of the hook in a story?",
          a: "To open with something that makes the listener want to hear what comes next. It creates curiosity before the context is established. Example: 'You know what happened to me yesterday?'"
        },
        {
          q: "What is the mindset behind good storytelling?",
          a: "Tell it to share an experience — not to impress. Specific details make the story alive. It's okay to pause and build tension."
        },
        {
          q: "What is the difference between telling a story and just describing what happened?",
          a: "A story has structure, feeling, and a twist or point. Describing what happened is just a sequence of facts. The story makes the listener feel something."
        }
      ]
    },
    {
      name: "Deep Questions",
      cards: [
        {
          q: "What are the four types of deep questions?",
          a: "1. Experience questions — 'How did that feel?'\n2. Meaning questions — 'What does that mean to you?'\n3. Motivation questions — 'What made you want to do that?'\n4. Hypothetical — 'If you could do it again, what would you do differently?'"
        },
        {
          q: "What is the technique for using deep questions in a conversation?",
          a: "Start with a simple question → listen → follow up with a deeper one. Use pauses — most people go deeper if you don't fill the silence. One question at a time."
        },
        {
          q: "What three things should you avoid when asking deep questions?",
          a: "1. Stacking questions — asking several at once\n2. Leading questions — 'That was pretty hard, wasn't it?'\n3. Analysing too early — wait until they've opened up"
        },
        {
          q: "What is the mindset behind deep questions?",
          a: "Genuinely curious — not looking for a clever question. Pauses are okay. One question at a time — not an interrogation."
        },
        {
          q: "How do you move a conversation from facts to feelings?",
          a: "When someone describes an event, follow up with: 'How did that actually feel?' or 'What were you thinking in that moment?' — you shift from what happened to how it was experienced."
        }
      ]
    },
    {
      name: "Sharing Opinions",
      cards: [
        {
          q: "What are the six ways to share an opinion?",
          a: "1. Direct and clear\n2. Spontaneous\n3. With humour\n4. Soft and open\n5. Playfully provocative\n6. With curiosity — share and immediately invite their view"
        },
        {
          q: "What three things make sharing an opinion work well?",
          a: "1. Specificity — not 'it was good' but 'what I liked most was X because...'\n2. Authenticity — share what you actually think\n3. Openness — share without demanding agreement"
        },
        {
          q: "What is the mindset behind sharing opinions?",
          a: "My opinions are part of who I am — they're worth sharing. I share without demanding that others agree. Specific opinions are more interesting than general ones."
        },
        {
          q: "How does humour work when sharing a controversial opinion?",
          a: "You frame it as obviously provocative: 'Controversial opinion: [opinion]. I'm ready for the consequences.' The humour signals that you're open to pushback while still stating your view."
        }
      ]
    },
    {
      name: "Sharing Emotions",
      cards: [
        {
          q: "What are the three levels of sharing emotions?",
          a: "Light: 'I'm actually pretty pleased with how that went.'\nMid: 'This makes me a bit nervous, if I'm honest.'\nDeep: 'That affected me more than I expected it to.'"
        },
        {
          q: "What makes emotional sharing authentic?",
          a: "1. Specificity — not 'I feel fine' but 'I actually felt proud'\n2. Timing — share when it's relevant, not forced\n3. No demand for a reaction — you share, you don't need comfort"
        },
        {
          q: "What are the common obstacles to sharing emotions?",
          a: "1. Fear of appearing weak or vulnerable\n2. Unfamiliarity with putting feelings into words\n3. Belief that others won't find it interesting"
        },
        {
          q: "What is the mindset behind sharing emotions?",
          a: "Sharing how I feel is not weakness — it's connection. Specificity makes the feeling believable and human."
        }
      ]
    }
  ],

  compliments: [
    {
      name: "Giving Compliments",
      cards: [
        {
          q: "What are the three types of compliment situations?",
          a: "1. Natural — something positive happens and you express it genuinely\n2. Strategic — you want to achieve something, soften the mood, or open a conversation\n3. Repairing — something has gone wrong; the compliment creates connection before the issue"
        },
        {
          q: "What are the five things you can give compliments about?",
          a: "1. Appearance — clothes, style, expression\n2. Competence — work, craft, sport, music\n3. Personality — humour, warmth, patience, courage\n4. Actions — something they did or decided\n5. Way of being — how they handle difficult situations"
        },
        {
          q: "What makes a compliment land?",
          a: "Specificity. Not 'that was great' but 'the way you stayed calm when that happened — that was impressive.' A specific compliment shows you actually paid attention."
        },
        {
          q: "What is the mindset behind giving compliments?",
          a: "I'm actively looking for something positive to lift up. A genuine compliment opens doors that arguments never can. It costs me nothing to lift someone else up."
        }
      ]
    },
    {
      name: "Accepting Compliments",
      cards: [
        {
          q: "What are the three ways to receive a compliment well?",
          a: "1. Warm and genuine — 'Thank you, that means a lot.'\n2. Playful and confident — 'Thanks — I see you have good taste.'\n3. Curious and reciprocal — 'Thank you! What made you think of that?'"
        },
        {
          q: "What are the three things to avoid when receiving a compliment?",
          a: "1. Dismissing — 'No no, it was nothing special...'\n2. Overdoing — 'Oh my god thank you so much really!!'\n3. Going stiff — silence or a nervous smile without responding"
        },
        {
          q: "What is the mindset behind accepting compliments?",
          a: "I deserve to receive this. Receiving well is a gift back to the person giving it. I can be secure enough to just say thank you."
        },
        {
          q: "Why is dismissing a compliment a problem?",
          a: "It rejects the other person's observation and makes them feel their positive gesture was unwelcome. It also signals low self-esteem — that you don't believe you deserve it."
        }
      ]
    },
    {
      name: "Self Disclosure",
      cards: [
        {
          q: "What is self disclosure in communication?",
          a: "Sharing your actual emotional reaction to a situation — openly and without blaming the other person. Not complaining or defending — communicating what's actually happening in you."
        },
        {
          q: "What is the structure of a self disclosure statement?",
          a: "1. Feeling — 'I feel...' / 'This makes me...'\n2. Situation — '...when you say X' / '...in situations like this'\n3. Optional wish — 'I'd like...'"
        },
        {
          q: "Why does self disclosure work as a communication tool?",
          a: "If you say 'you're being unfair' the other person can dispute it. If you say 'I feel treated unfairly' — that's a fact about you. It can't be disputed. I-statements disarm. You-statements escalate."
        },
        {
          q: "What is self disclosure NOT?",
          a: "Not a You-statement disguised as an I-statement: 'I feel that you are wrong' is still an accusation. Not an apology: 'Sorry for reacting this way' gives up your position. Not an exaggeration: 'I'm totally destroyed' loses credibility."
        },
        {
          q: "What is the mindset behind self disclosure?",
          a: "My feelings are legitimate information — not weaknesses. Sharing how I feel is not giving up — it's communicating. I-statements disarm. You-statements escalate."
        }
      ]
    }
  ],

  selfhumour: [
    {
      name: "Self Humour",
      cards: [
        {
          q: "What are the four techniques of self humour?",
          a: "1. Acknowledge with humour — 'Yes, that's true. I'm not exactly an expert on that.'\n2. Exaggerate the flaw — 'That was classic me — probably the worst person in the world at this.'\n3. Accept with dignity — 'Yes, it's a fact. I've made peace with it.'\n4. Turn it into charm — 'It's one of my more interesting qualities.'"
        },
        {
          q: "What is the difference between self humour and self-criticism?",
          a: "Self-criticism: 'I'm always so stupid, I can't do anything right.' — this shrinks you.\nSelf humour: 'Yeah, that wasn't exactly my sharpest moment — but I'm consistent.' — this shows security and distance."
        },
        {
          q: "What does self humour signal to others?",
          a: "Security. You see your own flaws and don't take them too seriously. You don't need to be perfect to be okay. Self-distance is a sign of maturity, not weakness."
        },
        {
          q: "What is the mindset behind self humour?",
          a: "I don't need to be perfect to be okay. Self-distance is strength, not weakness. Joking about myself shows I'm secure — not that I'm lesser."
        }
      ]
    },
    {
      name: "Jokingly Bragging",
      cards: [
        {
          q: "What makes jokingly bragging work?",
          a: "1. The exaggeration is so obvious it's clearly play\n2. Warm tone — not actual arrogance\n3. Quick and light — one line, move on\n4. Best combined with self-humour — brag about one thing, joke about another"
        },
        {
          q: "What is the difference between jokingly bragging and actual bragging?",
          a: "Actual bragging seeks to impress and establish superiority. Jokingly bragging is play — the exaggeration is so obvious nobody believes it. The tone is warm and light, not competitive."
        },
        {
          q: "Give three example phrases for jokingly bragging.",
          a: "• 'I woke up like this. Some people are just gifted.'\n• 'That was excellent — even by my standards.'\n• 'I don't want to brag, but... actually, I do.'"
        }
      ]
    },
    {
      name: "Push-Pull",
      cards: [
        {
          q: "What is push-pull?",
          a: "Alternating between pulling someone in (warmth, interest, compliment) and pushing them back (light challenge, tease, withdrawal of attention). The rhythm creates tension and keeps the interaction alive."
        },
        {
          q: "Why does push-pull work?",
          a: "Constant approval is predictable and loses value. Constant challenge is exhausting. The alternation creates a dynamic where the other person stays engaged and curious — they can't settle into a fixed role."
        },
        {
          q: "What are the key principles of push-pull?",
          a: "1. Push and pull in the same sentence or nearby — not hours apart\n2. Warm tone throughout — this is play, not real rejection\n3. Don't explain the technique\n4. Genuine reactions create more tension than performed ones"
        },
        {
          q: "Give two examples of push-pull in practice.",
          a: "• 'You're actually really interesting — I wasn't expecting that.' (pull → implied push)\n• 'That's a good point.' [pause] 'I'm still not completely convinced.' (pull → push)"
        }
      ]
    },
    {
      name: "Joke About My Flaws",
      cards: [
        {
          q: "What is the core principle of joking about your own flaws?",
          a: "If you name your flaw first, nobody else can use it against you. And when you frame it with lightness, it becomes a feature rather than a weakness."
        },
        {
          q: "What are three ways to frame a flaw as a joke?",
          a: "• 'I'm the kind of person who [flaw]. You've been warned.'\n• 'I know, I know — it's a character flaw. I'm working on it.'\n• 'Classic me.'"
        },
        {
          q: "What is the mindset behind joking about your flaws?",
          a: "Naming my own flaws with warmth disarms them. I own it before anyone else can. This is confidence — not self-deprecation."
        }
      ]
    }
  ],

  startingconnecting: [
    {
      name: "Starting Conversations",
      cards: [
        {
          q: "What are the ten key opener types for starting conversations?",
          a: "1. Simple greeting\n2. Introduce yourself\n3. Specific compliment\n4. Comment on the situation\n5. Question about the situation\n6. Shared experience\n7. Open question\n8. Observation about them\n9. Humour\n10. Framing ('I'd kick myself if I didn't come say hi')"
        },
        {
          q: "What is the mindset for starting conversations?",
          a: "Simple openers work best — I don't need to be clever, just natural. Most people want someone to take the initiative. I'm genuinely curious — not desperate for contact."
        },
        {
          q: "What do you do if someone gives a short answer to your opener?",
          a: "Try a different angle. Share something about yourself to invite them in. Short answers usually mean the topic isn't engaging — not that they don't want to talk."
        },
        {
          q: "What makes 'framing' work as a conversation opener?",
          a: "It's honest: 'I'd kick myself if I didn't come say hi.' This signals directness and a bit of courage, which is more attractive than a rehearsed line. It also puts the reason on you, not them."
        }
      ]
    },
    {
      name: "Small Talk Flow",
      cards: [
        {
          q: "What are the five core principles of small talk flow?",
          a: "1. Build on what they say — every answer has a new thread\n2. Share back — small talk is mutual, not an interview\n3. Read the energy — short answers mean try a different topic\n4. Switch topics smoothly using bridges\n5. End well — 'This was great to talk to you' + a natural close"
        },
        {
          q: "What is the natural topic progression in small talk?",
          a: "The situation you're in → Work / what you do → Interests and free time → Light opinions and preferences"
        },
        {
          q: "How do you switch topics smoothly in small talk?",
          a: "Use bridges: 'That reminds me of...' / 'Completely different topic but...' / 'Apropos of nothing — what do you do when you're not working?' These signal a natural shift rather than an abrupt cut."
        },
        {
          q: "What is the mindset behind small talk?",
          a: "Small talk is not meaningless — it creates safety for deeper conversations. I build on what they say. Short answers mean try a different topic, not that the conversation is failing."
        }
      ]
    },
    {
      name: "Finding Common Ground",
      cards: [
        {
          q: "What are the five types of common ground?",
          a: "1. Experiences — you've been in similar situations\n2. Reactions — you respond the same way to something\n3. Values — you care about similar things\n4. Interests — you like the same things\n5. Resistance — you dislike the same things (powerful, use carefully)"
        },
        {
          q: "What are the three key techniques for finding common ground?",
          a: "1. Relate back — 'That's exactly like when I...'\n2. Me too moment — 'Wait, you too? I thought I was the only one.'\n3. Common reaction — 'I know exactly what you mean — it's completely absurd.'"
        },
        {
          q: "Do you need the exact same experience to find common ground?",
          a: "No. A similar feeling or reaction is enough. You don't need to have done the same thing — you need to have felt something similar. Shared reactions build rapport just as well as shared experiences."
        },
        {
          q: "What is the mindset behind finding common ground?",
          a: "There's always something in common — I look for it actively. Make it explicit when you find it. Genuine overlaps feel more connecting than performed ones."
        }
      ]
    },
    {
      name: "Mirroring & Paraphrasing",
      cards: [
        {
          q: "What are the three levels of mirroring and paraphrasing?",
          a: "1. Keyword mirroring — repeat the last word or a key word as a question: 'Stressful?' / 'Three years?'\n2. Paraphrasing — restate in your own words: 'So if I understand right, you mean...'\n3. Emotion reflection — reflect the feeling: 'That sounds really frustrating.'"
        },
        {
          q: "Why does mirroring and paraphrasing work?",
          a: "It shows you actually listened. It invites them to confirm, correct, or go deeper. It takes pressure off you to say something clever. It creates a space where they feel heard."
        },
        {
          q: "What are three things to avoid when mirroring?",
          a: "1. Parrot-mirroring — repeating word for word everything they say\n2. Interrupting mid-sentence to paraphrase\n3. Interpreting too far: 'So you mean you actually hate her?' — that's your interpretation"
        },
        {
          q: "What is the mindset behind mirroring and paraphrasing?",
          a: "My job right now is to understand — not to respond. Mirroring back is a gift — it shows they are heard. I don't need to say something clever — I need to show I listened."
        }
      ]
    }
  ],

  listeningresponding: [
    {
      name: "Listening",
      cards: [
        {
          q: "What are the seven components of active listening?",
          a: "1. Presence — phone away, eye contact, body toward them\n2. Non-verbal signals — nods, 'mm', open expression\n3. Don't interrupt — let them finish\n4. Acknowledge — 'I hear you' / 'That sounds tough'\n5. Follow-up question — 'What happened then?'\n6. Summarise — 'If I understand right, you mean...'\n7. Listen for the feeling, not just the facts"
        },
        {
          q: "What four things does active listening avoid?",
          a: "1. Preparing your reply while they talk\n2. Interrupting with your own experiences\n3. Minimising: 'It'll be fine' / 'It's not that bad'\n4. Giving advice without being asked"
        },
        {
          q: "What is the difference between listening to respond and listening to understand?",
          a: "Listening to respond means you're half-listening while preparing what you'll say next. Listening to understand means you're fully present — you might not know what you'll say until they've finished."
        },
        {
          q: "What is the mindset behind active listening?",
          a: "I listen to understand — not to respond. The most important thing being said is often what isn't said directly."
        }
      ]
    },
    {
      name: "Agreeing",
      cards: [
        {
          q: "What are the six ways to agree?",
          a: "1. Simple and genuine — 'Yes, that's really true.'\n2. Enthusiastic — 'Exactly! That's exactly what I think.'\n3. With recognition — 'Yes, and I felt exactly the same when...'\n4. With nuance — 'Yes, largely — though I'd add...'\n5. Build on it — 'Yes, and that makes me think...'\n6. Validate the feeling — 'I completely understand that — it makes total sense.'"
        },
        {
          q: "What three things should you avoid when agreeing?",
          a: "1. Reflexive agreement without listening\n2. Agreeing with things you don't actually believe\n3. Agreeing and then immediately changing topic without building on it"
        },
        {
          q: "What is the mindset behind agreeing?",
          a: "Genuine agreement builds trust. Empty agreement does the opposite. I agree when I mean it — and I show it."
        }
      ]
    },
    {
      name: "Disagree",
      cards: [
        {
          q: "What are the six ways to disagree?",
          a: "1. Direct and clear — 'I actually don't agree with that. I think...'\n2. Soft but firm — 'I see it a bit differently — for me it's more about...'\n3. Via question — 'Are you sure about that?'\n4. With respect — 'I understand why you think that — and still I think...'\n5. Playful — 'No, that's completely wrong. Let me explain.' (with a smile)\n6. Strong and direct — 'No, that's not right. Here's why.'"
        },
        {
          q: "What three things should you avoid when disagreeing?",
          a: "1. Agreeing to avoid discomfort\n2. Attacking the person instead of the opinion\n3. Backing down without a real reason — giving up your position just because they push"
        },
        {
          q: "What is the mindset behind disagreeing?",
          a: "My opinions are worth holding on to. I can disagree and still keep the relationship warm. Disagreeing is not an attack — it's honesty."
        }
      ]
    },
    {
      name: "Share Feelings",
      cards: [
        {
          q: "What are the three levels of sharing feelings?",
          a: "Light: 'I'm actually a bit stressed right now, but it'll sort itself out.'\nMid: 'I'm carrying a feeling I can't quite put my finger on.'\nDeep: 'What I actually feel about this is...'"
        },
        {
          q: "What makes sharing feelings authentic?",
          a: "1. Specific feeling — not 'fine' but 'actually a bit tired but otherwise okay'\n2. Calibrated depth — not too personal too fast, but not empty either\n3. Without demanding a reaction — you share, you don't need comfort\n4. With openness — 'I'm not sure exactly why, but it feels like...'"
        },
        {
          q: "What is the mindset behind sharing feelings?",
          a: "Sharing how I feel is not weakness — it's connection. Specificity makes the feeling believable and human. I share without needing a specific reaction."
        }
      ]
    }
  ],

  influenceframing: [
    {
      name: "Persuasion Framing",
      description: "Influencing someone's view by understanding their perspective first and framing in their values.",
      cards: [
        { q: "What are the five principles of persuasion framing?", a: "Understand their perspective / Find common ground / Frame in their values / Use images and stories / Give a choice" },
        { q: "What is the objection-handling formula?", a: "Acknowledge → reframe → offer new perspective.\nNever argue against the objection directly — acknowledge the valid part first." },
        { q: "What is the most common mistake in persuasion?", a: "Starting with your argument instead of their perspective. People are more open to a proposal that seems to understand their situation first." },
        { q: "Why do facts alone rarely persuade?", a: "Because most decisions are emotional, not logical. Facts can support a decision that's already emotionally made — they rarely create it." }
      ]
    },
    {
      name: "Reframe",
      description: "Restating a situation in a way that changes its meaning — the four types and the structure.",
      cards: [
        { q: "What are the four types of reframe?", a: "Meaning reframe — change what it means\nContext reframe — change the context\nPerspective reframe — offer a different vantage point\nDefinition reframe — change how the problem itself is defined" },
        { q: "What is the structure of offering a reframe?", a: "Acknowledge their frame → offer the alternative → don't insist.\n\"I can see why it feels like that. Another way to look at it might be...\"" },
        { q: "What is the difference between reframing and dismissing?", a: "A reframe acknowledges the original frame as understandable and offers an equally honest alternative. Dismissing denies the original frame: \"No, it's actually fine.\"" },
        { q: "When is a reframe not appropriate?", a: "When someone needs to feel heard before they can hear a new perspective. Offer the reframe only after acknowledging their experience — not instead of it." }
      ]
    },
    {
      name: "Grounding",
      description: "Being rooted in your values and communicating them naturally — as a foundation for authentic influence.",
      cards: [
        { q: "What are the four ways to ground yourself in conversation?", a: "Share a value directly\nShow a value through a story\nRespond to a question with something real\nSay no to something that doesn't fit — and know why" },
        { q: "What is the difference between grounding and moralising?", a: "Grounding is sharing — offering your value as part of who you are.\nMoralising is prescribing — implying others should share your value.\nOne creates connection; the other creates distance." },
        { q: "What makes a stated value feel authentic rather than performed?", a: "Specificity and honesty about the cost or uncertainty. \"I believe in honesty — even when it's uncomfortable. It's cost me things, but it's worth it.\" is more credible than \"I believe in honesty.\"" }
      ]
    },
    {
      name: "Observation",
      description: "Actively noticing details in the environment and the person you're talking with — and choosing what to do with what you see.",
      cards: [
        { q: "What are the five things to observe in a conversation?", a: "Environment / The person / Behaviour patterns / The conversation (what they return to) / The atmosphere (what's not being said)" },
        { q: "What are the five things you can do with an observation?", a: "Name it / Use it for humour / Use it for empathy / Use it for persuasion / Keep it" },
        { q: "When should you name an observation vs keep it?", a: "Name it when it serves the other person or the conversation. Keep it when it's primarily useful to you — for how you engage, not for saying out loud." },
        { q: "What is the relationship between observation and influence?", a: "You can't frame something in someone else's values if you haven't observed what those values are. Observation is the first step of all influence work." }
      ]
    }
  ],

  storytelling: [
    {
      name: "Storytelling",
      description: "The key concepts and structures behind effective storytelling.",
      cards: [
        { q: "What is the five-part structure of a good story?",                       a: "Hook / Context / Conflict or Twist / Resolution / Point (optional)" },
        { q: "What is the single most important thing that makes a story engaging?",   a: "Specific details. Not \"a colleague\" but \"Marcus from accounting.\" Specificity makes it real." },
        { q: "What is the timing rule for the punchline or twist?",                    a: "Slow down before it. Pause. Deliver at a natural speed. Then move on — don't explain it or laugh first." },
        { q: "What do you do when a story runs long and people start drifting?",       a: "Fast-forward: \"The short version: [resolution].\" Better to land it briefly than trail off." },
      ]
    }
  ],

  humourpractise: [
    {
      name: "Self Humour",
      cards: [
        { q: "What is the core idea behind self humour?", a: "Joking about yourself in a way that shows distance and ease — you see the flaw and don't take it too seriously. Not self-criticism; a sign of security.", bundle: 'free' },
        { q: "What are the four techniques of self humour?", a: "Acknowledge with humour, exaggerate the flaw, accept with dignity, turn it into charm.", bundle: 'free' },
        { q: "What's the difference between self humour and self-deprecation?", a: "Self humour shows distance — you find the flaw funny too. Self-deprecation diminishes you and invites others to confirm a negative view.", bundle: 'free' },
        { q: "What does self humour signal to others?", a: "Security and self-awareness — you don't need to protect your image, and someone who can laugh at themselves is easier to be around.", bundle: 'free' },
        { q: "When does self humour NOT work?", a: "When you genuinely feel bad or hurt. From real insecurity it reads as painful, not charming.", bundle: 'free' },
        { q: "How can you tell healthy self humour from harmful?", a: "Healthy: you say it once, laugh, move on. Harmful: you repeat it, wait to be contradicted, or feel worse after.", bundle: 'pro' },
        { q: "Why is exaggerating a flaw funny rather than sad?", a: "The exaggeration signals you don't believe the worst version — the gap between claim and reality is the joke.", bundle: 'pro' },
        { q: "How do you use self humour when the criticism is real and expects a serious answer?", a: "Acknowledge the true part lightly first, then engage: \"You're not wrong — and that's the worst part.\" Once, then answer for real.", bundle: 'pro' },
      ]
    },
    {
      name: "Observation Humour",
      cards: [
        { q: "What is observation humour?", a: "Pointing out something already a little absurd in the shared situation — noticing a joke rather than inventing one.", bundle: 'free' },
        { q: "Why does observation humour land so reliably?", a: "Because you're both already seeing it — naming it out loud gives everyone permission to laugh at what they noticed.", bundle: 'free' },
        { q: "What do you look for to find an observation?", a: "The gap between what's expected and what's actually happening — the queue by the empty till, the silence in a lively café.", bundle: 'free' },
        { q: "How long should an observation be?", a: "One line. Say the thing, let it land, move on — explaining it kills it.", bundle: 'free' },
        { q: "Why is observation humour low-risk socially?", a: "It targets the situation, not a person, so nobody's the butt of the joke — it bonds people over a shared moment.", bundle: 'free' },
        { q: "What's the difference between an observation and a complaint?", a: "Same fact, different framing — a complaint says 'this is annoying,' an observation finds the absurd angle and invites a laugh.", bundle: 'pro' },
        { q: "When does observation humour fall flat?", a: "When only you can see it. If the absurdity isn't shared, it reads as a private joke or a criticism.", bundle: 'pro' },
        { q: "How does observation set up other humour moves?", a: "Noticing is the raw material — once you spot the absurd thing you can exaggerate it, tease around it, or just name it.", bundle: 'pro' },
      ]
    },
    {
      name: "Teasing",
      cards: [
        { q: "What makes teasing land as warm rather than mean?", a: "The target is small and obvious, and your affection is clear — it's obvious you like the person.", bundle: 'free' },
        { q: "What should you never tease about?", a: "An insecurity someone has shared, or something they can't change. Teasing works on harmless, chosen quirks.", bundle: 'free' },
        { q: "How long should a tease be?", a: "One line, then move on. Repeating the same tease until it stops being funny turns warmth into nagging.", bundle: 'free' },
        { q: "When should you not tease at all?", a: "When the person is already upset. Teasing needs a baseline of ease to read as play.", bundle: 'free' },
        { q: "What keeps teasing balanced?", a: "Being ready to laugh at yourself too — teasing is a two-way game, not a one-way jab.", bundle: 'free' },
        { q: "What's the difference between teasing and mocking?", a: "Teasing pulls someone closer with a shared laugh; mocking pushes them down. Warmth is the dividing line.", bundle: 'pro' },
        { q: "Why does exaggeration make teasing safer?", a: "An obvious exaggeration signals play — no one thinks you mean it literally, so the sting is gone.", bundle: 'pro' },
        { q: "How do you recover a tease that landed wrong?", a: "Drop the joke immediately, warm up, and if needed turn it on yourself — never double down.", bundle: 'pro' },
      ]
    },
    {
      name: "Joke About My Flaws",
      cards: [
        { q: "What is the core idea behind joking about your flaws?", a: "Naming your own flaw first, with lightness — if you've made the joke, there's nothing left for anyone to use against you.", bundle: 'free' },
        { q: "How is it different from self humour?", a: "Self humour is about your own awkward moment; joke about my flaws is a response to someone pointing at a flaw — you disarm the dig.", bundle: 'free' },
        { q: "What's the technique when someone names a flaw?", a: "Own it plainly, then exaggerate it a touch or give it a fond label — agree so hard it becomes funny.", bundle: 'free' },
        { q: "Why does owning the flaw disarm the other person?", a: "There's nothing to push against. Once you've agreed and joked, any further dig just repeats what you already said.", bundle: 'free' },
        { q: "What should you avoid when joking about a flaw?", a: "Actually running yourself down. It's ownership with lightness, not agreeing that you're worthless.", bundle: 'free' },
        { q: "Why does this work especially well in groups?", a: "It signals security and takes the ammunition off the table — the group laughs with you, not at you.", bundle: 'pro' },
        { q: "When does it tip into self-deprecation?", a: "When the lightness drops and it reads as genuine self-criticism, or when you're clearly fishing to be contradicted.", bundle: 'pro' },
        { q: "What if the flaw they name actually matters?", a: "Own the light version first to defuse, then address the real thing seriously if it needs it — one, then the other.", bundle: 'pro' },
      ]
    },
    {
      name: "Jokingly Brag",
      cards: [
        { q: "What makes jokingly bragging funny rather than arrogant?", a: "The exaggeration is so obvious it's clearly play, and the thing you're 'bragging' about is trivial.", bundle: 'free' },
        { q: "What's the ideal thing to jokingly brag about?", a: "Something small and mundane — parallel parking, the last slice — announced like a monumental achievement.", bundle: 'free' },
        { q: "What tone keeps it from tipping into real arrogance?", a: "Warmth and self-awareness. You're in on the joke; you don't actually believe you're a genius.", bundle: 'free' },
        { q: "How long should a jokingly brag be?", a: "One line, then move on. Explaining or milking it drains the fun.", bundle: 'free' },
        { q: "What does jokingly bragging pair well with?", a: "Self humour — brag about one tiny thing, then joke about something you're hopeless at. The contrast is the fun.", bundle: 'free' },
        { q: "Why is jokingly bragging the flip side of self-deprecation?", a: "Both are playful exaggeration about yourself — one inflates, one deflates — and both signal you don't take yourself too seriously.", bundle: 'pro' },
        { q: "When does a jokingly brag fall flat?", a: "When the thing is too big to be obviously a joke, or the tone is too dry for people to tell you're playing.", bundle: 'pro' },
        { q: "How does jokingly bragging show confidence?", a: "Only someone at ease can 'boast' as a joke — it plays with the very thing insecure people guard.", bundle: 'pro' },
      ]
    }
  ]
};
