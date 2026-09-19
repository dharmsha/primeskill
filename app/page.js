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
} from "lucide-react";

// ---------- ASSETS ----------
const ASSETS = {
  hero: "/images/logopr.jpg",
  courses: "/images/courses.jpg",
  training: "/images/gallery1.jpg",
};

// ---------- CONSTANTS ----------
const DISPLAY_NUMBER = "+91 85273785130"; // 👈 apna number daalo
const WHATSAPP_NUMBER = "85273785130";   // 👈 apna number daalo (bina +)

// ---------- DATA ----------
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

const courses = [
  { title: "AC Repairing", duration: "3 Months", fees: "₹12,000" },
  { title: "Fridge Repairing", duration: "2 Months", fees: "₹9,000" },
  { title: "Washing Machine Repairing", duration: "2 Months", fees: "₹9,000" },
  { title: "RO Repairing", duration: "1 Month", fees: "₹5,000" },
  { title: "Geyser Repairing", duration: "1 Month", fees: "₹5,000" },
  { title: "PCB Repairing", duration: "3 Months", fees: "₹15,000" },
  { title: "Motor Winding", duration: "2 Months", fees: "₹10,000" },
  { title: "House Wiring", duration: "2 Months", fees: "₹8,000" },
  { title: "Inverter & Battery", duration: "1 Month", fees: "₹6,000" },
  { title: "Cooler Repairing", duration: "1 Month", fees: "₹4,000" },
];

// ---------- COMPONENT: CourseCard ----------
function CourseCard({ course, onEnquire }) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-lg">
      <div>
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-[#e97713]">
          <Wrench size={22} />
        </div>
        <h3 className="text-lg font-extrabold text-slate-900">{course.title}</h3>
        <div className="mt-3 space-y-1 text-sm text-slate-500">
          <p className="flex items-center gap-2">
            <Clock size={15} /> {course.duration}
          </p>
          <p className="font-bold text-[#159447]">{course.fees}</p>
        </div>
      </div>
      <button
        onClick={() => onEnquire(course.title)}
        className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#061c44] px-4 py-3 text-sm font-extrabold text-white transition hover:bg-blue-900"
      >
        Enquire <ArrowRight size={16} />
      </button>
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
            { value: "10+", label: "Technical Courses" },
            { value: "100%", label: "Practical Training" },
            { value: "1:1", label: "Trainer Guidance" },
            { value: "∞", label: "Skill Opportunities" },
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

      {/* COURSES */}
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
                troubleshooting सिखाई जाती है।
              </p>
            </div>
            <button
              onClick={() => enquire()}
              className="flex items-center gap-2 self-start rounded-xl border border-[#061c44] px-5 py-3 text-sm font-extrabold text-[#061c44] transition hover:bg-[#061c44] hover:text-white sm:self-auto"
            >
              Course enquiry <ChevronDown size={16} />
            </button>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {courses.map((course) => (
              <CourseCard
                key={course.title}
                course={course}
                onEnquire={enquire}
              />
            ))}
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
                {courses.map((course) => (
                  <option key={course.title} value={course.title}>
                    {course.title}
                  </option>
                ))}
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
    </main>
  );
}