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
  complimenting: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The shape of the pack: what a compliment is for, and the two ways it fails.",
      cards: [
        { q: "What are the seven strategies in this pack?", a: "Name What You Noticed, Compliment the Choice Not the Luck, Say Why It Landed, Say the Bigger One, Say It Where It Counts, Take a Compliment, Answer It Don't Return It.", bundle: 'free' },
        { q: "What is a compliment, in one line?", a: "Information the other person does not have — nobody sees themselves from outside.", bundle: 'free' },
        { q: "What are the two ways a compliment fails?", a: "Too vague to be believed, or too much to be received.", bundle: 'free' },
        { q: "Which two strategies are about receiving?", a: "Take a Compliment, and Answer It Don't Return It.", bundle: 'pro' },
        { q: "What does this pack own that Praise and Encouragement does not?", a: "That one is performance feedback at work. This is about the person, in ordinary life, with no agenda underneath.", bundle: 'pro' },
      ]
    },
    {
      name: "Name What You Noticed",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Specific rather than general.",
      cards: [
        { q: "What is the move?", a: "Say the specific thing you saw, not the category it belongs to.", bundle: 'free' },
        { q: "Why does specific beat general?", a: "General praise could have been said by someone who wasn't paying attention. The detail proves you were.", bundle: 'free' },
        { q: "What are the three things worth naming?", a: "A moment, a choice, or a pattern.", bundle: 'free' },
        { q: "Why is a specific compliment easier to say?", a: "It's a small factual sentence. \"You're amazing\" is a claim you then have to defend.", bundle: 'pro' },
        { q: "What if the detail feels too small to mention?", a: "Say it anyway. Small and specific is exactly what lands.", bundle: 'pro' },
      ]
    },
    {
      name: "Compliment the Choice, Not the Luck",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Praising what they can take credit for.",
      cards: [
        { q: "What is the rule?", a: "Praise what they did or chose, not what they were handed.", bundle: 'free' },
        { q: "Why does a compliment about luck land badly?", a: "There's nothing to be proud of and nothing to say back.", bundle: 'free' },
        { q: "What are the three kinds of choice?", a: "What they picked, what they practised, and what they decided.", bundle: 'free' },
        { q: "How does this solve complimenting appearance?", a: "The clothes and the haircut are decisions and are fair game. The body underneath is not.", bundle: 'pro' },
        { q: "They say it was nothing, they just threw it on.", a: "\"You still chose it. That counts.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Say Why It Landed",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Reporting the effect.",
      cards: [
        { q: "What do you add?", a: "What it did to you — the part they cannot see.", bundle: 'free' },
        { q: "Why is the effect unarguable?", a: "They can wave away \"that was brilliant\". They cannot wave away what you told someone else that evening.", bundle: 'free' },
        { q: "What are the three effects worth reporting?", a: "What you did differently, what you felt, and what you told someone else.", bundle: 'free' },
        { q: "Which of the three is strongest?", a: "What you did differently — it is proof rather than opinion.", bundle: 'pro' },
        { q: "Can it be said months late?", a: "Yes. \"This is very overdue\" is the whole fix.", bundle: 'pro' },
      ]
    },
    {
      name: "Say the Bigger One",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The compliment about who they are.",
      cards: [
        { q: "What makes this one different?", a: "It is about who they are, not what they did — and almost nobody ever hears it.", bundle: 'free' },
        { q: "Why say it rarely?", a: "Said often it becomes wallpaper; said in passing it sounds like a line.", bundle: 'free' },
        { q: "What are the three ways to do it without it being strange?", a: "Attach it to evidence, say it is overdue, or say it and stop.", bundle: 'free' },
        { q: "Why are these remembered for decades?", a: "Because they are so rarely said.", bundle: 'pro' },
        { q: "What comes after it?", a: "Nothing. No question, no expectation of a reply — let it sit.", bundle: 'pro' },
      ]
    },
    {
      name: "Say It Where It Counts",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Choosing the audience.",
      cards: [
        { q: "What does public praise do that private praise cannot?", a: "It changes what everyone else thinks, not only what they think.", bundle: 'free' },
        { q: "What belongs in private?", a: "Anything personal — appearance, character, anything they might rather the room did not know.", bundle: 'free' },
        { q: "What are the three options?", a: "Public for credit, private for anything personal, in writing when it should outlast the moment.", bundle: 'free' },
        { q: "What is the test for which to choose?", a: "Ask who the compliment is for. If it is for them, it goes where they will be comfortable.", bundle: 'pro' },
        { q: "Why send it as a message sometimes?", a: "A message can be read again on a bad day. A remark cannot.", bundle: 'pro' },
      ]
    },
    {
      name: "Take a Compliment",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Accepting one cleanly.",
      cards: [
        { q: "What is the move?", a: "Say thank you and stop. No correcting, no explaining it away.", bundle: 'free' },
        { q: "What does deflecting actually do?", a: "Tells the person they were wrong to say it — and after twice, people stop saying things.", bundle: 'free' },
        { q: "What are the three ways to take one?", a: "Just thank you; thank you plus agreement; thank you plus what it means to hear it.", bundle: 'free' },
        { q: "What is the hardest part?", a: "Stopping. Two words and then silence is harder than it sounds.", bundle: 'pro' },
        { q: "What if you do not agree with it?", a: "\"I don't quite see it, but thank you for saying so.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Answer It, Don't Return It",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Not firing one straight back.",
      cards: [
        { q: "What is wrong with returning it immediately?", a: "It cancels both — it reads as a transaction, and neither person has been told anything.", bundle: 'free' },
        { q: "Where does the reflex come from?", a: "Discomfort, not generosity. It gets the attention off you fast.", bundle: 'free' },
        { q: "What are the three ways to answer instead?", a: "Take it and let the moment end; take it then say something true and different; or praise them back later, named as separate.", bundle: 'free' },
        { q: "If you do want to praise them back, how?", a: "Later, about something specific, and say plainly that it is not a return.", bundle: 'pro' },
        { q: "What is the rule in four words?", a: "Theirs first. Yours keeps.", bundle: 'pro' },
      ]
    },
  ],
  responsivehumour: [
    {
      name: "Core Idea",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The shape of the pack: five ways to do something to the sentence you were just given.",
      cards: [
        { q: "What are the five strategies in this pack?", a: "Exaggeration, Understatement, Misdirection, Deliberate Misunderstanding, Irony.", bundle: 'free' },
        { q: "Where does humour in conversation usually come from?", a: "How you respond, not what you bring.", bundle: 'free' },
        { q: "What do all five have in common?", a: "Each takes their sentence and changes it — bigger, smaller, sideways, literal, or backwards.", bundle: 'free' },
        { q: "What are the two ways it goes wrong?", a: "Aiming at something they actually care about, and explaining it afterwards.", bundle: 'pro' },
        { q: "Which one should you reach for when stuck?", a: "Exaggeration. It works on almost anything and nobody has ever had to explain one.", bundle: 'pro' },
      ]
    },
    {
      name: "Exaggeration",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Making it enormous.",
      cards: [
        { q: "What is the move?", a: "Take what they said and make it far too big.", bundle: 'free' },
        { q: "Why does the scale matter?", a: "A small exaggeration sounds like a complaint. A ridiculous one is obviously play.", bundle: 'free' },
        { q: "What are the three safest targets?", a: "Your own state, the situation you are both in, and their claim agreed with too enthusiastically.", bundle: 'free' },
        { q: "How do you know you have not gone far enough?", a: "If you are worried it is too much, it is probably not enough.", bundle: 'pro' },
        { q: "Why is it the one to learn first?", a: "It is the most forgiving of the five — nobody has to decode anything.", bundle: 'pro' },
      ]
    },
    {
      name: "Understatement",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Making it tiny.",
      cards: [
        { q: "What is the move?", a: "Treat something large as though it were small — \"you ran a marathon? That's a bit of a walk.\"", bundle: 'free' },
        { q: "How does it differ from exaggeration in feel?", a: "Exaggeration is loud and warm. Understatement is dry, and it flatters what it shrinks.", bundle: 'free' },
        { q: "Where does the humour actually live?", a: "In the delivery. Say it flat — the words do almost none of the work.", bundle: 'free' },
        { q: "Why is it good with people you do not know well?", a: "It is quiet, nobody has to perform, and it is over in four words.", bundle: 'pro' },
        { q: "Why is shrinking an achievement a compliment?", a: "Treating it as ordinary is a way of saying it is not.", bundle: 'pro' },
      ]
    },
    {
      name: "Misdirection",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Turning at the end.",
      cards: [
        { q: "What is the shape?", a: "Start out agreeing, then twist the ending.", bundle: 'free' },
        { q: "Why must the twist come last?", a: "The first half sets the expectation. Signal it early and there is nothing left to break.", bundle: 'free' },
        { q: "What are the three ways to set up the turn?", a: "Agree then take a word literally, agree then reveal a ridiculous reason, or agree then land somewhere unrelated.", bundle: 'free' },
        { q: "What should the first half sound like?", a: "Completely ordinary. That half is the setup, not the joke.", bundle: 'pro' },
        { q: "Which of the five is closest to a traditional joke?", a: "This one — it has a setup and a punchline.", bundle: 'pro' },
      ]
    },
    {
      name: "Deliberate Misunderstanding",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Taking it the wrong way on purpose.",
      cards: [
        { q: "What is the move?", a: "Pretend you took it the wrong way — both of you know what was meant, and the pretending is the joke.", bundle: 'free' },
        { q: "What are the three kinds?", a: "Take the literal sense, take the other meaning of a word, or take the statement as being about something else.", bundle: 'free' },
        { q: "What makes it fail?", a: "A straight face with no warmth. Then it reads as pedantry or as not listening.", bundle: 'free' },
        { q: "What is the point, if it is not seeming confused?", a: "Being obviously, cheerfully wrong on purpose.", bundle: 'pro' },
        { q: "They start explaining what they really meant.", a: "\"I know what you meant. I just liked mine better.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Irony",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Saying the opposite and letting the tone carry it.",
      cards: [
        { q: "What is the move?", a: "Say the opposite of what you mean, and let the delivery explain.", bundle: 'free' },
        { q: "What are the four things worth being ironic about?", a: "Your own failures, your own successes played down, a shared inconvenience, and something obviously good called bad.", bundle: 'free' },
        { q: "Which target is safest by a wide margin?", a: "Your own failures.", bundle: 'free' },
        { q: "When does irony stop being humour?", a: "When it is aimed at a person, or at something they are proud of. Then it is sarcasm, which is a different thing.", bundle: 'pro' },
        { q: "What is the risk with someone who does not know you?", a: "Delivered flat, it can be taken at face value — so keep it short and let the warmth show.", bundle: 'pro' },
      ]
    },
  ],
  masculine1: [
    {
      name: "The Core Pillars",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "The three elements of the Blueprint that form the base of Masculine leadership.",
      cards: [
        { q: "What are the three elements of The Masculine Blueprint?", a: "1. Respond vs. React, 2. Provide Structure, 3. Create Safety.", bundle: 'free' },
        { q: "What is the difference between old and new masculinity?", a: "The old was about control and dominance; the new is about clarity and leadership.", bundle: 'free' },
        { q: "What happens when a man abdicates the frame?", a: "The woman is forced into her Masculine energy to create the structure she needs, which kills attraction.", bundle: 'free' },
        { q: "What is an \"Oracle\" in this context?", a: "The woman's capacity to reflect back where the man has stopped being present, true, or loving.", bundle: 'pro' },
        { q: "What is the rule of \"facts\" during emotional intensity?", a: "Feelings first, facts later. Never try to \"fix the facts\" while she is in affect.", bundle: 'pro' },
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
      ]
    },
  ],
  masculine3: [
    {
      name: "Depth and Embodiment",
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
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "Six strategies that between them make a whole small conversation.\n\n1. **Opening Statement**\n2. **Follow the Thread**\n3. **Say It Back**\n4. **Ask Plainly**\n5. **A Friendly No**\n6. **Answer With a Hook**\n\nOpen, keep it going, listen, ask, decline, and share something back.",
      cards: [
        { q: "What are the six strategies in this pack?", a: "Opening Statement, Follow the Thread, Say It Back, Ask Plainly, A Friendly No, Answer With a Hook.", bundle: 'free' },
        { q: "What is the arc the six make together?", a: "Open, keep it going, listen, ask, decline, and share something back.", bundle: 'free' },
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
      guideFront: "A question about the method.",
      guideBack: "The answer.",
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
      guideFront: "A question about the method.",
      guideBack: "The answer.",
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
      guideFront: "A question about the method.",
      guideBack: "The answer.",
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
      guideFront: "A question about the method.",
      guideBack: "The answer.",
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
      guideFront: "A question about the method.",
      guideBack: "The answer.",
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
      guideFront: "A question about the method.",
      guideBack: "The answer.",
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
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "• **Opening Statement** — nothing said yet, and you want a conversation\n• **Ask Plainly** — nothing said yet, and you want one specific thing\n• **Follow the Thread** — they told you something\n• **Say It Back** — they told you something complicated\n• **A Friendly No** — they asked for something you cannot do\n• **Answer With a Hook** — they asked about you\n\nOne question decides all six: what did the other person just do?",
      cards: [
        { q: "What single question decides most of it?", a: "What did the other person just do?", bundle: 'free' },
        { q: "Which two are for when nothing has been said yet?", a: "Opening Statement and Ask Plainly.", bundle: 'free' },
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
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "1. **The First Conversation** — Opening Statement → Follow the Thread → Answer With a Hook → Follow the Thread\n2. **The Half Yes** — Say It Back → A Friendly No → Ask Plainly\n3. **The Second Answer** — Ask Plainly → Say It Back → Follow the Thread\n\nIn each one the order is doing the work, not the individual strategies.",
      cards: [
        { q: "What is the order for a whole small conversation?", a: "Opening Statement, Follow the Thread, Answer With a Hook, Follow the Thread.", bundle: 'free' },
        { q: "Which step of that sequence do people skip?", a: "The last one. They answer a question about themselves and then stop.", bundle: 'free' },
        { q: "What is the order when someone asks you for something?", a: "Say It Back, then A Friendly No, then Ask Plainly if there is a version you could do.", bundle: 'free' },
        { q: "Why does Say It Back come before the no?", a: "So the no arrives after they have been understood, rather than instead of it.", bundle: 'free' },
        { q: "What order do most people use instead?", a: "A reason, then a vague no, then an apology — which leaves the other person unsure it was a no at all.", bundle: 'free' },
        { q: "What is the order when you want something?", a: "Ask Plainly, then Say It Back when they push back, then Follow the Thread into whatever they raised.", bundle: 'free' },
        { q: "Why say it back rather than repeat the ask?", a: "Repeating it louder starts an argument. Saying it back turns a refusal into a conversation.", bundle: 'free' },
        { q: "What is usually true about the second thing they say?", a: "It is the real reason — and it is often solvable, which it never would be in an argument.", bundle: 'free' },
      ]
    },
    {
      name: "Challenges",
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "• **Cold Starts** — nothing has been said yet\n• **Stalling** — it was going, and now it is not\n• **In the Spotlight** — the attention turns to you\n• **Requests** — they want something from you\n• **Asking** — you want something from them\n\nFive challenges, each with its own way of going wrong.",
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
      guideFront: "A question about the method.",
      guideBack: "The answer.",
      description: "• **You Do Not Have to Be Interesting** — one true ordinary sentence is the bar\n• **A Question Is Not Always the Friendliest Thing** — a remark asks for nothing\n• **No Is Not a Rejection of the Person** — a clear no lets them ask someone else\n• **Give Them Something to Work With** — one detail is not taking up space\n• **Asking Is Not Imposing** — you are giving them a choice\n• **A Pause Is Not a Failure** — a pause is where people think\n\nEvery one of them feels like modesty or good manners from the inside.",
      cards: [
        { q: "What belief stops people speaking first?", a: "That a conversation is a performance, and the price of entry is something worth saying.", bundle: 'free' },
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
};
