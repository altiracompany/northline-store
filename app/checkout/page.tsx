"use client";
import { useCart } from "@/components/CartProvider";
import { useState } from "react";
import Link from "next/link";
export default function CheckoutPage() {
  const { detailed, total, clear } = useCart();
  const [done, setDone] = useState(false);
  if (done) {
    return (
      <div className="mx-auto max-w-xl px-5 py-24">
        <h1 className="font-serif text-4xl">Order recorded (demo)</h1>
        <p className="mt-4 text-ink/70">Connect Shopify Payments or Stripe before you send traffic.</p>
        <Link href="/shop" className="mt-8 inline-block text-rust">Back to shop</Link>
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-xl px-5 py-16">
      <h1 className="font-serif text-4xl">Checkout</h1>
      <p className="mt-3 text-sm text-ink/60">Demo checkout — no card is charged.</p>
      <ul className="mt-8 text-sm">
        {detailed.map((l) => (
          <li key={l.product.slug} className="flex justify-between border-b border-ink/10 py-2">
            <span>{l.product.name} × {l.qty}</span>
            <span>${l.lineTotal}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-right text-lg">Due ${total}</p>
      <form className="mt-8 space-y-3" onSubmit={(e) => { e.preventDefault(); clear(); setDone(true); }}>
        <input required placeholder="Email for delivery" type="email" className="w-full border border-ink/20 bg-transparent px-3 py-2" />
        <input required placeholder="Name" className="w-full border border-ink/20 bg-transparent px-3 py-2" />
        <button className="w-full bg-ink py-3 text-paper">Place demo order</button>
      </form>
    </div>
  );
}
