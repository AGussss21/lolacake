import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { db } from "../db/connection.js";
import { sendVerificationEmail } from "../utils/sendEmail.js";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

/* ======================================================
   REGISTER USER + EMAIL VERIFIKASI
====================================================== */
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password)
      return res.status(400).json({ error: "Semua field wajib diisi" });

    // Cek email sudah digunakan atau belum
    const [exists] = await db.execute(
      "SELECT id FROM users WHERE email = ?",
      [email]
    );

    if (exists.length > 0)
      return res.status(400).json({ error: "Email sudah digunakan" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Token verifikasi unik
    const verificationToken = crypto.randomBytes(40).toString("hex");

    // Simpan user baru
    await db.execute(
      `INSERT INTO users 
       (username, email, password, role, is_verified, verification_token) 
       VALUES (?, ?, ?, 'customer', 0, ?)`,
      [username, email, hashedPassword, verificationToken]
    );

    // Kirim email verifikasi
    await sendVerificationEmail(email, verificationToken);

    res.json({
      message: "Registrasi berhasil! Silakan cek email untuk verifikasi.",
    });

  } catch (err) {
    console.error("REGISTER ERROR:", err);
    res.status(500).json({ error: "Terjadi kesalahan server" });
  }
});

/* ======================================================
   VERIFIKASI EMAIL
====================================================== */
router.get("/verify/:token", async (req, res) => {
  try {
    const { token } = req.params;

    const [user] = await db.execute(
      "SELECT id FROM users WHERE verification_token = ?",
      [token]
    );

    if (user.length === 0) {
      return res.status(400).send(`
        <div style="
          font-family: Arial, sans-serif;
          text-align: center;
          padding: 40px;
          background: #fff0f0;
          border-radius: 12px;
          max-width: 500px;
          margin: 60px auto;
          border: 1px solid #ffb7b7;
        ">

          <h2 style="color:#d63031; font-size:28px; margin-bottom:10px;">
            ❌ Token Tidak Valid
          </h2>

          <p style="color:#444; font-size:16px; line-height:1.6;">
            Link verifikasi sudah kedaluwarsa atau tidak valid.
          </p>

          <a href="${process.env.FRONTEND_URL}/register"
            style="
              display:inline-block;
              margin-top:25px;
              padding:12px 22px;
              background:#d63031;
              color:white;
              border-radius:8px;
              font-size:16px;
              font-weight:bold;
              text-decoration:none;
              box-shadow:0 4px 10px rgba(214,48,49,0.25);
            ">
            Daftar Ulang
          </a>

        </div>
      `);
    }

    // Update user menjadi terverifikasi
    await db.execute(
      "UPDATE users SET is_verified = 1, verification_token = NULL WHERE id = ?",
      [user[0].id]
    );

    return res.send(`
      <div style="
        font-family: Arial, sans-serif;
        text-align: center;
        padding: 40px;
        background: #fff4f8;
        border-radius: 12px;
        max-width: 500px;
        margin: 60px auto;
        border: 1px solid #ffd3e3;
      ">

        <h2 style="color:#ff4f76; font-size:28px; margin-bottom:10px;">
          🎉 Akun Berhasil Diverifikasi!
        </h2>

        <p style="color:#555; font-size:16px; line-height:1.6;">
          Selamat! Email kamu sudah berhasil diverifikasi.  
          Sekarang kamu bisa login ke <strong>Lola Cake</strong> dan mulai berbelanja.
        </p>

        <a href="${process.env.FRONTEND_URL || "http://localhost:5173"}/login"
          style="
            display:inline-block;
            margin-top:25px;
            padding:12px 22px;
            background:#ff4f76;
            color:white;
            border-radius:8px;
            font-size:16px;
            font-weight:bold;
            text-decoration:none;
            box-shadow:0 4px 10px rgba(255,79,118,0.25);
          ">
          Login Sekarang
        </a>

      </div>
    `);

  } catch (err) {
    console.error("VERIFY ERROR:", err);
    res.status(500).send("Terjadi kesalahan server");
  }
});

/* ======================================================
   LOGIN
====================================================== */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ error: "Email dan password wajib diisi" });

    const [rows] = await db.execute(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (rows.length === 0)
      return res.status(404).json({ error: "User tidak ditemukan" });

    const user = rows[0];

    // Cek apakah sudah diverifikasi
    if (!user.is_verified)
      return res.status(403).json({
        error: "Akun belum diverifikasi! Silakan cek email Anda.",
      });

    // Cek password benar atau tidak
    const valid = await bcrypt.compare(password, user.password);
    if (!valid)
      return res.status(400).json({ error: "Password salah" });

    // Buat JWT
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login berhasil",
      token,
      role: user.role,
    });

  } catch (err) {
    console.error("LOGIN ERROR:", err);
    res.status(500).json({ error: "Terjadi kesalahan server" });
  }
});

export default router;
