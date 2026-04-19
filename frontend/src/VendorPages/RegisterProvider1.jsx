import React from "react";
import useVendorStore from "../stores/vendor.store";
import { Link, useNavigate } from "react-router-dom";


const RegisterProvider1 = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const fullName = `${formData.firstName} ${formData.lastName}`.trim();

  const { registerVendor } = useVendorStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", fullName);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("password", formData.password);

    try {
      const res = await registerVendor(data);
      if (res?.success) {
        alert("✅ Step 1 completed successfully!");
        navigate("/v2");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <style>{`
        .input-field {
          background-color: #F8FAFF;
          border: 1.5px solid #E8EDF5;
          transition: all 0.25s ease;
        }
        .input-field:focus {
          border-color: #3B82F6;
          background-color: #EFF6FF;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
        }
        .btn-next {
          background: linear-gradient(135deg, #2563EB, #3B82F6);
        }
      `}</style>

      <main className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* LEFT */}
        <section className="p-8 lg:p-20 flex flex-col justify-center bg-gradient-to-br from-blue-100 to-white border-r border-black/5">
          <div className="max-w-xl">
            <span className="inline-block px-4 py-1.5 rounded-full text-blue-600 font-black text-[10px] tracking-[0.2em] uppercase bg-blue-500/10 border border-blue-500/20">
              Partner Program
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 pt-8">
              Empower Your Kitchen,
              <span className="text-blue-600"> Feed the Future.</span>
            </h1>
            <p className="text-black/60 text-lg">
              Join a community of local chefs and kitchens transforming the way
              students and professionals eat. We provide the tools; you provide
              the taste.
            </p>
          </div>
        </section>

        {/* RIGHT */}
        <section className="p-8 lg:p-20 flex items-center justify-center">
          <div className="max-w-md w-full">
            <div className="mb-10">
              <h2 className="text-3xl font-black">Personal Details</h2>
              <p className="text-black/40 text-sm">
                Step 1 of 3: Owner Identification
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  className="input-field px-5 py-4 rounded-2xl text-sm"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                />
                <input
                  className="input-field px-5 py-4 rounded-2xl text-sm"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                />
              </div>

              {/* Email */}
              <input
                className="input-field w-full px-5 py-4 rounded-2xl text-sm"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
              />

              {/* Phone */}
              <input
                className="input-field w-full px-5 py-4 rounded-2xl text-sm"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9876543210"
                required
              />

              {/* Password */}
              <div className="relative">
                <input
                  className="input-field w-full px-5 py-4 rounded-2xl text-sm pr-12"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  👁
                </button>
              </div>

              {/* Submit */}
              <Link to="/v2" className="w-full">
                <button
                  type="button"
                  className="btn-next w-full text-white py-5 rounded-2xl font-black uppercase"
                >
                  Next Step
                </button>
              </Link>
            </form>

            {/* Footer */}
            <div className="text-center mt-10 text-sm uppercase">
              Already a partner?{" "}
              <Link to="/v10">
                <span className="text-blue-600 font-bold cursor-pointer">
                  Login
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RegisterProvider1;
