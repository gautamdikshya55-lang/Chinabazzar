import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { MainHero } from "@/components/home/MainHero";
import { SaleBanner } from "@/components/home/SaleBanner";
import { PromoGrid } from "@/components/home/PromoGrid";
import { LiveSell } from "@/components/home/LiveSell";
import { ProductStrip } from "@/components/home/ProductStrip";
import { MultiSaleBanner } from "@/components/home/MultiSaleBanner";

import { flashDeals, specialOffers } from "@/data/homepage";

export default function Home() {
  return (
    <main className="bg-[#f9fbff] pb-10">

      <Header />

      <MainHero />

      <SaleBanner />

      <PromoGrid />

      <LiveSell />

      <ProductStrip
        title="Flash Deals"
        subtitle="Grab these limited-time offers"
        products={flashDeals}
      />

      <MultiSaleBanner />

      <ProductStrip
        title="Special Offers"
        subtitle="Deals curated just for you"
        products={specialOffers}
      />

      <Footer />

    </main>
  );
}
