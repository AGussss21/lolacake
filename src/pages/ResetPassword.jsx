import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    setMessage("");

    if (!password || !confirm) {
      return setMessage("Password dan konfirmasi wajib diisi");
    }

    if (password.length < 6) {
      return setMessage("Password minimal 6 karakter");
    }

    if (password !== confirm) {
      return setMessage("Password dan konfirmasi tidak sama");
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/reset-password/${token}`,
        { password }
      );

      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.error || "Terjadi kesalahan server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", textAlign: "center" }}>
      <h2>Reset Password</h2>

      <input
        type="password"
        placeholder="Password baru"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", width: "100%", padding: 10, margin: "10px 0" }}
      />

      <input
        type="password"
        placeholder="Konfirmasi password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        style={{ display: "block", width: "100%", padding: 10, margin: "10px 0" }}
      />

      <button
        onClick={handleReset}
        disabled={loading}
        style={{
          padding: "10px 20px",
          background: loading ? "#aaa" : "#ff4f76",
          color: "white",
          border: "none",
          borderRadius: 8,
          cursor: loading ? "not-allowed" : "pointer",
          marginTop: 10,
        }}
      >
        {loading ? "Memproses..." : "Reset Password"}
      </button>

      {message && (
        <p style={{ marginTop: 20, color: message.includes("berhasil") ? "green" : "red" }}>
          {message}
        </p>
      )}
    </div>
  );
}
