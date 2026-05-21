"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Shield, Target } from "lucide-react";
import { cn } from "@/lib/utils";

interface OverviewProps {
  isArabic: boolean;
}

type TabType = "vision" | "mission" | "strength";

export default function Overview({ isArabic }: OverviewProps) {
  const [activeTab, setActiveTab] = useState<TabType>("vision");

  const overviewText = isArabic
    ? "مرحباً بكم في شركة جلف إيفينتو للمقاولات العامة، التي تأسست في مدينة الجبيل عام ١٤٣٥ هـ. يتميز فريقنا المتخصص بالتميز في مجموعة واسعة من المشاريع، بدءاً من المباني السكنية الراقية إلى المشاريع والمرافق العامة الكبرى. وبتركيز حاسم على النمو المستقبلي والتطوير المستمر، نحن على استعداد تام لتنفيذ أضخم المشاريع الإنشائية، مدعومين بنخبة من المهندسين والفنيين ذوي المهارات العالية."
    : "Welcome to Gulf Evento General Contracting Company, established in Al Jubail in 1435 H. Our dedicated team excels in a variety of projects, from premium residential estates to majestic public structures. With an unwavering focus on future growth and technical evolution, we are fully prepared to engineer the region's largest developments, supported by our elite workforce of engineers, specialists, and technicians.";

  const tabs = [
    {
      id: "vision" as TabType,
      title: isArabic ? "رؤيتنا" : "Vision",
      icon: Eye,
      content: isArabic
        ? "نسعى إلى كسب الثقة الكاملة لعملائنا من خلال تقديم خدمات هندسية وإنشائية لا مثيل لها، وإنجاز المهام المسندة إلينا بأعلى درجات الكفاءة والسرعة والدقة المتناهية التي تفوق التوقعات."
        : "To earn the absolute trust of our clients by delivering unmatched engineering and construction services, executing every project with strict precision, speed, and standard of luxury that exceeds expectations.",
      color: "bg-accent/10 border-accent text-accent",
    },
    {
      id: "mission" as TabType,
      title: isArabic ? "رسالتنا" : "Mission",
      icon: Target,
      content: isArabic
        ? "ملتزمون بتقديم أعلى مستويات الجودة في جميع خدماتنا، وتقديم الاستشارات الصادقة والحلول المبتكرة لعملائنا لضمان استدامة واستقرار مشاريعهم."
        : "We are passionately committed to delivering the highest caliber of craftsmanship across all services, providing honest engineering advisory, and implementing innovative solutions to guarantee the longevity and luxury of our clients' assets.",
      color: "bg-primary/10 border-primary text-primary",
    },
    {
      id: "strength" as TabType,
      title: isArabic ? "ركائزنا" : "Our Strength",
      icon: Shield,
      content: isArabic
        ? "تكمن قوتنا في قوتنا البشرية المتكاملة المكونة من ٦٠ حرفياً ومهندساً من ذوي المهارات الاستثنائية والخبرة الواسعة، مما يمكننا من ترك بصمة فخامة فريدة على كل معلم نقوم بتشييده."
        : "Our ultimate power lies in our highly skilled workforce of 60+ engineers, master craftsmen, and technical experts, allowing us to leave an unmistakable stamp of luxury and perfection on every structural monument we build.",
      color: "bg-accent/10 border-accent text-accent",
    },
  ];

  const activeTabData = tabs.find((t) => t.id === activeTab)!;
  const ActiveIcon = activeTabData.icon;

  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-cream relative overflow-hidden"
      style={{ direction: isArabic ? "rtl" : "ltr" }}
    >
      {/* Background Decorative Accent */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/2 rounded-full blur-3xl" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-accent/2 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Headline and Overview Text */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-[11px] font-heading font-semibold tracking-widest text-accent uppercase mb-3">
              {isArabic ? "من نحن" : "Philosophy & Legacy"}
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-charcoal mb-8 leading-tight text-underline-gold">
              {isArabic ? "نظرة عامة على الشركة" : "Company Overview"}
            </h2>
            <p className={cn(
              "text-charcoal/70 leading-relaxed font-light text-base sm:text-lg mb-8",
              isArabic ? "text-right" : "text-left"
            )}>
              {overviewText}
            </p>

            {/* Quick Metrics display */}
            <div className="grid grid-cols-2 gap-6 w-full pt-4 border-t border-charcoal/10">
              <div>
                <span className="block font-heading text-3xl sm:text-4xl font-bold text-primary">1435 H</span>
                <span className="text-xs text-charcoal/50 uppercase tracking-widest mt-1 block">
                  {isArabic ? "عام التأسيس بالجبيل" : "Established in Jubail"}
                </span>
              </div>
              <div>
                <span className="block font-heading text-3xl sm:text-4xl font-bold text-accent">60+</span>
                <span className="text-xs text-charcoal/50 uppercase tracking-widest mt-1 block">
                  {isArabic ? "مهندسين وفنيين متخصصين" : "Expert Engineers & Artisans"}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Tab Panels */}
          <div className="lg:col-span-6 w-full">
            {/* Tab Buttons row */}
            <div className="flex border-b border-charcoal/10 pb-px mb-8 w-full gap-2 sm:gap-4">
              {tabs.map((tab) => {
                const TabIcon = tab.icon;
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "flex items-center justify-center gap-2 flex-1 pb-4 pt-2 font-heading font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 relative border-b-2 outline-none",
                      isSelected
                        ? "text-primary border-primary font-bold"
                        : "text-charcoal/40 border-transparent hover:text-charcoal"
                    )}
                  >
                    <TabIcon size={14} />
                    {tab.title}
                    {isSelected && (
                      <motion.div
                        layoutId="activeTabUnderline"
                        className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-accent"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Interactive Card Canvas */}
            <motion.div
              layout
              className="bg-white border border-accent/10 p-8 sm:p-10 rounded-2xl shadow-md relative overflow-hidden flex flex-col justify-between min-h-[300px]"
            >
              {/* Radial Accent Glow inside card */}
              <div className="absolute right-0 top-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-6"
                >
                  {/* Icon Badge */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                    <ActiveIcon size={24} className="animate-pulse" />
                  </div>

                  {/* Content Header & Body */}
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary mb-4 uppercase tracking-wider">
                      {activeTabData.title}
                    </h3>
                    <p className={cn(
                      "text-charcoal/80 leading-relaxed font-light text-sm sm:text-base",
                      isArabic ? "text-right" : "text-left"
                    )}>
                      {activeTabData.content}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Tilted Geometric SVG Labyrinth Pattern overlay inside card bottom */}
              <div className="absolute bottom-[-20px] right-[-20px] opacity-[0.04] text-primary pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-40 h-40" fill="none" stroke="currentColor" strokeWidth="4">
                  <path d="M10,10 L90,10 L90,90 L10,90 Z" />
                  <path d="M30,30 L70,30 L70,70 L30,70 Z" />
                  <path d="M50,10 L50,90" />
                  <path d="M10,50 L90,50" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
