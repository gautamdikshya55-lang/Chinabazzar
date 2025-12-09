import Image from "next/image";
import { SectionHeader } from "../ui/SectionHeader";

const liveItems = [
  {
    id: 1,
    title: "Fashion Try-On Live",
    viewers: "12.5k watching",
    tag: "LIVE",
    image:
      "https://images.pexels.com/photos/7671166/pexels-photo-7671166.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    title: "Gadget Unboxing Stream",
    viewers: "8.2k watching",
    tag: "LIVE",
    image:
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    title: "Men's Wear Styling",
    viewers: "6.9k watching",
    tag: "UPCOMING",
    image:
      "https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export function LiveSell() {
  return (
    <section className="section-shell mt-8">
      <SectionHeader 
        title="Live Sell" 
        subtitle="Watch & shop in real time" 
      />

      <div className="grid gap-4 md:grid-cols-3">
        {liveItems.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-4xl bg-white shadow-md hover:shadow-lg transition"
          >
            <div className="relative h-52 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />

              {/* tag badge */}
              <span
                className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-semibold text-white ${
                  item.tag === "LIVE" ? "bg-red-500" : "bg-blue-600"
                }`}
              >
                {item.tag}
              </span>
            </div>

            <div className="px-4 py-3 text-xs">
              <p className="font-semibold text-gray-900">{item.title}</p>
              <p className="mt-1 text-[11px] text-gray-500">{item.viewers}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
