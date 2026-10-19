import React, { useState, useEffect } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import SiteNav from './components/SiteNav';
import Hero from './components/Hero';
import FeaturedCakes from './components/FeaturedCakes';
import CakeBuildShowcase from './components/CakeBuildShowcase';
import CakeCategories from './components/CakeCategories';
import CustomCakeAtelier from './components/CustomCakeAtelier';
import ProcessSteps from './components/ProcessSteps';
import ArtisanalGallery from './components/ArtisanalGallery';
import AboutStory from './components/AboutStory';
import WhatsAppOrderBuilder from './components/WhatsAppOrderBuilder';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import QuickViewModal from './components/QuickViewModal';
import LightboxModal from './components/LightboxModal';
import ToastNotice from './components/ToastNotice';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [quickViewCake, setQuickViewCake] = useState(null);
  const [lightboxItem, setLightboxItem] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [selectedCakeType, setSelectedCakeType] = useState('');

  // Toast trigger helper with auto-dismiss
  const showToast = (msg) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage('');
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  // Smooth scroll to element helper
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Off-thread IntersectionObserver section spy (zero scroll reflow)
  useEffect(() => {
    const sections = ['hero', 'featured-cakes', 'cake-build', 'categories', 'custom-cakes', 'process', 'gallery', 'about', 'enquiry'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -50% 0px',
        threshold: 0
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSelectCakeForOrder = (cakeName) => {
    setSelectedCakeType(cakeName);
    scrollTo('enquiry');
    showToast(`Selected "${cakeName}" in the WhatsApp Order Concierge.`);
  };

  return (
    <div className="min-h-screen bg-cream-100 text-cocoa-900 font-sans selection:bg-terracotta selection:text-white">
      {/* 1. Announcement Bar */}
      <AnnouncementBar onReserveClick={() => scrollTo('enquiry')} />

      {/* 2. Sticky Editorial Navigation */}
      <SiteNav activeSection={activeSection} />

      {/* Main Content */}
      <main>
        {/* 3. Hero Section */}
        <Hero
          onExploreClick={() => scrollTo('featured-cakes')}
          onOrderClick={() => scrollTo('enquiry')}
        />

        {/* 4. Featured Signature Cakes */}
        <FeaturedCakes
          onOpenQuickView={(cake) => setQuickViewCake(cake)}
          onSelectCakeForOrder={handleSelectCakeForOrder}
        />

        {/* 5. Craftsmanship & Interactive Cake Build Section */}
        <CakeBuildShowcase />

        {/* 6. Curated Categories */}
        <CakeCategories
          onSelectCategory={(categoryName) => handleSelectCakeForOrder(categoryName)}
        />

        {/* 7. Custom Cake Atelier Experience */}
        <CustomCakeAtelier
          onCustomConsultation={() => handleSelectCakeForOrder('Custom Atelier Cake Commission')}
        />

        {/* 8. 4-Step Ordering Process */}
        <ProcessSteps />

        {/* 9. Visual Gallery & Lightbox */}
        <ArtisanalGallery
          onOpenLightbox={(item) => setLightboxItem(item)}
        />

        {/* 10. Warm Storytelling & Bakery Philosophy */}
        <AboutStory />

        {/* 11. Live WhatsApp Order Builder & Real-Time Chat Simulation */}
        <WhatsAppOrderBuilder
          selectedCakeType={selectedCakeType}
          onToast={showToast}
        />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* 13. Mobile Sticky Bottom CTA */}
      <MobileBottomBar onReserveClick={() => scrollTo('enquiry')} />

      {/* Modals & Overlays */}
      <QuickViewModal
        cake={quickViewCake}
        onClose={() => setQuickViewCake(null)}
        onCustomize={(title) => handleSelectCakeForOrder(title)}
      />

      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
      />

      <ToastNotice
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />
    </div>
  );
}
