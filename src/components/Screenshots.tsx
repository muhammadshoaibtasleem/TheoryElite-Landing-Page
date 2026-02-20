"use client";

import { motion } from "framer-motion";

const screens = [
  {
    title: "Library",
    content: (
      <div className="p-3 pt-8 h-full">
        <div className="text-center mb-3">
          <img src="/app-icon.png" alt="Theory Elite" width={32} height={32} className="rounded-lg mx-auto mb-1" />
          <p className="text-white text-[10px] font-bold">Your Library</p>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {[
            { icon: "📊", name: "Marketing", color: "from-purple-500/30 to-purple-500/10" },
            { icon: "🏷️", name: "Branding", color: "from-blue-500/30 to-blue-500/10" },
            { icon: "🧠", name: "Consumer", color: "from-pink-500/30 to-pink-500/10" },
            { icon: "💰", name: "Finance", color: "from-green-500/30 to-green-500/10" },
          ].map((s) => (
            <div key={s.name} className={`bg-gradient-to-br ${s.color} rounded-lg p-2 border border-white/5`}>
              <span className="text-base">{s.icon}</span>
              <p className="text-white text-[8px] font-semibold mt-0.5">{s.name}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Quiz",
    content: (
      <div className="p-3 pt-8 h-full">
        <p className="text-white text-[10px] font-bold text-center mb-2">Marketing Quiz</p>
        <div className="bg-bg-card rounded-lg p-2 mb-2 border border-white/5">
          <p className="text-[8px] text-text-tertiary">Q 7/15</p>
          <p className="text-white text-[9px] mt-1">The 4Ps of marketing include Product, Price, Place, and...</p>
        </div>
        {["Promotion", "People", "Process", "Position"].map((o, i) => (
          <div key={o} className={`rounded-md p-1.5 text-[8px] mb-1 border ${i === 0 ? "border-green-success/40 bg-green-success/10 text-green-success" : "border-white/5 bg-white/[0.02] text-text-secondary"}`}>
            {o}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Battle",
    content: (
      <div className="p-3 pt-8 h-full">
        <p className="text-white text-[10px] font-bold text-center mb-3">⚔️ Live Battle</p>
        <div className="flex justify-between items-center mb-3 px-1">
          <div className="text-center">
            <div className="w-8 h-8 rounded-full bg-purple-primary/30 mx-auto mb-0.5 flex items-center justify-center text-[10px]">👤</div>
            <p className="text-white text-[7px] font-semibold">You</p>
            <p className="text-green-success text-[10px] font-bold font-mono">4</p>
          </div>
          <span className="text-gold-primary font-bold text-sm font-mono">VS</span>
          <div className="text-center">
            <div className="w-8 h-8 rounded-full bg-blue-primary/30 mx-auto mb-0.5 flex items-center justify-center text-[10px]">👤</div>
            <p className="text-white text-[7px] font-semibold">Alex</p>
            <p className="text-red-error text-[10px] font-bold font-mono">3</p>
          </div>
        </div>
        <div className="bg-bg-card rounded-lg p-2 border border-white/5">
          <p className="text-white text-[8px]">Who created the Marketing Mix?</p>
        </div>
      </div>
    ),
  },
  {
    title: "Flashcards",
    content: (
      <div className="p-3 pt-8 h-full flex flex-col items-center justify-center">
        <p className="text-text-tertiary text-[8px] mb-2">Swipe to reveal</p>
        <div className="w-full bg-gradient-to-br from-purple-primary/20 to-blue-primary/20 rounded-xl p-4 border border-white/10 text-center">
          <p className="text-white text-[10px] font-semibold leading-relaxed">
            What is the difference between a product line and a product mix?
          </p>
        </div>
        <div className="flex gap-8 mt-4">
          <span className="text-red-error text-lg">✕</span>
          <span className="text-green-success text-lg">✓</span>
        </div>
      </div>
    ),
  },
  {
    title: "Achievements",
    content: (
      <div className="p-3 pt-8 h-full">
        <p className="text-white text-[10px] font-bold text-center mb-3">🏆 Achievements</p>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { icon: "🔥", name: "7 Day Streak" },
            { icon: "⚔️", name: "First Blood" },
            { icon: "🎯", name: "Sharpshooter" },
            { icon: "📚", name: "Bookworm" },
            { icon: "💎", name: "Diamond" },
            { icon: "🌟", name: "Star Student" },
          ].map((a) => (
            <div key={a.name} className="bg-white/[0.03] rounded-lg p-1.5 text-center border border-white/5">
              <span className="text-base">{a.icon}</span>
              <p className="text-[7px] text-text-tertiary mt-0.5">{a.name}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Stats",
    content: (
      <div className="p-3 pt-8 h-full">
        <p className="text-white text-[10px] font-bold text-center mb-3">📈 Your Stats</p>
        <div className="space-y-2">
          {[
            { label: "Quizzes Completed", value: "142", color: "text-purple-light" },
            { label: "Win Rate", value: "73%", color: "text-green-success" },
            { label: "Current Streak", value: "7 🔥", color: "text-gold-primary" },
            { label: "Total XP", value: "12,450", color: "text-blue-primary" },
            { label: "Rank", value: "Gold", color: "text-gold-primary" },
          ].map((s) => (
            <div key={s.label} className="flex justify-between items-center bg-white/[0.02] rounded-lg p-2 border border-white/5">
              <span className="text-text-secondary text-[8px]">{s.label}</span>
              <span className={`${s.color} text-[10px] font-bold font-mono`}>{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function Screenshots() {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.08),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-purple-primary text-xs font-semibold uppercase tracking-widest mb-3">
            SEE IT IN ACTION
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Beautiful. Addictive. Effective.
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory justify-start lg:justify-center">
          {screens.map((screen, i) => (
            <motion.div
              key={screen.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="snap-start shrink-0"
            >
              <div className="w-[180px] h-[340px] rounded-[28px] border-[4px] border-white/10 bg-bg-primary shadow-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                {screen.content}
              </div>
              <p className="text-text-tertiary text-xs text-center mt-3 font-medium">
                {screen.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
