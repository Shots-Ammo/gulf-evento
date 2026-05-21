"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Calendar, ClipboardCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectsProps {
  isArabic: boolean;
}

type ProjectCategory = "completed" | "ongoing";

interface ProjectItem {
  id: string;
  title: string;
  titleAr: string;
  location: string;
  locationAr: string;
  scope: string;
  scopeAr: string;
  imageDesc: string;
}

// Custom Counter Hook
function useCounter(target: number, duration: number = 2000, trigger: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const end = target;
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.abs(Math.floor(totalMiliseconds / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime || 1);

    return () => clearInterval(timer);
  }, [target, duration, trigger]);

  return count;
}

export default function Projects({ isArabic }: ProjectsProps) {
  const [category, setCategory] = useState<ProjectCategory>("completed");
  const [inView, setInView] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for metrics animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animated counters
  const yearsCount = useCounter(12, 1500, inView);
  const staffCount = useCounter(60, 1500, inView);
  const projectsCount = useCounter(45, 1500, inView);

  const completedProjects: ProjectItem[] = [
    {
      id: "comp1",
      title: "Jubail Luxury Residential Palace",
      titleAr: "قصر سكني فاخر بالجبيل",
      location: "Al Huwaylat, Al Jubail",
      locationAr: "الحويلات، الجبيل",
      scope: "Structural concrete, fine gypsum finishing, central cooling, high-voltage electrical grid.",
      scopeAr: "الهيكل الخرساني، تشطيبات الجبس الفاخرة، التكييف المركزي، وشبكة الكهرباء عالية الجهد.",
      imageDesc: "Palace",
    },
    {
      id: "comp2",
      title: "Commercial Retail Center Facade",
      titleAr: "واجهة مركز تجاري ضخم",
      location: "Jubail Downtown",
      locationAr: "وسط البلد، الجبيل",
      scope: "Modern custom steel framework, marble stone cladding, integrated safety fire fighting networks.",
      scopeAr: "الهيكل الحديدي المخصص، تكسية الرخام الطبيعي، وأنظمة السلامة ومكافحة الحرائق المتكاملة.",
      imageDesc: "Retail Center",
    },
    {
      id: "comp3",
      title: "Industrial Logistics Warehouse Complex",
      titleAr: "مجمع مستودعات لوجستية صناعية",
      location: "Jubail Support Industrial Area",
      locationAr: "المنطقة الصناعية المساندة، الجبيل",
      scope: "Heavy structural foundation casting, heavy-load floor slab reinforcing, industrial high-pressure plumbing drainage.",
      scopeAr: "صب القواعد الإنشائية الثقيلة، تسليح الأرضيات الخرسانية للأحمال الفائقة، وتصريف السباكة عالي الضغط.",
      imageDesc: "Logistics Complex",
    },
  ];

  const ongoingProjects: ProjectItem[] = [
    {
      id: "ong1",
      title: "Premium Seaside Corporate HQ",
      titleAr: "المقر الرئيسي لشركة بحرية فاخرة",
      location: "Jubail Corniche Road",
      locationAr: "طريق الكورنيش، الجبيل",
      scope: "Architectural design blueprint execution, heavy reinforced concrete works, whisper-quiet VRF HVAC climate cooling.",
      scopeAr: "تنفيذ المخططات المعمارية المبتكرة، أعمال الخرسانة المسلحة الكبرى، وتكييف الهواء الذكي الصامت VRF.",
      imageDesc: "Corporate HQ",
    },
    {
      id: "ong2",
      title: "Private Luxury Villa Estate Development",
      titleAr: "تطوير ضاحية فيلات سكنية فاخرة",
      location: "Al Khaldiyah, Al Jubail",
      locationAr: "الخالدية، الجبيل",
      scope: "Premium architectural finishes, sophisticated plumbing hydraulics, smart illumination and KNX automation.",
      scopeAr: "التشطيبات المعمارية الراقية، أعمال السباكة والهيدروليك الذكية، وأنظمة الإضاءة وأتمتة المباني KNX.",
      imageDesc: "Villa Estate",
    },
  ];

  const activeProjects = category === "completed" ? completedProjects : ongoingProjects;

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 bg-cream text-charcoal relative overflow-hidden"
      style={{ direction: isArabic ? "rtl" : "ltr" }}
    >
      {/* Dynamic Background Geometry */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-accent/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[11px] font-heading font-semibold tracking-widest text-accent uppercase mb-3">
            {isArabic ? "سجل التميز والخرسانة" : "Our Monuments of Precision"}
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-charcoal mb-6 leading-tight text-underline-gold">
            {isArabic ? "مشاريعنا الإنشائية" : "Our Projects Portfolio"}
          </h2>
          <p className="text-charcoal/50 max-w-xl font-light text-sm sm:text-base mt-2">
            {isArabic
              ? "تفخر شركة جلف إيفينتو بسجل حافل من الإنجازات العمرانية والمشاريع التي تم تسليمها بأعلى معايير الدقة الهندسية."
              : "Explore our prestigious achievements. From luxury estates to heavy industrial complexes, built on a foundation of structural perfection."}
          </p>
        </div>

        {/* Categories Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="flex border border-charcoal/10 p-1.5 bg-charcoal/5 rounded-xl gap-2">
            <button
              onClick={() => setCategory("completed")}
              className={cn(
                "flex items-center gap-2 px-6 py-2.5 font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-all duration-300 outline-none",
                category === "completed"
                  ? "bg-primary text-cream shadow-md"
                  : "text-charcoal/60 hover:text-charcoal"
              )}
            >
              <ClipboardCheck size={14} />
              {isArabic ? "المشاريع المنفذة" : "Completed Projects"}
            </button>
            <button
              onClick={() => setCategory("ongoing")}
              className={cn(
                "flex items-center gap-2 px-6 py-2.5 font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-all duration-300 outline-none",
                category === "ongoing"
                  ? "bg-primary text-cream shadow-md"
                  : "text-charcoal/60 hover:text-charcoal"
              )}
            >
              <Calendar size={14} />
              {isArabic ? "المشاريع الجاري تنفيذها" : "Current Projects"}
            </button>
          </div>
        </div>

        {/* Projects Cards Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {activeProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="border border-accent/10 bg-white p-8 hover:border-primary hover:bg-primary/[0.03] rounded-2xl flex flex-col justify-between transition-all duration-300 relative group overflow-hidden hover:shadow-md"
              >
                {/* Visual geometric detail inside cards */}
                <div className="absolute right-0 bottom-0 text-primary/5 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 100 100" className="w-32 h-32" fill="currentColor">
                    <rect x="10" y="10" width="80" height="80" />
                  </svg>
                </div>

                <div>
                  {/* Category Status Badge */}
                  <span className={cn(
                    "inline-flex items-center gap-1.5 text-[9px] font-heading font-semibold tracking-wider px-3 py-1 rounded-full uppercase mb-6",
                    category === "completed"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-amber-50 text-amber-700 border border-amber-200"
                  )}>
                    <CheckCircle2 size={10} />
                    {category === "completed"
                      ? isArabic ? "مكتمل" : "Completed Masterpiece"
                      : isArabic ? "قيد التنفيذ" : "Ongoing Development"}
                  </span>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-bold text-primary group-hover:text-accent transition-colors mb-2 leading-snug">
                    {isArabic ? project.titleAr : project.title}
                  </h3>

                  {/* Location badge */}
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-4">
                    📍 {isArabic ? project.locationAr : project.location}
                  </span>

                  {/* Scope details */}
                  <div className="border-t border-accent/10 pt-4 mt-2">
                    <span className="text-[10px] font-heading font-semibold tracking-widest text-charcoal/40 uppercase block mb-1">
                      {isArabic ? "نطاق العمل والهندسة" : "Engineering Scope"}
                    </span>
                    <p className="text-charcoal/70 font-light text-xs sm:text-sm leading-relaxed">
                      {isArabic ? project.scopeAr : project.scope}
                    </p>
                  </div>
                </div>

                {/* Draw corner detail */}
                <div className="absolute top-0 left-0 w-2 h-2 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Counters & Milestones panel */}
        <div
          ref={metricsRef}
          className="mt-24 sm:mt-32 bg-white border border-accent/10 rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
        >
          {/* Radial light */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

          {/* Metric 1 */}
          <div className="flex flex-col items-center relative z-10">
            <span className="block font-heading text-5xl sm:text-6xl font-extrabold text-primary mb-2">
              {yearsCount}+
            </span>
            <span className="text-xs font-heading font-semibold tracking-widest text-accent uppercase">
              {isArabic ? "عاماً من التميز بالجبيل" : "Years of Heritage in Jubail"}
            </span>
            <span className="text-[10px] text-charcoal/50 mt-1 font-light block">
              {isArabic ? "منذ التأسيس عام ١٤٣٥ هـ" : "Established since 1435 H"}
            </span>
          </div>

          {/* Metric 2 */}
          <div className="flex flex-col items-center relative z-10 md:border-x md:border-accent/10">
            <span className="block font-heading text-5xl sm:text-6xl font-extrabold text-primary mb-2">
              {staffCount}+
            </span>
            <span className="text-xs font-heading font-semibold tracking-widest text-accent uppercase">
              {isArabic ? "حرفياً ومهندساً متخصصاً" : "Expert Engineers & Artisans"}
            </span>
            <span className="text-[10px] text-charcoal/50 mt-1 font-light block">
              {isArabic ? "قوة عاملة استثنائية متكاملة" : "Highly Skilled Elite Workforce"}
            </span>
          </div>

          {/* Metric 3 */}
          <div className="flex flex-col items-center relative z-10">
            <span className="block font-heading text-5xl sm:text-6xl font-extrabold text-primary mb-2">
              {projectsCount}+
            </span>
            <span className="text-xs font-heading font-semibold tracking-widest text-accent uppercase">
              {isArabic ? "مشروعاً ناجحاً مكتملاً" : "Completed Projects Ledger"}
            </span>
            <span className="text-[10px] text-charcoal/50 mt-1 font-light block">
              {isArabic ? "بدقة هندسية مطلقة ١٠٠٪" : "Engineered with 100% Precision"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
