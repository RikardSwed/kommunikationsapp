// multiStepCollections.js — Data for Multiple Steps training mode
// Each strategy has a name, a set of inputs, and steps with front/back per input

const multiStepCollections = {

  assertive: [
    {
      name: "Assertiveness 1",
      subtitle: "Fogging → Inquiry → Assertion",
      description: "This sequence combines three assertive techniques in a fixed three-step order, applied to the same situation:\n\nStep 1 — Fogging: agree calmly with what might be true in the criticism, without defending or explaining.\n\nStep 2 — Negative Inquiry: ask a genuine, specific question to understand exactly what the other person means.\n\nStep 3 — Negative Assertion: own what is actually true about yourself, briefly and without over-apologising.\n\nTogether these three steps de-escalate criticism (Fogging), clarify it (Negative Inquiry), and resolve it honestly (Negative Assertion) — moving from defusing tension to full ownership.",
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
      description: "This sequence combines three assertive techniques in a fixed three-step order, applied to the same situation:\n\nStep 1 — Fogging: agree calmly with what might be true in the criticism, without defending or explaining.\n\nStep 2 — Negative Assertion: own what is actually true about yourself, briefly and without over-apologising.\n\nStep 3 — Broken Record: if the other person keeps pushing after that, calmly repeat your position without adding new arguments.\n\nTogether these three steps absorb the criticism (Fogging), resolve it honestly (Negative Assertion), and hold firm if pressure continues (Broken Record).",
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
  ]

};
