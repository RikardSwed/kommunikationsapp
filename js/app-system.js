const WHATS_NEW = [
  {
    version: 'v1.28.72', date: 'September 2026', title: 'The user list gets the guide setting', audience: 'dev',
    items: [
      'Nine versions of content work shipped since the user-facing list was last touched, and by the editorial rules almost none of it belongs there — pack improvements are bundled, not enumerated. One thing does: the <strong>detailed / simple guide text</strong> setting is a choice the user makes, so it gets an entry.',
      'Written to the rules above WHATS_NEW_USER: what you can do with it, not what was wrong before. The rewritten guides are one closing line, not a list.',
    ],
  },
  {
    version: 'v1.28.71', date: 'September 2026', title: 'Sequences get the same kind of guide as every other mode', audience: 'dev',
    items: [
      'The simple-mode front guide in Sequences read <em>What\'s happening, and the strategy to use</em>. Half of it was false — since v1.27.88 the strategy name is deliberately stripped from a step\'s front and moved to the back in brackets — and the other half was redundant, because describing the situation is what every front in the app does. It now reads <strong>Use the planned strategy when…</strong>',
      'That puts the three modes in one series, differing only in how the move is decided: <em>Use this strategy when…</em> in Single Strategy, where the name stands as the deck title · <em>Choose a strategy when…</em> in Collections and Challenges, where you pick · <em>Use the planned strategy when…</em> in Sequences, where the plan on the scenario card has already picked.',
      'Detailed mode is unchanged — a step has always shown its own guide there. 138 stored copies in the data were updated, along with the checker and both guide test suites; the ellipsis moved it into the group that must not gain a spoken full stop.',
    ],
  },
  {
    version: 'v1.28.69', date: 'September 2026', title: 'Broken Record was never over the spec', audience: 'dev',
    items: [
      '<strong>The 48 surplus cards are extra input bundles, not surplus.</strong> Broken Record\'s eight Single decks hold 5 free + 3 pro — exactly the spec — plus three <em>Services</em> and three <em>Family</em> cards each, declared in BUNDLE_DEFS and built on purpose. check-pack counted all fourteen against a spec of eight and had warned about it since the volume sweep. It now counts free + pro only and reports the rest as what they are: <em>Single Strategy: 8 decks, 64 cards (+48 in extra bundles)</em>. Broken Record went from 18 warnings to 2, and no card was deleted. Assertive Communication (workplace, domestic) and Humour Practise (family) were measured the same wrong way.',
      '<strong>Sequences now quote their lines in every core pack.</strong> Describe Things, Explain Things, Praise and Encouragement and Disagreeing wrote their sequence backs as bare sentences while the rest of the library quoted — 126 steps across twelve decks. It matters most in hands-free, where an unquoted back is ambiguous between a line to say and an instruction to follow. All four packs are at 0 errors and 0 warnings.',
      '<strong>26 of 27 core packs are now at zero errors and zero warnings.</strong> The one exception is Broken Record, where two reused backs remain — and one of those, the same sentence twice inside Keep the Same Words, is the strategy working as intended.',
    ],
  },
  {
    version: 'v1.28.68', date: 'September 2026', title: 'Two checks were wrong, and the last two loose cards', audience: 'dev',
    items: [
      '<strong>check-pack\'s label reader tested the wrong thing.</strong> A trailing bracket was dismissed as a stage direction when it <em>began</em> with and/then/let/say/pause/stop/wait — so real labels like <code>[say it back]</code> and <code>[stop and check]</code> were invisible. What decides is the position, exactly as the comment beside it always claimed: a reply before the bracket makes it a label. Across the whole library this surfaced only two hidden labels in the core, both in Describe Things, both long known.',
      'Those two cards are rewritten. <em>Too Much At Once</em> card 3 and <em>They Have Never Seen One</em> card 5 taught stopping the description and showing a picture — outside what the pack is about — and now use What It Is For and What It Resembles instead. Describe Things is at 0 errors.',
      'The doubled-word check also flagged correct English: <em>"What is it about that that is bad?"</em>. It now allows <code>that that</code> and <code>had had</code>. And Responding to Passive Aggression declares its two silent sequence steps in the description, the way §9b-3 asks — Let It Go often looks like nothing at all, and the deck now says so.',
    ],
  },
  {
    version: 'v1.28.67', date: 'September 2026', title: 'Eleven strategies renamed', audience: 'dev',
    items: [
      '<strong>278 occurrences across ten packs.</strong> Every one of the eleven names pointed somewhere other than the move it teaches. Five were idioms that mean something else in ordinary English — <em>Respectful Exit</em> reads as leaving the conversation in a pack about staying in it; <em>Get Out Cleanly</em> reads as escaping when the move is handing the floor back. Four pointed at a sibling strategy in the same pack: <em>Expand to a Subtopic</em> described what <em>Build on Their Point</em> does, and its own back-guide had to correct it in writing.',
      '<strong>Loop Back is now Say It Back</strong>, which the library already used in First Strategies for the same move with the identical back-guide. One move, one name. The pack that misnamed it had written four Challenges cards about handing the floor back rather than paraphrasing — the name, not carelessness, put them there.',
      'Two renames made a front guide repeat its own strategy name and were rewritten (§11b-VI), and <em>Step Sideways</em> let one of the remaining negating guides go: <em>A neighbouring subject, not a new one</em> became <em>A neighbouring subject</em>, because a clear name does the work the negation was doing.',
    ],
  },
  {
    version: 'v1.28.66', date: 'September 2026', title: 'The D-sweep, applied across nine packs', audience: 'dev',
    items: [
      '<strong>Sixteen cards rewritten and three guides reworded</strong>, all of them found by reading the inherited back-guide against the reply it sits above. Nine packs, all at 0 errors afterwards. Seven cards taught a move their pack does not have and were replaced in place; nine were faithful to their deck but not to the strategy named in the bracket.',
      '<strong>A guide should say what the back is, not what it is not.</strong> Three of the eighteen collisions were caused by the negation itself — <em>A concrete offer, not a wish</em> over a wish, <em>A postponement, not a refusal</em> over a refusal, <em>The detail, not the category</em> over a card that names no detail. A positive guide can be a little wide; a negating one can be flatly false. The thing to avoid belongs in Challenges, where the learner practises the right move against it.',
      'Two decks turned out to be following their own descriptions rather than drifting: <em>Show Understanding / Taking the Floor</em> and <em>Starting Conversations / A Flat Reply</em> both had a line assigning a move to a strategy that means something else. The strategies keep their meaning — Loop Back is paraphrasing, Simple Greeting opens — and the decks were brought back into line.',
    ],
  },
  {
    version: 'v1.28.65', date: 'September 2026', title: 'Saying No swaps its fifth challenge', audience: 'dev',
    items: [
      '<strong>You Should Actually Say Yes is out of the pack.</strong> The inherited back-guide exposed it the day it shipped: four of its eight cards answer with a yes while the guide above them read <em>A plain refusal</em>. The deck was not miswritten — it taught something the pack does not, six strategies for declining against one deck about not declining. It is held for a Saying No — Pt. 2, written up as §1c of Innehållsluckor along with its cards and four candidate strategies.',
      '<strong>Its replacement is You Are Put on the Spot</strong> — asked with no warning and no time, in a doorway, in a group chat, in front of other people. It was the real gap among the remaining four, and it is the natural home for Ask for Time First, which the pack had but never built a deck around. All six strategies appear across its eight cards.',
      'The guard survives the removal, which was the only objection worth testing: <em>They Have Power Over You</em> already ends with "If it is something they are entitled to ask, this is not the right pack", and Core Idea card 7 draws the same kind of boundary. Saying No is at 0 errors, 0 warnings and full volume.',
    ],
  },
  {
    version: 'v1.28.64', date: 'September 2026', title: 'Every card in Collections and Challenges carries its own back-guide', audience: 'dev',
    items: [
      '<strong>1774 cards</strong> across 225 decks in the 29 core packs now inherit the back-guide of the strategy their bracket names, instead of the mode default <em>One way it could sound</em>. The front guide stays general — on the front the move has not been chosen yet. Only two cards were left untouched, the known loose pair in Describe Things. Written up as §11b-IX of the Mönsterbibliotek, which amends §11b-II rather than overturning it.',
      '<strong>Twenty Single Strategy guides were rewritten first</strong>, because a guide that misses its own cards would otherwise have been copied 1774 times. All twenty were found by measuring each guide against its own eight backs: <em>Wish Them Well</em> said "towards their evening" on eight cards where none was about the evening; <em>What It Is</em> said "what you would see" over explanations of things you cannot see; <em>Offer a Workable Compromise</em> said "costs you nothing" over an offer of an hour. 110 sequence steps that had copied the old wording followed.',
      'A pattern worth recording: <strong>three silence guides in a row proved too narrow.</strong> Let Them Finish, Let It Go and Give a Short Reason all described the silent case as though it were the whole move, while most of their cards are lines you actually say.',
    ],
  },
  {
    version: 'v1.28.63', date: 'September 2026', title: 'The guide-text pair, wired properly', audience: 'dev',
    items: [
      'The two guide toggles now claim the settings overlay from <code>reload()</code> as well as <code>show()</code>, and the overlay re-reads the stored choice every time it opens (<code>DS.syncGuideToggles</code>). Before, a mode entered by any path that did not call <code>show()</code> left <code>_guideActiveMode</code> pointing at a mode the user had left, so a click could write under the wrong key or do nothing at all.',
      'New test harness: <code>tools/dom-shim.js</code> plus <code>tools/test-guidemode.js</code> load the real <code>mode-engine.js</code> and click the real toggles, instead of reading the source for the right-looking strings. jsdom still cannot be installed here, and the shim is the smallest thing that makes the engine runnable — 15 assertions, and the two toggles can no longer both be on after a sync.',
      'v1.28.62 shipped with all 44 source-reading guide tests green, which is exactly why the wiring gap got through. Tests that read code prove the code says something; only a test that runs it proves the code does something.',
    ],
  },
  {
    version: 'v1.28.62', date: 'September 2026', title: 'Guide text has three settings, not two', audience: 'dev',
    items: [
      'The training-screen setting <em>Show guide text</em> is now a pair: <strong>Show detailed guide text</strong> (the strategy\'s own line, and a card\'s own line where one exists) and <strong>Show simple guide text</strong> (the mode\'s general pair, the same on every card). They are mutually exclusive, and turning both off hides guides entirely — the old off state. Both card modes and all six hands-free modes.',
      'Detailed is the state a new user starts in, because a beginner needs the most guidance. Existing users keep what they had: the stored key is absent for anyone who had guides on, which reads as detailed, and <code>off</code> still reads as off. No migration.',
      'The mode defaults are resolved away at export time, so the app could not recover them — each mode config now declares its own <code>baseGuide</code> pair. Sequences\' situation card carries its own, since it is not a step. Memorize has no guides in either state.',
    ],
  },
  {
    version: 'v1.28.61', date: 'September 2026', title: 'The inherited back-guide — a test in three decks', audience: 'dev',
    items: [
      'The back-guide in Collections and Challenges is the mode default (<em>One way it could sound</em>) in all 233 core decks, while the card already names its strategy in brackets. The idea under test: on the back the strategy is known, so the card can carry that strategy\'s own Single Strategy guide instead. <strong>Three decks now do</strong> — Discussing / It Got Personal (single-strategy, the easy case), First Strategies / Read and Reply (four strategies, all guides fit) and Discussing / Two Monologues (mixed, and it contains the known misfits).',
      'No engine work was needed. <code>mode-engine.js</code> has resolved <code>(card.guideBack || deck.guideBack)</code> in every mode since v1.26.32, in training, hands-free and the editor alike; only sequences had used it. Per-card guides are therefore authorable today in all six modes.',
      'Three Single Strategy guides were rewritten first, because the test showed them too narrow for <em>their own</em> decks: <strong>Opening Statement</strong> <em>A remark about the room</em> → <em>A comment on the situation</em> (the deck\'s description names three kinds of statement and only one is the room); <strong>Ask What They Mean</strong> <em>A question about one word</em> → <em>A question that narrows it</em> (one of its eight cards was about a word); <strong>Let Them Finish</strong> <em>Silence, until they stop</em> → <em>Silence, or handing it back</em> (four of eight are spoken lines). The six sequence steps that had copied the old wording follow.',
    ],
  },
  {
    version: 'v1.28.52', date: 'September 2026', title: 'Memorize is finished in every Pro pack',
    items: [
      'Every Pro and freemium pack now has a Memorize deck for each of its strategies <em>and</em> one for each of the other five modes — Collections, Sequences, Challenges and Mindset — so the theory behind a collection or a challenge can be learned rather than only met in practice.',
      'The strategy decks went from six cards to eight, and the extra two in each are free.',
      '<strong>921 new cards in 20 packs</strong>, the last of them Giving Counter Examples, Discussing, Setup Question and Responding to Passive Aggression.',
    ],
  },
  {
    version: 'v1.28.52', date: 'September 2026', title: 'All six modes complete across the core library', audience: 'dev',
    items: [
      'Single Strategy, Collections, Sequences, Challenges, Mindset and Memorize are now at full volume in all 29 Pro and freemium packs. The volume sweep that began at v1.28.45 is closed: <strong>Collections 68 cards, Sequences 60 scenarios, Mindset 3 decks, Memorize 921 cards and 80 new mode decks.</strong>',
      'What remains is the read-through pass, not volume: descriptions against the templates, deck names, and whether the strategy boundaries hold. Most of the outstanding <strong>check-pack</strong> errors live there — Challenges labels that name the move rather than the strategy (Describe Things, Explain Things, Praise and Encouragement, Disagreeing, Giving Counter Examples, Discussing), and §9b-3 stage-direction backs in Single Strategy.',
      'Known deviations, flagged rather than changed: <strong>How to Interrupt / Get Out Cleanly</strong> is split 3 free + 5 pro instead of 5 + 3; <strong>Giving Counter Examples / Core Idea</strong> is 4 + 4; <strong>Broken Record</strong> has 14 cards per Single deck against a spec of 8; <strong>First Strategies</strong> has its Collections cards on free.',
    ],
  },
  {
    version: 'v1.28.43', date: 'September 2026', title: 'Sequences say which move you just made',
    items: [
      'Every step in a Sequence now names the strategy it uses, and the name appears on the back of the card in brackets once you have answered — so the front is only the situation, and you find out afterwards what the move was called.',
      'Scenario cards list the moves in order before you start. In several packs that list was empty and the card would not turn at all. It does now.',
      '<strong>Discussing</strong> was the worst of them: not one of its six scenarios used a strategy the pack teaches. Five steps now carry their real names — <em>Play It Back</em>, <em>Your Own View</em>, <em>Ask What They Mean</em>, <em>Keep the Temperature Down</em>.',
    ],
  },
  {
    version: 'v1.28.43', date: 'September 2026', title: 'Two ways a step could go unnamed', audience: 'dev',
    items: [
      '<code>splitMoveName</code> splits a step front at the em dash. A front written without one returns no name at all — the card showed the writer’s instruction as its front and got no bracket, and nothing flagged it. 22 steps were written that way.',
      '<code>scenarioMoveList</code> built the list from the fronts as written while <code>splitMoveName</code> stripped the <code>Step 1 ·</code> scaffolding for the bracket, so the list read <em>1. Step 1 · Concede</em> and the back read <em>[Concede]</em>. 878 steps across 47 packs use that prefix. Both now strip it, and <strong>test-flow.js</strong> asserts the rule so they cannot drift apart again.',
      'The measure worth keeping: <strong>192 of 195 scenarios</strong> in the pro and freemium packs now contain at least one strategy step. The three that do not are Setup Question’s first deck, where the phase exception applies.',
    ],
  },
  {
    version: 'v1.28.44', date: 'September 2026', title: 'Where the library actually stands', audience: 'dev',
    items: [
      'Complete across all Pro and freemium packs: <strong>Single Strategy</strong>, <strong>Challenges</strong>, <strong>Mindset</strong> (bar 24 cards), strategy names, guide texts and sequence step names.',
      'Outstanding volume: <strong>Collections 60 cards</strong>, <strong>Sequences 57 scenarios</strong> (the third scenario is missing in most decks), <strong>Memorize 825 cards</strong>. Eight of twenty-eight packs are finished outright.',
      '<strong>Apologizing — Pt. 2</strong> still uses <em>Apologise for What You Did</em> and <em>Say What You’ll Do Differently</em>, renamed in Pt. 1 only. It sits at Extended, outside the Pro sweep, so anyone owning both sees one strategy under two names.',
      'Describe Things, Explain Things and Praise and Encouragement have Challenges labels naming the move rather than the strategy — a boundary question for the read-through pass, not a format error.',
    ],
  },
  {
    version: 'v1.28.42', date: 'September 2026', title: 'Giving Counter Examples has two more strategies',
    items: [
      '<strong>The Smaller Claim</strong> — for when your example is met with “that’s just one person”. Instead of defending the example, you offer a narrower version of their claim that yours fits inside, and there is nothing left to argue about.',
      '<strong>Ask for Theirs</strong> — for when you doubt a sweeping claim but have no case of your own. You ask the person who made it to find the exception. It gets you information, and it is much harder to dismiss a hole someone finds in their own argument.',
      'Both come with their own cards in every training mode, and a fourth collection that makes you choose between them.',
    ],
  },
  {
    version: 'v1.28.41', date: 'September 2026', title: 'Setup Question, three ways',
    items: [
      'A setup question is a question you answer yourself. Its three Sequence decks now practise that in three different resolutions: <strong>Ask, Listen, Share</strong> breaks one question into its three beats, <strong>Changing the Question</strong> treats each question type as a whole move, and <strong>A Real Conversation</strong> mixes them the way it actually goes.',
      'The pack went from six scenarios to nine.',
    ],
  },
  {
    version: 'v1.28.39', date: 'September 2026', title: 'How to Interrupt: getting out again',
    items: [
      'The pack had five strategies for getting <em>into</em> a conversation and none for getting out of it. <strong>Get Out Cleanly</strong> is the sixth — saying your piece and handing the floor back, so the interruption ends as a contribution rather than a takeover.',
    ],
  },
  {
    version: 'v1.28.38', date: 'September 2026', title: 'Shorter strategy names, and a guide on every card',
    items: [
      'Fifty-six strategies across twenty-nine packs have been renamed. Long descriptions like <em>Answer What They Are Really Asking</em> have become names you can actually say — <em>Behind the Question</em> — and the meaning moved into the guide text under the card instead.',
      'Every card now carries two short lines: what the move is for, and what the answer should be. <em>Offer the version you both accept when…</em> / <em>A narrower claim, agreed.</em>',
      '<strong>Ratings and notes you left on a renamed deck will not follow it.</strong> The cards are the same; only the name changed.',
    ],
  },
  {
    version: 'v1.28.36', date: 'September 2026', title: 'What the tooling learned this month', audience: 'dev',
    items: [
      '<strong>check-pack.js</strong> §11b-VII rule 4 was flagging every back containing <em>answer</em>, including <em>An answer of the same size</em> where the qualifier carries the whole meaning. It now flags only the bare noun standing last. No pack text changed.',
      '<strong>514 card labels normalised</strong> (v1.28.18) from lower-case parentheses to bracketed strategy names — <code>(signal the interruption)</code> to <code>[Signal the Interruption]</code> — across thirteen packs. Stage directions in parentheses were left alone; the conversion only fired when the label matched a strategy the pack actually has.',
      '<strong>test-flow.js</strong> had encoded a bug as a fixture — <em>“expected at least one scenario with no derivable list”</em> — and failed when the bug was fixed. Rewritten to test the rule across the whole library. An assertion that names one pack as an example of a defect dies with the defect.',
      'Run <strong>verify-build.js</strong> <em>after</em> the version bump, not before. It checks <code>VERSION</code> against the <code>?v=</code> cache-bust tags in index.html, and run early it passes on the old pair while sixteen stale tags ship.',
    ],
  },
  {
    version: 'v1.28.30', date: 'September 2026', title: 'Challenges, filled out everywhere',
    items: [
      'Three hundred new Challenges cards across twenty packs. Every Pro pack now has all five kinds of thing-that-goes-wrong, with eight cards each — the mode is complete across the library.',
      'The new cards lean on the strategies that had almost no Challenges coverage, so the choice you are asked to make is a real one more often.',
    ],
  },
  {
    version: 'v1.28.07', date: 'September 2026', title: 'Mindset, complete in every Pro pack',
    items: [
      'A hundred new Mindset cards, and fifteen decks renamed from the training mode to the thought that actually stops people — <em>The Interrupting Mindset</em> is now <em>Interrupting Is Always Rude</em>, which is the sentence you are arguing with.',
      'Five new decks, including two that name something rarely said out loud: that inviting someone in feels like losing the floor, and that a joke feels like it undercuts your point.',
      'Ratings on the renamed Mindset decks do not carry over.',
    ],
  },
  {
    version: 'v1.27.50', date: 'August 2026', title: 'Assertive Communication, in two parts',
    items: [
      '<strong>Assertive Communication</strong>, free. The four moves Manuel J. Smith taught for the moment somebody is criticising, pressuring or guilt-tripping you: <em>Broken Record</em>, <em>Fogging</em>, <em>Negative Assertion</em> and <em>Negative Inquiry</em>.',
      '<strong>Part 2 — Social &amp; Equal Connections</strong>, in the Extended store. The other half, and the one nobody teaches: catching the details people drop without being asked, saying what you actually feel, declaring a want with no excuse attached, and trading the practical half of a conflict without giving up the part that matters.',
      'Part 1 is what to do when it is coming at you. Part 2 is what to do first.',
    ],
  },
  {
    version: 'v1.27.50', date: 'August 2026', title: 'A book in, two packs out', audience: 'dev',
    items: [
      'Both Assertive Communication packs were planned and drafted in Gemini Notebook from <em>When I Say No, I Feel Guilty</em>, then corrected against <strong>check-pack.js</strong> over four rounds. It found all seven named techniques, including the three the old pack had dropped, and mapped the Bill of Assertive Rights to nine Mindset decks.',
      'What it kept getting wrong is worth remembering: it fixes the line you point at, not the rule behind it. Told to repair one malformed step name it repaired that one and wrote two more in the next pack.',
      '<strong>check-pack.js</strong> gained three checks it had been missing — bullet-list names in descriptions, the <code>[Strategy]</code> label on a card measured against the pack’s own list, and a sequence step name with text appended. Zero false positives across all 116 packs.',
      '<strong>tools/verify-build.js</strong> — compares the published app file by file against the local one. VERSION only proves that <em>app-core.js</em> arrived; this counts the packs in the data too.',
    ],
  },
  {
    version: 'v1.27.49', date: 'August 2026', title: 'Two packs, rebuilt',
    items: [
      '<strong>Compliments</strong> and <strong>Responsive Humour</strong> have been rewritten to the size the newer packs are — roughly half as much material again in each, with every training mode filled out properly.',
      'Compliments gained the half almost nobody practises: three new collections that make you choose <em>what</em> you are praising, how far to go, and what to do when one is coming at you.',
    ],
  },
  {
    version: 'v1.27.48', date: 'August 2026', title: 'Domestic Situations comes with the pack', audience: 'dev',
    items: [
      '<strong>assertive::domestic</strong> was sold in Extended and in all three kits, for a pack sitting at minLevel ‘complete’ that no real user can open. It is out of the store; the bundle is now tier <code>pro-opt</code>, a toggle inside the pack like its sibling <em>Workplace &amp; Social</em>. No cards moved — only the gate.',
      'The parts got 19 kr cheaper, so the kit prices followed. They have been re-set twice since: 129/169/89, then 149/189/99 when Assertive Pt. 2 joined. <strong>test-store.js</strong> now recomputes the ratios from the catalogue itself, so the discount cannot quietly drift again.',
    ],
  },
  {
    version: 'v1.27.47', date: 'August 2026', title: 'The Extended store is not open yet',
    items: [
      'Every <em>Add</em> button now says <strong>Coming soon</strong> and does nothing. Purchases are not built, and until they are, nothing should look like it can be bought.',
      'Everything else in the store still works — browse it, read what each pack contains, see what it will cost.',
    ],
  },
  {
    version: 'v1.27.46', date: 'August 2026', title: 'Packs a programme has just given you', audience: 'dev',
    items: [
      'The discovery rule has two halves: a pack in an unlocked Part is trainable <em>inside</em> the programme immediately, and spreads to the Library, Topics and search only once that Part’s own checkpoint is passed. The second half worked. The first half never had.',
      'The programme screen opens packs through <code>showModeScreen</code>, which asked <code>canAccess()</code> and was told no — so a free user who had passed Part 1 of Conversation Foundations got “This pack requires Pro” on the two packs Part 2 had just handed them.',
      'Fixed with an explicit <code>viaProgram</code> flag, and pinned by <strong>test-progroute.js</strong>, which checks both halves at the same moment.',
    ],
  },
  {
    version: 'v1.27.45', date: 'August 2026', title: 'Five packs rebuilt, three new introductions',
    items: [
      '<strong>Show Understanding</strong>, <strong>Starting Conversations — Pt. 1</strong>, <strong>Talking About Yourself</strong>, <strong>Exploring a Topic</strong> and <strong>Changing Topics</strong> have all been rewritten. Every mode is filled out, the collections make you choose between three strategies rather than two, and every sequence has three scenarios instead of one.',
      'Three of them had no introduction at all. Talking About Yourself, Exploring a Topic and Changing Topics now open with one, and every introduction ends on the same page: <em>Choosing One</em>. Picking the right move is the exercise, and it was the part none of them said out loud.',
      'Some deck names have changed, so a rating or a note you left on a renamed deck will not follow it.',
    ],
  },
  {
    version: 'v1.27.42', date: 'August 2026', title: 'Measuring the library instead of reading it', audience: 'dev',
    items: [
      '<strong>tools/check-pack.js</strong> reads a pack with the app’s own parser and measures it against the specification — deck and card counts, free/pro split, guide texts, description lengths, repeated backs, and the one a human cannot do at scale: a sequence or collection naming a strategy that lives in a different pack.',
      '<strong>Packregister — status och regelnivå.md</strong>, generated by <strong>tools/pack-register.js</strong>. Three rule levels, measured from the app data, plus a hand-filled date for when each pack was last rewritten. It survives regeneration.',
      'Where it stands: 12 of 116 packs at R3.',
    ],
  },
  {
    version: 'v1.27.41', date: 'August 2026', title: 'The Assertive Four', audience: 'dev',
    items: [
      'The original <em>Assertive Communication</em> is now called <strong>The Assertive Four</strong> and sits at minLevel ‘complete’. The pack key is untouched, so ratings, notes and favourites follow it.',
      'The name was freed deliberately, for the new packs built from the current rules. The old one is kept exactly as it was.',
    ],
  },
  {
    version: 'v1.27.40', date: 'August 2026', title: 'The scenario card turns again', audience: 'dev',
    items: [
      'In Sequences, the card that sets the scene lists the moves in order on its back. <code>scenarioMoveList</code> required an em dash in each step front to find the move’s name, so a pack that wrote <em>Agreement on facts (I know)</em> produced an empty list and a card that would not turn at all.',
      'When a step front has no dash, the whole front is the name. That repaired 65 of 71 broken scenario cards across 14 packs. The remaining six are content rather than code — four write their steps as whole sentences, two are purely reactive.',
    ],
  },
  {
    version: 'v1.27.16', date: 'August 2026', title: 'Notes, and text that reads properly',
    items: [
      'You can keep a <strong>note on a pack or a programme</strong> now, not just on a card — reach it from the gear on the pack screen. Notes come along in the export.',
      'In Sequences, the card that sets the scene now shows the moves in order on its back.',
      'Bold text in a strategy’s explanation is finally rendered as bold, instead of showing the asterisks.',
    ],
  },
  {
    version: 'v1.27.10', date: 'August 2026', title: 'A code can open a single pack',
    items: [
      'Access codes come in two kinds now. One raises your whole level for a period; the other opens <strong>named packs</strong> and changes nothing else. Several pack codes can run at once, each with its own end date, and the row under the code field counts them down.',
      'A pack code works whatever level the pack normally needs — which is the point of handing one out.',
    ],
  },
  {
    version: 'v1.26.97', date: 'August 2026', title: 'Feedback circles, and this screen', audience: 'dev',
    items: [
      'The rating circles in feedback mode sit at the bottom edge of the card now. They were positioned against the inner card face, which left 40px of the card’s own padding underneath them — that is why three rounds of extra padding barely moved them.',
      'The bar no longer swallows touches. Only the circles themselves take a tap, so a swipe or a flip that starts near them reaches the card.',
      '<strong>What’s new</strong> is two lists. The row in normal settings shows what a user can use; this one shows everything, including developer-only work.',
    ],
  },
  {
    version: 'v1.26.96', date: 'August 2026', title: 'Checkpoint questions come from the vault', audience: 'dev',
    items: [
      '<strong>tools/import-test.js</strong> and <strong>tools/export-tests.js</strong> — question banks now live as .md files in <em>Programs/Tests/</em> and import into the app the same way packs do. No manifest: each file names its own program, section and checkpoint.',
      'The syntax is the one the in-app editor already reads, so a test file can be pasted into the editor as well. Full reference in <em>Appdokumentation/import syntax/Testsyntax</em>.',
      'Question banks finished so far: Conversation Foundations, Say It Well, Opening a Conversation and Warmth &amp; Connection — 40 questions each, 20 drawn.',
    ],
  },
  {
    version: 'v1.26.92', date: 'August 2026', title: '22 packs at complete level', audience: 'dev',
    items: [
      'Imported from NotebookLM and visible to nobody but you: <strong>The Masculine Blueprint</strong> Pt. 1–6 plus the Swedish one, <strong>Parenting</strong> 01–05, <strong>Praxeology Frame</strong> 01–05 and <strong>Praxeology Dread</strong> 01–05.',
      'All at minLevel ‘complete’, so they appear in no list at freemium, Pro or Extended.',
      'Open question before any of it ships: the <em>Refusing the Rejection</em> strategy in The Masculine Blueprint.',
    ],
  },
  {
    version: 'v1.26.90', date: 'August 2026', title: 'Beta codes, both ways', audience: 'dev',
    items: [
      '<strong>BETA2026</strong> grants Pro for 60 days, redeemed in Settings. The grant is a date rather than a flag, so it lapses on the tester’s own device whatever you push. The code itself stops being redeemable after 2026-12-31.',
      '<strong>Clear beta access code</strong> in developer settings takes it back immediately, without wiping progress or favourites.',
    ],
  },
  {
    version: 'v1.26.89', date: 'August 2026', title: 'If you have an access code',
    items: [
      'Settings now has <strong>Have an access code?</strong> — enter one to unlock Pro for a set period. Codes are given out for testing.',
    ],
  },
  {
    version: 'v1.26.86', date: 'August 2026', title: 'Six programmes to work through',
    items: [
      'New programmes: <strong>Say It Well</strong>, <strong>Warmth &amp; Connection</strong>, <strong>Opening a Conversation</strong>, <strong>Persuasion &amp; Negotiation</strong> and <strong>Humour</strong> — alongside Conversation Foundations, which stays free through Part 2.',
      'Some packs are now <em>earned</em>. They are not in the Library at all until you pass the checkpoint that releases them, and then they appear everywhere at once and stay yours.',
      '<strong>Difficult Conversations</strong> is available in the Extended store as a programme of its own.',
    ],
  },
  {
    version: 'v1.26.82', date: 'August 2026', title: 'Programme tiers', audience: 'dev',
    items: [
      'PROGRAM_CONFIG gives programmes the same four levels as packs, and a programme missing from the table defaults to ‘pro’ with a console warning rather than being handed out free.',
      'New pack level <strong>program</strong>: hidden everywhere until a checkpoint releases it. Sections carry their own minLevel, which is how Conversation Foundations is free through Part 2 and Pro from Part 3.',
    ],
  },
  {
    date: 'Earlier builds', title: 'Developer tools', audience: 'dev',
    items: [
      '<strong>Feedback mode</strong> — four circles on every card for rating the content as you train. The ratings are yours alone; tapping the selected circle again clears it.',
      '<strong>Tag mode</strong> — adds tagging controls, including the gear on a programme screen and the Free/Pro/Ext bar for setting a card’s access level.',
      '<strong>The editor</strong> — builds and edits packs and programmes in the browser, and reads the same paste format the import scripts use.',
    ],
  },
  {
    version: 'v1.26.78', date: 'August 2026', title: 'Two new packs',
    items: [
      '<strong>Compliments</strong> \u2014 saying the specific thing, praising a choice rather than luck, and the half nobody practises: taking one without deflecting it.',
      '<strong>Responsive Humour</strong> \u2014 five ways to answer an ordinary sentence: exaggeration, understatement, misdirection, deliberate misunderstanding and irony.',
    ],
  },
  {
    version: 'v1.26.75', date: 'August 2026', title: 'A programme to start with',
    items: [
      'New programme: <strong>Conversation Foundations</strong>. Four parts, from your first sentence to a conversation that goes somewhere \u2014 and the packs you pass stay yours.',
    ],
  },
  {
    version: 'v1.26.74', date: 'August 2026', title: 'Introductions and suggestions',
    items: [
      'Every free pack now opens with a short introduction to its strategies. Tap the pack name above the training modes to read it again.',
      'The Recommended row on the home screen updates itself, based on the topics you have actually been training.',
    ],
  },
  {
    version: 'v1.26.73', date: 'August 2026', title: 'Finding things in a bigger library',
    items: [
      'Search is <strong>ranked</strong> now. A match in a pack\u2019s name comes before a match in a strategy, which comes before a mention somewhere in the cards \u2014 and each result tells you why it turned up.',
      'Topics are searchable too, so &ldquo;repair&rdquo; finds the Apologizing packs even where the word is on no card.',
      'The Library separates what you can train with today from what Pro adds.',
    ],
  },
  {
    version: 'v1.26.67', date: 'August 2026', title: 'The library, many times over',
    items: [
      '<strong>38 new packs</strong> across every topic \u2014 Saying No, Making Requests, Giving Criticism, Deep Questions, Handling Conflict, Persuasion, Storytelling and thirty more.',
      'New in the free version: <strong>First Strategies</strong>, six strategies that make a whole small conversation \u2014 with <em>every</em> training mode unlocked, so you can see what the others are.',
      'Also free: <strong>Show Understanding</strong> and <strong>Starting Conversations \u2014 Pt. 1</strong>.',
    ],
  },
  {
    version: 'v1.26.66', date: 'August 2026', title: 'Progress and programs',
    items: [
      'The Progress calendar can now show your week as a <strong>bar chart</strong> of minutes per day \u2014 tap Bars above the calendar.',
      'Passing a checkpoint in a program now tells you exactly <strong>which packs it added to your library</strong>, and what comes next.',
    ],
  },
  {
    version: 'v1.26.65', date: 'July 2026', title: 'New pack',
    items: [
      '<strong>Setup Statement</strong> \u2014 open a conversation by giving the other person something to react to.',
    ],
  },
  {
    version: 'v1.26.62', date: 'July 2026', title: 'Finding things faster',
    items: [
      'Packs and topics are now listed <strong>alphabetically</strong> everywhere in the Library.',
      'The Pro screen shows the free trial and both plans clearly.',
    ],
  },
  {
    version: 'v1.26.56', date: 'July 2026', title: 'Programs, and a new one to try',
    items: [
      'New program: <strong>Saying No With Confidence</strong>, with the packs <strong>The Happy No</strong> and <strong>The Regretful No</strong>.',
      'Packs you earn in a program now stay yours \u2014 once you pass that part\u2019s checkpoint they appear in the Library, Topics and search.',
    ],
  },
  {
    version: 'v1.26.55', date: 'July 2026', title: 'Two new packs',
    items: [
      '<strong>Speaking Up in Groups</strong> \u2014 taking the floor, and handling interruptions.',
      '<strong>Playful Refusals</strong> \u2014 saying no with a light touch.',
    ],
  },
  {
    version: 'v1.26.53', date: 'July 2026', title: 'New pack',
    items: [
      '<strong>Transitions</strong> \u2014 moving a conversation from one thing to another without it feeling abrupt.',
    ],
  },
  {
    version: 'v1.26.49', date: 'July 2026', title: 'A real training calendar',
    items: [
      'Progress now shows a calendar over week, two weeks or a month, shaded by how much you trained. Tap any day, week or the title to see what you practised.',
    ],
  },
  {
    version: 'v1.26.44', date: 'July 2026', title: 'Pack introductions',
    items: [
      'Packs can now open with a short introduction to their strategies. Tap the pack name above the training modes to see it again.',
    ],
  },
];

