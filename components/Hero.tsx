"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

interface HeroProps {
  isArabic: boolean;
}

export default function Hero({ isArabic }: HeroProps) {
  const heroImages = ["/hero1.png", "/hero2.png", "/hero3.png"];
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream select-none py-20"
      style={{ direction: isArabic ? "rtl" : "ltr" }}
    >
      {/* Dynamic Background Image */}
      <AnimatePresence>
        <motion.div
          key={bgIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImages[bgIndex]})` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 z-0 bg-cream/80" />

      {/* Tilted Floating Monolith Elements in background */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [12, 14, 12],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-10%] top-[10%] w-[350px] h-[600px] border border-accent/15 bg-accent/2 hidden lg:block rounded-3xl"
        style={{ transform: "rotate(12deg)" }}
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [-20, -18, -20],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-5%] bottom-[-10%] w-[300px] h-[500px] border border-primary/20 bg-primary/2 hidden lg:block rounded-3xl"
        style={{ transform: "rotate(-20deg)" }}
      />

      {/* Main Hero Container */}
      <div className="max-w-5xl mx-auto px-6 z-10 text-center flex flex-col items-center">
        {/* Established Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hidden"
        >
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
          <span className="text-[11px] font-heading font-medium tracking-widest text-accent uppercase">
            {isArabic ? "تأسست في الجبيل عام ١٤٣٥ هـ" : "Established in Al Jubail • 1435 H"}
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="relative font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-charcoal mb-6 leading-tight max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block"
          >
            {isArabic ? "صناعة التميز في" : "Crafting Excellence in"}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="block text-primary mt-2 font-extrabold tracking-wide"
          >
            {isArabic ? "المقاولات العامة والهندسة" : "General Contracting"}
          </motion.span>
        </h1>

        {/* Paragraph Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-base sm:text-lg text-charcoal/70 max-w-2xl font-light mb-12 leading-relaxed tracking-wide"
        >
          {isArabic
            ? "نحن نجسد الجيل الجديد من البناء الفاخر والهندسة الدقيقة في المملكة العربية السعودية. نقوم ببناء مشاريع متكاملة تصمد لأجيال متعاقبة."
            : "Embodying the next generation of luxury architecture and precise engineering in Saudi Arabia. We deliver state-of-the-art developments engineered to endure."}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
        >
          {/* Main Button */}
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 border border-primary bg-primary text-cream font-heading font-semibold text-sm tracking-widest uppercase transition-all duration-300 w-full sm:w-auto overflow-hidden hover:text-cream shadow-xl shadow-primary/10"
          >
            {/* Draw overlay */}
            <span className="absolute inset-0 bg-accent scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />
            <span className="relative z-10 flex items-center gap-2">
              {isArabic ? "خطط لمشروعك الآن" : "Plan Your Project"}
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          {/* Secondary Button */}
          <a
            href="#services"
            className="group inline-flex items-center justify-center px-8 py-4 border border-accent text-accent hover:border-primary hover:text-primary hover:bg-primary/5 font-heading font-semibold text-sm tracking-widest uppercase transition-all duration-300 w-full sm:w-auto"
          >
            {isArabic ? "استكشف خدماتنا" : "Explore Services"}
          </a>
        </motion.div>
      </div>

      {/* Downward Chevron Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-10 text-charcoal/45 hover:text-primary transition-colors"
      >
        <a href="#about" aria-label="Scroll Down">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={28} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
