// multiStepData.js — Multi-step sequence data for Sequences mode

const multiStepCollections = {

  speakingupingroups: [
    {
      name: "Take It, Hold It, Hand It Back",
      guideFront: "Three steps — claim it, hold it, then give it away.",
      guideBack: "A possible line for this step.",
      description: "The full arc of a turn in a group, in three steps. Step one claims the floor rather than waiting to be offered it (Taking the Floor). Step two holds it when someone cuts across, without escalating (Handling Interruptions). Step three ends the turn deliberately, handing it to the person who tried to take it — which is what stops the exchange becoming a contest.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A project meeting. Three people have spoken, you have not, and a short pause opens.",
          steps: [
            { front: "Step 1 — Claim the turn", back: "\"What I'm thinking is — we're solving the wrong half of this.\"" },
            { front: "Step 2 — Hold it when cut off", back: "\"One second, let me land this — the wrong half is the pricing.\"" },
            { front: "Step 3 — Hand it over", back: "\"That's my point. Go on, you were saying?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A team call where you have finally been given a moment to raise the deadline.",
          steps: [
            { front: "Step 1 — Claim the turn", back: "\"Sorry — jumping in. I have one thing on the timeline.\"" },
            { front: "Step 2 — Hold it when cut off", back: "\"Almost done — the timeline only works if scope drops.\"" },
            { front: "Step 3 — Hand it over", back: "\"That's it from me. What were you going to add?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A discussion where the group is agreeing quickly and you are not convinced.",
          steps: [
            { front: "Step 1 — Claim the turn", back: "\"Before we lock this in — I want to name one risk.\"" },
            { front: "Step 2 — Hold it when cut off", back: "\"Let me finish the risk, then argue with me.\"" },
            { front: "Step 3 — Hand it over", back: "\"Right, that's the worry. What do you all think?\"" },
          ]
        },
      ]
    },
    {
      name: "Interrupted, Finished, Even",
      guideFront: "Three steps — acknowledge, finish, then give it away.",
      guideBack: "A possible line for this step.",
      description: "What to do in the moment someone cuts across you, in three steps. Step one acknowledges the interruption instead of pretending it did not happen (Handling Interruptions). Step two finishes the point you were making, briefly. Step three gives them the floor on purpose, which turns the whole thing from a small clash into an ordinary exchange.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are explaining a decision when a colleague talks over you.",
          steps: [
            { front: "Step 1 — Acknowledge it", back: "\"Hold on —\"" },
            { front: "Step 2 — Finish the point", back: "\"— I want to finish this bit: we chose it because the other option costs a week.\"" },
            { front: "Step 3 — Give them the floor", back: "\"Okay, now yours.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A friend jumps in with their own story before you reach the end of yours.",
          steps: [
            { front: "Step 1 — Acknowledge it", back: "\"Wait, I'm almost at the good bit.\"" },
            { front: "Step 2 — Finish the point", back: "\"So he opens the door — and the dog is already in the car.\"" },
            { front: "Step 3 — Give them the floor", back: "\"Right, go on. Yours sounded better anyway.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "The same person has interrupted you repeatedly and you are losing patience.",
          steps: [
            { front: "Step 1 — Acknowledge it", back: "\"I like that you want to add things —\"" },
            { front: "Step 2 — Finish the point", back: "\"— but let me get to the end of this one first.\"" },
            { front: "Step 3 — Give them the floor", back: "\"Done. What did you want to say?\"" },
          ]
        },
      ]
    },
  ],

  playfulrefusals: [
    {
      name: "Protest, Then Do It Anyway",
      guideFront: "Three steps — protest, escalate, then agree.",
      guideBack: "A possible line for this step.",
      description: "The complete playful protest, in three steps. Step one reacts far too big for the request (Playful Protest). Step two adds one absurd detail that makes the exaggeration unmistakable. Step three agrees anyway, which is what turns the whole thing into warmth rather than reluctance.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Someone on the sofa asks you to pass the remote, which is just out of their reach.",
          steps: [
            { front: "Step 1 — Protest", back: "\"No. Absolutely not. That is too much to ask of one person.\"" },
            { front: "Step 2 — Escalate once", back: "\"I have carried this family for years and now this.\"" },
            { front: "Step 3 — Do it anyway", back: "\"…here.\" Hands it over." },
          ]
        },
        {
          bundle: 'pro',
          situation: "A friend asks you to help them move a bookshelf on Saturday morning.",
          steps: [
            { front: "Step 1 — Protest", back: "\"A bookshelf? On a Saturday?\"" },
            { front: "Step 2 — Escalate once", back: "\"You know Saturdays are when I do nothing. Professionally.\"" },
            { front: "Step 3 — Do it anyway", back: "\"What time do you need me?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague asks you to join one more meeting at the end of a long day.",
          steps: [
            { front: "Step 1 — Protest", back: "\"That is the worst thing you have ever asked me.\"" },
            { front: "Step 2 — Escalate once", back: "\"And you asked me to present at eight in the morning once.\"" },
            { front: "Step 3 — Do it anyway", back: "\"Fine. Send the invite.\"" },
          ]
        },
      ]
    },
    {
      name: "Claim Incompetence, Then Hold It",
      guideFront: "Three steps — claim it, hold it, then offer something.",
      guideBack: "A possible line for this step.",
      description: "How a joking refusal survives being challenged, in three steps. Step one declines with an unbelievable excuse (Faked Incompetence). Step two holds the excuse when they push, because dropping it turns the joke into an apology. Step three offers something small you genuinely can do, which keeps the no warm.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Someone asks you to set up their new wifi router.",
          steps: [
            { front: "Step 1 — Claim incompetence", back: "\"I'd love to, but it would end in disaster. For everyone's sake.\"" },
            { front: "Step 2 — Hold it when pushed", back: "\"No, genuinely — I once turned a printer into a paperweight.\"" },
            { front: "Step 3 — Offer something small", back: "\"I'll hold the torch and say encouraging things, though.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A friend asks you to help paint a room next weekend.",
          steps: [
            { front: "Step 1 — Claim incompetence", back: "\"I have no spatial ability whatsoever. The wall would end up worse.\"" },
            { front: "Step 2 — Hold it when pushed", back: "\"You say it's easy. My last straight line was in 2009.\"" },
            { front: "Step 3 — Offer something small", back: "\"I'll bring lunch and supervise badly.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Someone asks you to make an awkward phone call on their behalf.",
          steps: [
            { front: "Step 1 — Claim incompetence", back: "\"I lose the power of speech on phones. It's been documented.\"" },
            { front: "Step 2 — Hold it when pushed", back: "\"Ask anyone. I once said 'you too' to a waiter.\"" },
            { front: "Step 3 — Offer something small", back: "\"I'll sit next to you while you do it.\"" },
          ]
        },
      ]
    },
  ],
  thehappyno: [
    {
      name: "No, Warmth, Move On",
      guideFront: "Three steps — say it, warm it, then move on.",
      guideBack: "A possible line for this step.",
      description: "The complete happy no in three steps, which is where most of the difficulty actually lives. Step one is the refusal itself, said early and plainly. Step two adds the light touch that keeps it warm without reopening the question. Step three changes the subject, because lingering is what turns a clean no into an apology.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Your child asks you to put their pyjamas on, and they are perfectly able to do it themselves.",
          steps: [
            { front: "Step 1 — Say the no", back: "\"Nope.\"" },
            { front: "Step 2 — Add the warmth", back: "\"— but you're brilliant at it.\"" },
            { front: "Step 3 — Move on", back: "\"Right. Which book tonight?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague asks you to swap shifts for the third time this month.",
          steps: [
            { front: "Step 1 — Say the no", back: "\"Not this one, I'm afraid.\"" },
            { front: "Step 2 — Add the warmth", back: "\"Hope you find someone — ask Sam, he owes you.\"" },
            { front: "Step 3 — Move on", back: "\"Did you see they moved the deadline?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A friend asks you to look after their plants while they are away, again.",
          steps: [
            { front: "Step 1 — Say the no", back: "\"I'm going to pass this time.\"" },
            { front: "Step 2 — Add the warmth", back: "\"Your plants deserve better than me anyway.\"" },
            { front: "Step 3 — Move on", back: "\"Where are you off to, though?\"" },
          ]
        },
      ]
    },
    {
      name: "When They Ask Again",
      guideFront: "Three steps — repeat it, hold it, then close it.",
      guideBack: "A possible line for this step.",
      description: "What to do when a warm no is tested, in three steps. Step one repeats the refusal in exactly the same tone, because changing tone is what signals that pressure works. Step two declines the invitation to justify it. Step three closes the subject warmly, so the second no costs the relationship nothing.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You have said a cheerful no and they immediately ask again.",
          steps: [
            { front: "Step 1 — Repeat, same tone", back: "\"Still no — and still cheerfully.\"" },
            { front: "Step 2 — Don't justify", back: "\"There isn't a better reason coming, I'm afraid.\"" },
            { front: "Step 3 — Close it warmly", back: "\"Ask me about something else and watch me say yes.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "They respond to your no with a reason designed to make refusing hard.",
          steps: [
            { front: "Step 1 — Repeat, same tone", back: "\"That's a good reason. It's still a no.\"" },
            { front: "Step 2 — Don't justify", back: "\"I'm not going to argue you out of it — I just can't.\"" },
            { front: "Step 3 — Close it warmly", back: "\"Tell me how it goes, though. I mean that.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "They laugh and say you never agree to anything.",
          steps: [
            { front: "Step 1 — Repeat, same tone", back: "\"This one's a no.\"" },
            { front: "Step 2 — Don't justify", back: "\"I know, I'm a disappointment. Consistent, though.\"" },
            { front: "Step 3 — Close it warmly", back: "\"Next round's on me to make up for it.\"" },
          ]
        },
      ]
    },
  ],
  theregretfulno: [
    {
      name: "Say It, Mean It, Stop",
      guideFront: "Three steps — name it, refuse plainly, then stop.",
      guideBack: "A possible line for this step.",
      description: "The complete regretful no in three steps, and the third is where it usually goes wrong. Step one names the regret honestly, once. Step two gives the refusal plainly, so it cannot be mistaken for a maybe. Step three closes without adding another reason — because every extra sentence after a sincere no turns it into a request to be forgiven.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend invites you to a weekend away that you genuinely wanted to join.",
          steps: [
            { front: "Step 1 — Name the regret", back: "\"I really wish I could — I'd have loved that.\"" },
            { front: "Step 2 — Refuse plainly", back: "\"It doesn't work this time.\"" },
            { front: "Step 3 — Stop", back: "\"Send me photos, though.\" Then change the subject." },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are offered an interesting project you have no capacity for.",
          steps: [
            { front: "Step 1 — Name the regret", back: "\"This is the kind of thing I'd normally jump at.\"" },
            { front: "Step 2 — Refuse plainly", back: "\"I can't take it on now.\"" },
            { front: "Step 3 — Stop", back: "\"Ask me again in the autumn.\" Nothing further." },
          ]
        },
        {
          bundle: 'pro',
          situation: "Someone close asks you to be somewhere and you already have a commitment.",
          steps: [
            { front: "Step 1 — Name the regret", back: "\"I'd really have wanted to be there.\"" },
            { front: "Step 2 — Refuse plainly", back: "\"I'm already committed that day.\"" },
            { front: "Step 3 — Stop", back: "\"Tell me how it goes.\" No third reason." },
          ]
        },
      ]
    },
  ],

  transitions: [
    {
      name: "Their Answer, Your Story, Back to Them",
      guideFront: "Three steps — react and link, keep it short, then hand it back.",
      guideBack: "A possible line for this step.",
      description: "The full exchange in three steps, in order. Step one reacts to their answer and links into a story of your own (Question to Story). Step two keeps that story short, so it stays a reply rather than a turn. Step three hands the floor back with a question that grows out of it (Story to Question). Together the three steps turn a single question into a conversation that runs both ways.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Coffee with a new colleague. You have just asked where they grew up, and they say a small town up north.",
          steps: [
            { front: "Step 1 — React and link", back: "\"A small town? I spent a summer working somewhere like that.\"" },
            { front: "Step 2 — Keep the story short", back: "\"Locked myself out twice in the first week, and by Friday the whole street knew my name.\"" },
            { front: "Step 3 — Hand it back", back: "\"Did everyone know everyone where you grew up as well?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "At a dinner you asked what they did at the weekend, and they say they went hiking.",
          steps: [
            { front: "Step 1 — React and link", back: "\"Hiking? We tried that last spring.\"" },
            { front: "Step 2 — Keep the story short", back: "\"Packed for a day trip, got back after dark, with one torch between four people.\"" },
            { front: "Step 3 — Hand it back", back: "\"Do you go often, or was this a one-off?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A friend mentions in passing that they nearly quit their studies last year.",
          steps: [
            { front: "Step 1 — React and link", back: "\"I nearly did too, in my second year.\"" },
            { front: "Step 2 — Keep the story short", back: "\"What kept me there was one very stubborn teacher who refused to let me drop it.\"" },
            { front: "Step 3 — Hand it back", back: "\"What made you stay?\"" },
          ]
        },
      ]
    },
    {
      name: "Light, Serious, Light Again",
      guideFront: "Three steps — signal the shift, say it plainly, then reopen.",
      guideBack: "A possible line for this step.",
      description: "How to take a conversation down into a serious register and bring it back out, in three steps. Step one signals the shift before it happens (Casual to Serious), so the drop in tone does not read as an alarm. Step two says the thing plainly, without softening it into nothing. Step three closes the serious part out loud and opens something easy (Topic Shift), so it does not hang over the rest of the evening.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You have been joking with a friend all evening and you need to tell them you are moving away.",
          steps: [
            { front: "Step 1 — Signal the shift", back: "\"Can I switch gear for a second?\"" },
            { front: "Step 2 — Say it plainly", back: "\"I've taken a job in another city. I'm moving in August.\"" },
            { front: "Step 3 — Close it and open something easy", back: "\"Okay, that's the heavy bit done. Are you helping me carry boxes or not?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Banter with a colleague, and you need to raise a real problem with the project deadline.",
          steps: [
            { front: "Step 1 — Signal the shift", back: "\"Before we go back to jokes — one real thing.\"" },
            { front: "Step 2 — Say it plainly", back: "\"The deadline doesn't work. If we keep this scope we will miss it.\"" },
            { front: "Step 3 — Close it and open something easy", back: "\"Good, that's said. Right — whose turn is it to get coffee?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A joke of yours lands badly and you can see that it hurt.",
          steps: [
            { front: "Step 1 — Signal the shift", back: "\"That came out wrong.\"" },
            { front: "Step 2 — Say it plainly", back: "\"Genuinely, I didn't mean it like that, and I'm sorry.\"" },
            { front: "Step 3 — Close it and open something easy", back: "\"Anyway — tell me about the thing you were saying before I ruined it.\"" },
          ]
        },
      ]
    },
  ],

  assertive: [
    // v1.26.28 (list 6): sequences are explicit multi-step processes built
    // from the pack’s four strategies — each step names the strategy in play.
    {
      name: "Fog, Then Ask",
      guideFront: "Two strategies in sequence — first deflect, then explore...",
      guideBack: "The next move...",
      subtitle: "Fogging → Negative Inquiry",
      // Chain A: absorb the criticism with Fogging, then take control with Negative Inquiry.
      inputs: [
        // —— Free (2) —————
        {
          bundle: "free",
          situation: "A friend says you've been distant lately",
          steps: [
            { front: "Step 1 — Fog it", back: "Agree with what might be true, calmly and without defending yourself. \"You might be right — I probably have been.\" Nothing to push against." },
            { front: "Step 2 — Ask for more", back: "Now lean in with Negative Inquiry. \"What have you noticed? When did it start feeling that way?\" Genuine curiosity — you are steering the conversation now." },
          ]
        },
        {
          bundle: "free",
          situation: "Your partner says you never listen properly",
          steps: [
            { front: "Step 1 — Fog it", back: "Agree with what might be true, calmly and without defending yourself. \"That could be true — I probably miss things sometimes.\" Nothing to push against." },
            { front: "Step 2 — Ask for more", back: "Now lean in with Negative Inquiry. \"Can you give me an example? I want to understand what it looks like.\" Genuine curiosity — you are steering the conversation now." },
          ]
        },
        // —— Pro (2) —————
        {
          bundle: "pro",
          situation: "Someone calls your plan unrealistic in front of others",
          steps: [
            { front: "Step 1 — Fog it", back: "Agree with what might be true, calmly and without defending yourself. \"You could have a point — parts of it are ambitious.\" Nothing to push against." },
            { front: "Step 2 — Ask for more", back: "Now lean in with Negative Inquiry. \"Which part seems most unrealistic to you?\" Specifics either improve the plan or dissolve the jab. Genuine curiosity — you are steering the conversation now." },
          ]
        },
        {
          bundle: "pro",
          situation: "Someone makes jokes at your expense repeatedly, framed as 'just joking'",
          steps: [
            { front: "Step 1 — Fog it", back: "Agree with what might be true, calmly and without defending yourself. \"True — I do give you good material.\" Calm, unbothered, no counter-attack. Nothing to push against." },
            { front: "Step 2 — Ask for more", back: "Now lean in with Negative Inquiry. \"What is it about that one that keeps being funny?\" Said evenly, it names the pattern without a fight. Genuine curiosity — you are steering the conversation now." },
          ]
        },
        // —— Workplace (3) —————
        {
          bundle: "workplace",
          situation: "Your manager gives you feedback in front of others in a way that feels undermining",
          steps: [
            { front: "Step 1 — Fog it", back: "Agree with what might be true, calmly and without defending yourself. \"There’s probably something in that.\" Absorb it without defence — in the moment, in front of people. Nothing to push against." },
            { front: "Step 2 — Ask for more", back: "Now lean in with Negative Inquiry. Later, one on one: \"What specifically should I do differently? And can we take it privately next time?\" Genuine curiosity — you are steering the conversation now." },
          ]
        },
        {
          bundle: "workplace",
          situation: "A colleague repeatedly dismisses your contributions with 'we already tried that'",
          steps: [
            { front: "Step 1 — Fog it", back: "Agree with what might be true, calmly and without defending yourself. \"You may be right — something like this might have been tried.\" Nothing to push against." },
            { front: "Step 2 — Ask for more", back: "Now lean in with Negative Inquiry. \"What was tried exactly, and what made it fail? I want to see how this differs.\" The specifics do the arguing for you. Genuine curiosity — you are steering the conversation now." },
          ]
        },
        {
          bundle: "workplace",
          situation: "A colleague says your reports are hard to follow",
          steps: [
            { front: "Step 1 — Fog it", back: "Agree with what might be true, calmly and without defending yourself. \"Fair — they can probably be clearer.\" Nothing to push against." },
            { front: "Step 2 — Ask for more", back: "Now lean in with Negative Inquiry. \"Which section lost you? What would make it easier to use?\" You just turned a jab into a spec. Genuine curiosity — you are steering the conversation now." },
          ]
        },
        // —— Domestic (3) —————
        {
          bundle: "domestic",
          situation: "A family member repeatedly comments on your eating, weight, or lifestyle choices",
          steps: [
            { front: "Step 1 — Fog it", back: "Agree with what might be true, calmly and without defending yourself. \"You might be right — I don’t live the way you would.\" No justification, no counter. Nothing to push against." },
            { front: "Step 2 — Ask for more", back: "Now lean in with Negative Inquiry. \"What is it that worries you about it?\" Either there is real care underneath — or the comments run out of fuel. Genuine curiosity — you are steering the conversation now." },
          ]
        },
        {
          bundle: "domestic",
          situation: "Your partner criticises how you handled a family situation",
          steps: [
            { front: "Step 1 — Fog it", back: "Agree with what might be true, calmly and without defending yourself. \"You could be right — I might have handled it badly.\" Nothing to push against." },
            { front: "Step 2 — Ask for more", back: "Now lean in with Negative Inquiry. \"What would you have wanted me to do instead?\" You move from blame to a concrete request. Genuine curiosity — you are steering the conversation now." },
          ]
        },
        {
          bundle: "domestic",
          situation: "A relative says you've changed since you moved away",
          steps: [
            { front: "Step 1 — Fog it", back: "Agree with what might be true, calmly and without defending yourself. \"That’s probably true — I have changed.\" Said warmly, it is not even a concession. Nothing to push against." },
            { front: "Step 2 — Ask for more", back: "Now lean in with Negative Inquiry. \"What feels different to you?\" Often the criticism is loneliness wearing a costume — the question finds out. Genuine curiosity — you are steering the conversation now." },
          ]
        },
      ]
    },

    {
      name: "Hold, Fog, Hold",
      guideFront: "Three strategies in sequence — state, deflect, repeat...",
      guideBack: "The next move...",
      subtitle: "Broken Record → Fogging → Broken Record",
      // Chain B: open with Broken Record, fog the pushback, then return to the exact same position.
      inputs: [
        // —— Free (2) —————
        {
          bundle: "free",
          situation: "Someone keeps arguing after you've said no",
          steps: [
            { front: "Step 1 — State it once, clearly", back: "Broken Record starts with a clean position. \"I’ve decided not to do that.\" No padding, no apology." },
            { front: "Step 2 — Fog the pushback", back: "They push — you fog instead of arguing. \"You might be right that it’s a small favour.\" You concede nothing, you just give the pressure nothing to grip." },
            { front: "Step 3 — Broken Record", back: "Return to the exact same sentence, same calm tone. \"I’ve decided not to do that.\" The repetition is the technique — no new arguments, no escalation." },
          ]
        },
        {
          bundle: "free",
          situation: "A friend guilt-trips you after you've declined an invitation",
          steps: [
            { front: "Step 1 — State it once, clearly", back: "Broken Record starts with a clean position. \"I’m not going to make it.\" No padding, no apology." },
            { front: "Step 2 — Fog the pushback", back: "They push — you fog instead of arguing. \"True — I have missed a few lately.\" You concede nothing, you just give the pressure nothing to grip." },
            { front: "Step 3 — Broken Record", back: "Return to the exact same sentence, same calm tone. \"I’m not going to make it.\" The repetition is the technique — no new arguments, no escalation." },
          ]
        },
        // —— Pro (2) —————
        {
          bundle: "pro",
          situation: "Someone pressures you to change a decision you've already made",
          steps: [
            { front: "Step 1 — State it once, clearly", back: "Broken Record starts with a clean position. \"I’ve thought about it and I’m going ahead with this.\" No padding, no apology." },
            { front: "Step 2 — Fog the pushback", back: "They push — you fog instead of arguing. \"You could be right that it’s a risk.\" You concede nothing, you just give the pressure nothing to grip." },
            { front: "Step 3 — Broken Record", back: "Return to the exact same sentence, same calm tone. \"I’ve thought about it and I’m going ahead with this.\" The repetition is the technique — no new arguments, no escalation." },
          ]
        },
        {
          bundle: "pro",
          situation: "Someone uses emotional escalation to make you back down",
          steps: [
            { front: "Step 1 — State it once, clearly", back: "Broken Record starts with a clean position. \"My position hasn’t changed.\" No padding, no apology." },
            { front: "Step 2 — Fog the pushback", back: "They push — you fog instead of arguing. \"You’re right, this is upsetting.\" Lower your temperature as theirs rises. You concede nothing, you just give the pressure nothing to grip." },
            { front: "Step 3 — Broken Record", back: "Return to the exact same sentence, same calm tone. \"My position hasn’t changed.\" The repetition is the technique — no new arguments, no escalation." },
          ]
        },
        // —— Workplace (3) —————
        {
          bundle: "workplace",
          situation: "Your manager asks you to take on extra work when you're already at capacity",
          steps: [
            { front: "Step 1 — State it once, clearly", back: "Broken Record starts with a clean position. \"I can’t take that on right now.\" No padding, no apology." },
            { front: "Step 2 — Fog the pushback", back: "They push — you fog instead of arguing. \"You’re right that it’s important.\" You concede nothing, you just give the pressure nothing to grip." },
            { front: "Step 3 — Broken Record", back: "Return to the exact same sentence, same calm tone. \"I can’t take that on right now.\" The repetition is the technique — no new arguments, no escalation." },
          ]
        },
        {
          bundle: "workplace",
          situation: "A client keeps pushing for a lower price after you've given your final number",
          steps: [
            { front: "Step 1 — State it once, clearly", back: "Broken Record starts with a clean position. \"That’s my final price.\" No padding, no apology." },
            { front: "Step 2 — Fog the pushback", back: "They push — you fog instead of arguing. \"You may well find cheaper options elsewhere.\" You concede nothing, you just give the pressure nothing to grip." },
            { front: "Step 3 — Broken Record", back: "Return to the exact same sentence, same calm tone. \"That’s my final price.\" The repetition is the technique — no new arguments, no escalation." },
          ]
        },
        {
          bundle: "workplace",
          situation: "A colleague pushes back hard on a decision you've made in your area of responsibility",
          steps: [
            { front: "Step 1 — State it once, clearly", back: "Broken Record starts with a clean position. \"This is my call, and I’m making it.\" No padding, no apology." },
            { front: "Step 2 — Fog the pushback", back: "They push — you fog instead of arguing. \"You might be right that another way could work too.\" You concede nothing, you just give the pressure nothing to grip." },
            { front: "Step 3 — Broken Record", back: "Return to the exact same sentence, same calm tone. \"This is my call, and I’m making it.\" The repetition is the technique — no new arguments, no escalation." },
          ]
        },
        // —— Domestic (3) —————
        {
          bundle: "domestic",
          situation: "A family member keeps pushing you to attend an event you've already declined",
          steps: [
            { front: "Step 1 — State it once, clearly", back: "Broken Record starts with a clean position. \"I won’t be coming.\" No padding, no apology." },
            { front: "Step 2 — Fog the pushback", back: "They push — you fog instead of arguing. \"True — it would mean a lot to grandma.\" You concede nothing, you just give the pressure nothing to grip." },
            { front: "Step 3 — Broken Record", back: "Return to the exact same sentence, same calm tone. \"I won’t be coming.\" The repetition is the technique — no new arguments, no escalation." },
          ]
        },
        {
          bundle: "domestic",
          situation: "Your partner pressures you to agree to something in the middle of an argument",
          steps: [
            { front: "Step 1 — State it once, clearly", back: "Broken Record starts with a clean position. \"I’m not deciding this right now.\" No padding, no apology." },
            { front: "Step 2 — Fog the pushback", back: "They push — you fog instead of arguing. \"You’re right that we need to solve it.\" You concede nothing, you just give the pressure nothing to grip." },
            { front: "Step 3 — Broken Record", back: "Return to the exact same sentence, same calm tone. \"I’m not deciding this right now.\" The repetition is the technique — no new arguments, no escalation." },
          ]
        },
        {
          bundle: "domestic",
          situation: "A parent repeatedly questions a life choice you've already made and explained",
          steps: [
            { front: "Step 1 — State it once, clearly", back: "Broken Record starts with a clean position. \"This is what I’ve chosen.\" No padding, no apology." },
            { front: "Step 2 — Fog the pushback", back: "They push — you fog instead of arguing. \"You might be right that it’s not what you would have done.\" You concede nothing, you just give the pressure nothing to grip." },
            { front: "Step 3 — Broken Record", back: "Return to the exact same sentence, same calm tone. \"This is what I’ve chosen.\" The repetition is the technique — no new arguments, no escalation." },
          ]
        },
      ]
    },
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
  ],

  storytelling: [
    {
      name: "Hook → Build → Twist → Invite",
      description: "The full storytelling arc for a story with a clear unexpected moment.",
      steps: [
        { q: "Step 1 — Hook",             a: "\"You know what happened to me on the way here?\" — create forward pull." },
        { q: "Step 2 — Build",            a: "Set the context briefly, build the tension, slow down near the twist." },
        { q: "Step 3 — Twist + Resolution", a: "Land it cleanly and move on quickly. Don't over-explain." },
        { q: "Step 4 — Invite",           a: "\"Has anything like that happened to you?\" — hand the floor back." },
      ]
    },
    {
      name: "Self-deprecating story → Laugh → Move on",
      description: "For sharing an embarrassing or clumsy moment with warmth and self-distance.",
      steps: [
        { q: "Step 1 — Tell it",     a: "Tell with self-distance — you're laughing at yourself, not seeking sympathy." },
        { q: "Step 2 — Let it land", a: "Let the reaction land without explaining the joke or repeating the punchline." },
        { q: "Step 3 — Move on",     a: "Continue naturally — don't keep referencing the moment." },
      ]
    }
  ],

  humourpractise: [
    {
      name: "Tease and Recover",
      guideFront: "Two moves in sequence — jab, then soften...",
      guideBack: "The next move...",
      subtitle: "Teasing → Self Humour",
      description: "A two-step combo: land a warm tease, then immediately soften it with self humour so the jab stays affectionate. Step 1 is the playful jab; step 2 turns it on yourself so no one's left stung — the recovery is what keeps it kind.",
      inputs: [
        {
          bundle: "free",
          situation: "A friend proudly shows off a bold new haircut.",
          steps: [
            { front: "Step 1 — Tease", back: '"Bold. Very bold. Statement, or lost bet?"' },
            { front: "Step 2 — Recover with self humour", back: '"Kidding — it suits you. I could never; I\'d look like a startled hedgehog."' },
          ]
        },
        {
          bundle: "free",
          situation: "You gently rib your cousin about their terrible parking.",
          steps: [
            { front: "Step 1 — Tease", back: '"Was the goal to park, or to headbutt the kerb?"' },
            { front: "Step 2 — Recover with self humour", back: '"I\'m one to talk — I once took three tries to leave an empty car park."' },
          ]
        },
      ]
    },
    {
      name: "Notice and Riff",
      guideFront: "Two moves in sequence — observe, then tease...",
      guideBack: "The next move...",
      subtitle: "Observation → Teasing",
      description: "A two-step combo: first name the absurd thing you both see (observation), then turn it into a warm tease of the person you're with. The observation opens the door and gets everyone laughing; the tease makes it personal and playful.",
      inputs: [
        {
          bundle: "free",
          situation: "You and a friend watch the 'quick' meeting hit its 45th minute.",
          steps: [
            { front: "Step 1 — Observe", back: '"The quick sync has now outlived several real meetings."' },
            { front: "Step 2 — Tease your friend", back: '"You\'ve asked four questions. This is on you, honestly."' },
          ]
        },
        {
          bundle: "pro",
          situation: "The café is dead silent while upbeat music plays.",
          steps: [
            { front: "Step 1 — Observe", back: '"Great energy in here. Really feeding off the crowd."' },
            { front: "Step 2 — Tease your friend", back: '"You fit right in — you\'ve said three words since we sat down."' },
          ]
        },
      ]
    },
    {
      name: "Brag and Deflate",
      guideFront: "Two moves in sequence — swagger, then undercut...",
      guideBack: "The next move...",
      subtitle: "Jokingly Brag → Self Humour",
      description: "A two-step combo: make an over-the-top, jokingly-proud claim about something tiny, then immediately undercut it with self humour. The swagger sets up the joke; the deflation lands it and keeps you likeable.",
      inputs: [
        {
          bundle: "free",
          situation: "You nail a parallel park on the first go, with your friend watching.",
          steps: [
            { front: "Step 1 — Jokingly brag", back: '"Everyone can stop and acknowledge that. Reflexes of a champion."' },
            { front: "Step 2 — Deflate with self humour", back: '"Don\'t ask me to reverse out, though. That\'s a different, darker story."' },
          ]
        },
        {
          bundle: "pro",
          situation: "You win a tiny trivia point at a pub quiz.",
          steps: [
            { front: "Step 1 — Jokingly brag", back: '"And that\'s why they\'ll put me on the money one day."' },
            { front: "Step 2 — Deflate with self humour", back: '"That was my one fact. The rest of this quiz will humble me quickly."' },
          ]
        },
      ]
    }
  ],
  setupstatement: [
    {
      name: "Setup, Ask, Stay",
      guideFront: "Say your part, then open it up — and stay with their answer.",
      guideBack: "A line you could say at this step.",
      description: "The full opening move: make your statement, hand over the question, and then actually follow their answer instead of jumping to your next line. The third step is where most openers fail — people ask, then don't listen. Steps: 1) Setup — say your bit, 2) Ask — question on the same thing, 3) Stay — react to what they actually said.\n\nThe shape of the whole thing:\n1. \"I'm trying to learn the guitar at the moment.\"\n2. \"Are you working on anything like that?\"\n3. \"Six months on the piano — what made you pick it up?\"\n\nWhy this order: the statement lowers the pressure, the question hands over the turn, and staying with their answer is what turns an opener into a conversation.\n\nMindset: step 3 is where most openers die. People ask, then stop listening because they are already hunting for the next line.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You've just sat down next to someone before a workshop starts.",
          steps: [
            { front: "Step 1 · Setup — you decide to open", back: "\"I came to this mostly to steal ideas, honestly.\"" },
            { front: "Step 2 · Ask — you've said your bit, now turn it to them", back: "\"What made you sign up?\"" },
            { front: "Step 3 · Stay — they say \"my manager sent me, for a project\"", back: "\"Oh, a project — what are you actually building?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A friend of a friend at a party, both of you a bit tired.",
          steps: [
            { front: "Step 1 · Setup — you decide to open", back: "\"I nearly bailed on tonight, low-energy day.\"" },
            { front: "Step 2 · Ask — you've shared it, turn it to them", back: "\"How's your evening going?\"" },
            { front: "Step 3 · Stay — they say \"honestly, I came straight from a night shift\"", back: "\"A night shift, then straight here? That's real commitment.\"" },
          ]
        },
      ]
    },
    {
      name: "Statement into Story",
      guideFront: "Say your part, then open it up — and stay with their answer.",
      guideBack: "A line you could say at this step.",
      description: "Start with a background setup, hand over the question, and then build on the thread they give you rather than resetting. Good when you want the conversation to deepen rather than ping-pong. Steps: 1) Background — where you're coming from, 2) Ask — turn it to them, 3) Build — pick up a detail and go further.\n\nThe shape of the whole thing:\n1. \"I came straight from work and I'm starving.\"\n2. \"Where have you come from?\"\n3. \"Two trains? That's a long way to come for a Tuesday.\"\n\nWhy this order: a background setup gives them a thread rather than a yes or no, and picking up one detail from their answer is what stops the conversation resetting after every exchange.\n\nMindset: aim for depth, not ping-pong. One detail followed properly beats four questions answered briefly.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Arriving at a dinner where you only know the host.",
          steps: [
            { front: "Step 1 · Background — you want to open warmly", back: "\"I've come straight from a football match, still buzzing.\"" },
            { front: "Step 2 · Ask — turn it to them", back: "\"How do you know everyone here?\"" },
            { front: "Step 3 · Build — they say \"oh, I grew up with the host\"", back: "\"Grew up together? Okay, I need one embarrassing story.\"" },
          ]
        },
      ]
    },
  ],
  apologizing2: [
    {
      name: "The Full Five Steps",
      guideFront: "The step you are on — say your version out loud.",
      guideBack: "One way it could sound.",
      description: "The whole apology, start to finish: what they felt, why it was reasonable, why they matter, sorry for the specific thing, and what will change.\n\nThis one is a monologue. You are saying it as a continuous piece, and each card is the next step. Read the step, say your own version out loud, then turn the card.\n\nNotice where sorry sits. It is the fourth thing, not the first, and that ordering is the pack's central idea: an apology delivered before you have shown you understand is heard as wanting the conversation to end.\n\nMindset: each step earns the next. The plan at the end is what makes the rest worth believing.",
      inputs: [
        {
          bundle: 'pro',
          situation: "In yesterday's meeting you disagreed with a colleague publicly and fairly sharply. They have been polite and distant since. You have asked for ten minutes.",
          steps: [
            { front: "Step 1 · Name What They Felt — say what you think it was like for them.", back: "\"You've been pretty distant since yesterday, and I don't blame you at all.\"", guideFront: "Their feeling, not your intention." },
            { front: "Step 2 · Show You Understand Why — say why that was reasonable.", back: "\"I did that in front of eight people. You had no way to respond without making it worse.\"", guideFront: "Why anyone would have felt it." },
            { front: "Step 3 · Say Their Feelings Matter — say why this conversation is happening.", back: "\"It matters to me that you can put something forward without being ambushed.\"", guideFront: "Specific and short. General sounds rehearsed." },
            { front: "Step 4 · Apologise for What You Did — now say sorry, specifically.", back: "\"I'm sorry I said it in the room. I should have come to you first.\"", guideFront: "No \"if\", no \"but\", no \"you felt\"." },
            { front: "Step 5 · Say What You'll Do Differently — name what changes.", back: "\"If I disagree with you from now on, it happens between us first.\"", guideFront: "Small enough to be believed, specific enough to be checked." },
          ]
        },
        {
          bundle: 'pro',
          situation: "You cancelled on a friend two hours before, for the third time in a couple of months. They said \"no problem\" by message and have been noticeably cooler since.",
          steps: [
            { front: "Step 1 · Name What They Felt — say what you think it was like.", back: "\"You said no problem, but I think it was a problem, and reasonably so.\"", guideFront: "Their feeling, not your intention." },
            { front: "Step 2 · Show You Understand Why — say why that was reasonable.", back: "\"It's the third time. At some point 'something came up' stops meaning anything.\"", guideFront: "Why anyone would have felt it." },
            { front: "Step 3 · Say Their Feelings Matter — say why you are raising it.", back: "\"I don't want to be the friend you've stopped counting on.\"", guideFront: "Name what you do not want to be." },
            { front: "Step 4 · Apologise for What You Did — sorry, specifically.", back: "\"I'm sorry for cancelling that late. Two hours' notice isn't notice.\"", guideFront: "The specific thing you did." },
            { front: "Step 5 · Say What You'll Do Differently — what changes.", back: "\"I'm going to stop saying yes to things I'm not sure about. That's what causes it.\"", guideFront: "The only part that costs you anything." },
          ]
        },
      ]
    },
    {
      name: "When They Are Still Angry",
      guideFront: "The step you are on — say your version out loud.",
      guideBack: "One way it could sound.",
      description: "An apology does not always resolve things on delivery. Sometimes the other person is still angry, does not accept it yet, or wants to say more before they are ready to move.\n\nThis is an exchange rather than a monologue. The move throughout is to stay in it without defending yourself and without pressing for the apology to be accepted. An apology is offered, not transacted — and the moment you start arguing that it was a good apology, it stops being one.\n\nMindset: let them be angry at you for a bit. That is part of it, not a sign it failed.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You have apologised properly and the other person is still visibly angry.",
          steps: [
            { front: "Name What They Felt — they say, \"You can't just say sorry and make it fine.\"", back: "\"No. I'm not expecting it to be fine because I said something.\"" },
            { front: "Show You Understand Why — they say, \"You've done this before.\"", back: "\"You're right, and that's exactly why sorry on its own isn't worth much here.\"" },
            { front: "Say What You'll Do Differently — they say, \"So what's actually different?\"", back: "\"It goes in the calendar when you tell me, not in my head. You'll be able to see whether it works.\"" },
            { front: "Say Their Feelings Matter — they say, \"We'll see.\"", back: "\"Fair. I'd rather you were sceptical than pretend it's fine.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You have apologised for one thing and the conversation has widened into two or three other grievances.",
          steps: [
            { front: "Name What They Felt — they say, \"And it's not just this. It's the whole way you talk to me sometimes.\"", back: "\"That's a bigger thing than I came in here with, and it sounds like it's been building.\"" },
            { front: "Show You Understand Why — they say, \"It has, actually.\"", back: "\"Then this one's probably the small version of something else. I'd rather hear the whole thing.\"" },
            { front: "Apologise for What You Did — they say, \"I don't know where to start.\"", back: "\"Start anywhere. I'm sorry for yesterday regardless — that one I'm clear about.\"" },
            { front: "Say Their Feelings Matter — they say, \"Okay. Give me a minute.\"", back: "\"Take it. I'm not going anywhere.\"" },
          ]
        },
      ]
    },
    {
      name: "When It Was a Long Time Ago",
      guideFront: "The step you are on — say your version out loud.",
      guideBack: "One way it could sound.",
      description: "Something from months or years back is still sitting there. Raising it feels strange, and there is a real risk of reopening something the other person has put down.\n\nAcknowledging the delay is what makes it work, and asking before you launch is the courtesy that separates repair from imposing. Some people would rather leave it, and that answer has to be genuinely available.\n\nMindset: name the delay, ask before you open it, and accept the answer.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Something happened two years ago that you have never apologised for, and it has been on your mind.",
          steps: [
            { front: "Say Their Feelings Matter — you raise it out of nowhere.", back: "\"This is very late and you may have put it down entirely. Can I bring something up?\"" },
            { front: "Name What They Felt — they say, \"Go on.\"", back: "\"I think that whole thing left you feeling like I'd chosen someone else over you.\"" },
            { front: "Apologise for What You Did — they say, \"That's about right, yes.\"", back: "\"I'm sorry. I should have said something at the time and I didn't.\"" },
            { front: "Say What You'll Do Differently — they say, \"It was a long time ago.\"", back: "\"It was. I'd still rather be the person who says it late than not at all.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You have raised something old and the other person does not want to reopen it.",
          steps: [
            { front: "Name What They Felt — they say, \"I'd honestly rather leave it.\"", back: "\"That's fair. I don't want to make you go back there for my benefit.\"" },
            { front: "Apologise for What You Did — they say, \"It's fine, really.\"", back: "\"Then one sentence and I'll stop: I was in the wrong, and I'm sorry.\"" },
            { front: "Say Their Feelings Matter — they say, \"Thank you. Genuinely.\"", back: "\"That's all I wanted to say. It's been bothering me for a long time.\"" },
          ]
        },
      ]
    },
  ],
  startingconversations3: [
    {
      name: "Open With What You Noticed",
      guideFront: "What they gave back, and the opener to use next.",
      guideBack: "One way it could sound.",
      description: "A compliment or a guess gets you a reply, but both close by themselves — \"thanks\", or \"yes I have\". The work is in what you do with the two seconds afterwards.\n\nThis combo chains an observation into a question about them. Each step front carries what they actually said, and names the opener to use next.\n\nMindset: an observation opens the door. A question is what walks through it.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are early to an evening class. The person next to you is unpacking an unusual hardback notebook. Nothing has started.",
          steps: [
            { front: "Step 1 · Compliment Something Specific — you have noticed one thing, so name it.", back: "\"That's a great notebook. Where do you get those?\"", guideFront: "One specific thing. Add a question so it isn't a full stop." },
            { front: "Step 2 · Make a Guess About Them — they say, \"Oh — a shop in town. I go through about four a year.\"", back: "\"Four a year. You're not doing this class casually, then.\"" },
            { front: "Step 3 · Ask About Them — they laugh and say, \"No, I've done three of these now.\"", back: "\"Three? What made you start?\"" },
            { front: "Step 4 · Ask About Them — they say, \"I changed jobs and needed to learn it properly.\"", back: "\"What were you doing before?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are new at a club. One person is setting out equipment quickly and confidently while others stand around.",
          steps: [
            { front: "Step 1 · Make a Guess About Them — they are obviously the one who knows, so say so.", back: "\"You must be the one who actually knows how all this works.\"", guideFront: "A guess they will enjoy being right about." },
            { front: "Step 2 · Compliment Something Specific — they say, \"I've been coming since it started, so by default.\"", back: "\"You've got it down. That took about a minute.\"" },
            { front: "Step 3 · Ask About Them — they say, \"Practice. Are you new?\"", back: "\"First time. How long have you been at it?\"" },
            { front: "Step 4 · Ask About Them — they say, \"Six years, on and off.\"", back: "\"Six years. What keeps you coming back to it?\"" },
          ]
        },
      ]
    },
    {
      name: "When Your Guess Is Wrong",
      guideFront: "What they gave back, and the opener to use next.",
      guideBack: "One way it could sound.",
      description: "You guess, and you are wrong. It feels for a second like the opener failed — but a correction is more words than a confirmation would have been, and people enjoy putting someone right about themselves.\n\nThe move is to take the correction cheerfully and ask about it. \"No, actually…\" is an invitation, not a rebuff.\n\nMindset: being wrong gave them something to say. That was the job.",
      inputs: [
        {
          bundle: 'pro',
          situation: "At an event, someone is standing confidently near the front. You assume they come often.",
          steps: [
            { front: "Step 1 · Make a Guess About Them — they look at home, so guess that.", back: "\"I'm guessing you come to these a lot.\"", guideFront: "Say it lightly. Being wrong is a fine outcome." },
            { front: "Step 2 · Ask About Them — they say, \"First one, actually. I just look confident.\"", back: "\"That's a useful skill. What made you come to this one?\"" },
            { front: "Step 3 · Compliment Something Specific — they say, \"A friend recommended it and then didn't turn up.\"", back: "\"And you came anyway. I'd have gone home.\"" },
            { front: "Step 4 · Ask About Them — they say, \"I'd already paid.\"", back: "\"Fair. Is it the sort of thing you'd normally go for?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "At a party, someone is standing by the door with their coat still on. You assume they are leaving.",
          steps: [
            { front: "Step 1 · Make a Guess About Them — they look like they are on their way out.", back: "\"Let me guess — you're making your escape.\"", guideFront: "Mark it as a guess so it is easy to correct." },
            { front: "Step 2 · Ask About Them — they say, \"Just arrived, actually. I can never find where to put a coat.\"", back: "\"Ha — sorry. Do you know many people here?\"" },
            { front: "Step 3 · Compliment Something Specific — they say, \"Only the host. I don't really know anyone.\"", back: "\"Brave. Turning up somewhere knowing one person is harder than people admit.\"" },
            { front: "Step 4 · Ask About Them — they say, \"It's that or stay in.\"", back: "\"How do you know her?\"" },
          ]
        },
      ]
    },
    {
      name: "Asking Without Interviewing",
      guideFront: "What they gave back, and the opener to use next.",
      guideBack: "One way it could sound.",
      description: "The commonest way this pack goes wrong is question after question. Each one is fine on its own, and together they turn a conversation into a form being filled in.\n\nThe fix is to follow their answer instead of moving on. This combo drills that: every step takes a specific word from what they just said and asks about that, and one step gives something of your own back so it is not all one-directional.\n\nMindset: your next question should come out of their last answer. If it does not, you are interviewing.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You end up at a table with a colleague who joined last week. Neither of you knows the other at all.",
          steps: [
            { front: "Step 1 · Ask About Them — you know nothing about them, so start wide.", back: "\"How's the first week been?\"", guideFront: "One question, then listen properly." },
            { front: "Step 2 · Ask About Them — they say, \"Long. I came from a much smaller place.\"", back: "\"How much smaller? What was it like?\"" },
            { front: "Step 3 · Compliment Something Specific — they say, \"Eight of us. You knew everybody's business.\"", back: "\"That's a big jump. You've hidden it well — you look like you've been here months.\"" },
            { front: "Step 4 · Ask About Them — they say, \"It's mostly panic.\"", back: "\"What's been the strangest thing to get used to?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Someone at your club is friendly but answers briefly. You want to find the thing they will talk about.",
          steps: [
            { front: "Step 1 · Ask About Them — start with the obvious question about being here.", back: "\"How long have you been coming to this?\"", guideFront: "One question. Their answer decides the next one." },
            { front: "Step 2 · Ask About Them — they say, \"Couple of years.\"", back: "\"What got you started?\"" },
            { front: "Step 3 · Ask About Them — they say, \"My brother dragged me along and then quit.\"", back: "\"Ha. So he's the reason and he's not even here?\"" },
            { front: "Step 4 · Ask About Them — they say, \"He does triathlons now. Shows me up constantly.\"", back: "\"Are you tempted, or is that firmly his thing?\"" },
          ]
        },
      ]
    },
    {
      name: "When You Ask How They Really Are",
      guideFront: "What they gave back, and the opener to use next.",
      guideBack: "One way it could sound.",
      description: "This opener sometimes produces a real answer, and what happens next matters more than the question did.\n\nBoth scenarios here practise the same restraint: listen, do not fix, do not compare it to your own situation, and leave the door open. One ends with them saying very little, which is a complete and acceptable outcome.\n\nIf someone is genuinely struggling, this is where an opener stops being the right tool. Ask, listen, and offer something concrete — do not try to solve it standing up.\n\nMindset: you asked in order to hear the answer. Hearing it is the whole job.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A colleague who is normally talkative has been flat for a week. You are in the kitchen and it is just the two of you.",
          steps: [
            { front: "Step 1 · Ask How They Really Are — name what you noticed, then ask.", back: "\"You've been quiet this week. Everything alright?\"", guideFront: "Name what you noticed. Then stop talking." },
            { front: "Step 2 · Wait — they say, \"Yeah, fine,\" and then do not move away.", back: "*(say nothing — leave the pause)*", guideFront: "Do not fill this. The pause is the question." },
            { front: "Step 3 · Ask How They Really Are — they say, \"It's just been a lot at home, that's all.\"", back: "\"That sounds like a heavy week.\"" },
            { front: "Step 4 · Offer something concrete — they say, \"It's fine. It'll sort itself out.\"", back: "\"Alright. I'm about most days if you want a coffee and a moan.\"", guideFront: "Do not solve it. Leave a door and let it go." },
          ]
        },
        {
          bundle: 'pro',
          situation: "A friend has something they have been dreading happening tomorrow.",
          steps: [
            { front: "Step 1 · Ask How They Really Are — ask about the specific thing, not in general.", back: "\"How are you feeling about tomorrow?\"", guideFront: "Narrow and specific. Easier to answer than \"how are you\"." },
            { front: "Step 2 · Wait — they say, \"Trying not to think about it.\"", back: "*(say nothing — leave the pause)*", guideFront: "Do not fill this." },
            { front: "Step 3 · Ask How They Really Are — they say, \"I'll be fine once it starts. It's the waiting.\"", back: "\"The waiting is the worst part of everything, I think.\"" },
            { front: "Step 4 · Offer something concrete — they say, \"Yeah.\"", back: "\"Do you want company tonight, or would you rather be left alone with it?\"" },
          ]
        },
      ]
    },
  ],
  endingconversations: [
    {
      name: "The Full Close",
      guideFront: "Where you are in the close, and the move to make next.",
      guideBack: "One way it could sound.",
      description: "The moves stacked in their natural order: reason, something warm, and the exit phrase last. This is what an ordinary good goodbye is actually made of, and it takes about eight seconds.\n\nThe order is doing real work. The reason explains the ending, the warm bit protects it, and the exit phrase closes it. Move the exit phrase anywhere but last and the conversation reopens.\n\nMindset: reason, warmth, exit. Then actually go.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A colleague has spent twenty minutes talking you through something you were stuck on. You have a meeting starting.",
          steps: [
            { front: "Step 1 · Give a Reason — say why you are going.", back: "\"I've got to get to a call at eleven.\"", guideFront: "One reason, briefly. Detail sounds like an excuse." },
            { front: "Step 2 · Say Something Positive — they say, \"No problem, go.\"", back: "\"That was genuinely useful, though. I've been stuck on it for two days.\"" },
            { front: "Step 3 · Offer to Continue Later — they say, \"Any time. Shout if it breaks again.\"", back: "\"I might. Can I grab you Thursday if the other bit's still odd?\"" },
            { front: "Step 4 · Use an Exit Phrase — they say, \"Course. I'm around all day.\"", back: "\"Perfect. Thanks again — see you Thursday.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You have been talking to someone you have just met at an event for ten minutes. It has been good, and you want to move on without it seeming like an escape.",
          steps: [
            { front: "Step 1 · Say Something Positive — start with the warmth this time.", back: "\"This has been much better than the last one of these I came to.\"", guideFront: "The positive one looks back at the talk you just had." },
            { front: "Step 2 · Give a Reason — they say, \"Ha — low bar, but I'll take it.\"", back: "\"I should probably do a lap and talk to some other people.\"" },
            { front: "Step 3 · Offer to Continue Later — they say, \"Of course, go on.\"", back: "\"If you're still here at the end, come and find me.\"" },
            { front: "Step 4 · Use an Exit Phrase — they say, \"I will do.\"", back: "\"Good. Enjoy the rest of it.\"" },
          ]
        },
      ]
    },
    {
      name: "When They Keep Talking",
      guideFront: "Where you are in the close, and the move to make next.",
      guideBack: "One way it could sound.",
      description: "You have signalled that you are leaving and the conversation carries on anyway. This is the situation most people find hardest, because each failed attempt makes the next one feel ruder.\n\nThe move is to escalate in small steps rather than repeat the same signal. Softness first, then a clearer reason, then a firm and friendly close that does not leave a gap. The kindest version is also the clearest one — a soft signal repeated four times is more uncomfortable for both of you than one firm sentence.\n\nMindset: each attempt slightly clearer than the last. Do not leave a pause at the end.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are on the stairs with a neighbour. You need to leave. They have been talking for five minutes and show no sign of stopping.",
          steps: [
            { front: "Step 1 · Use an Exit Phrase — start soft and see if it lands.", back: "\"Right — I'd better let you get on.\"", guideFront: "Softest version first. It often works." },
            { front: "Step 2 · Give a Reason — they carry straight on with a new topic.", back: "\"I do have to run, actually — I've got something in the oven.\"" },
            { front: "Step 3 · Wish Them Well — they say, \"Oh, of course. Just quickly though —\"", back: "\"Sorry, I really can't. Hope the builders sort it out for you.\"" },
            { front: "Step 4 · Use an Exit Phrase — they say, \"Right, right. Well, see you.\"", back: "\"See you later.\"", guideFront: "Close it and go. Do not leave a pause." },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague has been at your desk for fifteen minutes. You have work to finish and they are still going.",
          steps: [
            { front: "Step 1 · Give a Reason — be straightforward, it is a work context.", back: "\"I'm going to have to get back to this, I'm afraid.\"", guideFront: "A reason is enough. You do not owe an apology." },
            { front: "Step 2 · Offer to Continue Later — they say, \"Sure, sure. One more thing though —\"", back: "\"Can we do the rest after lunch? I want to give it proper attention.\"" },
            { front: "Step 3 · Say Something Positive — they say, \"Fine, yeah. It's not urgent.\"", back: "\"It's a good question, that's the thing. I just can't do it justice right now.\"" },
            { front: "Step 4 · Use an Exit Phrase — they say, \"No worries. Later, then.\"", back: "\"Great — see you after lunch.\"" },
          ]
        },
      ]
    },
    {
      name: "Ending Something You Enjoyed",
      guideFront: "Where you are in the close, and the move to make next.",
      guideBack: "One way it could sound.",
      description: "Leaving a conversation that is going well is harder than leaving a dull one, because ending it can look like you did not feel the same way.\n\nThe answer is to make the ending say so explicitly. A reason plus a positive comment plus a genuine offer of more removes any ambiguity, and the last question is the strongest move available — it proves the conversation mattered by spending your final seconds on it.\n\nMindset: say the ending is about your day, not about them. Then prove it.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You have been talking to a friend at a bus stop and yours has just appeared. They were halfway through telling you something.",
          steps: [
            { front: "Step 1 · Give a Reason — the reason is arriving right now, so name it.", back: "\"That's my bus, of all the timing.\"", guideFront: "Reason first. It explains everything after it." },
            { front: "Step 2 · Leave With One Last Question — they say, \"Typical. Go on, go.\"", back: "\"Quickly though — did she take the job or not?\"" },
            { front: "Step 3 · Offer to Continue Later — they say, \"She did. It's a whole thing, I'll tell you properly.\"", back: "\"Do. Tell me the rest on Thursday, I want the whole story.\"" },
            { front: "Step 4 · Use an Exit Phrase — they say, \"It's a good one, honestly.\"", back: "\"Right, I'm running. See you Thursday.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "At a course, you have been talking to someone through the whole break and it has been the best part of the day. The session is restarting.",
          steps: [
            { front: "Step 1 · Say Something Positive — name it plainly before the moment passes.", back: "\"That's the most fun I've had today, and I include the actual course in that.\"", guideFront: "Say it as you leave. It only works as the last thing." },
            { front: "Step 2 · Give a Reason — they say, \"Ha. It's not a high bar.\"", back: "\"We should probably go back in before they notice.\"" },
            { front: "Step 3 · Offer to Continue Later — they say, \"Suppose so. Same time tomorrow?\"", back: "\"Definitely. Find me at the first break.\"" },
            { front: "Step 4 · End on a Joke — they say, \"It's a date.\"", back: "\"Steady on. See you in there.\"" },
          ]
        },
      ]
    },
  ],
  reactingtounexpectedstatements: [
    {
      name: "From Blank to Something Real",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "The usual arc: surprise, an honest pause, a question, and something partial and true. It rarely ends in a full answer, and it does not need to.\n\nEach step front carries what they said and names the strategy. Notice that at no point does the answer become complete — the conversation works anyway.\n\nMindset: the aim is to stay in it honestly, not to arrive at a verdict.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend tells you, with no warning, that they have handed in their notice and have nothing lined up.",
          steps: [
            { front: "Say You Need a Second — they say, \"I've quit. No plan yet.\"", back: "\"Right. Give me a second with that.\"" },
            { front: "Ask What Prompted It — they say, \"You think it's mad.\"", back: "\"I don't think anything yet. What's brought it on?\"" },
            { front: "Answer the Part You Can — they say, \"It's been building for about a year.\"", back: "\"I didn't know it was that long. I'm glad you've told me — the rest I'll have to catch up on.\"" },
            { front: "Come Back to It Later — they say, \"So what do you reckon?\"", back: "\"Ask me at the weekend and I'll have an actual view. Right now I'd just be reacting.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "In a meeting, a colleague says something about the team's direction that surprises you and that you are not sure you agree with.",
          steps: [
            { front: "Say You Need a Second — they finish and look at you.", back: "\"Let me think about that for a second.\"" },
            { front: "Ask What Prompted It — they say, \"You're not convinced.\"", back: "\"I don't know yet, honestly. How did you land on it?\"" },
            { front: "Answer the Part You Can — they say, \"Mostly the numbers from last quarter.\"", back: "\"The numbers I'd agree with. What we do about them I'd want to think about.\"" },
            { front: "Come Back to It Later — they say, \"Fair enough.\"", back: "\"Give me until Thursday and I'll have a proper answer either way.\"" },
          ]
        },
      ]
    },
    {
      name: "When It Is Personal",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Someone tells you something significant about themselves, out of nowhere. This is the version people handle worst, because the urge to say the right thing is strongest and the risk of saying something hollow is highest.\n\nThe move throughout is to be honest about not having words, and to make it clear that the not-knowing is about you rather than about them.\n\nMindset: they need you present, not eloquent. Say the true small thing.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A colleague you know moderately well tells you they have been unwell and it is serious.",
          steps: [
            { front: "Say You Don't Know What to Say — they finish telling you.", back: "\"I don't know what to say. I'm really glad you told me, though.\"" },
            { front: "Answer the Part You Can — they say, \"Nobody knows what to say. It's fine.\"", back: "\"I don't have anything wise. I do want to know how you're doing, if you want to tell me.\"" },
            { front: "Ask What Prompted It — they say, \"It's been going on a while.\"", back: "\"How long have you been carrying this on your own?\"" },
            { front: "Come Back to It Later — they say, \"A few months.\"", back: "\"Can I check in with you next week? Not to fix anything — just to check.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A friend tells you, unexpectedly, that a long relationship has ended.",
          steps: [
            { front: "Say You Need a Second — they say it and stop.", back: "\"God. Give me a second — I wasn't expecting that.\"" },
            { front: "Say You Don't Know What to Say — they say, \"It's alright, I've had a while with it.\"", back: "\"I haven't. I don't really know what to say yet.\"" },
            { front: "Ask What Prompted It — they say, \"It's been coming for ages, honestly.\"", back: "\"Tell me the whole thing, if you want to. I'd rather hear it properly.\"" },
            { front: "Answer the Part You Can — they say, \"Are you shocked?\"", back: "\"A bit. Mostly I'm just glad you're telling me rather than dealing with it alone.\"" },
          ]
        },
      ]
    },
    {
      name: "When You Answered Too Fast",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "The reaction arrives before the thought, and something has come out of your mouth that you did not mean or would not defend.\n\nGoing back is straightforward and almost nobody does it. Say that the first answer was a reaction, say what you actually think now, and — if it landed badly — say that plainly rather than hoping it passed.\n\nMindset: a corrected first reaction is worth more than a well-managed one, because it shows you were thinking rather than performing.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend told you something serious and your first reaction was a nervous laugh.",
          steps: [
            { front: "Say You Need a Second — you notice their face.", back: "\"Sorry — that was surprise, not amusement. Let me start again.\"" },
            { front: "Say You Don't Know What to Say — they say, \"It's fine, honestly.\"", back: "\"It isn't quite. I don't know what to say and I laughed instead.\"" },
            { front: "Ask What Prompted It — they say, \"People do that. Don't worry.\"", back: "\"Tell me the rest properly. I'm listening now.\"" },
            { front: "Answer the Part You Can — they say, \"There isn't much more to it.\"", back: "\"Then I'll just say I'm glad you told me. That much I'm sure about.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague raised an idea, you dismissed it in the moment, and you have since thought it might be right.",
          steps: [
            { front: "Come Back to It Later — you find them the next day.", back: "\"Can I come back to what you said yesterday? I answered too fast.\"" },
            { front: "Say You Don't Know What to Say — they say, \"You seemed pretty clear about it.\"", back: "\"I sounded clear. I wasn't — that was a reaction.\"" },
            { front: "Answer the Part You Can — they say, \"So what do you actually think?\"", back: "\"I think the first half is right. The second half I still don't know about.\"" },
            { front: "Ask What Prompted It — they say, \"That's more than I got yesterday.\"", back: "\"Fair. Talk me through how you got to the second half.\"" },
          ]
        },
      ]
    },
  ],
  deepquestions: [
    {
      name: "Warm Up, Then Go Deeper",
      guideFront: "Ask the question this step calls for.",
      guideBack: "One question you could ask here.",
      description: "The basic ladder from small talk to something real. Steps: 1) Start with Simple Questions — get easy facts on the table, 2) Link and Go Deeper — use a detail they gave you as a bridge, 3) Explore Values — ask what it means to them.\n\nThe shape of the whole thing:\n1. \"So how do you know the hosts? And what do you do with your days?\"\n2. \"You teach music — how did you end up doing that?\"\n3. \"What does teaching give you that playing didn't?\"\n\nWhy this order: the simple question produces the material, the link proves you were listening, and only then does a values question have somewhere to stand.\n\nMindset: this is the ladder, and every rung matters. Skip the first two and the third one lands as an interrogation.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are talking to someone you have just met at a friend's dinner.",
          steps: [
            { front: "Step 1 · Start simple — you know nothing about them yet", back: "\"So how do you know the hosts? And what do you do with your days?\"" },
            { front: "Step 2 · Link to what they said — they answer: \"I teach music at a school nearby.\"", back: "\"You teach music — how did you end up doing that?\"" },
            { front: "Step 3 · Ask what it means — they say: \"I fell into it after my own band fell apart.\"", back: "\"What does teaching give you that playing didn't?\"" },
          ]
        },
      ]
    },
    {
      name: "Follow the Experience",
      guideFront: "Ask the question this step calls for.",
      guideBack: "One question you could ask here.",
      description: "When they mention something that happened, follow it instead of moving on. Steps: 1) Link and Go Deeper — pick up the event they mentioned, 2) Explore Experiences — ask what it was actually like, 3) Explore Values — ask what it left them with.\n\nThe shape of the whole thing:\n1. \"A whole year — what made you decide to?\"\n2. \"What were those months actually like, day to day?\"\n3. \"What did that year change about what matters to you?\"\n\nWhy this order: the event has to be opened before it can be described, and it has to be described before what it meant will come out.\n\nMindset: when someone mentions something big in passing, following it is almost always welcome. People rarely mention those things by accident.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A colleague mentions something big that happened to them a few years ago.",
          steps: [
            { front: "Step 1 · Pick up the detail — they say: \"I took a year off when my dad got ill.\"", back: "\"A whole year — what made you decide to?\"" },
            { front: "Step 2 · Ask what it was like — they say: \"It was the right call, but it was long.\"", back: "\"What were those months actually like, day to day?\"" },
            { front: "Step 3 · Ask what it left them with — they say: \"I would do it again, without question.\"", back: "\"What did that year change about what matters to you?\"" },
          ]
        },
      ]
    },
    {
      name: "From an Opinion to a Belief",
      guideFront: "Ask the question this step calls for.",
      guideBack: "One question you could ask here.",
      description: "When someone drops an opinion in passing, treat it as a door rather than a full stop. Steps: 1) Link and Go Deeper — repeat the opinion back, 2) Explore Beliefs — ask what they think is true, 3) Explore Experiences — ask where the view came from.\n\nThe shape of the whole thing:\n1. \"Most of them — which ones would you keep?\"\n2. \"Do you think that is the meetings, or how we run them?\"\n3. \"What was the job that taught you that?\"\n\nWhy this order: repeating the opinion back invites them to refine it, the belief question gets the principle, and the experience question finds where it came from.\n\nMindset: a strong opinion dropped in passing is a door, not a full stop. Most people are glad someone picked it up.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Over coffee, someone drops a strong opinion into the conversation.",
          steps: [
            { front: "Step 1 · Repeat it back — they say: \"Honestly, most meetings are a waste of time.\"", back: "\"Most of them — which ones would you keep?\"" },
            { front: "Step 2 · Ask what they think is true — they say: \"Maybe one in five actually decides anything.\"", back: "\"Do you think that is the meetings, or how we run them?\"" },
            { front: "Step 3 · Ask where it came from — they say: \"I have sat through a lot of both.\"", back: "\"What was the job that taught you that?\"" },
          ]
        },
      ]
    },
  ],
  howtointerrupt: [
    {
      name: "The Polite Cut-In",
      guideFront: "Take the next step in getting in.",
      guideBack: "One line you could say here.",
      description: "The full version, for when the interruption matters and the room is formal enough that how you do it will be noticed. Steps: 1) Wait for a Natural Pause — go in at their break, 2) Signal the Interruption — give them a second to stop, 3) Acknowledge the Speaker First — show you were listening, 4) Say Why It Matters — then say why it could not wait.\n\nFour steps sounds like a lot for one interruption, but the first three are about six words in total. What they buy is an interruption nobody has to be gracious about.\n\nThe shape of the whole thing:\n1. (wait for the full stop)\n2. \"Sorry — can I come in there?\"\n3. \"Everything up to the timeline I'm with you on.\"\n4. \"It's just that the date moved, so that part won't hold.\"\n\nMindset: the three short steps before your point are what make the point land. Skip them and the same content arrives as an objection.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A colleague is presenting a plan built on a date that has since changed.",
          steps: [
            { front: "Step 1 · Wait for the break — they are mid-sentence, heading for a full stop", back: "(wait) \"…\"" },
            { front: "Step 2 · Signal it — they finish the sentence and pause", back: "\"Sorry — can I come in there?\"" },
            { front: "Step 3 · Acknowledge them — they stop and look over", back: "\"Everything up to the timeline I'm completely with you on.\"" },
            { front: "Step 4 · Say why — they wait for the point", back: "\"It's just that the date moved last week, so that part won't hold.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "In a class discussion someone is explaining a topic and has missed something important.",
          steps: [
            { front: "Step 1 · Wait for the break — they are building to the end of a point", back: "(wait) \"…\"" },
            { front: "Step 2 · Signal it — they reach the full stop", back: "\"Can I add something there?\"" },
            { front: "Step 3 · Acknowledge them — the room turns", back: "\"That's exactly the main reason, I think.\"" },
            { front: "Step 4 · Say why — you have the floor", back: "\"There's a second one though, and it's the one that usually gets missed.\"" },
          ]
        },
      ]
    },
    {
      name: "When There Is No Pause",
      guideFront: "Take the next step in getting in.",
      guideBack: "One line you could say here.",
      description: "The version for a monologue that is not going to stop on its own. Steps: 1) Signal the Interruption — make the break yourself, 2) Say Why It Matters — justify it immediately, 3) Acknowledge the Speaker First — and give them the floor back.\n\nThe order is deliberately different. When you have had to make your own gap, the justification cannot wait — it has to arrive in the same breath, or the interruption sits there unexplained.\n\nWhy the acknowledgement moves to the end:\n1. Signal — a warm cue is all you have time for.\n2. Reason — this is what converts the interruption from rude to necessary.\n3. Acknowledge — offering the floor back is what stops it becoming a takeover.\n\nMindset: the third step is the one that matters most here. An interruption you hand back is a contribution; one you keep is a takeover.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Someone has been talking for four minutes and the meeting is running out of time.",
          steps: [
            { front: "Step 1 · Make the gap — there has been no pause at all", back: "\"Sorry — can I jump in?\"" },
            { front: "Step 2 · Say why straight away — they stop, slightly surprised", back: "\"We've got about four minutes and this is the bit that decides it.\"" },
            { front: "Step 3 · Hand it back — you have said your piece", back: "\"That's all from me — you were partway through, sorry. Carry on.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A friend is deep in a long explanation and you have completely lost the thread.",
          steps: [
            { front: "Step 1 · Make the gap — there is no natural break coming", back: "\"Hang on, hang on.\"" },
            { front: "Step 2 · Say why straight away — they pause", back: "\"Sorry, who's Anna? I lost the thread about a minute ago.\"" },
            { front: "Step 3 · Hand it back — they explain", back: "\"Right, got it. Sorry — go on, you were mid-thing.\"" },
          ]
        },
      ]
    },
    {
      name: "The Light Way In",
      guideFront: "Take the next step in getting in.",
      guideBack: "One line you could say here.",
      description: "The warm version, for friends and relaxed rooms. Steps: 1) Use Humour — make the interruption itself the joke, 2) Acknowledge the Speaker First — then show you were actually listening, 3) Say Why It Matters — and land the point.\n\nThe joke does the work of the signal here. It tells the speaker something is coming and makes it impossible to take badly, which is why this is the cheapest version when the room allows it.\n\nWhat each step is doing:\n1. Humour — buys the floor without anyone having to be gracious.\n2. Acknowledgement — stops the joke being all there was.\n3. Reason — the point still has to be worth the interruption.\n\nMindset: the joke has to be at your own expense. Make it about how long they have been talking and you have criticised them, not lightened it.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend is telling a long story and you have something that fits perfectly.",
          steps: [
            { front: "Step 1 · Make it light — they are mid-flow", back: "\"I have to jump in before my brain explodes.\"" },
            { front: "Step 2 · Show you were listening — they laugh and stop", back: "\"The bit about the taxi is exactly it, though.\"" },
            { front: "Step 3 · Land the point — they wait", back: "\"The same thing happened to me, and I have never recovered.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A relaxed team meeting where you have been waiting to speak for a while.",
          steps: [
            { front: "Step 1 · Make it light — nobody has offered you the floor", back: "\"You can probably see me twitching over here.\"" },
            { front: "Step 2 · Show you were listening — the room turns", back: "\"The second option is the one I'd go for too.\"" },
            { front: "Step 3 · Land the point — you have it", back: "\"It just needs the deadline moving, or it won't work at all.\"" },
          ]
        },
      ]
    },
  ],
  handleinterruptions: [
    {
      name: "When They Keep Cutting In",
      guideFront: "React to the interruption, using this step's move.",
      guideBack: "One line you could say here.",
      description: "Handle an interruption that escalates: start gentle, firm up when it repeats, then hand over cleanly. Steps: 1) Acknowledge and Continue — note it and keep going, 2) Reinforce the Boundary — when they cut in again, 3) Invite Them In After — finish and give them the floor.\n\nThe shape of the whole thing:\n1. \"I see you want to add something — let me just finish this bit.\"\n2. \"That's twice now. Let me get to the end.\"\n3. \"Right, that's me. What were you going to say?\"\n\nWhy this order: firm on the first cut-in reads as touchy, and soft on the third reads as an invitation. The hand-over at the end is what keeps the whole thing friendly.\n\nMindset: escalate one notch at a time, and always finish by giving them the floor. That is what stops a boundary turning into a fight.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You're making a point in a team meeting and a colleague keeps jumping in.",
          steps: [
            { front: "Step 1 · Acknowledge and keep going — they cut in: \"Yeah but we tried that—\"", back: "\"Let me just finish this bit — then I want to hear it.\"" },
            { front: "Step 2 · Firm up the boundary — they cut in again before you're done: \"I really think—\"", back: "\"Hold on — I'd like to actually finish this one.\"" },
            { front: "Step 3 · Hand it over cleanly — you land your point and they're still keen", back: "\"Okay — that's me done. Now, what were you going to say?\"" },
          ]
        },
      ]
    },
    {
      name: "Let It Go, Then Reclaim",
      guideFront: "React to the interruption, using this step's move.",
      guideBack: "One line you could say here.",
      description: "When an interruption is urgent, give way and come back rather than fight it. Steps: 1) Let It Go — allow the urgent cut-in, 2) Reclaim — return to your thread once it settles, 3) Invite Them In After — finish and bring them back.\n\nThe shape of the whole thing:\n1. Say nothing, and let the urgent point land.\n2. \"Anyway, back to the timeline — I was at the second week.\"\n3. \"That's my bit. You had something earlier?\"\n\nWhy this order: some interruptions really are more urgent than your sentence. Giving way costs nothing as long as you come back, and coming back is the step people forget.\n\nMindset: letting it go is only half the move. Without the reclaim you have not chosen anything — you have simply lost the point.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You're mid-explanation when someone bursts in with an urgent side point.",
          steps: [
            { front: "Step 1 · Let it happen — they cut across: \"Sorry, but did everyone see the email?\"", back: "\"Go ahead — deal with that first.\"" },
            { front: "Step 2 · Reclaim your thread — the email chat winds down", back: "\"Right — coming back to what I was explaining earlier —\"" },
            { front: "Step 3 · Bring them back in — you finish and they'd wanted to add something", back: "\"…and that's the idea. You had a thought earlier?\"" },
          ]
        },
      ]
    },
    {
      name: "Rescue the Punchline",
      guideFront: "React to the interruption, using this step's move.",
      guideBack: "One line you could say here.",
      description: "Keep the floor for a story with humour, then land it. Steps: 1) Use Humour — deflect the cut-in playfully, 2) Acknowledge and Continue — note them and press on, 3) land it and share the floor.\n\nThe shape of the whole thing:\n1. \"Hold that thought, I'm just getting to the good part!\"\n2. \"I see you — two more lines, I promise.\"\n3. Land it, then: \"Right, go on — what were you saying?\"\n\nWhy this order: humour saves the first cut-in cheaply, but it wears out fast. A second one needs a straight acknowledgement, and handing the floor over afterwards is what keeps the room warm.\n\nMindset: a story that has to be fought for stops being funny. Keep it light, land it, then get out of the way.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You're telling a story and a friend keeps stepping on the build-up.",
          steps: [
            { front: "Step 1 · Deflect with humour — they jump in: \"Oh I know where this is going—\"", back: "\"Hey, no spoilers from the front row — let me get there!\"" },
            { front: "Step 2 · Acknowledge and continue — they grin but open their mouth again", back: "\"One sec — the good bit needs me to finish it.\"" },
            { front: "Step 3 · Land it and share the floor — you deliver the ending", back: "\"…and that's the twist. Okay — what were you going to guess?\"" },
          ]
        },
      ]
    },
  ],
  validation: [
    {
      name: "The Full Validation",
      guideFront: "Take the next step in validating this.",
      guideBack: "One line you could say here.",
      description: "All three moves in the order that builds. Steps: 1) Reflect the Feeling — name what they felt, 2) Normalise the Reaction — say it is ordinary, 3) Acknowledge the Perspective — and say their thinking held up.\n\nThe order matters because each step answers a different worry, and they surface in this sequence: what I feel, whether I should feel it, and whether I was stupid.\n\nThe shape of the whole thing:\n1. \"That sounds like it properly got to you.\"\n2. \"Anyone would have been annoyed by that, honestly.\"\n3. \"And you were right to raise it at the time, whatever came of it.\"\n\nMindset: three short sentences is a complete validation. It looks slight written down and it is one of the most useful things you can do for somebody.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend is telling you about being publicly corrected at work.",
          steps: [
            { front: "Step 1 · Name the feeling — they say: \"I felt completely stupid in front of everyone.\"", back: "\"That's a horrible feeling, and with an audience it's twice as bad.\"" },
            { front: "Step 2 · Say it is ordinary — they say: \"I'm probably making too much of it.\"", back: "\"You're not. Anyone would be smarting after that.\"" },
            { front: "Step 3 · Back their thinking — they say: \"I didn't say anything back, though.\"", back: "\"Not saying anything in the room was the sensible call. You'd have made it worse.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague is upset about a decision that was made without them.",
          steps: [
            { front: "Step 1 · Name the feeling — they say: \"I felt like nobody was on my side in there.\"", back: "\"Being the only one holding a position is genuinely lonely.\"" },
            { front: "Step 2 · Say it is ordinary — they say: \"Maybe I'm being precious about it.\"", back: "\"You're not. Most people would be annoyed at not being asked.\"" },
            { front: "Step 3 · Back their thinking — they say: \"I should probably have pushed harder.\"", back: "\"You were reading the room. That's not a bad instinct to follow.\"" },
          ]
        },
      ]
    },
    {
      name: "When You Disagree",
      guideFront: "Take the next step in validating this.",
      guideBack: "One line you could say here.",
      description: "The version for somebody whose conclusion you think is wrong. Steps: 1) Reflect the Feeling — the feeling is true regardless, 2) Acknowledge the Perspective — the route was reasonable even if the destination is not, 3) Normalise the Reaction — and plenty of people would have gone the same way.\n\nNone of these three steps requires you to agree with anything. That is the point of the pack, and this is the combination that proves it.\n\nWhere the honesty sits:\n1. Reflect — a feeling is a fact. Nothing to disagree with.\n2. Acknowledge — you are validating the reasoning, not the conclusion.\n3. Normalise — you are saying it is a common route, not a correct one.\n\nMindset: you can do all three and still say what you think afterwards. Validation first makes the disagreement land as a difference of view rather than as a dismissal.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend is defending a decision you think was a mistake.",
          steps: [
            { front: "Step 1 · Name the feeling — they say: \"Everyone's acting like I ruined everything.\"", back: "\"That sounds pretty relentless to be on the end of.\"" },
            { front: "Step 2 · Back the reasoning — they say: \"I did what seemed right at the time.\"", back: "\"I can see how you got there. With what you knew, it follows.\"" },
            { front: "Step 3 · Say it is a common route — they say: \"You'd have done it differently.\"", back: "\"Maybe. But plenty of people would have made that call.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague holds a view about the team that you do not share.",
          steps: [
            { front: "Step 1 · Name the feeling — they say: \"Honestly, I've stopped trusting any of them.\"", back: "\"That's a bleak place to be working from. I can hear how tired you are of it.\"" },
            { front: "Step 2 · Back the reasoning — they say: \"After the last three months, what else am I meant to think?\"", back: "\"Given that run, I can see exactly how you got to it.\"" },
            { front: "Step 3 · Say it is a common route — they say: \"You clearly don't agree.\"", back: "\"I see it a bit differently. But most people would land where you have after that.\"" },
          ]
        },
      ]
    },
    {
      name: "When They Are Defensive",
      guideFront: "Take the next step in validating this.",
      guideBack: "One line you could say here.",
      description: "The version for somebody braced for criticism, where the order is reversed. Steps: 1) Normalise the Reaction — lower the guard first, 2) Reflect the Feeling — now the feeling can be named, 3) Acknowledge the Perspective — and their thinking can be credited.\n\nSomebody expecting a telling-off will not hear a reflected feeling; they are too busy preparing a defence. Normalising first removes the thing they are defending against, and then the other two can land.\n\nWhy the order flips:\n1. Normalise — \"anyone would have\" tells them no attack is coming.\n2. Reflect — with the guard down, naming the feeling is a relief rather than an exposure.\n3. Acknowledge — and now their reasoning can be credited without it sounding like consolation.\n\nMindset: reduce defensiveness first. The most accurate reflection in the world bounces off somebody who is braced for a fight.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Someone is describing a mistake and clearly expects to be criticised.",
          steps: [
            { front: "Step 1 · Take the fight out of it — they say: \"I know, I know, I should have checked.\"", back: "\"Honestly, most people wouldn't have checked that either.\"" },
            { front: "Step 2 · Name the feeling — they say: \"It's been eating at me all week.\"", back: "\"That sounds like a horrible week to have had in your own head.\"" },
            { front: "Step 3 · Credit the thinking — they say: \"I was trying to get it done fast.\"", back: "\"You were prioritising the deadline. That was the brief, to be fair.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A family member is defending how they handled a difficult conversation.",
          steps: [
            { front: "Step 1 · Take the fight out of it — they say: \"Everyone thinks I handled it badly.\"", back: "\"It's a conversation almost nobody handles well. I certainly wouldn't have.\"" },
            { front: "Step 2 · Name the feeling — they say: \"I've felt sick about it since.\"", back: "\"That's a lot to be carrying around for a week.\"" },
            { front: "Step 3 · Credit the thinking — they say: \"I just didn't want it to turn into a row.\"", back: "\"That's a completely fair thing to have been aiming for.\"" },
          ]
        },
      ]
    },
  ],
  supportingconversations: [
    {
      name: "Reading It Right",
      guideFront: "What they said, and the response to try next.",
      guideBack: "One way it could sound.",
      description: "A supportive conversation is a series of small readings. They say something, you choose a response, and what they do next tells you whether you read it correctly.\n\nThis combo drills that loop. Each step front carries what they said and names the move to use; watch how the need changes as the conversation goes on — usually from wanting to be heard, towards wanting to think about what to do.\n\nMindset: their reaction to your last response is the information you need for the next one.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend has come round and started telling you about a meeting where they were criticised in front of the team.",
          steps: [
            { front: "Step 1 · Just Listen — they are mid-flow.", back: "\"Mm. And what did he say then?\"", guideFront: "They have not stopped. Do not interrupt with a solution." },
            { front: "Step 2 · Respond With Validation — they finish and say, \"Anyway. That was my Tuesday.\"", back: "\"That's a horrible thing to have happen with everyone sitting there.\"" },
            { front: "Step 3 · Respond With Encouragement — they say, \"I just sat there. I should have said something.\"", back: "\"You stayed civil while being talked over. That's harder than answering back.\"" },
            { front: "Step 4 · Respond With a Suggestion — they say, \"I've got to work with him tomorrow. What do I even do?\"", back: "\"Would it help to say something to him privately first, before you're both in a room?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A classmate mentions they are dreading presenting tomorrow. They have done it before and it went reasonably.",
          steps: [
            { front: "Step 1 · Work Out What They Need — you cannot tell if they want help or reassurance.", back: "\"Are you after tips, or is it more the nerves?\"", guideFront: "Asking is faster and more accurate than guessing." },
            { front: "Step 2 · Respond With Validation — they say, \"The nerves, mostly. I hate the standing up bit.\"", back: "\"That's the worst part of it, and everyone I know feels the same.\"" },
            { front: "Step 3 · Respond With Encouragement — they say, \"I always think I'll freeze.\"", back: "\"You did the one in October. You didn't freeze then, and this room's smaller.\"" },
            { front: "Step 4 · Respond With a Suggestion — they say, \"I suppose that's true.\"", back: "\"Could you get your first sentence completely fixed? Once that's out the rest tends to follow.\"" },
          ]
        },
      ]
    },
    {
      name: "When You Get It Wrong",
      guideFront: "What they said, and the response to try next.",
      guideBack: "One way it could sound.",
      description: "You offer a suggestion and they go flat. You reassure and they get more frustrated. Misreading is normal and completely recoverable — what makes it worse is carrying on regardless.\n\nThe recovery is short: notice, name it lightly, and switch. Naming it is what turns a misstep into something that actually builds trust, because it shows you were watching them rather than delivering a routine.\n\nMindset: the correction is the skill, not getting it right first time.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend has been describing a difficult situation with their family and you have offered two suggestions.",
          steps: [
            { front: "Step 1 · Respond With a Suggestion — they have described the problem.", back: "\"Have you thought about talking to her when your brother isn't there?\"", guideFront: "A reasonable suggestion, offered a bit early." },
            { front: "Step 2 · Work Out What They Need — they say, \"Yeah. Maybe,\" and go quiet.", back: "\"I've jumped straight to fixing it, haven't I. Do you actually want ideas?\"" },
            { front: "Step 3 · Respond With Validation — they say, \"Not really. I just wanted to say it to someone.\"", back: "\"Fair enough. It sounds exhausting, honestly.\"" },
            { front: "Step 4 · Just Listen — they say, \"It is. It's been like this for months.\"", back: "\"Go on.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague is worried about a decision and you have told them it will be fine.",
          steps: [
            { front: "Step 1 · Respond With Encouragement — they have described the worry.", back: "\"You'll be fine. You always are with this stuff.\"", guideFront: "A reflex reassurance. Watch what it does." },
            { front: "Step 2 · Work Out What They Need — they say, \"You keep saying that,\" slightly sharply.", back: "\"You're right, that was a bit automatic. What's actually worrying you?\"" },
            { front: "Step 3 · Respond With Validation — they say, \"That I'll get it wrong and it'll be on me.\"", back: "\"That's a real thing to be carrying. It would be on you, wouldn't it.\"" },
            { front: "Step 4 · Respond With a Suggestion — they say, \"Exactly. That's the bit.\"", back: "\"Would it help to put the reasoning in writing? Then the decision isn't just yours in a corridor.\"" },
          ]
        },
      ]
    },
    {
      name: "When They Want Your Honest View",
      guideFront: "What they said, and the response to try next.",
      guideBack: "One way it could sound.",
      description: "Occasionally someone shares something and what they actually want is the truth — including the part where you think they got it wrong.\n\nThe rule is that this needs an invitation. Unasked-for criticism in a supportive conversation is a betrayal of what the conversation was for. Asked-for criticism, given kindly and after acknowledgement, is one of the more valuable things a friend can do.\n\nEven then, keep it small: one thing, said once, and then back to support.\n\nMindset: only if they ask, only after they feel heard, and only one thing.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend has described an argument with a colleague, and you think they handled part of it badly.",
          steps: [
            { front: "Step 1 · Respond With Validation — they have finished the account.", back: "\"That sounds like a horrible position to be put in.\"" },
            { front: "Step 2 · Work Out What They Need — they say, \"Was I out of order, though? Be honest.\"", back: "\"Do you want honest, or do you want me on your side? Both are available.\"" },
            { front: "Step 3 · Give one honest thing — they say, \"No, honestly. Tell me.\"", back: "\"The situation, no. Sending it at eleven at night, maybe — it'd read as angrier than you meant.\"", guideFront: "One thing, said once. Then stop." },
            { front: "Step 4 · Respond With Encouragement — they say, \"Yeah. I did think that afterwards.\"", back: "\"You've spotted it yourself, which is most of it. The rest of what you did was fine.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A classmate shows you something they have made and asks what you think. They are clearly hoping it is good.",
          steps: [
            { front: "Step 1 · Respond With Validation — they hand it over nervously.", back: "\"You've obviously put a lot into this.\"" },
            { front: "Step 2 · Work Out What They Need — they say, \"Is it any good? Properly.\"", back: "\"Do you want notes, or do you want to know if it works? They're different answers.\"" },
            { front: "Step 3 · Give one honest thing — they say, \"Notes. I'd rather know now.\"", back: "\"The middle section lost me. Everything either side of it is strong.\"", guideFront: "One thing, specific, and no list." },
            { front: "Step 4 · Respond With Encouragement — they say, \"I wondered about that bit.\"", back: "\"You were right to wonder. The opening is genuinely good, and that's the hard part.\"" },
          ]
        },
      ]
    },
  ],
  describethings: [
    {
      name: "Building It Up",
      guideFront: "They have said something. Add the detail they still need.",
      guideBack: "A line you could say at this step.",
      description: "Name first, then narrow with the details that matter most for this listener. Each answer should remove possibilities rather than simply add words.\n\nWatch what the listener does with each detail. If they ask a follow-up, that tells you exactly which category to reach for next.\n\nMindset: let their questions choose your order.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You have left a bag on a train. The person behind the desk asks you to describe it.",
          steps: [
            { front: "They ask what you have lost.", back: "A rucksack — dark green canvas, with a yellow patch on the front pocket." },
            { front: "They say, \"We have a few green ones. How big?\"", back: "About the size of a cabin case, but soft. It slumps when it's empty." },
            { front: "They say, \"Anything unusual about it?\"", back: "One strap has been repaired with black thread. It's fairly obvious up close." },
            { front: "They say, \"And what was in it?\"", back: "A laptop in a grey sleeve, a blue notebook, and a phone charger." },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are in a garden centre and the plant you want has no label. You describe it to an assistant.",
          steps: [
            { front: "They ask what you are after.", back: "Something for a windowsill that gets almost no direct sun." },
            { front: "They say, \"Do you know what you had before?\"", back: "I don't know the name. Big waxy leaves, dark green, almost like plastic to touch." },
            { front: "They say, \"How tall did it get?\"", back: "About knee height, and wide rather than tall. It spread sideways." },
            { front: "They say, \"Sounds like a cast iron plant. Come and look.\"", back: "That's the one. That's exactly the leaf shape." },
          ]
        },
      ]
    },
    {
      name: "When You Do Not Know the Word",
      guideFront: "They have said something. Add the detail they still need.",
      guideBack: "A line you could say at this step.",
      description: "Describing your way around a missing word is a real conversational skill and not a failure. Purpose usually gets you there fastest, then shape, then the nearest familiar object.\n\nThe move to avoid is stopping. A slightly clumsy description that lands is better than a pause waiting for a word that is not coming.\n\nMindset: talk around it. The word is not the point; being understood is.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You need a specific tool and have no idea what it is called in this language.",
          steps: [
            { front: "The assistant asks what you are looking for.", back: "I don't know the word. It's for getting a nail back out of wood." },
            { front: "They say, \"A hammer?\"", back: "Almost — but the other end. The split end, the bit you pull with." },
            { front: "They say, \"Ah, claw hammer. What size?\"", back: "Something one hand can use. About as long as my forearm." },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are ordering and cannot remember what the dish is called.",
          steps: [
            { front: "The waiter asks what you would like.", back: "Sorry — I don't know the name. It's the thing with rice wrapped in a vine leaf." },
            { front: "They say, \"Hot or cold?\"", back: "Cold. They come in little rolls, about the size of my thumb." },
            { front: "They say, \"With lemon?\"", back: "Yes, that's it. Six of those, please." },
          ]
        },
      ]
    },
    {
      name: "They Cannot Find It",
      guideFront: "They have said something. Add the detail they still need.",
      guideBack: "A line you could say at this step.",
      description: "When someone is actively searching, appearance matters less than position. Surroundings, height and neighbours do the work.\n\nEach step should move them physically. If your last sentence did not change where they are standing or looking, it was decoration.\n\nMindset: describe the route, not the object.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend is at your flat feeding the cat and cannot find the food.",
          steps: [
            { front: "They say they cannot find the cat food.", back: "Tall cupboard to the left of the fridge, second shelf up." },
            { front: "They say, \"There's nothing that looks like cat food.\"", back: "It's not in a bag — it's in a big glass jar with a metal clip lid." },
            { front: "They say, \"Found a jar. It's got dry brown stuff in it.\"", back: "That's it. Scoop's inside, one scoop is enough." },
          ]
        },
        {
          bundle: 'pro',
          situation: "A plumber on the phone needs to know where your water shut-off is.",
          steps: [
            { front: "They ask where the stopcock is.", back: "Under the kitchen sink, right at the back." },
            { front: "They say, \"I'm looking under there and I can't see it.\"", back: "It's behind the bin — you have to pull that out first. It's low, near the floor." },
            { front: "They say, \"Got something brass down here.\"", back: "That's it. Small brass tap, turns clockwise to shut." },
          ]
        },
      ]
    },
  ],
  explainthings: [
    {
      name: "The Full Explanation",
      guideFront: "They have said something. Take the explanation one step further.",
      guideBack: "A line you could say at this step.",
      description: "What It Is, then How It Works, then Why It Matters, in that order. It is the order that works when someone starts from nothing, because each step gives them what they need to follow the next one.\n\nThe temptation is to open with Why, because that is the part you find interesting. Resist it — Why lands on nothing when the listener still cannot picture the object.\n\nMindset: pause after each step. If they nod, go on. If they frown, stay where you are.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A colleague leans over and says, \"Everyone keeps talking about this tracking thing. What even is it?\"",
          steps: [
            { front: "They ask what it is.", back: "It's a timer, basically. You start it when you begin a job and stop it when you're done." },
            { front: "They say, \"Right — so I just leave it running all day?\"", back: "No, one job at a time. Start it, do the thing, stop it, pick the next one." },
            { front: "They say, \"Sounds like extra admin, honestly.\"", back: "It saves the Friday hour, though. Nobody has to reconstruct the week from memory any more." },
            { front: "They say, \"Fair. And if I forget to start it?\"", back: "You can add it afterwards. It's not policing anything — it's just so the week is written down somewhere." },
          ]
        },
        {
          bundle: 'pro',
          situation: "Your parent has been told to \"put the photos in the cloud\" and has no idea what that means.",
          steps: [
            { front: "They ask what the cloud actually is.", back: "It's just someone else's computer, kept somewhere safe. Your photos get a copy on it." },
            { front: "They say, \"So they're not on my phone any more?\"", back: "They still are. It's a copy, not a move — the phone keeps its own." },
            { front: "They say, \"And how would I put them there?\"", back: "It's already doing it when you're on wifi. There's nothing to press." },
            { front: "They say, \"Then why do I need it at all?\"", back: "So if the phone breaks or goes missing, the photos don't go with it. That's really the whole point." },
          ]
        },
      ]
    },
    {
      name: "When They Only Need One Piece",
      guideFront: "They have said something. Take the explanation one step further.",
      guideBack: "A line you could say at this step.",
      description: "Not every explanation needs all three moves. Someone often already has two of them and is missing exactly one. Giving them the full tour is a way of not listening.\n\nThe skill here is hearing which piece is missing and answering only that — then stopping, and letting them ask for more if they want it.\n\nMindset: the shortest correct answer is a kindness. You can always add.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend says, \"I know what a slow cooker is and I know why people like them. I just don't know what to actually do with it.\"",
          steps: [
            { front: "They ask what to do with it.", back: "Everything goes in cold, in the morning, and you don't touch it again." },
            { front: "They say, \"Don't I need to brown the meat first?\"", back: "You can, and it tastes better. But it works fine if you don't." },
            { front: "They say, \"How long, though?\"", back: "Eight hours on low is the safe answer for almost anything." },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague says, \"I've been filling in the handover form every Friday. I don't actually know why we do it.\"",
          steps: [
            { front: "They ask what the point is.", back: "It's for whoever picks up your work when you're off. It's the only thing they'd have." },
            { front: "They say, \"But people barely read them.\"", back: "They read them the week someone's ill. That's the week it matters." },
            { front: "They say, \"So how much detail does it need?\"", back: "Enough that a stranger could carry on. Usually four or five lines." },
          ]
        },
      ]
    },
    {
      name: "Explaining Something You Half Understand",
      guideFront: "They have said something. Take the explanation one step further.",
      guideBack: "A line you could say at this step.",
      description: "You will be asked to explain things you only partly know. The move is to give the part you are sure about, mark clearly where your knowledge stops, and not fill the gap with something that sounds right.\n\nSaying \"I don't know that bit\" costs you almost nothing and protects the listener from carrying away a confident mistake.\n\nMindset: being trusted is worth more than sounding complete.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend asks you to explain how the heat pump you had installed actually works. You know roughly, not exactly.",
          steps: [
            { front: "They ask how it works.", back: "It pulls warmth out of the outside air and moves it inside. There's a gas in it that does the moving." },
            { front: "They say, \"How can there be warmth outside when it's freezing?\"", back: "There still is, apparently, even below zero. I couldn't tell you the physics of it properly." },
            { front: "They say, \"So does it use much electricity?\"", back: "Less than the old boiler used gas, on our bills. That much I've actually seen." },
            { front: "They say, \"Would you recommend it?\"", back: "For our house, yes. I'd want to know your insulation first, and that I genuinely don't know about." },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague asks how the invoicing system works. You use one screen of it and nothing else.",
          steps: [
            { front: "They ask how invoicing works.", back: "I can tell you the bit I do — I raise the invoice and send it. Everything after that is finance." },
            { front: "They say, \"And how do you raise one?\"", back: "New invoice, pick the client, add the lines, save. It goes into a queue from there." },
            { front: "They say, \"How long until it's actually paid?\"", back: "No idea, honestly. Ask Priya — she's the one who'd know." },
          ]
        },
      ]
    },
  ],
  givingexamples: [
    {
      name: "One Point, Several Angles",
      guideFront: "They have responded. Give the example that answers what they just said.",
      guideBack: "A line you could say at this step.",
      description: "A single claim, supported by different example types as the listener pushes on different parts of it. Each example should answer the specific doubt just raised, not repeat the original point louder.\n\nThe most common failure is giving three examples of the same type. If your own experience did not convince them, another story from your life will not either.\n\nMindset: change the type of example, not the volume.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A colleague thinks the Friday handover note is bureaucracy and wants it dropped.",
          steps: [
            { front: "They say the handover note is pointless.", back: "It's the week someone's off sick that it isn't. That's happened to me twice." },
            { front: "They say, \"That's rare enough to risk it.\"", back: "Say two people are out in the same week in December. Who picks it up, and from what?" },
            { front: "They say, \"We'd manage. We always do.\"", back: "We managed in March by losing a day and a half. I know because I lost it." },
            { front: "They say, \"Is it really that often?\"", back: "Twice last year. Both times in a week nobody had planned for." },
          ]
        },
        {
          bundle: 'pro',
          situation: "You think the form is too long and a colleague thinks people will fill it in anyway.",
          steps: [
            { front: "They say people will fill it in if they want the thing.", back: "Think how many online baskets get abandoned at a slow checkout. Same instinct." },
            { front: "They say, \"That's shopping. This is different.\"", back: "Imagine you're on a phone, on a bus, and it asks for your employer. Do you finish it?" },
            { front: "They say, \"Some people would.\"", back: "Some. We had forty starts and eleven finishes last month — that's the number I'd look at." },
            { front: "They say, \"Where's that from?\"", back: "The form log. It's raw and I haven't cleaned it, but the gap is real." },
          ]
        },
      ]
    },
    {
      name: "When the Example Is Challenged",
      guideFront: "They have responded. Give the example that answers what they just said.",
      guideBack: "A line you could say at this step.",
      description: "Examples get pushed back on — \"that's not typical\", \"that was different\", \"that's just you\". A challenged example is not a failed one; it usually means the listener is engaging.\n\nThe move is to concede what is fair about the challenge and either narrow your claim or bring a different type. Defending a shaky example harder makes the whole argument look shaky.\n\nMindset: give ground on the example, keep the point.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You have given a personal example and your colleague says it is a one-off.",
          steps: [
            { front: "They say, \"That was just bad luck, though.\"", back: "Partly, yes. It's also the second time in a year, which is what worries me." },
            { front: "They say, \"Two isn't a pattern.\"", back: "Fair. Then take it as a warning rather than proof — what would we do if it happened in December?" },
            { front: "They say, \"We'd deal with it.\"", back: "Probably. I'd rather know how, before rather than during." },
          ]
        },
        {
          bundle: 'pro',
          situation: "You have cited a figure and they ask where it came from.",
          steps: [
            { front: "They say, \"Where's that number from?\"", back: "Last year's summary. I haven't checked it against this year, so treat it as rough." },
            { front: "They say, \"So it might be wrong.\"", back: "It might be out of date. I'd not build anything on it without checking." },
            { front: "They say, \"Then what are you actually claiming?\"", back: "Only that the direction is real. The size of it I'd want to confirm." },
          ]
        },
      ]
    },
    {
      name: "When You Have No Example",
      guideFront: "They have responded. Give the example that answers what they just said.",
      guideBack: "A line you could say at this step.",
      description: "Sometimes you believe something and cannot support it. The honest sequence is to say so, offer the imagined case instead, and be clear that it is a way of testing the idea rather than evidence for it.\n\nThis is the sequence that protects everything else you say. A person who says \"I have nothing here\" when they have nothing is believed when they say they have something.\n\nMindset: no example is a fine answer. An invented one is not.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You have argued for a change and someone asks what it is based on.",
          steps: [
            { front: "They ask what evidence you have.", back: "Honestly, none yet. It's a hunch from watching people use it." },
            { front: "They say, \"So why should we act on it?\"", back: "Maybe we shouldn't yet. But imagine someone new opening that screen — what do they click?" },
            { front: "They say, \"That's not evidence.\"", back: "It isn't. I'd say it's worth twenty minutes of watching someone try it." },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are mid-argument and a convincing-sounding number is on the tip of your tongue.",
          steps: [
            { front: "They ask how common the problem is.", back: "I don't have a figure and I'm not going to guess at one." },
            { front: "They say, \"Roughly?\"", back: "Enough that I've seen it twice myself. That's all I can actually stand behind." },
            { front: "They say, \"Could you find out?\"", back: "Yes — give me until Thursday and I'll bring a real number." },
          ]
        },
      ]
    },
  ],
  storytellingwiththesixws: [
    {
      name: "The Full Six",
      guideFront: "Keep building the story — this part next.",
      guideBack: "One way this part could sound.",
      description: "All six W's in a natural telling order. Steps: 1) When — place it in time, 2) Where — set the scene, 3) Who — bring the people in, 4) What — the event, 5) How — the process, 6) Why — the reason underneath.\n\nThe six W's have no fixed order. This one works because the scene arrives before the event, so the listener has somewhere to put it when it lands.\n\nThe shape of the whole thing:\n1. \"This was yesterday, about ten minutes before the lesson.\"\n2. \"In the hallway outside the science block.\"\n3. \"My teacher was standing there waiting.\"\n4. \"And I had lost my homework.\"\n5. \"I checked my bag, my locker, the whole hallway.\"\n6. \"I had been in a rush that morning and had not checked properly.\"\n\nMindset: six sentences is a complete story. Most people either use two of them or forty, and the six-sentence version beats both.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are telling a friend about the day you lost your homework.",
          steps: [
            { front: "Step 1 · When — they ask what happened at school", back: "\"This was yesterday, about ten minutes before the lesson.\"" },
            { front: "Step 2 · Where — they are listening", back: "\"I was in the hallway outside the science block, everyone pushing past.\"" },
            { front: "Step 3 · Who — set the people up", back: "\"My teacher was already standing there waiting for it.\"" },
            { front: "Step 4 · What — land the event", back: "\"And I had lost my homework. Not forgotten it. Lost it.\"" },
            { front: "Step 5 · How — the search", back: "\"I went through my bag, then my locker, then basically the whole corridor.\"" },
            { front: "Step 6 · Why — the reason", back: "\"I had been in a rush that morning and just never checked.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are telling someone about the holiday where the hotel did not exist.",
          steps: [
            { front: "Step 1 · When — they ask how the trip was", back: "\"We landed at about eleven at night, which did not help.\"" },
            { front: "Step 2 · Where — set the scene", back: "\"The taxi dropped us at an empty gravel lot on the edge of town.\"" },
            { front: "Step 3 · Who — bring the people in", back: "\"Just us, and a driver who clearly wanted to be somewhere else.\"" },
            { front: "Step 4 · What — land the event", back: "\"The hotel we had booked did not exist.\"" },
            { front: "Step 5 · How — the process", back: "\"He pointed at the lot, said the name, shrugged, and drove off.\"" },
            { front: "Step 6 · Why — the reason", back: "\"Turned out the booking had never actually gone through.\"" },
          ]
        },
      ]
    },
    {
      name: "The Short Version",
      guideFront: "Keep building the story — this part next.",
      guideBack: "One way this part could sound.",
      description: "Three or four W's are often enough. Steps: 1) What — lead with the event, 2) How — two beats of process, 3) Why — the reason underneath.\n\nThis is the version for a conversation rather than a floor. When you have thirty seconds, or when the story is a contribution to someone else's topic rather than the main event, the spine on its own does the job.\n\nWhy these three:\n1. What — without it there is no story, only atmosphere.\n2. How — without it the story is an announcement.\n3. Why — without it the listener says \"and?\"\n\nMindset: knowing what to leave out is the skill. Dropping When, Where and Who is a decision, not a failure.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Someone mentions bad first days at work and you have a story that fits.",
          steps: [
            { front: "Step 1 · What — lead with it", back: "\"On my first day I sat in the wrong meeting for forty minutes.\"" },
            { front: "Step 2 · How — two beats", back: "\"I nodded along the whole time, until someone finally asked who I was.\"" },
            { front: "Step 3 · Why — the reason", back: "\"Nobody had told me where to go and I was too embarrassed to ask.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "The conversation turns to embarrassing moments and you have one.",
          steps: [
            { front: "Step 1 · What — lead with it", back: "\"I once called my teacher mum. Out loud.\"" },
            { front: "Step 2 · How — two beats", back: "\"It was out before I could stop it, and then I heard myself say it.\"" },
            { front: "Step 3 · Why — the reason", back: "\"I was exhausted, and she had been talking to me exactly like my mum does.\"" },
          ]
        },
      ]
    },
    {
      name: "Hook First",
      guideFront: "Keep building the story — this part next.",
      guideBack: "One way this part could sound.",
      description: "The version that leads with the event instead of building up to it. Steps: 1) What — open on the event, 2) Where and When — fill the scene in behind it, 3) Who — bring the people in, 4) How — then tell it properly.\n\nUse this when the event is strong enough to carry the opening, or when you are not certain you have the room's attention yet. Starting with the event buys you the time to set the scene afterwards.\n\nWhy the order is reversed:\n1. What first — a strong event earns you thirty seconds of patience.\n2. Scene second — now they have a reason to care where it happened.\n3. Who and How — the story proper, told to people who are already in.\n\nMindset: setup only holds attention you already have. If you are not sure you have it, lead with the event and backfill.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You want to tell a story to a group that is half distracted.",
          steps: [
            { front: "Step 1 · What — open on it", back: "\"I locked myself out of my own flat for six hours.\"" },
            { front: "Step 2 · Scene — fill it in", back: "\"February, going dark, sitting on the front step with a bag of shopping.\"" },
            { front: "Step 3 · Who — bring them in", back: "\"A neighbour I had never once spoken to came out and made me tea.\"" },
            { front: "Step 4 · How — tell it properly", back: "\"I had tried the letting agent, the spare key, everything. Wrong jacket.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You want to tell the story of meeting your best friend.",
          steps: [
            { front: "Step 1 · What — open on it", back: "\"I met my best friend because we were both complaining about the same bus.\"" },
            { front: "Step 2 · Scene — fill it in", back: "\"First week of the course, at a bus stop with a broken timetable.\"" },
            { front: "Step 3 · Who — bring them in", back: "\"A complete stranger who is now the person I speak to most.\"" },
            { front: "Step 4 · How — tell it properly", back: "\"We said the exact same thing at the exact same time, and that was that.\"" },
          ]
        },
      ]
    },
  ],
  storiesinconversation: [
    {
      name: "A Story That Earns Its Place",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Read the Room First, then Ask for the Floor, then Finish on Purpose, then Give It Back. The whole social arc of telling one story well.\n\nNothing here is about the story itself. It is about checking that the moment wants one, borrowing the turn openly, ending deliberately, and handing it on — which between them are most of the difference between a good storyteller and a tiring one.\n\nMindset: whether, how big, how it ends, and who goes next. The story looks after itself.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Four of you are eating, the conversation is easy, and something someone said has reminded you of a good story.",
          steps: [
            { front: "Read the Room First — someone is finishing a point about their holiday.", back: "\"That reminds me of something — finish yours first, though.\"" },
            { front: "Ask for the Floor — they say, \"No, go on, I'd finished.\"", back: "\"Short one. Two minutes, and it's stupid rather than sad.\"" },
            { front: "Finish on Purpose — you reach the point of it.", back: "\"...and that's how I ended up carrying a door through town.\"" },
            { front: "Give It Back — they laugh.", back: "\"Anyway, that's mine. Has anyone else done something that idiotic?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are eating with someone from another team and the conversation has found a subject you both like.",
          steps: [
            { front: "Read the Room First — you have twenty minutes and they seem relaxed.", back: "\"Is there time for a short one about my old job?\"" },
            { front: "Ask for the Floor — they say, \"Please.\"", back: "\"It needs about a minute of setup. Bear with me.\"" },
            { front: "Finish on Purpose — you get to the end.", back: "\"He still says it wasn't his fault.\"" },
            { front: "Give It Back — they say, \"That's brilliant.\"", back: "\"Your turn. You must have worked somewhere strange.\"" },
          ]
        },
      ]
    },
    {
      name: "Following Someone Else's",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Answer Don't Outdo, then Ask for the Floor, then Watch Them While You Tell It, then Give It Back. What to do when someone has just told a story and you have one of your own.\n\nThe first step is the whole risk. The natural reply feels like it should be bigger, and a bigger one quietly shrinks theirs. Everything after that is ordinary care.\n\nMindset: put yours beside theirs, not on top of it.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend has just described a delayed flight and a night on an airport floor, and you have a worse travel story.",
          steps: [
            { front: "Answer, Don't Outdo — they finish.", back: "\"That's worse than mine, honestly. But you've reminded me of something.\"" },
            { front: "Ask for the Floor — they say, \"Go on then.\"", back: "\"Quick one. Nothing as bad as a night on the floor.\"" },
            { front: "Watch Them While You Tell It — they say \"right\" twice in a row.", back: "\"I'll skip the middle — the short version is we missed it by four minutes.\"" },
            { front: "Give It Back — they say, \"Four minutes is brutal.\"", back: "\"It was. What happened after they finally boarded you?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Three people have each told one, and the last was genuinely dramatic.",
          steps: [
            { front: "Answer, Don't Outdo — they finish the dramatic one.", back: "\"Mine's the same thing but much smaller.\"" },
            { front: "Ask for the Floor — someone says, \"Go on.\"", back: "\"Thirty seconds. It's about a fridge.\"" },
            { front: "Watch Them While You Tell It — someone starts a side conversation.", back: "\"I'll land it: he'd been storing his own furniture in my flat.\"" },
            { front: "Give It Back — they say, \"That's almost worse.\"", back: "\"It isn't, but thank you. Sara — you had one about a boiler?\"" },
          ]
        },
      ]
    },
    {
      name: "When It Is Not Landing",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Watch Them While You Tell It, then Cut It Loose, then Finish on Purpose, then Give It Back. The rescue.\n\nThis is the sequence nobody practises and everybody needs. The whole trick is that abandoning early costs almost nothing and finishing stubbornly costs a lot — and that saying so out loud, lightly, usually gets a better reaction than the story would have.\n\nMindset: nobody remembers a story that did not land. Everybody remembers four extra minutes of one.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are two sentences into an anecdote and can already tell it is not going to work.",
          steps: [
            { front: "Watch Them While You Tell It — nobody has reacted at all.", back: "\"You're being polite. Let me get to the point.\"" },
            { front: "Cut It Loose — the point does not help.", back: "\"This was much better before I said it out loud.\"" },
            { front: "Finish on Purpose — they wait to see if there is more.", back: "\"So we drove home. That's genuinely the whole thing.\"" },
            { front: "Give It Back — someone laughs at the anticlimax.", back: "\"Right — what were we actually talking about before I did that?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are telling something that was hilarious at the time and depends entirely on knowing the people involved.",
          steps: [
            { front: "Watch Them While You Tell It — they ask who two of the people are.", back: "\"You don't know either of them, which is the problem here.\"" },
            { front: "Cut It Loose — the explanation is longer than the story.", back: "\"You had to be there. You weren't. It was funnier then.\"" },
            { front: "Finish on Purpose — they say, \"No, go on.\"", back: "\"Honestly — he fell in the fountain. That's the ending.\"" },
            { front: "Give It Back — they laugh at the delivery.", back: "\"That's my contribution ruined. How was Denmark?\"" },
          ]
        },
      ]
    },
  ],
  praiseandencouragement: [
    {
      name: "The Full Five Steps",
      guideFront: "The step you are on — say it out loud.",
      guideBack: "One way it could sound.",
      description: "All five steps, run start to finish: behaviour, impact, appreciation, encouragement, support. Used whole it is what a really good piece of praise sounds like — specific, warm, and ending with something concrete rather than a slogan.\n\nThis one is a monologue. Nobody interrupts you; the whole thing is one continuous piece of speech, and each card is the next step of it. Read the step on the front, say your own version out loud, then turn the card to see one way it could have gone.\n\nMindset: each step earns the next. Do not jump to the cheerleading.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A classmate has just handed in a project they rewrote three times over three weeks. It turned out well. You are walking out of the room together.",
          steps: [
            { front: "Step 1 · Identify the behaviour — name the exact thing she did, not the result.", back: "You rewrote that middle section three times until it worked.", guideFront: "Name the action, not the person." },
            { front: "Step 2 · Highlight the impact — say what that changed about the project.", back: "It's the part that makes the whole thing make sense now.", guideFront: "What changed because of it?" },
            { front: "Step 3 · Express appreciation — thank her for the part that helped you.", back: "And thanks for talking me through it as well — that's how I got mine sorted.", guideFront: "Plain thanks, with the reason attached." },
            { front: "Step 4 · Encourage — point at the next thing she could take on.", back: "Take the harder option next term. You'd start it knowing what the middle feels like.", guideFront: "One next step, concrete." },
            { front: "Step 5 · Offer support — name one thing you will actually do.", back: "Send me the outline in October and I'll read it before you hand it in.", guideFront: "Small and certain beats large and vague." },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague has just put the phone down after twenty minutes with a shouting customer. She stayed calm the whole way through. It is the two of you in the office.",
          steps: [
            { front: "Step 1 · Identify the behaviour — name the specific thing she did on the call.", back: "You slowed right down when she started shouting.", guideFront: "Name the action, not the person." },
            { front: "Step 2 · Highlight the impact — say what that changed.", back: "That's the whole reason she's still a customer.", guideFront: "What changed because of it?" },
            { front: "Step 3 · Express appreciation — thank her for taking a call you would rather not have.", back: "Thank you for picking that one up. I'd have handled it worse.", guideFront: "Plain thanks, with the reason attached." },
            { front: "Step 4 · Encourage — tell her what to do with it next time.", back: "Take the next one too if it comes. You clearly know how.", guideFront: "One next step, concrete." },
            { front: "Step 5 · Offer support — name one thing you will actually do.", back: "And come and get me if one goes past ten minutes. I'll sit with you.", guideFront: "Small and certain beats large and vague." },
          ]
        },
      ]
    },
    {
      name: "Praise That Gets Deflected",
      guideFront: "What they just said, and the step to answer it with.",
      guideBack: "One way it could sound.",
      description: "Most people deflect. They minimise, they credit someone else, they change the subject. The instinct is to repeat the compliment more emphatically, which makes both of you uncomfortable.\n\nUnlike the five-step combo, this one is a real exchange — each front carries what they just said, and the step tells you which move answers it. The step numbers are the five from the guide, used out of order: pick the one that answers what they actually said. The move is to shift from verdict to fact. Impact and specific behaviour are much harder to wave away than a judgement, because there is nothing to be modest about.\n\nMindset: do not argue about whether they are good. Report what happened.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend did well at something and is putting it entirely down to luck.",
          steps: [
            { front: "Step 1 · Identify the behaviour — they say, \"I just got lucky with the questions.\"", back: "You'd prepared for four topics. That's not luck, that's coverage." },
            { front: "Step 2 · Highlight the impact — they say, \"Anyone would have done that.\"", back: "Most people prepare one. That's the difference between a pass and that mark." },
            { front: "Step 4 · Encourage — they say, \"Suppose so.\"", back: "Do the same before the next one. That's the thing worth repeating." },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague finished a hard piece of work and is playing it down.",
          steps: [
            { front: "Step 1 · Identify the behaviour — they say, \"It was fine, anyone could have done it.\"", back: "Nobody did, though, and you did it with the brief changing twice." },
            { front: "Step 2 · Highlight the impact — they say, \"It wasn't that hard really.\"", back: "We can start in January instead of March. That's what it did." },
            { front: "Step 5 · Offer support — they say, \"Alright, thank you.\"", back: "Do the next one the same way, and shout if you want a second pair of eyes." },
          ]
        },
      ]
    },
    {
      name: "Encouraging Someone Who Is Struggling",
      guideFront: "What they just said, and the step to answer it with.",
      guideBack: "One way it could sound.",
      description: "When someone is disheartened, praise can sound like you have not understood how bad it feels. The order matters: acknowledge the situation first, then be specific about what genuinely was good, and only then look forward and offer something.\n\nThis is an exchange too — they push back at each step, and what they say decides which move comes next. The step numbers are the five from the guide, and a real conversation rarely runs 1 to 5 in order: use the one the moment needs. Acknowledging how it feels is not one of the five — fold it into the first line rather than making it a move of its own.\n\nNothing here should be untrue. Praise that stretches is worse than silence, because it tells them your good opinion is not worth much.\n\nMindset: honest and small beats generous and vague.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend is two months into learning something and is ready to stop.",
          steps: [
            { front: "Step 1 · Identify the behaviour — they say, \"I'm just not getting anywhere.\"", back: "It's slow going, I know. And you've stopped counting the beats out loud — that was impossible in April.", guideFront: "Acknowledge it, then name the thing that HAS changed." },
            { front: "Step 2 · Highlight the impact — they say, \"That's a tiny thing.\"", back: "It's the thing everything after it depends on. That's what progress looks like from inside." },
            { front: "Step 4 · Encourage — they say, \"It doesn't feel like it.\"", back: "Go back to ten minutes a day rather than stopping altogether." },
            { front: "Step 5 · Offer support — they say, \"Maybe.\"", back: "Come to mine on Sunday. We'll do half an hour and it'll feel different." },
          ]
        },
        {
          bundle: 'pro',
          situation: "A classmate worked hard on something and got a disappointing mark.",
          steps: [
            { front: "Step 1 · Identify the behaviour — they say, \"All that for nothing.\"", back: "It's a rotten result, and I'm not going to pretend otherwise. You can explain that whole topic now.", guideFront: "Acknowledge it, then name what they can now do." },
            { front: "Step 2 · Highlight the impact — they say, \"That's not what I was working for.\"", back: "No. It's still yours, and it's the bit that carries into next term." },
            { front: "Step 5 · Offer support — they say, \"I don't want to look at it again.\"", back: "Not today. Ask me in a fortnight and we'll go through it together." },
          ]
        },
      ]
    },
  ],
  givingcriticism: [
    {
      name: "The Full Six Steps",
      guideFront: "The step you are on — say your version out loud.",
      guideBack: "One way it could sound.",
      description: "The whole process, start to finish: something real, the behaviour, the impact, the alternative, the upside, and support. This is what a serious piece of criticism sounds like when it is done properly, and it takes under a minute.\n\nThis one is a monologue. You are saying it as a continuous piece before they respond, and each card is the next step of it. Read the step, say your own version out loud, then turn the card.\n\nThe order is doing the work. The positive establishes you are not attacking, the behaviour gives them something concrete, the impact gives the reason, the alternative gives them somewhere to go, the upside makes it worth doing, and the support means they leave with something other than fault.\n\nMindset: each step earns the next. Skipping to the alternative before the impact is why criticism so often sounds like nagging.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A teammate has missed three of the last five internal deadlines. The work is good when it arrives. You have asked to sit down with them for ten minutes.",
          steps: [
            { front: "Step 1 · Start With Something Real — open with one true sentence.", back: "\"The work itself is good — the last piece was the strongest thing we sent out.\"", guideFront: "True and short. One sentence, or it becomes a sandwich." },
            { front: "Step 2 · Name the Behaviour — say what actually happened, no verdict.", back: "\"Three of the last five came in after the date, though.\"", guideFront: "Could a camera have recorded it?" },
            { front: "Step 3 · Explain the Impact — say what it causes.", back: "\"When it slips, everyone else's part sits waiting, and it all lands on the Friday.\"", guideFront: "Who is affected, and how?" },
            { front: "Step 4 · Suggest What to Do Instead — offer something concrete.", back: "\"What if we put a checkpoint halfway instead of one date at the end?\"", guideFront: "Small enough to try tomorrow." },
            { front: "Step 5 · Say What Improves If They Do — name the gain.", back: "\"Then we'd get the last few days to tidy it rather than panic.\"", guideFront: "Something they would actually want." },
            { front: "Step 6 · Encourage and Offer Support — close with confidence and an offer.", back: "\"I'm not worried about it. Send me where you're up to on Wednesday and I'll read it.\"", guideFront: "Mean the confidence. Keep the offer." },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague repeatedly answers questions that were put to someone else. They are not doing it unkindly and almost certainly have not noticed.",
          steps: [
            { front: "Step 1 · Start With Something Real — open with one true sentence.", back: "\"You're quick, and in most meetings that's exactly what we need.\"", guideFront: "True and short." },
            { front: "Step 2 · Name the Behaviour — one specific occasion, plainly.", back: "\"In yesterday's session you answered twice when the question had gone to Sara.\"", guideFront: "A moment, not a character trait." },
            { front: "Step 3 · Explain the Impact — say what it causes.", back: "\"She's stopped offering things. That's the bit that worries me.\"", guideFront: "Who is affected, and how?" },
            { front: "Step 4 · Suggest What to Do Instead — offer something concrete.", back: "\"Could you leave a beat after a question lands? She'll get there.\"", guideFront: "Small enough to try tomorrow." },
            { front: "Step 5 · Say What Improves If They Do — name the gain.", back: "\"We'd get her ideas, and some of them are better than ours.\"", guideFront: "Something they would actually want." },
            { front: "Step 6 · Encourage and Offer Support — close warmly.", back: "\"It's an easy fix and I'd not have mentioned it otherwise. Nudge me if I do it too.\"", guideFront: "Leave them with confidence, not fault." },
          ]
        },
      ]
    },
    {
      name: "When They Push Back",
      guideFront: "The step you are on — say your version out loud.",
      guideBack: "One way it could sound.",
      description: "Criticism rarely lands cleanly. People explain, disagree, apologise too much, or turn it into something about you.\n\nThis combo is an exchange rather than a monologue — each front carries what they said, and the step tells you which move answers it. The general shape: acknowledge what is fair in their answer, hold the specific fact, and get to the alternative rather than arguing about the past.\n\nMindset: do not defend the criticism. Return to the behaviour and move forward.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You have said three deadlines slipped, and the reply is a list of reasons.",
          steps: [
            { front: "Step 2 · Name the Behaviour — they say, \"Two of those were because of the client, not me.\"", back: "\"That's fair on those two. The third one wasn't, though.\"" },
            { front: "Step 3 · Explain the Impact — they say, \"It was one late thing, really.\"", back: "\"It's the waiting that costs us. Four people held their bit for a week.\"" },
            { front: "Step 4 · Suggest What to Do Instead — they say, \"So what do you want me to do?\"", back: "\"Tell me early when it's slipping. That's genuinely all I need.\"" },
            { front: "Step 6 · Encourage and Offer Support — they say, \"I can do that.\"", back: "\"Then we're fine. And come to me before it's a problem, not after.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You have raised something small and the other person has gone quiet and started apologising repeatedly.",
          steps: [
            { front: "Step 1 · Start With Something Real — they say, \"God, I'm so sorry, I'm useless at this.\"", back: "\"You're not useless at it — you've carried the whole reporting side since March.\"" },
            { front: "Step 3 · Explain the Impact — they say, \"I've made everything harder for everyone.\"", back: "\"It's one step in one process. Nobody's week has been ruined.\"" },
            { front: "Step 5 · Say What Improves If They Do — they say, \"I'll fix it, I promise.\"", back: "\"It's a five-second change and then it's done. That's the whole scale of it.\"" },
            { front: "Step 6 · Encourage and Offer Support — they say, \"Okay. Sorry again.\"", back: "\"No more sorries. It's said, it's small, and I'm not going to raise it again.\"" },
          ]
        },
      ]
    },
    {
      name: "The Light Version",
      guideFront: "The step you are on — say your version out loud.",
      guideBack: "One way it could sound.",
      description: "Most criticism is one sentence and a short exchange. This combo drills that — say it lightly, deal with whatever comes back, and get out without turning it into a conversation.\n\nThe discipline here is stopping. Once the light version has been said and received, adding the impact and the alternative turns a ten-second correction into a five-minute one, and the other person will remember it as much bigger than you meant.\n\nMindset: say it, let them answer, and close. Do not upgrade a small thing mid-sentence.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A colleague keeps sending files without the date in the name and you keep opening the wrong version.",
          steps: [
            { front: "Step 1 · Say It Lightly — one sentence, framed as a request.", back: "\"Could you put the date in the filename? I keep opening the old one.\"", guideFront: "The size of the problem. One sentence." },
            { front: "Step 2 · Explain the Impact — they say, \"Oh — does it matter?\"", back: "\"Only that I've twice worked off the wrong version.\"" },
            { front: "Step 3 · Encourage and Offer Support — they say, \"Right, sorry, will do.\"", back: "\"No drama. Cheers.\"", guideFront: "Close it. Do not add more." },
          ]
        },
        {
          bundle: 'pro',
          situation: "A friend has been about twenty minutes late the last three times you have met.",
          steps: [
            { front: "Step 1 · Say It Lightly — one sentence, framed as a preference.", back: "\"Could you aim for on time? I end up standing about.\"", guideFront: "One sentence. It is a small thing." },
            { front: "Step 3 · Explain the Impact — they say, \"Am I that bad?\"", back: "\"Twenty minutes, last three times. It's not a crisis, I'd just rather not wait outside.\"" },
            { front: "Step 4 · Suggest What to Do Instead — they say, \"Fair enough.\"", back: "\"Just text me when you leave and I'll time it better.\"" },
          ]
        },
      ]
    },
  ],
  receivingfeedbackandcriticism: [
    {
      name: "The Open Response",
      guideFront: "Take the next step in the response.",
      guideBack: "One line you could say here.",
      description: "The full four-step process, in order. Steps: 1) Acknowledge the Feedback — show you heard it, 2) Show You Understand Their View — say how it looked from their side, 3) Reflect Openly — say what you make of it, 4) Look Ahead — say what you will do.\n\nEach step does one job, and the order matters: people need to feel heard before they can hear what you plan to do about it.\n\nThe shape of the whole thing:\n1. \"Thanks for telling me.\"\n2. \"I can see how you'd feel that way.\"\n3. \"That gives me something to think about.\"\n4. \"Next time I'll try to...\"\n\nMindset: you are not on trial. Running the steps is not an admission — it is a calm way of handling a normal part of working and living with people.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Your manager tells you your part of yesterday's presentation ran badly over time.",
          steps: [
            { front: "Step 1 · Acknowledge — they say: \"Your section ran about ten minutes over.\"", back: "\"Thanks for telling me — I knew it felt long.\"" },
            { front: "Step 2 · Show you understand — they say: \"It meant we had to rush the questions.\"", back: "\"I can see how that landed. The part people came for got squeezed.\"" },
            { front: "Step 3 · Reflect openly — they say: \"I just want it tighter next time.\"", back: "\"That's fair. I think I tried to fit too much in.\"" },
            { front: "Step 4 · Look ahead — they wait to see what you will do", back: "\"I'll cut it to eight minutes and run it past you beforehand.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A friend tells you that you were on your phone most of the evening you spent together.",
          steps: [
            { front: "Step 1 · Acknowledge — they say: \"You were on your phone a lot last night.\"", back: "\"Fair enough. Thanks for saying it rather than stewing.\"" },
            { front: "Step 2 · Show you understand — they say: \"It felt like you'd rather be somewhere else.\"", back: "\"I get that. From where you were sitting it must have looked exactly like that.\"" },
            { front: "Step 3 · Reflect openly — they say: \"I know it's a small thing.\"", back: "\"It's not that small. Honestly, I hadn't noticed I was doing it.\"" },
            { front: "Step 4 · Look ahead — the air has cleared", back: "\"Next time it stays in my bag. And tell me if I slip.\"" },
          ]
        },
      ]
    },
    {
      name: "When You Do Not Agree",
      guideFront: "Take the next step in the response.",
      guideBack: "One line you could say here.",
      description: "The same four steps, used when you think the criticism is wrong. Steps: 1) Acknowledge the Feedback — thank them anyway, 2) Show You Understand Their View — say how it looked from their side, 3) Reflect Openly — say honestly that you see it differently, 4) Look Ahead — offer what you will do anyway.\n\nThe trick is that only step 3 changes. You can run the whole process honestly without ever pretending to agree.\n\nWhere the disagreement goes:\n1. Not in step 1 — thanking them costs you nothing.\n2. Not in step 2 — you are describing their view, not endorsing it.\n3. Here, in step 3 — \"I see it differently, and here is how.\"\n4. Then step 4 — something small you will still do, so it does not end in a standoff.\n\nMindset: disagreeing calmly at step 3 is far stronger than defending at step 1. The steps before it are what make you sound reasonable rather than dismissive.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A teammate says you ignored their ideas during group work, and you do not think you did.",
          steps: [
            { front: "Step 1 · Acknowledge — they say: \"You didn't listen to any of my ideas in there.\"", back: "\"Okay. I appreciate you telling me instead of letting it sit.\"" },
            { front: "Step 2 · Show you understand — they say: \"I brought up the timeline twice.\"", back: "\"You did. And I moved past it both times, so I see how that looked.\"" },
            { front: "Step 3 · Say it honestly — they wait for your answer", back: "\"I did hear it — I thought we'd settled it earlier. But clearly you didn't feel heard.\"" },
            { front: "Step 4 · Look ahead — the disagreement is on the table calmly", back: "\"Next time I'll say out loud why I'm parking something, instead of just moving on.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague says you changed the plan without telling anyone, and you think you did tell them.",
          steps: [
            { front: "Step 1 · Acknowledge — they say: \"You changed the plan and nobody knew.\"", back: "\"Thanks for raising it rather than grumbling about it.\"" },
            { front: "Step 2 · Show you understand — they say: \"I found out from the client.\"", back: "\"That's a horrible way to find out. I'd be annoyed too.\"" },
            { front: "Step 3 · Say it honestly — they wait", back: "\"I did put it in Thursday's thread, so I saw it as covered. But clearly it didn't reach you.\"" },
            { front: "Step 4 · Look ahead — you are both calmer", back: "\"I'll message you directly on anything client-facing, not just the thread.\"" },
          ]
        },
      ]
    },
    {
      name: "When It Lands Hard",
      guideFront: "Take the next step in the response.",
      guideBack: "One line you could say here.",
      description: "A short version for criticism that hits you emotionally, where finishing the whole process on the spot would mean saying something you regret. Steps: 1) Acknowledge the Feedback — a single line, nothing more, 2) Reflect Openly — say honestly that you need time, 3) Look Ahead — name when you will come back to it.\n\nIt is a legitimate route, not an escape. You are pausing the conversation, not ducking it.\n\nWhat each step is doing here:\n1. Acknowledge — buys the two seconds you need in order not to react.\n2. Reflect Openly — \"I need to think about this\" is an answer, not an avoidance.\n3. Look Ahead — naming when you will come back is what makes the pause honest.\n\nMindset: the goal in this moment is not to respond well. It is to not respond badly, and to keep the door open.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend tells you something true about yourself that you did not want to hear.",
          steps: [
            { front: "Step 1 · Acknowledge, briefly — they say: \"You get defensive every time anyone gives you feedback.\"", back: "\"Okay. Thank you for saying it.\"" },
            { front: "Step 2 · Say you need time — you can feel yourself wanting to argue", back: "\"That's a hard one to hear. I'd like to think about it properly rather than answer now.\"" },
            { front: "Step 3 · Name when you will come back — they look unsure whether it landed", back: "\"I'm not brushing it off. Can we pick it up at the weekend?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Your manager criticises something you had worked very hard on.",
          steps: [
            { front: "Step 1 · Acknowledge, briefly — they say: \"Honestly, this isn't close to what we needed.\"", back: "\"Right. Thanks for being straight with me.\"" },
            { front: "Step 2 · Say you need time — you can feel the heat rising", back: "\"I put a lot into this, so I need a bit of time before I respond properly.\"" },
            { front: "Step 3 · Name when you will come back — they are waiting", back: "\"Can I come back to you tomorrow morning with what I'd change?\"" },
          ]
        },
      ]
    },
  ],
  apologizing1: [
    {
      name: "The Everyday Apology",
      guideFront: "The step you are on — say your version out loud.",
      guideBack: "One way it could sound.",
      description: "The whole thing for an ordinary mistake: sorry, what you did, what changes. Under ten seconds, and it settles the matter.\n\nThis one is a monologue — you say it as a continuous piece. Read the step, say your own version out loud, then turn the card.\n\nThe order matters less here than in a serious apology, but the ending does not: stopping after the sorry leaves them with your regret and no reason to expect anything different.\n\nMindset: short, specific, and finished with a plan.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You told a colleague you would send them something on Tuesday and completely forgot. It is now Thursday and they have had to chase you.",
          steps: [
            { front: "Step 1 · Say Sorry Simply — one sentence, unqualified.", back: "\"Sorry — I completely forgot.\"", guideFront: "No explanation. That is what makes it short." },
            { front: "Step 2 · Apologise for What You Did — say what specifically.", back: "\"I said Tuesday and then didn't write it down anywhere.\"", guideFront: "Specific. No \"if\", \"but\" or \"you\"." },
            { front: "Step 3 · Say What You'll Do Differently — one checkable change.", back: "\"I'll put it in the list while we're talking next time, rather than trusting my memory.\"", guideFront: "Small enough to be believed." },
          ]
        },
        {
          bundle: 'pro',
          situation: "You answered a friend more sharply than you meant to, in front of two other people.",
          steps: [
            { front: "Step 1 · Say Sorry Simply — straight away, in the moment.", back: "\"That came out sharper than I meant — sorry.\"", guideFront: "Immediate and unqualified." },
            { front: "Step 2 · Apologise for What You Did — name it, later and privately.", back: "\"I'm sorry I snapped at you, and in front of everyone at that.\"", guideFront: "The specific thing you did." },
            { front: "Step 3 · Say What You'll Do Differently — what changes.", back: "\"If I'm that tired I'll say so rather than take it out on whoever's nearest.\"", guideFront: "Specific enough to be checked." },
          ]
        },
      ]
    },
    {
      name: "The Quick One",
      guideFront: "The step you are on — say your version out loud.",
      guideBack: "One way it could sound.",
      description: "Most apologies are three words and a short exchange. This drills that — say it, deal with what comes back, and get out without inflating it.\n\nThe discipline is stopping. Adding an explanation turns a short apology into a defence, and adding the full treatment to something trivial makes the other person responsible for managing your discomfort.\n\nMindset: say it, let them answer, move on. Do not upgrade a small thing mid-sentence.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You sent an email without the attachment and a colleague has replied asking for it.",
          steps: [
            { front: "Say Sorry Simply — one sentence.", back: "\"Sorry — attaching now.\"" },
            { front: "Say What You'll Do Differently — they say, \"No worries, happens to everyone.\"", back: "\"I'll start attaching before I write the message. That's the actual fix.\"" },
            { front: "Say Sorry Simply — they say, \"Honestly, it's fine.\"", back: "\"Cheers. It's with you.\"", guideFront: "Close it. Do not add more." },
          ]
        },
        {
          bundle: 'pro',
          situation: "You made a joke at a friend's expense in front of others and their face changed for a second.",
          steps: [
            { front: "Say Sorry Simply — straight away.", back: "\"That was a cheap shot — sorry.\"" },
            { front: "Apologise for What You Did — they say, \"It's fine,\" but does not look it.", back: "\"It wasn't fine. It was at your expense in front of everyone.\"" },
            { front: "Say What You'll Do Differently — they say, \"Honestly, forget it.\"", back: "\"I'll leave that one alone in future.\"", guideFront: "Small plan, then stop." },
          ]
        },
      ]
    },
    {
      name: "When It Is Bigger Than You Thought",
      guideFront: "The step you are on — say your version out loud.",
      guideBack: "One way it could sound.",
      description: "You treated something as small and it turns out it was not. The other person is more affected than you expected, or has been sitting on it.\n\nThe move is to change the size out loud rather than carry on with the version you had prepared. That correction is itself part of the apology, and it lands better than any amount of the small version delivered more sincerely.\n\nMindset: notice, say that you had it wrong, and start again at the right size.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You apologised briefly last week for something and it is clear it is still there.",
          steps: [
            { front: "Choose the Size — they mention it again, lightly.", back: "\"I brushed that off last week, didn't I. Can we do it properly?\"" },
            { front: "Apologise for What You Did — they say, \"It's not a big deal, honestly.\"", back: "\"It clearly is a bit. I'm sorry I said it in front of everyone.\"" },
            { front: "Say What You'll Do Differently — they say, \"It just wasn't the moment.\"", back: "\"Anything about you goes to you first from now on. Not the room.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You have cancelled on a friend again. Each time was small; the pattern is not.",
          steps: [
            { front: "Choose the Size — they say, \"No problem, another time.\"", back: "\"It's the fourth time, though. Can I talk about it rather than just apologise again?\"" },
            { front: "Apologise for What You Did — they say, \"If you like.\"", back: "\"I'm sorry. I keep saying yes to things and then finding I can't.\"" },
            { front: "Say What You'll Do Differently — they say, \"That's what it's felt like.\"", back: "\"I'm going to stop saying yes when I'm not sure. That's the actual change.\"" },
          ]
        },
      ]
    },
  ],
  agreeing: [
    {
      name: "Agree and Back It Up",
      guideFront: "Take the next step in agreeing.",
      guideBack: "One line you could say here.",
      description: "The basic shape of a full agreeing turn. Steps: 1) Signal the Agreement — make it clear you are with them, 2) Add a Personal Experience — back it with something from your own life, 3) Expand the Idea — push it one step further.\n\nEach step does one job. The signal buys goodwill, the experience makes it real, and the expansion gives the conversation somewhere to go.\n\nThe shape of the whole thing:\n1. \"Same here, completely.\"\n2. \"I read by the window every time it rains.\"\n3. \"And it's the one kind of weather where staying in feels earned.\"\n\nMindset: the third step is the one people skip. Without it the agreement is warm but finished.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend states an opinion about the weather that you happen to share.",
          steps: [
            { front: "Step 1 · Signal you agree — they say: \"I love when it rains.\"", back: "\"Same here, honestly. Completely with you.\"" },
            { front: "Step 2 · Back it with your own life — they say: \"Everyone thinks I'm strange for it.\"", back: "\"Not at all. I read by the window every single time it rains.\"" },
            { front: "Step 3 · Take it one step further — they laugh and wait for more", back: "\"And it's the one kind of weather where staying in actually feels earned.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague says something about sleep that matches your own habits.",
          steps: [
            { front: "Step 1 · Signal you agree — they say: \"You only need six hours of sleep.\"", back: "\"I'd say that's about right.\"" },
            { front: "Step 2 · Back it with your own life — they say: \"People never believe me.\"", back: "\"I've done six for about ten years now and I'm fine on it.\"" },
            { front: "Step 3 · Take it one step further — they nod, waiting", back: "\"And the regular time matters more than the number, I think.\"" },
          ]
        },
      ]
    },
    {
      name: "Agree with a Reason",
      guideFront: "Take the next step in agreeing.",
      guideBack: "One line you could say here.",
      description: "The version for opinions you share but have never lived. Steps: 1) Signal the Agreement — confirm you are with them, 2) Give an Explanation — say why it makes sense, 3) Expand the Idea — apply it somewhere they did not.\n\nUse this whenever you have no story to tell. A reason is always available, which makes this the version that works everywhere.\n\nWhere each step is doing its work:\n1. Signal — stops the reason sounding like a correction.\n2. Explanation — hands them an argument they can reuse.\n3. Expansion — moves it from their case to a wider one.\n\nMindset: having no personal experience is not a reason to stay quiet. Explaining why someone is right is a real contribution.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A classmate states an opinion about school that you agree with in principle.",
          steps: [
            { front: "Step 1 · Signal you agree — they say: \"You should always listen to your teacher.\"", back: "\"Completely agree, yes.\"" },
            { front: "Step 2 · Say why it makes sense — they say: \"People act like it's optional.\"", back: "\"Another reason is you avoid the mistakes everyone else makes.\"" },
            { front: "Step 3 · Apply it wider — they seem keen to keep going", back: "\"And the same goes for anyone who's done the job longer than you.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague complains about the working week in a way you recognise.",
          steps: [
            { front: "Step 1 · Signal you agree — they say: \"Long meetings kill the whole day.\"", back: "\"So true.\"" },
            { front: "Step 2 · Say why it makes sense — they say: \"I can't put my finger on why.\"", back: "\"It's the back-to-back part — you never get a reset in between.\"" },
            { front: "Step 3 · Apply it wider — they look like they want more", back: "\"And the recovery afterwards ends up costing more than the meeting did.\"" },
          ]
        },
      ]
    },
    {
      name: "Keep It Going",
      guideFront: "Take the next step in agreeing.",
      guideBack: "One line you could say here.",
      description: "Agreeing as a back-and-forth rather than a single turn. Steps: 1) Signal the Agreement — get on their side, 2) Expand the Idea — hand them something new, 3) Add a Personal Experience — once they have picked it up, meet them with your own.\n\nThe order is deliberately reversed here. By expanding before you tell your own story, you invite them to speak second rather than closing the topic yourself.\n\nWhat makes it work:\n1. Signal — short, so the expansion arrives quickly.\n2. Expansion — a new angle is easier to answer than a finished story.\n3. Experience — lands better once they have added their own piece.\n\nMindset: agreeing is a shared activity. The best version ends with both of you having said something.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend offers an opinion about pace of life that you share.",
          steps: [
            { front: "Step 1 · Signal you agree — they say: \"I think you should never hurry.\"", back: "\"That's so true.\"" },
            { front: "Step 2 · Hand them a new angle — they wait to see if you mean it", back: "\"And sometimes taking your time gets a better result anyway.\"" },
            { front: "Step 3 · Meet them with your own — they say: \"Exactly, I've started leaving earlier for things.\"", back: "\"Same. Every time I rush in the morning I forget something.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A neighbour makes a point about walking that you happen to agree with.",
          steps: [
            { front: "Step 1 · Signal you agree — they say: \"Walking is underrated.\"", back: "\"Couldn't agree more.\"" },
            { front: "Step 2 · Hand them a new angle — they seem pleased someone said so", back: "\"It's the only exercise you can do while thinking about something else.\"" },
            { front: "Step 3 · Meet them with your own — they say: \"That's exactly why I do it.\"", back: "\"Same here. I started walking to work last spring and I'd never go back.\"" },
          ]
        },
      ]
    },
  ],
  disagreeing: [
    {
      name: "The Full Disagreement",
      guideFront: "They have responded. Keep the disagreement going without heat.",
      guideBack: "A line you could say at this step.",
      description: "Signal, reason, perspective, example — the shape a disagreement takes when the other person is engaging with you properly.\n\nEach step should answer what they actually said. The commonest failure is running your own four moves regardless of their replies, which turns a conversation into two speeches.\n\nMindset: stay on their sentence, not on your next point.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A colleague says the change should go live on Friday so it settles over the weekend.",
          steps: [
            { front: "They say Friday is the obvious day.", back: "I'd say the opposite, actually — Friday's the one day I'd avoid." },
            { front: "They say, \"Why? Nothing's happening at the weekend.\"", back: "That's the problem. If it breaks, nobody's here until Monday." },
            { front: "They say, \"It's a small change, it won't break.\"", back: "Probably not. But Tuesday costs us nothing and takes the risk away entirely." },
            { front: "They say, \"Has that actually happened?\"", back: "The payroll one last year. Went out on a Friday and we lost the weekend to it." },
          ]
        },
        {
          bundle: 'pro',
          situation: "A friend says giving up on things is a bad habit and you should always see them through.",
          steps: [
            { front: "They say you should always finish what you start.", back: "I used to think that. I'd disagree with the \"always\" now." },
            { front: "They say, \"So you just quit when it gets hard?\"", back: "Not when it's hard. When it's clearly the wrong thing, which is different." },
            { front: "They say, \"That sounds like a convenient line.\"", back: "Maybe. Another way to see it — finishing everything means never choosing anything." },
            { front: "They say, \"Give me an actual example.\"", back: "The course I did two years ago. I finished it out of stubbornness and used none of it." },
          ]
        },
      ]
    },
    {
      name: "When They Push Back Hard",
      guideFront: "They have responded. Keep the disagreement going without heat.",
      guideBack: "A line you could say at this step.",
      description: "Sometimes a disagreement gets warm. The other person raises their voice slightly, restates their point more firmly, or treats your difference as a personal challenge.\n\nThe move is to lower the temperature without abandoning your view. Acknowledge what is fair in what they said, keep your own sentence, and do not match their volume.\n\nMindset: you can hold a position and be easy to talk to at the same time.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You have questioned a plan and your colleague has taken it as criticism of them.",
          steps: [
            { front: "They say, \"So you think I haven't thought about this.\"", back: "Not at all — I think you have. I just land somewhere different on the timing." },
            { front: "They say, \"It feels like you're against everything I suggest.\"", back: "That's fair to raise. This one I'd back with a different start date, not scrap." },
            { front: "They say, \"Fine. What date, then?\"", back: "Tuesday. Same plan, two days later, and someone's around if it wobbles." },
          ]
        },
        {
          bundle: 'pro',
          situation: "A disagreement about something minor has got louder than it deserves.",
          steps: [
            { front: "They say, \"Why are you making this into a thing?\"", back: "I'm not trying to. I do see it differently, but it's not worth either of us getting cross." },
            { front: "They say, \"It's just objectively better my way.\"", back: "Might be. I'd still do it the other way, and I don't think either of us is wrong exactly." },
            { front: "They say, \"So we just leave it?\"", back: "Happily. It's not the kind of thing anyone has to win." },
          ]
        },
      ]
    },
    {
      name: "When You Change Your Mind",
      guideFront: "They have responded. Keep the disagreement going without heat.",
      guideBack: "A line you could say at this step.",
      description: "Sometimes their reason is better than yours. Conceding is a move in a disagreement, not a defeat, and doing it cleanly makes people far more willing to hear you the next time.\n\nSay what changed your mind. That is what separates a real change of view from giving up to end the conversation.\n\nMindset: being persuaded is a good outcome. It means the conversation worked.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You disagreed with a colleague's plan, and their answer has actually convinced you.",
          steps: [
            { front: "They explain the constraint you had not known about.", back: "Ah — I didn't know the deadline was fixed. That changes it." },
            { front: "They say, \"So you're okay with Friday now?\"", back: "Yes. If it can't move, Friday's the least bad option." },
            { front: "They say, \"You were pretty against it.\"", back: "I was, on the information I had. The fixed date is the bit I was missing." },
          ]
        },
        {
          bundle: 'pro',
          situation: "A friend has answered your objection well, but one part of your concern still stands.",
          steps: [
            { front: "They answer your main objection convincingly.", back: "Okay, you've changed my mind on the cost. I was wrong about that." },
            { front: "They say, \"So you're on board?\"", back: "Mostly. The timing bit I'd still argue about." },
            { front: "They say, \"What's left on timing?\"", back: "Only that it lands the same week as everything else. Small thing, but real." },
          ]
        },
      ]
    },
  ],
  persuasionandinfluence1: [
    {
      name: "Building the Case",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "A case made in stages, each one answering what they actually said rather than continuing your own list.\n\nEach step front carries their reply and names the strategy. Notice how the order follows them: benefit while they are uninterested, reason once they engage, cost of doing nothing when they defend the status quo, and your own experience when they doubt it is workable.\n\nMindset: their last answer chooses your next strategy.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You think a task should start next week rather than in three weeks. Your colleague owns it and has not thought about it.",
          steps: [
            { front: "Show the Benefit to Them — they have not engaged with the question.", back: "\"If we start next week, you'd not be doing it in the same fortnight as the audit.\"" },
            { front: "Give a Reason — they say, \"Is that actually a problem?\"", back: "\"It was in March. The audit ate the week and the report went out unchecked.\"" },
            { front: "Name the Cost of Doing Nothing — they say, \"We managed, though.\"", back: "\"We did, by losing a weekend. That's the bit that keeps happening.\"" },
            { front: "Tell What Happened to You — they say, \"It'd be a scramble to start now.\"", back: "\"I moved one of these forward last year. It took a morning to set up, not a week.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Your study group divides the work the same way every time, and the last section always gets rushed.",
          steps: [
            { front: "Name the Cost of Doing Nothing — they are about to split it the usual way.", back: "\"Every time we do it like this, the last section gets done at midnight.\"" },
            { front: "Give a Reason — they say, \"It's worked so far.\"", back: "\"It's worked because someone rescues it. That someone was you last time.\"" },
            { front: "Show the Benefit to Them — they say, \"So what would you change?\"", back: "\"You'd get the research half, which is the bit you're quick at.\"" },
            { front: "Tell What Happened to You — they say, \"Would that actually be faster?\"", back: "\"We tried it that way in the autumn group. We finished two days early.\"" },
          ]
        },
      ]
    },
    {
      name: "When They Are Not Interested",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "The hardest audience is not the one who disagrees — it is the one who has not thought about it and does not intend to.\n\nAn argument lands on nothing when there is no question in their mind. The move is to make it their business first, which usually means the benefit or the cost, and only then give the reasoning.\n\nMindset: create the question before you answer it.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are raising something with a colleague whose work is only indirectly affected.",
          steps: [
            { front: "Show the Benefit to Them — they say, \"That's not really my area.\"", back: "\"It's not, directly. It'd save you the chasing every Friday, though.\"" },
            { front: "Name the Cost of Doing Nothing — they say, \"The chasing's not that bad.\"", back: "\"Twenty minutes a week for two years. It adds up to more than the fix.\"" },
            { front: "Give a Reason — they say, \"Alright. Why hasn't anyone done it?\"", back: "\"Because it's nobody's job. That's the actual problem.\"" },
            { front: "Tell What Happened to You — they say, \"And you think it's fixable?\"", back: "\"The other team fixed theirs in an afternoon. I watched them do it.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You think a friend would enjoy something and they are politely uninterested.",
          steps: [
            { front: "Show the Benefit to Them — they say, \"It's not really my thing.\"", back: "\"You've been saying you want to meet more people. It's about the easiest way to do that.\"" },
            { front: "Tell What Happened to You — they say, \"I'd not know anyone.\"", back: "\"Nor did I. I stood by the door for ten minutes and then it was fine.\"" },
            { front: "Name the Cost of Doing Nothing — they say, \"Maybe another time.\"", back: "\"That's what you said about the last one. It's been a quiet few months.\"" },
            { front: "Give a Reason — they say, \"That's fair, actually.\"", back: "\"That's the only reason I keep mentioning it. Nothing else.\"" },
          ]
        },
      ]
    },
    {
      name: "When You Should Not Win",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Sometimes you set out to persuade someone and find out mid-conversation that they are right, or that you cannot answer their objection.\n\nThis combo practises noticing and saying so. It is the thing that makes people willing to be persuaded by you next time — someone who has visibly changed their mind under a good argument is worth listening to.\n\nMindset: the point is the better answer. Sometimes it is theirs.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You have been arguing for an earlier start and they raise something you did not know.",
          steps: [
            { front: "Give a Reason — they say, \"The data doesn't arrive until the twelfth.\"", back: "\"It doesn't? Then the reason I've been giving doesn't hold.\"" },
            { front: "Name the Cost of Doing Nothing — they say, \"So we're stuck with the dates.\"", back: "\"For this one, yes. I'd still want it flagged before next year's.\"" },
            { front: "Tell What Happened to You — they say, \"Would that make a difference?\"", back: "\"It did the last time we raised something early. They moved the supplier deadline.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Partway through you notice you want to win rather than to get the right outcome.",
          steps: [
            { front: "Give a Reason — they say, \"You've been on this twenty minutes.\"", back: "\"I have. And I think I'm arguing because I started, not because I'm right.\"" },
            { front: "Show the Benefit to Them — they say, \"So what do you actually think?\"", back: "\"Honestly, that your version costs you less and I hadn't weighed that.\"" },
            { front: "Name the Cost of Doing Nothing — they say, \"So we leave it?\"", back: "\"Leave it. The only thing I'd keep is a note to look at it again in the spring.\"" },
          ]
        },
      ]
    },
  ],
  persuasionandinfluence2: [
    {
      name: "Removing the Obstacles",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "A conversation where the case is already made and the work is entirely in clearing what is in the way.\n\nEach step front carries what they said and names the strategy. Watch the shape: acknowledge the objection, find out what is underneath it, shrink the ask, then get out of the way.\n\nMindset: every step here takes something away rather than adding to it.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You have proposed a change to how a shared process works. The first objection is about the time it would take.",
          steps: [
            { front: "Acknowledge Before Suggesting — they say, \"It'd take ages to set up.\"", back: "\"It would take a couple of days. That's a real cost and I'm not going to pretend otherwise.\"" },
            { front: "Ask a Question Instead — they say, \"And who's doing that?\"", back: "\"That's the bit I hadn't worked out. What would make it manageable?\"" },
            { front: "Make It Easy to Say Yes — they say, \"Not me in October, that's for sure.\"", back: "\"Then not October. What about one team in the new year?\"" },
            { front: "Let Them Decide — they say, \"That I could look at.\"", back: "\"Have a think over Christmas. I'll not raise it again before then.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague said your idea was good three weeks ago. Nothing has happened since.",
          steps: [
            { front: "Ask a Question Instead — you catch them in the kitchen.", back: "\"You said this sounded good a few weeks back. What's actually in the way?\"" },
            { front: "Acknowledge Before Suggesting — they say, \"Nothing. I just haven't got to it.\"", back: "\"Fair enough — it's not urgent for you and it is for me. That's the whole difference.\"" },
            { front: "Make It Easy to Say Yes — they say, \"I'd need a proper afternoon for it.\"", back: "\"You wouldn't, actually. Give me twenty minutes and I'll do the setting up.\"" },
            { front: "Let Them Decide — they say, \"Alright, Thursday?\"", back: "\"Thursday. And if it's still not happening after that, I'll stop asking.\"" },
          ]
        },
      ]
    },
    {
      name: "When They Have Decided Against",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "A firm no is not always final, but arguing with it makes it so. The move is to accept it out loud, ask one honest question, and leave the door open.\n\nBoth scenarios end without agreement, because that is the realistic outcome and because how you leave a refusal decides whether you get a second conversation.\n\nMindset: accept the no properly. That is what makes the door stay open.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend has said no to an idea you think would suit them.",
          steps: [
            { front: "Acknowledge Before Suggesting — they say, \"It's just not for me.\"", back: "\"Fair enough. You know yourself better than I do.\"" },
            { front: "Ask a Question Instead — they say, \"You don't sound convinced.\"", back: "\"I'm not, but that's my problem. What's the bit that puts you off?\"" },
            { front: "Make It Easy to Say Yes — they say, \"I'd feel like an idiot, mostly.\"", back: "\"Come to one and leave after ten minutes if you hate it. That's the whole offer.\"" },
            { front: "Let Them Decide — they say, \"Maybe. I'll think about it.\"", back: "\"Do. And if the answer's no I'll shut up about it, promise.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A decision has gone the other way and you disagree with it.",
          steps: [
            { front: "Acknowledge Before Suggesting — they say, \"It's decided, I'm afraid.\"", back: "\"Understood. And the reasoning makes sense from where you're sitting.\"" },
            { front: "Ask a Question Instead — they say, \"You're not happy about it.\"", back: "\"Not entirely. Can I ask what would have made a difference?\"" },
            { front: "Make It Easy to Say Yes — they say, \"Numbers, probably. Actual ones.\"", back: "\"Then let me bring numbers in March rather than arguing now.\"" },
            { front: "Let Them Decide — they say, \"That I'd look at.\"", back: "\"Good. I'll leave it there and get on with this one properly.\"" },
          ]
        },
      ]
    },
    {
      name: "When You Are Pushing Too Hard",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "The moment you notice you want to win rather than to get the right outcome. It is a common feeling and rarely acted on, because stopping feels like conceding.\n\nThis combo practises stopping cleanly — naming it, handing the decision over, and meaning it.\n\nMindset: noticing is the whole move. What follows is easy.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You have been making the same case for twenty minutes and something has shifted from persuading to winning.",
          steps: [
            { front: "Acknowledge Before Suggesting — they say, \"You've been on this a while.\"", back: "\"I have. And I think I'm arguing because I started, not because I'm right.\"" },
            { front: "Ask a Question Instead — they say, \"So what do you actually think?\"", back: "\"Honestly? I'm not sure any more. What's your read on it?\"" },
            { front: "Let Them Decide — they say, \"I'd leave it as it is.\"", back: "\"Then let's leave it. I'll stop.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A friend is making a choice about their own life that you think is a mistake.",
          steps: [
            { front: "Ask a Question Instead — they tell you what they have decided.", back: "\"What's making you lean that way? I'd like to understand it.\"" },
            { front: "Acknowledge Before Suggesting — they explain their reasoning.", back: "\"That's more thought-through than I'd assumed. I still see it differently.\"" },
            { front: "Let Them Decide — they say, \"You think I'm wrong.\"", back: "\"I'd do it differently. It's completely your call and I'll back it either way.\"" },
            { front: "Let Them Decide — they say, \"You don't have to pretend to agree.\"", back: "\"I'm not. I've said my bit once and that's the end of it from me.\"" },
          ]
        },
      ]
    },
  ],
  negotiationandcompromise: [
    {
      name: "From Two Positions to One Solution",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "The full arc: both positions stated, both understood, priorities found, a solution built from them, and a check that it holds.\n\nEach step front carries what they said and names the strategy. Watch the turn in the middle — the moment the question moves from *which date* to *what the date is protecting* is where the negotiation stops being a contest.\n\nMindset: the solution appears once both needs are visible. Everything before that is positioning.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You want a project to start in October. Your colleague wants December. Both of you have said so once and neither has moved.",
          steps: [
            { front: "State What You Want — they have said December and are waiting.", back: "\"I'd like October, and I'll say why in a second. That's where I'm starting from.\"" },
            { front: "Show You Understood Theirs — they say, \"December gives us breathing room.\"", back: "\"So it's the room you want, not the date itself.\"" },
            { front: "Ask What Matters Most — they say, \"Partly. And I don't want to tell the client twice.\"", back: "\"Which of those two is the bigger one for you?\"" },
            { front: "Offer Something That Includes Both — they say, \"Honestly, the client conversation.\"", back: "\"Then what if we start in October and only tell them in December, when it's certain?\"" },
            { front: "Refine It Together — they say, \"That could work, actually.\"", back: "\"Is there anything about it you'd still change?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Your study group is split between two project topics and the discussion has gone in circles for twenty minutes.",
          steps: [
            { front: "Split It Up — they are all repeating themselves.", back: "\"We're arguing about the topic and the method as if they're the same thing. They're not.\"" },
            { front: "Ask What Matters Most — they say, \"I just want one with data we can actually get.\"", back: "\"So it's the data, not the subject. Is that right for everyone?\"" },
            { front: "Offer Something That Includes Both — they say, \"Pretty much.\"", back: "\"Then your topic with the method I suggested — that's got the data and the angle.\"" },
            { front: "Show You Understood Theirs — they say, \"Would that be too much work?\"", back: "\"You're worried about the size of it rather than the idea.\"" },
            { front: "Refine It Together — they say, \"Yes, that's the bit.\"", back: "\"Then let's cut the third section and see if it still works.\"" },
          ]
        },
      ]
    },
    {
      name: "When It Gets Stuck",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Negotiations get stuck in recognisable ways: the same two positions repeated, a hidden disagreement about something else, or one person conceding to end it.\n\nThe moves that unstick it are almost always structural rather than persuasive — splitting the problem, going back to what actually matters, or naming what is happening.\n\nMindset: when repeating yourselves, change the shape of the conversation rather than the volume.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You and a colleague have each repeated your position three times and nothing has moved.",
          steps: [
            { front: "Split It Up — they say, \"I just don't think it's the right call.\"", back: "\"We're going round. There are three things in this — which one are we actually stuck on?\"" },
            { front: "Ask What Matters Most — they say, \"The cost, mainly.\"", back: "\"Right. If the cost were solved, would the rest of it be fine?\"" },
            { front: "Offer Something That Includes Both — they say, \"Probably, yes.\"", back: "\"Then let's do the smaller version this year and the rest next, if it pays for itself.\"" },
            { front: "Refine It Together — they say, \"That I could live with.\"", back: "\"Live with, or actually want? I'd rather sort it now.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "The other person has agreed to everything and you suspect they are conceding to end the conversation.",
          steps: [
            { front: "Refine It Together — they say, \"No, it's fine, we'll do it your way.\"", back: "\"You've said fine three times. Is it fine, or are you just done with this?\"" },
            { front: "Ask What Matters Most — they say, \"It's not my favourite, but it's alright.\"", back: "\"What's the bit that isn't right? I'd rather know now.\"" },
            { front: "Show You Understood Theirs — they say, \"The timing lands badly for my team.\"", back: "\"So it's not the plan, it's when it starts.\"" },
            { front: "Offer Something That Includes Both — they say, \"That's it, yes.\"", back: "\"Then keep the plan and move the start by two weeks. That costs me nothing.\"" },
          ]
        },
      ]
    },
    {
      name: "When You Have a Limit",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Sometimes part of your position genuinely cannot move. Handled badly this reads as an ultimatum and ends the negotiation; handled well it makes the rest of it faster, because everyone knows where the walls are.\n\nThe pattern: name the limit early, name how small it is, and be visibly generous everywhere else.\n\nMindset: one limit, said plainly, with everything else genuinely open.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are negotiating the shape of a piece of work. The date is fixed by something outside your control.",
          steps: [
            { front: "Say What You Cannot Move On — they open by proposing a later date.", back: "\"The date I can't move — that one's fixed outside this room. Nearly everything else is open.\"" },
            { front: "Show You Understood Theirs — they say, \"Then it can't be done properly.\"", back: "\"You're saying the scope doesn't fit the time, not that the date's wrong.\"" },
            { front: "Ask What Matters Most — they say, \"Exactly that.\"", back: "\"Which parts of the scope would you keep if you could only keep half?\"" },
            { front: "Offer Something That Includes Both — they say, \"The first two sections, easily.\"", back: "\"Then those two by the date, and the rest afterwards without a deadline on it.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A manager is proposing a schedule that includes weekends. You cannot do weekends.",
          steps: [
            { front: "Say What You Cannot Move On — they lay out the plan.", back: "\"Weekends I can't do — that's childcare rather than preference. Everything else I can look at.\"" },
            { front: "Show You Understood Theirs — they say, \"The work has to be covered somehow.\"", back: "\"The coverage is the problem, rather than specifically me being there on a Saturday.\"" },
            { front: "Offer Something That Includes Both — they say, \"Yes, that's what I need.\"", back: "\"I could do two evenings instead, or take the Monday morning handover off whoever does cover it.\"" },
            { front: "Refine It Together — they say, \"The evenings might work.\"", back: "\"Let's try it for a month and see whether it actually covers what you need.\"" },
          ]
        },
      ]
    },
  ],
  brokenrecord: [
    {
      name: "The Classic Loop",
      guideFront: "What they pushed with, and the move to answer it.",
      guideBack: "One way it could sound.",
      description: "The technique as it actually runs: they push, you acknowledge and repeat, they switch tack, you repeat again, and after three or four rounds it ends.\n\nEach step front carries what they said and names the move. Watch how the arguments change while your answer does not — that contrast is the whole mechanism, and it is why the technique works without any confrontation in it.\n\nMindset: the arguments will change. Your sentence will not.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend has asked to borrow a significant amount. You have decided the answer is no, and your line is \"I'm not lending money at the moment.\"",
          steps: [
            { front: "Step 1 · Acknowledge, Then Repeat — they say, \"I'm really stuck. I wouldn't ask otherwise.\"", back: "\"I know you wouldn't. I'm not lending money at the moment.\"", guideFront: "One clause of acknowledgement, then the line." },
            { front: "Step 2 · Don't Give Reasons — they say, \"Why not? Is it because of last time?\"", back: "\"It's nothing to do with last time. I'm just not lending at the moment.\"" },
            { front: "Step 3 · Don't Follow the New Argument — they say, \"You lent Tom money in the summer.\"", back: "\"I did. I'm not doing it this time.\"" },
            { front: "Step 4 · Keep the Tone Flat — they say, \"This is really unlike you.\"", back: "\"Maybe. I'm not lending money at the moment.\"" },
            { front: "Step 5 · Know When to Stop — they say, \"I don't know what I'm going to do.\"", back: "\"We're going round in circles now. The answer isn't going to change — but I'll help you look at what's owed if you want.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are returning a faulty item within the return period. The assistant is resisting. Your line is \"I'd like a refund, please.\"",
          steps: [
            { front: "Step 1 · Acknowledge, Then Repeat — they say, \"We normally only do exchanges.\"", back: "\"I understand that's the usual policy. I'd like a refund, please.\"", guideFront: "Acknowledge the policy, repeat the request." },
            { front: "Step 2 · Keep the Same Words — they say, \"I can offer you a credit note.\"", back: "\"I'd like a refund, please.\"" },
            { front: "Step 3 · Don't Give Reasons — they say, \"Can I ask what was wrong with it?\"", back: "\"It stopped working. I'd like a refund, please.\"" },
            { front: "Step 4 · Don't Follow the New Argument — they say, \"You've had it three weeks, though.\"", back: "\"Within the return period, yes. I'd like a refund, please.\"" },
            { front: "Step 5 · Know When to Stop — they say, \"I'll have to check with the manager.\"", back: "\"That's fine. I'll wait.\"" },
          ]
        },
      ]
    },
    {
      name: "When a Compromise Is Right",
      guideFront: "What they pushed with, and the move to answer it.",
      guideBack: "One way it could sound.",
      description: "Not every held line should stay held. When the objection is practical rather than a matter of principle, offering something that genuinely works for you ends the conversation better than repetition does.\n\nThe order matters. Hold the line first, so the compromise is not read as the first concession in a negotiation. Offer it once, and be clear it is the whole offer rather than an opening bid.\n\nMindset: hold, then offer — and only if the alternative genuinely suits you.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A relative wants you to spend all Saturday helping with a move. You do not want to lose the day. Your line is \"I can't do the whole day.\"",
          steps: [
            { front: "Step 1 · Acknowledge, Then Repeat — they say, \"It's only one day and we really need the help.\"", back: "\"I know it's a big job. I can't do the whole day.\"", guideFront: "Hold first. Do not open with the compromise." },
            { front: "Step 2 · Don't Give Reasons — they say, \"What have you got on that's so important?\"", back: "\"Nothing I want to move. I can't do the whole day.\"" },
            { front: "Step 3 · Offer a Workable Compromise — they say, \"So you won't help at all.\"", back: "\"I didn't say that. I can do the morning — nine till one.\"" },
            { front: "Step 4 · Know When to Stop — they say, \"Could you not stretch to the afternoon?\"", back: "\"The morning is the offer. Take it or leave it, and either's fine.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague wants to hand you a piece of work that is not yours. Your line is \"I'm not able to take that on.\"",
          steps: [
            { front: "Step 1 · Acknowledge, Then Repeat — they say, \"You're the only one who knows the system.\"", back: "\"I know it's awkward. I'm not able to take that on.\"", guideFront: "Acknowledge, then the line. Nothing more." },
            { front: "Step 2 · Don't Follow the New Argument — they say, \"It'll take you twenty minutes.\"", back: "\"It might. I'm not able to take it on.\"" },
            { front: "Step 3 · Offer a Workable Compromise — they say, \"Then it just won't get done.\"", back: "\"I can't do it. I could sit with you for ten minutes and show you how.\"" },
            { front: "Step 4 · Know When to Stop — they say, \"That's not really the same.\"", back: "\"It's what I can offer. Let me know if you want it.\"" },
          ]
        },
      ]
    },
    {
      name: "When They Escalate",
      guideFront: "What they pushed with, and the move to answer it.",
      guideBack: "One way it could sound.",
      description: "Sometimes persuasion turns into pressure — raised voice, guilt, or an implication about what kind of person you are.\n\nThe move is the same as before, only more so: shorter answers, flatter tone, no engagement with the accusation. And a clearer endpoint, because a conversation that has become pressure is one to leave rather than to win.\n\nIf someone is trying to make you feel bad in order to change your answer, naming it plainly and once is fair, and then leaving is fair too.\n\nMindset: do not match their volume, do not answer the accusation, and end it sooner than you would otherwise.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A relative has moved from asking to saying you are selfish and that the family always ends up disappointed.",
          steps: [
            { front: "Step 1 · Don't Follow the New Argument — they say, \"You're so selfish these days.\"", back: "\"Maybe. The answer's still no.\"" },
            { front: "Step 2 · Keep the Tone Flat — they say, \"Everyone else manages to make time.\"", back: "\"I'm not able to do it.\"" },
            { front: "Step 3 · Name it once — they say, \"I suppose we just don't matter any more.\"", back: "\"I don't think that's fair, and I don't think making me feel bad is going to change my answer.\"", guideFront: "Say it once, plainly. Do not argue it." },
            { front: "Step 4 · Know When to Stop — they say, \"Fine. Whatever.\"", back: "\"I'm going to leave it there. I'll call you in the week.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Someone has started shouting because you will not change your position.",
          steps: [
            { front: "Step 1 · Keep the Tone Flat — they raise their voice.", back: "\"I'm not going to do it.\"", guideFront: "Do not match the volume. Slower and quieter, not louder." },
            { front: "Step 2 · Acknowledge, Then Repeat — they say, \"You're not even listening to me!\"", back: "\"I have listened. My answer's the same.\"" },
            { front: "Step 3 · Name it once — they carry on shouting.", back: "\"I'm not going to talk about it while you're shouting at me.\"" },
            { front: "Step 4 · Know When to Stop — they say, \"So you're just walking off.\"", back: "\"I am. We can talk when it's calmer.\"" },
          ]
        },
      ]
    },
  ],
  respondingtopassiveaggression: [
    {
      name: "Staying Level",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "A run of remarks answered without escalation. This is the most common real shape: not one dig but three or four across a conversation, each inviting you to react.\n\nEach step front carries what they said and names the strategy. Notice that the responses get no sharper as the remarks continue — that flatness is what stops the conversation turning into an argument.\n\nMindset: the temperature is yours to set. Answer the fourth one exactly as you answered the first.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You have asked a colleague to get something to you by Thursday. They are annoyed about the timescale but not saying so directly.",
          steps: [
            { front: "Answer It Straight — they say, \"Well, it must be nice to be able to set deadlines.\"", back: "\"It's not my call either, to be honest. Thursday's what we've been given.\"" },
            { front: "Hold Your Point — they say, \"Some of us have actual work as well.\"", back: "\"I know you're stretched. I still need it by Thursday.\"" },
            { front: "Name the Feeling — they say, \"Fine. It'll be whatever it'll be.\"", back: "\"You sound properly fed up with this. Is it the timing or the whole thing?\"" },
            { front: "Hold Your Point — they say, \"It's just the constant last-minute stuff.\"", back: "\"That's worth raising properly, and I'd back you on it. For now — can you do Thursday?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are visiting family and a relative keeps making small pointed comments about how rarely you come.",
          steps: [
            { front: "Answer It Straight — they say, \"Nice of you to fit us in.\"", back: "\"It's good to be here. How've you been?\"" },
            { front: "Let It Go — they say, \"I suppose we're lucky to get an afternoon.\"", back: "\"Mm. Is the garden yours or has someone been helping?\"" },
            { front: "Name the Feeling — they say, \"I just think family should see each other more.\"", back: "\"It sounds like you've been missing having people around.\"" },
            { front: "Say How It Lands — they say, \"Well. Yes, if I'm honest.\"", back: "\"I'd much rather have that version than the comments. Then I know what's actually going on.\"" },
          ]
        },
      ]
    },
    {
      name: "Bringing It Into the Open",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Taking a remark under the surface, in the order that works: ask, then acknowledge what comes out, then say what you would prefer.\n\nThe risky moment is the first one. A question asked with an edge starts an argument, and a question asked neutrally gets an answer — the same words, two completely different conversations.\n\nMindset: ask like you want the answer, and then actually listen to it.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend has been short with you all evening and insists nothing is wrong.",
          steps: [
            { front: "Ask What They Mean — they say, \"No, it's fine. Do whatever you want.\"", back: "\"That doesn't sound fine. What would you rather do?\"" },
            { front: "Name the Feeling — they say, \"It doesn't matter. It never does.\"", back: "\"That sounds like something that's been building for a while.\"" },
            { front: "Ask What They Mean — they say, \"Forget it. I'm being stupid.\"", back: "\"You're not. Tell me the actual thing — I'd rather know.\"" },
            { front: "Say How It Lands — they say, \"You always decide and I go along with it.\"", back: "\"Right. I'd genuinely rather you told me that in the moment than went quiet on me.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague has been making sarcastic remarks for weeks. You have decided to say something.",
          steps: [
            { front: "Say How It Lands — you catch them alone after a meeting.", back: "\"Can I say something? When things get said like that in a meeting, I don't know how to answer them.\"" },
            { front: "Ask What They Mean — they say, \"I'm just joking. You're being sensitive.\"", back: "\"Maybe. Is there something underneath it, though? It's happened a fair bit.\"" },
            { front: "Name the Feeling — they say, \"Honestly? I'm fed up with how the work's split.\"", back: "\"That sounds like it's been sitting there a while.\"" },
            { front: "Say How It Lands — they say, \"It has, a bit.\"", back: "\"Then I'd much rather hear that. I can do something with that — I can't do anything with a joke.\"" },
          ]
        },
      ]
    },
    {
      name: "When You Should Not Take the Bait",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Some remarks are an invitation to a row, and the person making them is looking for one. Engaging is exactly what turns a bad moment into a bad afternoon.\n\nThis combo practises declining, several times, without either giving in or getting sharp. It ends with leaving rather than resolving, because resolution is not always available and not always yours to produce.\n\nMindset: you can decline every round. Nothing obliges you to have this argument today.",
      inputs: [
        {
          bundle: 'pro',
          situation: "In a meeting, a colleague makes a pointed comment about your work in front of the group.",
          steps: [
            { front: "Answer It Straight — they say, \"Well, some of us managed to read the whole document.\"", back: "\"I read the summary. Which bit should I look at?\"" },
            { front: "Hold Your Point — they say, \"The bit everyone else managed.\"", back: "\"I'll go through it after. Can we come back to the decision?\"" },
            { front: "Let It Go — they make a face at the person next to them.", back: "(carry on with the agenda)" },
            { front: "Say How It Lands — you catch them afterwards, privately.", back: "\"That was uncomfortable in front of everyone. If there's a problem I'd rather hear it directly.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A family member is clearly spoiling for a row and is using digs to start one.",
          steps: [
            { front: "Let It Go — they say something pointed about your choices.", back: "(say nothing — carry on)" },
            { front: "Answer It Straight — they say, \"I suppose you know best, as usual.\"", back: "\"I don't, mostly. But I'm happy with this one.\"" },
            { front: "Hold Your Point — they say, \"You never listen to anybody.\"", back: "\"Maybe. I'm still not going to argue about it tonight.\"" },
            { front: "Let It Go — they say, \"Typical.\"", back: "\"I'm going to go and put the kettle on.\"" },
          ]
        },
      ]
    },
  ],
  makingrequests: [
    {
      name: "The Whole Request",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Ask Instead of Hinting, then Make It Specific, then Give One Short Reason, then Leave Room to Refuse. The four parts of a request, in the order they come out of your mouth.\n\nNotice how short each step is. The whole thing is four sentences, and three of them are answers to questions the other person has already started asking silently: how big is it, why does it matter, and can I say no.\n\nMindset: two of these steps make it answerable and one makes it refusable. The first one is just saying it at all.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You need Thursday off at short notice and one colleague is the obvious person to ask, though they are busy too.",
          steps: [
            { front: "Ask Instead of Hinting — you have been mentioning Thursday for two days.", back: "\"Could you take my Thursday meeting?\"" },
            { front: "Make It Specific — they say, \"Depends what's involved.\"", back: "\"It's the ten o'clock, one hour, and the slides are already done.\"" },
            { front: "Give One Short Reason — they say, \"Why can't you do it?\"", back: "\"I'm at a funeral.\"" },
            { front: "Leave Room to Refuse — they say, \"Right. Let me think.\"", back: "\"Of course — and say if it doesn't work. I'll ask Petra otherwise.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are moving a few things on Saturday and one friend has a car, but they have helped you twice already this year.",
          steps: [
            { front: "Ask Instead of Hinting — you have been talking about the move for ten minutes.", back: "\"Could you help me shift a wardrobe on Saturday?\"" },
            { front: "Make It Specific — they say, \"How long are we talking?\"", back: "\"Two hours, morning, and it's one van load.\"" },
            { front: "Give One Short Reason — they say, \"Why not the removal people?\"", back: "\"It's the one thing that wouldn't fit in the van.\"" },
            { front: "Leave Room to Refuse — they say, \"I might have something on.\"", back: "\"Then don't move it. Honestly, no is fine — I'd rather know than have you rearrange things.\"" },
          ]
        },
      ]
    },
    {
      name: "Asking for Help",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Ask for Help, then Make It Specific, then Leave Room to Refuse, then Take a No Well. The harder version, because it starts with admitting something.\n\nThe first step is the whole difficulty. After that it behaves like any other request — which is the point of putting it in a sequence. Naming the piece you are stuck on turns \"I'm drowning\" into something a person can actually do on a Tuesday.\n\nMindset: asking early is a small ask. The sequence gets much harder if you leave it three weeks.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You have been stuck on the same task since yesterday morning and have told nobody.",
          steps: [
            { front: "Ask for Help — a colleague asks how it is going.", back: "\"Badly, honestly. I'm stuck and I've been stuck a while.\"" },
            { front: "Make It Specific — they say, \"Stuck on what?\"", back: "\"The export step. Could you sit with me for ten minutes and watch me do it?\"" },
            { front: "Leave Room to Refuse — they say, \"I'm quite buried today.\"", back: "\"Then not today. Tomorrow works, or I'll ask Jonas.\"" },
            { front: "Take a No Well — they say, \"Ask Jonas, he built it.\"", back: "\"Good idea — thanks. That's more useful than an hour of me guessing.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Things have been hard for a couple of months and you have been saying you are fine.",
          steps: [
            { front: "Ask for Help — they ask how you have been.", back: "\"Not great. I've been saying fine for about two months and it isn't true.\"" },
            { front: "Make It Specific — they say, \"What can I do?\"", back: "\"Could you call me on Sunday evenings? That's the worst bit of the week.\"" },
            { front: "Leave Room to Refuse — they say, \"Sundays are a bit chaotic here.\"", back: "\"Then say so — I'd rather have a real day than a promised one.\"" },
            { front: "Take a No Well — they say, \"Could we do Mondays instead?\"", back: "\"Mondays is better than nothing by miles. Thank you.\"" },
          ]
        },
      ]
    },
    {
      name: "When Nothing Comes Back",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Follow Up Once, then Make It Specific, then Leave Room to Refuse, then Take a No Well. What to do with silence.\n\nThe order matters more here than anywhere. People who follow up badly go straight from silence to grievance; this sequence goes from silence to a plain question, then to something easier to answer, then to accepting whatever comes back.\n\nMindset: one follow-up. After that, silence is an answer, and it is allowed to be.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You asked a colleague something on Monday and it is now Thursday with no reply.",
          steps: [
            { front: "Follow Up Once — you pass them in the kitchen.", back: "\"Bringing this back up — did you see my message about the Friday slot?\"" },
            { front: "Make It Specific — they say, \"I saw it, I've not had a chance to think.\"", back: "\"It's one hour on Friday afternoon and nothing to prepare.\"" },
            { front: "Leave Room to Refuse — they say, \"It's a bad week, to be honest.\"", back: "\"Then say no and I'll stop asking. I'd genuinely rather that.\"" },
            { front: "Take a No Well — they say, \"It's a no, sorry.\"", back: "\"No problem at all. Thanks for telling me straight.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You asked a friend about something three weeks ago and every reply has been a version of \"soon\".",
          steps: [
            { front: "Follow Up Once — they say, \"I've still not got round to it.\"", back: "\"That's alright. Can I get an actual answer, though, rather than another soon?\"" },
            { front: "Make It Specific — they say, \"What is it you need again?\"", back: "\"An hour, any evening next week, to go through the photos.\"" },
            { front: "Leave Room to Refuse — they say, \"I don't know what my week looks like.\"", back: "\"Then a no is completely fine. I'll do it myself, it just takes longer.\"" },
            { front: "Take a No Well — they say, \"Let's say no for now.\"", back: "\"Fair enough — thanks for being straight rather than leaving it hanging.\"" },
          ]
        },
      ]
    },
  ],
  sayingno: [
    {
      name: "The Full No",
      guideFront: "The step you are on — say your version out loud.",
      guideBack: "One way it could sound.",
      description: "The complete version, in the order that makes it land: show you understand, say no clearly, give the reason, offer what you can do.\n\nThis one is a monologue — you are saying it as a continuous piece before they respond. Read the step, say your own version out loud, then turn the card.\n\nThe order carries the weight. Understanding first means the no arrives to someone who feels heard. The reason after the no means it explains rather than negotiates. And the alternative last means it is a gift rather than an opening bid.\n\nMindset: each step earns the next. The alternative only works if the no came first.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A client has asked you to extend a deadline that has already been extended once. You are going to say no.",
          steps: [
            { front: "Step 1 · Show You Understand First — name their situation in one sentence.", back: "\"I can see this deadline is causing you real problems.\"", guideFront: "One sentence. Any longer and they hear the wind-up." },
            { front: "Step 2 · Say No Simply — say it plainly, no hedging.", back: "\"I'm not going to be able to extend it, though.\"", guideFront: "Clear and short. Do not soften the answer." },
            { front: "Step 3 · Give a Short Reason — one reason, ideally one that serves them.", back: "\"We moved it once already, and moving it again pushes the cost up for everyone on the project.\"", guideFront: "One reason. Not a justification." },
            { front: "Step 4 · Offer What You Can Do — something real, after the no.", back: "\"What I can do is take the last section off your plate so you're only doing two. Would that help?\"", guideFront: "Something you will actually do." },
          ]
        },
        {
          bundle: 'pro',
          situation: "A friend has asked you to help them move on Saturday. You cannot, and you would like the friendship to survive the no.",
          steps: [
            { front: "Step 1 · Show You Understand First — acknowledge what it means for them.", back: "\"Moving's horrible, and I know you're short of people.\"", guideFront: "Short and true." },
            { front: "Step 2 · Say No Simply — the answer, plainly.", back: "\"I can't do Saturday, though.\"", guideFront: "Clear. No \"I'm not sure\"." },
            { front: "Step 3 · Give a Short Reason — one line.", back: "\"I've already said yes to something else that day.\"", guideFront: "One reason, briefly." },
            { front: "Step 4 · Offer What You Can Do — only what is real.", back: "\"I could do a run to the tip on Sunday, if that's any use.\"", guideFront: "Only offer what you will actually do." },
          ]
        },
      ]
    },
    {
      name: "When They Push Back",
      guideFront: "The step you are on — say your version out loud.",
      guideBack: "One way it could sound.",
      description: "A no is often not accepted first time. The other person explains again, or looks disappointed, or asks whether you are sure.\n\nThis is an exchange rather than a monologue. Each front carries what they said. The move throughout is to acknowledge briefly and keep the answer unchanged — and to notice the moment where you are about to say yes simply to end the discomfort.\n\nIf it goes further than this, holding a line under sustained pressure is its own skill and its own pack.\n\nMindset: the answer does not change because they asked again.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You have said no to covering a shift. Your colleague is not letting it go.",
          steps: [
            { front: "Show You Understand First — they say, \"There's genuinely nobody else.\"", back: "\"I know, and I'm not pretending that's easy.\"" },
            { front: "Say No Simply — they say, \"So you can't help me out at all?\"", back: "\"Not with the shift, no.\"" },
            { front: "Offer What You Can Do — they say, \"Right. Great.\"", back: "\"I can ring round the others for you this afternoon, if that's useful.\"" },
            { front: "Say No Simply — they say, \"It's the shift I need, though.\"", back: "\"I understand. It's still a no from me.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You have declined an invitation and your friend is visibly let down.",
          steps: [
            { front: "Show You Understand First — they say, \"You never come to anything any more.\"", back: "\"That's fair, actually. I've said no to the last two.\"" },
            { front: "Give a Short Reason — they say, \"So what is it?\"", back: "\"I'm just flat out at the moment. It's nothing to do with you.\"" },
            { front: "Offer What You Can Do — they say, \"Alright.\"", back: "\"Can we do something the week after? I'd properly like to.\"" },
            { front: "Say No Simply — they say, \"You'll cancel that too.\"", back: "\"Maybe I will. This one I'm still saying no to, though.\"" },
          ]
        },
      ]
    },
    {
      name: "Not Answering Yet",
      guideFront: "The step you are on — say your version out loud.",
      guideBack: "One way it could sound.",
      description: "The move that prevents most regretted yeses: not answering in the moment at all.\n\nThe pattern is short — ask for time, name when you will answer, and then actually answer. The last step is the one people skip, and skipping it turns a considered delay into avoidance that costs the other person a chance to ask someone else.\n\nMindset: buy the time, then use it, then answer on the day you said.",
      inputs: [
        {
          bundle: 'pro',
          situation: "In a meeting, someone asks you to take on a piece of work. Everyone is looking at you.",
          steps: [
            { front: "Step 1 · Ask for Time First — do not answer in the room.", back: "\"Let me look at what I've got on and come back to you.\"", guideFront: "The room is pressure. Take it out of the room." },
            { front: "Step 2 · Ask for Time First — name when.", back: "\"I'll tell you by end of play tomorrow.\"", guideFront: "A delay without a date is avoidance." },
            { front: "Step 3 · Show You Understand First — the next day, privately.", back: "\"I know you need someone for this and it's not an easy one to fill.\"", guideFront: "One sentence." },
            { front: "Step 4 · Say No Simply — give the answer you promised.", back: "\"I'm not going to be able to take it on.\"", guideFront: "The answer you actually reached." },
          ]
        },
        {
          bundle: 'pro',
          situation: "A friend asks you to help with something and your instinct is an immediate yes you would regret.",
          steps: [
            { front: "Step 1 · Ask for Time First — notice the reflex and stop it.", back: "\"I want to say yes, and I say yes too quickly. Let me think about it properly.\"", guideFront: "Name the reflex. It makes the delay honest." },
            { front: "Step 2 · Ask for Time First — set the time.", back: "\"I'll message you tonight.\"", guideFront: "Give a time and keep it." },
            { front: "Step 3 · Say No Simply — later that evening.", back: "\"I've thought about it and I can't.\"", guideFront: "Short. Thought about, not agonised over." },
            { front: "Step 4 · Offer What You Can Do — if there is something real.", back: "\"I could do the Sunday instead, if that works at all.\"", guideFront: "Only if you will actually do it." },
          ]
        },
      ]
    },
  ],
  emotionlabellingandregulation: [
    {
      name: "The Full Label",
      guideFront: "Take the next step in putting it into words.",
      guideBack: "One line you could say here.",
      description: "The full process, in order. Steps: 1) Name the Situation — say plainly what happened, 2) Label the Emotion — choose the word that matches, 3) Describe the Signals — say what it did to you, 4) Regulate Out Loud — name what you are doing about it.\n\nEach step does one job, and the order is what makes it land. Situation first means the feeling has a context; signals after the word mean the word gets believed.\n\nThe shape of the whole thing:\n1. \"So this is the third Friday we've moved.\"\n2. \"I think I'm more hurt than annoyed.\"\n3. \"I read the message and my stomach just dropped.\"\n4. \"I'd rather say this now than let it sit for another month.\"\n\nMindset: this is not a confrontation, it is a description. Almost nothing in the four steps is arguable, which is exactly why it works.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend has cancelled on you for the third time and you have decided to say something.",
          steps: [
            { front: "Step 1 · Name the situation — you have got them on the phone", back: "\"So this is the third Friday in a row we've moved.\"" },
            { front: "Step 2 · Put a word on it — they say: \"I know, I'm sorry, work's been mad.\"", back: "\"I know. I think I'm more hurt than annoyed about it, honestly.\"" },
            { front: "Step 3 · Say what it did — they say: \"Hurt? Really?\"", back: "\"Yeah. I read the message on Friday and my stomach just dropped.\"" },
            { front: "Step 4 · Name what you are doing — they go quiet", back: "\"I'd rather say it now than let it sit for another month.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You got hard feedback on an assignment and want to talk it through with someone.",
          steps: [
            { front: "Step 1 · Name the situation — they ask how it went", back: "\"I got the paper back, and there's a whole page of comments on the second sheet.\"" },
            { front: "Step 2 · Put a word on it — they say: \"Ah. Was it bad?\"", back: "\"Not bad exactly. I felt embarrassed reading it, more than anything.\"" },
            { front: "Step 3 · Say what it did — they say: \"That's rough.\"", back: "\"My face went hot and I read the same line about four times.\"" },
            { front: "Step 4 · Name what you are doing — they wait", back: "\"I'm going to leave it until tomorrow before I look at it properly.\"" },
          ]
        },
      ]
    },
    {
      name: "When It Is Rising Now",
      guideFront: "Take the next step in putting it into words.",
      guideBack: "One line you could say here.",
      description: "The version for when the feeling arrives before the words do. Steps: 1) Regulate Out Loud — buy yourself the time first, 2) Label the Emotion — once you can think, say what it is, 3) Name the Situation — then explain what set it off.\n\nThe order is deliberately reversed. In the full process the situation comes first, but when something is peaking you do not have a spare sentence for context — you need the pause before anything else.\n\nWhy each step is where it is:\n1. Regulate — a sharp reply sent now costs more than the whole conversation is worth.\n2. Label — the word is much easier to find thirty seconds later.\n3. Situation — explaining what set it off only helps once you can say it evenly.\n\nMindset: the goal in this moment is not to handle it well. It is to not handle it badly, and to keep the conversation available for later.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A disagreement is escalating and you can feel a sharp reply forming.",
          steps: [
            { front: "Step 1 · Buy the time — they say: \"I don't see what the problem is.\"", back: "\"Can we pause a second? I want to answer this properly rather than quickly.\"" },
            { front: "Step 2 · Put a word on it — they wait, and the heat drops a little", back: "\"Okay. I'm frustrated, and I think a bit embarrassed too.\"" },
            { front: "Step 3 · Say what set it off — they say: \"Embarrassed about what?\"", back: "\"The bit in front of everyone. That's the part that got me, not the decision.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are twenty minutes from a performance and the nerves are climbing.",
          steps: [
            { front: "Step 1 · Buy the time — someone asks if you are ready", back: "\"Give me two minutes outside — I need to breathe for a second.\"" },
            { front: "Step 2 · Put a word on it — they follow you out", back: "\"I'm nervous and excited at the same time and I can't separate them.\"" },
            { front: "Step 3 · Say what set it off — they say: \"You've done this loads of times.\"", back: "\"I know. It's the front row being people I actually know that's done it.\"" },
          ]
        },
      ]
    },
    {
      name: "Helping Someone Else Name It",
      guideFront: "Take the next step in putting it into words.",
      guideBack: "One line you could say here.",
      description: "The listener's version, for when someone else is the one with the feeling. Steps: 1) Label Their Emotion — offer a word to try on, 2) Ask what triggered it — let them locate the moment, 3) Reflect it back — say what you have understood.\n\nThis is the same skill from the other chair. Your job is not to solve anything; it is to hand over words until one of them fits.\n\nWhat each step is doing:\n1. Offering the word — much easier to recognise a feeling than to produce one.\n2. Asking the trigger — moves it from a mood to a moment, which is where it becomes talkable.\n3. Reflecting back — lets them hear it from outside, and lets them correct you.\n\nMindset: being slightly wrong is useful. \"No, not angry — embarrassed\" is them getting closer, which is the whole point of the exercise.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend is telling you about being left out of a group plan.",
          steps: [
            { front: "Step 1 · Offer a word — they say: \"It's fine, it's not a big deal.\"", back: "\"It sounds like you felt left out, though.\"" },
            { front: "Step 2 · Ask what set it off — they say: \"…yeah, a bit.\"", back: "\"What was the moment? Finding out, or that nobody mentioned it after?\"" },
            { front: "Step 3 · Say it back — they say: \"That nobody mentioned it.\"", back: "\"So it's less the plan and more that everyone acted like it hadn't happened.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague is describing being corrected in front of the whole team.",
          steps: [
            { front: "Step 1 · Offer a word — they say: \"Anyway, it was fine, it's done.\"", back: "\"That sounds like it was pretty embarrassing, honestly.\"" },
            { front: "Step 2 · Ask what set it off — they say: \"It was, a bit.\"", back: "\"Was it being corrected, or being corrected there?\"" },
            { front: "Step 3 · Say it back — they say: \"The second one. I'd have been fine one to one.\"", back: "\"So it wasn't the feedback, it was the audience.\"" },
          ]
        },
      ]
    },
  ],
  conflictemotions: [
    {
      name: "The Whole Thing",
      guideFront: "The step you are on — say your version out loud.",
      guideBack: "One way it could sound.",
      description: "The full expression: what happened, what you felt, what you need, what you would like, and then their side.\n\nThe first four are a monologue — you say them as one continuous piece before they answer. Read the step, say your own version out loud, then turn the card.\n\nThe order does real work. The event first means nothing is arguable yet. The feeling second means it arrives attached to something concrete. The need third turns it from a complaint into something solvable, and the request fourth gives them somewhere to go.\n\nMindset: each step earns the next. Stopping after the feeling is where most of these go wrong.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Your partner left the front door unlocked overnight. You found it in the morning. It has happened before, and you want to raise it without it becoming a row.",
          steps: [
            { front: "Step 1 · Say What Happened — the event only, no interpretation.", back: "\"When I came down this morning, the front door was unlocked.\"", guideFront: "Could a camera have recorded it?" },
            { front: "Step 2 · Name Your Feeling — one accurate word, owned as yours.", back: "\"I felt uneasy about it, and it stayed with me most of the morning.\"", guideFront: "\"I felt\", not \"you made me feel\"." },
            { front: "Step 3 · Say What You Need — what the feeling points at.", back: "\"Because I need to know the house is shut before I go to sleep.\"", guideFront: "The need, not their fault." },
            { front: "Step 4 · Make a Request — one small, doable thing.", back: "\"Could you check it on your way up? That's genuinely all I need.\"", guideFront: "Specific, small, and possible tomorrow." },
            { front: "Step 5 · Ask What They Felt — hand them the floor.", back: "\"How does that land? I know I've mentioned it before.\"", guideFront: "Ask before you have decided what they will say." },
          ]
        },
        {
          bundle: 'pro',
          situation: "A teammate did not contribute to a group project and you ended up covering it. You have to work with them again next term.",
          steps: [
            { front: "Step 1 · Say What Happened — the countable fact.", back: "\"The two sections you had ended up being done the night before.\"", guideFront: "One fact. No \"always\"." },
            { front: "Step 2 · Name Your Feeling — the accurate word, not the biggest one.", back: "\"I was disappointed, and pretty tired by the end of it.\"", guideFront: "Smaller is usually truer." },
            { front: "Step 3 · Say What You Need — the thing underneath.", back: "\"Because I need to be able to plan around what we've agreed.\"", guideFront: "What would be right, not what went wrong." },
            { front: "Step 4 · Make a Request — future-facing, so nobody has failed yet.", back: "\"Next time, could you tell me early if it's not going to happen?\"", guideFront: "Something they can actually do." },
            { front: "Step 5 · Ask What They Felt — genuinely.", back: "\"What was going on for you, though? It's not like you.\"", guideFront: "Ask without the answer prepared." },
          ]
        },
      ]
    },
    {
      name: "When It Gets Warm",
      guideFront: "The step you are on — say your version out loud.",
      guideBack: "One way it could sound.",
      description: "They defend themselves, or counter with something of their own, or the conversation heats up.\n\nThis is an exchange rather than a monologue. The move throughout is to concede what is fair, keep your own account unchanged, and return to the need — which is the part that cannot be argued with, because it is a statement about you.\n\nMindset: do not defend the account. Return to what you need.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You have raised the unlocked door and your partner responds with a grievance of their own.",
          steps: [
            { front: "Say What Happened — they say, \"You leave the hob on constantly.\"", back: "\"I do, sometimes. This one's about the door.\"" },
            { front: "Name Your Feeling — they say, \"So mine doesn't count?\"", back: "\"It does. I felt uneasy about the door, and I'd like to talk about the hob separately.\"" },
            { front: "Say What You Need — they say, \"It's always one rule for you.\"", back: "\"I need to be able to raise one thing without it becoming a list.\"" },
            { front: "Ask What They Felt — they say, \"Fine. Go on then.\"", back: "\"No — say the hob thing. I'd rather hear it than have it stored up.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You have said how something made you feel and they think the reaction is out of proportion.",
          steps: [
            { front: "Name Your Feeling — they say, \"It's not that big a deal.\"", back: "\"Maybe not to you. It's what I felt, though.\"" },
            { front: "Say What You Need — they say, \"You're making a thing out of nothing.\"", back: "\"It's a small thing that's about a bigger one. I need to feel planned around.\"" },
            { front: "Make a Request — they say, \"So what do you want me to do?\"", back: "\"Just a message when you know you'll be late. That's it.\"" },
            { front: "Ask What They Felt — they say, \"Alright, I can do that.\"", back: "\"And is there something in this from your side? You've seemed stretched.\"" },
          ]
        },
      ]
    },
    {
      name: "When They Bring It to You",
      guideFront: "The step you are on — say your version out loud.",
      guideBack: "One way it could sound.",
      description: "The same skill from the other chair. Someone is expressing a feeling to you, and what you do in the first thirty seconds decides whether it becomes a conversation or a row.\n\nThe moves are simple and hard: do not defend yet, find the need under the feeling, and ask before you explain. Your explanation is probably true, and it will land far better after they have been heard than instead of it.\n\nMindset: their account first, your side second. Both get said — the order is what matters.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend tells you they were hurt that you cancelled on them again.",
          steps: [
            { front: "Ask What They Felt — they say, \"It's the third time you've cancelled.\"", back: "\"Say the rest. What was it like when the message came?\"" },
            { front: "Say What They Need — they say, \"Like I'm the one who always fits round you.\"", back: "\"So it's about being planned around rather than about Saturday.\"" },
            { front: "Name Your Feeling — they say, \"Yes. Exactly that.\"", back: "\"That's fair, and I feel pretty rubbish hearing it, which probably means it's true.\"" },
            { front: "Make a Request — they say, \"I'm not trying to make you feel bad.\"", back: "\"I know. Can we put something in the diary now, so it's not me proposing and cancelling?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague says they felt undermined by something you said in a meeting.",
          steps: [
            { front: "Ask What They Felt — they say, \"That comment in the meeting wasn't great.\"", back: "\"Tell me what it was like from your side.\"" },
            { front: "Say What They Need — they say, \"It made it look like I hadn't checked.\"", back: "\"So it's about how it looked to the room, more than the point itself.\"" },
            { front: "Name Your Feeling — they say, \"Yes, mostly.\"", back: "\"That wasn't what I meant, and I can see it did that. I'm annoyed with myself, honestly.\"" },
            { front: "Make a Request — they say, \"I just didn't want to let it sit.\"", back: "\"I'm glad you didn't. Tell me in the moment next time if you can — I'd rather fix it there.\"" },
          ]
        },
      ]
    },
  ],
  rolebasedhumour: [
    {
      name: "Stay in Character",
      guideFront: "Keep the bit going — this part next.",
      guideBack: "One way it could sound.",
      description: "The basic shape of a bit, and the part most people get wrong. Steps: 1) answer in role, 2) hold the role when they react to it, 3) break character warmly and land it.\n\nAlmost nobody fails at step one. What kills a bit is abandoning it the moment the other person reacts, and never getting out of it cleanly at the end.\n\nThe shape of the whole thing:\n1. \"That sounds like too much work. Maybe tomorrow.\"\n2. \"Tomorrow me is a completely different and much stronger person.\"\n3. \"Right, fine, I'll come. What time?\"\n\nStep 3 is the one to practise. Dropping the role yourself, warmly, is what tells the other person the bit is over and the real conversation is back.\n\nMindset: get in, commit, get out. Three beats is a bit; one beat is a line and six is a hostage situation.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend suggests a run and you decide to play the lazy one.",
          steps: [
            { front: "Step 1 · Answer in role — they say: \"Let's go for a run.\"", back: "\"That sounds like an enormous amount of work. Maybe tomorrow.\"" },
            { front: "Step 2 · Hold it — they say: \"You said that yesterday.\"", back: "\"Tomorrow me is a completely different and much stronger person.\"" },
            { front: "Step 3 · Break out warmly — they laugh and wait", back: "\"Right, fine. Give me ten minutes and I'm in.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague mentions the coffee has run out and you play the invincible hero.",
          steps: [
            { front: "Step 1 · Answer in role — they say: \"We're out of coffee.\"", back: "\"I stopped needing coffee in 2019. I run on pure resolve now.\"" },
            { front: "Step 2 · Hold it — they say: \"You had two this morning.\"", back: "\"Those were for flavour. Not need. Never need.\"" },
            { front: "Step 3 · Break out warmly — they are grinning", back: "\"Okay, I'm going to the shop. Do you want one?\"" },
          ]
        },
      ]
    },
    {
      name: "Escalate the Bit",
      guideFront: "Keep the bit going — this part next.",
      guideBack: "One way it could sound.",
      description: "The version where the same role gets bigger over three beats. Steps: 1) a mild in-role line, 2) push it further, 3) go fully absurd, then out.\n\nThe escalation is what turns a single joke into something people remember. Each beat has to be recognisably the same role, just with the dial turned up.\n\nWhy it works in three:\n1. First beat — establishes the role, small enough to be deniable.\n2. Second beat — confirms it is deliberate, which is where the laugh usually is.\n3. Third beat — absurd enough that it obviously has to end there.\n\nMindset: three is the number. A fourth beat is nearly always the one where the room decides you have taken it further than they wanted to go.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Someone asks to borrow a pen and you play the super stingy one.",
          steps: [
            { front: "Step 1 · Small — they say: \"Can I borrow a pen?\"", back: "\"Hm. That's a big ask.\"" },
            { front: "Step 2 · Bigger — they say: \"It's a pen.\"", back: "\"This pen came over with my grandmother.\"" },
            { front: "Step 3 · Absurd, then out — they hold their hand out", back: "\"Two pounds an hour and it never leaves this room. Here, take it.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A friend says the food tastes bad and you play the mock-offended one.",
          steps: [
            { front: "Step 1 · Small — they say: \"This food tastes bad.\"", back: "\"Right. Okay. Noted.\"" },
            { front: "Step 2 · Bigger — they say: \"What? It does.\"", back: "\"I made the salad. But no, go on.\"" },
            { front: "Step 3 · Absurd, then out — they are laughing", back: "\"I'll accept a written apology and a biscuit. Honestly though, you're right, it's awful.\"" },
          ]
        },
      ]
    },
    {
      name: "Play Along",
      guideFront: "Keep the bit going — this part next.",
      guideBack: "One way it could sound.",
      description: "What to do when somebody starts a role at you. Steps: 1) recognise it and answer in a matching role, 2) hold both roles for a beat, 3) drop out together.\n\nThe classic version of this exercise has you swap roles between rounds. But in real conversation the far more common situation is somebody starting a bit and you deciding whether to join.\n\nHow to match:\n1. Same role — two bossy leaders fighting over a kettle.\n2. Opposite role — their generous against your stingy.\n3. The straight man — stay completely ordinary while they escalate.\n\nThe third is underrated. Playing it completely straight while someone else goes bigger is often funnier than joining them, and it is the version that works when you cannot think of a role.\n\nMindset: joining a bit is a gift. Ignoring one is the only genuinely cold response available here.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend starts playing the bossy leader about who makes the tea.",
          steps: [
            { front: "Step 1 · Match it — they say: \"You sit there. I'm running this kitchen.\"", back: "\"Absolutely not. I have seniority in this kitchen.\"" },
            { front: "Step 2 · Hold it — they say: \"On what grounds?\"", back: "\"I've been standing here since before you arrived. That's the law.\"" },
            { front: "Step 3 · Drop out together — they crack", back: "\"Shall we just both make one?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague goes into the invincible hero about fixing the printer.",
          steps: [
            { front: "Step 1 · Play it straight — they say: \"Stand back. I fix these with my hands.\"", back: "\"Okay. It's the paper tray, I think.\"" },
            { front: "Step 2 · Stay straight — they say: \"I've fixed hundreds of these.\"", back: "\"Great. It's still the paper tray.\"" },
            { front: "Step 3 · Let them land it — the printer starts", back: "\"Extraordinary. Genuinely. Well done.\"" },
          ]
        },
      ]
    },
  ],
  masculine1: [
    {
      name: "Conflict to Connection",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "A sequence to turn a fight around: Hear the Pain, Not the Blame → The Do-Over → Narrowing the Scope.\nFirst, you give her \"emotional oxygen,\" then you correct your own mistake, and finally, you offer a concrete solution.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You forgot to fix something in the house she's asked about for weeks. She is now furious and calling you \"irresponsible.\"",
          steps: [
            { front: "Hear the Pain — she snaps: \"You never care about what I need!\"", back: "\"I hear that you feel alone and let down in this, and I understand that.\"" },
            { front: "Do-Over — she still looks skeptical.", back: "\"Can I have a do-over? I see I've been irresponsible and I want to show you I take you seriously.\"" },
            { front: "Narrowing the Scope — you offer a concrete solution.", back: "\"I'll fix it right now, and going forward I'll put our household tasks in my calendar.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You promised to have a focused dinner date, but you keep looking at your phone. She gets upset and tells you that you are selfish.",
          steps: [
            { front: "Hear the Pain — she snaps: \"Your work is always more important than me!\"", back: "\"I hear that you're feeling forgotten and unimportant right now, and I see how much that hurts.\"" },
            { front: "The Do-Over — you want to defend yourself.", back: "\"Wait, can we have a do-over? I was defending my phone use instead of being present with you. I'm putting it away.\"" },
            { front: "The \"When You...\" Stem — you share your anxiety cleanly.", back: "\"When I get these work alerts, I feel anxious about failing at my job, but I'm choosing to focus on us now.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You come home to a chaotic house. She starts criticizing you for not helping enough.",
          steps: [
            { front: "Hear the Pain — she snaps: \"I have to do everything around here while you just relax!\"", back: "\"I hear how completely exhausted and overwhelmed you are with the house right now.\"" },
            { front: "The Do-Over — you feel the urge to lecture her on efficiency.", back: "\"Let's do a do-over. I started listing my own chores instead of hearing how hard this is for you.\"" },
            { front: "Narrowing the Scope — you provide immediate structure.", back: "\"Let's sit down and handle this pile together for 20 minutes right now.\"" },
          ]
        },
      ]
    },
    {
      name: "Lead the Dance",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Setting direction and providing structure to reduce her decision-making burden: Narrowing the Scope → The \"When You...\" Stem → Narrowing the Scope. It works because you proactively narrow the wide-open scope of decisions, share your truth inarguably, and then drive a clear proposal forward.\n\n• Narrowing the Scope — reduce uncertainty by proposing limited options\n• The \"When You...\" Stem — state your boundaries and preferences clearly\n• Narrowing the Scope — guide the final decision with decisive clarity\n\nMindset: your clarity is a gift of structure you give her, not a burden you place on her.",
      inputs: [
        {
          bundle: 'pro',
          situation: "She is stressed about the upcoming weekend and keeps asking \"What are we doing?\" in an anxious tone.",
          steps: [
            { front: "Narrowing the Scope — she asks: \"Are we going to be stuck at home all day?\".", back: "\"I suggest we do a hike on Saturday morning and relax Sunday. Does that work for you?\"" },
            { front: "The \"When You...\" Stem — she complains that the hike will be too tiring.", back: "\"When you worry about the energy, I feel anxious about planning, but I want us to have an adventure.\"" },
            { front: "Narrowing the Scope — she is still hesitant.", back: "\"I've researched these two short trails. Let's choose the lake trail—it's only an hour.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "She is obsessing over the logistics of the house and trying to manage your schedule.",
          steps: [
            { front: "The \"When You...\" Stem — she hands you a list of chores.", back: "\"When I get a long list of tasks without warning, I feel pressured and I want to withdraw.\"" },
            { front: "Narrowing the Scope — she sighs and looks frustrated.", back: "\"I'll handle the garage and the lawn on Saturday morning. Does that cover the main things?\"" },
            { front: "Narrowing the Scope — she asks what she should do.", back: "\"You focus on the kitchen prep. I'll take care of the rest so you don't have to think about it.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You need to have a serious talk about the budget because she has been spending heavily.",
          steps: [
            { front: "Narrowing the Scope — you initiate the conversation.", back: "\"Let's sit down for 15 minutes tonight to plan our monthly savings goal.\"" },
            { front: "The \"When You...\" Stem — she gets defensive: \"You're always trying to control my spending!\".", back: "\"When we don't have a clear savings target, I feel worried about our future stability, and I need safety.\"" },
            { front: "Narrowing the Scope — she softens and agrees.", back: "\"I've run the numbers. We can save either 500 or 800 this month. What works best for our budget?\"" },
          ]
        },
      ]
    },
    {
      name: "Weather the Storm",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Standing strong in the face of her powerful emotional tsunamis: Hear the Pain, Not the Blame → Refusing the Rejection → The \"When You...\" Stem. It works because you refuse to get hooked by her accusations, hold a safe container through her storm, and then speak your truth from a grounded place.\n\n• Hear the Pain, Not the Blame — ignore the toxic surface to meet her underlying hurt\n• Refusing the Rejection — stay present even if she tells you to leave\n• The \"When You...\" Stem — share your own boundaries without defensiveness\n\nMindset: be more committed to the connection than you are afraid of her intensity.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You had to cancel plans with her at the last minute because of an urgent work issue. She is furious.",
          steps: [
            { front: "Hear the Pain — she shouts: \"You always let me down! You only care about yourself!\".", back: "\"I hear how incredibly disappointed and let down you are right now, and I'm sorry.\"" },
            { front: "Refusing the Rejection — she turns her back and says: \"Just go away! I don't want to talk to you.\"", back: "\"I'm going to stay right here with you. I'm not running away from this.\"" },
            { front: "The \"When You...\" Stem — she cries in frustration.", back: "\"When I have to choose between work and you, I feel torn and anxious, but you are my priority.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "She is emotional and angry about how you handled your child's study habits, accusing you of being a bad father.",
          steps: [
            { front: "Hear the Pain — she snaps: \"You don't care about our son's future at all!\".", back: "\"I hear your deep fear for our son, and I know how much you want him to succeed.\"" },
            { front: "Refusing the Rejection — she walks away to the kitchen: \"You're impossible to talk to.\"", back: "(Follow her, and lean against the counter.) \"I'm not walking away from this. Take the time you need.\"" },
            { front: "The \"When You...\" Stem — she looks up at you, still tense.", back: "\"When you call me a bad father, I feel deeply hurt and defensive, but I want us to lead together.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "She is feeling insecure and tests your commitment by asking if you are bored of her.",
          steps: [
            { front: "Hear the Pain — she says sarcastically: \"I'm sure you'd rather be with someone younger.\"", back: "\"I hear that you're feeling insecure about my love right now, and it hurts me to see you doubt.\"" },
            { front: "Refusing the Rejection — she pulls away when you try to hold her: \"Don't touch me.\"", back: "(Let your hands drop, and stay where you are.) \"All right. I'm still here.\"" },
            { front: "The \"When You...\" Stem — she softens slightly.", back: "\"When you pull away from me, I feel disconnected, but I am completely devoted to you.\"" },
          ]
        },
      ]
    },
  ],
  masculine2: [
    {
      name: "From Shutdown to Radiance",
      guideFront: "What she said, and the strategy you respond with.",
      guideBack: "How it could sound.",
      description: "A repair sequence: Shared Reality → Feelings First → Tangible Action → Praise.\nThis moves from identifying the break to offering oxygen, fixing the behavior, and finally re-polarizing.",
      inputs: [
        {
          bundle: 'pro',
          situation: "She complained that you're always on your phone. You reacted by listing all the work you had to do. She is now shut down and cold.",
          steps: [
            { front: "Shared Reality — \"When I defended my phone use, did it feel like your needs don't matter to me?\"", back: "\"I want to understand. Did I make you feel invisible?\"" },
            { front: "Feelings First — she nods and says, \"Yeah, it did.\"", back: "\"That makes sense. I see that I chose my phone over you, and I'm sorry.\"" },
            { front: "Tangible Action — offering a container.", back: "\"From now on, I'll put my phone in the drawer from 6 PM to 8 PM so I can be fully with you.\"" },
            { front: "Praise — re-establishing attraction.", back: "\"I missed your smile. You're the most important part of my day.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You cancelled your dinner date at the last minute because of an urgent work emergency. She is now cold and won't look at you.",
          steps: [
            { front: "Shared Reality — \"When I cancelled our date, did it feel like you and our time don't matter to me?\"", back: "\"I want to understand your perspective. Did my late cancel make you feel unimportant?\"" },
            { front: "Feelings First — she says, \"Yes, it did. I was looking forward to it all week.\"", back: "\"That makes sense. I see how much that let you down, and I'm really sorry.\"" },
            { front: "Tangible Action — offering a container.", back: "\"To prevent this, I'll block out Friday nights as non-negotiable for work, starting this week.\"" },
            { front: "Praise — re-establishing attraction.", back: "\"I love spending focused time with you. You look absolutely beautiful tonight.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You promised to fix the leaking kitchen sink before her parents arrived, but you forgot. She is now furious and giving you the silent treatment.",
          steps: [
            { front: "Shared Reality — she sighs and looks away.", back: "\"When I forgot the sink, did it make you feel like I don't care about our home's safety?\"" },
            { front: "Feelings First — she snaps: \"Yes, I feel like I'm alone in managing this house.\"", back: "\"I hear how exhausting that must feel. It's completely valid that you're angry, and I'm sorry.\"" },
            { front: "Tangible Action — offering a container.", back: "\"I'll call the plumber first thing tomorrow morning and handle the payment myself.\"" },
            { front: "Praise — re-establishing attraction.", back: "\"You've worked so hard to get the house ready. You are an amazing partner, and I want to support you.\"" },
          ]
        },
      ]
    },
    {
      name: "From Chaos to Order",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Getting Shared Reality → Vocalizing the Boundary → The Tangible Action Proposal. This sequence trains you to handle her anxious attempts to manage you: first you check her internal logic, then you set a firm boundary, and finally you take decisive action.\n\n1. Getting Shared Reality — understand her underlying anxiety\n2. Vocalizing the Boundary — stop her from controlling or shaming you\n3. The Tangible Action Proposal — offer a concrete, structured solution\n\nWhy just this order: you must understand the anxiety before setting the boundary, and you must protect respect before offering the solution. What people do instead: they argue about her tone, get defensive, and leave the logistical mess unresolved. Mindset: a woman only tries to control you when she doesn't trust your capacity to lead.",
      inputs: [
        {
          bundle: 'pro',
          situation: "She is anxious about packing for the upcoming beach trip and starts criticizing your packing method, trying to take over.",
          steps: [
            { front: "Getting Shared Reality — she tells you that you are doing it all wrong.", back: "\"When you criticize my packing, are you feeling anxious that we won't have enough space?\"" },
            { front: "Vocalizing the Boundary — she sighs and tries to grab the bags from your hands.", back: "\"I hear your worry, but I won't be micromanaged. I've got this packing handled.\"" },
            { front: "The Tangible Action Proposal — you propose a clear plan.", back: "\"I'll pack the heavy gear in the trunk now, and I'll leave the back seat completely free for your bags.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "She is looking at the monthly bills and starts snapping at you, accusing you of being irresponsible with money.",
          steps: [
            { front: "Getting Shared Reality — she complains that you spend too much on your hobbies.", back: "\"When you look at the bills, are you feeling financially unsafe about our future?\"" },
            { front: "Vocalizing the Boundary — she says a real provider would care more.", back: "\"I want to talk about our budget, but I won't be shamed about my hobbies. Let's speak calmly.\"" },
            { front: "The Tangible Action Proposal — you propose a clear plan.", back: "\"Let's sit down on the first of every month to review our shared savings goal and expenses.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You see the garage is a mess. She starts nagging you in a harsh, demanding tone to clean it up immediately.",
          steps: [
            { front: "Getting Shared Reality — she yells that she can't stand the clutter anymore.", back: "\"When the garage is messy, does it make you feel like the house is chaotic and out of control?\"" },
            { front: "Vocalizing the Boundary — she keeps demanding that you stand up and do it now.", back: "\"No, Love, we're not doing this. I won't respond to a demanding tone. Let's find connection.\"" },
            { front: "The Tangible Action Proposal — you propose a clear plan.", back: "\"I'm going to spend two hours on Saturday morning cleaning the garage. Don't worry about it.\"" },
          ]
        },
      ]
    },
    {
      name: "Re-Polarizing the Room",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Feelings First, Facts Later → Leading with Praise → The Tangible Action Proposal. This sequence trains you to melt her shutdown or irritability: first you validate her feelings, then you praise her Feminine radiance, and finally you offer structure.\n\n1. Feelings First, Facts Later — offer emotional oxygen to lower her defenses\n2. Leading with Praise — build polarity by expressing your genuine desire for her\n3. The Tangible Action Proposal — take charge of the solution to relieve her burden\n\nWhy just this order: you must validate her feelings first because logic doesn't work in a storm; then praise re-establishes attraction before you offer the solution. What people do instead: they offer immediate practical fixes while she is upset, which feels like emotional neglect to her. Mindset: do not argue with her weather; be the unswayable Oak that welcomes her storm.",
      inputs: [
        {
          bundle: 'pro',
          situation: "She comes home from an exhausting day at work, looking highly irritable, stressed, and completely shut down.",
          steps: [
            { front: "Feelings First, Facts Later — she complains that the kitchen is messy and sighs heavily.", back: "\"I see how heavy and stressful your day was, Love. You can let all that frustration out here.\"" },
            { front: "Leading with Praise — she collapses onto the couch.", back: "\"Even when you're completely exhausted, there is so much beauty in you. I missed your radiance today.\"" },
            { front: "The Tangible Action Proposal — taking charge of the dinner.", back: "\"Let's do this: go take a warm bath, and I'll order our favorite sushi right now.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "She is getting ready for a date night, feeling self-conscious and complaining that nothing she wears looks good on her.",
          steps: [
            { front: "Feelings First, Facts Later — she sighs: \"I look so tired and old tonight.\"", back: "\"I hear how much pressure you're feeling to look perfect, and how frustrating that is.\"" },
            { front: "Leading with Praise — she looks in the mirror with disapproval.", back: "\"The truth is you look absolutely hot in that black dress. My eyes are entirely on you.\"" },
            { front: "The Tangible Action Proposal — guiding the evening.", back: "\"I've handled all the reservations. Relax, get your coat, and I'll drive us to the restaurant.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "She is highly anxious and complaining about how hard it is to coordinate the kids' school schedules.",
          steps: [
            { front: "Feelings First, Facts Later — she snaps that she has to think of everything herself.", back: "\"I hear how alone and overwhelmed you feel in managing the kids right now.\"" },
            { front: "Leading with Praise — she looks up, surprised by your calm presence.", back: "\"I love how deeply you care for our children. You're an amazing mother, and I'm right here.\"" },
            { front: "The Tangible Action Proposal — you take over a logistical chunk.", back: "\"I'll take complete responsibility for the school runs and lunches for the next two weeks.\"" },
          ]
        },
      ]
    },
  ],
  masculine3: [
    {
      name: "The Brave Lead",
      guideFront: "What she said, and the strategy you respond with.",
      guideBack: "How it could sound.",
      description: "A high-stakes sequence: Intentional Pause → Fear Underneath → Heartful \"Ouch\" → Direct Initiation.\nThis moves from self-regulation to vulnerable truth, and finally back to powerful leadership.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You have been fighting all morning. She is now cold and says \"Maybe we shouldn't have gone on this trip.\" You feel panic and anger.",
          steps: [
            { front: "Intentional Pause — \"I'm starting to react and I don't want to. Let's take 15 minutes.\"", back: "\"I need a pause. I'm getting triggered and I want to stay connected to you.\"" },
            { front: "Fear Underneath — (After 15 minutes)", back: "\"When you said we shouldn't have come, I felt terrified that you're giving up on us.\"" },
            { front: "Heartful \"Ouch\" — she snaps back with something defensive.", back: "\"Ouch. That hurts. I'm trying to be vulnerable here, Love.\"" },
            { front: "Direct Initiation — (Later that evening, the air is clear)", back: "\"I've missed you today. Come here and let's just breathe together.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are getting ready for your anniversary dinner, but you start fighting about finances. She screams that you are irresponsible.",
          steps: [
            { front: "The Intentional Pause — you feel a massive wave of anger.", back: "\"Baby, I'm getting triggered. Let's pause for ten minutes so I can stay present with you.\"" },
            { front: "Sharing the Fear Underneath — you meet her in the living room after ten minutes.", back: "\"When you call me irresponsible, I feel a lot of shame. I worry that you think less of me.\"" },
            { front: "The Heartful \"Ouch\" — she snaps back defensively that she has to worry about everything.", back: "\"Ouch. That really hurts to hear.\"" },
            { front: "Direct Sexual Initiation — later that night, the connection is restored.", back: "\"I've missed your body. Come here.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are packing the car for a trip, but she is highly anxious and snaps that you always ruin their holidays.",
          steps: [
            { front: "The Intentional Pause — you notice yourself clenching.", back: "\"I want to be your rock, but I need to breathe for a minute. Can we take a short break?\"" },
            { front: "Sharing the Fear Underneath — you re-engage on the porch.", back: "\"When you say I ruin everything, I feel like you don't trust my lead, and that's hard for me.\"" },
            { front: "The Heartful \"Ouch\" — she dismisses you coldly.", back: "\"That comment hurt me. I'm going to take a minute so I don't react.\"" },
            { front: "Direct Sexual Initiation — that evening at the cabin, the tension has melted.", back: "\"You look absolutely hot tonight. Put your phone away—no world talk allowed.\"" },
          ]
        },
      ]
    },
    {
      name: "Settle and Share",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "The Intentional Pause → Sharing the Fear Underneath → The Heartful \"Ouch\". This sequence trains you to halt escalating conflict, ground your nervous system, and re-establish heart connection through vulnerable truth.\n\n1. The Intentional Pause — step back to stop the reactive loop\n2. Sharing the Fear Underneath — speak from your heartspace about what is actually threatened\n3. The Heartful \"Ouch\" — acknowledge her attacks without defending or shut-downs\n\nWhy just this order: you must stop the storm before you can speak your truth, and you must own your vulnerability before you can receive her feedback cleanly. What people do instead: they argue, shout, and withdraw into cold silence, which breaks trust. Mindset: a strong man rules his emotional world by staying present.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You come home to a chaotic living room. She is exhausted and starts screaming that you are lazy and never help.",
          steps: [
            { front: "The Intentional Pause — you feel the urge to shout back.", back: "\"Baby, I'm getting triggered. Let's pause for ten minutes so I can stay present with you.\"" },
            { front: "Sharing the Fear Underneath — you re-engage in the kitchen.", back: "\"When you say I never help, I feel anxious that I'm failing as your partner.\"" },
            { front: "The Heartful \"Ouch\" — she snaps that she's just tired of doing everything.", back: "\"Ouch. I hear how much you're hurting right now.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are discussing a large purchase, but she gets highly emotional and accuses you of only caring about your own hobbies.",
          steps: [
            { front: "The Intentional Pause — you feel yourself clenching up.", back: "\"I'm losing my presence. Let's take a short break and try again in ten minutes.\"" },
            { front: "Sharing the Fear Underneath — you sit down close to her.", back: "\"When we fight about money, I feel anxious about our security, and I worry I can't provide.\"" },
            { front: "The Heartful \"Ouch\" — she rolls her eyes and sighs heavily.", back: "\"Ouch. That hits a really sore spot for me.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "She is furious about how you disciplined your son, accusing you of being too harsh and uncaring.",
          steps: [
            { front: "The Intentional Pause — you feel your mind starting to lock up.", back: "\"I want to hear you, but I need ten minutes to settle my system so I don't react.\"" },
            { front: "Sharing the Fear Underneath — you meet her in the bedroom.", back: "\"When you say I'm uncaring, I feel deeply hurt and scared that you don't respect my parenting.\"" },
            { front: "The Heartful \"Ouch\" — she tells you that she doesn't trust your judgment.", back: "\"That really hurts to hear, Love. But I'm listening.\"" },
          ]
        },
      ]
    },
    {
      name: "The Intimate Lead",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Direct Sexual Initiation → Slowing Down the Sequence. This sequence trains you to take bold sexual charge while decelerating the interaction to build safety and deep energetic arousal.\n\n1. Direct Sexual Initiation — own your desire cleanly without tentative begging\n2. Slowing Down the Sequence — move three times slower than natural to build safety\n\nWhy just this order: you must assert your direction first so she knows where you are heading, and then slow down so her Feminine physiology can catch up and open. What people do instead: they grope her indirectly, seek permission, and then rush straight to intercourse. Mindset: my desire is a gift of structure and polarity.",
      inputs: [
        {
          bundle: 'pro',
          situation: "The relationship has felt like a \"roommate\" dynamic for weeks. You decide to take bold action on a Sunday afternoon.",
          steps: [
            { front: "Direct Sexual Initiation — you hold eye contact and take her hand.", back: "\"I've missed your body, Love. Let's get in bed together right now.\"" },
            { front: "Slowing Down the Sequence — you are on the bed and begin to embrace her.", back: "(Approach her lips three times slower than usual, letting the tension build)." },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are out at a nice restaurant. She looks incredibly beautiful, and you want to build sexual tension.",
          steps: [
            { front: "Direct Sexual Initiation — you look her in the eye across the table.", back: "\"You look absolutely hot in that dress. I can't wait to get you home and have my way with you.\"" },
            { front: "Slowing Down the Sequence — you arrive home and pull her close.", back: "(Touch her face with slow, steady pressure, moving your hands at a crawl)." },
          ]
        },
        {
          bundle: 'pro',
          situation: "She is stressed after a long day at the office, endlessly planning her tomorrow. You decide to lead her into her body.",
          steps: [
            { front: "Direct Sexual Initiation — you gently take her phone from her hands.", back: "\"Put your phone away. I've created a container for us tonight—no world talk allowed.\"" },
            { front: "Slowing Down the Sequence — you invite her to lay down.", back: "(Use a flat, open hand to massage her shoulders, moving three times slower than natural)." },
          ]
        },
      ]
    },
  ],
  masculine4: [
    {
      name: "Taming the Trigger",
      guideFront: "What she said, and the strategy you respond with.",
      guideBack: "How it could sound.",
      description: "A sequence for when you are triggered: Sign-Seeking Pause → Reality Test → Identifying Shadow → Grounded Lead.\nThis moves from identifying the internal panic to choosing a Masculine response.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You just shared a dream about a new business, and she snapped: \"You'll never make enough money doing that.\" You feel a massive wave of shame and anger.",
          steps: [
            { front: "Sign-Seeking Pause — \"Am I wanting her to think I'm smart and capable? Yes. I release that need.\"", back: "\"deep down, I want her approval. I choose to let go of that sign.\"." },
            { front: "Reality Test — (Breathe) \"Look at the room. I am safe. I am not a boy in trouble. I am a man.\"", back: "(Internal move) \"I am physically safe. Her opinion doesn't define my worth.\"." },
            { front: "Identifying Shadow — \"I want to attack back (Blame) or hide (Contraction). I choose to stay present.\"", back: "\"I'm in a Blame strategy right now. I'm stopping the counter-attack.\"." },
            { front: "Grounded Lead — You share the truth underneath.", back: "\"Ouch. That comment hurts because my career is important to me. I need your support, not mocks.\"." },
          ]
        },
        {
          bundle: 'pro',
          situation: "You proposed a family vacation budget. She rolls her eyes and sighs: \"You always make bad financial decisions, we'll end up broke.\"",
          steps: [
            { front: "Sign-Seeking Pause — You feel the urge to plead for her trust.", back: "(Pause. Breathe. Release the need for her instant agreement.)" },
            { front: "Reality Test — You look around the room to ground yourself.", back: "\"I am physically safe in this room. Her anxiety cannot destroy me.\"" },
            { front: "Identifying Shadow — You realize you want to defend yourself or walk away.", back: "\"I'm in a Defense strategy, trying to correct her facts. I'm stopping the debate.\"" },
            { front: "Grounded Lead — You convert your anger to set a clean boundary.", back: "\"I see how anxious you are about our money. But I won't be talked to like I'm irresponsible. Let's make this plan together.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You disciplined your son. She storms in and snaps: \"You're a terrible father, you're ruining him!\"",
          steps: [
            { front: "Sign-Seeking Pause — You feel a wave of shame and need her to think you're good.", back: "(Breathe. Settle into yourself. Release the need for her immediate approval.)" },
            { front: "Reality Test — You feel your body clenching up under her fire.", back: "(Reality Test) \"I am safe. These are just words. I will survive her anger.\"" },
            { front: "Identifying Shadow — You want to shut down or shout back.", back: "\"I'm in a Contraction strategy, wanting to hide. I choose to stay present in the fire.\"" },
            { front: "Grounded Lead — You speak the vulnerable truth underneath.", back: "\"That comment hurts because I care deeply about our son. I need us to parent as a team.\"" },
          ]
        },
      ]
    },
    {
      name: "Passing the Solidity Test",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Training you to stand firm during intense emotional storms: The Provocation Reality Test → Identifying the Shadow Strategy → Passing the Leader's Test.\n\n1. The Provocation Reality Test — ground your body to realize you are physically safe\n2. Identifying the Shadow Strategy — spot and stop your urge to contract, collapse, or defend\n3. Passing the Leader's Test — hold the pose and stay committed to the container\n\nWhy just this order: you must ground your nervous system before you can identify your reactive patterns, and you must stop those patterns before you can hold a steady, unshakeable frame.\nWhat people do instead: they panic, shout back, or storm out, which proves to her nervous system that they cannot handle her fire.\nMindset: her storm is transient weather; I am the Oak that stands unmoved.",
      inputs: [
        {
          bundle: 'pro',
          situation: "During an argument about household chores, she suddenly shouts: \"I can't stand looking at you! Get out of my face!\"",
          steps: [
            { front: "The Provocation Reality Test — You feel your jaw clench and your breath constricting.", back: "(Perform a body scan) \"I am clenching. I relax. I am safe in this room.\"" },
            { front: "Identifying the Shadow Strategy — You want to storm out and give her the cold shoulder.", back: "\"I'm in Contraction, trying to hide. I choose to go back and stay in the fire.\"" },
            { front: "Passing the Leader's Test — She stares at you, waiting to see if you snap.", back: "(Hold the pose. Breathe deep. Settle into the static of her anger.)" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You tell her you're going to the gym at 6 p.m. She gets upset: \"You're so selfish, you only care about yourself!\"",
          steps: [
            { front: "The Provocation Reality Test — You feel a wave of anxiety about her disapproval.", back: "(Reality Test) \"She is just a woman. These are just words. I will survive her anger.\"" },
            { front: "Identifying the Shadow Strategy — You want to say \"Fine, I won't go\" in a victimized tone.", back: "\"I'm in Collapse, trying to play the victim. I choose to stop and hold my frame.\"" },
            { front: "Passing the Leader's Test — She rolls her eyes and walks away, trying to goad you.", back: "\"Staying in shape is essential for me. I'm going to the gym now, and we'll connect at seven.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You made a mistake with a booking. She sighs in disgust: \"You always mess things up. I can't trust you.\"",
          steps: [
            { front: "The Provocation Reality Test — Your mind races with panic about being inadequate.", back: "(Reality Test) \"I am physically safe. Nothing can really hurt me in this room.\"" },
            { front: "Identifying the Shadow Strategy — You want to aggressively explain why the booking system was confusing.", back: "\"I'm in Defense, correcting her facts. I stop the logic and stay in my heart.\"" },
            { front: "Passing the Leader's Test — She watches you coldly, expecting a whiny excuse.", back: "(Hold the pose. Do not look for her approval. Let the tension settle.)" },
          ]
        },
      ]
    },
    {
      name: "Reclaiming the Frame",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Using clear boundaries and grounded action to guide her out of anxious control: The Sign-Seeking Pause → Converting Anger to Protection → Passing the Leader's Test.\n\n1. The Sign-Seeking Pause — stop looking for her approval before speaking your truth\n2. Converting Anger to Protection — use your anger as the clean energy to set a firm limit\n3. Passing the Leader's Test — hold the pose when she pushes back against your limit\n\nWhy just this order: you must stop seeking her permission first; only then can you set a clean, non-negotiable boundary, and you must be prepared to hold that boundary when she tests it.\nWhat people do instead: they hint, apologize for having needs, and cave the moment she gets annoyed.\nMindset: a strong man does not need her permission to protect the relationship's culture.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are at a dinner with friends, and she makes a sharp, sarcastic dig about your income.",
          steps: [
            { front: "The Sign-Seeking Pause — You feel the urge to laugh it off or look at her face for approval.", back: "(Pause. Breathe. Release the need for her immediate approval.)" },
            { front: "Converting Anger to Protection — You feel a rumble of anger and want to snap back.", back: "\"I am angry because respect in front of others is important to me. Let's keep things respectful.\"" },
            { front: "Passing the Leader's Test — She sighs and rolls her eyes, trying to make you feel like you overreacted.", back: "(Hold the pose. Stay grounded. Do not apologize or get defensive.)" },
          ]
        },
        {
          bundle: 'pro',
          situation: "She hands you a long list of chores on Saturday morning, telling you exactly when and how to do them.",
          steps: [
            { front: "The Sign-Seeking Pause — You feel the urge to anxiously agree just to keep the peace.", back: "(Notice the leaning in. Settle back into your own seat and need nothing.)" },
            { front: "Converting Anger to Protection — You feel angry about being managed like a child.", back: "\"I care about this house, but I won't be micromanaged. I'll handle my chores on my own timeline.\"" },
            { front: "Passing the Leader's Test — She gets upset: \"Fine, then I'll just do it all myself!\" to guilt-trip you.", back: "(Hold the pose. Let the drama cycle run its course without caving.)" },
          ]
        },
        {
          bundle: 'pro',
          situation: "During a heated discussion about holiday plans, she starts yelling and calls you a jerk.",
          steps: [
            { front: "The Sign-Seeking Pause — You feel panic and want to desperately please her to make her stop.", back: "(Catch the seeking. Breathe. Release the need for her to soften right now.)" },
            { front: "Converting Anger to Protection — You use your anger to establish a non-negotiable boundary.", back: "\"I'm angry right now. I love us too much to let us talk to each other this way.\"" },
            { front: "Passing the Leader's Test — She snaps: \"If you don't like it, then leave!\" to test your commitment.", back: "(Hold the pose. Do not run. Stay present in the fire but hold the line.)" },
          ]
        },
      ]
    },
  ],
  masculine5: [
    {
      name: "From Overwhelmed to Relaxed",
      guideFront: "What she said, and the strategy you respond with.",
      guideBack: "How it could sound.",
      description: "A sequence to handle her logistical stress: Shared Reality → Handle the Burden → Drive the Decision.\nIdentify the overwhelm, take the task off her plate, and provide the structure for what's next.",
      inputs: [
        {
          bundle: 'pro',
          situation: "She is in a bad mood, throwing items around and snapping at you because the living room is a disaster area.",
          steps: [
            { front: "Shared Reality — \"Is this bad mood because you feel overwhelmed by the house?\"", back: "\"I want to understand. Does the mess make you feel like you're in this alone?\"" },
            { front: "Handle the Burden — she nods and says \"YES!\".", back: "\"I've got this. Sit down and breathe for ten minutes. I'm going to clear the main area now.\"" },
            { front: "Drive the Decision — (15 minutes later)", back: "\"I've cleared the floor. I suggest we order in and watch that movie you liked. Sound good?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "She is crying at the kitchen table, surrounded by piles of tax receipts and folders.",
          steps: [
            { front: "Shared Reality — she is sobbing and won't look at you.", back: "\"Is this tears because you feel overwhelmed by the tax preparation?\"" },
            { front: "Handle the Burden — she nods and says \"Yes, it is too much.\"", back: "\"I've got this. Go take a warm bath. I'll organize these folders and enter them into the spreadsheet.\"" },
            { front: "Drive the Decision — an hour later, the folders are sorted.", back: "\"I've sorted the folders. I suggest we schedule thirty minutes on Saturday to review the final numbers. Sound good?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "She is frantically trying to clean up water from a leaking pipe under the bathroom sink, looking highly stressed.",
          steps: [
            { front: "Shared Reality — she snaps: \"This house is falling apart!\"", back: "\"Are you snapping because you feel alone and overwhelmed in dealing with this leak?\"" },
            { front: "Handle the Burden — she nods: \"I don't even know how to shut off the valve.\"", back: "\"I've got this, Love. Step back and let me handle the water. I'll take complete ownership of the cleanup.\"" },
            { front: "Drive the Decision — fifteen minutes later, the water is off.", back: "\"I've shut off the water. I suggest we call the emergency plumber now and let them handle the repair. Does that work?\"" },
          ]
        },
      ]
    },
    {
      name: "Securing the Foundation",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Track her Priorities → Stabilize the Frame → Establish the Container. This sequence trains you to manage her anxieties about the future by tracking her concerns, establishing stability, and setting firm relational boundaries.\n\n1. Track her Priorities — check in on her worries to show she is top of mind\n2. Stabilize the Frame — offer financial or structural plans to create safety\n3. Establish the Container — set clear rules of engagement to protect the relationship\n\nWhy just this order: you must track her worries first so she feels loved; then you offer structural stability, and finally you set a healthy container for connection. What people do instead: they ignore her anxiety until she gets angry, then they fight back and leave the finances unresolved. Mindset: delivering stability and boundaries is an act of deep Masculine love.",
      inputs: [
        {
          bundle: 'pro',
          situation: "She is looking at the monthly bills, sighing heavily and looking highly anxious about your savings.",
          steps: [
            { front: "Track her Priorities — she mutters about the costs.", back: "\"I've noticed you're feeling anxious about our savings lately. What's the biggest concern for you?\"" },
            { front: "Stabilize the Frame — she says she's scared the bottom will drop out.", back: "\"I hear your fear. I'm creating a clear plan for our savings so you can feel the floor beneath you.\"" },
            { front: "Establish the Container — she starts complaining that you spend too much on hobbies.", back: "\"No, Baby, we're not fighting about my hobbies. I want to connect. Let's speak from the heart.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Your lease is ending in two months, and she is stressed and constantly browsing rental listings.",
          steps: [
            { front: "Track her Priorities — she is endlessly scrolling on her phone at dinner.", back: "\"Are you feeling anxious about where we'll live next? Let me hear what's on your mind.\"" },
            { front: "Stabilize the Frame — she says she's scared we won't find a safe neighborhood.", back: "\"I've researched the safety and schools in these three areas. Here is my security plan for us.\"" },
            { front: "Establish the Container — she sighs and says we'll probably end up in a dump.", back: "\"We are going to find a great place. No negative talk on date night—tonight is just for connection.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You just experienced a sudden loss of income, and she is pacing the floor in a panic.",
          steps: [
            { front: "Track her Priorities — she looks at you with terror in her eyes.", back: "\"I see how terrified you are about our financial future. Tell me what feels most scary right now.\"" },
            { front: "Stabilize the Frame — she whispers that we might lose the house.", back: "\"The job is gone, but we have a buffer and I have a plan to get the next one. We are going to be okay.\"" },
            { front: "Establish the Container — she starts crying and shouting that you should have worked harder.", back: "\"I’m interested in your pain, but I won’t be insulted. Let's take a pause until we can speak from the heart.\"" },
          ]
        },
      ]
    },
    {
      name: "Leading the Connection",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Track her Priorities → Drive the Decision → Establish the Container. This sequence trains you to transition her from a stressed work-mind into a relaxed, connected space by tracking her world, driving plans, and establishing a positive container.\n\n1. Track her Priorities — show her she is top of mind by checking in on her day\n2. Drive the Decision — take charge of the evening's logistics to relieve her decision burden\n3. Establish the Container — set a firm boundary against distraction to protect your time together\n\nWhy just this order: you must validate her daily priorities first; then taking charge of plans allows her to relax, and establishing the container keeps your connection safe. What people do instead: they ask \"what do you want to do?\" and scroll on their phones, which kills polarity. Mindset: leading her into a healthy container is an act of love for the relationship.",
      inputs: [
        {
          bundle: 'pro',
          situation: "She comes home from an intense, exhausting day at the office, looking highly stressed and irritable.",
          steps: [
            { front: "Track her Priorities — she collapses onto the couch.", back: "\"I know you had that big presentation today. Tell me, how did it go?\"" },
            { front: "Drive the Decision — she sighs and says she's too tired to think about cooking.", back: "\"I suggest we order in sushi and do dinner on the couch. I've already handled the order.\"" },
            { front: "Establish the Container — she reaches for her phone to check work emails.", back: "\"Phones go in the drawer at eight. This is our time. No world-talk allowed.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "It's Saturday morning, and the day is open-ended and drifting into aimless tension.",
          steps: [
            { front: "Track her Priorities — she is quietly tidying up, looking flat.", back: "\"I've noticed you seem a bit distant today. Is there something emotionally alive for you?\"" },
            { front: "Drive the Decision — she says she's just feeling stuck and aimless.", back: "\"I suggest we hit the beach at noon and do dinner on the way back. I'll pack the cooler.\"" },
            { front: "Establish the Container — she starts complaining about her lazy brother on the phone.", back: "\"No, Baby, we're not doing family drama today. Let's make this day just about us. Come here.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "She is packing her bags for a business trip, looking highly anxious and second-guessing herself.",
          steps: [
            { front: "Track her Priorities — she is frantically checking her packing list.", back: "\"I know you're carrying a lot of stress for this trip. What's the hardest part of it today?\"" },
            { front: "Drive the Decision — she is overwhelmed by too many clothing options.", back: "\"Let's simplify. I like these two options best. Pack the black suit.\"" },
            { front: "Establish the Container — she gets snippy with you about where her charger is.", back: "\"No, Baby, we're not fighting right now. I want to connect before you leave. Come back to your heart.\"" },
          ]
        },
      ]
    },
  ],
  masculine6: [
    {
      name: "The Grounded Response",
      guideFront: "What you feel, and the somatic strategy you use.",
      guideBack: "The internal or external move.",
      description: "A somatic sequence: Watcher → Ujjayi Breath → Reality Test → Conscious Choice.\nStop the story, settle the system, verify safety, and choose the Masculine lead.",
      inputs: [
        {
          bundle: 'pro',
          situation: "She is shouting, her eyes are blazing, and you feel the \"Code Red\" threat response.",
          steps: [
            { front: "The Watcher — \"I see the 'Blame' shadow strategy starting. I see the story of unfairness.\"", back: "(Observe the thoughts without obeying them)." },
            { front: "Ujjayi Breath — you feel your chest clenching.", back: "(Perform one long, audible Ujjayi breath to settle your body chemistry)." },
            { front: "Reality Test — (Open eyes wide)", back: "\"I am sitting on the sofa. I am physically safe. She is just a woman in pain.\"." },
            { front: "Conscious Choice — you decide to speak.", back: "\"I hear that you're feeling alone, Baby. I'm right here.\" (Hear the pain, not the blame)." },
          ]
        },
        {
          bundle: 'pro',
          situation: "She is pacing around the kitchen, slamming cabinet doors, and starts shouting that you never clean up after yourself.",
          steps: [
            { front: "The Watcher — you feel the urge to defend yourself or get angry.", back: "\"I see the story of unfairness arising in my mind. I don't have to obey it.\"" },
            { front: "Ujjayi Breath — your chest is tightening.", back: "(Settle your chemistry with a deep, audible Ujjayi breath)." },
            { front: "Reality Test — you look around the room.", back: "\"I am safe in this kitchen. These are just words. I will stay present.\"" },
            { front: "Conscious Choice — you decide to respond.", back: "\"I hear you're feeling overwhelmed by the mess, Love. I'm right here with you.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You walk into the bedroom and she gives you a cold, disgusted look, then turns her back to you in silence.",
          steps: [
            { front: "The Watcher — you feel a wave of reactive panic or shame.", back: "\"I notice the 'Collapse' strategy trying to take over. I am choosing presence instead.\"" },
            { front: "Ujjayi Breath — your breathing becomes shallow.", back: "(Perform one long, slow, audible Ujjayi breath to anchor your system)." },
            { front: "Reality Test — you feel your feet on the ground.", back: "\"I am physically safe in this bedroom. Her silence cannot destroy me.\"" },
            { front: "Conscious Choice — you step forward.", back: "\"I feel the distance between us, Love. I'm right here when you're ready to talk.\"" },
          ]
        },
      ]
    },
    {
      name: "Proactive Presence",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Provocation Visualization → Ujjayi Breath → Conscious Choice (IAM).\nThis sequence trains you to prepare for intense relational friction by visualizing triggers, regulating your chemistry beforehand, and choosing your posture deliberately.\n\n1. Provocation Visualization — stoke the trigger in meditation to practice grounding\n2. Ujjayi Breath — settle your nervous system before the interaction\n3. Conscious Choice (IAM) — lead with deliberate movements and words\n\nWhy just this order: you must acclimate to the trigger in your mind first, then settle your body chemistry, and finally execute your deliberate actions cleanly.\nWhat people do instead: they walk into the fire unprepared, get triggered instantly, and react on autopilot.\nMindset: a wise man on the mountain must learn to ground himself before the fire starts.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are preparing to make a highly difficult call to her about a family issue that will likely upset her.",
          steps: [
            { front: "Provocation Visualization — you sit with eyes closed before the call.", back: "(See her getting angry in your mind and practice staying grounded)." },
            { front: "Ujjayi Breath — you feel your heart racing.", back: "(Take three slow, conscious Ujjayi breaths to settle your body chemistry)." },
            { front: "Conscious Choice (IAM) — you pick up the phone.", back: "\"I am choosing to speak deliberately and with full presence. Let's make this call.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are about to sit down with her to sync your busy calendars, and you know she is highly anxious about it.",
          steps: [
            { front: "Provocation Visualization — you take five minutes alone in your office.", back: "(Envision her irritation and practice holding your steady posture)." },
            { front: "Ujjayi Breath — you walk into the living room.", back: "(Perform an audible Ujjayi breath to align your nervous system)." },
            { front: "Conscious Choice (IAM) — you sit down beside her.", back: "\"I am choosing to sit upright, hold steady eye contact, and lead this discussion.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are driving home from an intense day at work, knowing she is already stressed with the kids.",
          steps: [
            { front: "Provocation Visualization — you park the car outside the house.", back: "(Visualize the chaos inside and accept that you will remain unswayable)." },
            { front: "Ujjayi Breath — you turn off the engine.", back: "(Inhale deeply and use a long Ujjayi exhale to clear your work tension)." },
            { front: "Conscious Choice (IAM) — you open the front door.", back: "\"I am choosing to walk in slowly, put my phone away, and hold space for her.\"" },
          ]
        },
      ]
    },
    {
      name: "The Unswayable Lead",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "The Watcher → Ujjayi Breath → Conscious Choice (IAM).\nThis sequence trains you to maintain complete somatic presence during active conflict by observing your stories, settling your chemistry, and leading with conscious deliberateness.\n\n1. The Watcher — observe your reactive impulses without obeying them\n2. Ujjayi Breath — slow the flow of breath to break the monopoly of your thoughts\n3. Conscious Choice (IAM) — choose your next physical movement three times slower than usual\n\nWhy just this order: you must step outside the story first, then physically ground your nervous system, and only then move or speak from your Masculine center.\nWhat people do instead: they run with the story of her unfairness, get defensive, and react with rapid, panicked movements.\nMindset: her emotional storm is transient weather; my stillness is the Oak.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You propose a vacation budget. She sighs in disgust: \"You always make bad financial decisions, we'll end up broke.\"",
          steps: [
            { front: "The Watcher — you feel the urge to argue or explain.", back: "\"I see the 'Defense' strategy trying to take over. I stop the logic.\"" },
            { front: "Ujjayi Breath — you feel your heart rate rising.", back: "(Perform one long, audible Ujjayi breath to settle your body chemistry)." },
            { front: "Conscious Choice (IAM) — you look her in the eye.", back: "\"I choose to hold a steady gaze and speak calmly. I will hold my frame.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "She criticizes your parenting in front of your son, trying to goad you into a fight.",
          steps: [
            { front: "The Watcher — you feel a wave of defensive anger rising.", back: "\"I notice the story of being attacked. I choose to remain the observer.\"" },
            { front: "Ujjayi Breath — your throat feels constricted.", back: "(Breathe deeply into your belly, letting the audible sound anchor you)." },
            { front: "Conscious Choice (IAM) — you stand tall.", back: "\"I choose to stand with a grounded posture and speak from my heart.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "At a dinner with friends, she makes a sharp, sarcastic dig about your hobbies.",
          steps: [
            { front: "The Watcher — you feel the urge to laugh it off or make a sarcastic comeback.", back: "\"I see the urge to please or lash back. I choose to stay present in my center.\"" },
            { front: "Ujjayi Breath — you feel your body clenching under the table.", back: "(Use a deep Ujjayi breath to soften your muscles and stay calm)." },
            { front: "Conscious Choice (IAM) — you speak to her privately afterwards.", back: "\"I choose to address the boundary deliberately: respect in front of others is important.\"" },
          ]
        },
      ]
    },
  ],
  masculinesv: [
    {
      name: "Från konflikt till kontakt",
      guideFront: "Vad hon sa, och strategin du svarar med.",
      guideBack: "Hur det kan låta.",
      description: "En sekvens för att vända ett bråk: Hör smärtan → Gör-om-tagning → Tangibel handling.\nFörst ger du henne \"emotionellt syre\", sen korrigerar du ditt eget misstag och slutligen erbjuder du en konkret lösning.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Du har glömt att fixa en sak i hemmet som hon bett om i veckor. Hon är nu rasande och kallar dig \"oansvarig\".",
          steps: [
            { front: "Hör smärtan — hon fräser: \"Du bryr dig aldrig om vad jag behöver!\"", back: "\"Jag hör att du känner dig ensam och sviken i det här, och det förstår jag.\"" },
            { front: "Gör-om-tagning — hon ser fortfarande skeptisk ut.", back: "\"Kan jag få en gör-om-tagning? Jag ser att jag har varit oansvarig och jag vill visa att jag tar dig på allvar.\"" },
            { front: "Tangibel handling — du erbjuder en konkret lösning.", back: "\"Jag fixar det direkt nu, och i fortsättningen lägger jag in våra gemensamma uppgifter i min arbetskalender.\"." },
          ]
        },
      ]
    },
  ],
  parenting1: [
    {
      name: "From Resistance to Connection",
      guideFront: "The step you are on — say your version out loud.",
      guideBack: "One way it could sound.",
      description: "A sequence for turning a moment of defiance into one of contact: Connection Before Correction → Naming the Feeling → Taking the Side of Feelings.\nInstead of jumping to a fight, you build the bridge first.",
      inputs: [
        {
          bundle: 'pro',
          situation: "It's time to go, and when you say \"Let's go,\" they scream \"NO!\" and run to the slide.",
          steps: [
            { front: "Connection Before Correction — walk over to the slide.", back: "\"Hey, look at that climb! You made it all the way to the top by yourself.\"" },
            { front: "Naming the Feeling — they look at you, still defiant.", back: "\"You're having such a good time. You seem really sad to have to stop.\"" },
            { front: "Taking the Side of Feelings — they nod and say \"I want to stay.\"", back: "\"I get it. I wish we could stay and play for two more hours too.\"" },
            { front: "Re-stating the Limit — (After the connection).", back: "\"And, it's still time to go. Do you want to walk or should I carry you?\"" },
          ]
        },
      ]
    },
  ],
  parenting2: [
    {
      name: "The Gentle Hammer",
      guideFront: "The step you are on — say your version out loud.",
      guideBack: "One way it could sound.",
      description: "A sequence for holding a firm limit with heart: Naming the Struggle (from Pack 1) → Describe What You See → Options Within the Limit.\nThis moves from \"I am with you\" to \"This is the reality\" to \"Here is your choice.\".",
      inputs: [
        {
          bundle: 'pro',
          situation: "You've told them it's bath time, but they are deep in a game and say \"NO! I'm not going!\"",
          steps: [
            { front: "Naming the Struggle — \"It's so hard to stop when you're having a great time. You really wish you could play all night.\"", back: "\"You're having so much fun. You seem really sad to have to stop your game.\"" },
            { front: "Describe What You See — you point to the clock or the bathroom.", back: "\"The water is in the tub and it's time for your bath.\"" },
            { front: "Options Within the Limit — they are still pouting.", back: "\"Do you want to bring your toy boat to the tub or the plastic dinosaur?\"" },
            { front: "Re-stating the Limit — (If they still refuse).", back: "\"Bath is happening now. Do you want to walk yourself or should I carry you?\"" },
          ]
        },
      ]
    },
  ],
  parenting3: [
    {
      name: "From \"I Can't\" to \"I Did\"",
      guideFront: "The step you are on — say your version out loud.",
      guideBack: "One way it could sound.",
      description: "A sequence for coaching through a difficulty: Naming the Struggle → Staying Close → Brainstorm Inquiry → Identifying Consequences.\nThis moves the child from emotional overwhelm to logical problem-solving.",
      inputs: [
        {
          bundle: 'pro',
          situation: "They are pulling on the handlebars, the bike is stuck on a lawnmower, and they start screaming \"I HATE THIS BIKE!\"",
          steps: [
            { front: "Naming the Struggle — you walk over calmly.", back: "\"Wow, that bike is really wedged in there. You're feeling very frustrated.\"" },
            { front: "Staying Close — you sit on a nearby box.", back: "\"I'm right here. I'm not going to do it for you, but I'm here while you figure it out.\"" },
            { front: "Brainstorm Inquiry — they stop screaming and look at the bike.", back: "\"What's the one thing that's blocking the wheel right now?\"" },
            { front: "Identify Consequences — they suggest just \"yanking it harder.\"", back: "\"If you yank it that way, what do you think happens to the lawnmower?\"" },
            { front: "Recognition of Effort — (After they finally get it out).", back: "\"You were really stuck, but you kept thinking until you found a way. You did it.\"" },
          ]
        },
      ]
    },
  ],
  parenting4: [
    {
      name: "Weathering the Storm",
      guideFront: "The step you are on — say your version out loud.",
      guideBack: "One way it could sound.",
      description: "A sequence for managing a high-intensity meltdown: Respond vs. React → Meet the Frustration → Expect Pushback → Heartful Silence.\nThis moves from self-regulation to emotional validation, and finally to firm, quiet action.",
      inputs: [
        {
          bundle: 'pro',
          situation: "They want a toy, you said no, and they are now lying on the floor screaming \"YOU NEVER BUY ME ANYTHING!\".",
          steps: [
            { front: "Respond vs. React — you feel everyone watching and your face gets hot.", back: "(Close your eyes for one second and breathe) \"I am safe. My child is just having a hard time.\"" },
            { front: "Meet the Frustration — you kneel down.", back: "\"You are so angry and disappointed that we aren't getting that today.\"" },
            { front: "Expect Pushback — they shout \"I'M NOT LEAVING!\".", back: "\"I hear you. It's really hard to leave when you're this upset.\"" },
            { front: "Heartful Silence — the talking isn't helping anymore.", back: "(Stop talking. Gently pick them up or lead them by the hand to the car)." },
          ]
        },
      ]
    },
  ],
  parenting5: [
    {
      name: "The Full Turn",
      guideFront: "The step you are on — say your version out loud.",
      guideBack: "One way it could sound.",
      description: "A sequence for navigating a mistake from start to finish: The Time-Out Reset → The Joy of Repentance → The Tangible Follow-up.\nThis moves from calming the body to choosing the right path, and finally back to connection.",
      inputs: [
        {
          bundle: 'pro',
          situation: "They were frustrated and threw a block at your leg. You have already stopped the behavior.",
          steps: [
            { front: "The Time-Out Reset — they are still breathing fast and looking defiant.", back: "\"You're too upset to be safe right now. Take two minutes until your body is calm.\"" },
            { front: "The Joy of Repentance — (After 2 minutes) they look calm but sheepish.", back: "\"Throwing was wrong. Now you have a chance to make it right. What do you need to do?\"" },
            { front: "The Tangible Follow-up — they apologize and pick up the block.", back: "\"Thank you for fixing that. I'm so glad we're back on the same team. Come here.\"" },
          ]
        },
      ]
    },
  ],
  praxframe1: [
    {
      name: "The Unswayable Lead",
      guideFront: "The step you are on — say your version out loud.",
      guideBack: "One way it could sound.",
      description: "A calibration sequence: Observe → Point of Origin → Act → Field Report.\nIdentify the dynamic, check your own values, take the action, and then analyze it objectively.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are headed out the door. She starts crying and says you \"don't care about the family\" because the garage is messy.",
          steps: [
            { front: "Observe — (OODA Loop: Observe)", back: "\"She is using a 'Hamster' loop of anxiety to manipulate my protective instinct.\"" },
            { front: "Point of Origin — (Internal Check)", back: "\"I value my health and my gym time. This is my priority right now.\"" },
            { front: "Act — (OODA Loop: Act)", back: "\"I'm responsible for the garage and I'll handle it on Saturday. I'm going to the gym now. See you later.\"" },
            { front: "Field Report — (Later that evening)", back: "\"I stayed the oak. She was mad, but I didn't buckle. My workout was excellent.\"" },
          ]
        },
      ]
    },
  ],
  praxframe2: [
    {
      name: "From Hamster to Harmony",
      guideFront: "What she said, and the strategy you respond with.",
      guideBack: "How it could sound.",
      description: "A calibration sequence: Medium is the Message → Status Calibration → Gratitude/Lead.\nIdentify the emotional process, choose a high-status quadrant, and lead back to connection.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You walk in 30 minutes late. She starts shouting: \"You obviously don't care about my time! You're so selfish!\"",
          steps: [
            { front: "Medium is the Message — (Identify Process)", back: "\"She is on the 'Hamster Wheel' of anxiety. She wants comfort through my strength.\"" },
            { front: "Status Calibration — (Higher Status/Cooperative)", back: "\"I hear you're frustrated, Love. I got stuck, and I'm here now. Come give me a hug.\"" },
            { front: "Whisper’s Rule — (She softens and says \"I just want you to be here.\")", back: "(Internal) \"She wants to feel like I am a priority she can count on.\"" },
            { front: "Gratitude Frame-Check — (She says \"You look good in that suit, even if you are an asshole.\")", back: "\"I know. And I'm glad I'm home to show you.\"" },
          ]
        },
      ]
    },
  ],
  praxframe3: [
    {
      name: "The Assertive Shield",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "A reaktiv sequence: Fogging → Negative Inquiry → Broken Record.\nAbsorb the emotional hit, clarify the specific issue, and hold the line on the decision.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You decided to stay late to finish a project. She is livid: \"You care more about your boss than your family! You're so selfish!\"",
          steps: [
            { front: "Fogging — \"I see why you'd think that. It's late and you've been alone all evening.\"", back: "\"I hear how much you're hurting. It makes sense you'd be angry.\"." },
            { front: "Negative Inquiry — she snaps: \"You always have an excuse!\".", back: "\"What specifically about my decision to stay late feels like a betrayal to you?\"." },
            { front: "Broken Record — she starts listing old grievances from last year.", back: "\"I hear those things. And, I'm working late tonight to finish this project.\"." },
          ]
        },
      ]
    },
  ],
  praxframe4: [
    {
      name: "Breaking the \"Save-A-Ho\" Cycle",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "A sequence for handling a partner's manipulative tears: The Oak → Killing Covert Contracts → No DEERing.\nStop reacting to the crying, stop trying to \"fix\" her mood to get peace, and stop justifying your boundaries.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are packing your gym bag. She starts crying: \"You don't care about my feelings! You're so selfish for leaving me alone!\"",
          steps: [
            { front: "The Oak — \"I'm tough to get along with if I don't get my workout in.\"", back: "(Continue packing bag) \"I hear you're upset. I'm still going to the gym.\"" },
            { front: "Killing Covert Contracts — she says, \"If you loved me, you'd stay.\"", back: "(Internal) \"I'm not staying to 'earn' her love. I'm going to benefit myself.\"" },
            { front: "No DEERing — she demands, \"Why is your gym more important than me?\".", back: "\"Because I've decided my fitness is a priority. I'll be back at seven.\"" },
            { front: "The Oak — (Later, when you return and she is still \"Still-Facing\" you).", back: "\"The birds are still singing. I'm going to go make some eggs.\"" },
          ]
        },
      ]
    },
  ],
  praxframe5: [
    {
      name: "The Visionary Lead",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "A sequence for establishing a new direction: Leading Without Permission → The Leader’s Vision → Push and Pull. Take the first step autonomously, explain the \"why\" in terms of your vision, and manage her emotional response.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You've decided the family spends too much time on screens. You've planned an outdoor weekend without asking for permission.",
          steps: [
            { front: "Leading Without Permission — she asks \"What are we doing Saturday?\".", back: "\"I've booked a cabin for the weekend. Pack for hiking, we're leaving at eight AM.\"" },
            { front: "The Leader’s Vision — she complains that she'll miss her shows.", back: "\"I see us becoming a family that values adventure over screens. I want us to have real stories to tell.\"" },
            { front: "Push and Pull — she gets quiet and huffy about the lack of Wi-Fi.", back: "(Smile and give her a kiss) \"I love your passion for Netflix. You're going to love the view even more. Come here.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are working on a difficult task (like fixing a fence or a car) and she is critiquing your method.",
          steps: [
            { front: "Leading Without Permission — she says \"You're doing that wrong, my dad did it differently.\".", back: "\"I'm handling this to my standard. It suits me just fine.\"" },
            { front: "Rule Zero — she keeps prodding for you to \"explain\" your logic.", back: "(Continue working silently. Need nothing from her judgment.)" },
            { front: "The Leader’s Vision — she finally asks why you're even doing it yourself.", back: "\"I'm building the skills to maintain our own world. I see us being completely autonomous in five years.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You've bought a new, high-status wardrobe and she is testing your confidence in it.",
          steps: [
            { front: "Rule Zero — she asks \"Why did you spend so much on these clothes?\".", back: "\"Because I decided I wanted to communicate my value more clearly. I like the look.\"" },
            { front: "Push and Pull — she says \"I think it's a bit much for our neighborhood.\".", back: "(Smile) \"I know, you always did have a hard time keeping up with me. You look great too, though.\"" },
            { front: "The Leader’s Vision — she asks if you're trying to impress other women.", back: "\"I'm building the image of the man I intend to be. I want a world where we are the best-dressed couple in the room.\"" },
          ]
        },
      ]
    },
  ],
  praxdread1: [
    {
      name: "Handling the Initial Pushback",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "A sequence for the first time you set a boundary: STFU → Standard-Setting Lead → Tow Rope. Expect her to double-down on shaming and testing as you change; stay consistent to build the new dynamic.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are headed to the gym for the fourth time this week. She snaps: \"Everything was great until you read that book and became an asshole!\"",
          steps: [
            { front: "1 · STFU — she waits for you to defend yourself.", back: "(Silence. Do not DEER. Hold a calm, unbothered gaze for three seconds.)" },
            { front: "2 · Standard-Setting Lead — she demands you stay and \"help\" with dinner.", back: "\"I've handled the dishes all week. Dinner is your responsibility tonight. I'll be back at seven.\"" },
            { front: "3 · Tow Rope — (You return from the gym and she is using the \"Silent Treatment\").", back: "\"The birds are still singing. I'm going to make some eggs. Do you want some?\" (Need nothing. Stay the Oak.)" },
          ]
        },
      ]
    },
  ],
  praxdread2: [
    {
      name: "The Scarcity to Reward Cycle",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "A sequence for rebuilding attraction: Scarcity Signaling → The Oak → Operant Conditioning. First you demonstrate value by being scarce and unbothered, then you reward her positive re-engagement with warmth.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You've been the \"plow horse\" doing all the chores with no sex for a month. You decide to change the frame.",
          steps: [
            { front: "Scarcity Signaling — she asks you to do an extra chore on your night off.", back: "\"I've handled my share. I'm going to the gym and then meeting a friend. I'll see you tomorrow.\"" },
            { front: "The Oak — (You return and she is giving you the \"silent treatment\" to make you feel guilty.)", back: "(Act as if nothing is wrong. Whistle, make some food, and enjoy your book.)" },
            { front: "Operant Conditioning — (Later, she softens and asks \"How was your gym?\")", back: "\"It was great, thanks for asking. Come here and tell me about your day.\" (Reward the investment.)" },
          ]
        },
      ]
    },
  ],
  praxdread3: [
    {
      name: "The Rejection Pivot",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "A sequence for handling a sexual rejection without losing frame: STFU → Gym Bag Routine → The Oak. Expect her to use shaming or \"guilt-tripping\" as you stop reacting to her \"No\"; stay the course to prove your value is real.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You initiate sex. She says \"No, I'm tired. And why are you always asking? It's so annoying.\"",
          steps: [
            { front: "STFU — she waits for you to whine or explain.", back: "(Silence. Do not DEER. Maintain a calm, unbothered gaze for three seconds.)" },
            { front: "The Gym Bag Routine — you stand up and grab your gear.", back: "\"No worries. I'm heading to the gym for an hour. See you when I get back.\"" },
            { front: "The Oak — you return and she says \"You're just trying to make me feel guilty by leaving.\"", back: "\"The birds are still singing, Love. I'm going to make a protein shake. Want one?\"" },
          ]
        },
      ]
    },
  ],
  praxdread4: [
    {
      name: "The Escalation Ladder",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "A sequence for handling persistent provocation: Controlled Anger (Warning) → Controlled Anger (Escalation) → Goldfish Memory. Move from a signal of boundary-crossing to an undeniable demonstration of dominance, then reset to normal immediately to show you aren't run by the emotion.",
      inputs: [
        {
          bundle: 'pro',
          situation: "She is \"chirping\" at you about a chore while you are busy. You decide to mark the boundary.",
          steps: [
            { front: "Controlled Anger — you fire a warning shot.", back: "\"Do you really want to have this fight? Because you aren't going to like it.\"" },
            { front: "Controlled Anger — she keeps nagging, testing your resolve.", back: "(Match her intensity +1) \"I said enough! You can fuck off to the other room if you can't be pleasant.\"" },
            { front: "Goldfish Memory — 15 minutes later, she comes back, looking sheepish.", back: "(Whistle and act as if nothing happened) \"Hey babe, do you want to help me with these burgers?\"" },
          ]
        },
      ]
    },
  ],
  praxdread5: [
    {
      name: "Navigating the Roadmap",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "A sequence for the final transition: STFU → Main Event → Come to Jesus → Stay/Go Congruence. Move from the silent building of value to the final communication of terms, then return to outcome-independent leadership.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You've been conducting Dread for 6 months. She is desperate, sobbing, and having a full Main Event in the bedroom.",
          steps: [
            { front: "STFU — she shouts \"Why won't you just tell me what's wrong?!\".", back: "(Maintain a calm, silent presence. Give her a minute to settle.)" },
            { front: "The Come to Jesus Moment — she catches her breath and asks \"What do I need to do to keep you?\".", back: "\"I see myself in a relationship with a woman who treats me with respect and investment. If that's who you want to be, I'm right here.\"" },
            { front: "Stay/Go Congruence — she says she'll try, but asks if you'll stop going to the gym.", back: "\"My health is part of my vision. I'm going to the gym at seven. You're welcome to join me.\"" },
          ]
        },
      ]
    },
  ],
  listeningthroughquestions: [
    {
      name: "Follow the Thread Down",
      guideFront: "They answer, and you follow. What is the next question?",
      guideBack: "A question you could ask at this step.",
      description: "Four questions in a row, each built out of the answer to the last, which is what separates following from interviewing. Steps: 1) Open with a detail from what they said, 2) Ask for the sequence, 3) Ask the reason, 4) Ask the feeling.\n\nThe shape of the whole thing:\n1. \"Who was in the car with you?\"\n2. \"So what happened when you got there?\"\n3. \"What made you stay the extra night?\"\n4. \"How was the drive back, after all that?\"\n\nWhy this order: the shape of the story first, the person second. Each question uses a word from the answer before it, and that is the thing the other person actually notices — not the cleverness of any single question.\n\nMindset: never plan the next question while they are answering. The question you need is inside their answer, and you cannot hear it if you are composing.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A colleague mentions they drove back from Aarhus on Sunday.",
          steps: [
            { front: "Step 1 · Detail — pick one thing out", back: "\"Who was in the car with you?\"" },
            { front: "Step 2 · Sequence — they say they went with their brother", back: "\"How did the two of you end up going together?\"" },
            { front: "Step 3 · Why — they say it was a last-minute thing", back: "\"What made you decide to go in the end?\"" },
            { front: "Step 4 · Feeling — they say it was their grandmother's house", back: "\"How was it, seeing the place again?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Someone at a course says they only started doing this a year ago.",
          steps: [
            { front: "Step 1 · Detail — open the timing", back: "\"A year? What were you doing before that?\"" },
            { front: "Step 2 · Sequence — they say they switched from teaching", back: "\"How did that actually happen — was it gradual?\"" },
            { front: "Step 3 · Why — they say they had had enough", back: "\"What was the thing that finally decided it?\"" },
            { front: "Step 4 · Feeling — they describe handing in their notice", back: "\"What was the walk home like after that?\"" },
          ]
        },
      ]
    },
    {
      name: "When You Have Been Given a Verdict",
      guideFront: "They answer, and you follow. What is the next question?",
      guideBack: "A question you could ask at this step.",
      description: "They summarised the whole thing in four words — \"it was a nightmare\" — and there is nothing to follow yet. Three questions turn a verdict into an account. Steps: 1) Ask for the shape, 2) Ask about the hard part, 3) Ask the reason or the feeling, whichever is missing.\n\nThe shape of the whole thing:\n1. \"Take me through it — what went wrong first?\"\n2. \"What was the worst bit?\"\n3. \"What was going through your head at that point?\"\n\nWhy this order: a verdict has no handles. Asking for the sequence gives you something to pick up, the obstacle gives you the story, and only then is there a moment specific enough to ask about a feeling.\n\nMindset: do not ask how someone feels about something you cannot picture. Get the shape first and the rest becomes askable.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend says the week has been an absolute disaster and stops there.",
          steps: [
            { front: "Step 1 · Shape — ask for the sequence", back: "\"Take me through it. What went wrong first?\"" },
            { front: "Step 2 · Hard part — they list three things", back: "\"Which of those was actually the worst?\"" },
            { front: "Step 3 · Feeling — they say it was the phone call", back: "\"What went through your head when they said it?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague says the launch \"went fine, in the end\" and changes the subject.",
          steps: [
            { front: "Step 1 · Shape — the \"in the end\" is the door", back: "\"In the end? What happened before the end?\"" },
            { front: "Step 2 · Hard part — they mention a scramble on the Thursday", back: "\"What nearly went wrong on the Thursday?\"" },
            { front: "Step 3 · Why — they say someone caught it late", back: "\"How did anyone spot it at that point?\"" },
          ]
        },
      ]
    },
    {
      name: "Closing a Subject Well",
      guideFront: "They answer, and you follow. What is the next question?",
      guideBack: "A question you could ask at this step.",
      description: "The account has reached its end and the conversation could either finish the subject properly or trail off into a pause. Two questions land it. Steps: 1) Ask what changed, 2) Ask what they would tell someone else, 3) Let it end.\n\nThe shape of the whole thing:\n1. \"What's different now, after all that?\"\n2. \"What would you tell someone about to do the same thing?\"\n3. (let the subject finish — do not open a new one on top of it)\n\nWhy this order: the reflective questions belong at the end, where they close the subject rather than deepening it. Asked in the middle they stop the story.\n\nMindset: this is a closing move. Ask it, listen to the answer, and then let the conversation go somewhere else.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend has finished telling you about a hard year at work.",
          steps: [
            { front: "Step 1 · What changed", back: "\"What's different now, compared to when it started?\"" },
            { front: "Step 2 · What they would tell someone", back: "\"What would you tell someone heading into the same thing?\"" },
            { front: "Step 3 · Let it land", back: "\"That's a good way of putting it.\" (and then let the subject rest)" },
          ]
        },
      ]
    },
  ],
  showunderstanding2: [
    {
      name: "Check, Then Meet",
      guideFront: "They are talking. Show them you have followed it.",
      guideBack: "A line you could say at this step.",
      description: "The order that makes the personal moves land: establish that you have understood before you say anything about yourself. Steps: 1) Check your version, 2) Take the correction, 3) Meet them with the feeling or the value.\n\nThe shape of the whole thing:\n1. \"So it's not the workload — it's that nobody asked you.\"\n2. \"Right, so it's both. The workload made the not-asking worse.\"\n3. \"That's a horrible combination. I've had the second half of it.\"\n\nWhy this order: a disclosure before you have understood is a guess about what they need. After a check that they corrected, it lands as recognition rather than as a change of subject.\n\nMindset: understand first, meet second. In that order the sentence about you is a gift; in the other order it is an interruption.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A colleague has been describing a decision that was made without them.",
          steps: [
            { front: "Step 1 · Check — offer your version", back: "\"So it's not the decision itself, it's that nobody asked you first.\"" },
            { front: "Step 2 · Take the correction — they say it is both", back: "\"Right — the workload's real, and finding out last made it worse.\"" },
            { front: "Step 3 · Meet them — the value underneath", back: "\"Being asked first matters. I'd have minded that just as much.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A friend has described a long, difficult few weeks.",
          steps: [
            { front: "Step 1 · Check — offer the shape", back: "\"It sounds like the work is fine and everything around it isn't. Right?\"" },
            { front: "Step 2 · Take the correction — they say the work is part of it too", back: "\"Okay, so it's all of it, and the work is what you can't put down.\"" },
            { front: "Step 3 · Meet them — the feeling, one sentence", back: "\"I know that feeling. It's the not-being-able-to-put-it-down that gets you.\"" },
          ]
        },
      ]
    },
    {
      name: "Bring It Together",
      guideFront: "They are talking. Show them you have followed it.",
      guideBack: "A line you could say at this step.",
      description: "Two things they mentioned separately turn out to be one thing. Connect them, check the connection, and let them decide what it means. Steps: 1) Name both, 2) Ask whether they are connected, 3) Let them take it.\n\nThe shape of the whole thing:\n1. \"You said earlier the travel was getting heavy.\"\n2. \"And now the tiredness. Are those the same problem?\"\n3. (say nothing — they are working it out)\n\nWhy this order: naming both before connecting them stops it sounding like a diagnosis. And the silence at the end matters — this move often produces a realisation, and a realisation needs a moment.\n\nMindset: offer the connection, do not conclude it. \"Are those the same thing?\" is a question; \"so obviously it's the travel\" is a verdict.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend has separately mentioned a long commute and constant tiredness.",
          steps: [
            { front: "Step 1 · Name both", back: "\"You said earlier the travel had got heavy.\"" },
            { front: "Step 2 · Connect and check", back: "\"And now the tiredness. Are those the same problem, do you think?\"" },
            { front: "Step 3 · Leave the space", back: "(say nothing while they think — the pause is the move)" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague has complained about the rota and, separately, about not being consulted.",
          steps: [
            { front: "Step 1 · Name both", back: "\"The rota came up earlier, and now the not-being-asked.\"" },
            { front: "Step 2 · Connect and check", back: "\"Is the rota actually the issue, or is it who decides it?\"" },
            { front: "Step 3 · Leave the space", back: "\"Take your time — I've just realised I've asked you something quite big.\"" },
          ]
        },
      ]
    },
    {
      name: "Land a Long One",
      guideFront: "They are talking. Show them you have followed it.",
      guideBack: "A line you could say at this step.",
      description: "They have been talking for a while and it is coming to an end. Summarise, invite the correction, and only then respond. Steps: 1) Summarise in three, 2) Ask what you missed, 3) Respond to the corrected version.\n\nThe shape of the whole thing:\n1. \"So: the timing, the workload, and finding out last.\"\n2. \"Have I missed anything?\"\n3. \"Then the thing I'd want to sort first is the finding-out-last.\"\n\nWhy this order: responding to your own summary before they have corrected it means responding to your version rather than theirs. The correction takes four seconds and changes what you say next surprisingly often.\n\nMindset: summarise, get corrected, then answer. Skipping the middle step is how people end up solving the wrong problem warmly.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A colleague has spent several minutes on a problem and stopped.",
          steps: [
            { front: "Step 1 · Summarise in three", back: "\"So: the timing, the workload, and finding out after everyone else.\"" },
            { front: "Step 2 · Invite the correction", back: "\"Have I missed anything, or got the weight wrong?\"" },
            { front: "Step 3 · Respond to the corrected version", back: "\"Then the one worth sorting first is the finding-out-last, isn't it.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A friend has finished a long account of a family situation.",
          steps: [
            { front: "Step 1 · Summarise the shape", back: "\"It started as a practical thing and it's turned into something older.\"" },
            { front: "Step 2 · Invite the correction", back: "\"Is that fair, or am I making it neater than it is?\"" },
            { front: "Step 3 · Respond to the corrected version", back: "\"Then it's not really about the house at all. No wonder it's hard to talk about.\"" },
          ]
        },
      ]
    },
  ],
  setupquestion: [
    {
      name: "Ask, Listen, Answer",
      guideFront: "Ask, listen properly, then answer it yourself.",
      guideBack: "A line you could say at this step.",
      description: "The whole move in three beats: ask the question, actually listen to the answer, then give your own. The third step is the one people drop, and dropping it is what turns a good opener into an interview. Steps: 1) Ask — a question about something you want to talk about, 2) Listen — react to what they actually said, 3) Answer — give your own answer to the same question.\n\nThe shape of the whole thing:\n1. \"What made you sign up for this?\"\n2. \"Six months of meaning to — that sounds familiar.\"\n3. \"I came because I finally ran out of excuses.\"\n\nWhy this order: asking first shows interest and costs you nothing, and answering afterwards is what makes it mutual. Reverse it and you have a Setup Statement, which is a different pack.\n\nMindset: step 3 is not optional. A question you never answer yourself is an interview, and people can feel the difference within about two exchanges.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You have just sat down next to someone before a workshop starts.",
          steps: [
            { front: "Step 1 · Ask — you decide to open with a question", back: "\"What made you sign up for this one?\"" },
            { front: "Step 2 · Listen — they say \"my manager sent me, for a project\"", back: "\"A project — what are you actually building?\"" },
            { front: "Step 3 · Answer — give them yours too", back: "\"I came to steal ideas, honestly. Mine's a mess.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A friend of a friend at a party, both of you a bit tired.",
          steps: [
            { front: "Step 1 · Ask — the mood is the obvious thing", back: "\"How's your evening going so far?\"" },
            { front: "Step 2 · Listen — they say \"I came straight from a night shift\"", back: "\"A night shift and then this? That's commitment.\"" },
            { front: "Step 3 · Answer — say where you are too", back: "\"I nearly bailed on tonight. Low-energy day.\"" },
          ]
        },
      ]
    },
    {
      name: "Question into Story",
      guideFront: "Ask, listen properly, then answer it yourself.",
      guideBack: "A line you could say at this step.",
      description: "Ask a background question, follow the detail they give you, and then give a piece of your own instead of moving on. Good when you want the conversation to deepen rather than bounce. Steps: 1) Ask — where they have come from, 2) Follow — pick up one detail and go further, 3) Match — give a piece of your own at the same size.\n\nThe shape of the whole thing:\n1. \"How do you know everyone here?\"\n2. \"You grew up together? Okay, I need one embarrassing story.\"\n3. \"I've known the host about a year and I'm still the new one.\"\n\nWhy this order: a background question almost always produces a story rather than a word, and matching it with something of your own is what stops you being the one who asks all the questions.\n\nMindset: follow one detail properly, then match it. Two questions in a row without anything of yours in between is where it starts to feel like an interview.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Arriving at a dinner where you only know the host.",
          steps: [
            { front: "Step 1 · Ask — you want a thread, not a yes", back: "\"How do you know everyone here?\"" },
            { front: "Step 2 · Follow — they say \"I grew up with the host\"", back: "\"Grew up together? I need one embarrassing story.\"" },
            { front: "Step 3 · Match — give them yours", back: "\"I've known him a year and I'm still the new one.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague you have never spoken to properly, waiting for a lift.",
          steps: [
            { front: "Step 1 · Ask — where they came from", back: "\"Have you been here long? I've never worked out who's new.\"" },
            { front: "Step 2 · Follow — they say \"eleven years, on and off\"", back: "\"On and off? What made you leave, and what brought you back?\"" },
            { front: "Step 3 · Match — give a piece the same size", back: "\"I'm three months in and still guessing at half the names.\"" },
          ]
        },
      ]
    },
    {
      name: "When the First One Stalls",
      guideFront: "Ask, listen properly, then answer it yourself.",
      guideBack: "A line you could say at this step.",
      description: "You asked, they gave you almost nothing, and the temptation is to ask the same question again in different words. Three beats get out of it instead. Steps: 1) Answer your own question, small and concrete, 2) Ask again — narrower, and about something specific, 3) Follow whatever comes back.\n\nThe shape of the whole thing:\n1. \"Mine's been dull, honestly — mostly a spreadsheet.\"\n2. \"Have you got anything on the go at the moment?\"\n3. \"A greenhouse? In this weather?\"\n\nWhy this order: your own small answer shows the size of answer you meant, which is usually what was missing. Then a narrower question is answerable without any effort, and the third step is just following what they gave you.\n\nMindset: never ask the same question twice. Go first yourself, then make it smaller.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You asked how their week has been and got \"fine, you?\"",
          steps: [
            { front: "Step 1 · Answer yours, small", back: "\"Dull, honestly. Mostly a spreadsheet I don't understand.\"" },
            { front: "Step 2 · Ask again, narrower", back: "\"Have you got anything on the go outside work?\"" },
            { front: "Step 3 · Follow it", back: "\"A greenhouse? In this weather? How's that going?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A neighbour you barely know, both taking bins out.",
          steps: [
            { front: "Step 1 · Answer yours, small", back: "\"I've had a week of it — the boiler's gone again.\"" },
            { front: "Step 2 · Ask again, narrower", back: "\"Has yours held up? I assume they're all the same age.\"" },
            { front: "Step 3 · Follow it", back: "\"Replaced the whole thing? Who did you get to do it?\"" },
          ]
        },
      ]
    },
  ],
  givingcounterexamples: [
    {
      name: "Concede, Except, Stop",
      guideFront: "They have made the claim. Take the \"always\" out without taking the point away.",
      guideBack: "A line you could say at this step.",
      description: "The whole move in three beats: agree with the general case, give one exception, and then stop talking. The third step is the one people drop, and dropping it is what turns a counter-example into an argument. Steps: 1) Concede — say the claim is usually right, 2) Except — one case where it was not, 3) Stop — let them do something with it.\n\nThe shape of the whole thing:\n1. \"Exercise usually does help, yeah.\"\n2. \"I trained hard all last week and still felt awful.\"\n3. (nothing — let them answer)\n\nWhy this order: conceding first means the exception arrives as information rather than as opposition, and stopping afterwards leaves them room to adjust their own claim, which they will do far more readily than they will accept yours.\n\nMindset: the silence after the exception is doing work. Fill it with a second example and you have started arguing.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend says exercise always makes you happier.",
          steps: [
            { front: "Step 1 · Concede — agree with the general case", back: "\"It usually does, honestly.\"" },
            { front: "Step 2 · Except — one case, yours", back: "\"I trained hard all last week and felt flat the whole time.\"" },
            { front: "Step 3 · Stop — leave it with them", back: "\"Anyway. Might just have been the week.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague says nobody uses the old system any more.",
          steps: [
            { front: "Step 1 · Concede — the direction is right", back: "\"It's definitely on the way out.\"" },
            { front: "Step 2 · Except — a real number", back: "\"I counted Monday, though. Eleven people opened it that week.\"" },
            { front: "Step 3 · Stop — hand the decision back", back: "\"So it's eleven people we'd need to move.\"" },
          ]
        },
      ]
    },
    {
      name: "When They Defend the Rule",
      guideFront: "They have made the claim. Take the \"always\" out without taking the point away.",
      guideBack: "A line you could say at this step.",
      description: "They have answered your exception by explaining it away — \"that's different\", \"that's one person\". The move is to agree that it is one case, and to say what it means, which is narrower than they think you meant. Steps: 1) Agree it is one case, 2) Say what one case shows, 3) Offer the smaller version of their claim.\n\nThe shape of the whole thing:\n1. \"You're right, it's one person.\"\n2. \"One is enough to make it 'usually' rather than 'always', though.\"\n3. \"Which is probably what we both actually think.\"\n\nWhy this order: an exception does not disprove a rule, and pretending it does is what loses the argument. Conceding that immediately, and then naming what it does show, gets you the narrower claim, which was all you wanted.\n\nMindset: you are not trying to knock the claim over. You are trying to get the word \"always\" out of it, and then you are finished.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You gave a counter-example and they said \"that's just one person\".",
          steps: [
            { front: "Step 1 · Agree — concede the size", back: "\"It is just one, you're right.\"" },
            { front: "Step 2 · What it shows — narrow, not nothing", back: "\"It makes it a strong tendency rather than a rule.\"" },
            { front: "Step 3 · Offer the smaller claim", back: "\"'Most people' I'd agree with completely.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "They say your example is a special case that does not count.",
          steps: [
            { front: "Step 1 · Agree — it is unusual", back: "\"It is unusual, I'll give you that.\"" },
            { front: "Step 2 · What it shows — the rule has an edge", back: "\"It means there's a group it doesn't cover, and I think it's bigger than one.\"" },
            { front: "Step 3 · Offer the smaller claim", back: "\"Would you go with 'for most people, most of the time'?\"" },
          ]
        },
      ]
    },
    {
      name: "When You Do Not Have One",
      guideFront: "They have made the claim. Take the \"always\" out without taking the point away.",
      guideBack: "A line you could say at this step.",
      description: "Something in the claim is too broad but you have no case to hand. Rather than inventing one, say what you doubt and turn it into a question — which often produces the counter-example from them. Steps: 1) Name the part you doubt, 2) Say you have no example, 3) Ask.\n\nThe shape of the whole thing:\n1. \"I'd believe that for most people.\"\n2. \"I've got no case to point at, though.\"\n3. \"Can you think of anyone it hasn't been true for?\"\n\nWhy this order: admitting you have nothing costs almost nothing and buys a great deal of credibility, and the question does the work an invented example would have done badly.\n\nMindset: \"I don't have an example\" is a perfectly good sentence. An invented one is the only move here that cannot be repaired.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A sweeping claim you doubt, and nothing concrete comes to mind.",
          steps: [
            { front: "Step 1 · Name the doubt", back: "\"I'd believe that for most people, not for everyone.\"" },
            { front: "Step 2 · Say you have nothing", back: "\"I can't point at a case, to be fair.\"" },
            { front: "Step 3 · Ask", back: "\"Can you think of anyone it hasn't been true for?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A number is quoted at you and you doubt it but have nothing to put against it.",
          steps: [
            { front: "Step 1 · Name the doubt", back: "\"That figure sounds higher than I'd have guessed.\"" },
            { front: "Step 2 · Say you have nothing", back: "\"I've got no counter-number, to be clear.\"" },
            { front: "Step 3 · Ask", back: "\"Where's it from? I'd like to look at the same thing you're looking at.\"" },
          ]
        },
      ]
    },
  ],
  discussing: [
    {
      name: "Back, Then Differ",
      guideFront: "Take the discussion one step at a time.",
      guideBack: "A line you could say at this step.",
      description: "The core discussion move: say their position back, acknowledge the true part, and only then give yours. Steps: 1) Say it back — in your own words, 2) Grant what is right — the part you actually agree with, 3) Differ — your view and one reason.\n\nThe shape of the whole thing:\n1. \"So you'd keep the date where it is.\"\n2. \"And you're right that moving it means telling everyone twice.\"\n3. \"I'd still move it, because the last two slipped anyway and we told them late.\"\n\nWhy this order: a disagreement that arrives after accurate understanding is heard as a contribution. The same sentence first is heard as not having listened.\n\nMindset: the concession in step 2 is not a tactic. If you cannot find anything true in their position, you have probably not understood it yet.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A colleague wants to keep a deadline you think should move.",
          steps: [
            { front: "Step 1 · Say it back", back: "\"So you'd keep the date where it is.\"" },
            { front: "Step 2 · Grant the true part", back: "\"And you're right that moving it means telling the client twice.\"" },
            { front: "Step 3 · Differ, with a reason", back: "\"I'd still move it — the last two slipped anyway, and we told them late.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A friend argues that phones should be banned in schools.",
          steps: [
            { front: "Step 1 · Say it back", back: "\"You'd take them off them entirely during the day.\"" },
            { front: "Step 2 · Grant the true part", back: "\"And it's true the lessons I've seen go best are the ones where they're away.\"" },
            { front: "Step 3 · Differ, with a reason", back: "\"I'd keep them in the bag rather than confiscate, because the fight over it costs more than the phones do.\"" },
          ]
        },
      ]
    },
    {
      name: "Ask Before You Argue",
      guideFront: "Take the discussion one step at a time.",
      guideBack: "A line you could say at this step.",
      description: "When something they said is ambiguous, clarify before responding — it very often turns out you were about to argue with something they do not think. Steps: 1) Notice the vague word, 2) Ask which version, 3) Answer the version they actually meant.\n\nThe shape of the whole thing:\n1. (they said \"homework is pointless\")\n2. \"All of it, or the filler?\"\n3. \"The filler I completely agree with. The rest I'd keep.\"\n\nWhy this order: general words hide specific disagreements, and the specific one is usually much smaller and much easier to settle.\n\nMindset: six words of clarification save four minutes of arguing about a position nobody holds.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Someone says the whole system is broken.",
          steps: [
            { front: "Step 1 · Notice the vague part", back: "(broken could mean failing, slow, or badly designed)" },
            { front: "Step 2 · Ask which version", back: "\"Which bit — the booking, or what happens after?\"" },
            { front: "Step 3 · Answer that version", back: "\"The booking I'd defend. What happens after is genuinely a mess, agreed.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A friend says nobody should work from home.",
          steps: [
            { front: "Step 1 · Notice the vague part", back: "(nobody, ever, or in their specific job?)" },
            { front: "Step 2 · Ask which version", back: "\"As a rule everywhere, or in your place specifically?\"" },
            { front: "Step 3 · Answer that version", back: "\"In your place I'd probably agree. As a rule I'd push back hard.\"" },
          ]
        },
      ]
    },
    {
      name: "When It Heats Up",
      guideFront: "Take the discussion one step at a time.",
      guideBack: "A line you could say at this step.",
      description: "The discussion has gone fast and sharp. Name it jointly, take the hot part out, and settle what is left — which is nearly always most of it. Steps: 1) Name it as \"we\", 2) Split off the hot part, 3) Agree the rest.\n\nThe shape of the whole thing:\n1. \"We're both getting sharp about this.\"\n2. \"Can we leave the money bit aside for a minute?\"\n3. \"Because I think we agree on everything else, and it'd be good to say so.\"\n\nWhy this order: naming it jointly removes the accusation, splitting removes the heat, and agreeing the rest gives you both something to stand on before you go back to the difficult part.\n\nMindset: never tell the other person to calm down. Say \"we\", or say what you are doing yourself.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A discussion with a colleague has become fast and clipped.",
          steps: [
            { front: "Step 1 · Name it jointly", back: "\"We're both getting a bit sharp about this.\"" },
            { front: "Step 2 · Split off the hot part", back: "\"Can we leave the budget aside for ten minutes?\"" },
            { front: "Step 3 · Agree the rest", back: "\"Because I think we agree on the timing and the scope, and that's most of it.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A discussion with a friend has drifted towards something personal.",
          steps: [
            { front: "Step 1 · Name it jointly", back: "\"This has stopped being about the thing, hasn't it.\"" },
            { front: "Step 2 · Split off the hot part", back: "\"I'd rather not do the other bit today.\"" },
            { front: "Step 3 · Agree the rest", back: "\"On the actual question I think we're closer than it sounded.\"" },
          ]
        },
      ]
    },
  ],
  storybanter: [
    {
      name: "Your Turn to Start",
      guideFront: "Their line, then your turn. Keep it going.",
      guideBack: "A line you could say at this step.",
      description: "The book's six-beat arc with you as the one who opens: you throw out the small complaint, they invite you to say more, you answer absurdly, they build, you escalate, and then somebody lands it. Steps: 1) Trigger, 2) Answer their invitation, 3) Build on what they added, 4) Escalate, 5) Land it.\n\nThe shape of the whole thing:\n1. \"I'm so tired I can't do this.\"\n2. \"Honestly? Going home and getting into bed until Thursday.\"\n3. \"Yes, and three pizzas. Minimum.\"\n4. \"By Friday I'm basically a pizza with a heartbeat.\"\n5. \"And that's how I ended up banned from that place. Anyway.\"\n\nWhy this order: the trigger has to be small and true or the other person has nothing to recognise. Everything after it gets bigger, and the landing is somebody choosing to stop while it is still funny.\n\nMindset: the opening line is the only one that should be realistic. Keep it small — the absurdity is built from it, not stated in it.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You and a colleague are both stuck on a slow Wednesday afternoon.",
          steps: [
            { front: "Step 1 · Trigger — open with something small and true", back: "\"I'm so tired I've read the same line four times.\"" },
            { front: "Step 2 · Their invitation — they ask \"so what are you going to do instead?\"", back: "\"Go home, get into bed, and stay there until Thursday.\"" },
            { front: "Step 3 · They build — \"you'd need snacks for that\"", back: "\"Yes, and three pizzas. Delivered on a schedule.\"" },
            { front: "Step 4 · Escalate — take it further yourself", back: "\"By Friday I'd be more pizza than person. They'd have to notify someone.\"" },
            { front: "Step 5 · Land it — stop while it is still funny", back: "\"And that's how I got banned from the good place. Anyway. Back to it.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are waiting with a friend for a bus that is clearly not coming.",
          steps: [
            { front: "Step 1 · Trigger — small and true", back: "\"I've been standing here so long I've started making plans for the shelter.\"" },
            { front: "Step 2 · Their invitation — they ask \"what sort of plans?\"", back: "\"Curtains. A small rug. Nothing extravagant.\"" },
            { front: "Step 3 · They build — \"you'd need a kettle\"", back: "\"Yes, and a doorbell, so people know not to just wander in.\"" },
            { front: "Step 4 · Escalate — go past sensible", back: "\"Give it a month and I'm on the council for this shelter. Unopposed.\"" },
            { front: "Step 5 · Land it — a flat last line", back: "\"And then the bus comes and I have to give it all up. Tragic.\"" },
          ]
        },
      ]
    },
    {
      name: "Their Turn to Start",
      guideFront: "Their line, then your turn. Keep it going.",
      guideBack: "A line you could say at this step.",
      description: "The same arc from the other side — they complain, and you are the one who keeps it going. This is the harder role and the more useful one, because it is the one most people freeze in. Steps: 1) Invite, 2) Build on their answer, 3) Complicate it, 4) Bring someone in, 5) Hand the ending to them.\n\nThe shape of the whole thing:\n1. \"So what are you going to do about it?\"\n2. \"Yes, and you'd need enough pizza to see the week out.\"\n3. \"What if your mum comes home and finds the boxes?\"\n4. \"This is where the dog gives you away, obviously.\"\n5. \"So how does this end? I need to know.\"\n\nWhy this order: your first move is a question, because an invitation costs you no ideas and buys you a whole turn to think. After that you are building on material they have already given you rather than inventing from nothing.\n\nMindset: when it is not your story, ask first. A playful open question is always available and it is never the wrong move.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend says they are too tired to face the rest of the week.",
          steps: [
            { front: "Step 1 · Invite — a playful open question", back: "\"So what are you going to do instead? Realistically.\"" },
            { front: "Step 2 · Build — they say \"hide at home with films\"", back: "\"Yes, and you'd need enough pizza to see the whole week out.\"" },
            { front: "Step 3 · Complicate — add a threat to the plan", back: "\"What if your mum comes home and finds ten empty boxes?\"" },
            { front: "Step 4 · Bring someone in — a new reaction", back: "\"And the dog gives you away immediately. He has no loyalty.\"" },
            { front: "Step 5 · Hand it back — let them land it", back: "\"So how does this end? I need to know how you get out of it.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague announces they have far too much to do tonight.",
          steps: [
            { front: "Step 1 · Invite — ask for the plan", back: "\"How are you actually going to get through all that?\"" },
            { front: "Step 2 · Build — they say \"coffee and denial\"", back: "\"Yes, and a whiteboard. Nobody's ever solved anything without one.\"" },
            { front: "Step 3 · Complicate — a small domestic disaster", back: "\"What if the coffee machine picks tonight to break?\"" },
            { front: "Step 4 · Bring someone in — someone unhelpful", back: "\"And then your neighbour knocks. He wants to talk about the bins.\"" },
            { front: "Step 5 · Hand it back — their ending", back: "\"Go on then. Do you survive this or not?\"" },
          ]
        },
      ]
    },
    {
      name: "When It Stalls",
      guideFront: "Their line, then your turn. Keep it going.",
      guideBack: "A line you could say at this step.",
      description: "The story has gone flat — the last two turns were pleasant, nobody has added a problem, and there is a pause coming. Three moves get it back, and they are the three you should reach for in order: complicate it, add a person, or follow the consequence. Steps: 1) Notice the flatness, 2) Restart it with a complication, 3) Add a reaction, 4) Land it before it dies twice.\n\nThe shape of the whole thing:\n1. (two agreeable turns in a row, and the energy has gone)\n2. \"What if the neighbours have already noticed, though?\"\n3. \"There's a group chat. You're in it, apparently.\"\n4. \"Anyway. That's how you end up moving cities. Right — coffee?\"\n\nWhy this order: a stalled story does not need a funnier line, it needs a problem. Adding a complication gives both of you something to be funny about again, which a clever remark does not.\n\nMindset: a story that has flattened twice is finished. Land it warmly rather than dragging it — the goal was the laugh you already had.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A banter story about a week off has become a list of pleasant things.",
          steps: [
            { front: "Step 1 · Notice — nothing has gone wrong in the story for two turns", back: "(the energy has gone; it needs a problem, not a better joke)" },
            { front: "Step 2 · Complicate — add the threat", back: "\"What if the neighbours have already noticed you're home all week?\"" },
            { front: "Step 3 · Add a reaction — someone with opinions", back: "\"There's a group chat about it. You're in it, which is worse.\"" },
            { front: "Step 4 · Land it — while it is still funny", back: "\"Anyway, that's how you end up moving cities. Right, coffee?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A story about a bus shelter has run out of ideas and there is a pause coming.",
          steps: [
            { front: "Step 1 · Notice — you are both waiting for the other to be funny", back: "(nobody has added a problem for two turns)" },
            { front: "Step 2 · Complicate — something ordinary goes wrong", back: "\"What if someone else moves in? Do you share, or is it war?\"" },
            { front: "Step 3 · Add a reaction — a character with a view", back: "\"The man from the council arrives with a clipboard. He is not sympathetic.\"" },
            { front: "Step 4 · Land it — flat and warm", back: "\"And that's the last time I'm early for anything. Here's the bus.\"" },
          ]
        },
      ]
    },
  ],
  explainthings2: [
    {
      name: "Short, Check, Deeper",
      guideFront: "Explain it in the order they can take it.",
      guideBack: "A line you could say at this step.",
      description: "The three-beat explanation: give the one-sentence version, check whether they want more, and only then go deeper. It is the book's tip made into a habit, and it is what stops an answer becoming a lecture. Steps: 1) Short — one sentence in words they already have, 2) Check — a question or a look, 3) Deeper — the detail, but only if it was wanted.\n\nThe shape of the whole thing:\n1. \"It's a shared to-do list.\"\n2. \"Want the bit that makes it different?\"\n3. \"Every line has exactly one owner, so nothing sits there unclaimed.\"\n\nWhy this order: the short version tells you how interested they are, which is the thing you cannot know in advance. Guessing produces either a lecture or an unhelpfully thin answer.\n\nMindset: the check is the whole strategy. Without it you are just choosing a length at random.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A colleague asks what the new system actually is.",
          steps: [
            { front: "Step 1 · Short — one sentence, no jargon", back: "\"It's a shared to-do list, basically.\"" },
            { front: "Step 2 · Check — hand them the choice", back: "\"Want the bit that makes it different from a list?\"" },
            { front: "Step 3 · Deeper — the distinguishing detail", back: "\"Every line has one owner, so nothing sits there unclaimed.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Someone at a party asks what you do.",
          steps: [
            { front: "Step 1 · Short — the version anyone can hold", back: "\"I teach English to teenagers.\"" },
            { front: "Step 2 · Check — read the face, not the words", back: "\"It's a lot louder than it sounds. Do you want the honest version?\"" },
            { front: "Step 3 · Deeper — the part you actually find interesting", back: "\"Most of the job is negotiating. The English is almost a side effect.\"" },
          ]
        },
      ]
    },
    {
      name: "Find the Missing W",
      guideFront: "Explain it in the order they can take it.",
      guideBack: "A line you could say at this step.",
      description: "When an explanation has not landed, work out which of the six they are missing rather than repeating the one you already gave. Steps: 1) Notice it did not land, 2) Name what you gave them, 3) Give a different W.\n\nThe shape of the whole thing:\n1. (they still look blank)\n2. \"That was what it is, and it didn't help.\"\n3. \"The point is you stop chasing people for updates.\"\n\nWhy this order: repeating a definition more slowly is the commonest failure in explaining anything, and it is always the same mistake — answering the question you were asked rather than the one they have.\n\nMindset: if it did not land, change the W, not the volume.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You have defined the thing and they still look blank.",
          steps: [
            { front: "Step 1 · Notice", back: "(they nodded, and nothing happened behind it)" },
            { front: "Step 2 · Name what you gave", back: "\"That was the what, and it clearly didn't help.\"" },
            { front: "Step 3 · Different W", back: "\"The point of it is that you stop chasing people for updates.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Someone asks what a tool is while holding it in a shop.",
          steps: [
            { front: "Step 1 · Notice", back: "(they do not need to know what it is — they can see it)" },
            { front: "Step 2 · Name what you gave", back: "\"I was about to tell you what it's called, which you can read.\"" },
            { front: "Step 3 · Different W", back: "\"It's for people who cook most days. Twice a week and it lives in a cupboard.\"" },
          ]
        },
      ]
    },
    {
      name: "Place It Before You Detail It",
      guideFront: "Explain it in the order they can take it.",
      guideBack: "A line you could say at this step.",
      description: "For anything with an unfamiliar shape, give the setting and the group first, then the mechanics. Steps: 1) Where it belongs, 2) Who it is for, 3) How it works — the detail, now that it has somewhere to sit.\n\nThe shape of the whole thing:\n1. \"It's an office thing rather than a home thing.\"\n2. \"Mostly for teams where more than two people book the same rooms.\"\n3. \"You claim the slot, and it goes grey for everyone else.\"\n\nWhy this order: mechanics land badly on a listener who has not yet worked out whether the thing has anything to do with them. Place it first, and the how is suddenly worth following.\n\nMindset: give it a shelf before you give it a manual.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Explaining a work tool to someone outside your team.",
          steps: [
            { front: "Step 1 · Where", back: "\"It's an office thing. Nobody would have one at home.\"" },
            { front: "Step 2 · Who", back: "\"It's for teams where several people book the same rooms.\"" },
            { front: "Step 3 · How", back: "\"You claim a slot and it goes grey for everyone else.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Explaining an unfamiliar kitchen object to a friend.",
          steps: [
            { front: "Step 1 · Where", back: "\"It lives by the spices rather than the pans, which is the clue.\"" },
            { front: "Step 2 · Who", back: "\"Anyone who cooks with whole spices. Otherwise it's an ornament.\"" },
            { front: "Step 3 · How", back: "\"You put them in and lean on it. That's genuinely all there is.\"" },
          ]
        },
      ]
    },
  ],
  buildingastory: [
    {
      name: "The Whole Thing, Start to Finish",
      guideFront: "Build the story one part at a time.",
      guideBack: "A line you could say at this step.",
      description: "The book's Complete Storytelling exercise: build a real story out of the four parts and tell it end to end. Steps: 1) Open in one sentence, 2) Name the turn, 3) Land the resolution, 4) Say the takeaway, or say there is not one.\n\nThe shape of the whole thing:\n1. \"Right as I walked in, the fire alarm went off.\"\n2. \"And my laptop was still on the desk, in the room I'd just been locked out of.\"\n3. \"In the end a caretaker let me back in through the car park.\"\n4. \"I email things to myself now. Every single time.\"\n\nWhy this order: the opening buys you attention, the turn earns it, the resolution repays it and the takeaway is the only optional part. Told in this order a story does not need to be dramatic to work.\n\nMindset: four parts, four sentences if you like. A short story with all four beats a long one missing the turn.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A story about the morning the fire alarm went off at work.",
          steps: [
            { front: "Step 1 · Open — one sentence, start where it moves", back: "\"Right as I walked in on Monday, the fire alarm went off.\"" },
            { front: "Step 2 · Turn — the moment it became a story", back: "\"And my laptop was still on the desk, in a building we were now not allowed into.\"" },
            { front: "Step 3 · Resolution — what you did, and what followed", back: "\"In the end a caretaker took pity on me and let me in through the car park.\"" },
            { front: "Step 4 · Takeaway — or say there is not one", back: "\"I email things to myself now. Every time, like a paranoid.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A story about trying a new hobby that went badly.",
          steps: [
            { front: "Step 1 · Open — the feeling first", back: "\"I was so confident going into my first pottery class. Unwarranted, it turned out.\"" },
            { front: "Step 2 · Turn — where it changed", back: "\"Twenty minutes in, the thing collapsed and took most of the wheel with it.\"" },
            { front: "Step 3 · Resolution — how it ended", back: "\"The teacher rebuilt it in about forty seconds without looking up.\"" },
            { front: "Step 4 · Takeaway — the honest one", back: "\"I've been back four times. I'm still terrible and I like it more each week.\"" },
          ]
        },
      ]
    },
    {
      name: "Told On the Spot",
      guideFront: "Build the story one part at a time.",
      guideBack: "A line you could say at this step.",
      description: "Somebody has said a word and it is your turn. Pick fast, start before you have it all, and let the shape carry you. Steps: 1) Pick the first small one that arrives, 2) Open it, 3) Get to the turn quickly, 4) Land it short.\n\nThe shape of the whole thing:\n1. (prompt: \"food\" — first sushi, not best meal ever)\n2. \"The first time I tried sushi I was so nervous about it.\"\n3. \"And I hated the first piece. Properly hated it.\"\n4. \"Then I ate about nine more. I have no explanation.\"\n\nWhy this order: the picking is the hard part and it has a time limit. Once you have started, the four parts do the work, and the story does not need to be good — it needs to be told while the subject is still live.\n\nMindset: fifteen seconds to choose, then start. A mediocre story told now beats a great one you think of on the way home.",
      inputs: [
        {
          bundle: 'pro',
          situation: "The group is swapping stories and someone says \"travel\".",
          steps: [
            { front: "Step 1 · Pick — first small one, not best one", back: "(the night the taxi never came — not the whole interrailing summer)" },
            { front: "Step 2 · Open — one sentence", back: "\"There was a night in Portugal when the taxi just never came.\"" },
            { front: "Step 3 · Turn — get there fast", back: "\"And we realised the last bus had gone about an hour before we started waiting.\"" },
            { front: "Step 4 · Land it short", back: "\"So we walked eight kilometres in the dark and it was the best night of the trip.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Somebody says \"mistakes\" and it is nearly your turn.",
          steps: [
            { front: "Step 1 · Pick — recent beats impressive", back: "(the message about my boss, sent to my boss, last month)" },
            { front: "Step 2 · Open — the hook", back: "\"I once sent a message about my boss to my boss.\"" },
            { front: "Step 3 · Turn — the moment of noticing", back: "\"I watched the little 'read' appear underneath it. Nothing I could do.\"" },
            { front: "Step 4 · Land it short", back: "\"She replied 'fair'. We've never mentioned it since.\"" },
          ]
        },
      ]
    },
    {
      name: "Same Story, Different Feeling",
      guideFront: "Build the story one part at a time.",
      guideBack: "A line you could say at this step.",
      description: "The book's flexibility exercise, and the one that teaches most: take one set of events and tell it twice, once as the funny version and once as the honest one. Steps: 1) The events, flat, 2) The funny telling, 3) The honest telling, 4) Notice which one the moment wanted.\n\nThe shape of the whole thing:\n1. (the events: the interview, the wrong building, arriving late)\n2. \"I spent forty minutes in the wrong building. Confidently.\"\n3. \"I've never wanted anything as much as I wanted that job.\"\n4. (same events — one is for a party, one is for a friend)\n\nWhy this order: telling it flat first shows you that the events are not the story. The two versions are built from identical facts, which is the entire lesson: the feeling you put in is the choice, and it should be chosen rather than defaulted to.\n\nMindset: same events, two stories. Knowing both is what lets you pick the one the room can take.",
      inputs: [
        {
          bundle: 'pro',
          situation: "The interview you were late for because you went to the wrong building.",
          steps: [
            { front: "Step 1 · The events, flat", back: "\"I had an interview, I went to the wrong building, I was twenty minutes late.\"" },
            { front: "Step 2 · The funny telling", back: "\"I sat confidently in the wrong reception for forty minutes. Nobody questioned me.\"" },
            { front: "Step 3 · The honest telling", back: "\"I'd wanted that job for two years and I lost it in a lobby.\"" },
            { front: "Step 4 · Choose", back: "\"For a party, the first one. For someone who knows me, the second.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "The week your car broke down twice.",
          steps: [
            { front: "Step 1 · The events, flat", back: "\"The car broke down on the Tuesday and again on the Friday.\"" },
            { front: "Step 2 · The funny telling", back: "\"The same mechanic, twice in one week. He'd started waving.\"" },
            { front: "Step 3 · The honest telling", back: "\"It was the week I worked out I couldn't afford to keep it.\"" },
            { front: "Step 4 · Choose", back: "\"Depends entirely who's asking, and whether they've got ten minutes.\"" },
          ]
        },
      ]
    },
  ],
  reframing: [
    {
      name: "Acknowledge, Ask, Offer",
      guideFront: "Take it one step at a time.",
      guideBack: "A line you could say at this step.",
      description: "The order that makes a reframe welcome rather than irritating. Steps: 1) Say the true hard thing first, 2) Ask whether they want another angle, 3) Offer it once and hold it loosely.\n\nThe shape of the whole thing:\n1. \"That's a horrible way to find out.\"\n2. \"Do you want another way of looking at it, or not right now?\"\n3. \"It'd have surfaced eventually, and better now than after you'd signed.\"\n\nWhy this order: acknowledgement first is what stops the reframe reading as a correction. Asking hands them the choice. Offering once and stopping is what keeps it an offer rather than an argument about whose reading is right.\n\nMindset: if you only remember one thing from this pack, remember this order.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend has found out they were left out of something at work.",
          steps: [
            { front: "Step 1 · Acknowledge — the true, hard sentence", back: "\"That's a horrible way to find out. I'd be livid.\"" },
            { front: "Step 2 · Ask — hand them the choice", back: "\"Do you want another angle on it, or do you want to be angry for a bit first?\"" },
            { front: "Step 3 · Offer, then stop", back: "\"It'd have come out eventually, and better now than in six months. That's all I've got.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague is convinced a presentation went badly.",
          steps: [
            { front: "Step 1 · Acknowledge — do not skip it", back: "\"It clearly didn't feel good in there.\"" },
            { front: "Step 2 · Ask — check they want it", back: "\"Can I tell you what it looked like from the back of the room?\"" },
            { front: "Step 3 · Offer, then stop", back: "\"Two people on phones, one real question. That's a normal Tuesday, not a disaster.\"" },
          ]
        },
      ]
    },
    {
      name: "Answering a Label",
      guideFront: "Take it one step at a time.",
      guideBack: "A line you could say at this step.",
      description: "Somebody has put a word on you. Three beats and it is over, without an argument. Steps: 1) Agree with the behaviour, 2) Rename it, 3) Own it and move on.\n\nThe shape of the whole thing:\n1. \"That's fair, I do do that.\"\n2. \"I'd call it particular rather than fussy.\"\n3. \"And I'm completely at peace with it. Anyway — what were we saying?\"\n\nWhy this order: agreeing first removes the fight, because they were expecting a denial. Renaming moves the conversation onto your word. Owning it and changing the subject ends it — a reframe you then defend for five minutes has become an argument.\n\nMindset: agree, rename, move on. The third step is what stops it becoming a conversation about you.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Somebody at work has called you fussy about detail, in front of others.",
          steps: [
            { front: "Step 1 · Agree with the behaviour", back: "\"That's fair, I do go over things twice.\"" },
            { front: "Step 2 · Rename it", back: "\"I'd call it particular. It's why the last audit was boring.\"" },
            { front: "Step 3 · Own it and move", back: "\"Entirely guilty and quite happy about it. Right — where were we?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A friend says you take everything too seriously.",
          steps: [
            { front: "Step 1 · Agree with the behaviour", back: "\"I do, yeah. I've always been like that.\"" },
            { front: "Step 2 · Rename it", back: "\"I take the things that matter seriously. That's the version I'd use.\"" },
            { front: "Step 3 · Own it and move", back: "\"I'd rather have that problem than the other one. Anyway, tell me about Friday.\"" },
          ]
        },
      ]
    },
    {
      name: "Deciding Not To",
      guideFront: "Take it one step at a time.",
      guideBack: "A line you could say at this step.",
      description: "You can see a reframe and you are going to hold it. Three beats that leave the person better off than a reframe would have. Steps: 1) Say the thing is bad, 2) Say the feeling fits, 3) Ask what would actually help.\n\nThe shape of the whole thing:\n1. \"That's just bad. I'm not going to try to make it better.\"\n2. \"You're allowed to be as fed up as you are.\"\n3. \"What would actually help right now?\"\n\nWhy this order: naming it as bad is the opposite of a silver lining and it lands as honesty. Saying the feeling fits removes the second problem, which is wondering whether the reaction is reasonable. The question at the end hands them the wheel.\n\nMindset: this combo is the most useful one in the pack in the first hour after something has gone wrong. The reframes can wait a week.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend's plan has fallen apart the same afternoon.",
          steps: [
            { front: "Step 1 · Name it as bad", back: "\"That's just bad. I'm not going to look for an upside today.\"" },
            { front: "Step 2 · Say the feeling fits", back: "\"You're allowed to be gutted about it. Anyone would be.\"" },
            { front: "Step 3 · Ask what helps", back: "\"What would actually help right now — company, or a plan, or neither?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Somebody is dreading something that genuinely is going to be hard.",
          steps: [
            { front: "Step 1 · Name it honestly", back: "\"It probably will be as bad as you think. I'm not going to pretend.\"" },
            { front: "Step 2 · Say the feeling fits", back: "\"Dreading it is the sensible response, not a failure of attitude.\"" },
            { front: "Step 3 · Ask what helps", back: "\"Do you want to talk about the day itself, or think about something else entirely?\"" },
          ]
        },
      ]
    },
  ],
  danbacon1: [
    {
      name: "Moving from \"Nice Guy\" to \"Lover\"",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Step 1: The Statement-Question Combo (start easy) -> Step 2: Making Fun of Her Answers (create friction) -> Step 3: Misinterpreting Intent (sexualize). This sequence moves the interaction from neutral to high-attraction.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You see a stylish co-worker you haven't spoken to much standing by the drinks table.",
          steps: [
            { front: "The Statement-Question Combo — share your status.", back: "\"I'm just taking a break from the networking madness. How are you finding the event so far?\"" },
            { front: "Making Fun of Her Answers — she says she is an \"Accountant.\"", back: "\"An accountant? I knew it! You have that 'I’m secretly a math genius' look. Where are you hiding your calculator?\"" },
            { front: "Misinterpreting Intent — she giggles and says \"You're funny.\"", back: "\"Flattery will get you nowhere, but keep it coming. I've seen the way you've been looking at me—you're totally trying to seduce me, aren't you?\"" },
          ]
        },
      ]
    },
    {
      name: "The \"Unpredictable\" Closer",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Step 1: Unexpected Reactions (break the pattern) -> Step 2: Playfully Challenging Humor (test her) -> Step 3: Misinterpreting Intent (assume the lead).",
      inputs: [
        {
          bundle: 'pro',
          situation: "You have just finished a first date and are walking her to her car or door.",
          steps: [
            { front: "Unexpected Reactions — set a playful boundary.", back: "\"Look, we can walk together, but no holding hands yet. I don't move that fast—you're going to have to win me over more.\"" },
            { front: "Playfully Challenging Humor — she laughs and asks \"Oh really?\"", back: "\"Exactly. You seem cool, but you also look like trouble. I'm not sure if I should trust you yet.\"" },
            { front: "Misinterpreting Intent — she reaches for her keys and touches your hand.", back: "\"Woah, settle down! You're already throwing yourself at me? I told you, I'm a gentleman. Just take my number and we'll see if you behave.\"" },
          ]
        },
      ]
    },
  ],
  danbacon2: [
    {
      name: "From Challenge to Lead",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Trains the transition from handling her pressure to taking control. Step 1: Passing Confidence Tests (absorb) -> Step 2: Conveying High Status (re-establish value) -> Step 3: The \"You Can't Tame Me\" Impression (assume the lead).",
      inputs: [
        {
          bundle: 'pro',
          situation: "You meet an attractive woman at a bar. She is used to attention and immediately tries to put you on the back foot.",
          steps: [
            { front: "Passing Confidence Tests — she says, \"That's a weird shirt. Why are you wearing that?\"", back: "\"Really? I thought it was a cool shirt. What should I be wearing instead? Give me some fashion tips.\" (Smile and laugh)" },
            { front: "Conveying High Social Status — she gives some advice.", back: "\"Okay, I see you're stylish. I'm Dan, by the way. How are you doing tonight?\" (Relaxed, expectant tone)" },
            { front: "The \"You Can't Tame Me\" Impression — she asks if you talk to every girl like this.", back: "\"I'm a good guy, but don't get any ideas—I'm not that easy. You're going to have to wine and dine me more than that.\"" },
          ]
        },
      ]
    },
    {
      name: "The \"Selector\" Interaction",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Step 1: Flipping the Script (place her under spotlight) -> Step 2: Avoiding Self-Qualification (hold frame) -> Step 3: Conveying High Status (assume dominance).",
      inputs: [
        {
          bundle: 'pro',
          situation: "You tell her you work in IT and she tries to judge you for it.",
          steps: [
            { front: "Flipping the Script — she says \"Oh, so you're an IT nerd then.\"", back: "\"No, I'm a smart man who understands code. You're just jealous because it's too difficult for you!\"" },
            { front: "Avoiding Self-Qualification — she asks \"But do you actually make money?\"", back: "[Don't list achievements] \"Why are you so worried about my money? Are you one of those gold-digging girls who wants me to buy her things?\"" },
            { front: "Conveying High Social Status — she laughs.", back: "\"I like you already. You're funny. Come on, let's go get a drink at the bar.\"" },
          ]
        },
      ]
    },
  ],
  danbacon3: [
    {
      name: "The \"Good Girl\" Loop",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Step 1: Lovingly Expecting More (the ask) -> Step 2: Positive Reinforcement (the reward) -> Step 3: General Leadership (the next move). This sequence trains the \"Good Girl Switch\" by linking her compliance to pleasure and your leadership.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are both relaxing, and you want her to be more attentive.",
          steps: [
            { front: "Lovingly Expecting More — ask for a small favor.", back: "\"Hey honey, can you go make me a coffee? Thanks.\"" },
            { front: "Positive Reinforcement — she brings it to you.", back: "\"[Stand up, give her a warm hug and a kiss] Thanks babe. You're such a good woman when you want to be.\"" },
            { front: "General Leadership — use the momentum to lead.", back: "\"Now that we're both caffeinated, get off your butt and let's go for a quick walk before it gets dark. Come on.\"" },
          ]
        },
      ]
    },
    {
      name: "The \"Respect Reset\"",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Step 1: Addressing Bad Behavior (set the boundary) -> Step 2: Emotional Independence (process the friction) -> Step 3: Positive Reinforcement (reward the change).",
      inputs: [
        {
          bundle: 'pro',
          situation: "She is snapping at you and trying to start a pointless argument.",
          steps: [
            { front: "Addressing Bad Behavior — call it out calmly.", back: "\"Hey, that wasn't cool. You're usually great, but talking to me like that? No, I don't like it.\"" },
            { front: "Emotional Independence — she continues to grumble; stay unreactive.", back: "\"[Don't argue back] I'm going to go work on my project for an hour. Let me know when you're ready to be a good girl again.\"" },
            { front: "Positive Reinforcement — an hour later, she comes over and apologizes/snuggles.", back: "\"I appreciate that you're being sweet now. That's the woman I love. Come here.\"" },
          ]
        },
      ]
    },
  ],
  danbacon4: [
    {
      name: "The \"Friction to Dominance\" Sequence",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Step 1: Ignoring Ridiculous Rules (handle the test) -> Step 2: Restoring the Spark (assume dominance) -> Step 3: Expressing Real Moods (be authentic). This sequence moves the relationship from a state of \"testing/friction\" back into a state of \"attraction/connection.\"",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are at home and she is acting a bit \"bratty,\" making rules about where you can sit and how you can touch her.",
          steps: [
            { front: "Ignoring Ridiculous Rules — she says, \"You can sit next to me, but no touching.\"", back: "\"Whatever! I tell you what: from now on, all you're getting is butt squeezes and hugs from me. Come here.\"" },
            { front: "Restoring the Spark — she giggles; escalate.", back: "\"[Bring her in for a firm 10-second hug] Just relax. [Lift her chin and kiss her] You're copping it tonight.\"" },
            { front: "Expressing Real Moods — the tension is gone; be real.", back: "\"Actually, I've had a hectic day and I just wanted to relax with my girl. Tell me what you've been up to today.\"" },
          ]
        },
      ]
    },
    {
      name: "The \"Selector\" Date Loop",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Step 1: Let Her Win You Over (the pitch) -> Step 2: Expressing Real Moods (the authentic response) -> Step 3: Restoring the Spark (the sexualize).",
      inputs: [
        {
          bundle: 'pro',
          situation: "She wants to go to a specific bar that you find a bit \"boring.\"",
          steps: [
            { front: "Let Her Win You Over — she suggests the bar.", back: "\"I'm not really in the mood for that spot tonight. Win me over—what's so good about it that I should change my mind?\"" },
            { front: "Expressing Real Moods — she pitches it; give your real take.", back: "\"Okay, the music is good there, I agree. But the drinks are overpriced and the crowd is usually lame. I'm open to it if you promise to be fun though.\"" },
            { front: "Restoring the Spark — she promises to be fun.", back: "\"Alright, let's go. But don't get any funny ideas—I'm a gentleman. You're going to have to wine and dine me more if you want a kiss at the end of the night.\"" },
          ]
        },
      ]
    },
  ],
  oconnor1: [
    {
      name: "The Public Bus-Throwing",
      guideFront: "The situation and strategy to use.",
      guideBack: "The tactical execution.",
      description: "For when a superior blames you for a failure in front of others. You maintain professional dignity while forcing them to offer a public solution. **Mindset:** Acting in good faith while refusing to be the scapegoat. **Scenario:** A boss tells a client on a call, \"Dan won't be turning things in late anymore,\" blaming you for their own delay.",
      inputs: [
        {
          bundle: 'pro',
          situation: "",
          steps: [
            { front: "1: Empathize & Validate.", back: "\"I can understand why this would be upsetting to you if you thought I was turning things in late.\"" },
            { front: "2: Address Behavior/Take Responsibility Tactically.", back: "\"Since that is my fault and I’m taking responsibility for it, I’d like some help right now when everyone is watching to help rectify that.\"" },
            { front: "3: Question/Clarify.", back: "\"Could you please show me when I've turned them in late so we can fix the breakdown immediately?\"" },
          ]
        },
      ]
    },
    {
      name: "The Micromanager Reset",
      guideFront: "The situation and strategy to use.",
      guideBack: "The tactical execution.",
      description: "For supervisors who break agreements or hover. It uses a structured script to take responsibility for time management and sets a visual boundary. **Mindset:** Retraining people how to treat you. **Scenario:** A boss keeps checking in every hour despite a \"daily report\" agreement.",
      inputs: [
        {
          bundle: 'pro',
          situation: "",
          steps: [
            { front: "1: A-E-I-O-U Script.", back: "\"I've found I'm not managing my time as efficiently as I could. I'm implementing a new system. If you help me, I can focus more on the work you need.\"" },
            { front: "2: Availability Monitor.", back: "(Points to a red/green sign). \"When this is red, it means I'm in a focused block. Please come back when it's green so I can give you my full attention.\"" },
            { front: "3: \"What will it take?\" Statement.", back: "\"John, we made an agreement on feedback. What will it take to get you to respect that agreement?\"" },
          ]
        },
      ]
    },
    {
      name: "The Toxic Colleague Trap",
      guideFront: "The situation and strategy to use.",
      guideBack: "The tactical execution.",
      description: "For passive-aggressive snipers. It uses silence and controlled body language to return the discomfort to the attacker. **Mindset:** Taking away the reward of your emotional reaction. **Scenario:** A colleague makes a snide remark about your personal life at the break room table.",
      inputs: [
        {
          bundle: 'pro',
          situation: "",
          steps: [
            { front: "1: 3-Second Look.", back: "(Look them directly in the eyes for three seconds of silence; let them \"cook their own goose\")." },
            { front: "2: Clarifying Question.", back: "\"When you say that, it sounds to me like you're trying to shame me in front of the group. Is that what you're saying?\"" },
            { front: "3: Icy Stare.", back: "(Maintain eye contact with eyelids slightly covering the iris, then pivot). \"Charlie, could you pass the coffee?\"" },
          ]
        },
      ]
    },
  ],
  oconnor2: [
    {
      name: "Implementing the Monitor",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Use the AEIOU script to set the groundwork, then enforce the sign, and follow up during a \"Green\" period. This ensures that the transition to a new system is understood as a productivity move, not a personal rejection.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You have a colleague, Mary, who stops by every morning to chat for 20 minutes, killing your most productive hour.",
          steps: [
            { front: "The Availability Monitor (Groundwork) — use AEIOU to explain.", back: "\"Mary, I need your help. I’ve noticed I’m not as efficient as I could be [A], and I'm falling behind [E]. I'm asking you to help me use this new 'Red/Green' system [I].\"" },
            { front: "The Availability Monitor (Signal) — set the or-else and benefit.", back: "\"If it's red, I won't be able to visit [O]. But when it's green, I can actually focus on what you're saying [U]. Can I count on you?\"" },
            { front: "The Availability Monitor (Enforcer) — next morning, she walks in while Red.", back: "(Simply point to the red sign with a small, polite smile and keep working)." },
            { front: "Turning Toward — later, when you turn the sign to Green.", back: "\"Hey Mary! I'm green now. What was that thing you wanted to tell me this morning? I'm all yours.\"" },
          ]
        },
      ]
    },
    {
      name: "The Firm No",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Use the Diplomatic Decline, and if they push, use the Broken Record technique to stand your ground. This prevents you from introducing \"new justifications\" that the other person can use to argue with you.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Your boss asks if you can come in Saturday morning to \"help out\" with some filing.",
          steps: [
            { front: "The Diplomatic Decline — give the four-step no.", back: "\"I'd like to be helpful, however I'm afraid I have plans this Saturday. I'm wondering, could I handle those files first thing Monday?\"" },
            { front: "Broken Record — they say \"But I really need this done before Monday morning.\"", back: "\"That may be, but I have already made plans for this weekend and cannot come in. I’ll be happy to do it Monday.\"" },
            { front: "Broken Record — they try guilt: \"I guess the team just isn't a priority for you.\"", back: "\"That may be, but again, I've made other plans. I look forward to tackling this with a fresh mind on Monday.\"" },
            { front: "Power-Down Phrases — they won't let it go.", back: "\"I think we both understand the situation. I'm going to get back to work now so I can finish today's tasks. Goodbye.\"" },
          ]
        },
      ]
    },
  ],
  oconnor3: [
    {
      name: "Handling the Office Sniper",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Use Selective Engagement (The 3-Second Look) to let the bait hang, followed by an Empowering Statement to dictate the next move. • This forces the narcissist to realize that their \"passive-aggressive\" game isn't working.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are eating lunch. A narcissist says, \"I see you're eating that burger—I guess the diet didn't last through Monday.\"",
          steps: [
            { front: "Selective Engagement — use the 3-second look.", back: "(Stop eating, look them directly in the eyes for 3 seconds without smiling or frowning)." },
            { front: "Empowering Statements — offer a choice for the future.", back: "\"I'm sure you aren't trying to be rude, but I don't allow personal comments about my health. Would you like to talk about work, or should I finish my lunch in private?\"" },
            { front: "Selective Engagement — they try to backtrack: \"Jeez, I was just kidding!\"", back: "(Maintain the 3-second look again, then go back to your burger without responding to the excuse)." },
          ]
        },
      ]
    },
    {
      name: "The \"Professional\" Shield",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Use the Communication Hamburger to address a behavior, and if they try to make it personal, use the \"Irrelevant\" Block. • This sequence moves from \"improving the work\" to \"denying the intimacy.\"",
      inputs: [
        {
          bundle: 'pro',
          situation: "Your coworker is constantly \"checking in\" on you in a way that feels like micromanagement and sabotage.",
          steps: [
            { front: "The Communication Hamburger — address the behavior.", back: "\"John, when you check my draft every hour, it concerns me because it appears you don't believe I'm capable of finishing it on time.\"" },
            { front: "The \"Irrelevant\" Block — they say, \"I'm just trying to be a good friend and help you out.\"", back: "\"I appreciate the thought, but to me, our relationship has always been strictly professional. I'd thank you for keeping it that way.\"" },
            { front: "Empowering Statements — set the rule.", back: "\"I'll have the update for you at 5:00. Would you like to wait until then, or would you prefer to let the manager handle the coordination?\"" },
          ]
        },
      ]
    },
  ],
  oconnor4: [
    {
      name: "The Forward-Focused Feedback",
      guideFront: "The step you are on — say your version out loud.",
      guideBack: "One way it could sound.",
      description: "Use a Lead-in to focus their attention, followed by LBNT for the correction, and a Closer to finish with a bang. • This ensures the person feels supported while clearly understanding the required change.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are sitting in an office with a teammate. Their report is correct but visually confusing.",
          steps: [
            { front: "Lead-in Lines — use their name and \"I\" language.", back: "\"Mark, I need your help. I'm concerned about the Jones report layout.\"" },
            { front: "LBNT (Liked Best) — start with the positive.", back: "\"I liked the accuracy of the figures you gathered. They are exactly what we need.\"" },
            { front: "LBNT (Next Time) — give the instruction.", back: "\"Next time, if you use a standard table format for the costs, it will be much easier for the client to read.\"" },
            { front: "Lead-in & Closing Lines — wrap it up.", back: "\"Does that sound doable for you? [Pause] Great. I'm going to get back to my desk now. Goodbye.\"" },
          ]
        },
      ]
    },
    {
      name: "Correcting a Rule-Breaker",
      guideFront: "The step you are on — say your version out loud.",
      guideBack: "One way it could sound.",
      description: "Use \"I\" instead of \"You\" to state the issue, and then the D-A-R-T script to get them back on track. • Moves from internal observation to public accountability.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are a team lead. A colleague walks in 10 minutes late for the third time this week.",
          steps: [
            { front: "\"I\" Instead of \"You\" — state the observation.", back: "\"I find it difficult to run an effective meeting when we have to repeat the first 10 minutes.\"" },
            { front: "D-A-R-T (Describe & Address) — show the intent and the distraction.", back: "\"I'm here to ensure our team hits its goals. However, late starts are counterproductive to our mission.\"" },
            { front: "D-A-R-T (Redirect & Tag) — ask for the change.", back: "\"What do you say we all agree to be in our seats by 9:00 sharp? That's reasonable, isn't it?\"" },
          ]
        },
      ]
    },
  ],
  oconnor5: [
    {
      name: "The Executive Entry",
      guideFront: "The step you are on — say your version out loud.",
      guideBack: "One way it could sound.",
      description: "Combine Territorial Markers, Vocal Power Tone, and The Steeple to establish authority from the first second of a meeting. • This ensures that before you even get to the meat of your message, the room has already accepted you as a person of consequence.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You walk into the room. The board members are chatting amongst themselves. You have a folder and a laptop.",
          steps: [
            { front: "Territorial Markers — claim your space.", back: "(Firmly move your chair to the table, set your laptop down, and place your folder to the side to mark your area)." },
            { front: "Vocal Power Tone — capture the room's attention.", back: "(Speak loudly enough to cut through the chatter) \"Good morning, everyone. I'm Dan. I have the solutions for the Q3 objectives.\"" },
            { front: "The Steeple — anchor your first key point.", back: "(As you deliver your opening line, plant your forearms and put your fingertips together for 4 seconds)." },
            { front: "The Look Away — manage the connection.", back: "(Maintain eye contact for 7 seconds, then glance at your slides before returning your gaze to the CEO)." },
          ]
        },
      ]
    },
    {
      name: "Handling a \"Stare Down\"",
      guideFront: "The step you are on — say your version out loud.",
      guideBack: "One way it could sound.",
      description: "Use the Icy Stare and The Look Away to neutralize a challenger's attempt to intimidate you. • This demonstrates that you are comfortable with power but are not playing \"childish\" dominance games.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You just told a coworker you wouldn't do their work. They are standing in your doorway, staring at you without saying a word.",
          steps: [
            { front: "The Look Away — notice the aggression and stay calm.", back: "(Meet their eyes comfortably, keeping your eyelids in the 'Icy Stare' position—eyelids covering the top of the iris)." },
            { front: "Selective Engagement — use the 3-second look.", back: "(Simply look at them for 3 seconds without smiling or speaking. Let them 'cook their own goose')." },
            { front: "The Look Away — break the tension on your terms.", back: "(After 7 seconds, calmly look down at your keyboard and continue your work as if they aren't there)." },
          ]
        },
      ]
    },
  ],
  oconnor6: [
    {
      name: "Handling a Pushy Request",
      guideFront: "The step you are on — say your version out loud.",
      guideBack: "One way it could sound.",
      description: "Use a Coping Statement to stay calm, followed by The Broken Record to hold the line, and \"I Forgive You\" if they eventually apologize for their persistence. • This ensures you stay regulated while being persistent.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Mark wants you to give him access to a restricted file. You've already said no, but he's getting aggressive and personal.",
          steps: [
            { front: "Coping Statements — you feel your temper rising.", back: "(Internal) \"I am in control of this relationship. I am a calm professional.\"" },
            { front: "The Broken Record — Mark says, \"Come on, I thought we were friends! Just give me the password.\"", back: "\"I understand this is a sensitive timeline, however I must stick to the established security protocol. I can't share the password.\"" },
            { front: "The Broken Record — Mark snaps: \"You're just being a difficult gatekeeper.\"", back: "\"That may be, but again, I am sticking to the protocol. I'm sure you can respect that.\"" },
            { front: "\"I Forgive You\" — Mark cools down and says, \"Sorry Dan, I'm just stressed about the deadline.\"", back: "\"I understand the pressure. I forgive you. Let's get back to work.\"" },
          ]
        },
      ]
    },
    {
      name: "Preparing for the Raise Talk",
      guideFront: "The step you are on — say your version out loud.",
      guideBack: "One way it could sound.",
      description: "Use The Value Journal to gather data, and Coping Statements to maintain executive presence during the actual meeting. • Data + Calm = Power.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are meeting with your manager to discuss your salary for the next year.",
          steps: [
            { front: "The Value Journal — a week before the meeting.", back: "\"I've dropped off a summary of my quantifiable contributions this year. I'd like us to reference those during our review.\"" },
            { front: "Coping Statements — you are sitting in the hallway waiting to be called in.", back: "(Internal) \"I am a high-value asset to this team. I am calm and confident.\"" },
            { front: "The Broken Record — the manager says, \"The budget is tight this year for everyone.\"", back: "\"I understand the budget constraints, however based on the $50k in new revenue I generated, a raise is a logical return on investment.\"" },
          ]
        },
      ]
    },
  ],
  oconnor7: [
    {
      name: "The Masterful Introduction",
      guideFront: "The step you are on — say your version out loud.",
      guideBack: "One way it could sound.",
      description: "Combine the PPT Opener with the Visual Hook and OFF technique to turn a stranger into a warm connection. • Moves from \"Shared Environment\" to \"Personal Connection\" to \"Established Rapport.\"",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are standing by the snack table. A man walks up and starts looking at the food.",
          steps: [
            { front: "The \"Person, Place, or Thing\" Opener — notice a detail.", back: "\"The catering here is actually impressive for a Tuesday, isn't it?\"" },
            { front: "The Visual Hook for Names — he introduces himself as 'Joe'.", back: "\"Joe, always a pleasure. I'm Dan.\" (Picture a cup of 'Joe' coffee in his hand; repeat 'Joe' three times)." },
            { front: "The OFF Technique (Offer) — build instant service rapport.", back: "\"I was just about to grab a workbook from the front. Joe, would you like me to grab you one as well?\"" },
            { front: "The OFF Technique (Familiar Language) — as you walk away.", back: "\"I'll be right back, Joe. You're in charge of the cookies while I'm gone!\"" },
          ]
        },
      ]
    },
    {
      name: "Empowering a Teammate",
      guideFront: "The step you are on — say your version out loud.",
      guideBack: "One way it could sound.",
      description: "Use specific \"Your\" language and shift to Empowering Praise to build self-esteem and visibility. • This transforms a generic \"Good job\" into a meaningful leadership moment.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Your employee, Mary, has just handed you a perfectly organized file that solved a major headache for you.",
          steps: [
            { front: "\"Your\" instead of \"You\" — make it personable.", back: "\"Mary, your attention to detail on this file really shines through. It solved exactly the problem I was having.\"" },
            { front: "Empowering Praise — shift the pride to her.", back: "\"You did a fantastic job. You should be really proud of yourself for this one.\"" },
            { front: "Empowering Praise (Engagement) — add the tag question.", back: "\"Were you aware that the whole team has been noticing how much you've stepped up lately?\"" },
          ]
        },
      ]
    },
  ],
  jimmy1: [
    {
      name: "The Foundation Check",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Discern their character through observation, then align on values, and set the standard for how you will handle the inevitable conflicts. • You move from observation to verbal agreement to procedural safety.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You've been seeing someone for two months. Everything feels great, but you want to ensure the foundations are solid before getting \"all-in.\"",
          steps: [
            { front: "Character Discernment — you are out at a busy restaurant where the service is slow.", back: "(notice if they are patient and empathetic or entitled and aggressive toward the staff)" },
            { front: "Values Alignment — later that night, you bring up the \"big\" stuff.", back: "\"I'm really enjoying us. I'd love to know what your non-negotiables are for a long-term partner.\"" },
            { front: "Enforcing Mutual Respect — they share their values, and you discuss how to handle disagreements.", back: "\"If we do this, can we agree that yelling and name-calling are off-limits, no matter how mad we get?\"" },
          ]
        },
      ]
    },
    {
      name: "Handling a \"Power Struggle\"",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Accepting Influence combined with Enforcing Mutual Respect to turn a fight back into a partnership. • You show you are malleable but also that you have firm limits on treatment.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You want to buy a new car; your partner thinks it's a bad financial move. The tension is rising.",
          steps: [
            { front: "Accepting Influence — they explain their fear about the savings account.", back: "\"You're right to be concerned about the safety net. Let's look at the numbers together.\"" },
            { front: "Enforcing Mutual Respect — they get frustrated and say, \"You're always so impulsive!\"", back: "\"I hear your frustration, but 'you always' feels like an attack. Can we stick to the car?\"" },
            { front: "Accepting Influence — they apologize and suggest a compromise.", back: "\"I can wait six months if we hit a specific savings goal first. I trust your judgment on the timing.\"" },
          ]
        },
      ]
    },
  ],
  jimmy2: [
    {
      name: "The Vulnerable Reveal",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Use the Soft Startup to set the stage, followed by the full Expression Formula to share a deep concern. • This ensures the partner is ready to listen before you share your core vulnerability.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Your partner has been spending a lot of time with new friends, and you are starting to feel insecure and left behind.",
          steps: [
            { front: "The Soft Startup — check for their capacity.", back: "\"Hey, I've been feeling a bit disconnected. Do you have some time to sit and look me in the eyes for a bit?\"" },
            { front: "The Expression Formula (Facts) — state the event.", back: "\"You've been out with your new group three nights this week.\"" },
            { front: "The Expression Formula (Feelings & Meaning) — share the internal state.", back: "\"I’m feeling pretty anxious and lonely. The story I’m telling myself is that you're starting to prefer their company over mine.\"" },
            { front: "The Expression Formula (Need) — ask for reconnection.", back: "\"What I really need is for us to have a dedicated 'us' night this weekend to feel like a priority again.\"" },
          ]
        },
      ]
    },
    {
      name: "Correcting a \"Hard\" Startup",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "When you realize you've started with criticism, use self-regulation to stop and \"Requests Over Criticism\" to try again. • This trains the \"Repentant Leader\" mindset: owning your part of the conflict immediately.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You walk into the living room, see a mess, and immediately yell: \"You're so lazy! Why is it always me cleaning up?\"",
          steps: [
            { front: "The Soft Startup — realize you've been \"disregulated\" and call a timeout.", back: "\"Wait—stop. My heart is racing and I just attacked you. Let me take 30 seconds to breathe and start over.\"" },
            { front: "Requests Over Criticism — rephrase the attack into a vulnerable request.", back: "\"I'm feeling really overwhelmed by the state of the house. Would you be willing to spend 15 minutes helping me tidy up?\"" },
            { front: "Owning the Narrative — explain the \"why\" behind the snap.", back: "\"I'm sorry I called you lazy. The story I told myself was that I'm alone in this, but I know that's not fair.\"" },
          ]
        },
      ]
    },
  ],
  jimmy3: [
    {
      name: "The Safe Harbor Loop",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Start with the \"Vulnerable\" code word to set the tone, follow with Compassionate Curiosity to understand, and finish with Validation Without Agreement. • This ensures the partner feels safe enough to share the _real_ hurt, not just the \"surface\" anger.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Things have been tense for a week. You want to have a \"real\" talk about the distance you've both been feeling.",
          steps: [
            { front: "The \"Vulnerable\" Code Word — set the stage.", back: "\"Vulnerable. I've been feeling some distance between us and it's making me anxious.\"" },
            { front: "Compassionate Curiosity — they admit they've been pulling away too.", back: "\"I'm glad you're being honest. What story have you been telling yourself about why we're distant?\"" },
            { front: "Validation Without Agreement — they say they feel like you don't enjoy their company anymore.", back: "\"I can see how you'd feel that way since I've been so quiet. It makes sense that you'd feel rejected.\"" },
            { front: "Compassionate Curiosity — dig for the solution.", back: "\"What do you need from me tonight to feel like a priority again?\"" },
          ]
        },
      ]
    },
    {
      name: "Responding to a \"Bid\" for Connection",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Turning Toward a bid and following up with Compassionate Curiosity to turn a small moment into a bonding event. • This trains the habit of \"emotional responsiveness\" which predicts long-term success.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are watching TV and your partner walks in and says, \"My boss finally liked my presentation today.\"",
          steps: [
            { front: "Turning Toward Bids — give them your attention.", back: "(Mute the TV and look at them) \"That's amazing! I know how much work you put into that.\"" },
            { front: "Compassionate Curiosity — explore the win.", back: "\"What part of it did they like the most? Tell me the details.\"" },
            { front: "Turning Toward Bids — celebrate as a team.", back: "\"You've been crushing it lately. Let's go out for a treat tonight to celebrate.\"" },
          ]
        },
      ]
    },
  ],
  jimmy4: [
    {
      name: "From Heat to Regulation",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Recognize flooding, initiate a Reset with reassurance, and return with Curiosity. • This trains the ability to \"stop the bleed\" and return as a teammate.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are discussing a large credit card bill. Voices are rising, and you can feel your heart thumping in your chest.",
          steps: [
            { front: "The 30-Minute Reset — recognize flooding and call a timeout.", back: "\"Wait—my heart is racing and I’m starting to get aggressive. I need to take 30 minutes to breathe.\"" },
            { front: "The 30-Minute Reset — reassure the partner before leaving.", back: "\"I love you and I’m not abandoning this talk. I just want to be in a better headspace to hear you. I’ll be back at 8:00.\"" },
            { front: "The 30-Minute Reset — return and re-initiate the talk.", back: "\"Thank you for the break. I’m feeling much calmer. Can we try again? I want to understand what's worrying you about the bill.\"" },
          ]
        },
      ]
    },
    {
      name: "The Deep Repair",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Practice Radical Accountability for a mistake and follow it with Validating Past Pain to see if there's a deeper pattern. • This turns a \"cheap apology\" into a moment of deep connection.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You forgot your anniversary and your partner is visibly hurt and distant.",
          steps: [
            { front: "Radical Accountability — own the ball you dropped.", back: "\"I completely missed our anniversary and I am so sorry. I know how much that day means to you and I failed you there.\"" },
            { front: "Radical Accountability — validate the impact.", back: "\"I imagine that made you feel like you aren't a priority in my life, and that hurts my heart to think about.\"" },
            { front: "Validating Past Pain — check if this triggered an old wound.", back: "\"Does this feel like a pattern of me neglecting you that we need to talk about? I want to hear the whole story.\"" },
            { front: "Radical Accountability — offer a plan for change.", back: "\"I’ve set a recurring alert in my calendar and my phone for next year. I want you to be able to count on me.\"" },
          ]
        },
      ]
    },
  ],
  jimmy5: [
    {
      name: "The Daily Reconnection",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Use Non-Sexual Affection upon greeting, followed immediately by Out-Loud Appreciation to bridge the gap after a day apart. • This ensures the transition from \"Work/World\" to \"Home/Relationship\" is safe and warm.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You walk through the front door. Your partner is in the kitchen.",
          steps: [
            { front: "Non-Sexual Affection — greet them with physical presence.", back: "(Walk straight to them, put your phone away, and give them a 20-second hug)" },
            { front: "Out-Loud Appreciation — name something you're grateful for right now.", back: "\"I'm so glad to see you. Thank you for being the best part of my day.\"" },
            { front: "Sharing the Mental Load — look for an immediate way to serve.", back: "\"The kitchen looks like it was a battleground today. Let me take over the dishes while you tell me about your day.\"" },
          ]
        },
      ]
    },
    {
      name: "A Deep Check-In",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Move from general highlights to a \"vulnerability scale\" and finish with a specific request for support. • This sequence turns a \"logistics talk\" into an \"intimacy talk.\"",
      inputs: [
        {
          bundle: 'pro',
          situation: "The kids are in bed and you have 20 minutes of quiet time.",
          steps: [
            { front: "The Weekly Check-in — start with general mood.", back: "\"I love us. Let's do our check-in. What was your high light and low light from this week?\"" },
            { front: "The Weekly Check-in — check the connection scale.", back: "\"On a scale of 1 to 5, how connected have you felt to me? I want to know what I can do to move that closer to a 5.\"" },
            { front: "Sharing the Mental Load — identify a burden to carry.", back: "\"What's one thing weighing on you for this coming week that I can handle for you?\"" },
            { front: "Non-Sexual Affection — seal the talk with connection.", back: "(Reach over, hold their hand, and maintain eye contact) \"Thank you for being honest with me. I'm on your team.\"" },
          ]
        },
      ]
    },
  ],
  jimmy6: [
    {
      name: "Handling the \"Victim\" Bait",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "When a manipulator plays the victim to bypass your boundary, use The Bare Minimum Standard to hold the line and Indifference to close the loop. • This prevents you from being \"pulled back into the mud\".",
      inputs: [
        {
          bundle: 'pro',
          situation: "You tell your partner you need two hours of \"quiet time\" on Saturdays. They immediately pout and say, \"I guess I just don't matter to you as much as your hobbies do.\".",
          steps: [
            { front: "The Bare Minimum Standard — reassert the need without apology.", back: "\"My need for space has nothing to do with my love for you. I need these two hours to be a healthy partner.\"" },
            { front: "Indifference to Manipulation — they escalate: \"Fine! Just go be alone since you hate me so much!\"", back: "(Stay calm) \"I’ll see you in two hours for dinner. I love you.\"" },
            { front: "Indifference to Manipulation — they follow you, still complaining.", back: "(Say nothing, go to your designated space, and close the door)." },
          ]
        },
      ]
    },
    {
      name: "Navigating a Shame Spiral",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Recognize the internal trigger, use Healing the Shame Trigger to name it, and follow with Authenticity to state what you actually need. • This turns a potential explosion into a moment of vulnerability.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Your partner says, \"I felt lonely when you stayed in the office all night.\" You immediately feel like they are calling you a \"bad spouse.\".",
          steps: [
            { front: "Healing the Shame Trigger — name the internal reaction.", back: "\"I’m hearing 'you’re a bad spouse,' and it’s triggering a lot of shame in me right now.\"" },
            { front: "Healing the Shame Trigger — separate the identity from the behavior.", back: "\"I know you didn't say that, but I’m struggling not to get defensive. Can we pause for 60 seconds?\"" },
            { front: "Authenticity Over Pleasing — state your actual need for reassurance.", back: "\"What I need to know right now is that you still see me as a good partner, even though I messed up the timing.\"." },
          ]
        },
      ]
    },
  ],
  toddv1: [
    {
      name: "The \"Open to Hook\" Sequence",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Step 1: Statement Opener (get attention) -> Step 2: Narrating the Frame (establish value) -> Step 3: Open Loop (create intrigue). This sequence follows the \"Fred\" method: Focus, Relevance, Emotion, Decision.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You see a girl sitting alone at an outdoor cafe, looking elegant but bored.",
          steps: [
            { front: "Statement Opener — comment on her vibe.", back: "\"You have the most bubbly, elegant look about you. I had to meet you.\"" },
            { front: "Narrating the Frame — they giggle and say \"Thank you.\"", back: "\"You're welcome. I thought you might be the girl to finally impress me today.\"" },
            { front: "Open Loop — they ask \"Oh really? And how am I doing?\"", back: "\"Well, you're cute, but you also look like trouble. I'm not sure if I should love you or run away yet.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You see a group of three girls walking through a mall with many bags.",
          steps: [
            { front: "Statement Opener — address the leader.", back: "\"Excuse me, did you guys leave anything in the stores for the rest of us? I respect the hustle.\"" },
            { front: "Open Loop — they laugh and stop.", back: "\"Wait, I just noticed something. Are you guys best friends? There's a reason I'm asking.\"" },
            { front: "Narrating the Frame — they ask \"What reason?\"", back: "\"I'm just a boy from Queens living the dream, and I have a theory about groups like yours. I'm Todd.\"" },
          ]
        },
      ]
    },
  ],
  toddv2: [
    {
      name: "The \"Push-Pull Escalation\"",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Step 1: Push-Pull (create tension) -> Step 2: Qualifying (test her investment) -> Step 3: Disqualification (remove pressure). This creates a cycle where she feels the \"pull\" of your interest, the \"push\" of your standards, and the \"uncertainty\" of the outcome.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are talking to an attractive girl who is giving you a bit of the \"blase\" or acting slightly superior.",
          steps: [
            { front: "Push-Pull — compliment her look but add a spike.", back: "\"You have a very bubbly, elegant look... but you also look like you're a lot of trouble. I'm not sure about you.\"" },
            { front: "Qualifying — she giggles and asks \"What do you mean?\"", back: "\"Well, you seem fun, but tell me: are you as adventurous as you look? I only hang out with cool girls.\"" },
            { front: "Disqualification — she qualifies herself (\"I traveled to India alone!\").", back: "\"India? Okay, you get some points for that. But look, don't get any ideas—I'm not having sex with you tonight. I'm flying out early.\"" },
          ]
        },
      ]
    },
    {
      name: "The \"Interviewer\" Frame",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Step 1: The Neg (knock her off the pedestal) -> Step 2: Qualifying (screen for culture) -> Step 3: Push-Pull (reward investment). This sequence is designed for the \"10\" or the girl who is used to constant validation.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A girl who is very well-dressed and seems used to guys trying to impress her.",
          steps: [
            { front: "The Neg — unintentional honesty about her style.", back: "\"I love that outfit. It's so cool that you're trying to bring the 'Mean Girls' look back.\"" },
            { front: "Qualifying — she's shocked/amused; screen her.", back: "\"I'm curious though, behind all the designer labels... do you have a soul? What are you actually passionate about?\"" },
            { front: "Push-Pull — she starts talking about her art/hobbies.", back: "\"You're an artist? That's amazing. I love creative people... although most of them are crazy, so we're probably not going to get along.\"" },
          ]
        },
      ]
    },
  ],
  toddv3: [
    {
      name: "The \"Blueprint Connection\" Sequence",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Step 1: Cold Read (state your first impression) -> Step 2: Identify the Blueprint (guess her background/values) -> Step 3: Wide/Deep Rapport (pivot to emotion). This sequence helps you \"crack the iceberg\" of a polite, logical conversation.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are talking to a girl who is being very polite but staying very logical and \"guarded\" about her life.",
          steps: [
            { front: "The Cold Read — make a guess about her vibe.", back: "\"You seem like the type of girl who was the 'smart one' in her group growing up. Always having to have the right answers.\"" },
            { front: "Identifying the Blueprint — she giggles and says \"How did you know?\"", back: "\"I have a catalog in my head. You seem like you value intelligence and drive, but you're a little bit bored with the usual guys in this city.\"" },
            { front: "Wide and Deep Rapport — ask a deep question based on that.", back: "\"So tell me, with all that ambition... what's the one dream you're still chasing that has nothing to do with your resume?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You meet a girl who is dressed stylishly but has a very humble, friendly way of speaking.",
          steps: [
            { front: "Identifying the Blueprint — make a guess on her origin.", back: "\"I'm guessing you didn't grow up in this big, crazy city. You're too polite for that. Small town originally?\"" },
            { front: "Grounding Stories — she says \"Yes, Ohio.\"", back: "\"I get it. I grew up in Colorado. I used to think I'd stay there forever until I realized I wanted a bigger show. Coming here was a huge adjustment.\"" },
            { front: "Wide and Deep Rapport — pivot to how she feels.", back: "\"Ohio to here is a massive jump. What's the one thing you miss the most about the quiet life, and the one thing you'd never give up about being here?\"" },
          ]
        },
      ]
    },
  ],
  toddv4: [
    {
      name: "The \"Seeding to Closing\" Sequence",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Step 1: False Time Constraint (lowers guard) -> Step 2: Seeding the Pull (plants the idea) -> Step 3: Assumptive Closing (executes the move). This sequence follows the natural logistical progression from the \"Middle Game\" to the \"Resolution.\"",
      inputs: [
        {
          bundle: 'pro',
          situation: "You've been talking to a girl for 15 minutes at a crowded bar. The vibe is good but the environment is distracting.",
          steps: [
            { front: "False Time Constraints — mention you have to leave soon.", back: "\"I have to meet my friends in about 20 minutes, but I'm really enjoying this.\"" },
            { front: "Seeding the Pull — plant the seed of a quieter spot.", back: "\"I'd love to show you that rooftop lounge around the corner, but I don't think you're ready for that kind of view yet.\"" },
            { front: "Assumptive Closing — she says \"Oh really? I love views.\"", back: "\"[ __ ] it, let's go check it out for ten minutes before I have to run. Sco.\"" },
          ]
        },
      ]
    },
    {
      name: "The \"Vibe Save\" Sequence",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Step 1: Emotional Spiking (re-establishes premise) -> Step 2: False Time Constraints (takes off pressure) -> Step 3: Seeding the Pull (tests for compliance). This sequence is used to rescue a set that has gone \"flat\" or boring.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You've been talking for 10 minutes and it feels like an interview. She's looking at her phone.",
          steps: [
            { front: "Emotional Spiking — use a polarizing statement.", back: "\"You're the most ridiculous girl I've met all night. I think I like you, but you also totally disgust me.\"" },
            { front: "False Time Constraints — she giggles and puts the phone away.", back: "\"Look, I have to head off in a minute, but tell me something about you that isn't obvious.\"" },
            { front: "Seeding the Pull — she qualifies herself.", back: "\"Okay, you're actually kind of cool. I might have to take you for that drink on Sunday after all. We'll see.\"" },
          ]
        },
      ]
    },
  ],
  toddv5: [
    {
      name: "The \"Group to Isolation\" Sequence",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Step 1: Handling the Posse (win the friends) -> Step 2: The \"What Do I Want?\" Move (take the lead) -> Step 3: Passing Value Tests (hold the frame). This sequence moves you from the \"guy talking to a group\" to the \"leader taking the girl.\"",
      inputs: [
        {
          bundle: 'pro',
          situation: "You see a girl you like with three of her friends at a bar. They are all talking and laughing.",
          steps: [
            { front: "Handling the Posse — address the whole group.", back: "\"Wait, I just noticed something. Are you guys best friends? There's a reason I'm asking.\"" },
            { front: "The \"What Do I Want?\" Move — they engage; lead the target.", back: "\"You guys are awesome, but I'm stealing your friend for two minutes to get a drink. We'll be right back.\"" },
            { front: "Passing Value Tests — as you walk away, she says \"You're very assertive, aren't you?\"", back: "\"I'm glad you noticed. It's better than being a bumbling buffoon, right? I'm Todd.\"" },
          ]
        },
      ]
    },
    {
      name: "The \"Friction to Connection\" Sequence",
      guideFront: "What they said, and the strategy to answer it with.",
      guideBack: "One way it could sound.",
      description: "Step 1: Passing Value Tests (prove status) -> Step 2: Passing Comfort Tests (prove heart) -> Step 3: The \"What Do I Want?\" Move (execute desire).",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are on a date with a very attractive girl who is being difficult and testing you constantly.",
          steps: [
            { front: "Passing Value Tests — she says \"I bet you're a player.\"", back: "\"If by that you mean I'm a guy with options who chose to be here with you, then yes. Very perceptive.\"" },
            { front: "Passing Comfort Tests — she softens and says \"I just don't want to get hurt.\"", back: "\"I respect that. It's modest of you to think I could even hurt you yet. Let's just have a fun time and see where it goes.\"" },
            { front: "The \"What Do I Want?\" Move — the tension is high; move for the close.", back: "\"I'm tired of this bar. Let's go check out the view on the rooftop nearby. Sco.\"" },
          ]
        },
      ]
    },
  ],
  firststrategies: [
    {
      name: "The First Conversation",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Four steps, and it is a whole conversation with a stranger.\n\n1. **Opening Statement** — put something on the table\n2. **Follow the Thread** — take one piece of what they answered\n3. **Answer With a Hook** — they ask about you; leave a door open\n4. **Follow the Thread** — go back into what they said\n\n**Why this order:** the hook has to come after they have spoken, because a hook only works as an answer. Lead with something about yourself and it is a monologue; offer the same sentence when asked and it is an exchange.\n\n**What people do instead:** stop at step 3. Answering a question about yourself and then going quiet is where most first conversations end.\n\nMindset: six sentences, and neither of you had to be interesting.",
      inputs: [
        {
          bundle: 'free',
          situation: "You are on a platform with one other person, both looking at a board that has said \"delayed\" for fifteen minutes.",
          steps: [
            { front: "Opening Statement — the board changes to \"delayed\" again.", back: "\"That's the second time it's done that.\"" },
            { front: "Follow the Thread — they say, \"I've got a connection in Gothenburg I'm going to miss.\"", back: "\"Gothenburg — is it work, or are you escaping?\"" },
            { front: "Answer With a Hook — they say, \"Work, sadly. You?\"", back: "\"Home, luckily. I've been at a course all week that I understood about half of.\"" },
            { front: "Follow the Thread — they say, \"What kind of course?\"", back: "\"Communication, of all things. You said you do this run a lot — is it always like this?\"" },
          ]
        },
        {
          bundle: 'free',
          situation: "You are holding a coffee at the edge of a room where everyone else seems to have arrived together.",
          steps: [
            { front: "Opening Statement — someone stops beside you at the same table.", back: "\"There is a startling amount of cake for a Tuesday.\"" },
            { front: "Follow the Thread — they say, \"They always overdo it at these. I've been to four.\"", back: "\"Four — so you actually know what happens after lunch?\"" },
            { front: "Answer With a Hook — they say, \"Sadly yes. Is this your first?\"", back: "\"First one. I said yes in March, when March-me had no idea how busy I'd be.\"" },
            { front: "Follow the Thread — they say, \"That's how they get you.\"", back: "\"You said you'd done four, though. What made you keep coming back?\"" },
          ]
        },
        {
          bundle: 'free',
          situation: "You are standing among parents you half-recognise, none of whom you have ever spoken to, and the doors are late.",
          steps: [
            { front: "Opening Statement — the doors have been shut for five minutes past the hour.", back: "\"They have never once opened these on time.\"" },
            { front: "Follow the Thread — they say, \"Every day since September. I've stopped rushing.\"", back: "\"Since September — is this your first year here as well?\"" },
            { front: "Answer With a Hook — they say, \"Third. You?\"", back: "\"First. I've spent the whole term working out which gate is which.\"" },
            { front: "Follow the Thread — they say, \"It took me about a year.\"", back: "\"A year? Please tell me there's a trick to it.\"" },
          ]
        },
      ]
    },
    {
      name: "The Half Yes",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Someone has asked, and the answer is no — or not all of it.\n\n1. **Say It Back** — show you have the whole request\n2. **A Friendly No** — clear, warm, at most one reason\n3. **Ask Plainly** — offer the version you could do\n\n**Why this order:** saying it back first means the no arrives to someone who has been understood, rather than instead of it. And the offer belongs last — made before the no it reads as bargaining, made after it reads as a gift.\n\n**What people do instead:** a reason, then a vague no, then an apology. That leaves the other person unsure whether it was a no at all, and they come back on Thursday.\n\nMindset: understood, declined, and offered something — in that order.",
      inputs: [
        {
          bundle: 'free',
          situation: "A colleague stops by your desk on a Friday afternoon and asks whether you could take over a piece of work that starts on Monday.",
          steps: [
            { front: "Say It Back — they say, \"It's not huge. Two weeks, maybe three.\"", back: "\"So it's two or three weeks, starting Monday, on top of what I've got.\"" },
            { front: "A Friendly No — they say, \"Roughly, yes.\"", back: "\"I can't take that on, I'm afraid. Not this month.\"" },
            { front: "Ask Plainly — they say, \"Okay. I'll have to find someone else.\"", back: "\"Could you come back to me in June? I'd want it then.\"" },
            { front: "Follow the Thread — they say, \"June might be too late, honestly.\"", back: "\"Too late how — is there a deadline on it, or is it the client?\"" },
          ]
        },
        {
          bundle: 'free',
          situation: "A friend rings and asks if you can help them move flat on Saturday, which is the one day you had kept free.",
          steps: [
            { front: "Say It Back — they say, \"It's the whole day, probably eight till six.\"", back: "\"So the whole of Saturday, eight to six, with the van.\"" },
            { front: "A Friendly No — they say, \"Basically, yes.\"", back: "\"I can't do the whole day, I'm sorry — Saturday's the only day I've got.\"" },
            { front: "Ask Plainly — they say, \"No, that's fair.\"", back: "\"Could I do the morning instead? I'd rather do half than none.\"" },
            { front: "Answer With a Hook — they say, \"That'd actually help a lot. You alright otherwise?\"", back: "\"Knackered, mostly. I've said yes to too many things this month, which is why I'm being careful with this one.\"" },
          ]
        },
        {
          bundle: 'free',
          situation: "Someone from the school association rings and asks you to run the raffle table, which turns out to be a whole Saturday.",
          steps: [
            { front: "Say It Back — they say, \"It's setting up at nine and clearing away at four.\"", back: "\"So it's the whole of Saturday, nine to four, and I'd be running it on my own.\"" },
            { front: "A Friendly No — they say, \"That's about the size of it, yes.\"", back: "\"I can't take a whole day on, I'm afraid. Thanks for thinking of me, though.\"" },
            { front: "Ask Plainly — they say, \"Ah. That's a shame.\"", back: "\"Could you put me down for the last hour instead? I'd rather do a bit than nothing.\"" },
            { front: "Follow the Thread — they say, \"The last hour is actually the hardest one to fill.\"", back: "\"Hardest how — is it the clearing up, or has everyone gone home by then?\"" },
          ]
        },
      ]
    },
    {
      name: "The Second Answer",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "You asked, and the answer was not a simple yes.\n\n1. **Ask Plainly** — one sentence, then quiet\n2. **Say It Back** — when they push back, say their objection back\n3. **Follow the Thread** — go into whatever they raised\n\n**Why this order:** saying it back before you argue is what almost nobody does. Repeating the ask louder starts a negotiation; saying their objection back turns a refusal into a conversation — and the reason they gave is usually solvable.\n\n**What people do instead:** ask, hear a no, and ask again with more words. The second version is never more persuasive than the first. It is only longer.\n\nMindset: ask once, then listen. The second thing they say is usually the real one.",
      inputs: [
        {
          bundle: 'free',
          situation: "You want to start an hour later on Wednesdays, and you have been putting off asking for two months.",
          steps: [
            { front: "Ask Plainly — you have their attention and five minutes.", back: "\"Could I start at ten on Wednesdays from next month?\"" },
            { front: "Say It Back — they say, \"It's difficult with the Wednesday stand-up.\"", back: "\"So the problem is the stand-up specifically, not the hour itself.\"" },
            { front: "Follow the Thread — they say, \"Mostly, yes. It's the only time we're all in.\"", back: "\"All in — does that have to be a Wednesday, or is that just how it ended up?\"" },
            { front: "Ask Plainly — they say, \"I suppose it's habit.\"", back: "\"Could we try it on a Tuesday for a month and see?\"" },
          ]
        },
        {
          bundle: 'free',
          situation: "The kitchen has been left for four days running, and you have been leaving increasingly obvious signs instead of saying anything.",
          steps: [
            { front: "Ask Plainly — they come in and put a mug down.", back: "\"Could you do your washing up the same evening from now on?\"" },
            { front: "Say It Back — they say, \"I'm never in before nine, that's the thing.\"", back: "\"So it's not that you won't — it's that you get in when it's already late.\"" },
            { front: "Follow the Thread — they say, \"Exactly. By then I just want to sit down.\"", back: "\"Fair enough. What time do you actually get through the door on a bad day?\"" },
            { front: "Ask Plainly — they say, \"Half nine, sometimes ten.\"", back: "\"Could you do it before you leave in the morning instead? I don't mind when — just not four days.\"" },
          ]
        },
        {
          bundle: 'free',
          situation: "You paid for two tickets in March, your friend has not mentioned it since, and you have been waiting for them to bring it up.",
          steps: [
            { front: "Ask Plainly — you are having coffee and there is a natural pause.", back: "\"Could you send me your half of the tickets this week?\"" },
            { front: "Say It Back — they say, \"God, sorry — I thought I had. Things are tight until the 25th.\"", back: "\"So it's not that you'd forgotten. It's that the money isn't there until the 25th.\"" },
            { front: "Follow the Thread — they say, \"Pretty much. It's been a strange month.\"", back: "\"Strange how? You haven't said anything.\"" },
            { front: "Ask Plainly — they say, \"Just a lot at once, honestly.\"", back: "\"Then let's say the 26th, and I won't bring it up again.\"" },
          ]
        },
      ]
    },
  ],
  jfisher1: [
    {
      name: "The Neutral Ground",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Defuse a direct verbal attack by moving through silence, a repeat request, and an intent check.\n\n1. **Silence** — let their words hang in the air for five to seven seconds.\n2. **Return to Sender** — force them to say the insult again.\n3. **Decoding Intent** — spotlight their motive once they back down or double down.\n\nWhy this order: Silence drains the immediate amydala charge, repetition forces their prefrontal cortex to engage, and the intent check exposes the motive.\n\nMindset: Do not deliver on the same plane of hostility. Move them to your ground.",
      inputs: [
        {
          bundle: 'pro',
          situation: "An aggressive colleague loudly insults your work quality in front of others in the breakroom.",
          steps: [
            { front: "Return to Sender — you let five seconds of silence hang, then look them in the eye.", back: "\"Can you say that again for me?\"" },
            { front: "Decoding Intent — they stammer and backtrack, saying \"I just meant the layout was messy.\"", back: "\"Did you say that to make me look bad in front of the team?\"" },
            { front: "Straightening the Record — they say \"No, I was just frustrated.\"", back: "\"I remember the quality of my work differently. Let's stick to the facts.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A relative makes an ugly, direct comment about your personal life at the dinner table.",
          steps: [
            { front: "Return to Sender — you drop your hands, wait five seconds, and speak calmly.", back: "\"I need you to say that again.\"" },
            { front: "Decoding Intent — they go red and try to shrug it off with \"Never mind.\"", back: "\"Did you say that to hurt my feelings, or did you want to embarrass me?\"" },
            { front: "Naming the Reaction — they double down and say \"You're just too sensitive.\"", back: "\"I can tell I'm getting defensive, so I'm stepping away from this table.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A difficult customer calls you a scammer in front of other clients.",
          steps: [
            { front: "Return to Sender — you stand still, breathe, let the silence settle for six seconds.", back: "\"I need you to say that again to me.\"" },
            { front: "Decoding Intent — they look around, feeling the room go quiet, and sputter.", back: "\"Did you say that to pressure me into giving you a discount?\"" },
            { front: "Straightening the Record — they claim \"Your prices are robbery anyway.\"", back: "\"My prices match the standards we agreed on. I see things differently.\"" },
          ]
        },
      ]
    },
    {
      name: "The Clean Deflection",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Spot a backhanded dig, expose the hidden attitude, and set a firm boundary without ever looking defensive.\n\n1. **Calling Out Subtext** — identify and label the passive-aggressive dig.\n2. **Decoding Intent** — ask if they meant for the comment to sound rude.\n3. **Boundary Consequences** — establish what you will and will not tolerate moving forward.\n\nWhy this order: Exposing the subtext stops the passive-aggressive game, the intent check forces a choice, and the boundary locks your peace in place.\n\nMindset: You are giving them a manual on how to talk to you, not letting them press your remote.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A peer smiles and says, \"Oh, you finally got that promotion. I guess they had to fill the slot.\"",
          steps: [
            { front: "Calling Out Subtext — you pause, keeping your tone perfectly flat.", back: "\"Was that supposed to be a compliment, or was that the other kind of comment?\"" },
            { front: "Decoding Intent — they sputter, saying \"I was just joking, don't be so sensitive.\"", back: "\"Did you mean for that to sound belittling?\"" },
            { front: "Naming the Reaction — they roll their eyes and turn away.", back: "\"I can tell this isn't a productive conversation for me, so I'm heading back to my desk.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A teammate sarcastically sighs and says \"Great job, genius\" when a minor error is found.",
          steps: [
            { front: "Calling Out Subtext — you look directly at them.", back: "\"Should I read into that tone?\"" },
            { front: "Decoding Intent — they claim \"I didn't mean anything by it.\"", back: "\"Did you say that to undermine my contribution?\"" },
            { front: "Naming the Reaction — they shrug and look at their phone.", back: "\"I don't respond to sarcasm. If we want to solve this, we speak respectfully.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A relative looks at your outfit and sighs, \"Well, I guess comfort is your main priority now.\"",
          steps: [
            { front: "Calling Out Subtext — you let their words hang.", back: "\"I'm feeling some friction from you. Is everything okay?\"" },
            { front: "Decoding Intent — they say \"I'm just saying, in my day we dressed up.\"", back: "\"Did you say that to make me feel uncomfortable?\"" },
            { front: "Naming the Reaction — they huff and say \"You can't take any feedback.\"", back: "\"I can tell I'm getting frustrated, so I'm changing the subject.\"" },
          ]
        },
      ]
    },
    {
      name: "The Pause and Reset",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Recognize an emotional flooding event, voice your limits, and execute a clean, timed checkout before things combust.\n\n1. **Naming the Reaction** — claim your rising adrenaline or physical tension.\n2. **Calling Out Subtext** — note the circular nature of the current argument.\n3. **Checkout** — set a specific time to return when both nervous systems are calm.\n\nWhy this order: Voicing your state stops the reactive momentum, labeling the circle shows the futility, and the checkout preserves the relationship.\n\nMindset: Taking a timeout is not giving up. It is taking responsibility for how you show up.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You and your partner are yelling, going around in circles on the same issue at midnight.",
          steps: [
            { front: "Naming the Reaction — you feel your chest tightening and your breathing get shallow.", back: "\"I can tell I'm getting defensive and I'm starting to snap.\"" },
            { front: "Calling Out Subtext — you notice the familiar argument loop.", back: "\"We're running in circles here, and it's doing more harm than good right now.\"" },
            { front: "Naming the Reaction — you pause to breathe.", back: "\"I'm not leaving the conversation, but I need a thirty-minute walk to reset.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A coworker is shouting at you during a high-stakes project sync.",
          steps: [
            { front: "Naming the Reaction — you feel your temper flare.", back: "\"I can tell I'm getting frustrated and my blood is starting to boil.\"" },
            { front: "Calling Out Subtext — you address the dynamic, not the details.", back: "\"I don't respond to that volume. It's blocking us from finding a solution.\"" },
            { front: "Naming the Reaction — you stand up slowly.", back: "\"I'm taking a ten-minute break. I'll be back at my desk when we're ready to speak calmly.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A sibling is screaming at you about a sensitive inheritance dispute.",
          steps: [
            { front: "Naming the Reaction — you feel yourself starting to shake.", back: "\"I can tell I'm not ready to have this conversation at this volume.\"" },
            { front: "Calling Out Subtext — you label the conflict.", back: "\"This is getting too heated, and we're not actually listening to each other.\"" },
            { front: "Naming the Reaction — you take a deep breath.", back: "\"Let's put a time frame on this. I'll call you tomorrow night at six to discuss it.\"" },
          ]
        },
      ]
    },
  ],
  jfisher2: [
    {
      name: "The Reconciliation Runway",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Restore an estranged or broken relationship by moving through three clear steps: an agreement on facts, removing defenses, and inviting listening.\n\n1. **Agreement on facts (I know)** — state the macro-level reality that both of you must agree on.\n2. **Removing defenses (I'm not)** — eliminate their expected objections before they can raise them.\n3. **Inviting listening (I'm open)** — offer a safe, pressure-free space to listen rather than speak.\n\nWhy this order: The \"I know\" breaks the ice on common ground, the \"I'm not\" disarms their defense mechanism, and the \"I'm open\" shifts the focus entirely to their experience.\n\nMindset: You cannot litigate a relationship back together. Remove the sting first.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You want to break the ice with an estranged family member you haven't spoken to in years.",
          steps: [
            { front: "Agreement on facts (I know)", back: "\"I know there's a lot of distance between us right now, and I know things aren't how we both want them to be.\"" },
            { front: "Removing defenses (I'm not)", back: "\"I'm not trying to reopen past arguments, and I'm not asking you to change your mind.\"" },
            { front: "Inviting listening (I'm open)", back: "\"I'm open to having a conversation and just listening whenever you're ready.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You want to reconnect with an old business partner after a major, public falling out.",
          steps: [
            { front: "Agreement on facts (I know)", back: "\"I know things ended badly between us, and I know there has been a lot of unsaid tension.\"" },
            { front: "Removing defenses (I'm not)", back: "\"I'm not asking for an apology, and I'm not pushing this on my timeframe.\"" },
            { front: "Inviting listening (I'm open)", back: "\"I'm open to sitting down to hear your perspective whenever you're comfortable.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Reconnecting with a former close friend after a long, awkward silence.",
          steps: [
            { front: "Agreement on facts (I know)", back: "\"I know it's been a long time since we last spoke, and I know I've made mistakes.\"" },
            { front: "Removing defenses (I'm not)", back: "\"I'm not trying to pretend nothing happened, and I'm not wanting to cause more pain.\"" },
            { front: "Inviting listening (I'm open)", back: "\"I'm open to having a coffee and just listening to how you are, no strings attached.\"" },
          ]
        },
      ]
    },
    {
      name: "The Soft Dismiss",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "End a personal or professional relationship with clean, direct transparency instead of a manipulative compliment sandwich.\n\n1. **Eliminate small talk** — skip the pleasantries and weather talk to keep the discussion sincere.\n2. **Label the conversation** — warn their nervous system that a difficult topic is coming.\n3. **Deliver the bad news** — pull off the band-aid quickly with directness and kindness.\n\nWhy this order: Skipping small talk prevents the feeling of deception, labeling the conversation allows them to steady themselves, and immediate delivery respects their dignity.\n\nMindset: The compliment sandwich is hard to chew and impossible to swallow. Be transparent.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You need to let go of a junior contract worker whose output is not meeting standards.",
          steps: [
            { front: "Eliminate small talk", back: "\"Thank you for meeting with me today.\"" },
            { front: "Label the conversation", back: "\"This is going to be a difficult conversation.\"" },
            { front: "Deliver the bad news", back: "\"I have to let you go. The output doesn't match our current needs, but I look forward to seeing your future work elsewhere.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You need to end a dating relationship after three weeks because you don't feel a romantic connection.",
          steps: [
            { front: "Eliminate small talk", back: "\"Thank you for coming to meet me.\"" },
            { front: "Label the conversation", back: "\"This is going to be hard to say, but I want to be upfront with you.\"" },
            { front: "Deliver the bad news", back: "\"I don't feel the romantic connection I'm looking for, and I want to end things. I appreciate the time we spent.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You need to let a vendor know you are switching to another supplier.",
          steps: [
            { front: "Eliminate small talk", back: "\"Thank you for making time for this call.\"" },
            { front: "Label the conversation", back: "\"This is going to be a tough business update for us to share.\"" },
            { front: "Deliver the bad news", back: "\"We are transitioning our supply line to another vendor starting next month. Thank you for your support so far.\"" },
          ]
        },
      ]
    },
    {
      name: "The Collaborative Pivot",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Separate the person from the problem by shifting a face-to-face conflict into a side-by-side problem-solving session.\n\n1. **Validate first (I can see)** — acknowledge their perspective or frustration to lower their defenses.\n2. **Objectify the issue** — pull the problem out of their character and put it as a third-person object on the table.\n3. **Invite collaboration (I need help)** — use \"help\" language to turn them from an opponent into a teammate.\n\nWhy this order: Validation stops the immediate fight-or-flight reflex, objectifying the issue removes personal attacks, and asking for help invites mutual ownership.\n\nMindset: An argument is a knot to unravel, not a war to win.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A teammate gets highly defensive when you point out an error in the shared spreadsheet.",
          steps: [
            { front: "Validate first (I can see)", back: "\"I can see why this is frustrating to look at.\"" },
            { front: "Objectify the issue", back: "\"The spreadsheet layout is the bottleneck here. Let's look at the cells.\"" },
            { front: "Invite collaboration (I need help)", back: "\"I need your help figuring out how to get these numbers aligned.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A partner is angry about a missed household chore on a stressful evening.",
          steps: [
            { front: "Validate first (I can see)", back: "\"I can see how tired and frustrated you are right now.\"" },
            { front: "Objectify the issue", back: "\"The trash is the problem on the table. It's on the floor, not you or me.\"" },
            { front: "Invite collaboration (I need help)", back: "\"Could you help me work out a schedule that actually works for both of us?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A client is upset about a delivery delay on a high-priority shipment.",
          steps: [
            { front: "Validate first (I can see)", back: "\"I can see how this delay is putting pressure on your team.\"" },
            { front: "Objectify the issue", back: "\"The shipping delay is the bottleneck on the table. Let's look at the dates.\"" },
            { front: "Invite collaboration (I need help)", back: "\"I need your help determining how we can adjust the timeline to minimize the impact.\"" },
          ]
        },
      ]
    },
  ],
  talkingaboutyourself: [
    {
      name: "A First Conversation",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "The standard shape of being asked about yourself by someone you have just met.\n\n1. **Answer What They Are Really Asking** — give the version that is about you\n2. **Give a Detail** — one concrete thing they can pick up\n3. **Hand It Back** — now, and only now, turn it around\n4. **Match What They Gave** — meet whatever they offer in return\n\n**Why this order:** you answer three times before turning it around, which is three more than most people manage when nervous. The handover then lands as generosity rather than escape.\n\n**What people do instead:** answer briefly and immediately ask back. It looks like interest, and after four exchanges they know nothing at all.\n\nMindset: they are not testing you. They are finding out what you are like, and you are allowed to tell them.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend introduces you to someone and then immediately disappears to find drinks.",
          steps: [
            { front: "Answer What They Are Really Asking — they say, \"So what do you do?\"", back: "\"I teach English. Mostly to sixteen-year-olds, which is as loud as it sounds.\"" },
            { front: "Give a Detail — they say, \"That must be exhausting.\"", back: "\"Some days. This week I mostly argued with a printer, so it's been restful by comparison.\"" },
            { front: "Hand It Back — they laugh.", back: "\"That's me, anyway. How do you know Anna?\"" },
            { front: "Match What They Gave — they say, \"We worked together for years. I've just left, actually.\"", back: "\"Just left — by choice, or the other kind? I've done both.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Someone from another team sits down opposite you in the canteen and starts talking.",
          steps: [
            { front: "Answer What They Are Really Asking — they say, \"You're new, aren't you? Where were you before?\"", back: "\"A smaller place in Malmö. Half the people, twice the meetings.\"" },
            { front: "Give a Detail — they say, \"How's it been so far?\"", back: "\"Good. I've been to the wrong building twice, which is a personal record.\"" },
            { front: "Hand It Back — they say, \"Everyone does that in the first week.\"", back: "\"That's reassuring. How long have you been here?\"" },
            { front: "Match What They Gave — they say, \"Eleven years. Longer than I meant to be.\"", back: "\"Longer than you meant to — what made you stay?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You have been placed at a table with people you do not know, and the person beside you turns to you as the starters arrive.",
          steps: [
            { front: "Answer What They Are Really Asking — they say, \"And which side are you?\"", back: "\"Bride's. We shared a flat for two years, which is how you learn who someone really is.\"" },
            { front: "Give a Detail — they say, \"That's a proper test.\"", back: "\"It is. She once reorganised my bookshelves by colour while I was away for a weekend.\"" },
            { front: "Hand It Back — they say, \"That's a crime.\"", back: "\"It genuinely is. What about you — how do you know them?\"" },
            { front: "Match What They Gave — they say, \"I'm his cousin. We were close as kids and less so now.\"", back: "\"Less so now — is that distance, or something that happened?\"" },
          ]
        },
      ]
    },
    {
      name: "Going a Bit Deeper",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "What happens when a light conversation gets an opportunity to become a real one.\n\n1. **Match What They Gave** — they went one level down, so go with them\n2. **Say the Small True Thing** — plainly, without the full weight\n3. **Name What You Are Into** — the thing that is actually helping or occupying you\n4. **Hand It Back** — and give them the same opening they gave you\n\n**Why this order:** the first step is the decision, and it is theirs as much as yours. Nothing dramatic follows: one honest answer, one thing you care about, and the door held open on the way out.\n\n**What people do instead:** stay breezy through the opening, which quietly answers the question they were really asking — whether it was safe.\n\nMindset: they opened a door. Walking through it is the whole move, and it is smaller than it feels.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend you see every few months says, more seriously than usual, that the year has been harder than they let on.",
          steps: [
            { front: "Match What They Gave — they say, \"It's been a lot, honestly.\"", back: "\"I'll match you rather than be breezy — mine's been heavy too.\"" },
            { front: "Say the Small True Thing — they say, \"You never say that.\"", back: "\"I know. Nothing dramatic. Just a long stretch of getting through weeks.\"" },
            { front: "Name What You Are Into — they say, \"What's been helping?\"", back: "\"Running, weirdly. I'm terrible at it and it's the best hour of the day.\"" },
            { front: "Hand It Back — they say, \"That's not what I expected from you.\"", back: "\"It surprised me too. What's been getting you through?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are walking back from a meeting and the conversation has gone past the usual small talk.",
          steps: [
            { front: "Match What They Gave — they say, \"I'm not sure I want to be doing this in five years.\"", back: "\"I think about that more than I admit, honestly.\"" },
            { front: "Say the Small True Thing — they say, \"Really? You always seem settled.\"", back: "\"I'm settled. I'm just not certain, which turns out to be different.\"" },
            { front: "Name What You Are Into — they say, \"So what would you rather be doing?\"", back: "\"Something with my hands, probably. I've got very into fixing bikes I can't fix.\"" },
            { front: "Hand It Back — they say, \"That's oddly specific.\"", back: "\"It really is. What's yours, if you could pick?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are having a drink with someone you used to see weekly and now see twice a year. They have just said the years went quickly.",
          steps: [
            { front: "Match What They Gave — they say, \"I don't know where the last five years went, honestly.\"", back: "\"Nor do I. And I've noticed I stopped telling anyone much about them.\"" },
            { front: "Say the Small True Thing — they say, \"That doesn't sound like you.\"", back: "\"It isn't, particularly. I got quiet somewhere around the second year and never undid it.\"" },
            { front: "Name What You Are Into — they say, \"So what are you doing with yourself?\"", back: "\"Bread, embarrassingly. It's the only thing I do that has nothing to do with anyone else.\"" },
            { front: "Hand It Back — they say, \"That's a very you answer.\"", back: "\"I'll take that. What have you got that's just yours?\"" },
          ]
        },
      ]
    },
    {
      name: "A Question You Would Rather Not Answer",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "How to close one subject without closing the conversation.\n\n1. **Keep Something Back** — the partial answer, given warmly\n2. **Give a Detail** — fill the gap with something else true about you\n3. **Hand It Back** — move the attention on\n4. **Match What They Gave** — and meet whatever they bring\n\n**Why this order:** keeping something back leaves a gap, and the gap is what makes it awkward. So the next step fills it rather than letting it sit. Then the attention moves, and the moment passes without anyone having to apologise for anything.\n\n**What people do instead:** decline and stop, which leaves the other person holding an apology they were not owed and a silence they now have to fix.\n\nMindset: a closed door is fine. An empty room afterwards is what makes it strange.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Someone at a dinner asks, perfectly innocently, what happened with your last relationship.",
          steps: [
            { front: "Keep Something Back — they say, \"Weren't you with someone for years?\"", back: "\"I was. Short version: it ended badly and I'm not doing the long one tonight.\"" },
            { front: "Give a Detail — they say, \"Sorry, I shouldn't have asked.\"", back: "\"You absolutely should, it's a normal question. I've just been busy repainting a flat instead of thinking about it.\"" },
            { front: "Hand It Back — they say, \"Repainting is very therapeutic.\"", back: "\"It's the only reason the flat looks like this. Have you done yours?\"" },
            { front: "Match What They Gave — they say, \"We've been meaning to for three years.\"", back: "\"Three years is nothing. Mine was eleven before I picked up a brush.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "In an otherwise ordinary conversation, a manager asks about something personal you would rather keep outside work.",
          steps: [
            { front: "Keep Something Back — they say, \"Everything alright at home? You've seemed off.\"", back: "\"I'd rather keep that one outside work, if that's alright.\"" },
            { front: "Give a Detail — they say, \"Of course. Sorry.\"", back: "\"Nothing to be sorry about. Work-wise I'm fine — the Friday report is the only thing biting.\"" },
            { front: "Hand It Back — they say, \"Let me know if that needs moving.\"", back: "\"I might. How's your end of it looking?\"" },
            { front: "Match What They Gave — they say, \"Honestly? Also a strange few months.\"", back: "\"Then we're even. I'll take a strange few months over a dull ten years.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "At a family gathering, a relative asks directly what you earn now, in front of two other people.",
          steps: [
            { front: "Keep Something Back — they say, \"So what are they paying you these days?\"", back: "\"I'm going to be boring about that one. It's enough, and that's as far as I go.\"" },
            { front: "Give a Detail — they say, \"Fair enough, fair enough.\"", back: "\"The interesting bit isn't the money anyway — I've ended up running the whole southern region, which nobody planned.\"" },
            { front: "Hand It Back — they say, \"Since when?\"", back: "\"March. It's been a steep few months. How's the shop going?\"" },
            { front: "Match What They Gave — they say, \"Quieter than I'd like, if I'm honest.\"", back: "\"Quieter how? Fewer people, or the same people spending less?\"" },
          ]
        },
      ]
    },
  ],
  startingconversations1: [
    {
      name: "The First Exchange",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "One opener is rarely a conversation. You say something, they give you a little back, and the whole question is what you do with that little.\n\n1. **Simple Greeting** or **Comment on the Situation** — put something small in the air\n2. **Introduce Yourself** or **Ask About the Situation** — use what came back\n3. **Ask About the Situation** — go into the thing they mentioned\n4. **Comment on the Situation** or **Introduce Yourself** — land it\n\n**Why this order:** smallest to largest, each step built out of the last reply. That is what decides whether a conversation happens — using what came back instead of starting again.\n\n**What people do instead:** deliver a second opener unrelated to the answer, which reads as a series of attempts rather than an exchange.\n\nMindset: whatever they give you, use a piece of it. That is the entire skill.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You have taken a seat at a two-day course. The person next to you is unpacking a notebook. Nothing has started yet and there is about ten minutes to fill.",
          steps: [
            { front: "Simple Greeting — nothing has happened yet, so start with the smallest possible thing.", back: "\"Morning.\"", guideFront: "The smallest opener. Just a signal that you are open to talking." },
            { front: "Introduce Yourself — they look up and say, \"Morning.\"", back: "\"I'm... Looks like we're neighbours for two days.\"" },
            { front: "Ask About the Situation — they say, \"Hanna. Yeah, apparently so.\"", back: "\"Have you done one of these before? I don't know how they run it.\"" },
            { front: "Comment on the Situation — they say, \"I did the one last spring. It's mostly group work.\"", back: "\"Group work, right. That explains the tables being like this.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are in a slow queue outside a venue. The person in front of you keeps looking down the line. It is cold and nothing is moving.",
          steps: [
            { front: "Comment on the Situation — you have never met, so open with what you can both see.", back: "\"This isn't moving at all, is it.\"", guideFront: "No question yet. Give them something they can pick up or let go." },
            { front: "Ask About the Situation — they turn round and say, \"Twenty minutes now.\"", back: "\"Do you know if there's more than one door open?\"" },
            { front: "Comment on the Situation — they say, \"I think there's another one round the side.\"", back: "\"Of course there is. And nobody's told anyone.\"" },
            { front: "Introduce Yourself — they laugh and say, \"Standard, really.\"", back: "\"I should introduce myself, if we're going to be here all night. I'm...\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are at a table of eight at a wedding reception. You know the couple and nobody else. People are sitting down and reading the menu cards.",
          steps: [
            { front: "Simple Greeting — everyone is settling and nobody has spoken yet.", back: "\"Evening.\"", guideFront: "Say it to the person beside you, not to the table." },
            { front: "Ask About the Situation — they say, \"Evening. Long day already, isn't it.\"", back: "\"It is. Do you know if there are speeches before the food or after?\"" },
            { front: "Comment on the Situation — they say, \"After, I think. That's the civilised way round.\"", back: "\"Much better. Speeches on an empty stomach are a hard watch.\"" },
            { front: "Introduce Yourself — they laugh and say, \"I've sat through a few.\"", back: "\"I'm... — I'm on the bride's side, badly out of my depth.\"" },
          ]
        },
      ]
    },
    {
      name: "The Second Try",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Sometimes the reply is one word — the situation most people quietly dread.\n\n1. **Simple Greeting** or **Ask About the Situation** — the opener\n2. **Comment on the Situation** — the flat reply comes back; try a different shape\n3. **Ask About the Situation** — the one that needs more than a word\n4. Read the second reply — carry on if it opened, leave warmly if it did not\n\n**Why this order:** a short answer usually means your opener was easy to answer shortly, so the second move changes shape and the third asks for something a single word cannot cover. The fourth step is the one nobody practises: stopping without it being awkward.\n\n**What people do instead:** stop at the first flat reply, or push through four more.\n\nMindset: give it one more try, and one only. If the second attempt lands flat too, that is a real answer.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are in the lift with a neighbour you have seen many times and never spoken to. It is six floors.",
          steps: [
            { front: "Simple Greeting — nothing yet, so start small.", back: "\"Morning.\"", guideFront: "Start at the bottom. There is nowhere further down to go." },
            { front: "Comment on the Situation — they say, \"Morning,\" and look at the floor numbers.", back: "\"Slow lift, this one.\"" },
            { front: "Ask About the Situation — they say, \"Mm.\"", back: "\"Are you on the fifth? I always see you get out around there.\"" },
            { front: "Simple Greeting — they say, \"Fourth,\" and go back to their phone.", back: "\"Ah, right. Have a good one.\"", guideFront: "Two flat replies is an answer. Leave it warmly, not coldly." },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are waiting for a machine. The person using it is between sets, looking at their phone.",
          steps: [
            { front: "Ask About the Situation — you need to know if it is free, so ask.", back: "\"Are you still on this, or is it free?\"", guideFront: "A real question you actually need answered." },
            { front: "Comment on the Situation — they say, \"Two more sets, sorry.\"", back: "\"No rush. It's rammed in here tonight.\"" },
            { front: "Ask About the Situation — they say, \"Always is on a Tuesday.\"", back: "\"Is it? I've only ever come at the weekend. Is there a quiet night?\"" },
            { front: "Introduce Yourself — they say, \"Thursdays are dead. That's when I'd come.\"", back: "\"Good to know. I should say — I'm...\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are waiting for the doors to open among parents you half recognise. One of them is standing near you, looking at their phone.",
          steps: [
            { front: "Comment on the Situation — the doors are late again and you are standing next to each other.", back: "\"They've never once opened these on time.\"", guideFront: "An observation, not a question. Easy to ignore." },
            { front: "Ask About the Situation — they glance up and say, \"No.\"", back: "\"Is it always this late, or is today special?\"" },
            { front: "Comment on the Situation — they say, \"Always,\" and look back down.", back: "\"Right. I'll stop rushing, then.\"" },
            { front: "Simple Greeting — they smile faintly and say nothing more.", back: "\"Have a good one.\"", guideFront: "They were polite, not interested. Leave it there and try again another day." },
          ]
        },
      ]
    },
    {
      name: "The Way In",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Arriving somewhere new — a class, a club, a team, a first day. Openers matter most here, and people freeze hardest, because everyone else appears to know each other already.\n\n1. **Introduce Yourself** or **Simple Greeting** — say who you are, and that you are new\n2. **Ask About the Situation** — how does this work\n3. **Comment on the Situation** — react to what they told you\n4. **Ask About the Situation** — one more, now that it is easy\n\n**Why this order:** being new is a legitimate reason to talk to anyone. Asking how things work then turns a stranger into someone helping you, which is an easier role for both of you than two strangers making conversation.\n\n**What people do instead:** hide the newness, which makes every question sound like one you should already know the answer to.\n\nMindset: being new is a licence. Use it while it lasts.",
      inputs: [
        {
          bundle: 'pro',
          situation: "It is your first time at a local club. People are setting out chairs. Nobody has noticed you yet.",
          steps: [
            { front: "Introduce Yourself — you are new here and nobody knows you, so say so.", back: "\"Hi — it's my first time here. I'm...\"", guideFront: "Being new is the reason. Lead with it." },
            { front: "Ask About the Situation — they say, \"Oh, welcome. I'm Bea.\"", back: "\"Is there anything I should know before we start?\"" },
            { front: "Comment on the Situation — they say, \"Not really. We just get going and see who turns up.\"", back: "\"That suits me. I was worried there'd be a form.\"" },
            { front: "Ask About the Situation — they say, \"Ha. No forms here.\"", back: "\"How many usually come on a Tuesday?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "It is your first morning. You are in the kitchen and one colleague is waiting for the kettle.",
          steps: [
            { front: "Simple Greeting — you have never met, so start with hello.", back: "\"Morning.\"", guideFront: "The smallest thing first. Everything else can follow it." },
            { front: "Introduce Yourself — they say, \"Morning — you're new, aren't you?\"", back: "\"I am, yeah. Started today. I'm...\"" },
            { front: "Ask About the Situation — they say, \"Ah, welcome. I'm Tom, I'm on the other team.\"", back: "\"Is there anything about this place I should know on day one?\"" },
            { front: "Comment on the Situation — they say, \"Don't trust the second kettle. It takes about a year.\"", back: "\"Noted. That's the most useful thing anyone's told me today.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You have joined a course six weeks in. Everyone else has settled into their seats and their pairs. There is one free chair.",
          steps: [
            { front: "Ask About the Situation — you do not know if the seat is taken.", back: "\"Is anyone sitting here?\"", guideFront: "A practical question first. It gets you a foothold before anything else." },
            { front: "Introduce Yourself — they move a bag and say, \"All yours.\"", back: "\"Thanks. I'm... — I've joined late, so I'm about six weeks behind.\"" },
            { front: "Ask About the Situation — they say, \"Oh, you'll catch up. I'm Ines.\"", back: "\"Is there anything from the first weeks I should read?\"" },
            { front: "Comment on the Situation — they say, \"Honestly, just the handout. Nobody's read the rest.\"", back: "\"That's a relief. I'd braced myself for a reading list.\"" },
          ]
        },
      ]
    },
  ],
  startingconversations2: [
    {
      name: "From a Favour Into a Conversation",
      guideFront: "What they gave back, and the opener to use next.",
      guideBack: "One way it could sound.",
      description: "A request or an offer gets you talking, but it also ends by itself: the favour is done, they say no problem, and the exchange is over unless you do something with it.\n\nThis combo practises the second move — turning a completed small transaction into an actual conversation, usually by picking up the situation or something they said while helping.\n\nEach step front carries what they said back, and names the opener to use next.\n\nMindset: the favour buys you about ten seconds of goodwill. Use them.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are on a machine you have not used before and cannot work out the weight pin. Someone is on the machine next to you, between sets.",
          steps: [
            { front: "Step 1 · Ask for Help — you genuinely do not know how it works, so ask.", back: "\"Sorry — do you know how you change the weight on this one?\"", guideFront: "A real request. Small enough that yes is easy." },
            { front: "Step 2 · Mention a Shared Experience — they lean over, show you, and say, \"It's a stiff one, that.\"", back: "\"Cheers. I've been standing here looking at it for a while, if I'm honest.\"" },
            { front: "Step 3 · Ask for Help — they laugh and say, \"We've all done it.\"", back: "\"While I've got you — is there a trick to the one behind you as well?\"" },
            { front: "Step 4 · Pick Up a Shared Thread — they say, \"That one's easier. Same pin, other side.\"", back: "\"Good. I'm here Tuesdays, so I'll probably be asking you again.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are outside a venue. A long queue has formed at the main door, and you know there is a second entrance round the side. Someone joins the line behind you.",
          steps: [
            { front: "Step 1 · Offer Something Useful — you know something they would want to know.", back: "\"There's a second door round the side, if you'd rather. Hardly anyone's found it.\"", guideFront: "Give it and let go. Thanks is a complete outcome." },
            { front: "Step 2 · Mention a Shared Experience — they say, \"Oh — cheers. Are you going round?\"", back: "\"I might. I did this last year and stood here forty minutes.\"" },
            { front: "Step 3 · Offer Something Useful — they say, \"Forty minutes? God.\"", back: "\"They also open the bar before the doors, so the queue in there is worse. Go straight through.\"" },
            { front: "Step 4 · Pick Up a Shared Thread — they say, \"You've done this properly, haven't you.\"", back: "\"Third time. Have you been before, or is this the first?\"" },
          ]
        },
      ]
    },
    {
      name: "Picking Someone Back Up",
      guideFront: "What they gave back, and the opener to use next.",
      guideBack: "One way it could sound.",
      description: "With someone you already half know, the opening is not the hard part — remembering is. The combo drills the pattern of coming back to something specific and then following where their answer goes.\n\nThe first step is always the thread, because it is the strongest opener available with someone you know a little. After that, what they give you decides.\n\nMindset: the specific question is the whole move. \"How's things\" and \"how did Thursday go\" are not the same opener.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A colleague you speak to occasionally is making tea in the kitchen. Last time you spoke they were about to hand in something big.",
          steps: [
            { front: "Step 1 · Pick Up a Shared Thread — you remember what they were in the middle of, so use it.", back: "\"Did the report get finished in the end? You were nearly there last time.\"", guideFront: "Specific beats general. Name the thing." },
            { front: "Step 2 · Mention a Shared Experience — they say, \"Handed it in Friday. Barely.\"", back: "\"You had the same week as me, then. Mine went in about an hour before the deadline.\"" },
            { front: "Step 3 · Ask for Help — they say, \"Everyone's had a horrible month.\"", back: "\"Actually, while you're here — do you know who signs these off now? I asked two people and got two answers.\"" },
            { front: "Step 4 · Offer Something Useful — they say, \"It's Priya now. Changed in January.\"", back: "\"Right, thanks. And if you're doing another one — the template's changed, the old one gets bounced back.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are putting the bins out. A neighbour you speak to occasionally comes out at the same time. Last time you spoke their car was in the garage.",
          steps: [
            { front: "Step 1 · Pick Up a Shared Thread — something was in progress last time, so ask about it.", back: "\"Did you get the car back in the end?\"", guideFront: "Specific beats general. Name the thing." },
            { front: "Step 2 · Mention a Shared Experience — they say, \"Two weeks and four hundred quid. Don't ask.\"", back: "\"That's the going rate, isn't it. Mine was the same last spring.\"" },
            { front: "Step 3 · Offer Something Useful — they say, \"Is there anywhere better round here?\"", back: "\"There's a place on the industrial estate. Half what I paid at the main dealer, and quicker.\"" },
            { front: "Step 4 · Pick Up a Shared Thread — they say, \"I'll write that down.\"", back: "\"Do. And how's the extension going? Is that still happening?\"" },
          ]
        },
      ]
    },
    {
      name: "When the Favour Is All They Wanted",
      guideFront: "What they gave back, and the opener to use next.",
      guideBack: "One way it could sound.",
      description: "Not every helpful exchange is an opening. Sometimes a person answers your question, or takes your tip, and quite clearly wants to get on with their day.\n\nThis combo practises reading that and stopping well — which matters more here than in the other openers, because a request creates a small obligation and pushing past a polite answer turns a favour into an imposition.\n\nBoth scenarios end with a clean exit rather than a conversation. That is a successful outcome, not a failed one.\n\nMindset: they helped you. Do not charge them interest.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You cannot find something in a large shop. A member of staff is restocking a shelf nearby, working quickly.",
          steps: [
            { front: "Step 1 · Ask for Help — you need to know where something is.", back: "\"Sorry — do you know where the batteries are?\"", guideFront: "A real request. Keep it small." },
            { front: "Step 2 · Mention a Shared Experience — they point and say, \"Aisle six, bottom shelf.\"", back: "\"Thanks. I've walked past it twice, obviously.\"" },
            { front: "Step 3 · Read it and stop — they say, \"Everyone does,\" and turn back to the shelf.", back: "\"Cheers. Have a good one.\"", guideFront: "They answered and went back to work. That is the whole exchange." },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are waiting for a train. Someone is standing at the far end of the platform where the train does not stop today.",
          steps: [
            { front: "Step 1 · Offer Something Useful — they are about to be in the wrong place.", back: "\"It's only four carriages today — it stops down that end.\"", guideFront: "Give it and let go." },
            { front: "Step 2 · Mention a Shared Experience — they say, \"Oh, thanks,\" and start walking down.", back: "\"They've been doing it all week. Caught me out on Monday.\"" },
            { front: "Step 3 · Read it and stop — they say, \"Right, thanks again,\" and put their headphones back in.", back: "\"No problem.\"", guideFront: "Headphones back in is an answer. Take it warmly." },
          ]
        },
      ]
    },
  ],
  startingconversations4: [
    {
      name: "Going First and Staying There",
      guideFront: "What they gave back, and the opener to use next.",
      guideBack: "One way it could sound.",
      description: "When you open with something of your own, the other person usually matches it — but only if you leave room. The commonest mistake is to say the brave thing and then immediately cover it with a joke or a change of subject.\n\nThis combo chains the pack's four openers, and each step front carries what they gave back. Notice how often their reply is a matching disclosure: that is what going first buys you.\n\nMindset: say it, then stop. What they do with it is the conversation.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are waiting to present at a training day. Someone else who is also presenting is standing nearby, checking their notes for the fourth time.",
          steps: [
            { front: "Step 1 · Say How You Feel — name what you are feeling, small and current.", back: "\"I'm quite nervous about this, actually.\"", guideFront: "One short sentence. Then stop talking." },
            { front: "Step 2 · Use Humour or Irony — they say, \"Oh good, it's not just me.\"", back: "\"We can be terrible together. Solidarity.\"" },
            { front: "Step 3 · Say Why You Came Over — they laugh and say, \"I've rewritten mine three times.\"", back: "\"I came over because you looked exactly as calm as I feel. I'm...\"" },
            { front: "Step 4 · Mention Something That Happened — they say, \"Hanna. And that's fair.\"", back: "\"I nearly didn't get here at all — I spent ten minutes trying to get into the wrong building.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You have arrived at a party where you know only the host, who is busy. Someone is standing near the kitchen door on their own.",
          steps: [
            { front: "Step 1 · Say Why You Came Over — name the approach, since that is the awkward part.", back: "\"I know exactly one person here and she's disappeared. So — hello.\"", guideFront: "The real reason. Awkward and true beats smooth and invented." },
            { front: "Step 2 · Say How You Feel — they say, \"Ha. I'm in the same position, honestly.\"", back: "\"It's a strange thing to do to yourself, coming to these.\"" },
            { front: "Step 3 · Use Humour or Irony — they say, \"And yet here we both are.\"", back: "\"Stood by the kitchen. The traditional position.\"" },
            { front: "Step 4 · Mention Something That Happened — they say, \"Closest to the food, though.\"", back: "\"Sensible. I got on the wrong bus getting here, so I've earned it.\"" },
          ]
        },
      ]
    },
    {
      name: "When the Joke Does Not Land",
      guideFront: "What they gave back, and the opener to use next.",
      guideBack: "One way it could sound.",
      description: "You make a joke and get nothing — a polite half-smile, or a blank look, or worse, they take it seriously. This is the risk that stops people using humour at all.\n\nThe recovery is short and cheap: do not explain it, do not repeat it, and do not apologise at length. Move to a plainer opener and carry on as though nothing happened, because from the outside, nothing has.\n\nMindset: a missed joke costs about two seconds. Explaining it costs considerably more.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are on a badly delayed train. You make a dry remark to the person opposite and they take it at face value.",
          steps: [
            { front: "Step 1 · Use Humour or Irony — say the dry version about the delay.", back: "\"Going well, this.\"", guideFront: "Aimed at the situation, not the person." },
            { front: "Step 2 · Mention Something That Happened — they say, \"Is it? I thought it was quite bad.\"", back: "\"No, you're right, it's terrible — I was being sarcastic badly. They said forty minutes at my end.\"" },
            { front: "Step 3 · Say How You Feel — they say, \"Forty? I've got a connection at six.\"", back: "\"You'll not make that. I'd be furious in your position.\"" },
            { front: "Step 4 · Mention Something That Happened — they say, \"I'm getting there.\"", back: "\"There's a bus that does the same route, apparently. Slower but it exists.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are in a long queue. You make an exaggerated joke to the person behind you and it lands on nothing.",
          steps: [
            { front: "Step 1 · Use Humour or Irony — exaggerate the wait.", back: "\"I think we've been here long enough to claim residency.\"", guideFront: "Say it lightly. If it misses, let it go." },
            { front: "Step 2 · Ask about the situation instead — they smile faintly and say nothing.", back: "\"Do you know if there's more than one desk open?\"", guideFront: "Do not explain the joke. Switch to something plain." },
            { front: "Step 3 · Mention Something That Happened — they say, \"I think there's one round the side.\"", back: "\"Of course there is. Same thing happened to me at the airport last month.\"" },
            { front: "Step 4 · Read it and stop — they say, \"Mm,\" and look at their phone.", back: "\"Fair enough. Good luck with it.\"", guideFront: "Two flat replies is an answer. Leave warmly." },
          ]
        },
      ]
    },
    {
      name: "Naming the Approach",
      guideFront: "What they gave back, and the opener to use next.",
      guideBack: "One way it could sound.",
      description: "Saying why you came over is the strongest opener in the pack, and the hardest to start. Once it is said, the conversation tends to go quickly, because the awkward part is already out loud and behind you.\n\nBoth scenarios practise the same shape: name the reason, let them respond, and then move to ordinary conversation rather than staying in the meta.\n\nMindset: say why once. Then talk about something else.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You have passed the same colleague from another team for about a year. You are both in the kitchen at the same time.",
          steps: [
            { front: "Step 1 · Say Why You Came Over — name the year of not speaking.", back: "\"We've walked past each other for about a year and I've never said hello. I'm...\"", guideFront: "Name the delay lightly. It usually lands as funny." },
            { front: "Step 2 · Use Humour or Irony — they say, \"Ha — I know, I've thought the same. Tom.\"", back: "\"It's a very British problem, this.\"" },
            { front: "Step 3 · Mention Something That Happened — they say, \"We could have sorted it months ago.\"", back: "\"We could. I only got brave because I've just had a very stupid morning.\"" },
            { front: "Step 4 · Say How You Feel — they say, \"Go on then.\"", back: "\"I spent ten minutes trying to badge into the wrong building. I'm not at my best.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "It is your first evening at a club. Everyone else appears to know one another. Two people are talking near the equipment.",
          steps: [
            { front: "Step 1 · Say Why You Came Over — being new is the reason, so lead with it.", back: "\"It's my first time here and standing by the door felt worse. I'm...\"", guideFront: "Being new is a licence. Use it while it lasts." },
            { front: "Step 2 · Say How You Feel — they say, \"Welcome — I'm Bea. Everyone's new once.\"", back: "\"I'm about eighty per cent nerves, if I'm honest.\"" },
            { front: "Step 3 · Use Humour or Irony — they say, \"You'll be fine. We're not very serious.\"", back: "\"That's the best news I've had all week.\"" },
            { front: "Step 4 · Mention Something That Happened — they say, \"What made you come along?\"", back: "\"A friend kept telling me about it and then moved to Manchester. So here I am alone.\"" },
          ]
        },
      ]
    },
  ],
  showunderstanding: [
    {
      name: "Loop, Then Ask",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "The safest order for anything difficult, and the one to reach for when you are not sure.\n\n1. **Loop Back or Rephrase** — show it arrived\n2. **Ask Follow-up Questions** — now that they feel heard, ask for more\n3. **Loop Back or Rephrase** — reflect the new part\n\n**Why this order:** the loop earns the question. The same question on its own can feel like being interviewed. The second loop matters as much as the first, because the answer is usually the real thing — the first version was the summary.\n\n**What people do instead:** ask straight away, get a short answer, and ask again. Two questions in a row is an interview, and people close down under it.\n\nMindset: loop, ask, loop. It looks repetitive written down and does not feel that way at all in a conversation.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend is telling you about a group project at school that fell apart, and you can tell they have been waiting to say it.",
          steps: [
            { front: "Loop Back or Rephrase — they say: \"That project was a nightmare from start to finish.\"", back: "\"So it wasn't one bad bit — it was the whole thing.\"" },
            { front: "Ask Follow-up Questions — they say: \"Yeah. Every stage.\"", back: "\"What was the worst part of it?\"" },
            { front: "Loop Back or Rephrase — they say: \"Honestly, the deadline moving with no warning.\"", back: "\"So it was the not being told, more than the extra work.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague has stopped by your desk and mentioned, half casually, that a decision was made without them.",
          steps: [
            { front: "Loop Back or Rephrase — they say: \"It's not the work, it's that nobody asked me.\"", back: "\"So it's the being left out of it, more than the job itself.\"" },
            { front: "Ask Follow-up Questions — they say: \"Exactly that.\"", back: "\"How did you find out in the end?\"" },
            { front: "Loop Back or Rephrase — they say: \"From the client, of all people.\"", back: "\"So you heard it from outside before anyone inside told you. That's worse.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Someone is describing a weekend at their parents' that they had been dreading and which went about as expected.",
          steps: [
            { front: "Loop Back or Rephrase — they say: \"Two days and we were back to the same argument by Saturday lunch.\"", back: "\"So it took less than a day to land where it always lands.\"" },
            { front: "Ask Follow-up Questions — they say: \"It always does.\"", back: "\"What sets it off, usually?\"" },
            { front: "Loop Back or Rephrase — they say: \"Anything about my job, really.\"", back: "\"So it's not the argument, it's that your job is the thing they reach for.\"" },
          ]
        },
      ]
    },
    {
      name: "Ask, Then Relate",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "The version for a story that is still being told, ending in warmth.\n\n1. **Ask Follow-up Questions** — keep them going\n2. **Loop Back or Rephrase** — show what you took from it\n3. **Relate Through Sharing** — and only then bring yourself in\n\n**Why this order:** relating comes last for a reason. Once somebody has told the whole thing and heard it reflected back, your own version arrives as company. Two minutes earlier the identical sentence would have arrived as an interruption.\n\n**What people do instead:** relate first, because the match is obvious the moment they start talking and holding it is uncomfortable. It will still be true in two minutes.\n\nMindset: your story is the dessert, not the main course. It goes at the end, and it should be about a third as long as theirs.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend has started telling you about a week at work that has clearly been building up for a while.",
          steps: [
            { front: "Ask Follow-up Questions — they say: \"I was so frustrated I nearly walked out.\"", back: "\"What was going through your head at that point?\"" },
            { front: "Loop Back or Rephrase — they say: \"Mostly that nobody would even notice.\"", back: "\"So the frustrating bit is feeling like it wouldn't register either way.\"" },
            { front: "Relate Through Sharing — they say: \"That's it, yeah.\"", back: "\"I know that exact feeling. I've stood in a corridor counting to ten before now.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Someone has mentioned, almost in passing, that they finished something they have been working at for a long time.",
          steps: [
            { front: "Ask Follow-up Questions — they say: \"I finally got the certificate last week.\"", back: "\"How long had you been working towards that?\"" },
            { front: "Loop Back or Rephrase — they say: \"Two years, on and off. Mostly on.\"", back: "\"So that's two years of evenings, finished.\"" },
            { front: "Relate Through Sharing — they say: \"Feels strange, actually.\"", back: "\"It does. I remember just sitting in the car for a while afterwards.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Someone you have not seen for months is telling you about moving somewhere they knew nobody.",
          steps: [
            { front: "Ask Follow-up Questions — they say: \"It's been six months and I still don't really know anyone.\"", back: "\"What's the part that's been hardest to get going?\"" },
            { front: "Loop Back or Rephrase — they say: \"There's nowhere you just end up. You have to arrange everything.\"", back: "\"So it's not that people are unfriendly — there's just no accidental version.\"" },
            { front: "Relate Through Sharing — they say: \"That's exactly it.\"", back: "\"I moved for a job once and it took a year. It's the Tuesdays that get you.\"" },
          ]
        },
      ]
    },
    {
      name: "Loop, Loop, Ask",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "The version with no relating in it at all, for when somebody is still inside the feeling.\n\n1. **Loop Back or Rephrase** — reflect it\n2. **Loop Back or Rephrase** — reflect the part that matters most\n3. **Ask Follow-up Questions** — one gentle question, and then stop\n\n**Why this order:** the first loop catches the events, the second catches what is actually wrong. The question at the end is an offer, not an interview — and stopping there is the point.\n\n**What people do instead:** share their own version, well meant, at the one moment when moving the attention off them costs most. A comparison also invites them to weigh their situation against yours.\n\nMindset: do less than you want to. Two loops and one question is often the whole of what somebody needs from you.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend has just told you that a group they were part of stopped including them, and it is still going on.",
          steps: [
            { front: "Loop Back or Rephrase — they say: \"Then the whole group just stopped replying.\"", back: "\"So you were suddenly on your own with it, with no warning at all.\"" },
            { front: "Loop Back or Rephrase — they say: \"And nobody's said anything since.\"", back: "\"It's the silence afterwards that's doing the damage, isn't it.\"" },
            { front: "Ask Follow-up Questions — they nod and look away.", back: "\"Has anyone actually spoken to you about it since?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Someone is describing something that has clearly knocked them, while insisting at every turn that it is not a problem.",
          steps: [
            { front: "Loop Back or Rephrase — they say: \"It's fine, honestly. It's just been a lot.\"", back: "\"It sounds less fine and more relentless, from where I'm sitting.\"" },
            { front: "Loop Back or Rephrase — they say: \"It's been going on for months.\"", back: "\"Months of it. That's not a bad week, that's a stretch.\"" },
            { front: "Ask Follow-up Questions — they let out a breath.", back: "\"What's the part that's hardest to keep doing?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Someone has told you something that happened this morning, and they are still working out what they think about it.",
          steps: [
            { front: "Loop Back or Rephrase — they say: \"They told me at nine and I've been sitting here since.\"", back: "\"So you've had four hours and no idea what to do with them.\"" },
            { front: "Loop Back or Rephrase — they say: \"I don't even know who to tell.\"", back: "\"That's its own thing, isn't it. Not just the news, but having to hand it on.\"" },
            { front: "Ask Follow-up Questions — they shrug.", back: "\"Is there anything that would help in the next hour?\"" },
          ]
        },
      ]
    },
  ],
  exploringatopic: [
    {
      name: "The Full Loop",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "The basic run through a subject: open it, go into the answer, then hand it on.\n\n1. **Ask an Open Question** — open the subject up\n2. **Build on Their Point** — go one layer into their answer\n3. **Share, Then Invite** — add your own bit and pass it on\n\n**Why this order:** the question gives you material, the build proves you used it, and the hand-off stops the whole thing turning into an interview. Three moves is usually enough to get a topic properly going; after that it runs on its own.\n\n**What people do instead:** ask, then ask again. Two questions in a row from the same person is an interview, and the second one gets a shorter answer than the first.\n\nMindset: you are not extracting information. You are getting something started that will keep going without you.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A small group over dinner has landed on cooking, and you would like it to last longer than one exchange.",
          steps: [
            { front: "Ask an Open Question — someone says: \"I have been cooking a lot more Thai food lately.\"", back: "\"What made you start with Thai of all things?\"" },
            { front: "Build on Their Point — they say: \"I got a cookbook and worked through it.\"", back: "\"You said worked through it — is there one you still cannot get right?\"" },
            { front: "Share, Then Invite — they say: \"The curry pastes defeat me every time.\"", back: "\"Same here, I buy mine. What does everyone else cheat on?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are having coffee with two colleagues and one of them mentions they have started cycling to work.",
          steps: [
            { front: "Ask an Open Question — they say: \"I have been riding in most mornings since April.\"", back: "\"How long did it take before it stopped feeling like an ordeal?\"" },
            { front: "Build on Their Point — they say: \"About three weeks. It is the hills, mostly.\"", back: "\"You said mostly — what is the other part?\"" },
            { front: "Share, Then Invite — they say: \"Arriving sweaty to a meeting, honestly.\"", back: "\"That would finish me. Has anyone else got a commute with a catch in it?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Four of you are waiting for a table and the talk has turned to where everyone is from.",
          steps: [
            { front: "Ask an Open Question — someone says: \"I grew up in a village of about four hundred people.\"", back: "\"What is that actually like as a teenager?\"" },
            { front: "Build on Their Point — they say: \"Boring, mostly. Everybody knew everything.\"", back: "\"Everybody knew everything — was that the worst part, or was it the bus?\"" },
            { front: "Share, Then Invite — they say: \"The bus. One an hour, and it lied.\"", back: "\"Ours was two a day. What about the rest of you — town or village?\"" },
          ]
        },
      ]
    },
    {
      name: "The Rescue",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "For a subject that is running out, so silence does not end it.\n\n1. **Build on Their Point** — squeeze the last life out of the thread\n2. **Expand to a Related Subtopic** — step sideways into something close by\n3. **Ask an Open Question** — hand the new angle to the group\n\n**Why this order:** squeezing first means you do not abandon a topic that still had something in it. Ending on a question hands the new angle to everyone instead of keeping it — a sideways step you then answer yourself is just you changing the subject.\n\n**What people do instead:** wait. Silence is not the natural end of a topic, it is usually the end of one thread inside it, and once the silence has landed whatever comes next has to restart the whole thing.\n\nMindset: reach for the next room before you leave the house.",
      inputs: [
        {
          bundle: 'pro',
          situation: "The group has been talking about gardening for a while and the answers are getting shorter.",
          steps: [
            { front: "Build on Their Point — someone says: \"That is about all I grow, really.\"", back: "\"You said that is about all — was there anything you gave up on?\"" },
            { front: "Expand to a Related Subtopic — they say: \"Courgettes. Never again.\"", back: "\"Does anyone keep plants indoors? Mine never survive the winter.\"" },
            { front: "Ask an Open Question — someone says: \"I have about ten and they all look terrible.\"", back: "\"What is it that kills them — the light, or just forgetting?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Someone has finished describing a trip and the table has gone quiet in the way that means the subject is done.",
          steps: [
            { front: "Build on Their Point — they say: \"So that was pretty much the whole two weeks.\"", back: "\"You said pretty much — was there a day that went badly?\"" },
            { front: "Expand to a Related Subtopic — they say: \"The last one. We missed the ferry.\"", back: "\"Does anyone actually enjoy the travelling part, or only the arriving?\"" },
            { front: "Ask an Open Question — someone says: \"I quite like airports, weirdly.\"", back: "\"Go on — what is there to like about an airport?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A team lunch has covered the new system thoroughly and nobody has anything left to add.",
          steps: [
            { front: "Build on Their Point — someone says: \"I think we have said everything about it.\"", back: "\"You said everything — is there a bit nobody has actually used yet?\"" },
            { front: "Expand to a Related Subtopic — they say: \"The reporting side. Nobody has touched it.\"", back: "\"What was the last thing that got rolled out here and actually stuck?\"" },
            { front: "Ask an Open Question — someone says: \"The booking system, maybe.\"", back: "\"What made that one work when the others did not?\"" },
          ]
        },
      ]
    },
    {
      name: "The Open Door",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Keeping the topic alive and sharing it out at the same time.\n\n1. **Share a Related Experience** — put your own piece in\n2. **Share, Then Invite** — hand the floor to whoever has not spoken\n3. **Build on Their Point** — follow up on their answer\n\n**Why this order:** sharing first means the invitation does not arrive out of nowhere. Following up on the answer is what proves it was a real invitation rather than a polite one — and it is the step people skip.\n\n**What people do instead:** ask the quiet person a question and then move on the moment they finish. An invitation nobody follows up on is worse than none at all, because it reads as a box being ticked.\n\nMindset: the third step is the one that counts.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Four of you are talking about music and one person has not said a word since it started.",
          steps: [
            { front: "Share a Related Experience — someone says: \"I basically only listen in the car.\"", back: "\"Same, the car is my concert hall. I have worn out one album this year.\"" },
            { front: "Share, Then Invite — the conversation pauses for a second.", back: "\"That is me done. Sara, what is on in your car?\"" },
            { front: "Build on Their Point — she says: \"Mostly the radio, honestly. I am boring.\"", back: "\"The radio is how you find things, though. Heard anything good lately?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Six of you are at dinner, the subject is holidays, and the same two people have had the entire conversation.",
          steps: [
            { front: "Share a Related Experience — someone says: \"We do the same place every year, honestly.\"", back: "\"So do we. Same week, same flat, and I would not change it.\"" },
            { front: "Share, Then Invite — the table goes quiet for a moment.", back: "\"That is our whole travel life. Jonas, you went somewhere properly far, did you not?\"" },
            { front: "Build on Their Point — he says: \"Peru, but it was two years ago now.\"", back: "\"Two years and you still mention it — what stuck with you?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A group at a regular club night is deep in a subject, and the person who joined this term has said nothing.",
          steps: [
            { front: "Share a Related Experience — someone says: \"I have been coming since we started, so I have seen it all.\"", back: "\"I am three years in and I still cannot do the difficult one.\"" },
            { front: "Share, Then Invite — they laugh and the moment opens.", back: "\"That is me. Ines, how are you finding it so far?\"" },
            { front: "Build on Their Point — she says: \"Harder than I expected, but good.\"", back: "\"Harder how — the technique, or keeping up with everyone?\"" },
          ]
        },
      ]
    },
  ],
  changingtopics: [
    {
      name: "Sensitive to Safe",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Rescuing a conversation that has veered somewhere uncomfortable.\n\n1. **Steering Away from Sensitive Topics** — defuse without engaging\n2. **Random or Light Switch** — offer somewhere safer to go\n3. **Finding Common Ground** — pick up whatever they give you\n\n**Why this order:** acknowledging first is what stops the steer looking like avoidance. Picking up whatever they offer is what makes the new topic actually take hold — a switch nobody follows through on falls back into the old subject within a minute.\n\n**What people do instead:** jump straight to something light, which reads as not having heard them at all, or engage with the sensitive subject and end up in the argument they were trying to avoid.\n\nMindset: defuse without engaging. You are not refusing to talk about it, you are choosing not to argue about it here.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A relaxed group dinner suddenly veers into a heated political argument.",
          steps: [
            { front: "Steering Away from Sensitive Topics — someone turns to you: \"You must agree it's a total mess, right?\"", back: "\"Everyone here clearly feels strongly about it, honestly.\"" },
            { front: "Random or Light Switch — the table goes quiet, waiting to see where it goes.", back: "\"On a much lighter note — has anyone found anywhere good to eat lately?\"" },
            { front: "Finding Common Ground — someone bites: \"actually, there's a new ramen place nearby.\"", back: "\"Ramen is my whole personality lately. I need the full report.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A work coffee has drifted somewhere personal, and a colleague has just mentioned a separation you did not know about.",
          steps: [
            { front: "Steering Away from Sensitive Topics — they say: \"Sorry, that's more than you asked for.\"", back: "\"Not at all, and we really don't have to go into it here.\"" },
            { front: "Random or Light Switch — they look relieved and glance at their cup.", back: "\"Change of subject entirely — have you been anywhere this year, or is that also a difficult question?\"" },
            { front: "Finding Common Ground — they laugh: \"Four days in Wales. It rained the whole time.\"", back: "\"Wales in the rain is a rite of passage. We did that with a tent, once.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "At a family gathering, a relative starts asking pointed questions about another person's illness while that person is in the room.",
          steps: [
            { front: "Steering Away from Sensitive Topics — they say: \"So how bad is it really, do we know?\"", back: "\"I think that's Anna's to tell, if she wants to.\"" },
            { front: "Random or Light Switch — the table goes very quiet.", back: "\"Right — someone rescue us. Who's got the most ridiculous thing that happened this month?\"" },
            { front: "Finding Common Ground — someone says: \"My car got towed from my own street.\"", back: "\"Your own street? The exact same thing happened to me in March. I'm still angry.\"" },
          ]
        },
      ]
    },
    {
      name: "Exhausted to Fresh",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Moving on from a topic that has been fully covered.\n\n1. **Respectful Exit** — close the done topic warmly\n2. **Linking** — pivot off something they said earlier\n3. **Acknowledge and Redirect** — take their answer and open it properly\n\n**Why this order:** closing warmly first means the new topic does not look like an escape. Pivoting off something they said earlier proves you were listening the whole time — and there is almost always a detail from ten minutes ago that never got followed up.\n\n**What people do instead:** keep the dead topic going out of politeness, which helps nobody, or switch without closing, which reads as boredom.\n\nMindset: mining an earlier detail is the trick. The bridge is usually already behind you.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You and a colleague have thoroughly covered a project update and there is nothing left to say about it.",
          steps: [
            { front: "Respectful Exit — they finish: \"…so yeah, that's where the project's at.\"", back: "\"Sounds like you've got it well in hand. Nice work.\"" },
            { front: "Linking — you remember they mentioned a trip earlier.", back: "\"Oh — before I forget, you said you were off to Lisbon?\"" },
            { front: "Acknowledge and Redirect — they light up: \"yeah, next week actually!\"", back: "\"That's a much better subject than the project. First time there?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are having a drink with an old friend and you have both been through the obvious updates.",
          steps: [
            { front: "Respectful Exit — they say: \"…and that's basically the year, really.\"", back: "\"Right, we've done the headlines. Good year on paper.\"" },
            { front: "Linking — you remember they said something about a course.", back: "\"You mentioned a course earlier — what was that about?\"" },
            { front: "Acknowledge and Redirect — they say: \"Carpentry, of all things. One evening a week.\"", back: "\"Carpentry is a brilliant left turn. How did that start?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are talking to a neighbour over the fence and the weather has been fully explored.",
          steps: [
            { front: "Respectful Exit — they say: \"Well, that's summer over, I suppose.\"", back: "\"We've solved the weather between us. Only took ten minutes.\"" },
            { front: "Linking — they mentioned earlier that the shed was going.", back: "\"You said the shed's coming down — is that happening?\"" },
            { front: "Acknowledge and Redirect — they say: \"Next month, if the man turns up.\"", back: "\"Fingers crossed for the man. What's going in its place?\"" },
          ]
        },
      ]
    },
    {
      name: "Stalled to Started",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Saving a conversation that has stopped, with nothing to bridge from.\n\n1. **Random or Light Switch** — break the silence and say you are doing it\n2. **Finding Common Ground** — relate to whatever comes back\n3. **Linking** — catch a word from their answer and go further in\n\n**Why this order:** a stalled conversation has no thread to catch, so stop hunting for one. Relating to whatever they answer turns a rescue into a real conversation, and catching a word from that answer is what stops it stalling a second time.\n\n**What people do instead:** ask a bigger question. A silence is not fixed by making the next thing harder to answer, and \"so what do you do for fun?\" lands on somebody who has already run out of things to say.\n\nMindset: open something fresh and light, and build from their answer instead.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are talking to somebody you have just met and it has stalled into an awkward silence.",
          steps: [
            { front: "Random or Light Switch — the pause has gone on a beat too long.", back: "\"Okay, random question to save us both — best thing you've eaten this week?\"" },
            { front: "Finding Common Ground — they say: \"honestly, probably a really good curry.\"", back: "\"Curry's my weakness too. I once drove an hour for one.\"" },
            { front: "Linking — they say: \"There's a place across town that's worth it.\"", back: "\"Across town — is that where everyone goes, or is it a secret?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are giving a colleague a lift and the conversation ran out fifteen minutes ago.",
          steps: [
            { front: "Random or Light Switch — the silence has become the thing you are both aware of.", back: "\"Right, I'm changing the subject to nothing in particular — what's the worst film you've paid to see?\"" },
            { front: "Finding Common Ground — they say: \"There was one about a boat. I've blocked out the name.\"", back: "\"I've got one of those. Went with my brother and we didn't speak afterwards.\"" },
            { front: "Linking — they say: \"My brother would do exactly that.\"", back: "\"Older or younger? Mine's older, which explains a lot.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A group of you have been standing together and every subject has fizzled after two exchanges.",
          steps: [
            { front: "Random or Light Switch — another pause lands and nobody fills it.", back: "\"I'm throwing one in — most controversial snack opinion, anyone.\"" },
            { front: "Finding Common Ground — someone says: \"Crisps in a sandwich. I'll die on it.\"", back: "\"That is objectively correct and I've argued it before.\"" },
            { front: "Linking — they say: \"My whole family thinks I'm strange.\"", back: "\"Families are brutal about food. What else do they hold against you?\"" },
          ]
        },
      ]
    },
  ],
  complimenting: [
    {
      name: "Small, Then Large",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Name What You Noticed, then Say Why It Landed, then Say the Bigger One — with Take a Compliment at the end, because a good compliment usually comes back at you.\n\nThe order is what makes it work. A detail proves you were paying attention. The effect gives them something they could not have known. Only then does the large sentence sound earned rather than like a line — said first, on its own, the same words would land as flattery.\n\nEach step also buys the next one. Once they have accepted the small compliment they are already in the conversation, and the second is easier to say than the first was.\n\nMindset: specific first. The big one only works on top of a small one.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A colleague cut in during a meeting that was going nowhere, moved everyone on, and nobody said anything about it afterwards.",
          steps: [
            { front: "Name What You Noticed — you catch them in the corridor.", back: "\"When you cut in and moved us on — that saved twenty minutes.\"" },
            { front: "Say Why It Landed — they say, \"I wasn't sure I should.\"", back: "\"I'd have sat there for the whole hour. I've been thinking about how you did it.\"" },
            { front: "Say the Bigger One — they say, \"That's kind of you.\"", back: "\"You do that a lot, actually. Meetings are better when you're in them.\"" },
            { front: "Take a Compliment — they say, \"Well — so are yours.\"", back: "\"Thank you. I'll take that.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A friend has been holding a lot together and you have not said anything about it.",
          steps: [
            { front: "Name What You Noticed — you are walking back from somewhere.", back: "\"You rang your mum every single day this month. I noticed.\"" },
            { front: "Say Why It Landed — they say, \"Someone had to.\"", back: "\"It made me ring mine. That's not a small thing to have done to me.\"" },
            { front: "Say the Bigger One — they shrug.", back: "\"I should have said this years ago: you're one of the kinder people I know.\"" },
            { front: "Take a Compliment — they say, \"You'd have done the same.\"", back: "\"Maybe. Take the compliment anyway.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "An old friend is in your kitchen and you have thought this about them since university and never once said it.",
          steps: [
            { front: "Name What You Noticed — they are drying a glass.", back: "\"You do this every time you're here. You just start clearing up.\"" },
            { front: "Say Why It Landed — they say, \"It's nothing.\"", back: "\"It means I don't dread having people over. That's what it does.\"" },
            { front: "Say the Bigger One — the room is quiet.", back: "\"We've known each other twenty years and I've never said it: you are extremely easy to have around.\"" },
            { front: "Answer It, Don't Return It — they say, \"So are you, obviously.\"", back: "\"You don't have to say it back. I'll ask you again in twenty years.\"" },
          ]
        },
      ]
    },
    {
      name: "Theirs First",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Take a Compliment, then Answer It Don't Return It, then — later, and separately — Name What You Noticed and Say Why It Landed.\n\nThe whole point is the gap. Praising them back in the same breath cancels both; praising them ten minutes later, about something specific, counts. Same words, completely different effect, and the only difference is that you let their sentence finish first.\n\nThe hard part is not knowing what to say. It is the silence in the middle, where the reflex wants to fill the space with something about them.\n\nMindset: theirs first. Yours keeps.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You have both just presented, and they get to you first.",
          steps: [
            { front: "Take a Compliment — they say, \"That was really good.\"", back: "\"Thank you. That's good to hear — I wasn't sure about the middle.\"" },
            { front: "Answer It, Don't Return It — you feel the urge to say yours was better.", back: "\"How did the whole thing feel from where you were sitting?\"" },
            { front: "Name What You Noticed — later, over coffee.", back: "\"Separately: the bit where you put the numbers last was the clever part.\"" },
            { front: "Say Why It Landed — they say, \"You think so?\"", back: "\"I'm going to steal it for mine next month.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A friend says something warm about you, out of nowhere, in the middle of an ordinary evening.",
          steps: [
            { front: "Take a Compliment — they say, \"You're very easy to be around, you know.\"", back: "\"That's a lot. Thank you — I'm going to sit with it rather than argue.\"" },
            { front: "Answer It, Don't Return It — the reflex is to fire one straight back.", back: "\"I'm not going to say it back at you now, because it'd sound like a return.\"" },
            { front: "Say the Bigger One — later the same evening.", back: "\"This isn't me returning yours. I've thought it for years: you're the person I ring first.\"" },
            { front: "Take a Compliment — they say, \"Now we're both being strange.\"", back: "\"We are. Worth it.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Your manager praises your work in front of the whole team and then asks the room what they thought.",
          steps: [
            { front: "Take a Compliment — everyone is looking at you.", back: "\"Thank you — that's a nice thing to hear in front of people.\"" },
            { front: "Answer It, Don't Return It — the reflex is to praise the manager back.", back: "\"I'll leave it there rather than making a speech about the team.\"" },
            { front: "Say It Where It Counts — there is one person whose work is not being mentioned.", back: "\"One thing before we move on: the second half of it is Jonas's.\"" },
            { front: "Say Why It Landed — afterwards, to Jonas, at his desk.", back: "\"The order you put the sections in is what made the whole thing work.\"" },
          ]
        },
      ]
    },
    {
      name: "Credit in a Room",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Say It Where It Counts, then Name What You Noticed, then Compliment the Choice — and Take a Compliment when it comes back.\n\nPublic praise has to be quick and precise or it turns into a speech and embarrasses everyone in it. Name, thing, done. The detail goes in afterwards, quietly, where it can be longer and where they do not have to perform a reaction.\n\nThe last step matters more than it looks. Credit given in public almost always produces a deflection in private, and a deflection is where the whole thing quietly unravels.\n\nMindset: in the room it is about credit. Outside the room it can be about them.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are presenting something in a meeting and most of the actual work was done by someone junior who is in the room.",
          steps: [
            { front: "Say It Where It Counts — you reach the second half of the slides.", back: "\"The whole of this half is Jonas's work. I held the pen.\"" },
            { front: "Name What You Noticed — afterwards, at his desk.", back: "\"The order you put the sections in is what made it work.\"" },
            { front: "Compliment the Choice, Not the Luck — he says, \"It just came out that way.\"", back: "\"You chose to cut the first version. That was the decision.\"" },
            { front: "Take a Compliment — he says, \"You gave me the whole slot, though.\"", back: "\"Thank you. It was yours to have.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Someone has organised a family gathering that everyone is enjoying and nobody has mentioned.",
          steps: [
            { front: "Say It Where It Counts — there is a natural pause at the table.", back: "\"Before anyone starts eating: none of this happens without Karin.\"" },
            { front: "Name What You Noticed — later, in the kitchen.", back: "\"You seated people so that nobody was stuck. I saw you do it.\"" },
            { front: "Compliment the Choice, Not the Luck — she says, \"It's just what you do.\"", back: "\"It's what you do. Most people don't think about it at all.\"" },
            { front: "Answer It, Don't Return It — she says, \"You brought the wine, that helped.\"", back: "\"Thanks — but this one's yours. Take it.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A project is being praised at a review and the person who did the difficult part left the company two months ago.",
          steps: [
            { front: "Say It Where It Counts — the praise is landing on you.", back: "\"She's not here, so I'll say it anyway: the hard half was Maria's.\"" },
            { front: "Name What You Noticed — someone asks which part.", back: "\"The migration nobody wanted to touch. She did it in three weeks.\"" },
            { front: "Say Why It Landed — afterwards, in a message to Maria.", back: "\"Your name came up today and I said what you did. It's still the part that works.\"" },
            { front: "Take a Compliment — she replies, \"You didn't have to do that.\"", back: "\"Thank you for saying so. I did, though.\"" },
          ]
        },
      ]
    },
  ],
  responsivehumour: [
    {
      name: "Something Out of Nothing",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "The book's own drill, in four steps. One person makes a plain informational statement; the other answers with one of the five. Then it comes back, and you answer again.\n\nThe setup is deliberately dull — the weather, the timetable, the room. That is the point of the exercise: if you can be funny about white walls, you never need to wait for good material.\n\nWhat the drill trains is not wit but reach. Four ordinary sentences in a row, four different moves, and by the fourth you stop searching for something clever and start reaching for whichever move fits.\n\nMindset: their sentence is the raw material. You are not starting anything.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Two of you are in a classroom before anyone else arrives, with nothing much to talk about.",
          steps: [
            { front: "Understatement — they say, \"This room is too dark.\"", back: "\"Mildly cave-like, yes.\"" },
            { front: "Exaggeration — they say, \"And we have three tests next week.\"", back: "\"Three? That's not a week, that's a sentence.\"" },
            { front: "Irony — they say, \"I'm really looking forward to it.\"", back: "\"Obviously. Best week of the year.\"" },
            { front: "Deliberate Misunderstanding — they say, \"At least it's lunch in five minutes.\"", back: "\"Five minutes? I'll never last. Tell my family I tried.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague is listing small annoyances and clearly wants company rather than solutions.",
          steps: [
            { front: "Exaggeration — they say, \"I couldn't sleep, my neighbour was making noise.\"", back: "\"Is your neighbour a marching band? It sounds like a marching band.\"" },
            { front: "Understatement — they say, \"And then the car wouldn't start.\"", back: "\"So the morning has been going well.\"" },
            { front: "Misdirection — they say, \"At least my computer's fast.\"", back: "\"I know. I saw it running down the street yesterday.\"" },
            { front: "Irony — they say, \"You're a great help.\"", back: "\"I'm known for it. People come from miles.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are standing with someone you have never met, waiting for a lift that is taking its time.",
          steps: [
            { front: "Understatement — they say, \"It's slow, this one.\"", back: "\"Bit unhurried, yes.\"" },
            { front: "Deliberate Misunderstanding — they say, \"It's stuck on the fourth floor.\"", back: "\"Stuck? Maybe it likes it up there.\"" },
            { front: "Exaggeration — they say, \"I've got a meeting at ten.\"", back: "\"I had one at ten. I've since retired.\"" },
            { front: "Irony — the doors finally open.", back: "\"Worth the wait. Genuinely moving.\"" },
          ]
        },
      ]
    },
    {
      name: "Keeping It Going",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Two exchanges rather than one. The first joke is easy; what most people miss is that the second one should build on the first rather than start again.\n\nBuilding means staying inside the world the first joke created. If you made their computer a runner, keep it running — do not open a second joke about something else. The staying is what makes it feel like play instead of two people taking turns being funny.\n\nIt also gets easier as it goes. The first move needs an idea; the second and third only need the world you have both already agreed to stand in.\n\nMindset: stay in the same world. The second joke lives inside the first.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend is very pleased with a new laptop and keeps mentioning how quick it is.",
          steps: [
            { front: "Misdirection — they say, \"This thing is so fast.\"", back: "\"I know. I saw it running down the street yesterday.\"" },
            { front: "Exaggeration — they say, \"You're an idiot.\"", back: "\"It overtook a bus. I waved. It didn't wave back — too busy.\"" },
            { front: "Understatement — they say, \"It's just a laptop.\"", back: "\"Sure. A modest little machine with Olympic ambitions.\"" },
            { front: "Irony — they say, \"I'm never telling you anything again.\"", back: "\"Very wise. I've been nothing but unsupportive.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You and someone you barely know are in a queue that has not moved for several minutes.",
          steps: [
            { front: "Exaggeration — the queue does not move.", back: "\"I've been here so long I have grandchildren.\"" },
            { front: "Understatement — they say, \"It is quite slow.\"", back: "\"Bit sluggish, yes.\"" },
            { front: "Misdirection — they say, \"I have somewhere to be at two.\"", back: "\"So did I. It was last Tuesday.\"" },
            { front: "Irony — the queue moves one step.", back: "\"Ah. Progress. I'll write to someone.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "It has rained for nine days and a colleague mentions it for the fourth time this week.",
          steps: [
            { front: "Irony — they say, \"Still raining.\"", back: "\"Marvellous. I was hoping for a tenth day.\"" },
            { front: "Deliberate Misunderstanding — they say, \"It's supposed to clear on Friday.\"", back: "\"Supposed to by whom? Is somebody in charge of this?\"" },
            { front: "Exaggeration — they say, \"The forecast, obviously.\"", back: "\"The forecast has been wrong so consistently it's begun to feel deliberate.\"" },
            { front: "Understatement — they say, \"You've thought about this a lot.\"", back: "\"A little. Nine days is a fair amount of thinking time.\"" },
          ]
        },
      ]
    },
    {
      name: "Missed, Then Back In",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Understatement, then a plain answer, then back in later. The recovery, which is the part nobody practises.\n\nThe rule is simple and hard: do not explain it. An explained joke is worse than an unnoticed one, and a second attempt at the same joke is worse still. Acknowledge it lightly if at all, answer the thing they actually said, and let the next opening come on its own.\n\nThe last step is the one that matters. Coming back in a minute later — on a new sentence, not the old one — is what turns a miss into nothing at all.\n\nMindset: a joke that misses costs four seconds. Explaining it costs the conversation.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You make an ironic reply and the other person takes it completely at face value.",
          steps: [
            { front: "Irony — they say, \"We have three tests next week.\"", back: "\"Lovely. I was hoping for a quiet week.\"" },
            { front: "Understatement — they say, \"Really? I think it's awful.\"", back: "\"That was me agreeing with you, badly.\"" },
            { front: "Exaggeration — they say, \"Oh — right.\"", back: "\"To be clear, I'd rather do anything else. Anything.\"" },
            { front: "Misdirection — they say, \"Same, honestly.\"", back: "\"Good. I've already planned my entire week around avoiding it.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You reach for a joke and realise mid-sentence that they are genuinely upset about it.",
          steps: [
            { front: "Understatement — they say, \"My week has been a disaster.\"", back: "\"Sounds mildly inconvenient.\"" },
            { front: "Deliberate Misunderstanding — they say, \"No, it's actually been really bad.\"", back: "\"Right — tell me what happened.\"" },
            { front: "Exaggeration — later, once they have finished.", back: "\"For what it's worth, that is the worst week I've heard about this year.\"" },
            { front: "Irony — they say, \"Thanks, that helps.\"", back: "\"I'm here to help. Famously.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You say something you thought was funny to a group of four and not one person responds.",
          steps: [
            { front: "Understatement — the silence lasts a beat too long.", back: "\"Anyway. Small moment for me there.\"" },
            { front: "Misdirection — someone changes the subject to the timetable.", back: "\"Right, the timetable. My favourite work of fiction.\"" },
            { front: "Exaggeration — they say, \"It has changed again.\"", back: "\"Third time this term. At this point it's just a rumour.\"" },
            { front: "Irony — they say, \"You're in a mood today.\"", back: "\"I'm delightful. Everyone says so.\"" },
          ]
        },
      ]
    },
  ],
  assertivecomm1: [
    {
      name: "The Defusal Run",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "A three-step sequence to handle persistent, vague criticism from an authority figure.\n\n• Fogging — absorb the initial hostile strike to defuse the anger\n• Negative Inquiry — prompt for specific details to find the real issue\n• Negative Inquiry — dig deeper into the critic's logic to make them state what they want\n\nWhy this order: fogging first ensures you do not trigger a defensive counter-argument. Once the critic's emotional wave hits a soft wall, they go quiet, allowing you to use inquiry to find the actual problem. Repeating inquiry reveals what they truly want. What people do instead: they argue the initial point, which escalates the conflict into a fight about motives.\n\nMindset: absorb the blow, then make them do the work of explaining.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Your manager drops a draft budget on your desk and sighs: \"This is completely unrealistic.\"",
          steps: [
            { front: "Fogging — the supervisor points to the total cost.", back: "\"You're right, the total cost is higher than we planned.\"" },
            { front: "Negative Inquiry — they wait for you to explain the numbers.", back: "\"What specific items in the budget look unrealistic to you?\"" },
            { front: "Negative Inquiry — they claim the software license costs are far too high.", back: "\"What is it about the license costs that feels too high for this project?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A senior colleague looks at your project board and mutters: \"This timeline is a disaster.\"",
          steps: [
            { front: "Fogging — they claim you'll never hit the launch date.", back: "\"You could be right, hitting that date will be very tight.\"" },
            { front: "Negative Inquiry — they stare at the milestones.", back: "\"Which specific milestones do you feel are most at risk?\"" },
            { front: "Negative Inquiry — they say the review phases are too slow.", back: "\"What is it about the speed of our review phases that worries you most?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A supervisor hands back your slides and says: \"This looks like a high school student made it.\"",
          steps: [
            { front: "Fogging — they claim the layout looks incredibly sloppy.", back: "\"You might be right, the formatting could definitely be cleaner.\"" },
            { front: "Negative Inquiry — they throw their hands up.", back: "\"What specifically about the layout looks sloppy to you?\"" },
            { front: "Negative Inquiry — they mutter that the color choices are unprofessional.", back: "\"What is it about the colors that feels unprofessional for this client?\"" },
          ]
        },
      ]
    },
    {
      name: "The Full Defense",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "A three-step sequence for when criticism contains both a real error you made and exaggerated emotional attacks.\n\n• Fogging — agree with the critic's emotional stance or opinions to defuse the attack\n• Negative Inquiry — prompt for the concrete details of what actually went wrong\n• Negative Assertion — own the real mistake completely and calmly once it is uncovered\n\nWhy this order: fogging defuses the initial hostile volume so you can hear the facts. Inquiring extracts the actual mistake from the emotional noise. Negatively asserting your error ends the critic's leverage. What people do instead: they deny the whole thing because of the exaggeration, turning a real mistake into a battle over their character.\n\nMindset: separate the emotional noise from the factual error, then kill the leverage by owning the mistake.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A coworker storms into your office: \"Thanks to your laziness, the client didn't get their proposal on Saturday!\"",
          steps: [
            { front: "Fogging — they claim you are always completely disorganized.", back: "\"You could be right, I am disorganized sometimes.\"" },
            { front: "Negative Inquiry — they fume about the weekend disaster.", back: "\"What specifically happened on Saturday with the proposal?\"" },
            { front: "Negative Assertion — they explain that you locked the files in your desk instead of leaving them out.", back: "\"Oh, my God. I forgot to leave the file out. That was an incredibly stupid thing of me to do.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Your manager calls you: \"Your terrible communication has ruined our relationship with the logistics team!\"",
          steps: [
            { front: "Fogging — they claim you never check your messages.", back: "\"You might be right, I don't check my inbox as often as I should.\"" },
            { front: "Negative Inquiry — they pace around.", back: "\"What specifically happened with the logistics team's delivery?\"" },
            { front: "Negative Assertion — they state that you missed the 10:00 AM approval deadline.", back: "\"You're right, I missed that approval deadline completely. That's my mistake.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "An associate snaps: \"You ruin every piece of equipment you touch in the lab!\"",
          steps: [
            { front: "Fogging — they claim you are far too impatient.", back: "\"That's probably true, I do get impatient sometimes.\"" },
            { front: "Negative Inquiry — they point to the workstation.", back: "\"What specifically is broken on the lab workstation?\"" },
            { front: "Negative Assertion — they note that you left the calibration setting on high overnight.", back: "\"You're right, I left the setting on high. That was very careless of me.\"" },
          ]
        },
      ]
    },
    {
      name: "The Persistent Defusal",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "A three-step sequence to use when a critic refuses to let go of a mistake you have already owned.\n\n• Negative Assertion — own the mistake calmly and clearly\n• Broken Record — repeat your want or your decision to move on\n• Broken Record — hold your line against their persistent attempts to make you crawl\n\nWhy this order: owning the mistake immediately removes their logical argument. When they try to use the error as psychological leverage to keep lecturing you, transitioning to broken record allows you to maintain your dignity and end the nagging. What people do instead: they keep apologizing and explaining, which invites the critic to continue punishing them.\n\nMindset: a mistake requires correction, not eternal atonement.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Your supervisor brings back a spreadsheet with a mistake and continues to lecture you after you have corrected it.",
          steps: [
            { front: "Negative Assertion — they point to the transposition error.", back: "\"You're right, I made a transposition error on that line. That was my mistake.\"" },
            { front: "Broken Record — they sigh that you must be checked up on constantly.", back: "\"I understand your concern, but I have corrected the sheet now.\"" },
            { front: "Broken Record — they mutter that this is typical of your work.", back: "\"I see how you feel, but the sheet is correct now and I am moving on to the next task.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague keeps grumbling about you being ten minutes late to a planning session.",
          steps: [
            { front: "Negative Assertion — they stare at you as you sit down.", back: "\"You're right, I am ten minutes late. That's my fault entirely.\"" },
            { front: "Broken Record — they continue to complain that the whole schedule is ruined.", back: "\"I understand it's irritating to wait, but I want to start the agenda now.\"" },
            { front: "Broken Record — they grumble that you must think your time is more valuable than theirs.", back: "\"I understand you're annoyed, but I want to focus on the agenda now.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A developer keeps bringing up a coding error you made last week in front of the team.",
          steps: [
            { front: "Negative Assertion — they point to the patched line.", back: "\"That was a sloppy mistake on my part, yes. I'm glad we caught it.\"" },
            { front: "Broken Record — they complain that the team had to stay late to patch it.", back: "\"I know the team stayed late, and I want to make sure we follow the new review process from now on.\"" },
            { front: "Broken Record — they sigh that you are always rushing your code.", back: "\"I see what you mean, but I want to focus on today's deployment now.\"" },
          ]
        },
      ]
    },
  ],
  assertivecomm2: [
    {
      name: "The Social Opening",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "A three-step sequence to start a warm, equal conversation with a stranger or acquaintance.\n\n• Free Information — listen to their unprompted cue and ask about it\n• Self-Disclosure — share a personal feeling or detail of your own to match them\n• Free Information — pick up on their next cue to keep the flow balanced\n\nWhy just this order: starting with their information makes them feel heard and valued. Disclosing your own side next prevents the conversation from sounding like an interrogation. Following up on their response keeps the runway clear. What people do instead: they ask a series of questions without sharing anything, making the other person feel investigated and defensive.\n\nMindset: listen first, share second, then explore.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You are standing at a high table next to someone who is looking at a well-worn festival lanyard.",
          steps: [
            { front: "Free Information — they note they've been to four of these.", back: "\"Four — so you actually know what happens after lunch?\"" },
            { front: "Self-Disclosure — they say, \"Mostly napping. Is this your first?\"", back: "\"First one. I said yes in March, when I had no idea how busy I'd be.\"" },
            { front: "Free Information — they laugh and say they're in marketing.", back: "\"Marketing? What specifically do you work on?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague in the breakroom is looking at a picture of a flat loaf of bread on their phone.",
          steps: [
            { front: "Free Information — they grumble that they spent the whole Saturday on it.", back: "\"A whole Saturday? Is it a very complicated process?\"" },
            { front: "Self-Disclosure — they say it takes hours of folding.", back: "\"I tried making bread once. It was a complete disaster and tasted like cardboard.\"" },
            { front: "Free Information — they smile and say they used a sourdough starter.", back: "\"Sourdough? How did you get into making that specifically?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are at the hotel gym at 6:00 AM, and one other person is half-asleep on the exercise bike.",
          steps: [
            { front: "Free Information — they note they packed their gym clothes by mistake.", back: "\"So you're another one who believed yourself when you packed the gym gear.\"" },
            { front: "Self-Disclosure — they smile and say they usually sleep in.", back: "\"Same here. I spent ten minutes staring at my shoes before coming down.\"" },
            { front: "Free Information — they say they are preparing for a hike.", back: "\"A hike? Where are you planning on going?\"" },
          ]
        },
      ]
    },
    {
      name: "The Boundaried No",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "A three-step sequence to decline a request from a close friend or family member while maintaining the relationship.\n\n• Self-Disclosure — share your personal feeling, worry, or state honestly\n• Asserting Wants — state your clear, clean decision without excuses\n• Workable Compromise — offer a practical alternative that respects both sides\n\nWhy just this order: disclosing your feeling first explains you rather than judging them, making the refusal feel personal rather than hostile. Asserting your want clearly prevents them from trying to solve your excuses. Offering a compromise shows you still care about the connection. What people do instead: they invent excuses, which the other person easily dismantles, leaving them trapped in a yes they resent.\n\nMindset: protect your boundaries kindly, then offer what you actually can give.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A close friend asks to borrow your car for the weekend, which makes you feel very anxious.",
          steps: [
            { front: "Self-Disclosure — they explain their own car is broken.", back: "\"I know you're a great driver, but I just worry when I lend my car out.\"" },
            { front: "Asserting Wants — they ask if they can have it just for Saturday.", back: "\"I understand you're in a jam, but I don't want to lend my car today.\"" },
            { front: "Workable Compromise — they sigh and look stuck.", back: "\"How about if I drive you to the station myself this afternoon?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You paid for concert tickets weeks ago, your friend has not paid you back, and you want to bring it up.",
          steps: [
            { front: "Self-Disclosure — you have a natural pause during coffee.", back: "\"I've been feeling a bit awkward about bringing this up, but I need to ask.\"" },
            { front: "Asserting Wants — they look surprised.", back: "\"I want you to send me your half of the ticket money this week.\"" },
            { front: "Workable Compromise — they apologize and say they are tight until payday.", back: "\"How about if you send half now and the rest on the 26th?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Your parent rings and demands that you come over for a massive family dinner that ruins your free weekend.",
          steps: [
            { front: "Self-Disclosure — they sigh that you are always busy.", back: "\"I've had a really exhausting month and I've been feeling totally drained.\"" },
            { front: "Asserting Wants — they complain that everyone else is coming.", back: "\"I understand, but I want to keep this weekend free to rest.\"" },
            { front: "Workable Compromise — they sound hurt.", back: "\"How about if I come over next Saturday instead and help you with the garden?\"" },
          ]
        },
      ]
    },
    {
      name: "The Workable Deal",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "A three-step sequence to negotiate a major lifestyle change or chore split with a partner or spouse.\n\n• Asserting Wants — declare your core desire or goal clearly and plainly\n• Self-Disclosure — share your feelings, anxieties, or reasons under the goal\n• Workable Compromise — propose a practical, material trade-off to make it work\n\nWhy just this order: declaring the goal first sets a clean direction. Disclosing your feelings underneath ensures they understand this is about your well-being, not an attack on them. Proposing a trade-off shifts them into collaborative problem-solving. What people do instead: they drop hints or grumble about chores, which turns into a shouting match about who does more work.\n\nMindset: state your goal, share your heart, then negotiate the terms.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You have been a stay-at-home parent, and you want to start looking for a job.",
          steps: [
            { front: "Asserting Wants — your partner is reading the news.", back: "\"I want to get a job and start working next month.\"" },
            { front: "Self-Disclosure — they look worried about the household schedule.", back: "\"I feel like I've been getting very dependent and cramped staying home all day.\"" },
            { front: "Workable Compromise — they ask who will handle the kids.", back: "\"How about if I do the marketing and the kids take on more chores?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You are doing almost all the cooking and cleaning, and you want to change the division of labor.",
          steps: [
            { front: "Asserting Wants — your partner sits down after dinner.", back: "\"I want us to change how we divide the cooking and cleaning.\"" },
            { front: "Self-Disclosure — they look surprised.", back: "\"I've been feeling extremely stressed and resentful about doing it on my own.\"" },
            { front: "Workable Compromise — they ask what they should do.", back: "\"How about if I handle the cooking and you take care of the cleaning?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Your partner wants to go to bed, but you feel tired and want more emotional connection first.",
          steps: [
            { front: "Asserting Wants — they lean in for a kiss.", back: "\"I love you, but I don't want to go to bed right now.\"" },
            { front: "Self-Disclosure — they look slightly hurt.", back: "\"I've been feeling a bit disconnected lately and I want us to just talk first.\"" },
            { front: "Workable Compromise — they sit back.", back: "\"How about if we put on some music and talk for a bit first?\"" },
          ]
        },
      ]
    },
  ],
  assertivecommadv: [
    {
      name: "The Long Refusal",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "A three-step sequence for the person who does not stop at your first no and keeps finding new angles.\n\n• Fogging — accept whatever is true in their opening push\n• Broken Record — repeat the want, unchanged, when they come back\n• Self-Disclosure — name the feeling underneath once the reasons run out\n\nWhy this order: fogging denies them a fight, the repeat denies them progress, and by the third pass they have usually stopped arguing and started asking why. That is the moment a feeling lands, and not before. What people do instead: they give the feeling first, as a reason, and spend the rest of the conversation defending whether the feeling is fair.\n\nMindset: hold the line long enough that honesty is a gift rather than a defence.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A salesperson at the counter keeps pushing an extended warranty you have already declined twice.",
          steps: [
            { front: "Fogging — they say most buyers regret skipping the cover.", back: "\"You're probably right that some people regret it.\"" },
            { front: "Broken Record — they ask what harm one more year of cover could do.", back: "\"It may well be worth it for some people, and I don't want the warranty.\"" },
            { front: "Self-Disclosure — they ask why you are being so difficult about this.", back: "\"I'm not trying to be difficult. I just don't like buying things at a counter under pressure.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A friend has spent ten minutes trying to talk you into a weekend trip you already declined.",
          steps: [
            { front: "Fogging — they say the group will be smaller without you.", back: "\"It will be smaller, that's true.\"" },
            { front: "Broken Record — they say you can decide when you get there.", back: "\"I know it's easy to join late, and I'm not coming this time.\"" },
            { front: "Self-Disclosure — they ask what is going on with you lately.", back: "\"Nothing dramatic. I'm just worn out and I want two quiet days.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A supervisor keeps returning to your desk about covering Saturday.",
          steps: [
            { front: "Fogging — they say the rota is genuinely short this week.", back: "\"You're right, the rota is short.\"" },
            { front: "Broken Record — they ask if you could do even half a day.", back: "\"I understand it's short, and I'm not available on Saturday.\"" },
            { front: "Self-Disclosure — they ask whether something is wrong.", back: "\"I'm fine. I've worked the last three weekends and I want this one at home.\"" },
          ]
        },
      ]
    },
    {
      name: "The Full Concession",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "A three-step sequence for a request from someone close, where a flat no would cost you more than the request would.\n\n• Fogging — agree with the part of their case that holds\n• Self-Disclosure — say what you actually feel about doing it\n• Workable Compromise — put a concrete alternative on the table\n\nWhy this order: agreement stops them defending their request, the feeling explains without justifying, and the offer arrives when they are listening rather than arguing. What people do instead: they open with the compromise, which is read as an opening bid and negotiated straight back to the original ask.\n\nMindset: concede the argument, keep the boundary, and pay the difference in something you can afford.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Your mother is upset that you will not come home every weekend as your sibling does.",
          steps: [
            { front: "Fogging — she says the drive is only two hours.", back: "\"It is only two hours, you're right.\"" },
            { front: "Self-Disclosure — she asks why that is too much to ask.", back: "\"It's not the drive. I come back with nothing left for my own week.\"" },
            { front: "Workable Compromise — she says she barely sees you now.", back: "\"I don't want every weekend. I do want one Saturday a month and a call every Sunday.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague asks to borrow your car for a weekend move and points out it is standing idle.",
          steps: [
            { front: "Fogging — they say it will just sit in the car park otherwise.", back: "\"That's true, it does sit there all weekend.\"" },
            { front: "Self-Disclosure — they ask what the problem is then.", back: "\"I know it sounds silly, but I get anxious the whole time my car is out.\"" },
            { front: "Workable Compromise — they say they have nobody else to ask.", back: "\"I don't want to lend it, but I'll drive the two big loads for you on Saturday morning.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A neighbour wants the trees along your fence taken down because of leaves in their pool.",
          steps: [
            { front: "Fogging — they say the leaves are genuinely a weekly job.", back: "\"They do drop a lot, and I can see it's constant.\"" },
            { front: "Self-Disclosure — they ask why you are so attached to a few trees.", back: "\"I had a bare garden for years and I really want to keep the shade.\"" },
            { front: "Workable Compromise — they ask what they are supposed to do about the pool.", back: "\"I'm keeping the trees. I'll pay for a pool cover and clear the filter each autumn.\"" },
          ]
        },
      ]
    },
    {
      name: "The Grievance Run",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "A three-step sequence for a partner or old friend who has been storing things up and has finally opened with a vague one.\n\n• Negative Inquiry — ask what is behind the complaint before answering it\n• Negative Assertion — own the real thing plainly once it is named\n• Negative Inquiry — ask for the rest of the list while you are still calm\n\nWhy this order: the first question turns a mood into a fact, the admission removes the fact from the argument, and the second question empties the file instead of leaving items for next month. What people do instead: they answer the vague opener, which means arguing about a mood, which never ends.\n\nMindset: get the whole list out in one calm hour rather than one item a month for a year.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Your partner says, over the washing up, that you never pull your weight around the house.",
          steps: [
            { front: "Negative Inquiry — they wait for you to defend yourself.", back: "\"What is it I'm not doing that lands on you?\"" },
            { front: "Negative Assertion — they say they have done every food shop for a month.", back: "\"You have, all four of them. That's on me.\"" },
            { front: "Negative Inquiry — they go quiet, still tense.", back: "\"What else has been building up that I haven't noticed?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Your manager opens the review by saying the year has been uneven.",
          steps: [
            { front: "Negative Inquiry — they slide the form across the desk.", back: "\"What specifically about the year looked uneven to you?\"" },
            { front: "Negative Assertion — they point at two missed reporting deadlines.", back: "\"Both of those were late, and both were mine to file.\"" },
            { front: "Negative Inquiry — they nod and move to close the meeting.", back: "\"Before we finish — what else should be on this form that isn't?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A friend of fifteen years says, half joking, that you have become hard work.",
          steps: [
            { front: "Negative Inquiry — they laugh it off and change the subject.", back: "\"No, I'd rather know. What is it that's hard work?\"" },
            { front: "Negative Assertion — they say you cancel more than you show up.", back: "\"I've cancelled on you three times this year. That's true and it's not great.\"" },
            { front: "Negative Inquiry — they say it is fine, really.", back: "\"What else have you been putting up with that you haven't said?\"" },
          ]
        },
      ]
    },
    {
      name: "The Owned Deal",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "A three-step sequence for when you have genuinely made a mistake and the other person wants both an admission and a solution.\n\n• Fogging — absorb the exaggerated part of the accusation\n• Negative Assertion — own the real error, once it is separated out\n• Workable Compromise — put a concrete repair on the table\n\nWhy this order: fogging keeps the exaggeration from becoming the argument, the admission ends the moral question, and the offer moves the conversation from blame to logistics while they are still listening. What people do instead: they lead with the fix, which reads as buying their way out of an apology they never made.\n\nMindset: separate the exaggeration from the error, own the error, then fix what can be fixed.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A coworker says your carelessness ruined the client's whole week.",
          steps: [
            { front: "Fogging — they say you are chaotic with every handover you touch.", back: "\"I can be chaotic with handovers, that's fair.\"" },
            { front: "Negative Assertion — they say the access codes were never sent.", back: "\"I never sent those codes. That was mine to do and I didn't do it.\"" },
            { front: "Workable Compromise — they ask what happens now.", back: "\"I'll send them within the hour and take the Friday call myself so you don't have to.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A client says your billing is a disaster and they are considering leaving.",
          steps: [
            { front: "Fogging — they say every invoice this year has been a problem.", back: "\"There have been problems with the invoices, yes.\"" },
            { front: "Negative Assertion — they point out that March was sent six weeks late.", back: "\"March was six weeks late. That was my oversight, not the system's.\"" },
            { front: "Workable Compromise — they ask why they should stay.", back: "\"I want to keep working with you. I'll bill on the first of each month and copy you on the schedule.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Your partner says you never take responsibility for anything to do with the holiday.",
          steps: [
            { front: "Fogging — they say you leave every arrangement to them.", back: "\"You do end up doing most of the arranging, that's true.\"" },
            { front: "Negative Assertion — they say the flights are now twice the price.", back: "\"I forgot to book them on Sunday like I said I would. That's on me.\"" },
            { front: "Workable Compromise — they ask how this gets fixed.", back: "\"I'll book tonight at whatever it costs, and I'll take the hotel and the car too.\"" },
          ]
        },
      ]
    },
    {
      name: "The Held Deal",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "A three-step sequence for the compromise that gets renegotiated the moment it is agreed.\n\n• Self-Disclosure — say what the limit is and where it comes from\n• Workable Compromise — offer the specific alternative you can live with\n• Broken Record — keep the offer identical when they try to widen it\n\nWhy this order: the disclosure makes the limit personal rather than arbitrary, the offer gives them a real yes, and the repeat protects the offer from becoming an opening bid. What people do instead: they improve the offer each time it is questioned, which teaches the other person that questioning it always works.\n\nMindset: an offer that grows every time it is pushed was never an offer.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend asked for your whole Saturday to help them move; you offered the morning.",
          steps: [
            { front: "Self-Disclosure — they ask if you really can't do the whole day.", back: "\"I want the afternoon to myself. I've had no weekend to speak of this month.\"" },
            { front: "Workable Compromise — they say the van arrives at two.", back: "\"I can do eight until one, and I'll bring my car for the small stuff.\"" },
            { front: "Broken Record — they ask if you could stay just until three.", back: "\"I understand the timing is awkward, and I'm free until one.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A housemate wants the car three evenings a week; you offered one.",
          steps: [
            { front: "Self-Disclosure — they ask why one evening is the limit.", back: "\"I get uneasy not knowing whether it's there when I need it.\"" },
            { front: "Workable Compromise — they say their course runs three nights.", back: "\"You can have it every Tuesday, booked in advance. That one I can plan around.\"" },
            { front: "Broken Record — they ask about Thursdays as well, just this term.", back: "\"I know the course is three nights, and Tuesdays are what I can offer.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Your parents want two weeks together in the summer; you offered five days.",
          steps: [
            { front: "Self-Disclosure — they ask why you are rationing your own holiday.", back: "\"Two weeks with family and I come back needing a holiday. That's just how I am.\"" },
            { front: "Workable Compromise — they say the house is booked for a fortnight anyway.", back: "\"I'll come for the first five days, and I'd like us to do the coast trip in those.\"" },
            { front: "Broken Record — they suggest you stay on for the second weekend.", back: "\"I know the house is yours for the fortnight, and five days is what I'm coming for.\"" },
          ]
        },
      ]
    },
  ],
  integratedmaster: [
    {
      name: "The Defusal Run",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "A three-step sequence to handle persistent, vague criticism from an authority figure.\n\n• The Integrated Shield — agree with their criticism and repeat your decision to defuse their initial anger\n• Empathic Inquiry — prompt for specific details of their complaint to find the real issue\n• Empathic Inquiry — dig deeper into their logic to force them to state what they actually want\n\nWhy this order: shielding first ensures you do not trigger a defensive counter-argument. Once the critic's emotional wave hits a soft wall, they go quiet, allowing you to use inquiry to find the actual problem. Repeating inquiry reveals what they truly want.\n\nWhat people do instead: they argue the initial point, which escalates the conflict into a fight about motives.\n\nMindset: absorb the blow, then make them do the work of explaining.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Your manager drops a draft budget on your desk and sighs: \"This is completely unrealistic.\"",
          steps: [
            { front: "The Integrated Shield — the supervisor points to the total cost.", back: "\"You're right, the total cost is higher than we planned, but I want to keep this project scope.\"" },
            { front: "Empathic Inquiry — they wait for you to explain the numbers.", back: "\"What specific items in the budget look unrealistic to you?\"" },
            { front: "Empathic Inquiry — they claim the software license costs are far too high.", back: "\"What is it about the license costs that feels too high for this project?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A senior colleague looks at your project board and mutters: \"This timeline is a disaster.\"",
          steps: [
            { front: "The Integrated Shield — they claim you'll never hit the launch date.", back: "\"You could be right, hitting that date will be tight, but I still want to run the full testing phase.\"" },
            { front: "Empathic Inquiry — they stare at the milestones.", back: "\"Which specific milestones do you feel are most at risk?\"" },
            { front: "Empathic Inquiry — they say the review phases are too slow.", back: "\"What is it about the speed of our review phases that worries you most?\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A supervisor hands back your slides and says: \"This looks like a high school student made it.\"",
          steps: [
            { front: "The Integrated Shield — they claim the layout looks incredibly sloppy.", back: "\"You might be right, the formatting could be cleaner, but I want to keep the current data slides.\"" },
            { front: "Empathic Inquiry — they throw their hands up.", back: "\"What specifically about the layout looks sloppy to you?\"" },
            { front: "Empathic Inquiry — they mutter that the color choices are unprofessional.", back: "\"What is it about the colors that feels unprofessional for this client?\"" },
          ]
        },
      ]
    },
    {
      name: "The Reconciliation Path",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "A three-step sequence to use when a partner refuses to let go of a mistake you have already owned.\n\n• The Complete Ownership — own the mistake calmly and clearly with an honest disclosure of regret\n• Empathic Inquiry — prompt for further grievances to empty their emotional ledger\n• The Complete Ownership — own any real issues found and pivot directly to a workable deal\n\nWhy this order: owning the mistake immediately removes their logical argument. When they try to use the error as psychological leverage to keep lecturing you, transitioning to empathic inquiry allows you to maintain your dignity and clear the air.\n\nWhat people do instead: they keep apologizing and explaining, which invites the critic to continue punishing them.\n\nMindset: a mistake requires correction, not eternal atonement.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Your supervisor brings back a spreadsheet with a mistake and continues to lecture you after you have corrected it.",
          steps: [
            { front: "The Complete Ownership — they point to the transposition error.", back: "\"You're right, I made a transposition error on that line. That was my mistake. I feel terrible about it, so I have updated the sheet.\"" },
            { front: "Empathic Inquiry — they sigh that you must be checked up on constantly.", back: "\"What am I doing specifically in my checks that makes you feel you have to monitor me?\"" },
            { front: "The Complete Ownership — they grumble that you rushed the final formatting.", back: "\"I did rush the final formatting. That was sloppy of me, so I'll use the dual-validation sheet next time.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A colleague keeps grumbling about you being ten minutes late to a planning session.",
          steps: [
            { front: "The Complete Ownership — they stare at you as you sit down.", back: "\"You're right, I am ten minutes late. That's my fault entirely. I feel awful for making you wait, so let's jump straight into the agenda.\"" },
            { front: "Empathic Inquiry — they continue to complain that the whole schedule is ruined.", back: "\"What is it about my lateness today that has caused the biggest schedule issue?\"" },
            { front: "The Complete Ownership — they grumble that they had to shift the client review.", back: "\"I really messed up that alignment. That was very careless of me, so I will draft the review notes myself today to save us time.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A developer keeps bringing up a coding error you made last week in front of the team.",
          steps: [
            { front: "The Complete Ownership — they point to the patched line.", back: "\"That was a sloppy mistake on my part. I feel terrible about the downtime, but I am glad we patched it.\"" },
            { front: "Empathic Inquiry — they complain that the team had to stay late to patch it.", back: "\"What specific parts of our deployment review do you feel I am skipping?\"" },
            { front: "The Complete Ownership — they sigh that you are always rushing your final code push.", back: "\"I did rush the final push. That was a bad mistake of mine, so I will follow the peer-review protocol for every release now.\"" },
          ]
        },
      ]
    },
    {
      name: "The Boundaried No",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "A three-step sequence to decline an invasive request from a close friend or family member while maintaining the relationship.\n\n• Assertive Disclosure — share your personal feeling or worry honestly to explain your state\n• The Integrated Shield — repeat your boundary calmly to block their persistent guilt-trips\n• Assertive Disclosure — hold your line cleanly against their attempts to make you feel guilty\n\nWhy this order: the feeling explains you rather than judging them, so the refusal lands as personal rather than hostile. Shielding next stops them solving your excuses. What people do instead: they invent excuses, which the other person dismantles one by one, leaving them trapped in a yes they resent.\n\nMindset: protect your boundaries kindly, then offer what you actually can give.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A close friend asks to borrow your car for the weekend, which makes you feel very anxious.",
          steps: [
            { front: "Assertive Disclosure — they explain their own car is broken.", back: "\"I know you're a great driver, but I just feel very worried when I lend my car out, so I don't want to do it.\"" },
            { front: "The Integrated Shield — they ask if they can have it just for Saturday instead.", back: "\"I understand you're in a jam, but I still don't want to lend my car today.\"" },
            { front: "Assertive Disclosure — they sigh and complain that friends should help each other in a bind.", back: "\"I care about you, but I feel very anxious about my car, so I am not going to lend it.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You paid for concert tickets weeks ago, your friend has not paid you back, and you want to bring it up.",
          steps: [
            { front: "Assertive Disclosure — you have a natural pause during coffee.", back: "\"I've been feeling a bit awkward about bringing this up, but I want you to send me your half of the ticket money.\"" },
            { front: "The Integrated Shield — they apologize and say they are tight until next month.", back: "\"I understand things are tight, but I still want to settle this payment this week.\"" },
            { front: "Assertive Disclosure — they sigh that you are being very rigid about a small sum.", back: "\"I value our friendship, but I feel stressed when money is hanging between us, so I want to get it resolved now.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Your parent rings and demands that you come over for a massive family dinner that ruins your free weekend.",
          steps: [
            { front: "Assertive Disclosure — they sigh that you are always busy.", back: "\"I've had a really exhausting month and feel totally pooped, so I want to keep this weekend free to rest.\"" },
            { front: "The Integrated Shield — they complain that everyone else is coming.", back: "\"I understand everyone else is coming, but I don't want to come over this weekend.\"" },
            { front: "Assertive Disclosure — they sound hurt and claim you don't care about the family.", back: "\"I love you, but I feel completely drained, so I want to stay home.\"" },
          ]
        },
      ]
    },
  ],
  counseling1: [
    {
      name: "First the Meal, Then the Gospel",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Getting a drifting or non-believing friend to hear the truth by meeting their immediate burden first, then setting up an order of care.\n\n• Gentle Restoration — meet the immediate burden with humility\n• Clarifying the Facts — secure a commitment and gather data\n• Spurring Obedience — present the truth and call to action\n\nWhy this order: meeting the physical or emotional burden first disarms defensiveness. Naming the Gospel before the burden is lifted reads as a trick; naming it after reads as a gift.\n\nMindset: we must feed the empty stomach before we speak to the soul.",
      inputs: [
        {
          bundle: 'pro',
          situation: "You find a neighbor outside who is shivering and hasn't eaten in two days.",
          steps: [
            { front: "Gentle Restoration — You take them inside and sit down with them.", back: "\"I'm not here to lecture you, brother, but I want to get some hot food in you first.\"" },
            { front: "Clarifying the Facts — One hour later, they have eaten and you need to set up a regular time to help them; you pull out your calendar to schedule.", back: "\"What day next week can you come to the study so we can map out a plan together?\"" },
            { front: "Spurring Obedience — One week later, they arrive at the study but are hesitant to talk about their soul; you open the scriptures with them.", back: "\"We have sorted out your physical needs, so let's look at what God wants to do in your heart today.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A friend is in financial ruin and asks you for rent money.",
          steps: [
            { front: "Gentle Restoration — You sit down to help them carry the immediate load.", back: "\"I want to help you carry this burden, so let's look at your immediate bills together.\"" },
            { front: "Clarifying the Facts — Three days later, you meet to gather the exact numbers of their debt; you ask them to list their expenses.", back: "\"What did you actually spend your income on this past month so we can see the facts?\"" },
            { front: "Spurring Obedience — One week later, they are refusing to budget because they feel discouraged; you call them to act regardless of their feelings.", back: "\"You don't have to feel confident to start a budget. Let's write down the first limit together anyway.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A church member's marriage is drifting, and they ask you for advice.",
          steps: [
            { front: "Gentle Restoration — You meet them at a coffee shop to listen.", back: "\"I've had my own struggles, brother, but I want to listen and help you through this.\"" },
            { front: "Clarifying the Facts — Two days later, you meet to find out what actually happened between them; you ask for concrete details.", back: "\"What was happening in your home right before she packed her bags?\"" },
            { front: "Spurring Obedience — Two weeks later, they are paralyzed by fear of her reaction; you push them to take the first step of obedience.", back: "\"Regardless of how she responds, you need to do what God requires. Let's draft your apology today.\"" },
          ]
        },
      ]
    },
    {
      name: "Steering a Sinking Friend",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Guiding a friend out of listlessness or paralyzing guilt by addressing self-pity first, then organizing their days.\n\n• Challenging Self-Pity — break the downward pity spiral\n• Clarifying the Facts — establish the reality of their habits\n• Righteous Replacement — trade the old pattern for righteous action\n\nWhy this order: we cannot establish new habits while self-pity is still protected. We must poke the balloon before we can build the structure.\n\nMindset: we must stop the \"I can't\" before we can show them \"I can\".",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend is locked in deep depression and won't leave their house.",
          steps: [
            { front: "Challenging Self-Pity — You go to their house and find them in bed.", back: "\"You are not a hopeless failure, and staying in bed won't fix this. What is one small chore we can do right now?\"" },
            { front: "Clarifying the Facts — Two days later, they are still struggling to maintain any order; you check when they are sleeping and eating.", back: "\"What time did you actually get out of bed yesterday and what did you eat?\"" },
            { front: "Righteous Replacement — One week later, they are still brooding over their failures; you help them replace brooding with active service.", back: "\"Instead of rehashing your regrets, let's go help wash the dishes in the church kitchen together.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A friend is overwhelmed by guilt from a past sin and is paralyzed.",
          steps: [
            { front: "Challenging Self-Pity — They keep saying they can never be forgiven.", back: "\"Christ's blood is sufficient for your sin. What concrete step of obedience is God calling you to take today?\"" },
            { front: "Clarifying the Facts — Three days later, they are avoiding the person they wronged; you sit down to find out what they have done to reconcile.", back: "\"What have you actually said to him since we last talked?\"" },
            { front: "Righteous Replacement — Two weeks later, they are still hiding in shame; you push them to put off hiding and put on confession.", back: "\"Instead of running from him, let's go to his house today and ask for his forgiveness face-to-face.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A young member has given up on their studies and is listless.",
          steps: [
            { front: "Challenging Self-Pity — They say they are too stupid to pass.", back: "\"You are created in the image of God, and giving up is not an option. What is the first assignment on your desk?\"" },
            { front: "Clarifying the Facts — Four days later, they haven't opened a book because they \"don't feel like it\"; you check their schedule.", back: "\"How many hours did you actually spend studying yesterday?\"" },
            { front: "Righteous Replacement — One week later, they are still wasting time on their phone; you help them replace phone scrolling with scheduled study.", back: "\"Instead of scrolling through your phone, let's put it in the drawer and do thirty minutes of reading right now.\"" },
          ]
        },
      ]
    },
    {
      name: "The Path of Restoration",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "The complete process of biblical restoration (2 Tim 3:16) mapped over several weeks.\n\n• Clarifying the Facts — expose the deviation (Teaching)\n• Challenging Self-Pity — call to repentance (Conviction)\n• Righteous Replacement — stand them straight (Correction)\n• Spurring Obedience — build the habit (Discipline)\n\nWhy this order: we must define the deviation before we can call to repentance, and we must correct the path before we can train the habit.\n\nMindset: restoration is a step-by-step rebuilding of righteousness.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A friend has been caught spreading gossip in the church.",
          steps: [
            { front: "Clarifying the Facts — You meet them to find out what was said.", back: "\"What did you actually tell Mary about John's marriage yesterday?\"" },
            { front: "Challenging Self-Pity — Three days later, they are defensive and claim everyone does it; you confront the sin directly.", back: "\"Gossip is sin, and defending it only keeps you trapped. Will you confess this to the Lord?\"" },
            { front: "Righteous Replacement — One week later, they want to replace the gossip with righteous speech; you help them trade gossip for encouragement.", back: "\"Instead of talking about Mary behind her back, let's go tell her how much we appreciate her service.\"" },
            { front: "Spurring Obedience — Two weeks later, they want to build consistent habits of speech; you lock in a daily discipline.", back: "\"Let's commit to reading Ephesians four together every morning this week to guard our tongues.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A friend has been neglecting their family to play video games.",
          steps: [
            { front: "Clarifying the Facts — You ask them about their screen time.", back: "\"How many hours did you actually spend playing games this past weekend?\"" },
            { front: "Challenging Self-Pity — Five days later, they claim they need it to escape their stress; you confront the evasion.", back: "\"Escaping your family is not how God calls you to handle stress. Will you own this failure?\"" },
            { front: "Righteous Replacement — One week later, they want to correct the pattern; you help them trade screen time for family time.", back: "\"Instead of turning on the console tonight, let's take your wife out for dinner and listen to her day.\"" },
            { front: "Spurring Obedience — Three weeks later, they are tempted to slide back; you set up an accountability schedule.", back: "\"We scheduled your gaming for Saturday mornings only. Let's stick to that regardless of how you feel.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A friend has been reacting in bitter anger toward their roommate.",
          steps: [
            { front: "Clarifying the Facts — You ask them what triggered the last fight.", back: "\"What did your roommate actually say right before you slammed the door?\"" },
            { front: "Challenging Self-Pity — Four days later, they are brooding and feeling like the victim; you confront the resentment.", back: "\"Slamming doors in anger is sin, and playing the victim won't heal this. Will you own your reaction?\"" },
            { front: "Righteous Replacement — One week later, they want to correct the relationship; you help them trade anger for a soft answer.", back: "\"Instead of reacting in bitterness when they leave the dishes, let's offer to wash them together.\"" },
            { front: "Spurring Obedience — Two weeks later, they want to maintain the peace; you encourage them to pray daily for their roommate.", back: "\"Let's schedule five minutes every morning to pray out loud for your roommate's blessings.\"" },
          ]
        },
      ]
    },
  ],
  counseling2: [
    {
      name: "The Matthew 18 Process",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "The three stages of biblical reconciliation and correction mapped over several weeks to restore a rebellious brother.\n\n• Direct Confrontation — go one-on-one privately to show them their sin\n• Direct Confrontation — take two or three witnesses when they refuse to listen\n• Direct Confrontation — take it to the elders to lay before the church\n\nWhy this order: we must exhaust the private circle before we involve others, protecting their reputation as long as possible.\n\nMindset: discipline is the extreme form of care, aimed at mending a broken vessel.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A brother borrowed a large sum of money from you and has refused to pay it back for a month.",
          steps: [
            { front: "Direct Confrontation — You go to him privately to address the unpaid debt face-to-face.", back: "\"We need to talk privately about the money you borrowed and have not returned.\"" },
            { front: "Direct Confrontation — Two weeks later, he still refuses to pay and avoids your calls; you bring John and Peter as witnesses.", back: "\"Since you won't listen to me, I have brought John and Peter with me so we can settle this in their presence.\"" },
            { front: "Direct Confrontation — Three weeks after that, he still ignores the debt and the witnesses; you take the matter to the church leadership.", back: "\"Because you still refuse to listen, we are now taking this to the elders so they can lay it before the congregation.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "You discover a member is spreading malicious rumors about your business in the congregation.",
          steps: [
            { front: "Direct Confrontation — You go to their house to confront the slander privately.", back: "\"I need to talk to you privately about the rumors you have been spreading about my business.\"" },
            { front: "Direct Confrontation — Ten days later, they continue to tell others the same lies; you bring two deacons as witnesses.", back: "\"Since you continue to spread these rumors, I have brought John and Peter so we can address this together.\"" },
            { front: "Direct Confrontation — Two weeks after that, they refuse to stop and slander the witnesses too; you take it to the church session.", back: "\"Because you still refuse to stop this slander, we are now laying this before the church elders for formal discipline.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A fellow member has cheated you in a joint business deal and refuses to acknowledge it.",
          steps: [
            { front: "Direct Confrontation — You meet him privately in his office to address the cheating directly.", back: "\"We need to talk privately about how you altered the business accounts last week.\"" },
            { front: "Direct Confrontation — Three weeks later, he denies the facts and refuses to meet; you bring two respected elders informally as witnesses.", back: "\"Since you refuse to discuss the accounts, I have brought John and Peter so we can examine the records together.\"" },
            { front: "Direct Confrontation — One month after that, he threatens to sue you and ignores the witnesses; you bring the case to the congregation's leadership.", back: "\"Because you still refuse to repent of this fraud, we are now taking this to the church elders for formal discipline.\"" },
          ]
        },
      ]
    },
    {
      name: "Attacking the Problem",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Moving a fighting couple or roommates from attacking each other to joint problem-solving over several weeks.\n\n• Sorting Responsibilities — confess your own part first to turn the arrows\n• Pursuing Peace — establish a soft answer to stop the verbal combat\n• Overcoming With Good — meet their practical needs aggressively to break their hostility\n\nWhy this order: you cannot solve the issue while you are still fighting each other. Poking the fire must stop before you can build the bridge.\n\nMindset: our words must be spent on cutting the problem in half, not on dicing people.",
      inputs: [
        {
          bundle: 'pro',
          situation: "Your roommate has stopped talking to you and leaves dirty dishes piled in the sink for days.",
          steps: [
            { front: "Sorting Responsibilities — You sit down to confess your own irritation and defensive silence first.", back: "\"I have been passive-aggressive and cold to you, and I need to ask you to forgive me.\"" },
            { front: "Pursuing Peace — One week later, they snap at you about a chore you forgot to do.", back: "\"I don't want us to live in tension. Let's find a way to manage our chores together.\"" },
            { front: "Overcoming With Good — Three days after that, they are cooking a meal and run out of clean pans; you wash them all.", back: "\"I see you are busy cooking. Let me wash these pans so you have room to work.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Your teenage son is rebellious, refusing to do his homework, and yelling when confronted.",
          steps: [
            { front: "Sorting Responsibilities — You sit with him to own your own harshness and shouting first.", back: "\"I have yelled at you and treated you like an enemy, and I am sorry for my harshness.\"" },
            { front: "Pursuing Peace — One week later, he starts slamming his door again when you ask about school.", back: "\"I want us to be at peace, son. Let's talk about school quietly when you are ready.\"" },
            { front: "Overcoming With Good — Two days after that, he is working late on a school project and is exhausted; you bring him dinner.", back: "\"I know you are working hard on that project. I brought you some dinner to help you keep going.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "Your spouse is cold, sleeping in the guest room, and accusing you of ignoring her needs.",
          steps: [
            { front: "Sorting Responsibilities — You go to her room to own your own negligence and defensive reactions.", back: "\"I have been defensive and ignored your requests, and I ask for your forgiveness.\"" },
            { front: "Pursuing Peace — Five days later, she snaps that she is tired of your fake apologies.", back: "\"I don't want us to be at war. Let's stop fighting and talk about our real marriage needs.\"" },
            { front: "Overcoming With Good — One week after that, her car breaks down; you spend the afternoon fixing it in the rain.", back: "\"I know we are struggling, but let me take your car to the garage and get it fixed for you.\"" },
          ]
        },
      ]
    },
    {
      name: "Opposing Hypocrisy",
      guideFront: "What's happening, and the strategy to use",
      guideBack: "One way it could sound",
      description: "Responding to public compromise or hypocrisy in the church to restore the unity of the Spirit.\n\n• Direct Confrontation — oppose the public compromise openly to his face\n• Pursuing Peace — offer a soft path back to unity in truth\n• Overcoming With Good — seal the reconciliation by meeting their practical needs\n\nWhy this order: public hypocrisy must be checked immediately to protect the church, but we must quickly offer the path of grace to restore the brother.\n\nMindset: we oppose the sin to save the sinner, not to win an argument.",
      inputs: [
        {
          bundle: 'pro',
          situation: "A small group leader is publicly favoring wealthy members and ignoring poorer visitors.",
          steps: [
            { front: "Direct Confrontation — You confront him openly after a meeting about his favoritism.", back: "\"Brother, you are welcoming the wealthy but ignoring our poorer visitors. This is a public compromise.\"" },
            { front: "Pursuing Peace — Two weeks later, he is defensive and angry at you during a committee meeting.", back: "\"I want our group to be united in truth. Let's look at how we can welcome everyone together.\"" },
            { front: "Overcoming With Good — One week after that, his yard is flooded and he needs help clearing the mud; you show up with a shovel.", back: "\"I heard your yard was flooded. I brought my shovel to help you dig this out today.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A church member is publicly mocking the elders' decisions in the fellowship hall.",
          steps: [
            { front: "Direct Confrontation — You stop them in the middle of their speech in front of the others.", back: "\"You are publicly slandering our leaders and causing division. This is sin and it must stop.\"" },
            { front: "Pursuing Peace — One week later, they avoid you and glare at you in the lobby.", back: "\"I don't want any walls between us. Let's talk about the leaders' decisions quietly whenever you are ready.\"" },
            { front: "Overcoming With Good — Ten days after that, they are moving house on a Saturday and are short-staffed; you show up with your truck.", back: "\"I know we had a hard discussion, but let me help you load your truck today.\"" },
          ]
        },
        {
          bundle: 'pro',
          situation: "A Sunday school teacher is publicly teaching that some members are superior to others because of their spiritual gifts.",
          steps: [
            { front: "Direct Confrontation — You challenge their teaching openly at the end of the class.", back: "\"Your teaching on spiritual gifts contradicts the scriptures and causes public division.\"" },
            { front: "Pursuing Peace — Two weeks later, they refuse to speak to you and call you legalistic.", back: "\"I want us to be united in the word. Let's sit down with our Bibles and examine this together.\"" },
            { front: "Overcoming With Good — One month after that, they get sick and are stuck at home; you bring them groceries.", back: "\"I know we disagree on gifts, but I brought you some groceries to help you while you recover.\"" },
          ]
        },
      ]
    },
  ],
};
