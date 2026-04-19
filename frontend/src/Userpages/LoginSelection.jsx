import { Link } from "react-router-dom";

export default function LoginSelection() {
  return (
    <div
      className="min-h-screen flex flex-col antialiased overflow-x-hidden"
      style={{
        fontFamily: "'Manrope', sans-serif",
        background: "#FAFAFA",
        backgroundImage:
          "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.04) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }}
    >
      {/* Header */}
      <header className="w-full pt-10 pb-4 px-6 text-center relative">
        
        {/* BACK BUTTON */}
        <Link
          to="/explore"
          className="absolute left-6 top-8 flex items-center gap-2 text-sm font-bold text-stone-500 hover:text-black transition-all"
        >
          <span className="material-symbols-outlined text-lg">
            arrow_back
          </span>
          Back
        </Link>

        <div className="inline-block mb-1">
          <div
            className="text-2xl font-black uppercase"
            style={{ color: "#0F172A", letterSpacing: "-0.02em" }}
          >
            AhaarMitra
          </div>
          <div
            className="w-full mt-1"
            style={{
              height: "3px",
              borderRadius: "9999px",
              background:
                "linear-gradient(to right, transparent, #F59E0B, transparent)",
            }}
          />
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-8">
        <div className="max-w-4xl w-full">

          {/* Outer card */}
          <div className="bg-white border border-stone-200 rounded-[3rem] p-8 md:p-16 shadow-sm">

            {/* Heading */}
            <div className="text-center mb-12">
              <h1
                className="font-black tracking-tight mb-3"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  color: "#0F172A",
                }}
              >
                Choose your{" "}
                <span style={{ color: "#F59E0B" }}>login role</span>
              </h1>
              <p
                className="font-bold uppercase"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.3em",
                  color: "#94A3B8",
                }}
              >
                Access your personalized dashboard
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Seeker */}
              <Link
                to="/UserLogin"
                className="group p-10 rounded-3xl border border-stone-200 bg-white text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-amber-400"
              >
                <span className="material-symbols-outlined text-4xl text-stone-500 mb-4 group-hover:text-amber-500 transition-colors">
                  person
                </span>
                <h3 className="text-xl font-black text-stone-900 mb-2">
                  Login as Seeker
                </h3>
                <p className="text-sm text-stone-500 font-medium">
                  Order meals & manage subscriptions
                </p>
              </Link>

              {/* Vendor */}
              <Link
                to="/v10"
                className="group p-10 rounded-3xl border border-stone-200 bg-white text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-400"
              >
                <span className="material-symbols-outlined text-4xl text-stone-500 mb-4 group-hover:text-blue-500 transition-colors">
                  storefront
                </span>
                <h3 className="text-xl font-black text-stone-900 mb-2">
                  Login as Vendor
                </h3>
                <p className="text-sm text-stone-500 font-medium">
                  Manage kitchen & orders
                </p>
              </Link>

            </div>
          </div>

          {/* Create account */}
          <div className="text-center mt-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
              Don't have an account?
            </p>
            <Link
              to="/11"
              className="text-lg font-black text-stone-900 hover:text-amber-500 border-b-2 border-stone-200 hover:border-amber-500 transition-all"
            >
              Create a new Account
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}