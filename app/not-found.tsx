import Link from "next/link";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-5xl">This page has come unstitched.</h1>
      <p className="mt-4 text-stone">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <div className="mt-10 flex justify-center gap-3">
        <Link href="/" className="rounded-full bg-ink px-7 py-3.5 font-semibold text-paper">
          Back home
        </Link>
        <Link href="/collections" className="rounded-full border border-ink/20 px-7 py-3.5 font-semibold">
          Collections
        </Link>
      </div>
    </Container>
  );
}
