"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay so it doesn't compete with page load
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-[90] glass rounded-2xl p-5"
        >
          <p className="text-white text-sm font-medium mb-1">
            We use cookies
          </p>
          <p className="text-text-secondary text-xs leading-relaxed mb-4">
            We use cookies to improve your experience and analyze site traffic.
            By clicking &ldquo;Accept&rdquo;, you consent to our use of cookies.
            See our{" "}
            <a
              href="/privacy"
              className="text-purple-light underline hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            .
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={accept}
              className="px-4 py-2 rounded-lg bg-gradient-primary text-white text-xs font-semibold hover:shadow-lg hover:shadow-purple-primary/25 transition-all duration-200"
            >
              Accept
            </button>
            <button
              onClick={decline}
              className="px-4 py-2 rounded-lg border border-white/10 text-text-secondary text-xs font-medium hover:text-white hover:border-white/20 transition-all duration-200"
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