// ── WHATS_NEW_USER ───────────────────────────────────────────────────────────
// v1.28.55, Rikards beslut. Den användarvända listan är INTE ett filtrerat
// WHATS_NEW längre — den är en egen, kurerad lista, och de två redigeras efter
// helt olika regler.
//
//   WHATS_NEW      — utvecklarloggen. Varje version, varje fynd, all detalj.
//                    Syns bara i developer settings. Rör den som förut.
//   WHATS_NEW_USER — vad användaren ser. Nya funktioner som är värda att bli
//                    glad över, sammanfattade över längre tid.
//
// Redigeringsregler för den här listan, i Rikards ord: *"kort, imponerande och
// enkelt att följa"*. Alltså:
//
//   • En post per TEMA eller PERIOD, inte per version. `version` utelämnas när
//     posten spänner över flera — då visas bara månaden.
//   • Högst tre punkter per post, och varje punkt är en funktion man kan
//     använda, inte en ändring som gjorts.
//   • Förbättringar buntas allmänt ("pack improvements"), aldrig uppräknade.
//   • Inga erkännanden av hur något var trasigt förut, inga siffror på hur
//     mycket som var fel, inga varningar om vad som går förlorat.
//   • Lägg bara till när något nytt är värt att öppna appen för. De flesta
//     versioner ska ALDRIG stå här.
const WHATS_NEW_USER = [
  {
    date: 'September 2026', title: 'Choose how much the guide tells you',
    items: [
      'The training settings now offer <strong>detailed</strong> or <strong>simple</strong> guide text. Detailed names the move — <em>a line that lowers the heat</em>, <em>their point, in your words</em> — so you know what the answer should do before you turn the card. Simple keeps one steady line instead. Turn both off and the cards stand on their own.',
      'Detailed is on to begin with, and the choice is remembered per pack and per mode, so you can keep the help where you still want it and drop it where you do not.',
      'The guides themselves were rewritten across the library to say what the card actually does.',
    ],
  },
  {
    date: 'September 2026', title: 'Six ways to train, in every Pro pack',
    items: [
      'Single Strategy, Collections, Sequences, Challenges, Mindset and Memorize are now filled out in full across every Pro and freemium pack — whichever mode you reach for, the material is there.',
      '<strong>Memorize</strong> has grown the most: a deck for every strategy, and one for each of the other modes, so the thinking behind a collection or a challenge is something you can learn rather than only run into.',
      'Pack improvements throughout, including new strategies in the packs whose material called for them.',
    ],
  },
  {
    date: 'September 2026', title: 'Every card tells you what the move was',
    items: [
      'Each card now carries two short lines: what the move is for, and what your answer should sound like.',
      'In <strong>Sequences</strong>, the back of a card names the strategy you just used, and the scenario card lists the moves in order before you start.',
      'Strategy names across the library are short enough to carry in your head — <em>Behind the Question</em> rather than a sentence describing it.',
    ],
  },
  {
    version: 'v1.27.50', date: 'August 2026', title: 'Assertive Communication, in two parts',
    items: [
      '<strong>Assertive Communication</strong>, free. The four moves Manuel J. Smith taught for the moment somebody is criticising, pressuring or guilt-tripping you: Broken Record, Fogging, Negative Assertion and Negative Inquiry.',
      '<strong>Part 2 — Social &amp; Equal Connections</strong>, in the Extended store. Catching the details people drop without being asked, saying what you actually feel, and declaring a want with no excuse attached.',
      'Part 1 is what to do when it is coming at you. Part 2 is what to do first.',
    ],
  },
  {
    date: 'August 2026', title: 'A much bigger library',
    items: [
      '38 new packs across every topic — Saying No, Making Requests, Giving Criticism, Deep Questions, Persuasion, Storytelling and thirty more.',
      'Free to train with: <strong>First Strategies</strong>, with every mode unlocked so you can see what the others are, plus <strong>Show Understanding</strong> and <strong>Starting Conversations — Pt. 1</strong>.',
      'The Extended store is open to browse: read what each pack contains and what it will cost.',
    ],
  },
  {
    date: 'August 2026', title: 'Programmes to work through',
    items: [
      'Six programmes: <strong>Conversation Foundations</strong>, free through Part 2, alongside Say It Well, Warmth &amp; Connection, Opening a Conversation, Persuasion &amp; Negotiation and Humour.',
      'Packs you earn by passing a checkpoint stay yours — they appear in the Library, Topics and search all at once.',
      '<strong>Difficult Conversations</strong> is available as a programme of its own.',
    ],
  },
  {
    date: 'August 2026', title: 'Finding things, keeping notes, unlocking packs',
    items: [
      'Search is ranked and tells you why each result turned up — and it covers topics, so “repair” finds the Apologizing packs even where the word is on no card.',
      'Keep a note on a pack or a programme, not just on a card. Notes come along in the export.',
      'Settings has <strong>Have an access code?</strong> — one kind raises your level for a period, the other opens named packs. Several can run at once, each with its own end date.',
    ],
  },
  {
    date: 'July 2026', title: 'Progress you can look back at',
    items: [
      'A calendar over a week, two weeks or a month, shaded by how much you trained. Tap any day, week or the title to see what you practised.',
      'Or switch to bars for minutes per day.',
    ],
  },
  {
    date: 'July 2026', title: 'Every pack opens with an introduction',
    items: [
      'A short introduction to a pack’s strategies before you start. Tap the pack name above the training modes to read it again.',
      'The Recommended row on the home screen updates itself from the topics you have actually been training.',
    ],
  },
];

