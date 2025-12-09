export function SaleBanner() {
  return (
    <section className="section-shell mt-8">
   <div
  className="
    h-[220px]           /* EXACT Figma height */
    md:h-[260px]        /* Desktop height */
    rounded-[36px]
    bg-gradient-to-r from-[#0034A3] via-[#0055E5] to-[#0090FF]
    p-6 md:p-12
    text-white shadow-lg
  "
>

        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          {/* LEFT TEXT */}
          <div className="space-y-3 md:space-y-4">
            <p className="text-[11px] tracking-[0.25em] font-semibold text-blue-200 uppercase">
              Mega Sale
            </p>

            <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">
              SALE UPTO 50% OFF
            </h2>

            <p className="text-[13px] md:text-sm text-blue-100 max-w-md">
              Limited offer on selected categories. Grab your favorite products  
              before the timer runs out.
            </p>
          </div>

          {/* RIGHT PILL */}
          <button className="
            rounded-full 
            bg-white/20 
            px-6 py-2 
            text-[11px] md:text-sm 
            font-semibold 
            tracking-[0.25em]
            uppercase
            whitespace-nowrap
          ">
            Limited Offer
          </button>

        </div>

      </div>
    </section>
  );
}
