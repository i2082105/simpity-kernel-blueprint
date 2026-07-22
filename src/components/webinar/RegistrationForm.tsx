import { useState } from "react";
import { z } from "zod";

// TODO: replace with the real Google Form viewform URL once available.
// Example: "https://docs.google.com/forms/d/e/1FAIpQLSxxxxxxxx/viewform"
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/REPLACE_WITH_FORM_ID/viewform";

// If/when the form's entry IDs are known, map them here to prefill:
// { email: "entry.111", name: "entry.222", company: "entry.333", role: "entry.444" }
const GOOGLE_FORM_ENTRY_IDS: Partial<Record<"email" | "name" | "company" | "role", string>> = {};

const POPUP_URL =
  "https://popup.fm/3v89JYZiWPSsX639qd56/events/nQ4BqioE8wHxJpLoCvqN?formOpen=register";

const schema = z.object({
  email: z.string().trim().email({ message: "That's not an email." }).max(255),
  name: z.string().trim().min(1, { message: "We need a name." }).max(100),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  role: z.string().trim().max(100).optional().or(z.literal("")),
  website: z.string().max(0, { message: "" }).optional().or(z.literal("")), // honeypot
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

function buildGoogleFormUrl(fields: { email: string; name: string; company: string; role: string }) {
  const params = new URLSearchParams();
  params.set("usp", "pp_url");
  (Object.keys(GOOGLE_FORM_ENTRY_IDS) as Array<keyof typeof GOOGLE_FORM_ENTRY_IDS>).forEach((k) => {
    const entry = GOOGLE_FORM_ENTRY_IDS[k];
    const value = fields[k];
    if (entry && value) params.set(entry, value);
  });
  const query = params.toString();
  return query ? `${GOOGLE_FORM_URL}?${query}` : GOOGLE_FORM_URL;
}

export function RegistrationForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [busy, setBusy] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
      // honeypot — silently drop to Popup
      window.location.href = POPUP_URL;
      return;
    }
    setErrors({});
    setBusy(true);
    const target = buildGoogleFormUrl({
      email: parsed.data.email,
      name: parsed.data.name,
      company: parsed.data.company ?? "",
      role: parsed.data.role ?? "",
    });
    window.location.href = target;
  };

  return (
    <section
      id="register"
      className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 border-t"
      style={{ borderColor: "#1a1a1c" }}
    >
      <div className="font-mono text-xs tracking-widest mb-4" style={{ color: "#7A7974" }}>
        WEBINAR REGISTRATION
      </div>
      <h2
        className="font-display font-bold mb-6"
        style={{
          fontSize: "clamp(2rem, 6vw, 4.5rem)",
          lineHeight: 1,
          color: "#EDEDEC",
        }}
      >
        Your Security Boundary
        <br />
        <span style={{ color: "#7A7974" }}>Is Not Where You Think It Is.</span>
      </h2>
      <p className="max-w-2xl text-base md:text-lg mb-10" style={{ color: "#EDEDEC" }}>
        Two steps, about 60 seconds. Quick ICP form first, then confirm your seat on Popup and get
        the join link.
      </p>

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
            {busy ? "REDIRECTING…" : "RESERVE MY SEAT →"}
          </button>
          <p className="mt-4 text-xs md:text-sm" style={{ color: "#7A7974" }}>
            Step 1 of 2 — you'll be taken to a short qualification form, then to Popup to
            confirm your seat. No sales call unless you ask for one.
          </p>
        </div>
      </form>
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