(function initWhatsNew() {
  const btn     = document.getElementById('whatsNewBtn');
  const overlay = document.getElementById('whatsNewOverlay');
  const close   = document.getElementById('whatsNewClose');
  const body    = document.getElementById('whatsNewBody');
  const title   = document.getElementById('whatsNewTitle');
  if (!overlay || !body) return;

  // v1.26.97 \u2014 rendered per opening rather than once, because the same
  // overlay now shows two different lists. 'dev' shows everything.
  function render(mode) {
    // v1.28.55: två listor, inte en filtrerad. Dev-läget visar hela
    // utvecklarloggen som förut; användarläget visar den kurerade listan.
    // `audience: 'dev'` har därmed ingen effekt längre — taggen står kvar i
    // WHATS_NEW eftersom den fortfarande märker ut posterna i dev-vyn.
    const entries = mode === 'dev' ? WHATS_NEW : WHATS_NEW_USER;
    if (title) title.innerHTML = mode === 'dev' ? 'What&rsquo;s new \u2014 all entries' : 'What&rsquo;s new';
    body.innerHTML = entries.map(e =>
      '<div class="whatsnew-entry">'
      + '<div class="whatsnew-title">' + e.title
      + (mode === 'dev' && e.audience === 'dev' ? '<span class="whatsnew-tag">dev</span>' : '')
      + '</div>'
      + '<div class="whatsnew-meta">' + e.date + (e.version ? ' \u00b7 ' + e.version : '') + '</div>'
      + '<ul class="whatsnew-list">'
      + e.items.map(i => '<li>' + i + '</li>').join('')
      + '</ul></div>'
    ).join('');
    body.scrollTop = 0;
  }

  window._whatsNew = { open: mode => { render(mode === 'dev' ? 'dev' : 'user'); overlay.classList.add('open'); } };

  if (btn) btn.addEventListener('click', () => window._whatsNew.open('user'));
  if (close) close.addEventListener('click', () => overlay.classList.remove('open'));
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });
})();

// ─── SHARED PROMPT SPACING (v1.26.66) ──────────────────────────────
// Every prompt the app raises on its own — the Pro nudge, the rating gate —
// writes its timestamp here, and none of them may appear within a few days of
// another. Without this the two can stack on the same afternoon and the app
// starts to feel like it wants something from you.
const DS_PROMPT_KEY      = 'ds_last_prompt';
const DS_PROMPT_GAP_DAYS = 3;
function dsPromptRecently(days) {
  const t = parseInt(localStorage.getItem(DS_PROMPT_KEY) || '0', 10);
  return t > 0 && (Date.now() - t) / 86400000 < (days || DS_PROMPT_GAP_DAYS);
}
function dsMarkPrompt() { try { localStorage.setItem(DS_PROMPT_KEY, String(Date.now())); } catch {} }

// ─── PRO NUDGE (v1.26.66) ────────────────────────────────────────
// Freemium users get an occasional reminder that Pro exists. All the pacing
// sits in PRO_NUDGE_RULES so it can be tuned in one place. The intent: it
// turns up now and then, never twice within a few days, never during
// onboarding, and only every few times you touch a locked pack.
const PRO_NUDGE_RULES = {
  graceDays:          3,  // nothing at all in the first days after install
  firstMinSessions:   3,  // and not before the app has actually been used
  dayInterval:        7,  // eligible again this many days after the last one
  sessionInterval:    8,  // or after this many pack openings — whichever first
  cooldownDays:       4,  // hard floor between two nudges, whatever triggered
  lockedEvery:        4,  // only every Nth tap on a locked pack
  lockedCooldownDays: 2,  // and not if one turned up very recently
  slowAfter:          4,  // once shown this many times, every interval doubles
};

(function initProNudge() {
  const KEY     = 'ds_pro_nudge';
  const DAY     = 86400000;
  const R       = PRO_NUDGE_RULES;
  const overlay = document.getElementById('proNudgeOverlay');
  if (!overlay) return;

  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } };
  const save = s => { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch {} };

  function state() {
    const s = load();
    if (!s.installed) { s.installed = Date.now(); save(s); }
    s.sessions   = s.sessions   || 0;   // pack openings that were NOT locked
    s.shown      = s.shown      || 0;
    s.lockedTaps = s.lockedTaps || 0;
    return s;
  }

  const isFreemium = () => !!(window.accessLevel && window.accessLevel.getLevel() === 'freemium');
  const daysSince  = ts => (Date.now() - ts) / DAY;
  const mult       = s  => (s.shown >= R.slowAfter ? 2 : 1);
  const cooledDown = (s, days) => !s.lastShown || daysSince(s.lastShown) >= days;

  // Never land on top of something else the user is in the middle of.
  function busy() {
    if (!localStorage.getItem('ds_onboarding_done')) return true;
    const intro = document.getElementById('packIntroScreen');
    if (intro && intro.style.display !== 'none') return true;
    return !!document.querySelector('.settings-overlay.open');
  }

  function show(reason) {
    if (!isFreemium() || busy() || dsPromptRecently()) return false;
    const s = state();
    s.shown         += 1;
    s.lastShown      = Date.now();
    s.sessionsAtLast = s.sessions;
    s.lastReason     = reason;
    save(s);
    dsMarkPrompt();
    overlay.classList.add('open');
    return true;
  }

  // Developer preview: opens the screen without touching any of the timers,
  // so looking at it does not push the real one further away.
  function preview() { overlay.classList.add('open'); }

  // Time- and usage-based check. Runs at startup and when the user comes back
  // to the dashboard, so the session rule can fire without waiting a restart.
  function maybeShowPeriodic() {
    if (!isFreemium()) return false;
    const s = state();
    const m = mult(s);
    if (daysSince(s.installed) < R.graceDays) return false;
    if (!s.shown && s.sessions < R.firstMinSessions) return false;
    if (!cooledDown(s, R.cooldownDays * m)) return false;
    const since      = s.lastShown || s.installed;
    const byDays     = daysSince(since) >= R.dayInterval * m;
    const bySessions = (s.sessions - (s.sessionsAtLast || 0)) >= R.sessionInterval * m;
    return (byDays || bySessions) ? show('periodic') : false;
  }

  // Count pack openings, and catch taps on locked packs. showModeScreen is a
  // global function declaration in app-core.js, so every caller goes through
  // this wrapper; the original still owns the "requires Pro" toast.
  const origShowMode = window.showModeScreen;
  if (typeof origShowMode === 'function') {
    window.showModeScreen = function (key, label, opts) {
      // v1.27.46 — a pack opened through the programme route is not a locked
      // tap. It is the user training exactly what the programme just gave
      // them, and answering that with an upgrade nudge would be absurd.
      const viaProgram = !!(opts && opts.viaProgram)
        && !!(window.accessLevel && window.accessLevel.programRoutePending
              && window.accessLevel.programRoutePending(key));
      const locked = !viaProgram && !!(window.accessLevel && !window.accessLevel.canAccess(key));
      const s = state();
      if (locked) {
        if (isFreemium()) {
          s.lockedTaps += 1;
          save(s);
          if (s.lockedTaps % R.lockedEvery === 0 && cooledDown(s, R.lockedCooldownDays * mult(s))) {
            setTimeout(() => show('locked'), 900);   // let the toast be read first
          }
        }
      } else {
        s.sessions += 1;
        save(s);
      }
      return origShowMode.apply(this, arguments);
    };
  }

  const closeIt = () => overlay.classList.remove('open');
  const seeBtn  = document.getElementById('proNudgeSee');
  const laterBtn = document.getElementById('proNudgeLater');
  // v1.26.72 — leaving the settings screen first. Pressing this from the
  // developer preview looked like a dead button: showTab() DID switch to the
  // Upgrade screen, but the full-screen settings panel (z-index 700) was
  // still covering it. Same family as the overlay z-index bug.
  const leaveSettingsIfOpen = () => {
    const s = document.getElementById('homeSettingsScreen');
    if (s && s.style.display !== 'none' && typeof navFromSettings === 'function') navFromSettings();
  };

  if (seeBtn)   seeBtn.addEventListener('click', () => { closeIt(); leaveSettingsIfOpen(); if (window.showTab) window.showTab('upgrade'); });
  if (laterBtn) laterBtn.addEventListener('click', closeIt);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeIt(); });

  document.addEventListener('click', e => {
    const tab = e.target.closest && e.target.closest('.nav-tab[data-tab="dashboard"]');
    if (tab) setTimeout(maybeShowPeriodic, 700);
  });

  setTimeout(maybeShowPeriodic, 2500);

  // Exposed for the developer settings and for tests
  window._proNudge = { state, show, preview, maybeShowPeriodic, rules: R };
})();

// ─── RATING GATE (v1.26.66) ────────────────────────────────────
// Ask how it is going BEFORE asking for a review: a happy answer goes to
// Apple's own rating dialog, an unhappy one goes to a private message to the
// developer instead of a one-star review. Nothing about the user is collected
// either way — the only thing that ever leaves the device is text they typed.
//
// TO FINISH BEFORE RELEASE:
//   1. FEEDBACK_ENDPOINT — paste the Formspree form URL. Until it is set,
//      messages are kept in a local queue and sent once it is.
//   2. APP_STORE_ID — the numeric id, once the app exists in the store. Used
//      only as a fallback when the native plugin is not available.
//   3. In DeckstackApp: npm i @capacitor-community/in-app-review (8.x for
//      Capacitor 8 — the major tracks Capacitor's, same trap as the TTS
//      plugin), then npx cap sync on the Mac.
const FEEDBACK_ENDPOINT = '';   // e.g. 'https://formspree.io/f/xxxxxxxx'
const APP_STORE_ID      = '';   // e.g. '1234567890'

const RATING_RULES = {
  minSessionMinutes: 3,      // a pack session at least this long can trigger it
  streakDays:      [7, 14],  // each of these streaks may trigger it once, ever
  graceDays:         4,      // never in the first days after install
  askAgainDays:     60,      // after an ask that was ignored or dismissed
  answeredQuietDays: 240,    // after the user actually answered, leave them be
};

(function initRatingGate() {
  const KEY     = 'ds_rating';
  const QKEY    = 'ds_feedback_queue';
  const DAY     = 86400000;
  const R       = RATING_RULES;
  const overlay = document.getElementById('ratingOverlay');
  if (!overlay) return;

  const panels = {
    ask:    document.getElementById('ratingAsk'),
    thanks: document.getElementById('ratingThanks'),
    form:   document.getElementById('ratingForm'),
  };

  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } };
  const save = s => { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch {} };
  const daysSince = ts => (Date.now() - ts) / DAY;

  function state() {
    const s = load();
    if (!s.installed) { s.installed = Date.now(); save(s); }
    s.asks        = s.asks        || 0;
    s.usedStreaks = s.usedStreaks || [];
    return s;
  }

  // Native discovery follows the lesson from the TTS plugin: www/ is plain
  // script tags with no bundler, so the plugin's own JS is never loaded and
  // Capacitor.Plugins can be empty even when the native half is installed.
  // Ask the bridge directly instead.
  function reviewPlugin() {
    try {
      const C = window.Capacitor;
      if (!C || !C.isNativePlatform || !C.isNativePlatform()) return null;
      if (C.registerPlugin) return C.registerPlugin('InAppReview');
      return (C.Plugins && C.Plugins.InAppReview) || null;
    } catch { return null; }
  }

  function panel(name) {
    Object.keys(panels).forEach(k => { if (panels[k]) panels[k].style.display = (k === name ? '' : 'none'); });
  }
  function open(which) { panel(which || 'ask'); overlay.classList.add('open'); }
  function closeIt() { overlay.classList.remove('open'); }

  function busy() {
    if (!localStorage.getItem('ds_onboarding_done')) return true;
    const intro = document.getElementById('packIntroScreen');
    if (intro && intro.style.display !== 'none') return true;
    return !!document.querySelector('.settings-overlay.open');
  }

  function eligible() {
    const s = state();
    if (daysSince(s.installed) < R.graceDays) return false;
    if (s.answered && daysSince(s.answeredAt || 0) < R.answeredQuietDays) return false;
    if (s.lastAsk && daysSince(s.lastAsk) < R.askAgainDays) return false;
    if (dsPromptRecently()) return false;
    return !busy();
  }

  function ask(reason) {
    if (!eligible()) return false;
    const s = state();
    s.lastAsk    = Date.now();
    s.asks      += 1;
    s.lastReason = reason;
    save(s);
    dsMarkPrompt();
    open('ask');
    return true;
  }

  // ─ Sending ─────────────────────────────────────────────────
  // A failed send is queued and retried at the next launch, so a message
  // written on a train is not lost. The queue holds only what the user wrote.
  const readQ  = () => { try { return JSON.parse(localStorage.getItem(QKEY)) || []; } catch { return []; } };
  const writeQ = q => { try { localStorage.setItem(QKEY, JSON.stringify(q)); } catch {} };

  function post(item) {
    if (!FEEDBACK_ENDPOINT) return Promise.resolve(false);
    return fetch(FEEDBACK_ENDPOINT, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body:    JSON.stringify({ message: item.message, version: item.version }),
    }).then(res => !!res.ok).catch(() => false);
  }

  function flushQueue() {
    const q = readQ();
    if (!q.length || !FEEDBACK_ENDPOINT) return Promise.resolve();
    return q.reduce((chain, item) =>
      chain.then(left => post(item).then(sent => (sent ? left : left.concat([item])))),
      Promise.resolve([])
    ).then(writeQ);
  }

  // ─ Answers ────────────────────────────────────────────────
  const yesBtn    = document.getElementById('ratingYes');
  const noBtn     = document.getElementById('ratingNo');
  const sendBtn   = document.getElementById('ratingSend');
  const skipBtn   = document.getElementById('ratingSkip');
  const doneBtn   = document.getElementById('ratingThanksClose');
  const textEl    = document.getElementById('ratingFormText');
  const thanksTxt = document.getElementById('ratingThanksText');

  function markAnswered(kind) {
    const s = state();
    s.answered   = kind;
    s.answeredAt = Date.now();
    save(s);
  }

  if (yesBtn) yesBtn.addEventListener('click', () => {
    markAnswered('yes');
    const plugin = reviewPlugin();
    panel('thanks');
    if (plugin && plugin.requestReview) {
      if (thanksTxt) thanksTxt.textContent = 'That means a lot.';
      try { Promise.resolve(plugin.requestReview()).catch(() => {}); } catch {}
    } else if (APP_STORE_ID) {
      if (thanksTxt) thanksTxt.textContent = 'A rating in the App Store helps other people find Deckstack.';
      try { window.open('https://apps.apple.com/app/id' + APP_STORE_ID + '?action=write-review', '_blank'); } catch {}
    } else if (thanksTxt) {
      thanksTxt.textContent = 'That means a lot. If you have a moment, a rating in the App Store helps other people find Deckstack.';
    }
  });

  if (noBtn) noBtn.addEventListener('click', () => panel('form'));

  if (sendBtn) sendBtn.addEventListener('click', () => {
    const msg = ((textEl && textEl.value) || '').trim();
    markAnswered('feedback');
    if (!msg) { closeIt(); return; }          // writing nothing sends nothing
    const item = {
      message: msg,
      version: (typeof VERSION !== 'undefined' ? VERSION : ''),
      at:      new Date().toISOString(),
    };
    if (textEl) textEl.value = '';
    if (thanksTxt) thanksTxt.textContent = 'Thank you \u2014 your message is on its way to the developer.';
    panel('thanks');
    post(item).then(sent => { if (!sent) writeQ(readQ().concat([item])); });
  });

  if (skipBtn) skipBtn.addEventListener('click', closeIt);
  if (doneBtn) doneBtn.addEventListener('click', closeIt);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeIt(); });

  // ─ Triggers ───────────────────────────────────────────────
  // 1. A pack session of a few minutes. Timed here rather than read from
  //    Progress, because progress tracking is off unless the user enables it.
  let startedAt = 0;
  const origShowMode = window.showModeScreen;
  if (typeof origShowMode === 'function') {
    window.showModeScreen = function () {
      startedAt = Date.now();
      return origShowMode.apply(this, arguments);
    };
  }
  const origCloseTraining = window.closeTraining;
  if (typeof origCloseTraining === 'function') {
    window.closeTraining = function () {
      const minutes = startedAt ? (Date.now() - startedAt) / 60000 : 0;
      startedAt = 0;
      const out = origCloseTraining.apply(this, arguments);
      if (minutes >= R.minSessionMinutes) setTimeout(() => ask('session'), 900);
      return out;
    };
  }

  // 2. A streak worth noticing. Each length fires at most once, ever.
  function checkStreak() {
    let cur = 0;
    try { cur = JSON.parse(localStorage.getItem('prog_streak_cur')) || 0; } catch {}
    const s   = state();
    const hit = R.streakDays.filter(d => cur >= d && s.usedStreaks.indexOf(d) === -1).pop();
    if (!hit) return false;
    if (!ask('streak' + hit)) return false;
    const after = state();
    after.usedStreaks = after.usedStreaks.concat([hit]);
    save(after);
    return true;
  }

  setTimeout(checkStreak, 3500);
  setTimeout(flushQueue, 5000);

  window._rating = { state, ask, open, close: closeIt, checkStreak, flushQueue, queue: readQ, rules: R };
})();

// ─── RECOMMENDATIONS (v1.26.66) ──────────────────────────────────
// Two surfaces, deliberately unequal:
//   THE ROW on the dashboard is the primary one. It updates silently, costs
//   the user nothing, and is always there.
//   THE SCREEN after a session is the exception. It interrupts, so it is
//   rationed hard and shares `ds_last_prompt` with the Pro nudge and the
//   rating gate — no two self-raised prompts within a few days of each other.
//
// The signal is minutes per TOPIC, summed from this module's own per-pack
// timer rather than from prog_sessions, because progress tracking is off
// unless the user turns it on and the recommendation would then never learn
// anything. Onboarding picks seed it until there is real data.
//
// Two kinds of suggestion only — "more like this" and "something different".
// A third category would need a hand-written map of which topics are far
// apart from each other, which is a content decision, not a code one.
const RECO_RULES = {
  minSessionMinutes: 5,    // a session at least this long may trigger the screen
  everyDays:         5,    // and the screen appears at most this often
  dismissDays:      90,    // "not interested" hides a pack for this long, not forever
  maxLocked:         1,    // at most one locked pack in the row
  rowSize:           3,
};

