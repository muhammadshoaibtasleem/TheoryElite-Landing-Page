"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Is Theory Elite really free?",
    a: "Yes! Theory Elite is free to download with 2 full subjects (Marketing Management and Brand Management), all quiz modes, battle mode, streaks, and daily challenges included. Pro unlocks all subjects, unlimited power-ups, exclusive avatars, and advanced analytics.",
  },
  {
    q: "What subjects are available?",
    a: "Currently we offer Marketing Management, Brand Management, Consumer Behavior, Financial Management, Operations Management, and Business Analytics. We're adding new subjects regularly — Accounting, Economics, and Business Law are coming soon.",
  },
  {
    q: "Can I play with friends?",
    a: "Absolutely! You can add friends by username, challenge them to 1v1 quiz battles, compare scores on leaderboards, and climb through 6 competitive ranks together.",
  },
  {
    q: "Is there an Android version?",
    a: "Not yet, but it's coming soon! Join our waitlist to be the first to know when Theory Elite launches on Android.",
  },
  {
    q: "Can I use it offline?",
    a: "You need an internet connection for battles and leaderboards, but we're working on offline mode for solo quizzes in a future update.",
  },
  {
    q: "How is this different from Quizlet?",
    a: "Quizlet is a generic flashcard tool. Theory Elite is purpose-built for business students with curated expert questions, real-time 1v1 quiz battles, a full gamification system (streaks, ranks, XP, achievements), and daily challenges. Think Duolingo meets MBA prep.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-purple-primary text-xs font-semibold uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Got questions?
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border-b border-white/5"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="text-white text-base font-medium pr-4 group-hover:text-purple-light transition-colors">
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 text-text-tertiary shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-text-secondary text-sm leading-relaxed pb-5">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
