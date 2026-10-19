import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { INSTAGRAM_URL, WHATSAPP_NUMBER } from '../data/bakeryData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const directWa = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Maison Crumb! I'm visiting your website footer.")}`;

  return (
    <footer className="bg-cocoa-900 text-cream-100 pt-16 pb-24 md:pb-16 border-t border-cocoa-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-cocoa-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5">
            <span className="font-serif-editorial text-2xl sm:text-3xl font-bold tracking-wider text-cream-100 block mb-1">
              MAISON CRUMB
            </span>
            <span className="text-[10px] tracking-widest text-terracotta-light uppercase block mb-4">
              Pâtisserie Artisanale · Est. 2024
            </span>
            <p className="text-xs sm:text-sm text-cream-300/80 max-w-sm leading-relaxed mb-6">
              A high-end editorial digital storefront concept by Veyra Studio for boutique home bakeries and custom cake studios. Small-batch, unhurried, and made with love.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-cocoa-800 hover:bg-terracotta transition-colors flex items-center justify-center text-cream-100"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={directWa}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-cocoa-800 hover:bg-whatsapp transition-colors flex items-center justify-center text-cream-100"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-terracotta-light mb-4">
              Explore Atelier
            </h4>
            <ul className="space-y-2 text-xs text-cream-300">
              <li><a href="#hero" className="hover:text-white transition-colors">Home &amp; Hero</a></li>
              <li><a href="#featured-cakes" className="hover:text-white transition-colors">Signature Cakes</a></li>
              <li><a href="#cake-build" className="hover:text-white transition-colors">Artisan Craft Build</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Curated Collections</a></li>
              <li><a href="#custom-cakes" className="hover:text-white transition-colors">Custom Atelier</a></li>
              <li><a href="#enquiry" className="hover:text-white transition-colors">WhatsApp Concierge</a></li>
            </ul>
          </div>

          {/* Kitchen & Lead Time Notice */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-terracotta-light mb-4">
              Studio Baking Hours
            </h4>
            <p className="text-xs text-cream-300 leading-relaxed mb-4">
              Orders baked fresh Tuesday through Sunday.<br />
              Order window closes 48 hours in advance for custom tier cakes.
            </p>
            <div className="p-3.5 rounded-xl bg-cocoa-800/80 border border-cocoa-700 text-xs text-cream-300">
              <span className="font-bold text-cream-100 block mb-0.5">Studio Kitchen Notice</span>
              Nut-aware and vegetarian friendly. 100% eggless options prepared in dedicated sterilized bakeware.
            </div>
          </div>

        </div>

        {/* Bottom Credits & Ethical Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-cream-300/60 text-center sm:text-left">
          <div>
            <span>© 2026 Maison Crumb · Concept &amp; Design by </span>
            <span className="text-cream-200 font-semibold">Veyra Studio</span>
            <span>. All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-cream-300 hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
