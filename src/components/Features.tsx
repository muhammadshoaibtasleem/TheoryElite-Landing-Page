"use client";

import { motion } from "framer-motion";

function FeaturePhone({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[260px] sm:w-[280px] h-[500px] sm:h-[540px] rounded-[36px] border-[5px] border-white/10 bg-bg-card shadow-xl overflow-hidden mx-auto">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-xl z-10" />
      <div className="w-full h-full bg-bg-primary p-4 pt-8 relative">
        {children}
      </div>
    </div>
  );
}

const features = [
  {
    badge: "REAL-TIME BATTLES",
    badgeColor: "bg-purple-primary/10 border-purple-primary/30 text-purple-light",
    headline: "Challenge anyone. Anywhere.",
    description:
      "Go head-to-head with classmates in real-time 1v1 quiz battles. Wager coins, climb through 6 ranks from Bronze to Elite, and prove you're the smartest in the room.",
    bullets: [
      { icon: "⚡", text: "Quick Battle, Best of 3, Marathon & Accuracy modes" },
      { icon: "🏆", text: "6 competitive ranks: Bronze → Elite" },
      { icon: "🪙", text: "Wager coins for higher stakes" },
      { icon: "📊", text: "Global leaderboards" },
    ],
    imagePosition: "right" as const,
    phone: (
      <FeaturePhone>
        <div className="text-center mb-3">
          <p className="text-white text-xs font-bold">⚔️ Quiz Battle</p>
          <p className="text-text-tertiary text-[10px]">Marketing Management</p>
        </div>
        <div className="flex justify-between items-center mb-4 px-2">
          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-purple-primary/30 mx-auto mb-1 flex items-center justify-center text-sm">
              👤
            </div>
            <p className="text-white text-[10px] font-semibold">You</p>
            <p className="text-green-success text-xs font-bold font-mono">3</p>
          </div>
          <div className="text-gold-primary font-bold text-lg font-mono">VS</div>
          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-blue-primary/30 mx-auto mb-1 flex items-center justify-center text-sm">
              👤
            </div>
            <p className="text-white text-[10px] font-semibold">Sarah K.</p>
            <p className="text-red-error text-xs font-bold font-mono">2</p>
          </div>
        </div>
        <div className="bg-bg-card rounded-xl p-3 mb-3 border border-white/5">
          <p className="text-text-secondary text-[10px] mb-2">Question 5 of 5</p>
          <p className="text-white text-xs font-medium leading-relaxed">
            Which pricing strategy involves setting a low initial price to gain market share?
          </p>
        </div>
        <div className="space-y-2">
          {["Penetration pricing", "Price skimming", "Premium pricing", "Bundle pricing"].map(
            (opt, i) => (
              <div
                key={opt}
                className={`rounded-lg p-2.5 text-[11px] font-medium border ${
                  i === 0
                    ? "border-green-success/50 bg-green-success/10 text-green-success"
                    : "border-white/5 bg-white/[0.02] text-text-secondary"
                }`}
              >
                {opt}
              </div>
            )
          )}
        </div>
      </FeaturePhone>
    ),
  },
  {
    badge: "STUDY MODES",
    badgeColor: "bg-blue-primary/10 border-blue-primary/30 text-blue-primary",
    headline: "Your way. Your pace.",
    description:
      "Whether you've got 2 minutes or 2 hours, there's a mode for you. Standard quizzes, timed challenges, flashcards, or daily challenges — pick what works and start studying.",
    bullets: [
      { icon: "📝", text: "Standard Quizzes — Classic Q&A format" },
      { icon: "⏱️", text: "Timed Mode — 30 seconds per question" },
      { icon: "🃏", text: "Flashcards — Swipe through key concepts" },
      { icon: "🌟", text: "Daily Challenge — 5 fresh questions every day" },
    ],
    imagePosition: "left" as const,
    phone: (
      <FeaturePhone>
        <div className="text-center mb-3">
          <p className="text-white text-xs font-bold">⏱️ Timed Quiz</p>
          <p className="text-text-tertiary text-[10px]">Brand Management</p>
        </div>
        {/* Timer */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full border-[3px] border-gold-primary flex items-center justify-center">
            <span className="text-gold-primary font-bold text-xl font-mono">18</span>
          </div>
        </div>
        <div className="bg-bg-card rounded-xl p-3 mb-3 border border-white/5">
          <p className="text-text-secondary text-[10px] mb-1">Q 3/10</p>
          <p className="text-white text-xs font-medium leading-relaxed">
            Brand equity refers to the value a brand adds to a product beyond its functional benefits. True or False?
          </p>
        </div>
        <div className="space-y-2">
          {["True", "False"].map((opt) => (
            <div
              key={opt}
              className="rounded-lg p-3 text-[11px] font-medium border border-white/5 bg-white/[0.02] text-text-secondary text-center"
            >
              {opt}
            </div>
          ))}
        </div>
        {/* Progress bar */}
        <div className="mt-4">
          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div className="w-[30%] h-full bg-gradient-primary rounded-full" />
          </div>
          <p className="text-text-tertiary text-[9px] mt-1 text-center">3 of 10 answered</p>
        </div>
      </FeaturePhone>
    ),
  },
  {
    badge: "GAMIFICATION",
    badgeColor: "bg-gold-primary/10 border-gold-primary/30 text-gold-primary",
    headline: "Study streaks that actually stick.",
    description:
      "Theory Elite makes studying a habit you actually want to keep. Build your streak, complete daily missions, earn coins and XP, and unlock 20+ achievement badges.",
    bullets: [
      { icon: "🔥", text: "Daily streaks with bonus rewards (up to 100 coins)" },
      { icon: "🎯", text: "Daily missions — new goals every day" },
      { icon: "⭐", text: "20+ achievements to unlock" },
      { icon: "💰", text: "Earn coins to spend on power-ups and avatars" },
    ],
    imagePosition: "right" as const,
    phone: (
      <FeaturePhone>
        <div className="text-center mb-3">
          <span className="text-3xl">🔥</span>
          <p className="text-white text-sm font-bold mt-1">7 Day Streak!</p>
          <p className="text-text-tertiary text-[10px]">Keep it up tomorrow</p>
        </div>
        {/* Streak days */}
        <div className="flex justify-center gap-2 mb-4">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <div key={i} className="text-center">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-semibold ${
                  i < 7
                    ? "bg-gold-primary/20 text-gold-primary border border-gold-primary/30"
                    : "bg-white/5 text-text-tertiary border border-white/5"
                }`}
              >
                {i < 7 ? "✓" : d}
              </div>
              <p className="text-text-tertiary text-[8px] mt-0.5">{d}</p>
            </div>
          ))}
        </div>
        {/* Missions */}
        <p className="text-white text-[11px] font-semibold mb-2">Daily Missions</p>
        <div className="space-y-2">
          {[
            { text: "Complete 5 quizzes", progress: "5/5", done: true },
            { text: "Win a battle", progress: "1/1", done: true },
            { text: "Get 80%+ accuracy", progress: "0/1", done: false },
          ].map((m) => (
            <div
              key={m.text}
              className="flex items-center gap-2 bg-white/[0.02] rounded-lg p-2 border border-white/5"
            >
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                  m.done
                    ? "bg-green-success/20 text-green-success"
                    : "bg-white/5 text-text-tertiary"
                }`}
              >
                {m.done ? "✓" : "○"}
              </div>
              <span className={`text-[10px] flex-1 ${m.done ? "text-text-secondary" : "text-white"}`}>
                {m.text}
              </span>
              <span className="text-text-tertiary text-[9px] font-mono">{m.progress}</span>
            </div>
          ))}
        </div>
        {/* XP bar */}
        <div className="mt-3 p-2 bg-purple-primary/10 rounded-lg border border-purple-primary/20">
          <div className="flex justify-between text-[9px] mb-1">
            <span className="text-purple-light font-semibold">Level 12</span>
            <span className="text-text-tertiary">2,450 / 3,000 XP</span>
          </div>
          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div className="w-[82%] h-full bg-gradient-primary rounded-full" />
          </div>
        </div>
      </FeaturePhone>
    ),
  },
];

