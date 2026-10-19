import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function AnnouncementBar({ onReserveClick }) {
  return (
    <aside className="bg-cocoa-900 text-cream-100 text-xs py-2 px-4 border-b border-cocoa-800 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide bg-terracotta/20 text-terracotta-light border border-terracotta/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for Order
          </span>
          <span className="text-cream-200/90 font-medium">
            Taking limited orders for next week · Small-batch &amp; handcrafted
          </span>
        </div>

        <div className="flex items-center gap-4 text-cream-300">
          <span className="hidden md:inline-block text-[11px] text-cream-300/60 uppercase tracking-widest font-mono">
            Concept by Veyra Studio
          </span>
          <a
            href="#enquiry"
            onClick={(e) => {
              if (onReserveClick) {
                e.preventDefault();
                onReserveClick();
              }
            }}
            className="inline-flex items-center gap-1 font-semibold text-terracotta-light hover:text-white transition-colors group cursor-pointer text-xs"
          >
            <span>Reserve a Slot</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </aside>
  );
}
