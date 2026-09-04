"use client";
import { useState } from "react";
import { useCart } from "./CartProvider";
import { useRouter } from "next/navigation";
export function AddButton({ slug }: { slug: string }) {
  const { add } = useCart();
  const router = useRouter();
  const [added, setAdded] = useState(false);
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <button className="bg-ink px-6 py-3 text-paper" onClick={() => { add(slug); setAdded(true); }}>
        {added ? "Added to cart" : "Add to cart"}
      </button>
      <button className="border border-ink/20 px-6 py-3" onClick={() => router.push("/cart")}>View cart</button>
    </div>
  );
}
