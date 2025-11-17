import React, { useState } from "react";
import brownies from "..//assets/brownies.png";
import boluzebra from "..//assets/boluzebra.png";
import barongko from "..//assets/barongko.png";
import homepagebolu from "..//assets/homepagebolu.png";

const products = [
  {
    id: "brownies",
    name: "Brownies",
    image:
      brownies,
    desc: [
      "Coklat dan vanilla lembut",
      "Aroma wangi",
      "Hangat & Nikmat",
      "Tekstur Halus",
    ],
    price: "75.000",
  },
  {
    id: "bolu-zebra",
    name: "Bolu Zebra",
    image:
      boluzebra,
    desc: [
      "Coklat dan vanilla lembut",
      "Aroma wangi",
      "Hangat & Nikmat",
      "Tekstur Halus",
    ],
    price: "75.000",
  },
  {
    id: "Tumpeng",
    name: "Tumpeng",
    image:
      "https://images.unsplash.com/photo-1562440499-16581d07fbbd?auto=format&fit=crop&w=600&q=80",
    desc: [
      "Isi daging ikan lezat",
      "Renya di luar",
      "Sangat gurih",
      "Cocok untuk snack",
    ],
    price: "50.000",
  },
  {
    id: "risoles",
    name: "Risoles",
    image:
      "https://images.unsplash.com/photo-1605707735214-7d57e3f96d28?auto=format&fit=crop&w=600&q=80",
    desc: [
      "Isian ragam sayuran segar",
      "Lembut dan gurih",
      "Pas untuk cemilan",
      "Tekstur yang renyah",
    ],
    price: "60.000",
  },
  {
    id: "barongko",
    name: "Barongko",
    image:
      barongko,
    desc: [
      "Manis legit alami",
      "Tekstur lembut",
      "Terbuat dari pisang",
      "Rasa tradisional",
    ],
    price: "45.000",
  },
];

