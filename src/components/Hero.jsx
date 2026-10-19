import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/bakeryData';

export default function Hero({ onExploreClick, onOrderClick }) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Maison Crumb! I'm interested in ordering a celebration cake.")}`;

  return (
    <section id="hero" className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Atelier Pill */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-cream-200 border border-cream-300 text-taupe-600 text-xs font-semibold tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              <span>Artisanal Cake Atelier · Small-Batch Bakes</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif-editorial text-4xl sm:text-6xl xl:text-7xl font-normal text-cocoa-900 leading-[1.08] tracking-tight mb-6">
              Made for moments <br className="hidden sm:inline" />
              <span className="italic font-light text-terracotta">worth remembering.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-taupe-600 font-normal leading-relaxed max-w-xl mb-8">
              Handcrafted celebration cakes, Korean bento boxes, and delicate petite treats baked fresh for your special moments. Made slowly with pure French butter, Valrhona cocoa, and seasonal fresh berries.
            </p>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#featured-cakes"
                onClick={(e) => {
                  e.preventDefault();
                  onExploreClick();
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase bg-cocoa-900 text-cream-100 hover:bg-cocoa-800 transition-colors shadow-soft cursor-pointer"
              >
                <span>Explore Cakes</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase bg-whatsapp text-white hover:bg-whatsapp-hover transition-colors shadow-soft"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Order on WhatsApp</span>
              </motion.a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-cream-300 grid grid-cols-3 gap-4">
              <div className="flex flex-col">
                <span className="font-serif-editorial text-xl sm:text-2xl font-bold text-cocoa-900">48h</span>
                <span className="text-xs text-taupe-500 font-medium">Bespoke advance notice</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif-editorial text-xl sm:text-2xl font-bold text-cocoa-900">100%</span>
                <span className="text-xs text-taupe-500 font-medium">French butter &amp; cocoa</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif-editorial text-xl sm:text-2xl font-bold text-cocoa-900">Eggless</span>
                <span className="text-xs text-taupe-500 font-medium">Available on all cakes</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Cake Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-cream-300/40 via-terracotta/10 to-transparent -z-10 blur-xs" />
              
              {/* Hero Image Container */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-elevated border border-cream-300/80 aspect-[4/5] bg-cream-200">
                <img
                  src="/assets/images/hero-cake.jpg"
                  alt="Maison Crumb Signature Woodland Celebration Cake"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa-900/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Meta Tag */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-cream-100/95 backdrop-blur-md border border-cream-300 shadow-soft"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-terracotta">
                        Featured Signature Creation
                      </p>
                      <h3 className="font-serif-editorial text-lg font-bold text-cocoa-900">
                        Woodland Blackberry Layer Cake
                      </h3>
                    </div>
                    <span className="font-serif-editorial text-base font-bold text-cocoa-900 bg-cream-200 px-3 py-1 rounded-full border border-cream-300">
                      ₹899
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Accent Badge */}
              <motion.div
                initial={{ rotate: -8, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -top-4 -right-4 bg-terracotta text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-soft"
              >
                Slow Baked
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
