import Link from "next/link";
export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-3">
        <div>
          <p className="tracking-[0.28em] text-sm">NORTHLINE</p>
          <p className="mt-3 max-w-xs text-sm text-ink/70">Operating systems for people who run the shop themselves.</p>
        </div>
        <div className="text-sm space-y-2">
          <Link href="/shop" className="block hover:text-rust">Shop</Link>
          <Link href="/journal" className="block hover:text-rust">Journal</Link>
          <Link href="/policies" className="block hover:text-rust">Policies</Link>
        </div>
        <p className="text-sm text-ink/60">Connect Klaviyo or Shopify Email for the list. This footer is a placeholder capture.</p>
      </div>
    </footer>
  );
}
