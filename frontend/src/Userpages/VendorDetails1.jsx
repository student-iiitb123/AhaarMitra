import { useState } from "react";
import { Link } from "react-router-dom";

const ratings = [
  { label: "5 Stars", pct: "85%", w: "w-[85%]", opacity: "bg-amber-500" },
  { label: "4 Stars", pct: "10%", w: "w-[10%]", opacity: "bg-amber-400" },
  { label: "3 Stars", pct: "3%", w: "w-[3%]", opacity: "bg-amber-300" },
  { label: "2 Stars", pct: "1.5%", w: "w-[1%]", opacity: "bg-amber-200" },
  { label: "1 Star", pct: "0.5%", w: "w-[0.5%]", opacity: "bg-amber-100" },
];

const perks = [
  "2 Meals per Day",
  "Stainless Steel Tiffins",
  "Pause Anytime",
  "Weekly Menu Flip",
];

export default function ShreeTiffinDetail() {
  const [selectedVariant, setSelectedVariant] = useState(null);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans antialiased overflow-x-hidden">
      <style>{`
        // @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap');
        // @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
        
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .fill-icon { font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
      `}</style>

      <main className="pt-20">
        {/* ── HERO ── */}
        <section className="relative h-[550px] w-full overflow-hidden">
          <img
            alt="Gourmet Tiffin"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMBmIchnkIkoQGR77HPKNPe8Mi87AWVXdlxtSOo0_aqUzxSiao8g8wNuB6MLnue5hBiJqoCqYqYf_QwyAx8srHTmiWQLzDoSpBgjo79alSoDbXQZ1BxnJSwyVy8He4b-CbkpWuTgncU4YcUKtpcr-pZOyPo1hbVYNmqrmfArc3zZZuFPXAiqx6A5bpLRmZEtfGqskXEk_ur5KQcptvlknPuRIA86F4SmByElS4qXuo1rcrzcBC2SHCGJ1fTtaHQtFIc92CaW3sgiyX"
          />
          {/* gradient: lighter at top, stronger at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

          {/* bottom overlay content */}
          <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 flex justify-between items-end gap-6">
            <div className="max-w-3xl">
              {/* Badges */}
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase border border-amber-500/30 backdrop-blur-sm">
                  Verified Vendor
                </span>
                <span className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase backdrop-blur-sm border border-white/20">
                  Premium Partner
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-3 drop-shadow-lg">
                Shree Tiffin Services
              </h1>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-white/80 mb-4">
                <span className="flex items-center gap-1.5 text-sm font-medium">
                  <span className="material-symbols-outlined text-amber-400 text-sm">
                    location_on
                  </span>
                  B-42, Sector 62, Noida, UP 201301
                </span>
                <span className="text-white/30">•</span>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-1.5 text-sm font-medium hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-amber-400 text-sm">
                    call
                  </span>
                  +91 98765 43210
                </a>
                <span className="text-white/30">•</span>
                <a
                  href="mailto:shreetiffin@ahaarmitra.com"
                  className="flex items-center gap-1.5 text-sm font-medium hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-amber-400 text-sm">
                    mail
                  </span>
                  shreetiffin@ahaarmitra.com
                </a>
                <span className="text-white/30">•</span>
                <span className="flex items-center gap-1.5 text-sm font-bold text-white">
                  <span className="material-symbols-outlined text-amber-400 text-sm">
                    group
                  </span>
                  2,450+ Active Subscribers
                </span>
              </div>

              <p className="text-base text-white/60 font-medium italic">
                "Authentic Home-Style Comfort, Elevated for Your Daily Table."
              </p>
            </div>

            {/* Rating block */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="text-right">
                <div className="text-4xl font-black text-white leading-none">
                  4.8
                </div>
                <div className="flex text-amber-400 mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined fill-icon text-sm"
                    >
                      star
                    </span>
                  ))}
                </div>
              </div>
              <div className="h-12 w-px bg-white/25" />
              <div className="text-right">
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                  Overall
                </div>
                <div className="text-xs font-bold text-white/80">
                  Subscriber Rating
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          {/* ── THALI VARIANTS ── */}
          <section className="mb-20">
            <div className="mb-10">
              <h2 className="text-3xl font-black tracking-tight text-zinc-900 mb-2">
                Thali &amp; Meal Variants
              </h2>
              <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest">
                Compare and select your daily dining experience
              </p>
            </div>

            <div className="space-y-3">
              {/* Table header */}
              <div className="hidden md:grid grid-cols-12 gap-4 px-8 py-4 bg-zinc-100 rounded-2xl border border-zinc-200 items-center">
                <div className="col-span-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                  Variant &amp; Menu
                </div>
                <div className="col-span-2 text-center text-[10px] font-black uppercase tracking-widest text-zinc-400">
                  Daily
                </div>
                <div className="col-span-2 text-center text-[10px] font-black uppercase tracking-widest text-zinc-400">
                  Weekly
                </div>
                <div className="col-span-3 text-center text-[10px] font-black uppercase tracking-widest text-zinc-400">
                  Monthly
                </div>
              </div>

              {/* Mini Thali */}
              <div
                onClick={() =>
                  setSelectedVariant(selectedVariant === "mini" ? null : "mini")
                }
                className={`grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-8 py-8 bg-white rounded-2xl border-2 transition-all cursor-pointer shadow-sm hover:shadow-md ${
                  selectedVariant === "mini"
                    ? "border-amber-400 shadow-amber-100"
                    : "border-zinc-100 hover:border-amber-300"
                }`}
              >
                <div className="col-span-1 md:col-span-5 flex items-center gap-6">
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-zinc-100 bg-zinc-100">
                    <img
                      alt="Mini Thali"
                      className="w-full h-full object-cover"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNmoYBxtWNuWxpDbNv7jeY91LPWwDTO9Nw3A&s"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-black text-zinc-900">
                        Mini Thali
                      </h3>
                      <span className="bg-zinc-100 text-[9px] px-2 py-0.5 rounded text-zinc-500 font-black uppercase tracking-widest border border-zinc-200">
                        Light
                      </span>
                    </div>
                    <p className="text-sm text-zinc-400 font-medium">
                      2 Hand-rolled Roti, Jeera Rice, Dal Tadka, Seasonal Sabzi.
                    </p>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-2 text-center">
                  <span className="text-xs md:hidden text-zinc-400 block mb-1 uppercase font-bold">
                    Daily
                  </span>
                  <span className="text-lg font-black text-zinc-700">₹85</span>
                </div>
                <div className="col-span-1 md:col-span-2 text-center">
                  <span className="text-xs md:hidden text-zinc-400 block mb-1 uppercase font-bold">
                    Weekly
                  </span>
                  <span className="text-lg font-black text-zinc-700">₹550</span>
                </div>
                <div className="col-span-1 md:col-span-3 text-center bg-amber-50 py-4 rounded-xl border border-amber-100">
                  <span className="text-xs md:hidden text-zinc-400 block mb-1 uppercase font-bold">
                    Monthly
                  </span>
                  <span className="text-3xl font-black text-amber-500">
                    ₹2100
                  </span>
                  <div className="text-[10px] font-black text-amber-400 uppercase tracking-widest mt-1">
                    Recommended Plan
                  </div>
                </div>
              </div>

              {/* Executive Thali */}
              <div
                onClick={() =>
                  setSelectedVariant(selectedVariant === "exec" ? null : "exec")
                }
                className={`grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-8 py-8 bg-white rounded-2xl border-2 border-l-4 transition-all cursor-pointer shadow-sm hover:shadow-md ${
                  selectedVariant === "exec"
                    ? "border-amber-400 border-l-amber-500 shadow-amber-100"
                    : "border-zinc-100 border-l-amber-400 hover:border-amber-300"
                }`}
              >
                <div className="col-span-1 md:col-span-5 flex items-center gap-6">
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-zinc-100 bg-zinc-100 relative">
                    <img
                      alt="Executive Thali"
                      className="w-full h-full object-cover"
                      src="https://images.jdmagicbox.com/justdial/icons/website/dishes/executive_thali.jpg"
                    />
                    <div className="absolute top-0 right-0 bg-amber-500 text-white text-[8px] font-black px-1.5 py-0.5 uppercase rounded-bl">
                      Best
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-black text-zinc-900">
                        Executive Thali
                      </h3>
                      <span className="bg-amber-500 text-white text-[9px] px-2 py-0.5 rounded font-black uppercase tracking-widest">
                        Full Meal
                      </span>
                    </div>
                    <p className="text-sm text-zinc-400 font-medium">
                      4 Rotis, Pulao, Dal Fry, Special Sabzi, Paneer Dish, Curd,
                      Salad.
                    </p>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-2 text-center">
                  <span className="text-xs md:hidden text-zinc-400 block mb-1 uppercase font-bold">
                    Daily
                  </span>
                  <span className="text-lg font-black text-zinc-700">₹140</span>
                </div>
                <div className="col-span-1 md:col-span-2 text-center">
                  <span className="text-xs md:hidden text-zinc-400 block mb-1 uppercase font-bold">
                    Weekly
                  </span>
                  <span className="text-lg font-black text-zinc-700">₹900</span>
                </div>
                <div className="col-span-1 md:col-span-3 text-center bg-amber-50 py-4 rounded-xl border border-amber-200">
                  <span className="text-xs md:hidden text-zinc-400 block mb-1 uppercase font-bold">
                    Monthly
                  </span>
                  <span className="text-3xl font-black text-amber-500">
                    ₹3500
                  </span>
                  <div className="text-[10px] font-black text-amber-400 uppercase tracking-widest mt-1">
                    Value Plus Offer
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── DELIVERY SCHEDULE ── */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-black tracking-tight text-zinc-900 whitespace-nowrap">
                Delivery Schedule
              </h2>
              <span className="h-px flex-1 bg-zinc-200" />
            </div>

            {/* Cancellation policy */}
            <div className="mb-8 w-full p-5 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-4">
              <div className="bg-red-500 p-2.5 rounded-xl shrink-0">
                <span className="material-symbols-outlined fill-icon text-white text-2xl">
                  warning
                </span>
              </div>
              <div>
                <h4 className="text-red-500 text-[10px] font-black uppercase tracking-widest mb-1">
                  Single Cancellation Policy
                </h4>
                <p className="text-base font-bold text-zinc-800 tracking-tight">
                  Cancellation Deadline: 3 hours prior to any service start
                  time.
                </p>
              </div>
            </div>

            {/* Lunch + Dinner */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:border-amber-200 hover:shadow-md transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <span className="material-symbols-outlined text-amber-400 text-4xl">
                    light_mode
                  </span>
                  <div className="text-right">
                    <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">
                      Lunch Service
                    </span>
                    <div className="text-2xl font-black text-zinc-900">
                      12:00 PM – 03:00 PM
                    </div>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm font-medium">
                  Daily fresh hot meals delivered to your doorstep.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:border-indigo-200 hover:shadow-md transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <span className="material-symbols-outlined text-indigo-400 text-4xl">
                    dark_mode
                  </span>
                  <div className="text-right">
                    <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">
                      Dinner Service
                    </span>
                    <div className="text-2xl font-black text-zinc-900">
                      08:00 PM – 10:00 PM
                    </div>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm font-medium">
                  Relax with a wholesome home-cooked dinner experience.
                </p>
              </div>
            </div>
          </section>

          {/* ── KEY FEEDBACK ── */}
          <section className="mb-20">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8">
              <h2 className="text-2xl font-black tracking-tight text-zinc-900">
                Key Feedback Summary
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-xs font-black border border-green-200">
                  Always Punctual
                </span>
                <span className="bg-purple-50 text-purple-600 px-4 py-1.5 rounded-full text-xs font-black border border-purple-200">
                  Delicious Curries
                </span>
                <span className="bg-amber-50 text-amber-600 px-4 py-1.5 rounded-full text-xs font-black border border-amber-200">
                  Hygienic
                </span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm space-y-4 mb-8">
              {ratings.map((r) => (
                <div key={r.label} className="flex items-center gap-4">
                  <span className="text-xs font-bold w-12 text-zinc-400">
                    {r.label}
                  </span>
                  <div className="flex-1 h-2 bg-zinc-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${r.opacity} ${r.w} rounded-full transition-all`}
                    />
                  </div>
                  <span className="text-xs font-black w-10 text-right text-zinc-700">
                    {r.pct}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/4" className="flex-1">
                <button className="w-full bg-zinc-900 text-white font-black py-5 rounded-2xl text-sm uppercase tracking-widest hover:bg-zinc-700 transition-all flex items-center justify-center gap-3 shadow-sm">
                  <span className="material-symbols-outlined">restaurant</span>
                  Order a Trial
                </button>
              </Link>

              <Link to="/4" className="flex-1">
                <button className="w-full bg-amber-500 text-white font-black py-5 rounded-2xl text-sm uppercase tracking-widest hover:bg-amber-400 transition-all flex items-center justify-center gap-3 shadow-md shadow-amber-200">
                  <span className="material-symbols-outlined">
                    rocket_launch
                  </span>
                  Build My Plan
                </button>
              </Link>
            </div>
          </section>

          {/* ── SUBSCRIBE CTA ── */}
          {/*  */}
        </div>
      </main>

      {/* ── FOOTER ── */}
      {/* <footer className="w-full py-12 px-6 md:px-12 border-t border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 items-start gap-8">
          <div className="flex flex-col gap-4">
            <div className="text-lg font-black text-zinc-900 tracking-tighter uppercase">AhaarMitra</div>
            <p className="text-xs text-zinc-400 uppercase tracking-widest leading-relaxed">
              The Premium Digital Hearth for Modern Nutrition.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-zinc-900 text-xs font-bold uppercase tracking-widest mb-2">Legal</h4>
            <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors text-xs font-medium uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors text-xs font-medium uppercase tracking-widest">Terms of Service</a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-zinc-900 text-xs font-bold uppercase tracking-widest mb-2">Support</h4>
            <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors text-xs font-medium uppercase tracking-widest">Contact Support</a>
            <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors text-xs font-medium uppercase tracking-widest">Partner with Us</a>
          </div>
          <div className="flex flex-col gap-4 items-end">
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-zinc-400 hover:text-zinc-900 cursor-pointer transition-colors">brand_awareness</span>
              <span className="material-symbols-outlined text-zinc-400 hover:text-zinc-900 cursor-pointer transition-colors">share</span>
              <span className="material-symbols-outlined text-zinc-400 hover:text-zinc-900 cursor-pointer transition-colors">public</span>
            </div>
            <div className="text-zinc-400 text-[10px] font-medium uppercase tracking-widest text-right">
              © 2024 AhaarMitra Editorial. All rights reserved.
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
