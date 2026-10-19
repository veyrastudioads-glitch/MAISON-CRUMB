import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, AlertCircle, CheckCircle2, Cake, ShieldCheck } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/bakeryData';

export default function QuickViewModal({ cake, onClose, onCustomize }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (cake) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [cake, onClose]);

  if (!cake) return null;

  const whatsappInquiryUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Maison Crumb! I'd like to enquire about ordering the ${cake.title} (${cake.price}).`
  )}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-cocoa-900/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-white w-full max-w-3xl rounded-3xl shadow-modal border border-cream-300 overflow-hidden z-10 my-auto"
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-cream-100/80 hover:bg-cream-200 text-cocoa-900 transition-colors shadow-xs"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Left: Product Imagery */}
            <div className="relative aspect-square md:aspect-auto md:h-full bg-cream-100 overflow-hidden">
              <img
                src={cake.image}
                alt={cake.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-4 left-4 bg-cream-100/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-cocoa-900 border border-cream-300">
                {cake.category}
              </div>
            </div>

            {/* Right: Product Details */}
            <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[80vh] overflow-y-auto">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-terracotta">
                    Atelier Creation
                  </span>
                  <span className="font-serif-editorial text-2xl font-bold text-cocoa-900">
                    From {cake.price}
                  </span>
                </div>

                <h2 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-cocoa-900 mb-3">
                  {cake.title}
                </h2>

                <p className="text-sm text-taupe-600 leading-relaxed mb-6 font-normal">
                  {cake.description}
                </p>

                {/* Recipe & Specs List */}
                <div className="space-y-3 pt-4 border-t border-cream-200 text-xs">
                  <div className="flex items-start gap-2.5">
                    <Cake className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-cocoa-900">Sponge: </strong>
                      <span className="text-taupe-600">{cake.sponge}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-cocoa-900">Filling &amp; Frosting: </strong>
                      <span className="text-taupe-600">{cake.filling}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-cocoa-900">Lead Time: </strong>
                      <span className="text-taupe-600">{cake.leadTime}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-cocoa-900">Available Sizes: </strong>
                      <span className="text-taupe-600">{cake.sizes}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 pt-2 border-t border-cream-200">
                    <AlertCircle className="w-4 h-4 text-taupe-400 shrink-0 mt-0.5" />
                    <span className="text-[11px] text-taupe-500 italic">
                      {cake.allergens}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-cream-200 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-whatsapp text-white hover:bg-whatsapp-hover transition-colors shadow-soft"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Inquire on WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    onClose();
                    onCustomize(cake.title);
                  }}
                  className="inline-flex items-center justify-center py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-cream-100 hover:bg-cream-200 text-cocoa-900 transition-colors border border-cream-300 cursor-pointer"
                >
                  Customise &amp; Book
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
