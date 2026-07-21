import { useEffect, useRef } from "react";
import { StickyAttackTimer } from "@/components/webinar/StickyAttackTimer";
import { HeroSection } from "@/components/webinar/HeroSection";
import { BigNumbers } from "@/components/webinar/BigNumbers";
import { Indictment } from "@/components/webinar/Indictment";
import { TimelineSlider } from "@/components/webinar/TimelineSlider";
import { LogStream } from "@/components/webinar/LogStream";
import { IncidentsWall } from "@/components/webinar/IncidentsWall";
import { BreachabilityQuiz } from "@/components/webinar/BreachabilityQuiz";
import { DemoHook } from "@/components/webinar/DemoHook";
import { WebinarDetails } from "@/components/webinar/WebinarDetails";
import { RegistrationForm } from "@/components/webinar/RegistrationForm";
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

export default function SocAlreadyLost() {
  const registerRef = useRef<HTMLDivElement>(null);
  const scrollToRegister = () => {
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Your Security Boundary Is Not Where You Think It Is | SimpITy Webinar";
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute("content") ?? null;
    meta?.setAttribute(
      "content",
      "Live 60-minute webinar: four Windows, Active Directory and AI demos showing why the real security boundary sits one layer lower than your controls."
    );
    return () => {
      document.title = prevTitle;
      if (prevDesc !== null) meta?.setAttribute("content", prevDesc);
    };
  }, []);

  return (
    <div className="wb-page min-h-screen" style={{ background: "#0B0B0C" }}>
      <style>{PAGE_STYLE}</style>
      <StickyAttackTimer />
      {/* spacer for sticky timer */}
      <div style={{ height: 56 }} />
      <HeroSection onCTA={scrollToRegister} />
      <BigNumbers />
      <Indictment />
      <TimelineSlider />
      <LogStream />
      <IncidentsWall />
      <BreachabilityQuiz onCTA={scrollToRegister} />
      <DemoHook />
      <WebinarDetails />
      <div ref={registerRef}>
        <RegistrationForm />
      </div>
      <WebinarFooter />
    </div>
  );
}
