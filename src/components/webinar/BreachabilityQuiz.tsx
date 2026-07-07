import { useState } from "react";

const QUESTIONS = [
  "Do you run Active Directory?",
  "Have you deployed any AI agent, Copilot, or LLM with access to internal systems?",
  "Is your security stack detection-only (SIEM / EDR / Defender)?",
];

export function BreachabilityQuiz({ onCTA }: { onCTA: () => void }) {
  const [answers, setAnswers] = useState<(boolean | null)[]>([null, null, null]);
  const answered = answers.every((a) => a !== null);
  const yesCount = answers.filter((a) => a === true).length;

  const setAnswer = (i: number, val: boolean) =>
    setAnswers((prev) => prev.map((a, idx) => (idx === i ? val : a)));

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 border-t" style={{ borderColor: "#1a1a1c" }}>
      <h2
        className="font-display font-bold mb-12"
        style={{
          fontSize: "clamp(1.75rem, 5vw, 3.5rem)",
          lineHeight: 1.05,
          color: "#EDEDEC",
        }}
      >
        Is your Active Directory already breachable?
        <br />
        <span style={{ color: "#7A7974" }}>Three questions.</span>
      </h2>

      <div className="space-y-6 mb-10">
        {QUESTIONS.map((q, i) => (
          <div
            key={i}
            className="border p-5 md:p-6"
            style={{ borderColor: "#1a1a1c", background: "#101012" }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="font-mono text-xs mt-1" style={{ color: "#7A7974" }}>
                  0{i + 1}
                </span>
                <span className="text-base md:text-lg" style={{ color: "#EDEDEC" }}>
                  {q}
                </span>
              </div>
              <div className="flex gap-2 shrink-0">
                {[true, false].map((val) => {
                  const active = answers[i] === val;
                  return (
                    <button
                      key={String(val)}
                      onClick={() => setAnswer(i, val)}
                      aria-pressed={active}
                      className="px-5 py-2 font-mono text-xs tracking-widest border transition-colors"
                      style={{
                        borderColor: active ? "#EDEDEC" : "#3a3a3d",
                        background: active ? "#EDEDEC" : "transparent",
                        color: active ? "#0B0B0C" : "#EDEDEC",
                      }}
                    >
                      {val ? "YES" : "NO"}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {answered && (
        <div
          className="p-6 md:p-8 border-l-4 animate-fade-in"
          style={{
            borderColor: yesCount === 3 ? "#E5484D" : yesCount === 0 ? "#3a3a3d" : "#E5484D",
            background: yesCount === 3 ? "rgba(229,72,77,0.1)" : "#101012",
          }}
        >
          {yesCount === 3 && (
            <>
              <div className="font-display font-bold text-xl md:text-2xl mb-3" style={{ color: "#E5484D" }}>
                The path is already open in your environment.
              </div>
              <p className="text-base md:text-lg mb-6" style={{ color: "#EDEDEC" }}>
                The same one that hit the companies above. Come watch us break it — and then stop
                it.
              </p>
            </>
          )}
          {yesCount > 0 && yesCount < 3 && (
            <>
              <div className="font-display font-bold text-xl md:text-2xl mb-3" style={{ color: "#EDEDEC" }}>
                You're closer to exposed than you think.
              </div>
              <p className="text-base md:text-lg mb-6" style={{ color: "#EDEDEC" }}>
                See exactly where.
              </p>
            </>
          )}
          {yesCount === 0 && (
            <>
              <div className="font-display font-bold text-xl md:text-2xl mb-3" style={{ color: "#EDEDEC" }}>
                You're not the audience.
              </div>
              <p className="text-base md:text-lg mb-6" style={{ color: "#7A7974" }}>
                Come anyway. You'll see what your peers are about to lose.
              </p>
            </>
          )}
          <button
            onClick={onCTA}
            className="inline-flex items-center gap-3 px-6 py-3 font-display font-bold text-sm md:text-base tracking-wider"
            style={{
              background: yesCount === 3 ? "#E5484D" : "#EDEDEC",
              color: "#0B0B0C",
            }}
          >
            {yesCount === 3 ? "GET THE SEAT" : "TAKE A SEAT"} →
          </button>
        </div>
      )}
    </section>
  );
}
