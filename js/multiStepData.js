// multiStepCollections.js — Data for Multiple Steps training mode
// Each strategy has a name, a set of inputs, and steps with front/back per input

const multiStepCollections = {

  assertive: [
    {
      name: "Assertiveness 1",
      subtitle: "Fogging → Inquiry → Assertion",
      inputs: [
        {
          situation: "Someone criticises your driving",
          steps: [
            {
              front: "Step 1 — Use fogging to agree with what might be true",
              back:  '"You might be right about that." — calm, no defence, no explanation.'
            },
            {
              front: "Step 2 — Use negative inquiry to ask about the details",
              back:  '"What is it specifically about my driving that bothers you?" — genuine curiosity, not sarcasm.'
            },
            {
              front: "Step 3 — Use negative assertion to own what is true",
              back:  '"Fair enough — I do drive fast sometimes. That\'s true." — short, calm, owned.'
            }
          ]
        },
        {
          situation: "Someone says you are too sensitive",
          steps: [
            {
              front: "Step 1 — Use fogging to agree with what might be true",
              back:  '"You could have a point there." — don\'t argue, don\'t justify.'
            },
            {
              front: "Step 2 — Use negative inquiry to explore what they mean",
              back:  '"What is it I do that comes across as sensitive to you?" — calm, specific question.'
            },
            {
              front: "Step 3 — Use negative assertion to acknowledge what\'s real",
              back:  '"Yes, I do care a lot about certain things. That\'s accurate." — own it without shrinking.'
            }
          ]
        },
        {
          situation: "Someone criticises how you handled a situation at work",
          steps: [
            {
              front: "Step 1 — Use fogging to absorb the criticism",
              back:  '"I can see why it might look that way." — no counter-attack, no justification.'
            },
            {
              front: "Step 2 — Use negative inquiry to understand specifically what went wrong",
              back:  '"What would you have done differently in that situation?" — open, not defensive.'
            },
            {
              front: "Step 3 — Use negative assertion to own the mistake clearly",
              back:  '"You\'re right — I could have handled that better. I\'ll keep that in mind." — direct and clean.'
            }
          ]
        }
      ]
    },
    {
      name: "Assertiveness 2",
      subtitle: "Fogging → Assertion → Broken Record",
      inputs: [
        {
          situation: "A friend wants to borrow money — you have already said no",
          steps: [
            {
              front: "Step 1 — Use fogging to acknowledge their position without giving in",
              back:  '"I understand it\'s a difficult situation." — don\'t argue with their need, just don\'t meet it.'
            },
            {
              front: "Step 2 — Use negative assertion to own your decision clearly",
              back:  '"I\'ve decided not to lend money to friends — that\'s just how I handle it." — no apology, no lengthy explanation.'
            },
            {
              front: "Step 3 — Use broken record when they push back",
              back:  '"I understand — and I\'m not going to lend the money." — same sentence, same calm tone, every time they push.'
            }
          ]
        },
        {
          situation: "A colleague keeps asking you to take on extra work you\'ve declined",
          steps: [
            {
              front: "Step 1 — Use fogging to acknowledge the pressure without agreeing",
              back:  '"I can see there\'s a lot on right now." — absorb it, don\'t argue with the situation.'
            },
            {
              front: "Step 2 — Use negative assertion to own your capacity clearly",
              back:  '"I\'m already at full capacity — that\'s just where I am right now." — factual, not apologetic.'
            },
            {
              front: "Step 3 — Use broken record as they continue to push",
              back:  '"I hear you — and I can\'t take on more right now." — repeat calmly, don\'t add new arguments.'
            }
          ]
        },
        {
          situation: "Someone pressures you to change a decision you\'ve already made",
          steps: [
            {
              front: "Step 1 — Use fogging to acknowledge their perspective",
              back:  '"I understand you see it differently." — don\'t dismiss them, don\'t cave.'
            },
            {
              front: "Step 2 — Use negative assertion to own the decision",
              back:  '"I made that call, and I stand by it — it might not have been perfect." — honest and grounded.'
            },
            {
              front: "Step 3 — Use broken record when they keep pushing",
              back:  '"I\'ve made my decision." — unchanged, undefended, repeated as needed.'
            }
          ]
        }
      ]
    }
  ],

  conversationaldepth: [
    {
      name: "Story to Question",
      subtitle: "Hook → Story → Deep Question",
      inputs: [
        {
          situation: "You want to open up a conversation with something real",
          steps: [
            { front: "Step 1 — Open with a hook that creates curiosity", back: "'You know what happened to me last week?' — make them want to hear what comes next before you've said anything." },
            { front: "Step 2 — Tell a short, structured story with one specific detail", back: "Context + twist + how you felt. One vivid detail makes it real. Keep it brief — leave room for them." },
            { front: "Step 3 — Follow with a deep question that invites their experience", back: "'Has anything like that ever happened to you?' or 'What would you have done?' — you've shared, now invite them." }
          ]
        },
        {
          situation: "Someone shares a surface-level event and you want to deepen it",
          steps: [
            { front: "Step 1 — Mirror or paraphrase what they said to show you heard", back: "'So you basically had to handle the whole thing alone?' — reflect back, invite more." },
            { front: "Step 2 — Ask a feeling or meaning question", back: "'How did that actually feel?' or 'What was the hardest part?' — move from facts to experience." },
            { front: "Step 3 — Share a brief emotion of your own to keep it mutual", back: "'I'd have found that really difficult.' — you share something real, then let the silence breathe." }
          ]
        },
        {
          situation: "You want to share an opinion and invite a real response",
          steps: [
            { front: "Step 1 — State your opinion directly and specifically", back: "Not 'I think it's interesting' but 'I actually think X is better than Y because...' — specificity invites real reaction." },
            { front: "Step 2 — Acknowledge that others might see it differently", back: "'I know not everyone sees it that way — but that's genuinely what I think.' — you hold your view and open space for theirs." },
            { front: "Step 3 — Ask for their view with curiosity", back: "'What do you think?' or 'I'm curious what your take is.' — you've created a real exchange, not a monologue." }
          ]
        }
      ]
    },
    {
      name: "Emotional Depth",
      subtitle: "Share → Invite → Deepen",
      inputs: [
        {
          situation: "Someone asks how you are and you want to answer honestly",
          steps: [
            { front: "Step 1 — Give a specific honest answer instead of 'fine'", back: "'Actually a bit tired, but otherwise good.' — one real thing, briefly. No need to unload." },
            { front: "Step 2 — Add one brief detail that makes it real", back: "'I've had a lot on this week — more than I expected.' — a detail turns a feeling into something they can relate to." },
            { front: "Step 3 — Return the question with genuine interest", back: "'What about you — how's things been?' — you've been real, now invite them to be too." }
          ]
        },
        {
          situation: "You want to share something that genuinely affected you",
          steps: [
            { front: "Step 1 — Name the feeling specifically", back: "'I was actually quite moved by it.' / 'I felt more proud of that than I expected to.' — specificity makes it credible." },
            { front: "Step 2 — Give the context briefly", back: "Enough that they understand what happened — not the full story. The feeling is the point." },
            { front: "Step 3 — Share it without demanding a reaction", back: "Let it land. You don't need them to say anything specific. Silence after something real is okay." }
          ]
        }
      ]
    }
  ],

  compliments: [
    {
      name: "Give, Receive, Disclose",
      subtitle: "Compliment → Receive → Share",
      inputs: [
        {
          situation: "You want to give a genuine compliment and keep the energy going",
          steps: [
            { front: "Step 1 — Give a specific, genuine compliment", back: "Name what they did or are: 'The way you handled that — that was really impressive.' — one specific thing, no padding." },
            { front: "Step 2 — Let it land — don't fill the silence", back: "Resist following up immediately. Let them receive it. The space after a compliment is part of it." },
            { front: "Step 3 — Add a genuine question or observation", back: "'How long have you been doing that?' or 'I hadn't seen that side of you before.' — build on the compliment rather than moving past it." }
          ]
        },
        {
          situation: "Someone gives you a compliment and you want to receive it well",
          steps: [
            { front: "Step 1 — Receive without dismissing or overdoing", back: "'Thank you — that means a lot.' or 'Thanks — I see you have good taste.' — pick the tone that fits." },
            { front: "Step 2 — Add one genuine sentence", back: "'That one was actually important to me.' or 'I wasn't sure how it would land.' — a real response, not just a thank you." },
            { front: "Step 3 — Return something real (optional)", back: "'I appreciate that — and actually, I've noticed the same about you with...' — if it's genuine. Not required." }
          ]
        },
        {
          situation: "Something has gone wrong and you want to repair the connection",
          steps: [
            { front: "Step 1 — Find something genuine to acknowledge about the person", back: "'I want to say before anything else — I think you handled the situation with a lot of patience.' — real, specific, first." },
            { front: "Step 2 — Use self disclosure to share how you feel", back: "'I feel bad about how this went — and I want to be clear about what I was trying to do.' — I-statement, not accusation." },
            { front: "Step 3 — State what you'd like to happen", back: "'I'd like us to find a way forward that works for both of us.' — a direction, not a demand." }
          ]
        }
      ]
    },
    {
      name: "Compliment Under Pressure",
      subtitle: "Acknowledge → Disclose → Hold Line",
      inputs: [
        {
          situation: "You want something from someone — start with a compliment",
          steps: [
            { front: "Step 1 — Open with a specific genuine compliment", back: "'I really appreciated how you handled X last time — it stuck with me.' — real and specific, not flattery." },
            { front: "Step 2 — Make your request clearly and directly", back: "'I'd like to ask you something — and I want to be upfront about it.' — directness is more respectful than hinting." },
            { front: "Step 3 — Leave space for them to decline without pressure", back: "'I understand if it doesn't work for you.' — you asked openly, you can hear no openly." }
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
      name: "Open and Connect",
      subtitle: "Opener → Common Ground → Small Talk",
      inputs: [
        {
          situation: "You want to approach someone you've never spoken to at an event",
          steps: [
            { front: "Step 1 — Choose and deliver a natural opener", back: "Situational: 'Is this your first time here?' or observational: 'You look like you've done this before.' — simple and direct." },
            { front: "Step 2 — Build on what they say and look for common ground", back: "Listen for any overlap — experience, reaction, interest. Name it when you find it: 'Wait, me too.' — make it explicit." },
            { front: "Step 3 — Keep the small talk flowing with topic bridges", back: "Build on what they say. Share back. Read the energy. If a topic dies, bridge: 'Completely different — what do you do when you're not here?'" }
          ]
        },
        {
          situation: "A conversation has stalled and you want to revive it",
          steps: [
            { front: "Step 1 — Comment on the shared situation to restart", back: "'It's getting a bit quieter in here — is this your usual spot?' — always available, always low-stakes." },
            { front: "Step 2 — Try a different topic with a clear bridge", back: "'Apropos of nothing — what do you do when you're not working?' — the bridge signals intentionality, not desperation." },
            { front: "Step 3 — Or share something about yourself to invite them in", back: "'I'll be honest, I find these things a bit overwhelming sometimes.' — a real thing about you often unlocks a real thing about them." }
          ]
        },
        {
          situation: "You're new somewhere and want to make a first connection",
          steps: [
            { front: "Step 1 — Be direct about being new", back: "'I'm new here — I'm [name], how are you?' — directness is disarming. Nobody expects it, which is why it works." },
            { front: "Step 2 — Ask a relevant question about the context you're both in", back: "'What should I know about this place?' or 'How long have you been here?' — they become the guide, which people enjoy." },
            { front: "Step 3 — Mirror and share to build rapport quickly", back: "Reflect back what they say, share something real about yourself. Look for common ground. Move toward what's interesting, away from what's polite." }
          ]
        }
      ]
    },
    {
      name: "Mirror and Deepen",
      subtitle: "Mirror → Common Ground → Deep Question",
      inputs: [
        {
          situation: "Someone shares something and you want to show you really heard them",
          steps: [
            { front: "Step 1 — Mirror a keyword or feeling", back: "They say 'it was exhausting' → 'Exhausting how — physically or mentally?' — the question comes from the mirror, not from nowhere." },
            { front: "Step 2 — Find common ground in the response", back: "'I know that feeling — I had something similar last month.' — you relate back briefly, then let them continue." },
            { front: "Step 3 — Ask a deeper question that goes underneath the surface", back: "'What was the hardest part of it?' or 'Did it change how you see things?' — you're moving from event to meaning." }
          ]
        },
        {
          situation: "Someone gives a one-word answer and you want to draw them out",
          steps: [
            { front: "Step 1 — Keyword mirror their answer", back: "They say 'fine' → 'Just fine?' — or 'okay' → 'Only okay?' — soft, not interrogating." },
            { front: "Step 2 — Share something real about yourself on the same topic", back: "'I ask because I've had a bit of a mixed week myself.' — your realness invites theirs." },
            { front: "Step 3 — Ask one open question", back: "'What's been going on?' — simple, open, not loaded. Give them space to answer or not." }
          ]
        }
      ]
    }
  ],

  listeningresponding: [
    {
      name: "Listen and Respond",
      subtitle: "Listen → Acknowledge → Agree or Disagree",
      inputs: [
        {
          situation: "Someone shares a strong opinion and you want to engage authentically",
          steps: [
            { front: "Step 1 — Listen all the way through without preparing your response", back: "Let them finish completely. Don't plan your reply while they talk. Wait for the full picture." },
            { front: "Step 2 — Acknowledge what they said before responding", back: "'I hear what you're saying — and I think I understand where you're coming from.' — even if you disagree." },
            { front: "Step 3 — Agree or disagree clearly and genuinely", back: "If you agree: 'Yes, and I'd add...' If you disagree: 'I actually see it differently — I think...' — hold your line warmly." }
          ]
        },
        {
          situation: "Someone shares something emotionally difficult",
          steps: [
            { front: "Step 1 — Be fully present — no phone, no advice, no solutions", back: "Just listen. Eye contact. Let them speak. The most powerful thing you can do is simply be there." },
            { front: "Step 2 — Acknowledge the feeling, not the facts", back: "'That sounds really hard.' / 'That makes sense that you feel that way.' — you're responding to the person, not the situation." },
            { front: "Step 3 — Ask before offering anything", back: "'Do you want me to just listen, or would it help to think through it together?' — let them lead what kind of support they need." }
          ]
        },
        {
          situation: "Someone gives you feedback you weren't expecting",
          steps: [
            { front: "Step 1 — Listen all the way without defending", back: "Don't interrupt, don't start explaining. Take it in first. You can respond later." },
            { front: "Step 2 — Acknowledge what you heard", back: "'If I understand right, you're saying that...' — paraphrase to show you got it, and to check your understanding." },
            { front: "Step 3 — Agree with what's fair, push back on what isn't", back: "'You're right that...' and if needed: 'I do see it a bit differently on...' — both in the same breath, calmly." }
          ]
        }
      ]
    },
    {
      name: "Share and Connect",
      subtitle: "Share Feelings → Invite → Agree or Push Back",
      inputs: [
        {
          situation: "You want to say something real and create a genuine exchange",
          steps: [
            { front: "Step 1 — Share a feeling honestly and specifically", back: "'I've been feeling a bit overwhelmed this week, if I'm honest.' — specific and real, not a complaint." },
            { front: "Step 2 — Invite them with a genuine question", back: "'What about you — how have you been managing?' — you've been real, now give them the same space." },
            { front: "Step 3 — Respond to what they say with agreement or your honest view", back: "Agree genuinely if you do. Disagree gently if you don't. 'I think I'd see that slightly differently...' — stay in the exchange." }
          ]
        },
        {
          situation: "You disagree with something and want to say so without damaging things",
          steps: [
            { front: "Step 1 — Acknowledge their view before stating yours", back: "'I understand why you think that — and I want to be honest with you.' — you're not dismissing them." },
            { front: "Step 2 — State your disagreement clearly and calmly", back: "'I actually see it differently — for me it's more about...' — direct, not aggressive." },
            { front: "Step 3 — Share what you feel about the disagreement itself", back: "'I find these conversations useful actually — it's good to not always think the same.' — the meta-comment keeps the relationship warm." }
          ]
        }
      ]
    }
  ],

  influenceframing: [
    {
      name: "Persuade and Reframe",
      subtitle: "Understand → Common Ground → Reframe",
      inputs: [
        {
          situation: "You want to change someone's mind about something",
          steps: [
            { front: "Step 1 — Ask about their perspective before sharing yours", back: "'What's your thinking on this?' — listen fully. You need to understand their frame before you can change it." },
            { front: "Step 2 — Find and name something you actually agree on", back: "'I think we both want the same outcome here — we just see the path differently.' — common ground first." },
            { front: "Step 3 — Reframe your position in terms of their values", back: "'The reason I see it this way is that it gets us to X faster — which I know matters to you.' — their X, not yours." }
          ]
        },
        {
          situation: "Someone pushes back on your idea",
          steps: [
            { front: "Step 1 — Acknowledge the objection genuinely", back: "'That's a fair point — I hadn't thought about it from that angle.' — not a capitulation, just honest." },
            { front: "Step 2 — Reframe the objection rather than arguing against it", back: "'I think what you're describing is actually a reason to do it differently — not to not do it.' — you've used their objection as material." },
            { front: "Step 3 — Give them a choice rather than a conclusion", back: "'There are a couple of ways we could handle this — one is X, the other is Y. Which feels better to you?' — choice reduces resistance." }
          ]
        },
        {
          situation: "Something is being framed negatively and you want to shift it",
          steps: [
            { front: "Step 1 — Acknowledge the current frame", back: "'I understand why it looks that way from the outside.' — you're not denying their reading." },
            { front: "Step 2 — Offer an alternative frame calmly", back: "'Here's another way to look at it — what if it's not a failure but a data point?' — present, don't impose." },
            { front: "Step 3 — Ground the reframe in values or evidence", back: "'The reason I see it that way is...' — the reframe lands better when it has a reason behind it." }
          ]
        }
      ]
    },
    {
      name: "Ground and Observe",
      subtitle: "Observe → Ground → Engage",
      inputs: [
        {
          situation: "You enter a social situation and want to read it before acting",
          steps: [
            { front: "Step 1 — Observe before speaking", back: "Take 30 seconds. What's the energy? What's the atmosphere? Who's engaged, who's not? Don't rush to fill space." },
            { front: "Step 2 — Ground yourself in what you value in this moment", back: "'I want to be present, not perform.' — a quiet internal anchor before you engage." },
            { front: "Step 3 — Engage from observation", back: "Use what you noticed as your entry point. 'I noticed that...' or comment on something specific. You've seen more than most — use it." }
          ]
        },
        {
          situation: "You want to share something you genuinely believe in",
          steps: [
            { front: "Step 1 — Observe the right moment to say it", back: "Timing matters. A value shared in the right moment lands deeper than one offered unprompted." },
            { front: "Step 2 — State it clearly and grounded", back: "'Something I actually believe is...' — present it as yours, not as universal truth." },
            { front: "Step 3 — Invite their view without pressure", back: "'I'm curious what you think about that.' or just leave it. You've shared something real — that's enough." }
          ]
        }
      ]
    }
  ]

};
