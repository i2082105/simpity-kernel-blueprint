import { useState } from "react";

const QUESTIONS = [
  "Which processes in your infrastructure must never be dumpable from memory?",
  "Which privileged tokens must never be duplicated by an unapproved process?",
  "Which Active Directory objects are protected below the ACL layer?",
  "Which AI servers or agents are now sensitive infrastructure in your environment?",
  "Which operations do you only log today, when you should be blocking them?",
];

type Answer = "yes" | "unsure" | null;

export function BreachabilityQuiz({ onCTA }: { onCTA: () => void }) {
  const [answers, setAnswers] = useState<Answer[]>(QUESTIONS.map(() => null));
  const answered = answers.every((a) => a !== null);
  const unsureCount = answers.filter((a) => a === "unsure").length;

  const setAnswer = (i: number, val: Answer) =>
    setAnswers((prev) => prev.map((a, idx) => (idx === i ? val : a)));

  return (
    <section
      className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 border-t"
      style={{ borderColor: "#1a1a1c" }}
    >
      <h2
        className="font-display font-bold mb-4"
        style={{
          fontSize: "clamp(1.75rem, 5vw, 3.5rem)",
          lineHeight: 1.05,
          color: "#EDEDEC",
        }}
      >
        Five questions your CISO can't answer yet.
      </h2>
      <p className="mb-10 max-w-3xl text-base md:text-lg" style={{ color: "#7A7974" }}>
        Answer honestly. Every "I don't know" is one layer where the boundary is not enforced.
      </p>

      <div className="space-y-4 mb-10">
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
                {(["yes", "unsure"] as const).map((val) => {
                  const active = answers[i] === val;
                  return (
                    <button
                      key={val}
                      onClick={() => setAnswer(i, val)}
                      aria-pressed={active}
                      className="px-4 py-2 font-mono text-[11px] tracking-widest border transition-colors"
                      style={{
                        borderColor: active ? "#EDEDEC" : "#3a3a3d",
                        background: active ? "#EDEDEC" : "transparent",
                        color: active ? "#0B0B0C" : "#EDEDEC",
                      }}
                    >
                      {val === "yes" ? "I CAN ANSWER" : "I DON'T KNOW"}
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
            borderColor: unsureCount >= 3 ? "#E5484D" : unsureCount === 0 ? "#01696F" : "#EDEDEC",
            background:
              unsureCount >= 3
                ? "rgba(229,72,77,0.1)"
                : unsureCount === 0
                ? "rgba(1,105,111,0.08)"
                : "#101012",
          }}
        >
          {unsureCount >= 3 && (
            <>
              <div
                className="font-display font-bold text-xl md:text-2xl mb-3"
                style={{ color: "#E5484D" }}
              >
                Your boundary is drawn on paper.
              </div>
              <p className="text-base md:text-lg mb-6" style={{ color: "#EDEDEC" }}>
                {unsureCount} of 5 answers are "I don't know". That's {unsureCount} layers where
                policy is not enforcement. Come see what actually decides the outcome.
              </p>
            </>
          )}
          {unsureCount > 0 && unsureCount < 3 && (
            <>
              <div
                className="font-display font-bold text-xl md:text-2xl mb-3"
                style={{ color: "#EDEDEC" }}
              >
                You're closer to the boundary than most.
              </div>
              <p className="text-base md:text-lg mb-6" style={{ color: "#EDEDEC" }}>
                {unsureCount} unanswered. Come watch the demos that map directly to those gaps.
              </p>
            </>
          )}
          {unsureCount === 0 && (
            <>
              <div
                className="font-display font-bold text-xl md:text-2xl mb-3"
                style={{ color: "#01A9B0" }}
              >
                You're already operating at the boundary layer.
              </div>
              <p className="text-base md:text-lg mb-6" style={{ color: "#EDEDEC" }}>
                Come anyway. Bring your team. The 60 minutes are worth it just for Act 3.
              </p>
            </>
          )}
          <button
            onClick={onCTA}
            className="inline-flex items-center gap-3 px-6 py-3 font-display font-bold text-sm md:text-base tracking-wider"
            style={{
              background: unsureCount >= 3 ? "#E5484D" : "#EDEDEC",
              color: "#0B0B0C",
            }}
          >
            RESERVE MY SEAT →
          </button>
        </div>
      )}
    </section>
  );
}
