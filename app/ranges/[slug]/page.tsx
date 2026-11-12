import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategory, getRange, ranges, rangesFor } from "@/lib/data";
import { Container, CtaBand, RangeCard } from "@/components/ui";

export function generateStaticParams() {
  return ranges.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata(props: PageProps<"/ranges/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const r = getRange(slug);
  if (!r) return {};
  return { title: r.name, description: r.summary, openGraph: { images: [r.image] } };
}

export default async function RangePage(props: PageProps<"/ranges/[slug]">) {
  const { slug } = await props.params;
  const range = getRange(slug);
  if (!range) notFound();
  const category = getCategory(range.category)!;
  const related = rangesFor(range.category).filter((r) => r.slug !== range.slug).slice(0, 4);

  return (
    <>
      <Container className="py-10 sm:py-16">
        <nav aria-label="Breadcrumb" className="text-sm text-stone">
          <Link href="/ranges" className="hover:text-ink">
            Featured ranges
          </Link>{" "}
          /{" "}
          <Link href={`/collections/${category.slug}`} className="hover:text-ink">
            {category.name}
          </Link>{" "}
          / <span className="text-ink">{range.name}</span>
        </nav>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div className="overflow-hidden rounded-3xl border border-line bg-sand lg:sticky lg:top-28 lg:self-start">
            <Image
              src={range.image}
              alt={`${range.name} product flyer showing colours and features`}
              width={900}
              height={1300}
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="h-auto w-full"
            />
          </div>

          <div>
            <p className="eyebrow">{category.name}</p>
            <h1 className="mt-3 font-display text-4xl leading-tight tracking-tight sm:text-6xl">{range.name}</h1>
            <p className="mt-5 text-lg leading-relaxed text-stone">{range.summary}</p>

            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
              <div className="bg-paper p-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-stone">Sizes</dt>
                <dd className="mt-2 font-display text-xl">{range.sizes}</dd>
              </div>
              <div className="bg-paper p-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-stone">Fit</dt>
                <dd className="mt-2 font-display text-xl">{range.fit ?? "See flyer"}</dd>
              </div>
              <div className="col-span-2 bg-paper p-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-stone">Colourways</dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {range.colours.map((c) => (
                    <span key={c} className="rounded-full border border-line px-3 py-1 text-sm">
                      {c}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>

            <h2 className="mt-10 font-display text-2xl">Features</h2>
            <ul className="mt-4 space-y-3">
              {range.features.map((f) => (
                <li key={f} className="flex gap-3 leading-relaxed">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-tan" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl bg-sand/70 p-6">
              <p className="font-semibold">No minimum order · Branding from 50 garments</p>
              <p className="mt-1 text-sm text-stone">
                Pricing varies by size and requirement. Bulk discounts are available on request.
              </p>
              <Link
                href={`/contact?range=${range.slug}`}
                className="mt-5 inline-flex rounded-full bg-ink px-7 py-3.5 font-semibold text-paper transition hover:bg-tan-deep"
              >
                Request a quote for {range.name}
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {related.length > 0 && (
        <section className="border-t border-line bg-sand/40 py-16">
          <Container>
            <h2 className="font-display text-3xl">More {category.name.toLowerCase()}</h2>
            <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
              {related.map((r) => (
                <RangeCard key={r.slug} range={r} />
              ))}
            </div>
          </Container>
        </section>
      )}
      <CtaBand />
    </>
  );
}
