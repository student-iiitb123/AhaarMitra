import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const vendors = [
  {
    id: 1,
    name: "Shree Tiffin Services",
    description:
      "Authentic home-style comfort crafted for the daily urban table using organic spices.",
    rating: "4.9",
    price: "₹99",
    subs: "1,248",
    lunch: "12:30 PM - 1:45 PM",
    dinner: "07:30 PM - 09:00 PM",
    lunchStatus: "On-Time",
    dinnerStatus: "Schedule",
    badges: [
      { label: "Top Rated", color: "bg-amber-500 text-black" },
      {
        label: "Pure Veg",
        color: "bg-zinc-800 text-white border border-zinc-600",
      },
    ],
    badgeBar: "bg-amber-500",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMBmIchnkIkoQGR77HPKNPe8Mi87AWVXdlxtSOo0_aqUzxSiao8g8wNuB6MLnue5hBiJqoCqYqYf_QwyAx8srHTmiWQLzDoSpBgjo79alSoDbXQZ1BxnJSwyVy8He4b-CbkpWuTgncU4YcUKtpcr-pZOyPo1hbVYNmqrmfArc3zZZuFPXAiqx6A5bpLRmZEtfGqskXEk_ur5KQcptvlknPuRIA86F4SmByElS4qXuo1rcrzcBC2SHCGJ1fTtaHQtFIc92CaW3sgiyX",
  },
  {
    id: 2,
    name: "Urban Nutri-Bowls",
    description:
      "Macro-balanced, calorie-counted meals designed for high-performance lifestyles.",
    rating: "4.8",
    price: "₹149",
    subs: "842",
    lunch: "1:00 PM - 2:30 PM",
    dinner: "08:00 PM - 09:30 PM",
    lunchStatus: "On-Time",
    dinnerStatus: "Schedule",
    badges: [{ label: "Nutritionist Plus", color: "bg-blue-500 text-white" }],
    badgeBar: "bg-blue-500",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK1tSZ-wBDTNCjK3U3eV-EuMtd2Cl4BRrx5feYW8Pfs8Bl576PyFGfiUmELvHa2DcAA0ASCPZH5rm6xkvI4VWEyveQtFW_HU-6WaVJhIecNa3nIEBWvPePZbqil-AqaPw_U4D03iHh6mX8U4qIdX2_-eQM0Yi_dfr2w8Pj6F662kJ14gBX9_W7bX1uqGyfRomUAqsC9fF9xIzr2nCfGeyS7-zawAHEF1FnS_ep-oVvA-kKbIodDQAMjaroBolce2E3nQzZ_aDltzmU",
  },
  {
    id: 3,
    name: "The Fit Kitchen",
    description:
      "Premium non-vegetarian keto and high-protein bowls tailored for muscle gain.",
    rating: "4.7",
    price: "₹179",
    subs: "2,105",
    lunch: "12:00 PM - 1:30 PM",
    dinner: "07:00 PM - 08:30 PM",
    lunchStatus: "On-Time",
    dinnerStatus: "Schedule",
    badges: [{ label: "Fastest Delivery", color: "bg-green-600 text-white" }],
    badgeBar: "bg-green-600",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxDgB08kbHg4r0zUnel6GttGO-S_WADO-w39rZhmkQPeD79HasHrKA8oAcSftvGzC6oWsZv-3hHotK2rfgbjdQNkZqMa5FcXsDbZVFCEQoVtQ9a9zpeEfUxTW7eCHzfCeQaPfJ-PMY2ndmRCjf77328Z85PdHaoAjLcdRd3RFFqiwQAApTNkhBXUhMa453XBrKR-JtM3zUmkov1Nmp9X9J_3nspx3uueROaIDFzZhSepvqDnuU7HJlfrQcZiHVxo0o5fvUwKLJ2v7y",
  },
  {
    id: 1,
    name: "Shree Tiffin Services",
    description:
      "Authentic home-style comfort crafted for the daily urban table using organic spices.",
    rating: "4.9",
    price: "₹99",
    subs: "1,248",
    lunch: "12:30 PM - 1:45 PM",
    dinner: "07:30 PM - 09:00 PM",
    lunchStatus: "On-Time",
    dinnerStatus: "Schedule",
    badges: [
      { label: "Top Rated", color: "bg-amber-500 text-black" },
      {
        label: "Pure Veg",
        color: "bg-zinc-800 text-white border border-zinc-600",
      },
    ],
    badgeBar: "bg-amber-500",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMBmIchnkIkoQGR77HPKNPe8Mi87AWVXdlxtSOo0_aqUzxSiao8g8wNuB6MLnue5hBiJqoCqYqYf_QwyAx8srHTmiWQLzDoSpBgjo79alSoDbXQZ1BxnJSwyVy8He4b-CbkpWuTgncU4YcUKtpcr-pZOyPo1hbVYNmqrmfArc3zZZuFPXAiqx6A5bpLRmZEtfGqskXEk_ur5KQcptvlknPuRIA86F4SmByElS4qXuo1rcrzcBC2SHCGJ1fTtaHQtFIc92CaW3sgiyX",
  },
  {
    id: 2,
    name: "Urban Nutri-Bowls",
    description:
      "Macro-balanced, calorie-counted meals designed for high-performance lifestyles.",
    rating: "4.8",
    price: "₹149",
    subs: "842",
    lunch: "1:00 PM - 2:30 PM",
    dinner: "08:00 PM - 09:30 PM",
    lunchStatus: "On-Time",
    dinnerStatus: "Schedule",
    badges: [{ label: "Nutritionist Plus", color: "bg-blue-500 text-white" }],
    badgeBar: "bg-blue-500",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK1tSZ-wBDTNCjK3U3eV-EuMtd2Cl4BRrx5feYW8Pfs8Bl576PyFGfiUmELvHa2DcAA0ASCPZH5rm6xkvI4VWEyveQtFW_HU-6WaVJhIecNa3nIEBWvPePZbqil-AqaPw_U4D03iHh6mX8U4qIdX2_-eQM0Yi_dfr2w8Pj6F662kJ14gBX9_W7bX1uqGyfRomUAqsC9fF9xIzr2nCfGeyS7-zawAHEF1FnS_ep-oVvA-kKbIodDQAMjaroBolce2E3nQzZ_aDltzmU",
  },
  {
    id: 3,
    name: "The Fit Kitchen",
    description:
      "Premium non-vegetarian keto and high-protein bowls tailored for muscle gain.",
    rating: "4.7",
    price: "₹179",
    subs: "2,105",
    lunch: "12:00 PM - 1:30 PM",
    dinner: "07:00 PM - 08:30 PM",
    lunchStatus: "On-Time",
    dinnerStatus: "Schedule",
    badges: [{ label: "Fastest Delivery", color: "bg-green-600 text-white" }],
    badgeBar: "bg-green-600",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxDgB08kbHg4r0zUnel6GttGO-S_WADO-w39rZhmkQPeD79HasHrKA8oAcSftvGzC6oWsZv-3hHotK2rfgbjdQNkZqMa5FcXsDbZVFCEQoVtQ9a9zpeEfUxTW7eCHzfCeQaPfJ-PMY2ndmRCjf77328Z85PdHaoAjLcdRd3RFFqiwQAApTNkhBXUhMa453XBrKR-JtM3zUmkov1Nmp9X9J_3nspx3uueROaIDFzZhSepvqDnuU7HJlfrQcZiHVxo0o5fvUwKLJ2v7y",
  },
];

