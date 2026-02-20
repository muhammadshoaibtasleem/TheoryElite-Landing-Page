"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EmailModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    try {
      // Google Sheets Apps Script endpoint
      // Replace this URL with your own (see GOOGLE_SHEETS_SETUP.md)
      const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";

      if (GOOGLE_SCRIPT_URL) {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            timestamp: new Date().toISOString(),
            source: "android-waitlist",
          }),
        });
      }
    } catch {
      // Silently fail — still show success to user
    }

    setLoading(false);
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    // Reset state after animation
    setTimeout(() => {
      setEmail("");
      setSubmitted(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative glass rounded-2xl p-8 max-w-md w-full"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-text-tertiary hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!submitted ? (
              <>
                {/* Android icon */}
                <div className="text-4xl text-center mb-4">🤖</div>

                <h3 className="text-white text-2xl font-bold text-center mb-2">
                  Android is coming soon!
                </h3>
                <p className="text-text-secondary text-sm text-center mb-6">
                  Drop your email and we&apos;ll notify you the moment Theory
                  Elite hits Google Play.
                </p>

                <form onSubmit={handleSubmit} className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 px-4 py-3 rounded-xl bg-bg-primary border border-white/10 text-white text-sm placeholder:text-text-tertiary focus:outline-none focus:border-purple-primary focus:ring-1 focus:ring-purple-primary transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-5 py-3 rounded-xl bg-gradient-primary text-white text-sm font-semibold hover:shadow-lg hover:shadow-purple-primary/25 transition-all duration-200 disabled:opacity-70 whitespace-nowrap"
                  >
                    {loading ? "..." : "Notify Me →"}
                  </button>
                </form>

                <p className="text-text-tertiary text-xs text-center mt-4">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-white text-xl font-bold mb-2">
                  You&apos;re on the list!
                </h3>
                <p className="text-text-secondary text-sm">
                  We&apos;ll email you at launch. 🚀
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
