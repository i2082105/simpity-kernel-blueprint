import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  email: z.string().trim().email({ message: "That's not an email." }).max(255),
  name: z.string().trim().min(1, { message: "We need a name." }).max(100),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  role: z.string().trim().max(100).optional().or(z.literal("")),
  website: z.string().max(0, { message: "" }).optional().or(z.literal("")), // honeypot
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [busy, setBusy] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      email: String(form.get("email") ?? ""),
      name: String(form.get("name") ?? ""),
      company: String(form.get("company") ?? ""),
      role: String(form.get("role") ?? ""),
      website: String(form.get("website") ?? ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Errors = {};
      parsed.error.issues.forEach((iss) => {
        const key = iss.path[0] as keyof Errors;
        if (!errs[key]) errs[key] = iss.message;
      });
      setErrors(errs);
      return;
    }
    if (parsed.data.website) {
      // silent honeypot success
      setSubmitted(true);
      return;
    }
    setErrors({});
    setBusy(true);
    try {
      // TODO: wire to Instantly / Google Sheets / Cloud edge function
      await fetch("/api/webinar-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      }).catch(() => undefined);
    } finally {
      setBusy(false);
      setSubmitted(true);
    }
  };

  return (
    <section
      id="register"
      className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 border-t"
      style={{ borderColor: "#1a1a1c" }}
    >
      <h2
        className="font-display font-bold mb-10"
        style={{
          fontSize: "clamp(2rem, 6vw, 4.5rem)",
          lineHeight: 1,
          color: "#EDEDEC",
        }}
      >
        Take the seat.
        <br />
        <span style={{ color: "#7A7974" }}>Or keep watching your dashboards.</span>
      </h2>

      {submitted ? (
        <div
          className="p-8 md:p-10 border-l-4 max-w-2xl"
          style={{ borderColor: "#01696F", background: "rgba(1,105,111,0.1)" }}
        >
          <div className="font-display font-bold text-2xl md:text-3xl mb-3" style={{ color: "#EDEDEC" }}>
            You're in.
          </div>
          <p className="text-base md:text-lg" style={{ color: "#EDEDEC" }}>
            Check your inbox. The attack we'll break is already running in someone's network right
            now.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-5" noValidate>
          <Field label="Work email *" name="email" type="email" error={errors.email} required autoComplete="email" />
          <Field label="Full name *" name="name" type="text" error={errors.name} required autoComplete="name" />
          <Field label="Company" name="company" type="text" error={errors.company} autoComplete="organization" />
          <Field label="Role" name="role" type="text" error={errors.role} autoComplete="organization-title" />

          {/* honeypot */}
          <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
            <label>
              Website
              <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <div className="md:col-span-2 mt-2">
            <button
              type="submit"
              disabled={busy}
              className="w-full md:w-auto px-8 py-4 font-display font-bold text-base md:text-lg tracking-wider disabled:opacity-60"
              style={{ background: "#E5484D", color: "#0B0B0C" }}
            >
              {busy ? "SECURING…" : "SECURE MY SEAT →"}
            </button>
            <p className="mt-4 text-xs md:text-sm" style={{ color: "#7A7974" }}>
              No sales call unless you ask for one. We respect your inbox more than your SIEM
              respects your AD.
            </p>
          </div>
        </form>
      )}
    </section>
  );
}

function Field({
  label,
  name,
  type,
  error,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type: string;
  error?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  const id = `wb-${name}`;
  return (
    <label htmlFor={id} className="block">
      <span className="font-mono text-xs tracking-widest block mb-2" style={{ color: "#7A7974" }}>
        {label}
      </span>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        maxLength={255}
        className="w-full bg-transparent border px-4 py-3 text-base outline-none focus:border-white transition-colors"
        style={{
          borderColor: error ? "#E5484D" : "#3a3a3d",
          color: "#EDEDEC",
        }}
      />
      {error && (
        <span id={`${id}-err`} className="block mt-2 text-xs font-mono" style={{ color: "#E5484D" }}>
          {error}
        </span>
      )}
    </label>
  );
}
