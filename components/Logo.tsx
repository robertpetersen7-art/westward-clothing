import Image from "next/image";
import mark from "@/public/logo-mark.png";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <Image
        src={mark}
        alt=""
        width={40}
        height={40}
        priority
        className={`size-10 rounded-full ${inverted ? "bg-paper p-0.5" : ""}`}
      />
      <span className="leading-none">
        <span className={`block font-display text-xl font-semibold tracking-tight ${inverted ? "text-paper" : "text-ink"}`}>
          Westward
        </span>
        <span className={`block text-[0.65rem] font-semibold uppercase tracking-[0.28em] ${inverted ? "text-tan" : "text-tan-deep"}`}>
          Clothing
        </span>
      </span>
    </span>
  );
}
