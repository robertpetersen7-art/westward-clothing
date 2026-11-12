"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { categories, getCategory, getRange, site } from "@/lib/data";

const field =
  "mt-2 block w-full rounded-xl border border-line bg-paper px-4 py-3 text-base text-ink placeholder:text-stone/60 focus:border-tan focus:outline-none focus:ring-2 focus:ring-tan/25";
const label = "text-sm font-semibold text-ink-soft";

export function QuoteForm() {
  const params = useSearchParams();
  const preRange = getRange(params.get("range") ?? "");
  const preCategory = preRange?.category ?? getCategory(params.get("category") ?? "")?.slug ?? "";

  const [selected, setSelected] = useState<string[]>(preCategory ? [preCategory] : []);
  const [status, setStatus] = useState<"idle" | "sent" | "copied">("idle");
  const [summary, setSummary] = useState("");

  function toggle(slug: string) {
    setSelected((s) => (s.includes(slug) ? s.filter((x) => x !== slug) : [...s, slug]));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const garments = selected.map((s) => getCategory(s)?.name).join(", ") || "Not specified";
    const lines = [
      `Quote request — ${site.name}`,
      "",
      `Name: ${d.get("name")}`,
      `Company: ${d.get("company") || "-"}`,
      `Email: ${d.get("email")}`,
      `Phone: ${d.get("phone") || "-"}`,
      "",
      `Garments: ${garments}`,
      preRange ? `Range: ${preRange.name}` : "",
      `Quantity: ${d.get("quantity") || "-"}`,
      `Branding: ${d.get("branding")}`,
      `Needed by: ${d.get("date") || "-"}`,
      "",
      `${d.get("message") || ""}`,
    ].filter((l, i, a) => !(l === "" && a[i - 1] === ""));
    const body = lines.join("\n");

    if (site.email) {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Quote request — ${d.get("company") || d.get("name")}`,
      )}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      return;
    }
    try {
      await navigator.clipboard.writeText(body);
    } catch {
      /* clipboard may be blocked; the summary is still shown below */
    }
    setSummary(body);
    setStatus("copied");
    window.open(site.messenger, "_blank", "noopener,noreferrer");
  }

  if (status !== "idle") {
    return (
      <div className="rounded-3xl border border-line bg-paper p-8 sm:p-10" role="status">
        <p className="eyebrow">Almost there</p>
        <h2 className="mt-3 font-display text-3xl">
          {status === "sent" ? "Your email is ready to send." : "Your enquiry is copied — paste it into Messenger."}
        </h2>
        <p className="mt-3 text-stone">
          {status === "sent"
            ? "We've opened your email app with the details filled in. Hit send and we'll be in touch."
            : "We've opened our Facebook Messenger in a new tab. Paste your enquiry and send — we'll reply with options and pricing."}
        </p>
        {summary && (
          <pre className="mt-6 max-h-72 overflow-auto whitespace-pre-wrap rounded-xl bg-sand/70 p-4 text-sm text-ink-soft">
            {summary}
          </pre>
        )}
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold underline underline-offset-4"
        >
          Edit enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-line bg-paper p-6 sm:p-10">
      {preRange && (
        <p className="mb-6 rounded-xl bg-tan/10 px-4 py-3 text-sm text-tan-deep">
          Enquiring about <strong>{preRange.name}</strong>
        </p>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={label}>Your name *</span>
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className={label}>Company</span>
          <input name="company" autoComplete="organization" className={field} />
        </label>
        <label className="block">
          <span className={label}>Email *</span>
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label className="block">
          <span className={label}>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
      </div>

      <fieldset className="mt-8">
        <legend className={label}>What are you looking for?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {categories.map((c) => {
            const on = selected.includes(c.slug);
            return (
              <button
                key={c.slug}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(c.slug)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  on ? "border-ink bg-ink text-paper" : "border-line text-ink-soft hover:border-ink"
                }`}
              >
                {c.name}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        <label className="block">
          <span className={label}>Approx. quantity</span>
          <input name="quantity" inputMode="numeric" placeholder="e.g. 80" className={field} />
        </label>
        <label className="block">
          <span className={label}>Branding</span>
          <select name="branding" className={field} defaultValue="Embroidery">
            <option>Embroidery</option>
            <option>Printing</option>
            <option>Not sure yet</option>
            <option>No branding</option>
          </select>
        </label>
        <label className="block">
          <span className={label}>Needed by</span>
          <input name="date" type="date" className={field} />
        </label>
      </div>

      <label className="mt-8 block">
        <span className={label}>Tell us more</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Colours, sizes, logo placement, anything else we should know…"
          className={field}
        />
      </label>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-stone">Branding is quoted on 50+ garments. Stock garments have no minimum.</p>
        <button
          type="submit"
          className="rounded-full bg-ink px-8 py-3.5 font-semibold text-paper transition hover:bg-tan-deep"
        >
          Send enquiry
        </button>
      </div>
    </form>
  );
}
