import type { Metadata } from "next";
import Link from "next/link";
import { Container, CtaBand, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Embroidery & Printing",
  description: "Logo embroidery and garment printing for corporate clothing. Quotes for branding on quantities of 50 garments or more.",
};

const methods = [
  {
    title: "Embroidery",
    tag: "Premium · Durable",
    body: "Stitched directly into the garment for a raised, textured finish that outlasts the shirt. The go-to for golfers, lounge shirts, fleece, jackets and caps.",
    best: ["Left-chest logos", "Caps & headwear", "Jackets & soft shells", "Executive wear"],
  },
  {
    title: "Printing",
    tag: "Bold · Large-format",
    body: "Ideal for bigger artwork, full-colour designs and event runs where you want a lot of impact across the front or back.",
    best: ["Event & campaign tees", "Back-of-shirt prints", "Multi-colour artwork", "Hoodies & merch"],
  },
];

const process = [
  ["Send your artwork", "A vector logo (AI, EPS, PDF or SVG) is ideal, but a high-resolution PNG or JPG will get us started."],
  ["Choose placement", "Left chest, right chest, sleeve, back yoke or full back. We'll advise what works on each garment."],
  ["Approve the proof", "You'll see a proof with size, placement and thread or ink colours before production begins."],
  ["Production & delivery", "Your branded garments are produced, quality-checked and packed ready for your team."],
];

export default function BrandingPage() {
  return (
    <>
      <PageHero
        eyebrow="Branding"
        title={
          <>
            Your logo, <span className="italic text-tan-deep">stitched to last.</span>
          </>
        }
        intro="Embroidery and printing that turns good garments into a uniform. Branding quotes are available on quantities of 50 garments or more."
      />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-6 md:grid-cols-2">
          {methods.map((m) => (
            <article key={m.title} className="flex flex-col rounded-3xl border border-line bg-paper p-8 sm:p-10">
              <p className="eyebrow">{m.tag}</p>
              <h2 className="mt-3 font-display text-4xl">{m.title}</h2>
              <p className="mt-4 leading-relaxed text-stone">{m.body}</p>
              <ul className="mt-8 grid grid-cols-2 gap-3 border-t border-line pt-6 text-sm">
                {m.best.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-tan" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Container>
      </section>

      <section className="twill py-20 text-paper sm:py-28">
        <Container>
          <p className="eyebrow !text-tan">The process</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
            Simple, transparent, <span className="italic text-tan">proofed before we stitch.</span>
          </h2>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {process.map(([t, d], i) => (
              <li key={t} className="bg-night/80 p-8">
                <span className="font-display text-4xl italic text-tan">0{i + 1}</span>
                <h3 className="mt-5 text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/65">{d}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid items-center gap-10 rounded-3xl border border-line bg-sand/60 p-8 sm:p-12 lg:grid-cols-[1fr_auto]">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl">Ordering fewer than 50?</h2>
            <p className="mt-3 max-w-2xl text-stone">
              Our stock garments have no minimum order — buy plain garments in any quantity, or chat to us about your
              branding requirements and we&apos;ll see what we can do.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex justify-center rounded-full bg-ink px-7 py-3.5 font-semibold text-paper transition hover:bg-tan-deep"
          >
            Talk to us
          </Link>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
