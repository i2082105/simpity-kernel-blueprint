import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initGA, loadGAScript, trackPageView, hasConsent } from '@/lib/analytics';

export function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA only if user has consented
    if (hasConsent()) {
      initGA();
      loadGAScript();
    }
  }, []);

  useEffect(() => {
    // Track page views on route changes
    if (hasConsent()) {
      trackPageView(location.pathname + location.search);
    }
  }, [location]);

  // Listen for consent changes
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cookieConsent') {
        try {
          const consent = JSON.parse(e.newValue || '{}');
          if (consent.status === 'accepted') {
            initGA();
            loadGAScript();
            trackPageView(location.pathname + location.search);
          }
        } catch {
          // Ignore parse errors
        }
      }
    };

    // Handle custom event for same-window consent changes
    const handleConsentAccepted = () => {
      if (hasConsent() && !window.gtag) {
        initGA();
        loadGAScript();
        trackPageView(location.pathname + location.search);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('cookieConsentAccepted', handleConsentAccepted);
    
    // Also check for consent changes periodically (fallback)
    const checkConsent = () => {
      if (hasConsent() && !window.gtag) {
        initGA();
        loadGAScript();
        trackPageView(location.pathname + location.search);
      }
    };

    const interval = setInterval(checkConsent, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cookieConsentAccepted', handleConsentAccepted);
      clearInterval(interval);
    };
  }, [location]);

  return null;
}

