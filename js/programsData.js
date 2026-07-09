// programsData.js — Learning programs for Deckstack
// Structure: programs is an array of program objects.
// Each program has sections, each section has packs and ends with a checkpoint.
// Checkpoints contain questions (pool of ~50, 20 drawn randomly per attempt).

const programsData = [
  {
    id: 'assertive-foundations',
    title: 'Assertive Communication Foundations',
    description: 'Build the core toolkit for confident, calm communication — from handling criticism to holding your ground under pressure.',
    icon: 'ti-messages',
    sections: [
      {
        id: 'section-1',
        title: 'Section 1 — Core Techniques',
        packs: [
          { key: 'assertive', label: 'Assertive Communication' },
        ],
        checkpoint: {
          id: 'assertive-foundations-cp1',
          title: 'Checkpoint — Section 1',
          timeLimit: 90, // seconds per question
          drawCount: 20, // questions drawn per attempt
          questions: [
            // ── FOGGING ──────────────────────────────────────────────────
            {
              id: 'f1',
              q: 'What is the core idea behind Fogging?',
              options: [
                'Agreeing with what might be true in criticism, without defending yourself',
                'Deflecting criticism with a counter-argument',
                'Apologising quickly to end the conflict',
                'Asking the critic to prove their point',
              ],
              correct: 0,
            },
            {
              id: 'f2',
              q: 'Someone says you are too sensitive. A good Fogging response is:',
              options: [
                '"I am not sensitive at all."',
                '"You could have a point there."',
                '"Why would you say something like that?"',
                '"That is really hurtful."',
              ],
              correct: 1,
            },
            {
              id: 'f3',
              q: 'Why does Fogging work as a technique?',
              options: [
                'It makes the critic feel guilty',
                'It shows you agree with everything they say',
                'Criticism has nothing solid to grip onto — it passes through like fog',
                'It forces the other person to explain themselves',
              ],
              correct: 2,
            },
            {
              id: 'f4',
              q: 'Which of these is a Fogging response?',
              options: [
                '"I completely disagree with that."',
                '"You might be right about that."',
                '"Let me explain why I did it."',
                '"That is not fair."',
              ],
              correct: 1,
            },
            {
              id: 'f5',
              q: 'Fogging is described as agreeing with:',
              options: [
                'Everything the critic says, regardless of truth',
                'Nothing — the goal is to stay silent',
                'What might be true, the possibility, or the logic of the criticism',
                'Only facts, never opinions',
              ],
              correct: 2,
            },
            {
              id: 'f6',
              q: 'Someone criticises your driving. The best Fogging response is:',
              options: [
                '"I am a perfectly good driver."',
                '"You might be right about that."',
                '"Maybe you should drive next time."',
                '"Why are you always criticising me?"',
              ],
              correct: 1,
            },
            {
              id: 'f7',
              q: 'What does Fogging signal to the other person?',
              options: [
                'That you are angry but staying calm',
                'That you agree with everything they said',
                'Confidence and unshakeable calm',
                'That you want to end the conversation',
              ],
              correct: 2,
            },
            {
              id: 'f8',
              q: 'Which phrase best demonstrates Fogging?',
              options: [
                '"I can see why you think so."',
                '"You are wrong about that."',
                '"I will try harder next time."',
                '"Stop criticising me."',
              ],
              correct: 0,
            },
            // ── NEGATIVE INQUIRY ─────────────────────────────────────────
            {
              id: 'ni1',
              q: 'What is the goal of Negative Inquiry?',
              options: [
                'To make the other person feel bad about criticising you',
                'To calmly ask for more criticism to disarm and clarify',
                'To end the conversation as quickly as possible',
                'To agree with everything the critic says',
              ],
              correct: 1,
            },
            {
              id: 'ni2',
              q: 'Someone says you are being difficult. A Negative Inquiry response is:',
              options: [
                '"I am not being difficult."',
                '"Fine, I will do it your way."',
                '"What is it specifically that I am doing that feels difficult?"',
                '"You are the one being difficult."',
              ],
              correct: 2,
            },
            {
              id: 'ni3',
              q: 'Negative Inquiry works because:',
              options: [
                'It is hard to keep attacking someone who is genuinely listening',
                'It shows the critic that you are right',
                'It forces the critic to apologise',
                'It gives you time to think of a counter-argument',
              ],
              correct: 0,
            },
            {
              id: 'ni4',
              q: 'What does using Negative Inquiry show?',
              options: [
                'That you are afraid of the critic',
                'That you are not afraid of more criticism',
                'That you agree with the criticism',
                'That you want to change the subject',
              ],
              correct: 1,
            },
            {
              id: 'ni5',
              q: 'Someone gives you vague criticism. The best Negative Inquiry response is:',
              options: [
                '"That is not a fair criticism."',
                '"What do you mean exactly? I would like to understand."',
                '"Why do you always criticise me?"',
                '"I will think about it."',
              ],
              correct: 1,
            },
            // ── NEGATIVE ASSERTION ───────────────────────────────────────
            {
              id: 'na1',
              q: 'Negative Assertion means:',
              options: [
                'Denying your faults calmly and confidently',
                'Actively and calmly agreeing with your own faults when pointed out',
                'Apologising extensively when you make a mistake',
                'Explaining why you made a mistake',
              ],
              correct: 1,
            },
            {
              id: 'na2',
              q: 'Someone says your joke was not funny. The best Negative Assertion response is:',
              options: [
                '"I thought it was funny."',
                '"Sorry, I did not mean to offend you."',
                '"No, that one did not land."',
                '"You just do not have a sense of humour."',
              ],
              correct: 2,
            },
            {
              id: 'na3',
              q: 'The key principle behind Negative Assertion is:',
              options: [
                'Explain your mistakes fully so people understand',
                'Acknowledge without shrinking',
                'Apologise quickly and move on',
                'Deny minor faults to maintain confidence',
              ],
              correct: 1,
            },
            {
              id: 'na4',
              q: 'Someone points out you were late. A good Negative Assertion response is:',
              options: [
                '"The traffic was terrible."',
                '"I am so sorry, it will never happen again."',
                '"You are right, I was late. That is on me."',
                '"I was only five minutes late."',
              ],
              correct: 2,
            },
            {
              id: 'na5',
              q: 'Which of these is NOT a Negative Assertion response?',
              options: [
                '"You are right, I could have done that differently."',
                '"Yes, that was a mistake. I will fix it."',
                '"No, that one did not land."',
                '"I did not do anything wrong."',
              ],
              correct: 3,
            },
            {
              id: 'na6',
              q: 'What does Negative Assertion communicate?',
              options: [
                'That you are weak and accept all criticism',
                'That you can be wrong and still be okay — acknowledging shows strength',
                'That you are trying to end the conversation',
                'That you are angry but hiding it',
              ],
              correct: 1,
            },
            // ── BROKEN RECORD ────────────────────────────────────────────
            {
              id: 'br1',
              q: 'Broken Record means:',
              options: [
                'Repeating a long explanation until the other person understands',
                'Returning to the same calm, short response every time the other person pushes',
                'Raising your voice gradually to show you are serious',
                'Listing all the reasons behind your decision',
              ],
              correct: 1,
            },
            {
              id: 'br2',
              q: 'Why should you avoid explaining yourself when using Broken Record?',
              options: [
                'Explanations make you sound uncertain',
                'Every explanation gives the other person a new argument to counter',
                'Explanations take too long',
                'The other person will not listen anyway',
              ],
              correct: 1,
            },
            {
              id: 'br3',
              q: 'A salesperson will not take no for an answer. The best Broken Record response is:',
              options: [
                '"I already said no, please stop."',
                '"Let me think about it."',
                '"That does not work for me." — repeated calmly each time.',
                '"I need to speak to my partner first."',
              ],
              correct: 2,
            },
            {
              id: 'br4',
              q: 'When someone escalates pressure, you should:',
              options: [
                'Match their energy to show you are serious',
                'Apologise and reconsider',
                'Hold the same calm tone — that is exactly when the technique is being tested',
                'Change your wording to try a different approach',
              ],
              correct: 2,
            },
            {
              id: 'br5',
              q: 'Which of these correctly uses Broken Record?',
              options: [
                'Repeating different reasons for your decision each time',
                'Repeating the same calm sentence without changing the wording',
                'Gradually giving in to reduce conflict',
                'Asking the other person why they keep pushing',
              ],
              correct: 1,
            },
            {
              id: 'br6',
              q: 'What mindset supports the Broken Record technique?',
              options: [
                '"I need to justify my boundaries."',
                '"I do not need to justify my boundaries. Repeating myself is stable, not strange."',
                '"If I repeat myself, people will think I am not listening."',
                '"I should only say no once, then give in gracefully."',
              ],
              correct: 1,
            },
            // ── GENERAL ──────────────────────────────────────────────────
            {
              id: 'g1',
              q: 'Which technique is best when someone keeps pushing after you said no?',
              options: [
                'Fogging',
                'Negative Assertion',
                'Broken Record',
                'Negative Inquiry',
              ],
              correct: 2,
            },
            {
              id: 'g2',
              q: 'Which technique is best when someone gives you vague or unclear criticism?',
              options: [
                'Broken Record',
                'Negative Inquiry',
                'Fogging',
                'Negative Assertion',
              ],
              correct: 1,
            },
            {
              id: 'g3',
              q: 'Which technique is best when someone points out a mistake you genuinely made?',
              options: [
                'Fogging',
                'Negative Inquiry',
                'Broken Record',
                'Negative Assertion',
              ],
              correct: 3,
            },
            {
              id: 'g4',
              q: 'Which technique is best when someone criticises you and you want to stay calm without engaging?',
              options: [
                'Broken Record',
                'Negative Assertion',
                'Fogging',
                'Negative Inquiry',
              ],
              correct: 2,
            },
            {
              id: 'g5',
              q: 'All four techniques in this pack share one thing. What is it?',
              options: [
                'They all involve apologising',
                'They all involve staying calm and not getting defensive',
                'They all require the other person to back down',
                'They all involve explaining your reasoning',
              ],
              correct: 1,
            },
          ],
        },
      },
    ],
  },
];
