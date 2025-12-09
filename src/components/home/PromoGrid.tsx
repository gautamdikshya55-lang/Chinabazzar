export function PromoGrid() {
  return (
    <section className="section-shell mt-8">
      <div className="grid gap-4 lg:grid-cols-3">
        
        {/* ORANGE SNEAKERS CARD */}
        <div className="relative overflow-hidden rounded-4xl bg-gradient-to-r from-[#ffb347] to-[#ff7a1f] p-6 text-white shadow-md">
          <p className="text-xs font-semibold">50% Discount</p>
          <h3 className="mt-2 text-lg font-bold">On Sneakers</h3>
          <p className="mt-1 text-[11px] text-orange-50">
            Choose from hundreds of styles and colors for everyday comfort.
          </p>
          <button className="mt-4 rounded-full bg-white px-4 py-1.5 text-[11px] font-semibold text-orange-600">
            Shop Now
          </button>
        </div>

        {/* PINK WALLET CARD */}
        <div className="relative overflow-hidden rounded-4xl bg-gradient-to-r from-[#ff8fb6] to-[#f24a8c] p-6 text-white shadow-md">
          <p className="text-xs font-semibold">12% Off</p>
          <h3 className="mt-2 text-lg font-bold">On Credit Wallets</h3>
          <p className="mt-1 text-[11px] text-pink-50">
            Upgrade your accessories with premium leather wallets.
          </p>
          <button className="mt-4 rounded-full bg-white px-4 py-1.5 text-[11px] font-semibold text-pink-600">
            Explore
          </button>
        </div>

        {/* PURPLE GAMEPAD CARD */}
        <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-[#171c2f] via-[#161b3b] to-[#4b1abf] p-6 text-white shadow-md">
          <p className="text-xs font-semibold">Rs. 3000+</p>
          <h3 className="mt-2 text-lg font-bold">With each new joystick purchase</h3>
          <p className="mt-1 text-[11px] text-slate-200">
            Level up your gaming setup with exclusive bundle discounts.
          </p>
          <button className="mt-4 rounded-full bg-yellow-400 px-4 py-1.5 text-[11px] font-semibold text-slate-900">
            Grab Offer
          </button>
        </div>

      </div>
    </section>
  );
}