(function initRecommendations() {
  const KEY = 'ds_reco';
  const DAY = 86400000;
  const R   = RECO_RULES;

  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } };
  const save = s => { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch {} };
  const daysSince = ts => (Date.now() - ts) / DAY;

  function state() {
    const s = load();
    s.minutes   = s.minutes   || {};   // packKey -> minutes trained
    s.dismissed = s.dismissed || {};   // packKey -> timestamp of "not interested"
    s.shown     = s.shown     || 0;
    return s;
  }

  // The pack cards in index.html are the app's master register (search,
  // favorites, folders and Topics all read them), so the library is the right
  // place to ask what packs exist — imported packs appear here automatically.
  function libraryPacks() {
    return Array.from(document.querySelectorAll('#libTabPacks .collection-card'))
      .map(c => ({ key: c.dataset.key, label: c.dataset.label }))
      .filter(p => p.key && p.label);
  }
  const topicsFor = key =>
    (typeof TOPICS !== 'undefined' ? TOPICS : []).filter(t => (t.packs || []).indexOf(key) > -1);
  const isLocked = key => !!(window.accessLevel && !window.accessLevel.canAccess(key));

  // Minutes per topic. Falls back to the onboarding picks so a new user still
  // gets something better than a static list on day one.
  function topicWeights() {
    const s = state();
    const w = {};
    let any = false;
    Object.keys(s.minutes).forEach(k => {
      topicsFor(k).forEach(t => { w[t.id] = (w[t.id] || 0) + s.minutes[k]; any = true; });
    });
    if (any) return { weights: w, seeded: false };
    try {
      (JSON.parse(localStorage.getItem('ds_reco_packs') || '[]') || []).forEach(p => {
        if (p && p.key) topicsFor(p.key).forEach(t => { w[t.id] = (w[t.id] || 0) + 1; });
      });
    } catch {}
    return { weights: w, seeded: true };
  }

  const topicTitle = id => {
    const t = (typeof TOPICS !== 'undefined' ? TOPICS : []).find(x => x.id === id);
    return t ? t.title : '';
  };

  // Everything the user has not trained, is not currently in, and has not
  // waved away in the last dismissDays.
  function candidates(excludeKey) {
    const s = state();
    const last = (function () {
      try { return (JSON.parse(localStorage.getItem('dash_last_pack') || 'null') || {}).key; } catch { return null; }
    })();
    return libraryPacks().filter(p =>
      !s.minutes[p.key] &&
      p.key !== excludeKey &&
      p.key !== last &&
      !(s.dismissed[p.key] && daysSince(s.dismissed[p.key]) < R.dismissDays)
    );
  }

  // Score a pack by how much time the user has spent in its topics, and say
  // which topic earned it the score — that sentence is the whole point of the
  // suggestion, since a recommendation without a reason reads as an advert.
  function scored(excludeKey) {
    const { weights, seeded } = topicWeights();
    return candidates(excludeKey).map(p => {
      let best = null, score = 0;
      topicsFor(p.key).forEach(t => {
        const v = weights[t.id] || 0;
        score += v;
        if (v > 0 && (!best || v > (weights[best] || 0))) best = t.id;
      });
      return {
        key: p.key, label: p.label, score, locked: isLocked(p.key),
        kind:   score > 0 ? 'similar' : 'different',
        reason: score > 0
          ? (seeded ? 'From your onboarding picks' : 'Close to ' + topicTitle(best))
          : 'A new area to try',
      };
    }).sort((a, b) => b.score - a.score);
  }

  // The dashboard row: mostly what they already like, with one deliberate
  // step sideways so the library does not shrink to three packs.
  function forDashboard() {
    const all       = scored(null);
    const similar   = all.filter(p => p.kind === 'similar');
    const different = all.filter(p => p.kind === 'different');
    const wanted    = similar.slice(0, R.rowSize - 1).concat(different.slice(0, 1));
    const pool      = wanted.concat(all.filter(p => wanted.indexOf(p) === -1));

    // At most one locked pack, and never as the first card — the row should
    // read as a suggestion, not as a shop window. v1.26.67: this is applied
    // across the WHOLE candidate list, not just the three picked first. After
    // the library import almost every pack is Pro, so filtering a pre-picked
    // row left a freemium user looking at a row of padlocks.
    const firstFree = pool.find(p => !p.locked);
    const row       = firstFree ? [firstFree] : [];
    let lockedUsed  = 0;
    pool.forEach(p => {
      if (p === firstFree || row.length >= R.rowSize) return;
      if (p.locked) {
        if (lockedUsed >= R.maxLocked) return;
        lockedUsed += 1;
      }
      row.push(p);
    });
    // Only if literally nothing unlocked is left: one locked suggestion still
    // beats an empty row.
    if (!row.length && pool.length) row.push(pool[0]);

    return row.map(p => Object.assign({}, p, { reason: p.reason + (p.locked ? ' \u00b7 Pro' : '') }));
  }

  // ─ The screen ───────────────────────────────────────────────
  const overlay = document.getElementById('recoOverlay');
  let current = null;

  function busy() {
    if (!localStorage.getItem('ds_onboarding_done')) return true;
    const intro = document.getElementById('packIntroScreen');
    if (intro && intro.style.display !== 'none') return true;
    return !!document.querySelector('.settings-overlay.open');
  }

  function render(pick) {
    current = pick;
    const reason = document.getElementById('recoReason');
    const pack   = document.getElementById('recoPack');
    if (reason) reason.textContent = pick.kind === 'different'
      ? 'Something a bit different from what you have been training.'
      : pick.reason.replace(/^Close to /, 'Because you have been training ') + '.';
    if (pack) pack.innerHTML = '<div class="reco-pack-name">' + pick.label + '</div>'
      + (pick.locked ? '<div class="reco-pack-tag">Pro</div>' : '');
  }

  // Alternates between the two kinds, so a run of suggestions does not narrow
  // the user into one corner of the library.
  function suggest(afterKey) {
    if (!overlay || busy()) return false;
    const s    = state();
    const all  = scored(afterKey);
    if (!all.length) return false;
    const wantDifferent = (s.shown % 2) === 1;
    const pool = all.filter(p => (p.kind === 'different') === wantDifferent);
    const pick = (pool.length ? pool : all)[0];
    s.shown += 1;
    s.lastSuggest = Date.now();
    save(s);
    dsMarkPrompt();
    render(pick);
    overlay.classList.add('open');
    return true;
  }

  function maybeSuggest(afterKey, minutes) {
    if (minutes < R.minSessionMinutes) return false;
    const s = state();
    if (s.lastSuggest && daysSince(s.lastSuggest) < R.everyDays) return false;
    if (dsPromptRecently()) return false;
    return suggest(afterKey);
  }

  // Developer preview: opens the screen without spending the interval.
  function preview() {
    const all = scored(null);
    if (!all.length) { if (window.showToast) showToast('Nothing left to suggest.'); return false; }
    render(all[0]);
    overlay.classList.add('open');
    return true;
  }

  const closeIt = () => overlay && overlay.classList.remove('open');
  if (overlay) {
    const openBtn  = document.getElementById('recoOpen');
    const laterBtn = document.getElementById('recoLater');
    const neverBtn = document.getElementById('recoNever');
    if (openBtn)  openBtn.addEventListener('click', () => {
      const p = current; closeIt();
      // Same reason as the Pro screen's "See plans": the settings panel would
      // otherwise stay on top of the pack you just opened.
      const s = document.getElementById('homeSettingsScreen');
      if (s && s.style.display !== 'none' && typeof navFromSettings === 'function') navFromSettings();
      if (p && window.showModeScreen) showModeScreen(p.key, p.label);
    });
    if (laterBtn) laterBtn.addEventListener('click', closeIt);
    if (neverBtn) neverBtn.addEventListener('click', () => {
      if (current) { const s = state(); s.dismissed[current.key] = Date.now(); save(s); }
      closeIt();
      if (window._personalizeRecommended) window._personalizeRecommended();
    });
    overlay.addEventListener('click', e => { if (e.target === overlay) closeIt(); });
  }

  // ─ Learning ───────────────────────────────────────────────
  let openedKey = null, openedAt = 0;
  const origShowMode = window.showModeScreen;
  if (typeof origShowMode === 'function') {
    window.showModeScreen = function (key) {
      if (!isLocked(key)) { openedKey = key; openedAt = Date.now(); }
      return origShowMode.apply(this, arguments);
    };
  }
  const origCloseTraining = window.closeTraining;
  if (typeof origCloseTraining === 'function') {
    window.closeTraining = function () {
      const key     = openedKey;
      const minutes = openedAt ? (Date.now() - openedAt) / 60000 : 0;
      openedKey = null; openedAt = 0;
      const out = origCloseTraining.apply(this, arguments);
      if (key && minutes > 0.5) {
        const s = state();
        s.minutes[key] = (s.minutes[key] || 0) + minutes;
        save(s);
        if (window._personalizeRecommended) window._personalizeRecommended();
        setTimeout(() => maybeSuggest(key, minutes), 1200);
      }
      return out;
    };
  }

  window._reco = { state, forDashboard, suggest, maybeSuggest, preview, close: closeIt, rules: R };
})();

// ─── DEVELOPER PREVIEWS (v1.26.66) ────────────────────────────────
// Screens that normally take days of real use to appear. Every preview opens
// the screen WITHOUT touching its timers, so looking at one does not change
// when the real one turns up.
(function initDevPreviews() {
  const on = (id, fn) => { const el = document.getElementById(id); if (el) el.addEventListener('click', fn); };

  on('devShowProNudge', () => { if (window._proNudge) window._proNudge.preview(); });
  on('devShowRating',   () => { if (window._rating) window._rating.open('ask'); });
  on('devShowFeedback', () => { if (window._rating) window._rating.open('form'); });
  on('devShowWhatsNew', () => {
    // v1.26.97 — the developer list: user entries plus the dev-only ones.
    if (window._whatsNew) window._whatsNew.open('dev');
    else { const o = document.getElementById('whatsNewOverlay'); if (o) o.classList.add('open'); }
  });
  on('devShowPackIntro', () => {
    let k = window.activeCollectionKey;
    if (!k) { try { k = (JSON.parse(localStorage.getItem('dash_last_pack') || 'null') || {}).key; } catch {} }
    if (k && window.replayPackIntro) window.replayPackIntro(k);
    else if (window.showToast) showToast('Open a pack once first.');
  });
  on('devShowReco',     () => { if (window._reco) window._reco.preview(); });
  on('devResetPrompts', () => {
    ['ds_pro_nudge', 'ds_rating', 'ds_last_prompt', 'ds_reco'].forEach(k => localStorage.removeItem(k));
    if (window.showToast) showToast('Prompt timers cleared \u2014 both screens can appear again.');
  });
})();

// ─── DEVELOPER SETTINGS UNLOCK (v1.26.35) ──────────────────────────────
// The gear menu is the USER settings screen. Developer rows live in
// #devSection, hidden until the version number is tapped 7 times (the classic
// Android build-number gesture). Persisted in ds_dev_unlocked; the "Hide
// developer settings" row inside the section reverses it.
(function initDevUnlock() {
  const KEY = 'ds_dev_unlocked';
  const sec = document.getElementById('devSection');
  const ver = document.getElementById('homeSettingsVersion');
  if (!sec || !ver) return;
  const apply = on => { sec.style.display = on ? '' : 'none'; };
  apply(localStorage.getItem(KEY) === 'true');
  let taps = 0, timer = null;
  const onTap = () => {
    if (localStorage.getItem(KEY) === 'true') return;
    taps++;
    clearTimeout(timer);
    timer = setTimeout(() => { taps = 0; }, 1500);
    if (taps >= 7) {
      localStorage.setItem(KEY, 'true');
      apply(true);
      taps = 0;
      if (window.showToast) showToast('Developer settings unlocked.');
    } else if (taps >= 4 && window.showToast) {
      showToast((7 - taps) + ' taps from developer settings\u2026');
    }
  };
  ver.addEventListener('click', onTap);
  const hideBtn = document.getElementById('hideDevBtn');
  if (hideBtn) hideBtn.addEventListener('click', () => {
    localStorage.removeItem(KEY);
    apply(false);
    if (window.showToast) showToast('Developer settings hidden.');
  });
})();

// Replay onboarding immediately: clear the flag and restart the app so the
// full first-run experience (splash -> onboarding) runs again.
const replayOnboardingBtn = document.getElementById('replayOnboardingBtn');
if (replayOnboardingBtn) replayOnboardingBtn.addEventListener('click', () => {
  localStorage.removeItem('ds_onboarding_done');
  localStorage.removeItem('ds_onboarding');
  localStorage.removeItem('ds_reco_packs');
  location.reload();
});

// ─── DATA BACKUP: EXPORT / IMPORT (v1.26.34) ─────────────────────────────
// Everything the app knows lives in localStorage (progress, favorites,
// redeemed codes, settings, editor packs). Export shows it all as copyable
// JSON; import overwrites from pasted JSON and reloads. Modal + clipboard is
// used instead of file download, which installed iOS web apps don't support.
(function initDataBackup() {
  function buildModal(id, title, buttonLabel, readonly) {
    let ov = document.getElementById(id);
    if (ov) return ov;
    ov = document.createElement('div');
    ov.id = id;
    ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.45);z-index:10000;display:none;align-items:center;justify-content:center;padding:20px;';
    ov.innerHTML =
      '<div style="background:var(--ds-card,#fff);border-radius:16px;max-width:520px;width:100%;max-height:80vh;display:flex;flex-direction:column;padding:16px;box-shadow:0 8px 32px rgba(0,0,0,0.25);">' +
        '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">' +
          '<strong style="font-size:15px;">' + title + '</strong>' +
          '<button data-close style="border:none;background:none;font-size:18px;cursor:pointer;padding:4px 8px;">\u2715</button>' +
        '</div>' +
        '<textarea data-ta ' + (readonly ? 'readonly ' : '') + 'spellcheck="false" placeholder="' + (readonly ? '' : 'Paste your exported Deckstack data here...') + '" style="flex:1;min-height:220px;font-family:ui-monospace,Menlo,monospace;font-size:12px;border:1px solid var(--ds-border,#ddd);border-radius:10px;padding:10px;resize:none;-webkit-user-select:text;user-select:text;"></textarea>' +
        '<button data-action style="margin-top:12px;font-size:14px;font-weight:600;color:#fff;background:#2c7a4b;border:none;border-radius:10px;padding:10px;cursor:pointer;">' + buttonLabel + '</button>' +
      '</div>';
    document.body.appendChild(ov);
    ov.addEventListener('click', e => { if (e.target === ov) ov.style.display = 'none'; });
    ov.querySelector('[data-close]').addEventListener('click', () => { ov.style.display = 'none'; });
    return ov;
  }

  const exportBtn = document.getElementById('exportDataBtn');
  if (exportBtn) exportBtn.addEventListener('click', () => {
    const ov = buildModal('dataExportOverlay', 'Your Deckstack data', 'Copy to clipboard', true);
    const dump = { _deckstack: true, version: typeof VERSION !== 'undefined' ? VERSION : '', exportedAt: new Date().toISOString(), data: {} };
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      dump.data[k] = localStorage.getItem(k);
    }
    const ta = ov.querySelector('[data-ta]');
    ta.value = JSON.stringify(dump, null, 2);
    const copyBtn = ov.querySelector('[data-action]');
    copyBtn.onclick = () => {
      const done = () => { if (window.showToast) showToast('Copied - save it somewhere safe.'); };
      const fallback = () => {
        ta.focus(); ta.select();
        try { document.execCommand('copy'); done(); }
        catch (e) { if (window.showToast) showToast('Copy failed - select the text manually.'); }
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(ta.value).then(done).catch(fallback);
      } else fallback();
    };
    ov.style.display = 'flex';
  });

  const importBtn = document.getElementById('importDataBtn');
  if (importBtn) importBtn.addEventListener('click', () => {
    const ov = buildModal('dataImportOverlay', 'Restore Deckstack data', 'Restore & reload', false);
    const ta = ov.querySelector('[data-ta]');
    ta.value = '';
    const applyBtn = ov.querySelector('[data-action]');
    applyBtn.onclick = () => {
      let dump;
      try { dump = JSON.parse(ta.value); } catch (e) {
        if (window.showToast) showToast('Not valid JSON - paste the whole export.');
        return;
      }
      if (!dump || dump._deckstack !== true || typeof dump.data !== 'object') {
        if (window.showToast) showToast('This does not look like a Deckstack export.');
        return;
      }
      if (!confirm('Restore this backup? Current data in the app will be overwritten.')) return;
      Object.keys(dump.data).forEach(k => {
        try { localStorage.setItem(k, dump.data[k]); } catch (e) {}
      });
      location.reload();
    };
    ov.style.display = 'flex';
  });
})();

// Export pack tags as JSON. Shown in a copyable modal rather than as a
// blob download — installed iOS/iPadOS web apps can't download files, which
// is why the previous <a download> approach silently did nothing there.
const exportTagsBtn = document.getElementById('exportTagsBtn');
if (exportTagsBtn) exportTagsBtn.addEventListener('click', () => {
  try {
    // Union of base packTags keys and any user-edited keys (ds_tag_edits
    // can hold keys that don't exist in tagsData.js, e.g. 'prog:...').
    const keys = new Set(typeof packTags !== 'undefined' ? Object.keys(packTags) : []);
    try {
      const edits = JSON.parse(localStorage.getItem('ds_tag_edits')) || {};
      Object.keys(edits).forEach(k => keys.add(k));
    } catch (e2) {}
    const result = {};
    [...keys].sort().forEach(key => {
      result[key] = window.getTagsForKey
        ? window.getTagsForKey(key)
        : ((typeof packTags !== 'undefined' && packTags[key]) || []);
    });
    const json = JSON.stringify(result, null, 2);

    // Build (or reuse) the export modal
    let ov = document.getElementById('tagExportOverlay');
    if (!ov) {
      ov = document.createElement('div');
      ov.id = 'tagExportOverlay';
      ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.45);z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px;';
      ov.innerHTML =
        '<div style="background:var(--ds-card,#fff);border-radius:16px;max-width:520px;width:100%;max-height:80vh;display:flex;flex-direction:column;padding:16px;box-shadow:0 8px 32px rgba(0,0,0,0.25);">' +
          '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">' +
            '<strong style="font-size:15px;">Pack tags — JSON</strong>' +
            '<button id="tagExportClose" style="border:none;background:none;font-size:18px;cursor:pointer;padding:4px 8px;">\u2715</button>' +
          '</div>' +
          '<textarea id="tagExportText" readonly spellcheck="false" style="flex:1;min-height:220px;font-family:ui-monospace,Menlo,monospace;font-size:12px;border:1px solid var(--ds-border,#ddd);border-radius:10px;padding:10px;resize:none;-webkit-user-select:text;user-select:text;"></textarea>' +
          '<button id="tagExportCopy" style="margin-top:12px;font-size:14px;font-weight:600;color:#fff;background:#2c7a4b;border:none;border-radius:10px;padding:10px;cursor:pointer;">Copy to clipboard</button>' +
        '</div>';
      document.body.appendChild(ov);
      ov.addEventListener('click', e => { if (e.target === ov) ov.style.display = 'none'; });
      ov.querySelector('#tagExportClose').addEventListener('click', () => { ov.style.display = 'none'; });
      ov.querySelector('#tagExportCopy').addEventListener('click', () => {
        const ta = ov.querySelector('#tagExportText');
        const done = () => { if (window.showToast) showToast('Copied to clipboard.'); };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(ta.value).then(done).catch(() => {
            ta.focus(); ta.select();
            try { document.execCommand('copy'); done(); }
            catch (e3) { if (window.showToast) showToast('Copy failed — select the text manually.'); }
          });
        } else {
          ta.focus(); ta.select();
          try { document.execCommand('copy'); done(); }
          catch (e3) { if (window.showToast) showToast('Copy failed — select the text manually.'); }
        }
      });
    }
    ov.querySelector('#tagExportText').value = json;
    ov.style.display = 'flex';
  } catch (e) {
    if (window.showToast) showToast('Export failed: ' + e.message);
  }
});

