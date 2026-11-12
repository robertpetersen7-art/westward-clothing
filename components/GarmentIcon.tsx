import type { IconKey } from "@/lib/data";

// Simple line-drawn garment icons on a 48×48 grid.
const paths: Record<IconKey, React.ReactNode> = {
  polo: (
    <>
      <path d="M17 7l-9 5 3 9 5-2v22h16V19l5 2 3-9-9-5" />
      <path d="M17 7l7 6 7-6M24 13v8M21 9l3 4M27 9l-3 4" />
    </>
  ),
  tee: (
    <>
      <path d="M17 7l-9 5 3 9 5-2v22h16V19l5 2 3-9-9-5" />
      <path d="M17 7c1.5 3.5 4 5 7 5s5.5-1.5 7-5" />
    </>
  ),
  shirt: (
    <>
      <path d="M17 7l-9 5 2 25 6-1V41h16V36l6 1 2-25-9-5" />
      <path d="M17 7l7 7 7-7M24 14v27M16 20v16M32 20v16" />
      <circle cx="26" cy="20" r=".6" fill="currentColor" />
      <circle cx="26" cy="27" r=".6" fill="currentColor" />
      <circle cx="26" cy="34" r=".6" fill="currentColor" />
    </>
  ),
  outdoor: (
    <>
      <path d="M17 7l-9 5 3 9 5-2v22h16V19l5 2 3-9-9-5" />
      <path d="M17 7l7 7 7-7M24 14v27" />
      <rect x="17.5" y="20" width="5" height="6" rx=".5" />
      <rect x="25.5" y="20" width="5" height="6" rx=".5" />
      <path d="M17.5 22h5M25.5 22h5" />
    </>
  ),
  pit: (
    <>
      <path d="M17 7l-9 5 3 9 5-2v22h16V19l5 2 3-9-9-5" />
      <path d="M17 7l7 6 7-6M16 26l16-6M16 32l16-6" />
    </>
  ),
  knit: (
    <>
      <path d="M16 8l-8 5 1 26h7V41h16v-2h7l1-26-8-5" />
      <path d="M16 8l8 13 8-13M16 36h16M9 34h7M32 34h7" />
    </>
  ),
  sweater: (
    <>
      <path d="M17 8l-9 5 1 26h7V41h16v-2h7l1-26-9-5" />
      <path d="M17 8c1.5 3 4 4 7 4s5.5-1 7-4M16 37h16M9 36h7M32 36h7" />
    </>
  ),
  fleece: (
    <>
      <path d="M17 7l-9 5 1 27h7v2h16v-2h7l1-27-9-5" />
      <path d="M18 5h12v4l-6 3-6-3zM24 12v29M18 26h4M26 26h4" />
    </>
  ),
  hoodie: (
    <>
      <path d="M17 10l-9 4 1 25h7v2h16v-2h7l1-25-9-4" />
      <path d="M17 10c0-4 3-6 7-6s7 2 7 6c-2 3-4.5 4-7 4s-5-1-7-4zM22 14v6M26 14v6M18 28h12v7H18z" />
    </>
  ),
  jacket: (
    <>
      <path d="M16 7l-8 5 1 27h7v2h16v-2h7l1-27-8-5" />
      <path d="M16 7l4 4-2 3 6 4 6-4-2-3 4-4M24 18v23M17 28l4 1M31 28l-4 1" />
    </>
  ),
  trousers: (
    <>
      <path d="M14 6h20l2 35h-8l-4-24-4 24h-8z" />
      <path d="M14 10h20M24 10v7M18 10c0 3-1 5-3 6M30 10c0 3 1 5 3 6" />
    </>
  ),
  workwear: (
    <>
      <path d="M17 6l-9 5 3 9 5-2v23h7l1-12 1 12h7V18l5 2 3-9-9-5" />
      <path d="M17 6l7 6 7-6M24 12v17M16 25h16" />
      <path d="M18 18h4v3h-4zM26 18h4v3h-4z" />
    </>
  ),
  chef: (
    <>
      <path d="M16 18c-4 0-6-3-5-6s5-4 7-2c1-3 4-4 6-4s5 1 6 4c2-2 6-1 7 2s-1 6-5 6" />
      <path d="M16 18v10h16V18M16 23h16" />
      <path d="M14 34h20l-1 7H15z" />
    </>
  ),
  cap: (
    <>
      <path d="M9 30c0-10 6-17 15-17s15 7 15 17z" />
      <path d="M9 30c6 1 10 3 12 6-6 0-12-1-14-4zM24 13v3M24 13c-4 4-5 11-5 17M24 13c4 4 5 11 5 17" />
    </>
  ),
  kids: (
    <>
      <path d="M19 12l-7 4 2 7 4-1.5V38h12V21.5l4 1.5 2-7-7-4" />
      <path d="M19 12c1 2.5 3 3.5 5 3.5s4-1 5-3.5" />
      <path d="M21 27l1.5 1.5L26 25" />
    </>
  ),
};

export function GarmentIcon({ name, className }: { name: IconKey; className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
