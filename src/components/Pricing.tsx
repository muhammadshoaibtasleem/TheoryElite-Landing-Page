"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: [
      "2 subjects",
      "All quiz modes",
      "Daily challenge",
      "Battle mode",
      "Streaks & XP",
    ],
    cta: "Download Free",
    highlighted: false,
    badge: null,
    style: {
      card: "border-white/5",
      button:
        "border border-white/20 text-white hover:bg-white/5",
    },
  },
  {
    name: "Pro",
    price: "$4.99",
    period: "/mo",
    features: [
      "All subjects",
      "Unlimited power-ups",
      "Exclusive avatars",
      "Advanced analytics",
      "Everything in Free",
    ],
    cta: "Start 7-Day Trial",
    highlighted: true,
    badge: "MOST POPULAR",
    style: {
      card: "border-purple-primary/50 scale-[1.03] shadow-xl shadow-purple-primary/10",
      button:
        "bg-gradient-primary text-white hover:shadow-lg hover:shadow-purple-primary/25",
    },
  },
  {
    name: "Pro Annual",
    price: "$29.99",
    period: "/year",
    features: [
      "Everything in Pro",
      "Save 50%",
      "Best value",
      "$2.50/mo effective",
      "Priority support",
    ],
    cta: "Start 7-Day Trial",
    highlighted: false,
    badge: "SAVE 50%",
    style: {
      card: "border-gold-primary/30",
      button:
        "bg-gradient-gold text-black font-bold hover:shadow-lg hover:shadow-gold-primary/25",
    },
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28">
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
            PRICING
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Start free. Upgrade when you&apos;re ready.
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Theory Elite is free to download with 2 subjects included. Go Pro
            for the full experience.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl border bg-bg-card p-6 lg:p-8 ${plan.style.card} transition-all duration-300`}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    plan.badge === "MOST POPULAR"
                      ? "bg-gradient-primary text-white"
                      : "bg-gradient-gold text-black"
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <h3 className="text-white text-xl font-bold mb-2 mt-2">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-white text-4xl font-black font-mono">
                  {plan.price}
                </span>
                <span className="text-text-tertiary text-sm">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <svg
                      className="w-4 h-4 text-green-success shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-text-secondary">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://apps.apple.com/au/app/theory-elite-mba-business/id6759365393"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02] ${plan.style.button}`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-text-tertiary text-xs text-center mt-8">
          All purchases happen in-app. Prices may vary by region.
        </p>
      </div>
    </section>
  );
}
