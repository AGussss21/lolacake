import homepagebolu from "../assets/homepagebolu.png";


const Hero = () => (
  <section style={styles.hero}>
    <div style={styles.heroLeft}>
      <h1 style={styles.heroTitle}>
        <span style={{ color: "#db8a1f", fontWeight: "700" }}>Kue Lezat, </span>
        <span>Langsung dari Oven untuk Anda!</span>
      </h1>
      <p style={styles.heroDesc}>
        Lifestyle Bakery Dengan Varian Produk Terbanyak dan Jaminan Kualitas Produk & Layanan.
      </p>
      <button style={styles.heroBtn}>Pesan Sekarang</button>
    </div>
    <div style={styles.heroRight}>
      <img
        alt="Bolu gulung"
        src= {homepagebolu} // Ganti dengan path gambar yang sesuai
        style={styles.heroImage}
      />
    </div>
  </section>
);

const styles = {
  hero: {
    display: "flex",
    backgroundColor: "#4d2c17",
    padding: "60px 70px",
    borderBottomLeftRadius: 100,
    color: "#fff",
    fontFamily: "'Poppins', sans-serif",
  },
  heroLeft: { flex: 1, paddingRight: 30 },
  heroTitle: { fontSize: 38, fontWeight: "900", lineHeight: 1.1 },
  heroDesc: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "400",
    color: "#b68c4b",
    lineHeight: 1.6,
  },
  heroBtn: {
    marginTop: 30,
    padding: "12px 30px",
    fontSize: 16,
    borderRadius: 6,
    border: "2px solid #f8ab2e",
    background: "transparent",
    color: "#f8ab2e",
    cursor: "pointer",
    fontWeight: "700",
  },
  heroRight: { flex: 1, display: "flex", justifyContent: "center" },
  heroImage: {
    borderRadius: 25,
    maxWidth: "90%",
    boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
  },
};

export default Hero;
