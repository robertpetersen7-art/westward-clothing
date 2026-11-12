import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory, rangesFor } from "@/lib/data";
import { GarmentIcon } from "@/components/GarmentIcon";
import { ArrowLink, CategoryCard, Container, CtaBand, RangeCard } from "@/components/ui";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(props: PageProps<"/collections/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const c = getCategory(slug);
  if (!c) return {};
  return { title: c.name, description: c.blurb };
}

export default async function CategoryPage(props: PageProps<"/collections/[slug]">) {
  const { slug } = await props.params;
  const category = getCategory(slug);
  if (!category) notFound();

  const items = rangesFor(category.slug);
  const others = categories.filter((c) => c.slug !== category.slug).slice(0, 5);

  return (
    <>
      <section className="border-b border-line bg-sand/60">
        <Container className="grid items-center gap-10 py-14 sm:py-20 md:grid-cols-[1fr_auto]">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm text-stone">
              <Link href="/collections" className="hover:text-ink">
                Collections
              </Link>{" "}
              / <span className="text-ink">{category.name}</span>
            </nav>
            <h1 className="mt-4 font-display text-5xl tracking-tight sm:text-6xl">{category.name}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone">{category.blurb}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {category.ideal.map((i) => (
                <li key={i} className="rounded-full border border-line bg-paper px-3 py-1 text-sm text-ink-soft">
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden size-48 items-center justify-center rounded-full border border-line bg-paper md:flex">
            <GarmentIcon name={category.icon} className="size-28 text-tan-deep" />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          {items.length > 0 ? (
            <>
              <h2 className="font-display text-3xl">Featured {category.name.toLowerCase()}</h2>
              <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
                {items.map((r, i) => (
                  <RangeCard key={r.slug} range={r} priority={i < 2} />
                ))}
              </div>
            </>
          ) : (
            <div className="rounded-3xl border border-dashed border-line bg-paper p-10 text-center sm:p-16">
              <h2 className="font-display text-3xl">Our {category.name.toLowerCase()} range changes with the season.</h2>
              <p className="mx-auto mt-4 max-w-xl text-stone">
                Tell us what you&apos;re after — style, colours, sizes and quantity — and we&apos;ll send you current stock
                options and pricing. Special orders can be manufactured on request.
              </p>
              <Link
                href={`/contact?category=${category.slug}`}
                className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 font-semibold text-paper transition hover:bg-tan-deep"
              >
                Ask about {category.name.toLowerCase()}
              </Link>
            </div>
          )}

          <div className="mt-20 flex items-end justify-between gap-4">
            <h2 className="font-display text-2xl">More collections</h2>
            <ArrowLink href="/collections">View all</ArrowLink>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {others.map((c) => (
              <CategoryCard key={c.slug} category={c} count={rangesFor(c.slug).length} />
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
