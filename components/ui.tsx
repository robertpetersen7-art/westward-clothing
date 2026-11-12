import Image from "next/image";
import Link from "next/link";
import { getCategory, type Category, type Range } from "@/lib/data";
import { GarmentIcon } from "./GarmentIcon";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: React.ReactNode; intro?: React.ReactNode }) {
  return (
    <section className="border-b border-line bg-sand/60">
      <Container className="py-16 sm:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone">{intro}</p>}
      </Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  action,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div className="max-w-2xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight sm:text-5xl">{title}</h2>
        {intro && <p className="mt-4 text-lg leading-relaxed text-stone">{intro}</p>}
      </div>
      {action}
    </div>
  );
}

export function ArrowLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-sm font-semibold ${light ? "text-paper" : "text-ink"}`}
    >
      <span className="border-b border-current pb-0.5">{children}</span>
      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}

export function CategoryCard({ category, count }: { category: Category; count?: number }) {
  return (
    <Link
      href={`/collections/${category.slug}`}
      className="group relative flex flex-col justify-between gap-8 rounded-2xl border border-line bg-paper p-6 transition hover:-translate-y-0.5 hover:border-tan hover:shadow-[0_18px_40px_-24px_rgb(28_27_25/0.45)]"
    >
      <GarmentIcon
        name={category.icon}
        className="size-14 text-ink-soft transition-colors group-hover:text-tan-deep"
      />
      <div>
        <h3 className="font-display text-xl">{category.name}</h3>
        <p className="mt-1 text-sm text-stone">
          {count ? `${count} featured range${count > 1 ? "s" : ""}` : "Ex-stock & made to order"}
        </p>
      </div>
      <span
        aria-hidden="true"
        className="absolute right-5 top-5 text-stone opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
      >
        ↗
      </span>
    </Link>
  );
}

export function RangeCard({ range, priority = false }: { range: Range; priority?: boolean }) {
  const cat = getCategory(range.category);
  return (
    <Link href={`/ranges/${range.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-sand">
        <Image
          src={range.image}
          alt={`${range.name} flyer`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          priority={priority}
          className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-tan-deep">{cat?.name}</p>
          <h3 className="mt-1 font-display text-lg leading-snug">{range.name}</h3>
          <p className="mt-1 text-sm text-stone">{range.sizes}</p>
        </div>
        <span className="mt-5 flex -space-x-1" aria-label={`${range.colours.length} colourways`}>
          <span className="rounded-full border border-line bg-paper px-2 py-0.5 text-xs text-stone">
            {range.colours.length} colour{range.colours.length > 1 ? "s" : ""}
          </span>
        </span>
      </div>
    </Link>
  );
}

export function CtaBand() {
  return (
    <section className="py-20">
      <Container>
        <div className="twill stitch relative overflow-hidden rounded-3xl px-6 py-14 text-paper sm:px-14 sm:py-20">
          <div className="grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="eyebrow !text-tan">Let&apos;s kit out your team</p>
              <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
                Tell us what you need. <span className="italic text-tan">We&apos;ll handle the rest.</span>
              </h2>
              <p className="mt-5 max-w-xl text-paper/70">
                Send us your garment, quantity and logo — we&apos;ll come back with options, pricing and a branding proof.
                Bulk discounts available.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/contact"
                className="rounded-full bg-tan px-7 py-3.5 font-semibold text-night transition hover:bg-paper"
              >
                Request a quote
              </Link>
              <Link
                href="/collections"
                className="rounded-full border border-paper/30 px-7 py-3.5 font-semibold transition hover:border-paper"
              >
                Browse collections
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
