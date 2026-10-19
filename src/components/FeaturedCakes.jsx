import React from 'react';
import { motion } from 'motion/react';
import { Eye, ArrowUpRight, Sparkles } from 'lucide-react';
import { CAKE_CATALOG, WHATSAPP_NUMBER } from '../data/bakeryData';

export default function FeaturedCakes({ onOpenQuickView, onSelectCakeForOrder }) {
  const cakes = Object.values(CAKE_CATALOG);

  return (
    <section id="featured-cakes" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 border border-cream-300 text-taupe-600 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-terracotta" />
            <span>Curated Menu · Fresh Daily</span>
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-normal text-cocoa-900 leading-tight">
            Our Signature <span className="italic font-light text-terracotta">Creations</span>
          </h2>
        </div>
        <p className="text-sm sm:text-base text-taupe-600 max-w-md mt-4 md:mt-0 font-normal">
          Each recipe is perfected through dozens of test bakes. Balanced sweetness, real cream, and pure cocoa without artificial pastes.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {cakes.map((cake, idx) => {
          const directWa = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi Maison Crumb! I would like to inquire about ordering the ${cake.title} (${cake.price}).`)}`;

          return (
            <motion.div
              key={cake.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl overflow-hidden border border-cream-300/80 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              {/* Image & Badges */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-100">
                <img
                  src={cake.image}
                  alt={cake.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Badge */}
                {cake.badge && (
                  <span className="absolute top-3 left-3 bg-cream-100/90 backdrop-blur-md text-cocoa-900 border border-cream-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                    {cake.badge}
                  </span>
                )}

                {/* Quick View Button overlay on hover */}
                <button
                  onClick={() => onOpenQuickView(cake)}
                  className="absolute inset-0 bg-cocoa-900/30 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-semibold text-xs uppercase tracking-wider cursor-pointer"
                  aria-label={`Quick view ${cake.title}`}
                >
                  <span className="px-4 py-2 bg-cocoa-900/90 rounded-full flex items-center gap-2 shadow-soft hover:bg-cocoa-900">
                    <Eye className="w-3.5 h-3.5" />
                    Quick View
                  </span>
                </button>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-taupe-500">
                      {cake.category}
                    </span>
                    <span className="font-serif-editorial text-lg font-bold text-terracotta">
                      {cake.price}
                    </span>
                  </div>

                  <h3 className="font-serif-editorial text-xl font-bold text-cocoa-900 group-hover:text-terracotta transition-colors mb-2">
                    {cake.title}
                  </h3>

                  <p className="text-xs text-taupe-500 line-clamp-2 leading-relaxed mb-4">
                    {cake.description}
                  </p>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-cream-200 flex items-center gap-2">
                  <button
                    onClick={() => onOpenQuickView(cake)}
                    className="flex-1 py-2 px-3 rounded-lg text-xs font-bold text-cocoa-900 bg-cream-100 hover:bg-cream-200 transition-colors text-center cursor-pointer"
                  >
                    Details
                  </button>
                  <a
                    href={directWa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded-lg text-xs font-bold text-white bg-whatsapp hover:bg-whatsapp-hover transition-colors flex items-center justify-center gap-1.5"
                    title="Order via WhatsApp"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
