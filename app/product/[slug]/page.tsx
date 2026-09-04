import { getProduct, products } from "@/lib/products";
import { notFound } from "next/navigation";
import { AddButton } from "@/components/AddButton";
import type { Metadata } from "next";
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProduct(params.slug);
  return { title: product?.name, description: product?.summary };
}
export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();
  const color = product.tone.includes("rust") ? "#8b3a2a" : product.tone.includes("brass") ? "#b0894a" : product.tone.includes("ink") ? "#2a2620" : "#4a5340";
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2">
      <div className="product-cover min-h-[480px] p-8 text-paper" style={{ ["--from" as string]: color }}>
        <p className="text-[11px] uppercase tracking-[0.2em] opacity-80">{product.tag}</p>
        <h1 className="mt-20 font-serif text-5xl">{product.name}</h1>
        <p className="mt-6 opacity-80">{product.format}</p>
      </div>
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-ink/50">{product.bestFor}</p>
        <p className="mt-4 font-serif text-4xl">
          ${product.price}
          {product.compareAt ? <span className="ml-3 text-2xl text-ink/40 line-through">${product.compareAt}</span> : null}
        </p>
        <p className="mt-6 leading-relaxed text-ink/80">{product.description}</p>
        <ul className="mt-8 space-y-2 text-sm">
          {product.includes.map((item) => (
            <li key={item} className="border-b border-ink/10 py-2">{item}</li>
          ))}
        </ul>
        <AddButton slug={product.slug} />
      </div>
    </div>
  );
}
