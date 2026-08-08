// programsData.js — Learning programs for Deckstack

const programsData = [
  // v1.26.75 — the free onboarding program. Built on NEW packs only, so the
  // app stands on its own content. The route matters more than the packs:
  // a program path beats the standalone lock, so the four Pro packs below
  // show a Pro badge AND can be earned by a free user, one checkpoint at a
  // time. Keep this id OUT of EXTENDED_PROGRAM_IDS or it turns into a
  // purchase. Every section has its own checkpoint, because passing a
  // section's OWN checkpoint is what releases its packs into the Library.
  {
    id: 'conversation-foundations',
    title: "Conversation Foundations",
    description: "Start here. Four steps from your first sentence to a conversation that actually goes somewhere. Parts 1 and 2 are free \u2014 Parts 3 and 4 come with Pro.",
    icon: "ti-compass",
    sections: [
      {
        id: 'section-1',
        title: "Part 1 — First moves",
        packs: [
          { key: "firststrategies", label: "First Strategies" },
        ],
        checkpoint: {
          id: 'cf-cp1',
          title: "First moves — check",
          timeLimit: 30,
          drawCount: 20,
          // TODO v1.26.82 — provisional bank. The rule is 20 drawn from at
          // least 40; the engine draws min(drawCount, pool) so this runs as a
          // 5-question test until the full bank is written.
          questions: [
            { id: 'cf1-1', q: "Why does opening with a statement work better than opening with a question?", options: ["It sounds more confident", "A question hands the other person a job; a statement hands them material", "Questions are impolite with strangers", "It gives you more to say afterwards"], correct: 1 },
            { id: 'cf1-2', q: "What is the point of following the thread?", options: ["To change the subject smoothly", "To prove you were listening carefully", "You do not need something new — they already gave you three things", "To keep the conversation short"], correct: 2 },
            { id: 'cf1-3', q: "Why say it back in your own words rather than theirs?", options: ["It is faster", "Repeating their sentence sounds like a technique; rewording it proves you understood", "It avoids interrupting", "It makes you sound more certain"], correct: 1 },
            { id: 'cf1-4', q: "What actually makes a request awkward?", options: ["The request itself", "Asking the wrong person", "The long run-up before it", "Not giving enough reasons"], correct: 2 },
            { id: 'cf1-5', q: "What is wrong with answering \"fine\" and stopping?", options: ["It sounds rude", "It leaves them with nothing, so they have to invent another question", "It is dishonest", "It ends the conversation politely"], correct: 1 },
          ],
        },
      },
      {
        id: 'section-2',
        title: "Part 2 — Keeping it going",
        packs: [
          { key: "exploringatopic", label: "Exploring a Topic" },
          { key: "changingtopics", label: "Changing Topics" },
        ],
        checkpoint: {
          id: 'cf-cp2',
          title: "Keeping it going — check",
          timeLimit: 30,
          drawCount: 20,
          // TODO v1.26.82 — provisional bank, see cf-cp1.
          questions: [
            { id: 'cf2-1', q: "What makes a question open rather than closed?", options: ["It is longer", "It cannot be answered with yes or no", "It is about feelings", "It comes after a statement"], correct: 1 },
            { id: 'cf2-2', q: "What does building on their point do that starting something new does not?", options: ["It saves time", "It goes one step further into what they said instead of leaving it", "It sounds more intelligent", "It stops them talking too long"], correct: 1 },
            { id: 'cf2-3', q: "What is linking, when you change the subject?", options: ["Announcing the change openly", "Catching a word from what they just said and using it as a bridge", "Waiting for a pause", "Asking permission first"], correct: 1 },
            { id: 'cf2-4', q: "Why does acknowledging the old topic help before opening a new one?", options: ["It fills the silence", "It makes the switch feel like a choice rather than a dismissal", "It is more formal", "It gives you time to think"], correct: 1 },
            { id: 'cf2-5', q: "What is the point of sharing and then inviting?", options: ["To make the conversation about you", "One part you, one part them — you contribute without holding the floor", "To avoid asking questions", "To change the subject quietly"], correct: 1 },
          ],
        },
      },
      {
        id: 'section-3',
        title: "Part 3 — Really listening",
        // v1.26.82 — the freemium wall. Parts 1-2 are free; from here the
        // program needs Pro. Same program, same progress: a user who upgrades
        // carries on where they stopped instead of starting a second one.
        minLevel: 'pro',
        packs: [
          { key: "showunderstanding", label: "Show Understanding" },
          { key: "validation", label: "Validation" },
        ],
        checkpoint: {
          id: 'cf-cp3',
          title: "Really listening — check",
          timeLimit: 30,
          drawCount: 20,
          // TODO v1.26.82 — provisional bank, see cf-cp1.
          questions: [
            { id: 'cf3-1', q: "Understanding someone is not enough on its own. Why not?", options: ["You might have understood wrongly", "They have to be able to tell that you did — that is a separate skill", "It takes too long", "They may not want to be understood"], correct: 1 },
            { id: 'cf3-2', q: "What makes a follow-up question prove you were listening?", options: ["Its length", "Its tone", "The specific detail you picked up — a general question could have come from anyone", "Asking it immediately"], correct: 2 },
            { id: 'cf3-3', q: "What is reflecting the feeling?", options: ["Agreeing with them", "Naming the emotion they are expressing, so it is signalled as belonging there", "Sharing a feeling of your own", "Asking how they feel"], correct: 1 },
            { id: 'cf3-4', q: "What does normalising a reaction say?", options: ["That the reaction is unusual and interesting", "That most people would have reacted the same way in that position", "That they should feel differently", "That you have felt it too"], correct: 1 },
            { id: 'cf3-5', q: "When you relate through sharing, why keep it short?", options: ["Long stories are boring", "Done at length it quietly takes the conversation away from them", "You may be wrong about the comparison", "It saves them having to answer"], correct: 1 },
          ],
        },
      },
      {
        id: 'section-4',
        title: "Part 4 — Going deeper",
        minLevel: 'pro',
        packs: [
          { key: "deepquestions", label: "Deep Questions" },
        ],
        checkpoint: {
          id: 'cf-cp4',
          title: "Going deeper — check",
          timeLimit: 30,
          drawCount: 20,
          // TODO v1.26.82 — provisional bank, see cf-cp1.
          questions: [
            { id: 'cf4-1', q: "Why start with simple, factual questions?", options: ["To test whether they want to talk", "So they relax and give you material to work with", "Because deep questions are rude early on", "To keep the conversation short if it goes badly"], correct: 1 },
            { id: 'cf4-2', q: "What is linking and going deeper?", options: ["Asking two questions at once", "Repeating a detail they gave you, then asking about what sits behind it", "Moving to a more serious subject", "Sharing something personal first"], correct: 1 },
            { id: 'cf4-3', q: "A values question asks about...", options: ["What they think is true", "What happened to them", "What matters to them, and why", "What they plan to do next"], correct: 2 },
            { id: 'cf4-4', q: "What separates a belief question from a values question?", options: ["Beliefs are about what they think is true; values are about what matters", "Beliefs are more personal", "Values questions are always harder", "There is no real difference"], correct: 0 },
            { id: 'cf4-5', q: "An experience question asks about something that happened — and what else?", options: ["Whether they would do it again", "Who else was there", "What it was actually like", "How long ago it was"], correct: 2 },
          ],
        },
      },
    ],
  },
  {
    id: 'saying-no',
    title: "Saying No With Confidence",
    description: "A short course in declining requests without guilt, apology or long explanations — first the easy no, then the one you actually regret.",
    icon: "ti-hand-stop",
    sections: [
      {
        id: 'section-1',
        title: "Part 1 — The Happy No",
        packs: [
          { key: "thehappyno", label: "The Happy No" },
        ],
        checkpoint: {
          id: 'saying-no-cp1',
          title: "The Happy No — check",
          timeLimit: 90,
          drawCount: 4,
          questions: [
            { id: 'sn1-1', q: "What carries a happy no more than anything else?", options: ["The reason you give", "How quickly you answer", "The tone you say it in", "How the other person reacts"], correct: 2 },
            { id: 'sn1-2', q: "Why does a long explanation weaken a refusal?", options: ["It takes too much time", "Every reason gives the other person something to argue with", "It sounds unfriendly", "It confuses them"], correct: 1 },
            { id: 'sn1-3', q: "Which of these is a soft no rather than a warm no?", options: ["\"Maybe later, we'll see\"", "\"Not this time — but thanks for asking\"", "\"No, but you're great at it\"", "\"That's a no from me\""], correct: 0 },
            { id: 'sn1-4', q: "When is a happy no the wrong tool?", options: ["When you are busy", "When you barely know the person", "When you have said no before", "When the request is serious to them"], correct: 3 },
            { id: 'sn1-5', q: "If someone asks again after your no, what should you do?", options: ["Give a longer reason", "Repeat it in the same tone", "Change to a firmer voice", "Offer a compromise"], correct: 1 },
          ],
        },
      },
      {
        id: 'section-2',
        title: "Part 2 — The Regretful No",
        packs: [
          { key: "theregretfulno", label: "The Regretful No" },
        ],
      },
    ],
  },
  {
    id: 'social-confidence',
    title: 'Social Confidence Foundations',
    description: 'Build the core skills for confident, calm communication — from handling criticism and pressure to starting conversations and connecting with people.',
    icon: 'ti-messages',
    sections: [
      {
        id: 'section-1',
        title: 'Section 1 — Holding Your Ground',
        packs: [
          { key: 'assertive', label: 'Assertive Communication' },
        ],
        checkpoint: {
          id: 'social-confidence-cp1',
          title: 'Checkpoint — Section 1',
          timeLimit: 25,
          drawCount: 20,
          questions: [
            // FOGGING (8 questions)
            { id: 'f1', q: 'What is the core idea behind Fogging?', options: ['Agreeing with what might be true in criticism, without defending yourself','Deflecting criticism with a counter-argument','Apologising quickly to end the conflict','Asking the critic to prove their point'], correct: 0 },
            { id: 'f2', q: 'Someone says you are too sensitive. A good Fogging response is:', options: ['"I am not sensitive at all."','"You could have a point there."','"Why would you say something like that?"','"That is really hurtful."'], correct: 1 },
            { id: 'f3', q: 'Why does Fogging work as a technique?', options: ['It makes the critic feel guilty','It shows you agree with everything they say','Criticism has nothing solid to grip onto — it passes through like fog','It forces the other person to explain themselves'], correct: 2 },
            { id: 'f4', q: 'Which of these is a Fogging response?', options: ['"I completely disagree with that."','"You might be right about that."','"Let me explain why I did it."','"That is not fair."'], correct: 1 },
            { id: 'f5', q: 'Fogging involves agreeing with:', options: ['Everything the critic says','Nothing — the goal is silence','What might be true, the possibility, or the logic of the criticism','Only facts, never opinions'], correct: 2 },
            { id: 'f6', q: 'Someone criticises your driving. The best Fogging response is:', options: ['"I am a perfectly good driver."','"You might be right about that."','"Maybe you should drive then."','"Why are you always criticising me?"'], correct: 1 },
            { id: 'f7', q: 'What does Fogging signal to the other person?', options: ['That you are angry but staying calm','That you agree with everything they said','Confidence and unshakeable calm','That you want to end the conversation'], correct: 2 },
            { id: 'f8', q: 'Which phrase best demonstrates Fogging?', options: ['"I can see why you think so."','"You are wrong about that."','"I will try harder."','"Stop criticising me."'], correct: 0 },
            // NEGATIVE INQUIRY (5 questions)
            { id: 'ni1', q: 'What is the goal of Negative Inquiry?', options: ['To make the other person feel bad','To calmly ask for more criticism to disarm and clarify','To end the conversation quickly','To agree with everything said'], correct: 1 },
            { id: 'ni2', q: 'Someone says you are being difficult. A Negative Inquiry response is:', options: ['"I am not being difficult."','"Fine, I will do it your way."','"What is it specifically that I am doing that feels difficult?"','"You are the one being difficult."'], correct: 2 },
            { id: 'ni3', q: 'Negative Inquiry works because:', options: ['It is hard to keep attacking someone who is genuinely listening','It shows the critic that you are right','It forces the critic to apologise','It gives you time to think of a counter-argument'], correct: 0 },
            { id: 'ni4', q: 'Someone gives you vague criticism. The best Negative Inquiry response is:', options: ['"That is not a fair criticism."','"What do you mean exactly? I would like to understand."','"Why do you always criticise me?"','"I will think about it."'], correct: 1 },
            { id: 'ni5', q: 'What does using Negative Inquiry demonstrate?', options: ['That you are afraid of the critic','That you are not afraid of more criticism','That you agree with the criticism','That you want to change the subject'], correct: 1 },
            // NEGATIVE ASSERTION (6 questions)
            { id: 'na1', q: 'Negative Assertion means:', options: ['Denying your faults calmly','Actively and calmly agreeing with your own faults when pointed out','Apologising extensively when you make a mistake','Explaining why you made a mistake'], correct: 1 },
            { id: 'na2', q: 'Someone says your joke was not funny. The best Negative Assertion response is:', options: ['"I thought it was funny."','"Sorry, I did not mean to offend."','"No, that one did not land."','"You just do not have a sense of humour."'], correct: 2 },
            { id: 'na3', q: 'The key principle behind Negative Assertion is:', options: ['Explain your mistakes fully','Acknowledge without shrinking','Apologise quickly and move on','Deny minor faults to maintain confidence'], correct: 1 },
            { id: 'na4', q: 'Someone points out you were late. A good Negative Assertion response is:', options: ['"The traffic was terrible."','"I am so sorry, it will never happen again."','"You are right, I was late. That is on me."','"I was only five minutes late."'], correct: 2 },
            { id: 'na5', q: 'Which of these is NOT a Negative Assertion response?', options: ['"You are right, I could have done that differently."','"Yes, that was a mistake. I will fix it."','"No, that one did not land."','"I did not do anything wrong."'], correct: 3 },
            { id: 'na6', q: 'Negative Assertion communicates:', options: ['That you are weak','That you can be wrong and still be okay — acknowledging shows strength','That you are trying to end the conversation','That you are hiding anger'], correct: 1 },
            // BROKEN RECORD (6 questions)
            { id: 'br1', q: 'Broken Record means:', options: ['Repeating a long explanation until understood','Returning to the same calm, short response every time the other person pushes','Raising your voice gradually to show seriousness','Listing all the reasons behind your decision'], correct: 1 },
            { id: 'br2', q: 'Why should you avoid explaining yourself when using Broken Record?', options: ['Explanations make you sound uncertain','Every explanation gives the other person a new argument to counter','Explanations take too long','The other person will not listen anyway'], correct: 1 },
            { id: 'br3', q: 'A salesperson will not take no for an answer. The best Broken Record response is:', options: ['"I already said no, please stop."','"Let me think about it."','"That does not work for me." — repeated calmly.','"I need to speak to my partner first."'], correct: 2 },
            { id: 'br4', q: 'When someone escalates pressure, you should:', options: ['Match their energy','Apologise and reconsider','Hold the same calm tone — that is exactly when the technique is tested','Change your wording to try a different approach'], correct: 2 },
            { id: 'br5', q: 'Which correctly uses Broken Record?', options: ['Repeating different reasons each time','Repeating the same calm sentence without changing the wording','Gradually giving in to reduce conflict','Asking why they keep pushing'], correct: 1 },
            { id: 'br6', q: 'The mindset behind Broken Record is:', options: ['"I need to justify my boundaries."','"I do not need to justify my boundaries. Repeating myself is stable, not strange."','"If I repeat myself, people think I am not listening."','"I should only say no once, then give in gracefully."'], correct: 1 },
            // GENERAL (6 questions)
            { id: 'g1', q: 'Which technique is best when someone keeps pushing after you said no?', options: ['Fogging','Negative Assertion','Broken Record','Negative Inquiry'], correct: 2 },
            { id: 'g2', q: 'Which technique is best for vague or unclear criticism?', options: ['Broken Record','Negative Inquiry','Fogging','Negative Assertion'], correct: 1 },
            { id: 'g3', q: 'Which technique is best when someone points out a mistake you genuinely made?', options: ['Fogging','Negative Inquiry','Broken Record','Negative Assertion'], correct: 3 },
            { id: 'g4', q: 'Which technique is best when someone criticises you and you want to stay calm without engaging?', options: ['Broken Record','Negative Assertion','Fogging','Negative Inquiry'], correct: 2 },
            { id: 'g5', q: 'All four techniques share one thing. What is it?', options: ['They all involve apologising','They all involve staying calm and not getting defensive','They all require the other person to back down','They all involve explaining your reasoning'], correct: 1 },
            { id: 'g6', q: 'Someone says "you never listen." Which technique lets you acknowledge without defending?', options: ['Broken Record','Negative Assertion','Fogging','Negative Inquiry'], correct: 2 },
          ],
        },
      },
      {
        id: 'section-2',
        title: 'Section 2 — Starting & Deepening Conversations',
        packs: [
          { key: 'startingconnecting', label: 'Starting & Connecting' },
          { key: 'conversationaldepth', label: 'Conversational Depth' },
        ],
        checkpoint: {
          id: 'social-confidence-cp2',
          title: 'Checkpoint — Section 2',
          timeLimit: 25,
          drawCount: 20,
          questions: [
            // STARTING & CONNECTING (15 questions)
            { id: 'sc1', q: 'What is the most effective opener when meeting someone new?', options: ['A clever or witty line','An observation about the shared situation or environment','A question about their job or status','A compliment about their appearance'], correct: 1 },
            { id: 'sc2', q: 'Small talk serves what purpose?', options: ['Wasting time before the real conversation','Building a bridge of comfort that allows deeper conversation','Showing that you are interesting','Testing whether someone is worth talking to'], correct: 1 },
            { id: 'sc3', q: 'Someone looks uncomfortable in a group setting. A good opening is:', options: ['"You look like you are not enjoying yourself."','"Do you know many people here?"','"Why are you standing alone?"','"This is a great party, right?"'], correct: 1 },
            { id: 'sc4', q: 'What does a good follow-up question do?', options: ['Changes the subject to something more interesting','Shows you heard and are curious about what they just said','Demonstrates your own knowledge on the topic','Returns the conversation to you'], correct: 1 },
            { id: 'sc5', q: 'When a conversation stalls, the best move is:', options: ['End the conversation politely','Add an observation or share something briefly about yourself that links to their topic','Ask them what they want to talk about','Wait for them to restart it'], correct: 1 },
            { id: 'sc6', q: 'The "free information" principle means:', options: ['You should only share information when asked','People offer extra detail in their answers — follow those threads','Small talk should be kept impersonal','Information is currency and should be rationed'], correct: 1 },
            { id: 'sc7', q: 'You are at an event and want to approach someone standing alone. The best approach is:', options: ['Wait until they approach you','Walk over, make eye contact, and comment on something in the shared context','Send a message via a mutual friend','Open with a direct question about them'], correct: 1 },
            { id: 'sc8', q: 'Which of these is the weakest conversation opener?', options: ['"Have you been here before?"','"How do you know the host?"','"So, what do you do?"','"What brought you to this event?"'], correct: 2 },
            { id: 'sc9', q: 'Active listening in conversation means:', options: ['Staying quiet until it is your turn to speak','Nodding while thinking about what to say next','Showing through questions and responses that you are genuinely tracking what they say','Repeating back exactly what someone said'], correct: 2 },
            { id: 'sc10', q: 'A conversation is going well when:', options: ['You are doing most of the talking','Both people are sharing and building on what the other says','The other person keeps asking you questions','You avoid any silences'], correct: 1 },
            { id: 'sc11', q: 'What is the risk of filling every silence in a conversation?', options: ['The other person thinks you are boring','You prevent the natural rhythm that allows the other person to open up','Silences are never appropriate in conversation','The conversation becomes too slow'], correct: 1 },
            { id: 'sc12', q: 'Self-disclosure in conversation means:', options: ['Sharing your opinion on controversial topics','Sharing something personal to create reciprocity and depth','Telling people about your achievements','Disclosing information the other person asked for'], correct: 1 },
            { id: 'sc13', q: 'When you share something personal, what often happens?', options: ['The other person feels uncomfortable','The other person is more likely to share something personal in return','The conversation becomes too serious','The other person loses interest'], correct: 1 },
            { id: 'sc14', q: 'Ending a conversation well means:', options: ['Excusing yourself as soon as you want to leave','Leaving the other person feeling good about the interaction — a warm close','Waiting for them to end it','Summarising everything you discussed'], correct: 1 },
            { id: 'sc15', q: 'What separates a forgettable conversation from a memorable one?', options: ['The topics covered','The amount of information exchanged','Whether both people felt genuinely seen and heard','How long the conversation lasted'], correct: 2 },
            // CONVERSATIONAL DEPTH (15 questions)
            { id: 'cd1', q: 'Conversational depth means:', options: ['Talking about intellectual or academic subjects','Moving from surface topics to what genuinely matters to the other person','Asking many questions in a row','Keeping the conversation going as long as possible'], correct: 1 },
            { id: 'cd2', q: 'A good deep question has which quality?', options: ['It has a clear right or wrong answer','It invites reflection and a personal response — not just facts','It is unexpected and unusual','It makes the other person think for a long time'], correct: 1 },
            { id: 'cd3', q: 'Someone says they have been travelling. A surface response is "where did you go?" A deeper response might be:', options: ['"How long were you away?"','"What surprised you most about being there?"','"Was it expensive?"','"Did you go alone?"'], correct: 1 },
            { id: 'cd4', q: 'What is the purpose of vulnerability in conversation?', options: ['To make the other person feel sorry for you','To signal that the conversation is a safe space for honesty','To demonstrate emotional intelligence','To move the conversation onto personal topics quickly'], correct: 1 },
            { id: 'cd5', q: 'You share something honest and slightly vulnerable. What often happens next?', options: ['The other person becomes uncomfortable','The other person is more likely to share something honest in return','The conversation shifts to advice-giving','The other person takes over the conversation'], correct: 1 },
            { id: 'cd6', q: 'The best moment to move a conversation deeper is:', options: ['At the very start, before small talk','When there is a natural pause and both people seem comfortable','After 20 minutes of conversation regardless of feel','When the other person asks a deep question'], correct: 1 },
            { id: 'cd7', q: 'Someone says "I have been pretty stressed lately." A depth-building response is:', options: ['"That sounds tough."','"Have you tried meditation?"','"What is it that has been weighing on you most?"','"Stress is so common these days."'], correct: 2 },
            { id: 'cd8', q: 'What kills conversational depth most quickly?', options: ['Talking about yourself too much','Giving advice before the person feels fully heard','Asking too many questions','Sharing your own opinion'], correct: 1 },
            { id: 'cd9', q: 'The phrase "tell me more about that" works because:', options: ['It shows you have a large vocabulary','It is open-ended and gives the person space to go wherever matters most to them','It makes the other person feel intelligent','It buys you time to think of a better question'], correct: 1 },
            { id: 'cd10', q: 'Which is the deeper version of the same question?', options: ['"What is your job?" vs "What do you do for fun?"','"Where are you from?" vs "What was it like growing up there?"','"How long have you been friends?" vs "When did you meet?"','"Do you like your job?" vs "What do you do?"'], correct: 1 },
            { id: 'cd11', q: 'Emotional attunement in conversation means:', options: ['Matching the energy and emotional tone of what the other person is experiencing','Sharing your own emotions whenever relevant','Staying calm regardless of the topic','Asking how someone is feeling directly'], correct: 0 },
            { id: 'cd12', q: 'Someone shares something painful. Before offering a reframe or advice, you should:', options: ['Ask clarifying questions','Make sure they feel fully heard and acknowledged','Share a similar experience of your own','Offer a solution'], correct: 1 },
            { id: 'cd13', q: 'What is the difference between sympathy and empathy in conversation?', options: ['Sympathy is stronger than empathy','Empathy joins someone in their experience; sympathy looks at it from the outside','Sympathy requires physical presence; empathy does not','There is no meaningful difference'], correct: 1 },
            { id: 'cd14', q: 'A good question for building depth does NOT:', options: ['Invite personal reflection','Have a yes or no answer','Relate to what the person just shared','Give the person room to decide how much to share'], correct: 1 },
            { id: 'cd15', q: 'The best conversations tend to end with both people feeling:', options: ['Informed about each other','Tired from thinking deeply','Seen, heard, and genuinely curious about talking again','Satisfied that they covered all the important topics'], correct: 2 },
          ],
        },
      },
    ],
  },

  {
    id: 'conversation-skills',
    title: 'Conversation Skills Foundations',
    description: 'Learn how to start conversations with confidence, keep them going, and create genuine connection — from small talk to meaningful depth.',
    icon: 'ti-message-circle',
    sections: [
      {
        id: 'section-1',
        title: 'Section 1 — Starting & Connecting',
        packs: [
          { key: 'startingconnecting', label: 'Starting & Connecting' },
        ],
        checkpoint: {
          id: 'conversation-skills-cp1',
          title: 'Checkpoint — Section 1',
          timeLimit: 25,
          drawCount: 20,
          questions: [
            { id: 'cs1', q: 'What is the most effective opener when meeting someone new?', options: ['A clever or witty line','An observation about the shared situation or environment','A question about their job','A compliment about their appearance'], correct: 1 },
            { id: 'cs2', q: 'Small talk serves what purpose?', options: ['Wasting time before the real conversation','Building a bridge of comfort that allows deeper conversation','Showing you are interesting','Testing whether someone is worth talking to'], correct: 1 },
            { id: 'cs3', q: 'What does a good follow-up question do?', options: ['Changes the subject','Shows you heard and are curious about what they just said','Demonstrates your knowledge','Returns the conversation to you'], correct: 1 },
            { id: 'cs4', q: 'The "free information" principle means:', options: ['You should only share when asked','People offer extra detail in answers — follow those threads','Small talk should stay impersonal','Information should be rationed'], correct: 1 },
            { id: 'cs5', q: 'Which of these is the weakest conversation opener?', options: ['"Have you been here before?"','"How do you know the host?"','"So, what do you do?"','"What brought you here today?"'], correct: 2 },
            { id: 'cs6', q: 'When a conversation stalls, the best move is:', options: ['End it politely','Add an observation or share something that links to their topic','Ask what they want to talk about','Wait for them to restart'], correct: 1 },
            { id: 'cs7', q: 'Active listening means:', options: ['Staying quiet until your turn','Nodding while thinking of what to say','Showing through questions and responses that you are tracking what they say','Repeating back exactly what was said'], correct: 2 },
            { id: 'cs8', q: 'A conversation is going well when:', options: ['You are doing most of the talking','Both people are sharing and building on what the other says','The other person keeps asking questions','You avoid all silences'], correct: 1 },
            { id: 'cs9', q: 'What is the risk of filling every silence?', options: ['You seem boring','You prevent the natural rhythm that lets the other person open up','Silences are never appropriate','The conversation slows down'], correct: 1 },
            { id: 'cs10', q: 'Self-disclosure means:', options: ['Sharing opinions on controversial topics','Sharing something personal to create reciprocity and depth','Telling people about achievements','Revealing information when asked'], correct: 1 },
            { id: 'cs11', q: 'When you share something personal, what often happens?', options: ['The other person feels uncomfortable','The other person is more likely to share something personal in return','The conversation becomes too serious','The other person loses interest'], correct: 1 },
            { id: 'cs12', q: 'Ending a conversation well means:', options: ['Excusing yourself as soon as you want to leave','Leaving the other person feeling good about the interaction','Waiting for them to end it','Summarising everything discussed'], correct: 1 },
            { id: 'cs13', q: 'You want to approach someone standing alone at an event. The best move is:', options: ['Wait until they approach you','Walk over, make eye contact, comment on something in the shared context','Ask a mutual friend to introduce you','Open with a direct question about them'], correct: 1 },
            { id: 'cs14', q: 'What separates a forgettable conversation from a memorable one?', options: ['The topics covered','The amount of information exchanged','Whether both people felt genuinely seen and heard','How long it lasted'], correct: 2 },
            { id: 'cs15', q: 'A good conversation leaves both people feeling:', options: ['Informed about each other','Tired from thinking','Seen, heard, and curious about talking again','Satisfied they covered everything'], correct: 2 },
            { id: 'cs16', q: 'What does it mean to "follow the thread" in conversation?', options: ['Stay on one topic until it is exhausted','Pick up on the extra detail someone offered and explore it','Keep the conversation moving quickly','Avoid going off-topic'], correct: 1 },
            { id: 'cs17', q: 'Rapport is best described as:', options: ['A formal agreement between two people','A feeling of mutual comfort and ease that makes conversation flow','A technique for getting people to like you','The result of sharing personal information'], correct: 1 },
            { id: 'cs18', q: 'When someone gives a short answer, the best response is:', options: ['Move to a new topic','Share your own view on the subject','Ask a follow-up that invites them to say more','Summarise what they said'], correct: 2 },
            { id: 'cs19', q: 'What role does mirroring energy play in conversation?', options: ['It means copying everything the other person does','Matching the other person’s tone and pace helps them feel comfortable','It is manipulative and should be avoided','It only works in professional settings'], correct: 1 },
            { id: 'cs20', q: 'Why is showing genuine curiosity more effective than memorising openers?', options: ['Memorised lines are always obvious','Curiosity is self-sustaining — it naturally generates questions and follow-ups','Openers are too short to build rapport','People can tell when you are interested'], correct: 1 },
          ],
        },
      },
      {
        id: 'section-2',
        title: 'Section 2 — Going Deeper',
        packs: [
          { key: 'conversationaldepth', label: 'Conversational Depth' },
          { key: 'listeningresponding', label: 'Listening & Responding' },
        ],
        checkpoint: {
          id: 'conversation-skills-cp2',
          title: 'Checkpoint — Section 2',
          timeLimit: 25,
          drawCount: 20,
          questions: [
            { id: 'cd1', q: 'Conversational depth means:', options: ['Talking about intellectual subjects','Moving from surface topics to what genuinely matters to the other person','Asking many questions in a row','Keeping conversation going as long as possible'], correct: 1 },
            { id: 'cd2', q: 'A good deep question:', options: ['Has a clear right or wrong answer','Invites reflection and a personal response — not just facts','Is unexpected and unusual','Makes the other person think for a long time'], correct: 1 },
            { id: 'cd3', q: 'Someone says they have been travelling. A deeper response is:', options: ['"How long were you away?"','"What surprised you most about being there?"','"Was it expensive?"','"Did you go alone?"'], correct: 1 },
            { id: 'cd4', q: 'What is the purpose of vulnerability in conversation?', options: ['To make the other person feel sorry for you','To signal the conversation is a safe space for honesty','To demonstrate emotional intelligence','To move quickly to personal topics'], correct: 1 },
            { id: 'cd5', q: 'When you share something honest and slightly vulnerable, what often follows?', options: ['The other person becomes uncomfortable','The other person is more likely to share something honest in return','The conversation shifts to advice-giving','The other person takes over'], correct: 1 },
            { id: 'cd6', q: 'The best moment to move deeper is:', options: ['At the very start','When there is a natural pause and both people seem comfortable','After exactly 20 minutes','When the other person asks a deep question first'], correct: 1 },
            { id: 'cd7', q: 'Someone says "I have been pretty stressed lately." A depth-building response is:', options: ['"That sounds tough."','"Have you tried meditation?"','"What has been weighing on you most?"','"Stress is so common."'], correct: 2 },
            { id: 'cd8', q: 'What kills conversational depth most quickly?', options: ['Talking about yourself','Giving advice before the person feels fully heard','Asking too many questions','Sharing your opinion'], correct: 1 },
            { id: 'cd9', q: '"Tell me more about that" works because:', options: ['It shows you have a large vocabulary','It is open-ended and gives the person space to go where it matters most','It makes the other person feel intelligent','It buys you time to think'], correct: 1 },
            { id: 'cd10', q: 'Which is the deeper version of the same question?', options: ['"What is your job?" vs "What do you do for fun?"','"Where are you from?" vs "What was it like growing up there?"','"How long have you been friends?" vs "When did you meet?"','"Do you like your job?" vs "What do you do?"'], correct: 1 },
            { id: 'lr1', q: 'Active listening is best described as:', options: ['Staying silent until it is your turn','Preparing your response while they speak','Demonstrating through questions and responses that you are genuinely tracking what is said','Agreeing with everything said'], correct: 2 },
            { id: 'lr2', q: 'Reflective listening means:', options: ['Repeating every word exactly','Showing you understood by responding to the meaning and feeling behind what was said','Asking clarifying questions only','Summarising at the end of each turn'], correct: 1 },
            { id: 'lr3', q: 'Someone shares something painful. Before offering advice you should:', options: ['Ask clarifying questions','Make sure they feel fully heard and acknowledged','Share a similar experience','Offer a solution'], correct: 1 },
            { id: 'lr4', q: 'The difference between empathy and sympathy is:', options: ['Empathy is stronger','Empathy joins someone in their experience; sympathy looks at it from outside','Sympathy requires physical presence','There is no meaningful difference'], correct: 1 },
            { id: 'lr5', q: 'A good listening response does NOT:', options: ['Acknowledge the feeling','Invite them to say more','Immediately shift to your own experience','Reflect back what you heard'], correct: 2 },
            { id: 'lr6', q: 'When someone is talking and you feel the urge to interrupt with advice, you should:', options: ['Interrupt — it shows engagement','Hold it and continue listening until they feel fully heard','Ask if they want advice first','Change the subject once they pause'], correct: 1 },
            { id: 'lr7', q: 'Emotional attunement means:', options: ['Always agreeing with how the other person feels','Matching the energy and emotional tone of what the other person is experiencing','Staying calm regardless of topic','Asking how someone feels directly'], correct: 1 },
            { id: 'lr8', q: 'What does it mean to "hold space" for someone?', options: ['Standing close to them physically','Being fully present without trying to fix, advise or redirect','Keeping the conversation going with questions','Agreeing with everything they say'], correct: 1 },
            { id: 'lr9', q: 'When responding to someone in distress, the most important first step is:', options: ['Offering a solution','Sharing a similar story','Acknowledging what they are feeling without judgement','Asking what they need'], correct: 2 },
            { id: 'lr10', q: 'The best conversations tend to end with both people feeling:', options: ['Informed','Tired from depth','Seen, heard and genuinely curious about talking again','Satisfied they covered all topics'], correct: 2 },
          ],
        },
      },
    ],
  },

  // ── v1.26.82 — the three programs built on the handbook library ──────────
  // Shape rules (Appdokumentation/Program — principer och regler.md):
  // every Part usually carries at least one pack that is minLevel 'program',
  // which is the reward for passing that Part's checkpoint. Packs listed here
  // that are NOT 'program' are open already — deliberately, as the familiar
  // way in. The checkpoint may ask about any pack on the Part, locked or not.
  //
  // TODO: the question banks below are provisional. The rule is 20 drawn from
  // a bank of at least 40; the engine draws min(drawCount, pool), so each of
  // these currently runs as a short test until the full banks are written.
  {
    id: 'say-it-well',
    title: "Say It Well",
    description: "Three steps from saying something about yourself to telling it so that people remember it.",
    icon: "ti-microphone",
    sections: [
      {
        id: 'section-1',
        title: "Part 1 — Say something about yourself",
        packs: [
          { key: "talkingaboutyourself", label: "Talking About Yourself" },
        ],
        checkpoint: {
          id: 'siw-cp1',
          title: "Say something about yourself — check",
          timeLimit: 30,
          drawCount: 20,
          questions: [
            { id: 'siw1-1', q: "What is wrong with answering a question about yourself with one word?", options: ["It sounds arrogant", "It leaves the other person with nothing to work with", "It is impolite", "It ends the conversation formally"], correct: 1 },
            { id: 'siw1-2', q: "What makes a detail worth adding when you answer?", options: ["That it is impressive", "That it gives the other person somewhere to go next", "That it is true", "That it is short"], correct: 1 },
            { id: 'siw1-3', q: "Why does saying what you actually think about your work beat stating your job title?", options: ["Titles are boring to say", "A title is a label; an opinion is something they can respond to", "It sounds more modest", "It avoids talking about money"], correct: 1 },
            { id: 'siw1-4', q: "When you share something personal early, what usually follows?", options: ["Awkwardness", "The other person tends to share something back", "They change the subject", "They ask for details"], correct: 1 },
            { id: 'siw1-5', q: "What is the risk of holding the floor while talking about yourself?", options: ["You run out of material", "It stops being a conversation and becomes a performance", "You reveal too much", "They stop listening politely"], correct: 1 },
            { id: 'siw1-6', q: "What is the point of answering, then handing it back?", options: ["To seem interested", "You contribute and keep it two-way in the same breath", "To avoid saying more", "To change the subject"], correct: 1 },
          ],
        },
      },
      {
        id: 'section-2',
        title: "Part 2 — Make it clear",
        packs: [
          { key: "explainthings", label: "Explain Things" },
          { key: "givingexamples", label: "Giving Examples" },
        ],
        checkpoint: {
          id: 'siw-cp2',
          title: "Make it clear — check",
          timeLimit: 30,
          drawCount: 20,
          questions: [
            { id: 'siw2-1', q: "Where should an explanation start?", options: ["At the beginning of the story", "From what the other person already knows", "With the most important fact", "With a definition"], correct: 1 },
            { id: 'siw2-2', q: "What does a good example do that a definition does not?", options: ["It is shorter", "It gives the listener something concrete to picture", "It sounds friendlier", "It avoids technical words"], correct: 1 },
            { id: 'siw2-3', q: "Why check in partway through a long explanation?", options: ["To be polite", "To find out whether you are still being followed before you go further", "To give yourself a break", "To invite questions at the end"], correct: 1 },
            { id: 'siw2-4', q: "What makes an analogy work?", options: ["It is clever", "The thing you compare to is genuinely familiar to that listener", "It is short", "It is technically accurate"], correct: 1 },
            { id: 'siw2-5', q: "What usually goes wrong when an expert explains something?", options: ["They talk too fast", "They start from what they know rather than from what the listener knows", "They use too many examples", "They oversimplify"], correct: 1 },
            { id: 'siw2-6', q: "When is one example better than three?", options: ["Always", "When the point is already clear and more would only pad it out", "When you are short of time", "When the listener is an expert"], correct: 1 },
          ],
        },
      },
      {
        id: 'section-3',
        title: "Part 3 — Make it stick",
        packs: [
          { key: "storytellingwiththesixws", label: "Storytelling with the Six W's" },
          { key: "storiesinconversation", label: "Stories in Conversation" },
        ],
        checkpoint: {
          id: 'siw-cp3',
          title: "Make it stick — check",
          timeLimit: 30,
          drawCount: 20,
          questions: [
            { id: 'siw3-1', q: "What separates a told story from a reported one?", options: ["Length", "It is shaped for how it lands, not for the order it happened in", "It is funnier", "It has dialogue"], correct: 1 },
            { id: 'siw3-2', q: "What is the job of the first sentence of a story?", options: ["To set the scene", "To make the listener want the next one", "To introduce the people", "To say when it happened"], correct: 1 },
            { id: 'siw3-3', q: "Why does a story in conversation need to be shorter than one on a stage?", options: ["People are less patient", "You are borrowing the floor, not being given it", "There is more noise", "It is less formal"], correct: 1 },
            { id: 'siw3-4', q: "What is the most common way a conversational story fails?", options: ["The ending is weak", "The run-up is too long before anything happens", "It is not funny", "Too many names"], correct: 1 },
            { id: 'siw3-5', q: "Why hand the conversation back after a story?", options: ["To be modest", "A story that ends in silence leaves the other person unsure whose turn it is", "To check they liked it", "To avoid telling another"], correct: 1 },
            { id: 'siw3-6', q: "What makes a detail worth keeping in a story?", options: ["It is accurate", "It does work — it builds the picture or the tension", "It is unusual", "It is short"], correct: 1 },
          ],
        },
      },
    ],
  },

  {
    id: 'warmth-connection',
    title: "Warmth & Connection",
    description: "Three steps in being good to be around — noticing things out loud, saying them so they land, and naming what someone is feeling.",
    icon: "ti-heart",
    sections: [
      {
        id: 'section-1',
        title: "Part 1 — Notice it out loud",
        packs: [
          { key: "complimenting", label: "Compliments" },
        ],
        checkpoint: {
          id: 'wc-cp1',
          title: "Notice it out loud — check",
          timeLimit: 30,
          drawCount: 20,
          questions: [
            { id: 'wc1-1', q: "What makes a compliment land rather than sound like flattery?", options: ["Saying it quietly", "It is specific enough that it could only be about that person", "Saying it in front of others", "Keeping it short"], correct: 1 },
            { id: 'wc1-2', q: "Why is complimenting a choice better than a trait?", options: ["Traits are private", "A choice is something they did, so the credit is actually theirs", "It sounds less personal", "Traits are harder to notice"], correct: 1 },
            { id: 'wc1-3', q: "What is the risk of stacking several compliments together?", options: ["It takes too long", "Each one makes the others sound less sincere", "They forget the first", "It sounds rehearsed"], correct: 1 },
            { id: 'wc1-4', q: "Someone deflects your compliment. What is the useful response?", options: ["Repeat it more firmly", "Let it stand without arguing, and move on", "Explain why you said it", "Compliment something else"], correct: 1 },
            { id: 'wc1-5', q: "What does complimenting effort say that complimenting talent does not?", options: ["That you were watching", "That the result came from something they controlled", "That it was difficult", "That you could not do it"], correct: 1 },
            { id: 'wc1-6', q: "When does a compliment do most work?", options: ["At the start of a conversation", "When it names something the person half-hoped somebody would notice", "When it is unexpected", "When it is returned"], correct: 1 },
          ],
        },
      },
      {
        id: 'section-2',
        title: "Part 2 — Make it land",
        packs: [
          { key: "praiseandencouragement", label: "Praise and Encouragement" },
          { key: "supportingconversations", label: "Supporting Conversations" },
        ],
        checkpoint: {
          id: 'wc-cp2',
          title: "Make it land — check",
          timeLimit: 30,
          drawCount: 20,
          questions: [
            { id: 'wc2-1', q: "What separates praise from encouragement?", options: ["Praise is louder", "Praise is about what happened; encouragement is about what is still ahead", "Encouragement is for children", "There is no real difference"], correct: 1 },
            { id: 'wc2-2', q: "Someone tells you about a problem. What do they usually want first?", options: ["A solution", "To be heard before anything is fixed", "Advice from experience", "To be cheered up"], correct: 1 },
            { id: 'wc2-3', q: "What is wrong with \"at least it is not worse\"?", options: ["It is untrue", "It corrects the size of their feeling instead of acknowledging it", "It is too casual", "It invites argument"], correct: 1 },
            { id: 'wc2-4', q: "How do you offer advice without taking over?", options: ["Give it briefly", "Ask whether they want it", "Frame it as what you did once", "Wait until they ask twice"], correct: 1 },
            { id: 'wc2-5', q: "Why does vague praise do so little?", options: ["It sounds insincere", "It gives the person nothing they can repeat on purpose", "It is forgotten quickly", "It sounds like small talk"], correct: 1 },
            { id: 'wc2-6', q: "What is the point of following up days later?", options: ["To check the outcome", "It shows the thing mattered to you beyond the moment it was said", "To offer more advice", "To keep the friendship going"], correct: 1 },
          ],
        },
      },
      {
        id: 'section-3',
        title: "Part 3 — Name what they feel",
        packs: [
          { key: "emotionlabellingandregulation", label: "Emotion Labelling and Regulation" },
        ],
        checkpoint: {
          id: 'wc-cp3',
          title: "Name what they feel — check",
          timeLimit: 30,
          drawCount: 20,
          questions: [
            { id: 'wc3-1', q: "What does naming someone's emotion out loud tend to do?", options: ["Make it stronger", "Take some heat out of it, because it has been acknowledged", "Embarrass them", "End the conversation"], correct: 1 },
            { id: 'wc3-2', q: "Why say \"that sounds frustrating\" rather than \"you are frustrated\"?", options: ["It is shorter", "It offers the label instead of assigning it, so they can correct you", "It sounds warmer", "It avoids the word you"], correct: 1 },
            { id: 'wc3-3', q: "You name the feeling and get it wrong. What has still happened?", options: ["Nothing useful", "You have shown you were trying to understand, and they will usually correct you", "You have made it worse", "They will change the subject"], correct: 1 },
            { id: 'wc3-4', q: "What is the point of naming your own emotion in a tense moment?", options: ["To win sympathy", "It says what is happening instead of letting it leak out sideways", "To end the argument", "To sound honest"], correct: 1 },
            { id: 'wc3-5', q: "When is naming a feeling the wrong move?", options: ["When it is negative", "When the person clearly wants the moment to pass unremarked", "When you barely know them", "When you feel it too"], correct: 1 },
            { id: 'wc3-6', q: "What usually happens to a feeling that is never named?", options: ["It fades", "It comes out in the tone instead of the words", "It gets stronger", "It is forgotten"], correct: 1 },
          ],
        },
      },
    ],
  },

  // Extended. Part 1 uses two packs any Pro user already has — the familiar
  // way in — and the reward packs sit in Parts 2 and 3. Broken Record was
  // deliberately left out: it already has a bundle for sale in Extended, and
  // locking the pack itself behind a program would make that bundle absurd.
  {
    id: 'difficult-conversations',
    title: "Difficult Conversations",
    description: "Three steps through the conversations people avoid — asking and refusing, staying steady when they push back, and saying the hard thing.",
    icon: "ti-shield-bolt",
    sections: [
      {
        id: 'section-1',
        title: "Part 1 — Ask, and say no",
        packs: [
          { key: "makingrequests", label: "Making Requests" },
          { key: "sayingno", label: "Saying No" },
        ],
        checkpoint: {
          id: 'dc-cp1',
          title: "Ask, and say no — check",
          timeLimit: 30,
          drawCount: 20,
          questions: [
            { id: 'dc1-1', q: "What makes a request awkward more than anything else?", options: ["Asking for too much", "The long run-up before you get to it", "Asking the wrong person", "Asking at the wrong time"], correct: 1 },
            { id: 'dc1-2', q: "Why does a long explanation weaken a refusal?", options: ["It wastes time", "Every reason you give is something they can argue with", "It sounds unfriendly", "It confuses them"], correct: 1 },
            { id: 'dc1-3', q: "What carries a warm no more than the words do?", options: ["The reason", "How fast you answer", "The tone", "What you offer instead"], correct: 2 },
            { id: 'dc1-4', q: "Which of these is a soft no rather than a clear one?", options: ["\"Not this time — thanks for asking\"", "\"Maybe later, we'll see\"", "\"That's a no from me\"", "\"I can't, but ask me in June\""], correct: 1 },
            { id: 'dc1-5', q: "What does asking directly assume about the other person?", options: ["That they owe you", "That they are capable of saying no", "That they want to help", "That they have time"], correct: 1 },
            { id: 'dc1-6', q: "They ask again after your no. What is the move?", options: ["Give a fuller reason", "Say the same thing in the same tone", "Offer a compromise", "Harden your voice"], correct: 1 },
          ],
        },
      },
      {
        id: 'section-2',
        title: "Part 2 — When they push back",
        packs: [
          { key: "respondingtopassiveaggression", label: "Responding to Passive Aggression" },
          { key: "conflictemotions", label: "Conflict Emotions" },
        ],
        checkpoint: {
          id: 'dc-cp2',
          title: "When they push back — check",
          timeLimit: 30,
          drawCount: 20,
          questions: [
            { id: 'dc2-1', q: "What makes passive aggression hard to answer?", options: ["It is usually true", "There is nothing openly said to respond to", "It happens in public", "It is said quietly"], correct: 1 },
            { id: 'dc2-2', q: "What does naming the tone out loud do?", options: ["Starts a fight", "Puts the real subject on the table where it can be discussed", "Ends the conversation", "Makes you look defensive"], correct: 1 },
            { id: 'dc2-3', q: "Why answer the words rather than the dig?", options: ["It is politer", "It refuses the invitation to fight while still responding", "It confuses them", "It ends it faster"], correct: 1 },
            { id: 'dc2-4', q: "What is the first sign an argument has stopped being about the subject?", options: ["Voices get louder", "You start defending yourself rather than answering", "Someone leaves", "Old things get brought up"], correct: 1 },
            { id: 'dc2-5', q: "What does asking for a pause in a heated moment cost you?", options: ["The argument", "Nothing — the point survives twenty minutes", "Credibility", "The other person's trust"], correct: 1 },
            { id: 'dc2-6', q: "Why does anger make you less persuasive, not more?", options: ["It sounds unpleasant", "The other person starts managing you instead of listening to you", "You talk too fast", "You lose the thread"], correct: 1 },
          ],
        },
      },
      {
        id: 'section-3',
        title: "Part 3 — Say the hard thing",
        packs: [
          { key: "givingcriticism", label: "Giving Criticism" },
          { key: "receivingfeedbackandcriticism", label: "Receiving Feedback and Criticism" },
        ],
        checkpoint: {
          id: 'dc-cp3',
          title: "Say the hard thing — check",
          timeLimit: 30,
          drawCount: 20,
          questions: [
            { id: 'dc3-1', q: "What should criticism be aimed at?", options: ["The person's judgement", "A specific thing that was done", "The pattern over time", "The result"], correct: 1 },
            { id: 'dc3-2', q: "What is wrong with wrapping criticism in praise on both sides?", options: ["It takes too long", "The point gets lost, and the praise stops being believed", "It sounds insincere", "It is old-fashioned"], correct: 1 },
            { id: 'dc3-3', q: "Why ask a question before delivering criticism?", options: ["To soften it", "You may be missing the reason it happened", "To make them think", "To delay"], correct: 1 },
            { id: 'dc3-4', q: "Someone criticises you and part of it is fair. What is the strongest response?", options: ["Defend the unfair part first", "Agree with the part that is true, without accepting the rest", "Thank them and say nothing", "Ask for examples"], correct: 1 },
            { id: 'dc3-5', q: "What does asking for more detail about a criticism achieve?", options: ["It buys time", "It turns a verdict into something specific enough to act on", "It makes them back down", "It shows confidence"], correct: 1 },
            { id: 'dc3-6', q: "What is the cost of defending yourself immediately?", options: ["You look weak", "You stop hearing the part that would have been useful", "It prolongs the conversation", "It sounds rude"], correct: 1 },
          ],
        },
      },
    ],
  },
];
