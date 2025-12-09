import Image from "next/image";
import { todayDeals } from "@/data/homepage";
import { ProductCard } from "../ui/ProductCard";

export function MainHero() {
  return (
    <section className="section-shell mt-6">
      <div className="grid gap-5 lg:grid-cols-[2fr,3fr]">
        
        {/* LEFT HERO BANNER */}
        <div className="relative overflow-hidden rounded-4xl bg-white shadow-md">
          <div className="relative h-56 w-full md:h-72">
            <Image
              src="https://images.pexels.com/photos/3738341/pexels-photo-3738341.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Hero Banner"
              fill
              className="object-cover"
            />

            {/* Floating tag top-left */}
            <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold text-gray-900">
              Beauty Collection
            </div>

            {/* Text bottom-left */}
            <div className="absolute left-6 bottom-6 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-200">
                Exclusive
              </p>
              <h1 className="max-w-xs text-2xl font-bold text-white md:text-3xl">
                The Beauty Edit Collection
              </h1>

              <button className="mt-2 rounded-full bg-white px-4 py-1.5 text-[11px] font-semibold text-gray-900">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT TODAY'S DEAL SECTION */}
        <div className="rounded-4xl bg-white p-4 shadow-md">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-orange-500">
                Today&apos;s Deal
              </p>
              <p className="text-[11px] text-gray-400">
                Limited time offers only for today
              </p>
            </div>

            <button className="text-[11px] font-medium text-blue-600">
              View all
            </button>
          </div>

          {/* 4 Product Cards */}
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {todayDeals.map((item) => (
              <ProductCard key={item.id} product={item} compact />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
