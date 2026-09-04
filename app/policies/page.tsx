import type { Metadata } from "next";
export const metadata: Metadata = { title: "Policies" };
export default function PoliciesPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16 space-y-8">
      <h1 className="font-serif text-5xl">Policies</h1>
      <p className="text-ink/70">Digital goods. Refunds within 7 days if a file is defective. Replace with counsel-reviewed terms before live payments.</p>
    </div>
  );
}
