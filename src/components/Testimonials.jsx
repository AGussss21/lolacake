import { useState, useEffect } from "react";
import axios from "axios";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Ambil testimoni dari backend
  const fetchTestimonials = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/testimonials");
      setTestimonials(res.data);
    } catch (err) {
      console.error(err);
      setError("Gagal memuat testimoni");
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Kirim testimoni baru
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !message) {
      setError("Nama dan pesan wajib diisi");
      return;
    }

    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/testimonials", {
        name,
        message,
        rating,
      });
      setName("");
      setMessage("");
      setRating(5);
      setError("");
      fetchTestimonials();
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError(err.response?.data?.error || "Gagal mengirim testimoni");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-amber-900 animate-fadeIn">
        Apa Kata Mereka ?
      </h2>

      <h2 className="text-1xl md:text-1xl font-bold text-center mb-12 text-gray-500 animate-fadeIn">
        Cerita manis dari pelanggan yang jatuh cinta pada rasa Lola Cake.
      </h2>

    

      {/* Form Input */}
      <form
        onSubmit={handleSubmit}
        className="bg-linear-to-r from-yellow-50 to-yellow-100 p-8 rounded-2xl shadow-xl mb-12 transition-transform transform hover:scale-[1.01]"
      >
        {error && (
          <p className="text-red-600 mb-4 text-center font-semibold">{error}</p>
        )}
        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            {[1, 2, 3, 4, 5].map((r) => (
              <option key={r} value={r}>
                {r} Star{r > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>
        <textarea
          placeholder="Tulis pesan Anda..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-gray-300 rounded-xl p-3 mt-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
          rows={4}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="mt-4 bg-amber-900 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-xl shadow-md transition-transform transform hover:scale-105"
        >
          {loading ? "Mengirim..." : "Kirim Testimoni"}
        </button>
      </form>

      {/* List of Testimonials */}
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl transition-shadow animate-fadeIn"
          >
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-bold text-lg text-amber-800">{t.name}</h4>
              <div className="text-yellow-500 font-semibold text-xl">
                {"★".repeat(t.rating)}
                {"☆".repeat(5 - t.rating)}
              </div>
            </div>
            <p className="text-gray-700 mb-2">{t.message}</p>
            <p className="text-gray-400 text-sm">
              {new Date(t.created_at).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s forwards;
          }
        `}
      </style>
    </div>
  );
}
