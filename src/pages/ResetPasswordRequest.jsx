// src/pages/ResetPasswordRequest.jsx
import { useState } from "react";

export default function ResetPasswordRequest() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setIsError(false);

    try {
      const res = await fetch("http://localhost:5000/api/auth/request-reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setIsError(true);
        setMessage(data.error || "Terjadi kesalahan server");
      } else {
        setIsError(false);
        setMessage(data.message || "Link reset password berhasil dikirim!");
        setEmail(""); // clear input setelah sukses
      }
    } catch (err) {
      setIsError(true);
      setMessage("Terjadi kesalahan server");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ color: "#ff4f76", textAlign: "center" }}>Reset Password</h2>
      <p style={{ textAlign: "center", color: "#555" }}>
        Masukkan email Anda untuk menerima link reset password.
      </p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "none",
            background: "#ff4f76",
            color: "white",
            fontWeight: "bold",
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Mengirim..." : "Kirim Link Reset"}
        </button>
      </form>

      {message && (
        <p
          style={{
            marginTop: 15,
            textAlign: "center",
            color: isError ? "#d63031" : "#00b894",
            fontWeight: "bold",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}
