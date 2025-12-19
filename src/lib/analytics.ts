// Google Analytics utility functions
// Replace 'G-XXXXXXXXXX' with your actual Google Analytics 4 Measurement ID

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

export const initGA = () => {
  if (typeof window === 'undefined') return;

  // Check if GA is already initialized
  if (window.gtag) return;

  // Create dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function(...args: any[]) {
    window.dataLayer!.push(args);
  };

  // Initialize gtag
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false, // We'll handle page views manually for SPA
  });
};

export const loadGAScript = () => {
  if (typeof document === 'undefined') return;
  
  // Check if script is already loaded
  if (document.querySelector(`script[src*="gtag/js"]`)) return;

  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);
};

export const trackPageView = (path: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
    page_title: document.title,
  });
};

export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', eventName, eventParams);
};

export const hasConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  try {
    const consentData = localStorage.getItem('cookieConsent');
    if (!consentData) return false;
    
    const consent = JSON.parse(consentData);
    if (consent.status === 'accepted') {
      // Check if consent has expired
      if (consent.expiresAt && new Date(consent.expiresAt) <= new Date()) {
        return false;
      }
      return true;
    }
    return false;
  } catch {
    return false;
  }
};


