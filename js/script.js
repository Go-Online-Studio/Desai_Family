/**
 * ==============================================================================
 * GRIHA PRAVESH INVITATION WEBSITE — INTERACTIVE SCRIPT
 * ==============================================================================
 * 
 * CONFIGURATION GUIDE:
 * To update the Google Maps venue location:
 * 1. Open Google Maps and search for your venue address.
 * 2. Click "Share" and copy the link (or copy your coordinates/address).
 * 3. Replace the placeholder URL in `INVITATION_CONFIG.venueMapUrl` below.
 * ==============================================================================
 */

const INVITATION_CONFIG = {
  // Venue Google Maps link: 23 Amar park society, Waghodia Road, Zavernagar, Vadodara - 390019
  venueMapUrl: 'https://www.google.com/maps/search/?api=1&query=23+Amar+park+society+waghodia+road+zavernagar+Vadodara+390019'
};

document.addEventListener('DOMContentLoaded', () => {
  initVenueButton();
  initScrollAnimations();
});

/**
 * Configure the venue map link and click handler
 */
function initVenueButton() {
  const venueBtn = document.getElementById('venueMapBtn');
  if (!venueBtn) return;

  // Set the actual href link from configuration
  venueBtn.setAttribute('href', INVITATION_CONFIG.venueMapUrl);

  venueBtn.addEventListener('click', (e) => {
    // If the URL is still the default placeholder, provide friendly feedback
    if (INVITATION_CONFIG.venueMapUrl.includes('[YOUR_VENUE_LOCATION_HERE]')) {
      e.preventDefault();
      alert('કૃપા કરીને js/script.js માં તમારા સ્થળની Google Maps લિંક ઉમેરો.\n(Please configure your Google Maps venue URL in js/script.js)');
    }
  });
}

/**
 * Intersection Observer for smooth, subtle scroll reveals
 */
function initScrollAnimations() {
  // Respect user preference for reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('[data-animate="fade-up"]').forEach((el) => {
      el.classList.add('is-revealed');
    });
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -8% 0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatableElements = document.querySelectorAll('[data-animate="fade-up"]');
  animatableElements.forEach((el) => {
    observer.observe(el);
  });
}
