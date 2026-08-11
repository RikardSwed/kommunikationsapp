// mindsetData.js — Mindset mode data

const mindsetCollections = {

  speakingupingroups: [
    {
      name: "The Speaking Up Mindset",
      guideFront: "Reflect on this.",
      guideBack: "A way to think about it.",
      description: "The stance behind claiming a turn: that the room is not waiting to be convinced you deserve one. Most people who stay quiet in groups are not short of ideas — they are waiting for a gap that feels safe enough, and it never comes. This trains the opposite reflex: that starting the sentence is what creates the turn, that a half-formed point is still worth saying, and that being interrupted is a normal event rather than a verdict on you.",
      inputs: [
        { q: "You have something to say but the moment never feels right.", a: "\"The moment is made by starting, not by waiting. I can begin and the room will follow.\"", bundle: 'pro' },
        { q: "Your point is not fully formed and you almost stay quiet.", a: "\"Half a good thought said out loud beats a whole one nobody hears.\"", bundle: 'pro' },
        { q: "Someone interrupts you and you feel yourself shrinking.", a: "\"Being interrupted says nothing about me. I can simply finish.\"", bundle: 'pro' },
        { q: "You worry your contribution is not important enough.", a: "\"I don't have to be the most useful voice in the room to be a useful one.\"", bundle: 'pro' },
        { q: "The meeting ends and you never said your thing.", a: "\"That's information, not failure. Next time I open my mouth earlier.\"", bundle: 'pro' },
        { q: "You are the most junior person in the room.", a: "\"Being new is exactly why my question is worth asking out loud.\"", bundle: 'pro' },
        { q: "You spoke and nobody responded to your point.", a: "\"Silence isn't rejection. Ideas often land three minutes after they're said.\"", bundle: 'pro' },
        { q: "You are about to interrupt someone and it feels rude.", a: "\"Adding to what they said isn't taking the room from them.\"", bundle: 'pro' },
      ]
    },
  ],
  thehappyno: [
    {
      name: "The Guilt-Free No Mindset",
      guideFront: "Reflect on this.",
      guideBack: "A way to think about it.",
      description: "The stance underneath a warm refusal: that saying no is an ordinary thing rather than a small betrayal. A happy no only sounds relaxed if you actually are — the tone is not a technique laid over guilt, it comes from believing the refusal is reasonable. This trains that belief, so the warmth in the voice has something real behind it.",
      inputs: [
        { q: "You are about to say no and you can feel an explanation coming.", a: "\"The explanation is for me, not for them. No is a complete answer.\"", bundle: 'pro' },
        { q: "You said no and they went quiet.", a: "\"Their reaction belongs to them. Mine was reasonable and kind.\"", bundle: 'pro' },
        { q: "You feel guilty about refusing something small.", a: "\"Small requests deserve small answers. I don't owe a paragraph for a two-second favour.\"", bundle: 'pro' },
        { q: "You notice you say yes before you have thought.", a: "\"I'm allowed a second. Nobody was ever harmed by me thinking first.\"", bundle: 'pro' },
        { q: "You worry that refusing will make you seem unhelpful.", a: "\"The people who matter to me have never counted.\"", bundle: 'pro' },
        { q: "They ask a second time and you feel yourself softening.", a: "\"If I change my answer under pressure, I've taught them pressure works.\"", bundle: 'pro' },
        { q: "You said yes to something you did not want to do.", a: "\"I can notice that without punishing myself. Next time I take the second I need.\"", bundle: 'pro' },
        { q: "Saying no cheerfully feels almost rude.", a: "\"Warmth and a no fit in the same sentence. The tone is what carries the care.\"", bundle: 'pro' },
      ]
    },
  ],
  theregretfulno: [
    {
      name: "The Honest Regret Mindset",
      guideFront: "Reflect on this.",
      guideBack: "A way to think about it.",
      description: "The stance behind refusing something you actually wanted: that disappointment on both sides is a normal cost of having limits, not evidence of a failure. The difficulty with a regretful no is that the feeling is real, which makes it tempting to keep talking. This trains the opposite — that saying it once and stopping is what keeps it honest.",
      inputs: [
        { q: "You are refusing something you genuinely wanted.", a: "\"Wanting it and doing it are different questions. I can be sorry and still be sure.\"", bundle: 'pro' },
        { q: "You have said the regret and want to keep explaining.", a: "\"Saying it once is honest. Saying it three times is asking to be forgiven.\"", bundle: 'pro' },
        { q: "They look disappointed and you want to fix it.", a: "\"Their disappointment is allowed to exist. I don't have to remove it.\"", bundle: 'pro' },
        { q: "You are turning the same person down twice.", a: "\"Two nos in a row isn't a pattern of not caring. It's a pattern of being busy.\"", bundle: 'pro' },
        { q: "You feel you should apologise more than you have.", a: "\"I'm not sorry for having limits. I'm sorry about the timing, and I've said so.\"", bundle: 'pro' },
        { q: "You almost say yes because refusing feels unkind.", a: "\"A yes I resent is a worse gift than a no I mean.\"", bundle: 'pro' },
        { q: "You are tempted to offer a substitute you don't want to give.", a: "\"An offer I don't mean will cost me more later. I can just say no.\"", bundle: 'pro' },
        { q: "The refusal is still on your mind hours later.", a: "\"Thinking about it means I cared. It doesn't mean I chose wrong.\"", bundle: 'pro' },
      ]
    },
  ],

  playfulrefusals: [
    {
      name: "The Playful No Mindset",
      guideFront: "Reflect on this.",
      guideBack: "A way to think about it.",
      description: "The stance behind refusing without tension: that a no does not have to be heavy, apologetic or justified. Playful refusals only work if you are genuinely relaxed about saying no — the humour is a way of showing that the request has not put you under pressure, not a way of hiding that it has. This trains the underlying comfort, so the joke has something real behind it.",
      inputs: [
        { q: "You are about to say no and you can feel yourself starting to explain why.", a: "\"The explanation is for me, not for them. I can just say no and let it sit.\"", bundle: 'pro' },
        { q: "Someone asks you for something and you say yes before you have thought.", a: "\"I'm allowed a second. Nobody has ever been hurt by me thinking before answering.\"", bundle: 'pro' },
        { q: "You said no and the other person went quiet.", a: "\"Their reaction is theirs. My no was reasonable, and the silence will pass.\"", bundle: 'pro' },
        { q: "You worry that joking about a request will seem like you don't care.", a: "\"The joke shows I'm relaxed, not that I'm dismissive. Warmth is in the tone, not the words.\"", bundle: 'pro' },
        { q: "You feel guilty about declining something small.", a: "\"Small requests deserve small answers. I don't owe a paragraph for a two-second favour.\"", bundle: 'pro' },
        { q: "Someone keeps asking after you have already declined.", a: "\"Repeating myself isn't rude. I can say the same thing again in the same tone.\"", bundle: 'pro' },
        { q: "You said yes to something you did not want to do.", a: "\"I can notice that without punishing myself. Next time I'll take the second I need.\"", bundle: 'pro' },
        { q: "You are worried a playful no will land badly with someone sensitive.", a: "\"Then I'll use a plain one. The point is comfort with saying no, not the joke.\"", bundle: 'pro' },
      ]
    },
  ],

  transitions: [
    {
      name: "The Transitions Mindset",
      guideFront: "Reflect on this.",
      guideBack: "A way to think about it.",
      description: "The stance behind steering a conversation: that moving it is allowed, and that someone has to do it. Most people wait for the conversation to change by itself and then feel stuck when it does not. This mindset trains the opposite reflex — that a flat patch is simply the point where someone opens the next thing, that you do not need a clever link to change subject, and that handing the floor over is generosity rather than retreat.",
      inputs: [
        { q: "You want to change the subject but it feels rude.", a: "\"Changing the subject isn't rude. Someone has to steer this, and it might as well be me.\"", bundle: 'pro' },
        { q: "You have gone quiet because you cannot find a natural link.", a: "\"I don't need a clever link. I can just say I want to talk about something else.\"", bundle: 'pro' },
        { q: "You realise you have been talking for a long time.", a: "\"I don't have to finish everything I started. I can hand it over now, and they'll be glad I did.\"", bundle: 'pro' },
        { q: "The conversation is stuck and it feels like your fault.", a: "\"A flat patch isn't a failure. It's just the point where someone opens the next thing.\"", bundle: 'pro' },
        { q: "You want to bring up something serious but the mood is light.", a: "\"I'm allowed to change the temperature. I just have to say that I'm about to.\"", bundle: 'pro' },
        { q: "You worry that changing topic will look like you were not listening.", a: "\"If I close the old topic properly, moving on reads as interest, not impatience.\"", bundle: 'pro' },
        { q: "Your story did not get the reaction you expected.", a: "\"That story was a gift to the conversation, not a performance. I can hand over and keep going.\"", bundle: 'pro' },
        { q: "A silence appears and you feel pressure to fill it immediately.", a: "\"A pause isn't an emergency. I can let it sit a second and then open something worth talking about.\"", bundle: 'pro' },
      ]
    },
  ],

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
    },
    {
      name: "Observation Humour Mindset",
      description: "The stance behind observation humour: the funny thing is usually already in the room — your job is to notice it, not to be clever.",
      inputs: [
        { q: "Where does the best observation humour come from?", a: "From paying attention, not from being witty. The material is already there — you just have to catch it.", bundle: 'free' },
        { q: "Why does noticing beat performing?", a: "A noticed joke feels shared and effortless; a performed one feels like you're working for a laugh, which is what makes it not land.", bundle: 'free' },
        { q: "What if you don't feel funny in the moment?", a: "You don't need to be — you just need to be watching. Describe what's actually happening and the absurdity does the work.", bundle: 'free' },
        { q: "Why keep it about the situation, not a person?", a: "The shared situation is safe ground — everyone can laugh without anyone being the target.", bundle: 'free' },
        { q: "What's the cost of forcing an observation?", a: "Forcing it turns noticing into performing. If nothing's absurd, say nothing — the next moment will hand you something.", bundle: 'free' },
        { q: "How does staying relaxed help you notice more?", a: "Tension narrows your attention to yourself; ease widens it to the room, where the funny things actually are.", bundle: 'pro' },
        { q: "Why is a small true observation better than a big invented joke?", a: "Truth is instantly recognisable — everyone confirms it at once. An invented joke has to earn belief first.", bundle: 'pro' },
        { q: "What does finding the funny in a dull moment signal?", a: "That you're present and at ease — which puts everyone else at ease too.", bundle: 'pro' },
      ]
    },
    {
      name: "Teasing Mindset",
      description: "The stance behind teasing: it's a sign of comfort and affection, not cruelty — you tease people you like, and the warmth has to be the loudest thing in it.",
      inputs: [
        { q: "Why do we tease the people we like?", a: "Because teasing is a way of saying 'I'm comfortable with you' — it's a marker of closeness, not distance.", bundle: 'free' },
        { q: "What feeling should be underneath a tease?", a: "Fondness. If the warmth isn't there, it's not a tease — it's a dig wearing a smile.", bundle: 'free' },
        { q: "How do you know a tease has gone too far?", a: "Watch the person, not the joke. If they tighten instead of laugh, you've found an edge — back off warmly.", bundle: 'free' },
        { q: "Why keep the target small?", a: "Small, obvious quirks are safe to laugh at together. The bigger or more personal the target, the closer it gets to a wound.", bundle: 'free' },
        { q: "What makes you safe to be teased by?", a: "That you take it as well as you give it. If you can laugh at yourself, your teasing reads as play, not superiority.", bundle: 'free' },
        { q: "Why isn't teasing about being the funniest in the room?", a: "It's about connection, not performance. A good tease makes the other person feel liked, not out-done.", bundle: 'pro' },
        { q: "What does needing the tease to land say?", a: "That you're performing. The best teasing is offered lightly — if it doesn't land, you let it go without a flicker.", bundle: 'pro' },
        { q: "How does teasing build trust over time?", a: "Light teasing that never wounds tells someone you can play near their edges and still be safe — that's intimacy.", bundle: 'pro' },
      ]
    },
    {
      name: "Joke About My Flaws Mindset",
      description: "The stance behind it: a flaw you've named and laughed at can't be used against you — owning it first is control, not surrender.",
      inputs: [
        { q: "Why name your own flaw before anyone else can?", a: "Because a flaw you've already joked about has no power as a weapon — you've taken it off the table.", bundle: 'free' },
        { q: "What does joking about a flaw signal?", a: "Security. Someone comfortable enough to laugh at their weak spots clearly isn't threatened by them.", bundle: 'free' },
        { q: "Why is agreeing with the flaw stronger than denying it?", a: "Denial invites a fight; agreement ends it. You can't argue with someone who cheerfully got there first.", bundle: 'free' },
        { q: "How do you keep it from becoming self-criticism?", a: "Keep the tone light and the exaggeration obvious — you're playing with the flaw, not confirming a verdict on yourself.", bundle: 'free' },
        { q: "Why doesn't the flaw being real threaten you?", a: "Being okay doesn't depend on being flawless. A real, named, laughed-at flaw is just a fact you're at ease with.", bundle: 'free' },
        { q: "What's the difference between owning a flaw and apologising for it?", a: "Owning it is light and final; apologising invites reassurance. One closes the subject, the other reopens it.", bundle: 'pro' },
        { q: "Why does this put a group at ease?", a: "When you show your flaws don't scare you, everyone relaxes about their own — you lower the whole room's guard.", bundle: 'pro' },
        { q: "When should you not joke about a flaw?", a: "When it's a genuine, sensitive wound — not everything is material. Save it for the harmless, chosen quirks.", bundle: 'pro' },
      ]
    },
    {
      name: "Jokingly Brag Mindset",
      description: "The stance behind it: playing with self-praise, not actually claiming it — you can only joke about being great if you're relaxed enough not to need it to be true.",
      inputs: [
        { q: "What are you actually doing when you jokingly brag?", a: "Playing with confidence, not claiming it. The joke is the gap between the tiny achievement and the huge announcement.", bundle: 'free' },
        { q: "Why does it read as playful, not arrogant?", a: "Because you're obviously in on it. Real arrogance believes itself; a jokingly brag winks at everyone.", bundle: 'free' },
        { q: "Why can only relaxed people pull this off?", a: "You're toying with the exact thing insecure people protect — you can only play with self-praise if you don't need it.", bundle: 'free' },
        { q: "What keeps it warm?", a: "Aim it at something trivial and let everyone share the joke — you're the punchline as much as the hero.", bundle: 'free' },
        { q: "Why pair it with self humour?", a: "Bragging about one small thing and mocking another shows you don't take either seriously — it's balance, not ego.", bundle: 'free' },
        { q: "What does a well-placed jokingly brag do for the mood?", a: "It lifts it — a bit of cheerful, obvious swagger about nothing gives everyone permission to be light.", bundle: 'pro' },
        { q: "Why isn't needing people to agree part of it?", a: "The joke is complete on its own. If you need them to confirm you're great, it stops being a joke and becomes a bid.", bundle: 'pro' },
        { q: "How is this different from actually being proud of something?", a: "Real pride is sincere and can be quiet; a jokingly brag is deliberately over-the-top about something that doesn't warrant it.", bundle: 'pro' },
      ]
    }
  ],
  setupstatement: [
    {
      name: "The Setup Statement Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The pack-wide stance: you don't have to be interesting to open a conversation, you just have to go first. Giving a little of yourself before you ask lowers the pressure on the other person, so the setup statement works precisely because it isn't clever. Example of the shift — instead of hunting for the perfect question, you say your small true thing and pass it over.\n\nThe three thoughts that cause the trouble:\n1. \"I need something interesting to say\" — you need something true and easy.\n2. \"They'll think I'm intruding\" — most people are relieved someone opened.\n3. \"I should wait for a natural moment\" — the natural moment is the one you make.\n\nMindset: giving a little of yourself before you ask lowers the pressure on them. The setup statement works precisely because it is not clever.",
      inputs: [
        { q: "You feel you need a clever line before you can say anything.", a: "\"I don't need to be interesting. I need to go first. A small true thing is enough.\"", bundle: 'pro' },
        { q: "You worry that sharing your opinion first is self-centred.", a: "\"Going first is a gift, not a spotlight — it gives them something easy to answer.\"", bundle: 'pro' },
        { q: "You freeze because nothing you'd say feels important enough.", a: "\"It doesn't have to matter. 'I'm tired today' is a perfectly good place to start.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Going-First Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance about being the one who speaks first: the right moment is the one you make, and most people are relieved someone else opened. Example of the shift — instead of waiting to be approached, you take the small risk of going first.\n\nWhere the hesitation shows up:\n1. You wait to be approached and then leave having spoken to nobody.\n2. You rehearse an opener until the moment has passed.\n3. You assume everyone else finds this easy.\n\nMindset: the right moment is the one you make. Going first is a small risk that almost always gets met with relief rather than rejection.",
      inputs: [
        { q: "You keep waiting for the 'right moment' to speak.", a: "\"The right moment is the one I make by saying my bit. Waiting is just avoiding.\"", bundle: 'pro' },
        { q: "You feel you're bothering them by starting a conversation.", a: "\"Most people are relieved someone else went first. I'm doing us both a favour.\"", bundle: 'pro' },
        { q: "You compare yourself to people who seem effortlessly social.", a: "\"They're not cleverer, they just go first more often. That part I can copy.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Reciprocity Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance about what happens after you open: your job is to hold out the invitation, not to control whether they take it. Example of the shift — instead of reading a flat reply as failure, you offer the door and let them decide.\n\nWhere it goes wrong:\n1. You read a short reply as proof you should not have spoken.\n2. You keep pushing when they have clearly not got the energy.\n3. You judge the opener by their mood rather than by your own move.\n\nMindset: your job is to hold out the invitation, not to control whether they take it. A flat answer is information about their evening, not a verdict on you.",
      inputs: [
        { q: "You're scared the other person won't reciprocate.", a: "\"My job is to open the door. Whether they walk through is not on me.\"", bundle: 'pro' },
        { q: "You asked a question and it landed flat and you feel silly.", a: "\"One flat opener isn't a verdict on me. I'll try a different type and move on.\"", bundle: 'pro' },
      ]
    },
  ],
  firststrategies: [
    {
      name: "You Do Not Have to Be Interesting",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The belief that a conversation is a performance, and that the price of entry is something worth saying.\n\nIt is the single biggest reason people say nothing. Every ordinary remark gets measured against an imagined standard and thrown away, and the silence that results is far more awkward than the remark would have been.\n\nWhat people actually respond to is being spoken to. The content of the first sentence matters remarkably little.\n\nMindset: the bar is a true, ordinary sentence. That is the whole bar.",
      inputs: [
        { q: "I can't think of anything worth saying.", a: "It doesn't have to be worth saying. \"That queue hasn't moved\" is enough.", bundle: 'free' },
        { q: "They'll think it's a stupid thing to say.", a: "Nobody remembers the sentence. They remember that someone spoke to them.", bundle: 'free' },
        { q: "I'm not a natural at this.", a: "Almost nobody is. The ones who look natural are using about six things on repeat.", bundle: 'free' },
        { q: "If I start it, I'll have to keep it going.", a: "They get a turn too. That's what makes it a conversation and not a speech.", bundle: 'free' },
        { q: "Everyone else finds this easy.", a: "Everyone else is looking at their phone in the queue for exactly the same reason you are.", bundle: 'free' },
      ]
    },
    {
      name: "A Question Is Not Always the Friendliest Thing",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Questions feel polite, so people reach for them first. But a question is also a small demand — it requires an answer, on the spot, from someone who may be tired or busy or shy.\n\nA statement asks for nothing. It can be picked up or let go, and either is fine. That is why it opens more conversations than a question does, and why it never puts anyone on the spot.\n\nThis matters most with people you do not know, where a question can feel like being stopped in the street.\n\nMindset: give first, ask later. The question is better once there is something to be curious about.",
      inputs: [
        { q: "Asking about them is the polite way in.", a: "It's also work for them. A remark lets them choose whether to join.", bundle: 'free' },
        { q: "If I don't ask, I'm making it about me.", a: "One sentence about the room isn't about you. It's about the room.", bundle: 'free' },
        { q: "They didn't answer my question and now it's worse.", a: "That's the risk a question carries. An unanswered remark isn't awkward at all.", bundle: 'free' },
        { q: "I'll ask something to show I'm interested.", a: "Show it by picking up what they've already said. That proves more than a new question.", bundle: 'free' },
        { q: "Statements sound like I'm just talking at them.", a: "Two in a row does. One, then listening, is an opening.", bundle: 'free' },
      ]
    },
    {
      name: "No Is Not a Rejection of the Person",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The reason people say \"maybe\" is not that they are unclear. It is that a no feels like a verdict on the person asking, so the answer gets padded until it means nothing.\n\nThe padding is what actually costs them something. A vague no leaves them waiting, planning around you, and asking again. A clear one lets them ask someone else today.\n\nThe warmth belongs in the delivery, not in the answer — and it does not require reasons.\n\nMindset: a kind no is a favour. An unclear one is not kindness, it is postponement.",
      inputs: [
        { q: "They'll be hurt if I say no.", a: "They'll be more inconvenienced by a maybe that turns into a no next week.", bundle: 'free' },
        { q: "I need a good enough reason first.", a: "You don't owe a reason. \"I can't this time\" is a complete sentence.", bundle: 'free' },
        { q: "If I explain properly they'll understand.", a: "Every reason you add is something they can solve. Then you're negotiating.", bundle: 'free' },
        { q: "Saying no makes me difficult.", a: "It makes you predictable. People trust a yes more when a no is possible.", bundle: 'free' },
        { q: "I'll just do it, it's easier.", a: "It's easier today. Notice what it costs on Thursday.", bundle: 'free' },
      ]
    },
    {
      name: "Give Them Something to Work With",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The habit of answering questions about yourself as briefly as possible — fine, not much, the usual — and handing the conversation straight back.\n\nIt feels modest. What it actually does is put the whole job on the other person: they have to keep inventing questions, and after two or three closed answers most people conclude you would rather not talk.\n\nA hook is not a monologue. It is one extra detail, offered so there is somewhere to go next.\n\nMindset: leaving a door open is not taking up space. It is the polite half of being asked.",
      inputs: [
        { q: "They don't really want to hear about my week.", a: "They asked. A question is an offer, not a formality.", bundle: 'free' },
        { q: "I don't want to go on about myself.", a: "One detail isn't going on. \"Fine, apart from the drive\" is the whole technique.", bundle: 'free' },
        { q: "Nothing interesting has happened to me.", a: "The printer, the bread, the locked door. Small and true beats interesting.", bundle: 'free' },
        { q: "It's better to ask them back straight away.", a: "Answer first, then ask. Otherwise they're carrying the whole thing alone.", bundle: 'free' },
        { q: "If I say more they'll ask more.", a: "Yes. That's the conversation you said you wanted.", bundle: 'free' },
      ]
    },
  ],
  startingconversations1: [
    {
      name: "It Does Not Have to Be Interesting",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Most people who struggle to open conversations are not short of words — they are rejecting the words they have, because the opener that occurred to them seemed too obvious to say out loud.\n\nBut an opener is not judged as a remark. It is judged as an invitation, and \"busy in here today\" works precisely because it asks nothing of the other person. The interesting part of a conversation happens later, and it cannot happen at all until someone says something boring first.\n\nMindset: say the obvious thing. It is doing a different job than you think.",
      inputs: [
        { q: "That's such a boring thing to say.", a: "It is. That's why it's easy to answer, which is the whole point.", bundle: 'pro' },
        { q: "They'll think I'm stating the obvious.", a: "You are. Everyone opens this way, including the people you think are good at it.", bundle: 'pro' },
        { q: "I should say something they'll find interesting.", a: "Later, maybe. First you just need them to say something back.", bundle: 'pro' },
        { q: "I need a better opener than the weather.", a: "The weather has started more conversations than every clever line ever written.", bundle: 'pro' },
        { q: "If I can't think of anything good I shouldn't speak.", a: "Then most conversations would never happen. Say the ordinary thing.", bundle: 'pro' },
      ]
    },
    {
      name: "A Short Answer Is Not a No",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "You open, they answer in three words, and something in you concludes it went badly. But most first replies are short — people are mid-something, they were not expecting to talk, and they are matching the size of what you gave them.\n\nReading a short answer as rejection ends conversations that were about to start. The better reading is that they gave you exactly as much as your opener asked for, and a slightly bigger second move often gets a bigger reply.\n\nMindset: one flat reply means nothing. Two means something.",
      inputs: [
        { q: "They only said \"yeah\". That means they don't want to talk.", a: "Or it means \"yeah\". Try one more thing before you decide.", bundle: 'pro' },
        { q: "I've made it awkward now.", a: "You've said one sentence to someone in a queue. Nobody is thinking about it.", bundle: 'pro' },
        { q: "They're clearly not interested.", a: "Maybe. You've got one piece of evidence. Get a second.", bundle: 'pro' },
        { q: "I should stop before this gets embarrassing.", a: "Nothing embarrassing has happened. A short answer is the most normal thing there is.", bundle: 'pro' },
        { q: "They answered and then looked away.", a: "People look away. It isn't a verdict on you.", bundle: 'pro' },
      ]
    },
    {
      name: "You Are Allowed to Speak",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "A surprising amount of hesitation is not about what to say but about whether you are permitted to say it — as though speaking to a stranger were an intrusion that needs justifying.\n\nIn almost every everyday setting it is not. Queues, waiting rooms, courses, lifts, gyms and events are places where a passing exchange is entirely ordinary, and the person you speak to will forget it within minutes whichever way it goes.\n\nMindset: you do not need a reason. Being in the same place is the reason.",
      inputs: [
        { q: "I don't have a good enough reason to talk to them.", a: "You're both standing in the same queue. That has always been reason enough.", bundle: 'pro' },
        { q: "They didn't ask to be spoken to.", a: "True of every conversation that has ever started.", bundle: 'pro' },
        { q: "I'd be interrupting them.", a: "Then keep it small and let them end it. That's what a greeting is for.", bundle: 'pro' },
        { q: "What if they think I want something?", a: "Then they'll find out you don't, in about four seconds.", bundle: 'pro' },
        { q: "It's weird to just start talking to someone.", a: "It's the most ordinary thing people do. It only feels weird from the inside.", bundle: 'pro' },
      ]
    },
    {
      name: "Nothing Is Lost",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The fear that stops openers is not really fear of a bad conversation — it is fear of a moment of exposure: standing there having said something that did not land.\n\nWeigh it honestly. The worst realistic outcome is a short reply and a return to your own thoughts, from a person you will probably never see again, who will not remember it by lunchtime. The best outcome is a conversation. The odds are not close.\n\nMindset: the downside is a few seconds. The upside is everything that comes after.",
      inputs: [
        { q: "What if it goes badly?", a: "Then you stood in a queue having said one sentence. That's the whole cost.", bundle: 'pro' },
        { q: "I'll feel stupid.", a: "For about a minute, and only you will know.", bundle: 'pro' },
        { q: "They'll remember it and it'll be awkward next time.", a: "They won't remember it. You will, and only you.", bundle: 'pro' },
        { q: "It's not worth the risk.", a: "Count the risk out loud. Ten seconds of mild discomfort, at the very worst.", bundle: 'pro' },
        { q: "I'd rather not put myself through it.", a: "Fair, sometimes. But do it once today and notice how little actually happens.", bundle: 'pro' },
      ]
    },
  ],
  showunderstanding: [
    {
      name: "The Show Understanding Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The pack-wide stance: understanding is not the same as agreeing, and it is not the same as fixing.\n\nBoth confusions cause the same behaviour — people avoid showing understanding because they think it commits them to something. It does not. Demonstrating that you have followed somebody costs you no ground at all.\n\nThe three thoughts that cause the trouble:\n1. \"If I say I understand, I've agreed\" — you have understood, which is different.\n2. \"Understanding without helping is useless\" — being understood is the help, most of the time.\n3. \"I need something clever to say\" — a rephrase in your own words is enough.\n\nMindset: focus on their perspective, choose one strategy that fits the flow, and mean it rather than perform it. That is the whole exercise.",
      inputs: [
        { q: "You avoid saying you understand in case it sounds like agreeing.", a: "\"Understanding and agreeing are different things. I can do the first and still disagree.\"", bundle: 'pro' },
        { q: "You feel useless because you have nothing practical to offer.", a: "\"Being understood is the useful thing most of the time. That's not a consolation prize.\"", bundle: 'pro' },
        { q: "You think you need something insightful to say.", a: "\"A rephrase in my own words does more than anything clever would.\"", bundle: 'pro' },
        { q: "You feel awkward reflecting something back.", a: "\"It only feels odd from my side. From theirs it's the thing nobody else does.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The One at a Time Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance the whole pack rests on: pick one strategy, not three.\n\nOnce you know all three moves the temptation is to use them together — reflect, then ask, then share, all in one breath. That produces a response that is about you managing the conversation rather than about them being heard.\n\nWhat overloading looks like:\n1. A loop, a question and your own story in a single turn.\n2. Two questions stacked, so they answer the second and lose the first.\n3. Reflecting something back and immediately moving on before they can respond.\n\nMindset: one move, then wait. The silence after a single well-chosen response is doing more than a second response would.",
      inputs: [
        { q: "You want to reflect, ask and relate all at once.", a: "\"One of them. Then wait. The pause is part of the move.\"", bundle: 'pro' },
        { q: "You stack two questions and they answer the easier one.", a: "\"One question. If I ask two, I've chosen the one they'll dodge.\"", bundle: 'pro' },
        { q: "You reflect something back and immediately keep talking.", a: "\"Leave the space. That's where they say the real thing.\"", bundle: 'pro' },
        { q: "You feel the silence after your response and rush to fill it.", a: "\"Two seconds isn't awkward. It's them deciding whether to go further.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Genuine Interest Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance behind all three moves: the technique is scaffolding, and the room still has to be real.\n\nEvery one of these three moves has a formula, and every formula can be run without any attention behind it. Somebody can always tell. The words are nearly identical; what differs is whether you wanted the answer.\n\nWhere the performance shows:\n1. You ask a follow-up and do not listen to the answer.\n2. You loop back accurately with no warmth in it at all.\n3. You relate with a story you were going to tell regardless.\n\nMindset: show genuine interest, not the strategy. If you are not actually curious, a plain \"that sounds hard\" beats a well-executed technique.",
      inputs: [
        { q: "You ask a follow-up and realise you did not hear the answer.", a: "\"Then the question was for me, not them. Ask again and mean it.\"", bundle: 'pro' },
        { q: "Your loop was accurate and came out cold.", a: "\"Accurate isn't the point. Would I say it that way to someone I like?\"", bundle: 'pro' },
        { q: "You relate with a story you wanted to tell anyway.", a: "\"That's my turn dressed as listening. Save it.\"", bundle: 'pro' },
        { q: "You are not actually curious about the topic.", a: "\"Then say the honest small thing. 'That sounds hard' beats a technique.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Not My Turn Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance behind Relate Through Sharing: your story is a nod, not a turn.\n\nRelating is the most enjoyable of the three moves to do, which is exactly why it is the one that goes wrong. The pull towards your own version is strong, and it arrives disguised as empathy.\n\nThree questions to ask yourself mid-sentence:\n1. Is my version longer than theirs was? Then cut it.\n2. Am I telling this because it helps them, or because I want to?\n3. Have they finished yet? If not, this is not the moment.\n\nMindset: two sentences, then hand it back. Connection, not comparison — and never \"the same thing happened to me but worse\".",
      inputs: [
        { q: "Your version is getting longer than theirs.", a: "\"Cut it to two sentences and hand it back. It's a nod, not a turn.\"", bundle: 'pro' },
        { q: "You want to tell your story more than you want to hear theirs.", a: "\"That's the signal to wait. Relating that serves me isn't relating.\"", bundle: 'pro' },
        { q: "You are about to say your version was worse.", a: "\"That's competing, not connecting. Everyone can hear the difference.\"", bundle: 'pro' },
        { q: "They have not finished and you have a perfect match ready.", a: "\"It'll still be true in two minutes. Let them finish first.\"", bundle: 'pro' },
      ]
    },
  ],
  startingconversations4: [
    {
      name: "Somebody Has to Go First",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "In almost every room, several people are waiting for someone else to say the thing. Whoever admits to being nervous, makes the joke about the queue, or says they know nobody here is not exposing themselves — they are doing the thing everyone was hoping somebody would do.\n\nThat is the whole logic of this pack. Going first costs you a few seconds of risk and buys the other person permission.\n\nMindset: the exposure is real and it is brief. What it buys is not.",
      inputs: [
        { q: "Why should it be me who breaks the silence?", a: "Because everyone else is asking the same question. Somebody has to answer it.", bundle: 'pro' },
        { q: "If I go first and it fails I'll look stupid.", a: "For a moment, to one person, who'll have forgotten by the bus home.", bundle: 'pro' },
        { q: "I'd rather wait and see if they open.", a: "They're waiting too. That's why nothing is happening.", bundle: 'pro' },
        { q: "It's not my job to make this less awkward.", a: "It isn't. It's just within your power, which is different.", bundle: 'pro' },
        { q: "I never know what to say first.", a: "\"I don't know anyone here\" is enough, and it's always true when it's true.", bundle: 'pro' },
      ]
    },
    {
      name: "A Missed Joke Is Cheap",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "People avoid humour with strangers because a joke that fails feels like a small public failure. It is worth measuring what actually happens: a half-smile, two seconds of nothing, and a conversation that continues.\n\nWhat makes it expensive is the response — explaining it, repeating it, apologising at length. Left alone, a missed joke evaporates.\n\nMindset: say it, and if it misses, carry on as though it did not.",
      inputs: [
        { q: "What if the joke doesn't land?", a: "Then nothing happens, and you say something plain instead.", bundle: 'pro' },
        { q: "They'll think I'm trying too hard.", a: "One light remark about a queue is not trying hard.", bundle: 'pro' },
        { q: "I'm not funny.", a: "You don't need to be funny. You need to say the obvious thing everyone's thinking.", bundle: 'pro' },
        { q: "I should explain what I meant.", a: "That's the only thing that turns a missed joke into an awkward one.", bundle: 'pro' },
        { q: "I'll wait until I know them better.", a: "The queue joke is how you get to know them. It doesn't work in reverse.", bundle: 'pro' },
      ]
    },
    {
      name: "Small Feelings, Not Big Ones",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Saying how you feel is powerful precisely because it is small. \"I'm nervous about this\" invites a matching admission; something much larger invites concern, and concern is a different kind of conversation that a stranger did not sign up for.\n\nThe rule is easy to apply: if it would need explaining, it is too big for an opener. That is not a rule about hiding things — it is about what a first conversation can hold.\n\nMindset: current, small, about this room.",
      inputs: [
        { q: "If I'm being honest I should say the whole thing.", a: "Honest doesn't mean complete. \"It's been a long week\" is entirely honest.", bundle: 'pro' },
        { q: "Small feelings seem too trivial to mention.", a: "They're the ones other people can match. That's what makes them work.", bundle: 'pro' },
        { q: "I don't want to seem like I'm complaining.", a: "One sentence about being tired isn't complaining. Five minutes is.", bundle: 'pro' },
        { q: "They'll think I'm oversharing.", a: "Not at this size. Oversharing starts where the explaining starts.", bundle: 'pro' },
        { q: "Nobody wants to hear that I'm nervous.", a: "Half the room is nervous and wishing someone would say so.", bundle: 'pro' },
      ]
    },
    {
      name: "The Real Reason Works Best",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "When people finally approach someone, they often reach for a pretext — a question they do not need answered, a comment they do not mean. It feels safer than saying why they actually came over.\n\nBut the pretext is usually visible, and the true reason is almost always more disarming. \"I don't know anybody here\" is not a confession of failure; it is the most ordinary sentence in the world, and it makes the other person relax.\n\nMindset: awkward and true beats smooth and invented.",
      inputs: [
        { q: "I need a reason to go over there.", a: "\"I don't know anyone here\" is a reason, and it happens to be true.", bundle: 'pro' },
        { q: "Admitting I'm alone makes me look like a loser.", a: "It makes you look like someone at an event. Which is what everyone there is.", bundle: 'pro' },
        { q: "I'll think of a question to ask as an excuse.", a: "You could. The true version is shorter and works better.", bundle: 'pro' },
        { q: "Saying \"I've been meaning to say hello\" sounds odd after this long.", a: "It sounds like relief. They've been thinking it too.", bundle: 'pro' },
        { q: "It's embarrassing to admit I find this hard.", a: "Almost everyone does, and the one who says it is the one people warm to.", bundle: 'pro' },
      ]
    },
  ],
  apologizing2: [
    {
      name: "Sorry Comes After Understanding",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The instinct is to lead with the apology and explain afterwards. It feels like the fastest route to resolution, and it is the reason so many sincere apologies land badly.\n\nAn apology that arrives before any understanding is heard as a request: please let this be over. The same words, said after you have shown you know what it was like for them, are heard as repair. Nothing changes except the order.\n\nMindset: earn the word sorry, then say it.",
      inputs: [
        { q: "I should just say sorry and get it over with.", a: "\"Get it over with\" is exactly what they'll hear. Do their side first.", bundle: 'pro' },
        { q: "They know I'm sorry, that's the main thing.", a: "They know you said it. What they want to know is whether you understood.", bundle: 'pro' },
        { q: "Talking about their feelings first feels like a technique.", a: "It is one, and it's the honest one — you're finding out before you speak.", bundle: 'pro' },
        { q: "It's quicker to apologise straight away.", a: "Quicker for you. That's what they'll notice.", bundle: 'pro' },
        { q: "I don't know what they felt.", a: "Then ask. That's a better first sentence than sorry.", bundle: 'pro' },
      ]
    },
    {
      name: "Specific Beats Sincere",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Sincerity is not something you can transmit by trying harder. What actually communicates it is detail — the fact that you know which afternoon it was, what they had rearranged, what the room was like when you said it.\n\nThat is why an apology full of feeling words often lands worse than a plain one full of particulars. The particulars are the evidence that you thought about it.\n\nMindset: say the specific thing. The sincerity comes with it.",
      inputs: [
        { q: "I need them to know I really mean it.", a: "Name what actually happened. That's what \"really means it\" sounds like.", bundle: 'pro' },
        { q: "I'll say it more warmly this time.", a: "More warmly won't help. More specifically will.", bundle: 'pro' },
        { q: "I don't remember the details well enough.", a: "Then ask about them. That conversation is itself the apology working.", bundle: 'pro' },
        { q: "The details feel like dwelling on it.", a: "The details are how they know you were paying attention.", bundle: 'pro' },
        { q: "A general apology covers everything.", a: "It covers nothing. General is what people say when they haven't thought.", bundle: 'pro' },
      ]
    },
    {
      name: "The Plan Is the Proof",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Anyone can say sorry. The only part of an apology that costs you anything in the future is the sentence about what will be different — and to someone who has been let down before, that is the only part with any information in it.\n\nThat is also why it must be small. \"I'll be better\" promises nothing and cannot be checked. \"I'll write it down while you're telling me\" is something they can watch happen or not happen.\n\nMindset: end with something checkable, then do it.",
      inputs: [
        { q: "The apology should be enough on its own.", a: "The first time, maybe. After that, only the change counts.", bundle: 'pro' },
        { q: "I don't want to promise something I might not keep.", a: "Then promise something smaller. A kept small promise beats a broken large one.", bundle: 'pro' },
        { q: "Saying what I'll do sounds like I'm managing them.", a: "It sounds like you've thought about it. That's the opposite of managing.", bundle: 'pro' },
        { q: "I'll just try harder, that's the plan.", a: "That's not a plan, it's a feeling. What will you actually do differently?", bundle: 'pro' },
        { q: "They should be able to trust me without a plan.", a: "They should. A checkable sentence is how trust gets rebuilt after it's been dented.", bundle: 'pro' },
      ]
    },
    {
      name: "Do Not Make Them Comfort You",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "A long, distressed apology puts the other person in a difficult position: the injured party ends up reassuring the person who caused the injury. It feels like remorse and it functions as a demand.\n\nThe generous version is clear, specific, and does not require them to make you feel better. Your discomfort is real and it is yours to carry.\n\nMindset: apologise once, properly, and manage your own regret.",
      inputs: [
        { q: "I need them to know how badly I feel about it.", a: "They need to know you understood. How bad you feel is yours to handle.", bundle: 'pro' },
        { q: "If I apologise enough they'll see I mean it.", a: "Repetition reads as wanting forgiveness, not as meaning it.", bundle: 'pro' },
        { q: "They said it's fine but I don't think they mean it.", a: "Ask once, plainly. Then take the answer.", bundle: 'pro' },
        { q: "I feel terrible and I want to say so.", a: "One sentence. Then stop, so they don't have to look after you.", bundle: 'pro' },
        { q: "It'd be cold to just say it and move on.", a: "Clear and specific isn't cold. Prolonged is what becomes uncomfortable.", bundle: 'pro' },
      ]
    },
  ],
  startingconversations2: [
    {
      name: "Being Asked Is a Compliment",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Most people avoid asking for small favours because it feels like an imposition — as though a stranger's time were being taken. But being asked for something small is one of the more pleasant things that happens in an ordinary day. You are treated as competent, trusted or knowledgeable, and it takes four seconds.\n\nWatch what happens when someone asks you. You almost certainly do not resent it.\n\nMindset: a small request is a gift as often as it is a cost.",
      inputs: [
        { q: "I don't want to bother them.", a: "A four-second favour isn't a bother. Think how you feel when someone asks you.", bundle: 'pro' },
        { q: "I should be able to work this out myself.", a: "Probably. Asking is also how conversations start.", bundle: 'pro' },
        { q: "They're busy, it's not fair to ask.", a: "Then ask something that takes four seconds and thank them properly.", bundle: 'pro' },
        { q: "I'll look incompetent.", a: "You'll look like someone who asks rather than stands there guessing.", bundle: 'pro' },
        { q: "They might say no.", a: "Then they say no, and you have lost nothing at all.", bundle: 'pro' },
      ]
    },
    {
      name: "Say the Useful Thing",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "People notice a broken machine, a shorter queue, a locked door — and say nothing, because speaking to a stranger feels like more of an event than staying quiet does.\n\nBut offering information is the least intrusive thing you can do. It has an obvious reason, it costs them nothing, and even when it goes no further you have made someone's next ten minutes easier.\n\nMindset: if you know something they would want to know, that is reason enough to speak.",
      inputs: [
        { q: "They'll probably work it out themselves.", a: "Probably, in ten minutes. You could save them the ten minutes.", bundle: 'pro' },
        { q: "It's not my business to interfere.", a: "Telling someone a door is locked isn't interfering.", bundle: 'pro' },
        { q: "They might already know.", a: "Then they say \"oh, thanks\" and you've lost two seconds.", bundle: 'pro' },
        { q: "It feels like showing off that I know.", a: "It feels like that from inside. From outside it's just helpful.", bundle: 'pro' },
        { q: "I'd have to go over there to say it.", a: "Yes. That's the whole thing you're practising.", bundle: 'pro' },
      ]
    },
    {
      name: "Remembering Is the Whole Gift",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "People consistently underestimate what it does to be asked a specific question about their own life. Not \"how are you\" but \"how did Thursday go\" — the second one says you were listening, and that you thought about them at some point when they were not there.\n\nIt is a small effort with an unusually large return, and it is the opener people most often skip in favour of a greeting.\n\nMindset: if you remember something, use it. That is what remembering is for.",
      inputs: [
        { q: "They probably don't want to be asked about it.", a: "Most people very much do. Being remembered is rare enough to be noticeable.", bundle: 'pro' },
        { q: "It was weeks ago, it'd be odd to bring up.", a: "\"You mentioned this a while back\" covers that entirely.", bundle: 'pro' },
        { q: "I might have the details wrong.", a: "Then ask loosely. Getting it half right still shows you listened.", bundle: 'pro' },
        { q: "A general \"how are you\" is easier.", a: "It is, and it gets \"fine\". That's the trade you're making.", bundle: 'pro' },
        { q: "I don't want to seem like I've been thinking about them.", a: "You listened once. That's all it shows, and it's a good thing to show.", bundle: 'pro' },
      ]
    },
    {
      name: "You Need Something Real",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Every opener in this pack depends on something being true — a genuine request, a genuine piece of information, a shared thing that actually happened, a thread you actually remember. That is what makes them work, and it is also their limit.\n\nWhen none of them is true, the honest move is not to manufacture one. It is to use a plainer opener, or to say nothing. Manufactured common ground is easy to spot and worse than a simple hello.\n\nMindset: use the opener that is true. If none is, there are simpler ones.",
      inputs: [
        { q: "I'll invent a question so I've got a reason to talk to them.", a: "Or just say hello. It's more honest and it works better.", bundle: 'pro' },
        { q: "We must have something in common I can use.", a: "You're in the same room. Sometimes that's genuinely all there is, and it's enough.", bundle: 'pro' },
        { q: "A made-up reason is better than no reason.", a: "It isn't. People hear the difference, even if they can't name it.", bundle: 'pro' },
        { q: "I need a better opener than \"hi\".", a: "You don't. You need to say something, and \"hi\" is something.", bundle: 'pro' },
        { q: "If I can't find common ground I shouldn't approach.", a: "Common ground is usually built in the conversation, not before it.", bundle: 'pro' },
      ]
    },
  ],
  startingconversations3: [
    {
      name: "Attention Is the Gift",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "People overestimate how clever an opener has to be and underestimate what plain attention does. Being noticed — specifically, accurately, out loud — is uncommon enough that it lands regardless of how well you phrase it.\n\nThat is why a four-word compliment about a bag works, and why a specific question about someone's life gets a warmer response than any amount of charm.\n\nMindset: you do not need to be interesting. You need to be paying attention.",
      inputs: [
        { q: "I need to say something impressive.", a: "You need to notice something true. That's a much lower bar and it works better.", bundle: 'pro' },
        { q: "They must get complimented all the time.", a: "On specifics? Almost nobody does.", bundle: 'pro' },
        { q: "I'm not a natural at this.", a: "Noticing isn't a talent. It's just looking, and then saying it.", bundle: 'pro' },
        { q: "They won't care what I think.", a: "Being noticed is not about your opinion. It's about having been seen.", bundle: 'pro' },
        { q: "I'd rather wait until I know them better.", a: "This is how people come to know each other. Nothing precedes it.", bundle: 'pro' },
      ]
    },
    {
      name: "Say It Out Loud",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Most compliments are thought and never said. You notice the coat, the question, the way someone handled a difficult person — and then the moment passes and it starts to feel odd to mention.\n\nThe cost of saying it is about two seconds of mild exposure. The cost of not saying it is that a good thing you noticed simply never existed for the other person.\n\nMindset: if you noticed it and it is true, say it now.",
      inputs: [
        { q: "It'd be weird to say it out of nowhere.", a: "\"That's a great coat\" has never been weird in the history of coats.", bundle: 'pro' },
        { q: "They'll think I want something.", a: "Say it and want nothing. That settles it within seconds.", bundle: 'pro' },
        { q: "The moment's passed now.", a: "\"I meant to say earlier\" fixes that entirely.", bundle: 'pro' },
        { q: "It's too small a thing to mention.", a: "Small and specific is exactly the kind people remember.", bundle: 'pro' },
        { q: "I'd feel embarrassed.", a: "For two seconds. They'll be pleased for considerably longer.", bundle: 'pro' },
      ]
    },
    {
      name: "Being Wrong Works Too",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The fear behind not guessing is looking foolish. But a wrong guess is one of the more productive things you can say to a stranger: it gives them something to correct, and corrections come with reasons and stories attached.\n\nWatch what happens. \"No, actually, it's my first time\" is more words and more material than \"yes\" would ever have been.\n\nMindset: aim to be interesting, not accurate.",
      inputs: [
        { q: "What if I guess wrong and look stupid?", a: "Then they correct you and tell you the real answer. That's the opener working.", bundle: 'pro' },
        { q: "I should only say things I'm sure about.", a: "Then you'll say very little to people you've just met.", bundle: 'pro' },
        { q: "It's presumptuous to guess about someone.", a: "Not if you say it as a guess. That's what \"let me guess\" is for.", bundle: 'pro' },
        { q: "They might be offended.", a: "Keep it to experience and mood rather than background, and they won't be.", bundle: 'pro' },
        { q: "A question would be safer.", a: "Safer and flatter. A guess gets more back, right or wrong.", bundle: 'pro' },
      ]
    },
    {
      name: "Only Ask If You Want the Answer",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "\"How are you\" asked in passing is a greeting, and everyone understands it as one. The real version is different: it invites someone to say something true, and that invitation has to be honoured.\n\nAsking it while walking away, or while looking at your phone, or when you have two minutes, is worse than not asking — because you have signalled interest and then withdrawn it, which is a small unkindness the other person will remember.\n\nMindset: ask when you can stay. Otherwise use the greeting version and mean that instead.",
      inputs: [
        { q: "I should ask how they are, they look awful.", a: "Only if you can stop and hear it. If not, say hello properly and come back later.", bundle: 'pro' },
        { q: "What if they tell me something I can't handle?", a: "You don't have to handle it. Listening and not leaving is the whole job.", bundle: 'pro' },
        { q: "I don't know what to say if they open up.", a: "\"That sounds hard\" covers almost everything. Silence covers the rest.", bundle: 'pro' },
        { q: "It's not my place to ask.", a: "You noticed. That's usually place enough, asked gently and once.", bundle: 'pro' },
        { q: "They'll say fine anyway.", a: "Probably. And they'll have registered that someone actually asked.", bundle: 'pro' },
      ]
    },
  ],
  endingconversations: [
    {
      name: "The Ending Is What They Remember",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "People remember how a conversation finished far more clearly than what was in the middle of it. A good ten minutes closed abruptly is remembered as odd; a flat ten minutes closed warmly is remembered as fine.\n\nThat is an unusually good deal. Eight seconds of attention at the end does more for how you are remembered than anything you could have said earlier.\n\nMindset: spend the last eight seconds properly. They count more than the rest.",
      inputs: [
        { q: "The conversation went well, so the ending doesn't matter much.", a: "It matters most. It's the part they'll actually remember.", bundle: 'pro' },
        { q: "It was a boring chat, there's nothing to say at the end.", a: "A warm ending fixes a dull conversation. Nothing fixes a cold ending.", bundle: 'pro' },
        { q: "I'll just drift away, it's easier.", a: "Drifting is the thing people find strange. Four words prevent it.", bundle: 'pro' },
        { q: "They won't notice how it ended.", a: "It's the one bit everyone notices, usually without knowing why.", bundle: 'pro' },
        { q: "A proper goodbye takes too long.", a: "About eight seconds. Time it once and see.", bundle: 'pro' },
      ]
    },
    {
      name: "You Do Not Need Permission",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "A surprising number of conversations run twenty minutes longer than either person wanted, because both are waiting for the other to end it. Each assumes leaving would be rude, and neither knows the other is thinking the same thing.\n\nEnding a conversation is not a rejection and does not require the other person's agreement. You are allowed to go.\n\nMindset: somebody has to end it, and it is usually a relief when they do.",
      inputs: [
        { q: "It would be rude to end it.", a: "Ending conversations is normal. Trapping someone in one isn't.", bundle: 'pro' },
        { q: "They might think I'm bored.", a: "That's what the reason and the warm sentence are for. Use them.", bundle: 'pro' },
        { q: "I should wait for a natural gap.", a: "There often isn't one. That's why \"right, I'd better get on\" exists.", bundle: 'pro' },
        { q: "They're enjoying it, so I can't leave.", a: "You can leave and say you enjoyed it. Both are true at once.", bundle: 'pro' },
        { q: "I'll stay another ten minutes to be polite.", a: "They may well be waiting for you to go. Very often they are.", bundle: 'pro' },
      ]
    },
    {
      name: "A Reason Can Be Small",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "People invent elaborate reasons for leaving, or stay because they cannot think of a good enough one. But nobody examines your reason. They only need something to attach the ending to, so that it is about your day rather than about them.\n\n\"I should get on\" does the whole job. So does \"I've got a couple of things to sort\".\n\nMindset: any reason works. It only has to exist, not to be impressive.",
      inputs: [
        { q: "I need a proper excuse to leave.", a: "You need a sentence. \"I should get on\" is a sentence.", bundle: 'pro' },
        { q: "They'll see straight through a vague reason.", a: "They won't be looking. Nobody audits this.", bundle: 'pro' },
        { q: "I'd have to lie to get out of this.", a: "You wouldn't. \"I want to catch a few other people\" is true and fine.", bundle: 'pro' },
        { q: "My reason isn't important enough.", a: "Importance isn't the point. Existence is.", bundle: 'pro' },
        { q: "If I say I have to go they'll ask where.", a: "They almost never do. And \"just something I need to sort\" answers it.", bundle: 'pro' },
      ]
    },
    {
      name: "Leaving Well Protects the Next Time",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Every ending is also a setup. An abrupt exit makes the next conversation slightly harder to start; a warm one means the next meeting begins somewhere further along.\n\nThat is why the moves in this pack are worth the seconds they cost. Wishing someone well about something specific, or offering to hear the rest on Thursday, is not politeness for its own sake — it is what makes the next conversation easy.\n\nMindset: end in a way that makes the next one easier to begin.",
      inputs: [
        { q: "I'll see them tomorrow anyway, so it doesn't matter.", a: "Tomorrow starts wherever today finished. Finish it well.", bundle: 'pro' },
        { q: "It was only a small chat.", a: "Small chats are what relationships are made of. Close them properly.", bundle: 'pro' },
        { q: "Saying \"let's pick this up\" sounds like a line.", a: "Only if you don't mean it. If you do, it's the best thing you can leave behind.", bundle: 'pro' },
        { q: "I don't know them well enough for a warm goodbye.", a: "\"It was nice talking to you\" fits any level of knowing someone.", bundle: 'pro' },
        { q: "I've left it awkwardly with them before.", a: "Then this ending is the repair. It's cheaper than you think.", bundle: 'pro' },
      ]
    },
  ],
  changingtopics: [
    {
      name: "The Changing-Topics Mindset",
      guideFront: "A thought that holds you back.",
      guideBack: "A way to reset it.",
      description: "The pack-wide stance: changing the subject isn't rude, it's steering — guiding a conversation somewhere better is a service to both people, not a hijack. Example of the shift — instead of suffering through a dead topic to be polite, you gently move it along and everyone relaxes.\n\nThe three thoughts that cause the trouble:\n1. \"Changing the subject is rude\" — sitting in a dead topic to be polite helps nobody.\n2. \"They'll notice and be offended\" — done with a bridge or a nod, most people feel relief.\n3. \"It's not my place to steer\" — someone has to, and it is usually whoever notices first.\n\nMindset: changing the subject is steering, not hijacking. Guiding a conversation somewhere better is a service to both of you.",
      inputs: [
        { q: "You feel it's rude to change the subject.", a: "\"Steering isn't rude. Keeping a dead topic alive out of politeness helps no one.\"", bundle: 'pro' },
        { q: "You can't think of a clever bridge, so you stay stuck.", a: "\"I don't need a perfect bridge. 'By the way' is a complete sentence.\"", bundle: 'pro' },
        { q: "You worry the other person will notice you're switching.", a: "\"So what if they notice? A warm, open switch reads as confidence, not evasion.\"", bundle: 'pro' },
        { q: "Your switch landed a bit awkwardly and you feel embarrassed.", a: "\"One clunky transition isn't a disaster. I acknowledge it, smile, and carry on.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Sensitive-Steer Mindset",
      guideFront: "A thought that holds you back.",
      guideBack: "A way to reset it.",
      description: "The stance behind Steering Away from Sensitive: you can care about someone and move the conversation somewhere kinder at the same time — protecting them isn't evasion. Example of the shift — instead of freezing in an awkward topic, you gently guide it somewhere safer.\n\nWhere it goes wrong:\n1. You freeze in an uncomfortable topic because leaving feels like abandoning them.\n2. You change the subject with no acknowledgement, and it reads as cold.\n3. You keep the topic going out of politeness while they visibly shrink.\n\nMindset: you can care about someone and move the conversation somewhere kinder at the same time. Protecting them is not evasion.",
      inputs: [
        { q: "A sensitive topic is dragging and you feel trapped in it.", a: "\"I can care about them and move us somewhere kinder at the same time.\"", bundle: 'pro' },
        { q: "You worry that steering away looks like you don't care.", a: "\"Redirecting gently IS the caring move — I'm sparing them, not dodging them.\"", bundle: 'pro' },
        { q: "You feel you have to solve the heavy topic before you can leave it.", a: "\"I don't have to fix it. Sometimes the kindest thing is to lighten the room.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Respectful-Exit Mindset",
      guideFront: "A thought that holds you back.",
      guideBack: "A way to reset it.",
      description: "The stance behind Respectful Exit: letting a topic end is part of a good conversation — my job is flow, not endurance. Example of the shift — instead of forcing a spent topic along, you close it warmly and open something fresh.\n\nWhere it goes wrong:\n1. You force a spent topic along because ending it feels like rejection.\n2. You wait for them to close it, and they are waiting for you.\n3. You treat a long conversation as a better one.\n\nMindset: letting a topic end is part of a good conversation. Your job is flow, not endurance.",
      inputs: [
        { q: "You feel responsible for keeping every topic going forever.", a: "\"My job is flow, not endurance. Letting a topic end is part of a good conversation.\"", bundle: 'pro' },
        { q: "You're bored but assume it's your fault for not being interested.", a: "\"If I'm drifting, the topic's probably run its course — that's a cue, not a failing.\"", bundle: 'pro' },
        { q: "You keep waiting for a 'natural' gap that never comes.", a: "\"Sometimes I make the gap. Waiting forever is just avoiding the move.\"", bundle: 'pro' },
      ]
    },
  ],
  reactingtounexpectedstatements: [
    {
      name: "You Are Allowed a Second",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "There is a strong sense that conversation runs on a clock and that a gap is a failure — that a competent person has a response ready for whatever arrives.\n\nNobody does. Every good answer to something surprising was arrived at, and the arriving takes a couple of seconds. Taking them openly is not a lapse; it is what the answer costs.\n\nMindset: the pause is part of answering well, not a break in it.",
      inputs: [
        { q: "If I don't answer straight away I'll look slow.", a: "You'll look like someone thinking about what they say. That's rarer than fast.", bundle: 'pro' },
        { q: "The silence is unbearable.", a: "Six words fix it: \"give me a second with that\".", bundle: 'pro' },
        { q: "They're waiting for me.", a: "For two seconds. That's genuinely all it is.", bundle: 'pro' },
        { q: "A quick answer keeps things flowing.", a: "It also produces the answers people wish they hadn't given.", bundle: 'pro' },
        { q: "I should be able to think on my feet.", a: "This is thinking on your feet. Out loud is still on your feet.", bundle: 'pro' },
      ]
    },
    {
      name: "\"I Don't Know\" Is a Complete Answer",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Not knowing what to say feels like failing at the conversation, so people fill the gap — with a stock phrase, a change of subject, or an opinion assembled on the spot.\n\nAll three are worse than the honest version, and the honest version is the one people remember warmly. Someone who has just said something difficult is bracing for a managed response, and plain bewilderment is more welcome than any of the alternatives.\n\nMindset: say it, and stay. The staying is the part that counts.",
      inputs: [
        { q: "I need to say something helpful.", a: "\"I don't know what to say\" is helpful. It's true and it's present.", bundle: 'pro' },
        { q: "That's just admitting I can't handle it.", a: "It's declining to fake it, which is the opposite.", bundle: 'pro' },
        { q: "They'll think I don't care.", a: "The stock phrase reads as not caring. The honest one doesn't.", bundle: 'pro' },
        { q: "I should have something for a moment like this.", a: "Nobody has. The people who seem to are usually saying less, not more.", bundle: 'pro' },
        { q: "If I say that, the conversation stops.", a: "It usually opens. It's not a response they were braced for.", bundle: 'pro' },
      ]
    },
    {
      name: "The First Reaction Is Rarely the Best One",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The response that arrives instantly is assembled from surprise rather than thought, and it is almost always sharper, more dismissive or more definite than what you actually think.\n\nThat is not a character flaw; it is what surprise does. The useful habit is simply to notice the gap between reacting and answering, and to put a few seconds in it.\n\nMindset: notice the first thing, and do not necessarily say it.",
      inputs: [
        { q: "My gut reaction is usually right.", a: "About what you feel, often. About what to say, much less often.", bundle: 'pro' },
        { q: "If I don't say it now I'll lose the point.", a: "A point worth making survives ten seconds.", bundle: 'pro' },
        { q: "They asked, so they want my honest first thought.", a: "They want your honest thought. The first one and the honest one aren't always the same.", bundle: 'pro' },
        { q: "Being spontaneous is more genuine.", a: "Considered is also genuine, and easier to stand behind tomorrow.", bundle: 'pro' },
        { q: "I've already said the sharp version.", a: "Then go back. \"That was a reaction, not what I think\" is always available.", bundle: 'pro' },
      ]
    },
    {
      name: "Coming Back Is Not Weakness",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Returning to something a day later feels like conceding that you handled it badly, so people leave the first answer standing even when they no longer believe it.\n\nIn practice it does the opposite of what is feared. Someone who comes back with a considered view is treated as more reliable, not less — because the first answer is now clearly a first answer rather than what they think.\n\nThe condition is that the return actually happens. Deferring and never returning is worse than a poor answer in the moment.\n\nMindset: come back on the day you said, and say what you actually think.",
      inputs: [
        { q: "Going back to it makes it a bigger thing.", a: "Leaving a wrong answer standing is the bigger thing.", bundle: 'pro' },
        { q: "They'll have forgotten by now.", a: "They almost certainly haven't. People remember the surprising ones.", bundle: 'pro' },
        { q: "It'd be awkward to raise it again.", a: "\"Can I come back to yesterday?\" is one sentence and nobody minds it.", bundle: 'pro' },
        { q: "I said I'd think about it and I haven't.", a: "Then say that, and give a new day. Don't just let it go quiet.", bundle: 'pro' },
        { q: "My answer would be the same anyway.", a: "Then say it again, deliberately. That's different from having reacted.", bundle: 'pro' },
      ]
    },
  ],
  exploringatopic: [
    {
      name: "The Exploring-a-Topic Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The pack-wide stance: a good group conversation is not about being the most interesting person in it, but about keeping the ball in the air. Every move you make either feeds the topic or ends it. Example of the shift — instead of hunting for something impressive to say, you ask the question that keeps everyone else talking.\n\nThe three thoughts that cause the trouble:\n1. \"I have nothing worth saying\" — a question is worth saying.\n2. \"I should find a subject I'm better at\" — jumping topics is the easy escape.\n3. \"Someone else will keep it going\" — everyone at the table is thinking that.\n\nMindset: every move you make either feeds the topic or ends it. There is no neutral turn.",
      inputs: [
        { q: "You feel you need something impressive to say.", a: "\"It isn't a competition for the best story. Keeping it going is the contribution.\"", bundle: 'pro' },
        { q: "You go quiet because you have nothing to add.", a: "\"A question counts. I don't have to know anything to keep this alive.\"", bundle: 'pro' },
        { q: "You want to move to a subject you are better at.", a: "\"Jumping topics is the easy escape. There's more in this one if I look.\"", bundle: 'pro' },
        { q: "You feel the conversation dying and freeze.", a: "\"One question or one small story restarts it. It doesn't have to be clever.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Nothing-to-Add Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance behind Ask an Open Question: you do not need knowledge of a subject to take part in it. Curiosity is a full contribution, and the people who do know are usually glad to be asked. Example of the shift — instead of sitting out a conversation about cars, you ask what got them into it.\n\nWhere the block shows up:\n1. You sit out a whole conversation about cars.\n2. You wait for a subject you know before you speak.\n3. You worry the basic question will sound stupid.\n\nMindset: not knowing is not a reason to be silent, it is a reason to ask. One question puts you in the conversation without needing a single fact.",
      inputs: [
        { q: "The group is talking about something you know nothing about.", a: "\"Not knowing isn't a reason to be silent. It's a reason to ask.\"", bundle: 'pro' },
        { q: "You worry your question will sound stupid.", a: "\"People like explaining the thing they're into. The basic question is usually welcome.\"", bundle: 'pro' },
        { q: "You feel like an outsider in the conversation.", a: "\"One question puts me in it. I don't have to earn my way in with facts.\"", bundle: 'pro' },
        { q: "You wait for a subject you know before speaking.", a: "\"If I only speak on my own topics, I'm barely in the conversation.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Ordinary-Is-Enough Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance behind Share a Related Experience: your piece does not have to be dramatic or funny to belong. Small, ordinary experiences are what most good conversations are made of. Example of the shift — instead of holding back a plain story, you tell the one about the basil that died.\n\nThree things your contribution does not need to be:\n1. Not dramatic — a dead basil plant is plenty.\n2. Not funny — a punchline is a bonus, not a requirement.\n3. Not better than theirs — it is not a ranking.\n\nMindset: small and specific beats big and vague. Ordinary experience is what most good conversations are actually made of.",
      inputs: [
        { q: "You hold back a story because it is not interesting enough.", a: "\"Ordinary is fine. Most of a good conversation is small stuff, told warmly.\"", bundle: 'pro' },
        { q: "You compare your story to the better one just told.", a: "\"It's not a ranking. Mine only has to be related, not better.\"", bundle: 'pro' },
        { q: "You think you need a punchline before you can share anything.", a: "\"A detail is enough. The point is joining in, not performing.\"", bundle: 'pro' },
        { q: "You stay silent because your experience feels too small.", a: "\"Small experiences are relatable, and that's worth more here than impressive ones.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Balance Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance behind Share, Then Invite: holding the floor is not winning, and handing it over is not losing. The conversation people remember well is the one that got shared out. Example of the shift — instead of adding a fourth point of your own, you ask what the others think.\n\nThe tell is what you do with a pause:\n1. Fill it with another point of your own — that is holding the floor.\n2. Fill it with a question — that is passing it on.\n3. Notice who has not spoken — that is running the room well.\n\nMindset: giving the topic away is what keeps it alive. It comes back richer than you left it.",
      inputs: [
        { q: "You are enjoying having the floor and keep going.", a: "\"Holding the floor isn't winning. The best conversations get passed around.\"", bundle: 'pro' },
        { q: "You feel that handing over the topic means losing it.", a: "\"Giving it away keeps it alive. It comes back richer than I left it.\"", bundle: 'pro' },
        { q: "You worry you have been talking too much.", a: "\"Easy fix. One question and the balance is back.\"", bundle: 'pro' },
        { q: "You notice someone has said nothing and say nothing about it.", a: "\"Opening a door for one quiet person can change the whole table.\"", bundle: 'pro' },
      ]
    },
  ],
  deepquestions: [
    {
      name: "The Deep Questions Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The pack-wide stance: you are not interviewing anyone, you are being curious out loud. Curiosity plus a bit of care is what makes a bigger question feel safe rather than nosy. Example of the shift — instead of wondering whether the question is allowed, you notice that you actually want to know the answer.\n\nThe three thoughts that cause the trouble:\n1. \"This is prying\" — interest is a compliment, not an intrusion.\n2. \"I need a clever question\" — \"what was that like?\" does most of the work.\n3. \"Keeping it light is safer\" — safer, but nothing grows there.\n\nMindset: curiosity plus a bit of care is what makes a bigger question feel safe. You are not interviewing anyone; you are being curious out loud.",
      inputs: [
        { q: "You feel that asking a real question is prying.", a: "\"Curiosity isn't prying. I'm interested in them, and interest is a compliment.\"", bundle: 'pro' },
        { q: "You worry a deeper question will make things awkward.", a: "\"Most people like being asked about what matters to them. The awkwardness is usually only in my head.\"", bundle: 'pro' },
        { q: "You think you need a clever question to go deeper.", a: "\"It doesn't have to be clever. 'What was that like?' does most of the work.\"", bundle: 'pro' },
        { q: "You feel the conversation has to stay light to stay safe.", a: "\"Light is comfortable, but nothing grows there. One real question is where it starts.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Patience Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance behind Start with Simple Questions: small talk is not wasted time, it is the runway. You need a few facts on the table before a deeper question has anywhere to land. Example of the shift — instead of rushing to the meaningful bit, you let three easy questions do their job first.\n\nWhere the impatience shows up:\n1. You skip the easy questions because they feel boring.\n2. You ask something big in the first two minutes and it lands flat.\n3. You treat small talk as an obstacle rather than the setup.\n\nMindset: small talk is not the enemy, it is the runway. Depth takes a couple of minutes, and you can afford a couple of minutes.",
      inputs: [
        { q: "You feel small talk is pointless and want to skip it.", a: "\"Small talk isn't the enemy. It's the runway — I need it to get off the ground.\"", bundle: 'pro' },
        { q: "You rush to a big question and it lands flat.", a: "\"Too early is the same as too much. A few easy ones first.\"", bundle: 'pro' },
        { q: "You feel boring asking about hobbies and home towns.", a: "\"Simple questions aren't boring, they're groundwork. The good stuff grows out of them.\"", bundle: 'pro' },
        { q: "You want the conversation to be deep straight away.", a: "\"Depth takes a couple of minutes. I can afford a couple of minutes.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Listening Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance behind Link and Go Deeper: your next question should come out of what they just said, not off a list in your head. If you are actually listening, the question is already there. Example of the shift — instead of planning your next question while they talk, you catch the one word worth asking about.\n\nWhere the block shows up:\n1. You plan your next question while they are still talking.\n2. You go blank and reach for a brand new topic.\n3. You worry about running out of questions.\n\nMindset: being interested beats being interesting. They keep handing you material — the job is to pick some of it up, not to invent something.",
      inputs: [
        { q: "You plan your next question while they are still talking.", a: "\"If I'm writing my next line, I'm not listening. The best question is hiding in what they just said.\"", bundle: 'pro' },
        { q: "You go blank and reach for a brand new topic.", a: "\"I don't need a new topic. I need one word from the last thing they said.\"", bundle: 'pro' },
        { q: "You worry about running out of questions.", a: "\"They keep handing me material. I just have to pick some of it up.\"", bundle: 'pro' },
        { q: "You feel you should be more interesting.", a: "\"Being interested beats being interesting. That's the whole trick.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The It Is Okay to Ask Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance behind the three deeper moves — Values, Beliefs and Experiences: asking about what matters to someone is a gift, not an intrusion, as long as they get to choose how much they answer. Example of the shift — instead of swallowing the question, you ask it and let them decide how deep they go.\n\nWhat the fear sounds like from the inside:\n1. \"They'll think I'm being too personal\" — a question leaves them the choice.\n2. \"I need permission to go deeper\" — care is the permission.\n3. \"They'd rather keep it on the surface\" — most people are waiting to be asked something better.\n\nMindset: asking about what matters to someone is a gift, as long as they get to decide how much they answer.",
      inputs: [
        { q: "You swallow the question you actually wanted to ask.", a: "\"The question is allowed. They can always give me the short version.\"", bundle: 'pro' },
        { q: "You worry they will think you are being too personal.", a: "\"I'm asking, not demanding. A question leaves them the choice.\"", bundle: 'pro' },
        { q: "You assume they would rather keep things on the surface.", a: "\"Most people are waiting to be asked something better than 'how's work'.\"", bundle: 'pro' },
        { q: "You feel you need permission before going deeper.", a: "\"Care is the permission. If I ask warmly, the question is welcome.\"", bundle: 'pro' },
      ]
    },
  ],
  howtointerrupt: [
    {
      name: "The Interrupting Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The pack-wide stance: interrupting is not rude. Interrupting badly is.\n\nMost people carry a flat rule that says never cut anyone off, and then sit through whole meetings with something useful unsaid. But conversation is not a queue — turn-taking is negotiated constantly, and a signalled, reasoned interruption is part of how it works.\n\nThe three thoughts that cause the trouble:\n1. \"Interrupting is always rude\" — cutting across someone is. Signalling first is not.\n2. \"I'll wait for the right moment\" — in a monologue there is no right moment.\n3. \"It's not important enough\" — you are the worst possible judge of that.\n\nMindset: the goal is to interject respectfully and effectively without dominating. Both halves matter — not dominating, but also not disappearing.",
      inputs: [
        { q: "You believe interrupting is simply rude and never do it.", a: "\"Cutting across someone is rude. A signal and a reason isn't the same thing.\"", bundle: 'pro' },
        { q: "You wait for a perfect moment that never arrives.", a: "\"In a monologue there is no moment. I have to make one.\"", bundle: 'pro' },
        { q: "You sit through a whole meeting with something useful unsaid.", a: "\"Saying nothing has a cost too. It just isn't as visible.\"", bundle: 'pro' },
        { q: "You worry that speaking up makes you the difficult one.", a: "\"Done well it makes me the engaged one. It's the delivery that decides which.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Two Words Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance behind Signal the Interruption: you are not asking permission, you are giving warning.\n\nThe reason people either stay silent or barge in is that they think there are only two options. There is a third, and it costs two words: a cue that lets the speaker choose when to stop, so nobody gets cut off mid-word.\n\nWhat the signal actually does:\n1. Hands them control of the moment they stop.\n2. Tells the room this is deliberate, not impatience.\n3. Buys you the second you need to line up your own sentence.\n\nMindset: \"Sorry —\" is a complete signal. You do not need a paragraph of apology, and a long one makes the interruption bigger than it was.",
      inputs: [
        { q: "You either say nothing or cut straight across.", a: "\"There's a third option and it costs two words. 'Sorry — can I?'\"", bundle: 'pro' },
        { q: "You over-apologise your way into every interruption.", a: "\"One 'sorry' is a signal. Three is an announcement that I've done something wrong.\"", bundle: 'pro' },
        { q: "You feel you need permission before speaking.", a: "\"I'm giving warning, not asking permission. They choose when to stop, that's all.\"", bundle: 'pro' },
        { q: "You freeze because you cannot find an opening.", a: "\"The opening is the signal. I make it, I don't find it.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Worth Saying Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance behind Say Why It Matters: you are the worst available judge of whether your point is important enough.\n\nThis is the quiet reason most good interruptions never happen. The thought arrives, then a second thought arrives asking whether it is really worth stopping someone for, and by the time that argument is settled the moment has gone.\n\nWhere the doubt shows up:\n1. You decide your question is too basic to ask — it is usually the room's question.\n2. You wait to see if someone else says it — they are waiting too.\n3. You conclude it was not important, after the moment passed.\n\nMindset: if you can name why it matters, it matters. And \"I've lost the thread\" is a perfectly good reason — it is the most under-used interruption there is.",
      inputs: [
        { q: "You decide your question is too basic to ask out loud.", a: "\"The basic question is usually the room's question. Someone has to ask it.\"", bundle: 'pro' },
        { q: "You wait to see whether someone else will raise it.", a: "\"They're waiting too. That's how a thing goes unsaid by everybody.\"", bundle: 'pro' },
        { q: "You talk yourself out of it and the moment passes.", a: "\"If I can say why it matters, it matters. That test is enough.\"", bundle: 'pro' },
        { q: "You are lost but too embarrassed to stop them.", a: "\"'I've lost the thread' is a real reason. Half the room is probably with me.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Not Dominating Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance about the other failure: some people do not interrupt too little.\n\nEverything else in this pack pushes towards speaking up, so it is worth naming the opposite. If interrupting comes easily to you, the skill you need is not a better opening line — it is the count, and the habit of handing the floor back.\n\nThree things worth watching in yourself:\n1. The count — are you the only person who has cut in?\n2. The hand-back — do you return the floor, or keep it?\n3. The reason — was there one, or did you just have something to say?\n\nMindset: interject effectively without dominating. If you have interrupted twice and nobody else has once, the next move is to wait.",
      inputs: [
        { q: "You have interrupted three times and nobody else has once.", a: "\"That's the count telling me something. Next one I wait.\"", bundle: 'pro' },
        { q: "You take the floor and keep it after cutting in.", a: "\"An interruption I hand back is a contribution. One I keep is a takeover.\"", bundle: 'pro' },
        { q: "You interrupt because you have something to say, with no real reason.", a: "\"Wanting to talk isn't a reason. If I can't name one, it can wait.\"", bundle: 'pro' },
        { q: "You notice someone else has been trying to get in.", a: "\"They've been waiting longer than me. Give it to them first.\"", bundle: 'pro' },
      ]
    },
  ],
  handleinterruptions: [
    {
      name: "The Handling-Interruptions Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The pack-wide stance: being interrupted isn't a verdict on you. Stay calm, read the interruption as a signal rather than an attack, and you keep your composure and your turn. Example of the shift — instead of freezing or snapping, you take a breath and reclaim your point.\n\nThe three thoughts that cause the trouble:\n1. \"They think what I'm saying doesn't matter\" — most interruptions are impatience, not judgement.\n2. \"If I push back I'll seem difficult\" — asking to finish is the most ordinary request there is.\n3. \"The moment's gone now\" — the moment is gone when you decide it is.\n\nMindset: read the interruption as a signal rather than an attack. Composure is what keeps both your turn and your standing in the room.",
      inputs: [
        { q: "You feel small or dismissed when someone cuts you off.", a: "\"Being interrupted isn't a verdict on my worth. Usually it means they're eager, not that I'm boring.\"", bundle: 'pro' },
        { q: "You take the interruption as a personal attack.", a: "\"It's a signal, not an attack — excited, confused, impatient. I can read it before I react.\"", bundle: 'pro' },
        { q: "You feel your irritation rising when you're cut off.", a: "\"Staying calm is the whole game. A steady tone holds the floor better than a raised voice.\"", bundle: 'pro' },
        { q: "You freeze the moment someone talks over you.", a: "\"Being cut off isn't the moment I disappear. I take a breath and reclaim my turn.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Boundary Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance behind Reinforce the Boundary: finishing your sentence is fair, not rude, and asking for it needs no apology. Example of the shift — instead of trailing off when someone pushes, you calmly hold your point one more beat.\n\nWhere it goes wrong:\n1. You trail off mid-sentence and let them have it.\n2. You apologise for wanting to finish — \"sorry, could I just…\"\n3. You wait for a gap that never comes.\n\nMindset: finishing your sentence is fair, not rude. It needs no apology, no raised voice and no explanation — just the plain request.",
      inputs: [
        { q: "You worry that finishing your point is rude or pushy.", a: "\"Finishing my sentence isn't rude — it's fair. I'm allowed to take my turn.\"", bundle: 'pro' },
        { q: "You think being firm means being cold.", a: "\"I can be firm and friendly at once. 'Let me finish' can be warm.\"", bundle: 'pro' },
        { q: "You feel you should apologise for asking to finish.", a: "\"No apology needed — I'm asking for something reasonable, not imposing.\"", bundle: 'pro' },
        { q: "You back down the instant someone pushes.", a: "\"Holding my point once, calmly, isn't aggression — it's just taking my share of the space.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Letting-Go Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance behind Let It Go and Reclaim: you don't have to win every interruption, and giving way on purpose isn't losing. Example of the shift — instead of fighting for the floor, you let it pass and calmly come back to your point.\n\nWhere it goes wrong:\n1. You fight for a point that was never worth the friction.\n2. You give way and then never come back to it.\n3. You treat every interruption as a test you have to pass.\n\nMindset: you do not have to win every interruption. Giving way on purpose and returning calmly is stronger than clinging on — but only if you actually return.",
      inputs: [
        { q: "You feel you have to win every interruption.", a: "\"I don't have to win it. Sometimes letting it go and coming back is the stronger move.\"", bundle: 'pro' },
        { q: "You give up on your point once it's been talked over.", a: "\"My point didn't stop being worth saying just because someone talked over it.\"", bundle: 'pro' },
        { q: "You keep getting cut off and start to feel you don't belong.", a: "\"If I keep getting cut off, that's information about the room, not proof I don't belong in it.\"", bundle: 'pro' },
        { q: "You treat yielding the floor as losing.", a: "\"Giving way on purpose isn't losing — it's me choosing when the fight is worth it.\"", bundle: 'pro' },
      ]
    },
  ],
  validation: [
    {
      name: "The Validation Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The pack-wide stance: validation is about acknowledging, not agreeing.\n\nThis single confusion is why so many people withhold validation from somebody who needs it. They believe that saying \"that makes sense\" concedes the argument, so they say nothing, and the other person reads the silence as judgement.\n\nThe three thoughts that cause the trouble:\n1. \"If I validate this I've agreed with it\" — you have acknowledged it, which is different.\n2. \"But they're wrong about what happened\" — the feeling is still true.\n3. \"It'll be used against me later\" — name the object and it cannot be.\n\nMindset: validating builds trust, lowers defensiveness and makes the conversation possible. None of that requires you to change your own view by a millimetre.",
      inputs: [
        { q: "You hold back validation in case it counts as agreeing.", a: "\"Acknowledging and agreeing are different. I can do the first and keep my view.\"", bundle: 'pro' },
        { q: "You think they've got the facts wrong.", a: "\"The feeling is still a fact. I can validate that and question the rest after.\"", bundle: 'pro' },
        { q: "You worry it'll be quoted back at you.", a: "\"Then name what I'm validating. 'Your frustration makes sense' can't be misquoted.\"", bundle: 'pro' },
        { q: "Your silence is being read as judgement.", a: "\"Saying nothing isn't neutral. It reads as a verdict, and not a kind one.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Reasonable From There Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance behind Normalise the Reaction: almost every reaction makes sense from inside the situation that produced it.\n\nFrom the outside a reaction can look disproportionate. From the inside, with the history, the tiredness and the three earlier things that week, it is usually the obvious response. Normalising is just saying you can imagine the inside.\n\nWhere the judgement creeps in:\n1. You measure their reaction against the event rather than against their week.\n2. You compare it with how you would have reacted with none of their context.\n3. You think \"I wouldn't have minded\" and treat that as the standard.\n\nMindset: assume there is a reason and you will almost always be right. \"Anyone in your position\" is not a kindness, it is usually just accurate.",
      inputs: [
        { q: "Their reaction looks disproportionate to the event.", a: "\"Measured against their week rather than the event, it probably isn't.\"", bundle: 'pro' },
        { q: "You think you would not have minded.", a: "\"I'd have their history, not mine. That's what makes the difference.\"", bundle: 'pro' },
        { q: "You catch yourself deciding they overreacted.", a: "\"Assume there's a reason. I'm nearly always right when I do.\"", bundle: 'pro' },
        { q: "They apologise for how they feel.", a: "\"That's the thing to answer first. 'Anyone would have' is usually just true.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Do Not Dismiss Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance the whole pack rests on: avoid judging or dismissing feelings, even when you see things differently.\n\nThe dismissals rarely arrive as open disagreement. They arrive as small helpful corrections — putting it in perspective, pointing out the bright side, explaining the other person's reasons — and each one quietly says the feeling should not be there.\n\nThree dismissals that do not look like dismissals:\n1. \"At least…\" — anything after it makes the feeling smaller.\n2. \"To be fair, she probably…\" — defending the other person before acknowledging yours.\n3. \"Try not to take it personally\" — instructing them out of a feeling they already have.\n\nMindset: the feeling is already there. Nothing you say will remove it, and everything that tries makes them less likely to tell you the next one.",
      inputs: [
        { q: "You are about to say \"at least…\"", a: "\"Everything after 'at least' shrinks the feeling. Say the first part instead.\"", bundle: 'pro' },
        { q: "You want to explain the other person's side.", a: "\"Not yet. That's defending them before I've acknowledged this.\"", bundle: 'pro' },
        { q: "You want to tell them not to take it personally.", a: "\"They already have. Instructions don't undo feelings.\"", bundle: 'pro' },
        { q: "You want to put it in perspective for them.", a: "\"Perspective is for later, and usually for them to find, not me to supply.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Specific Beats Kind Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance about delivery: the detail is what makes validation land.\n\nEvery phrase in this pack can be said sincerely and still bounce, and the reason is almost always that it was general. A validation with no specifics in it could have been said to anybody, and people can hear that instantly.\n\nWhat specificity does:\n1. Proves you listened — you could not have said it before they finished.\n2. Names the object — so it cannot be mistaken for agreement.\n3. Makes it about them rather than about being supportive.\n\nMindset: one detail from their actual story beats three warm sentences. \"A whole week of dreading it\" does more than \"that sounds really hard\".",
      inputs: [
        { q: "Your response could have been said to anyone.", a: "\"Then it'll land like it was. Put one detail of theirs in it.\"", bundle: 'pro' },
        { q: "You reach for a phrase because it sounds supportive.", a: "\"Supportive-sounding isn't the same as landing. What actually happened to them?\"", bundle: 'pro' },
        { q: "You do not know enough detail to be specific.", a: "\"Then ask. A question beats a general kindness every time.\"", bundle: 'pro' },
        { q: "You said something warm and they deflated.", a: "\"Too generic. Name the actual thing and try again.\"", bundle: 'pro' },
      ]
    },
  ],
  supportingconversations: [
    {
      name: "Being Heard Is Usually the Ask",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "When someone brings you a problem, it feels obvious that they want it solved. Often they do not. They want to say it out loud in front of someone who takes it seriously, and to find out what they think by hearing themselves say it.\n\nAnswering the wrong request is the single commonest failure in supportive conversations, and it does not look like a failure from the inside — it looks like being helpful.\n\nMindset: assume they want to be heard until you have evidence otherwise.",
      inputs: [
        { q: "They've told me the problem, so they want a solution.", a: "Often they want a witness. Ask which before you decide.", bundle: 'pro' },
        { q: "Just listening feels like doing nothing.", a: "It's the thing most people say afterwards was the most useful.", bundle: 'pro' },
        { q: "If I don't help, what am I even here for?", a: "You're the person they said it to. That's not nothing, it's most of it.", bundle: 'pro' },
        { q: "They keep going round in circles, I should intervene.", a: "Circling is how people think out loud. Let them get round again.", bundle: 'pro' },
        { q: "I can see the answer clearly.", a: "Then it'll still be there in ten minutes, when they're ready for it.", bundle: 'pro' },
      ]
    },
    {
      name: "Advice Before Acknowledgement Does Not Land",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The same suggestion, said at two different moments, has completely opposite effects. Offered before someone feels heard, it says: your feeling is not the point, let's get to the practical bit. Offered afterwards, it is welcome and often exactly what they wanted.\n\nNothing about the advice changes. Only the order does, and the order is free.\n\nMindset: acknowledge first, then suggest. It costs one sentence.",
      inputs: [
        { q: "The practical answer is the useful part.", a: "It is, and it won't be heard until they feel heard.", bundle: 'pro' },
        { q: "Talking about feelings first is a bit indulgent.", a: "It's one sentence, and it's what makes the rest work.", bundle: 'pro' },
        { q: "They're a practical person, they'd rather I got to it.", a: "Even practical people want to know the problem registered.", bundle: 'pro' },
        { q: "I'll acknowledge it after I've explained the fix.", a: "By then they've stopped listening. Do it in that order and see.", bundle: 'pro' },
        { q: "They asked what to do, so they want advice.", a: "Probably. Ten words of acknowledgement first still improves it.", bundle: 'pro' },
      ]
    },
    {
      name: "You Do Not Have to Fix It",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "A lot of the discomfort in supporting someone comes from feeling responsible for the outcome — as though if they leave still upset, you have failed.\n\nYou have not. Most things people bring you are not yours to solve, and many are not solvable at all. The measure is whether they felt less alone with it, not whether it went away.\n\nMindset: you are keeping them company in it. That is the whole job.",
      inputs: [
        { q: "I couldn't help, they left as upset as they arrived.", a: "They left having said it to someone. That's the thing that helps.", bundle: 'pro' },
        { q: "If I can't solve it, I'm wasting their time.", a: "Ask them. Almost nobody says the listening was a waste.", bundle: 'pro' },
        { q: "I feel useless just sitting here.", a: "Useless is how it feels from inside. It's rarely how it looks from outside.", bundle: 'pro' },
        { q: "I should have said something wiser.", a: "Nobody remembers what was said. They remember who stayed.", bundle: 'pro' },
        { q: "It's still not sorted, so nothing I did mattered.", a: "Sorted wasn't available. Company was.", bundle: 'pro' },
      ]
    },
    {
      name: "Asking Is Allowed",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "There is an idea that a good friend should simply know what someone needs, and that asking is an admission of failure. It is the opposite: asking is faster, more accurate, and the person almost always appreciates being consulted about their own situation.\n\n\"Do you want ideas or do you want to vent?\" is one of the most useful sentences in this pack, and it takes two seconds.\n\nMindset: ask. Guessing is not more caring, it is just less reliable.",
      inputs: [
        { q: "I should be able to tell what they need.", a: "Sometimes you can. When you can't, asking beats guessing every time.", bundle: 'pro' },
        { q: "Asking makes it clinical.", a: "It makes it collaborative. Most people are relieved to be asked.", bundle: 'pro' },
        { q: "They'd find the question odd.", a: "Try it once. The usual reaction is \"oh — vent, please\".", bundle: 'pro' },
        { q: "It puts the work back on them.", a: "It gives them the choice. That's different, and it's theirs to make.", bundle: 'pro' },
        { q: "I'll just try something and see.", a: "You can. Asking is the same thing without the misfire.", bundle: 'pro' },
      ]
    },
  ],
  talkingaboutyourself: [
    {
      name: "They Asked Because They Want to Know",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The assumption that a question about you is a formality — something people say to be polite, which it would be greedy to treat as a real opening.\n\nIt produces the four-word answer and the immediate handover, and it slowly teaches the other person that you would rather not be asked. After a few rounds they stop asking, which then confirms the original belief.\n\nMindset: a question is an offer. Taking someone up on it is the polite thing, not the greedy one.",
      inputs: [
        { q: "They're only asking to be polite.", a: "Maybe. Answer properly and find out — that's how the polite version becomes a real one.", bundle: 'pro' },
        { q: "They don't want to hear about my week.", a: "They asked about your week. Start there and watch what happens.", bundle: 'pro' },
        { q: "I'd be taking up their time.", a: "One detail is four seconds. The awkward pause after \"fine\" is longer.", bundle: 'pro' },
        { q: "They'll ask again if they really want to know.", a: "They won't. Two closed answers and most people conclude you'd rather not.", bundle: 'pro' },
        { q: "It's more polite to ask them back straight away.", a: "Answer first, then ask. Otherwise they're carrying the whole conversation.", bundle: 'pro' },
      ]
    },
    {
      name: "You Do Not Have to Be Impressive",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The belief that the answer is being judged — that an ordinary week is a failure to report, and that something is required to earn the attention.\n\nIt is why people stall on \"what have you been up to\", a question with no wrong answers. Nobody is comparing your fortnight to anyone else's. They are finding out what you are like, and specificity does that far better than scale.\n\nMindset: the standard is true and specific. Nobody has ever been bored by a detail.",
      inputs: [
        { q: "Nothing interesting has happened to me.", a: "The wardrobe, the bike, the terrible series. Ordinary and specific is the whole trick.", bundle: 'pro' },
        { q: "My life sounds dull said out loud.", a: "Said vaguely, everyone's does. Said specifically, almost nobody's does.", bundle: 'pro' },
        { q: "They've got much better stories.", a: "They're not stories. They're just details, and you have exactly as many as they do.", bundle: 'pro' },
        { q: "I should have something better to say.", a: "Better than true? There isn't a category above that one.", bundle: 'pro' },
        { q: "I'll wait until I've got something worth telling.", a: "You'll wait a long time, and be quiet the whole way.", bundle: 'pro' },
      ]
    },
    {
      name: "Being Known Is the Point",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The quiet strategy of being the person who asks — endlessly curious, generous with attention, and almost never the subject.\n\nIt looks like a virtue and works like a wall. People become close by taking turns at being known, and someone who only ever asks is unknowable, however warm they are. The friendship stalls and neither person can say why.\n\nMindset: asking is half of it. Being answerable is the other half.",
      inputs: [
        { q: "I'd rather hear about them.", a: "Usually true, and it's also the most comfortable place to hide.", bundle: 'pro' },
        { q: "I'm just a good listener.", a: "You are. Being listened to is a thing you're allowed as well.", bundle: 'pro' },
        { q: "They don't need to know all that about me.", a: "Not all of it. Some of it is how this becomes a friendship rather than a habit.", bundle: 'pro' },
        { q: "Talking about myself feels self-indulgent.", a: "It's how they get to know you. That's not indulgence, it's your half of the work.", bundle: 'pro' },
        { q: "I've never been the sort who opens up.", a: "One detail at a time is how everyone who does it started.", bundle: 'pro' },
      ]
    },
    {
      name: "Depth Is a Staircase",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The idea that honesty means saying everything, so the choice is between guarded and wide open. It produces both failures at once — too little with the people who matter, and occasionally far too much with someone met an hour ago.\n\nConversations get deeper in steps, and each step is taken by both people. Reading the size of what they offered is a skill, and it is most of the difference between someone easy to talk to and someone slightly overwhelming.\n\nMindset: one step below what they gave. Not five, and not none.",
      inputs: [
        { q: "If I'm going to be honest I should say all of it.", a: "Honest and complete aren't the same. One step below their level is honest.", bundle: 'pro' },
        { q: "They shared something big so I should match it exactly.", a: "Or say you're listening rather than trading. That's a match too.", bundle: 'pro' },
        { q: "Holding anything back is a kind of lying.", a: "It's timing. The rest is still available next month.", bundle: 'pro' },
        { q: "I told them too much and now it's strange.", a: "Say so lightly and carry on. \"That was more than I meant to say\" fixes most of it.", bundle: 'pro' },
        { q: "They gave me a light answer, so they don't like me.", a: "They gave you a corridor answer to a corridor question. That's all it means.", bundle: 'pro' },
      ]
    },
  ],
  describethings: [
    {
      name: "You Do Not Need the Word",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Missing vocabulary feels like being stuck, and the instinct is to stop and search for the word while the conversation waits. But describing around a word is a normal, respected part of speaking — including for people speaking their own first language.\n\nPurpose, shape and comparison will nearly always get you there, and the listener usually supplies the word themselves.\n\nMindset: talk around it and keep going.",
      inputs: [
        { q: "I don't know what it's called, so I can't explain it.", a: "You can say what it's for. That gets you there faster than the word would.", bundle: 'pro' },
        { q: "I'll sound like I don't know what I'm talking about.", a: "You'll sound like someone describing something. That's what everyone does.", bundle: 'pro' },
        { q: "I should stop until I remember the word.", a: "The word comes back while you're talking, not while you're waiting.", bundle: 'pro' },
        { q: "They'll be annoyed if I take the long way round.", a: "They'll be annoyed by silence. The long way round is fine.", bundle: 'pro' },
        { q: "Everyone else would know this word.", a: "Half of them would describe it exactly like you're about to.", bundle: 'pro' },
      ]
    },
    {
      name: "Detail Is Kindness",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Vague descriptions feel efficient — you are not taking up much of someone's time. In practice they cost the listener far more, because they have to ask three follow-up questions or go and look at the wrong thing.\n\nOne good detail up front saves both of you the round trip.\n\nMindset: being specific is the considerate option, not the fussy one.",
      inputs: [
        { q: "They don't need all that detail.", a: "They need one detail. Choose the right one and it's shorter, not longer.", bundle: 'pro' },
        { q: "I'm being fussy describing it this precisely.", a: "You're saving them from finding the wrong thing.", bundle: 'pro' },
        { q: "They'll work it out from context.", a: "Sometimes. And sometimes they come back with the wrong jar.", bundle: 'pro' },
        { q: "It feels pedantic to say \"navy, not bright blue\".", a: "It's four extra words and it removes half the possibilities.", bundle: 'pro' },
        { q: "I don't want to sound like I'm lecturing.", a: "Precision isn't lecturing. Repeating yourself three times is.", bundle: 'pro' },
      ]
    },
    {
      name: "Choose, Do Not List",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "With ten possible categories there is a pull to run through all of them, as if completeness were the goal. It is not. The goal is that the listener ends up with a picture, and too many details blur it.\n\nTwo or three well-chosen categories beat ten recited ones every time.\n\nMindset: pick the details this person needs, and leave the rest out.",
      inputs: [
        { q: "If I leave something out they might miss it.", a: "If you put everything in, they'll miss all of it.", bundle: 'pro' },
        { q: "I should be thorough.", a: "Be useful. Thorough and useful are different targets.", bundle: 'pro' },
        { q: "I don't know which details matter.", a: "Ask what they're going to do with it. That decides.", bundle: 'pro' },
        { q: "More information is always better.", a: "Not when someone has to hold it in their head while looking.", bundle: 'pro' },
        { q: "I've started listing and can't stop.", a: "Stop anyway, and ask what they still need.", bundle: 'pro' },
      ]
    },
    {
      name: "Look Again Before You Speak",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Most weak descriptions come from describing a memory rather than a thing. We reach for a general impression — \"a blue bag\" — when a second of actual looking would produce the detail that identifies it.\n\nIf the object is in front of you, look at it properly. If it is not, picture it deliberately before you start.\n\nMindset: describe what is there, not the label you filed it under.",
      inputs: [
        { q: "I already know what it looks like.", a: "You know the label. Look again for the detail nobody else's has.", bundle: 'pro' },
        { q: "There's nothing distinctive about it.", a: "There nearly always is. A mark, a repair, a worn patch.", bundle: 'pro' },
        { q: "I don't have time to study it.", a: "Two seconds. That's what it takes to find the giveaway.", bundle: 'pro' },
        { q: "It's just an ordinary object.", a: "Then find the one ordinary thing that isn't true of the others.", bundle: 'pro' },
        { q: "I can picture it fine, so I can describe it fine.", a: "Picturing and describing are different skills. Say it out loud and see.", bundle: 'pro' },
      ]
    },
  ],
  explainthings: [
    {
      name: "Explaining Is Not Performing",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "A lot of bad explanation comes from wanting to sound like someone who knows the subject. That pulls towards completeness, jargon and length — all three of which make the listener understand less.\n\nThe measure of an explanation is not how much you demonstrated. It is whether the other person can now do or picture the thing.\n\nMindset: you are not being assessed. They are trying to understand something.",
      inputs: [
        { q: "I'll sound like I don't know much if I keep it that simple.", a: "The people who understand something best are the ones who can say it shortest.", bundle: 'pro' },
        { q: "I should cover everything so they get the full picture.", a: "They don't want the full picture. They want the piece they're missing.", bundle: 'pro' },
        { q: "If I use the proper terms they'll take me seriously.", a: "They'll take you seriously if they leave understanding it. That's the only test.", bundle: 'pro' },
        { q: "I need to say this well or they'll think I'm vague.", a: "Say it plainly and badly. Plain and badly still works; polished and unclear doesn't.", bundle: 'pro' },
        { q: "I feel stupid saying it in such basic words.", a: "Basic words are the hardest ones to choose. That feeling is the work, not a failure.", bundle: 'pro' },
      ]
    },
    {
      name: "Their Confusion Is Information",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "When someone does not follow, the instinct is to feel either embarrassed or impatient. Both push you to repeat yourself in the same words, slightly louder.\n\nConfusion is not a verdict on you. It is a signal telling you which of the three moves you skipped.\n\nMindset: a frown is data. Read it and change the move.",
      inputs: [
        { q: "They didn't get it. I've explained it badly.", a: "You've explained one part. Ask which part didn't land and give that one.", bundle: 'pro' },
        { q: "I've said this three times and they still don't follow.", a: "Then it isn't a repetition problem. Try a different move — probably Why.", bundle: 'pro' },
        { q: "They look annoyed. I should stop talking.", a: "Or ask. \"Which bit is annoying, the thing or my explaining of it?\"", bundle: 'pro' },
        { q: "This should be obvious to them.", a: "It's obvious to you because you already know it. That's the only difference.", bundle: 'pro' },
        { q: "If I ask what they didn't understand, I'll look like a bad explainer.", a: "You'll look like someone who wants them to get it. That reads as care.", bundle: 'pro' },
      ]
    },
    {
      name: "Short Is Not Rude",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Many people over-explain out of politeness — a short answer feels dismissive, so they keep adding. The effect is the opposite of what was intended: the listener has to work harder and often ends up less clear than before.\n\nA short answer respects the other person's time and their intelligence. If they want more, they will ask, and the asking will tell you exactly what to add.\n\nMindset: stop early and leave the door open.",
      inputs: [
        { q: "One sentence feels like I'm brushing them off.", a: "One sentence plus \"want the longer version?\" is not brushing anyone off.", bundle: 'pro' },
        { q: "They asked a real question, they deserve a real answer.", a: "A real answer is the one that fits. Length isn't respect.", bundle: 'pro' },
        { q: "If I stop here they'll think I don't know the rest.", a: "They'll think you answered the question. Which you did.", bundle: 'pro' },
        { q: "I should pre-empt the follow-up questions.", a: "Let them ask. Their questions are better than your guesses about their questions.", bundle: 'pro' },
        { q: "Silence after a short answer feels awkward.", a: "That silence is them thinking. Leave it there.", bundle: 'pro' },
      ]
    },
    {
      name: "You Are Allowed Not To Know",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "There is a strong pull, when someone asks you to explain something, to produce an answer whatever the state of your knowledge. It feels like the helpful thing to do. It is not, because a confident wrong answer travels further than an uncertain one.\n\nMarking the edge of what you know makes everything inside that edge more trustworthy.\n\nMindset: the boundary of your knowledge is part of the explanation.",
      inputs: [
        { q: "If I say I don't know, they'll think I'm not competent.", a: "They'll think the rest of what you said was true. That's the trade, and it's a good one.", bundle: 'pro' },
        { q: "I can probably work it out from what I do know.", a: "Then say that. \"I think it's X, but I'm reasoning, not remembering.\"", bundle: 'pro' },
        { q: "They came to me, so I should have the answer.", a: "They came to you for a useful answer. \"Ask Sam\" is a useful answer.", bundle: 'pro' },
        { q: "Saying \"I don't know\" will end the conversation.", a: "It usually opens it. Most people relax when someone admits a limit.", bundle: 'pro' },
        { q: "It's a small detail, nobody will check.", a: "Someone will act on it. That's why it's worth the second of honesty.", bundle: 'pro' },
      ]
    },
  ],
  givingexamples: [
    {
      name: "Small Beats Impressive",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "There is a pull towards the dramatic example — the biggest failure, the most striking case, the story with the best ending. But dramatic examples invite the objection that they are exceptional, and exceptional examples prove nothing about the ordinary case.\n\nAn unremarkable example that everyone recognises does more work and costs nothing to defend.\n\nMindset: reach for the ordinary one.",
      inputs: [
        { q: "That example's too boring to make the point.", a: "Boring means nobody will argue about whether it's typical. That's the point.", bundle: 'pro' },
        { q: "I need something that'll really land.", a: "Landing isn't the same as impressing. The dull one usually lands harder.", bundle: 'pro' },
        { q: "A bigger example makes a stronger argument.", a: "A bigger example makes a bigger target.", bundle: 'pro' },
        { q: "They'll think my example is trivial.", a: "They'll think it's familiar. That's why it works.", bundle: 'pro' },
        { q: "This one's too small to be worth mentioning.", a: "Small and specific is the strongest combination there is.", bundle: 'pro' },
      ]
    },
    {
      name: "Do Not Invent",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "In the middle of making a point, a convincing detail often arrives ready-made — a number, an incident, a \"studies show\". The temptation is strong precisely because it would work.\n\nEvery invented detail is a debt. When one is checked and found wrong, everything true that you said goes with it, and it goes permanently.\n\nMindset: say \"I don't know\" and reach for something you do.",
      inputs: [
        { q: "A number here would really help the argument.", a: "A wrong one would end the argument, and several future ones.", bundle: 'pro' },
        { q: "It's roughly right, so it's fine.", a: "Then say \"roughly\". The word costs nothing and keeps you honest.", bundle: 'pro' },
        { q: "Nobody's going to check.", a: "Someone always checks eventually. Usually at the worst moment.", bundle: 'pro' },
        { q: "Admitting I don't know makes me look unprepared.", a: "It makes you look like someone whose figures can be trusted.", bundle: 'pro' },
        { q: "I read it somewhere, so it's probably true.", a: "Then say that. \"I read somewhere\" is a different claim from \"the research shows\".", bundle: 'pro' },
      ]
    },
    {
      name: "One Is Enough",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "When someone has not agreed yet, the instinct is to add another example. But agreement usually stalls on something other than insufficient illustration — a different value, a missing piece of context, or a concern they have not said out loud.\n\nStacking examples answers a question they have not asked. Asking what the objection is answers the one they have.\n\nMindset: if one good example did not do it, a second one will not either.",
      inputs: [
        { q: "They haven't agreed, so I need another example.", a: "Or you need to know why. Ask.", bundle: 'pro' },
        { q: "More support makes the case stronger.", a: "More support makes the weakest bit easier to find.", bundle: 'pro' },
        { q: "If I stop now it'll look like I've run out.", a: "It'll look like you said your piece. That's a good look.", bundle: 'pro' },
        { q: "I want to cover every angle.", a: "Cover the angle they're standing on. You'll know it when they tell you.", bundle: 'pro' },
        { q: "Silence after one example feels thin.", a: "That silence is them considering it. Don't fill it.", bundle: 'pro' },
      ]
    },
    {
      name: "Your Own Life Counts",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Many people discount their own experience as evidence — it is only one case, it is subjective, other people have proper data. So they reach for a half-remembered statistic instead, which is usually weaker and often wrong.\n\nOne thing that genuinely happened to you, told specifically, is real evidence. It is limited, and saying so is easy.\n\nMindset: what happened to you is worth saying out loud.",
      inputs: [
        { q: "It's just my experience, it doesn't prove anything.", a: "It proves it can happen. Often that's the whole question.", bundle: 'pro' },
        { q: "They'll say it's just one case.", a: "Then say \"it's one case\" first. It's still one more than they have.", bundle: 'pro' },
        { q: "A real statistic would be better.", a: "A real one, yes. A half-remembered one, no.", bundle: 'pro' },
        { q: "My example is too personal to bring up at work.", a: "Then use the shape of it without the private part.", bundle: 'pro' },
        { q: "Nobody wants to hear about my life.", a: "They want one specific thing that happened. That's not the same as your life story.", bundle: 'pro' },
      ]
    },
  ],
  storytellingwiththesixws: [
    {
      name: "The Storytelling Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The pack-wide stance: a story does not have to be remarkable, it has to be clear.\n\nAlmost everyone who says they are bad at telling stories is actually fine at it and simply believes their material is not good enough. The material is rarely the problem. Structure is, and structure is learnable in an afternoon.\n\nThe three thoughts that cause the trouble:\n1. \"Nothing interesting happens to me\" — losing your homework is a perfectly good story.\n2. \"I am not a natural storyteller\" — the six W's do not require talent, only answers.\n3. \"They will not care\" — people are far more interested in ordinary events than you think.\n\nMindset: clear beats dramatic. A small thing told properly holds a room better than a big thing told in the wrong order.",
      inputs: [
        { q: "You think nothing interesting enough happens to you.", a: "\"Lost homework is a story. It's structure that makes it land, not drama.\"", bundle: 'pro' },
        { q: "You believe you are simply not a natural at this.", a: "\"It's six questions with answers. That's a skill, not a personality.\"", bundle: 'pro' },
        { q: "You start a story and immediately regret it.", a: "\"Commit. Half-told is what makes a story fall flat, not the story itself.\"", bundle: 'pro' },
        { q: "You compare your story to the brilliant one just told.", a: "\"Mine only has to be clear. Told properly, ordinary lands fine.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Six Questions Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance behind the structure: you are not being creative, you are answering six questions.\n\nThis is the most freeing idea in the pack. Storytelling looks like a talent you either have or do not, right up until you realise a good story is simply one where six specific questions have been answered and a bad one is where three of them have not.\n\nWhat the six questions replace:\n1. Inspiration — you do not need any. You need answers.\n2. Memory for detail — the W's tell you which details to reach for.\n3. Nerve — a structure you trust is what lets you start without knowing the ending.\n\nMindset: when a story goes wrong mid-telling, do not push harder. Ask yourself which W is missing and supply it.",
      inputs: [
        { q: "You freeze because you do not know how to begin.", a: "\"Start with any of the six. When, where or what all work as an opening.\"", bundle: 'pro' },
        { q: "You are mid-story and can feel it losing shape.", a: "\"Which W haven't I said yet? Supply that one and it'll come back.\"", bundle: 'pro' },
        { q: "You think you need to be entertaining.", a: "\"I need to be clear. Six questions answered is a story; funny is a bonus.\"", bundle: 'pro' },
        { q: "You avoid telling stories because you might get lost halfway.", a: "\"The structure is the safety net. I can start without knowing the ending.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Ordinary Event Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance about material: you already have all of it.\n\nPeople hunt for a good story as if the supply were limited. It is not — losing something, feeling proud, making a mistake, trying something new, meeting someone. Every one of those has happened to everybody, several times.\n\nThree places your stories already are:\n1. Small failures — the funniest and most relatable category there is.\n2. First times — anything you did once and badly.\n3. Ordinary days with one odd thing in them.\n\nMindset: stop waiting for something story-worthy to happen. It already has, about forty times, and you did not write any of it down.",
      inputs: [
        { q: "You say you have no stories to tell.", a: "\"Lost something, felt proud, made a mistake, tried something new. I've got dozens.\"", bundle: 'pro' },
        { q: "You are waiting for something worth telling to happen.", a: "\"It already did. I just wasn't paying attention when it was happening.\"", bundle: 'pro' },
        { q: "You dismiss a story because it is too small.", a: "\"Small and specific is the good kind. Big and vague is the bad kind.\"", bundle: 'pro' },
        { q: "You skip over your own failures as material.", a: "\"The mistakes are the best ones. Nobody wants forty minutes of things going well.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Editing Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance behind leaving things out: the six W's are a menu, not a checklist.\n\nThe instinct once you learn a structure is to use all of it, every time. But three or four are often enough, and the difference between a good teller and a tiring one is almost entirely about what they chose not to say.\n\nWhere the instinct goes wrong:\n1. You include a detail because it is true rather than because it helps.\n2. You answer all six W's on a story that needed three.\n3. You speed up instead of cutting when it starts to sag.\n\nMindset: knowing what to leave out is the skill. Dropping three W's on purpose is a decision, not a failure.",
      inputs: [
        { q: "You feel you have to use all six every time.", a: "\"It's a menu, not a checklist. Three told well beats six told exhaustively.\"", bundle: 'pro' },
        { q: "You include a detail because it happened, not because it helps.", a: "\"True isn't the same as useful. If it doesn't move the story, drop it.\"", bundle: 'pro' },
        { q: "The story is sagging and you start talking faster.", a: "\"Faster doesn't fix long. Cut to the outcome and land it.\"", bundle: 'pro' },
        { q: "You keep adding context you think they need.", a: "\"They need less than I think. I can always backfill if they ask.\"", bundle: 'pro' },
      ]
    },
  ],
  storiesinconversation: [
    {
      name: "A Story Is a Contribution, Not a Performance",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The belief that telling a story means holding the room — that it has to be worth the attention, and that the attention is a test you can fail.\n\nIt produces both failures at once. Some people never tell one, because nothing they have is good enough. Others tell them like a set, and cannot stop halfway or hand the floor on, because stopping would mean it was not worth it.\n\nMindset: you are adding something to a conversation, not taking the stage in one.",
      inputs: [
        { q: "My stories aren't good enough to tell.", a: "They're not auditions. \"Something odd happened at the shop\" is a contribution.", bundle: 'pro' },
        { q: "If I start it I have to make it worth it.", a: "You can stop halfway. That's allowed, and it's often funnier.", bundle: 'pro' },
        { q: "Everyone else tells better ones.", a: "They tell more of them. That's the whole difference.", bundle: 'pro' },
        { q: "It'll be awkward if nobody laughs.", a: "For about two seconds, and only if you make it so by explaining it.", bundle: 'pro' },
        { q: "I'd rather just listen.", a: "Fine sometimes. Always, and people stop feeling they know you.", bundle: 'pro' },
      ]
    },
    {
      name: "The Floor Is Borrowed",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The forgetting that a story suspends the conversation — for a minute, nobody else can speak, and that minute came out of somebody's evening.\n\nRemembering it is not about being self-conscious. It is what makes the difference between someone whose stories are welcome and someone people brace for: asking rather than taking, naming the length honestly, and giving the turn back at the end.\n\nMindset: borrowed, not taken. Say what you are borrowing it for, and hand it back.",
      inputs: [
        { q: "I shouldn't have to ask permission to talk.", a: "You don't. \"Short one?\" isn't permission, it's telling them what's coming.", bundle: 'pro' },
        { q: "Announcing the length makes it a big deal.", a: "It does the opposite. \"Two minutes\" is the most relaxing thing you can say.", bundle: 'pro' },
        { q: "They can stop me if they want to.", a: "Almost nobody will. That's exactly why the asking is yours to do.", bundle: 'pro' },
        { q: "I said two minutes and it's been five.", a: "Say so, land it, and be believed next time.", bundle: 'pro' },
        { q: "I'm always the one talking.", a: "One handover per story fixes it entirely. \"Has that happened to you?\"", bundle: 'pro' },
      ]
    },
    {
      name: "A Flat Story Costs Nothing",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The fear of the anticlimax — of getting to the end and having it land on nothing, with everyone politely waiting for a punchline that is not coming.\n\nIt is worth almost nothing. Nobody remembers a story that fell flat; they remember the person who kept going for four more minutes trying to rescue it. The flat ending, said plainly and stopped, is barely noticed at all.\n\nMindset: the anticlimax is free. The rescue attempt is what costs.",
      inputs: [
        { q: "What if it doesn't land?", a: "Then it doesn't, and it's forgotten by the next round of drinks.", bundle: 'pro' },
        { q: "I need a proper ending or it's not worth telling.", a: "\"So we drove home\" is a proper ending. Most true stories end like that.", bundle: 'pro' },
        { q: "I should explain why it was funny.", a: "That's the only part that actually costs you. Let it lie.", bundle: 'pro' },
        { q: "I'll wait until I've got a really good one.", a: "You'll be quiet for years, and the good ones only come from telling the ordinary ones.", bundle: 'pro' },
        { q: "They're just being polite.", a: "Maybe. Land it in one sentence and move — nobody thinks less of that.", bundle: 'pro' },
      ]
    },
    {
      name: "They Want to Be In It",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Treating a story as something delivered TO people rather than something happening between them — which is why some tellers cannot be interrupted, cannot cut, and end on a full stop that leaves everyone with nowhere to go.\n\nThe listener wants to react, guess ahead, ask who someone is, and then tell you theirs. All of that is the story working, not the story being spoiled.\n\nMindset: the story is the first half. What they say next is the other half.",
      inputs: [
        { q: "They keep interrupting my story.", a: "Or they're in it. A question three steps ahead is a compliment.", bundle: 'pro' },
        { q: "I've lost my place because they asked something.", a: "Answer it and carry on. They're more interested than they were a minute ago.", bundle: 'pro' },
        { q: "I want to get through it without being derailed.", a: "A conversation isn't a delivery. Being derailed is sometimes the good part.", bundle: 'pro' },
        { q: "I finished and nobody said anything.", a: "Because you ended on a full stop. Ask them something.", bundle: 'pro' },
        { q: "They started telling theirs before I'd finished.", a: "Slightly rude, and also the best sign your story worked.", bundle: 'pro' },
      ]
    },
  ],
  praiseandencouragement: [
    {
      name: "Genuine Beats Perfect",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Focus on being genuine rather than perfect. Your tone and sincerity matter more than flawless words, and most unspoken praise is unspoken because the person was still composing it.\n\nA slightly clumsy true sentence lands. A polished one that sounds prepared does not.\n\nMindset: say the imperfect version now rather than the perfect version never.",
      inputs: [
        { q: "I'll say it once I've worked out how to put it.", a: "You won't. Say the rough version while it's still true of today.", bundle: 'pro' },
        { q: "It'll come out wrong.", a: "Then it'll come out honest. That's what people actually hear.", bundle: 'pro' },
        { q: "My English isn't good enough to say this properly.", a: "Tone carries most of it. \"That was really good\" in any accent works.", bundle: 'pro' },
        { q: "It sounds too simple.", a: "Simple and meant is the whole target.", bundle: 'pro' },
        { q: "They'll think I'm being over the top.", a: "Say the small true thing. Nobody has ever found that over the top.", bundle: 'pro' },
      ]
    },
    {
      name: "Say It Out Loud",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Most praise is thought and never said. The moment passes, it starts to feel odd to bring up later, and the person never finds out. Meanwhile people routinely believe their work went unnoticed while three others privately thought it was excellent.\n\nThe cost of saying it is a few seconds of mild awkwardness. The cost of not saying it is that they do not know.\n\nMindset: if you noticed it, say it.",
      inputs: [
        { q: "They must already know it went well.", a: "They almost certainly don't. People read silence as \"adequate\".", bundle: 'pro' },
        { q: "It'll sound odd coming from me.", a: "Odd for two seconds. Useful for considerably longer.", bundle: 'pro' },
        { q: "It's too late to mention it now.", a: "\"I meant to say last week\" works perfectly well.", bundle: 'pro' },
        { q: "It's not my place to comment.", a: "Noticing something good is available to anyone.", bundle: 'pro' },
        { q: "They'll think I want something.", a: "Say it and ask for nothing. That settles it quickly.", bundle: 'pro' },
      ]
    },
    {
      name: "Specific or Not At All",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "General praise — \"great job\", \"you're amazing\" — is pleasant for a moment and carries no information. The person cannot repeat it, cannot rely on it, and often cannot quite believe it.\n\nThe specific version takes ten seconds longer and does something different: it tells them what worked, so they can do it again on purpose.\n\nMindset: name the thing, not the person.",
      inputs: [
        { q: "\"Good job\" is quicker and they'll get the idea.", a: "They'll get a nice feeling. They won't get anything they can use.", bundle: 'pro' },
        { q: "I can't remember exactly what was good.", a: "Then look before you speak. The detail is what makes it worth saying.", bundle: 'pro' },
        { q: "Being specific sounds like I'm assessing them.", a: "Being general sounds like you weren't paying attention.", bundle: 'pro' },
        { q: "They'd rather have the warm version.", a: "The specific version is warmer. It proves you were watching.", bundle: 'pro' },
        { q: "It feels excessive to go into detail.", a: "One sentence of detail. That's the whole ask.", bundle: 'pro' },
      ]
    },
    {
      name: "Give Them Room to Answer",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Not rushing is easy to overlook and matters more than it sounds. Praise puts someone slightly on the spot, and most people need a beat before they can say anything back. If you fill that beat — with another compliment, a joke, a change of subject — you take the moment away from them.\n\nSay the thing, then stop. The silence belongs to them.\n\nMindset: praise, then wait.",
      inputs: [
        { q: "The silence after I said it felt awkward.", a: "It felt awkward to you. To them it was a second to take it in.", bundle: 'pro' },
        { q: "I should add something so it isn't so intense.", a: "Adding something is how it stops counting. Let it stand.", bundle: 'pro' },
        { q: "They didn't say anything back.", a: "They heard it. Not everyone answers praise out loud.", bundle: 'pro' },
        { q: "I made a joke to lighten it.", a: "Common, and it deletes the compliment. Try leaving the pause next time.", bundle: 'pro' },
        { q: "They looked embarrassed, so I moved on quickly.", a: "Move on gently, not fast. Embarrassed isn't the same as unhappy.", bundle: 'pro' },
      ]
    },
  ],
  givingcriticism: [
    {
      name: "Not Saying It Is Not Kind",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Staying quiet feels like the considerate option. It rarely is. The other person carries on doing the thing, other people quietly adjust around them, and eventually somebody says it in a much worse way — or nobody does, and they never find out why things went the way they did.\n\nBeing told early, plainly and once is a good deal. It is the version you would want.\n\nMindset: silence is not kindness. It is postponement, usually with interest.",
      inputs: [
        { q: "I don't want to upset them.", a: "They'll be more upset finding out in six months that everyone knew.", bundle: 'pro' },
        { q: "It's not a big enough deal to mention.", a: "Then it's a one-sentence version. Small things get small conversations.", bundle: 'pro' },
        { q: "Someone else will say something.", a: "They're thinking the same about you. That's how nobody ever does.", bundle: 'pro' },
        { q: "They'll work it out themselves.", a: "Almost nobody does. That's what feedback is for.", bundle: 'pro' },
        { q: "I'd rather just work around it.", a: "You can. You'll be doing it in a year, and so will everyone else.", bundle: 'pro' },
      ]
    },
    {
      name: "The Behaviour, Not the Person",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Under pressure, specific observations turn into character judgements. \"Three deadlines slipped\" becomes \"you're not reliable\" — which feels like the same statement and is not.\n\nOne is a fact with a fix attached. The other is a verdict on who someone is, and it leaves them nothing to do but defend themselves. Everything difficult about giving criticism gets easier if you stay on the first kind.\n\nMindset: if a camera could not have recorded it, do not say it.",
      inputs: [
        { q: "They're just careless, and that's the real problem.", a: "Maybe. What you can say is that there were four typos. Start there.", bundle: 'pro' },
        { q: "Describing the specifics feels petty.", a: "The specifics are the only part they can actually do anything about.", bundle: 'pro' },
        { q: "They need to hear what I really think of the pattern.", a: "They need the pattern, with instances. That's different from a verdict.", bundle: 'pro' },
        { q: "It's obviously an attitude problem.", a: "You can't fix an attitude in a ten-minute conversation. You can fix a behaviour.", bundle: 'pro' },
        { q: "I want them to know how frustrating this is.", a: "Say the impact. That's the honest version of the same thing.", bundle: 'pro' },
      ]
    },
    {
      name: "Less Is Usually Enough",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "People preparing to give criticism tend to build a case: examples, history, a structure, an opening. Then they deliver something far heavier than the problem, and the other person leaves thinking they are in serious trouble over a filename.\n\nThe size of the conversation tells the other person how bad it is. Get that wrong and they will not hear the content at all.\n\nMindset: match the size to the problem. Most things are one sentence.",
      inputs: [
        { q: "I should prepare this properly so it lands.", a: "Preparation is good. A ten-minute meeting about a small thing isn't.", bundle: 'pro' },
        { q: "If I say it lightly they won't take it seriously.", a: "They will. What they won't do is panic, which is what you want.", bundle: 'pro' },
        { q: "I've got four examples, I should use them all.", a: "Use one. Four is a case, and people defend against cases.", bundle: 'pro' },
        { q: "This deserves a proper conversation.", a: "Does it still matter in a month? If not, it's a sentence.", bundle: 'pro' },
        { q: "I want to make sure it doesn't happen again.", a: "One clear sentence does that. Volume doesn't.", bundle: 'pro' },
      ]
    },
    {
      name: "You Might Be Wrong About Why",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "By the time you raise something, you usually have a theory about the cause — they are not organised, they do not care, they are not listening. The theory is often wrong, and it is nearly always unnecessary.\n\nSomething you cannot see is often in the way: a tool that does not work, an instruction they never got, something at home. Asking is faster than assuming, and it produces a fix rather than an argument.\n\nMindset: describe what you see, ask about the cause, do not supply it.",
      inputs: [
        { q: "I know exactly why they're doing this.", a: "You know what it looks like from outside. Ask about the inside.", bundle: 'pro' },
        { q: "They clearly don't care about the deadline.", a: "Or they're stuck on something and haven't said. Find out first.", bundle: 'pro' },
        { q: "If I ask, I'll get excuses.", a: "You might get the actual obstacle, which is the thing you want.", bundle: 'pro' },
        { q: "Asking makes me sound unsure.", a: "It makes you sound like you want it fixed rather than acknowledged.", bundle: 'pro' },
        { q: "I've already worked out the solution.", a: "Offer it second. Ask what would help first — they might have a better one.", bundle: 'pro' },
      ]
    },
  ],
  receivingfeedbackandcriticism: [
    {
      name: "The Receiving-Feedback Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The pack-wide stance: feedback is information about something you did, not a verdict on who you are.\n\nAlmost everything that goes wrong when we are criticised comes from treating it as a judgement on our worth. Once it is just information, staying calm stops being an act of will.\n\nThe three thoughts that cause the trouble:\n1. \"They think I'm bad at this\" — it was about one thing you did.\n2. \"I have to answer right now\" — you do not.\n3. \"If I don't defend myself they'll believe it\" — calm is more convincing than defence.\n\nMindset: stay calm and open, even when it is unexpected, and look for the part you can use.",
      inputs: [
        { q: "You hear criticism as a judgement on who you are.", a: "\"This is about something I did, not about my worth. It's information.\"", bundle: 'pro' },
        { q: "You feel you must answer the moment it is said.", a: "\"There's no clock. 'I'll think about that' is a real answer.\"", bundle: 'pro' },
        { q: "You feel the need to defend yourself immediately.", a: "\"Staying calm is more convincing than defending. Nothing here needs winning.\"", bundle: 'pro' },
        { q: "The feedback catches you completely off guard.", a: "\"Unexpected doesn't mean unfair. Let me hear it before I decide anything.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Thanking Is Not Agreeing Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance behind Acknowledge the Feedback: a thank-you costs you nothing and commits you to nothing.\n\nMany people refuse to acknowledge criticism because it feels like conceding the point. So they open with a defence, and the conversation goes badly from the first line.\n\nThree things a thank-you is not:\n1. Not agreement — you are thanking them for telling you, not for being right.\n2. Not an apology — that is a separate decision, later.\n3. Not weakness — it is the calmest opening available to you.\n\nMindset: the person who can say \"thanks for telling me\" to something they disagree with is the one in control of the conversation.",
      inputs: [
        { q: "Thanking them feels like admitting they are right.", a: "\"I'm thanking them for telling me, not for being right. Those are different.\"", bundle: 'pro' },
        { q: "You want to lead with your side of it.", a: "\"If I open with a defence, nothing after it gets heard. Acknowledge first.\"", bundle: 'pro' },
        { q: "Acknowledging the criticism feels weak.", a: "\"It's the opposite. Taking it calmly is the strongest thing in the room.\"", bundle: 'pro' },
        { q: "You go silent because you do not know what to say.", a: "\"'Thanks for telling me' always works. It buys me the seconds I need.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Understanding Without Agreeing Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance behind Show You Understand Their View: you can describe someone's view accurately without signing up to it.\n\nThis is the most useful move in the pack, and it is blocked by one fear — that understanding them means losing the argument.\n\nWhere the fear shows up:\n1. You refuse to say \"I see how that looked\" in case it is used against you.\n2. You correct the small facts instead of addressing the feeling.\n3. You wait for them to understand you first, and so do they.\n\nMindset: you do not have to agree with everything to show understanding. And the person who goes first is not the one who loses.",
      inputs: [
        { q: "You worry that understanding them means agreeing with them.", a: "\"I can describe their view accurately and still disagree. Those are separate.\"", bundle: 'pro' },
        { q: "You want to correct the facts before anything else.", a: "\"The facts can wait thirty seconds. The feeling is what's blocking the conversation.\"", bundle: 'pro' },
        { q: "You are waiting to be understood first.", a: "\"If we both wait, nobody moves. I can afford to go first.\"", bundle: 'pro' },
        { q: "You fear that granting any part weakens your position.", a: "\"Granting the fair part makes the rest of what I say more credible, not less.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The No Instant Verdict Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance behind Reflect Openly: you are not required to know, on the spot, whether the criticism is right.\n\nThe pressure to produce an immediate answer is what pushes people into either a defence they regret or a promise they will not keep.\n\nThree things you are allowed to say:\n1. \"I hadn't seen it that way.\"\n2. \"I'd like to sit with that.\"\n3. \"I see it differently, but I'll think about it.\"\n\nMindset: \"I need to think about this\" is a complete answer, and a confident one. It is not stalling.",
      inputs: [
        { q: "You feel you must decide right now whether they are right.", a: "\"I don't have to have a verdict. 'I'll think about it' is a full answer.\"", bundle: 'pro' },
        { q: "You promise a change just to end the conversation.", a: "\"A promise I make to escape isn't one I'll keep. Better to say I'll think.\"", bundle: 'pro' },
        { q: "You defend yourself because silence feels worse.", a: "\"Thinking out loud beats defending. 'I hadn't seen it that way' is honest.\"", bundle: 'pro' },
        { q: "You worry that taking time looks like avoiding it.", a: "\"Naming when I'll come back is what makes the pause honest instead of evasive.\"", bundle: 'pro' },
      ]
    },
  ],
  apologizing1: [
    {
      name: "No \"But\"",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The word \"but\" deletes everything before it. \"I'm sorry I was late, but the traffic was awful\" is not an apology with context attached — it is a defence, and it is heard as one.\n\nIf the context genuinely matters, it belongs in a separate sentence, at a different moment, once the apology has landed. Both things can be said. They cannot be said in the same breath.\n\nMindset: apologise for your part with nothing attached. The rest keeps.",
      inputs: [
        { q: "They need to understand why it happened.", a: "Later, maybe. In this sentence it will only sound like an excuse.", bundle: 'pro' },
        { q: "It's not fair if I take all the blame.", a: "You're not. You're apologising for your part, which is different.", bundle: 'pro' },
        { q: "If I don't explain, they'll think I don't care.", a: "They'll think you apologised without arguing. That's rarer than you think.", bundle: 'pro' },
        { q: "The reason is genuinely a good one.", a: "Good reasons still delete the apology when they follow \"but\".", bundle: 'pro' },
        { q: "They already know the reason anyway.", a: "Then you definitely don't need to say it now.", bundle: 'pro' },
      ]
    },
    {
      name: "The Plan Is the Proof",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Anyone can say sorry. The only part of an apology that costs you anything in the future is the sentence about what will be different — and to someone who has been let down before, that is the only part with information in it.\n\nThat is also why it must be small. \"I'll be better\" promises nothing and cannot be checked. \"I'll write it down while you're telling me\" is something they can watch happen or not happen.\n\nMindset: end with something checkable, then do it.",
      inputs: [
        { q: "The apology should be enough on its own.", a: "The first time, maybe. After that, only the change counts.", bundle: 'pro' },
        { q: "I don't want to promise something I might not keep.", a: "Then promise something smaller. A kept small promise beats a broken large one.", bundle: 'pro' },
        { q: "Saying what I'll do sounds like I'm managing them.", a: "It sounds like you've thought about it. That's the opposite of managing.", bundle: 'pro' },
        { q: "I'll just try harder, that's the plan.", a: "That's a feeling, not a plan. What will you actually do differently?", bundle: 'pro' },
        { q: "They should be able to trust me without a plan.", a: "They should. A checkable sentence is how trust gets rebuilt after it's dented.", bundle: 'pro' },
      ]
    },
    {
      name: "Small Things Get Small Apologies",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "There is a pull, when you have made a mistake, to make the apology match how bad you feel rather than how much harm was done. It reads as sincerity from the inside and as something else from the outside.\n\nA long apology for a small thing puts the other person in the position of reassuring you, which is the opposite of what an apology is for. Your discomfort is yours to carry.\n\nMindset: apologise for the harm, not for your feelings about the harm.",
      inputs: [
        { q: "I need them to know how badly I feel about it.", a: "They need to know you understood. How bad you feel is yours to handle.", bundle: 'pro' },
        { q: "A quick sorry seems dismissive.", a: "For a quick mistake it's proportionate. Anything more makes it their problem.", bundle: 'pro' },
        { q: "If I apologise enough they'll see I mean it.", a: "Repetition reads as wanting forgiveness, not as meaning it.", bundle: 'pro' },
        { q: "They said it's fine but I don't think they mean it.", a: "Ask once, plainly. Then take the answer.", bundle: 'pro' },
        { q: "It'd be cold to just say sorry and move on.", a: "Short and sincere isn't cold. Prolonged is what becomes uncomfortable.", bundle: 'pro' },
      ]
    },
    {
      name: "Say It Straight Away",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Almost every apology gets harder the longer it waits. The moment passes, it starts to feel odd to bring up, and by the time you get to it you have to explain the delay as well as the thing.\n\nImmediately is easier and costs less, for both of you. And it is one of the few situations where doing it badly and quickly genuinely beats doing it well and late.\n\nMindset: the awkward version now beats the polished version next week.",
      inputs: [
        { q: "I'll say something once I've worked out how to put it.", a: "Say the rough version now. The composed one arrives too late to help.", bundle: 'pro' },
        { q: "It's been a few days, it'd be strange to raise it.", a: "\"I've been meaning to say\" covers that entirely.", bundle: 'pro' },
        { q: "Maybe they didn't notice.", a: "They noticed. And now they've noticed you didn't say anything.", bundle: 'pro' },
        { q: "I'll wait for a good moment.", a: "There isn't one. There's just now and later, and later is worse.", bundle: 'pro' },
        { q: "It'll blow over on its own.", a: "Sometimes. And sometimes it sits there for months.", bundle: 'pro' },
      ]
    },
  ],
  agreeing: [
    {
      name: "The Agreeing Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The pack-wide stance: agreeing is a contribution, not the absence of one.\n\nThere is a quiet belief that only disagreement is interesting — that agreeing makes you a passenger in the conversation. It is the reason people either stay silent or manufacture an objection they do not hold.\n\nThe three thoughts that cause the trouble:\n1. \"Agreeing adds nothing\" — agreeing plus a reason adds a great deal.\n2. \"I'll sound like I have no opinion of my own\" — the contribution IS your opinion.\n3. \"Someone will think I'm just being nice\" — not if you bring something they didn't have.\n\nMindset: listen fully first, then look for what you can genuinely add. That is the whole exercise.",
      inputs: [
        { q: "You feel that agreeing makes you a passenger in the conversation.", a: "\"Agreeing with something added is a contribution. It's disagreeing on autopilot that's lazy.\"", bundle: 'pro' },
        { q: "You look for something to object to so you sound like you're thinking.", a: "\"I don't need a counter-argument to be interesting. A good reason works just as well.\"", bundle: 'pro' },
        { q: "You worry that agreeing makes you look like you have no opinion.", a: "\"What I add is my opinion. Agreement is just where it happens to land.\"", bundle: 'pro' },
        { q: "You stay quiet because you have nothing to push back on.", a: "\"Silence reads as disagreement. If I'm with them, I should say so.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Listen First Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance behind Signal the Agreement: understand the whole statement before you start building your reply.\n\nAgreeing goes wrong the same way listening does — you hear the first half, start composing your own contribution, and end up agreeing with something slightly different from what they said.\n\nWhere it shows up:\n1. You start planning your example while they are still talking.\n2. You agree with the topic rather than with their actual point.\n3. Your addition quietly corrects them, because you misheard the claim.\n\nMindset: get the statement fully first. The contribution is easier to find once you know exactly what you are agreeing with.",
      inputs: [
        { q: "You start planning your example while they are still speaking.", a: "\"If I'm building my line, I'm not hearing theirs. Get the whole statement first.\"", bundle: 'pro' },
        { q: "You agree with the topic rather than with what they actually said.", a: "\"They said something specific. I should agree with that, not the general area.\"", bundle: 'pro' },
        { q: "Your addition quietly corrects them without meaning to.", a: "\"That's a sign I misheard. Better to check than to 'agree' with a different point.\"", bundle: 'pro' },
        { q: "You rush to reply so the moment doesn't pass.", a: "\"A short pause reads as thinking, not as having nothing. It's fine to take it.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Small Detail Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance behind Add a Personal Experience: your ordinary life is enough material.\n\nPeople hold back their own experience because it feels too small to be worth saying — no drama, no punchline, just a habit or an afternoon. But that is exactly what makes agreement believable.\n\nThree things the experience does not need to be:\n1. Not impressive — \"I read by the window\" is plenty.\n2. Not recent — a habit from years ago works fine.\n3. Not a story — a single detail counts as an experience.\n\nMindset: specific beats big. One small true detail proves you mean it more than any general claim can.",
      inputs: [
        { q: "You hold back an experience because it feels too ordinary.", a: "\"Ordinary is the point. A small true detail is what makes agreement believable.\"", bundle: 'pro' },
        { q: "You think your example needs a punchline.", a: "\"It's not a story, it's evidence. One detail does the job.\"", bundle: 'pro' },
        { q: "You compare your experience to a better one just told.", a: "\"It's not a competition. Mine only has to be true, not better.\"", bundle: 'pro' },
        { q: "You say nothing because your version is unremarkable.", a: "\"Unremarkable and specific still beats impressive and vague.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Not a Competition Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance behind Expand the Idea: an expansion is a gift, not a way of going one better.\n\nThe same move can read two completely different ways. Done warmly it hands them a new angle; done to impress it quietly says \"and here's the bit you missed\" — and the agreement curdles.\n\nThe tell is in what you are hoping for:\n1. Hoping they take it further — that is expanding.\n2. Hoping they notice you thought of it — that is competing.\n3. Hoping to be seen as the sharper one — that is the whole thing going wrong.\n\nMindset: you are handing them the ball, not taking it. If they run with your expansion, it worked.",
      inputs: [
        { q: "You want your addition to be the cleverest thing said.", a: "\"I'm handing them a new angle, not scoring one. If they run with it, it worked.\"", bundle: 'pro' },
        { q: "You add something that quietly tops their point.", a: "\"One step further, not one step above. Theirs was the point I'm building on.\"", bundle: 'pro' },
        { q: "You feel the urge to be the sharpest voice in the group.", a: "\"Being useful lands better than being sharp, and it's easier to keep up.\"", bundle: 'pro' },
        { q: "You expand so far it becomes your topic instead of theirs.", a: "\"One step, not five. If they have to catch up, I've changed the subject.\"", bundle: 'pro' },
      ]
    },
  ],
  disagreeing: [
    {
      name: "Disagreement Is Not Conflict",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Many people avoid disagreeing because they experience it as the first step towards a row. But two people holding different views is the ordinary state of things, and saying so out loud is usually the least dramatic way to handle it.\n\nThe conflict, when it comes, is nearly always about how it was said or how late it surfaced — not about the difference itself.\n\nMindset: a stated difference is calmer than an unstated one.",
      inputs: [
        { q: "If I disagree it'll turn into an argument.", a: "Unstated disagreements turn into arguments. Stated ones usually turn into conversations.", bundle: 'pro' },
        { q: "It's not worth the tension.", a: "The tension is already there. You're deciding whether to name it.", bundle: 'pro' },
        { q: "They'll think I'm difficult.", a: "They'll think you have a view. That's what people in a discussion are supposed to have.", bundle: 'pro' },
        { q: "Agreeing keeps things pleasant.", a: "Until the decision goes ahead and you have to live with it.", bundle: 'pro' },
        { q: "I hate confrontation.", a: "This isn't confrontation. \"I see it differently\" is a normal sentence.", bundle: 'pro' },
      ]
    },
    {
      name: "You Do Not Have to Win",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Treating a disagreement as something to be won turns the other person into an opponent, and opponents defend rather than think. It also makes it very hard for you to change your own mind, because doing so starts to feel like losing.\n\nThe aim is a better shared picture. Sometimes that means they move, sometimes you do, and often both of you end up somewhere neither started.\n\nMindset: the good outcome is a better answer, not your answer.",
      inputs: [
        { q: "I need to make them see I'm right.", a: "You need to put your view where they can see it. What they do with it is theirs.", bundle: 'pro' },
        { q: "If I concede anything I've lost the argument.", a: "Conceding the weak part is what makes the strong part believable.", bundle: 'pro' },
        { q: "They haven't accepted my point yet.", a: "They've heard it. Acceptance isn't owed to you on the same day.", bundle: 'pro' },
        { q: "I want the last word.", a: "The last word costs more than it's worth almost every time.", bundle: 'pro' },
        { q: "Backing down now would look weak.", a: "Changing your mind in public is the thing that makes people trust you later.", bundle: 'pro' },
      ]
    },
    {
      name: "Say It Early",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "A disagreement raised at the start is a contribution. The same disagreement raised after a decision is made is an obstacle, and it costs the other person work they have already done.\n\nThe discomfort of speaking up early is small and brief. The cost of speaking up late is carried by everyone.\n\nMindset: the awkward moment gets more expensive the longer you wait.",
      inputs: [
        { q: "I'll wait and see if anyone else says it.", a: "They're waiting too. Somebody has to go first.", bundle: 'pro' },
        { q: "It's too late to raise it now.", a: "It's more awkward now and much worse later. Raise it.", bundle: 'pro' },
        { q: "Everyone's already agreed.", a: "Then one sentence is all it takes, and the room can decide with it.", bundle: 'pro' },
        { q: "I'll mention it afterwards, privately.", a: "Sometimes right. But not if the decision gets made in the room.", bundle: 'pro' },
        { q: "I don't want to derail the meeting.", a: "A ten-second objection isn't a derailment. A rework in April is.", bundle: 'pro' },
      ]
    },
    {
      name: "Their View Came From Somewhere",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "When someone holds a view that seems obviously wrong, the useful question is not how they could think that but what they have seen that you have not. Almost every opinion has a real experience behind it.\n\nAsking about that experience is more effective than arguing against the conclusion, and it occasionally turns out that they are right.\n\nMindset: look for the reason behind the position, not the flaw in it.",
      inputs: [
        { q: "How can they possibly think that?", a: "Something led them there. Ask what it was — it's usually the most interesting part.", bundle: 'pro' },
        { q: "They just haven't thought it through.", a: "Or they've thought about something you haven't seen yet.", bundle: 'pro' },
        { q: "I've already heard all their arguments.", a: "You've heard the arguments. You may not have heard the experience underneath them.", bundle: 'pro' },
        { q: "There's no good reason to hold that view.", a: "There's a reason. It may not be a good one, but knowing it changes what you say next.", bundle: 'pro' },
        { q: "Asking questions will look like I'm conceding.", a: "It looks like you're interested. That's what makes people listen back.", bundle: 'pro' },
      ]
    },
  ],
  persuasionandinfluence1: [
    {
      name: "Their Side Is the Argument",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Most proposals are presented entirely from the proposer's point of view — why it matters to you, what you need, what you have worked out. That is the version you have in your head, and it is the least persuasive one available.\n\nWorking out what the other person gains, or avoids, or stops having to worry about, is usually the whole job. And where there is nothing in it for them, knowing that changes what you should say: you are asking a favour, not making a case.\n\nMindset: before you speak, answer the question \"and what does this do for them?\"",
      inputs: [
        { q: "It's obviously a good idea, why do I need to sell it?", a: "Obvious to you. They're looking at their own week, not yours.", bundle: 'pro' },
        { q: "The benefit to the team should be enough.", a: "Sometimes. The benefit to the person in front of you is stronger.", bundle: 'pro' },
        { q: "There's nothing in it for them, so I can't use this.", a: "Then say that. \"I'm asking a favour\" is honest and works.", bundle: 'pro' },
        { q: "It feels manipulative to think about what they want.", a: "It's the opposite. Ignoring what they want is the manipulative version.", bundle: 'pro' },
        { q: "I don't know what they'd get out of it.", a: "Then ask. That question alone often improves the proposal.", bundle: 'pro' },
      ]
    },
    {
      name: "Nothing Is Not Free",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "People compare any proposal against an imagined alternative in which nothing changes and nothing is spent. That alternative does not exist — the current way has a cost, and it is invisible only because everyone has been paying it long enough to stop noticing.\n\nSaying what it costs is not a scare tactic. It is what makes the comparison honest, and it is the single most commonly missing piece in an argument that ought to have worked.\n\nMindset: name what the current way is already taking.",
      inputs: [
        { q: "I don't want to be dramatic about it.", a: "Then don't be. \"Twenty minutes a week, every week\" is not dramatic, it's arithmetic.", bundle: 'pro' },
        { q: "They'll say I'm exaggerating.", a: "Only if you exaggerate. The real number is nearly always enough.", bundle: 'pro' },
        { q: "It's not that bad, so I can't argue this.", a: "Small and constant is a real cost. Say the size honestly and let it stand.", bundle: 'pro' },
        { q: "Pointing out the cost sounds like criticising them.", a: "Then name where it lands rather than who caused it.", bundle: 'pro' },
        { q: "They already know it's a bit annoying.", a: "Knowing it's annoying isn't the same as knowing what it adds up to.", bundle: 'pro' },
      ]
    },
    {
      name: "One Case at a Time",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "When a first argument does not land, the instinct is to add a second and a third. Four cases in a row is not four times as persuasive — it reads as a presentation, and people brace against presentations rather than considering them.\n\nIt also hides which one was working. A single case, followed by silence, tells you far more about where they actually are.\n\nMindset: make one case properly, then stop and find out what happened.",
      inputs: [
        { q: "They're not convinced, so I need more arguments.", a: "You need to know why. One more argument won't tell you.", bundle: 'pro' },
        { q: "I've got four good reasons, I should use them.", a: "Use the best. The other three make the weakest one findable.", bundle: 'pro' },
        { q: "If I stop they'll think I've run out.", a: "They'll think you said your piece. That's a stronger position.", bundle: 'pro' },
        { q: "Silence after one case feels thin.", a: "That silence is them considering it. Let it happen.", bundle: 'pro' },
        { q: "I want to cover every angle.", a: "Cover the one they're standing on. They'll tell you which it is.", bundle: 'pro' },
      ]
    },
    {
      name: "Where Influence Stops",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "These strategies work. That is exactly why the line matters: the same moves that make a good idea land can be used to talk someone into something that is not in their interest.\n\nThe test is simple and worth applying honestly. Does their interest actually appear in your case, or only in your framing of it? Would you be comfortable if they could hear you explain why you chose this particular argument on them?\n\nMindset: influence is making a good case easy to accept. It is not getting your way.",
      inputs: [
        { q: "It's for their own good, so the method doesn't matter.", a: "It does. If it's really for their good, the honest version works.", bundle: 'pro' },
        { q: "Everyone argues like this.", a: "The arguments aren't the issue. Whether their interest is real is.", bundle: 'pro' },
        { q: "I know what's best here.", a: "Possibly. They still get to decide, and pretending otherwise is the line.", bundle: 'pro' },
        { q: "A number would help, and roughly right is close enough.", a: "Roughly right is wrong when it's checked, and it takes the rest with it.", bundle: 'pro' },
        { q: "I'd be embarrassed if they knew why I put it that way.", a: "That's your answer. Say the version you wouldn't be embarrassed about.", bundle: 'pro' },
      ]
    },
  ],
  persuasionandinfluence2: [
    {
      name: "Guide Rather Than Push",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The instinct when someone disagrees is to argue harder — more reasons, more emphasis, more repetitions. It almost always produces the opposite of what it is aiming at, because pressure creates something to resist.\n\nThe strategies in this pack all work by removing an obstacle rather than by applying force: acknowledgement removes the sense of being corrected, a question removes the need to concede, a smaller ask removes the commitment.\n\nMindset: when it is not working, take something away rather than adding more.",
      inputs: [
        { q: "They're not convinced, so I need a stronger argument.", a: "Or a smaller ask. Try that first — it works more often.", bundle: 'pro' },
        { q: "If I just explain it once more they'll see it.", a: "The third explanation is where people stop listening.", bundle: 'pro' },
        { q: "They're being stubborn.", a: "They're resisting pressure. Take the pressure off and see what happens.", bundle: 'pro' },
        { q: "I need to make them understand.", a: "You need to make it easy to agree. Those are different jobs.", bundle: 'pro' },
        { q: "Backing off means losing.", a: "It means they get to decide without a fight, which is when most people say yes.", bundle: 'pro' },
      ]
    },
    {
      name: "One Go, Then Stop",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "People rarely change their minds while being asked. They change them afterwards, in the quiet, without an audience — which is why the most useful thing you can do after making your case is to stop making it.\n\nRepeating a proposal turns it into pressure, and pressure makes agreement feel like a loss. Leaving it alone lets the argument work on its own.\n\nMindset: say it well once, then get out of its way.",
      inputs: [
        { q: "They didn't say yes, so I should try again.", a: "Try again in a week. Not in the next sentence.", bundle: 'pro' },
        { q: "If I drop it, nothing will happen.", a: "Often something does — a day later, without you in the room.", bundle: 'pro' },
        { q: "They'll think I didn't care if I let it go.", a: "They'll think you meant it, because you didn't need to win.", bundle: 'pro' },
        { q: "I've got one more angle I haven't used.", a: "Save it. A fourth angle reads as pressure regardless of how good it is.", bundle: 'pro' },
        { q: "Handing over the decision feels like giving up.", a: "It's the last move of the technique, not the absence of one.", bundle: 'pro' },
      ]
    },
    {
      name: "Nobody Has to Be Wrong",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "A great deal of resistance has nothing to do with the merits. It comes from the fact that agreeing would mean admitting the previous position was mistaken, in front of someone.\n\nEvery strategy in this pack quietly removes that cost. A question lets them arrive at it themselves. An acknowledgement means their idea was never dismissed. A trial means nothing has been conceded yet.\n\nMindset: make it possible to agree without having lost anything.",
      inputs: [
        { q: "They're only disagreeing because they said the opposite yesterday.", a: "Probably. Give them a way to move that isn't a climbdown.", bundle: 'pro' },
        { q: "I want them to admit they were wrong.", a: "Then you want two things, and you'll get neither.", bundle: 'pro' },
        { q: "If I acknowledge their idea it looks like I'm conceding.", a: "It looks like you listened. That's what makes yours worth hearing.", bundle: 'pro' },
        { q: "They should just look at it objectively.", a: "They will, once looking at it doesn't cost them anything.", bundle: 'pro' },
        { q: "Why should I make it easy for them?", a: "Because you want the outcome, not the apology.", bundle: 'pro' },
      ]
    },
    {
      name: "Where Influence Stops",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "These strategies work. That is exactly why the line matters: the same moves that make a good idea land can be used to talk someone into something that is not in their interest.\n\nThe test is simple and worth applying honestly. Does their interest actually appear in your case, or only in your framing of it? Would you be comfortable if they could hear you explain why you chose this particular strategy on them?\n\nMindset: influence is making a good case easy to accept. It is not getting your way.",
      inputs: [
        { q: "It's for their own good, so the method doesn't matter.", a: "It does. If it's really for their good, the honest version works.", bundle: 'pro' },
        { q: "Everyone uses these techniques.", a: "The techniques aren't the issue. Whether their interest is real is.", bundle: 'pro' },
        { q: "I know what's best here.", a: "Possibly. They still get to decide, and pretending otherwise is the line.", bundle: 'pro' },
        { q: "A little pressure is fine if the outcome is right.", a: "Then you've decided the outcome matters more than they do.", bundle: 'pro' },
        { q: "I'd be embarrassed if they knew why I said it that way.", a: "That's your answer. Say the version you wouldn't be embarrassed about.", bundle: 'pro' },
      ]
    },
  ],
  negotiationandcompromise: [
    {
      name: "The Aim Is Not to Win",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Once a discussion feels like a contest, both people start defending positions rather than looking for answers — and a position defended for ten minutes becomes much harder to leave, regardless of whether it was ever the best one.\n\nThe measure of a negotiation is not who moved less. It is whether the arrangement is one both people will still be happy with in three months.\n\nMindset: the other person is not the opponent. The problem is.",
      inputs: [
        { q: "If I move first I've lost ground.", a: "You've started the trading. Somebody has to, and it usually goes better for them.", bundle: 'pro' },
        { q: "They've barely moved, so I shouldn't either.", a: "That's how two people spend an hour arriving nowhere.", bundle: 'pro' },
        { q: "I want to come out of this ahead.", a: "Ahead of what? You still have to work with them on Monday.", bundle: 'pro' },
        { q: "Conceding makes me look weak.", a: "Trading something you don't need for something you do is the whole skill.", bundle: 'pro' },
        { q: "They'll take advantage if I'm reasonable.", a: "Some will. Most reciprocate, and you'll know within one exchange.", bundle: 'pro' },
      ]
    },
    {
      name: "Positions Hide Needs",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "People arrive with positions — a date, a number, a plan — and those positions are conclusions they have already drawn from something they need. The need is where the room is.\n\nTwo people arguing about a date may want completely different things: one wants time, the other wants not to have an awkward conversation twice. Both are available. Neither is visible while the argument is about the date.\n\nMindset: ask what is underneath before you offer anything.",
      inputs: [
        { q: "We just want different things, there's no solution.", a: "You want different POSITIONS. You may want compatible things underneath.", bundle: 'pro' },
        { q: "Asking why they want it sounds like I'm challenging them.", a: "Ask what it protects rather than why. It lands as interest.", bundle: 'pro' },
        { q: "It's obvious what they want, they've said it four times.", a: "They've said their position four times. You still don't know what it's for.", bundle: 'pro' },
        { q: "There's no room, we're too far apart.", a: "Too far apart on the positions. Check the needs before you conclude that.", bundle: 'pro' },
        { q: "Finding all that out takes too long.", a: "One question. It's faster than another twenty minutes of the same argument.", bundle: 'pro' },
      ]
    },
    {
      name: "Say What You Want First",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "A surprising number of negotiations are lost by people who never entered them. They soften the preference until it disappears, or wait to see what the other person says, or hope it will be obvious.\n\nSaying plainly what you would like is not aggressive and does not commit you to getting it. It just puts your side on the table, which is the minimum requirement for it being considered at all.\n\nMindset: state it, then be flexible. Not the other way round.",
      inputs: [
        { q: "I'll see what they suggest first.", a: "Then you're negotiating against yourself before anyone's spoken.", bundle: 'pro' },
        { q: "It sounds demanding to say what I want.", a: "\"I'd like X\" is a sentence. Everyone else in the room is saying one.", bundle: 'pro' },
        { q: "I don't want to seem inflexible.", a: "Say what you want and that you're flexible. Both in the same breath.", bundle: 'pro' },
        { q: "If I ask for what I want I'll seem selfish.", a: "A negotiation where only one side has preferences isn't a negotiation.", bundle: 'pro' },
        { q: "I'll go along and mention it if it matters.", a: "It'll be settled by then, and you'll be annoyed about something nobody knew.", bundle: 'pro' },
      ]
    },
    {
      name: "Check It Twice",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The moment somebody says \"that'll do\" is the most dangerous moment in a negotiation. Both people are relieved, the conversation is nearly over, and neither wants to reopen it.\n\nBut an agreement nobody is happy with will not be defended. It gets quietly deprioritised, missed, or complained about later — and ten more minutes at the end would have prevented all of it.\n\nMindset: ask once more before you both walk away.",
      inputs: [
        { q: "We've agreed, let's not reopen it.", a: "Ten minutes now beats three months of it not working.", bundle: 'pro' },
        { q: "They said yes, that's enough.", a: "A fast yes is worth one more question. Ask.", bundle: 'pro' },
        { q: "I don't want to seem difficult at the last minute.", a: "The last minute is exactly when it's cheap to fix.", bundle: 'pro' },
        { q: "It's good enough, and I'm tired.", a: "Fair. Then say that, and agree to look at it again next week.", bundle: 'pro' },
        { q: "Pointing out my remaining problem seems petty.", a: "It'll be less petty now than in March, when it's stopped working.", bundle: 'pro' },
      ]
    },
  ],
  brokenrecord: [
    {
      name: "You Do Not Owe a Reason",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Offering a reason feels like the decent thing to do — it treats the other person as reasonable and shows you are not being arbitrary. In the middle of pressure it does the opposite: it hands them the terms of the argument.\n\nOnce a reason is on the table, the question stops being what you decided and becomes whether your reason is good enough. That is a question the other person now gets to answer, and they will answer it in their favour.\n\nMindset: a decision that is yours to make does not require a justification. \"I'd rather not\" is complete.",
      inputs: [
        { q: "It's rude not to explain myself.", a: "It's normal. \"I'd rather not\" is a complete sentence between adults.", bundle: 'pro' },
        { q: "If I give a good reason they'll accept it.", a: "They'll solve it. A good reason is a puzzle, not a full stop.", bundle: 'pro' },
        { q: "They'll think I'm hiding something.", a: "They might. That's cheaper than an hour of negotiating your reason.", bundle: 'pro' },
        { q: "I've got a genuinely good reason, why not use it?", a: "Because they'll work around it, and then you'll need a second one.", bundle: 'pro' },
        { q: "Not explaining feels cold.", a: "Then acknowledge them warmly and still don't explain. The two are separate.", bundle: 'pro' },
      ]
    },
    {
      name: "Repetition Is Not Rudeness",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Saying the same sentence four times feels obstinate and slightly absurd, which is why most people rephrase instead — and rephrasing is exactly what keeps the conversation alive.\n\nFrom the outside it does not read as rude. It reads as settled. The other person is not offended by the repetition; they are informed by it, and most stop after the third identical answer because there is visibly nowhere left to go.\n\nMindset: the sameness is the message. It says this is not being decided right now.",
      inputs: [
        { q: "Saying the same thing again is obviously annoying.", a: "Less annoying than fifteen more minutes of it. Repetition is the short route.", bundle: 'pro' },
        { q: "I should at least vary it so it sounds less robotic.", a: "Every variation is a new sentence to argue with. Robotic is doing its job.", bundle: 'pro' },
        { q: "They'll think I'm not listening.", a: "That's what the acknowledgement is for. One clause, then the same line.", bundle: 'pro' },
        { q: "It feels like a power play.", a: "It's the opposite — it's the version with no argument and no raised voice in it.", bundle: 'pro' },
        { q: "Surely I should engage with what they're saying.", a: "You can hear it without answering it. Those are different things.", bundle: 'pro' },
      ]
    },
    {
      name: "Their Discomfort Is Not Your Emergency",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The hardest part of holding a line is not the argument. It is watching someone be disappointed, frustrated or upset and knowing you could end it instantly by giving in.\n\nThat impulse is decent and it is also the mechanism by which people end up doing things they had decided not to do. Someone else's disappointment is uncomfortable and it is survivable, for both of you.\n\nMindset: you are allowed to leave someone disappointed. That is not the same as having wronged them.",
      inputs: [
        { q: "They're really upset — I should just say yes.", a: "You'd be solving your discomfort, not theirs. And you'd resent it by Thursday.", bundle: 'pro' },
        { q: "It's only a small thing, why make it difficult?", a: "Because it isn't small to you, or you'd have said yes already.", bundle: 'pro' },
        { q: "I'm being unkind.", a: "You're declining a request. Those aren't the same thing.", bundle: 'pro' },
        { q: "They'll be angry with me.", a: "Possibly, briefly. Doing it resentfully lasts longer.", bundle: 'pro' },
        { q: "A better person would help.", a: "A better person would also be allowed to say no to this one.", bundle: 'pro' },
      ]
    },
    {
      name: "Calm Is the Technique",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The words matter far less than the delivery. The same sentence, said with a sigh or a sharpened edge, tells the other person that you are close to breaking or that this has become a fight — and both invite more pressure.\n\nFlat, level and unbothered is what says the decision is not in play. It is also what keeps the relationship intact, because nothing has been said that either of you has to apologise for later.\n\nMindset: nothing to prove, nothing to defend. Just the same sentence, said the same way.",
      inputs: [
        { q: "I'm getting annoyed and it's showing.", a: "Shorten the sentence. Short is easier to say calmly than long.", bundle: 'pro' },
        { q: "They're being unreasonable — why should I stay calm?", a: "Because calm is what's holding the line. Losing it hands them the subject.", bundle: 'pro' },
        { q: "A bit of sarcasm would make my point.", a: "It would start an argument. Then it's about your tone, not your answer.", bundle: 'pro' },
        { q: "I want them to know how frustrating this is.", a: "Say it plainly once, if you must. Do not let it into the line.", bundle: 'pro' },
        { q: "If I'm too calm they won't take it seriously.", a: "Calm repetition is taken far more seriously than heat. It reads as settled.", bundle: 'pro' },
      ]
    },
  ],
  respondingtopassiveaggression: [
    {
      name: "The Reaction Is the Point",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "A passive-aggressive remark is built to provoke a reaction it can then deny provoking. That is the whole mechanism, and it is why the remark is indirect in the first place.\n\nWhich means the least satisfying thing you can do is answer the words and nothing else. Not because you did not notice, but because you have declined to supply the missing half of the exchange.\n\nMindset: you do not owe a reaction to something that was not said.",
      inputs: [
        { q: "If I don't react they'll think they got away with it.", a: "They'll notice it didn't work. That's the thing that actually changes it.", bundle: 'pro' },
        { q: "Letting it pass makes me look weak.", a: "It looks like it didn't reach you. That reads as the opposite of weak.", bundle: 'pro' },
        { q: "Someone has to call this out.", a: "Sometimes. Not necessarily now, and not necessarily in front of everyone.", bundle: 'pro' },
        { q: "I should show that I noticed.", a: "You can notice without responding. Those are different things.", bundle: 'pro' },
        { q: "They'll just keep doing it.", a: "Then it's a pattern, and a pattern gets one proper conversation rather than four small ones.", bundle: 'pro' },
      ]
    },
    {
      name: "You Can Choose Not to Answer",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "There is an idea that every remark requires a response — that leaving one unanswered means accepting it. It does not, and treating each one as something to be handled turns other people's moods into your workload.\n\nChoosing to let something go is a decision, not a defeat. The test is honest and simple: will you still be thinking about it in an hour?\n\nMindset: pick the ones worth answering, and let the rest fall where they land.",
      inputs: [
        { q: "If I ignore it, I'm accepting it.", a: "You're declining to make it a conversation. That's not the same as agreeing.", bundle: 'pro' },
        { q: "I let it go and now I'm annoyed about it.", a: "Then it was one to answer. Go back to it — later is fine.", bundle: 'pro' },
        { q: "I should deal with each one as it comes.", a: "That's their mood becoming your job. Choose the ones that matter.", bundle: 'pro' },
        { q: "Not saying anything feels like avoiding it.", a: "Only if you didn't decide. Deciding is the difference.", bundle: 'pro' },
        { q: "They'll think I didn't notice.", a: "Almost certainly they'll think you noticed and weren't bothered.", bundle: 'pro' },
      ]
    },
    {
      name: "Say It Plainly Yourself",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The most useful thing in this pack is not a way of handling other people's indirectness — it is noticing your own.\n\nAlmost everyone does it. A sigh instead of a request, \"it's fine\" when it is not, a joke carrying something serious in it. It happens for a decent reason: the direct version felt too big, or too risky, or you were not sure you were entitled to it.\n\nThe plain version is nearly always smaller and easier than it feels, and it gets you what the indirect version was reaching for.\n\nMindset: if you are going to say it sideways, consider saying it straight instead.",
      inputs: [
        { q: "I'm not passive-aggressive, other people are.", a: "Everyone does it. The sigh, the \"it's fine\", the joke with something in it.", bundle: 'pro' },
        { q: "I shouldn't have to spell it out.", a: "Maybe not. But the spelt-out version is the one that gets you what you want.", bundle: 'pro' },
        { q: "Saying it directly feels like too big a deal.", a: "It's usually smaller than the hint. Hints get discussed for days.", bundle: 'pro' },
        { q: "If I say it straight it'll cause an argument.", a: "The indirect version causes a longer one, later, about something else.", bundle: 'pro' },
        { q: "I did the sighing thing again.", a: "Go back and say the actual sentence. It's not too late to be direct.", bundle: 'pro' },
      ]
    },
    {
      name: "There Is Usually Something Real Underneath",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Passive aggression is annoying, and it is also almost always a real grievance that could not find a direct route out. The remark is the symptom; the frustration underneath it is normally genuine and often justified.\n\nThat does not make the delivery acceptable, and holding both at once is the useful position: the way it was said is not fine, and the thing it was about may well be.\n\nMindset: take the grievance seriously even while declining the delivery.",
      inputs: [
        { q: "They're just being difficult.", a: "Possibly. Or they're annoyed about something real and couldn't say it.", bundle: 'pro' },
        { q: "If I acknowledge the feeling I'm rewarding the behaviour.", a: "You're separating them. \"I can see you're annoyed\" isn't \"that was fine\".", bundle: 'pro' },
        { q: "Why should I do the work of finding out what's wrong?", a: "You shouldn't have to. It's often the fastest way to make it stop.", bundle: 'pro' },
        { q: "There's no excuse for talking to people like that.", a: "There isn't. There's usually a reason, and the reason is worth knowing.", bundle: 'pro' },
        { q: "They should just say it.", a: "Yes. And a lot of people can't, until someone makes it easy.", bundle: 'pro' },
      ]
    },
  ],
  makingrequests: [
    {
      name: "Asking Is Not Imposing",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The belief that a request puts someone in a difficult position, and that a considerate person finds a way not to need anything.\n\nIt produces the hint, the sigh, and the quiet struggle — all of which are harder on the other person than the question would have been, because now they are being managed rather than asked.\n\nBeing asked is also, for most people, mildly flattering. It says you thought of them, and that you thought they could.\n\nMindset: a question is not a burden. An unanswerable hint is.",
      inputs: [
        { q: "They've got enough on without me adding to it.", a: "You don't know that, and they get to decide it. That's what the question is for.", bundle: 'pro' },
        { q: "I should be able to manage this myself.", a: "Probably. It'll take three times as long and you'll be worse company all week.", bundle: 'pro' },
        { q: "I don't want to put them in an awkward position.", a: "Being asked isn't awkward. Being hinted at for a fortnight is.", bundle: 'pro' },
        { q: "If they wanted to help they'd have offered.", a: "They'd have to notice first. Nobody's watching you that closely.", bundle: 'pro' },
        { q: "It's easier to just do it.", a: "It is today. Notice what it costs by Thursday.", bundle: 'pro' },
      ]
    },
    {
      name: "They Cannot Read Your Mind",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The quiet expectation that someone who cared would work it out — that having to ask spoils it, and that the request only counts if it was not needed.\n\nIt is the belief underneath most hinting, and it is the most reliable source of resentment in close relationships. The other person is not ignoring the request. They have not heard one.\n\nMindset: they are not refusing. They do not know.",
      inputs: [
        { q: "I shouldn't have to ask.", a: "Maybe not. You do, though, and asking is cheaper than another month of this.", bundle: 'pro' },
        { q: "It doesn't count if I have to spell it out.", a: "It counts to the person doing it. Only you are keeping that score.", bundle: 'pro' },
        { q: "I've made it obvious.", a: "Obvious to you. From where they're standing it was a comment about the kitchen.", bundle: 'pro' },
        { q: "They should have noticed by now.", a: "They noticed the bins were full. That's not the same as knowing you want them to go.", bundle: 'pro' },
        { q: "Saying it out loud makes it a big thing.", a: "One sentence is the smallest version this can take. The silent version is the big one.", bundle: 'pro' },
      ]
    },
    {
      name: "A Refusable Request Is the Only Real One",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The instinct to make a no as difficult as possible — more reasons, more pressure, more visible need — on the theory that this is how you get a yes.\n\nIt works, and that is the problem. A yes produced by pressure is a reluctant one, and reluctant yeses come back later as coldness, as a favour called in, or as a person who stops answering your messages.\n\nMindset: you want a yes you can trust. Leave the no genuinely available.",
      inputs: [
        { q: "If I make it easy to refuse, they will.", a: "Some will. Those were the reluctant yeses you didn't want.", bundle: 'pro' },
        { q: "One more reason might tip it.", a: "Or tip it into a negotiation about your reasons. The question was better on its own.", bundle: 'pro' },
        { q: "They need to know how much I need this.", a: "One sentence says that. The fourth one says something else.", bundle: 'pro' },
        { q: "They'd only say no because they don't realise.", a: "Then say the thing they don't realise, once, and stop. That's the whole move.", bundle: 'pro' },
        { q: "I'll ask when they're in a good mood.", a: "That's timing, not pressure. Fine. Just don't call it consideration if it's cornering.", bundle: 'pro' },
      ]
    },
    {
      name: "Their No Costs You Nothing",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Taking a refusal as information about the relationship rather than about Thursday. It produces the cool tone, the second attempt, and the mental note — all of which the other person notices.\n\nWhat they learn from it is that saying no to you is expensive. From then on you get avoidance or reluctant yeses, and you have lost the ability to ask cleanly.\n\nMindset: they answered the question. That was the point of asking it.",
      inputs: [
        { q: "They said no, so they don't care.", a: "They said no to Saturday. That's the size of the information.", bundle: 'pro' },
        { q: "I'd have said yes if it were them asking.", a: "Maybe. That's a fact about you, not a debt they signed.", bundle: 'pro' },
        { q: "I'm not asking them again.", a: "Then the no cost them something, and they'll know. Is that what you wanted?", bundle: 'pro' },
        { q: "I want to know why, at least.", a: "You want the reason to be good enough. It doesn't have to be.", bundle: 'pro' },
        { q: "It's embarrassing to have asked now.", a: "To you, for an hour. To them it was a question they answered.", bundle: 'pro' },
      ]
    },
  ],
  sayingno: [
    {
      name: "A Clear No Is the Kind One",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Softening a refusal until it is unclear feels like the considerate option. It is the opposite: an unclear answer leaves the other person planning around a maybe, asking again later, and eventually being refused anyway — with less time to find someone else.\n\nThe clearest no is the one that costs them least, even though it is the one that costs you most in the moment.\n\nMindset: be clear now so they can move on.",
      inputs: [
        { q: "A firm no sounds harsh.", a: "A vague one sounds kind and costs them a week. Clear is the kind version.", bundle: 'pro' },
        { q: "I'll soften it so they don't feel rejected.", a: "Soften how you say it. Don't soften the answer.", bundle: 'pro' },
        { q: "\"Probably not\" gives them a gentle landing.", a: "It gives them a maybe. They'll ask again, and you'll say no again.", bundle: 'pro' },
        { q: "I don't want to disappoint them straight away.", a: "You'll disappoint them later instead, with less warning.", bundle: 'pro' },
        { q: "Maybe something will change and I'll be able to.", a: "Then say no now and offer if it changes. Don't hold them on a maybe.", bundle: 'pro' },
      ]
    },
    {
      name: "No Is a Complete Answer",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "There is a strong feeling that a refusal must be justified — that you owe an explanation, and a good one, or the no is not really allowed.\n\nFor requests that are yours to decline, it is not true. \"I can't\" is complete. A reason is a courtesy you may choose to give, particularly with people close to you, and it stops being a courtesy the moment it becomes a thing to be argued with.\n\nMindset: a reason is optional. Clarity is not.",
      inputs: [
        { q: "I need a good enough reason or I can't say no.", a: "You need an answer. The reason is optional and often unhelpful.", bundle: 'pro' },
        { q: "If I don't explain, they'll think I'm being difficult.", a: "They'll think you said no. Which you did.", bundle: 'pro' },
        { q: "My reason isn't good enough to justify it.", a: "It doesn't have to justify anything. \"I'd rather not\" is a real answer.", bundle: 'pro' },
        { q: "Giving a reason is only polite.", a: "Often, yes. Just know that every reason is something they can solve.", bundle: 'pro' },
        { q: "They asked why. I have to answer.", a: "\"I'd rather not go into it\" answers the question honestly.", bundle: 'pro' },
      ]
    },
    {
      name: "You Are Allowed to Take a Minute",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Almost every regretted yes is said instantly, in the moment, while someone is looking at you. The pressure is small and social and remarkably effective.\n\nNothing obliges you to answer immediately. \"Let me come back to you\" is a normal sentence, and it usually produces an honest answer where the on-the-spot version produces a polite one.\n\nMindset: the pause is the whole technique.",
      inputs: [
        { q: "They're waiting, I have to answer now.", a: "They can wait until tomorrow. Almost everything can.", bundle: 'pro' },
        { q: "Asking for time looks like I'm making a fuss.", a: "It looks like you're taking it seriously. That's a compliment to them.", bundle: 'pro' },
        { q: "If I don't answer now I'll have to have the conversation twice.", a: "Once briefly and once honestly beats once badly.", bundle: 'pro' },
        { q: "I already know the answer, so I may as well say it.", a: "Then say it. The pause is for when you don't know.", bundle: 'pro' },
        { q: "I'll say yes now and get out of it later.", a: "That's a worse conversation than this one, and it's coming.", bundle: 'pro' },
      ]
    },
    {
      name: "Their Disappointment Is Not Your Fault",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The hardest part of saying no is rarely the sentence. It is watching someone be let down and knowing you could fix it instantly.\n\nThat impulse is decent and it is also the mechanism by which people end up doing things they had decided against, resenting it afterwards, and doing them badly. Someone else's disappointment is uncomfortable and survivable, for both of you.\n\nMindset: you can be the reason someone is disappointed without having done anything wrong.",
      inputs: [
        { q: "They looked so let down. I should have said yes.", a: "They're disappointed. That's not the same as you having wronged them.", bundle: 'pro' },
        { q: "It's only a small thing, why make it difficult?", a: "If it were small to you, you'd have said yes already.", bundle: 'pro' },
        { q: "A better person would help.", a: "A better person would also be allowed to say no to this one.", bundle: 'pro' },
        { q: "They'll think I don't care about them.", a: "One no doesn't outweigh everything else. It really doesn't.", bundle: 'pro' },
        { q: "I'll do it resentfully rather than say no.", a: "They'd rather have the no. Resentful help is worse for both of you.", bundle: 'pro' },
      ]
    },
  ],
  emotionlabellingandregulation: [
    {
      name: "The Emotion Labelling Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The pack-wide stance: naming a feeling is how you get some distance from it, not how you hand it the wheel.\n\nThere is a common assumption that talking about a feeling makes it bigger. In practice the opposite tends to happen — the unnamed version is the one that runs the afternoon, and putting a word on it turns it into something you are having rather than something you are.\n\nThe three thoughts that cause the trouble:\n1. \"If I name it I'll make it worse\" — usually it shrinks it.\n2. \"Feelings are private\" — the ones affecting a conversation are already in the room.\n3. \"I should be past this by now\" — should has never once changed what somebody feels.\n\nMindset: notice the signals, name it honestly, and respond in a way you will still respect tomorrow. That is the whole exercise.",
      inputs: [
        { q: "You worry that naming the feeling will make it bigger.", a: "\"Naming it usually shrinks it. It's the one I don't name that runs my whole afternoon.\"", bundle: 'pro' },
        { q: "You think feelings have no place in this conversation.", a: "\"It's already in the room — it's in my voice. Naming it just makes it workable.\"", bundle: 'pro' },
        { q: "You feel you should be over it by now.", a: "\"'Should' has never once changed what I actually feel. Start from what's true.\"", bundle: 'pro' },
        { q: "You are afraid that saying it out loud commits you to it.", a: "\"A word isn't a verdict. I can find a better one in three sentences.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The No Judgement Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance behind Label the Emotion: there is no wrong feeling to have, only inaccurate words for it.\n\nMost people do not get stuck on finding the word. They get stuck one step earlier, deciding whether they are allowed to feel it — and by the time that argument is over, the moment has gone.\n\nWhere it shows up:\n1. You downgrade it — \"a bit annoyed\" for something that actually hurt.\n2. You justify it before you have said it — \"I know this is silly, but…\"\n3. You refuse the word because it makes you look bad — jealous, embarrassed, left out.\n\nMindset: label it honestly and without judging yourself for having it. The unflattering words are usually the accurate ones.",
      inputs: [
        { q: "You downgrade \"hurt\" to \"a bit annoyed\" before you say it.", a: "\"The accurate word is usually the one I don't want to use. Use that one.\"", bundle: 'pro' },
        { q: "You want to explain why the feeling is justified before naming it.", a: "\"I don't need a case. The feeling is a fact, not a claim.\"", bundle: 'pro' },
        { q: "The honest word makes you look small or petty.", a: "\"Jealous, embarrassed, left out — unflattering isn't the same as untrue.\"", bundle: 'pro' },
        { q: "You think you shouldn't feel this way at all.", a: "\"Whether I should is a separate question. First, what is it?\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Signals Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance behind Describe the Signals: your body works it out before you do.\n\nThe tight chest, the replaying, the going quiet — these arrive well ahead of any word, and most people treat them as symptoms to hide rather than as the information they are. Learning your own particular signals is what turns a feeling from an ambush into something you saw coming.\n\nThree things worth knowing about yourself:\n1. Your physical tell — jaw, chest, stomach, hands.\n2. Your mental tell — replaying, going blank, catastrophising.\n3. Your behavioural tell — going quiet, getting brisk, over-explaining.\n\nMindset: the signals are data, not weakness. Knowing your own gives you thirty seconds of warning, and thirty seconds is usually all you need.",
      inputs: [
        { q: "You notice your body reacting and try to ignore it.", a: "\"That's information arriving early. Ignoring it doesn't make it not happen.\"", bundle: 'pro' },
        { q: "You cannot name the feeling and give up.", a: "\"Start with the body. The word usually turns up once I've described what happened.\"", bundle: 'pro' },
        { q: "You are embarrassed that the nerves are visible.", a: "\"Everyone's got tells. Mine being visible isn't the same as mine being a problem.\"", bundle: 'pro' },
        { q: "The feeling caught you completely off guard.", a: "\"It probably didn't. I just wasn't reading my own signals — worth knowing them.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Offering Not Telling Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance behind Label Their Emotion: you are handing someone a word to try on, not telling them what they feel.\n\nThe same sentence can be a gift or an imposition depending on how much room you leave. \"You're angry\" is a diagnosis and gets defended against; \"it sounds like you were angry — were you?\" is an offer, and gets thought about.\n\nThe tell is what you do when they say no:\n1. You ask what word they would use — that was an offer.\n2. You explain why you were right — that was a diagnosis.\n3. You go quiet and feel embarrassed — that was a performance.\n\nMindset: being slightly wrong is useful. Someone correcting your word is someone getting closer to their own, which is exactly what you were trying to help with.",
      inputs: [
        { q: "You are confident you know what they are feeling.", a: "\"Even if I'm right, it lands better as a question. Leave them the room.\"", bundle: 'pro' },
        { q: "They reject the word you offered and you want to argue.", a: "\"That's them getting closer to it. Ask what they'd call it instead.\"", bundle: 'pro' },
        { q: "You worry about guessing wrong and looking foolish.", a: "\"A wrong guess is often what helps them find the right word. Guess warmly.\"", bundle: 'pro' },
        { q: "You want to move straight to fixing their problem.", a: "\"They haven't finished finding the word yet. Solutions later, if at all.\"", bundle: 'pro' },
      ]
    },
  ],
  conflictemotions: [
    {
      name: "A Feeling Points at a Need",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Feelings in conflict are not noise to be got past. They are signals, and each one points at something that matters to you — being respected, being safe, being able to rely on an arrangement.\n\nThat is why naming the need changes everything. A feeling on its own is a report about a bad moment. A need is something the two of you can actually do something about, and it is usually smaller and more reasonable than the argument suggested.\n\nMindset: ask what the feeling is protecting. That is the thing to say out loud.",
      inputs: [
        { q: "Talking about feelings makes it worse.", a: "A feeling without a need does. Add the need and it becomes solvable.", bundle: 'pro' },
        { q: "It's a small thing, I shouldn't feel this strongly.", a: "The strength is usually about the need, not the incident. Find that.", bundle: 'pro' },
        { q: "I don't know why it bothered me so much.", a: "Then say that, and work it out out loud. That's allowed.", bundle: 'pro' },
        { q: "They should just know what I need.", a: "They can't. Most people are guessing, and most guesses are wrong.", bundle: 'pro' },
        { q: "Saying what I need sounds demanding.", a: "\"I need to know the house is locked\" isn't a demand. It's information.", bundle: 'pro' },
      ]
    },
    {
      name: "Describe, Do Not Diagnose",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The most common way a reasonable point becomes a row is a single word — dismissive, careless, thoughtless. Each one is a claim about who the other person is, and people defend who they are far harder than they defend what they did.\n\nThe description without the verdict is almost always enough. It is also harder to write and easier to hear.\n\nMindset: say what happened. Leave out what it means about them.",
      inputs: [
        { q: "But they were being careless.", a: "Maybe. \"The door was unlocked\" gets you further than \"you were careless\".", bundle: 'pro' },
        { q: "If I don't say what it means, they won't take it seriously.", a: "They'll take the facts seriously. They'll argue with the verdict.", bundle: 'pro' },
        { q: "I want them to know how it came across.", a: "Say how it landed on you. That's not the same as naming what they are.", bundle: 'pro' },
        { q: "Sugar-coating it lets them off.", a: "Precision isn't sugar-coating. It's the version they can't dodge.", bundle: 'pro' },
        { q: "They know exactly what they did.", a: "Then it costs nothing to say it plainly and skip the adjective.", bundle: 'pro' },
      ]
    },
    {
      name: "Finish the Sentence",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The exposed part of this is saying how you felt, and once that is out there is a strong pull to stop — the difficult thing has been said, and the rest feels like piling on.\n\nBut the rest is the useful part. The need explains why it mattered and the request says what would help, and without them you have handed someone a problem with no handle on it. That is how the same conflict comes back in a month.\n\nMindset: the hard bit is done. The rest is the easy half, and it is the half that changes anything.",
      inputs: [
        { q: "I've said how I feel, that should be enough.", a: "It tells them there's a problem. It doesn't tell them what would fix it.", bundle: 'pro' },
        { q: "Asking for something specific feels like too much.", a: "It's less than they're currently guessing at. Specific is a relief.", bundle: 'pro' },
        { q: "They apologised, so it's resolved.", a: "An apology without a change means the same conversation in a month.", bundle: 'pro' },
        { q: "I don't want to tell them what to do.", a: "You're asking, not telling. They can say no, and that's the difference.", bundle: 'pro' },
        { q: "It'd be easier to leave it there.", a: "It is, tonight. It isn't in March when it happens again.", bundle: 'pro' },
      ]
    },
    {
      name: "They Have a Version Too",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Preparing what to say is useful, and it has a cost: by the time you speak you have a complete account in your head, and it feels finished.\n\nBut they were there as well, and their version usually contains something yours does not — a reason, a piece of context, or something you did that you had not noticed. Asking does not weaken your case. It is the only way to end up with an accurate one.\n\nMindset: you have half of what happened. Ask for the other half.",
      inputs: [
        { q: "I know what happened, I was there.", a: "You were there for your half. Ask about theirs.", bundle: 'pro' },
        { q: "Asking gives them room to make excuses.", a: "It also gives them room to explain something you'd want to know.", bundle: 'pro' },
        { q: "If I ask, I'll lose my thread.", a: "Say your bit first, then ask. That's the order.", bundle: 'pro' },
        { q: "They'll just turn it round on me.", a: "Some will. Most say something you hadn't got.", bundle: 'pro' },
        { q: "I don't want to hear that I was in the wrong too.", a: "You probably were, a bit. Hearing it is cheaper than not knowing it.", bundle: 'pro' },
      ]
    },
  ],
  rolebasedhumour: [
    {
      name: "The Playing a Role Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The pack-wide stance: you are playing a character, not making fun of a person.\n\nThis is the line the whole pack rests on, and it is easier to hold than it sounds. Every role here is somebody slightly ridiculous, and you are volunteering to be them. Nobody in the room is being described except you.\n\nThe three thoughts worth checking:\n1. \"Who is the joke about?\" — it should be the character, which is you.\n2. \"Could this be heard as a comment on them?\" — if yes, pick another role.\n3. \"Would I be happy if they did this back?\" — if not, it is not a bit.\n\nMindset: exaggerate the traits of the role, keep it light, and make sure everyone can stay in the room. The role is a costume, not a mirror held up to somebody else.",
      inputs: [
        { q: "You are about to use a role that describes the person you are talking to.", a: "\"Then it isn't a role, it's a comment. Pick a different one.\"", bundle: 'pro' },
        { q: "You want the laugh more than you want the room comfortable.", a: "\"A laugh I have to spend someone else's comfort on is too expensive.\"", bundle: 'pro' },
        { q: "You wonder whether a bit is going too far.", a: "\"Would I be fine with them doing this back to me? If not, don't.\"", bundle: 'pro' },
        { q: "You worry that playing a character makes you look silly.", a: "\"That's the point. The role costs me the status, and that's what makes it safe.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Commitment Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance about delivery: half-in is the only way this fails.\n\nA role delivered tentatively is not a small joke, it is a confusing sentence. The words matter far less than whether you said them like you meant them, which is why the same line can be excellent or baffling.\n\nWhere the nerve goes:\n1. You laugh partway through your own line and let the air out of it.\n2. You add a question mark at the end, asking permission retroactively.\n3. You start big and shrink halfway, so it lands as neither.\n\nMindset: commit or say the ordinary thing. Both are good outcomes. A role delivered apologetically is the only bad one.",
      inputs: [
        { q: "You feel yourself softening the line as you say it.", a: "\"Say it properly or say something normal. The half version is the worst one.\"", bundle: 'pro' },
        { q: "You laugh in the middle of your own bit.", a: "\"The delivery is the joke. Straight face, and let them laugh.\"", bundle: 'pro' },
        { q: "You add a nervous question mark at the end.", a: "\"No permission needed mid-line. Land it, then read the room.\"", bundle: 'pro' },
        { q: "You do not trust the room enough to commit.", a: "\"Then don't do the bit. Ordinary is a completely fine answer.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Costs Me Not Them Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance about where the line is: the role has to cost you status, never them.\n\nEvery role in this pack is a person with a flaw, and the humour comes from wearing the flaw yourself. The moment the flaw belongs to the person you are talking to, the same words become an insult with a costume on.\n\nThree quick tests:\n1. Who looks ridiculous at the end of the line? It should be you.\n2. Is the object of the joke something they cannot change? Then it is not the joke to make.\n3. Did they just say something sincere? Then no role, whichever one it is.\n\nMindset: the costume is on you. If you find yourself reaching for a role because it describes them rather than you, that is the signal to stop.",
      inputs: [
        { q: "The funniest available role happens to describe them.", a: "\"That's the one to skip. Funny and aimed at them isn't a role.\"", bundle: 'pro' },
        { q: "You want to use mock offence right after they said something real.", a: "\"Not now. That reads as mimicking them, whatever I meant.\"", bundle: 'pro' },
        { q: "You are about to guard something they actually need.", a: "\"Stinginess is only funny about a biro. Give them the thing.\"", bundle: 'pro' },
        { q: "You notice the laugh would come at their expense.", a: "\"Then it's teasing, not a role, and I should know which I'm doing.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Exit Mindset",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance about getting out: knowing how to end a bit is what makes it safe to start one.\n\nMost people who avoid this kind of humour are not worried about the first line. They are worried about being stuck in it — having committed to a character with no way back to the actual conversation.\n\nThe exits, all of which are short:\n1. Drop it and ask a real question — \"Right, what are you actually going to do?\"\n2. Name the landing — \"That was a swing and a miss. Moving on.\"\n3. Land one absurd line and stop on it deliberately.\n\nMindset: three beats and out, on a laugh rather than after one. Having a planned exit is what lets you commit properly to the entrance.",
      inputs: [
        { q: "You avoid starting a bit in case you get stuck in it.", a: "\"The exit is one sentence. 'Right, seriously though' works every time.\"", bundle: 'pro' },
        { q: "The bit is going well and you want to keep going.", a: "\"Leave on a laugh, not after one. Three beats and out.\"", bundle: 'pro' },
        { q: "It misfired and you want to explain what you meant.", a: "\"Never explain it. One clean exit and the room forgets in a minute.\"", bundle: 'pro' },
        { q: "You are not sure whether the bit has finished.", a: "\"If I'm asking, it has. Hand the conversation back.\"", bundle: 'pro' },
      ]
    },
  ],
  complimenting: [
    {
      name: "They Cannot See Themselves From Outside",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The assumption that they already know — that a person who is good at something must be aware of it, so saying so adds nothing.\n\nAlmost nobody knows. People know what they intended and what went wrong; what they cannot see is the effect, and that is exactly the part only you can report.\n\nMindset: you are not confirming something. You are telling them something they have no way of knowing.",
      inputs: [
        { q: "They must know they're good at this.", a: "They know they tried. They don't know what it did to the room.", bundle: 'pro' },
        { q: "Someone will have told them already.", a: "Ask anyone how often they get told. The answer is usually \"almost never\".", bundle: 'pro' },
        { q: "It'll sound like I'm stating the obvious.", a: "Obvious to you, from the outside. That's the whole reason it's worth saying.", bundle: 'pro' },
        { q: "They'd be embarrassed.", a: "For four seconds. Then it stays with them for years.", bundle: 'pro' },
        { q: "I'll say it when it's a bigger occasion.", a: "The Tuesday ones are the ones people remember. Nobody expects those.", bundle: 'pro' },
      ]
    },
    {
      name: "Deflecting Refuses a Gift",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The reflex to correct a compliment — \"it's old\", \"it was nothing\", \"I got lucky\". It feels like modesty from the inside. From the outside it is being told you were wrong to say something kind.\n\nAnd it teaches. Someone who is corrected twice stops offering, and then you have fewer compliments and no idea why.\n\nMindset: taking it is the generous move. Two words, then stop.",
      inputs: [
        { q: "Agreeing would be arrogant.", a: "\"Thank you\" isn't agreement. It's acknowledgement, and it's all that's needed.", bundle: 'pro' },
        { q: "But it really wasn't that good.", a: "They weren't asking for your assessment. They were telling you theirs.", bundle: 'pro' },
        { q: "I have to say something back.", a: "You don't. Theirs gets its own moment, and yours keeps.", bundle: 'pro' },
        { q: "It's easier to laugh it off.", a: "Easier for you. It costs them the thing they were trying to give.", bundle: 'pro' },
        { q: "I never know what to say.", a: "\"Thank you.\" Then close your mouth. That's the whole skill.", bundle: 'pro' },
      ]
    },
    {
      name: "Specific Is Believable",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The belief that a bigger compliment is a better one — so \"you're amazing\" ought to beat \"the ending was good\".\n\nIt does not. Large general praise is the shape politeness takes, and everyone knows it; small specific praise cannot be produced without having paid attention, so it proves itself as it is said.\n\nMindset: the detail is the evidence. Without it you are only being nice.",
      inputs: [
        { q: "\"That was great\" is enough.", a: "It's pleasant and it evaporates. Add the one detail and it stays.", bundle: 'pro' },
        { q: "I can't remember anything specific.", a: "Then say that. \"Something about the middle worked and I'm still working out what.\"", bundle: 'pro' },
        { q: "The detail I noticed is too small.", a: "Small is the point. Nobody says the small ones, which is why they land.", bundle: 'pro' },
        { q: "I don't want to sound like I was analysing them.", a: "Being noticed is not the same as being analysed. One sentence isn't a report.", bundle: 'pro' },
        { q: "A big compliment feels more generous.", a: "More generous to give, less useful to receive. Aim at useful.", bundle: 'pro' },
      ]
    },
    {
      name: "It Costs You Nothing",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The quiet arithmetic that stops most compliments — the fear that it will be strange, misread, unwelcome, or that the moment has passed.\n\nWeigh it honestly. The downside is a few seconds of mild awkwardness, usually yours. The upside is something the other person may still be carrying in ten years. Very few things in a conversation have that ratio.\n\nMindset: the risk is small and it is mostly yours. Say it.",
      inputs: [
        { q: "It might come across wrong.", a: "Praise the choice, keep it short, and it won't. That's the whole safety rule.", bundle: 'pro' },
        { q: "The moment has passed.", a: "\"This is overdue\" fixes that in three words.", bundle: 'pro' },
        { q: "We're not close enough for me to say it.", a: "\"We barely know each other, so take this as an outside opinion…\" — and now you are.", bundle: 'pro' },
        { q: "They'll think I want something.", a: "Then don't ask for anything today. That's what separates the two.", bundle: 'pro' },
        { q: "I'd feel awkward.", a: "You would, for about four seconds. They'd have it for years.", bundle: 'pro' },
      ]
    },
  ],
  responsivehumour: [
    {
      name: "You Do Not Need Material",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The belief that funny people arrive with something — stories,\nlines, a stock of jokes — and that having none of that is why you are quiet.\n\nAlmost none of the humour in ordinary conversation works that way. It is\nbuilt out of the sentence that was just said, in the second after it was said,\nby someone doing one of about five things to it.\n\nMindset: you are not supposed to bring anything. Their sentence is the\nmaterial.",
      inputs: [
        { q: "I'm just not a funny person.", a: "You've never had to be. You've had to notice a sentence and bend it.", bundle: 'pro' },
        { q: "I can never think of anything.", a: "Because you're looking for something new. Look at what they just said instead.", bundle: 'pro' },
        { q: "Funny people have better lives to talk about.", a: "This pack is built on white walls and rain. That's the point.", bundle: 'pro' },
        { q: "I think of the good line ten minutes later.", a: "Everyone does. The five moves are for the first ten seconds instead.", bundle: 'pro' },
        { q: "I'd need to be quicker.", a: "You'd need one move. Exaggeration works on almost anything and nobody minds a slow one.", bundle: 'pro' },
      ]
    },
    {
      name: "Short Is Funnier",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The instinct to keep going — to add the second half, the\nexplanation, the bit that makes sure they got it.\n\nEvery one of those is a subtraction. The response works because it is quick\nenough to feel effortless; a long one announces that you are performing, and\nnow it has to be worth the wait.\n\nMindset: four words beats fourteen. Stop before you want to.",
      inputs: [
        { q: "They might not get it.", a: "If they don't, it costs four seconds. If you explain, it costs more.", bundle: 'pro' },
        { q: "It needs a bit more setup.", a: "Then it's a story, not a response. Save it and answer them instead.", bundle: 'pro' },
        { q: "I'll add one more thing to make it land.", a: "The one more thing is what stops it landing.", bundle: 'pro' },
        { q: "A longer joke is a better joke.", a: "On a stage, sometimes. In a kitchen, never.", bundle: 'pro' },
        { q: "I trailed off at the end.", a: "Land on the last word and stop. The silence afterwards is theirs.", bundle: 'pro' },
      ]
    },
    {
      name: "Never Explain It",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The urge to rescue a joke that did not land — to say it again,\nto point out the pun, to describe why it was funny.\n\nThe rescue is what people remember, not the miss. A joke nobody noticed is\nforgotten within seconds; a joke that was explained is a small awkwardness\neveryone in the room now shares.\n\nMindset: let it go. The next opening is a minute away.",
      inputs: [
        { q: "They didn't get it.", a: "Fine. Answer what they said and carry on.", bundle: 'pro' },
        { q: "If I explain it they'll laugh.", a: "They'll do something. It won't be laughing.", bundle: 'pro' },
        { q: "I want them to know I was joking.", a: "One flat line: \"that was me agreeing, badly.\" Then stop.", bundle: 'pro' },
        { q: "I'll try the same joke again with better timing.", a: "The second run is always worse. Wait for a new sentence.", bundle: 'pro' },
        { q: "It's embarrassing to be ignored.", a: "For you, for four seconds. Nobody else has noticed.", bundle: 'pro' },
      ]
    },
    {
      name: "Aim at the Situation, Not the Person",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The line between this pack and being unkind, and it is not a\nvague one. Humour aimed at the weather, the queue, the timetable or at\nyourself is free. Humour aimed at a person costs them something.\n\nThe test is whether the joke needs them to be a good sport. If it does, it is\nat their expense, and that is a different skill with different rules — it needs\nan established friendship, not a technique.\n\nMindset: the situation, their sentence, or yourself. Those three are safe with\nanyone.",
      inputs: [
        { q: "They can take a joke.", a: "Maybe. But needing them to is the tell.", bundle: 'pro' },
        { q: "It's obviously affectionate.", a: "To you. Warmth doesn't always survive the trip.", bundle: 'pro' },
        { q: "Everyone else is doing it.", a: "To each other, with years behind it. You've had four minutes.", bundle: 'pro' },
        { q: "Self-deprecation is boring.", a: "It's also the only target that can't complain, which makes it useful.", bundle: 'pro' },
        { q: "The joke's about their thing, not them.", a: "Then shrink the thing and leave them out of it entirely.", bundle: 'pro' },
      ]
    },
  ],
  masculine1: [
    {
      name: "She is your Oracle",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Viewing her criticism not as an attack, but as information about where you have stopped being present or true.\nWhen you accept her as your Oracle, you stop defending and start looking for the kernel of truth in what she says.",
      inputs: [
        { q: "She complains about something trivial.", a: "What could be true here? Is she reflecting a blind spot in me right now?", bundle: 'pro' },
        { q: "I feel unfairly accused.", a: "Instead of correcting the facts, ask: Where have I stopped leading or loving her in this situation?", bundle: 'pro' },
        { q: "Her emotions seem completely illogical.", a: "Her emotions aren't a problem to be solved logically; they're a signal I need to listen to.", bundle: 'pro' },
        { q: "I just want her to be \"normal.\"", a: "Her emotional storms are the flip side of the fire and passion I love about her.", bundle: 'pro' },
      ]
    },
    {
      name: "What I Want Matters",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The posture that your own truth and needs are fundamental to your ability to lead.\nBeing \"nice\" by not having an opinion isn't leadership; it's abdicating the frame.",
      inputs: [
        { q: "I'm afraid my opinion will start a fight.", a: "Speaking my truth is the most loving thing I can do for the relationship long-term.", bundle: 'pro' },
        { q: "I think I'm being \"easy-going\" when I say \"you choose.\"", a: "I'm not easy-going; I'm being lazy. Choosing is a gift of structure.", bundle: 'pro' },
        { q: "I feel selfish when I set a boundary.", a: "A little healthy selfishness makes me a more stable man she can actually trust.", bundle: 'pro' },
      ]
    },
  ],
  masculine2: [
    {
      name: "The Oracle Reframe",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Choosing to see her messy emotions as intuitive data rather than a personal attack.\nShe is reflecting back where you have stopped being present, heartful, or a leader.",
      inputs: [
        { q: "She is being \"irrational\" and emotional.", a: "\"She is my Oracle. What is the kernel of truth she is showing me about my own lack of leadership?\"", bundle: 'pro' },
        { q: "I want to tell her she shouldn't feel that way.", a: "\"Emotions cannot be defended. They just are. Can I just take her reality in without resisting?\"", bundle: 'pro' },
        { q: "Her complaint feels 90% \"crazy\".", a: "\"90% of the crazy comes from her not feeling loved or led. How can I step up right now?\"", bundle: 'pro' },
      ]
    },
    {
      name: "Healthy Selfishness",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The commitment to satisfy your own needs and values first so you can lead others.\nWhat you want and need matters; expressing it is an act of love for the relationship.",
      inputs: [
        { q: "I feel guilty for wanting time at the gym.", a: "\"What I want matters. Being grounded and fit makes me a better leader for her.\"", bundle: 'pro' },
        { q: "I'm afraid my preference will disappoint her.", a: "\"Speaking my truth is the most loving thing I can do. I'll trust my desire and live with the consequences.\"", bundle: 'pro' },
        { q: "I've become a \"pleaser\" to avoid conflict.", a: "\"If I want a 'Yes' she can trust, I need to have a strong 'No'. Conflict is the price of integrity.\"", bundle: 'pro' },
      ]
    },
  ],
  masculine3: [
    {
      name: "Fear is just Resistance",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The reframe that fear is simply your subconscious mind resisting a possibility.\nOvercoming fear means challenging the belief that an outcome is \"unacceptable\" or \"unsurvivable\".",
      inputs: [
        { q: "I'm afraid she'll leave me if I set this boundary.", a: "\"She might leave. It would be painful, but I will survive and be fine.\"", bundle: 'pro' },
        { q: "I'm scared to initiate sex because she might say no.", a: "\"Rejection doesn't define me. I can want what I want and be okay with her 'No'.\"", bundle: 'pro' },
        { q: "I'm afraid of the intensity of her anger.", a: "\"Her anger is just energy. I can withstand this fire and die with dignity in this visualization.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Oracle of Heart",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The commitment to see her messy emotional expression as intuitive insight into your own blind spots.\nWhen you stop defending and start listening to the \"Oracle,\" your defensiveness organically vanishes.",
      inputs: [
        { q: "She's being \"crazy\" and illogical again.", a: "\"What is the kernel of truth here? Where have I stopped being present or leading her?\"", bundle: 'pro' },
        { q: "I feel the urge to \"Fix the Facts.\"", a: "\"Feelings first, facts later. Logic is for work; heart is for her.\"", bundle: 'pro' },
        { q: "She is complaining about a \"small thing\" I forgot.", a: "\"To her, this is about care and protection, not logistics. I'll hear the pain, not the blame.\"", bundle: 'pro' },
      ]
    },
  ],
  masculine4: [
    {
      name: "The Goal is Leadership, not Agreement",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Realizing that your job is to lead the couple to a better place, even if she doesn't agree with your methods in the moment.\nAgreement is a \"sign\" you seek; leadership is a \"gift\" you give.",
      inputs: [
        { q: "I feel like a failure because she's still mad.", a: "\"I'm not failing. I'm passing the test by staying grounded in the fire.\".", bundle: 'pro' },
        { q: "I think I need her permission to have an opinion.", a: "\"I don't need permission to exist as who I am. My sureness is its own authority.\".", bundle: 'pro' },
        { q: "I'm afraid that setting a boundary makes me a \"jerk.\"", a: "\"Boundaries are an act of love for the relationship. I'm protecting our culture.\".", bundle: 'pro' },
      ]
    },
  ],
  masculine5: [
    {
      name: "Stability is a Gift",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Reframing the Provider role not as a burdensome duty, but as a proactive gift of love that allows her to blossom.\nDelivering stability makes you uniquely attractive and trusted.",
      inputs: [
        { q: "I feel like I'm \"doing all the work\" logistically.", a: "\"Providing structure is my gift. When I lead well, she can relax into her radiance.\"", bundle: 'pro' },
        { q: "I think she's a \"capable woman\" so she doesn't need my help.", a: "\"She *can* do it, but she doesn't want to *have* to do it. My lead relieves her burden.\"", bundle: 'pro' },
        { q: "I'm afraid she'll think I'm being \"domineering\" if I make a plan.", a: "\"Leadership is an invitation, not a command. She craves my direction, not my dominance.\"", bundle: 'pro' },
      ]
    },
    {
      name: "My Attention is Love",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The realization that \"Tracking her priorities\" is not a chore, but a core Masculine skill that builds deep safety.\nA woman feels loved when she feels she is in your \"field of attention\".",
      inputs: [
        { q: "I think the \"little things\" (like the milk) don't matter.", a: "\"To her, it's not about the milk—it's about whether I'm tracking her and our life together.\"", bundle: 'pro' },
        { q: "I'm too busy at work to think about her challenges.", a: "\"If I'm not tracking what's alive for her, she feels forgotten. My attention is a proxy for my love.\"", bundle: 'pro' },
        { q: "I'll just wait for her to ask for help.", a: "\"Waiting to be told what to do is abdicating. Proactive tracking is Masculine leadership.\"", bundle: 'pro' },
      ]
    },
  ],
  masculine6: [
    {
      name: "Body Always Exists in the Now",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Realizing that thoughts are mostly about the past or future, while the body is the only part of you that is actually \"here\".\nWaking up your body literally crowds out the thoughts and stories of the mind.",
      inputs: [
        { q: "I'm lost in thoughts about what she said yesterday.", a: "\"My thoughts are in the past. My body is in the 'now'. I'll focus on my breath.\".", bundle: 'pro' },
        { q: "I'm worried about what will happen if we keep fighting.", a: "\"Worry is just a future story. I'll feel the ground under my feet. Reality is safe.\".", bundle: 'pro' },
        { q: "I feel \"locked up\" in my head during a conflict.", a: "\"I'll shift my attention to the clenching in my jaw. Somatic sensation is truth; stories are illusions.\".", bundle: 'pro' },
      ]
    },
    {
      name: "The Nervous System is a Muscle",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Understanding that your ability to handle intensity is a trainable skill, not a fixed trait.\nYou have to \"suffer a little\" in practice to grow your capacity for the fire of a relationship.",
      inputs: [
        { q: "I feel like I'm \"just a nervous person\" and can't change.", a: "\"My nervous system is plastic. I can train it to handle this fire, one breath at a time.\".", bundle: 'pro' },
        { q: "I want to quit my meditation or exercise because it's too hard.", a: "\"This resistance is exactly where the growth happens. I'm building my lead.\".", bundle: 'pro' },
        { q: "I'm discouraged that I got reactive again.", a: "\"Training takes months, not days. I'll do a do-over and get back to practice.\".", bundle: 'pro' },
      ]
    },
  ],
  masculinesv: [
    {
      name: "Hon är ditt Orakel",
      guideFront: "En tanke som hindrar dig.",
      guideBack: "Ett sätt att tänka istället.",
      description: "Att se hennes kritik inte som ett angrepp, utan som information om var du har slutat vara närvarande eller sann.\nNär du accepterar henne som ditt orakel, slutar du försvara dig och börjar istället leta efter kärnan av sanning i det hon säger.",
      inputs: [
        { q: "Hon klagar på något småaktigt.", a: "Vad kan vara sant i det här? Speglar hon en blind fläck hos mig just nu?.", bundle: 'pro' },
        { q: "Jag känner mig orättvist anklagad.", a: "Istället för att rätta faktan, fråga mig: Var har jag slutat leda eller älska henne i den här situationen?.", bundle: 'pro' },
        { q: "Hennes känslor verkar helt ologiska.", a: "Hennes känslor är inte ett problem som ska lösas logiskt, utan en signal jag behöver lyssna på..", bundle: 'pro' },
        { q: "Jag vill bara att hon ska vara \"normal\".", a: "Hennes känslomässiga stormar är baksidan av den glöd och passion jag älskar hos henne..", bundle: 'pro' },
      ]
    },
    {
      name: "Det jag vill betyder något",
      guideFront: "En tanke som hindrar dig.",
      guideBack: "Ett sätt att tänka istället.",
      description: "Hållningen att din egen sanning och dina behov är fundamentala för din förmåga att leda.\nAtt vara \"snäll\" genom att inte ha en åsikt är inte ledarskap; det är att abdikera.",
      inputs: [
        { q: "Jag är rädd att min åsikt ska starta ett bråk.", a: "Att tala min sanning är det mest kärleksfulla jag kan göra för relationen på lång sikt..", bundle: 'pro' },
        { q: "Jag tänker att jag är \"easy-going\" när jag säger \"du får välja\".", a: "Jag är inte lättsam, jag är lat. Att välja är en gåva av struktur..", bundle: 'pro' },
        { q: "Jag känner mig självisk när jag sätter en gräns.", a: "Lite hälsosam själviskhet gör mig till en stabilare man som hon faktiskt kan lita på..", bundle: 'pro' },
      ]
    },
  ],
  parenting1: [
    {
      name: "Parent with the End in Mind",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Shifting focus from \"How do I get them to obey now?\" to \"Who do I want them to be as an adult?\".\nWhen you focus on the long-term, today's struggles become learning opportunities rather than personal attacks.",
      inputs: [
        { q: "I feel like a failure because they are shouting at me.", a: "\"This isn't a failure; it's a 'struggle' where they are learning to handle frustration.\"", bundle: 'pro' },
        { q: "I just want them to stop crying so I can have some peace.", a: "\"My goal isn't silence; it's helping them learn that their feelings are seen and heard.\"", bundle: 'pro' },
        { q: "They are being \"difficult\" again.", a: "\"They aren't being difficult; they are *having* a difficult time. I am their guide.\"", bundle: 'pro' },
      ]
    },
  ],
  parenting2: [
    {
      name: "Expectations vs. Reactivity",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The \"Mamalakis balance\": holding very high expectations for behavior while maintaining very low emotional reactivity when they fail to meet them.",
      inputs: [
        { q: "I feel like they are disrespecting my authority when they don't obey.", a: "\"Their 'No' is just a struggle they are having. My job is to be the calm guide through that struggle.\"", bundle: 'pro' },
        { q: "I'm tempted to shout to show them I'm serious.", a: "\"Shouting is a reaction, not a response. Calmness is the clearest signal of true authority.\"", bundle: 'pro' },
        { q: "If I don't give a consequence immediately, they won't learn.", a: "\"The struggle of doing the right thing *is* the learning. A consequence is only one tool among many.\"", bundle: 'pro' },
      ]
    },
  ],
  parenting3: [
    {
      name: "Growth through Friction",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Embracing the \"struggle\" as a sign that learning is happening, rather than a sign that something is wrong.",
      inputs: [
        { q: "I hate seeing my child so frustrated; it makes me feel like a bad parent.", a: "\"Their frustration is the sound of them growing. My job is to be the guide, not the rescuer.\"", bundle: 'pro' },
        { q: "It would be so much faster if I just did it for them.", a: "\"Doing it for them saves time today, but it steals their competence tomorrow. I am parenting for the 'End in Mind'.\"", bundle: 'pro' },
        { q: "They are failing at this task and it’s embarrassing.", a: "\"A safe failure now is a massive win for their future character. I'll stay close while they fail.\"", bundle: 'pro' },
      ]
    },
  ],
  parenting4: [
    {
      name: "Authority is Calm",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Realizing that true authority doesn't need to shout to be heard. Calmness is the clearest signal that you are in control of yourself and the situation.",
      inputs: [
        { q: "If I don't get angry, they won't think I'm serious.", a: "\"My anger escalates the fight; my calmness holds the line. Calmness is the sound of authority.\"", bundle: 'pro' },
        { q: "I feel like I'm \"losing\" if I don't win the argument.", a: "\"Parenting isn't a game of win/lose; it's a process of lead/follow. I lead best when I respond rather than react.\"", bundle: 'pro' },
        { q: "They are being so disrespectful!", a: "\"Their disrespect is a symptom of their struggle. I don't have to defend my dignity; I have to guide their heart.\"", bundle: 'pro' },
      ]
    },
  ],
  parenting5: [
    {
      name: "Repair is the Learning",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Realizing that the goal of parenting isn't to never have conflicts, but to use conflicts as the classroom for learning how to return to love.",
      inputs: [
        { q: "I feel like a failure when we have a big fight.", a: "\"A fight is just a 'struggle' in progress. The real win is how we repair it afterward.\"", bundle: 'pro' },
        { q: "If I apologize, they'll think I'm weak and lose respect for me.", a: "\"Owning my mistakes is the ultimate sign of strength and integrity. I am modeling the man/woman I want them to be.\"", bundle: 'pro' },
        { q: "They need to feel the \"weight\" of their guilt to learn.", a: "\"Shame shuts down the heart; repentance opens it. I want to teach the joy of the return, not the burden of the debt.\"", bundle: 'pro' },
      ]
    },
  ],
  praxframe1: [
    {
      name: "You Belong to You",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The philosophy of Rational Egoism (Rule Zero). You exist for yourself, and anyone who wants something from you must offer value in return.",
      inputs: [
        { q: "I feel like a \"jerk\" for putting my gym time first.", a: "\"I am the only person who wipes my own ass every day; I must treat that man well.\"", bundle: 'pro' },
        { q: "I'm afraid she'll leave if I don't \"keep the peace.\"", a: "\"If her staying requires me to lose my frame, then she doesn't deserve the value I bring.\"", bundle: 'pro' },
        { q: "I think I need to be \"perfect\" so she won't criticize me.", a: "\"Perfection is a 'Nice Guy' trap. I have the right to be illogical and to make mistakes.\"", bundle: 'pro' },
      ]
    },
  ],
  praxframe2: [
    {
      name: "Authentic Kayfabe",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Understanding that relationships are a \"Seduction Story\" where you are the protagonist; you play a character, but the character is based on your earned value.\nAuthentic men co-write the narrative with women rather than making them \"set pieces.\"",
      inputs: [
        { q: "I feel like a \"fraud\" for using these techniques.", a: "\"Acting isn't a fantasy; it's a job. Being a good actor builds my real confidence.\"", bundle: 'pro' },
        { q: "I want her to love me for \"who I really am\" (Dick Whitman).", a: "\"She wants James Bond or Don Draper. I'll provide the frame she craves.\"", bundle: 'pro' },
        { q: "I'm afraid she'll see through my \"Frame.\"", a: "\"The stronger the frame, the less people test it. It's not a suit; it's who I am.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Morality is Results",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Shedding external shaming or religious dogmas that produce misery and adopting a morality based on your chosen outcomes.\nAs long as there is not a law against it, and it gets you what you want, it is moral for you.",
      inputs: [
        { q: "I feel \"guilty\" for being Machiavellian in my career.", a: "\"Everyone lies and manipulates. I'm choosing to play to win.\"", bundle: 'pro' },
        { q: "My priest/mom/culture says I should be \"Self-Sacrificing.\"", a: "\"Horses that no longer plow are sent to the glue factory. I'll live for myself.\"", bundle: 'pro' },
        { q: "I'm worried about being \"Fair\" in an argument.", a: "\"Women don't argue for truth; they argue for status. I'll maintain my status.\"", bundle: 'pro' },
      ]
    },
  ],
  praxframe3: [
    {
      name: "The Assertive Rights",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Internalizing the fact that you are your own judge and don't require her permission to exist or make decisions.",
      inputs: [
        { q: "I feel like I have to explain \"why\" I made this choice.", a: "\"I have the right to offer no reasons or excuses for my behavior.\".", bundle: 'pro' },
        { q: "I'm afraid to make a choice because I might be \"wrong.\"", a: "\"I have the right to make mistakes—and be responsible for them.\".", bundle: 'pro' },
        { q: "She is pressuring me to solve her emotional drama.", a: "\"I have the right to judge if I am responsible for finding solutions to other people's problems.\".", bundle: 'pro' },
      ]
    },
  ],
  praxframe4: [
    {
      name: "You Are Not a Plow Horse",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Refusing the identity of the \"Dutiful Plow Horse\" who sacrifices his life and frame for a \"warm stable\" that never arrives.",
      inputs: [
        { q: "I'll just do more chores and maybe she'll want me again.", a: "\"Fulfilling her checklist won't build attraction. Only frame and value do that.\"", bundle: 'pro' },
        { q: "If I'm the best husband ever, she'll never leave.", a: "\"Horses that no longer plow are sent to the glue factory. I'll live for myself.\"", bundle: 'pro' },
        { q: "I should put her happiness before my own.", a: "\"You were not put on this earth to light yourself on fire to keep others warm.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Morality of Results",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Realizing that if the \"morals\" you were taught (Altruism, Self-Sacrifice) led to a life of quiet desperation, they aren't useful morals for you.",
      inputs: [
        { q: "I feel like a \"jerk\" for setting this boundary.", a: "\"Is it good for me? Is it bad for me? My results dictate my morality.\"", bundle: 'pro' },
        { q: "I shouldn't lie or hide things from my wife.", a: "\"Lying implies I require her judgment. I don't. Some things are simply none of her business.\"", bundle: 'pro' },
        { q: "I need her to understand \"why\" I'm doing this.", a: "\"Being understood is irrelevant. My goal is my vision, not her absolution.\"", bundle: 'pro' },
      ]
    },
  ],
  praxframe5: [
    {
      name: "The Visionary Captain",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Internalizing the fact that leadership is a choice you make, not a grant you receive. You are the protagonist; she is the co-writer, not a set piece.",
      inputs: [
        { q: "I'm waiting for her to \"let\" me lead the family.", a: "\"Leadership isn't a grant; it's a choice. I lead myself first and those who want to follow, follow.\"", bundle: 'pro' },
        { q: "I feel like a \"fraud\" for acting like I have a big vision.", a: "\"Acting is a job. Being a good actor builds my real confidence. I am Jon Hamm, not Dick Whitman.\"", bundle: 'pro' },
        { q: "I'm afraid that being \"selfish\" makes me a bad husband.", a: "\"Rational egoism is the bedrock of a healthy family. I must treat the man in the mirror well if I expect anyone else to.\"", bundle: 'pro' },
        { q: "I feel the need to \"keep the peace\" by submitting.", a: "\"Submission to avoid conflict only breeds contempt. I am the Oak; the wind cannot be anything but the wind.\"", bundle: 'pro' },
        { q: "I'm worried about what others will think of my new vision.", a: "\"Anything outside my frame is amusing, intriguing, or funny. I am my own judge.\"", bundle: 'pro' },
        { q: "I'm focusing too much on her reaction to my changes.", a: "\"Success is the goal; her investment is the lagging indicator. I stay on mission regardless.\"", bundle: 'pro' },
        { q: "I feel like I'm \"losing\" when we have a conflict.", a: "\"There is no winning or losing, only the consequences of my actions. I own the consequences.\"", bundle: 'pro' },
        { q: "I'm tempted to explain my \"why\" so she'll understand me.", a: "\"Being understood is irrelevant. My goal is the destination, not her absolution.\"", bundle: 'pro' },
      ]
    },
  ],
  praxdread1: [
    {
      name: "Luxury is Covert",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Understanding that women hate \"sales\" but love \"marketing\". If you explain the rules of Dread, you kill the magic and signal desperation.",
      inputs: [
        { q: "I want to tell her that I'm lifting so she'll find me sexier", a: "\"Telling her is 'sales.' Letting her see the muscles is 'marketing.' Let the hamster find the exit on its own.\"", bundle: 'pro' },
        { q: "I'm tempted to use an ultimatum to get sex", a: "\"Negotiated desire only leads to obligated compliance. I'm becoming the prize so she _wants_ to invest.\"", bundle: 'pro' },
        { q: "I feel like a \"fraud\" for not being my old vulnerable self", a: "\"Vulnerability is for true friends, not a wife who relies on your strength. My silence is my power.\"", bundle: 'pro' },
      ]
    },
  ],
  praxdread2: [
    {
      name: "Luxury is Earned",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Realizing that you cannot market a product that doesn't exist. You must do the passive work of self-improvement to become a legitimate luxury brand. You are what you do; do attractive things and the high-status identity will follow.",
      inputs: [
        { q: "I'm afraid she'll think I'm being \"manipulative\"", a: "\"Marketing isn't manipulation; it's communicating value. My value is real.\"", bundle: 'pro' },
        { q: "I want to tell her the \"rules\" so she'll understand why I'm changing", a: "\"Spouting the rules signals weakness and kills the magic. Let my actions speak.\"", bundle: 'pro' },
        { q: "I feel like a \"jerk\" for putting my mask on first", a: "\"Rational egoism is the bedrock of a healthy family. I must be strong to lead them.\"", bundle: 'pro' },
      ]
    },
  ],
  praxdread3: [
    {
      name: "You Are the Gatekeeper",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Realizing that while she may be the gatekeeper of sex, you are the gatekeeper of the relationship. You decide if she is providing enough value to earn your commitment, attention, and resources.",
      inputs: [
        { q: "I feel like a \"failure\" because she won't fuck me", a: "\"My job is to be fuckable; her job is to fuck me. If she fails her job, I find her replacement.\"", bundle: 'pro' },
        { q: "I should be \"vulnerable\" so she'll understand my needs", a: "\"Vulnerability is for friends. My wife needs my strength, not my complaints. Silence is my power.\"", bundle: 'pro' },
        { q: "I'm afraid she'll leave if I start setting these hard standards", a: "\"The stay plan and the go plan are the same plan: become my best self. I am safe either way.\"", bundle: 'pro' },
      ]
    },
  ],
  praxdread4: [
    {
      name: "Anger is a Tool",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Breaking the \"Blue Pill\" conditioning that anger is always shameful. Anger is the social signal that a boundary has been crossed.",
      inputs: [
        { q: "I'm afraid that getting angry makes me a \"bad person.\"", a: "\"My anger is valuable. It protects my frame and marks my boundaries.\"", bundle: 'pro' },
        { q: "I think I need to \"explain\" why I'm angry so she'll understand.", a: "\"Explaining is 'sales.' Results are 'marketing.' Make her escalation uncomfortable.\"", bundle: 'pro' },
        { q: "I'm tempted to hold a grudge after a big fight.", a: "\"Grudges signal that she had the power to hurt me. I have the memory of a goldfish.\"", bundle: 'pro' },
      ]
    },
  ],
  praxdread5: [
    {
      name: "Responsibility vs Blame",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Realizing that while she may be \"to blame\" for her behavior, only you are responsible for the quality of your life and your reactions.",
      inputs: [
        { q: "I feel like a \"victim\" because she cheated.", a: "\"I am not a victim. I am the leader of my own life, and I am responsible for what I tolerate.\"", bundle: 'pro' },
        { q: "I'm waiting for her to \"fix\" the marriage.", a: "\"Relationships are women's work, but my happiness is my own. I fix myself first.\"", bundle: 'pro' },
        { q: "I'm afraid of the consequences of leading.", a: "\"The price of respect is the willingness to walk away. I am safe regardless of the outcome.\"", bundle: 'pro' },
      ]
    },
  ],
};
