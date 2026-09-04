import { posts } from "@/lib/products";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  return { title: post?.title, description: post?.excerpt };
}
export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();
  return (
    <article className="mx-auto max-w-2xl px-5 py-16">
      <h1 className="font-serif text-5xl leading-tight">{post.title}</h1>
      <p className="mt-4 text-ink/60">{post.excerpt}</p>
      <div className="mt-10 space-y-5 text-lg leading-relaxed text-ink/85">
        {post.body.split("\n\n").map((para) => (
          <p key={para.slice(0, 24)}>{para}</p>
        ))}
      </div>
    </article>
  );
}
