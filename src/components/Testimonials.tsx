"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Theory Elite got me through my marketing final. The battle mode with my study group made revision actually fun for once.",
    name: "Sarah K.",
    title: "Marketing Major, University of Manchester",
    initials: "SK",
    color: "bg-purple-primary/30",
  },
  {
    quote:
      "I've tried Quizlet, Anki, and every other study app. This is the only one that keeps me coming back every day. The streaks are addictive.",
    name: "James L.",
    title: "MBA Student, London Business School",
    initials: "JL",
    color: "bg-blue-primary/30",
  },
  {
    quote:
      "The daily challenges are perfect for my commute. 5 questions, 5 minutes, and I feel like I actually studied.",
    name: "Priya M.",
    title: "BBA Student, Delhi University",
    initials: "PM",
    color: "bg-green-500/30",
  },
  {
    quote:
      "My roommate and I battle each other every night before bed. My GPA has never been higher. This app is a game changer.",
    name: "Marcus T.",
    title: "Finance Major, NYU Stern",
    initials: "MT",
    color: "bg-gold-primary/30",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-purple-primary text-xs font-semibold uppercase tracking-widest mb-3">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Loved by business students
          </h2>
        </motion.div>

        {/* Cards — horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 min-w-[300px] lg:min-w-0 snap-start hover:-translate-y-1 hover:border-white/10 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 text-gold-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              {/* Quote */}
              <p className="text-white text-sm italic leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-text-tertiary text-xs">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
