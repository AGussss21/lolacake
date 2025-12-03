import express from "express";
import { db } from "../db/connection.js"; // Sesuaikan path database kamu
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// ==========================================
// 1. GET: Lihat Isi Keranjang User
// ==========================================
router.get("/", verifyToken, async (req, res) => {
  try {
    // Kita ambil data keranjang + data detail produknya (Nama, Harga, Gambar)
    // menggunakan JOIN ke tabel products.
    const query = `
      SELECT 
        c.id AS cart_id,
        c.quantity,
        p.id AS product_id,
        p.name,
        p.price,
        p.image
      FROM carts c
      JOIN products p ON c.product_id = p.id
      WHERE c.user_id = ?
    `;

    const [items] = await db.query(query, [req.user.id]);

    // Hitung total harga belanjaan (Optional, biar frontend enak)
    const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    res.json({
      items,
      total_price: totalPrice
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal mengambil data keranjang" });
  }
});

// ==========================================
// 2. POST: Tambah Barang ke Keranjang
// ==========================================
router.post("/", verifyToken, async (req, res) => {
  const { product_id, quantity } = req.body;
  const userId = req.user.id;

  if (!product_id) {
    return res.status(400).json({ error: "Product ID wajib diisi" });
  }

  try {
    // Cek dulu: Barang ini udah ada di keranjang user belum?
    const [existing] = await db.query(
      "SELECT id FROM carts WHERE user_id = ? AND product_id = ?",
      [userId, product_id]
    );

    if (existing.length > 0) {
      // SKENARIO A: Barang sudah ada -> Update jumlahnya (tambah qty)
      await db.query(
        "UPDATE carts SET quantity = quantity + ? WHERE user_id = ? AND product_id = ?",
        [quantity || 1, userId, product_id]
      );
    } else {
      // SKENARIO B: Barang belum ada -> Masukkan barang baru
      await db.query(
        "INSERT INTO carts (user_id, product_id, quantity) VALUES (?, ?, ?)",
        [userId, product_id, quantity || 1]
      );
    }

    res.json({ message: "Berhasil masuk keranjang!" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal menambah ke keranjang" });
  }
});

// ==========================================
// 3. DELETE: Hapus Item dari Keranjang
// ==========================================
router.delete("/:cartId", verifyToken, async (req, res) => {
  try {
    const { cartId } = req.params;
    const userId = req.user.id;

    // Pastikan yang dihapus adalah punya user yang login (biar gak hapus punya orang lain)
    const [result] = await db.query(
      "DELETE FROM carts WHERE id = ? AND user_id = ?",
      [cartId, userId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Item tidak ditemukan atau bukan milikmu" });
    }

    res.json({ message: "Item berhasil dihapus dari keranjang" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal menghapus item" });
  }
});

export default router;