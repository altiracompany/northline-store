import Link from "next/link";
import type { Product } from "@/lib/products";
export function ProductCard({ product }: { product: Product }) {
  const from = product.tone.includes("rust") ? "#8b3a2a" : product.tone.includes("brass") ? "#b0894a" : product.tone.includes("ink") ? "#2a2620" : "#4a5340";
  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="product-cover relative aspect-[4/5] p-6 text-paper" style={{ ["--from" as string]: from }}>
        <p className="text-[11px] uppercase tracking-[0.2em] opacity-80">{product.tag}</p>
        <h3 className="mt-16 font-serif text-3xl leading-tight">{product.name}</h3>
        <p className="absolute bottom-6 left-6 text-sm">${product.price}</p>
      </div>
      <p className="mt-3 text-sm text-ink/70 group-hover:text-ink">{product.summary}</p>
    </Link>
  );
}
