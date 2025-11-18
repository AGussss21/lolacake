import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BestSeller from "../components/BestSeller";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import HowWeWork from "../components/HowWeWork";
import FollowUs from "../components/FollowUs";
import Footer from "../components/Footer";
import barongko from "../assets/barongko.png";
import brownies from "../assets/brownies.png";
import boluzebra from "../assets/boluzebra.png";

const products = [
  {
    id: "brownies1",  // ID yang unik untuk setiap produk
    name: "Brownies",
    image: brownies,
    desc: ["Coklat dan vanilla lembut", "Aroma wangi", "Hangat & Nikmat", "Tekstur Halus"],
    price: "75.000",
  },
  {
    id: "bolu-zebra1",  // ID yang unik
    name: "Bolu Zebra",
    image: boluzebra,
    desc: ["Coklat dan vanilla lembut", "Aroma wangi", "Hangat & Nikmat", "Tekstur Halus"],
    price: "75.000",
  },
  {
    id: "brownies",  // ID yang unik
    name: "Brownies",
    image: "path_to_image", // Ganti dengan path gambar yang sesuai
    desc: ["Coklat dan vanilla lembut", "Aroma wangi", "Hangat & Nikmat", "Tekstur Halus"],
    price: "75.000",
  },
  {
    id: "barongko",  // ID yang unik
    name: "Barongko",
    image: barongko,
    desc: ["Coklat dan vanilla lembut", "Aroma wangi", "Hangat & Nikmat", "Tekstur Halus"],
    price: "75.000",
  },
  {
    id: "bolu-zebra",  // ID yang unik
    name: "Bolu Zebra",
    image: "path_to_image", // Ganti dengan path gambar yang sesuai
    desc: ["Coklat dan vanilla lembut", "Aroma wangi", "Hangat & Nikmat", "Tekstur Halus"],
    price: "75.000",
  },
];

const Dashboard = () => {
  const [user, setUser] = useState(null);  // State untuk menyimpan data pengguna

  useEffect(() => {
    async function fetchUser() {
      const token = localStorage.getItem("token");  // Ambil token dari localStorage
      console.log("Token yang diambil dari localStorage:", token);  // Debugging token

      if (!token) return;  // Jika tidak ada token, tidak lanjut

      try {
        // Dekode token untuk memeriksa informasi pengguna
        const decoded = jwt_decode(token);  // Dekode token
        console.log("Decoded Token:", decoded);  // Debugging hasil dekode token

        // Periksa apakah token kedaluwarsa
        const currentTime = Date.now() / 1000; // Waktu sekarang dalam detik
        if (decoded.exp < currentTime) {
          console.log("Token telah kedaluwarsa");
          return;
        }

        // Jika token valid, ambil data pengguna
        const res = await fetch("http://localhost:5000/api/users/me", {
          headers: { "Authorization": `Bearer ${token}` },
        });
        const data = await res.json();
        console.log("Data pengguna yang diterima dari API:", data); // Debugging data pengguna

        if (data.users) {
          setUser(data.users[0]);  // Menyimpan data pengguna ke state
        } else {
          setUser(null);  // Jika tidak ada data user, set ke null
        }
      } catch (error) {
        console.error("Error decoding token or fetching user data:", error);
      }
    }

    fetchUser();  // Panggil fungsi untuk mengambil data user
  }, []);  // Efek ini hanya dijalankan sekali saat komponen dimuat

  return (
    <>
      <Navbar user={user} />  {/* Kirimkan data user ke Navbar */}
      <Hero />
      <BestSeller products={products} />
      <WhyChooseUs />
      <HowWeWork />
      <Testimonials />
      <FollowUs />
      <Footer />
    </>
  );
};

export default Dashboard;