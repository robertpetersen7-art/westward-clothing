import type { Metadata } from "next";
import Image from "next/image";
import mark from "@/public/logo-mark.png";
import { Container, CtaBand, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Us",
  description: "Over 20 years designing, manufacturing and supplying corporate apparel with quality and value for money in mind.",
};

const values = [
  {
    title: "Quality first",
    body: "Every garment in our range is selected or designed with quality and value for money in mind — fabrics, stitching and fit that hold up to daily wear.",
  },
  {
    title: "Backed by a guarantee",
    body: "If an item is returned under our guarantee, we'll replace or refund it. Full terms are listed on our price list.",
  },
  {
    title: "Always in stock",
    body: "Catalogue items are available ex-stock while stocks last, and we replenish lines as they run down so your re-orders match.",
  },
  {
    title: "Made for you",
    body: "Need something that isn't in the catalogue? We manufacture special orders on request once your quote is accepted.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Westward"
        title={
          <>
            Two decades of <span className="italic text-tan-deep">needle and thread.</span>
          </>
        }
      />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="twill stitch flex aspect-square items-center justify-center rounded-full p-14">
              <Image src={mark} alt="Westward Clothing emblem" className="rounded-full" />
            </div>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
            <p className="font-display text-2xl leading-snug text-ink sm:text-3xl">
              Westward&apos;s management has been involved in the design, manufacture and supply of apparel for over 20
              years.
            </p>
            <p>
              That experience shows up in the details: matching men&apos;s and ladies&apos; cuts so whole teams look
              consistent, inclusive sizing up to 5XL and 6XL, embroidery zips on jackets, and fabrics chosen to survive
              the wash — and the South African weather.
            </p>
            <p>
              We work with businesses of every size, from a five-person office ordering a handful of golfers to large
              organisations kitting out entire workforces. Our price list is available on request, and bulk discounts
              are negotiated directly with management.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-sand/50 py-16 sm:py-24">
        <Container>
          <p className="eyebrow">What we stand for</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-line bg-paper p-7">
                <h2 className="font-display text-2xl">{v.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-stone">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
