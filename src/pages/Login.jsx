import { useState } from "react";
import  API  from "../api"; // pastikan path benar

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      console.log(res.data);

      alert("Login sukses!");

      // Simpan token
      localStorage.setItem("token", res.data.token);

      // Redirect ke home/dashboard
      window.location.href = "/dashboard";

    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Login gagal");
    }
  };

  return (
    <div className="min-h-screen flex bg-white">

      {/* LEFT SIDE */}
      <div className="w-1/2 flex flex-col justify-center px-20 bg-[#FFF4C8]">

        <img src="/logo.png" alt="Lola Cake" className="w-28 mb-6" />

        <h1 className="text-6xl font-bold text-[#7A4E21] mb-6">Welcome!</h1>

        <p className="text-[#7A4E21] mb-4">
          Enter your email / mobile number and password to login
        </p>

        {error && (
          <p className="text-red-600 mb-4 font-semibold">{error}</p>
        )}

        <label className="text-[#7A4E21] font-semibold">
          Username or Email*
        </label>
        <input
          className="border border-[#D4A762] p-3 rounded-lg mb-5 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        />

        <div className="flex justify-between">
          <label className="text-[#7A4E21] font-semibold">Password*</label>
          <a href="#" className="text-sm text-[#7A4E21] underline">
            Forgot your password?
          </a>
        </div>

        <input
          className="border border-[#D4A762] p-3 rounded-lg mb-5 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />

        <button
          className="bg-[#F18F34] hover:bg-[#d67a25] text-white py-3 rounded-lg font-semibold"
          onClick={handleLogin}
        >
          Log in
        </button>

        <p className="mt-5 text-center text-[#7A4E21]">
          Don’t have an account?{" "}
          <a href="/register" className="underline font-semibold">
            Sign Up
          </a>
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2">
        <img
          src="/cakes.jpg"
          alt="cakes"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
