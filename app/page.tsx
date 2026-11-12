import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import { categories, ranges, rangesFor } from "@/lib/data";
import { ArrowLink, CategoryCard, Container, CtaBand, RangeCard, SectionHeading } from "@/components/ui";

const swatches = [
  { name: "Stone", hex: "#c9b79a" },
  { name: "Bottle", hex: "#1f3b33" },
  { name: "Maroon", hex: "#5a1f24" },
  { name: "Navy", hex: "#1d2741" },
  { name: "Charcoal", hex: "#3b3b3d" },
  { name: "Khaki", hex: "#a8966d" },
  { name: "Airforce", hex: "#5f7590" },
  { name: "Tobacco", hex: "#6b4a2f" },
  { name: "Military", hex: "#4b5236" },
];

const stats = [
  { value: "20+", label: "years designing & supplying apparel" },
  { value: "15", label: "garment categories, ex-stock" },
  { value: "XS–6XL", label: "inclusive sizing, men's & ladies' cuts" },
  { value: "0", label: "minimum order on stock garments" },
];

const steps = [
  {
    n: "01",
    title: "Choose your garments",
    body: "Pick from our ex-stock ranges, or brief us on something new. We manufacture special orders on request once a quote is accepted.",
  },
  {
    n: "02",
    title: "Brand them",
    body: "Send your logo and we'll quote embroidery or printing, with a proof before anything is stitched. Branding is quoted from 50 garments.",
  },
  {
    n: "03",
    title: "Wear your name",
    body: "Stock is replenished as it runs low, so re-orders and new starters match the rest of the team — season after season.",
  },
];

const sectors = [
  "Corporate offices",
  "Hospitality & tourism",
  "Mining & construction",
  "Schools & sports clubs",
  "Retail & front-of-house",
  "Events & promotions",
  "Agriculture",
  "Restaurants & catering",
];

export default function Home() {
  const featured = ["hugo-jacket", "flash-golf-shirt", "vichi-check", "two-tone-polar-fleece"]
    .map((s) => ranges.find((r) => r.slug === s)!)
    .filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <Container className="grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.15fr_1fr] lg:py-28">
          <div>
            <p className="eyebrow">Corporate apparel · Workwear · Branding</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.02] tracking-tight sm:text-7xl">
              Clothing that <span className="italic text-tan-deep">wears your name</span> well.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-stone">
              Westward designs, manufactures and supplies quality corporate wear for South African teams — golf shirts,
              lounge shirts, fleece, jackets and workwear, embroidered or printed with your brand.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-ink px-7 py-3.5 font-semibold text-paper transition hover:bg-tan-deep"
              >
                Request a quote
              </Link>
              <Link
                href="/collections"
                className="rounded-full border border-ink/20 px-7 py-3.5 font-semibold transition hover:border-ink"
              >
                Explore collections
              </Link>
            </div>
          </div>

          {/* Swatch board */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {swatches.map((s, i) => (
                <div
                  key={s.name}
                  className={`relative aspect-square overflow-hidden rounded-2xl shadow-[inset_0_0_0_1px_rgb(0_0_0/0.06)] ${
                    i === 4 ? "invisible" : ""
                  }`}
                  style={{
                    backgroundColor: s.hex,
                    backgroundImage:
                      "repeating-linear-gradient(45deg, rgb(255 255 255 / 0.06) 0 2px, transparent 2px 6px), repeating-linear-gradient(-45deg, rgb(0 0 0 / 0.12) 0 1px, transparent 1px 5px)",
                  }}
                >
                  <span className="absolute bottom-2 left-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/80">
                    {s.name}
                  </span>
                </div>
              ))}
            </div>
            {/* Embroidered patch */}
            <div className="absolute left-1/2 top-1/2 flex size-[36%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-paper shadow-[0_24px_50px_-20px_rgb(28_27_25/0.55)] ring-8 ring-paper">
              <div className="flex size-full items-center justify-center rounded-full border-2 border-dashed border-tan/70 p-3">
                <LogoMark id="ww-mark-hero" className="size-full" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="border-b border-line bg-sand/50">
        <Container className="grid grid-cols-2 gap-y-10 py-12 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-l border-line pl-5">
              <p className="font-display text-4xl tracking-tight sm:text-5xl">{s.value}</p>
              <p className="mt-2 max-w-[14rem] text-sm text-stone">{s.label}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* Collections */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Collections"
            title={
              <>
                Everything your team wears, <span className="italic">in one place.</span>
              </>
            }
            intro="From boardroom lounge shirts to site-ready workwear — chosen for quality and value for money."
            action={<ArrowLink href="/collections">All collections</ArrowLink>}
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {categories.slice(0, 10).map((c) => (
              <CategoryCard key={c.slug} category={c} count={rangesFor(c.slug).length} />
            ))}
          </div>
        </Container>
      </section>

      {/* Featured ranges */}
      <section className="border-y border-line bg-sand/50 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Featured ranges"
            title="Signature styles, ready to brand."
            intro="Matching men's and ladies' cuts, a spread of colours and sizes up to 5XL and beyond. Pricing varies by garment, size and requirement."
            action={<ArrowLink href="/ranges">See all {ranges.length} ranges</ArrowLink>}
          />
          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
            {featured.map((r, i) => (
              <RangeCard key={r.slug} range={r} priority={i < 2} />
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="How it works" title="From brief to branded, in three steps." />
          <ol className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="rounded-2xl border border-line bg-paper p-8">
                <span className="font-display text-5xl italic text-tan">{s.n}</span>
                <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-stone">{s.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Promise + sectors */}
      <section className="twill py-20 text-paper sm:py-28">
        <Container className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow !text-tan">The Westward promise</p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Quality you can stand behind. <span className="italic text-tan">Guaranteed.</span>
            </h2>
            <dl className="mt-10 grid gap-8 sm:grid-cols-2">
              {[
                ["Quality guarantee", "Garments returned under our guarantee are replaced or refunded."],
                ["Ex-stock supply", "Catalogue items ship from stock, and we replenish as it runs down."],
                ["Made to order", "Need something we don't carry? We'll manufacture it once the quote is accepted."],
                ["Bulk pricing", "Volume discounts negotiated directly with management."],
              ].map(([t, d]) => (
                <div key={t} className="border-t border-white/15 pt-5">
                  <dt className="font-semibold">{t}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-paper/65">{d}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:pl-10">
            <p className="eyebrow !text-tan">Who we dress</p>
            <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
              {sectors.map((s) => (
                <li key={s} className="flex items-center justify-between py-4 font-display text-xl sm:text-2xl">
                  {s}
                  <span className="text-tan" aria-hidden="true">
                    ✦
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
