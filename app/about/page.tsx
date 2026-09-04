import type { Metadata } from "next";
export const metadata: Metadata = { title: "About" };
export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <h1 className="font-serif text-5xl">About NORTHLINE</h1>
      <p className="mt-6 text-lg leading-relaxed text-ink/80">
        Digital operating systems for people who do the work themselves. Search, Pinterest, and email can carry this store without paid acquisition.
      </p>
    </div>
  );
}
