// challengesData.js — Challenges mode data

const challengesCollections = {

  speakingupingroups: [
    {
      name: "Rooms That Are Hard to Enter",
      guideFront: "Name the problem, then pick the move.",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Group situations where getting or keeping a turn is genuinely difficult — the fast meeting with no gaps, the senior voice nobody interrupts, the call where you cannot catch anyone's eye, the person who talks over you every single time. The point is to notice which obstacle you are actually facing, because the fix differs: a room with no gaps needs you to start anyway, while a room that keeps taking your turn needs you to hold it.",
      inputs: [
        { q: "The conversation moves so fast there is never a gap.", a: "\"Can I jump in on that —\" said at normal volume, starting mid-flow. (taking the floor)", bundle: 'pro' },
        { q: "A senior colleague has held the floor for several minutes.", a: "\"That's useful — and it connects to something I've been sitting on.\" (taking the floor)", bundle: 'pro' },
        { q: "You are on a call and cannot use eye contact to claim a turn.", a: "\"Sorry — jumping in. I have one thing on the timeline.\" (taking the floor)", bundle: 'pro' },
        { q: "The same person has cut you off three times in one meeting.", a: "\"I like that you want to add things — but let me get to the end of this one.\" (handling interruptions)", bundle: 'pro' },
        { q: "You start speaking and someone starts at the same moment.", a: "\"Go ahead — then I've got one.\" (handling interruptions)", bundle: 'pro' },
        { q: "You are asked for input and everyone turns to look at you.", a: "\"Two things. First the deadline, then the budget. The deadline is the real problem.\" (taking the floor)", bundle: 'pro' },
        { q: "Someone interrupts out of enthusiasm rather than rudeness.", a: "\"Wait — you'll get to say it in about ten seconds, I promise.\" (handling interruptions)", bundle: 'pro' },
        { q: "Two colleagues are going back and forth and you see a third option.", a: "\"Can I offer a third way? Both of those assume we ship in March.\" (taking the floor)", bundle: 'pro' },
      ]
    },
  ],
  playfulrefusals: [
    {
      name: "Requests That Are Awkward to Refuse",
      guideFront: "Name the problem, then pick the move.",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "The requests where a plain no feels too blunt but a yes would cost you something — the favour asked in front of other people, the third ask this month, the one from someone who never says no to you. The point is to notice what makes each one awkward, because humour only helps when the awkwardness is about tone. When the request is serious to the person asking, neither move is the right tool and a plain answer is kinder.",
      inputs: [
        { q: "A friend asks for a lift at an hour that ruins your evening.", a: "\"At that hour? I'll need to be paid in breakfast.\" (playful protest)", bundle: 'pro' },
        { q: "Someone asks you to do a tedious task you have done many times.", a: "\"Ah yes. My life's work. Let me get my equipment.\" (playful protest)", bundle: 'pro' },
        { q: "You are asked for a favour in front of other people.", a: "\"You're doing this with witnesses? Bold.\" (playful protest)", bundle: 'pro' },
        { q: "Someone asks for something you genuinely have no skill for.", a: "\"I have no spatial ability whatsoever. The wall would end up worse.\" (faked incompetence)", bundle: 'pro' },
        { q: "A child asks you to do something fiddly for the fourth time.", a: "\"Those buttons are beyond me. I've never worked out the system.\" (faked incompetence)", bundle: 'pro' },
        { q: "Someone asks for a favour that really is a bit much.", a: "\"I want it on record that I know exactly how big this is.\" (playful protest)", bundle: 'pro' },
        { q: "A friend who never refuses you asks for something inconvenient.", a: "\"For you? Fine. Under protest, but fine.\" (playful protest)", bundle: 'pro' },
        { q: "Someone asks for help with something where you would genuinely make it worse.", a: "\"I'm afraid I'm entirely untrained in this area.\" (faked incompetence)", bundle: 'pro' },
      ]
    },
  ],
  thehappyno: [
    {
      name: "Nos That Are Hard to Keep Light",
      guideFront: "Name what makes it hard, then answer.",
      guideBack: "A possible response.",
      description: "The situations where warmth is difficult to hold: the second ask after you already said no, the request from someone who will be disappointed, the one that arrives when you are tired enough to snap. What they have in common is pressure to either give in or harden. The move is the same in all of them — say no in the same friendly tone as the first time, and let the tone rather than the words do the work.",
      inputs: [
        { q: "They ask again, straight after your first no.", a: "\"Still no — but nice try.\" Same tone as before.", bundle: 'pro' },
        { q: "You are tired and can feel yourself about to be sharp.", a: "\"Not tonight. Ask me tomorrow and you'll get a better version of me.\"", bundle: 'pro' },
        { q: "Someone looks disappointed the moment you decline.", a: "\"I know. Still no — but I'm glad you asked me.\"", bundle: 'pro' },
        { q: "You said yes to this person last time and they expect the same.", a: "\"Last time was a one-off. This time it's a no.\"", bundle: 'pro' },
        { q: "The request comes with a reason designed to make refusing hard.", a: "\"That's a good reason. It's still a no from me.\"", bundle: 'pro' },
        { q: "You are asked in front of other people.", a: "\"Not me this time — but someone here is about to volunteer.\"", bundle: 'pro' },
        { q: "You catch yourself starting to explain why.", a: "\"No — and that's the whole answer.\" Then stop.", bundle: 'pro' },
        { q: "They laugh and say you never say yes to anything.", a: "\"Not true. I said yes to breakfast.\" Still no.", bundle: 'pro' },
      ]
    },
  ],
  theregretfulno: [
    {
      name: "The Ones You Actually Mind Refusing",
      guideFront: "Name what makes it hard, then answer.",
      guideBack: "A possible response.",
      description: "Refusals where the regret is real and therefore hard to hold at the right size — the invitation you wanted, the person who will be hurt, the second time you have let the same person down. The failure mode in all of them is the same: staying in the regret too long, until an honest feeling turns into a request for reassurance. Say it once, clearly, and stop.",
      inputs: [
        { q: "You are declining something you genuinely wanted to do.", a: "\"I'd have loved this. I can't make it work.\"", bundle: 'pro' },
        { q: "You are turning down the same person for the second time.", a: "\"Twice now — and I'm sorry about that. I still can't.\"", bundle: 'pro' },
        { q: "The other person looks visibly disappointed.", a: "\"I know. I'd have liked it too.\" Then leave it there.", bundle: 'pro' },
        { q: "You can feel yourself over-explaining out of guilt.", a: "\"I wish I could. I can't this time.\" Stop talking.", bundle: 'pro' },
        { q: "They offer to change the date to accommodate you.", a: "\"That's kind — but it isn't the date, it's the month I'm in.\"", bundle: 'pro' },
        { q: "You are declining something a friend clearly needs help with.", a: "\"I can't take this one on, and I hate that. Can I help you find someone who can?\"", bundle: 'pro' },
        { q: "You catch yourself apologising for the third time in one refusal.", a: "\"I've said sorry enough. The answer's still no, and I do mean the sorry.\"", bundle: 'pro' },
        { q: "You are refusing a genuinely generous offer.", a: "\"That's a really kind thing to offer. I'm still going to say no.\"", bundle: 'pro' },
      ]
    },
  ],

  transitions: [
    {
      name: "Stuck Conversations",
      guideFront: "Name the problem, then pick the move.",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Conversations that have stalled, drifted, or tipped out of balance — the flat patch after a topic ends, the technical thread you cannot follow, the moment you realise you have been talking for five minutes. The point is to recognise which kind of stuck you are in and reach for the move that fits. Topic Shift handles drift and flat patches, Story to Question fixes an unbalanced floor, and Question to Story opens up a conversation that has gone one-word.",
      inputs: [
        { q: "The conversation has been about the weather for three exchanges.", a: "\"I've decided weather talk is the warm-up. So what's actually been going on with you?\" (topic shift)", bundle: 'pro' },
        { q: "A topic ends and nobody starts a new one.", a: "\"Right — new subject. What's the best thing that's happened to you this week?\" (topic shift)", bundle: 'pro' },
        { q: "You realise you have been talking about yourself for several minutes.", a: "\"…and that's the short version. Your turn — what have you been up to?\" (story to question)", bundle: 'pro' },
        { q: "A group is deep in a technical topic you cannot follow.", a: "\"I'm lost on the details — but what got you into this in the first place?\" (topic shift)", bundle: 'pro' },
        { q: "They are giving one-word answers to everything you ask.", a: "\"I'll go first, then. My week has been completely ridiculous.\" (question to story)", bundle: 'pro' },
        { q: "The conversation has drifted into gossip you would rather not take part in.", a: "\"I'm the wrong person for this one. Tell me how the house move is going instead.\" (topic shift)", bundle: 'pro' },
        { q: "You asked a question, they answered in one sentence, and then nothing.", a: "\"That reminds me — same thing happened to me last year, and it went badly.\" (question to story)", bundle: 'pro' },
        { q: "The conversation is pleasant but completely on the surface.", a: "\"Can I skip ahead? I'd rather hear what you're actually excited about.\" (topic shift)", bundle: 'pro' },
      ]
    },
  ],

  assertive: [
    // v1.26.29 (list 6): challenges are organised by CHALLENGE TYPE — swipe
    // right for a new type. The answers point back to the pack’s four
    // strategies, with a hint about which one fits.
    {
      name: "Criticism",
      guideFront: "You’re being criticised — how do you respond?",
      guideBack: "One way to respond...",
      description: "Someone criticises you — fairly or not. Fogging and Negative Inquiry are your main tools here: absorb what might be true, or lean in and ask for specifics.",
      inputs: [
        { q: "\"You always make everything so complicated.\"", a: "Hint: Fogging. \"You might be right — I do like to be thorough.\" Or Negative Inquiry: \"What did I make complicated this time?\"" },
        { q: "\"That presentation was way too long.\"", a: "Hint: Fogging. \"Fair — it probably could have been shorter.\" No defence, no counter-attack." },
        { q: "\"You never take anything seriously.\"", a: "Hint: Negative Inquiry. \"What have I not taken seriously that mattered to you?\" Specifics separate real concern from a jab." },
        { q: "\"Honestly, your taste in music is terrible.\"", a: "Hint: Fogging with a smile. \"You could be right — it’s not for everyone.\" Low-stakes criticism deserves a light touch." },
      ]
    },
    {
      name: "Pressure",
      guideFront: "They keep pushing — how do you hold your position?",
      guideBack: "One way to respond...",
      description: "Someone keeps pushing after you’ve already answered. Broken Record is built for exactly this: the same calm sentence, repeated, with no new arguments to attack.",
      inputs: [
        { q: "Someone keeps pushing after you've said no clearly", a: "Hint: Broken Record. Repeat calmly: \"My answer is still no.\" Persistence is not a counter-argument — don’t treat it as one." },
        { q: "Someone raises their voice to get their way", a: "Hint: Broken Record, lower volume. Same sentence, calmer tone: \"I’ll talk when the tone comes down.\" Don’t match the energy." },
        { q: "\"Just this once — you can make an exception, right?\"", a: "Hint: Fog, then Broken Record. \"You’re right that it’s a small thing — and my answer is still no.\"" },
        { q: "Someone agrees in the moment but never follows through", a: "Hint: Broken Record on the agreement. \"You said X — I’m going to hold us to that.\" Same calm reminder each time it slips." },
      ]
    },
    {
      name: "Guilt-Tripping",
      guideFront: "They make you feel guilty — how do you stay steady?",
      guideBack: "One way to respond...",
      description: "Someone uses guilt to move you — disappointment, obligation, \"after all I’ve done\". Fog the feeling, hold the position: guilt needs your explanation or your surrender to work.",
      inputs: [
        { q: "Someone makes you feel guilty for having a need", a: "Hint: Fog + hold. \"I hear that it’s frustrating for you — I still need this.\" Acknowledge the feeling without trading away the need." },
        { q: "\"After everything I've done for you...\"", a: "Hint: Fogging. \"You’re right — you’ve done a lot for me.\" Then Broken Record: \"And my answer is still no.\" Gratitude and boundaries can coexist." },
        { q: "\"Fine. I'll just do it all myself then.\"", a: "Hint: Fog the martyrdom, don’t take the bait. \"That’s one option.\" Calm, brief — the silence does the rest." },
        { q: "\"I guess I just care more about this family than you do.\"", a: "Hint: Negative Assertion won’t fit — the accusation isn’t true. Fog the shape of it: \"Maybe it looks that way to you — and I’m still not coming.\"" },
      ]
    },
    {
      name: "Being Called Out",
      guideFront: "You actually made the mistake — how do you own it?",
      guideBack: "One way to respond...",
      description: "The criticism is TRUE this time. Negative Assertion is the tool: own the mistake openly and calmly, without excessive apology — an error doesn’t make you less worthy.",
      inputs: [
        { q: "\"You forgot my birthday.\"", a: "Hint: Negative Assertion. \"You’re right, I forgot it — that’s on me.\" Own it cleanly. One real acknowledgement beats five excuses." },
        { q: "\"This is the second deadline you've missed.\"", a: "Hint: Negative Assertion + a plan. \"Correct — I missed both. Here’s what I’m changing.\" No spiral of self-criticism, just ownership." },
        { q: "\"You said you'd handle it, and you didn't.\"", a: "Hint: Negative Assertion. \"True. I said I would and I didn’t.\" Resist the urge to explain first — own first, explain only if asked." },
        { q: "\"That comment you made hurt her feelings.\"", a: "Hint: Negative Assertion. \"You’re right — that came out wrong and it’s on me.\" Owning impact doesn’t require agreeing you’re a bad person." },
      ]
    },
  ],

  compliments: [
    {
      name: "Giving Compliments",
      description: "Harder compliment situations — when it lands wrong, feels like flattery, or you're unsure whether to say it.",
      inputs: [
        { q: "You give a compliment and they deflect it immediately", a: "Let it go — don't insist. The compliment was given; they'll sit with it. Adding \"I mean it\" can work once, but don't chase." },
        { q: "You want to compliment someone but are worried it'll seem like flattery", a: "The specificity is what separates them. \"You're great\" is flattery. \"The section on X was the clearest explanation I've read\" is a compliment." },
        { q: "You want to acknowledge someone who often goes unnoticed", a: "\"I don't know if anyone's said this, but [specific thing] — it makes everyone else's job easier.\"" },
        { q: "You give a compliment and they immediately give one back awkwardly", a: "Receive it gracefully — your compliment was yours; their response is theirs." },
        { q: "You're in a group and want to acknowledge someone specifically", a: "Direct it clearly at them: \"[Name] — that was really good.\" Brief, warm, then continue." },
      ]
    },
    {
      name: "Accepting Compliments",
      description: "Harder receiving situations — when you don't believe it, when it comes at the wrong moment, or when you want to deflect.",
      inputs: [
        { q: "You receive a compliment you genuinely don't believe", a: "Receive it anyway: \"Thank you — I'll take that.\" You don't have to agree to accept it gracefully." },
        { q: "Someone gives you a compliment in front of a group", a: "Same as one-on-one — brief, warm, move on. Don't make it a speech." },
        { q: "Someone gives you a backhanded compliment", a: "Receive the compliment part only: \"Thanks.\" Then decide whether to address the rest separately." },
        { q: "You feel the urge to immediately compliment them back", a: "Only do it if you mean it and it's specific. Reflexive reciprocation sounds hollow." },
        { q: "The same person compliments you repeatedly", a: "Receive it each time the same way — briefly and warmly. It doesn't need to get bigger." },
      ]
    },
    {
      name: "Self Disclosure",
      description: "Harder self-disclosure situations — when you overshare, when they don't reciprocate, or when a disclosure prompts something heavier.",
      inputs: [
        { q: "You share something and they don't reciprocate", a: "That's okay. The share wasn't conditional — don't withdraw or over-explain. Move on naturally." },
        { q: "You accidentally share more than you meant to", a: "Don't apologise for it. If the share was genuine, let it stand and continue naturally." },
        { q: "Someone shares something vulnerable after you disclosed — heavier than expected", a: "Stay present, receive it. Your disclosure opened the door — it's okay that they walked through it." },
        { q: "You feel pressure to match someone's disclosure with something equally deep", a: "You don't have to. \"Thank you for sharing that\" is valid. Genuine interest is enough." },
        { q: "You want to disclose but the moment has passed", a: "Let it go. Better to miss the moment than to insert a disclosure artificially." },
      ]
    }
  ],

  influenceframing: [
    {
      name: "Persuasion Framing",
      description: "Harder persuasion situations — when someone has already decided, when they dismiss you early, or when you feel yourself pushing too hard.",
      inputs: [
        { q: "Someone dismisses your proposal before you finish", a: "\"Fair — I haven't explained it well yet. Can I try again in one sentence?\"" },
        { q: "Someone keeps returning to the same objection", a: "Don't repeat your counter. \"I think we see this part differently. Can I ask what would need to be true for you to consider it?\"" },
        { q: "You're pushing too hard and can feel resistance rising", a: "Pull back: \"I don't need you to agree right now — I just wanted to share how I see it.\"" },
        { q: "Someone agrees to your face but you sense they haven't actually shifted", a: "\"I want to check — does this actually make sense to you, or are you being generous?\"" },
        { q: "Someone uses your own argument against you", a: "\"That's a fair use of my own point. Let me think about that.\" Acknowledge, don't deflect." },
      ]
    },
    {
      name: "Reframe",
      description: "Harder reframing situations — when the reframe is rejected, when it sounds dismissive, or when a group is stuck.",
      inputs: [
        { q: "Someone rejects your reframe immediately", a: "\"Fair enough — not saying I'm right. Just worth considering.\" Don't insist." },
        { q: "Your reframe sounds dismissive of their pain", a: "Acknowledge the feeling first: \"I'm not saying it doesn't hurt — it does. What I'm offering is a way to hold it differently.\"" },
        { q: "Someone uses a reframe on you that feels like deflection", a: "\"I hear the reframe — I want to stay with the harder version for a moment.\"" },
        { q: "A group is stuck and your reframe isn't landing", a: "Try redefining the question: \"What if we're asking the wrong question here?\"" },
        { q: "Your reframe is too clever and the person can see through it", a: "Drop it. \"Okay, that was too neat. The harder version is...\"" },
      ]
    },
    {
      name: "Observation",
      description: "Harder observation situations — when you're unsure whether to name what you see, or when naming it creates discomfort.",
      inputs: [
        { q: "You notice something but aren't sure whether to name it", a: "Default: only name it if it serves the other person or the conversation, not just your curiosity." },
        { q: "You name something and the person becomes uncomfortable", a: "\"I may have read that wrong — forget I said it.\"" },
        { q: "You observe something that could be used to tease but feels too personal", a: "Leave it. Not every observation is for the other person." },
        { q: "You notice a pattern in someone's behaviour that might be painful for them", a: "Only name it if you have the relationship for it — and even then, gently: \"I'm not sure if I should say this...\"" },
        { q: "You're trying to be more observant but feel self-conscious", a: "Observation is an internal practice first. You don't have to share every observation — just notice more." },
      ]
    }
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

  conversational: [
    {
      name: "Finding Common Ground",
      description: "Harder situations — when there's no obvious overlap, or when a me-too moment doesn't land.",
      inputs: [
        { q: "You can't find any genuine common ground with someone", a: "Don't force it. Ask a question that might surface something: \"What made you get into that?\" — and listen." },
        { q: "Someone shares an experience completely alien to you", a: "Find the emotional logic: \"I've never been in that situation — but I can imagine the feeling of [underlying emotion].\"" },
        { q: "You try a me-too moment and they don't pick it up", a: "Let it go. Common ground is discovered, not insisted on." },
        { q: "You realise you claimed false common ground mid-conversation", a: "Correct it lightly: \"Actually, I spoke too fast — I don't know it as well as I implied. Tell me more.\"" },
        { q: "Someone seems very different from you and you feel the gap", a: "Shared reactions to something in the immediate environment are always available — the situation you're both in." },
      ]
    },
    {
      name: "Mirroring & Paraphrasing",
      description: "Harder mirroring situations — when you get the paraphrase wrong, when silence follows, or when they stop after saying exactly.",
      inputs: [
        { q: "Someone gives a long answer and you want to show you followed all of it", a: "Pick the most important thread: \"The part that stands out to me is [X] — is that the core of it?\"" },
        { q: "You paraphrase and get it wrong", a: "\"Okay, I missed something — what did I get wrong?\" Getting corrected is fine; it shows you were trying to understand." },
        { q: "Someone seems reluctant to say more", a: "One keyword mirror, then silence. Don't stack questions. Let the pause work." },
        { q: "You mirror and the person says exactly and stops", a: "Follow up with one open question: \"And how did that sit with you?\"" },
        { q: "You want to mirror but can't find the right words", a: "A feeling mirror is always available: \"That sounds like a lot.\" / \"That must have been strange.\"" },
      ]
    }
  ],

  storytelling: [
    {
      name: "Difficult storytelling situations",
      description: "Situations where storytelling becomes harder — interruptions, stories without a point, losing the room.",
      inputs: [
        { q: "You start telling a story and halfway through realise it has no point.",           a: "Name it: \"I'm not sure where that was going — but it happened.\" Owning it is funnier than trailing off." },
        { q: "Someone interrupts your story repeatedly.",                                         a: "Hold your thread: \"Let me finish this bit and then —\" calmly, then land the story." },
        { q: "The story is going longer than expected and you can feel the energy dropping.",     a: "Fast-forward: \"The short version: it went badly, I survived, and I learned my lesson.\"", bundle: "pro" },
        { q: "You tell a story about an awkward experience and someone tries to top it.",         a: "Let them — don't fight for the floor. The story was a gift to the conversation, not a competition.", bundle: "pro" },
        { q: "The story involves someone who is also present.",                                   a: "Check in first: \"Is it okay if I tell this?\" or adjust on the fly so they come off well.", bundle: "pro" },
      ]
    }
  ],

  humourpractise: [
    {
      name: "When It Doesn't Land",
      guideFront: "Your humour missed — how do you recover?",
      guideBack: "One way to play it...",
      description: "Your humour missed — a joke meets silence, gets taken seriously, or leaves an awkward pause. The skill is recovering lightly instead of explaining or apologising. Self humour is your main tool here: own the miss and move on.",
      inputs: [
        { q: "You crack a joke in a meeting and it's met with total silence.", a: "Hint: Self humour. \"Right — and that's why I kept my day job.\"", bundle: 'free' },
        { q: "You say something clearly over-the-top and someone takes it seriously.", a: "Hint: Self humour. \"Oh — that was me being ridiculous, I should've flagged it.\"", bundle: 'free' },
        { q: "Your pun makes the whole table groan.", a: "Hint: Self humour. \"I'll take that. Standing ovation, really.\"", bundle: 'free' },
        { q: "You explain a joke and it dies further in the explaining.", a: "Hint: Self humour. \"Nothing funnier than a joke with a footnote. I'll stop.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Getting Teased",
      guideFront: "Someone jabs at you — how do you volley back?",
      guideBack: "One way to play it...",
      description: "Someone gives you a light jab. The move isn't to get defensive — it's to volley back warmly (teasing), own it (joke about my flaws), or laugh at yourself (self humour).",
      inputs: [
        { q: "A friend, grinning: \"Nice of you to finally show up.\"", a: "Hint: Joke about my flaws. \"I know — punctuality and I have never been close.\"", bundle: 'free' },
        { q: "\"Is that seriously your third coffee today?\"", a: "Hint: Self humour. \"It is. I'm basically powered by it at this point.\"", bundle: 'free' },
        { q: "\"Wow, you actually dressed up for once.\"", a: "Hint: Tease back. \"I did. Someone in this friendship has to.\"", bundle: 'free' },
        { q: "\"You're such a grandpa, in bed by ten.\"", a: "Hint: Joke about my flaws. \"Proudly. My sleep schedule is my greatest achievement.\"", bundle: 'pro' },
        { q: "\"Did you get lost on the way here again?\"", a: "Hint: Self humour. \"Obviously. I consider a direct route a personal failure.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Breaking a Silence",
      guideFront: "It's gone quiet — how do you ease back in?",
      guideBack: "One way to play it...",
      description: "A conversation stalls or a room goes quiet. A light observation about the shared moment is the easiest way back in — name what's happening, warmly.",
      inputs: [
        { q: "A group chat goes completely silent after your message.", a: "Hint: Observation. \"Well, I've cleared the room. A gift, really.\"", bundle: 'free' },
        { q: "You and a colleague run out of things to say in the lift.", a: "Hint: Observation. \"Lifts really are the longest ten seconds known to man.\"", bundle: 'free' },
        { q: "A dinner table falls into an awkward pause.", a: "Hint: Observation. \"I love how we all decided to be mysterious at the same time.\"", bundle: 'free' },
        { q: "A first date hits a lull.", a: "Hint: Observation. \"This is the part where we both pretend to check our phones.\"", bundle: 'pro' },
        { q: "The meeting goes quiet when the host asks for questions.", a: "Hint: Observation. \"The silence of twelve people all hoping someone else speaks.\"", bundle: 'pro' },
      ]
    },
    {
      name: "When Someone's Showing Off",
      guideFront: "They're laying it on thick — how do you keep it light?",
      guideBack: "One way to play it...",
      description: "Someone's laying it on a bit thick. You don't need to deflate them — a warm tease or a jokingly-bragged counter keeps it light without a real contest.",
      inputs: [
        { q: "A friend won't stop talking about their new car.", a: "Hint: Teasing. \"It's magnificent. Does it also do your talking for you?\"", bundle: 'free' },
        { q: "Someone humble-brags about how busy and important they are.", a: "Hint: Teasing. \"Truly, we're lucky you found a gap in the schedule for us.\"", bundle: 'free' },
        { q: "A colleague keeps mentioning their fancy holiday.", a: "Hint: Jokingly brag. \"Meanwhile I conquered my laundry pile. We've both had big weeks.\"", bundle: 'free' },
        { q: "Someone one-ups every story you tell.", a: "Hint: Jokingly brag. \"You win. I'll just sit here being quietly, devastatingly humble.\"", bundle: 'pro' },
        { q: "A friend shows off a bit of trivia to look clever.", a: "Hint: Teasing. \"Look at you, absolutely full of facts today.\"", bundle: 'pro' },
      ]
    }
  ],
  setupstatement: [
    {
      name: "The One-Word Answerer",
      guideFront: "What kind of hard opener is this?",
      guideBack: "A possible response, with the type in brackets.",
      description: "They give you almost nothing back — short, closed replies, then silence. The training is to notice you need a warmer, easier setup that hands them a concrete thread, rather than repeating the same opener. Best handled with an Action or Background setup.\n\nWhat it usually looks like:\n• \"Fine, thanks.\" and nothing after it.\n• Closed replies to everything you try.\n• You have asked twice and got two words back.\n\nTwo ways through:\n1. Action Setup — hand them something concrete to react to. \"I'm learning guitar — are you working on anything?\"\n2. Background Setup — give them a thread with a detail in it. \"I got the wrong bus and walked — how did you get here?\"\n\nMindset: repeating the same kind of opener louder will not help. Change what you are handing them, not how hard you are handing it.",
      inputs: [
        { q: "Your first setup got a one-word answer and then silence.", a: "\"Fair enough — I'll go first properly. I'm getting back into reading. Are you into books at all?\" (action)", bundle: 'pro' },
        { q: "They keep giving short, closed replies.", a: "\"No pressure to chat, I'm bad at this too. I've just started running — do you do anything to unwind?\" (action)", bundle: 'pro' },
        { q: "You opened, they answered, and it's gone quiet again.", a: "\"I came from work and my brain's fried. Where are you coming from?\" (background)", bundle: 'pro' },
        { q: "Every question gets a \"yeah\" and nothing more.", a: "\"I'll make it easy — I'm here for the free coffee, honestly. What about you?\" (purpose)", bundle: 'pro' },
      ]
    },
    {
      name: "The Flat Room",
      guideFront: "What kind of hard opener is this?",
      guideBack: "A possible response, with the type in brackets.",
      description: "The mood is low and the energy's gone — nobody's really talking. The training is to notice the mood is the most honest thing to name, and open with a Status setup that invites them to say how they are. Best handled with a Status setup.\n\nWhat it usually looks like:\n• A long silence nobody wants to be the one to break.\n• Everyone on their phone or looking at the door.\n• Small talk that keeps dying after one exchange.\n\nTwo ways through:\n1. Status Setup — name the mood honestly. \"Quiet one tonight, isn't it — how's your week been?\"\n2. Opinion Setup — react to something present. \"This music is doing nothing for the room, is it?\"\n\nMindset: in a flat room the mood is the most honest thing available. Naming it is a relief to everyone, because they were all thinking it.",
      inputs: [
        { q: "The whole room feels flat and low-energy.", a: "\"Everyone looks how I feel right now, honestly. Long week for you too?\" (status)", bundle: 'pro' },
        { q: "Nobody's talking and the mood is heavy.", a: "\"I'm running on empty today, not going to lie. How's your day been?\" (status)", bundle: 'pro' },
        { q: "It's early and everyone's half-asleep.", a: "\"I need three more coffees to be a person. You holding up?\" (status)", bundle: 'pro' },
      ]
    },
    {
      name: "The Frozen Moment",
      guideFront: "What kind of hard opener is this?",
      guideBack: "A possible response, with the type in brackets.",
      description: "You've blanked — the pressure to say something clever has locked you up. The training is to drop the need to impress and open with a simple, honest Purpose setup. Best handled with a Purpose setup.\n\nWhat it usually feels like:\n• You have gone blank standing right next to someone.\n• Everything you think of sounds stupid in your head.\n• The pause has gone on long enough to be its own problem.\n\nTwo ways through:\n1. Purpose Setup — the lowest-effort honest opener there is. \"I came to meet a few people — what brought you?\"\n2. Status Setup — name the awkwardness itself. \"I never know how to start these — how's it going?\"\n\nMindset: the block is the need to be clever, not a lack of things to say. Drop the requirement and an ordinary sentence is enough.",
      inputs: [
        { q: "You've frozen and can't think of anything clever.", a: "\"I've got nothing smart to open with, so — I'm here for the free food. You?\" (purpose)", bundle: 'pro' },
        { q: "Your mind goes blank the second you should speak.", a: "\"Okay, no clever line — I just came to meet a few people. What brings you?\" (purpose)", bundle: 'pro' },
        { q: "You feel pressure to say something impressive.", a: "\"I'll skip the small talk — I'm honestly just here to enjoy this. Are you?\" (opinion)", bundle: 'pro' },
      ]
    },
    {
      name: "The Distracted Person",
      guideFront: "What kind of hard opener is this?",
      guideBack: "A possible response, with the type in brackets.",
      description: "They're only half there — on their phone, glancing around, not really tuned in. The training is to offer a small, vivid hook that's easy to react to rather than a flat opener. Best handled with a Background or Action setup.\n\nWhat it usually looks like:\n• They are on their phone or scanning the room.\n• They answer without really turning towards you.\n• You get agreement but no actual attention.\n\nTwo ways through:\n1. Background Setup — offer something vivid enough to look up for. \"I got the wrong bus and walked twenty minutes.\"\n2. Action Setup — give them something specific to react to. \"I'm halfway through redoing a kitchen and regretting it.\"\n\nMindset: a flat opener gets flat attention. Something small and vivid is easier to react to than something polite.",
      inputs: [
        { q: "The person is clearly distracted by their phone.", a: "\"I'll compete with the phone — I just got back from Portugal. Been anywhere good lately?\" (background)", bundle: 'pro' },
        { q: "They keep glancing around the room.", a: "\"Busy in here, right? I nearly didn't find a seat. Where did you come in from?\" (background)", bundle: 'pro' },
        { q: "They seem only half in the conversation.", a: "\"I'll be quick and interesting, promise — I've just started climbing. Do you do anything like that?\" (action)", bundle: 'pro' },
      ]
    },
  ],
  startingconversations1: [
    {
      name: "They Look Busy or Closed Off",
      guideFront: "What makes this opening hard?",
      guideBack: "A possible opener, with the strategy in brackets.",
      description: "Headphones, a book, a phone, a fast walk, a screen they are staring at. The signals are usually accurate, and the honest answer is that sometimes the right move is to say nothing at all.\n\nWhen you do need to speak — because you need something, or because it would be strange not to — keep it small and make it easy to end. A comment or a short practical question gives them a graceful way to give you one word and go back to what they were doing.\n\nMindset: an opener they can answer in one word is a kindness, not a failure.",
      inputs: [
        { q: "They have headphones in but you need to know if the seat is free.", a: "\"Sorry — is anyone sitting here?\" [Ask About the Situation]", bundle: 'pro' },
        { q: "They are reading and you are sharing a table.", a: "\"Morning.\" [Simple Greeting]", bundle: 'pro' },
        { q: "They are clearly working but you have just joined the team.", a: "\"I'll not interrupt — I'm Rikard, I started today. I'll catch you later.\" [Introduce Yourself]", bundle: 'pro' },
        { q: "They are on their phone and the queue has stopped completely.", a: "\"This has properly stopped, hasn't it.\" [Comment on the Situation]", bundle: 'pro' },
        { q: "They look stressed and are gathering their things quickly.", a: "\"Do you know if there's another one after this?\" [Ask About the Situation]", bundle: 'pro' },
      ]
    },
    {
      name: "Nothing Is Happening",
      guideFront: "What makes this opening hard?",
      guideBack: "A possible opener, with the strategy in brackets.",
      description: "An empty room, a bare corridor, a lift, a quiet waiting area. There is no event to comment on and no obvious question to ask, which is exactly when people conclude there is nothing to say.\n\nThere is always something: the emptiness itself, the wait, being early, the room, why you are both here. The bar is much lower than it feels — an opener does not have to be interesting, only shared.\n\nMindset: the fact that nothing is happening is itself something you are both in.",
      inputs: [
        { q: "You and one other person are the only ones who have arrived.", a: "\"I think we're the keen ones.\" [Comment on the Situation]", bundle: 'pro' },
        { q: "You are in a silent lift for four floors.", a: "\"Morning.\" [Simple Greeting]", bundle: 'pro' },
        { q: "You are both in an empty waiting room with no information.", a: "\"Do you know if they call you or you just go in?\" [Ask About the Situation]", bundle: 'pro' },
        { q: "You are early to a meeting with one other person and nothing to do.", a: "\"Have you come far for this?\" [Ask About the Situation]", bundle: 'pro' },
        { q: "You are sitting in a bare room waiting for something to start.", a: "\"They've really gone to town on the decor in here.\" [Comment on the Situation]", bundle: 'pro' },
      ]
    },
    {
      name: "They Already Know Each Other",
      guideFront: "What makes this opening hard?",
      guideBack: "A possible opener, with the strategy in brackets.",
      description: "Walking towards a group who are mid-conversation is the hardest version of this, because there is no obvious gap and interrupting feels rude.\n\nTwo things help. You do not have to break into the topic — you can open the smaller conversation of who you are. And joining at the edge, quietly, is normal: standing near, catching an eye, and introducing yourself to one person rather than the group.\n\nMindset: talk to one person, not to the group. Groups do not answer; people do.",
      inputs: [
        { q: "Three people are talking and you know none of them.", a: "\"Mind if I join? I'm Rikard, I don't know anybody here.\" [Introduce Yourself]", bundle: 'pro' },
        { q: "You catch the eye of one person on the edge of a group.", a: "\"Hi — Rikard.\" [Introduce Yourself]", bundle: 'pro' },
        { q: "The group pauses and nobody says anything to you.", a: "\"Is this the right room for the six o'clock?\" [Ask About the Situation]", bundle: 'pro' },
        { q: "You have been standing near a group for a while without speaking.", a: "\"Busy tonight, isn't it.\" [Comment on the Situation]", bundle: 'pro' },
        { q: "You know one person in the group slightly.", a: "\"Evening — I'm going to hide behind you, I don't know anyone.\" [Simple Greeting]", bundle: 'pro' },
      ]
    },
    {
      name: "You Have Left It Too Long",
      guideFront: "What makes this opening hard?",
      guideBack: "A possible opener, with the strategy in brackets.",
      description: "You have been sitting next to someone for twenty minutes, or you have passed the same neighbour weekly for a year. The window for a normal opener seems to have closed, and every option now feels like it needs explaining.\n\nIt does not. Naming the delay lightly is the whole solution, and it usually lands as funny rather than awkward. People are almost always relieved that someone finally said something.\n\nMindset: name it and move on. One short sentence undoes a year of not speaking.",
      inputs: [
        { q: "You have sat beside this person for half of a long day.", a: "\"I've been sitting next to you all morning and never said hello. I'm Rikard.\" [Introduce Yourself]", bundle: 'pro' },
        { q: "You have passed the same neighbour weekly for a year.", a: "\"We must have passed each other fifty times. I'm Rikard, from the third floor.\" [Introduce Yourself]", bundle: 'pro' },
        { q: "You have been in a silent car share for ten minutes.", a: "\"Do you know how long this takes, roughly?\" [Ask About the Situation]", bundle: 'pro' },
        { q: "You have exchanged nods with a colleague for months.", a: "\"Morning. I realise I've never actually asked what you do here.\" [Simple Greeting]", bundle: 'pro' },
        { q: "The event is nearly over and you have not spoken to the person beside you.", a: "\"Well, that went quickly. Was it what you expected?\" [Ask About the Situation]", bundle: 'pro' },
      ]
    },
    {
      name: "The Opener Falls Flat",
      guideFront: "What makes this opening hard?",
      guideBack: "A possible opener, with the strategy in brackets.",
      description: "You said something and got a one-word reply, a polite smile, or nothing. This is the moment people take as proof that they are bad at this.\n\nIt is usually not about you. People are tired, preoccupied, in a hurry, or simply not in the mood, and none of that is information about your opener. The useful skill is having one second attempt ready, and then being able to stop without it being awkward.\n\nMindset: one more try, then let it go warmly. A friendly exit costs nothing and leaves the door open for another day.",
      inputs: [
        { q: "Your comment got a \"mm\" and nothing else.", a: "\"Do you know if there's a break in this?\" [Ask About the Situation]", bundle: 'pro' },
        { q: "Your question got a one-word factual answer.", a: "\"First time here for me. It's bigger than I thought.\" [Comment on the Situation]", bundle: 'pro' },
        { q: "You have tried twice and got very little back.", a: "\"Anyway — enjoy the rest of it.\" [Simple Greeting]", bundle: 'pro' },
        { q: "They answered and immediately looked back at their phone.", a: "\"No worries. Cheers.\" [Simple Greeting]", bundle: 'pro' },
        { q: "Your opener landed but they seem to be leaving.", a: "\"I'm Rikard, by the way — I'll probably see you next week.\" [Introduce Yourself]", bundle: 'pro' },
      ]
    },
  ],
  showunderstanding: [
    {
      name: "You Want to Fix It",
      guideFront: "What is getting in the way of understanding here?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "They have described a problem and everything in you wants to offer the solution, which is not what they asked for and usually not what they want.\n\nThe training is to notice the urge and hold it for three more exchanges. Advice given before somebody has been understood almost never gets taken, because it answers a question they had not finished asking.\n\nWhat it usually sounds like from the inside:\n• \"Have you tried—\" already forming.\n• A solution that seems obvious to you and clearly has not occurred to them.\n• Impatience with hearing the problem described again.\n\nTwo ways through:\n1. Loop Back or Rephrase — reflect the problem instead of solving it. \"So the deadline moved and nobody told you.\"\n2. Ask Follow-up Questions — ask about their experience rather than the mechanics. \"What was the worst part?\"\n\nMindset: if they want the answer they will ask for it. Understanding first is not a delay before the useful part — for most conversations it is the useful part.",
      inputs: [
        { q: "You can feel \"have you tried\" forming.", a: "\"So it's the whole process that's the problem, not one bit of it.\" (loop back or rephrase)", bundle: 'pro' },
        { q: "The solution seems obvious to you and they have not mentioned it.", a: "\"What have you already tried with it?\" (ask follow-up questions)", bundle: 'pro' },
        { q: "You are impatient to get to the practical part.", a: "\"What's the bit that's actually wearing you down?\" (ask follow-up questions)", bundle: 'pro' },
        { q: "They describe a problem you have solved before.", a: "\"That sounds genuinely exhausting to keep managing.\" (loop back or rephrase)", bundle: 'pro' },
        { q: "You have already given advice and they are still describing it.", a: "\"Sorry — I jumped ahead. Tell me the rest of it.\" (ask follow-up questions)", bundle: 'pro' },
      ]
    },
    {
      name: "Your Story Takes Over",
      guideFront: "What is getting in the way of understanding here?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "You relate to what they said, and four sentences later the conversation is about you and nobody quite knows how it happened.\n\nThe training is to keep relating short and hand it straight back. Two sentences and a question is the whole move; anything with a middle and an ending is a story, and stories take the floor.\n\nWhat it usually looks like:\n• Your version has more detail than theirs did.\n• You have moved on to a second example of your own.\n• They are now asking you follow-up questions.\n\nTwo ways through:\n1. Relate Through Sharing, briefly — two sentences, then stop. \"I had almost exactly that. It's a special kind of awful.\"\n2. Loop Back or Rephrase — hand the floor back explicitly. \"Anyway, yours sounds worse. The deadline thing especially.\"\n\nMindset: relating is a nod, not a turn. If your version has a middle, cut the middle.",
      inputs: [
        { q: "You are three sentences into your own version.", a: "\"Anyway — yours sounds worse. What happened with the deadline?\" (loop back or rephrase)", bundle: 'pro' },
        { q: "You notice they have started asking you questions.", a: "\"We're talking about me now, sorry. Go back to the group thing.\" (loop back or rephrase)", bundle: 'pro' },
        { q: "You have a long story that fits perfectly.", a: "\"I had almost exactly that last year. It's a special kind of awful.\" (relate through sharing)", bundle: 'pro' },
        { q: "You are about to add a second example of your own.", a: "\"Same feeling, anyway. What did you end up doing?\" (ask follow-up questions)", bundle: 'pro' },
        { q: "Your version is genuinely more dramatic than theirs.", a: "\"I know that feeling. Yours is the one we're talking about though.\" (relate through sharing)", bundle: 'pro' },
      ]
    },
    {
      name: "It Sounds Mechanical",
      guideFront: "What is getting in the way of understanding here?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "You used the technique correctly and it came out like a customer service script — \"so what I'm hearing is that you feel frustrated.\"\n\nThe training is to loop in your own words, in your own register. The formula is not the skill; the formula is scaffolding you are supposed to take down once the building stands.\n\nWhat it usually sounds like:\n• \"So what I'm hearing is…\" three times in one conversation.\n• Their exact words repeated back with no change.\n• A therapist voice you would never otherwise use.\n\nTwo ways through:\n1. Loop Back or Rephrase, in plain language — \"So the deadline moved and nobody told you. That's rubbish.\"\n2. Ask Follow-up Questions — a real question always sounds less staged than a reflection does.\n\nMindset: show genuine interest rather than performing the strategy. If you would not say it that way to a friend, do not say it that way to a friend.",
      inputs: [
        { q: "You have said \"so what I'm hearing is\" twice already.", a: "\"So the deadline moved and nobody told you. That's rubbish.\" (loop back or rephrase)", bundle: 'pro' },
        { q: "You repeated their exact words back and it sounded odd.", a: "\"What did you do when you found out?\" (ask follow-up questions)", bundle: 'pro' },
        { q: "You can hear yourself using a therapist voice.", a: "\"Right, so it's the being left out that's the actual problem.\" (loop back or rephrase)", bundle: 'pro' },
        { q: "The reflection landed flat and slightly formal.", a: "\"Sorry, that came out weird. What I mean is — that would annoy me too.\" (relate through sharing)", bundle: 'pro' },
        { q: "You are following the formula and not really listening.", a: "\"Say that last bit again? I want to make sure I've got it.\" (ask follow-up questions)", bundle: 'pro' },
      ]
    },
    {
      name: "You Do Not Understand It",
      guideFront: "What is getting in the way of understanding here?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "They have explained something and you genuinely have not followed — the names, the sequence, or the reason it matters.\n\nThe training is to say so, plainly, instead of nodding and hoping. A loop built on a misunderstanding is worse than no loop, because now they think they have been understood when they have not.\n\nWhat it usually looks like:\n• Three names you cannot place.\n• A sequence of events you have lost the order of.\n• You understand the words and not why it upset them.\n\nTwo ways through:\n1. Ask Follow-up Questions — the specific question, not a general one. \"Sorry, who pulled you aside?\"\n2. Loop Back or Rephrase as a check — offer your version and let them correct it. \"Have I got that right?\"\n\nMindset: admitting you are lost is a form of attention, not a failure of it. The alternative is pretending, which they will notice eventually.",
      inputs: [
        { q: "There are three names in the story and you cannot place any of them.", a: "\"Sorry — who's Anna in this?\" (ask follow-up questions)", bundle: 'pro' },
        { q: "You have lost the order of what happened.", a: "\"Let me check I've got it — the plan changed twice and you found out last?\" (loop back or rephrase)", bundle: 'pro' },
        { q: "You understand the events but not why it upset them.", a: "\"What was the part that got to you most?\" (ask follow-up questions)", bundle: 'pro' },
        { q: "You have been nodding along for a minute without following.", a: "\"Can you take me back a step? I've lost the thread.\" (ask follow-up questions)", bundle: 'pro' },
        { q: "You are about to loop back something you are not sure of.", a: "\"Tell me if this is wrong — it's the not being asked that's the issue?\" (loop back or rephrase)", bundle: 'pro' },
      ]
    },
    {
      name: "They Keep Saying They Are Fine",
      guideFront: "What is getting in the way of understanding here?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "They have given you three words and a shrug, and there is almost nothing to reflect or ask about.\n\nThe training is to offer rather than extract. A gentle loop of what you can see gives them something to agree with or correct, which is much easier than answering an open question about their feelings.\n\nWhat it usually looks like:\n• \"It's fine.\" / \"It's whatever.\" / \"I don't really want to go into it.\"\n• A change of subject as soon as you get close.\n• Body language that says more than the words.\n\nTwo ways through:\n1. Loop Back or Rephrase what you can see — \"It sounds less fine and more relentless, from here.\"\n2. Relate Through Sharing — go first, so they do not have to. \"I had a stretch like that in the spring. Grim.\"\n\nMindset: do not push. Offering a word and leaving the door open is the whole move; whether they walk through it is theirs to decide.",
      inputs: [
        { q: "They say: \"It's fine, honestly.\" and clearly mean the opposite.", a: "\"It sounds less fine and more relentless, from where I'm sitting.\" (loop back or rephrase)", bundle: 'pro' },
        { q: "They shrug and change the subject.", a: "\"Fair enough. I'm around if it turns into something you want to say.\" (loop back or rephrase)", bundle: 'pro' },
        { q: "They say: \"I don't really want to go into it.\"", a: "\"That's completely fine. No need.\" (loop back or rephrase)", bundle: 'pro' },
        { q: "They will not open up and you have a similar experience.", a: "\"I had a run like that in the spring. Hard to explain to anyone.\" (relate through sharing)", bundle: 'pro' },
        { q: "Their face says a lot more than their three words did.", a: "\"You don't have to say anything. It just looks like a lot.\" (loop back or rephrase)", bundle: 'pro' },
      ]
    },
  ],
  startingconversations4: [
    {
      name: "The Joke Misfires",
      guideFront: "What makes this opening hard?",
      guideBack: "A possible opener, with the strategy in brackets.",
      description: "It lands flat, or it is taken literally, or it accidentally sounds like a criticism of something they said. All three feel much worse from the inside than they look from outside.\n\nThe recovery is always the same shape: short, unbothered, and onwards. Do not explain the joke, do not repeat it louder, and do not deliver a paragraph of apology — that is what turns a two-second miss into an awkward moment.\n\nMindset: acknowledge it in four words if at all, then say something plain.",
      inputs: [
        { q: "Your dry remark was taken completely seriously.", a: "\"Sorry, that was me being sarcastic badly. It is properly annoying, though.\" [Use Humour or Irony]", bundle: 'pro' },
        { q: "The joke got nothing at all.", a: "\"Anyway — do you know if there's a break in this?\" [Mention Something That Happened]", bundle: 'pro' },
        { q: "Your joke could be read as a dig at what they just said.", a: "\"That came out wrong — I meant the situation, not you.\" [Use Humour or Irony]", bundle: 'pro' },
        { q: "You are about to explain why the joke was funny.", a: "\"Ignore me. Have you been to one of these before?\" [Mention Something That Happened]", bundle: 'pro' },
        { q: "You made a joke about the event and they organised it.", a: "\"And now I find out you made it. I'll get my coat.\" [Use Humour or Irony]", bundle: 'pro' },
      ]
    },
    {
      name: "Irony Across a Language Gap",
      guideFront: "What makes this opening hard?",
      guideBack: "A possible opener, with the strategy in brackets.",
      description: "Irony is the opener most likely to fail with someone whose first language is different from yours, or who comes from somewhere the dry register is not standard. Understatement in particular carries almost none of its meaning in the words.\n\nThe fix is not to avoid humour, but to make it visible: exaggeration travels far better than understatement, tone and face have to do more work, and if it does not land, say the plain version straight away without embarrassment.\n\nMindset: exaggeration crosses borders. Dryness often does not.",
      inputs: [
        { q: "You are about to use dry understatement with someone you have just met.", a: "\"I think we've been queueing so long I've developed a personality.\" [Use Humour or Irony]", bundle: 'pro' },
        { q: "Your flat, ironic line was taken at face value.", a: "\"Sorry — joke. It is genuinely awful, though.\" [Use Humour or Irony]", bundle: 'pro' },
        { q: "You are speaking with someone in their second language.", a: "\"This is the slowest queue in the country. Possibly Europe.\" [Use Humour or Irony]", bundle: 'pro' },
        { q: "They look confused rather than amused.", a: "\"Ignore that. Have you been waiting long?\" [Mention Something That Happened]", bundle: 'pro' },
        { q: "You want humour that cannot be misread.", a: "\"I've picked the slow queue again. Every single time.\" [Use Humour or Irony]", bundle: 'pro' },
      ]
    },
    {
      name: "It Sounds Like Flirting",
      guideFront: "What makes this opening hard?",
      guideBack: "A possible opener, with the strategy in brackets.",
      description: "\"I came over because I wanted to talk to you\" is a warm and honest sentence that can also read as interest of a different kind. That is fine when it is true and unwelcome when it is not.\n\nIf you do not intend it that way, anchor the reason in something outside the two of you — being new, knowing nobody, a specific thing they said. Reasons about the situation read as friendliness; reasons about them read as attraction.\n\nMindset: name the reason, and make it about the room rather than about them.",
      inputs: [
        { q: "You want to say why you came over without it being misread.", a: "\"I don't know anyone here, so I'm working my way round the room. I'm Rikard.\" [Say Why You Came Over]", bundle: 'pro' },
        { q: "You want to compliment the reason without it being personal.", a: "\"You were the only other person taking notes, so I thought I'd risk it.\" [Say Why You Came Over]", bundle: 'pro' },
        { q: "You realise your opener came out warmer than intended.", a: "\"That sounded odd — I mean I don't know a soul in here.\" [Say Why You Came Over]", bundle: 'pro' },
        { q: "A colleague might read a personal approach as something else.", a: "\"I've been meaning to say hello since you joined. How's it going so far?\" [Say Why You Came Over]", bundle: 'pro' },
        { q: "You do mean it that way and want to be honest but light.", a: "\"I'd have regretted not coming over, so — hello. I'm Rikard.\" [Say Why You Came Over]", bundle: 'pro' },
      ]
    },
    {
      name: "You Have Said Too Much",
      guideFront: "What makes this opening hard?",
      guideBack: "A possible opener, with the strategy in brackets.",
      description: "Saying how you feel works when it is small and current. It stops working when it turns out to be the top of something much larger, and the other person suddenly finds themselves holding it.\n\nIf you notice yourself going further than you meant, the fix is not to backtrack apologetically — that makes it heavier. Name it lightly, put it down, and offer them a way back to ordinary conversation.\n\nMindset: put it down without making a thing of putting it down.",
      inputs: [
        { q: "You have gone further than you meant with someone you just met.", a: "\"That got heavy quickly. Anyway — have you been here before?\" [Mention Something That Happened]", bundle: 'pro' },
        { q: "You can see them looking for an exit.", a: "\"Sorry, long week. Ignore me.\" [Say How You Feel]", bundle: 'pro' },
        { q: "You are about to say something too big for an opener.", a: "\"It's been a long week, put it that way.\" [Say How You Feel]", bundle: 'pro' },
        { q: "They responded kindly but you feel exposed.", a: "\"Thanks. Right — tell me something more cheerful than that.\" [Mention Something That Happened]", bundle: 'pro' },
        { q: "You want the small version of something big.", a: "\"I'm running on about four hours' sleep, so I'm not at my sharpest.\" [Say How You Feel]", bundle: 'pro' },
      ]
    },
    {
      name: "The News Is Too Heavy",
      guideFront: "What makes this opening hard?",
      guideBack: "A possible opener, with the strategy in brackets.",
      description: "Bringing something in from outside works when it is small. Major news — a disaster, something political, something genuinely upsetting — is a poor opener with a stranger, not because it does not matter but because you are asking them to have a position in front of someone they have just met.\n\nSave the weight for people you know. With a stranger, the wrong bus and the closed road do more work.\n\nMindset: an opener should be easy to answer. Heavy news is not.",
      inputs: [
        { q: "The big news of the week is on everyone's mind and you are about to raise it.", a: "\"Did you see they're digging up the high street again?\" [Mention Something That Happened]", bundle: 'pro' },
        { q: "They raise something heavy and you do not want to debate it with a stranger.", a: "\"It's a lot, that whole thing. Have you come far today?\" [Mention Something That Happened]", bundle: 'pro' },
        { q: "You want something with no weight at all.", a: "\"I got on the wrong bus this morning and didn't notice for four stops.\" [Mention Something That Happened]", bundle: 'pro' },
        { q: "Something sad has happened locally and it would be strange not to mention it.", a: "\"Awful business this week. Everyone's a bit quiet, I think.\" [Say How You Feel]", bundle: 'pro' },
        { q: "You started on something heavy and want to move on gracefully.", a: "\"Anyway. Not a topic for a Tuesday morning. Are you here for the whole day?\" [Mention Something That Happened]", bundle: 'pro' },
      ]
    },
  ],
  apologizing2: [
    {
      name: "You Went Straight to Sorry",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "You apologised first, before showing any understanding, and it did not land. This is the commonest failure in a serious apology and it does not feel like a failure — it feels like getting straight to the point.\n\nWhat the other person heard was a request to move on. The fix is to go back and do the part you skipped, out loud, rather than repeating the apology more sincerely.\n\nMindset: it is not that the sorry was wrong. It arrived too early.",
      inputs: [
        { q: "You apologised and it clearly did not land.", a: "\"I jumped to sorry. Let me go back — you must have felt completely stranded.\" [Name What They Felt]", bundle: 'pro' },
        { q: "They say \"you always just say sorry\".", a: "\"Fair. I don't think I've ever said I understood why it mattered.\" [Show You Understand Why]", bundle: 'pro' },
        { q: "You are about to apologise a second time, harder.", a: "\"Saying it louder won't help. What was it actually like for you?\" [Name What They Felt]", bundle: 'pro' },
        { q: "You have explained your reasons and they are unmoved.", a: "\"I've been explaining and not listening. Tell me how it landed.\" [Name What They Felt]", bundle: 'pro' },
        { q: "You want to restart the conversation properly.", a: "\"Can I start that again? I did it in the wrong order.\" [Say Their Feelings Matter]", bundle: 'pro' },
      ]
    },
    {
      name: "You Do Not Think You Were Wrong",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "You have hurt someone and you still think your position was right. This is the situation people handle worst, usually by apologising for nothing in particular in the hope that it passes.\n\nThere is nearly always something genuinely yours: the timing, the tone, the audience, the fact that they found out from someone else. Apologise for that specifically and hold the substance separately. It is honest, and it works far better than an apology you do not mean.\n\nIf literally nothing is yours, say that kindly rather than performing regret you do not feel.\n\nMindset: apologise for your part precisely. Do not apologise for the whole thing to end the conversation.",
      inputs: [
        { q: "You stand by the decision but not how you said it.", a: "\"The tone was wrong and I'm sorry for it. The decision I'd still make the same.\" [Apologise for What You Did]", bundle: 'pro' },
        { q: "You were right but they found out from someone else.", a: "\"You should have heard it from me first. That part's on me.\" [Apologise for What You Did]", bundle: 'pro' },
        { q: "You are about to apologise for something you do not regret.", a: "\"I can see it landed badly. I'm not going to pretend I'd do it differently, though.\" [Name What They Felt]", bundle: 'pro' },
        { q: "They want you to agree you were wrong and you do not.", a: "\"I don't think I was wrong about the thing. I do think I handled it badly.\" [Show You Understand Why]", bundle: 'pro' },
        { q: "Nothing about it is yours at all.", a: "\"I'm sorry it's landed like this. I don't think I did anything I'd change, and I'd rather say that than pretend.\" [Say Their Feelings Matter]", bundle: 'pro' },
      ]
    },
    {
      name: "They Do Not Accept It",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "You have apologised well and it has not been accepted. Perhaps not yet, perhaps not ever.\n\nAn apology is offered, not transacted. Pressing for acceptance — repeating it, listing how sincere it was, pointing out that you have apologised — turns repair into pressure and makes the whole thing about your need to be forgiven.\n\nWhat you can control is the plan and whether you keep it. That is what changes things over weeks, not the conversation itself.\n\nMindset: you can apologise. You cannot make it enough. Let the change do the rest.",
      inputs: [
        { q: "They say sorry does not fix it.", a: "\"It doesn't. I'm not expecting it to.\" [Name What They Felt]", bundle: 'pro' },
        { q: "They are still angry after a proper apology.", a: "\"You're allowed to be. I'm not asking you to be over it.\" [Say Their Feelings Matter]", bundle: 'pro' },
        { q: "You are tempted to point out that you have apologised.", a: "\"I'll leave it with you. The bit that matters is what happens next time anyway.\" [Say What You'll Do Differently]", bundle: 'pro' },
        { q: "They say they need time.", a: "\"Take it. I'm not going to keep bringing it up.\" [Say Their Feelings Matter]", bundle: 'pro' },
        { q: "They may never accept it.", a: "\"I understand. I'd still rather have said it than not.\" [Apologise for What You Did]", bundle: 'pro' },
      ]
    },
    {
      name: "It Sounds Like a Script",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "The steps are useful and they can be heard as steps. Someone who notices you working through a structure will trust the whole thing less, not more.\n\nWhat causes it is almost always abstraction — general phrases about feelings and respect that could have been said to anyone. The cure is specifics: their actual afternoon, the actual room, the actual thing you did.\n\nMindset: if the sentence could be said to anybody, it will sound like a technique.",
      inputs: [
        { q: "You are about to say \"I understand that made you feel disrespected\".", a: "\"You'd moved two things to be there, and I didn't turn up.\" [Show You Understand Why]", bundle: 'pro' },
        { q: "Your acknowledgement sounds general.", a: "\"You sat there while eight people watched. That's the bit I'd hate.\" [Name What They Felt]", bundle: 'pro' },
        { q: "You are about to say something about valuing the relationship.", a: "\"I don't want to be someone you have to double-check on.\" [Say Their Feelings Matter]", bundle: 'pro' },
        { q: "They say \"this sounds rehearsed\".", a: "\"It is a bit — I've been thinking about how to say it all week.\" [Say Their Feelings Matter]", bundle: 'pro' },
        { q: "You have used three feeling words and none of them is specific.", a: "\"Let me just say the plain version: I'm sorry I said it in the meeting.\" [Apologise for What You Did]", bundle: 'pro' },
      ]
    },
    {
      name: "This Should Have Been Quicker",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Not everything needs five steps. Running the full version over a forgotten attachment makes the other person the injured party in something they had already forgotten, and turns your discomfort into their problem.\n\nThe size test still applies here: did it land on them, or did it only embarrass you? If it is the second, the everyday version is the right tool and this pack is the wrong one.\n\nMindset: the full apology is for things that actually hurt someone.",
      inputs: [
        { q: "You are about to run five steps over something small.", a: "\"Sorry — that was my fault. Doing it now.\" [Apologise for What You Did]", bundle: 'pro' },
        { q: "They look uncomfortable at how much you are saying.", a: "\"I'm making this bigger than it is. Sorry, and that's genuinely it.\" [Apologise for What You Did]", bundle: 'pro' },
        { q: "They keep saying it is fine and they seem to mean it.", a: "\"Then I'll take that. Sorry again and I'll shut up about it.\" [Say What You'll Do Differently]", bundle: 'pro' },
        { q: "You want to check whether it needs the full version.", a: "\"Is this a small thing or has it been sitting with you?\" [Name What They Felt]", bundle: 'pro' },
        { q: "It was your embarrassment rather than their injury.", a: "(say the short version, once, and move on) [Apologise for What You Did]", bundle: 'pro' },
      ]
    },
  ],
  startingconversations2: [
    {
      name: "You Do Not Actually Need Anything",
      guideFront: "What makes this opening hard?",
      guideBack: "A possible opener, with the strategy in brackets.",
      description: "Asking for help works because the request is real. Invent one and it usually shows — the question is slightly too easy, or you do not listen properly to the answer, and the whole thing reads as a device.\n\nEither find something you genuinely do want to know, which is more often available than it seems, or switch to an opener that does not require a pretext.\n\nMindset: if you would not ask it with nobody around, do not ask it now.",
      inputs: [
        { q: "You want to talk to them but you know how the machine works.", a: "\"Busy in here tonight, isn't it.\" [Mention a Shared Experience]", bundle: 'pro' },
        { q: "You are about to ask something you can obviously see the answer to.", a: "\"Is this seat taken?\" [Ask for Help]", bundle: 'pro' },
        { q: "There is something you have genuinely wondered about this place.", a: "\"Do you know if it's always this busy on a Tuesday?\" [Ask for Help]", bundle: 'pro' },
        { q: "You have nothing to ask but you do know something they might want.", a: "\"The far end's usually emptier, if you're looking for space.\" [Offer Something Useful]", bundle: 'pro' },
        { q: "You have just realised your question was a pretext and they answered it seriously.", a: "\"Thanks — sorry, I think I did know that. It's been a long day.\" [Ask for Help]", bundle: 'pro' },
      ]
    },
    {
      name: "The Offer Is Not Wanted",
      guideFront: "What makes this opening hard?",
      guideBack: "A possible opener, with the strategy in brackets.",
      description: "Offering useful information is welcome; offering an opinion about what someone should do is not, and the line between them is easy to cross without noticing.\n\nThe test is whether the information is about the situation or about them. \"The other queue is shorter\" is about the situation. \"You'd be better off doing it a different way\" is about them, and it arrives as a correction.\n\nMindset: give facts about the place, not verdicts about the person.",
      inputs: [
        { q: "You are about to tell someone they are doing something the wrong way.", a: "\"That door sticks, by the way — you have to pull first.\" [Offer Something Useful]", bundle: 'pro' },
        { q: "They have clearly chosen the slower option on purpose.", a: "\"Fair enough — I always take the other one, but that's habit.\" [Offer Something Useful]", bundle: 'pro' },
        { q: "You offered a tip and they looked mildly irritated.", a: "\"Sorry, unsolicited advice. Ignore me.\" [Offer Something Useful]", bundle: 'pro' },
        { q: "You want to help but they know more about this than you do.", a: "\"You've done this before, haven't you? Is there a trick I'm missing?\" [Ask for Help]", bundle: 'pro' },
        { q: "You start to give advice about their life rather than the situation.", a: "\"None of my business, though. How's it going otherwise?\" [Pick Up a Shared Thread]", bundle: 'pro' },
      ]
    },
    {
      name: "You Cannot Remember the Thread",
      guideFront: "What makes this opening hard?",
      guideBack: "A possible opener, with the strategy in brackets.",
      description: "You know they told you something. You cannot remember whether it was a house move, a job interview or a hospital appointment, and asking about the wrong one would be worse than asking about nothing.\n\nAdmitting the gap works far better than people expect. \"You told me something last time and I have lost it\" is honest, mildly self-deprecating, and gets you the thread back from them.\n\nMindset: half-remembering and saying so beats pretending, and it beats saying nothing.",
      inputs: [
        { q: "You know something was going on but not what.", a: "\"You told me something last time and I've completely lost it. What was happening?\" [Pick Up a Shared Thread]", bundle: 'pro' },
        { q: "You remember the topic but not the outcome.", a: "\"Did the house thing ever get sorted? I've lost track of where you got to.\" [Pick Up a Shared Thread]", bundle: 'pro' },
        { q: "You are about to guess and might guess wrong.", a: "\"Refresh me — was it the interview or the move that was happening?\" [Pick Up a Shared Thread]", bundle: 'pro' },
        { q: "You remember nothing at all about them.", a: "\"How's your week been? Properly, not the polite version.\" [Mention a Shared Experience]", bundle: 'pro' },
        { q: "You realise mid-sentence you have mixed them up with someone else.", a: "\"That's someone else entirely, isn't it. Sorry. What have you been up to?\" [Pick Up a Shared Thread]", bundle: 'pro' },
      ]
    },
    {
      name: "The Thread Might Be Painful",
      guideFront: "What makes this opening hard?",
      guideBack: "A possible opener, with the strategy in brackets.",
      description: "Some ongoing things are difficult — an illness, a job that might have gone, a relationship, an application that may not have worked. Asking is usually right, because being asked is better than being avoided, but how you ask matters.\n\nLeave them a way out. A question with an easy exit lets them say \"fine, thanks\" and move on, and lets them say more if they want to. Do not ask across a room, and do not ask twice if the first answer was short.\n\nMindset: ask gently, once, and let their answer decide the size of the conversation.",
      inputs: [
        { q: "Someone was waiting on medical results.", a: "\"How have you been? You had things going on last time we spoke.\" [Pick Up a Shared Thread]", bundle: 'pro' },
        { q: "You know they were at risk of losing a job.", a: "\"How did things land at work in the end? Only if you want to.\" [Pick Up a Shared Thread]", bundle: 'pro' },
        { q: "They gave a very short answer and you were going to ask more.", a: "\"Fair enough. Are you around for the rest of the week?\" [Pick Up a Shared Thread]", bundle: 'pro' },
        { q: "You are in a group and the thread is a private one.", a: "\"Good to see you — how was the weekend?\" [Mention a Shared Experience]", bundle: 'pro' },
        { q: "They said it did not go well and you do not know what to say.", a: "\"That's rough. Do you want to talk about it or would you rather not?\" [Pick Up a Shared Thread]", bundle: 'pro' },
      ]
    },
    {
      name: "The Shared Experience Was Bad",
      guideFront: "What makes this opening hard?",
      guideBack: "A possible opener, with the strategy in brackets.",
      description: "Sometimes the thing you have both just been through was genuinely unpleasant rather than mildly annoying — a difficult meeting, bad news, someone being told off in front of everyone.\n\nThe light comment that works after a long queue does not work here. Either say something plainly and briefly, or say nothing and let the situation be what it is. The failure mode is jokey small talk over something that actually mattered.\n\nMindset: match the weight. If it was heavy, one honest sentence beats a light one.",
      inputs: [
        { q: "You have both come out of a meeting where bad news was announced.", a: "\"That was a lot to take in. Are you alright?\" [Mention a Shared Experience]", bundle: 'pro' },
        { q: "Someone was criticised in front of the group and you were both there.", a: "\"That was uncomfortable to sit through. Are you okay?\" [Mention a Shared Experience]", bundle: 'pro' },
        { q: "You want to acknowledge it without making them discuss it.", a: "\"Not the morning any of us wanted. I'm around if you want a coffee.\" [Offer Something Useful]", bundle: 'pro' },
        { q: "You are about to make a joke about something that was not funny.", a: "\"That was grim, actually.\" [Mention a Shared Experience]", bundle: 'pro' },
        { q: "They clearly do not want to talk about it.", a: "\"Say no more. Are you off after this?\" [Pick Up a Shared Thread]", bundle: 'pro' },
      ]
    },
  ],
  startingconversations3: [
    {
      name: "The Compliment Could Land Wrong",
      guideFront: "What makes this opening hard?",
      guideBack: "A possible opener, with the strategy in brackets.",
      description: "A compliment about a choice is a friendly remark. A compliment about someone's body or face is something else, and with a stranger it usually arrives as attention they did not ask for.\n\nThe other risk is direction. A compliment from someone with more power — a manager, a teacher, anyone in charge — lands heavier than the same words between equals, and personal remarks stop being casual.\n\nStick to what they chose, what they did, and what they can take credit for.\n\nMindset: if they could have chosen otherwise, you can compliment it. If not, leave it.",
      inputs: [
        { q: "You were about to compliment how someone looks.", a: "\"That's a great coat.\" [Compliment Something Specific]", bundle: 'pro' },
        { q: "You want to say something positive to someone you manage.", a: "\"The way you handled that call was really good. Specifically the slowing down.\" [Compliment Something Specific]", bundle: 'pro' },
        { q: "A compliment could be read as coming on to them.", a: "\"That was a good question you asked in there.\" [Compliment Something Specific]", bundle: 'pro' },
        { q: "You realise your remark landed awkwardly.", a: "\"That came out oddly — I meant the jacket's great. Anyway, do you know when this starts?\" [Compliment Something Specific]", bundle: 'pro' },
        { q: "You genuinely admire something personal about them but barely know them.", a: "\"You're very calm with all this going on. How do you manage that?\" [Ask About Them]", bundle: 'pro' },
      ]
    },
    {
      name: "Your Guess Is Wrong",
      guideFront: "What makes this opening hard?",
      guideBack: "A possible opener, with the strategy in brackets.",
      description: "You guessed and missed. It feels like a small failure and it is almost always the opposite — you have handed them the pleasure of correcting you, and corrections come with explanations attached.\n\nThe only way to make it awkward is to defend the guess or over-apologise. Take it lightly and ask about the real answer.\n\nMindset: \"no, actually…\" is an invitation. Follow it.",
      inputs: [
        { q: "You guessed they were experienced and it is their first time.", a: "\"You had me fooled. What made you come to this one?\" [Ask About Them]", bundle: 'pro' },
        { q: "You guessed they were leaving and they had just arrived.", a: "\"Ha — sorry, wrong end of the evening. Do you know people here?\" [Ask About Them]", bundle: 'pro' },
        { q: "You guessed their role and got it completely wrong.", a: "\"Right, nothing like it then. What is it you actually do?\" [Ask About Them]", bundle: 'pro' },
        { q: "Your guess about their mood was wrong and slightly unflattering.", a: "\"I've misread that completely, sorry. You're clearly enjoying yourself more than I am.\" [Make a Guess About Them]", bundle: 'pro' },
        { q: "They correct you and seem to enjoy doing it.", a: "\"Go on then — what gave me the wrong impression?\" [Ask About Them]", bundle: 'pro' },
      ]
    },
    {
      name: "It Turns Into an Interview",
      guideFront: "What makes this opening hard?",
      guideBack: "A possible opener, with the strategy in brackets.",
      description: "Four questions in ninety seconds and the other person has stopped answering properly. Nothing you asked was wrong; the problem is that each question started fresh instead of following the last answer.\n\nTwo things fix it. Follow one specific word from what they just said. And give something of your own back — a sentence about you turns interrogation into exchange.\n\nMindset: for every question, give one thing away. That is what makes it a conversation.",
      inputs: [
        { q: "You have asked three questions in a row and answers are getting shorter.", a: "\"I'm interrogating you. I'll go first — I only came because a friend bailed.\" [Ask About Them]", bundle: 'pro' },
        { q: "You are about to change subject rather than follow their answer.", a: "\"Go back a second — you said you'd nearly not come. Why?\" [Ask About Them]", bundle: 'pro' },
        { q: "They have answered everything politely and asked you nothing.", a: "\"I've asked you about six things. Ask me something.\" [Ask About Them]", bundle: 'pro' },
        { q: "You realise you know a list of facts about them and nothing else.", a: "\"What's the bit of all that you actually enjoy?\" [Ask About Them]", bundle: 'pro' },
        { q: "They look slightly cornered.", a: "\"Anyway — that jumper's excellent, by the way.\" [Compliment Something Specific]", bundle: 'pro' },
      ]
    },
    {
      name: "They Give You Nothing Back",
      guideFront: "What makes this opening hard?",
      guideBack: "A possible opener, with the strategy in brackets.",
      description: "Short answers, no questions returned, eyes moving around the room. Sometimes that is a person who does not want to talk, and the right response is a warm exit.\n\nBut sometimes it is a person who finds this hard, and a slightly different move helps: a lower-effort question, something concrete rather than personal, or giving something of your own first so they are not the only one exposed.\n\nMindset: try one easier move, then let them be. Both outcomes are fine.",
      inputs: [
        { q: "They have given two short answers about themselves.", a: "\"Have you been to one of these before?\" [Make a Guess About Them]", bundle: 'pro' },
        { q: "They seem uncomfortable being asked about themselves.", a: "\"That's a good bag, by the way. Very practical.\" [Compliment Something Specific]", bundle: 'pro' },
        { q: "You have been doing all the talking and all the asking.", a: "\"I'll stop firing questions. I'm mostly here because I said yes without checking the date.\" [Ask About Them]", bundle: 'pro' },
        { q: "Two attempts have both landed flat.", a: "\"Anyway — enjoy the rest of it.\" [Ask About Them]", bundle: 'pro' },
        { q: "They answer well but never ask anything back.", a: "\"Right, your turn. Ask me something.\" [Ask About Them]", bundle: 'pro' },
      ]
    },
    {
      name: "They Are Not Okay",
      guideFront: "What makes this opening hard?",
      guideBack: "A possible opener, with the strategy in brackets.",
      description: "You asked how they were and got a real answer — something heavy, or the beginning of something heavy. This is the situation the opener exists for and also the point at which it stops being an opener.\n\nWhat helps is small and unglamorous: listen without fixing, do not compare it to your own experience, and offer one concrete thing rather than general availability. What does not help is advice, silver linings, or trying to resolve it while standing in a corridor.\n\nIf it is beyond what a conversation can hold, saying so kindly and pointing towards real support is the right move, not a failure of nerve.\n\nMindset: you are not solving this. You are making sure they are not carrying it alone.",
      inputs: [
        { q: "They tell you something genuinely difficult.", a: "\"That sounds really hard. I'm glad you said.\" [Ask How They Really Are]", bundle: 'pro' },
        { q: "You want to say something and everything sounds wrong.", a: "\"I don't have anything useful to say. I'm here, though.\" [Ask How They Really Are]", bundle: 'pro' },
        { q: "You are about to offer advice they have not asked for.", a: "\"Do you want thoughts, or do you just want to say it out loud?\" [Ask How They Really Are]", bundle: 'pro' },
        { q: "You want to offer support without it being vague.", a: "\"I'm around Thursday. Shall we get a coffee then, properly?\" [Ask How They Really Are]", bundle: 'pro' },
        { q: "It sounds like more than a conversation can carry.", a: "\"This sounds like more than I can help with, and I don't want to leave you with it. Is there someone you can talk to properly?\" [Ask How They Really Are]", bundle: 'pro' },
      ]
    },
  ],
  endingconversations: [
    {
      name: "They Will Not Let You Go",
      guideFront: "What makes this ending hard?",
      guideBack: "A possible ending, with the strategy in brackets.",
      description: "You have signalled twice and the conversation is still going. Each attempt that fails makes the next one feel ruder, and people often give up and stay for another ten minutes rather than escalate.\n\nThe escalation is the kind move. A clear sentence with no gap after it — no trailing \"so…\", no pause for them to fill — ends things more comfortably than four soft attempts.\n\nMindset: clearer, not louder. And do not leave a pause at the end.",
      inputs: [
        { q: "Your soft exit phrase was ignored completely.", a: "\"I do actually have to go — I've got something on at four.\" [Give a Reason]", bundle: 'pro' },
        { q: "They start a new topic straight after you said you were leaving.", a: "\"Save that one for me. I have to run.\" [Offer to Continue Later]", bundle: 'pro' },
        { q: "They say \"one more thing\" for the third time.", a: "\"Sorry, I really can't. Let's do the rest tomorrow.\" [Offer to Continue Later]", bundle: 'pro' },
        { q: "You are already backing away and they keep talking.", a: "\"I'm going to have to stop you there. Take care.\" [Use an Exit Phrase]", bundle: 'pro' },
        { q: "You have been standing with your coat on for five minutes.", a: "\"Right, I'm going before I miss it entirely. See you.\" [Use an Exit Phrase]", bundle: 'pro' },
      ]
    },
    {
      name: "You Have No Real Reason",
      guideFront: "What makes this ending hard?",
      guideBack: "A possible ending, with the strategy in brackets.",
      description: "Sometimes you just want to go. Nothing is waiting, nothing starts at four, and inventing something feels dishonest while saying nothing feels rude.\n\nYou do not need a reason to end a conversation, and the vague ones exist for exactly this. \"I should get on\" is both true and sufficient, because nobody is auditing it. At an event, moving on is the expected behaviour and needs no justification at all.\n\nMindset: wanting to go is a reason. \"I should get on\" covers it.",
      inputs: [
        { q: "Nothing is waiting for you but you want to leave.", a: "\"I should probably get on.\" [Give a Reason]", bundle: 'pro' },
        { q: "You are at an event and want to talk to other people.", a: "\"I'm going to do a lap. It was good to meet you.\" [Say Something Positive About the Talk]", bundle: 'pro' },
        { q: "You are about to invent an appointment that does not exist.", a: "\"Right — I'll let you get on.\" [Use an Exit Phrase]", bundle: 'pro' },
        { q: "The conversation has simply run out and you both know it.", a: "\"Anyway. Good to see you — have a good one.\" [Wish Them Well]", bundle: 'pro' },
        { q: "You want to leave a group without a reason.", a: "\"I'm going to find a drink. Back in a bit.\" [Give a Reason]", bundle: 'pro' },
      ]
    },
    {
      name: "Ending a Difficult Conversation",
      guideFront: "What makes this ending hard?",
      guideBack: "A possible ending, with the strategy in brackets.",
      description: "Leaving a heavy conversation is delicate, because the ending can read as escape — as though you have heard enough and would like to be elsewhere.\n\nTwo things make it safe. Name what was said before you leave, so it is clear you are not walking away from it. And offer a genuine continuation, which turns your departure into an interval rather than a full stop. This is also the one place where the joke is entirely wrong.\n\nMindset: acknowledge, then offer more. Never close a hard conversation with a light exit.",
      inputs: [
        { q: "Someone has told you something difficult and you have to leave.", a: "\"I'm glad you told me. Can we carry this on properly tomorrow?\" [Offer to Continue Later]", bundle: 'pro' },
        { q: "You want to leave without it sounding like you have had enough.", a: "\"I have to go, and I don't want to leave it here. Are you around later?\" [Leave With One Last Question]", bundle: 'pro' },
        { q: "A hard conversation has reached its natural end.", a: "\"Thank you for telling me. I mean that.\" [Say Something Positive About the Talk]", bundle: 'pro' },
        { q: "You are worried about them as you leave.", a: "\"Look after yourself. I'll message you this evening.\" [Wish Them Well]", bundle: 'pro' },
        { q: "You are about to end it with a joke out of awkwardness.", a: "\"Take care. I'll check in tomorrow.\" [Use an Exit Phrase]", bundle: 'pro' },
      ]
    },
    {
      name: "Leaving a Group",
      guideFront: "What makes this ending hard?",
      guideBack: "A possible ending, with the strategy in brackets.",
      description: "Leaving several people at once is harder than leaving one, because there is no obvious gap and a goodbye can feel like an announcement.\n\nTwo approaches work. The quiet one: say it to the person nearest you and move, without stopping the group. The open one: one short sentence to everybody, and then actually go — the mistake is announcing a departure and then remaining for ten minutes, which makes the second attempt strange.\n\nMindset: say it once, to one person or to everyone, and then move.",
      inputs: [
        { q: "You want to slip away from a group mid-conversation.", a: "\"I'm going to head off — night, all.\" [Use an Exit Phrase]", bundle: 'pro' },
        { q: "You do not want to interrupt the conversation to leave.", a: "\"I'm off. Good to see you.\" (quietly, to the person nearest) [Use an Exit Phrase]", bundle: 'pro' },
        { q: "You announced you were leaving and then stayed.", a: "\"Right, this time I mean it. Night.\" [End on a Joke]", bundle: 'pro' },
        { q: "You want to leave a group where you know one person well.", a: "\"I'm going to go. Message me about Saturday.\" [Offer to Continue Later]", bundle: 'pro' },
        { q: "A group at work is chatting and you need to get back.", a: "\"I'll leave you to it — I've got things to finish.\" [Give a Reason]", bundle: 'pro' },
      ]
    },
    {
      name: "They Ended It On You",
      guideFront: "What makes this ending hard?",
      guideBack: "A possible ending, with the strategy in brackets.",
      description: "You are the one being left. Somebody has given a reason and started to go, and how you respond decides whether the ending is comfortable.\n\nThe move is to release them quickly and warmly. Holding someone with one last question when they have already said they are leaving is the exact thing this pack teaches you not to do to others.\n\nMindset: let them go easily, and put the warmth in the release.",
      inputs: [
        { q: "They say they have to leave.", a: "\"Of course — go. Good to see you.\" [Say Something Positive About the Talk]", bundle: 'pro' },
        { q: "They are leaving and you had one more thing to say.", a: "\"Go, go. I'll message you the rest.\" [Offer to Continue Later]", bundle: 'pro' },
        { q: "They apologise for having to leave.", a: "\"Don't apologise. Good luck with the rest of your day.\" [Wish Them Well]", bundle: 'pro' },
        { q: "They are clearly trying to leave and being too polite about it.", a: "\"You've got that look. Go on, off you go.\" [End on a Joke]", bundle: 'pro' },
        { q: "They leave mid-topic and you would like to finish it.", a: "\"We'll pick this up. Take care.\" [Offer to Continue Later]", bundle: 'pro' },
      ]
    },
  ],
  changingtopics: [
    {
      name: "The Topic That Won't Die",
      guideFront: "What kind of switch is this?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "A subject that's been fully covered but keeps coming back — the same complaint on its third lap, a story retold, a work gripe that won't rest. The training is to recognise it's over-covered (not new) and close it warmly before opening something else. Best handled with Respectful Exit.\n\nWhat it usually looks like:\n• The same complaint on its third lap.\n• A story you have already heard, being retold.\n• Everyone agreeing with each other for the fourth time.\n\nTwo ways through:\n1. Respectful Exit — name the loop kindly and close it. \"We could go round on this all night, couldn't we?\"\n2. Acknowledge and Redirect — give it a nod and open something else. \"Well, fingers crossed. By the way—\"\n\nMindset: it is over-covered, not new, so hinting will not work. Someone has to close it, and it may as well be you.",
      inputs: [
        { q: "You've tried to move on twice and they keep pulling it back to the same subject.", a: "\"I think we've really covered this one — genuinely, what else is going on with you?\" (respectful exit)", bundle: 'pro' },
        { q: "The same complaint is coming round for a third lap.", a: "\"I do get it — let's give it a rest though. How's everything else?\" (respectful exit)", bundle: 'pro' },
        { q: "A story you've already heard is being retold in full.", a: "\"Still a great one — so, tell me something I haven't heard yet.\" (respectful exit)", bundle: 'pro' },
        { q: "They keep returning to a work gripe you've discussed from every angle.", a: "\"We've squeezed that dry, I think. Shall we move to something new?\" (respectful exit)", bundle: 'pro' },
      ]
    },
    {
      name: "The Sensitive Corner",
      guideFront: "What kind of switch is this?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "The conversation turns to something uncomfortable, painful, or heated — and a jokey switch would feel careless. The training is to notice the sensitivity and redirect gently, acknowledging briefly before guiding somewhere safer. Best handled with Steering Away from Sensitive (and a soft Acknowledge and Redirect).\n\nWhat it usually looks like:\n• Someone has gone quiet or tense.\n• The subject has turned to money, illness, politics or a rift.\n• A joke here would land badly and everyone can feel it.\n\nTwo ways through:\n1. Steering Away from Sensitive — acknowledge, then guide. \"That's a tough one. On a lighter note—\"\n2. Acknowledge and Redirect, softly — close it gently. \"I hear you. Anyway, how's the new job going?\"\n\nMindset: a jokey switch here reads as careless. Brief acknowledgement first is what turns the redirect into an act of care.",
      inputs: [
        { q: "A sensitive topic comes up that you can't just joke your way out of.", a: "\"That's a heavy one, and I don't want to make light of it. How have things been otherwise?\" (steering away from sensitive)", bundle: 'pro' },
        { q: "Someone overshared and it's gone quiet and awkward.", a: "\"No judgement here at all — and hey, how's the new job been?\" (steering away from sensitive)", bundle: 'pro' },
        { q: "A group starts arguing and it's getting tense.", a: "\"We all feel strongly on that one. Anyway — anyone been anywhere nice lately?\" (steering away from sensitive)", bundle: 'pro' },
        { q: "You need to switch but don't want to seem like you're dodging them.", a: "\"That's really interesting and I'll come back to it — but first, how did the interview go?\" (acknowledge and redirect)", bundle: 'pro' },
      ]
    },
    {
      name: "The Stall",
      guideFront: "What kind of switch is this?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "The conversation has died into silence and there's nothing to bridge from — they've said almost nothing to catch. The training is to accept there's no thread to link off and just open something fresh and light. Best handled with Random or Light Switch.\n\nWhat it usually looks like:\n• A silence with nothing in it to catch.\n• They have said almost nothing you could bridge from.\n• Both of you are waiting for the other to go first.\n\nTwo ways through:\n1. Random or Light Switch — open something fresh, and flag it. \"Completely random, but have you seen—\"\n2. Finding Common Ground — offer your own thing and see if it matches. \"I've been doing nothing but watching films. You?\"\n\nMindset: stop hunting for a bridge that is not there. With no thread to link off, opening something new IS the move.",
      inputs: [
        { q: "There's no natural detail to bridge from — they've said almost nothing.", a: "\"Totally out of nowhere, but — what's been the highlight of your week?\" (random or light switch)", bundle: 'pro' },
        { q: "Small talk has died into silence.", a: "\"Right, random question to save us — best thing you've eaten this week?\" (random or light switch)", bundle: 'pro' },
        { q: "The conversation keeps fizzling after every topic.", a: "\"Let me try a fun one — if you could teleport anywhere right now, where?\" (random or light switch)", bundle: 'pro' },
        { q: "You're both out of easy things to say.", a: "\"I've got a curveball — worst film you've ever paid to see?\" (random or light switch)", bundle: 'pro' },
      ]
    },
    {
      name: "The Ignored Switch",
      guideFront: "What kind of switch is this?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "You tried to change the subject and it didn't land — they carried on regardless. The training is to notice the soft move failed and make a clearer, warmer one rather than repeating the same hint. Best handled with a firm Respectful Exit or an open Light Switch.\n\nWhat it usually looks like:\n• You changed the subject and they carried straight on.\n• Your bridge was too subtle to register.\n• You are about to try the same soft hint again.\n\nTwo ways through:\n1. Respectful Exit, firmly — close it out loud. \"Let's park that one. What else is going on with you?\"\n2. Random or Light Switch — flag the switch openly. \"Right, I'm changing the subject on purpose —\"\n\nMindset: repeating a hint that already failed just makes it awkward. Be warmer and clearer, not more subtle.",
      inputs: [
        { q: "Your light switch got ignored and the heavy topic rolls on.", a: "\"I'll be honest — I'd love to lift the mood a bit. What's something good that's happened lately?\" (random or light switch)", bundle: 'pro' },
        { q: "You tried to redirect and they didn't take the hint.", a: "\"Let me be clearer — I think we've done that topic. What else is new with you?\" (respectful exit)", bundle: 'pro' },
        { q: "A gentle bridge landed flat and they carried on.", a: "\"Genuinely, shall we switch it up? Tell me the best part of your week.\" (respectful exit)", bundle: 'pro' },
        { q: "Your redirect got a one-word reply and then back to the old subject.", a: "\"Okay, new tack entirely — got any plans this weekend?\" (random or light switch)", bundle: 'pro' },
      ]
    },
  ],
  reactingtounexpectedstatements: [
    {
      name: "They Said Something You Object To",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Something has been said that you find wrong, unkind or offensive, and you have no prepared response — which is exactly when people either say nothing and regret it, or say something sharp and regret that.\n\nThe pause is worth more here than anywhere. A named second, or an honest \"I don't know what to say to that\", both register that it landed without committing you to a fight you have not thought about.\n\nWhether to take it further is a separate decision, and it is a much better one made tomorrow than in the moment.\n\nMindset: register it now, decide later. Both halves matter.",
      inputs: [
        { q: "Someone says something you find genuinely objectionable.", a: "\"I don't know what to say to that, honestly.\" [Say You Don't Know What to Say]", bundle: 'pro' },
        { q: "You want to register that it landed without starting a row.", a: "\"Give me a second — that's not what I expected to hear.\" [Say You Need a Second]", bundle: 'pro' },
        { q: "You want to understand before deciding how to respond.", a: "\"What made you say that?\" [Ask What Prompted It]", bundle: 'pro' },
        { q: "You can name your reaction but not your position.", a: "\"I don't have an argument ready. It did make me uncomfortable.\" [Answer the Part You Can]", bundle: 'pro' },
        { q: "It needs saying properly and this is not the moment.", a: "\"I want to come back to that. Not here, though.\" [Come Back to It Later]", bundle: 'pro' },
      ]
    },
    {
      name: "They Told You Something Personal",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Someone discloses something significant — an illness, a loss, a relationship, something they have been carrying — and there is a strong pull towards saying something adequate.\n\nAdequacy is the wrong target. Nobody expects the right words, and the hollow ones are worse than none. What people remember is who stayed in the conversation.\n\nIf it is bigger than a conversation between the two of you, saying so kindly and pointing towards real support is the right move rather than a failure of nerve.\n\nMindset: present beats eloquent. Say the true small thing and stay.",
      inputs: [
        { q: "Someone tells you something serious about their health.", a: "\"I don't know what to say. I'm really glad you told me, though.\" [Say You Don't Know What to Say]", bundle: 'pro' },
        { q: "You are about to reach for something comforting and hollow.", a: "\"I've got nothing wise. I do want to know how you are.\" [Answer the Part You Can]", bundle: 'pro' },
        { q: "You want to hear the whole thing rather than react to the headline.", a: "\"Tell me properly, if you want to. How long has this been going on?\" [Ask What Prompted It]", bundle: 'pro' },
        { q: "You need a moment before you can respond at all.", a: "\"God. Give me a second — I wasn't expecting that.\" [Say You Need a Second]", bundle: 'pro' },
        { q: "You want to make sure the conversation continues.", a: "\"Can I check in with you next week? Not to fix anything.\" [Come Back to It Later]", bundle: 'pro' },
      ]
    },
    {
      name: "An Opinion You Strongly Disagree With",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Someone states a view you find plainly wrong, and the argument assembles itself before you have decided whether to have it.\n\nArguing from surprise is the worst version of arguing: the case is unprepared, the tone is sharper than intended, and it is the tone that gets remembered. A question buys you information and time at once, and it very often turns out that the position is not quite what the sentence suggested.\n\nDeciding whether it is worth discussing is a legitimate separate step, and this pack ends where Disagreeing begins.\n\nMindset: find out what they actually think before deciding whether to argue with it.",
      inputs: [
        { q: "Someone states a view you think is plainly wrong.", a: "\"How did you land on that? I'm genuinely curious.\" [Ask What Prompted It]", bundle: 'pro' },
        { q: "The counter-argument is assembling itself and you have not decided to use it.", a: "\"Let me think about that for a second.\" [Say You Need a Second]", bundle: 'pro' },
        { q: "The statement probably sounded worse than the position is.", a: "\"Say more. I'd rather hear the whole thing than react to the headline.\" [Ask What Prompted It]", bundle: 'pro' },
        { q: "You agree with part of it and not the rest.", a: "\"The first bit I'd agree with. The rest I'd want to think about.\" [Answer the Part You Can]", bundle: 'pro' },
        { q: "It is worth discussing but not here and not now.", a: "\"I'd like to come back to that properly sometime.\" [Come Back to It Later]", bundle: 'pro' },
      ]
    },
    {
      name: "You Reacted Before You Thought",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Something came out — a laugh, a dismissal, a sharper answer than you meant — before you had decided anything.\n\nGoing back is easy and rare. Name it as a reaction rather than a view, say what you actually think now, and if it landed badly say so plainly instead of hoping it passed unnoticed.\n\nMindset: correcting a first reaction is the most credible thing you can do afterwards.",
      inputs: [
        { q: "You laughed out of surprise at the wrong moment.", a: "\"Sorry — that was surprise, not amusement. Let me start again.\" [Say You Need a Second]", bundle: 'pro' },
        { q: "You dismissed something and have changed your mind.", a: "\"Can I come back to yesterday? I answered too fast.\" [Come Back to It Later]", bundle: 'pro' },
        { q: "You sounded certain and were not.", a: "\"I sounded clear. I wasn't — that was a reaction.\" [Say You Don't Know What to Say]", bundle: 'pro' },
        { q: "You want to replace the reaction with what you actually think.", a: "\"The first half I do agree with. The second half I still don't know.\" [Answer the Part You Can]", bundle: 'pro' },
        { q: "You said something sharper than you meant.", a: "\"That came out harder than I meant it. What did you mean by it?\" [Ask What Prompted It]", bundle: 'pro' },
      ]
    },
    {
      name: "It Happened in Front of People",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "An audience changes everything. There is pressure to produce a response immediately, silence is more conspicuous, and anything you say is heard by people who have no context.\n\nAlmost always the right move is the smallest one: a short honest holding line in the room, and the real conversation afterwards. Nobody thinks less of someone who says they will come back to it; plenty of people regret what they said in the moment.\n\nMindset: small in the room, real afterwards.",
      inputs: [
        { q: "Something lands in a meeting and everyone looks at you.", a: "\"I'd want to think about that before I answer.\" [Come Back to It Later]", bundle: 'pro' },
        { q: "You want to say something honest without opening it up publicly.", a: "\"I don't have a view on that yet.\" [Say You Don't Know What to Say]", bundle: 'pro' },
        { q: "The silence is becoming conspicuous.", a: "\"Give me a second — I'm thinking.\" [Say You Need a Second]", bundle: 'pro' },
        { q: "You can answer the practical part in the room.", a: "\"The dates I can answer. The rest I'd want to come back on.\" [Answer the Part You Can]", bundle: 'pro' },
        { q: "You catch them privately afterwards.", a: "\"What you said in there — what was behind it?\" [Ask What Prompted It]", bundle: 'pro' },
      ]
    },
  ],
  exploringatopic: [
    {
      name: "The Topic Runs Dry",
      guideFront: "What kind of moment is this?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Everyone has said their piece and the subject is out of air — the next thing is silence or an abrupt jump to something unrelated. The training is to spot the fade early and either squeeze one more layer out of it or step sideways into a close subtopic. Best handled with Build on Their Point and Expand to a Related Subtopic.\n\nWhat it usually looks like:\n• Answers get shorter and nobody asks anything back.\n• Someone says \"yeah, that's about it really.\"\n• A pause that is one second too long.\n\nTwo ways through:\n1. Build on Their Point — squeeze one more layer out. \"Was there anything you gave up on?\"\n2. Expand to a Related Subtopic — step sideways. \"Are they any good live?\"\n\nMindset: spot the fade early. Once the silence has landed, whatever you say next has to restart the whole thing.",
      inputs: [
        { q: "The group has covered everything about their holidays.", a: "\"Does anyone actually enjoy the travelling part, or just the arriving?\" (expand to a related subtopic)", bundle: 'pro' },
        { q: "The conversation about the album has nothing left in it.", a: "\"Are they any good live? I have never seen them.\" (expand to a related subtopic)", bundle: 'pro' },
        { q: "Someone says: \"Yeah, that is about it really.\" and it goes quiet.", a: "\"You said that is about it — was there a part you skipped?\" (build on their point)", bundle: 'pro' },
        { q: "The talk about running has covered routes, shoes and races.", a: "\"Does anyone do anything else — swimming, cycling?\" (expand to a related subtopic)", bundle: 'pro' },
        { q: "The topic is fading but nobody wants to leave it.", a: "\"Before we drop it — what got you all started on this?\" (ask an open question)", bundle: 'pro' },
      ]
    },
    {
      name: "A Topic You Know Nothing About",
      guideFront: "What kind of moment is this?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "The group is deep in something you have no knowledge of, and staying silent starts to look like boredom. The training is to see that knowledge is not the entry ticket — a question is a full contribution, and people enjoy explaining what they are into. Best handled with Ask an Open Question and Build on Their Point.\n\nWhat makes it hard:\n• Staying quiet starts to look like boredom.\n• Everyone else has shared history with the subject.\n• You cannot judge whether what they are saying is right.\n\nTwo ways through:\n1. Ask an Open Question — knowledge is not the entry ticket. \"How did you all get into it?\"\n2. Build on Their Point — use their own word back. \"You said it is the gearbox — is that the expensive bit?\"\n\nMindset: people enjoy explaining the thing they are into. The beginner's question is usually the most welcome one in the room.",
      inputs: [
        { q: "The table is deep in a sport you have never followed.", a: "\"How did you all get into it in the first place?\" (ask an open question)", bundle: 'pro' },
        { q: "Everyone is discussing a series you have not watched.", a: "\"What is it that keeps you watching?\" (ask an open question)", bundle: 'pro' },
        { q: "The group is talking about car engines and you are lost.", a: "\"You said it is the gearbox — is that the expensive bit?\" (build on their point)", bundle: 'pro' },
        { q: "They are comparing running shoes and you do not run.", a: "\"Does the shoe actually make that much difference?\" (ask an open question)", bundle: 'pro' },
        { q: "You have nothing to add about their industry.", a: "\"What is the part of that job nobody outside it understands?\" (ask an open question)", bundle: 'pro' },
      ]
    },
    {
      name: "Bringing In the Quiet One",
      guideFront: "What kind of moment is this?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "One person has not spoken for ten minutes, or one person has not stopped — either way the topic is only being shared by half the group. The training is to notice the imbalance and open a door, without putting anyone too much on the spot. Best handled with Share, Then Invite and Ask an Open Question.\n\nWhat it usually looks like:\n• One person has not spoken since the topic started.\n• Someone keeps starting to speak and getting cut off.\n• The same two people have had the whole conversation.\n\nTwo ways through:\n1. Share, Then Invite — use their name, and keep the question easy. \"Sara, do you cook at all?\"\n2. Ask an Open Question — reopen the door someone else closed. \"Tom, you were going to say something?\"\n\nMindset: keep the invitation small. A big question puts someone on the spot; an easy one just lets them back in.",
      inputs: [
        { q: "One person has said nothing since the topic started.", a: "\"That is my version. Sara, do you cook at all?\" (share, then invite)", bundle: 'pro' },
        { q: "Someone keeps starting to speak and getting cut off.", a: "\"Hang on — Tom, you were going to say something?\" (ask an open question)", bundle: 'pro' },
        { q: "One person has held the floor for several minutes.", a: "\"That is a good point. What do the rest of you think?\" (share, then invite)", bundle: 'pro' },
        { q: "You notice a friend nodding along but never joining in.", a: "\"You have been through this too, have you not? What was yours like?\" (ask an open question)", bundle: 'pro' },
        { q: "The same two people have had the whole conversation.", a: "\"We have been going on. Has anyone else got a horror story?\" (share, then invite)", bundle: 'pro' },
      ]
    },
    {
      name: "When It Drifts Off Topic",
      guideFront: "What kind of moment is this?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "The talk has jumped somewhere far away and the subject everyone was enjoying is gone. The training is to notice how far it has travelled and bring it back through a related angle, rather than announcing a change of subject. Best handled with Expand to a Related Subtopic and Build on Their Point.\n\nWhat it usually looks like:\n• A holiday story that has become a story about someone's boss.\n• Three jumps in two minutes.\n• The subject everyone was enjoying has quietly gone.\n\nTwo ways through:\n1. Expand to a Related Subtopic — come back in sideways. \"Did anyone else's tomatoes fail this year?\"\n2. Build on Their Point — pick the thread back up. \"Where were we, Portugal?\"\n\nMindset: steer, do not announce. \"Can we get back on topic\" makes everyone self-conscious; a related question just quietly works.",
      inputs: [
        { q: "The gardening talk has turned into a discussion about tax.", a: "\"Before we get lost — did anyone else's tomatoes fail this year?\" (expand to a related subtopic)", bundle: 'pro' },
        { q: "A story about a holiday has become a story about someone's boss.", a: "\"That is a whole other thing. Where were we, Portugal?\" (build on their point)", bundle: 'pro' },
        { q: "The music conversation drifted into phone contracts.", a: "\"That reminds me — does anyone still buy actual records?\" (expand to a related subtopic)", bundle: 'pro' },
        { q: "A food conversation has turned into complaints about parking.", a: "\"You mentioned the place by the station — is the food good there?\" (build on their point)", bundle: 'pro' },
        { q: "The topic has jumped three times in two minutes.", a: "\"Can we go back? You were saying something about the trip.\" (build on their point)", bundle: 'pro' },
      ]
    },
    {
      name: "When You Have Talked Too Much",
      guideFront: "What kind of moment is this?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "You look up and realise you have been holding the floor — three stories in a row, or every question answered by you. The training is to catch it yourself and hand the topic back rather than adding one more point. Best handled with Share, Then Invite and Ask an Open Question.\n\nWhat it usually looks like:\n• Two of your own stories in a row.\n• Every question answered by you.\n• Everyone has gone quiet while you explain.\n\nTwo ways through:\n1. Share, Then Invite — close your bit and pass it on. \"Anyway, that's mine. What does yours look like?\"\n2. Ask an Open Question — take yourself out of it entirely. \"What do you all think about it?\"\n\nMindset: noticing it yourself is the whole skill. One question puts the balance back, and nobody else has to say anything about it.",
      inputs: [
        { q: "You realise you have answered the last three questions yourself.", a: "\"I keep taking over. What is your take on it?\" (share, then invite)", bundle: 'pro' },
        { q: "You have told two stories in a row about the same subject.", a: "\"That is enough from me. Has anyone else had that happen?\" (share, then invite)", bundle: 'pro' },
        { q: "You notice everyone has gone quiet while you explain.", a: "\"Anyway, that is my version. What does yours look like?\" (share, then invite)", bundle: 'pro' },
        { q: "You have been describing your commute in detail.", a: "\"Enough about mine — how bad is yours?\" (share, then invite)", bundle: 'pro' },
        { q: "You catch yourself about to add a fourth point.", a: "\"Actually, what do you all think about it?\" (ask an open question)", bundle: 'pro' },
      ]
    },
  ],
  deepquestions: [
    {
      name: "Short Answers",
      guideFront: "What kind of moment is this?",
      guideBack: "A possible question, with the strategy in brackets.",
      description: "They reply in three words and hand you nothing back — no detail to build on. The training is to read it as a material problem rather than a rejection: go back to easy factual questions until something usable appears, then link to it. Best handled with Start with Simple Questions and Link and Go Deeper.\n\nWhat it usually sounds like:\n• \"Yeah, fine.\" and nothing after it.\n• One-word answers to everything you try.\n• \"It was alright I suppose.\"\n\nTwo ways through:\n1. Start with Simple Questions — go easier, not deeper. \"Okay, easier one — where did you grow up?\"\n2. Link and Go Deeper — use the one word they did give. \"You said alright — what would have made it good?\"\n\nMindset: read it as a material problem, not a rejection. Short answers usually mean they have not warmed up yet, not that they want you to stop.",
      inputs: [
        { q: "You ask how their weekend was and get: \"Yeah, fine.\"", a: "\"Did you get to do anything, or was it all admin?\" (start with simple questions)", bundle: 'pro' },
        { q: "They answer every question with one word.", a: "\"Okay, easier one — where did you grow up?\" (start with simple questions)", bundle: 'pro' },
        { q: "They say: \"It was alright I suppose.\" and stop.", a: "\"You said alright — what would have made it good?\" (link and go deeper)", bundle: 'pro' },
        { q: "A new colleague gives you almost nothing to work with.", a: "\"What were you doing before you came here?\" (start with simple questions)", bundle: 'pro' },
        { q: "They answer: \"Work. That is about it.\"", a: "\"You said that is about it — is work eating everything at the moment?\" (link and go deeper)", bundle: 'pro' },
      ]
    },
    {
      name: "It Feels Too Soon",
      guideFront: "What kind of moment is this?",
      guideBack: "A possible question, with the strategy in brackets.",
      description: "You want to ask something real, but you have known them four minutes and a big question would land as intrusive. The training is to notice you have not earned it yet and go one notch deeper instead of five. Best handled with Start with Simple Questions and Link and Go Deeper.\n\nWhat it usually looks like:\n• You have known them four minutes.\n• They mention something heavy in passing, very early.\n• You want to ask about family, health or money.\n\nTwo ways through:\n1. Start with Simple Questions — build the runway first. \"What made you come along tonight?\"\n2. Link and Go Deeper — go one notch deeper, not five. \"You said lately — is it a busy stretch?\"\n\nMindset: the question will still be there in ten minutes. Depth that arrives before trust does reads as prying, however kindly it is meant.",
      inputs: [
        { q: "You have just met and want to ask something meaningful.", a: "\"What made you come along tonight?\" (start with simple questions)", bundle: 'pro' },
        { q: "You are tempted to ask a stranger about their family.", a: "\"Have you lived around here long?\" (start with simple questions)", bundle: 'pro' },
        { q: "They mention a divorce in passing, five minutes in.", a: "\"You said you moved recently — how is the new place?\" (link and go deeper)", bundle: 'pro' },
        { q: "A colleague you barely know mentions being tired lately.", a: "\"You said lately — is it a busy stretch at work?\" (link and go deeper)", bundle: 'pro' },
        { q: "You want to ask a big values question but it is far too early.", a: "\"What do you do when you are not at things like this?\" (start with simple questions)", bundle: 'pro' },
      ]
    },
    {
      name: "A Sensitive Area",
      guideFront: "What kind of moment is this?",
      guideBack: "A possible question, with the strategy in brackets.",
      description: "They open a door onto something painful or private, and your next question decides whether they feel safe. The training is to let them set the depth — ask what it was like rather than for details, or step back to something lighter. Best handled with Explore Experiences and Start with Simple Questions.\n\nWhat it usually sounds like:\n• An illness, a death or a rift mentioned in passing.\n• \"It's been a strange year, honestly.\"\n• They touch on something and then change the subject.\n\nTwo ways through:\n1. Explore Experiences — ask what it was like, not for details. \"What was that time like for you?\"\n2. Start with Simple Questions — take the exit they offered. \"Fair enough. What were you saying about the new job?\"\n\nMindset: let them set the depth. Asking what something was like leaves them free to answer in one sentence or twenty.",
      inputs: [
        { q: "They mention: \"That was around the time my mum was ill.\"", a: "\"That is a lot at once — what was that time like for you?\" (explore experiences)", bundle: 'pro' },
        { q: "They say: \"I do not really speak to my brother anymore.\"", a: "\"How long has that been the way of things?\" (explore experiences)", bundle: 'pro' },
        { q: "They mention losing a job and go quiet.", a: "\"Sounds like a rough stretch. What are you doing now?\" (start with simple questions)", bundle: 'pro' },
        { q: "They say: \"It has been a strange year, honestly.\"", a: "\"You said strange — good strange or hard strange?\" (link and go deeper)", bundle: 'pro' },
        { q: "They touch on their health and then change the subject.", a: "\"Fair enough. What were you saying about the new job?\" (start with simple questions)", bundle: 'pro' },
      ]
    },
    {
      name: "It Feels Like an Interview",
      guideFront: "What kind of moment is this?",
      guideBack: "A possible question, with the strategy in brackets.",
      description: "You have asked four questions in a row and it has turned into a questionnaire — they answer, you fire again. The training is to hear the rhythm and fix it with linking, so the next question clearly comes out of what they just said instead of off a list in your head. Best handled with Link and Go Deeper and Explore Experiences.\n\nWhat it usually sounds like:\n• Four questions in a row with no reaction from you.\n• They answer, you immediately fire the next one.\n• They start giving shorter answers and look slightly cornered.\n\nTwo ways through:\n1. Link and Go Deeper — make the question come out of their answer. \"You said you did it for years — what kept you there?\"\n2. Explore Experiences — react first, then ask. \"That one surprised me — what was the reaction at home?\"\n\nMindset: what makes it an interview is not the number of questions, it is that none of them came from the answers.",
      inputs: [
        { q: "You have asked four questions in a row with no reaction from you.", a: "\"You said you did it for years — what kept you there?\" (link and go deeper)", bundle: 'pro' },
        { q: "Your questions are starting to feel like a list.", a: "\"Wait, go back — the boat thing. How did that start?\" (link and go deeper)", bundle: 'pro' },
        { q: "They give short answers and look slightly cornered.", a: "\"Sorry, I am firing questions. What was the trip like, though?\" (explore experiences)", bundle: 'pro' },
        { q: "You realise you have not reacted to a single answer yet.", a: "\"That one surprised me — what was the reaction at home?\" (explore experiences)", bundle: 'pro' },
        { q: "It has become question, answer, next question.", a: "\"You mentioned the village earlier — what pulled you away from it?\" (link and go deeper)", bundle: 'pro' },
      ]
    },
    {
      name: "You Have Run Out of Questions",
      guideFront: "What kind of moment is this?",
      guideBack: "A possible question, with the strategy in brackets.",
      description: "The obvious questions are used up and your head is empty. The training is to stop hunting for a new subject and mine what they already told you — pick any detail from earlier and open it up. Best handled with Link and Go Deeper and Explore Values.\n\nWhat it usually looks like:\n• Work, home and the weekend are all covered.\n• A pause where neither of you speaks.\n• You start hunting for a brand new subject.\n\nTwo ways through:\n1. Link and Go Deeper — mine something from earlier. \"Earlier you said you had just moved — what made you pick here?\"\n2. Explore Values — go wide instead of new. \"What is the part of your week you actually look forward to?\"\n\nMindset: you do not need a new topic, you need one word from the last twenty minutes. They have already given you more material than you used.",
      inputs: [
        { q: "You have covered work, home and the weekend and have nothing left.", a: "\"Earlier you said you had just moved — what made you pick here?\" (link and go deeper)", bundle: 'pro' },
        { q: "The conversation goes quiet and your mind is blank.", a: "\"What is the part of your week you actually look forward to?\" (explore values)", bundle: 'pro' },
        { q: "You have asked everything obvious about their job.", a: "\"You said you fell into it — what would you do instead?\" (link and go deeper)", bundle: 'pro' },
        { q: "They finish an answer and neither of you speaks.", a: "\"What matters most to you outside all of that?\" (explore values)", bundle: 'pro' },
        { q: "You are stuck for anything to ask next.", a: "\"You mentioned your brother earlier — what is he like?\" (link and go deeper)", bundle: 'pro' },
      ]
    },
  ],
  howtointerrupt: [
    {
      name: "There Is No Pause",
      guideFront: "What makes this one hard to get into?",
      guideBack: "A possible line, with the strategy in brackets.",
      description: "They have been talking for minutes without leaving a single gap, and every time you draw breath they carry on.\n\nThe training is to notice when waiting has stopped being patience. Past a certain point the pause is not coming, and continuing to wait is not politeness — it is just not speaking.\n\nWhat it usually looks like:\n• Four minutes with no full stop you could use.\n• You start to speak and they keep going.\n• Everyone else has given up trying too.\n\nTwo ways through:\n1. Signal the Interruption — make the gap yourself, warmly. \"Sorry — can I jump in?\"\n2. Say Why It Matters — and justify it in the same breath. \"We've got four minutes and this decides it.\"\n\nMindset: making your own gap is a legitimate move, not a failure of manners. What makes it rude is doing it without a signal or a reason, not doing it at all.",
      inputs: [
        { q: "Four minutes and not one usable full stop.", a: "\"Sorry — can I jump in for a second?\" (signal the interruption)", bundle: 'pro' },
        { q: "You start to speak twice and they carry straight on.", a: "\"Hang on, hang on — one thing.\" (signal the interruption)", bundle: 'pro' },
        { q: "The meeting is running out and the decision has not been made.", a: "\"I have to stop you — we've got four minutes and this is the bit that matters.\" (say why it matters)", bundle: 'pro' },
        { q: "Everyone else has stopped trying to get in.", a: "\"Sorry, can I come in? I think a few of us have things to add.\" (signal the interruption)", bundle: 'pro' },
        { q: "You are on a call and there is no visual way to signal.", a: "\"Sorry to cut across — can I add something?\" (signal the interruption)", bundle: 'pro' },
      ]
    },
    {
      name: "It Cannot Wait",
      guideFront: "What makes this one hard to get into?",
      guideBack: "A possible line, with the strategy in brackets.",
      description: "Something is about to be decided wrongly, or the time is about to run out, and waiting politely means the moment is gone.\n\nThe training is to let the urgency carry the interruption rather than apologising your way in. A stated reason does more than three sorries.\n\nWhat it usually looks like:\n• A decision forming on a wrong assumption.\n• Two minutes left and the real question untouched.\n• Someone about to redo work that is already done.\n\nTwo ways through:\n1. Say Why It Matters — lead with the reason, not the apology. \"Let me stop you before you build on that.\"\n2. Signal the Interruption — one cue, then straight to it. \"Sorry — important one.\"\n\nMindset: an interruption that saves everyone ten minutes is a favour. Sitting on it to be polite is the more expensive choice.",
      inputs: [
        { q: "A decision is forming on a fact that has changed.", a: "\"Let me stop you before you build on that — the numbers came back different.\" (say why it matters)", bundle: 'pro' },
        { q: "Two minutes left and the real question has not been asked.", a: "\"Sorry to cut in — we haven't touched the thing we came for.\" (say why it matters)", bundle: 'pro' },
        { q: "Someone is about to redo work that is already finished.", a: "\"Hate to interrupt, but that's already been done.\" (say why it matters)", bundle: 'pro' },
        { q: "You have to leave soon and have something to contribute.", a: "\"Jumping in because I have to go in ten — can I say one thing?\" (say why it matters)", bundle: 'pro' },
        { q: "You need in fast and there is no time for a full run-up.", a: "\"Sorry — important one.\" (signal the interruption)", bundle: 'pro' },
      ]
    },
    {
      name: "You Have to Correct Something",
      guideFront: "What makes this one hard to get into?",
      guideBack: "A possible line, with the strategy in brackets.",
      description: "They are wrong about a fact, and the longer they build on it the more awkward the correction becomes.\n\nThe training is to correct the fact without it landing as a correction of the person. The acknowledgement before it is what does that, and it costs one clause.\n\nWhat it usually looks like:\n• A wrong date, number or name being built on.\n• A whole plan resting on it.\n• Everyone else visibly noticing and saying nothing.\n\nTwo ways through:\n1. Acknowledge the Speaker First — grant what is right before you touch what is not. \"Everything up to the timeline I'm with you on.\"\n2. Say Why It Matters — frame it as saving them, not catching them. \"I'm stopping you so you don't build on it.\"\n\nMindset: correct early and it is information; correct late and it is an embarrassment. The kind thing is to interrupt sooner.",
      inputs: [
        { q: "A plan is being built on a date that has moved.", a: "\"Everything up to the timeline I'm with you on — but the date moved.\" (acknowledge the speaker first)", bundle: 'pro' },
        { q: "Someone has a name or a number wrong and keeps using it.", a: "\"Sorry — small thing, it's actually the March figure. Carry on.\" (say why it matters)", bundle: 'pro' },
        { q: "The wrong assumption is about to become a decision.", a: "\"Let me stop you before you build on that.\" (say why it matters)", bundle: 'pro' },
        { q: "You need to correct someone senior without it landing badly.", a: "\"You've clearly thought this through. One thing on the numbers though.\" (acknowledge the speaker first)", bundle: 'pro' },
        { q: "Everyone has noticed the error and nobody has said anything.", a: "\"Can I check one thing before we go further?\" (signal the interruption)", bundle: 'pro' },
      ]
    },
    {
      name: "Interrupting Someone Senior",
      guideFront: "What makes this one hard to get into?",
      guideBack: "A possible line, with the strategy in brackets.",
      description: "The person talking has more standing than you, and a cut-in that would be nothing between peers feels risky here.\n\nThe training is to notice that the risk is mostly in the delivery, not in the act. A signalled, reasoned interruption from a junior person reads as engagement; an unsignalled one reads as overstepping.\n\nWhat makes it hard:\n• The power gap makes any interruption feel like a challenge.\n• Nobody else is interrupting, so you would be first.\n• You would rather lose the point than take the risk.\n\nTwo ways through:\n1. Wait for a Natural Pause — the safest version, and usually available. \"Can I come in on that?\"\n2. Acknowledge the Speaker First — lead with their point, not yours. \"That's the part I'd want to build on.\"\n\nMindset: staying silent has a cost too. Interrupting well is one of the clearest ways to look like someone who is actually in the conversation.",
      inputs: [
        { q: "Your manager is mid-explanation and you have a real objection.", a: "(at the full stop) \"Can I come in on that?\" (wait for a natural pause)", bundle: 'pro' },
        { q: "You want to add something without it reading as a challenge.", a: "\"That's the part I'd want to build on, actually.\" (acknowledge the speaker first)", bundle: 'pro' },
        { q: "Nobody else in the room has interrupted and you would be first.", a: "\"Sorry — may I add something here?\" (signal the interruption)", bundle: 'pro' },
        { q: "You have information they do not and it changes the picture.", a: "\"I only stop you because I've got something that changes this.\" (say why it matters)", bundle: 'pro' },
        { q: "You would rather drop your point than take the risk.", a: "(at the next pause) \"One thing I could add there, if it helps.\" (wait for a natural pause)", bundle: 'pro' },
      ]
    },
    {
      name: "You Have Already Interrupted Once",
      guideFront: "What makes this one hard to get into?",
      guideBack: "A possible line, with the strategy in brackets.",
      description: "You cut in five minutes ago, and a second one starts to look like a pattern rather than a moment.\n\nThe training is to notice the count. The second interruption is judged much more harshly than the first, so it needs either a better reason or a lighter touch.\n\nWhat it usually looks like:\n• You are aware of it before you have opened your mouth.\n• A flicker of impatience the last time you did it.\n• You are the only one who has interrupted at all.\n\nTwo ways through:\n1. Use Humour — name it yourself before anyone else does. \"Me again. I'm aware of it.\"\n2. Wait for a Natural Pause — earn this one by waiting properly for it.\n\nMindset: naming your own pattern buys you a great deal of goodwill. Pretending you have not noticed is what makes people count.",
      inputs: [
        { q: "You are about to interrupt for the second time in five minutes.", a: "\"Me again. I'm aware of it.\" (use humour)", bundle: 'pro' },
        { q: "You noticed a flicker of impatience the last time you cut in.", a: "(wait for the full stop) \"Sorry — one more from me.\" (wait for a natural pause)", bundle: 'pro' },
        { q: "You are the only person in the room who has interrupted.", a: "\"I've done this twice now, so I'll be quick.\" (use humour)", bundle: 'pro' },
        { q: "Your second point is genuinely more important than the first.", a: "\"I know, twice — but this one actually changes the plan.\" (say why it matters)", bundle: 'pro' },
        { q: "You realise mid-sentence that you have cut across someone again.", a: "\"And I've done it again. Sorry — go on.\" (use humour)", bundle: 'pro' },
      ]
    },
  ],
  handleinterruptions: [
    {
      name: "The Serial Interrupter",
      guideFront: "What kind of interruption is this?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "One person who keeps cutting you off — again and again, sometimes finishing your sentences. The training is to recognise the pattern (it's not a one-off) and meet it with a calm, repeatable boundary, handing them a turn afterwards so it stays friendly. Best handled with Reinforce the Boundary and Invite Them In After.\n\nWhat it usually looks like:\n• The same person, three or four times in one conversation.\n• They finish your sentences for you.\n• You have started shortening what you say just to get it in.\n\nTwo ways through:\n1. Reinforce the Boundary — name the pattern calmly. \"That's twice now. Let me get to the end.\"\n2. Invite Them In After — give them the turn they clearly want. \"You're next, one sec.\"\n\nMindset: it is a pattern, not an accident, so a one-off response will not fix it. Most serial interrupters are not hostile — they simply have not noticed.",
      inputs: [
        { q: "The same colleague has now cut you off three times in one meeting.", a: "\"I'd really like to finish one point without a break — then it's yours.\" (reinforce the boundary)", bundle: 'pro' },
        { q: "A friend interrupts every couple of sentences as you talk.", a: "\"Tell you what — let me get through this, and I'll hand straight over.\" (invite them in after)", bundle: 'pro' },
        { q: "One person keeps finishing your sentences for you.", a: "\"Close, but let me say it my way — I'm nearly there.\" (acknowledge and continue)", bundle: 'pro' },
        { q: "Someone jumps in the instant you pause for breath.", a: "\"That pause wasn't the end — give me one more line.\" (reinforce the boundary)", bundle: 'pro' },
        { q: "The same person talks over you again after you asked them to wait.", a: "\"I did mean it about finishing — thirty seconds, then you're up.\" (reinforce the boundary)", bundle: 'pro' },
      ]
    },
    {
      name: "Interrupted by Enthusiasm",
      guideFront: "What kind of interruption is this?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "The cut-in comes from excitement, not rudeness — they agree, they relate, they're keen. The training is to notice it's well-meant and keep it warm: acknowledge the energy and hold your line lightly, or promise them the next turn. Best handled with Acknowledge and Continue, Invite Them In After, and Use Humour.\n\nWhat it usually looks like:\n• They agree loudly before you have finished the sentence.\n• They relate it to their own thing straight away.\n• The energy is up and nobody means any harm.\n\nTwo ways through:\n1. Acknowledge and Continue — meet the energy and keep going. \"Yes, exactly — and the other half of it is…\"\n2. Use Humour — hold the floor without cooling the room. \"I'm just getting to the good part!\"\n\nMindset: do not treat warmth as rudeness. Coming down hard on an enthusiastic cut-in costs you more than the interrupted sentence was worth.",
      inputs: [
        { q: "A friend cuts in, thrilled: \"Oh that happened to me too!\"", a: "\"Love it — hold that, I want to hear it the second I'm done.\" (invite them in after)", bundle: 'pro' },
        { q: "Someone jumps in agreeing loudly before you finish.", a: "\"Right? Let me land the point, then pile on with me.\" (acknowledge and continue)", bundle: 'pro' },
        { q: "A teammate excitedly finishes your idea for you.", a: "\"Ha, exactly — let me just say the rest my way.\" (use humour)", bundle: 'pro' },
        { q: "Someone interrupts to add an eager \"yes, and—\".", a: "\"Save the 'and' one sec — I'm nearly at it.\" (invite them in after)", bundle: 'pro' },
        { q: "A friend keeps bursting in because they're loving the story.", a: "\"You're going to love the ending — let me get us there!\" (use humour)", bundle: 'pro' },
      ]
    },
    {
      name: "Talked Over in a Group",
      guideFront: "What kind of interruption is this?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Not one interrupter but several — crosstalk buries your point before you finish, and the group moves on. The training is to spot that the room, not one person, is the obstacle, and either hold the floor firmly or let it go and reclaim your thread when a gap opens. Best handled with Reinforce the Boundary and Let It Go and Reclaim.\n\nWhat it usually looks like:\n• Two or three people talking at once.\n• Your point gets buried and the group moves on.\n• Nobody notices that you stopped.\n\nTwo ways through:\n1. Reinforce the Boundary — claim the floor plainly. \"Hang on — I'd like to finish that thought.\"\n2. Let It Go and Reclaim — wait for the gap, then come back. \"Going back a step — the thing about the timeline.\"\n\nMindset: the room is the obstacle, not one person, so there is nobody to take it up with. Volume rarely helps; a short pause and a plain claim usually does.",
      inputs: [
        { q: "Three people are talking and your point keeps getting buried.", a: "\"Can I jump back in? I didn't get to finish earlier.\" (let it go and reclaim)", bundle: 'pro' },
        { q: "The group moved on before you completed your idea.", a: "\"Quick rewind — I still want to land what I started.\" (let it go and reclaim)", bundle: 'pro' },
        { q: "You start to speak and two louder voices roll over you.", a: "\"Hold on — let me finish this one, it won't take long.\" (reinforce the boundary)", bundle: 'pro' },
        { q: "Your contribution got lost in the crosstalk.", a: "\"One thing before we move on — I hadn't finished my point.\" (let it go and reclaim)", bundle: 'pro' },
        { q: "Every time you start, someone else grabs the floor.", a: "\"Let me actually get a full sentence out — then it's open.\" (reinforce the boundary)", bundle: 'pro' },
      ]
    },
    {
      name: "Interrupted by Someone Senior",
      guideFront: "What kind of interruption is this?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "A boss, teacher, or elder cuts in — and the power gap makes a hard boundary feel risky. The training is to hold your point respectfully rather than back down: acknowledge them, ask to finish, or let it pass and reclaim, all without heat. Best handled with Acknowledge and Continue and Let It Go and Reclaim.\n\nWhat makes it hard:\n• The power gap makes a firm boundary feel risky.\n• Backing down every time teaches them to keep doing it.\n• Everyone else in the room is watching how you take it.\n\nTwo ways through:\n1. Acknowledge and Continue — hold your point respectfully. \"Absolutely — and the bit I hadn't got to is…\"\n2. Let It Go and Reclaim — give way, then return once it settles. \"Coming back to the earlier point, if that's alright.\"\n\nMindset: respectfully holding your point is not insubordination. Asking to finish, calmly and without heat, reads as confidence rather than challenge.",
      inputs: [
        { q: "Your manager cuts in before you finish presenting.", a: "\"Absolutely — let me just complete this part so it's clear.\" (acknowledge and continue)", bundle: 'pro' },
        { q: "A senior colleague talks over your suggestion.", a: "\"I'll fold that in — can I finish the thought first?\" (acknowledge and continue)", bundle: 'pro' },
        { q: "Someone more senior redirects before you're done.", a: "\"Happy to go there — one moment to close this off.\" (acknowledge and continue)", bundle: 'pro' },
        { q: "Your boss jumps in and the room defers to them.", a: "\"…circling back, the point I was making was —\" (let it go and reclaim)", bundle: 'pro' },
        { q: "A senior person interrupts with a correction.", a: "\"Good catch — let me finish the main point, then the detail.\" (acknowledge and continue)", bundle: 'pro' },
      ]
    },
    {
      name: "Interrupted and Derailed",
      guideFront: "What kind of interruption is this?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "The cut-in doesn't just stop you — it changes the subject, and your point never comes back on its own. The training is to notice the topic has been hijacked and steer back to your unfinished thread, firmly if needed. Best handled with Let It Go and Reclaim and Reinforce the Boundary.\n\nWhat it usually looks like:\n• The cut-in changes the subject entirely.\n• Ten minutes later your point still has not come back.\n• Nobody remembers you were mid-sentence, including you.\n\nTwo ways through:\n1. Let It Go and Reclaim — wait for the lull, then steer back. \"Before we move on — I hadn't finished the thing about costs.\"\n2. Reinforce the Boundary — stop the drift as it happens. \"Can we come back to that? I was still on the first bit.\"\n\nMindset: a derailed point never returns on its own. If you do not bring it back it is gone — and it was probably the reason you spoke up.",
      inputs: [
        { q: "Someone interrupts and the whole topic shifts away from your point.", a: "\"Before we lose it — I hadn't finished what I was saying.\" (let it go and reclaim)", bundle: 'pro' },
        { q: "A cut-in sends the conversation off on a tangent.", a: "\"Let me pull us back for one sec — my point still stands.\" (let it go and reclaim)", bundle: 'pro' },
        { q: "They interrupt with an unrelated question and never come back.", a: "\"Happy to answer — right after I finish this thought.\" (reinforce the boundary)", bundle: 'pro' },
        { q: "Your idea gets abandoned after someone jumps in.", a: "\"Let me resurface that — I think it's still the key thing.\" (let it go and reclaim)", bundle: 'pro' },
        { q: "An interruption changes the subject completely.", a: "\"Quick one — can we finish my point before we switch?\" (reinforce the boundary)", bundle: 'pro' },
      ]
    },
  ],
  validation: [
    {
      name: "You Think They Are Wrong",
      guideFront: "What makes this one hard to validate?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "They are upset about something you think they have misread, and validating feels like signing up to a version of events you do not accept.\n\nThe training is to notice that none of the three moves actually commits you to anything. A feeling is true whether or not the belief behind it is, and a route can be reasonable even when it ends somewhere you would not have gone.\n\nWhat it usually looks like:\n• They are angry at someone you think did nothing wrong.\n• Their account leaves out something that changes it.\n• You can already see the part they have got backwards.\n\nTwo ways through:\n1. Reflect the Feeling — the feeling is a fact regardless. \"That sounds like it really got to you.\"\n2. Acknowledge the Perspective — validate the route, not the destination. \"With what you knew, I can see how you got there.\"\n\nMindset: validation is about acknowledging, not agreeing. You can say all of this honestly and then say what you think, and it will land far better for having come second.",
      inputs: [
        { q: "They are furious with someone you think did nothing wrong.", a: "\"That clearly landed badly. I can hear how much it's annoyed you.\" (reflect the feeling)", bundle: 'pro' },
        { q: "Their account leaves out something that changes the picture.", a: "\"From where you're sitting, that makes sense.\" (acknowledge the perspective)", bundle: 'pro' },
        { q: "You can see the part they have got backwards.", a: "\"With what you knew at the time, that's the obvious read.\" (acknowledge the perspective)", bundle: 'pro' },
        { q: "You want to correct the facts before anything else.", a: "\"That sounds genuinely frustrating. Can I ask about one bit of it?\" (reflect the feeling)", bundle: 'pro' },
        { q: "They ask outright whether you agree.", a: "\"I see it a bit differently. But I can see exactly how you got there.\" (acknowledge the perspective)", bundle: 'pro' },
      ]
    },
    {
      name: "It Sounds Like Agreement",
      guideFront: "What makes this one hard to validate?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "You validated somebody and they took it as taking their side, which was not what you meant and is now awkward to walk back.\n\nThe training is to be specific about what you are validating. Vague warmth reads as endorsement; naming the object — the feeling, the reaction, the reasoning — makes the boundary clear without any coldness.\n\nWhat it usually looks like:\n• \"Exactly! You see it too!\" when you do not.\n• Your validation quoted back to somebody else as support.\n• A dispute where both sides now think you are with them.\n\nTwo ways through:\n1. Reflect the Feeling, specifically — put the feeling in the sentence. \"I can see why that upset you\" rather than \"that's terrible\".\n2. Acknowledge the Perspective, specifically — \"I can see your reasoning\" rather than \"you're right\".\n\nMindset: name the object. \"That's completely understandable\" is ambiguous; \"your frustration is completely understandable\" is not, and it is no less warm.",
      inputs: [
        { q: "They say: \"Exactly! So you agree she was out of line?\"", a: "\"I can see why it upset you. I don't know enough about her side to judge it.\" (reflect the feeling)", bundle: 'pro' },
        { q: "Your validation gets quoted to somebody else as support.", a: "\"What I said was that your reasoning made sense, and it does.\" (acknowledge the perspective)", bundle: 'pro' },
        { q: "You are about to say something vague and warm.", a: "\"Your frustration is completely understandable.\" (reflect the feeling)", bundle: 'pro' },
        { q: "Both people in a dispute think you are on their side.", a: "\"I think both of you had fair reasons. That's not me dodging it.\" (acknowledge the perspective)", bundle: 'pro' },
        { q: "They are building your comment into a case.", a: "\"I meant the feeling, not the verdict. Those are different.\" (reflect the feeling)", bundle: 'pro' },
      ]
    },
    {
      name: "You Are Asked to Pick a Side",
      guideFront: "What makes this one hard to validate?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Two people you both know are in conflict, and each of them wants your validation to mean the other one was wrong.\n\nThe training is that validating both is not a contradiction. Two people can each have had entirely reasonable reactions to the same event, and saying so to both is honest rather than evasive.\n\nWhat it usually looks like:\n• Both of them telling you the story separately.\n• \"You can see what I mean, though, right?\"\n• A pull to agree with whoever is in front of you.\n\nTwo ways through:\n1. Acknowledge the Perspective — the move that scales to two people. \"I can see how you both got where you got.\"\n2. Normalise the Reaction — also symmetrical. \"Anyone would have found that frustrating.\"\n\nMindset: validating both is not fence-sitting. It is the accurate answer most of the time, and pretending otherwise to whoever is in the room costs you both friendships eventually.",
      inputs: [
        { q: "They ask: \"You can see what I mean, though, right?\"", a: "\"I can see how you got there, honestly. Both of you had a fair read.\" (acknowledge the perspective)", bundle: 'pro' },
        { q: "Both of them have told you the story separately.", a: "\"You'd both be annoyed in the other's position. That's the frustrating part.\" (normalise the reaction)", bundle: 'pro' },
        { q: "You feel the pull to agree with whoever is in front of you.", a: "\"Your reasoning holds up. I'd say the same about hers, for what it's worth.\" (acknowledge the perspective)", bundle: 'pro' },
        { q: "They push you for a verdict on the other person.", a: "\"I'm not going to referee it. What you felt was completely reasonable, though.\" (reflect the feeling)", bundle: 'pro' },
        { q: "They say: \"So you're on her side.\"", a: "\"I'm not on a side. I think you were both reacting in ways that make sense.\" (acknowledge the perspective)", bundle: 'pro' },
      ]
    },
    {
      name: "It Comes Out as a Platitude",
      guideFront: "What makes this one hard to validate?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "You said something validating and it landed as a greetings card — \"everything happens for a reason\", \"at least you tried\".\n\nThe training is specificity. A platitude is validation with the details removed, and the details are the entire proof that you were listening rather than reaching for a phrase.\n\nWhat it usually sounds like:\n• \"Everything happens for a reason.\"\n• \"At least you learned something.\"\n• \"That's just how it goes sometimes.\"\n\nTwo ways through:\n1. Reflect the Feeling, with the specifics in it — \"A whole week of dreading it. That's exhausting.\"\n2. Acknowledge the Perspective, with the specifics in it — \"You had a deadline that day. Waiting would have cost more.\"\n\nMindset: the detail is the validation. Anything you could have said before they finished talking is not going to land, however kindly it is meant.",
      inputs: [
        { q: "You are about to say \"everything happens for a reason\".", a: "\"A whole week of dreading it. That's exhausting on its own.\" (reflect the feeling)", bundle: 'pro' },
        { q: "You catch yourself reaching for \"at least you tried\".", a: "\"You went for it with no guarantee. That took something.\" (acknowledge the perspective)", bundle: 'pro' },
        { q: "Your response could have been said to anyone.", a: "\"The bit that would get me is finding out from the client.\" (reflect the feeling)", bundle: 'pro' },
        { q: "They visibly deflate after something you said.", a: "\"Sorry, that was a bit generic. What actually happened with the meeting?\" (reflect the feeling)", bundle: 'pro' },
        { q: "You do not know the details well enough to be specific.", a: "\"Tell me the part that's bothering you most and I'll shut up.\" (reflect the feeling)", bundle: 'pro' },
      ]
    },
    {
      name: "They Will Not Accept It",
      guideFront: "What makes this one hard to validate?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "You validated them and got \"you don't understand\" or \"don't patronise me\" back.\n\nThe training is to take the correction rather than repeat the validation harder. A rejected validation usually means you named the wrong object — the feeling when it was the reasoning, or the reaction when it was the situation.\n\nWhat it usually sounds like:\n• \"You don't get it.\"\n• \"Don't just tell me it's fine.\"\n• \"You're only saying that.\"\n\nTwo ways through:\n1. Ask what you got wrong — drop the technique and hand it over. \"What am I missing?\"\n2. Acknowledge the Perspective — often the one that was needed and not given. \"What would you want me to see?\"\n\nMindset: a rejected validation is information, not a failure. Saying it again more warmly is the one response guaranteed not to work.",
      inputs: [
        { q: "They say: \"You don't understand.\"", a: "\"Probably not. What am I missing?\" (ask what you got wrong)", bundle: 'pro' },
        { q: "They say: \"Don't just tell me it's fine.\"", a: "\"Fair. I'm not trying to smooth it over — what's the actual problem with it?\" (ask what you got wrong)", bundle: 'pro' },
        { q: "They say: \"You're only saying that.\"", a: "\"What would you want me to see here?\" (acknowledge the perspective)", bundle: 'pro' },
        { q: "Your reflection of the feeling landed wrong.", a: "\"Wrong word, maybe. What would you call it?\" (ask what you got wrong)", bundle: 'pro' },
        { q: "They brush off a normalising line.", a: "\"Okay. I don't think you're overreacting, but I'll stop saying so.\" (ask what you got wrong)", bundle: 'pro' },
      ]
    },
  ],
  supportingconversations: [
    {
      name: "You Gave Advice They Did Not Want",
      guideFront: "What makes supporting them hard here?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "You offered a solution and something went flat. They said \"yeah, maybe\" and changed the subject, or got slightly short with you.\n\nThe instinct is to explain the suggestion better, which makes it worse. What has happened is that a person who wanted their experience recognised got a problem-solving response, and the effect is to feel unheard by someone who was trying to help.\n\nNaming it is the fastest repair, and it costs nothing.\n\nMindset: stop advising, name it lightly, and go back to acknowledgement.",
      inputs: [
        { q: "You suggested something and they went quiet.", a: "\"I've jumped to fixing it. Do you actually want ideas?\" [Work Out What They Need]", bundle: 'pro' },
        { q: "They said \"yeah, maybe\" and moved on.", a: "\"Ignore all that. It sounds genuinely hard.\" [Respond With Validation]", bundle: 'pro' },
        { q: "You are about to explain your suggestion better.", a: "\"Forget the suggestion. Tell me the rest.\" [Just Listen]", bundle: 'pro' },
        { q: "They seem irritated by your helpfulness.", a: "\"I'm doing the thing where I solve instead of listen. Sorry.\" [Work Out What They Need]", bundle: 'pro' },
        { q: "You have offered three ideas and none has landed.", a: "\"What would actually help? I'm clearly guessing badly.\" [Work Out What They Need]", bundle: 'pro' },
      ]
    },
    {
      name: "They Say They Are Fine",
      guideFront: "What makes supporting them hard here?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "You have asked and been told everything is fine, and it visibly is not. Pushing feels intrusive; accepting it feels like abandoning them.\n\nThe move is to leave the door open without walking through it. Say what you noticed, say the offer stands, and then let it go. People often come back an hour or a week later, and they only do that if the first attempt did not feel like pressure.\n\nMindset: one gentle attempt, then leave a door. Two attempts is pressure.",
      inputs: [
        { q: "They say \"I'm fine\" and clearly are not.", a: "\"Fair enough. The offer stands if that changes.\" [Respond With Validation]", bundle: 'pro' },
        { q: "You want to say what you noticed without pressing.", a: "\"You've seemed a bit somewhere else this week. That's all I'll say.\" [Work Out What They Need]", bundle: 'pro' },
        { q: "They deflect with a joke.", a: "\"Alright. I'm around Thursday if you fancy a coffee.\" [Respond With a Suggestion]", bundle: 'pro' },
        { q: "You are about to ask a second time.", a: "(leave it — and follow up in a few days) [Just Listen]", bundle: 'pro' },
        { q: "They come back to you a week later.", a: "\"I'm glad you said. Tell me properly.\" [Just Listen]", bundle: 'pro' },
      ]
    },
    {
      name: "You Think They Are Wrong",
      guideFront: "What makes supporting them hard here?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "They are upset about something where, from what you can tell, they were the one at fault. Validating feels like collusion; disagreeing feels like kicking someone who is down.\n\nThe distinction that solves it: you can validate the feeling without endorsing the account. \"That sounds like a horrible afternoon\" is true regardless of who caused it, and it costs you nothing.\n\nWhether to say the harder thing depends entirely on whether they ask. If they do, one honest sentence — after acknowledgement, not instead of it.\n\nMindset: validate the feeling, hold your view on the facts, and wait to be asked.",
      inputs: [
        { q: "They are upset and you think they caused it.", a: "\"That sounds like a rotten afternoon, whatever else.\" [Respond With Validation]", bundle: 'pro' },
        { q: "You are about to correct their account of events.", a: "\"Tell me the rest first.\" [Just Listen]", bundle: 'pro' },
        { q: "They ask whether they were in the wrong.", a: "\"Do you want honest, or do you want me on your side? Both are fine.\" [Work Out What They Need]", bundle: 'pro' },
        { q: "They have asked for honesty and you have one thing to say.", a: "\"The message at eleven at night is the bit I'd have done differently. Nothing else.\" [Respond With a Suggestion]", bundle: 'pro' },
        { q: "They are clearly not ready to hear it.", a: "\"Let's leave that for another day. How are you doing now?\" [Respond With Validation]", bundle: 'pro' },
      ]
    },
    {
      name: "You Have Nothing to Say",
      guideFront: "What makes supporting them hard here?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Something genuinely awful has happened and no response you can think of seems adequate. Everything sounds either trite or clumsy, so people often say nothing at all — or, worse, avoid the person.\n\nAdequacy is the wrong target. Nobody expects the right words for a bereavement or a diagnosis. What people remember is who turned up and who did not, and \"I don't know what to say\" is a complete and honest sentence.\n\nMindset: presence beats phrasing. Say the awkward true thing and stay.",
      inputs: [
        { q: "Something terrible has happened and you cannot find any words.", a: "\"I don't know what to say. I'm so sorry.\" [Respond With Validation]", bundle: 'pro' },
        { q: "You are worried anything you say will be trite.", a: "\"There's nothing useful I can say. I'm here, though.\" [Just Listen]", bundle: 'pro' },
        { q: "You are tempted to avoid them because it is awkward.", a: "\"I've been putting off messaging because I didn't know what to write. I'm thinking of you.\" [Respond With Validation]", bundle: 'pro' },
        { q: "They are crying and you feel useless.", a: "(stay, say nothing) [Just Listen]", bundle: 'pro' },
        { q: "You want to offer something concrete rather than words.", a: "\"Can I bring food round on Thursday? You don't have to talk to me.\" [Respond With a Suggestion]", bundle: 'pro' },
      ]
    },
    {
      name: "It Is Beyond You",
      guideFront: "What makes supporting them hard here?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Sometimes what someone shares is bigger than a conversation between friends — sustained distress, something frightening, something that has been going on for a long time.\n\nTwo things matter here. Do not try to diagnose or treat it; you are not equipped and it is not what the moment needs. And do not let that stop you responding at all — listening, saying it sounds hard, and staying present are always right.\n\nThen say the honest thing: that this is more than you can help with, and that you would like them to talk to someone who can. Saying that kindly is the responsible move, not a failure of nerve.\n\nMindset: stay, listen, and point towards real help. Both parts matter.",
      inputs: [
        { q: "What they describe sounds like more than a bad patch.", a: "\"This sounds bigger than something you should be carrying on your own.\" [Respond With Validation]", bundle: 'pro' },
        { q: "You want to suggest proper support without it sounding like a brush-off.", a: "\"I'm not going anywhere. I also think you'd get more from talking to someone who actually knows about this.\" [Respond With a Suggestion]", bundle: 'pro' },
        { q: "You are about to offer advice on something serious.", a: "\"I don't want to give you bad advice on something this big. Can we find out who would know?\" [Work Out What They Need]", bundle: 'pro' },
        { q: "They say they do not want to talk to anyone else.", a: "\"That's your call. I'll ask again in a while, because I'd like you to.\" [Respond With Validation]", bundle: 'pro' },
        { q: "You are worried and do not know what to do next.", a: "\"Can I check in on you tomorrow? Not to fix anything — just to check.\" [Respond With a Suggestion]", bundle: 'pro' },
      ]
    },
  ],
  talkingaboutyourself: [
    {
      name: "You Think Nothing Interesting Has Happened",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "The most common reason people give a closed answer. They search for something worth reporting, find an ordinary week, and conclude there is nothing to say.\n\nThe standard is wrong, not the week. Nobody asking how your weekend was is hoping for an anecdote; they are finding out what you are like, and a specific ordinary thing does that better than an impressive vague one.\n\nSay the Small True Thing is the fix, and Give a Detail is what makes it usable — the detail is the handle they pick it up by.\n\nMindset: specific beats interesting. Every time, with everyone.",
      inputs: [
        { q: "Someone asks what you did at the weekend and you did nothing.", a: "\"Nothing at all, on purpose. It was excellent.\" [Say the Small True Thing]", bundle: 'pro' },
        { q: "You are hunting for something worth reporting.", a: "\"Terrible television and too much coffee, honestly.\" [Say the Small True Thing]", bundle: 'pro' },
        { q: "The only true answer feels too small to say out loud.", a: "\"I've been trying to fix a bike I don't know how to fix.\" [Give a Detail]", bundle: 'pro' },
        { q: "You are about to inflate a story to make it land.", a: "(tell the small version — it lands better) [Say the Small True Thing]", bundle: 'pro' },
        { q: "You said \"not much\" and the conversation stopped dead.", a: "\"That's not quite true, actually — I repainted a wardrobe, badly.\" [Give a Detail]", bundle: 'pro' },
      ]
    },
    {
      name: "They Have Just Shared Something Big",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Someone has told you about an illness, a separation, a job lost, a parent failing. The attention is about to come back to you, and this is where people misjudge the size most badly in both directions.\n\nMatch What They Gave is the strategy, and matching does not always mean disclosing. Sometimes the right match is saying plainly that you are listening rather than trading — a story of your own can read as taking the subject back.\n\nWhat is always wrong is the light answer. Someone who has just taken a risk is checking whether it was safe, and a breezy reply answers that question for them.\n\nMindset: meet them, or say you are staying. Never breeze past it.",
      inputs: [
        { q: "A friend tells you something serious about their health.", a: "\"That's a lot. I'm not going to match that with a work story — tell me more.\" [Match What They Gave]", bundle: 'pro' },
        { q: "You have something comparable and it would genuinely help.", a: "\"I'll match you, since it might help: I went through the same thing in 2019.\" [Match What They Gave]", bundle: 'pro' },
        { q: "You are about to change the subject because it is uncomfortable.", a: "\"I nearly moved us on then. I'd rather stay with what you said.\" [Match What They Gave]", bundle: 'pro' },
        { q: "They ask how you are, straight after telling you.", a: "\"Fine, and that genuinely isn't the interesting thing right now.\" [Hand It Back]", bundle: 'pro' },
        { q: "They ask you something personal in return and you do not want to answer it.", a: "\"I'll skip that bit — not tonight. Keep going with yours.\" [Keep Something Back]", bundle: 'pro' },
      ]
    },
    {
      name: "The Question Is About Work or What You Do",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "The most-asked question there is, and the one most reliably answered with the least useful sentence available. A job title is nearly impossible to follow up.\n\nAnswer What They Are Really Asking is the whole category. They want to know what your days are like, whether you enjoy it, and whether there is anything in there worth talking about — not what to write on your name badge.\n\nIt also covers the case where you would rather not lead with your job at all, which is a perfectly good answer as long as you give them something else to hold.\n\nMindset: give them the version they can ask a second question about.",
      inputs: [
        { q: "Someone asks what you do.", a: "\"I teach English. Mostly to teenagers, which is as loud as it sounds.\" [Answer What They Are Really Asking]", bundle: 'pro' },
        { q: "You gave the title and the conversation stalled.", a: "\"That's the title. What I actually do all day is answer email.\" [Answer What They Are Really Asking]", bundle: 'pro' },
        { q: "You do not much like your job and would rather not lead with it.", a: "\"I work in logistics, which I'd rather not describe. Ask me about weekends.\" [Answer What They Are Really Asking]", bundle: 'pro' },
        { q: "There is a part of the job you genuinely like.", a: "\"Technically accounting. The bit I like is the detective work.\" [Name What You Are Into]", bundle: 'pro' },
        { q: "You have answered and they are still looking at you.", a: "\"Anyway — that's mine. What do you do all day?\" [Hand It Back]", bundle: 'pro' },
      ]
    },
    {
      name: "You Are Having a Bad Time and They Asked",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Someone asks how you are and the honest answer is not good. The two easy options are lying and unloading, and both cost something — the first keeps everyone at a distance, the second lands more than the person asked to carry.\n\nThe middle is a true answer at the size the moment allows. Say the Small True Thing, sized by Match What They Gave: a corridor question gets one honest line, a real one gets the longer version.\n\nKeep Something Back is here too, for when you do not want to go into it at all — which is allowed, and works better said than performed.\n\nMindset: honest and small is a real option. It is not the same as pretending.",
      inputs: [
        { q: "A colleague asks how you are as they pass your desk.", a: "\"Bit of a rough week, honestly. Nothing that won't keep.\" [Say the Small True Thing]", bundle: 'pro' },
        { q: "A friend has stopped and is actually waiting for the real answer.", a: "\"Honestly? Not my best month. Nothing dramatic, just heavy.\" [Match What They Gave]", bundle: 'pro' },
        { q: "You are about to say \"fine\" for the twentieth time.", a: "\"I've been saying fine for two months and it isn't true.\" [Say the Small True Thing]", bundle: 'pro' },
        { q: "You do not want to go into it here.", a: "\"Not great, but I'd rather not do it at work. Thanks for asking, though.\" [Keep Something Back]", bundle: 'pro' },
        { q: "You have said more than you meant to and want to steady it.", a: "\"That's more than I planned to say. How have you been?\" [Hand It Back]", bundle: 'pro' },
      ]
    },
    {
      name: "You Do Not Want to Answer",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "A question about money, health, a relationship, your family, why you left the last job. Sometimes it is innocent curiosity, sometimes it is not, and the strategy is the same either way.\n\nKeep Something Back is the move: a partial answer, warmly given, closes the subject without making it enormous. Give a Detail is what stops the gap becoming the story — fill the space with something else true.\n\nThe one situation worth naming separately is a question from someone with power over you, where the friendly boundary is both allowed and usually respected. \"I'd rather keep that outside work\" is a complete sentence, and if it is not respected, that is information about them rather than about you.\n\nMindset: you can give them something without giving them everything.",
      inputs: [
        { q: "Someone asks about a breakup you do not want to discuss.", a: "\"Short version: it ended badly. Enough for a Tuesday.\" [Keep Something Back]", bundle: 'pro' },
        { q: "You want to close the subject without leaving a hole in the conversation.", a: "\"Not a story for tonight. I have been repainting a flat instead, though.\" [Give a Detail]", bundle: 'pro' },
        { q: "A manager asks something personal.", a: "\"I'd rather keep that one outside work, if that's alright.\" [Keep Something Back]", bundle: 'pro' },
        { q: "They push after you have already declined once.", a: "\"I've given you what I've got on that one.\" [Keep Something Back]", bundle: 'pro' },
        { q: "You do want to tell them, but not here.", a: "\"Ask me again when there aren't twelve people in the room.\" [Keep Something Back]", bundle: 'pro' },
      ]
    },
  ],
  describethings: [
    {
      name: "Too Vague",
      guideFront: "What kind of trouble is this description in?",
      guideBack: "A possible response, with the move in brackets.",
      description: "Every word is technically true and none of it helps. \"It's a bag. It's blue. It's normal sized.\" The listener is no closer than before you started.\n\nThe fix is one precise detail in place of three general ones — a comparison, a distinguishing feature, an exact colour.\n\nMindset: if your description could fit fifty objects, you have not described anything.",
      inputs: [
        { q: "You have said \"it's blue\" and they still look blank.", a: "\"Dark blue, almost navy. Not a bright blue.\" [Qualify the colour]", bundle: 'pro' },
        { q: "You said \"medium sized\" and they ask what that means.", a: "\"About the size of a loaf of bread.\" [Compare to something known]", bundle: 'pro' },
        { q: "You have listed three adjectives and none has landed.", a: "\"Forget all that — the giveaway is the cracked corner on the lid.\" [Give the distinguishing feature]", bundle: 'pro' },
        { q: "You said \"it's just a normal one\".", a: "\"Sorry, that's no help. It's the round sort, not the flat sort.\" [Narrow the category]", bundle: 'pro' },
        { q: "They ask \"which one?\" for the third time.", a: "\"The one right next to the door. That's the quickest way to say it.\" [Switch to position]", bundle: 'pro' },
      ]
    },
    {
      name: "Too Much At Once",
      guideFront: "What kind of trouble is this description in?",
      guideBack: "A possible response, with the move in brackets.",
      description: "The opposite failure. You give all ten categories in one breath and the listener cannot hold any of it. Long descriptions do not build a picture; they overwrite it.\n\nGive two or three details, then stop and let them ask. Their question tells you which category is actually missing.\n\nMindset: a description is a conversation, not a paragraph.",
      inputs: [
        { q: "You are six details in and they have gone quiet.", a: "\"I'm giving you too much. Green rucksack, yellow patch. Start there.\" [Compress to two]", bundle: 'pro' },
        { q: "They say \"hang on, go back\".", a: "\"Sure — which bit? I'll do that one properly.\" [Hand them the choice]", bundle: 'pro' },
        { q: "You have described colour, size, material and age with no pause.", a: "\"Does that sound like anything you've seen?\" [Stop and check]", bundle: 'pro' },
        { q: "You realise you have not said the one thing that identifies it.", a: "\"None of that matters, actually. It's the only one with a wooden handle.\" [Lead with the giveaway]", bundle: 'pro' },
        { q: "They look overwhelmed before you have finished.", a: "\"Short version: big, green, patched. That's enough to spot it.\" [Offer the short version]", bundle: 'pro' },
      ]
    },
    {
      name: "You Cannot Remember the Detail",
      guideFront: "What kind of trouble is this description in?",
      guideBack: "A possible response, with the move in brackets.",
      description: "You are describing something and the crucial detail is simply gone. Guessing is tempting and actively harmful — a wrong colour sends someone looking for the wrong thing.\n\nSay what you are sure of, mark what you are not, and offer a different category instead.\n\nMindset: an honest gap is more useful than a confident guess.",
      inputs: [
        { q: "You cannot remember the colour.", a: "\"I genuinely can't remember the colour. But it's the only one with a side pocket.\" [Swap category]", bundle: 'pro' },
        { q: "You are about to guess a size.", a: "\"I'd be guessing on size. It fits in a rucksack, that much I know.\" [Give the bound you know]", bundle: 'pro' },
        { q: "They press for the brand.", a: "\"No idea on the brand. I could tell you the shape though.\" [Redirect to what you have]", bundle: 'pro' },
        { q: "You half remember and it might be wrong.", a: "\"I think it was green — don't rule out a blue one on my say-so.\" [Flag the uncertainty]", bundle: 'pro' },
        { q: "You realise mid-sentence you have described something else.", a: "\"Sorry, I'm describing the old one. The new one is smaller and grey.\" [Correct it immediately]", bundle: 'pro' },
      ]
    },
    {
      name: "They Have Never Seen One",
      guideFront: "What kind of trouble is this description in?",
      guideBack: "A possible response, with the move in brackets.",
      description: "Some descriptions fail because the listener has no reference point at all — an unfamiliar object, a food they have never eaten, a place nothing like anywhere they have been.\n\nComparison is the way in. Find the nearest thing they do know and describe the difference from there.\n\nMindset: build from something they already have in their head.",
      inputs: [
        { q: "They have never seen the object at all.", a: "\"Think of a garlic press, but bigger and for potatoes.\" [Compare and adjust]", bundle: 'pro' },
        { q: "They ask what a food tastes like.", a: "\"Somewhere between a pear and an apple, but softer than both.\" [Place it between two knowns]", bundle: 'pro' },
        { q: "They cannot picture the place.", a: "\"Imagine a train station, but the roof is glass and it's full of market stalls.\" [Known thing, one change]", bundle: 'pro' },
        { q: "Your comparison did not land either.", a: "\"Different angle — it's a tool for opening things that are stuck.\" [Switch to purpose]", bundle: 'pro' },
        { q: "They say \"I have no idea what you mean\".", a: "\"Fair enough. I'll show you a picture — it'll take two seconds.\" [Stop describing, show it]", bundle: 'pro' },
      ]
    },
    {
      name: "Describing a Person",
      guideFront: "What kind of trouble is this description in?",
      guideBack: "A possible response, with the move in brackets.",
      description: "Describing people carries a risk objects do not: some details are useful and neutral, others reduce someone to a characteristic or land as a judgement.\n\nClothing, position and what someone is doing are reliable and disappear the moment the person is found. Comments on body, attractiveness or the like are neither necessary nor kind.\n\nMindset: describe what they are wearing and where they are standing, not what they look like as a person.",
      inputs: [
        { q: "You need to point someone out across a room.", a: "\"Green jacket, standing by the coffee machine.\" [Clothing and position]", bundle: 'pro' },
        { q: "They ask which of two people you mean.", a: "\"The one who's talking. The other one's on their phone.\" [What they are doing]", bundle: 'pro' },
        { q: "You are about to describe someone's body.", a: "\"Easier way — she's the one carrying the blue folder.\" [Choose a neutral marker]", bundle: 'pro' },
        { q: "You are telling a friend who to look out for at the station.", a: "\"Tall, grey coat, and he'll be the one holding a bike helmet.\" [Clothing plus object]", bundle: 'pro' },
        { q: "The only detail you can think of is a personal one.", a: "\"I'll message you when I see him — easier than describing.\" [Decline the description]", bundle: 'pro' },
      ]
    },
  ],
  explainthings: [
    {
      name: "They Already Know",
      guideFront: "What kind of trouble is this explanation in?",
      guideBack: "A possible response, with the move in brackets.",
      description: "You start explaining and realise partway through that they knew this already. Carrying on is mildly insulting; stopping abruptly is awkward.\n\nThe move is to hand the explanation back to them rather than abandoning it. Ask what they already have, and pick up from there.\n\nMindset: getting it wrong here is normal. Adjusting quickly is the skill, not guessing right first time.",
      inputs: [
        { q: "You're two sentences into explaining and they say, \"Yeah, I've used one before.\"", a: "\"Ah, good — then ignore all that. Was there a specific bit you wanted?\" [Hand it back]", bundle: 'pro' },
        { q: "They finish your sentence for you.", a: "\"You're ahead of me. What's the part that's still annoying you?\" [Hand it back]", bundle: 'pro' },
        { q: "They say \"I know\" flatly, twice.", a: "\"Fair enough. Tell me where you actually got stuck and I'll start there.\" [Hand it back]", bundle: 'pro' },
        { q: "You realise they wrote the thing you're explaining.", a: "\"I've just explained your own system to you. Go on then — what did I get wrong?\" [Own it lightly]", bundle: 'pro' },
        { q: "They're nodding along politely but clearly ahead of you.", a: "\"I'm labouring this. Shall I skip to the bit about why it changed?\" [Skip forward]", bundle: 'pro' },
      ]
    },
    {
      name: "Too Much Detail",
      guideFront: "What kind of trouble is this explanation in?",
      guideBack: "A possible response, with the move in brackets.",
      description: "You can see it happening — they came in curious and now they are glazed. Almost always this is because you gave What at four levels of depth before reaching How.\n\nThe recovery is to stop mid-explanation and offer the one-sentence version. It is not a defeat; it is usually what they wanted.\n\nMindset: nobody has ever been annoyed by a shorter answer.",
      inputs: [
        { q: "Their eyes have gone somewhere else and you're still on the parts list.", a: "\"I'm going too deep. One sentence: it stops the pipes freezing.\" [Compress]", bundle: 'pro' },
        { q: "They say \"okay…\" three times in a row with no question.", a: "\"Let me start again shorter. Which bit do you actually need?\" [Restart smaller]", bundle: 'pro' },
        { q: "You're four minutes in and haven't said what it's for.", a: "\"I've buried the point. It's for the mornings when you can't get up.\" [Jump to Why]", bundle: 'pro' },
        { q: "They interrupt with \"sorry, what does it do again?\"", a: "\"Good question — I never said. It logs the temperature every ten minutes.\" [Answer plainly]", bundle: 'pro' },
        { q: "You notice you've used three words they wouldn't know.", a: "\"Ignore all that. In plain terms, it's a switch that turns itself off.\" [Drop the jargon]", bundle: 'pro' },
      ]
    },
    {
      name: "The Wrong Level",
      guideFront: "What kind of trouble is this explanation in?",
      guideBack: "A possible response, with the move in brackets.",
      description: "The same thing needs a different explanation for a child, a colleague and an expert. Pitching too low sounds patronising; pitching too high leaves them nodding at nothing.\n\nThe fix is to ask rather than guess, and to make the asking sound like normal conversation instead of a test.\n\nMindset: asking what someone already knows is a courtesy, not a challenge.",
      inputs: [
        { q: "You don't know if they know the basics or not.", a: "\"How much of this do you already have? I don't want to explain the obvious bit.\" [Ask first]", bundle: 'pro' },
        { q: "A child asked and you've started with the technical answer.", a: "\"Let me do that again properly. It's a box that keeps food cold so it doesn't go bad.\" [Drop a level]", bundle: 'pro' },
        { q: "An expert asked and you've started from the very beginning.", a: "\"You'll know all this — shall I skip to what we changed?\" [Go up a level]", bundle: 'pro' },
        { q: "They say \"I'm not technical\" before you've said anything.", a: "\"That's fine, there's nothing technical in it. It's a list and a button.\" [Reassure, then plain]", bundle: 'pro' },
        { q: "They use a technical word correctly and you'd been simplifying.", a: "\"Ah, you're further in than I thought. Then the short version is it caches locally.\" [Match them]", bundle: 'pro' },
      ]
    },
    {
      name: "But Why Would I Need That",
      guideFront: "What kind of trouble is this explanation in?",
      guideBack: "A possible response, with the move in brackets.",
      description: "They understood the What and the How perfectly and still do not care. This is not a comprehension problem, and repeating the explanation louder will not fix it.\n\nSwitch to Why, and make it specific to them rather than general. If there genuinely is no reason for this person, saying so is the honest move.\n\nMindset: it is fine for the answer to be \"you probably don't need it\".",
      inputs: [
        { q: "They say, \"I get what it is, I just don't see the point.\"", a: "\"For you, probably nothing. It's really for people juggling three calendars.\" [Concede honestly]", bundle: 'pro' },
        { q: "They shrug and say, \"I've managed fine without one.\"", a: "\"You have. The only thing it changes is the Sunday-night panic.\" [Name the specific gain]", bundle: 'pro' },
        { q: "They say, \"Sounds like more work than it saves.\"", a: "\"It is, for the first week. After that it's about ten minutes a day back.\" [Acknowledge the cost]", bundle: 'pro' },
        { q: "They ask what's wrong with the old way.", a: "\"Nothing, honestly, until two people need it at once. That's the whole difference.\" [Name the trigger]", bundle: 'pro' },
        { q: "They say, \"This feels like a solution looking for a problem.\"", a: "\"Sometimes it is. Do you ever lose track of what you promised people? If not, skip it.\" [Ask before selling]", bundle: 'pro' },
      ]
    },
    {
      name: "You Don't Fully Know",
      guideFront: "What kind of trouble is this explanation in?",
      guideBack: "A possible response, with the move in brackets.",
      description: "Being asked to explain something you only partly understand is uncomfortable and extremely common. The dangerous move is to fill the gap with something plausible, because the listener cannot tell the difference and will carry it away as fact.\n\nGive the part you are sure about, mark the edge clearly, and point at who would know.\n\nMindset: \"I don't know that bit\" costs one second and buys you being believed the rest of the time.",
      inputs: [
        { q: "They ask a follow-up you can't answer.", a: "\"That's past where I actually know. I'd be guessing if I answered.\" [Mark the edge]", bundle: 'pro' },
        { q: "You could bluff and they'd probably not notice.", a: "\"I know it does that. I don't know how, and I'd rather not invent it.\" [Refuse the bluff]", bundle: 'pro' },
        { q: "You know who does know.", a: "\"Ask Sam — that's their bit and they'll explain it properly in a minute.\" [Hand over]", bundle: 'pro' },
        { q: "You half remember and it might be wrong.", a: "\"I think it's monthly, but check it — I've got maybe seventy per cent confidence in that.\" [Flag the confidence]", bundle: 'pro' },
        { q: "They press for a definite answer you don't have.", a: "\"I can find out by tomorrow. I'd rather give you the right one than a fast one.\" [Offer to find out]", bundle: 'pro' },
      ]
    },
  ],
  givingexamples: [
    {
      name: "The Example Is Too Big",
      guideFront: "What has gone wrong with this example?",
      guideBack: "A possible response, with the move in brackets.",
      description: "The example is so dramatic that it swallows the point. The listener remembers the story and forgets what it was for, or objects that your case is extreme and therefore proves nothing.\n\nScale down. A small, ordinary example is usually more persuasive than a spectacular one, because nobody has to argue about whether it is representative.\n\nMindset: the example should serve the point, not upstage it.",
      inputs: [
        { q: "You reached for a disaster to illustrate a minor risk.", a: "\"That's an extreme case, granted. The everyday version is just losing an afternoon.\" [Scale it down]", bundle: 'pro' },
        { q: "They start discussing your example instead of your point.", a: "\"The story's a distraction. The point is we don't have a fallback.\" [Return to the point]", bundle: 'pro' },
        { q: "They say your example is nothing like the current situation.", a: "\"It's bigger, yes. Same mechanism, smaller stakes.\" [Name the difference]", bundle: 'pro' },
        { q: "You realise the example proves more than you meant.", a: "\"That's overstating it. I'm not saying it'd be a catastrophe, just annoying.\" [Narrow the claim]", bundle: 'pro' },
        { q: "The example has made someone anxious.", a: "\"I've made that sound worse than it is. Realistically it's an inconvenience.\" [Correct the scale]", bundle: 'pro' },
      ]
    },
    {
      name: "They Cannot Relate To It",
      guideFront: "What has gone wrong with this example?",
      guideBack: "A possible response, with the move in brackets.",
      description: "Your everyday example is not everyday for this person, or the shared reference is not shared. You have explained something familiar with something they do not have.\n\nSwitch to a different type rather than explaining the example. Explaining an example is the clearest sign it was the wrong one.\n\nMindset: the moment you start explaining an example, pick a different one.",
      inputs: [
        { q: "They have not seen the film you used.", a: "\"Doesn't matter — simpler version: warn people about nothing and they stop listening.\" [Drop the reference]", bundle: 'pro' },
        { q: "Your work example means nothing to someone outside.", a: "\"Take it out of work. It's like being told a parcel's arriving 'sometime'.\" [Move it to common ground]", bundle: 'pro' },
        { q: "You are three sentences into explaining your own example.", a: "\"This is a bad example. Let me try a different one.\" [Abandon it cleanly]", bundle: 'pro' },
        { q: "They say \"that's never happened to me\".", a: "\"Fair enough. Then imagine it did — what would you want to be in place?\" [Switch to imagined]", bundle: 'pro' },
        { q: "They say your comparison does not fit their situation.", a: "\"Where does it break down for you? That's probably the interesting bit.\" [Ask]", bundle: 'pro' },
      ]
    },
    {
      name: "The Number Is Shaky",
      guideFront: "What has gone wrong with this example?",
      guideBack: "A possible response, with the move in brackets.",
      description: "You have used a figure you are not certain of, or you are about to. This is the failure that does the most damage, because a wrong number does not just fail — it discredits everything around it.\n\nMark the uncertainty before you are asked, or drop the number entirely. Both are stronger than being corrected.\n\nMindset: an honest \"I don't know\" is worth more than any figure you cannot defend.",
      inputs: [
        { q: "You are about to guess at a percentage.", a: "\"I want to say a third, but I genuinely don't know. Let me not put a number on it.\" [Refuse the guess]", bundle: 'pro' },
        { q: "You quoted something and cannot remember the source.", a: "\"I read that somewhere and I can't tell you where. Take it lightly.\" [Flag the gap]", bundle: 'pro' },
        { q: "Someone repeats your uncertain figure as fact.", a: "\"Careful with that one — it was my rough guess, not a real number.\" [Correct the record]", bundle: 'pro' },
        { q: "Your figure is old.", a: "\"That's last year's. The direction's probably right, the size might not be.\" [Date it]", bundle: 'pro' },
        { q: "They ask you to be precise and you cannot.", a: "\"I can be precise by Thursday. Right now I'd only be inventing.\" [Offer to check]", bundle: 'pro' },
      ]
    },
    {
      name: "Too Many Examples",
      guideFront: "What has gone wrong with this example?",
      guideBack: "A possible response, with the move in brackets.",
      description: "You have made the point and then given a second example, and a third. Each additional one weakens the set, because the listener starts judging the weakest rather than the strongest.\n\nGive one. Stop. If they need another, they will ask, and their question will tell you which type to reach for.\n\nMindset: the second example is usually for your own comfort, not their understanding.",
      inputs: [
        { q: "You have given three examples and they have gone quiet.", a: "\"I'm piling on. The April one is the only one that matters.\" [Cut back to one]", bundle: 'pro' },
        { q: "They start arguing with your weakest example.", a: "\"Drop that one — it wasn't a good example. The main case stands.\" [Concede the weak one]", bundle: 'pro' },
        { q: "You are about to add a fourth.", a: "\"I'll leave it there. Does that land, or do you want a different angle?\" [Stop and check]", bundle: 'pro' },
        { q: "You notice you keep going because they have not agreed yet.", a: "\"I'm repeating myself in different clothes. What's the actual objection?\" [Ask instead]", bundle: 'pro' },
        { q: "They say \"you've made your point\".", a: "\"I have, several times. Sorry — what do you think?\" [Hand it over]", bundle: 'pro' },
      ]
    },
    {
      name: "The Example Is About Someone Present",
      guideFront: "What has gone wrong with this example?",
      guideBack: "A possible response, with the move in brackets.",
      description: "The best illustration of your point is something a person in the room did, and using it would put them on the spot. This happens constantly in teams and in families.\n\nEither abstract it until they are unidentifiable, ask them first, or pick a different example. The point is rarely worth the cost of making someone an exhibit.\n\nMindset: no example is worth embarrassing someone who is sitting there.",
      inputs: [
        { q: "Your best example is a mistake a colleague made last week.", a: "\"There's a recent case I won't name. The pattern is what matters.\" [Abstract it]", bundle: 'pro' },
        { q: "You could use your own version of the same mistake instead.", a: "\"I did exactly this in January, so I'll use mine.\" [Use yourself]", bundle: 'pro' },
        { q: "Someone else brings up the example about the person present.", a: "\"Can we take that as a general point rather than about anyone here?\" [Redirect it]", bundle: 'pro' },
        { q: "You want to use their example and they are right there.", a: "\"Would you mind if I used the Tuesday thing as an example?\" [Ask first]", bundle: 'pro' },
        { q: "You have already said it and they have gone quiet.", a: "\"That came out as a dig and I didn't mean it that way. Sorry.\" [Repair it]", bundle: 'pro' },
      ]
    },
  ],
  storytellingwiththesixws: [
    {
      name: "You Buried the Event",
      guideFront: "What has gone wrong with this story?",
      guideBack: "A possible fix, with the W in brackets.",
      description: "Two minutes in and the listener still does not know what actually happened — you are still explaining the background.\n\nThe training is to notice the moment their attention goes, and to get the event out immediately rather than finishing the run-up you had planned.\n\nWhat it usually looks like:\n• A long setup with no event in sight.\n• \"Anyway, so —\" arriving for the third time.\n• Someone asking \"sorry, what happened?\"\n\nTwo ways through:\n1. What — say it now, out of order if necessary. \"Anyway — I lost the whole thing.\"\n2. How — skip straight to the middle. \"Long story short, it ended up under the lockers.\"\n\nMindset: you can always backfill. Nobody has ever minded a story that started at the event and explained itself afterwards.",
      inputs: [
        { q: "Two minutes of background and nothing has happened yet.", a: "\"Anyway — the short version is I lost my homework completely.\" (what)", bundle: 'pro' },
        { q: "They ask \"sorry, what actually happened?\"", a: "\"We arrived at the hotel and it did not exist.\" (what)", bundle: 'pro' },
        { q: "You can see attention going and you are still setting up.", a: "\"Skipping ahead — I ended up sitting on the step for six hours.\" (what)", bundle: 'pro' },
        { q: "You have explained the whole context twice over.", a: "\"Right, the actual thing: I called my teacher mum, in front of everyone.\" (what)", bundle: 'pro' },
        { q: "You are three sentences from the event and losing them.", a: "\"I will come back to why — first, I got the job.\" (what)", bundle: 'pro' },
      ]
    },
    {
      name: "They Said \"And?\"",
      guideFront: "What has gone wrong with this story?",
      guideBack: "A possible fix, with the W in brackets.",
      description: "You finished the story and got a polite pause. Everything happened, nothing landed.\n\nThe training is to recognise this specific symptom as a missing Why. The events were clear; what was missing was any reason to care about them, which is usually you.\n\nWhat it usually sounds like:\n• \"Right… and then what?\"\n• A polite nod and a change of subject.\n• \"Huh.\"\n\nTwo ways through:\n1. Why — say what it meant or what caused it. \"I had failed three times, so it actually meant something.\"\n2. Who — put a person and their reaction in. \"The examiner had failed me twice before and clearly remembered.\"\n\nMindset: a story without a Why is a report. The listener is not asking for a better event, they are asking what it was like to be you in it.",
      inputs: [
        { q: "You finished and got a polite pause.", a: "\"I had failed three times before that, so it actually meant something.\" (why)", bundle: 'pro' },
        { q: "The events were clear but nothing landed.", a: "\"The whole thing hinged on a booking nobody had ever made.\" (why)", bundle: 'pro' },
        { q: "They nodded and changed the subject.", a: "\"I had been saying I would do it for two years and finally got sick of hearing myself.\" (why)", bundle: 'pro' },
        { q: "Your story sounds like a list of things that occurred.", a: "\"There was one woman who just took over and sorted the whole thing.\" (who)", bundle: 'pro' },
        { q: "You told it well but it feels like it was about nobody.", a: "\"I was too embarrassed to ask anyone, which is the actual reason.\" (why)", bundle: 'pro' },
      ]
    },
    {
      name: "They Cannot Picture It",
      guideFront: "What has gone wrong with this story?",
      guideBack: "A possible fix, with the W in brackets.",
      description: "They are following the story but seeing nothing. It is all events and no scene.\n\nThe training is to notice that you have given a sequence without a setting, and to spend one clause on the place before carrying on.\n\nWhat it usually looks like:\n• The whole story happens in a vacuum.\n• You realise you never said where you were.\n• It sounds like it could have happened anywhere.\n\nTwo ways through:\n1. Where — one concrete detail, not a description. \"A hallway full of people trying to get past me.\"\n2. When — anchor it as a real moment. \"February, and it was already going dark.\"\n\nMindset: one detail and the listener builds the rest themselves. You are giving them somewhere to stand, not describing a room.",
      inputs: [
        { q: "The story is clear but happening nowhere in particular.", a: "\"This was in the hallway outside the science block, everyone pushing past.\" (where)", bundle: 'pro' },
        { q: "You realise you never said where you were.", a: "\"An empty gravel lot where the hotel was supposed to be.\" (where)", bundle: 'pro' },
        { q: "It sounds like it could have happened anywhere, any time.", a: "\"Last period on a Friday, when everyone was half asleep.\" (when)", bundle: 'pro' },
        { q: "You want them to see the room before the event lands.", a: "\"A glass meeting room where everyone already knew each other.\" (where)", bundle: 'pro' },
        { q: "The scene is missing and the story feels thin.", a: "\"One of those climbing places in an old warehouse, all echo and chalk dust.\" (where)", bundle: 'pro' },
      ]
    },
    {
      name: "Who Is This Person?",
      guideFront: "What has gone wrong with this story?",
      guideBack: "A possible fix, with the W in brackets.",
      description: "You have used a name three times and the listener has no idea who they are, so they have stopped following and started guessing.\n\nThe training is to introduce people the first time they appear, in about four words, and to keep the cast small.\n\nWhat it usually looks like:\n• A name arriving with no explanation.\n• Four people in the story and no way to tell them apart.\n• \"Sorry, who is Sam?\"\n\nTwo ways through:\n1. Who — introduce them as they arrive. \"My mate Sam, who was crawling under the lockers.\"\n2. Who, trimmed — cut the cast to the ones who matter. \"There were others there, but really it was just me and the driver.\"\n\nMindset: a listener working out who someone is has stopped listening to the story. Four words of introduction buys back the whole rest of it.",
      inputs: [
        { q: "You have said a name three times with no introduction.", a: "\"Sam — my mate from school, the one who was under the lockers.\" (who)", bundle: 'pro' },
        { q: "There are four people in the story and no way to tell them apart.", a: "\"Really it was just me and one very unimpressed taxi driver.\" (who)", bundle: 'pro' },
        { q: "They ask who someone is, mid-story.", a: "\"A neighbour I had never spoken to before that day.\" (who)", bundle: 'pro' },
        { q: "The people in your story have no reactions.", a: "\"My teacher just carried on as if nothing had happened, which made it worse.\" (who)", bundle: 'pro' },
        { q: "You realise the interesting person has not appeared yet.", a: "\"The examiner had failed me twice already and clearly remembered me.\" (who)", bundle: 'pro' },
      ]
    },
    {
      name: "It Is Going On Too Long",
      guideFront: "What has gone wrong with this story?",
      guideBack: "A possible fix, with the W in brackets.",
      description: "You are somewhere in the middle, the story has grown a subplot, and you can feel it sagging.\n\nThe training is to cut rather than to speed up. Talking faster makes a long story a fast long story; dropping W's makes it a short one.\n\nWhat it usually looks like:\n• A second story growing inside the first.\n• Nine steps in the How where three would do.\n• \"Anyway, that is not important —\" said out loud.\n\nTwo ways through:\n1. What — jump to the outcome and land it. \"Anyway — we never did find it.\"\n2. How, trimmed — two beats instead of nine. \"Long story short, it took about six hours.\"\n\nMindset: the six W's are a menu, not a checklist. Three or four told well beats all six told exhaustively.",
      inputs: [
        { q: "A second story has started growing inside the first.", a: "\"That is a whole other thing — anyway, we never did find it.\" (what)", bundle: 'pro' },
        { q: "You are nine steps into the How and it is sagging.", a: "\"Long story short, six hours on a doorstep in February.\" (how)", bundle: 'pro' },
        { q: "You hear yourself say \"anyway, that is not important\".", a: "\"Right, the actual point: the booking had never gone through.\" (why)", bundle: 'pro' },
        { q: "You have included every detail and the story has flattened.", a: "\"Skipping most of it — I got there, and I got the job.\" (what)", bundle: 'pro' },
        { q: "You can feel them waiting for it to end.", a: "\"Two attempts, then it just clicked. That was the whole thing.\" (how)", bundle: 'pro' },
      ]
    },
  ],
  storiesinconversation: [
    {
      name: "They Have Just Told One of Their Own",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "The most common moment for a story, and the one where the pull to compete is strongest. Their story ends, yours arrives fully formed, and it is bigger.\n\nAnswer Don't Outdo is the strategy. The size of your story is a decision, not a fact — you can tell the small version of almost anything, and the small version keeps this a conversation rather than a contest.\n\nRead the Room First matters here too, because sometimes the right move is no story at all. Someone who told theirs carefully may want a question about it rather than a matching one.\n\nMindset: theirs still has to be standing when yours is finished.",
      inputs: [
        { q: "Their story ends and yours is bigger.", a: "\"Yours is worse than mine, but you've reminded me of something.\" [Answer, Don't Outdo]", bundle: 'pro' },
        { q: "You are about to say \"that's nothing\".", a: "\"That's a good one. Mine's the same thing but smaller.\" [Answer, Don't Outdo]", bundle: 'pro' },
        { q: "They told something they seemed nervous about telling.", a: "(ask about theirs first — the story can wait) [Read the Room First]", bundle: 'pro' },
        { q: "The group has topped each other three times running.", a: "\"We're turning this into a competition. What happened after yours?\" [Answer, Don't Outdo]", bundle: 'pro' },
        { q: "You want to tell yours and keep them as the source.", a: "\"You've just reminded me of a thing that happened in Malmö.\" [Answer, Don't Outdo]", bundle: 'pro' },
      ]
    },
    {
      name: "You Are Telling It to a Group",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "More people means more ways to lose it. Someone is always half-listening, side conversations start, and the story has to work for the person who came in late as well as the one who knows the background.\n\nAsk for the Floor does more work here than anywhere — in a group, nobody has agreed to listen unless somebody asks. And Watch Them While You Tell It becomes watching several people, where the rule is to read the least engaged one rather than the most.\n\nGiving it back matters more too. In a group, a story that ends without a handover leaves an awkward beat that somebody has to fill.\n\nMindset: read the quietest face in the group, not the friendliest one.",
      inputs: [
        { q: "Nobody has agreed to listen and you are about to start.", a: "\"Can I tell you all a short one? Two minutes.\" [Ask for the Floor]", bundle: 'pro' },
        { q: "A side conversation has started while you are talking.", a: "\"I'll land this: the dog was fine, the fence wasn't.\" [Watch Them While You Tell It]", bundle: 'pro' },
        { q: "One person is enjoying it and two clearly are not.", a: "\"Fast version, and I'll give you the rest later.\" [Watch Them While You Tell It]", bundle: 'pro' },
        { q: "You finish and there is an awkward beat.", a: "\"That's mine. Somebody must have a worse one.\" [Give It Back]", bundle: 'pro' },
        { q: "One person in the group has not said anything all evening.", a: "\"Sara, you've been in worse situations than that.\" [Give It Back]", bundle: 'pro' },
      ]
    },
    {
      name: "It Is Not Landing",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "You are inside a story that is not working. The room is polite, you can feel it, and the instinct is to keep going and hope the ending rescues it. It will not.\n\nCut It Loose is the strategy, and the light version is almost always the right one. Naming it is a relief for everyone and usually gets a better reaction than the story would have.\n\nIf you are close to the end, Finish on Purpose instead — give the ending flat, in one sentence, and stop. A flat ending is a proper ending. Trailing off is not.\n\nMindset: abandoning early costs almost nothing. Finishing stubbornly costs a lot.",
      inputs: [
        { q: "Three sentences in and it is clearly not working.", a: "\"This is going nowhere. Anyway — how was Denmark?\" [Cut It Loose]", bundle: 'pro' },
        { q: "You have lost your own thread.", a: "\"I've completely lost the thread of my own story.\" [Cut It Loose]", bundle: 'pro' },
        { q: "You are nearly at the end and it has died.", a: "\"He'd taken the wrong car. That's the whole thing.\" [Finish on Purpose]", bundle: 'pro' },
        { q: "Somebody says \"and then what?\" out of pure kindness.", a: "\"Honestly, nothing. That's the disappointing part.\" [Cut It Loose]", bundle: 'pro' },
        { q: "You are continuing out of stubbornness.", a: "(stop — the extra four sentences cost more than the abandon) [Cut It Loose]", bundle: 'pro' },
      ]
    },
    {
      name: "Somebody Interrupts or Takes It Over",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Someone cuts in mid-story, or finishes it for you because they were there, or asks a question that jumps three steps ahead. Losing the thread here is normal, and so is quietly resenting it.\n\nThe strategies are the same ones, used differently. Watch Them While You Tell It tells you whether the interruption is interest — in which case take it — or a takeover. Finish on Purpose is how you get the ending back if you still want it. And Give It Back is often the best answer to someone who was clearly waiting for their turn.\n\nA question that jumps ahead is usually a compliment. It means they are in the story far enough to guess.\n\nMindset: an interruption is information about how they are listening, not only about their manners.",
      inputs: [
        { q: "They ask a question that jumps ahead of you.", a: "\"You've guessed it. Yes — that's exactly what happened.\" [Watch Them While You Tell It]", bundle: 'pro' },
        { q: "Someone who was there starts finishing it for you.", a: "\"You tell it, you were closer to the fence than I was.\" [Give It Back]", bundle: 'pro' },
        { q: "You have been cut off and still want the ending in.", a: "\"One line and I'm done: he'd taken the wrong car.\" [Finish on Purpose]", bundle: 'pro' },
        { q: "Someone is visibly waiting to tell theirs.", a: "\"I'll stop there — you've clearly got one.\" [Give It Back]", bundle: 'pro' },
        { q: "The interruption has killed the momentum completely.", a: "\"That's ruined it, and honestly it wasn't going anywhere.\" [Cut It Loose]", bundle: 'pro' },
      ]
    },
    {
      name: "It Is Not Yours to Tell",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "The place where none of this applies. Some stories belong to someone else — a friend's diagnosis, a colleague's divorce, something told to you in confidence, or an anecdote where the funny part is at the expense of somebody who is not in the room.\n\nNo amount of good telling makes those alright, and \"they wouldn't mind\" is a decision you are making on someone else's behalf. The test is simple: would you tell it exactly like this with them sitting here?\n\nRead the Room First is the only strategy that applies, and the answer it gives is no. If you want the material, the honest route is asking the person whether you may tell it.\n\nMindset: a good story is not a good enough reason. It was not given to you for this.",
      inputs: [
        { q: "The funniest part is at the expense of someone not in the room.", a: "(do not tell it — you would not tell it with them here) [Read the Room First]", bundle: 'pro' },
        { q: "It was told to you in confidence and it is a great story.", a: "(it was not given to you for this) [Read the Room First]", bundle: 'pro' },
        { q: "It is someone else's news and it has not been announced.", a: "\"That's not mine to tell, I'm afraid.\" [Read the Room First]", bundle: 'pro' },
        { q: "You have started before realising whose story it is.", a: "\"Actually — that's not my story to be telling. Forget I started.\" [Cut It Loose]", bundle: 'pro' },
        { q: "You genuinely want to use it and think they would be fine.", a: "(ask them — it costs one message and settles it) [Read the Room First]", bundle: 'pro' },
      ]
    },
  ],
  praiseandencouragement: [
    {
      name: "The Praise Has a But",
      guideFront: "What has gone wrong with this praise?",
      guideBack: "A possible response, with the move in brackets.",
      description: "\"That was great, but…\" — and everything before the \"but\" is deleted. The listener hears only the criticism, and learns that your praise is a warning sign.\n\nIf both need saying, separate them: praise now, the other thing later, with real space in between. If only the criticism matters, give the criticism and skip the wrapper.\n\nMindset: praise used as packaging stops working as praise.",
      inputs: [
        { q: "You are about to say \"great, but\".", a: "\"That was good, and I'll say it on its own. We'll do the other bit tomorrow.\" [Separate them]", bundle: 'pro' },
        { q: "You have already said it and they have visibly deflated.", a: "\"I've buried the good part. The opening genuinely worked — the rest can wait.\" [Rescue the praise]", bundle: 'pro' },
        { q: "You only have criticism and are looking for something nice first.", a: "\"I've got one thing that didn't work. Can I just say that bit?\" [Drop the wrapper]", bundle: 'pro' },
        { q: "They flinch when you start with a compliment.", a: "\"This one isn't leading anywhere. It's just the thing you did well.\" [Say what it isn't]", bundle: 'pro' },
        { q: "You want to encourage and correct at once.", a: "\"Keep the structure. That's the whole note for today.\" [Give one note]", bundle: 'pro' },
      ]
    },
    {
      name: "Praise That Is Not True",
      guideFront: "What has gone wrong with this praise?",
      guideBack: "A possible response, with the move in brackets.",
      description: "You want to encourage someone and reach for something more generous than what actually happened. It is well meant, and it costs you your credibility — once someone knows your praise is automatic, your genuine praise stops arriving.\n\nThere is nearly always something true to say: one specific part that worked, the effort, the progress. Find that instead.\n\nMindset: never praise something you do not think is good. Find the part you do.",
      inputs: [
        { q: "The work was weak and you want to say something kind.", a: "\"The research underneath it is solid. That's the part I'd keep.\" [Find the true part]", bundle: 'pro' },
        { q: "You cannot find anything about the result to praise.", a: "\"You got it done in the week you said you would. That's not nothing.\" [Praise what is true]", bundle: 'pro' },
        { q: "They ask directly if it was good and it was not.", a: "\"Parts of it. The opening works. I'd want to talk about the middle.\" [Answer honestly]", bundle: 'pro' },
        { q: "You have already over-praised and they are relying on it.", a: "\"I was too generous on Tuesday. Let me give you a straighter version.\" [Correct it]", bundle: 'pro' },
        { q: "You are about to say something you do not mean.", a: "\"I won't pretend it landed. What I do think is that it was worth trying.\" [Praise the attempt]", bundle: 'pro' },
      ]
    },
    {
      name: "The Offer You Will Not Keep",
      guideFront: "What has gone wrong with this praise?",
      guideBack: "A possible response, with the move in brackets.",
      description: "The support step goes wrong when the offer is bigger than what you will actually do. \"Let me know if you need anything\" costs nothing and is almost never taken up; \"I'll read it Wednesday\" is a promise, and it has to be kept.\n\nAn offer that evaporates is worse than no offer, because they built on it.\n\nMindset: offer small and certain rather than large and vague.",
      inputs: [
        { q: "You are about to say \"let me know if you need anything\".", a: "\"Send me the draft on Wednesday and I'll read it.\" [Make it concrete]", bundle: 'pro' },
        { q: "You offered something and cannot now do it.", a: "\"I said I'd read it Wednesday and I can't. Thursday morning, definitely.\" [Fix it early]", bundle: 'pro' },
        { q: "They took your vague offer literally and asked for a lot.", a: "\"I can do the first two. The rest I'd not manage well.\" [Scale it honestly]", bundle: 'pro' },
        { q: "You want to help but genuinely have no time.", a: "\"I can't take any of it on this month. I can point you at who could.\" [Offer what you have]", bundle: 'pro' },
        { q: "You are offering mainly to seem supportive.", a: "\"Actually, I'd not get to it. Better you ask someone with the time.\" [Withdraw honestly]", bundle: 'pro' },
      ]
    },
    {
      name: "They Do Not Believe It",
      guideFront: "What has gone wrong with this praise?",
      guideBack: "A possible response, with the move in brackets.",
      description: "Some people cannot take praise. It bounces off, or it makes them uncomfortable enough that they leave. Repeating it more emphatically makes it worse.\n\nGo smaller and more factual. A tiny specific observation is easier to accept than a large warm verdict, and an impact is easier still.\n\nMindset: shrink the praise until it fits through.",
      inputs: [
        { q: "They say \"not really\" and change the subject.", a: "\"Fine — I'll just say the meeting ended early with a decision.\" [Switch to impact]", bundle: 'pro' },
        { q: "They look physically uncomfortable.", a: "\"I'll stop. One thing though: the opening worked.\" [Go small and stop]", bundle: 'pro' },
        { q: "They credit the whole thing to someone else.", a: "\"They helped. The bit I mean is the part you did.\" [Narrow to their part]", bundle: 'pro' },
        { q: "They laugh it off every time.", a: "\"I know you'll wave that away. I'm saying it anyway.\" [Say it and let it go]", bundle: 'pro' },
        { q: "They say you are only being kind.", a: "\"I'd have said nothing if I didn't mean it. That's how I work.\" [Answer the doubt]", bundle: 'pro' },
      ]
    },
    {
      name: "Praise in Front of Others",
      guideFront: "What has gone wrong with this praise?",
      guideBack: "A possible response, with the move in brackets.",
      description: "Public praise is powerful and awkward in roughly equal measure. It can single someone out, embarrass a shy person, or read to everyone else as a comparison with them.\n\nPublic for the thing anyone would be glad to have noticed, private for anything personal, effortful or close to a difficulty. When in doubt, ask.\n\nMindset: praise publicly for the work, privately for the person.",
      inputs: [
        { q: "You want to praise someone shy in front of the class.", a: "\"I'll mention the project and leave it there — the rest I'll say after.\" [Keep it small in public]", bundle: 'pro' },
        { q: "The achievement involved a personal struggle.", a: "\"That's yours to share or not. I'll just say the work was good.\" [Keep the private part private]", bundle: 'pro' },
        { q: "Praising one person might read as a dig at the others.", a: "\"The group got this done, and Sam's summary is what held it together.\" [Praise the whole, name the part]", bundle: 'pro' },
        { q: "You are not sure whether they would want it said publicly.", a: "\"Would it be alright if I mentioned this on Thursday?\" [Ask first]", bundle: 'pro' },
        { q: "You praised someone publicly and they looked stricken.", a: "\"I've put you on the spot — sorry. I'll be more careful next time.\" [Repair it]", bundle: 'pro' },
      ]
    },
  ],
  givingcriticism: [
    {
      name: "They Get Defensive",
      guideFront: "What makes this criticism hard?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Explanations, counter-examples, or a sudden list of everything else they are dealing with. Defensiveness is not usually disagreement — it is someone protecting their standing while they work out how serious this is.\n\nThe move is to lower the stakes rather than press harder. Concede what is fair, restate the one specific fact, and get to the alternative. Arguing about the history is how a ten-minute conversation becomes an hour.\n\nMindset: you are not trying to win the account of the past. You want a different next month.",
      inputs: [
        { q: "They explain that two of the three were not their fault.", a: "\"That's fair on those. The third one still stands, though.\" [Name the Behaviour]", bundle: 'pro' },
        { q: "They list everything else they have been dealing with.", a: "\"You have had a lot on. I'd still like to sort this one bit.\" [Start With Something Real]", bundle: 'pro' },
        { q: "They say everyone else does it too.", a: "\"Maybe. I'm only talking about your part of it.\" [Name the Behaviour]", bundle: 'pro' },
        { q: "They turn it round onto something you did.", a: "\"Happy to talk about that separately. Can we finish this first?\" [Choose the Size]", bundle: 'pro' },
        { q: "The conversation is heating up and going nowhere.", a: "\"Let's skip the history. What would make it easier to hit the date?\" [Suggest What to Do Instead]", bundle: 'pro' },
      ]
    },
    {
      name: "You Cannot Find a Positive",
      guideFront: "What makes this criticism hard?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "The work is poor, the effort was not obviously there, and you are about to invent something so the conversation has an opening.\n\nDo not. An invented positive is heard immediately and turns everything after it into theatre. The escape hatch is a neutral observation — something true and non-evaluative about their circumstances. \"You've been covering two roles\" is not praise, and it does exactly the same job.\n\nMindset: neutral and true beats positive and invented, every single time.",
      inputs: [
        { q: "There is nothing about the work you can honestly praise.", a: "\"You've been doing this on your own since March.\" [Start With Something Real]", bundle: 'pro' },
        { q: "You are about to say \"great effort\" and do not mean it.", a: "\"I know this one was a mess before it got to you.\" [Start With Something Real]", bundle: 'pro' },
        { q: "You want to open without any evaluation at all.", a: "\"I want to go through the last two with you.\" [Choose the Size]", bundle: 'pro' },
        { q: "They have already sensed the compliment coming and tensed up.", a: "\"I'm not going to soften this — I'd rather just say it plainly.\" [Name the Behaviour]", bundle: 'pro' },
        { q: "The only true positive is very small.", a: "\"You always answer quickly, which genuinely helps.\" [Start With Something Real]", bundle: 'pro' },
      ]
    },
    {
      name: "You Have Left It Too Long",
      guideFront: "What makes this criticism hard?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "It has been happening for months and you have said nothing. Now the list is long, and raising it feels like an ambush — because from their side, it is one.\n\nTwo things help. Acknowledge the delay out loud, which takes most of the unfairness out of it. And do not deliver the whole list: pick the one thing that matters most, because six examples at once is not feedback, it is a case being presented.\n\nMindset: own the delay, pick one thing, and start the clock again from today.",
      inputs: [
        { q: "You are about to raise six months of instances at once.", a: "\"I should have said this months ago, and I didn't. That's on me.\" [Start With Something Real]", bundle: 'pro' },
        { q: "You have a long list and want to pick from it.", a: "\"There's one thing I want to focus on: the handover step.\" [Name the Behaviour]", bundle: 'pro' },
        { q: "They say they wish they had known earlier.", a: "\"That's fair. I'll tell you the same week next time.\" [Encourage and Offer Support]", bundle: 'pro' },
        { q: "You are worried this will feel like an ambush.", a: "\"This isn't a list. It's one thing that's been on my mind.\" [Choose the Size]", bundle: 'pro' },
        { q: "They ask why you did not mention it before.", a: "\"Because I kept thinking it would sort itself out. That was a mistake.\" [Start With Something Real]", bundle: 'pro' },
      ]
    },
    {
      name: "It Is Not Your Place",
      guideFront: "What makes this criticism hard?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "They are more senior, or it is not your team, or it is a friend's private business rather than something that affects you.\n\nSometimes the honest answer is to say nothing. When you do speak, the safe ground is the effect on you — you always have standing to describe your own experience — and a light version is almost always the right size.\n\nMindset: you can always describe your own experience. You cannot always assess someone else's work.",
      inputs: [
        { q: "A senior colleague does something that affects your work.", a: "\"Could I ask for the brief in writing? I keep losing bits of it.\" [Say It Lightly]", bundle: 'pro' },
        { q: "You want to raise something with someone from another team.", a: "\"This might not be mine to say, but it lands on us at this end.\" [Explain the Impact]", bundle: 'pro' },
        { q: "It is a friend's decision and none of your business.", a: "(say nothing) [Choose the Size]", bundle: 'pro' },
        { q: "You have standing only for the part that affects you.", a: "\"I can only speak for my bit — from here it arrives too late to use.\" [Explain the Impact]", bundle: 'pro' },
        { q: "You want to raise something upwards without it sounding like a complaint.", a: "\"Would it help if I flagged the ones that come in after Thursday? Then you'd see it too.\" [Suggest What to Do Instead]", bundle: 'pro' },
      ]
    },
    {
      name: "Nothing Changes",
      guideFront: "What makes this criticism hard?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "They took it well, agreed with everything, and the behaviour is exactly the same three weeks later. This is where most people give up and start working around the person instead.\n\nRaising it a second time is uncomfortable and usually necessary, and the second conversation should be different from the first: shorter, more direct, and explicit that this is the second time. Softening it again teaches that the deadline is negotiable.\n\nMindset: name that it is the second conversation. That fact is the new information.",
      inputs: [
        { q: "Nothing has changed three weeks after a good conversation.", a: "\"We talked about this three weeks ago and it's been the same since.\" [Name the Behaviour]", bundle: 'pro' },
        { q: "You are about to soften it exactly as you did the first time.", a: "\"I'm going to be blunter than last time, because last time didn't land.\" [Choose the Size]", bundle: 'pro' },
        { q: "They apologise again in the same words.", a: "\"I believe you mean it. What I need is a different result, not a different apology.\" [Suggest What to Do Instead]", bundle: 'pro' },
        { q: "You want to find out what is actually in the way.", a: "\"Something's stopping this and I don't think it's willingness. What is it?\" [Suggest What to Do Instead]", bundle: 'pro' },
        { q: "It is genuinely not going to change and you need to plan around it.", a: "\"Then let's assume Thursday won't happen and build the plan on Monday instead.\" [Suggest What to Do Instead]", bundle: 'pro' },
      ]
    },
  ],
  receivingfeedbackandcriticism: [
    {
      name: "Feedback That Feels Unfair",
      guideFront: "What kind of feedback is this?",
      guideBack: "A possible response, with the step in brackets.",
      description: "The criticism does not match what you think happened, and every instinct says to correct the record immediately.\n\nThe training is to notice that defending first destroys everything that comes after it. You run the same steps — you simply put your disagreement at Reflect Openly rather than at the front.\n\nWhat it usually sounds like:\n• \"You never...\" when you know you have.\n• A version of events with one detail plainly wrong.\n• Blame for something that was not yours.\n\nTwo ways through:\n1. Show You Understand Their View — describe how it looked to them without agreeing. \"I can see it feels one-sided from where you're standing.\"\n2. Reflect Openly — then say plainly that you see it differently. \"That's not quite how I remember it.\"\n\nMindset: being understood is not urgent. It will still be available in thirty seconds, and it lands far better once they feel heard.",
      inputs: [
        { q: "They say: \"You never help with any of this.\" You know you did last week.", a: "\"I can see it feels one-sided from where you're standing.\" (show you understand their view)", bundle: 'pro' },
        { q: "You are blamed for a delay that was not yours.", a: "\"I understand why it looked like it came from my end.\" (show you understand their view)", bundle: 'pro' },
        { q: "They say: \"You didn't tell anyone.\" You told them on Thursday.", a: "\"I did send it, but clearly it didn't reach you — that's the same problem.\" (reflect openly)", bundle: 'pro' },
        { q: "A criticism includes a detail that is simply wrong.", a: "\"That's not quite how I remember it, but I want to hear the rest.\" (reflect openly)", bundle: 'pro' },
        { q: "You are told you were dismissive when you thought you were being efficient.", a: "\"I see it differently, but I'd rather understand than argue about it.\" (reflect openly)", bundle: 'pro' },
      ]
    },
    {
      name: "Criticism in Front of Others",
      guideFront: "What kind of feedback is this?",
      guideBack: "A possible response, with the step in brackets.",
      description: "The feedback arrives with an audience — a meeting, a group chat, the dinner table — so you are managing the criticism and your face at the same time.\n\nThe training is to keep it short in public and move the real conversation somewhere private. Composure in the room is worth more than winning the point.\n\nWhat makes it hard:\n• Everyone is watching how you take it, not just what you say.\n• Defending yourself looks worse in public than in private.\n• Silence gets read as guilt.\n\nTwo ways through:\n1. The Short Response — take it calmly and briefly, in front of everyone. \"Fair — noted.\"\n2. Look Ahead — offer to pick it up properly afterwards. \"Let's go through it after this.\"\n\nMindset: the room is judging your composure, not the criticism. Taking it well in public is the whole win.",
      inputs: [
        { q: "Your manager criticises your work in front of the whole team.", a: "\"Fair — let me come back to you on that.\" (the short response)", bundle: 'pro' },
        { q: "A relative brings up your mistake at the dinner table.", a: "\"You're right, I did. Anyway, how was your week?\" (the short response)", bundle: 'pro' },
        { q: "Someone criticises your idea in a group chat everyone reads.", a: "\"Good points. I'll work through them and come back.\" (look ahead)", bundle: 'pro' },
        { q: "A colleague corrects you publicly in a meeting.", a: "\"Thanks — noted.\" (the short response)", bundle: 'pro' },
        { q: "You are told off in front of people and want to explain yourself.", a: "\"Let's go through it properly after this.\" (look ahead)", bundle: 'pro' },
      ]
    },
    {
      name: "Vague Criticism",
      guideFront: "What kind of feedback is this?",
      guideBack: "A possible response, with the step in brackets.",
      description: "You are told something is wrong but not what — \"you're just not really engaged\", \"the tone was off\". There is nothing concrete to acknowledge or act on.\n\nThe training is to resist filling the gap yourself. Guessing what they mean usually means agreeing to something they never actually said.\n\nWhat it usually sounds like:\n• \"Your attitude has been a bit off lately.\"\n• \"That wasn't really up to standard.\"\n• \"People have been saying things.\"\n\nTwo ways through:\n1. Reflect Openly — say honestly that you cannot use it yet. \"I want to take that seriously, but I'm not sure what you're seeing.\"\n2. Look Ahead — ask them into the fix so the next version is specific. \"Give me one example and I'll know what to change.\"\n\nMindset: asking what they mean is not a challenge. You cannot act on feedback you cannot picture.",
      inputs: [
        { q: "They say: \"Your attitude has been a bit off lately.\"", a: "\"I want to take that seriously, but I'm not sure what you're seeing.\" (reflect openly)", bundle: 'pro' },
        { q: "Your work is called \"not quite up to standard\" with no detail.", a: "\"I'd like to fix it — which part missed?\" (look ahead)", bundle: 'pro' },
        { q: "They say: \"People have been saying things.\"", a: "\"That's hard to do anything with as it stands.\" (reflect openly)", bundle: 'pro' },
        { q: "A colleague says your tone was wrong but will not say where.", a: "\"Next time it happens, will you flag the actual line?\" (look ahead)", bundle: 'pro' },
        { q: "You get a general complaint with no example attached.", a: "\"Give me one example and I'll know what to change.\" (look ahead)", bundle: 'pro' },
      ]
    },
    {
      name: "Feedback That Hits a Sore Spot",
      guideFront: "What kind of feedback is this?",
      guideBack: "A possible response, with the step in brackets.",
      description: "It is true, you already knew it, and hearing it out loud stings. This is the category where people either go cold or over-apologise.\n\nThe training is to stay in the conversation without collapsing into it. You are allowed to be affected and still be composed.\n\nWhat it usually sounds like:\n• The thing you have already been told by someone else.\n• The thing you already dislike about yourself.\n• Something said kindly that still lands hard.\n\nTwo ways through:\n1. Acknowledge the Feedback — one honest line, without the pile-on. \"Yeah. That one's not new to me.\"\n2. Reflect Openly — say it landed, and take the time you need. \"That landed. I need a minute with it.\"\n\nMindset: being affected is not losing. Over-apologising makes the other person manage your feelings instead of their own point.",
      inputs: [
        { q: "They name the exact thing you already dislike about yourself.", a: "\"Yeah. That one's not new to me.\" (acknowledge the feedback)", bundle: 'pro' },
        { q: "A friend says something true and kind and it still stings.", a: "\"That landed. I need a minute with it.\" (reflect openly)", bundle: 'pro' },
        { q: "You feel yourself starting to over-apologise.", a: "\"Thank you for saying it. I'll think about it properly.\" (acknowledge the feedback)", bundle: 'pro' },
        { q: "The criticism is something a previous manager said too.", a: "\"It's the second time I've heard that, which tells me something.\" (reflect openly)", bundle: 'pro' },
        { q: "You want to go cold and end the conversation.", a: "\"I'm taking it in, I'm just quiet. Give me a second.\" (reflect openly)", bundle: 'pro' },
      ]
    },
    {
      name: "The Same Criticism Again",
      guideFront: "What kind of feedback is this?",
      guideBack: "A possible response, with the step in brackets.",
      description: "You have had this feedback before, you said you would change it, and here it is again. Now there are two problems: the behaviour and the broken promise.\n\nThe training is to skip the parts that will sound hollow the second time. Another warm acknowledgement without a change will make it worse.\n\nWhat makes it different:\n• Your last promise is now evidence against you.\n• They are checking whether you take it seriously at all.\n• A repeated apology reads as a stalling tactic.\n\nTwo ways through:\n1. Reflect Openly — name the pattern out loud yourself, before they do. \"It's a pattern, not a one-off.\"\n2. Look Ahead — make the new promise smaller and more specific than the last one. \"I'll put it in the calendar rather than rely on remembering.\"\n\nMindset: naming your own repeat is what restores your credibility. Pretending it is the first time is what destroys it.",
      inputs: [
        { q: "They say: \"We talked about this last month.\"", a: "\"You did, and it happened again. That's on me.\" (reflect openly)", bundle: 'pro' },
        { q: "You promised to change this and have not.", a: "\"I said I'd fix it and I didn't. Let me make it smaller this time.\" (look ahead)", bundle: 'pro' },
        { q: "The same lateness comes up for the third time.", a: "\"It's a pattern, not a one-off. I can hear that.\" (reflect openly)", bundle: 'pro' },
        { q: "They sound tired of having to raise it.", a: "\"I'll put it in the calendar rather than rely on remembering.\" (look ahead)", bundle: 'pro' },
        { q: "You want to explain why this time was different.", a: "\"There's a reason, but it's the third reason, so it doesn't count for much.\" (reflect openly)", bundle: 'pro' },
      ]
    },
  ],
  apologizing1: [
    {
      name: "The Non-Apology",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "\"I'm sorry you feel that way.\" \"I'm sorry, but you did the same thing.\" \"Fine, I'm sorry.\" All three contain the word sorry and none is an apology, and everybody can hear the difference immediately.\n\nWhat they share is that they protect you. The first relocates the problem into the other person's feelings, the second trades, and the third apologises for having to be in the conversation.\n\nThe fix is always the same: apologise for the thing you did, with no conditional and nothing attached.\n\nMindset: if the sentence protects you, it is not an apology yet.",
      inputs: [
        { q: "You are about to say \"I'm sorry you feel that way\".", a: "\"I'm sorry I said it. Not that you're upset — that I said it.\" [Apologise for What You Did]", bundle: 'pro' },
        { q: "You are about to say \"sorry, but you did too\".", a: "\"I'm sorry for my part. We can do the rest separately.\" [Apologise for What You Did]", bundle: 'pro' },
        { q: "You said \"fine, I'm sorry\" in the middle of an argument.", a: "\"That wasn't an apology, that was me wanting to stop. Let me do it properly.\" [Choose the Size]", bundle: 'pro' },
        { q: "You are about to say \"sorry if that upset anyone\".", a: "\"I'm sorry for the message I sent yesterday. It was unfair to Priya.\" [Apologise for What You Did]", bundle: 'pro' },
        { q: "You catch yourself explaining instead of apologising.", a: "\"I'm doing the explanation again. The short version is I was wrong.\" [Say Sorry Simply]", bundle: 'pro' },
      ]
    },
    {
      name: "Over-Apologising",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Apologising four times, at length, for something small. It feels like taking responsibility and usually does the opposite — the other person ends up reassuring you, which quietly makes your mistake into their job.\n\nIt also devalues the currency. Someone who apologises constantly is harder to believe when it matters, because the size of the apology has stopped carrying information.\n\nMindset: once, properly, and then stop. Repeating it is asking to be forgiven again.",
      inputs: [
        { q: "You have apologised twice and they have said it is fine twice.", a: "\"Right — I'll stop apologising. Thanks.\" [Say Sorry Simply]", bundle: 'pro' },
        { q: "You are about to apologise a third time for the same thing.", a: "\"I've said sorry and I meant it. I'll leave it there.\" [Choose the Size]", bundle: 'pro' },
        { q: "They have started reassuring you and comforting you.", a: "\"You don't need to make me feel better about it. It was my mistake.\" [Apologise for What You Did]", bundle: 'pro' },
        { q: "You are apologising for something that affected nobody.", a: "(say nothing) [Choose the Size]", bundle: 'pro' },
        { q: "You apologise reflexively for things that are not yours.", a: "\"Actually, that one wasn't me. But it's sorted now.\" [Choose the Size]", bundle: 'pro' },
      ]
    },
    {
      name: "The Plan Is Empty",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "\"I'll be more careful.\" \"It won't happen again.\" \"I'll try harder.\" All of them sound like a commitment and none can be checked, which means neither of you will know whether anything changed.\n\nTo someone who has heard you apologise before, an uncheckable plan is the same as no plan. A small specific one is worth far more, precisely because it can be seen to happen or not happen.\n\nMindset: promise something someone could watch you do.",
      inputs: [
        { q: "You are about to say \"I'll be more careful\".", a: "\"I'll put it in the calendar while we're talking. That's the actual change.\" [Say What You'll Do Differently]", bundle: 'pro' },
        { q: "You are about to say \"it won't happen again\".", a: "\"It might. What I'll do is text you the moment I know I'm running late.\" [Say What You'll Do Differently]", bundle: 'pro' },
        { q: "They ask what will be different this time.", a: "\"A reminder two days before. Last time it was in my head, which is why it failed.\" [Say What You'll Do Differently]", bundle: 'pro' },
        { q: "You genuinely do not know how to prevent it.", a: "\"I don't know what would stop it. Have you got an idea? I'd take it.\" [Say What You'll Do Differently]", bundle: 'pro' },
        { q: "You made a plan last time and did not keep it.", a: "\"I said that last time and didn't do it. So this time it's written down.\" [Say What You'll Do Differently]", bundle: 'pro' },
      ]
    },
    {
      name: "You Do Not Think You Were Wrong",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "You have annoyed someone and you still think your position was right. This is handled worst by apologising vaguely for nothing in particular in the hope that it passes.\n\nThere is nearly always something genuinely yours: the timing, the tone, the audience, the fact that they found out from someone else. Apologise for that specifically and hold the substance separately. It is honest, and it works far better than an apology you do not mean.\n\nIf literally nothing is yours, say that kindly rather than performing regret you do not feel.\n\nMindset: apologise for your part precisely. Do not apologise for all of it to end the conversation.",
      inputs: [
        { q: "You stand by the decision but not how you said it.", a: "\"The tone was wrong and I'm sorry for it. The decision I'd still make.\" [Apologise for What You Did]", bundle: 'pro' },
        { q: "You were right but they heard it from someone else.", a: "\"You should have heard it from me first. That part's on me.\" [Apologise for What You Did]", bundle: 'pro' },
        { q: "You are about to apologise for something you do not regret.", a: "\"I can see it landed badly. I'm not going to pretend I'd do it differently.\" [Choose the Size]", bundle: 'pro' },
        { q: "They want you to agree you were wrong and you do not.", a: "\"I don't think I was wrong about the thing. I do think I handled it badly.\" [Apologise for What You Did]", bundle: 'pro' },
        { q: "Nothing about it is yours at all.", a: "\"I'm sorry it's landed like this. I don't think I did anything I'd change, and I'd rather say that.\" [Choose the Size]", bundle: 'pro' },
      ]
    },
    {
      name: "It Needs More Than This",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Some apologies are beyond the everyday version. Somebody was genuinely hurt, it has been sitting there for days, or the same thing has happened repeatedly and a quick sorry has already been tried.\n\nThe short version is not wrong in those cases — it is simply not enough, and delivering it more sincerely does not fix that. What is missing is showing that you understood what it was like for them before you apologise at all.\n\nMindset: when the short version keeps bouncing off, the problem is the size, not the sincerity.",
      inputs: [
        { q: "You have apologised twice and it clearly has not landed.", a: "\"Saying sorry isn't doing it. Can we sit down with it properly?\" [Choose the Size]", bundle: 'pro' },
        { q: "They have been off with you for several days.", a: "\"This has been sitting there since Friday. I'd rather talk about it than leave it.\" [Choose the Size]", bundle: 'pro' },
        { q: "Someone was genuinely hurt rather than inconvenienced.", a: "\"This is bigger than a quick sorry. Have you got ten minutes?\" [Choose the Size]", bundle: 'pro' },
        { q: "You are about to give the short version to something serious.", a: "\"I'm not going to do this in a corridor. Can I find you later?\" [Choose the Size]", bundle: 'pro' },
        { q: "The same thing has happened three times.", a: "\"I keep apologising for this and it keeps happening. That's the thing to talk about.\" [Say What You'll Do Differently]", bundle: 'pro' },
      ]
    },
  ],
  agreeing: [
    {
      name: "You Agree But Have Nothing to Add",
      guideFront: "What makes this one hard to agree with?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "You genuinely share the opinion, but your head is empty — no story, no clever reason, nothing.\n\nThe training is to notice that this is the most common agreeing problem, and that it has a standard fix: a reason is always available even when a story is not. You do not need material, you need one clause.\n\nWhat it usually feels like:\n• \"Yeah, totally\" and then a blank.\n• Wanting to agree but not trusting it is enough.\n• Waiting for something good enough to say, and losing the moment.\n\nTwo ways through:\n1. Give an Explanation — say why it makes sense, in one clause. \"Agreed, it just makes everything calmer.\"\n2. Signal the Agreement — if even that will not come, at least land the signal warmly. \"Couldn't agree more.\"\n\nMindset: a warm signal plus one short reason is a complete contribution. Nobody is grading the reason.",
      inputs: [
        { q: "You agree with an opinion but have no experience of it at all.", a: "\"Agreed — it just makes everything calmer, doesn't it?\" (give an explanation)", bundle: 'pro' },
        { q: "You say \"yeah, totally\" and then go blank.", a: "\"Especially when you're tired — that's when it really shows.\" (give an explanation)", bundle: 'pro' },
        { q: "You are waiting for something impressive to say.", a: "\"Couldn't agree more, honestly.\" (signal the agreement)", bundle: 'pro' },
        { q: "Someone shares an opinion about a hobby you have never tried.", a: "\"That makes sense to me. You'd get a proper break from everything else.\" (give an explanation)", bundle: 'pro' },
        { q: "The opinion is one you hold but have never thought about.", a: "\"Same here. I've never questioned it, which probably says something.\" (signal the agreement)", bundle: 'pro' },
      ]
    },
    {
      name: "You Only Half Agree",
      guideFront: "What makes this one hard to agree with?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "You agree with part of it and not the rest, and a full-throated \"totally!\" would be a small lie.\n\nThe training is to find the part you actually mean and agree with that honestly, instead of either faking it or swinging into disagreement. Narrowing is a real agreeing move, not a dodge.\n\nWhat it usually sounds like:\n• An opinion stated more strongly than you would put it.\n• A rule that holds in some situations and not others.\n• Something true of them but not of everyone.\n\nTwo ways through:\n1. Give an Explanation, narrowed — \"I agree, especially when...\" names exactly where you are with them.\n2. Add a Personal Experience — tell the part of it you have actually lived, which is honest by definition.\n\nNote: if you do not agree at all, this is the wrong pack — that is a different skill.\n\nMindset: partial agreement said honestly is worth more than full agreement said vaguely. \"Especially when\" is a whole sentence of honesty.",
      inputs: [
        { q: "Someone says: \"You should always listen to your teacher.\" You'd say usually, not always.", a: "\"I agree, especially when it's something they've actually done themselves.\" (give an explanation)", bundle: 'pro' },
        { q: "The opinion is stated more strongly than you would put it.", a: "\"I'm with you on most of that — definitely on the mornings part.\" (give an explanation)", bundle: 'pro' },
        { q: "Someone says: \"You only need six hours of sleep.\" It works for them, not you.", a: "\"It clearly works for you. I've found it depends on how regular they are.\" (add a personal experience)", bundle: 'pro' },
        { q: "You agree with the feeling but not the rule.", a: "\"The feeling, absolutely. I've had exactly that on a Sunday afternoon.\" (add a personal experience)", bundle: 'pro' },
        { q: "A claim is true in some situations but not all.", a: "\"Agreed, especially at home. Work's a bit different.\" (give an explanation)", bundle: 'pro' },
      ]
    },
    {
      name: "Agreeing Without Sounding Like an Echo",
      guideFront: "What makes this one hard to agree with?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "You have said \"yeah\", \"exactly\" and \"so true\" three times in a row, and it has started to sound like you are not listening.\n\nThe training is to notice the pattern in yourself. Pure signalling is warm the first time and empty by the third — every agreement needs something of yours attached.\n\nWhat it usually sounds like:\n• Three signals in a row with nothing between them.\n• Agreeing so fast it reads as automatic.\n• The other person carrying the whole conversation.\n\nTwo ways through:\n1. Add a Personal Experience — the fastest way to prove you are actually in it.\n2. Expand the Idea — a new angle can only come from someone who was listening.\n\nMindset: the signal is the doorway, not the room. If you only ever signal, you are being agreeable rather than agreeing.",
      inputs: [
        { q: "You have said \"exactly\" three times in a row.", a: "\"Same, actually — I did that for years and it stuck.\" (add a personal experience)", bundle: 'pro' },
        { q: "Your agreement is starting to sound automatic.", a: "\"And it's probably why nobody sleeps properly in summer.\" (expand the idea)", bundle: 'pro' },
        { q: "The other person is carrying the whole conversation.", a: "\"That's happened to me too. Last winter, exactly the same thing.\" (add a personal experience)", bundle: 'pro' },
        { q: "You agree so quickly it reads as not listening.", a: "\"Yes — and the same goes for weekends, not just weekdays.\" (expand the idea)", bundle: 'pro' },
        { q: "You realise you have added nothing for several minutes.", a: "\"I've done that for about ten years now and never questioned it.\" (add a personal experience)", bundle: 'pro' },
      ]
    },
    {
      name: "An Opinion You Know Nothing About",
      guideFront: "What makes this one hard to agree with?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "You agree in spirit — they sound right and you have no reason to doubt them — but the subject is completely outside your experience.\n\nThe training is to agree without pretending to knowledge you do not have. Faking familiarity is the one thing that will get caught.\n\nWhat it usually sounds like:\n• A hobby, a job or a place you have no contact with.\n• A claim you cannot evaluate but instinctively believe.\n• Something everyone else in the room clearly knows about.\n\nTwo ways through:\n1. Signal the Agreement — honest warmth needs no expertise. \"That sounds exactly right.\"\n2. Expand the Idea — agree with the shape of it and apply it to something you DO know.\n\nMindset: you can agree with a principle without knowing the field. Just do not dress it up as experience.",
      inputs: [
        { q: "The opinion is about a hobby you have never tried.", a: "\"That sounds exactly right, from everything I've heard.\" (signal the agreement)", bundle: 'pro' },
        { q: "Everyone else in the room clearly knows the subject and you don't.", a: "\"I'll take your word for it — and it's the same in my line of work.\" (expand the idea)", bundle: 'pro' },
        { q: "You believe them but cannot judge the claim.", a: "\"I'd guess you're right. It matches how most things work.\" (signal the agreement)", bundle: 'pro' },
        { q: "You are tempted to pretend you know the field.", a: "\"I don't know it well, but that principle holds everywhere I've seen it.\" (expand the idea)", bundle: 'pro' },
        { q: "The opinion is about a job you have no contact with.", a: "\"Makes complete sense. I imagine it's like that anywhere with deadlines.\" (expand the idea)", bundle: 'pro' },
      ]
    },
    {
      name: "Agreeing in a Group",
      guideFront: "What makes this one hard to agree with?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Three people have already agreed, and yours would be the fourth \"yes\" in a row — which adds nothing and slightly flattens the conversation.\n\nThe training is to skip the signal that has already been said three times and go straight to a contribution nobody else has made.\n\nWhat makes it different:\n• The signal has been used up by the people before you.\n• Repeating the same reason makes the whole group sound like one person.\n• Silence, on the other hand, reads as disagreement.\n\nTwo ways through:\n1. Expand the Idea — the only move that is guaranteed not to repeat anyone.\n2. Add a Personal Experience — yours is yours, so it cannot have been said already.\n\nMindset: in a group, the value of agreeing is in what you add, not in the agreeing itself.",
      inputs: [
        { q: "Three people have already said they agree.", a: "\"And the same goes for weekends, which nobody's mentioned.\" (expand the idea)", bundle: 'pro' },
        { q: "The reason you were going to give has just been given.", a: "\"That happened to me last month, almost exactly.\" (add a personal experience)", bundle: 'pro' },
        { q: "You would be the fourth person to say \"so true\".", a: "\"It's the only exercise you can do while thinking about something else.\" (expand the idea)", bundle: 'pro' },
        { q: "Staying quiet would look like you disagree.", a: "\"Same here — I've done it for years without thinking about it.\" (add a personal experience)", bundle: 'pro' },
        { q: "The whole table agrees and the topic is going quiet.", a: "\"Which is probably why nobody sleeps properly in summer.\" (expand the idea)", bundle: 'pro' },
      ]
    },
  ],
  disagreeing: [
    {
      name: "They Take It Personally",
      guideFront: "What kind of trouble is this disagreement in?",
      guideBack: "A possible response, with the move in brackets.",
      description: "You disagreed with an idea and they heard a judgement about them. The conversation stops being about the question and starts being about the relationship.\n\nThe move is to separate the two explicitly — say what you are not saying — and then return to the point without dropping it.\n\nMindset: naming the split out loud usually works. People rarely think to do it.",
      inputs: [
        { q: "They say, \"So you think I'm wrong about everything.\"", a: "\"Not everything, and not you. This one thing, and I might be the wrong one.\" [Separate person from point]", bundle: 'pro' },
        { q: "They go quiet and stiff after your disagreement.", a: "\"I've come across sharper than I meant. I'm arguing with the plan, not you.\" [Repair, then continue]", bundle: 'pro' },
        { q: "They say, \"You always do this.\"", a: "\"That's worth talking about separately. Can we finish this bit first?\" [Park it, don't drop it]", bundle: 'pro' },
        { q: "They start defending themselves rather than the idea.", a: "\"You don't need to defend yourself here — I'm only stuck on the date.\" [Narrow the target]", bundle: 'pro' },
        { q: "You realise your disagreement sounded like a correction.", a: "\"Let me say that better. I think it works, and I'd start it later.\" [Restate more precisely]", bundle: 'pro' },
      ]
    },
    {
      name: "You Are Outnumbered",
      guideFront: "What kind of trouble is this disagreement in?",
      guideBack: "A possible response, with the move in brackets.",
      description: "Everyone else in the room has agreed and you have not. The pull to stay quiet is strong, and the disagreement gets more awkward the longer you leave it.\n\nSignal early and keep it short. A single clear sentence is much easier for a group to absorb than a late, elaborate objection.\n\nMindset: you are adding information the room does not have. That is worth ten seconds of discomfort.",
      inputs: [
        { q: "Everyone has nodded and you have not.", a: "\"Can I be the awkward one? I'm not sure about this.\" [Signal early]", bundle: 'pro' },
        { q: "You have left it too long and the topic has moved on.", a: "\"Sorry to go back — I never said what I actually think about the last one.\" [Return to it]", bundle: 'pro' },
        { q: "They ask if everyone is agreed and you are not.", a: "\"Not quite. One thing I'd want to flag before we go ahead.\" [Answer honestly]", bundle: 'pro' },
        { q: "You have said your piece and the room has moved past it.", a: "\"That's fine — I've said it, and I'm happy to go with the group.\" [Disagree and commit]", bundle: 'pro' },
        { q: "Someone says \"we all think this\".", a: "\"Most of us. I'd put myself down as unconvinced rather than opposed.\" [Correct the record]", bundle: 'pro' },
      ]
    },
    {
      name: "They Will Not Give a Reason",
      guideFront: "What kind of trouble is this disagreement in?",
      guideBack: "A possible response, with the move in brackets.",
      description: "They restate their position more firmly instead of explaining it. Repeating your own reason back at them produces the same loop at a higher volume.\n\nAsk a question instead. A genuine question about their reasoning changes the shape of the exchange more reliably than any further argument of yours.\n\nMindset: curiosity is the only thing that reliably unsticks a stuck disagreement.",
      inputs: [
        { q: "They say \"it just is\" for the second time.", a: "\"What would you point at if you had to convince someone neutral?\" [Ask for the reason]", bundle: 'pro' },
        { q: "They repeat their point louder.", a: "\"I've got that bit. What's the part I'm missing?\" [Ask what you're missing]", bundle: 'pro' },
        { q: "They say \"everyone knows that\".", a: "\"Maybe I don't. Talk me through it — where does it come from?\" [Ask plainly]", bundle: 'pro' },
        { q: "You are both restating for the third time.", a: "\"We're going round. What would change your mind?\" [Change the question]", bundle: 'pro' },
        { q: "They dismiss your reason without answering it.", a: "\"Which part of that doesn't hold, for you?\" [Ask them to be specific]", bundle: 'pro' },
      ]
    },
    {
      name: "You Might Be Wrong",
      guideFront: "What kind of trouble is this disagreement in?",
      guideBack: "A possible response, with the move in brackets.",
      description: "Partway through you notice your reason is weaker than you thought, or they have said something you cannot answer. Continuing to argue from momentum is how people end up defending positions they no longer hold.\n\nSay so. Concede the part that has gone, keep the part that has not, and be specific about which is which.\n\nMindset: changing your mind in public is the thing that makes people trust your agreement later.",
      inputs: [
        { q: "Their answer is better than your objection.", a: "\"That's a fair answer. I'll drop that one.\" [Concede cleanly]", bundle: 'pro' },
        { q: "You realise you argued from something you had not checked.", a: "\"I assumed that and I haven't actually checked. Let me not argue from it.\" [Withdraw the weak reason]", bundle: 'pro' },
        { q: "Half your objection stands and half does not.", a: "\"You've answered the cost part. The timing part I'd still push on.\" [Split it]", bundle: 'pro' },
        { q: "You want to keep arguing mainly because you started.", a: "\"Honestly, I think I'm just defending my first answer. Ignore me on this one.\" [Name it and stop]", bundle: 'pro' },
        { q: "They ask if you are convinced.", a: "\"Mostly. Give me till tomorrow — I want to sit with it.\" [Ask for time]", bundle: 'pro' },
      ]
    },
    {
      name: "It Is Not Worth It",
      guideFront: "What kind of trouble is this disagreement in?",
      guideBack: "A possible response, with the move in brackets.",
      description: "Not every difference of view needs airing. Some are too small, some are on someone else's territory, and some come at a moment when nobody has the energy.\n\nChoosing not to disagree is a legitimate move, but it works best when it is a choice rather than an avoidance. And it should be a real letting go, not a silence that turns into resentment.\n\nMindset: pick the disagreements that change something.",
      inputs: [
        { q: "The difference is real but changes nothing.", a: "\"I'd have done it differently, but it genuinely doesn't matter. Go ahead.\" [Let it go openly]", bundle: 'pro' },
        { q: "It is their decision and their consequences.", a: "\"I'd not do it that way myself. Your call though, and I'll back it.\" [Defer clearly]", bundle: 'pro' },
        { q: "Everyone is tired and it is late.", a: "\"I've got a different view but it'll keep. Can we pick it up tomorrow?\" [Defer to a better moment]", bundle: 'pro' },
        { q: "You notice you are about to argue for the sake of it.", a: "\"Actually, ignore that. I'm arguing because it's Tuesday.\" [Withdraw honestly]", bundle: 'pro' },
        { q: "You said nothing and it is still bothering you a day later.", a: "\"Can I go back to yesterday? I said nothing and I should have.\" [Reopen it properly]", bundle: 'pro' },
      ]
    },
  ],
  persuasionandinfluence1: [
    {
      name: "They Have Not Engaged",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "They are not against it. They have not thought about it at all, and a well-made argument lands on nothing because there is no question in their mind yet.\n\nMake it their business before you make the case. A benefit that touches something they already care about, or a cost they are already paying without noticing, creates the question your reasoning can then answer.\n\nMindset: no interest is not disagreement, and it needs a different strategy.",
      inputs: [
        { q: "They shrug and say it makes no difference to them.", a: "\"It'd be the difference between a calm October and the usual one.\" [Show the Benefit to Them]", bundle: 'pro' },
        { q: "They say it is not really their area.", a: "\"It isn't. It's still twenty minutes of your week, every week.\" [Name the Cost of Doing Nothing]", bundle: 'pro' },
        { q: "They have not read what you sent.", a: "\"Short version: we redo the last section every single time.\" [Name the Cost of Doing Nothing]", bundle: 'pro' },
        { q: "They say they do not have a view.", a: "\"When we did it the other way in March it cost us a week. That's my whole case.\" [Tell What Happened to You]", bundle: 'pro' },
        { q: "You have been making the case to someone with no stake.", a: "\"There's genuinely nothing in it for you. I'm asking as a favour.\" [Show the Benefit to Them]", bundle: 'pro' },
      ]
    },
    {
      name: "They Think Nothing Is the Safe Option",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Every proposal is compared against carrying on as before, and carrying on as before is almost always imagined as free. It is not — it is simply a cost everyone has stopped noticing.\n\nMaking the current cost visible is often the whole argument, and it changes the question from whether the new thing is worth doing to whether it is worth more than what is already being spent.\n\nMindset: name what the status quo costs, plainly, and let them compare properly.",
      inputs: [
        { q: "They say the current way works fine.", a: "\"It works because someone rescues it every time. That's the cost.\" [Name the Cost of Doing Nothing]", bundle: 'pro' },
        { q: "They say there is no urgency.", a: "\"There isn't. It's an afternoon a month, and it has been for two years.\" [Name the Cost of Doing Nothing]", bundle: 'pro' },
        { q: "Nobody wants to reopen the question.", a: "\"If we leave it, we'll be having this conversation again in March.\" [Name the Cost of Doing Nothing]", bundle: 'pro' },
        { q: "You are about to overstate the cost.", a: "\"It's not a crisis. It's twenty minutes a week and it never stops.\" [Name the Cost of Doing Nothing]", bundle: 'pro' },
        { q: "The cost lands on someone not in the room.", a: "\"We don't feel it. The night team does, and they can't change it.\" [Name the Cost of Doing Nothing]", bundle: 'pro' },
      ]
    },
    {
      name: "They Doubt It Would Work",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "They accept there is a problem and do not believe your solution would fix it, or that it is realistic at all.\n\nArgument does not shift this — evidence does. A first-hand account asks them to concede nothing, which is exactly why it moves people who have already resisted your reasoning.\n\nMindset: when the argument has failed, stop arguing and say what happened.",
      inputs: [
        { q: "They say it sounds good in theory.", a: "\"The team upstairs switched last year and they've not gone back.\" [Tell What Happened to You]", bundle: 'pro' },
        { q: "They think the change would be enormous.", a: "\"I moved across in a morning. I'd expected a week.\" [Tell What Happened to You]", bundle: 'pro' },
        { q: "They say it has been tried before.", a: "\"It was, and it failed on the handover. That's the bit that's different now.\" [Give a Reason]", bundle: 'pro' },
        { q: "They ask whether you have actually seen it work.", a: "\"I did it in the spring. It took half the time.\" [Tell What Happened to You]", bundle: 'pro' },
        { q: "They say your situation was different.", a: "\"It was, in some ways. The part that's the same is the timing.\" [Tell What Happened to You]", bundle: 'pro' },
      ]
    },
    {
      name: "You Are the One Who Should Move",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "You set out to persuade and they turn out to be right, or they raise something you cannot answer.\n\nContinuing from momentum is how people end up defending positions they no longer hold. Saying so plainly costs nothing and is the thing that makes your next argument worth listening to.\n\nMindset: changing your mind in public is what makes people willing to be persuaded by you.",
      inputs: [
        { q: "They raise something you did not know.", a: "\"Then the reason I've been giving doesn't hold. I didn't know that.\" [Give a Reason]", bundle: 'pro' },
        { q: "You notice you are arguing because you started.", a: "\"I think I'm defending my first answer rather than the idea.\" [Give a Reason]", bundle: 'pro' },
        { q: "Half your case survives and half does not.", a: "\"You've answered the cost part. The timing I'd still push on.\" [Give a Reason]", bundle: 'pro' },
        { q: "Their version turns out to be cheaper for them.", a: "\"Yours costs you less and I hadn't weighed that properly.\" [Show the Benefit to Them]", bundle: 'pro' },
        { q: "You want to concede without abandoning it entirely.", a: "\"You're right for this year. It'll still be an afternoon a month until we look again.\" [Name the Cost of Doing Nothing]", bundle: 'pro' },
      ]
    },
    {
      name: "The Case Is Not Honest",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Persuasion goes wrong long before it becomes manipulation. It starts with a number you have not checked, a benefit you have invented for them, or a cost you have made sound worse than it is.\n\nEach of those works in the moment and fails permanently when checked, because it takes everything true you said with it.\n\nMindset: say the version you would be comfortable having them overhear you explain.",
      inputs: [
        { q: "A statistic would really help and you do not have one.", a: "\"I don't have a figure. What I do have is what happened to us in April.\" [Give a Reason]", bundle: 'pro' },
        { q: "You are about to inflate what the current situation costs.", a: "\"It's an afternoon a month. Not a disaster, just relentless.\" [Name the Cost of Doing Nothing]", bundle: 'pro' },
        { q: "You are inventing a benefit for them because you need one.", a: "\"There isn't much in it for you, honestly. I'm asking as a favour.\" [Show the Benefit to Them]", bundle: 'pro' },
        { q: "You are about to imply your experience was more typical than it was.", a: "\"That was one case, and my situation was easier than yours.\" [Tell What Happened to You]", bundle: 'pro' },
        { q: "You realise you have overstated something.", a: "\"I said that more strongly than I can back up. Let me put it accurately.\" [Give a Reason]", bundle: 'pro' },
      ]
    },
  ],
  persuasionandinfluence2: [
    {
      name: "They Are Defending Their Own Idea",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "They proposed something, you countered, and now the conversation is about whose idea wins rather than what should happen.\n\nOnce someone is defending, more argument makes them defend harder. Take the fight out by conceding the strongest part of their case and putting yours alongside rather than instead.\n\nMindset: leave their idea on the table. People argue for what you are trying to remove.",
      inputs: [
        { q: "They are defending their approach more firmly than before.", a: "\"Yours is simpler to explain, and that's not nothing. Can I put a middle version next to it?\" [Acknowledge Before Suggesting]", bundle: 'pro' },
        { q: "They have made a genuinely good point against you.", a: "\"That's the best argument against mine, and I don't have a great answer.\" [Acknowledge Before Suggesting]", bundle: 'pro' },
        { q: "You are about to say \"yes, but\".", a: "\"The bit you're right about is the cost.\" [Acknowledge Before Suggesting]", bundle: 'pro' },
        { q: "They ask why yours is better than theirs.", a: "\"Which would you rather be doing the week before the deadline?\" [Ask a Question Instead]", bundle: 'pro' },
        { q: "It has become about who is right.", a: "\"I'd rather get this right than be right. What would you do?\" [Let Them Decide]", bundle: 'pro' },
      ]
    },
    {
      name: "They Agree But Will Not Commit",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "They have said your idea sounds good, and nothing happens. This is one of the most common outcomes, and it is almost never about the argument.\n\nThe obstacle is the size of the commitment, or the effort of starting, or something they have not said. Shrink the ask until saying yes costs almost nothing, and find out what is really in the way.\n\nMindset: they already agree. Stop arguing and start removing the obstacle.",
      inputs: [
        { q: "They said it sounds good three weeks ago and nothing has moved.", a: "\"What's actually in the way? I don't think it's the idea.\" [Ask a Question Instead]", bundle: 'pro' },
        { q: "The change feels too big to start.", a: "\"Not the whole thing. One team, one month.\" [Make It Easy to Say Yes]", bundle: 'pro' },
        { q: "They are worried about being stuck with it.", a: "\"If it's worse in a month we go back. Nothing's permanent.\" [Make It Easy to Say Yes]", bundle: 'pro' },
        { q: "They need someone else's agreement first.", a: "\"Would it help if I wrote it up so you can just forward it?\" [Make It Easy to Say Yes]", bundle: 'pro' },
        { q: "You have raised it twice and nothing has happened.", a: "\"I'll stop asking. If you want it, tell me and I'll do the setting up.\" [Let Them Decide]", bundle: 'pro' },
      ]
    },
    {
      name: "The Question Is Really an Argument",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "A question with an obvious right answer is not a question. \"Don't you think it would be better if…\" is an argument with a question mark attached, and everyone can hear it.\n\nIt produces irritation rather than agreement, because the other person is being invited to agree that they were wrong. A real question — one whose answer you would accept even if it went against you — does the opposite.\n\nMindset: if you already know the answer you want, you are not asking.",
      inputs: [
        { q: "You are about to ask something with only one acceptable answer.", a: "\"What's your read on the timing? I've got a view but I'd rather hear yours.\" [Ask a Question Instead]", bundle: 'pro' },
        { q: "You want to open the question genuinely.", a: "\"If this goes wrong, where do you think it goes wrong?\" [Ask a Question Instead]", bundle: 'pro' },
        { q: "They have noticed you are steering.", a: "\"Fair — that was a leading question. Let me just say what I think instead.\" [Acknowledge Before Suggesting]", bundle: 'pro' },
        { q: "You genuinely do not know the answer.", a: "\"How would you do it, if it were yours?\" [Ask a Question Instead]", bundle: 'pro' },
        { q: "Their answer goes against you and you want to take it seriously.", a: "\"That's not what I expected. Say more — I might be wrong about this.\" [Acknowledge Before Suggesting]", bundle: 'pro' },
      ]
    },
    {
      name: "It Is Not Yours to Decide",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "It is their money, their job, their body, their family. You can have a view and you can say it once, and after that continuing is pressure rather than persuasion.\n\nSay what you think, make it easy for them to come back to you, and then genuinely stop. The strongest thing you can do for someone making their own decision is to be the person who did not push.\n\nMindset: one clear go, then hand it over and mean it.",
      inputs: [
        { q: "A friend is making a choice you think is a mistake.", a: "\"I'd do it differently, and it's completely your call.\" [Let Them Decide]", bundle: 'pro' },
        { q: "You have already said your piece once.", a: "(say nothing) [Let Them Decide]", bundle: 'pro' },
        { q: "They ask what you would do.", a: "\"I'd take the other one. But I'd not be the one living with it.\" [Let Them Decide]", bundle: 'pro' },
        { q: "You want to leave the door open without pressing.", a: "\"If you ever want to talk it through, I'm around. I'll not bring it up again.\" [Let Them Decide]", bundle: 'pro' },
        { q: "It is their area at work and not yours.", a: "\"It's your bit. I only wanted the other option said out loud once.\" [Acknowledge Before Suggesting]", bundle: 'pro' },
      ]
    },
    {
      name: "They Have Said No",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "A refusal handled badly closes the subject permanently. Arguing with a no confirms that the person was right to be defensive, and it makes the next conversation harder than this one.\n\nAccepting it out loud costs you nothing and keeps the door open. One honest question afterwards is fair; a second attempt at the same argument is not.\n\nMindset: how you take a no decides whether you get a second conversation.",
      inputs: [
        { q: "They have said no firmly.", a: "\"Fair enough. You know your own situation better than I do.\" [Acknowledge Before Suggesting]", bundle: 'pro' },
        { q: "You want to understand the refusal without challenging it.", a: "\"Can I ask what the deciding thing was? Not to argue — I'd just like to know.\" [Ask a Question Instead]", bundle: 'pro' },
        { q: "You think a smaller version might still work.", a: "\"Would a much smaller version be a different answer, or is it a no to all of it?\" [Make It Easy to Say Yes]", bundle: 'pro' },
        { q: "You are about to make the same case again.", a: "\"I've made my case and you've said no. I'll leave it.\" [Let Them Decide]", bundle: 'pro' },
        { q: "You want to leave it somewhere it could return.", a: "\"If anything changes, I'd still be up for it. No pressure either way.\" [Let Them Decide]", bundle: 'pro' },
      ]
    },
  ],
  negotiationandcompromise: [
    {
      name: "You Are Conceding Too Fast",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "You agreed quickly, and afterwards you notice you have given up something you minded about. It usually happens for a good reason — you did not want the conversation to be uncomfortable.\n\nThe cost lands later, as resentment about an agreement you technically consented to. Slowing down is not obstruction; it is the thing that makes the agreement genuine.\n\nMindset: an agreement you would resent in a month is not an agreement.",
      inputs: [
        { q: "You are about to agree just to end the discomfort.", a: "\"Give me a minute. I don't want to say yes and regret it on Thursday.\" [Refine It Together]", bundle: 'pro' },
        { q: "You have said fine three times without meaning it.", a: "\"I keep saying fine. It isn't quite — the timing's the problem.\" [State What You Want]", bundle: 'pro' },
        { q: "You have given ground on everything so far.", a: "\"I've moved on three things. This one I'd like to keep.\" [Say What You Cannot Move On]", bundle: 'pro' },
        { q: "You never actually said what you wanted.", a: "\"I've not said my own preference at all. It'd be October.\" [State What You Want]", bundle: 'pro' },
        { q: "You agreed last week and it has been bothering you since.", a: "\"Can we go back to Tuesday? I said yes too quickly.\" [Refine It Together]", bundle: 'pro' },
      ]
    },
    {
      name: "They Are Conceding Too Fast",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "The other person agrees to everything, and you cannot tell whether they are genuinely relaxed or just avoiding the conversation.\n\nTaking a fast yes at face value is tempting and expensive — an unhappy agreement usually resurfaces later as a missed deadline or a quiet withdrawal of effort.\n\nAsk once more, plainly. Someone who is genuinely relaxed will say so, and someone who is not has been given a way to say it.\n\nMindset: a quick yes is worth one more question.",
      inputs: [
        { q: "They agreed to everything without pushing back once.", a: "\"You've said yes to all of it. Is any of it actually awkward for you?\" [Refine It Together]", bundle: 'pro' },
        { q: "You suspect they are avoiding the discussion.", a: "\"I'd rather have the argument now than the silence in March.\" [Refine It Together]", bundle: 'pro' },
        { q: "They say it is fine but do not look it.", a: "\"Which part would you change if you could change one?\" [Ask What Matters Most]", bundle: 'pro' },
        { q: "They have not stated a preference at all.", a: "\"What would you want, if it were entirely your call?\" [Ask What Matters Most]", bundle: 'pro' },
        { q: "They keep saying whatever suits you.", a: "\"It genuinely doesn't suit me if it doesn't suit you. What's your version?\" [Show You Understood Theirs]", bundle: 'pro' },
      ]
    },
    {
      name: "The Midpoint Suits Nobody",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "You have split the difference and produced something neither of you wanted — half the budget, a date in the middle, a plan with the good parts of both removed.\n\nThis is what happens when a solution is built from positions rather than needs. Going back to what each of you actually cares about usually produces something better, and it is worth reopening a settled compromise to get it.\n\nMindset: a fair-looking outcome that nobody wants is not a compromise, it is a stalemate with a handshake.",
      inputs: [
        { q: "The midpoint gives neither of you what you wanted.", a: "\"This gives us both something we didn't ask for. Can we start again from what each of us needs?\" [Offer Something That Includes Both]", bundle: 'pro' },
        { q: "You are about to split the difference by reflex.", a: "\"Before we halve it — which half matters more to you?\" [Ask What Matters Most]", bundle: 'pro' },
        { q: "The agreed plan has the good parts of both removed.", a: "\"We've cut the bits that made either version work. Shall we pick one properly instead?\" [Offer Something That Includes Both]", bundle: 'pro' },
        { q: "You suspect you want different things and could both win.", a: "\"You want the venue and I want the date. We might not be in each other's way at all.\" [Ask What Matters Most]", bundle: 'pro' },
        { q: "A settled compromise is clearly not going to hold.", a: "\"That's not going to survive contact with February. Can we redo it?\" [Refine It Together]", bundle: 'pro' },
      ]
    },
    {
      name: "They Will Not Move at All",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "One person is not negotiating. They restate the same position, offer nothing, and treat the conversation as a formality.\n\nTwo things are worth trying: making the disagreement smaller by splitting it, and asking directly what would have to be true for anything to change. If neither works, saying plainly that this is not a negotiation is more useful than continuing to behave as though it were.\n\nMindset: name what is happening rather than keep playing along.",
      inputs: [
        { q: "They have repeated the same position four times.", a: "\"Is there any part of this that's actually open? I'd like to know before I keep going.\" [Ask What Matters Most]", bundle: 'pro' },
        { q: "They offer nothing in return for anything you give.", a: "\"I've moved twice and you haven't. Is there room anywhere?\" [Say What You Cannot Move On]", bundle: 'pro' },
        { q: "You want to find any piece that might be movable.", a: "\"Can we take just the timing and leave everything else as yours?\" [Split It Up]", bundle: 'pro' },
        { q: "The decision was clearly made before the conversation.", a: "\"It sounds like this is decided. I'd rather you said so than have me negotiating with myself.\" [Show You Understood Theirs]", bundle: 'pro' },
        { q: "You need to accept it and want to be clear about what happened.", a: "\"Fine, we'll do it your way. I want to be clear I'm agreeing to it, not persuaded by it.\" [State What You Want]", bundle: 'pro' },
      ]
    },
    {
      name: "It Should Not Be a Compromise",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Some things should not be met in the middle. A safety issue, a promise already made to someone else, something that would leave you doing work you think is wrong.\n\nThe strategies in this pack are for genuine trade-offs between two reasonable positions. Applied where a limit belongs, they become a polite route to giving in — and the other person often has no idea, because you never said it was a limit.\n\nMindset: if halfway is not acceptable, say so instead of negotiating towards it.",
      inputs: [
        { q: "The compromise on offer is genuinely unsafe or wrong.", a: "\"This one isn't a negotiation for me. I can't sign off on half of it.\" [Say What You Cannot Move On]", bundle: 'pro' },
        { q: "You have already promised something to someone else.", a: "\"I've committed to that elsewhere. It's not mine to trade.\" [Say What You Cannot Move On]", bundle: 'pro' },
        { q: "You are negotiating towards something you will not be able to live with.", a: "\"I should have said earlier — that part I'd have to say no to.\" [Say What You Cannot Move On]", bundle: 'pro' },
        { q: "You want to be clear it is a limit rather than a bargaining position.", a: "\"That's not an opening offer. That's where I actually stop.\" [Say What You Cannot Move On]", bundle: 'pro' },
        { q: "You have said everything is negotiable and it is not.", a: "\"I've been making it sound open. On the safety part it isn't.\" [Say What You Cannot Move On]", bundle: 'pro' },
      ]
    },
  ],
  brokenrecord: [
    {
      name: "You Are Wearing Down",
      guideFront: "What makes holding this line hard?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "The fifth repetition is harder than the first. The line starts getting longer, an apology creeps in, a reason appears, and eventually you hear yourself half-agreeing to something you had decided against.\n\nWhat has changed is not your position but your stamina — and the other person can hear it, which is why the pushing continues. The answer is to make the line shorter rather than longer, and to move to the endpoint sooner.\n\nMindset: when you feel yourself softening, shorten the sentence and close the conversation.",
      inputs: [
        { q: "Your line is getting longer with each repetition.", a: "\"No. Same answer.\" [Keep the Same Words]", bundle: 'pro' },
        { q: "You have started apologising repeatedly.", a: "\"I'm not able to do it.\" [Keep the Tone Flat]", bundle: 'pro' },
        { q: "You can feel yourself about to give in to end the discomfort.", a: "\"I'm going to leave it there before I say something I don't mean.\" [Know When to Stop]", bundle: 'pro' },
        { q: "You have started offering reasons you had decided not to give.", a: "\"I don't want to get into the reasons. The answer's no.\" [Don't Give Reasons]", bundle: 'pro' },
        { q: "You are on the sixth round.", a: "\"We're going in circles. It isn't going to change.\" [Know When to Stop]", bundle: 'pro' },
      ]
    },
    {
      name: "They Have a Genuinely New Point",
      guideFront: "What makes holding this line hard?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Occasionally the other person says something you had not considered, and it actually changes the picture. The technique is not supposed to make you immune to information.\n\nThe distinction is between a new *argument* and new *facts*. \"You're being unfair\" is an argument, and the technique handles it. \"The deadline moved to Friday, so it's two hours not two days\" is a fact, and refusing to hear it is stubbornness rather than assertiveness.\n\nChanging your mind for a good reason is not losing. Say so clearly, so it is a decision rather than a collapse.\n\nMindset: hold against pressure, update on information. Know which one you have just been given.",
      inputs: [
        { q: "They tell you something that genuinely changes the situation.", a: "\"That's new information and it does change it. Let me think.\" [Know When to Stop]", bundle: 'pro' },
        { q: "You are not sure whether it is new information or a new argument.", a: "\"Give me a second — is that different from what we started with?\" [Don't Follow the New Argument]", bundle: 'pro' },
        { q: "You have decided to change your answer.", a: "\"I've changed my mind, and it's because of the timing, not because you pushed.\" [Decide Your Line]", bundle: 'pro' },
        { q: "They present an opinion as though it were a new fact.", a: "\"That's still how you see it rather than something new. My answer's the same.\" [Don't Follow the New Argument]", bundle: 'pro' },
        { q: "You want time rather than an immediate answer.", a: "\"I'm not going to decide that here. I'll tell you tomorrow.\" [Know When to Stop]", bundle: 'pro' },
      ]
    },
    {
      name: "They Have Power Over You",
      guideFront: "What makes holding this line hard?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "A manager, a teacher, a landlord, anyone who can affect your circumstances. The technique still works, and the wording has to change: the same flat repetition that reads as calm between equals can read as insubordination when it goes upwards.\n\nTwo adjustments. Keep the acknowledgement slightly fuller, so it is clear you understand the position you are in. And where you would simply repeat, add what you *can* do, which turns holding a line into problem-solving rather than refusal.\n\nIf the request is one they are entitled to make, this is not the right technique at all.\n\nMindset: hold the position, soften the frame, and offer what you can.",
      inputs: [
        { q: "A manager wants you to take on something outside your hours.", a: "\"I understand it needs doing. I'm not able to do it this week — I could look at it Monday.\" [Offer a Workable Compromise]", bundle: 'pro' },
        { q: "They push again and you would normally just repeat.", a: "\"I do understand the pressure you're under. Monday is the earliest I can.\" [Acknowledge, Then Repeat]", bundle: 'pro' },
        { q: "You are asked why not, and would rather not say.", a: "\"I'd rather not go into the details, but I'm not available this week.\" [Don't Give Reasons]", bundle: 'pro' },
        { q: "The request is entirely reasonable and within their rights.", a: "\"That's fair — I'll do it.\" [Know When to Stop]", bundle: 'pro' },
        { q: "You are being pressured into something you think is wrong.", a: "\"I'm not comfortable doing that. I'd want to put my position in writing.\" [Decide Your Line]", bundle: 'pro' },
      ]
    },
    {
      name: "You Should Actually Move",
      guideFront: "What makes holding this line hard?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "The technique is for protecting a decision that is genuinely yours to make. It is not for avoiding accountability, and it is worth being honest with yourself about which one is happening.\n\nIf someone is asking you to keep a promise, correct a mistake, or take responsibility for something you did, repeating a line is not assertiveness — it is stonewalling, and it does real damage to the relationship.\n\nThe test: is this a request I am entitled to decline, or an obligation I am trying not to face?\n\nMindset: use it to hold your own decisions. Never use it to avoid a fair claim on you.",
      inputs: [
        { q: "They are asking you to do something you promised.", a: "\"You're right, I said I would. I'll do it this week.\" [Know When to Stop]", bundle: 'pro' },
        { q: "They are asking you to fix something you got wrong.", a: "\"That's fair. I'll sort it.\" [Know When to Stop]", bundle: 'pro' },
        { q: "You are repeating a line to avoid an uncomfortable truth.", a: "\"I'm holding a line I shouldn't be. You've got a point.\" [Know When to Stop]", bundle: 'pro' },
        { q: "The request is reasonable and you just do not fancy it.", a: "\"I don't want to, and that's not a good enough reason. I'll do it.\" [Know When to Stop]", bundle: 'pro' },
        { q: "It is genuinely your decision to make and you are sure.", a: "\"I've thought about it. My answer's no.\" [Decide Your Line]", bundle: 'pro' },
      ]
    },
    {
      name: "It Keeps Coming Back",
      guideFront: "What makes holding this line hard?",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "You held the line, closed the conversation, and a week later it is back. This is common with people who read a closed conversation as a pause.\n\nThe move is to shorten each subsequent round rather than restart the whole exchange. The first time deserved acknowledgement and a proper close; the fourth time deserves one sentence.\n\nIf it keeps returning, name the pattern rather than the request. That is a different conversation, and it is the one that actually needs having.\n\nMindset: shorter every time, and eventually talk about the asking rather than the ask.",
      inputs: [
        { q: "They raise it again a week later.", a: "\"Same answer as last week.\" [Keep the Same Words]", bundle: 'pro' },
        { q: "It comes up for the third time.", a: "\"I'm not going to keep answering this one.\" [Know When to Stop]", bundle: 'pro' },
        { q: "They say things might have changed.", a: "\"They haven't. My answer's the same.\" [Keep the Same Words]", bundle: 'pro' },
        { q: "You want to name the pattern rather than the request.", a: "\"I'd rather talk about why this keeps coming back than about the thing itself.\" [Know When to Stop]", bundle: 'pro' },
        { q: "They bring it up in front of other people.", a: "\"We've talked about this. I'll say the same thing I said before: no.\" [Keep the Tone Flat]", bundle: 'pro' },
      ]
    },
  ],
  respondingtopassiveaggression: [
    {
      name: "In Front of Other People",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "A remark made with an audience is a different situation from the same remark made privately. Naming it publicly puts the other person on the spot and often costs you more than the original comment did.\n\nThe reliable pattern: keep it light in the room, and take it up privately afterwards if it matters. The audience makes the surface strategies stronger and the under-the-surface ones riskier.\n\nMindset: light in public, direct in private.",
      inputs: [
        { q: "A colleague makes a pointed comment about your work in a meeting.", a: "\"I read the summary — which bit should I look at?\" [Answer It Straight]", bundle: 'pro' },
        { q: "You want to move the room on without engaging.", a: "\"Fair enough. Where had we got to?\" [Let It Go]", bundle: 'pro' },
        { q: "The group is waiting to see whether you react.", a: "\"Noted. Can we come back to the decision?\" [Hold Your Point]", bundle: 'pro' },
        { q: "You want to raise it afterwards rather than in the room.", a: "(say nothing now, and catch them privately later) [Let It Go]", bundle: 'pro' },
        { q: "You are with them privately after the meeting.", a: "\"That was uncomfortable with everyone there. If there's a problem I'd rather hear it directly.\" [Say How It Lands]", bundle: 'pro' },
      ]
    },
    {
      name: "They Have Power Over You",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "A manager, a teacher, a client. The under-the-surface strategies carry more risk here, and \"say how it lands\" can be heard as a complaint about a superior rather than a report about a remark.\n\nKeep to the surface strategies in the moment. If it needs raising, do it privately, keep it to one specific instance rather than a pattern, and stay on the effect on the work rather than on their behaviour.\n\nMindset: surface in the moment, specific and private if you raise it at all.",
      inputs: [
        { q: "A manager makes a sarcastic remark about your timing.", a: "\"It did run late. I'll get the next one in earlier.\" [Answer It Straight]", bundle: 'pro' },
        { q: "They deflect your question with a dig.", a: "\"I hear you. I still need to know whether Thursday works.\" [Hold Your Point]", bundle: 'pro' },
        { q: "You want to raise one specific instance privately.", a: "\"Could I mention something from yesterday? The comment in the meeting made it hard to answer.\" [Say How It Lands]", bundle: 'pro' },
        { q: "You cannot tell whether the remark was aimed at you.", a: "\"I might be reading that wrong — did you mean the report or the timing?\" [Ask What They Mean]", bundle: 'pro' },
        { q: "It is a bad day and nothing needs saying.", a: "(let it pass) [Let It Go]", bundle: 'pro' },
      ]
    },
    {
      name: "You Cannot Tell If It Was One",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Tone is unreliable, text is worse, and people differ enormously in how blunt they sound. A fair proportion of remarks read as passive-aggressive were nothing of the sort.\n\nAsking is the honest way through, and it works precisely because it does not accuse. If you are wrong, you have asked a harmless question; if you are right, you have opened the conversation without a fight.\n\nMindset: check before you conclude. The cost of asking is nothing.",
      inputs: [
        { q: "A message reads as sharp and you cannot tell.", a: "\"Can't read tone in messages — did you mean that as a nudge or am I imagining it?\" [Ask What They Mean]", bundle: 'pro' },
        { q: "Someone is blunt by nature and it might be nothing.", a: "\"Fair enough. I'll take a look at it.\" [Answer It Straight]", bundle: 'pro' },
        { q: "You are about to respond to something you may have imagined.", a: "\"I honestly can't tell how you meant that.\" [Ask What They Mean]", bundle: 'pro' },
        { q: "You want to leave room for having misread it.", a: "\"That came across as a dig — maybe I've got it wrong.\" [Say How It Lands]", bundle: 'pro' },
        { q: "It is ambiguous and it does not matter.", a: "(let it pass) [Let It Go]", bundle: 'pro' },
      ]
    },
    {
      name: "It Is a Pattern",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "One remark and a habit are different problems, and answering the habit one remark at a time never works — each individual instance is too small to justify a conversation, which is exactly what keeps it going.\n\nA pattern needs to be raised as a pattern: privately, calmly, with two or three specific examples rather than a general accusation, and with what you would prefer instead.\n\nMindset: raise the pattern, not the latest instance.",
      inputs: [
        { q: "It has happened repeatedly and you keep letting it go.", a: "\"This keeps happening and I keep saying nothing. I'd like to sort it properly.\" [Say How It Lands]", bundle: 'pro' },
        { q: "You want to raise it with specifics rather than a general charge.", a: "\"There were a couple this week — the meeting on Tuesday and the email. Both landed as digs.\" [Say How It Lands]", bundle: 'pro' },
        { q: "They say you are being oversensitive.", a: "\"Maybe I am. Is there something underneath it, though?\" [Ask What They Mean]", bundle: 'pro' },
        { q: "You suspect a real grievance is driving it.", a: "\"I think something's actually annoying you. I'd rather hear it straight.\" [Name the Feeling]", bundle: 'pro' },
        { q: "Nothing changes after you have raised it.", a: "\"I've said this before and it's carried on. I'm going to stop responding to it.\" [Hold Your Point]", bundle: 'pro' },
      ]
    },
    {
      name: "You Want to Hit Back",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "A well-aimed remark produces an immediate urge to answer in kind, and the reply is usually right there, fully formed.\n\nThe cost is that you have joined in. From that point it is no longer someone being unpleasant at you — it is two people doing it to each other, and there is no version of that conversation you leave feeling good about.\n\nMindset: the sharp reply is available all evening. You can always use it later, and you almost never will.",
      inputs: [
        { q: "You have a perfect cutting reply ready.", a: "\"Thanks. It did take longer than I expected.\" [Answer It Straight]", bundle: 'pro' },
        { q: "You can feel yourself about to match their tone.", a: "(say nothing for a beat, then) \"Anyway — where were we?\" [Let It Go]", bundle: 'pro' },
        { q: "You have already snapped back once.", a: "\"That was sharper than I meant. Can we start that again?\" [Say How It Lands]", bundle: 'pro' },
        { q: "You want to be honest that it landed rather than score a point.", a: "\"That one got me, I'll admit. What did you actually mean?\" [Ask What They Mean]", bundle: 'pro' },
        { q: "You are too wound up to answer well.", a: "\"I'm going to leave that for now. Let's talk later.\" [Let It Go]", bundle: 'pro' },
      ]
    },
  ],
  makingrequests: [
    {
      name: "You Have Been Hinting for Weeks",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "The request exists, but it has only ever come out as an observation, a sigh, or a question that was really a request in disguise. Nothing has changed, and by now there is a layer of resentment on top.\n\nThe resentment is the problem to handle first, because it will come out in the tone. The other person has not refused you — they have not been asked. From where they are standing, this is the first they have heard of it.\n\nAsk Instead of Hinting is the move. Make It Specific matters more than usual here, since a long-hinted request has usually grown vague in your own head too.\n\nMindset: say it once, plainly, without the history attached.",
      inputs: [
        { q: "You have mentioned it three times and nothing has changed.", a: "\"Could you do your washing up the same evening from now on?\" [Ask Instead of Hinting]", bundle: 'pro' },
        { q: "You can hear the resentment about to arrive in your voice.", a: "\"This is going to sound bigger than it is, and that's my fault for not saying it before.\" [Ask Instead of Hinting]", bundle: 'pro' },
        { q: "They say they had no idea it bothered you.", a: "\"That's fair — I hinted instead of asking. Could you handle Wednesdays?\" [Ask Instead of Hinting]", bundle: 'pro' },
        { q: "The request has gone vague in your own head.", a: "\"What I actually want is one thing: the bins out on Tuesday nights.\" [Make It Specific]", bundle: 'pro' },
        { q: "You want it to be genuinely open rather than an accusation.", a: "\"Say if that doesn't work for you — I'd rather sort it another way than have it simmer.\" [Leave Room to Refuse]", bundle: 'pro' },
      ]
    },
    {
      name: "They Have Power Over You",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "A manager, a landlord, a teacher, anyone whose no has consequences. The instinct is to pad the request until it is barely there, or to skip asking altogether and be quietly aggrieved.\n\nThe strategies do not change, but two of them carry more weight. Make It Specific, because a busy person with authority answers a clear question and postpones a vague one. And Follow Up Once, because your request is genuinely more likely to be lost than refused.\n\nLeaving room to refuse still applies, and it costs you nothing: they already have the power to say no. Saying it out loud only makes you easier to say yes to.\n\nMindset: a clear question from someone junior is a relief to answer, not a demand.",
      inputs: [
        { q: "You want to ask your manager for a change to your hours.", a: "\"Could I start at ten on Wednesdays from next month?\" [Ask Instead of Hinting]", bundle: 'pro' },
        { q: "They are busy and you have one minute of their attention.", a: "\"One hour later on Wednesdays, starting in June. That's the whole ask.\" [Make It Specific]", bundle: 'pro' },
        { q: "They ask why, and there is a real reason.", a: "\"It's the only way I can do the school run that day.\" [Give One Short Reason]", bundle: 'pro' },
        { q: "Two weeks have passed with no answer.", a: "\"Coming back to this once — is it a no, or a not yet?\" [Follow Up Once]", bundle: 'pro' },
        { q: "They say it is not possible.", a: "\"Understood. Thanks for giving me a straight answer.\" [Take a No Well]", bundle: 'pro' },
      ]
    },
    {
      name: "You Feel You Have Asked Too Much Lately",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "They have helped twice this month and you need something again. The usual response is to not ask, then manage badly, then be resentful that nobody offered.\n\nThe accounting is worth questioning. People generally track favours far more loosely than the person asking does, and being asked is not experienced as a debt by most of them.\n\nWhat genuinely helps is naming it once and then leaving the exit wide open. Say that you know you have asked a lot, ask anyway, and make the no easy.\n\nMindset: name it, ask anyway, and let them decide. That decision is not yours to make on their behalf.",
      inputs: [
        { q: "They have already helped twice this month.", a: "\"I've asked you a lot lately. Could you do one more thing on Saturday?\" [Ask Instead of Hinting]", bundle: 'pro' },
        { q: "You want them to feel able to say no this time.", a: "\"This is the one to say no to if you're going to say no to any of them.\" [Leave Room to Refuse]", bundle: 'pro' },
        { q: "You are keeping score in your head and it is making you awkward.", a: "\"Two hours, Saturday morning. That's it.\" [Make It Specific]", bundle: 'pro' },
        { q: "You would rather struggle than ask again.", a: "\"I'm asking now rather than after it's gone wrong.\" [Ask for Help]", bundle: 'pro' },
        { q: "They say no this time.", a: "\"Completely fair. You've done plenty.\" [Take a No Well]", bundle: 'pro' },
      ]
    },
    {
      name: "They Said No, or Said Nothing",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "The answer came back negative, or it did not come back at all. This is where requests turn into something else — a sulk, an argument, or a third message with an edge on it.\n\nSilence gets one follow-up, framed as a missed message rather than an accusation, and asking for a yes or no is often more useful than asking for the thing.\n\nA refusal gets one sentence and no renegotiation. Suggesting another day the moment they refuse is a second ask, and it makes the first no feel like it was not heard.\n\nMindset: you are protecting the next request, not rescuing this one.",
      inputs: [
        { q: "Three days of silence after your message.", a: "\"You've probably not seen this — did you get a chance to look?\" [Follow Up Once]", bundle: 'pro' },
        { q: "They refuse and you are already thinking of an alternative day.", a: "(that is a second ask — leave it for another time) [Take a No Well]", bundle: 'pro' },
        { q: "You want the decision more than the favour.", a: "\"Just tell me either way and I'll plan around it.\" [Follow Up Once]", bundle: 'pro' },
        { q: "You have followed up once and heard nothing at all.", a: "(treat it as a no and sort it another way) [Follow Up Once]", bundle: 'pro' },
        { q: "The no was clear and you can feel yourself going cold.", a: "\"Fair enough — thanks for saying. I'll sort it.\" [Take a No Well]", bundle: 'pro' },
      ]
    },
    {
      name: "It Is Not Actually a Request",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "The place where this pack is the wrong tool. Some things are not favours: work someone is paid to do, a promise already made to you, your share of something shared, or a rule being broken.\n\nWrapping those in the language of a request muddles them. \"Could you possibly, if it's not too much trouble, do the thing you agreed to in March\" invites a no that should not be available, and it teaches both of you that the agreement was optional.\n\nSay it plainly and drop the exit. Making It Specific still helps, and so does one short reason. Leave Room to Refuse does not — that is the part to remove.\n\nAnd the reverse case: if you are dressing up a demand as a request because you want the appearance of choice, that is worse than either. Ask, or state it. Not both.\n\nMindset: a favour can be refused. An agreement is not a favour. Know which one you are holding.",
      inputs: [
        { q: "They agreed to it in March and nothing has happened.", a: "\"This isn't a favour — we agreed it in March. When can you have it done?\" [Make It Specific]", bundle: 'pro' },
        { q: "You are softening something that is genuinely not optional.", a: "(take the exit out — \"say if you can't\" does not belong here) [Leave Room to Refuse]", bundle: 'pro' },
        { q: "It is their job and you are apologising for mentioning it.", a: "\"I need the figures by Thursday. It's not a favour, so I'll stop apologising.\" [Give One Short Reason]", bundle: 'pro' },
        { q: "You want their agreement but you have already decided.", a: "(say what is happening — do not dress a decision as a question) [Ask Instead of Hinting]", bundle: 'pro' },
        { q: "You genuinely are asking, and they think you are instructing.", a: "\"To be clear, this one is a real ask. No is available.\" [Leave Room to Refuse]", bundle: 'pro' },
      ]
    },
  ],
  sayingno: [
    {
      name: "The No Is Not Clear",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "\"I'm not sure I can.\" \"Probably not.\" \"Let me see.\" Each of these feels kinder than a no and is not an answer, which means the request comes back and the second refusal is harder than the first.\n\nThe kindest version of a no is the clearest one. It lets the person go and ask someone else, which is what they actually need.\n\nMindset: vagueness is not gentleness. It just moves the cost onto them.",
      inputs: [
        { q: "You said \"probably not\" and they are still expecting an answer.", a: "\"Sorry, I was vague. It's a no.\" [Say No Simply]", bundle: 'pro' },
        { q: "You are about to say \"I'll see what I can do\".", a: "\"I can't, I'm afraid.\" [Say No Simply]", bundle: 'pro' },
        { q: "You want it clear and still kind.", a: "\"I'm really sorry, but no.\" [Soften the Delivery]", bundle: 'pro' },
        { q: "You genuinely do need to check something first.", a: "\"Let me check and tell you by tomorrow.\" [Ask for Time First]", bundle: 'pro' },
        { q: "They have asked again because your answer was unclear.", a: "\"That's my fault — I wasn't clear. The answer's no.\" [Say No Simply]", bundle: 'pro' },
      ]
    },
    {
      name: "You Feel Guilty",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "The refusal is reasonable and you feel bad anyway. That feeling is not evidence that you should have said yes; it is usually just the discomfort of disappointing someone.\n\nThe useful separation: their disappointment is real, and it is not the same as you having done something wrong. A no can be entirely kind and still leave someone unhappy about it.\n\nMindset: you can leave someone disappointed without having wronged them.",
      inputs: [
        { q: "You said no and feel terrible about it.", a: "\"I know it's not what you wanted, and I still can't.\" [Show You Understand First]", bundle: 'pro' },
        { q: "You are about to change your answer to feel better.", a: "\"I'm going to stick with no. I'd not do it well anyway.\" [Say No Simply]", bundle: 'pro' },
        { q: "You want to acknowledge the cost to them.", a: "\"This does land badly for you and I'm sorry about that.\" [Show You Understand First]", bundle: 'pro' },
        { q: "You are apologising repeatedly for a reasonable no.", a: "\"I'll stop apologising. It's just a no.\" [Say No Simply]", bundle: 'pro' },
        { q: "There is something small you could genuinely offer.", a: "\"I can't do the day. I could do an hour on Sunday.\" [Offer What You Can Do]", bundle: 'pro' },
      ]
    },
    {
      name: "They Have Power Over You",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "A manager, a teacher, a client. Some requests from them are not really requests, and pretending otherwise helps nobody.\n\nWhere the answer genuinely is yours to give, the shape changes rather than the substance: fuller acknowledgement, a reason tied to the work rather than to preference, and an alternative that shows you are solving their problem rather than declining it.\n\nIf it is something they are entitled to ask, this is not the right pack.\n\nMindset: same answer, different framing — and be honest about which requests are actually optional.",
      inputs: [
        { q: "A manager asks you to take on something outside your capacity.", a: "\"I can do it, but not alongside the March work. Which would you rather I dropped?\" [Offer What You Can Do]", bundle: 'pro' },
        { q: "You want to decline without it sounding like refusal.", a: "\"I understand it needs doing. I can't get to it this week — Monday I could.\" [Show You Understand First]", bundle: 'pro' },
        { q: "You are asked in a meeting and want to answer properly.", a: "\"Let me look at what's already booked and come back to you today.\" [Ask for Time First]", bundle: 'pro' },
        { q: "The reason is personal and you would rather not explain.", a: "\"I'd rather not go into the details, but I'm not available this week.\" [Give a Short Reason]", bundle: 'pro' },
        { q: "The request is entirely within their rights.", a: "\"That's fair. I'll do it.\" [Say No Simply]", bundle: 'pro' },
      ]
    },
    {
      name: "You Have Said Yes Too Often",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "They are asking because you always say yes, and the pattern has become an expectation. A single no now lands harder than it would have the first time — which is exactly why saying it is overdue rather than unfair.\n\nNaming the pattern is optional but usually helps. It explains the change, which stops the no reading as a change of feeling about them.\n\nMindset: the difficulty of this no is the cost of the previous ones. It gets cheaper from here.",
      inputs: [
        { q: "They are surprised because you always say yes.", a: "\"I know, I usually do. This time I can't.\" [Say No Simply]", bundle: 'pro' },
        { q: "You want to name the change rather than let it look personal.", a: "\"I've been saying yes to too much and it's caught up with me.\" [Give a Short Reason]", bundle: 'pro' },
        { q: "They point out that you did it last time.", a: "\"I did, and I shouldn't have taken it on then either.\" [Give a Short Reason]", bundle: 'pro' },
        { q: "You want to change what is expected going forward.", a: "\"I'm going to be saying no to these more often. It's nothing to do with you.\" [Give a Short Reason]", bundle: 'pro' },
        { q: "You can feel the old reflex and want to stop it.", a: "\"Let me think about it rather than answering straight away.\" [Ask for Time First]", bundle: 'pro' },
      ]
    },
    {
      name: "You Should Actually Say Yes",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Not every request should be declined. Sometimes you promised, sometimes it is your job, sometimes the person has done a great deal for you and this is the one time they have asked.\n\nThe strategies in this pack are for requests you are entitled to refuse. Used on an obligation they become a polite way of avoiding something, and the other person often cannot tell the difference — which makes it worse rather than better.\n\nMindset: check whether this is a request you may decline or a commitment you are dodging.",
      inputs: [
        { q: "You promised and you are looking for a way out.", a: "\"I said I would, so I will.\" [Say No Simply]", bundle: 'pro' },
        { q: "It is genuinely part of what you agreed to do.", a: "\"That's fair enough. I'll get it done.\" [Say No Simply]", bundle: 'pro' },
        { q: "You do not want to and there is no good reason.", a: "\"I'd rather not, and that's not a good enough reason. I'll do it.\" [Say No Simply]", bundle: 'pro' },
        { q: "You could do it but it would be inconvenient.", a: "\"I can do it. It'll be Thursday rather than tomorrow.\" [Offer What You Can Do]", bundle: 'pro' },
        { q: "It genuinely is yours to decline and you are sure.", a: "\"I've thought about it and it's a no.\" [Say No Simply]", bundle: 'pro' },
      ]
    },
  ],
  emotionlabellingandregulation: [
    {
      name: "You Do Not Have the Word Yet",
      guideFront: "What makes this one hard to put into words?",
      guideBack: "A possible response, with the move in brackets.",
      description: "Something is clearly going on, and every word you try on is slightly wrong — so you say nothing and it stays stuck.\n\nThe training is to stop hunting for the perfect label. Describing what actually happened to you is a complete thing to say, and the word almost always turns up once the body has been described.\n\nWhat it usually feels like:\n• \"I don't know, I'm just… off.\"\n• Every word you try sounds either too big or too small.\n• You end up saying \"fine\" because it is the only word that fits nothing.\n\nTwo ways through:\n1. Describe the Signals — start from the body. \"I've been replaying it all afternoon, which usually means something.\"\n2. Label the Emotion, roughly — an approximate word beats none. \"Something in the region of let down.\"\n\nMindset: precision comes second. An honest approximation gets the conversation started, and you can correct it three sentences later.",
      inputs: [
        { q: "Something is clearly bothering you but no word fits.", a: "\"I've been replaying it all afternoon, which usually means something.\" (describe the signals)", bundle: 'pro' },
        { q: "Every word you try on sounds too dramatic.", a: "\"Not upset exactly. Something in the region of let down.\" (label the emotion)", bundle: 'pro' },
        { q: "You are about to say \"I'm fine\" for the third time.", a: "\"I'm not fine, I just haven't got the word yet. Give me a minute.\" (regulate out loud)", bundle: 'pro' },
        { q: "You feel awful and cannot explain why.", a: "\"My chest is tight and I can't settle to anything. That's all I've got.\" (describe the signals)", bundle: 'pro' },
        { q: "Someone asks what is wrong and you go blank.", a: "\"Something about this morning is still sitting with me.\" (name the situation)", bundle: 'pro' },
      ]
    },
    {
      name: "The Feeling Is Too Big Right Now",
      guideFront: "What makes this one hard to put into words?",
      guideBack: "A possible response, with the move in brackets.",
      description: "It is peaking, and anything you say in the next minute will come out sharper or shakier than you mean it to.\n\nThe training is to recognise the peak as a real thing rather than a failure of willpower, and to buy time out loud instead of pushing through and regretting it.\n\nWhat it usually looks like:\n• A reply forming that you can already tell is too sharp.\n• Your voice about to go, mid-sentence.\n• The conversation moving faster than you can think.\n\nTwo ways through:\n1. Regulate Out Loud — ask for the pause, and say why. \"Can we come back to this after lunch?\"\n2. Describe the Signals — if you can manage one sentence, make it this one. \"I'm shaking a bit, so give me a second.\"\n\nMindset: a pause you name is not a walk-out. Saying \"I need ten minutes\" keeps the conversation alive; leaving without a word ends it.",
      inputs: [
        { q: "You can feel a sharp reply forming.", a: "\"Let me take a breath — I don't want to say this badly.\" (regulate out loud)", bundle: 'pro' },
        { q: "Your voice is about to go and you would rather it did not.", a: "\"Give me a second. I'm more worked up about this than I expected.\" (describe the signals)", bundle: 'pro' },
        { q: "The argument is moving faster than you can think.", a: "\"Can we pause? I want to answer properly rather than quickly.\" (regulate out loud)", bundle: 'pro' },
        { q: "You are about to send a message you might regret.", a: "\"I'm going to leave this until the morning before I reply.\" (regulate out loud)", bundle: 'pro' },
        { q: "You need to step away but do not want it read as storming off.", a: "\"I'm not walking out — I just need ten minutes and I'll come back.\" (regulate out loud)", bundle: 'pro' },
      ]
    },
    {
      name: "Naming It Feels Weak",
      guideFront: "What makes this one hard to put into words?",
      guideBack: "A possible response, with the move in brackets.",
      description: "You could say \"I'm nervous about this\", and something in you is certain that saying it will cost you standing in the room.\n\nThe training is to notice that the opposite is usually true. Naming a feeling calmly reads as self-possession; the version everyone can see but nobody has mentioned is what actually looks shaky.\n\nWhat it usually sounds like from the inside:\n• \"If I say I'm nervous they'll think I can't handle it.\"\n• \"This is unprofessional.\"\n• \"Nobody else seems to need to say this.\"\n\nTwo ways through:\n1. Label the Emotion, plainly — no apology attached. \"I'm a bit nervous about this one.\"\n2. Regulate Out Loud — pair the feeling with what you are doing about it. \"I'm nervous, so I'm going to take it slowly.\"\n\nMindset: the feeling is already in the room, in your voice and your hands. Naming it puts you in charge of the story about it.",
      inputs: [
        { q: "You want to say you are nervous but it feels unprofessional.", a: "\"I'm a bit nervous about this one, so bear with me.\" (label the emotion)", bundle: 'pro' },
        { q: "You think admitting the feeling will cost you standing.", a: "\"I'm nervous, which is why I'm going to take it slowly.\" (regulate out loud)", bundle: 'pro' },
        { q: "Everyone else seems calm and you do not want to be the one who says it.", a: "\"Is it just me finding this one nerve-wracking?\" (label the emotion)", bundle: 'pro' },
        { q: "Your hands are visibly shaking and you are pretending they are not.", a: "\"My hands are going — ignore them, I'm fine to carry on.\" (describe the signals)", bundle: 'pro' },
        { q: "You feel you should push through without mentioning it.", a: "\"Quick pause and some water, then I'll be much better.\" (regulate out loud)", bundle: 'pro' },
      ]
    },
    {
      name: "They Dismissed What You Named",
      guideFront: "What makes this one hard to put into words?",
      guideBack: "A possible response, with the move in brackets.",
      description: "You said how you felt and got \"you're overreacting\" or \"that's not what happened\" back.\n\nThe training is to hold the label without escalating into proving it. Your feeling is not a claim about the world that needs evidence — it is a report on you, and it stays true whether or not they accept it.\n\nWhat it usually sounds like:\n• \"You're being oversensitive.\"\n• \"That's not what I meant, so you shouldn't feel that.\"\n• \"It wasn't a big deal.\"\n\nTwo ways through:\n1. Label the Emotion again, unchanged — no louder, no softer. \"It might not have been a big deal. I still felt embarrassed.\"\n2. Describe the Signals — give them the evidence rather than the argument. \"I know how it looked. I was awake at three thinking about it.\"\n\nMindset: you are not asking permission to feel it. Repeating it calmly once is enough — a second round of proving turns a description into a case.",
      inputs: [
        { q: "They say: \"You're overreacting.\"", a: "\"Maybe. I still felt embarrassed, and that's what I wanted to say.\" (label the emotion)", bundle: 'pro' },
        { q: "They say: \"That's not what I meant.\"", a: "\"I believe you. It still landed the way it landed.\" (label the emotion)", bundle: 'pro' },
        { q: "They say: \"It wasn't a big deal.\"", a: "\"It might not have been. I was still awake at three thinking about it.\" (describe the signals)", bundle: 'pro' },
        { q: "You feel yourself about to argue the facts to justify the feeling.", a: "\"I don't want to argue the details. I just wanted you to know how it felt.\" (name the situation)", bundle: 'pro' },
        { q: "They dismiss it and you can feel yourself getting heated.", a: "\"Let's leave it there for now — I'd rather not push it into a row.\" (regulate out loud)", bundle: 'pro' },
      ]
    },
    {
      name: "You Got Their Emotion Wrong",
      guideFront: "What makes this one hard to put into words?",
      guideBack: "A possible response, with the move in brackets.",
      description: "You offered someone a word and it missed — they were not angry, or not hurt, or not whatever you said.\n\nThe training is to treat the miss as progress rather than an embarrassment. A wrong label is often the thing that makes someone find the right one, and how you take the correction decides whether they keep going.\n\nWhat it usually sounds like:\n• \"No, not angry.\"\n• \"That's not it at all.\"\n• A pause, and then them changing the subject.\n\nTwo ways through:\n1. Label Their Emotion again, more openly — hand the word back to them. \"Fair enough. What would you call it?\"\n2. Describe the Signals you noticed — say what you were reading, not what you concluded. \"You went quiet, that's all I was going on.\"\n\nMindset: you were guessing, and they know that. Taking the correction easily is what keeps the door open; defending your guess is what closes it.",
      inputs: [
        { q: "They say: \"No, not angry.\"", a: "\"Fair enough. What would you call it?\" (label their emotion)", bundle: 'pro' },
        { q: "Your label lands badly and they go quiet.", a: "\"Sorry — I was going on the fact that you went quiet. I might have read it wrong.\" (describe the signals)", bundle: 'pro' },
        { q: "You realise mid-sentence that you have misjudged it.", a: "\"Ignore me, I'm guessing. Tell me what it actually was.\" (label their emotion)", bundle: 'pro' },
        { q: "They correct you and you feel the urge to defend the guess.", a: "\"You're right, that's a better word for it.\" (label their emotion)", bundle: 'pro' },
        { q: "You have offered two words and neither fit.", a: "\"I'll stop guessing. What was the worst part of it?\" (label their emotion)", bundle: 'pro' },
      ]
    },
  ],
  conflictemotions: [
    {
      name: "The Account Has a Judgement In It",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "\"I felt hurt when you were dismissive.\" It looks like a feeling statement and it contains a verdict, and the other person will answer the verdict rather than the feeling.\n\nThe interpretation usually hides in a single word — an adverb, an adjective, or a verb that describes intent. Strip it out and the same sentence becomes something nobody can argue with.\n\nMindset: could a camera have recorded it? If not, it is a conclusion.",
      inputs: [
        { q: "You are about to say \"when you were dismissive\".", a: "\"When you answered before I'd finished the sentence.\" [Say What Happened]", bundle: 'pro' },
        { q: "You are about to say \"you always do this\".", a: "\"It's happened three times this month.\" [Say What Happened]", bundle: 'pro' },
        { q: "You are about to say \"you made me feel small\".", a: "\"I felt small standing there.\" [Name Your Feeling]", bundle: 'pro' },
        { q: "You are about to describe what they intended.", a: "\"You said it in front of everyone. I don't know what you meant by it.\" [Say What Happened]", bundle: 'pro' },
        { q: "They have started arguing with your description of them.", a: "\"Leave that word out. The bit I care about is being asked first.\" [Say What You Need]", bundle: 'pro' },
      ]
    },
    {
      name: "You Stopped After the Feeling",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "You said what happened and how you felt, and then stopped — because that was the exposed part and the nerve ran out.\n\nWhat you have left them with is a problem and no solution. Many people respond to that with an apology and no change, not out of indifference but because nobody said what the change was.\n\nThe need and the request are the useful half. They are also the easier half to say.\n\nMindset: the hard part is over. Finish it.",
      inputs: [
        { q: "You have said how you felt and gone quiet.", a: "\"…because I need to be able to plan around what we agreed.\" [Say What You Need]", bundle: 'pro' },
        { q: "They have apologised and nothing will change.", a: "\"I'm not after an apology. Could you message me if you're going to be late?\" [Make a Request]", bundle: 'pro' },
        { q: "They ask what you want them to do.", a: "\"Just check it on your way up. That's the whole thing.\" [Make a Request]", bundle: 'pro' },
        { q: "You are not sure what you actually need.", a: "\"I'm still working out why it got to me. Give me a minute.\" [Say What You Need]", bundle: 'pro' },
        { q: "You have made it clear something is wrong and left it there.", a: "\"I've said what's wrong and not what I'd like. What I'd like is a text.\" [Make a Request]", bundle: 'pro' },
      ]
    },
    {
      name: "It Is Not the Moment",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Mid-argument, in front of other people, at half past eleven at night, or when either of you is too tired to do it well.\n\nExpressing a feeling badly is worse than expressing it late, because the botched version becomes the thing you both remember. Choosing a moment is not avoidance as long as you name when you will come back to it.\n\nMindset: pick the moment, and say when.",
      inputs: [
        { q: "You are in the middle of a row and about to add this.", a: "\"I want to say something about last night. Not now, though — tomorrow.\" [Say What Happened]", bundle: 'pro' },
        { q: "Other people are in the room.", a: "\"Can we talk about it when we get home?\" [Make a Request]", bundle: 'pro' },
        { q: "It is late and you are both exhausted.", a: "\"This'll go badly if we do it now. Tomorrow morning?\" [Make a Request]", bundle: 'pro' },
        { q: "You said you would come back to it and the day has arrived.", a: "\"I said I'd bring this up today. Can I?\" [Say What Happened]", bundle: 'pro' },
        { q: "You are avoiding it rather than deferring it.", a: "\"I keep putting this off. When I came down on Tuesday the door was unlocked.\" [Say What Happened]", bundle: 'pro' },
      ]
    },
    {
      name: "They Counter With Their Own",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "You raise something and they immediately raise something of theirs. Sometimes it is deflection; often it is a real grievance that has been waiting.\n\nEither way, trying to do both at once means neither gets heard. Concede what is fair, keep yours on the table, and offer theirs a proper turn rather than dismissing it.\n\nMindset: one at a time, and genuinely come back to theirs.",
      inputs: [
        { q: "They answer your point with a grievance of their own.", a: "\"That's fair, and it's a separate thing. Can we do this one first?\" [Say What You Need]", bundle: 'pro' },
        { q: "They say you do the same thing yourself.", a: "\"I do, sometimes. This one's still about the door.\" [Say What Happened]", bundle: 'pro' },
        { q: "You have finished and their thing is still waiting.", a: "\"Right — now say yours. Properly.\" [Ask What They Felt]", bundle: 'pro' },
        { q: "You are about to dismiss theirs to protect yours.", a: "\"I don't want to talk you out of that. I do want to finish this bit.\" [Say What You Need]", bundle: 'pro' },
        { q: "Theirs turns out to be bigger than yours.", a: "\"That's more important than mine. Start there.\" [Ask What They Felt]", bundle: 'pro' },
      ]
    },
    {
      name: "You Might Be Wrong About It",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "They answer, and it turns out the message was sent, the lateness had a reason, or the interruption was not what you thought.\n\nThe feeling was still real, and the account of what happened has changed. Both of those are true at once, and saying so is not backing down — it is what makes your next account believable.\n\nMindset: update the facts, keep the feeling, and say which is which.",
      inputs: [
        { q: "Their explanation changes what you thought happened.", a: "\"That's not what I thought had happened. That does change it.\" [Ask What They Felt]", bundle: 'pro' },
        { q: "You still feel it even though the facts have changed.", a: "\"I still felt what I felt. I just had the story wrong.\" [Name Your Feeling]", bundle: 'pro' },
        { q: "You have accused them of something they did not do.", a: "\"I got that wrong and I'm sorry — I'd assumed.\" [Say What Happened]", bundle: 'pro' },
        { q: "The need stands even though the incident does not.", a: "\"The Tuesday thing wasn't what I thought. I'd still like to be told earlier.\" [Say What You Need]", bundle: 'pro' },
        { q: "You are about to defend your version rather than hear theirs.", a: "\"Go on. I'd rather have it right than be right.\" [Ask What They Felt]", bundle: 'pro' },
      ]
    },
  ],
  rolebasedhumour: [
    {
      name: "The Room Is Not Right",
      guideFront: "What has gone wrong with the bit?",
      guideBack: "A possible move, with the role or the fix in brackets.",
      description: "You have a role ready and the room is not warm enough for it — someone is tired, tense, or has just said something they meant.\n\nThe training is to check before you commit rather than after. This is the single most useful skill in the pack.\n\nWhat the tells look like:\n• They said the thing flatly, not as an opener.\n• Nobody else in the group is joking yet.\n• The subject is something they have actually complained about before.\n\nTwo ways through:\n1. Drop the role and answer straight — the bit will still be there in ten minutes.\n2. The Lazy One — if you want something light, this is the role that cannot offend, because the joke is entirely on you.\n\nMindset: a bit that lands in the wrong room costs more than the laugh was worth. Reading first is not caution, it is the skill.",
      inputs: [
        { q: "They say \"I forgot my homework\" flatly and look genuinely worried.", a: "\"Ah. Is it a problem, or is it a shrug?\" (drop the role)", bundle: 'pro' },
        { q: "They mention the food and you know they cooked it and were nervous.", a: "\"I thought it was good, honestly.\" (drop the role)", bundle: 'pro' },
        { q: "Nobody in the group has joked yet and you would be first.", a: "\"That sounds like a lot of work. Maybe tomorrow.\" (the lazy one)", bundle: 'pro' },
        { q: "They have complained about this exact thing seriously before.", a: "\"Is that still going on? That's rubbish.\" (drop the role)", bundle: 'pro' },
        { q: "The room is tired and a big bit would be work for everyone.", a: "\"Honestly? Same. I'm doing nothing tonight.\" (the lazy one)", bundle: 'pro' },
      ]
    },
    {
      name: "It Landed Badly",
      guideFront: "What has gone wrong with the bit?",
      guideBack: "A possible move, with the role or the fix in brackets.",
      description: "You committed to a role, and the reaction was a flat look rather than a laugh.\n\nThe training is to get out cleanly and quickly. What makes a misfire memorable is not the joke, it is the four seconds afterwards where somebody keeps going or starts explaining.\n\nWhat it usually looks like:\n• A small polite smile and a change of subject.\n• Silence that is one beat too long.\n• They answer your in-character line completely straight.\n\nTwo ways through:\n1. Drop character immediately and answer their actual point — no explanation, no apology.\n2. Turn the bit on yourself — acknowledge the misfire once, lightly, and move on.\n\nMindset: never explain the joke and never repeat it louder. One clean exit and the room forgets it inside a minute.",
      inputs: [
        { q: "Your in-character line got a flat look.", a: "\"Anyway — genuinely, do you need a hand with it?\" (drop the role)", bundle: 'pro' },
        { q: "They answered your bit completely straight.", a: "\"Fair. Ignore me. What were you saying?\" (drop the role)", bundle: 'pro' },
        { q: "You can feel yourself about to explain the joke.", a: "\"So what's the plan for it?\" (drop the role)", bundle: 'pro' },
        { q: "The silence has gone one beat too long.", a: "\"That was a swing and a miss. Moving on.\" (turn it on yourself)", bundle: 'pro' },
        { q: "You went too big and can see it.", a: "\"Too much. I heard it as I said it.\" (turn it on yourself)", bundle: 'pro' },
      ]
    },
    {
      name: "They Took It Personally",
      guideFront: "What has gone wrong with the bit?",
      guideBack: "A possible move, with the role or the fix in brackets.",
      description: "The role accidentally landed on something real — they heard a comment about themselves rather than a character.\n\nThe training is to name it and step out at once. This is the one failure in the pack worth being unambiguous about: you drop the bit, you say plainly that you were not talking about them, and you do not do it again in that conversation.\n\nWhere it usually happens:\n• The Mock-Offended One, when they had just said something sincere.\n• The Bossy Leader, with someone who feels talked over generally.\n• The Super Stingy One, about something they actually needed.\n\nTwo ways through:\n1. Step out and say so directly — \"That was me being an idiot, not a comment about you.\"\n2. Answer their real point properly, and let the humour go for now.\n\nMindset: this is not a moment for another joke. The repair is plain and short, and then the subject changes.",
      inputs: [
        { q: "You played mock-offended and they had actually meant what they said.", a: "\"Sorry — that was me messing about, not a comment on you.\" (step out)", bundle: 'pro' },
        { q: "Your bossy leader bit landed on someone who often gets talked over.", a: "\"Ignore me. What did you want to do?\" (answer properly)", bundle: 'pro' },
        { q: "You guarded something they genuinely needed.", a: "\"Here, take it, I was being daft. Do you need anything else?\" (answer properly)", bundle: 'pro' },
        { q: "They went quiet after your line and you are not sure why.", a: "\"Did that land wrong? I didn't mean anything by it.\" (step out)", bundle: 'pro' },
        { q: "You realise mid-sentence that the role has hit something real.", a: "\"Actually, forget the bit. What's going on with it?\" (step out)", bundle: 'pro' },
      ]
    },
    {
      name: "You Cannot Commit",
      guideFront: "What has gone wrong with the bit?",
      guideBack: "A possible move, with the role or the fix in brackets.",
      description: "You started the role and delivered it half-heartedly, with a nervous laugh in the middle and a question mark at the end.\n\nThe training is to notice that the delivery is the joke. The same words said with full commitment are funny; said tentatively they are just a confusing sentence.\n\nWhat it usually sounds like:\n• A line that trails off before it finishes.\n• A laugh in the middle of your own bit.\n• Going quiet halfway through and abandoning it.\n\nTwo ways through:\n1. Commit to the next line properly, in role, and let it be the whole thing.\n2. The Lazy One — the lowest-commitment role there is, and it works even mumbled.\n\nMindset: half-in is the only way this fails. If you are not going to commit, say the ordinary thing instead — it is a much better outcome than a role delivered apologetically.",
      inputs: [
        { q: "Your line trailed off before it finished.", a: "\"No — properly. I'll be taking over the kitchen from here.\" (commit)", bundle: 'pro' },
        { q: "You laughed in the middle of your own bit.", a: "\"Let me try that again with dignity.\" (commit)", bundle: 'pro' },
        { q: "You went quiet halfway through and abandoned it.", a: "\"Sorry, what I meant was: absolutely not, and I'm not discussing it further.\" (commit)", bundle: 'pro' },
        { q: "You do not trust the room enough to go big.", a: "\"That sounds like too much work. Maybe tomorrow.\" (the lazy one)", bundle: 'pro' },
        { q: "You cannot think of a role and are about to force one.", a: "\"Yeah, that's annoying. What are you going to do?\" (drop the role)", bundle: 'pro' },
      ]
    },
    {
      name: "The Bit Has Run Out",
      guideFront: "What has gone wrong with the bit?",
      guideBack: "A possible move, with the role or the fix in brackets.",
      description: "The role got a good laugh, and you are now on the fifth beat of it while the room has quietly moved on.\n\nThe training is to count. Three beats is a bit; the fourth is usually where it turns from funny into something everyone is waiting out.\n\nWhat it usually looks like:\n• The laughs are getting smaller each time.\n• You are the only one still in the bit.\n• Someone tries to change the subject and you go back to it.\n\nTwo ways through:\n1. Break character warmly and hand the conversation back with a real question.\n2. Land one final absurd line and get out on it deliberately.\n\nMindset: leave on a laugh, not after one. The best-remembered bits are the ones that ended a beat earlier than they had to.",
      inputs: [
        { q: "You are on the fifth beat and the laughs are shrinking.", a: "\"Right, I'm done. What are you actually going to do about it?\" (break character)", bundle: 'pro' },
        { q: "Someone tried to change the subject and you went back to the bit.", a: "\"Sorry, yes — you were saying?\" (break character)", bundle: 'pro' },
        { q: "You are the only one still in character.", a: "\"Okay, out of character now. Genuinely, that's a pain.\" (break character)", bundle: 'pro' },
        { q: "You have one good line left and want to end on it.", a: "\"Two pounds an hour, final offer. Right, moving on.\" (land it and get out)", bundle: 'pro' },
        { q: "The bit went well and you can feel the temptation to keep going.", a: "\"I'll stop while I'm ahead. What's the plan?\" (break character)", bundle: 'pro' },
      ]
    },
  ],
  complimenting: [
    {
      name: "They Deflect It",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible compliment, with the strategy in brackets.",
      description: "You say something kind and it bounces straight off — \"oh, it's old\", \"anyone could have done it\", \"I got lucky\". The compliment has not landed, and the usual response is to give up and change the subject.\n\nThe fix is to make it harder to wave away. A specific detail cannot be dismissed as politeness, and an effect on you cannot be dismissed at all — they can argue about whether they were good, but not about what you went home and told your partner.\n\nOne repetition is enough. Saying it a third time turns a compliment into a negotiation, and that is not a nicer thing to be on the receiving end of.\n\nMindset: say it once more with evidence, then let them have their answer.",
      inputs: [
        { q: "They say \"oh, it was nothing\".", a: "\"It wasn't. The ending specifically — you didn't oversell it.\" [Name What You Noticed]", bundle: 'pro' },
        { q: "They put it down to luck.", a: "\"You chose to cut the first version. That's not luck.\" [Compliment the Choice, Not the Luck]", bundle: 'pro' },
        { q: "They cannot argue with what it did to you.", a: "\"Whether it was good or not, I've started doing it your way.\" [Say Why It Landed]", bundle: 'pro' },
        { q: "You have now said it twice and they still will not take it.", a: "\"You never take these. I'm going to keep saying them anyway.\" [Answer It, Don't Return It]", bundle: 'pro' },
        { q: "They deflect by complimenting you back immediately.", a: "\"Nice try. This one's about you.\" [Answer It, Don't Return It]", bundle: 'pro' },
      ]
    },
    {
      name: "There Is a Difference in Rank",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible compliment, with the strategy in brackets.",
      description: "Praise from a manager is not the same object as praise from a peer. It carries weight, it can be heard as an evaluation, and it can make everyone else in the room recalculate.\n\nGoing downwards: be specific and be public about credit, but keep character compliments private — \"you're so reliable\" from a boss sounds like a performance review, not a kindness.\n\nGoing upwards: the risk is that it sounds like flattery, and the cure is the same as everywhere else. Praise something specific that you could only know by paying attention, and say what it did rather than how good they are.\n\nMindset: the more power in the room, the more specific the compliment has to be to be believed.",
      inputs: [
        { q: "You manage them and want to praise the work.", a: "\"The order you put the sections in is what made it work.\" [Name What You Noticed]", bundle: 'pro' },
        { q: "You manage them and want the room to know.", a: "\"The whole second half is Jonas's work.\" [Say It Where It Counts]", bundle: 'pro' },
        { q: "You want to praise your manager without it sounding like flattery.", a: "\"When you took the blame for that in the meeting, it changed how I saw the team.\" [Say Why It Landed]", bundle: 'pro' },
        { q: "The character compliment would sound like an appraisal.", a: "(say it privately, not in the room) [Say It Where It Counts]", bundle: 'pro' },
        { q: "Someone senior praises you in front of the team.", a: "\"Thank you — that's a nice thing to hear in front of people.\" [Answer It, Don't Return It]", bundle: 'pro' },
      ]
    },
    {
      name: "It Is About How They Look",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible compliment, with the strategy in brackets.",
      description: "The category people worry about most, and the one with the clearest rule: praise the choice, not the body.\n\nThe jacket, the haircut, the way someone puts colours together — those are decisions, and decisions are fair game with almost anyone. What they were born with is not a decision, and saying so is an observation about their body rather than a compliment.\n\nContext does the rest. At work, keep it short and move on: a sentence, no lingering, no follow-up questions. With people who cannot easily leave the conversation — a colleague, someone serving you — shorter still.\n\nMindset: if it took a decision, it is a compliment. If it took genetics, it is a remark.",
      inputs: [
        { q: "You like what a colleague is wearing.", a: "\"Good jacket. That's all, carry on.\" [Say It Where It Counts]", bundle: 'pro' },
        { q: "You are about to compliment their face or their body.", a: "\"Whoever cuts your hair knows what they're doing.\" [Compliment the Choice, Not the Luck]", bundle: 'pro' },
        { q: "A friend has clearly made an effort tonight.", a: "\"You've put that together properly. It's very you.\" [Name What You Noticed]", bundle: 'pro' },
        { q: "They wave it off as an old thing they threw on.", a: "\"You still chose it. That counts.\" [Compliment the Choice, Not the Luck]", bundle: 'pro' },
        { q: "Someone compliments how you look and you go straight to explaining.", a: "\"Thanks — I like it too, which is why I wear it too often.\" [Take a Compliment]", bundle: 'pro' },
      ]
    },
    {
      name: "You Have Not Said It in Years",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible compliment, with the strategy in brackets.",
      description: "Someone close — a parent, a sibling, an old friend — and a thing you have thought for a decade and never said. The longer it goes unsaid, the stranger it feels to start, and the more it would mean.\n\nThe awkwardness is real and it is worth naming out loud rather than working around. \"We don't say this sort of thing\" is a perfectly good first sentence, and it does most of the work: it tells them something unusual is coming and gives you both permission.\n\nAttach it to something concrete if you can. Evidence keeps a large sentence from floating.\n\nMindset: say it late rather than not at all. Late still counts.",
      inputs: [
        { q: "You never say things like this to your family.", a: "\"We don't say this sort of thing. I'm going to anyway.\" [Say the Bigger One]", bundle: 'pro' },
        { q: "It is years overdue and that is the awkward part.", a: "\"I should have said this a long time ago, and here it is anyway.\" [Say the Bigger One]", bundle: 'pro' },
        { q: "You want to anchor it in something real.", a: "\"You drove two hours for someone who wouldn't have done it for you.\" [Say the Bigger One]", bundle: 'pro' },
        { q: "They did something good years ago that you never acknowledged.", a: "\"I never said it at the time: what you did that summer mattered.\" [Say Why It Landed]", bundle: 'pro' },
        { q: "You have said it and they have gone quiet.", a: "(let it sit — do not fill the pause) [Say the Bigger One]", bundle: 'pro' },
      ]
    },
    {
      name: "It Is Not Really a Compliment",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible compliment, with the strategy in brackets.",
      description: "Where this pack stops. Some sentences look like praise and are doing something else, and using the strategies here to polish them makes them worse, not better.\n\nPraise with a request attached is a lever — \"you're so good at this, could you…\" tells them the kindness was payment in advance. Praise as the front half of a criticism is the compliment sandwich, and everyone can hear the \"but\" coming, so the praise is spent before it lands. Praise aimed at someone who cannot easily leave, about their body, is not a gift no matter how it is phrased.\n\nAnd the last one: praise you do not mean. A compliment is information about how you actually see them, and an untrue one quietly devalues every true one you have given.\n\nMindset: if it is doing a job for you, it is not a compliment. Say the thing you want instead.",
      inputs: [
        { q: "You are about to praise them and then ask for a favour.", a: "(ask plainly first, and save the compliment for a day when you want nothing) [Say It Where It Counts]", bundle: 'pro' },
        { q: "You are about to open a criticism with something nice.", a: "(give the criticism plainly — praise spent as padding has no effect left to report) [Say Why It Landed]", bundle: 'pro' },
        { q: "You want to say something warm to soften bad news.", a: "(the news first, warmth after, and mean it when it comes) [Say the Bigger One]", bundle: 'pro' },
        { q: "You do not actually believe the compliment you are about to give.", a: "(leave it — if you noticed nothing there is nothing to name, and an untrue one costs you the true ones) [Name What You Noticed]", bundle: 'pro' },
        { q: "There is something you genuinely admire and no agenda at all.", a: "\"No reason for saying this: you're very good at what you do.\" [Say the Bigger One]", bundle: 'pro' },
      ]
    },
  ],
  responsivehumour: [
    {
      name: "A Small Complaint",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "The most common opening there is. Someone mentions a minor\nannoyance — the weather, the timetable, the neighbour, the queue — and what\nthey want is company, not a solution.\n\nExaggeration is the natural fit, because it says *I am on your side and this is\nnot serious*. Understatement does the same job in the opposite register and is\nbetter with people you do not know well.\n\nThe thing to avoid is the earnest reply. Answering a small complaint with real\nadvice makes it a bigger thing than they meant it to be.\n\nMindset: they are not asking for help. They are handing you a sentence.",
      inputs: [
        { q: "\"I couldn't sleep, my neighbour was making noise.\"", a: "\"Is your neighbour a marching band?\" [Exaggeration]", bundle: 'pro' },
        { q: "\"The car broke down, then it rained.\"", a: "\"So the day has been going well.\" [Understatement]", bundle: 'pro' },
        { q: "\"This room is too dark.\"", a: "\"It's saving the light for the afternoon shift.\" [Misdirection]", bundle: 'pro' },
        { q: "\"I'm running out of time.\"", a: "\"Where does it go? Have you checked the sofa?\" [Deliberate Misunderstanding]", bundle: 'pro' },
        { q: "\"It's raining again.\"", a: "\"Excellent. My favourite.\" [Irony]", bundle: 'pro' },
      ]
    },
    {
      name: "They Are Pleased With Themselves",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Someone is mildly showing off — the fast computer, the\nmarathon, the reading habit. Handled well this is warm; handled badly it is a\nput-down.\n\nUnderstatement is the safest, because shrinking an achievement in an obviously\nabsurd way is a compliment wearing a disguise. Misdirection works too, as long\nas the twist is about the thing rather than about them.\n\nWhat does not work is irony aimed at the achievement itself. \"Oh, very\nimpressive\" said flat is sarcasm, and it takes something from them rather than\ngiving it.\n\nMindset: shrink the thing, never the person.",
      inputs: [
        { q: "\"I ran a marathon on Sunday.\"", a: "\"That's a bit of a walk.\" [Understatement]", bundle: 'pro' },
        { q: "\"My computer is super fast.\"", a: "\"I saw it running down the street yesterday.\" [Misdirection]", bundle: 'pro' },
        { q: "\"I read books all the time.\"", a: "\"All of them? At once? That's a lot of arms.\" [Deliberate Misunderstanding]", bundle: 'pro' },
        { q: "You are about to be ironic about the achievement itself.", a: "(leave it — that one lands as sarcasm) [Irony]", bundle: 'pro' },
        { q: "They built the whole thing themselves.", a: "\"Bit of a project, then.\" [Understatement]", bundle: 'pro' },
      ]
    },
    {
      name: "Someone States the Obvious",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "\"It's raining outside.\" \"The room has white walls.\" \"It's\nlunch in five minutes.\" Sentences with no content, said to fill a silence — and\ntherefore an open invitation.\n\nDeliberate Misunderstanding is made for these. So is Misdirection, because an\nobvious statement gives you a very flat first half to build on.\n\nThese are also the best sentences to practise on, precisely because they are\nempty. Anyone can be funny about a good story. The skill is being funny about\nwhite walls.\n\nMindset: the emptier the sentence, the more room there is in it.",
      inputs: [
        { q: "\"It's raining outside.\"", a: "\"Really? Inside it's completely dry.\" [Deliberate Misunderstanding]", bundle: 'pro' },
        { q: "\"The room has white walls.\"", a: "\"Someone in this building has made exactly one decision.\" [Misdirection]", bundle: 'pro' },
        { q: "\"It's lunch in five minutes.\"", a: "\"Five minutes. I can survive that. Probably.\" [Exaggeration]", bundle: 'pro' },
        { q: "\"I love eating pizza.\"", a: "\"Same. It's the only food that's also a plate.\" [Misdirection]", bundle: 'pro' },
        { q: "\"It's quite cold today.\"", a: "\"Bit brisk, yes.\" [Understatement]", bundle: 'pro' },
      ]
    },
    {
      name: "It Did Not Land",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "You said something you thought was funny and nothing happened\n— or worse, they took it seriously. Every practised joker has this several\ntimes a week, and the difference between them and everyone else is entirely in\nwhat happens next.\n\nThe rule: do not explain it. An explained joke is worse than an unnoticed one,\nand a second run at the same joke is worse again. Answer the thing they\nactually said and move on; the next opening arrives within a minute.\n\nIf they took it at face value, one flat clarification is fine — \"that was me\nagreeing with you, badly\" — and then it is over.\n\nMindset: a miss costs four seconds. Explaining it costs the conversation.",
      inputs: [
        { q: "They take your irony completely at face value.", a: "\"That was me agreeing with you, badly.\" [Understatement]", bundle: 'pro' },
        { q: "You are about to explain why it was funny.", a: "(do not — answer what they actually said instead) [Irony]", bundle: 'pro' },
        { q: "Nobody reacted at all.", a: "(say the plain version and carry on — the next opening is a minute away) [Understatement]", bundle: 'pro' },
        { q: "You want one more go without repeating yourself.", a: "\"Ignore me. What happened after the car broke down?\" [Deliberate Misunderstanding]", bundle: 'pro' },
        { q: "They laughed a beat late.", a: "(let it be — do not point out that it worked) [Irony]", bundle: 'pro' },
      ]
    },
    {
      name: "Now Is Not the Time",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Where this pack stops. Not every sentence is an invitation,\nand the five strategies are quick enough to arrive before you have decided\nwhether they should.\n\nThree situations to keep out of: something they are genuinely upset about,\nsomething they are proud of and vulnerable about, and any moment where you have\npower over them — humour from a manager about someone's work is not read the\nsame way as humour from a peer.\n\nThe tell is easy to feel and easy to ignore: if the joke needs them to be a\ngood sport, it is aimed at them, and this pack is not aimed at people.\n\nMindset: aim at the situation, the sentence, or yourself. Never at the person\nwho is holding something heavy.",
      inputs: [
        { q: "They are genuinely upset and you reached for a joke by reflex.", a: "(drop it — answer the sentence, not the setup) [Understatement]", bundle: 'pro' },
        { q: "They said something they are proud and slightly nervous about.", a: "\"That's a bit of a project.\" (warm, and then say it plainly) [Understatement]", bundle: 'pro' },
        { q: "You are their manager and the joke is about their work.", a: "(not yours to make — the room hears it differently from you) [Irony]", bundle: 'pro' },
        { q: "The joke needs them to be a good sport to work.", a: "(that means it is aimed at them — leave it) [Exaggeration]", bundle: 'pro' },
        { q: "You want to be light about something heavy, later.", a: "\"For what it's worth, that is the worst week I've heard about this year.\" [Exaggeration]", bundle: 'pro' },
      ]
    },
  ],
  masculine1: [
    {
      name: "The Cold Shoulder",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response (strategy in brackets).",
      description: "When she withdraws, becomes silent, or tries to reject connection. The challenge is not to respond in kind, but to remain present.\nHere we primarily use Refusing Rejection and Hear the Pain to re-establish contact.",
      inputs: [
        { q: "She stares at the wall and only answers with single words.", a: "\"I see that you're hurt. I'll sit here with you for a bit until you're ready to talk.\" (Refusing Rejection)", bundle: 'pro' },
        { q: "She pulls her hand away when you try to hold it.", a: "\"I notice you feel far away from me right now. What's happening inside?\" (Hear the Pain)", bundle: 'pro' },
        { q: "She sends a short, cold text: \"Don't call me.\"", a: "\"I hear that you need space. I love you and I'm here when you've landed.\" (Refusing Rejection)", bundle: 'pro' },
      ]
    },
  ],
  masculine2: [
    {
      name: "The Toxic Attack",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response (strategy in brackets).",
      description: "When her expression is laced with blame, shaming, or insults. The challenge is to hear the pain while holding the line on respect.\nUse Feelings First to meet the emotion and Boundary to protect the respect.",
      inputs: [
        { q: "She screams, \"You're a selfish jerk who only thinks of himself!\"", a: "\"I hear how much you're hurting, but I won't be called names. Tell me what's wrong.\" (Feelings First/Boundary)", bundle: 'pro' },
        { q: "She mocks your career choices during a fight.", a: "\"I'm interested in your fear for our future, but have no interest in being mocked. Let's try again.\" (Shared Reality/Boundary)", bundle: 'pro' },
        { q: "She is \"poking the bear\" with sarcastic digs.", a: "\"I see you're trying to get a reaction. I'd rather just hold you. Come here.\" (Boundary/Structure)", bundle: 'pro' },
      ]
    },
  ],
  masculine3: [
    {
      name: "High Intensity Attacks",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response (strategy in brackets).",
      description: "When she goes for the \"jugular\" or the drama is at an absolute peak. The challenge is to maintain your seat as Shiva—the unchanging observer.\nUse Intentional Pause to regulate and Ouch to name the impact.",
      inputs: [
        { q: "She is screaming at the top of her lungs about a logistical error.", a: "\"I want to hear you, but I need a 5-minute pause to settle my system.\" (Intentional Pause)", bundle: 'pro' },
        { q: "She uses a sarcasm-laced attack about your manhood.", a: "\"Ouch. That strikes a deep nerve for me.\" (Heartful Ouch)", bundle: 'pro' },
        { q: "She mocks your parents or your past.", a: "\"I'm interested in your pain, but have no interest in being mocked. Let's take a pause.\" (Ouch / Boundary)", bundle: 'pro' },
      ]
    },
  ],
  masculine4: [
    {
      name: "The Permission Trap",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response (strategy in brackets).",
      description: "When you find yourself asking for \"permission\" for simple things or editing yourself to avoid conflict. The challenge is to stop seeking the sign and own your frame.",
      inputs: [
        { q: "You want to go to the gym but are afraid she'll be \"annoyed\" if you go.", a: "\"Staying in shape is essential for me. I'm going to the gym tonight.\" (Sign-Seeking Pause / Frame).", bundle: 'pro' },
        { q: "She asks what you want for your birthday, and you're afraid your real wish is \"too expensive.\"", a: "\"What I really want is X. I'm owning that desire.\" (Desire / Sign-Seeking).", bundle: 'pro' },
        { q: "You are about to say \"Whatever you want, honey\" just to stay out of trouble.", a: "\"I'm in the Collapse shadow strategy. My actual preference is Y.\" (Identifying Shadow).", bundle: 'pro' },
      ]
    },
  ],
  masculine5: [
    {
      name: "The Decision Vacuum",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response (strategy in brackets).",
      description: "When she is waiting for you to lead, or when she is forced into her Masculine because you are being \"easy-going\" or passive.\nUse Drive the Decision and Handle the Burden to step back into your role.",
      inputs: [
        { q: "She keeps asking \"What do you want for your birthday?\" and you keep saying \"I don't care.\"", a: "\"Actually, I'd love X. Let's make that the plan.\" (Drive the Decision)", bundle: 'pro' },
        { q: "She is frantically trying to figure out the traffic and route for your trip.", a: "\"Put the phone away, Love. I've already mapped the route and we have plenty of time.\" (Drive the Decision / Structure)", bundle: 'pro' },
        { q: "She asks \"Should we go to the party or stay home?\" and looks exhausted.", a: "\"We're staying home. You need the rest, and I want you all to myself tonight.\" (Drive the Decision)", bundle: 'pro' },
      ]
    },
  ],
  masculine6: [
    {
      name: "The Story Loop",
      guideFront: "Choose a somatic strategy to handle...",
      guideBack: "A possible response (strategy in brackets).",
      description: "When your mind gets trapped in \"Masculine logic\" and creates stories to explain her behavior or protect your ego.\nThe challenge is to use The Watcher and IAM to break the loop.",
      inputs: [
        { q: "You're thinking \"She always does this, she's so irrational.\"", a: "(Watcher) \"I see the 'irrational' label loop. I'm letting it go.\". (Watcher)", bundle: 'pro' },
        { q: "You're planning your \"Defense\" speech while she is still talking.", a: "(Choice) \"I'm choosing to stop the planning and just feel her pain.\". (Conscious Choice)", bundle: 'pro' },
        { q: "You feel the \"victim\" story arising (\"Why me?\").", a: "(Watcher) \"I see the victim role. I'm choosing to lead instead.\". (Watcher)", bundle: 'pro' },
      ]
    },
  ],
  masculinesv: [
    {
      name: "Kalla handen",
      guideFront: "Välj en strategi för att svara när...",
      guideBack: "En tänkbar replik (strategi i parentes).",
      description: "När hon drar sig undan, tystnar eller försöker avvisa kontakten. Utmaningen är att inte svara med samma mynt utan att stå kvar i närvaro.\nHär använder vi främst Vägra avvisandet och Hör smärtan för att återetablera kontakt.",
      inputs: [
        { q: "Hon stirrar in i väggen och svarar bara med enstaka ord.", a: "\"Jag ser att du är sårad. Jag sitter här med dig en stund tills du är redo att prata.\" (Vägra avvisandet)", bundle: 'pro' },
        { q: "Hon drar undan handen när du försöker hålla den.", a: "\"Jag märker att du känner dig långt borta från mig just nu. Vad händer inuti dig?\" (Hör smärtan)", bundle: 'pro' },
        { q: "Hon skickar ett kort och kallt sms: \"Ring mig inte.\"", a: "\"Jag hör att du behöver space. Jag älskar dig och finns här när du landat.\" (Vägra avvisandet)", bundle: 'pro' },
      ]
    },
  ],
  parenting1: [
    {
      name: "The Big Meltdown",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response (strategy in brackets).",
      description: "When emotions are high and words are loud. The challenge is to respond with presence rather than reacting with your own anger.\nUse Naming the Feeling and Venerating the Child to remain the calm anchor in their storm.",
      inputs: [
        { q: "They scream \"I HATE YOU!\" after you say no to a friend coming over.", a: "\"Wow, you are really angry with me right now.\" (Naming Feeling)", bundle: 'pro' },
        { q: "They are sobbing uncontrollably because they broke a cheap balloon.", a: "(Kneel down and just hold them) \"I'm right here. I see how sad you are.\" (Venerating / Naming)", bundle: 'pro' },
        { q: "They are throwing toys because they are \"bored.\"", a: "\"You seem really frustrated and restless today.\" (Naming Feeling)", bundle: 'pro' },
      ]
    },
  ],
  parenting2: [
    {
      name: "The Flat Refusal",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "When the child simply says \"No\" or ignores you. The challenge is to maintain \"High Expectations + Calm Presence\"—holding the limit without exploding.",
      inputs: [
        { q: "You ask them to put away their shoes and they say \"Make me!\".", a: "\"I hear you're feeling very defiant right now. And, the shoes need to be in the bin.\" (Name Struggle / Limit)", bundle: 'pro' },
        { q: "You tell them \"iPad away\" and they simply ignore you and keep playing.", a: "(Walk over, put a hand on their shoulder) \"iPad.\" (One-Word Cue / Physical Follow-up)", bundle: 'pro' },
        { q: "They are shouting \"I'M NOT DOING IT!\" about a chore.", a: "\"I can see you're really angry. Do you want to do it now or in three minutes?\" (Name Feeling / Options Within)", bundle: 'pro' },
      ]
    },
  ],
  parenting3: [
    {
      name: "The \"I Can't!\" Meltdown",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "When the struggle turns into a total shutdown. The challenge is to remain the \"Calm Anchor\" and not take over the task just to end the noise.",
      inputs: [
        { q: "They throw their pencil across the room and sob \"I'm too stupid for this!\".", a: "\"You're having a really hard time with this page. I'm going to sit right here while you breathe.\" (Naming Struggle / Staying Close)", bundle: 'pro' },
        { q: "They are refusing to even try a new task.", a: "\"It’s scary to try something for the first time. What’s the very first tiny step?\" (Naming Struggle / Brainstorm)", bundle: 'pro' },
        { q: "They are demanding that you do their chore for them.", a: "\"I know you wish I would just do it. And, I know you can learn this. Where should we start?\" (Taking Side of Feelings / Naming Struggle)", bundle: 'pro' },
      ]
    },
  ],
  parenting4: [
    {
      name: "Verbal Attacks",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response (strategy in brackets).",
      description: "When the child uses \"mean words,\" name-calling, or insults. The challenge is to remain the adult and not \"fight back\" at a child's level.",
      inputs: [
        { q: "They shout \"I hate this house and I hate you!\"", a: "\"Wow, you are feeling really unhappy right now.\" (Meet the Frustration)", bundle: 'pro' },
        { q: "They call you a \"jerk\" after a correction.", a: "\"Ouch. That was a mean thing to say. You must be very frustrated.\" (Meet the Frustration / Ouch)", bundle: 'pro' },
        { q: "They are mocking your tone of voice.", a: "(Stay calm and silent) \"The shoes still need to be in the bin.\" (Heartful Silence / One-Word Cue)", bundle: 'pro' },
      ]
    },
  ],
  parenting5: [
    {
      name: "The Stubborn Heart",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response (strategy in brackets).",
      description: "When a child is stuck in shame, anger, or a refusal to repair. The challenge is to remain the \"Safe Leader\" who invites them back without shaming them.",
      inputs: [
        { q: "They refuse to apologize, saying \"I DON'T CARE!\".", a: "\"I hear you're still feeling very angry. Let's take another two-minute reset.\" (Time-Out Reset / Meet Frustration)", bundle: 'pro' },
        { q: "They are sobbing because they think they are a \"bad kid\" after a mistake.", a: "\"You aren't a bad kid; you just had a bad moment. I'm right here with you.\" (Follow-up / Venerating)", bundle: 'pro' },
        { q: "They are mocking your own attempt to apologize to them.", a: "(Stay calm) \"I'm being serious because our relationship matters to me. I'm sorry I yelled.\" (Modeling Apology / Respond vs React)", bundle: 'pro' },
      ]
    },
  ],
  praxframe1: [
    {
      name: "Seeking the Sign",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "When you are \"leaning in\" or \"dancing\" to get her approval. The challenge is to stop the validation-seeking behavior and return to Point of Origin.",
      inputs: [
        { q: "You just told a joke and are staring at her face to see if she laughs.", a: "(Point of Origin) \"I found it funny. That's enough for me.\"", bundle: 'pro' },
        { q: "You want to buy a new car but are afraid she'll think it's \"too flashy.\"", a: "(Point of Origin) \"This car meets my goals for style and utility. I'm getting it.\"", bundle: 'pro' },
        { q: "She is \"still-facing\" you (giving no reaction) to make you feel anxious.", a: "(OODA Loop) (Observe the tactic. Settle into the silence. Need nothing from her.)", bundle: 'pro' },
      ]
    },
  ],
  praxframe2: [
    {
      name: "The Content Trap",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response (strategy in brackets).",
      description: "When she uses \"Hamster logic\" or baiting questions to draw you into a literal argument. The challenge is to stay on the \"Process\" level.\nRefuse to DEER (Defend, Excuse, Explain, Rationalize) and maintain your frame.",
      inputs: [
        { q: "She asks \"If I gained a hundred pounds, would you still love me?\"", a: "\"I'd love if you hit the treadmill when you did.\" (Process: Honesty/High Status)", bundle: 'pro' },
        { q: "She demands \"Why did you buy that without asking me first?\"", a: "\"Because I decided it was the best move for us. Don't worry about it.\" (Process: Leadership)", bundle: 'pro' },
        { q: "She says \"You're just like your father when you're mad!\"", a: "(Process) (Ignore the insult) \"You're really angry right now. I'm taking a walk.\" (Medium is the Message)", bundle: 'pro' },
      ]
    },
  ],
  praxframe3: [
    {
      name: "Shaming and Labels",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "When she uses \"container words\" like \"creepy,\" \"misogynist,\" or \"selfish\" to weaponize your guilt.\nThe challenge is to need nothing from her and return to your own Mental Point of Origin.",
      inputs: [
        { q: "She shouts: \"You're being a misogynist!\" because you won't do a chore.", a: "\"I don't care.\" (Assertive Right #10).", bundle: 'pro' },
        { q: "She calls your interest in self-improvement \"creepy.\"", a: "\"What specifically about my working out is creepy to you?\" (Negative Inquiry).", bundle: 'pro' },
        { q: "She says: \"A real man would do X for his wife.\"", a: "\"It's possible. I'm doing Y instead.\" (Fogging / Point of Origin).", bundle: 'pro' },
      ]
    },
  ],
  praxframe4: [
    {
      name: "The \"Creepy\" Resonance",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "When your partner describes your behavior as \"creepy\" or \"off\"—this usually means she is picking up on a covert contract.\nThe challenge is to kill the contract and return to your own Mental Point of Origin.",
      inputs: [
        { q: "She asks, \"Why are you being so nice today? What do you want?\".", a: "\"I was trying to earn points. That's lame. I'm stopping.\" (Killing Covert Contracts).", bundle: 'pro' },
        { q: "You are \"leaning in\" energetically to see if she liked your gift.", a: "(Internal) \"I release the need for her to like it. I gave it because I wanted to.\" (Killing Covert Contracts / Point of Origin).", bundle: 'pro' },
        { q: "You are \"shuffling\" around her, hoping for a sign that sex is on the table.", a: "(Stop shuffling. Go do your own thing.) (The Oak / Point of Origin).", bundle: 'pro' },
      ]
    },
  ],
  praxframe5: [
    {
      name: "Sabotage and Frame Traps",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Handling situations where her \"solipsism\" leads her to challenge your new leadership through guilt, logic traps, or manipulation. The challenge is to remain the \"Oak\" and maintain your seat as the leader.",
      inputs: [
        { q: "she cries and says you \"don't care about her feelings\" because you're following your mission", a: "\"I hear that you're upset. I'm still heading to the gym. See you at seven.\" (Rule Zero / The Oak)", bundle: 'pro' },
        { q: "she uses a \"Frame Trap\" by pointing out a logical inconsistency in your plan", a: "\"My logic may be off, but my decision remains the same. I've got it.\" (Rule Zero / Leading Without Permission)", bundle: 'pro' },
        { q: "she tries to \"authorize\" your behavior: \"I'll let you go if you do the dishes first.\"", a: "\"I've already handled my chores. I'm leaving now. See you later.\" (Rule Zero / No DEERing)", bundle: 'pro' },
      ]
    },
  ],
  praxdread1: [
    {
      name: "The Complaining Passenger",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "When she treats you like a \"minion\" or \"man-child\" by nagging and setting the frame for your behavior. The challenge is to stop \"fixing her comfort\" and instead return to your own Mental Point of Origin.",
      inputs: [
        { q: "she yells \"You never do anything right!\" because you bought the wrong milk", a: "\"Damn, I didn't realize there were so many types. I'll get the other one Saturday.\" (STFU / Negative Assertion)", bundle: 'pro' },
        { q: "she tries to \"gaslight\" you into feeling guilty for wanting a career change", a: "(Internal: Embrace the suck. I'm the leader of this vision.) (Tow Rope / STFU)", bundle: 'pro' },
        { q: "she demands \"authorization\" to see your phone after you become distant", a: "\"No. My privacy is valuable. Ask me again when you're acting like a partner.\" (Standard Lead / 2/3rds Rule)", bundle: 'pro' },
      ]
    },
  ],
  praxdread2: [
    {
      name: "The Hamster Maze",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Handling the emotional \"weather\" and manipulation attempts that arise as she processes your new value. The challenge is to provide a clear \"exit\" (pleasantness/sex) for her anxiety while refusing to be moved from your frame.",
      inputs: [
        { q: "she starts crying and says \"I don't even know who you are anymore!\"", a: "\"I'm the same man, just focused on my vision. Come give me a hug.\" (The Oak / Operant Conditioning)", bundle: 'pro' },
        { q: "she tries to \"gaslight\" you into feeling guilty for your new style", a: "\"I like the look. You should enjoy the change.\" (Negative Assertion / Scarcity)", bundle: 'pro' },
        { q: "she gives you a \"Backhanded Compliment\" to lower your status", a: "\"Thanks. I'm glad you noticed the hard work.\" (Covert Marketing / Gratitude)", bundle: 'pro' },
      ]
    },
  ],
  praxdread3: [
    {
      name: "The Compliance Trap",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "When she uses \"negotiated desire\" or \"obligated compliance\" to maintain control without investment. The challenge is to reject the low-quality intimacy and return to your own standards.",
      inputs: [
        { q: "she says \"Fine, let's just get it over with\" before sex", a: "\"I'll pass. I'm interested in desire, not a chore. I'm going for a run.\" (This Isn't Working / Scarcity)", bundle: 'pro' },
        { q: "she \"zeroes you out\" by ignoring you for two days after you set a boundary", a: "(Need nothing. Continue your mission happily. Enjoy the quiet.) (The Oak / STFU)", bundle: 'pro' },
        { q: "she tries to \"authorize\" your leadership: \"I'll let you pick the restaurant if you do X.\"", a: "\"I've already picked the place. We're leaving at seven.\" (Leading Without Permission)", bundle: 'pro' },
      ]
    },
  ],
  praxdread4: [
    {
      name: "The High-Intensity Meltdown",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "When emotions go to 10/10. The challenge is to remain the \"Captain\" and not get drawn into her \"Neurotic\" or \"Hysterical\" frame. You are the anchor; she is the weather.",
      inputs: [
        { q: "she is screaming \"YOU DON'T LOVE ME!\" and throwing things", a: "\"STOP. I am leaving until you are an adult again.\" (Controlled Anger)", bundle: 'pro' },
        { q: "she is sobbing \"I don't know who you are anymore!\" after your months of Dread", a: "(Internal: Stay silent. Provide a calm \"Pull\" hug.) (Navigating the Main Event)", bundle: 'pro' },
        { q: "she accuses you of \"manipulating\" her with \"Internet rules\"", a: "\"That's an interesting theory. I'll give it some thought.\" (Cocky/Funny Response)", bundle: 'pro' },
      ]
    },
  ],
  praxdread5: [
    {
      name: "Betrayal and Evaluation",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Situations involving infidelity or major trust violations. The challenge is to stop \"looking with your heart\" and start \"looking with your eyes\" to assess real value. You must be willing to destroy the dynamic to save yourself.",
      inputs: [
        { q: "she claims she is \"sorry\" but refuses to tell you who it was with", a: "\"Nothing is forgivable if you expect it to be forgettable. I need full disclosure.\" (The Remorse Checklist)", bundle: 'pro' },
        { q: "she tells you \"just get over it, it was a year ago\"", a: "(Internal: She lacks the patience for true remorse.) \"Remorse lasts as long as I need it to.\" (The Remorse Checklist)", bundle: 'pro' },
        { q: "you confirm she is cheating but are afraid of being alone", a: "(Internal: The stay plan and go plan are the same.) (Continue lifting and networking to build abundance.) (Stay/Go Congruence)", bundle: 'pro' },
      ]
    },
  ],
  listeningthroughquestions: [
    {
      name: "It Has Become an Interview",
      guideFront: "What has gone wrong with the questions here?",
      guideBack: "A possible response, with the move in brackets.",
      description: "Your questions are good and unconnected — each one comes from your head rather than from their last answer. The other person can feel it within two or three questions, and their answers start getting shorter.\n\nWhat it usually looks like:\n• Their answers are getting shorter while your questions stay the same length.\n• You asked something that had nothing to do with what they just said.\n• You have learned four separate facts and followed none of them.\n\nTwo ways through:\n1. Use a word from their last answer — the fastest repair there is.\n2. Give something of your own — a question after a small disclosure lands completely differently.\n\nMindset: the repair is not a better question. It is a question built out of their answer.",
      inputs: [
        { q: "You have asked four unconnected questions and answers are shortening.", a: "\"You said something about the second flat — what happened with that?\" [use their word]", bundle: 'pro' },
        { q: "You realise you have been working through a mental list.", a: "\"I'm interrogating you. My version of that is much less impressive, by the way.\" [give something]", bundle: 'pro' },
        { q: "Your last question changed the subject entirely.", a: "\"Ignore that, I jumped. Go back to the bit about your brother.\" [use their word]", bundle: 'pro' },
        { q: "They are answering politely and volunteering nothing.", a: "\"I'll stop firing questions. That sounds like it was a long month, though.\" [give something]", bundle: 'pro' },
        { q: "You have asked two questions in a row without responding to either answer.", a: "\"That's a much better story than the one I was about to ask about.\" [use their word]", bundle: 'pro' },
      ]
    },
    {
      name: "You Went Deep Too Early",
      guideFront: "What has gone wrong with the questions here?",
      guideBack: "A possible response, with the move in brackets.",
      description: "You asked about feelings before you had the story, and it landed as intrusive rather than interested. The order matters more than the question: the same sentence is welcome once someone can tell you have followed what they said.\n\nWhat it usually looks like:\n• A pause, and then a short answer.\n• You asked how something felt about an event you could not picture.\n• You barely know the person and the question was about their inner life.\n\nTwo ways through:\n1. Go back to the facts — ask for the sequence and rebuild.\n2. Narrow it to a moment — \"what did you think when he said it\" is answerable where \"how did you feel about all that\" is not.\n\nMindset: earn the deep questions with the ordinary ones. Three facts, then a feeling.",
      inputs: [
        { q: "You asked how they felt and got a short answer and a pause.", a: "\"Sorry — back up. What actually happened on the Tuesday?\" [back to facts]", bundle: 'pro' },
        { q: "The feeling question was too broad.", a: "\"Let me ask that better: what went through your head when she actually said it?\" [narrow it]", bundle: 'pro' },
        { q: "You barely know them and asked something quite personal.", a: "\"That's a big question from someone you met an hour ago. What happened next, though?\" [back to facts]", bundle: 'pro' },
        { q: "You asked about a feeling in a story you cannot picture.", a: "\"Actually — who else was involved in all this?\" [back to facts]", bundle: 'pro' },
        { q: "They deflected with a joke.", a: "\"Fair. What did you do straight afterwards?\" [narrow it]", bundle: 'pro' },
      ]
    },
    {
      name: "The Question Sounded Like a Judgement",
      guideFront: "What has gone wrong with the questions here?",
      guideBack: "A possible response, with the move in brackets.",
      description: "You asked \"why did you do that?\" and it landed as \"why on earth did you do that?\". The content was fine; the framing carried an accusation. Two words fix it.\n\nWhat it usually looks like:\n• They started justifying rather than explaining.\n• You used \"why did you\" rather than \"what made you\".\n• The answer came back defensive and slightly longer than it needed to be.\n\nTwo ways through:\n1. Reframe it — \"what made you…\" asks for a reason, not a defence.\n2. Say the assumption out loud — \"not a criticism, I'd probably have done the same.\"\n\nMindset: \"why did you\" asks them to justify. \"What made you\" asks them to explain. The difference is entirely in the framing.",
      inputs: [
        { q: "They started justifying rather than explaining.", a: "\"Not a criticism — I'd probably have done the same. What made it the right call at the time?\" [say the assumption]", bundle: 'pro' },
        { q: "You asked \"why did you do that?\" and it landed badly.", a: "\"That came out wrong. I meant what was going on that made it the obvious thing.\" [reframe]", bundle: 'pro' },
        { q: "Your perspective question sounded like a lesson.", a: "\"I'm not saying she was right — I'm just curious what her version sounds like.\" [say the assumption]", bundle: 'pro' },
        { q: "They have gone defensive about a decision.", a: "\"You don't have to defend it to me. I'm just nosy about how it happened.\" [say the assumption]", bundle: 'pro' },
        { q: "You are about to ask \"why didn't you just…\".", a: "\"Was there a reason the obvious route wasn't available?\" [reframe]", bundle: 'pro' },
      ]
    },
    {
      name: "Nothing Is Coming Back",
      guideFront: "What has gone wrong with the questions here?",
      guideBack: "A possible response, with the move in brackets.",
      description: "Your questions are getting one-word answers. Sometimes the person does not want to talk, and that is an answer worth respecting — but more often the questions have been too big, and a smaller one gets a real reply.\n\nWhat it usually looks like:\n• \"Fine\", \"yeah\", \"not much\", three times running.\n• Your questions have all been broad ones.\n• They have not asked you anything either.\n\nTwo ways through:\n1. Make it smaller and more concrete — \"what happened next\" beats \"how was it\".\n2. Read it as a no and change register — some conversations are not the moment.\n\nMindset: one-word answers are usually a question that was too big, not a person who does not want to talk. Try smaller once, then let it go.",
      inputs: [
        { q: "Three broad questions have got three short answers.", a: "\"Let me ask something easier — what did you actually do on the Saturday?\" [smaller]", bundle: 'pro' },
        { q: "They said the trip was \"fine\" and nothing else.", a: "\"Where did you stay?\" [smaller]", bundle: 'pro' },
        { q: "You have asked twice and got very little both times.", a: "\"I'll stop digging. Mine was mostly rain and an argument about a map.\" [change register]", bundle: 'pro' },
        { q: "They are clearly not in the mood to talk about it.", a: "\"We can leave it. How's everything else?\" [change register]", bundle: 'pro' },
        { q: "The question needed too much of an answer.", a: "\"Actually, simpler — who else was there?\" [smaller]", bundle: 'pro' },
      ]
    },
    {
      name: "You Stopped Too Soon",
      guideFront: "What has gone wrong with the questions here?",
      guideBack: "A possible response, with the move in brackets.",
      description: "They gave you an answer with something obviously unfinished in it and you moved on. Half the good material in any conversation is one question past where most people stop.\n\nWhat it usually looks like:\n• They said something surprising and you said \"oh, nice\" and changed the subject.\n• A half-sentence went past that clearly had more behind it.\n• You have got a fact where there was a story available.\n\nTwo ways through:\n1. Go back to it — even a minute later. \"You said something earlier about…\"\n2. Ask the obvious next one — \"and then what?\" is usually the question that was waiting.\n\nMindset: one more question. Most conversations end one question before the interesting part.",
      inputs: [
        { q: "They mentioned something surprising and you let it pass.", a: "\"Hang on, go back — you said you'd never actually met him?\" [go back]", bundle: 'pro' },
        { q: "You got a fact where there was clearly a story.", a: "\"There's more to that, isn't there. What happened?\" [ask the next one]", bundle: 'pro' },
        { q: "A half-sentence went by that had something behind it.", a: "\"You said 'the second time'. There was a first time?\" [go back]", bundle: 'pro' },
        { q: "You changed the subject and immediately regretted it.", a: "\"Sorry — I want to come back to the thing about your old job.\" [go back]", bundle: 'pro' },
        { q: "Their answer stopped somewhere odd.", a: "\"And then what? That can't be the end of it.\" [ask the next one]", bundle: 'pro' },
      ]
    },
  ],
  showunderstanding2: [
    {
      name: "You Got It Wrong",
      guideFront: "What has gone wrong here?",
      guideBack: "A possible response, with the move in brackets.",
      description: "You said their view back and it was not their view. This is not a failure — it is what the checking is for — but it needs a light touch, because a wrong version defended is much worse than a wrong version dropped.\n\nWhat it usually looks like:\n• \"No, not quite\" and then a longer explanation.\n• You explained why your version was reasonable.\n• They are now correcting you rather than saying their thing.\n\nTwo ways through:\n1. Drop it immediately and ask again — the correction is the useful part.\n2. Name what you had backwards — shows exactly where you were wrong.\n\nMindset: the correction is the point of asking. Do not defend a version you offered precisely so it could be corrected.",
      inputs: [
        { q: "They said \"no, not quite\" and you started explaining yourself.", a: "\"Forget my version. Say it again and I'll shut up.\" [drop it]", bundle: 'pro' },
        { q: "You had the whole thing backwards.", a: "\"So I had it inside out — it's the not-being-asked, not the work.\" [name it]", bundle: 'pro' },
        { q: "You are about to defend your reading.", a: "\"I'd rather be corrected than right. What's the actual shape of it?\" [drop it]", bundle: 'pro' },
        { q: "You have got it wrong twice.", a: "\"I keep missing it. Give me the one-sentence version and I'll stop guessing.\" [drop it]", bundle: 'pro' },
        { q: "They corrected you and moved on quickly.", a: "\"Hang on — say that bit again. That's the part I had wrong.\" [name it]", bundle: 'pro' },
      ]
    },
    {
      name: "The Summary Became a Speech",
      guideFront: "What has gone wrong here?",
      guideBack: "A possible response, with the move in brackets.",
      description: "You started summarising and kept going, and by the end you had said more than they did. A summary that takes as long as the original is a repetition with your name on it.\n\nWhat it usually looks like:\n• More than three points.\n• You added your own interpretation while summarising.\n• They are waiting politely for you to finish.\n\nTwo ways through:\n1. Cut to three and check — \"the main things are…\"\n2. Hand it straight back — \"have I missed anything?\" ends it properly.\n\nMindset: three clauses and a question. Anything longer and it stops being a summary.",
      inputs: [
        { q: "Your summary has gone on longer than their account.", a: "\"I'll cut that down: timing, workload, being asked last. Yes?\" [cut to three]", bundle: 'pro' },
        { q: "You slipped an interpretation into the summary.", a: "\"That last bit was mine, not yours. Ignore it — have I got the three right?\" [hand it back]", bundle: 'pro' },
        { q: "You are listing everything they said.", a: "\"What are the three that actually matter here?\" [cut to three]", bundle: 'pro' },
        { q: "They are waiting politely for you to finish.", a: "\"Sorry. Short version — have I missed anything?\" [hand it back]", bundle: 'pro' },
        { q: "You summarised and then answered your own summary.", a: "\"I've answered my version rather than yours. Correct me first.\" [hand it back]", bundle: 'pro' },
      ]
    },
    {
      name: "Your Share Became Your Turn",
      guideFront: "What has gone wrong here?",
      guideBack: "A possible response, with the move in brackets.",
      description: "You offered something of your own to show you recognised it, and then kept going. The disclosure was fine; the absence of a way back was not.\n\nWhat it usually looks like:\n• Your version is now longer than theirs.\n• They have stopped adding anything.\n• You are on the second or third detail of your own case.\n\nTwo ways through:\n1. Cut it off and return — \"anyway, that's mine. Back to you.\"\n2. Ask them the question your own story raised — turns the detour into a bridge.\n\nMindset: one sentence about you, then back. Length is what turns recognition into a hijack.",
      inputs: [
        { q: "You are three sentences into your own version.", a: "\"Anyway — that's mine and it's less interesting. Where had you got to?\" [return]", bundle: 'pro' },
        { q: "They have gone quiet while you talk about yourself.", a: "\"I've taken over. What were you going to say before I jumped in?\" [return]", bundle: 'pro' },
        { q: "Your story raised a question worth asking them.", a: "\"Mine ended badly, which is why I'm asking — is yours still fixable?\" [bridge]", bundle: 'pro' },
        { q: "You realise you have matched every point with one of your own.", a: "\"I keep answering with my own version. Tell me about yours properly.\" [return]", bundle: 'pro' },
        { q: "You want to say more and probably should not.", a: "\"There's more but it's not the point. Yours is the one with a decision in it.\" [return]", bundle: 'pro' },
      ]
    },
    {
      name: "You Agreed With Something You Do Not Believe",
      guideFront: "What has gone wrong here?",
      guideBack: "A possible response, with the move in brackets.",
      description: "You named a shared value in the moment because it was the warm thing to say, and you do not actually hold it. This gets found out, usually in the next conversation, and it costs more than the disagreement would have.\n\nWhat it usually looks like:\n• You agreed quickly and slightly too warmly.\n• You are hoping the subject does not come back.\n• You would say something different to somebody else.\n\nTwo ways through:\n1. Separate the value from the conclusion — you can often agree with one honestly.\n2. Say the honest half — \"I'd have minded too, though I'd probably have done nothing about it.\"\n\nMindset: agree with what is true. There is nearly always a true version of agreement available, and it is worth more than the generous one.",
      inputs: [
        { q: "You agreed with a principle you do not actually hold.", a: "\"Actually, let me be honest — I'd have let that one go. But I can see why you didn't.\" [honest half]", bundle: 'pro' },
        { q: "You agree with the value but not the conclusion.", a: "\"I'm with you on the principle. Whether leaving is the answer, I'm less sure.\" [separate them]", bundle: 'pro' },
        { q: "You agreed too quickly to move the conversation on.", a: "\"I said that a bit fast. What I do agree with is the being-told part.\" [honest half]", bundle: 'pro' },
        { q: "You would say something different to somebody else.", a: "\"I'll say the awkward version: I think they were careless rather than malicious.\" [honest half]", bundle: 'pro' },
        { q: "They are looking for agreement you cannot give.", a: "\"I can't tell you they were wrong. I can tell you I'd have been just as annoyed.\" [separate them]", bundle: 'pro' },
      ]
    },
    {
      name: "Checking Turned Into Interrupting",
      guideFront: "What has gone wrong here?",
      guideBack: "A possible response, with the move in brackets.",
      description: "You checked your understanding three times in five minutes and each check stopped them mid-flow. The move is right and the frequency is wrong.\n\nWhat it usually looks like:\n• They keep losing their thread.\n• You have summarised twice before the account finished.\n• Every paragraph is followed by \"so what you're saying is…\".\n\nTwo ways through:\n1. Save it for the end of a stretch — checking belongs at a pause, not inside one.\n2. Use a minimal signal instead — \"mm\", a nod, \"right\" keeps them going.\n\nMindset: check at the pauses, not at the commas. One good check beats three that break the flow.",
      inputs: [
        { q: "They keep losing their thread after your checks.", a: "(say nothing this time — let them finish the stretch) [save it]", bundle: 'pro' },
        { q: "You have summarised twice before they finished.", a: "\"Carry on — I'll check I've got it when you've said the lot.\" [save it]", bundle: 'pro' },
        { q: "Every paragraph gets a \"so what you're saying is\".", a: "\"Mm. Go on.\" [minimal signal]", bundle: 'pro' },
        { q: "You want to check but they are mid-flow.", a: "(wait for the end of the stretch, then check) [save it]", bundle: 'pro' },
        { q: "You interrupted a long account with a summary.", a: "\"Sorry, that could have waited. Where were you?\" [save it]", bundle: 'pro' },
      ]
    },
  ],
  setupquestion: [
    {
      name: "The Interview",
      guideFront: "What has gone wrong here?",
      guideBack: "A possible response, with the type in brackets.",
      description: "You have asked three questions in a row and given nothing back, and the other person has started giving shorter answers. The training is to notice the pattern early and answer your own question before you ask another one.\n\nWhat it usually looks like:\n• Their answers are getting shorter each time.\n• You have learned four things about them and they know nothing about you.\n• You are already thinking about the next question while they are still answering.\n\nTwo ways through:\n1. Answer the last one yourself — the direct repair. \"I should say mine — I came for the same reason.\"\n2. Name it lightly — costs nothing and usually gets a laugh. \"I'm interrogating you. Your turn to ask me something.\"\n\nMindset: the fix is not a better question. It is your own answer to the one you already asked.",
      inputs: [
        { q: "You have asked three questions and answered none of them.", a: "\"I've been interrogating you. Mine's the same, for what it's worth — I signed up to get better at this.\" (purpose)", bundle: 'pro' },
        { q: "Their answers are getting shorter with each question.", a: "\"I'll stop asking and give you something. I'm halfway through moving flat and it's chaos.\" (action)", bundle: 'pro' },
        { q: "You realise they know nothing about you.", a: "\"You've had all the questions. I came straight from work and I'm still winding down.\" (background)", bundle: 'pro' },
        { q: "You have asked a fourth question without giving anything back.", a: "\"Right — my turn to be useful. I've been here twice and I still don't know where the coffee is.\" (status)", bundle: 'pro' },
        { q: "You catch yourself planning the next question mid-answer.", a: "\"Say that last bit again. I stopped listening and started planning, which is rude of me.\" (status)", bundle: 'pro' },
      ]
    },
    {
      name: "The Question That Was Not Wanted",
      guideFront: "What has gone wrong here?",
      guideBack: "A possible response, with the type in brackets.",
      description: "You asked a real question and got the ritual answer — \"fine, thanks\" — and a closed door. The training is to notice they answered the greeting rather than the question, and to give your own honest answer as the way back in rather than asking again.\n\nWhat it usually looks like:\n• \"Fine, thanks\" delivered without a pause.\n• They answered the words rather than the question.\n• Asking again would be pushing, and you can feel it.\n\nTwo ways through:\n1. Answer it yourself honestly — turns a closed door into an open one. \"I'm shattered, since you didn't ask.\"\n2. Switch type — move from Status to something concrete. \"What are you working on at the moment?\"\n\nMindset: they may not have realised the question was real. Going first with your own answer is what tells them it was.",
      inputs: [
        { q: "You asked how they were and got \"fine, thanks\" and a pause.", a: "\"I'll go first, then — I'm shattered and mildly grumpy. How's your week actually been?\" (status)", bundle: 'pro' },
        { q: "The real question got the ritual answer.", a: "\"Fair enough. I'm running on four hours' sleep, which explains most things about me today.\" (status)", bundle: 'pro' },
        { q: "They clearly want the light version.", a: "\"What are you working on at the moment? I'm deep in a spreadsheet I don't understand.\" (action)", bundle: 'pro' },
        { q: "They gave the polite version and moved straight on.", a: "\"Mine's less polite — this week has been a mess. What's yours actually been like?\" (status)", bundle: 'pro' },
        { q: "You want to reopen it without asking the same thing twice.", a: "\"I won't ask again. I'll just say I'm knackered and see whether that's contagious.\" (status)", bundle: 'pro' },
      ]
    },
    {
      name: "The Blank Answer",
      guideFront: "What has gone wrong here?",
      guideBack: "A possible response, with the type in brackets.",
      description: "You asked what they have been up to and got \"not much\" — not from rudeness, but because the question was too wide to answer. The training is to narrow it rather than repeat it.\n\nWhat it usually looks like:\n• \"Not much, you?\" and nothing else.\n• A shrug and a real effort to think of something.\n• You have asked the widest possible version of the question.\n\nTwo ways through:\n1. Narrow it — \"are you reading anything?\" beats \"what's new?\" every time.\n2. Answer yours first, small — a concrete example shows the size of answer you meant.\n\nMindset: \"not much\" is almost never a refusal. It is a question that was too big to answer, and the fix is a smaller one.",
      inputs: [
        { q: "You asked what is new and got \"not much\".", a: "\"Fair. Are you watching anything at the moment? I've started something terrible and I can't stop.\" (action)", bundle: 'pro' },
        { q: "They cannot think of anything to say they have been doing.", a: "\"Mine's small too — I repainted a wardrobe badly. Have you got anything on the go?\" (action)", bundle: 'pro' },
        { q: "The question was too wide and they went blank.", a: "\"Let me narrow that. Been anywhere at all this summer? I got as far as my mother's.\" (background)", bundle: 'pro' },
        { q: "They said \"not much\" and looked slightly apologetic about it.", a: "\"Nobody has an answer to that one. Eaten anything good lately? I had a genuinely bad kebab.\" (action)", bundle: 'pro' },
        { q: "You asked about the whole year and got nothing back.", a: "\"Too big a question. Last weekend — did you do anything at all? I moved a sofa.\" (action)", bundle: 'pro' },
      ]
    },
    {
      name: "The Group Question",
      guideFront: "What has gone wrong here?",
      guideBack: "A possible response, with the type in brackets.",
      description: "You are with three or four people and a question aimed at nobody in particular lands on nobody. The training is to aim it at one person, or to answer it yourself first so the group has a shape to copy.\n\nWhat it usually looks like:\n• You ask the group and everybody waits for somebody else.\n• The question dies in the middle of the table.\n• One person answers out of politeness and it stops there.\n\nTwo ways through:\n1. Aim it — use a name or look at one person. \"How about you, Sara?\"\n2. Answer first, then hand it on — gives the table a model and a size. \"I'll start. Mine was...\"\n\nMindset: a question to everyone is a question to no one. Name someone, or go first yourself.",
      inputs: [
        { q: "You asked the whole table and nobody answered.", a: "\"I'll start, then — I came because a friend dragged me. How about you two?\" (purpose)", bundle: 'pro' },
        { q: "The question landed in the middle of a group and died.", a: "\"Let me aim that better. Sara, how do you know everyone here?\" (background)", bundle: 'pro' },
        { q: "One person answered politely and it stopped.", a: "\"That's a good one. Mine's less impressive — I've been rewatching the same series for a month.\" (action)", bundle: 'pro' },
        { q: "Two people started answering at once and both stopped.", a: "\"You go — and then I'll tell you why I'm actually here.\" (purpose)", bundle: 'pro' },
        { q: "The quietest person at the table still has not spoken.", a: "\"I haven't heard from you yet. How did you end up at this one?\" (purpose)", bundle: 'pro' },
      ]
    },
    {
      name: "You Ran Out After One",
      guideFront: "What has gone wrong here?",
      guideBack: "A possible response, with the type in brackets.",
      description: "The question worked, they answered, you answered, and then the whole thing stopped. The training is to build the next question out of their answer rather than reaching down the list for a fresh type.\n\nWhat it usually looks like:\n• A good exchange, and then silence.\n• You are mentally scanning the five types for another one.\n• Neither of you has picked up anything the other said.\n\nTwo ways through:\n1. Use a word from their answer — the next question is already inside it.\n2. Change type on purpose — a Status answer opens straight onto an Action question.\n\nMindset: you do not need a new question. You need the one that was in their last answer.",
      inputs: [
        { q: "You both answered and then it went quiet.", a: "\"You said you'd come straight from work — what is it you do?\" (action)", bundle: 'pro' },
        { q: "You are scanning for a fresh question type.", a: "\"Go back a bit — you said you nearly didn't come. Why nearly?\" (purpose)", bundle: 'pro' },
        { q: "The exchange worked and then stopped dead.", a: "\"You said Gothenburg. Is that where you're from, or just where you were?\" (background)", bundle: 'pro' },
        { q: "A status answer has nowhere obvious to go.", a: "\"Busy with what, though? I like knowing what's keeping people up.\" (action)", bundle: 'pro' },
        { q: "Neither of you picked anything up from the other.", a: "\"I'm going back one — the bit about the course. What made you pick that one?\" (purpose)", bundle: 'pro' },
      ]
    },
  ],
  givingcounterexamples: [
    {
      name: "It Landed As Contradiction",
      guideFront: "What has gone wrong with this counter-example?",
      guideBack: "A possible response, with the move in brackets.",
      description: "Your example was fine, but it arrived without the concession, so it read as \"you're wrong\" rather than \"not always\". The repair is to put the general case back in and let the exception stay an exception.\n\nWhat it usually looks like:\n• They have gone defensive and started restating the claim.\n• You said \"actually\" or \"that's not true\" first.\n• The conversation is now about the claim rather than about the subject.\n\nTwo ways through:\n1. Concede late — better than never. \"You're right in general, that's the bit I skipped.\"\n2. Shrink your own point out loud — \"I only meant it isn't universal.\"\n\nMindset: \"actually\" is the word that turns an example into a correction. Take it out and the same sentence lands completely differently.",
      inputs: [
        { q: "You said \"actually, that's not true\" and they went defensive.", a: "\"That came out wrong. You're right in general — I only meant it isn't universal.\" [concede late]", bundle: 'pro' },
        { q: "They are now arguing for the claim harder than they believe it.", a: "\"I'm not arguing against you. Most of the time it's exactly as you said.\" [concede late]", bundle: 'pro' },
        { q: "The exchange has become about who is right.", a: "\"I've made this bigger than it was. My point was only about the edge case.\" [shrink the point]", bundle: 'pro' },
        { q: "They repeat the claim more firmly than before.", a: "\"That's on me — I led with the objection instead of the agreement. You're right about most cases.\" [concede late]", bundle: 'pro' },
        { q: "You can hear that your tone did the damage rather than the words.", a: "\"Let me say that again properly. Usually it works exactly as you said. I ran into one week where it didn't.\" [concede late]", bundle: 'pro' },
      ]
    },
    {
      name: "One Case, Big Conclusion",
      guideFront: "What has gone wrong with this counter-example?",
      guideBack: "A possible response, with the move in brackets.",
      description: "You used a single exception as if it settled the whole question, and they noticed. The repair is to say what one case actually shows — that the claim is a tendency and not a rule — which is a smaller thing and much easier to agree with.\n\nWhat it usually looks like:\n• \"That's one person\" and they are right.\n• You are defending your example rather than your point.\n• You said \"so it's not true\" when you meant \"so it's not always true\".\n\nTwo ways through:\n1. Name what one case proves — \"it makes it 'usually' rather than 'always'\".\n2. Offer the narrower claim and take the agreement — \"most people, I'd sign up to.\"\n\nMindset: an exception removes the word always. It does not remove the sentence.",
      inputs: [
        { q: "They said \"that's just one person\" and it is a fair hit.", a: "\"It is one. One's enough to make it 'usually' rather than 'always', though.\" [what one case shows]", bundle: 'pro' },
        { q: "You realise you claimed too much from your example.", a: "\"I overstated it. 'Most people, most of the time' is what I actually think.\" [narrower claim]", bundle: 'pro' },
        { q: "You are defending the example rather than the point.", a: "\"Forget my case. Would you say 'nearly always' rather than 'always'?\" [narrower claim]", bundle: 'pro' },
        { q: "You said \"so it's not true\" and meant \"so it's not always true\".", a: "\"Wrong word from me. Not always — that's all I meant.\" [what one case shows]", bundle: 'pro' },
        { q: "They ask how many exceptions you actually know of.", a: "\"One I've lived and one I've watched. Not enough for a rule, enough to lose the 'always'.\" [what one case shows]", bundle: 'pro' },
      ]
    },
    {
      name: "The Example Is Invented",
      guideFront: "What has gone wrong with this counter-example?",
      guideBack: "A possible response, with the move in brackets.",
      description: "You reached for a figure or a case you do not actually have, or you are about to. The repair is to say so before it is checked, and to use a type you can stand behind instead.\n\nWhat it usually looks like:\n• You have said \"I read somewhere\" and cannot say where.\n• The number felt right rather than known.\n• You are hoping nobody asks for the source.\n\nTwo ways through:\n1. Withdraw it immediately — costs a sentence, saves the rest of your credibility.\n2. Swap the type — an imagined case, marked as imagined, does the same job honestly.\n\nMindset: a made-up example is the one mistake that spreads. When it is checked, everything else you said goes with it.",
      inputs: [
        { q: "You quoted a statistic you cannot actually source.", a: "\"I shouldn't have said that as a fact — I don't have the number. Let me find it.\" [withdraw]", bundle: 'pro' },
        { q: "You are about to invent a case that would prove your point.", a: "\"I don't have a real one. But imagine someone who works nights — does the rule hold?\" [swap the type]", bundle: 'pro' },
        { q: "They ask where your figure came from.", a: "\"Honestly, I can't source it. Treat it as a hunch until I check.\" [withdraw]", bundle: 'pro' },
        { q: "You said \"I read somewhere\" and cannot say where.", a: "\"I can't stand that one up, so ignore it. Here's one I can: I counted it myself last month.\" [swap the type]", bundle: 'pro' },
        { q: "A number that felt right has become a number you stated.", a: "\"I gave that as a fact and it was a guess. Let me get the real one before we go further.\" [withdraw]", bundle: 'pro' },
      ]
    },
    {
      name: "They Cannot Picture It",
      guideFront: "What has gone wrong with this counter-example?",
      guideBack: "A possible response, with the move in brackets.",
      description: "Your example is real but it means nothing to them — a person they do not know, a place they have not been. The repair is to swap it for something they can check against their own experience.\n\nWhat it usually looks like:\n• They nod and the point does not land.\n• You have had to explain who the person is.\n• The example needed two sentences of setup.\n\nTwo ways through:\n1. Swap to the common counter-case — \"everyone knows one person who…\"\n2. Swap to a known exception — a public case needs no introduction at all.\n\nMindset: if you have to explain the example, it is doing less work than the claim it is answering.",
      inputs: [
        { q: "You named a colleague they have never met.", a: "\"Bad example — you don't know him. Everyone knows one person who revises nothing and does fine.\" [common counter-case]", bundle: 'pro' },
        { q: "The example needed setting up and lost the room.", a: "\"Let me use an easier one. Plenty of famous books were rejected a dozen times.\" [known exception]", bundle: 'pro' },
        { q: "They nodded politely and the point did not land.", a: "\"That one's too far from here. Think of the recall last year — three days, whole product.\" [known exception]", bundle: 'pro' },
        { q: "You had to explain who the person in your example was.", a: "\"If I have to introduce him, he's the wrong example. Everyone knows one person who does the opposite.\" [common counter-case]", bundle: 'pro' },
        { q: "The reference turned out not to be shared at all.", a: "\"Forget that one. Simpler version: plenty of famous books were turned down a dozen times.\" [known exception]", bundle: 'pro' },
      ]
    },
    {
      name: "The Claim Is About Someone Present",
      guideFront: "What has gone wrong with this counter-example?",
      guideBack: "A possible response, with the move in brackets.",
      description: "The general statement is really about a person in the room, and any counter-example is going to be heard as taking sides. The repair is to move it off people entirely, or to say plainly that this is not really a general question.\n\nWhat it usually looks like:\n• \"People who do X are always Y\" and someone present does X.\n• The room has gone quiet in a specific way.\n• Your example would name or clearly point at somebody.\n\nTwo ways through:\n1. Move it off people — use an imagined case or a public one instead.\n2. Name what is happening, lightly — \"I don't think we're talking about people in general here.\"\n\nMindset: a counter-example about someone in the room is not a counter-example. It is a comment about them, and it will be received as one.",
      inputs: [
        { q: "The claim is clearly aimed at someone sitting there.", a: "\"Let's take it off people. Say someone works nights — does the rule still hold?\" [imagined case]", bundle: 'pro' },
        { q: "Your best example would obviously point at a person present.", a: "\"I've got one, and it's too close to home to be useful. There's a public one that's better.\" [known exception]", bundle: 'pro' },
        { q: "The generalisation has landed on someone in the room.", a: "\"I don't think this is really a general question, is it. Should we say the actual thing?\" [name it lightly]", bundle: 'pro' },
        { q: "Your counter-example would obviously be about the person sitting there.", a: "\"I'll keep mine out of it. Say someone had a reason we don't know about — does the rule still hold?\" [imagined case]", bundle: 'pro' },
        { q: "The room has gone quiet in that specific way.", a: "\"Let's move this off individuals. In general I'd agree with you, and there are edges.\" [name it lightly]", bundle: 'pro' },
      ]
    },
  ],
  discussing: [
    {
      name: "Two Monologues",
      guideFront: "What has gone wrong in this discussion?",
      guideBack: "A possible response, with the move in brackets.",
      description: "Both of you are stating positions and neither is taking anything in. It looks like a discussion and functions as two speeches delivered alternately. The repair is a You-Focus move — say their view back, and mean it.\n\nWhat it usually looks like:\n• Each turn starts with \"but\" or \"yeah, but\".\n• Neither of you has repeated anything the other said.\n• You could not summarise their position if asked.\n\nTwo ways through:\n1. Say their view back — the fastest way to break the pattern.\n2. Ask a real question — one you do not know the answer to.\n\nMindset: if you could not state their position in a sentence, you are not discussing. You are taking turns.",
      inputs: [
        { q: "Every turn starts with \"yeah, but\".", a: "\"I've been saying 'yeah but' for five minutes. Let me actually say your side back.\" [say it back]", bundle: 'pro' },
        { q: "You realise you could not summarise their position.", a: "\"I'm not sure I could explain your view to someone else. Say it once more?\" [say it back]", bundle: 'pro' },
        { q: "Both of you have made the same point twice.", a: "\"We're both repeating. What would change your mind on this?\" [real question]", bundle: 'pro' },
        { q: "You are waiting to speak rather than listening.", a: "\"I've been queuing rather than listening. What was the last bit?\" [say it back]", bundle: 'pro' },
        { q: "The exchange is polite and going nowhere.", a: "\"Can I ask what you'd do if it were entirely your call?\" [real question]", bundle: 'pro' },
      ]
    },
    {
      name: "Arguing About Different Things",
      guideFront: "What has gone wrong in this discussion?",
      guideBack: "A possible response, with the move in brackets.",
      description: "Ten minutes in, it turns out you meant different things by the same word, and most of the disagreement was never real. The repair is a clarifying question — and it should have come first.\n\nWhat it usually looks like:\n• The disagreement feels bigger than the subject.\n• One of you keeps saying \"that's not what I mean\".\n• A key word is doing a lot of unexamined work.\n\nTwo ways through:\n1. Narrow the word — \"all of it, or part of it?\"\n2. Ask for a case — an abstraction becomes discussable the moment it has an example in it.\n\nMindset: check what they mean before you disagree with what you heard. Half of all heated discussions are this.",
      inputs: [
        { q: "They keep saying \"that's not what I mean\".", a: "\"Then I've got the wrong end. What DO you mean by it, in one sentence?\" [narrow it]", bundle: 'pro' },
        { q: "The disagreement feels bigger than the topic warrants.", a: "\"I think we mean different things by 'broken'. Which part is broken for you?\" [narrow it]", bundle: 'pro' },
        { q: "A key word is carrying too much weight.", a: "\"Give me a case where that happened. I'll follow it much better with an example.\" [ask for a case]", bundle: 'pro' },
        { q: "You realise you have been arguing against a position they never took.", a: "\"I've been arguing with something you didn't say. Sorry — start again?\" [narrow it]", bundle: 'pro' },
        { q: "You suspect you actually agree.", a: "\"I think we might be saying the same thing in different words. Test it on me?\" [narrow it]", bundle: 'pro' },
      ]
    },
    {
      name: "It Got Personal",
      guideFront: "What has gone wrong in this discussion?",
      guideBack: "A possible response, with the move in brackets.",
      description: "The discussion has moved from the subject to the people, and the next thing said will be about character rather than about the question. The repair is to name it as a shared thing and take the heat out before anything else.\n\nWhat it usually looks like:\n• \"You always…\" has appeared.\n• Someone has brought in something from another day.\n• The tone changed and neither of you acknowledged it.\n\nTwo ways through:\n1. Name it as \"we\" — never as \"you\".\n2. Stop the discussion rather than win it — \"let's come back to this.\"\n\nMindset: winning an exchange with someone you will see tomorrow is not winning.",
      inputs: [
        { q: "\"You always do this\" has just been said.", a: "\"We've moved off the subject. Can we go back to the actual question?\" [name it as we]", bundle: 'pro' },
        { q: "Something from another day has been brought in.", a: "\"That's a separate thing and probably worth talking about, but not inside this one.\" [split it]", bundle: 'pro' },
        { q: "You are about to say something you would have to take back.", a: "\"I'm going to stop before I say something daft. Give me ten minutes.\" [stop it]", bundle: 'pro' },
        { q: "The tone has changed and nobody has said so.", a: "\"This has gone a bit tense, hasn't it. I'd rather say that than pretend.\" [name it as we]", bundle: 'pro' },
        { q: "You want to win more than you want to be right.", a: "\"I've stopped listening and started competing. That's on me.\" [name it as we]", bundle: 'pro' },
      ]
    },
    {
      name: "The Floor Is Not Shared",
      guideFront: "What has gone wrong in this discussion?",
      guideBack: "A possible response, with the move in brackets.",
      description: "One person has had almost all the airtime — sometimes you, sometimes them, sometimes a third person in a group. The repair depends on which, but both versions are the same move: put the balance back deliberately.\n\nWhat it usually looks like:\n• You have spoken for four minutes without a pause.\n• Or: you have said almost nothing and are now resentful about it.\n• In a group, the quietest person has said one sentence.\n\nTwo ways through:\n1. Hand it over explicitly — \"I've had a good run at this. What do you think?\"\n2. Take your turn explicitly — \"Can I have thirty seconds? I've not said much.\"\n\nMindset: airtime is part of the discussion, not a side effect of it. Notice it and say something.",
      inputs: [
        { q: "You have been talking for four minutes.", a: "\"I've had a good run at that. What's your read on it?\" [hand it over]", bundle: 'pro' },
        { q: "You have said almost nothing and are starting to resent it.", a: "\"Can I jump in? I've not said much and I do have a view.\" [take your turn]", bundle: 'pro' },
        { q: "The quietest person in the group has said one sentence.", a: "\"Sara, you've been quiet — what do you make of it?\" [hand it over]", bundle: 'pro' },
        { q: "Someone keeps talking over the same person.", a: "\"Hang on, she was still going. You were saying?\" [hand it over]", bundle: 'pro' },
        { q: "You keep starting to speak and being cut off.", a: "\"Third time I've tried to say this — give me twenty seconds.\" [take your turn]", bundle: 'pro' },
      ]
    },
    {
      name: "You Have Changed Your Mind",
      guideFront: "What has gone wrong in this discussion?",
      guideBack: "A possible response, with the move in brackets.",
      description: "Somewhere in the discussion they have convinced you, and now saying so feels like losing. It is not, and saying it plainly is the single most useful thing that can happen in a discussion — it is also what makes people willing to have the next one with you.\n\nWhat it usually looks like:\n• You are defending a position you no longer hold.\n• You are looking for a small point to be right about instead.\n• You want to concede but only quietly.\n\nTwo ways through:\n1. Say it plainly and name what changed it — \"the bit about the night shift did it\".\n2. Concede the part, not the whole — if only some of it moved you, say which.\n\nMindset: changing your mind is the discussion working. Concede out loud, and name what did it — that is a compliment as well as an answer.",
      inputs: [
        { q: "They have convinced you and you are still arguing.", a: "\"I'm defending something I don't think any more. You're right about the shift cover.\" [say it plainly]", bundle: 'pro' },
        { q: "You are hunting for a small point to be right about.", a: "\"I'm picking at details to avoid saying you've changed my mind. So — you have.\" [say it plainly]", bundle: 'pro' },
        { q: "Only half of their case moved you.", a: "\"The cost argument I'll give you. The timing one I still don't buy.\" [concede the part]", bundle: 'pro' },
        { q: "Conceding feels like losing in front of others.", a: "\"I've come round to your view on this, for the record.\" [say it plainly]", bundle: 'pro' },
        { q: "You want to concede but only quietly.", a: "\"Say the bit about the night shift again — that's the part that landed.\" [name what did it]", bundle: 'pro' },
      ]
    },
  ],
  storybanter: [
    {
      name: "You Blocked It",
      guideFront: "What has gone wrong in this banter?",
      guideBack: "A possible response, with the move in brackets.",
      description: "You answered an invented detail with a fact, and the story stopped. Blocking is almost never meant — it comes out as a reflex to correct something — but the effect is the same, and it is the one failure the form cannot absorb.\n\nWhat it usually looks like:\n• \"That wouldn't happen, though.\"\n• \"Well, you couldn't actually do that.\"\n• A small silence, and then somebody changes the subject.\n\nTwo ways through:\n1. Take it back and accept it — out loud, lightly. \"Ignore me. Yes, and…\"\n2. Accept it too hard — over-agree, which repairs the block and is funnier than the original.\n\nMindset: nothing in a made-up story needs to be possible. The only rule is that you build on what you were given.",
      inputs: [
        { q: "You said \"that wouldn't happen\" and the story stopped.", a: "\"Ignore me, I'm being boring. Yes — and the dog has a locker now.\" [take it back]", bundle: 'pro' },
        { q: "You corrected a detail out of reflex.", a: "\"Forget the physics. He's in the fort. The fort is the point.\" [accept it]", bundle: 'pro' },
        { q: "You answered an absurd plan with a practical objection.", a: "\"You know what, you're right, it'd work perfectly. That's the terrifying part.\" [accept it too hard]", bundle: 'pro' },
        { q: "There is a small silence after something you said.", a: "\"That was me killing it, sorry. Where were we — the pizzas?\" [take it back]", bundle: 'pro' },
        { q: "You are about to say \"but\".", a: "\"Yes, AND — because 'but' is how I lose friends.\" [accept it]", bundle: 'pro' },
      ]
    },
    {
      name: "It Went Flat",
      guideFront: "What has gone wrong in this banter?",
      guideBack: "A possible response, with the move in brackets.",
      description: "The last few turns have all been agreeable and nothing is at stake. The story is pleasant, which is the state it dies in. The repair is a problem, not a better joke.\n\nWhat it usually looks like:\n• Two or three turns in a row that just add nice things.\n• Both of you waiting for the other to be funny.\n• The energy has dropped and neither of you has said so.\n\nTwo ways through:\n1. Complicate it — What If, aimed at the situation.\n2. Bring someone in — a new person with a reaction restarts it for free.\n\nMindset: a flat story needs a problem, not a punchline. Give the other person something to be funny about.",
      inputs: [
        { q: "Nothing has gone wrong in the story for three turns.", a: "\"What if your mum's been home the whole time, though?\" [complicate]", bundle: 'pro' },
        { q: "You are both waiting for the other one to be funny.", a: "\"Right, this is where the neighbour appears at the fence.\" [bring someone in]", bundle: 'pro' },
        { q: "The story is a list of pleasant things.", a: "\"What if it works so well that they make it your permanent job?\" [complicate]", bundle: 'pro' },
        { q: "The energy has gone and neither of you has said so.", a: "\"And the dog has been watching this whole plan with open contempt.\" [bring someone in]", bundle: 'pro' },
        { q: "You have added three details and none of them landed.", a: "\"So what happens when someone actually knocks on the fort?\" [then what]", bundle: 'pro' },
      ]
    },
    {
      name: "It Got Personal",
      guideFront: "What has gone wrong in this banter?",
      guideBack: "A possible response, with the move in brackets.",
      description: "A complication landed on the person rather than on the situation — a joke about their laziness rather than about the imaginary week off. The form only works while everything absurd is happening to an invented version of things.\n\nWhat it usually looks like:\n• The \"what if\" was about them being bad at something.\n• They laughed a beat late, or not quite.\n• The story is suddenly about a real thing.\n\nTwo ways through:\n1. Move the target back to the situation — immediately, without a speech about it.\n2. Turn it on yourself — the fastest repair there is.\n\nMindset: everything in the story is invented, including the version of them in it. The moment it is about the real person, it stops being banter.",
      inputs: [
        { q: "Your complication was really a dig at them.", a: "\"Actually scrap that — what if it's me who gets caught, hiding in your fort?\" [turn it on yourself]", bundle: 'pro' },
        { q: "They laughed half a beat late.", a: "\"Anyway, the pizzas. Thirty of them. That's the real crisis here.\" [back to the situation]", bundle: 'pro' },
        { q: "The story has drifted onto something real about them.", a: "\"This has stopped being made up, hasn't it. Back to the dog doing maths.\" [back to the situation]", bundle: 'pro' },
        { q: "You made a joke about something they actually mind.", a: "\"That one was on me and it wasn't funny. Where were we — the council man?\" [take it back]", bundle: 'pro' },
        { q: "You are about to aim a what-if at them rather than at the plan.", a: "\"What if I turn up as well and make it twice as bad?\" [turn it on yourself]", bundle: 'pro' },
      ]
    },
    {
      name: "It Went On Too Long",
      guideFront: "What has gone wrong in this banter?",
      guideBack: "A possible response, with the move in brackets.",
      description: "The best moment has passed and you are both still going. Everyone remembers the four extra minutes; nobody remembers a story that stopped one turn early.\n\nWhat it usually looks like:\n• The biggest laugh was three turns ago.\n• You are inventing rather than building.\n• Someone has checked their phone.\n\nTwo ways through:\n1. Land it flat — one sentence that closes it, then a change of subject.\n2. Hand it to them to finish — \"how does this end?\" gets a last line and an exit.\n\nMindset: stop while it is still funny. Ending one turn early is invisible; ending three turns late is the thing people remember.",
      inputs: [
        { q: "The biggest laugh was three turns ago.", a: "\"Anyway — that's how you end up moving cities. Right, coffee?\" [land it]", bundle: 'pro' },
        { q: "You are inventing rather than building on each other.", a: "\"Go on, how does this actually end? Give me the last bit.\" [hand it over]", bundle: 'pro' },
        { q: "Someone has checked their phone.", a: "\"I'm going to leave it there while it's still good. The dog got a promotion, the end.\" [land it]", bundle: 'pro' },
        { q: "The story has no natural stopping point.", a: "\"Let's stop before the council gets properly involved.\" [land it]", bundle: 'pro' },
        { q: "You want one more turn and probably should not have it.", a: "\"One more and I ruin it. Your ending, and then we're done.\" [hand it over]", bundle: 'pro' },
      ]
    },
    {
      name: "You Have Nothing",
      guideFront: "What has gone wrong in this banter?",
      guideBack: "A possible response, with the move in brackets.",
      description: "It is your turn, the story is going well, and your mind is completely blank. The mistake is waiting until you think of something clever. Two of the six techniques need no invention at all.\n\nWhat it usually looks like:\n• A pause that has gone on a beat too long.\n• You are searching for something funny rather than something next.\n• You say \"yeah\" and the turn passes to nobody.\n\nTwo ways through:\n1. Follow the consequence — \"so then what happens is…\" requires no idea, only their last line.\n2. Ask a playful question — an invitation is always available and always in bounds.\n\nMindset: you do not need an idea. You need a next thing, and their last line already contains one.",
      inputs: [
        { q: "It is your turn and your mind is blank.", a: "\"So then your mum gets home before the boxes do.\" [follow the consequence]", bundle: 'pro' },
        { q: "You are hunting for something clever.", a: "\"Wait — what does the dog think about all this?\" [ask a question]", bundle: 'pro' },
        { q: "You said \"yeah\" and the story stalled.", a: "\"Which means by Friday you're basically nocturnal.\" [follow the consequence]", bundle: 'pro' },
        { q: "The pause has gone on a beat too long.", a: "\"Okay, but where does the fort actually go? Physically.\" [ask a question]", bundle: 'pro' },
        { q: "Everything you think of feels flat.", a: "\"Yes, and — I don't know where that goes yet, but yes and.\" [yes and]", bundle: 'pro' },
      ]
    },
  ],
  explainthings2: [
    {
      name: "You Answered the Literal Question",
      guideFront: "What has gone wrong with this explanation?",
      guideBack: "A possible response, with the move in brackets.",
      description: "They asked what something is, you told them what it is, and it helped nobody — because what they wanted was whether it had anything to do with them. The repair is to give a different W rather than a better version of the same one.\n\nWhat it usually looks like:\n• They nod and nothing happens behind it.\n• They ask the same question again in slightly different words.\n• They could see the object while you defined it.\n\nTwo ways through:\n1. Switch to Who or When — the two that answer relevance.\n2. Ask which part they are stuck on — six words, no cost.\n\nMindset: a correct answer that helps nobody is still a failed explanation.",
      inputs: [
        { q: "You defined the thing and they still look blank.", a: "\"That was the what, and it didn't land. The point is you stop chasing people.\" [switch W]", bundle: 'pro' },
        { q: "They asked what it is while holding it.", a: "\"You can see what it is — it's for dark mornings, mainly.\" [switch W]", bundle: 'pro' },
        { q: "They have asked the same question twice.", a: "\"I'm answering the wrong bit. Which part is unclear — what it does, or whether you'd want one?\" [ask]", bundle: 'pro' },
        { q: "You are about to repeat the definition more slowly.", a: "\"Let me come at it differently: it's for people with more than one calendar.\" [switch W]", bundle: 'pro' },
        { q: "They asked in a shop, deciding between two.", a: "\"For what you'd use it for, they're the same. The difference only matters if you carry it daily.\" [switch W]", bundle: 'pro' },
      ]
    },
    {
      name: "The Lecture",
      guideFront: "What has gone wrong with this explanation?",
      guideBack: "A possible response, with the move in brackets.",
      description: "You started long, and by the time you reached the useful part they had stopped following. The repair is to stop where you are, give the one-sentence version, and let them ask.\n\nWhat it usually looks like:\n• Three \"rights\" in a row.\n• You are two minutes in and have not reached the point.\n• You began with background because it felt thorough.\n\nTwo ways through:\n1. Land it in one sentence — say the short version now, late.\n2. Hand them the choice — \"want the rest, or is that enough?\"\n\nMindset: nobody has ever complained that an explanation was too short. They ask, if it was.",
      inputs: [
        { q: "They have said \"right\" three times.", a: "\"I'll land this: it's a shared list where every line has one owner.\" [land it]", bundle: 'pro' },
        { q: "You are two minutes in and still on the background.", a: "\"I've buried the point. The point is it stops things sitting unclaimed.\" [land it]", bundle: 'pro' },
        { q: "You can hear yourself going on.", a: "\"That's more than you asked for. Do you want the rest or is that plenty?\" [hand them the choice]", bundle: 'pro' },
        { q: "You started with the history of the thing.", a: "\"Skip all that — what it does is give every task one name against it.\" [land it]", bundle: 'pro' },
        { q: "Someone asked a small question and got four minutes.", a: "\"Short answer, which I should have led with: yes, and it takes ten seconds.\" [land it]", bundle: 'pro' },
      ]
    },
    {
      name: "Everybody Benefits",
      guideFront: "What has gone wrong with this explanation?",
      guideBack: "A possible response, with the move in brackets.",
      description: "Your explanation makes the thing sound useful to everyone, which is exactly what an advertisement sounds like. The repair is to name who it is not for, which makes the rest believable again.\n\nWhat it usually looks like:\n• You have listed four benefits and no drawbacks.\n• They have gone politely non-committal.\n• You would not actually recommend it to them, and you have not said so.\n\nTwo ways through:\n1. Name who it is not for — the honest half of Who.\n2. Say where they sit — directly, even when it is a no.\n\nMindset: an explanation with no \"not for you\" in it is a pitch, and people hear the difference immediately.",
      inputs: [
        { q: "You have made it sound useful to absolutely everyone.", a: "\"To be fair, if you cook twice a week it's just a big object in a cupboard.\" [who it is not for]", bundle: 'pro' },
        { q: "They have gone politely non-committal.", a: "\"Honestly, for what you do, I don't think you'd use it.\" [say where they sit]", bundle: 'pro' },
        { q: "You are describing something you love to someone who would not use it.", a: "\"I'm biased. For your setup it'd be solving a problem you don't have.\" [say where they sit]", bundle: 'pro' },
        { q: "They ask if they should get one and you are not sure.", a: "\"It depends on one thing — do you carry it daily? If not, no.\" [name the condition]", bundle: 'pro' },
        { q: "Every sentence has been a benefit.", a: "\"The catch is it takes about a week before it saves you any time at all.\" [name the drawback]", bundle: 'pro' },
      ]
    },
    {
      name: "No Shelf To Put It On",
      guideFront: "What has gone wrong with this explanation?",
      guideBack: "A possible response, with the move in brackets.",
      description: "You have explained the mechanics of something with an unfamiliar shape, and none of it stuck because they had nowhere to put it. The repair is to go back and give the setting and the group first.\n\nWhat it usually looks like:\n• They are following each sentence and retaining none of them.\n• You began with how it works.\n• They ask \"but what is it for?\" after a perfectly clear description.\n\nTwo ways through:\n1. Give it neighbours — what it sits between, before, after.\n2. Give the setting first, then the mechanics.\n\nMindset: give it a shelf before you give it a manual.",
      inputs: [
        { q: "They followed every sentence and retained nothing.", a: "\"Let me place it first: it's an office thing, for teams that share rooms.\" [setting first]", bundle: 'pro' },
        { q: "You opened with how it works.", a: "\"That's the how. Where it sits is right after the draft, before anyone else reads it.\" [neighbours]", bundle: 'pro' },
        { q: "They ask what it's for after a clear description.", a: "\"Fair — it belongs to the booking bit. Everything before that stays the same.\" [setting first]", bundle: 'pro' },
        { q: "The thing has no obvious category.", a: "\"Closest thing is a kitchen timer, but for people rather than food.\" [neighbours]", bundle: 'pro' },
        { q: "They cannot tell whether it is a tool or a service.", a: "\"It's a service that looks like a tool. That confuses everybody at first.\" [neighbours]", bundle: 'pro' },
      ]
    },
    {
      name: "The Wrong Level of Detail",
      guideFront: "What has gone wrong with this explanation?",
      guideBack: "A possible response, with the move in brackets.",
      description: "You pitched it at the wrong depth — too technical for the person in front of you, or so simplified that it sounded evasive. The repair is to name the level out loud and let them choose.\n\nWhat it usually looks like:\n• Their questions are more basic than your answers.\n• Or: they are visibly waiting for you to get past the obvious.\n• You are guessing what they know and guessing wrong in both directions.\n\nTwo ways through:\n1. Ask what they already know — one sentence, and it saves five.\n2. Offer the two versions — \"the simple one or the real one?\"\n\nMindset: you cannot guess someone's starting point reliably. Asking takes six words.",
      inputs: [
        { q: "Their questions are more basic than your answers.", a: "\"I've pitched this too high. Start again: it's a list, shared between people.\" [simpler]", bundle: 'pro' },
        { q: "They are waiting for you to get past the obvious.", a: "\"You know all this — skip to the bit that's different, which is the ownership rule.\" [go deeper]", bundle: 'pro' },
        { q: "You have no idea what they already know.", a: "\"How much of this do you already deal with? I'll start from there.\" [ask]", bundle: 'pro' },
        { q: "You are explaining to two people with very different backgrounds.", a: "\"I'll do the simple version, and grab me afterwards for the detail.\" [offer both]", bundle: 'pro' },
        { q: "You simplified so hard it sounded evasive.", a: "\"That was too neat. The honest version is messier — there are two systems and they don't quite agree.\" [go deeper]", bundle: 'pro' },
      ]
    },
  ],
  buildingastory: [
    {
      name: "The Setup Ate the Story",
      guideFront: "What has gone wrong with this story?",
      guideBack: "A possible response, with the move in brackets.",
      description: "You are two minutes in and nothing has happened yet. Everybody who needed to be introduced has been introduced, and the room has quietly gone. It is the most common failure in the pack and it always has the same cause: explaining before starting.\n\nWhat it usually looks like:\n• You are still describing who people are.\n• Somebody has said \"right\" twice while you set the scene.\n• The interesting bit is still two sentences away.\n\nTwo ways through:\n1. Jump to the turn — say it now and backfill only what is needed.\n2. Restart the opening out loud — costs nothing and usually gets a laugh.\n\nMindset: context can arrive late. Attention cannot.",
      inputs: [
        { q: "You are two minutes in and nothing has happened.", a: "\"Right, I'm burying this — the point is the lift stopped with four of us in it.\" [jump to the turn]", bundle: 'pro' },
        { q: "You are still explaining who everyone is.", a: "\"You don't need any of that. Someone I work with had already told them.\" [jump to the turn]", bundle: 'pro' },
        { q: "Somebody has said \"right\" twice during your setup.", a: "\"Let me start again properly: I got locked out of the building with my laptop inside.\" [restart]", bundle: 'pro' },
        { q: "The story needs context but not this much.", a: "\"One thing you need: my brother had the only key. That's it, that's the background.\" [restart]", bundle: 'pro' },
        { q: "You can hear yourself explaining rather than telling.", a: "\"I'll do this the other way round — here's what happened, then I'll explain.\" [jump to the turn]", bundle: 'pro' },
      ]
    },
    {
      name: "There Is No Turn",
      guideFront: "What has gone wrong with this story?",
      guideBack: "A possible response, with the move in brackets.",
      description: "You have told a sequence of events and nothing in it changed. It was a day, described. Sometimes the story genuinely has no turn, and the honest move is to say so rather than keep hoping one arrives.\n\nWhat it usually looks like:\n• You are still adding events, hoping one lands.\n• The listener is waiting politely for the point.\n• You have said \"and then\" four times.\n\nTwo ways through:\n1. Find the smallest turn in it — a realisation counts, and so does a decision.\n2. Abandon it lightly — \"this is going nowhere\" is a better ending than eight more sentences.\n\nMindset: if you cannot name the moment it changed, you have an anecdote about a day. That is allowed — just do not tell it as though it has a punchline coming.",
      inputs: [
        { q: "You are adding events hoping one of them lands.", a: "\"None of this is going anywhere, is it. Anyway — how was Denmark?\" [abandon]", bundle: 'pro' },
        { q: "The story is a description of an afternoon.", a: "\"The bit that actually got me was realising I'd been in the wrong queue the whole time.\" [find the turn]", bundle: 'pro' },
        { q: "You have said \"and then\" four times.", a: "\"Let me get to the thing: none of it mattered because the office was shut.\" [find the turn]", bundle: 'pro' },
        { q: "There is genuinely no turn in it.", a: "\"That's it, that's the story. It was a very ordinary Thursday.\" [abandon]", bundle: 'pro' },
        { q: "The listener is waiting for a point you do not have.", a: "\"You had to be there. You weren't. I've oversold this.\" [abandon]", bundle: 'pro' },
      ]
    },
    {
      name: "The Ending Got Mumbled",
      guideFront: "What has gone wrong with this story?",
      guideBack: "A possible response, with the move in brackets.",
      description: "You had the laugh you wanted three sentences ago and now you are winding down rather than landing. The ending arrives as an afterthought and the listener cannot tell whether you are finished.\n\nWhat it usually looks like:\n• \"…anyway, yeah.\"\n• You explained the ending instead of saying it.\n• Somebody said \"right\" and you both moved on awkwardly.\n\nTwo ways through:\n1. Say the last line on purpose — the one you told it for, put last.\n2. Land it flat — \"so we drove home, that's it\" is a perfectly good ending.\n\nMindset: the ending is what they remember. Say it, then stop talking.",
      inputs: [
        { q: "You are about to say \"anyway, yeah\".", a: "\"…and that's how I ended up carrying a door through town.\" [say the last line]", bundle: 'pro' },
        { q: "You never actually said how it ended.", a: "\"Oh — and it was fine. She'd taken it home by mistake.\" [land it]", bundle: 'pro' },
        { q: "The story has no punchline and you are searching for one.", a: "\"So we drove home. That's genuinely it.\" [land it flat]", bundle: 'pro' },
        { q: "You explained the ending rather than saying it.", a: "\"Short version of that: he still says it wasn't his fault.\" [say the last line]", bundle: 'pro' },
        { q: "You have wound down instead of finishing.", a: "\"I've never parked there since. That's the end of it.\" [land it]", bundle: 'pro' },
      ]
    },
    {
      name: "The Moral Was Bolted On",
      guideFront: "What has gone wrong with this story?",
      guideBack: "A possible response, with the move in brackets.",
      description: "The story was fine and then you added a lesson it did not have. A forced takeaway makes an honest anecdote sound like a parable, and everybody can hear the seam.\n\nWhat it usually looks like:\n• \"I suppose what it taught me was…\" after a story about a lift.\n• The lesson is more general than the story.\n• You added it because the ending felt too small.\n\nTwo ways through:\n1. Take it off — say there is no lesson, which is often the better ending.\n2. Swap it for the honest one — usually smaller and more specific than the invented version.\n\nMindset: an ending does not need to mean anything. \"It was just a strange day\" is a complete sentence.",
      inputs: [
        { q: "You have attached a lesson to a story that has none.", a: "\"I was making that mean something. It doesn't. It was just funny.\" [take it off]", bundle: 'pro' },
        { q: "The moral is much bigger than the story.", a: "\"That's overclaiming. What actually changed is I check the bag now.\" [swap it]", bundle: 'pro' },
        { q: "You added a lesson because the ending felt thin.", a: "\"There's no moral. That's genuinely the whole thing and I liked it.\" [take it off]", bundle: 'pro' },
        { q: "The real takeaway is less flattering than the invented one.", a: "\"The honest version is it was my fault and I knew at the time.\" [swap it]", bundle: 'pro' },
        { q: "You are about to say \"I suppose what it taught me was\".", a: "\"No lesson. Just a very odd Tuesday.\" [take it off]", bundle: 'pro' },
      ]
    },
    {
      name: "You Missed the Moment",
      guideFront: "What has gone wrong with this story?",
      guideBack: "A possible response, with the move in brackets.",
      description: "You had something worth telling and by the time you had decided which story and how to start it, the conversation had moved. Nearly all missed stories are lost here rather than to a shortage of material.\n\nWhat it usually looks like:\n• You are still choosing between two while the subject changes.\n• You wanted the best one rather than the first one.\n• The moment has gone and you are quietly annoyed about it.\n\nTwo ways through:\n1. Take it back — \"going back a bit\" costs nothing and works.\n2. Next time, start before you have finished choosing — the shape will carry it.\n\nMindset: fifteen seconds. Then start, even if you have not worked out the ending yet.",
      inputs: [
        { q: "The subject changed while you were choosing.", a: "\"Going back a bit — this is what your bus thing reminded me of.\" [take it back]", bundle: 'pro' },
        { q: "You were picking the best story instead of the first.", a: "\"I've got a smaller one that's actually more to the point.\" [take it back]", bundle: 'pro' },
        { q: "You are still deciding and it is your turn now.", a: "\"Right — this is about a bike, and I'll work out why as I go.\" [start anyway]", bundle: 'pro' },
        { q: "You know the story is good but not how to begin it.", a: "\"I'll start in the wrong place and fix it: I ended up carrying a wardrobe.\" [start anyway]", bundle: 'pro' },
        { q: "The moment has passed and you are annoyed about it.", a: "\"That reminds me of something from earlier that I never said. Can I?\" [take it back]", bundle: 'pro' },
      ]
    },
  ],
  reframing: [
    {
      name: "It Landed as Denial",
      guideFront: "What has gone wrong with this reframe?",
      guideBack: "A possible response, with the move in brackets.",
      description: "The positive reading required leaving something out, and the other person noticed. A reframe that ignores part of the facts is not a reframe; it is a request to pretend, and it costs trust rather than helping.\n\nWhat it usually looks like:\n• \"Yes, but you're forgetting that…\"\n• They list the things your reading skipped.\n• The conversation has become about whether it was really that bad.\n\nTwo ways through:\n1. Concede the part you skipped — immediately and without defending it.\n2. Drop the reframe entirely — \"you're right, I was making it smaller than it is.\"\n\nMindset: a reframe has to hold every fact that the original one held. If it does not, it is a nicer story rather than a truer one.",
      inputs: [
        { q: "They pointed out what your reading ignored.", a: "\"You're right — I skipped the money, and the money is the actual problem.\" [concede]", bundle: 'pro' },
        { q: "You made it sound smaller than it is.", a: "\"I was making that smaller than it is. It's genuinely a mess.\" [drop it]", bundle: 'pro' },
        { q: "The upside you named requires ignoring the cost.", a: "\"That upside doesn't pay for the cost, does it. Forget it.\" [concede]", bundle: 'pro' },
        { q: "They are now arguing that it really was that bad.", a: "\"It was that bad. I don't want to win an argument about how bad it was.\" [drop it]", bundle: 'pro' },
        { q: "You reached for a silver lining out of habit.", a: "\"That was a reflex, not a thought. What's actually the hardest part of it?\" [drop it]", bundle: 'pro' },
      ]
    },
    {
      name: "You Reframed Too Early",
      guideFront: "What has gone wrong with this reframe?",
      guideBack: "A possible response, with the move in brackets.",
      description: "The reading was right and the timing was wrong. Offered before the person has been acknowledged, a reframe is heard as being told how to feel, and the effect is that they stop telling you things.\n\nWhat it usually looks like:\n• They repeat the complaint, louder, rather than taking the reframe.\n• \"I know, I know\" and then no engagement.\n• It happened within a few minutes of the event.\n\nTwo ways through:\n1. Go back and acknowledge — late is much better than never.\n2. Park it out loud — \"I've got a thought about it, but not today.\"\n\nMindset: acknowledgement first, always. Most reframes that fail were correct and premature.",
      inputs: [
        { q: "They repeated the complaint louder instead of taking your reading.", a: "\"I jumped ahead. That's a genuinely rubbish thing to have happened.\" [acknowledge]", bundle: 'pro' },
        { q: "You offered perspective five minutes after the event.", a: "\"Ignore me, it's far too early for that. How are you doing?\" [park it]", bundle: 'pro' },
        { q: "They said \"I know, I know\" and went quiet.", a: "\"I've been trying to fix it and you didn't ask me to. Tell me the rest.\" [acknowledge]", bundle: 'pro' },
        { q: "You can see the reframe is right but they are not ready.", a: "\"There's another way of looking at it. Ask me next week if you want it.\" [park it]", bundle: 'pro' },
        { q: "They have gone quiet after your third helpful angle.", a: "\"I'll stop being useful. That sounds like it's been a horrible week.\" [acknowledge]", bundle: 'pro' },
      ]
    },
    {
      name: "It Sounded Like a Correction",
      guideFront: "What has gone wrong with this reframe?",
      guideBack: "A possible response, with the move in brackets.",
      description: "The content was fine and the framing made it a lesson. \"You should look at it as…\" tells somebody their reading is wrong, and people defend a reading they have been told is wrong even when they had not much liked it.\n\nWhat it usually looks like:\n• You started with \"you should\" or \"you need to\".\n• You presented the reframe as the correct view rather than another one.\n• They have started defending an interpretation they did not care much about.\n\nTwo ways through:\n1. Mark it as one reading — \"one way to look at it\", not \"the way\".\n2. Own the uncertainty — \"I might be wrong about this.\"\n\nMindset: offer, do not correct. \"Here's another way to see it\" and \"you're seeing it wrong\" contain the same information and produce opposite conversations.",
      inputs: [
        { q: "You said \"you should see it as a good thing\".", a: "\"Let me say that better — one way to look at it is that it surfaced early.\" [mark it]", bundle: 'pro' },
        { q: "They are defending a reading they did not seem attached to.", a: "\"I'm not trying to talk you out of yours. Mine's just an option.\" [mark it]", bundle: 'pro' },
        { q: "Your reframe arrived as a lesson.", a: "\"That came out like advice and I didn't mean it to. I might be wrong anyway.\" [own the uncertainty]", bundle: 'pro' },
        { q: "You have repeated the same reframe twice.", a: "\"I'll stop. You've heard it and you can do what you like with it.\" [mark it]", bundle: 'pro' },
        { q: "You are about to say \"you need to stop thinking of it as\".", a: "\"Can I offer a different angle? Throw it out if it's no use.\" [mark it]", bundle: 'pro' },
      ]
    },
    {
      name: "The Humour Landed on Them",
      guideFront: "What has gone wrong with this reframe?",
      guideBack: "A possible response, with the move in brackets.",
      description: "You aimed the scale joke at their reaction rather than at the size of the thing, and it came out as \"you're overreacting\". The move is only warm when the target is the event.\n\nWhat it usually looks like:\n• A laugh that arrived half a beat late, or not at all.\n• The joke implied the feeling was silly.\n• They have gone quiet or become defensive.\n\nTwo ways through:\n1. Repair it plainly — \"that came out as though I was making fun of you\".\n2. Turn the scale on yourself — the fastest available fix.\n\nMindset: shrink the event, never the reaction. The first is a relief and the second is a criticism with a smile on it.",
      inputs: [
        { q: "The laugh came half a beat late.", a: "\"That came out wrong — I was aiming at the glass, not at you.\" [repair]", bundle: 'pro' },
        { q: "Your joke implied the feeling was silly.", a: "\"I'd have been mortified too, for the record. I once did the same thing at a wedding.\" [turn it on yourself]", bundle: 'pro' },
        { q: "They have gone quiet after your remark.", a: "\"Sorry. Genuinely, though, is it bothering you more than it looks?\" [repair]", bundle: 'pro' },
        { q: "You are about to say \"it's not that big a deal\".", a: "\"It feels enormous right now, I know. From outside it's a spilt glass.\" [repair]", bundle: 'pro' },
        { q: "The thing is small but the feeling clearly is not.", a: "\"The thing is small and the feeling isn't. Those can both be true.\" [repair]", bundle: 'pro' },
      ]
    },
    {
      name: "Somebody Is Reframing You",
      guideFront: "What has gone wrong with this reframe?",
      guideBack: "A possible response, with the move in brackets.",
      description: "You are on the receiving end — every feeling you report comes back as a lesson or a bright side, and you are starting to stop mentioning things. This is worth having a sentence ready for.\n\nWhat it usually looks like:\n• \"At least…\" arrives before you have finished a sentence.\n• You leave feeling worse and cannot say why.\n• You have stopped telling them the difficult things.\n\nTwo ways through:\n1. Ask for what you want instead — \"I'd rather just be annoyed about it for a bit.\"\n2. Say the effect plainly — \"when it gets turned into a lesson I stop wanting to say anything.\"\n\nMindset: you are allowed to decline a reframe. \"I know, and I'm not ready to be sensible about it yet\" is a complete sentence.",
      inputs: [
        { q: "Every complaint comes back as a silver lining.", a: "\"I know there's an upside. I'd like to be fed up about it for one more day first.\" [ask for what you want]", bundle: 'pro' },
        { q: "They keep turning your feelings into lessons.", a: "\"When it turns into a lesson straight away, I stop wanting to bring things up.\" [say the effect]", bundle: 'pro' },
        { q: "You are told to be grateful for the parts that went well.", a: "\"I am grateful for those. It's still a bad outcome and I'd like to say so.\" [ask for what you want]", bundle: 'pro' },
        { q: "You have started keeping things to yourself.", a: "\"Can I just tell you about it without us fixing it? That's all I want today.\" [ask for what you want]", bundle: 'pro' },
        { q: "\"At least it wasn't worse\" has arrived too fast, again.", a: "\"It could have been worse and it's still bad. Both of those are true.\" [say the effect]", bundle: 'pro' },
      ]
    },
  ],
  danbacon1: [
    {
      name: "The \"Interrogation\" Trap",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "When the woman is asking you standard, logical questions. Most guys answer these directly and kill the spark. You need to use humor or statements to keep the vibe flirtatious and unpredictable.",
      inputs: [
        { q: "She asks, \"What do you do for fun?\"", a: "\"I've been learning to cook bread, which has been a total disaster. What about you? Do you have any secret talents or are you just a weakling?\" (Statement-Question / Mocking)", bundle: 'pro' },
        { q: "She asks, \"Where are you from originally?\"", a: "\"Richmond. You know what they say about girls from Richmond, right? [Wait] They have great manners and buy empty-handed guys a drink.\" (Unexpected Reactions)", bundle: 'pro' },
        { q: "She asks, \"How many women have you slept with?\"", a: "\"What, actually slept with? Like, gone to sleep? Because usually I just have sex and leave. [Laugh] Just kidding.\" (Unexpected Reactions)", bundle: 'pro' },
        { q: "She asks, \"Do you say that to all the girls?\"", a: "\"I’m actually a bit disappointed you’d use such a cliché line on me. You seem smarter than that. Come on, try again.\" (Misinterpreting Intent)", bundle: 'pro' },
        { q: "She asks, \"Would you stay with a girl if she put on weight?\"", a: "\"What? We’re not even dating yet and you’re already worried about me dumping you? Relax, girl!\" (Misinterpreting Intent)", bundle: 'pro' },
      ]
    },
  ],
  danbacon2: [
    {
      name: "Confidence Attacks",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "When a woman uses \"scolding\" or \"mean\" comments to see if you will crumble. These are standard tests of your masculine frame. You must pass them by not taking her seriously and turning the challenge into a joke.",
      inputs: [
        { q: "She says, \"Is that your only pickup line?\"", a: "\"I'm actually a bit disappointed you'd use such a cliché line on me. You seem smarter than that.\" (Passing Confidence Tests)", bundle: 'pro' },
        { q: "She says, \"You seem very nervous.\"", a: "\"Oh my god, I am so nervous! I can barely talk. Don't hold it against me.\" (Passing Confidence Tests - Exaggerate)", bundle: 'pro' },
        { q: "She says, \"I don't usually date guys like you.\"", a: "\"That's okay. You like guys who are a challenge, otherwise you wouldn't be hitting on me right now.\" (Flipping the Script)", bundle: 'pro' },
        { q: "She acting superior because of her career (e.g. Lawyer).", a: "\"A lawyer? Boring! I bet you've never done anything crazy in your life.\" (Flipping the Script / Judging)", bundle: 'pro' },
        { q: "She says your hair looks bad today.", a: "\"Horrible, right? It's a total mess. But hey—at least I'm pretty on the inside.\" (Passing Confidence Tests / Self Humour)", bundle: 'pro' },
      ]
    },
  ],
  danbacon3: [
    {
      name: "Relationship Friction",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "When the \"spark\" starts to fade or she begins to \"test\" your leadership with bad behavior. These situations require you to hold your frame and use the \"Good Girl Switch\" techniques to restore attraction and respect.",
      inputs: [
        { q: "She says, \"I'm bored, you never take me anywhere interesting.\"", a: "\"I respect that you want more adventure. I've got a crazy idea for next weekend, but you've got to win me over first. Be a good girl for the rest of the day and I'll tell you.\" (Lovingly Expecting More)", bundle: 'pro' },
        { q: "She refuses to give you a hug because she's \"not in the mood.\"", a: "\"[Maintain your cool] No worries. I'm going to enjoy this coffee. You're missing out on some great affection, but that's your choice.\" (Emotional Independence)", bundle: 'pro' },
        { q: "She tries to make a \"ridiculous rule\" like \"No talking about work after 6 PM.\"", a: "\"[Laugh lovingly] Whatever! We'll talk about whatever I'm in the mood to talk about. But tell you what—if you're a good girl, I'll talk about your shoes for ten minutes first.\" (Addressing Bad Behavior / Leadership)", bundle: 'pro' },
        { q: "You feel yourself wanting to \"suck up\" to her because she's angry.", a: "[Stop yourself] \"I'm a good man and I've done nothing wrong. I'm going to do my own thing until she's ready to be respectful again.\" (Emotional Independence)", bundle: 'pro' },
        { q: "She asks \"Do you even care about my feelings?\" during an argument.", a: "\"Of course I do, but I don't care for the way you're acting right now. When you're ready to talk like a grown-up, I'm here.\" (Addressing Bad Behavior)", bundle: 'pro' },
      ]
    },
  ],
  danbacon4: [
    {
      name: "Relationship Stalls",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "When the \"Good Girl Switch\" has been turned off and the relationship has become neutral or disrespectful. These situations require you to re-establish your frame and use \"up and down\" emotional spikes to restore attraction.",
      inputs: [
        { q: "She snaps at you in a rude tone for no reason.", a: "\"Hey, that wasn't cool. You're usually a great woman, but talking to me like that? No, I don't like it.\" (Restoring the Spark - Boundary)", bundle: 'pro' },
        { q: "She says, \"I'm bored, do something to entertain me.\"", a: "\"I'm not your court jester, girl! If you're bored, go find three cool movies we can watch and I'll pick the winner.\" (Let Her Win You Over)", bundle: 'pro' },
        { q: "You are on a date and she starts checking her phone repeatedly.", a: "\"[Wait for second check, then laugh] No, no one sent you a message. No one cares about you! Put that thing away.\" (Ignoring Ridiculous Rules / Playful)", bundle: 'pro' },
        { q: "She asks, \"Would you still love me if I gained 20 pounds?\"", a: "\"What? We're not even married yet and you're already worried about me dumping you? Relax, girl!\" (Expressing Real Moods / Ballsy)", bundle: 'pro' },
        { q: "She is thrown a tantrum but the argument is actually her fault.", a: "\"[Stay calm and unreactive] I'm going to go work in my office for an hour. Let me know when you're ready to be a good girl again.\" (Expressing Real Moods - Independence)", bundle: 'pro' },
      ]
    },
  ],
  oconnor1: [
    {
      name: "The Office Narcissist",
      description: "Disempower narcissists by using the \"Hamburger\" method to call out behavior or tag questions that force them to admit they are breaking agreed-upon rules. **Mindset:** Create the illusion of their choice while maintaining your boundaries.",
      inputs: [
        { q: "They keep interrupting you.", a: "\"John, when you keep interrupting after you agreed not to, it concerns me because it appears you don't know you're doing it.\"", bundle: 'free' },
        { q: "You need to force them to acknowledge their behavior.", a: "\"You do understand this is exactly what you agreed not to do anymore, right?\"", bundle: 'pro' },
        { q: "They use an offensive comment to bait you.", a: "\"Would you like to continue this without racial slurs, or do you need a few minutes to collect your thoughts? Which do you prefer?\"", bundle: 'pro' },
      ]
    },
    {
      name: "The Time Sucker",
      description: "Use the A-E-I-O-U script to take the \"blame\" on yourself for wanting to be more productive, then implement visual tools like the Availability Monitor. **Mindset:** Managing your time is a sign of self-respect.",
      inputs: [
        { q: "Implementing the new system.", a: "\"I'm starting a new time management system so I can serve you better and focus when we do visit. Can I count on you to help me?\"", bundle: 'free' },
        { q: "They ignore your \"unavailable\" sign.", a: "(Continue working and tap the red sign without making eye contact).", bundle: 'pro' },
        { q: "You want to set email boundaries.", a: "\"I'll be responding to emails between 9:00 and 10:00 AM; if it's an emergency, please call.\"", bundle: 'pro' },
      ]
    },
    {
      name: "Passive-Aggressive Comments",
      description: "Call out \"scab pickers\" by naming the effect of their behavior. Place the description of the behavior at the very end of the sentence for maximum impact. **Mindset:** Make the subtext the text.",
      inputs: [
        { q: "A relative picks a wound about your relationship status.", a: "\"I'm sure you're not trying to be insulting, but I'm not going to engage when you ask a rude question like that one.\"", bundle: 'free' },
        { q: "A boss asks if you've thanked a colleague for \"saving you.\"", a: "\"I'm sure you're not trying to open up wounds of the past, but I'm going to call you on it if you keep making passive-aggressive comments.\"", bundle: 'pro' },
        { q: "Someone tries to play off a rude remark as \"small talk.\"", a: "\"In the future, if you want to know how I am, just ask 'How have you been?' That’s how you start that conversation.\"", bundle: 'pro' },
      ]
    },
    {
      name: "High-Risk Resignations",
      description: "Resign in person with high-power body language. Hand over the letter and wait in total silence while it is read. Keep the documentation 100% positive. **Mindset:** Professionalism is defined by how you transition from a relationship.",
      inputs: [
        { q: "Handing over the resignation letter.", a: "\"I have made a decision to transition.\" (Wait in silence with chest high and chin up while they read).", bundle: 'free' },
        { q: "They ask for the reason you're leaving.", a: "\"I have made a decision to move forward; my letter outlines how I'll ensure a positive handover.\"", bundle: 'pro' },
        { q: "Ending the resignation meeting.", a: "\"Do you need anything else from me? No? Great, I hope the rest of your day is pleasant.\"", bundle: 'pro' },
      ]
    },
  ],
  oconnor2: [
    {
      name: "The Work-Dumper",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Scenarios where colleagues or bosses try to offload their responsibilities or \"invisible labor\" onto you. These situations test your ability to set a boundary that focuses on _your_ productivity rather than _their_ laziness. **Mindset:** I am not a \"worker bee\"; I am a professional who values my time.",
      inputs: [
        { q: "\"Since you're so fast at these spreadsheets, could you just finish mine for me?\"", a: "\"I noticed I've been taking on too much and it's slowing down my own projects. If I say yes, remind me of this. That way I can stay productive.\" [The B-I-B Script]", bundle: 'pro' },
        { q: "\"I need to leave early for a hair appointment, can you cover the phones?\"", a: "\"I'd like to be helpful, but unfortunately I have a hard deadline on this Jones report. I'm wondering, could we see if the intern is available?\" [The Diplomatic Decline]", bundle: 'pro' },
        { q: "Your boss dumps a task on you that belongs to a higher-paid colleague who is \"too busy.\"", a: "\"I understand the importance of this, but unfortunately my current workload is at capacity. To keep our team standards high, should we re-prioritize my list?\" [The Diplomatic Decline]", bundle: 'pro' },
        { q: "You realize a colleague is quoting you as having agreed to do their work.", a: "\"Mary, I have to be frank. I haven't agreed to take that on, and continuing this talk isn't helpful. I'm going back to my desk now.\" [Power-Down Phrases]", bundle: 'pro' },
      ]
    },
    {
      name: "The Interrupter",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Scenarios where people disregard your focus time or use \"nosy questions\" to derail you. These situations require immediate, visual, or scripted neutralizers to keep you in the \"Green.\" **Mindset:** I only defend what I believe to be vulnerable; my right to focus is not up for debate.",
      inputs: [
        { q: "A coworker starts asking personal questions while you are trying to finish an email.", a: "\"Mary, I'm concerned that personal talks during work are affecting my output. Check my monitor—if it's red, I'm focusing. That way we can chat when I'm green.\" [The Availability Monitor]", bundle: 'pro' },
        { q: "Someone stands in your doorway waiting for you to look up, even though you are Red.", a: "(Maintain eye contact for 3 seconds without speaking—the 3-second look—then point to the sign). [Availability Monitor / Dan 1 Strategy]", bundle: 'pro' },
        { q: "\"Why are you using that weird sign? It makes you look like a diva.\"", a: "\"That may be, but I've found it makes me 10 times more productive. Can I count on your support to respect the 'Red' times?\" [The Availability Monitor]", bundle: 'pro' },
        { q: "You are interrupted during a presentation and need to take the floor back.", a: "\"I'm speaking. [Anti-interrupter] I have nothing constructive to add to that interruption, so I'm moving on to the data. [Power-Down]\" [Dan 1 / Power-Down hybrid]", bundle: 'pro' },
      ]
    },
  ],
  oconnor3: [
    {
      name: "The Bait & Switch",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "When the narcissist tries to get an emotional reaction by using guilt, shame, or false accusations. • These situations test your ability to stay \"cool, calm, and collected\". • Remember: What gets rewarded gets repeated.",
      inputs: [
        { q: "\"You're so selfish for not staying late—I guess the team's success doesn't matter to you.\"", a: "\"I'm not going to engage with that narrative. My work speaks for itself.\" [Selective Engagement]", bundle: 'pro' },
        { q: "They claim they \"saved\" your project because you were \"struggling.\"", a: "\"When you characterize my work as 'struggling' to others, it concerns me because the data shows the project was on track.\" [The Communication Hamburger]", bundle: 'pro' },
        { q: "\"I thought we had a special connection, but you're just like everyone else.\"", a: "\"I apologize if I led you to believe there was anything here beyond a professional bond. Let's keep it that way.\" [The \"Irrelevant\" Block]", bundle: 'pro' },
        { q: "They keep \"scolding\" you in front of the junior staff.", a: "\"I won't be berated in public. Would you like to continue this in your office, or should we pick it up tomorrow morning?\" [Empowering Statements]", bundle: 'pro' },
      ]
    },
  ],
  oconnor4: [
    {
      name: "The Feedback Trap",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Situations where you are tempted to say \"I don't appreciate...\" or \"You did this wrong.\" • These test your ability to use LBNT and D-A-R-T under pressure. • Remember: What gets rewarded gets repeated. Don't reward bad behavior with a weak response.",
      inputs: [
        { q: "Your boss throws you under the bus in a meeting.", a: "\"I'm surprised, but I can understand why you'd be upset if you thought the projects were late. [D] Could you show me when they were turned in late so I can rectify that? [R] Reasonable? [T]\" [D-A-R-T / 101]", bundle: 'pro' },
        { q: "Someone says \"No offense, but you're just not leadership material.\"", a: "\"I'm always open to professional feedback. Therefore, if you keep your feedback professional or helpful, I'd be open to that. [I-statement]\"", bundle: 'pro' },
        { q: "You are tempted to say \"You're always so bossy!\" to a coworker.", a: "\"I suggest you rethink how you characterize my behavior. [I-statement] I'm here to find solutions. [D] So what do you say we get back to the project? [R]\" [D-A-R-T / 212]", bundle: 'pro' },
        { q: "An employee makes a joke that borders on being inappropriate.", a: "\"I'm surprised you'd make a joke like that in this office. [Lead-in] Next time, if you keep your humor inclusive, it will better reflect our team mission. [LBNT]\" [LBNT / 146]", bundle: 'pro' },
      ]
    },
  ],
  oconnor5: [
    {
      name: "Confidence Killers",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Situations that normally trigger \"low status\" behaviors like fidgeting, whispering, or shrinking. • These test your ability to use physical \"Power Projectors\" to override your internal nerves.",
      inputs: [
        { q: "You are the youngest person in a room of high-level executives.", a: "(Take up space: move your chair up, plant your arms, and steeple when you speak).", bundle: 'pro' },
        { q: "You realize you are scratching your neck and looking at the floor while answering a question.", a: "(Stop immediately. Lift your chin, raise your volume, and steeple).", bundle: 'pro' },
        { q: "Someone offers you a seat that is low and uncomfortable, making you feel \"beneath\" them.", a: "(Sit on the edge of the seat, lean forward, and use territorial markers to claim the table).", bundle: 'pro' },
        { q: "You are giving a talk and the mic starts cutting out.", a: "(Hand the mic back and use your Vocal Power Tone to project to the back of the room).", bundle: 'pro' },
      ]
    },
  ],
  oconnor6: [
    {
      name: "Boundary Breakers",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Situations where people attempt to bulldoze your decision or make you feel \"guilty\" for having standards. • These test your resilience and ability to avoid the \"Defensive Trap.\" • Remember: We only defend what we believe to be vulnerable.",
      inputs: [
        { q: "\"You're so mean for not letting me borrow your car. I thought you were a nice guy.\"", a: "\"That may be, but I don't lend my car out. I'm sure you can respect that.\" [The Broken Record]", bundle: 'pro' },
        { q: "Someone you just met keeps asking \"How much did that watch cost?\"", a: "\"Interesting. Why would you ask me a question like that?\" [Selective Engagement / Dan 3]", bundle: 'pro' },
        { q: "You realize you've been working two jobs for the price of one for six months.", a: "(Start recording every 'Job B' task in your Value Journal with its corresponding market rate). [The Value Journal]", bundle: 'pro' },
        { q: "They apologize for \"acting like a jerk\" earlier but you're still feeling the sting.", a: "\"I accept your apology. I forgive you. Let's put a period on it.\" [\"I Forgive You\"]", bundle: 'pro' },
      ]
    },
  ],
  oconnor7: [
    {
      name: "The Social Stall",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "When a conversation dies because of a closed-ended answer or when you feel the urge to \"interview\" the other person. • These situations test your ability to use \"hooks\" and \"bait\" to keep the flow alive without being pushy.",
      inputs: [
        { q: "You ask \"How was your weekend?\" and they say \"Fine.\"", a: "\"Fine? That sounds suspiciously quiet. What did you actually get up to?\" [PPT Opener / Follow the Thread]", bundle: 'pro' },
        { q: "You realize you’ve asked three questions in a row and they haven't asked anything back.", a: "\"I'm getting water. Would you like one as well? I'll be right back.\" [OFF Technique - to give them space]", bundle: 'pro' },
        { q: "You have nothing interesting to say about your own week.", a: "\"It's been a long week—I've spent most of it arguing with a printer. How about yours?\" [Answer with a Hook]", bundle: 'pro' },
        { q: "Someone asks what you do and you want to give them something to ask about.", a: "\"I'm a teacher. Mostly teenagers, which is exactly as loud as it sounds.\" [Answer with a Hook]", bundle: 'pro' },
      ]
    },
  ],
  jimmy1: [
    {
      name: "The \"One-Sided\" Trap",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "When you feel like you are the only one sacrificing or when the other person is asserting dominance. These situations test whether a foundation of safety actually exists. • Takers will often view your boundaries as \"attacks.\" • Safety is not just the absence of violence, but the presence of respect.",
      inputs: [
        { q: "You set a boundary about needing alone time, and they say, \"If you loved me, you'd want to be with me.\"", a: "\"I can love you and still need space to recharge. My boundary is about my health.\" [Enforcing Mutual Respect]", bundle: 'pro' },
        { q: "You realize they've made the last three major decisions without asking you.", a: "\"I feel like an unequal partner right now. I need us to share the decision-making power.\" [Accepting Influence]", bundle: 'pro' },
        { q: "They consistently \"forget\" the chores you agreed they would handle.", a: "\"I can't rely on your word right now, and that's breaking my trust. We need to talk about this.\" [Character Discernment]", bundle: 'pro' },
        { q: "They want to move fast sexually, but you aren't comfortable yet.", a: "\"I value our connection, and I need to move at a pace where I feel safe. I hope you can respect that.\" [Enforcing Mutual Respect]", bundle: 'pro' },
      ]
    },
  ],
  jimmy2: [
    {
      name: "The Criticism Trigger",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "When you feel the overwhelming urge to attack your partner's character or use \"always/never\" statements. • These situations test your ability to stay vulnerable when you feel hurt. • Remember: Criticism is a shield; vulnerability is the bridge.",
      inputs: [
        { q: "You are frustrated that they are on their phone _again_ during dinner.", a: "\"I miss you. Could we put the phones away so I can feel connected to you?\" [Requests Over Criticism]", bundle: 'pro' },
        { q: "They forgot to pick up the one thing you asked for at the store.", a: "\"I feel pretty frustrated and unheard right now. I really needed that for tomorrow.\" [The Expression Formula]", bundle: 'pro' },
        { q: "You are about to yell, \"You never listen to me!\"", a: "\"I'm telling myself that what I say doesn't matter to you. Can we try that again?\" [Owning the Narrative]", bundle: 'pro' },
        { q: "You want to bring up a sexual need but feel embarrassed.", a: "\"This is vulnerable for me to say, but I’d love more non-sexual touch during the day.\" [The Soft Startup]", bundle: 'pro' },
      ]
    },
  ],
  jimmy3: [
    {
      name: "The Defensive Reflex",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "When you feel unfairly attacked or blamed, your body wants to defend. These situations test your ability to stay curious and validating when your \"shame\" is triggered. • Defensiveness is the #1 killer of connection. • Validation is the antidote to a \"Flooded\" partner.",
      inputs: [
        { q: "They say, \"You never listen to me!\" and you know you listened yesterday.", a: "\"I'm hearing that you feel unheard right now. Can you tell me what led to that feeling?\" [Compassionate Curiosity]", bundle: 'pro' },
        { q: "You feel your heart racing and ears getting hot during a critique.", a: "\"Vulnerable. I'm starting to feel defensive, but I want to hear you. Can we take 5 minutes?\" [The \"Vulnerable\" Code Word]", bundle: 'pro' },
        { q: "They are \"Protesting\" by yelling about the messy kitchen.", a: "\"I can see that the mess is making you feel overwhelmed. I'm sorry my part in it caused you stress.\" [Validation Without Agreement]", bundle: 'pro' },
        { q: "They say, \"I bet you're just waiting for me to fail again.\"", a: "\"That sounds like a really scary story to believe. I'm on your team—what can I do to prove that?\" [Compassionate Curiosity]", bundle: 'pro' },
      ]
    },
  ],
  jimmy4: [
    {
      name: "The High-Conflict Trap",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "When the situation is escalating rapidly or involving \"The Four Horsemen\" (Contempt, Criticism, Defensiveness, Stonewalling). • These situations test your commitment to safety over the urge to \"win\" the fight. • Remember: If it isn't safe, it isn't a conversation.",
      inputs: [
        { q: "Your partner sneers, \"Of course you'd forget. You're just like your father!\"", a: "\"That felt like contempt. I won't be talked down to. I’m taking a break for 30 minutes.\" [Safety Boundaries]", bundle: 'pro' },
        { q: "They are screaming and won't let you get a word in edgewise.", a: "\"I want to hear you, but I can't do it while you're yelling. I’m going for a walk to get regulated.\" [Safety Boundaries]", bundle: 'pro' },
        { q: "You are tempted to Stonewall and just stare at your phone until they stop talking.", a: "\"I’m feeling overwhelmed and I want to shut down. Can we take a reset break instead?\" [The 30-Minute Reset]", bundle: 'pro' },
        { q: "They say, \"I bet you're just waiting for me to fail again.\"", a: "\"It makes sense why you'd feel that way after how I’ve acted. I want to prove I’m on your team.\" [Validating Past Pain]", bundle: 'pro' },
      ]
    },
    {
      name: "The Blame Game",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "When you are being pressured to take 100% of the blame or when you are tempted to shift all the blame onto them. • Maturity is taking accountability for _your_ side of the street. • Refusing to apologize is a sign of weakness, not strength.",
      inputs: [
        { q: "You were rude, but you feel it's because they were ignoring you.", a: "\"Regardless of why I did it, my rudeness was wrong. I’m sorry for how I spoke to you.\" [Radical Accountability]", bundle: 'pro' },
        { q: "They say \"It's your fault we're in this mess!\"", a: "\"I can see the ways I’ve contributed to our distance. I want to own my part and work on it with you.\" [Radical Accountability]", bundle: 'pro' },
        { q: "You realize you've been punishing them for a mistake they made months ago.", a: "\"I realize I’ve been holding onto resentment. I’m sorry for making you pay for the past.\" [Radical Accountability]", bundle: 'pro' },
        { q: "They are bringing up a hurt from three years ago.", a: "\"I didn't hold space for that pain back then. I’m ready to listen now. Tell me what it was like for you.\" [Validating Past Pain]", bundle: 'pro' },
      ]
    },
  ],
  jimmy5: [
    {
      name: "The Complacency Drift",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "When life gets busy and you realize you've become \"roommates\" who only talk about schedules and chores. • These situations test your initiative to bring back the \"butterfly\" stage energy. • Remember: The natural state of a relationship is to drift apart; intentionality is the only way to stay close [12:37, 15:29].",
      inputs: [
        { q: "You realize you haven't really _looked_ at your partner's face in three days because of work.", a: "(Put your phone down) \"I feel like I've missed you even though we're in the same house. Tell me what's actually on your heart.\" [The Weekly Check-in]", bundle: 'pro' },
        { q: "You feel a bit rejected because they aren't \"in the mood,\" but you realize you haven't been affectionate all day.", a: "\"I'm sorry I've been distant. Let's just cuddle and talk—no pressure for anything else.\" [Non-Sexual Affection]", bundle: 'pro' },
        { q: "They mention they feel \"invisible\" lately.", a: "\"I haven't been doing a good job of telling you how much I appreciate you. I saw how you handled that crisis today—you were amazing.\" [Out-Loud Appreciation]", bundle: 'pro' },
        { q: "You are tempted to wait for them to tell you what to do around the house.", a: "(Identify a chore that needs doing and do it immediately) [Sharing the Mental Load]", bundle: 'pro' },
      ]
    },
  ],
  jimmy6: [
    {
      name: "The Toxic Pushback",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "Scenarios where a partner or co-parent intentionally uses your self-reflection or empathy against you. • These situations test your ability to stay \"High\" when they \"Go Low\". • Remember: You cannot reason with someone who is committed to misunderstanding you.",
      inputs: [
        { q: "A narcissistic co-parent says, \"The kids told me they hate being at your house.\" (Baiting).", a: "\"Okay.\" [Indifference to Manipulation]", bundle: 'pro' },
        { q: "They overstep a boundary and then say, \"I don't remember you saying that, you're making things up.\" (Gaslighting).", a: "\"I’ve been clear about my limit. I’m not going to argue about the facts.\" [Indifference to Manipulation]", bundle: 'pro' },
        { q: "You say you're hurt, and they respond with, \"Oh, so now _I'm_ the bad guy again?\".", a: "\"I'm sharing my feeling, not a verdict. I need you to just listen.\" [The Bare Minimum Standard]", bundle: 'pro' },
        { q: "They promise to change but then \"punish\" you with a week of silence for bringing it up.", a: "(Enjoy your week and don't beg for their attention) [Indifference to Manipulation]", bundle: 'pro' },
      ]
    },
  ],
  toddv1: [
    {
      name: "Lukewarm Responses",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "When you open and she gives a polite but flat answer like \"thanks\" or \"okay.\" This is where most conversations die. You need to \"spike\" the interaction or \"assume the burden\" to get a real reaction.",
      inputs: [
        { q: "You give a compliment and she just says \"Thanks.\"", a: "\"You're welcome. Now that we've got the boring stuff out of the way, tell me your story.\" (Narrating the Frame)", bundle: 'pro' },
        { q: "She gives a one-word answer to your question.", a: "\"You're a doctor? Boring! I bet you've never done anything crazy in your life.\" (Question-Answer-Tease)", bundle: 'pro' },
        { q: "She says \"Nice to meet you\" in a way that sounds like goodbye.", a: "\"Wait, you're the most ridiculous girl I've ever met. I think you win the prize for 'shortest conversation ever'.\" (Question-Answer-Tease)", bundle: 'pro' },
        { q: "The conversation goes silent after 20 seconds.", a: "\"You know, there's something about you I love and something I just can't stand. I'm still deciding which one it is.\" (Open Loops)", bundle: 'pro' },
        { q: "She seems skeptical of your approach.", a: "\"You think I'm a player? I respect that. Perceptive. But with you, I'm only like 80% player.\" (Narrating the Frame)", bundle: 'pro' },
      ]
    },
  ],
  toddv2: [
    {
      name: "The \"Nice to Meet You\" Trap",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "When the conversation is friendly but platonic (baseline). Most guys leave here and get a flake. You need to \"spike\" the interaction to create sexual relevance and tension.",
      inputs: [
        { q: "She says \"Nice to meet you\" in a way that sounds like the end.", a: "\"Wait, you're the most ridiculous girl I've ever met. I think you win the prize for 'shortest conversation ever'.\" (Push-Pull)", bundle: 'pro' },
        { q: "The conversation is getting very logical and boring.", a: "\"You blink a lot when you're talking about work. It's cute, but we're definitely going to have to break up if you keep being this serious.\" (The Neg / Push-Pull)", bundle: 'pro' },
        { q: "She asks a standard \"What do you do?\" question.", a: "\"I bet you wouldn't guess it in a million years. Guess once, and if you're right, I'll fall in love with you.\" (Push-Pull)", bundle: 'pro' },
        { q: "You've been talking for 5 minutes and it feels like \"just friends.\"", a: "\"I can't decide if I want to have a crush on you or run away right now. You're trouble.\" (Disqualification)", bundle: 'pro' },
        { q: "She is being very polite but not investing.", a: "\"You seem really nice... I bet you were the girl who got bullied in high school. I feel for you.\" (Push-Pull - Polarizing Spike)", bundle: 'pro' },
      ]
    },
  ],
  toddv3: [
    {
      name: "The \"Logical Interview\" Stall",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "When the conversation turns into a \"Resume Exchange\" (What do you do? Where do you live?). You need to pivot to emotions or provide your own \"grounding\" to make yourself more than a set of facts.",
      inputs: [
        { q: "She asks \"What do you do for a living?\" for the second time because she forgot.", a: "\"Don't ask who cares! Ask me what I'm passionate about instead. I bet you wouldn't guess my real dream in a million years.\" (Wide and Deep Rapport)", bundle: 'pro' },
        { q: "The conversation is stuck on \"How long have you lived here?\".", a: "\"You don't seem like you've been here long. You still have that 'new kid' excitement in your eyes. Am I right?\" (The Cold Read)", bundle: 'pro' },
        { q: "She tells you her job is \"Marketing.\"", a: "\"Marketing? So you're professionally good at manipulating people's desires. That makes me feel totally safe with you.\" (The Cold Read / Tease)", bundle: 'pro' },
        { q: "You want to share your career without \"bragging.\"", a: "\"I actually left a stable path to become an entrepreneur because I couldn't stand not being the one in charge of my own show.\" (Grounding Stories)", bundle: 'pro' },
        { q: "She gives a very short, factual answer about her family.", a: "\"That's the list, but what's the story? Who's the person in your family that actually understands you the best?\" (Wide and Deep Rapport)", bundle: 'pro' },
      ]
    },
  ],
  toddv4: [
    {
      name: "The Logistic Stall",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "When the interaction is stuck in one place or she gives a logistical objection (e.g., \"I'm with friends\"). You need to use empathy over sympathy to solve the problem and keep the logistical momentum moving forward.",
      inputs: [
        { q: "She says, \"I can't leave, I'm with my friends.\"", a: "\"I get it, you're a good friend. We'll just go for ten minutes and I'll have you back before they even notice you're gone.\" (Seeding the Pull / Empathy)", bundle: 'pro' },
        { q: "You want to suggest a venue change but she seems hesitant.", a: "\"We're just going for a quick walk to see [View/Place]. If you hate it, you can go home. I'm having a good time either way.\" (Assumptive Closing)", bundle: 'pro' },
        { q: "You want to take her home but she's worried about the \"bedroom\" frame.", a: "\"I need to go grab a battery for my camera real fast. Come with me, we can finish this talk while I find it.\" (False Time Constraints / Assumptive Closing)", bundle: 'pro' },
        { q: "She asks, \"Where are we going?\" in a skeptical way.", a: "\"Somewhere lovely that you will love. And if you don't, you can leave. Trust me, I'm a professional.\" (Seeding the Pull)", bundle: 'pro' },
        { q: "You suggest a move and she says \"Maybe later.\"", a: "\"Actually, you're right. Not yet. Let's hang out here for 15 more minutes first.\" (Seeding the Pull - Preempting)", bundle: 'pro' },
      ]
    },
  ],
  toddv5: [
    {
      name: "High Pressure Situations",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "When the set is \"on the line\"—either through a harsh rejection, a heavy group obstacle, or an internal freeze-up. These situations require you to double down on your frame and your entitlement.",
      inputs: [
        { q: "You open and she says, \"No thanks, I'm busy.\"", a: "\"I understand, but hi, I'm Todd. Nice to meet you anyway.\" (Passing Value Tests - Double Down)", bundle: 'pro' },
        { q: "Her boyfriend walks over and looks aggressive.", a: "\"Oh hey! You guys look great together. I was just telling her she has a unique look. Have a great night!\" (Handling the Posse - Graceful Exit)", bundle: 'pro' },
        { q: "You feel yourself \"cracking\" under her intense eye contact.", a: "[Stay for 20 more seconds. Live with the nervousness until it becomes normal.] (The \"What Do I Want?\" Move - Internal)", bundle: 'pro' },
        { q: "A \"chode\" or another guy enters your set to steal the girl.", a: "\"This guy is awesome! He's got better game than me. Hold on, let me take some notes.\" (Handling the Posse - Reframe)", bundle: 'pro' },
        { q: "She says \"Nice to meet you\" in a way that ends the set.", a: "\"Wait, stop. I can't decide if I'm going to love you or hate you yet. You're trouble.\" (The \"What Do I Want?\" Move - Polarizer)", bundle: 'pro' },
      ]
    },
  ],
  firststrategies: [
    {
      name: "You Do Not Know Them At All",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "A stranger, a first meeting, a room where everybody else already knows each other. Nothing has been said yet, so there is nothing to work with except what is in front of you both.\n\nOpening Statement does most of the work here, and Answer With a Hook does the rest — because a first conversation with a stranger almost always turns into questions about you within a minute.\n\nThe one thing to avoid is the interview. Two questions in a row from the same person makes anyone feel examined, and it also means you have given them nothing to ask you about.\n\nMindset: ordinary is the target. The remark does not have to be good, it has to be true.",
      inputs: [
        { q: "You are next to someone at a counter and neither of you has spoken.", a: "\"I still have no idea what half of these are.\" [Opening Statement]", bundle: 'free' },
        { q: "They answer your remark and mention where they have come from.", a: "\"All the way from Kalmar? That's a morning gone.\" [Follow the Thread]", bundle: 'free' },
        { q: "They ask what you do, thirty seconds in.", a: "\"I teach English. Mostly teenagers, which is as loud as it sounds.\" [Answer With a Hook]", bundle: 'free' },
        { q: "You have asked two questions in a row and it is starting to feel like an interview.", a: "\"I've been interrogating you. My week's been strange too — I got locked out twice.\" [Answer With a Hook]", bundle: 'free' },
        { q: "You want to say something and everything you think of sounds trivial.", a: "\"That queue has not moved once.\" [Opening Statement]", bundle: 'free' },
        { q: "They tell you their name and it is gone by the time they finish the sentence.", a: "\"Say that again — it went straight out of my head.\" [Ask Plainly]", bundle: 'free' },
        { q: "A third person joins and has missed everything said so far.", a: "\"We'd got as far as how long everybody's journey was.\" [Opening Statement]", bundle: 'free' },
        { q: "They answer at length and you cannot tell which part they care about.", a: "\"So you came here for the job, and the rest followed?\" [Say It Back]", bundle: 'free' },
      ]
    },
    {
      name: "The Conversation Has Stalled",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "It was going fine and now it is not. Both of you are looking for something new, which is the hardest possible way to find something to say.\n\nFollow the Thread is the way out, and the thread does not have to be recent. Anything they said in the last ten minutes is still open, and going back to it reads as interest rather than as a rescue.\n\nAnswer With a Hook is the other half of the fix, because a stall is often caused by a closed answer three exchanges ago that left the other person with nowhere to go.\n\nMindset: do not look for a new subject. Look backwards.",
      inputs: [
        { q: "There has been a pause and you are both aware of it.", a: "\"You mentioned the new place earlier — how's that going?\" [Follow the Thread]", bundle: 'free' },
        { q: "You just gave a one-word answer and the conversation died on it.", a: "\"Actually, that's not the whole answer — it's been a strange week.\" [Answer With a Hook]", bundle: 'free' },
        { q: "You are searching for a fresh topic and finding nothing.", a: "\"Go back to the thing about your brother — did he actually do it?\" [Follow the Thread]", bundle: 'free' },
        { q: "The pause has gone on, and there is something in the room to use.", a: "\"They've moved all the furniture since last time.\" [Opening Statement]", bundle: 'free' },
        { q: "They gave you a long answer and you are not sure which part to take.", a: "\"So the whole move happened in one week?\" [Say It Back]", bundle: 'free' },
        { q: "The subject has run out and neither of you has started another.", a: "\"You said earlier you'd only just moved back. Back from where?\" [Follow the Thread]", bundle: 'free' },
        { q: "You want to speak but everything you think of sounds like changing the subject.", a: "\"Sorry — I'm still on the boat. Did you actually buy it?\" [Follow the Thread]", bundle: 'free' },
        { q: "They ask a closed question and it dies on the spot.", a: "\"Yes — and badly. I've been up since five because of it.\" [Answer With a Hook]", bundle: 'free' },
      ]
    },
    {
      name: "They Asked You Something About Yourself",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "The moment people handle worst. Someone turns the attention onto you — how are you, what do you do, how was the weekend — and the reflex is to say as little as possible and hand it straight back.\n\nAnswer With a Hook is the strategy, and the size of the hook is the only decision. One extra detail is plenty with a stranger. Something you care about is for people you want to know better.\n\nA Friendly No belongs here too, for the questions you would rather not answer. Declining a question works exactly like declining a request: clear, warm, no explanation needed.\n\nMindset: they asked because they want a conversation. Give them somewhere to go.",
      inputs: [
        { q: "Someone asks how you are and you are about to say \"fine\".", a: "\"Fine — well, fine apart from the drive here.\" [Answer With a Hook]", bundle: 'free' },
        { q: "Someone asks about your weekend and you did nothing.", a: "\"Nothing at all, on purpose. It was excellent.\" [Answer With a Hook]", bundle: 'free' },
        { q: "They ask something you would rather not go into.", a: "\"I'll skip that one if that's alright — ask me another time.\" [A Friendly No]", bundle: 'free' },
        { q: "You answered, and the attention is still on you.", a: "\"That's me, anyway. You said you'd just got back — back from where?\" [Follow the Thread]", bundle: 'free' },
        { q: "You want to answer honestly without making it heavy.", a: "\"Mixed, honestly. Good week at work, less good everywhere else.\" [Answer With a Hook]", bundle: 'free' },
        { q: "They ask what you do and it is awkward to explain.", a: "\"Easier to say what my week looks like — teenagers and a broken photocopier.\" [Answer With a Hook]", bundle: 'free' },
        { q: "They ask how something went, and it went badly.", a: "\"Not well, honestly. I'll spare you the details — I did learn something.\" [Answer With a Hook]", bundle: 'free' },
        { q: "You have answered, and you would like the attention to move.", a: "\"That's genuinely all of it. You said you'd had a week too — what happened?\" [Follow the Thread]", bundle: 'free' },
      ]
    },
    {
      name: "They Want Something From You",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "A request has arrived and you do not want to say yes. This is where people invent the vague no — \"maybe\", \"I'll see\", \"probably not\" — which feels kind and costs the other person a week.\n\nSay It Back first, especially when the request is complicated. It buys you a moment, and it means the no lands after they have been understood.\n\nThen the no, short and warm, and at most one reason. If there is a version you could do, Ask Plainly for it — as an offer, not an apology.\n\nMindset: soften the delivery, never the answer.",
      inputs: [
        { q: "The request has several parts and you want to be sure of it.", a: "\"So it's two weeks, starting Monday, on top of what I've got.\" [Say It Back]", bundle: 'free' },
        { q: "You have decided, and you are about to say \"maybe\".", a: "\"I'll be honest rather than vague: no, not this time.\" [A Friendly No]", bundle: 'free' },
        { q: "You could do part of it.", a: "\"Could I do the morning instead? I'd rather do half than none.\" [Ask Plainly]", bundle: 'free' },
        { q: "You said no and they are waiting for a reason.", a: "\"It just doesn't work for me this month.\" [A Friendly No]", bundle: 'free' },
        { q: "They give a reason for needing you specifically.", a: "\"You said it has to be someone who was there in March — why's that?\" [Follow the Thread]", bundle: 'free' },
        { q: "They ask in front of other people and you can feel the pressure of it.", a: "\"Let me say it back so I've got it right — you need someone from Monday.\" [Say It Back]", bundle: 'free' },
        { q: "You said no, and a week later they ask again.", a: "\"Still no, I'm afraid — nothing's changed. Thanks for asking again, though.\" [A Friendly No]", bundle: 'free' },
        { q: "You would say yes to part of it but not all of it.", a: "\"Could I do the Thursday and not the Friday? That part I can manage.\" [Ask Plainly]", bundle: 'free' },
      ]
    },
    {
      name: "You Want Something From Them",
      guideFront: "Choose a strategy to respond when...",
      guideBack: "A possible response, with the strategy in brackets.",
      description: "You need something, and you have been putting it off, or hinting, or building a case in your head. Hinting is the failure mode: it protects you from hearing no, and it also almost never works.\n\nAsk Plainly is the whole strategy — one sentence, specific, then quiet. If they push back, Say It Back rather than repeating the ask, because the reason they give is often solvable and would never survive an argument.\n\nOpening Statement has a role too, when you need to raise something in a room where nothing has been said yet.\n\nMindset: asking is normal. You are giving them the chance to say yes.",
      inputs: [
        { q: "You have been hinting for a week and nothing has changed.", a: "\"I'll say it properly: could you do the shopping this week?\" [Ask Plainly]", bundle: 'free' },
        { q: "You asked, and are now about to explain why.", a: "(stop — the question was already complete) [Ask Plainly]", bundle: 'free' },
        { q: "They say no and give a reason.", a: "\"So it's the Wednesday stand-up that's the problem, not the hour.\" [Say It Back]", bundle: 'free' },
        { q: "Their reason contains something worth asking about.", a: "\"You said it's the only time everyone's in — has that always been Wednesday?\" [Follow the Thread]", bundle: 'free' },
        { q: "You want to make it easy for them to refuse.", a: "\"Could you take Thursday? Say if it doesn't work — I'll find someone.\" [Ask Plainly]", bundle: 'free' },
        { q: "You have written three paragraphs of explanation above the actual question.", a: "\"Could you look at this before Friday?\" — and delete the rest. [Ask Plainly]", bundle: 'free' },
        { q: "They say yes, but they sound unsure.", a: "\"So it's a yes, but the timing is awkward. Have I got that right?\" [Say It Back]", bundle: 'free' },
        { q: "You need to raise something in a room where nothing has been said yet.", a: "\"There's one thing I'd like to get to before we finish.\" [Opening Statement]", bundle: 'free' },
      ]
    },
  ],
};
