import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BestSeller = ({ products }) => {
  const [selected, setSelected] = useState(products[0].id);
  const product = products.find((p) => p.id === selected);

  return (
    <section style={styles.section}>
      <small style={styles.subTitle}>FAVORIT SEPANJANG MASA</small>
      <h2 style={styles.sectionTitle}>Best Seller</h2>

      <div style={styles.bestSellerWrapper}>
        {/* BUTTON LIST */}
        <div style={styles.productTabs}>
          {products.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelected(p.id)}
              style={{
                ...styles.productTab,
                backgroundColor: selected === p.id ? "#e88b32" : "#fff",
                color: selected === p.id ? "#fff" : "#4d2c17",
              }}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* ANIMATED IMAGE */}
        <AnimatePresence mode="wait">
          <motion.img
            key={product.id + "_img"}
            src={product.image}
            alt={product.name}
            style={styles.productImage}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
          />
        </AnimatePresence>

        {/* ANIMATED DETAIL */}
        <AnimatePresence mode="wait">
          <motion.div
            key={product.id + "_detail"}
            style={styles.productDetail}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.35 }}
          >
            <h3 style={styles.productName}>{product.name}</h3>

            <ul style={styles.productDescList}>
              {product.desc.map((d, i) => (
                <li key={i} style={styles.productDescItem}>
                  ✔️ {d}
                </li>
              ))}
            </ul>

            <p style={styles.price}>
              Rp. <span style={{ color: "#f01241", fontWeight: "900" }}>{product.price}</span>
            </p>

            <button style={styles.detailBtn}>Lihat Produk</button>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "60px 70px",
    fontFamily: "'Poppins', sans-serif",
    color: "#4d2c17",
    maxWidth: 1200,
    margin: "0 auto",
  },
  subTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: "#f01241",
    marginBottom: 10,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  sectionTitle: {
    fontSize: 36,
    fontWeight: "900",
    fontFamily: "'Fredoka One', cursive",
    marginBottom: 40,
  },
  bestSellerWrapper: {
    display: "flex",
    alignItems: "center",
    borderRadius: 20,
    boxShadow: "0 0 30px rgb(0 0 0 / 0.08)",
    backgroundColor: "white",
    padding: 20,
    gap: 25,
  },
  productTabs: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    backgroundColor: "#4d2c17",
    borderRadius: 20,
    padding: 10,
    minWidth: 150,
  },
  productTab: {
    border: "none",
    padding: "10px 24px",
    fontSize: 14,
    cursor: "pointer",
    textAlign: "left",
    outline: "none",
  },
  productImage: {
    borderRadius: 20,
    width: 280,
    height: 180,
    objectFit: "cover",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
  },
  productDetail: {
    flex: 1,
    backgroundColor: "#fff4db",
    borderRadius: 25,
    padding: 25,
    border: "3px solid #f2983c",
    display: "flex",
    flexDirection: "column",
  },
  productName: {
    fontSize: 24,
    fontWeight: "900",
    fontFamily: "'Fredoka One', cursive",
    marginBottom: 20,
  },
  productDescList: {
    listStyle: "none",
    paddingLeft: 0,
    marginBottom: 25,
    fontSize: 14,
    fontWeight: "600",
    color: "#798e3a",
  },
  productDescItem: {
    marginBottom: 8,
  },
  price: {
    fontSize: 32,
    fontWeight: "900",
    marginBottom: 25,
  },
  detailBtn: {
    fontWeight: "700",
    fontSize: 16,
    color: "white",
    backgroundColor: "#4d2c17",
    border: "none",
    borderRadius: 16,
    padding: "10px 40px",
    cursor: "pointer",
    width: "fit-content",
  },
};

export default BestSeller;
