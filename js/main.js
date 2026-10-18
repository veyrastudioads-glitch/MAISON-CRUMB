/**
 * MAISON CRUMB — PREMIUM HOME BAKERY DEMO
 * Website Concept by Veyra Studio
 * Client-Side Interactivity & WhatsApp Conversion System
 */

document.addEventListener('DOMContentLoaded', () => {
  // Demo WhatsApp number (placeholder compliant with guidelines)
  const DEMO_WHATSAPP_NUMBER = '919876543210';

  /* ==========================================================================
     1. PRODUCT DATA FOR QUICK-VIEW MODAL
     ========================================================================== */
  const CAKE_CATALOG = {
    'classic-chocolate': {
      title: 'Classic Chocolate Cake',
      category: 'Signature Cakes',
      price: '₹899',
      image: 'assets/images/cake-chocolate.jpg',
      description: 'Our timeless signature creation. Three layers of deeply rich, moist dark chocolate sponge layered with whipped 55% Belgian chocolate ganache, adorned with fresh blackberries and delicate chocolate curl shavings.',
      sponge: 'Dark Dutch cocoa sponge (eggless available)',
      filling: 'Silky dark chocolate ganache',
      sizes: '0.5 kg (Bento), 1.0 kg (6-8 servings), 1.5 kg (10-12 servings)',
      leadTime: '48 hours advance notice',
      allergens: 'Contains dairy, wheat (gluten). Eggless option on request.'
    },
    'vanilla-berry': {
      title: 'Vanilla Berry Cake',
      category: 'Signature Cakes',
      price: '₹949',
      image: 'assets/images/cake-vanilla-berry.jpg',
      description: 'An ethereal celebration of fresh flavours. Fluffy golden vanilla bean sponge layered with whipped Madagascar mascarpone cream, finished semi-naked with cascading organic blackberries, raspberries and red currants.',
      sponge: 'Madagascar vanilla bean sponge',
      filling: 'Light mascarpone cream & wild berry compote',
      sizes: '1.0 kg (6-8 servings), 1.5 kg (10-12 servings), 2-Tier Celebration',
      leadTime: '48 hours advance notice',
      allergens: 'Contains dairy, wheat (gluten). Made in a nut-aware kitchen.'
    },
    'strawberry-cream': {
      title: 'Strawberry Cream Cake',
      category: 'Seasonal Favorites',
      price: '₹999',
      image: 'assets/images/cake-strawberry-cream.jpg',
      description: 'Inspired by Japanese and Korean patisseries. Cloud-light chiffon layers paired with house-whipped Chantilly cream and freshly sliced sweet strawberries, finished with a rustic textured swirl and fresh mint.',
      sponge: 'Featherlight vanilla chiffon',
      filling: 'Fresh sweet strawberries & pure whipped cream',
      sizes: '0.5 kg Bento, 1.0 kg Standard, 1.5 kg Large',
      leadTime: '48 hours advance notice',
      allergens: 'Contains dairy, eggs, wheat. Vegetarian friendly.'
    },
    'chocolate-fudge': {
      title: 'Chocolate Fudge Cake',
      category: 'Indulgent Treats',
      price: '₹1,049',
      image: 'assets/images/cake-chocolate-fudge.jpg',
      description: 'An unapologetically decadent cake for true chocolate devotees. Intense dark chocolate layers filled with thick, glossy fudge frosting, finished with molten Belgian chocolate drippings and roasted cocoa dust.',
      sponge: 'Dense Valrhona chocolate fudge cake',
      filling: 'Slow-cooked chocolate fudge buttercream',
      sizes: '1.0 kg (6-8 servings), 1.5 kg (10-12 servings)',
      leadTime: '48 hours advance notice',
      allergens: 'Contains dairy, wheat, soy lecithin.'
    }
  };

  /* ==========================================================================
     2. STICKY NAVIGATION & SCROLL LISTENER
     ========================================================================== */
  const siteNav = document.getElementById('siteNav');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      siteNav.classList.add('scrolled');
    } else {
      siteNav.classList.remove('scrolled');
    }
  }, { passive: true });

  /* ==========================================================================
     3. MOBILE DRAWER NAVIGATION
     ========================================================================== */
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileClose = document.getElementById('mobileClose');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const openMobileNav = () => {
    mobileNav.classList.add('open');
    mobileNav.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileNav = () => {
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (mobileToggle) mobileToggle.addEventListener('click', openMobileNav);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileNav);
  
  if (mobileNav) {
    mobileNav.addEventListener('click', (e) => {
      if (e.target === mobileNav) closeMobileNav();
    });
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  /* ==========================================================================
     4. DATE PICKER MINIMUM DATE (2 DAYS FROM TODAY)
     ========================================================================== */
  const dateInput = document.getElementById('preferredDate');
  if (dateInput) {
    const today = new Date();
    // 2 days in advance for small-batch boutique baker
    const minDate = new Date(today);
    minDate.setDate(today.getDate() + 2);
    const yyyy = minDate.getFullYear();
    const mm = String(minDate.getMonth() + 1).padStart(2, '0');
    const dd = String(minDate.getDate()).padStart(2, '0');
    dateInput.min = `${yyyy}-${mm}-${dd}`;
    dateInput.value = `${yyyy}-${mm}-${dd}`;
  }

  /* ==========================================================================
     5. DYNAMIC WHATSAPP ENQUIRY SYSTEM & REAL-TIME PREVIEW
     ========================================================================== */
  const enquiryForm = document.getElementById('enquiryForm');
  const customerName = document.getElementById('customerName');
  const customerPhone = document.getElementById('customerPhone');
  const cakeType = document.getElementById('cakeType');
  const preferredServings = document.getElementById('preferredServings');
  const flavorPreference = document.getElementById('flavorPreference');
  const customerNotes = document.getElementById('customerNotes');
  const waPreviewText = document.getElementById('waPreviewText');
  const btnSendWhatsApp = document.getElementById('btnSendWhatsApp');

  function generateWhatsAppMessage() {
    const name = customerName?.value.trim() || 'A Guest';
    const phone = customerPhone?.value.trim() || 'Not provided';
    const type = cakeType?.value || 'Custom Cake Creation';
    const date = dateInput?.value || 'Flexible';
    const servings = preferredServings?.value || '6–8 Servings';
    const flavor = flavorPreference?.value || 'Chef Choice / Custom';
    const notes = customerNotes?.value.trim() || 'None specified';

    return `🍰 *NEW CAKE ENQUIRY — MAISON CRUMB*\n` +
      `------------------------------------\n` +
      `👤 *Name:* ${name}\n` +
      `📱 *Phone / WhatsApp:* ${phone}\n` +
      `🎂 *Cake Type:* ${type}\n` +
      `📅 *Preferred Date:* ${date}\n` +
      `👥 *Servings:* ${servings}\n` +
      `✨ *Flavor:* ${flavor}\n` +
      `📝 *Requirements / Design Notes:* ${notes}\n` +
      `------------------------------------\n` +
      `_Sent via Maison Crumb Demo Concept by Veyra Studio_`;
  }

  function updateWhatsAppPreview() {
    if (!waPreviewText) return;
    waPreviewText.textContent = generateWhatsAppMessage();
  }

  // Bind input listeners for live updates
  const formInputs = [customerName, customerPhone, cakeType, dateInput, preferredServings, flavorPreference, customerNotes];
  formInputs.forEach(input => {
    if (input) {
      input.addEventListener('input', updateWhatsAppPreview);
      input.addEventListener('change', updateWhatsAppPreview);
    }
  });

  // Initial preview sync
  updateWhatsAppPreview();

  // Send WhatsApp Action
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const message = generateWhatsAppMessage();
      const whatsappUrl = `https://wa.me/${DEMO_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      
      showToast('Opening WhatsApp with your bespoke cake enquiry...');
      
      setTimeout(() => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }, 500);
    });
  }

  // Pre-fill enquiry form when clicking category or custom cake CTA
  window.selectCakeType = function(typeName) {
    if (cakeType) {
      for (let i = 0; i < cakeType.options.length; i++) {
        if (cakeType.options[i].text.toLowerCase().includes(typeName.toLowerCase())) {
          cakeType.selectedIndex = i;
          break;
        }
      }
      updateWhatsAppPreview();
    }
    
    // Smooth scroll to enquiry section
    const enquirySec = document.getElementById('enquiry');
    if (enquirySec) {
      enquirySec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /* ==========================================================================
     6. DIRECT CHAT CTA BUTTONS (NAV, HERO, CONTACT, STICKY)
     ========================================================================== */
  const directWhatsAppButtons = document.querySelectorAll('.js-whatsapp-direct');
  directWhatsAppButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const customMsg = btn.dataset.message || "Hi Maison Crumb! I'm interested in ordering a handcrafted cake for an upcoming celebration.";
      const url = `https://wa.me/${DEMO_WHATSAPP_NUMBER}?text=${encodeURIComponent(customMsg)}`;
      showToast('Connecting you to Maison Crumb on WhatsApp...');
      setTimeout(() => {
        window.open(url, '_blank', 'noopener,noreferrer');
      }, 400);
    });
  });

  /* ==========================================================================
     7. PRODUCT DETAILS QUICK-VIEW MODAL
     ========================================================================== */
  const productModal = document.getElementById('productModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalImg = document.getElementById('modalImg');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const modalDesc = document.getElementById('modalDesc');
  const modalSponge = document.getElementById('modalSponge');
  const modalFilling = document.getElementById('modalFilling');
  const modalSizes = document.getElementById('modalSizes');
  const modalLead = document.getElementById('modalLead');
  const modalOrderBtn = document.getElementById('modalOrderBtn');

  let currentCakeKey = null;

  window.openProductModal = function(cakeKey) {
    const data = CAKE_CATALOG[cakeKey];
    if (!data || !productModal) return;

    currentCakeKey = cakeKey;
    modalImg.src = data.image;
    modalImg.alt = data.title;
    modalCategory.textContent = data.category;
    modalTitle.textContent = data.title;
    modalPrice.textContent = `From ${data.price}`;
    modalDesc.textContent = data.description;
    modalSponge.textContent = data.sponge;
    modalFilling.textContent = data.filling;
    modalSizes.textContent = data.sizes;
    modalLead.textContent = data.leadTime;

    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeProductModal = () => {
    if (!productModal) return;
    productModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProductModal);
  if (productModal) {
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) closeProductModal();
    });
  }

  if (modalOrderBtn) {
    modalOrderBtn.addEventListener('click', () => {
      const cake = CAKE_CATALOG[currentCakeKey];
      if (!cake) return;
      
      const msg = `Hi Maison Crumb! I'm interested in ordering the *${cake.title}* (${cake.price}). Could you please share slot availability and options?`;
      const url = `https://wa.me/${DEMO_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
      
      closeProductModal();
      showToast(`Initiating enquiry for ${cake.title}...`);
      setTimeout(() => {
        window.open(url, '_blank', 'noopener,noreferrer');
      }, 400);
    });
  }

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeLightbox();
      closeMobileNav();
    }
  });

  /* ==========================================================================
     8. GALLERY FILTER & LIGHTBOX MODAL
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  // Filter interaction
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      galleryItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Lightbox click
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const tag = item.querySelector('.gallery-tag')?.textContent || 'Maison Crumb Artisanal Creation';

      if (img && lightboxModal && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        if (lightboxCaption) lightboxCaption.textContent = tag;
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeLightbox = () => {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  /* ==========================================================================
     9. SCROLL-TRIGGERED REVEAL ANIMATIONS (INTERSECTION OBSERVER)
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal-init');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback if IntersectionObserver isn't supported
    revealElements.forEach(el => el.classList.add('reveal-active'));
  }

  /* ==========================================================================
     10. TOAST NOTIFICATION UTILITY
     ========================================================================== */
  let toastTimeout = null;
  function showToast(message) {
    let toast = document.getElementById('toastNotice');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toastNotice';
      toast.className = 'toast-notice';
      toast.innerHTML = `
        <svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <div class="toast-content">
          <h6>Maison Crumb Concierge</h6>
          <p id="toastMsgText">${message}</p>
        </div>
      `;
      document.body.appendChild(toast);
    } else {
      const msgText = document.getElementById('toastMsgText');
      if (msgText) msgText.textContent = message;
    }

    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }
});
