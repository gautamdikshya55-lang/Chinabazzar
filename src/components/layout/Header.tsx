"use client";

import { Search, Heart, ShoppingCart, User, Globe } from "lucide-react";
import { useState } from "react";

const navCategories = [
  "All Categories",
  "Fashion",
  "Electronics",
  "Beauty",
  "Home & Kitchen",
  "Sport",
  "More",
];

export function Header() {
  const [active, setActive] = useState("All Categories");

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      
      {/* Top Bar */}
      <div className="section-shell flex flex-col gap-4 py-4 md:flex-row md:items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-xs font-bold text-white">
            CB
          </div>
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            Chinabazaar
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex flex-1 items-center gap-3">
          <div className="flex w-full items-center overflow-hidden rounded-full bg-slate-50 shadow-sm ring-1 ring-slate-200">
            <input
              className="h-10 flex-1 border-none bg-transparent px-4 text-sm outline-none placeholder:text-slate-400"
              placeholder="Search for products, brands and more..."
            />

            <button className="hidden h-10 items-center border-l border-slate-200 bg-white px-3 text-xs font-medium text-slate-600 md:flex">
              All Category
            </button>

            <button className="flex h-10 w-12 items-center justify-center bg-blue-600 text-white">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center justify-between gap-3 md:justify-end">

          <button className="hidden items-center gap-2 text-xs font-medium text-slate-700 md:inline-flex">
            <Globe className="h-4 w-4 text-blue-600" />
            EN / INR
          </button>

          <button className="hidden items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 md:inline-flex">
            <User className="h-4 w-4 text-blue-600" />
            Login / Register
          </button>

          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-700">
            <Heart className="h-4 w-4" />
          </button>

          <button className="relative flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
            <ShoppingCart className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-400 text-[10px] font-bold text-slate-900">
              3
            </span>
          </button>
        </div>

      </div>

     {/* Category Strip */}
<div className="w-full bg-[#4A5CF6] shadow-sm border-t border-blue-700">
  <div className="section-shell flex items-center gap-6 py-3 overflow-x-auto whitespace-nowrap no-scrollbar">
    
    {/* Left item with icon */}
    <button className="flex items-center gap-2 text-white text-sm font-medium">
      <span className="text-lg">☰</span>
      All Categories:
    </button>

    {/* Right categories */}
    {navCategories.slice(1).map((cat, i) => (
      <div key={cat} className="flex items-center text-white text-sm font-medium gap-4">
        <button className="hover:opacity-80 transition">
          {cat}
        </button>

        {/* Divider (no divider after last item) */}
        {i !== navCategories.length - 2 && (
          <span className="text-white/40">|</span>
        )}
      </div>
    ))}

  </div>
</div>


    </header>
  );
}
