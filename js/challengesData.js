// challengesData.js — Challenges mode data

const challengesCollections = {

  assertive: [
    { name: "Assertive Communication", description: "Harder situations — pushback, pressure, edge cases where it's tempting to back down.", inputs: [
      { q: "Someone keeps pushing after you've said no clearly", a: "Don't explain or apologise more. Repeat calmly: \"My answer is still no.\" Persistence is not a reason to change your position." },
      { q: "Someone raises their voice to get their way", a: "Stay calm and lower your own voice if anything. \"I'll talk when the tone comes down.\" Don't match the aggression." },
      { q: "You're in a group and someone steamrolls your point", a: "Re-enter clearly: \"I wasn't finished — \" then complete your thought. Don't ask for the floor, take it." },
      { q: "Someone makes you feel guilty for having a need", a: "Acknowledge their feeling, hold your position: \"I hear that's frustrating for you. I still need X.\"" },
      { q: "Someone agrees in the moment but doesn't follow through", a: "Name it directly: \"You said X last time, and it didn't happen. I need to know this is going to change.\"" },
    ]}
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
  ]
};
