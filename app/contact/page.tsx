import type { Metadata } from "next";
import { Suspense } from "react";
import { site } from "@/lib/data";
import { QuoteForm } from "@/components/QuoteForm";
import { Container, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Get a quote for corporate clothing, workwear and branded apparel from Westward Clothing.",
};

export default function ContactPage() {
  const details = [
    site.phone && { label: "Call", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    site.whatsapp && { label: "WhatsApp", value: "Chat with us", href: `https://wa.me/${site.whatsapp}` },
    site.email && { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "Facebook", value: "Message us on Messenger", href: site.messenger },
    site.address && { label: "Visit", value: site.address },
    site.hours && { label: "Hours", value: site.hours },
  ].filter(Boolean) as { label: string; value: string; href?: string }[];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s talk <span className="italic text-tan-deep">clothing.</span>
          </>
        }
        intro="Tell us what you need and we'll come back with options, pricing and branding advice. Our price list is available on request."
      />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <Suspense fallback={<div className="h-[40rem] rounded-3xl border border-line bg-paper" />}>
            <QuoteForm />
          </Suspense>

          <aside className="space-y-6">
            <div className="twill stitch rounded-3xl p-8 text-paper">
              <h2 className="font-display text-2xl">Get in touch</h2>
              <ul className="mt-6 space-y-5">
                {details.map((d) => (
                  <li key={d.label}>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tan">{d.label}</p>
                    {d.href ? (
                      <a
                        href={d.href}
                        target={d.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="mt-1 block text-lg hover:text-tan"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-lg">{d.value}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-line bg-sand/60 p-8">
              <h2 className="font-display text-xl">Good to know</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-stone">
                <li>• No minimum order on stock garments.</li>
                <li>• Embroidery and printing quoted on 50 garments or more.</li>
                <li>• Bulk discounts negotiated with management.</li>
                <li>• Items not in our catalogue can be manufactured on request.</li>
              </ul>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
