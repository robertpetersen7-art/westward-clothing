import type { Metadata } from "next";
import { categories, ranges, rangesFor } from "@/lib/data";
import { Container, CtaBand, PageHero, RangeCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "Featured Ranges",
  description: "Signature Westward golf shirts, lounge shirts, polar fleece, soft shells and jackets — sizes, colours and specs.",
};

export default function RangesPage() {
  const groups = categories.filter((c) => rangesFor(c.slug).length > 0);

  return (
    <>
      <PageHero
        eyebrow="Featured ranges"
        title={
          <>
            {ranges.length} signature styles, <span className="italic text-tan-deep">no minimum order.</span>
          </>
        }
        intro="Pricing varies by garment, size and any special requirements — get in touch and our team will quote you."
      />

      <nav aria-label="Jump to category" className="sticky top-18 z-30 border-b border-line bg-paper/90 backdrop-blur">
        <Container className="flex gap-2 overflow-x-auto py-3">
          {groups.map((c) => (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              className="shrink-0 rounded-full border border-line px-4 py-1.5 text-sm font-medium text-ink-soft transition hover:border-ink hover:text-ink"
            >
              {c.name}
            </a>
          ))}
        </Container>
      </nav>

      <Container className="space-y-20 py-16 sm:py-20">
        {groups.map((c, gi) => (
          <section key={c.slug} id={c.slug} className="scroll-mt-36">
            <div className="flex items-baseline justify-between border-b border-line pb-4">
              <h2 className="font-display text-3xl">{c.name}</h2>
              <span className="text-sm text-stone">{rangesFor(c.slug).length} ranges</span>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
              {rangesFor(c.slug).map((r, i) => (
                <RangeCard key={r.slug} range={r} priority={gi === 0 && i < 2} />
              ))}
            </div>
          </section>
        ))}
      </Container>
      <CtaBand />
    </>
  );
}
