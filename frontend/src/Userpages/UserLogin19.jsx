import { useState } from "react";
import { Link } from "react-router-dom";

const IconArrowLeft = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const IconEyeOff = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const IconEye = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
export default function UserLogin19() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div
      className="min-h-screen flex flex-col antialiased overflow-x-hidden"
      style={{
        background: "#FAFAFA",
        backgroundImage:
          "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.04) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }}
    >
      <style>{`

        /* Card */
        .login-card {
          background: #ffffff;
          border: 1.5px solid #E8EDF5;
          box-shadow:
            0 2px 8px rgba(0,0,0,0.04),
            0 8px 32px rgba(0,0,0,0.06),
            0 24px 64px rgba(0,0,0,0.04);
          border-radius: 20px;
        }

        /* Input */
        .field-input {
          width: 100%;
          background: #F8FAFF;
          border: 1.5px solid #E2E8F0;
          border-radius: 12px;
          padding: 14px 18px;
          font-size: 14px;
          color: #0F172A;
          outline: none;
          transition: all 0.2s ease;
        }
        .field-input::placeholder { color: #94A3B8; }
        .field-input:focus {
          border-color: #F59E0B;
          background: #FFFBEB;
          box-shadow: 0 0 0 3px rgba(245,158,11,0.1);
        }

        /* Sign In button — dark inverted style matching original */
        .btn-signin {
          width: 100%;
          background: #0F172A;
          color: #ffffff;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          border: none;
          border-radius: 12px;
          padding: 16px;
          cursor: pointer;
          transition: all 0.22s ease;
          box-shadow: 0 4px 16px rgba(15,23,42,0.15);
        }
        .btn-signin:hover {
          background: #1E293B;
          box-shadow: 0 8px 24px rgba(15,23,42,0.22);
          transform: translateY(-1px);
        }
        .btn-signin:active { transform: translateY(0); }

        /* Forgot password — amber, uppercase, tracked */
        .forgot-link {
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #F59E0B;
          text-decoration: none;
          transition: color 0.2s;
        }
        .forgot-link:hover { color: #D97706; }

        /* Create account link */
        .create-link {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #0F172A;
          text-decoration: none;
          border-bottom: 1.5px solid #0F172A;
          padding-bottom: 1px;
          transition: color 0.2s, border-color 0.2s;
        }
        .create-link:hover { color: #F59E0B; border-color: #F59E0B; }

        /* Back to home link */
        .back-link {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: #94A3B8;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s;
        }
        .back-link:hover { color: #475569; }

        /* Footer links */
        .footer-link {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: #94A3B8;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link:hover { color: #475569; }

        /* Show/hide password btn */
        .vis-btn {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          color: #CBD5E1;
          transition: color 0.2s;
          display: flex;
          align-items: center;
        }
        .vis-btn:hover { color: #64748B; }

        /* Field label */
        .field-label {
          display: block;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #94A3B8;
          margin-bottom: 8px;
        }
      `}</style>

      {/* ── Page body: centered vertically ─────────────────────────────────── */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        {/* ── Logo ─────────────────────────────────────────────────────────── */}
        <div className="text-center mb-10">
          <div
            className="text-3xl font-black mb-2"
            style={{ color: "#0F172A", letterSpacing: "-0.02em" }}
          >
            AhaarMitra
          </div>
          {/* Amber accent underline — short, centered */}
          <div
            className="mx-auto rounded-full"
            style={{
              width: "36px",
              height: "3px",
              background: "linear-gradient(90deg, #F59E0B, #FBBF24)",
            }}
          />
        </div>

        {/* ── Login card ───────────────────────────────────────────────────── */}
        <div className="login-card w-full max-w-md px-8 py-10">
          {/* Card heading */}
          <div className="mb-8">
            <h1
              className="text-2xl font-black mb-1.5"
              style={{ color: "#0F172A", letterSpacing: "-0.01em" }}
            >
              Welcome Back
            </h1>
            <p className="text-sm font-medium" style={{ color: "#94A3B8" }}>
              Please sign in to continue your journey.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-5">
            {/* ── Email ───────────────────────────────────────────────────── */}
            <div>
              <label className="field-label">Email Address</label>
              <input
                className="field-input"
                type="email"
                name="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* ── Password ────────────────────────────────────────────────── */}
            <div>
              {/* Label row with Forgot Password */}
              <div className="flex justify-between items-center mb-2">
                <label className="field-label" style={{ marginBottom: 0 }}>
                  Password
                </label>
                <a href="#" className="forgot-link">
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <input
                  className="field-input"
                  style={{ paddingRight: "44px" }}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  className="vis-btn"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <IconEye /> : <IconEyeOff />}
                </button>
              </div>
            </div>

            {/* ── Sign In button ───────────────────────────────────────────── */}
            <div className="pt-2">
              <button className="btn-signin" type="button">
                Sign In
              </button>
            </div>
          </div>

          {/* ── Create account row ───────────────────────────────────────── */}
          <div
            className="mt-8 pt-7 text-center"
            style={{ borderTop: "1.5px solid #F1F5F9" }}
          >
            <span
              className="text-xs font-medium"
              style={{ color: "#94A3B8", letterSpacing: "0.06em" }}
            >
              New to AhaarMitra?{" "}
            </span>
            <Link to="/11" className="create-link">
              Create Account
            </Link>
          </div>
        </div>

        {/* ── Back to Home link (below card) ───────────────────────────────── */}
        <div className="mt-8">
          <Link to="/" className="back-link mt-6">
            <IconArrowLeft />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
