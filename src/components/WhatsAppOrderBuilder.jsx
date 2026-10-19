import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Send, Calendar, Users, HeartHandshake, Sparkles, CheckCheck, AlertCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/bakeryData';

export default function WhatsAppOrderBuilder({ selectedCakeType, onToast }) {
  // Compute minimum date (2 days ahead for small-batch boutique baking)
  const getMinDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    return d.toISOString().split('T')[0];
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    cakeType: 'Classic Chocolate Cake',
    date: getMinDate(),
    servings: '6–8 Servings (1.0 kg)',
    flavor: 'Dark Chocolate Ganache',
    isEggless: false,
    notes: ''
  });

  const [formError, setFormError] = useState('');

  // Update cakeType if pre-selected externally
  useEffect(() => {
    if (selectedCakeType) {
      setFormData((prev) => ({ ...prev, cakeType: selectedCakeType }));
    }
  }, [selectedCakeType]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setFormError('');
  };

  // Generate formatted WhatsApp message text
  const generateWhatsAppMessage = () => {
    const name = formData.name.trim() || 'A Guest';
    const phone = formData.phone.trim() || 'Not provided';
    const cake = formData.cakeType;
    const date = formData.date || 'Flexible';
    const servings = formData.servings;
    const flavor = formData.flavor;
    const eggless = formData.isEggless ? 'Yes (100% Eggless)' : 'No (Standard)';
    const notes = formData.notes.trim() || 'None specified';

    return `🍰 *NEW CAKE ENQUIRY — MAISON CRUMB*\n` +
      `────────────────────────\n` +
      `👤 *Name:* ${name}\n` +
      `📱 *Phone / WhatsApp:* ${phone}\n` +
      `🎂 *Cake Style:* ${cake}\n` +
      `📅 *Preferred Date:* ${date}\n` +
      `👥 *Servings / Size:* ${servings}\n` +
      `✨ *Flavor:* ${flavor}\n` +
      `🌱 *Eggless:* ${eggless}\n` +
      `📝 *Notes & Inscription:* ${notes}\n` +
      `────────────────────────\n` +
      `_Sent via Maison Crumb Concierge_`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const missing = [];
    if (!formData.name.trim()) missing.push('Your Name');
    if (!formData.phone.trim()) missing.push('WhatsApp Number');
    if (!formData.date.trim()) missing.push('Preferred Date');

    if (missing.length > 0) {
      const errorMsg = `Please fill in required fields: ${missing.join(', ')}.`;
      setFormError(errorMsg);
      if (onToast) onToast(errorMsg);
      return;
    }

    setFormError('');
    const message = generateWhatsAppMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    if (onToast) onToast('Opening WhatsApp with your bespoke cake inquiry...');
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="enquiry" className="py-20 sm:py-28 bg-cream-100 border-t border-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200 border border-cream-300 text-taupe-600 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-terracotta" />
            <span>Direct WhatsApp Concierge</span>
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-normal text-cocoa-900 leading-tight mb-4">
            Reserve your <span className="italic font-light text-terracotta">oven slot.</span>
          </h2>
          <p className="text-sm sm:text-base text-taupe-600 font-normal leading-relaxed">
            Fill in your celebration details below. Our interactive live preview generates your bespoke WhatsApp inquiry in real-time.
          </p>
        </div>

        {/* Builder Layout: Form on Left, Live Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-soft">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-cocoa-900 mb-2">
                    Your Name <span className="text-terracotta">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-300 focus:border-terracotta focus:ring-1 focus:ring-terracotta text-sm text-cocoa-900 outline-none transition-all placeholder:text-taupe-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-cocoa-900 mb-2">
                    WhatsApp Number <span className="text-terracotta">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-300 focus:border-terracotta focus:ring-1 focus:ring-terracotta text-sm text-cocoa-900 outline-none transition-all placeholder:text-taupe-400"
                  />
                </div>
              </div>

              {/* Cake Type & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-cocoa-900 mb-2">
                    Cake Style / Category <span className="text-terracotta">*</span>
                  </label>
                  <select
                    name="cakeType"
                    value={formData.cakeType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-300 focus:border-terracotta focus:ring-1 focus:ring-terracotta text-sm text-cocoa-900 outline-none transition-all cursor-pointer"
                  >
                    <optgroup label="Signature Cakes">
                      <option value="Classic Chocolate Cake">Classic Chocolate Cake (₹899)</option>
                      <option value="Vanilla Berry Cake">Vanilla Berry Cake (₹949)</option>
                      <option value="Strawberry Cream Cake">Strawberry Cream Cake (₹999)</option>
                      <option value="Chocolate Fudge Cake">Chocolate Fudge Cake (₹1,049)</option>
                    </optgroup>
                    <optgroup label="Curated Collections">
                      <option value="Bento Cake (4-inch Korean Lunchbox)">Bento Cake (4-inch Korean Lunchbox)</option>
                      <option value="Vintage Ribbon Birthday Cake">Vintage Ribbon Birthday Cake</option>
                      <option value="Custom Atelier Cake Commission">Custom Atelier Cake Commission</option>
                      <option value="Artisan Cupcake Flight (Box of 6/12)">Artisan Cupcake Flight (Box of 6/12)</option>
                      <option value="Belgian Sea Salt Brownies">Belgian Sea Salt Brownies</option>
                      <option value="Tiered Celebration Cake">Tiered Celebration Cake</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-cocoa-900">
                      Preferred Date <span className="text-terracotta">*</span>
                    </label>
                    <span className="text-[10px] font-semibold text-terracotta bg-terracotta-soft px-2 py-0.5 rounded-full">
                      Min 48h Notice
                    </span>
                  </div>
                  <input
                    type="date"
                    name="date"
                    required
                    min={getMinDate()}
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-300 focus:border-terracotta focus:ring-1 focus:ring-terracotta text-sm text-cocoa-900 outline-none transition-all cursor-pointer"
                  />
                </div>
              </div>

              {/* Servings & Flavor */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-cocoa-900 mb-2">
                    Servings / Cake Weight
                  </label>
                  <select
                    name="servings"
                    value={formData.servings}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-300 focus:border-terracotta focus:ring-1 focus:ring-terracotta text-sm text-cocoa-900 outline-none transition-all cursor-pointer"
                  >
                    <option value="Bento 0.5 kg (1–2 Servings)">Bento 0.5 kg (1–2 Servings)</option>
                    <option value="Standard 1.0 kg (6–8 Servings)">Standard 1.0 kg (6–8 Servings)</option>
                    <option value="Large 1.5 kg (10–12 Servings)">Large 1.5 kg (10–12 Servings)</option>
                    <option value="2-Tier Celebration (16–22 Servings)">2-Tier Celebration (16–22 Servings)</option>
                    <option value="Party Size 30+ Servings">Party Size 30+ Servings</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-cocoa-900 mb-2">
                    Flavor Profile
                  </label>
                  <select
                    name="flavor"
                    value={formData.flavor}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-300 focus:border-terracotta focus:ring-1 focus:ring-terracotta text-sm text-cocoa-900 outline-none transition-all cursor-pointer"
                  >
                    <option value="Dark Chocolate Ganache">Dark Chocolate Ganache (55% Belgian)</option>
                    <option value="Madagascar Vanilla Mascarpone">Madagascar Vanilla Mascarpone</option>
                    <option value="Fresh Strawberry & Chantilly Cream">Fresh Strawberry &amp; Chantilly Cream</option>
                    <option value="Valrhona Salted Caramel Fudge">Valrhona Salted Caramel Fudge</option>
                    <option value="Matcha White Chocolate Ganache">Matcha White Chocolate Ganache</option>
                    <option value="Espresso Roasted Hazelnut">Espresso Roasted Hazelnut</option>
                  </select>
                </div>
              </div>

              {/* Eggless Checkbox Toggle */}
              <div className="p-4 rounded-xl bg-cream-50 border border-cream-300/80 flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-cocoa-900 flex items-center gap-1.5">
                    <span>🌱</span> 100% Eggless Preparation
                  </span>
                  <p className="text-xs text-taupe-500 mt-0.5">
                    Baked in an eggless-designated oven tray without compromising sponge fluffiness.
                  </p>
                </div>
                <input
                  type="checkbox"
                  name="isEggless"
                  id="isEggless"
                  checked={formData.isEggless}
                  onChange={handleChange}
                  className="w-5 h-5 rounded text-terracotta focus:ring-terracotta border-cream-300 cursor-pointer"
                />
              </div>

              {/* Requirements & Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-cocoa-900 mb-2">
                  Personalized Inscription &amp; Design Notes
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="e.g. Please pipe 'Happy 30th Clara' in vintage cursive with ivory ribbon border. Studio pickup at 4 PM."
                  className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-300 focus:border-terracotta focus:ring-1 focus:ring-terracotta text-sm text-cocoa-900 outline-none transition-all placeholder:text-taupe-400"
                />
              </div>

              {/* Error Message */}
              {formError && (
                <div className="flex items-center gap-2 text-xs font-bold text-red-600 bg-red-50 p-3 rounded-xl border border-red-200">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {/* Submit CTA */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 px-6 rounded-2xl text-xs font-bold uppercase tracking-widest bg-whatsapp text-white hover:bg-whatsapp-hover transition-colors shadow-soft hover:shadow-elevated flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Send Bespoke Enquiry via WhatsApp</span>
              </motion.button>
            </form>
          </div>

          {/* Right Column: Live WhatsApp Chat Simulation */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-[#EFEAE2] rounded-3xl overflow-hidden shadow-elevated border border-cream-300">
              
              {/* WhatsApp App Bar Header */}
              <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src="/assets/images/about-baker.jpg"
                      alt="Maison Crumb"
                      className="w-10 h-10 rounded-full object-cover border border-white/20"
                    />
                    <span className="w-3 h-3 rounded-full bg-emerald-400 absolute bottom-0 right-0 border-2 border-[#075E54]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold flex items-center gap-1.5">
                      <span>Maison Crumb Studio</span>
                      <span className="text-[10px] bg-emerald-700/80 px-1.5 py-0.2 rounded font-mono">
                        VERIFIED
                      </span>
                    </h4>
                    <p className="text-[11px] text-emerald-100">
                      Online · Replies within 15 mins
                    </p>
                  </div>
                </div>
              </div>

              {/* Chat Canvas */}
              <div className="p-4 sm:p-5 min-h-[380px] flex flex-col justify-between bg-[radial-gradient(#d4cbbe_1px,transparent_1px)] [background-size:16px_16px]">
                
                {/* Incoming Welcome Message */}
                <div className="self-start max-w-[85%] bg-white rounded-2xl rounded-tl-none p-3.5 shadow-xs text-xs text-cocoa-900 border border-black/5">
                  <p className="font-medium">
                    Bonjour! Welcome to Maison Crumb. As you select your preferences on the left, your custom message prepares right here in real time.
                  </p>
                  <span className="block text-[10px] text-taupe-400 text-right mt-1">10:00 AM</span>
                </div>

                {/* Outgoing Live Generated Message Bubble */}
                <div className="self-end max-w-[92%] bg-[#DCF8C6] rounded-2xl rounded-tr-none p-3.5 shadow-xs text-xs text-cocoa-900 border border-black/5 mt-4">
                  <pre className="whitespace-pre-wrap font-sans text-xs leading-relaxed text-cocoa-900 font-medium">
                    {generateWhatsAppMessage()}
                  </pre>
                  
                  <div className="flex items-center justify-end gap-1 mt-2 text-[10px] text-taupe-500">
                    <span>Ready to send</span>
                    <CheckCheck className="w-3.5 h-3.5 text-blue-500" />
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="mt-4 pt-3 border-t border-cream-300/60 text-center">
                  <p className="text-[11px] text-taupe-500">
                    Clicking send will securely launch WhatsApp with this formatted inquiry.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
