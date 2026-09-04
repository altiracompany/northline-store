"use client";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
export default function CartPage() {
  const { detailed, total, setQty, remove } = useCart();
  if (detailed.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="font-serif text-4xl">Cart is empty</h1>
        <Link href="/shop" className="mt-6 inline-block text-rust">Go to shop</Link>
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-serif text-4xl">Cart</h1>
      <ul className="mt-10 divide-y divide-ink/10">
        {detailed.map((line) => (
          <li key={line.product.slug} className="flex items-center justify-between gap-4 py-5">
            <div>
              <p className="font-medium">{line.product.name}</p>
              <p className="text-sm text-ink/60">${line.product.price}</p>
            </div>
            <div className="flex items-center gap-3">
              <input type="number" min={1} value={line.qty} onChange={(e) => setQty(line.product.slug, Number(e.target.value))} className="w-16 border border-ink/20 bg-transparent px-2 py-1" />
              <button className="text-sm text-ink/50" onClick={() => remove(line.product.slug)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex items-center justify-between">
        <p className="text-xl">Total ${total}</p>
        <Link href="/checkout" className="bg-ink px-6 py-3 text-paper">Checkout</Link>
      </div>
    </div>
  );
}
