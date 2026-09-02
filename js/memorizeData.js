// memorizeData.js — Theory flashcard data for Memorize mode
// Each strategy has theory questions (front) and answers (back)

const memorizeCollections = {

  playfulrefusals: [
    {
      name: "Playful Protest",
      guideFront: "Answer from memory, then flip.",
      description: "The concepts behind theatrical resistance: what the joke actually is, why the size mismatch carries it, and when protesting stops being funny.",
      cards: [
        { q: "What is the joke in a playful protest?", a: "The mismatch. You react to a two-second favour as though it were an enormous sacrifice, and everyone can hear that the size does not match.", bundle: 'free' },
        { q: "How should a playful protest be delivered?", a: "With a straight face, as though you mean it. Letting your expression give it away a moment later is what makes it land.", bundle: 'free' },
        { q: "What usually happens at the end of a playful protest?", a: "You agree anyway. The protest is decoration on a yes, not a refusal.", bundle: 'free' },
        { q: "Why does a playful protest make a request easier to accept?", a: "It lets you register that something is a bother without actually complaining, so nobody has to feel guilty for asking.", bundle: 'free' },
        { q: "When does a playful protest fall flat?", a: "When the request was genuinely difficult for the person to make. Then the joke reads as though you are weighing their need.", bundle: 'free' },
        { q: "How big should the protest be?", a: "Far too big. A mild grumble is just a grumble — the exaggeration is the whole signal that you are playing.", bundle: 'pro' },
        { q: "What is the risk of protesting and then refusing?", a: "It feels like a bait. The protest promises a yes, so a no after it lands worse than a plain no would have.", bundle: 'pro' },
        { q: "What does a playful protest say about the relationship?", a: "That it is relaxed enough to be teased in. You only protest theatrically with people you are comfortable with.", bundle: 'pro' },
      ]
    },
    {
      name: "Faked Incompetence",
      guideFront: "Answer from memory, then flip.",
      description: "The concepts behind declining by claiming inability: why an unbelievable excuse works better than a believable one, and who the joke is aimed at.",
      cards: [
        { q: "What is the move in faked incompetence?", a: "Declining by claiming the task is far beyond your abilities — too weak, too clumsy, too untrained — with an excuse nobody could believe.", bundle: 'free' },
        { q: "Why should the excuse be unbelievable?", a: "A believable excuse invites argument or sympathy. An absurd one signals that this is a no wrapped in a joke, not a negotiation.", bundle: 'free' },
        { q: "How is it delivered?", a: "Completely straight. A small sigh, a regretful tone, and no wink — the seriousness is what makes the absurdity funny.", bundle: 'free' },
        { q: "Who is the target of the joke?", a: "You are. That is why it softens a refusal: the other person is not being mocked for asking.", bundle: 'free' },
        { q: "What does faked incompetence let you avoid?", a: "Explaining your real reason. You decline without opening a discussion about whether the reason is good enough.", bundle: 'free' },
        { q: "When is faked incompetence the wrong tool?", a: "When you actually are the obvious person for the job and both of you know it. Then it reads as dodging rather than joking.", bundle: 'pro' },
        { q: "How does it differ from a plain excuse?", a: "A plain excuse asks to be believed. This one asks to be enjoyed — the point is the shared joke, not the reason.", bundle: 'pro' },
        { q: "What happens if you use it too often with the same person?", a: "It stops being a joke and starts being a pattern, and they hear it as an unwillingness to be asked at all.", bundle: 'pro' },
      ]
    },
  ],
  theregretfulno: [
    {
      name: "The Regretful No",
      guideFront: "Answer from memory, then flip.",
      description: "The concepts behind a sincere refusal: when regret is the right register, why brevity protects it, and how it differs from apology.",
      cards: [
        { q: "When is a regretful no the right register?", a: "When you genuinely wish you could say yes. If you do not, the regret is performed and the other person can usually hear it.", bundle: 'free' },
        { q: "Why must the regret be brief?", a: "Lingering in it turns honesty into a bid for sympathy, and the other person ends up comforting you about your own refusal.", bundle: 'free' },
        { q: "How many times should you say the regret?", a: "Once, clearly. Repeating it makes the refusal sound negotiable and puts the other person in the position of reassuring you.", bundle: 'free' },
        { q: "What is the difference between regret and apology?", a: "Regret says the situation is a shame. Apology says you did something wrong. Refusing is not usually wrong.", bundle: 'free' },
        { q: "What weakens a regretful no?", a: "Over-explaining. Every extra reason gives the other person something to solve, and turns a closed answer into a negotiation.", bundle: 'free' },
        { q: "What do you do when they offer to accommodate you?", a: "Name the real obstacle briefly. If it is not the date but the month, saying so prevents a series of alternatives.", bundle: 'pro' },
        { q: "How do you acknowledge their disappointment without reopening it?", a: "Say it once and leave it — \"I know, I'd have liked it too\" — without following it with another reason.", bundle: 'pro' },
        { q: "What can you offer instead of a yes?", a: "Help finding another route, when you mean it. An offer you do not mean is worse than a plain no.", bundle: 'pro' },
      ]
    },
  ],

  thehappyno: [
    {
      name: "The Happy No",
      guideFront: "Answer from memory, then flip.",
      description: "The concepts behind a warm, guilt-free refusal: what carries it, what weakens it, and why the tone matters more than the words.",
      cards: [
        { q: "What carries a happy no?", a: "The tone. Warm and relaxed, with no defensiveness — the words matter far less than sounding untroubled.", bundle: 'free' },
        { q: "What weakens a no?", a: "Over-apologising, a long explanation, or softening it with \"maybe later\" when you mean no. All three invite more pressure.", bundle: 'free' },
        { q: "Why does a long explanation make a no weaker?", a: "Every reason you give is something the other person can argue with. A short no has nothing to attack.", bundle: 'free' },
        { q: "What can you add after the no to soften it?", a: "Something light and genuine — a compliment, a thank-you, or a small joke — as long as it does not reopen the question.", bundle: 'free' },
        { q: "What is the difference between a warm no and a soft no?", a: "A warm no is friendly but final. A soft no leaves the door open, which is only fair if you actually mean to.", bundle: 'free' },
        { q: "When is a happy no the wrong choice?", a: "When the request is serious and the person is not. Cheerfulness then reads as dismissive, and a plain or regretful no fits better.", bundle: 'pro' },
        { q: "How do you say no happily without sounding sarcastic?", a: "Keep the warmth genuine and aimed at the person, not the request. Sarcasm appears when the tone mocks the asking.", bundle: 'pro' },
        { q: "What do you do if they ask again after a happy no?", a: "Repeat it in the same tone. Changing tone on the second no signals that pressure works.", bundle: 'pro' },
      ]
    },
  ],

  speakingupingroups: [
    {
      name: "Speaking Up in Groups",
      guideFront: "Answer from memory, then flip.",
      description: "The concepts behind holding your place in a group: the five meeting situations, what makes a contribution land, and the sequence for handling an interruption.",
      cards: [
        { q: "What are the five meeting situations worth having a move for?", a: "Taking the floor, interrupting constructively, redirecting, summarising, and closing towards a decision.", bundle: 'free' },
        { q: "What makes a contribution land in a group?", a: "It is shorter than you think, it uses one concrete example rather than three, and it ends on a clear point or question.", bundle: 'free' },
        { q: "What is the sequence for handling an interruption?", a: "Stay calm, acknowledge it briefly, mark that you are finishing, finish the point, then give them the floor.", bundle: 'free' },
        { q: "Why does an open ending lose the group?", a: "With nothing to react to, the next person simply starts a new thread and your point disappears.", bundle: 'free' },
        { q: "What is the easiest way to take the floor?", a: "Start the sentence. \"What I'm thinking is…\" with eye contact holds the room while the rest of the thought arrives.", bundle: 'free' },
        { q: "How do you interrupt someone else without it landing badly?", a: "Bridge into it — \"if I can add something, it connects to what you said\" — so it reads as building rather than taking over.", bundle: 'pro' },
        { q: "How do you redirect a meeting that has drifted?", a: "Name the drift without blaming anyone and point back: \"can we go back to X? I think that's the core.\"", bundle: 'pro' },
        { q: "When is it better to let an interruption stand?", a: "When fighting for the turn would cost more than the point is worth. Return to it later with \"coming back to what I was saying\".", bundle: 'pro' },
      ]
    },
  ],

  transitions: [
    {
      name: "Topic Shift",
      guideFront: "Answer from memory, then flip.",
      description: "The concepts behind moving a conversation from one subject to another: the three kinds of shift, where the material for a link comes from, and why closing the old topic matters.",
      cards: [
        { q: "What are the three ways to move from one topic to another?", a: "A natural link, using something the two topics share. An associative link, picking up a word or feeling in what they just said. Or a direct switch, where you say out loud that you are changing subject.", bundle: 'free' },
        { q: "What makes a topic change feel smooth rather than abrupt?", a: "It feels motivated. The other person can see why you moved — either through a link, or because you told them you were moving.", bundle: 'free' },
        { q: "When is a direct switch better than a clever link?", a: "When no honest link exists. Forcing one sounds strange, while \"I want to ask you about something else\" is clean and confident.", bundle: 'free' },
        { q: "Where do you find the material for a natural link?", a: "In what they just said. A word, a feeling or a small detail in their last answer is usually enough to build a bridge from.", bundle: 'free' },
        { q: "What is the risk of changing topic with no signal at all?", a: "It reads as not listening. Their topic feels dropped rather than finished, even if you had a good reason to move.", bundle: 'free' },
        { q: "How do you close a topic before opening a new one?", a: "Give it a short ending — a reaction, a summary or a small verdict — so it sounds finished. One sentence is enough.", bundle: 'pro' },
        { q: "What can you do when a group is deep in a topic you cannot follow?", a: "Move from the subject to the person. Ask what got them into it, and the thread continues while the topic changes.", bundle: 'pro' },
        { q: "Why is a topic change an opportunity rather than an interruption?", a: "Whoever moves the conversation is steering it. Choosing the next topic is how you take it somewhere you both find interesting.", bundle: 'pro' },
      ]
    },
    {
      name: "Question to Story",
      guideFront: "Answer from memory, then flip.",
      description: "The concepts behind turning an answer into a story of your own: the three beats, the role of the reaction, and how to keep the story a reply rather than a competing turn.",
      cards: [
        { q: "What are the three beats from a question to your story?", a: "Ask and let them answer. React to what they said. Then link into your story.", bundle: 'free' },
        { q: "Why react before linking into your story?", a: "Without the reaction it sounds like you were only waiting for your turn. Reacting shows the answer actually landed.", bundle: 'free' },
        { q: "What kind of phrase links their answer to your story?", a: "A short bridge, such as \"that reminds me\", \"that's funny, because\" or \"the same thing happened to me\".", bundle: 'free' },
        { q: "What goes wrong if you only ask questions?", a: "It turns into an interview. Trading a story back makes it an exchange instead.", bundle: 'free' },
        { q: "How long should the story you link into be?", a: "Short. You are answering their answer, not taking the floor. A few sentences is usually enough.", bundle: 'free' },
        { q: "What should your story share with their answer?", a: "The feeling or the situation, not the details. It should feel like a reply rather than a separate story.", bundle: 'pro' },
        { q: "What do you do when your story is much bigger than theirs?", a: "Shrink it, or save it. A story that outshines theirs turns the exchange into a contest.", bundle: 'pro' },
        { q: "How do you avoid sounding like you are one-upping them?", a: "Stay the person who struggled in your story, not the person who handled it better.", bundle: 'pro' },
      ]
    },
    {
      name: "Story to Question",
      guideFront: "Answer from memory, then flip.",
      description: "The concepts behind closing a story with an invitation: why the question is needed, what makes it feel natural, and how to spot the moment to hand over.",
      cards: [
        { q: "Why end a story with a question?", a: "A story with no follow-up becomes a monologue. The question hands the floor back and turns your turn into a conversation.", bundle: 'free' },
        { q: "What makes a closing question feel natural?", a: "It grows out of the story. It asks about the same thing you just talked about, rather than opening something unrelated.", bundle: 'free' },
        { q: "Name three closing questions that work after most stories.", a: "\"Have you had anything like that happen?\" \"What would you have done?\" \"What do you think about that?\"", bundle: 'free' },
        { q: "What is the sign that you have had the floor too long?", a: "You are still talking and they have stopped adding anything. That is the moment to close and ask.", bundle: 'free' },
        { q: "What should you avoid when closing a story?", a: "A question stapled on that has nothing to do with the story. It sounds like politeness rather than interest.", bundle: 'free' },
        { q: "How do you close a story that revealed an opinion?", a: "Invite disagreement: \"that's where I landed — do you see it differently?\" It signals you want a conversation, not agreement.", bundle: 'pro' },
        { q: "How do you close a story you feel went on too long?", a: "Name it briefly and hand over: \"that's the short version — your turn.\"", bundle: 'pro' },
        { q: "What does closing with a question do for the other person?", a: "It gives them a clear place to enter. Most people wait for an opening instead of taking one.", bundle: 'pro' },
      ]
    },
    {
      name: "Casual to Serious",
      guideFront: "Answer from memory, then flip.",
      description: "The concepts behind lowering the register on purpose: the four tools, why an unannounced shift alarms people, and how to come back out of the serious part afterwards.",
      cards: [
        { q: "What are the four tools for shifting from light to serious?", a: "A pause, a lower and slower voice, a spoken signal, and a soft entry before the main point.", bundle: 'free' },
        { q: "Why is an abrupt shift into a serious tone a problem?", a: "It alarms people. With no warning, the other person braces for bad news before they know what it is about.", bundle: 'free' },
        { q: "What does a spoken signal sound like?", a: "A short sentence announcing the change, such as \"can I switch gear for a second?\" or \"on a more serious note\".", bundle: 'free' },
        { q: "What is a soft entry?", a: "Starting with something related but less loaded, so the other person can adjust before you reach the middle of it.", bundle: 'free' },
        { q: "What does the pause do?", a: "It marks the break. A short silence tells the other person that what comes next belongs to a different register.", bundle: 'free' },
        { q: "How do you shift register without it feeling like an attack?", a: "Signal the change and say what it is not: \"nothing bad, but I want to say this properly.\" The warning removes the threat.", bundle: 'pro' },
        { q: "When should you move a serious conversation somewhere else?", a: "When other people are present, or the setting cannot hold it. Ask for the moment rather than taking it there and then.", bundle: 'pro' },
        { q: "How do you get back to lightness afterwards?", a: "Close the serious part out loud — \"good that we said that\" — and then open something easy. Without a closing signal it hangs over the rest.", bundle: 'pro' },
      ]
    },
  ],

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
  ],
  setupstatement: [
    {
      name: "Core Idea",
      description: "The concept behind setup statements and the five types.",
      cards: [
        { q: "What is a setup statement?", a: "You say something yourself first (a statement), then immediately ask the other person about the same thing.", bundle: 'free' },
        { q: "Why say a statement before the question?", a: "It gives the other person something to react to, so they don't start from nothing — and it makes you part of the conversation, not just the interviewer.", bundle: 'free' },
        { q: "What are the five types of setup statement?", a: "Opinion, Purpose, Status, Action, Background.", bundle: 'free' },
        { q: "What's the one rule that keeps it working?", a: "Keep the statement short — one sentence — and follow it straight away with a question on the same topic.", bundle: 'free' },
        { q: "What do you do if a setup gets a one-word answer?", a: "Don't repeat the same type — switch to an easier one (often Action) that gives them a concrete thread to grab.", bundle: 'pro' },
        { q: "What's the through-line of all five types?", a: "Each one gives a little of yourself first, then hands the same topic to the other person as a question.", bundle: 'pro' },
      ]
    },
    {
      name: "Opinion Setup",
      description: "The theory behind the Opinion type.",
      cards: [
        { q: "What is an Opinion setup?", a: "You share what you think about something, then ask what they think.", bundle: 'free' },
        { q: "When does an Opinion setup fit best?", a: "When there's something present to react to — a film, the food, the venue, the event itself.", bundle: 'free' },
        { q: "Why share the opinion before asking?", a: "It gives them something concrete to agree, disagree, or build on — easier than a cold \"what do you think?\".", bundle: 'pro' },
      ]
    },
    {
      name: "Purpose Setup",
      description: "The theory behind the Purpose type.",
      cards: [
        { q: "What is a Purpose setup?", a: "You say why you're here or what you're after, then ask them the same.", bundle: 'free' },
        { q: "When does it fit best?", a: "When you're both new to a place — everyone there has a reason to be, so it's easy to answer.", bundle: 'free' },
        { q: "Why is Purpose an easy opener?", a: "It needs nothing clever — the shared situation already gives you both something honest to say.", bundle: 'pro' },
      ]
    },
    {
      name: "Status Setup",
      description: "The theory behind the Status type.",
      cards: [
        { q: "What is a Status setup?", a: "You say how you're feeling right now, then ask how they are.", bundle: 'free' },
        { q: "When does it fit best?", a: "When the mood is worth naming — tired, nervous, upbeat — and naming it invites them to do the same.", bundle: 'free' },
        { q: "Why does naming your state help?", a: "It makes it easy for them to say more than \"fine\" — you've modelled an honest answer first.", bundle: 'pro' },
      ]
    },
    {
      name: "Action Setup",
      description: "The theory behind the Action type.",
      cards: [
        { q: "What is an Action setup?", a: "You say what you're doing or working on, then ask what they're up to.", bundle: 'free' },
        { q: "When does it fit best?", a: "When you want to hand them a concrete thread instead of a blank \"what's new?\".", bundle: 'free' },
        { q: "Why is Action good with a one-word answerer?", a: "A specific activity gives them something easy to latch onto, so it often revives a stalled opener.", bundle: 'pro' },
      ]
    },
    {
      name: "Background Setup",
      description: "The theory behind the Background type.",
      cards: [
        { q: "What is a Background setup?", a: "You say a bit about what led you here — where you were, what happened before — then ask them.", bundle: 'free' },
        { q: "When does it fit best?", a: "When a little story is warmer than a bare question and gives them a thread to pull.", bundle: 'free' },
        { q: "Why does a small story open people up?", a: "It's warmer and more human than a direct question, and it models the kind of answer you're inviting.", bundle: 'pro' },
      ]
    },
  ],
  apologizing2: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The shape of the pack: five steps in an order that decides whether the apology works.",
      cards: [
        { q: "What are the five steps in this pack?", a: "Name what they felt, show you understand why, say their feelings matter, apologise for what you did, say what you'll do differently.", bundle: 'free' },
        { q: "Where does the word sorry sit?", a: "Fourth, not first.", bundle: 'free' },
        { q: "When is this pack the right one?", a: "When somebody was genuinely hurt — not for everyday mistakes.", bundle: 'free' },
        { q: "Why does sorry come fourth?", a: "An apology delivered before you have shown understanding is heard as wanting the conversation to end.", bundle: 'pro' },
        { q: "What is the commonest failure in a serious apology?", a: "Going straight to sorry.", bundle: 'pro' },
        { q: "What makes an apology sound sincere?", a: "Specifics — the detail that proves you thought about it, not feeling words.", bundle: 'pro' },
      ]
    },
    {
      name: "Name What They Felt",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The first step — evidence that the effect on them registered.",
      cards: [
        { q: "What does this step prove?", a: "That you have thought about them rather than about getting out of the conversation.", bundle: 'free' },
        { q: "Name two ways to do it.", a: "Any two of: say what you observed, name the likely feeling, name the size of it, ask rather than assume.", bundle: 'free' },
        { q: "What is the mindset line for this step?", a: "Their feeling, not your intention.", bundle: 'free' },
        { q: "Why is this step risky if you stop there?", a: "Naming a feeling and never apologising looks like technique, which is worse than saying nothing.", bundle: 'pro' },
        { q: "What do you do when you genuinely do not know how it landed?", a: "Ask — \"I don't want to guess, how did that feel?\"", bundle: 'pro' },
        { q: "Why does this move carry more weight from you than from anyone else?", a: "Because you caused it, so the acknowledgement is the first real evidence.", bundle: 'pro' },
      ]
    },
    {
      name: "Show You Understand Why",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The step that separates being heard from being humoured.",
      cards: [
        { q: "What is the difference between this step and the one before?", a: "The first says the feeling registered; this says it was reasonable.", bundle: 'free' },
        { q: "Name two ways to show understanding.", a: "Any two of: name their reasoning, say anyone would have, connect it to what they said before, name what they were entitled to expect.", bundle: 'free' },
        { q: "What does this step stop the apology sounding like?", a: "Management.", bundle: 'free' },
        { q: "Why can this step not be faked?", a: "It requires you to have actually reconstructed their side.", bundle: 'pro' },
        { q: "What is the strongest version?", a: "Naming what they were entitled to expect — \"you had every reason to think I'd be there\".", bundle: 'pro' },
        { q: "What do you say if they call their own reaction an overreaction?", a: "Disagree, if you think so — \"it was the third time, and that changes it\".", bundle: 'pro' },
      ]
    },
    {
      name: "Say Their Feelings Matter",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The step that moves the apology from the incident to the relationship.",
      cards: [
        { q: "What does this step explain?", a: "Why you are bothering to have the conversation at all.", bundle: 'free' },
        { q: "Name two ways to say it.", a: "Any two of: name what matters, name what you do not want to be, say the relationship matters more than the thing, say it plainly and shortly.", bundle: 'free' },
        { q: "What makes this step fail?", a: "Anything abstract — it sounds like a script.", bundle: 'free' },
        { q: "Why is \"I don't want to be the friend who always cancels\" often better than \"you matter to me\"?", a: "It is specific and names something real rather than a sentiment.", bundle: 'pro' },
        { q: "How do you do this step in a professional relationship?", a: "Keep it about the working relationship — \"I'd rather you told me when I do this\".", bundle: 'pro' },
        { q: "Which step do people find most exposing?", a: "This one.", bundle: 'pro' },
      ]
    },
    {
      name: "Apologise for What You Did",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The actual apology, specific and unconditional.",
      cards: [
        { q: "What makes an apology specific enough?", a: "Naming exactly what you did, not a general expression of regret.", bundle: 'free' },
        { q: "What three words make it not an apology?", a: "\"If\", \"but\" and \"you\" — as in \"sorry if\", \"sorry but\", \"sorry you felt\".", bundle: 'free' },
        { q: "Name two ways to apologise properly.", a: "Any two of: sorry for the specific action, sorry plus what you should have done, own the part that is yours, say it was wrong rather than unfortunate.", bundle: 'free' },
        { q: "How do you apologise when you still think you were right?", a: "Apologise precisely for your part — the tone, the timing, the audience — and hold the substance separately.", bundle: 'pro' },
        { q: "Why is \"I'm sorry you feel that way\" a non-apology?", a: "It relocates the problem into the other person's feelings.", bundle: 'pro' },
        { q: "What do you do if literally nothing is yours?", a: "Say so kindly rather than performing regret you do not feel.", bundle: 'pro' },
      ]
    },
    {
      name: "Say What You'll Do Differently",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The step that costs you something in future.",
      cards: [
        { q: "Why is this the most important step to someone let down before?", a: "It is the only part that is not words about the past.", bundle: 'free' },
        { q: "How specific should the plan be?", a: "Small enough to be believed, specific enough to be checked.", bundle: 'free' },
        { q: "Name two kinds of plan.", a: "Any two of: a concrete behaviour change, a different response in the same moment, giving them a way to stop it, saying what you will not do.", bundle: 'free' },
        { q: "What is wrong with \"I'll be better\"?", a: "It promises nothing and cannot be checked.", bundle: 'pro' },
        { q: "Why does giving them a way to stop it work well?", a: "It hands them some control instead of asking them to trust and wait.", bundle: 'pro' },
        { q: "What do you say when they will not accept the apology?", a: "Leave it with them, and let the change do the rest.", bundle: 'pro' },
      ]
    },
  ],
  startingconversations3: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The shape of the pack: four openers that turn the attention onto the other person, and how to calibrate them.",
      cards: [
        { q: "What are the four openers in this pack?", a: "Compliment something specific, make a guess about them, ask about them, ask how they really are.", bundle: 'free' },
        { q: "What do all four have in common?", a: "They turn the attention onto the person rather than the room or something shared.", bundle: 'free' },
        { q: "What is the failure that runs through all four?", a: "Doing too much at once, so the other person feels interviewed.", bundle: 'free' },
        { q: "What is the one rule for compliments?", a: "Compliment what they chose, not what they were born with.", bundle: 'pro' },
        { q: "What is the one rule for asking how someone really is?", a: "Only ask if you have time to hear the answer.", bundle: 'pro' },
        { q: "What should decide your next move?", a: "Their answer — not the next item on your list.", bundle: 'pro' },
      ]
    },
    {
      name: "Compliment Something Specific",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The fastest way to make a stranger feel seen.",
      cards: [
        { q: "Why is a specific compliment stronger than a general one?", a: "It proves you were actually paying attention — it could only be said to them.", bundle: 'free' },
        { q: "What should you compliment, and what should you leave?", a: "What they chose, did or can take credit for. Not bodies or faces.", bundle: 'free' },
        { q: "Name two things worth complimenting.", a: "Any two of: something they chose to wear or carry, something they did, a skill you just saw.", bundle: 'free' },
        { q: "How do you stop a compliment being a full stop?", a: "Add a question — \"great notebook, where do you get those?\"", bundle: 'pro' },
        { q: "Why does a compliment from a manager land differently?", a: "More power makes the same words heavier, so personal remarks stop being casual.", bundle: 'pro' },
        { q: "What is stronger than complimenting an object?", a: "Complimenting something they did, because it is about them rather than their things.", bundle: 'pro' },
      ]
    },
    {
      name: "Make a Guess About Them",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The opener where being wrong works as well as being right.",
      cards: [
        { q: "Why does a wrong guess still work?", a: "It gives them something to correct, and corrections come with more words than confirmations.", bundle: 'free' },
        { q: "What is safe to guess about?", a: "Experience, role, mood, whether they know the place.", bundle: 'free' },
        { q: "What should you avoid guessing about?", a: "Where someone is from, what they do for a living, their age or their background.", bundle: 'free' },
        { q: "How do you make a guess easy to correct?", a: "Say it lightly and mark it as a guess — \"let me guess…\".", bundle: 'pro' },
        { q: "What is the mindset line for this move?", a: "Aim to be interesting, not accurate.", bundle: 'pro' },
        { q: "What is the only way to make a wrong guess awkward?", a: "Defending it, or over-apologising.", bundle: 'pro' },
      ]
    },
    {
      name: "Ask About Them",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The most direct opener — saying plainly that you want to know something about them.",
      cards: [
        { q: "Why does asking about someone work so reliably?", a: "Most people are asked about themselves far less often than they would like.", bundle: 'free' },
        { q: "Where does the skill actually sit?", a: "In the follow-up, not the first question.", bundle: 'free' },
        { q: "Name two ways to ask about them.", a: "Any two of: the plain question, ask how they got here, ask about the part outside this room, follow their answer down.", bundle: 'free' },
        { q: "What turns a conversation into an interview?", a: "Questions that start fresh instead of following the last answer.", bundle: 'pro' },
        { q: "What are the two fixes for interviewing?", a: "Follow one specific word they said, and give something of your own back.", bundle: 'pro' },
        { q: "Why is \"how did you end up doing that\" better than \"what do you do\"?", a: "It has a story in it, so the answer is longer and more personal.", bundle: 'pro' },
      ]
    },
    {
      name: "Ask How They Really Are",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The rarest of the four, and the one that carries an obligation.",
      cards: [
        { q: "What makes this different from the ritual \"how are you\"?", a: "It is a real question, usually prompted by something you noticed.", bundle: 'free' },
        { q: "What must you do before asking it?", a: "Notice something specific — otherwise it is the ritual version and gets the ritual answer.", bundle: 'free' },
        { q: "What should you do straight after asking?", a: "Stop talking. Most people need a beat before answering honestly.", bundle: 'free' },
        { q: "Why is asking on your way past worse than not asking?", a: "You signal interest and then withdraw it, which the other person remembers.", bundle: 'pro' },
        { q: "What helps when someone gives a real answer?", a: "Listening without fixing, not comparing it to your own experience, and offering one concrete thing.", bundle: 'pro' },
        { q: "What do you do when it is beyond a conversation?", a: "Say so kindly and point towards real support — that is the right move, not a failure of nerve.", bundle: 'pro' },
      ]
    },
  ],
  endingconversations: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The shape of the pack: seven closing moves that are meant to be combined, and the order that makes them work.",
      cards: [
        { q: "What are the seven moves in this pack?", a: "Exit phrase, give a reason, offer to continue later, say something positive, wish them well, leave with one last question, end on a joke.", bundle: 'free' },
        { q: "Are these alternatives or components?", a: "Components. A real ending usually stacks two to four of them.", bundle: 'free' },
        { q: "What is the natural order?", a: "Reason, then something warm, then the exit phrase last.", bundle: 'free' },
        { q: "Why does the exit phrase come last?", a: "It is the full stop. Anywhere else and the conversation reopens.", bundle: 'pro' },
        { q: "What is the minimum for a good ending?", a: "A reason and an exit phrase.", bundle: 'pro' },
        { q: "Why does the ending matter more than the middle?", a: "People remember how a conversation finished far more clearly than what was in it.", bundle: 'pro' },
      ]
    },
    {
      name: "Use an Exit Phrase",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The two-word full stop.",
      cards: [
        { q: "What is an exit phrase doing?", a: "Signalling the end in words that carry no new information, so nothing can restart.", bundle: 'free' },
        { q: "Where does it belong in an ending?", a: "Last.", bundle: 'free' },
        { q: "Name two kinds of exit phrase.", a: "Any two of: the plain one, the warm one, the one that hands them the exit, the forward-looking one.", bundle: 'free' },
        { q: "What is wrong with an exit phrase on its own?", a: "Nothing rude exactly, but it is abrupt in a way people notice.", bundle: 'pro' },
        { q: "What does \"I'll let you get on\" do?", a: "Hands them the exit, so leaving looks like a courtesy to them.", bundle: 'pro' },
        { q: "What is the mindset line for this move?", a: "An exit phrase followed by another sentence is not an exit phrase.", bundle: 'pro' },
      ]
    },
    {
      name: "Give a Reason",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The move that makes leaving about your day rather than about them.",
      cards: [
        { q: "What does a reason do?", a: "It turns leaving from a judgement about the conversation into a fact about your day.", bundle: 'free' },
        { q: "How good does the reason have to be?", a: "Not good at all. It only has to exist.", bundle: 'free' },
        { q: "Name two kinds of reason.", a: "Any two of: time-bound, an obligation, a vague one, someone else waiting.", bundle: 'free' },
        { q: "Why is a time-bound reason strongest?", a: "It explains the urgency as well as the ending.", bundle: 'pro' },
        { q: "What happens if you explain the reason in detail?", a: "It sounds like an excuse and keeps the conversation going.", bundle: 'pro' },
        { q: "What do you say when you have no reason at all?", a: "\"I should probably get on.\" Wanting to go is a reason.", bundle: 'pro' },
      ]
    },
    {
      name: "Offer to Continue Later",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The move that separates leaving from leaving them.",
      cards: [
        { q: "What does this move separate?", a: "That you are leaving, and that you are not leaving them.", bundle: 'free' },
        { q: "What does it create that no other ending does?", a: "The next conversation.", bundle: 'free' },
        { q: "Name two ways to offer more later.", a: "Any two of: name the next time, leave it open but real, hand them the follow-up, say what you want to hear more about.", bundle: 'free' },
        { q: "What is the condition on this move?", a: "Only offer it if it is true. An unhonoured continuation is worse than a plain goodbye.", bundle: 'pro' },
        { q: "Which version is strongest?", a: "Naming the next time — \"tell me the rest on Thursday\".", bundle: 'pro' },
        { q: "When is this move especially useful?", a: "When you have to leave mid-flow and do not want it read as rejection.", bundle: 'pro' },
      ]
    },
    {
      name: "Say Something Positive About the Talk",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The move that tells them how to remember it.",
      cards: [
        { q: "What does this move do?", a: "Tells the other person how to remember the exchange.", bundle: 'free' },
        { q: "When should you say it?", a: "As you leave. It works because it is the last thing.", bundle: 'free' },
        { q: "Name two ways to say it.", a: "Any two of: the standard one, name what was good, say it was better than expected, thank them for something specific.", bundle: 'free' },
        { q: "Why does this move make an ending safe?", a: "Nobody reads \"it was good to talk to you\" as boredom.", bundle: 'pro' },
        { q: "What makes the strongest version?", a: "Naming what specifically was good.", bundle: 'pro' },
        { q: "Why are people uncertain about how a conversation went?", a: "Because almost nobody says. One sentence at the end settles it.", bundle: 'pro' },
      ]
    },
    {
      name: "Wish Them Well",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The move that proves you were listening.",
      cards: [
        { q: "What does a specific well-wish prove?", a: "That you registered what they said.", bundle: 'free' },
        { q: "What does the specific version cost?", a: "About four extra words.", bundle: 'free' },
        { q: "Name two kinds of well-wish.", a: "Any two of: the general one, the specific one, wishing about a difficulty, wishing about something good.", bundle: 'free' },
        { q: "What is the mindset line for this move?", a: "Use something they told you — that is what turns a farewell into being remembered.", bundle: 'pro' },
        { q: "Which version carries the most warmth?", a: "Wishing them well about something difficult they mentioned.", bundle: 'pro' },
        { q: "Is the generic version still worth using?", a: "Yes. It works. It just does far less than the specific one.", bundle: 'pro' },
      ]
    },
    {
      name: "Leave With One Last Question",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The move that ends a conversation by proving it mattered.",
      cards: [
        { q: "What two things does this move say at once?", a: "That you are leaving, and that the conversation mattered enough to spend your last seconds on.", bundle: 'free' },
        { q: "What order do the parts go in?", a: "Reason first, then the question.", bundle: 'free' },
        { q: "What kind of question should it be?", a: "One that can be answered in a sentence.", bundle: 'free' },
        { q: "Why must the reason come first?", a: "It makes the question a gift rather than a delay.", bundle: 'pro' },
        { q: "When is this move most useful?", a: "When you are enjoying a conversation and do not want the ending to read as escape.", bundle: 'pro' },
        { q: "What goes wrong if the question is too big?", a: "You have not ended the conversation, you have extended it.", bundle: 'pro' },
      ]
    },
    {
      name: "End on a Joke",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The warmest ending and the riskiest.",
      cards: [
        { q: "What is the classic pattern?", a: "The mock refusal — they say \"see you later\", you say \"no, never again\", smiling.", bundle: 'free' },
        { q: "What condition makes this move safe?", a: "An established warmth. With a stranger a mock insult is just an insult.", bundle: 'free' },
        { q: "Name two ways to end on a joke.", a: "Any two of: the mock refusal, mock relief at leaving, exaggerating the goodbye, booking the next one as a joke.", bundle: 'free' },
        { q: "When is this move definitely wrong?", a: "After a difficult conversation, where it lands as dismissal.", bundle: 'pro' },
        { q: "Why does mock relief read as affection?", a: "Because it is so obviously untrue.", bundle: 'pro' },
        { q: "What should you do if you are unsure it will land?", a: "Use one of the other six. They all work.", bundle: 'pro' },
      ]
    },
  ],
  reactingtounexpectedstatements: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The shape of the pack: five ways to stay in a conversation honestly before you know what you think.",
      cards: [
        { q: "What are the five strategies in this pack?", a: "Say you need a second, say you don't know what to say, ask what prompted it, answer the part you can, come back to it later.", bundle: 'free' },
        { q: "What is this pack actually about?", a: "What to say when you do not have an answer yet.", bundle: 'free' },
        { q: "What is the one thing none of these strategies is?", a: "Pretending to have a view.", bundle: 'free' },
        { q: "Why must the pause be audible?", a: "A silent pause is read as disapproval or evasion; a named one is read as taking it seriously.", bundle: 'pro' },
        { q: "What decides which strategy to use?", a: "How much time you need, and whether they are waiting for something from you.", bundle: 'pro' },
        { q: "What is the boundary against Disagreeing?", a: "There you already know what you think. This pack ends where that one begins.", bundle: 'pro' },
      ]
    },
    {
      name: "Say You Need a Second",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Making the pause visible.",
      cards: [
        { q: "What is the difference between a silent pause and a named one?", a: "A silent one gets filled in by the other person, usually as disapproval.", bundle: 'free' },
        { q: "Name two ways to ask for a second.", a: "Any two of: the plain request, say why you are pausing, name the size of it, ask for it and then take it.", bundle: 'free' },
        { q: "How much time do you actually need?", a: "Two or three seconds is usually enough to notice what you think.", bundle: 'free' },
        { q: "What is the hard half of this strategy?", a: "Actually being quiet after you have asked for the pause.", bundle: 'pro' },
        { q: "How do you make the pause read as care?", a: "Say why — \"I'd rather answer properly than just react\".", bundle: 'pro' },
        { q: "What do you say if the silence has already stretched?", a: "\"Sorry — I'm thinking, not sulking.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Say You Don't Know What to Say",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The honest admission, which is a complete answer.",
      cards: [
        { q: "Why is this more welcome than a stock response?", a: "It is true, and the alternatives — a hollow phrase, a change of subject, an invented opinion — are all worse.", bundle: 'free' },
        { q: "Why is it disarming?", a: "The other person is braced for a reaction, and honest bewilderment is not one they prepared for.", bundle: 'free' },
        { q: "What is the important half of this strategy?", a: "Saying it and staying in the conversation.", bundle: 'free' },
        { q: "Name two ways to say it.", a: "Any two of: plainly, say you would rather not fake it, name the effect, admit it and stay.", bundle: 'pro' },
        { q: "Is this a failure to produce an answer?", a: "No — it is a complete answer.", bundle: 'pro' },
        { q: "What does it usually do to the conversation?", a: "Opens it, rather than ending it.", bundle: 'pro' },
      ]
    },
    {
      name: "Ask What Prompted It",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The question about the person rather than the words.",
      cards: [
        { q: "How is this different from asking what they mean?", a: "That question is about the words; this one is about the person and the moment.", bundle: 'free' },
        { q: "Name two ways to ask.", a: "Any two of: what prompted it now, how they got there, whether something has happened, asking with genuine curiosity.", bundle: 'free' },
        { q: "What does this strategy give you?", a: "Information, without committing to a position.", bundle: 'free' },
        { q: "Why does it usually produce a longer answer?", a: "It asks about the situation rather than the sentence, and the situation is usually the interesting part.", bundle: 'pro' },
        { q: "What ruins this question?", a: "An edge in the tone — then it is a challenge in disguise.", bundle: 'pro' },
        { q: "What often turns out to be true?", a: "That the position is not quite what the statement sounded like.", bundle: 'pro' },
      ]
    },
    {
      name: "Answer the Part You Can",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The partial honest response.",
      cards: [
        { q: "Why is a partial answer usually available?", a: "Unexpected statements are several things at once, and you almost always have a view on some of it.", bundle: 'free' },
        { q: "Name two ways to answer partly.", a: "Any two of: name which part you can take, answer the factual bit, say what you feel rather than what you think, say what you are sure is not the case.", bundle: 'free' },
        { q: "What is the mindset line for this strategy?", a: "Partial and true beats complete and invented.", bundle: 'free' },
        { q: "What do you offer when all you have is a feeling?", a: "The feeling, marked as one — \"no view yet, it did make me uneasy\".", bundle: 'pro' },
        { q: "What is the negative version of this strategy?", a: "Saying what you are sure is NOT the case — \"I don't know the answer, I do know it isn't your fault\".", bundle: 'pro' },
        { q: "Why does this keep you in the conversation?", a: "It is warmer than silence and more useful than an invented complete answer.", bundle: 'pro' },
      ]
    },
    {
      name: "Come Back to It Later",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The deferral, and the return that makes it worth anything.",
      cards: [
        { q: "What is the condition on deferring?", a: "That you actually come back, on a named day.", bundle: 'free' },
        { q: "Name two ways to defer.", a: "Any two of: name when you will return, say why you are not answering now, ask for their timing, come back unprompted.", bundle: 'free' },
        { q: "What is a deferral without a time?", a: "Avoidance.", bundle: 'free' },
        { q: "Why is coming back treated as reliable rather than weak?", a: "It makes the first answer clearly a first answer rather than what you think.", bundle: 'pro' },
        { q: "What do you say when they press for an answer now?", a: "\"If you need one now it'll be a poor one. Thursday I'd have a real one.\"", bundle: 'pro' },
        { q: "What is worse than a poor answer in the moment?", a: "Promising to come back and never doing it.", bundle: 'pro' },
      ]
    },
  ],
  deepquestions: [
    {
      name: "Core Idea",
      description: "The concept behind deep questions and the full set of moves.",
      cards: [
        { q: "What is the goal of a deep question?", a: "To move past small talk into what someone values, believes or has lived through.", bundle: 'free' },
        { q: "What are the five moves in this pack?", a: "Start with Simple Questions, Link and Go Deeper, Explore Values, Explore Beliefs, Explore Experiences.", bundle: 'free' },
        { q: "What order do they usually come in?", a: "Simple questions first to gather material, then a link, then a values, belief or experience question.", bundle: 'free' },
        { q: "What keeps it from feeling like an interrogation?", a: "Curiosity and care — you're interested in them, not collecting answers.", bundle: 'free' },
        { q: "How do you choose between values, beliefs and experiences?", a: "Follow what they gave you — a choice points to values, an opinion to beliefs, an event to experiences.", bundle: 'pro' },
        { q: "What is the most common mistake?", a: "Going deep too early, before there's enough on the table for the question to make sense.", bundle: 'pro' },
        { q: "What is the simplest deep question there is?", a: "\"What was that like?\" — it works on almost anything they've just told you.", bundle: 'pro' },
      ]
    },
    {
      name: "Start with Simple Questions",
      description: "The theory behind the easy factual opener.",
      cards: [
        { q: "What is Start with Simple Questions?", a: "Easy factual questions — hobbies, home town, work, family — that get basic information on the table.", bundle: 'free' },
        { q: "Why start there?", a: "They relax, and you collect the details you'll need to build a deeper question on.", bundle: 'free' },
        { q: "What does a simple question sound like?", a: "\"Where did you grow up?\" or \"What do you do?\" or \"Do you have siblings?\"", bundle: 'free' },
        { q: "How many simple questions before you go deeper?", a: "No fixed number — enough that they've given you one detail worth following.", bundle: 'pro' },
        { q: "What is the failure mode?", a: "Staying there. Simple questions are the runway, not the flight.", bundle: 'pro' },
      ]
    },
    {
      name: "Link and Go Deeper",
      description: "The theory behind bridging from their words into a bigger question.",
      cards: [
        { q: "What is Link and Go Deeper?", a: "Repeating a detail they just gave you, then asking about what sits behind it.", bundle: 'free' },
        { q: "Why does the link matter?", a: "It shows you listened, and it stops the bigger question feeling like it came from nowhere.", bundle: 'free' },
        { q: "What is the shape of the line?", a: "\"You said [their words] —\" then the bigger question.", bundle: 'free' },
        { q: "When is the timing right?", a: "When they've offered something with weight in it and the mood has settled past pure small talk.", bundle: 'pro' },
        { q: "What is the failure mode?", a: "A big question with no bridge, so it feels like an interview instead of listening.", bundle: 'pro' },
      ]
    },
    {
      name: "Explore Values",
      description: "The theory behind asking what matters to someone.",
      cards: [
        { q: "What is Explore Values?", a: "Asking what matters to them and why — the meaning behind a like, a choice or a habit.", bundle: 'free' },
        { q: "What does a values question sound like?", a: "\"What does that give you?\" or \"Why is that important to you?\"", bundle: 'free' },
        { q: "What in their answer signals a values question?", a: "A choice or a priority — they gave something up, protected something, or keep making time for something.", bundle: 'pro' },
        { q: "What is the failure mode?", a: "A bare \"why?\" that sounds like a challenge — soften it to \"what does it give you?\"", bundle: 'pro' },
      ]
    },
    {
      name: "Explore Beliefs",
      description: "The theory behind asking what someone thinks is true.",
      cards: [
        { q: "What is Explore Beliefs?", a: "Asking for their opinion or their take — what they think is true about something.", bundle: 'free' },
        { q: "What does a belief question sound like?", a: "\"Do you think practice really beats talent?\" or \"What's your take on that?\"", bundle: 'free' },
        { q: "What in their answer signals a belief question?", a: "An opinion or a rule they live by, dropped in passing.", bundle: 'pro' },
        { q: "What is the failure mode?", a: "Turning it into a debate — you're asking what they think, not testing whether they're right.", bundle: 'pro' },
      ]
    },
    {
      name: "Explore Experiences",
      description: "The theory behind asking what something was like.",
      cards: [
        { q: "What is Explore Experiences?", a: "Asking about something that happened to them — once or over years — and what it was like.", bundle: 'free' },
        { q: "What does an experience question sound like?", a: "\"What was that like?\" or \"What was the hardest part?\" or \"How did that change things?\"", bundle: 'free' },
        { q: "What in their answer signals an experience question?", a: "An event or a stretch of time — a move, an illness, a job, a trip.", bundle: 'pro' },
        { q: "Why is it the safest of the three deep moves?", a: "They control how much of the story they tell, so it rarely feels intrusive.", bundle: 'pro' },
      ]
    },
  ],
  howtointerrupt: [
    {
      name: "Core Idea",
      description: "The concept behind interrupting well and the full set of moves.",
      cards: [
        { q: "What is the goal when you interrupt?", a: "To interject respectfully and effectively, without offending the speaker or dominating the conversation.", bundle: 'free' },
        { q: "What are the five moves in this pack?", a: "Wait for a Natural Pause, Signal the Interruption, Acknowledge the Speaker First, Say Why It Matters, Use Humour.", bundle: 'free' },
        { q: "Is interrupting rude?", a: "Cutting across someone is. A signalled, reasoned interruption is ordinary turn-taking.", bundle: 'free' },
        { q: "What is the cheapest interruption there is?", a: "Waiting two seconds for a natural pause — from the outside it barely reads as an interruption at all.", bundle: 'free' },
        { q: "What makes an interruption land badly?", a: "No signal and no reason. The content is rarely the problem.", bundle: 'pro' },
        { q: "How do you know when waiting has stopped working?", a: "When there has been no usable pause for minutes. Then the pause isn't coming and you have to make one.", bundle: 'pro' },
        { q: "What is the other failure mode?", a: "Dominating. If you've interrupted twice and nobody else has once, the next move is to wait.", bundle: 'pro' },
      ]
    },
    {
      name: "Wait for a Natural Pause",
      description: "The theory behind the patient version.",
      cards: [
        { q: "What is Wait for a Natural Pause?", a: "Holding your point until the speaker reaches a break of their own, and going in there.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"If I could just jump in for a moment…\" said at their full stop.", bundle: 'free' },
        { q: "What are the three kinds of pause?", a: "The breath, the full stop, and the hand-off — when they turn to someone else or say \"anyway\".", bundle: 'free' },
        { q: "How long do you usually have to wait?", a: "Less than it feels. Most people leave a gap every ten to fifteen seconds.", bundle: 'pro' },
        { q: "Why is it worth the wait?", a: "The same sentence that feels rude mid-clause feels like normal turn-taking two seconds later.", bundle: 'pro' },
      ]
    },
    {
      name: "Signal the Interruption",
      description: "The theory behind the verbal cue.",
      cards: [
        { q: "What is Signal the Interruption?", a: "A short verbal cue before your actual point, so the speaker can close their sentence.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"Excuse me, may I add something?\" / \"Sorry — can I jump in?\"", bundle: 'free' },
        { q: "Why does it make an interruption polite?", a: "It hands the speaker control of exactly when they stop.", bundle: 'free' },
        { q: "What are the three strengths of signal?", a: "The ask, the announcement, and the bare cue — matched to how formal the room is.", bundle: 'pro' },
        { q: "What is the failure mode?", a: "Over-apologising. One \"sorry\" is a signal; three makes the interruption bigger than it was.", bundle: 'pro' },
      ]
    },
    {
      name: "Acknowledge the Speaker First",
      description: "The theory behind leading with their point.",
      cards: [
        { q: "What is Acknowledge the Speaker First?", a: "One clause about their point before yours, so the interruption reads as building rather than replacing.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"I see your point, and I'd like to add…\"", bundle: 'free' },
        { q: "What three things can you acknowledge?", a: "Their point, their effort, or the part you agree with.", bundle: 'free' },
        { q: "What makes it work?", a: "Being specific. \"Good point, but…\" without naming the point is transparently a run-up.", bundle: 'pro' },
        { q: "What does it prove?", a: "That you were listening rather than waiting for a gap.", bundle: 'pro' },
      ]
    },
    {
      name: "Say Why It Matters",
      description: "The theory behind giving a reason.",
      cards: [
        { q: "What is Say Why It Matters?", a: "Attaching a reason to the interruption — why it couldn't wait until they'd finished.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"I hate to interrupt, but this is important for what we're discussing.\"", bundle: 'free' },
        { q: "What three reasons earn an interruption?", a: "It's time-sensitive, they're working from something wrong, or you can't follow without it.", bundle: 'free' },
        { q: "Which reason is most under-used?", a: "\"I've lost the thread.\" It feels exposing and it's usually the whole room's question.", bundle: 'pro' },
        { q: "What does a stated reason change?", a: "The speaker stops willingly rather than being stopped. It becomes a service, not a grab.", bundle: 'pro' },
      ]
    },
    {
      name: "Use Humour",
      description: "The theory behind the light version.",
      cards: [
        { q: "What is Use Humour here?", a: "Making the interruption itself the joke, so it arrives as lightness instead of a correction.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"I just have to jump in here before my brain explodes!\"", bundle: 'free' },
        { q: "When should you not use it?", a: "In a tense room. Then it's worse than a plain interruption — you've interrupted and misjudged.", bundle: 'free' },
        { q: "Who does the joke have to be about?", a: "You. A joke about how long they've been talking is a criticism wearing a hat.", bundle: 'pro' },
        { q: "Why is it the cheapest move when it works?", a: "Nobody has to be gracious about it, because it didn't feel like an interruption.", bundle: 'pro' },
      ]
    },
  ],
  handleinterruptions: [
    {
      name: "Core Idea",
      description: "The concept behind handling interruptions and the full set of moves.",
      cards: [
        { q: "What's the core goal when you're interrupted?", a: "Regain your space without escalating — stay calm, firm but friendly.", bundle: 'free' },
        { q: "What are the five moves for handling an interruption?", a: "Acknowledge and Continue, Invite Them In After, Reinforce the Boundary, Use Humour, Let It Go and Reclaim.", bundle: 'free' },
        { q: "What's the mindset shift that makes it easier?", a: "Don't take it personally — read the interruption as a signal (excited, confused, impatient), not an attack.", bundle: 'free' },
        { q: "Why does tone matter more than the exact words?", a: "Firm-but-friendly holds the floor; sounding defensive or irritated escalates it and loses the room.", bundle: 'free' },
        { q: "How do you pick which move to use?", a: "Read the cut-in — everyday → Acknowledge; repeat/dismissive → Boundary; friendly → Humour; not worth the fight → Let It Go.", bundle: 'pro' },
        { q: "What's the through-line of all five moves?", a: "You keep or reclaim your turn without pushing the other person away.", bundle: 'pro' },
        { q: "When is handling the interruption the wrong call?", a: "When the interruption genuinely matters more — then actually yield, don't just perform patience.", bundle: 'pro' },
      ]
    },
    {
      name: "Acknowledge and Continue",
      description: "The theory behind the everyday, low-friction move.",
      cards: [
        { q: "What is Acknowledge and Continue?", a: "A brief nod that you noticed them, then you keep going with your point.", bundle: 'free' },
        { q: "When does it fit best?", a: "Most everyday, one-off interruptions — it's the default move.", bundle: 'free' },
        { q: "Why bother acknowledging at all?", a: "It stops you sounding like you're steamrolling, so holding the floor stays friendly.", bundle: 'free' },
        { q: "What's the shape of the line?", a: "Tiny acknowledgement + \"let me finish\" + implied \"then you\": \"I see you've got something — let me land this first.\"", bundle: 'pro' },
        { q: "What's the failure mode?", a: "Acknowledging so much you never get back to your point — keep the nod to a few words.", bundle: 'pro' },
      ]
    },
    {
      name: "Invite Them In After",
      description: "The theory behind holding the floor by promising the next turn.",
      cards: [
        { q: "What is Invite Them In After?", a: "You promise the interrupter the very next turn, so you finish without shutting them out.", bundle: 'free' },
        { q: "Why does it work?", a: "It buys you the floor by offering it back — they wait because they know they're up.", bundle: 'free' },
        { q: "When does it fit?", a: "When someone's keen to jump in and you just need one more sentence.", bundle: 'free' },
        { q: "What makes the promise credible?", a: "Actually hand over when you're done (\"okay — what were you going to say?\"), or it won't work next time.", bundle: 'pro' },
        { q: "How is it different from Acknowledge and Continue?", a: "Acknowledge just notes them; Invite explicitly reserves them the next turn.", bundle: 'pro' },
      ]
    },
    {
      name: "Reinforce the Boundary",
      description: "The theory behind the firm-but-friendly move for repeated interruptions.",
      cards: [
        { q: "What is Reinforce the Boundary?", a: "Calmly stating your need to finish when interruptions repeat or turn dismissive.", bundle: 'free' },
        { q: "When does it fit?", a: "Repeated or dismissive cut-ins — when a gentle nod hasn't worked.", bundle: 'free' },
        { q: "What's the tone rule?", a: "Firm but friendly — no apology, no heat: \"I'd like to finish before we move on.\"", bundle: 'free' },
        { q: "Why no apology?", a: "Apologising undercuts the boundary — you're asking for something fair, not imposing.", bundle: 'pro' },
        { q: "What if they cross it again?", a: "Restate it once, calmly and almost identically — the repetition is the strength, not volume.", bundle: 'pro' },
      ]
    },
    {
      name: "Use Humour",
      description: "The theory behind lightening the moment to hold the floor.",
      cards: [
        { q: "What is the Use Humour move?", a: "A light, playful line that holds the floor without tension.", bundle: 'free' },
        { q: "When does it fit?", a: "Friendly, low-stakes interruptions — especially mid-story (\"no spoilers — let me get there!\").", bundle: 'free' },
        { q: "When should you NOT use humour?", a: "When the interruption is serious, hostile, or someone's upset — it would read as dismissive.", bundle: 'pro' },
        { q: "Why does it work when it fits?", a: "It keeps the mood warm while still claiming your turn, so no one loses face.", bundle: 'pro' },
      ]
    },
    {
      name: "Let It Go and Reclaim",
      description: "The theory behind yielding on purpose and coming back.",
      cards: [
        { q: "What is Let It Go and Reclaim?", a: "Allowing the interruption to happen, then calmly returning to your point.", bundle: 'free' },
        { q: "When does it fit?", a: "When fighting it would cost more than it's worth — an urgent cut-in, a senior person, crosstalk.", bundle: 'free' },
        { q: "What's the reclaim line?", a: "A short bridge back: \"As I was saying…\" / \"Coming back to my point…\".", bundle: 'free' },
        { q: "Why is letting go sometimes the strong move?", a: "You keep your composure and your point, without a needless power struggle.", bundle: 'pro' },
        { q: "What's the risk if you skip the reclaim?", a: "Your point just vanishes — the move only works if you actually come back to it.", bundle: 'pro' },
      ]
    },
  ],
  validation: [
    {
      name: "Core Idea",
      description: "The concept behind validation and the three things you can validate.",
      cards: [
        { q: "What is validation?", a: "Acknowledging someone's thoughts, feelings and experiences as understandable and reasonable.", bundle: 'free' },
        { q: "Does validating mean agreeing?", a: "No. It's about acknowledging, not agreeing — you can validate someone you think is mistaken.", bundle: 'free' },
        { q: "What are the three moves in this pack?", a: "Reflect the Feeling, Normalise the Reaction, Acknowledge the Perspective.", bundle: 'free' },
        { q: "What are the three things you can validate?", a: "What they felt, how they reacted, and how they thought. One move for each.", bundle: 'free' },
        { q: "What does validation actually do?", a: "Builds trust, reduces defensiveness, encourages openness and supports emotional regulation.", bundle: 'pro' },
        { q: "Which move works when you disagree with them?", a: "Acknowledge the Perspective — you validate the route without endorsing the destination.", bundle: 'pro' },
        { q: "What is the most common mistake?", a: "Validating the feeling when someone is defending a decision. They want their thinking credited, not their emotions handled.", bundle: 'pro' },
        { q: "How is this different from looping or labelling?", a: "Looping shows you understood; labelling offers them a word. Validation says the reaction is reasonable.", bundle: 'pro' },
      ]
    },
    {
      name: "Reflect the Feeling",
      description: "The theory behind naming the emotion.",
      cards: [
        { q: "What is Reflect the Feeling?", a: "Naming the emotion they're expressing, in a way that signals it belongs there.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"It sounds like you felt really frustrated when that happened.\"", bundle: 'free' },
        { q: "What turns noticing into validating?", a: "Adding the clause about why it makes sense — \"and I get why that would upset you.\"", bundle: 'free' },
        { q: "What are the three ways to reflect it?", a: "Name it plainly, name it and size it, or name it and legitimise it.", bundle: 'pro' },
        { q: "When is it the wrong move?", a: "When they're defending a decision rather than expressing a feeling.", bundle: 'pro' },
      ]
    },
    {
      name: "Normalise the Reaction",
      description: "The theory behind saying the response is ordinary.",
      cards: [
        { q: "What is Normalise the Reaction?", a: "Saying their response is what most people would have had in the same position.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"Anyone in your position would probably feel the same way.\"", bundle: 'free' },
        { q: "What question does it answer?", a: "\"Am I overreacting?\" — the worry sitting on top of the original feeling.", bundle: 'free' },
        { q: "What must you be careful to normalise?", a: "The feeling, not necessarily the action. \"Of course you were furious\" and \"of course you sent that email\" are different sentences.", bundle: 'pro' },
        { q: "What are the three ways to normalise?", a: "Point at anyone, point at yourself, or point at the situation.", bundle: 'pro' },
      ]
    },
    {
      name: "Acknowledge the Perspective",
      description: "The theory behind crediting their reasoning.",
      cards: [
        { q: "What is Acknowledge the Perspective?", a: "Recognising why their choice or view makes sense from where they're standing.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"I see why you approached it that way.\" / \"That makes sense given what you were dealing with.\"", bundle: 'free' },
        { q: "Why is it the move for disagreement?", a: "You're validating the route, not the destination. That can be honest even when you think the call was wrong.", bundle: 'free' },
        { q: "What are the three ways to acknowledge it?", a: "Validate the choice, the reasoning, or the priority.", bundle: 'pro' },
        { q: "When is it the right move over reflecting the feeling?", a: "When someone is defending a decision — they want to hear their thinking wasn't stupid.", bundle: 'pro' },
      ]
    },
  ],
  supportingconversations: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The shape of the pack: five responses, and the judgement about which one this person needs.",
      cards: [
        { q: "What are the five responses in this pack?", a: "Work out what they need, just listen, respond with validation, respond with encouragement, respond with a suggestion.", bundle: 'free' },
        { q: "What is this pack actually about?", a: "The choosing. The responses themselves are simple; reading which one is needed is the skill.", bundle: 'free' },
        { q: "What is the commonest failure in a supportive conversation?", a: "A mismatch — answering a different question from the one they asked.", bundle: 'free' },
        { q: "What is the safe default when you cannot tell what they need?", a: "Acknowledgement first, then ask.", bundle: 'pro' },
        { q: "What is the general order that works?", a: "Meet them where they are, then move them — never the other way round.", bundle: 'pro' },
        { q: "What is the measure of a good supportive conversation?", a: "Whether they felt less alone with it, not whether it got solved.", bundle: 'pro' },
      ]
    },
    {
      name: "Work Out What They Need",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The diagnostic move, and the centre of the pack.",
      cards: [
        { q: "Why do supportive conversations usually fail?", a: "A mismatch rather than a lack of care — advice to someone who wanted acknowledgement, or sympathy to someone who wanted help.", bundle: 'free' },
        { q: "What does \"I don't know what to do\" ask for?", a: "Help.", bundle: 'free' },
        { q: "What does \"I can't believe he said that\" ask for?", a: "Acknowledgement.", bundle: 'free' },
        { q: "Name two ways to work out what they need.", a: "Any two of: ask directly, listen to the verb, notice whether they have stopped, default to acknowledgement and check.", bundle: 'pro' },
        { q: "What does it mean if they are still in full flow?", a: "They want to be heard, not interrupted with a solution.", bundle: 'pro' },
        { q: "Is asking outright a failure of intuition?", a: "No — it is faster and more accurate than guessing, and almost nobody minds.", bundle: 'pro' },
      ]
    },
    {
      name: "Just Listen",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The hardest of the five.",
      cards: [
        { q: "Why is saying almost nothing often the most useful response?", a: "Much of what people bring you needs saying out loud rather than handling, and any response interrupts that.", bundle: 'free' },
        { q: "Name two ways to just listen.", a: "Any two of: the minimal encourager, the invitation to continue, the silence you do not fill, the question that only asks for more.", bundle: 'free' },
        { q: "Why is this the hardest of the five?", a: "Silence feels like doing nothing while every instinct says to be helpful.", bundle: 'free' },
        { q: "What is the mindset line for this move?", a: "Your discomfort with the silence is not a sign that they need you to speak.", bundle: 'pro' },
        { q: "What is the boundary against Show Understanding?", a: "Looping and rephrasing belong there. Here it is minimal — silence, \"mm\", \"go on\".", bundle: 'pro' },
        { q: "What do you do when they apologise for going on?", a: "Tell them to keep going.", bundle: 'pro' },
      ]
    },
    {
      name: "Respond With Validation",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The correct default when you cannot tell.",
      cards: [
        { q: "Why is validation the safe default?", a: "Nobody is made worse by having their reaction taken seriously, while advice at the wrong moment does damage.", bundle: 'free' },
        { q: "What second problem does validation remove?", a: "The uncertainty about whether their reaction was reasonable, which is often the heavier layer.", bundle: 'free' },
        { q: "Name two ways to validate.", a: "Any two of: say the feeling fits, say anyone would, name why it makes sense, say it would have got you too.", bundle: 'free' },
        { q: "Can you validate a feeling you think is based on a wrong account?", a: "Yes. Validating a feeling is not endorsing a conclusion.", bundle: 'pro' },
        { q: "What do you say to someone apologising for being upset?", a: "That they do not need to — it is a reasonable reaction.", bundle: 'pro' },
        { q: "What is the strongest version of validation?", a: "Naming why it makes sense — \"you'd been preparing for a month, of course it stings\".", bundle: 'pro' },
      ]
    },
    {
      name: "Respond With Encouragement",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "For when the problem is confidence rather than circumstance.",
      cards: [
        { q: "When is encouragement the right response?", a: "When they know what to do and doubt they can do it.", bundle: 'free' },
        { q: "What makes encouragement work?", a: "Being specific and true — evidence rather than reflex.", bundle: 'free' },
        { q: "Name two ways to encourage.", a: "Any two of: point at evidence, praise the attempt regardless of outcome, show them the progress, express confidence specifically.", bundle: 'free' },
        { q: "What is wrong with \"you'll be fine\"?", a: "It is a reflex and everyone knows it. \"You did this in March and it went fine\" is evidence.", bundle: 'pro' },
        { q: "What is the cost of empty reassurance?", a: "It is heard as not listening, and it devalues the next true thing you say.", bundle: 'pro' },
        { q: "How do you encourage after something genuinely failed?", a: "Without pretending — \"it went badly, and you'd still do it better next time than someone who never tried\".", bundle: 'pro' },
      ]
    },
    {
      name: "Respond With a Suggestion",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Useful at the right moment, damaging at the wrong one.",
      cards: [
        { q: "What are the two conditions for a suggestion landing?", a: "It comes after acknowledgement, and it works better as a question than an instruction.", bundle: 'free' },
        { q: "Name two ways to suggest.", a: "Any two of: as a question, offer it and let go, ask what they have already tried, offer to do something rather than to advise.", bundle: 'free' },
        { q: "How many times should you make the same suggestion?", a: "Once. A suggestion repeated is a criticism.", bundle: 'free' },
        { q: "Why does the same suggestion land differently before and after acknowledgement?", a: "Before, it says the feeling is not the point. After, it is welcome and often what they wanted.", bundle: 'pro' },
        { q: "Why ask what they have already tried?", a: "It respects the fact that they have thought about it, and stops you repeating the obvious.", bundle: 'pro' },
        { q: "What is often more useful than advice?", a: "Offering to do something with them — \"do you want me to look at it with you?\"", bundle: 'pro' },
      ]
    },
  ],
  describethings: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The shape of the pack: five description moves covering everything worth saying about an object, and the discipline of choosing between them.",
      cards: [
        { q: "What are the five moves in this pack?", a: "Name and Main Details, Size and Shape, Material Texture and Colour, Where You Find It, What It Is For.", bundle: 'free' },
        { q: "What is the goal of describing, as opposed to explaining?", a: "That the listener can picture it — not that they understand why it matters.", bundle: 'free' },
        { q: "How many moves does a good description usually use?", a: "Two or three, chosen — not all five.", bundle: 'free' },
        { q: "What decides which details to give?", a: "What the listener is going to do with the description.", bundle: 'pro' },
        { q: "What is the problem with describing everything?", a: "Too many details blur the picture instead of building it.", bundle: 'pro' },
        { q: "What does the pack say about describing people?", a: "Use clothing, position and what they are doing — not their body or appearance.", bundle: 'pro' },
      ]
    },
    {
      name: "Name and Main Details",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The anchor move that gives the listener a frame.",
      cards: [
        { q: "What should the first detail do?", a: "Eliminate the most alternatives.", bundle: 'free' },
        { q: "What is the \"distinguishing feature\"?", a: "The detail that rules out everything else similar.", bundle: 'free' },
        { q: "What do you do when you don't know the name?", a: "Compare it to the nearest familiar thing.", bundle: 'free' },
        { q: "When is an absence a good identifier?", a: "When the thing is missing something everything similar has — a jacket with no hood.", bundle: 'pro' },
        { q: "Why is the name alone rarely enough?", a: "It narrows to a family, not to an object.", bundle: 'pro' },
        { q: "What is the mindset line for this move?", a: "Pick the detail that eliminates the most alternatives, not the one you find interesting.", bundle: 'pro' },
      ]
    },
    {
      name: "Size and Shape",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The move that lets someone imagine holding it or standing next to it.",
      cards: [
        { q: "Why are exact measurements often useless in conversation?", a: "Most people cannot picture a number of centimetres.", bundle: 'free' },
        { q: "What is the most portable ruler?", a: "A body part — a hand, a forearm, knee height.", bundle: 'free' },
        { q: "What is the test for a good size description?", a: "The listener can hold their hands apart to show it.", bundle: 'free' },
        { q: "Name two ways to give shape.", a: "Any two of: compare to a body part, compare to a common object, name the shape, give the proportion.", bundle: 'pro' },
        { q: "When does proportion matter more than size?", a: "When the ratio is what causes the problem — too long for the drawer.", bundle: 'pro' },
        { q: "Which common objects work well as size comparisons?", a: "A phone, a credit card, a shoebox, a door, a car.", bundle: 'pro' },
      ]
    },
    {
      name: "Material, Texture and Colour",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The sensory move that makes a description feel real.",
      cards: [
        { q: "What is wrong with saying just \"blue\"?", a: "It covers an enormous range. Add a qualifier — dark navy, almost black.", bundle: 'free' },
        { q: "How should texture be described?", a: "By what the hand notices, or by comparison — like sandpaper.", bundle: 'free' },
        { q: "What does \"finish\" cover?", a: "Shiny, matte, worn, new, chipped.", bundle: 'free' },
        { q: "Which detail is most often left out of descriptions?", a: "The sensory ones — material, texture and precise colour.", bundle: 'pro' },
        { q: "What is the mindset line for this move?", a: "One precise colour or texture beats three vague adjectives.", bundle: 'pro' },
        { q: "Why describe wear and damage?", a: "Because it is usually the detail that makes one object different from another.", bundle: 'pro' },
      ]
    },
    {
      name: "Where You Find It",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The move that places the object in a world.",
      cards: [
        { q: "What three kinds of detail does this move cover?", a: "Location, surroundings and age.", bundle: 'free' },
        { q: "What is the \"landmark method\"?", a: "Naming what is beside the thing rather than its address.", bundle: 'free' },
        { q: "When someone is actively searching, what matters most?", a: "Position and neighbours, not appearance.", bundle: 'free' },
        { q: "What is the test for a step when guiding someone to something?", a: "It changed where they are standing or looking.", bundle: 'pro' },
        { q: "What is the \"usual home\" of an object?", a: "Where it lives when nobody is using it.", bundle: 'pro' },
        { q: "How do you describe where to buy something?", a: "Say where you would look for one — the aisle, the shelf, the neighbours.", bundle: 'pro' },
      ]
    },
    {
      name: "What It Is For",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The purpose move — an identifying detail, not an argument.",
      cards: [
        { q: "Why is purpose an efficient description?", a: "It narrows the field faster than appearance does.", bundle: 'free' },
        { q: "What is the boundary against Explain Things?", a: "Here purpose helps them recognise it; there it gives them a reason to care.", bundle: 'free' },
        { q: "Give the shape of a direct use sentence.", a: "One verb, one object — \"it's for cutting herbs\".", bundle: 'free' },
        { q: "What does \"the moment you reach for it\" mean?", a: "Describing when in life the object appears — when the jar won't open.", bundle: 'pro' },
        { q: "How can you describe something by its alternative?", a: "Say what it replaces — it does the job a stepladder would, but folds flat.", bundle: 'pro' },
        { q: "Why mention what something is used for in practice?", a: "Because real use is often not the sold purpose, and it identifies your one.", bundle: 'pro' },
      ]
    },
  ],
  explainthings: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The shape of the whole pack: three question words, and the discipline of noticing which one is actually missing.",
      cards: [
        { q: "What are the three moves in this pack?", a: "What It Is, How It Works, Why It Matters.", bundle: 'free' },
        { q: "Which question word does each move answer?", a: "What, How and Why.", bundle: 'free' },
        { q: "What is the usual order when someone starts from nothing?", a: "What, then How, then Why.", bundle: 'free' },
        { q: "Why is What usually first?", a: "Because nothing abstract lands until the listener can picture the thing.", bundle: 'pro' },
        { q: "What is the test of a good explanation?", a: "Whether the other person can now do it or picture it — not how much you covered.", bundle: 'pro' },
        { q: "What does the pack say to do when someone pushes back?", a: "Switch to Why. Resistance is not a request for more detail.", bundle: 'pro' },
      ]
    },
    {
      name: "Say What It Is",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The move that gives the listener something concrete to hold.",
      cards: [
        { q: "What does \"What It Is\" answer?", a: "If this were in front of you, what would you be looking at?", bundle: 'free' },
        { q: "Name two of the four ways to say what something is.", a: "Any two of: name and category, parts, what it looks like, comparison to something known.", bundle: 'free' },
        { q: "What is the quickest way to make something unfamiliar familiar?", a: "Compare it to something the listener already knows.", bundle: 'free' },
        { q: "What is \"What It Is\" NOT?", a: "It's not what the thing is for, and it's not the steps for using it.", bundle: 'pro' },
        { q: "Why start with the visible details?", a: "Because concrete things give the abstract sentences somewhere to land.", bundle: 'pro' },
        { q: "What is the mindset line for this move?", a: "You're not being complete — you're giving one clear picture they can hold.", bundle: 'pro' },
      ]
    },
    {
      name: "Explain How It Works",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The move that turns understanding into doing.",
      cards: [
        { q: "What is the test for a good How explanation?", a: "Someone could follow it and end up doing the right thing.", bundle: 'free' },
        { q: "Name two of the four ways to explain how something works.", a: "Any two of: step by step, the one move that matters, what you do versus what it does, where people go wrong.", bundle: 'free' },
        { q: "What kind of word should a How sentence contain?", a: "A verb — something someone actually does.", bundle: 'free' },
        { q: "Why is naming the common mistake a way of explaining?", a: "Because most confusion is about what to do, and the mistake marks exactly where people go wrong.", bundle: 'pro' },
        { q: "What does \"the one move that matters\" mean?", a: "Skip the rest and give only the step people actually get wrong.", bundle: 'pro' },
        { q: "What separates the person's job from the thing's job?", a: "Saying explicitly what you do and what it handles by itself.", bundle: 'pro' },
      ]
    },
    {
      name: "Say Why It Matters",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The move that turns a clear explanation into one someone cares about.",
      cards: [
        { q: "What does \"Why It Matters\" name?", a: "The problem the thing solves, or what would be worse without it.", bundle: 'free' },
        { q: "Name two of the four ways to say why something matters.", a: "Any two of: the problem it solves, life without it, who it's for, the single benefit.", bundle: 'free' },
        { q: "Which move is most often skipped?", a: "Why It Matters.", bundle: 'free' },
        { q: "Why does the pack say to make Why specific to the listener?", a: "Because the same object is worth explaining differently to two different people.", bundle: 'pro' },
        { q: "What is an honest answer when there is no benefit for this person?", a: "That they probably don't need it.", bundle: 'pro' },
        { q: "What does a clear explanation still lack without Why?", a: "A reason for the listener to care — \"fine, but so what\".", bundle: 'pro' },
      ]
    },
  ],
  givingexamples: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The shape of the pack: five example types and the rules for choosing between them honestly.",
      cards: [
        { q: "What are the five example types in this pack?", a: "Your own experience, the everyday example, the imagined case, the shared example, numbers and evidence.", bundle: 'free' },
        { q: "How many examples should you give at a time?", a: "One, chosen well.", bundle: 'free' },
        { q: "What do you do when one example has not convinced them?", a: "Change the type, or ask what the actual objection is — do not repeat the same kind.", bundle: 'free' },
        { q: "What is the single rule about numbers?", a: "Only use one you actually know, and say where it came from. Otherwise use a different type.", bundle: 'pro' },
        { q: "What decides which example type to use?", a: "What this listener will accept, not which example you like best.", bundle: 'pro' },
        { q: "What is the boundary against Disagreeing?", a: "There an example is one supporting line; here choosing and building examples is the skill.", bundle: 'pro' },
      ]
    },
    {
      name: "From Your Own Experience",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The type where you are the source.",
      cards: [
        { q: "Why is personal experience persuasive?", a: "It is specific, it is yours, and nobody can tell you it did not happen.", bundle: 'free' },
        { q: "Name two ways to use your own experience.", a: "Any two of: the single incident, the pattern in your own life, the time you were wrong, the near miss.", bundle: 'free' },
        { q: "What is the mindset line for this type?", a: "Keep it small — one specific incident beats a summary of ten.", bundle: 'free' },
        { q: "Why is \"the time you were wrong\" a strong example?", a: "Because it costs you something, which makes it credible.", bundle: 'pro' },
        { q: "What do you do when they say your case is not typical?", a: "Concede what is fair and narrow the claim, or switch example type.", bundle: 'pro' },
        { q: "What makes a real experience feel real?", a: "The detail an invented one lacks — a place, a time, a small awkward fact.", bundle: 'pro' },
      ]
    },
    {
      name: "The Everyday Example",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The type that works by letting the listener check it against their own life.",
      cards: [
        { q: "Why does a common example need no evidence?", a: "The listener checks it against their own experience immediately.", bundle: 'free' },
        { q: "Name two ways to use common experience.", a: "Any two of: the universal situation, the familiar comparison, what people already do without thinking, the thing people say.", bundle: 'free' },
        { q: "What is the warning attached to this type?", a: "Check it is actually common — \"everyone knows\" is often \"everyone I know\".", bundle: 'free' },
        { q: "What is a \"familiar comparison\"?", a: "Borrowing a mechanism the listener already understands, like a queue or a default setting.", bundle: 'pro' },
        { q: "What do you do when your everyday example is not everyday for them?", a: "Switch types. Do not explain the example.", bundle: 'pro' },
        { q: "Why is explaining an example a bad sign?", a: "It means it was the wrong example — the whole advantage was recognition.", bundle: 'pro' },
      ]
    },
    {
      name: "The Imagined Case",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The type you use when there is no real case, marked clearly as imagined.",
      cards: [
        { q: "What is the imagined case for?", a: "Testing an idea somewhere safe, without arguing about the facts of a real case.", bundle: 'free' },
        { q: "Name two ways to build one.", a: "Any two of: the single person, the extreme version, the reversal, the near future.", bundle: 'free' },
        { q: "What must you always do with an imagined example?", a: "Mark it as imagined — \"say someone…\", not a real case.", bundle: 'free' },
        { q: "What does \"the reversal\" mean?", a: "Flipping who it happens to — imagine they had sent us that.", bundle: 'pro' },
        { q: "When is the imagined case the only honest option?", a: "When you have no evidence and would otherwise be dressing a guess up as experience.", bundle: 'pro' },
        { q: "What does \"the extreme version\" test?", a: "The shape of the idea — imagine everyone did it.", bundle: 'pro' },
      ]
    },
    {
      name: "The Shared Example",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The type that works through recognition rather than explanation.",
      cards: [
        { q: "Why is a shared example fast?", a: "You do not have to establish it, only point at it.", bundle: 'free' },
        { q: "Name two kinds of shared example.", a: "Any two of: the shared event, the well-known case, the story that carries the idea, the thing in front of you.", bundle: 'free' },
        { q: "What is the test for whether a reference is shared?", a: "If you have to explain it, it was not.", bundle: 'free' },
        { q: "What is the caution with well-known public examples?", a: "Describe what actually happened rather than putting words in real people's mouths.", bundle: 'pro' },
        { q: "What is \"the thing in front of you\"?", a: "An example both of you can see right now — the room, the meeting, the queue you are in.", bundle: 'pro' },
        { q: "Why can a familiar story work as an example?", a: "The idea is already carried in it, so the point arrives with the reference.", bundle: 'pro' },
      ]
    },
    {
      name: "Numbers and Evidence",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The strongest type when honest, the most damaging when not.",
      cards: [
        { q: "What is the rule for using a number?", a: "Only one you actually know, with its source said.", bundle: 'free' },
        { q: "What do you do when you have no figure?", a: "Say so, and use a different type of example.", bundle: 'free' },
        { q: "Name two ways to use numbers honestly.", a: "Any two of: something you counted yourself, a figure with its source, a hedged estimate marked as one, the order of magnitude.", bundle: 'free' },
        { q: "Why is an invented statistic worse than no statistic?", a: "When it is checked, everything else you said goes with it.", bundle: 'pro' },
        { q: "What is \"order of magnitude\" for?", a: "When the precise number does not matter — tens rather than hundreds.", bundle: 'pro' },
        { q: "What should you do if someone repeats your rough guess as fact?", a: "Correct the record straight away and say it was a guess.", bundle: 'pro' },
      ]
    },
  ],
  storytellingwiththesixws: [
    {
      name: "Core Idea",
      description: "The concept behind the six W's and the full set.",
      cards: [
        { q: "What are the six W's?", a: "What, How, Why, When, Where, Who.", bundle: 'free' },
        { q: "What is the goal of the six W's?", a: "To tell a clear, interesting story about a real event by making sure the basic questions get answered.", bundle: 'free' },
        { q: "Which three carry the story?", a: "What, How and Why — the spine. The other three set the scene.", bundle: 'free' },
        { q: "Do you have to use all six?", a: "No. Three or four are often enough — the more you include, the clearer it gets, but longer isn't better.", bundle: 'free' },
        { q: "How do you fix a story that fell flat?", a: "Work out which W is missing. A flat story is usually a missing W, not a boring event.", bundle: 'pro' },
        { q: "What is the most commonly missed W?", a: "Why. It's the one that turns a sequence of events into a story.", bundle: 'pro' },
        { q: "What is the most common structural mistake?", a: "Burying the event — too much setup before anything happens.", bundle: 'pro' },
      ]
    },
    {
      name: "What — the Main Event",
      description: "The theory behind the event itself.",
      cards: [
        { q: "What does the What give you?", a: "The one thing that happened, said plainly in a sentence.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"I lost my homework.\" / \"We missed the last train.\"", bundle: 'free' },
        { q: "Why say it early?", a: "Long setup with no event is the fastest way to lose a listener.", bundle: 'free' },
        { q: "What are the three ways to state the event?", a: "The bare headline, the change, or the outcome.", bundle: 'pro' },
        { q: "Does the event need to be dramatic?", a: "No — it needs to be clear. Small told sharply beats big told vaguely.", bundle: 'pro' },
      ]
    },
    {
      name: "How — the Process",
      description: "The theory behind the middle of the story.",
      cards: [
        { q: "What does the How give you?", a: "The way it happened, step by step — the part the listener follows along with.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"I checked my bag, then my locker, then the whole hallway.\"", bundle: 'free' },
        { q: "How many beats should it have?", a: "Two or three. Nine steps is where stories get too long.", bundle: 'free' },
        { q: "What are the three ways to tell the how?", a: "Step by step, the one crucial detail, or the manner.", bundle: 'pro' },
        { q: "What happens if you rush it?", a: "You've delivered a summary instead of a story. The How is what people are actually listening to.", bundle: 'pro' },
      ]
    },
    {
      name: "Why — the Reason",
      description: "The theory behind the reason underneath.",
      cards: [
        { q: "What does the Why give you?", a: "The cause, the motive or the problem underneath — why any of it happened.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"I was in a hurry and didn't check carefully.\"", bundle: 'free' },
        { q: "What is the symptom of a missing Why?", a: "The listener says \"and?\" at the end.", bundle: 'free' },
        { q: "What are the three kinds of why?", a: "The cause, the motivation, or the problem.", bundle: 'pro' },
        { q: "Why does it matter so much?", a: "It's where you show up in your own story — the difference between reporting an event and telling one.", bundle: 'pro' },
      ]
    },
    {
      name: "When — the Time",
      description: "The theory behind placing the story in time.",
      cards: [
        { q: "What does the When give you?", a: "The point in time, the stretch of time, or the bit of timing that mattered.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"It happened yesterday afternoon.\" / \"About thirty seconds before the bell.\"", bundle: 'free' },
        { q: "How long should it be?", a: "One clause. It earns its place by being specific, not detailed.", bundle: 'free' },
        { q: "What are the three kinds of when?", a: "The point in time, the stretch, or the timing that matters.", bundle: 'pro' },
        { q: "Which kind is worth hunting for?", a: "The timing that matters. \"On a Tuesday\" is furniture; \"the morning of the interview\" is part of the story.", bundle: 'pro' },
      ]
    },
    {
      name: "Where — the Setting",
      description: "The theory behind the setting.",
      cards: [
        { q: "What does the Where give you?", a: "The place, given with enough detail that the listener can picture it.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"In the school hallway, with everyone pushing past.\"", bundle: 'free' },
        { q: "How much detail?", a: "One concrete thing. The listener builds the rest themselves.", bundle: 'free' },
        { q: "What are the three kinds of where?", a: "The plain location, the detail that sets the scene, or the place that IS the point.", bundle: 'pro' },
        { q: "What is the symptom of a missing Where?", a: "They're following the story but seeing nothing — it could have happened anywhere.", bundle: 'pro' },
      ]
    },
    {
      name: "Who — the People",
      description: "The theory behind the people in the story.",
      cards: [
        { q: "What does the Who give you?", a: "The people involved, and what they did about it.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"My teacher was waiting, and my best friend tried to help.\"", bundle: 'free' },
        { q: "When do you introduce someone?", a: "The first time they appear, in about four words.", bundle: 'free' },
        { q: "What are the three ways to bring people in?", a: "Everyone involved, the one who mattered, or the audience.", bundle: 'pro' },
        { q: "Why is Who the most reliable source of warmth?", a: "Another person reacting is nearly always more interesting than the event itself.", bundle: 'pro' },
      ]
    },
  ],
  storiesinconversation: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The shape of the pack: the social side of telling a story, as opposed to what goes in it.",
      cards: [
        { q: "What are the seven strategies in this pack?", a: "Read the Room First, Ask for the Floor, Answer Don't Outdo, Watch Them While You Tell It, Cut It Loose, Finish on Purpose, Give It Back.", bundle: 'free' },
        { q: "What does this pack cover that Storytelling with the Six W's does not?", a: "That one is about what goes IN a story. This one is about whether it belongs here, whose turn it is, and how it ends.", bundle: 'free' },
        { q: "What is the central idea?", a: "A story in a conversation is a contribution, not a performance. The floor is borrowed.", bundle: 'free' },
        { q: "Which three strategies happen before you speak?", a: "Read the Room First, Ask for the Floor, Answer Don't Outdo.", bundle: 'pro' },
        { q: "What is most complaining about a storyteller actually about?", a: "Taking the turn without asking and not giving it back — not telling badly.", bundle: 'pro' },
      ]
    },
    {
      name: "Read the Room First",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Whether a story belongs here at all.",
      cards: [
        { q: "What is the question to ask before starting?", a: "Not whether the story is good — whether this moment wants one.", bundle: 'free' },
        { q: "What does a story after someone's difficult news feel like?", a: "A hijack, however good it is.", bundle: 'free' },
        { q: "What are the three moments to read?", a: "They have just told you something hard, the group is already swapping stories, or something practical is happening.", bundle: 'free' },
        { q: "What is the commonest complaint about a storyteller?", a: "Not that the story was bad — that it arrived at the wrong moment.", bundle: 'pro' },
        { q: "What do you do with a story you are holding back?", a: "Say you are holding it. \"I'll save that one\" keeps it alive for later.", bundle: 'pro' },
      ]
    },
    {
      name: "Ask for the Floor",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Taking the turn openly, and saying how big it is.",
      cards: [
        { q: "What are the three parts?", a: "Ask or signal, say the size honestly, and say what kind of story it is if that helps.", bundle: 'free' },
        { q: "Why does naming the length help?", a: "It answers the only question a listener has at the start, and they stop wondering when it ends.", bundle: 'free' },
        { q: "What is a story, in terms of the conversation?", a: "A request for uninterrupted attention — usually made silently.", bundle: 'free' },
        { q: "What happens if \"two minutes\" turns out to be five?", a: "Nobody believes the next one. Say so and land it.", bundle: 'pro' },
        { q: "Where does asking for the floor matter most?", a: "In a group, where nobody has agreed to listen unless somebody asks.", bundle: 'pro' },
      ]
    },
    {
      name: "Answer, Don't Outdo",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Following someone else's story without competing.",
      cards: [
        { q: "What is the move?", a: "Tell one that answers theirs rather than beats it — put yours beside theirs, not on top.", bundle: 'free' },
        { q: "What does a bigger story do to the one before it?", a: "Shrinks it retroactively, and the person who told it can feel that happen.", bundle: 'free' },
        { q: "What are the three ways to answer rather than compete?", a: "Say theirs is bigger if it is, match the size deliberately, and link yours to theirs out loud.", bundle: 'free' },
        { q: "Which phrase should be avoided even as a joke?", a: "\"That's nothing.\"", bundle: 'pro' },
        { q: "Is the size of your story fixed?", a: "No. It is a decision — you can tell the small version of almost anything.", bundle: 'pro' },
      ]
    },
    {
      name: "Watch Them While You Tell It",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Reading the listener mid-story.",
      cards: [
        { q: "What are the three signals?", a: "Questions and reactions mean keep going; repeated \"right\" and \"mm\" mean cut; eyes moving away means land it now.", bundle: 'free' },
        { q: "Why do people go on too long?", a: "Not because they are oblivious — because they have stopped looking, since looking is uncomfortable when you suspect the answer.", bundle: 'free' },
        { q: "What was the planned length?", a: "A guess made before you started. The face in front of you is the data.", bundle: 'free' },
        { q: "In a group, whose face do you read?", a: "The least engaged one, not the friendliest.", bundle: 'pro' },
        { q: "What does a question that jumps ahead mean?", a: "They are in the story far enough to guess. It is a compliment.", bundle: 'pro' },
      ]
    },
    {
      name: "Cut It Loose",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Abandoning a story that is not working.",
      cards: [
        { q: "What is the move?", a: "Abandon it out loud and lightly, instead of finishing out of stubbornness.", bundle: 'free' },
        { q: "Why does naming it work?", a: "Everyone already knows, so saying it is a relief — and usually gets the biggest laugh of the attempt.", bundle: 'free' },
        { q: "What are the three ways out?", a: "The clean abandon, landing it in one sentence, or handing it away with a question.", bundle: 'free' },
        { q: "Who is the urge to finish actually about?", a: "You. Finishing proves it was worth telling; abandoning admits it was not.", bundle: 'pro' },
        { q: "What do people remember?", a: "Not a story that did not land. They remember four extra minutes of one.", bundle: 'pro' },
      ]
    },
    {
      name: "Finish on Purpose",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Ending on the line you told it for.",
      cards: [
        { q: "What is the rule?", a: "End on the line you told it for, then stop talking.", bundle: 'free' },
        { q: "Why is trailing off costly?", a: "The listener cannot tell whether you have finished, so they say \"right\" and the story deflates in its last two seconds.", bundle: 'free' },
        { q: "What are the three endings that work?", a: "The line the story was for, the consequence, or a flat statement of what happened.", bundle: 'free' },
        { q: "What has to be removed?", a: "Everything after the ending — \"anyway\", \"so yeah\", and the summary of what you just said.", bundle: 'pro' },
        { q: "Does a story need a punchline?", a: "No. Most true ones do not. A flat ending said plainly is a proper ending.", bundle: 'pro' },
      ]
    },
    {
      name: "Give It Back",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Handing the floor on at the end.",
      cards: [
        { q: "What is the move?", a: "Hand the floor on when you finish — \"that's mine, has that ever happened to you?\"", bundle: 'free' },
        { q: "What happens if you finish and stop?", a: "Somebody else has to work out how to restart, and the conversation stalls.", bundle: 'free' },
        { q: "What are the three ways to hand it on?", a: "Ask for theirs on the same theme, go back to something they said earlier, or just say your turn is over.", bundle: 'free' },
        { q: "What is the cure for being the person who does all the talking?", a: "One handover after each story. That is the whole cure.", bundle: 'pro' },
        { q: "What is the story, in terms of the conversation?", a: "The first half. What they say next is the other half.", bundle: 'pro' },
      ]
    },
  ],
  praiseandencouragement: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The shape of the pack: a five-step guide for praise, and the rules that make it land.",
      cards: [
        { q: "What are the five steps in this pack?", a: "Identify the positive behaviour, highlight the impact, express appreciation, encourage future efforts, offer support.", bundle: 'free' },
        { q: "What is the difference between praise and encouragement?", a: "Praise says something was good; encouragement says keep going and points forward.", bundle: 'free' },
        { q: "What is the rule about \"but\"?", a: "No \"but\". Praise with criticism attached is heard only as criticism.", bundle: 'free' },
        { q: "What are the three ways to practise praise?", a: "Improvising, using ready-made phrases, or following the step-by-step guide.", bundle: 'pro' },
        { q: "Why does the order of the steps matter?", a: "Each step earns the next — \"keep it up\" lands on nothing if you have not said what \"it\" is.", bundle: 'pro' },
        { q: "What is the boundary against Validation?", a: "Validation says a feeling is reasonable; praise says something was good.", bundle: 'pro' },
      ]
    },
    {
      name: "Identify the Positive Behaviour",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Step one — praise as information rather than mood.",
      cards: [
        { q: "Why is specific praise better than general praise?", a: "It tells them what to do again. General praise is only a mood.", bundle: 'free' },
        { q: "Give an example of turning general praise into specific praise.", a: "\"I liked your strong opening in the presentation\" instead of \"good job\".", bundle: 'free' },
        { q: "Should you praise the action or the character?", a: "The action. \"You're brilliant\" gives them nothing to repeat.", bundle: 'free' },
        { q: "Name two ways to be specific.", a: "Any two of: the moment, the choice they made, the thing they did not do, the skill it shows.", bundle: 'pro' },
        { q: "Why is \"the thing they did not do\" worth praising?", a: "It is often the harder achievement — not filling the silence, not getting defensive.", bundle: 'pro' },
        { q: "Turn \"you did a great job\" into specific praise.", a: "Name the action — \"you kept the whole thing to four slides\".", bundle: 'pro' },
      ]
    },
    {
      name: "Highlight the Impact",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Step two — the effect, which turns a compliment into evidence.",
      cards: [
        { q: "What does this step describe?", a: "What the action did — to the outcome, to other people, or to you.", bundle: 'free' },
        { q: "Name two kinds of impact.", a: "Any two of: on the outcome, on other people, on you, on what comes next.", bundle: 'free' },
        { q: "Why are impacts easier to accept than verdicts?", a: "There is nothing to be modest about — you are reporting what happened.", bundle: 'free' },
        { q: "Which step works best for praising someone senior to you?", a: "Highlight the impact — you report a consequence rather than grading them.", bundle: 'pro' },
        { q: "Which step works on someone who always deflects?", a: "The same one. An effect is much harder to wave away.", bundle: 'pro' },
        { q: "What is the most personal kind of impact to name?", a: "The effect on you — \"I stopped worrying the moment you took it on\".", bundle: 'pro' },
      ]
    },
    {
      name: "Express Appreciation",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Step three — the warmth step, and the one most often skipped.",
      cards: [
        { q: "What does this step add that the first two do not?", a: "Warmth — the first two are about the work, this one is about the relationship.", bundle: 'free' },
        { q: "What matters more than perfect words?", a: "Being genuine, and your tone and sincerity.", bundle: 'free' },
        { q: "Name two ways to express appreciation.", a: "Any two of: plain thanks with the reason, say what it meant to you, appreciate the choice, name it as kindness.", bundle: 'free' },
        { q: "Why does \"you didn't have to do that\" work well?", a: "It appreciates the choice, not just the help — they could have done nothing.", bundle: 'pro' },
        { q: "What is the mindset line for this step?", a: "Genuine beats polished. If it is slightly awkward and true, say it anyway.", bundle: 'pro' },
        { q: "Who most often skips this step?", a: "People who are otherwise good at feedback — they describe accurately and never say they are glad.", bundle: 'pro' },
      ]
    },
    {
      name: "Encourage Future Efforts",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Step four — pointing forward.",
      cards: [
        { q: "When do most people stop?", a: "Just after a small success, when the pressure is off and the next attempt has no deadline.", bundle: 'free' },
        { q: "Name two ways to encourage.", a: "Any two of: name the thing to repeat, point at the next step, show the progress, express belief lightly.", bundle: 'free' },
        { q: "Give two ready-made encouragement phrases.", a: "Any two of: \"keep up the good work\", \"I believe you can do it\", \"you have improved a lot in…\".", bundle: 'free' },
        { q: "How do you make \"I believe in you\" usable?", a: "Attach evidence — \"you'll manage the questions, you already did today\".", bundle: 'pro' },
        { q: "What does \"name the thing to repeat\" achieve?", a: "It makes the success reusable rather than a one-off.", bundle: 'pro' },
        { q: "How do you encourage someone losing momentum?", a: "Point back to the smallest version that worked — ten minutes a day rather than nothing.", bundle: 'pro' },
      ]
    },
    {
      name: "Offer Support",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Step five — turning goodwill into something they can rely on.",
      cards: [
        { q: "What does the support step do that encouragement alone does not?", a: "It removes a real obstacle instead of putting the whole task back on them.", bundle: 'free' },
        { q: "Name two ways to offer support.", a: "Any two of: a concrete task, your presence, an open door with a handle on it, removing an obstacle.", bundle: 'free' },
        { q: "What is wrong with \"let me know if you need anything\"?", a: "It is vague, so it is almost never taken up.", bundle: 'free' },
        { q: "Why is an offer you do not keep worse than no offer?", a: "Because they built on it.", bundle: 'pro' },
        { q: "Why does an offer also prove the praise was sincere?", a: "People rarely offer their own time for something they were only being polite about.", bundle: 'pro' },
        { q: "What should you do if you cannot keep an offer you made?", a: "Say so early and replace it with something specific you can do.", bundle: 'pro' },
      ]
    },
  ],
  givingcriticism: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The shape of the pack: a light version, a six-step version, and the judgement about which one this needs.",
      cards: [
        { q: "What are the two versions of criticism in this pack?", a: "The light version — one polite sentence — and the full six-step version, plus the judgement about which one to use.", bundle: 'free' },
        { q: "What are the six steps?", a: "Something real, name the behaviour, explain the impact, suggest an alternative, say what improves, encourage and offer support.", bundle: 'free' },
        { q: "What is the test for which version to use?", a: "Will it still matter in a month? If yes, the full version.", bundle: 'free' },
        { q: "Which three steps are the actual criticism?", a: "Naming the behaviour, explaining the impact, and suggesting the alternative.", bundle: 'pro' },
        { q: "What do the outer three steps do?", a: "They make it possible to hear — the opening stops it being an attack, the upside makes it worth doing, the support means they leave with something other than fault.", bundle: 'pro' },
        { q: "What is the commonest damage in the full version?", a: "Stopping halfway — behaviour and impact and then leaving, which is a complaint rather than a conversation.", bundle: 'pro' },
      ]
    },
    {
      name: "Say It Lightly",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The one-sentence version, which most things need.",
      cards: [
        { q: "When is the light version right?", a: "When the thing will not still matter in a month.", bundle: 'free' },
        { q: "Name two ways to frame a light correction.", a: "Any two of: as a request, as a preference, as a suggestion for next time, as something that would help, as a small improvement.", bundle: 'free' },
        { q: "Why does framing matter so much here?", a: "A request, a preference or a suggestion all say the same thing as a verdict, and land far better.", bundle: 'free' },
        { q: "What is the mindset line for this move?", a: "Keep it the size of the problem — if one sentence would do it, one sentence is right.", bundle: 'pro' },
        { q: "Why does putting it in the future help?", a: "\"Next time, maybe you could…\" places it where nobody has failed yet.", bundle: 'pro' },
        { q: "What is the discipline after saying the light version?", a: "Stopping. Adding the impact and the alternative upgrades a small thing into a big one.", bundle: 'pro' },
      ]
    },
    {
      name: "Start With Something Real",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The opening step, and the most abused one.",
      cards: [
        { q: "What must the opening be?", a: "True, and short.", bundle: 'free' },
        { q: "What happens if it is invented?", a: "It is heard immediately and turns the rest into a performance.", bundle: 'free' },
        { q: "What do you use when nothing positive is true?", a: "A neutral observation — real, non-evaluative, and it does the same job.", bundle: 'free' },
        { q: "Why does a long positive opening fail?", a: "It is a warning siren, and everyone recognises the sound.", bundle: 'pro' },
        { q: "What question is this step answering?", a: "Whether this is a judgement of them as a person.", bundle: 'pro' },
        { q: "Give an example of a neutral observation.", a: "\"You've been covering two roles since March\" — not praise, but true.", bundle: 'pro' },
      ]
    },
    {
      name: "Name the Behaviour",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Where \"the behaviour, not the person\" actually lives.",
      cards: [
        { q: "What is the test for a properly named behaviour?", a: "Could a camera have recorded it?", bundle: 'free' },
        { q: "Why is a character judgement worse than a specific fact?", a: "It leaves them nothing to do except defend themselves.", bundle: 'free' },
        { q: "Name two ways to name a behaviour.", a: "Any two of: the countable fact, the specific moment, the pattern with instances, what was missing.", bundle: 'free' },
        { q: "Turn \"you're disorganised\" into a behaviour.", a: "\"The last two came in a week after the date.\"", bundle: 'pro' },
        { q: "Turn \"you don't listen\" into a behaviour.", a: "\"I asked twice for the Friday version and got Wednesday's both times.\"", bundle: 'pro' },
        { q: "How do you name a pattern without presenting a case?", a: "Give the pattern with one or two instances, not six.", bundle: 'pro' },
      ]
    },
    {
      name: "Explain the Impact",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The step that answers \"so what\".",
      cards: [
        { q: "What question does this step answer?", a: "So what — who is affected, and how.", bundle: 'free' },
        { q: "What happens without it?", a: "The correction reads as a preference, and you sound fussy.", bundle: 'free' },
        { q: "Name two kinds of impact.", a: "Any two of: on other people, on the work, on you, on them.", bundle: 'free' },
        { q: "Why does the impact move the conversation off character?", a: "A consequence is a fact and cannot be argued away; an accusation can.", bundle: 'pro' },
        { q: "Which impact do people most often leave out?", a: "The one on themselves.", bundle: 'pro' },
        { q: "How do you name the impact on them without threatening?", a: "Describe what is already happening — \"people have started going round you, and I don't think you'd want that\".", bundle: 'pro' },
      ]
    },
    {
      name: "Suggest What to Do Instead",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The step that gives them somewhere to go.",
      cards: [
        { q: "Why is criticism without an alternative a problem?", a: "They know they are wrong and do not know what right looks like.", bundle: 'free' },
        { q: "How specific should the alternative be?", a: "Small enough to try tomorrow.", bundle: 'free' },
        { q: "Name two ways to suggest.", a: "Any two of: the concrete swap, break it smaller, offer what works for you, ask them for the alternative.", bundle: 'free' },
        { q: "Why is asking them for the alternative often best?", a: "They own it, and they know the constraints better than you do.", bundle: 'pro' },
        { q: "Why is \"be more organised\" not an alternative?", a: "It is not something anyone can do tomorrow.", bundle: 'pro' },
        { q: "When does defensiveness usually appear?", a: "At the point where someone has been told they are wrong and given nowhere to go.", bundle: 'pro' },
      ]
    },
    {
      name: "Say What Improves If They Do",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The step that turns a complaint into a proposal.",
      cards: [
        { q: "What does this step change about the conversation?", a: "It turns a complaint into a proposal — there is now something to gain.", bundle: 'free' },
        { q: "Why is it the most skipped step?", a: "The difficult part is over and people want to stop talking.", bundle: 'free' },
        { q: "Name two kinds of upside.", a: "Any two of: for the group, for the work, for them, for the relationship.", bundle: 'free' },
        { q: "What makes an upside worth naming?", a: "That they would actually want it. An upside only for you is just the impact again.", bundle: 'pro' },
        { q: "Which upside is most motivating?", a: "The one for them — \"you'd stop getting chased about it\".", bundle: 'pro' },
        { q: "What is the quiet fourth kind?", a: "The effect on the relationship — \"I'd stop being the person who brings this up\".", bundle: 'pro' },
      ]
    },
    {
      name: "Encourage and Offer Support",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The closing step, and what they carry out of the room.",
      cards: [
        { q: "Why does the last step matter so much?", a: "It is what they carry out of the room — confidence rather than fault.", bundle: 'free' },
        { q: "What must the offer be?", a: "Real, and small enough to be certain you will keep it.", bundle: 'free' },
        { q: "Name two ways to close.", a: "Any two of: express confidence, offer a concrete task, take one thing off them, normalise it.", bundle: 'free' },
        { q: "What is wrong with \"let me know if you need anything\"?", a: "It costs nothing and is almost never taken up.", bundle: 'pro' },
        { q: "What happens if you do not keep the offer?", a: "It undoes everything before it.", bundle: 'pro' },
        { q: "What do you say when someone takes a small thing much too hard?", a: "Shrink it honestly — \"it's said, it's small, and I'm not going to raise it again\".", bundle: 'pro' },
      ]
    },
  ],
  receivingfeedbackandcriticism: [
    {
      name: "Core Idea",
      description: "The concept behind receiving feedback and the full set of moves.",
      cards: [
        { q: "What is the goal when you receive criticism?", a: "Take it in without becoming defensive, show you understood, and get something useful out of it.", bundle: 'free' },
        { q: "What are the four steps of the response process?", a: "Acknowledge the feedback, show you understand their view, reflect openly, look ahead.", bundle: 'free' },
        { q: "What is the fifth move in this pack?", a: "The Short Response — the whole thing in one line, for small or passing feedback.", bundle: 'free' },
        { q: "What is the core mindset?", a: "Feedback is about behaviour, not your worth. Stay calm and open even when it's unexpected.", bundle: 'free' },
        { q: "Do you have to agree with feedback to respond well?", a: "No. You can run all four steps honestly and still say you see it differently at step three.", bundle: 'pro' },
        { q: "What is the most common mistake?", a: "Jumping straight to a promise or a defence, before the person feels heard.", bundle: 'pro' },
        { q: "How do you choose between the short and the full response?", a: "Match the weight — a passing comment gets one line, a considered concern gets the steps.", bundle: 'pro' },
      ]
    },
    {
      name: "Acknowledge the Feedback",
      description: "The theory behind the opening step.",
      cards: [
        { q: "What is Acknowledge the Feedback?", a: "Showing you heard it and that it was fine to say, before answering the content.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"Thanks for telling me.\" or \"I appreciate you saying that.\"", bundle: 'free' },
        { q: "Does thanking them mean agreeing?", a: "No. You're thanking them for telling you, not for being right.", bundle: 'free' },
        { q: "What does it buy you?", a: "A couple of seconds, so you respond instead of react.", bundle: 'pro' },
        { q: "What is the failure mode?", a: "Opening with a defence instead — after that, nothing you say gets heard properly.", bundle: 'pro' },
      ]
    },
    {
      name: "Show You Understand Their View",
      description: "The theory behind the step that stops the contest.",
      cards: [
        { q: "What is Show You Understand Their View?", a: "Saying in your own words how it looked from where they stood, without yet agreeing.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"I can see how you'd feel that way.\" or \"From your side it must have looked careless.\"", bundle: 'free' },
        { q: "Why does it calm things down?", a: "Once people hear their view has landed, they stop pushing to be understood.", bundle: 'free' },
        { q: "What are the three ways to do it?", a: "Name their feeling, name their view of what happened, or grant the part that's fair.", bundle: 'pro' },
        { q: "What is the failure mode?", a: "Correcting small factual details instead — it tells them the feeling didn't register.", bundle: 'pro' },
      ]
    },
    {
      name: "Reflect Openly",
      description: "The theory behind thinking out loud instead of defending or promising.",
      cards: [
        { q: "What is Reflect Openly?", a: "Saying honestly what the feedback does to your thinking — including that you're not sure yet.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"That gives me something to think about.\" or \"I hadn't seen it that way.\"", bundle: 'free' },
        { q: "Where does honest disagreement belong?", a: "Here, at step three — not at the start.", bundle: 'free' },
        { q: "Why is it called a third option?", a: "Most people think they must answer with a defence or a promise. This is the way out of that.", bundle: 'pro' },
        { q: "Is \"I need to think about it\" a weak answer?", a: "No — it's a complete one, and confident people use it.", bundle: 'pro' },
      ]
    },
    {
      name: "Look Ahead",
      description: "The theory behind the closing step.",
      cards: [
        { q: "What is Look Ahead?", a: "Naming what you'll do differently, or what you'll consider, so the feedback changes something.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"Next time I'll...\" or \"I'll consider another way to handle that.\"", bundle: 'free' },
        { q: "Why is it needed?", a: "Without it, everything before it sounds polite but empty.", bundle: 'free' },
        { q: "How big should the promise be?", a: "Small enough that you'll actually keep it. A modest kept promise beats a big forgotten one.", bundle: 'pro' },
        { q: "What is the failure mode?", a: "Doing it first — a promise before the person feels heard reads as a way of ending the conversation.", bundle: 'pro' },
      ]
    },
    {
      name: "The Short Response",
      description: "The theory behind the one-line version.",
      cards: [
        { q: "What is The Short Response?", a: "The whole process compressed into one line, for small, casual or passing feedback.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"Fair enough, I see what you mean.\" or \"Noted, I'll think about it.\"", bundle: 'free' },
        { q: "When do you use it?", a: "When the feedback is light, and running four steps would make it heavier than it was.", bundle: 'free' },
        { q: "What stops it sounding dismissive?", a: "Tone, not length. A warm one-liner reads fine; a flat one reads as a brush-off.", bundle: 'pro' },
        { q: "When is it the wrong choice?", a: "When someone worked up the nerve to say something — then a one-liner feels like a brush-off.", bundle: 'pro' },
      ]
    },
  ],
  apologizing1: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The shape of the pack: an everyday apology in four moves.",
      cards: [
        { q: "What are the four strategies in this pack?", a: "Choose the size, say sorry simply, apologise for what you did, say what you'll do differently.", bundle: 'free' },
        { q: "What is the test for the size?", a: "Did it land on them, or did it only embarrass you?", bundle: 'free' },
        { q: "What is the rule about \"but\"?", a: "There isn't one. The word deletes everything before it.", bundle: 'free' },
        { q: "What are the two questions an apology has to answer?", a: "Do you know what you did, and is it going to happen again?", bundle: 'pro' },
        { q: "Which part costs you anything in the future?", a: "The plan.", bundle: 'pro' },
        { q: "When is this pack not enough?", a: "When somebody was genuinely hurt — then the fuller version takes over.", bundle: 'pro' },
      ]
    },
    {
      name: "Choose the Size",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The judgement that comes before everything else.",
      cards: [
        { q: "What is wrong with a full apology for something trivial?", a: "It makes the other person manage your discomfort.", bundle: 'free' },
        { q: "What is wrong with a short apology for something that hurt?", a: "It reads as wanting it dealt with rather than repaired.", bundle: 'free' },
        { q: "Name two things that raise the size.", a: "Any two of: they mentioned it, it has happened before, it is still sitting there days later.", bundle: 'free' },
        { q: "Why does signalling the size matter?", a: "\"Sorry about that\" and \"can I talk to you about yesterday\" prepare people very differently.", bundle: 'pro' },
        { q: "What do you do if a brief apology clearly was not enough?", a: "Go back and do it properly — \"I brushed that off, can we do it again?\"", bundle: 'pro' },
        { q: "What is the mindset line for this move?", a: "Match the depth to the harm, not to your own embarrassment.", bundle: 'pro' },
      ]
    },
    {
      name: "Say Sorry Simply",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The short version, which most things need.",
      cards: [
        { q: "What makes a short apology work?", a: "Being unqualified — no explanation, no \"but\", no context.", bundle: 'free' },
        { q: "Name two ways to keep it short.", a: "Any two of: plain sorry, sorry plus the thing, owning it lightly, sorry plus the fix.", bundle: 'free' },
        { q: "What happens when you add an explanation?", a: "It becomes a defence with the word sorry in front of it.", bundle: 'free' },
        { q: "What is the strongest short version?", a: "Sorry plus the fix — \"sorry, sending it now\".", bundle: 'pro' },
        { q: "What is the discipline after a short apology?", a: "Stopping. Do not upgrade a small thing mid-sentence.", bundle: 'pro' },
        { q: "Why is doing it immediately better than doing it well?", a: "Every apology gets harder the longer it waits.", bundle: 'pro' },
      ]
    },
    {
      name: "Apologise for What You Did",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The specific, unconditional apology.",
      cards: [
        { q: "What makes an apology specific enough?", a: "Naming exactly what you did, not a general expression of regret.", bundle: 'free' },
        { q: "What three words make it not an apology?", a: "\"If\", \"but\" and \"you\" — as in \"sorry if\", \"sorry but\", \"sorry you felt\".", bundle: 'free' },
        { q: "Name two ways to apologise properly.", a: "Any two of: sorry for the specific action, sorry plus what you should have done, own the part that is yours, say it was wrong rather than unfortunate.", bundle: 'free' },
        { q: "What do the three non-apologies have in common?", a: "Each one protects you.", bundle: 'pro' },
        { q: "How do you apologise when you still think you were right?", a: "Precisely for your part — the tone, the timing, the audience — and hold the substance separately.", bundle: 'pro' },
        { q: "What do you do if literally nothing is yours?", a: "Say so kindly rather than performing regret you do not feel.", bundle: 'pro' },
      ]
    },
    {
      name: "Say What You'll Do Differently",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The part that costs you something.",
      cards: [
        { q: "Why is this the most important part to someone let down before?", a: "It is the only part that is not words about the past.", bundle: 'free' },
        { q: "How specific should the plan be?", a: "Small enough to be believed, specific enough to be checked.", bundle: 'free' },
        { q: "Name two kinds of plan.", a: "Any two of: a concrete behaviour change, a different response in the same moment, giving them a way to stop it, saying what you will not do.", bundle: 'free' },
        { q: "What is wrong with \"I'll be more careful\"?", a: "It cannot be checked, so neither of you will know whether anything changed.", bundle: 'pro' },
        { q: "Why does giving them a way to stop it work well?", a: "It hands them some control instead of asking them to trust and wait.", bundle: 'pro' },
        { q: "What do you say when it is the second time you have apologised for the same thing?", a: "Name that fact — \"I said this last time and nothing changed, so this time it's written down\".", bundle: 'pro' },
      ]
    },
  ],
  agreeing: [
    {
      name: "Core Idea",
      description: "The concept behind agreeing and the full set of moves.",
      cards: [
        { q: "What is the goal when you agree with someone?", a: "Show you're with them AND add something — a reason, an experience, or a further idea.", bundle: 'free' },
        { q: "What are the four moves in this pack?", a: "Signal the Agreement, Add a Personal Experience, Give an Explanation, Expand the Idea.", bundle: 'free' },
        { q: "What are the two halves of a full agreeing turn?", a: "The signal that you agree, then the contribution that gives it substance.", bundle: 'free' },
        { q: "What is the one thing that never works?", a: "Agreeing and stopping. \"Yeah, totally\" on its own adds nothing.", bundle: 'free' },
        { q: "How do you choose your contribution?", a: "Take what you have — a story if you've lived it, a reason if you haven't, an expansion if the point is already made.", bundle: 'pro' },
        { q: "What should you do before responding at all?", a: "Listen to the whole statement, so you agree with what they actually said.", bundle: 'pro' },
        { q: "What if you only half agree?", a: "Narrow it. \"I agree, especially when...\" is honest agreement, not a dodge.", bundle: 'pro' },
      ]
    },
    {
      name: "Signal the Agreement",
      description: "The theory behind the opening confirmation.",
      cards: [
        { q: "What is Signal the Agreement?", a: "A short, warm confirmation that you're on their side, before you add anything.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"I totally agree.\" / \"That's so true.\" / \"Exactly.\"", bundle: 'free' },
        { q: "Why bother with it?", a: "It makes what follows land as agreement rather than as a correction.", bundle: 'free' },
        { q: "What matters more than the words?", a: "Warmth. A plain \"yes, exactly\" said like you mean it beats a clever line said flatly.", bundle: 'pro' },
        { q: "What is the failure mode?", a: "Only ever signalling — by the third \"so true\" it sounds like you've stopped listening.", bundle: 'pro' },
      ]
    },
    {
      name: "Add a Personal Experience",
      description: "The theory behind backing agreement with your own life.",
      cards: [
        { q: "What is Add a Personal Experience?", a: "Agreeing, then backing it with something that actually happened to you.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"Same here — I always...\" / \"I've done that for years.\"", bundle: 'free' },
        { q: "Why is it the easiest support to give?", a: "You don't have to argue for it. It's simply true.", bundle: 'free' },
        { q: "What three kinds of experience can you reach for?", a: "A habit, a one-off memory, or a long-running pattern.", bundle: 'pro' },
        { q: "How impressive does it need to be?", a: "Not at all. A small ordinary detail proves you mean it better than a big claim.", bundle: 'pro' },
      ]
    },
    {
      name: "Give an Explanation",
      description: "The theory behind saying why the opinion makes sense.",
      cards: [
        { q: "What is Give an Explanation?", a: "Agreeing, then saying why it makes sense — the reason rather than an example.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"Another reason is...\" / \"I feel the same way, because...\" / \"I agree, especially when...\"", bundle: 'free' },
        { q: "When is it the right move?", a: "Whenever you share the opinion but have no experience of it to offer.", bundle: 'free' },
        { q: "What are the three ways to explain?", a: "Add a reason they didn't mention, name the mechanism, or narrow to where it's most true.", bundle: 'pro' },
        { q: "What is the failure mode?", a: "Explaining at length — it starts to sound like you understand their point better than they do.", bundle: 'pro' },
      ]
    },
    {
      name: "Expand the Idea",
      description: "The theory behind pushing the thought one step further.",
      cards: [
        { q: "What is Expand the Idea?", a: "Agreeing, then adding a related point that goes beyond what they said.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"Exactly, and you could also say...\" / \"Yes — and the same goes for...\"", bundle: 'free' },
        { q: "How is it different from the other two moves?", a: "They support the point. An expansion gives the other person something new to react to.", bundle: 'free' },
        { q: "What are the three ways to expand?", a: "Take it further, apply it somewhere else, or name what follows from it.", bundle: 'pro' },
        { q: "How far is too far?", a: "One step, not five. If they have to catch up, you've changed the subject.", bundle: 'pro' },
      ]
    },
  ],
  disagreeing: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The shape of the pack: four moves, mirroring Agreeing, and the principle that disagreement is a contribution rather than a contest.",
      cards: [
        { q: "What are the four moves in this pack?", a: "Signal the Disagreement, Give Your Reason, Offer a Different Perspective, Add an Example.", bundle: 'free' },
        { q: "Which pack is this the mirror of?", a: "Agreeing — same four-move shape.", bundle: 'free' },
        { q: "What is the aim of a disagreement, according to this pack?", a: "A better shared picture, not a winner.", bundle: 'free' },
        { q: "Why signal before disagreeing?", a: "Because most defensiveness comes from surprise, not from the disagreement itself.", bundle: 'pro' },
        { q: "What usually causes the conflict in a disagreement?", a: "How it was said, or how late it surfaced — not the difference itself.", bundle: 'pro' },
        { q: "When is choosing not to disagree the right move?", a: "When the difference changes nothing, or it is someone else's call — and only if you can genuinely let it go.", bundle: 'pro' },
      ]
    },
    {
      name: "Signal the Disagreement",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The short phrase that tells them what kind of sentence is coming.",
      cards: [
        { q: "What does signalling actually do?", a: "Tells them a different view is coming, so it lands as a contribution rather than a correction.", bundle: 'free' },
        { q: "Give two signalling phrases.", a: "Any two of: \"I see it differently\", \"I'm not sure I agree\", \"I'd say the opposite\", \"my experience is different\".", bundle: 'free' },
        { q: "What does it mean to own it as yours?", a: "Frame it as your view rather than as the truth — \"for me it's the other way round\".", bundle: 'free' },
        { q: "What is the mindset line for this move?", a: "You are not asking permission to disagree — you are saying what comes next.", bundle: 'pro' },
        { q: "How do you acknowledge and still turn?", a: "Take their point seriously first, then state your own — \"I get why you'd say that. I still land elsewhere.\"", bundle: 'pro' },
        { q: "How do you signal interest rather than conflict?", a: "Treat the difference as the interesting part — \"we're opposite on this, say more?\"", bundle: 'pro' },
      ]
    },
    {
      name: "Give Your Reason",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The move that makes a disagreement discussable.",
      cards: [
        { q: "Why is a disagreement without a reason a problem?", a: "Positions can only be repeated at each other; reasons can be discussed.", bundle: 'free' },
        { q: "Name two kinds of reason.", a: "Any two of: from your own experience, from a consequence, from a value, from something they have not accounted for.", bundle: 'free' },
        { q: "How many reasons should you give?", a: "One, properly.", bundle: 'free' },
        { q: "Why not give three reasons at once?", a: "It invites them to argue with the weakest one.", bundle: 'pro' },
        { q: "Why is a reason from your own experience strong?", a: "It is honest and hard to argue with — it happened to you.", bundle: 'pro' },
        { q: "What does \"from a consequence\" mean?", a: "Saying where the thing leads rather than what is wrong with it now.", bundle: 'pro' },
      ]
    },
    {
      name: "Offer a Different Perspective",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The move that widens the picture instead of contradicting it.",
      cards: [
        { q: "What is this move doing?", a: "Adding a way of looking at the thing, not passing a verdict on theirs.", bundle: 'free' },
        { q: "Name two ways to open a different view.", a: "Any two of: change the frame, change the timescale, change whose eyes, accept part and separate the rest.", bundle: 'free' },
        { q: "Why is an addition easier to accept than a contradiction?", a: "A contradiction invites people to dig in; an addition invites them to step sideways.", bundle: 'free' },
        { q: "What does \"change the timescale\" look like?", a: "Short term against long term — slower this month, faster from March.", bundle: 'pro' },
        { q: "What does \"change whose eyes\" mean?", a: "Looking from someone else's position — true for us, confusing for a new person.", bundle: 'pro' },
        { q: "How do you accept part and separate the rest?", a: "Keep what is right and isolate the difference — \"the problem is real, it's the solution I'd change\".", bundle: 'pro' },
      ]
    },
    {
      name: "Add an Example",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The move that makes a view concrete — one instance, kept short.",
      cards: [
        { q: "How many examples should you give?", a: "One. A second usually weakens the first.", bundle: 'free' },
        { q: "Name two kinds of example.", a: "Any two of: something that happened to you, something you both know, a case where their view holds and one where it does not, a small hypothetical.", bundle: 'free' },
        { q: "What is the boundary against Giving Examples?", a: "Here the example is one supporting line; building and choosing examples is its own skill.", bundle: 'free' },
        { q: "Why does one example beat more reasoning?", a: "It gives them something to picture and check against their own experience.", bundle: 'pro' },
        { q: "What makes a personal example work?", a: "Being specific and small — dated, concrete, one instance.", bundle: 'pro' },
        { q: "When is a hypothetical the right choice?", a: "When you have no real case — \"say someone joins next week and reads that page\".", bundle: 'pro' },
      ]
    },
  ],
  persuasionandinfluence1: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The shape of the pack: four strategies that put something on the table.",
      cards: [
        { q: "What are the four strategies in this pack?", a: "Show the benefit to them, give a reason, name the cost of doing nothing, tell what happened to you.", bundle: 'free' },
        { q: "What do all four have in common?", a: "Each puts material on the table, rather than working on the other person's resistance.", bundle: 'free' },
        { q: "What decides which one to use?", a: "Why they have not agreed yet — not which strategy is strongest.", bundle: 'free' },
        { q: "What do you use when they have not engaged at all?", a: "The benefit, or the cost of doing nothing — something has to make it their business.", bundle: 'pro' },
        { q: "What do you use when they have heard the argument and are unmoved?", a: "What happened to you, because it asks them to concede nothing.", bundle: 'pro' },
        { q: "Where does influence stop and pressure begin?", a: "When their interest is only in your framing, not really in your case.", bundle: 'pro' },
      ]
    },
    {
      name: "Show the Benefit to Them",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The strategy that answers \"what does this do for me\".",
      cards: [
        { q: "What does this strategy name?", a: "What improves for them specifically if it happens.", bundle: 'free' },
        { q: "Name two kinds of benefit.", a: "Any two of: what they gain, what they avoid, what it makes possible later, admitting there is none.", bundle: 'free' },
        { q: "Why is what they avoid often stronger than what they gain?", a: "Losses feel bigger than gains.", bundle: 'free' },
        { q: "What do you do when there is genuinely nothing in it for them?", a: "Say so — you are asking a favour, not making a case.", bundle: 'pro' },
        { q: "What is the test before you speak?", a: "Whether you can say what they get. If not, the proposal is not finished.", bundle: 'pro' },
        { q: "Why do most proposals miss this?", a: "They are presented entirely from the proposer's side.", bundle: 'pro' },
      ]
    },
    {
      name: "Give a Reason",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The strategy that turns a request into something to consider.",
      cards: [
        { q: "How many reasons should you give?", a: "One, properly. Three invites them to argue with the weakest.", bundle: 'free' },
        { q: "Name two kinds of reason.", a: "Any two of: from experience, from a consequence, from something they have not accounted for, honestly marked as opinion.", bundle: 'free' },
        { q: "What do you do when you have no evidence?", a: "Say so, and give your view as a view.", bundle: 'free' },
        { q: "Why is inventing evidence unrecoverable?", a: "When it is checked, everything else you said goes with it.", bundle: 'pro' },
        { q: "How do you quote something you read?", a: "With its source, and marked as their number rather than yours.", bundle: 'pro' },
        { q: "What does a reason change about a request?", a: "It invites consideration instead of a yes-or-no reflex.", bundle: 'pro' },
      ]
    },
    {
      name: "Name the Cost of Doing Nothing",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The strategy that makes the comparison honest.",
      cards: [
        { q: "Why is the cost of the status quo usually invisible?", a: "Everyone has been paying it long enough to stop noticing.", bundle: 'free' },
        { q: "What question does this strategy change?", a: "From \"is this worth doing\" to \"is this worth more than what we're already losing\".", bundle: 'free' },
        { q: "Name two ways to name the cost.", a: "Any two of: count what it costs now, name the repeat, name who is carrying it, say what it stops you doing.", bundle: 'free' },
        { q: "Why should the cost be stated without drama?", a: "An exaggerated cost invites an argument about the exaggeration.", bundle: 'pro' },
        { q: "Which version is often the most persuasive?", a: "Naming who is carrying it, especially when they are not in the room.", bundle: 'pro' },
        { q: "What is the mindset line for this strategy?", a: "Doing nothing is not a neutral option — it is a cost you are used to.", bundle: 'pro' },
      ]
    },
    {
      name: "Tell What Happened to You",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The strategy that asks the listener to concede nothing.",
      cards: [
        { q: "Why does a first-hand account slip past resistance?", a: "They are not agreeing with an argument, they are hearing what happened.", bundle: 'free' },
        { q: "How long should it be?", a: "Two or three sentences.", bundle: 'free' },
        { q: "Name two versions of it.", a: "Any two of: the time it worked, the time it did not, the time you were wrong, what you saw someone else do.", bundle: 'free' },
        { q: "Which version is most persuasive?", a: "The time you were wrong — it costs you something.", bundle: 'pro' },
        { q: "What happens if the account runs long?", a: "It stops being evidence and becomes an anecdote people wait out.", bundle: 'pro' },
        { q: "What do you say when they claim your case was different?", a: "Concede the differences and name the part that is the same.", bundle: 'pro' },
      ]
    },
  ],
  persuasionandinfluence2: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The shape of the pack: four strategies that remove an obstacle rather than adding an argument.",
      cards: [
        { q: "What are the four strategies in this pack?", a: "Ask a question instead, acknowledge before suggesting, make it easy to say yes, let them decide.", bundle: 'free' },
        { q: "What do all four have in common?", a: "Each removes an obstacle rather than strengthening the case.", bundle: 'free' },
        { q: "What is the aim, in one phrase?", a: "Guide rather than push.", bundle: 'free' },
        { q: "Which obstacle does each one remove?", a: "The need to concede, the sense of being corrected, the size of the commitment, and the pressure itself.", bundle: 'pro' },
        { q: "When a good case has failed, where is the problem usually?", a: "Here, in the resistance — not in the case.", bundle: 'pro' },
        { q: "Where does influence stop and pressure begin?", a: "When their interest is only in your framing, not really in your case.", bundle: 'pro' },
      ]
    },
    {
      name: "Ask a Question Instead",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The strategy that lets them reach the conclusion themselves.",
      cards: [
        { q: "Why is a conclusion someone reaches themselves held more firmly?", a: "There is nothing to concede, so there is no losing an argument.", bundle: 'free' },
        { q: "Name two kinds of question.", a: "Any two of: the consequence question, the comparison question, the genuine unknown, the invitation to improve it.", bundle: 'free' },
        { q: "What makes a question fail?", a: "Having an obvious right answer — it is an argument in disguise and everyone can hear it.", bundle: 'free' },
        { q: "What is the test for a genuine question?", a: "Whether you would want it answered even if the answer went against you.", bundle: 'pro' },
        { q: "What question hands them ownership?", a: "\"How would you do it, if it were yours?\"", bundle: 'pro' },
        { q: "What do you ask when they have already decided?", a: "What would have to happen for them to change their mind.", bundle: 'pro' },
      ]
    },
    {
      name: "Acknowledge Before Suggesting",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The strategy that stops a proposal being heard as a correction.",
      cards: [
        { q: "How is a proposal without acknowledgement heard?", a: "As a correction — and people defend against corrections.", bundle: 'free' },
        { q: "What is the difference between adding and replacing?", a: "\"There's another way\" leaves both options alive; \"we should do it differently\" removes one.", bundle: 'free' },
        { q: "Name two ways to acknowledge.", a: "Any two of: name what is right about it, say you had the same view, concede the strongest part, add rather than replace.", bundle: 'free' },
        { q: "Why is \"I hear you, but\" worse than nothing?", a: "It announces that the acknowledgement was procedural.", bundle: 'pro' },
        { q: "What is the strongest form of acknowledgement?", a: "Conceding the strongest part of their case.", bundle: 'pro' },
        { q: "Why do people argue harder when you counter their idea?", a: "They are defending what you are trying to remove.", bundle: 'pro' },
      ]
    },
    {
      name: "Make It Easy to Say Yes",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The strategy that shrinks the ask rather than strengthening the case.",
      cards: [
        { q: "What is most resistance actually about?", a: "The size of the commitment, not disagreement.", bundle: 'free' },
        { q: "Name two ways to lower the bar.", a: "Any two of: make it smaller, make it reversible, make it time-limited, ask for something other than a yes.", bundle: 'free' },
        { q: "What should you try before a better argument?", a: "A smaller version of the ask.", bundle: 'free' },
        { q: "Why does \"we'll go back if it's worse\" work?", a: "It removes the fear of being stuck with the decision.", bundle: 'pro' },
        { q: "What can you ask for instead of agreement?", a: "An opinion, a look at it, ten minutes — anything that is not a commitment.", bundle: 'pro' },
        { q: "What does a refusal often mean?", a: "That the ask was too big, not that it was wrong.", bundle: 'pro' },
      ]
    },
    {
      name: "Let Them Decide",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The strategy that separates influence from pressure.",
      cards: [
        { q: "What does naming their freedom remove?", a: "The pressure they are actually pushing against.", bundle: 'free' },
        { q: "Name two ways to hand it over.", a: "Any two of: state it plainly, say you will back either outcome, give them time, say you have finished asking.", bundle: 'free' },
        { q: "What is the condition on this strategy?", a: "Only say it if it is true.", bundle: 'free' },
        { q: "When do people usually change their minds?", a: "Afterwards, in the quiet, without an audience.", bundle: 'pro' },
        { q: "What is worse than never handing over the decision?", a: "Handing it over and then asking three more times.", bundle: 'pro' },
        { q: "What decides whether you get a second conversation after a no?", a: "How you took the first one.", bundle: 'pro' },
      ]
    },
  ],
  negotiationandcompromise: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The shape of the pack: seven strategies, and the distinction the whole thing rests on.",
      cards: [
        { q: "What are the seven strategies in this pack?", a: "State what you want, show you understood theirs, ask what matters most, offer something that includes both, split it up, say what you cannot move on, refine it together.", bundle: 'free' },
        { q: "What is a position, and what is a need?", a: "A position is what someone asks for — \"October\". A need is what it protects — time, or not telling the client twice.", bundle: 'free' },
        { q: "What is the aim of a negotiation, according to this pack?", a: "An arrangement both people would defend, not a winner.", bundle: 'free' },
        { q: "Which strategy do people most often skip?", a: "Asking what matters most.", bundle: 'pro' },
        { q: "Why is a midpoint often a bad outcome?", a: "It is built from positions rather than needs, so it gives neither person what they wanted.", bundle: 'pro' },
        { q: "When are these strategies the wrong tool?", a: "When halfway is not acceptable — a safety issue, a promise already made, something you think is wrong.", bundle: 'pro' },
      ]
    },
    {
      name: "State What You Want",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The opening move, and the one that is most often missing.",
      cards: [
        { q: "Why does a negotiation stall if you never state your preference?", a: "It cannot start until both positions are on the table.", bundle: 'free' },
        { q: "Name two ways to state it.", a: "Any two of: the plain preference, preference plus its weight, what you want to avoid, your opening rather than your bottom line.", bundle: 'free' },
        { q: "What is the mindset line for this strategy?", a: "Say it before you soften it.", bundle: 'free' },
        { q: "What happens to a preference wrapped in three apologies?", a: "It is heard as no preference at all.", bundle: 'pro' },
        { q: "Why say how firm your preference is?", a: "It tells the other person how hard to push back.", bundle: 'pro' },
        { q: "What is wrong with waiting to see what they suggest first?", a: "You are negotiating against yourself before anyone has spoken.", bundle: 'pro' },
      ]
    },
    {
      name: "Show You Understood Theirs",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The move that stops the same argument being repeated louder.",
      cards: [
        { q: "What are the two useful outcomes of saying their position back?", a: "Either you have it confirmed, or you get corrected — both are useful.", bundle: 'free' },
        { q: "Name two ways to do it.", a: "Any two of: say the position back, say the reason behind it, name what they are protecting, check rather than claim.", bundle: 'free' },
        { q: "Why does this lower the temperature?", a: "Someone who has been understood accurately stops repeating themselves.", bundle: 'free' },
        { q: "What is the deepest version of this move?", a: "Naming what they are protecting — \"you don't want to be the one explaining a delay\".", bundle: 'pro' },
        { q: "What is the most useful sentence the other person can say?", a: "A correction of your summary of their view.", bundle: 'pro' },
        { q: "What should you do if you catch yourself composing an answer instead of listening?", a: "Say so, and ask them to say it again.", bundle: 'pro' },
      ]
    },
    {
      name: "Ask What Matters Most",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The strategy that turns splitting the difference into finding a solution.",
      cards: [
        { q: "What does this strategy find?", a: "The need underneath the position — the part they actually care about.", bundle: 'free' },
        { q: "What is the most useful question in the pack?", a: "\"If you could only have one of those, which would it be?\"", bundle: 'free' },
        { q: "Name two ways to ask.", a: "Any two of: ask them to rank, ask what is underneath, say yours first, ask what they could live without.", bundle: 'free' },
        { q: "Why does this often reveal there is no conflict at all?", a: "The two people frequently want different things and can both have them.", bundle: 'pro' },
        { q: "Why does this strategy feel slow but work fast?", a: "It replaces a contest between positions with a solvable problem.", bundle: 'pro' },
        { q: "What is an offer made before this?", a: "A guess.", bundle: 'pro' },
      ]
    },
    {
      name: "Offer Something That Includes Both",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The strategy that builds an arrangement people defend.",
      cards: [
        { q: "Why does a genuine combination hold better than a midpoint?", a: "Both people got something they wanted, so both defend it.", bundle: 'free' },
        { q: "Name two ways to build one.", a: "Any two of: each takes their priority, sequence it, take a piece from each, try one and keep the other in reserve.", bundle: 'free' },
        { q: "What must come first for this to work well?", a: "Knowing what matters most to each of you.", bundle: 'free' },
        { q: "What is the classic form of this move?", a: "Each person takes their own priority — \"you get the date, I get the scope\".", bundle: 'pro' },
        { q: "What do you do when you cannot both be right?", a: "Try one way with an agreed point to switch if it is not working.", bundle: 'pro' },
        { q: "Why do midpoint compromises quietly fall apart?", a: "Neither person got what they wanted, so neither has a reason to protect it.", bundle: 'pro' },
      ]
    },
    {
      name: "Split It Up",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The fastest way out of a stuck conversation.",
      cards: [
        { q: "What does splitting reveal?", a: "That you agree on part of it, so the real disagreement is smaller than it looked.", bundle: 'free' },
        { q: "Name two ways to split.", a: "Any two of: name the parts out loud, settle the agreed parts first, park the hardest one, separate the decision from the process.", bundle: 'free' },
        { q: "What is often the most useful observation in a stuck discussion?", a: "That you are arguing about several things at once.", bundle: 'free' },
        { q: "What is the common hidden split?", a: "Between what to do and who gets to decide.", bundle: 'pro' },
        { q: "Why settle the agreed parts first?", a: "The momentum of having agreed on something makes the rest go better.", bundle: 'pro' },
        { q: "What is the difference between parking a question and avoiding it?", a: "Parking is deliberate and named, with the intention of returning to it.", bundle: 'pro' },
      ]
    },
    {
      name: "Say What You Cannot Move On",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The strategy that keeps compromise from becoming slow concession.",
      cards: [
        { q: "Why does a negotiation need limits?", a: "Without them it is a slow concession, and the conceding person ends up resentful.", bundle: 'free' },
        { q: "What two things make a limit land rather than sound like a threat?", a: "Keeping it small, and pairing it with what you can move on.", bundle: 'free' },
        { q: "Name two ways to name a limit.", a: "Any two of: the limit plus everything else, say why it is a limit, name it early, check whether it really is one.", bundle: 'free' },
        { q: "What happens if everything is a limit?", a: "Nothing is.", bundle: 'pro' },
        { q: "Why name a limit early?", a: "Before you have traded away the things you did not mind about.", bundle: 'pro' },
        { q: "What do you say when you realise something you called a limit is not one?", a: "Say so — it costs nothing and makes the real limits believable.", bundle: 'pro' },
      ]
    },
    {
      name: "Refine It Together",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The strategy that turns a tolerated arrangement into an agreed one.",
      cards: [
        { q: "How should you treat the first solution?", a: "As a draft.", bundle: 'free' },
        { q: "What is the most dangerous moment in a negotiation?", a: "When somebody says \"that'll do\".", bundle: 'free' },
        { q: "Name two ways to refine.", a: "Any two of: ask what is still wrong, say your own reservation, check it is not just politeness, agree how you will revisit it.", bundle: 'free' },
        { q: "Why must the adjusting be mutual?", a: "If only one person's discomfort is addressed, you have stopped negotiating without noticing.", bundle: 'pro' },
        { q: "What is the risk in an agreement nobody is happy with?", a: "It gets quietly deprioritised, missed, or complained about later.", bundle: 'pro' },
        { q: "How do you check a fast yes?", a: "Ask once more, plainly — \"you said yes quickly, is it genuinely alright?\"", bundle: 'pro' },
      ]
    },
  ],
  brokenrecord: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The shape of the technique: hold one sentence calmly, and know where the judgement lies.",
      cards: [
        { q: "What are the eight parts of this technique?", a: "Decide your line, acknowledge and repeat, keep the same words, don't give reasons, don't follow the new argument, keep the tone flat, offer a workable compromise, know when to stop.", bundle: 'free' },
        { q: "What is the technique for?", a: "Holding a position under pressure without arguing, and keeping the conversation calm.", bundle: 'free' },
        { q: "Which part decides whether it works?", a: "Not giving reasons.", bundle: 'free' },
        { q: "Where does the judgement lie?", a: "At the two ends — choosing the line beforehand, and choosing when to stop.", bundle: 'pro' },
        { q: "What are the two opposite failures?", a: "Softening (longer line, reasons, wobbly tone) and walling (repeating when a compromise exists or when you are in the wrong).", bundle: 'pro' },
        { q: "What is the technique NOT for?", a: "Avoiding a fair claim on you — a promise, a mistake, or something you are responsible for.", bundle: 'pro' },
      ]
    },
    {
      name: "Decide Your Line",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The preparation, which decides how the rest goes.",
      cards: [
        { q: "What three properties does a good line have?", a: "Short, about you rather than them, and containing no reason.", bundle: 'free' },
        { q: "Why choose the line in advance?", a: "A line chosen under pressure is too long, too apologetic or too specific.", bundle: 'free' },
        { q: "What is the test for a line?", a: "Whether you could still say it calmly on the fifth repetition.", bundle: 'free' },
        { q: "Why must the reason stay out of the line?", a: "A reason inside the line makes the line arguable.", bundle: 'pro' },
        { q: "Turn \"I can't afford it because of the car\" into a line.", a: "\"I'm not lending money at the moment.\"", bundle: 'pro' },
        { q: "How long should preparation take?", a: "About ten seconds — and it beats any amount of quick thinking mid-pressure.", bundle: 'pro' },
      ]
    },
    {
      name: "Acknowledge, Then Repeat",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The core move.",
      cards: [
        { q: "What does the acknowledgement prevent?", a: "The other person repeating themselves louder because they think you have not understood.", bundle: 'free' },
        { q: "How long should the acknowledgement be?", a: "One clause. Shorter than the line itself.", bundle: 'free' },
        { q: "Name two ways to acknowledge briefly.", a: "Any two of: name their position, concede what is true, acknowledge the feeling, acknowledge and move straight on.", bundle: 'free' },
        { q: "What happens if the acknowledgement gets long?", a: "It reads as softening, which reads as an opening, and the pushing increases.", bundle: 'pro' },
        { q: "How do you concede a fair point without conceding the position?", a: "Agree with the fact and repeat the line — \"that's true, I did. I'm not doing it this time.\"", bundle: 'pro' },
        { q: "What is the sign you have started negotiating?", a: "The acknowledgement has become longer than the line.", bundle: 'pro' },
      ]
    },
    {
      name: "Keep the Same Words",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Why the technique has its name.",
      cards: [
        { q: "Why repeat the exact wording?", a: "Every rephrasing is a new sentence, and a new sentence can be argued with.", bundle: 'free' },
        { q: "What does sameness signal?", a: "That this is settled rather than under discussion.", bundle: 'free' },
        { q: "Why do most people rephrase instead?", a: "Repeating feels obstinate, so they try to say it better — which keeps the conversation alive.", bundle: 'free' },
        { q: "Name two things sameness does beyond removing new material.", a: "Any two of: signals settledness, keeps you calm because you are not composing, ends things faster.", bundle: 'pro' },
        { q: "How is rephrasing heard?", a: "As saying it less firmly.", bundle: 'pro' },
        { q: "What do you say when they point out you keep repeating yourself?", a: "\"I do, because it's still the answer.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Don't Give Reasons",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The part that decides whether the technique works.",
      cards: [
        { q: "What happens to every reason you give?", a: "It becomes something to solve, disprove or work around.", bundle: 'free' },
        { q: "What does offering a reason change about the conversation?", a: "It moves it from what you decided to whether your reason is good enough.", bundle: 'free' },
        { q: "Name two ways to hold without reasons.", a: "Any two of: state it as a preference, decline to explain openly, say it is not about anything, answer the reason-hunting question with the line.", bundle: 'free' },
        { q: "What do you say if you have already given a reason and they are solving it?", a: "\"Even if that weren't the case, I'd still say no.\"", bundle: 'pro' },
        { q: "What is the mindset line for this move?", a: "A reason is a door, and you are choosing not to open it.", bundle: 'pro' },
        { q: "What do you say when they demand a proper explanation?", a: "\"I'm not going to explain it. The answer's still no.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Don't Follow the New Argument",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The move for when they change tack.",
      cards: [
        { q: "What is a \"new argument\" usually?", a: "The same request wearing a different coat.", bundle: 'free' },
        { q: "What happens if you answer it?", a: "You move onto ground they chose, and can be kept there indefinitely.", bundle: 'free' },
        { q: "Name two kinds of switch.", a: "Any two of: to fairness, to the past, to your character, to consequences.", bundle: 'free' },
        { q: "What do you say to \"you did it for him\"?", a: "\"I did. I'm not doing this one.\"", bundle: 'pro' },
        { q: "What do you say to \"you've got so mean lately\"?", a: "\"Maybe. The answer's still no.\"", bundle: 'pro' },
        { q: "How do you handle a completely separate grievance raised mid-conversation?", a: "Park it — \"that's a separate thing and we can talk about it another day.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Keep the Tone Flat",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The delivery, which matters more than the words.",
      cards: [
        { q: "What does tone tell the other person?", a: "Whether you are being worn down or standing firm.", bundle: 'free' },
        { q: "Name two things that leak tone.", a: "Any two of: \"as I already said\", sarcasm, volume and speed, over-apologising.", bundle: 'free' },
        { q: "What does a sigh before the line communicate?", a: "That you are close to breaking.", bundle: 'free' },
        { q: "Why is sarcasm particularly damaging here?", a: "It turns a boundary into a fight, and then the subject is your tone rather than your decision.", bundle: 'pro' },
        { q: "Why does over-apologising invite more pressure?", a: "Distress looks like movement.", bundle: 'pro' },
        { q: "What should you do when they raise their voice?", a: "Go slower and quieter, not louder. \"I'm not going to shout about it.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Offer a Workable Compromise",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "What stops the technique becoming a wall.",
      cards: [
        { q: "What is the test for whether to compromise?", a: "Whether your self-respect is involved — would saying yes to a modified version leave you feeling used?", bundle: 'free' },
        { q: "When should the compromise be offered?", a: "Once, and only after the line has held.", bundle: 'free' },
        { q: "Name two kinds of compromise.", a: "Any two of: a smaller version, a different form of help, a different time, naming what you would say yes to.", bundle: 'free' },
        { q: "What happens if you offer a compromise early?", a: "It is heard as the first concession in a negotiation.", bundle: 'pro' },
        { q: "What do you say if they treat the compromise as an opening bid?", a: "\"That's not a starting point, it's the whole offer.\"", bundle: 'pro' },
        { q: "Why does refusing to compromise sometimes deserve the other person's frustration?", a: "Because holding a line when a reasonable alternative exists is stubbornness rather than assertiveness.", bundle: 'pro' },
      ]
    },
    {
      name: "Know When to Stop",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The endpoint, which is part of the technique.",
      cards: [
        { q: "What two things signal the end?", a: "You have repeated the line three or four times with no change, or they have moved from persuading to pressuring.", bundle: 'free' },
        { q: "Name two ways to end it.", a: "Any two of: name the loop, say the answer is final, change the subject deliberately, leave the conversation.", bundle: 'free' },
        { q: "Why does the technique need an endpoint?", a: "Indefinite repetition exhausts both people and becomes its own kind of aggression.", bundle: 'free' },
        { q: "What do you do when it comes back a week later?", a: "Shorten each round rather than restarting — eventually talk about the pattern rather than the request.", bundle: 'pro' },
        { q: "What is the difference between new information and a new argument?", a: "You hold against pressure and update on facts. Refusing real information is stubbornness.", bundle: 'pro' },
        { q: "How do you change your mind without it looking like a collapse?", a: "Say why clearly — \"I've changed my mind, and it's because of the timing, not because you pushed.\"", bundle: 'pro' },
      ]
    },
  ],
  respondingtopassiveaggression: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The shape of the pack: six responses, split between staying on the surface and going underneath.",
      cards: [
        { q: "What are the six strategies in this pack?", a: "Answer it straight, ask what they mean, name the feeling, say how it lands, hold your point, let it go.", bundle: 'free' },
        { q: "Which three stay on the surface?", a: "Answer it straight, hold your point, let it go.", bundle: 'free' },
        { q: "Which three go underneath?", a: "Ask what they mean, name the feeling, say how it lands.", bundle: 'free' },
        { q: "What does a passive-aggressive remark depend on?", a: "Deniability — it is built to land without being answerable.", bundle: 'pro' },
        { q: "What should decide which strategy you use?", a: "What you want to happen next, not how annoying the remark was.", bundle: 'pro' },
        { q: "What is the difference between one remark and a pattern?", a: "A pattern gets one proper conversation, not four small ones.", bundle: 'pro' },
      ]
    },
    {
      name: "Answer It Straight",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The least costly response available.",
      cards: [
        { q: "What does this strategy do?", a: "Responds to the surface as though the remark were sincere, so the barb has nothing to attach to.", bundle: 'free' },
        { q: "Name two ways to do it.", a: "Any two of: accept the surface compliment, agree with the literal content, answer the buried question, take the suggestion seriously.", bundle: 'free' },
        { q: "Why can nobody object to this response?", a: "You answered what they actually said.", bundle: 'free' },
        { q: "Is this pretending not to notice?", a: "No — it is choosing not to make it a thing, which is a different position.", bundle: 'pro' },
        { q: "Why does it often end the pattern faster than naming it?", a: "Because the remark simply did not work.", bundle: 'pro' },
        { q: "What do you do when the remark contains something true?", a: "Concede that part plainly — it costs nothing and takes the argument away.", bundle: 'pro' },
      ]
    },
    {
      name: "Ask What They Mean",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The strategy that removes deniability.",
      cards: [
        { q: "Why does asking work?", a: "They either say what they meant, which is the conversation you needed, or they back off, which ends it.", bundle: 'free' },
        { q: "What decides whether this lands?", a: "The delivery — curious is an invitation, edged is a challenge.", bundle: 'free' },
        { q: "Name two ways to ask.", a: "Any two of: the plain question, admit you cannot read it, ask for the direct version, ask and then be quiet.", bundle: 'free' },
        { q: "What should you do if you cannot ask it neutrally?", a: "Use a different strategy.", bundle: 'pro' },
        { q: "Why is \"I can't tell how you meant that\" useful?", a: "It takes any accusation out of the question.", bundle: 'pro' },
        { q: "What does most of the work after you ask?", a: "The silence. Ask once, then wait.", bundle: 'pro' },
      ]
    },
    {
      name: "Name the Feeling",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The strategy that gives the grievance a direct route out.",
      cards: [
        { q: "What is usually underneath passive aggression?", a: "A real grievance that could not find a direct route out.", bundle: 'free' },
        { q: "What line must you hold with this strategy?", a: "Recognising a feeling is not accepting the accusation inside it.", bundle: 'free' },
        { q: "Name two ways to name it.", a: "Any two of: name the feeling plainly, name it and ask, name what it is probably about, acknowledge and redirect.", bundle: 'free' },
        { q: "How do you acknowledge without appeasing?", a: "\"I can see you're annoyed. I don't think it's fair, but I can see it.\"", bundle: 'pro' },
        { q: "Why does naming the feeling often stop the sideways expression?", a: "Someone whose frustration has been acknowledged stops needing to express it indirectly.", bundle: 'pro' },
        { q: "What are you acknowledging, and what are you not?", a: "The feeling, not the delivery.", bundle: 'pro' },
      ]
    },
    {
      name: "Say How It Lands",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The one response they cannot deny.",
      cards: [
        { q: "Why can they not argue with this?", a: "They can argue about what they meant, not about how it landed on you.", bundle: 'free' },
        { q: "What is the difference between a report and a diagnosis?", a: "\"That lands as a dig\" is a report; \"you're being passive-aggressive\" is a diagnosis, and diagnoses get argued with.", bundle: 'free' },
        { q: "Name two ways to say it.", a: "Any two of: name the effect, say what you would prefer, keep it to this instance, own that you might be misreading.", bundle: 'free' },
        { q: "Why pair the effect with a preference?", a: "It gives them a route out rather than just a complaint.", bundle: 'pro' },
        { q: "How do you raise a pattern rather than an instance?", a: "Privately, calmly, with two or three specific examples and what you would prefer instead.", bundle: 'pro' },
        { q: "When is this strategy riskiest?", a: "With someone who has power over you — it can be heard as a complaint about a superior.", bundle: 'pro' },
      ]
    },
    {
      name: "Hold Your Point",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The strategy for when a remark is a way of not answering the question.",
      cards: [
        { q: "What is this strategy protecting?", a: "The decision that still needs making.", bundle: 'free' },
        { q: "What is the pattern?", a: "Short acknowledgement, then the point, in the same words each time.", bundle: 'free' },
        { q: "Name two ways to hold it.", a: "Any two of: acknowledge then the point, concede the true part and keep the point, park the other thing openly, repeat it in the same words.", bundle: 'free' },
        { q: "Why does following the remark cost you?", a: "Every sentence spent on the remark is a sentence not spent on the decision.", bundle: 'pro' },
        { q: "What do you say when you catch yourself defending yourself?", a: "Name it and return — \"I'm defending myself and that's not the point.\"", bundle: 'pro' },
        { q: "What is the boundary against the Broken Record pack?", a: "There the whole conversation is holding a line. Here it is one of six responses, kept short.", bundle: 'pro' },
      ]
    },
    {
      name: "Let It Go",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The strategy of deciding not to respond.",
      cards: [
        { q: "What makes letting go a strategy rather than avoidance?", a: "That you decided, rather than not daring.", bundle: 'free' },
        { q: "What is the test?", a: "Whether you will still be thinking about it in an hour.", bundle: 'free' },
        { q: "Name two ways to let it go.", a: "Any two of: say nothing and carry on, move to something else, a neutral noise and onwards, decide to raise it later.", bundle: 'free' },
        { q: "What does treating every remark as something to handle cost you?", a: "It turns other people's moods into your workload.", bundle: 'pro' },
        { q: "What do you do if you let something go and it keeps bothering you?", a: "Go back to it. Later is fine.", bundle: 'pro' },
        { q: "What will people usually assume if you do not react?", a: "That you noticed and were not bothered.", bundle: 'pro' },
      ]
    },
  ],
  makingrequests: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The shape of the pack: what makes a request work, and the two ways it fails.",
      cards: [
        { q: "What are the seven strategies in this pack?", a: "Ask Instead of Hinting, Make It Specific, Give One Short Reason, Leave Room to Refuse, Ask for Help, Follow Up Once, Take a No Well.", bundle: 'free' },
        { q: "What are the two jobs of a good request?", a: "It has to be answerable, and it has to be refusable.", bundle: 'free' },
        { q: "What are the two ways a request fails?", a: "It cannot be answered — vague, hinted, aimed at the wrong person. Or it cannot be refused, in which case it is a demand with a polite tone.", bundle: 'free' },
        { q: "What is the asymmetry between asking and declining?", a: "When you ask, one short reason helps. When you decline, reasons invite argument.", bundle: 'pro' },
        { q: "Where does this pack end and Broken Record begin?", a: "Here the answer is theirs to give. Broken Record is for holding a line under pressure.", bundle: 'pro' },
      ]
    },
    {
      name: "Ask Instead of Hinting",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Turning the hint into a question.",
      cards: [
        { q: "What is wrong with a hint?", a: "It asks the other person to work out what you want and then decide — and most people fail the first part.", bundle: 'free' },
        { q: "Why is hinting so tempting?", a: "A hint cannot be refused. It also cannot be granted.", bundle: 'free' },
        { q: "What are the three usual hints?", a: "The observation, the sigh about yourself, and the question that is really a request.", bundle: 'free' },
        { q: "What does a complaint become when you turn it into a request?", a: "\"The kitchen's a state\" becomes \"could you do your washing up the same evening?\"", bundle: 'pro' },
        { q: "Why does hinting produce resentment?", a: "You experience it as a refusal. They never heard a question.", bundle: 'pro' },
      ]
    },
    {
      name: "Make It Specific",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Size, timing, and what it involves.",
      cards: [
        { q: "What three things should be specific?", a: "The size, the when, and what it actually involves.", bundle: 'free' },
        { q: "Why is a vague request hard to say yes to?", a: "They have to imagine the worst version and answer that one.", bundle: 'free' },
        { q: "What does being precise actually do?", a: "It makes yes possible. It is not being demanding.", bundle: 'free' },
        { q: "Where does resentment about favours usually come from?", a: "A request that turned out to be several times the size the other person agreed to.", bundle: 'pro' },
        { q: "What if you do not know the size yet?", a: "Say so, and come back when you do.", bundle: 'pro' },
      ]
    },
    {
      name: "Give One Short Reason",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "One sentence of why, and no more.",
      cards: [
        { q: "How many reasons?", a: "One. Two sounds like a case, three sounds like you are talking yourself into it.", bundle: 'free' },
        { q: "What does a reason do for a request?", a: "It gives it a shape, so they can tell how much it matters. Without one, most people guess low.", bundle: 'free' },
        { q: "What are the three kinds of reason?", a: "The practical one, the honest one about you, and the one that says why this person.", bundle: 'free' },
        { q: "Which reason should never be used?", a: "The guilt reason. \"After everything I've done for you\" is a bill, not a reason.", bundle: 'pro' },
        { q: "Why do reasons help here but hurt when saying no?", a: "Asking, a reason explains the request. Declining, it hands them something to solve.", bundle: 'pro' },
      ]
    },
    {
      name: "Leave Room to Refuse",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Making the exit visible.",
      cards: [
        { q: "What is the move?", a: "Say the exit out loud — \"say if it doesn't work.\"", bundle: 'free' },
        { q: "Why does a request need a refusable no?", a: "Otherwise their yes tells you nothing, and you find out it was reluctant weeks later.", bundle: 'free' },
        { q: "What are the three ways to leave the door open?", a: "Name the exit, say what you will do if they refuse, and then be quiet.", bundle: 'free' },
        { q: "Why does leaving room make yes MORE likely?", a: "Pressure produces compliance and quiet irritation. A real choice produces a real yes.", bundle: 'pro' },
        { q: "Where does the pressure people feel usually come from?", a: "The silence after the ask, filled with more reasons.", bundle: 'pro' },
      ]
    },
    {
      name: "Ask for Help",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The harder ask, and how to make it answerable.",
      cards: [
        { q: "What two things make asking for help hard, and what fixes them?", a: "Asking a room asks nobody, so name a person. \"Help with everything\" is unanswerable, so name the piece.", bundle: 'free' },
        { q: "What are the three ways in?", a: "Ask about a piece, admit you do not know, or say you are struggling.", bundle: 'free' },
        { q: "Why ask early?", a: "Asking early is a small ask. Asking late is a rescue.", bundle: 'free' },
        { q: "What is wrong with struggling quietly until someone notices?", a: "Nobody is watching that closely, and it costs far more when it fails.", bundle: 'pro' },
        { q: "How do most people experience being asked for help?", a: "As a compliment. Being the person someone turns to is how people become close.", bundle: 'pro' },
      ]
    },
    {
      name: "Follow Up Once",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "What to do with silence.",
      cards: [
        { q: "How many follow-ups?", a: "One. Then silence counts as a no.", bundle: 'free' },
        { q: "What is an unanswered request usually?", a: "Not a refusal — a message read in a corridor and forgotten.", bundle: 'free' },
        { q: "What are the three ways to bring it back?", a: "Assume it was missed, ask for a yes or no rather than the thing, or give it a real deadline.", bundle: 'free' },
        { q: "What changes with the second follow-up?", a: "It stops being about Thursday and starts being about whether they are ignoring you.", bundle: 'pro' },
        { q: "What is often more useful than asking for the favour again?", a: "Asking for a decision either way, so you can plan.", bundle: 'pro' },
      ]
    },
    {
      name: "Take a No Well",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Accepting the answer you asked for.",
      cards: [
        { q: "What are the three parts?", a: "Say it is fine and mean it, do not ask for the reason, do not renegotiate.", bundle: 'free' },
        { q: "Why does it matter how you take a no?", a: "It decides what asking costs next time — for both of you.", bundle: 'free' },
        { q: "What happens if a no is expensive to give you?", a: "You get avoidance, or yeses people resent.", bundle: 'free' },
        { q: "Why is \"what about Sunday?\" a mistake?", a: "It is a second ask, and it makes the first no feel unheard.", bundle: 'pro' },
        { q: "What does accepting a no cleanly protect?", a: "The next request.", bundle: 'pro' },
      ]
    },
  ],
  sayingno: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The shape of the pack: three short ways to decline, two that make it a fuller answer, and one that comes before all of them.",
      cards: [
        { q: "What are the six strategies in this pack?", a: "Say no simply, soften the delivery, give a short reason, show you understand first, offer what you can do, ask for time first.", bundle: 'free' },
        { q: "What makes a good no, in one phrase?", a: "The other person feels heard even though they did not get what they asked for.", bundle: 'free' },
        { q: "What is the failure that runs through all of them?", a: "The unclear no — the hedge, the maybe, the vague \"I'll see\".", bundle: 'free' },
        { q: "What is the order in the full version?", a: "Understanding, then the no, then the reason, then the alternative.", bundle: 'pro' },
        { q: "Where does this pack stop and Broken Record begin?", a: "Here you say the no. There you hold it when it is not accepted.", bundle: 'pro' },
        { q: "What should you never apologise for?", a: "The boundary itself. \"Sorry\" as a softener is fine; apologising for having a limit is not.", bundle: 'pro' },
      ]
    },
    {
      name: "Say No Simply",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The plainest version, and the hardest.",
      cards: [
        { q: "Why does a short no work better than a long one?", a: "It is unambiguous, and ambiguity is what makes people ask again.", bundle: 'free' },
        { q: "Name two ways to keep it simple.", a: "Any two of: the plain no, no plus thanks, no without an apology, no and stop talking.", bundle: 'free' },
        { q: "What is the hardest part of this strategy?", a: "Stopping after the no.", bundle: 'free' },
        { q: "Where do people talk themselves into a yes?", a: "In the sentence after the no.", bundle: 'pro' },
        { q: "What does a long hedged refusal read as?", a: "A maybe — so the request comes back.", bundle: 'pro' },
        { q: "What do you say when you have already started explaining?", a: "\"The short answer is no.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Soften the Delivery",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Warmth without vagueness.",
      cards: [
        { q: "What is the line this strategy must hold?", a: "Soften the delivery, never the answer.", bundle: 'free' },
        { q: "Name two ways to soften.", a: "Any two of: a softening word in front, say you wish you could, thank them for asking, warm tone with unchanged words.", bundle: 'free' },
        { q: "Why does tone matter so much here?", a: "Most people hear tone before content.", bundle: 'free' },
        { q: "What is wrong with \"I'm not sure I can\"?", a: "It sounds gentle and is unclear, which invites another ask.", bundle: 'pro' },
        { q: "When should you say you wish you could?", a: "Only when it is true.", bundle: 'pro' },
        { q: "What do you say if you have softened it into a maybe?", a: "\"Sorry, I've been vague. It's a no.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Give a Short Reason",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The courtesy that removes the reading that you are judging them.",
      cards: [
        { q: "What does a reason remove?", a: "The reading that the no is a judgement of the request or the person.", bundle: 'free' },
        { q: "How long should it be?", a: "One sentence.", bundle: 'free' },
        { q: "Name two kinds of short reason.", a: "Any two of: a prior commitment, capacity, a preference owned as one, no reason said openly.", bundle: 'free' },
        { q: "What happens if the reason is detailed?", a: "They start solving it, and you end up negotiating about your reason.", bundle: 'pro' },
        { q: "What do you say when they offer a workaround for your reason?", a: "That the reason was not the point — \"even then, I'd say no\".", bundle: 'pro' },
        { q: "Is a reason required?", a: "No. A reason is optional; clarity is not.", bundle: 'pro' },
      ]
    },
    {
      name: "Show You Understand First",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The step that makes someone feel heard even when refused.",
      cards: [
        { q: "What is the sting in being refused, usually?", a: "Not the refusal — the sense that the request was not taken seriously.", bundle: 'free' },
        { q: "How long should the acknowledgement be?", a: "One sentence.", bundle: 'free' },
        { q: "Name two ways to show it.", a: "Any two of: name their situation, say the request is reasonable, name what it costs them, acknowledge and move straight on.", bundle: 'free' },
        { q: "Why is a long sympathetic preamble worse than none?", a: "They can hear the no coming and have to sit through the wind-up.", bundle: 'pro' },
        { q: "What is the strongest version of this step?", a: "Naming what your no costs them.", bundle: 'pro' },
        { q: "Where does it go in the full version?", a: "First, before the no.", bundle: 'pro' },
      ]
    },
    {
      name: "Offer What You Can Do",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The step that keeps you helpful while the answer stays no.",
      cards: [
        { q: "What are the two conditions on an alternative?", a: "It must be something you will actually do, and it must come after the no.", bundle: 'free' },
        { q: "Name two kinds of alternative.", a: "Any two of: a smaller piece, a different form of help, a different time, point them somewhere better.", bundle: 'free' },
        { q: "What happens if you offer it before the no?", a: "It sounds like an opening position and they negotiate towards the original request.", bundle: 'free' },
        { q: "Why is an offer you will not keep worse than no offer?", a: "Because they build on it.", bundle: 'pro' },
        { q: "What do you say if they treat the alternative as a starting point?", a: "\"That's not a starting point. It's the whole offer.\"", bundle: 'pro' },
        { q: "When is pointing them elsewhere the right alternative?", a: "When someone else genuinely is better placed to help.", bundle: 'pro' },
      ]
    },
    {
      name: "Ask for Time First",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The move that prevents most regretted yeses.",
      cards: [
        { q: "When are most regretted yeses said?", a: "On the spot, under mild social pressure, before thinking.", bundle: 'free' },
        { q: "What must you always include?", a: "When you will answer.", bundle: 'free' },
        { q: "Name two ways to ask for time.", a: "Any two of: name when you will answer, say why you are not answering now, ask what their deadline is, signal which way you are leaning.", bundle: 'free' },
        { q: "What turns this strategy into avoidance?", a: "Delay without a date — and it costs them the chance to ask someone else.", bundle: 'pro' },
        { q: "Why is a considered no easier to accept?", a: "It has visibly been thought about, so it is harder to argue with.", bundle: 'pro' },
        { q: "What do you say if they press for an answer immediately?", a: "\"If you need it now, the answer's no. If you can wait, I'll think properly.\"", bundle: 'pro' },
      ]
    },
  ],
  emotionlabellingandregulation: [
    {
      name: "Core Idea",
      description: "The concept behind emotion labelling and the full set of moves.",
      cards: [
        { q: "What is the goal of emotion labelling?", a: "Notice what you're feeling, put an honest word on it, and respond in a balanced way rather than a reactive one.", bundle: 'free' },
        { q: "What are the five moves in this pack?", a: "Name the Situation, Label the Emotion, Describe the Signals, Regulate Out Loud, Label Their Emotion.", bundle: 'free' },
        { q: "What order does the full process go in?", a: "Situation, then the emotion word, then the signals, then regulation.", bundle: 'free' },
        { q: "Why does naming a feeling help?", a: "It gives you distance from it — a named feeling is something you're having, not something you are.", bundle: 'free' },
        { q: "What do you do when you can't find the word?", a: "Describe the physical or mental signals instead. The word usually turns up once you have.", bundle: 'pro' },
        { q: "What is the one move that belongs to the listener?", a: "Label Their Emotion — offering someone a word to try on, with room to correct you.", bundle: 'pro' },
        { q: "Does regulating mean not feeling it?", a: "No. It means keeping enough of yourself to choose what you say next.", bundle: 'pro' },
      ]
    },
    {
      name: "Name the Situation",
      description: "The theory behind the opening step.",
      cards: [
        { q: "What is Name the Situation?", a: "Saying plainly what happened — the context, in a sentence or two, before any feeling word.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"When you cancelled on Friday…\" or \"This is the third time it's happened…\"", bundle: 'free' },
        { q: "Why does it come first?", a: "A feeling with no context asks the other person to guess. A plain description gives them somewhere to stand.", bundle: 'free' },
        { q: "What are the three ways to frame it?", a: "The bare facts, the moment it turned, or the pattern.", bundle: 'pro' },
        { q: "What is the failure mode?", a: "Slipping a conclusion in — \"you clearly don't care\" — so the conversation becomes about that instead.", bundle: 'pro' },
      ]
    },
    {
      name: "Label the Emotion",
      description: "The theory behind choosing the word.",
      cards: [
        { q: "What is Label the Emotion?", a: "Choosing the word that actually matches the feeling, rather than the nearest polite one.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"I felt really frustrated because…\" or \"Honestly, I'm more hurt than annoyed.\"", bundle: 'free' },
        { q: "Why reach past words like \"fine\" and \"stressed\"?", a: "They cover everything and explain nothing. Disappointed, embarrassed or left out do far more work.", bundle: 'free' },
        { q: "What are the three levels of precision?", a: "The plain word, the correction (\"more disappointed than angry\"), and the honest blank.", bundle: 'pro' },
        { q: "What usually blocks it?", a: "Deciding whether you're allowed to feel it. That argument takes longer than finding the word.", bundle: 'pro' },
      ]
    },
    {
      name: "Describe the Signals",
      description: "The theory behind saying what the feeling did to you.",
      cards: [
        { q: "What is Describe the Signals?", a: "Saying how your body reacted, where your thoughts went, or what you found yourself doing.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"I noticed my heart racing.\" or \"I went really quiet, which is usually a sign with me.\"", bundle: 'free' },
        { q: "What are the three kinds of signal?", a: "Physical, mental and behavioural.", bundle: 'free' },
        { q: "Why are signals more convincing than a feeling word?", a: "A word can be waved away. Nobody invents a hammering heart or a sleepless three a.m.", bundle: 'pro' },
        { q: "What do you do when the word won't come?", a: "Describe the body first. The word tends to arrive once the signals have been said out loud.", bundle: 'pro' },
      ]
    },
    {
      name: "Regulate Out Loud",
      description: "The theory behind steadying yourself in the open.",
      cards: [
        { q: "What is Regulate Out Loud?", a: "Doing the thing that steadies you, and saying that you're doing it.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"I need a couple of minutes before I answer.\" or \"Let me take a breath.\"", bundle: 'free' },
        { q: "What are the three ways to steady yourself?", a: "Ask for time, slow the body, or shift the view.", bundle: 'free' },
        { q: "Why say it out loud rather than just doing it?", a: "A silent pause looks identical to sulking. One sentence turns it into something everyone can work with.", bundle: 'pro' },
        { q: "What is the failure mode?", a: "Leaving without a word. A named pause keeps the conversation alive; an unnamed one ends it.", bundle: 'pro' },
      ]
    },
    {
      name: "Label Their Emotion",
      description: "The theory behind the listener's move.",
      cards: [
        { q: "What is Label Their Emotion?", a: "Offering the other person a word for what they seem to be feeling, with room to correct you.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"It sounds like you felt disappointed — what do you think triggered that?\"", bundle: 'free' },
        { q: "Why does it help?", a: "Recognising a feeling is far easier than producing one from scratch. You hand them a word to try on.", bundle: 'free' },
        { q: "What happens if you get it wrong?", a: "Usually something useful — \"no, not angry, embarrassed\" is them getting closer to it.", bundle: 'pro' },
        { q: "What turns it from an offer into an imposition?", a: "Certainty. \"You're angry\" gets defended against; \"it sounds like you were — were you?\" gets thought about.", bundle: 'pro' },
      ]
    },
  ],
  conflictemotions: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The shape of the pack: four steps that build one expression, plus the move that makes it a conversation.",
      cards: [
        { q: "What are the five strategies in this pack?", a: "Say what happened, name your feeling, say what you need, make a request, ask what they felt.", bundle: 'free' },
        { q: "What does a feeling point at?", a: "A need — respect, safety, cooperation, trust, privacy, being kept informed.", bundle: 'free' },
        { q: "What is the order in the full expression?", a: "What happened, what you felt, what you need, what you would like, then their side.", bundle: 'free' },
        { q: "Where do most of these go wrong?", a: "Stopping after the feeling, which leaves a problem with no handle on it.", bundle: 'pro' },
        { q: "What is the boundary against Emotion Labelling?", a: "There you name and regulate your own feeling for your own sake. Here you express it to someone, with the need attached.", bundle: 'pro' },
        { q: "Why is the last strategy not optional?", a: "Without it you have delivered a statement, not had a conversation.", bundle: 'pro' },
      ]
    },
    {
      name: "Say What Happened",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The factual foundation.",
      cards: [
        { q: "What is the test for a factual account?", a: "Could a camera have recorded it?", bundle: 'free' },
        { q: "Name two ways to keep it factual.", a: "Any two of: the single event, what you observed, the pattern with instances, cut the adverb.", bundle: 'free' },
        { q: "Which words turn an account into a charge?", a: "\"Always\", \"never\", and any word describing what they are.", bundle: 'free' },
        { q: "Where does the interpretation usually hide?", a: "In a single word — an adverb, an adjective, or a verb describing intent.", bundle: 'pro' },
        { q: "Turn \"you were dismissive\" into an account.", a: "\"You answered before I'd finished the sentence.\"", bundle: 'pro' },
        { q: "Why does an interpretation stop the feeling being heard?", a: "The conversation becomes about whether the interpretation is fair.", bundle: 'pro' },
      ]
    },
    {
      name: "Name Your Feeling",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The information the other person did not have.",
      cards: [
        { q: "Why is naming a feeling useful in a conflict?", a: "Most conflicts run on guesses about each other's state, and the guesses are usually wrong.", bundle: 'free' },
        { q: "What is the difference between \"I felt\" and \"you made me feel\"?", a: "One is something you know; the other is a claim about them, and it will be argued with.", bundle: 'free' },
        { q: "Name two ways to name it.", a: "Any two of: the plain feeling word, the more accurate word, two feelings at once, the feeling under the obvious one.", bundle: 'free' },
        { q: "Why is the second word you reach for often better?", a: "The first is usually bigger than the truth.", bundle: 'pro' },
        { q: "What is worth reaching for under an obvious feeling?", a: "The quieter one underneath — irritation often sits on top of worry or fear.", bundle: 'pro' },
        { q: "Turn \"you made me feel stupid\" into an owned feeling.", a: "\"I felt stupid, standing there.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Say What You Need",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The move that makes a feeling solvable.",
      cards: [
        { q: "What is the difference between a feeling and a need?", a: "A feeling is a report; a need is something that can be met.", bundle: 'free' },
        { q: "Name two kinds of need.", a: "Any two of: safety, respect or consideration, cooperation or reliability, being included or informed.", bundle: 'free' },
        { q: "Which piece do people most often leave out?", a: "The need.", bundle: 'free' },
        { q: "Why do conflicts repeat when the need is missing?", a: "Both people know there was an argument; neither knows what was being asked for.", bundle: 'pro' },
        { q: "What is the difference between \"I need to be kept in the loop\" and \"you shut me out\"?", a: "They point at the same thing and go to completely different places.", bundle: 'pro' },
        { q: "What do you say when you cannot identify the need?", a: "Say that, and work it out out loud — \"I'm still working out why it got to me\".", bundle: 'pro' },
      ]
    },
    {
      name: "Make a Request",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The move that gives them something to do.",
      cards: [
        { q: "What does a feeling and a need still leave missing?", a: "What you would actually like to happen.", bundle: 'free' },
        { q: "How should a request be?", a: "Specific, small, and doable tomorrow.", bundle: 'free' },
        { q: "Name two ways to make one.", a: "Any two of: one concrete action, a request about next time, ask what would work for them, a request rather than a rule.", bundle: 'free' },
        { q: "Why do people apologise and change nothing?", a: "Usually because nobody said what the change was.", bundle: 'pro' },
        { q: "What is the difference between a request and a demand?", a: "A request is something they can say no to.", bundle: 'pro' },
        { q: "Turn \"be more considerate\" into a request.", a: "\"Text me if you're going to be more than half an hour late.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Ask What They Felt",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The move that makes it an exchange.",
      cards: [
        { q: "Why does a conflict conversation need this?", a: "Otherwise only one person's experience is described, and the other waits for their turn instead of listening.", bundle: 'free' },
        { q: "Name two ways to ask.", a: "Any two of: ask for their experience, ask what was going on, ask how your part landed, ask and then be quiet.", bundle: 'free' },
        { q: "What often changes when you ask?", a: "What you thought had happened.", bundle: 'free' },
        { q: "What is the mindset line for this strategy?", a: "A question asked with the answer already prepared is not a question.", bundle: 'pro' },
        { q: "What do you do when their answer changes the facts?", a: "Update the facts, keep the feeling, and say which is which.", bundle: 'pro' },
        { q: "Which version of the question is bravest and most productive?", a: "Asking how you came across.", bundle: 'pro' },
      ]
    },
  ],
  rolebasedhumour: [
    {
      name: "Core Idea",
      description: "The concept behind role-based humour and the full set of roles.",
      cards: [
        { q: "What is role-based humour?", a: "Answering as an exaggerated character instead of as yourself, so an ordinary exchange gets a new angle.", bundle: 'free' },
        { q: "What are the seven roles?", a: "Bossy Leader, Lazy One, Super Generous One, Super Stingy One, Invincible Hero, Mock-Offended One, Rule Breaker.", bundle: 'free' },
        { q: "What is the one rule the whole thing rests on?", a: "It's about playing a role, not making fun of others. The costume goes on you.", bundle: 'free' },
        { q: "What makes a role funny?", a: "Exaggeration. The bigger the gap between the situation and the role's reaction, the better it works.", bundle: 'free' },
        { q: "How long should a bit last?", a: "About three beats. The fourth is usually where it stops being funny.", bundle: 'pro' },
        { q: "What is the most common way it fails?", a: "Half-hearted delivery. The same words committed to are funny; tentative they're just confusing.", bundle: 'pro' },
        { q: "What is the safest role when you're unsure of the room?", a: "The Lazy One — the joke is entirely on you, so it's almost impossible to take badly.", bundle: 'pro' },
      ]
    },
    {
      name: "The Bossy Leader",
      description: "The theory behind the self-appointed commander.",
      cards: [
        { q: "What is The Bossy Leader?", a: "Answering as someone who has appointed themselves in charge of something nobody asked them to run.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"You sit there. Do it my way.\" / \"Nobody move. I have a system.\"", bundle: 'free' },
        { q: "What keeps it playful?", a: "Keeping the orders trivial. In charge of the biscuits is funny; in charge of something they care about is just bossy.", bundle: 'pro' },
        { q: "When should you avoid it?", a: "With someone who often gets talked over anyway — then it lands on something real.", bundle: 'pro' },
      ]
    },
    {
      name: "The Lazy One",
      description: "The theory behind the effort-avoider.",
      cards: [
        { q: "What is The Lazy One?", a: "Answering as someone whose first instinct is to find a way out of any effort at all.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"That sounds like too much work… maybe tomorrow.\"", bundle: 'free' },
        { q: "Why is it the safest role in the pack?", a: "The joke lands entirely on you. Nobody is offended by someone who finds standing up ambitious.", bundle: 'pro' },
        { q: "What makes it funnier?", a: "The smaller the actual task. Treating a walk to the kitchen as an expedition is the whole bit.", bundle: 'pro' },
      ]
    },
    {
      name: "The Super Generous One",
      description: "The theory behind absurd generosity.",
      cards: [
        { q: "What is The Super Generous One?", a: "Offering wildly more than the situation could possibly require.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"Oh, you need a pen? Take my house, my car, and my savings too.\"", bundle: 'free' },
        { q: "Where does the joke actually live?", a: "In the list. One absurd offer is a line; three in ascending order is a bit.", bundle: 'pro' },
        { q: "When is it the right choice?", a: "When the thing they mentioned might actually matter to them — generosity can't offend.", bundle: 'pro' },
      ]
    },
    {
      name: "The Super Stingy One",
      description: "The theory behind guarding the worthless.",
      cards: [
        { q: "What is The Super Stingy One?", a: "Treating something completely worthless as a treasure you couldn't possibly part with.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"You want to borrow my pen? Sorry, it's my family treasure.\"", bundle: 'free' },
        { q: "What has to be true about the object?", a: "It has to be obviously worthless. Guarding something they need isn't a bit, it's a refusal.", bundle: 'pro' },
        { q: "What are the three ways to play it?", a: "Give the object a history, refuse with great regret, or charge for it.", bundle: 'pro' },
      ]
    },
    {
      name: "The Invincible Hero",
      description: "The theory behind shrinking the problem to nothing.",
      cards: [
        { q: "What is The Invincible Hero?", a: "Answering as someone for whom nothing is difficult, at an obviously impossible scale.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"I can lift the whole classroom with one hand.\"", bundle: 'free' },
        { q: "How impossible does the claim need to be?", a: "Unmistakably. \"I'm quite good at running\" is a boast; \"I ran to Denmark by accident\" is a bit.", bundle: 'pro' },
        { q: "Why is it safer than mock offence?", a: "Shrinking a problem can't be misread as a comment on how they feel. Inflating one can.", bundle: 'pro' },
      ]
    },
    {
      name: "The Mock-Offended One",
      description: "The theory behind theatrical injury, the role sometimes called the overly sensitive person.",
      cards: [
        { q: "What is The Mock-Offended One?", a: "Acting as though something completely trivial has wounded you deeply, held one beat too long.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"Why would you say that? It hurts my feelings so much!\"", bundle: 'free' },
        { q: "When must you not use it?", a: "Right after they've said something sincere — then it reads as mimicking them, whatever you meant.", bundle: 'pro' },
        { q: "What has to be true about the target of the offence?", a: "It has to be visibly nothing. The joke is the disproportion, not the sensitivity.", bundle: 'pro' },
      ]
    },
    {
      name: "The Rule Breaker",
      description: "The theory behind the confident loophole.",
      cards: [
        { q: "What is The Rule Breaker?", a: "Answering as someone whose reflex is to find the loophole, the workaround or the exit.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"Homework? Nah, I'll sell it on eBay instead.\"", bundle: 'free' },
        { q: "What is the actual joke?", a: "The confidence, not the plan. A workaround that might work stops being funny and becomes a suggestion.", bundle: 'pro' },
        { q: "When does it stop being playful?", a: "When the rule actually matters. Then it sounds like you mean it.", bundle: 'pro' },
      ]
    },
  ],
  masculine1: [
    {
      name: "Core Idea",
      guideFront: "",
      guideBack: "",
      description: "The three elements of the Blueprint that form the base of Masculine leadership.",
      cards: [
        { q: "What are the three elements of The Masculine Blueprint?", a: "1. Respond vs. React, 2. Provide Structure, 3. Create Safety.", bundle: 'free' },
        { q: "What is the difference between old and new masculinity?", a: "The old was about control and dominance; the new is about clarity and leadership.", bundle: 'free' },
        { q: "What happens when a man abdicates the frame?", a: "The woman is forced into her Masculine energy to create the structure she needs, which kills attraction.", bundle: 'free' },
        { q: "What is an \"Oracle\" in this context?", a: "The woman's capacity to reflect back where the man has stopped being present, true, or loving.", bundle: 'pro' },
        { q: "What is the rule of \"facts\" during emotional intensity?", a: "Feelings first, facts later. Never try to \"fix the facts\" while she is in affect.", bundle: 'pro' },
        { q: "What is the root cause of all non-Masculine behaviors?", a: "A perceived sense of threat, which creates an unpleasant energy of anxiety in the body.", bundle: 'pro' },
        { q: "What are the three sources of safety a man must provide?", a: "Physical safety (as a Protector), financial safety (as a Provider), and emotional safety.", bundle: 'pro' },
        { q: "What does Polarity require in an intimate relationship?", a: "One partner in the Masculine pole and one in the Feminine pole, creating the sexy dance of opposites.", bundle: 'pro' },
      ]
    },
    {
      name: "Hear the Pain, Not the Blame",
      description: "",
      cards: [
        { q: "What is the core move of \"Hear the Pain, Not the Blame\"?", a: "Ignoring the toxic surface of her complaint to focus on her underlying vulnerability and hurt.", bundle: 'free' },
        { q: "Why does this strategy work?", a: "It prevents you from getting defensive and allows your natural care to kick in instead.", bundle: 'free' },
        { q: "What is the \"toxic surface\" of her complaint?", a: "Accusations, sarcasm, shaming, or blaming.", bundle: 'free' },
        { q: "What does getting defensive show her?", a: "That you are reacting out of your own anxiety and cannot handle her emotional experience.", bundle: 'free' },
        { q: "What is the first stage of engaging with an emotional woman?", a: "Holding space for her emotion without trying to analyze, fix, or change it.", bundle: 'free' },
        { q: "What is the \"Feelings First, Facts Later\" rule?", a: "Hear her pain first, and temporarily ignore her story; respond to the facts only after she has settled.", bundle: 'pro' },
        { q: "Why is trying to reason with an emotional woman useless?", a: "Addressing emotion with cognitive reasoning is like speaking French to an English speaker—it won't get through.", bundle: 'pro' },
        { q: "What is the target of \"Hear the Pain, Not the Blame\"?", a: "To give her the \"emotional oxygen\" she needs so her heart can soften and open.", bundle: 'pro' },
      ]
    },
    {
      name: "Narrowing the Scope",
      description: "",
      cards: [
        { q: "What is the core move of \"Narrowing the Scope\"?", a: "Proactively reducing her decision-making burden by presenting limited options.", bundle: 'free' },
        { q: "Why does this strategy work?", a: "Making decisions forces her into her Masculine energy; your structure allows her to relax into her Feminine.", bundle: 'free' },
        { q: "What are the three variants of \"Narrowing the Scope\"?", a: "Presenting 2-3 concrete options, stating a preference, or proposing a plan and asking for objections.", bundle: 'free' },
        { q: "Why is \"whatever you want\" a mistake?", a: "It is a pleaser response that abdicates your role as an organizing force in her life.", bundle: 'free' },
        { q: "What does the Masculine offering of structure do?", a: "It simplifies the world's complexity, reduces uncertainty, and drives progress.", bundle: 'free' },
        { q: "What is the \"Plow Horse\" trap of the Provider?", a: "Thinking that working hard and earning money gives you a pass to ignore her emotional or structural needs.", bundle: 'pro' },
        { q: "How do you handle a domain where she is more competent (like cooking)?", a: "Proactively ask for her guidance: \"Baby, tell me what to do!\" to add structure to her lead.", bundle: 'pro' },
        { q: "How does \"Narrowing the Scope\" help her relax?", a: "It temporarily relieves her of the decision-making burden, which works like magic to settle her nervous system.", bundle: 'pro' },
      ]
    },
    {
      name: "The Do-Over",
      description: "",
      cards: [
        { q: "What is the core move of \"The Do-Over\"?", a: "Humbling yourself to stop an interaction that has gone wrong and asking to start again.", bundle: 'free' },
        { q: "Why does this strategy work?", a: "It is an elegant way to pull the plug on meaningless conflicts before they escalate.", bundle: 'free' },
        { q: "When should you request a do-over?", a: "When you notice you've gotten defensive, started lecturing, or used a harsh tone.", bundle: 'free' },
        { q: "What are the two variants of \"The Do-Over\"?", a: "Resetting after your own reactivity, or resetting when she has misunderstood your intentions.", bundle: 'free' },
        { q: "Why is a do-over an act of strength?", a: "Because it takes a strong, centered man to admit he was clumsy and prioritize the connection.", bundle: 'free' },
        { q: "What should you say when requesting a do-over?", a: "\"Can we have a do-over? I messed up and got defensive, and I want to try again.\"", bundle: 'pro' },
        { q: "How does a do-over affect her trust?", a: "She notices your relational skill and appreciates your leadership instead of staying in her defense.", bundle: 'pro' },
        { q: "When is a do-over most useful?", a: "During minor friction and misunderstandings, before the conflict becomes a \"code red\" issue.", bundle: 'pro' },
      ]
    },
    {
      name: "The \"When You...\" Stem",
      description: "",
      cards: [
        { q: "What is the template for \"The 'When You...' Stem\"?", a: "When you, plus a plain observation, then I feel, plus the emotion in your body.", bundle: 'free' },
        { q: "Why does this strategy work?", a: "It creates an inarguable statement that shares your truth without triggering her defenses.", bundle: 'free' },
        { q: "What makes an observation \"inarguable\"?", a: "It is a simple statement of fact, with no analysis, judgment, or labels attached.", bundle: 'free' },
        { q: "What are the two variants of this strategy?", a: "Sharing vulnerability (fear or insecurity) or owning anger cleanly without attack.", bundle: 'free' },
        { q: "What is the \"Victim Mentality\" to avoid?", a: "Sharing your emotions while needing her to change in order to make your feelings stop.", bundle: 'free' },
        { q: "What is the difference between \"sharing\" and \"demanding\"?", a: "The Masculine man shares his emotions and stops, bearing the pain himself without needing her to change.", bundle: 'pro' },
        { q: "Why does \"blaming\" kill polarity?", a: "It signals to her nervous system that you won't be okay unless she molds herself to protect your wounds.", bundle: 'pro' },
        { q: "What is \"speaking inarguably\"?", a: "Stating only what is true for your own experience instead of characterizing her motivations.", bundle: 'pro' },
      ]
    },
    {
      name: "Refusing the Rejection",
      description: "",
      cards: [
        { q: "What is the core move of \"Refusing the Rejection\"?", a: "Steadfastly refusing to accept a temporary shutdown of connection by staying present.", bundle: 'free' },
        { q: "Why does this strategy work?", a: "It proves your devotion and solidity, showing her that her intensity cannot scare you off.", bundle: 'free' },
        { q: "What are the two variants of \"Refusing the Rejection\"?", a: "Staying physically nearby during silence, or giving her space during a \"Go!\" while sending love.", bundle: 'free' },
        { q: "What is she often doing when she tells you to go away?", a: "Testing your commitment to see if you will stand strong or run and hide.", bundle: 'free' },
        { q: "What should you do when she pulls away physically?", a: "Back off physically but maintain your eye contact, grounding, and loving presence.", bundle: 'free' },
        { q: "What should you text when she hangs up the phone?", a: "\"I see you're upset. I'm here when you want to finish talking.\"", bundle: 'pro' },
        { q: "Why is staying in the fire necessary?", a: "Because her trust in you grows when she sees that you can contain her intense emotions.", bundle: 'pro' },
        { q: "What is the core mindset of \"Refusing the Rejection\"?", a: "Be more committed to the connection than you are afraid of her intensity.", bundle: 'pro' },
      ]
    },
    {
      name: "Collections",
      description: "The three collections in this pack, and what each one makes you choose between:\n\n• Leading Through the Storm — peak emotional moments: do you hear her pain, reset with a do-over, or refuse the rejection?\n• Clarity and Truth — daily structure: do you narrow the scope of a decision or speak inarguably with the stem?\n• Own Your Frame — daily friction: do you correct a mistake, state your boundary, or propose a clear option?\n\nOne question decides nearly all of it: what did she just do?",
      cards: [
        { q: "What are the three collections in this pack?", a: "Leading Through the Storm, Clarity and Truth, and Own Your Frame.", bundle: 'pro' },
        { q: "What does \"Leading Through the Storm\" help you do?", a: "Maintain connection and hold a safe container when her emotions are at their peak.", bundle: 'pro' },
        { q: "What does \"Clarity and Truth\" help you do?", a: "Create daily structure and transparency so she knows where you stand and can relax.", bundle: 'pro' },
        { q: "What does \"Own Your Frame\" help you do?", a: "Navigate daily friction with humility and presence instead of collapsing.", bundle: 'pro' },
        { q: "When do you choose \"Hear the Pain, Not the Blame\"?", a: "When she blasts you with messy emotions and accusations, and you need to find the hurt underneath.", bundle: 'pro' },
        { q: "When do you choose \"The Do-Over\"?", a: "When you've been clumsy or defensive, and you need a clean reset of the interaction.", bundle: 'pro' },
        { q: "When do you choose \"The 'When You...' Stem\"?", a: "When you need to express your boundaries or vulnerability without launching a counter-attack.", bundle: 'pro' },
        { q: "When do you choose \"Narrowing the Scope\"?", a: "When she is overwhelmed by decisions and you need to provide a clear point of orientation.", bundle: 'pro' },
      ]
    },
    {
      name: "Sequences",
      description: "The three sequences in this pack, and the order each one runs in:\n\n• Conflict to Connection — Hear the Pain, Not the Blame → The Do-Over → Narrowing the Scope\n• Lead the Dance — Narrowing the Scope → The \"When You...\" Stem → Narrowing the Scope\n• Weather the Storm — Hear the Pain, Not the Blame → Refusing the Rejection → The \"When You...\" Stem\n\nIn each one, the order is doing the work to re-establish safety and polarity.",
      cards: [
        { q: "What are the three sequences in this pack?", a: "Conflict to Connection, Lead the Dance, and Weather the Storm.", bundle: 'pro' },
        { q: "What is the order in \"Conflict to Connection\"?", a: "Hear the Pain, Not the Blame, then The Do-Over, and finally Narrowing the Scope.", bundle: 'pro' },
        { q: "Why does \"Hear the Pain\" come first in \"Conflict to Connection\"?", a: "Because her nervous system must receive emotional oxygen before any facts or solutions can get through.", bundle: 'pro' },
        { q: "What is the order in \"Lead the Dance\"?", a: "Narrowing the Scope, then The \"When You...\" Stem, and finally Narrowing the Scope.", bundle: 'pro' },
        { q: "What is the order in \"Weather the Storm\"?", a: "Hear the Pain, then Refusing the Rejection, and finally The \"When You...\" Stem.", bundle: 'pro' },
        { q: "Why does \"Weather the Storm\" end with \"The 'When You...' Stem\"?", a: "Because once you've stood strong in her storm, you must share your own truth and boundaries cleanly.", bundle: 'pro' },
        { q: "What does \"Conflict to Connection\" train you to do?", a: "Turn a heated fight around by validating her, owning your mistakes, and offering a concrete fix.", bundle: 'pro' },
        { q: "What does \"Lead the Dance\" train you to do?", a: "Take back the lead in daily logistics without being domineering or steamrolling her.", bundle: 'pro' },
      ]
    },
    {
      name: "Challenges",
      description: "The five challenges in this pack, and what each one is organised around:\n\n• The Cold Shoulder — when she withdraws or becomes silent\n• Verbal Attacks — when she blasts you with blame, sarcasm, or shaming\n• Decision Paralysis — when she is overwhelmed by uncertainty and decisions\n• Testing Solidity — when she tests your boundaries or your devotion\n• Meaningless Friction — when an interaction went wrong through clumsiness or defensiveness\n\nEach category starts from the problem rather than from the strategy.",
      cards: [
        { q: "What are the five challenges in this pack?", a: "The Cold Shoulder, Verbal Attacks, Decision Paralysis, Testing Solidity, and Meaningless Friction.", bundle: 'pro' },
        { q: "What is the danger during \"The Cold Shoulder\"?", a: "Reacting in kind by withdrawing, giving her the silent treatment, and waiting for her to repair.", bundle: 'pro' },
        { q: "How do you handle \"Verbal Attacks\"?", a: "By ignoring her blame to focus on her underlying pain, refusing to defend or correct the facts.", bundle: 'pro' },
        { q: "How do you handle \"Decision Paralysis\"?", a: "By being proactive to synthesize information and propose a limited, clear set of options.", bundle: 'pro' },
        { q: "How do you handle \"Testing Solidity\"?", a: "By maintaining your grounding, \"holding the pose,\" and refusing to back down out of fear or a need for approval.", bundle: 'pro' },
        { q: "How do you handle \"Meaningless Friction\"?", a: "By having the humility to request a do-over and reset the conversation cleanly.", bundle: 'pro' },
        { q: "Which strategy resolves most of \"The Cold Shoulder\"?", a: "Refusing the Rejection—staying present and offering a steady, loving container.", bundle: 'pro' },
        { q: "What is she really seeking when she throws a challenge at you?", a: "Evidence that you are strong enough to stand up TO her, so she can trust you to stand up FOR her.", bundle: 'pro' },
      ]
    },
    {
      name: "Mindset",
      description: "The five mindsets in this pack, and the area each one is about:\n\n• She is your Oracle — her criticism as information rather than attack\n• What I Want Matters — your own truth and needs\n• Nice Guy Pleasing — the belief that being harmless keeps you safe\n• Feminine Tsunamis — her intense emotional storms\n• Relational Conflict — what you put first when a fight starts\n\nEach one names a belief that stops people, and what is true instead.",
      cards: [
        { q: "What are the five mindsets in this pack?", a: "She is your Oracle, What I Want Matters, Nice Guy Pleasing, Feminine Tsunamis, and Relational Conflict.", bundle: 'pro' },
        { q: "What does \"She is your Oracle\" teach you?", a: "To stop defending and look for the kernel of truth in her complaints.", bundle: 'pro' },
        { q: "What does \"What I Want Matters\" teach you?", a: "That being \"nice\" by having no opinion is abdicating the frame and kills attraction.", bundle: 'pro' },
        { q: "What is the trap of \"Nice Guy Pleasing\"?", a: "Believing that being harmless and needless will keep you safe, which actually breeds resentment.", bundle: 'pro' },
        { q: "What is the truth behind \"Feminine Tsunamis\"?", a: "Her emotional storms are not a problem to be solved logically, but a wave that wants containment.", bundle: 'pro' },
        { q: "What is the rule of \"Relational Conflict\"?", a: "Put the connection before your fear or ego; take responsibility for the resolution.", bundle: 'pro' },
        { q: "Why is \"seeking permission\" a mistake?", a: "It turns your partner into a surrogate mother and makes her lose respect for you.", bundle: 'pro' },
        { q: "Why is a little healthy selfishness necessary?", a: "Because you cannot serve others until you attend to your own basic needs.", bundle: 'pro' },
      ]
    },
  ],
  masculine2: [
    {
      name: "Repair and Depth",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The mechanisms of building trust and safety through advanced leadership skills.",
      cards: [
        { q: "What is the \"trifecta\" of emotional oxygen?", a: "Empathy, Responsibility, and Tangible Action.", bundle: 'free' },
        { q: "What is the rule of thumb for \"Facts\"?", a: "Feelings first, facts later. Logic doesn't work in an emotional tsunami.", bundle: 'free' },
        { q: "What is \"Shared Reality\"?", a: "An inquiry into her world to understand how she sees things, piece by piece.", bundle: 'free' },
        { q: "Why is praise essential for the Feminine?", a: "It fulfills the need to feel desirable and encourages the behavior you want without using criticism.", bundle: 'pro' },
        { q: "When should you ask for a \"Delay\"?", a: "When you are so elevated that you risk becoming reactive or destructive.", bundle: 'pro' },
        { q: "What is the \"Shadow Side\" of the Provider role?", a: "Over-identifying with work such that you neglect the \"little things\" that make her feel safe.", bundle: 'pro' },
        { q: "What does \"Vocalizing the Boundary\" protect in a relationship?", a: "The dignity of both partners and the culture of the relationship, by stopping shaming and insults.", bundle: 'pro' },
        { q: "Why is \"Choreplay\" a failed strategy for attraction?", a: "Because doing chores to \"earn\" sex is a covert contract that communicates dependency and lack of desire.", bundle: 'pro' },
      ]
    },
    {
      name: "Core Idea",
      description: "The five strategies of this pack, designed to build a Masculine core and inspire trust, lust, and devotion.\n\n1. Feelings First, Facts Later\n2. The Tangible Action Proposal\n3. Getting Shared Reality\n4. Vocalizing the Boundary\n5. Leading with Praise\n\nThey move you from reactive pleasing into grounded leadership.",
      cards: [
        { q: "What are the three core principles of Masculine leadership?", a: "Respond vs. React, Provide Structure, and Create Safety.", bundle: 'free' },
        { q: "What is the primary purpose of the new Masculine?", a: "To serve others powerfully through clarity, leadership, protection, and care, rather than control.", bundle: 'free' },
        { q: "Why is \"being nice\" not enough to win her respect?", a: "Because it produces harmless, tentative men who abdicate leadership to avoid conflict.", bundle: 'free' },
        { q: "What is the basic rule about who is responsible for relationship conflict?", a: "Whether or not you are the problem, your Masculine leadership is the solution.", bundle: 'free' },
        { q: "What does David Deida's concept of Polarity require?", a: "That for juicy intimacy to flourish, there must be one partner in the Masculine pole and one in the Feminine.", bundle: 'pro' },
        { q: "Why is a woman's nagging actually an indicator that she is \"in\" the relationship?", a: "It is her clumsy expression of longing for you to step up; the day she stops calling you out is the day she has given up.", bundle: 'pro' },
        { q: "What is the main outcome of embodying the blueprint?", a: "It induces her to relax back into her Feminine state of playfulness, adoration, and sexual openness.", bundle: 'pro' },
        { q: "What is the primary difference between the old Masculine and the new Masculine?", a: "The old Masculine was based on control and power imbalance; the new Masculine is based on clarity and leadership.", bundle: 'pro' },
      ]
    },
    {
      name: "Feelings First, Facts Later",
      description: "",
      cards: [
        { q: "What is the core move of \"Feelings First, Facts Later\"?", a: "Prioritizing emotional validation over logical corrections during an argument.", bundle: 'free' },
        { q: "Why is reasoning with an emotional partner useless in the moment?", a: "Because addressing emotion with cognitive reasoning is like speaking French to an English speaker.", bundle: 'free' },
        { q: "What is the \"emotional oxygen\" she needs during an outburst?", a: "Hearing that her pain is seen and validated, without you getting defensive.", bundle: 'free' },
        { q: "When do you deal with the facts of her complaint?", a: "Later, after her emotional storm has passed and she has settled.", bundle: 'free' },
        { q: "What are the two variants of \"Feelings First, Facts Later\"?", a: "The Emotional Storm (ignore the story) and The Misunderstanding (stay present).", bundle: 'free' },
        { q: "Why does your defensiveness naturally diminish when you use this strategy?", a: "Because knowing you will get to the facts later frees you to focus entirely on her heart now.", bundle: 'pro' },
        { q: "What does getting defensive or explaining your intentions immediately do?", a: "It invalidates her emotional experience and enrages her further.", bundle: 'pro' },
        { q: "How does this strategy build deep relational trust over time?", a: "It proves to her nervous system that you are a solid rock who can contain her intensity without running.", bundle: 'pro' },
      ]
    },
    {
      name: "The Tangible Action Proposal",
      description: "",
      cards: [
        { q: "What is the core move of \"The Tangible Action Proposal\"?", a: "Offering a specific, concrete behavioral change to ensure a problem doesn't recur.", bundle: 'free' },
        { q: "Why are vague promises of \"trying harder\" insufficient?", a: "Because they don't settle her Feminine nervous system or build structural trust.", bundle: 'free' },
        { q: "What are the two variants of \"The Tangible Action Proposal\"?", a: "The Trust Builder (for recurring failures) and The Connection Container (for regular syncs).", bundle: 'free' },
        { q: "What does the Masculine expectation of \"delivering results\" require?", a: "Translating your intentions into stable, predictable actions that she can rely on.", bundle: 'free' },
        { q: "How does proposing a regular \"schedule sync\" help her relax?", a: "It reduces her uncertainty about the upcoming week's plans and logistics.", bundle: 'free' },
        { q: "What is the \"shadow side\" of being a good Provider?", a: "Over-identifying with work such that you neglect the \"little things\" that make her feel safe.", bundle: 'pro' },
        { q: "What is the \"trifecta\" of repair after you have caused harm?", a: "Empathy first, taking responsibility second, and then offering a tangible action.", bundle: 'pro' },
        { q: "Why should you keep a personal task list for household commitments?", a: "It demonstrates that you take her needs as seriously as your professional responsibilities.", bundle: 'pro' },
      ]
    },
    {
      name: "Getting Shared Reality",
      description: "",
      cards: [
        { q: "What is the core move of \"Getting Shared Reality\"?", a: "Using curious inquiry to understand her perspective when her reaction seems baffling.", bundle: 'free' },
        { q: "Why should you avoid trying to solve her perspective logically?", a: "Because her feelings are a signal to listen to, not a puzzle to analyze.", bundle: 'free' },
        { q: "What are the two variants of \"Getting Shared Reality\"?", a: "The Reality Sync (checking your understanding) and The Deep Dive (exploring the pain).", bundle: 'free' },
        { q: "What kind of questions should you ask to sync reality?", a: "Questions that explore how she felt: \"Did it feel like you didn't matter to me?\"", bundle: 'free' },
        { q: "What does \"speaking inarguably\" mean?", a: "Stating only what is true for your own experience without characterizing her motives.", bundle: 'free' },
        { q: "How does this strategy help you find the \"kernel of truth\" in a complaint?", a: "It gets you on the same page by focusing on the hardest part of her experience.", bundle: 'pro' },
        { q: "Why does she react toxically when her reality is invalidated?", a: "Because she feels abandoned to deal with her pain alone.", bundle: 'pro' },
        { q: "What is she really saying when she complains about a minor lapse like forgotten milk?", a: "She is expressing the pain of feeling forgotten and not top of mind.", bundle: 'pro' },
      ]
    },
    {
      name: "Vocalizing the Boundary",
      description: "",
      cards: [
        { q: "What is the core move of \"Vocalizing the Boundary\"?", a: "Directly calling out unacceptable behavior while staying in connection and heart.", bundle: 'free' },
        { q: "What are the two variants of \"Vocalizing the Boundary\"?", a: "The \"No Fighting\" container and The Anti-Shaming line.", bundle: 'free' },
        { q: "What is the \"container\" of a conflict?", a: "The rules of engagement, such as refusing to sleep disconnected or tolerating insults.", bundle: 'free' },
        { q: "Why is setting boundaries considered an act of love?", a: "Because it protects the relationship's culture and builds her respect for your spine.", bundle: 'free' },
        { q: "How should you respond to the silent treatment or \"punitive withdrawal\"?", a: "Make it clear that while you acknowledge her hurt, you won't tolerate being shut out.", bundle: 'free' },
        { q: "What is the difference between setting a boundary and trying to dominate her?", a: "A boundary is set in connection to protect respect; dominance is trying to control her out of fear.", bundle: 'pro' },
        { q: "What is the best response to \"token resistance\" from your partner?", a: "Gently but firmly persisting with love, rather than backing down or steamrolling.", bundle: 'pro' },
        { q: "Why does a woman lose respect for a man who has no boundaries?", a: "Because she knows that if he can't stand up TO her, he can't stand up FOR her.", bundle: 'pro' },
      ]
    },
    {
      name: "Leading with Praise",
      description: "",
      cards: [
        { q: "What is the core move of \"Leading with Praise\"?", a: "Using specific appreciation of her beauty or behavior to open her Feminine heart.", bundle: 'free' },
        { q: "Why is specific praise more powerful than general compliments?", a: "Specific praise proves you are paying focused attention, which is what she craves.", bundle: 'free' },
        { q: "What are the two variants of \"Leading with Praise\"?", a: "Behavioral Praise (encouraging what you like) and Seductive Praise (building polarity).", bundle: 'free' },
        { q: "Why should you avoid \"standardized\" or forced-Pavlovian praise?", a: "Because the Feminine will experience it as obligatory, as if she is supposed to perform.", bundle: 'free' },
        { q: "How does praise help a woman transition out of her Masculine work-mind?", a: "It invites her to let go of control and relax into her radiant, feeling state.", bundle: 'free' },
        { q: "What is the \"container\" in the sexual domain?", a: "A sense of safety and preparation within which her Feminine sexual energy can flourish.", bundle: 'pro' },
        { q: "Why is praising her effort more effective than complaining about her lack?", a: "Because the Feminine thrives on being desired; praise organically encourages her openness.", bundle: 'pro' },
        { q: "What is the foundational relationship between heart connection and sexuality?", a: "Opening her Feminine heart with praise and presence is what naturally opens her body.", bundle: 'pro' },
      ]
    },
    {
      name: "Collections",
      description: "The three collections in this pack, and what each one makes you choose between:\n\n• The Repair Kit — turn a conflict into trust: do you sync reality, validate feelings, or offer a tangible action?\n• Polarity and Power — maintain the juice: do you set a firm boundary or lead with warm praise?\n• Guiding the Decision — relieve her burden: do you propose a concrete step, hold limits, or sync her logic?\n\nOne question decides nearly all of it: what did she just do?",
      cards: [
        { q: "What are the three collections in this pack?", a: "The Repair Kit, Polarity and Power, and Guiding the Decision.", bundle: 'pro' },
        { q: "What is the core purpose of \"The Repair Kit\"?", a: "To heal connection after a breach by combining empathy, ownership, and proactive solutions.", bundle: 'pro' },
        { q: "What does \"Polarity and Power\" teach you to manage?", a: "The sexual tension and mutual respect, balancing safety boundaries with seductive desire.", bundle: 'pro' },
        { q: "What is the focus of \"Guiding the Decision\"?", a: "Relieving her decision fatigue by narrowing the scope of daily logistics and choices.", bundle: 'pro' },
        { q: "When should you choose \"Getting Shared Reality\" over \"Feelings First\"?", a: "When her reaction is truly baffling and you need to understand her internal logic first.", bundle: 'pro' },
        { q: "When should you choose \"Vocalizing the Boundary\" over \"Leading with Praise\"?", a: "When her anxious control crosses into disrespectful shaming or name-calling.", bundle: 'pro' },
        { q: "Why does \"Guiding the Decision\" include \"Vocalizing the Boundary\"?", a: "Because setting limits on her micromanaging is how you establish your frame to lead.", bundle: 'pro' },
        { q: "What is the main trap in Collections?", a: "Choosing the \"easy-going\" default of doing nothing, which abdicates your role as Captain.", bundle: 'pro' },
      ]
    },
    {
      name: "Sequences",
      description: "The three sequences in this pack, and the order each one runs in:\n\n• From Shutdown to Radiance — Shared Reality → Feelings First → Tangible Action → Praise\n• From Chaos to Order — Getting Shared Reality → Vocalizing the Boundary → Tangible Action\n• Re-Polarizing the Room — Feelings First, Facts Later → Leading with Praise → Tangible Action\n\nIn each one, the order of the steps is what re-establishes safety and polarity.",
      cards: [
        { q: "What are the three sequences in this pack?", a: "From Shutdown to Radiance, From Chaos to Order, and Re-Polarizing the Room.", bundle: 'pro' },
        { q: "Why does \"From Shutdown to Radiance\" start with \"Shared Reality\"?", a: "To locate the exact point of disconnection before you offer comfort or validate her feelings.", bundle: 'pro' },
        { q: "What is the final step in \"From Shutdown to Radiance\"?", a: "Leading with Praise, to transition her out of the repair state and back into attraction.", bundle: 'pro' },
        { q: "What is the order in \"From Chaos to Order\"?", a: "Getting Shared Reality, then Vocalizing the Boundary, and finally The Tangible Action Proposal.", bundle: 'pro' },
        { q: "Why does \"Vocalizing the Boundary\" come before the action proposal in \"From Chaos to Order\"?", a: "Because you must stop her disrespectful control before you can offer a solid, Masculine lead.", bundle: 'pro' },
        { q: "What is the order in \"Re-Polarizing the Room\"?", a: "Feelings First, Facts Later, then Leading with Praise, and finally The Tangible Action Proposal.", bundle: 'pro' },
        { q: "Why does \"Leading with Praise\" precede the action in \"Re-Polarizing the Room\"?", a: "Because her Feminine heart must feel desired and attractive before she can trust your practical solution.", bundle: 'pro' },
        { q: "What does \"From Chaos to Order\" help you do?", a: "Reclaim the Captain's seat when she is trying to manage your schedule out of anxiety.", bundle: 'pro' },
      ]
    },
    {
      name: "Challenges",
      description: "The five challenges to master in this pack:\n\n• The Toxic Attack — when she blasts you with blame, shaming, or insults\n• The Silent Treatment — when she goes cold or shuts you out as a punishment\n• Decision Fatigue — when she is overwhelmed by the burden of planning\n• Testing Your Solidity — when she tests your boundaries or devotion\n• The Fact-Centered Trap — when you get sucked into logical debates during storms\n\nEach category starts from her behavior rather than from your strategy.",
      cards: [
        { q: "What are the five challenges in this pack?", a: "The Toxic Attack, The Silent Treatment, Decision Fatigue, Testing Your Solidity, and The Fact-Centered Trap.", bundle: 'pro' },
        { q: "How do you handle \"The Toxic Attack\"?", a: "By ignoring her blame to focus on her underlying pain, while holding a firm line on respect.", bundle: 'pro' },
        { q: "What is the core danger during \"The Silent Treatment\"?", a: "Reacting with contraction or using the silent treatment yourself, which destroys connection.", bundle: 'pro' },
        { q: "What is the best strategy to resolve \"Decision Fatigue\"?", a: "The Tangible Action Proposal—synthesizing information and presenting proactive plans.", bundle: 'pro' },
        { q: "What is she really seeking when she is \"Testing Your Solidity\"?", a: "Evidence that you are strong enough to withstand her emotional tsunamis.", bundle: 'pro' },
        { q: "How do you escape \"The Fact-Centered Trap\"?", a: "By applying the \"Feelings First, Facts Later\" sequence, ignoring the logical debate.", bundle: 'pro' },
        { q: "Which strategy handles both \"The Silent Treatment\" and \"Testing Your Solidity\"?", a: "Vocalizing the Boundary—protecting respect and refusing to be punished or manipulated.", bundle: 'pro' },
        { q: "Why does a woman throw these challenges at you?", a: "To test your consciousness and competence before she surrenders to your lead.", bundle: 'pro' },
      ]
    },
    {
      name: "Mindset",
      description: "The five mindsets you practise in this pack:\n\n• The Oracle Reframe — choosing to see her messy emotions as intuitive data about my presence\n• Healthy Selfishness — stating what I want clearly to provide orientation and polarity\n• Structure — taking the lead in logistics to relieve her decision fatigue\n• Praise — appreciating her beauty to open her Feminine heart\n• Heart — dropping into my vulnerability to create emotional safety\n\nEach mindset shifts you from reactive avoidance to grounded presence.",
      cards: [
        { q: "What is the core block of \"The Oracle Reframe\"?", a: "Getting defensive because you interpret her emotional storm as a personal attack rather than intuitive data.", bundle: 'pro' },
        { q: "What is the core block of \"Healthy Selfishness\"?", a: "Acting as a nice guy pleaser who hides his needs to avoid conflict, which kills polarity.", bundle: 'pro' },
        { q: "What is the core block of the \"Structure\" mindset?", a: "Abdicating the lead in logistics because she is competent, leaving her unpartnered and anxious.", bundle: 'pro' },
        { q: "What is the core block of the \"Praise\" mindset?", a: "Withholding appreciation because you feel underappreciated or believe praise is a manipulative technique.", bundle: 'pro' },
        { q: "What is the core block of the \"Heart\" mindset?", a: "Staying in your logical mind to protect your rightness instead of dropping into your heart to feel her pain.", bundle: 'pro' },
        { q: "Which mindset answers \"I should just let her run things\"?", a: "Structure — providing direction is leadership, not a burden you place on her.", bundle: 'pro' },
        { q: "How does stating what you want help her relax?", a: "Your expressed desire provides a clear point of orientation that settles her nervous system.", bundle: 'pro' },
        { q: "What is the ultimate goal of these five mindsets?", a: "To shift your posture from reactive avoidance and defense to grounded, loving containment.", bundle: 'pro' },
      ]
    },
  ],
  masculine3: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The advanced mechanics of training the nervous system and leading through vulnerability.",
      cards: [
        { q: "What is the primary cause of reactivity?", a: "A sense of threat which creates anxiety in the body-mind.", bundle: 'free' },
        { q: "What is the rule for \"Sequence\" in sexual initiation?", a: "Warm her up slowly—men usually go three times too fast.", bundle: 'free' },
        { q: "What is \"Shiva\" in the Hindu tradition of polarity?", a: "The unchanging and unswayable observer—pure consciousness.", bundle: 'free' },
        { q: "What is the \"Oracle\" role of the Feminine?", a: "To reflect back to the man where he is out of integrity, heart, or presence.", bundle: 'pro' },
        { q: "How do you decouple \"wanting\" from \"getting\"?", a: "By becoming a connoisseur of the pleasure of desire itself, regardless of the outcome.", bundle: 'pro' },
        { q: "What is \"Provocation Meditation\"?", a: "Using triggering thoughts to intentionally stoke anxiety, then practicing staying grounded while in the fire.", bundle: 'pro' },
        { q: "What does this pack train that the earlier ones do not?", a: "What to do with your own nervous system — pausing, feeling, and slowing down — rather than what to say to her.", bundle: 'free' },
        { q: "Why do all five strategies in this pack start inside you?", a: "Because a reactive system cannot lead. Each one settles you first, and the words follow from that.", bundle: 'pro' },
      ]
    },
    {
      name: "The Intentional Pause",
      description: "",
      cards: [
        { q: "What is the core move of \"The Intentional Pause\"?", a: "Requesting a temporary break in a conversation when you feel your nervous system becoming reactive.", bundle: 'free' },
        { q: "Why does this strategy work?", a: "It prevents your reactive defenses from taking over and ensures you can return with presence.", bundle: 'free' },
        { q: "What is the \"Reactive Override\" trigger?", a: "When you feel a massive surge of anger and want to shout back or withdraw.", bundle: 'free' },
        { q: "What is the \"Numb and Dumb\" trigger?", a: "When you feel your mind starting to lock up, freeze, or go completely silent.", bundle: 'free' },
        { q: "What is the watchword for the \"Intentional Pause\"?", a: "Being the \"Watcher\" who can see the drama from the outside and choose a different path.", bundle: 'free' },
        { q: "What should you do for the first 5 seconds of an urge to storm out?", a: "Stay in the room for at least 5 seconds before calmly declaring a pause.", bundle: 'pro' },
        { q: "How does a pause help your partner?", a: "It creates a safe container where the intensity can clear instead of turning toxic.", bundle: 'pro' },
        { q: "What is the goal when returning from a pause?", a: "Re-engaging with full presence and speaking from your heartspace.", bundle: 'pro' },
      ]
    },
    {
      name: "Direct Sexual Initiation",
      description: "",
      cards: [
        { q: "What is the core move of \"Direct Sexual Initiation\"?", a: "Proactively and honestly owning your sexual desire as an act of leadership.", bundle: 'free' },
        { q: "Why does this strategy work?", a: "Because her Feminine energy relaxes when she knows you have a clear direction and desire.", bundle: 'free' },
        { q: "What is the \"Seduction Date\" variant?", a: "Proposing a specific, pre-planned time for intimacy so she can warm up mentally.", bundle: 'free' },
        { q: "What is the \"Direct Command\" variant?", a: "Using mild dominance to set the frame, such as telling her to get in the shower.", bundle: 'free' },
        { q: "What is the \"friend\" energy warning?", a: "If you are desexualized for weeks, you must break the pattern with bold, eye-contact initiation.", bundle: 'free' },
        { q: "Why is \"seeking permission\" a mistake in the bedroom?", a: "Because it communicates anxiety and dependency, which instantly depolarizes attraction.", bundle: 'pro' },
        { q: "How does owning your sexuality affect her?", a: "The more you unabashedly own your desire, the more uninhibited she can become.", bundle: 'pro' },
        { q: "What are the two core requirements for a woman to open sexually?", a: "That the conditions exist for her to feel safe, and that she is warmed up slowly.", bundle: 'pro' },
      ]
    },
    {
      name: "Sharing the Fear Underneath",
      description: "",
      cards: [
        { q: "What is the core move of \"Sharing the Fear Underneath\"?", a: "Identifying the vulnerable fear or need fueling your anger and sharing it directly.", bundle: 'free' },
        { q: "Why does this strategy work?", a: "It creates an inarguable statement that stops defensiveness and invites heart connection.", bundle: 'free' },
        { q: "What is the \"Rejection/Abandonment\" underlying fear?", a: "The subconscious worry that her anger or withdrawal means she is leaving you.", bundle: 'free' },
        { q: "What is the \"Inadequacy\" underlying fear?", a: "The subconscious worry that you are not \"man enough\" or competent to lead.", bundle: 'free' },
        { q: "What sentence stem can you use to share vulnerability?", a: "\"When you [observation], it makes me feel [emotion] in my body.\"", bundle: 'free' },
        { q: "What separates sharing a fear from complaining about it?", a: "A share ends. A complaint waits for her to do something about it.", bundle: 'pro' },
        { q: "What does a Masculine man do with his raw pain?", a: "He shares it and he stops, bearing the pain himself without demanding she fix it.", bundle: 'pro' },
        { q: "How does vulnerable sharing affect an emotional partner?", a: "It bypasses her defenses, halts her accusations, and opens up her compassion.", bundle: 'pro' },
      ]
    },
    {
      name: "Slowing Down the Sequence",
      description: "",
      cards: [
        { q: "What is the core move of \"Slowing Down the Sequence\"?", a: "Meditatively slowing down every physical and energetic movement during intimacy.", bundle: 'free' },
        { q: "Why does this strategy work?", a: "The Feminine physiology requires time and slow, steady pressure to feel safe enough to open.", bundle: 'free' },
        { q: "What is the \"Slow Body Movements\" technique?", a: "Approaching, rolling, or changing positions in bed with three times slower movement.", bundle: 'free' },
        { q: "What is the \"Synchronized Breathing\" technique?", a: "Using slow, audible belly breaths to synchronize your nervous systems.", bundle: 'free' },
        { q: "What is the primary complaint of women in the sexual arena?", a: "That men go too fast—they grope or initiate without slow energetic warming.", bundle: 'free' },
        { q: "What are the tools of \"Sensation Play\"?", a: "Fists on the sacrum, drumming, spanking, or hair pulling to bring her into her body.", bundle: 'pro' },
        { q: "Why does \"Restraint\" (swaddling) induce surrender?", a: "Because constricting her movement takes away choice, which can make her feel safe.", bundle: 'pro' },
        { q: "How does \"Dirty Talk\" help polarity?", a: "It connects your spoken words to your gut-level desire, establishing your confidence and command.", bundle: 'pro' },
      ]
    },
    {
      name: "The Heartful \"Ouch\"",
      description: "",
      cards: [
        { q: "What is the core move of \"The Heartful 'Ouch'\"?", a: "Responding to a verbal attack by dropping into your heart and simply naming the pain.", bundle: 'free' },
        { q: "Why does this strategy work?", a: "It proves you are present and impacted, which is far more powerful than an intellectual rebuttal.", bundle: 'free' },
        { q: "What is \"The Simple Ouch\" variant?", a: "A one-word acknowledgment of impact that halts her momentum without starting an argument.", bundle: 'free' },
        { q: "What is \"The Invitation to Heart\" variant?", a: "Calling her back to respect and heart space: \"I want to hear you, but I don't want to be insulted.\"", bundle: 'free' },
        { q: "Why do men naturally defend and explain?", a: "Because the Masculine wiring wants to do it right, and her unhappiness feels like proof of failure.", bundle: 'free' },
        { q: "What is the \"being love\" commitment?", a: "Choosing to remain in your heart and contain the storm even when she temporarily cannot.", bundle: 'pro' },
        { q: "How does getting defensive affect her nervous system?", a: "It signals that you are reactive and unable to handle her emotional intensity.", bundle: 'pro' },
        { q: "What does \"The Heartful 'Ouch'\" demonstrate to her?", a: "That you have a strong spine but keep your heart wide open to her under pressure.", bundle: 'pro' },
      ]
    },
    {
      name: "Collections",
      description: "The three collections in this pack, and what each one makes you choose between:\n\n• The Heart and the Fire — peak conflict: do you pause to settle, voice the fear underneath, or name the ouch?\n• Leading the Polarity — intimate connection: do you initiate sex directly or slow down the sequence?\n• Settle and Connect — daily friction: do you request a pause, share vulnerability, or meet attacks with impact?\n\nOne question decides nearly all of it: what did the other person just do?",
      cards: [
        { q: "What are the three collections in this pack?", a: "The Heart and the Fire, Leading the Polarity, and Settle and Connect.", bundle: 'pro' },
        { q: "What is the core purpose of \"The Heart and the Fire\"?", a: "To maintain grounded presence during high-stakes conflict when the urge to run or fight is strongest.", bundle: 'pro' },
        { q: "What does \"Leading the Polarity\" teach you to manage?", a: "Seduction and sexual leadership, restoring the physical juice through bold, slowed-down presence.", bundle: 'pro' },
        { q: "What is the focus of \"Settle and Connect\"?", a: "Navigating daily friction with vulnerable truth and emotional regulation instead of defensive debates.", bundle: 'pro' },
        { q: "When do you choose \"The Heartful 'Ouch'\" over \"Sharing the Fear Underneath\"?", a: "When she launches a direct, shaming verbal attack and you need to show she has impacted you.", bundle: 'pro' },
        { q: "When do you choose \"The Intentional Pause\" over \"The Heartful 'Ouch'\"?", a: "When you feel your own system getting so reactive that you are about to shout or withdraw.", bundle: 'pro' },
        { q: "Why does \"Settle and Connect\" include \"The Intentional Pause\"?", a: "Because stopping the reactive loop is the first step to protecting the container.", bundle: 'pro' },
        { q: "What is the default when you are stuck on which collection strategy to use?", a: "Direct, vulnerable truth—sharing the fear underneath cleanly without demands.", bundle: 'pro' },
      ]
    },
    {
      name: "Sequences",
      description: "The three sequences in this pack, and the order each one runs in:\n\n1. The Brave Lead — The Intentional Pause → Sharing the Fear Underneath → The Heartful \"Ouch\" → Direct Sexual Initiation\n2. Settle and Share — The Intentional Pause → Sharing the Fear Underneath → The Heartful \"Ouch\"\n3. The Intimate Lead — Direct Sexual Initiation → Slowing Down the Sequence\n\nIn each one, the order of the steps is what re-establishes safety and polarity.",
      cards: [
        { q: "What are the three sequences in this pack?", a: "The Brave Lead, Settle and Share, and The Intimate Lead.", bundle: 'pro' },
        { q: "What is the order in \"The Brave Lead\"?", a: "Intentional Pause, then Sharing the Fear, then Heartful \"Ouch\", and finally Direct Initiation.", bundle: 'pro' },
        { q: "Why does \"The Intentional Pause\" come first in \"The Brave Lead\"?", a: "Because you must regulate your own system before you can speak your vulnerable truth cleanly.", bundle: 'pro' },
        { q: "What is the order in \"Settle and Share\"?", a: "The Intentional Pause, then Sharing the Fear Underneath, and finally The Heartful \"Ouch\".", bundle: 'pro' },
        { q: "Why does \"Sharing the Fear Underneath\" precede \"The Heartful 'Ouch'\" in \"Settle and Share\"?", a: "Because expressing your raw vulnerability first is what creates the container for her to soften.", bundle: 'pro' },
        { q: "What is the order in \"The Intimate Lead\"?", a: "Direct Sexual Initiation, then Slowing Down the Sequence.", bundle: 'pro' },
        { q: "What does \"The Intimate Lead\" train you to do?", a: "Take bold sexual charge of the bedroom while immediately slowing down the pace to build arousal.", bundle: 'pro' },
        { q: "What does \"Settle and Share\" train you to do?", a: "Turn a toxic shouting match around by stopping the fight and sharing your unarguable heart.", bundle: 'pro' },
      ]
    },
    {
      name: "Challenges",
      description: "The five challenges to master in this pack:\n\n• High Intensity Attacks — when she goes for the jugular in conflict\n• The Silent Shutdown — when she retreats into cold silence or withdrawal\n• Sexual Rejections — when she declines intimacy or tests your resolve\n• Validation Traps — when you get caught in approval-seeking loops\n• Insults and Shaming — when her emotional expression becomes toxic\n\nEach category has its own way of testing your Masculine solidity.",
      cards: [
        { q: "What are the five challenges in this pack?", a: "High Intensity Attacks, The Silent Shutdown, Sexual Rejections, Validation Traps, and Insults and Shaming.", bundle: 'pro' },
        { q: "How do you handle \"The Silent Shutdown\"?", a: "By staying present and voicing your fear underneath instead of giving her the cold shoulder back.", bundle: 'pro' },
        { q: "What is the core danger during \"Sexual Rejections\"?", a: "Collapsing into a whiny nice guy who begs for permission or retreats in passive anger.", bundle: 'pro' },
        { q: "What is the best strategy to resolve \"High Intensity Attacks\"?", a: "Applying \"The Intentional Pause\" to regulate yourself and \"The Heartful 'Ouch'\" to name the impact.", bundle: 'pro' },
        { q: "How do you handle \"Validation Traps\"?", a: "By recognizing your fear of her disapproval and sharing the fear underneath without demanding she change.", bundle: 'pro' },
        { q: "How do you escape \"Insults and Shaming\"?", a: "By ignoring her toxic story to meet her underlying pain, while holding a firm boundary on respect.", bundle: 'pro' },
        { q: "What is she really seeking when she throws these challenges at you?", a: "Proof that you are a solid rock who can contain her intensity and lead her back to connection.", bundle: 'pro' },
        { q: "Which strategy handles both \"The Silent Shutdown\" and \"Insults and Shaming\"?", a: "The Heartful \"Ouch\"—staying present and vulnerable instead of getting defensive.", bundle: 'pro' },
      ]
    },
    {
      name: "Mindset",
      description: "These are the mindsets you practise in this pack:\n\n• Fear is just Resistance — fear is your subconscious resisting a possibility\n• The Oracle of Heart — seeing her emotional storm as intuitive data about your presence\n• Sexual Desire — owning your desire is a gift of polarity, not a burden on her\n• Vulnerability — dropping into your heart is the ultimate display of grounding\n• Slowing Down — decelerating physical movement builds the safety her body needs\n\nIn every one, the belief that gets in the way feels like safety from the inside.",
      cards: [
        { q: "What are the five mindsets in this pack?", a: "Fear is just Resistance, The Oracle of Heart, Sexual Desire, Vulnerability, and Slowing Down.", bundle: 'pro' },
        { q: "What does \"Fear is just Resistance\" teach you?", a: "To challenge the belief that her anger or rejection is unsurvivable.", bundle: 'pro' },
        { q: "What does \"The Oracle of Heart\" teach you?", a: "To stop defending and look for the kernel of truth in her complaints.", bundle: 'pro' },
        { q: "What is the trap of the \"Sexual Desire\" mindset?", a: "Making tentative, indirect bids for sex to avoid the ego-pain of a direct \"No.\"", bundle: 'pro' },
        { q: "What is the truth behind the \"Vulnerability\" mindset?", a: "That sharing your raw fear without demands is a position of immense power.", bundle: 'pro' },
        { q: "What is the rule of the \"Slowing Down\" mindset?", a: "Move her with control, not force or speed; let her Feminine warm up slowly.", bundle: 'pro' },
        { q: "Why is \"seeking permission\" a mistake?", a: "It turns your partner into a surrogate mother and makes her lose respect for your spine.", bundle: 'pro' },
        { q: "What do all five of these beliefs have in common?", a: "Each one is a way of not being present — speeding up, hiding, defending — and each one feels like protection from the inside.", bundle: 'pro' },
      ]
    },
  ],
  masculine4: [
    {
      name: "The Shadow and the System",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The core concepts of internal mastery and the mechanisms of anxiety.",
      cards: [
        { q: "What are the 5 Dysfunctional Anxiety Strategies?", a: "1. Contraction, 2. Collapse, 3. Defense, 4. Distraction, 5. Blame..", bundle: 'free' },
        { q: "What is the \"maxim\" regarding non-Masculine behavior?", a: "Nearly all non-Masculine behaviors are rooted in one thing: threat..", bundle: 'free' },
        { q: "What does it mean to \"lean in\" energetically?", a: "Subconsciously seeking a sign of approval or validation from the other person..", bundle: 'free' },
        { q: "What is \"Still-Facing\" in a relationship?", a: "When a partner shuts down or gives no reaction, creating a deep sense of disconnection and threat..", bundle: 'pro' },
        { q: "What is a \"Reality Test\"?", a: "Using your physical environment to realize you are safe, decoupling from internal anxiety static..", bundle: 'pro' },
        { q: "Why is \"Fixing the Facts\" a failure of leadership?", a: "Because it's an intellectual response to an emotional need—it fails to meet her heart..", bundle: 'pro' },
        { q: "What is Viktor Frankl's quote about the space?", a: "\"Between stimulus and response there is a space. In that space lies our power to choose.\"", bundle: 'pro' },
        { q: "What defines \"second-order change\"?", a: "Consciously changing the underlying dynamic of a relationship rather than just targeting behavior.", bundle: 'pro' },
      ]
    },
    {
      name: "Core Idea",
      description: "The core principles of restoring your Masculine core to inspire trust, lust, and devotion in a strong woman.\n\n• Respond vs. React — choosing your response rather than living reactively\n• Provide Structure — reducing uncertainty and simplifying decisions\n• Create Safety — providing physical, financial, and emotional safety\n\nMindset: things will be different only when you are different; you are the solution.",
      cards: [
        { q: "What does this pack add to the three elements of the blueprint?", a: "The part underneath them — the anxiety that makes a man react instead of respond in the first place.", bundle: 'free' },
        { q: "Why is anxiety the root of every non-Masculine behaviour?", a: "Because contraction, collapse, defence, distraction and blame are all ways of making an unpleasant feeling stop.", bundle: 'free' },
        { q: "What is \"second-order change\" in this pack?", a: "Changing what happens inside you, rather than changing what you say. The behaviour follows.", bundle: 'free' },
        { q: "Why is a woman's nagging actually a positive signal?", a: "It is an indicator that she is still \"in\" and wants you to step up; silence means she has given up.", bundle: 'free' },
        { q: "Who is responsible for resolving relationship conflict?", a: "You are. Whether or not you are the problem, your Masculine leadership is the solution.", bundle: 'free' },
        { q: "What does \"frame\" mean in a relationship?", a: "The decision-making structure and boundaries; in the absence of yours, she must provide her own.", bundle: 'pro' },
        { q: "What is the primary benefit of gender equality for Polarity?", a: "It allows Polarity to emerge by choice rather than compulsion.", bundle: 'pro' },
        { q: "What happens to a woman when she has to make all the decisions?", a: "She is forced into her Masculine energy, which leads to irritability and sexual closure.", bundle: 'pro' },
      ]
    },
    {
      name: "The Sign-Seeking Pause",
      description: "",
      cards: [
        { q: "What is the core move of \"The Sign-Seeking Pause\"?", a: "Noticing when you are \"leaning in\" for approval and intentionally pausing to regain grounding.", bundle: 'free' },
        { q: "What are you trying to release during this pause?", a: "Your subconscious need for her immediate approval, agreement, or softening.", bundle: 'free' },
        { q: "What does \"leaning in\" energetically mean?", a: "Trying too hard in a conversation to seek validation and make her like you.", bundle: 'free' },
        { q: "What is the primary indicator of a Sign-Seeking impulse?", a: "Anxiously scanning her face for signs of her reaction after you speak or act.", bundle: 'free' },
        { q: "How does this strategy build your Masculine core?", a: "It decouples your emotional well-being from her immediate, transient reactions.", bundle: 'free' },
        { q: "Why is being \"opinionless\" depolarizing to the Feminine?", a: "It leaves her formless and forced into her Masculine to create the structure she needs.", bundle: 'pro' },
        { q: "What is the mindset of \"The Sign-Seeking Pause\"?", a: "Your well-being is dictated by your own values, not by her assessment of you.", bundle: 'pro' },
        { q: "How do you handle a partner's \"still-faced\" non-reaction?", a: "Breathe and settle into the lack of expression without trying to \"fix\" or please.", bundle: 'pro' },
      ]
    },
    {
      name: "Converting Anger to Protection",
      description: "",
      cards: [
        { q: "What is the core move of \"Converting Anger to Protection\"?", a: "Using the intensity of your anger to set clear, respectful boundaries instead of blaming.", bundle: 'free' },
        { q: "Why is anger considered a Masculine ally?", a: "Because it makes you crystal clear on what you love, what you fear, and what you need to protect.", bundle: 'free' },
        { q: "What is the typical dysfunctional reaction to anger?", a: "Blaming, shouting back, or physical and energetic contraction.", bundle: 'free' },
        { q: "What does expressing anger with \"quiet intensity\" convey?", a: "The seriousness of your boundaries while staying cleanly connected to her.", bundle: 'free' },
        { q: "What happens if you chronically suppress your anger?", a: "You won't be able to set boundaries, training people to disregard your needs.", bundle: 'free' },
        { q: "What is the mindset of \"Converting Anger to Protection\"?", a: "You can feel the savagery of anger within you without acting like a savage.", bundle: 'pro' },
        { q: "What lies underneath the surface of your anger?", a: "An underlying fear of something being threatened, and a deep relational need.", bundle: 'pro' },
        { q: "How does sharing the underlying fear of your anger affect your partner?", a: "It bypasses her defenses, halts her attacks, and opens up her compassion.", bundle: 'pro' },
      ]
    },
    {
      name: "The Provocation Reality Test",
      description: "",
      cards: [
        { q: "What is the core move of \"The Provocation Reality Test\"?", a: "Grounding your nervous system by checking your physical environment to realize you are safe.", bundle: 'free' },
        { q: "Why does your body-mind go into a threat state?", a: "It perceives emotional challenges (rejection, shame, abandonment) as survival threats.", bundle: 'free' },
        { q: "What is the physical response to a perceived threat?", a: "Breath constriction, jaw clenching, mind locking, and muscle tension.", bundle: 'free' },
        { q: "How do you perform a basic Reality Test?", a: "Look at the sky, feel the chair beneath you, breathe, and realize you are physically safe.", bundle: 'free' },
        { q: "What does taming your anxiety yield?", a: "A profound, organic change in your ability to respond rather than react under pressure.", bundle: 'free' },
        { q: "What does \"Provocation Meditation\" train?", a: "Your capacity to connect your intentions to your actions while in a triggered state.", bundle: 'pro' },
        { q: "Why is basic meditation alone insufficient for relationship fire?", a: "Because a wise man on a mountain must learn to stay grounded when his partner is breathing fire.", bundle: 'pro' },
        { q: "What are the two steps of doing a Reality Test in conflict?", a: "Recognize the anxiety static, then use your physical environment to decouple from the story.", bundle: 'pro' },
      ]
    },
    {
      name: "Identifying the Shadow Strategy",
      description: "",
      cards: [
        { q: "What is the core move of \"Identifying the Shadow Strategy\"?", a: "Naming which of the five dysfunctional strategies you are using to avoid anxiety.", bundle: 'free' },
        { q: "What are the 5 Dysfunctional Anxiety Strategies?", a: "Contraction, Collapse, Defense, Distraction, and Blame.", bundle: 'free' },
        { q: "What characterizes the \"Contraction\" strategy?", a: "Physical or energetic withdrawal, avoiding eye contact, and using the silent treatment.", bundle: 'free' },
        { q: "What characterizes the \"Collapse\" strategy?", a: "Giving up your needs, sycophantically pleasing, and saying \"whatever you want\" as a victim.", bundle: 'free' },
        { q: "What characterizes the \"Defense\" strategy?", a: "Getting defensive, explaining your motivations, and trying to \"correct the facts\".", bundle: 'free' },
        { q: "What characterizes the \"Distraction\" strategy?", a: "Moving rapidly, phone scrolling, or using addictions to avoid feeling anxiety.", bundle: 'pro' },
        { q: "What is the mindset of \"Identifying the Shadow Strategy\"?", a: "These behaviors are just your body-mind's unconscious way to make the anxiety stop.", bundle: 'pro' },
        { q: "Why does naming your shadow strategy take away its power?", a: "It brings conscious awareness to an automatic reaction, allowing you to return to leadership.", bundle: 'pro' },
      ]
    },
    {
      name: "Passing the Leader's Test",
      description: "",
      cards: [
        { q: "What is the core move of \"Passing the Leader's Test\"?", a: "Staying grounded and holding your pose when her intensity increases after you set a limit.", bundle: 'free' },
        { q: "Why does a woman test her partner's solidity?", a: "To ascertain that he is worthy of leading, so she can safely open her heart and body.", bundle: 'free' },
        { q: "What is \"token resistance\"?", a: "A mild, playful testing of your sureness where you should gently but firmly persist.", bundle: 'free' },
        { q: "Why shouldn't you look for immediate reward when passing a test?", a: "Because she may appear angrier initially; her trust and opening will come later.", bundle: 'free' },
        { q: "What does \"holding the pose\" mean?", a: "Maintaining your steady stance and connection without caving, getting defensive, or running.", bundle: 'free' },
        { q: "What is the ultimate consequence when a man fails his partner's tests?", a: "She stays in her head, loses respect, and refuses to open sexually.", bundle: 'pro' },
        { q: "Why is a partner's emotional test an opportunity?", a: "It is an avenue to display your Masculine solidity and earn her deep devotion.", bundle: 'pro' },
        { q: "What is the mindset behind \"Passing the Leader's Test\"?", a: "The day she stops calling you out is the day she has given up on you.", bundle: 'pro' },
      ]
    },
    {
      name: "Collections",
      description: "The three collections in this pack, and what each one makes you choose between:\n\n• The Internal Anchor — mastering your internal state: do you pause for sign-seeking, ground with a reality test, or identify your shadow?\n• Protective Leadership — external boundaries: do you convert anger to protection, hold your pose, or provide structure?\n• Choosing Solidity — daily friction: do you reset your approval-seeking, state your preferences, or stand strong?\n\nOne question decides nearly all of it: what did she just do?",
      cards: [
        { q: "What are the three collections in this pack?", a: "The Internal Anchor, Protective Leadership, and Choosing Solidity.", bundle: 'pro' },
        { q: "What is the core focus of \"The Internal Anchor\"?", a: "Nailing your internal alignment and grounding before attempting to lead externally.", bundle: 'pro' },
        { q: "What is the core focus of \"Protective Leadership\"?", a: "Establishing clear boundaries and holding the container of the relationship safe.", bundle: 'pro' },
        { q: "What is the core focus of \"Choosing Solidity\"?", a: "Overcoming daily approval-seeking habits by choosing conscious Masculine posture.", bundle: 'pro' },
        { q: "When do you choose \"The Sign-Seeking Pause\" over \"Passing the Leader's Test\"?", a: "When you are proactively seeking her approval rather than holding your ground under her active storm.", bundle: 'pro' },
        { q: "When do you choose \"Converting Anger to Protection\"?", a: "When her behavior crosses your boundaries and you need the clean energy of anger to protect the relationship.", bundle: 'pro' },
        { q: "Why must internal grounding precede external leadership?", a: "Because without an internal anchor, your external direction will feel like anxious control.", bundle: 'pro' },
        { q: "What do all three collections train you to do?", a: "Stop seeking validation and start serving the relationship powerfully through grounded presence.", bundle: 'pro' },
      ]
    },
    {
      name: "Sequences",
      description: "The three sequences in this pack, and the order each one runs in:\n\n• Taming the Trigger — Sign-Seeking Pause → Reality Test → Identifying Shadow → Grounded Lead\n• Passing the Solidity Test — Provocation Reality Test → Identifying Shadow → Passing the Leader's Test\n• Reclaiming the Frame — Sign-Seeking Pause → Converting Anger to Protection → Passing the Leader's Test\n\nIn each sequence, the order of the steps is what re-establishes safety and polarity.",
      cards: [
        { q: "What are the three sequences in this pack?", a: "Taming the Trigger, Passing the Solidity Test, and Reclaiming the Frame.", bundle: 'pro' },
        { q: "Why does \"Taming the Trigger\" start with \"The Sign-Seeking Pause\"?", a: "Because you must first stop seeking her validation before you can ground your nervous system.", bundle: 'pro' },
        { q: "What is the order in \"Passing the Solidity Test\"?", a: "The Provocation Reality Test, then Identifying the Shadow Strategy, and finally Passing the Leader's Test.", bundle: 'pro' },
        { q: "Why does \"Passing the Solidity Test\" end with \"Passing the Leader's Test\"?", a: "Because after grounding and stopping your defenses, you must stand firm in her active storm.", bundle: 'pro' },
        { q: "What is the order in \"Reclaiming the Frame\"?", a: "The Sign-Seeking Pause, then Converting Anger to Protection, and finally Passing the Leader's Test.", bundle: 'pro' },
        { q: "Why does \"Converting Anger to Protection\" come before \"Passing the Leader's Test\" in \"Reclaiming the Frame\"?", a: "Because you must set a clean boundary first before you can hold the pose against her reaction.", bundle: 'pro' },
        { q: "What does \"Passing the Solidity Test\" train you to do?", a: "Contain her active emotional tsunamis by staying grounded and unmoved.", bundle: 'pro' },
        { q: "What does \"Reclaiming the Frame\" train you to do?", a: "Stop caving to her micromanagement and assert your own desires and limits cleanly.", bundle: 'pro' },
      ]
    },
    {
      name: "Challenges",
      description: "The five challenges to master in this pack:\n\n• The Permission Trap — when you find yourself editing your truth or caving to stay safe\n• The Emotional Tsunami — when she blasts you with chaotic emotions and blame\n• High-Alert Panic — when your own nervous system goes into survival mode\n• The Disrespect Test — when she tests your boundaries with shaming or sarcasm\n• Chronic Avoidance — when you use phone scrolling or silence to dodge the fire\n\nEach category has its own way of testing your Masculine solidity.",
      cards: [
        { q: "What are the five challenges in this pack?", a: "The Permission Trap, The Emotional Tsunami, High-Alert Panic, The Disrespect Test, and Chronic Avoidance.", bundle: 'pro' },
        { q: "What is the core danger during \"The Permission Trap\"?", a: "Becoming an emasculated nice guy who abdicates his leadership to avoid conflict.", bundle: 'pro' },
        { q: "How do you handle \"The Emotional Tsunami\"?", a: "By grounding your body and seeing the pain underneath her blame instead of correcting facts.", bundle: 'pro' },
        { q: "How do you handle \"High-Alert Panic\"?", a: "By using a Reality Test to calm the body-mind's survival panic.", bundle: 'pro' },
        { q: "How do you handle \"The Disrespect Test\"?", a: "By using Converting Anger to Protection to establish non-negotiable boundaries cleanly.", bundle: 'pro' },
        { q: "How do you handle \"Chronic Avoidance\"?", a: "By identifying your shadow strategies (Distraction, Contraction) and choosing presence.", bundle: 'pro' },
        { q: "What is she really seeking when she throws a challenge at you?", a: "Evidence that you are solid enough to handle her full emotional experience without collapsing.", bundle: 'pro' },
        { q: "Why is \"Fixing the Facts\" a major mistake in challenges?", a: "Because addressing her emotional expression with cognitive logic never works.", bundle: 'pro' },
      ]
    },
    {
      name: "Mindset",
      description: "The five mindsets you practise in this pack:\n\n• The Goal is Leadership, not Agreement — leading her to a better place even if she resists\n• Validation — realizing your well-being is independent of her approval\n• Anger — using anger as a clean force to protect the relationship's culture\n• Safety — realizing her emotional weather is just energy, not a threat\n• Shadows — spotting and stopping your passive Nice Guy habits\n\nIn every one, the belief that gets in the way feels like safety from the inside.",
      cards: [
        { q: "What are the five mindsets in this pack?", a: "The Goal is Leadership not Agreement, Validation, Anger, Safety, and Shadows.", bundle: 'pro' },
        { q: "What does \"The Goal is Leadership, not Agreement\" teach you?", a: "That your job is to lead the couple out of fighting, regardless of her immediate reaction.", bundle: 'pro' },
        { q: "What is the core block of the \"Validation\" mindset?", a: "Scanning her face for a sign of approval, which turns you into an anxious boy.", bundle: 'pro' },
        { q: "What is the core block of the \"Anger\" mindset?", a: "Believing that anger is toxic, which leaves you without boundaries or backbone.", bundle: 'pro' },
        { q: "What is the core block of the \"Safety\" mindset?", a: "Viewing her storm as a threat to your worth, which triggers defensive logic.", bundle: 'pro' },
        { q: "What is the core block of the \"Shadows\" mindset?", a: "Believing that silence, phone scrolling, or caving keeps the relationship safe.", bundle: 'pro' },
        { q: "Why does Nice Guy pleasing kill polarity?", a: "It makes you needless and harmless, which causes her to lose all sexual respect.", bundle: 'pro' },
        { q: "What do all five of these beliefs protect you from?", a: "The discomfort of not knowing whether she approves. Each one buys that relief and pays for it in respect.", bundle: 'pro' },
      ]
    },
  ],
  masculine5: [
    {
      name: "The Roles of Strength",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theoretical foundation of the Provider, Protector, and the Gift of Structure.",
      cards: [
        { q: "What are the three core elements of the Blueprint?", a: "1. Respond vs. React, 2. Provide Structure, 3. Create Safety.", bundle: 'free' },
        { q: "What is the \"Provider\" role in this context?", a: "Delivering stability (financial, logistical, emotional) for those under your care.", bundle: 'free' },
        { q: "What happens if a man does not provide \"Frame\"?", a: "The woman is forced into her Masculine to provide security for herself, killing Polarity.", bundle: 'free' },
        { q: "Why is \"Tracking\" essential for love?", a: "Because the Feminine feels loved when she feels she is a priority in the man's field of attention.", bundle: 'pro' },
        { q: "What is the \"Trifecta\" of emotional oxygen?", a: "Empathy, Responsibility, and Tangible Action.", bundle: 'pro' },
        { q: "What is the primary complaint of women in the sexual arena?", a: "That men go too fast—they don't take the time to lead her slowly into arousal.", bundle: 'pro' },
        { q: "Why does an equal partnership still need a leader?", a: "Because someone has to carry the logistics and the decisions. Left unclaimed, that job falls to her, and the polarity goes with it.", bundle: 'pro' },
        { q: "What does \"refusing the rejection\" mean during conflict?", a: "Staying in connection and heart instead of withdrawing or getting defensive when she is angry.", bundle: 'pro' },
      ]
    },
    {
      name: "Core Idea",
      description: "The Masculine Blueprint Part 5, designed to build your role as an organizing force through logistics, safety, and container.\n\n• Drive the Decision — simplify decisions\n• Handle the Burden — take ownership of difficult tasks\n• Track her Priorities — keep her in your field of attention\n• Stabilize the Frame — deliver financial and structural safety\n• Establish the Container — set relational rules of engagement\n\nThey move you from passive drifting into grounded leadership.",
      cards: [
        { q: "What is the primary purpose of the fifth part of the blueprint?", a: "To step into your role as an organizing force, providing structure and safety so she can relax.", bundle: 'free' },
        { q: "What are the three core roles of Masculine strength?", a: "The Provider (stability), the Protector (physical safety), and the Leader (structure).", bundle: 'free' },
        { q: "Why is being \"easy-going\" or \"opinionless\" depolarizing?", a: "It leaves her formless and forced into her Masculine to create the structure she needs.", bundle: 'free' },
        { q: "Who is responsible for leading the couple out of conflict?", a: "You are. Whether or not you are the problem, your Masculine leadership is the solution.", bundle: 'free' },
        { q: "Why does this pack put logistics before feelings?", a: "Because someone braced for the next unpaid bill cannot relax into anything else. The floor comes first.", bundle: 'free' },
        { q: "What is the cost of being the easy-going partner?", a: "Every decision you decline lands on her, and the pile is what makes her hard.", bundle: 'pro' },
        { q: "Why is a woman's nagging actually a positive signal?", a: "It is her clumsy expression of longing for you to step up; silence means she has given up.", bundle: 'pro' },
        { q: "What does this pack ask you to take over?", a: "The hard things — the systems, the money, the calendar, the rules of engagement — as an act of care rather than a chore.", bundle: 'pro' },
      ]
    },
    {
      name: "Drive the Decision",
      description: "",
      cards: [
        { q: "What is the core move of \"Drive the Decision\"?", a: "Proactively taking responsibility for moving a situation from uncertainty to a conclusion.", bundle: 'free' },
        { q: "Why does this strategy work?", a: "It relieves her of the decision-making burden, allowing her nervous system to relax.", bundle: 'free' },
        { q: "What is the \"Narrowing the Scope\" variant?", a: "Doing the research first and presenting her with 2-3 clear options.", bundle: 'free' },
        { q: "What is the \"Calling the Ball\" variant?", a: "Making a firm executive decision when she is stuck in neurosis or indecision.", bundle: 'free' },
        { q: "What is the mindset of \"Drive the Decision\"?", a: "Your clarity is a gift of structure that creates order from disorder.", bundle: 'free' },
        { q: "Why should you have an opinion even when you think you don't care?", a: "Because her question is a bid for your clarity to help her over the tipping point of uncertainty.", bundle: 'pro' },
        { q: "What is the \"backseat driving\" test?", a: "Settle into your frame and assure her that you have the logistics handled so she can relax.", bundle: 'pro' },
        { q: "How does this strategy build deep relational trust?", a: "It proves to her nervous system that you are a proactive leader who handles things.", bundle: 'pro' },
      ]
    },
    {
      name: "Handle the Burden",
      description: "",
      cards: [
        { q: "What is the core move of \"Handle the Burden\"?", a: "Identifying logistical \"hard things\" that she finds draining and taking full ownership of them.", bundle: 'free' },
        { q: "Why does this strategy work?", a: "Because the Feminine feels abandoned when left to deal with difficult systems alone; your action provides emotional oxygen.", bundle: 'free' },
        { q: "What is the \"Logical Takeover\" variant?", a: "Handling tasks involving complex systems, red tape, or paperwork.", bundle: 'free' },
        { q: "What is the \"Physical Fix\" variant?", a: "Proactively maintaining the physical container of the relationship, such as the home or car.", bundle: 'free' },
        { q: "What is the mindset of \"Handle the Burden\"?", a: "You lead by serving her well-being through proactive, action-oriented love.", bundle: 'free' },
        { q: "Why is procrastination on commitments a massive trust killer?", a: "It signals that her needs are not in your field of attention and she cannot trust your word.", bundle: 'pro' },
        { q: "What is the \"Trifecta\" of emotional oxygen after a failure?", a: "Empathy first, taking responsibility second, and then offering a tangible action.", bundle: 'pro' },
        { q: "How does taking over chores help her transition out of work-mind?", a: "It gets her out of her head and back into her body, creating space for polarity.", bundle: 'pro' },
      ]
    },
    {
      name: "Track her Priorities",
      description: "",
      cards: [
        { q: "What is the core move of \"Track her Priorities\"?", a: "Keeping her emotional and logistical world in your field of attention by proactively checking in.", bundle: 'free' },
        { q: "Why does this strategy work?", a: "Because the Feminine heart equates being remembered with being loved; it proves she is a priority.", bundle: 'free' },
        { q: "What is the \"Emotional Tracking\" variant?", a: "Checking in on her heart, her relationships, and her internal stressors.", bundle: 'free' },
        { q: "What is the \"Project Tracking\" variant?", a: "Checking in on her goals, her career challenges, and the details she is currently pursuing.", bundle: 'free' },
        { q: "What is the mindset of \"Track her Priorities\"?", a: "To love her is to keep her needs and her world top-of-mind.", bundle: 'free' },
        { q: "Why are verbal expressions of love insufficient for the Feminine?", a: "Because they don't take forethought or planning; she needs to see love demonstrated in action.", bundle: 'pro' },
        { q: "What does a woman feel when her partner never tracks her world?", a: "She feels unloved, lonely, unpartnered, and forgotten in their life together.", bundle: 'pro' },
        { q: "How do you track her priorities during a highly busy work season?", a: "Commit to a brief, daily 5-minute sync in the morning to keep her world current in your mind.", bundle: 'pro' },
      ]
    },
    {
      name: "Stabilize the Frame",
      description: "",
      cards: [
        { q: "What is the core move of \"Stabilize the Frame\"?", a: "Fulfilling the role of the Provider by making responsible, long-term choices that ensure security.", bundle: 'free' },
        { q: "Why does this strategy work?", a: "Her system cannot relax into playfulness or sexuality if she feels the foundation of her life is unstable.", bundle: 'free' },
        { q: "What is the \"Financial Lead\" variant?", a: "Taking complete ownership of savings, debt, and investments.", bundle: 'free' },
        { q: "What is the \"Security Plan\" variant?", a: "Proactively addressing her fears about safety, housing, or the future.", bundle: 'free' },
        { q: "What is the mindset of \"Stabilize the Frame\"?", a: "Delivering stability is an act of deep Masculine love and responsibility.", bundle: 'free' },
        { q: "What is the \"shadow side\" of being a good Provider?", a: "Over-identifying with work such that you believe it excuses you from other relationship needs.", bundle: 'pro' },
        { q: "Why is a strong \"No\" necessary to have a trustworthy \"Yes\"?", a: "Because caving to unreasonable demands out of nice-guy pleasing compromises overall stability.", bundle: 'pro' },
        { q: "How should you handle a temporary job loss or layoff?", a: "Calm her panic by showing you have a plan and a buffer, keeping the frame stable.", bundle: 'pro' },
      ]
    },
    {
      name: "Establish the Container",
      description: "",
      cards: [
        { q: "What is the core move of \"Establish the Container\"?", a: "Defining the culture or the physical and emotional boundaries within which the relationship operates.", bundle: 'free' },
        { q: "Why does this strategy work?", a: "The Feminine feels safer when there is a known container for her emotions and for the couple's time.", bundle: 'free' },
        { q: "What is the \"Conflict Rules\" variant?", a: "Establishing clear rules for how you will handle arguments, such as no sleeping disconnected.", bundle: 'free' },
        { q: "What is the \"Prophylactic Frame\" variant?", a: "Setting a positive, firm intention before a potentially stressful event or trip.", bundle: 'free' },
        { q: "What is the mindset of \"Establish the Container\"?", a: "Leading her into a healthy container is an act of deep love for the relationship.", bundle: 'free' },
        { q: "What is the \"No Fighting\" container?", a: "Setting a firm boundary against arguments on date nights or during designated connection times.", bundle: 'pro' },
        { q: "How do you handle verbal insults or name-calling during arguments?", a: "Pause the fight and state clearly that you won't participate in a disrespectful conversation.", bundle: 'pro' },
        { q: "Why is setting boundaries considered a Masculine gift?", a: "Because it protects the relationship's dignity and allows her to relax within your frame.", bundle: 'pro' },
      ]
    },
    {
      name: "Collections",
      description: "The three collections in this pack, and what each one makes you choose between:\n\n• The Lead on Logistics — external world: do you decide, handle the task, or secure the finances?\n• Providing Action-Oriented Love — daily safety: do you track her world or take tasks off her plate?\n• Holding the Container — connection boundaries: do you track her world, secure the frame, or hold limits?\n\nOne question decides nearly all of it: what did she just do?",
      cards: [
        { q: "What are the three collections in this pack?", a: "The Lead on Logistics, Providing Action-Oriented Love, and Holding the Container.", bundle: 'pro' },
        { q: "What is the core purpose of \"The Lead on Logistics\"?", a: "To act as the organizing force that creates order and security in the external world.", bundle: 'pro' },
        { q: "What does \"Providing Action-Oriented Love\" teach you?", a: "That tracking her priorities and handling her burdens serve as powerful proxies for love.", bundle: 'pro' },
        { q: "What is the focus of \"Holding the Container\"?", a: "Navigating emotional safety and relationship boundaries through presence, frame, and limits.", bundle: 'pro' },
        { q: "When should you choose \"Establish the Container\" over \"Track her Priorities\"?", a: "When her anxious behavior crosses into disrespectful sniping or rule-breaking.", bundle: 'pro' },
        { q: "When should you choose \"Stabilize the Frame\" over \"Handle the Burden\"?", a: "When her anxiety is about long-term financial security rather than an immediate logistical task.", bundle: 'pro' },
        { q: "Why does \"The Lead on Logistics\" include \"Drive the Decision\"?", a: "Because driving decisions cuts through her decision fatigue and simplifies her complexity.", bundle: 'pro' },
        { q: "What is the main trap in Collections?", a: "Remaining opinionless and passive, which abdicates your role and kills polarity.", bundle: 'pro' },
      ]
    },
    {
      name: "Sequences",
      description: "The three sequences in this pack, and the order each one runs in:\n\n1. From Overwhelmed to Relaxed — Shared Reality → Handle the Burden → Drive the Decision\n2. Securing the Foundation — Track her Priorities → Stabilize the Frame → Establish the Container\n3. Leading the Connection — Track her Priorities → Drive the Decision → Establish the Container\n\nIn each one, the order of the steps is what re-establishes safety and polarity.",
      cards: [
        { q: "What are the three sequences in this pack?", a: "From Overwhelmed to Relaxed, Securing the Foundation, and Leading the Connection.", bundle: 'pro' },
        { q: "Why does \"From Overwhelmed to Relaxed\" start with \"Shared Reality\"?", a: "To identify her logistical stress and make her feel understood before taking over.", bundle: 'pro' },
        { q: "What is the final step in \"From Overwhelmed to Relaxed\"?", a: "Drive the Decision, to provide clear structure and options for what to do next.", bundle: 'pro' },
        { q: "What is the order in \"Securing the Foundation\"?", a: "Track her Priorities, then Stabilize the Frame, and finally Establish the Container.", bundle: 'pro' },
        { q: "Why does \"Stabilize the Frame\" precede \"Establish the Container\" in \"Securing the Foundation\"?", a: "Because offering structural safety must come before you can set firm relational rules.", bundle: 'pro' },
        { q: "What is the order in \"Leading the Connection\"?", a: "Track her Priorities, then Drive the Decision, and finally Establish the Container.", bundle: 'pro' },
        { q: "What does \"Leading the Connection\" train you to do?", a: "Transition her from a stressed work-mind into a relaxed, phone-free space of intimacy.", bundle: 'pro' },
        { q: "Why does \"From Overwhelmed to Relaxed\" succeed?", a: "Because taking charge of details is a tangible gift that melts her anxious control.", bundle: 'pro' },
      ]
    },
    {
      name: "Challenges",
      description: "The five challenges to master in this pack:\n\n• The Decision Vacuum — when she is forced into her Masculine because you are being passive\n• Relational Disconnect — when she goes flat, silent, or cold\n• Logistical Overwhelm — when she is drowning in hard logistical systems\n• Backseat Micromanagement — when she tries to micromanage you out of anxiety\n• Future Panic — when she feels financially or structurally unsafe\n\nEach category starts from her behavior rather than from your strategy.",
      cards: [
        { q: "What are the five challenges in this pack?", a: "The Decision Vacuum, Relational Disconnect, Logistical Overwhelm, Backseat Micromanagement, and Future Panic.", bundle: 'pro' },
        { q: "How do you handle \"The Decision Vacuum\"?", a: "By stepping up to Drive the Decision and Handle the Burden rather than saying \"whatever you want.\"", bundle: 'pro' },
        { q: "What is the core danger during \"Relational Disconnect\"?", a: "Reacting with your own contraction, phone-scrolling, or silent treatment, which destroys trust.", bundle: 'pro' },
        { q: "How do you resolve \"Logistical Overwhelm\"?", a: "By taking full ownership of difficult systems using the Handle the Burden strategy.", bundle: 'pro' },
        { q: "What is she really testing in \"Backseat Micromanagement\"?", a: "Your solidity — whether you will hold your Masculine frame or cave to her anxious control.", bundle: 'pro' },
        { q: "How do you escape \"Future Panic\"?", a: "By using Stabilize the Frame to take financial charge and Track her Priorities to check her worries.", bundle: 'pro' },
        { q: "Which strategy handles both \"The Decision Vacuum\" and \"Backseat Micromanagement\"?", a: "Drive the Decision—taking charge of choices and navigation so she can relax.", bundle: 'pro' },
        { q: "Why does she throw these challenges at you?", a: "Because she has learned not to expect your lead, or wants to ascertain that you are worthy of trust.", bundle: 'pro' },
      ]
    },
    {
      name: "Mindset",
      description: "The five mindsets you practise in this pack:\n\n• Stability is a Gift — reframing the Provider role as a proactive gift of love\n• My Attention is Love — realizing that tracking her priorities builds deep safety\n• Nice Guy — realizing that hiding your needs is manipulative and kills polarity\n• Conflict — realizing her emotional weather is just energy, not a threat\n• Equality — realizing that an equal partnership still needs someone to lead\n\nEach mindset shifts you from reactive avoidance to grounded presence.",
      cards: [
        { q: "What are the five mindsets in this pack?", a: "Stability is a Gift, My Attention is Love, Nice Guy, Conflict, and Equality.", bundle: 'pro' },
        { q: "What does \"Stability is a Gift\" teach you?", a: "That providing structure is a proactive gift of leadership, not a burdensome duty.", bundle: 'pro' },
        { q: "What is the core block of \"My Attention is Love\"?", a: "Believing that the \"little things\" like forgotten milk don't matter to her heart.", bundle: 'pro' },
        { q: "What is the core truth behind \"Nice Guy\"?", a: "That hiding your needs turns you into an approval-seeking boy and kills her respect.", bundle: 'pro' },
        { q: "What is the truth behind \"Conflict\"?", a: "That her emotional outbursts are just weather, and you are physically safe in the fire.", bundle: 'pro' },
        { q: "What is the rule of \"Equality\"?", a: "An equal partnership is not a leaderless one; offering direction is service, not dominance.", bundle: 'pro' },
        { q: "Why does \"we are equal\" become a problem in this pack?", a: "Because equal does not mean leaderless. The work still has to be carried, and declining it does not make it disappear.", bundle: 'pro' },
        { q: "What do all five of these beliefs have in common?", a: "Each one lets you off the hook for leading, and each one sounds like fairness or humility from the inside.", bundle: 'pro' },
      ]
    },
  ],
  masculine6: [
    {
      name: "Somatic Mechanics",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theoretical foundation of embodiment and nervous system regulation.",
      cards: [
        { q: "What is the primary cause of reactivity?", a: "A sense of threat which triggers anxiety in the body-mind.", bundle: 'free' },
        { q: "Why is embodiment more effective than \"knowledge\"?", a: "Knowledge happens in the mind; embodiment changes the nervous system.", bundle: 'free' },
        { q: "What is the \"Reality Test\"?", a: "Using your senses (sun, birds, ground) to verify that you are physically safe.", bundle: 'free' },
        { q: "What are the four categories of somatic practice?", a: "1. Meditation, 2. Breath, 3. Intensity Expanders, 4. Movement.", bundle: 'pro' },
        { q: "What is the \"Watcher\"?", a: "The conscious, unchanging part of you that can observe thoughts without being run by them.", bundle: 'pro' },
        { q: "What is \"IAM\" (Intentioned Assertive Movement)?", a: "A practice of making fully conscious choices in movement to build deliberateness.", bundle: 'pro' },
        { q: "Why does modern life trap men in their heads?", a: "Because the constant flow of information through phones and screens overdevelops the thinking mind like an over-exercised muscle.", bundle: 'pro' },
        { q: "How does waking up the body break the tyranny of the mind?", a: "Physical sensations crowd out the thoughts in your field of attention, giving you a tangible reality to focus on.", bundle: 'pro' },
      ]
    },
    {
      name: "Core Idea",
      description: "The theoretical foundation of somatic mechanics and nervous system regulation to restore your Masculine core.\n\n• Respond vs. React — choosing your response instead of living reactively to threat\n• Provide Structure — taking charge to organize the environment and reduce uncertainty\n• Create Safety — making her feel physically, financially, and emotionally safe\n\nMindset: things will be different only when you are different; you are the solution.",
      cards: [
        { q: "What is the space this pack is built on?", a: "The gap between what happens to you and what you do about it. Every strategy here widens that gap.", bundle: 'free' },
        { q: "What is the main cause of non-Masculine behaviors?", a: "A subconscious sense of threat that triggers anxiety in the body-mind.", bundle: 'free' },
        { q: "Why does this pack come last in the series?", a: "Because the other five tell you what to do. This one builds the nervous system that can actually do it.", bundle: 'free' },
        { q: "Why can't you fake Masculine leadership?", a: "Because women are highly perceptive and will see right through superficial behaviors; true power must be built on the inside.", bundle: 'free' },
        { q: "What does a reactive nervous system cost you in a conflict?", a: "The choice. Under threat the body answers before you do, and the answer is contract, collapse, defend or blame.", bundle: 'free' },
        { q: "What defines a strong Masculine core?", a: "The capacity of your nervous system to tolerate intensity and anxiety without collapsing or defending.", bundle: 'pro' },
        { q: "How does embodiment save relationships?", a: "It keeps you present during her emotional storms, allowing you to contain her intensity rather than correcting her facts.", bundle: 'pro' },
        { q: "Why must you work on yourself rather than the relationship?", a: "Because restoring your Masculine core organically induces her to relax back into her Feminine state.", bundle: 'pro' },
      ]
    },
    {
      name: "The Watcher",
      description: "",
      cards: [
        { q: "What is the core move of \"The Watcher\"?", a: "Intentionally separating from your thoughts to observe them as arising phenomena rather than reality.", bundle: 'free' },
        { q: "What does \"The Watcher\" prevent?", a: "It prevents your reactive defense mechanisms from taking over your system during conflict.", bundle: 'free' },
        { q: "What are you observing during \"The Watcher\"?", a: "Your automatic mental stories, labeling loops, and the physiological impulse to contract, collapse, or defend.", bundle: 'free' },
        { q: "Why does observing a thought take away its power?", a: "Because you realize you are the unchanging observer of the thought, not the thought itself.", bundle: 'free' },
        { q: "What is the \"crazy\" label loop?", a: "A story your mind generates to protect you from the anxiety of her active emotional storm.", bundle: 'free' },
        { q: "How do you perform \"The Watcher's check\" during a code red conflict?", a: "You recognize that your body feels under threat, but verify that you are physically safe and choose to stay present.", bundle: 'pro' },
        { q: "What is the relationship between \"The Watcher\" and presence?", a: "It brings you out of past and future narratives, allowing you to anchor your attention on what is happening in the now.", bundle: 'pro' },
        { q: "What is the consequence of failing to step into \"The Watcher\"?", a: "You get swept up in her accusations, get defensive, and try to correct her facts.", bundle: 'pro' },
      ]
    },
    {
      name: "Ujjayi Breath",
      description: "",
      cards: [
        { q: "What is the core move of \"Ujjayi Breath\"?", a: "Slowing down the flow of breath with a slight constriction of the throat to create an audible sound.", bundle: 'free' },
        { q: "Why is Ujjayi breath considered your secret weapon?", a: "It settles your body chemistry in real-time and breaks the monopoly of your thoughts.", bundle: 'free' },
        { q: "What does deep, conscious breathing focus your attention on?", a: "It gives you a strong, physical sensation in the body to crowd out mental narratives.", bundle: 'free' },
        { q: "How does a systemic unclenched body affect anxiety?", a: "It releases the physical tension that stores and perpetuates anxiety in the nervous system.", bundle: 'free' },
        { q: "When should you use Ujjayi breathing?", a: "Anytime you feel irritation rising, before starting a difficult talk, or in front of an upset partner.", bundle: 'free' },
        { q: "Why is Ujjayi breath crucial during intimacy?", a: "It slows down your nervous system, preventing rapid, \"bird-like\" movements.", bundle: 'pro' },
        { q: "How does leading her in breathing help her?", a: "It synchronizes your nervous systems and invites her Feminine heart to relax and open.", bundle: 'pro' },
        { q: "What are you doing with your muscles during Ujjayi breath?", a: "Performing a full body scan to notice and deliberately soften clenched areas.", bundle: 'pro' },
      ]
    },
    {
      name: "Provocation Visualization",
      description: "",
      cards: [
        { q: "What is the core move of \"Provocation Visualization\"?", a: "Intentionally stoking and amplifying triggering thoughts in meditation to practice staying grounded.", bundle: 'free' },
        { q: "Why does this strategy work?", a: "It trains your nervous system's capacity to handle anxiety in a simulated environment, which maps over to real life.", bundle: 'free' },
        { q: "What triggers do you stoke during Provocation Visualization?", a: "Scenarios of her anger, rejection, abandonment, or career failure.", bundle: 'free' },
        { q: "What are you practicing while triggered in this meditation?", a: "Soothing yourself, recognizing your emotions, holding your posture, and setting boundaries.", bundle: 'free' },
        { q: "What is the goal of Provocation Visualization?", a: "To connect your conscious intention (the man you want to be) to your action when in a triggered state.", bundle: 'free' },
        { q: "What is the \"drowning\" visualization?", a: "Imagining yourself unable to escape water, practicing how to mentally surrender into the panic.", bundle: 'pro' },
        { q: "How does \"dying with dignity\" in visualization help you in conflict?", a: "It grows your capacity to resist the voice that screams at you to defend yourself or run away from her attacks.", bundle: 'pro' },
        { q: "Why is basic meditation on a mountain insufficient?", a: "Because it is easy to be peaceful in a vacuum; you must learn to ground yourself in the active fire of interrelating.", bundle: 'pro' },
      ]
    },
    {
      name: "Conscious Choice (IAM)",
      description: "",
      cards: [
        { q: "What is the core move of \"Conscious Choice (IAM)\"?", a: "Explicitly choosing your next movement or word in your mind before you perform it.", bundle: 'free' },
        { q: "What does \"IAM\" stand for?", a: "Intentioned Assertive Movement, drawing from Tai Chi and slow, deliberate visualization.", bundle: 'free' },
        { q: "Why is deliberateness a Masculine quality?", a: "It shows that you are in your power and moving with control, rather than reacting on autopilot.", bundle: 'free' },
        { q: "What is the \"bird-like\" movement trap?", a: "Rapid, frantic movements and speech fueled by social anxiety and the need for approval.", bundle: 'free' },
        { q: "How does IAM train you to lead?", a: "By making you comfortable with the sensation of asserting your will and directing others.", bundle: 'free' },
        { q: "Why is posture important in IAM?", a: "Because slouching is an unconscious way of trying to become invisible; upright posture asserts presence.", bundle: 'pro' },
        { q: "What role does simulated eye contact play in IAM?", a: "It trains you to maintain full presence while asserting yourself on another.", bundle: 'pro' },
        { q: "How does deliberate touch affect intimacy?", a: "It provides slow, steady pressure that makes her feel safe and lets polarity emerge.", bundle: 'pro' },
      ]
    },
    {
      name: "Collections",
      description: "The three collections in this pack, and what each one makes you choose between:\n\n• The Somatic Toolkit — daily presence: do you observe the thought, settle with breath, or make a conscious choice?\n• Training for Intensity — capacity building: do you visualize the trigger or expand your physical tolerance?\n• Stop, Breathe, and Lead — active conflict: do you step outside the story, regulate your chemistry, or assert your frame?\n\nOne question decides nearly all of it: what did she just do?",
      cards: [
        { q: "What are the three collections in this pack?", a: "The Somatic Toolkit, Training for Intensity, and Stop, Breathe, and Lead.", bundle: 'pro' },
        { q: "What does \"The Somatic Toolkit\" train you to manage?", a: "Your immediate physical presence and grounding during daily interactions.", bundle: 'pro' },
        { q: "What is the focus of \"Training for Intensity\"?", a: "Expanding your nervous system muscle by deliberately exposing yourself to discomfort.", bundle: 'pro' },
        { q: "What is the focus of \"Stop, Breathe, and Lead\"?", a: "Navigating active, high-intensity conflict with physical regulation and deliberate action.", bundle: 'pro' },
        { q: "When do you choose \"The Watcher\" over \"Conscious Choice (IAM)\"?", a: "When you are caught in a mental story and need to observe it before attempting to act.", bundle: 'pro' },
        { q: "When do you choose \"Ujjayi Breath\" over \"The Watcher\"?", a: "When your heart is racing and you need to physically settle your body chemistry first.", bundle: 'pro' },
        { q: "Why does \"Stop, Breathe, and Lead\" include \"Conscious Choice (IAM)\"?", a: "Because after stepping outside the story and breathing, you must deliberately lead.", bundle: 'pro' },
        { q: "What is the default Collections strategy when you are stuck?", a: "The Watcher—observing the reactive story and returning to physical senses.", bundle: 'pro' },
      ]
    },
    {
      name: "Sequences",
      description: "The three sequences in this pack, and the order each one runs in:\n\n1. The Grounded Response — The Watcher → Ujjayi Breath → Reality Test → Conscious Choice\n2. Proactive Presence — Provocation Visualization → Ujjayi Breath → Conscious Choice (IAM)\n3. The Unswayable Lead — The Watcher → Ujjayi Breath → Conscious Choice (IAM)\n\nIn each one, the order of the steps is what re-establishes safety and polarity.",
      cards: [
        { q: "What are the three sequences in this pack?", a: "The Grounded Response, Proactive Presence, and The Unswayable Lead.", bundle: 'pro' },
        { q: "What is the order in \"The Grounded Response\"?", a: "The Watcher, then Ujjayi Breath, then Reality Test, and finally Conscious Choice.", bundle: 'pro' },
        { q: "Why does \"The Watcher\" come first in \"The Grounded Response\"?", a: "Because you must stop the reactive mental story before you can settle your physical chemistry.", bundle: 'pro' },
        { q: "What is the order in \"Proactive Presence\"?", a: "Provocation Visualization, then Ujjayi Breath, and finally Conscious Choice (IAM).", bundle: 'pro' },
        { q: "Why does \"Provocation Visualization\" precede \"Ujjayi Breath\" in \"Proactive Presence\"?", a: "To stoke the trigger in your mind first, so you can practice breathing through active intensity.", bundle: 'pro' },
        { q: "What is the order in \"The Unswayable Lead\"?", a: "The Watcher, then Ujjayi Breath, and finally Conscious Choice (IAM).", bundle: 'pro' },
        { q: "What does \"The Unswayable Lead\" train you to do?", a: "Maintain complete somatic presence during active, public, or disrespectful conflict.", bundle: 'pro' },
        { q: "Why does \"The Grounded Response\" end with \"Conscious Choice\"?", a: "Because after grounding your system and verifying safety, you must choose your lead.", bundle: 'pro' },
      ]
    },
    {
      name: "Challenges",
      description: "The five challenges to master in this pack:\n\n• The Story Loop — when your mind gets trapped in defensive logic and planning\n• The Body-Mind Lockdown — when your muscles clench, and your system goes frozen or numb\n• Anxious Hypervigilance — when you hyper-scan her face for reassurance or approval\n• Somatic Panic — when your heart races and you experience survival panic\n• Auto-Pilot Reactivity — when you react with rapid, frantic, or \"bird-like\" movements\n\nEach category has its own way of testing your Masculine solidity.",
      cards: [
        { q: "What are the five challenges in this pack?", a: "The Story Loop, The Body-Mind Lockdown, Anxious Hypervigilance, Somatic Panic, and Auto-Pilot Reactivity.", bundle: 'pro' },
        { q: "How do you handle \"The Story Loop\"?", a: "By using The Watcher to observe the mental narrative and return to your physical senses.", bundle: 'pro' },
        { q: "What is the core danger during \"The Body-Mind Lockdown\"?", a: "Energetically disappearing in a frozen state instead of bringing presence.", bundle: 'pro' },
        { q: "How do you resolve \"Anxious Hypervigilance\"?", a: "By catching the sign-seeking impulse and settling back into your own seat.", bundle: 'pro' },
        { q: "What is the best strategy to resolve \"Somatic Panic\"?", a: "Provocation Visualization—practising surrender in meditation so the real panic has somewhere to land.", bundle: 'pro' },
        { q: "How do you escape \"Auto-Pilot Reactivity\"?", a: "By using Conscious Choice (IAM) to slow your movements and words to three times slower.", bundle: 'pro' },
        { q: "What do all five of these challenges have in common?", a: "Each one starts in your own body — a clench, a race, a freeze — before a single word is exchanged.", bundle: 'pro' },
        { q: "Why is rapid speech a major mistake in challenges?", a: "Because it is fueled by social anxiety, which communicates weakness and a need for validation.", bundle: 'pro' },
      ]
    },
    {
      name: "Mindset",
      description: "These are the mindsets you practise in this pack:\n\n• Body Always Exists in the Now — thoughts are past and future stories; body sensations are present truth\n• The Nervous System is a Muscle — somatic capacity is a plastic, trainable skill\n• Triggers — stoking the trigger in practice is the gym that makes you unshakeable\n• Deliberateness — conscious, intended action is the ultimate expression of power\n\nIn every one, the belief that gets in the way feels like safety from the inside.",
      cards: [
        { q: "What are the four mindsets in this pack?", a: "Body Always Exists in the Now, The Nervous System is a Muscle, Triggers, and Deliberateness.", bundle: 'pro' },
        { q: "What does \"Body Always Exists in the Now\" teach you?", a: "That waking up physical body sensations literally crowds out mental stories.", bundle: 'pro' },
        { q: "What is the core block of \"The Nervous System is a Muscle\"?", a: "Believing that you are \"just a nervous person\" who cannot change.", bundle: 'pro' },
        { q: "What is the core block of the \"Triggers\" mindset?", a: "Believing you shouldn't visualize stressful things because it makes you feel worse.", bundle: 'pro' },
        { q: "What is the core block of the \"Deliberateness\" mindset?", a: "Believing that planning your movements and words beforehand feels fake or robotic.", bundle: 'pro' },
        { q: "Why is \"impulsive authenticity\" a mistake in conflict?", a: "It usually leads to automatic, rapid reactions fueled by childhood anxiety wounds.", bundle: 'pro' },
        { q: "How does holding physical discomfort expand your capacity?", a: "Increasing physical tolerance maps directly over to your capacity for emotional intensity.", bundle: 'pro' },
        { q: "What is the ultimate goal of these four mindsets?", a: "To shift your baseline from automatic survival reactivity to grounded, conscious leadership.", bundle: 'pro' },
      ]
    },
  ],
  masculinesv: [
    {
      name: "Grundbultarna",
      guideFront: "En fråga om metoden.",
      guideBack: "Svaret.",
      description: "De tre elementen i Blueprinten som utgör basen för maskulint ledarskap.",
      cards: [
        { q: "Vilka är de tre elementen i The Masculine Blueprint?", a: "1. Respond vs. React, 2. Provide Structure, 3. Create Safety..", bundle: 'free' },
        { q: "Vad är skillnaden mellan den gamla och nya maskuliniteten?", a: "Den gamla handlade om kontroll och dominans; den nya handlar om klarhet och ledarskap..", bundle: 'free' },
        { q: "Vad händer när en man inte tar ledningen (the frame)?", a: "Kvinnan tvingas in i sin maskulina energi för att skapa den struktur hon behöver, vilket dödar attraktionen..", bundle: 'free' },
        { q: "Vad är ett \"Orakel\" i det här sammanhanget?", a: "Kvinnans förmåga att spegla var mannen har slutat vara närvarande, sann eller kärleksfull..", bundle: 'pro' },
        { q: "Vad är regeln om \"fakta\" vid känslomässig intensitet?", a: "Känslor först, fakta senare. Försök aldrig \"fixa faktan\" medan hon är i affekt..", bundle: 'pro' },
      ]
    },
  ],
  parenting1: [
    {
      name: "The Principles of Heart",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The core concepts of connection and the Mamalakis approach.",
      cards: [
        { q: "What is the main goal of parenting in this model?", a: "To help the child become a person who can choose the good, not just someone who obeys out of fear.", bundle: 'free' },
        { q: "What does \"Respond vs. React\" mean?", a: "Pausing to understand the struggle before choosing a purposeful action, rather than exploding back.", bundle: 'free' },
        { q: "Why is \"Connection Before Correction\" essential?", a: "Because children need to feel \"with\" the parent before they can receptively follow the parent's lead.", bundle: 'free' },
        { q: "What is the \"90% Rule\" of behavior?", a: "Most \"crazy\" behavior comes from the child not feeling loved, heard, or led.", bundle: 'pro' },
        { q: "What does it mean to \"Venerate\" a child?", a: "To treat them as a person with inherent dignity (an icon), not as a problem to be fixed.", bundle: 'pro' },
        { q: "How should you handle a child's protest (pushback)?", a: "Expect it as a normal part of the learning process rather than a threat to your authority.", bundle: 'pro' },
      ]
    },
  ],
  parenting2: [
    {
      name: "The Principles of Limits",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The core concepts of creating structure and managing pushback.",
      cards: [
        { q: "What does \"Expect pushback, not compliance\" mean?", a: "Expect that children will protest limits as part of their learning process; don't take it personally.", bundle: 'free' },
        { q: "Why is \"Describe what you see\" effective?", a: "It focuses the child's attention on the problem to be solved rather than on defending themselves.", bundle: 'free' },
        { q: "What is the \"Architecture of the Home\"?", a: "The firm limits and routines that provide the safety and structure a child needs to grow.", bundle: 'free' },
        { q: "What is \"Empathetic Firmness\"?", a: "Caring about how the child feels while refusing to budge on the necessary limit.", bundle: 'pro' },
        { q: "When should you \"Follow up physically\"?", a: "When words aren't working—move to calm action, like taking a toy away or leading the child by the hand.", bundle: 'pro' },
        { q: "Why offer \"Options within the limit\"?", a: "To give the child a sense of autonomy and reduce the likelihood of a power struggle.", bundle: 'pro' },
      ]
    },
  ],
  parenting3: [
    {
      name: "The Mechanics of Learning",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The principles of productive struggle and long-term character building.",
      cards: [
        { q: "What is \"Productive Struggle\"?", a: "The process of a child working through a difficulty to develop competence and character.", bundle: 'free' },
        { q: "Why should you avoid solving problems for your child?", a: "Because they learn that they are incapable and that others will always rescue them.", bundle: 'free' },
        { q: "What is the difference between \"abandoning\" and \"joining\" a struggle?", a: "Abandoning is leaving them to struggle alone; joining is being present while they do the work.", bundle: 'free' },
        { q: "What does it mean to \"Parent with the end in mind\"?", a: "Focusing on the adult you want them to become rather than just today's obedience.", bundle: 'pro' },
        { q: "Why use \"Inquiry\" instead of \"Directions\"?", a: "Inquiry forces the child to think and take ownership of the solution.", bundle: 'pro' },
        { q: "When is a failure \"safe\"?", a: "When the consequences are logical and informative rather than dangerous or shaming.", bundle: 'pro' },
      ]
    },
  ],
  parenting4: [
    {
      name: "The Principles of Calm",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theoretical foundation of self-regulation and pushback management.",
      cards: [
        { q: "What is the difference between reacting and responding?", a: "Reacting is an automatic emotional explosion; responding is a chosen, purposeful action.", bundle: 'free' },
        { q: "Why should you \"Expect Pushback\"?", a: "Because children are learning to handle limits; protest is a normal part of that developmental process.", bundle: 'free' },
        { q: "What should you do when a child uses \"mean words\"?", a: "Meet the frustration behind the words rather than defending yourself against the words.", bundle: 'free' },
        { q: "What is \"Heartful Silence\"?", a: "Choosing to stop arguing and instead use calm action or brief cues to hold a limit.", bundle: 'pro' },
        { q: "Why is \"High Expectations + Calm\" the target?", a: "It provides the child with both the clear standard they need and the safe container they require to meet it.", bundle: 'pro' },
        { q: "What does it mean to \"Abandon the Struggle\"?", a: "Either giving in to the child to end the noise, or leaving them to handle overwhelming emotions alone.", bundle: 'pro' },
      ]
    },
  ],
  parenting5: [
    {
      name: "The Principles of Return",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theoretical foundation of repentance and modeling.",
      cards: [
        { q: "What is the \"Sixth Principle\" of the Kingdom model?", a: "Teach the joy of repentance—the path of doing wrong and returning to the good.", bundle: 'free' },
        { q: "Why should parents apologize to their children?", a: "To model how to take responsibility and how to repair a relationship after a rupture.", bundle: 'free' },
        { q: "What is the primary purpose of a Time-Out in this model?", a: "To allow the child's nervous system to return to a state of calm so they can re-engage.", bundle: 'free' },
        { q: "What is the difference between \"Guilt\" and \"Repentance\"?", a: "Guilt is about who you are (shame); Repentance is about what you did and turning to make it right.", bundle: 'pro' },
        { q: "What does it mean to \"Parent with the End in Mind\"?", a: "Focusing on the adult you want them to become (someone who can repent) rather than today's obedience.", bundle: 'pro' },
        { q: "How does \"Connection Before Correction\" apply to repentance?", a: "A child must feel loved and secure (connection) before they can have the courage to admit a mistake (repentance).", bundle: 'pro' },
      ]
    },
  ],
  praxframe1: [
    {
      name: "The Frame Tetrahedron",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theoretical base of the Praxeology model.",
      cards: [
        { q: "What are the three base pillars of Frame?", a: "Physical, Intellectual, and Emotional.", bundle: 'free' },
        { q: "What sits at the top of the Frame tetrahedron?", a: "Your Vision.", bundle: 'free' },
        { q: "What is \"Frame\" in one sentence?", a: "Frame is how you conceptualize, process, and react to the world around you; it's who you are.", bundle: 'free' },
        { q: "What is \"Mental Point of Origin\"?", a: "The internal locus of control where your own interests and values dictate your decisions.", bundle: 'pro' },
        { q: "What is the \"OODA Loop\"?", a: "Observe, Orient, Decide, Act—a process for rapid calibration and problem-solving.", bundle: 'pro' },
        { q: "What is \"Rule Zero\"?", a: "Male-centric sexual strategy and a positive male identity.", bundle: 'pro' },
      ]
    },
  ],
  praxframe2: [
    {
      name: "Subtext Mechanics",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Key definitions for mastering intersexual communication.",
      cards: [
        { q: "What are the two channels of every conversation?", a: "Content (objective information) and Process (subtext/status outcomes).", bundle: 'free' },
        { q: "What is \"Whisper’s Rule\"?", a: "Translating women's advice by adding \"I want to feel like...\" to the statement.", bundle: 'free' },
        { q: "What is a \"Hamster\"?", a: "A mental model describing how emotions drive a woman's processing of the world.", bundle: 'free' },
        { q: "What are the two axes of \"Closed Communication\"?", a: "Status (Higher/Lower) and Harmony (Cooperative/Adversarial).", bundle: 'pro' },
        { q: "Why is \"Arguing with Women\" a categorical error?", a: "Men argue for factual truth; women argue for status and moral objectivity.", bundle: 'pro' },
        { q: "What is \"Kayfabe\"?", a: "Theater being presented as real where the audience (and actor) suspends disbelief.", bundle: 'pro' },
      ]
    },
  ],
  praxframe3: [
    {
      name: "Assertive Defense Mechanics",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theoretical foundation of protecting your frame verbally.",
      cards: [
        { q: "What does DEER stand for?", a: "Defend, Excuse, Explain, Rationalize..", bundle: 'free' },
        { q: "Why is DEERing a failure of frame?", a: "Because it's a submissive action that seeks her permission and authority over your decisions.", bundle: 'free' },
        { q: "What is the primary purpose of Fogging?", a: "To acknowledge her subjective truth without accepting her narrative or accusations.", bundle: 'free' },
        { q: "What is the \"Emasculation Paradox\"?", a: "The idea that submitting to her to avoid conflict actually makes her contempt and conflict more likely.", bundle: 'pro' },
        { q: "What is \"Negative Assertion\"?", a: "Admitting a factual mistake without the submissive baggage of an apology or guilt.", bundle: 'pro' },
        { q: "What is \"Assertive Right #10\"?", a: "You have the right to say, \"I don't care.\".", bundle: 'pro' },
      ]
    },
  ],
  praxframe4: [
    {
      name: "Nice Guy Mechanics",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Key concepts from the Praxeology and \"No More Mr. Nice Guy\" models.",
      cards: [
        { q: "What is a \"Covert Contract\"?", a: "An unspoken expectation where you do something for someone hoping to get validation/sex in return.", bundle: 'free' },
        { q: "What does DEER stand for?", a: "Defend, Excuse, Explain, Rationalize.", bundle: 'free' },
        { q: "Why is \"Altruism\" a trap for men?", a: "Because it often functions as a \"Stay Monogamous to your Mother\" survival strategy.", bundle: 'free' },
        { q: "What is \"Evolutionary Selfishness\"?", a: "The process where a woman instinctively distances emotionally from a man who has lost his frame.", bundle: 'pro' },
        { q: "What is the \"Emasculation Paradox\"?", a: "Submitting to her to avoid her anger, which actually creates the contempt that makes her more angry.", bundle: 'pro' },
        { q: "What is \"Rule Zero\"?", a: "Male-centric sexual strategy and a positive male identity.", bundle: 'pro' },
      ]
    },
  ],
  praxframe5: [
    {
      name: "The Leader’s Vision",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Key concepts behind the \"Final Pillar.\"",
      cards: [
        { q: "What is the definition of \"Vision\" in a relationship?", a: "A generally-stated plan-of-action toward a distant but achievable goal.", bundle: 'free' },
        { q: "Why is Vision a \"Display of Higher Value\" (DHV)?", a: "Because it signals character, foresight, and initiative, giving her a \"port\" to sail toward.", bundle: 'free' },
        { q: "What are the three base pillars that hold up Vision?", a: "The Physical, Intellectual, and Emotional pillars.", bundle: 'free' },
        { q: "Should Vision be detailed or general?", a: "It should be short on details and long on generalizations to remain inspiring.", bundle: 'free' },
        { q: "What happens to a marriage without Vision?", a: "The partner finds it difficult to invest emotionally because there is no intended destination.", bundle: 'free' },
        { q: "What is \"Narrative of Intent\"?", a: "Communicating the kind of man you intend to be and the life you intend to lead.", bundle: 'pro' },
        { q: "How does Vision handle rejection?", a: "By framing rejections as tangible signs of progress toward the ultimate goal.", bundle: 'pro' },
        { q: "Who is allowed to join you in your Vision?", a: "Only those who can demonstrate value to you; it is a form of luxury branding.", bundle: 'pro' },
      ]
    },
    {
      name: "Leading Without Permission",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "",
      cards: [
        { q: "Do leaders need permission to lead?", a: "No. Thinking people have to follow so you can lead is \"ass-backwards.\"", bundle: 'free' },
        { q: "Who is the first person you must lead?", a: "Yourself. Leadership doesn't require followers initially.", bundle: 'free' },
        { q: "What is the \"Tom Sawyer\" law of action?", a: "To make a person covet a thing, it is only necessary to make the thing difficult to attain.", bundle: 'free' },
        { q: "What is the \"Drunk Captain\" dynamic?", a: "A man who wants authority but cannot lead his own life or perform adult tasks competently.", bundle: 'free' },
        { q: "How do you transition from the \"child\" frame to the \"Captain\" frame?", a: "By doing what needs to be done on your own timeline and standard without seeking approval.", bundle: 'free' },
        { q: "What does \"Their fault, your responsibility\" mean?", a: "The Captain is responsible for everything on the ship, regardless of who caused the issue.", bundle: 'pro' },
        { q: "Why is nagging a sign of a \"minion\" dynamic?", a: "Because leaders don't have time for nagging; they prioritize according to vision, not emotion.", bundle: 'pro' },
        { q: "What is the best response to her \"bossing you around\"?", a: "\"Babe, I got it.\" — and then taking complete responsibility for the task.", bundle: 'pro' },
      ]
    },
    {
      name: "Push and Pull",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "",
      cards: [
        { q: "What is the emotional purpose of \"Push and Pull\"?", a: "To take her on an emotional journey that cycles between tension (Push) and release (Pull).", bundle: 'free' },
        { q: "Why is \"Tension\" necessary for attraction?", a: "Because sustainable desire requires strong emotions, both positive and negative.", bundle: 'free' },
        { q: "What is a \"Push\" behavior?", a: "Withdrawing approval, challenging her frame, or being playfully aloof.", bundle: 'free' },
        { q: "What is a \"Pull\" behavior?", a: "Rewarding her investment with warmth, comfort, and high-quality attention.", bundle: 'free' },
        { q: "What happens if you are \"all Pull\" (too nice)?", a: "You become a \"fan\" or a dependent, and her sexual attraction vanishes.", bundle: 'free' },
        { q: "What is \"Hysteric Bonding\"?", a: "A neurotic, pathological need for sex driven by the fear of losing a high-value man.", bundle: 'pro' },
        { q: "What is the \"Emasculation Paradox\"?", a: "Submitting to avoid conflict, which creates the contempt that makes future conflict more likely.", bundle: 'pro' },
        { q: "How do you \"reward\" feminine effort?", a: "By providing your presence and warm validation only when she adds value to your world.", bundle: 'pro' },
      ]
    },
    {
      name: "Rule Zero (Rational Egoism)",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "",
      cards: [
        { q: "What is \"Rule Zero\"?", a: "Male-centric sexual strategy and a positive male identity.", bundle: 'free' },
        { q: "What is \"Rational Egoism\"?", a: "The philosophy of living unapologetically for yourself and maximizing your own strengths.", bundle: 'free' },
        { q: "Why is \"Altruism\" dangerous for men?", a: "Because it often functions as a covert contract where men \"give\" to avoid abandonment.", bundle: 'free' },
        { q: "What is the \"Glue Factory\" analogy?", a: "Horses that no longer plow (sacrifice their frame) are discarded; sacrifice is never rewarded with security.", bundle: 'free' },
        { q: "What are the three things most men agree are \"good\"?", a: "Financial freedom, sexual abundance, and physical fitness.", bundle: 'free' },
        { q: "What is \"Outcome Independence\"?", a: "Becoming your best self for your own sake, regardless of whether she stays or leaves.", bundle: 'pro' },
        { q: "What is \"Mental Point of Origin\"?", a: "The internal locus of control where your own interests and values dictate your decisions.", bundle: 'pro' },
        { q: "What does it mean to \"Hate her, just a little bit\"?", a: "To stop seeing her as a fantasy and see her as a human being so you can lead with confidence.", bundle: 'pro' },
      ]
    },
  ],
  praxdread1: [
    {
      name: "STFU",
      guideFront: "A question about STFU.",
      guideBack: "The answer.",
      description: "The theoretical foundation of silent frame.",
      cards: [
        { q: "What are the three channels of communication?", a: "55% body language, 38% intonation, and 7% actual words.", bundle: 'free' },
        { q: "Why is \"explaining yourself\" a mistake?", a: "Because it confirmed to her that you are seeking her permission and validation.", bundle: 'free' },
        { q: "When should you use words in Dread?", a: "To offer a direct explanation of _observed_ changes in behavior, after they have been established.", bundle: 'free' },
        { q: "What is the \"7% rule\" in practice?", a: "Verbal affirmations are \"cope\"; only 93% action and body language paint a clear picture of change.", bundle: 'pro' },
        { q: "What is \"Magic Pussy Syndrome\"?", a: "A woman's ego-driven assumption that her sexual rejection should put a man into a \"spiral of misery.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The 2/3rds Rule",
      guideFront: "A question about the 2/3rds Rule.",
      guideBack: "The answer.",
      description: "",
      cards: [
        { q: "What is the core rule of 2/3rds?", a: "Give back to her 2/3rds of whatever non-sexual investment you receive from her.", bundle: 'free' },
        { q: "Why avoid \"Sacrificial Love\"?", a: "Because sexual desire is tangential to sacrifice; \"back pats\" do not translate into \"blowjobs.\"", bundle: 'free' },
        { q: "What happens if you are too predictable?", a: "People only follow your incentives when they want something; intermittent rewards create investment.", bundle: 'free' },
        { q: "What is \"Choreplay\"?", a: "The failed strategy of doing dishes to \"lower her stress\" in hopes of getting sex.", bundle: 'pro' },
        { q: "What is the \"Cardinal Rule\" of relationships?", a: "The person who needs the other person less has the power.", bundle: 'pro' },
      ]
    },
    {
      name: "The 1,000-Foot Tow Rope",
      guideFront: "A question about the Tow Rope.",
      guideBack: "The answer.",
      description: "",
      cards: [
        { q: "What is the \"slack\" in the rope?", a: "The period where your self-improvement doesn't yet affect her frame or behavior.", bundle: 'free' },
        { q: "What is the \"jerk\" in the line?", a: "The moment her hamster realizes you are so far ahead that she might be left behind.", bundle: 'free' },
        { q: "What does \"Outcome Independence\" mean here?", a: "Becoming a high-value man for yourself, regardless of whether she stays or goes.", bundle: 'free' },
        { q: "Why is the \"Stay Plan\" the same as the \"Go Plan\"?", a: "Because both require you to become the most attractive, competent version of yourself.", bundle: 'pro' },
        { q: "What is \"Evolutionary Selfishness\"?", a: "The phase where a woman instinctively distances herself from a man who has lost his frame.", bundle: 'pro' },
      ]
    },
    {
      name: "Standard-Setting Lead",
      guideFront: "A question about Standard-Setting.",
      guideBack: "The answer.",
      description: "",
      cards: [
        { q: "What is a \"Drunk Captain\"?", a: "A man who wants authority but cannot lead his own life or perform adult tasks competently.", bundle: 'free' },
        { q: "Do leaders need permission?", a: "No. Thinking you can't lead because she \"doesn't let you\" is having it backwards.", bundle: 'free' },
        { q: "What is the best \"apology\" for a mistake?", a: "Correcting the mistake and ensuring it doesn't happen again.", bundle: 'free' },
        { q: "What are the 4 outcomes of a chore?", a: "1. Her standard/her timeline, 2. Her standard/your timeline, 3. Your standard/her timeline, 4. Your standard/your timeline.", bundle: 'pro' },
        { q: "Which outcome signifies a man with Frame?", a: "Outcome 4: Your standard on your timeline.", bundle: 'pro' },
      ]
    },
  ],
  praxdread2: [
    {
      name: "Luxury Branding Mechanics",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Key definitions for mastering the \"Marketing of Value.\"",
      cards: [
        { q: "What are the four concepts of luxury branding?", a: "Scarcity, Loss Aversion, Conditioning, and Framing.", bundle: 'free' },
        { q: "Why is \"Covert\" communication necessary?", a: "Because women hate sales but love marketing; directness signals desperation.", bundle: 'free' },
        { q: "What is the \"Cardinal Rule\" of relationships?", a: "The person who needs the other person less has the power.", bundle: 'free' },
        { q: "What is \"Magic Pussy Syndrome\"?", a: "A woman's ego-driven assumption that her sexual rejection should cause a man to spiral into misery.", bundle: 'pro' },
        { q: "What is \"Intermittent Reward\" in conditioning?", a: "Providing rewards only after desired behavior and not every time, which ensures the behavior continues by default.", bundle: 'pro' },
        { q: "What is the \"Tow Rope\" model?", a: "A mental model where your self-improvement takes time to affect her behavior; you must lead regardless of her immediate reaction.", bundle: 'pro' },
      ]
    },
  ],
  praxdread3: [
    {
      name: "Enforcing Standards",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Key definitions for the transition from Beta to Alpha.",
      cards: [
        { q: "What is \"Magic Pussy Syndrome\"?", a: "A woman's ego-driven assumption that her sexual rejection should cause a man to spiral into misery.", bundle: 'free' },
        { q: "Why is \"negotiated desire\" a fail state?", a: "Because it only leads to obligated compliance, which feels like rape to the woman and sterile to the man.", bundle: 'free' },
        { q: "What are the three dysfunctional captains?", a: "1. The Drunken Captain, 2. The Neurotic Captain, 3. The Captain's Husband.", bundle: 'free' },
        { q: "What is \"Hysteric Bonding\"?", a: "A neurotic, pathological need for sex that functions like a fight-or-flight response to the fear of losing a man.", bundle: 'pro' },
        { q: "What is \"Briffault’s Law\"?", a: "The principle that the female, not the male, determines all the conditions of the animal family.", bundle: 'pro' },
        { q: "What is the \"Emasculation Paradox\"?", a: "Submitting to avoid conflict, which creates the contempt that makes future conflict more certain.", bundle: 'pro' },
      ]
    },
  ],
  praxdread4: [
    {
      name: "Emotional Mechanics",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Key definitions for mastering interpersonal friction.",
      cards: [
        { q: "What are the three components of communication?", a: "55% body language, 38% intonation, and 7% actual words.", bundle: 'free' },
        { q: "What is \"Goldfish Memory\"?", a: "Resetting to normal immediately after a conflict and refusing to revisit or hold a grudge.", bundle: 'free' },
        { q: "Why \"Manufacture Outrage\"?", a: "Because attraction requires strong emotions (negative and positive) to remain sustainable.", bundle: 'free' },
        { q: "What defines a \"Main Event\"?", a: "A massive blowup of desperation where she admits she doesn't know how to keep you.", bundle: 'pro' },
        { q: "What is the goal of \"Controlled Anger\"?", a: "To make her escalation uncomfortable and her de-escalation comfortable (operant conditioning).", bundle: 'pro' },
        { q: "Why is \"Mystery\" essential for a prize?", a: "Because explaining the rules kills the magic and signals the desperation of a salesman.", bundle: 'pro' },
      ]
    },
  ],
  praxdread5: [
    {
      name: "The Roadmap Principles",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Theoretical foundations of agency and the final Dread outcomes.",
      cards: [
        { q: "What defines a \"Main Event\"?", a: "The mother of all comfort tests where she realizes she might lose you and is out of ideas.", bundle: 'free' },
        { q: "What are the three components of a \"Come to Jesus\"?", a: "1. Articulate vision, 2. Succinctness, 3. Providing an exit strategy.", bundle: 'free' },
        { q: "What is \"Remorse Checklist\" utility?", a: "To test yourself and your standards rather than just her words.", bundle: 'free' },
        { q: "What is \"Stay/Go Congruence\"?", a: "Acting so that your self-improvement is the same whether you stay or leave.", bundle: 'pro' },
        { q: "What is \"Magic Pussy Syndrome\"?", a: "A woman's ego-driven assumption that her sexual rejection should cause a man's misery.", bundle: 'pro' },
        { q: "What is the \"Emasculation Paradox\"?", a: "Submitting to avoid conflict, which actually creates the contempt that makes conflict certain.", bundle: 'pro' },
      ]
    },
  ],
  listeningthroughquestions: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "What the seven question types are for, and how to choose.",
      cards: [
        { q: "What is this pack for?", a: "The questions you ask while somebody is telling you about something that happened to them.", bundle: 'free' },
        { q: "What are the seven types?", a: "The detail, what happened next, why, how it felt, the hard part, how it looked from elsewhere, and what they took from it.", bundle: 'free' },
        { q: "How do you choose which to ask?", a: "By what the account is missing — and by what their last sentence opened.", bundle: 'free' },
        { q: "What is the difference between following and interviewing?", a: "A followed question comes out of their last answer. An interview question comes out of your head, and people feel it within two or three.", bundle: 'pro' },
        { q: "Which three are the safe ones to start with?", a: "The detail, the sequence and the cause — none of them asks anything of the other person.", bundle: 'pro' },
        { q: "How is this different from Deep Questions?", a: "Deep Questions is about getting to know a person. This is about drawing out an account of something that happened.", bundle: 'pro' },
      ]
    },
    {
      name: "Ask About the Detail",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind picking one thing out.",
      cards: [
        { q: "What is the detail question?", a: "Picking one small thing they said — a name, a place, an object, an odd word — and asking about that.", bundle: 'free' },
        { q: "Why is it the most reliable follow-up?", a: "The material is already on the table, and a specific question proves you were listening to that particular sentence.", bundle: 'free' },
        { q: "Which detail should you pick?", a: "The one said in passing rather than the one they emphasised. The thrown-away half-sentence is usually the door.", bundle: 'pro' },
        { q: "What does a general question reveal?", a: "That it could have been asked by someone who heard nothing — and people can tell.", bundle: 'pro' },
        { q: "Name three kinds of detail worth picking.", a: "The concrete noun, the odd word that does not fit, and the half-sentence they hurried past.", bundle: 'pro' },
      ]
    },
    {
      name: "Ask What Happened Next",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind the sequence question.",
      cards: [
        { q: "What does the sequence question do?", a: "Turns a verdict into a story — \"it was a nightmare\" becomes something you can follow.", bundle: 'free' },
        { q: "Why is it the easiest question to ask?", a: "It needs no understanding of what came before. \"What happened after that?\" always works.", bundle: 'free' },
        { q: "Why do people compress a story into a verdict?", a: "They assume the detail would bore you. Asking for it tells them it would not.", bundle: 'pro' },
        { q: "What do you ask if you have joined halfway?", a: "The backwards version — \"how did it get to that point?\"", bundle: 'pro' },
        { q: "Where does the interesting part of a story live?", a: "In the middle, which is exactly the part a summary leaves out.", bundle: 'pro' },
      ]
    },
    {
      name: "Ask Why It Happened",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind the cause question.",
      cards: [
        { q: "What does the why question add?", a: "The explanation — which is where the person appears in their own story rather than being someone things happened to.", bundle: 'free' },
        { q: "What is the safer framing?", a: "\"What made you…\" rather than \"why did you…\".", bundle: 'free' },
        { q: "What is the difference between those two framings?", a: "One asks for a reason; the other can sound like it is asking for a defence.", bundle: 'pro' },
        { q: "Which why is more interesting — the event or the choice?", a: "The choice. The cause of an event is outside them; the reason for a decision is not.", bundle: 'pro' },
        { q: "What do you ask when the stated reason does not quite explain it?", a: "\"Is that the whole reason, or is there a bit more to it?\"", bundle: 'pro' },
      ]
    },
    {
      name: "Ask How It Felt",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind the reaction question.",
      cards: [
        { q: "Why is the feeling question worth asking?", a: "Most accounts are given in facts, and the facts are not what the person is carrying.", bundle: 'free' },
        { q: "How should you narrow it?", a: "To a specific moment. \"How did you feel about all that\" is a question about someone's whole life.", bundle: 'free' },
        { q: "What do you ask someone who does not talk about feelings?", a: "What they did straight afterwards — the action usually tells you the same thing.", bundle: 'pro' },
        { q: "When should you ask it?", a: "After the facts. Asked cold it lands as an interview about someone's inner life.", bundle: 'pro' },
        { q: "What is the gentlest version?", a: "Offering a word for them to try on — \"that sounds like it stung a bit. Did it?\"", bundle: 'pro' },
      ]
    },
    {
      name: "Ask About the Hard Part",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind the obstacle question.",
      cards: [
        { q: "Why ask about the difficult bit?", a: "Everything worth telling has an obstacle in it, and the obstacle is where the person had to do something.", bundle: 'free' },
        { q: "What is the follow-up that matters?", a: "What they did about it.", bundle: 'free' },
        { q: "What does asking about the hard part assume?", a: "That they got through something — a much better assumption than most questions carry.", bundle: 'pro' },
        { q: "What do you ask when an account has been suspiciously smooth?", a: "Whether any of it was as bad as it sounds like it should have been.", bundle: 'pro' },
        { q: "Which version often produces the best story?", a: "The thing that nearly stopped it.", bundle: 'pro' },
      ]
    },
    {
      name: "Ask How It Looked From Elsewhere",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind the perspective question.",
      cards: [
        { q: "What does the perspective question do?", a: "Invites them out of the single vantage point the account was given from.", bundle: 'free' },
        { q: "What is its gentlest form?", a: "Asking about their own past self — \"knowing what you know now, would you do it again?\"", bundle: 'free' },
        { q: "How do you keep it from sounding like a lesson?", a: "Ask it as curiosity. \"Have you considered how she felt?\" is a lesson with a question mark; \"how do you think it looked from her side?\" is a question.", bundle: 'pro' },
        { q: "What is the outside-view version?", a: "\"If a friend told you this, what would you say to them?\" — useful when someone is too close to a problem.", bundle: 'pro' },
        { q: "What can it do that no other question in the pack does?", a: "Occasionally change the account while it is being given.", bundle: 'pro' },
      ]
    },
    {
      name: "Ask What They Took From It",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind the closing question.",
      cards: [
        { q: "What is this question for?", a: "Closing a subject properly rather than letting it trail off.", bundle: 'free' },
        { q: "Why not simply ask \"what did you learn?\"", a: "It sounds like a school exercise. \"What's changed since?\" asks the same thing.", bundle: 'free' },
        { q: "Which version do people answer most fully?", a: "What they would tell someone about to do the same thing.", bundle: 'pro' },
        { q: "When should you ask it?", a: "At the end. Asked in the middle it stops the story.", bundle: 'pro' },
        { q: "They say they learned nothing. What then?", a: "Ask whether anything changed anyway — the answer is usually yes.", bundle: 'pro' },
      ]
    },
  ],
  showunderstanding2: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "What this pack adds to Show Understanding Pt. 1.",
      cards: [
        { q: "What does Pt. 1 cover?", a: "Three ways to show you heard the last thing — a follow-up question, a rephrase, and sharing a similar experience.", bundle: 'free' },
        { q: "What does Pt. 2 add?", a: "Showing you have followed the WHOLE conversation — checking, connecting across it, summarising — and meeting them rather than only tracking them.", bundle: 'free' },
        { q: "What are the six moves?", a: "Ask if you got it right, connect to what they said earlier, summarise the whole thing back, say you felt that too, name the value you share, and share then bring it back.", bundle: 'free' },
        { q: "Which three are the safe ones?", a: "Checking, connecting and summarising — none of them asks anything of the other person.", bundle: 'pro' },
        { q: "What do the other three cost?", a: "Airtime, which is why each has a rule: one sentence for the feeling, only a value you hold, and always hand it back.", bundle: 'pro' },
        { q: "What is the order when you use both kinds?", a: "Understand first, meet second. A disclosure before you have understood is a guess about what they need.", bundle: 'pro' },
      ]
    },
    {
      name: "Ask If You Got It Right",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind explicit checking.",
      cards: [
        { q: "What makes this different from just rephrasing?", a: "The question at the end. It turns a claim about their meaning into an offer they can correct.", bundle: 'free' },
        { q: "What is the good outcome?", a: "Being corrected. It is the most useful sentence in the exchange and you only get it if you ask.", bundle: 'free' },
        { q: "When is it patronising?", a: "Only when you leave the question off. With the question it is an offer, not a summary of them.", bundle: 'pro' },
        { q: "What do you do when it could be read two ways?", a: "Offer both readings. \"Do you mean you don't want to, or that you can't?\"", bundle: 'pro' },
        { q: "How often should you check?", a: "At the pauses, not at the commas. One good check beats three that break the flow.", bundle: 'pro' },
      ]
    },
    {
      name: "Connect It to What They Said Earlier",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind carrying a detail forward.",
      cards: [
        { q: "What does connecting prove?", a: "That you have followed the whole conversation, not just the current sentence.", bundle: 'free' },
        { q: "How much do you need to remember?", a: "One detail. One thing brought back at the right moment does the whole job.", bundle: 'free' },
        { q: "Which connection is the strongest?", a: "Two things they mentioned separately that turn out to be one thing.", bundle: 'pro' },
        { q: "How do you offer a connection without diagnosing?", a: "As a question. \"Are those the same problem?\" rather than \"so obviously it's the travel\".", bundle: 'pro' },
        { q: "What do you do after offering it?", a: "Nothing. This move often produces a realisation, and a realisation needs a moment.", bundle: 'pro' },
        { q: "How do you handle a contradiction with something earlier?", a: "Gently, and as a question — \"which is nearer?\" rather than \"you said the opposite before\".", bundle: 'pro' },
      ]
    },
    {
      name: "Summarise the Whole Thing Back",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind the long loop.",
      cards: [
        { q: "When does a summary belong?", a: "At the end of a stretch, not in the middle of one.", bundle: 'free' },
        { q: "How many points?", a: "Three. A summary that includes everything is a repetition.", bundle: 'free' },
        { q: "What should a summary end with?", a: "\"Have I missed anything?\" — it is a draft, and the correction is the point.", bundle: 'pro' },
        { q: "Why summarise before you respond?", a: "Otherwise you respond to your own version, and the correction changes what you would have said surprisingly often.", bundle: 'pro' },
        { q: "What is the boldest version?", a: "Naming the one thing underneath the rest — worth offering, and worth checking.", bundle: 'pro' },
        { q: "What does hearing it back do for them?", a: "It is often the first time they see the shape of what they have been saying, and people rearrange their own conclusion while listening.", bundle: 'pro' },
      ]
    },
    {
      name: "Say You Felt That Too",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind sharing the feeling.",
      cards: [
        { q: "What do you share — the feeling or the story?", a: "The feeling. The story is a different conversation.", bundle: 'free' },
        { q: "How long should it be?", a: "One sentence. The second sentence about your own case is where it becomes your turn.", bundle: 'free' },
        { q: "How is this different from Validation?", a: "Validation says their feeling makes sense. This reports your own — opposite direction, which is why it has to be short.", bundle: 'pro' },
        { q: "What does it remove for them?", a: "The suspicion that their reaction was unreasonable, which is the isolating part of a difficult experience.", bundle: 'pro' },
        { q: "What is the safest size of all?", a: "One clause. \"I know that feeling.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Name the Value You Share",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind meeting what is underneath.",
      cards: [
        { q: "What are people usually explaining when they explain a grievance?", a: "A value — fairness, being consulted, honesty, not letting someone down.", bundle: 'free' },
        { q: "Why does naming it land so hard?", a: "Almost nobody says the value out loud, so naming it says you understood the part underneath.", bundle: 'free' },
        { q: "What is the one rule?", a: "It has to be true. A value you do not hold gets found out, usually in the next conversation.", bundle: 'pro' },
        { q: "Does agreeing with the value commit you to the conclusion?", a: "No — and saying both is stronger than agreeing with everything.", bundle: 'pro' },
        { q: "What do you say when you would have acted differently?", a: "That you would have minded just as much. It is honest and it is usually the truer sentence.", bundle: 'pro' },
      ]
    },
    {
      name: "Share, Then Bring It Back",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind the disclosure that returns.",
      cards: [
        { q: "Which half of this strategy is the strategy?", a: "The second — the same disclosure is generous when it returns and a hijack when it does not.", bundle: 'free' },
        { q: "How do you bring it back?", a: "A question about theirs, or a sentence about what it means for them.", bundle: 'free' },
        { q: "What does the book mean by combining sharing with reflection?", a: "Linking your case to theirs rather than parking it next to theirs.", bundle: 'pro' },
        { q: "When can you offer what helped you?", a: "After they have been heard, and marked as yours — \"might not fit your situation\".", bundle: 'pro' },
        { q: "What is the test that it has gone wrong?", a: "Your version is longer than theirs.", bundle: 'pro' },
        { q: "What is the cheapest repair?", a: "\"Anyway, that's mine. Where had you got to?\"", bundle: 'pro' },
      ]
    },
  ],
  setupquestion: [
    {
      name: "Core Idea",
      description: "The concept behind setup questions and the five types.",
      cards: [
        { q: "What is a setup question?", a: "You ask the other person a question about something you want to talk about, listen to their answer, and then give your own answer to the same question.", bundle: 'free' },
        { q: "How is it different from a setup statement?", a: "Only the order. A setup statement says your bit first and then asks; a setup question asks first and answers afterwards.", bundle: 'free' },
        { q: "What are the five types of setup question?", a: "Opinion, Purpose, Status, Action, Background.", bundle: 'free' },
        { q: "What is the step people drop?", a: "Answering it themselves. Without that it is an interview, not a conversation.", bundle: 'free' },
        { q: "What do you do when a question gets \"not much\"?", a: "Narrow it rather than repeat it — \"are you reading anything?\" is answerable where \"what's new?\" is not.", bundle: 'pro' },
        { q: "What is the through-line of all five types?", a: "Each one asks about something you also want to talk about, so you always have your own answer ready.", bundle: 'pro' },
        { q: "How big should your own answer be?", a: "Roughly the size of theirs. Much shorter reads as a brush-off; much longer takes the floor.", bundle: 'pro' },
        { q: "What do you do when a conversation stops after one good exchange?", a: "Build the next question out of their answer rather than reaching for a new type.", bundle: 'pro' },
      ]
    },
    {
      name: "Opinion Question",
      description: "The theory behind the Opinion type.",
      cards: [
        { q: "What is an Opinion question?", a: "You ask what they think about something, then say what you think.", bundle: 'free' },
        { q: "When does an Opinion question fit best?", a: "When there is something present to have a view on — a film, the food, the venue, the event itself.", bundle: 'free' },
        { q: "Why ask before giving your own view?", a: "It reads as interest rather than an announcement, and they answer without having to agree with you first.", bundle: 'pro' },
        { q: "Is a closed opinion question wasted?", a: "No. \"Did you like it?\" gets a yes, and a yes is somewhere to start.", bundle: 'pro' },
        { q: "What makes an opinion question easy to answer?", a: "That you are both looking at the thing. Nobody has to remember or invent anything.", bundle: 'pro' },
      ]
    },
    {
      name: "Purpose Question",
      description: "The theory behind the Purpose type.",
      cards: [
        { q: "What is a Purpose question?", a: "You ask why they are here or what they are after, then say why you came.", bundle: 'free' },
        { q: "Why is it the safest of the five?", a: "Everybody in the room has a reason to be there, so nobody has to invent anything to answer.", bundle: 'free' },
        { q: "Where does a Purpose question work best?", a: "Anywhere people have gathered on purpose — a class, a club, a course, an event, a shared table.", bundle: 'pro' },
        { q: "What is the most useful follow-up to a purpose answer?", a: "The \"nearly\" — what almost stopped them coming. It is where the real answer usually is.", bundle: 'pro' },
        { q: "Why does it work on a whole group?", a: "Everyone present shares the reason, so anybody at the table can pick it up.", bundle: 'pro' },
      ]
    },
    {
      name: "Status Question",
      description: "The theory behind the Status type.",
      cards: [
        { q: "What is a Status question?", a: "You ask how they are right now — properly, not as a greeting — and then answer it yourself.", bundle: 'free' },
        { q: "How do you stop it getting the ritual answer?", a: "Attach it to the moment or to a specific thing, and answer it yourself if they give you \"fine\".", bundle: 'free' },
        { q: "Why does your own answer matter most with this type?", a: "They have just been honest about their state. If nothing comes back, they gave something and got nothing.", bundle: 'pro' },
        { q: "What does \"fine, thanks\" actually mean?", a: "Usually that they answered the greeting rather than the question — not that the door is shut.", bundle: 'pro' },
        { q: "What is the way back in after a ritual answer?", a: "Your own honest answer. Going first is what tells them the question was real.", bundle: 'pro' },
      ]
    },
    {
      name: "Action Question",
      description: "The theory behind the Action type.",
      cards: [
        { q: "What is an Action question?", a: "You ask what they are doing or working on, then say what you are in the middle of.", bundle: 'free' },
        { q: "Why narrow the question?", a: "\"What's new?\" is a blank page; \"are you reading anything?\" is answerable in four words.", bundle: 'free' },
        { q: "Why is Action the best repair for a stalled opener?", a: "A concrete activity is the easiest thing in the world to answer, even for someone who has gone blank.", bundle: 'pro' },
        { q: "What does \"not much\" usually tell you?", a: "That the question was too big to answer, not that they do not want to talk.", bundle: 'pro' },
        { q: "How do you show the size of answer you meant?", a: "Give a small concrete one of your own first.", bundle: 'pro' },
      ]
    },
    {
      name: "Background Question",
      description: "The theory behind the Background type.",
      cards: [
        { q: "What is a Background question?", a: "You ask where they have come from or what happened before this, then say the same about yourself.", bundle: 'free' },
        { q: "Why does it produce more than a word?", a: "Everybody came from somewhere, so the honest answer is usually a small story.", bundle: 'free' },
        { q: "Which version works best at a party or a wedding?", a: "\"How do you know everyone here?\" — the answer is always a story, and it is always about someone in the room.", bundle: 'pro' },
        { q: "What do you do with the story you get?", a: "Follow one detail, then match it with a piece of your own at the same size.", bundle: 'pro' },
        { q: "Why is it the best type for deepening rather than bouncing?", a: "It produces a story rather than a word, and a story has somewhere to go.", bundle: 'pro' },
      ]
    },
    {
      name: "Choosing and Repairing",
      description: "How to pick a type, and what to do when one does not land.",
      cards: [
        { q: "How do you choose which of the five to ask?", a: "By what the situation makes obvious — something present suggests Opinion, a gathering suggests Purpose, a mood suggests Status.", bundle: 'free' },
        { q: "Is there a wrong question?", a: "No, only a more natural one. The bigger mistake is not answering it yourself.", bundle: 'free' },
        { q: "What is the fix when it has become an interview?", a: "Not a better question — your own answer to the one you already asked.", bundle: 'pro' },
        { q: "What do you do with a question that lands on a whole group?", a: "Aim it at one person by name, or answer it yourself first so the table has a shape to copy.", bundle: 'pro' },
        { q: "What should you never do when a question stalls?", a: "Ask the same one again in different words. Go first yourself, then make it narrower.", bundle: 'pro' },
      ]
    },
  ],
  givingcounterexamples: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The concept behind counter-examples and the five types.",
      cards: [
        { q: "What is a counter-example?", a: "A case that shows a general statement is not always true — it takes the word \"always\" out without taking the claim away.", bundle: 'free' },
        { q: "What are the five types?", a: "Your own exception, one you have seen, an imagined case where it breaks, a known exception, and what the numbers say.", bundle: 'free' },
        { q: "What is the order that makes it land?", a: "Concede first, then the exception, then stop.", bundle: 'free' },
        { q: "What does one exception actually prove?", a: "That the claim is a tendency rather than a rule. It does not make the claim false.", bundle: 'free' },
        { q: "What turns a counter-example into an argument?", a: "Leaving out the concession, or carrying on after they have already narrowed their claim.", bundle: 'pro' },
        { q: "When should you not give one at all?", a: "When the general statement is really about someone in the room — then it is a comment about them, however it is phrased.", bundle: 'pro' },
      ]
    },
    {
      name: "Your Own Exception",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind the personal type.",
      cards: [
        { q: "What is a personal counter-example?", a: "The time it did not work that way for you — one occasion, told small.", bundle: 'free' },
        { q: "Why is it strong?", a: "It happened, it is yours, and nobody can tell you it did not.", bundle: 'free' },
        { q: "What has to come before it?", a: "The concession — say the general case is usually right, then give your exception.", bundle: 'free' },
        { q: "Which version is the most disarming?", a: "The time you believed the claim yourself, and then found out otherwise.", bundle: 'pro' },
        { q: "How big should the incident be?", a: "One occasion, small and specific. A summary of ten is weaker than one that is dated.", bundle: 'pro' },
        { q: "What do you do when they say your case is not typical?", a: "Agree that it is one case, and say what one case shows — that the claim is a tendency, not a rule.", bundle: 'pro' },
      ]
    },
    {
      name: "The One You Have Seen",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind the observed type.",
      cards: [
        { q: "What is an observed counter-example?", a: "A case you have watched happen — a person, a place, a situation — rather than one from your own life.", bundle: 'free' },
        { q: "What does it have to be?", a: "Recognisable. An example nobody can picture is just a second opinion.", bundle: 'free' },
        { q: "Name two kinds.", a: "Any two of: someone you have watched, a place where it works differently, the common counter-case most people have seen.", bundle: 'free' },
        { q: "When is this the better choice than your own experience?", a: "When your own life is not the subject, or when you barely know the person you are talking to.", bundle: 'pro' },
        { q: "What is the common counter-case?", a: "The exception nearly everyone has seen for themselves — \"everyone knows one person who revises nothing and does fine\".", bundle: 'pro' },
        { q: "Why is it easier to accept than a personal one?", a: "They can check it against their own experience instead of taking your word for it.", bundle: 'pro' },
      ]
    },
    {
      name: "Where It Would Break",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind the imagined type.",
      cards: [
        { q: "What is an imagined counter-example?", a: "A case you invent to test whether the rule holds — \"say someone works nights\".", bundle: 'free' },
        { q: "What must you always do with it?", a: "Mark it as imagined. Presenting an invention as something that happened cannot be repaired.", bundle: 'free' },
        { q: "Name two ways to build one.", a: "Any two of: the person the rule forgets, pushing it to the edge, turning it round onto them.", bundle: 'free' },
        { q: "When is it the right type?", a: "When you have no real case, and it is more honest to test the rule than to dress a guess up as experience.", bundle: 'pro' },
        { q: "What is its advantage over a real case?", a: "Nobody can argue about whether it is representative, because you never claimed it was real.", bundle: 'pro' },
        { q: "Which claims does it suit best?", a: "Rules stated for everybody — it finds the person the rule forgot.", bundle: 'pro' },
      ]
    },
    {
      name: "The Known Exception",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind the shared type.",
      cards: [
        { q: "What is a known counter-example?", a: "A case you both already recognise — a public event, a well-known person, a familiar story.", bundle: 'free' },
        { q: "How do you know it was not shared?", a: "You had to explain it.", bundle: 'free' },
        { q: "Why is it the fastest of the five?", a: "You only have to point at it. Recognition does the work that explanation would.", bundle: 'free' },
        { q: "What is the second caution with it?", a: "Describe what actually happened rather than putting words into a real person's mouth.", bundle: 'pro' },
        { q: "When is this type the safest choice?", a: "With people you barely know, because it says nothing about your own life or theirs.", bundle: 'pro' },
        { q: "What can you use when there is no real public case?", a: "A story that carries the idea — a fable or a familiar plot — as long as you do not present it as evidence.", bundle: 'pro' },
      ]
    },
    {
      name: "What the Numbers Say",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind the statistical type.",
      cards: [
        { q: "When is a number safe to use as a counter-example?", a: "When you actually know it and can say where it came from.", bundle: 'free' },
        { q: "What do you do if you have no figure?", a: "Say so, and use a different type.", bundle: 'free' },
        { q: "Name two honest ways to use a number.", a: "Any two of: something you counted yourself, a figure with its source attached, a hedged estimate marked as one.", bundle: 'free' },
        { q: "Why is an invented figure worse than none?", a: "When it is checked, everything else you said goes with it.", bundle: 'pro' },
        { q: "What does \"tens, not hundreds\" do?", a: "Gives the order of magnitude when the exact number does not matter — and it is often the number that changes the decision.", bundle: 'pro' },
        { q: "What is the better sentence than a made-up statistic?", a: "\"I don't have a figure, but I know one person it wasn't true for.\"", bundle: 'pro' },
      ]
    },
  ],
  discussing: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The two halves and what holds them together.",
      cards: [
        { q: "What are the two halves of a discussion?", a: "Me-Focus — saying what you think and why. You-Focus — taking in what they think.", bundle: 'free' },
        { q: "What is the skill the pack actually trains?", a: "The balance between the two, kept up over a longer stretch rather than in a single exchange.", bundle: 'free' },
        { q: "What happens if both people only do Me-Focus?", a: "Two monologues delivered alternately.", bundle: 'free' },
        { q: "What happens if both people only do You-Focus?", a: "Nothing to discuss — nobody has put a position on the table.", bundle: 'pro' },
        { q: "Does a discussion have to end in agreement?", a: "No. The outcome to aim for is that both understand the question better, which is compatible with still disagreeing.", bundle: 'pro' },
        { q: "How is this different from Agreeing and Disagreeing?", a: "Those are single moves. This is keeping the whole thing going for ten minutes.", bundle: 'pro' },
      ]
    },
    {
      name: "Say What You Think",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind putting a position on the table.",
      cards: [
        { q: "Why say \"I think\" rather than stating it as fact?", a: "An opinion presented as a fact invites a fight about the fact; presented as an opinion it invites a conversation about the subject.", bundle: 'free' },
        { q: "What is the commonest reason a discussion stalls politely?", a: "Nobody has actually said what they think, so there is nothing to respond to.", bundle: 'free' },
        { q: "What does saying the weight of your view do?", a: "Tells them how hard to push back — \"I lean that way, not strongly\" is useful information.", bundle: 'pro' },
        { q: "Is \"I don't know what I think\" a position?", a: "Yes, and an honest one. It is different from avoiding the question.", bundle: 'pro' },
        { q: "Why is owning it harder to argue with?", a: "You are the authority on what you think. Nobody can correct you about it.", bundle: 'pro' },
        { q: "What is the risk of dressing a preference as a principle?", a: "It makes the disagreement bigger than it is, and a preference is a perfectly good reason anyway.", bundle: 'pro' },
      ]
    },
    {
      name: "Give the Reason Behind It",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind saying why.",
      cards: [
        { q: "What is a bare opinion, and what is a reason?", a: "A wall and a door.", bundle: 'free' },
        { q: "How many reasons should you give?", a: "One, plainly. Three sounds like a case, and then they look for the weakest.", bundle: 'free' },
        { q: "What often turns out to be true once both reasons are visible?", a: "That you want the same thing and differ about one step.", bundle: 'pro' },
        { q: "What is the difference from Giving Examples?", a: "An example illustrates; a reason explains why you hold the view.", bundle: 'pro' },
        { q: "Is \"partly I just prefer it\" a legitimate reason?", a: "Yes, and saying so is stronger than dressing it up as something else.", bundle: 'pro' },
        { q: "What is repeating your conclusion more firmly?", a: "A volume control, not an argument.", bundle: 'pro' },
      ]
    },
    {
      name: "Say Their View Back",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind restating a position.",
      cards: [
        { q: "What does saying their view back do?", a: "Proves you were listening, and catches the misunderstanding that half of all disagreements turn out to be.", bundle: 'free' },
        { q: "What does someone do when they feel unheard?", a: "Repeats the same point, usually louder.", bundle: 'free' },
        { q: "What is the strongest version of it?", a: "Naming what they are actually protecting, not just their position.", bundle: 'pro' },
        { q: "What if they correct your version?", a: "That correction is the most useful sentence in the discussion.", bundle: 'pro' },
        { q: "How does it protect you?", a: "You never spend four minutes disagreeing with something they never claimed.", bundle: 'pro' },
        { q: "Does it mean you agree?", a: "No. You can restate a position accurately and then disagree with all of it.", bundle: 'pro' },
      ]
    },
    {
      name: "Ask What They Mean",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind clarifying.",
      cards: [
        { q: "When should you ask a clarifying question?", a: "Before you respond to anything ambiguous — it takes six words and saves four minutes.", bundle: 'free' },
        { q: "What do general words hide?", a: "Specific disagreements. Two people can use the same sentence and mean different things.", bundle: 'free' },
        { q: "What is the difference between a question and a cross-examination?", a: "\"Do you mean all of it, or some?\" is curiosity. \"So you're saying ALL of it?\" is a trap in the same words.", bundle: 'pro' },
        { q: "Name two kinds of clarifying question.", a: "Any two of: narrow the word, ask for a specific case, check the strength of the view.", bundle: 'pro' },
        { q: "Why ask for a case?", a: "An abstraction becomes discussable the moment it has an example in it.", bundle: 'pro' },
        { q: "Why check the strength?", a: "People rarely mean the extreme version, and you would argue differently against each.", bundle: 'pro' },
      ]
    },
    {
      name: "Let Them Finish",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind not interrupting.",
      cards: [
        { q: "Why let them finish, beyond politeness?", a: "The last quarter is where the qualification lives — the \"although\" that would have made your interruption unnecessary.", bundle: 'free' },
        { q: "What does an interruption cost?", a: "The point gets made again, longer, and now they have two things to say.", bundle: 'free' },
        { q: "What is the hard part of it?", a: "Not the silence — what happens in your head during it. Composing a reply is queueing, not listening.", bundle: 'pro' },
        { q: "What is a pause mid-sentence?", a: "Thinking. Not an invitation.", bundle: 'pro' },
        { q: "You interrupted anyway. What repairs it?", a: "\"Sorry, finish yours\" — it costs nothing and repairs it completely.", bundle: 'pro' },
        { q: "What is the test that you were listening?", a: "Whether you could summarise their point, not whether you agreed with it.", bundle: 'pro' },
      ]
    },
    {
      name: "Keep the Temperature Down",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind staying calm, in moves rather than advice.",
      cards: [
        { q: "Why does heat matter in a discussion?", a: "Two annoyed people stop hearing each other's reasons, so everything after that point is wasted however good the arguments are.", bundle: 'free' },
        { q: "What are the reliable signals?", a: "Physical ones — talking faster, talking over, the same point getting louder.", bundle: 'free' },
        { q: "Name the three moves that work.", a: "Name it jointly as \"we\", slow yourself visibly, and split the hot part off from the rest.", bundle: 'pro' },
        { q: "What should you never do?", a: "Tell the other person to calm down. It has never once worked.", bundle: 'pro' },
        { q: "Why \"we\" rather than \"you\"?", a: "\"You're getting heated\" is an accusation and adds heat. \"We're getting sharp\" is an observation you are inside.", bundle: 'pro' },
        { q: "What is the goal to hold on to?", a: "Still be talking in ten minutes. Winning an exchange with somebody you will see tomorrow is not winning.", bundle: 'pro' },
      ]
    },
  ],
  storybanter: [
    {
      name: "The Arc",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The six beats of a banter story, and what each one is for.",
      cards: [
        { q: "What are the six beats of a banter story?", a: "Trigger, invitation, exaggerated response, building together, escalating, and the wrap-up.", bundle: 'free' },
        { q: "What kind of thing should the trigger be?", a: "Small, everyday and true — a real frustration or observation. It is the only realistic line in the whole thing.", bundle: 'free' },
        { q: "What is the invitation?", a: "A playful open question from the other person that hands the story back. \"So what are you going to do instead?\"", bundle: 'free' },
        { q: "Why must the trigger stay small?", a: "The absurdity is built from it. If the opening line is already ridiculous there is nowhere to escalate to.", bundle: 'pro' },
        { q: "What is the wrap-up for?", a: "Stopping while it is still funny — and it is a deliberate move, not the story running out.", bundle: 'pro' },
        { q: "Whose story is it?", a: "Both people's. Nobody owns it, and the measure is whether it kept going, not who got the laughs.", bundle: 'pro' },
      ]
    },
    {
      name: "Yes, And",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind accepting and adding.",
      cards: [
        { q: "What does \"yes, and\" mean in practice?", a: "Accept whatever they added without questioning it, and put one thing on top.", bundle: 'free' },
        { q: "What is wrong with \"yes, but\"?", a: "It is a rejection wearing agreement's clothes, and everybody hears it.", bundle: 'free' },
        { q: "What is blocking?", a: "Answering an invented detail with a fact — \"that wouldn't happen\" — which stops the story dead.", bundle: 'pro' },
        { q: "How do you repair a block?", a: "Take it back lightly and accept the idea twice as hard. The repair is usually funnier than the original turn.", bundle: 'pro' },
        { q: "Does anything in the story have to be possible?", a: "No. The only rule is that you build on what you were given.", bundle: 'pro' },
        { q: "What is the smallest reliable build?", a: "One added detail. It does not have to be clever.", bundle: 'pro' },
      ]
    },
    {
      name: "What If",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind adding a complication.",
      cards: [
        { q: "What does a \"what if\" add?", a: "A problem — a threat to the plan rather than more of the plan.", bundle: 'free' },
        { q: "Why does a story need a problem?", a: "Two people building a pleasant afternoon run out in about four turns. A problem gives you both something to be funny about.", bundle: 'free' },
        { q: "Where should the complication be aimed?", a: "At the situation. A \"what if\" about the person is a dig with a question mark on it.", bundle: 'pro' },
        { q: "Name two kinds of complication.", a: "Any two of: someone finds out, the plan works too well, something ordinary goes wrong.", bundle: 'pro' },
        { q: "Why is \"the plan works too well\" funny?", a: "Success is a more surprising complication than failure, and it usually traps the character in something.", bundle: 'pro' },
        { q: "What is the tell that a story needs one?", a: "The last two or three turns were all agreeable.", bundle: 'pro' },
      ]
    },
    {
      name: "Make It Bigger",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind exaggeration in a shared story.",
      cards: [
        { q: "What is exaggeration doing here?", a: "Inflating what was just said past the point of sense — the gap between the two is the joke.", bundle: 'free' },
        { q: "How big is big enough?", a: "If you are wondering whether it is too much, it is not enough.", bundle: 'free' },
        { q: "Why is a cautious exaggeration a problem?", a: "It sounds like a correction rather than play.", bundle: 'pro' },
        { q: "Name three things you can inflate.", a: "The number, the time, and the stakes.", bundle: 'pro' },
        { q: "How is this different from exaggeration in Responsive Humour?", a: "There it is aimed at a real sentence someone meant. Here it is aimed at a shared invention.", bundle: 'pro' },
        { q: "Why is a huge exaggeration safe?", a: "Nobody could mistake it for a real claim about anyone.", bundle: 'pro' },
      ]
    },
    {
      name: "Bring Someone In",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind adding characters.",
      cards: [
        { q: "What does a new character give the story?", a: "A reaction — and a reaction is the most reliable source of comedy available.", bundle: 'free' },
        { q: "Which characters work best?", a: "People who would obviously never be involved — a neighbour, a delivery driver, someone's grandmother.", bundle: 'free' },
        { q: "Why is an animal or an object the safest character?", a: "Nobody can be offended on its behalf.", bundle: 'pro' },
        { q: "What does a new person do to a story that is running out?", a: "Restarts it for free — they can want something, disapprove of something, or arrive at the wrong moment.", bundle: 'pro' },
        { q: "What should you do with a character the other person introduced?", a: "Ask about them rather than moving on. \"Is the dog enjoying maths?\" is a whole turn.", bundle: 'pro' },
        { q: "When should you bring someone in?", a: "Before the story runs out, not after.", bundle: 'pro' },
      ]
    },
    {
      name: "Then What Happens",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind following the consequence.",
      cards: [
        { q: "What is the consequence technique?", a: "Following the last idea to what must now happen because of it, rather than inventing something new.", bundle: 'free' },
        { q: "Why is it the best move when you are stuck?", a: "It needs no idea of your own — their last line already contains the next one.", bundle: 'free' },
        { q: "Which is usually funnier, the immediate result or the delayed one?", a: "The delayed one — \"and two years later it comes up in a job interview\".", bundle: 'pro' },
        { q: "What does a chain of consequences do for the story?", a: "Makes it feel like a story rather than a list of jokes, because each turn is caused by the one before it.", bundle: 'pro' },
        { q: "What should you ask yourself when you go blank?", a: "What happens next — not what would be funny.", bundle: 'pro' },
        { q: "How can a consequence tie the story together?", a: "By landing on a detail from several turns earlier, which is the most satisfying ending available.", bundle: 'pro' },
      ]
    },
    {
      name: "Solve It Ridiculously",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind the absurd solution.",
      cards: [
        { q: "What is an absurd solution?", a: "A fix that could not possibly work, delivered as though the only question left is logistics.", bundle: 'free' },
        { q: "What makes it land?", a: "Confidence. Hesitation turns it from a bit into nonsense.", bundle: 'free' },
        { q: "When is it most useful?", a: "When the story has painted itself into a corner — the corner is the setup for the silliest exit.", bundle: 'pro' },
        { q: "Which kind is funniest?", a: "The solution that makes the situation worse.", bundle: 'pro' },
        { q: "Name two kinds.", a: "Any two of: impossible technology, insane logistics said as admin, and the fix that makes it worse.", bundle: 'pro' },
        { q: "Does it end the story?", a: "Not necessarily — it releases the pressure and lets the story breathe, which often produces another round.", bundle: 'pro' },
      ]
    },
  ],
  explainthings2: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The six question words, and how the two packs divide them.",
      cards: [
        { q: "What are the six question words?", a: "What, How, Why, When, Where and Who.", bundle: 'free' },
        { q: "Which three does Explain Things Pt. 1 cover?", a: "What it is, how it works and why it matters.", bundle: 'free' },
        { q: "Which three does this pack cover?", a: "When it comes up, where it belongs and who it is for.", bundle: 'free' },
        { q: "What do the first three do, and what do these three do?", a: "The first three make something understandable; these three make it placed — they answer whether it has anything to do with the listener.", bundle: 'pro' },
        { q: "Do you use all six every time?", a: "No. They are a menu. Serving them in order is how an explanation becomes a lecture.", bundle: 'pro' },
        { q: "What is the difference from Storytelling with the Six W's?", a: "There the six describe an event. Here they explain a thing or an idea.", bundle: 'pro' },
      ]
    },
    {
      name: "When It Comes Up",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind the When piece.",
      cards: [
        { q: "What does the When piece answer?", a: "The moment or situation that calls for the thing.", bundle: 'free' },
        { q: "Why does it matter more than a description?", a: "It lets someone recognise a situation they have actually been in.", bundle: 'free' },
        { q: "Name two kinds of when.", a: "Any two of: the trigger moment, how often it comes up, and the wrong time to use it.", bundle: 'pro' },
        { q: "Why is \"the wrong time\" worth saying?", a: "It stops the commonest misuse before it happens, and it is information nobody else gives them.", bundle: 'pro' },
        { q: "One occasion or a list?", a: "One. \"When you're moving house\" beats a sentence with three situations in it.", bundle: 'pro' },
        { q: "What question is the listener really asking?", a: "Whether they would ever need it.", bundle: 'pro' },
      ]
    },
    {
      name: "Where It Belongs",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind the Where piece.",
      cards: [
        { q: "What does the Where piece answer?", a: "The setting or the point in a process where the thing fits — not where it is physically kept.", bundle: 'free' },
        { q: "What is the strongest version of it?", a: "Naming the neighbours — what it sits between, what comes before and after.", bundle: 'free' },
        { q: "Name three kinds of where.", a: "The setting, the place in a process, and where it came from when the origin explains the shape.", bundle: 'pro' },
        { q: "Why do neighbours help memory?", a: "People file new things by what they sit next to. Something with nothing beside it is remembered as a floating fact.", bundle: 'pro' },
        { q: "How is this different from Describe Things?", a: "Describe Things says where you would find the object. This says which context makes sense of it.", bundle: 'pro' },
        { q: "What does \"give it a shelf before you give it a manual\" mean?", a: "Place the thing before you explain its mechanics, or the mechanics have nowhere to land.", bundle: 'pro' },
      ]
    },
    {
      name: "Who It Is For",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind the Who piece.",
      cards: [
        { q: "What does the Who piece answer?", a: "Which group the thing is built for — and which it is not.", bundle: 'free' },
        { q: "Why name who it is NOT for?", a: "It makes the rest believable. An explanation where everyone benefits sounds like an advertisement.", bundle: 'free' },
        { q: "What is the least useful answer to \"would I like it?\"", a: "\"It depends\" — they can hear that you are avoiding the question.", bundle: 'pro' },
        { q: "What should you tell them directly?", a: "Which group they are in, even when the honest answer is that it is not for them.", bundle: 'pro' },
        { q: "What does an honest exclusion buy you?", a: "Trust in everything else you say, including the next recommendation.", bundle: 'pro' },
        { q: "Why does relevance decide whether they keep listening?", a: "Someone who has been told it is not for them can stop working out whether it is.", bundle: 'pro' },
      ]
    },
    {
      name: "Start Short, Then Go Deeper",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind levels of detail.",
      cards: [
        { q: "What is the correct first answer?", a: "The one-sentence version, in words they already have.", bundle: 'free' },
        { q: "When do you go deeper?", a: "When they ask, or when their face asks.", bundle: 'free' },
        { q: "What are the three levels?", a: "One sentence, then the detail that makes it different from the obvious version, then the whole thing — which is rarely requested.", bundle: 'pro' },
        { q: "Why not decide the length in advance?", a: "You cannot know how interested someone is until you have given them something to want more of.", bundle: 'pro' },
        { q: "What do three \"rights\" in a row mean?", a: "Land it in one sentence and stop.", bundle: 'pro' },
        { q: "Is the short version a simplification you apologise for?", a: "No. It is the correct first answer; the rest is available if wanted.", bundle: 'pro' },
      ]
    },
    {
      name: "Answer the W They Actually Asked",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind picking the right piece.",
      cards: [
        { q: "What does \"what is it?\" usually mean?", a: "\"Would I ever need this?\" — the literal answer is rarely the useful one.", bundle: 'free' },
        { q: "What do you do when an explanation does not land?", a: "Change the W, not the volume.", bundle: 'free' },
        { q: "Where is the tell about which piece they need?", a: "In the situation rather than the words — holding it, deciding whether to buy it, about to use it.", bundle: 'pro' },
        { q: "Someone is about to use the thing. Which W?", a: "How.", bundle: 'pro' },
        { q: "Someone is deciding whether to buy it. Which W?", a: "Who and When.", bundle: 'pro' },
        { q: "What is the six-word repair when you cannot tell?", a: "\"What it is, or what for?\"", bundle: 'pro' },
      ]
    },
  ],
  buildingastory: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The shape of a told story, and what this pack covers that the others do not.",
      cards: [
        { q: "What are the four parts of a told story?", a: "The opening, the turn, the resolution, and the takeaway — the last of which is optional.", bundle: 'free' },
        { q: "Which part is load-bearing?", a: "The turn. Without it you have a description of a day rather than a story.", bundle: 'free' },
        { q: "How is this different from Storytelling with the Six W's?", a: "The Six W's are the ingredients — what, how, why, when, where, who. This is the shape they are arranged into.", bundle: 'free' },
        { q: "How is it different from Stories in Conversation?", a: "That pack owns the social frame — when to tell one, how to notice you have lost the room, how to stop. This owns how the story itself is built.", bundle: 'pro' },
        { q: "What is the standard a story has to clear?", a: "Small, true and shaped. The size of the event is almost irrelevant.", bundle: 'pro' },
        { q: "Which two parts do people most often miss out?", a: "The turn, and the ending — the second because the laugh has already happened.", bundle: 'pro' },
      ]
    },
    {
      name: "Open It in One Sentence",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind the setup.",
      cards: [
        { q: "How long should the opening be?", a: "One to three sentences.", bundle: 'free' },
        { q: "What are the four ways to open?", a: "Straight into the action, set the scene, the hook, or the feeling first.", bundle: 'free' },
        { q: "What is the job of the first sentence?", a: "To make them want the second one. Not to explain anything.", bundle: 'pro' },
        { q: "What causes an overlong setup?", a: "Explaining who everybody is before anything has happened.", bundle: 'pro' },
        { q: "When can context be delivered?", a: "Late, or not at all — the listener builds most of it themselves.", bundle: 'pro' },
        { q: "Which opening connects the listener fastest?", a: "The feeling first — it reaches them before the facts do.", bundle: 'pro' },
      ]
    },
    {
      name: "Name the Turn",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind the turning point.",
      cards: [
        { q: "What is the turn?", a: "The moment the ordinary became a story — the problem, the surprise, the decision, the realisation.", bundle: 'free' },
        { q: "How long should it be?", a: "Two to four sentences. Clear rather than dramatic.", bundle: 'free' },
        { q: "Name three kinds of turn.", a: "Any three of: the unexpected event, the problem, conflict with someone, the internal decision, the moment of realisation.", bundle: 'pro' },
        { q: "What does everything before and after the turn become?", a: "Setup and consequence.", bundle: 'pro' },
        { q: "What if you cannot name the turn?", a: "You may not have a story — you may have an anecdote about a day, which is allowed as long as you do not tell it as though a punchline is coming.", bundle: 'pro' },
        { q: "Small turn or big turn?", a: "A small thing said sharply beats a big thing described at length.", bundle: 'pro' },
      ]
    },
    {
      name: "Land the Resolution",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind the ending.",
      cards: [
        { q: "What does a resolution contain?", a: "What you did, and what happened because of it — in that order.", bundle: 'free' },
        { q: "Why does an unlanded ending deflate a story?", a: "The listener cannot tell whether you have finished, so they say \"right\" and it dies in its last two seconds.", bundle: 'free' },
        { q: "Name three shapes of ending.", a: "What you did and what followed; the thing that resolved without you; the flat statement.", bundle: 'pro' },
        { q: "Is a flat ending acceptable?", a: "Yes — most stories have no punch, and \"so we drove home, that's it\" is a complete ending.", bundle: 'pro' },
        { q: "Why do endings get mumbled?", a: "The teller has already had the laugh they wanted and loses interest in the last sentence.", bundle: 'pro' },
      ]
    },
    {
      name: "Say the Takeaway",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind the lesson — including when not to have one.",
      cards: [
        { q: "What is the takeaway?", a: "What changed, what you understood, or what you would tell somebody in the same position.", bundle: 'free' },
        { q: "What is the rule people break?", a: "Not every story has one. A forced moral is worse than none.", bundle: 'free' },
        { q: "What is the most concrete kind?", a: "What you do differently now.", bundle: 'pro' },
        { q: "What is the most useful kind for the listener?", a: "What you would tell someone about to be in the same position.", bundle: 'pro' },
        { q: "What do you say when there is no lesson?", a: "That there is no lesson. \"It was just a strange day\" is a complete ending.", bundle: 'pro' },
        { q: "What is the sign a takeaway has been bolted on?", a: "It is more general than the story it came from.", bundle: 'pro' },
      ]
    },
    {
      name: "Pick One Fast",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind telling one on the spot.",
      cards: [
        { q: "How long should choosing take?", a: "About fifteen seconds. Then start, even if you have not worked out the ending.", bundle: 'free' },
        { q: "Which story should you pick?", a: "The first small one that arrives, not the best one you know.", bundle: 'free' },
        { q: "One moment or one period?", a: "One moment. \"The night the taxi didn't come\", not \"that whole summer\".", bundle: 'pro' },
        { q: "Why does recent beat impressive?", a: "It is easier to tell and easier for the listener to recognise.", bundle: 'pro' },
        { q: "Why are most stories missed?", a: "Not from having none — from the moment ending while the person was still choosing.", bundle: 'pro' },
        { q: "What beats a great story thought of later?", a: "A mediocre one told now.", bundle: 'pro' },
      ]
    },
    {
      name: "Tell It With the Feeling In It",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind the emotional telling.",
      cards: [
        { q: "Why does the feeling matter more than the events?", a: "Listeners follow feeling more closely than they follow events. Without it an account is a report.", bundle: 'free' },
        { q: "How do you get the feeling across?", a: "Say it plainly, out loud, at least once. It does not arrive through detail alone.", bundle: 'free' },
        { q: "What else does the feeling decide?", a: "The pace — slow for the difficult moment, quick for the chaos — and which details are worth keeping.", bundle: 'pro' },
        { q: "What is the exercise worth practising?", a: "Telling the same story twice, once as the funny version and once as the honest one.", bundle: 'pro' },
        { q: "What does that exercise teach?", a: "That the events are not the story. The feeling you put in is a choice, and it should be chosen rather than defaulted to.", bundle: 'pro' },
        { q: "What if the feeling was ordinary?", a: "Say that. \"Mostly I was just tired\" is honest, and honest lands.", bundle: 'pro' },
      ]
    },
  ],
  reframing: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "What reframing is, and what it is not.",
      cards: [
        { q: "What is reframing?", a: "Taking the same facts and offering a different reading of them — the facts do not move, only the frame around them.", bundle: 'free' },
        { q: "What are the four types?", a: "Positive, context, meaning and humorous.", bundle: 'free' },
        { q: "What is the one rule that keeps it honest?", a: "It has to be true — a reframe must hold every fact the original reading held.", bundle: 'free' },
        { q: "What is the difference from a counter-example?", a: "A counter-example changes what is claimed to be true. A reframe leaves the facts alone and changes the conclusion drawn from them.", bundle: 'pro' },
        { q: "How is it different from validation?", a: "Validation says a feeling is reasonable. A reframe offers another reading of the situation, and it comes afterwards, not instead.", bundle: 'pro' },
        { q: "What is the delivery rule for the whole pack?", a: "Acknowledge first, offer second, hold it loosely — and be willing to have no reframe at all.", bundle: 'pro' },
      ]
    },
    {
      name: "The Positive Reframe",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind finding the upside.",
      cards: [
        { q: "What is a positive reframe?", a: "The true upside in something presented as bad — the reading that was available and unused.", bundle: 'free' },
        { q: "What makes it fail?", a: "Requiring you to ignore something. Then it is denial rather than a reframe.", bundle: 'free' },
        { q: "Which upside is most reliably true?", a: "What was learned — you know something now that you did not before.", bundle: 'pro' },
        { q: "Which upside do people most often miss?", a: "What was avoided. \"That would have been much worse in December.\"", bundle: 'pro' },
        { q: "How do you know it is spin rather than a reframe?", a: "You would not say the same thing about it in a month.", bundle: 'pro' },
      ]
    },
    {
      name: "The Context Reframe",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind moving the setting.",
      cards: [
        { q: "What is a context reframe?", a: "The same behaviour judged in a different setting, where it is an asset rather than a fault.", bundle: 'free' },
        { q: "Why is it so useful against labels?", a: "It concedes nothing and denies nothing — the behaviour is agreed, only the verdict moves.", bundle: 'free' },
        { q: "Name three ways to move the context.", a: "Another setting, another time, or another observer.", bundle: 'pro' },
        { q: "What is context-blindness in a criticism?", a: "Naming a behaviour and treating it as universally bad, when it is really about the fit with this situation.", bundle: 'pro' },
        { q: "Give the classic example.", a: "\"Too stubborn\" in a queue is exactly what you want on your side in a negotiation.", bundle: 'pro' },
      ]
    },
    {
      name: "The Meaning Reframe",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind changing the conclusion.",
      cards: [
        { q: "What is a meaning reframe?", a: "Leaving the event exactly as it was and changing what it is taken to mean.", bundle: 'free' },
        { q: "Why is the meaning usually the weak part?", a: "What happened is one sentence. Everything painful attached to it is an interpretation that arrived fast enough to feel like a fact.", bundle: 'free' },
        { q: "What is the test of a meaning reframe?", a: "Whether the new meaning fits the same facts. If it needs different facts it is wishful thinking.", bundle: 'pro' },
        { q: "Which alternative meaning resolves the most cases?", a: "That it is not about you at all.", bundle: 'pro' },
        { q: "Give a self-directed example.", a: "\"I was nervous, so I wasn't ready\" becomes \"nervous usually means it mattered\".", bundle: 'pro' },
      ]
    },
    {
      name: "The Humorous Reframe",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind using scale.",
      cards: [
        { q: "What does a humorous reframe aim at?", a: "The size of the thing — usually smaller than it is being treated, occasionally absurdly larger.", bundle: 'free' },
        { q: "What must it never aim at?", a: "The person's reaction. Then it becomes \"you're overreacting\" with a smile on it.", bundle: 'free' },
        { q: "Why does scale work so well?", a: "Most distress about a small thing is a scale error, and scale is the easiest thing for someone to hear.", bundle: 'pro' },
        { q: "How is it different from Responsive Humour?", a: "There the aim is to be funny about what was said. Here the aim is to take the sting out by naming the real size.", bundle: 'pro' },
        { q: "What does a late laugh tell you?", a: "That it landed on them rather than on the event. Repair it plainly.", bundle: 'pro' },
      ]
    },
    {
      name: "Reframe What They Said About You",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind answering a label.",
      cards: [
        { q: "What is the move when somebody labels you?", a: "Agree with the behaviour, decline the verdict, and give it your own word.", bundle: 'free' },
        { q: "Why not just deny it?", a: "Arguing with a label keeps you inside it — you become the person defending themselves against being too serious.", bundle: 'free' },
        { q: "What is the strongest version?", a: "Owning it plainly. \"Yes. I'm completely at peace with that\" ends the exchange.", bundle: 'pro' },
        { q: "What is the third beat, and why does it matter?", a: "Moving on. A reframe you then defend for five minutes has become an argument about you.", bundle: 'pro' },
        { q: "Why is this the safest strategy in the pack?", a: "The frame you are changing is your own.", bundle: 'pro' },
      ]
    },
    {
      name: "Offer It, Don't Impose It",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind delivery.",
      cards: [
        { q: "What has to come before a reframe?", a: "One true sentence acknowledging how it actually is.", bundle: 'free' },
        { q: "What do you do when they do not take it?", a: "Let it go. \"That's just how it looked from here.\"", bundle: 'free' },
        { q: "What does a reframe become when it is repeated?", a: "An argument about whose reading is correct — which nobody wins.", bundle: 'pro' },
        { q: "What is the four-second question that changes everything?", a: "\"Do you want another angle on it, or not right now?\"", bundle: 'pro' },
        { q: "Why does \"you should see it as\" fail?", a: "It tells them their reading is wrong, and people defend a reading they have been told is wrong even when they did not like it.", bundle: 'pro' },
      ]
    },
    {
      name: "Know When Not To",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The theory behind the limits.",
      cards: [
        { q: "When should you not reframe?", a: "When the thing is genuinely bad, when the feeling has not been heard yet, and when the feeling is the accurate response.", bundle: 'free' },
        { q: "What is a complete response when there is no good angle?", a: "\"That's just bad, and I'm sorry.\"", bundle: 'free' },
        { q: "What is the failure mode of this whole pack called?", a: "Toxic positivity — reframing somebody's feeling before they have been heard.", bundle: 'pro' },
        { q: "What does it actually cause?", a: "Not cheerfulness. They stop telling you things.", bundle: 'pro' },
        { q: "What are the three tests?", a: "Would the new reading require leaving something out; has the feeling been acknowledged yet; and is the feeling accurate?", bundle: 'pro' },
        { q: "What do people mostly want in the first hour?", a: "Company rather than perspective.", bundle: 'pro' },
      ]
    },
  ],
  danbacon1: [
    {
      name: "Creating the Spark",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Hold the core principles of Dan Bacon's flirtatious banter and attraction philosophy.",
      cards: [
        { q: "What is the \"Attraction Equation\"?", a: "Making her feel sexually attracted + being a good guy = Being \"Charming.\"", bundle: 'free' },
        { q: "What is the \"80/20 Rule\" in banter?", a: "80% normal/confident behavior and 20% unpredictable/silly behavior.", bundle: 'free' },
        { q: "Why should you avoid being \"too nice\"?", a: "It signals you don't feel worthy of her and makes the interaction one-dimensional and boring.", bundle: 'free' },
        { q: "What is the \"Halo Effect\"?", a: "The psychological tendency to assume attractive people are smarter, nicer, and more valuable just because of their looks.", bundle: 'free' },
        { q: "What does it mean to \"Flip the Script\"?", a: "Taking on the role of the judge/selector so she feels the need to be accepted by you.", bundle: 'free' },
        { q: "What is \"Instant Attraction\"?", a: "The automatic response a man feels for a healthy, attractive woman; it is natural and nothing to be ashamed of.", bundle: 'pro' },
        { q: "Why is \"Independent Confidence\" important?", a: "It's the ability to feel confident regardless of how a woman behaves or tests you.", bundle: 'pro' },
        { q: "How do you handle a \"Confidence Test\"?", a: "By remaining calm, not taking it seriously, and playfully challenging her back.", bundle: 'pro' },
        { q: "What is an \"Open Type\"?", a: "The majority of women who are open to all kinds of guys as long as the guy can trigger her attraction.", bundle: 'pro' },
        { q: "When is the best time to discuss intellectual or serious ideas?", a: "After you have had sex with her and she is already attracted and in love.", bundle: 'pro' },
      ]
    },
  ],
  danbacon2: [
    {
      name: "Assertive Presence",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Hold the core definitions of frame control and high-status communication.",
      cards: [
        { q: "What is the \"Halo Effect\"?", a: "The psychological tendency to assume attractive people are smarter and more valuable just because of their looks.", bundle: 'free' },
        { q: "What defines \"High Social Status\" in a greeting?", a: "Using a relaxed, assertive \"how you doing\" instead of an apologetic \"excuse me.\"", bundle: 'free' },
        { q: "What is a \"Confidence Test\"?", a: "A challenge where a woman says something \"mean\" or \"boring\" to see if you will crumble or get nervous.", bundle: 'free' },
        { q: "What does \"Flipping the Script\" mean?", a: "Taking the role of the judge/selector so she feels the need to be accepted by you.", bundle: 'free' },
        { q: "Why avoid \"Self-Qualification\"?", a: "Because trying to build yourself up signals that you don't feel \"good enough\" as you are.", bundle: 'free' },
        { q: "What is \"Independent Confidence\"?", a: "Feeling confident regardless of a woman's behavior, signals, or tests.", bundle: 'pro' },
        { q: "What is the \"Teflon\" frame?", a: "The ability to let a woman's scolding or negative comments slide off you without affecting your mood.", bundle: 'pro' },
        { q: "Why is being \"not easily tamed\" attractive?", a: "It creates a challenge for her to acquire you, which is exciting for attractive women who are used to men falling in love instantly.", bundle: 'pro' },
        { q: "What is \"Judgmental tonality\"?", a: "Speaking with a slight sense that you are evaluating the other person's value or behavior.", bundle: 'pro' },
        { q: "What is the \"Open Type\"?", a: "The majority of women who are open to any guy as long as he can trigger her emotional attraction.", bundle: 'pro' },
      ]
    },
  ],
  danbacon3: [
    {
      name: "Relationship Mastery",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Hold the core definitions of Dan Bacon's relationship philosophy.",
      cards: [
        { q: "What is the \"Good Girl Switch\"?", a: "The dynamic where a woman gains pleasure and happiness out of being attentive and good to her man.", bundle: 'free' },
        { q: "What is \"Emotional Independence\"?", a: "Not needing your woman's emotional support, attention, or \"pat on the back\" to feel okay.", bundle: 'free' },
        { q: "What is \"General Leadership\"?", a: "Providing the direction and approval for the relationship while letting her make specific decisions and do some of the work.", bundle: 'free' },
        { q: "How should you handle her hormonal moodiness?", a: "Be assertive but loving; let her know it's not a free pass to treat you badly.", bundle: 'free' },
        { q: "Why is \"Sucking Up\" a mistake?", a: "It makes her lose respect for you and stops her from feeling sexually attracted.", bundle: 'free' },
        { q: "What is the \"Coffee Test\"?", a: "A way to lovingly expect more by asking for a drink and rewarding her with affection when she complies.", bundle: 'pro' },
        { q: "How many times is an \"order\" usually asked for in sales (and closing)?", a: "At least three times.", bundle: 'pro' },
        { q: "What is \"Independent Confidence\"?", a: "Feeling confident regardless of how a woman behaves or what she says.", bundle: 'pro' },
        { q: "Why should a man avoid being \"too nice\"?", a: "She may assume he is boring or doesn't feel worthy of her value.", bundle: 'pro' },
        { q: "What defines a \"Charming\" guy?", a: "Making her feel sexually attracted + being a good guy.", bundle: 'pro' },
      ]
    },
  ],
  danbacon4: [
    {
      name: "Holding the Frame",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Hold the core definitions of Dan Bacon's frame and boundary philosophy.",
      cards: [
        { q: "What is a \"Ridiculous Rule\"?", a: "A test of power where a woman sets a meaningless boundary to see if her man will abide by it out of fear.", bundle: 'free' },
        { q: "What is the \"Good Girl Switch\"?", a: "The dynamic where a woman gains pleasure and happiness out of being attentive and good to her man.", bundle: 'free' },
        { q: "What defines \"Independent Confidence\"?", a: "Feeling confident regardless of a woman's behavior, signals, or tests.", bundle: 'free' },
        { q: "Why should you avoid being \"neutral\" in a relationship?", a: "It turns the interaction into a friendship or \"housemate\" dynamic, which kills the sexual spark.", bundle: 'free' },
        { q: "What is \"General Leadership\"?", a: "Providing the direction and approval for the relationship while letting her make specific decisions.", bundle: 'free' },
        { q: "What is the \"Icarus Effect\"?", a: "Getting too close to sex/resolution without closing, then flailing or pushing too hard and causing a flake.", bundle: 'pro' },
        { q: "What is the rule about \"Fearing her reaction\"?", a: "If you fear her reaction, she won't feel attraction.", bundle: 'pro' },
        { q: "How should a man handle a woman's hormonal moodiness?", a: "Be assertive but loving; let her know it's not a free pass to treat you badly.", bundle: 'pro' },
        { q: "Why is \"Sucking Up\" a mistake?", a: "It makes her lose respect for you and stops her from feeling sexually attracted.", bundle: 'pro' },
        { q: "What is the \"80/20 Rule\" in relationships?", a: "80% normal/confident behavior and 20% unpredictable/playful behavior.", bundle: 'pro' },
      ]
    },
  ],
  oconnor1: [
    {
      name: "Tactics and Mechanics",
      description: "Core mechanics of tactical communication and boundary setting.",
      cards: [
        { q: "What are the \"Three Watchmen\" you encounter after standing your ground?", a: "1. The Supporter (in awe), 2. The Competitor (jealous/scared), 3. The Decision Maker (sees leadership material).", bundle: 'free' },
        { q: "How do you perform the \"Icy Stare\" correctly?", a: "Maintain direct eye contact with eyelids slightly covering the top of the iris; avoid \"psychosis eyes\" (wide open).", bundle: 'free' },
        { q: "What is the difference between \"Why\" and \"What\" questions?", a: "\"Why\" leads to rumination and defensive excuses; \"What\" gets specific facts or calls out the behavior's venue.", bundle: 'free' },
        { q: "How do you find your \"Power Tone\"?", a: "Look down into your lap, say a phrase, and lift your chin as you finish the sentence.", bundle: 'free' },
        { q: "What are the components of the A-E-I-O-U script?", a: "Actions (unacceptable), Effects (of behavior), I (what I ask), Or else (consequence), You (positive benefit).", bundle: 'free' },
        { q: "In the AEIOU script, what is the precise definition of \"Or Else\" and \"You\"?", a: "\"Or Else\" is the negative consequence of continued behavior; \"You\" is the positive benefit the other person receives for complying.", bundle: 'free' },
        { q: "What are the two mandatory components of an effective coping statement?", a: "1. Present tense (\"I am\"), 2. Positively phrased (\"I am calm\" vs \"I won't cry\").", bundle: 'pro' },
        { q: "What are \"Territorial Markers\" and why use them?", a: "Physical objects (pen, notebook) placed on a table to mark your space, project confidence, and signal you belong.", bundle: 'pro' },
      ]
    },
  ],
  oconnor2: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Key concepts from Dan O’Connor’s \"Professional Boundaries\" teachings.",
      cards: [
        { q: "What are the four 'S's of the Diplomatic Decline?", a: "Sympathize, Say No, Say Why (Benefit), and Suggest Alternatives.", bundle: 'free' },
        { q: "What does the 'B-I-B' script stand for?", a: "Boundary, Instruction, and Benefit.", bundle: 'free' },
        { q: "What is the \"Number One Mistake\" professional communicators make?", a: "Winging it. Approach difficult talks with scripted freestyle scripts instead.", bundle: 'free' },
        { q: "Why should you avoid saying \"Constructive Criticism\"?", a: "It's outdated and creates a negative biochemical reaction. Use \"Feedback\" instead.", bundle: 'free' },
        { q: "What is the \"Broken Record\" technique?", a: "Repeating your valid message (e.g., \"That may be, but...\") without adding new justifications or defenses.", bundle: 'free' },
        { q: "What is the \"AEIOU\" script used for?", a: "Actions (unacceptable), Effects, Instruction (what to do), Or else, and You (what you get).", bundle: 'pro' },
        { q: "What does Dan mean by \"Form follows Substance\"?", a: "When your internal intention (substance) is clear and peaceful, the right words (form) take shape naturally.", bundle: 'pro' },
        { q: "Why is \"I don't appreciate...\" considered a weak phrase?", a: "It has no real meaning and doesn't set a hard line. Be specific about the facts and consequences instead.", bundle: 'pro' },
        { q: "What are \"Power-Down Phrases\"?", a: "Closing statements that firm up your position and signal you are exiting an unproductive conversation.", bundle: 'pro' },
      ]
    },
  ],
  oconnor3: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Key principles for handling high-conflict and narcissistic personalities.",
      cards: [
        { q: "What is the \"Number One Rule\" when dealing with a narcissist?", a: "Don't defend yourself. We only defend against what we perceive to be vulnerable.", bundle: 'free' },
        { q: "What does \"Selective Engagement\" mean?", a: "I decide who I respond to, how I respond, and what thoughts I allow in my brain.", bundle: 'free' },
        { q: "Why use the passive voice with narcissists (e.g., \"A mistake was made\")?", a: "Because it avoids a direct identity attack, which narcissists are biologically programmed to deflect or counter-attack.", bundle: 'free' },
        { q: "What is the \"Illusion of Choice\"?", a: "Offering two paths that both lead to your boundary being respected, satisfying the narcissist's need for control.", bundle: 'free' },
        { q: "What is the \"litmus test\" for a loving response?", a: "If you can mentally preface it with \"It's because I love [myself/the goal] that I am saying this,\" it is a loving act.", bundle: 'free' },
        { q: "Why is \"I don't appreciate...\" a weak phrase?", a: "It has no real meaning at work. Focus on the behavior and the logical consequences instead.", bundle: 'pro' },
        { q: "What is \"illuminating the battlefield\"?", a: "Calling out the behavior for what it is (e.g., \"You're trying to embarrass me\") to reveal the true nature of the interaction.", bundle: 'pro' },
        { q: "What does Dan say about \"taking away the reward\"?", a: "Since toxic behavior is driven by the reaction it gets, taking away the reaction stops the behavior from being repeated.", bundle: 'pro' },
      ]
    },
  ],
  oconnor4: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Key concepts on leadership and professional image from Dan O'Connor.",
      cards: [
        { q: "What does LBNT stand for?", a: "Liked Best / Next Time.", bundle: 'free' },
        { q: "Why should you avoid the word \"idea\" when presenting a solution?", a: "Because people associate \"ideas\" with worker bees; leaders bring \"solutions,\" \"answers,\" or \"proposals.\"", bundle: 'free' },
        { q: "What is the \"Porky the Pig\" mistake?", a: "Trailing off at the end of a message with phrases like \"So... yeah, that's it.\"", bundle: 'free' },
        { q: "What are the three components of a good Lead-in Line?", a: "Short, use the other person's name, and use \"I\" language.", bundle: 'free' },
        { q: "What is the rule of thumb for \"You\" vs \"I\"?", a: "\"You\" language triggers defensiveness; \"I\" language slows down self-talk and gets the message through.", bundle: 'free' },
        { q: "What is a \"Tag Question\"?", a: "A statement with a quick yes/no confirmation at the end (e.g., \"Reasonable, isn't it?\") used to get buy-in.", bundle: 'pro' },
        { q: "What does D-A-R-T stand for in boundary setting?", a: "Describe (intent), Address (distraction), Redirect (to goal), Tag question (buy-in).", bundle: 'pro' },
        { q: "Why is \"I don't appreciate...\" a weak phrase for leaders?", a: "It is vague and lacks professional meaning. Focus on facts and logical consequences instead.", bundle: 'pro' },
        { q: "What is the \"Number One\" rule for maintaining power?", a: "We only defend against what we believe to be vulnerable. If you are sure of yourself, you don't defend.", bundle: 'pro' },
      ]
    },
  ],
  oconnor5: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Key concepts on non-verbal power from Dan O'Connor.",
      cards: [
        { q: "What is the \"Power Hum\"?", a: "Saying \"mm-hmm\" to find the vibration at the bottom of the throat for a more credible power tone.", bundle: 'free' },
        { q: "What does a neck scratch signal on a subconscious level?", a: "Confusion, frustration, or that the person is not 100% sure of their answer.", bundle: 'free' },
        { q: "How long should you hold the Steeple pose?", a: "No more than four seconds at a time; otherwise it becomes overpowering.", bundle: 'free' },
        { q: "What is the \"7-second rule\" for eye contact?", a: "Breaking eye contact (by looking down) every 7-10 seconds to avoid looking aggressive or creepy.", bundle: 'free' },
        { q: "What does widening your eyes too much signal?", a: "Aggression, that they've \"gotten your goat,\" or a sign of psychosis.", bundle: 'free' },
        { q: "What are \"Territorial Markers\"?", a: "Objects like notebooks or pens used to physically claim space and signal belonging in a room.", bundle: 'pro' },
        { q: "What biochemical changes happen during a \"Power Pose\"?", a: "Testosterone levels go up (increasing confidence) and cortisol levels go down (decreasing stress).", bundle: 'pro' },
        { q: "Why should you avoid looking UP when breaking eye contact?", a: "Because looking down is a natural cognitive break; looking up can appear dismissive or confused.", bundle: 'pro' },
        { q: "What is the \"Porky the Pig\" mistake in executive presence?", a: "Trailing off at the end of a message (e.g., \"So... yeah\"); use a closing question instead.", bundle: 'pro' },
      ]
    },
  ],
  oconnor6: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Key concepts on persistence and internal regulation from Dan O'Connor.",
      cards: [
        { q: "What are the two components of a properly formed Coping Statement?", a: "It must be in the Present Tense and Positively Phrased.", bundle: 'free' },
        { q: "Why is \"I will be calm\" a bad coping statement?", a: "Because it's in the future; your brain needs an instruction for RIGHT NOW.", bundle: 'free' },
        { q: "What is the \"Broken Record\" technique?", a: "Repeating a valid message without adding new justifications or defenses.", bundle: 'free' },
        { q: "Why should you avoid saying \"It's okay\" when someone apologizes?", a: "Because it wasn't okay five seconds ago; it makes you look wishy-washy and devalues your standard.", bundle: 'free' },
        { q: "What is the \"Number One Mistake\" in negotiations according to Dan?", a: "Winging it without data. Use a Value Journal to quantify your impact.", bundle: 'free' },
        { q: "What does \"We only defend what we believe to be vulnerable\" mean?", a: "If you are sure of your value and your decision, you don't need to justify it; your certainty is its own defense.", bundle: 'pro' },
        { q: "What is \"Syntax\" in self-talk?", a: "The specific word order (Present/Positive) that allows the brain to process information efficiently.", bundle: 'pro' },
        { q: "How does a Value Journal help during a \"budget freeze\"?", a: "It allows you to show that your specific role is generating revenue or saving costs, making you an exception to the freeze.", bundle: 'pro' },
      ]
    },
  ],
  oconnor7: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Fundamental concepts of social fluidity and connection from Dan O’Connor.",
      cards: [
        { q: "What does the acronym 'OFF' stand for?", a: "Offer, Favor, and Familiar language.", bundle: 'free' },
        { q: "What are the three components of a PPT Opener?", a: "Person, Place, or Thing.", bundle: 'free' },
        { q: "What is the \"Number One Key\" to making people want you around?", a: "Make it easy for them to communicate with you.", bundle: 'free' },
        { q: "How many times should you repeat a new name out loud?", a: "At least three times during the first meeting.", bundle: 'free' },
        { q: "Why is \"You should be proud of yourself\" more powerful than \"I'm proud of you\"?", a: "It gives them internal permission to recognize their worth and changes their posture.", bundle: 'free' },
        { q: "What is a \"visual hook\" for a name?", a: "Associating a new person with a character or story that shares their name to trigger long-term recall.", bundle: 'pro' },
        { q: "Why should you avoid rejecting an offer (like coffee or water)?", a: "Rejection breaks social protocol and stops the fluidity of the interaction.", bundle: 'pro' },
        { q: "What are three great \"reel-in\" questions for small talk?", a: "\"Tell me about...\", \"How do you feel about...\", and \"What do you think about...\".", bundle: 'pro' },
        { q: "What does Dan say about being \"the cause\" in social situations?", a: "You are the driver of the interaction; if it’s awkward, you have the power to fix it using tactics.", bundle: 'pro' },
      ]
    },
  ],
  jimmy1: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The fundamental requirements for a relationship to survive beyond the infatuation stage.",
      cards: [
        { q: "What is the \"Level Zero\" requirement for any relationship?", a: "Safety. Without it, everything else (intimacy, friendship, playfulness) crumbles.", bundle: 'free' },
        { q: "What did Dr. Gottman find was the risk if a man won't share power?", a: "There is an 81% chance the marriage will self-destruct.", bundle: 'free' },
        { q: "According to Jimmy, what is the \"Manual\" for a relationship?", a: "Emotional responsiveness and prioritizing your partner's legitimate needs.", bundle: 'free' },
        { q: "What are the two factors the success of a relationship is \"solely dependent\" on?", a: "A partner's ability to listen lovingly and a partner's ability to share feelings respectfully.", bundle: 'free' },
        { q: "Why is the concept of \"The One\" dangerous?", a: "It creates a false belief that finding the right person will magically fix all your baggage and trauma.", bundle: 'pro' },
        { q: "What is the difference between a boundary and an ultimatum?", a: "A boundary is about what YOU will do; an ultimatum is an attempt to control what THEY do.", bundle: 'pro' },
      ]
    },
  ],
  jimmy2: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Key concepts from Jimmy’s teachings on how conversations determine the life or death of a marriage.",
      cards: [
        { q: "What did Dr. John Gottman say about how marriages die?", a: "\"Marriages die in the conversations that never happen.\"", bundle: 'free' },
        { q: "What are the \"Four Horsemen\" that predict divorce with 90% accuracy?", a: "Defensiveness, Criticism, Contempt, and Stonewalling.", bundle: 'free' },
        { q: "What is the \"Expression Formula\"?", a: "Fact → Feeling → Meaning → Need.", bundle: 'free' },
        { q: "Why is a \"Soft Startup\" important?", a: "Because the first minute of a discussion determines the outcome of the entire talk.", bundle: 'free' },
        { q: "What is the difference between a Complaint and a Criticism?", a: "A complaint focuses on a specific behavior; a criticism is an attack on the partner's character.", bundle: 'pro' },
        { q: "What does \"Owning the Narrative\" mean?", a: "Using phrases like \"The story I'm telling myself\" to admit that your interpretation might not be the objective truth.", bundle: 'pro' },
        { q: "What is the \"15 to 1 ratio\"?", a: "The need for 15 positive interactions for every 1 negative interaction/complaint to keep the \"love tank\" full.", bundle: 'pro' },
      ]
    },
  ],
  jimmy3: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Fundamental concepts of emotional responsiveness and \"Turning Toward\" according to Jimmy and Dr. Gottman.",
      cards: [
        { q: "What percentage of the time do happy couples \"turn toward\" bids for connection?", a: "86%. Divorcing couples only turn toward 33% of the time.", bundle: 'free' },
        { q: "Does validation mean you have to agree with your partner's accusations?", a: "No. You validate the _feeling_ and the _experience_, not the blame or character attack.", bundle: 'free' },
        { q: "What is the \"Manual\" for getting your partner in the mood?", a: "Emotional connection and non-sexual affection that starts \"at breakfast\".", bundle: 'free' },
        { q: "What did Dr. Sue Johnson say is the \"Virus\" in a relationship?", a: "Disconnection. (Conflict is just the \"inflammation\").", bundle: 'free' },
        { q: "What is the primary purpose of the \"Vulnerable\" code word?", a: "To signal that the \"Thinking brain\" needs to stay on and the \"Defensive brain\" needs to stand down.", bundle: 'pro' },
        { q: "What are the three \"threads\" worth pulling in Compassionate Curiosity?", a: "The Meaning (their story), the Needs (what's missing), and the History (old wounds).", bundle: 'pro' },
        { q: "Why is \"indifference\" worse than \"anger\" in a relationship?", a: "Indifference signals that you have stopped caring about their experience entirely; anger at least shows the bond still matters.", bundle: 'pro' },
      ]
    },
  ],
  jimmy4: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Key concepts on how conflict resolution predicts the life or death of a relationship.",
      cards: [
        { q: "What did Dr. John Gottman say was the \"Single Greatest Predictor of Divorce\"?", a: "The presence of Contempt.", bundle: 'free' },
        { q: "What are the \"Four Horsemen\" of conflict?", a: "Criticism, Contempt, Defensiveness, and Stonewalling.", bundle: 'free' },
        { q: "What is \"physiological flooding\"?", a: "A state of high arousal (racing heart, hot ears) where the thinking brain shuts off and \"Fight/Flight/Freeze\" takes over.", bundle: 'free' },
        { q: "How long does it typically take for the nervous system to calm down after flooding?", a: "At least 20 to 30 minutes.", bundle: 'free' },
        { q: "What is the \"Level Zero\" of a relationship according to Jimmy?", a: "Respect. Without it, intimacy cannot exist.", bundle: 'free' },
        { q: "What is \"Repair\" in a relationship?", a: "Intentionally revisiting a moment of disconnection, taking accountability, and validating the partner's impact.", bundle: 'pro' },
        { q: "What is the difference between a Boundary and an Ultimatum?", a: "A boundary is what YOU will do (e.g., leave the room); an ultimatum is an attempt to control what THEY do.", bundle: 'pro' },
        { q: "Why is \"Validation without Agreement\" important?", a: "Because it acknowledges the partner's experience is real to them, which calms their nervous system even if you disagree with their conclusions.", bundle: 'pro' },
        { q: "According to Sue Johnson, what is the \"Virus\" in a relationship?", a: "Disconnection. (Conflict is just the \"inflammation\").", bundle: 'pro' },
      ]
    },
  ],
  jimmy5: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Key concepts on proactive maintenance and the \"Love Tank\" from Jimmy’s teachings.",
      cards: [
        { q: "What did Dr. Sue Johnson say is the \"Virus\" in a relationship?", a: "Disconnection. (Conflict is just the \"inflammation\") [01:19, 408].", bundle: 'free' },
        { q: "What is the \"15 to 1 ratio\"?", a: "The need for 15 positive interactions for every 1 negative interaction to keep the \"love tank\" full.", bundle: 'free' },
        { q: "What is \"Invisible Labor\"?", a: "The mental load of managing the home, schedule, and family needs that often goes unnoticed.", bundle: 'free' },
        { q: "Where does \"Foreplay\" start according to Jimmy?", a: "At breakfast—with emotional connection, non-sexual touch, and helping with chores.", bundle: 'free' },
        { q: "Why is \"indifference\" more dangerous than \"anger\"?", a: "Anger shows the bond still matters; indifference signals that you have stopped caring about their experience entirely.", bundle: 'pro' },
        { q: "What is the \"Team Meeting\" of a relationship?", a: "The Weekly Check-in—a structured time to ensure no hurts are being \"swept under the rug.\"", bundle: 'pro' },
        { q: "What does Jimmy mean by \"Accepting Influence\"?", a: "Being malleable and responsive to your partner's feedback and perspective in your decision-making.", bundle: 'pro' },
      ]
    },
  ],
  jimmy6: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Fundamental concepts on narcissism and self-worth according to Jimmy’s teachings.",
      cards: [
        { q: "What is the \"Kryptonite\" of every narcissist?", a: "Accountability..", bundle: 'free' },
        { q: "What does Jimmy say is the only real solution for a narcissistic relationship?", a: "Going No-Contact (the ultimate boundary)..", bundle: 'free' },
        { q: "What is the difference between a \"Nice Guy\" and a \"Kind Man\"?", a: "A nice guy is selfless out of fear; a kind man is selfless out of love but has firm boundaries..", bundle: 'free' },
        { q: "What is the \"Shame Response\"?", a: "Subconsciously believing that a mistake confirms you are a failure, leading to immediate defensiveness..", bundle: 'free' },
        { q: "What is the \"rigged system\" in a narcissistic fight?", a: "A dynamic where your defense is used as ammunition to prove you are the \"abusive\" one..", bundle: 'pro' },
        { q: "Why is \"Indifference\" more powerful than \"Anger\" against a manipulator?", a: "Because anger shows you still care; indifference shows they have lost their importance and control..", bundle: 'pro' },
        { q: "What does it mean to \"abandon yourself\"?", a: "Prioritizing someone else's comfort or needs over your own core values and safety to avoid conflict..", bundle: 'pro' },
      ]
    },
  ],
  toddv1: [
    {
      name: "High-Value Openings",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Hold the core definitions of Todd V's opening philosophy.",
      cards: [
        { q: "What are the four stages of game?", a: "Open, Hook, Qualify/Connect, and Close.", bundle: 'free' },
        { q: "Why avoid asking \"Where are you from?\" immediately?", a: "It's \"value-taking.\" You are asking her to provide the interesting content without offering any yourself.", bundle: 'free' },
        { q: "What is the \"Cookie\" in an Open Loop?", a: "A piece of intriguing information you show but don't fully give yet, forcing her to chase it.", bundle: 'free' },
        { q: "What is the 90/10 rule?", a: "You talk 90% and she talks 10% at the very start to \"assume the burden\" of the conversation.", bundle: 'free' },
        { q: "What defines a \"Hook\"?", a: "When she stops merely acknowledging you and begins to actively participate and accept the interaction.", bundle: 'free' },
        { q: "What does \"Narrating the Frame\" mean?", a: "Speaking as if you are the \"Prize\" or \"Selector,\" naturally screening her for your world.", bundle: 'pro' },
        { q: "What is the \"Starting the Lawnmower\" metaphor?", a: "Realizing that the first few \"pulls\" (lines) might die out, but you must keep pulling until the engine (conversation) stays on.", bundle: 'pro' },
        { q: "What is a \"Soft Direct\" opener?", a: "A statement like \"You're adorable\" that shows interest but uses a condescending/playful word to avoid giving away all power.", bundle: 'pro' },
      ]
    },
  ],
  toddv2: [
    {
      name: "Tension & Banter",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Definitions for the core concepts of the Todd V emotional rollercoaster.",
      cards: [
        { q: "What is the Push-Pull formula?", a: "A positive emotional spike combined with a negative emotional spike (or vice versa) in quick succession.", bundle: 'free' },
        { q: "What is a \"Neg\"?", a: "A backwards compliment or unintentional observation that provokes insecurity without being an overt insult.", bundle: 'free' },
        { q: "What is \"Qualifying\"?", a: "Taking the role of the Selector and finding out if she has value beyond her looks (screening her).", bundle: 'free' },
        { q: "What is \"Disqualification\"?", a: "Indicating that sex or a relationship might not happen to remove pressure and create a chase.", bundle: 'free' },
        { q: "What are the three ways to pass a shit test?", a: "Ignore, Agree and Exaggerate, or Misinterpret as a compliment.", bundle: 'free' },
        { q: "What is the \"Icarus Effect\" in game?", a: "Getting too close to sex without closing, crossing the \"point of no return\" and then flaking.", bundle: 'pro' },
        { q: "What is the difference between a tease and a flirt?", a: "A tease is playfully giving someone a hard time; a flirt is a tease with a man-to-woman premise.", bundle: 'pro' },
        { q: "Why is \"Uncertainty\" essential for sexual tension?", a: "People don't value what comes too easily; doubt about whether she can have you accentuates the energy.", bundle: 'pro' },
        { q: "What is \"Active Disinterest\"?", a: "Being actively engaged in the interaction while showing polarizing or negative spikes so you aren't on a pedestal.", bundle: 'pro' },
        { q: "What does it mean to \"disqualify the sex\"?", a: "Indicating sex might not happen so she feels safe to escalate without being judged.", bundle: 'pro' },
      ]
    },
  ],
  toddv3: [
    {
      name: "Advanced Connection",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Core definitions of Todd V's connection and blueprint philosophy.",
      cards: [
        { q: "What is the difference between Wide and Deep Rapport?", a: "Wide is touching on many topics for chemistry; Deep is exploring one topic emotionally for a bond.", bundle: 'free' },
        { q: "What defines a girl's \"Blueprint\"?", a: "Her cultural background, upbringing, career, and values that determine what she finds high-value.", bundle: 'free' },
        { q: "What is the \"90/10 Rule\" myth?", a: "Todd V disagrees with it; while you carry the burden early, the goal is 50/50 or her talking more once she's hooked.", bundle: 'free' },
        { q: "What are the three parts of a grounding story?", a: "Situation, Interruption (the conflict), and Change/Resolution.", bundle: 'free' },
        { q: "Why is a \"Cold Read\" better than a question?", a: "It offers value and insight first, taking the burden off her to be interesting.", bundle: 'free' },
        { q: "What is \"Checkmating God\"?", a: "A frame where a girl tries to gain value by wasting your time (not having sex) because you are high-value.", bundle: 'pro' },
        { q: "How do you identify a situational blueprint?", a: "Recognizing she acts differently on vacation (Vegas) than she does in her normal environment.", bundle: 'pro' },
        { q: "What is a \"DHV Story\"?", a: "A story that demonstrates Higher Value traits (competence, status, social proof) through subtext rather than bragging.", bundle: 'pro' },
        { q: "What is the \"Passion Pivot\"?", a: "Taking a factual answer and asking for the emotional motivation behind it.", bundle: 'pro' },
        { q: "Why use the \"We\" frame?", a: "It creates an immediate narrative of a shared future or partnership, bypassing the \"stranger\" frame.", bundle: 'pro' },
      ]
    },
  ],
  toddv4: [
    {
      name: "Closing & Logistics",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Hold the core definitions of Todd V's resolution philosophy.",
      cards: [
        { q: "What are the three things to screen for a pull?", a: "1. How hot is she? 2. How down to [ __ ] is she? 3. Logistics and situation.", bundle: 'free' },
        { q: "What is the \"Front Door Rule\"?", a: "Walking a girl out of the club when it closes; effective in early-closing cities like LA.", bundle: 'free' },
        { q: "What is the \"Sco Game\"?", a: "Closing with a foregone conclusion (\"Let's go\") rather than asking for permission.", bundle: 'free' },
        { q: "What is the purpose of a False Time Constraint?", a: "To lower her guard and remove the pressure of a move or a stop.", bundle: 'free' },
        { q: "Why should you \"Cover the Exits\"?", a: "To give the excuses and objections yourself before she does, taking them off the table.", bundle: 'free' },
        { q: "What is \"Empathy\" in the context of closing?", a: "Understanding her situation (e.g., her friends) and helping her solve the problem so she can be with you.", bundle: 'pro' },
        { q: "What is the \"Icarus Effect\"?", a: "Crossing the point of no return toward sex but then flailing/pushing too hard and causing a flake.", bundle: 'pro' },
        { q: "What is \"Seeding the Pull\"?", a: "Mentioning future plans in the negative early on to test compliance and plant the idea.", bundle: 'pro' },
        { q: "What defines a \"Polarizing Statement\"?", a: "A strong statement of intent or opinion that makes her either love or hate the interaction.", bundle: 'pro' },
        { q: "How many times is a typical 'order' asked for before a successful close?", a: "At least three times.", bundle: 'pro' },
      ]
    },
  ],
  toddv5: [
    {
      name: "Unflappable Presence",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Hold the core definitions of Todd V's inner game and pressure-handling philosophy.",
      cards: [
        { q: "What is the ultimate long-term solution for approach anxiety?", a: "Doing enough successful approaches to have more positive references than negative ones.", bundle: 'free' },
        { q: "What is \"Agree and Exaggerate\"?", a: "Agreeing with a challenge and taking it to a ridiculous, humorous extreme to show you're not affected.", bundle: 'free' },
        { q: "What is the \"What Do I Want?\" move?", a: "Acting on your genuine desire in the moment to overcome outcome dependence and seeking permission.", bundle: 'free' },
        { q: "What is a \"Comfort Shit Test\"?", a: "A challenge to see if you are genuine, honest, or \"real\" rather than a challenge of your value.", bundle: 'free' },
        { q: "What is the \"90/10 Rule\" myth in groups?", a: "Todd V disagrees with it; you carry the burden early, but the goal is her investment.", bundle: 'free' },
        { q: "What is \"Active Disinterest\"?", a: "Being actively engaged in an interaction while showing polarizing or negative spikes to prove you're not on a pedestal.", bundle: 'pro' },
        { q: "What is the \"Point of No Return\" in LMR?", a: "The moment where if escalation goes further but sex doesn't happen, she'll likely never see you again.", bundle: 'pro' },
        { q: "How do you \"Cover the Exits\"?", a: "Giving the girl's likely objections and excuses yourself before she does to take them off the table.", bundle: 'pro' },
        { q: "What is \"Sco Game\"?", a: "Leading with a foregone conclusion (\"Let's go\") instead of asking for permission.", bundle: 'pro' },
        { q: "What is the \"True Self-Esteem\" formula?", a: "Accepting who you are and doing what you know is right regardless of the result.", bundle: 'pro' },
      ]
    },
  ],
  firststrategies: [
    {
      name: "Core Idea",
      description: "Six strategies that between them make a whole small conversation.\n\n1. **Opening Statement**\n2. **Follow the Thread**\n3. **Say It Back**\n4. **Ask Plainly**\n5. **A Friendly No**\n6. **Answer With a Hook**\n\nOpen, keep it going, listen, ask, decline, and share something back.",
      cards: [
        { q: "What are the six strategies in this pack?", a: "Opening Statement, Follow the Thread, Say It Back, Ask Plainly, A Friendly No, Answer With a Hook.", bundle: 'free' },
        { q: "How do the six fit together?", a: "Open, keep it going, listen, ask, decline, and share something back.", bundle: 'free' },
        { q: "Which two are for when nothing has been said yet?", a: "Opening Statement and Ask Plainly.", bundle: 'free' },
        { q: "What decides which strategy to use?", a: "What the other person just did — told you something, asked you for something, or asked about you.", bundle: 'free' },
        { q: "What do all six have in common?", a: "They are short, and they all end by leaving the other person a turn.", bundle: 'free' },
        { q: "Which strategy do you use when they have told you something?", a: "Follow the Thread — take one detail out of it and go into that.", bundle: 'free' },
        { q: "Which two are for when the attention lands on you?", a: "Answer With a Hook if you want to answer, A Friendly No if you would rather not.", bundle: 'free' },
        { q: "Why is the pack called First Strategies?", a: "These are the six most basic strategies in their simplest form. Each one is the door into a deeper pack.", bundle: 'free' },
      ]
    },
    {
      name: "Opening Statement",
      description: "",
      cards: [
        { q: "What is an opening statement?", a: "A remark rather than a question — something the other person can pick up or let go.", bundle: 'free' },
        { q: "Why does a statement open more conversations than a question?", a: "A question makes them work; a statement hands them material.", bundle: 'free' },
        { q: "What are the three kinds?", a: "Something you are both looking at, something about you right now, and a small opinion.", bundle: 'free' },
        { q: "Why is an unanswered statement better than an unanswered question?", a: "Silence after a remark is nothing. Silence after a question is awkward for both of you.", bundle: 'free' },
        { q: "Which kind invites the most, and which risks the most?", a: "The small opinion — it is the same one.", bundle: 'free' },
        { q: "What does a statement hand the other person?", a: "Material — something to agree with, add to, disagree with, or laugh at.", bundle: 'free' },
        { q: "Which kind is safest with a stranger?", a: "Something you are both looking at, because it is already true for both of you.", bundle: 'free' },
        { q: "What is the mindset behind it?", a: "You are not performing. One true, ordinary sentence is the entire bar.", bundle: 'free' },
      ]
    },
    {
      name: "Follow the Thread",
      description: "",
      cards: [
        { q: "What does following the thread mean?", a: "Taking one word or detail out of what they just said and going into it.", bundle: 'free' },
        { q: "What problem does it solve?", a: "Having nothing to say next — they have already given you three things.", bundle: 'free' },
        { q: "What are the three threads worth pulling?", a: "The concrete detail, the odd word that carries feeling, and the thing they skipped past.", bundle: 'free' },
        { q: "Why do conversations stall?", a: "Both people go looking for a new subject while a perfectly good one is lying between them.", bundle: 'free' },
        { q: "Does the thread have to come from the last sentence?", a: "No. Anything from the last ten minutes is still open, and going back reads as interest.", bundle: 'free' },
        { q: "What are you listening for?", a: "The noun, not the gap — a place, an object, a number, or a word that carries feeling.", bundle: 'free' },
        { q: "What habit does it replace?", a: "Waiting for your turn while you hunt for a fresh subject.", bundle: 'free' },
        { q: "What do you say when they skipped past something?", a: "Ask for it out loud — \"Wait, go back — you moved house the same month?\"", bundle: 'free' },
      ]
    },
    {
      name: "Say It Back",
      description: "",
      cards: [
        { q: "What is the move?", a: "Say back what you understood, in your own words, before you answer.", bundle: 'free' },
        { q: "What two things does it do at once?", a: "Proves you were listening, and buys you a few seconds to think.", bundle: 'free' },
        { q: "Why in your own words rather than theirs?", a: "Repeating their sentence sounds like a technique. Rewording it proves you understood.", bundle: 'free' },
        { q: "What does it catch?", a: "The times you had it wrong — before that costs anyone an evening.", bundle: 'free' },
        { q: "When is it most worth doing?", a: "When the thing is complicated, upsetting, or about to be disagreed with.", bundle: 'free' },
        { q: "What are the three ways to do it?", a: "Short and plain, name the part that matters, or check rather than state.", bundle: 'free' },
        { q: "What does it give you besides accuracy?", a: "A few seconds. You are talking, so the silence is filled, but nothing is committed.", bundle: 'free' },
        { q: "What does it prevent?", a: "The argument where two people are describing two different versions of what was said.", bundle: 'free' },
      ]
    },
    {
      name: "Ask Plainly",
      description: "",
      cards: [
        { q: "What is the shape of a plain ask?", a: "One specific sentence, put as a question, and then stop.", bundle: 'free' },
        { q: "What actually makes a request awkward?", a: "The run-up. The apology before it tells them you think you are imposing.", bundle: 'free' },
        { q: "Why stop talking afterwards?", a: "The reasons you add turn a question into a case that can be argued with.", bundle: 'free' },
        { q: "What is the difference between a hint and a request?", a: "\"Are you around Thursday?\" is a hint. \"Could you take Thursday?\" is a request.", bundle: 'free' },
        { q: "Why does being specific matter?", a: "A vague ask is hard to say yes to. Say what, and say when.", bundle: 'free' },
        { q: "What are the three parts of a plain ask?", a: "Put it as a question, make it specific, and then stop.", bundle: 'free' },
        { q: "What do you do while they are deciding?", a: "Nothing. The silence is theirs, not a gap you have to fill.", bundle: 'free' },
        { q: "What is the mindset behind it?", a: "Asking is normal. You are giving them the chance to say yes, and leaving them free to say no.", bundle: 'free' },
      ]
    },
    {
      name: "A Friendly No",
      description: "",
      cards: [
        { q: "What are the three parts of a friendly no?", a: "Something warm, the actual no, and at most one reason.", bundle: 'free' },
        { q: "What is the rule about softening?", a: "Soften the delivery, never the answer.", bundle: 'free' },
        { q: "Why is \"maybe\" worse than \"no\"?", a: "It feels kinder and costs the other person a week of waiting.", bundle: 'free' },
        { q: "Why are reasons a trap?", a: "Every reason is something they can solve — and then you are negotiating a decision you had already made.", bundle: 'free' },
        { q: "What does a clear no give the other person?", a: "The chance to ask someone else today.", bundle: 'free' },
        { q: "What do the warmth and the clarity each do?", a: "The warmth keeps the person. The clarity gives them the answer. People swap one for the other.", bundle: 'free' },
        { q: "How do you say no and keep the door open?", a: "Decline this one and name another time — \"Not this time. Ask me again in the spring.\"", bundle: 'free' },
        { q: "What happens if you soften the answer instead of the delivery?", a: "It stops being a no. \"Probably not\" and \"I'll see\" cost them a week of waiting.", bundle: 'free' },
      ]
    },
    {
      name: "Answer With a Hook",
      description: "",
      cards: [
        { q: "What is a hook?", a: "One extra detail in your answer that the other person can ask about.", bundle: 'free' },
        { q: "What is wrong with \"fine\"?", a: "It leaves them with nothing, so they have to invent another question.", bundle: 'free' },
        { q: "What are the three sizes of hook?", a: "One extra detail, a small complaint or oddity, and something you actually care about.", bundle: 'free' },
        { q: "What do people usually mean when they say they are bad at small talk?", a: "They are good at asking and empty at answering, so the conversation runs on their questions until they run out.", bundle: 'free' },
        { q: "Is the point to be interesting?", a: "No. The point is to leave a door open.", bundle: 'free' },
        { q: "What is the person asking actually trying to do?", a: "Start a conversation. A closed answer leaves them with nothing to build on.", bundle: 'free' },
        { q: "How big should the hook be with a stranger?", a: "One extra detail. The larger ones are for people you want to know better.", bundle: 'free' },
        { q: "What do you do after you have answered?", a: "Hand it back if you like — but answer first, or they carry the whole thing alone.", bundle: 'free' },
      ]
    },
    {
      name: "Collections",
      description: "The three collections in this pack, and what each one makes you choose between:\n\n• **Open or Ask** — nothing has been said yet: do you want a conversation, or one specific thing?\n• **Read and Reply** — they have spoken: which of the four answers fits?\n• **All Six Strategies** — everything mixed, and no warning about which moment you are in\n\nOne question decides nearly all of it: what did the other person just do?",
      cards: [
        { q: "What are the three collections in this pack?", a: "Open or Ask, Read and Reply, and All Six Strategies.", bundle: 'free' },
        { q: "What does Open or Ask make you choose between?", a: "A conversation for its own sake, or one specific thing you need.", bundle: 'free' },
        { q: "What separates those two?", a: "Opening Statement wants a conversation. Ask Plainly wants a specific thing, and the conversation is only the way to it.", bundle: 'free' },
        { q: "They told you something. Which strategy?", a: "Follow the Thread — unless it was complicated or upsetting, and then Say It Back first.", bundle: 'free' },
        { q: "They asked you for something you cannot do. Which strategy?", a: "A Friendly No — with Say It Back first if the request had several parts.", bundle: 'free' },
        { q: "They asked about you. Which strategy?", a: "Answer With a Hook — or A Friendly No, if you would rather not answer it.", bundle: 'free' },
        { q: "What do the six divide into?", a: "Three pairs — two that start something, two that work with what was said, and two that answer something aimed at you.", bundle: 'free' },
        { q: "Do you need the best strategy?", a: "No. You need one that suits what just happened.", bundle: 'free' },
      ]
    },
    {
      name: "Sequences",
      description: "The three sequences in this pack, and the order each one runs in:\n\n1. **The First Conversation** — Opening Statement → Follow the Thread → Answer With a Hook → Follow the Thread\n2. **The Half Yes** — Say It Back → A Friendly No → Ask Plainly\n3. **The Second Answer** — Ask Plainly → Say It Back → Follow the Thread\n\nIn each one the order is doing the work, not the individual strategies.",
      cards: [
        { q: "What is the order in The First Conversation?", a: "Opening Statement, Follow the Thread, Answer With a Hook, Follow the Thread.", bundle: 'free' },
        { q: "Which step of that sequence do people skip?", a: "The last one. They answer a question about themselves and then stop.", bundle: 'free' },
        { q: "What is the order in The Half Yes?", a: "Say It Back, then A Friendly No, then Ask Plainly if there is a version you could do.", bundle: 'free' },
        { q: "Why does Say It Back come before the no?", a: "So the no arrives after they have been understood, rather than instead of it.", bundle: 'free' },
        { q: "What order do most people use instead?", a: "A reason, then a vague no, then an apology — which leaves the other person unsure it was a no at all.", bundle: 'free' },
        { q: "What is the order in The Second Answer?", a: "Ask Plainly, then Say It Back when they push back, then Follow the Thread into whatever they raised.", bundle: 'free' },
        { q: "Why say it back rather than repeat the ask?", a: "Repeating it louder starts an argument. Saying it back turns a refusal into a conversation.", bundle: 'free' },
        { q: "What is usually true about the second thing they say?", a: "It is the real reason — and it is often solvable, which it never would be in an argument.", bundle: 'free' },
      ]
    },
    {
      name: "Challenges",
      description: "The five challenges to master in this pack:\n\n• **Cold Starts** — nothing has been said yet\n• **Stalling** — it was going, and now it is not\n• **In the Spotlight** — the attention turns to you\n• **Requests** — they want something from you\n• **Asking** — you want something from them\n\nEach one has its own way of going wrong.",
      cards: [
        { q: "What are the five challenges in this pack?", a: "Cold Starts, Stalling, In the Spotlight, Requests and Asking.", bundle: 'free' },
        { q: "What goes wrong with someone you do not know?", a: "It turns into an interview — two questions in a row, and nothing given back.", bundle: 'free' },
        { q: "What is the fix for a stalled conversation?", a: "Look backwards, not for a new subject. Anything from the last ten minutes is still open.", bundle: 'free' },
        { q: "Why does a closed answer stall a conversation three exchanges later?", a: "It leaves the other person inventing every question, and after two or three most people stop.", bundle: 'free' },
        { q: "What goes wrong when someone asks about you?", a: "The reflex is to say as little as possible and hand the question straight back.", bundle: 'free' },
        { q: "What goes wrong when someone wants something from you?", a: "The vague no — \"maybe\", \"I'll see\" — which feels kind and costs them a week.", bundle: 'free' },
        { q: "What goes wrong when you want something?", a: "Hinting. It protects you from hearing no, and it almost never gets you the thing.", bundle: 'free' },
        { q: "Which strategy turns up in the most challenges?", a: "Follow the Thread — it rescues a stall, softens an interview, and opens up a refusal.", bundle: 'free' },
      ]
    },
    {
      name: "Mindset",
      description: "These are the mindsets you practise in this pack:\n\n• **Speaking First** — the bar is one true, ordinary sentence\n• **Questions** — a remark asks for nothing, and can be let go\n• **Refusals** — a clear no lets them ask someone else today\n• **Modesty** — one detail is not taking up space\n• **Favours** — asking gives them a choice rather than taking one away\n• **Pauses** — a pause is where people think\n\nIn every one, the belief that gets in the way feels like good manners from the inside.",
      cards: [
        { q: "What belief stops people from speaking first?", a: "That a conversation is a performance, and the price of entry is something worth saying.", bundle: 'free' },
        { q: "What is true instead?", a: "The bar is a true, ordinary sentence. Nobody remembers the sentence — only that someone spoke to them.", bundle: 'free' },
        { q: "Why do people reach for a question when a remark would work better?", a: "A question feels polite. It is also a small demand, answered on the spot, by someone who may be tired.", bundle: 'free' },
        { q: "What belief produces \"maybe\"?", a: "That a no is a verdict on the person asking, rather than an answer to what they asked.", bundle: 'free' },
        { q: "What does a clear no actually give them?", a: "The chance to ask someone else today.", bundle: 'free' },
        { q: "What belief produces the one-word answer?", a: "That saying something about yourself is taking up space.", bundle: 'free' },
        { q: "What belief produces hinting?", a: "That asking puts the other person in a difficult position — so you hint instead, and hope they offer.", bundle: 'free' },
        { q: "What belief makes people change the subject during a pause?", a: "That silence means the conversation has broken. A pause is where people think.", bundle: 'free' },
      ]
    },
  ],
  jfisher1: [
    {
      name: "Core Idea",
      description: "The shape of this pack: five defense strategies to maintain your footing, status, and physiological control under pressure.\n\n1. **Decoding Intent** — expose their snarky motive.\n2. **Return to Sender** — force them to repeat the insult.\n3. **Straightening the Record** — neutralize gaslighting.\n4. **Calling Out Subtext** — challenge passive aggression.\n5. **Naming the Reaction** — claim your nervous system.",
      cards: [
        { q: "What are the five defense strategies in this pack?", a: "Decoding Intent, Return to Sender, Straightening the Record, Calling Out Subtext, and Naming the Reaction.", bundle: 'free' },
        { q: "What is the core premise of Control under Pressure?", a: "Conflict defense has nothing to do with your mouth, and everything to do with your nervous system.", bundle: 'free' },
        { q: "What is the difference between absorbing and observing?", a: "Absorbing means taking their negativity personally. Observing means treating it as data about their insecurity.", bundle: 'free' },
        { q: "Which two strategies are about exposing their hidden motive?", a: "Decoding Intent and Calling Out Subtext.", bundle: 'free' },
        { q: "What does this pack claim about winning arguments?", a: "If your priority is to win every argument, you will lose the relationship, the trust, and your peace.", bundle: 'free' },
        { q: "Why is silence considered a secret weapon in pressure defense?", a: "It forces the hostile speaker to hear their own words echo in their head, taking all the fun out of the attack.", bundle: 'pro' },
        { q: "What does \"claiming it to control it\" mean?", a: "Voicing your physical or emotional state out loud (\"I can tell I'm getting defensive\") stops you from acting it out.", bundle: 'pro' },
        { q: "Why does logic fail against timeline-twisting or gaslighting?", a: "Because gaslighting is an identity-preservation game, not a factual disagreement.", bundle: 'pro' },
      ]
    },
    {
      name: "Decoding Intent",
      description: "",
      cards: [
        { q: "What is the core move of Decoding Intent?", a: "Shift the focus from the snarky comment to the speaker's underlying motive by asking targeted intent questions.", bundle: 'free' },
        { q: "Why use questions instead of direct comebacks?", a: "A comeback tries to assert dominance. A question of intent puts the spotlight and the awkwardness back on them.", bundle: 'free' },
        { q: "What are three typical questions of intent?", a: "\"Did you say that to embarrass me?\", \"Did you mean for that to sound rude?\", and \"Was that supposed to make me uncomfortable?\"", bundle: 'free' },
        { q: "What do you say if they answer \"Yes\" to your intent question?", a: "Say \"Good to know\" and act like it doesn't bother you at all. Let them carry that weight.", bundle: 'free' },
        { q: "What is the psychological effect of an intent question?", a: "It forces them to look in a mirror and listen to their own words, which instantly stops the fun of the power play.", bundle: 'pro' },
        { q: "Why does Decoding Intent help you stay calm?", a: "Because it reminds you that their belittling remark is a projection of their insecurity, not a threat to your worth.", bundle: 'pro' },
        { q: "When should you avoid using Decoding Intent?", a: "When you are with close loved ones where the issue is deep vulnerability rather than everyday workplace snark.", bundle: 'pro' },
      ]
    },
    {
      name: "Return to Sender",
      description: "",
      cards: [
        { q: "What is the core move of Return to Sender?", a: "Force the speaker to repeat, clarify, or sit in the echo of their insult by refusing to carry their negative energy.", bundle: 'free' },
        { q: "What is the first, crucial step before you speak?", a: "Add five to seven seconds of absolute, awkward silence to let their words hang alone on a plank.", bundle: 'free' },
        { q: "Why is forcing them to repeat the insult so effective?", a: "Because the first time was said through emotion (the amygdala). Forcing a repeat forces them to use their logical brain (the prefrontal cortex).", bundle: 'free' },
        { q: "What is the risk of answering an insult with a direct counter-attack?", a: "You match their frequency, validate their tone, and make yourself look out of control.", bundle: 'pro' },
        { q: "What do you say if you want to use their exact words against them?", a: "Wait five seconds, then repeat their insult flatly as a question: \"I'm an idiot?\"", bundle: 'pro' },
        { q: "How does Return to Sender take the oxygen out of the room for a bully?", a: "It delays their gratification. They wanted an instant, defensive reaction, and instead they got silent observation.", bundle: 'pro' },
      ]
    },
    {
      name: "Straightening the Record",
      description: "",
      cards: [
        { q: "What is the core move of Straightening the Record?", a: "Neutralize gaslighting and timeline-twisting by firmly stating your perspective and closing the door.", bundle: 'free' },
        { q: "What are two typical phrases for Straightening the Record?", a: "\"I remember things differently. Period.\" and \"That wasn't my experience.\"", bundle: 'free' },
        { q: "Why should you avoid explaining or justifying your memory?", a: "The more words you use to defend your truth, the more material you give them to twist.", bundle: 'free' },
        { q: "What is the cat-and-laser-pointer metaphor in gaslighting?", a: "The gaslighter is trying to make you the cat chasing their laser pointer everywhere but the truth. To stop it, stand still.", bundle: 'pro' },
        { q: "Why is \"Period\" such an important part of the response?", a: "It signals that your memory is a firm state, not a negotiation or an invitation to argue.", bundle: 'pro' },
        { q: "How does Straightening the Record handle their twisted timeline?", a: "It completely bypasses the details of their story and simply claims your own experience with quiet authority.", bundle: 'pro' },
      ]
    },
    {
      name: "Calling Out Subtext",
      description: "",
      cards: [
        { q: "What is the core move of Calling Out Subtext?", a: "Gently bring passive-aggressive behavior, coldness, or sarcasm out into the open with a factual observation.", bundle: 'free' },
        { q: "What are two typical phrases for Calling Out Subtext?", a: "\"Should I read into that?\" and \"Was that supposed to be funny, or was that the funny kind of joke?\"", bundle: 'free' },
        { q: "Why does passive aggression thrive?", a: "Because it relies on unspoken tension. Exposing it to the light completely breaks the game.", bundle: 'free' },
        { q: "What do you say if someone sends a brief, freezing text message?", a: "\"Did you mean for that to sound short?\" This gives them a clear path to clarify rather than let the tension fester.", bundle: 'pro' },
        { q: "Why is \"Should I read into that?\" so effective?", a: "It forces them to either own their hidden attitude or backtrack and say \"No, I'm just busy.\"", bundle: 'pro' },
        { q: "What is the mistake people make after exposing subtext?", a: "Pressing too hard. Once you've signaled \"I see what you're doing,\" let it go — don't trap them like a wild animal.", bundle: 'pro' },
      ]
    },
    {
      name: "Naming the Reaction",
      description: "",
      cards: [
        { q: "What is the core move of Naming the Reaction?", a: "Claim control of your nervous system by voicing your emotional or physiological state out loud instead of acting it out.", bundle: 'free' },
        { q: "What are three typical phrases for Naming the Reaction?", a: "\"I can tell I'm getting defensive.\", \"I can tell I'm getting frustrated.\", and \"I can tell I'm not ready for this conversation right now.\"", bundle: 'free' },
        { q: "What is the difference between acting defensive and voicing defensiveness?", a: "Acting defensive is shouting and snapping. Voicing it is writing it on a piece of paper and putting it on the table to look at together.", bundle: 'free' },
        { q: "Why does Naming the Reaction show high emotional intelligence?", a: "It signals that you are self-aware and in control of your tempo, rather than letting your triggers drive your behavior.", bundle: 'pro' },
        { q: "How does Naming the Reaction handle crying or physical shaking?", a: "By labeling the physical state (\"These are stressed tears, keep talking\") so it doesn't serve as a distraction or a weapon.", bundle: 'pro' },
        { q: "When should you use \"I can tell I'm not ready for this conversation\"?", a: "When you are too emotionally flooded to think analytically, especially late at night or during an unexpected ambush.", bundle: 'pro' },
      ]
    },
    {
      name: "Collections",
      description: "The three collections in this pack, and what each one makes you choose between:\n\n• **Pressure Defense** — they are pushing: do you need to defend your character, or straighten their twisted history?\n• **Expose and Regulate** — tension is rising: is the obstacle their hidden attitude, or your own rising adrenaline?\n• **The Full Set** — all five strategies mixed together with no situational warning.\n\nOne question decides nearly all of it: what did the other person just throw at you?",
      cards: [
        { q: "What does the Pressure Defense collection make you choose between?", a: "Straightening the Record for fact-twisting, Return to Sender for insults, and Decoding Intent for snark.", bundle: 'pro' },
        { q: "What is the key to the Expose and Regulate collection?", a: "Choosing between Calling Out Subtext for their passive-aggressive digs, and Naming the Reaction for your own physical tension.", bundle: 'pro' },
        { q: "Why are there multiple collections in this pack?", a: "To allow you to train separate, smaller pairs of defenses before testing your skills against the full mixed set.", bundle: 'pro' },
      ]
    },
    {
      name: "Sequences",
      description: "The three sequences in this pack, and the order each one runs in:\n\n1. **The Neutral Ground** — Return to Sender → Decoding Intent → Straightening the Record\n2. **The Clean Deflection** — Calling Out Subtext → Decoding Intent → Naming the Reaction\n3. **The Pause and Reset** — Naming the Reaction → Calling Out Subtext → Checkout\n\nIn each one, the order of the steps is what does the work of defusing the conflict.",
      cards: [
        { q: "What is the order in The Neutral Ground?", a: "Return to Sender, then Decoding Intent, then Straightening the Record.", bundle: 'pro' },
        { q: "Why does Return to Sender come before the intent check in a direct attack?", a: "Because the silence and repetition drain the emotional energy before you spotlight their motive.", bundle: 'pro' },
        { q: "What is the order in The Clean Deflection?", a: "Calling Out Subtext, then Decoding Intent, then Naming the Reaction.", bundle: 'pro' },
        { q: "What is the purpose of The Pause and Reset sequence?", a: "To recognize emotional flooding, label the circular argument, and exit cleanly with a set return time.", bundle: 'pro' },
      ]
    },
    {
      name: "Challenges",
      description: "The five challenges to master in this pack:\n\n• **Direct Hostility** — meeting loud, aggressive insults or character attacks\n• **Passive Aggression** — navigating sarcasm, disguised digs, or cold shoulder treatment\n• **Timeline Twisting** — responding to someone actively rewriting the history of an agreement\n• **Emotional Flooding** — remaining centered when someone gets angry, cries, or panics\n• **Rapid Fire** — managing pushy people who try to rush you into concession\n\nEach challenge category represents a distinct way a high-pressure conversation can go wrong.",
      cards: [
        { q: "What is the target error in the Direct Hostility challenge?", a: "Matching their volume or returning a zinger, which validates their tone and makes you look out of control.", bundle: 'pro' },
        { q: "What is the key to the Passive Aggression challenge?", a: "Exposing the subtext to the light rather than pretending you didn't notice the dig to keep the peace.", bundle: 'pro' },
        { q: "What is the target error in the Timeline Twisting challenge?", a: "Going down the rabbit hole to litigate every detail of their twisted history.", bundle: 'pro' },
        { q: "How does the Emotional Flooding challenge handle crying?", a: "By continuing to look at them normally and focusing on the words, rather than acting exasperated or rolling your eyes.", bundle: 'pro' },
      ]
    },
    {
      name: "Mindset",
      description: "These are the mindsets you practise in this pack:\n\n• **Hostility** — hostility is their projection, not your threat: stay quiet and stay regulated\n• **Apologies** — save apologies for real, intentional mistakes: tension is not a failure\n• **Silence** — silence is control: let their words fall and let them carry the weight\n• **Zingers** — comebacks leave a bad aftertaste: the goal is to protect your peace\n• **Speed** — rushing is a sign of panic: operate on your own timeframe to show authority\n\nIn every mindset deck, you train to replace a limiting belief with a grounded, courtroom-tested truth.",
      cards: [
        { q: "What is the limiting belief in the Hostility mindset?", a: "That you must strike back immediately with an aggressive zinger to survive and win the moment.", bundle: 'pro' },
        { q: "Why is over-apologizing considered harmful in the Apologies mindset?", a: "Because apologizing for having boundaries or taking up space silently corrodes your self-worth.", bundle: 'pro' },
        { q: "What is the core premise of the Speed mindset?", a: "That pushy people use accelerated timelines to bypass your analytical brain, and slowing down is your ultimate defense.", bundle: 'pro' },
      ]
    },
  ],
  jfisher2: [
    {
      name: "Core Idea",
      description: "The shape of this pack: five proactive strategies to establish conversational parity, protect your limits, and manage dominant dynamics cleanly.\n\n1. **Conversational Framing** — set a clear contract at the start.\n2. **Boundary Consequences** — protect your limits with follow-through.\n3. **Agreement Checks** — neutralize pushy consensus demands.\n4. **Serving It Neat** — speak without self-undercutting hedges.\n5. **No-Oriented Questions** — invite a safe and comfortable \"No\".",
      cards: [
        { q: "What are the five assertive connection strategies in this pack?", a: "Conversational Framing, Boundary Consequences, Agreement Checks, Serving It Neat, and No-Oriented Questions.", bundle: 'free' },
        { q: "What is the core premise of Assertive Connection?", a: "Parity in conversation is not something you are given. It is something you establish with clear, quiet standards.", bundle: 'free' },
        { q: "What is the difference between being short and being concise?", a: "Being short is dismissive and cold. Being concise is clear, warm, and removes the unnecessary fluff.", bundle: 'free' },
        { q: "Which strategy is designed to neutralize pushy or dominant personalities?", a: "Agreement Checks — by questioning whether a shared agreement is actually required right now.", bundle: 'free' },
        { q: "What does this pack claim about the compliment sandwich?", a: "It is hard to chew and impossible to swallow. Directness is always kinder and more genuine.", bundle: 'free' },
        { q: "Why is a No-Oriented Question so effective in difficult talks?", a: "It lowers their defenses by inviting a safe \"No\" that protects their autonomy, rather than forcing a defensive \"Yes\".", bundle: 'pro' },
        { q: "What does \"serving your words neat\" mean?", a: "Delivering your message without undercutting prefixes, filler words, or unnecessary apologies that dilute your authority.", bundle: 'pro' },
        { q: "What is the target error in boundary-setting?", a: "Giving a long list of reasons and justifications, which turns your boundary into a negotiation.", bundle: 'pro' },
      ]
    },
    {
      name: "Conversational Framing",
      description: "",
      cards: [
        { q: "What is the core move of Conversational Framing?", a: "Erase conversational anxiety by setting a clear three-part contract at the start: topic, desired end-state, and buy-in.", bundle: 'free' },
        { q: "What are the three parts of a conversational frame?", a: "Tell them what you want to talk about, tell them how you want the conversation to end, and get their buy-in.", bundle: 'free' },
        { q: "What are three typical framing phrases?", a: "\"I'd like to talk about...\", \"I want to walk away with...\", and \"Does that sound good?\"", bundle: 'free' },
        { q: "Why does Conversational Framing remove anxiety?", a: "Because it defines the boundaries of the discussion, so the other person knows they aren't in trouble or about to be ambushed.", bundle: 'free' },
        { q: "What is the checkered flag in Conversational Framing?", a: "The specific outcome or takeaway you want to walk away with from the discussion.", bundle: 'pro' },
        { q: "What do you do once they agree to the frame?", a: "Keep the discussion strictly within that frame — do not let other collateral issues pull you off track.", bundle: 'pro' },
        { q: "Why is getting their buy-in considered an implicit contract?", a: "Because people have a strong internal need to remain consistent with their word once they have explicitly agreed to a frame.", bundle: 'pro' },
      ]
    },
    {
      name: "Boundary Consequences",
      description: "",
      cards: [
        { q: "What is the core move of Boundary Consequences?", a: "Protect your personal limits and focus with a firm three-step structure: the boundary, the condition, and the follow-through.", bundle: 'free' },
        { q: "What are the three steps of a Boundary Consequence?", a: "State the boundary limit, set the trigger condition, and execute the objective follow-through.", bundle: 'free' },
        { q: "Why is \"I\" language preferred over \"You\" language in boundaries?", a: "Because \"I\" language states what you will do, which is not antagonistic, whereas \"You\" language feels like an attack.", bundle: 'free' },
        { q: "What is an example of a complete Boundary Consequence?", a: "\"I don't respond to that volume. If you continue to raise your voice, I am going to end this conversation.\"", bundle: 'free' },
        { q: "What is the most common failure in boundary-setting?", a: "Failing to follow through with the stated consequence, which teaches them that your boundaries are just suggestions.", bundle: 'pro' },
        { q: "Why should you avoid giving a long list of reasons for your boundary?", a: "Because reasons give the other person a handle to negotiate your limits and justify their overreach.", bundle: 'pro' },
        { q: "How does a boundary differ from a demand to change their behavior?", a: "A demand tries to control them, which fails. A boundary simply states what you will do in response to their behavior.", bundle: 'pro' },
      ]
    },
    {
      name: "Agreement Checks",
      description: "",
      cards: [
        { q: "What is the core move of Agreement Checks?", a: "Neutralize pushy, dominant personalities by checking if a shared agreement is actually required right now.", bundle: 'free' },
        { q: "What are three typical Agreement Check phrases?", a: "\"Is this something we have to agree on?\", \"Are you asking me to agree with you?\", and \"Do we need to decide this right now?\"", bundle: 'free' },
        { q: "Why do pushy people try to force agreement?", a: "Because they want control and confirmation of their dominance, often to mask their own underlying insecurity.", bundle: 'free' },
        { q: "How does an Agreement Check separate the person from the problem?", a: "It stops the personal tug-of-war and focuses the conversation on whether consensus is a factual requirement for the task.", bundle: 'pro' },
        { q: "What is the timing component in Agreement Checks?", a: "Asking \"Do we need to agree on this right now?\" to add distance and pacing when you are being rushed.", bundle: 'pro' },
        { q: "What do you do if they answer \"No\" to your Agreement Check?", a: "Say \"Great, let's move on\" and proceed with the discussion without conceding your perspective.", bundle: 'pro' },
      ]
    },
    {
      name: "Serving It Neat",
      description: "",
      cards: [
        { q: "What is the core move of Serving It Neat?", a: "Speak with quiet confidence by removing undercutting prefixes, needless apologies, and watering-down filler words.", bundle: 'free' },
        { q: "What are three common filler words to eliminate?", a: "\"just\", \"sorry\", and \"basically\" — they suggest you are hesitant or trying to avoid taking up space.", bundle: 'free' },
        { q: "How do you replace a delayed apology with gratitude?", a: "Replace \"Sorry I'm late\" with \"Thank you for your patience.\"", bundle: 'free' },
        { q: "What is an example of a pre-undercutting prefix?", a: "\"This is probably a dumb question, but...\" — which tells the listener that your question is not worth hearing.", bundle: 'free' },
        { q: "Why does over-apologizing corrode your self-worth over time?", a: "Because it sends a silent signal to yourself and others that you are apologizing for occupying space or having limits.", bundle: 'pro' },
        { q: "How does \"Serving It Neat\" apply to spoken requests?", a: "By asking for what you need in one specific sentence, and then stopping. Let the silence do the work.", bundle: 'pro' },
        { q: "What is the difference between being short and serving your words neat?", a: "Being short is cold and dismissive. Serving it neat is warm, clear, and direct, without the defensive clutter.", bundle: 'pro' },
      ]
    },
    {
      name: "No-Oriented Questions",
      description: "",
      cards: [
        { q: "What is the core move of No-Oriented Questions?", a: "Dissolve defensive barriers by asking negative-oriented questions that invite a safe and comfortable \"No\".", bundle: 'free' },
        { q: "Why is a \"No\" more comfortable for people than a \"Yes\"?", a: "Because saying \"No\" feels protective and preserves their autonomy, while \"Yes\" feels like a commitment.", bundle: 'free' },
        { q: "What are three typical No-Oriented Questions?", a: "\"Are you against us talking at a normal volume?\", \"Is it unreasonable to ask us to reschedule?\", and \"Are you opposed to this?\"", bundle: 'free' },
        { q: "Who pioneered the use of No-Oriented Questions in negotiations?", a: "FBI negotiator Chris Voss in his book \"Never Split the Difference,\" whose framework Jefferson Fisher adopts.", bundle: 'pro' },
        { q: "How does a No-Oriented Question calm down an angry person?", a: "By giving them the control to say \"No\" to the negative, which instantly lowers their defenses and opens up communication.", bundle: 'pro' },
        { q: "When should you avoid using a No-Oriented Question?", a: "When you want to check if they are completely aligned on a positive goal, where a direct framing check is more appropriate.", bundle: 'pro' },
      ]
    },
    {
      name: "Collections",
      description: "The three collections in this pack, and what each one makes you choose between:\n\n• **Framing First** — nothing has been said yet: do you want to set a clear contract, or check if agreement is required?\n• **State Your Terms** — they are overreaching: do you need to enforce a consequence, or stop undercutting your words?\n• **The Full Set** — all five connection strategies mixed together with no situational warning.\n\nOne question decides nearly all of it: are you starting a conversation, or are you protecting your personal margin?",
      cards: [
        { q: "What does the Framing First collection make you choose between?", a: "Conversational Framing to set the topic and checkered flag, and Agreement Checks to neutralize pushy consensus demands.", bundle: 'pro' },
        { q: "What is the key to the State Your Terms collection?", a: "Choosing between Boundary Consequences to set firm limits with follow-through, and Serving It Neat to speak with direct authority.", bundle: 'pro' },
        { q: "Why does this pack contain multiple collections?", a: "To allow you to train separate, smaller pairs of assertive moves before testing your skills against the full mixed set.", bundle: 'pro' },
      ]
    },
    {
      name: "Sequences",
      description: "The three sequences in this pack, and the order each one runs in:\n\n1. **The Reconciliation Runway** — Agreement on facts → Removing defenses → Inviting listening\n2. **The Soft Dismiss** — Eliminate small talk → Label the conversation → Deliver the bad news\n3. **The Collaborative Pivot** — Validate first → Objectify the issue → Invite collaboration\n\nIn each one, the order of the steps is what does the work of establishing parity and connection.",
      cards: [
        { q: "What is the order in The Reconciliation Runway?", a: "Agreement on facts (I know), then Removing defenses (I'm not), then Inviting listening (I'm open).", bundle: 'pro' },
        { q: "Why does \"I'm not\" come before \"I'm open\" in the Reconciliation Runway?", a: "Because you must remove their anticipated defense mechanism before they can safely open up and listen to you.", bundle: 'pro' },
        { q: "What is the order in The Soft Dismiss?", a: "Eliminate small talk, then Label the conversation, then Deliver the bad news.", bundle: 'pro' },
        { q: "What is the purpose of The Collaborative Pivot sequence?", a: "To separate the person from the problem by shifting a face-to-face conflict into a side-by-side problem-solving session.", bundle: 'pro' },
      ]
    },
    {
      name: "Challenges",
      description: "The five challenges to master in this pack:\n\n• **Avoidant Partners** — managing loved ones or colleagues who dodge tough discussions\n• **Pushy Personalities** — neutralizing dominant characters who try to dictate terms\n• **Overcommitment** — turning down invitations or favors without needless apologies\n• **Unclear Standards** — establishing expectations and contracts where none exist\n• **The Compliment Sandwich** — demanding direct, transparent feedback instead of insincere praise\n\nEach challenge category represents a distinct way an assertive conversation can be hijacked.",
      cards: [
        { q: "What is the target error in the Avoidant Partners challenge?", a: "Sending long, emotional text paragraphs, which triggers their withdrawal mechanism and makes them go silent.", bundle: 'pro' },
        { q: "What is the key to the Pushy Personalities challenge?", a: "Refusing to get sucked into an exhausting debate to prove them wrong. Use Agreement Checks instead.", bundle: 'pro' },
        { q: "What is the target error in the Overcommitment challenge?", a: "Giving a long list of reasons and apologies, which invites the other person to negotiate your decision.", bundle: 'pro' },
        { q: "How does the Compliment Sandwich challenge handle insincere praise?", a: "By cutting straight to the issue with Conversational Framing, and demanding direct feedback with Boundary Consequences.", bundle: 'pro' },
      ]
    },
    {
      name: "Mindset",
      description: "These are the mindsets you practise in this pack:\n\n• **No-Saying** — a clear no is a favor: softening it just postpones the pain\n• **Asking for Help** — saying \"I need your help\" turns opponents into teammates\n• **Arguments** — an argument is a knot to unravel, not a war to win\n• **Rescuing** — protect your presence, not their problem: you cannot control their mood\n• **Patience** — real repair happens in a hundred small moments of calm connection\n\nIn every mindset deck, you train to replace a limiting belief with a grounded, courtroom-tested truth.",
      cards: [
        { q: "What is the limiting belief in the No-Saying mindset?", a: "That saying no is unkind and selfish, and will destroy your relationships.", bundle: 'pro' },
        { q: "Why is hyper-independence considered a trap in the Asking for Help mindset?", a: "Because it cuts you off from deep connection and leads to isolation, when people actually love to be helpful.", bundle: 'pro' },
        { q: "What is the core premise of the Rescuing mindset?", a: "That trying to fix another person's emotional state is a boundary overreach that suffocates their autonomy.", bundle: 'pro' },
        { q: "How does the Patience mindset approach relationship repair?", a: "By understanding that real connection cannot be forced or resolved in one heated marathon talk.", bundle: 'pro' },
      ]
    },
  ],
  talkingaboutyourself: [
    {
      name: "Core Idea",
      description: "Seven strategies for the moment the attention lands on you.\n\n1. **Give a Detail**\n2. **Match What They Gave**\n3. **Say the Small True Thing**\n4. **Answer What They Are Really Asking**\n5. **Name What You Are Into**\n6. **Keep Something Back**\n7. **Hand It Back**\n\nThree answer the question, two decide the size, one names what you care about.",
      cards: [
        { q: "What are the seven strategies in this pack?", a: "Give a Detail, Match What They Gave, Say the Small True Thing, Answer What They Are Really Asking, Name What You Are Into, Keep Something Back, Hand It Back.", bundle: 'free' },
        { q: "What are the two ways answering goes wrong?", a: "Giving too little, which puts the whole conversation on them. And giving too much too soon, which outruns what they offered.", bundle: 'free' },
        { q: "What is the mistake underneath both?", a: "Reading the question as a test of how interesting you are, rather than as an invitation to be known.", bundle: 'free' },
        { q: "How do the seven divide?", a: "Three answer the question, two decide the size, one names what you care about, and one hands the attention back.", bundle: 'free' },
        { q: "What is the useful question when you are unsure which strategy to use?", a: "What would my answer leave them with?", bundle: 'free' },
        { q: "What does the rest of the app teach that this pack answers?", a: "Everything else teaches asking. This is the half where the question comes back to you.", bundle: 'pro' },
        { q: "What is attention on you, according to this pack?", a: "An offer, not an exam.", bundle: 'pro' },
        { q: "Which strategy always comes last, and why?", a: "Hand It Back — because before you have answered, it is a shield rather than a gift.", bundle: 'pro' },
      ]
    },
    {
      name: "Give a Detail",
      description: "",
      cards: [
        { q: "What is the move?", a: "Answer the question, then add one concrete detail they could ask about.", bundle: 'free' },
        { q: "Why is a closed answer a problem?", a: "They asked in order to have a conversation, and now they must invent a new question with nothing to build on.", bundle: 'free' },
        { q: "What are the three details that always work?", a: "The concrete thing, the small mishap, and the odd contrast.", bundle: 'free' },
        { q: "Does the detail have to be interesting?", a: "No. It is a handle, not a performance — and trying to make it interesting is what stops people using it.", bundle: 'free' },
        { q: "What happens after two closed answers?", a: "Most people conclude you would rather not talk, which is almost never what you meant.", bundle: 'free' },
        { q: "Why does the small mishap invite the most?", a: "People like a story with a problem in it, and a problem is something they can ask about.", bundle: 'pro' },
        { q: "How do you recover an answer you already closed?", a: "Reopen it out loud. \"That's not the whole answer, actually.\"", bundle: 'pro' },
        { q: "What is the odd contrast?", a: "The bit that does not fit — \"quiet week, which is strange, because it started with a funeral\".", bundle: 'pro' },
      ]
    },
    {
      name: "Match What They Gave",
      description: "",
      cards: [
        { q: "What is the rule?", a: "Answer at roughly the depth they offered — one step, taken after they take theirs.", bundle: 'free' },
        { q: "What are the three sizes to read?", a: "The polite question, the real question, and the disclosure.", bundle: 'free' },
        { q: "Which direction is the worse mistake?", a: "Going too deep too early. It is a step nobody offered to take.", bundle: 'free' },
        { q: "What does a light answer tell someone who has just shared something real?", a: "That it was not safe. They will close the subject and be pleasant for the rest of the evening.", bundle: 'free' },
        { q: "Does matching always mean disclosing something of your own?", a: "No. Saying plainly that you are listening rather than trading is also a match.", bundle: 'free' },
        { q: "How do you tell a real question from a polite one?", a: "They stop, and they wait. A polite question is asked in motion.", bundle: 'pro' },
        { q: "What do you do if you have gone too deep by accident?", a: "Say so lightly and carry on. \"That was more than I meant to say.\"", bundle: 'pro' },
        { q: "What does \"depth is a staircase\" mean in practice?", a: "One step below what they gave, taken after they take theirs. Not five, and not none.", bundle: 'pro' },
      ]
    },
    {
      name: "Say the Small True Thing",
      description: "",
      cards: [
        { q: "What is the standard for a good answer?", a: "True and specific. Not interesting.", bundle: 'free' },
        { q: "Why do people stall on \"what have you been up to\"?", a: "They are searching for something worth reporting, and there is nothing to find because that was never the standard.", bundle: 'free' },
        { q: "What does \"not much\" reveal?", a: "Nothing. \"Repainting a wardrobe badly\" reveals a person.", bundle: 'free' },
        { q: "What are the three sizes, and are they all fine?", a: "Ordinary and specific, mildly embarrassing, and actually difficult. All three are fine.", bundle: 'free' },
        { q: "Why does the mildly embarrassing answer work so well?", a: "It costs nothing and buys a lot of warmth.", bundle: 'free' },
        { q: "How do you say a genuinely hard thing without making it heavy?", a: "Plainly and without the full weight, so they can decide whether to go there.", bundle: 'pro' },
        { q: "What is wrong with inflating an ordinary story?", a: "The inflated version is the one that falls flat, because it is the only one they can hear you doing.", bundle: 'pro' },
        { q: "What are people actually measuring when they ask?", a: "What you are like — not how eventful your life is.", bundle: 'pro' },
      ]
    },
    {
      name: "Answer What They Are Really Asking",
      description: "",
      cards: [
        { q: "What is \"what do you do?\" actually asking?", a: "What your days are like, and whether there is anything in there worth talking about.", bundle: 'free' },
        { q: "Why is a job title a bad answer?", a: "It tells them what to call you and nothing else, and it is very hard to ask a follow-up about.", bundle: 'free' },
        { q: "What are the three ways to give the real answer?", a: "Add what it is actually like, give the part you find interesting, or answer the person rather than the form.", bundle: 'free' },
        { q: "What is \"where are you from?\" really asking?", a: "What shaped you.", bundle: 'free' },
        { q: "What if you would rather not lead with your job at all?", a: "Fine — as long as you hand them something else to hold.", bundle: 'free' },
        { q: "What is \"how long have you been here?\" really asking?", a: "Whether you feel settled.", bundle: 'pro' },
        { q: "What is wrong with \"just admin, nothing exciting\"?", a: "It closes the subject twice — once with the title, once with the apology.", bundle: 'pro' },
        { q: "What should the real answer make possible?", a: "A second question. That is the whole test.", bundle: 'pro' },
      ]
    },
    {
      name: "Name What You Are Into",
      description: "",
      cards: [
        { q: "What are the three parts?", a: "Name it without apologising, give one line, then stop.", bundle: 'free' },
        { q: "Why is stopping the discipline?", a: "What people fear is not the enthusiasm, it is the lecture. Those are different things.", bundle: 'free' },
        { q: "What does an apology in front of it do?", a: "Tells the other person this is not something to ask about.", bundle: 'free' },
        { q: "What is the most attractive thing most people hide?", a: "What they are actually enthusiastic about.", bundle: 'free' },
        { q: "When do you get to say the rest?", a: "When they ask — and then you have an audience that wants it.", bundle: 'free' },
        { q: "Does the thing you are into have to have a point?", a: "No. \"There's no point to it\" is often the most likeable answer available.", bundle: 'pro' },
        { q: "What do you do if it is very niche?", a: "Say so, and offer them the choice of the short version or the long one.", bundle: 'pro' },
        { q: "How long is \"one line about it\"?", a: "Long enough to be a handle, short enough not to be a talk.", bundle: 'pro' },
      ]
    },
    {
      name: "Keep Something Back",
      description: "",
      cards: [
        { q: "What are the two bad options this replaces?", a: "Stonewalling, which makes it enormous, and answering fully when you did not want to.", bundle: 'free' },
        { q: "What are the three ways to keep it?", a: "The short version, naming the boundary warmly, or moving it rather than closing it.", bundle: 'free' },
        { q: "Why does a partial answer land well?", a: "You gave them something rather than nothing, so the door closes without anyone feeling they trod on something.", bundle: 'free' },
        { q: "What stops the gap becoming the story?", a: "Filling it with something else true about you.", bundle: 'free' },
        { q: "What if it is someone with authority over you?", a: "\"I'd rather keep that outside work\" is a complete sentence. If it is not respected, that is information about them.", bundle: 'free' },
        { q: "What do you say if they apologise for asking?", a: "That it was a normal question and you are simply not doing it tonight.", bundle: 'pro' },
        { q: "What do you do if they push after you have declined?", a: "Repeat that you have given them what you have, and let the pause sit.", bundle: 'pro' },
        { q: "What makes a refusal heavy rather than easy?", a: "The justification. The refusal itself is fine.", bundle: 'pro' },
      ]
    },
    {
      name: "Hand It Back",
      description: "",
      cards: [
        { q: "What is the rule?", a: "Answer first, with something real. Then hand it over.", bundle: 'free' },
        { q: "What is wrong with handing it back immediately?", a: "It looks like interest and works like a shield — they learn nothing about you and do all the work.", bundle: 'free' },
        { q: "What are the three good moments?", a: "After a real answer, into a thread they gave you, or when you have been talking a while.", bundle: 'free' },
        { q: "What happens if you only ever hand it back?", a: "They stop asking, and the conversation becomes an interview with you as the interviewer.", bundle: 'free' },
        { q: "How do you fix it once you have noticed?", a: "Say so and go first. \"You've told me loads and I've told you nothing.\"", bundle: 'free' },
        { q: "What does handing it back into a thread sound like?", a: "Using their own earlier material — \"you mentioned Malmö earlier\".", bundle: 'pro' },
        { q: "What do you do when you have been talking a while?", a: "Name it and stop. \"I've had a good run at this. Your turn.\"", bundle: 'pro' },
        { q: "What do you do when both of you keep deflecting?", a: "Go first. \"We're both being very polite — I'll start.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Collections",
      description: "The three collections in this pack, and what each one makes you choose between:\n\n• **When They Ask About You** — the three for an ordinary question: detail, real answer, or small true thing\n• **Choosing How Much** — the four that decide size: match, keep back, name what you love, hand back\n• **All Seven** — everything mixed, in the order real conversations produce it\n\nOne question sorts the first group and one sorts the second: what would my answer leave them with, and how much did they just offer?",
      cards: [
        { q: "What are the three collections in this pack?", a: "When They Ask About You, Choosing How Much, and All Seven.", bundle: 'pro' },
        { q: "What does When They Ask About You sort by?", a: "What your answer would leave them with — nothing to ask about, a job title, or nothing true.", bundle: 'pro' },
        { q: "What does Choosing How Much sort by?", a: "Size rather than content — how much they offered, and whether you want to answer at all.", bundle: 'pro' },
        { q: "Your answer left them nothing to hold. Which strategy?", a: "Give a Detail.", bundle: 'pro' },
        { q: "You gave a job title and it stalled. Which strategy?", a: "Answer What They Are Really Asking.", bundle: 'pro' },
        { q: "You are hunting for something impressive. Which strategy?", a: "Say the Small True Thing.", bundle: 'pro' },
        { q: "They went one level deeper than usual. Which strategy?", a: "Match What They Gave.", bundle: 'pro' },
        { q: "You have answered fully and want the attention to move. Which strategy?", a: "Hand It Back.", bundle: 'pro' },
      ]
    },
    {
      name: "Sequences",
      description: "The three sequences in this pack, and the order each one runs in:\n\n1. **A First Conversation** — Answer What They Are Really Asking → Give a Detail → Hand It Back → Match What They Gave\n2. **Going a Bit Deeper** — Match What They Gave → Say the Small True Thing → Name What You Are Into → Hand It Back\n3. **A Question You Would Rather Not Answer** — Keep Something Back → Give a Detail → Hand It Back → Match What They Gave\n\nAll three end by handing the attention over, and none of them starts there.",
      cards: [
        { q: "What is the order in A First Conversation?", a: "Real answer, one detail, hand it back, then match whatever they give you.", bundle: 'pro' },
        { q: "Why does that sequence answer three times before turning it around?", a: "So the handover lands as generosity rather than as escape.", bundle: 'pro' },
        { q: "What do people do instead in a first conversation?", a: "Answer briefly and immediately ask back — which means after four exchanges they know nothing about you.", bundle: 'pro' },
        { q: "What is the order in Going a Bit Deeper?", a: "Match what they gave, say the small true thing, name what you are into, hand it back.", bundle: 'pro' },
        { q: "Whose decision is the first step of that sequence?", a: "Theirs as much as yours — they went one level down and you are taking them up on it.", bundle: 'pro' },
        { q: "What is the order in A Question You Would Rather Not Answer?", a: "Keep something back, give a detail, hand it back, then match.", bundle: 'pro' },
        { q: "Why does a detail come straight after keeping something back?", a: "The gap is what makes it awkward, so the next step fills it rather than letting it sit.", bundle: 'pro' },
        { q: "What do all three sequences have in common?", a: "They end by handing the attention over, and none of them starts there.", bundle: 'pro' },
      ]
    },
    {
      name: "Challenges",
      description: "The five situations where answering gets hard:\n\n• **An Ordinary Week** — nothing feels worth reporting\n• **After a Disclosure** — they have just told you something big\n• **What Do You Do** — the most-asked question, worst-answered\n• **A Bad Stretch** — the honest answer is not good\n• **A Closed Subject** — you would rather not answer at all\n\nTwo are about having nothing to say, and three are about deciding how much to give.",
      cards: [
        { q: "What are the five challenge categories in this pack?", a: "An Ordinary Week, After a Disclosure, What Do You Do, A Bad Stretch, and A Closed Subject.", bundle: 'pro' },
        { q: "What is wrong in An Ordinary Week?", a: "The standard, not the week. There is nothing to find because interesting was never the bar.", bundle: 'pro' },
        { q: "What is always wrong after a disclosure?", a: "The light answer. They are checking whether it was safe, and a breezy reply answers that.", bundle: 'pro' },
        { q: "Why is a job title the worst available answer?", a: "It is nearly impossible to ask a follow-up question about.", bundle: 'pro' },
        { q: "What is the middle option in a bad stretch?", a: "A true answer at the size the moment allows — honest and small.", bundle: 'pro' },
        { q: "What makes a declined question awkward?", a: "The gap afterwards, not the refusal. Fill it with something else true.", bundle: 'pro' },
        { q: "What should you avoid when declining?", a: "Explaining why. The refusal is fine; the justification makes it heavy.", bundle: 'pro' },
        { q: "What do two of the five categories have in common?", a: "They are about having nothing to say. The other three are about how much to give.", bundle: 'pro' },
      ]
    },
    {
      name: "Mindset",
      description: "The four beliefs that keep people from answering:\n\n• **Just Being Polite** — they only asked to be polite\n• **The Bar for an Answer** — an ordinary week is not worth reporting\n• **Always the Asker** — I would rather hear about them\n• **All or Nothing** — honesty means telling them everything\n\nEach is a real rule applied far too widely.",
      cards: [
        { q: "What are the four mindset areas in this pack?", a: "Just Being Polite, The Bar for an Answer, Always the Asker, and All or Nothing.", bundle: 'pro' },
        { q: "What does the four-word answer teach the other person?", a: "That you would rather not be asked — and then they stop asking, which seems to prove the belief.", bundle: 'pro' },
        { q: "What is the standard for an answer?", a: "True and specific. Not interesting.", bundle: 'pro' },
        { q: "Why is being the listener such an effective place to hide?", a: "Because it is genuinely generous, genuinely comfortable and genuinely a strength.", bundle: 'pro' },
        { q: "What stalls a friendship where one person only ever asks?", a: "Being known has to go both ways. Otherwise it stops at a certain depth and nobody can say why.", bundle: 'pro' },
        { q: "Why do the two extremes feel easier than the middle?", a: "They are rules. The middle is a judgement, and judgements can be got wrong.", bundle: 'pro' },
        { q: "What does \"one step below what they gave\" replace?", a: "The choice between guarded and wide open, which produces both failures at once.", bundle: 'pro' },
        { q: "What is attention on you?", a: "An offer, not an exam.", bundle: 'pro' },
      ]
    },
  ],
  startingconversations1: [
    {
      name: "Core Idea",
      description: "Four openers that work anywhere, need no courage, and require nothing known about the other person.\n\n1. **Simple Greeting**\n2. **Introduce Yourself**\n3. **Comment on the Situation**\n4. **Ask About the Situation**\n\nTwo use the relationship, two use the room.",
      cards: [
        { q: "What are the four openers in this pack?", a: "Simple Greeting, Introduce Yourself, Comment on the Situation, and Ask About the Situation.", bundle: 'free' },
        { q: "What do all four have in common?", a: "They need no courage and nothing known about the other person.", bundle: 'free' },
        { q: "What is the one thing you are guaranteed to share with a stranger?", a: "The situation you are both in.", bundle: 'free' },
        { q: "How do the four divide?", a: "Two are about the relationship — greeting and introducing. Two are about the room — commenting and asking.", bundle: 'free' },
        { q: "What decides whether to introduce yourself?", a: "Whether you will need to speak to them again.", bundle: 'free' },
        { q: "Which opener asks the least of the other person?", a: "A comment — they can nod and that is the end of it.", bundle: 'pro' },
        { q: "Which opener gets words back most reliably?", a: "A question about the situation.", bundle: 'pro' },
        { q: "What does the pack say a short reply means?", a: "Very little. One flat reply means nothing; two means something.", bundle: 'pro' },
      ]
    },
    {
      name: "Simple Greeting",
      description: "",
      cards: [
        { q: "What is a greeting actually doing?", a: "Signalling that you are willing to talk, and leaving the next move to them.", bundle: 'free' },
        { q: "Name two ways to greet.", a: "Any two of: the plain greeting, greeting plus their name, the ritual question, greeting plus a small hook.", bundle: 'free' },
        { q: "What does adding their name cost, and what does it buy?", a: "One word, and considerably more warmth.", bundle: 'free' },
        { q: "What is a \"small hook\"?", a: "One extra clause they can answer if they want to — \"busy in here today\".", bundle: 'free' },
        { q: "What counts as a successful greeting?", a: "A nod back. It is an offer, not a demand.", bundle: 'free' },
        { q: "When is \"how are you\" not a real question?", a: "When it is used as a greeting — expect \"fine, you?\" and treat that as the door opening.", bundle: 'pro' },
        { q: "What else is a greeting good for besides opening?", a: "Closing. It is how you leave a flat exchange warmly rather than coldly.", bundle: 'pro' },
        { q: "Why is it the lowest-risk opener there is?", a: "Nobody has ever been offended by \"morning\", and an unanswered one costs nothing.", bundle: 'pro' },
      ]
    },
    {
      name: "Introduce Yourself",
      description: "",
      cards: [
        { q: "What does introducing yourself do that other openers do not?", a: "It makes the second conversation easy, because there is no first one left to get through.", bundle: 'free' },
        { q: "What should you add to your name, and why?", a: "A small piece of context, so they have something to reply to besides their own name.", bundle: 'free' },
        { q: "When should you do it?", a: "Early. Introducing yourself after twenty minutes of talking is far more awkward.", bundle: 'free' },
        { q: "Name two ways to introduce yourself.", a: "Any two of: name only, name plus your connection to the room, name plus a reason you are talking to them, naming that you have not met.", bundle: 'free' },
        { q: "What obstacle does saying your name remove?", a: "Not knowing whether you are allowed to talk — it answers that for both of you.", bundle: 'free' },
        { q: "How do you handle having left it far too long?", a: "Name the delay lightly. It usually lands as funny rather than awkward.", bundle: 'pro' },
        { q: "Which mistake is the more expensive one?", a: "Not introducing yourself to someone you will see weekly. The other way round costs nothing.", bundle: 'pro' },
        { q: "Why is being new a licence?", a: "It is a legitimate reason to talk to anyone, and it turns a stranger into someone helping you.", bundle: 'pro' },
      ]
    },
    {
      name: "Comment on the Situation",
      description: "",
      cards: [
        { q: "Why is a comment lower pressure than a question?", a: "It does not require an answer, so they can opt out with no awkwardness.", bundle: 'free' },
        { q: "Name two ways to comment on the situation.", a: "Any two of: state what you both see, react to it, wonder out loud, compare it to before.", bundle: 'free' },
        { q: "Does the comment have to be interesting?", a: "No. It has to be shared.", bundle: 'free' },
        { q: "What does \"wonder out loud\" achieve?", a: "It invites an answer without asking for one.", bundle: 'free' },
        { q: "When should you comment rather than ask?", a: "When they look busy, closed off or absorbed — it lets them decide.", bundle: 'free' },
        { q: "What is the most common reason people do not use this opener?", a: "They reject their own line for being too obvious, which is exactly why it works.", bundle: 'pro' },
        { q: "What can you comment on in a completely empty room?", a: "The emptiness, the wait, being early, or the room itself.", bundle: 'pro' },
        { q: "Why is a comment the right move with someone who looks busy?", a: "They can answer it with a nod, which lets them decide whether anything follows.", bundle: 'pro' },
      ]
    },
    {
      name: "Ask About the Situation",
      description: "",
      cards: [
        { q: "Why does this opener get the most words back?", a: "A comment can be met with a nod; a question almost always gets words.", bundle: 'free' },
        { q: "Name two ways to ask about the situation.", a: "Any two of: practical information, whether they have been here before, how something works, checking your own assumption.", bundle: 'free' },
        { q: "Why does asking how something works help?", a: "It invites them to be helpful, which is an easy role to be given.", bundle: 'free' },
        { q: "What is the mindset line for this move?", a: "Ask the question you actually want answered — people hear the difference.", bundle: 'free' },
        { q: "What do you use when a first opener fell flat?", a: "Usually a question about the situation, because it needs more than a word.", bundle: 'free' },
        { q: "Which question opens the door widest?", a: "Whether this is their first time — the answer leads somewhere either way.", bundle: 'pro' },
        { q: "When is a question the wrong opener?", a: "With someone plainly busy. They will answer out of politeness and neither of you wanted the conversation.", bundle: 'pro' },
        { q: "What makes an invented question obvious?", a: "You are not listening to the answer. Ask something you actually want to know.", bundle: 'pro' },
      ]
    },
    {
      name: "Collections",
      description: "The three collections in this pack, and what each one makes you choose between:\n\n• **The Three Without a Name** — greeting, comment or question, on a scale of how much you are asking\n• **Will You See Them Again** — all four, decided by whether the person recurs\n• **All Four Openers** — no cue given, which is what a real moment is like\n\nTwo questions cover nearly all of it: how much do they want to be spoken to, and will you meet again?",
      cards: [
        { q: "What are the three collections in this pack?", a: "The Three Without a Name, Will You See Them Again, and All Four Openers.", bundle: 'pro' },
        { q: "What is the scale in The Three Without a Name?", a: "How much you are asking of them — a greeting asks least, a question asks most.", bundle: 'pro' },
        { q: "What decides it in Will You See Them Again?", a: "Whether you will need to speak to this person twice.", bundle: 'pro' },
        { q: "Someone has headphones in and you need the seat. Which opener?", a: "Ask About the Situation, kept short and practical.", bundle: 'pro' },
        { q: "A new colleague is by the coffee machine. Which opener?", a: "Introduce Yourself — they recur, so give them your name now.", bundle: 'pro' },
        { q: "You pass the same dog walker every morning. Which opener?", a: "Simple Greeting. There is nothing to be gained by making it bigger.", bundle: 'pro' },
        { q: "Why is there no two-strategy collection in this pack?", a: "Two is a comparison, not a choice. A collection makes you pick between at least three.", bundle: 'pro' },
        { q: "What is the commonest failure in the full collection?", a: "Not choosing wrongly — standing there running through the options until the moment has gone.", bundle: 'pro' },
      ]
    },
    {
      name: "Sequences",
      description: "The three sequences in this pack, and what each one drills:\n\n1. **The First Exchange** — smallest to largest, each step built from the last reply\n2. **The Second Try** — two attempts, then a graceful exit\n3. **The Way In** — being new as the reason, then asking how it works\n\nAll three are reactive: every step carries what they actually said, and names the opener to use next.",
      cards: [
        { q: "What does The First Exchange drill?", a: "Using what came back instead of starting again from nothing.", bundle: 'pro' },
        { q: "Why are the replies in that sequence short and flat?", a: "Because real first replies are. A short answer is the normal amount of material to work with.", bundle: 'pro' },
        { q: "How many attempts does The Second Try allow?", a: "Two. Enough to be sure, few enough to leave gracefully.", bundle: 'pro' },
        { q: "What is the fourth step of that sequence?", a: "The exit — leaving warmly rather than coldly when the second attempt lands flat too.", bundle: 'pro' },
        { q: "Why does the second attempt change shape rather than volume?", a: "A short answer often just means the opener was easy to answer shortly.", bundle: 'pro' },
        { q: "What is the licence in The Way In?", a: "Being new. It is a legitimate reason to talk to anyone, and saying so is allowed.", bundle: 'pro' },
        { q: "Why does asking how things work help when you are new?", a: "It turns a stranger into someone helping you, which is easier for both of you.", bundle: 'pro' },
        { q: "What do people do instead when they are new?", a: "Hide it and try to blend in, which makes every question sound like one they should know the answer to.", bundle: 'pro' },
      ]
    },
    {
      name: "Challenges",
      description: "The five situations that make opening hard:\n\n• **Closed Signals** — headphones, a book, a fast walk\n• **An Empty Room** — nothing to remark on\n• **Joining a Group** — no gap to speak into\n• **Left Too Long** — the normal moment has passed\n• **A Flat Reply** — you tried and got almost nothing\n\nFour of the five are solved by making the opener smaller, not cleverer.",
      cards: [
        { q: "What are the five challenge categories in this pack?", a: "Closed Signals, An Empty Room, Joining a Group, Left Too Long, and A Flat Reply.", bundle: 'pro' },
        { q: "What is the right move with someone showing closed signals?", a: "An opener they can answer in one word — a comment or a greeting.", bundle: 'pro' },
        { q: "What can you open with in a completely empty room?", a: "The emptiness itself, the wait, being early, or why you are both there.", bundle: 'pro' },
        { q: "How do you join a group mid-conversation?", a: "Talk to one person, not the group. Groups do not answer; people do.", bundle: 'pro' },
        { q: "How do you fix having left it too long?", a: "Name the delay lightly in one sentence, then move on. A paragraph makes it strange again.", bundle: 'pro' },
        { q: "What does a single flat reply tell you?", a: "Almost nothing. Get a second piece of evidence before deciding.", bundle: 'pro' },
        { q: "How many attempts after a flat reply?", a: "One more, then let it go warmly.", bundle: 'pro' },
        { q: "What do most of these categories have in common?", a: "The answer is a smaller opener, not a cleverer one.", bundle: 'pro' },
      ]
    },
    {
      name: "Mindset",
      description: "The four beliefs that stop people opening a conversation:\n\n• **The Bar You Set** — it has to be interesting\n• **Reading a Short Reply** — three words means no\n• **Permission** — I need a reason to speak\n• **What It Would Cost** — what if it goes badly\n\nEach one is a reasonable thought, and each one is measuring the wrong thing.",
      cards: [
        { q: "What are the four mindset areas in this pack?", a: "The Bar You Set, Reading a Short Reply, Permission, and What It Would Cost.", bundle: 'pro' },
        { q: "Why is an obvious opener the right one?", a: "It is judged as an invitation, not a remark. Obvious is what makes it easy to answer.", bundle: 'pro' },
        { q: "Why do people think good openers have to be clever?", a: "They remember the clever ones and never notice the hundreds of dull ones that worked.", bundle: 'pro' },
        { q: "What does one short reply actually tell you?", a: "That your opener was easy to answer shortly. Nothing more.", bundle: 'pro' },
        { q: "What reason do you need to speak to a stranger in a queue?", a: "Being in the same queue. That has always been reason enough.", bundle: 'pro' },
        { q: "What is the honest worst case of an opener that falls flat?", a: "A short reply, from someone who will not remember it by lunchtime.", bundle: 'pro' },
        { q: "How long does the discomfort last?", a: "A few seconds — and only for you.", bundle: 'pro' },
        { q: "What do you give up by avoiding it?", a: "Every conversation that would have started. That is the trade being made.", bundle: 'pro' },
      ]
    },
  ],
  startingconversations2: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The shape of the pack: four openers that use common ground, and what each one needs to be true.",
      cards: [
        { q: "What are the four openers in this pack?", a: "Ask for help, offer something useful, mention a shared experience, pick up a shared thread.", bundle: 'free' },
        { q: "What do all four have in common?", a: "Each needs something real — a genuine request, real information, a shared event or a remembered thread.", bundle: 'free' },
        { q: "Which of the four works with a complete stranger?", a: "Asking for help, offering something useful, and a shared experience. The thread needs history.", bundle: 'free' },
        { q: "Why do asking and offering both work?", a: "They give the other person a role rather than a topic — someone who helps, or someone being helped.", bundle: 'pro' },
        { q: "What is the strongest opener with someone you half know?", a: "A shared thread, because remembering is worth more than agreeing.", bundle: 'pro' },
        { q: "What should you do when none of the four is true?", a: "Use a plainer opener. Manufactured common ground is worse than a simple hello.", bundle: 'pro' },
      ]
    },
    {
      name: "Ask for Help",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The opener that starts with a task instead of a topic.",
      cards: [
        { q: "Why does asking for a small favour work as an opener?", a: "People like being asked — it gives them a role that is easier than being a stranger talked at.", bundle: 'free' },
        { q: "How small should the request be?", a: "Small enough that yes is the easy answer.", bundle: 'free' },
        { q: "Name two kinds of small request.", a: "Any two of: a physical favour, local knowledge, a second pair of hands, watching something.", bundle: 'free' },
        { q: "What is the second half of this opener?", a: "Thanking them properly.", bundle: 'pro' },
        { q: "Why does asking someone to watch your bag work well?", a: "It implies trust, which people like being given.", bundle: 'pro' },
        { q: "What is the test for whether the request is real?", a: "Whether you would ask it if nobody were around.", bundle: 'pro' },
      ]
    },
    {
      name: "Offer Something Useful",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The opener that gives instead of asking.",
      cards: [
        { q: "What does this opener do that the others do not?", a: "It gives the other person something, so there is nothing for them to weigh up.", bundle: 'free' },
        { q: "Name two kinds of useful offer.", a: "Any two of: a shortcut, a warning, how something works, what is coming.", bundle: 'free' },
        { q: "What is the mindset line for this move?", a: "Offer it and let go — thanks is a complete outcome.", bundle: 'free' },
        { q: "Where is the line between useful and unwanted?", a: "Information about the situation is welcome; a verdict about the person arrives as a correction.", bundle: 'pro' },
        { q: "Why does this opener remove awkwardness?", a: "It gives you an obvious reason for having spoken at all.", bundle: 'pro' },
        { q: "What do you say if a tip lands badly?", a: "Name it lightly and let it go — \"sorry, unsolicited advice, ignore me\".", bundle: 'pro' },
      ]
    },
    {
      name: "Mention a Shared Experience",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The most reliable opener between strangers who have just done the same thing.",
      cards: [
        { q: "Why does a shared experience need no introduction?", a: "They know exactly what you mean and already have opinions about it.", bundle: 'free' },
        { q: "What makes a better version of this opener?", a: "Naming something specific rather than the event as a whole.", bundle: 'free' },
        { q: "Name two ways to use a shared experience.", a: "Any two of: give your verdict, ask for theirs first, name a specific moment, say what you were thinking during it.", bundle: 'free' },
        { q: "What is the mindset line for this move?", a: "You are comparing notes, not informing them — it is a conversation between equals.", bundle: 'pro' },
        { q: "What do you do when the shared experience was genuinely bad?", a: "Match the weight. One honest sentence, or nothing — not jokey small talk.", bundle: 'pro' },
        { q: "Which is more generous, giving your verdict or asking for theirs?", a: "Asking for theirs first.", bundle: 'pro' },
      ]
    },
    {
      name: "Pick Up a Shared Thread",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The opener for people you already know a little.",
      cards: [
        { q: "What does this opener prove that no other one does?", a: "That you remembered.", bundle: 'free' },
        { q: "Why is \"how did Thursday go\" better than \"how's things\"?", a: "Specific questions have answers. General ones get \"fine\".", bundle: 'free' },
        { q: "Name two kinds of thread.", a: "Any two of: the ongoing thing, a specific event, something they were worried about, a topic you both enjoyed.", bundle: 'free' },
        { q: "What do you do when you cannot remember what the thread was?", a: "Say so — \"you told me something last time and I've lost it\" gets it back from them.", bundle: 'pro' },
        { q: "How do you ask about a thread that might be painful?", a: "Gently, once, with an easy way out, and not across a room.", bundle: 'pro' },
        { q: "Which opener do people most often waste?", a: "The thread — they greet someone they half know instead of asking one specific question.", bundle: 'pro' },
      ]
    },
  ],
  startingconversations4: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The shape of the pack: four openers where you go first and put something of your own forward.",
      cards: [
        { q: "What are the four openers in this pack?", a: "Use humour or irony, say how you feel, say why you came over, mention something that happened.", bundle: 'free' },
        { q: "What do all four have in common?", a: "You go first — you offer something before knowing how it will be received.", bundle: 'free' },
        { q: "Which two cost you least?", a: "Humour and bringing something in from outside; neither puts you forward.", bundle: 'free' },
        { q: "Which is the strongest opener in the pack?", a: "Saying why you came over — and it is the one people avoid most.", bundle: 'pro' },
        { q: "What is the failure that runs through all four?", a: "Doing them at someone rather than with them — say it, then leave room.", bundle: 'pro' },
        { q: "Why does going first work at all?", a: "Several people are waiting for someone to say the thing. Going first gives them permission.", bundle: 'pro' },
      ]
    },
    {
      name: "Use Humour or Irony",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The opener that skips three minutes of small talk when it lands.",
      cards: [
        { q: "What is the one rule for humour as an opener?", a: "Aim it at the situation, never at the person.", bundle: 'free' },
        { q: "Name two ways to be funny about a situation.", a: "Any two of: exaggerate it, understate it, aim it at yourself, say the thing everyone is thinking.", bundle: 'free' },
        { q: "What is the safest target for a joke?", a: "Yourself.", bundle: 'free' },
        { q: "What does a joke do when it lands?", a: "It says something true everyone was thinking and signals that you are easy company.", bundle: 'pro' },
        { q: "What is the recovery when a joke misses?", a: "Short and unbothered — do not explain it, do not repeat it, do not apologise at length.", bundle: 'pro' },
        { q: "Which travels better across a language gap, exaggeration or understatement?", a: "Exaggeration. Dryness carries almost none of its meaning in the words.", bundle: 'pro' },
      ]
    },
    {
      name: "Say How You Feel",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The opener that gives other people permission.",
      cards: [
        { q: "Why does naming a feeling work as an opener?", a: "Several people feel the same and none has said it, so the first to admit it relieves everyone.", bundle: 'free' },
        { q: "How big should the feeling be?", a: "Small and current — about this room, not about your life.", bundle: 'free' },
        { q: "What is the test for whether it is too big?", a: "If it would need explaining, it is too big for an opener.", bundle: 'free' },
        { q: "Name two ways to say how you feel.", a: "Any two of: name it plainly, attach it to the moment, say the positive one, admit the thing nobody admits.", bundle: 'pro' },
        { q: "Which version is rarest and very effective?", a: "The positive one — \"I've been looking forward to this all week\".", bundle: 'pro' },
        { q: "What do you do if you have said more than you meant?", a: "Name it lightly, put it down, and offer a way back to ordinary conversation.", bundle: 'pro' },
      ]
    },
    {
      name: "Say Why You Came Over",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The most honest opener in the set, and the one that works best.",
      cards: [
        { q: "What does naming the approach remove?", a: "The unspoken question of why you are talking to them.", bundle: 'free' },
        { q: "Name two reasons you can give.", a: "Any two of: you are new, you did not want to stand alone, you have been meaning to, something specific they did.", bundle: 'free' },
        { q: "What is the mindset line for this move?", a: "Awkward and true beats smooth and invented.", bundle: 'free' },
        { q: "How do you stop it reading as flirting?", a: "Anchor the reason in the situation rather than in them — being new, knowing nobody.", bundle: 'pro' },
        { q: "What do you do after naming the reason?", a: "Say it once, then move to ordinary conversation rather than staying in the meta.", bundle: 'pro' },
        { q: "Why does honesty work here?", a: "Most people relax immediately when someone admits to finding this slightly awkward.", bundle: 'pro' },
      ]
    },
    {
      name: "Mention Something That Happened",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The only opener that is not about the situation, you, or them.",
      cards: [
        { q: "What does this opener give the other person?", a: "Something to have an opinion about, which is easier than being asked about themselves.", bundle: 'free' },
        { q: "How long should it be?", a: "Three sentences at most.", bundle: 'free' },
        { q: "Name two things worth bringing in.", a: "Any two of: a small mishap on the way, something you both might have seen, an odd thing you noticed, something you are looking forward to or dreading.", bundle: 'free' },
        { q: "Why is the small mishap the most reliable version?", a: "It is short, slightly funny, and easy to answer.", bundle: 'pro' },
        { q: "Why is heavy news a poor opener with a stranger?", a: "It asks them to take a position in front of someone they have just met.", bundle: 'pro' },
        { q: "What is the mindset line for this move?", a: "Pick something they can answer, not something they have to admire.", bundle: 'pro' },
      ]
    },
  ],
  showunderstanding: [
    {
      name: "Core Idea",
      description: "Three moves that between them cover almost everything somebody needs after they have told you something.\n\n1. **Ask Follow-up Questions**\n2. **Loop Back or Rephrase**\n3. **Relate Through Sharing**\n\nAsk when the story is unfinished, reflect when it has landed, share once it has been heard. One at a time.",
      cards: [
        { q: "What is the goal of showing understanding?", a: "Actively demonstrating that you followed what someone said — not just listening quietly.", bundle: 'free' },
        { q: "What are the three moves in this pack?", a: "Ask Follow-up Questions, Loop Back or Rephrase, and Relate Through Sharing.", bundle: 'free' },
        { q: "How many should you use at once?", a: "One. Stacking them makes the response about you managing the conversation.", bundle: 'free' },
        { q: "Is understanding the same as agreeing?", a: "No. You can fully understand someone and disagree with them a minute later.", bundle: 'free' },
        { q: "What decides which of the three to use?", a: "Where they are — still telling it, just landed it, or finished and settled.", bundle: 'free' },
        { q: "What is the safe order for something difficult?", a: "Loop first, ask second, relate last. Most people do it backwards.", bundle: 'pro' },
        { q: "What is the most common mistake?", a: "Relating too early — bringing in your own version before they have finished being heard.", bundle: 'pro' },
        { q: "What matters more than the technique?", a: "Actually being interested. The formulas are identical whether or not anyone is paying attention.", bundle: 'pro' },
      ]
    },
    {
      name: "Ask Follow-up Questions",
      description: "",
      cards: [
        { q: "What is Ask Follow-up Questions?", a: "Asking something that could only come from someone who was listening to that particular sentence.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"Can you tell me more about that?\" / \"What were you feeling at that moment?\"", bundle: 'free' },
        { q: "When is it the right move?", a: "When the story isn't finished. Asking keeps them going.", bundle: 'free' },
        { q: "What are the three kinds of follow-up?", a: "More of the same, the moment itself, or what came next.", bundle: 'free' },
        { q: "Why does a question prove attention better than agreement does?", a: "It has to be built out of what they just said. \"That sounds hard\" can be said by someone who heard nothing.", bundle: 'free' },
        { q: "What is the failure mode?", a: "Aiming at the topic instead of the specific thing — that's a subject change, not a follow-up.", bundle: 'pro' },
        { q: "When is a question the wrong move?", a: "After they have finished. It reads as being asked to keep performing.", bundle: 'pro' },
        { q: "What is wrong with two questions in a row?", a: "It becomes an interview, and it means you have given them nothing to ask you about.", bundle: 'pro' },
      ]
    },
    {
      name: "Loop Back or Rephrase",
      description: "",
      cards: [
        { q: "What is Loop Back or Rephrase?", a: "Saying their point back in your own words, so they can hear that it arrived — or correct you.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"So what you're saying is...\" / \"I hear that you felt frustrated when that happened.\"", bundle: 'free' },
        { q: "Why your own words rather than theirs?", a: "Repeating their exact sentence is parroting. Rephrasing proves the idea went in.", bundle: 'free' },
        { q: "What are the three kinds of loop?", a: "The summary, the feeling named, or the check.", bundle: 'free' },
        { q: "Why does it help to be slightly wrong?", a: "\"No, not annoyed — disappointed\" is them getting closer to their own point. That was the offer.", bundle: 'free' },
        { q: "What is the failure mode?", a: "Sounding mechanical — \"so what I'm hearing is\" in a voice you would never otherwise use.", bundle: 'pro' },
        { q: "What does a loop do that nothing else in a conversation does?", a: "It lets somebody find out whether they have been understood, rather than guess.", bundle: 'pro' },
        { q: "Why is a loop built on a misunderstanding worse than no loop?", a: "They now believe they have been understood when they have not, and the correction costs more later.", bundle: 'pro' },
      ]
    },
    {
      name: "Relate Through Sharing",
      description: "",
      cards: [
        { q: "What is Relate Through Sharing?", a: "Offering something of your own — a time you felt, thought or wanted the same thing.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"I know exactly what you mean, something similar happened to me...\"", bundle: 'free' },
        { q: "How long should it be?", a: "Two sentences, then hand it back. Anything with a middle is a story, and stories take the floor.", bundle: 'free' },
        { q: "What are the three ways to relate?", a: "The matching value, the matching feeling, or the matching experience.", bundle: 'free' },
        { q: "When is it the right move?", a: "Once they have finished and been understood. Then it arrives as company.", bundle: 'free' },
        { q: "What turns it from relating into competing?", a: "\"The same thing happened to me but worse.\" Connection, not comparison.", bundle: 'pro' },
        { q: "Which of the three ways is safest, and why?", a: "The matching value — it says nothing about you, so it cannot take the floor.", bundle: 'pro' },
        { q: "What is the sign it has gone too far?", a: "They have started asking you follow-up questions.", bundle: 'pro' },
      ]
    },
    {
      name: "Collections",
      description: "The three collections in this pack, and what each one makes you choose between:\n\n• **Finished or Not** — where they are in the story decides the move\n• **Raw or Settled** — how fresh the feeling is decides the move\n• **All Three Moves** — no cue given, which is the real conversation\n\nAll three offer the same three strategies. What changes is what you read to pick one.",
      cards: [
        { q: "What are the three collections in this pack?", a: "Finished or Not, Raw or Settled, and All Three Moves.", bundle: 'pro' },
        { q: "What does Finished or Not read?", a: "The pause. A short breath means carry on; a longer one means they have landed something.", bundle: 'pro' },
        { q: "What does Raw or Settled read?", a: "How fresh the feeling is — whether they are still inside it or can look at it from outside.", bundle: 'pro' },
        { q: "Can the two cues disagree?", a: "Yes. Somebody can finish a story and still be raw, and then you loop rather than relate.", bundle: 'pro' },
        { q: "They are mid-story and not finished. Which move?", a: "Ask Follow-up Questions — a question is permission to carry on.", bundle: 'pro' },
        { q: "They have just said something that cost them. Which move?", a: "Loop Back or Rephrase — reflect it rather than asking for more.", bundle: 'pro' },
        { q: "They have finished and the air has cleared. Which move?", a: "Relate Through Sharing, briefly.", bundle: 'pro' },
        { q: "Why is there no two-strategy collection in this pack?", a: "Two is a comparison, not a choice. A collection makes you pick between at least three.", bundle: 'pro' },
      ]
    },
    {
      name: "Sequences",
      description: "The three sequences in this pack, and the order each one runs in:\n\n1. **Loop, Then Ask** — Loop Back or Rephrase → Ask Follow-up Questions → Loop Back or Rephrase\n2. **Ask, Then Relate** — Ask Follow-up Questions → Loop Back or Rephrase → Relate Through Sharing\n3. **Loop, Loop, Ask** — Loop Back or Rephrase → Loop Back or Rephrase → Ask Follow-up Questions\n\nIn each one the order is doing the work, not the individual moves.",
      cards: [
        { q: "What is the order in Loop, Then Ask?", a: "Loop back, ask a follow-up, then loop back again on the new part.", bundle: 'pro' },
        { q: "Why does the loop come before the question?", a: "A question after a loop feels like interest. On its own it can feel like being interviewed.", bundle: 'pro' },
        { q: "Why does that sequence end with a second loop?", a: "The answer to your question is usually the real thing. The first version was the summary.", bundle: 'pro' },
        { q: "What is the order in Ask, Then Relate?", a: "Ask a follow-up, loop what you heard, then bring yourself in.", bundle: 'pro' },
        { q: "Why does relating come last?", a: "Once the whole thing has been told and reflected, your version arrives as company rather than as an interruption.", bundle: 'pro' },
        { q: "What is the order in Loop, Loop, Ask?", a: "Two loops, then one gentle question — and then stop.", bundle: 'pro' },
        { q: "Why is there no relating in that one?", a: "They have not finished being heard, and a comparison invites them to weigh their situation against yours.", bundle: 'pro' },
        { q: "What do people do instead, in all three?", a: "Lead with their own story, because the match is obvious early and holding it is uncomfortable.", bundle: 'pro' },
      ]
    },
    {
      name: "Challenges",
      description: "The five things that get in the way of showing understanding:\n\n• **The Urge to Fix** — you want to solve it instead of hear it\n• **Taking the Floor** — your version grows a middle\n• **Sounding Rehearsed** — the technique shows\n• **Losing the Thread** — you have not actually followed\n• **Closed Doors** — there is nothing to work with\n\nFour of the five are about you rather than them. That is the honest shape of this skill.",
      cards: [
        { q: "What are the five challenge categories in this pack?", a: "The Urge to Fix, Taking the Floor, Sounding Rehearsed, Losing the Thread, and Closed Doors.", bundle: 'pro' },
        { q: "Why does advice given too early rarely get taken?", a: "It answers a question they had not finished asking — and it ends the telling.", bundle: 'pro' },
        { q: "What is the tell that you have taken the floor?", a: "They have started asking you follow-up questions.", bundle: 'pro' },
        { q: "How do you fix a loop that sounded rehearsed?", a: "Say it again in your own register. If you would not say it that way to a friend, do not.", bundle: 'pro' },
        { q: "What should you do when you have lost the thread?", a: "Say so, and ask about the specific gap. A loop built on a misunderstanding is worse than no loop.", bundle: 'pro' },
        { q: "Why is a big question the wrong move with someone closed off?", a: "A bigger question is harder to answer. Offer a small loop they can agree with or correct.", bundle: 'pro' },
        { q: "What do four of the five categories have in common?", a: "They are about what you are doing, not about what they are doing.", bundle: 'pro' },
        { q: "What is the move when somebody will not open up and you have a similar story?", a: "Relate Through Sharing — go first, so they do not have to.", bundle: 'pro' },
      ]
    },
    {
      name: "Mindset",
      description: "The four beliefs that stop people showing understanding:\n\n• **Understanding as Agreement** — reflecting it back means conceding it\n• **Doing Too Much** — more moves means more understanding\n• **Going Through the Motions** — correct technique counts as listening\n• **The Pull to Relate** — my version is how I show I get it\n\nEach one is a reasonable thought that produces the wrong behaviour.",
      cards: [
        { q: "What are the four mindset areas in this pack?", a: "Understanding as Agreement, Doing Too Much, Going Through the Motions, and The Pull to Relate.", bundle: 'pro' },
        { q: "Why does \"if I understand, I've agreed\" cause trouble?", a: "It stops people showing understanding in disagreements, which is where it matters most.", bundle: 'pro' },
        { q: "What is a loop, if it is not a concession?", a: "A receipt. Saying what somebody thinks is not the same as thinking it.", bundle: 'pro' },
        { q: "Why is one move better than three?", a: "The silence after one well-chosen response is where they decide whether to go further.", bundle: 'pro' },
        { q: "How long does a pause have to be before it is awkward?", a: "Longer than it feels. Two seconds is them deciding, not an emergency.", bundle: 'pro' },
        { q: "What is the problem with a question you do not listen to?", a: "It establishes that your questions do not mean anything.", bundle: 'pro' },
        { q: "What beats a well-executed technique when you are not curious?", a: "The honest small thing. \"That sounds hard.\"", bundle: 'pro' },
        { q: "Why does the pull to relate arrive earliest when the match is best?", a: "Because it feels most like empathy exactly when it would take the most.", bundle: 'pro' },
      ]
    },
  ],
  exploringatopic: [
    {
      name: "Core Idea",
      description: "Five moves for staying inside a subject instead of hopping out of it.\n\n1. **Ask an Open Question**\n2. **Share a Related Experience**\n3. **Build on Their Point**\n4. **Expand to a Related Subtopic**\n5. **Share, Then Invite**\n\nTwo feed the topic, two go deeper or sideways, and one hands it on.",
      cards: [
        { q: "What are the five moves in this pack?", a: "Ask an Open Question, Share a Related Experience, Build on Their Point, Expand to a Related Subtopic, and Share, Then Invite.", bundle: 'free' },
        { q: "What is this pack for?", a: "Keeping a subject alive without changing it.", bundle: 'free' },
        { q: "How is it different from Changing Topics?", a: "Here you stay. Expand goes one step sideways, never away.", bundle: 'free' },
        { q: "Do you need to know about the subject to take part?", a: "No. A question is a full contribution.", bundle: 'free' },
        { q: "What does every turn do?", a: "Either feeds the topic or ends it. There is no neutral turn.", bundle: 'free' },
        { q: "What decides which move to use?", a: "What you are carrying, and how much life is left in the thread.", bundle: 'pro' },
        { q: "How far is too far when you expand?", a: "If people have to ask what you are talking about, that was a new topic, not an expansion.", bundle: 'pro' },
        { q: "What is a good group conversation, according to this pack?", a: "Not being the most interesting person in it. Keeping the ball in the air.", bundle: 'pro' },
      ]
    },
    {
      name: "Ask an Open Question",
      description: "",
      cards: [
        { q: "What makes a question open?", a: "It cannot be answered with yes or no.", bundle: 'free' },
        { q: "What are the three words open questions start with?", a: "What, how and why.", bundle: 'free' },
        { q: "What does each of the three pull?", a: "What pulls facts, how pulls process and story, why pulls reasons and feeling.", bundle: 'free' },
        { q: "When do you use why?", a: "When the topic is ready to go a bit deeper.", bundle: 'free' },
        { q: "Why is a question a full contribution?", a: "It gives the group material, and the people who know are glad to be asked.", bundle: 'free' },
        { q: "Which word do you reach for when you know nothing?", a: "What — it pulls the detail you need to say anything else.", bundle: 'pro' },
        { q: "What is wrong with two questions in a row?", a: "It becomes an interview, and the second answer is shorter than the first.", bundle: 'pro' },
        { q: "What should you do with the answer?", a: "Use it. Building on it is what makes the question look genuine.", bundle: 'pro' },
      ]
    },
    {
      name: "Share a Related Experience",
      description: "",
      cards: [
        { q: "What are the three kinds of thing you can put in?", a: "A story, a habit, or an opinion.", bundle: 'free' },
        { q: "What is the only test?", a: "Whether it sits inside the same subject.", bundle: 'free' },
        { q: "Does it have to be impressive?", a: "No. Small ordinary experiences are what most good conversations are made of.", bundle: 'free' },
        { q: "How do you know it is close enough?", a: "Nobody has to ask how you got there.", bundle: 'free' },
        { q: "What is a habit, as a contribution?", a: "Something you do rather than something that happened. \"I get through an audiobook a week.\"", bundle: 'free' },
        { q: "Why does the search for a better story backfire?", a: "The pause is longer than the question would have been, and the story is usually thin.", bundle: 'pro' },
        { q: "What do you do when someone just told a better version?", a: "Tell yours anyway. It is not a ranking.", bundle: 'pro' },
        { q: "What should follow your piece if you have already had a turn?", a: "A question. One part you, one part them.", bundle: 'pro' },
      ]
    },
    {
      name: "Build on Their Point",
      description: "",
      cards: [
        { q: "What is the move?", a: "Take what someone just said and go one step further into it.", bundle: 'free' },
        { q: "What are the three ways to go one layer down?", a: "Pick up one of their words, offer the next distinction, or add to it and hand it back.", bundle: 'free' },
        { q: "Which word is worth picking up?", a: "Usually the vaguest one — most, strange, awful, fine.", bundle: 'free' },
        { q: "Why is the vague word the right one?", a: "That is where the detail is hiding.", bundle: 'free' },
        { q: "What does this move prove?", a: "That you were listening. It is the one people notice.", bundle: 'free' },
        { q: "What is \"the next distinction\"?", a: "Splitting their point in two and asking which half. \"Was it the sound or the crowd?\"", bundle: 'pro' },
        { q: "When is this the wrong move?", a: "When the thread is genuinely finished. Then you step sideways instead.", bundle: 'pro' },
        { q: "How do you use it to recover a conversation that has drifted?", a: "Pick the old thread back up as though it never dropped. \"Where were we, Portugal?\"", bundle: 'pro' },
      ]
    },
    {
      name: "Expand to a Related Subtopic",
      description: "",
      cards: [
        { q: "When do you use it?", a: "When the current thread is running out.", bundle: 'free' },
        { q: "What are the three directions the sideways step can take?", a: "Same subject in a new setting, doing it becomes watching it, or the thing becomes the things around it.", bundle: 'free' },
        { q: "How far is too far?", a: "If people have to ask what you are talking about, that was a new topic.", bundle: 'free' },
        { q: "What is the difference between this and changing the subject?", a: "One step sideways, not away. Everything already said still counts.", bundle: 'free' },
        { q: "What does a fading topic usually have in it?", a: "More than it looks. Reach for the next room before you leave the house.", bundle: 'free' },
        { q: "What happens if you expand too early?", a: "You throw away a topic that still had life in it.", bundle: 'pro' },
        { q: "What happens if you expand too late?", a: "The sideways step has to restart a conversation from silence.", bundle: 'pro' },
        { q: "Why should a sideways step end in a question?", a: "Otherwise you have simply changed the subject and kept it.", bundle: 'pro' },
      ]
    },
    {
      name: "Share, Then Invite",
      description: "",
      cards: [
        { q: "What is the shape of this move?", a: "One part you, one part them. Say your bit, then hand it on.", bundle: 'free' },
        { q: "What are the three ways to hand it on?", a: "To the group, to one person by name, or back to the speaker.", bundle: 'free' },
        { q: "When should you use a name?", a: "When someone has been quiet.", bundle: 'free' },
        { q: "Why does a name work better then?", a: "An open invitation is easy to let somebody else answer. A named one is not.", bundle: 'free' },
        { q: "What is the mindset line?", a: "Holding the floor is not winning.", bundle: 'free' },
        { q: "What is the sign you need this move?", a: "Two of your own stories in a row, or every question answered by you.", bundle: 'pro' },
        { q: "What is wrong with apologising for talking too much?", a: "Everyone reassures you, which is another minute of the conversation being about you.", bundle: 'pro' },
        { q: "What makes an invitation real rather than polite?", a: "Following up on the answer.", bundle: 'pro' },
      ]
    },
    {
      name: "Collections",
      description: "The three collections in this pack, and what each one makes you choose between:\n\n• **Empty or Full** — what you are carrying on the subject\n• **Alive or Fading** — how much life is left in the thread\n• **Keeping Any Topic Alive** — all five, no cue given\n\nTwo questions cover nearly all of it: have I got something of my own, and is this thread still going?",
      cards: [
        { q: "What are the three collections in this pack?", a: "Empty or Full, Alive or Fading, and Keeping Any Topic Alive.", bundle: 'pro' },
        { q: "What does Empty or Full read?", a: "Whether you can picture yourself in the subject.", bundle: 'pro' },
        { q: "What does Alive or Fading read?", a: "The energy — long answers mean deepen, short ones mean open it back up, a pause means step sideways.", bundle: 'pro' },
        { q: "You have nothing of your own on the subject. Which move?", a: "Ask an Open Question.", bundle: 'pro' },
        { q: "A memory turned up on its own. Which move?", a: "Share a Related Experience.", bundle: 'pro' },
        { q: "You have already told one story. Which move?", a: "Share, Then Invite.", bundle: 'pro' },
        { q: "The answers have gone short but nobody has changed the subject. Which move?", a: "Ask an Open Question — open it back up before stepping sideways.", bundle: 'pro' },
        { q: "Why is there no two-strategy collection in this pack?", a: "Two is a comparison, not a choice. A collection makes you pick between at least three.", bundle: 'pro' },
      ]
    },
    {
      name: "Sequences",
      description: "The three sequences in this pack, and the order each one runs in:\n\n1. **The Full Loop** — Ask an Open Question → Build on Their Point → Share, Then Invite\n2. **The Rescue** — Build on Their Point → Expand to a Related Subtopic → Ask an Open Question\n3. **The Open Door** — Share a Related Experience → Share, Then Invite → Build on Their Point\n\nEach one ends by handing something to the group rather than keeping it.",
      cards: [
        { q: "What is the order in The Full Loop?", a: "Ask, build on the answer, then add your own bit and pass it on.", bundle: 'pro' },
        { q: "Why does The Full Loop end with a hand-off?", a: "Otherwise the whole thing turns into an interview.", bundle: 'pro' },
        { q: "How many moves does it take to get a topic properly going?", a: "Usually three. After that it runs on its own.", bundle: 'pro' },
        { q: "What is the order in The Rescue?", a: "Squeeze the thread, step sideways, then hand the new angle to the group.", bundle: 'pro' },
        { q: "Why squeeze before stepping sideways?", a: "So you do not abandon a topic that still had something in it.", bundle: 'pro' },
        { q: "What is the order in The Open Door?", a: "Put your own piece in, hand the floor to the quiet one, then follow up on their answer.", bundle: 'pro' },
        { q: "Why share before inviting?", a: "So the invitation does not arrive out of nowhere.", bundle: 'pro' },
        { q: "Which step of The Open Door do people skip?", a: "The third. Following up is what proves the invitation was real.", bundle: 'pro' },
      ]
    },
    {
      name: "Challenges",
      description: "The five kinds of moment that make a group topic hard to keep:\n\n• **Running Dry** — the subject is out of air\n• **Unfamiliar Ground** — you know nothing about it\n• **An Uneven Table** — half the group is doing all of it\n• **Drift** — the subject has quietly gone\n• **Taking Over** — the half doing all of it is you\n\nThree of the five are about the room. Two are about you.",
      cards: [
        { q: "What are the five challenge categories in this pack?", a: "Running Dry, Unfamiliar Ground, An Uneven Table, Drift, and Taking Over.", bundle: 'pro' },
        { q: "What goes wrong in Running Dry?", a: "Waiting to be sure. Once the pause lands, whatever you say has to restart the whole thing.", bundle: 'pro' },
        { q: "What is the entry ticket to an unfamiliar subject?", a: "A question. Knowledge is not required.", bundle: 'pro' },
        { q: "Why is a big question the wrong move for someone who has been quiet?", a: "It is a spotlight, and the usual answer is \"I agree with what everyone said\".", bundle: 'pro' },
        { q: "Why should you not comment on someone's silence?", a: "It makes it a thing, and now they have to explain themselves before joining in.", bundle: 'pro' },
        { q: "How do you handle drift?", a: "Steer, do not announce. A related question just quietly works.", bundle: 'pro' },
        { q: "What is the wrong way to fix having talked too much?", a: "Apologising for it — everyone reassures you, which is another minute about you.", bundle: 'pro' },
        { q: "What is the whole skill in Taking Over?", a: "Noticing it yourself.", bundle: 'pro' },
      ]
    },
    {
      name: "Mindset",
      description: "The four beliefs that keep people out of a group conversation:\n\n• **Whose Job It Is** — somebody else will keep it going\n• **Not Knowing** — I have nothing to contribute here\n• **Too Small to Say** — my version is not worth telling\n• **Giving It Away** — handing the topic over means losing it\n\nThe first three keep you quiet. The fourth keeps everyone else quiet.",
      cards: [
        { q: "What are the four mindset areas in this pack?", a: "Whose Job It Is, Not Knowing, Too Small to Say, and Giving It Away.", bundle: 'pro' },
        { q: "Why do conversations die when everyone is reasonable?", a: "Four people all waiting for a fifth. Nobody notices, because nothing happened.", bundle: 'pro' },
        { q: "Is a silent turn neutral?", a: "No. Every move either feeds the topic or ends it.", bundle: 'pro' },
        { q: "What is the cost of waiting for a subject you know?", a: "You sit out whole conversations, and from outside the waiting reads as boredom.", bundle: 'pro' },
        { q: "Why does the search for a better story fail?", a: "It takes longer than the telling would have, and usually ends in saying nothing.", bundle: 'pro' },
        { q: "What does holding the floor actually produce?", a: "A talk with an audience who cannot leave.", bundle: 'pro' },
        { q: "What happens when you give the topic away?", a: "It comes back richer than you left it.", bundle: 'pro' },
        { q: "Which three beliefs keep you quiet, and which one keeps everyone else quiet?", a: "Whose Job It Is, Not Knowing and Too Small to Say keep you quiet. Giving It Away keeps the others quiet.", bundle: 'pro' },
      ]
    },
  ],
  changingtopics: [
    {
      name: "Core Idea",
      description: "Six ways to change the subject without it feeling like an interruption.\n\n1. **Linking**\n2. **Acknowledge and Redirect**\n3. **Finding Common Ground**\n4. **Random or Light Switch**\n5. **Steering Away from Sensitive Topics**\n6. **Respectful Exit**\n\nThree build a bridge from the old subject; three close it first.",
      cards: [
        { q: "What are the six moves in this pack?", a: "Linking, Acknowledge and Redirect, Finding Common Ground, Random or Light Switch, Steering Away from Sensitive Topics, and Respectful Exit.", bundle: 'free' },
        { q: "What do people actually notice about a topic change?", a: "Not the change — the gap where it happened.", bundle: 'free' },
        { q: "How is this pack different from Exploring a Topic?", a: "There you stay in the subject. Here you leave it.", bundle: 'free' },
        { q: "Which is the smoothest of the six, and why?", a: "Linking. The new subject grows out of their own words.", bundle: 'free' },
        { q: "Do you always need a bridge?", a: "No. A flagged switch is honest, and only an unflagged one is jarring.", bundle: 'free' },
        { q: "What are the two questions that sort nearly every moment?", a: "Does the old topic need closing first, and is there anything in it to build from?", bundle: 'pro' },
        { q: "What is the worst option available?", a: "Doing nothing. A subject that has died and not been replaced is the most uncomfortable moment in a conversation.", bundle: 'pro' },
        { q: "Is changing the subject rude?", a: "No. It is steering, and somebody has to do it.", bundle: 'pro' },
      ]
    },
    {
      name: "Linking",
      description: "",
      cards: [
        { q: "What is the move?", a: "Catch a word or detail from what they just said and use it as a bridge to a new topic.", bundle: 'free' },
        { q: "What three kinds of word are worth catching?", a: "A place, a person, or a feeling or time.", bundle: 'free' },
        { q: "How fresh does the word have to be?", a: "Fresh. Two minutes works; ten minutes sounds like you were waiting for an opening.", bundle: 'free' },
        { q: "Why does it feel smooth?", a: "The switch grows out of their own words, so nobody notices a change happened.", bundle: 'free' },
        { q: "What does it prove?", a: "That you were listening — you cannot catch a word you did not hear.", bundle: 'free' },
        { q: "Where is the bridge usually hiding?", a: "In something they said earlier and nobody followed up.", bundle: 'pro' },
        { q: "What happens if the link is a stretch?", a: "It sounds like a stretch. Flagging the switch is warmer than forcing a bridge.", bundle: 'pro' },
        { q: "When is this move unavailable?", a: "When they have given you almost nothing to catch.", bundle: 'pro' },
      ]
    },
    {
      name: "Acknowledge and Redirect",
      description: "",
      cards: [
        { q: "What is the move?", a: "Briefly wrap up the current topic, then open a new one.", bundle: 'free' },
        { q: "What are the three ways to wrap?", a: "Thank them for it, sum it up, or mark the end plainly.", bundle: 'free' },
        { q: "How long should the acknowledgement be?", a: "One short sentence.", bundle: 'free' },
        { q: "What does a long wrap-up sound like?", a: "Building a case for leaving the topic.", bundle: 'free' },
        { q: "What does the little nod do?", a: "Stops the switch feeling abrupt. Without it the new topic reads as \"I wasn't listening.\"", bundle: 'free' },
        { q: "When is this the right move rather than Respectful Exit?", a: "When the topic has just finished rather than finished a while ago.", bundle: 'pro' },
        { q: "How does it help when a switch is going to look like dodging?", a: "It shows you heard the thing you are moving on from.", bundle: 'pro' },
        { q: "What is a good wrap for something you genuinely did not enjoy hearing?", a: "Sum it up rather than praise it. \"So it's a waiting game. Makes sense.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Finding Common Ground",
      description: "",
      cards: [
        { q: "What is the move?", a: "Use a shared experience as the stepping stone, so relating to them opens the new direction.", bundle: 'free' },
        { q: "What are the three ways to relate before you turn?", a: "A matching story, a matching feeling, or a matching habit.", bundle: 'free' },
        { q: "What has to be true of the relating?", a: "It has to be genuine. A manufactured \"me too\" is transparent.", bundle: 'free' },
        { q: "What does a fake one make the switch look like?", a: "An escape.", bundle: 'free' },
        { q: "What does this move do that the others do not?", a: "It warms the conversation before it turns it.", bundle: 'free' },
        { q: "When is it better than Linking?", a: "When there is no single word to catch but you recognise the situation.", bundle: 'pro' },
        { q: "What do you do after you have related?", a: "Turn it into a question, so the new direction belongs to both of you.", bundle: 'pro' },
        { q: "Why does it work so well after a stall?", a: "Whatever small thing they gave you is enough to relate to, and relating is easier than bridging.", bundle: 'pro' },
      ]
    },
    {
      name: "Random or Light Switch",
      description: "",
      cards: [
        { q: "What is the move?", a: "Change the subject openly, with humour or spontaneity, and no bridge.", bundle: 'free' },
        { q: "What are the three ways to flag it?", a: "Name it and joke about it, admit the swerve, or blame yourself.", bundle: 'free' },
        { q: "What makes it work?", a: "Flagging. An unflagged jump is jarring; a flagged one is honest.", bundle: 'free' },
        { q: "When is it the only option?", a: "When the conversation has stalled and there is nothing to bridge from.", bundle: 'free' },
        { q: "Is announcing the switch worse than pretending there was a link?", a: "No. It is usually warmer, and it often gets a laugh.", bundle: 'free' },
        { q: "What is the wrong move when a conversation has stalled?", a: "A bigger question. It makes the next thing harder to answer than the last.", bundle: 'pro' },
        { q: "Why is hunting for a bridge a mistake here?", a: "The search takes longer than the silence, and the bridge you invent sounds invented.", bundle: 'pro' },
        { q: "When is this move the wrong one?", a: "When the subject is raw. A jokey switch there reads as careless.", bundle: 'pro' },
      ]
    },
    {
      name: "Steering Away from Sensitive Topics",
      description: "",
      cards: [
        { q: "What is the move?", a: "Acknowledge the uncomfortable subject briefly, then guide gently toward safer ground.", bundle: 'free' },
        { q: "What are the three levels of steer?", a: "Light touch, named and closed, or offered as an out.", bundle: 'free' },
        { q: "What must always come first?", a: "The acknowledgement. Skipping to the new topic reads as though you did not hear them.", bundle: 'free' },
        { q: "Is steering away evasion?", a: "No. Caring about someone and moving somewhere kinder are the same act here.", bundle: 'free' },
        { q: "Do you have to resolve the heavy subject first?", a: "No. Sometimes the kindest thing is to lighten the room.", bundle: 'free' },
        { q: "What do you do when the subject is about somebody who is present?", a: "Hand it back to them. \"I think that's theirs to tell, if they want.\"", bundle: 'pro' },
        { q: "What do you do if they went quiet after you steered?", a: "Give it a beat. Quiet can be relief.", bundle: 'pro' },
        { q: "What is \"offered as an out\"?", a: "Leaving the door open for another time. \"Happy to talk about it another day.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Respectful Exit",
      description: "",
      cards: [
        { q: "When do you use it?", a: "When a topic has been covered, or keeps repeating.", bundle: 'free' },
        { q: "What are the three ways to close it warmly?", a: "Give it credit, name the loop kindly, or draw a friendly line.", bundle: 'free' },
        { q: "What makes it respectful rather than dismissive?", a: "Warmth. The same words said flatly are a dismissal.", bundle: 'free' },
        { q: "What is the mindset line?", a: "Your job is flow, not endurance.", bundle: 'free' },
        { q: "Is letting a topic end a failure?", a: "No. It is part of a good conversation.", bundle: 'free' },
        { q: "What is wrong with hinting at a sticky topic?", a: "A soft signal gets absorbed and the subject carries on.", bundle: 'pro' },
        { q: "What do you do when the first exit was ignored?", a: "Be clearer rather than quieter. Say plainly what the hint said quietly.", bundle: 'pro' },
        { q: "How do you close a topic somebody clearly is not finished with?", a: "Let them finish it properly, then close it. \"Say the rest, then let's leave it.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Collections",
      description: "The three collections in this pack, and what each one makes you choose between:\n\n• **Is There a Bridge** — Linking, Finding Common Ground or Random or Light Switch\n• **Closing the Old One** — Acknowledge and Redirect, Respectful Exit or Steering Away from Sensitive Topics\n• **Reading the Room** — all six, no cue given\n\nThe first asks what you can build from. The second asks what kind of ending the old subject needs.",
      cards: [
        { q: "What are the three collections in this pack?", a: "Is There a Bridge, Closing the Old One, and Reading the Room.", bundle: 'pro' },
        { q: "What does Is There a Bridge read?", a: "What they last said — a concrete noun, a shared situation, or neither.", bundle: 'pro' },
        { q: "What does Closing the Old One read?", a: "What kind of ending the subject needs — a nod, a naming, or an acknowledgement.", bundle: 'pro' },
        { q: "They mentioned a place you can catch. Which move?", a: "Linking.", bundle: 'pro' },
        { q: "They described a situation you have been in yourself. Which move?", a: "Finding Common Ground.", bundle: 'pro' },
        { q: "The subject is on its third lap. Which move?", a: "Respectful Exit.", bundle: 'pro' },
        { q: "The subject is raw rather than finished. Which move?", a: "Steering Away from Sensitive Topics.", bundle: 'pro' },
        { q: "Why is there no two-strategy collection in this pack?", a: "Two is a comparison, not a choice. A collection makes you pick between at least three.", bundle: 'pro' },
      ]
    },
    {
      name: "Sequences",
      description: "The three sequences in this pack, and the order each one runs in:\n\n1. **Sensitive to Safe** — Steering Away → Random or Light Switch → Finding Common Ground\n2. **Exhausted to Fresh** — Respectful Exit → Linking → Acknowledge and Redirect\n3. **Stalled to Started** — Random or Light Switch → Finding Common Ground → Linking\n\nAll three end by making the new subject take hold, not just by opening it.",
      cards: [
        { q: "What is the order in Sensitive to Safe?", a: "Defuse without engaging, offer somewhere safer, then pick up whatever they give you.", bundle: 'pro' },
        { q: "Why acknowledge before steering?", a: "It is what stops the steer looking like avoidance.", bundle: 'pro' },
        { q: "What happens if you do not pick up their answer?", a: "The conversation falls back into the old subject within a minute.", bundle: 'pro' },
        { q: "What is the order in Exhausted to Fresh?", a: "Close the done topic warmly, pivot off something they said earlier, then open it properly.", bundle: 'pro' },
        { q: "Where is the bridge in Exhausted to Fresh?", a: "Behind you. There is almost always a detail from ten minutes ago that never got followed up.", bundle: 'pro' },
        { q: "What is the order in Stalled to Started?", a: "Flag a switch, relate to whatever comes back, then catch a word from their answer.", bundle: 'pro' },
        { q: "Why does Stalled to Started end with Linking?", a: "Catching a word from their answer is what stops it stalling a second time.", bundle: 'pro' },
        { q: "What do all three have in common?", a: "They do not stop at opening a new subject. They make it take hold.", bundle: 'pro' },
      ]
    },
    {
      name: "Challenges",
      description: "The five kinds of moment that make a topic change hard:\n\n• **The Third Lap** — a subject that will not stay closed\n• **The Sensitive Corner** — uncomfortable rather than finished\n• **The Stall** — nothing to bridge from\n• **The Ignored Switch** — you tried and it did not land\n• **The One You Started** — your own subject fell flat\n\nFour are about the conversation. One is about you.",
      cards: [
        { q: "What are the five challenge categories in this pack?", a: "The Third Lap, The Sensitive Corner, The Stall, The Ignored Switch, and The One You Started.", bundle: 'pro' },
        { q: "What keeps a repeated topic going?", a: "Answering it as though it were new.", bundle: 'pro' },
        { q: "Why is a jokey switch wrong in a sensitive moment?", a: "The tone mismatch says you did not notice, which is worse than staying in it.", bundle: 'pro' },
        { q: "What is the mistake when a conversation has stalled?", a: "Hunting for a link that does not exist.", bundle: 'pro' },
        { q: "What do you do when a switch gets ignored?", a: "Be clearer, not quieter. Repeating a soft hint does not work.", bundle: 'pro' },
        { q: "What do you do when your own topic falls flat?", a: "Name it, move it along yourself, and do not apologise for it.", bundle: 'pro' },
        { q: "Why not apologise for a flat topic?", a: "Everyone reassures you, which keeps the flat moment going.", bundle: 'pro' },
        { q: "What is the one category that is about you rather than them?", a: "The One You Started.", bundle: 'pro' },
      ]
    },
    {
      name: "Mindset",
      description: "The four beliefs that keep people stuck in a finished subject:\n\n• **Steering Feels Rude** — changing it is impolite\n• **The Perfect Bridge** — I need a smooth way in first\n• **Leaving Them In It** — moving on looks like not caring\n• **Endurance** — once a topic starts, I have to keep it going\n\nEvery one of them is a good instinct pointed at the wrong target.",
      cards: [
        { q: "What are the four mindset areas in this pack?", a: "Steering Feels Rude, The Perfect Bridge, Leaving Them In It, and Endurance.", bundle: 'pro' },
        { q: "Why does changing the subject feel like interrupting?", a: "They feel similar from the inside — but an interruption takes the turn, and a topic change happens between turns.", bundle: 'pro' },
        { q: "What does politeness cost in a dead topic?", a: "Two people being polite at each other while an evening goes nowhere.", bundle: 'pro' },
        { q: "What is \"by the way\"?", a: "A complete sentence. You do not need a perfect bridge.", bundle: 'pro' },
        { q: "Does steering away from something painful look like not caring?", a: "No. Redirecting gently is the caring move — you are sparing them, not dodging them.", bundle: 'pro' },
        { q: "Do you have to fix a heavy subject before you move it?", a: "No. Sometimes the kindest thing is to lighten the room.", bundle: 'pro' },
        { q: "What is the tell that you are enduring rather than interested?", a: "Squeezing a third question out of a subject.", bundle: 'pro' },
        { q: "How many good short topics beat one long one?", a: "Ten — if the long one was one nobody enjoyed.", bundle: 'pro' },
      ]
    },
  ],
  complimenting: [
    {
      name: "Core Idea",
      description: "Seven ways to say a true thing to someone about themselves.\n\n1. **Name What You Noticed**\n2. **Compliment the Choice, Not the Luck**\n3. **Say Why It Landed**\n4. **Say the Bigger One**\n5. **Say It Where It Counts**\n6. **Take a Compliment**\n7. **Answer It, Don't Return It**\n\nFive give. Two receive, and those two happen to you unprepared.",
      cards: [
        { q: "What are the seven strategies in this pack?", a: "Name What You Noticed, Compliment the Choice Not the Luck, Say Why It Landed, Say the Bigger One, Say It Where It Counts, Take a Compliment, Answer It Don't Return It.", bundle: 'free' },
        { q: "What is a compliment, in one line?", a: "Information the other person does not have — nobody sees themselves from outside.", bundle: 'free' },
        { q: "What are the two ways a compliment fails?", a: "Too vague to be believed, or too much to be received.", bundle: 'free' },
        { q: "Which two strategies are about receiving?", a: "Take a Compliment, and Answer It Don't Return It.", bundle: 'free' },
        { q: "Why are the receiving ones worth practising most?", a: "They happen to you whether you prepared or not.", bundle: 'free' },
        { q: "What does this pack own that Praise and Encouragement does not?", a: "That one is performance feedback at work. This is about the person, in ordinary life, with no agenda underneath.", bundle: 'pro' },
        { q: "What is the single question that picks a strategy?", a: "What is missing — the detail, the effect, the audience, or the ability to stop talking.", bundle: 'pro' },
        { q: "Where does the pack stop?", a: "Praise with a request attached, praise as padding for criticism, and praise you do not mean.", bundle: 'pro' },
      ]
    },
    {
      name: "Name What You Noticed",
      description: "",
      cards: [
        { q: "What is the move?", a: "Say the specific thing you saw, not the category it belongs to.", bundle: 'free' },
        { q: "Why does specific beat general?", a: "General praise could have been said by someone who wasn't paying attention. The detail proves you were.", bundle: 'free' },
        { q: "What are the three things worth naming?", a: "A moment, a choice, or a pattern.", bundle: 'free' },
        { q: "Which of the three is safest?", a: "A moment. It is the smallest and it commits you to nothing.", bundle: 'free' },
        { q: "Which is strongest, and who is it for?", a: "A pattern — and only for people you know well.", bundle: 'free' },
        { q: "Why is a specific compliment easier to say?", a: "It's a small factual sentence. \"You're amazing\" is a claim you then have to defend.", bundle: 'pro' },
        { q: "What if the detail feels too small to mention?", a: "Say it anyway. Small and specific is exactly what lands.", bundle: 'pro' },
        { q: "What if you cannot remember anything specific?", a: "Say that. \"Something about the middle worked and I'm still working out what.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Compliment the Choice, Not the Luck",
      description: "",
      cards: [
        { q: "What is the rule?", a: "Praise what they did or chose, not what they were handed.", bundle: 'free' },
        { q: "Why does a compliment about luck land badly?", a: "There's nothing to be proud of and nothing to say back.", bundle: 'free' },
        { q: "What are the three kinds of choice?", a: "What they picked, what they practised, and what they decided.", bundle: 'free' },
        { q: "Which of the three is strongest?", a: "What they practised — they know what it cost.", bundle: 'free' },
        { q: "What is the one to avoid?", a: "What they were born with. That is an observation about their body, not a compliment.", bundle: 'free' },
        { q: "How does this solve complimenting appearance?", a: "The clothes and the haircut are decisions and are fair game. The body underneath is not.", bundle: 'pro' },
        { q: "They say it was nothing, they just threw it on.", a: "\"You still chose it. That counts.\"", bundle: 'pro' },
        { q: "Can a compliment about character be about a choice?", a: "Yes — being calm in every room is a practice, not luck, and can be praised as one.", bundle: 'pro' },
      ]
    },
    {
      name: "Say Why It Landed",
      description: "",
      cards: [
        { q: "What do you add?", a: "What it did to you — the part they cannot see.", bundle: 'free' },
        { q: "Why is the effect unarguable?", a: "They can wave away \"that was brilliant\". They cannot wave away what you told someone else that evening.", bundle: 'free' },
        { q: "What are the three effects worth reporting?", a: "What you did differently, what you felt, and what you told someone else.", bundle: 'free' },
        { q: "Which of the three is strongest?", a: "What you did differently — it is proof rather than opinion.", bundle: 'free' },
        { q: "Why is this the one that gets remembered?", a: "Because they already know what they did. The effect is the only genuinely new information.", bundle: 'free' },
        { q: "Can it be said months late?", a: "Yes. \"This is very overdue\" is the whole fix.", bundle: 'pro' },
        { q: "How do you use it against a deflection?", a: "Move off whether they were good and onto what happened to you. That part is not up for debate.", bundle: 'pro' },
        { q: "How do you keep it from sounding heavy?", a: "Keep it factual. \"I've thought about that three times this week\" is enough.", bundle: 'pro' },
      ]
    },
    {
      name: "Say the Bigger One",
      description: "",
      cards: [
        { q: "What makes this one different?", a: "It is about who they are, not what they did — and almost nobody ever hears it.", bundle: 'free' },
        { q: "Why say it rarely?", a: "Said often it becomes wallpaper; said in passing it sounds like a line.", bundle: 'free' },
        { q: "What are the three ways to do it without it being strange?", a: "Attach it to evidence, say it is overdue, or say it and stop.", bundle: 'free' },
        { q: "Which of the three is safest?", a: "Attaching it to evidence. The evidence gives them somewhere to look.", bundle: 'free' },
        { q: "What comes after it?", a: "Nothing. No question, no expectation of a reply — let it sit.", bundle: 'free' },
        { q: "Why are these remembered for decades?", a: "Because they are so rarely said.", bundle: 'pro' },
        { q: "How do you say it to someone you barely know?", a: "Name the distance first. \"Take this as an outside opinion.\"", bundle: 'pro' },
        { q: "How do you say it to family who never talk this way?", a: "Name the fact that you never talk this way, then say it regardless. The naming is what gives you both permission.", bundle: 'pro' },
      ]
    },
    {
      name: "Say It Where It Counts",
      description: "",
      cards: [
        { q: "What does public praise do that private praise cannot?", a: "It changes what everyone else thinks, not only what they think.", bundle: 'free' },
        { q: "What belongs in private?", a: "Anything personal — appearance, character, anything they might rather the room did not know.", bundle: 'free' },
        { q: "What are the three options?", a: "Public for credit, private for anything personal, in writing when it should outlast the moment.", bundle: 'free' },
        { q: "What is the test for which to choose?", a: "Ask who the compliment is for. If it is for them, it goes where they will be comfortable.", bundle: 'free' },
        { q: "Why send it as a message sometimes?", a: "A message can be read again on a bad day. A remark cannot.", bundle: 'free' },
        { q: "How long should public praise be?", a: "Name, thing, done. Longer and it becomes a speech and embarrasses everyone.", bundle: 'pro' },
        { q: "What if you cannot tell whether they would want it public?", a: "Ask. \"Would you rather I said this in the meeting or just to you?\"", bundle: 'pro' },
        { q: "You praised someone publicly and it clearly embarrassed them.", a: "Say so and stop. \"I put you on the spot. I meant it, though.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Take a Compliment",
      description: "",
      cards: [
        { q: "What is the move?", a: "Say thank you and stop. No correcting, no explaining it away.", bundle: 'free' },
        { q: "What does deflecting actually do?", a: "Tells the person they were wrong to say it — and after twice, people stop saying things.", bundle: 'free' },
        { q: "What are the three ways to take one?", a: "Just thank you; thank you plus agreement; thank you plus what it means to hear it.", bundle: 'free' },
        { q: "What is the hardest part?", a: "Stopping. Two words and then silence is harder than it sounds.", bundle: 'free' },
        { q: "What if you do not agree with it?", a: "\"I don't quite see it, but thank you for saying so.\"", bundle: 'free' },
        { q: "Is taking it arrogant?", a: "No. \"Thank you\" is acknowledgement, not agreement.", bundle: 'pro' },
        { q: "When is the warmest version right?", a: "When you were unsure about the thing. \"That's good to hear — I wasn't sure about it.\"", bundle: 'pro' },
        { q: "The compliment is bigger than you are comfortable with.", a: "\"That's a lot. Thank you — I'm going to sit with it rather than argue.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Answer It, Don't Return It",
      description: "",
      cards: [
        { q: "What is wrong with returning it immediately?", a: "It cancels both — it reads as a transaction, and neither person has been told anything.", bundle: 'free' },
        { q: "Where does the reflex come from?", a: "Discomfort, not generosity. It gets the attention off you fast.", bundle: 'free' },
        { q: "What are the three ways to answer instead?", a: "Take it and let the moment end; take it then say something true and different; or praise them back later, named as separate.", bundle: 'free' },
        { q: "What is the rule in four words?", a: "Theirs first. Yours keeps.", bundle: 'free' },
        { q: "If you do want to praise them back, how?", a: "Later, about something specific, and say plainly that it is not a return.", bundle: 'free' },
        { q: "How long does the gap need to be?", a: "Long enough that it is clearly a separate sentence. Ten minutes is plenty.", bundle: 'pro' },
        { q: "You already fired one back and it sounded hollow.", a: "Say so. \"That came out as a reflex. Let me say it properly.\"", bundle: 'pro' },
        { q: "They deflect everything you ever say to them.", a: "\"You never take these. I'm going to keep saying them anyway.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Collections",
      description: "The three collections in this pack, and what each one makes you choose between:\n\n• **What Are You Praising** — Name What You Noticed, Compliment the Choice or Say Why It Landed\n• **How Far and Who Hears** — Say the Bigger One, Say It Where It Counts or Name What You Noticed\n• **One Is Coming At You** — Take a Compliment, Answer It Don't Return It or Say Why It Landed\n\nThe first asks what goes in the sentence. The second asks how large it should be and who should hear it. The third is the receiving half.",
      cards: [
        { q: "What are the three collections in this pack?", a: "What Are You Praising, How Far and Who Hears, and One Is Coming At You.", bundle: 'pro' },
        { q: "What does What Are You Praising read?", a: "What you actually have — a moment you saw, a decision they made, or an effect on you.", bundle: 'pro' },
        { q: "What two dials does How Far and Who Hears set?", a: "Size and audience.", bundle: 'pro' },
        { q: "You can quote the exact moment. Which move?", a: "Name What You Noticed.", bundle: 'pro' },
        { q: "What you admire is something they decided, not something they were given. Which move?", a: "Compliment the Choice, Not the Luck.", bundle: 'pro' },
        { q: "They are shy and the room is large. Which move?", a: "Say It Where It Counts — afterwards, not now.", bundle: 'pro' },
        { q: "They just praised you and you have one ready to fire back. Which move?", a: "Answer It, Don't Return It.", bundle: 'pro' },
        { q: "Which strategy appears in two collections, and why?", a: "Name What You Noticed — it is the detail that both the giving questions eventually need.", bundle: 'pro' },
      ]
    },
    {
      name: "Sequences",
      description: "The three sequences in this pack, and the order each one insists on:\n\n• **Small, Then Large** — a detail, then the effect, then the sentence about who they are\n• **Theirs First** — take it, let the gap happen, praise them later and separately\n• **Credit in a Room** — public and short, then private and long\n\nEach is an order rather than a set. The same four sentences in the wrong order produce flattery, a transaction, or a speech.",
      cards: [
        { q: "What are the three sequences in this pack?", a: "Small, Then Large; Theirs First; and Credit in a Room.", bundle: 'pro' },
        { q: "Why does Small, Then Large go in that order?", a: "The large sentence only sounds earned on top of a small one. Said first it is flattery.", bundle: 'pro' },
        { q: "What is the whole point of Theirs First?", a: "The gap. The same praise ten minutes later counts; in the same breath it cancels both.", bundle: 'pro' },
        { q: "What is the shape of Credit in a Room?", a: "Name, thing, done in public — then the detail afterwards, quietly.", bundle: 'pro' },
        { q: "Why does Credit in a Room end with taking one?", a: "Public credit almost always produces a private deflection, and that is where it unravels.", bundle: 'pro' },
        { q: "Which strategy ends two of the three sequences?", a: "Take a Compliment. A good compliment usually comes back at you.", bundle: 'pro' },
        { q: "What is the hardest step in Theirs First?", a: "The silence in the middle, where the reflex wants to fill the space.", bundle: 'pro' },
        { q: "Why is the receiving half in every sequence?", a: "Because giving one is only half an exchange, and the other half arrives whether you planned it or not.", bundle: 'pro' },
      ]
    },
    {
      name: "Challenges",
      description: "The five hard cases in this pack:\n\n• **They Deflect It** — it bounces off\n• **There Is a Difference in Rank** — praise up or down a hierarchy\n• **It Is About How They Look** — appearance, and the one clear rule\n• **You Have Not Said It in Years** — the decade-old unsaid thing\n• **It Is Not Really a Compliment** — where the pack stops\n\nThe last one is a boundary, not a technique. Some sentences look like praise and are doing another job.",
      cards: [
        { q: "What are the five challenge categories?", a: "They Deflect It; There Is a Difference in Rank; It Is About How They Look; You Have Not Said It in Years; It Is Not Really a Compliment.", bundle: 'pro' },
        { q: "How many times do you repeat a deflected compliment?", a: "Once, with evidence. A third time is a negotiation.", bundle: 'pro' },
        { q: "What changes when praise comes from a manager?", a: "It carries weight and can be heard as an evaluation, so character compliments go private.", bundle: 'pro' },
        { q: "What is the rule for appearance?", a: "If it took a decision, it is a compliment. If it took genetics, it is a remark.", bundle: 'pro' },
        { q: "What is the first sentence for a decade-old unsaid thing?", a: "\"We don't say this sort of thing.\" It names the awkwardness and gives you both permission.", bundle: 'pro' },
        { q: "Name the three things that are not compliments.", a: "Praise with a request attached, praise as padding for criticism, and praise you do not mean.", bundle: 'pro' },
        { q: "Why does an untrue compliment cost you?", a: "It quietly devalues every true one you have given.", bundle: 'pro' },
        { q: "What do you do instead of a compliment sandwich?", a: "Give the criticism plainly. Praise spent as padding has no effect left to report.", bundle: 'pro' },
      ]
    },
    {
      name: "Mindset",
      description: "The four beliefs that stop compliments before they are said:\n\n• **They Already Know** — so it adds nothing\n• **Deflecting Feels Like Modesty** — so taking one feels like bragging\n• **Small Is Not Worth Saying** — so only a large compliment counts\n• **It Might Land Wrong** — so silence is safer\n\nAll four are arithmetic errors. The cost is a few seconds, usually yours. The other side of the ledger is measured in years.",
      cards: [
        { q: "What are the four mindsets in this pack?", a: "They Already Know; Deflecting Feels Like Modesty; Small Is Not Worth Saying; It Might Land Wrong.", bundle: 'pro' },
        { q: "Why is \"they already know\" wrong?", a: "They know what they intended. They cannot see the effect, and that is the part only you have.", bundle: 'pro' },
        { q: "Why is deflecting not modesty?", a: "From the outside it corrects someone who was being kind, and after twice they stop offering.", bundle: 'pro' },
        { q: "Is \"thank you\" the same as agreeing?", a: "No. It is acknowledgement, and it is all that is needed.", bundle: 'pro' },
        { q: "Why is small better than large?", a: "Large general praise is the shape politeness takes. A detail cannot be produced without paying attention.", bundle: 'pro' },
        { q: "What is the honest weighing of the risk?", a: "Four seconds of awkwardness for you, against something they may carry for ten years.", bundle: 'pro' },
        { q: "The moment has passed.", a: "\"This is overdue\" fixes that in three words.", bundle: 'pro' },
        { q: "Why does waiting for it to come up naturally fail?", a: "It never comes up. Compliments get decided on, not stumbled into.", bundle: 'pro' },
      ]
    },
  ],
  responsivehumour: [
    {
      name: "Core Idea",
      description: "Five things you can do to a sentence somebody just handed you.\n\n1. **Exaggeration**\n2. **Understatement**\n3. **Misdirection**\n4. **Deliberate Misunderstanding**\n5. **Irony**\n\nTwo change the size. Three change the meaning. None of them requires you to bring anything.",
      cards: [
        { q: "What are the five strategies in this pack?", a: "Exaggeration, Understatement, Misdirection, Deliberate Misunderstanding, Irony.", bundle: 'free' },
        { q: "Where does humour in conversation usually come from?", a: "How you respond, not what you bring.", bundle: 'free' },
        { q: "What do all five have in common?", a: "Each takes their sentence and changes it — bigger, smaller, sideways, literal, or backwards.", bundle: 'free' },
        { q: "Which two change the size?", a: "Exaggeration and Understatement.", bundle: 'free' },
        { q: "Which one should you reach for when stuck?", a: "Exaggeration. It works on almost anything and nobody has ever had to explain one.", bundle: 'free' },
        { q: "What are the two ways it goes wrong?", a: "Aiming at something they actually care about, and explaining it afterwards.", bundle: 'pro' },
        { q: "Why practise on dull sentences?", a: "Anyone can be funny about a good story. The skill is being funny about white walls.", bundle: 'pro' },
        { q: "Where does the pack stop?", a: "Anything aimed at a person — that needs a friendship, not a technique.", bundle: 'pro' },
      ]
    },
    {
      name: "Exaggeration",
      description: "",
      cards: [
        { q: "What is the move?", a: "Take what they said and make it far too big.", bundle: 'free' },
        { q: "Why does the scale matter?", a: "A small exaggeration sounds like a complaint. A ridiculous one is obviously play.", bundle: 'free' },
        { q: "What are the three safest targets?", a: "Your own state, the situation you are both in, and their claim agreed with too enthusiastically.", bundle: 'free' },
        { q: "How do you know you have not gone far enough?", a: "If you are worried it is too much, it is probably not enough.", bundle: 'free' },
        { q: "Why is it the one to learn first?", a: "It is the most forgiving of the five — nobody has to decode anything.", bundle: 'free' },
        { q: "What is the risk in the third target?", a: "Agreeing too enthusiastically is warm only if you are clearly on their side.", bundle: 'pro' },
        { q: "Why is your own state the safest?", a: "Because the target is you, and you cannot take offence at yourself.", bundle: 'pro' },
        { q: "It came out sounding like moaning.", a: "Go further. Halfway sounds like a complaint; all the way sounds like a joke.", bundle: 'pro' },
      ]
    },
    {
      name: "Understatement",
      description: "",
      cards: [
        { q: "What is the move?", a: "Treat something large as though it were small — \"you ran a marathon? That's a bit of a walk.\"", bundle: 'free' },
        { q: "How does it differ from exaggeration in feel?", a: "Exaggeration is loud and warm. Understatement is dry, and it flatters what it shrinks.", bundle: 'free' },
        { q: "Where does the humour actually live?", a: "In the delivery. Say it flat — the words do almost none of the work.", bundle: 'free' },
        { q: "What are the three places it works best?", a: "On something impressive, on something disastrous, and on something obvious.", bundle: 'free' },
        { q: "Why is shrinking an achievement a compliment?", a: "Treating it as ordinary is a way of saying it is not.", bundle: 'free' },
        { q: "Why is it good with people you do not know well?", a: "It is quiet, nobody has to perform, and it is over in four words.", bundle: 'pro' },
        { q: "How does it do sympathy?", a: "Dryly. \"So the week has been going well, then\" says I heard you without making it solemn.", bundle: 'pro' },
        { q: "What ruins it?", a: "Adding a laugh or an explanation. The flatness was the joke.", bundle: 'pro' },
      ]
    },
    {
      name: "Misdirection",
      description: "",
      cards: [
        { q: "What is the shape?", a: "Start out agreeing, then twist the ending.", bundle: 'free' },
        { q: "Why must the twist come last?", a: "The first half sets the expectation. Signal it early and there is nothing left to break.", bundle: 'free' },
        { q: "What are the three ways to set up the turn?", a: "Agree then take a word literally, agree then reveal a ridiculous reason, or agree then land somewhere unrelated.", bundle: 'free' },
        { q: "What should the first half sound like?", a: "Completely ordinary. That half is the setup, not the joke.", bundle: 'free' },
        { q: "Which of the five is closest to a traditional joke?", a: "This one — it has a setup and a punchline.", bundle: 'free' },
        { q: "Which of the three setups is easiest?", a: "Taking a word literally in another sense.", bundle: 'pro' },
        { q: "What do you do with a sentence that can be read two ways?", a: "Agree, then pick the second reading out loud.", bundle: 'pro' },
        { q: "Your face gave it away halfway through.", a: "Keep it still until after the last word. The straight face is half the technique.", bundle: 'pro' },
      ]
    },
    {
      name: "Deliberate Misunderstanding",
      description: "",
      cards: [
        { q: "What is the move?", a: "Pretend you took it the wrong way — both of you know what was meant, and the pretending is the joke.", bundle: 'free' },
        { q: "What are the three kinds?", a: "Take the literal sense, take the other meaning of a word, or take the statement as being about something else.", bundle: 'free' },
        { q: "What makes it fail?", a: "A straight face with no warmth. Then it reads as pedantry or as not listening.", bundle: 'free' },
        { q: "What is the point, if it is not seeming confused?", a: "Being obviously, cheerfully wrong on purpose.", bundle: 'free' },
        { q: "They start explaining what they really meant.", a: "\"I know what you meant. I just liked mine better.\"", bundle: 'free' },
        { q: "Which of the three kinds is sharpest?", a: "Taking the other meaning of a word, when a word offers two.", bundle: 'pro' },
        { q: "How is it different from irony?", a: "Irony turns your own words. This one turns theirs.", bundle: 'pro' },
        { q: "It is landing as pedantic.", a: "The words are fine. Warm the tone — the smile does the work.", bundle: 'pro' },
      ]
    },
    {
      name: "Irony",
      description: "",
      cards: [
        { q: "What is the move?", a: "Say the opposite of what you mean, and let the delivery explain.", bundle: 'free' },
        { q: "What are the four things worth being ironic about?", a: "Your own failures, your own successes played down, a shared inconvenience, and something obviously good called bad.", bundle: 'free' },
        { q: "Which target is safest by a wide margin?", a: "Your own failures.", bundle: 'free' },
        { q: "When does irony stop being humour?", a: "When it is aimed at a person, or at something they are proud of. Then it is sarcasm.", bundle: 'free' },
        { q: "What is the risk with someone who does not know you?", a: "Delivered flat, it can be taken at face value.", bundle: 'free' },
        { q: "Why is it the most economical of the five?", a: "Three words is often the whole thing.", bundle: 'pro' },
        { q: "What is the lightest form?", a: "Something obviously good, called bad. \"A whole week off. How will I cope.\"", bundle: 'pro' },
        { q: "They took it at face value.", a: "One flat correction, then stop. \"That was sarcasm, for the record.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Collections",
      description: "The three collections in this pack, and what each one makes you choose between:\n\n• **Bigger, Smaller, Opposite** — Exaggeration, Understatement or Irony\n• **Twisting It** — Misdirection, Deliberate Misunderstanding or Irony\n• **All Five** — everything, no cue given\n\nThe first changes the size of what they said. The second changes its meaning. Irony sits in both, because it does a bit of each.",
      cards: [
        { q: "What are the three collections in this pack?", a: "Bigger, Smaller, Opposite; Twisting It; and All Five.", bundle: 'pro' },
        { q: "What does Bigger, Smaller, Opposite ask you to read?", a: "The temperature the moment wants — warmth, dryness, or something in between.", bundle: 'pro' },
        { q: "What does Twisting It have in common?", a: "All three change the meaning rather than the size, and all three live in the delivery.", bundle: 'pro' },
        { q: "A friend is describing a disaster. Which register?", a: "Warmth — exaggeration.", bundle: 'pro' },
        { q: "A colleague is describing an achievement. Which register?", a: "Dryness — understatement.", bundle: 'pro' },
        { q: "A word they used has two meanings. Which move?", a: "Deliberate Misunderstanding.", bundle: 'pro' },
        { q: "Why does Irony appear in two collections?", a: "It flips the value and the meaning at the same time.", bundle: 'pro' },
        { q: "What is the default when nothing suggests itself?", a: "Exaggeration. Most forgiving, works on almost anything.", bundle: 'pro' },
      ]
    },
    {
      name: "Sequences",
      description: "The three sequences in this pack, and what each one drills:\n\n• **Something Out of Nothing** — four dull sentences, four different moves\n• **Keeping It Going** — the second joke lives inside the first\n• **Missed, Then Back In** — the recovery, which nobody practises\n\nThe first builds reach, the second builds play, the third removes the fear that stops both.",
      cards: [
        { q: "What are the three sequences in this pack?", a: "Something Out of Nothing; Keeping It Going; and Missed, Then Back In.", bundle: 'pro' },
        { q: "Why are the setups in the first one deliberately dull?", a: "If you can be funny about white walls, you never need to wait for good material.", bundle: 'pro' },
        { q: "What does Keeping It Going actually train?", a: "Staying inside the world the first joke created instead of opening a new one.", bundle: 'pro' },
        { q: "Why does the second joke get easier than the first?", a: "The first needs an idea. The second only needs the world you both already agreed to stand in.", bundle: 'pro' },
        { q: "What is the rule in Missed, Then Back In?", a: "Do not explain it. Answer the thing they actually said.", bundle: 'pro' },
        { q: "What is the last step of the recovery?", a: "Coming back in a minute later, on a new sentence — not the old one.", bundle: 'pro' },
        { q: "What does a miss actually cost?", a: "Four seconds. The explanation costs the conversation.", bundle: 'pro' },
        { q: "They took your irony at face value. What is the one allowed repair?", a: "A single flat clarification, then nothing.", bundle: 'pro' },
      ]
    },
    {
      name: "Challenges",
      description: "The five hard cases in this pack:\n\n• **A Small Complaint** — they want company, not solutions\n• **They Are Pleased With Themselves** — warm or a put-down, depending\n• **Someone States the Obvious** — the emptiest sentences, and the best practice\n• **It Did Not Land** — what happens next is the whole difference\n• **Now Is Not the Time** — where the pack stops\n\nFour are openings. The last one is a boundary.",
      cards: [
        { q: "What are the five challenge categories?", a: "A Small Complaint; They Are Pleased With Themselves; Someone States the Obvious; It Did Not Land; Now Is Not the Time.", bundle: 'pro' },
        { q: "What does a small complaint actually want?", a: "Company, not a solution. The earnest reply makes it bigger than they meant.", bundle: 'pro' },
        { q: "What is the rule when someone is showing off?", a: "Shrink the thing, never the person.", bundle: 'pro' },
        { q: "Why is irony wrong on an achievement?", a: "\"Oh, very impressive\" said flat is sarcasm. It takes rather than gives.", bundle: 'pro' },
        { q: "Why are empty sentences the best practice?", a: "The emptier the sentence, the more room there is in it.", bundle: 'pro' },
        { q: "Name the three situations to stay out of.", a: "Something they are upset about, something they are proud and nervous about, and any moment where you have power over them.", bundle: 'pro' },
        { q: "What is the tell that a joke is aimed at a person?", a: "It needs them to be a good sport.", bundle: 'pro' },
        { q: "Why does rank change the joke?", a: "Humour from a manager about someone's work is not heard the way the same words are from a peer.", bundle: 'pro' },
      ]
    },
    {
      name: "Mindset",
      description: "The four beliefs that keep people quiet:\n\n• **Funny People Have Material** — so you need something to bring\n• **One More Thing** — so you add the explanation\n• **They Didn't Get It** — so you rescue the joke\n• **They Can Take a Joke** — so the target does not matter\n\nThe first stops you starting. The middle two spoil what you started. The last is the one that does damage.",
      cards: [
        { q: "What are the four mindsets in this pack?", a: "Funny People Have Material; One More Thing; They Didn't Get It; They Can Take a Joke.", bundle: 'pro' },
        { q: "What is the answer to \"I'm not a funny person\"?", a: "You never had to be. You have to notice a sentence and bend it.", bundle: 'pro' },
        { q: "Why is the addition a subtraction?", a: "The response works because it feels effortless. A long one announces that you are performing.", bundle: 'pro' },
        { q: "What does explaining a joke cost?", a: "A miss is forgotten in seconds. An explanation is an awkwardness the room now shares.", bundle: 'pro' },
        { q: "What is the one allowed rescue?", a: "A single flat line — \"that was me agreeing, badly\" — and then stop.", bundle: 'pro' },
        { q: "Why is \"they can take a joke\" the wrong question?", a: "Needing them to is the tell that it is aimed at them.", bundle: 'pro' },
        { q: "They laughed, so it was fine.", a: "People laugh to end things. Check whether they came back to the subject.", bundle: 'pro' },
        { q: "Do you need a target to be funny?", a: "No. Not one of the five moves requires a person.", bundle: 'pro' },
      ]
    },
  ],
  assertivecomm1: [
    {
      name: "Core Idea",
      description: "Four systematic verbal defenses to handle hostile criticism and manipulation in commercial and authority settings.\n\n• Broken Record — persistence\n• Fogging — absorbing attacks\n• Negative Assertion — owning real errors\n• Negative Inquiry — prompting feedback\n\nThese skills keep you as your own ultimate judge.",
      cards: [
        { q: "What are the four strategies in this pack?", a: "Broken Record, Fogging, Negative Assertion, and Negative Inquiry.", bundle: 'free' },
        { q: "What is the prime assertive right from which all others derive?", a: "The right to be the ultimate judge of your own behavior, thoughts, and emotions.", bundle: 'free' },
        { q: "What are the three relationship categories taught in the source?", a: "Commercial or formal, authority, and equal relationships.", bundle: 'free' },
        { q: "What decides which strategy to use?", a: "What the other person just did: pressured your boundary, criticized your style, pointed out a real error, or threw vague complaints.", bundle: 'free' },
        { q: "What is the main goal of being verbally assertive?", a: "Maintaining your self-respect while cutting through manipulation.", bundle: 'free' },
        { q: "Why is a \"Workable Compromise\" not a standalone strategy in this pack?", a: "Because it is a negotiation move, and negotiation belongs to the pack on equal relationships once boundaries are established.", bundle: 'pro' },
        { q: "What do all four strategies have in common?", a: "They allow you to respond without becoming defensive, angry, or anxious.", bundle: 'pro' },
        { q: "Who is the author of the systematic assertive skills taught in the source?", a: "Manuel J. Smith, Ph.D. (1975).", bundle: 'pro' },
      ]
    },
    {
      name: "Broken Record",
      description: "",
      cards: [
        { q: "What is the core mechanism of Broken Record?", a: "Calmly repeating what you want over and over again without getting angry.", bundle: 'free' },
        { q: "Why does Broken Record work against persistent sellers?", a: "Most people have only a few \"noes\" in their bag. If they have six, you only need seven.", bundle: 'free' },
        { q: "What trap does Broken Record help you avoid?", a: "Being drawn into irrelevant arguments, logical baiting, or explaining your reasons.", bundle: 'free' },
        { q: "What tone of voice should you use when broken-recording?", a: "A low-key, relaxed, and unflappable voice.", bundle: 'free' },
        { q: "How do you handle a manipulator who tries to change the subject?", a: "Ignore the bait, acknowledge their comment briefly, and repeat your want.", bundle: 'free' },
        { q: "What does Broken Record communicate to the other person?", a: "That you will not be put off and can persist all day if necessary.", bundle: 'pro' },
        { q: "When is a Workable Compromise appropriate during Broken Record?", a: "Only when your self-respect is not on the line and a practical deal works.", bundle: 'pro' },
        { q: "What habit does Broken Record break?", a: "The compulsive childhood habit of answering every question put to you.", bundle: 'pro' },
      ]
    },
    {
      name: "Fogging",
      description: "",
      cards: [
        { q: "What is the core mechanism of Fogging?", a: "Calmly agreeing with whatever is true, probable, or logical in a criticism.", bundle: 'free' },
        { q: "Why is the skill called Fogging?", a: "Because you offer no hard striking surfaces. Like a fog bank, you absorb the blow and remain unaffected.", bundle: 'free' },
        { q: "What are the three logical forms of Fogging?", a: "Agreeing with the truth, agreeing with the odds, and agreeing in principle.", bundle: 'free' },
        { q: "What does Fogging do to a manipulative critic?", a: "It removes their reward by refusing to deny, defend, or counterattack.", bundle: 'free' },
        { q: "Why does agreeing with a critic defuse the argument?", a: "It leaves their exaggeration standing alone without a fight to feed on.", bundle: 'free' },
        { q: "How does Fogging force you to become a better listener?", a: "It requires you to listen to exactly what they say, not what you think they imply.", bundle: 'pro' },
        { q: "What is the difference between Fogging and compliance?", a: "Fogging agrees with the words but reserves the judgment of what you will actually do.", bundle: 'pro' },
        { q: "How do you handle flattery using Fogging?", a: "Agree with the positive quality without feeling obligated to return a favor.", bundle: 'pro' },
      ]
    },
    {
      name: "Negative Assertion",
      description: "",
      cards: [
        { q: "What is the core mechanism of Negative Assertion?", a: "Calmly and strongly owning your real errors and faults without over-apologizing.", bundle: 'free' },
        { q: "Why does Negative Assertion defuse a critic's anger?", a: "Because it treats errors as simple human facts, leaving no room for them to lecture you.", bundle: 'free' },
        { q: "What childish belief does Negative Assertion dismantle?", a: "That making a mistake is a moral failure that must be atoned for.", bundle: 'free' },
        { q: "What is the difference between Negative Assertion and a submissive apology?", a: "Negative Assertion calmly owns the fact of the error; submissive apologies ask for forgiveness.", bundle: 'free' },
        { q: "Why do manipulators focus on your past mistakes?", a: "To induce guilt and control your future, unrelated behavior.", bundle: 'free' },
        { q: "What is the tone of a good Negative Assertion?", a: "Calm, matter-of-fact, and completely free of visceral squirming.", bundle: 'pro' },
        { q: "What is the danger of denying or defending a real mistake?", a: "It escalates the conflict into a character fight and resents the partner.", bundle: 'pro' },
        { q: "How does Negative Assertion help you look at yourself?", a: "It allows you to accept negative points about your personality without feeling anxious.", bundle: 'pro' },
      ]
    },
    {
      name: "Negative Inquiry",
      description: "",
      cards: [
        { q: "What is the core mechanism of Negative Inquiry?", a: "Actively prompting further criticism about yourself in an unemotional, low-key manner.", bundle: 'free' },
        { q: "Why is Negative Inquiry useful in close relationships?", a: "It reduces their use of right-and-wrong judgments, prompting them to say what they want.", bundle: 'free' },
        { q: "What trap does Negative Inquiry help you avoid?", a: "The cycle of responding to criticism with denial, defensiveness, or counter-criticism.", bundle: 'free' },
        { q: "What is the difference between \"Why is that bad?\" and \"What is it about that that is bad?\"?", a: "The first is defensive and sarcastic; the second points to yourself and prompts information.", bundle: 'free' },
        { q: "How does Negative Inquiry extinguish manipulative criticism?", a: "It exhausts their vague complaints, forcing them to either spell out real issues or stop.", bundle: 'free' },
        { q: "What is the optimal end result of Negative Inquiry?", a: "The partner discards their right-and-wrong structure and states their actual wishes.", bundle: 'pro' },
        { q: "How does Negative Inquiry help you emotionally?", a: "It desensitizes you to criticism so you can listen to feedback without panic.", bundle: 'pro' },
        { q: "When is Negative Inquiry used in authority relationships?", a: "To prompt constructive feedback on your work performance to speed up improvement.", bundle: 'pro' },
      ]
    },
    {
      name: "Collections",
      description: "The three collections in this pack, and the choices they train:\n\n• Deflect & Inquiry — choosing between Fogging and Negative Inquiry under vague criticism\n• Own or Agree — choosing between Negative Assertion and Fogging under factual attacks\n• The Defense Set — choosing among all four strategies to defuse any conflict\n\nOne question decides nearly all of it: what did the other person just do?",
      cards: [
        { q: "What is the primary purpose of the Collections mode?", a: "It trains the quick recognition and selection of the correct assertive defense.", bundle: 'pro' },
        { q: "What does Deflect & Inquiry make you choose between?", a: "Defusing an empty attack (Fogging) vs. extracting a real complaint (Negative Inquiry).", bundle: 'pro' },
        { q: "What is the danger of using Fogging when Negative Assertion is required?", a: "You sound evasive and untrustworthy by hiding a real error behind probabilities.", bundle: 'pro' },
        { q: "What is the danger of using Negative Assertion when Fogging is required?", a: "You submissively own a mistake you didn't make, handing them control.", bundle: 'pro' },
        { q: "Why does the Deflect & Inquiry collection represent a genuine fork?", a: "Because choosing the wrong move either feeds a hostile critic's fire or stalls a solvable grievance.", bundle: 'pro' },
        { q: "How many strategies are represented in The Defense Set?", a: "All four strategies in this pack.", bundle: 'pro' },
        { q: "Why is a two-strategy collection allowed?", a: "Because it allows you to practice a sharp, binary decision where both moves look plausible.", bundle: 'pro' },
        { q: "What is the deciding factor in the Own or Agree collection?", a: "Whether you actually made a factual error that you are responsible for.", bundle: 'pro' },
      ]
    },
    {
      name: "Sequences",
      description: "The three sequences in this pack, and the orders they enforce:\n\n• The Defusal Run — Fogging, then Negative Inquiry twice\n• The Full Defense — Fogging, then Negative Inquiry, then Negative Assertion\n• The Persistent Defusal — Negative Assertion, then Broken Record twice\n\nIn each sequence, the order does the work of defusing criticism.",
      cards: [
        { q: "What is the specific order of moves in The Defusal Run?", a: "Fogging, then Negative Inquiry, then Negative Inquiry again.", bundle: 'pro' },
        { q: "Why does Fogging come first in The Defusal Run?", a: "To absorb the emotional strike so the critic quietens down before you ask for details.", bundle: 'pro' },
        { q: "What is the specific order of moves in The Full Defense?", a: "Fogging, then Negative Inquiry, then Negative Assertion.", bundle: 'pro' },
        { q: "What problem does The Full Defense solve?", a: "It separates exaggerated emotional attacks from the factual error you actually made.", bundle: 'pro' },
        { q: "What is the specific order of moves in The Persistent Defusal?", a: "Negative Assertion, then Broken Record, then Broken Record again.", bundle: 'pro' },
        { q: "Why does Negative Assertion come before Broken Record in a mistake dispute?", a: "It removes their factual leverage first, so your broken record isn't just evasive stonewalling.", bundle: 'pro' },
        { q: "What happens if you put the Negative Assertion step last in a mixed criticism dispute?", a: "You waste energy arguing about their exaggerations before finally admitting the mistake.", bundle: 'pro' },
        { q: "Why do sequences in this pack contain at least three steps?", a: "To train the realistic flow and order of a persistent conversation under pressure.", bundle: 'pro' },
      ]
    },
    {
      name: "Challenges",
      description: "The five challenge categories in this pack, representing the problem areas you meet:\n\n• Handling Authority — supervisor or expert pressure\n• Commercial Pressure — salespeople and telemarketers\n• Flattery & Compliments — positive manipulation\n• Nagging & Testing — persistent emotional guilt\n• Modern Evasions — gig workers, bots, and digital buck-passing\n\nEach category has its own way of testing your boundaries.",
      cards: [
        { q: "What are the five challenge categories in this pack?", a: "Handling Authority, Commercial Pressure, Flattery & Compliments, Nagging & Testing, and Modern Evasions.", bundle: 'pro' },
        { q: "Why is Handling Authority a distinct challenge?", a: "Because subordinates tend to use submissive excuses or passive silence when bosses criticize.", bundle: 'pro' },
        { q: "How does Flattery & Compliments manipulate your behavior?", a: "It induces a feeling of obligation, making it difficult to say no to their subsequent request.", bundle: 'pro' },
        { q: "What is the main goal in Nagging & Testing?", a: "Holding your boundary calmly without getting drawn into emotional arguments or shouting.", bundle: 'pro' },
        { q: "What is the core issue in Modern Evasions?", a: "Digital systems, bots, and workers passing the buck to make you solve their technical problems.", bundle: 'pro' },
        { q: "What goes wrong in Commercial Pressure?", a: "Customers feel forced to give excuses, which salespeople easily dismantle to make a sale.", bundle: 'pro' },
        { q: "Why is Modern Evasions updated from \"Supermarket Evasions\"?", a: "To apply the same core assertive skills to today's digital, gig-economy customer service loops.", bundle: 'pro' },
        { q: "Which strategy is most useful in Commercial Pressure?", a: "Broken Record — repeating your decision calmly to block their persistent pitch.", bundle: 'pro' },
      ]
    },
    {
      name: "Mindset",
      description: "The five limiting mindsets targeted in this pack, and what is true instead:\n\n• Standards — you are the final judge of your own choices\n• Justifications — your wants do not need excuses or approval\n• Mistakes — errors are simple inefficient facts, not moral failures\n• Approval — you do not need their goodwill to deal with them effectively\n• Ignorance — saying \"I don't know\" is a completely valid boundary\n\nThe rules and guilt that feel like good manners are actually puppet strings.",
      cards: [
        { q: "What are the five mindset decks in this pack?", a: "Standards, Justifications, Mistakes, Approval, and Ignorance.", bundle: 'pro' },
        { q: "Why is \"Sovereignty\" renamed to \"Standards\"?", a: "Because a mindset deck must be named after the area of belief, not the insight or answer.", bundle: 'pro' },
        { q: "What is the limiting belief in Justifications?", a: "That you must explain your reasons to prove your choices are correct and responsible.", bundle: 'pro' },
        { q: "What is the reset for the Mistakes mindset?", a: "Errors are simply errors. They are inefficient, but they do not require emotional atonement.", bundle: 'pro' },
        { q: "What is the reset for the Approval mindset?", a: "You can do business and deal with people assertively even if they do not like you or your boundaries.", bundle: 'pro' },
        { q: "What is the reset for the Ignorance mindset?", a: "You don't have to read minds, predict the future, or be an expert to decide what you want.", bundle: 'pro' },
        { q: "What is the core truth of the Standards mindset?", a: "You have the ultimate right to judge your own behavior, thoughts, and emotions.", bundle: 'pro' },
        { q: "What do all five limiting mindsets have in common?", a: "They rely on learned childhood anxiety, ignorance, and guilt to let others control you.", bundle: 'pro' },
      ]
    },
  ],
  assertivecomm2: [
    {
      name: "Core Idea",
      description: "Four social assertiveness skills to start equal connections, disclose your feelings, assert boundaries, and negotiate material deals.\n\n• Free Information — spotting cues\n• Self-Disclosure — sharing feelings\n• Asserting Wants — declaring limits\n• Workable Compromise — bargaining\n\nThese skills build intimate, equal relationships.",
      cards: [
        { q: "What are the four strategies in this pack?", a: "Free Information, Self-Disclosure, Asserting Wants, and Workable Compromise.", bundle: 'free' },
        { q: "What separates Pack 2 from Pack 1?", a: "Pack 1 handles defensive criticism in formal settings; Pack 2 handles proactive connection and negotiation in equal relationships.", bundle: 'free' },
        { q: "What are the three equal relationship areas focused on in this pack?", a: "Dating and sex, spouses, and friends or parents.", bundle: 'free' },
        { q: "What is the prime assertive right that runs through equal relationships?", a: "The right to be the final judge of your own behavior, wants, and standards.", bundle: 'free' },
        { q: "What is the main goal of social assertiveness?", a: "Building intimacy and cooperation without losing your self-respect or boundaries.", bundle: 'free' },
        { q: "Who wrote the source these systematic assertive skills come from?", a: "Manuel J. Smith, Ph.D. (1975).", bundle: 'pro' },
        { q: "Why is \"Workable Compromise\" placed in Pack 2?", a: "Because negotiation can only occur between equals once boundaries have been established.", bundle: 'pro' },
        { q: "What do all four Pack 2 strategies have in common?", a: "They allow you to proactively open communication and resolve conflicts between equals.", bundle: 'pro' },
      ]
    },
    {
      name: "Free Information",
      description: "",
      cards: [
        { q: "What is the core mechanism of Free Information?", a: "Recognizing and following up on unprompted cues dropped by others in conversation.", bundle: 'free' },
        { q: "What conversational trap does Free Information solve?", a: "Being tongue-tied or feeling the pressure to invent \"interesting\" new topics.", bundle: 'free' },
        { q: "What are three common types of free information cues?", a: "Location cues, activity cues, and emotional feeling cues.", bundle: 'free' },
        { q: "What is the difference between Free Information and interrogation?", a: "Free Information follows up on what they offered; interrogation asks demanding questions.", bundle: 'free' },
        { q: "What does following up on free information communicate to the partner?", a: "That you are actively listening and interested in what they actually care about.", bundle: 'free' },
        { q: "How does Free Information help shy people?", a: "It removes the cognitive load of having to create a topic out of nothing.", bundle: 'pro' },
        { q: "What is the best way to prompt social partners to talk easily?", a: "Pair their free information cues with a small bit of your own self-disclosure.", bundle: 'pro' },
        { q: "Where does the raw material for conversation live?", a: "In the very last sentence the other person spoke.", bundle: 'pro' },
      ]
    },
    {
      name: "Self-Disclosure",
      description: "",
      cards: [
        { q: "What is the core mechanism of Self-Disclosure?", a: "Sharing personal, non-defensive information about your feelings, interests, and anxieties.", bundle: 'free' },
        { q: "Why does Self-Disclosure prevent manipulation?", a: "It takes away their ability to induce guilt by bringing your true state out in the open first.", bundle: 'free' },
        { q: "What childish habit does Self-Disclosure break?", a: "The habit of hiding your worries or trying to present a perfect, flawless image.", bundle: 'free' },
        { q: "What is the difference between Self-Disclosure and a submissive confession?", a: "Self-Disclosure is stated calmly as a fact of your state; confessions plead for approval.", bundle: 'free' },
        { q: "How does Self-Disclosure build equal intimacy?", a: "It models nondefensive vulnerability, encouraging the partner to share their own feelings.", bundle: 'free' },
        { q: "When is Self-Disclosure used in boundary setting?", a: "To explain your feelings of worry or exhaustion so your \"no\" feels personal rather than hostile.", bundle: 'pro' },
        { q: "What is the tone of a good Self-Disclosure?", a: "Calm, matter-of-fact, and completely free of defensive justification.", bundle: 'pro' },
        { q: "Why does the room relax when you disclose a slip-up?", a: "It signals that the stakes are low and that perfection is not required.", bundle: 'pro' },
      ]
    },
    {
      name: "Asserting Wants",
      description: "",
      cards: [
        { q: "What is the core mechanism of Asserting Wants?", a: "Stating your boundaries or desires plainly using \"I want\" or \"I don't want\" without excuses.", bundle: 'free' },
        { q: "Why does Asserting Wants prevent arguments?", a: "It states your preference as a factual state, leaving no logical justifications for them to debate.", bundle: 'free' },
        { q: "What childhood conditioning does Asserting Wants dismantle?", a: "The belief that declaring your desires without a \"good reason\" is selfish or rude.", bundle: 'free' },
        { q: "How do you assert a want without sounding aggressive?", a: "Speak in a low, relaxed, and matter-of-fact tone of voice.", bundle: 'free' },
        { q: "What is the risk of giving excuses when stating a want?", a: "The other person will try to solve your excuses to manipulate you into compliance.", bundle: 'free' },
        { q: "Why is \"I don't want to\" a complete and valid adult answer?", a: "Because you have the right to offer no reasons or excuses for your behavior.", bundle: 'pro' },
        { q: "When is Asserting Wants essential in dating?", a: "To establish clear physical boundaries and confidently resist sexual pressure.", bundle: 'pro' },
        { q: "How does Asserting Wants shift a marriage dispute?", a: "It moves the partners from passive nagging to straightforward, honest negotiation.", bundle: 'pro' },
      ]
    },
    {
      name: "Workable Compromise",
      description: "",
      cards: [
        { q: "What is the core mechanism of Workable Compromise?", a: "Bargaining for material goals and negotiating alternative arrangements between equals.", bundle: 'free' },
        { q: "Why is Workable Compromise vital in equal relationships?", a: "Because equal relationships have no rigid rulebook, so everything must be negotiated.", bundle: 'free' },
        { q: "When is a Workable Compromise inappropriate?", a: "When your self-respect or a core personal boundary is being traded away.", bundle: 'free' },
        { q: "What is the difference between compromise and surrender?", a: "Compromise is a balanced trade-off where both sides get a piece of the action; surrender is compliance.", bundle: 'free' },
        { q: "How do you transition from saying \"no\" to offering a compromise?", a: "State your boundary clearly first, then propose a practical alternative.", bundle: 'free' },
        { q: "What does a Workable Compromise treat conflict as?", a: "A logistical or material problem to be solved, not a moral battle of right and wrong.", bundle: 'pro' },
        { q: "What goes wrong when you compromise too early?", a: "You collapse your boundary before the other person has even understood your position.", bundle: 'pro' },
        { q: "Why is compromise the key to daily cooperation?", a: "It allows spouses or roommates to split tasks and spaces in a way that respects both.", bundle: 'pro' },
      ]
    },
    {
      name: "Collections",
      description: "The three collections in this pack, and what each one makes you choose between:\n\n• Connect or Disclose — choosing between Free Information and Self-Disclosure\n• Say No or Compromise — choosing between Asserting Wants and Workable Compromise\n• The Social Set — choosing among all four strategies to handle equal partners\n\nOne question decides nearly all of it: what does the relationship need right now?",
      cards: [
        { q: "What does the Connect or Disclose collection train?", a: "Choosing whether to open a door for them (Free Information) vs. sharing your own side (Self-Disclosure).", bundle: 'pro' },
        { q: "What is the danger of using Workable Compromise when Asserting Wants is required?", a: "You trade away your self-respect or core boundaries to buy temporary peace.", bundle: 'pro' },
        { q: "What is the danger of using Asserting Wants when Workable Compromise is required?", a: "You refuse to negotiate on trivial, material details, causing the relationship to break.", bundle: 'pro' },
        { q: "Why does Connect or Disclose represent a genuine fork?", a: "Because interrogating without sharing makes you a prosecutor, while sharing without listening makes you self-absorbed.", bundle: 'pro' },
        { q: "How many strategies are represented in The Social Set?", a: "All four strategies in this pack.", bundle: 'pro' },
        { q: "What does Say No or Compromise make you choose between?", a: "Holding your line cleanly (Asserting Wants) vs. bargaining for a practical deal (Workable Compromise).", bundle: 'pro' },
        { q: "What is the deciding factor in the Say No or Compromise collection?", a: "Whether your self-respect is at stake or if it is a logistical detail that can be traded.", bundle: 'pro' },
        { q: "Why is a two-strategy collection allowed?", a: "Because it allows you to practice a sharp decision where both moves look plausible in the moment.", bundle: 'pro' },
      ]
    },
    {
      name: "Sequences",
      description: "The three sequences in this pack, and the order each one insists on:\n\n• The Social Opening — Free Information, Self-Disclosure, Free Information\n• The Boundaried No — Self-Disclosure, Asserting Wants, Workable Compromise\n• The Workable Deal — Asserting Wants, Self-Disclosure, Workable Compromise\n\nIn each sequence, the order does the work of building equal connection.",
      cards: [
        { q: "What is the specific order of moves in The Social Opening?", a: "Free Information, then Self-Disclosure, then Free Information again.", bundle: 'pro' },
        { q: "Why does Free Information come first in The Social Opening?", a: "It makes them feel heard first, opening the door for you to share your side.", bundle: 'pro' },
        { q: "What is the specific order of moves in The Boundaried No?", a: "Self-Disclosure, then Asserting Wants, then Workable Compromise.", bundle: 'pro' },
        { q: "What problem does The Boundaried No solve?", a: "It explains your feeling first so the refusal lands gently, then offers a practical alternative.", bundle: 'pro' },
        { q: "What is the specific order of moves in The Workable Deal?", a: "Asserting Wants, then Self-Disclosure, then Workable Compromise.", bundle: 'pro' },
        { q: "Why does Asserting Wants come before Self-Disclosure in a chore negotiation?", a: "It sets a clean, honest direction first before explaining your feelings and bargaining terms.", bundle: 'pro' },
        { q: "What happens if you put the Workable Compromise step first in a boundary dispute?", a: "You pre-emptively surrender your boundary before establishing your position.", bundle: 'pro' },
        { q: "Why do sequences in this pack contain at least three steps?", a: "To train the realistic flow of an intimate conversation where things must be worked through.", bundle: 'pro' },
      ]
    },
    {
      name: "Challenges",
      description: "The five challenge categories in this pack, representing the equal areas you meet:\n\n• Parental Ties — adult-to-adult boundaries with parents\n• Equal Demands — negotiating space, borrowing, and chores with friends\n• Dating and Seduction — asserting physical boundaries under romantic pressure\n• Marital Routines — renegotiating household tasks and confronting routines\n• Tongue-Tied Socials — navigating strangers and building rapport\n\nEach category has its own way of testing your equal assertiveness.",
      cards: [
        { q: "What are the five challenge categories in this pack?", a: "Parental Ties, Equal Demands, Dating and Seduction, Marital Routines, and Tongue-Tied Socials.", bundle: 'pro' },
        { q: "Why is Parental Ties a distinct challenge?", a: "Because adult children tend to revert to childhood excuses or angry shouting under parental pressure.", bundle: 'pro' },
        { q: "How does Dating and Seduction test your boundaries?", a: "Partners use \"hurt\" looks or romantic flattery to make you feel guilty for saying no.", bundle: 'pro' },
        { q: "What is the main goal in Marital Routines?", a: "Confronting routines and dividing chores without falling into passive nagging or silent treatment.", bundle: 'pro' },
        { q: "What is the core issue in Tongue-Tied Socials?", a: "Overcoming the pressure to perform or be \"interesting\" by using simple conversational raw material.", bundle: 'pro' },
        { q: "What goes wrong in Equal Demands?", a: "Roommates or friends treat your compliance as a given, causing a slow buildup of resentment.", bundle: 'pro' },
        { q: "Why do Challenges in Pack 2 focus on equal relationships?", a: "To apply your skills to the areas with the least defined rules, where everything must be negotiated.", bundle: 'pro' },
        { q: "Which strategy is most useful in Tongue-Tied Socials?", a: "Free Information — listening for unprompted cues to keep the flow balanced.", bundle: 'pro' },
      ]
    },
    {
      name: "Mindset",
      description: "The four limiting mindsets targeted in this pack, and what is true instead:\n\n• Responsibilities — you are responsible for your own happiness, and they are for theirs\n• Consistency — changing your mind as feelings or needs evolve is healthy and normal\n• Decisions — wants and feelings do not need logical proofs to be valid\n• Obligations — you don't have to be perfect or care about their standards of success\n\nThe expectations we use to control each other are actually cages.",
      cards: [
        { q: "What are the four mindset decks in this pack?", a: "Responsibilities, Consistency, Decisions, and Obligations.", bundle: 'pro' },
        { q: "Why is \"Sovereignty\" replaced in Pack 2?", a: "Because Pack 2 targets the specific relational rights rather than the prime right.", bundle: 'pro' },
        { q: "What is the limiting belief in Responsibilities?", a: "That you are obligated to find solutions to other people's personal problems and keep systems smooth.", bundle: 'pro' },
        { q: "What is the reset for the Consistency mindset?", a: "Changing your mind as circumstances or preferences evolve is a healthy, normal part of life.", bundle: 'pro' },
        { q: "What is the reset for the Decisions mindset?", a: "Wants and feelings are not mathematical equations; you have the right to make illogical choices.", bundle: 'pro' },
        { q: "What is the reset for the Obligations mindset?", a: "You do not have to be perfect or even care to improve according to anyone else's definition.", bundle: 'pro' },
        { q: "What is the core truth of the Responsibilities mindset?", a: "You are responsible for your own behavior, and other people are responsible for theirs.", bundle: 'pro' },
        { q: "What do all four limiting mindsets have in common?", a: "They rely on learned childhood anxiety and guilt to make your wants dependent on others.", bundle: 'pro' },
      ]
    },
  ],
  assertivecommadv: [
    {
      name: "Core Idea",
      description: "Five combined moves built from strategies you already know.\n\n• Fog, Then Hold — absorb, then repeat\n• Fog, Then Ask — absorb, then dig\n• Own It, Then Ask — admit, then invite\n• Fog, Then Tell — absorb, then confide\n• Tell, Then Offer — refuse, then trade\n\nGround first, position second.",
      cards: [
        { q: "What are the five combinations in this pack?", a: "Fog, Then Hold; Fog, Then Ask; Own It, Then Ask; Fog, Then Tell; and Tell, Then Offer.", bundle: 'free' },
        { q: "What do all five combinations have in common?", a: "Each opens by giving ground and closes by taking a position.", bundle: 'free' },
        { q: "Which two packs do these combinations draw on?", a: "Assertive Communication 1 and 2 — the four coping defences and the four social strategies.", bundle: 'free' },
        { q: "What decides whether a combination belongs in one turn or in a sequence?", a: "Whether the other person speaks in between.", bundle: 'free' },
        { q: "What is the point of combining moves at all?", a: "A single move rarely survives a conversation that has more than one turn in it.", bundle: 'free' },
        { q: "Why is the first half of every combination a concession?", a: "Because a person with nothing to push against stops pushing, which is what makes room for the second half.", bundle: 'pro' },
        { q: "What is the most common failure with these combinations?", a: "Stopping after the first half, which concedes a point and takes no position.", bundle: 'pro' },
        { q: "What does the source say about tone when combining these moves?", a: "Sarcasm turns any of them into an attack and starts the fight they were built to avoid.", bundle: 'pro' },
      ]
    },
    {
      name: "Fog, Then Hold",
      description: "",
      cards: [
        { q: "What two moves make up Fog, Then Hold?", a: "Fogging, then Broken Record.", bundle: 'free' },
        { q: "What is the core mechanism of Fog, Then Hold?", a: "Agree with what is true in the objection, then repeat the want unchanged.", bundle: 'free' },
        { q: "When is Fog, Then Hold the right combination?", a: "When you came into the conversation wanting something and they are grinding at it.", bundle: 'free' },
        { q: "What does fogging alone do wrong in this situation?", a: "It reads as a soft no, so they keep pushing to see if it turns into a yes.", bundle: 'free' },
        { q: "What does Broken Record alone do wrong?", a: "It sounds deaf, and turns the argument into one about your rudeness.", bundle: 'free' },
        { q: "What must never change between repetitions?", a: "The want itself. Rephrasing it invites negotiation about the new wording.", bundle: 'pro' },
        { q: "Why does agreeing with a policy not weaken your request?", a: "Because a policy is a fact about them, not an argument about what you want.", bundle: 'pro' },
        { q: "How do you know Fog, Then Hold is working?", a: "They run out of angles and either agree, escalate to someone else, or leave.", bundle: 'pro' },
      ]
    },
    {
      name: "Fog, Then Ask",
      description: "",
      cards: [
        { q: "What two moves make up Fog, Then Ask?", a: "Fogging, then Negative Inquiry.", bundle: 'free' },
        { q: "What is the core mechanism of Fog, Then Ask?", a: "Concede what could be true, then ask them to name the concrete behaviour.", bundle: 'free' },
        { q: "When is Fog, Then Ask the right combination?", a: "When the criticism is vague and you did not come in wanting anything.", bundle: 'free' },
        { q: "Why does the question need the fog in front of it?", a: "Without it, \"what exactly do you mean\" is a challenge and starts a fight.", bundle: 'free' },
        { q: "What does fogging alone leave behind?", a: "A sour comment hanging in the air with both of you pretending it was nothing.", bundle: 'free' },
        { q: "What makes the question a real one rather than a sneer?", a: "A flat tone and a genuine wish to hear the answer. The words alone will not save it.", bundle: 'pro' },
        { q: "What is the sign that the combination has worked?", a: "The complaint turns from a mood into a specific event or request.", bundle: 'pro' },
        { q: "Why is this combination hardest in public?", a: "The urge to defend your reputation in front of witnesses drowns out the useful question.", bundle: 'pro' },
      ]
    },
    {
      name: "Own It, Then Ask",
      description: "",
      cards: [
        { q: "What two moves make up Own It, Then Ask?", a: "Negative Assertion, then Negative Inquiry.", bundle: 'free' },
        { q: "What is the core mechanism of Own It, Then Ask?", a: "Own the real error plainly, then invite whatever else is on their list.", bundle: 'free' },
        { q: "When is Own It, Then Ask the right combination?", a: "When you genuinely made the mistake and it is clearly the opening item.", bundle: 'free' },
        { q: "Why ask for more after admitting a fault?", a: "A grievance list read out on request loses most of its force.", bundle: 'free' },
        { q: "What does Negative Assertion alone leave behind?", a: "The admission is accepted and the mood continues, because the admission was not the point.", bundle: 'free' },
        { q: "Why does inquiry alone sound evasive after a real mistake?", a: "It looks like shopping for other topics rather than answering the one at hand.", bundle: 'pro' },
        { q: "What is the instinct you have to override?", a: "The urge to close the subject the moment you have admitted one fault.", bundle: 'pro' },
        { q: "What is the practical gain of emptying the list at once?", a: "One calm hour instead of one item a month for a year.", bundle: 'pro' },
      ]
    },
    {
      name: "Fog, Then Tell",
      description: "",
      cards: [
        { q: "What two moves make up Fog, Then Tell?", a: "Fogging, then Self-Disclosure.", bundle: 'free' },
        { q: "What is the core mechanism of Fog, Then Tell?", a: "Accept what is fair in what they said, then state how you actually feel.", bundle: 'free' },
        { q: "Why is a feeling stronger than a reason here?", a: "A reason can be solved or argued with. A feeling cannot be disproved.", bundle: 'free' },
        { q: "When is Fog, Then Tell the right combination?", a: "Under pressure from someone close, where a reason would just be negotiated.", bundle: 'free' },
        { q: "What does self-disclosure alone risk sounding like?", a: "An excuse offered up for inspection, especially before you acknowledge their point.", bundle: 'free' },
        { q: "Why is this combination hardest with people close to you?", a: "The feeling you have to say out loud is usually one you consider unreasonable.", bundle: 'pro' },
        { q: "What does the disclosure have to be?", a: "True, brief, and about you — not a complaint about them in disguise.", bundle: 'pro' },
        { q: "What happens if you fog and stop?", a: "They read agreement without a position as a maybe, and keep pushing.", bundle: 'pro' },
      ]
    },
    {
      name: "Tell, Then Offer",
      description: "",
      cards: [
        { q: "What two moves make up Tell, Then Offer?", a: "Self-Disclosure, then Workable Compromise.", bundle: 'free' },
        { q: "What is the core mechanism of Tell, Then Offer?", a: "Name the limit and the feeling behind it, then put a concrete alternative next to it.", bundle: 'free' },
        { q: "What is the offer for?", a: "To give them something to say yes to, so the conversation ends in a decision.", bundle: 'free' },
        { q: "What is never included in the offer?", a: "The boundary itself. Everything around it is negotiable; it is not.", bundle: 'free' },
        { q: "What does a compromise offered without the disclosure look like?", a: "Haggling — which invites a counter-offer back towards the original request.", bundle: 'free' },
        { q: "Why offer a small alternative when it feels almost insulting?", a: "Small and real beats generous and resented, and it keeps the boundary intact.", bundle: 'pro' },
        { q: "What should you do when the offer is questioned?", a: "Repeat it unchanged. An offer that grows when pushed was never an offer.", bundle: 'pro' },
        { q: "What tells you this is the right combination rather than a plain no?", a: "There is a real part of the request you would genuinely be willing to meet.", bundle: 'pro' },
      ]
    },
    {
      name: "Collections",
      description: "The three collections in this pack, and the choices they train:\n\n• Hold or Ask — repeat the want, or make the criticism concrete\n• Own or Absorb — take a real error, or concede only the plausible part\n• The Combined Set — choosing among all five combinations\n\nEach collection is decided by how the conversation should end, not by how it started.",
      cards: [
        { q: "What decides the Hold or Ask fork?", a: "Whether you walked in wanting something. If you did, hold; if not, ask.", bundle: 'pro' },
        { q: "Why is asking the wrong move when you came in with a request?", a: "It hands them a fresh topic and lets the conversation drift off your want.", bundle: 'pro' },
        { q: "What decides the Own or Absorb fork?", a: "Whether you actually did the thing they are describing.", bundle: 'pro' },
        { q: "What is the cost of owning something you did not do?", a: "It is submissive, and it teaches them the charge sticks whether or not it is true.", bundle: 'pro' },
        { q: "What is the cost of fogging a real, factual mistake?", a: "You sound slippery, and everything you say afterwards is read as evasion.", bundle: 'pro' },
        { q: "What question organises The Combined Set?", a: "What does this conversation need to end with — a want, a fact, a closed mistake, a feeling, or a deal?", bundle: 'pro' },
        { q: "What do all three collections have in common?", a: "The opening half is nearly always the same, so the choice is always about the second half.", bundle: 'pro' },
        { q: "Why are two of the three collections two-way?", a: "Because the two options look alike in the moment, which is exactly what makes the choice worth drilling.", bundle: 'pro' },
      ]
    },
    {
      name: "Sequences",
      description: "The five sequences in this pack, and the orders they enforce:\n\n• The Long Refusal — Fogging, Broken Record, then Self-Disclosure\n• The Full Concession — Fogging, Self-Disclosure, then Workable Compromise\n• The Grievance Run — Negative Inquiry, Negative Assertion, then Negative Inquiry\n• The Owned Deal — Fogging, Negative Assertion, then Workable Compromise\n• The Held Deal — Self-Disclosure, Workable Compromise, then Broken Record\n\nThese run across several turns, with the other person answering in between.",
      cards: [
        { q: "What separates a sequence from a combination in this pack?", a: "In a sequence the other person speaks between the steps; a combination is one turn.", bundle: 'pro' },
        { q: "What is the order in The Long Refusal?", a: "Fogging, then Broken Record, then Self-Disclosure.", bundle: 'pro' },
        { q: "Why does the feeling come last in The Long Refusal?", a: "By the third pass they have stopped arguing and started asking why, which is when honesty lands.", bundle: 'pro' },
        { q: "What is the order in The Full Concession?", a: "Fogging, then Self-Disclosure, then Workable Compromise.", bundle: 'pro' },
        { q: "What goes wrong if you open with the compromise?", a: "It is read as an opening bid and negotiated back towards the original request.", bundle: 'pro' },
        { q: "What is the order in The Grievance Run?", a: "Negative Inquiry, then Negative Assertion, then Negative Inquiry again.", bundle: 'pro' },
        { q: "Why does The Owned Deal fog before admitting anything?", a: "So the exaggeration does not become the argument before the real error is separated out.", bundle: 'pro' },
        { q: "What does the final Broken Record protect in The Held Deal?", a: "The offer — by keeping it identical when they try to widen it.", bundle: 'pro' },
      ]
    },
    {
      name: "Challenges",
      description: "The five challenge categories in this pack, representing where combinations are actually tested:\n\n• The Long Haul — people who treat your first no as an opening position\n• Mixed Attacks — a real error wrapped in an exaggeration\n• Close Quarters — partners and family, where the relationship has to survive\n• The Sarcasm Trap — the same words ruined by tone\n• When They Notice — they name the technique out loud\n\nEach one breaks a different half of the combination.",
      cards: [
        { q: "What are the five challenge categories in this pack?", a: "The Long Haul, Mixed Attacks, Close Quarters, The Sarcasm Trap, and When They Notice.", bundle: 'pro' },
        { q: "What goes wrong in The Long Haul?", a: "People answer each new angle with a new reason, and every reason is a target.", bundle: 'pro' },
        { q: "What is the first task in a Mixed Attack?", a: "Cutting the sentence in two: the factual half and the exaggerated half.", bundle: 'pro' },
        { q: "Why is denying the whole of a mixed attack a mistake?", a: "You end up defending the exaggeration, and the true part is what they remember.", bundle: 'pro' },
        { q: "What makes Close Quarters different?", a: "You are not trying to win. The boundary has to hold and the relationship has to survive it.", bundle: 'pro' },
        { q: "What does sarcasm do to these combinations?", a: "It turns agreement into mockery and inquiry into a trap, starting the fight they prevent.", bundle: 'pro' },
        { q: "What is the test for sarcasm before you speak?", a: "If you would enjoy saying it, say something else.", bundle: 'pro' },
        { q: "What is the right answer when someone says you are using a technique?", a: "Agree that you are being deliberate and say why — neither deny it nor explain the method.", bundle: 'pro' },
      ]
    },
    {
      name: "Mindset",
      description: "The five limiting beliefs targeted in this pack, all of them about combining rather than about any single move:\n\n• Sounding Rehearsed — deliberate speech must be insincere\n• The Second Half — stopping between the two halves\n• Planning What to Say — preparation is manipulation\n• Giving Ground — whoever concedes first has lost\n• Changing Move Mid-Talk — a chosen approach must be seen through\n\nThe obstacles to each separate move were handled in the earlier packs.",
      cards: [
        { q: "Why do these mindsets differ from those in Packs 1 and 2?", a: "The earlier packs treated obstacles to each single move; these are about putting moves together.", bundle: 'pro' },
        { q: "What is true instead of \"planning is manipulation\"?", a: "Planning what you will say is not deciding what they will do.", bundle: 'pro' },
        { q: "Where is a combination most often lost?", a: "In the gap between the two halves, where nerve fails and the second half is never said.", bundle: 'pro' },
        { q: "What is the cure for stopping after the first half?", a: "Deciding the second half before you open your mouth, and saying it in the same breath.", bundle: 'pro' },
        { q: "What is given away by the opening concession?", a: "A sentence — never the want, and never the boundary.", bundle: 'pro' },
        { q: "Why does a repeated single move sound more mechanical than a combination?", a: "Because repetition is what a script sounds like; agreement followed by a real question sounds like attention.", bundle: 'pro' },
        { q: "When should you abandon the approach you planned?", a: "When the other person changes what they are doing — the move follows them, not your earlier decision.", bundle: 'pro' },
        { q: "What is the answer to \"if it doesn't come naturally, it isn't really me\"?", a: "It becomes you the way driving does: awkward, then invisible.", bundle: 'pro' },
      ]
    },
  ],
  integratedmaster: [
    {
      name: "Core Idea",
      description: "Four advanced integrated assertive skills to handle high-pressure commercial, authority, and equal disputes.\n\n• The Integrated Shield — persistent boundaries\n• Empathic Inquiry — resolving gridlock\n• Assertive Disclosure — clean limits\n• The Complete Ownership — guilt-free recovery\n\nThese integrated skills keep you sovereign.",
      cards: [
        { q: "What are the four strategies in this pack?", a: "The Integrated Shield, Empathic Inquiry, Assertive Disclosure, and The Complete Ownership.", bundle: 'free' },
        { q: "What is the prime assertive right from which all others derive?", a: "The right to be the ultimate judge of your own behavior, thoughts, and emotions.", bundle: 'free' },
        { q: "What separates this masterclass pack from the first two packs?", a: "It integrates defensive criticism-blocking and social boundary-setting into advanced compound maneuvers.", bundle: 'free' },
        { q: "What decides which strategy to use?", a: "The relational task: blocking manipulation (Shield), resolving passive sulking (Inquiry), setting boundaries (Disclosure), or fixing mistakes (Ownership).", bundle: 'free' },
        { q: "What is the main goal of integrating these skills?", a: "Moving fluidly between connection and boundary enforcement without getting anxious or defensive.", bundle: 'free' },
        { q: "Why is \"Workable Compromise\" integrated directly into masterclass moves?", a: "Because advanced assertiveness uses material bargains to maintain cooperative, equal relationships.", bundle: 'pro' },
        { q: "What do all four integrated strategies have in common?", a: "They combine feelings, facts, and boundaries into single-turn responses.", bundle: 'pro' },
        { q: "Who wrote the source text these integrated concepts are based on?", a: "Manuel J. Smith, Ph.D. (1975).", bundle: 'pro' },
      ]
    },
    {
      name: "The Integrated Shield",
      description: "",
      cards: [
        { q: "What is the core mechanism of The Integrated Shield?", a: "Agreeing with whatever is true, probable, or logical in a criticism while repeating your boundary.", bundle: 'free' },
        { q: "What two base skills are combined in The Integrated Shield?", a: "Fogging and Broken Record.", bundle: 'free' },
        { q: "Why does The Integrated Shield work against persistent manipulators?", a: "It offers no hard striking surface for their arguments while keeping your decision immovable.", bundle: 'free' },
        { q: "What trap does The Integrated Shield help you avoid?", a: "Getting drawn into logical debates or trying to disprove their company rules.", bundle: 'free' },
        { q: "What tone of voice is required for The Integrated Shield?", a: "A low-key, relaxed, and completely unflappable voice.", bundle: 'free' },
        { q: "When is The Integrated Shield most useful?", a: "In high-pressure commercial, bureaucratic, or formal authority disputes.", bundle: 'pro' },
        { q: "How does The Integrated Shield handle \"store policies\"?", a: "By agreeing that the policy exists, and repeating your specific demand anyway.", bundle: 'pro' },
        { q: "What habit does The Integrated Shield break?", a: "The childish habit of defending your choices when someone gives you a logical reason to comply.", bundle: 'pro' },
      ]
    },
    {
      name: "Empathic Inquiry",
      description: "",
      cards: [
        { q: "What is the core mechanism of Empathic Inquiry?", a: "Actively prompting specific criticism about your behavior and pivoting directly to a compromise.", bundle: 'free' },
        { q: "What two base skills are combined in Empathic Inquiry?", a: "Negative Inquiry and Workable Compromise.", bundle: 'free' },
        { q: "Why is Empathic Inquiry useful in close relationships?", a: "It forces a passive-aggressive or sulking partner to state their concrete grievances so you can negotiate.", bundle: 'free' },
        { q: "What trap does Empathic Inquiry help you avoid?", a: "Responding to a partner's cold shoulder with defensive anger or silent withdrawal.", bundle: 'free' },
        { q: "What is the difference between emotional nagging and a workable problem?", a: "Nagging uses vague right-and-wrong judgments; a workable problem is a concrete, negotiable conflict.", bundle: 'free' },
        { q: "What is the optimal end result of Empathic Inquiry?", a: "Your partner discards their right-and-wrong manipulation and states their actual desires.", bundle: 'pro' },
        { q: "How does Empathic Inquiry help you emotionally?", a: "It desensitizes you to your partner's irritated tone so you can listen to their underlying issue.", bundle: 'pro' },
        { q: "When should you use Empathic Inquiry with colleagues?", a: "To resolve passive resistance to your schedule or project timelines.", bundle: 'pro' },
      ]
    },
    {
      name: "Assertive Disclosure",
      description: "",
      cards: [
        { q: "What is the core mechanism of Assertive Disclosure?", a: "Sharing your personal, non-defensive feelings or anxieties first, then declaring your decision cleanly without excuses.", bundle: 'free' },
        { q: "What two base skills are combined in Assertive Disclosure?", a: "Self-Disclosure and Asserting Wants.", bundle: 'free' },
        { q: "Why does Assertive Disclosure prevent manipulation?", a: "It explains your state rather than judging their request, leaving no excuses for them to argue with.", bundle: 'free' },
        { q: "What childhood conditioning does Assertive Disclosure dismantle?", a: "The belief that saying no to family or close friends without a massive logical reason is selfish or rude.", bundle: 'free' },
        { q: "How does Assertive Disclosure keep a close relationship warm?", a: "Honest vulnerability builds intimacy and makes your boundary feel personal rather than hostile.", bundle: 'free' },
        { q: "Why are \"reasons and excuses\" a trap in Assertive Disclosure?", a: "Every excuse you give is a target for the other person to solve and negotiate with.", bundle: 'pro' },
        { q: "When is Assertive Disclosure essential in dating?", a: "To establish physical boundaries under romantic pressure without losing the connection.", bundle: 'pro' },
        { q: "How does Assertive Disclosure protect your personal energy?", a: "By allowing you to reject exhausting social plans simply because you feel drained.", bundle: 'pro' },
      ]
    },
    {
      name: "The Complete Ownership",
      description: "",
      cards: [
        { q: "What is the core mechanism of The Complete Ownership?", a: "Owning your real mistakes with dignity, sharing your honest embarrassment, and proposing a compromise.", bundle: 'free' },
        { q: "What three base skills are combined in The Complete Ownership?", a: "Negative Assertion, Self-Disclosure, and Workable Compromise.", bundle: 'free' },
        { q: "Why does The Complete Ownership defuse a critic's anger?", a: "It treats mistakes as simple human facts and immediately redirects the conversation to solutions.", bundle: 'free' },
        { q: "What childish belief does The Complete Ownership dismantle?", a: "That making an error is a moral failure that requires psychological atonement or crawling.", bundle: 'free' },
        { q: "What is the difference between Complete Ownership and a submissive apology?", a: "Complete Ownership owns the fact of the mistake and offers a deal; apologies plead for forgiveness.", bundle: 'free' },
        { q: "What is the optimal tone for The Complete Ownership?", a: "Factual, straightforward, and completely free of visceral squirming.", bundle: 'pro' },
        { q: "What is the danger of denying or hiding a real mistake?", a: "It escalates the conflict into a character fight and builds resentment.", bundle: 'pro' },
        { q: "How does The Complete Ownership protect your credibility?", a: "Owning mistakes calmly shows confidence, security, and a focus on practical execution.", bundle: 'pro' },
      ]
    },
    {
      name: "Collections",
      description: "The three collections in this pack, and what each one makes you choose between:\n\n• Deflect & Inquiry — choosing between The Integrated Shield and Empathic Inquiry\n• Own or Agree — choosing between The Complete Ownership and Assertive Disclosure\n• The Masterclass Set — choosing among all four integrated strategies to handle advanced conflicts\n\nOne question decides nearly all of it: what did the other person just do?",
      cards: [
        { q: "What is the primary purpose of the Collections mode?", a: "It trains the quick recognition and selection of the correct integrated masterclass defense.", bundle: 'pro' },
        { q: "What does Deflect & Inquiry make you choose between?", a: "Defusing an empty, manipulative attack (Shield) vs. extracting a real relationship complaint (Inquiry).", bundle: 'pro' },
        { q: "What is the danger of using The Integrated Shield when Empathic Inquiry is required?", a: "You sound evasive and stall a solvable relationship grievance behind a wall of agreements.", bundle: 'pro' },
        { q: "What is the danger of using The Complete Ownership when Assertive Disclosure is required?", a: "You submissively own a mistake you didn't make, handing them control over your schedule.", bundle: 'pro' },
        { q: "Why does the Deflect & Inquiry collection represent a genuine fork?", a: "Because choosing the wrong move either invites further debate with a troll or freezes out a partner.", bundle: 'pro' },
        { q: "How many strategies are represented in The Masterclass Set?", a: "All four strategies in this pack: Shield, Inquiry, Disclosure, and Ownership.", bundle: 'pro' },
        { q: "Why is a two-strategy collection allowed?", a: "Because it allows you to practice a sharp, binary decision where both moves look plausible in the moment.", bundle: 'pro' },
        { q: "What is the deciding factor in the Own or Agree collection?", a: "Whether you actually made a factual error that you are responsible for.", bundle: 'pro' },
      ]
    },
    {
      name: "Sequences",
      description: "The three sequences in this pack, and the order each one insists on:\n\n• The Defusal Run — The Integrated Shield, then Empathic Inquiry twice\n• The Reconciliation Path — The Complete Ownership, then Empathic Inquiry, then The Complete Ownership\n• The Boundaried No — Assertive Disclosure, then The Integrated Shield, then Assertive Disclosure\n\nIn each sequence, the order does the work of defusing advanced criticism.",
      cards: [
        { q: "What is the specific order of moves in The Defusal Run?", a: "The Integrated Shield, then Empathic Inquiry, then Empathic Inquiry again.", bundle: 'pro' },
        { q: "Why does The Integrated Shield come first in The Defusal Run?", a: "To absorb the emotional strike so the critic quietens down before you ask for details.", bundle: 'pro' },
        { q: "What is the specific order of moves in The Reconciliation Path?", a: "The Complete Ownership, then Empathic Inquiry, then The Complete Ownership again.", bundle: 'pro' },
        { q: "What problem does The Reconciliation Path solve?", a: "It defuses a partner who refuses to let go of an error you have already owned.", bundle: 'pro' },
        { q: "What is the specific order of moves in The Boundaried No?", a: "Assertive Disclosure, then The Integrated Shield, then Assertive Disclosure again.", bundle: 'pro' },
        { q: "Why does Assertive Disclosure come before The Integrated Shield in a family boundary dispute?", a: "It explains your feeling first so the refusal lands gently, before you hold your line under pressure.", bundle: 'pro' },
        { q: "What happens if you put the compromise step first in a boundary dispute?", a: "You pre-emptively surrender your boundary before establishing your position.", bundle: 'pro' },
        { q: "Why do sequences in this pack contain at least three steps?", a: "To train the realistic flow of an intense conversation where things must be worked through.", bundle: 'pro' },
      ]
    },
    {
      name: "Challenges",
      description: "The five challenge categories in this pack, representing the advanced areas you meet:\n\n• Handling Authority — advanced boss or expert pressure\n• Commercial Pressure — persistent sales pitches and evasive clerks\n• Flattery & Compliments — positive manipulation and insincere praise\n• Nagging & Testing — emotional guilt-trips and boundary trials\n• Modern Evasions — gig workers, support bots, and digital disputes\n\nEach category has its own way of testing your integrated boundaries.",
      cards: [
        { q: "What are the five challenge categories in this pack?", a: "Handling Authority, Commercial Pressure, Flattery & Compliments, Nagging & Testing, and Modern Evasions.", bundle: 'pro' },
        { q: "Why is Handling Authority a distinct challenge?", a: "Because subordinates tend to use submissive excuses or passive silence when bosses criticize.", bundle: 'pro' },
        { q: "How does Flattery & Compliments manipulate your behavior?", a: "It induces a feeling of obligation, making it difficult to say no to their subsequent request.", bundle: 'pro' },
        { q: "What is the main goal in Nagging & Testing?", a: "Holding your boundary calmly without getting drawn into emotional arguments or shouting.", bundle: 'pro' },
        { q: "What is the core issue in Modern Evasions?", a: "Digital systems, bots, and workers passing the buck to make you solve their technical problems.", bundle: 'pro' },
        { q: "What goes wrong in Commercial Pressure?", a: "Customers feel forced to give excuses, which salespeople easily dismantle to make a sale.", bundle: 'pro' },
        { q: "Why is Modern Evasions updated from \"Supermarket Evasions\"?", a: "To apply the same core assertive skills to today's digital, gig-economy customer service loops.", bundle: 'pro' },
        { q: "Which strategy is most useful in Commercial Pressure?", a: "The Integrated Shield — repeating your decision calmly to block their persistent pitch.", bundle: 'pro' },
      ]
    },
    {
      name: "Mindset",
      description: "The four limiting mindsets targeted in this pack, and what is true instead:\n\n• Standards — the limiting belief that you must follow external criteria of right and wrong\n• Justifications — the urge to explain, defend, and offer reasons for your choices\n• Mistakes — the heavy guilt and shame that follow everyday human errors\n• Approval — the paralyzing belief that you must have the goodwill of everyone\n\nThe expectations we use to control each other are actually cages.",
      cards: [
        { q: "What are the four mindset decks in this pack?", a: "Standards, Justifications, Mistakes, and Approval.", bundle: 'pro' },
        { q: "What is the limiting belief in Standards?", a: "That you must measure up to someone else's criteria of right and proper before you can act.", bundle: 'pro' },
        { q: "What is the limiting belief in Justifications?", a: "That you must explain your reasons to prove your choices are correct and responsible.", bundle: 'pro' },
        { q: "What is the reset for the Mistakes mindset?", a: "Errors are simply errors. They are inefficient, but they do not require emotional atonement.", bundle: 'pro' },
        { q: "What is the reset for the Approval mindset?", a: "You can do business and deal with people assertively even if they do not like you or your boundaries.", bundle: 'pro' },
        { q: "What is the core truth of the Standards mindset?", a: "You have the ultimate right to judge your own behavior, thoughts, and emotions.", bundle: 'pro' },
        { q: "What do all four limiting mindsets have in common?", a: "They rely on learned childhood anxiety, ignorance, and guilt to let others control you.", bundle: 'pro' },
        { q: "Why does the Mistakes mindset target the Complete Ownership skill?", a: "It allows you to own mistakes as simple human facts without feeling guilty or defensive.", bundle: 'pro' },
      ]
    },
  ],
  counseling1: [
    {
      name: "Core Idea",
      description: "Five ways to help a struggling brother back to obedience.\n\n• Spurring Obedience — duty over feeling\n• Righteous Replacement — put off and put on\n• Clarifying the Facts — what, not why\n• Challenging Self-Pity — pop the balloon\n• Gentle Restoration — humble burden-bearing\n\nA path from the first question to a restored habit.",
      cards: [
        { q: "What are the five personal restoration strategies in this pack?", a: "Spurring Obedience, Righteous Replacement, Clarifying the Facts, Challenging Self-Pity, and Gentle Restoration.", bundle: 'free' },
        { q: "How do the five fit together?", a: "They form a path of mutual care: discover the facts, break self-pity, restore gently, replace old habits, and spur obedience.", bundle: 'free' },
        { q: "Who is the user of these strategies?", a: "A regular congregation member helping a friend in their daily walk.", bundle: 'free' },
        { q: "What is the core goal of these strategies?", a: "Personal sanctification — helping a brother or sister grow in holiness and usefulness.", bundle: 'free' },
        { q: "What is the decide rule for when to help?", a: "When you stumble over a brother who is caught in a trespass and cannot get out.", bundle: 'free' },
        { q: "Why is counseling a duty for every member of the church?", a: "Colossians 3:16 and Galatians 6:1 command all believers to teach and admonish one another.", bundle: 'pro' },
        { q: "What is the role of the pastor compared to the layman?", a: "The pastor ordains and patrols officially; the layman counsels unofficially as a second calling.", bundle: 'pro' },
        { q: "Where does the power for true change come from?", a: "The Holy Spirit working through His written word as we step out in obedience.", bundle: 'pro' },
      ]
    },
    {
      name: "Spurring Obedience",
      description: "",
      cards: [
        { q: "What is the core idea of Spurring Obedience?", a: "Doing your duty regardless of your mood. Action must precede and shape feeling.", bundle: 'free' },
        { q: "Why does this strategy work?", a: "Because feelings follow actions. The lower the pile of undone duties gets, the higher our spirits get.", bundle: 'free' },
        { q: "What are the three variants of Spurring Obedience?", a: "The Action Step, The Schedule Lock, and The Grace Reminder.", bundle: 'free' },
        { q: "What are \"feelings\" in this strategy?", a: "Followers, not leaders. We must not let them rule our duties.", bundle: 'free' },
        { q: "Who is particularly prone to the feelings trap?", a: "People who must schedule their own days, like preachers and homemakers, because they need self-discipline.", bundle: 'free' },
        { q: "What is the first assignment we give to a depressed friend?", a: "To get their most avoided daily chore completely finished before the next meeting.", bundle: 'pro' },
        { q: "Why is waiting for motivation a trap?", a: "Because the longer we avoid our duty, the guiltier we feel, and the lower our feelings sink.", bundle: 'pro' },
        { q: "How does Christ strengthen us to obey?", a: "He gives us the ability as we step out by faith to do what His word commands.", bundle: 'pro' },
      ]
    },
    {
      name: "Righteous Replacement",
      description: "",
      cards: [
        { q: "What is the core idea of Righteous Replacement?", a: "Putting off a sinful habit of mind or speech and immediately putting on the righteous equivalent.", bundle: 'free' },
        { q: "Why does a vacuum in the soul fail?", a: "Simply stopping a sin leaves an empty space that always invites the old habit back.", bundle: 'free' },
        { q: "What are the three variants of Righteous Replacement?", a: "The Speech Trade, The Thought Trade, and The Service Trade.", bundle: 'free' },
        { q: "What is the speech trade?", a: "Replacing gossip or bitter words with active encouragement and thanksgiving.", bundle: 'free' },
        { q: "What is the thought trade?", a: "Replacing anxious brooding with a think list of true, pure, and excellent things.", bundle: 'free' },
        { q: "What is the biblical foundation of replacement?", a: "Ephesians four: putting off the old man and putting on the new man.", bundle: 'pro' },
        { q: "What is forgiveness according to this strategy?", a: "A promise first, not a feeling. I promise not to rehash, repeat, or brood over the sin.", bundle: 'pro' },
        { q: "How do we help a friend stop brooding?", a: "By having them write a think list of concrete things to focus on when temptation starts.", bundle: 'pro' },
      ]
    },
    {
      name: "Clarifying the Facts",
      description: "",
      cards: [
        { q: "What is the core idea of Clarifying the Facts?", a: "Asking objective \"what\" and \"how\" questions to help a friend see their situation through Scripture.", bundle: 'free' },
        { q: "Why do we avoid \"why\" questions?", a: "Why questions put people on the spot and invite defensive speculation and excuse-making.", bundle: 'free' },
        { q: "What are the three variants of Clarifying the Facts?", a: "The What Swap, The Timing Check, and The Action Check.", bundle: 'free' },
        { q: "When did the listlessness or conflict start?", a: "That is the timing check — it locates the concrete trigger of the problem.", bundle: 'free' },
        { q: "What is the action check?", a: "Asking what they actually did in the situation, rather than what they felt.", bundle: 'free' },
        { q: "What are \"halo data\" in counseling?", a: "Nonverbal clues like blushes, tension, sighs, and hesitations that help locate hot spots.", bundle: 'pro' },
        { q: "How do we use a personal data inventory?", a: "To gather facts about what the problem is, what they have done, and what they want us to do.", bundle: 'pro' },
        { q: "Why is exact specific data necessary for change?", a: "Because change happens in the concrete, not in the abstract. Vague data breeds vague solutions.", bundle: 'pro' },
      ]
    },
    {
      name: "Challenging Self-Pity",
      description: "",
      cards: [
        { q: "What is the core idea of Challenging Self-Pity?", a: "Refusing to play along with self-destructive pity parties, and pointing to Christ's grace and responsibility.", bundle: 'free' },
        { q: "What is the pity party stop?", a: "Stopping \"I'm a failure\" talk and calling them to confess their concrete, individual sins.", bundle: 'free' },
        { q: "What is the grace pivot?", a: "Reminding a crushed friend that Christ's blood is sufficient to wash away their real failures.", bundle: 'free' },
        { q: "Why is self-pity dangerous?", a: "It is a subtle form of pride that resists God's grace and avoids personal responsibility.", bundle: 'free' },
        { q: "What are the three variants of Challenging Self-Pity?", a: "The Pity Party Stop, The Grace Pivot, and The Responsibility Call.", bundle: 'free' },
        { q: "What is a \"trial balloon\" in a counseling conversation?", a: "A small, parenthetical hint of sin or self-regret a friend lets out to see if you will minimize it.", bundle: 'pro' },
        { q: "What do we do when we see a trial balloon?", a: "We grab the string and pop it immediately, taking their sin seriously without minimizing.", bundle: 'pro' },
        { q: "Why is minimizing sin unhelpful?", a: "Because if we tell them \"it's not that bad,\" they never reach the point of honest confession and real hope.", bundle: 'pro' },
      ]
    },
    {
      name: "Gentle Restoration",
      description: "",
      cards: [
        { q: "What is the core idea of Gentle Restoration?", a: "Restoring a brother caught in a trespass with deep humility, looking to yourself lest you be tempted.", bundle: 'free' },
        { q: "What does the word \"restore\" mean in Galatians 6:1?", a: "To mend a broken bone or repair a torn net in order to make it useful again.", bundle: 'free' },
        { q: "What are the three variants of Gentle Restoration?", a: "The Leveling Statement, The Burden Share, and The Self-Watch.", bundle: 'free' },
        { q: "What is the leveling statement?", a: "\"I'm no better than you, and I might need your help next week, but let's carry this together.\"", bundle: 'free' },
        { q: "What is the burden share?", a: "Stepping into the mess to pull them out, so they can get back to bearing their own load.", bundle: 'free' },
        { q: "What is the self-watch?", a: "Keeping a close watch on your own heart so you are not infected by the same temptation.", bundle: 'pro' },
        { q: "How do we avoid becoming drowned ourselves while helping?", a: "By staying anchored in structure and using a second witness in difficult situations.", bundle: 'pro' },
        { q: "What is the ultimate goal of restoration?", a: "To return the brother to usefulness so they can carry their own share of the church's load.", bundle: 'pro' },
      ]
    },
    {
      name: "Collections",
      description: "The three collections in this pack, and what each one makes you choose between:\n\n• Responding to a Drifting Friend — Gentle Restoration, Clarifying the Facts or Spurring Obedience\n• Breaking the Spiral — Righteous Replacement or Challenging Self-Pity\n• The Personal Restoration Set — everything mixed\n\nOne question decides: is their struggle about motivation, habit, or a sudden fall?",
      cards: [
        { q: "What is the purpose of the Collections mode?", a: "To train you to choose the right strategy when several might seem to fit the situation.", bundle: 'pro' },
        { q: "What does \"Responding to a Drifting Friend\" choose between?", a: "Gentle Restoration (for trespasses), Clarifying the Facts (for vagueness), and Spurring Obedience (for listlessness).", bundle: 'pro' },
        { q: "What does \"Breaking the Spiral\" choose between?", a: "Challenging Self-Pity (for self-regret) and Righteous Replacement (for brooding habits).", bundle: 'pro' },
        { q: "What deciding question separates Spurring Obedience and Gentle Restoration?", a: "Is the friend paralyzed by a lack of motivation, or are they crushed under the weight of a specific sin?", bundle: 'pro' },
        { q: "What decides between Challenging Self-Pity and Righteous Replacement?", a: "Do they need to accept God's forgiveness first, or do they need an active trade for their brooding?", bundle: 'pro' },
        { q: "Why does a collection deck need at least three strategies?", a: "Because two is a simple comparison, while three forces a genuine choice in the moment.", bundle: 'pro' },
        { q: "Where does the theory behind each choice live?", a: "In the descriptions of the individual strategies in Single Strategy.", bundle: 'pro' },
        { q: "Why do we tag all Collections cards as pro?", a: "Because Collections is a pro-only training mode that is closed to free users.", bundle: 'pro' },
      ]
    },
    {
      name: "Sequences",
      description: "The three sequences in this pack, and the order each one runs in:\n\n• First the Meal, Then the Gospel — Gentle Restoration → Clarifying the Facts → Spurring Obedience\n• Steering a Sinking Friend — Challenging Self-Pity → Clarifying the Facts → Righteous Replacement\n• The Path of Restoration — Clarifying the Facts → Challenging Self-Pity → Righteous Replacement → Spurring Obedience\n\nThe order does the work of breaking the spiral step-by-step.",
      cards: [
        { q: "What is the purpose of the Sequences mode?", a: "To train you in the step-by-step order of biblical care across several weeks.", bundle: 'pro' },
        { q: "What is the order in \"First the Meal, Then the Gospel\"?", a: "Gentle Restoration (meet the burden), Clarifying the Facts (gather data), and Spurring Obedience (present the truth).", bundle: 'pro' },
        { q: "Why does the physical help come before the Gospel in this sequence?", a: "Meeting the immediate burden first disarms their defensiveness; naming the Gospel too early reads as a trick.", bundle: 'pro' },
        { q: "What is the order in \"Steering a Sinking Friend\"?", a: "Challenging Self-Pity (break the mood), Clarifying the Facts (audit habits), and Righteous Replacement (active service).", bundle: 'pro' },
        { q: "Why must we challenge self-pity before we build new habits?", a: "Because we cannot build a disciplined schedule while they are still protecting their pity party.", bundle: 'pro' },
        { q: "What are the four steps of \"The Path of Restoration\"?", a: "Clarifying the Facts (Teaching), Challenging Self-Pity (Conviction), Righteous Replacement (Correction), and Spurring Obedience (Discipline).", bundle: 'pro' },
        { q: "Why do the Situation lines in these Sequences contain time gaps?", a: "Because the steps are weeks apart in the friend's life, not turns in one single conversation.", bundle: 'pro' },
        { q: "Why do we avoid using generic labels like \"Step 1\" on the cards?", a: "Because the step must contain a concrete stimulus and a specific strategy name.", bundle: 'pro' },
      ]
    },
    {
      name: "Challenges",
      description: "The five challenges to master in this pack:\n\n• The Sluggish Spirit — helping a listless friend\n• Pious Pretending — cutting through spiritual-sounding excuses\n• The Feelings Trap — dealing with the \"I don't feel like it\" reflex\n• The Gossip Grapevine — stopping rumors in their tracks\n• Private Offenses — letting minor hurts go in love\n\nEach challenge represents a common lock that stops our growth.",
      cards: [
        { q: "What is the purpose of the Challenges mode?", a: "To train you to recognize and categorize common problems from the outside.", bundle: 'pro' },
        { q: "What is the specific miss in \"The Sluggish Spirit\"?", a: "Coddling their down mood or accepting their \"I can't\" excuses instead of pushing them to act.", bundle: 'pro' },
        { q: "What is the specific miss in \"Pious Pretending\"?", a: "Allowing spiritual-sounding phrases like \"the devil made me do it\" to shield them from responsibility.", bundle: 'pro' },
        { q: "What are the biting strategies in \"The Feelings Trap\"?", a: "Spurring Obedience (to get them moving) and Righteous Replacement (to trade brooding for thanksgiving).", bundle: 'pro' },
        { q: "What must we avoid in \"The Gossip Grapevine\"?", a: "Listening to negative details or \"prayer requests\" about someone who is not in the room.", bundle: 'pro' },
        { q: "What does \"Private Offenses\" train us to do?", a: "To put off bitterness and put on prayer and soft answers when we are slighted.", bundle: 'pro' },
        { q: "Why is Challenges not necessarily harder than other modes?", a: "It simply organizes the cards around the problem category rather than the strategy.", bundle: 'pro' },
        { q: "Why must every Challenge card show the strategy name in brackets?", a: "So the user can see exactly which biblical move solved that specific problem.", bundle: 'pro' },
      ]
    },
    {
      name: "Mindset",
      description: "The five mindsets you practise in this pack:\n\n• Feelings — duty is independent of our emotions\n• Habits — the Spirit makes change possible at any age\n• Plain Speech — we must name the sin to find the cure\n• Self-Forgiveness — we rest in Christ's payment, not our own\n• Confrontation — humble restoration is the truest form of love\n\nThe battle inside ourselves is what decides whether we can help others.",
      cards: [
        { q: "What is the purpose of the Mindset mode?", a: "To train you to identify and reset the limiting thoughts that stop your care.", bundle: 'pro' },
        { q: "What is the limiting thought behind \"Feelings\"?", a: "\"I cannot do my duty or help my friend until I feel motivated to do so.\"", bundle: 'pro' },
        { q: "What is the reset for \"Habits\"?", a: "You are not an animal to be trained; the Holy Spirit makes change possible at any age.", bundle: 'pro' },
        { q: "What is the cost of avoiding \"Plain Speech\"?", a: "Your friend stays trapped under a vague cloud of guilt without any hope of a cure.", bundle: 'pro' },
        { q: "Why is \"Self-Forgiveness\" a theological error?", a: "It is a prideful attempt to pay for our own sins instead of resting in Christ's complete payment.", bundle: 'pro' },
        { q: "What is the limiting thought behind \"Confrontation\"?", a: "\"Pointing out a brother's sin is always unloving, judgmental, and hypocritical.\"", bundle: 'pro' },
        { q: "Why is restoring a brother in meekness the truest form of love?", a: "Because leaving them crushed under the rock of sin leads to their spiritual decay.", bundle: 'pro' },
        { q: "Why are Mindset cards written as self-talk in the first person?", a: "To help you identify the subtle excuses your own heart makes in the moment.", bundle: 'pro' },
      ]
    },
  ],
  counseling2: [
    {
      name: "Core Idea",
      description: "Four ways to meet friction between members of a church.\n\n• Sorting Responsibilities — the log in your own eye first\n• Direct Confrontation — face to face, never behind the back\n• Pursuing Peace — the first move is always yours\n• Overcoming With Good — service instead of a score\n\nPeacemaking is obedience, not luck.",
      cards: [
        { q: "What are the four conflict resolution strategies in this pack?", a: "Sorting Responsibilities, Direct Confrontation, Pursuing Peace, and Overcoming With Good.", bundle: 'free' },
        { q: "How do the four fit together?", a: "They provide a complete path of peacemaking: own your part, confront sin directly, pursue peace actively, and overcome hostility with service.", bundle: 'free' },
        { q: "Who is the user of these strategies?", a: "A regular congregation member helping a friend in their daily walk.", bundle: 'free' },
        { q: "What is the core goal of these strategies?", a: "Relational reconciliation — restoring broken bonds in the church while preserving biblical truth.", bundle: 'free' },
        { q: "What is the decide rule for when to intervene?", a: "When a brother is in active sin, or when two members are trapped in an unresolved conflict.", bundle: 'free' },
        { q: "Why is church discipline considered a blessing?", a: "Because it is a process of care designed for the restoration and blessing of the offender.", bundle: 'pro' },
        { q: "What is the lay person's role in the church's discipline?", a: "The layman handles the informal pre-disciplinary stages by going one-on-one and then taking witnesses.", bundle: 'pro' },
        { q: "Where do we find the power to reconcile with our enemies?", a: "The Holy Spirit provides the willingness and the ability as we step out in obedience to the word.", bundle: 'pro' },
      ]
    },
    {
      name: "Sorting Responsibilities",
      description: "",
      cards: [
        { q: "What is the core idea of Sorting Responsibilities?", a: "Taking the log out of your own eye first and owning your response regardless of how much you were pushed.", bundle: 'free' },
        { q: "Why does this strategy work?", a: "Because it disarms defensiveness by stopping the Eden blame-shifting reflex.", bundle: 'free' },
        { q: "What are the three variants of Sorting Responsibilities?", a: "The Eden Check, The Resentment Audit, and The Arrow Swap.", bundle: 'free' },
        { q: "What is the Eden check?", a: "Stopping the automatic reflex to blame others or circumstances for our own angry reactions.", bundle: 'free' },
        { q: "What is the resentment audit?", a: "Confessing and owning the bitterness you nursed in response to being wronged by another.", bundle: 'free' },
        { q: "Why is personal responsibility independent of the other person's actions?", a: "Because we are individually responsible before God for our own responses, regardless of the pressure.", bundle: 'pro' },
        { q: "What is the arrow swap?", a: "Actively redirecting the focus of a conflict from their failure to your own to find the common ground.", bundle: 'pro' },
        { q: "What does the Bible say about why we blame others?", a: "It is our default fallen nature since the garden of Eden, attempting to shift the blame eventually onto God.", bundle: 'pro' },
      ]
    },
    {
      name: "Direct Confrontation",
      description: "",
      cards: [
        { q: "What is the core idea of Direct Confrontation?", a: "Opposing sin and hypocrisy face-to-face in the congregation instead of gossiping behind people's backs.", bundle: 'free' },
        { q: "Why does this strategy work?", a: "It stops the spread of rumors immediately and forces the sin to be dealt with in truth and love.", bundle: 'free' },
        { q: "What are the three variants of Direct Confrontation?", a: "The Face-to-Face Lock, The Gentle Opposition, and The Public Check.", bundle: 'free' },
        { q: "What is the face-to-face lock?", a: "Refusing to listen to gossip about an absent brother and insisting on meeting them directly.", bundle: 'free' },
        { q: "What is gentle opposition?", a: "Confronting a brother caught in a clear trespass with meekness and a quiet voice.", bundle: 'free' },
        { q: "When is a confrontation considered public?", a: "When the sin is already open and apparent to everyone, requiring an open check to protect the church's unity.", bundle: 'pro' },
        { q: "Why is passive silence in the presence of sin dangerous?", a: "Because it leaves our brother under the weight of his sin and lets the church leak its spiritual power.", bundle: 'pro' },
        { q: "What is the difference between judging a brother and restoring him?", a: "Judging is done in haughtiness to condemn; restoring is done in meekness to make them useful again.", bundle: 'pro' },
      ]
    },
    {
      name: "Pursuing Peace",
      description: "",
      cards: [
        { q: "What is the core idea of Pursuing Peace?", a: "Seeking reconciliation actively and doing everything on your side to make peace without compromising truth.", bundle: 'free' },
        { q: "Why does this strategy work?", a: "It stops the verbal ping-pong match of arguments by offering a soft answer.", bundle: 'free' },
        { q: "What are the three variants of Pursuing Peace?", a: "The Soft Return, The Love Cover, and The Clean Border.", bundle: 'free' },
        { q: "What is the soft return?", a: "Responding to a verbal attack with a soft answer to stop the conflict from escalating.", bundle: 'free' },
        { q: "What is the love cover?", a: "Choosing to let minor slights and personal offenses pass without keeping a record of them.", bundle: 'free' },
        { q: "What is the clean border?", a: "Establishing your own peaceful stance and leaving the door open when the other person refuses to reconcile.", bundle: 'pro' },
        { q: "Why is reconciliation always your move?", a: "Because Jesus left no loopholes: whether you are the offender (Matthew 5) or the offended (Matthew 18), you must go.", bundle: 'pro' },
        { q: "When is peace not possible?", a: "When the other person refuses, or when peace would require the compromise of God's written word.", bundle: 'pro' },
      ]
    },
    {
      name: "Overcoming With Good",
      description: "",
      cards: [
        { q: "What is the core idea of Overcoming With Good?", a: "Conquering hostile attacks by actively meeting the practical needs of your enemy.", bundle: 'free' },
        { q: "Why does this strategy work?", a: "Because goodness is a far more powerful weapon than evil, and active service disarms hostility.", bundle: 'free' },
        { q: "What are the three variants of Overcoming With Good?", a: "The Practical Surprise, The Verbal Blessing, and The Prayer Swap.", bundle: 'free' },
        { q: "What is the practical surprise?", a: "Actively serving or helping someone who is currently mistreating or opposing you.", bundle: 'free' },
        { q: "What is the verbal blessing?", a: "Responding to a verbal attack with kind words and sincere prayers for their welfare.", bundle: 'free' },
        { q: "What is the prayer swap?", a: "Offering to pray out loud for the welfare and salvation of your tormentor instead of defending yourself.", bundle: 'pro' },
        { q: "Why does retaliation always fail?", a: "Because returning evil for evil only multiplies the forces of the evil one.", bundle: 'pro' },
        { q: "What is the biblical foundation of Overcoming With Good?", a: "Romans 12:20 — if your enemy is hungry, feed him; if he is thirsty, give him a drink.", bundle: 'pro' },
      ]
    },
    {
      name: "Collections",
      description: "The three collections in this pack, and what each one makes you choose between:\n\n• Friction in the Ranks — Direct Confrontation, Pursuing Peace or Sorting Responsibilities\n• Fending Off Attacks — Overcoming With Good or Pursuing Peace\n• The Conflict Resolution Set — everything mixed\n\nOne question decides: what did the other person just do?",
      cards: [
        { q: "What is the purpose of the Collections mode?", a: "To train you to choose the right relational strategy when several might seem to fit.", bundle: 'pro' },
        { q: "What does \"Friction in the Ranks\" choose between?", a: "Direct Confrontation (for rumors), Pursuing Peace (for broken bonds), and Sorting Responsibilities (for blame-shifting).", bundle: 'pro' },
        { q: "What does \"Fending Off Attacks\" choose between?", a: "Overcoming With Good (for active service) and Pursuing Peace (for a soft answer).", bundle: 'pro' },
        { q: "What deciding question separates Sorting Responsibilities and Pursuing Peace?", a: "Are you addressing your own failure first, or are you offering a path to stop the argument?", bundle: 'pro' },
        { q: "What decides between Overcoming With Good and Pursuing Peace?", a: "Do they need an immediate soft answer, or a practical service to break their hostility?", bundle: 'pro' },
        { q: "Why do we tag all Collections cards as pro?", a: "Because Collections is a pro-only training mode that is closed for free users.", bundle: 'pro' },
        { q: "How many collections are in this pack?", a: "Three collections, ranging from specific rank friction to the full set.", bundle: 'pro' },
        { q: "Where does the theory for each collection choice live?", a: "In the descriptions of the individual strategies in Single Strategy.", bundle: 'pro' },
      ]
    },
    {
      name: "Sequences",
      description: "The three sequences in this pack, and the order each one insists on:\n\n• The Matthew 18 Process — Direct Confrontation → Direct Confrontation → Direct Confrontation\n• Attacking the Problem — Sorting Responsibilities → Pursuing Peace → Overcoming With Good\n• Opposing Hypocrisy — Direct Confrontation → Pursuing Peace → Overcoming With Good\n\nIn each one the order is doing the work, not the individual strategies.",
      cards: [
        { q: "What is the purpose of the Sequences mode?", a: "To train you in the step-by-step order of biblical conflict resolution over several weeks.", bundle: 'pro' },
        { q: "What is the order of steps in \"The Matthew 18 Process\"?", a: "Direct Confrontation (privately) → Direct Confrontation (with witnesses) → Direct Confrontation (church elders).", bundle: 'pro' },
        { q: "Why do we keep the first step of Matthew 18 strictly private?", a: "To protect our brother's reputation and win him back without involving others.", bundle: 'pro' },
        { q: "What is the order of steps in \"Attacking the Problem\"?", a: "Sorting Responsibilities (own your part) → Pursuing Peace (soft answer) → Overcoming With Good (active service).", bundle: 'pro' },
        { q: "Why must we sort responsibilities before we pursue peace?", a: "Because we cannot build a bridge of peace while we are still pointing fingers and shifting blame.", bundle: 'pro' },
        { q: "What is the order of steps in \"Opposing Hypocrisy\"?", a: "Direct Confrontation (oppose the sin) → Pursuing Peace (soft path back) → Overcoming With Good (practical reconciliation).", bundle: 'pro' },
        { q: "Why do the step fronts in these Sequences contain time gaps?", a: "Because the steps are weeks apart in the members' lives, not turns in one conversation.", bundle: 'pro' },
        { q: "How do we write the steps of a Sequence?", a: "Each step front must name the strategy and give a concrete stimulus to react to.", bundle: 'pro' },
      ]
    },
    {
      name: "Challenges",
      description: "The five challenges to master in this pack:\n\n• The Marriage Wall — roommates or couples trapped in blameshifting\n• The Gossip Trap — members dumping rumors in your lap\n• Active Hostility — opponents throwing verbal digs\n• Refused Peace — when your apology is rejected\n• The Neutrality Escape — the temptation to stay silent during sin\n\nEach challenge represents a common relational barrier in the church.",
      cards: [
        { q: "What is the purpose of the Challenges mode?", a: "To train you to recognize and categorize common conflict scenarios from the outside.", bundle: 'pro' },
        { q: "What is the specific miss in \"The Marriage Wall\"?", a: "Focusing on the other person's failure or agreeing with their blame instead of owning your own part.", bundle: 'pro' },
        { q: "What is the specific miss in \"The Gossip Trap\"?", a: "Listening to negative stories or \"prayer requests\" about someone who is not in the room.", bundle: 'pro' },
        { q: "What are the biting strategies in \"Active Hostility\"?", a: "Overcoming With Good (to serve them) and Pursuing Peace (to stop the fight).", bundle: 'pro' },
        { q: "What must we avoid in \"Refused Peace\"?", a: "Allowing their rejection of your apology to produce bitterness in your own heart.", bundle: 'pro' },
        { q: "What does \"The Neutrality Escape\" train you to do?", a: "To put off passive silence and take the active responsibility to confront sin and make peace.", bundle: 'pro' },
        { q: "Why must every Challenge card show the strategy name in brackets?", a: "So the user can see exactly which biblical move solved that specific scenario.", bundle: 'pro' },
        { q: "How many challenges are in this pack?", a: "Five distinct categories of relational friction.", bundle: 'pro' },
      ]
    },
    {
      name: "Mindset",
      description: "The four mindsets you practise in this pack:\n\n• Blame — my reaction is my responsibility, regardless of their actions\n• Gossip — direct face-to-face speech mends what rumors destroy\n• Neutrality — passive silence during sin is a betrayal of love\n• Retaliation — we conquer hostility with active, aggressive goodness\n\nThe battle inside our own hearts is what decides whether we can build peace.",
      cards: [
        { q: "What is the purpose of the Mindset mode?", a: "To train you to identify and reset the limiting thoughts that stop your peacemaking.", bundle: 'pro' },
        { q: "What is the limiting thought behind \"Blame\"?", a: "\"My reactions are justified because she treated me so unfairly first.\"", bundle: 'pro' },
        { q: "What is the reset for \"Gossip\"?", a: "Talking behind someone's back is sin, even if the rumors are completely true. Talk to them, not about them.", bundle: 'pro' },
        { q: "What is the cost of avoiding conflict in \"Neutrality\"?", a: "Our brother stays trapped under his sin, and the church's witness is ruined.", bundle: 'pro' },
        { q: "Why is \"Retaliation\" a spiritual failure?", a: "It multiplies the evil instead of conquering it. We must use the powerful weapons of goodness.", bundle: 'pro' },
        { q: "What is the limiting thought behind \"Retaliation\"?", a: "\"Being nice to an active enemy is just fake, weak, and hypocritical.\"", bundle: 'pro' },
        { q: "Why is a clear confrontation a sign of love?", a: "Because leaving a brother caught in a trespass is hatred; mending him is genuine care.", bundle: 'pro' },
        { q: "Why are Mindset cards written as self-talk in the first person?", a: "To help you identify the subtle excuses your own heart makes under relational pressure.", bundle: 'pro' },
      ]
    },
  ],
};
