"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { products, type Product } from "@/lib/products";
type Line = { slug: string; qty: number };
type CartContextValue = {
  lines: Line[];
  add: (slug: string) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  count: number;
  total: number;
  detailed: { product: Product; qty: number; lineTotal: number }[];
};
const CartContext = createContext<CartContextValue | null>(null);
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<Line[]>([]);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      const raw = localStorage.getItem("northline-cart");
      if (raw) setLines(JSON.parse(raw));
    } catch {}
    setReady(true);
  }, []);
  useEffect(() => {
    if (ready) localStorage.setItem("northline-cart", JSON.stringify(lines));
  }, [lines, ready]);
  const value = useMemo(() => {
    const detailed = lines
      .map((l) => {
        const product = products.find((p) => p.slug === l.slug);
        if (!product) return null;
        return { product, qty: l.qty, lineTotal: product.price * l.qty };
      })
      .filter(Boolean) as { product: Product; qty: number; lineTotal: number }[];
    return {
      lines,
      add: (slug: string) =>
        setLines((prev) => {
          const found = prev.find((l) => l.slug === slug);
          if (found) return prev.map((l) => (l.slug === slug ? { ...l, qty: l.qty + 1 } : l));
          return [...prev, { slug, qty: 1 }];
        }),
      remove: (slug: string) => setLines((prev) => prev.filter((l) => l.slug !== slug)),
      setQty: (slug: string, qty: number) =>
        setLines((prev) => (qty < 1 ? prev.filter((l) => l.slug !== slug) : prev.map((l) => (l.slug === slug ? { ...l, qty } : l)))),
      clear: () => setLines([]),
      count: lines.reduce((n, l) => n + l.qty, 0),
      total: detailed.reduce((n, l) => n + l.lineTotal, 0),
      detailed,
    };
  }, [lines]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
