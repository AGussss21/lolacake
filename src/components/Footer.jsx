import React from "react";

const Footer = () => (
  <footer style={styles.footer}>
    <div style={styles.footerTop}>
      <p>Lola Cake</p>
      <div style={styles.socials}>
        <a href="https://facebook.com" style={styles.socialLink}>
          Facebook
        </a>
        <a href="https://instagram.com" style={styles.socialLink}>
          Instagram
        </a>
        <a href="https://wa.me" style={styles.socialLink}>
          WhatsApp
        </a>
      </div>
    </div>
    <div style={styles.footerBottom}>
      <small>© 2024 Lola Cake - All rights reserved</small>
    </div>
  </footer>
);

const styles = {
  footer: {
    backgroundColor: "#f79520", // Warna latar belakang footer
    padding: "30px 40px", // Padding footer
    color: "#4d2c17", // Warna teks footer
    fontFamily: "'Poppins', sans-serif",
    fontSize: "16px",
  },
  footerTop: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: 12,
  },
  socials: {
    display: "flex",
    gap: 14,
  },
  socialLink: {
    color: "#4d2c17",
    textDecoration: "none",
    fontWeight: "600",
  },
  footerBottom: {
    borderTop: "1px solid #4d2c17", // Garis pemisah
    paddingTop: 10,
    textAlign: "center",
    fontSize: "12px", // Ukuran font untuk hak cipta
  },
};

export default Footer;
