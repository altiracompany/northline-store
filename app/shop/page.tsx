import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Shop" };
export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="font-serif text-5xl">Shop</h1>
      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
