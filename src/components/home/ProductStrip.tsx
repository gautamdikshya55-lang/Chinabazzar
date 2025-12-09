import type { Product } from "@/data/homepage";
import { SectionHeader } from "../ui/SectionHeader";
import { ProductCard } from "../ui/ProductCard";

type Props = {
  id?: string;
  title: string;
  subtitle?: string;
  products: Product[];
};

export function ProductStrip({ id, title, subtitle, products }: Props) {
  return (
    <section id={id} className="section-shell mt-10">
      <SectionHeader title={title} subtitle={subtitle} />

      {/* FIXED GRID — cannot overlap other sections */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
