// src/pages/ResetPassword.jsx
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);

    if (password !== confirmPassword) {
      setIsError(true);
      setMessage("Password dan konfirmasi tidak sama");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`http://localhost:5000/auth/reset-password/${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setIsError(true);
        setMessage(data.error || "Terjadi kesalahan server");
      } else {
        setIsError(false);
        setMessage(data.message || "Password berhasil direset!");
        setPassword("");
        setConfirmPassword("");

        // Redirect ke login setelah 2 detik
        setTimeout(() => navigate("/login"), 2000);
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
        Masukkan password baru Anda.
      </p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="password"
          placeholder="Password baru"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          type="password"
          placeholder="Konfirmasi password"
          value={confirmPassword}
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
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
          {loading ? "Memproses..." : "Reset Password"}
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
