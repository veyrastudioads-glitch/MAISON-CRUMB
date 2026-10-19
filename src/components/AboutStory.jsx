import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Coffee, ShieldCheck } from 'lucide-react';

export default function AboutStory() {
  const pillars = [
    {
      title: 'Real French Butter & Cocoa',
      desc: 'No chemical cake gels, imitation essences, or hydrogenated shortening. Pure slow ingredients that taste natural.'
    },
    {
      title: 'Unhurried Artisanal Craft',
      desc: 'Sponge layers are baked, soaked, filled, and rested for 48 hours to ensure moist crumb stability and pure flavour integration.'
    },
    {
      title: 'Thoughtful Sustainable Packaging',
      desc: 'Every bake leaves our kitchen in recyclable kraft boxes, finished with natural linen ribbon and botanical sprigs.'
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Image with layered quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-cream-300 aspect-[4/5] bg-cream-200">
            <img
              src="/assets/images/about-baker.jpg"
              alt="Maison Crumb Head Baker crafting celebration cake"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>

          {/* Floating Quote Box */}
          <div className="absolute -bottom-6 -right-4 sm:-right-6 max-w-xs p-5 rounded-2xl bg-white border border-cream-300 shadow-modal">
            <span className="font-serif-editorial text-3xl font-light text-terracotta leading-none">“</span>
            <p className="font-serif-editorial text-sm italic text-cocoa-900 leading-snug -mt-2">
              A cake isn't just sugar and flour; it's the centerpiece of someone's happiest memory.
            </p>
            <span className="block mt-2 text-[10px] font-bold uppercase tracking-wider text-taupe-500">
              — Maison Crumb Baker
            </span>
          </div>
        </motion.div>

        {/* Right Column: Editorial Narrative */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200 border border-cream-300 text-taupe-600 text-xs font-bold uppercase tracking-wider mb-4">
            <Heart className="w-3.5 h-3.5 text-terracotta" />
            <span>Our Bakery Philosophy</span>
          </div>

          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-normal text-cocoa-900 leading-tight mb-6">
            Baked from a little kitchen <br className="hidden sm:inline" />
            <span className="italic font-light text-terracotta">with a lot of love.</span>
          </h2>

          <p className="text-sm sm:text-base text-taupe-600 leading-relaxed font-normal mb-6">
            Maison Crumb began as an obsession with slow French pâtisserie and Korean minimalist bento cakes. We rejected overly sweet fondant sculptures and industrial premixes, choosing instead to focus on cloud-like chiffon, velvety ganache, and natural seasonal fruit.
          </p>

          <p className="text-sm sm:text-base text-taupe-600 leading-relaxed font-normal mb-10">
            Because we bake in limited batches every morning, our oven slots fill up quickly. Each cake is treated as an individual piece of culinary art.
          </p>

          {/* Pillars */}
          <div className="space-y-5 pt-6 border-t border-cream-300">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-cream-200 border border-cream-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-terracotta" />
                </div>
                <div>
                  <h4 className="font-serif-editorial text-lg font-bold text-cocoa-900 mb-0.5">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-taupe-500 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
