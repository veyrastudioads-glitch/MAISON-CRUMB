import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/bakeryData';

export default function ArtisanalGallery({ onOpenLightbox }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Bakes' },
    { id: 'celebration', label: 'Celebration Cakes' },
    { id: 'petite', label: 'Petite Treats' },
    { id: 'packaging', label: 'Packaging & Details' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-cream-200/50 border-t border-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-100 border border-cream-300 text-taupe-600 text-xs font-bold uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5 text-terracotta" />
              <span>Visual Gallery</span>
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-normal text-cocoa-900 leading-tight">
              Captured in the <span className="italic font-light text-terracotta">studio.</span>
            </h2>
          </div>

          {/* Filter Tabs with Motion layoutId */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-cream-300/40 rounded-full border border-cream-300 mt-6 md:mt-0">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`relative px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-colors cursor-pointer ${
                    isActive ? 'text-cocoa-900' : 'text-taupe-600 hover:text-cocoa-900'
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <motion.div
                      layoutId="galleryTabPill"
                      className="absolute inset-0 bg-white rounded-full shadow-xs -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                onClick={() => onOpenLightbox(item)}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-cream-100 border border-cream-300 shadow-soft hover:shadow-elevated cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-600"
                  loading="lazy"
                />

                {/* Hover overlay with tag and zoom icon */}
                <div className="absolute inset-0 bg-cocoa-900/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-5 text-white">
                  <div className="flex justify-end">
                    <span className="p-2 rounded-full bg-white/20 backdrop-blur-md">
                      <ZoomIn className="w-4 h-4" />
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-terracotta-light">
                      {item.tag}
                    </span>
                    <h4 className="font-serif-editorial text-xl font-bold text-white">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
