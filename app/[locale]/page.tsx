"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [isArabic, setIsArabic] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Premium Glassmorphic Header Menu */}
      <Navbar isArabic={isArabic} setIsArabic={setIsArabic} />

      {/* Main Core Editorial Layout */}
      <main className="flex-1">
        {/* Kinetic Hero Section */}
        <Hero isArabic={isArabic} />

        {/* Dynamic Philosophy Overview */}
        <Overview isArabic={isArabic} />

        {/* Detailed Services Ledger */}
        <Services isArabic={isArabic} />

        {/* Landmark Projects Showcase */}
        <Projects isArabic={isArabic} />

        {/* Multi-step Project Planner Contact Form */}
        <Contact isArabic={isArabic} />
      </main>

      {/* Elegant Footer */}
      <Footer isArabic={isArabic} />
    </div>
  );
}
