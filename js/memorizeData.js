// memorizeData.js — Theory flashcard data for Memorize mode
// Each strategy has theory questions (front) and answers (back)

const memorizeCollections = {

  assertive: [
    {
      name: "Fogging",
      cards: [
        {
          q: "What is the core idea behind fogging?",
          a: "You agree with what might be true in a criticism — without defending yourself, explaining, or getting upset. Criticism passes through you like fog: nothing solid to hit."
        },
        {
          q: "What are the three types of fogging?",
          a: "1. Agree with what might be true — \"You're probably right.\"\n2. Agree with the possibility — \"It's possible that I…\"\n3. Agree with the logic — \"I can see why you think so.\""
        },
        {
          q: "What is fogging NOT?",
          a: "It's not agreeing that the criticism is definitely true. It's not an apology. It's not giving in. Agreeing with what might be true is a position of strength — not surrender."
        },
        {
          q: "What signals does fogging send to the other person?",
          a: "That you are not threatened by their criticism. That you don't need to defend yourself. That you are confident enough to absorb what they say without reacting."
        },
        {
          q: "What is the key difference between fogging and negative assertion?",
          a: "Fogging agrees with what might be true — it leaves room for doubt. Negative assertion agrees that something actually is true. Fogging: \"You could have a point.\" Assertion: \"Yes, I was late.\""
        }
      ]
    },
    {
      name: "Negative Inquiry",
      cards: [
        {
          q: "What is the core idea behind negative inquiry?",
          a: "When someone criticises you, you ask calmly for more — more detail, more specifics. Instead of defending yourself, you show genuine curiosity about the criticism."
        },
        {
          q: "What are the three main purposes of negative inquiry?",
          a: "1. Disarm — it's hard to keep attacking someone who is genuinely listening.\n2. Clarify — find out what the criticism is actually about.\n3. Show confidence — you're not afraid of more criticism."
        },
        {
          q: "Give three example phrases for negative inquiry.",
          a: "• \"What is it specifically I do that bothers you?\"\n• \"What do you mean by that exactly?\"\n• \"How would you prefer I handle it?\""
        },
        {
          q: "What is the tone of negative inquiry?",
          a: "Calm and genuinely curious — not sarcastic, not passive-aggressive. The question must feel like a real invitation to explain, not a challenge or a trap."
        },
        {
          q: "Why is negative inquiry described as a form of control?",
          a: "Because by asking, you direct the conversation. You force the critic to be specific, which often reveals that the criticism is vague or less valid than it first seemed."
        }
      ]
    },
    {
      name: "Negative Assertion",
      cards: [
        {
          q: "What is the core idea behind negative assertion?",
          a: "You actively and calmly agree with your own faults when someone points them out — without over-apologising, explaining, or getting defensive."
        },
        {
          q: "What does negative assertion signal about self-esteem?",
          a: "High self-esteem. You know you have flaws and that's okay. You don't need to minimise, justify, or collapse when a fault is pointed out."
        },
        {
          q: "What are the three things negative assertion avoids?",
          a: "1. Over-apologising — \"Oh no, I'm so sorry, I'm terrible at this…\"\n2. Explaining — \"Yes but it's because…\" (explanation = defence)\n3. Deflecting — changing the subject or turning it back on them."
        },
        {
          q: "What is the ideal format for a negative assertion response?",
          a: "Short, calm, owned. \"Yes, I was late. It happens.\" or \"You're right, I could have done that differently.\" No padding, no apology spiral, no justification."
        },
        {
          q: "What is the difference between negative assertion and apologising?",
          a: "An apology focuses on the other person's feelings and asks for forgiveness. Negative assertion simply acknowledges a fact about yourself — calmly and without emotional loading."
        }
      ]
    },
    {
      name: "Broken Record",
      cards: [
        {
          q: "What is the core idea behind broken record?",
          a: "You return to the same calm, short response every time someone pushes — without being drawn into argument, explanation, or apology. Like a vinyl record that skips."
        },
        {
          q: "Why does broken record work?",
          a: "Every time you explain or justify yourself, you give the other person new material to argue against. When you just repeat — there is nothing to respond to. The technique removes the fuel."
        },
        {
          q: "What are the four rules for using broken record?",
          a: "1. Choose a short, clear sentence.\n2. Repeat it calmly every time they push.\n3. Don't change your wording.\n4. Don't raise your voice, don't apologise, don't add new arguments."
        },
        {
          q: "What is the most important moment in broken record — and why?",
          a: "When the pressure escalates. That's when most people cave and start explaining. Holding the same tone as the pressure rises is exactly what the technique trains you for."
        },
        {
          q: "What is the difference between broken record and stubbornness?",
          a: "Stubbornness refuses to engage. Broken record stays calm and present — you hear them, you just don't move. The tone is steady and non-aggressive, not dismissive or cold."
        }
      ]
    }
    ,
    {
      name: "Challenge: Direct Criticism",
      cards: [
        {
          q: "What is direct criticism and what makes it hard to handle?",
          a: "Someone criticises your behaviour, work, choices, or character openly. The instinct to defend, explain, or counter-attack makes it hard — as does shame when others are present."
        },
        {
          q: "Which strategies work best against direct criticism?",
          a: "Fogging — agree with what might be true and stay calm.\nNegative Assertion — own the mistake cleanly without over-apologising.\nNegative Inquiry — ask for specifics to clarify and disarm."
        },
        {
          q: "What is the key mindset for receiving direct criticism?",
          a: "You don't have to defend yourself. Receiving criticism calmly is a strength, not a weakness. You can acknowledge without collapsing."
        }
      ]
    },
    {
      name: "Challenge: Vague Criticism",
      cards: [
        {
          q: "What is vague or indirect criticism and why is it destabilising?",
          a: "Criticism delivered through tone, implication, or deliberately unclear language. You can't defend against something never clearly said — and the ambiguity can make you doubt yourself."
        },
        {
          q: "What is the most powerful strategy against vague criticism — and why?",
          a: "Negative Inquiry. Ask for specifics: 'What do you mean exactly?' It forces clarity and puts responsibility back on the critic. Clarity is your friend."
        },
        {
          q: "Give an example of vague criticism and a response.",
          a: "Vague: 'It's just interesting that you did it that way.'\nResponse: 'What do you mean by interesting?' (Negative Inquiry)"
        }
      ]
    },
    {
      name: "Challenge: Pressure & Pushback",
      cards: [
        {
          q: "What is pressure and pushback, and what makes it hard to resist?",
          a: "Someone keeps pushing after you've said no — repeating, escalating, or finding new angles. The discomfort of ongoing tension and fear of damaging the relationship make it hard to hold firm."
        },
        {
          q: "Why should you avoid explaining yourself when using broken record?",
          a: "Every explanation gives the other person a new argument to counter. When you just repeat your position calmly — there is nothing to respond to. No fuel, no escalation."
        },
        {
          q: "What is the key mindset for handling pressure and pushback?",
          a: "You don't owe anyone a reason. Repeating yourself calmly is not aggressive — it's stable. The discomfort of the tension is theirs to manage, not yours."
        }
      ]
    },
    {
      name: "Challenge: Manipulation",
      cards: [
        {
          q: "What is manipulation and how does it work?",
          a: "Indirect tactics — guilt, flattery, false urgency, social proof — that bypass rational judgement and target emotions instead. Recognising the pattern is the first step."
        },
        {
          q: "Name four common forms of manipulation.",
          a: "1. Guilt tripping — making you feel responsible for their emotions.\n2. Social proof — 'everyone agrees with me'.\n3. Flattery before a request.\n4. Victimhood — making themselves the wronged party."
        },
        {
          q: "What is the key mindset for handling manipulation?",
          a: "You are not responsible for managing other people's emotions. Staying calm and clear is the best counter — manipulation loses power when it doesn't produce the intended emotional reaction."
        }
      ]
    },
    {
      name: "Challenge: Dismissiveness",
      cards: [
        {
          q: "What is dismissiveness and what forms does it take?",
          a: "Someone minimises what you say, feel, or experience. Forms include: 'You're overreacting', talking over you, 'That's not a big deal', or laughing at something you said seriously."
        },
        {
          q: "Which strategies work best against dismissiveness?",
          a: "Negative Assertion — own your reaction without shrinking: 'It is a big deal to me.'\nFogging — 'I may be — this is still how it felt.'\nNegative Inquiry — 'What do you think I should have done instead?'"
        },
        {
          q: "What is the key mindset for handling dismissiveness?",
          a: "Your experience is valid. You don't need permission to feel what you feel. You can acknowledge their perspective without abandoning your own."
        }
      ]
    },
    {
      name: "Challenge: Situational Pressure",
      cards: [
        {
          q: "What is situational pressure?",
          a: "The challenge comes from the situation itself — not what someone says. A group dynamic where everyone agrees except you, being put on the spot, or a social context where disagreeing feels costly."
        },
        {
          q: "What is the key mindset for handling situational pressure?",
          a: "Social pressure is real, but it's not an argument. You are allowed to be the only one in the room who disagrees. Calmly holding your position is not obstruction — it's integrity."
        },
        {
          q: "Give an example of situational pressure and a response.",
          a: "Situation: Everyone in the group has agreed to something you're uncomfortable with.\nResponse: 'I understand everyone's on board — I'm not able to go along with this one.' (Broken Record)"
        }
      ]
    },
    {
      name: "Challenge: Feeling Overwhelmed",
      cards: [
        {
          q: "Why does feeling overwhelmed break down assertive behaviour?",
          a: "When flooded with emotion you tend to freeze, over-explain, or react more strongly than intended. The emotional response hijacks the calm, clear communication that assertiveness requires."
        },
        {
          q: "What are common triggers for feeling overwhelmed in a confrontation?",
          a: "Unexpected criticism, being put on the spot, a build-up of smaller incidents, or being attacked by someone you care about."
        },
        {
          q: "What is the most important thing to remember when you feel overwhelmed?",
          a: "You don't have to respond immediately. 'Let me think about that' or simply pausing is not weakness — it's control. Buying time is a legitimate and powerful tool."
        }
      ]
    }
  ]

};
