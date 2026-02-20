"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Screenshots from "@/components/Screenshots";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import EmailModal from "@/components/EmailModal";
import CookieConsent from "@/components/CookieConsent";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <Hero onWaitlistClick={() => setModalOpen(true)} />
        <TrustStrip />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Screenshots />
        <Pricing />
        <FAQ />
        <FinalCTA onWaitlistClick={() => setModalOpen(true)} />
      </main>
      <Footer />
      <EmailModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <CookieConsent />
    </>
  );
}