const clearExtendedBtn = document.getElementById('clearExtendedBtn');
if (clearExtendedBtn) clearExtendedBtn.addEventListener('click', () => {
  // Rensa purchases
  localStorage.removeItem('ds_extended_owned');
  if (window.accessLevel && window.accessLevel.applyAccessLevel) window.accessLevel.applyAccessLevel();
  // Rensa bundle states explicit per känd pack
  const knownPacks = Object.keys(BUNDLE_DEFS);
  knownPacks.forEach(packKey => {
    const k = `bundles:${packKey}`;
    try {
      const cur = JSON.parse(localStorage.getItem(k)) || [];
      const filtered = cur.filter(id => id !== 'domestic' && id !== 'pro:off');
      if (filtered.length) localStorage.setItem(k, JSON.stringify(filtered));
      else localStorage.removeItem(k);
    } catch(e) { localStorage.removeItem(`bundles:${packKey}`); }
  });
  // Visuell feedback — grön "Cleared ✓" i 2.5 sek
  clearExtendedBtn.textContent = 'Cleared ✓';
  clearExtendedBtn.style.cssText = 'font-size:13px;color:#1a7a3a;background:#eafaf1;border:1px solid #a8d5ba;border-radius:8px;padding:6px 12px;cursor:pointer;';
  setTimeout(() => {
    clearExtendedBtn.textContent = 'Clear';
    clearExtendedBtn.style.cssText = 'font-size:13px;color:#c0392b;background:#fdf0ee;border:1px solid #f5c6c2;border-radius:8px;padding:6px 12px;cursor:pointer;';
  }, 2500);
  if (window._applyAccessLevel) window._applyAccessLevel();
  if (window.renderExtendedStore) window.renderExtendedStore();
  if (window.renderProgramList) window.renderProgramList();
});

// ── TAG MODE ──────────────────────────────────────────────────────────────────

(function initTagMode() {
  const TAG_EDITS_KEY = 'ds_tag_edits'; // {packKey: [tags], 'prog:programId': [tags]}

  let tagMode = localStorage.getItem('tagMode') === 'true';

  function getTagEdits() {
    try { return JSON.parse(localStorage.getItem(TAG_EDITS_KEY)) || {}; }
    catch { return {}; }
  }
  function saveTagEdits(edits) {
    localStorage.setItem(TAG_EDITS_KEY, JSON.stringify(edits));
  }

  // Get current tags for a key (pack key or 'prog:id')
  // Merges tagsData.js base tags with any edits
  window.getTagsForKey = function(key) {
    const edits = getTagEdits();
    if (edits[key] !== undefined) return [...edits[key]];
    // Fall back to packTags base data
    if (typeof packTags !== 'undefined' && packTags[key]) return [...packTags[key]];
    return [];
  };

  // Set tags for a key and mark as edited
  window.setTagsForKey = function(key, tags) {
    const edits = getTagEdits();
    edits[key] = tags;
    saveTagEdits(edits);
  };

  // Apply tag mode state
  function applyTagMode() {
    document.body.classList.toggle('tag-mode', tagMode);
    const toggle = document.getElementById('tagModeToggle');
    if (toggle) toggle.checked = tagMode;
    const exportRow = document.getElementById('tagExportRow');
    if (exportRow) exportRow.style.display = tagMode ? '' : 'none';
    // Show/hide tag section in pack settings
    const tagSection = document.getElementById('packSettingsTagSection');
    if (tagSection) tagSection.style.display = tagMode ? '' : 'none';
  }

  // Toggle listener
  const tagModeToggle = document.getElementById('tagModeToggle');
  if (tagModeToggle) {
    tagModeToggle.addEventListener('change', () => {
      tagMode = tagModeToggle.checked;
      localStorage.setItem('tagMode', tagMode);
      applyTagMode();
      if (window.updateModeGearVisibility) window.updateModeGearVisibility();
    });
  }

  // Export tag changes
  const tagExportBtn = document.getElementById('tagExportBtn');
  if (tagExportBtn) {
    tagExportBtn.addEventListener('click', () => {
      const edits = getTagEdits();
      if (!Object.keys(edits).length) {
        alert('No tag changes to export yet.');
        return;
      }
      const out = {
        meta: { exportedAt: new Date().toISOString(), version: typeof VERSION !== 'undefined' ? VERSION : '' },
        tagEdits: edits,
      };
      _dsExport(JSON.stringify(out, null, 2),
                'deckstack-tag-edits-' + Date.now() + '.json',
                'application/json',
                'Tag edits — JSON');
    });
  }

  // ── Pack tag UI in packSettingsOverlay ───────────────────────────────────────

  window.renderPackTagSection = function(packKey) {
    const section = document.getElementById('packSettingsTagSection');
    if (!section) return;
    section.style.display = tagMode ? '' : 'none';
    if (!tagMode) return;

    const listEl  = document.getElementById('packTagsList');
    const input   = document.getElementById('packTagInput');
    const addBtn  = document.getElementById('packTagAddBtn');

    function renderTags() {
      const tags = window.getTagsForKey(packKey);
      listEl.innerHTML = tags.length
        ? tags.map((t, i) => `<span class="tag-chip">${t}<button class="tag-chip-del" data-i="${i}">×</button></span>`).join('')
        : '<span class="tag-empty">No tags yet</span>';
      listEl.querySelectorAll('.tag-chip-del').forEach(btn => {
        btn.addEventListener('click', () => {
          const cur = window.getTagsForKey(packKey);
          cur.splice(parseInt(btn.dataset.i), 1);
          window.setTagsForKey(packKey, cur);
          renderTags();
        });
      });
    }

    renderTags();
    input.value = '';

    // Remove old listeners by cloning
    const newAdd = addBtn.cloneNode(true);
    addBtn.parentNode.replaceChild(newAdd, addBtn);
    newAdd.addEventListener('click', () => {
      const val = document.getElementById('packTagInput').value.trim().toLowerCase();
      if (!val) return;
      const cur = window.getTagsForKey(packKey);
      if (!cur.includes(val)) { cur.push(val); window.setTagsForKey(packKey, cur); }
      document.getElementById('packTagInput').value = '';
      renderTags();
    });
    document.getElementById('packTagInput').addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); document.getElementById('packTagAddBtn').click(); }
    });
  };

  // ── Program Settings overlay ─────────────────────────────────────────────────

  const progSettingsOverlay = document.getElementById('programSettingsOverlay');
  const progSettingsClose   = document.getElementById('programSettingsClose');
  if (progSettingsClose) {
    progSettingsClose.addEventListener('click', () => {
      if (window._scopeNoteSaveAll) _scopeNoteSaveAll();
      if (progSettingsOverlay) progSettingsOverlay.style.display = 'none';
    });
  }
  // Uppgift 9 — close on backdrop click
  if (progSettingsOverlay) {
    progSettingsOverlay.addEventListener('click', e => {
      if (e.target === progSettingsOverlay) {
        if (window._scopeNoteSaveAll) _scopeNoteSaveAll();
        progSettingsOverlay.style.display = 'none';
      }
    });
  }

  // v1.27.18 — noteOnly is the three-taps-on-a-blank-space path. Same overlay,
  // same note; everything a feedback mode owns is hidden.
  window.openProgramSettings = function(programId, programTitle, noteOnly) {
    if (!progSettingsOverlay) return;
    const titleEl = document.getElementById('programSettingsTitle');
    if (titleEl) titleEl.textContent = (programTitle || 'Program') + (noteOnly ? ' — Note' : ' Settings');

    // The programme rating, alongside the note. It follows feedback mode the
    // way the pack rating does; the note does not.
    const fbSection = document.getElementById('programSettingsFbSection');
    if (fbSection) fbSection.style.display = (!noteOnly && feedbackMode) ? '' : 'none';
    if (!noteOnly && feedbackMode) {
      const fbKeyProg = window.progFbKey ? progFbKey(programId) : ('fb_prog_' + programId);
      const fbBar = document.getElementById('fb-prog-bar');
      if (fbBar) fbBar.dataset.fbKey = fbKeyProg;
      if (fbBar && typeof fbRender === 'function') fbRender('fb-prog-bar', fbKeyProg);
    }

    // v1.27.19 — a programme can be suggested for a tier too. Same reasoning
    // as the pack bar beside it: the question "should this be free or pro"
    // comes up while reviewing, and had nowhere to go for programmes.
    const alSection = document.getElementById('programSettingsAlSection');
    if (alSection) alSection.style.display = (!noteOnly && alSuggestMode) ? '' : 'none';
    if (!noteOnly && alSuggestMode) {
      const alKeyProg = 'al_prog_' + programId;
      const alBar = document.getElementById('al-prog-bar');
      if (alBar) alBar.dataset.alKey = alKeyProg;
      if (typeof alRender === 'function') alRender('al-prog-bar', alKeyProg);
    }

    const noteSection = document.getElementById('programSettingsNoteSection');
    if (noteSection) noteSection.style.display = '';
    if (window._scopeNoteBind) {
      _scopeNoteBind('progNoteArea', window.progNoteKey ? progNoteKey(programId) : ('note_prog_' + programId));
    }

    const listEl  = document.getElementById('programTagsList');
    const input   = document.getElementById('programTagInput');
    const addBtn  = document.getElementById('programTagAddBtn');
    const tagKey  = 'prog:' + programId;

    // Only show tag section if tag mode is on — and never on the note-only path
    const tagSection = document.getElementById('programSettingsTagSection');
    if (tagSection) tagSection.style.display = (tagMode && !noteOnly) ? '' : 'none';

    if (tagMode && !noteOnly && listEl) {
      function renderProgTags() {
        const tags = window.getTagsForKey(tagKey);
        listEl.innerHTML = tags.length
          ? tags.map((t, i) => `<span class="tag-chip">${t}<button class="tag-chip-del" data-i="${i}">×</button></span>`).join('')
          : '<span class="tag-empty">No tags yet</span>';
        listEl.querySelectorAll('.tag-chip-del').forEach(btn => {
          btn.addEventListener('click', () => {
            const cur = window.getTagsForKey(tagKey);
            cur.splice(parseInt(btn.dataset.i), 1);
            window.setTagsForKey(tagKey, cur);
            renderProgTags();
          });
        });
      }
      renderProgTags();
      if (input) input.value = '';

      const newAdd = addBtn.cloneNode(true);
      addBtn.parentNode.replaceChild(newAdd, addBtn);
      newAdd.addEventListener('click', () => {
        const val = document.getElementById('programTagInput').value.trim().toLowerCase();
        if (!val) return;
        const cur = window.getTagsForKey(tagKey);
        if (!cur.includes(val)) { cur.push(val); window.setTagsForKey(tagKey, cur); }
        document.getElementById('programTagInput').value = '';
        renderProgTags();
      });
      document.getElementById('programTagInput').addEventListener('keydown', e => {
        if (e.key === 'Enter') { e.preventDefault(); document.getElementById('programTagAddBtn').click(); }
      });
    }

    progSettingsOverlay.style.display = 'flex';
    if (noteOnly) setTimeout(() => { const a = document.getElementById('progNoteArea'); if (a) a.focus(); }, 60);
  };

  // Init
  tagMode = localStorage.getItem('tagMode') === 'true';
  applyTagMode();
})();

// ─── ONBOARDING (v1.26.33) ────────────────────────────────────────────────
// First-run intro shown once, revealed as the splash fades. Steps: welcome,
// three quick questions (habit / interests / training style) and a short
// how-it-works. Answers are stored in ds_onboarding for future
// personalisation; ds_onboarding_done gates the whole flow.
(function initOnboarding() {
  const DONE_KEY = 'ds_onboarding_done';
  const DATA_KEY = 'ds_onboarding';
  const screen = document.getElementById('onboardingScreen');
  if (!screen) return;
  if (localStorage.getItem(DONE_KEY)) return;   // already seen

  const steps   = Array.from(screen.querySelectorAll('.ob-step'));
  const dotsEl  = document.getElementById('obDots');
  const nextBtn = document.getElementById('obNextBtn');
  const skipBtn = document.getElementById('obSkipBtn');
  let step = 0;
  const answers = {};

  // Build progress dots
  dotsEl.innerHTML = steps.map((_, i) =>
    '<span class="ob-dot' + (i === 0 ? ' ob-dot--active' : '') + '"></span>').join('');
  const dots = Array.from(dotsEl.children);

  // A step is "answerable" if it contains an .ob-options block. Single-select
  // steps require a pick before Continue; multi-select can be skipped (0 picks
  // is a valid answer).
  function stepOptions(i) { return steps[i].querySelector('.ob-options'); }
  function requiresPick(i) {
    const opts = stepOptions(i);
    return opts && opts.dataset.type === 'single';
  }
  function hasPick(i) {
    const opts = stepOptions(i);
    return opts && !!opts.querySelector('.ob-option--selected');
  }

  function updateNext() {
    nextBtn.disabled = requiresPick(step) && !hasPick(step);
    nextBtn.textContent = (step === steps.length - 1) ? 'Start training' : 'Continue';
  }

  function showStep(i) {
    steps.forEach((s, j) => { s.style.display = j === i ? 'flex' : 'none'; });
    dots.forEach((d, j) => d.classList.toggle('ob-dot--active', j === i));
    step = i;
    updateNext();
  }

  // Option selection (event delegation per options block)
  screen.querySelectorAll('.ob-options').forEach(opts => {
    const multi = opts.dataset.type === 'multi';
    opts.addEventListener('click', e => {
      const btn = e.target.closest('.ob-option');
      if (!btn) return;
      if (multi) {
        // Keep PICK order (not DOM order) — the first thing the user taps
        // is treated as their top priority for favorites/recommendations.
        const key = opts.dataset.key;
        answers[key] = answers[key] || [];
        if (btn.classList.toggle('ob-option--selected')) {
          answers[key].push(btn.dataset.val);
        } else {
          answers[key] = answers[key].filter(v => v !== btn.dataset.val);
        }
      } else {
        opts.querySelectorAll('.ob-option').forEach(b => b.classList.remove('ob-option--selected'));
        btn.classList.add('ob-option--selected');
        answers[opts.dataset.key] = btn.dataset.val;
        // Habit step: reveal the reassurance line once a choice is made
        const reassure = opts.parentNode.querySelector('.ob-reassure');
        if (reassure) reassure.style.visibility = 'visible';
      }
      updateNext();
    });
  });

  // Interest chip -> pack keys. Order inside each entry = priority.
  // v1.26.76 — rewritten for the imported library. Every entry here used to
  // point at a pre-handbook pack, and those are all at minLevel 'complete'
  // now, so a new user's answers produced recommendations for packs they
  // could not even see. Where a free pack fits an interest it is listed
  // FIRST, so the first suggestion is something they can open today.
  // Keep in sync with the chips in index.html step 3.
  const OB_PACK_MAP = {
    starting:     ['firststrategies', 'startingconversations1', 'setupstatement'],
    conversation: ['exploringatopic', 'changingtopics', 'reactingtounexpectedstatements'],
    listening:    ['showunderstanding', 'validation', 'supportingconversations'],
    depth:        ['deepquestions', 'talkingaboutyourself', 'supportingconversations'],
    boundaries:   ['sayingno', 'makingrequests', 'brokenrecord'],
    // v1.27.60 \u2014 `assertive` (The Assertive Four) satt har och ligger pa
    // minLevel 'complete': en ny freemium-anvandare fick alltsa ett pack
    // rekommenderat som hen inte kan oppna. `assertivecomm1` ar freemium och
    // lar ut samma fyra drag.
    assertive:    ['assertivecomm1', 'brokenrecord', 'receivingfeedbackandcriticism'],
    humour:       ['humour', 'teasing', 'selfhumour', 'humourpractise'],
    conflict:     ['conflictemotions', 'respondingtopassiveaggression', 'emotionlabellingandregulation'],
    feedback:     ['givingcriticism', 'receivingfeedbackandcriticism', 'praiseandencouragement'],
    repair:       ['apologizing1'],
    persuasion:   ['persuasionandinfluence1', 'disagreeing', 'negotiationandcompromise'],
    storytelling: ['storiesinconversation', 'explainthings', 'storytellingwiththesixws', 'describethings'],
  };

  // Turn the picked interests into an ordered list of {key, label} packs
  // (labels resolved from the library DOM so they always match the data),
  // then: store them for the Recommended list + Start-here card, and seed
  // favorites if the user has none yet.
  function personalize() {
    const interests = answers.interests || [];
    if (!interests.length) return;
    const labelOf = {};
    document.querySelectorAll('#libTabPacks .collection-card').forEach(c => {
      if (c.dataset.key) labelOf[c.dataset.key] = c.dataset.label;
    });
    const packs = [];
    interests.forEach(val => (OB_PACK_MAP[val] || []).forEach(key => {
      if (labelOf[key] && !packs.some(p => p.key === key)) {
        packs.push({ key, label: labelOf[key] });
      }
    }));
    if (!packs.length) return;
    try { localStorage.setItem('ds_reco_packs', JSON.stringify(packs)); } catch (e) {}
    // Seed favorites (max 4) only if the user has none
    try {
      const fav = JSON.parse(localStorage.getItem('fav_packs') || '[]');
      if (!fav.length) {
        localStorage.setItem('fav_packs', JSON.stringify(packs.slice(0, 4)));
        if (window._favRenderTab)  window._favRenderTab();
        if (window._favRenderDash) window._favRenderDash();
      }
    } catch (e) {}
    if (window._personalizeRecommended) window._personalizeRecommended();
    if (window.renderContinueCard) window.renderContinueCard();
  }

  function finish(skipped) {
    answers.skipped = !!skipped;
    answers.completedAt = new Date().toISOString();
    try { localStorage.setItem(DATA_KEY, JSON.stringify(answers)); } catch (e) {}
    localStorage.setItem(DONE_KEY, 'true');
    if (!skipped) personalize();
    screen.classList.add('ob-leaving');
    setTimeout(() => { screen.style.display = 'none'; }, 450);
  }

  nextBtn.addEventListener('click', () => {
    if (nextBtn.disabled) return;
    if (step < steps.length - 1) showStep(step + 1);
    else finish(false);
  });
  skipBtn.addEventListener('click', () => finish(true));

  // Reveal under the splash: the splash (z 9999) fades out on its own
  // schedule; the onboarding simply sits beneath it from the start.
  screen.style.display = 'flex';
  showStep(0);
})();

