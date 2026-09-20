"use client";

import { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  PlayCircle,
  ChevronDown,
  Wrench,
  GraduationCap,
  ShieldCheck,
  Phone,
  MapPin,
  Instagram,
  Clock,
  Award,
  Snowflake,
  Cpu,
  Waves,
  Zap,
  RotateCw,
  Tag,
  Flame,
  Package,
  Star,
} from "lucide-react";

// ---------- ASSETS ----------
const ASSETS = {
  hero: "/images/logopr.jpg",
  courses: "/images/courses.jpg",
  training: "/images/gallery1.jpg",
};

// ---------- CONSTANTS ----------
const DISPLAY_NUMBER = "+91 85273785130";
const WHATSAPP_NUMBER = "85273785130";

// ---------- COURSE DATA (Premium Categories) ----------
const courseCategories = [
  {
    id: "rac",
    badge: "Most Popular",
    badgeColor: "bg-orange-500",
    icon: Snowflake,
    accent: "text-cyan-600",
    accentBg: "bg-cyan-50",
    title: "RAC (Refrigerator & Air Conditioner)",
    subtitle: "All Types of AC & Fridge Repairing",
    duration: "2 Months",
    originalFee: "₹34,999",
    offFee: "₹24,499",
    discount: "30% OFF",
    subCourses: [
      "Split AC Repairing",
      "Window AC Repairing",
      "Hot & Cold AC Repairing",
      "Inverter AC Repairing",
      "Non-Inverter AC Repairing",
      "Single Door Fridge Repairing",
      "Double Door Fridge Repairing",
      "Inverter Fridge Repairing",
      "Non-Inverter Fridge Repairing",
      "Deep Freezer Repairing",
      "Water Cooler Repairing",
    ],
  },
  {
    id: "pcb",
    badge: "Advanced",
    badgeColor: "bg-purple-600",
    icon: Cpu,
    accent: "text-purple-600",
    accentBg: "bg-purple-50",
    title: "PCB Repairing",
    subtitle: "All Types of PCB Repairing",
    duration: "2 Months",
    originalFee: "₹34,999",
    offFee: "₹24,499",
    discount: "30% OFF",
    subCourses: [
      "AC PCB Repairing",
      "Fridge PCB Repairing",
      "Washing Machine PCB Repairing",
      "RO PCB Repairing",
      "Geyser PCB Repairing",
      "Micro Oven PCB Repairing",
      "Etc.",
    ],
  },
  {
    id: "wrgcm",
    badge: "Best Value",
    badgeColor: "bg-emerald-600",
    icon: Waves,
    accent: "text-emerald-600",
    accentBg: "bg-emerald-50",
    title: "WRGCM Repairing Course",
    subtitle: "Washing Machine, RO, Geyser, Cooler & Micro Oven",
    duration: "2 Months",
    originalFee: "₹9,999",
    offFee: "₹8,499",
    discount: "15% OFF",
    subCourses: [
      "All Types of Washing Machine Repairing",
      "RO (Water Purifier) Repairing",
      "Geyser Repairing",
      "Cooler Repairing",
      "Micro Oven Repairing",
      "Etc.",
    ],
  },
  {
    id: "house-wiring",
    badge: "Job Ready",
    badgeColor: "bg-blue-600",
    icon: Zap,
    accent: "text-blue-600",
    accentBg: "bg-blue-50",
    title: "House Wiring",
    subtitle: "All Types of House Wiring & Basic Electrical Knowledge",
    duration: "2 Months",
    originalFee: "₹9,999",
    offFee: "₹8,499",
    discount: "15% OFF",
    subCourses: [
      "Voltage, Current, Resistance, Power",
      "AC/DC की जानकारी",
      "Watt, Ampere",
      "Conduit Wiring (कंड्यूट वायरिंग)",
      "Concealed Wiring (कन्सील्ड वायरिंग)",
      "Surface Wiring (सरफेस वायरिंग)",
      "One-Way & Two-Way Switch Wiring",
      "Series & Parallel Wiring",
      "DB, MCB & RCCB Wiring",
      "Earthing & Electrical Safety",
      "Fault Finding & Testing",
      "Etc.",
    ],
  },
  {
    id: "motor",
    badge: "High Demand",
    badgeColor: "bg-rose-600",
    icon: RotateCw,
    accent: "text-rose-600",
    accentBg: "bg-rose-50",
    title: "Motor Rewinding",
    subtitle: "All Types of Motor Rewinding (Single Phase & Three Phase)",
    duration: "2 Months",
    originalFee: "₹15,499",
    offFee: "₹13,174",
    discount: "15% OFF",
    subCourses: [
      "Selling Fan Motor",
      "Farrata Fan Motor",
      "Wall Fan Motor",
      "Table Fan Motor",
      "Stand Fan Motor",
      "Tullu Pump Motor",
      "Submersible Pump Motor",
      "Aata Chaki Motor",
      "Induction Motor",
      "Etc.",
    ],
  },
];

