import Link from "next/link";
import { categories, nav, site } from "@/lib/data";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="twill text-paper/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-5">
          <Logo inverted />
          <p className="max-w-xs text-sm leading-relaxed">
            Corporate apparel, workwear and branded clothing — designed, made and supplied by a team with over 20 years in
            the trade.
          </p>
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-paper hover:text-tan"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
              <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.5V21h3z" />
            </svg>
            Follow us on Facebook
          </a>
        </div>

        <div>
          <h2 className="eyebrow !text-tan">Collections</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {categories.slice(0, 10).map((c) => (
              <li key={c.slug}>
                <Link href={`/collections/${c.slug}`} className="hover:text-paper">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow !text-tan">Company</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow !text-tan">Get in touch</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {site.phone && (
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-paper">
                  {site.phone}
                </a>
              </li>
            )}
            {site.email && (
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-paper">
                  {site.email}
                </a>
              </li>
            )}
            {site.address && <li>{site.address}</li>}
            {site.hours && <li>{site.hours}</li>}
            <li>
              <a href={site.messenger} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
                Message us on Facebook
              </a>
            </li>
          </ul>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-tan px-5 py-2.5 text-sm font-semibold text-night transition hover:bg-paper"
          >
            Request a quote
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-paper/50 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>© Westward Clothing. All rights reserved.</p>
          <p>South Africa · Corporate &amp; branded apparel</p>
        </div>
      </div>
    </footer>
  );
}
