"use client";

import { useState } from "react";
import { Menu, X, Wrench, MapPin } from "lucide-react";

const links = [
  { label: "Home", id: "home" },
  { label: "Why Us", id: "why-us" },
  { label: "Courses", id: "courses" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      {/* Top bar - Branch addresses */}
      <div className="bg-[#061c44] text-white text-[11px] sm:text-xs">
        <div className="container mx-auto flex flex-col gap-1 px-4 py-2 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-start gap-1.5">
            <MapPin size={14} className="mt-0.5 shrink-0 text-[#f28a1a]" />
            <span>
              <strong className="text-[#f28a1a]">Branch 1:</strong> Near Danapur Junction, Lakhni Bigha, Khagaul, Danapur, Patna
            </span>
          </div>
          <div className="flex items-start gap-1.5">
            <MapPin size={14} className="mt-0.5 shrink-0 text-[#f28a1a]" />
            <span>
              <strong className="text-[#f28a1a]">Branch 2:</strong> Near Patna Junction, Karbighiya Bari Masjid, Patna
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex h-auto items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo Section */}
        <button
          onClick={() => scrollToId("home")}
          className="flex items-center gap-3 text-left"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#f28a1a] text-white">
            <Wrench size={22} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-xl font-black tracking-wide text-[#061c44] sm:text-2xl">
              PRIME SKILL
            </span>
            <span className="text-[10px] font-semibold text-slate-600 sm:text-xs">
              Technical Institute &amp; Training Centre
            </span>
          </span>
        </button>

        {/* Desktop menu */}
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollToId(l.id)}
              className="text-sm font-bold text-slate-700 transition hover:text-[#e97713]"
            >
              {l.label}
            </button>
          ))}
          <a
            href="tel:+85273785130"
            className="rounded-xl bg-[#061c44] px-4 py-2 text-sm font-extrabold text-white transition hover:bg-blue-900"
          >
            Call Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#061c44]"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="container mx-auto flex flex-col gap-1 px-4 py-3">
            {/* Mobile branch addresses */}
            <div className="mb-2 space-y-2 rounded-lg bg-slate-50 p-3 text-xs text-slate-700">
              <div className="flex items-start gap-1.5">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#f28a1a]" />
                <span>
                  <strong className="text-[#061c44]">Branch 1:</strong> Near Danapur Junction, Lakhni Bigha, Khagaul, Danapur, Patna
                </span>
              </div>
              <div className="flex items-start gap-1.5">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#f28a1a]" />
                <span>
                  <strong className="text-[#061c44]">Branch 2:</strong> Near Patna Junction, Karbighiya Bari Masjid, Patna
                </span>
              </div>
            </div>

            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollToId(l.id)}
                className="rounded-lg px-3 py-3 text-left text-sm font-bold text-slate-700 hover:bg-slate-100"
              >
                {l.label}
              </button>
            ))}
            <a
              href="tel:+85273785130"
              className="mt-2 rounded-xl bg-[#061c44] px-4 py-3 text-center text-sm font-extrabold text-white"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}