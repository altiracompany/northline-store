import Link from "next/link";
import { products, posts } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.25em] text-rust">Digital systems, instant delivery</p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] md:text-7xl">
          Operating systems for people who run things.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
          Templates that assume you are the team. Built to sell without a paid-ad budget.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/shop" className="bg-ink px-6 py-3 text-paper">Shop the stack</Link>
          <Link href="/journal/zero-ad-math" className="border border-ink/20 px-6 py-3">Read the $30k math</Link>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-serif text-4xl">The catalog</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <h2 className="font-serif text-4xl">From the journal</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/journal/${post.slug}`} className="border border-ink/10 p-6 hover:border-ink/40">
              <h3 className="font-serif text-2xl">{post.title}</h3>
              <p className="mt-3 text-sm text-ink/70">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
