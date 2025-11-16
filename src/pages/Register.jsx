import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/auth/register", {
        username,
        email,
        password,
      });

      setMessage("Registrasi berhasil! Silakan cek email untuk verifikasi.");
    } catch (err) {
      setMessage(err.response?.data?.error || "Terjadi kesalahan.");
    }
  };

  return (
    <div className="min-h-screen flex bg-white">

      {/* LEFT */}
      <div className="w-1/2 flex flex-col justify-center px-20 bg-[#FFF4C8]">

        <img
          src="/logo.png"
          alt="Logo"
          className="w-28 mb-6"
        />

        <h1 className="text-5xl font-bold text-[#7A4E21] mb-4">
          Create Account
        </h1>

        <p className="text-[#7A4E21] mb-8">
          Register to get started ordering your favorite cakes.
        </p>

        {/* FORM */}
        <form onSubmit={handleRegister} className="space-y-4">

          <div>
            <label className="text-[#7A4E21] font-semibold">Username*</label>
            <input
              className="border border-[#D4A762] p-3 rounded-lg w-full"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-[#7A4E21] font-semibold">Email*</label>
            <input
              className="border border-[#D4A762] p-3 rounded-lg w-full"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-[#7A4E21] font-semibold">Password*</label>
            <input
              className="border border-[#D4A762] p-3 rounded-lg w-full"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#F18F34] text-white py-3 rounded-lg w-full font-semibold hover:bg-[#d67a25]"
          >
            Register
          </button>
        </form>

        {message && (
          <p className="text-center mt-4 text-red-600 font-semibold">
            {message}
          </p>
        )}

        <p className="mt-5 text-center text-[#7A4E21]">
          Already have an account?{" "}
          <a href="/login" className="underline font-semibold">
            Login
          </a>
        </p>
      </div>

      {/* RIGHT */}
      <div className="w-1/2">
        <img
          src="/cakes.jpg"
          alt="Cake Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
