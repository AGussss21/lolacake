import express from "express";
import { db } from "../db.js"; // Pastikan path ini sesuai dengan struktur foldermu
import { verifyToken, checkRole } from "../middleware/authMiddleware.js";

const router = express.Router();

// =================================================
// GET: Ambil Semua Testimoni (Public)
// =================================================
router.get("/", async (req, res) => {
  try {
    // JOIN tabel users agar kita bisa dapat username (alias 'name')
    const query = `
      SELECT 
        t.id, 
        t.message, 
        t.rating, 
        t.created_at, 
        t.products_id,
        u.username AS name 
      FROM testimonials t
      JOIN users u ON t.user_id = u.id
      ORDER BY t.created_at DESC
    `;
    
    const [rows] = await db.query(query);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch testimonials" });
  }
});

// =================================================
// POST: Tambah Testimoni (Wajib Login)
// =================================================
router.post("/", verifyToken, async (req, res) => {
  const { message, rating, products_id } = req.body;
  
  // Ambil ID user dari token (otomatis dari middleware verifyToken)
  const userId = req.user.id; 

  if (!message || !products_id) {
    return res.status(400).json({ error: "Message dan Product ID wajib diisi" });
  }

  try {
    // Simpan ke database dengan user_id
    const [result] = await db.query(
      "INSERT INTO testimonials (user_id, products_id, message, rating) VALUES (?, ?, ?, ?)",
      [userId, products_id, message, rating || null]
    );

    // Ambil data barusan untuk dikirim balik sebagai response
    // Kita JOIN lagi biar langsung dapat nama usernya
    const [newTestimonial] = await db.query(`
      SELECT t.*, u.username AS name 
      FROM testimonials t
      JOIN users u ON t.user_id = u.id
      WHERE t.id = ?
    `, [result.insertId]);

    res.status(201).json(newTestimonial[0]);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save testimonial" });
  }
});

// =================================================
// DELETE: Hapus Testimoni (Hanya Admin)
// =================================================
// Kita tambah checkRole("admin") biar user biasa gak bisa hapus
router.delete("/:id", verifyToken, checkRole("admin"), async (req, res) => {
  try {
    await db.query("DELETE FROM testimonials WHERE id = ?", [req.params.id]);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete testimonial" });
  }
});

// =================================================
// GET: Ambil Testimoni by Product ID (Public)
// =================================================
router.get("/product/:productId", async (req, res) => {
  try {
    const { productId } = req.params;

    // JOIN users u ON t.user_id = u.id
    // Ini kuncinya supaya nama pengulas muncul
    const query = `
      SELECT 
        t.id, 
        t.message, 
        t.rating, 
        t.created_at, 
        u.username AS name
      FROM testimonials t
      JOIN users u ON t.user_id = u.id
      WHERE t.products_id = ?
      ORDER BY t.created_at DESC
    `;

    const [rows] = await db.query(query, [productId]);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch product testimonials" });
  }
});

export default router;