// ─── PACK INTROS (v1.26.44) ────────────────────────────────────────────
// Informational per-pack intro in the onboarding style (Continue at the
// bottom, Skip top right, progress dots). Shown automatically the first
// 3 times a pack is opened; after that, tapping the pack NAME on the mode
// screen replays it. Add a new pack intro by adding an entry to PACK_INTROS.
(function initPackIntros() {
  const screen = document.getElementById('packIntroScreen');
  if (!screen) return;

  const SHOW_TIMES = 3;

  // page: { title, html } — html is the body below the title.
  const PACK_INTROS = {
    // First Strategies is the first pack a new user ever opens, so its first
    // page does one extra job the others do not: it says what the app is for.
    // Every other intro goes straight to preparing the training.
    // First Strategies ar det forsta packet en ny anvandare oppnar, och det
    // kommer direkt efter onboarding. v1.27.59 kortade det fran atta sidor
    // till tre: en sida per strategi betydde sex skarmar text innan ett enda
    // kort, ovanpa allt introturen redan visat. Strategierna kommer nu tre och
    // tre, med tva rader var \u2014 nog for att kanna igen ett namn nar det
    // dyker upp pa nasta skarm, och inte mer an sa.
    firststrategies: {
      pages: [
        {
          title: 'First Strategies',
          html:
            '<p class="ob-text">Deckstack is a rehearsal room. You practise things to say ' +
            'here, so they are already yours when a real conversation arrives.</p>' +
            '<p class="ob-text">This pack holds six moves. Together they make one small ' +
            'conversation, from the first remark to a good ending.</p>' +
            '<p class="ob-text ob-text--dim">The next two pages introduce them. You do not ' +
            'have to remember the names &mdash; you will meet them one at a time.</p>'
        },
        {
          title: 'Getting it going',
          html:
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>Opening Statement</strong><br>Say something instead of asking something. A remark hands the other person material; a question hands them a job.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Follow the Thread</strong><br>Take one word out of what they just said and go into it. You never need a new topic.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">3</span><p><strong>Say It Back</strong><br>Show that you understood before you add anything of your own. It is the cheapest way to be easy to talk to.</p></div>' +
            '</div>'
        },
        {
          title: 'Saying what you want',
          html:
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">4</span><p><strong>Ask Plainly</strong><br>Say what you want in one sentence, without building up to it. The ask is shorter than the run-up.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">5</span><p><strong>A Friendly No</strong><br>Decline warmly and clearly at the same time. Warmth is not the same as a maybe.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">6</span><p><strong>Answer With a Hook</strong><br>Leave something in your answer for them to pick up, so the turn comes back to you.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">Six moves, one conversation. Start anywhere.</p>'
        }
      ]
    },

    startingconversations1: {
      pages: [
        {
          title: 'Starting Conversations \u2014 Pt. 1',
          html:
            '<p class="ob-text">The four safest ways to start a conversation with someone ' +
            'you do not know. None of them requires you to be interesting.</p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>Simple Greeting</strong> &mdash; say hello, and nothing more.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Introduce Yourself</strong> &mdash; give them a reason to say their name.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">3</span><p><strong>Comment on the Situation</strong> &mdash; say something about where you both are.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">4</span><p><strong>Ask About the Situation</strong> &mdash; ask something about it instead.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">This is the first of four parts. The later ones ask more of you.</p>'
        },
        {
          title: 'Simple Greeting',
          html:
            '<p class="ob-text">Say hello. That is the whole strategy.</p>' +
            '<p class="ob-text">A greeting asks for nothing and risks nothing, which is ' +
            'exactly why it works. It opens a door without insisting anyone walks through it.</p>' +
            '<p class="ob-text ob-text--dim">Someone sits down beside you<br>&rarr; &ldquo;Morning.&rdquo;</p>'
        },
        {
          title: 'Introduce Yourself',
          html:
            '<p class="ob-text">Say your name and give them a reason to say theirs.</p>' +
            '<p class="ob-text">This is the opener that turns a stranger into someone you ' +
            'have met. Most people are relieved that you went first.</p>' +
            '<p class="ob-text ob-text--dim">Waiting for the same meeting<br>&rarr; &ldquo;I don\u2019t think we\u2019ve met &mdash; I\u2019m&hellip;&rdquo;</p>'
        },
        {
          title: 'Comment on the Situation',
          html:
            '<p class="ob-text">Say something about the thing you are both in. The room, the ' +
            'queue, the weather, the delay.</p>' +
            '<p class="ob-text">It is the safest remark there is, because it is already true ' +
            'for both of you. Nobody has to know anything to answer it.</p>' +
            '<p class="ob-text ob-text--dim">A room that is far too warm<br>&rarr; &ldquo;Whoever booked this room did not think about the sun.&rdquo;</p>'
        },
        {
          title: 'Ask About the Situation',
          html:
            '<p class="ob-text">Ask them something about where you both are &mdash; when it ' +
            'starts, where the room is, whether they have been before.</p>' +
            '<p class="ob-text">A question about the situation is easy to answer, and it ' +
            'gives them the small pleasure of knowing something you do not.</p>' +
            '<p class="ob-text ob-text--dim">First time at a regular event<br>&rarr; &ldquo;Do you know if this usually runs over?&rdquo;</p>'
        },
        {
          // v1.27.43 — added when the pack was rewritten. The four openers were
          // never the hard part; choosing between them is, and the intro said
          // nothing about it. Two questions cover nearly every real moment, and
          // they are what the three collections now drill.
          title: 'Choosing One',
          html:
            '<p class="ob-text">All four work almost anywhere. Two questions decide which, ' +
            'and neither needs thinking about.</p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>How much do they want to be spoken to?</strong> Headphones and a book &mdash; greet or comment. Relaxed and looking around &mdash; ask.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Will you see them again?</strong> If so, give them your name now. It only gets more awkward later.</p></div>' +
            '</div>' +
            '<p class="ob-text">And when the reply is short: try one more thing, then let it ' +
            'go warmly. One flat answer means nothing. Two means something.</p>' +
            '<p class="ob-text ob-text--dim">Any of the four beats saying nothing. Pick one and start.</p>'
        }
      ]
    },

    showunderstanding: {
      pages: [
        {
          title: 'Show Understanding',
          html:
            '<p class="ob-text">Understanding someone is not enough on its own. They have to ' +
            'be able to tell that you did &mdash; and that is a separate skill.</p>' +
            '<p class="ob-text">Three ways to make it visible &mdash; and you use ' +
            '<strong>one</strong> at a time.</p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>Follow-up Question</strong> &mdash; ask what only a listener could ask.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Say It Back</strong> &mdash; say their point back in your own words.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">3</span><p><strong>Relate Through Sharing</strong> &mdash; offer something of your own.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">The next pages explain each one, and how to choose.</p>'
        },
        {
          title: 'Follow-up Question',
          html:
            '<p class="ob-text">Ask for more &mdash; a question that could only come from ' +
            'someone who was actually listening.</p>' +
            '<p class="ob-text">The proof is in the detail you pick up. A general question ' +
            'could have been asked by anyone; a specific one could not.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;It\u2019s been a lot since the move.&rdquo;<br>&rarr; &ldquo;A lot how &mdash; the flat, or everything at once?&rdquo;</p>'
        },
        {
          title: 'Say It Back',
          html:
            '<p class="ob-text">Say their point back in your own words, so they can hear that ' +
            'it arrived intact &mdash; or correct you before it costs anyone anything.</p>' +
            '<p class="ob-text">Your own words matter. Repeating their sentence sounds like a ' +
            'technique; rewording it proves the meaning got through.</p>' +
            '<p class="ob-text ob-text--dim">A long, tangled story<br>&rarr; &ldquo;So she said yes, then changed her mind on the day.&rdquo;</p>'
        },
        {
          title: 'Relate Through Sharing',
          html:
            '<p class="ob-text">Offer something of your own &mdash; a time you felt the same, ' +
            'kept small enough that the subject stays theirs.</p>' +
            '<p class="ob-text">Done briefly it says: I recognise this, you are not strange. ' +
            'Done at length it quietly takes the conversation away from them.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;I felt completely out of my depth.&rdquo;<br>&rarr; &ldquo;I know that one. My first week I hid in the stairwell.&rdquo;</p>'
        },
        {
          // v1.27.42 — added when the pack was rewritten. Choosing between the
          // three IS the exercise, and the intro had never said so: it
          // introduced three moves and left the reader to work out that they
          // are alternatives rather than a sequence.
          title: 'Choosing One',
          html:
            '<p class="ob-text">Knowing the three moves is the easy half. Reading which one ' +
            'the moment wants is the skill this pack trains.</p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p>Still telling it &mdash; <strong>ask</strong>.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p>Just landed something &mdash; <strong>loop</strong>.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">3</span><p>Finished and settled &mdash; <strong>relate</strong>.</p></div>' +
            '</div>' +
            '<p class="ob-text">For anything difficult: loop first, ask second, relate last. ' +
            'Most people do it backwards.</p>' +
            '<p class="ob-text ob-text--dim">One move, then wait. The pause is part of it.</p>'
        }
      ]
    },

    assertive: {
      pages: [
        {
          title: 'The Assertive Four',
          html:
            '<p class="ob-text">This pack trains you to stand your ground calmly &mdash; ' +
            'without getting defensive, without attacking back, and without giving in.</p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>Fogging</strong> &mdash; calmly agree with the truth in a criticism.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Negative Inquiry</strong> &mdash; ask for more about the criticism.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">3</span><p><strong>Negative Assertion</strong> &mdash; own your mistakes without excuses.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">4</span><p><strong>Broken Record</strong> &mdash; repeat your point, calmly, as needed.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">The next pages explain each strategy.</p>'
        },
        {
          title: 'Fogging',
          html:
            '<p class="ob-text">When someone criticises you, calmly agree with whatever is true in it &mdash; ' +
            'without defending yourself and without agreeing to change.</p>' +
            '<p class="ob-text">Like fog, you give the critic nothing solid to push against. ' +
            'The attack loses its power because you refuse to fight it.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;You\u2019re late again.&rdquo;<br>&rarr; &ldquo;You\u2019re right, I am late.&rdquo;</p>'
        },
        {
          title: 'Negative Inquiry',
          html:
            '<p class="ob-text">Instead of defending yourself, calmly ask for more: what exactly is the problem?</p>' +
            '<p class="ob-text">It shows you are not afraid of the criticism &mdash; and it turns a vague attack ' +
            'into concrete information you can actually use.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;I don\u2019t like your attitude.&rdquo;<br>&rarr; &ldquo;What is it about my attitude that bothers you?&rdquo;</p>'
        },
        {
          title: 'Negative Assertion',
          html:
            '<p class="ob-text">When you really have made a mistake, own it openly &mdash; ' +
            'without excuses, and without beating yourself up.</p>' +
            '<p class="ob-text">A mistake is a fact, not a verdict on who you are. ' +
            'Accepting it calmly leaves the critic nothing more to add.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;You forgot the report.&rdquo;<br>&rarr; &ldquo;Yes, I did &mdash; that was careless of me.&rdquo;</p>'
        },
        {
          title: 'Broken Record',
          html:
            '<p class="ob-text">Repeat your point calmly, in the same even tone, as many times as it takes.</p>' +
            '<p class="ob-text">You don\u2019t need new arguments, and you don\u2019t need to raise your voice. ' +
            'Steady repetition shows that pressure will not move you.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;I understand, but I\u2019m not able to help this weekend.&rdquo;<br>' +
            '&hellip;and again, just as calmly: &ldquo;I understand, but I\u2019m not able to help this weekend.&rdquo;</p>'
        }
      ]
    },

    // v1.27.53 \u2014 Assertive Communication (assertivecomm1), renamed from
    // "Assertive Communication 1 \u2014 Coping with Criticism". A freemium pack with
    // no intro at all: one of the packs a free user can open said nothing about
    // itself. Four strategies, so each gets a page, and the first page does the
    // one job the pack's own Core Idea cannot \u2014 say what the four have in
    // common and which question picks between them.
    // v1.27.53, ordningen rattad v1.27.59. Sidorna foljer nu packets egen
    // deckordning: Broken Record, Fogging, Negative Assertion, Negative
    // Inquiry. Forsta versionen arvde ordningen fran The Assertive Four, som
    // listar dem tvartom, och da stamde introt inte med det anvandaren motte
    // pa nasta skarm.
    assertivecomm1: {
      pages: [
        {
          title: 'Assertive Communication',
          html:
            '<p class="ob-text">Four things to say when someone is criticising you, ' +
            'pressuring you, or working on your guilt. They are defences, not attacks &mdash; ' +
            'each one ends the pressure without starting a fight.</p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>Broken Record</strong> &mdash; repeat what you want, unchanged.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Fogging</strong> &mdash; agree with what is true in it.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">3</span><p><strong>Negative Assertion</strong> &mdash; own a real mistake, plainly.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">4</span><p><strong>Negative Inquiry</strong> &mdash; ask what they actually mean.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">One question picks between them: what did the ' +
            'other person just do?</p>'
        },
        {
          title: 'Broken Record',
          html:
            '<p class="ob-text">Say what you want in the same words, in the same even tone, ' +
            'as many times as it takes. No new arguments.</p>' +
            '<p class="ob-text">Every reason you add is something for them to solve. The want ' +
            'itself cannot be solved, which is why repeating it works and arguing does not.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;But it is store policy.&rdquo;<br>&rarr; &ldquo;I understand that&rsquo;s the policy, and I want a refund.&rdquo;</p>'
        },
        {
          title: 'Fogging',
          html:
            '<p class="ob-text">Agree with whatever is true, likely, or fair in the criticism &mdash; ' +
            'and with nothing else. You are not promising to change. You are removing the fight ' +
            'they were expecting.</p>' +
            '<p class="ob-text">A critic needs something solid to hit. Agree, and the exaggeration ' +
            'is left standing on its own, which is where it looks worst.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;You&rsquo;re always so disorganised.&rdquo;<br>&rarr; &ldquo;I probably am, some days.&rdquo;</p>'
        },
        {
          title: 'Negative Assertion',
          html:
            '<p class="ob-text">When you really did it, say so &mdash; once, flatly, without ' +
            'excuses and without crawling.</p>' +
            '<p class="ob-text">A mistake is an inefficiency, not a verdict on you. Owning it ' +
            'immediately takes away the only thing the other person was holding.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;You forgot the report.&rdquo;<br>&rarr; &ldquo;I did &mdash; that was careless of me.&rdquo;</p>'
        },
        {
          title: 'Negative Inquiry',
          html:
            '<p class="ob-text">Ask for the complaint instead of answering the mood. ' +
            'Calmly, without an edge: what specifically am I doing?</p>' +
            '<p class="ob-text">Vague criticism runs on being vague. One plain question forces it ' +
            'to become an actual event you can do something about &mdash; or to stop.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;I don&rsquo;t like your attitude.&rdquo;<br>&rarr; &ldquo;What is it about my attitude that bothers you?&rdquo;</p>'
        }
      ]
    },

    // v1.27.44 \u2014 written from scratch. This pack is freemium and had no intro
    // at all, which meant one of the four packs a free user can open said
    // nothing about itself. Seven strategies is too many to give a page each
    // without the intro turning into a manual, so the pages follow the pack's
    // own grouping: three that answer the question, two that decide the size,
    // one for enthusiasm, one for the handover.
    talkingaboutyourself: {
      pages: [
        {
          title: 'Talking About Yourself',
          html:
            '<p class="ob-text">Everything else in this app teaches you to <strong>ask</strong>. ' +
            'This is the half where the question comes back to you.</p>' +
            '<p class="ob-text">It goes wrong in two opposite ways, and both come from the ' +
            'same mistake &mdash; reading the question as a test of how interesting you are.</p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>Too little.</strong> Four words, and now they are carrying the whole conversation.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Too much, too soon.</strong> A step nobody offered to take.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">Attention on you is an offer, not an exam.</p>'
        },
        {
          title: 'Answering the Question',
          html:
            '<p class="ob-text">Three strategies for an ordinary question landing on you. ' +
            'Each one fixes a different way the answer dies.</p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>Give a Detail</strong> &mdash; answer, then add one concrete thing they can pick up.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Behind the Question</strong> &mdash; the version about you, not the job title.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">3</span><p><strong>True, Not Impressive</strong> &mdash; true and specific beats impressive.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">&ldquo;How was your week?&rdquo;<br>&rarr; &ldquo;Good &mdash; long, though. I spent most of it arguing with a printer.&rdquo;</p>'
        },
        {
          title: 'Deciding How Much',
          html:
            '<p class="ob-text">Two strategies for size rather than content. Depth is a ' +
            'staircase: one step below what they offered, taken after they take theirs.</p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>Match Their Depth</strong> &mdash; a corridor question wants one line; a real one wants more.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Keep Something Back</strong> &mdash; a partial answer, warmly given, for what you would rather skip.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">&ldquo;Weren\u2019t you with someone for years?&rdquo;<br>&rarr; &ldquo;I was. Short version: it ended badly, and I\u2019m not doing the long one tonight.&rdquo;</p>'
        },
        {
          title: "What You're Into",
          html:
            '<p class="ob-text">Say the thing you actually care about, plainly, and then stop ' +
            'talking.</p>' +
            '<p class="ob-text">Enthusiasm is the most attractive thing most people have and ' +
            'the thing they hide hardest. What you are afraid of is not the enthusiasm &mdash; ' +
            'it is the lecture, and those are different. Name it, give one line, and let them ' +
            'decide whether to open it.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;What do you do with your time?&rdquo;<br>&rarr; &ldquo;I\u2019ve got very into bread lately. Not in a normal amount.&rdquo;</p>'
        },
        {
          title: 'Hand It Back',
          html:
            '<p class="ob-text">Return the attention &mdash; but only after you have answered.</p>' +
            '<p class="ob-text">Answering in four words and immediately asking a question ' +
            'looks like interest and works like a shield. They learn nothing about you, they ' +
            'do all the work, and after a while they stop asking.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;That\u2019s my week, anyway. What about yours?&rdquo;</p>'
        },
        {
          title: 'Choosing One',
          html:
            '<p class="ob-text">One question sorts most of it: <strong>what would my answer ' +
            'leave them with?</strong></p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p>Nothing to ask about &mdash; <strong>give a detail</strong>.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p>A job title &mdash; <strong>answer what they were really asking</strong>.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">3</span><p>Nothing true &mdash; <strong>say the small thing</strong>.</p></div>' +
            '</div>' +
            '<p class="ob-text">Everything else is a question of size, and the answer to that ' +
            'one is always: look at what they just gave you.</p>' +
            '<p class="ob-text ob-text--dim">The bar is true and specific. Nobody is grading this.</p>'
        }
      ]
    },

    // v1.27.45 — the two packs a freemium user reaches through the
    // Conversation Foundations programme rather than from the Packs tab. Both
    // are Pro standalone, so they had no intro: nobody thought of them as packs
    // a free user opens, and they are exactly that after a checkpoint.
    exploringatopic: {
      pages: [
        {
          title: 'Exploring a Topic',
          html:
            '<p class="ob-text">Most conversations die by hopping. A subject comes up, ' +
            'somebody says one thing about it, and then everyone starts hunting for a new one.</p>' +
            '<p class="ob-text">This pack is the opposite skill: <strong>staying</strong>. ' +
            'Five ways to add something to the subject already on the table.</p>' +
            '<p class="ob-text ob-text--dim">You do not need to know anything about the topic to keep it going.</p>'
        },
        {
          title: 'Going Deeper',
          html:
            '<p class="ob-text">Two ways to go further into what is already being said.</p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>Ask an Open Question</strong> &mdash; a what, how or why about the subject in hand.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Build on Their Point</strong> &mdash; take their own word and go one layer down.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">&ldquo;I grow most of our vegetables in the summer.&rdquo;<br>&rarr; &ldquo;You said <em>most</em> &mdash; what is the one thing that never works?&rdquo;</p>'
        },
        {
          title: 'Adding Your Own',
          html:
            '<p class="ob-text">Two ways to put something of yours into the topic without ' +
            'taking it over.</p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>Share a Related Experience</strong> &mdash; it does not have to be impressive, only related.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Share, Then Invite</strong> &mdash; one part you, one part them, in the same breath.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">&ldquo;I tried herbs on the windowsill &mdash; the basil lasted about a week. What do you grow?&rdquo;</p>'
        },
        {
          title: 'When It Runs Out',
          html:
            '<p class="ob-text"><strong>Expand to a Related Subtopic</strong> &mdash; step ' +
            'sideways rather than away.</p>' +
            '<p class="ob-text">A thread does eventually finish, and the instinct then is to ' +
            'jump to something unrelated. Moving to the next room instead of the next house ' +
            'keeps everything said so far still useful.</p>' +
            '<p class="ob-text ob-text--dim">Balcony gardening dries up<br>&rarr; &ldquo;Does anyone keep plants indoors? Mine never survive the winter.&rdquo;</p>'
        },
        {
          title: 'Choosing One',
          html:
            '<p class="ob-text">One question decides it: <strong>is the thread still ' +
            'alive?</strong></p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p>Yes, and they are talking &mdash; <strong>ask</strong> or <strong>build</strong>.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p>Yes, but it is your turn &mdash; <strong>share</strong>, then invite.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">3</span><p>No &mdash; <strong>expand sideways</strong>, and only sideways.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">Stay one move longer than feels natural. That is where the conversation usually is.</p>'
        }
      ]
    },

    changingtopics: {
      pages: [
        {
          title: 'Changing Topics',
          html:
            '<p class="ob-text">Every subject ends. What people notice is not that you changed ' +
            'it &mdash; it is the gap where the change happened.</p>' +
            '<p class="ob-text">Six ways to move on, sorted by how much of a bridge you build ' +
            'from the old subject to the new one.</p>' +
            '<p class="ob-text ob-text--dim">A switch with a bridge feels like a conversation. Without one it feels like an interruption.</p>'
        },
        {
          title: 'Bridging From What They Said',
          html:
            '<p class="ob-text">The smoothest two, because the new subject grows out of their ' +
            'own words.</p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>The Bridge</strong> &mdash; catch one word and use it as the bridge.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Common Ground</strong> &mdash; &ldquo;that&rsquo;s like when I&hellip;&rdquo;, and the new direction opens itself.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">&ldquo;I was up late finishing a report.&rdquo;<br>&rarr; &ldquo;Late nights &mdash; that reminds me, have you had any proper time off lately?&rdquo;</p>'
        },
        {
          title: 'Closing Before Opening',
          html:
            '<p class="ob-text">Two ways to finish the old subject on purpose, so the new one ' +
            'is not standing on top of it.</p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>Acknowledge and Redirect</strong> &mdash; a short wrap-up, then the new subject.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Close and Open</strong> &mdash; for a topic that has been covered, or is going round again.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">&ldquo;Sounds like an amazing trip &mdash; I think we&rsquo;ve covered it well. So what else is new?&rdquo;</p>'
        },
        {
          title: 'No Bridge At All',
          html:
            '<p class="ob-text"><strong>The Random Switch</strong> &mdash; change the ' +
            'subject openly, and say that you are doing it.</p>' +
            '<p class="ob-text">Naming the switch is what makes it work. An unannounced jump ' +
            'is jarring; an announced one is just a bit of lightness, and everyone is usually ' +
            'relieved.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;Okay, before we get too philosophical &mdash; seen any good films lately?&rdquo;</p>'
        },
        {
          title: 'When It Gets Uncomfortable',
          html:
            '<p class="ob-text"><strong>Steer Away</strong> &mdash; ' +
            'acknowledge it, then offer safer ground.</p>' +
            '<p class="ob-text">The acknowledgement is the part people skip, and it is the part ' +
            'that matters. Moving on without it reads as not having noticed, which is worse ' +
            'than staying.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;That sounds really hard &mdash; no need to get into it. How have you been otherwise?&rdquo;</p>'
        },
        {
          title: 'Choosing One',
          html:
            '<p class="ob-text">One question: <strong>can you build a bridge from what they ' +
            'just said?</strong></p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p>Yes &mdash; <strong>link</strong>, or find common ground.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p>No, but the subject is finished &mdash; <strong>close it</strong>, then open.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">3</span><p>No, and you just want out &mdash; <strong>say so</strong>, lightly.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">Whatever you do, do not leave the gap unmarked. That is the only part anyone notices.</p>'
        }
      ]
    },

    humourpractise: {
      pages: [
        {
          title: 'Humour Practise',
          html:
            '<p class="ob-text">This pack trains you to bring lightness into a conversation on purpose &mdash; ' +
            'to play, tease and not take yourself too seriously, instead of waiting for a joke to happen.</p>' +
            '<div class="ob-how">' +
            '<div class="ob-how-row"><span class="ob-how-num">1</span><p><strong>Observation Humour</strong> &mdash; find something funny in the moment you\u2019re both in.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">2</span><p><strong>Teasing</strong> &mdash; poke fun at the other person, warmly and lightly.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">3</span><p><strong>Self Humour</strong> &mdash; laugh at yourself before anyone else has to.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">4</span><p><strong>Joke About My Flaws</strong> &mdash; when someone points at a flaw, disarm it with a joke.</p></div>' +
            '<div class="ob-how-row"><span class="ob-how-num">5</span><p><strong>Jokingly Brag</strong> &mdash; brag so big it&rsquo;s obviously a joke.</p></div>' +
            '</div>' +
            '<p class="ob-text ob-text--dim">There\u2019s rarely one right line here. Each page shows one way to play it &mdash; aim for a version that sounds like you.</p>'
        },
        {
          title: 'Observation Humour',
          html:
            '<p class="ob-text">When there\u2019s nothing to react to, look at what\u2019s around you &mdash; the wait, the room, ' +
            'the situation you\u2019re both stuck in &mdash; and point out something funny in it.</p>' +
            '<p class="ob-text">It works because you\u2019re sharing the moment, not performing. The other person is already ' +
            'in on it, because they can see exactly what you mean.</p>' +
            '<p class="ob-text ob-text--dim">A long, silent lift ride&hellip;<br>&rarr; &ldquo;This is the most eye contact I\u2019ve avoided all day.&rdquo;</p>'
        },
        {
          title: 'Teasing',
          html:
            '<p class="ob-text">Playfully poke fun at the other person about something small &mdash; always warm, never a real dig. ' +
            'The affection has to show through.</p>' +
            '<p class="ob-text">Good teasing says &ldquo;I notice you, and I\u2019m comfortable enough to play.&rdquo; It builds closeness &mdash; ' +
            'as long as they can tell you\u2019re on their side.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;You\u2019ve reorganised your desk again?&rdquo;<br>&rarr; &ldquo;At this point the desk should pay you rent.&rdquo;</p>'
        },
        {
          title: 'Self Humour',
          html:
            '<p class="ob-text">Laugh at your own small mistakes and awkward moments before anyone else does. ' +
            'You bring it up yourself, lightly.</p>' +
            '<p class="ob-text">It shows you don\u2019t take yourself too seriously &mdash; which puts everyone at ease ' +
            'and takes the sting out of the moment.</p>' +
            '<p class="ob-text ob-text--dim">You walk straight into the glass door&hellip;<br>&rarr; &ldquo;Smooth. Meant to do that, obviously.&rdquo;</p>'
        },
        {
          title: 'Joke About My Flaws',
          html:
            '<p class="ob-text">When someone points at a real flaw of yours, don\u2019t defend it &mdash; agree, and make it funny. ' +
            'You take the criticism and turn it into a joke you\u2019re both in on.</p>' +
            '<p class="ob-text">Because you got there first, there\u2019s nothing left to attack. Owning it lightly ' +
            'is far stronger than denying it.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;You\u2019re always late.&rdquo;<br>&rarr; &ldquo;Punctuality just isn\u2019t one of my three skills.&rdquo;</p>'
        },
        {
          title: 'Jokingly Brag',
          html:
            '<p class="ob-text">Brag about yourself so wildly and obviously over-the-top that it can\u2019t be taken seriously. ' +
            'The joke is that no one could.</p>' +
            '<p class="ob-text">It\u2019s confidence played for laughs &mdash; you look secure enough to poke fun ' +
            'at your own ego.</p>' +
            '<p class="ob-text ob-text--dim">&ldquo;Nice parking.&rdquo;<br>&rarr; &ldquo;Thank you. They\u2019re thinking of putting my name on the spot.&rdquo;</p>'
        }
      ]
    }
  };

  function show(key, forced) {
    const intro = PACK_INTROS[key];
    if (!intro) return;
    const cKey = 'ds_packintro_' + key;
    if (!forced) {
      const n = parseInt(localStorage.getItem(cKey) || '0');
      if (n >= SHOW_TIMES) return;
      try { localStorage.setItem(cKey, n + 1); } catch (e) {}
    }
    screen.innerHTML =
      '<div class="ob-top"><div class="ob-dots" id="piDots"></div>' +
      '<button class="ob-skip" id="piSkipBtn">Skip</button></div>' +
      intro.pages.map((p, i) =>
        '<div class="ob-step" style="display:' + (i === 0 ? 'flex' : 'none') + ';">' +
        '<h2 class="ob-title">' + p.title + '</h2>' + p.html + '</div>').join('') +
      '<div class="ob-bottom"><button class="ob-next" id="piNextBtn">Continue</button></div>';

    const steps   = Array.from(screen.querySelectorAll('.ob-step'));
    const dotsEl  = screen.querySelector('#piDots');
    const nextBtn = screen.querySelector('#piNextBtn');
    dotsEl.innerHTML = steps.map((_, i) =>
      '<span class="ob-dot' + (i === 0 ? ' ob-dot--active' : '') + '"></span>').join('');
    const dots = Array.from(dotsEl.children);
    let step = 0;

    function showStep(i) {
      steps.forEach((st, j) => { st.style.display = j === i ? 'flex' : 'none'; });
      dots.forEach((d, j) => d.classList.toggle('ob-dot--active', j === i));
      step = i;
      nextBtn.textContent = (i === steps.length - 1) ? 'Got it' : 'Continue';
    }
    function finish() {
      screen.classList.add('ob-leaving');
      setTimeout(() => {
        screen.style.display = 'none';
        screen.classList.remove('ob-leaving');
        screen.innerHTML = '';
      }, 450);
    }
    nextBtn.addEventListener('click', () => {
      if (step < steps.length - 1) showStep(step + 1);
      else finish();
    });
    screen.querySelector('#piSkipBtn').addEventListener('click', finish);

    screen.classList.remove('ob-leaving');
    screen.style.display = 'flex';
    showStep(0);
  }

  // Called by showModeScreen / goNextPack (app-core.js)
  window.maybeShowPackIntro = key => show(key, false);
  window.replayPackIntro    = key => show(key, true);

  // Replay: tap the pack name on the mode screen
  const nameEl = document.getElementById('modeCollectionName');
  if (nameEl) {
    nameEl.style.cursor = 'pointer';
    nameEl.addEventListener('click', () => {
      const k = window.activeCollectionKey;
      if (k && PACK_INTROS[k]) show(k, true);
    });
  }
})();