function SubjectCards() {
  const subjects = [
    { icon: "📊", name: "Marketing Management", count: "250+", gradient: "from-purple-primary/20 to-purple-primary/5", border: "border-purple-primary/20" },
    { icon: "🏷️", name: "Brand Management", count: "200+", gradient: "from-blue-primary/20 to-blue-primary/5", border: "border-blue-primary/20" },
    { icon: "🧠", name: "Consumer Behavior", count: "200+", gradient: "from-pink-500/20 to-pink-500/5", border: "border-pink-500/20" },
    { icon: "💰", name: "Financial Management", count: "200+", gradient: "from-green-500/20 to-green-500/5", border: "border-green-500/20" },
    { icon: "⚙️", name: "Operations Management", count: "200+", gradient: "from-orange-500/20 to-orange-500/5", border: "border-orange-500/20" },
    { icon: "📈", name: "Business Analytics", count: "200+", gradient: "from-cyan-500/20 to-cyan-500/5", border: "border-cyan-500/20" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg">
      {subjects.map((s, i) => (
        <motion.div
          key={s.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className={`bg-gradient-to-br ${s.gradient} rounded-2xl p-4 border ${s.border} hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default`}
        >
          <span className="text-2xl block mb-2">{s.icon}</span>
          <p className="text-white text-sm font-bold leading-tight">{s.name}</p>
          <p className="text-text-tertiary text-xs mt-1">{s.count} questions</p>
        </motion.div>
      ))}
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <p className="text-purple-primary text-xs font-semibold uppercase tracking-widest mb-3">
            FEATURES
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Everything you need to ace your exams
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Study modes designed to help you learn faster, remember longer,
            and score higher.
          </p>
        </motion.div>

        {/* Feature Rows */}
        <div className="space-y-24 lg:space-y-32">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${
                feature.imagePosition === "left"
                  ? "lg:flex-row-reverse"
                  : "lg:flex-row"
              } items-center gap-12 lg:gap-20`}
            >
              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: feature.imagePosition === "right" ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1"
              >
                <span
                  className={`inline-block px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wider mb-4 ${feature.badgeColor}`}
                >
                  {feature.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                  {feature.headline}
                </h3>
                <p className="text-text-secondary text-base leading-relaxed mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.bullets.map((b) => (
                    <li key={b.text} className="flex items-start gap-3">
                      <span className="text-lg mt-0.5 shrink-0">{b.icon}</span>
                      <span className="text-text-secondary text-sm">{b.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, x: feature.imagePosition === "right" ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="flex-1 flex justify-center"
              >
                {feature.phone}
              </motion.div>
            </div>
          ))}

          {/* Feature Row 4: Subjects Grid */}
          <div
            id="subjects"
            className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20"
          >
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <span className="inline-block px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wider mb-4 bg-green-success/10 border-green-success/30 text-green-success">
                SUBJECTS
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Multiple subjects. Hundreds of questions.
              </h3>
              <p className="text-text-secondary text-base leading-relaxed">
                Every major business course covered with expertly crafted
                questions. New subjects added regularly.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex-1 flex justify-center"
            >
              <SubjectCards />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
