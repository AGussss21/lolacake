import React from "react";

const HowWeWork = () => (
  <section style={styles.section}>
    <h2 style={styles.sectionTitle}>Cara Kami Bekerja</h2>
    <div style={styles.howWeWorkWrapper}>
      {howWeWorkItems.map(({ icon, title, desc }, index) => (
        <div key={index} style={styles.howWeWorkItem}>
          <div style={styles.howIcon}>{icon}</div>
          <h3 style={styles.howTitle}>{title}</h3>
          <p style={styles.howDescription}>{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const howWeWorkItems = [
  {
    icon: "📦",
    title: "Lihat Produk",
    desc: "Pilih produk favorite melalui website kami",
  },
  {
    icon: "💬",
    title: "Pilih Pesanan",
    desc: "Pilih varian, ukuran, dan katakan harapanmu",
  },
  {
    icon: "🚚",
    title: "Pesan & Nikmati",
    desc: "Kami antar produk langsung ke tanganmu",
  },
];

const styles = {
  section: {
    padding: "60px 70px",
    fontFamily: "'Poppins', sans-serif",
    color: "#4d2c17",
    maxWidth: 1200,
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: 36,
    fontWeight: "900",
    fontFamily: "'Fredoka One', cursive",
    marginBottom: 40,
    textAlign: "center",
  },
  howWeWorkWrapper: {
    display: "flex",
    justifyContent: "space-between",
    gap: 24,
    maxWidth: 900,
    margin: "0 auto",
    flexWrap: "wrap",
  },
  howWeWorkItem: {
    flex: "1 1 30%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    boxShadow: "0 8px 15px rgb(0 0 0 / 0.1)",
    textAlign: "center",
  },
  howIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  howTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
  howDescription: {
    fontSize: 14,
    fontWeight: "400",
    color: "#798e3a",
  },
};

export default HowWeWork;
