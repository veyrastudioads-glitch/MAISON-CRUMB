import React from 'react';
import { motion } from 'motion/react';
import { Search, Sliders, CalendarCheck, PackageCheck, Sparkles } from 'lucide-react';
import { HOW_IT_WORKS } from '../data/bakeryData';

export default function ProcessSteps() {
  const icons = [Search, Sliders, CalendarCheck, PackageCheck];

  return (
    <section id="process" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200 border border-cream-300 text-taupe-600 text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-terracotta" />
          <span>Seamless Ordering Journey</span>
        </div>
        <h2 className="font-serif-editorial text-3xl sm:text-5xl font-normal text-cocoa-900 leading-tight mb-4">
          How to order your <span className="italic font-light text-terracotta">celebration bake.</span>
        </h2>
        <p className="text-sm sm:text-base text-taupe-600 font-normal leading-relaxed">
          No complex checkouts or impersonal cart barriers. We connect directly with you to ensure your cake date, flavor, and personalized details are tailored to perfection.
        </p>
      </div>

      {/* 4 Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
        {HOW_IT_WORKS.map((step, idx) => {
          const StepIcon = icons[idx];

          return (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-cream-300 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between relative group"
            >
              <div>
                {/* Header with Step Number and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif-editorial text-3xl font-bold text-terracotta/40 group-hover:text-terracotta transition-colors">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-cream-100 flex items-center justify-center text-cocoa-900 group-hover:bg-terracotta group-hover:text-white transition-colors">
                    <StepIcon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-serif-editorial text-xl font-bold text-cocoa-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-taupe-500 font-normal leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Status footer */}
              <div className="pt-4 mt-6 border-t border-cream-200 flex items-center gap-1.5 text-[11px] font-semibold text-taupe-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Step {idx + 1} of 4</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
