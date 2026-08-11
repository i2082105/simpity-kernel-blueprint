import { useEffect, useRef } from "react";
import { StickySeatsBar } from "@/components/webinar/StickySeatsBar";
import { UpdateBanner } from "@/components/webinar/UpdateBanner";
import { HeroSection } from "@/components/webinar/HeroSection";
import { WhyWeMoved } from "@/components/webinar/WhyWeMoved";
import { BigNumbers } from "@/components/webinar/BigNumbers";
import { Indictment } from "@/components/webinar/Indictment";
import { TimelineSlider } from "@/components/webinar/TimelineSlider";
import { LogStream } from "@/components/webinar/LogStream";
import { IncidentsWall } from "@/components/webinar/IncidentsWall";
import { Agenda } from "@/components/webinar/Agenda";
import { CentralQuestion } from "@/components/webinar/CentralQuestion";
import { BreachabilityQuiz } from "@/components/webinar/BreachabilityQuiz";
import { DemoHook } from "@/components/webinar/DemoHook";
import { TakeawaysAudience } from "@/components/webinar/TakeawaysAudience";
import { WebinarDetails } from "@/components/webinar/WebinarDetails";
import { RegistrationForm } from "@/components/webinar/RegistrationForm";
import { FinalCTA } from "@/components/webinar/FinalCTA";
import { WebinarFooter } from "@/components/webinar/WebinarFooter";

const PAGE_STYLE = `
  .wb-page { font-family: 'Inter', system-ui, sans-serif; background: #0B0B0C; color: #EDEDEC; }
  .wb-page .font-display { font-family: 'Space Grotesk', 'Inter', system-ui, sans-serif; }
  .wb-page .font-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }
  @keyframes wb-logscroll {
    0% { transform: translateY(0); }
    100% { transform: translateY(-50%); }
  }
  @keyframes wb-glitch {
    0%, 100% { transform: translate(0,0); opacity: 1; }
    10% { transform: translate(-2px, 0); text-shadow: 2px 0 #E5484D; }
    20% { transform: translate(2px, 0); text-shadow: -2px 0 #E5484D; }
    30% { transform: translate(0,0); text-shadow: none; }
    40% { opacity: 0.85; }
    50% { opacity: 1; }
  }
  .wb-page .wb-glitch { animation: wb-glitch 0.9s steps(2, end) 1; }
  .wb-page .wb-range {
    -webkit-appearance: none; appearance: none;
    height: 4px; background: #1a1a1c; outline: none; border-radius: 0;
  }
  .wb-page .wb-range::-webkit-slider-thumb {
    -webkit-appearance: none; appearance: none;
    width: 20px; height: 28px; background: #E5484D; cursor: grab; border-radius: 0;
    border: none;
  }
  .wb-page .wb-range::-moz-range-thumb {
    width: 20px; height: 28px; background: #E5484D; cursor: grab; border-radius: 0;
    border: none;
  }
  @media (prefers-reduced-motion: reduce) {
    .wb-page .wb-glitch { animation: none !important; }
  }
`;

const META_TITLE = "Your SOC Has Already Lost | Live Webinar · September 17";
const META_DESC =
  "A technical Simpity webinar on agent-driven attacks, Windows authentication failures, SOC telemetry gaps and fresh post–Patch Tuesday findings. Live September 17, 2026.";
const OG_TITLE = "Your SOC Has Already Lost";
const OG_DESC =
  "AI attacks move at machine speed. Your SOC still operates through alerts and human decisions. Join Simpity on September 17 for new cases and post–Patch Tuesday findings.";

const EVENT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Your SOC Has Already Lost",
  description: META_DESC,
  startDate: "2026-09-17T17:00:00+02:00",
  endDate: "2026-09-17T18:00:00+02:00",
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  eventStatus: "https://schema.org/EventRescheduled",
  previousStartDate: "2026-08-13T17:00:00+02:00",
  inLanguage: "en",
  location: {
    "@type": "VirtualLocation",
    url: "https://us06web.zoom.us/webinar/register/WN_ZcNXcACUSUmfblvXSqnQmQ",
  },
  organizer: { "@type": "Organization", name: "Simpity", url: "https://simpity.eu" },
  performer: { "@type": "Person", name: "Alexei Belous" },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: "https://simpity.eu/webinar/soc-already-lost",
  },
};

function setMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  const prev = el.getAttribute("content");
  el.setAttribute("content", content);
  return { el, prev };
}

export default function SocAlreadyLost() {
  const registerRef = useRef<HTMLDivElement>(null);
  const scrollToRegister = () => {
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const prevTitle = document.title;
    document.title = META_TITLE;

    const restore = [
      setMeta('meta[name="description"]', "name", "description", META_DESC),
      setMeta('meta[property="og:title"]', "property", "og:title", OG_TITLE),
      setMeta('meta[property="og:description"]', "property", "og:description", OG_DESC),
      setMeta('meta[property="og:type"]', "property", "og:type", "website"),
      setMeta('meta[name="twitter:title"]', "name", "twitter:title", OG_TITLE),
      setMeta('meta[name="twitter:description"]', "name", "twitter:description", OG_DESC),
    ];

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify(EVENT_JSONLD);
    document.head.appendChild(ld);

    return () => {
      document.title = prevTitle;
      restore.forEach(({ el, prev }) => {
        if (prev !== null) el.setAttribute("content", prev);
      });
      ld.remove();
    };
  }, []);

  return (
    <div className="wb-page min-h-screen" style={{ background: "#0B0B0C" }}>
      <style>{PAGE_STYLE}</style>
      <StickySeatsBar />
      {/* spacer for sticky bar */}
      <div style={{ height: 56 }} />
      <UpdateBanner />
      <main>
        <HeroSection onCTA={scrollToRegister} />
        <WhyWeMoved />
        <BigNumbers />
        <Indictment />
        <TimelineSlider />
        <LogStream />
        <IncidentsWall />
        <Agenda />
        <CentralQuestion />
        <BreachabilityQuiz onCTA={scrollToRegister} />
        <DemoHook />
        <TakeawaysAudience />
        <WebinarDetails />
        <div ref={registerRef}>
          <RegistrationForm />
        </div>
        <FinalCTA onCTA={scrollToRegister} />
      </main>
      <WebinarFooter />
    </div>
  );
}
