import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import cakeimage from "../assets/image3.png"; // pastikan path benar

export default function Login() {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await API.post("/api/auth/login", {
        email: emailOrUsername,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      alert("Login sukses!");
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.error || "Login gagal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8EE]">
      {/* Navbar */}
      <nav className="bg-[#F18F34] text-[#4D2C17] flex justify-between items-center px-10 md:px-16 py-3 font-semibold shadow-md">
        <div className="text-xl font-bold cursor-default select-none">Lola Cake</div>
        <ul className="hidden md:flex space-x-10">
          <li className="cursor-pointer hover:underline transition">Home</li>
          <li className="cursor-pointer font-bold hover:underline transition">Product</li>
          <li className="cursor-pointer hover:underline transition">About Us</li>
          <li className="cursor-pointer hover:underline transition">Contact</li>
        </ul>
        <div className="flex space-x-4 md:space-x-6 items-center">
          <button className="bg-[#FFCC66] rounded-full px-4 md:px-5 py-1 font-bold hover:bg-[#ffd980] flex items-center space-x-1 transition">
            <span>Cart</span>
            <span>🛒</span>
          </button>
          <button className="bg-[#4D2C17] rounded-full px-5 md:px-6 py-1 text-white font-bold hover:bg-[#6F3E16] transition">
            Login / Sign Up
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row justify-center items-center mt-12 gap-10 md:gap-16">
        {/* Left Side Form */}
        <section className="flex items-center justify-center">
          <div className="w-[565px] h-[647px] bg-[#feefb6] backdrop-blur-md rounded-[36px] p-8 md:p-16 shadow-2xl flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#4D2C17] mb-4 text-center animate-fadeIn">
              Welcome!
            </h1>
            <p className="text-[#4D2C17] mb-8 animate-fadeIn delay-100 text-center">
              Enter your email / mobile number and password to login
            </p>

            {error && (
              <p className="text-red-600 mb-4 font-semibold animate-fadeIn">{error}</p>
            )}

            <form onSubmit={handleLogin} className="flex flex-col space-y-5 md:space-y-6 w-full max-w-md mx-auto">
              <label className="block text-[#4D2C17] font-semibold">
                Username or Email*
                <input
                  type="text"
                  value={emailOrUsername}
                  onChange={(e) => setEmailOrUsername(e.target.value)}
                  placeholder="Username or Email"
                  required
                  className="mt-2 w-full border border-[#4D2C17] rounded-lg p-3 text-[#4D2C17] bg-white focus:outline-none focus:ring-2 focus:ring-[#F18F34] transition"
                />
              </label>

              <label className="block text-[#4D2C17] font-semibold">
                Password*
                <div className="flex flex-col md:flex-row justify-between items-center mt-2 gap-2 md:gap-4">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className="w-full border border-[#4D2C17] rounded-lg p-3 text-[#4D2C17] bg-white focus:outline-none focus:ring-2 focus:ring-[#F18F34] transition"
                  />
                  <a
                    href="/reset-password-request"
                    className="text-sm text-[#4D2C17] underline whitespace-nowrap hover:text-[#F18F34] transition"
                  >
                    Forgot your password?
                  </a>
                </div>
              </label>

              <button
                type="submit"
                disabled={loading}
                className={`bg-[#F18F34] hover:bg-[#d67a25] text-white font-semibold py-3 rounded-lg transition-transform transform hover:scale-105 ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Logging in..." : "Log in"}
              </button>
            </form>

            <p className="mt-6 text-center text-[#4D2C17] w-full max-w-md animate-fadeIn delay-200">
              Don’t have an account?{" "}
              <a href="/register" className="underline font-semibold hover:text-[#F18F34] transition">
                Sign Up
              </a>
            </p>
          </div>
        </section>

        {/* Right Side Image */}
        <section className="flex items-center justify-center">
          <img
            src={cakeimage}
            alt="cakes"
            className="w-[671px] h-[946px] object-cover rounded-[36px] shadow-lg animate-slideIn"
          />
        </section>
      </main>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.6s forwards;
          }
          .animate-slideIn {
            animation: slideIn 0.8s forwards;
          }
          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
        `}
      </style>
    </div>
  );
}
