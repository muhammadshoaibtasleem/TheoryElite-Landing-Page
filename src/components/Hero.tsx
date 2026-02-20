"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero({
  onWaitlistClick,
}: {
  onWaitlistClick: () => void;
}) {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-x-clip">
      {/* Background gradient glows */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-purple-primary/8 blur-[180px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/2 w-[500px] h-[500px] rounded-full bg-blue-primary/6 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-purple-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0">
        <div className="grid lg:grid-cols-[1fr,auto] gap-12 lg:gap-16 items-center">
          {/* Left Column — Text */}
          <div className="flex flex-col gap-5 lg:gap-6 max-w-xl">
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-primary/30 bg-purple-primary/10 text-purple-light text-xs font-semibold uppercase tracking-wider">
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                #1 Business Quiz App
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-1">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-[56px] font-black leading-[1.08] tracking-tight"
              >
                Master Business Theory.
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="text-4xl sm:text-5xl lg:text-[56px] font-black leading-[1.08] tracking-tight gradient-text pb-1"
              >
                Battle Your Friends.
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-[56px] font-black leading-[1.08] tracking-tight"
              >
                Ace Your Exams.
              </motion.h1>
            </div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-text-secondary text-base sm:text-lg leading-relaxed"
            >
              The gamified quiz app that makes studying business addictive.
              Real-time 1v1 battles. Daily challenges. Free to download.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 bg-white text-black rounded-xl font-semibold text-sm hover:scale-[1.02] hover:shadow-xl hover:shadow-white/10 transition-all duration-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-none opacity-60">
                    Download on the
                  </div>
                  <div className="text-[15px] leading-tight font-semibold">
                    App Store
                  </div>
                </div>
              </a>
              <button
                onClick={onWaitlistClick}
                className="inline-flex items-center px-5 py-3 rounded-xl border border-white/15 text-white font-medium text-sm hover:bg-white/5 hover:border-white/25 transition-all duration-200"
              >
                Join Android Waitlist
              </button>
            </motion.div>

            {/* Small text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-text-tertiary text-xs"
            >
              Free to download. No credit card required.
            </motion.p>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-wrap items-center gap-3 text-sm text-text-secondary"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-3.5 h-3.5 text-gold-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs">4.9 Rating</span>
              <span className="text-text-tertiary/50">•</span>
              <span className="text-xs">1,000+ Students</span>
              <span className="text-text-tertiary/50">•</span>
              <span className="text-xs">Multiple Subjects</span>
            </motion.div>
          </div>

          {/* Right Column — Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: "spring",
              stiffness: 80,
              damping: 20,
            }}
            className="relative flex justify-center lg:py-8 lg:px-8"
          >
            {/* Glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-purple-primary/15 blur-[100px] pointer-events-none" />

            <div className="relative lg:mx-8">
              {/* iPhone Frame */}
              <div className="animate-float relative z-10">
                <div className="relative w-[270px] sm:w-[290px] rounded-[44px] bg-black p-[10px] shadow-[0_0_60px_rgba(124,58,237,0.15),0_25px_50px_rgba(0,0,0,0.5)]">
                  {/* Bezel shine effect */}
                  <div className="absolute inset-0 rounded-[44px] bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none z-20" />

                  {/* Dynamic Island */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-30" />

                  {/* Screen */}
                  <div className="relative rounded-[34px] overflow-hidden">
                    <Image
                      src="/home-screen.jpg"
                      alt="Theory Elite App — Study, Battle, Missions, and Progress"
                      width={621}
                      height={1344}
                      className="w-full h-auto block"
                      priority
                      quality={90}
                    />
                  </div>

                  {/* Bottom bar indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-white/20 rounded-full z-30" />
                </div>
              </div>

              {/* Floating Elements — Desktop only */}
              <motion.div
                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="hidden lg:block absolute -top-2 -left-24 z-20"
              >
                <div className="animate-float glass rounded-2xl px-4 py-2.5 flex items-center gap-2.5 shadow-lg shadow-black/20">
                  <span className="text-xl">🔥</span>
                  <div>
                    <p className="text-white text-xs font-bold leading-none">
                      7 Day Streak!
                    </p>
                    <p className="text-text-tertiary text-[10px] mt-0.5">
                      Keep it going
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="hidden lg:block absolute top-20 -right-20 z-20"
              >
                <div className="animate-float-slow glass rounded-2xl px-4 py-2.5 flex items-center gap-2.5 shadow-lg shadow-black/20">
                  <span className="text-xl">🏆</span>
                  <div>
                    <p className="text-white text-xs font-bold leading-none">
                      Gold Rank
                    </p>
                    <p className="text-text-tertiary text-[10px] mt-0.5">
                      Top 10%
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="hidden lg:block absolute bottom-32 -left-28 z-20"
              >
                <div className="animate-float-slow glass rounded-2xl px-4 py-2.5 flex items-center gap-2.5 shadow-lg shadow-black/20">
                  <div className="w-8 h-8 rounded-full bg-gold-primary/20 flex items-center justify-center">
                    <span className="text-gold-primary text-sm font-bold">$</span>
                  </div>
                  <div>
                    <p className="text-gold-primary text-xs font-bold leading-none">
                      +50 Coins
                    </p>
                    <p className="text-text-tertiary text-[10px] mt-0.5">
                      Quiz reward
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="hidden lg:block absolute bottom-12 -right-24 z-20"
              >
                <div className="animate-float glass rounded-2xl px-4 py-2.5 flex items-center gap-2.5 shadow-lg shadow-black/20">
                  <div className="w-8 h-8 rounded-full bg-green-success/20 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-success"
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
                  </div>
                  <div>
                    <p className="text-green-success text-xs font-bold leading-none">
                      Perfect Score!
                    </p>
                    <p className="text-text-tertiary text-[10px] mt-0.5">
                      10/10 correct
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
