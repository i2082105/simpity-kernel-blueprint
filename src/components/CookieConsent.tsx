import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    
    const consentData = localStorage.getItem("cookieConsent");
    if (!consentData) {
      // Small delay for better UX
      timer = setTimeout(() => setIsVisible(true), 1000);
    } else {
      try {
        const consent = JSON.parse(consentData);
        // Check if consent has expired
        if (consent.expiresAt && new Date(consent.expiresAt) > new Date()) {
          // Consent is still valid, don't show the banner
          return;
        } else {
          // Consent expired or invalid format, show the banner
          timer = setTimeout(() => setIsVisible(true), 1000);
        }
      } catch {
        // Invalid JSON, treat as no consent
        timer = setTimeout(() => setIsVisible(true), 1000);
      }
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  const handleAccept = () => {
    // Set expiration to 1 year from now
    const expiresAt = new Date();
    expiresAt.setFullYear(expiresAt.getFullYear() + 1);
    
    const consentData = {
      status: "accepted",
      expiresAt: expiresAt.toISOString()
    };
    
    localStorage.setItem("cookieConsent", JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({ status: "declined" }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="max-w-4xl mx-auto bg-card border border-border rounded-lg shadow-lg p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-sm text-foreground">
                We use cookies to enhance your browsing experience and analyze site traffic. 
                By clicking "Accept All", you consent to our use of cookies.
              </p>
              <a 
                href="/privacy" 
                className="text-xs text-muted-foreground hover:text-primary transition-colors underline"
              >
                Learn more about our Privacy Policy
              </a>
            </div>
          </div>
          <div className="flex gap-2 shrink-0 w-full md:w-auto">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleDecline}
              className="flex-1 md:flex-none"
            >
              Decline
            </Button>
            <Button 
              size="sm" 
              onClick={handleAccept}
              className="flex-1 md:flex-none"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