// ─── GUIDES (v1.27.08) ───────────────────────────────────────────────────────
//
// Four walkthroughs that explain the training screens. They are NOT onboarding:
// onboarding runs once at first launch and explains the app. These run the
// first time you open a training screen, and afterwards live behind the gear.
//
//   training-basics   · shown automatically on the first standard training screen
//   training-more     · settings only
//   handsfree-basics  · shown automatically on the first handsfree screen
//   handsfree-more    · settings only
//
// They reuse #packIntroScreen and the .ob-* styles, so a guide looks and moves
// exactly like a pack intro — same dots, same Skip, same Continue.
//
// THE PICTURES ARE DRAWN, NOT SCREENSHOTTED. See the .gd-art note in style.css.
(function initGuides() {
  const screen = document.getElementById('packIntroScreen');
  if (!screen) return;

  // ── The word for "the thing you swipe sideways between" ──────────────────
  // In the data it is a group: a strategy in Single Strategy, a category in
  // Memorize and Challenges, a combo in Sequences, a collection in Collections.
  // The user needs ONE word for all six, and it is DECK — which is also where
  // the app's name comes from: a pack is a stack of decks.
  //
  // EVERY user-facing use of that word in this file goes through D. Renaming it
  // later is this one object.
  const D = { one: 'deck', One: 'Deck', many: 'decks', Many: 'Decks' };

  // ── Illustration kit ─────────────────────────────────────────────────────
  // Small SVG scenes of the training screen. Coordinates are a 250×150 stage.
  const svg = (h, body) =>
    '<svg class="gd-art" viewBox="0 0 250 ' + h + '" role="img" aria-hidden="true">' + body + '</svg>';

  // a card with a few text lines on it
  const card = (x, y, w, h, lines, opts) => {
    opts = opts || {};
    let s = '<rect class="gd-card" x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="10"/>';
    for (let i = 0; i < lines; i++) {
      const lw = (i === lines - 1) ? w * 0.45 : w * (0.72 - i * 0.06);
      s += '<rect class="gd-line' + (opts.strong && i === 0 ? ' gd-line--strong' : '') + '" x="' +
           (x + w * 0.14) + '" y="' + (y + h * 0.3 + i * 11) + '" width="' + lw + '" height="4.5" rx="2.2"/>';
    }
    return s;
  };
  const arrow = (x1, y1, x2, y2, head) => {
    const a = '<path class="gd-arrow" d="M' + x1 + ' ' + y1 + ' L' + x2 + ' ' + y2 + '"/>';
    return a + '<path class="gd-arrow" d="' + head + '"/>';
  };
  const label = (x, y, t, cls) =>
    '<text class="' + (cls || 'gd-label') + '" x="' + x + '" y="' + y + '" text-anchor="middle">' + t + '</text>';

  const ART = {
    // tapping the deck name above the card opens its description
    deckName: () => svg(150,
      '<rect class="gd-panel" x="55" y="8" width="140" height="20" rx="7"/>' +
      '<rect class="gd-line gd-line--strong" x="80" y="16" width="90" height="4.5" rx="2.2"/>' +
      '<circle class="gd-ring" cx="125" cy="18" r="17"/>' +
      '<circle class="gd-ring" cx="125" cy="18" r="25" opacity=".25"/>' +
      card(55, 40, 140, 100, 4) +
      label(125, 149, 'TAP THE NAME')),

    // the card itself, front and back
    flip: () => svg(150,
      card(15, 20, 105, 110, 3) +
      card(130, 20, 105, 110, 3, { strong: true }) +
      arrow(122, 75, 128, 75, 'M124 71 L129 75 L124 79') +
      label(67, 148, 'FRONT SIDE') +
      label(182, 148, 'BACK SIDE')),

    // swipe down: a new input inside the same deck
    newInput: () => svg(160,
      card(70, 6, 110, 84, 3) +
      card(70, 60, 110, 84, 3) +
      '<rect class="gd-card" x="70" y="60" width="110" height="84" rx="10"/>' +
      '<rect class="gd-line" x="85" y="85" width="72" height="4.5" rx="2.2"/>' +
      '<rect class="gd-line" x="85" y="96" width="62" height="4.5" rx="2.2"/>' +
      '<rect class="gd-line" x="85" y="107" width="42" height="4.5" rx="2.2"/>' +
      arrow(35, 40, 35, 110, 'M29 102 L35 111 L41 102') +
      label(35, 128, 'SWIPE', 'gd-muted') +
      label(35, 138, 'DOWN', 'gd-muted') +
      label(125, 159, 'A NEW INPUT')),

    // swipe right: the next deck
    nextDeck: () => svg(150,
      card(8, 25, 96, 96, 3) +
      card(146, 25, 96, 96, 3) +
      arrow(112, 73, 138, 73, 'M132 67 L139 73 L132 79') +
      label(56, 137, 'THIS ' + D.One.toUpperCase()) +
      label(194, 137, 'NEXT ' + D.One.toUpperCase()) +
      label(125, 16, 'SWIPE RIGHT', 'gd-muted')),

    // the counters above the card
    counters: () => svg(120,
      '<rect class="gd-panel" x="70" y="10" width="110" height="22" rx="7"/>' +
      '<text class="gd-label" x="125" y="25" text-anchor="middle">3 / 8  ·  2 / 5</text>' +
      arrow(100, 52, 100, 38, 'M95 44 L100 37 L105 44') +
      arrow(152, 52, 152, 38, 'M147 44 L152 37 L157 44') +
      '<text class="gd-muted" x="100" y="70" text-anchor="middle">input</text>' +
      '<text class="gd-muted" x="152" y="70" text-anchor="middle">' + D.one + '</text>' +
      card(70, 82, 110, 34, 2)),

    // the four arrows at the bottom
    navBar: () => svg(110,
      card(70, 4, 110, 46, 2) +
      '<rect class="gd-panel" x="45" y="60" width="160" height="34" rx="10"/>' +
      '<path class="gd-arrow" d="M70 77 L62 77 M66 73 L61 77 L66 81"/>' +
      '<path class="gd-arrow" d="M104 82 L104 72 M100 76 L104 71 L108 76"/>' +
      '<path class="gd-arrow" d="M146 72 L146 82 M142 78 L146 83 L150 78"/>' +
      '<path class="gd-arrow" d="M180 77 L188 77 M184 73 L189 77 L184 81"/>' +
      '<text class="gd-muted" x="66" y="107" text-anchor="middle">prev ' + D.one + '</text>' +
      '<text class="gd-muted" x="184" y="107" text-anchor="middle">next ' + D.one + '</text>'),

    // three taps on the hint line opens a note
    notes: () => svg(150,
      card(70, 6, 110, 74, 3) +
      '<rect class="gd-line" x="92" y="92" width="66" height="4" rx="2" opacity=".45"/>' +
      '<circle class="gd-dot" cx="125" cy="110" r="3.5"/>' +
      '<circle class="gd-ring" cx="125" cy="110" r="9"/>' +
      '<circle class="gd-ring" cx="125" cy="110" r="15" opacity=".3"/>' +
      label(125, 136, 'TAP THREE TIMES') +
      label(125, 148, 'BELOW THE CARD', 'gd-muted')),

    // handsfree: the app talks, the screen can sleep
    handsfree: () => svg(150,
      card(30, 20, 100, 100, 3) +
      '<path class="gd-arrow" d="M158 52 L172 52 L188 38 L188 102 L172 88 L158 88 Z"/>' +
      '<path class="gd-ring" d="M199 50 a22 22 0 0 1 0 40"/>' +
      '<path class="gd-ring" d="M207 40 a34 34 0 0 1 0 60" opacity=".4"/>' +
      label(125, 143, 'IT READS TO YOU')),

    // handsfree: adding voices on iPhone
    voices: () => svg(130,
      '<rect class="gd-panel" x="35" y="10" width="180" height="26" rx="8"/>' +
      '<text class="gd-muted" x="125" y="27" text-anchor="middle">Settings &#8250; Accessibility</text>' +
      '<rect class="gd-panel" x="35" y="44" width="180" height="26" rx="8"/>' +
      '<text class="gd-muted" x="125" y="61" text-anchor="middle">Spoken Content &#8250; Voices</text>' +
      '<rect class="gd-panel" x="35" y="78" width="180" height="26" rx="8"/>' +
      '<text class="gd-muted" x="125" y="95" text-anchor="middle">English &#8250; download one</text>' +
      '<path class="gd-arrow" d="M125 38 L125 42 M121 39 L125 43 L129 39"/>' +
      '<path class="gd-arrow" d="M125 72 L125 76 M121 73 L125 77 L129 73"/>' +
      label(125, 123, 'ONCE, ON THE PHONE')),
  };

  const P = t => '<p class="ob-text">' + t + '</p>';
  const Pdim = t => '<p class="ob-text ob-text--dim">' + t + '</p>';
  const cap = t => '<div class="gd-cap">' + t + '</div>';
  const rows = list =>
    '<div class="ob-how">' + list.map((r, i) =>
      '<div class="ob-how-row"><span class="ob-how-num">' + (i + 1) + '</span><p>' + r + '</p></div>'
    ).join('') + '</div>';

  // ── The guides ───────────────────────────────────────────────────────────
  const GUIDES = {
    // v1.27.59 \u2014 the six modes, side by side. The four older guides all
    // explain what to do once you are INSIDE a training screen; none of them
    // said what the six choices on the mode screen actually are. This one is
    // shown on the first pack the user ever opens, immediately before that
    // pack's own intro, and afterwards lives under the gear on the home
    // screen. Three pages, deliberately: it arrives right after onboarding.
    // v1.27.59, redrawn v1.27.60. The four older guides explain what to do
    // once you are INSIDE a training screen; none of them said what the six
    // choices on the mode screen actually are. Shown on the first pack the
    // user ever opens, ahead of that pack's own intro, and afterwards under
    // the gear on the home screen.
    //
    // The tiles carry the same Tabler icons as the mode cards, so the guide
    // and the screen it describes look like the same thing. Three modes a
    // page: six tiles do not fit one screen without scrolling.
    //
    // NOTE ON CHALLENGES. An earlier draft called these "the hard situations".
    // Rikard, 2026-08-29: that is not what the mode is. The situations are no
    // harder than anywhere else \u2014 the difference is that the deck is
    // sorted by the PROBLEM rather than by the strategy, which is a different
    // way in, not a difficulty setting. The two page groupings follow that
    // same axis and nothing else.
    'modes-overview': {
      title: 'Training modes',
      pages: [
        {
          title: 'Six ways to train',
          html:
            '<p class="ob-text">Every pack holds the same strategies, taught six different ways.</p>' +
            '<p class="ob-text">Three of them start from a strategy and work outwards. ' +
            'Three come at it from somewhere else entirely.</p>' +
            '<p class="ob-text ob-text--dim">You do not have to use them all. Most people ' +
            'live in one or two.</p>'
        },
        {
          title: 'From the strategy',
          html:
            '<div class="gd-modes">' +
            '<div class="gd-mode"><div class="gd-mode-ic"><i class="ti ti-cards" aria-hidden="true"></i></div>' +
            '<div class="gd-mode-tx"><strong>Single Strategy</strong><span>One move at a time. A situation on the front, something you could say on the back. This is where a move becomes yours.</span></div></div>' +
            
            '<div class="gd-mode"><div class="gd-mode-ic"><i class="ti ti-layout-grid" aria-hidden="true"></i></div>' +
            '<div class="gd-mode-tx"><strong>Collections</strong><span>Two or more moves side by side, and the question of which one this moment calls for. Knowing a move and picking it are different skills.</span></div></div>' +
            
            '<div class="gd-mode"><div class="gd-mode-ic"><i class="ti ti-list-numbers" aria-hidden="true"></i></div>' +
            '<div class="gd-mode-tx"><strong>Sequences</strong><span>A whole conversation, step by step, with the other person answering in between. The only mode where the order is the lesson.</span></div></div>' +
            
            '</div>'
        },
        {
          title: 'From another angle',
          html:
            '<div class="gd-modes">' +
            '<div class="gd-mode"><div class="gd-mode-ic"><i class="ti ti-trophy" aria-hidden="true"></i></div>' +
            '<div class="gd-mode-tx"><strong>Challenges</strong><span>The same moves, sorted by the problem instead of the strategy. You meet the comment first and pick the answer yourself.</span></div></div>' +
            
            '<div class="gd-mode"><div class="gd-mode-ic"><i class="ti ti-sparkles" aria-hidden="true"></i></div>' +
            '<div class="gd-mode-tx"><strong>Mindset</strong><span>Not about what to say at all. It takes the belief that stops you saying it, one thought at a time.</span></div></div>' +
            
            '<div class="gd-mode"><div class="gd-mode-ic"><i class="ti ti-brain" aria-hidden="true"></i></div>' +
            '<div class="gd-mode-tx"><strong>Memorize</strong><span>Flashcards: the names, the mechanisms, the reasons. Short sessions, and it holds the pack together.</span></div></div>' +
            
            '</div>'
        },
        {
          title: 'Ready',
          html:
            '<p class="ob-text">That is how the training works. Now for the material.</p>' +
            '<p class="ob-text">Every pack teaches its own set of strategies, and each one ' +
            'opens with a short introduction to them.</p>' +
            '<p class="ob-text ob-text--dim">Here is your first.</p>'
        }
      ]
    },
    // v1.27.77 - PROGRAMS, explained once. Shown the first time the user taps
    // any programme card, ahead of the programme screen, and afterwards under
    // the gear on the home screen.
    //
    // It fires on LOCKED programmes too. A Pro programme is browsable on
    // purpose - being able to look inside is the whole reason it is listed -
    // and someone looking at a route they cannot run yet needs the
    // explanation more than someone who can just start it.
    //
    // Rikard, 2026-09-03: the guide comes first, the programme screen after.
    'programs-overview': {
      title: 'Programs',
      pages: [
        {
          title: 'A route, not a pack',
          html:
            P('A pack is a set of strategies you can train in any order. A <strong>program</strong> is a route through several of them, in the order that makes each one easier than it would have been alone.') +
            P('You do not have to use one. They exist for the times when you know roughly what you want and not where to start.') +
            Pdim('Everything inside a program is also a normal pack. Nothing is locked away in here.')
        },
        {
          title: 'Parts and checkpoints',
          html:
            rows([
              'A program is split into <strong>Parts</strong>. Each Part is a pack, sometimes two.',
              'At the end of a Part there is a <strong>checkpoint</strong> &mdash; a short test on what that Part taught.',
              'Pass it and the next Part opens. <strong>70% is the pass mark</strong>, and the questions are drawn fresh each attempt, so a retake is a different test.',
            ]) +
            Pdim('You can retake a checkpoint as often as you like. Nothing is lost by failing one.')
        },
        {
          title: 'What passing gives you',
          html:
            P('Passing a Part&rsquo;s checkpoint does two things. It opens the next Part &mdash; and it releases that Part&rsquo;s packs into your library, permanently.') +
            P('That second one matters more than it sounds. In <strong>Conversation Foundations</strong> the later Parts are Pro packs, and a free user who works through the route earns them one checkpoint at a time.') +
            Pdim('Once a pack is released it behaves like any other: your library, your favourites, handsfree, all of it.')
        },
        {
          title: 'The ones marked Pro',
          html:
            P('A program with a <strong>Pro</strong> badge can still be opened. You can read every Part, see which packs it uses and what each checkpoint asks &mdash; you just cannot run it yet.') +
            P('That is deliberate. Deciding whether a route is worth it is hard to do from a title alone.') +
            Pdim('Next: the Parts, and where you are in them.')
        }
      ]
    },
    'training-basics': {
      title: 'How training works',
      pages: [
        {
          title: 'How training works',
          html:
            P('Every screen is the same loop. You read a situation, you decide what you would <strong>actually say</strong>, and then you check it against a suggested answer.') +
            rows([
              'Read the <strong>front side</strong> &mdash; the situation.',
              'Say your answer, out loud or in your head.',
              'Tap the card for a <strong>suggested answer</strong>.',
            ]) +
            Pdim('Answering before you look is the whole exercise. Reading both sides teaches you nothing.'),
        },
        {
          title: 'The two sides',
          html:
            ART.flip() +
            cap('Tap anywhere on the card') +
            P('The front gives you a situation. The back gives you <strong>one</strong> answer that would work &mdash; not the only one, and not one to memorise word for word.') +
            Pdim('If yours was different and it holds up, yours was right too.'),
        },
        {
          title: 'What you are practising',
          html:
            ART.deckName() +
            cap('Tap the name above the card') +
            P('The name above the card is the ' + D.one + ' you are in. Tap it and you get the explanation: what this ' + D.one + ' trains, when it works, and what makes it fail.') +
            Pdim('Worth reading once per ' + D.one + '. It is the part that makes the cards make sense.'),
        },
        {
          title: 'Swipe down: a new input',
          html:
            ART.newInput() +
            cap('Same ' + D.one + ', a different situation') +
            P('Swiping up or down keeps you on the same ' + D.one + ' and hands you another situation to try it on.') +
            Pdim('This is where the reps are. One situation proves nothing; eight starts to stick.'),
        },
        {
          title: 'Swipe right: the next ' + D.one,
          html:
            ART.nextDeck() +
            cap('A new thing to practise') +
            P('Swiping left or right moves to the next <strong>' + D.one + '</strong> &mdash; a different move, with its own name, its own explanation and its own set of inputs.') +
            Pdim('A pack is a stack of ' + D.many + '. A ' + D.one + ' is a stack of input cards.'),
        },
        {
          title: 'That is the whole thing',
          html:
            P('Three gestures. Tap to reveal, swipe down for another input, swipe right for the next ' + D.one + '.') +
            rows([
              'You can open this guide again from the <strong>gear</strong> on any training screen.',
              'There is a <strong>second guide</strong> in the same place, for the counters, the arrows, notes and the settings.',
            ]) +
            Pdim('Nothing else is required. Everything below is optional.'),
        },
      ],
    },

    'training-more': {
      title: 'The rest of the screen',
      pages: [
        {
          title: 'The numbers at the top',
          html:
            ART.counters() +
            cap('input  ·  ' + D.one) +
            P('The left pair is where you are among this ' + D.one + '&rsquo;s inputs. The right pair is where you are among the ' + D.many + ' in the pack.') +
            Pdim('The left one is hidden by default. Turn on <strong>Show input counter</strong> if you want it.'),
        },
        {
          title: 'The arrows at the bottom',
          html:
            ART.navBar() +
            cap('The same moves, as buttons') +
            P('The outer two step between ' + D.many + '. The inner two step between inputs. They do exactly what the swipes do, for when one hand is busy.') +
            Pdim('Go forward past the last ' + D.one + ' and you land in the <strong>next pack</strong> in whatever list you opened this one from.'),
        },
        {
          title: 'Notes',
          html:
            ART.notes() +
            cap('Three taps on the line under the card') +
            P('Writes a note attached to <strong>this card, this side</strong>. Use it for a thought, a better phrasing of your own, or something that did not work when you tried it.') +
            Pdim('A card that has a note shows a heavier dot on that line. Export them all from Settings on the home screen.'),
        },
        {
          title: 'Settings',
          html:
            P('The gear on a training screen holds the things worth changing:') +
            rows([
              '<strong>Shuffle</strong> &mdash; ' + D.many + ' and inputs in a different order each session.',
              '<strong>Guide text</strong> &mdash; the small framing line above the card.',
              '<strong>Hints</strong> &mdash; the line under the card. Turning it off keeps the three-tap for notes.',
              '<strong>Progress bar</strong> &mdash; how far through the pack you are.',
            ]) +
            Pdim('The same panel has a button for each of these two guides.'),
        },
      ],
    },

    'handsfree-basics': {
      title: 'Handsfree',
      pages: [
        {
          title: 'Handsfree',
          html:
            ART.handsfree() +
            cap('Screen off, headphones in') +
            P('Handsfree reads the cards to you and leaves a pause where your answer goes. It is the same material as the normal screen, out loud.') +
            Pdim('Made for walking, driving and washing up &mdash; the times you can rehearse but cannot look.'),
        },
        {
          title: 'How a round runs',
          html:
            rows([
              'It reads the ' + D.one + '&rsquo;s <strong>explanation</strong>, once.',
              'It reads a <strong>situation</strong>, then goes quiet.',
              'You answer <strong>out loud</strong>, into the pause.',
              'It reads the <strong>suggested answer</strong>, then moves on.',
            ]) +
            P('It keeps going by itself until you stop it. Say your answer properly &mdash; out loud, in a full sentence. Thinking it is not the same exercise.'),
        },
        {
          title: 'Better voices',
          html:
            ART.voices() +
            cap('iPhone') +
            P('The default voice is flat and it makes an hour of this hard work. iOS has much better ones, free, but they have to be downloaded first:') +
            rows([
              'iPhone <strong>Settings &#8250; Accessibility</strong>.',
              '<strong>Spoken Content &#8250; Voices &#8250; English</strong>.',
              'Download a <strong>Premium</strong> or <strong>Enhanced</strong> voice.',
              'Come back here and pick it under <strong>Voice</strong> in the gear.',
            ]) +
            Pdim('Worth the four minutes. It is the single biggest difference in handsfree.'),
        },
        {
          title: 'That is the whole thing',
          html:
            P('Start it, put the phone away, and answer out loud.') +
            rows([
              'This guide is behind the <strong>gear</strong> on any handsfree screen.',
              'A <strong>second guide</strong> in the same place covers the pace, the pauses and what gets read.',
            ]) +
            Pdim('The screen can sleep. It keeps talking.'),
        },
      ],
    },

    'handsfree-more': {
      title: 'Handsfree settings',
      pages: [
        {
          title: 'What gets read',
          html:
            rows([
              '<strong>Strategy explanation</strong> &mdash; the full description at the start of each ' + D.one + '. Turn it off once you know them.',
              '<strong>Card back</strong> &mdash; the suggested answer. Off means you answer and never hear a model.',
              '<strong>Guide text</strong> &mdash; the short framing line.',
            ]) +
            Pdim('Explanation off and card back on is the usual setting after the first few rounds.'),
        },
        {
          title: 'Time to think',
          html:
            rows([
              '<strong>Thinking pause</strong> &mdash; the silence after a situation. This is your answer. Make it long enough to say a real sentence.',
              '<strong>General pause</strong> &mdash; the gaps everywhere else.',
              '<strong>Speech rate</strong> &mdash; how fast it talks.',
            ]) +
            P('If you find yourself rushing, the thinking pause is too short. It is meant to feel slightly too long.'),
        },
        {
          title: 'How much, and in what order',
          html:
            rows([
              '<strong>Max inputs per ' + D.one + '</strong> &mdash; caps how many situations you get before it moves on.',
              '<strong>Loop current ' + D.one + '</strong> &mdash; stay on one until you stop it.',
              '<strong>Shuffle</strong> &mdash; a different order each session.',
              '<strong>Voice</strong> &mdash; see the first guide for how to add better ones.',
            ]) +
            Pdim('Looping one ' + D.one + ' with a long thinking pause is the closest thing to real rehearsal in the app.'),
        },
      ],
    },
  };

  // ── Renderer ─────────────────────────────────────────────────────────────
  // Same shape as the pack intro so the two feel like one mechanism.
  // v1.27.77 - which guide is on screen right now, or null. Without it a
  // second call could draw a new guide over a live one, which is exactly what
  // the duplicated Packs-tab handler used to do.
  let openGuide = null;

  function render(id, onDone, onSeen) {
    const g = GUIDES[id];
    if (!g) { if (onDone) onDone(); return false; }
    if (openGuide) return false;
    openGuide = id;
    screen.innerHTML =
      '<div class="ob-top"><div class="ob-dots" id="gdDots"></div>' +
      '<button class="ob-skip" id="gdSkipBtn">Skip</button></div>' +
      g.pages.map((p, i) =>
        '<div class="ob-step" style="display:' + (i === 0 ? 'flex' : 'none') + ';">' +
        '<h2 class="ob-title">' + p.title + '</h2>' + p.html + '</div>').join('') +
      '<div class="ob-bottom"><button class="ob-next" id="gdNextBtn">Continue</button></div>';

    const steps = Array.from(screen.querySelectorAll('.ob-step'));
    const dotsEl = screen.querySelector('#gdDots');
    const nextBtn = screen.querySelector('#gdNextBtn');
    dotsEl.innerHTML = steps.map((_, i) =>
      '<span class="ob-dot' + (i === 0 ? ' ob-dot--active' : '') + '"></span>').join('');
    const dots = Array.from(dotsEl.children);
    let step = 0;

    function showStep(i) {
      steps.forEach((st, j) => { st.style.display = j === i ? 'flex' : 'none'; });
      dots.forEach((d, j) => d.classList.toggle('ob-dot--active', j === i));
      step = i;
      nextBtn.textContent = (i === steps.length - 1) ? 'Got it' : 'Continue';
      screen.scrollTop = 0;
    }
    // v1.27.59 \u2014 onDone lets one guide hand over to whatever should follow
    // it. The mode guide uses it to start the pack intro, so a first-time user
    // sees the two in sequence instead of on top of each other.
    let done = false;
    function finish() {
      if (done) return;
      done = true;
      // v1.27.60 \u2014 when something follows, hand over WITHOUT the fade.
      // The fade takes 450 ms with the screen hidden at the end of it, and in
      // that gap the mode screen underneath was revealed and then covered
      // again: a flash of a screen the user had not asked for yet. Handing
      // over while the overlay is still up means the pack intro simply
      // replaces the guide, and the mode screen is not seen until both are
      // finished with.
      openGuide = null;
      // v1.27.77 - the flag is written HERE, not when the guide opens. Marking
      // it seen up front meant a guide that was drawn and then covered counted
      // as read. Worst case now is that it appears once more.
      if (onSeen) onSeen();
      if (onDone) {
        screen.innerHTML = '';
        onDone();
        // v1.27.77 - the handover contract is that the callback draws into
        // this same screen. If it did not - the pack has no intro of its own,
        // or the callback opened a different screen - this element would
        // otherwise stay display:flex and empty, a blank sheet over the whole
        // app with nothing to tap. Open a pack with no intro as a first-run
        // user and that is precisely what happened.
        if (!screen.innerHTML) {
          screen.style.display = 'none';
          screen.classList.remove('ob-leaving');
        }
        return;
      }
      screen.classList.add('ob-leaving');
      setTimeout(() => {
        screen.style.display = 'none';
        screen.classList.remove('ob-leaving');
        screen.innerHTML = '';
      }, 450);
    }
    nextBtn.addEventListener('click', () => {
      if (step < steps.length - 1) showStep(step + 1);
      else finish();
    });
    screen.querySelector('#gdSkipBtn').addEventListener('click', finish);

    screen.classList.remove('ob-leaving');
    screen.style.display = 'flex';
    showStep(0);
    return true;
  }

  // Show once, ever. The flag is per guide so adding a fifth one later does
  // not re-show the first four.
  //
  // v1.27.09 — RENDERS IMMEDIATELY and returns whether it did. It used to wait
  // 520 ms for the training screen to finish sliding in, which meant you saw
  // the screen swipe up and then get covered a moment later: a flicker, and it
  // read as two separate things happening. Now the guide is simply there, and
  // the training screen is revealed underneath when you close it. The caller
  // uses the return value to suppress the slide-in it would otherwise start.
  function maybeShow(id, onDone) {
    // A guide is already up. Return true so the caller does NOT run its
    // fallback - that fallback is what used to draw over the live guide.
    if (openGuide) return true;
    const key = 'ds_guide_' + id;
    if (localStorage.getItem(key) === 'seen') return false;
    return render(id, onDone, () => {
      try { localStorage.setItem(key, 'seen'); } catch (e) {}
    });
  }

  window.showGuide = render;
  window.maybeShowGuide = maybeShow;

  // Replay fran kugghjulet pa hemskarmen. De fyra aldre guiderna nas inifran
  // ett traningslage; den har handlar om valet MELLAN lagena, sa den hor hemma
  // ett steg tidigare.
  // v1.27.77 - two rows now, same behaviour: close settings, then draw.
  [['modeGuideBtn', 'modes-overview'], ['programGuideBtn', 'programs-overview']]
    .forEach(([btnId, guideId]) => {
      const b = document.getElementById(btnId);
      if (!b) return;
      b.addEventListener('click', e => {
        e.stopPropagation();
        const panel = b.closest('.settings-screen') || b.closest('.settings-panel');
        if (panel && panel.classList) panel.classList.remove('open');
        const back = document.getElementById('settingsBackBtn');
        if (back) back.click();
        setTimeout(() => render(guideId), 60);
      });
    });
  window.DECK_TERM = D;

  // ── The rows inside every training settings panel ────────────────────────
  // Injected rather than written into index.html seven times: the standard
  // panel plus six handsfree ones, and a new mode would need an eighth.
  const PANELS = [
    { overlay: 'settingsOverlay',       basics: 'training-basics',  more: 'training-more'  },
    { overlay: 'hfSettingsOverlay',      basics: 'handsfree-basics', more: 'handsfree-more' },
    { overlay: 'hfMemSettingsOverlay',   basics: 'handsfree-basics', more: 'handsfree-more' },
    { overlay: 'hfChallSettingsOverlay', basics: 'handsfree-basics', more: 'handsfree-more' },
    { overlay: 'hfFlowSettingsOverlay',  basics: 'handsfree-basics', more: 'handsfree-more' },
    { overlay: 'hfMindSettingsOverlay',  basics: 'handsfree-basics', more: 'handsfree-more' },
    { overlay: 'hfCollSettingsOverlay',  basics: 'handsfree-basics', more: 'handsfree-more' },
  ];

  PANELS.forEach(cfg => {
    const overlay = document.getElementById(cfg.overlay);
    if (!overlay) return;
    const panel = overlay.querySelector('.settings-panel');
    if (!panel || panel.querySelector('.gd-settings-head')) return;

    const head = document.createElement('div');
    head.className = 'gd-settings-head';
    head.textContent = 'Guides';

    const mk = (text, guideId) => {
      const row = document.createElement('div');
      row.className = 'settings-row';
      const lab = document.createElement('label');
      lab.textContent = text;
      const btn = document.createElement('button');
      btn.className = 'gd-btn';
      btn.textContent = 'View';
      btn.addEventListener('click', e => {
        e.stopPropagation();
        overlay.classList.remove('open');
        render(guideId);
      });
      row.appendChild(lab);
      row.appendChild(btn);
      return row;
    };

    // sit above the version line and the Done button
    const anchor = panel.querySelector('.settings-version') || panel.querySelector('.settings-close');
    const add = el => anchor ? panel.insertBefore(el, anchor) : panel.appendChild(el);
    add(head);
    add(mk(GUIDES[cfg.basics].title, cfg.basics));
    add(mk(GUIDES[cfg.more].title, cfg.more));
  });
})();
