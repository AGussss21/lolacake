import React from "react";
import logo from "../assets/navbar-brand.png"; // Ganti dengan path logo yang sesuai

const Navbar = ({ user }) => (
  <nav style={styles.navbar}>
    <div style={styles.logo}>
      <img
        src={logo}
        alt="Lola Cake Logo"
        style={{
          height: 110,
          width: "auto",
          objectFit: "contain",
        }}
      />
    </div>

    <ul style={styles.navMenu}>
      <li style={styles.navItem}>Home</li>
      <li style={{ ...styles.navItem, fontWeight: "bold" }}>Product</li>
      <li style={styles.navItem}>About Us</li>
      <li style={styles.navItem}>Contact</li>
    </ul>

    <div style={styles.navRight}>
      <button style={styles.cartBtn}>
        Cart <span style={{ marginLeft: 5 }}>🛒</span>
      </button>
      <div style={styles.user}>
        <div style={styles.userIcon}>👤</div>
        <span style={{ marginLeft: 5 }}>
          Hello, {user?.name || "Lola"} 
        </span>
        <span style={{ marginLeft: 5, cursor: "pointer" }}>▼</span>
      </div>
    </div>
  </nav>
);

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f79520",
    padding: "0 40px",
    height: "70px",
    fontFamily: "'Poppins', sans-serif",
    color: "#4d2c17",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: {
    fontSize: 24,
    fontWeight: "900",
    display: "flex",
    alignItems: "center",
  },
  navMenu: {
    listStyle: "none",
    display: "flex",
    gap: 40,
    margin: 0,
    padding: 0,
    fontWeight: "500",
    fontSize: 16,
  },
  navItem: { cursor: "pointer" },

  navRight: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    fontWeight: "600",
  },

  cartBtn: {
    backgroundColor: "#ffcc66",
    borderRadius: 20,
    padding: "6px 20px",
    border: "none",
    cursor: "pointer",
    fontWeight: "700",
  },

  user: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },

  userIcon: {
    borderRadius: "50%",
    backgroundColor: "#dcdcdc",
    width: 30,
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Navbar;
