import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X } from 'lucide-react';

export default function ToastNotice({ message, onClose }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-20 md:bottom-8 right-4 sm:right-8 z-50 max-w-sm w-full bg-cocoa-900 text-white rounded-2xl p-4 shadow-modal border border-cocoa-700 flex items-start gap-3"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
            <CheckCircle2 className="w-4 h-4" />
          </div>

          <div className="flex-1 min-w-0">
            <h5 className="text-xs font-bold uppercase tracking-wider text-terracotta-light">
              Maison Crumb Concierge
            </h5>
            <p className="text-xs text-cream-200 mt-0.5 leading-snug">
              {message}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-cream-400 hover:text-white p-1 rounded-md transition-colors"
            aria-label="Dismiss notification"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
