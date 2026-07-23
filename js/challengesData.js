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
  ]
};
