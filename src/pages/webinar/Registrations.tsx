import { useEffect, useState } from "react";

type Row = {
  id: string;
  webinar_slug: string;
  email: string;
  name: string;
  company: string | null;
  role: string | null;
  created_at: string;
  referrer: string | null;
};

const PROJECT_ID = import.meta.env.VITE_SUPABASE_PROJECT_ID as string;
const ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;
const FN_URL = `https://${PROJECT_ID}.supabase.co/functions/v1/webinar-registrations-list`;
const TOKEN_KEY = "wb_admin_token";

export default function WebinarRegistrations() {
  const [token, setToken] = useState<string>(() => localStorage.getItem(TOKEN_KEY) ?? "");
  const [rows, setRows] = useState<Row[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Webinar registrations · Simpity";
  }, []);

  const load = async (t: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(FN_URL, {
        headers: {
          "x-admin-token": t,
          apikey: ANON_KEY,
          Authorization: `Bearer ${ANON_KEY}`,
        },
      });
      if (res.status === 401) {
        setError("Wrong token.");
        setRows(null);
        return;
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      setRows(json.registrations ?? []);
      localStorage.setItem(TOKEN_KEY, t);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) load(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const exportCsv = () => {
    if (!rows) return;
    const header = ["created_at", "email", "name", "company", "role", "webinar_slug", "referrer"];
    const escape = (v: unknown) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const csv = [header.join(",")]
      .concat(rows.map((r) => header.map((h) => escape((r as any)[h])).join(",")))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `webinar-registrations-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ background: "#0B0B0C", color: "#EDEDEC", minHeight: "100vh" }} className="p-6 md:p-10 font-mono">
      <h1 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        Webinar registrations
      </h1>

      <div className="flex flex-wrap items-end gap-3 mb-8">
        <label className="block">
          <span className="block text-xs uppercase tracking-widest mb-2" style={{ color: "#7A7974" }}>
            Admin token
          </span>
          <input
            type="password"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="bg-transparent border px-3 py-2 text-sm w-96 max-w-full outline-none focus:border-white"
            style={{ borderColor: "#3a3a3d", color: "#EDEDEC" }}
          />
        </label>
        <button
          onClick={() => load(token)}
          disabled={loading || !token}
          className="px-5 py-2 text-sm font-bold disabled:opacity-50"
          style={{ background: "#E5484D", color: "#0B0B0C" }}
        >
          {loading ? "LOADING…" : "LOAD"}
        </button>
        {rows && (
          <button onClick={exportCsv} className="px-5 py-2 text-sm font-bold border" style={{ borderColor: "#01696F", color: "#01696F" }}>
            EXPORT CSV
          </button>
        )}
        <button
          onClick={() => {
            localStorage.removeItem(TOKEN_KEY);
            setToken("");
            setRows(null);
          }}
          className="px-3 py-2 text-xs"
          style={{ color: "#7A7974" }}
        >
          clear token
        </button>
      </div>

      {error && <p className="mb-4" style={{ color: "#E5484D" }}>{error}</p>}

      {rows && (
        <>
          <p className="text-sm mb-4" style={{ color: "#7A7974" }}>
            {rows.length} registration{rows.length === 1 ? "" : "s"}
          </p>
          <div className="overflow-x-auto border" style={{ borderColor: "#1a1a1c" }}>
            <table className="w-full text-xs md:text-sm">
              <thead>
                <tr style={{ background: "#111114", color: "#7A7974" }}>
                  <th className="text-left px-3 py-2">When</th>
                  <th className="text-left px-3 py-2">Email</th>
                  <th className="text-left px-3 py-2">Name</th>
                  <th className="text-left px-3 py-2">Company</th>
                  <th className="text-left px-3 py-2">Role</th>
                  <th className="text-left px-3 py-2">Slug</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id} className="border-t" style={{ borderColor: "#1a1a1c" }}>
                    <td className="px-3 py-2 whitespace-nowrap">{new Date(r.created_at).toLocaleString()}</td>
                    <td className="px-3 py-2">{r.email}</td>
                    <td className="px-3 py-2">{r.name}</td>
                    <td className="px-3 py-2">{r.company ?? ""}</td>
                    <td className="px-3 py-2">{r.role ?? ""}</td>
                    <td className="px-3 py-2" style={{ color: "#7A7974" }}>{r.webinar_slug}</td>
                  </tr>
                ))}
                {rows.length === 0 && (
                  <tr>
                    <td className="px-3 py-6 text-center" colSpan={6} style={{ color: "#7A7974" }}>
                      No registrations yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
