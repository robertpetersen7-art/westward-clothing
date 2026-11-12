import type { Metadata } from "next";
import Link from "next/link";
import { categories, rangesFor } from "@/lib/data";
import { GarmentIcon } from "@/components/GarmentIcon";
import { Container, CtaBand, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Collections",
  description: "Corporate golf shirts, lounge shirts, fleece, jackets, workwear, chefswear, headwear and more — ex-stock and ready to brand.",
};

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Collections"
        title={
          <>
            Fifteen categories. <span className="italic text-tan-deep">One supplier.</span>
          </>
        }
        intro="Every garment is chosen for quality and value for money, held in stock while stocks last, and ready for your logo. Can't see it? We'll make it."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => {
              const count = rangesFor(c.slug).length;
              return (
                <li key={c.slug}>
                  <Link
                    href={`/collections/${c.slug}`}
                    className="group flex h-full gap-5 rounded-2xl border border-line bg-paper p-6 transition hover:border-tan hover:shadow-[0_18px_40px_-24px_rgb(28_27_25/0.45)]"
                  >
                    <span className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-sand">
                      <GarmentIcon name={c.icon} className="size-11 text-ink-soft group-hover:text-tan-deep" />
                    </span>
                    <span className="flex flex-col">
                      <span className="flex items-center gap-2 font-display text-xl">
                        {c.name}
                        {count > 0 && (
                          <span className="rounded-full bg-tan/15 px-2 py-0.5 font-sans text-xs font-semibold text-tan-deep">
                            {count} featured
                          </span>
                        )}
                      </span>
                      <span className="mt-2 text-sm leading-relaxed text-stone">{c.blurb}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
