"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ───────────────────────────────────────────────
   Constants
   ─────────────────────────────────────────────── */
const FRAME_COUNT = 179;
const FRAME_PATH = "/New_Hero_Images/Gulf";

function frameSrc(index: number): string {
  return `${FRAME_PATH}${String(index).padStart(3, "0")}.webp`;
}

/* ───────────────────────────────────────────────
   Bilingual Content — 4 Storytelling Beats
   ─────────────────────────────────────────────── */
interface Beat {
  label: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
}

const BEATS_EN: Beat[] = [
  {
    label: "01 — The Blueprint",
    titleLine1: "Crafting Excellence In",
    titleLine2: "General Contracting & Architecture",
    subtitle:
      "Where visionary blueprints become the foundation of iconic structures.",
  },
  {
    label: "02 — The Camera Plunge",
    titleLine1: "Structural Integrity.",
    titleLine2: "Built from the core up with advanced engineering.",
    subtitle:
      "Diving deep into the skeletal framework that supports every masterpiece.",
  },
  {
    label: "03 — Infrastructure Reveal",
    titleLine1: "Precision Infrastructure.",
    titleLine2:
      "Integrating MEP, electrical grids, and smart networks seamlessly.",
    subtitle:
      "The invisible systems that bring modern buildings to life — engineered to perfection.",
  },
  {
    label: "04 — The Masterpiece",
    titleLine1: "The Finished Masterpiece.",
    titleLine2: "Turning visionary designs into physical reality.",
    subtitle:
      "From blueprint to brilliance — a testament to uncompromising quality.",
  },
];

const BEATS_AR: Beat[] = [
  {
    label: "٠١ — المخطط",
    titleLine1: "صياغة التميز في",
    titleLine2: "المقاولات العامة والهندسة المعمارية",
    subtitle: "حيث تصبح المخططات الرؤيوية أساساً للمنشآت الأيقونية.",
  },
  {
    label: "٠٢ — الغوص نحو العمق",
    titleLine1: "النزاهة الهيكلية.",
    titleLine2: "بُنيت من الأساس بأحدث التقنيات الهندسية.",
    subtitle: "الغوص عميقاً في الهيكل الإنشائي الذي يدعم كل تحفة معمارية.",
  },
  {
    label: "٠٣ — كشف البنية التحتية",
    titleLine1: "البنية التحتية الدقيقة.",
    titleLine2: "دمج الشبكات الميكانيكية والكهربائية والذكية بسلاسة.",
    subtitle:
      "الأنظمة الخفية التي تمنح المباني الحديثة الحياة — مصممة بإتقان تام.",
  },
  {
    label: "٠٤ — التحفة النهائية",
    titleLine1: "التحفة النهائية.",
    titleLine2: "تحويل التصاميم الرؤيوية إلى واقع ملموس.",
    subtitle: "من المخطط إلى التألق — شهادة على الجودة التي لا تقبل المساومة.",
  },
];

/* ───────────────────────────────────────────────
   Beat Text Overlay Component
   ─────────────────────────────────────────────── */
interface BeatOverlayProps {
  beat: Beat;
  index: number;
  isArabic: boolean;
}

function BeatOverlay({ beat, index, isArabic }: BeatOverlayProps) {
  return (
    <div
      className="hero-beat absolute inset-0 flex flex-col justify-center px-6 sm:px-10 lg:px-14 xl:px-20 pointer-events-none"
      data-beat={index}
      style={{ opacity: 0 }}
    >
      {/* Beat Label */}
      <span className="hero-beat-label block mb-4 sm:mb-6 text-xs sm:text-sm font-medium tracking-[0.25em] uppercase text-primary">
        {beat.label}
      </span>

      {/* Title Line 1 */}
      <div className="mb-1 sm:mb-2 py-2">
        <h2
          className={`hero-beat-title font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight text-charcoal leading-[1.1] ${
            isArabic ? "font-arabic" : ""
          }`}
        >
          {beat.titleLine1}
        </h2>
      </div>

      {/* Title Line 2 */}
      <div className="mb-4 sm:mb-6 lg:mb-8 py-2">
        <h3
          className={`hero-beat-title-2 font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold tracking-tight text-charcoal/80 leading-[1.15] ${
            isArabic ? "font-arabic" : ""
          }`}
        >
          {beat.titleLine2}
        </h3>
      </div>

      {/* Subtitle */}
      <p
        className={`hero-beat-sub max-w-md text-base sm:text-lg lg:text-xl text-charcoal/60 leading-relaxed ${
          isArabic ? "font-arabic" : ""
        }`}
      >
        {beat.subtitle}
      </p>

      {/* Decorative line */}
      <div
        className={`hero-beat-line mt-6 sm:mt-8 h-[2px] w-0 bg-primary ${
          isArabic ? "self-end" : "self-start"
        }`}
      />
    </div>
  );
}

