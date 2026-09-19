"use client";

import { Wrench, Phone, MapPin, Mail, Instagram, Facebook, Youtube } from "lucide-react";

const courses = [
  "AC Repairing",
  "Fridge Repairing",
  "Washing Machine",
  "PCB Repairing",
  "Motor Winding",
  "House Wiring",
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#03122d] text-blue-100">
      <div className="container mx-auto grid gap-10 px-4 py-14 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f28a1a]">
              <Wrench size={18} />
            </span>
            <span className="text-lg font-black">Prime Skill</span>
          </div>
          <p className="mt-4 text-sm leading-7 text-blue-200">
            Patna में AC, Fridge, Washing Machine, PCB, Motor Winding और
            House Wiring की 100% practical training।
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:bg-white/10">
              <Instagram size={16} />
            </a>
            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:bg-white/10">
              <Facebook size={16} />
            </a>
            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:bg-white/10">
              <Youtube size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 text-sm font-black uppercase tracking-wider text-white">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              { label: "Home", id: "home" },
              { label: "Why Us", id: "why-us" },
              { label: "Courses", id: "courses" },
              { label: "Gallery", id: "gallery" },
              { label: "Contact", id: "contact" },
            ].map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => scrollToId(l.id)}
                  className="transition hover:text-[#f28a1a]"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h4 className="mb-4 text-sm font-black uppercase tracking-wider text-white">
            Popular Courses
          </h4>
          <ul className="space-y-3 text-sm">
            {courses.map((c) => (
              <li key={c}>
                <button
                  onClick={() => scrollToId("courses")}
                  className="transition hover:text-[#f28a1a]"
                >
                  {c}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-sm font-black uppercase tracking-wider text-white">
            Contact
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-[#f28a1a]" />
              <a href="tel:+85273785130" className="hover:text-[#f28a1a]">
                +91 90000 00000
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-[#f28a1a]" />
              <a href="mailto:info@primeskill.in" className="hover:text-[#f28a1a]">
                info@primeskill.in
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[#f28a1a]" />
              <span>
                Danapur Junction, Lakhni Bigha, Khagaul, Patna, Bihar
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-blue-200 sm:flex-row lg:px-8">
          <p>© {year} Prime Skill Technical Institute. All rights reserved.</p>
          <p>
            Made with ❤️ in Patna
          </p>
        </div>
      </div>
    </footer>
  );
}