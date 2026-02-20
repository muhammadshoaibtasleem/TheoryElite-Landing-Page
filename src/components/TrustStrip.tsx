"use client";

import { motion } from "framer-motion";

export default function TrustStrip() {
  return (
    <section className="relative bg-bg-strip border-y border-white/[0.03] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
        >
          <p className="text-text-tertiary text-sm font-medium">
            Trusted by business students worldwide
          </p>
          <div className="flex items-center gap-6 sm:gap-10">
            {/* Badge: Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-gold-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white text-sm font-semibold">4.9 Rating</span>
            </div>

            <div className="w-px h-6 bg-white/10 hidden sm:block" />

            {/* Badge: Education */}
            <div className="flex items-center gap-2">
              <span className="text-lg">📚</span>
              <span className="text-white text-sm font-semibold">
                Featured in Education
              </span>
            </div>

            <div className="w-px h-6 bg-white/10 hidden sm:block" />

            {/* Badge: Students */}
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-lg">🎓</span>
              <span className="text-white text-sm font-semibold">
                1,000+ Students
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
