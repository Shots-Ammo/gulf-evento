"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Sparkles,
  Compass,
  Flame,
  Wrench,
  Zap,
  Wind,
  X,
  Phone,
  MessageCircle,
  ArrowUpRight,
  LucideIcon,
} from "lucide-react";

interface ServicesProps {
  isArabic: boolean;
}

interface ServiceItem {
  id: string;
  icon: LucideIcon;
  title: string;
  titleAr: string;
  desc: string;
  descAr: string;
  longDesc: string;
  longDescAr: string;
}

export default function Services({ isArabic }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const servicesList: ServiceItem[] = [
    {
      id: "concrete",
      icon: Layers,
      title: "Concrete Structure",
      titleAr: "الهياكل الخرسانية",
      desc: "High-performance reinforced concrete structures engineered with rigorous precision, ensuring structural integrity that endures for generations.",
      descAr: "هياكل خرسانية مسلحة عالية الأداء تم تصميمها وتنفيذها بدقة هندسية صارمة لضمان المتانة والأمان الذي يدوم لأجيال متعاقبة.",
      longDesc: "Our concrete construction team delivers premium structural frameworks for luxury residential villas, high-rise buildings, and heavy commercial infrastructure. We use advanced grade-mix formulations, precise formworks, and strict reinforcement alignments compliant with Saudi Aramco and local building standards.",
      longDescAr: "يقدم فريق الخرسانة لدينا هياكل إنشائية متفوقة للفيلات السكنية الفاخرة، والأبنية الشاهقة، والمشاريع التجارية الكبرى. نستخدم تركيبات خلطة متطورة، وقوالب صب دقيقة، ومحاذاة صارمة لحديد التسليح متوافقة مع معايير أرامكو السعودية والكود السعودي للبناء.",
    },
    {
      id: "finishing",
      icon: Sparkles,
      title: "Architectural Finishing",
      titleAr: "التشطيبات المعمارية",
      desc: "Meticulous interior and exterior craftsmanship. From bespoke plasterwork to fine stone cladding, we execute details that define luxury.",
      descAr: "حرفية متناهية في التشطيبات الداخلية والخارجية. من الجبسيات الفاخرة المخصصة إلى تكسية الحجر الطبيعي النبيل، نصنع التفاصيل الفخمة.",
      longDesc: "We transform raw structures into breathtaking masterpieces. Our finishing division specializes in luxury marble floor installations, micro-cement finishes, premium dry-wall textures, acoustic ceilings, and custom-designed structural facades that stand as visual testaments of status and quality.",
      longDescAr: "نحول الهياكل الخام إلى تحف فنية مذهلة. يتخصص قسم التشطيبات لدينا في تركيب الرخام الفاخر، تشطيبات المايكروسمنت، محارة الجبسيات الراقية، الأسقف الصوتية، والواجهات الخارجية المصممة خصيصاً لتكون شاهداً بصرياً على الفخامة والجودة.",
    },
    {
      id: "design",
      icon: Compass,
      title: "Architectural Design",
      titleAr: "التصميم المعماري",
      desc: "Visionary spatial planning. We translate conceptual dreams into high-performance architectural blueprints, harmonizing layout with majestic aesthetics.",
      descAr: "تخطيط مساحات مبتكر ورؤية مستقبلية. نترجم مخططات أحلامك إلى خرائط تفصيلية عالية الأداء تجمع بين انسيابية الحركة والجمال البصري المهيب.",
      longDesc: "Combining functional flow with luxury spatial dynamics, our design architects construct photorealistic 3D visual models and blueprints. We plan layouts to maximize ambient natural light, passive cooling, spatial flexibility, and seamless indoor-outdoor luxury integration.",
      longDescAr: "بالجمع بين انسيابية المساحة والأنماط المعمارية الراقية، يقوم مهندسونا بتصميم نماذج ثلاثية الأبعاد ورسومات هندسية دقيقة. نخطط المساحات للاستفادة القصوى من الضوء الطبيعي، التبريد الذكي، مرونة المساحة، ودمج الفراغات الداخلية بالخارجية بانسيابية.",
    },
    {
      id: "firefighting",
      icon: Flame,
      title: "Fire Fighting Works",
      titleAr: "أنظمة مكافحة الحريق",
      desc: "Comprehensive fire suppression systems. We design and integrate state-of-the-art alarms and automated sprinklers to protect luxury assets.",
      descAr: "أنظمة مكافحة وإخماد الحرائق الشاملة. نقوم بتصميم ودمج إنذارات متطورة وشبكات رش آلية لحماية أرواح عملائنا وممتلكاتهم الثمينة.",
      longDesc: "We engineer, install, and certify complete fire safety networks under strict Civil Defense (Fanan) compliance. This includes high-pressure automated fire sprinkler networks, clean-agent gas suppression (FM-200), addressable fire detection loops, and integrated emergency ventilation control systems.",
      longDescAr: "نقوم بهندسة وتركيب واختبار شبكات السلامة من الحرائق بالامتثال التام لمتطلبات الدفاع المدني السعودي. يشمل ذلك شبكات رشاشات الحريق الآلية ذات الضغط العالي، أنظمة الإخماد بالغاز النظيف (FM-200)، لوحات إنذار معنونة، وأنظمة تهوية طوارئ متكاملة.",
    },
    {
      id: "plumbing",
      icon: Wrench,
      title: "Plumbing Infrastructure",
      titleAr: "أعمال السباكة والهيدروليك",
      desc: "Advanced hydraulic and fluid engineering. We implement pristine water distribution systems, industrial drainage, and premium sanitary infrastructure.",
      descAr: "هندسة هيدروليكية متطورة لشبكات المياه. نقوم بتركيب شبكات توزيع مياه نقية، شبكات تصريف صناعية، وبنية تحتية صحية ممتازة.",
      longDesc: "We design and deploy absolute water networks using heavy-gauge PPR and PEX technologies. Our systems guarantee zero-leak, high-pressure distribution, solar water heating systems, commercial grease traps, and state-of-the-art water filtration and recycling infrastructures.",
      longDescAr: "نصمم وننفذ شبكات إمداد مياه خالية من التسريب باستخدام تقنيات PPR و PEX عالية الجودة. تضمن أنظمتنا ضغط مياه متوازن ومستدام، سخانات مياه شمسية، مصائد شحوم تجارية، وأنظمة فلترة مياه وتنقية متقدمة للغاية.",
    },
    {
      id: "electrical",
      icon: Zap,
      title: "Electrical Networks",
      titleAr: "الشبكات والأنظمة الكهربائية",
      desc: "Sophisticated high-voltage power networks and smart automation. From custom illumination designs to automated building grids, we deliver efficiency.",
      descAr: "شبكات طاقة وأنظمة تحكم ذكية متطورة. من التصاميم الضوئية الفاخرة إلى لوحات التوزيع الآلية، نضمن موثوقية وأمان وكفاءة مطلقة.",
      longDesc: "Our licensed electrical specialists deliver stable energy solutions. We install industrial distribution panels (MDBs), lighting control automations (KNX/smart-home grids), surge protections, backup generators, and fiber-optic communication infrastructures designed for digital supremacy.",
      longDescAr: "يقوم متخصصو الكهرباء لدينا بتنفيذ حلول طاقة مستقرة وآمنة. نركب لوحات التوزيع الرئيسية والصناعية (MDBs)، أنظمة التحكم في الإضاءة الذكية (KNX)، مانعات الصواعق والحماية من التذبذب، مولدات طوارئ، وشبكات ألياف ضوئية فائقة السرعة.",
    },
    {
      id: "ac",
      icon: Wind,
      title: "Central Air Conditioning",
      titleAr: "التكييف المركزي والتهوية",
      desc: "Advanced HVAC and climate engineering. Custom cooling systems designed to sustain whisper-quiet, pristine indoor climates in extreme desert conditions.",
      descAr: "هندسة تكييف مركزي متكاملة (HVAC). أنظمة تبريد مصممة خصيصاً لتوفير هواء نقي وجو هادئ فائق الفخامة في أصعب ظروف المناخ الصحراوي.",
      longDesc: "We engineer heavy-duty chilled water and VRF (Variable Refrigerant Flow) central cooling networks. Our HVAC designs maintain strict moisture control, multi-stage HEPA air filtrations, customized thermal sheet ductwork fabrication, and energy-management panels optimizing operational cost.",
      longDescAr: "نقوم بهندسة أنظمة تبريد بالماء المثلج (Chillers) وتدفق التبريد المتغير (VRF) للخدمة الشاقة. تضمن أنظمتنا التحكم الصارم بالرطوبة، فلاتر هواء HEPA متعددة المراحل، تصنيع مجاري هواء معزولة حرارياً، ولوحات ذكية لتوفير استهلاك الطاقة.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 sm:py-32 bg-cream text-charcoal relative overflow-hidden"
      style={{ direction: isArabic ? "rtl" : "ltr" }}
    >
      {/* Dynamic Background Grid and Lights */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-accent/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          <span className="text-[11px] font-heading font-semibold tracking-widest text-accent uppercase mb-3">
            {isArabic ? "مستوى جديد من الهندسة" : "Unrivaled Technical Capability"}
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-primary mb-6 leading-tight text-underline-gold max-w-3xl">
            {isArabic
              ? "خدماتنا في قطاع المقاولات العامة"
              : "Our Architectural & Engineering Ledger"}
          </h2>
          <p className="text-charcoal/70 max-w-xl font-light text-sm sm:text-base mt-2">
            {isArabic
              ? "تفوق إنشائي متكامل وهندسة دقيقة تغطي كافة مجالات البناء الحديث والأنظمة الكهروميكانيكية المتطورة."
              : "A comprehensive ecosystem of precise construction and mechanical engineering tailored for elite structural developments."}
          </p>
        </div>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group border border-accent/10 bg-white p-8 hover:border-primary hover:bg-primary/[0.03] hover:shadow-md transition-all duration-500 flex flex-col justify-between items-start min-h-[280px] cursor-pointer relative overflow-hidden rounded-2xl"
              >
                {/* Micro gold corner decor */}
                <div className="absolute top-0 right-0 w-2 h-2 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-full">
                  {/* Icon and Header */}
                  <div className="flex justify-between items-center w-full mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <ServiceIcon size={22} className="group-hover:rotate-12 transition-transform duration-500" />
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-accent/30 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-primary group-hover:text-accent transition-colors mb-3">
                    {isArabic ? service.titleAr : service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-charcoal/70 font-light text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {isArabic ? service.descAr : service.desc}
                  </p>
                </div>

                <span className="text-[10px] font-heading font-semibold text-accent uppercase tracking-widest group-hover:underline mt-2">
                  {isArabic ? "اقرأ المزيد ➔" : "Discover Details ➔"}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Bottom Sheet (Mobile) & Side Modal (Desktop) */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
            {/* Backdrop Scrim */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm cursor-pointer"
            />

            {/* Content Drawer Card */}
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-lg bg-white border-t sm:border border-accent/15 rounded-t-3xl sm:rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col justify-between max-h-[85vh] sm:max-h-[90vh] overflow-y-auto z-10"
              style={{ direction: isArabic ? "rtl" : "ltr" }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-charcoal/10 text-charcoal/60 hover:border-primary hover:text-primary transition-colors"
                aria-label="Close details"
              >
                <X size={16} />
              </button>

              {/* Service Details */}
              <div className="flex flex-col gap-6 w-full text-charcoal">
                {/* Header Badge */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  {selectedService && <selectedService.icon size={28} className="animate-pulse" />}
                </div>

                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary mb-2 uppercase tracking-wide">
                    {isArabic ? selectedService.titleAr : selectedService.title}
                  </h3>
                  <span className="text-[10px] font-heading font-medium tracking-widest text-accent uppercase">
                    {isArabic ? "قطاع المقاولات والهندسة" : "Contracting & Engineering Domain"}
                  </span>
                </div>

                <p className="text-charcoal/80 leading-relaxed font-light text-sm sm:text-base">
                  {isArabic ? selectedService.longDescAr : selectedService.longDesc}
                </p>
              </div>

              {/* Instant Call Actions */}
              <div className="flex flex-col gap-3 mt-8 w-full">
                <a
                  href={`https://wa.me/966507506633?text=${encodeURIComponent(
                    isArabic
                      ? `مرحباً جلف إيفينتو، أود الاستفسار عن خدماتكم في: ${selectedService.titleAr}`
                      : `Hello Gulf Evento, I am interested in your services for: ${selectedService.title}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-cream font-heading font-semibold text-xs tracking-wider uppercase py-3.5 transition-colors rounded-xl w-full"
                >
                  <MessageCircle size={15} />
                  {isArabic ? "استفسار عبر واتساب" : "Inquire via WhatsApp"}
                </a>
                <a
                  href="tel:0136647813"
                  className="flex items-center justify-center gap-2 border border-accent text-accent hover:bg-accent hover:text-white font-heading font-semibold text-xs tracking-wider uppercase py-3.5 transition-all rounded-xl w-full"
                >
                  <Phone size={14} />
                  {isArabic ? "اتصل بفرع الجبيل" : "Call Jubail Office"}
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
