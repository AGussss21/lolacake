import React from "react";

const FollowUs = () => (
  <section style={styles.section}>
    <h4>
      Follow <span style={{ fontWeight: "700", color: "#f79520" }}>Lola Cake</span>
    </h4>
    <div style={styles.followGrid}>
      {follows.map(({ image, title, subtitle }, i) => (
        <div key={i} style={styles.followItem}>
          <img src={image} alt={title} style={styles.followImage} />
          <p style={styles.followTitle}>{title}</p>
          <small style={styles.followSubtitle}>{subtitle}</small>
        </div>
      ))}
    </div>
  </section>
);

const follows = [
  {
    image:
      "https://images.unsplash.com/photo-1562440499-16581d07fbbd?auto=format&fit=crop&w=600&q=80",
    title: "Kue Tradisional",
    subtitle: "Cake, Brownies, Bolu",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80",
    title: "Snack Manis",
    subtitle: "Risoles, Panada, dll",
  },
  {
    image:
      "https://images.unsplash.com/photo-1605707735214-7d57e3f96d28?auto=format&fit=crop&w=600&q=80",
    title: "Parcel & Box",
    subtitle: "Untuk souvenir dan hantaran",
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
  followGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: 15,
  },
  followItem: {
    borderRadius: 20,
    overflow: "hidden",
    boxShadow: "0 0 20px rgb(0 0 0 / 0.1)",
    backgroundColor: "white",
    textAlign: "center",
    paddingBottom: 12,
  },
  followImage: {
    width: "100%",
    height: 160,
    objectFit: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  followTitle: {
    fontWeight: "700",
    fontSize: 18,
    marginTop: 12,
  },
  followSubtitle: {
    fontSize: 13,
    color: "#9c8b6c",
  },
};

export default FollowUs;