const standards = [
  {
    icon: "schedule",
    title: "Instant Flex",
    desc: "Cancel or pause your meal up to 60 minutes before the window starts.",
  },
  {
    icon: "restaurant",
    title: "Hygiene Verified",
    desc: "Every kitchen undergoes a weekly 45-point health and safety inspection.",
  },
  {
    icon: "eco",
    title: "Zero Waste",
    desc: "Compostable packaging and optimized portions to eliminate food waste.",
  },
];

function VendorCard({ vendor }) {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group w-105">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={vendor.img}
          alt={vendor.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
          {vendor.badges.map((b) => (
            <span
              key={b.label}
              className={`${b.color} px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider`}
            >
              {b.label}
            </span>
          ))}
        </div>

        {/* Favourite */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-stone-200 flex items-center justify-center hover:bg-white transition-all shadow-sm"
        >
          <span
            className={`material-symbols-outlined text-xl ${liked ? "text-red-500" : "text-stone-400"}`}
            style={liked ? { fontVariationSettings: "'FILL' 1" } : {}}
          >
            favorite
          </span>
        </button>
      </div>

      {/* Content */}
      <div className="p-6 pt-4 flex flex-col flex-1">
        {/* Name + Rating */}
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-black text-stone-900 leading-tight mb-1">
            {vendor.name}
          </h3>
          <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200">
            <span
              className="material-symbols-outlined text-amber-500 text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span className="text-xs font-black text-amber-600">
              {vendor.rating}
            </span>
          </div>
        </div>

        <p className="text-stone-500 text-sm mb-2 line-clamp-2 leading-relaxed">
          {vendor.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-2 border-y border-stone-100 py-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">
              Price / Meal
            </p>
            <p className="text-xl font-black text-stone-900">
              {vendor.price}{" "}
              <span className="text-[10px] text-stone-400 uppercase font-bold">
                Starting
              </span>
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">
              Active Now
            </p>
            <p className="text-xl font-black text-amber-500">
              {vendor.subs}{" "}
              <span className="text-[10px] text-stone-400 uppercase font-bold">
                Subs
              </span>
            </p>
          </div>
        </div>

        <Link to={"/1"}>
          <button className="mt-auto w-full bg-stone-900 text-white font-black py-4 rounded-2xl hover:bg-amber-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 uppercase tracking-widest text-xs">
            View Meal Plans
          </button>
        </Link>
      </div>
    </div>
  );
}

const TiffinSeeker9 = () => {
  const navigate = useNavigate();

  return (
    <>

      <div
        className="min-h-screen bg-stone-50 text-stone-900 antialiased overflow-x-hidden"
       
      >

        {/* MAIN */}
        <main className="pt-24 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto">
          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
              <div>
                <span className="text-amber-500 font-black tracking-[0.2em] text-xs uppercase mb-3 block">
                  Top Local Kitchens
                </span>
                <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-stone-900">
                  Daily Meal Plans
                </h1>
              </div>

              {/* Sort / Filter bar */}
              <div className="flex flex-wrap items-center gap-4 bg-white p-2 rounded-2xl border border-stone-200 shadow-sm">
                <div className="flex items-center gap-2 px-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                    Location:
                  </span>

                  <select
                    onChange={(e) => {
                      if (e.target.value === "both") navigate("/10");
                      if (e.target.value === "home");
                      if (e.target.value === "uni");
                    }}
                    className="bg-transparent border-none text-xs font-bold py-1 outline-none cursor-pointer text-stone-800"
                  >
                    <option value="both">Both Address</option>
                    <option value="home">Only Home</option>
                    <option value="uni">Only Universities</option>
                  </select>
                </div>
                <div className="flex items-center gap-2 px-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                    Time:
                  </span>

                  <select className="bg-transparent border-none text-xs font-bold py-1 outline-none cursor-pointer text-stone-800">
                    <option value="anytime">Anytime (12 PM – 9 PM)</option>
                    <option value="morning">Morning (12 PM – 3 PM)</option>
                    <option value="night">Night (8 PM – 9 PM)</option>
                  </select>
                </div>
                <div className="h-6 w-px bg-stone-200" />
                <div className="flex items-center gap-2 px-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                    Sort:
                  </span>
                  <select className="bg-transparent border-none text-xs font-bold py-1 outline-none cursor-pointer text-stone-800">
                    <option value="highest-rated">Highest Rated</option>
                    <option value="popular">Most Subscribers</option>
                    <option value="price-low">Price: Low to High</option>
                  </select>
                </div>
                <div className="h-6 w-px bg-stone-200" />
                <div className="flex items-center gap-2 px-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                    Type:
                  </span>
                  <select className="bg-transparent border-none text-xs font-bold py-1 outline-none cursor-pointer text-stone-800">
                    <option value="all">All Dietary</option>
                    <option value="veg">Pure Veg</option>
                    <option value="non-veg">Non-Veg</option>
                  </select>
                </div>
              </div>
            </div>
          </header>

          {/* Vendor Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-4 justify-items-center">
            {vendors.map((v) => (
              <VendorCard key={v.id} vendor={v} />
            ))}
          </div>

          {/* AhaarMitra Standard */}
          <div className="mt-32 grid grid-cols-12 gap-12 pt-24 border-t border-stone-200">
            {/* Standards */}
            <div className="col-span-12 lg:col-span-8">
              <h2 className="text-3xl font-black tracking-tighter mb-12 text-stone-900">
                The AhaarMitra Standard
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {standards.map((s) => (
                  <div
                    key={s.title}
                    className="bg-white p-8 rounded-3xl border border-stone-200 group hover:border-amber-400 hover:shadow-md transition-all"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center mb-6 text-amber-500 group-hover:scale-110 transition-transform border border-amber-100">
                      <span className="material-symbols-outlined text-3xl">
                        {s.icon}
                      </span>
                    </div>
                    <h4 className="font-black text-lg mb-3 text-stone-900">
                      {s.title}
                    </h4>
                    <p className="text-sm text-stone-500 font-medium leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Aside */}
            <aside className="col-span-12 lg:col-span-4 space-y-6">
              {/* AI Matchmaker */}
              <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
                <h3 className="text-xl font-black mb-3 text-stone-900 relative">
                  Personalized Discovery
                </h3>
                <p className="text-sm text-stone-500 mb-8 font-medium relative leading-relaxed">
                  Not sure which kitchen aligns with your palate? Our AI finds
                  your perfect match.
                </p>
                <button className="w-full bg-stone-900 text-white font-black py-4 rounded-2xl text-xs hover:bg-amber-500 transition-all flex items-center justify-center gap-2 uppercase tracking-widest">
                  <span className="material-symbols-outlined text-lg">
                    auto_awesome
                  </span>
                  Start AI Matchmaker
                </button>
              </div>

              {/* Service Hub */}
              <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
                  Your Service Hub
                </h3>
                <div className="space-y-5">
                  <div className="flex gap-4 p-4 bg-stone-50 rounded-2xl border border-stone-100">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 shrink-0">
                      <span className="material-symbols-outlined">
                        location_on
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-stone-900">
                        Indiranagar Sector 2
                      </h4>
                      <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mt-1">
                        12 Vendors Live Now
                      </p>
                    </div>
                  </div>
                  <button className="w-full py-4 border border-stone-200 rounded-2xl text-[10px] font-black uppercase tracking-widest text-stone-400 hover:bg-stone-50 hover:border-stone-300 transition-colors">
                    Change Delivery Hub
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
};

export default TiffinSeeker9;
