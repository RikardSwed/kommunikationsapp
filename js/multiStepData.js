// multiStepData.js — Multi-step sequence data for Sequences mode

const multiStepCollections = {

  assertive: [
    {
      name: "Hold Your Ground",
      subtitle: "State → Hold → Broken Record",
      inputs: [
        {
          situation: "Someone keeps arguing after you've said no",
          steps: [
            { front: "Step 1 — State your position clearly", back: "Short and direct. \"I've decided not to do that.\" No padding, no apology, no explanation yet." },
            { front: "Step 2 — Acknowledge and hold", back: "\"I understand you see it differently — my answer is still no.\" Acknowledge without conceding." },
            { front: "Step 3 — Broken record if they push again", back: "Same calm sentence. No new arguments. \"My answer is still no.\" The repetition is the technique — it removes fuel." }
          ]
        },
        {
          situation: "Someone pressures you to change a decision you've made",
          steps: [
            { front: "Step 1 — Restate your decision calmly", back: "\"I've thought about this and I'm going ahead with X.\" State it as decided, not debatable." },
            { front: "Step 2 — Hear their concern without absorbing it", back: "\"I hear that you're concerned about Y.\" Acknowledge — don't defend or explain yet." },
            { front: "Step 3 — Return to your position", back: "\"I've considered that — I'm still going with X.\" Calm, no escalation, no new arguments." }
          ]
        }
      ]
    },
    {
      name: "Name the Pattern",
      subtitle: "Observe → State → Request",
      inputs: [
        {
          situation: "Someone repeatedly interrupts you in meetings",
          steps: [
            { front: "Step 1 — Name what's happening without accusation", back: "\"I've noticed I often get cut off before I've finished.\" Specific behaviour, neutral tone — not an attack." },
            { front: "Step 2 — State how it affects you", back: "\"It makes it hard for me to get my point across.\" Your experience — not their intention." },
            { front: "Step 3 — Make a clear request", back: "\"I'd like to be able to finish before we respond.\" Specific and actionable — not a complaint, a request." }
          ]
        },
        {
          situation: "Someone consistently ignores your input in group decisions",
          steps: [
            { front: "Step 1 — Observe the pattern specifically", back: "\"I've raised X a few times now and it hasn't been included in the discussion.\"" },
            { front: "Step 2 — Say what you want, not what's wrong", back: "\"I'd like my input to be considered, even if the final decision goes another way.\"" },
            { front: "Step 3 — Check for understanding", back: "\"Does that make sense?\" — brief, not demanding. You've said it clearly. That's enough." }
          ]
        }
      ]
    }
  ],


  criticism: [
    {
      name: "Receive, Clarify, Own",
      subtitle: "Receiving Criticism → Negative Inquiry → Negative Assertion",
      inputs: [
        {
          situation: "A colleague gives you feedback on your work",
          steps: [
            { front: "Step 1 — Receive without defending or over-apologising", back: "Listen to the end. Don't interrupt with explanations or justifications. Just hear it." },
            { front: "Step 2 — Ask for specifics", back: "\"What specifically is it that didn't work?\" / \"Can you tell me more about what you mean?\" — shows you're taking it seriously, not deflecting." },
            { front: "Step 3 — Own what's actually true", back: "\"You're right — that part was rushed.\" — short, calm, owned. No over-apologising, no explaining. Acknowledge what's valid." }
          ]
        },
        {
          situation: "Someone points out a mistake you made",
          steps: [
            { front: "Step 1 — Don't defend mid-sentence", back: "Breathe. Let them finish. The urge to explain or defend is almost always counterproductive — it shifts the conversation from the content to your ego." },
            { front: "Step 2 — Ask what they'd have wanted instead", back: "\"How would you have preferred I handled it?\" — moves toward the future. Shows you want to understand, not argue." },
            { front: "Step 3 — Acknowledge specifically what you can own", back: "Separate what's accurate from what isn't. Own the accurate part clearly. \"You're right that I should have flagged it earlier.\"" }
          ]
        }
      ]
    },
    {
      name: "Give, Handle Pushback, Hold",
      subtitle: "Giving Criticism → Responding to Defensive Reaction",
      inputs: [
        {
          situation: "You give feedback and they get defensive",
          steps: [
            { front: "Step 1 — Give the criticism specifically and without accusation", back: "Name the specific behaviour or outcome. Calm tone. \"The report's section headers made it hard to navigate.\" Not: \"You're always unclear.\"" },
            { front: "Step 2 — They respond defensively — don't escalate", back: "Don't repeat the criticism. Don't soften it either. Stay with the content: \"I'm not attacking you — I'm pointing out something specific.\"" },
            { front: "Step 3 — Hold the line calmly", back: "\"The [specific thing] didn't work — that's the part I'm raising.\" Calm, specific, no new arguments." }
          ]
        },
        {
          situation: "You correct someone's behaviour and they turn it around on you",
          steps: [
            { front: "Step 1 — State the correction specifically and calmly", back: "Name the behaviour, not the person. Keep it brief and factual." },
            { front: "Step 2 — They bring up something you did — hear it genuinely", back: "Don't dismiss it as deflection. Listen. They might have a point. Receiving it doesn't mean giving up your correction." },
            { front: "Step 3 — Separate the two things", back: "\"You might be right about that — that's worth discussing separately. The specific thing I raised still stands.\"" }
          ]
        }
      ]
    },
    {
      name: "Correct, Receive, Adjust or Hold",
      subtitle: "Correcting Behaviour → Listening → Negative Assertion or Fogging",
      inputs: [
        {
          situation: "You correct someone and they respond with their version of events",
          steps: [
            { front: "Step 1 — State the correction specifically and calmly", back: "Name the behaviour, not the person. Not \"you always...\" but \"last time when you...\"" },
            { front: "Step 2 — Listen to their response genuinely", back: "Not to find counter-arguments — to actually understand their side. They might have information you don't." },
            { front: "Step 3 — If they have a point: own it clearly", back: "\"You're right — I could have raised it earlier.\" Changing your position when given good reason is not losing." }
          ]
        },
        {
          situation: "You correct someone and they don't have a valid counter",
          steps: [
            { front: "Step 1 — State the correction specifically", back: "Brief, factual, no accusations." },
            { front: "Step 2 — Listen to their response", back: "Let them finish. Don't interrupt." },
            { front: "Step 3 — Fog and hold", back: "\"You might have a point about [X].\" (if anything is worth acknowledging) \"The specific behaviour I raised still stands.\"" }
          ]
        }
      ]
    }
  ],

  compliments: [
    {
      name: "Specific Compliment",
      subtitle: "Notice → Name → Land",
      inputs: [
        {
          situation: "Someone handles a difficult situation well",
          steps: [
            { front: "Step 1 — Notice what specifically impressed you", back: "Not just 'that was good' — what exactly? The way they stayed calm? The specific thing they said? Name it internally first." },
            { front: "Step 2 — Say it specifically and directly", back: "\"The way you handled that — specifically when you [X] — that was impressive.\" One sentence. Specific." },
            { front: "Step 3 — Let it land without padding", back: "Don't add \"I mean, you probably do that all the time\" or \"I'm sure you hear that a lot.\" Say it and stop. Let them receive it." }
          ]
        },
        {
          situation: "You want to express appreciation for something someone did for you",
          steps: [
            { front: "Step 1 — Identify what they did and why it mattered", back: "\"When you [specific action]\" — name the concrete thing, not the general quality." },
            { front: "Step 2 — Connect it to the effect it had", back: "\"It actually made a real difference to me because [X].\" The why is what makes it land." },
            { front: "Step 3 — Close simply", back: "\"I just wanted you to know that.\" Or just stop after step 2. You don't need to wrap it up with a bow." }
          ]
        }
      ]
    },
    {
      name: "Receive Well",
      subtitle: "Receive → Acknowledge → Continue",
      inputs: [
        {
          situation: "Someone compliments something you worked hard on",
          steps: [
            { front: "Step 1 — Receive it without deflecting", back: "Don't say \"oh it was nothing\" or \"I'm sure anyone would have.\" Let it in." },
            { front: "Step 2 — Acknowledge it genuinely", back: "\"Thank you — that means something to me.\" Or simply: \"Thank you.\" You don't need to perform gratitude." },
            { front: "Step 3 — Continue naturally", back: "You don't have to reciprocate with a compliment back. You don't have to explain what went into it. Just continue." }
          ]
        },
        {
          situation: "Someone compliments something you're not sure you deserve",
          steps: [
            { front: "Step 1 — Notice the urge to dismiss", back: "The reflex is to say \"oh no, really?\" Catch it before it comes out." },
            { front: "Step 2 — Accept graciously even if you're unsure", back: "\"Thank you — I'll take that.\" Accepting isn't lying. It's generous." },
            { front: "Step 3 — Move forward without over-explaining", back: "Don't justify, qualify, or self-deprecate. You've received it well. That's the whole move." }
          ]
        }
      ]
    }
  ],

  humour: [
    {
      name: "Tease and Recover",
      subtitle: "Teasing → Self Humour",
      inputs: [
        {
          situation: "Someone doesn't take the tease well",
          steps: [
            { front: "Step 1 — Make a playful observation or comment about the person", back: "Warm tone, light edge. Specific and observable, not a generalisation. You're playing with them, not at them." },
            { front: "Step 2 — It didn't land — acknowledge without over-apologising", back: "\"Okay, that came out wrong.\" — brief, then move on. Don't explain the joke or double down." },
            { front: "Step 3 — Add self humour to break the tension", back: "\"Clearly my best material.\" — own the miss with self-irony. This closes the loop and makes it lighter." }
          ]
        },
        {
          situation: "You get teased back harder than expected",
          steps: [
            { front: "Step 1 — Your tease lands and they fire back harder", back: "Receive it — don't deflect immediately. Let it land. Defending kills the playful dynamic." },
            { front: "Step 2 — Receive it with self humour", back: "\"Fair. Completely fair.\" — accept it with ease. The person who can take it as well as give it wins the room." },
            { front: "Step 3 — Move on naturally or escalate lightly", back: "Either let it settle with a smile, or: \"This is getting personal and I respect it.\" Then redirect before it goes too far." }
          ]
        }
      ]
    },
    {
      name: "Notice, Name, Move On",
      subtitle: "Observation → Joke About My Flaws",
      inputs: [
        {
          situation: "You say something awkward in a group",
          steps: [
            { front: "Step 1 — Lift the absurdity of the situation", back: "Name what just happened. \"I love that I just said that.\" — specific to the moment, gives everyone permission to find it funny." },
            { front: "Step 2 — Own your part of it with self-distance", back: "\"Classic me — I'm consistently this person.\" — brief, warm, not self-pitying. Move on immediately." }
          ]
        },
        {
          situation: "You misread a situation or do something clumsy at the wrong moment",
          steps: [
            { front: "Step 1 — Notice the absurdity and name it", back: "\"I love that this is what just happened.\" — shifts the frame from awkward to funny." },
            { front: "Step 2 — Joke about your own part in it", back: "\"It's a documented pattern.\" — take ownership with ease, then move on immediately." }
          ]
        }
      ]
    },
    {
      name: "Brag, Undermine, Recover",
      subtitle: "Jokingly Brag → Joke About My Flaws → Self Humour",
      inputs: [
        {
          situation: "You want to be playful about your skills",
          steps: [
            { front: "Step 1 — Jokingly brag about something minor", back: "\"I'm probably one of the three best parallel parkers in this city.\" — obvious exaggeration, warm tone, brief." },
            { front: "Step 2 — Throw away the pedestal immediately", back: "\"That said — I'm also consistently the last to understand a plot twist.\" — the contrast makes the brag funnier in retrospect." },
            { front: "Step 3 — Own it with self-distance", back: "\"It balances out, is what I'm saying.\" — brief acknowledgement. Then move on." }
          ]
        },
        {
          situation: "Someone asks what you're good at",
          steps: [
            { front: "Step 1 — Start with a playful exaggerated claim", back: "Something specific and minor. The more mundane the achievement, the funnier the exaggeration." },
            { front: "Step 2 — Undercut it with an acknowledged flaw", back: "Immediate contrast — something real and self-aware. The rhythm: brag → undercut → move on." },
            { front: "Step 3 — Close with ease and redirect", back: "\"What about you — what are you actually good at?\" — move the attention back." }
          ]
        }
      ]
    }
  ],

  teasing: [
    {
      name: "Tease and Escalate",
      subtitle: "Teasing → Verbal Sparring",
      inputs: [
        {
          situation: "Someone you know well fires back at your tease",
          steps: [
            { front: "Step 1 — Open with a playful observation or comment", back: "Specific and observable. Warm tone — you're playing with them, not scoring a point. Leave room for them to respond." },
            { front: "Step 2 — They respond with their own tease — receive it well", back: "Don't defend. Receive it with self-irony: \"Fair.\" or mock outrage: \"Wow. Okay.\" The person who can take it as well as give it wins the room." },
            { front: "Step 3 — Escalate the play rather than end it", back: "\"This is getting personal and I respect it.\" Then continue — keep the energy alive without letting it tip into actual friction." }
          ]
        },
        {
          situation: "A playful debate emerges from a light comment",
          steps: [
            { front: "Step 1 — Your comment creates a reaction — lean into it playfully", back: "Don't backtrack. If the dynamic is playful, double down lightly: \"I stand by that completely.\"" },
            { front: "Step 2 — Let the back-and-forth develop", back: "Match their energy without going harder than they've gone. The dynamic is set by whoever is most relaxed." },
            { front: "Step 3 — Know when to land it", back: "Before it gets tired — a final light line, then redirect. Don't let it run past its natural end." }
          ]
        }
      ]
    },
    {
      name: "Push, Pull, Land",
      subtitle: "Teasing → Push-Pull → Warmth",
      inputs: [
        {
          situation: "You want to create some spark without it landing wrong",
          steps: [
            { front: "Step 1 — Tease lightly but specifically", back: "Something real and observable — not a generalisation about who they are. Warm tone throughout." },
            { front: "Step 2 — Let the contrast breathe (the push)", back: "Don't rush to reassure. Let the tease sit for a moment — the slight tension is the point. Read their reaction." },
            { front: "Step 3 — Land in warmth (the pull)", back: "A genuine comment that shows you actually like them. \"You're good at that though — seriously.\" The pull makes the push land as play, not attack." }
          ]
        },
        {
          situation: "Someone you're getting to know — you want to create some tension",
          steps: [
            { front: "Step 1 — Find one specific thing to tease", back: "The more specific the better. Generic teases feel like a technique. Specific teases feel like you've actually noticed them." },
            { front: "Step 2 — Cool slightly — let the distance create interest", back: "Not cold, just slightly more contained. The contrast between warm and slightly less warm creates movement." },
            { front: "Step 3 — Return with genuine warmth", back: "Make it clear you like them. The push-pull only works if the pull is real." }
          ]
        }
      ]
    },
    {
      name: "Miss, Own, Recover",
      subtitle: "Teasing → Self Humour → Joke About My Flaws",
      inputs: [
        {
          situation: "A tease falls flat or someone reacts unexpectedly",
          steps: [
            { front: "Step 1 — Your tease doesn't land", back: "Don't explain it. Don't repeat it. Don't apologise excessively. Note that it missed and move." },
            { front: "Step 2 — Own the miss with self humour", back: "\"Okay, that came out wrong.\" or \"Clearly my best material.\" — brief, self-aware, no drama." },
            { front: "Step 3 — Deepen the self-distance with a flaw joke", back: "\"I'm consistently this person. Ask anyone.\" — turns the miss into proof of character rather than an error. Then redirect." }
          ]
        },
        {
          situation: "You misjudge the tone",
          steps: [
            { front: "Step 1 — You notice the tease landed harder than intended", back: "Don't double down. Don't minimise. Acknowledge it briefly and directly." },
            { front: "Step 2 — Use self humour to soften without over-apologising", back: "\"That came out wrong — not quite what I meant.\" Brief and clean." },
            { front: "Step 3 — Joke about your own calibration with ease", back: "\"I'm a work in progress on the timing.\" — then move on. The faster you redirect, the smaller the miss becomes." }
          ]
        }
      ]
    }
  ],


  conversational: [
    {
      name: "Open, Flow, Mirror",
      subtitle: "Starting Conversations → Small Talk Flow → Mirroring & Paraphrasing",
      inputs: [
        {
          situation: "You approach someone you don't know at a social event",
          steps: [
            { front: "Step 1 — Choose an opener that fits the context", back: "Situational, direct, or a question. Simple works better than clever. You're curious about them — not performing." },
            { front: "Step 2 — Build on whatever they respond with", back: "Their answer always contains at least one new thread. Follow it — don't pivot to a prepared topic. Short answers = try a different angle or share something yourself." },
            { front: "Step 3 — Reflect back a keyword or feeling from what they said", back: "Pick up something specific: \"So it sounds like [X] is the part you actually enjoy?\" — shows you were following them, not just waiting for your turn." }
          ]
        },
        {
          situation: "You're in a work setting with a new colleague",
          steps: [
            { front: "Step 1 — Start with the shared context", back: "The situation you're both in is always available. Specific beats generic: comment on something both of you have just experienced." },
            { front: "Step 2 — Read the energy and keep it going", back: "Ask → share → ask. Mutual, not an interview. Short answers mean try a different topic." },
            { front: "Step 3 — Mirror something they said to show you heard it", back: "Feeling mirror or paraphrase: \"That sounds like it's been a lot.\" / \"So the main thing is [X]?\" — no need to say anything clever." }
          ]
        }
      ]
    },
    {
      name: "Flow, Find, Go Deeper",
      subtitle: "Small Talk Flow → Finding Common Ground → Mirroring & Paraphrasing",
      inputs: [
        {
          situation: "A conversation that's been on surface topics for a while",
          steps: [
            { front: "Step 1 — Keep the conversation going — build on their responses", back: "Ask → share → ask. Every answer contains at least one new thread. Follow it." },
            { front: "Step 2 — Listen for a genuine overlap and name it", back: "\"Wait — you too? I thought that was just me.\" — name the common ground explicitly. That's the moment of connection." },
            { front: "Step 3 — Mirror their version of the shared thing", back: "\"So for you it's more about [X] than [Y]?\" — shows you heard their side specifically, not just the topic." }
          ]
        },
        {
          situation: "You notice something you have in common and want to build on it",
          steps: [
            { front: "Step 1 — Name the overlap before it passes", back: "Common ground that isn't named is just coincidence. \"That's interesting — I've had exactly that experience with...\"" },
            { front: "Step 2 — Explore it briefly without lecturing", back: "One or two sentences about your side. Then ask about theirs: \"How did that go for you?\"" },
            { front: "Step 3 — Paraphrase what they share back", back: "\"If I understand right, for you the hardest part was...\" — shows you followed. Invites more." }
          ]
        }
      ]
    }
  ],

  conversationaldepth: [
    {
      name: "Share, Open, Receive",
      subtitle: "Storytelling → Deep Questions",
      inputs: [
        {
          situation: "You want to move past surface conversation",
          steps: [
            { front: "Step 1 — Tell a story with feeling and a clear point", back: "Hook, context, twist, resolution. End in a way that naturally opens a door — not a closed statement." },
            { front: "Step 2 — Follow with a deep question", back: "\"Has anything like that happened to you?\" / \"What do you make of that?\" — genuine curiosity, not a script." },
            { front: "Step 3 — Receive their answer fully before responding", back: "Don't start planning your follow-up while they're talking. Let them finish. The pause is part of the technique." }
          ]
        },
        {
          situation: "Early in a conversation where you're feeling each other out",
          steps: [
            { front: "Step 1 — Share something real — even something small", back: "A story doesn't have to be dramatic. Something specific and genuine is more connecting than something impressive." },
            { front: "Step 2 — End with an invitation rather than a question", back: "\"I'm curious if that resonates at all.\" is softer than a direct question. Leaves more room." },
            { front: "Step 3 — Follow whatever they give you", back: "Don't steer toward depth. Follow their thread — depth comes when they offer it." }
          ]
        }
      ]
    },
    {
      name: "Opinion, Feeling, Invite",
      subtitle: "Sharing Opinions → Sharing Emotions → Deep Questions",
      inputs: [
        {
          situation: "A conversation about something that actually matters to you",
          steps: [
            { front: "Step 1 — Share your opinion specifically and genuinely", back: "Not a general view — your actual take. \"What I think is X, and here's why.\" One sentence, specific reason." },
            { front: "Step 2 — Add the feeling behind it", back: "\"And honestly — it makes me a bit [X].\" The feeling adds weight. It's the difference between a position and a person." },
            { front: "Step 3 — Invite their view genuinely", back: "\"What do you think?\" — and mean it. Not a rhetorical handoff. Actually curious." }
          ]
        },
        {
          situation: "Discussing a shared experience with different angles",
          steps: [
            { front: "Step 1 — State your view of what happened", back: "Your angle specifically — what stood out to you, what you noticed." },
            { front: "Step 2 — Share how you felt about your own view", back: "\"I find myself [X] when I think about it.\" — adds depth without demanding reciprocity." },
            { front: "Step 3 — Open it up", back: "\"How do you sit with that?\" — a real question, not a test. You've been specific; now invite them to be too." }
          ]
        }
      ]
    },
    {
      name: "Go Deeper, Receive, Share Back",
      subtitle: "Deep Questions → Sharing Emotions",
      inputs: [
        {
          situation: "Someone shares something meaningful and you want to respond with more than acknowledgement",
          steps: [
            { front: "Step 1 — Follow up on what they said with a deeper question", back: "Toward experience or meaning: \"What was that actually like?\" / \"What did that change for you?\"" },
            { front: "Step 2 — Listen fully before you respond", back: "Don't plan your answer while they're speaking. The quality of your response depends on actually hearing them." },
            { front: "Step 3 — Share something in return", back: "\"I actually felt something similar when...\" — brief, genuine, relevant. You've asked them to go deep — now give something back." }
          ]
        },
        {
          situation: "A conversation that has become personal",
          steps: [
            { front: "Step 1 — Ask toward meaning, not just events", back: "\"What did that mean for you?\" — not \"what happened next?\"" },
            { front: "Step 2 — Receive what they give you without redirecting immediately", back: "Acknowledge it: \"That makes sense.\" Then pause. Let it land." },
            { front: "Step 3 — Share a feeling that's true for you in relation to what they said", back: "Not a matching story — a feeling. \"That makes me think about...\" / \"I feel something similar about...\"" }
          ]
        }
      ]
    }
  ],

  selfhumour: [
    {
      name: "Recover with Humour",
      subtitle: "Own it → Joke → Move on",
      inputs: [
        {
          situation: "You made a mistake in front of others",
          steps: [
            { front: "Step 1 — Acknowledge it briefly and calmly", back: "'Yeah, that wasn't my finest moment.' — one sentence. Don't ignore it, don't over-explain." },
            { front: "Step 2 — Add self humour with a light exaggeration", back: "'Classic me — I'm nothing if not consistent.' — brief, warm, self-aware." },
            { front: "Step 3 — Move on immediately", back: "Don't linger. The move on is part of the technique. The faster you move, the more it signals that it genuinely doesn't bother you." }
          ]
        },
        {
          situation: "Someone teases you about a flaw",
          steps: [
            { front: "Step 1 — Receive the tease without defending", back: "Don't explain, don't deny. Let it land. Defending makes it bigger." },
            { front: "Step 2 — Exaggerate the flaw even more", back: "'Oh, that's the mild version — you should see me on a bad day.' — taking it further shows you own it completely." },
            { front: "Step 3 — Optionally flip with jokingly bragging", back: "'But I make up for it in other areas.' — brief, then move on. Play, not lecture." }
          ]
        },
        {
          situation: "You want to create lightness in a tense interaction",
          steps: [
            { front: "Step 1 — Notice the tension without naming it", back: "Don't say 'this is tense' — just act as if it isn't. Self humour works best when it's not explained." },
            { front: "Step 2 — Make a light self-deprecating comment about something minor", back: "'I'm clearly not at my most eloquent today.' — it lands better if it's about something small, not the actual issue." },
            { front: "Step 3 — Use push-pull to re-engage", back: "A small pull: 'But seriously —' and then something real. You've broken the ice, now say something that matters." }
          ]
        }
      ]
    },
    {
      name: "Brag and Pull Back",
      subtitle: "Brag → Self-Humour → Push-Pull",
      inputs: [
        {
          situation: "You do something well and want to play with it",
          steps: [
            { front: "Step 1 — Jokingly brag about it", back: "'That was excellent — even by my standards.' — obvious exaggeration, warm tone, brief." },
            { front: "Step 2 — Immediately undercut it with self humour", back: "'Although to be fair, my standards for this particular thing are not especially high.' — the undercut makes the brag funnier in retrospect." },
            { front: "Step 3 — Use push-pull to keep the energy alive", back: "'You're welcome for the entertainment.' or a brief pull toward the other person. Don't monologue — involve them." }
          ]
        },
        {
          situation: "Someone gives you a lot of attention or approval",
          steps: [
            { front: "Step 1 — Receive it warmly but briefly (pull)", back: "'Thank you — I appreciate that.' — genuine, not dismissive." },
            { front: "Step 2 — Introduce a small push", back: "A light challenge or tease: 'Although I'm not sure you've seen me at my worst yet.' — the rhythm creates interest." },
            { front: "Step 3 — Redirect with a question or observation about them", back: "Move the attention. 'What about you — what are you actually good at?' — don't stay the subject for too long." }
          ]
        }
      ]
    }
  ],

  startingconnecting: [
    {
      name: "Open and Flow",
      subtitle: "Starting Conversations → Small Talk Flow",
      inputs: [
        {
          situation: "You want to talk to someone at a social event",
          steps: [
            { front: "Step 1 — Choose an opener that fits the context", back: "Situational, direct, or with humour. Simple works better than clever. Curiosity, not agenda." },
            { front: "Step 2 — Build on whatever they respond with", back: "Their answer contains at least one new thread. Follow it — don't pivot to a prepared topic." },
            { front: "Step 3 — Read the energy and adjust", back: "Short answers = try a different angle or share something yourself. Long answers with questions back = keep going." }
          ]
        },
        {
          situation: "You're new somewhere and want to connect",
          steps: [
            { front: "Step 1 — Use the framing opener if you're nervous", back: "'I'm new here — how are you?' / 'I'd regret not coming over.' Names the dynamic — removes some of the awkwardness." },
            { front: "Step 2 — Let their response lead the conversation", back: "Don't push toward depth. Small talk first — it creates the comfort that allows deeper conversation to happen." },
            { front: "Step 3 — Find one genuine point of contact before ending", back: "Something you actually share or both noticed. Doesn't have to be profound — just real." }
          ]
        }
      ]
    },
    {
      name: "Flow, Find, Mirror",
      subtitle: "Small Talk Flow → Finding Common Ground → Mirroring & Paraphrasing",
      inputs: [
        {
          situation: "A conversation that's staying on surface topics",
          steps: [
            { front: "Step 1 — Keep small talk flowing — build on their responses", back: "Ask → share → ask. Every answer they give has a new thread. Follow it." },
            { front: "Step 2 — Listen actively for an overlap — then name it", back: "'Wait — you too? I thought I was the only one.' — name the common ground explicitly. That's the moment of connection." },
            { front: "Step 3 — Mirror back what they said about the shared thing", back: "'So for you it's more about [X] than [Y]?' — shows you heard. Invites them to go deeper." }
          ]
        },
        {
          situation: "You notice something you have in common and want to build on it",
          steps: [
            { front: "Step 1 — Note the overlap — don't let it pass", back: "Common ground that isn't named is just coincidence. Name it: 'That's interesting — I've had exactly that experience with...''" },
            { front: "Step 2 — Explore it briefly — don't lecture", back: "One or two sentences. Then ask about their experience: 'How did that go for you?'" },
            { front: "Step 3 — Paraphrase what they share back to them", back: "'If I understand right, for you the hardest part was...' — shows you followed. Invites more." }
          ]
        }
      ]
    },
    {
      name: "Open, Find, Deepen",
      subtitle: "Starting Conversations → Finding Common Ground → Mirroring & Paraphrasing",
      inputs: [
        {
          situation: "A networking event where you want to make a real connection",
          steps: [
            { front: "Step 1 — Take the initiative — choose an opener", back: "Situational or direct. The goal isn't to impress — it's to find out something about this person." },
            { front: "Step 2 — Listen actively for the first genuine overlap", back: "Something you both know, care about, or have experienced. Name it when you find it." },
            { front: "Step 3 — Mirror their version of the shared thing", back: "'So for you it's mainly about [X]?' — shows genuine interest. Turns small talk into an actual exchange." }
          ]
        },
        {
          situation: "Meeting someone new in a context you'll see them again",
          steps: [
            { front: "Step 1 — Start with the shared context you're both in", back: "The situation you're both in is always available as an opener. Specific beats generic." },
            { front: "Step 2 — Find one real thing you have in common before the conversation ends", back: "Shared experience, reaction, or value. It doesn't have to be profound — just genuine." },
            { front: "Step 3 — Paraphrase the most interesting thing they said", back: "'What you said about [X] — I'm still thinking about that.' — signals that they were heard. Makes the next conversation easier." }
          ]
        }
      ]
    }
  ],

  listeningresponding: [
    {
      name: "Hear, Confirm, Go Deeper",
      subtitle: "Listening → Agreeing",
      inputs: [
        {
          situation: "Someone shares something emotionally significant",
          steps: [
            { front: "Step 1 — Full presence — listen without planning your response", back: "Phone away, eye contact, no interruption. Listen for the feeling behind the facts — what are they actually trying to communicate?" },
            { front: "Step 2 — Acknowledge with genuine confirmation", back: "'That makes complete sense.' / 'I really understand that.' — not 'I know' (which redirects) but actual acknowledgement." },
            { front: "Step 3 — Ask one follow-up question toward their experience", back: "'What happened after that?' / 'How are you sitting with it now?' — shows you want to understand, not just respond." }
          ]
        },
        {
          situation: "Someone describes a difficult week",
          steps: [
            { front: "Step 1 — Let them finish completely before you respond", back: "Most people respond too quickly. The moment they pause isn't the moment to speak — it might be the moment they go deeper." },
            { front: "Step 2 — Name the feeling before the content", back: "'That sounds exhausting.' / 'That sounds like a lot to carry.' — acknowledging feeling first signals you actually heard them." },
            { front: "Step 3 — Ask if they want advice or just to be heard", back: "'Do you want me to just listen, or would it help to think through it together?' — asking is almost always better than guessing." }
          ]
        }
      ]
    },
    {
      name: "Hear, Hold, Push Back",
      subtitle: "Listening → Disagree → Hold",
      inputs: [
        {
          situation: "Someone states something you disagree with",
          steps: [
            { front: "Step 1 — Listen all the way through before responding", back: "Understand their full argument before forming your counter. Most disagreements happen because people respond to the first sentence." },
            { front: "Step 2 — Disagree specifically and calmly", back: "'I see it slightly differently — for me it's more about...' — address the specific point, not the whole thing at once." },
            { front: "Step 3 — Hold your position if they push back without a new argument", back: "'I hear you — I still think [position] because [reason].' Persistence from them is not a reason to update. A new argument is." }
          ]
        },
        {
          situation: "A discussion where someone holds a strong position",
          steps: [
            { front: "Step 1 — Demonstrate that you've actually heard them", back: "Before disagreeing: 'If I understand right, you're saying...' — this makes the disagreement land differently." },
            { front: "Step 2 — State your disagreement with the specific part you disagree with", back: "Not 'I disagree with all of that' but 'the part I'm not sure about is...' — precision keeps it out of territory disputes." },
            { front: "Step 3 — Invite a response without folding", back: "'Does that track, or am I missing something?' — genuinely open to being wrong, but not pre-emptively capitulating." }
          ]
        }
      ]
    },
    {
      name: "Listen, Build, Share",
      subtitle: "Listening → Agreeing → Share Feelings",
      inputs: [
        {
          situation: "A conversation that has moved into personal territory",
          steps: [
            { front: "Step 1 — Listen actively — follow the feeling, not just the facts", back: "What are they actually communicating underneath the events they're describing?" },
            { front: "Step 2 — Agree or validate genuinely before adding your own", back: "Build on what they've said — don't redirect. 'Yes, and...' not 'yes, but...' or 'that reminds me of...'" },
            { front: "Step 3 — Share something real in return", back: "'I actually felt something similar when...' — brief, relevant, genuine. Depth requires both people in it." }
          ]
        },
        {
          situation: "Someone shares something vulnerable",
          steps: [
            { front: "Step 1 — Receive it fully — don't immediately relate it to yourself", back: "Stay with what they shared for a moment before you respond. That pause is not awkward — it's respectful." },
            { front: "Step 2 — Acknowledge specifically what they shared", back: "Name what stood out to you: 'The part about [X] — that takes something.' Not generic validation." },
            { front: "Step 3 — Share something genuine in return if it's real", back: "If you have a relevant feeling — share it. If not, don't manufacture one. Genuine listening without sharing is also complete." }
          ]
        }
      ]
    }
  ],

  influenceframing: [
    {
      name: "Observe, Frame, Invite",
      subtitle: "Observation → Persuasion Framing → Invite",
      inputs: [
        {
          situation: "You want to pitch an idea to someone resistant",
          steps: [
            { front: "Step 1 — Observe what they care about before you speak", back: "Listen actively for what they keep returning to, what energises them, what they protect. Don't start framing before you've done this." },
            { front: "Step 2 — Frame your proposal in what you observed — not what you assumed", back: "\"Given that [what you care about], what I'd suggest is [proposal] because it would help you with [their value].\"" },
            { front: "Step 3 — Invite rather than close", back: "\"Does that address what you care about, or is there something I'm missing?\" — genuine question, not a trap." }
          ]
        },
        {
          situation: "You're making a case at work",
          steps: [
            { front: "Step 1 — Ask their perspective first — actually listen", back: "\"Before I say anything — what's your current thinking on this?\" People are more open to being influenced after they've been heard." },
            { front: "Step 2 — Frame in their values with a choice", back: "Start with common ground. Then: \"Given that, there are a couple of ways — [option A] or [option B]. What fits better for you?\"" },
            { front: "Step 3 — If they raise an objection — acknowledge, don't argue", back: "\"That's a fair concern — and you're right that [valid part]. The way I'd think about it is [reframe].\"" }
          ]
        }
      ]
    },
    {
      name: "Ground, Frame, Handle Objection",
      subtitle: "Grounding → Persuasion Framing → Reframe",
      inputs: [
        {
          situation: "A situation where your motives might be questioned",
          steps: [
            { front: "Step 1 — Establish credibility by sharing what you actually care about", back: "\"What I care about here is [value] — that's what's driving this suggestion.\" Grounding signals your framing is genuine, not tactical." },
            { front: "Step 2 — Frame the proposal in their values with a choice", back: "Now from a position of authenticity: \"Given that, the way I'd suggest thinking about it is...\"" },
            { front: "Step 3 — When they raise a concern, reframe rather than argue", back: "\"I can see why it looks like that. Another way to hold it might be [reframe].\" Acknowledge first. Then offer the alternative." }
          ]
        }
      ]
    },
    {
      name: "Notice, Name, Reframe",
      subtitle: "Observation → Reframe",
      inputs: [
        {
          situation: "A group is stuck on a problem",
          steps: [
            { front: "Step 1 — Name the pattern you've observed", back: "\"I notice we keep coming back to [X] — that might be the frame we're all working inside.\" Specific, not critical." },
            { front: "Step 2 — Offer a different frame as a question", back: "\"What if the question isn't [current frame] but [different frame]?\" Leave it open. Don't insist." }
          ]
        },
        {
          situation: "Someone is interpreting a situation in a way that limits them",
          steps: [
            { front: "Step 1 — Name what you've observed in their framing", back: "\"I notice you keep coming back to [X] as the problem — is that how you're seeing it?\" Confirm you've understood their frame before offering an alternative." },
            { front: "Step 2 — Acknowledge it first, then offer the reframe", back: "\"I can see why that's the frame — it makes sense given [X]. Another way to look at it might be [alternative].\" Then leave space." }
          ]
        }
      ]
    },
    {
      name: "Understand, Reframe, Offer",
      subtitle: "Persuasion Framing → Reframe",
      inputs: [
        {
          situation: "Someone is hesitant about an idea you want them to consider",
          steps: [
            { front: "Step 1 — Understand their perspective before presenting yours", back: "\"What's your main concern with it?\" — ask genuinely, listen to the answer. Don't start with your pitch." },
            { front: "Step 2 — Acknowledge what's valid in their hesitation", back: "\"That's a fair concern — and you're right that it requires [X].\" Acknowledging doesn't mean conceding." },
            { front: "Step 3 — Offer the reframe", back: "\"What I'd suggest is looking at it as [alternative frame].\" — present a different angle, not a counter-argument." }
          ]
        },
        {
          situation: "You want to change someone's mind without it becoming a debate",
          steps: [
            { front: "Step 1 — Ask their view first — and actually listen", back: "People are more open to being influenced after they've been heard. Don't skip this step." },
            { front: "Step 2 — Find something genuine to agree with", back: "Even if you disagree overall — there's usually something valid. Start there." },
            { front: "Step 3 — Present your view as an addition, not a correction", back: "\"I think there's also this...\" lands differently than \"but actually...\" — same content, different frame." }
          ]
        }
      ]
    }
  ]
};
