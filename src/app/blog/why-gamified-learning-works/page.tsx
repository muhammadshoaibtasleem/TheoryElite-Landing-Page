import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Why Gamified Learning Works: The Science Behind Theory Elite | Theory Elite Blog",
  description:
    "Discover why gamified learning boosts retention by up to 90%. Learn the science of active recall, spaced repetition, and quiz battles — and how Theory Elite uses them to help business students ace exams.",
  keywords:
    "gamified learning, gamification in education, active recall, spaced repetition, quiz app for students, business quiz app, MBA study app, exam prep app, gamified study app, learning retention, Theory Elite",
  openGraph: {
    title: "Why Gamified Learning Works: The Science Behind Theory Elite",
    description:
      "Research shows gamification increases learning retention by up to 90%. Here's the science behind Theory Elite's quiz battles, streaks, and flashcards.",
    url: "https://theoryelite.com/blog/why-gamified-learning-works",
    type: "article",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Gamified Learning Works: The Science Behind Theory Elite",
    description:
      "Research shows gamification increases learning retention by up to 90%. Here's the science behind it.",
  },
  alternates: {
    canonical: "https://theoryelite.com/blog/why-gamified-learning-works",
  },
};

function TableOfContents() {
  const sections = [
    { id: "problem", label: "The Problem with Traditional Studying" },
    { id: "what-is-gamified-learning", label: "What Is Gamified Learning?" },
    { id: "science", label: "The Science: Why It Works" },
    { id: "active-recall", label: "Active Recall: The #1 Study Technique" },
    { id: "spaced-repetition", label: "Spaced Repetition: Timing Is Everything" },
    { id: "gamification-stats", label: "Gamification Statistics That Matter" },
    { id: "how-theory-elite-uses-it", label: "How Theory Elite Applies the Science" },
    { id: "vs-traditional", label: "Gamified Learning vs Traditional Methods" },
    { id: "getting-started", label: "How to Get Started" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <nav className="bg-bg-card border border-white/5 rounded-2xl p-6 mb-10">
      <p className="text-white text-sm font-bold mb-3 uppercase tracking-wider">
        Table of Contents
      </p>
      <ol className="space-y-2">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="text-text-secondary text-sm hover:text-purple-light transition-colors flex items-start gap-2"
            >
              <span className="text-text-tertiary text-xs mt-0.5 font-mono shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              {s.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default function BlogPost() {
  return (
    <>
      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Why Gamified Learning Works: The Science Behind Theory Elite",
            description:
              "Discover why gamified learning boosts retention by up to 90%. Learn the science of active recall, spaced repetition, and quiz battles.",
            image: "https://theoryelite.com/og-image.png",
            author: {
              "@type": "Organization",
              name: "Theory Elite",
              url: "https://theoryelite.com",
            },
            publisher: {
              "@type": "Organization",
              name: "Theory Elite",
              logo: {
                "@type": "ImageObject",
                url: "https://theoryelite.com/app-icon.png",
              },
            },
            datePublished: "2026-02-15",
            dateModified: "2026-02-20",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://theoryelite.com/blog/why-gamified-learning-works",
            },
            keywords:
              "gamified learning, gamification in education, active recall, spaced repetition, business quiz app, MBA study app",
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Does gamified learning actually work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Research shows gamified learning can increase retention by up to 90%, boost engagement by 150%, and improve test scores by up to 34%. These results come from combining game mechanics like points, streaks, and competition with proven techniques like active recall and spaced repetition.",
                },
              },
              {
                "@type": "Question",
                name: "What is the best gamified quiz app for business students?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Theory Elite is purpose-built for business students, combining 1v1 quiz battles, flashcards, timed quizzes, daily challenges, and a full gamification system (streaks, ranks, XP, achievements) across subjects like Marketing Management, Brand Management, Consumer Behavior, Financial Management, Operations Management, and Business Analytics.",
                },
              },
              {
                "@type": "Question",
                name: "How does active recall improve exam performance?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Active recall forces your brain to retrieve information from memory rather than passively re-reading it. Research by Karpicke and Blunt (2011) showed that students who practiced active recall retained 50% more information than those who re-read material. Quiz-based apps like Theory Elite use this principle in every study session.",
                },
              },
              {
                "@type": "Question",
                name: "Is Theory Elite free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Theory Elite is free to download with 2 full subjects, all quiz modes, battle mode, streaks, and daily challenges included. Pro unlocks all subjects, unlimited power-ups, exclusive avatars, and advanced analytics.",
                },
              },
            ],
          }),
        }}
      />

      <main className="min-h-screen bg-bg-primary">
        {/* Nav */}
        <nav className="h-16 border-b border-white/5 flex items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <a href="/" className="flex items-center gap-2">
            <Image
              src="/app-icon.png"
              alt="Theory Elite"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-bold text-white text-lg">Theory Elite</span>
          </a>
          <span className="text-text-tertiary text-sm ml-3 hidden sm:inline">
            /{" "}
            <a
              href="/blog"
              className="hover:text-white transition-colors"
            >
              Blog
            </a>{" "}
            / Article
          </span>
          <div className="flex-1" />
          <a
            href="/"
            className="text-text-secondary text-sm hover:text-white transition-colors"
          >
            Home
          </a>
        </nav>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Breadcrumbs */}
          <nav className="text-xs text-text-tertiary mb-8" aria-label="Breadcrumb">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            {" > "}
            <a href="/blog" className="hover:text-white transition-colors">
              Blog
            </a>
            {" > "}
            <span className="text-text-secondary">
              Why Gamified Learning Works
            </span>
          </nav>

          {/* Article Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-purple-primary/10 border border-purple-primary/30 text-purple-light text-xs font-semibold uppercase tracking-wider">
                Learning Science
              </span>
              <span className="text-text-tertiary text-xs">15 min read</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white leading-tight mb-5">
              Why Gamified Learning Works: The Science Behind Theory Elite
            </h1>

            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              You&apos;ve highlighted your textbook. You&apos;ve re-read your notes three
              times. You still can&apos;t remember the difference between penetration
              pricing and price skimming. Sound familiar? There&apos;s a reason
              traditional studying fails — and a growing body of research shows
              that <strong className="text-white">gamified learning</strong> is
              the fix.
            </p>

            <div className="flex items-center gap-3 text-xs text-text-tertiary">
              <Image
                src="/app-icon.png"
                alt="Theory Elite"
                width={28}
                height={28}
                className="rounded-md"
              />
              <span>
                By <strong className="text-text-secondary">Theory Elite Team</strong>
              </span>
              <span>•</span>
              <time dateTime="2026-02-15">February 15, 2026</time>
              <span>•</span>
              <span>Updated Feb 20, 2026</span>
            </div>
          </header>

          {/* Key Takeaways Box */}
          <div className="bg-gradient-to-br from-purple-primary/10 to-blue-primary/5 border border-purple-primary/20 rounded-2xl p-6 mb-10">
            <p className="text-white text-sm font-bold mb-3">Key Takeaways</p>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-success mt-0.5">&#10003;</span>
                Gamified learning can boost retention by up to <strong className="text-white">90%</strong> and test scores by <strong className="text-white">34%</strong>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-success mt-0.5">&#10003;</span>
                Active recall and spaced repetition are the two most research-backed study techniques
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-success mt-0.5">&#10003;</span>
                Competition (like 1v1 quiz battles) increases dopamine and strengthens memory encoding
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-success mt-0.5">&#10003;</span>
                Theory Elite combines all of these techniques into one free app for business students
              </li>
            </ul>
          </div>

          <TableOfContents />

          {/* Article Body */}
          <div className="prose-custom space-y-10">
            {/* Section 1 */}
            <section id="problem">
              <h2 className="text-2xl font-bold text-white mb-4">
                The Problem with Traditional Studying
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Most business students rely on passive study methods: re-reading
                textbooks, highlighting notes, watching lecture recordings on 2x
                speed. The problem? <strong className="text-white">These methods don&apos;t work.</strong>
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Research by Hermann Ebbinghaus on the &ldquo;forgetting curve&rdquo; shows
                that we forget <strong className="text-white">70% of new information within 24 hours</strong> if
                we don&apos;t actively reinforce it. After a week, that number climbs
                to 90%.
              </p>
              <p className="text-text-secondary leading-relaxed">
                So when you cram the night before your Marketing Management final,
                you&apos;re fighting biology. Your brain isn&apos;t designed to absorb and
                retain information through passive review. It needs something
                more engaging — something that forces it to <em>work</em>.
              </p>
            </section>

            {/* Section 2 */}
            <section id="what-is-gamified-learning">
              <h2 className="text-2xl font-bold text-white mb-4">
                What Is Gamified Learning?
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong className="text-white">Gamified learning</strong> is the
                application of game mechanics — points, levels, streaks,
                leaderboards, competition, rewards — to educational content. It&apos;s
                not about playing games <em>instead</em> of studying. It&apos;s about
                making the studying itself feel like a game.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Think about why you can spend 3 hours on a mobile game but can&apos;t
                focus on textbook notes for 20 minutes. Games give you:
              </p>
              <ul className="space-y-2 text-text-secondary mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-purple-light">&#8226;</span>
                  <span><strong className="text-white">Immediate feedback</strong> — you know instantly if you got it right</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-light">&#8226;</span>
                  <span><strong className="text-white">Clear progress</strong> — XP bars, levels, and streaks show how far you&apos;ve come</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-light">&#8226;</span>
                  <span><strong className="text-white">Social competition</strong> — leaderboards and battles tap into your competitive drive</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-light">&#8226;</span>
                  <span><strong className="text-white">Rewards</strong> — coins, badges, and achievements trigger dopamine release</span>
                </li>
              </ul>
              <p className="text-text-secondary leading-relaxed">
                Gamified learning takes these mechanics and layers them on top of
                real educational content. Apps like Duolingo proved this model for
                language learning. <strong className="text-white">Theory Elite
                does the same for business education.</strong>
              </p>
            </section>

            {/* Section 3 */}
            <section id="science">
              <h2 className="text-2xl font-bold text-white mb-4">
                The Science: Why Gamified Learning Works
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Gamified learning isn&apos;t a gimmick. It works because it aligns
                with how the brain actually processes, encodes, and retrieves
                information. Three core principles drive its effectiveness:
              </p>

              <h3 className="text-xl font-bold text-white mb-3 mt-6">
                1. Dopamine and the Reward Loop
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Every time you earn points, complete a streak, or win a quiz
                battle, your brain releases <strong className="text-white">dopamine</strong> — the same
                neurotransmitter responsible for motivation and pleasure.
                Dopamine doesn&apos;t just make you feel good. It&apos;s directly linked to
                memory formation.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Research published in the journal <em>Neuron</em> shows that
                dopamine enhances the consolidation of information into long-term
                memory. When studying feels rewarding, your brain literally
                encodes the information more deeply.
              </p>

              <h3 className="text-xl font-bold text-white mb-3 mt-6">
                2. The Testing Effect
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Quiz-based learning activates the &ldquo;testing effect&rdquo; — one of the
                most well-documented findings in cognitive psychology. A landmark
                study by Roediger and Karpicke (2006) found that students who
                were <strong className="text-white">tested on material retained
                50% more</strong> than students who simply re-studied the same
                content.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Every quiz, every battle, every flashcard flip in a gamified app
                is a mini-test — and that&apos;s exactly what makes it so effective.
              </p>

              <h3 className="text-xl font-bold text-white mb-3 mt-6">
                3. Social Learning and Competition
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Humans are social creatures. Research from the University of
                Colorado found that gamified training with competitive elements
                increased engagement by <strong className="text-white">60%</strong>. When you battle
                a friend in a 1v1 quiz, the stakes feel real. Your brain pays
                more attention, processes questions more carefully, and encodes
                the information more effectively.
              </p>
            </section>

            {/* Section 4 */}
            <section id="active-recall">
              <h2 className="text-2xl font-bold text-white mb-4">
                Active Recall: The #1 Study Technique
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong className="text-white">Active recall</strong> is the
                practice of actively stimulating your memory during learning. Instead
                of reading a definition and thinking &ldquo;yeah, I know that,&rdquo; active
                recall forces you to retrieve the answer from memory.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                A 2011 study by Karpicke and Blunt in <em>Science</em> found that
                active recall produced <strong className="text-white">50% better
                retention</strong> than concept mapping and significantly
                outperformed re-reading.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Here&apos;s what active recall looks like in practice:
              </p>

              {/* Comparison table */}
              <div className="bg-bg-card border border-white/5 rounded-xl overflow-hidden mb-4">
                <div className="grid grid-cols-2">
                  <div className="p-4 border-b border-r border-white/5">
                    <p className="text-red-error text-xs font-semibold uppercase tracking-wider mb-1">
                      Passive (Doesn&apos;t work)
                    </p>
                  </div>
                  <div className="p-4 border-b border-white/5">
                    <p className="text-green-success text-xs font-semibold uppercase tracking-wider mb-1">
                      Active Recall (Works)
                    </p>
                  </div>
                  {[
                    ["Re-reading textbook chapters", "Answering quiz questions from memory"],
                    ["Highlighting key terms", "Flashcard: see term, recall definition"],
                    ["Watching lecture recordings", "Battling a friend on the same topic"],
                    ["Copying notes into a notebook", "Daily challenge: 5 questions, no notes"],
                  ].map(([passive, active], i) => (
                    <div key={i} className="contents">
                      <div className="p-3 border-b border-r border-white/5 text-text-tertiary text-sm">
                        {passive}
                      </div>
                      <div className="p-3 border-b border-white/5 text-text-secondary text-sm">
                        {active}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-text-secondary leading-relaxed">
                Every feature in Theory Elite — quizzes, battles, flashcards,
                daily challenges — is built on active recall. You never passively
                consume information. You always retrieve it.
              </p>
            </section>

            {/* Section 5 */}
            <section id="spaced-repetition">
              <h2 className="text-2xl font-bold text-white mb-4">
                Spaced Repetition: Timing Is Everything
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong className="text-white">Spaced repetition</strong> is the
                technique of reviewing information at increasing intervals over
                time. Instead of cramming everything the night before, you review
                a concept on Day 1, Day 3, Day 7, Day 14, and Day 30.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Over 100 years of research — starting with Ebbinghaus in 1885 —
                confirms this approach. A 2024 meta-analysis published in the{" "}
                <em>Journal of Medical Internet Research</em> found that spaced
                digital education significantly improved knowledge retention and
                long-term recall compared to massed (crammed) learning.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                The magic of spaced repetition is that it fights the forgetting
                curve at exactly the right moments. You review information{" "}
                <em>just before</em> you&apos;re about to forget it, which
                strengthens the neural pathways and moves the knowledge into
                long-term memory.
              </p>
              <p className="text-text-secondary leading-relaxed">
                When combined with gamification, completion rates jump from{" "}
                <strong className="text-white">18% to 72%</strong> — because
                streaks, points, and rewards motivate you to actually show up and
                review at the right time.
              </p>
            </section>

            {/* Section 6 */}
            <section id="gamification-stats">
              <h2 className="text-2xl font-bold text-white mb-4">
                Gamification Statistics That Matter
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                The research is clear. Here are the numbers:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                {[
                  { stat: "Up to 90%", label: "increase in learning retention with gamified methods" },
                  { stat: "34%", label: "improvement in student test scores" },
                  { stat: "150%", label: "boost in engagement vs traditional learning" },
                  { stat: "40%", label: "higher learning outcome efficiency" },
                  { stat: "72%", label: "completion rate (vs 18% without gamification)" },
                  { stat: "$21.1B", label: "gamification market size in 2025" },
                ].map((item) => (
                  <div
                    key={item.stat}
                    className="bg-bg-card border border-white/5 rounded-xl p-4"
                  >
                    <p className="text-2xl font-black gradient-text mb-1 font-mono">
                      {item.stat}
                    </p>
                    <p className="text-text-secondary text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-text-tertiary text-xs">
                Sources: eLearning Industry, BuildEmpire, SC Training, Gamizign,
                AmplifAI, Global Growth Insights
              </p>
            </section>

            {/* Section 7 */}
            <section id="how-theory-elite-uses-it">
              <h2 className="text-2xl font-bold text-white mb-4">
                How Theory Elite Applies the Science
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Theory Elite isn&apos;t just another flashcard app. Every feature is
                designed around the research above. Here&apos;s how:
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: "⚔️",
                    title: "1v1 Quiz Battles → Active Recall + Competition",
                    desc: "Real-time battles force you to retrieve answers under pressure. The competitive element increases dopamine, which strengthens memory encoding. You're not just studying — you're competing to prove what you know.",
                  },
                  {
                    icon: "🔥",
                    title: "Daily Streaks → Spaced Repetition + Habit Formation",
                    desc: "Streaks reward you for showing up every day. This naturally creates a spaced repetition schedule. The bonus coin rewards (up to 100 coins for long streaks) ensure you don't break the chain.",
                  },
                  {
                    icon: "🃏",
                    title: "Flashcards → Active Recall in Its Purest Form",
                    desc: "See a question, recall the answer. No multiple choice crutch. Flashcards are the most direct application of active recall, and Theory Elite makes them feel engaging instead of tedious.",
                  },
                  {
                    icon: "⏱️",
                    title: "Timed Quizzes → Increased Cognitive Load",
                    desc: "A 30-second timer per question forces your brain to retrieve information faster. Research shows that desirable difficulty — not too easy, not too hard — produces the strongest learning outcomes.",
                  },
                  {
                    icon: "🌟",
                    title: "Daily Challenges → Microlearning + Consistency",
                    desc: "5 questions per day. That's it. Research shows that short, frequent study sessions outperform long, infrequent cramming sessions. Daily challenges make studying fit into any schedule.",
                  },
                  {
                    icon: "🏆",
                    title: "Ranks & Achievements → Long-Term Motivation",
                    desc: "6 competitive ranks (Bronze to Elite) and 20+ achievement badges give you long-term goals to work toward. This taps into intrinsic motivation — the desire to improve and be recognized.",
                  },
                ].map((feature) => (
                  <div
                    key={feature.title}
                    className="bg-bg-card border border-white/5 rounded-xl p-5 flex items-start gap-4"
                  >
                    <span className="text-2xl shrink-0">{feature.icon}</span>
                    <div>
                      <h3 className="text-white text-base font-bold mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8 */}
            <section id="vs-traditional">
              <h2 className="text-2xl font-bold text-white mb-4">
                Gamified Learning vs Traditional Methods
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                How does a gamified quiz app like Theory Elite compare to
                traditional study methods? Here&apos;s a side-by-side:
              </p>
              <div className="bg-bg-card border border-white/5 rounded-xl overflow-hidden mb-4">
                <div className="grid grid-cols-3 text-xs font-semibold uppercase tracking-wider">
                  <div className="p-3 border-b border-r border-white/5 text-text-tertiary">
                    Factor
                  </div>
                  <div className="p-3 border-b border-r border-white/5 text-text-tertiary">
                    Traditional
                  </div>
                  <div className="p-3 border-b border-white/5 text-purple-light">
                    Theory Elite
                  </div>
                </div>
                {[
                  ["Retention", "20-30% after 1 week", "Up to 90% with active recall"],
                  ["Engagement", "Drops after 20 mins", "150% higher with gamification"],
                  ["Motivation", "External (exam fear)", "Internal (streaks, ranks, XP)"],
                  ["Feedback", "Weeks later (exam results)", "Instant (after each question)"],
                  ["Social element", "None", "1v1 battles, leaderboards"],
                  ["Consistency", "Cramming before exams", "Daily habit via streaks"],
                  ["Study format", "Passive (reading, highlighting)", "Active (quizzes, battles, flashcards)"],
                  ["Time required", "Hours of reading per session", "5 min daily challenges"],
                  ["Progress tracking", "No visibility until exam day", "XP, levels, stats dashboard"],
                  ["Personalization", "One-size-fits-all textbook", "Choose subject, mode, and difficulty"],
                  ["Accessibility", "Desk + textbook required", "Mobile — study anywhere, anytime"],
                  ["Enjoyment", "Tedious, easy to procrastinate", "Fun — feels like a game"],
                  ["Peer learning", "Limited to study groups", "Battle anyone globally, compare ranks"],
                  ["Content quality", "Generic textbook questions", "Expert-curated, exam-focused questions"],
                  ["Cost", "$50-200+ textbooks", "Free to download"],
                ].map(([factor, trad, te], i) => (
                  <div key={i} className="contents">
                    <div className="p-3 border-b border-r border-white/5 text-white text-sm font-medium">
                      {factor}
                    </div>
                    <div className="p-3 border-b border-r border-white/5 text-text-tertiary text-sm">
                      {trad}
                    </div>
                    <div className="p-3 border-b border-white/5 text-text-secondary text-sm">
                      {te}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9 */}
            <section id="getting-started">
              <h2 className="text-2xl font-bold text-white mb-4">
                How to Get Started with Gamified Learning
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Ready to study smarter? Here&apos;s a simple plan:
              </p>
              <ol className="space-y-4 mb-4">
                {[
                  {
                    title: "Download Theory Elite",
                    desc: "It's free on the App Store. Create your account in 10 seconds.",
                  },
                  {
                    title: "Pick your subject",
                    desc: "Start with your hardest course — that's where gamification helps most.",
                  },
                  {
                    title: "Do 5 minutes per day",
                    desc: "The daily challenge takes 5 minutes. That's enough to start building a streak.",
                  },
                  {
                    title: "Battle a friend",
                    desc: "Add a classmate and challenge them. Competition accelerates learning.",
                  },
                  {
                    title: "Don't break the streak",
                    desc: "After 7 days, you'll notice you're remembering more. After 30 days, you'll be hooked.",
                  },
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-lg font-black gradient-text font-mono shrink-0 mt-0.5">
                      {i + 1}.
                    </span>
                    <div>
                      <p className="text-white font-semibold">{step.title}</p>
                      <p className="text-text-secondary text-sm">
                        {step.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* Section 10 — FAQ */}
            <section id="faq">
              <h2 className="text-2xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: "Does gamified learning actually work?",
                    a: "Yes. Research shows gamified learning can increase retention by up to 90%, boost engagement by 150%, and improve test scores by up to 34%. These results come from combining game mechanics like points, streaks, and competition with proven techniques like active recall and spaced repetition.",
                  },
                  {
                    q: "What is the best gamified quiz app for business students?",
                    a: "Theory Elite is purpose-built for business students, combining 1v1 quiz battles, flashcards, timed quizzes, daily challenges, and a full gamification system across subjects like Marketing Management, Brand Management, Consumer Behavior, Financial Management, Operations Management, and Business Analytics. It's free to download on iOS.",
                  },
                  {
                    q: "How does active recall improve exam performance?",
                    a: "Active recall forces your brain to retrieve information from memory rather than passively re-reading it. Research shows students who practiced active recall retained 50% more information than those who re-read material. Quiz-based apps use this principle in every session.",
                  },
                  {
                    q: "Is Theory Elite free?",
                    a: "Yes, Theory Elite is free to download with 2 full subjects, all quiz modes, battle mode, streaks, and daily challenges included. Pro unlocks all subjects, unlimited power-ups, exclusive avatars, and advanced analytics.",
                  },
                  {
                    q: "How is Theory Elite different from Quizlet?",
                    a: "Quizlet is a generic flashcard tool. Theory Elite is purpose-built for business students with curated expert questions, real-time 1v1 quiz battles, a full gamification system (streaks, ranks, XP, achievements), and daily challenges. Think Duolingo meets MBA prep.",
                  },
                ].map((faq) => (
                  <div key={faq.q}>
                    <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Bottom CTA */}
            <section className="bg-gradient-to-br from-purple-primary/15 to-blue-primary/10 border border-purple-primary/20 rounded-2xl p-8 text-center mt-12">
              <h2 className="text-2xl font-bold text-white mb-3">
                Stop cramming. Start studying smarter.
              </h2>
              <p className="text-text-secondary text-sm mb-6 max-w-md mx-auto">
                Join thousands of business students using gamified learning to
                ace their exams. Download Theory Elite free.
              </p>
              <a
                href="/#download"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-primary text-white text-sm font-semibold hover:shadow-lg hover:shadow-purple-primary/25 transition-all duration-200"
              >
                Download Theory Elite Free
              </a>
              <p className="text-text-tertiary text-xs mt-3">
                Free on iOS. No credit card required.
              </p>
            </section>

            {/* Related Articles */}
            <section className="mt-12">
              <h2 className="text-xl font-bold text-white mb-6">
                Related Articles
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    href: "/blog",
                    title: "Top 10 Marketing Concepts Every Business Student Must Know",
                    category: "Marketing",
                  },
                  {
                    href: "/blog",
                    title: "How to Study for MBA Exams: A Complete Guide",
                    category: "Study Tips",
                  },
                ].map((post) => (
                  <a
                    key={post.title}
                    href={post.href}
                    className="bg-bg-card border border-white/5 rounded-xl p-4 hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <span className="text-xs text-text-tertiary uppercase tracking-wider">
                      {post.category}
                    </span>
                    <p className="text-white text-sm font-semibold mt-1 group-hover:text-purple-light transition-colors">
                      {post.title}
                    </p>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}
