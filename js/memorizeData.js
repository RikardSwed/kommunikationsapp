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
  firststrategies: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The shape of the pack: six strategies that between them make a whole small conversation.",
      cards: [
        { q: "What are the six strategies in this pack?", a: "Opening Statement, Follow the Thread, Say It Back, Ask Plainly, A Friendly No, Answer With a Hook.", bundle: 'free' },
        { q: "What is the arc the six make together?", a: "Open, keep it going, listen, ask, decline, and share something back.", bundle: 'free' },
        { q: "Which two are for when nothing has been said yet?", a: "Opening Statement and Ask Plainly.", bundle: 'free' },
        { q: "What decides which strategy to use?", a: "What the other person just did — told you something, asked you for something, or asked about you.", bundle: 'pro' },
        { q: "What do all six have in common?", a: "They are short, and they all end by leaving the other person a turn.", bundle: 'pro' },
      ]
    },
    {
      name: "Opening Statement",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Opening with a remark instead of a question.",
      cards: [
        { q: "What is an opening statement?", a: "A remark rather than a question — something the other person can pick up or let go.", bundle: 'free' },
        { q: "Why does a statement open more conversations than a question?", a: "A question makes them work; a statement hands them material.", bundle: 'free' },
        { q: "What are the three kinds?", a: "Something you are both looking at, something about you right now, and a small opinion.", bundle: 'free' },
        { q: "Why is an unanswered statement better than an unanswered question?", a: "Silence after a remark is nothing. Silence after a question is awkward for both of you.", bundle: 'pro' },
        { q: "Which kind invites the most, and which risks the most?", a: "The small opinion — it is the same one.", bundle: 'pro' },
      ]
    },
    {
      name: "Follow the Thread",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Using what they just said instead of finding something new.",
      cards: [
        { q: "What does following the thread mean?", a: "Taking one word or detail out of what they just said and going into it.", bundle: 'free' },
        { q: "What problem does it solve?", a: "Having nothing to say next — they have already given you three things.", bundle: 'free' },
        { q: "What are the three threads worth pulling?", a: "The concrete detail, the odd word that carries feeling, and the thing they skipped past.", bundle: 'free' },
        { q: "Why do conversations stall?", a: "Both people go looking for a new subject while a perfectly good one is lying between them.", bundle: 'pro' },
        { q: "Does the thread have to come from the last sentence?", a: "No. Anything from the last ten minutes is still open, and going back reads as interest.", bundle: 'pro' },
      ]
    },
    {
      name: "Say It Back",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Repeating what you understood before you answer.",
      cards: [
        { q: "What is the move?", a: "Say back what you understood, in your own words, before you answer.", bundle: 'free' },
        { q: "What two things does it do at once?", a: "Proves you were listening, and buys you a few seconds to think.", bundle: 'free' },
        { q: "Why in your own words rather than theirs?", a: "Repeating their sentence sounds like a technique. Rewording it proves you understood.", bundle: 'free' },
        { q: "What does it catch?", a: "The times you had it wrong — before that costs anyone an evening.", bundle: 'pro' },
        { q: "When is it most worth doing?", a: "When the thing is complicated, upsetting, or about to be disagreed with.", bundle: 'pro' },
      ]
    },
    {
      name: "Ask Plainly",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Making a request without the run-up.",
      cards: [
        { q: "What is the shape of a plain ask?", a: "One specific sentence, put as a question, and then stop.", bundle: 'free' },
        { q: "What actually makes a request awkward?", a: "The run-up. The apology before it tells them you think you are imposing.", bundle: 'free' },
        { q: "Why stop talking afterwards?", a: "The reasons you add turn a question into a case that can be argued with.", bundle: 'free' },
        { q: "What is the difference between a hint and a request?", a: "\"Are you around Thursday?\" is a hint. \"Could you take Thursday?\" is a request.", bundle: 'pro' },
        { q: "Why does being specific matter?", a: "A vague ask is hard to say yes to. Say what, and say when.", bundle: 'pro' },
      ]
    },
    {
      name: "A Friendly No",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Declining clearly without a pile of reasons.",
      cards: [
        { q: "What are the three parts of a friendly no?", a: "Something warm, the actual no, and at most one reason.", bundle: 'free' },
        { q: "What is the rule about softening?", a: "Soften the delivery, never the answer.", bundle: 'free' },
        { q: "Why is \"maybe\" worse than \"no\"?", a: "It feels kinder and costs the other person a week of waiting.", bundle: 'free' },
        { q: "Why are reasons a trap?", a: "Every reason is something they can solve — and then you are negotiating a decision you had already made.", bundle: 'pro' },
        { q: "What does a clear no give the other person?", a: "The chance to ask someone else today.", bundle: 'pro' },
      ]
    },
    {
      name: "Answer With a Hook",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Answering about yourself so there is somewhere to go next.",
      cards: [
        { q: "What is a hook?", a: "One extra detail in your answer that the other person can ask about.", bundle: 'free' },
        { q: "What is wrong with \"fine\"?", a: "It leaves them with nothing, so they have to invent another question.", bundle: 'free' },
        { q: "What are the three sizes of hook?", a: "One extra detail, a small complaint or oddity, and something you actually care about.", bundle: 'free' },
        { q: "What do people usually mean when they say they are bad at small talk?", a: "They are good at asking and empty at answering, so the conversation runs on their questions until they run out.", bundle: 'pro' },
        { q: "Is the point to be interesting?", a: "No. The point is to leave a door open.", bundle: 'pro' },
      ]
    },
  ],
  startingconversations1: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The shape of the pack: four openers that work anywhere, and the judgements about when to use which.",
      cards: [
        { q: "What are the four openers in this pack?", a: "Simple greeting, introduce yourself, comment on the situation, ask about the situation.", bundle: 'free' },
        { q: "What do all four have in common?", a: "They need no courage and nothing known about the other person.", bundle: 'free' },
        { q: "What is the one thing you are guaranteed to share with a stranger?", a: "The situation you are both in.", bundle: 'free' },
        { q: "Which opener asks the least of the other person?", a: "A comment — they can nod and that is the end of it.", bundle: 'pro' },
        { q: "Which opener gets words back most reliably?", a: "A question about the situation.", bundle: 'pro' },
        { q: "What does the pack say a short reply means?", a: "Very little. One flat reply means nothing; two means something.", bundle: 'pro' },
      ]
    },
    {
      name: "Simple Greeting",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The smallest opener there is.",
      cards: [
        { q: "What is a greeting actually doing?", a: "Signalling that you are willing to talk, and leaving the next move to them.", bundle: 'free' },
        { q: "Name two ways to greet.", a: "Any two of: the plain greeting, greeting plus their name, the ritual question, greeting plus a small hook.", bundle: 'free' },
        { q: "What does adding their name cost, and what does it buy?", a: "One word, and considerably more warmth.", bundle: 'free' },
        { q: "What is the mindset line for this move?", a: "A greeting is an offer, not a demand — a nod back is a complete outcome.", bundle: 'pro' },
        { q: "What is a \"small hook\"?", a: "One extra clause they can answer if they want to — \"busy in here today\".", bundle: 'pro' },
        { q: "When is \"how are you\" not a real question?", a: "When it is used as a greeting — expect \"fine, you?\" and treat that as the door opening.", bundle: 'pro' },
      ]
    },
    {
      name: "Introduce Yourself",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The opener that turns a stranger into someone you have met.",
      cards: [
        { q: "What does introducing yourself do that other openers do not?", a: "It makes the second conversation easy, because there is no first one left to get through.", bundle: 'free' },
        { q: "What should you add to your name, and why?", a: "A small piece of context, so they have something to reply to besides their own name.", bundle: 'free' },
        { q: "When should you do it?", a: "Early. Introducing yourself after twenty minutes of talking is far more awkward.", bundle: 'free' },
        { q: "Name two ways to introduce yourself.", a: "Any two of: name only, name plus your connection to the room, name plus a reason you are talking to them, naming that you have not met.", bundle: 'pro' },
        { q: "What obstacle does saying your name remove?", a: "Not knowing whether you are allowed to talk — it answers that for both of you.", bundle: 'pro' },
        { q: "How do you handle having left it far too long?", a: "Name the delay lightly. It usually lands as funny rather than awkward.", bundle: 'pro' },
      ]
    },
    {
      name: "Comment on the Situation",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The lowest-pressure opener with a stranger.",
      cards: [
        { q: "Why is a comment lower pressure than a question?", a: "It does not require an answer, so they can opt out with no awkwardness.", bundle: 'free' },
        { q: "Name two ways to comment on the situation.", a: "Any two of: state what you both see, react to it, wonder out loud, compare it to before.", bundle: 'free' },
        { q: "Does the comment have to be interesting?", a: "No. It has to be shared.", bundle: 'free' },
        { q: "What does \"wonder out loud\" achieve?", a: "It invites an answer without asking for one.", bundle: 'pro' },
        { q: "When should you comment rather than ask?", a: "When they look busy, closed off or absorbed — it lets them decide.", bundle: 'pro' },
        { q: "What is the most common reason people do not use this opener?", a: "They reject their own line for being too obvious, which is exactly why it works.", bundle: 'pro' },
      ]
    },
    {
      name: "Ask About the Situation",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The question form, and the highest reply rate in the pack.",
      cards: [
        { q: "Why does this opener get the most words back?", a: "A comment can be met with a nod; a question almost always gets words.", bundle: 'free' },
        { q: "Name two ways to ask about the situation.", a: "Any two of: practical information, whether they have been here before, how something works, checking your own assumption.", bundle: 'free' },
        { q: "Why does asking how something works help?", a: "It invites them to be helpful, which is an easy role to be given.", bundle: 'free' },
        { q: "What is the mindset line for this move?", a: "Ask the question you actually want answered — people hear the difference.", bundle: 'pro' },
        { q: "What do you use when a first opener fell flat?", a: "Usually a question about the situation, because it needs more than a word.", bundle: 'pro' },
        { q: "Which question opens the door widest?", a: "Whether this is their first time — the answer leads somewhere either way.", bundle: 'pro' },
      ]
    },
  ],
  showunderstanding: [
    {
      name: "Core Idea",
      description: "The concept behind showing understanding and the three moves.",
      cards: [
        { q: "What is the goal of showing understanding?", a: "Actively demonstrating that you followed what someone said — not just listening quietly.", bundle: 'free' },
        { q: "What are the three moves in this pack?", a: "Ask Follow-up Questions, Loop Back or Rephrase, Relate Through Sharing.", bundle: 'free' },
        { q: "How many should you use at once?", a: "One. Stacking them makes the response about you managing the conversation.", bundle: 'free' },
        { q: "Is understanding the same as agreeing?", a: "No. You can fully understand someone and disagree with them a minute later.", bundle: 'free' },
        { q: "What is the safe order for something difficult?", a: "Loop first, ask second, relate last. Most people do it backwards.", bundle: 'pro' },
        { q: "What is the most common mistake?", a: "Relating too early — bringing in your own version before they've finished being heard.", bundle: 'pro' },
        { q: "What matters more than the technique?", a: "Actually being interested. The formulas are identical whether or not anyone's paying attention.", bundle: 'pro' },
      ]
    },
    {
      name: "Ask Follow-up Questions",
      description: "The theory behind asking for more.",
      cards: [
        { q: "What is Ask Follow-up Questions?", a: "Asking something that could only come from someone who was listening to that particular sentence.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"Can you tell me more about that?\" / \"What were you feeling at that moment?\"", bundle: 'free' },
        { q: "When is it the right move?", a: "When the story isn't finished. Asking keeps them going.", bundle: 'free' },
        { q: "What are the three kinds of follow-up?", a: "Ask for more of the same, ask about the moment, or ask what came next.", bundle: 'pro' },
        { q: "What is the failure mode?", a: "Aiming at the topic instead of the specific thing — that's a subject change, not a follow-up.", bundle: 'pro' },
      ]
    },
    {
      name: "Loop Back or Rephrase",
      description: "The theory behind reflecting their point back.",
      cards: [
        { q: "What is Loop Back or Rephrase?", a: "Saying their point back in your own words, so they can hear that it arrived — or correct you.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"So what you're saying is…\" / \"I hear that you felt frustrated when that happened.\"", bundle: 'free' },
        { q: "Why your own words rather than theirs?", a: "Repeating their exact sentence is parroting. Rephrasing proves the idea went in.", bundle: 'free' },
        { q: "What are the three kinds of loop?", a: "The summary, the feeling named, or the check.", bundle: 'pro' },
        { q: "What is the failure mode?", a: "Sounding mechanical — \"so what I'm hearing is\" in a voice you'd never otherwise use.", bundle: 'pro' },
      ]
    },
    {
      name: "Relate Through Sharing",
      description: "The theory behind bringing yourself in.",
      cards: [
        { q: "What is Relate Through Sharing?", a: "Offering something of your own — a time you felt, thought or wanted the same thing.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"I know exactly what you mean, something similar happened to me…\"", bundle: 'free' },
        { q: "How long should it be?", a: "Two sentences, then hand it back. Anything with a middle is a story, and stories take the floor.", bundle: 'free' },
        { q: "What are the three ways to relate?", a: "The matching experience, the matching feeling, or the matching value.", bundle: 'pro' },
        { q: "What turns it from relating into competing?", a: "\"The same thing happened to me but worse.\" Connection, not comparison.", bundle: 'pro' },
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
  changingtopics: [
    {
      name: "Core Idea",
      description: "The concept behind changing topics and the full set of moves.",
      cards: [
        { q: "What is the goal when changing topics?", a: "To move the conversation somewhere better without it feeling abrupt or dismissive — steering, not hijacking.", bundle: 'free' },
        { q: "What are the six moves for changing topics?", a: "Linking, Acknowledge and Redirect, Finding Common Ground, Random or Light Switch, Steering Away from Sensitive, Respectful Exit.", bundle: 'free' },
        { q: "What's the golden rule that stops a switch feeling rude?", a: "Acknowledge the current topic briefly before you move — even one line (\"that's interesting, thanks\") softens the change.", bundle: 'free' },
        { q: "How do you pick which move to use?", a: "Detail to catch → Linking; you relate → Common Ground; topic done → Redirect; over-covered → Exit; stale/safe → Light Switch; sensitive → Steer.", bundle: 'pro' },
        { q: "What's the through-line of all six moves?", a: "You guide the conversation somewhere better without making the other person feel dismissed.", bundle: 'pro' },
      ]
    },
    {
      name: "Linking",
      description: "The theory behind bridging off what they just said.",
      cards: [
        { q: "What is Linking?", a: "Catching a word or detail from what they said and using it as a bridge to a new topic.", bundle: 'free' },
        { q: "When does it fit best?", a: "When there's a handy detail to pivot off, so the switch grows out of their own words.", bundle: 'free' },
        { q: "How is Linking different from Finding Common Ground?", a: "Linking pivots off a word they said; Common Ground shares a matching experience of your own first.", bundle: 'pro' },
      ]
    },
    {
      name: "Acknowledge and Redirect",
      description: "The theory behind wrapping the old topic and opening a new one.",
      cards: [
        { q: "What is Acknowledge and Redirect?", a: "Briefly wrapping up the current topic (\"that's interesting, thanks\"), then introducing a new one.", bundle: 'free' },
        { q: "When does it fit best?", a: "When a topic is simply finished and you want a clean move to something else.", bundle: 'free' },
        { q: "Why acknowledge before redirecting?", a: "The brief wrap stops the switch feeling abrupt — it signals you valued what they said.", bundle: 'pro' },
      ]
    },
    {
      name: "Finding Common Ground",
      description: "The theory behind relating your own experience to open a new direction.",
      cards: [
        { q: "What is Finding Common Ground?", a: "Using a shared experience as a stepping stone — \"that's like when I…\" — then opening the new direction.", bundle: 'free' },
        { q: "When does it fit best?", a: "When you genuinely relate to what they said and want to warm things up before switching.", bundle: 'free' },
        { q: "What's the risk with this move?", a: "Making it about you — relate briefly, then turn it back to them with a question.", bundle: 'pro' },
      ]
    },
    {
      name: "Random or Light Switch",
      description: "The theory behind the open, playful subject change.",
      cards: [
        { q: "What is a Random or Light Switch?", a: "Changing the subject openly with humour or spontaneity — no bridge needed, just flag it and keep it light.", bundle: 'free' },
        { q: "When does it fit best?", a: "When the mood is stale or heavy and it's safe to be playful — and when there's nothing to bridge from.", bundle: 'free' },
        { q: "Why flag the switch out loud?", a: "Naming it (\"okay, random question—\") makes an abrupt change feel light and intentional rather than jarring.", bundle: 'pro' },
      ]
    },
    {
      name: "Steering Away from Sensitive",
      description: "The theory behind gently guiding away from an uncomfortable subject.",
      cards: [
        { q: "What is Steering Away from Sensitive?", a: "Acknowledging an uncomfortable subject briefly, then gently guiding toward safer ground.", bundle: 'free' },
        { q: "When should you Steer rather than use a Light Switch?", a: "When the subject is genuinely sensitive and someone's uncomfortable — a joke would feel careless.", bundle: 'free' },
        { q: "What's the shape of the move?", a: "A brief, warm acknowledgement (\"that sounds hard\") + a gentle turn to something lighter — never ignore, never dig in.", bundle: 'pro' },
      ]
    },
    {
      name: "Respectful Exit",
      description: "The theory behind closing an exhausted topic and moving on.",
      cards: [
        { q: "What is a Respectful Exit?", a: "Closing a topic politely when it's been covered or keeps repeating — signal you valued it, then open something new.", bundle: 'free' },
        { q: "When does it fit best?", a: "When a topic has been covered fully or keeps returning — the over-stayed topic, not the merely finished one.", bundle: 'free' },
        { q: "What do you do if your switch gets ignored?", a: "Don't repeat the same move — try a clearer one, often a warm Respectful Exit that names that the topic's done.", bundle: 'pro' },
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
  exploringatopic: [
    {
      name: "Core Idea",
      description: "The concept behind exploring a topic and the full set of moves.",
      cards: [
        { q: "What is the goal when exploring a topic?", a: "Keep the conversation inside one subject while making it richer — contribute, ask, and expand without jumping away.", bundle: 'free' },
        { q: "What are the five moves in this pack?", a: "Ask an Open Question, Share a Related Experience, Build on Their Point, Expand to a Related Subtopic, Share Then Invite.", bundle: 'free' },
        { q: "What does a good group conversation need?", a: "Staying on topic, contributing your own bit, asking questions, and expanding into closely related areas.", bundle: 'free' },
        { q: "What is the difference between expanding and changing the subject?", a: "Expanding stays close — gardening to indoor plants. Changing leaves the topic behind.", bundle: 'free' },
        { q: "How do you know whether to deepen or widen?", a: "Deepen while the thread still has life in it; widen when the answers get short and the energy drops.", bundle: 'pro' },
        { q: "What is the most common mistake in a group conversation?", a: "Jumping to a new topic too early, before the current one has actually been used up.", bundle: 'pro' },
        { q: "What do you do when you know nothing about the topic?", a: "Ask. A question is a full contribution, and people enjoy explaining what they're into.", bundle: 'pro' },
      ]
    },
    {
      name: "Ask an Open Question",
      description: "The theory behind the question that cannot be answered with yes or no.",
      cards: [
        { q: "What is an open question?", a: "One that can't be answered with yes or no — a what, how or why about the subject in hand.", bundle: 'free' },
        { q: "Why is it useful when you know nothing about the topic?", a: "It lets you take part without any knowledge, and gives the group more to work with.", bundle: 'free' },
        { q: "What do open questions sound like?", a: "\"What do you usually grow?\" or \"How long have you been into that?\" or \"Why do you like it?\"", bundle: 'free' },
        { q: "What is the failure mode?", a: "Questions so wide nobody knows where to start, like \"what do you think about music?\"", bundle: 'pro' },
        { q: "When is an open question the wrong move?", a: "When you've asked three in a row and it's turning into an interview — share something instead.", bundle: 'pro' },
      ]
    },
    {
      name: "Share a Related Experience",
      description: "The theory behind putting your own piece into the topic.",
      cards: [
        { q: "What is Share a Related Experience?", a: "Adding your own story, habit or opinion from inside the same topic.", bundle: 'free' },
        { q: "How related does it have to be?", a: "Close enough that it feels like the same conversation — herbs on a windowsill for a gardening topic.", bundle: 'free' },
        { q: "Why does sharing matter in a group?", a: "A conversation of pure questions turns into an interview. Your piece gives others something to react to.", bundle: 'free' },
        { q: "What is the failure mode?", a: "The story that quietly tops theirs, or one so long that the topic becomes yours.", bundle: 'pro' },
        { q: "How is it different from Share, Then Invite?", a: "Sharing adds your piece. Share, Then Invite adds it and hands the floor straight on.", bundle: 'pro' },
      ]
    },
    {
      name: "Build on Their Point",
      description: "The theory behind going one layer down instead of starting something new.",
      cards: [
        { q: "What is Build on Their Point?", a: "Taking what someone just said and going one step further into it, instead of starting something new.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"You mentioned vegetables — have you tried tomatoes?\" or \"That's interesting, it reminds me of…\"", bundle: 'free' },
        { q: "Why does it keep a topic alive?", a: "It shows you listened, and it gives the speaker a reason to say more.", bundle: 'free' },
        { q: "How do you find the next layer?", a: "Pick one word from their sentence and ask about that — \"you said most, what never works?\"", bundle: 'pro' },
        { q: "What is the failure mode?", a: "Using their point as a launchpad for your own subject. That's changing topic, not building.", bundle: 'pro' },
      ]
    },
    {
      name: "Expand to a Related Subtopic",
      description: "The theory behind the sideways step that keeps you inside the topic.",
      cards: [
        { q: "What is Expand to a Related Subtopic?", a: "Stepping sideways into something close by when the current thread runs out.", bundle: 'free' },
        { q: "What does a good expansion look like?", a: "Gardening to indoor plants to plants at the office. Sport to team sport to watching versus playing.", bundle: 'free' },
        { q: "When do you use it?", a: "When answers get short and the energy drops, but nobody actually wants to leave the topic.", bundle: 'free' },
        { q: "How far is too far?", a: "If people have to stop and ask what you're talking about, it wasn't an expansion — it was a new topic.", bundle: 'pro' },
        { q: "What is the safest kind of expansion?", a: "One that keeps the subject but changes the angle — doing it versus watching it, home versus work.", bundle: 'pro' },
      ]
    },
    {
      name: "Share, Then Invite",
      description: "The theory behind the balance move — your bit, then theirs.",
      cards: [
        { q: "What is Share, Then Invite?", a: "Saying your own bit and then handing the floor straight on with a question.", bundle: 'free' },
        { q: "What does it sound like?", a: "\"I love cooking Italian food. What's your favourite thing to cook?\"", bundle: 'free' },
        { q: "What problem does it solve?", a: "Talking too much, and leaving quiet people out. It fixes both in one move.", bundle: 'free' },
        { q: "Who should you hand it to?", a: "Whoever hasn't spoken, if there is someone. Using their name makes it easy to answer.", bundle: 'pro' },
        { q: "What is the failure mode?", a: "Putting someone on the spot with a big question. Keep the invitation easy to answer.", bundle: 'pro' },
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
  talkingaboutyourself: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The shape of the pack: what to do when the attention lands on you.",
      cards: [
        { q: "What are the seven strategies in this pack?", a: "Give a Detail, Match What They Gave, Say the Small True Thing, Answer What They Are Really Asking, Name What You Are Into, Keep Something Back, Hand It Back.", bundle: 'free' },
        { q: "What are the two ways answering goes wrong?", a: "Giving too little, which puts the whole conversation on them. And giving too much too soon, which outruns what they offered.", bundle: 'free' },
        { q: "What is the mistake underneath both?", a: "Reading the question as a test of how interesting you are, rather than as an invitation to be known.", bundle: 'free' },
        { q: "What does the rest of the app teach that this pack answers?", a: "Everything else teaches asking. This is the half where the question comes back to you.", bundle: 'pro' },
        { q: "What is the useful question when you are unsure which strategy to use?", a: "What would my answer leave them with?", bundle: 'pro' },
      ]
    },
    {
      name: "Give a Detail",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The closed answer, plus one concrete thing.",
      cards: [
        { q: "What is the move?", a: "Answer the question, then add one concrete detail they could ask about.", bundle: 'free' },
        { q: "Why is a closed answer a problem?", a: "They asked in order to have a conversation, and now they must invent a new question with nothing to build on.", bundle: 'free' },
        { q: "What are the three details that always work?", a: "The concrete thing, the small mishap, and the odd contrast.", bundle: 'free' },
        { q: "Does the detail have to be interesting?", a: "No. It is a handle, not a performance — and trying to make it interesting is what stops people using it.", bundle: 'pro' },
        { q: "What happens after two closed answers?", a: "Most people conclude you would rather not talk, which is almost never what you meant.", bundle: 'pro' },
      ]
    },
    {
      name: "Match What They Gave",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Reading the size of the moment.",
      cards: [
        { q: "What is the rule?", a: "Answer at roughly the depth they offered — one step, taken after they take theirs.", bundle: 'free' },
        { q: "What are the three sizes to read?", a: "The polite question, the real question, and the disclosure.", bundle: 'free' },
        { q: "Which direction is the worse mistake?", a: "Going too deep too early. It is a step nobody offered to take.", bundle: 'free' },
        { q: "What does a light answer tell someone who has just shared something real?", a: "That it was not safe. They will close the subject and be pleasant for the rest of the evening.", bundle: 'pro' },
        { q: "Does matching always mean disclosing something of your own?", a: "No. Saying plainly that you are listening rather than trading is also a match.", bundle: 'pro' },
      ]
    },
    {
      name: "Say the Small True Thing",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "True and specific instead of impressive.",
      cards: [
        { q: "What is the standard for a good answer?", a: "True and specific. Not interesting.", bundle: 'free' },
        { q: "Why do people stall on \"what have you been up to\"?", a: "They are searching for something worth reporting, and there is nothing to find because that was never the standard.", bundle: 'free' },
        { q: "What does \"not much\" reveal?", a: "Nothing. \"Repainting a wardrobe badly\" reveals a person.", bundle: 'free' },
        { q: "How do you say a genuinely hard thing without making it heavy?", a: "Plainly and without the full weight, so they can decide whether to go there.", bundle: 'pro' },
        { q: "Why does the mildly embarrassing answer work so well?", a: "It costs nothing and buys a lot of warmth.", bundle: 'pro' },
      ]
    },
    {
      name: "Answer What They Are Really Asking",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The version that is about you, not the official one.",
      cards: [
        { q: "What is \"what do you do?\" actually asking?", a: "What your days are like, and whether there is anything in there worth talking about.", bundle: 'free' },
        { q: "Why is a job title a bad answer?", a: "It tells them what to call you and nothing else, and it is very hard to ask a follow-up about.", bundle: 'free' },
        { q: "What are the three ways to give the real answer?", a: "Add what it is actually like, give the part you find interesting, or answer the person rather than the form.", bundle: 'free' },
        { q: "What is \"where are you from?\" really asking?", a: "What shaped you.", bundle: 'pro' },
        { q: "What if you would rather not lead with your job at all?", a: "Fine — as long as you hand them something else to hold.", bundle: 'pro' },
      ]
    },
    {
      name: "Name What You Are Into",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Enthusiasm without the lecture.",
      cards: [
        { q: "What are the three parts?", a: "Name it without apologising, give one line, then stop.", bundle: 'free' },
        { q: "Why is stopping the discipline?", a: "What people fear is not the enthusiasm, it is the lecture. Those are different things.", bundle: 'free' },
        { q: "What does an apology in front of it do?", a: "Tells the other person this is not something to ask about.", bundle: 'free' },
        { q: "What is the most attractive thing most people hide?", a: "What they are actually enthusiastic about.", bundle: 'pro' },
        { q: "When do you get to say the rest?", a: "When they ask — and then you have an audience that wants it.", bundle: 'pro' },
      ]
    },
    {
      name: "Keep Something Back",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Answering without opening the whole subject.",
      cards: [
        { q: "What are the two bad options this replaces?", a: "Stonewalling, which makes it enormous, and answering fully when you did not want to.", bundle: 'free' },
        { q: "What are the three ways to keep it?", a: "The short version, naming the boundary warmly, or moving it rather than closing it.", bundle: 'free' },
        { q: "Why does a partial answer land well?", a: "You gave them something rather than nothing, so the door closes without anyone feeling they trod on something.", bundle: 'free' },
        { q: "What stops the gap becoming the story?", a: "Filling it with something else true about you.", bundle: 'pro' },
        { q: "What if it is someone with authority over you?", a: "\"I'd rather keep that outside work\" is a complete sentence. If it is not respected, that is information about them.", bundle: 'pro' },
      ]
    },
    {
      name: "Hand It Back",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Turning the attention around, and when.",
      cards: [
        { q: "What is the rule?", a: "Answer first, with something real. Then hand it over.", bundle: 'free' },
        { q: "What is wrong with handing it back immediately?", a: "It looks like interest and works like a shield — they learn nothing about you and do all the work.", bundle: 'free' },
        { q: "What are the three good moments?", a: "After a real answer, into a thread they gave you, or when you have been talking a while.", bundle: 'free' },
        { q: "What happens if you only ever hand it back?", a: "They stop asking, and the conversation becomes an interview with you as the interviewer.", bundle: 'pro' },
        { q: "How do you fix it once you have noticed?", a: "Say so and go first. \"You've told me loads and I've told you nothing.\"", bundle: 'pro' },
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
};
