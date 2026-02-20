"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Subjects", href: "#subjects" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(10,10,20,0.8)] backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Image src="/app-icon.png" alt="Theory Elite" width={32} height={32} className="rounded-lg" />
          <span className="font-bold text-white text-lg">Theory Elite</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-text-secondary hover:text-white text-sm font-medium transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#download"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-gradient-primary text-white text-sm font-semibold hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-primary/25 transition-all duration-200"
        >
          Download Free
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[rgba(10,10,20,0.95)] backdrop-blur-xl border-b border-white/5"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-text-secondary hover:text-white text-base font-medium transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#download"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center px-4 py-3 rounded-full bg-gradient-primary text-white text-sm font-semibold mt-2"
              >
                Download Free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
