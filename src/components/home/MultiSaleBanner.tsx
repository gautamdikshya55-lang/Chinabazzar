export function MultiSaleBanner() {
  return (
    <section className="section-shell mt-8">
      <div className="
        grid 
        grid-cols-4 
        gap-4
        max-lg:grid-cols-2
        max-sm:grid-cols-1
      ">
        
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-4xl bg-gradient-to-r from-[#0034a3] via-[#0054e4] to-[#008cff] p-4 text-center text-white shadow-md"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-200">
              Sale
            </p>

            <p className="mt-1 text-sm font-bold">Upto 50% Off</p>

            <p className="mt-1 text-[10px] text-blue-100">Limited Offer</p>
          </div>
        ))}

      </div>
    </section>
  );
}
