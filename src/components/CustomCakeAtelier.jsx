import React from 'react';
import { motion } from 'motion/react';
import { Palette, Check, Sparkles, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/bakeryData';

export default function CustomCakeAtelier({ onCustomConsultation }) {
  const customWaUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi Maison Crumb! I'm interested in commissioning a custom design cake. I have a mood board / concept I'd love to discuss."
  )}`;

  const features = [
    {
      title: 'Palette-Knife & Sculptural Buttercream',
      desc: 'Textured floral petals, abstract impasto strokes, vintage shell borders, and delicate edible botanical designs.'
    },
    {
      title: 'Custom Flavor & Filling Pairings',
      desc: 'Bespoke sponge infusions, Valrhona dark chocolate ganache, mascarpone compotes, and custom sweetness tuning.'
    },
    {
      title: 'Hand-Piped Vintage Calligraphy',
      desc: 'Personalized names, milestone dates, custom quotes, or minimalist French inscriptions tailored to your event.'
    },
    {
      title: 'Reserved Dedicated Oven Slot',
      desc: 'We limit custom commissions to only 3 per weekend to dedicate full craftsmanship attention to your centerpiece.'
    }
  ];

  return (
    <section id="custom-cakes" className="py-20 sm:py-28 bg-cocoa-900 text-cream-100 relative overflow-hidden">
      {/* Background subtle noise/warmth */}
      <div className="absolute inset-0 bg-radial-gradient from-terracotta/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Artwork Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-cocoa-700 aspect-[4/5] bg-cocoa-800">
              <img
                src="/assets/images/cat-custom.jpg"
                alt="Maison Crumb Custom Palette Knife Sculptural Cake"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-terracotta-light">
                  Bespoke Atelier Commission
                </span>
                <h4 className="font-serif-editorial text-2xl font-bold text-cream-100">
                  Sculptural Buttercream Impasto
                </h4>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Copy & Checklist */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cocoa-800 border border-cocoa-700 text-terracotta-light text-xs font-bold uppercase tracking-wider mb-4">
              <Palette className="w-3.5 h-3.5" />
              <span>Bespoke Commissions</span>
            </div>

            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-normal text-cream-100 leading-tight mb-6">
              Your idea. <br className="hidden sm:inline" />
              <span className="italic font-light text-terracotta-light">Our artisanal cake.</span>
            </h2>

            <p className="text-sm sm:text-base text-cream-300 leading-relaxed font-normal mb-8">
              Whether you are inspired by an art piece, an Instagram mood board, or a specific vintage floral theme, we bring your vision to life with balanced taste and handcrafted aesthetic beauty.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {features.map((feat) => (
                <div key={feat.title} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-terracotta/20 border border-terracotta/40 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5 text-terracotta-light" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-cream-100 mb-1">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-cream-300/80 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Consultation CTA buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={customWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase bg-whatsapp text-white hover:bg-whatsapp-hover transition-colors shadow-soft"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss Custom Design on WhatsApp</span>
              </a>

              <button
                onClick={onCustomConsultation}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase bg-cocoa-800 hover:bg-cocoa-700 text-cream-100 border border-cocoa-700 transition-colors cursor-pointer"
              >
                <span>Fill Order Details</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