// ---------- BENEFITS ----------
const benefits = [
  {
    icon: Wrench,
    title: "Real Machine Practice",
    text: "असली मशीनों पर hands-on training, सिर्फ theory नहीं।",
  },
  {
    icon: GraduationCap,
    title: "Expert Trainers",
    text: "10+ साल के experienced trainers से सीखें।",
  },
  {
    icon: ShieldCheck,
    title: "Job Assistance",
    text: "Course पूरा होने पर placement में पूरी मदद।",
  },
  {
    icon: Award,
    title: "Certified Course",
    text: "Government recognized certificate के साथ।",
  },
];

// ---------- COMPONENT: CourseCard (Premium) ----------
function CourseCard({ category, onEnquire }) {
  const [open, setOpen] = useState(false);
  const Icon = category.icon;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Top gradient bar */}
      <div className={`h-1.5 w-full ${category.badgeColor}`} />

      {/* Badge */}
      <div className="absolute right-4 top-5 z-10">
        <span
          className={`rounded-full ${category.badgeColor} px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-md`}
        >
          {category.badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        {/* Icon + Title */}
        <div className="flex items-start gap-4">
          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${category.accentBg} ${category.accent}`}
          >
            <Icon size={28} />
          </div>
          <div className="min-w-0 flex-1 pr-16">
            <h3 className="text-lg font-black leading-tight text-slate-900">
              {category.title}
            </h3>
            <p className="mt-1 text-xs font-semibold text-slate-500">
              {category.subtitle}
            </p>
          </div>
        </div>

        {/* Duration */}
        <div className="mt-4 flex items-center gap-2 text-sm font-bold text-slate-600">
          <Clock size={15} className="text-slate-400" />
          Duration: {category.duration}
        </div>

        {/* Sub-courses toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="mt-4 flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-100"
        >
          <span className="flex items-center gap-2">
            <Package size={15} /> Course Content ({category.subCourses.length})
          </span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>

        {/* Sub-courses list */}
        {open && (
          <ul className="mt-3 space-y-2 rounded-xl bg-slate-50 p-4">
            {category.subCourses.map((sub) => (
              <li
                key={sub}
                className="flex items-start gap-2 text-sm text-slate-600"
              >
                <CheckCircle2
                  size={15}
                  className={`mt-0.5 shrink-0 ${category.accent}`}
                />
                <span>{sub}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Fees */}
        <div className="mt-5 flex items-end justify-between rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4">
          <div>
            <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
              Course Fee
            </p>
            <p className="text-sm font-bold text-slate-400 line-through">
              {category.originalFee}
            </p>
            <p className="text-2xl font-black text-[#061c44]">
              {category.offFee}
            </p>
          </div>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700">
            <Tag size={12} className="mr-1 inline" />
            {category.discount}
          </span>
        </div>

        {/* Enquire button */}
        <button
          onClick={() => onEnquire(category.title)}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#061c44] px-4 py-3.5 text-sm font-extrabold text-white transition hover:bg-blue-900"
        >
          <MessageCircle size={17} /> Enquire on WhatsApp
        </button>
      </div>
    </div>
  );
}

// ---------- MAIN PAGE ----------
export default function Page() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    course: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const scrollToId = (id) => {
    if (typeof document === "undefined") return;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const enquire = (courseTitle = "") => {
    const text = encodeURIComponent(
      `नमस्ते Prime Skill, मुझे ${courseTitle || "course"} के बारे में जानकारी चाहिए।`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  const submitEnquiry = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("");

    try {
      const text = encodeURIComponent(
        `नाम: ${form.name}\nमोबाइल: ${form.phone}\nकोर्स: ${form.course}\nसवाल: ${form.message}`
      );
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
      setStatus("धन्यवाद! आपकी enquiry भेज दी गई है।");
      setForm({ name: "", phone: "", course: "", message: "" });
    } catch (err) {
      setStatus("कुछ गड़बड़ हो गई, कृपया दोबारा try करें।");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      {/* HERO */}
      <section
        id="home"
        className="relative isolate min-h-[620px] overflow-hidden bg-[#061c44]"
      >
        <img
          src={ASSETS.hero}
          alt="Prime Skill practical training banner"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-35"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 75% 30%, rgba(233,119,19,0.38), transparent 35%), linear-gradient(90deg, #061c44 0%, rgba(6,28,68,0.93) 43%, rgba(6,28,68,0.38) 100%)",
          }}
        />
        <div className="container mx-auto grid min-h-[620px] items-center gap-10 px-4 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
          <div className="max-w-2xl text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-2 text-sm font-bold text-amber-200">
              <Sparkles size={16} /> हुनर सीखें, अपना काम शुरू करें
            </div>
            <h1 className="text-4xl font-black leading-[1.1] tracking-tight sm:text-6xl">
              मशीन रिपेयरिंग का{" "}
              <span className="text-[#ffad27]">हुनर</span>,<br />
              आपके बेहतर भविष्य की शुरुआत
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-blue-100 sm:text-lg">
              AC, Fridge, Washing Machine, RO, Geyser, PCB, Motor Winding और
              House Wiring की 100% practical training — अब Patna में।
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => scrollToId("courses")}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#f28a1a] px-6 py-4 font-extrabold text-white shadow-xl shadow-orange-950/20 transition hover:bg-orange-500"
              >
                सभी कोर्स देखें <ArrowRight size={19} />
              </button>
              <button
                onClick={() => enquire()}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-4 font-extrabold text-white backdrop-blur transition hover:bg-white/20"
              >
                <MessageCircle size={19} /> WhatsApp पर पूछें
              </button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-blue-100">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="text-emerald-400" size={18} /> Practical Classes
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="text-emerald-400" size={18} /> Expert Trainer
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="text-emerald-400" size={18} /> Job Assistance
              </span>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="ml-auto max-w-[480px] rounded-[28px] border border-white/25 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
              <img
                src={ASSETS.courses}
                alt="Technical courses at Prime Skill"
                className="h-[365px] w-full rounded-[20px] object-cover object-center"
              />
              <div className="flex items-center justify-between px-4 py-4">
                <div>
                  <p className="font-extrabold text-white">आज ही सीखना शुरू करें</p>
                  <p className="text-sm text-blue-100">Seats limited · Admission open</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f28a1a] text-white">
                  <PlayCircle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 mx-auto -mt-9 max-w-6xl px-4">
        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl sm:grid-cols-4">
          {[
            { value: "5+", label: "Premium Courses" },
            { value: "100%", label: "Practical Training" },
            { value: "1:1", label: "Trainer Guidance" },
            { value: "30%", label: "Combo Discount" },
          ].map((item) => (
            <div
              key={item.label}
              className="border-b border-r border-slate-100 px-4 py-5 text-center last:border-r-0 sm:border-b-0"
            >
              <p className="text-2xl font-black text-[#061c44] sm:text-3xl">
                {item.value}
              </p>
              <p className="mt-1 text-xs font-bold text-slate-500 sm:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="container mx-auto px-4 py-20 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#e97713]">
            क्यों Prime Skill?
          </p>
          <h2 className="text-3xl font-black tracking-tight text-[#061c44] sm:text-4xl">
            सिर्फ पढ़ाई नहीं,{" "}
            <span className="text-[#e97713]">काम का हुनर</span> सीखिए
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            हमारा लक्ष्य है कि हर student मशीन को खुद समझे, fault ढूंढे और
            confidence के साथ अपना काम शुरू करे।
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, text }, index) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${
                  index % 2 === 0
                    ? "bg-orange-50 text-[#e97713]"
                    : "bg-blue-50 text-[#1554ad]"
                }`}
              >
                <Icon size={24} />
              </div>
              <h3 className="font-extrabold text-slate-950">{title}</h3>
              <p className="mt-2 text-sm text-slate-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COURSES - Premium Categories */}
      <section id="courses" className="bg-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#e97713]">
                हमारे कोर्सेज
              </p>
              <h2 className="text-3xl font-black tracking-tight text-[#061c44] sm:text-4xl">
                अपने लिए सही{" "}
                <span className="text-[#159447]">skill course</span> चुनें
              </h2>
              <p className="mt-4 max-w-xl text-slate-600">
                हर course में theory के साथ real machine पर practice और
                troubleshooting सिखाई जाती है। सभी courses की duration 2 months है।
              </p>
            </div>
            <button
              onClick={() => enquire()}
              className="flex items-center gap-2 self-start rounded-xl border border-[#061c44] px-5 py-3 text-sm font-extrabold text-[#061c44] transition hover:bg-[#061c44] hover:text-white sm:self-auto"
            >
              Course enquiry <ChevronDown size={16} />
            </button>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {courseCategories.map((category) => (
              <CourseCard
                key={category.id}
                category={category}
                onEnquire={enquire}
              />
            ))}

            {/* COMBO COURSE CARD */}
            <div className="relative flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-[#061c44] via-[#0a2a63] to-[#061c44] p-6 text-white shadow-2xl md:col-span-2 xl:col-span-1">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#f28a1a]/20 blur-2xl" />
              <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-emerald-500/20 blur-2xl" />

              <div className="relative z-10 flex flex-1 flex-col">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f28a1a] text-white">
                    <Flame size={28} />
                  </div>
                  <span className="rounded-full bg-amber-400 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-slate-900">
                    Best Deal
                  </span>
                </div>

                <h3 className="text-2xl font-black">Combo Course</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  कोई भी <span className="font-black text-amber-300">दो कोर्स</span>{" "}
                  एक साथ लेने पर पाएं{" "}
                  <span className="font-black text-amber-300">30% OFF</span>
                </p>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-blue-100">
                    <Star size={16} className="text-amber-300" />
                    सभी courses की duration 2 months
                  </div>
                  <div className="flex items-center gap-2 text-sm text-blue-100">
                    <Star size={16} className="text-amber-300" />
                    Real machine पर practical training
                  </div>
                  <div className="flex items-center gap-2 text-sm text-blue-100">
                    <Star size={16} className="text-amber-300" />
                    Job assistance + Certificate
                  </div>
                </div>

                <div className="mt-auto pt-6">
                  <button
                    onClick={() =>
                      enquire("Combo Course (कोई भी दो कोर्स - 30% OFF)")
                    }
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#f28a1a] px-4 py-3.5 text-sm font-extrabold text-white transition hover:bg-orange-500"
                  >
                    <MessageCircle size={17} /> Combo Enquiry करें
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY / LEARNING */}
      <section id="gallery" className="container mx-auto px-4 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="relative">
              <img
                src={ASSETS.training}
                alt="Students learning machine repair"
                className="h-[390px] w-full rounded-[28px] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-3 rounded-2xl bg-[#f28a1a] p-5 text-white shadow-xl sm:-right-6">
                <p className="text-3xl font-black">100%</p>
                <p className="text-xs font-bold uppercase tracking-wider">
                  Practical Focus
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#e97713]">
              सीखने का माहौल
            </p>
            <h2 className="text-3xl font-black tracking-tight text-[#061c44] sm:text-4xl">
              जहाँ tools से दोस्ती और{" "}
              <span className="text-[#e97713]">काम से पहचान</span> बनती है
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Prime Skill में आपको classroom knowledge के साथ live practical
              exposure मिलता है। हमारे students अलग-अलग appliances पर काम करके
              अपने skill और confidence को मजबूत करते हैं।
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="flex gap-3">
                <div className="mt-1 text-[#159447]">
                  <Wrench size={20} />
                </div>
                <div>
                  <p className="font-extrabold">Real Machine Practice</p>
                  <p className="mt-1 text-sm text-slate-500">
                    सिर्फ बोर्ड नहीं, असली मशीन पर सीखें
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 text-[#159447]">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <p className="font-extrabold">Beginner Friendly</p>
                  <p className="mt-1 text-sm text-slate-500">
                    शुरुआत से step-by-step guidance
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => scrollToId("contact")}
              className="mt-8 flex items-center gap-2 rounded-xl bg-[#061c44] px-6 py-4 font-extrabold text-white transition hover:bg-blue-900"
            >
              Admission के लिए बात करें <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#061c44] py-20 text-white">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-amber-300">
              Admission Open
            </p>
            <h2 className="text-3xl font-black sm:text-4xl">
              आज ही अपनी enquiry भेजें
            </h2>
            <p className="mt-5 leading-8 text-blue-100">
              नाम और course बताइए, हमारी team आपको call करके batch, timing और
              admission की पूरी जानकारी देगी।
            </p>
            <div className="mt-8 space-y-5">
              <a href={`tel:${DISPLAY_NUMBER}`} className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-amber-300">
                  <Phone size={20} />
                </span>
                <span>
                  <span className="block text-xs text-blue-200">Call / WhatsApp</span>
                  <span className="font-extrabold">{DISPLAY_NUMBER}</span>
                </span>
              </a>
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-amber-300">
                  <MapPin size={20} />
                </span>
                <span>
                  <span className="block text-xs text-blue-200">हमारा पता</span>
                  <span className="font-extrabold">
                    Danapur Junction, Lakhni Bigha, Khagaul, Patna, Bihar
                  </span>
                </span>
              </div>
            </div>
            <div className="mt-10 flex gap-3 text-blue-200">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20">
                <Instagram size={17} />
              </div>
              <span className="self-center text-sm">
                Prime Skill Technical Institute
              </span>
            </div>
          </div>

          <form
            onSubmit={submitEnquiry}
            className="rounded-3xl bg-white p-5 text-slate-900 shadow-2xl sm:p-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-black text-[#061c44]">
                  Free course enquiry
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  आपको किस skill में interest है?
                </p>
              </div>
              <div className="rounded-full bg-orange-50 p-3 text-[#e97713]">
                <MessageCircle />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-bold text-slate-700">
                आपका नाम
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="पूरा नाम"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[#e97713] focus:ring-2 focus:ring-orange-100"
                />
              </label>
              <label className="text-sm font-bold text-slate-700">
                मोबाइल नंबर
                <input
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="10 digit mobile number"
                  type="tel"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[#e97713] focus:ring-2 focus:ring-orange-100"
                />
              </label>
            </div>

            <label className="mt-4 block text-sm font-bold text-slate-700">
              कोर्स चुनें
              <select
                required
                value={form.course}
                onChange={(e) => setForm({ ...form, course: e.target.value })}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal outline-none transition focus:border-[#e97713] focus:ring-2 focus:ring-orange-100"
              >
                <option value="">कोर्स select करें</option>
                {courseCategories.map((cat) => (
                  <option key={cat.id} value={cat.title}>
                    {cat.title}
                  </option>
                ))}
                <option value="Combo Course (कोई भी दो कोर्स - 30% OFF)">
                  Combo Course (कोई भी दो कोर्स - 30% OFF)
                </option>
              </select>
            </label>

            <label className="mt-4 block text-sm font-bold text-slate-700">
              आपका सवाल
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="कोर्स timing, fees या batch के बारे में पूछें..."
                rows={3}
                className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[#e97713] focus:ring-2 focus:ring-orange-100"
              />
            </label>

            <button
              disabled={submitting}
              type="submit"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#159447] px-5 py-4 font-extrabold text-white transition hover:bg-green-700 disabled:cursor-wait disabled:opacity-60"
            >
              {submitting ? "भेजा जा रहा है..." : "WhatsApp पर enquiry भेजें"}{" "}
              <ArrowRight size={18} />
            </button>

            {status && (
              <p
                className={`mt-4 rounded-lg px-3 py-2 text-center text-sm font-bold ${
                  status.includes("धन्यवाद")
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </section>

      {/* STICKY WHATSAPP FLOAT */}
      <button
        onClick={() => enquire()}
        className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
      </button>
    </main>
  );
}