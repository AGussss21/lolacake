import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// ================================
// CONFIGURASI EMAIL TRANSPORTER
// ================================
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ================================
// TEST KONEKSI: CEK EMAIL BISA DIGUNAKAN
// ================================
transporter.verify((error, success) => {
  if (error) {
    console.log("❌ EMAIL ERROR:", error);
  } else {
    console.log("✔ EMAIL READY TO SEND");
  }
});

// ================================
// FUNGSI KIRIM EMAIL VERIFIKASI
// ================================
export const sendVerificationEmail = async (email, token) => {
  try {
    const link = `${process.env.BASE_URL}/auth/verify/${token}`;

    const info = await transporter.sendMail({
      from: `"Lola Cake 🍰" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "🍰 Verifikasi Akun Lola Cake",
      html: `
      <div style="
          font-family: Arial, sans-serif;
          background:#fef3f7;
          padding: 30px;
          border-radius: 12px;
          max-width: 600px;
          margin: auto;
          border: 1px solid #ffd6e5;
      ">
        
        <!-- Header -->
        <div style="text-align:center; margin-bottom:20px;">
          <h2 style="color:#ff4f76; margin:0; font-size:28px;">Lola Cake 🍰</h2>
          <p style="color:#555; margin:5px 0 0;">Verifikasi Email Akun Anda</p>
        </div>

        <!-- Content -->
        <div style="
            background:white; 
            padding:25px; 
            border-radius:10px; 
            border:1px solid #ffe4ec;
        ">
          <h3 style="color:#333; margin-top:0;">Halo,</h3>
          <p style="color:#444; line-height:1.6;">
            Terima kasih telah mendaftar di <strong>Lola Cake</strong>!  
            Untuk melanjutkan, silakan verifikasi alamat email Anda dengan
            menekan tombol di bawah ini:
          </p>

          <!-- CTA Button -->
          <div style="text-align:center; margin:30px 0;">
            <a href="${link}" 
              style="
                padding:14px 22px;
                background:#ff4f76;
                color:white;
                border-radius:8px;
                text-decoration:none;
                font-size:16px;
                font-weight:bold;
                display:inline-block;
                box-shadow:0 4px 10px rgba(255,79,118,0.3);
              ">
              Verifikasi Akun
            </a>
          </div>

          <p style="color:#777; font-size:14px; line-height:1.6;">
            Jika tombol di atas tidak berfungsi, salin dan buka link berikut di browser Anda:
            <br><br>
            <a href="${link}" style="color:#ff4f76;">${link}</a>
          </p>
        </div>

        <!-- Footer -->
        <div style="
            text-align:center; 
            margin-top:20px; 
            color:#999; 
            font-size:13px;
        ">
          <p>
            Email ini dikirim otomatis oleh sistem Lola Cake.<br>
            Jika Anda tidak meminta pembuatan akun, abaikan email ini.
          </p>
        </div>

      </div>
      `,
    });

    return {
      success: true,
      message: "Email verifikasi berhasil dikirim",
      info,
    };
  } catch (error) {
    console.error("❌ ERROR SEND EMAIL:", error);
    return {
      success: false,
      message: "Gagal mengirim email verifikasi",
      error,
    };
  }
};
