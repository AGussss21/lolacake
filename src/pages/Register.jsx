import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });

      setMessage("Registrasi berhasil! Silakan cek email untuk verifikasi.");
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setMessage(err.response?.data?.error || "Terjadi kesalahan.");
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
          <li className="cursor-pointer hover:underline transition">Product</li>
          <li className="cursor-pointer hover:underline transition">About Us</li>
          <li className="cursor-pointer hover:underline transition">Contact</li>
        </ul>
        <div className="flex space-x-4 md:space-x-6 items-center">
          <button className="bg-[#FFCC66] rounded-full px-4 md:px-5 py-1 font-bold hover:bg-[#ffd980] flex items-center space-x-1 transition">
            <span>Cart</span>
            <span>🛒</span>
          </button>
          <button
            className="bg-[#4D2C17] rounded-full px-5 md:px-6 py-1 text-white font-bold hover:bg-[#6F3E16] transition"
            onClick={() => navigate("/login")}
          >
            Login / Sign Up
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center px-4 mt-12">
        <div className="w-full max-w-md bg-[#feefb6] rounded-[36px] p-8 md:p-12 shadow-2xl">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#4D2C17] mb-4 text-center">
            Create Account
          </h1>
          <p className="text-[#4D2C17] mb-8 text-center">
            Register to get started ordering your favorite cakes.
          </p>

          <form onSubmit={handleRegister} className="flex flex-col space-y-5">
            <label className="block text-[#4D2C17] font-semibold">
              Username*
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="mt-2 w-full border border-[#D4A762] rounded-lg p-3 text-[#4D2C17] bg-white focus:outline-none focus:ring-2 focus:ring-[#F18F34] transition"
              />
            </label>

            <label className="block text-[#4D2C17] font-semibold">
              Email*
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-2 w-full border border-[#D4A762] rounded-lg p-3 text-[#4D2C17] bg-white focus:outline-none focus:ring-2 focus:ring-[#F18F34] transition"
              />
            </label>

            <label className="block text-[#4D2C17] font-semibold">
              Password*
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-2 w-full border border-[#D4A762] rounded-lg p-3 text-[#4D2C17] bg-white focus:outline-none focus:ring-2 focus:ring-[#F18F34] transition"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className={`bg-[#F18F34] hover:bg-[#d67a25] text-white font-semibold py-3 rounded-lg transition-transform transform hover:scale-105 ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          {message && (
            <p className="text-center mt-4 text-red-600 font-semibold">{message}</p>
          )}

          <p className="mt-6 text-center text-[#4D2C17]">
            Already have an account?{" "}
            <a
              href="/login"
              className="underline font-semibold hover:text-[#F18F34]"
            >
              Login
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
