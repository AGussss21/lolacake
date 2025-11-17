// routes/testimonials.js
import express from "express";
import { db } from "../db.js";

const router = express.Router();

// GET all testimonials
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM testimonials ORDER BY created_at DESC");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch testimonials" });
  }
});

// POST new testimonial
router.post("/", async (req, res) => {
  const { name, message, rating } = req.body;
  if (!name || !message) return res.status(400).json({ error: "Name and message are required" });

  try {
    const [result] = await db.query(
      "INSERT INTO testimonials (name, message, rating) VALUES (?, ?, ?)",
      [name, message, rating || null]
    );
    const [newTestimonial] = await db.query("SELECT * FROM testimonials WHERE id = ?", [result.insertId]);
    res.status(201).json(newTestimonial[0]);
  } catch (err) {
    res.status(500).json({ error: "Failed to save testimonial" });
  }
});

// PUT update testimonial
router.put("/:id", async (req, res) => {
  const { name, message, rating } = req.body;
  try {
    await db.query(
      "UPDATE testimonials SET name = ?, message = ?, rating = ? WHERE id = ?",
      [name, message, rating, req.params.id]
    );
    const [updated] = await db.query("SELECT * FROM testimonials WHERE id = ?", [req.params.id]);
    res.json(updated[0]);
  } catch (err) {
    res.status(500).json({ error: "Failed to update testimonial" });
  }
});

// DELETE testimonial
router.delete("/:id", async (req, res) => {
  try {
    await db.query("DELETE FROM testimonials WHERE id = ?", [req.params.id]);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete testimonial" });
  }
});

export default router;
