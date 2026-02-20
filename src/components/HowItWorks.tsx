"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: "📱",
    title: "Download the App",
    description: "Free on the App Store. Create your account in 10 seconds.",
  },
  {
    number: "02",
    icon: "📚",
    title: "Pick a Subject",
    description: "Choose from our growing range of business courses and pick your study mode.",
  },
  {
    number: "03",
    icon: "⚔️",
    title: "Start Battling",
    description: "Challenge friends or study solo. Earn XP, climb ranks.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-24 bg-bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-primary text-xs font-semibold uppercase tracking-widest mb-3">
            HOW IT WORKS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Start studying in under 60 seconds
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting lines — desktop only */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px border-t-2 border-dashed border-white/10" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center relative"
            >
              {/* Number */}
              <div className="text-5xl lg:text-6xl font-black gradient-text mb-4 font-mono">
                {step.number}
              </div>
              {/* Icon */}
              <div className="text-4xl mb-4">{step.icon}</div>
              {/* Title */}
              <h3 className="text-white text-xl font-bold mb-2">{step.title}</h3>
              {/* Description */}
              <p className="text-text-secondary text-base max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
