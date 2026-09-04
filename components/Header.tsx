"use client";
import Link from "next/link";
import { useCart } from "./CartProvider";
export function Header() {
  const { count } = useCart();
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="tracking-[0.28em] text-sm font-medium">NORTHLINE</Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/shop" className="hover:text-rust">Shop</Link>
          <Link href="/journal" className="hover:text-rust">Journal</Link>
          <Link href="/about" className="hover:text-rust">About</Link>
          <Link href="/cart" className="hover:text-rust">Cart{count > 0 ? ` (${count})` : ""}</Link>
        </nav>
      </div>
    </header>
  );
}
