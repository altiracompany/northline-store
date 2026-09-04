import Link from "next/link";
import { posts } from "@/lib/products";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Journal" };
export default function JournalPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-serif text-5xl">Journal</h1>
      <div className="mt-12 space-y-10">
        {posts.map((post) => (
          <Link key={post.slug} href={`/journal/${post.slug}`} className="block">
            <h2 className="font-serif text-3xl">{post.title}</h2>
            <p className="mt-2 text-ink/70">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