/* ───────────────────────────────────────────────
   Main Hero Component
   ─────────────────────────────────────────────── */
interface HeroProps {
  isArabic: boolean;
}

export default function Hero({ isArabic }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasWrapperRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const beats = isArabic ? BEATS_AR : BEATS_EN;

  /* ─── Canvas Render ─── */
  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[frameIndex];
    if (!canvas || !ctx || !img || !img.complete || !img.naturalWidth) return;

    const dpr = window.devicePixelRatio || 1;
    const containerW = canvas.clientWidth;
    const containerH = canvas.clientHeight;

    // Only resize canvas buffer when dimensions change
    const bufferW = Math.round(containerW * dpr);
    const bufferH = Math.round(containerH * dpr);
    if (canvas.width !== bufferW || canvas.height !== bufferH) {
      canvas.width = bufferW;
      canvas.height = bufferH;
    }

    ctx.clearRect(0, 0, bufferW, bufferH);

    // "Cover" draw — fill canvas while preserving aspect ratio
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = containerW / containerH;

    let drawW: number, drawH: number, drawX: number, drawY: number;
    if (imgRatio > canvasRatio) {
      // Image wider than canvas → fit by height, crop sides
      drawH = containerH * dpr;
      drawW = drawH * imgRatio;
      drawX = (bufferW - drawW) / 2;
      drawY = 0;
    } else {
      // Image taller than canvas → fit by width, crop top/bottom
      drawW = containerW * dpr;
      drawH = drawW / imgRatio;
      drawX = 0;
      drawY = (bufferH - drawH) / 2;
    }

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }, []);

  /* ─── Image Preloader ─── */
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = frameSrc(i);
      img.onload = () => {
        loaded++;
        // Render first frame immediately once it loads
        if (i === 0 && canvasRef.current) {
          renderFrame(0);
        }
        if (loaded === FRAME_COUNT) {
          setIsLoaded(true);
        }
      };
      images.push(img);
    }

    imagesRef.current = images;

    return () => {
      // Cleanup: abort any pending image loads
      images.forEach((img) => {
        img.onload = null;
        img.src = "";
      });
    };
  }, [renderFrame]);

  /* ─── Resize Observer ─── */
  useEffect(() => {
    const wrapper = canvasWrapperRef.current;
    if (!wrapper) return;

    const observer = new ResizeObserver(() => {
      renderFrame(currentFrameRef.current);
    });

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, [renderFrame]);

  /* ─── GSAP ScrollTrigger + Text Beat Animations ─── */
  useEffect(() => {
    // Wait for at least the first few frames to load
    if (!sectionRef.current || !stickyRef.current) return;

    const ctx = gsap.context(() => {
      /* ── Canvas frame scrubbing ── */
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        onUpdate: (self) => {
          const nextFrame = Math.min(
            Math.floor(self.progress * (FRAME_COUNT - 1)),
            FRAME_COUNT - 1
          );
          if (nextFrame !== currentFrameRef.current) {
            currentFrameRef.current = nextFrame;
            if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
            rafIdRef.current = requestAnimationFrame(() => {
              renderFrame(nextFrame);
            });
          }
        },
      });

      /* ── Beat text overlay animations ── */
      const beatEls = gsap.utils.toArray<HTMLElement>(".hero-beat");
      const beatRanges = [
        [0, 0.25],
        [0.25, 0.5],
        [0.5, 0.75],
        [0.75, 1.0],
      ];

      beatEls.forEach((el, i) => {
        const [startPct, endPct] = beatRanges[i];
        const fadeInStart = startPct;
        const fadeInEnd = startPct + 0.06;
        const holdEnd = endPct - 0.06;
        const fadeOutEnd = endPct;

        const label = el.querySelector(".hero-beat-label") as HTMLElement;
        const title = el.querySelector(".hero-beat-title") as HTMLElement;
        const title2 = el.querySelector(".hero-beat-title-2") as HTMLElement;
        const sub = el.querySelector(".hero-beat-sub") as HTMLElement;
        const line = el.querySelector(".hero-beat-line") as HTMLElement;

        // Set initial states
        gsap.set(el, { opacity: 0 });
        gsap.set(label, {
          opacity: 0,
          y: 20,
        });
        gsap.set(title, {
          clipPath: "inset(0 0 100% 0)",
          y: 30,
        });
        gsap.set(title2, {
          clipPath: "inset(0 0 100% 0)",
          y: 30,
        });
        gsap.set(sub, {
          opacity: 0,
          y: 20,
        });
        gsap.set(line, { width: 0 });

        // Fade IN timeline
        const tlIn = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.3,
          },
        });

        // Force timeline duration to exactly 1 so absolute timings map to scroll progress correctly
        tlIn.to({}, { duration: 1 }, 0);

        const totalDuration = 1; // normalized
        const inStart = fadeInStart * totalDuration;
        const inEnd = fadeInEnd * totalDuration;
        const inDur = inEnd - inStart;

        tlIn.to(
          el,
          {
            opacity: 1,
            duration: inDur * 0.3,
            ease: "none",
          },
          inStart
        );
        tlIn.to(
          label,
          {
            opacity: 1,
            y: 0,
            duration: inDur * 0.4,
            ease: "power2.out",
          },
          inStart
        );
        tlIn.to(
          title,
          {
            clipPath: "inset(-20% 0 -20% 0)",
            y: 0,
            duration: inDur * 0.7,
            ease: "power3.out",
          },
          inStart + inDur * 0.15
        );
        tlIn.to(
          title2,
          {
            clipPath: "inset(-20% 0 -20% 0)",
            y: 0,
            duration: inDur * 0.7,
            ease: "power3.out",
          },
          inStart + inDur * 0.3
        );
        tlIn.to(
          sub,
          {
            opacity: 1,
            y: 0,
            duration: inDur * 0.5,
            ease: "power2.out",
          },
          inStart + inDur * 0.5
        );
        tlIn.to(
          line,
          {
            width: "60px",
            duration: inDur * 0.6,
            ease: "power2.out",
          },
          inStart + inDur * 0.4
        );

        // Fade OUT timeline (skip for the last beat — it holds)
        if (i < beatEls.length - 1) {
          const outStart = holdEnd * totalDuration;
          const outEnd = fadeOutEnd * totalDuration;
          const outDur = outEnd - outStart;

          tlIn.to(
            el,
            {
              opacity: 0,
              duration: outDur,
              ease: "none",
            },
            outStart
          );
          tlIn.to(
            title,
            {
              clipPath: "inset(100% 0 0 0)",
              y: -20,
              duration: outDur * 0.6,
              ease: "power2.in",
            },
            outStart
          );
          tlIn.to(
            title2,
            {
              clipPath: "inset(100% 0 0 0)",
              y: -20,
              duration: outDur * 0.6,
              ease: "power2.in",
            },
            outStart + outDur * 0.1
          );
          tlIn.to(
            sub,
            {
              opacity: 0,
              y: -15,
              duration: outDur * 0.5,
              ease: "power2.in",
            },
            outStart
          );
          tlIn.to(
            line,
            {
              width: 0,
              duration: outDur * 0.4,
              ease: "power2.in",
            },
            outStart
          );
        }
      });
    }, sectionRef);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      ctx.revert();
    };
  }, [isLoaded, renderFrame]);

  /* ─── Render ─── */
  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full bg-white"
      style={{ height: "400vh" }}
    >
      {/* Sticky viewport wrapper */}
      <div
        ref={stickyRef}
        className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-stretch bg-white"
      >
        {/* ── Two-column layout — direction-aware ── */}
        <div
          className={`relative w-full h-full flex flex-col md:flex-row ${
            isArabic ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* ─── TEXT COLUMN (40%) ─── */}
          <div
            className={`relative z-10 w-full md:w-[40%] h-[45vh] md:h-full flex-shrink-0 ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            {/* Beat overlays — stacked absolutely */}
            {beats.map((beat, i) => (
              <BeatOverlay
                key={i}
                beat={beat}
                index={i}
                isArabic={isArabic}
              />
            ))}
          </div>

          {/* ─── CANVAS COLUMN (60%) ─── */}
          <div
            ref={canvasWrapperRef}
            className="relative w-full md:w-[60%] h-[55vh] md:h-full flex-shrink-0 bg-white"
          >
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full"
              aria-hidden="true"
            />

            {/* Subtle edge gradient for seamless text-canvas blending */}
            <div
              className={`absolute top-0 bottom-0 w-16 sm:w-24 lg:w-32 pointer-events-none z-10 hidden md:block ${
                isArabic
                  ? "right-0 bg-gradient-to-l from-transparent to-white"
                  : "left-0 bg-gradient-to-r from-transparent to-white"
              }`}
              style={{ opacity: 0 }}
            />
          </div>
        </div>

        {/* ── Scroll progress indicator ── */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none">
          <div className="hero-scroll-hint flex flex-col items-center gap-1.5 opacity-70">
            <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-charcoal/40">
              {isArabic ? "اسحب للاستكشاف" : "Scroll to explore"}
            </span>
            <div className="w-[1px] h-8 bg-charcoal/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-primary animate-scroll-line" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
