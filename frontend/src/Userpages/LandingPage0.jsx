import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

import LandingImage from "../assets/LandingImage.png";
import ahaarmitraLogo from "../../assets/AhaarMitraLogo.png";

import LandingNav from "../components/LandingNav";
import Footer from "../components/Footer";

/* ================= FIXED VENDORS ================= */

const vendors = [
  {
    id: "69d0dc68871831a749f47b21",
    name: "Maa Ke Haath Ka Khana",
    rating: "4.9",
    price: "₹99",
    subs: "1,248",
    badges: [
      { label: "Top Rated", color: "bg-amber-500 text-black" },
      { label: "Pure Veg", color: "bg-black text-white" },
    ],
    img: "https://res.cloudinary.com/drnie4sny/image/upload/v1775295716/aaharmitra/business/zbtkysnt2wdbvjhiel2y.jpg",
  },
  {
    id: "69d0d38e871831a749f47aff",
    name: "Swad Ghar Ka",
    rating: "4.8",
    price: "₹149",
    subs: "842",
    badges: [{ label: "Nutritionist Plus", color: "bg-blue-500 text-white" }],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ3JZIL2VyoUmdoQ-pqft4aLQl0MjVCq8jVA&s",
  },
  {
    id: "3",
    name: "Gharam Rasoi",
    rating: "4.7",
    price: "₹179",
    subs: "2,105",
    badges: [{ label: "Fastest Delivery", color: "bg-green-500 text-white" }],
    img: LandingImage,
  },
  {
    id: "4",
    name: "Swaad Ghar Tiffins",
    rating: "4.7",
    price: "₹179",
    subs: "1,105",
    badges: [{ label: "Fastest Delivery", color: "bg-green-500 text-white" }],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvBP2wpne32lKxUkchKIe3u_9DhtQ5iGchfA&s",
  },
];

/* ================= MAIN ================= */

export default function HomePage() {
  return (
    <>
      <LandingNav />
      <ScrollZoomHero />
      <WhyChoose />

      {/* Header */}
      {/* Header */}
      <section className="bg-white px-8 pt-20 pb-8">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900">
            Popular Kitchens
          </h2>

          <Link to="/explore">
            <button className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-amber-500 transition">
              Explore More
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </button>
          </Link>
        </div>
      </section>

      {/* Vendor Cards */}
      <section className="bg-white py-10 px-8">
        <div
          className="max-w-[1400px] mx-auto grid 
    grid-cols-1 
    sm:grid-cols-2 
    md:grid-cols-3 
    lg:grid-cols-4 
    gap-8 
    justify-items-center"
        >
          {vendors.map((v) => (
            <VendorCard key={v.id} vendor={v} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

/* ================= HERO ================= */

function ScrollZoomHero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1.6]);
  const blur = useTransform(scrollYProgress, [0, 1], ["0px", "8px"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.7]);

  // ✅ FIX
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={ref} className="h-[200vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background */}
        <motion.img
          src={LandingImage}
          alt="tiffin"
          className="absolute w-full h-full object-cover"
          style={{ scale, filter: blur }}
        />

        {/* Overlay */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"
        />

        {/* Content */}
        <motion.div
          style={{
            opacity: textOpacity,
            y: textY,
          }}
          className="absolute inset-0 flex flex-col items-center justify-center -translate-y-16 md:-translate-y-24 text-center px-4 top-32"
        >
          <img
            src={ahaarmitraLogo}
            alt="Ahaar Mitra"
            className="w-[610px] md:w-[810px] lg:w-[930px] object-contain"
          />

          <div className="h-40"></div>

          <div className="mt-4 px-6 py-4 rounded-xl bg-[#FFE0B2]/60 backdrop-blur-md text-center">
            <p className="text-white text-sm md:text-base max-w-xl mx-auto leading-tight font-semibold">
              Har din ghar jaisa swaad — connecting home chefs with people who
              crave authentic meals.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mt-4 justify-center items-center">
              <Link to="/LoginSelection" className="w-full sm:w-auto">
                <button className="px-6 py-3 bg-white text-black font-bold rounded-xl text-sm uppercase tracking-widest hover:bg-amber-500 transition-all">
                  Login
                </button>
              </Link>

              <Link to="/11">
                <button className="px-6 py-3 bg-white text-black font-bold rounded-xl text-sm uppercase tracking-widest hover:bg-amber-500 transition-all">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================= WHY ================= */

function WhyChoose() {
  const points = [
    { title: "Flexibility", desc: "Choice of plans" },
    { title: "Trust", desc: "Verified vendors" },
    { title: "Scalability", desc: "Supports growth" },
  ];

  return (
    <section className="bg-white py-16 text-center">
      <h2 className="text-3xl font-black">Why Choose Ahaar Mitra?</h2>

      <div className="flex justify-center gap-6 mt-8">
        {points.map((p, i) => (
          <div key={i} className="p-6 border rounded-xl">
            <h3 className="font-bold">{p.title}</h3>
            <p className="text-sm text-gray-500">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= CARD ================= */

function VendorCard({ vendor }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group w-full max-w-md">
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
