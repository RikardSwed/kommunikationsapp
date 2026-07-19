// mindsetData.js — Mindset mode data

const mindsetCollections = {

  assertive: [
    // v1.26.29 (list 6): one mindset group PER STRATEGY — swipe right for
    // the thinking patterns behind the next strategy.
    {
      name: "Fogging Mindset",
      guideFront: "Reflect on this question...",
      guideBack: "A way to think about it...",
      description: "The thinking that makes Fogging work: criticism is information about the critic as much as about you, and agreeing with what MIGHT be true costs you nothing.",
      inputs: [
        { q: "Why does agreeing with criticism feel like losing?", a: "Because we treat every criticism as a verdict to appeal. It isn’t — it’s one person’s view. Agreeing that it MIGHT be true concedes nothing about who you are." },
        { q: "What makes fogging strength rather than surrender?", a: "Surrender is changing your behaviour to make the criticism stop. Fogging changes nothing — you stay exactly where you are, you just stop feeding the attack." },
        { q: "Why does a calm \"you might be right\" unsettle a critic?", a: "Because criticism is usually a lever, and levers need resistance. When you don’t push back, there is nothing to pry against — the critic has to either get specific or stop." },
      ]
    },
    {
      name: "Negative Inquiry Mindset",
      guideFront: "Reflect on this question...",
      guideBack: "A way to think about it...",
      description: "The thinking that makes Negative Inquiry work: curiosity about criticism is the deepest form of confidence — you can afford to hear more.",
      inputs: [
        { q: "Why is asking for MORE criticism a position of strength?", a: "Because only someone unafraid of the answer asks the question. Defensiveness says the criticism might destroy you. Curiosity says it can’t." },
        { q: "What does the request for specifics actually test?", a: "Whether the criticism is real. Genuine concerns survive the question \"what exactly do you mean?\" — jabs and moods usually don’t." },
        { q: "How do you stay genuinely curious instead of sarcastic?", a: "By actually wanting the answer. If you ask \"what bothers you about it?\" as a trap, it lands as a trap. Decide first that the answer might be useful — then ask." },
      ]
    },
    {
      name: "Negative Assertion Mindset",
      guideFront: "Reflect on this question...",
      guideBack: "A way to think about it...",
      description: "The thinking that makes Negative Assertion work: a mistake is something you DID, not something you ARE — so you can own it at full volume without shrinking.",
      inputs: [
        { q: "Why is calmly owning a mistake so disarming?", a: "Because most people expect defence or collapse. Clean ownership — \"you’re right, that’s on me\" — ends the argument before it starts. There’s nothing left to prove." },
        { q: "What is the difference between owning a mistake and apologising excessively?", a: "Owning is about the mistake; excessive apology is about you. \"I was wrong, I’ll fix it\" closes the matter. \"I’m so terrible, I always do this\" reopens it as a referendum on your worth." },
        { q: "Why does separating deed from worth make honesty easier?", a: "If every error is evidence against you as a person, you’ll defend everything. If an error is just an event, you can look at it — and correct it — without flinching." },
      ]
    },
    {
      name: "Broken Record Mindset",
      guideFront: "Reflect on this question...",
      guideBack: "A way to think about it...",
      description: "The thinking that makes Broken Record work: repetition is not rudeness, and pressure is not an argument — you only update for reasons, not for volume.",
      inputs: [
        { q: "Why do people back down when they're pushed back on?", a: "Usually because they confuse persistence with reason. Someone pushing harder is not a counter-argument. You only update when given a real reason, not just more pressure." },
        { q: "What does it mean to hold your position without being rigid?", a: "You stay with your view until you've heard a genuine reason to update it. New argument or fact = update. Emotion or repetition = hold." },
        { q: "Why does repeating the same sentence feel wrong — and why is it right?", a: "We’re trained to answer every point with a new point. But new points are new targets. The same calm sentence signals: the decision is made, and it’s not being renegotiated." },
      ]
    },
  ],

  compliments: [
    {
      name: "Giving Compliments",
      description: "The mindset behind giving compliments — why people hold back, what makes them land, and the right internal posture.",
      inputs: [
        { q: "Why do people hold back compliments they genuinely feel?", a: "Usually awkwardness, fear of seeming sycophantic, or not being in the habit of saying things out loud that they think internally. The thought \"that was impressive\" goes through people's heads all the time — few say it." },
        { q: "What does giving a specific compliment signal?", a: "That you were paying attention. That you see the person specifically — not just generically. This is the deeper gift beneath the compliment itself." },
        { q: "What is the right internal posture when giving a compliment?", a: "Generosity without agenda. You're giving something — not opening a transaction. The moment you want something in return (approval, reciprocation, a reaction), it stops being a compliment." },
      ]
    },
    {
      name: "Accepting Compliments",
      description: "The mindset behind receiving compliments — why deflecting is the default, and why receiving gracefully is more generous.",
      inputs: [
        { q: "Why do people deflect compliments?", a: "Usually a combination of genuine modesty, discomfort with positive attention, or the belief that accepting a compliment is arrogant. In reality, deflecting is often more awkward than receiving — it makes the other person regret saying it." },
        { q: "What does it mean to deserve a compliment?", a: "Nothing. Whether you deserve it is irrelevant to how you receive it. A compliment is something someone chose to give — your job is to receive it, not to adjudicate whether they were right." },
        { q: "Why is receiving compliments well a form of generosity?", a: "Because when you receive gracefully, you validate the giver's instinct to notice and say something. When you deflect, you make them feel they misjudged. Receiving well is a gift back." },
      ]
    },
    {
      name: "Self Disclosure",
      description: "The mindset behind self disclosure — why sharing invites sharing, and the difference between genuine disclosure and oversharing.",
      inputs: [
        { q: "Why is self disclosure more powerful than asking questions?", a: "Because questions put the other person on the spot. Disclosure opens a space they can enter if they want to. It's an invitation rather than a demand." },
        { q: "What does genuine self disclosure communicate beyond its content?", a: "Trust. When you share something real, you signal that you trust the other person with it. That signal — regardless of the content — creates connection." },
        { q: "What is the right level of self disclosure for a new relationship?", a: "Stay mostly at facts and opinions early, move to experiences occasionally when it feels natural. Feelings and uncertainties should follow rapport, not precede it. Match and slightly exceed their level." },
      ]
    }
  ],

  influenceframing: [
    {
      name: "Persuasion Framing",
      description: "The mindset behind persuasion — the right internal posture, and when persuasion becomes manipulation.",
      inputs: [
        { q: "What is the right internal posture for persuasion?", a: "Curiosity about their perspective, not conviction in your position. If you start persuasion already certain you're right, the dynamic is wrong before you open your mouth." },
        { q: "What does it mean to persuade without pressure?", a: "Offering a perspective and genuinely leaving them free to disagree. The paradox is that removing pressure often makes people more open — not less." },
        { q: "When does persuasion become manipulation?", a: "When you stop caring whether the outcome is genuinely good for them. Persuasion framing works because you're helping them see something real. When the goal is only your outcome, the same techniques become manipulation." },
      ]
    },
    {
      name: "Reframe",
      description: "The mindset behind reframing — an offering not a correction, and why not insisting is as important as the reframe itself.",
      inputs: [
        { q: "What is the right internal posture when offering a reframe?", a: "Genuine curiosity about whether this alternative view is actually useful — not cleverness or the need to fix their thinking. A reframe offered to be smart rather than helpful usually lands that way." },
        { q: "Why is it important not to insist on your reframe?", a: "Because a reframe is an offering, not a correction. If they don't take it up, the original frame might be the right one for now. Your job was to offer it — not to make them adopt it." },
        { q: "What does a good reframe have in common with a good question?", a: "Neither demands a particular answer. Both open space for a different kind of thinking. The best reframes are almost invisible — they shift something without feeling like an intervention." },
      ]
    },
    {
      name: "Grounding",
      description: "The mindset behind grounding — why being genuinely known is worth the friction, and the relationship between grounding and credible influence.",
      inputs: [
        { q: "What does it mean to be grounded in a conversation?", a: "To know what you think, what you value, and what you won't compromise — and to communicate that calmly without needing others to agree. You can hear challenge without losing your footing." },
        { q: "Why is grounding important for influence and persuasion?", a: "Because you can't frame things credibly from a position you don't hold yourself. Grounding is the prerequisite for persuasion — it's what makes your framing trustworthy rather than tactical." },
        { q: "What is the risk of showing your values in conversation?", a: "That someone disagrees. The alternative — hiding your values to avoid conflict — creates a kind of rootlessness that makes real connection impossible. Being genuinely known is worth the occasional friction." },
      ]
    },
    {
      name: "Observation",
      description: "The mindset behind observation — genuine curiosity outward, and why naming what you see is one of the most powerful social tools.",
      inputs: [
        { q: "What is the right internal posture for observation?", a: "Genuine curiosity rather than analysis. You're interested in what's actually there — not looking for something that confirms what you already think." },
        { q: "Why do most people miss most of what's observable?", a: "Because attention is usually inward — on what to say next, on how they're coming across, on their own thoughts. Active observation requires redirecting that attention outward." },
        { q: "What does naming an observation do socially?", a: "It signals that you're paying real attention — not just following the surface of the conversation. Most people feel seen when something they've done or said is specifically noticed." },
      ]
    }
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

  conversational: [
    {
      name: "Finding Common Ground",
      description: "The mindset behind finding common ground — active listening with intention, and why genuine overlap matters.",
      inputs: [
        { q: "What is the right internal posture for finding common ground?", a: "Active listening with intention. You're not performing similarity — you're genuinely curious about what overlaps. The curiosity has to be real for the recognition to feel genuine." },
        { q: "Why does false common ground backfire?", a: "Because people can feel the gap between claimed and genuine connection. It registers as social performance rather than contact, which is worse than finding no common ground at all." },
        { q: "Why is a similar feeling enough even without the identical experience?", a: "Because what creates connection is the sense of \"you get it\" — and that can come from emotional recognition even when the external facts are different." },
      ]
    },
    {
      name: "Mirroring & Paraphrasing",
      description: "The mindset behind mirroring — your only job is to understand, and why staying with what they brought is more powerful than leading.",
      inputs: [
        { q: "What is the right internal posture for mirroring?", a: "Your only job is to understand — not to respond, advise or connect it to your own experience. When you're mirroring well, you're not thinking about what to say next; you're following what they mean." },
        { q: "Why is mirroring more powerful than asking questions?", a: "Because a question redirects the conversation toward what you find interesting. A mirror stays with what they brought. It signals: I'm following you, not leading you somewhere." },
        { q: "What does it mean to mirror the feeling rather than the words?", a: "It means reflecting the emotional content underneath the facts. \"That sounds really hard\" is a feeling mirror. \"So your colleague was late\" is a content mirror. Feeling mirrors create a sense of being deeply heard." },
      ]
    }
  ],

  criticism: [
    {
      name: "Receiving Criticism",
      description: "The thinking patterns behind receiving criticism well — what makes it so hard, and what shifts when you stop taking it personally.",
      inputs: [
        { q: "Why is the urge to defend yourself when receiving criticism almost always counterproductive?", a: "Because defending yourself signals that the criticism has threatened your identity, not just described a behaviour. The moment you defend, the conversation shifts from the content to your ego — and you lose the useful information." },
        { q: "What is the difference between taking criticism seriously and taking it personally?", a: "Taking it seriously means extracting what's useful and acting on it. Taking it personally means treating it as a verdict on who you are. The same criticism can be both a useful signal and not a threat to your worth." },
        { q: "How do you know when criticism is useful information vs when it's just someone's frustration?", a: "Ask: is it specific? Does it describe something observable? Can you do something about it? Frustration is usually vague and general. Useful criticism is usually specific and behavioural." },
      ]
    },
    {
      name: "Giving Criticism",
      description: "The thinking patterns behind giving criticism well — what makes it land as information rather than attack.",
      inputs: [
        { q: "What makes criticism land as information rather than attack?", a: "Specificity and tone. Specific + calm = information. Vague + loaded = attack. \"That report had unclear section headers\" is information. \"You're always unclear\" is an attack." },
        { q: "Why is specificity so important when giving criticism?", a: "Because vague criticism gives the person nothing to work with — they can only defend themselves or feel bad. Specific criticism gives them something concrete to change. The specificity is the respect." },
        { q: "What do you do when you know someone won't receive criticism well but it needs to be said?", a: "Say it anyway, calmly and specifically. Your job is to communicate it clearly — not to manage their reaction. Don't delay, don't soften it into meaninglessness, and don't apologise for the content." },
      ]
    }
  ],

  storytelling: [
    {
      name: "Sharing not performing",
      description: "The most common mistake in storytelling is treating it as a performance. This mindset shift is about returning to sharing as the intention.",
      inputs: [
        { q: "You feel pressure to be entertaining when telling a story.",    a: "Sharing, not performing. If you feel pressure to entertain, it reads as effort. If you feel like you're genuinely sharing, it reads as warmth." },
        { q: "You wonder if your story is interesting enough to tell.",       a: "The event can be minor — if the detail is vivid, the story lands. Specificity creates the feeling that the listener was there." },
        { q: "You tell a story and it lands flat — no one reacts as expected.", a: "Move on without retreating. Not every story lands with every audience. Your job was to share, not to perform.", bundle: "pro" },
      ]
    }
  ],

  humourpractise: [
    {
      name: "Self Humour Mindset",
      description: "The thinking that makes self humour work: a flaw you can laugh at loses its power over you, and needing to look perfect is the real weakness — not the flaw itself.",
      inputs: [
        { q: "Why is laughing at your own flaw strength, not weakness?", a: "Seeing yourself clearly and not needing to look perfect is the strength. Protecting the image is the weak part — the flaw is just a fact.", bundle: 'free' },
        { q: "What's the internal difference between self humour and fishing for reassurance?", a: "Self humour says 'yes, and I find this funny too.' Fishing says 'tell me I'm not that bad.' The tell is whether you need a response back.", bundle: 'free' },
        { q: "Why does owning a flaw first take the sting out of it?", a: "If you've already named it lightly, there's nothing left to attack — anyone pointing it out is just agreeing with you.", bundle: 'free' },
        { q: "What tips self humour into self-diminishment?", a: "Repeating it, waiting to be contradicted, or feeling worse after. Once is ease; three times is a bid for reassurance.", bundle: 'free' },
        { q: "Why does the room relax when you laugh at yourself?", a: "It tells them the stakes are low. If you're not defending your image, they don't have to be careful around it.", bundle: 'free' },
        { q: "Why doesn't a secure person need the flaw to be untrue?", a: "Their okay-ness doesn't rest on being flawless — the flaw can be completely real and still threaten nothing.", bundle: 'pro' },
        { q: "How do you keep self humour from becoming the label people use?", a: "Aim it at small, obvious things and vary it. Named once with warmth it's charming; on repeat it becomes your headline.", bundle: 'pro' },
        { q: "What's the link between self humour and letting others be imperfect?", a: "When you're relaxed about your own flaws, everyone else gets permission to be human — it lowers the room's need to perform.", bundle: 'pro' },
      ]
    },
    {
      name: "The Humour Mindset",
      description: "The stance underneath every humour move: you're noticing what's already a little absurd, not performing to get a laugh — and you don't need it to land.",
      inputs: [
        { q: "What is the right internal posture for humour?", a: "Noticing, not performing. Humour comes from spotting when expectations break in a safe way — your job is to notice it, not manufacture it.", bundle: 'free' },
        { q: "Why does trying too hard usually kill the joke?", a: "It signals you need the laugh. What lands comes from not needing it — the lighter your investment, the better it works.", bundle: 'free' },
        { q: "What do you do when a joke falls flat?", a: "Move on without explaining or apologising. Self-irony saves it — 'and that's why I don't do stand-up' — then continue.", bundle: 'free' },
      ]
    }
  ]
};