const testimonials = [
  {
    id: 1,
    text: `Proses pemesanan sangat mudah, admin sabar bantu pilih ukuran dan varian. Kue datang tepat waktu dengan packaging aman. Rasa kuenya moist dan manisnya pas, Worth it!`,
    name: "Ananditha S.",
    position: "Senior Consultant",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 2,
    text: `Tampilannya cantik, rasanya pas, pengiriman cepat banget. Jadi langganan tiap acara!`,
    name: "Ananditha S.",
    position: "Senior Consultant",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const howWeWorkItems = [
  {
    icon: "📦",
    title: "Lihat Product",
    desc: "Pilih produk favorite melalui website kami",
  },
  {
    icon: "💬",
    title: "Pilih Pesanan",
    desc: "Pilih varian, ukuran dan katakan harapanmu",
  },
  {
    icon: "🚚",
    title: "Pesan & Nikmati",
    desc: "Kami antar produk langsung ke tanganmu",
  },
];

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

const Navbar = () => (
  <nav style={styles.navbar}>
    <div style={styles.logo}>
      <span style={{ fontWeight: "bold", fontSize: 22, color: "#7b4e19" }}>
        Lola Cake
      </span>
      <span style={{ marginLeft: 6, color: "#7bb661", fontSize: 20 }}>🌿</span>
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
        <span style={{ marginLeft: 5 }}>Hello, Lola</span>
        <span style={{ marginLeft: 5, cursor: "pointer" }}>▼</span>
      </div>
    </div>
  </nav>
);

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
        src={homepagebolu}
        style={styles.heroImage}
      />
    </div>
  </section>
);

const BestSeller = () => {
  const [selected, setSelected] = useState(products[0].id);
  const product = products.find((p) => p.id === selected);
  return (
    <section style={styles.section}>
      <small style={styles.subTitle}>FAVORIT SEPANJANG WAKTU</small>
      <h2 style={styles.sectionTitle}>Best Seller</h2>
      <div style={styles.bestSellerWrapper}>
        <div style={styles.productTabs}>
          {products.map((p) => (
            <button
              key={p.id}
              style={{
                ...styles.productTab,
                backgroundColor: selected === p.id ? "#e88b32" : "white",
                color: selected === p.id ? "white" : "#4d2c17",
                fontWeight: "700",
                borderRadius: "20px 0 0 20px",
              }}
              onClick={() => setSelected(p.id)}
            >
              {p.name}
            </button>
          ))}
        </div>
        <img src={product.image} alt={product.name} style={styles.productImage} />
        <div style={styles.productDetail}>
          <h3 style={styles.productName}>{product.name}</h3>
          <ul style={styles.productDescList}>
            {product.desc.map((d, i) => (
              <li key={i} style={styles.productDescItem}>
                ✔️ {d}
              </li>
            ))}
          </ul>
          <p style={styles.price}>Rp. <span style={{color: "#f01241", fontWeight: "900"}}>{product.price}</span></p>
          <button style={styles.detailBtn}>Product</button>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => (
  <section style={{...styles.section, backgroundColor:"#fff4db"}}>
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

const Testimonials = () => (
  <section style={styles.section}>
    <h2 style={styles.sectionTitle}>Apa Kata Mereka?</h2>
    <div style={styles.testimonialWrapper}>
      {testimonials.map(({ id, text, name, position, img, rating }) => (
        <div key={id} style={styles.testimonialCard}>
          <p style={styles.testimonialText}>"{text}"</p>
          <div style={styles.testimonialUser}>
            <img src={img} alt={name} style={styles.testimonialImg} />
            <div>
              <p style={styles.testimonialName}>{name}</p>
              <small style={styles.testimonialPosition}>{position}</small>
            </div>
            <div style={{ marginLeft: "auto", fontWeight:"bold", color:"#f9b342" }}>
              {"⭐".repeat(rating)}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const HowWeWork = () => (
  <section style={{ ...styles.section, backgroundColor: "#fff4db" }}>
    <h2 style={styles.sectionTitle}>Cara Kami Bekerja</h2>
    <div style={styles.howWeWorkWrapper}>
      {howWeWorkItems.map(({ icon, title, desc }, i) => (
        <div key={i} style={styles.howWeWorkItem}>
          <div style={styles.howIcon}>{icon}</div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const FollowUs = () => (
  <section style={styles.section}>
    <h4>Follow <span style={{ fontWeight:"700", color:"#f79520" }}>Lola Cake</span></h4>
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

const Footer = () => (
  <footer style={styles.footer}>
    <div style={styles.footerTop}>
      <p>Lola Cake</p>
      <div style={styles.socials}>
        <a href="#" style={styles.socialLink}>Facebook</a>
        <a href="#" style={styles.socialLink}>Instagram</a>
        <a href="#" style={styles.socialLink}>WhatsApp</a>
      </div>
    </div>
    <div style={styles.footerBottom}>
      <small>© 2024 Lola Cake - All rights reserved</small>
    </div>
  </footer>
);


export default function LolaCake() {
  return (
    <>
      <Navbar />
      <Hero />
      <BestSeller />
      <WhyChooseUs />
      <Testimonials />
      <HowWeWork />
      <FollowUs />
      <Footer />
    </>
  );
}

// --- Styles ---
const styles = {
  /* Navbar */
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f79520",
    padding: "15px 40px",
    fontFamily: "'Poppins', sans-serif",
    color: "#4d2c17",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: { fontSize: 24, fontWeight: "900", display: "flex", alignItems:"center" },
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
  user: { display: "flex", alignItems: "center", gap: 8 },
  userIcon: {
    borderRadius: "50%",
    backgroundColor: "#dcdcdc",
    width: 30,
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  /* Hero */
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

  /* Section general */
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

  /* Best Seller */
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

  /* Why choose us */
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

  /* Testimonials */
  testimonialWrapper: {
    display: "flex",
    gap: 24,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  testimonialCard: {
    backgroundColor: "#fff2bb",
    borderRadius: 16,
    width: 320,
    padding: 25,
    boxShadow: "0 6px 18px rgb(0 0 0 / 0.1)",
  },
  testimonialText: {
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 16,
    fontStyle: "italic",
  },
  testimonialUser: {
    display: "flex",
    alignItems: "center",
    gap: 20,
  },
  testimonialImg: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid white",
    boxShadow: "0 0 0 3px #ddb64f inset",
  },
  testimonialName: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 3,
  },
  testimonialPosition: {
    fontSize: 12,
    fontWeight: "400",
    color: "#f08723",
  },

  /* How we work */
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

  /* Follow us */
  followGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
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

  /* Footer */
  footer: {
    backgroundColor: "#f79520",
    padding: "30px 40px",
    color: "#4d2c17",
    fontFamily: "'Poppins', sans-serif",
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
    borderTop: "1px solid #4d2c17",
    paddingTop: 10,
    textAlign: "center",
    fontSize: 12,
  },
};
