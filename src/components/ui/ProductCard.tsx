import Image from "next/image";
import type { Product } from "@/data/homepage";

type Props = {
  product: Product;
  compact?: boolean;
};

export function ProductCard({ product, compact }: Props) {
  return (
    <div className="group flex min-w-[190px] max-w-[210px] flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md hover:shadow-lg transition">
      <div className="relative h-32 w-full bg-gray-50 sm:h-40">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-200 group-hover:scale-105"
        />

        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-semibold uppercase text-white">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-3 py-3">
        <p className="line-clamp-2 text-xs font-medium text-gray-800 sm:text-sm">
          {product.title}
        </p>
<span className="font-semibold text-orange-500">{product.price}</span>
{product.oldPrice && (
  <span className="text-[11px] text-gray-400 line-through">
    {product.oldPrice}
  </span>
)}


        <div className="mt-1 text-[11px] text-yellow-500">
          {"★".repeat(Math.round(product.rating))}
          <span className="ml-1 text-gray-400">{product.rating.toFixed(1)}</span>
        </div>

        {!compact && (
          <button className="mt-3 w-full rounded-full bg-blue-600 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white hover:bg-blue-700">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
