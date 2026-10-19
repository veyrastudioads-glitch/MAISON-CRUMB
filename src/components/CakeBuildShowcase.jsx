import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { Sparkles, Check, ChevronDown } from 'lucide-react';
import { CAKE_BUILD_STAGES } from '../data/bakeryData';

export default function CakeBuildShowcase() {
  const containerRef = useRef(null);
  const stageRef = useRef(0);
  const [activeStage, setActiveStage] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // 1:1 Direct scroll tracking with zero input delay
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Layer 2: Whipped Ganache Filling (descends and settles)
  const opacity2 = useTransform(scrollYProgress, [0.08, 0.24], [0, 1]);
  const scale2 = useTransform(scrollYProgress, [0.08, 0.24], [1.04, 1]);

  // Layer 3: Swiss Meringue Crumb Coat (smooth frosting coat)
  const opacity3 = useTransform(scrollYProgress, [0.30, 0.46], [0, 1]);
  const scale3 = useTransform(scrollYProgress, [0.30, 0.46], [1.04, 1]);

  // Layer 4: Fresh Raspberries (descends onto the top of the cake)
  const opacity4 = useTransform(scrollYProgress, [0.52, 0.68], [0, 1]);
  const y4 = useTransform(scrollYProgress, [0.52, 0.68], [-18, 0]);
  const scale4 = useTransform(scrollYProgress, [0.52, 0.68], [1.05, 1]);

  // Layer 5: Belgian Chocolate Drip & Lit Candle (cascades down)
  const opacity5 = useTransform(scrollYProgress, [0.74, 0.92], [0, 1]);
  const y5 = useTransform(scrollYProgress, [0.74, 0.92], [-14, 0]);
  const scale5 = useTransform(scrollYProgress, [0.74, 0.92], [1.04, 1]);

  // Progress timeline line width
  const timelineProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Sync active stage milestone index (renders strictly once per stage change)
  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    let next = 0;
    if (p < 0.20) next = 0;
    else if (p < 0.44) next = 1;
    else if (p < 0.68) next = 2;
    else if (p < 0.88) next = 3;
    else next = 4;

    if (stageRef.current !== next) {
      stageRef.current = next;
      setActiveStage(next);
    }
  });

  // Click to jump to stage
  const scrollToStage = (stageIdx) => {
    if (!containerRef.current) return;
    const offsets = [0.02, 0.25, 0.49, 0.73, 0.98];
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    const targetY = containerTop + totalScrollable * offsets[stageIdx];
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  const currentStage = CAKE_BUILD_STAGES[activeStage];

  const stageMilestones = [
    { num: '01', title: 'Base Sponge', subtitle: 'Dutch Cocoa' },
    { num: '02', title: 'Filling', subtitle: 'Whipped Ganache' },
    { num: '03', title: 'Frosting', subtitle: 'Swiss Meringue' },
    { num: '04', title: 'Crown', subtitle: 'Fresh Raspberries' },
    { num: '05', title: 'Masterpiece', subtitle: 'Drip & Candle' },
  ];

  return (
    <section
      id="cake-build"
      ref={containerRef}
      className={`relative bg-cream-200/70 border-y border-cream-300 ${
        prefersReducedMotion ? 'py-20' : 'h-[250vh] sm:h-[280vh]'
      }`}
    >
      {/* Sticky Pinned Viewport Container (overflow-visible for fast GPU compositing) */}
      <div
        className={`${
          prefersReducedMotion
            ? 'relative'
            : 'sticky top-0 h-screen w-full flex flex-col justify-between py-6 sm:py-8'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-between flex-1">
          
          {/* Header */}
          <div className="text-center max-w-xl mx-auto pt-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-100 border border-cream-300 text-terracotta text-xs font-bold uppercase tracking-wider mb-2 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-terracotta" />
              <span>Scroll-Driven Motion Animation</span>
            </div>
            <h2 className="font-serif-editorial text-2xl sm:text-4xl lg:text-5xl font-normal text-cocoa-900 leading-tight">
              The anatomy of an <span className="italic font-light text-terracotta">artisan bake.</span>
            </h2>
            <p className="text-xs sm:text-sm text-taupe-600 mt-1">
              Scroll down to watch the cake assemble layer by layer.
            </p>
          </div>

          {/* Centerpiece Theater: The Cake Canvas + Floating Dynamic Story Badges */}
          <div className="relative flex items-center justify-center my-auto py-2">
            
            {/* Left Floating Narrative Pill (Updates with Motion) */}
            <div className="hidden lg:flex flex-col items-end gap-2 absolute left-4 xl:left-8 max-w-xs text-right pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStage.stage}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 16 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-cream-300 shadow-soft"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-terracotta block mb-0.5">
                    Layer 0{currentStage.stage}
                  </span>
                  <h4 className="font-serif-editorial text-xl font-bold text-cocoa-900 mb-1">
                    {currentStage.title}
                  </h4>
                  <p className="text-xs text-taupe-500 leading-relaxed font-normal">
                    {currentStage.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Central Cake Frame */}
            <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[460px] aspect-square rounded-[2.5rem] overflow-hidden shadow-elevated border border-cream-300 bg-[#FAF6F0]">
              
              {/* 1. Base Layer (Dutch Cocoa Sponge on Pedestal) */}
              <img
                src={CAKE_BUILD_STAGES[0].image}
                alt={CAKE_BUILD_STAGES[0].title}
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{ transform: 'translate3d(0, 0, 0)' }}
                loading="eager"
              />

              {/* 2. Layer 2 (Whipped Ganache Filling) */}
              <motion.img
                src={CAKE_BUILD_STAGES[1].image}
                alt={CAKE_BUILD_STAGES[1].title}
                style={{
                  opacity: prefersReducedMotion ? 1 : opacity2,
                  scale: prefersReducedMotion ? 1 : scale2,
                  transform: 'translate3d(0, 0, 0)',
                  willChange: 'opacity, transform'
                }}
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                loading="eager"
              />

              {/* 3. Layer 3 (Swiss Meringue Crumb Coat) */}
              <motion.img
                src={CAKE_BUILD_STAGES[2].image}
                alt={CAKE_BUILD_STAGES[2].title}
                style={{
                  opacity: prefersReducedMotion ? 1 : opacity3,
                  scale: prefersReducedMotion ? 1 : scale3,
                  transform: 'translate3d(0, 0, 0)',
                  willChange: 'opacity, transform'
                }}
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                loading="eager"
              />

              {/* 4. Layer 4 (Fresh Raspberries dropping down) */}
              <motion.img
                src={CAKE_BUILD_STAGES[3].image}
                alt={CAKE_BUILD_STAGES[3].title}
                style={{
                  opacity: prefersReducedMotion ? 1 : opacity4,
                  y: prefersReducedMotion ? 0 : y4,
                  scale: prefersReducedMotion ? 1 : scale4,
                  transform: 'translate3d(0, 0, 0)',
                  willChange: 'opacity, transform'
                }}
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                loading="eager"
              />

              {/* 5. Layer 5 (Chocolate Drip & Lit Candle cascading down) */}
              <motion.img
                src={CAKE_BUILD_STAGES[4].image}
                alt={CAKE_BUILD_STAGES[4].title}
                style={{
                  opacity: prefersReducedMotion ? 1 : opacity5,
                  y: prefersReducedMotion ? 0 : y5,
                  scale: prefersReducedMotion ? 1 : scale5,
                  transform: 'translate3d(0, 0, 0)',
                  willChange: 'opacity, transform'
                }}
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                loading="eager"
              />

              {/* Floating Stage Badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-cream-100/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-cream-300 text-cocoa-900 text-xs font-bold uppercase tracking-wider shadow-soft">
                <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
                <span>Stage {activeStage + 1} of 5 · {currentStage.title}</span>
              </div>

              {/* Bottom Subtle Recipe Pill */}
              <div className="absolute bottom-4 right-4 z-20 bg-cocoa-900/85 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full shadow-soft pointer-events-none">
                {currentStage.subtitle}
              </div>

            </div>

            {/* Right Floating Ingredient Pills (Updates with Motion) */}
            <div className="hidden lg:flex flex-col items-start gap-2 absolute right-4 xl:right-8 max-w-xs text-left pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStage.stage}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-cream-300 shadow-soft space-y-2"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-taupe-500 block">
                    Artisanal Ingredients
                  </span>
                  <div className="flex flex-col gap-1.5">
                    {currentStage.details.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cocoa-900"
                      >
                        <Check className="w-3.5 h-3.5 text-terracotta shrink-0" />
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Clean Horizontal Stepper (No cards, just clean milestone markers) */}
          <div className="w-full max-w-3xl mx-auto pb-2">
            
            {/* Stepper Dots & Connector Line */}
            <div className="relative flex items-center justify-between mb-2">
              {/* Background Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-cream-300 -translate-y-1/2 -z-0" />
              
              {/* Active Animated Connector Line */}
              <motion.div
                style={{ width: timelineProgress }}
                className="absolute top-1/2 left-0 h-0.5 bg-terracotta -translate-y-1/2 -z-0"
              />

              {/* 5 Milestone Node Buttons */}
              {stageMilestones.map((milestone, idx) => {
                const isPassed = activeStage >= idx;
                const isCurrent = activeStage === idx;

                return (
                  <button
                    key={milestone.num}
                    onClick={() => scrollToStage(idx)}
                    className="relative z-10 flex flex-col items-center group cursor-pointer"
                  >
                    {/* Circle Node */}
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold transition-all duration-200 ${
                        isCurrent
                          ? 'bg-terracotta text-white shadow-soft scale-110 ring-4 ring-terracotta/20'
                          : isPassed
                          ? 'bg-cocoa-900 text-white'
                          : 'bg-white border-2 border-cream-300 text-taupe-500 group-hover:border-terracotta'
                      }`}
                    >
                      {milestone.num}
                    </div>

                    {/* Milestone Label */}
                    <span
                      className={`text-[10px] sm:text-[11px] font-bold mt-1.5 transition-colors hidden sm:inline ${
                        isCurrent ? 'text-terracotta' : 'text-taupe-500 group-hover:text-cocoa-900'
                      }`}
                    >
                      {milestone.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Scroll Hint */}
            <div className="text-center mt-2 flex items-center justify-center gap-1.5 text-[11px] text-taupe-500">
              <span>Scroll to build cake</span>
              <ChevronDown className="w-3.5 h-3.5 text-terracotta animate-bounce" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
