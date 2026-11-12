import { WW_PATH } from "./logo-paths";

const tones = {
  light: { ring: "#6f6b65", tan: "#a5845d" },
  dark: { ring: "#b5aea4", tan: "#c9a77c" },
};

const NEEDLE = "translate(49 30) scale(.72) rotate(28)";

/** The WW spool-and-needle badge. `id` must be unique per page (it names the SVG mask). */
export function LogoMark({ id, inverted = false, className }: { id: string; inverted?: boolean; className?: string }) {
  const c = inverted ? tones.dark : tones.light;
  return (
    <svg viewBox="0 0 96 96" className={className} aria-hidden="true" focusable="false">
      <defs>
        <mask id={id}>
          <rect width="96" height="96" fill="#fff" />
          <line x1="0" y1="-30" x2="0" y2="28" transform={NEEDLE} stroke="#000" strokeWidth="5.2" strokeLinecap="round" />
        </mask>
      </defs>
      <circle cx="48" cy="48" r="43" fill="none" stroke={c.ring} strokeWidth="4.5" />
      <g fill={c.ring} mask={`url(#${id})`}>
        <g transform="translate(49 30) scale(.72) rotate(-16)">
          <rect x="-16.5" y="-22" width="33" height="7" rx="3" />
          <rect x="-13" y="-16" width="26" height="32" />
          <rect x="-16.5" y="15" width="33" height="7" rx="3" />
        </g>
      </g>
      <path d="M0 -30 L0 28" transform={NEEDLE} stroke={c.ring} strokeWidth="2" strokeLinecap="round" />
      <path d={WW_PATH} fill={c.tan} />
    </svg>
  );
}

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark id={inverted ? "ww-mark-footer" : "ww-mark-header"} inverted={inverted} className="size-11 shrink-0" />
      <span className="leading-none">
        <span className={`block font-display text-[1.375rem] font-semibold tracking-tight ${inverted ? "text-paper" : "text-ink"}`}>
          Westward
        </span>
        <span
          className={`mt-1 block text-[0.65rem] font-semibold uppercase tracking-[0.4em] ${inverted ? "text-[#c9a77c]" : "text-tan"}`}
        >
          Clothing
        </span>
      </span>
    </span>
  );
}
