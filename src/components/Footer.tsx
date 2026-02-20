"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-bg-darker border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1 — Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/app-icon.png" alt="Theory Elite" width={32} height={32} className="rounded-lg" />
              <span className="font-bold text-white text-lg">Theory Elite</span>
            </div>
            <p className="text-text-secondary text-sm mb-4 max-w-xs">
              Master business theory through quiz battles.
            </p>
          </div>

          {/* Column 2 — Product */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Product</h4>
            <ul className="space-y-2.5">
              {["Features", "Subjects", "Pricing", "Download"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-text-secondary text-sm hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Resources */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Resources</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="/blog" className="text-text-secondary text-sm hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="mailto:support@theoryelite.com" className="text-text-secondary text-sm hover:text-white transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-text-secondary text-sm hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-text-secondary text-sm hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 — Company */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5">
              {["About", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-secondary text-sm hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-text-tertiary text-xs">
            &copy; 2026 Theory Students. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
