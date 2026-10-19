import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Tag } from 'lucide-react';
import { CATEGORIES } from '../data/bakeryData';

export default function CakeCategories({ onSelectCategory }) {
  return (
    <section id="categories" className="py-20 sm:py-28 bg-cream-100 border-t border-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200 border border-cream-300 text-taupe-600 text-xs font-bold uppercase tracking-wider mb-4">
            <Tag className="w-3.5 h-3.5 text-terracotta" />
            <span>Curated Collections</span>
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-normal text-cocoa-900 leading-tight mb-4">
            Cakes for every <span className="italic font-light text-terracotta">celebration.</span>
          </h2>
          <p className="text-sm sm:text-base text-taupe-600 leading-relaxed font-normal">
            From single-serving Korean bento boxes to multi-tiered wedding centerpieces, explore our artisanal range baked for your specific occasion.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl overflow-hidden border border-cream-300 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-cream-200">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-600"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-cream-100/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-cocoa-900 border border-cream-300 shadow-xs">
                  {category.tag}
                </span>
                <span className="absolute bottom-3 right-3 bg-cocoa-900/80 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-0.5 rounded-md">
                  {category.servings}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif-editorial text-2xl font-bold text-cocoa-900 group-hover:text-terracotta transition-colors">
                      {category.name}
                    </h3>
                    <span className="font-serif-editorial text-base font-bold text-terracotta">
                      {category.price}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-taupe-500 font-normal leading-relaxed mb-6">
                    {category.subtitle}
                  </p>
                </div>

                {/* Select button */}
                <button
                  onClick={() => onSelectCategory(category.name)}
                  className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-cocoa-900 bg-cream-100 hover:bg-cream-200 border border-cream-300 transition-colors group/btn cursor-pointer"
                >
                  <span>Inquire for {category.name}</span>
                  <ArrowRight className="w-4 h-4 text-terracotta group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
