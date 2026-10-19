import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export default function LightboxModal({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-cocoa-900/85 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-4xl max-h-[90vh] z-10 flex flex-col items-center"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 p-2 text-white hover:text-terracotta-light transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-cocoa-700 max-h-[75vh] bg-cocoa-900">
            <img
              src={item.image}
              alt={item.title}
              className="max-h-[75vh] w-auto object-contain"
            />
          </div>

          {/* Caption */}
          <div className="mt-4 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-light">
              {item.tag}
            </span>
            <h3 className="font-serif-editorial text-xl sm:text-2xl font-bold text-white mt-1">
              {item.title}
            </h3>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
