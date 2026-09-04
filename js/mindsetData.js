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
        { q: "Why do people hold back compliments they genuinely feel?", a: "Usually awkwardness, fear of seeming sycophantic, or not being in the habit of saying things out loud that they think internally. The thought \"that was impressive\" goes through people's heads all the time — few say it.", bundle: '' },
        { q: "What does giving a specific compliment signal?", a: "That you were paying attention. That you see the person specifically — not just generically. This is the deeper gift beneath the compliment itself.", bundle: '' },
        { q: "What is the right internal posture when giving a compliment?", a: "Generosity without agenda. You're giving something — not opening a transaction. The moment you want something in return (approval, reciprocation, a reaction), it stops being a compliment.", bundle: '' },
      ]
    },
    {
      name: "Accepting Compliments",
      description: "The mindset behind receiving compliments — why deflecting is the default, and why receiving gracefully is more generous.",
      inputs: [
        { q: "Why do people deflect compliments?", a: "Usually a combination of genuine modesty, discomfort with positive attention, or the belief that accepting a compliment is arrogant. In reality, deflecting is often more awkward than receiving — it makes the other person regret saying it.", bundle: '' },
        { q: "What does it mean to deserve a compliment?", a: "Nothing. Whether you deserve it is irrelevant to how you receive it. A compliment is something someone chose to give — your job is to receive it, not to adjudicate whether they were right.", bundle: '' },
        { q: "Why is receiving compliments well a form of generosity?", a: "Because when you receive gracefully, you validate the giver's instinct to notice and say something. When you deflect, you make them feel they misjudged. Receiving well is a gift back.", bundle: '' },
      ]
    },
    {
      name: "Self Disclosure",
      description: "The mindset behind self disclosure — why sharing invites sharing, and the difference between genuine disclosure and oversharing.",
      inputs: [
        { q: "Why is self disclosure more powerful than asking questions?", a: "Because questions put the other person on the spot. Disclosure opens a space they can enter if they want to. It's an invitation rather than a demand.", bundle: '' },
        { q: "What does genuine self disclosure communicate beyond its content?", a: "Trust. When you share something real, you signal that you trust the other person with it. That signal — regardless of the content — creates connection.", bundle: '' },
        { q: "What is the right level of self disclosure for a new relationship?", a: "Stay mostly at facts and opinions early, move to experiences occasionally when it feels natural. Feelings and uncertainties should follow rapport, not precede it. Match and slightly exceed their level.", bundle: '' },
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
  reactingtounexpectedstatements: [
    {
      name: "You Are Allowed a Second",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
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
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
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
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
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
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
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
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
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
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
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
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
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
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
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
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
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
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
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
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
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
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
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
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
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
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
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
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
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
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
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
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
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
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
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
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
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
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
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
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
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
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
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
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
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
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
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
        { q: "I feel like she is just trying to find things to complain about.", a: "Her complaining is a clumsy expression of a deeper longing for my presence.", bundle: 'pro' },
        { q: "Her intensity makes me feel like I am failing as a husband.", a: "She is testing my solidity; her storm is just weather, and I am the Oak.", bundle: 'pro' },
        { q: "She is furious about the milk, and I want to explain that it's just milk.", a: "It's not about the milk; to her, it's about whether she is top of mind for me.", bundle: 'pro' },
        { q: "I feel personally attacked when she vents about how messy the living room is.", a: "She is not attacking my character; her storm is a signal that she feels overwhelmed by disorder. Settle my nervous system first.", bundle: 'pro' },
        { q: "I want to walk away when she raises her voice in frustration about our child's schedule.", a: "She is reflecting the lack of structural support in our home. If I stay grounded and engaged, she can relax.", bundle: 'pro' },
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
        { q: "I'll agree to go to her family's event even though I am completely exhausted.", a: "If I say yes out of fear of conflict, I will only breed resentment inside. My rest matters.", bundle: 'pro' },
        { q: "I want to ask for her permission before buying new gym gear.", a: "Seeking permission turns her into my surrogate mother. I will state my decision clearly instead.", bundle: 'pro' },
        { q: "I should hide my career ambition because it might make her feel insecure.", a: "Suppressing my drive to protect her comfort only emasculates me. A leader stands by his purpose.", bundle: 'pro' },
        { q: "I'm tempted to say \"whatever you want\" to avoid the effort of making a choice.", a: "\"Whatever you want\" is the default of a passive pleaser. My clarity is what settles her.", bundle: 'pro' },
        { q: "I feel a bad person for putting my need for a quiet hour ahead of her request.", a: "I cannot serve my family unless I attend to my own basic needs first. Self-care is leadership.", bundle: 'pro' },
      ]
    },
    {
      name: "Structure",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"She's much better at planning and logistics, so I should just let her run things.\"\n\n**What is true instead:** providing structure is my role as a leader, and abdicating it leaves her unpartnered and anxious.\n\n**Why it feels right:** she is highly competent, thinks faster, and obsesses over the details more than I do.\n\n**What it costs:** her respect, and the polarity between you — she is pushed into her Masculine while she is craving your direction.\n\nMindset: providing structure is a gift of leadership, not a burden.",
      inputs: [
        { q: "I want to say \"whatever you want\" when she asks where we should go on vacation.", a: "Deciding is a gift of structure I give her to relieve her decision fatigue. I will propose two clear options.", bundle: 'pro' },
        { q: "I'm tempted to let her handle all the parenting plans because she is more organized.", a: "If I don't engage and bring my own perspective, she will feel lonely and unpartnered in raising our children.", bundle: 'pro' },
        { q: "I feel like a domineering jerk when I set a limit on how many bags she can pack.", a: "Setting a limit because of the rental car's size is not bullying; it is providing real, loving structure.", bundle: 'pro' },
        { q: "I hesitate to set a regular time to sync our schedules because she is busy.", a: "A predictable structure reduces her uncertainty and allows her Feminine nervous system to relax.", bundle: 'pro' },
        { q: "I want to let things drift on auto-pilot because organizing the household takes too much effort.", a: "My passivity will eventually force her into her Masculine to manage things, which kills our polarity.", bundle: 'pro' },
        { q: "I'm afraid she will resist my proposal for a weekend hike.", a: "I will present my plan clearly. If she resists, I can calmly listen while staying grounded in my leadership.", bundle: 'pro' },
        { q: "I want to yield to her strong opinions immediately just to avoid any conflict.", a: "Yielding to avoid conflict only breeds her contempt. I must stand by my truth and lead.", bundle: 'pro' },
        { q: "I feel incompetent when we cook because she is so much better in the kitchen.", a: "I can show leadership by asking her to tell me what to do, and taking complete responsibility for my tasks.", bundle: 'pro' },
      ]
    },
    {
      name: "Praise",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"Praising her feels manipulative, or like I'm just trying to perform a technique.\"\n\n**What is true instead:** praise is the essential fuel that opens her Feminine heart and body to connect with me.\n\n**What is true instead:** it feels easy to withhold appreciation when I am feeling underappreciated or when she is being irritable.\n\n**What it costs:** the polarity between you, leaving her heart closed and her body shut down to me.\n\nMindset: my specific appreciation is the oxygen her Feminine heart craves.",
      inputs: [
        { q: "I feel a resistance to praising her beauty because she has been cold all day.", a: "She closes when she doesn't feel desired. My genuine praise is the invitation she needs to relax and open.", bundle: 'pro' },
        { q: "I want to give a general compliment like \"you look nice\" because it's safe and easy.", a: "General compliments feel polite but evaporate. Specific praise proves I am paying focused attention.", bundle: 'pro' },
        { q: "I feel awkward expressing my raw sexual desire for her body out loud.", a: "Owning my desire is deeply Masculine and attractive. I will tell her exactly how hot she looks.", bundle: 'pro' },
        { q: "I want to complain about our lack of intimacy instead of praising her responsiveness.", a: "Complaining breeds defensiveness. Praising her responsiveness is what actually encourages her to open.", bundle: 'pro' },
        { q: "I'm afraid that praising her effort with the kids will sound patronizing.", a: "Appreciating her deep Feminine care is a gift of heart connection that makes her feel seen.", bundle: 'pro' },
        { q: "I think she already knows she looks beautiful in that dress.", a: "She knows she tried, but she cannot see the effect she has on me. My praise is that feedback.", bundle: 'pro' },
        { q: "I feel like a fraud when I praise her while she is stuck in her work mind.", a: "My warm presence and praise are what invite her to drop her analytical armor and soften.", bundle: 'pro' },
        { q: "I want to withhold my attention until she apologizes for being irritable.", a: "Withholding attention is a petty, reactive game. I will lead with desire and melt the coldness.", bundle: 'pro' },
      ]
    },
    {
      name: "Heart",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"Opening my heart and showing vulnerability makes me look weak and unmasculine.\"\n\n**What is true instead:** dropping into my heart is the ultimate display of grounding and emotional safety.\n\n**What is true instead:** it feels safer to stay in my logical, thinking mind and preserve my \"rightness\" during conflict.\n\n**What it costs:** the connection, leaving her alone, unseen and emotionally unsafe with me.\n\nMindset: a strong man rules his emotional world by feeling deeply and staying present.",
      inputs: [
        { q: "I want to argue the facts of her complaint because I know I am technically right.", a: "Preserving my rightness at the cost of connection is a loss. I will drop into my heart and feel her pain.", bundle: 'pro' },
        { q: "I feel a strong urge to shut down or freeze when she blasts me with messy emotions.", a: "My withdrawal is what a boy does. A Masculine leader breathes, stays in connection, and contains the storm.", bundle: 'pro' },
        { q: "I'm afraid that sharing my underlying fear or shame will make her lose respect for me.", a: "A strong man knows his emotions and shares them without needing anyone else to change to make the pain stop.", bundle: 'pro' },
        { q: "I want to pretend I'm fine to look tough.", a: "Clamping up is an act of avoidance, not strength. If I choose not to feel my pain, she will have to feel it for me.", bundle: 'pro' },
        { q: "I want to explain my good intentions immediately to avoid being the bad guy.", a: "My scramble to defend comes from my own anxiety. I will tolerate the discomfort and listen first.", bundle: 'pro' },
        { q: "I feel awkward slowing down and just breathing with her when she is upset.", a: "Slowing down is the antithesis of the get-it-done mind. It is where true emotional safety is built.", bundle: 'pro' },
        { q: "I'm tempted to use intellectual arguments to solve her emotional distress.", a: "Reasoning at an upset partner does not land. I must speak from my heart instead.", bundle: 'pro' },
        { q: "I feel ashamed of how long it takes me to notice what I am feeling.", a: "Naming a feeling slowly is still naming it. The practice is the point, not the speed.", bundle: 'pro' },
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
        { q: "I'm terrified of telling her about my financial mistake.", a: "She might be disappointed, but sharing my truth is how I maintain my integrity.", bundle: 'pro' },
        { q: "I feel anxious when we have a long silence in the bedroom.", a: "The silence is a container for presence, not a sign of failure. Settle my system.", bundle: 'pro' },
        { q: "I'm scared she'll laugh at me if I try a direct initiation line.", a: "Owning my desire is my job; how she receives it is hers. I will stand strong.", bundle: 'pro' },
        { q: "I feel panic when she slams the door and goes silent.", a: "Her shutdown is just weather. I don't need to fix it immediately to be okay.", bundle: 'pro' },
        { q: "I'm afraid to slow down our intimacy because I might lose my erection.", a: "My erection is not the goal. Staying connected in my body is where true pleasure lives.", bundle: 'pro' },
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
        { q: "She complains that I didn't check in on her sick mother.", a: "She is reflecting that she doesn't feel top of mind for me. I will track her world better.", bundle: 'pro' },
        { q: "She says we never spend real quality time together.", a: "She senses my lack of focus and attention. I need to tighten up on my presence.", bundle: 'pro' },
        { q: "She yells that she has to do everything around the house.", a: "She feels lonely and unpartnered. I will bring my own ideas and structure to the table.", bundle: 'pro' },
        { q: "She criticizes my driving when we are lost.", a: "She is feeling unsafe in my lead. I will hold space for her anxiety and settle.", bundle: 'pro' },
        { q: "She is snapping at me about a minor logistical detail.", a: "She is venting her deeper anxiety. I will ignore the blame to meet her underlying pain.", bundle: 'pro' },
      ]
    },
    {
      name: "Sexual Desire",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"I shouldn't initiate sex directly because she might feel pressured, or she might reject me.\"\n\n**What is true instead:** owning your sexual desire cleanly is a gift of polarity and structure, not a burden you place on her.\n\n**Why it feels right:** make tentative, indirect bids because you protect your ego from direct rejection and avoid conflict.\n\n**What it costs:** her respect, leaving her to drift in indecisiveness and forcing her into her Masculine energy.\n\nMindset: my desire is a gift of structure and polarity.",
      inputs: [
        { q: "I should wait for her to signal she is in the mood before I initiate.", a: "A woman can't follow where I don't lead. I will own my desire boldly today.", bundle: 'pro' },
        { q: "If I state my sexual longing directly, she'll think I'm being selfish.", a: "Women want to be loved and led. Stating my desire clearly settles her nervous system.", bundle: 'pro' },
        { q: "I feel a lot of shame about wanting sex more than she does.", a: "My desire is clean and Masculine. I can want what I want without needing her permission.", bundle: 'pro' },
        { q: "I want to ask \"Can we have sex tonight?\" to feel safe.", a: "Asking for permission is a pleaser habit. I will propose a Seduction Date instead.", bundle: 'pro' },
        { q: "I feel like a predator for wanting to touch her naked body.", a: "Unabashedly owning my sexuality is what allows her to relax into her own wild nature.", bundle: 'pro' },
        { q: "I'm tempted to do chores just to earn sex later.", a: "Choreplay is a covert contract that kills polarity. I do chores for myself, not for sex.", bundle: 'pro' },
        { q: "I should accept a low-sex relationship because she is busy.", a: "I have a right to a healthy sex life. I will take responsibility for leading us back to pleasure.", bundle: 'pro' },
        { q: "I feel awkward using a direct command line to lead her.", a: "Taking sexual charge is my gift of leadership to her. I will trust my instincts.", bundle: 'pro' },
      ]
    },
    {
      name: "Vulnerability",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"If I reveal my real fear or shame, she'll see me as weak and lose all respect for me.\"\n\n**What is true instead:** dropping into your heart and sharing the truth underneath is the ultimate display of grounding and power.\n\n**Why it feels right:** it feels safer to stay in your logical, defensive mind and pretend 'I'm fine' to protect your good-guy self-image.\n\n**What it costs:** connection, leaving her feeling catastrophically unmet and abandoned in her pain.\n\nMindset: a strong man knows and shares his emotions without needing anyone else to change.",
      inputs: [
        { q: "I should hide my fear of being abandoned to look strong.", a: "Sharing my fear underneath is an act of courage that opens her heart to connect.", bundle: 'pro' },
        { q: "I need to explain my good intentions immediately so she doesn't think I'm bad.", a: "My scramble to explain comes from my own anxiety. I will tolerate the hurt and listen.", bundle: 'pro' },
        { q: "I must hide my career insecurities so she trusts my lead.", a: "Hiding the real me behind a false self precludes true honesty. I will own my shame.", bundle: 'pro' },
        { q: "If I share my pain, I am being a whiny, needy victim.", a: "If I need her to change to make my pain stop, I am weak. If I just share and stop, I am powerful.", bundle: 'pro' },
        { q: "I want to use a 'Fuck You' silence to make her feel guilty.", a: "Withdrawal is a boy's defense mechanism. A Masculine leader stays in the fire.", bundle: 'pro' },
        { q: "I feel like she is doing this to me and she is the one who has to fix it.", a: "I am not a victim. I may not be the problem, but my leadership is the solution.", bundle: 'pro' },
        { q: "I should just suppress my anger and keep things peaceful.", a: "Suppressing my emotions leaks out as toxic anxiety. I will welcome and share my anger cleanly.", bundle: 'pro' },
        { q: "I'm afraid that sharing my hurt makes me look like a child.", a: "Pretending 'I'm fine' is the path of a child. Standing strong in my truth is the path of a man.", bundle: 'pro' },
      ]
    },
    {
      name: "Slowing Down",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"I need to rush to the goal of sex before the mood evaporates or she changes her mind.\"\n\n**What is true instead:** decelerating every physical movement during intimacy builds the emotional safety her Feminine physiology requires to open.\n\n**Why it feels right:** it feels right to move fast because your male physiology turns on instantly and seeks immediate physical release.\n\n**What it costs:** her trust, leaving her feeling rushed, objectified, and physically closed to you.\n\nMindset: move her with control, not force or speed.",
      inputs: [
        { q: "I want to go straight to yoni stimulation because we are in bed.", a: "The Feminine can't be rushed. I will take my time and warm her up slowly.", bundle: 'pro' },
        { q: "I feel the urge to speed up my touch because she sighed.", a: "I will slow my hands to three times slower than natural to deepen the connection.", bundle: 'pro' },
        { q: "I'm afraid that slowing down will kill her arousal.", a: "Slowing down is what creates the container for her to relax and go wild. Breathe.", bundle: 'pro' },
        { q: "I should focus on achieving my orgasm as fast as possible.", a: "I will get out of my head and stay attuned to her body and her breath.", bundle: 'pro' },
        { q: "I want to ask \"Is this okay?\" every time I move.", a: "I will trust my instincts and lead, adjusting immediately if I feel her retract.", bundle: 'pro' },
        { q: "I feel the urge to move rapidly when her body starts to open.", a: "Her opening requires slow, steady pressure. I will move her with control.", bundle: 'pro' },
        { q: "I want to use music as a forced-Pavlovian cue for sex.", a: "Seduction dates and heart connection are what open her, not mechanical tricks.", bundle: 'pro' },
        { q: "I feel impatient with her slow physical warming process.", a: "Her vulnerability is exposed in sex. I will approach quietly as a doe to the river.", bundle: 'pro' },
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
        { q: "I'm afraid she will get angrier if I stand my ground during her storm.", a: "Passing a test rarely brings immediate reward. I hold the pose anyway.", bundle: 'pro' },
        { q: "I feel like I must convince her to agree with my plan right now.", a: "Agreement is a sign I seek; leadership is a gift I give. I lead anyway.", bundle: 'pro' },
        { q: "I worry that staying silent and grounded makes me look cold.", a: "Being Shiva means being unswayable, not unfeeling. I stay grounded in the fire.", bundle: 'pro' },
        { q: "I think our relationship is broken because we are having a conflict.", a: "Conflict is an opportunity to lead us back to connection. I own the solution.", bundle: 'pro' },
        { q: "I need her to say yes immediately to feel good about my decision.", a: "My well-being is independent of her immediate reaction. Settle into the static.", bundle: 'pro' },
      ]
    },
    {
      name: "Validation",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"I need to know she likes me and approves of my choices to feel okay.\"\n\n**What is true instead:** your well-being and worth depend on her immediate approval and softening.\n\n**Why it feels right:** her smile brings instant relief to your nervous system.\n\n**What it costs:** you your power, turning you into an approval-seeking boy who cannot lead.\n\nMindset: I am at peace with the fact that she may not approve right now.",
      inputs: [
        { q: "I am afraid to speak my truth because she might get annoyed.", a: "Her annoyance cannot destroy me. I speak from my own center.", bundle: 'pro' },
        { q: "I'm waiting for her to soften before I can relax.", a: "I can be relaxed and grounded even when she is cold. I need nothing.", bundle: 'pro' },
        { q: "I feel a high level of suspense when I talk to a beautiful woman.", a: "I am seeking her validation. I drop the need to be found worthy.", bundle: 'pro' },
        { q: "I need her to tell me my vacation plan is amazing to feel confident.", a: "My plan is a gift of structure. I trust my own lead.", bundle: 'pro' },
        { q: "I am scanning her face to see if she approved of my boundary.", a: "I hold the pose. I settle into the static of her disapproval.", bundle: 'pro' },
        { q: "I feel like a failure because she didn't laugh at my joke.", a: "I release the need for her reaction. I breathe and stay grounded.", bundle: 'pro' },
        { q: "I want to ask her permission for everything to stay safe.", a: "Seeking permission is a pleaser habit. I lead myself first.", bundle: 'pro' },
        { q: "I feel like I'm in trouble when she gives me a cold look.", a: "I am a grown man, not a little boy. I am safe.", bundle: 'pro' },
      ]
    },
    {
      name: "Anger",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"If I show my anger, I am being a toxic, abusive man.\"\n\n**What is true instead:** anger is a dangerous, savage emotion that must be suppressed to keep the peace.\n\n**Why it feels right:** society tells you masculinity is toxic, and you want to be a good guy.\n\n**What it costs:** you your boundaries, leaving her feeling unpartnered and forced into her own Masculine.\n\nMindset: I can feel the savagery of anger within me without acting like a savage.",
      inputs: [
        { q: "I should suppress my anger when she disrespects me.", a: "My anger is an ally. I will use its fire to set a clean boundary.", bundle: 'pro' },
        { q: "If I speak firmly about my limits, she will think I'm a jerk.", a: "Setting boundaries is an act of love. I am protecting our connection.", bundle: 'pro' },
        { q: "My anger makes me feel like a savage who will lose control.", a: "I can feel the intensity of anger without acting like a savage.", bundle: 'pro' },
        { q: "I want to use my anger to blame her and make her feel wrong.", a: "Blaming is a shadow strategy to avoid my shame. I own my anger instead.", bundle: 'pro' },
        { q: "I feel guilty for being angry about her careless spending.", a: "My anger is a reminder of what is important. I protect our stability.", bundle: 'pro' },
        { q: "If I don't get angry, things will stay peaceful today.", a: "Short-term peace at the cost of my boundaries breeds long-term resentment.", bundle: 'pro' },
        { q: "I should just take her jabs with a patient smile.", a: "Patience without boundaries is cowardice. I will protect our connection.", bundle: 'pro' },
        { q: "I'm afraid to raise my voice even when a limit is crossed.", a: "I can express my anger with quiet intensity and full conviction.", bundle: 'pro' },
      ]
    },
    {
      name: "Safety",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"Her emotional outbursts are a threat that I must logically solve or escape.\"\n\n**What is true instead:** her emotional storms are a threat to your safety or proof of your failure.\n\n**Why it feels right:** her words are full of blame, triggering your childhood wounds.\n\n**What it costs:** you connection, proving to her nervous system that you cannot contain her fire.\n\nMindset: this is just energy; I am physically safe and I can handle this fire.",
      inputs: [
        { q: "I feel like her bad mood is going to destroy our life.", a: "The sun is still there. I am sitting on this chair. I am fine.", bundle: 'pro' },
        { q: "I need to logically correct her facts so she stops being mad.", a: "Trying to reason during a storm is useless. I hear her feelings first.", bundle: 'pro' },
        { q: "I want to run out of the room to escape her shouting.", a: "Withdrawal is a boy's defense. I choose to stay present in the fire.", bundle: 'pro' },
        { q: "I feel like a helpless victim under her emotional tsunami.", a: "I am a grown man. Her mood cannot destroy me. I stay grounded.", bundle: 'pro' },
        { q: "I feel my chest tightening and my breath shallowing.", a: "(Perform a body scan) I am clenching. I relax. I am safe.", bundle: 'pro' },
        { q: "I think I am failing as a partner because she is unhappy.", a: "Her unhappiness is a signal, not a verdict. I stay present with her.", bundle: 'pro' },
        { q: "I must hide my mistakes so she doesn't get disappointed.", a: "Hiding is cowardice. I stand strong in my truth and own my part.", bundle: 'pro' },
        { q: "I want to use work as an excuse to escape from feeling my shame.", a: "I drop into my heart. I choose safety over rightness.", bundle: 'pro' },
      ]
    },
    {
      name: "Shadows",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"Using phone scrolling, silence, or blaming is just how I get through a fight.\"\n\n**What is true instead:** your reactive shadow strategies are helpful ways to cope with relational stress.\n\n**Why it feels right:** they temporarily shield your ego and bleed off your anxiety.\n\n**What it costs:** you her trust, leaving her lonely, unpartnered, and sexually closed.\n\nMindset: these reactive behaviors are just unconscious ways to make the anxiety stop.",
      inputs: [
        { q: "Hiding in my phone during a fight is a harmless way to decompress.", a: "This is Distraction to avoid my anxiety. I put the phone away.", bundle: 'pro' },
        { q: "Giving her the silent treatment will teach her a lesson.", a: "This is Contraction. I'm hiding. I choose to go back and stay engaged.", bundle: 'pro' },
        { q: "Correcting her facts is just me being honest and helpful.", a: "This is Defense. I stop the logic and stay present with her heart.", bundle: 'pro' },
        { q: "Agreeing to whatever she says is just me being easy-going.", a: "This is Collapse. My needs matter. I stop caving.", bundle: 'pro' },
        { q: "Blaming her back is justified because she started it.", a: "This is Blame. I am using anger to avoid my shame. I pause.", bundle: 'pro' },
        { q: "Sycophantically apologizing is the fastest way to get peace.", a: "This is Approval Seeking. I stop apologizing and stand my ground.", bundle: 'pro' },
        { q: "Speaking rapidly helps me get my point across before she interrupts.", a: "This is Distraction fueled by social anxiety. I slow my pace right down.", bundle: 'pro' },
        { q: "Hiding my career fears is necessary to protect my image.", a: "This is Contraction. I will stand in my truth and share my vulnerability.", bundle: 'pro' },
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
        { q: "I feel like a domineering jerk when I set a limit on suitcase size.", a: "\"Setting a limit because of the rental car's size is not bullying; it is providing real, loving structure.\"", bundle: 'pro' },
        { q: "I think parenting decisions should always be joint to stay completely democratic.", a: "\"Egalitarian drifting leaves her lonely and unpartnered. I must bring my own clear perspectives.\"", bundle: 'pro' },
        { q: "I feel like a controlling tyrant when I propose a structured plan for our savings.", a: "\"Providing structural safety is not tyranny; it is my responsibility as a Provider to ensure the bottom doesn't drop out.\"", bundle: 'pro' },
        { q: "I hesitate to set clear relational rules of engagement because I worry I am imposing on her autonomy.", a: "\"Relational boundaries are not an imposition; they protect the container so her Feminine heart can feel safe.\"", bundle: 'pro' },
        { q: "I feel like I am steamrolling her when I make a firm executive decision about our weekend timeline.", a: "\"My clarity is an invitation to ride, not a command. She wants to relax into my direction.\"", bundle: 'pro' },
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
        { q: "I feel a resistance to tracking her family's medical issues because it's not my problem.", a: "\"She needs to feel that she and her loved ones are in my field of attention to feel safe.\"", bundle: 'pro' },
        { q: "I want to ignore her quiet, flat mood because she isn't actively complaining.", a: "\"Waiting for her to blow up is lazy. Checking in on her heart shows she is my priority.\"", bundle: 'pro' },
        { q: "I think verbal expressions of \"I love you\" are enough to reassure her.", a: "\"The Feminine needs to see love demonstrated in action. Verbal loops don't build trust.\"", bundle: 'pro' },
        { q: "I feel underappreciated when I do chores and she still complains about other things.", a: "\"I don't do things to get credit. I provide care because that is who I am and how I choose to live.\"", bundle: 'pro' },
        { q: "I think she should handle her own emotional stress when she's upset with her friends.", a: "\"She wants me to track her priorities. My focused attention is what allows her to relax.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Nice Guy",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"Hiding my needs, caving to her demands, and avoiding conflict is the path to a peaceful relationship.\"\n\n**What is true instead:** hiding your needs is manipulative, turns you into an approval-seeking boy, and kills her respect.\n\n**Why it feels right:** society tells you masculinity is toxic, and you want to be a \"good boy\" who keeps the peace.\n\n**What it costs:** you her trust; she cannot relax with a man who has no backbone or boundaries.\n\n• Nice Guy Pleasing — reclaim your power by owning what you want\n\nMindset: what I want matters, and a strong No is what makes my Yes trustworthy.",
      inputs: [
        { q: "I should say \"whatever you want\" when she asks where we should eat.", a: "\"Lukewarm deferral is lame. I will own my desires and propose a clear choice.\"", bundle: 'pro' },
        { q: "I want to hide my career ambitions because she might feel left behind.", a: "\"Suppressing my drive to protect her comfort only emasculates me. A leader stands by his purpose.\"", bundle: 'pro' },
        { q: "I want to ask her permission for everything to stay safe and out of trouble.", a: "\"Seeking permission is a pleaser habit that turns her into my mother. I lead myself first.\"", bundle: 'pro' },
        { q: "I'll agree to pick her up even though it hurts my work because I don't want to disappoint her.", a: "\"If I say yes out of fear of conflict, I will only breed resentment. My time matters.\"", bundle: 'pro' },
        { q: "I feel like a bad person for putting my needs first sometimes.", a: "\"I cannot serve my family unless I attend to my own basic needs first. Self-care is leadership.\"", bundle: 'pro' },
        { q: "I'll say yes to her sister's dinner even though I dread it, and hope it earns me some goodwill.", a: "\"Goodwill bought with a resented yes is a loan I will want repaid. I'll say what I actually want.\"", bundle: 'pro' },
        { q: "I want to apologize profusely for things I didn't do just to calm her down.", a: "\"Sycophantic apologies are weak. I stand my ground in truth and lead.\"", bundle: 'pro' },
        { q: "If I tell her I want an evening to myself, she'll take it as rejection.", a: "\"A man with no time of his own has nothing to bring back. I'll ask plainly and let her have her reaction.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Conflict",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"Her emotional outbursts are a threat to my safety, or proof that I am failing.\"\n\n**What is true instead:** her emotional storm is not an attack; it is just transient weather that wants your grounded containment. It feels right to defend, explain, or withdraw because her blaming triggers your childhood wounds.\n\n**What it costs:** you connection, proving to her nervous system that you are too reactive to handle her fire.\n\n• Relational Conflict — stay grounded as Shiva to contain her storm\n\nMindset: this is just energy; I am physically safe and I can handle this fire.",
      inputs: [
        { q: "I need to logically correct her facts immediately so she stops being mad.", a: "\"Feelings first, facts later. Addressing emotion with logic never works. Hear her pain.\"", bundle: 'pro' },
        { q: "I want to run out of the room or freeze when she blasts me with messy emotions.", a: "\"Withdrawal is a boy's defense. A Masculine leader breathes, stays, and contains the storm.\"", bundle: 'pro' },
        { q: "When she is this upset I start counting up how unfair the whole thing is.", a: "\"Keeping score is the boy's move. I am the one who can steady this, so I will.\"", bundle: 'pro' },
        { q: "I think our relationship is completely broken because she is having a conflict.", a: "\"Conflict is an opportunity to display solidity. Settle my nervous system and hold space.\"", bundle: 'pro' },
        { q: "I want to use the silent treatment to punish her for her angry outburst.", a: "\"The silent treatment is a childish defense. I stay engaged and connected.\"", bundle: 'pro' },
        { q: "I feel my chest tightening and my breath shallowing as her anger rises.", a: "(Perform a body scan) I am clenching. I relax. I am safe in this room.", bundle: 'pro' },
        { q: "If I don't agree with her version of events, she'll only get louder.", a: "\"Agreeing to end the noise is a lie she will feel. I can hear the hurt without signing the story.\"", bundle: 'pro' },
        { q: "I need her to know that I wasn't trying to hurt her.", a: "\"My intentions are mine to know. Her experience is what needs my attention right now.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Equality",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"We are equal partners, so she doesn't need my leadership or direction.\"\n\n**What is true instead:** modern relationships are not improved by having no leader at all.\n\n**Why it feels right:** she is highly competent, independent, and you want to respect her power.\n\n**What it costs:** polarity, forcing her to carry the emotional and logistical burden alone until she gets resentful.\n\nMindset: offering my lead is a gift of service, not an act of dominance.",
      inputs: [
        { q: "Since she's a capable woman, I should let her decide where we go on vacation.", a: "\"Leaving her to plan alone makes her feel abandoned. Proactive proposals are my gift of leadership.\"", bundle: 'pro' },
        { q: "She is a grown-up, so she should call the plumber or handle difficult systems herself.", a: "\"She is capable, but dealing with difficult logistics alone makes her feel unpartnered. I will handle the burden.\"", bundle: 'pro' },
        { q: "I think she should manage her own family drama and work stress without my interference.", a: "\"Proactive tracking of her world shows she is top of mind. My focused attention is love.\"", bundle: 'pro' },
        { q: "It feels bossy and controlling to set rules about no phones or no fighting during our dates.", a: "\"Relational boundaries are not control; they protect the connection so she can drop her armor.\"", bundle: 'pro' },
        { q: "I believe our finances should be handled jointly down to the penny with equal debate.", a: "\"Democratic drifting causes anxiety. Taking ownership of long-term stability is my responsibility as Provider.\"", bundle: 'pro' },
        { q: "If she wants to go out, she can initiate it; I don't want to force my choice.", a: "\"She craves my direction, not my passivity. I will proactively propose a clear date plan.\"", bundle: 'pro' },
        { q: "It's her personal work project, so I should stay out of it and let her handle it.", a: "\"Stepping in to help with her hard task is action-oriented love. I will take complete ownership.\"", bundle: 'pro' },
        { q: "She didn't ask me for help with her business paperwork, so she must have it handled.", a: "\"Waiting to be told what to do is abdicating my leadership. I will proactively offer my support.\"", bundle: 'pro' },
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
        { q: "My mind is spinning in stories about how unfair her criticism is.", a: "\"Her anger is just energy in the room. I will feel the breath moving in my chest and ignore the story.\"", bundle: 'pro' },
        { q: "I am anticipating that our date night will end in a fight.", a: "\"I am projecting a future story. I will feel the solid seat of this chair and return to the present.\"", bundle: 'pro' },
        { q: "I am replaying her cold tone from this morning over and over in my head.", a: "\"The cold look is in the past. I am here now. I will focus on the feeling of the steering wheel in my hands.\"", bundle: 'pro' },
        { q: "I feel a massive wave of anxiety when she raises her voice.", a: "\"Anxiety is just an unpleasant physical sensation. I will let it exist in my body without needing to fix it.\"", bundle: 'pro' },
        { q: "I'm trying to logically analyze why she is acting this way.", a: "\"Logical analysis keeps me in my head. I will drop my attention into my belly and breathe.\"", bundle: 'pro' },
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
        { q: "I feel like my body is too weak to withstand her emotional storms.", a: "\"Somatic capacity is built by staying in the fire. Every storm I contain makes me more solid.\"", bundle: 'pro' },
        { q: "I feel silly visualizing her anger during my daily meditation.", a: "\"Provocation Visualization is how I train the muscle. Suffer a little in practice to be strong in the kitchen.\"", bundle: 'pro' },
        { q: "I want to skip my daily embodiment practice because I am too tired.", a: "\"Consistency is what rewires the nervous system. Five minutes of Ujjayi now is a deposit in my solidity.\"", bundle: 'pro' },
        { q: "I'm frustrated that my heart still races when she gets upset.", a: "\"My heart racing is just an automatic reaction. I will train my system to breathe through the arousal.\"", bundle: 'pro' },
        { q: "I feel like avoiding physical holds or discomfort because they are unpleasant.", a: "\"Discomfort is the gym for my nervous system. I will hold the pose and expand my capacity.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Triggers",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"I shouldn't intentionally visualize stressful things because it just makes me feel worse.\"\n\n**What is true instead:** using visualization to stoke anxiety feels like self-punishment or a waste of energy.\n\n**Why it feels right:** seek only peaceful, calm meditations because you want to escape the stress of daily life.\n\n**What it costs:** you solidity, leaving your nervous system completely unprepared when her active storm hits.\n\nMindset: stoking the trigger in practice is the gym that makes me unshakeable in the kitchen.",
      inputs: [
        { q: "I feel resistance to visualizing her angry face during meditation.", a: "\"Avoiding the trigger in my mind ensures I will collapse when it happens in real life. Stoke the fire.\"", bundle: 'pro' },
        { q: "I worry that imagining bad scenarios will manifest them in my life.", a: "\"Visualization is training my response, not inviting the disaster. I am building somatic capacity.\"", bundle: 'pro' },
        { q: "I want to keep my meditation completely peaceful and relaxed.", a: "\"Peace is easy in a vacuum. I must learn to ground myself while feeling the intensity.\"", bundle: 'pro' },
        { q: "I feel a wave of anxiety when I visualize a confrontation.", a: "\"This anxiety is exactly what I am here to acclimate to. Settle my system and stay seated.\"", bundle: 'pro' },
        { q: "I think visualizing her leaving is too painful to sit with.", a: "\"If I can't survive the thought of her leaving in meditation, I cannot lead with boundaries in real life.\"", bundle: 'pro' },
        { q: "I want to stop the visualization the moment my heart starts racing.", a: "\"My heart racing is the cue to practice. I will breathe deeply and connect my intention to my action.\"", bundle: 'pro' },
        { q: "I feel like a poser for practicing my boundaries in an imaginary scenario.", a: "\"Mental rehearsal is how top performers master intensity. I am honing my Masculine core.\"", bundle: 'pro' },
        { q: "I think this visualization doesn't map over to real life.", a: "\"The nervous system doesn't know the difference between real and imagined threat. The capacity I build here maps over.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Deliberateness",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"Choosing my movements and words beforehand feels fake, robotic, and unnatural.\"\n\n**What is true instead:** slowing down and deliberately intending each action feels manipulative or overly controlled.\n\n**Why it feels right:** operate on spontaneous autopilot because we are taught that authenticity is always impulsive.\n\n**What it costs:** you your power, leaving you to move frantic and \"bird-like\" under the influence of social anxiety.\n\nMindset: deliberateness is the ultimate expression of conscious, Masculine power.",
      inputs: [
        { q: "I feel fake when I intentionally slow my physical movements down to three times slower.", a: "\"Slowing down is not fake; it breaks the monopoly of my frantic autopilot. Move with control.\"", bundle: 'pro' },
        { q: "I hesitate to pause and form my words in my mind before speaking.", a: "\"Rushing to speak is a reaction to anxiety. Choosing my words beforehand is a gift of clarity.\"", bundle: 'pro' },
        { q: "I feel robotic when I practice slow, deliberate movements in bed.", a: "\"Frantic speed is what shuts her down. Deliberate, slow pressure builds safety and energetic polarity.\"", bundle: 'pro' },
        { q: "I want to let my hands move automatically because it feels more natural.", a: "\"Automatic movement under stress is just anxious fidgeting. I will choose every touch consciously.\"", bundle: 'pro' },
        { q: "I think pausing for five seconds before responding to her criticism makes me look weak.", a: "\"A rapid response is what a boy does. A Masculine leader takes his seat in the pause.\"", bundle: 'pro' },
        { q: "I feel awkward holding a steady posture and eye contact when she is upset.", a: "\"Slouching is an unconscious way of trying to become invisible. I choose to stand upright and occupy space.\"", bundle: 'pro' },
        { q: "I'm tempted to speak rapidly to get my point across before she interrupts.", a: "\"Rapid speech is fueled by social anxiety. I choose to speak with ease and control at a measured pace.\"", bundle: 'pro' },
        { q: "I feel like planning my physical movements during intimacy is manipulative.", a: "\"My deliberate presence is an invitation to ride, not control. I lead so she can relax.\"", bundle: 'pro' },
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
  listeningthroughquestions: [
    {
      name: "The Question Is In Their Answer",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The pack-wide stance: you never have to invent a question, because their last sentence contains three or four. Looking for a good question is what makes people stop listening — the question you need is already on the table, and finding it only requires attention. Example of the shift — instead of thinking of what to ask next, you listen for the word to pick up.\n\nThe three thoughts that cause the trouble:\n1. \"I need an interesting question\" — you need a question about what they just said.\n2. \"I should think of the next one while they answer\" — that is how you miss it.\n3. \"I've run out of things to ask\" — you have run out of things you thought of in advance.\n\nMindset: listen for the noun, the odd word, or the half-sentence they hurried past. The question is already there.",
      inputs: [
        { q: "You are planning your next question while they are talking.", a: "\"That's how I miss the good one. It's in the sentence they're saying now.\"", bundle: 'pro' },
        { q: "You feel you have run out of questions.", a: "\"I've run out of prepared ones. Their last answer has three in it.\"", bundle: 'pro' },
        { q: "You want to ask something impressive.", a: "\"'Who was there?' has started more real conversations than anything clever.\"", bundle: 'pro' },
        { q: "The conversation feels like hard work.", a: "\"Because I'm generating instead of following. Pick a word from what they just said.\"", bundle: 'pro' },
        { q: "You are worried about the silence while you think.", a: "\"A beat before a question that follows beats a fast one that doesn't.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Following Beats Interviewing",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance that separates this from a questionnaire: a series of unconnected good questions is an interview, and people can feel it within two or three. The measure is not how good each question is but whether each one came out of the previous answer. Example of the shift — instead of moving to your next question, you go one step further into the one they just answered.\n\nWhere it goes wrong:\n1. You have a mental list and you are working through it.\n2. You ask a second question without responding to the first answer.\n3. Their answers get shorter and you ask harder questions in response.\n\nMindset: depth, not coverage. Four questions about one thing is a conversation; four questions about four things is a form.",
      inputs: [
        { q: "You are working through a mental list of questions.", a: "\"Bin the list. What did they just say that I want to know more about?\"", bundle: 'pro' },
        { q: "Their answers are getting shorter.", a: "\"That's the interview feeling. Follow the last answer instead of moving on.\"", bundle: 'pro' },
        { q: "You have learned four facts and followed none of them.", a: "\"Four facts, no conversation. Pick one and go into it.\"", bundle: 'pro' },
        { q: "You want to cover more ground.", a: "\"Ground isn't the point. One thing, properly, is what they'll remember.\"", bundle: 'pro' },
        { q: "You asked two questions in a row.", a: "\"Answer the first one myself, or react to it. Two in a row is a form.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Ordinary Questions Work",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance about which questions to use: \"what happened next\" has drawn out more real accounts than any clever alternative, and its ordinariness is exactly why it is easy to answer. The interesting part of a conversation is their answer, not your question. Example of the shift — instead of searching for an original angle, you ask the obvious thing and listen properly.\n\nWhere the hesitation shows up:\n1. You discard the obvious question because it seems too plain.\n2. You look for an original angle while the moment passes.\n3. You judge your question by how it sounds rather than by how easy it is to answer.\n\nMindset: judge a question by how easy it is to answer. Plain to ask and easy to answer is the best trade in conversation.",
      inputs: [
        { q: "You discard a question for being too obvious.", a: "\"Obvious to ask, easy to answer. That trade wins every time.\"", bundle: 'pro' },
        { q: "You are looking for an original angle.", a: "\"The ordinary question asked now beats the clever one asked never.\"", bundle: 'pro' },
        { q: "You worry the question is too simple.", a: "\"Simple is the point. The conversation happens in their answer.\"", bundle: 'pro' },
        { q: "You want to seem interesting rather than interested.", a: "\"Interested is what they'll remember. Interesting is what I'll remember.\"", bundle: 'pro' },
        { q: "You are stuck between two questions.", a: "\"Ask the easier one. It gets a longer answer anyway.\"", bundle: 'pro' },
      ]
    },
    {
      name: "One More Question",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance about where to stop: most conversations end one question before the interesting part, because the account reached a natural pause and everybody took it. The extra question costs nothing and is very often where the actual story was. Example of the shift — instead of saying \"oh, nice\" and moving on, you ask the next obvious thing.\n\nWhere it shows up:\n1. Something surprising goes past and you let it.\n2. You accept a fact where there was clearly a story.\n3. You change the subject at the first pause.\n\nMindset: one more question, then move. The pause is not the end of the subject — it is the point where most people stop.",
      inputs: [
        { q: "Something surprising went past and you let it.", a: "\"Go back to it. Even a minute later, 'you said something earlier about…' works.\"", bundle: 'pro' },
        { q: "You accepted a fact where there was a story.", a: "\"There's a story behind that. 'And then what?' is all it takes.\"", bundle: 'pro' },
        { q: "You changed the subject at the first pause.", a: "\"A pause is where people stop, not where the subject ends.\"", bundle: 'pro' },
        { q: "You feel you have asked enough about this.", a: "\"One more, then move. That's usually the one they wanted to be asked.\"", bundle: 'pro' },
        { q: "The account has reached a natural stopping point.", a: "\"Ask what's changed since. That closes it properly instead of dropping it.\"", bundle: 'pro' },
      ]
    },
  ],
  showunderstanding2: [
    {
      name: "Understanding Is Checkable",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The pack-wide stance: understanding is not a private feeling you have while listening, it is a claim that can be tested — and the test costs one sentence. Most people never make it, and spend conversations assuming an accuracy nobody has verified. Example of the shift — instead of nodding because you followed it, you say your version and ask.\n\nThe three thoughts that cause the trouble:\n1. \"I understood, so we're fine\" — they cannot see that you did.\n2. \"Saying it back is patronising\" — it is only patronising if you do not invite the correction.\n3. \"If I check I'll look like I wasn't listening\" — checking is what listening looks like from outside.\n\nMindset: say your version and ask. Being wrong is the useful outcome, and it only arrives if you offer something to correct.",
      inputs: [
        { q: "You understood and see no reason to say so.", a: "\"They can't see inside my head. The check is the only evidence there is.\"", bundle: 'pro' },
        { q: "Saying it back feels patronising.", a: "\"It's patronising without the question. With it, it's an offer.\"", bundle: 'pro' },
        { q: "You worry a check makes you look inattentive.", a: "\"From outside, checking is exactly what attention looks like.\"", bundle: 'pro' },
        { q: "You are fairly sure you have it right.", a: "\"Fairly sure is where the misunderstandings live. Four seconds settles it.\"", bundle: 'pro' },
        { q: "You have been nodding for five minutes.", a: "\"Nodding proves nothing to them. Say the version.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Follow the Whole Conversation",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance that separates this pack from the first one: most listening is local — people track the last sentence and forget the rest. Carrying one detail across ten minutes is uncommon enough that it is remembered long after the conversation. Example of the shift — instead of responding only to what was just said, you bring back the thing they mentioned at the start.\n\nWhere it shows up:\n1. You remember the last point and nothing before it.\n2. Two things they said separately are one thing, and neither of you has noticed.\n3. They repeat something because they do not think it landed.\n\nMindset: carry one detail forward. Not everything — one thing, brought back at the right moment, does the whole job.",
      inputs: [
        { q: "You can only remember the last thing they said.", a: "\"Pick one detail from earlier and hold it. One is enough.\"", bundle: 'pro' },
        { q: "They have mentioned the same person twice.", a: "\"Twice is a signal. Ask about them.\"", bundle: 'pro' },
        { q: "Two of their complaints sound like one problem.", a: "\"Offer the connection as a question. It might be the most useful thing I say.\"", bundle: 'pro' },
        { q: "They repeated something they said ten minutes ago.", a: "\"That's them checking whether it landed. Show them it did.\"", bundle: 'pro' },
        { q: "You are focused entirely on what to say next.", a: "\"Then I'm tracking a sentence, not a person.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Feeling, Not the Anecdote",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance about sharing: the useful part of \"I've felt that too\" is the recognition, and the recognition is complete in one sentence. Everything after that sentence is your story, and your story is a different conversation. Example of the shift — instead of telling them about your version, you tell them you have had the feeling and ask about theirs.\n\nWhere it goes wrong:\n1. The detail of your case is genuinely relevant, so you add a second sentence, and then a third.\n2. Matching every point they make with one of your own.\n3. Sharing before you have shown you understood theirs.\n\nMindset: one sentence, then back to them. If your version is longer than theirs, the conversation has changed hands.",
      inputs: [
        { q: "Your own case has details that seem relevant.", a: "\"Relevant to me. One sentence is the whole gift — the rest is my turn.\"", bundle: 'pro' },
        { q: "You have matched three of their points with your own.", a: "\"That's not meeting them, that's taking turns. Ask about theirs.\"", bundle: 'pro' },
        { q: "You want to share before you have understood theirs.", a: "\"Understand first. A disclosure before that is a guess about what they need.\"", bundle: 'pro' },
        { q: "You are about to say \"that's nothing, one time I…\"", a: "\"That sentence shrinks theirs. Say I know the feeling instead.\"", bundle: 'pro' },
        { q: "You shared and the conversation stalled.", a: "\"It stalled because I didn't hand it back. One question fixes it.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Meet the Value, Not Just the Story",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance behind the deepest move here: people explaining a grievance are usually explaining a value — fairness, being consulted, honesty, not letting someone down — and almost nobody says the value out loud. Naming it says you understood the part underneath. Example of the shift — instead of agreeing that the situation was annoying, you say what it was about it that would matter to you too.\n\nWhere it shows up:\n1. You sympathise with the events and miss what they were really telling you.\n2. You agree with a value you do not hold because it is the warm thing to do.\n3. You think agreeing with the value commits you to agreeing with the conclusion.\n\nMindset: name what mattered to them, honestly. You can agree with the value and still doubt the conclusion, and saying both is worth more than agreeing with everything.",
      inputs: [
        { q: "You sympathised with the events and it landed thinly.", a: "\"What were they actually telling me? Usually it's a value, not an incident.\"", bundle: 'pro' },
        { q: "You are about to agree with something you do not believe.", a: "\"There's a true version of agreement here. Find that one instead.\"", bundle: 'pro' },
        { q: "Agreeing feels like committing to their plan.", a: "\"The value and the conclusion are separate. I can hold one and question the other.\"", bundle: 'pro' },
        { q: "They have not said what mattered to them.", a: "\"Name it for them, as a question. 'Is this about being trusted?'\"", bundle: 'pro' },
        { q: "You want to be supportive without being dishonest.", a: "\"'I'd have minded just as much' is true and it's enough.\"", bundle: 'pro' },
      ]
    },
  ],
  setupquestion: [
    {
      name: "The Asking-First Mindset",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The pack-wide stance: asking first is the cheapest way into a conversation, because it puts no pressure on you to be interesting. You only need to be curious, and curiosity is available even on a bad day. Example of the shift — instead of hunting for something worth saying, you ask about the thing you wanted to talk about anyway.\n\nThe three thoughts that cause the trouble:\n1. \"I need something worth saying\" — you need a question, and you already have one.\n2. \"Asking is intrusive\" — an ordinary question about the room is not an interrogation.\n3. \"They'll think I'm prying\" — people are far more often glad to be asked than they are offended.\n\nMindset: you do not have to be interesting to open a conversation. You have to be interested, and then say your own bit afterwards.",
      inputs: [
        { q: "You feel you need something clever before you can speak.", a: "\"I don't need a line. I need a question, and I've already got one.\"", bundle: 'pro' },
        { q: "You worry a question will feel like prying.", a: "\"'What brought you here' is not prying. It's the easiest thing in the room to answer.\"", bundle: 'pro' },
        { q: "You freeze because nothing you'd say seems worth saying.", a: "\"I don't have to say anything yet. I just have to ask.\"", bundle: 'pro' },
        { q: "You are having a flat day and feel you have nothing to offer.", a: "\"Curiosity works on a flat day. Being interesting does not, and is not needed.\"", bundle: 'pro' },
        { q: "You are waiting for the right moment to say something good.", a: "\"There isn't one. There's a question about the room, and it works now.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Answer-It-Too Mindset",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The stance that separates this from an interview: the question was never only for them. You asked because you wanted to talk about it, so your own answer is part of the move rather than an optional extra. Example of the shift — instead of moving to the next question, you say your own answer to the one you just asked.\n\nWhere it goes wrong:\n1. You ask a second question before you have answered the first.\n2. You answer with \"yeah, same\" and hand it straight back.\n3. You are so relieved the attention is on them that you keep it there.\n\nMindset: a question you never answer yourself is an interview. Give your version, at roughly the size of theirs.",
      inputs: [
        { q: "You realise you have asked four questions and answered none.", a: "\"Time to give something. My answer to the last one is worth saying out loud.\"", bundle: 'pro' },
        { q: "You want to keep the attention safely on them.", a: "\"Keeping it on them feels safe and leaves us strangers. One honest sentence changes that.\"", bundle: 'pro' },
        { q: "You are about to reply with 'yeah, same'.", a: "\"'Same' is not an answer. What is actually true for me here?\"", bundle: 'pro' },
        { q: "Their answer was long and yours would be short.", a: "\"Roughly their size. Much shorter reads as a brush-off, much longer takes the floor.\"", bundle: 'pro' },
        { q: "You asked because you wanted to talk about it, then did not.", a: "\"That was the whole reason I asked. Say it.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Ordinary Question Mindset",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The stance about which questions are good enough: the ordinary ones work. \"What brings you here\" has opened more conversations than any clever alternative, and its ordinariness is exactly why it is easy to answer. Example of the shift — instead of discarding the obvious question as too boring, you ask it and listen properly.\n\nWhere the hesitation shows up:\n1. You reject the obvious question because everyone asks it.\n2. You look for an original angle and the moment passes.\n3. You judge your question by how it sounds rather than by how easy it is to answer.\n\nMindset: judge a question by how easy it is to answer, not by how it sounds. The interesting part is their answer, and what you do with it.",
      inputs: [
        { q: "You dismiss the obvious question as too boring.", a: "\"Boring to ask, easy to answer. That trade is worth making every time.\"", bundle: 'pro' },
        { q: "You are searching for an original angle and the moment is passing.", a: "\"The ordinary question asked now beats the clever one asked never.\"", bundle: 'pro' },
        { q: "You worry the question is too simple.", a: "\"Simple is the point. The conversation happens in their answer, not in my question.\"", bundle: 'pro' },
        { q: "You want the question to show you are perceptive.", a: "\"A question that shows off is a question about me. Ask the plain one.\"", bundle: 'pro' },
        { q: "You think they have been asked this a hundred times.", a: "\"They have, and they can answer it without thinking. That is exactly why it works.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Whole Room Is Askable",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The stance about running out: there are five types and you always have all of them, so being stuck for a question is nearly always a failure to look rather than a shortage of material. Something is in front of you, you are both here for a reason, the room has a mood, they are doing something with their days, and they came from somewhere. Example of the shift — instead of concluding there is nothing to ask, you run the five and take whichever is nearest.\n\nWhere it goes wrong:\n1. You decide the situation is too boring to ask anything about.\n2. You use the same type every time and it stops fitting.\n3. You go quiet after one exchange rather than asking the obvious second thing.\n\nMindset: five doors, and at least one is always open. If nothing occurs to you, run the list.",
      inputs: [
        { q: "You have decided there is nothing here to ask about.", a: "\"Five types. One of them fits this room — I just haven't looked yet.\"", bundle: 'pro' },
        { q: "You always reach for the same type and it is not landing.", a: "\"Purpose is my default. The room is asking for Status.\"", bundle: 'pro' },
        { q: "The conversation stopped after one good exchange.", a: "\"That was one door. There are four more, and one is inside what they just said.\"", bundle: 'pro' },
        { q: "The setting seems too dull to open anything.", a: "\"Dull settings are the easiest — everyone in a dull room has noticed it.\"", bundle: 'pro' },
        { q: "You feel you have used up your questions with this person.", a: "\"I've used up the ones I planned. The ones in their answers are unlimited.\"", bundle: 'pro' },
      ]
    },
  ],
  givingcounterexamples: [
    {
      name: "Not Wrong, Just Not Always",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The pack-wide stance: the target of a counter-example is the word \"always\", not the sentence. You are making a claim the right size rather than knocking it over, and that is a much smaller thing to ask of somebody. Example of the shift — instead of \"that's not true\", you are aiming at \"that's true most of the time\".\n\nThe three thoughts that cause the trouble:\n1. \"If I have an exception, they're wrong\" — they are usually right, with an edge.\n2. \"One of us has to be correct\" — the useful outcome is a narrower claim you both hold.\n3. \"I need a strong example\" — you need a true one, and small is fine.\n\nMindset: you are taking the word always out. When it is gone, you are finished — do not keep going.",
      inputs: [
        { q: "You feel you have to prove the whole claim wrong.", a: "\"I don't. I just want the word 'always' out of it, and then I'm done.\"", bundle: 'pro' },
        { q: "You are hunting for a knockout example.", a: "\"A small true one takes 'always' out just as well as a big one.\"", bundle: 'pro' },
        { q: "They have conceded 'usually' and you want to keep going.", a: "\"That was the whole goal. Anything more is me arguing for fun.\"", bundle: 'pro' },
        { q: "You realise they were mostly right.", a: "\"Mostly right is the normal outcome. My job was the edge, not the middle.\"", bundle: 'pro' },
        { q: "You want them to admit the claim was wrong.", a: "\"It wasn't wrong. It was too wide, and now it isn't. That's the win.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Widen, Do Not Win",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance about what a counter-example is for: it makes the discussion bigger, not the other person smaller. Used to score a point it produces defensiveness and nothing else; used to widen, it usually produces agreement within a sentence or two. Example of the shift — instead of hunting for the case that will end the argument, you offer the case that adds a room to it.\n\nWhere it goes wrong:\n1. You save your best example for the moment it will land hardest.\n2. You feel a small pleasure when they cannot answer.\n3. You keep going after they have already moved.\n\nMindset: the counter-example is a door, not a hit. If nobody has learned anything, it was an argument in disguise.",
      inputs: [
        { q: "You are enjoying having the better example.", a: "\"That feeling is the sign I've stopped discussing and started competing.\"", bundle: 'pro' },
        { q: "You are saving a strong case for maximum effect.", a: "\"If I'm timing it for impact, it's not an example any more. It's a move.\"", bundle: 'pro' },
        { q: "They have already softened their claim and you have more to say.", a: "\"They moved. My job here is finished.\"", bundle: 'pro' },
        { q: "You are choosing the example that will be hardest to answer.", a: "\"Hardest to answer is not the same as most useful. Which one actually shows the edge?\"", bundle: 'pro' },
        { q: "Nobody has learned anything but you are ahead.", a: "\"Then it was an argument in disguise. Widen it or drop it.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Concede First",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance about order: the sentence before the exception decides how the exception is heard. Six words of agreement turn a contradiction into a contribution, and they cost nothing because the general case usually is right. Example of the shift — instead of opening with \"actually\", you open with \"usually, yes\".\n\nWhere the hesitation shows up:\n1. You feel that conceding weakens your point — it is what makes it hearable.\n2. You want to get the exception out before you lose your nerve.\n3. You think agreement will be read as backing down.\n\nMindset: \"usually, yes — though…\" is the whole technique. Everything else in this pack is what goes after the dash.",
      inputs: [
        { q: "You are about to open with 'actually'.", a: "\"Swap it for 'usually, yes'. Same sentence after it, completely different conversation.\"", bundle: 'pro' },
        { q: "You worry that agreeing first weakens the point.", a: "\"It doesn't weaken it. It's what gets it listened to.\"", bundle: 'pro' },
        { q: "You want to say the exception before you lose your nerve.", a: "\"Six words of agreement first. The exception will still be there.\"", bundle: 'pro' },
        { q: "You feel the concession is dishonest because you disagree.", a: "\"I don't disagree with most of it. Saying so is accurate, not diplomatic.\"", bundle: 'pro' },
        { q: "You have opened with the exception and it went badly.", a: "\"Same content, wrong order. Concede, then except — it's the whole technique.\"", bundle: 'pro' },
      ]
    },
    {
      name: "I Don't Have One",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance about honesty: not having an example is an ordinary situation with an ordinary sentence attached, and inventing one is the only failure in this pack that cannot be walked back. Example of the shift — instead of reaching for a figure that feels right, you say you have not got one and ask instead.\n\nWhere it goes wrong:\n1. A number that feels about right becomes a number you stated.\n2. \"I read somewhere\" stands in for a source you cannot name.\n3. A story you half remember gets told as something you saw.\n\nMindset: \"I don't have a case to point at\" costs you a sentence. An invented one costs you everything else you said.",
      inputs: [
        { q: "You are about to quote a statistic you cannot source.", a: "\"'I think it's around a third, but don't quote me' is allowed. Inventing it is not.\"", bundle: 'pro' },
        { q: "You half remember a story that would prove your point.", a: "\"Half a memory is not evidence. I'll say I'm unsure or I'll say nothing.\"", bundle: 'pro' },
        { q: "You have no example and feel you need one.", a: "\"Then I ask. 'Can you think of anyone it hasn't been true for?' does the same job.\"", bundle: 'pro' },
        { q: "The invented version would be so much better than the real one.", a: "\"Better and unusable. One check and everything else I said goes with it.\"", bundle: 'pro' },
        { q: "You want to round a figure into something more convincing.", a: "\"Hedge it out loud instead. 'About a third, don't quote me' is honest and still useful.\"", bundle: 'pro' },
      ]
    },
  ],
  discussing: [
    {
      name: "Not Trying to Win",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The pack-wide stance: a discussion is not a contest with a result, and treating it as one is what produces every failure in the pack. The aim is that both people understand the question better than they did — which is compatible with disagreeing at the end. Example of the shift — instead of hunting for the argument they cannot answer, you look for the part you have not understood.\n\nThe three thoughts that cause the trouble:\n1. \"One of us has to be right\" — you can both be, about different parts.\n2. \"If I concede I lose\" — conceding accurately is what makes the rest of you believable.\n3. \"It ended without agreement, so it failed\" — most good discussions do.\n\nMindset: the outcome to aim for is two people who understand it better. Agreement is optional and often unavailable.",
      inputs: [
        { q: "You are looking for the argument they cannot answer.", a: "\"That's a competition move. What's the bit I haven't understood yet?\"", bundle: 'pro' },
        { q: "The discussion ended without agreement and you feel it failed.", a: "\"We both understand it better than an hour ago. That was the point.\"", bundle: 'pro' },
        { q: "You feel a small pleasure when they cannot reply.", a: "\"That feeling means I've stopped discussing. Back to the actual question.\"", bundle: 'pro' },
        { q: "You want the last word.", a: "\"The last word is worth nothing tomorrow. What do I actually want them to leave with?\"", bundle: 'pro' },
        { q: "You are keeping score.", a: "\"There isn't a score. There's what we each think, and whether it's moved.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Say It As Yours",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance behind every Me-Focus move: an opinion stated as a fact invites a fight about the fact. \"I think\" is not a hedge — it is the accurate description of what you are saying, and it makes the other person's disagreement cheap rather than confrontational. Example of the shift — instead of \"that's obviously wrong\", you say \"I see it differently, and here's why\".\n\nWhere it goes wrong:\n1. You dress a preference up as a principle to make it harder to argue with.\n2. You say \"people think\" when you mean \"I think\".\n3. You avoid the opinion entirely and then resent not being heard.\n\nMindset: own it. It is more honest, and it is harder to argue with — you are the authority on what you think.",
      inputs: [
        { q: "You are about to present your view as an obvious fact.", a: "\"It's my view. Saying so makes it easier for them to say theirs.\"", bundle: 'pro' },
        { q: "You are hiding behind 'people say'.", a: "\"Whose view is this actually? If it's mine, say mine.\"", bundle: 'pro' },
        { q: "You have not stated a position and feel unheard.", a: "\"Nobody can respond to something I haven't said. Put it on the table.\"", bundle: 'pro' },
        { q: "You are dressing a preference up as a principle.", a: "\"It's a preference and that's allowed. Preferences are real reasons.\"", bundle: 'pro' },
        { q: "You worry your view is not well enough thought through.", a: "\"Half-formed and honest is fine. 'I lean this way, not strongly' is a real position.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Listen to Hear, Not to Reply",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance behind every You-Focus move: while someone is talking you are either taking it in or you are queueing, and the two feel identical from the inside. The qualification you needed usually arrives in their last sentence, which is exactly the sentence you talk over. Example of the shift — instead of holding your reply ready, you follow to the end and then think.\n\nWhere it shows up:\n1. You have your answer ready before they have finished the point.\n2. You interrupt and the interrupted point comes back twice as long.\n3. You cannot summarise what they said, only whether you agreed with it.\n\nMindset: whatever you were going to say will still be there in eight seconds, and it will usually be better for the wait.",
      inputs: [
        { q: "Your reply is ready and they are still talking.", a: "\"It'll keep. The last quarter is where the interesting part usually is.\"", bundle: 'pro' },
        { q: "You cannot summarise what they just said.", a: "\"Then I wasn't listening, I was waiting. Ask them to say the last bit again.\"", bundle: 'pro' },
        { q: "You interrupted and the point came back at twice the length.", a: "\"That's what interrupting costs. Cheaper to wait.\"", bundle: 'pro' },
        { q: "A pause tempts you to jump in.", a: "\"A pause is thinking, not an invitation.\"", bundle: 'pro' },
        { q: "You are certain you disagree before they have finished.", a: "\"Certain before the end is a sign I'm arguing with a prediction.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Changing Your Mind Is a Result",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance about outcomes: being persuaded is not a defeat, it is the discussion doing the thing discussions are for. Saying so out loud costs a moment of discomfort and buys something considerable — people are far more willing to discuss anything with someone who has been seen to move. Example of the shift — instead of quietly adjusting your view and defending it anyway, you say which part changed your mind.\n\nWhere the resistance shows up:\n1. You keep arguing a position you have already left.\n2. You concede silently and let them think they lost.\n3. You look for a smaller point to be right about instead.\n\nMindset: say it plainly, and name what did it. \"The bit about the night shift changed my mind\" is an answer and a compliment at the same time.",
      inputs: [
        { q: "You are defending a position you no longer hold.", a: "\"Say it out loud. Arguing for something I don't believe wastes both of us.\"", bundle: 'pro' },
        { q: "Conceding feels like losing in front of other people.", a: "\"It reads as confidence, not defeat. People trust someone who can move.\"", bundle: 'pro' },
        { q: "You want to concede quietly and move on.", a: "\"Name the part that did it. That's the useful half of conceding.\"", bundle: 'pro' },
        { q: "Only some of their case moved you.", a: "\"Then say which. Half a concession, accurately placed, beats a vague one.\"", bundle: 'pro' },
        { q: "You changed your mind an hour after the discussion.", a: "\"Tell them tomorrow. Late is fine — silent isn't.\"", bundle: 'pro' },
      ]
    },
  ],
  storybanter: [
    {
      name: "Build, Do Not Perform",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The pack-wide stance: this is a thing two people make together, and the measure is whether the story kept going, not whether your line was the best one. A person who is trying to be the funniest stops listening, and a person who has stopped listening cannot build on anything. Example of the shift — instead of hunting for your best line, you take their last one seriously.\n\nThe three thoughts that cause the trouble:\n1. \"I need to be funnier than that\" — you need to leave them something.\n2. \"That was a weak turn from me\" — a turn that kept it going is a good turn.\n3. \"It only works if I'm quick\" — the consequence technique needs no speed at all.\n\nMindset: the goal is collaboration, not being the funniest. Two people building beats one person performing at another.",
      inputs: [
        { q: "You are trying to top their last line.", a: "\"Topping it ends it. Building on it keeps it going, which is the actual game.\"", bundle: 'pro' },
        { q: "You feel your turn was weak.", a: "\"It kept the story alive. That is the whole job of a turn.\"", bundle: 'pro' },
        { q: "You are waiting for a good enough idea before speaking.", a: "\"Good enough is 'so then what happens'. Say it and the rest arrives.\"", bundle: 'pro' },
        { q: "They said something better than anything you have.", a: "\"Perfect — now I've got material. Building is easier than starting.\"", bundle: 'pro' },
        { q: "You are keeping score of who got the laughs.", a: "\"Nobody else is keeping that score. They're just enjoying it.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Yes, And — Never Yes, But",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance behind the whole form: everything offered is accepted. \"But\" is a correction, and a correction inside an invented story is a small door closing. This is the one rule the form actually has, and it is worth holding absolutely. Example of the shift — instead of pointing out that it would not work, you decide it would.\n\nWhere it goes wrong:\n1. You correct a detail out of pure reflex.\n2. You say \"yes, but\" and think you have agreed.\n3. You treat an impossible idea as a mistake rather than as an offer.\n\nMindset: nothing has to be possible. The only thing that matters is that you build on what you were handed.",
      inputs: [
        { q: "You are about to point out that it would not work.", a: "\"Nothing here works. That's not the point — what happens next?\"", bundle: 'pro' },
        { q: "You said \"yes, but\" and thought you were agreeing.", a: "\"'But' undoes the 'yes'. Swap it and the same sentence builds instead.\"", bundle: 'pro' },
        { q: "Their idea broke the internal logic of the story.", a: "\"Then the logic changes. That's allowed, and it's usually funnier.\"", bundle: 'pro' },
        { q: "You corrected a detail out of reflex.", a: "\"Take it back lightly and accept it twice as hard. That repairs it completely.\"", bundle: 'pro' },
        { q: "You want to steer the story somewhere better.", a: "\"Steering is blocking with better manners. Go where they put it.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Absurd Is Safer Than Clever",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance about what to aim for: an obviously impossible idea cannot be mistaken for a judgement about anyone, and a clever remark can. The bigger and sillier the invention, the more clearly it is play — which is why the safest banter is the least realistic. Example of the shift — instead of a sharp observation, you reach for the ridiculous version.\n\nWhere it shows up:\n1. A remark that is nearly true and therefore nearly a criticism.\n2. Humour aimed at a real weakness, dressed as a story.\n3. Restraint — a cautious exaggeration that reads as a correction.\n\nMindset: go past sensible in one jump. Halfway is where a joke starts sounding like a point.",
      inputs: [
        { q: "Your line is funny because it is nearly true.", a: "\"Nearly true is nearly a criticism. Make it impossible instead.\"", bundle: 'pro' },
        { q: "You are being careful with the exaggeration.", a: "\"Careful reads as correcting. If I'm wondering whether it's too much, it isn't enough.\"", bundle: 'pro' },
        { q: "You have a sharp observation about them ready.", a: "\"Sharp belongs somewhere else. Here I want ridiculous.\"", bundle: 'pro' },
        { q: "The joke would work best if it landed on them.", a: "\"Then it isn't this game. Aim it at the invented week, not the real person.\"", bundle: 'pro' },
        { q: "You want the clever version rather than the silly one.", a: "\"Clever gets admired. Silly gets built on. I'd rather be built on.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Stop While It Is Good",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance about endings: nobody remembers a story that stopped a turn early, and everybody remembers one that went four turns long. Landing it is a move in its own right, not a failure of imagination. Example of the shift — instead of finding one more thing, you say the flat closing line and change the subject.\n\nWhere the pull to continue comes from:\n1. You have one more idea and it feels like a waste not to use it.\n2. Stopping feels like admitting it has run out.\n3. Nobody else has stopped it, so you assume it is still working.\n\nMindset: the goal was the laugh you already had. Land it warmly and go and do something else.",
      inputs: [
        { q: "You have one more idea and the room has moved on.", a: "\"Save it. An unused good line is better than a used late one.\"", bundle: 'pro' },
        { q: "Stopping feels like giving up.", a: "\"Landing it is a move, not a surrender. Somebody has to do it.\"", bundle: 'pro' },
        { q: "The biggest laugh was three turns ago.", a: "\"That was the top. Everything since is downhill with more words.\"", bundle: 'pro' },
        { q: "Nobody else has ended it so you assume it is fine.", a: "\"Everyone's waiting for someone to land it. Be that person.\"", bundle: 'pro' },
        { q: "You want the last word in a story you both built.", a: "\"Hand them the ending instead. It's their story too, and it ends better.\"", bundle: 'pro' },
      ]
    },
  ],
  explainthings2: [
    {
      name: "The Question Under the Question",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The pack-wide stance: people rarely ask the question they actually want answered. \"What is it?\" almost always means \"would I ever need this?\", and answering the literal version is how clear explanations end up useless. Example of the shift — instead of defining the thing, you tell them when they would reach for it.\n\nThe three thoughts that cause the trouble:\n1. \"They asked what it is\" — they asked what it is *to them*.\n2. \"I should start at the beginning\" — start where their gap is.\n3. \"If I am accurate I have done my job\" — accurate and irrelevant is still a failure.\n\nMindset: answer the question they have, not the one they said. If you cannot tell, ask — it takes six words.",
      inputs: [
        { q: "You gave a correct answer and it landed flat.", a: "\"Correct isn't the standard. Useful is. Which W were they actually missing?\"", bundle: 'pro' },
        { q: "You want to start from first principles.", a: "\"First principles are for me, not for them. Start where their gap is.\"", bundle: 'pro' },
        { q: "You cannot tell what they are asking.", a: "\"Then ask. 'What it is, or what it's for?' costs nothing and saves five minutes.\"", bundle: 'pro' },
        { q: "You are annoyed that they asked the wrong question.", a: "\"They asked the only question they had words for. Finding the real one is my job.\"", bundle: 'pro' },
        { q: "You have explained this many times and always the same way.", a: "\"Same explanation every time means I have stopped listening to who is asking.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Short Is Not Rude",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance about length: a one-sentence answer feels dismissive from the inside and generous from the outside. The long version is available if they want it, and they will ask — people always ask about things they are interested in. Example of the shift — instead of proving you know the subject, you give the short version and stop.\n\nWhere the hesitation shows up:\n1. You add detail so it does not sound like you are brushing them off.\n2. You explain the exceptions before anyone has met the rule.\n3. You mistake completeness for helpfulness.\n\nMindset: nobody has ever complained that an explanation was too short. They ask, and then you get to say more with someone who wants it.",
      inputs: [
        { q: "A one-sentence answer feels like brushing them off.", a: "\"It reads as generous from where they're standing. And they'll ask if they want more.\"", bundle: 'pro' },
        { q: "You want to include the exceptions.", a: "\"Exceptions after the rule, and only if they're still there.\"", bundle: 'pro' },
        { q: "You are proving you know the subject.", a: "\"That's for me, not for them. What do they actually need to walk away with?\"", bundle: 'pro' },
        { q: "You worry the short version makes you sound vague.", a: "\"Vague is missing information. Short is choosing which information first.\"", bundle: 'pro' },
        { q: "They have not asked a follow-up.", a: "\"Then that was enough. Not every explanation needs a second half.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Say Who It Is Not For",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance about honesty in explaining: the sentence that says \"this probably isn't for you\" is what makes everything else you said believable. It costs a recommendation and buys the listener's trust in every future one. Example of the shift — instead of listing what is good about it, you say plainly where the listener sits.\n\nWhere it goes wrong:\n1. You like the thing, so every sentence is a benefit.\n2. You do not want to be discouraging.\n3. You leave out the catch because they did not ask.\n\nMindset: an explanation with no \"not for you\" in it is a pitch. One honest exclusion makes the rest land.",
      inputs: [
        { q: "Every sentence you have said has been a benefit.", a: "\"Where's the catch? If I can't name one, I'm selling rather than explaining.\"", bundle: 'pro' },
        { q: "You do not want to put them off something you like.", a: "\"Telling them honestly costs one recommendation and buys every future one.\"", bundle: 'pro' },
        { q: "They did not ask about the drawback.", a: "\"They shouldn't have to ask. It's part of the explanation, not an objection.\"", bundle: 'pro' },
        { q: "Saying it is not for them feels discouraging.", a: "\"Letting them buy the wrong thing is what would actually discourage them.\"", bundle: 'pro' },
        { q: "You are recommending something you use daily to someone quite different.", a: "\"It fits my week. Does it fit theirs? That is the whole question.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Give It Neighbours",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance about placing things: people file new information by what it sits next to, so an explanation with no neighbours is remembered as a fact rather than as a thing. Naming what comes before it, after it, or beside it does more for memory than any amount of description. Example of the shift — instead of describing the thing in isolation, you say what it sits between.\n\nWhere it shows up:\n1. Something perfectly explained that nobody can recall a day later.\n2. A description that is accurate and floating.\n3. \"But where does it fit?\" asked after a complete answer.\n\nMindset: give it a shelf. Between two things they already know is the easiest place in the world to remember something.",
      inputs: [
        { q: "Your explanation was clear and nobody remembers it.", a: "\"It had nothing next to it. What does it sit between?\"", bundle: 'pro' },
        { q: "You are describing something with no obvious category.", a: "\"Closest familiar thing first, then the difference. That's a shelf.\"", bundle: 'pro' },
        { q: "They ask where it fits after you have finished.", a: "\"That question means I explained the thing and not its place. Answer it first next time.\"", bundle: 'pro' },
        { q: "You have described something accurately and it floated away.", a: "\"Accurate and unplaced. What does it come after, and what comes next?\"", bundle: 'pro' },
        { q: "You are about to open with how it works.", a: "\"Shelf first. Where it belongs and who it is for, then the mechanics.\"", bundle: 'pro' },
      ]
    },
  ],
  buildingastory: [
    {
      name: "Small Stories Are Enough",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The pack-wide stance: the size of the event is almost irrelevant. A locked door told sharply lands better than a dramatic week told vaguely, and most of the stories people remember hearing were about nothing much. Example of the shift — instead of waiting for a story worth telling, you tell the small true one that arrived.\n\nThe three thoughts that cause the trouble:\n1. \"Nothing interesting happens to me\" — nothing interesting happens to anybody; the telling is the difference.\n2. \"This isn't a good enough story\" — good enough means true, small and shaped.\n3. \"I'll save it for when it fits better\" — that moment does not come.\n\nMindset: small, true, shaped. That is the whole standard, and everybody clears it several times a week.",
      inputs: [
        { q: "You think nothing interesting happens to you.", a: "\"Nothing interesting happens to anyone. The telling is the whole difference.\"", bundle: 'pro' },
        { q: "The story you have feels too small.", a: "\"Small and sharp beats big and vague, every single time.\"", bundle: 'pro' },
        { q: "You are waiting for a better moment to tell it.", a: "\"The better moment doesn't come. This one is here.\"", bundle: 'pro' },
        { q: "You compare your story to the one just told.", a: "\"It's not a competition — a smaller one next to theirs is a conversation.\"", bundle: 'pro' },
        { q: "You are looking for a dramatic story and have none.", a: "\"The locked door story is the one people will remember. Use that.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Start Where It Moves",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance about openings: your instinct is to explain first so that everything makes sense, and that instinct costs you the room. Context can be delivered late and often does not need delivering at all — the listener will build most of it themselves. Example of the shift — instead of introducing everyone, you say the first thing that happened.\n\nWhere it goes wrong:\n1. You explain who people are before anything has occurred.\n2. You give the background because you would want it yourself.\n3. You start at the true beginning rather than at the interesting one.\n\nMindset: start where it moves and backfill only what they actually need. Almost nobody has ever asked for more setup.",
      inputs: [
        { q: "You are about to explain who everyone is.", a: "\"Names can wait. What happened?\"", bundle: 'pro' },
        { q: "You want to start at the real beginning.", a: "\"The real beginning is usually the boring one. Start where it turns.\"", bundle: 'pro' },
        { q: "You are worried it will not make sense without context.", a: "\"They'll ask if they need it. They almost never need it.\"", bundle: 'pro' },
        { q: "You have three sentences of background ready.", a: "\"One clause of it, at most. The rest can arrive later or not at all.\"", bundle: 'pro' },
        { q: "You have lost the room in the setup.", a: "\"Jump to the turn now. The setup can follow it.\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Feeling Is the Story",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance behind the emotional half of the pack: people follow feeling more closely than they follow events, and a story told without any is a report. Naming the feeling once, plainly, does more than any amount of vivid description. Example of the shift — instead of describing the situation more carefully, you say how it felt.\n\nWhere it shows up:\n1. An accurate account that nobody reacts to.\n2. Detail piled on detail in the hope that the feeling arrives on its own.\n3. Playing something down because naming the feeling seems dramatic.\n\nMindset: say the feeling out loud once. The pace, the pauses and the detail all follow from it, and none of them arrive without it.",
      inputs: [
        { q: "The account is accurate and nobody is reacting.", a: "\"Accurate isn't the same as told. How did it feel?\"", bundle: 'pro' },
        { q: "You are adding detail hoping the feeling comes through.", a: "\"One clause naming it does more than four describing it.\"", bundle: 'pro' },
        { q: "Naming the feeling seems a bit dramatic.", a: "\"'I was mortified' is not dramatic. It's information.\"", bundle: 'pro' },
        { q: "The feeling was ordinary and unimpressive.", a: "\"'Mostly I was just tired' is honest, and honest is what lands.\"", bundle: 'pro' },
        { q: "You are telling a funny story about something that was not funny.", a: "\"Both versions are true. Choose the one this room can take.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Finish It on Purpose",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance about endings and lessons: a story is remembered by its last sentence, and most stories are ended by running out rather than by stopping. Deciding to end — and deciding whether there is a takeaway at all — is a move, not an admission that you have nothing left. Example of the shift — instead of winding down, you say the line you told it for and stop.\n\nWhere the trouble comes from:\n1. You have had the laugh and lose interest in the ending.\n2. You add a moral because the ending feels too small.\n3. You keep going because nobody has stopped you.\n\nMindset: say the last line on purpose, and stop. If there is a lesson, one sentence; if there is not, say that instead — it is a better ending than an invented one.",
      inputs: [
        { q: "You have had the laugh and are winding down.", a: "\"The ending is what they'll carry. Say it properly.\"", bundle: 'pro' },
        { q: "You are about to add a moral to make it feel finished.", a: "\"'It was just a strange day' finishes it perfectly well.\"", bundle: 'pro' },
        { q: "You cannot tell whether you have finished.", a: "\"Then they can't either. Say the last line and stop talking.\"", bundle: 'pro' },
        { q: "Nobody has stopped you so you keep going.", a: "\"Nobody stops a story out loud. Land it before they have to.\"", bundle: 'pro' },
        { q: "The lesson you are about to give is not the true one.", a: "\"The honest one is smaller and better. Say that instead.\"", bundle: 'pro' },
      ]
    },
  ],
  reframing: [
    {
      name: "Every Frame Is a Choice",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The pack-wide stance: what happened and what it means are two different things, and only the first is fixed. The meaning arrives so fast that it feels like part of the event, which is exactly why it goes unexamined. Example of the shift — instead of accepting the first reading that arrived, you ask what else fits the same facts.\n\nThe three thoughts that cause the trouble:\n1. \"That's just what it means\" — that is the reading that got there first.\n2. \"I'm not spinning it, I'm being realistic\" — the negative frame is also a frame.\n3. \"There's only one way to see this\" — there is at least one more, and it usually fits better.\n\nMindset: separate the event from the conclusion. The event is a sentence; the conclusion is a story, and stories can be rewritten without lying.",
      inputs: [
        { q: "You have accepted the first reading that arrived.", a: "\"First doesn't mean true. What else fits exactly these facts?\"", bundle: 'pro' },
        { q: "You think the negative version is simply realistic.", a: "\"The gloomy frame is a frame too. It isn't more accurate for being less pleasant.\"", bundle: 'pro' },
        { q: "You cannot see any other reading.", a: "\"Then start with the smallest one: what would somebody who liked me say about this?\"", bundle: 'pro' },
        { q: "The meaning feels like part of the event.", a: "\"What happened is one sentence. Everything else I've added.\"", bundle: 'pro' },
        { q: "You are certain about what somebody's silence meant.", a: "\"I have their silence. I don't have their week.\"", bundle: 'pro' },
      ]
    },
    {
      name: "It Has To Be True",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance that keeps this from becoming spin: a reframe has to hold every fact the original one held. The moment it requires leaving something out it stops being a different reading and becomes a request to pretend — and the other person can always tell. Example of the shift — instead of reaching for the encouraging version, you look for the accurate one that happens to be kinder.\n\nWhere it goes wrong:\n1. The upside you name does not cover the cost, and you say it anyway.\n2. You reframe out of discomfort with their feeling rather than out of a real reading.\n3. You would not say the same thing about it in a month.\n\nMindset: truer, not nicer. A reframe that is both is available surprisingly often, and one that is only nicer is worth nothing.",
      inputs: [
        { q: "Your upside does not really cover the cost.", a: "\"Then it isn't a reframe. Say the honest thing instead.\"", bundle: 'pro' },
        { q: "You are reframing because their feeling is uncomfortable.", a: "\"That's my discomfort, not their reading. Sit with it a minute.\"", bundle: 'pro' },
        { q: "You would not say this in a month's time.", a: "\"Then it isn't true now either. It's just something to say.\"", bundle: 'pro' },
        { q: "The kinder version requires ignoring one fact.", a: "\"It has to hold every fact the first one held. Otherwise it's a nicer story.\"", bundle: 'pro' },
        { q: "You want to make somebody feel better quickly.", a: "\"Quickly is what makes it hollow. Accurate takes another minute and lasts.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Not Everything Needs a Better Angle",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance that makes the pack safe to own: some things are bad, some feelings are the correct response, and the reframe is not always the gift it feels like. Offered too early it is heard as being told how to feel, and the result is not comfort but silence next time. Example of the shift — instead of finding the silver lining, you say the thing is bad and ask what would help.\n\nWhere it shows up:\n1. You reach for perspective within an hour of something going wrong.\n2. You cannot sit with somebody being upset without trying to fix it.\n3. You treat a reasonable reaction as a problem to be solved.\n\nMindset: \"that's just bad, and I'm sorry\" is a complete response. Reach for it more often than the four types.",
      inputs: [
        { q: "You want to find the upside within an hour of the event.", a: "\"Too early. Today is for saying it's bad. The angle keeps.\"", bundle: 'pro' },
        { q: "You cannot sit with somebody being upset.", a: "\"The urge to fix it is mine. What they asked for was company.\"", bundle: 'pro' },
        { q: "The feeling seems out of proportion to you.", a: "\"Anger at something unfair is not a distortion. It's the correct reading.\"", bundle: 'pro' },
        { q: "You have a genuinely good reframe and they are in bits.", a: "\"Good and premature. Offer it in a week and it'll land.\"", bundle: 'pro' },
        { q: "You feel useless just listening.", a: "\"Listening is the useful thing. The clever angle is the optional extra.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Offer, Never Impose",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The stance about delivery: a reframe belongs to the person receiving it, and they get to refuse it. Handed over as the correct view it produces defence of a reading they might not even have liked; handed over as one option it usually gets tried on. Example of the shift — instead of \"you should see it as\", you say \"one way to look at it is\" and then stop.\n\nWhere it goes wrong:\n1. You repeat a reframe that was not taken.\n2. You treat their not taking it as them being stubborn.\n3. You start the sentence with \"you should\".\n\nMindset: offer it once, hold it loosely, let them keep their own. A reframe argued for has stopped being a gift.",
      inputs: [
        { q: "They did not take your reframe.", a: "\"That's allowed. It's their situation and their reading.\"", bundle: 'pro' },
        { q: "You have said the same thing twice.", a: "\"Twice is pushing. They heard it the first time.\"", bundle: 'pro' },
        { q: "You are about to begin with \"you should\".", a: "\"Swap it for 'one way to look at it'. Same content, completely different conversation.\"", bundle: 'pro' },
        { q: "You think they are being stubborn about a good reading.", a: "\"Or it doesn't fit their facts, which they know better than I do.\"", bundle: 'pro' },
        { q: "You want them to agree with your version.", a: "\"Wanting agreement means I'm arguing, not offering.\"", bundle: 'pro' },
      ]
    },
  ],
  danbacon1: [
    {
      name: "The \"Prize\" Mentality",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The belief that you are the one who needs to be \"good enough\" for her. This mindset causes you to be over-polite and boring. Dan Bacon teaches that you must believe you are the prize she is trying to win over.",
      inputs: [
        { q: "\"She is so beautiful, I have to be extra nice to her.\"", a: "\"She gets special treatment from every guy. If I treat her like a normal person and tease her, I’ll be the one she actually remembers.\"", bundle: 'pro' },
        { q: "\"I'm afraid I'll offend her if I make a joke.\"", a: "\"Risking her reaction is what shows my confidence. A guy who isn't afraid of a 'no' is the one who gets a 'yes'.\"", bundle: 'pro' },
        { q: "\"I need to prove my value by talking about my job and car.\"", a: "\"Bragging makes me look lower value. My value comes from my personality and how I make her feel, not my resume.\"", bundle: 'pro' },
        { q: "\"I should wait for a clear sign she likes me before I flirt.\"", a: "\"I am the one who creates the spark. I don't wait for luck; I interact and make her feel attracted to my confidence.\"", bundle: 'pro' },
        { q: "\"If she plays hard to get, it means she doesn't like me.\"", a: "\"She is testing my confidence. If I remain calm and keep joking, I prove I am good enough for a woman like her.\"", bundle: 'pro' },
      ]
    },
  ],
  danbacon2: [
    {
      name: "The Selector's Frame",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The internal stance that you are the one deciding if she is good enough for you, rather than vice versa.",
      inputs: [
        { q: "\"She is way more attractive than me.\"", a: "\"I am feeling an instant automatic attraction, but that doesn't mean she is more valuable. I can make her feel as much attraction for me as I feel for her.\"", bundle: 'pro' },
        { q: "\"I hope she doesn't reject me.\"", a: "\"Rejection is just a test of my confidence. If I remain calm, I prove I am the rare guy who is good enough for her.\"", bundle: 'pro' },
        { q: "\"I should explain why I'm a good guy.\"", a: "\"Explaining myself makes me look lower value. My value is a default; she is the one who needs to win _me_ over.\"", bundle: 'pro' },
        { q: "\"She's playing hard to get.\"", a: "\"She is testing to see if our emotional match works. I will have independent confidence and remain cool regardless of her signals.\"", bundle: 'pro' },
        { q: "\"I need to impress her with my resume.\"", a: "\"Bragging signals that I don't feel worthy as I am. I will let my real, cool self come through without an act.\"", bundle: 'pro' },
      ]
    },
  ],
  danbacon3: [
    {
      name: "Bringing Out the Best",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The belief that her behavior is fixed. In reality, every woman has a \"good girl\" side, and it is your job to create the dynamic that brings it out and keeps it active.",
      inputs: [
        { q: "\"She's just a moody person, there's nothing I can do.\"", a: "\"She reacts to the dynamic I create. If I change my approach and stay masculine and leading, her behavior will naturally follow.\"", bundle: 'pro' },
        { q: "\"I should do more chores so she'll want to have sex with me.\"", a: "\"Sucking up kills attraction. I will be a good man, but she needs to feel the need to win _me_ over to feel sexual desire.\"", bundle: 'pro' },
        { q: "\"I'm afraid she'll leave if I tell her she's being disrespectful.\"", a: "\"She is testing to see if I'm strong enough to handle her. If I allow bad treatment, she will lose all respect and leave anyway.\"", bundle: 'pro' },
        { q: "\"I need her to be happy all the time for me to feel good.\"", a: "\"I am emotionally independent. I can be happy even if she's in a mood. My stability is what makes her feel safe.\"", bundle: 'pro' },
        { q: "\"Being the leader sounds like too much work.\"", a: "\"It's actually the easiest approach. Once the dynamic is set, she gives and gives because it feels good to her. It becomes effortless.\"", bundle: 'pro' },
      ]
    },
  ],
  danbacon4: [
    {
      name: "Independent Confidence",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The internal stance that your value and your mood are not dependent on her signals or behavior. You are in control of your own confidence.",
      inputs: [
        { q: "\"She is being moody, so I must have done something wrong.\"", a: "\"She is a woman; her moods fluctuate. I will remain stable and leading, and her behavior will naturally follow my masculine frame.\"", bundle: 'pro' },
        { q: "\"I should abide by her rules to avoid an argument.\"", a: "\"Avoiding conflict at the cost of my balls makes me unattractive. I will lovingly challenge her BS to keep the spark alive.\"", bundle: 'pro' },
        { q: "\"I need her to reassure me that she still loves me.\"", a: "\"I don't need her 'pat on the back' to feel worthy. I know I am a good man, and she is lucky to be with me.\"", bundle: 'pro' },
        { q: "\"I'm afraid she'll leave if I act too dominant.\"", a: "\"She is testing to see if I am man enough for her. If I allow her to be the leader, she will lose all respect and leave anyway.\"", bundle: 'pro' },
        { q: "\"I should only show her my best, most positive self.\"", a: "\"Hiding my real moods makes me a fake 'nice guy.' Authenticity is what creates a real emotional connection.\"", bundle: 'pro' },
      ]
    },
  ],
  oconnor2: [
    {
      name: "Substance Over Form",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The internal shift required to stop worrying about \"the perfect words\" and start focusing on your \"true intention.\" If your intention is to be a loving, peaceful, and professional person, the words will follow naturally.",
      inputs: [
        { q: "I'm afraid I'll stumble over my words when I say no.", a: "\"The form (words) is less important than the substance (intention). If my intention is to be a productive teammate, they will feel that regardless of stumbles.\"", bundle: 'pro' },
        { q: "I feel like a \"witch\" or a \"jerk\" for setting a boundary.", a: "\"I am made of love, and setting boundaries is an act of self-love. To communicate from a place of lovelessness is a perversion of who I am.\"", bundle: 'pro' },
        { q: "I need to win this argument to prove I'm right.", a: "\"If I'm focused on 'winning,' I've already lost. I choose to focus on being a problem-solver and maintaining peace.\"", bundle: 'pro' },
        { q: "My boss's bad mood is ruining my day.", a: "\"I am the cause, not the effect. I refuse to let their chaos dictate who I am or how I communicate today.\"", bundle: 'pro' },
      ]
    },
    {
      name: "We Train People How To Treat Us",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "Accepting total responsibility for the patterns of behavior you allow in your workspace. What gets rewarded gets repeated. If you allow the \"Time Sucker\" to stay, you are rewarding them with your attention.",
      inputs: [
        { q: "People always dump work on me; it's so unfair.", a: "\"The first time was about them. The 10th time is about me. I am training them that I am the one who always says yes.\"", bundle: 'pro' },
        { q: "I shouldn't have to use a sign; they should just know I'm busy.", a: "\"I cannot expect people to follow rules I haven't spelled out clearly. It's my job to lay down the ground rules.\"", bundle: 'pro' },
        { q: "I have to explain myself so they don't think I'm lazy.", a: "\"I only defend what I believe to be vulnerable. If I'm a competent professional, my work speaks for itself. Explaining looks like weakness.\"", bundle: 'pro' },
        { q: "I'll just do it this one last time to keep the peace.", a: "\"Keeping a false peace is rewarding their intrusion. If I want the behavior to stop, I must take away the reward today.\"", bundle: 'pro' },
      ]
    },
  ],
  oconnor3: [
    {
      name: "Substance Over Form",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The internal shift from \"What will they think of me?\" to \"Who am I being in this moment?\"",
      inputs: [
        { q: "I'm afraid I'll look mean if I use the \"Irrelevant\" block.", a: "\"I am made of love, and setting professional boundaries is an act of self-love. I refuse to let your chaos dictate who I am today.\"", bundle: 'pro' },
        { q: "I need to explain my side so they don't think I'm wrong.", a: "\"I only defend what I believe to be vulnerable. My competence is not vulnerable, so I have nothing to explain to you.\"", bundle: 'pro' },
        { q: "They are \"winning\" the argument because everyone is laughing.", a: "\"If I'm focused on 'winning,' I've already lost. I choose to focus on maintaining my dignity and my professional standard.\"", bundle: 'pro' },
        { q: "I have to respond to every jab or they'll think I'm weak.", a: "\"I am the cause, not the effect. I decide who is worthy of my attention, and this interaction is not.\"", bundle: 'pro' },
      ]
    },
  ],
  oconnor4: [
    {
      name: "Influential Leadership",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The internal shifts from \"Reaction\" to \"Intention.\" Leaders are the cause, never just the effect.",
      inputs: [
        { q: "I have to explain myself so they understand my side.", a: "\"We only defend what we believe to be vulnerable. My position is based on data and merit; explaining makes it look weak. I choose to state the instruction and move on.\"", bundle: 'pro' },
        { q: "My boss's bad mood is ruining my confidence.", a: "\"I am the cause, not the effect. I refuse to let their chaos dictate who I am or how I communicate today. I will reflect on my personal compass before I speak.\"", bundle: 'pro' },
        { q: "It's just easier to say \"it's okay\" when someone messes up.", a: "\"Don't tell people it's okay when it wasn't okay five seconds ago. I will say 'I accept your apology' or 'I forgive you' instead to maintain my worth.\"", bundle: 'pro' },
        { q: "I'm afraid people will think I'm arrogant if I use power phrases.", a: "\"Professional communication is a game, and these are the rules. People respect those who know the moves. Dignity is not arrogance.\"", bundle: 'pro' },
      ]
    },
  ],
  oconnor5: [
    {
      name: "Executive Presence",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The internal shifts required to stop \"acting\" like an intern and start \"being\" a leader.",
      inputs: [
        { q: "I don't want to look like I'm \"too much\" or arrogant.", a: "\"Dignity is not arrogance. Taking up space and speaking clearly is a favor to the room; it makes it easier for everyone to know where they stand.\"", bundle: 'pro' },
        { q: "I'll just wait for them to give me a seat or tell me where to go.", a: "\"I am the cause, not the effect. I don't wait for permission to belong; I act like I'm in my own home because I have dominion here.\"", bundle: 'pro' },
        { q: "I'm too nervous to speak loudly.", a: "\"I will act myself into a new way of thinking. If I speak like a confident person, my biochemistry will eventually catch up and make me one.\"", bundle: 'pro' },
        { q: "I have to keep staring at them so they know I'm paying attention.", a: "\"Polished communicators know the 7-second rule. I will use the 'Look Away' to show I am comfortable with power, not psychotic.\"", bundle: 'pro' },
      ]
    },
  ],
  oconnor6: [
    {
      name: "Mindful Resilience",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The internal shifts required to move from \"Victim of Circumstance\" to \"Cause of Change.\"",
      inputs: [
        { q: "I'm afraid if I keep repeating myself I'll look stupid.", a: "\"The moment I introduce a new defense, I have lost. I choose the power of the Broken Record to show my message is valid and unchanging.\"", bundle: 'pro' },
        { q: "If I say 'I forgive you,' it sounds too religious or heavy.", a: "\"It sounds like a person who knows their worth. 'It's okay' is a lie that hurts me; 'I forgive you' is the truth that heals me.\"", bundle: 'pro' },
        { q: "My boss already knows I'm doing a good job; I don't need a journal.", a: "\"Numbers speak louder than memories. My boss is busy; the Value Journal is a gift that makes it easy for them to justify my success to their boss.\"", bundle: 'pro' },
        { q: "I have to tell myself 'I will not get angry' so I don't blow up.", a: "\"My brain doesn't process 'not.' I will use a present, positive coping statement like 'I am calm' to give my brain a clear instruction.\"", bundle: 'pro' },
      ]
    },
  ],
  oconnor7: [
    {
      name: "Substance Over Form",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The internal posture of a person who values connection over \"getting the words right.\"",
      inputs: [
        { q: "I'm too nervous to start a conversation with that executive.", a: "\"I belong here as much as anyone else. I am comfortable as if I were in my own home, and I have a service attitude to offer.\"", bundle: 'pro' },
        { q: "If I ask for a favor, they'll think I'm a nuisance.", a: "\"People love being asked for help. A simple favor is a gift I give them to justify why they like me.\"", bundle: 'pro' },
        { q: "I'm afraid I'll forget their name and look stupid.", a: "\"Memory is a game, not a talent. I will use my visual hooks and repeats because I value their identity more than my ego.\"", bundle: 'pro' },
        { q: "I don't want to look arrogant by taking up space.", a: "\"Dignity is not arrogance. Taking up space and moving my chair forward is a sign that I am present and open to the message.\"", bundle: 'pro' },
      ]
    },
  ],
  jimmy1: [
    {
      name: "The Foundation of Safety",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The internal posture required to build a relationship that lasts. It shifts from \"fear of loss\" to \"commitment to self-worth.\"",
      inputs: [
        { q: "I'm afraid if I talk about my non-negotiables, they'll leave.", a: "\"If they leave because of my values, they weren't my person anyway. Better to know now than in ten years.\"", bundle: 'pro' },
        { q: "I feel like I have to earn their love through performance.", a: "\"I am already whole and valuable. Love is a gift to be reciprocated, not a wage to be earned.\"", bundle: 'pro' },
        { q: "Yelling is just how my family always communicated.", a: "\"My past explains my patterns, but it doesn't justify them. I choose emotional maturity today.\"", bundle: 'pro' },
        { q: "I should be able to change them if I just love them enough.", a: "\"I can't 'out-love' their lack of interest in growth. I can only control my own standard for safety.\"", bundle: 'pro' },
      ]
    },
  ],
  jimmy2: [
    {
      name: "Healthy Expression",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The internal shifts required to move from \"protecting yourself\" to \"prioritizing the relationship\".",
      inputs: [
        { q: "I shouldn't have to tell them what I need; they should just know.", a: "\"Assuming they can read my mind is an unhealthy need. I choose the maturity of being clear and direct.\"", bundle: 'pro' },
        { q: "If I’m vulnerable, they’ll use it as ammunition later.", a: "\"I can't have closeness without vulnerability. If they punish my honesty, that is information about their character, not my worth.\"", bundle: 'pro' },
        { q: "I feel like I'm \"walking on eggshells\" to avoid a fight.", a: "\"Keeping the peace at the cost of my honesty is self-abandonment. I deserve a relationship where the real me is known.\"", bundle: 'pro' },
        { q: "My anger is proof that they are the bad guy.", a: "\"My anger is a signal that a boundary was crossed or a need was unmet. It’s an invitation to communicate, not to convict.\"", bundle: 'pro' },
      ]
    },
  ],
  jimmy3: [
    {
      name: "Listening & Presence",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The internal posture of being a \"Detective of the Heart\" rather than a \"Judge of the Facts\".",
      inputs: [
        { q: "If I validate them, they'll think they're \"right\" and I'm \"wrong.\"", a: "\"Validation isn't about facts; it's about acknowledging their humanity. We can handle the facts once they feel safe.\"", bundle: 'pro' },
        { q: "Their bids for connection are so small and annoying.", a: "\"These 'small' moments are the bricks that build our house. If I ignore them, the house eventually collapses.\"", bundle: 'pro' },
        { q: "I don't have the energy to be a \"safe harbor\" right now.", a: "\"It's okay to be tired. I will communicate my limit respectfully instead of punishing their need for connection.\"", bundle: 'pro' },
        { q: "They should just be 'strong' and get over their feelings.", a: "\"Vulnerability is the true strength. I am helping us both grow by holding space for these emotions.\"", bundle: 'pro' },
      ]
    },
  ],
  jimmy4: [
    {
      name: "Handling Conflict",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The internal posture needed to move from \"US vs. THEM\" to \"US vs. THE PROBLEM\".",
      inputs: [
        { q: "If I walk away for a break, they'll think I don't care.", a: "\"Leaving a fight to get regulated is an act of love for the relationship. I am protecting us from my own worst impulses.\"", bundle: 'pro' },
        { q: "I have to prove that my facts are right or I'm a failure.", a: "\"My partner's feeling is real regardless of my facts. I can be 'right' and still lose the connection. I choose connection.\"", bundle: 'pro' },
        { q: "Apologizing first makes me the \"submissive\" one in the relationship.", a: "\"Apologizing first is a sign of leadership and maturity. I am the lead repenter on our team.\"", bundle: 'pro' },
        { q: "They should just get over the past; I’ve already changed.", a: "\"Validation is the fastest way to move forward. If I run from their past pain, I keep us stuck in it.\"", bundle: 'pro' },
      ]
    },
  ],
  jimmy5: [
    {
      name: "Nurturing Connection",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The internal posture of a partner who views the relationship as a \"third entity\" that needs constant watering and sunlight.",
      inputs: [
        { q: "I shouldn't have to \"work\" this hard if we truly love each other.", a: "\"Love is the fuel, but intentionality is the engine. Even the best car doesn't run without maintenance.\"", bundle: 'pro' },
        { q: "If I do more chores, I'm just rewarding their laziness.", a: "\"I am serving my partner because I love them, not to 'win' a competition. My initiative builds the trust we both need.\"", bundle: 'pro' },
        { q: "Why should I be the one to initiate the check-in every time?", a: "\"Initiating is an act of leadership. I value our connection more than I value being the 'second' one to care.\"", bundle: 'pro' },
        { q: "They already know I'm grateful; I don't need to say it.", a: "\"Unexpressed gratitude feels like entitlement to the receiver. I choose to make my partner feel valued out-loud.\"", bundle: 'pro' },
      ]
    },
  ],
  jimmy6: [
    {
      name: "Defending Your Worth",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The internal shifts required to move from \"protecting them\" to \"honoring yourself.\"",
      inputs: [
        { q: "If I set this boundary, I’m being \"mean\" or \"abandoning\" them.", a: "\"They abandon me every time they mistreat me. Honoring my limits is an act of love for both of us.\".", bundle: 'pro' },
        { q: "Maybe I really _am_ the problem like they say.", a: "\"They have never once asked themselves that question. That is all I need to know about who is truly interested in growth.\".", bundle: 'pro' },
        { q: "I have to stay to save them from their own pain.", a: "\"I cannot 'out-love' their refusal to heal. I am not a life raft for someone who keeps poking holes in the boat.\".", bundle: 'pro' },
        { q: "I'm too \"needy\" for wanting to be treated with respect.", a: "\"What one person calls 'too needy,' the right person calls 'exactly what I want to give.' Respect is the bare minimum.\".", bundle: 'pro' },
      ]
    },
  ],
  toddv1: [
    {
      name: "Assuming the Burden",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The belief that she should be helping you keep the conversation going. In reality, because you initiated, you must \"start the lawnmower\" by providing 90% of the energy for the first minute.",
      inputs: [
        { q: "It feels awkward and I want to leave.", a: "\"Stay 20 more seconds. Force yourself to live with the nervousness. It's a fractional success just to stay.\"", bundle: 'pro' },
        { q: "I don't know what to say next.", a: "\"Anything is better than silence. Ramble if you have to. Feed the 'conversation baby' until it can walk on its own.\"", bundle: 'pro' },
        { q: "She's not being very talkative.", a: "\"She's probably just as nervous as you are. Assume she wants to talk but doesn't know how yet.\"", bundle: 'pro' },
        { q: "I feel like I'm trying too hard.", a: "\"The only way to be 10% better than the average guy is to take the responsibility for the vibe on your own shoulders.\"", bundle: 'pro' },
        { q: "I'm waiting for a perfect moment to open.", a: "\"There are no perfect moments. Walk over and make a noise. Everything after that is just an experiment.\"", bundle: 'pro' },
      ]
    },
  ],
  toddv2: [
    {
      name: "The Willingness to Offend",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The fear of losing the interaction stops most guys from teasing or negging. You must be willing to \"risk the immediate pain\" of an awkward moment to give yourself an actual chance at sexual tension.",
      inputs: [
        { q: "I'm afraid she'll get angry if I tease her.", a: "\"I'd much rather get rejected or offend someone than hear 'nice to meet you' after another boring conversation.\"", bundle: 'pro' },
        { q: "I don't want to be mean.", a: "\"A neg isn't an insult; it's unintentional honesty. High-value guys state their mind and aren't afraid of a little friction.\"", bundle: 'pro' },
        { q: "I should be nice to her because she's so hot.", a: "\"If all I have is nice behaviors, I will be less trusted and seen as having an agenda. Friction creates attraction.\"", bundle: 'pro' },
        { q: "What if she calls my bluff when I disqualify?", a: "\"If she's willing to let me walk away, the set was already dead. Fundamentally being non-needy is how I win.\"", bundle: 'pro' },
        { q: "I feel like I'm manipulating her.", a: "\"Push-pull and teasing are just giving her a fun experience. It's foreplay. She'll have better sex and a more fun night because of the tension.\"", bundle: 'pro' },
      ]
    },
  ],
  toddv3: [
    {
      name: "The \"Us\" Narrative",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The belief that the conversation is about \"me versus her.\" In reality, the most obsessive connections are built when you create a shared \"Story of Us\" or a \"We\" frame.",
      inputs: [
        { q: "I'm worried about being too cocky.", a: "\"It's not cocky if she's in on the joke. Frame it as 'we' are a cute couple or 'we' are trouble together.\"", bundle: 'pro' },
        { q: "I don't want to tell her too much about myself.", a: "\"Vulnerability is strength. Telling a story about a time you were lost or failed builds Comfort and trust.\"", bundle: 'pro' },
        { q: "I'm waiting for her to ask me something interesting.", a: "\"Lead the way. Offer your perspective first, and she will follow your lead to report to you.\"", bundle: 'pro' },
        { q: "I feel like I'm just 'hitting on' her.", a: "\"You aren't hitting on her; you are interviewing her for the role of 'Future Ex-Wife.' You are the Selector.\"", bundle: 'pro' },
        { q: "What if her 'Blueprint' is totally different from mine?", a: "\"Find the overlap. Even with different backgrounds, you both have dreams and passions. Connect on the emotion, not the fact.\"", bundle: 'pro' },
      ]
    },
  ],
  toddv4: [
    {
      name: "Empathy, Not Sympathy",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The belief that you are being \"pushy\" or \"rude\" by trying to close. In reality, you are a problem solver. Sympathy buys into her excuses; Empathy understands the obstacle and helps her overcome it so you can both have a great time.",
      inputs: [
        { q: "I don't want to be that pushy guy.", a: "\"I owe it to her to be a hard closer. If I'm a high-value guy, she'll have a better night with me than with some other guy who doesn't care about her.\"", bundle: 'pro' },
        { q: "She gave me an objection, so I should stop.", a: "\"Most sales and most dates are only closed after at least three attempts. An objection is just a 'not yet,' not a 'no forever.'\"", bundle: 'pro' },
        { q: "What if she says no and it's awkward?", a: "\"I'd much rather fail by going for it than fail by not trying. I'm proud of myself for giving us an actual chance.\"", bundle: 'pro' },
        { q: "I need her to logically agree before we move.", a: "\"Stop asking for permission. Leadership is assuming the move and letting her follow. 'Sco' game is high-value game.\"", bundle: 'pro' },
        { q: "I'm worried about 'point of no return' flakes.", a: "\"I will take the escalation slow and pull away first. I want her to be the one chasing the resolution, not me.\"", bundle: 'pro' },
      ]
    },
  ],
  toddv5: [
    {
      name: "True Self-Esteem",
      guideFront: "A thought that gets in the way.",
      guideBack: "A way to reset it.",
      description: "The belief that your value depends on her reaction. True self-esteem comes from accepting exactly where you are—flaws and all—and doing the right thing regardless of the result.",
      inputs: [
        { q: "I'm too short/bald/ugly for her.", a: "\"I accept who I am. I'm the best short guy in the world. Rejection is a rejection of the moment, not of me.\"", bundle: 'pro' },
        { q: "I'm afraid of being judged by the group.", a: "\"If I fail by going for it, I can be proud. If I fail by not trying, I'll never know. I choose to give us a chance.\"", bundle: 'pro' },
        { q: "I need this specific girl to like me.", a: "\"I am outcome independent. I want sex, but I'm completely okay if it doesn't happen with her. There's another girl coming.\"", bundle: 'pro' },
        { q: "I'm worried I'll look like a player.", a: "\"If I'm being my honest self and taking risks, I'm an enhancement to her life. A player with heart is a win for her.\"", bundle: 'pro' },
        { q: "I feel like a beginner and it's embarrassing.", a: "\"We were all beginners once. My job is just to walk over and make a noise. Everything else is practice.\"", bundle: 'pro' },
      ]
    },
  ],
  firststrategies: [
    {
      name: "Speaking First",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"I can't think of anything worth saying.\"\n\n**What is true instead:** the bar is one true, ordinary sentence. That is the whole bar.\n\n**Why it feels right:** the remarks you remember other people making are the good ones. You never hear the hundreds of dull ones that worked perfectly well.\n\n**What it costs:** every ordinary remark gets measured against an imagined standard and thrown away, and the silence that follows is far more awkward than the remark would have been.\n\nMindset: nobody remembers the sentence. They remember that someone spoke to them.",
      inputs: [
        { q: "I can't think of anything worth saying.", a: "It doesn't have to be worth saying. \"That queue hasn't moved\" is enough.", bundle: 'free' },
        { q: "They'll think it's a stupid thing to say.", a: "Nobody remembers the sentence. They remember that someone spoke to them.", bundle: 'free' },
        { q: "I'm not a natural at this.", a: "Almost nobody is. The ones who look natural are using about six things on repeat.", bundle: 'free' },
        { q: "If I start it, I'll have to keep it going.", a: "They get a turn too. That's what makes it a conversation and not a speech.", bundle: 'free' },
        { q: "Everyone else finds this easy.", a: "Everyone else is looking at their phone in the queue for exactly the same reason you are.", bundle: 'free' },
        { q: "I'll say something and then have nothing to follow it with.", a: "You won't need one. They answer, and their answer is your next line.", bundle: 'free' },
        { q: "There's nothing in here worth remarking on anyway.", a: "There never is. The remark isn't about the room — it's about starting.", bundle: 'free' },
        { q: "I've left it too long now. It would be strange to speak.", a: "Nobody is timing it. People notice you far less than you think they do.", bundle: 'free' },
      ]
    },
    {
      name: "Questions",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"Asking about them is the polite way in.\"\n\n**What is true instead:** a remark asks for nothing. It can be picked up or let go, and either is fine.\n\n**Why it feels right:** a question does show interest, and interest is exactly what you are trying to show. That part is true.\n\n**What it costs:** a question is also a small demand — an answer, on the spot, from someone who may be tired or busy or shy. And an unanswered question is awkward in a way an unanswered remark never is.\n\nMindset: give first, ask later. The question is better once there is something to be curious about.",
      inputs: [
        { q: "Asking about them is the polite way in.", a: "It's also work for them. A remark lets them choose whether to join.", bundle: 'free' },
        { q: "If I don't ask, I'm making it about me.", a: "One sentence about the room isn't about you. It's about the room.", bundle: 'free' },
        { q: "They didn't answer my question and now it's worse.", a: "That's the risk a question carries. An unanswered remark isn't awkward at all.", bundle: 'free' },
        { q: "I'll ask something to show I'm interested.", a: "Show it by picking up what they've already said. That proves more than a new question.", bundle: 'free' },
        { q: "Statements sound like I'm just talking at them.", a: "Two in a row does. One, then listening, is an opening.", bundle: 'free' },
        { q: "A statement feels blunter than a question.", a: "Blunt is a tone, not a form. \"That queue\" said warmly is not blunt.", bundle: 'free' },
        { q: "What if they don't pick it up?", a: "Then nothing has happened. That is exactly what a remark is for.", bundle: 'free' },
        { q: "Polite people ask questions.", a: "Polite people also let others off. A remark does that; a question can't.", bundle: 'free' },
      ]
    },
    {
      name: "Refusals",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"They'll be hurt if I say no.\"\n\n**What is true instead:** a clear no is a favour. It lets them ask someone else today.\n\n**Why it feels right:** refusing does land on a person, and you can watch it happen. Softening it is an attempt to protect them, not cowardice.\n\n**What it costs:** the softening is what actually costs them. A vague no leaves them waiting, planning around you, and asking again — and you have to say it twice.\n\nMindset: soften the delivery, never the answer. An unclear no is not kindness, it is postponement.",
      inputs: [
        { q: "They'll be hurt if I say no.", a: "They'll be more inconvenienced by a maybe that turns into a no next week.", bundle: 'free' },
        { q: "I need a good enough reason first.", a: "You don't owe a reason. \"I can't this time\" is a complete sentence.", bundle: 'free' },
        { q: "If I explain properly they'll understand.", a: "Every reason you add is something they can solve. Then you're negotiating.", bundle: 'free' },
        { q: "Saying no makes me difficult.", a: "It makes you predictable. People trust a yes more when a no is possible.", bundle: 'free' },
        { q: "I'll just do it, it's easier.", a: "It's easier today. Notice what it costs on Thursday.", bundle: 'free' },
        { q: "They asked me specifically, so it must matter.", a: "It might. That still doesn't make a no unkind — only slower to arrive.", bundle: 'free' },
        { q: "I said yes last time, so I can't say no now.", a: "Last time was last time. A yes isn't a subscription.", bundle: 'free' },
        { q: "I'll say no, but soften it so it barely counts.", a: "Then it isn't a no, and they'll be back on Thursday to ask again.", bundle: 'free' },
      ]
    },
    {
      name: "Modesty",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"They don't really want to hear about my week.\"\n\n**What is true instead:** they asked. A question is an offer, not a formality.\n\n**Why it feels right:** it is modesty, and modesty is a good instinct. Nobody wants to be the person who talks about themselves.\n\n**What it costs:** it puts the whole job on the other person. After two or three closed answers most people conclude you would rather not talk, and stop asking.\n\nMindset: one extra detail is not taking up space. It is the polite half of being asked.",
      inputs: [
        { q: "They don't really want to hear about my week.", a: "They asked. A question is an offer, not a formality.", bundle: 'free' },
        { q: "I don't want to go on about myself.", a: "One detail isn't going on. \"Fine, apart from the drive\" is the whole technique.", bundle: 'free' },
        { q: "Nothing interesting has happened to me.", a: "The printer, the bread, the locked door. Small and true beats interesting.", bundle: 'free' },
        { q: "It's better to ask them back straight away.", a: "Answer first, then ask. Otherwise they're carrying the whole thing alone.", bundle: 'free' },
        { q: "If I say more they'll ask more.", a: "Yes. That's the conversation you said you wanted.", bundle: 'free' },
        { q: "My week has been dull. There's nothing to hand over.", a: "Dull is fine. \"Quiet, which I badly needed\" is a hook.", bundle: 'free' },
        { q: "They're only asking to be polite.", a: "Maybe. Answer properly anyway, and find out which it was.", bundle: 'free' },
        { q: "If I say something real they'll have to respond to it.", a: "One detail isn't a confession. It's a door, and they can walk through it or not.", bundle: 'free' },
      ]
    },
    {
      name: "Favours",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"If I ask, they'll feel they have to say yes.\"\n\n**What is true instead:** you are giving them a choice, not taking one away. Ask plainly and leave the no available.\n\n**Why it feels right:** a request badly made does corner people. The concern is real; it is the conclusion that is wrong.\n\n**What it costs:** hinting instead. It spares you the no and almost never gets you the thing — and the other person either misses it or has to decide without being asked, which is worse for them, not better.\n\nMindset: a no is an answer, not an incident. It is the maybe that is awkward.",
      inputs: [
        { q: "If I ask, they'll feel they have to say yes.", a: "Only if you make it hard to refuse. Ask plainly and leave the no on the table.", bundle: 'free' },
        { q: "I'll drop a hint and see if they offer.", a: "A hint spares you the no. It also almost never gets you the thing.", bundle: 'free' },
        { q: "They're busy. It isn't fair to ask.", a: "They know what they've got on. Let them be the one who decides.", bundle: 'free' },
        { q: "I should have a good reason ready first.", a: "Reasons turn a question into a case. Ask, then stop talking.", bundle: 'free' },
        { q: "I'd rather struggle than put someone out.", a: "You'd help them. The reluctance is about you, not about them.", bundle: 'free' },
        { q: "If they say no it'll be awkward.", a: "A no is an answer, not an incident. It's the maybe that's awkward.", bundle: 'free' },
        { q: "I'll ask for less than I need, to be safe.", a: "Then you'll have to ask twice. Ask for the thing you actually want.", bundle: 'free' },
        { q: "Asking makes me look like I can't cope.", a: "Asking early looks organised. Asking late looks desperate.", bundle: 'free' },
      ]
    },
    {
      name: "Pauses",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"It's gone quiet. I've lost them.\"\n\n**What is true instead:** a pause is where people think. Two seconds is not a verdict.\n\n**Why it feels right:** silence in a conversation is uncomfortable, and only one of you is treating it as a problem — which is exactly why it feels like your job to fix.\n\n**What it costs:** the panic changes the subject, and a change of subject throws away everything already on the table. The thing that would have rescued it was said four minutes ago.\n\nMindset: the gap is not the problem. What you do to escape it is.",
      inputs: [
        { q: "It's gone quiet. I've lost them.", a: "A pause is where people think. Two seconds is not a verdict.", bundle: 'free' },
        { q: "I need a new subject, quickly.", a: "You need an old one. Anything from the last ten minutes is still open.", bundle: 'free' },
        { q: "The silence is my fault.", a: "There are two of you. Neither owes the room a sentence every second.", bundle: 'free' },
        { q: "I'll fill it with anything rather than sit in it.", a: "Anything is how a conversation ends up nowhere. Go back instead.", bundle: 'free' },
        { q: "If I return to something they said, it'll seem odd.", a: "Going back reads as interest. Changing the subject reads as rescue.", bundle: 'free' },
        { q: "They've stopped talking, so they want to leave.", a: "Or they're waiting. Say something back and find out which.", bundle: 'free' },
        { q: "I need a second before I answer that.", a: "Take it out loud. \"So the choice is stay or go\" buys you the second.", bundle: 'free' },
        { q: "Good conversations don't have gaps.", a: "They are mostly gaps. The comfortable ones are what makes them good.", bundle: 'free' },
      ]
    },
  ],
  jfisher1: [
    {
      name: "Hostility",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"I am being attacked, so I must strike back with a poetic zinger to survive and win the moment.\"\n\n• **Hostility is their projection** — their ugly words are about their insecurity, not your worth.\n• **The zinger has a bad aftertaste** — winning an argument with a punch leaves you first up to apologize.\n• **Stay still to stand firm** — when they dig a hole, let them fall in it alone.\n\nMindset: You do not need to prove yourself to a hostile speaker. Protect your peace.",
      inputs: [
        { q: "I must strike back immediately to prove I won the moment.", a: "Hostility is their projection, not my threat. Stay regulated.", bundle: 'pro' },
        { q: "If I don't send a zinger back, I look weak or slow.", a: "Silence is control. It forces them to hear their own words.", bundle: 'pro' },
        { q: "They said something ugly, so they deserve to be hurt.", a: "Zingers leave a bad aftertaste. The goal is to protect your peace.", bundle: 'pro' },
        { q: "I have to convince them that their insult is wrong.", a: "You don't need their agreement to hold your ground.", bundle: 'pro' },
        { q: "If they yell, I have to match their volume to be heard.", a: "Control the pace. Lowering your volume shows real authority.", bundle: 'pro' },
        { q: "I must defend my reputation in front of everyone.", a: "Grounded people don't fear the truth. State it and close the door.", bundle: 'pro' },
        { q: "If I don't respond, they have gained power over me.", a: "Refusing to carry their negative energy is the ultimate power move.", bundle: 'pro' },
        { q: "They are attacking me because I did something wrong.", a: "Their delivery is their responsibility. You own only your reaction.", bundle: 'pro' },
      ]
    },
    {
      name: "Apologies",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"If there is tension, friction, or silence in the room, I must apologize immediately to make it go away.\"\n\n• **Save apologies for intentional mistakes** — over-apologizing for being alive or having boundaries corrodes your self-worth.\n• **Tension is not a failure** — standing firm in your boundaries is kinder than placating a pushy personality.\n• **Spoken gratitude replaces apologies** — replace \"Sorry for my delay\" with \"Thank you for your patience.\"\n\nMindset: Calm confidence does not need to beg for forgiveness for occupying space.",
      inputs: [
        { q: "If there is tension, I must apologize immediately to make it go away.", a: "Save apologies for real, intentional mistakes. Standing firm is kinder.", bundle: 'pro' },
        { q: "I should say sorry for taking up their time or desk space.", a: "Your self-worth is not tied to how little of an inconvenience you make yourself.", bundle: 'pro' },
        { q: "Apologizing is the safest way to de-escalate a hostile client.", a: "Placating an aggressive person only reinforces their bad behavior.", bundle: 'pro' },
        { q: "If I don't apologize, they will think I'm a difficult person.", a: "Being clear is kind. Vague apologies just postpone the boundary.", bundle: 'pro' },
        { q: "I must say sorry for being late even if it was traffic.", a: "Replace the weak apology with spoken gratitude: \"Thank you for waiting.\"", bundle: 'pro' },
        { q: "Saying sorry shows I have high emotional intelligence.", a: "Over-apologizing shows insecurity. Own your space with dignity.", bundle: 'pro' },
        { q: "I should apologize for having a different opinion in a meeting.", a: "Your perspective has value. State it neat without the preface.", bundle: 'pro' },
        { q: "I must apologize for crying or showing stressed emotions.", a: "Don't apologize for what your body does naturally. Label it and carry on.", bundle: 'pro' },
      ]
    },
    {
      name: "Silence",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"A long pause makes me look slow, weak, or incompetent. I must fill every gap instantly.\"\n\n• **Silence is control** — it adds distance between what they said and how you respond.\n• **Let their words fall** — when they walk their words out onto a plank, let them stand there alone.\n• **The gap is where they think** — they get in their head about the silence, not you.\n\nMindset: Confidence is quiet. Insecurity is loud. Let the silence do the work.",
      inputs: [
        { q: "A long pause makes me look slow or weak in a meeting.", a: "Silence is control. It forces them to hear their own words.", bundle: 'pro' },
        { q: "I must answer immediately to show I know what I'm doing.", a: "Let your first word be your breath. Control the pacing.", bundle: 'pro' },
        { q: "If it goes quiet, I have lost the other person.", a: "A pause is where people think. Two seconds is not a verdict.", bundle: 'pro' },
        { q: "I must fill the gap with reasons to justify my answer.", a: "The more words you use, the more you give them to twist.", bundle: 'pro' },
        { q: "Silence is awkward and uncomfortable for me to sit in.", a: "It is uncomfortable for them too. Let them be the first to break it.", bundle: 'pro' },
        { q: "I must change the subject if the conversation stalls.", a: "Look backwards, not forwards. Use an old thread to resume.", bundle: 'pro' },
        { q: "If they don't respond to my text, I must send more.", a: "Sending more text shows panic. Wait 24 hours to let your gut settle.", bundle: 'pro' },
        { q: "I need to explain my joke if nobody laughed.", a: "Never explain the joke. Move on calmly without apology.", bundle: 'pro' },
      ]
    },
    {
      name: "Zingers",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"I must craft a highly poetic, devastating zinger that will completely crush them two days later.\"\n\n• **Zingers leave a bad aftertaste** — they feel good for ten seconds, then leave you wearing the dummy hat.\n• **Be like water** — instead of fighting their force, just push it aside and let it pass like a cloud.\n• **The goal is peace, not victory** — winning an argument with a cutting remark destroys the relationship.\n\nMindset: The true power is showing them that their hostility does not threaten you whatsoever.",
      inputs: [
        { q: "I must send a poetic zinger back to prove I won the moment.", a: "Zingers leave a bad aftertaste. The goal is to protect your peace.", bundle: 'pro' },
        { q: "If I don't crush them with a comeback, they won me.", a: "The only thing you win in a hostile argument is their contempt.", bundle: 'pro' },
        { q: "I want to make them hurt as much as they hurt me.", a: "Protecting your presence is more important than fixing their behavior.", bundle: 'pro' },
        { q: "A clever clapback will make them respect me more.", a: "Respect comes from calm certainty, not emotional combat.", bundle: 'pro' },
        { q: "I must have the last word to prove I am right.", a: "The person who speaks last in a heated argument usually loses.", bundle: 'pro' },
        { q: "If I don't respond with force, they will walk all over me.", a: "Refusing to engage on their level is the ultimate boundary.", bundle: 'pro' },
        { q: "I must prove their logic is completely ridiculous.", a: "Logic does not work on high-conflict identity games. Stand still.", bundle: 'pro' },
        { q: "I want to tell everyone what they said to prove I was right.", a: "Carrying that resentment home means they won your focus. Drop it.", bundle: 'pro' },
      ]
    },
    {
      name: "Speed",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"I must operate on their accelerated timeline and answer immediately to show my competence.\"\n\n• **Operating on their timeline is a trap** — they use speed to bypass your analytical brain.\n• **Your first word is your breath** — slow your words down and turn down the volume.\n• **You have full autonomy** — nobody can force you to say something you are not ready to say.\n\nMindset: Confident people have all the patience in the world. Rushing signals panic.",
      inputs: [
        { q: "I must answer immediately on their accelerated timeline.", a: "Control the pace. Operating on your timeframe shows confidence.", bundle: 'pro' },
        { q: "If they pepper me with questions, I must answer fast.", a: "Let them get the whole question out, pause, then speak.", bundle: 'pro' },
        { q: "Rushing shows I am highly efficient and capable.", a: "Rushing makes you say things you don't mean. Slow it down.", bundle: 'pro' },
        { q: "I must decide right now because they demand an answer.", a: "You always have the right to say, \"I need some time with this.\"", bundle: 'pro' },
        { q: "If I take a long breath, it will feel like an eternity.", a: "To the audience, it barely looks like a breath. Use the pause.", bundle: 'pro' },
        { q: "I must keep up with their rapid-fire energy to stand my ground.", a: "Speak slowly, speak softly. It anchors the room to your tempo.", bundle: 'pro' },
        { q: "If I hesitate, they will think I am hiding something.", a: "Liars want rapid-fire conversation. Truth-tellers have patience.", bundle: 'pro' },
        { q: "I must jump on their comment the second they finish speaking.", a: "Count \"one Mississippi\" in your head before you open your mouth.", bundle: 'pro' },
      ]
    },
  ],
  jfisher2: [
    {
      name: "No-Saying",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"Saying no is unkind, selfish, and will destroy my relationships. I must always say yes to be valued.\"\n\n• **A clear no is a favor** — it gives the other person the chance to find a real, honest solution today.\n• **Softening a no is a trap** — giving long excuses or vague promises just postpones the pain.\n• **Calm confidence is kinder** — you don't need to apologize for occupying space and having limits.\n\nMindset: A clear no is a favor. Softening it just postpones the pain.",
      inputs: [
        { q: "Saying no makes me a difficult and unhelpful person.", a: "A clear no is a favor. Softening it just postpones the pain.", bundle: 'pro' },
        { q: "If I refuse this favor, they will stop liking me.", a: "People trust a yes more when they know a no is possible.", bundle: 'pro' },
        { q: "I need a massive, unarguable reason before I can say no.", a: "You don't owe an excuse. \"I can't this time\" is a complete sentence.", bundle: 'pro' },
        { q: "Softening my refusal with \"maybe\" is the kindest path.", a: "An unclear no is not kindness. It is just postponement.", bundle: 'pro' },
        { q: "I should apologize profusely for having personal limits.", a: "Save apologies for real, intentional mistakes. Standing firm is kinder.", bundle: 'pro' },
        { q: "If I say no to my manager, I will look incompetent.", a: "Saying no early looks organized. Saying no late looks desperate.", bundle: 'pro' },
        { q: "I have to say yes because I said yes last time.", a: "Last time was last time. A yes is not a lifetime subscription.", bundle: 'pro' },
        { q: "Giving three reasons makes my refusal sound more believable.", a: "Every reason you add is a handle they can use to negotiate.", bundle: 'pro' },
      ]
    },
    {
      name: "Asking for Help",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"Asking for help makes me look weak, dependent, or incompetent. I must handle everything alone.\"\n\n• **Help is an act of trust** — it turns a lonely struggle into a collaborative team effort.\n• **Independence can be isolation** — refusing to need others cuts you off from deep connection.\n• **People love to be helpful** — asking for help is an invitation, not an imposition.\n\nMindset: Saying \"I need your help\" turns opponents into teammates.",
      inputs: [
        { q: "Asking for help is admitting that I cannot cope on my own.", a: "Saying \"I need your help\" turns opponents into teammates.", bundle: 'pro' },
        { q: "If I ask for assistance, I am burdening the other person.", a: "People love to be helpful. It is an invitation, not an imposition.", bundle: 'pro' },
        { q: "I should wait until I am drowning before I dare to ask.", a: "Asking early shows self-awareness. Asking late shows panic.", bundle: 'pro' },
        { q: "If they wanted to help me, they would have offered already.", a: "People cannot read your mind. Give them the gift of asking plainly.", bundle: 'pro' },
        { q: "My worth is measured by how much I can carry alone.", a: "Hyper-independence is just isolation in disguise. Trust the team.", bundle: 'pro' },
        { q: "Asking for help makes me look less senior or capable.", a: "Strong leaders build wells of support, not waterfalls of solo effort.", bundle: 'pro' },
        { q: "I'd rather struggle for three hours than take five of their minutes.", a: "Your reluctance is about protecting your ego, not their time.", bundle: 'pro' },
        { q: "If I ask for help, I will owe them a massive debt.", a: "Real collaboration is a circle of support, not a ledger of debts.", bundle: 'pro' },
      ]
    },
    {
      name: "Arguments",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"An argument is a battle that I must win to maintain my status, worth, and authority.\"\n\n• **An argument is a knot** — the goal is to unravel the knot together, not to stand alone on top of the mountain.\n• **Winning an argument loses the relationship** — the only thing you win is their quiet contempt.\n• **The loudest voice is the weakest** — calm certainty is quiet, while insecurity is loud.\n\nMindset: An argument is a knot to unravel, not a war to win.",
      inputs: [
        { q: "I must strike back with a direct zinger to win the argument.", a: "An argument is a knot to unravel, not a war to win.", bundle: 'pro' },
        { q: "The person who has the last word is the one who won.", a: "The person who speaks last usually loses the relationship.", bundle: 'pro' },
        { q: "If I don't raise my voice, they will think I am backing down.", a: "Lowering your volume shows real authority. Speak slowly.", bundle: 'pro' },
        { q: "I must prove their logic is completely ridiculous to win.", a: "Logic does not work on high-conflict identity games. Stand still.", bundle: 'pro' },
        { q: "Winning the point is worth more than their peace of mind.", a: "If you win the point but lose the person, your prize is empty.", bundle: 'pro' },
        { q: "If I apologize for my behavior, I admit defeat in the fight.", a: "Taking ownership of your actions is the ultimate power move.", bundle: 'pro' },
        { q: "I must litigate every detail of their twisted timeline.", a: "The truth does not need an excuse. State it and close the door.", bundle: 'pro' },
        { q: "We must resolve every single detail perfectly right now.", a: "One conversation is rarely enough. Real repair happens over time.", bundle: 'pro' },
      ]
    },
    {
      name: "Rescuing",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"I am personally responsible for fixing other people's negative energy, sadness, or disappointment.\"\n\n• **Protect your presence, not their problem** — you cannot control another person's emotional state.\n• **Tension is not a failure** — standing firm in your boundaries is kinder than placating their mood.\n• **They have their own agency** — let them do their own emotional work rather than carrying it for them.\n\nMindset: Protect your presence, not their problem. You cannot control their mood.",
      inputs: [
        { q: "If my partner is sad, I must have done something wrong.", a: "Protect your presence, not their problem. You cannot control their mood.", bundle: 'pro' },
        { q: "I must apologize immediately to make their anger go away.", a: "Placating an aggressive person only reinforces their bad behavior.", bundle: 'pro' },
        { q: "Their negative energy is a threat to my own safety.", a: "Hostility is their projection, not your threat. Stay regulated.", bundle: 'pro' },
        { q: "If I don't fix their mood, I am an unkind person.", a: "You are giving them a manual on how to treat you, not a remote.", bundle: 'pro' },
        { q: "I should absorb their anxiety to keep our relationship stable.", a: "You cannot find peace by drowning in someone else's storm.", bundle: 'pro' },
        { q: "I must say yes to their demand to make the tension disappear.", a: "A yes you resent is a worse gift than a no you mean.", bundle: 'pro' },
        { q: "I am responsible for how they react to my clear boundary.", a: "They get to choose what to do with their disappointment.", bundle: 'pro' },
        { q: "If they go silent on me, I must crawl back and apologize.", a: "Silence is their choice. Stand still and protect your presence.", bundle: 'pro' },
      ]
    },
    {
      name: "Patience",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"If we have a conflict, we must solve everything perfectly right now, or our connection is broken.\"\n\n• **Repair happens over time** — real repair happens in a hundred small moments, not one heated marathon talk.\n• **Slowing down is your defense** — pushy people use accelerated timelines to bypass your analytical brain.\n• **Take a timeout early** — walking away to reset is an act of responsibility, not abandonment.\n\nMindset: One conversation is rarely enough. Real repair happens in a hundred small moments.",
      inputs: [
        { q: "We must talk this out at midnight even if we are exhausted.", a: "One conversation is rarely enough. Real repair happens in a hundred small moments.", bundle: 'pro' },
        { q: "If we take a break, it means we are giving up on each other.", a: "Taking a timeout is taking responsibility for how you show up.", bundle: 'pro' },
        { q: "I must answer their rapid-fire questions instantly on the spot.", a: "Control the pace. Operating on your timeframe shows confidence.", bundle: 'pro' },
        { q: "If the relationship is healthy, we should never have ruptures.", a: "Ruptures are normal. The gold standard is how you repair them.", bundle: 'pro' },
        { q: "I must find the perfect words to resolve this conflict forever.", a: "There are no magic words. Focus on regulating your body first.", bundle: 'pro' },
        { q: "If we don't agree right now, our connection is permanently damaged.", a: "We don't have to agree on how to get there. Just align on the goal.", bundle: 'pro' },
        { q: "I must explain my whole history to make them understand.", a: "The more words you use, the more you water down the truth.", bundle: 'pro' },
        { q: "If they don't change their behavior today, I have failed.", a: "Evolving takes time. Give them the grace of a slower runway.", bundle: 'pro' },
      ]
    },
  ],
  talkingaboutyourself: [
    {
      name: "Just Being Polite",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"They only asked to be polite. It would be greedy to actually answer.\"\n\n**What is true instead:** a question is an offer, and taking someone up on it is the polite thing rather than the greedy one.\n\n**Why it feels right:** some questions are formalities, and answering a corridor \"how are you\" with four minutes is a real mistake. It is a good rule applied far too widely.\n\n**What it costs:** the four-word answer teaches them you would rather not be asked. They stop asking, which seems to prove the belief.\n\nMindset: a question is an offer. Take it.",
      inputs: [
        { q: "They're only asking to be polite.", a: "Maybe. Answer properly and find out — that's how the polite version becomes a real one.", bundle: 'pro' },
        { q: "They don't want to hear about my week.", a: "They asked about your week. Start there and watch what happens.", bundle: 'pro' },
        { q: "I'd be taking up their time.", a: "One detail is four seconds. The awkward pause after \"fine\" is longer.", bundle: 'pro' },
        { q: "They'll ask again if they really want to know.", a: "They won't. Two closed answers and most people conclude you'd rather not.", bundle: 'pro' },
        { q: "It's more polite to ask them back straight away.", a: "Answer first, then ask. Otherwise they're carrying the whole conversation.", bundle: 'pro' },
        { q: "Nobody actually wants to hear the answer to \"how are you\".", a: "Some don't. The ones who stopped walking do.", bundle: 'pro' },
        { q: "I'd be making it about me.", a: "They aimed the question at you. Answering it isn't a hijack.", bundle: 'pro' },
        { q: "If I answer properly it'll be a whole thing.", a: "One sentence isn't a whole thing. You get to choose the size.", bundle: 'pro' },
      ]
    },
    {
      name: "The Bar for an Answer",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"An ordinary week isn't worth reporting. I need something better.\"\n\n**What is true instead:** the standard is true and specific, not interesting. They are finding out what you are like, and a detail does that better than scale.\n\n**Why it feels right:** other people's answers sound better than yours. What you have not noticed is how ordinary their content was.\n\n**What it costs:** the search for something impressive is what produces the pause, and then \"not much\".\n\nMindset: the standard is true and specific. Nobody has ever been bored by a detail.",
      inputs: [
        { q: "Nothing interesting has happened to me.", a: "The wardrobe, the bike, the terrible series. Ordinary and specific is the whole trick.", bundle: 'pro' },
        { q: "My life sounds dull said out loud.", a: "Said vaguely, everyone's does. Said specifically, almost nobody's does.", bundle: 'pro' },
        { q: "They've got much better stories.", a: "They're not stories. They're just details, and you have exactly as many as they do.", bundle: 'pro' },
        { q: "I should have something better to say.", a: "Better than true? There isn't a category above that one.", bundle: 'pro' },
        { q: "I'll wait until I've got something worth telling.", a: "You'll wait a long time, and be quiet the whole way.", bundle: 'pro' },
        { q: "They'll think my week sounds sad.", a: "Vague weeks sound sad. Specific ones sound like a person.", bundle: 'pro' },
        { q: "I need to make this sound better than it was.", a: "The inflated version is the one that falls flat. It's the only one they can hear you doing.", bundle: 'pro' },
        { q: "There's nothing in my week they could possibly ask about.", a: "Name one object you touched. That's the handle.", bundle: 'pro' },
      ]
    },
    {
      name: "Always the Asker",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"I'd rather hear about them. I'm just a good listener.\"\n\n**What is true instead:** asking is half of it. People become close by taking turns at being known, and being listened to is something you are allowed as well.\n\n**Why it feels right:** it is genuinely more comfortable, it is genuinely generous, and it is genuinely a strength. All of that is true, which is exactly what makes it such an effective place to hide.\n\n**What it costs:** someone who only ever asks is unknowable, however warm they are. The friendship stalls at a certain depth and neither person can say why.\n\nMindset: asking is half of it. Being answerable is the other half.",
      inputs: [
        { q: "I'd rather hear about them.", a: "Usually true, and it's also the most comfortable place to hide.", bundle: 'pro' },
        { q: "I'm just a good listener.", a: "You are. Being listened to is a thing you're allowed as well.", bundle: 'pro' },
        { q: "They don't need to know all that about me.", a: "Not all of it. Some of it is how this becomes a friendship rather than a habit.", bundle: 'pro' },
        { q: "Talking about myself feels self-indulgent.", a: "It's how they get to know you. That's not indulgence, it's your half of the work.", bundle: 'pro' },
        { q: "I've never been the sort who opens up.", a: "One detail at a time is how everyone who does it started.", bundle: 'pro' },
        { q: "Asking questions is what I'm good at.", a: "It is. It's also a very effective way of never being asked one.", bundle: 'pro' },
        { q: "They haven't asked, so they don't want to know.", a: "You've trained them not to. Go first once and see.", bundle: 'pro' },
        { q: "If I start talking about myself I won't know when to stop.", a: "One detail, then hand it back. The rule is the same as it is for them.", bundle: 'pro' },
      ]
    },
    {
      name: "All or Nothing",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"Being honest means telling them everything. So it's either guarded or wide open.\"\n\n**What is true instead:** conversations get deeper in steps, taken by both people. One level below what they offered is honest, not a half-measure.\n\n**Why it feels right:** the extremes are easier to execute. Reading what somebody offered is a judgement, and judgements can be got wrong.\n\n**What it costs:** both failures at once — too little with the people who matter, and far too much with someone met an hour ago.\n\nMindset: one step below what they gave. Not five, and not none.",
      inputs: [
        { q: "If I'm going to be honest I should say all of it.", a: "Honest and complete aren't the same. One step below their level is honest.", bundle: 'pro' },
        { q: "They shared something big so I should match it exactly.", a: "Or say you're listening rather than trading. That's a match too.", bundle: 'pro' },
        { q: "Holding anything back is a kind of lying.", a: "It's timing. The rest is still available next month.", bundle: 'pro' },
        { q: "I told them too much and now it's strange.", a: "Say so lightly and carry on. \"That was more than I meant to say\" fixes most of it.", bundle: 'pro' },
        { q: "They gave me a light answer, so they don't like me.", a: "They gave you a corridor answer to a corridor question. That's all it means.", bundle: 'pro' },
        { q: "I don't know how deep is too deep.", a: "Look at what they just gave you. One step under that.", bundle: 'pro' },
        { q: "If I don't say it now I never will.", a: "You will. This isn't the last conversation you'll ever have with them.", bundle: 'pro' },
        { q: "Being guarded is safer than getting it wrong.", a: "Safer, and it costs you every friendship that would have gone further.", bundle: 'pro' },
      ]
    },
  ],
  startingconversations1: [
    {
      name: "The Bar You Set",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"I can't say that — it's too obvious.\"\n\n**What is true instead:** an opener is not judged as a remark, it is judged as an invitation. \"Busy in here today\" works precisely because it asks nothing of the other person.\n\n**Why it feels right:** the openers you remember other people using are the good ones. You never notice the hundreds of dull ones that worked perfectly well.\n\n**What it costs:** most people who struggle to open conversations are not short of words. They are rejecting the words they have, and then standing in a silence that is far more uncomfortable than the ordinary sentence would have been.\n\nMindset: say the obvious thing. It is doing a different job than you think.",
      inputs: [
        { q: "That's such a boring thing to say.", a: "It is. That's why it's easy to answer, which is the whole point.", bundle: 'pro' },
        { q: "They'll think I'm stating the obvious.", a: "You are. Everyone opens this way, including the people you think are good at it.", bundle: 'pro' },
        { q: "I should say something they'll find interesting.", a: "Later, maybe. First you just need them to say something back.", bundle: 'pro' },
        { q: "I need a better opener than the weather.", a: "The weather has started more conversations than every clever line ever written.", bundle: 'pro' },
        { q: "If I can't think of anything good I shouldn't speak.", a: "Then most conversations would never happen. Say the ordinary thing.", bundle: 'pro' },
        { q: "Everyone else seems to open with something clever.", a: "They don't. You only remember the ones that were.", bundle: 'pro' },
        { q: "I'll wait until I think of something better.", a: "Nothing better arrives. The waiting is the awkward part, not the sentence.", bundle: 'pro' },
        { q: "A comment about the queue isn't a conversation.", a: "No, it's an invitation. The conversation is what they do with it.", bundle: 'pro' },
      ]
    },
    {
      name: "Reading a Short Reply",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"They only gave me three words, so they don't want to talk.\"\n\n**What is true instead:** they gave you as much as your opener asked for. Most first replies are short, and a slightly bigger second move often gets a bigger reply.\n\n**Why it feels right:** a short answer genuinely can mean no. The mistake is treating one piece of evidence as a conclusion.\n\n**What it costs:** it ends conversations at the moment they were about to start, and teaches you that you are bad at this when nothing unusual happened.\n\nMindset: one flat reply means nothing. Two means something.",
      inputs: [
        { q: "They only said \"yeah\". That means they don't want to talk.", a: "Or it means \"yeah\". Try one more thing before you decide.", bundle: 'pro' },
        { q: "I've made it awkward now.", a: "You've said one sentence to someone in a queue. Nobody is thinking about it.", bundle: 'pro' },
        { q: "They're clearly not interested.", a: "Maybe. You've got one piece of evidence. Get a second.", bundle: 'pro' },
        { q: "I should stop before this gets embarrassing.", a: "Nothing embarrassing has happened. A short answer is the most normal thing there is.", bundle: 'pro' },
        { q: "They answered and then looked away.", a: "People look away. It isn't a verdict on you.", bundle: 'pro' },
        { q: "If they wanted to talk they'd have said more.", a: "They'd have to know it was on offer. That's what the second move is for.", bundle: 'pro' },
        { q: "I got one word, so I'll get one word again.", a: "Not if the next thing needs more than one. Ask something a \"yeah\" can't cover.", bundle: 'pro' },
        { q: "Two flat replies — now I really should stop.", a: "Yes. That one's a real answer. Leave it warmly and it costs nothing.", bundle: 'pro' },
      ]
    },
    {
      name: "Permission",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"I don't have a good enough reason to speak to them.\"\n\n**What is true instead:** in almost every everyday setting you do not need one. Queues, waiting rooms, courses, lifts and gyms are places where a passing exchange is ordinary.\n\n**Why it feels right:** speaking to a stranger is an intrusion in some settings, so the instinct to check is a social one. It is just calibrated far too cautiously.\n\n**What it costs:** the hesitation is not about what to say. It is about whether you are allowed to, and that question has no answer, so it can be asked forever.\n\nMindset: you do not need a reason. Being in the same place is the reason.",
      inputs: [
        { q: "I don't have a good enough reason to talk to them.", a: "You're both standing in the same queue. That has always been reason enough.", bundle: 'pro' },
        { q: "They didn't ask to be spoken to.", a: "True of every conversation that has ever started.", bundle: 'pro' },
        { q: "I'd be interrupting them.", a: "Then keep it small and let them end it. That's what a greeting is for.", bundle: 'pro' },
        { q: "What if they think I want something?", a: "Then they'll find out you don't, in about four seconds.", bundle: 'pro' },
        { q: "It's weird to just start talking to someone.", a: "It's the most ordinary thing people do. It only feels weird from the inside.", bundle: 'pro' },
        { q: "I'm not the sort of person who does this.", a: "Nobody is, until the third time. It's a habit, not a personality.", bundle: 'pro' },
        { q: "They're clearly not here to make friends.", a: "Neither are you. A thirty-second exchange isn't friendship.", bundle: 'pro' },
        { q: "I'd need an excuse — something to ask them.", a: "You've got one: whatever you are both standing in.", bundle: 'pro' },
      ]
    },
    {
      name: "What It Would Cost",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"What if it goes badly?\"\n\n**What is true instead:** count the actual cost. The worst realistic outcome is a short reply and a return to your own thoughts, from someone who will not remember it by lunchtime.\n\n**Why it feels right:** the fear is not of a bad conversation but of a moment of exposure, and that moment is genuinely uncomfortable while it lasts.\n\n**What it costs:** a few seconds of discomfort avoided, against every conversation that would have started. A bad trade, made many times a week.\n\nMindset: the downside is a few seconds. The upside is everything that comes after.",
      inputs: [
        { q: "What if it goes badly?", a: "Then you stood in a queue having said one sentence. That's the whole cost.", bundle: 'pro' },
        { q: "I'll feel stupid.", a: "For about a minute, and only you will know.", bundle: 'pro' },
        { q: "They'll remember it and it'll be awkward next time.", a: "They won't remember it. You will, and only you.", bundle: 'pro' },
        { q: "It's not worth the risk.", a: "Count the risk out loud. Ten seconds of mild discomfort, at the very worst.", bundle: 'pro' },
        { q: "I'd rather not put myself through it.", a: "Fair, sometimes. But do it once today and notice how little actually happens.", bundle: 'pro' },
        { q: "Other people will see it go wrong.", a: "Nobody is watching. Everyone is thinking about their own queue.", bundle: 'pro' },
        { q: "If it fails I'll have to stand next to them anyway.", a: "For four minutes, having said one friendly thing. That's survivable.", bundle: 'pro' },
        { q: "I've had it go badly before and it was horrible.", a: "And the week after, nobody mentioned it. That's the actual size of it.", bundle: 'pro' },
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
  showunderstanding: [
    {
      name: "Understanding as Agreement",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"If I say I understand, I've agreed with them.\"\n\n**What is true instead:** you can reflect somebody's position back perfectly and disagree with it a minute later. They will take the disagreement better for having been understood first.\n\n**Why it feels right:** in an argument the first person to concede loses ground, and a loop sounds like a concession. It is a receipt, not a concession.\n\n**What it costs:** you stop showing understanding exactly where it matters most, and the conversation becomes two people explaining.\n\nMindset: understanding is not a concession. It is the thing that makes the disagreement worth having.",
      inputs: [
        { q: "If I say I understand, it sounds like I'm agreeing.", a: "I can understand it completely and still say no in the next sentence.", bundle: 'pro' },
        { q: "Reflecting their point back gives them ammunition.", a: "It gives them a receipt. Nobody has ever won an argument by proving they weren't listening.", bundle: 'pro' },
        { q: "If I loop this back, I'll have conceded the point.", a: "Saying what someone thinks isn't the same as thinking it.", bundle: 'pro' },
        { q: "I don't want to encourage them by seeming sympathetic.", a: "They'll stop repeating it once it's landed. Being ignored is what makes people repeat things.", bundle: 'pro' },
        { q: "Understanding without helping is useless.", a: "Being understood is the help, most of the time. It isn't a consolation prize.", bundle: 'pro' },
        { q: "I need something clever to say or there's no point saying anything.", a: "A rephrase in my own words does more than anything clever would.", bundle: 'pro' },
        { q: "If I agree they've had a hard time, I'm admitting I got it wrong.", a: "Two things can be true. Their week was hard and my decision was right.", bundle: 'pro' },
        { q: "I'll understand them once they've understood me.", a: "Somebody has to go first, and going first is cheaper than it looks.", bundle: 'pro' },
      ]
    },
    {
      name: "Doing Too Much",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"The more of these moves I use, the more understanding I'm being.\"\n\n**What is true instead:** one move, then wait. The silence after it is the space where the other person decides whether to go further.\n\n**Why it feels right:** each move is good on its own, so three sounds better than one. And the pause feels long from your side in a way it does not from theirs.\n\n**What it costs:** a loop, a question and your own story in one breath is not three times the understanding. It is a performance, and it leaves them nowhere to go.\n\nMindset: one move, then wait. Two seconds is not awkward. It is somebody deciding whether to say the real thing.",
      inputs: [
        { q: "I want to reflect, ask and relate all at once.", a: "One of them. Then wait. The pause is part of the move.", bundle: 'pro' },
        { q: "I stacked two questions and they answered the easier one.", a: "One question. Ask two and I've chosen the one they'll dodge.", bundle: 'pro' },
        { q: "I reflected something back and immediately kept talking.", a: "Leave the space. That's where they say the real thing.", bundle: 'pro' },
        { q: "I can feel the silence and I want to fill it.", a: "Two seconds isn't awkward. It's them deciding whether to go further.", bundle: 'pro' },
        { q: "One sentence doesn't feel like enough of a response.", a: "It's more than they usually get. Most people don't get one.", bundle: 'pro' },
        { q: "If I only ask one thing, I'll miss the important part.", a: "They'll get to it. The second thing they say is usually the real one.", bundle: 'pro' },
        { q: "A short answer from me looks like I don't care.", a: "Short and accurate reads as care. Long and general reads as filling time.", bundle: 'pro' },
        { q: "I've got three good responses and I don't want to waste two.", a: "They keep. The conversation isn't over after one turn.", bundle: 'pro' },
      ]
    },
    {
      name: "Going Through the Motions",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"If I use the technique correctly, that counts as listening.\"\n\n**What is true instead:** the words are nearly identical either way, and the difference still comes through. People can tell whether you wanted the answer.\n\n**Why it feels right:** the technique is the hard part to learn, so learning it feels like arriving. And it works — until it runs without you behind it.\n\n**What it costs:** a question you do not listen to the answer of establishes that your questions mean nothing.\n\nMindset: if you are not actually curious, a plain \"that sounds hard\" beats a well-executed technique.",
      inputs: [
        { q: "I asked a follow-up and realise I didn't hear the answer.", a: "Then the question was for me, not them. Ask again and mean it.", bundle: 'pro' },
        { q: "My loop was accurate and came out cold.", a: "Accurate isn't the point. Would I say it that way to someone I like?", bundle: 'pro' },
        { q: "I related with a story I wanted to tell anyway.", a: "That's my turn dressed as listening. Save it.", bundle: 'pro' },
        { q: "I'm not actually curious about this topic.", a: "Then say the honest small thing. \"That sounds hard\" beats a technique.", bundle: 'pro' },
        { q: "I'm working out my next move while they're still talking.", a: "There's no next move to plan. It comes out of what they say.", bundle: 'pro' },
        { q: "I know the formula, so I don't need to concentrate.", a: "The formula is the easy half. The listening is the half that shows.", bundle: 'pro' },
        { q: "I did all three moves and it still went flat.", a: "Then none of them were aimed at them. Technique doesn't survive being on autopilot.", bundle: 'pro' },
        { q: "I'm tired and I don't have the attention for this right now.", a: "Say so. \"I want to hear this properly — can we do it after dinner?\" is honest listening.", bundle: 'pro' },
      ]
    },
    {
      name: "The Pull to Relate",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"Telling them about my version is how I show I understand.\"\n\n**What is true instead:** sometimes it is, and it is the warmest of the three when it lands. But the pull arrives disguised as empathy, and earliest when the match is best.\n\n**Why it feels right:** you have been there, and saying so does help — once they have finished. The timing is the difficulty, not the intention.\n\n**What it costs:** somebody still being heard hears it as the moment the conversation stopped being about them, and quietly winds the story up early.\n\nMindset: two sentences, then hand it back. Connection, not comparison — and never \"the same thing happened to me but worse\".",
      inputs: [
        { q: "My version is getting longer than theirs was.", a: "Cut it to two sentences and hand it back. It's a nod, not a turn.", bundle: 'pro' },
        { q: "I want to tell my story more than I want to hear theirs.", a: "That's the signal to wait. Relating that serves me isn't relating.", bundle: 'pro' },
        { q: "I'm about to say my version was worse.", a: "That's competing, not connecting. Everyone can hear the difference.", bundle: 'pro' },
        { q: "They haven't finished and I have a perfect match ready.", a: "It'll still be true in two minutes. Let them finish first.", bundle: 'pro' },
        { q: "If I don't say it now I'll lose the moment.", a: "If it only works right now, it was for me.", bundle: 'pro' },
        { q: "My experience would genuinely help them.", a: "Then it'll help more after they've been understood. Advice lands on cleared ground.", bundle: 'pro' },
        { q: "Staying quiet about mine feels dishonest, like I'm holding back.", a: "Holding back for two minutes isn't dishonesty. It's timing.", bundle: 'pro' },
        { q: "They asked me directly whether I've been through it.", a: "Then answer — briefly, and hand it straight back with a question.", bundle: 'pro' },
      ]
    },
  ],
  exploringatopic: [
    {
      name: "Whose Job It Is",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"Somebody else will keep this going.\"\n\n**What is true instead:** every move you make either feeds the topic or ends it. There is no neutral turn, and a nod is a turn.\n\n**Why it feels right:** somebody usually does keep it going, so the belief mostly survives contact with reality. It only fails in the rooms where everyone is thinking it.\n\n**What it costs:** the conversations that die are the ones where four people were all waiting for a fifth. Nobody notices they did it, because nothing happened.\n\nMindset: every move you make either feeds the topic or ends it.",
      inputs: [
        { q: "Someone else will keep this going.", a: "Everyone at the table is thinking that. That's how a good subject dies.", bundle: 'pro' },
        { q: "I don't need something impressive to say.", a: "Right — it isn't a competition for the best story. Keeping it going is the contribution.", bundle: 'pro' },
        { q: "I'd rather move to a subject I'm better at.", a: "Jumping topics is the easy escape. There's more in this one if I look.", bundle: 'pro' },
        { q: "The conversation is dying and I've frozen.", a: "One question or one small story restarts it. It doesn't have to be clever.", bundle: 'pro' },
        { q: "If I say nothing, nothing is lost.", a: "A silent turn is still a turn. It just ends where it started.", bundle: 'pro' },
        { q: "I'm not the host, it isn't my job.", a: "There is no host. It's four people and whoever speaks next.", bundle: 'pro' },
        { q: "I said something and it went nowhere.", a: "Half of them do. The ones that land are why the other half were worth saying.", bundle: 'pro' },
        { q: "Everyone else seems better at this.", a: "They're using five moves on repeat. You've got the same five.", bundle: 'pro' },
      ]
    },
    {
      name: "Not Knowing",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"I can't join in — I don't know anything about this.\"\n\n**What is true instead:** knowledge is not the entry ticket. Curiosity is a full contribution, and the people who do know are usually glad to be asked.\n\n**Why it feels right:** in a room of enthusiasts it genuinely feels as if there is a level of knowledge you need to reach before you are allowed a turn.\n\n**What it costs:** you sit out whole conversations waiting for a subject you own, and the waiting reads from outside as boredom.\n\nMindset: not knowing is not a reason to be silent. It is a reason to ask.",
      inputs: [
        { q: "The group is talking about something I know nothing about.", a: "Not knowing isn't a reason to be silent. It's a reason to ask.", bundle: 'pro' },
        { q: "My question will sound stupid.", a: "People like explaining the thing they're into. The basic question is usually welcome.", bundle: 'pro' },
        { q: "I feel like an outsider in this conversation.", a: "One question puts me in it. I don't have to earn my way in with facts.", bundle: 'pro' },
        { q: "I'll wait for a subject I know before I speak.", a: "If I only speak on my own topics, I'm barely in the conversation.", bundle: 'pro' },
        { q: "They'll have to stop and explain it to me.", a: "They'd rather do that than have me sit there silently.", bundle: 'pro' },
        { q: "I've been quiet so long it would be strange to speak now.", a: "Nobody is tracking it. Ask the thing you've been wondering.", bundle: 'pro' },
        { q: "I might ask something they've already covered.", a: "Then they'll say so, in one sentence, and the subject is still moving.", bundle: 'pro' },
        { q: "I can't tell if what they're saying is right.", a: "You don't need to. You need to be interested, which you are.", bundle: 'pro' },
      ]
    },
    {
      name: "Too Small to Say",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"My version isn't worth telling.\"\n\n**What is true instead:** your piece does not have to be dramatic, funny, or better than theirs. It only has to be related, and small ordinary experiences are what most good conversations are made of.\n\n**Why it feels right:** the contributions you remember other people making were the good ones. You never notice the hundreds of ordinary ones that kept the evening going.\n\n**What it costs:** the search for something worth telling takes longer than the telling would have, and it usually ends in you saying nothing.\n\nMindset: small and specific beats big and vague.",
      inputs: [
        { q: "My story isn't interesting enough.", a: "Ordinary is fine. Most of a good conversation is small stuff, told warmly.", bundle: 'pro' },
        { q: "Someone just told a much better one.", a: "It's not a ranking. Mine only has to be related, not better.", bundle: 'pro' },
        { q: "I need a punchline before I can share this.", a: "A detail is enough. The point is joining in, not performing.", bundle: 'pro' },
        { q: "My experience is too small to mention.", a: "Small experiences are relatable, which is worth more here than impressive ones.", bundle: 'pro' },
        { q: "It'll sound like I'm making it about me.", a: "One related thing, then a question. That's not taking over.", bundle: 'pro' },
        { q: "I'd be repeating what someone already said.", a: "Then say so and add your bit. \"Same here, except—\" is a whole contribution.", bundle: 'pro' },
        { q: "My story doesn't have an ending.", a: "Very few do. Say the part you remember and stop.", bundle: 'pro' },
        { q: "I'll wait until I've got something better.", a: "Nothing better arrives, and the topic will have moved on.", bundle: 'pro' },
      ]
    },
    {
      name: "Giving It Away",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"If I hand the topic over, I lose it.\"\n\n**What is true instead:** holding the floor is not winning, and handing it over is not losing. The conversation people remember well is the one that got shared out.\n\n**Why it feels right:** it is genuinely enjoyable to be the one talking, and a subject you are good at is a rare chance to be that person.\n\n**What it costs:** everyone else stops contributing, and then it stops being a conversation and becomes a talk with an audience who cannot leave.\n\nMindset: giving the topic away keeps it alive. It comes back richer than you left it.",
      inputs: [
        { q: "I'm enjoying having the floor and I want to keep going.", a: "Holding the floor isn't winning. The best conversations get passed around.", bundle: 'pro' },
        { q: "Handing over the topic means losing it.", a: "Giving it away keeps it alive. It comes back richer than I left it.", bundle: 'pro' },
        { q: "I think I've been talking too much.", a: "Easy fix. One question and the balance is back.", bundle: 'pro' },
        { q: "Someone has said nothing and I've said nothing about it.", a: "Opening a door for one quiet person can change the whole table.", bundle: 'pro' },
        { q: "If I stop, the conversation will stop.", a: "It won't. It'll go somewhere you couldn't have taken it.", bundle: 'pro' },
        { q: "Nobody else seems to want a turn.", a: "An open question is easy to dodge. Use a name.", bundle: 'pro' },
        { q: "I've got one more thing and then I'll stop.", a: "That's the sentence that turns three minutes into six.", bundle: 'pro' },
        { q: "They asked, so they must want the long version.", a: "Give the short one and offer the long one. Then it's their choice.", bundle: 'pro' },
      ]
    },
    {
      name: "Staying On Topic",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"If I mention anything that isn't strictly this, I'm changing the subject.\"\n\n**What is true instead:** a topic is a room with doors in it. Gardening has indoor plants next door, football has watching next door. Walking through one is expanding, not leaving.\n\n**Why it feels right:** the man who genuinely hijacks conversations is annoying, and nobody wants to be him. So the rule gets set far too tight.\n\n**What it costs:** you sit in a thread that ran out four exchanges ago, while the only thing that could have saved it was the sentence you vetoed.\n\nMindset: reach for the next room before you leave the house.",
      inputs: [
        { q: "That's not quite what we're talking about, so I won't say it.", a: "If they'd follow it without asking what you mean, it's the same topic.", bundle: 'pro' },
        { q: "I'd be dragging it somewhere else.", a: "There's a difference between the next room and the next house. Check which one it is.", bundle: 'pro' },
        { q: "The subject has clearly run out.", a: "Most of them haven't. They've just run out in the exact spot everyone is standing.", bundle: 'pro' },
        { q: "Someone else should introduce a new angle.", a: "The angle you vetoed was the new angle.", bundle: 'pro' },
        { q: "My thought is only loosely connected.", a: "Then say the connection out loud. \"This is sideways, but —\" and it's allowed.", bundle: 'pro' },
        { q: "I'd be steering it towards my own thing.", a: "Only if you keep it. Step sideways and hand it straight over.", bundle: 'pro' },
        { q: "A good conversation stays where it started.", a: "A good conversation ends nowhere near where it started. It just gets there one room at a time.", bundle: 'pro' },
        { q: "If I get it wrong they'll have to ask what I mean.", a: "That's the actual test, and it's a cheap one to fail. They ask, you explain, nothing breaks.", bundle: 'pro' },
      ]
    },
  ],
  changingtopics: [
    {
      name: "Steering Feels Rude",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"Changing the subject is rude. I should let them finish properly.\"\n\n**What is true instead:** steering is a service, not a hijack. Guiding a conversation somewhere better is something both people benefit from, and somebody has to do it.\n\n**Why it feels right:** interrupting IS rude, and the two feel similar from the inside. But an interruption takes the turn away; a topic change happens between turns.\n\n**What it costs:** you sit through dead topics out of politeness, and so do they — two people being polite at each other while an evening goes nowhere.\n\nMindset: steering is not rude. Keeping a dead topic alive out of politeness helps nobody.",
      inputs: [
        { q: "It feels rude to change the subject.", a: "Steering isn't rude. Keeping a dead topic alive out of politeness helps no one.", bundle: 'pro' },
        { q: "They haven't finished, so I should wait.", a: "They have finished. That's why there's a pause you're standing in.", bundle: 'pro' },
        { q: "If I switch they'll think I wasn't interested.", a: "Then acknowledge it first. One short sentence fixes that entirely.", bundle: 'pro' },
        { q: "Someone else should be the one to move it on.", a: "They're waiting for you. That's usually how a conversation stalls.", bundle: 'pro' },
        { q: "My switch landed a bit awkwardly and I feel embarrassed.", a: "One clunky transition isn't a disaster. Smile and carry on.", bundle: 'pro' },
        { q: "They'll notice I'm changing the subject.", a: "So what if they notice? A warm, open switch reads as confidence, not evasion.", bundle: 'pro' },
        { q: "It's their conversation, not mine.", a: "It's a conversation. It belongs to whoever speaks next.", bundle: 'pro' },
        { q: "Changing it will look like I want to leave.", a: "Opening a new subject is the opposite of leaving.", bundle: 'pro' },
      ]
    },
    {
      name: "The Perfect Bridge",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"I can't change the subject until I think of a smooth way in.\"\n\n**What is true instead:** \"by the way\" is a complete sentence. A flagged switch is honest and usually gets a laugh; only an unflagged one is jarring.\n\n**Why it feels right:** the smoothest switches genuinely are the linked ones, and it is satisfying to find the word that turns a conversation. When there is one to find, it is worth using.\n\n**What it costs:** the search takes longer than the silence you were trying to avoid, and the bridge you eventually construct sounds constructed.\n\nMindset: a bridge is nicer when there is one. There is no rule that says there has to be.",
      inputs: [
        { q: "I can't think of a clever bridge, so I'll stay stuck.", a: "I don't need a perfect bridge. \"By the way\" is a complete sentence.", bundle: 'pro' },
        { q: "A random switch will sound clumsy.", a: "Not if you flag it. An unflagged jump is jarring; a flagged one is just honest.", bundle: 'pro' },
        { q: "There must be something in what they said I can use.", a: "Sometimes there genuinely isn't. Three words and a shrug is not a bridge.", bundle: 'pro' },
        { q: "I'll wait for a natural gap.", a: "Sometimes you make the gap. Waiting forever is just avoiding the move.", bundle: 'pro' },
        { q: "I found a link but it's a bit of a stretch.", a: "Then it'll sound like a stretch. Say \"completely unrelated\" instead — it's warmer.", bundle: 'pro' },
        { q: "Good conversationalists always find the smooth link.", a: "They also say \"anyway\" a lot. You just don't notice it.", bundle: 'pro' },
        { q: "If I flag the switch it draws attention to it.", a: "It draws attention to you being relaxed about it. That's different.", bundle: 'pro' },
        { q: "I've been searching for a way in for ten seconds.", a: "That's nine seconds longer than \"right, new subject\" would have taken.", bundle: 'pro' },
      ]
    },
    {
      name: "Leaving Them In It",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"Moving the subject on would look like I don't care.\"\n\n**What is true instead:** redirecting gently IS the caring move. You are sparing them, not dodging them — and staying in a subject somebody is struggling with does not help them out of it.\n\n**Why it feels right:** leaving too fast really can read as callous, and the fear is a decent instinct. The fix is the acknowledgement, not staying put.\n\n**What it costs:** you both sit in something uncomfortable that neither of you can do anything about, and the person who raised it now has to manage your discomfort as well as their own.\n\nMindset: you do not have to fix it. Sometimes the kindest thing is to lighten the room.",
      inputs: [
        { q: "A sensitive topic is dragging and I feel trapped in it.", a: "I can care about them and move us somewhere kinder at the same time.", bundle: 'pro' },
        { q: "Steering away will look like I don't care.", a: "Redirecting gently IS the caring move. I'm sparing them, not dodging them.", bundle: 'pro' },
        { q: "I have to solve the heavy topic before I can leave it.", a: "I don't have to fix it. Sometimes the kindest thing is to lighten the room.", bundle: 'pro' },
        { q: "If I change it they'll think I was uncomfortable.", a: "You were. So were they. One of you has to say so.", bundle: 'pro' },
        { q: "They brought it up, so they must want to talk about it.", a: "Sometimes. Offer the way out and let them decide.", bundle: 'pro' },
        { q: "Moving on now would be abrupt.", a: "Not if you acknowledge it first. That's the whole difference.", bundle: 'pro' },
        { q: "I don't know what to say about it, so I'll say nothing.", a: "\"I'm sorry, and we don't have to go into it\" is enough. Then move.", bundle: 'pro' },
        { q: "They went quiet after I steered away.", a: "Quiet can be relief. Give it a beat before you decide it went wrong.", bundle: 'pro' },
      ]
    },
    {
      name: "Endurance",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"Once a topic has started, I have to keep it going.\"\n\n**What is true instead:** your job is flow, not endurance. Letting a topic end is part of a good conversation, and a subject that has run its course is not a failure of effort.\n\n**Why it feels right:** the person who keeps things going does real work, and it is a good instinct pointed at the wrong target.\n\n**What it costs:** you keep spent topics alive past the point where anyone is enjoying them, which is exactly when a conversation starts to feel like an obligation.\n\nMindset: letting a topic end is part of a good conversation.",
      inputs: [
        { q: "I feel responsible for keeping every topic going.", a: "My job is flow, not endurance. Letting a topic end is part of a good conversation.", bundle: 'pro' },
        { q: "I'm bored, which means I'm not being interested enough.", a: "If I'm drifting, the topic's probably run its course. That's a cue, not a failing.", bundle: 'pro' },
        { q: "I keep waiting for a natural gap that never comes.", a: "Sometimes I make the gap. Waiting forever is just avoiding the move.", bundle: 'pro' },
        { q: "If this topic dies I'll have nothing to replace it with.", a: "You will. Something always turns up once the old one stops taking the space.", bundle: 'pro' },
        { q: "They started it, so they must still want it.", a: "Or they're keeping it going for you. Somebody has to check.", bundle: 'pro' },
        { q: "Ending it early would waste what we've said.", a: "Nothing is wasted. It happened, and now something else can.", bundle: 'pro' },
        { q: "I've squeezed three more questions out of this subject.", a: "That's the tell. Squeezing is not the same as interest.", bundle: 'pro' },
        { q: "A short topic feels like a failure.", a: "Ten good short ones beat one long one nobody enjoyed.", bundle: 'pro' },
      ]
    },
    {
      name: "It Needs a Reason",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"I can't change the subject just because I want to.\"\n\n**What is true instead:** wanting to is a reason. \"Completely unrelated, but —\" is the whole permission slip, and announcing the swerve is what makes it land.\n\n**Why it feels right:** ending someone's subject does take something from them, and being careless with that is how people get labelled rude. The instinct is decent; the threshold is wrong.\n\n**What it costs:** you stay in conversations you stopped enjoying twenty minutes ago, waiting for a reason that never arrives.\n\nMindset: flag it and go. Honest beats justified.",
      inputs: [
        { q: "I need a proper reason to change the subject.", a: "Bored is a reason. You just say it more politely: \"right, completely unrelated —\"", bundle: 'pro' },
        { q: "I'd only be doing it because I'm not enjoying this.", a: "That's the most common reason there is. Everyone uses it. Almost nobody admits it.", bundle: 'pro' },
        { q: "They chose this topic, so it's theirs to end.", a: "Nobody owns a subject. They started it, they didn't buy it.", bundle: 'pro' },
        { q: "Switching would look like I wasn't listening.", a: "Not if you name the switch. An announced swerve reads as relaxed, not absent.", bundle: 'pro' },
        { q: "It's rude to cut someone's subject short.", a: "It's rude to cut them off. Waiting for a full stop and then moving is just conversation.", bundle: 'pro' },
        { q: "I should have a better excuse than \"I felt like it\".", a: "\"I felt like it\" said out loud usually gets a laugh. That's the excuse.", bundle: 'pro' },
        { q: "This has got heavy and I don't have grounds to lighten it.", a: "The heaviness is the grounds. Say \"okay, lighter note before we spiral.\"", bundle: 'pro' },
        { q: "If I need to flag it, the change must be a bad idea.", a: "Flagging isn't an apology. It's the thing that makes it work.", bundle: 'pro' },
      ]
    },
    {
      name: "Nothing In Common",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"I've got nothing in common with this person, so I can't relate my way anywhere.\"\n\n**What is true instead:** the shared thing is almost never the activity. It is the feeling underneath it. You have never been hiking; you have been lost, and cold, and talked into something by a friend.\n\n**Why it feels right:** the obvious matches genuinely are easier, and a room full of people whose lives look nothing like yours is a real thing.\n\n**What it costs:** you either say nothing, or you manufacture an \"oh, me too\" that neither of you believes — and a false match makes the switch look like an escape.\n\nMindset: match the feeling, not the activity.",
      inputs: [
        { q: "I've never done the thing they're describing.", a: "You've had the feeling. \"I know that exact dread\" is a real match.", bundle: 'pro' },
        { q: "We have nothing in common at all.", a: "Weather, queues, bad sleep, being new somewhere. Start lower than you think.", bundle: 'pro' },
        { q: "I'd have to pretend to be interested.", a: "No — find the one part that is actually interesting and ask about that.", bundle: 'pro' },
        { q: "If I say \"me too\" it'll sound fake.", a: "It will if it is. Say the specific version instead and it stops sounding like anything.", bundle: 'pro' },
        { q: "Their life is completely different from mine.", a: "Different facts, same handful of experiences. Aim at the second one.", bundle: 'pro' },
        { q: "The only thing I could relate to is trivial.", a: "Trivial is where common ground lives. Nobody bonds over the big stuff first.", bundle: 'pro' },
        { q: "I'll wait until they mention something I know about.", a: "They might not. You can build the bridge from your side.", bundle: 'pro' },
        { q: "Relating just to change the subject feels like using them.", a: "Only if the relating is fake. If it's true, they got something out of it too.", bundle: 'pro' },
      ]
    },
  ],
  complimenting: [
    {
      name: "They Already Know",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The assumption that a person who is good at something must be aware of it, so saying so adds nothing to what they already have.\n\nAlmost nobody knows. People know what they intended and what went wrong; what they cannot see is the effect, and the effect is exactly the part only you can report. Nobody sees themselves from outside.\n\nMindset: you are not confirming something. You are telling them something they have no way of knowing.",
      inputs: [
        { q: "They must know they're good at this.", a: "They know they tried. They don't know what it did to the room.", bundle: 'pro' },
        { q: "Someone will have told them already.", a: "Ask anyone how often they get told. The answer is usually \"almost never\".", bundle: 'pro' },
        { q: "It'll sound like I'm stating the obvious.", a: "Obvious to you, from the outside. That's the whole reason it's worth saying.", bundle: 'pro' },
        { q: "They'd be embarrassed.", a: "For four seconds. Then it stays with them for years.", bundle: 'pro' },
        { q: "I'll say it when it's a bigger occasion.", a: "The Tuesday ones are the ones people remember. Nobody expects those.", bundle: 'pro' },
        { q: "Everyone can see it, so it doesn't need saying.", a: "Everyone can see it and everyone assumes someone else has mentioned it.", bundle: 'pro' },
        { q: "They get praised constantly.", a: "For the same thing every time. Say the one nobody else has noticed.", bundle: 'pro' },
        { q: "It won't make any difference.", a: "Think of one you were given years ago. That's the difference it makes.", bundle: 'pro' },
      ]
    },
    {
      name: "Deflecting Feels Like Modesty",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The reflex to correct a compliment — \"it's old\", \"it was nothing\", \"I got lucky\". It feels like modesty from the inside. From the outside it is being told you were wrong to say something kind.\n\nAnd it teaches. Someone who is corrected twice stops offering, and then you have fewer compliments coming at you and no idea why.\n\nMindset: taking it is the generous move. Two words, then stop.",
      inputs: [
        { q: "Agreeing would be arrogant.", a: "\"Thank you\" isn't agreement. It's acknowledgement, and it's all that's needed.", bundle: 'pro' },
        { q: "But it really wasn't that good.", a: "They weren't asking for your assessment. They were telling you theirs.", bundle: 'pro' },
        { q: "I have to say something back.", a: "You don't. Theirs gets its own moment, and yours keeps.", bundle: 'pro' },
        { q: "It's easier to laugh it off.", a: "Easier for you. It costs them the thing they were trying to give.", bundle: 'pro' },
        { q: "I never know what to say.", a: "\"Thank you.\" Then close your mouth. That's the whole skill.", bundle: 'pro' },
        { q: "If I take it, they'll think I agree I'm great.", a: "They'll think you heard them. That's all taking it means.", bundle: 'pro' },
        { q: "Explaining how it happened is just being honest.", a: "It's honest and it's an argument. Save the explanation for when they ask.", bundle: 'pro' },
        { q: "I'd rather move the attention off me.", a: "Understandable. Wait four seconds first — that's their part of the exchange.", bundle: 'pro' },
      ]
    },
    {
      name: "Small Is Not Worth Saying",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The belief that a bigger compliment is a better one — so \"you're amazing\" ought to beat \"the ending was good\", and a detail is too slight to bother anyone with.\n\nIt is the wrong way round. Large general praise is the shape politeness takes and everyone knows it; small specific praise cannot be produced without having paid attention, so it proves itself as it is said.\n\nMindset: the detail is the evidence. Without it you are only being nice.",
      inputs: [
        { q: "\"That was great\" is enough.", a: "It's pleasant and it evaporates. Add the one detail and it stays.", bundle: 'pro' },
        { q: "I can't remember anything specific.", a: "Then say that. \"Something about the middle worked and I'm still working out what.\"", bundle: 'pro' },
        { q: "The detail I noticed is too small.", a: "Small is the point. Nobody says the small ones, which is why they land.", bundle: 'pro' },
        { q: "I don't want to sound like I was analysing them.", a: "Being noticed is not the same as being analysed. One sentence isn't a report.", bundle: 'pro' },
        { q: "A big compliment feels more generous.", a: "More generous to give, less useful to receive. Aim at useful.", bundle: 'pro' },
        { q: "It's such a minor thing to make a fuss about.", a: "One sentence isn't a fuss. A fuss is three sentences and a follow-up question.", bundle: 'pro' },
        { q: "They'll wonder why I'm mentioning something that tiny.", a: "They'll register that you were paying attention. That's the message underneath.", bundle: 'pro' },
        { q: "I should save it for something that matters more.", a: "Praise isn't rationed. Saving it just means it never gets said.", bundle: 'pro' },
      ]
    },
    {
      name: "It Might Land Wrong",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The quiet arithmetic that stops most compliments — the fear that it will be strange, misread, unwelcome, or that the moment has passed and starting now would be worse than silence.\n\nWeigh it honestly. The downside is a few seconds of mild awkwardness, usually yours. The upside is something the other person may still be carrying in ten years. Very few things in a conversation have that ratio.\n\nMindset: the risk is small and it is mostly yours. Say it.",
      inputs: [
        { q: "It might come across wrong.", a: "Praise the choice, keep it short, and it won't. That's the whole safety rule.", bundle: 'pro' },
        { q: "The moment has passed.", a: "\"This is overdue\" fixes that in three words.", bundle: 'pro' },
        { q: "We're not close enough for me to say it.", a: "\"We barely know each other, so take this as an outside opinion…\" — and now you are.", bundle: 'pro' },
        { q: "They'll think I want something.", a: "Then don't ask for anything today. That's what separates the two.", bundle: 'pro' },
        { q: "I'd feel awkward.", a: "You would, for about four seconds. They'd have it for years.", bundle: 'pro' },
        { q: "What if they don't know how to take it?", a: "Then they'll fumble it, and you'll have given it anyway. Their half isn't your job.", bundle: 'pro' },
        { q: "It's a strange thing to say out of nowhere.", a: "Say that first. \"This is out of nowhere\" is a complete introduction.", bundle: 'pro' },
        { q: "I'll wait until it comes up naturally.", a: "It won't. Compliments almost never come up — they get decided on.", bundle: 'pro' },
      ]
    },
    {
      name: "What Counts As a Compliment",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The assumption that a compliment means saying something about how a person looks — and since that is loaded almost everywhere, the whole skill gets shelved.\n\nBut looks are the smallest and worst-behaved category in it. Nearly everything worth praising is a choice or a piece of work: what they picked, what they practised, what they decided when it was unpopular. Those are safe with anyone, at any distance, including a colleague you barely know.\n\nMindset: praise what they did, not what they were handed. That is nearly all of it.",
      inputs: [
        { q: "Complimenting people at work is a minefield.", a: "The body is. The work, the call they made, the jacket they chose — none of that is.", bundle: 'pro' },
        { q: "I can't say anything about how someone looks.", a: "You can say something about what they chose. \"Good jacket\" is about a decision.", bundle: 'pro' },
        { q: "I don't notice what people are wearing anyway.", a: "Then don't. Notice what they got better at. It's a stronger compliment regardless.", bundle: 'pro' },
        { q: "Praising a stranger's appearance is too much.", a: "Agreed. Praise the thing in their hands, or the thing they just said.", bundle: 'pro' },
        { q: "There's nothing to compliment about this person.", a: "There's something they practised. Everyone has one, and nobody hears about it.", bundle: 'pro' },
        { q: "\"You're so tall\" is a compliment, isn't it?", a: "It's an observation. There's nothing to be proud of and nothing to say back.", bundle: 'pro' },
        { q: "The only compliments that count are the personal ones.", a: "The ones that count name something they can take credit for. That's usually work.", bundle: 'pro' },
        { q: "I'd rather not risk it, so I say nothing.", a: "The safe version exists and it's better than the risky one. Use that.", bundle: 'pro' },
      ]
    },
    {
      name: "In Front of Others",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The reluctance to praise anyone in a room — it feels like a performance, like arranging to be seen being generous, and the quiet version seems more sincere.\n\nSometimes it is. But public praise does one thing private praise cannot: it changes what everyone else thinks, not only what the person thinks. \"That was Sara's idea\" said to Sara is kind. Said in the meeting, it is worth something to her career.\n\nMindset: ask who it is for. Credit goes where the room can hear it; anything personal goes where it cannot.",
      inputs: [
        { q: "Saying it out loud would make it about me.", a: "Say the name, say what they did, stop. Three seconds is nobody's performance.", bundle: 'pro' },
        { q: "It's more sincere if I say it quietly afterwards.", a: "For a personal compliment, yes. For credit, quietly afterwards is worth nothing.", bundle: 'pro' },
        { q: "They'd be embarrassed if I said it publicly.", a: "Some would. Ask: \"would you rather I said this in the meeting or just to you?\"", bundle: 'pro' },
        { q: "Everyone knows whose work it was.", a: "They know today. In six weeks the only record is who was named.", bundle: 'pro' },
        { q: "It'll look like I'm currying favour.", a: "Praising someone junior never looks like that. Praising upwards might — so aim down.", bundle: 'pro' },
        { q: "I'd rather not draw attention in a big group.", a: "It draws attention to them. Your part is one sentence long.", bundle: 'pro' },
        { q: "They're not in the room, so there's no point.", a: "There's more point. \"She's not here, so I'll say it anyway\" is the strongest version.", bundle: 'pro' },
        { q: "I'll compliment how they look, but do it in front of the team.", a: "That one goes private. Appearance in public is a cost to them, not a gift.", bundle: 'pro' },
      ]
    },
    {
      name: "The Debt",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The sense that a compliment is a transaction — that being handed one puts you in debt, and the debt is settled by handing one straight back.\n\nIt is the reflex that cancels both. \"That was a great presentation\" — \"yours was better!\" and now neither person has been told anything. And it comes from discomfort rather than generosity: returning it gets the attention off you fast, which is exactly why it feels like relief.\n\nMindset: theirs first. Yours keeps.",
      inputs: [
        { q: "They complimented me, so now I owe them one.", a: "You owe them \"thank you\". That settles it in full.", bundle: 'pro' },
        { q: "Not saying anything back would be rude.", a: "You are saying something back. Taking it properly is the reply.", bundle: 'pro' },
        { q: "I've already got one lined up to give straight back.", a: "Hold it. Said now it's a reflex; said in ten minutes it's a compliment.", bundle: 'pro' },
        { q: "If I don't return it, it looks like I don't rate them.", a: "It looks like you were listening. Nobody has ever read it the other way.", bundle: 'pro' },
        { q: "We both did the same thing and they went first.", a: "\"Thanks. I'll say mine later so it counts.\" That's the whole move.", bundle: 'pro' },
        { q: "Handing it back is the polite thing to do.", a: "Polite and empty. They know a mirror when they hear one.", bundle: 'pro' },
        { q: "I've said mine back and it came out hollow.", a: "Say so. \"That was a reflex. Let me do it properly:\" and then mean it.", bundle: 'pro' },
        { q: "This is just how compliments work — back and forth.", a: "That's how flattery works. A compliment only needs to go one way.", bundle: 'pro' },
      ]
    },
  ],
  responsivehumour: [
    {
      name: "Funny People Have Material",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The belief that funny people arrive with something — stories, lines, a stock of jokes — and that having none of that is why you are quiet.\n\nAlmost none of the humour in ordinary conversation works that way. It is built out of the sentence that was just said, in the second after it was said, by someone doing one of about five things to it.\n\nMindset: you are not supposed to bring anything. Their sentence is the material.",
      inputs: [
        { q: "I'm just not a funny person.", a: "You've never had to be. You've had to notice a sentence and bend it.", bundle: 'pro' },
        { q: "I can never think of anything.", a: "Because you're looking for something new. Look at what they just said instead.", bundle: 'pro' },
        { q: "Funny people have better lives to talk about.", a: "This pack is built on white walls and rain. That's the point.", bundle: 'pro' },
        { q: "I think of the good line ten minutes later.", a: "Everyone does. The five moves are for the first ten seconds instead.", bundle: 'pro' },
        { q: "I'd need to be quicker.", a: "You'd need one move. Exaggeration works on almost anything and nobody minds a slow one.", bundle: 'pro' },
        { q: "They're naturally witty and I'm not.", a: "They're practised. You are watching the ten thousandth attempt, not the first.", bundle: 'pro' },
        { q: "I'd have to remember jokes.", a: "You'd have to remember five verbs. Bigger, smaller, sideways, literal, backwards.", bundle: 'pro' },
        { q: "There's nothing funny about this conversation.", a: "There's nothing funny about white walls either. That hasn't stopped anyone.", bundle: 'pro' },
      ]
    },
    {
      name: "One More Thing",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The instinct to keep going — to add the second half, the explanation, the bit that makes sure they got it, the small laugh at the end that asks them to join in.\n\nEvery one of those is a subtraction. The response works because it is quick enough to feel effortless; a long one announces that you are performing, and now it has to be worth the wait. The addition you make to be safe is the thing that costs you the laugh.\n\nMindset: four words beats fourteen. Stop before you want to.",
      inputs: [
        { q: "They might not get it.", a: "If they don't, it costs four seconds. If you explain, it costs more.", bundle: 'pro' },
        { q: "It needs a bit more setup.", a: "Then it's a story, not a response. Save it and answer them instead.", bundle: 'pro' },
        { q: "I'll add one more thing to make it land.", a: "The one more thing is what stops it landing.", bundle: 'pro' },
        { q: "A longer joke is a better joke.", a: "On a stage, sometimes. In a kitchen, never.", bundle: 'pro' },
        { q: "I trailed off at the end.", a: "Land on the last word and stop. The silence afterwards is theirs.", bundle: 'pro' },
        { q: "I laughed at my own line to help it along.", a: "That's asking. Say it flat and let them decide.", bundle: 'pro' },
        { q: "Four words doesn't feel like enough effort.", a: "Effort isn't the currency. \"Bit of a walk\" is four words and it's the best line in the pack.", bundle: 'pro' },
        { q: "I want to make sure they know I'm joking.", a: "Your face does that. The extra sentence just makes it a lecture.", bundle: 'pro' },
      ]
    },
    {
      name: "They Didn't Get It",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The urge to rescue a joke that did not land — to say it again, to point out the pun, to describe why it was funny, to check whether they heard.\n\nThe rescue is what people remember, not the miss. A joke nobody noticed is forgotten within seconds; a joke that was explained is a small awkwardness everyone in the room now shares, and it belongs to you.\n\nMindset: let it go. The next opening is a minute away.",
      inputs: [
        { q: "They didn't get it.", a: "Fine. Answer what they said and carry on.", bundle: 'pro' },
        { q: "If I explain it they'll laugh.", a: "They'll do something. It won't be laughing.", bundle: 'pro' },
        { q: "I want them to know I was joking.", a: "One flat line: \"that was me agreeing, badly.\" Then stop.", bundle: 'pro' },
        { q: "I'll try the same joke again with better timing.", a: "The second run is always worse. Wait for a new sentence.", bundle: 'pro' },
        { q: "It's embarrassing to be ignored.", a: "For you, for four seconds. Nobody else has noticed.", bundle: 'pro' },
        { q: "They looked confused.", a: "They'll be over it before you are. Move to the next sentence.", bundle: 'pro' },
        { q: "Now the whole conversation feels awkward.", a: "Only in your head. Ask them a question and it's gone.", bundle: 'pro' },
        { q: "Maybe they thought I meant it.", a: "Then say the plain version once. Not twice, and not with a reason attached.", bundle: 'pro' },
      ]
    },
    {
      name: "They Can Take a Joke",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The line between this pack and being unkind, and it is not a vague one. Humour aimed at the weather, the queue, the timetable or at yourself is free. Humour aimed at a person costs them something.\n\nThe test is whether the joke needs them to be a good sport. If it does, it is at their expense, and that is a different skill with different rules — it needs an established friendship, not a technique.\n\nMindset: the situation, their sentence, or yourself. Those three are safe with anyone.",
      inputs: [
        { q: "They can take a joke.", a: "Maybe. But needing them to is the tell.", bundle: 'pro' },
        { q: "It's obviously affectionate.", a: "To you. Warmth doesn't always survive the trip.", bundle: 'pro' },
        { q: "Everyone else is doing it.", a: "To each other, with years behind it. You've had four minutes.", bundle: 'pro' },
        { q: "Self-deprecation is boring.", a: "It's also the only target that can't complain, which makes it useful.", bundle: 'pro' },
        { q: "The joke's about their thing, not them.", a: "Then shrink the thing and leave them out of it entirely.", bundle: 'pro' },
        { q: "They laughed, so it was fine.", a: "People laugh to end things. Check whether they came back to the subject.", bundle: 'pro' },
        { q: "I'm their manager but we're friendly.", a: "Friendly doesn't remove the rank. The room hears it differently from you.", bundle: 'pro' },
        { q: "If I never tease anyone I'll be boring.", a: "The five moves don't need a target. Not one of them requires a person.", bundle: 'pro' },
      ]
    },
    {
      name: "Trying To Be Funny",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The thing that stops most attempts is not a lack of ideas. It is the word trying — the sense that a visible attempt at humour is worse than saying nothing, because a miss exposes you and silence does not.\n\nThe arithmetic is wrong. A line that misses is a half-second of nothing; people are already three sentences past it. What actually gets noticed is the man who never adds anything, and that gets noticed every time, not one time in five.\n\nMindset: the attempt is free. It is the abstention that costs.",
      inputs: [
        { q: "It's embarrassing to be seen trying to be funny.", a: "Trying is what everyone at the table is doing. You're just doing it silently.", bundle: 'pro' },
        { q: "If it doesn't land I'll look like I was reaching.", a: "A miss is half a second. Absence is the whole evening.", bundle: 'pro' },
        { q: "I'd rather say nothing than say something weak.", a: "Weak lines vanish. Nothing is the only one they can measure you by.", bundle: 'pro' },
        { q: "They'll think I'm the guy who's always trying.", a: "Nobody has ever thought that about a man who tries once an hour.", bundle: 'pro' },
        { q: "I'm not confident enough to pull it off.", a: "Confidence isn't the entry fee. Saying it flat and moving on is.", bundle: 'pro' },
        { q: "The moment has to be exactly right.", a: "There is no right moment. There's a sentence, and then there isn't.", bundle: 'pro' },
        { q: "I don't want to be the one performing.", a: "Four words isn't a performance. It's a reply that happens to be funny.", bundle: 'pro' },
        { q: "What if they think I'm not funny?", a: "They'll think that anyway if you never say anything. At least this way it's up for debate.", bundle: 'pro' },
      ]
    },
  ],
  assertivecomm1: [
    {
      name: "Standards",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The standards, rules, and criteria we let others use to judge our choices. This deck targets the belief that you must measure up to external structures of right, wrong, or proper behavior before you can act. It trains the prime assertive right: you are the ultimate judge of all you are and do. If you don't own this area, others will invent rules to run your life. When you accept their criteria, you allow them to manipulate you with rules, reasons, and expectations that serve their interests instead of your own.\n\nMindset: you are the final judge of your own standards.",
      inputs: [
        { q: "Other people seem to have a fixed rulebook on how I should behave.", a: "The rules were made by people just like you. They are not laws of physics.", bundle: 'pro' },
        { q: "If I don't follow their rules, I feel like I'm doing something wrong.", a: "Following their rules means letting them write the script of your life.", bundle: 'pro' },
        { q: "Someone tells me that what I'm doing isn't the proper way.", a: "Proper only means it is the way they prefer. Your preference is just as valid.", bundle: 'pro' },
        { q: "I feel anxious when I make a choice that doesn't fit standard procedures.", a: "You are the ultimate judge of your own choices. The anxiety is just old training.", bundle: 'pro' },
        { q: "Everyone else seems to agree on what is fair and right.", a: "Consensus is not truth. It is often just a shared habit of compliance.", bundle: 'pro' },
        { q: "I worry that being my own judge will make me selfish or irresponsible.", a: "Being your own judge means taking full responsibility for the consequences of your actions.", bundle: 'pro' },
        { q: "A supervisor insists that their way is the only correct way.", a: "They can set company rules, but they cannot decide who you are as a person.", bundle: 'pro' },
        { q: "I feel I need someone else's permission to change my routine.", a: "Waiting for permission is a habit from childhood. You are an adult now.", bundle: 'pro' },
      ]
    },
    {
      name: "Justifications",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The constant urge to explain, defend, and offer reasons for your choices. When you feel you must justify your actions, you hand others the power to judge whether your reasons are good enough. This deck trains you to declare your desires plainly without excuses. Your likes, dislikes, and choices do not require parental or commercial approval to be valid. You are the sole judge of what you do. Giving reasons only hands the manipulator target points to dismantle and argue with.\n\nMindset: your desires are their own justification.",
      inputs: [
        { q: "If I don't give a reason for saying no, they will think I'm rude.", a: "You do not owe anyone an explanation for having a boundary.", bundle: 'pro' },
        { q: "I need to think of a good excuse before I can decline an invitation.", a: "Excuses are just targets for the other person to solve and negotiate with.", bundle: 'pro' },
        { q: "Someone demands to know why I changed my mind about our plans.", a: "You are allowed to change your mind simply because your feelings or preferences evolved.", bundle: 'pro' },
        { q: "I feel guilty when I declare what I want without proving why I need it.", a: "Your want is a factual state. It does not need a logical argument to exist.", bundle: 'pro' },
        { q: "If I don't justify my pricing, clients will think I'm ripping them off.", a: "Your rate is your decision. They can accept it or decline, but you don't need to defend it.", bundle: 'pro' },
        { q: "My parents demand to know why I don't visit them every weekend.", a: "You are an independent adult. Your schedule does not require parental validation.", bundle: 'pro' },
        { q: "I feel I must explain why I am returning this defective item to the clerk.", a: "\"I don't like it\" is a complete and valid reason for a return.", bundle: 'pro' },
        { q: "When I am criticized, my immediate reflex is to explain my intentions.", a: "Explaining your intentions is a submissive attempt to get their approval. State the facts instead.", bundle: 'pro' },
      ]
    },
    {
      name: "Mistakes",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The heavy guilt and shame that follow everyday human errors. If you believe mistakes are moral failures, you allow others to demand psychological atonement and control your future behavior. This deck trains you to own your mistakes calmly as simple, inefficient facts. Admitting a mistake is an act of strength, not a submissive surrender. You are responsible for your errors, not for satisfying critics. We make errors because we are human, not because we are bad.\n\nMindset: errors are simply errors, not sins.",
      inputs: [
        { q: "Making a mistake at work means I am incompetent and untrustworthy.", a: "Errors are part of the human condition. They are inefficient, but they do not define your worth.", bundle: 'pro' },
        { q: "Since I messed up the project timeline, I must work extra overtime for free to make it up.", a: "You are responsible for correcting the error, not for punishing yourself to satisfy them.", bundle: 'pro' },
        { q: "My coworker keeps bringing up an error I made last month to control my schedule.", a: "They are using your past mistake as psychological leverage. Do not accept the guilt trap.", bundle: 'pro' },
        { q: "If I admit I made a mistake, my critic will have won the argument.", a: "Admitting an error calmly is the fastest way to end their leverage and close the argument.", bundle: 'pro' },
        { q: "I feel I must apologize profusely and crawl when I slip up.", a: "Apologizing three times is asking for forgiveness. State the mistake, correct it, and stop.", bundle: 'pro' },
        { q: "If I make an error in judgment, I shouldn't be allowed to make decisions anymore.", a: "You are allowed to make mistakes. It is how humans learn to make better decisions.", bundle: 'pro' },
        { q: "I try to hide my mistakes so that others won't think less of me.", a: "Hiding errors creates anxiety. Owning them calmly shows confidence and security.", bundle: 'pro' },
        { q: "My partner's irritated tone when I forget something makes me feel like a bad person.", a: "Their irritation is their feeling. Your forgetfulness is just an error, not a moral crime.", bundle: 'pro' },
      ]
    },
    {
      name: "Approval",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The paralyzing belief that you must have the goodwill of everyone before you can deal with them. The need for constant approval leaves you open to manipulation by anyone who threatens to withdraw their affection or cooperation. This deck trains you to realize that you can cope with people effectively even if they dislike your boundaries. You do not need their goodwill to survive or succeed. True relationships survive limits; compliance only builds a cage.\n\nMindset: you do not need everyone to like you.",
      inputs: [
        { q: "I can't function or do business with someone if they are angry or irritated with me.", a: "You do not need their friendship or goodwill to deal with them assertively and effectively.", bundle: 'pro' },
        { q: "If my supervisor dislikes my boundaries, they will ruin my career.", a: "You can perform your job tasks effectively without needing your boss to be your friend.", bundle: 'pro' },
        { q: "I feel terrible when a store clerk gets annoyed with my return request.", a: "Their annoyance is their problem. Your goal is the refund, not their smile.", bundle: 'pro' },
        { q: "If I say no to my friends, our relationship will fall apart.", a: "True relationships survive boundaries. A friendship built on your compliance is a cage.", bundle: 'pro' },
        { q: "I must always stay in everyone's good graces to keep the system steady.", a: "You are not responsible for keeping everyone else comfortable at the expense of your limits.", bundle: 'pro' },
        { q: "I feel anxious when a coworker gives me a cold look in the hallway.", a: "Their cold look cannot hurt you. You can still work together without mutual warmth.", bundle: 'pro' },
        { q: "I worry that being assertive will make people talk behind my back.", a: "People will talk regardless of what you do. Your self-respect is more important than their gossip.", bundle: 'pro' },
        { q: "I need my family's approval before I can make a major life change.", a: "You are the final judge of your life. Their approval is a nice extra, not a requirement.", bundle: 'pro' },
      ]
    },
    {
      name: "Ignorance",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The belief that you must predict every consequence and have an answer for every question before you can act. This anxiety traps you in passive hesitation because you fear sounding stupid. This deck trains you to say 'I don't know' or 'I don't understand' with total confidence. You do not have to read minds or be an omniscient expert to make a decision about your own life. You are allowed to be illogical or declare that you simply do not care.\n\nMindset: saying I don't know is a valid boundary.",
      inputs: [
        { q: "If someone asks me a question about my plans, I must have an immediate answer.", a: "\"I don't know\" is a complete, honest, and perfectly valid answer.", bundle: 'pro' },
        { q: "I must predict every consequence of my choices before I can change my mind.", a: "You do not have to be omniscient to make a decision. You can handle consequences as they arrive.", bundle: 'pro' },
        { q: "I must worry about what would happen to the world if everyone acted as their own judge.", a: "You do not need to solve global philosophy to decide what works for your own life.", bundle: 'pro' },
        { q: "I feel stupid when I don't understand what a specialist is talking about.", a: "Specialists often hide behind jargon. Reclaim your right to say: \"I don't understand.\"", bundle: 'pro' },
        { q: "If I don't anticipate my partner's needs, I am being insensitive and irresponsible.", a: "You cannot read minds. If they want or need something, they must ask for it plainly.", bundle: 'pro' },
        { q: "I worry that admitting lack of knowledge in a meeting will ruin my credibility.", a: "Admitting you don't know shows security. Faking knowledge creates real risk of failure.", bundle: 'pro' },
        { q: "A customer service bot keeps asking me to categorize my issue before I can proceed.", a: "You don't have to fit into their pre-programmed boxes. Insist on your request.", bundle: 'pro' },
        { q: "I feel I must have a logical reason for every preference I express.", a: "\"I don't know, I just prefer it\" is the only justification your wants require.", bundle: 'pro' },
      ]
    },
  ],
  assertivecomm2: [
    {
      name: "Responsibilities",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The heavy burden of believing you are responsible for solving other people's personal problems. This mindset targets the belief that you must sacrifice your own desires to keep everyone else comfortable or preserve ineffective systems. This deck trains Right III: you have the ultimate right to judge if you are responsible for finding solutions to others' problems. When you take ownership of their issues, you allow them to manipulate you with guilt and avoid taking charge of their own lives.\n\nMindset: they are responsible for their own happiness.",
      inputs: [
        { q: "I am responsible for solving my spouse's bad mood.", a: "Their emotional state belongs to them. I can support them without taking ownership of their feelings or neglecting my own limits.", bundle: 'pro' },
        { q: "If I return this item, I am responsible for the store clerk's lost commission.", a: "The store's commission structure is their problem. My goal is a refund for defective goods.", bundle: 'pro' },
        { q: "If I don't help my friend clean their garage, I am a bad person.", a: "My friend is responsible for their own chores. Saying no to a massive task is a healthy choice.", bundle: 'pro' },
        { q: "I must find a solution to my parents' loneliness.", a: "My parents are independent adults. They must find their own social activities and outlets.", bundle: 'pro' },
        { q: "If I say no to Greg's shift, the manager will be left in a terrible fix.", a: "The manager is responsible for shift coverage systems. My free time is my own decision.", bundle: 'pro' },
        { q: "I must keep my partner from getting upset during our talks.", a: "Their irritation is their own feeling. We can discuss difficult truths without me managing their comfort.", bundle: 'pro' },
        { q: "If the delivery system fails, I am responsible for making it easy for the company.", a: "The company's logistical errors are not mine to solve. I want my delivery processed correctly.", bundle: 'pro' },
        { q: "I am bad if I don't spend my energy solving my roommate's problems.", a: "They must take charge of their own choices. I can be a friend without being their therapist.", bundle: 'pro' },
      ]
    },
    {
      name: "Consistency",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The rigid belief that once you have made a decision, you must never change your mind. If you believe consistency is a moral duty, you allow others to use your past choices to control your future actions. This deck trains Right IV: you have the ultimate right to change your mind. Changing your mind as circumstances, feelings, or preferences evolve is a healthy, normal part of being human, not a sign of irresponsibility.\n\nMindset: you are allowed to change your mind.",
      inputs: [
        { q: "Since I agreed to go to the concert, I must go even if I feel sick.", a: "I am allowed to change my mind simply because my physical state or feelings have evolved.", bundle: 'pro' },
        { q: "Changing my mind makes me look flaky and irresponsible to others.", a: "Adult life requires flexibility. My choices are not fixed contracts; they can adapt.", bundle: 'pro' },
        { q: "I must keep using this terrible laptop because I chose to buy it.", a: "I made an error in judgment, and I can change my mind about keeping it.", bundle: 'pro' },
        { q: "If I change my mind, I must have a massive, logical excuse to prove I'm right.", a: "My change of preference is its own justification. I don't need an excuse to choose differently now.", bundle: 'pro' },
        { q: "I said yes to their request last week, so I cannot say no today.", a: "Last week was last week. A previous agreement is not an endless subscription to compliance.", bundle: 'pro' },
        { q: "My parent grumbles that I used to visit them every weekend.", a: "My schedule and needs have changed. It is normal to adjust my routine as my life grows.", bundle: 'pro' },
        { q: "I promised to stay in my current job, so leaving makes me a bad employee.", a: "My goals and feelings have evolved. I have the right to seek better paths for myself.", bundle: 'pro' },
        { q: "I told my partner I wanted to cook, but now I am too tired.", a: "I can change my mind and propose ordering food instead without feeling guilty.", bundle: 'pro' },
      ]
    },
    {
      name: "Decisions",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The belief that you must always have a logical, rational reason for your choices and desires. When you accept this rule, you hand others the power to judge whether your reasons are \"good enough\" to justify your boundaries. This deck trains Right VIII: you have the ultimate right to be illogical in making decisions. Your wants, likes, and dislikes do not fit into neat logical boxes; they are factual states that require no external validation.\n\nMindset: your feelings do not need a logical proof.",
      inputs: [
        { q: "I must prove logically why I want to return this unopened paint.", a: "\"I don't like it\" is a complete, valid, and sufficient reason for my choice.", bundle: 'pro' },
        { q: "I need a rational argument to explain why I don't want to go out tonight.", a: "My lack of desire is a fact. It does not need a logical equation to be respected.", bundle: 'pro' },
        { q: "If I cannot explain why I prefer this dress, I shouldn't buy it.", a: "Likes and dislikes are emotional states. I am allowed to choose simply because I prefer it.", bundle: 'pro' },
        { q: "If I cannot argue a logical case for wanting things to change at home, I have no right to ask.", a: "My feelings of being cramped are real. They do not need to fit into a logical box to be valid.", bundle: 'pro' },
        { q: "I must have a rational excuse to refuse a friend's invitation.", a: "\"I don't want to\" is a complete and adult boundary. I don't owe them a logical defense.", bundle: 'pro' },
        { q: "If my decision is illogical, it means I am stupid or irresponsible.", a: "Wanting something is not a mathematical problem. It is healthy to make decisions based on feelings.", bundle: 'pro' },
        { q: "I must justify my career change to my parents with a massive financial plan.", a: "My desire for change is my own. I have the right to make choices that don't satisfy their logic.", bundle: 'pro' },
        { q: "Someone demands to know what is illogical about their sales offer.", a: "I don't need to debate their offer. I simply do not want to buy it today.", bundle: 'pro' },
      ]
    },
    {
      name: "Obligations",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The constant pressure to improve yourself to meet everyone else's arbitrary standards of perfection. If you believe you are bad or lazy unless you are constantly striving to improve, you let others define who you should be. This deck trains Right X: you have the ultimate right to say \"I don't care\" to their rules. You do not have to be perfect, neat, or efficient according to anyone else's definition to keep your self-respect.\n\nMindset: you don't have to care about their standards.",
      inputs: [
        { q: "I am bad and lazy because I don't keep my house perfectly neat.", a: "Neatness is a preference, not a moral law. I don't have to care about being a perfect housekeeper.", bundle: 'pro' },
        { q: "My boss says I should want to improve my speed, even though my work is average.", a: "I perform my tasks adequately. I don't have to strive for perfection to be a worthy employee.", bundle: 'pro' },
        { q: "I must constantly read books to become a more civilized and educated person.", a: "I can enjoy my free time however I like. I don't owe anyone a constant self-improvement campaign.", bundle: 'pro' },
        { q: "Someone grumbles that I don't care about the community standard.", a: "Their standard is their own choice. I have the right to say \"I don't care\" to their expectations.", bundle: 'pro' },
        { q: "I must work overtime because everyone should strive to be highly productive.", a: "I work to put food on the table, not to satisfy a rigid philosophy of endless productivity.", bundle: 'pro' },
        { q: "My partner sighs that I don't care about improving my presentation style.", a: "I am comfortable with my current style. I don't have to be a perfect public speaker to communicate.", bundle: 'pro' },
        { q: "I feel guilty because I don't care about global political debates.", a: "I am allowed to limit my attention. Saying \"I don't care\" to side issues keeps my energy safe.", bundle: 'pro' },
        { q: "I must struggle to meet my family's definition of success.", a: "I am the final judge of my own achievements. Their definition of success does not run my life.", bundle: 'pro' },
      ]
    },
  ],
  assertivecommadv: [
    {
      name: "Sounding Rehearsed",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The belief that two deliberate moves in a row will sound like a technique rather than a person. This is the fear that keeps people at one move, where the conversation always outlasts them. The truth is that combinations sound less mechanical, not more: a single move repeated is what sounds like a script, while an agreement followed by a real question sounds like someone paying attention. This deck targets the assumption that spontaneity is more honest than preparation.\n\nMindset: deliberate is not the same as insincere.",
      inputs: [
        { q: "If I plan two moves in advance, I'll sound like a machine.", a: "A plan is not a script. You are choosing a direction, not the words.", bundle: 'pro' },
        { q: "Real people just say what comes to mind in the moment.", a: "What comes to mind in the moment is usually the habit you are trying to break.", bundle: 'pro' },
        { q: "They'll be able to tell I'm doing something.", a: "They can tell you are calm. That is all most people notice.", bundle: 'pro' },
        { q: "It feels dishonest to know how I want the conversation to end.", a: "Knowing what you want is the opposite of dishonest. Hiding it is the problem.", bundle: 'pro' },
        { q: "If I agree and then ask a question, it sounds like a trick.", a: "It sounds like a trick if the agreement is false. Agree with something real.", bundle: 'pro' },
        { q: "Skilled communication is something you are born with.", a: "Every fluent speaker you admire got there by repetition, not by birth.", bundle: 'pro' },
        { q: "My friends would laugh if they knew I practised this.", a: "They practise for interviews and dates without calling it practice.", bundle: 'pro' },
        { q: "If it doesn't come naturally, it isn't really me.", a: "It becomes you the way driving does — awkward, then invisible.", bundle: 'pro' },
      ]
    },
    {
      name: "The Second Half",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The habit of stopping after the first move. Agreeing and then going quiet, or owning a mistake and waiting to see what happens. The opening half of every combination in this pack gives something away, and leaving it there is worse than never having started: you have conceded a point and taken no position. This deck targets the moment of hesitation between the two halves, where most of the pack is actually won or lost.\n\nMindset: the first half is the cost; the second half is what you bought.",
      inputs: [
        { q: "I agreed with them and then couldn't think what to say next.", a: "The second half is decided before you open your mouth, not after.", bundle: 'pro' },
        { q: "Once I've admitted the mistake, it feels greedy to ask for more.", a: "Asking for the rest is not greed. It is closing the file instead of leaving it open.", bundle: 'pro' },
        { q: "If I agree and then repeat my request, it sounds like I ignored them.", a: "You did not ignore them. You answered them and then continued.", bundle: 'pro' },
        { q: "Saying both halves at once feels like too much talking.", a: "Two short sentences is not a speech. It is one turn.", bundle: 'pro' },
        { q: "I lose my nerve in the gap between the two parts.", a: "Close the gap. Say the second half in the same breath, before you can reconsider.", bundle: 'pro' },
        { q: "After I've fogged, they usually change the subject and I let it go.", a: "The subject changed because you stopped. Bring your half back in one sentence.", bundle: 'pro' },
        { q: "I only remember the second move afterwards, in the car.", a: "That is what practice is for. The car version arrives sooner every time.", bundle: 'pro' },
        { q: "If I've conceded something, pressing on feels unfair.", a: "You conceded a sentence, not the conversation.", bundle: 'pro' },
      ]
    },
    {
      name: "Planning What to Say",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The belief that preparing your words is a form of manipulation, and that anything not spontaneous is a trick played on the other person. It is the most common reason people abandon these skills after learning them. Preparation does not decide what the other person will do; it only stops you doing the thing you always regret. This deck separates planning your own conduct from controlling someone else's.\n\nMindset: planning what you will say is not deciding what they will do.",
      inputs: [
        { q: "Rehearsing a conversation feels like setting a trap for someone.", a: "A trap hides your intent. Preparation usually makes it clearer.", bundle: 'pro' },
        { q: "If I plan it, I'm not really listening to them.", a: "You are less anxious, which is the only state in which listening is possible.", bundle: 'pro' },
        { q: "Manipulative people plan conversations. That's the difference.", a: "Manipulative people plan to get something they hide. Say your want out loud.", bundle: 'pro' },
        { q: "It feels calculating to know what I'll do if they push back.", a: "Knowing your own limit is not a calculation about them.", bundle: 'pro' },
        { q: "I should be able to handle it honestly without any preparation.", a: "Unprepared honesty is usually just whatever your temper says first.", bundle: 'pro' },
        { q: "If I have a plan, I'm treating them as an opponent.", a: "You can have a plan and want a good outcome for both of you.", bundle: 'pro' },
        { q: "Thinking about the order of what I say feels cold.", a: "Order is courtesy. It is how you avoid saying the hurtful part first.", bundle: 'pro' },
        { q: "They didn't prepare, so it isn't a fair conversation.", a: "They also did not prepare to be reasonable. You are not taking anything from them.", bundle: 'pro' },
      ]
    },
    {
      name: "Giving Ground",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The belief that whoever concedes first has lost. Every combination in this pack opens by giving ground on purpose, which feels backwards to anyone raised on the idea that agreement is surrender. The ground you give is a sentence; what you keep is the want. This deck targets the reflex that treats the first concession as the end of the argument rather than the start of a workable one.\n\nMindset: you can agree with the words and keep the position.",
      inputs: [
        { q: "If I agree with any part of it, I've admitted they were right.", a: "You admitted one sentence was true. The rest is still yours.", bundle: 'pro' },
        { q: "Conceding the first point means I'll have to concede the rest.", a: "Only if you have no second half ready. That is a preparation problem, not a rule.", bundle: 'pro' },
        { q: "People will walk all over me if I agree so easily.", a: "The people who walk over you do it when you argue and then fold, not when you agree and hold.", bundle: 'pro' },
        { q: "Agreeing with an unfair criticism feels like lying.", a: "Agree only with the part that is true or possible. That is never a lie.", bundle: 'pro' },
        { q: "If I don't defend myself, they'll assume the whole thing is true.", a: "They assume it anyway when you defend. Defence looks like guilt to most people.", bundle: 'pro' },
        { q: "My instinct is to correct the exaggeration first.", a: "Correcting the exaggeration is how you end up arguing about it all evening.", bundle: 'pro' },
        { q: "Giving ground early leaves me with nothing to bargain with.", a: "Your want was never a bargaining chip. It is not on the table at all.", bundle: 'pro' },
        { q: "It feels weak to say \"you're probably right\" to someone hostile.", a: "It is the only sentence a hostile person has no answer to.", bundle: 'pro' },
      ]
    },
    {
      name: "Changing Move Mid-Talk",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The belief that once you have started with one approach you have to see it through, even as the conversation turns into something else. Combinations make this worse: the plan feels more binding because there was one. In reality the other person changes what they are doing several times in five minutes, and matching them is the skill. This deck targets the stubbornness that keeps people repeating a move that stopped fitting two sentences ago.\n\nMindset: the move follows what they just did, not what you decided earlier.",
      inputs: [
        { q: "I planned to hold my line, so I can't suddenly start asking questions.", a: "They stopped pushing and started complaining. Follow the change.", bundle: 'pro' },
        { q: "Switching approach halfway makes me look inconsistent.", a: "Consistency is about your want, not about your sentences.", bundle: 'pro' },
        { q: "I had decided to compromise, so I have to see the offer through.", a: "An offer made to a person who has started insulting you can wait.", bundle: 'pro' },
        { q: "If I change tack they'll think they got to me.", a: "They will think you are listening. That is what changing tack looks like.", bundle: 'pro' },
        { q: "I keep repeating my request even after they have agreed.", a: "When they say yes, stop. The move is finished.", bundle: 'pro' },
        { q: "They admitted the real problem and I carried on defending myself.", a: "The moment they name the real thing, the argument is over. Move to what happens next.", bundle: 'pro' },
        { q: "I started owning a mistake and then found it wasn't mine.", a: "Say so plainly. Half an admission is easier to withdraw than a whole apology.", bundle: 'pro' },
        { q: "It feels like giving up to abandon the approach I chose.", a: "You are abandoning a method, not a boundary. The boundary has not moved.", bundle: 'pro' },
      ]
    },
  ],
  integratedmaster: [
    {
      name: "Standards",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The standards, rules, and criteria we let others use to judge our choices. This deck targets the belief that you must measure up to external structures of right, wrong, or proper behavior before you can act. It trains the prime assertive right: you are the ultimate judge of all you are and do. If you don't own this area, others will invent rules to run your life. When you accept their criteria, you allow them to manipulate you with rules, reasons, and expectations that serve their interests instead of your own.\n\nMindset: you are the final judge of your own standards.",
      inputs: [
        { q: "Other people seem to have a fixed rulebook on how I should behave.", a: "The rules were made by people just like you. They are not laws of physics.", bundle: 'pro' },
        { q: "If I don't follow their rules, I feel like I'm doing something wrong.", a: "Following their rules means letting them write the script of your life.", bundle: 'pro' },
        { q: "Someone tells me that what I'm doing isn't the proper way.", a: "Proper only means it is the way they prefer. Your preference is just as valid.", bundle: 'pro' },
        { q: "I feel anxious when I make a choice that doesn't fit standard procedures.", a: "You are the ultimate judge of your own choices. The anxiety is just old training.", bundle: 'pro' },
        { q: "Everyone else seems to agree on what is fair and right.", a: "Consensus is not truth. It is often just a shared habit of compliance.", bundle: 'pro' },
        { q: "I worry that being my own judge will make me selfish or irresponsible.", a: "Being your own judge means taking full responsibility for the consequences of your actions.", bundle: 'pro' },
        { q: "A supervisor insists that their way is the only correct way.", a: "They can set company rules, but they cannot decide who you are as a person.", bundle: 'pro' },
        { q: "I feel I need someone else's permission to change my routine.", a: "Waiting for permission is a habit from childhood. You are an adult now.", bundle: 'pro' },
      ]
    },
    {
      name: "Justifications",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The constant urge to explain, defend, and offer reasons for your choices. When you feel you must justify your actions, you hand others the power to judge whether your reasons are good enough. This deck trains you to declare your desires plainly without excuses. Your likes, dislikes, and choices do not require parental or commercial approval to be valid. You are the sole judge of what you do. Giving reasons only hands the manipulator target points to dismantle and argue with.\n\nMindset: your desires are their own justification.",
      inputs: [
        { q: "If I don't give a reason for saying no, they will think I'm rude.", a: "You do not owe anyone an explanation for having a boundary.", bundle: 'pro' },
        { q: "I need to think of a good excuse before I can decline an invitation.", a: "Excuses are just targets for the other person to solve and negotiate with.", bundle: 'pro' },
        { q: "Someone demands to know why I changed my mind about our plans.", a: "You are allowed to change your mind simply because your feelings or preferences evolved.", bundle: 'pro' },
        { q: "I feel guilty when I declare what I want without proving why I need it.", a: "Your want is a factual state. It does not need a logical argument to exist.", bundle: 'pro' },
        { q: "If I don't justify my pricing, clients will think I'm ripping them off.", a: "Your rate is your decision. They can accept it or decline, but you don't need to defend it.", bundle: 'pro' },
        { q: "My parents demand to know why I don't visit them every weekend.", a: "You are an independent adult. Your schedule does not require parental validation.", bundle: 'pro' },
        { q: "I feel I must explain why I am returning this defective item to the clerk.", a: "\"I don't like it\" is a complete and valid reason for a return.", bundle: 'pro' },
        { q: "When I am criticized, my immediate reflex is to explain my intentions.", a: "Explaining your intentions is a submissive attempt to get their approval. State the facts instead.", bundle: 'pro' },
      ]
    },
    {
      name: "Mistakes",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The heavy guilt and shame that follow everyday human errors. If you believe mistakes are moral failures, you allow others to demand psychological atonement and control your future behavior. This deck trains you to own your mistakes calmly as simple, inefficient facts. Admitting a mistake is an act of strength, not a submissive surrender. You are responsible for your errors, not for satisfying critics. We make errors because we are human, not because we are bad.\n\nMindset: errors are simply errors, not sins.",
      inputs: [
        { q: "Making a mistake at work means I am incompetent and untrustworthy.", a: "Errors are part of the human condition. They are inefficient, but they do not define your worth.", bundle: 'pro' },
        { q: "Since I messed up the project timeline, I must work extra overtime for free to make it up.", a: "You are responsible for correcting the error, not for punishing yourself to satisfy them.", bundle: 'pro' },
        { q: "My coworker keeps bringing up an error I made last week to control my schedule.", a: "They are using your past mistake as psychological leverage. Do not accept the guilt trap.", bundle: 'pro' },
        { q: "If I admit I made a mistake, my critic will have won the argument.", a: "Admitting an error calmly is the fastest way to end their leverage and close the argument.", bundle: 'pro' },
        { q: "I feel I must apologize profusely and crawl when I slip up.", a: "Apologizing three times is asking for forgiveness. State the mistake, correct it, and stop.", bundle: 'pro' },
        { q: "If I make an error in judgment, I shouldn't be allowed to make decisions anymore.", a: "You are allowed to make mistakes. It is how humans learn to make better decisions.", bundle: 'pro' },
        { q: "I try to hide my mistakes so that others won't think less of me.", a: "Hiding errors creates anxiety. Owning them calmly shows confidence and security.", bundle: 'pro' },
        { q: "My partner's irritated tone when I forget something makes me feel like a bad person.", a: "Their irritation is their feeling. Your forgetfulness is just an error, not a moral crime.", bundle: 'pro' },
      ]
    },
    {
      name: "Approval",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The paralyzing belief that you must have the goodwill of everyone before you can deal with them. The need for constant approval leaves you open to manipulation by anyone who threatens to withdraw their affection or cooperation. This deck trains you to realize that you can cope with people effectively even if they dislike your boundaries. You do not need their goodwill to survive or succeed. True relationships survive limits; compliance only builds a cage.\n\nMindset: you do not need everyone to like you.",
      inputs: [
        { q: "I can't function or do business with someone if they are angry or irritated with me.", a: "You do not need their friendship or goodwill to deal with them assertively and effectively.", bundle: 'pro' },
        { q: "If my supervisor dislikes my boundaries, they will ruin my career.", a: "You can perform your job tasks effectively without needing your boss to be your friend.", bundle: 'pro' },
        { q: "I feel terrible when a store clerk gets annoyed with my return request.", a: "Their annoyance is their problem. Your goal is the refund, not their smile.", bundle: 'pro' },
        { q: "If I say no to my friends, our relationship will fall apart.", a: "True relationships survive boundaries. A friendship built on your compliance is a cage.", bundle: 'pro' },
        { q: "I must always stay in everyone's good graces to keep the system steady.", a: "You are not responsible for keeping everyone else comfortable at the expense of your limits.", bundle: 'pro' },
        { q: "I feel anxious when a coworker gives me a cold look in the hallway.", a: "Their cold look cannot hurt you. You can still work together without mutual warmth.", bundle: 'pro' },
        { q: "I worry that being assertive will make people talk behind my back.", a: "People will talk regardless of what you do. Your self-respect is more important than their gossip.", bundle: 'pro' },
        { q: "I need my family's approval before I can make a major life change.", a: "You are the final judge of your life. Their approval is a nice extra, not a requirement.", bundle: 'pro' },
      ]
    },
  ],
  counseling1: [
    {
      name: "Feelings",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"I can't do my duty until I feel motivated to do it.\"\nWhat is true instead: feelings are followers, not leaders. They catch up when we act.\nWhy it feels right: our emotions are loud, and acting against them feels unnatural or fake.\nWhat it costs: we stay paralyzed in bed, the piles grow higher, and our spirits sink lower.\n\nMindset: do the right thing first; the feelings will catch up.",
      inputs: [
        { q: "I can't pray today because my heart is too cold.", a: "Prayer is about obedience, not your mood. Pray for five minutes right now anyway.", bundle: 'pro' },
        { q: "It would be hypocritical to serve when I don't feel motivated.", a: "Doing what is right is obedience, not hypocrisy. Step out anyway.", bundle: 'pro' },
        { q: "I'll start cleaning once the depression lifts.", a: "The depression lifts as we work. Spread out the board and start.", bundle: 'pro' },
        { q: "I don't have the energy to read my Bible.", a: "We need the word most in the storm. Read one verse today.", bundle: 'pro' },
        { q: "I have to wait for God to give me the desire to reconcile.", a: "God gives us strength as we obey. Write the first message now.", bundle: 'pro' },
        { q: "If I act without feeling, it's just empty structure.", a: "Structure is the difference between sloppiness and effectiveness. Move anyway.", bundle: 'pro' },
        { q: "I'm too exhausted to face my daily duties today.", a: "Do what you can do this day. Even a small dent brings hope.", bundle: 'pro' },
        { q: "My feelings are too intense to ignore.", a: "We are feeling-oriented, but God's word is our authority. Obey the word.", bundle: 'pro' },
      ]
    },
    {
      name: "Habits",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"I am too old to change these deeply ingrained patterns of sin.\"\nWhat is true instead: you are not an animal to be trained. You are a new creation in Christ.\nWhy it feels right: we have failed so many times that staying defeated feels like realism.\nWhat it costs: we freeze ourselves in disobedience and deny the power of the Holy Spirit.\n\nMindset: change is possible because the Spirit is at work in you.",
      inputs: [
        { q: "You can't teach an old dog new tricks.", a: "You are not an animal. You are a man created in the image of God.", bundle: 'pro' },
        { q: "These patterns of worry have been with me for forty years.", a: "The Spirit is stronger than forty years of habit. Take the first step today.", bundle: 'pro' },
        { q: "I've tried to change before and always failed.", a: "You tried in your own strength. Let's work God's way with His word.", bundle: 'pro' },
        { q: "I am just naturally an anxious person.", a: "Anxiety is a habit of mind to be put off, not a personality trait.", bundle: 'pro' },
        { q: "My brain is wired to react in bitter anger.", a: "You are a new creation. Put off the old man and put on the new.", bundle: 'pro' },
        { q: "It's too late for me to build a disciplined life.", a: "Christians are not frozen or refrigerated. We are green and growing.", bundle: 'pro' },
        { q: "This habit of gossip is too deeply ingrained to stop.", a: "We can replace gossip with edification. Start the trade today.", bundle: 'pro' },
        { q: "I am stuck in this spiral of defeat forever.", a: "Tomorrow is in God's hands. He demands change and provides the power.", bundle: 'pro' },
      ]
    },
    {
      name: "Plain Speech",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"If I call their sin by its real name, I will break them.\"\nWhat is true instead: naming the real sin is the only way to find real forgiveness.\nWhy it feels right: we want to be gentle, and talking about \"mistakes\" feels safer than \"sin\".\nWhat it costs: they stay trapped under a vague cloud of guilt without any hope of a cure.\n\nMindset: kind words speak truth. We must poke the balloon to let the air out.",
      inputs: [
        { q: "Naming their sin will only crush their fragile self-esteem.", a: "Coddling their self-pity keeps them trapped. Naming the sin brings real hope.", bundle: 'pro' },
        { q: "I should euphemize it as a \"weakness\" to be kind.", a: "Euphemizing sin is a copout. We must call it sin to find the cure.", bundle: 'pro' },
        { q: "If I say they sinned, they will reject me.", a: "Speak the truth in love. True love cares too much to leave them in error.", bundle: 'pro' },
        { q: "They are too depressed to handle the truth about their failure.", a: "True hope begins when we stop making excuses and confess to the Lord.", bundle: 'pro' },
        { q: "I should focus on building them up first.", a: "We cannot build on top of rubble. We must clear away the sin first.", bundle: 'pro' },
        { q: "Naming their gossip as sin feels too harsh.", a: "It is a gentle restoration, but it must be honest. Gossip is sin.", bundle: 'pro' },
        { q: "Vague encouragement is safer than direct confrontation.", a: "Vague words leave them under vague guilt. Poke the balloon.", bundle: 'pro' },
        { q: "They just need me to agree that their situation is hopeless.", a: "Agreeing with their despair is a betrayal. Pity feeds depression.", bundle: 'pro' },
      ]
    },
    {
      name: "Self-Forgiveness",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"My biggest problem is that I need to learn to forgive myself.\"\nWhat is true instead: the Bible knows nothing of self-forgiveness. You need to accept God's forgiveness.\nWhy it feels right: we still feel the shame, so we assume the problem is with us, not our theology.\nWhat it costs: we waste our energy on a prideful attempt to pay for our own sins.\n\nMindset: Christ's blood paid the entire debt. Rest in His work.",
      inputs: [
        { q: "I know God forgives me, but I just can't forgive myself.", a: "You are trying to pay a debt that Christ already paid. Rest in His cross.", bundle: 'pro' },
        { q: "My guilt is too heavy because of what I did.", a: "Real guilt is washed clean by real blood. Accept God's verdict.", bundle: 'pro' },
        { q: "I must continue to feel bad to prove I am truly sorry.", a: "That is works-righteousness. Forgiveness is a promise, not a feeling.", bundle: 'pro' },
        { q: "I need to find a way to make peace with my own conscience.", a: "Conscience must be informed by the word. If God says you are clean, you are clean.", bundle: 'pro' },
        { q: "My failure is too unique for ordinary grace to cover.", a: "No sin is outside the design of the cross. Let the blood wipe it out.", bundle: 'pro' },
        { q: "I must carry this regret as a reminder of my weakness.", a: "Christ died to free you from regret. Walk in newness of life.", bundle: 'pro' },
        { q: "I can't move on until I feel reconciled with myself.", a: "You are reconciled to God. That is the only relationship that rules.", bundle: 'pro' },
        { q: "Self-condemnation is a sign of true humility.", a: "It is a prideful refusal to accept God's free gift of grace.", bundle: 'pro' },
      ]
    },
    {
      name: "Confrontation",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"Pointing out a brother's sin is an unloving and self-righteous thing to do.\"\nWhat is true instead: leaving a brother under the weight of sin is the truest form of hatred.\nWhy it feels right: we are afraid of looking hypocritical or being rejected by our friend.\nWhat it costs: they continue to slide down the skids, and the church leaks its power.\n\nMindset: go in meekness to restore, not to judge.",
      inputs: [
        { q: "Who am I to point out their failure when I have my own?", a: "You go in meekness as a fellow sinner, not as a judge.", bundle: 'pro' },
        { q: "It is more loving to stay quiet and just pray for them.", a: "True love is active. Leaving them trapped under the rock is hatred.", bundle: 'pro' },
        { q: "They will think I am lording it over them.", a: "Not if you go in gentleness, admitting you might need their help next week.", bundle: 'pro' },
        { q: "Confrontation always breeds division in the church.", a: "True unity is built on truth. Confrontation brings genuine reconciliation.", bundle: 'pro' },
        { q: "It is the pastor's job to handle these sins, not mine.", a: "Every member is called to restore. This is our mutual care.", bundle: 'pro' },
        { q: "I'm too afraid of their reaction to say anything.", a: "Fear is culpable laziness. God has given you the resources; use them.", bundle: 'pro' },
        { q: "They are caught in a major fall; I will only make it worse.", a: "If you go carefully, looking to yourself, you can never hurt them.", bundle: 'pro' },
        { q: "We should just accept people as they are.", a: "We accept them in Christ, but we never ignore the sin that destroys them.", bundle: 'pro' },
      ]
    },
  ],
  counseling2: [
    {
      name: "Blame",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"My biggest problems are caused entirely by how she acts.\"\nWe cannot control others, but we are fully responsible to God for our own responses.\nBlaming others feels right because their behavior really is unfair, and focusing on their sin shields us from the pain of our own failure.\nIt costs us our sanctification, leaving us trapped in a bitter deadlock where we wait for them to change before we will obey.\n\nMindset: my reaction is my responsibility, regardless of the pressure.",
      inputs: [
        { q: "I only lost my temper because he was being completely unreasonable first.", a: "He was wrong, but my angry reaction was my own sin before God. I own my response.", bundle: 'pro' },
        { q: "I have a right to be cold since she ignored me all morning.", a: "Bitterness is not a right; it is a sin. I must pursue peace regardless of her distance.", bundle: 'pro' },
        { q: "I can't start the reconciliation until he acknowledges his ninety percent of the blame.", a: "I am responsible for my own ten percent, and obedience means taking the first step.", bundle: 'pro' },
        { q: "My bitterness is just a natural result of being treated so unfairly.", a: "My bitterness is my own choice to nurse resentment. I must put it off and put on peace.", bundle: 'pro' },
        { q: "I wouldn't have lied to avoid the argument if she didn't react so harshly.", a: "I chose to lie instead of speaking the truth in love. The fear of her reaction is no excuse.", bundle: 'pro' },
        { q: "He is the one who broke the contract, so he is the entire problem here.", a: "He broke the contract, but my bitter attitude is my own failure to keep my heart clean.", bundle: 'pro' },
        { q: "I can't be expected to be nice when I am constantly being treated like an enemy.", a: "Christ calls us to bless those who curse us. The treatment I receive does not rule my duty.", bundle: 'pro' },
        { q: "Our roommate group is completely ruined because of her selfishness.", a: "I cannot control her selfishness, but I can control my own daily acts of service to her.", bundle: 'pro' },
      ]
    },
    {
      name: "Gossip",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"Talking about his failure with an outside friend helps me process the pain.\"\nSpeaking about a brother behind his back is gossip, which destroys unity and spreads poison in the church.\nIt feels right because sharing the story with a sympathetic friend relieves our immediate emotional pressure and makes us feel validated.\nIt costs the church its power, breeds suspicion, and prevents the face-to-face reconciliation that Jesus commands.\n\nMindset: talk to the person, never about them.",
      inputs: [
        { q: "I'm just sharing this prayer request about his marriage so we can lift them up.", a: "Sharing negative details about an absent brother is gossip, even when I call it prayer.", bundle: 'pro' },
        { q: "Getting this frustration off my chest with a friend helps me cope with her pride.", a: "Venting to an outsider only deepens my resentment. I must go to her face-to-face.", bundle: 'pro' },
        { q: "If I tell a neutral third party first, I can get their advice on the conflict.", a: "I am gathering a biased audience for my side. I must go directly to the person I have the issue with.", bundle: 'pro' },
        { q: "It's not gossip if the details of his moral failure are completely true.", a: "Love covers a multitude of sins. Spreading true rumors is still the sin of gossip.", bundle: 'pro' },
        { q: "I need to tell others about her cheating so they can protect themselves from her.", a: "Hiding behind warning others is a copout. I must go and confront her privately in meekness.", bundle: 'pro' },
        { q: "Talking to his roommate about his drinking will help us find a solution.", a: "I am talking behind his back. I must go to him directly or bring witnesses face-to-face.", bundle: 'pro' },
        { q: "She won't listen to me anyway, so there's no harm in talking to someone else about it.", a: "The harm is to my own heart and the church's peace. I must stay silent or take the next step.", bundle: 'pro' },
        { q: "I need to vent about the leader's decision because it was incredibly unfair to the group.", a: "Venting is murmuring. I must go to the leader directly or let the matter go in love.", bundle: 'pro' },
      ]
    },
    {
      name: "Neutrality",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"Hiding behind silence is the most loving and non-judgmental way to handle other people's conflicts.\"\nStaying silent during active sin is a failure to love your brother and a betrayal of the body of Christ.\nIt feels right because it protects us from the discomfort of confrontation, and lets us pretend we are being humble and non-directive.\nIt costs our brother his restoration, leaving him trapped under the rock of sin while the church's witness decays.\n\nMindset: love is active and confrontational when a brother is caught in a trap.",
      inputs: [
        { q: "It is none of my business if a fellow member is cheating on his taxes.", a: "We are members of one another. If he is trapped in sin, it is my business to restore him.", bundle: 'pro' },
        { q: "I am being humble by not judging their marriage conflict from the outside.", a: "Humility does not mean passivity. I must offer to help them reconcile face-to-face.", bundle: 'pro' },
        { q: "It is more loving to stay quiet and just pray for his drug habit silently.", a: "Leaving him under the weight of sin is hatred, not love. I must speak to him directly.", bundle: 'pro' },
        { q: "It is the pastor's job to deal with public hypocrisy, not mine as a layman.", a: "Every member is called to restore. God laid this brother in my pathway today.", bundle: 'pro' },
        { q: "I should stay out of it to preserve my own peace and comfort in the small group.", a: "That is selfish laziness. True peace is built on truth and reconciliation.", bundle: 'pro' },
        { q: "He is too intimidating, so I'll just wait for someone else to say something.", a: "Fear of man is a trap. I must go in meekness, trusting God for the courage.", bundle: 'pro' },
        { q: "If I stay neutral, I can remain a friend to both sides of the fight.", a: "Neutrality in the presence of sin is a compromise. I must stand for truth and reconciliation.", bundle: 'pro' },
        { q: "They will think I am being self-righteous if I bring up their sin.", a: "If I go in meekness, admitting I might need their help next week, I cannot look self-righteous.", bundle: 'pro' },
      ]
    },
    {
      name: "Retaliation",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"Hitting back in kind is the only fair way to teach my tormentor a lesson.\"\nRetaliation only multiplies the forces of evil; we conquer hostility with active, aggressive goodness.\nIt feels right because matching their anger feels like justice, and defending ourselves feels like a basic survival reflex.\nIt costs us the victory, keeping both parties locked in a sinful ping-pong match that God never blesses.\n\nMindset: defeat evil with good, using the powerful weapons of grace.",
      inputs: [
        { q: "He slandered my work, so I have every right to expose his mistakes in the next meeting.", a: "If I return evil for evil, I have been conquered. I must find a way to serve him instead.", bundle: 'pro' },
        { q: "If I am nice to her after she insulted me, it will look like she won the fight.", a: "The winner is the one who obeys God. I conquer her insult by offering a blessing.", bundle: 'pro' },
        { q: "He called me a legalist, so I should call him out on his obvious hypocrisy.", a: "A soft answer turns away wrath. I must respond with kind words and keep my heart clean.", bundle: 'pro' },
        { q: "She deserves to feel the pain she caused me by ignoring my texts.", a: "Vengeance is the Lord's prerogative, not mine. I must let go of the score.", bundle: 'pro' },
        { q: "I should protect myself by cutting him off completely and never offering help.", a: "Cutting him off is bitter retreat. I must look for a practical way to meet his needs.", bundle: 'pro' },
        { q: "He threw my gift back in my face, which proves being nice is a waste of time.", a: "My duty is to obey God, not to get a warm reaction. I will continue to bless him.", bundle: 'pro' },
        { q: "If I don't defend my reputation publicly, everyone will believe his lies.", a: "My reputation is in God's hands. I will focus on doing what is honourable in the eyes of everyone.", bundle: 'pro' },
        { q: "Offering to carry his bags is just letting him walk all over me like a doormat.", a: "It is an aggressive act of biblical love. I will serve him in faith to break his hostility.", bundle: 'pro' },
      ]
    },
  ],
  seenandtrusted2careshedidnotaskf: [
    {
      name: "Initiative",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"If she wants something done she can ask me — I'm not a mind reader.\"\n\nWhat is true instead: the asking is most of the cost. By the time she has noticed, decided it matters and worked out how to say it without sounding like a complaint, she has done the expensive part alone.\n\nWhy it feels right: it sounds fair, and it is even true in a narrow sense. You genuinely cannot read her mind, and you would genuinely have done it if asked.\n\nWhat it costs: she becomes the manager of a household with one employee. Being managed is exhausting; being the manager is worse.\n\nMindset: noticing is part of the job, not an optional extra.",
      inputs: [
        { q: "I said \"just tell me what you need doing\" and felt reasonable about it.", a: "Knowing what needs doing is the work. Volunteering for the easy half is not help.", bundle: 'pro' },
        { q: "I did the thing the moment she asked and expected that to count.", a: "It counts less than she hoped, because she still had to carry it as far as my ears.", bundle: 'pro' },
        { q: "I think it is unfair to be blamed for not noticing something.", a: "Nobody is blaming me for a bad memory. She is telling me she is tired of being the one who remembers.", bundle: 'pro' },
        { q: "I genuinely did not see it.", a: "Then the fix is to look more often, not to explain that I was not looking.", bundle: 'pro' },
        { q: "I wait for her to ask so that I get it right rather than doing the wrong thing.", a: "Getting it slightly wrong on my own initiative costs her far less than getting it perfectly right on hers.", bundle: 'pro' },
        { q: "She stopped asking and I assumed things had got better.", a: "She stopped asking because asking cost more than doing it herself. That is worse, not better.", bundle: 'pro' },
        { q: "I want a list so I know where I stand.", a: "A list means she still owns the whole thing and I own a few tasks on it.", bundle: 'pro' },
        { q: "I think she should be grateful when I do help.", a: "Gratitude for doing half of my own life is a strange thing to be waiting for.", bundle: 'pro' },
      ]
    },
    {
      name: "Solving",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"If she tells me a problem, she wants me to solve it. That's what I'm for.\"\n\nWhat is true instead: being tended to and being fixed are two different needs, and only one of them is met by advice.\n\nWhy it feels right: solving is what you are good at, it is what you would want, and it feels like the useful thing to offer instead of sitting there uselessly.\n\nWhat it costs: she learns that telling you something means being given a task list. So she stops telling you the things that have no solution, which is most of the things that matter.\n\nMindset: my solution will keep; her telling me might not.",
      inputs: [
        { q: "She starts describing a problem and I am already forming the answer.", a: "The answer will still be there in twenty minutes. She might not still be talking.", bundle: 'pro' },
        { q: "I feel useless just sitting there while she is upset.", a: "Sitting there is the thing being asked for. Useless is what it feels like from the inside, not what it is.", bundle: 'pro' },
        { q: "I have offered the same advice three times and she has not taken it.", a: "If it did not land three times, advice was never what was wanted.", bundle: 'pro' },
        { q: "She says she just wants to vent and I find that pointless.", a: "Venting is the process. It looks pointless from outside and it does the work.", bundle: 'pro' },
        { q: "I want to point out the part where she made it worse for herself.", a: "True, and unwanted right now. It will still be true when she is not raw.", bundle: 'pro' },
        { q: "I gave the solution and she got annoyed, which seems unfair.", a: "She heard \"the feeling is the problem\". That is not what I meant and it is what arrived.", bundle: 'pro' },
        { q: "I ask what she wants and it feels like a cop-out.", a: "Asking is not a cop-out. Guessing wrong and calling it care would be.", bundle: 'pro' },
        { q: "She has stopped telling me about her work.", a: "I have made telling me expensive. That is the thing to notice.", bundle: 'pro' },
      ]
    },
    {
      name: "Her Looks",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"She knows I find her attractive. I married her — I shouldn't have to keep saying it.\"\n\nWhat is true instead: she cannot hear what you are not saying, and the version of her that most needs seeing is the one that has been buried under years of being useful.\n\nWhy it feels right: it is true that you think it. From inside your head, a thing you think constantly feels like a thing you have said.\n\nWhat it costs: she is seen all day as a mother, a colleague and a set of responsibilities. If she is not seen as a woman anywhere, that part of her quietly closes, and neither of you can name what went.\n\nMindset: what stays in my head does not reach her.",
      inputs: [
        { q: "I think it every day and I say it a few times a year.", a: "The gap between those two numbers is the whole problem, and it is entirely mine to close.", bundle: 'pro' },
        { q: "Saying it out loud feels forced now.", a: "Awkward and true beats smooth and absent. It gets easier by the fourth time.", bundle: 'pro' },
        { q: "I compliment her and she brushes it off, so I stop.", a: "She brushed off the first one after two years of silence. Say the second one.", bundle: 'pro' },
        { q: "I tell her the house looks great and she seems flat about it.", a: "I praised the work. She was hoping to be seen, not appraised.", bundle: 'pro' },
        { q: "I feel like a compliment now would sound like I want something.", a: "That is only true because I have let them become currency. The cure is more of them, not fewer.", bundle: 'pro' },
        { q: "She has just had a baby and I think she does not want to hear it.", a: "She has never needed it more. She will decide whether to believe it; my job is to say it.", bundle: 'pro' },
        { q: "I think she should get that from herself, not from me.", a: "She does carry her own. Mine is not a substitute for it and it is not nothing either.", bundle: 'pro' },
        { q: "I only notice how she looks when she has made an effort.", a: "The Tuesday-morning version is the one that would mean the most.", bundle: 'pro' },
      ]
    },
    {
      name: "Mind-Reading",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"If I have to be told what she needs, it doesn't count.\"\n\nWhat is true instead: being told is normal. The thing that counts is what happens afterwards — whether you keep needing to be told the same thing.\n\nWhy it feels right: the romantic version has him simply knowing, and being instructed feels like failing a test you wanted to pass on talent.\n\nWhat it costs: you either avoid asking, and get it wrong, or you sulk when she tells you, and she learns not to. Both roads end with her doing it herself.\n\nMindset: being told once is information; being told five times is the failure.",
      inputs: [
        { q: "She tells me exactly what she wants and I feel deflated.", a: "She just saved me a month of guessing. That is generosity, not a criticism.", bundle: 'pro' },
        { q: "I want to be the man who just knows.", a: "The man who just knows got there by asking a lot, early, and remembering.", bundle: 'pro' },
        { q: "I did it because she asked, and it felt hollow.", a: "It felt hollow to me and it did not to her. My feeling is not the measure.", bundle: 'pro' },
        { q: "I would rather do nothing than do the wrong thing.", a: "Nothing is the wrong thing, done reliably.", bundle: 'pro' },
        { q: "I feel patronised when she explains how she wants it.", a: "She is describing her own preference in her own house. That is not a lesson about my competence.", bundle: 'pro' },
        { q: "She has told me the same thing three times.", a: "Three times is my score, not hers. Write it down and stop needing the fourth.", bundle: 'pro' },
        { q: "I ask her what she needs and it feels like admitting defeat.", a: "Asking narrows the search. Refusing to ask is not skill, it is pride with a cost attached.", bundle: 'pro' },
        { q: "I want credit for finally getting it right.", a: "The credit is that she stops having to track it. That is the whole prize.", bundle: 'pro' },
      ]
    },
    {
      name: "Rescue",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"A good man carries everything, so she never has to worry about anything.\"\n\nWhat is true instead: taking the load is care; taking the decisions is management. She is an adult with her own competence, and protecting her from her own life removes the thing she stands on.\n\nWhy it feels right: it is the generous-sounding version of the problem. More is being done, by you, at cost to you — it feels like the opposite of selfishness.\n\nWhat it costs: she stops being a partner and becomes a dependent, then resents it without being able to say why. And you burn out doing a job nobody asked you to take.\n\nMindset: I carry the weight; she keeps the choices.",
      inputs: [
        { q: "I decided something for her because I knew the right answer.", a: "Being right is not the same as it being mine to decide.", bundle: 'pro' },
        { q: "I keep bad news from her to protect her from worrying.", a: "Managed information is the opposite of safety. She will feel the shape of what I am hiding.", bundle: 'pro' },
        { q: "I am exhausted from carrying everything and slightly proud of it.", a: "The pride is the tell. This stopped being about her a while ago.", bundle: 'pro' },
        { q: "She says she feels handled and I think that is ungrateful.", a: "Handled is exactly what over-care feels like from inside. That is useful information, not an insult.", bundle: 'pro' },
        { q: "I want to fix a problem in her family that she has not asked me to touch.", a: "Her family is hers. Support is offered; takeover is not.", bundle: 'pro' },
        { q: "I redo things she has done because my way is better.", a: "Doing it my way is not care. It is a small correction, repeated daily.", bundle: 'pro' },
        { q: "I think she cannot cope with the difficult stuff.", a: "She coped for years before I was there. My job is to lighten it, not to replace her.", bundle: 'pro' },
        { q: "I have taken so much that I have started resenting her for it.", a: "I took more than was asked and sent her the bill. Time to hand some back and say so.", bundle: 'pro' },
      ]
    },
  ],
  seenandtrusted3askingtobetrusted: [
    {
      name: "Asking",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"If I have to ask for it, it doesn't count.\"\n\nWhat is true instead: nearly everything worth having in a relationship has to be asked for once. What would not count is having to ask for the same thing forever — and that only happens when the first ask never gets made properly.\n\nWhy it feels right: the wanted version has her simply knowing, and asking feels like collecting something you had to beg for.\n\nWhat it costs: you wait, she does not guess, and the disappointment collects until it comes out as a verdict on her rather than a request.\n\nMindset: asked for once and given freely is the normal shape of this.",
      inputs: [
        { q: "I want her to notice without being told.", a: "She is not withholding it. She does not know it is missing.", bundle: 'pro' },
        { q: "She gave me exactly what I asked for and it felt hollow.", a: "The hollowness is mine and it fades. The alternative is not getting it at all.", bundle: 'pro' },
        { q: "Asking feels like admitting I am needy.", a: "Everyone needs this. The only choice is whether it gets said or leaks.", bundle: 'pro' },
        { q: "I have been waiting a month for her to work it out.", a: "A month of waiting has produced nothing except a worse mood in me.", bundle: 'pro' },
        { q: "I dropped a hint and she missed it.", a: "A hint is a test. She failed a test she did not know she was sitting.", bundle: 'pro' },
        { q: "I think a good relationship would not need this kind of conversation.", a: "Good relationships are the ones where these conversations happen early and briefly.", bundle: 'pro' },
        { q: "I asked once and nothing changed, so I have stopped asking.", a: "Once is a request, twice is a pattern being established. Stopping after one is quitting early.", bundle: 'pro' },
        { q: "I am embarrassed by how small the thing I want is.", a: "Small is good. Small is easy to give and easy to do again tomorrow.", bundle: 'pro' },
      ]
    },
    {
      name: "Withdrawal",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"If I go quiet, she will work out that something is wrong.\"\n\nWhat is true instead: she will work out that something is wrong and have no idea what. All the silence transmits is a threat with no content.\n\nWhy it feels right: it does register. The temperature drops, she becomes attentive, and it feels like being heard without the exposure of speaking.\n\nWhat it costs: she starts managing your moods instead of talking to you, and you get attention for being difficult rather than for what you actually wanted.\n\nMindset: silence gets me noticed and never gets me answered.",
      inputs: [
        { q: "I have gone cold and part of me wants her to notice.", a: "She has noticed. She cannot answer a message with no words in it.", bundle: 'pro' },
        { q: "She asked what was wrong and I said nothing.", a: "That was the moment. I closed the only door that was open.", bundle: 'pro' },
        { q: "I think saying it out loud would make me look weak.", a: "Radiating it for three days is the more visible version of the same thing.", bundle: 'pro' },
        { q: "Going quiet is the only thing that gets a reaction.", a: "It gets a reaction to my mood. Nothing about the actual problem changes.", bundle: 'pro' },
        { q: "I want her to ask again so that I can finally say it.", a: "Making her ask three times is a charge I am adding to a request.", bundle: 'pro' },
        { q: "I do not know what is wrong, so I cannot say anything.", a: "\"I don't know what's wrong and I know I'm off\" is a complete sentence and it opens everything.", bundle: 'pro' },
        { q: "The silence has lasted so long that raising it now would be embarrassing.", a: "Naming it late is awkward for ten minutes. Not naming it is another fortnight.", bundle: 'pro' },
        { q: "She has started tiptoeing around me and I quite like the care.", a: "That care is fear. It is a poor substitute for the thing I actually wanted.", bundle: 'pro' },
      ]
    },
    {
      name: "Her Motive",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"When she checks up on me, it means she does not respect me.\"\n\nWhat is true instead: her checking is usually about her own unsteadiness, not a verdict on your competence. It still needs addressing — and it is a different problem with a different answer.\n\nWhy it feels right: it lands on the spot that hurts, and the interpretation arrives instantly and fully formed.\n\nWhat it costs: you answer a contempt that was not there, she is bewildered by the size of it, and the actual request — for room — never gets made.\n\nMindset: the checking is usually her nerves, not her opinion of me.",
      inputs: [
        { q: "She asked twice whether I had done it and I heard contempt.", a: "I heard contempt. What was said was a question. Those are not the same thing.", bundle: 'pro' },
        { q: "She corrects small things constantly and it feels like a running assessment.", a: "It may be anxiety with a to-do list attached. Either way, what I want is room, and I can ask for that.", bundle: 'pro' },
        { q: "I want to accuse her of thinking I am useless.", a: "I would be arguing with a thought I assigned her. Better to say what I want instead.", bundle: 'pro' },
        { q: "She hovers when I do something and I go cold.", a: "Cold answers a crime she has not committed. A sentence answers the actual situation.", bundle: 'pro' },
        { q: "I think if she trusted me she would not need to ask.", a: "Trust gets built by things going well repeatedly, not by her deciding to feel it.", bundle: 'pro' },
        { q: "Her lack of confidence in me is obvious.", a: "What is obvious is her behaviour. The reason for it is a guess I keep treating as fact.", bundle: 'pro' },
        { q: "I want her to admit she does not think I am capable.", a: "Winning that admission would give me nothing. Being left to it would give me everything.", bundle: 'pro' },
        { q: "I feel like a teenager being supervised.", a: "The feeling is real and the label is mine. \"Leave this one to me\" is the whole fix.", bundle: 'pro' },
      ]
    },
    {
      name: "Being Wanted",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"Needing to feel wanted by her is not a very manly thing to need.\"\n\nWhat is true instead: being well received — welcomed, desired, glad-you-are-here — is a real need, and unmet it does more damage than almost anything else on this list.\n\nWhy it feels right: the strong version of a man does not need to be welcomed, and admitting you do feels like handing over something that can be used.\n\nWhat it costs: you never ask, so it never arrives, and the disappointment reappears as coldness or as fault-finding about something else entirely.\n\nMindset: wanting to be wanted is not weakness; hiding it is what causes the damage.",
      inputs: [
        { q: "I want to say I miss her being pleased to see me and it sounds pathetic.", a: "It sounds honest. Pathetic is going cold for a month instead.", bundle: 'pro' },
        { q: "I think I should be able to run on my own approval.", a: "I do run on my own approval. Hers is not the fuel, and its absence still registers.", bundle: 'pro' },
        { q: "She is warm to me and I make a joke to break it.", a: "The joke is a small refusal. She will make fewer offers.", bundle: 'pro' },
        { q: "I have started picking at small things instead of saying what I miss.", a: "The fault-finding is the ask, badly disguised. Say the ask.", bundle: 'pro' },
        { q: "Wanting her to desire me feels like something I should have grown out of.", a: "Nobody grows out of it. Some people just stop mentioning it.", bundle: 'pro' },
        { q: "I feel like a stranger in my own house and cannot say so.", a: "\"I want to feel like you're glad I'm here\" is one sentence and it changes the room.", bundle: 'pro' },
        { q: "If I ask to be wanted, any warmth afterwards will feel manufactured.", a: "She will not fake this. And practised warmth becomes real warmth faster than absence does.", bundle: 'pro' },
        { q: "I am waiting for her to want me first.", a: "We are both waiting, in different rooms, for the same thing.", bundle: 'pro' },
      ]
    },
    {
      name: "Fault",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"This loop is mostly her doing, so it is mostly hers to fix.\"\n\nWhat is true instead: the loop runs on two halves, and yours is the only one you can operate. Moving it first is not a concession, it is the only available lever.\n\nWhy it feels right: the sequence really may have started with her. You can trace it, and the tracing is satisfying.\n\nWhat it costs: two people wait for each other to go first, and the waiting is itself the pattern continuing. Nothing moves for a year.\n\nMindset: the only half I can move is mine.",
      inputs: [
        { q: "I can prove she started it.", a: "I probably can. The proof does not move anything.", bundle: 'pro' },
        { q: "Going first feels like accepting blame for the whole thing.", a: "Going first is not a confession. It is the only move available to me.", bundle: 'pro' },
        { q: "I have decided to wait and see whether she changes.", a: "She is doing the same, which is the loop, running.", bundle: 'pro' },
        { q: "I want the pattern acknowledged before I do anything differently.", a: "Acknowledgement is far easier to get after something has changed than before.", bundle: 'pro' },
        { q: "I keep score of who has made more effort.", a: "Keeping score is one of my halves. It is also one I can put down.", bundle: 'pro' },
        { q: "If I stop withdrawing and she keeps checking, I will have lost.", a: "There is no scoreboard. There is a house that either warms up or does not.", bundle: 'pro' },
        { q: "She does the same things back and it feels unfair.", a: "Fair is not the goal. Out of the loop is the goal.", bundle: 'pro' },
        { q: "I want a rule that makes it impossible for this to happen again.", a: "One rule helps: anything affecting us both gets asked about before it is settled.", bundle: 'pro' },
      ]
    },
  ],
  seenandtrusted1thesafetyshereads: [
    {
      name: "Her Worry",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"If she is anxious about something, I have failed at making her feel safe.\"\n\nWhat is true instead: her emotional regulation is partly her own work. Your job is to be reliable and interested, not to organise your life so that she never feels uncertain.\n\nWhy it feels right: her anxiety often arrives pointed at you, and the fastest way to make it stop is to accept the charge and start managing it.\n\nWhat it costs: you end up walking on eggshells around her moods, which makes you less honest, and less honest is less safe.\n\nMindset: I am responsible for being trustworthy, not for her never worrying.",
      inputs: [
        { q: "She is catastrophising about a decision I made and I feel I have to fix her mood.", a: "I can be steady and interested without taking on the job of regulating her.", bundle: 'pro' },
        { q: "I have started editing what I tell her to avoid setting her off.", a: "Editing myself makes me less predictable, which is the opposite of safety.", bundle: 'pro' },
        { q: "She is anxious and I feel accused just by being in the room.", a: "Her anxiety is not a verdict on me. I can stay without pleading guilty.", bundle: 'pro' },
        { q: "I want her to stop worrying so that I can relax.", a: "Wanting her calm for my sake is not care. I can be present while she is not calm.", bundle: 'pro' },
        { q: "I keep reassuring her and it never seems to be enough.", a: "Reassurance does not settle a pattern. What settles it is a year of doing what I said.", bundle: 'pro' },
        { q: "I feel like a failure because she is still uneasy after everything I have done.", a: "My reliability is the input. Her sense of safety builds on its own timescale.", bundle: 'pro' },
        { q: "She worries about money even though the numbers are fine.", a: "I can show her the numbers and still not be able to hand her the feeling.", bundle: 'pro' },
        { q: "I have started making decisions based on what will upset her least.", a: "Decisions made to avoid her reaction stop being mine, and she can tell.", bundle: 'pro' },
      ]
    },
    {
      name: "Anger",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"Any anger from me makes her feel unsafe, so I should stay level.\"\n\nWhat is true instead: she can hear you angry without fear, as long as she can see you have full control of yourself.\n\nWhy it feels right: you have seen her flinch, and the conclusion that anger itself is the problem is both obvious and comfortable.\n\nWhat it costs: emotional sterility. You go flat instead of honest, resentment collects, and when it finally arrives it arrives badly — which is the thing she actually fears.\n\nMindset: controlled anger is safe; swallowed anger is a fuse.",
      inputs: [
        { q: "I am furious and I have decided to say nothing about it.", a: "Silence now is a larger version of this conversation later.", bundle: 'pro' },
        { q: "I think being angry means I have lost the argument.", a: "Anger is information about what matters to me. It is not a verdict on my case.", bundle: 'pro' },
        { q: "I raise my voice and immediately feel like a bully.", a: "Volume is not violence. What frightens her is unpredictability, not decibels.", bundle: 'pro' },
        { q: "I want to be the man who never gets angry.", a: "A man who never gets angry has either no boundaries or a hidden ledger.", bundle: 'pro' },
        { q: "She flinched, so I decided never to bring it up again.", a: "The lesson is to say it differently, not to stop saying it.", bundle: 'pro' },
        { q: "I go very quiet and cold instead of saying I am angry.", a: "Cold is harder to read than loud, and she has to guess. Guessing is what costs her.", bundle: 'pro' },
        { q: "I have been irritable for a week without naming a single thing.", a: "Naming one thing badly beats radiating it accurately for a week.", bundle: 'pro' },
        { q: "I think she should be able to tell that I am upset.", a: "She can tell I am upset. She cannot tell whether it is aimed at her.", bundle: 'pro' },
      ]
    },
    {
      name: "Limits",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"If she feels safe with me, it means she gets her way.\"\n\nWhat is true instead: a predictable limit creates more safety than a man who yields until he suddenly does not.\n\nWhy it feels right: giving in ends the discomfort now, and the room goes calm, and calm looks like safety from the inside.\n\nWhat it costs: she stops knowing where the edges are. A man with no visible limits eventually produces one out of nowhere, and unpredictability is exactly what she is scanning for.\n\nMindset: she can lean on a line she can see coming.",
      inputs: [
        { q: "I agreed to something I do not want because the argument was tiring.", a: "A yes I resent will arrive as a no later, at a worse moment.", bundle: 'pro' },
        { q: "I think saying no to her is the opposite of making her feel secure.", a: "A reliable no is what makes my yes worth anything.", bundle: 'pro' },
        { q: "I have said yes to three things this week that I did not want.", a: "I am building a bill, and she has no idea it exists.", bundle: 'pro' },
        { q: "Setting a limit feels like I am punishing her.", a: "A limit with warmth attached is not a punishment. Leaving without one is.", bundle: 'pro' },
        { q: "I gave in and then went cold for the rest of the evening.", a: "The coldness is the no I did not say. Saying it plainly would have cost her less.", bundle: 'pro' },
        { q: "I worry that stopping a conversation is a form of abandoning her.", a: "Stopping with a stated return time is the opposite of abandonment.", bundle: 'pro' },
        { q: "I keep the peace by never raising the thing that bothers me.", a: "That is not peace, it is a delay, and she is paying interest on it too.", bundle: 'pro' },
        { q: "I think a good man absorbs more than he says.", a: "Absorbing has a capacity. Past it, everything comes out at once and frightens her.", bundle: 'pro' },
      ]
    },
    {
      name: "Promises",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"The small things I forget are not a big deal — she knows what I actually care about.\"\n\nWhat is true instead: reliability is not a background quality, it is the whole evidence. She cannot check what you feel; she can check whether the thing got done.\n\nWhy it feels right: each individual miss really is small, and you know your own intentions, so the gap between them and the record is invisible from where you stand.\n\nWhat it costs: she starts keeping track. The tracking is exhausting, and the exhaustion arrives as nagging, which you then experience as disrespect.\n\nMindset: she cannot see my intentions, only my record.",
      inputs: [
        { q: "I forgot something small again and she made a face about it.", a: "To her it is not the errand. It is the fourth data point.", bundle: 'pro' },
        { q: "I think she is making too much of a missed phone call.", a: "She is not counting phone calls. She is reading whether my word means anything.", bundle: 'pro' },
        { q: "I meant to do it and the week got away from me.", a: "Meaning to do it lives entirely inside my head. Nothing about it reaches her.", bundle: 'pro' },
        { q: "She checks whether I have done something and I feel supervised.", a: "The checking is downstream of a pattern. I built it and I can unbuild it.", bundle: 'pro' },
        { q: "I said I would do it, then did most of it, and think that counts.", a: "Most of it means she still has to hold the rest, which is what she was trying to put down.", bundle: 'pro' },
        { q: "I keep saying yes to things I will not get to.", a: "A no now is worth more to her than a yes I will quietly not honour.", bundle: 'pro' },
        { q: "She has stopped asking me about the thing I never did.", a: "Her giving up on asking is worse news than her nagging.", bundle: 'pro' },
        { q: "I fixed the big thing, so the small ones should be forgiven.", a: "The big thing was one afternoon. The small ones are every week.", bundle: 'pro' },
      ]
    },
    {
      name: "Distance",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "\"Going quiet for a bit is harmless. I just need some space to think.\"\n\nWhat is true instead: an unexplained disappearance is the single most destabilising thing you can do, and the explanation costs one sentence.\n\nWhy it feels right: you genuinely do process better alone, and announcing it feels like making a production out of something private.\n\nWhat it costs: she has to work out where you went and why, and the answers she reaches on her own are worse than the truth. Space without a signpost reads as withdrawal of the relationship.\n\nMindset: take the space and say that you are taking it.",
      inputs: [
        { q: "I have been in my own head for two days and said nothing about it.", a: "One sentence would have turned two days of guessing into a fact.", bundle: 'pro' },
        { q: "I think announcing that I need space is dramatic.", a: "\"I need a couple of hours in my head, it isn't about you\" takes four seconds.", bundle: 'pro' },
        { q: "I withdraw when I am hurt and expect her to notice why.", a: "She notices. She just has to invent the reason, and she will invent a worse one.", bundle: 'pro' },
        { q: "I go quiet to signal that something is wrong.", a: "Silence is a poor signal. It transmits that something is wrong and nothing else.", bundle: 'pro' },
        { q: "She asks what is going on and I say nothing, meaning I do not want to discuss it yet.", a: "\"Not yet\" is a real answer. \"Nothing\" is a locked door with the lights on.", bundle: 'pro' },
        { q: "I disappear into work when things get difficult at home.", a: "Being busy is a respectable-looking way of leaving the room.", bundle: 'pro' },
        { q: "I think she should give me the benefit of the doubt when I am quiet.", a: "The benefit of the doubt runs out faster than I think, and I can just tell her instead.", bundle: 'pro' },
        { q: "I stayed silent to avoid a fight and the evening went cold anyway.", a: "I did not avoid the fight. I moved it, and made it about my silence as well.", bundle: 'pro' },
      ]
    },
  ],
  masculine1: [
    {
      name: "She is your Oracle",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "Viewing her criticism not as an attack, but as information about where you have stopped being present or true.\nWhen you accept her as your Oracle, you stop defending and start looking for the kernel of truth in what she says.",
      inputs: [
        { q: "She complains about something trivial.", a: "What could be true here? Is she reflecting a blind spot in me right now?", bundle: 'pro' },
        { q: "I feel unfairly accused.", a: "Instead of correcting the facts, ask: Where have I stopped leading or loving her in this situation?", bundle: 'pro' },
        { q: "Her emotions seem completely illogical.", a: "Her emotions aren't a problem to be solved logically; they're a signal I need to listen to.", bundle: 'pro' },
        { q: "I just want her to be \"normal.\"", a: "Her emotional storms are the flip side of the fire and passion I love about her.", bundle: 'pro' },
        { q: "I feel like she's just attacking me out of malice.", a: "Her attack is a clumsy expression of pain. If I look deeper, I can find the kernel of truth.", bundle: 'pro' },
        { q: "She complains that I forgot the milk again.", a: "It's not about the milk; to her, it's about whether she is top of mind for me.", bundle: 'pro' },
        { q: "She says my plans are always disorganized.", a: "She is reflecting my lack of focus and attention. I need to tighten up on my presence.", bundle: 'pro' },
        { q: "She is questioning my ability to handle our finances.", a: "She is feeling unsafe because of my passivity. I need to step up and provide the structure she needs.", bundle: 'pro' },
      ]
    },
    {
      name: "What I Want Matters",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The posture that your own truth and needs are fundamental to your ability to lead.\nBeing \"nice\" by not having an opinion isn't leadership; it's abdicating the frame.",
      inputs: [
        { q: "I'm afraid my opinion will start a fight.", a: "Speaking my truth is the most loving thing I can do for the relationship long-term.", bundle: 'pro' },
        { q: "I think I'm being \"easy-going\" when I say \"you choose.\"", a: "I'm not easy-going; I'm being lazy. Choosing is a gift of structure.", bundle: 'pro' },
        { q: "I feel selfish when I set a boundary.", a: "A little healthy selfishness makes me a more stable man she can actually trust.", bundle: 'pro' },
        { q: "I should let her choose everything so she stays happy.", a: "Deferring to her is abdication, not love. My expressed desire is what creates the polarity she craves.", bundle: 'pro' },
        { q: "If I say \"no\" to her request, she'll think I'm mean.", a: "Having a strong \"no\" is the only way she can trust my \"yes\".", bundle: 'pro' },
        { q: "I don't want to impose my preferences on the family.", a: "Stating what I want provides a point of orientation. It settles her nervous system.", bundle: 'pro' },
        { q: "I feel guilty for spending money on my own hobbies.", a: "A Masculine leader must attend to his own basic needs first in order to serve others.", bundle: 'pro' },
        { q: "I'll just say \"whatever you want\" to avoid the decision-making effort.", a: "\"Whatever you want\" is the default of a pleaser. Choosing is a gift of structure.", bundle: 'pro' },
      ]
    },
    {
      name: "Nice Guy Pleasing",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The belief that being harmless, needless, and pleasing is the path to love and peace.\n\nWhat is true instead: hiding your needs is manipulative and kills polarity.\n\nIt feels right because you avoid immediate conflict and feel like a \"good boy\" who honors women.\n\nBut it costs you her respect; she cannot relax with a man who has no boundaries or backbone.\n\nMindset: a little healthy selfishness makes me a stable man she can actually trust.",
      inputs: [
        { q: "I should hide my anger so I don't upset the peace.", a: "Suppressing my anger turns me into a victim. I will share my truth cleanly instead.", bundle: 'pro' },
        { q: "If I always agree with her, she'll feel loved.", a: "Agreement out of fear breeds resentment. She wants to be with a man, not a yes-man.", bundle: 'pro' },
        { q: "Having no opinions makes me easy-to-manage and pleasant.", a: "Being formless makes her feel unpartnered and unsafe. My clarity is sexy.", bundle: 'pro' },
        { q: "I want her approval before I make any personal choice.", a: "Seeking her permission turns her into my surrogate mother. I lead myself first.", bundle: 'pro' },
        { q: "I'll do all the chores so she'll finally want to have sex with me.", a: "Choreplay is a covert contract that kills attraction. I do chores for myself, not to earn sex.", bundle: 'pro' },
        { q: "I'm afraid she will leave if I show my true power.", a: "If my power scares her off, then she was never ready for a Masculine partner.", bundle: 'pro' },
        { q: "I should apologize for the sins of all males to show I'm good.", a: "Profuse apologies out of guilt are weak. I honor her through my actions, not my shame.", bundle: 'pro' },
        { q: "I feel like a \"bad boy\" when I put my needs first.", a: "What I want matters. Caring for myself is how I build the capacity to lead.", bundle: 'pro' },
      ]
    },
    {
      name: "Feminine Tsunamis",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The belief that her intense emotional outbursts are an attack on your character that you must fix or escape.\n\nWhat is true instead: her intensity is an organic storm that wants your grounded containment.\n\nIt feels right because her words are full of blame and shaming, which triggers your childhood wounds of being \"in trouble.\" But getting defensive or running away proves to her nervous system that you cannot hold space for her.\n\nMindset: her storm is a transient wave; I am the Oak that stands unmoved.",
      inputs: [
        { q: "Her messy emotions are proof that our relationship is broken.", a: "Her emotions are just energy in motion. They will pass if I stay grounded and present.", bundle: 'pro' },
        { q: "I need to explain my good intentions so she'll stop being mad.", a: "Explaining during an outburst is like talking French to an English speaker. Hear the pain first.", bundle: 'pro' },
        { q: "If she is shouting, it means I am failing as a husband.", a: "She is testing my solidity. Settle my nervous system and hold the space.", bundle: 'pro' },
        { q: "I should tell her she's being completely illogical and crazy.", a: "She wishes she weren't in this state. Telling her she's crazy only enrages her further.", bundle: 'pro' },
        { q: "I want to run out of the house to escape the snot bubbles and rage.", a: "Staying in the fire is what Masculine leadership requires. Breathe and stay present.", bundle: 'pro' },
        { q: "I must find a logical solution to her complaint immediately.", a: "Feelings first, facts later. Settle her heart first, then deal with the facts.", bundle: 'pro' },
        { q: "She expects me to agree with all her accusations.", a: "Hear the pain, not the blame. I don't have to agree with her story to empathize with her hurt.", bundle: 'pro' },
        { q: "I feel like a victim when she is throwing wild emotions at me.", a: "I am not a victim. I am the leader, and I am responsible for the connection.", bundle: 'pro' },
      ]
    },
    {
      name: "Relational Conflict",
      guideFront: "A limiting thought",
      guideBack: "A way to reset it",
      description: "The belief that winning the argument or protecting your ego is more important than restoring the connection.\n\nWhat is true instead: taking responsibility for the resolution is the ultimate display of leadership.\n\nIt feels right because your defenses want to protect your \"goodness\" and prove you were right.\n\nBut it costs you her trust and shuts down her heart; she needs to feel met, not defeated.\n\nMindset: I will put the connection before my fear or ego.",
      inputs: [
        { q: "I won't apologize until she admits her part of the mistake.", a: "A leader doesn't wait for others to go first. I will own my part cleanly now.", bundle: 'pro' },
        { q: "I should give her the cold shoulder to show her she hurt me.", a: "The silent treatment is a child's defense. I will stay engaged and state my boundaries.", bundle: 'pro' },
        { q: "I need to win this fight so I don't lose my status.", a: "Relational conflict isn't about win/lose. Winning an argument at the cost of connection is a loss.", bundle: 'pro' },
        { q: "She should get over her hurt because it was an accident.", a: "Disinviting her or making mistakes hurts her nervous system. My clumsiness has consequences.", bundle: 'pro' },
        { q: "If I ask for a do-over, she'll think I'm weak.", a: "It takes a strong man to admit he was clumsy. A do-over pulls the plug on conflict.", bundle: 'pro' },
        { q: "I want to list all the things I've done right to prove I'm good.", a: "Resting on my laurels means nothing to her in the moment. Polarity lives in the present.", bundle: 'pro' },
        { q: "She should fix her own emotional problems on her own.", a: "If I don't like how she is being, I can lead her into a different state.", bundle: 'pro' },
        { q: "Hiding my true feelings will keep the relationship safe.", a: "She is an Oracle. She senses my shut-down heart and it breaks her trust. I will speak inarguably.", bundle: 'pro' },
      ]
    },
  ],
};
