import React from "react";

const WhyChooseUs = () => (
  <section style={{ ...styles.section, backgroundColor: "#fff4db" }}>
    <h3 style={styles.whyTitle}>Kualitas Premium, Rasa Bikin Senyum</h3>
    <div style={styles.whyList}>
      <div style={styles.whyItem}>
        <h4>Kue Segar Setiap Hari</h4>
        <p>Kami memanggang setiap kue dengan bahan segar pilihan dan resep khas Lola Cake.</p>
      </div>
      <div style={styles.whyItem}>
        <h4>Rasa Premium Handmade</h4>
        <p>Setiap potongan kue dibuat dengan tangan penuh cinta, bukan dari pabrik.</p>
      </div>
      <div style={styles.whyItem}>
        <h4>Dipercaya Banyak Pelanggan</h4>
        <p>Ratusan pelanggan telah jatuh cinta pada kelezatan Lola Cake.</p>
      </div>
    </div>
  </section>
);

const styles = {
  section: {
    padding: "60px 70px",
    fontFamily: "'Poppins', sans-serif",
    color: "#4d2c17",
    maxWidth: 1200,
    margin: "0 auto",
  },
  whyTitle: {
    fontFamily: "'Fredoka One', cursive",
    fontWeight: "900",
    fontSize: 34,
    marginBottom: 40,
    textAlign: "center",
    color: "#7a5942",
  },
  whyList: {
    display: "flex",
    justifyContent: "space-between",
    gap: 24,
  },
  whyItem: {
    flex: "1 1 30%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    boxShadow: "0 8px 15px rgb(0 0 0 / 0.1)",
    textAlign: "center",
  },
  whyItemH4: {
    fontWeight: "700",
    fontSize: 18,
    marginBottom: 10,
  },
};

export default WhyChooseUs;
