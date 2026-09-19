"use client";

import { useState } from "react";
import { Menu, X, Wrench } from "lucide-react";

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
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => scrollToId("home")}
          className="flex items-center gap-2 font-black text-[#061c44]"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f28a1a] text-white">
            <Wrench size={18} />
          </span>
          Prime Skill
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