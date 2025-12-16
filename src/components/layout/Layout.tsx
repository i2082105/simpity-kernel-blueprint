import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CookieConsent } from "../CookieConsent";
import { ScrollToTop } from "../ScrollToTop";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
      <CookieConsent />
      <ScrollToTop />
    </div>
  );
}
