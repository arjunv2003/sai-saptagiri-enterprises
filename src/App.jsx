import { useState, useEffect, useRef } from "react";
import logoImg from "./assets/saisapthagiri-logo.png"; // Place your logo as src/assets/saisapthagiri-logo.png
import { FaWhatsapp } from "react-icons/fa";
import founderImg from "./assets/founder.jpeg";
const NAV_LINKS = ["Home", "About", "Products", "Why Us", "Contact"];

const PRODUCTS = [
  {
    icon: "🌿",
    title: "High EC Coir Pith",
    desc: "Premium high electrical conductivity coir pith blocks, ideal for professional hydroponic and greenhouse growing systems demanding superior nutrient retention.",
    tag: "Coir Products",
  },
  {
    icon: "🪴",
    title: "Low EC Coir Pith",
    desc: "Ultra-low salt content coir pith for sensitive seedling propagation, young plant cultivation, and precision-controlled growing environments.",
    tag: "Coir Products",
  },
  {
    icon: "🌱",
    title: "Seedling Trays",
    desc: "Engineered coir-based seedling trays ensuring optimal root development, uniform germination rates, and seamless transplanting with zero root shock.",
    tag: "Propagation",
  },
  {
    icon: "🕸️",
    title: "Shade Nets",
    desc: "High-density polyethylene shade nets in multiple shade percentages. UV-stabilized for extended life, protecting crops from intense solar radiation.",
    tag: "Protected Cultivation",
  },
  {
    icon: "🏗️",
    title: "LD Covers",
    desc: "Premium low-density polyethylene covers for polyhouse and tunnel cultivation. Superior light transmission with thermal retention for year-round growing.",
    tag: "Protected Cultivation",
  },
];

const STATS = [
  { value: "17+", label: "Years of Excellence" },
  { value: "500+", label: "Happy Growers" },
  { value: "5", label: "Core Products" },
  { value: "100%", label: "Quality Assured" },
];

const WHY_US = [
  {
    icon: "⚗️",
    title: "Precision Manufacturing",
    desc: "Each coir product is crafted with consistent EC levels, tested batch by batch for quality you can trust season after season.",
  },
  {
    icon: "🌾",
    title: "Agricultural Heritage",
    desc: "Founded by growers, for growers. Since 2007, our deep-rooted understanding of farming challenges drives every product decision.",
  },
  {
    icon: "🚚",
    title: "Reliable Supply Chain",
    desc: "Consistent availability and prompt delivery across Andhra Pradesh and beyond. Your crop schedule won't wait — and neither do we.",
  },
  {
    icon: "🔬",
    title: "Research-Backed Solutions",
    desc: "Our products are continuously tested in real field conditions, ensuring they perform when it matters most.",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, entry.target.dataset.idx]));
          }
        });
      },
      { threshold: 0.15 }
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "'Georgia', 'Palatino', serif", background: "#0d1a0f", color: "#f0ede6", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        body { font-family: 'DM Sans', sans-serif; }

        .hero-bg {
          background: 
            radial-gradient(ellipse at 20% 50%, rgba(34, 85, 34, 0.35) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(180, 140, 40, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse at 60% 80%, rgba(20, 60, 20, 0.4) 0%, transparent 55%),
            linear-gradient(160deg, #0a1a0c 0%, #0d2010 40%, #0a1508 100%);
        }

        .grain::after {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 9999;
          opacity: 0.4;
        }

        .display-font { font-family: 'Cormorant Garamond', Georgia, serif; }

        .gold { color: #c9a84c; }
        .gold-bg { background: #c9a84c; }

        .btn-primary {
          background: linear-gradient(135deg, #c9a84c, #a8732a);
          color: #0d1a0f;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          letter-spacing: 0.08em;
          font-size: 0.78rem;
          text-transform: uppercase;
          padding: 14px 36px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #e8c96a, #c9a84c);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .btn-primary:hover::before { opacity: 1; }
        .btn-primary span { position: relative; z-index: 1; }

        .btn-outline {
          border: 1px solid rgba(201,168,76,0.5);
          color: #c9a84c;
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          letter-spacing: 0.08em;
          font-size: 0.78rem;
          text-transform: uppercase;
          padding: 13px 36px;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .btn-outline:hover {
          background: rgba(201,168,76,0.1);
          border-color: #c9a84c;
        }

        .nav-link {
          color: rgba(240,237,230,0.7);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.2s;
          background: none;
          border: none;
          padding: 4px 0;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #c9a84c;
          transition: width 0.3s ease;
        }
        .nav-link:hover { color: #c9a84c; }
        .nav-link:hover::after { width: 100%; }

        .card-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .card-animate.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .product-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          padding: 36px 32px;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        .product-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #c9a84c, transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .product-card:hover {
          background: rgba(201,168,76,0.06);
          border-color: rgba(201,168,76,0.3);
          transform: translateY(-4px);
        }
        .product-card:hover::before { opacity: 1; }

        .stat-item {
          border-left: 1px solid rgba(201,168,76,0.3);
          padding-left: 32px;
        }
        .stat-item:first-child { border-left: none; padding-left: 0; }

        .divider {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, #c9a84c, transparent);
          margin: 20px 0;
        }

        .leaf-pattern {
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(34,85,34,0.15) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(201,168,76,0.08) 0%, transparent 50%);
        }

        .section-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #c9a84c;
          font-weight: 500;
        }

        .contact-field {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          color: #f0ede6;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          padding: 14px 18px;
          width: 100%;
          outline: none;
          transition: border-color 0.2s;
        }
        .contact-field:focus { border-color: rgba(201,168,76,0.6); }
        .contact-field::placeholder { color: rgba(240,237,230,0.35); }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-text-1 { animation: fadeUp 0.8s ease 0.2s both; }
        .hero-text-2 { animation: fadeUp 0.8s ease 0.45s both; }
        .hero-text-3 { animation: fadeUp 0.8s ease 0.65s both; }
        .hero-text-4 { animation: fadeUp 0.8s ease 0.85s both; }
        .hero-text-5 { animation: fadeUp 0.8s ease 1.05s both; }

        @keyframes floatLeaf {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
        }
        .float { animation: floatLeaf 6s ease-in-out infinite; }
        .float-delay { animation: floatLeaf 6s ease-in-out 2s infinite; }

        .map-container {
          border: 1px solid rgba(201,168,76,0.2);
          overflow: hidden;
        }

        .footer-link {
          color: rgba(240,237,230,0.5);
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.2s;
          cursor: pointer;
          background: none;
          border: none;
        }
        .footer-link:hover { color: #c9a84c; }

        @media (max-width: 768px) {
          .hero-title { font-size: clamp(3rem, 12vw, 5rem) !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; gap: 24px !important; }
          .stat-item { border-left: none !important; padding-left: 0 !important; border-top: 1px solid rgba(201,168,76,0.3); padding-top: 24px !important; }
          .stat-item:first-child, .stat-item:nth-child(2) { border-top: none; padding-top: 0; }
          .products-grid { grid-template-columns: 1fr !important; }
          .why-grid { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? "14px 48px" : "24px 48px",
        background: scrolled ? "rgba(10,22,12,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.4s ease",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }} onClick={() => scrollTo("home")}>
          <img
            src={logoImg}
            alt="Sai Sapthagiri Enterprises Logo"
            style={{ width: 65, height: 65, objectFit: "contain", filter: "drop-shadow(0 0 8px rgba(201,168,76,0.3))" }}
          />
          <div>
            <div className="display-font" style={{ fontSize: "1.5rem", fontWeight: 600, lineHeight: 1.1, color: "#f0ede6" }}>
              Sai Sapthagiri
            </div>
            <div style={{ fontSize: "0.8rem", letterSpacing: "0.2em", color: "#c9a84c", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}>
              Enterprises
            </div>
          </div>
        </div>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 36, alignItems: "center" }} className="desktop-nav">
          {NAV_LINKS.map((l) => (
            <button key={l} className="nav-link" onClick={() => scrollTo(l.toLowerCase().replace(" ", "-"))}>
              {l}
            </button>
          ))}
          <button className="btn-primary" onClick={() => scrollTo("contact")} style={{ padding: "10px 24px" }}>
            <span>Get In Touch</span>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          background: "none", border: "none", cursor: "pointer",
          display: "none", flexDirection: "column", gap: 5, padding: 4,
        }} className="hamburger">
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              width: 24, height: 1.5, background: "#f0ede6", display: "block",
              transition: "all 0.3s",
              transform: menuOpen
                ? i === 0 ? "rotate(45deg) translate(4.5px, 4.5px)"
                  : i === 2 ? "rotate(-45deg) translate(4.5px, -4.5px)"
                  : "scaleX(0)"
                : "none"
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 99,
          background: "rgba(10,22,12,0.98)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          gap: 32,
        }}>
          {NAV_LINKS.map(l => (
            <button key={l} className="display-font" onClick={() => scrollTo(l.toLowerCase().replace(" ", "-"))} style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: "2.5rem", color: "#f0ede6", fontWeight: 300,
            }}>{l}</button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="home" className="hero-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", padding: "120px 48px 80px" }}>
        {/* Decorative logo watermark */}
        <div style={{ position: "absolute", right: "6%", top: "50%", transform: "translateY(-50%)", opacity: 0.12 }} className="float">
          <img src={logoImg} alt="" style={{ width: 320, height: 320, objectFit: "contain" }} />
        </div>
        {/* <div style={{ position: "absolute", right: "25%", bottom: "25%", fontSize: "5rem", opacity: 0.05 }} className="float-delay">🌱</div> */}
        {/* <div style={{ position: "absolute", left: "5%", bottom: "30%", fontSize: "6rem", opacity: 0.04 }}>🍃</div> */}

        <div style={{ maxWidth: 1200, width: "100%", margin: "0 auto" }}>
          <div className="hero-text-1">
            <span className="section-tag">Est. 2007 · Andhra Pradesh</span>
          </div>

          <h1 className="hero-text-2 display-font hero-title" style={{
            fontSize: "clamp(4rem, 8vw, 7rem)", fontWeight: 300, lineHeight: 1.05,
            marginTop: 24, marginBottom: 0, letterSpacing: "-0.01em",
          }}>
            Growing <em style={{ color: "#c9a84c", fontStyle: "italic" }}>Better</em>
            <br />Starts Here.
          </h1>

          <p className="hero-text-3" style={{
            fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(240,237,230,0.65)",
            maxWidth: 520, marginTop: 28, fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
          }}>
            Premium coir pith, seedling trays, shade nets & LD covers — engineered for modern agriculture and trusted by growers across South India since 2007.
          </p>

          <div className="hero-text-4" style={{ display: "flex", gap: 16, marginTop: 44, flexWrap: "wrap" }}>
            <button className="btn-primary" onClick={() => scrollTo("products")}>
              <span>Explore Products</span>
            </button>
            <button className="btn-outline" onClick={() => scrollTo("contact")}>
              Contact Us
            </button>
          </div>

          {/* Stats bar */}
          <div className="hero-text-5 stats-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0, marginTop: 80,
            borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 40,
          }}>
            {STATS.map((s, i) => (
              <div key={i} className="stat-item">
                <div className="display-font" style={{ fontSize: "3rem", fontWeight: 600, color: "#c9a84c", lineHeight: 1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: "0.8rem", color: "rgba(240,237,230,0.5)", marginTop: 8, fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.05em" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "120px 48px", background: "#0a1508" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            {/* Left: Visual */}
            <div style={{ position: "relative" }}>
              <div style={{
                background: "linear-gradient(135deg, rgba(34,85,34,0.25), rgba(201,168,76,0.1))",
                border: "1px solid rgba(201,168,76,0.2)",
                padding: "60px 48px",
                position: "relative",
              }}>
                <div className="display-font" style={{ fontSize: "6rem", fontWeight: 300, color: "rgba(201,168,76,0.15)", lineHeight: 1, position: "absolute", top: 20, right: 24 }}>
                  '07
                </div>
                <div className="display-font" style={{ fontSize: "1.2rem", fontStyle: "italic", color: "rgba(240,237,230,0.5)", marginBottom: 32 }}>
                  "Rooted in the soil,<br />driven by science."
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {["Coir Pith Manufacturing", "Shade Net Supply", "LD Cover Distribution", "Seedling Tray Production"].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{ width: 6, height: 6, background: "#c9a84c", borderRadius: "50%", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.9rem", color: "rgba(240,237,230,0.7)", fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{
                position: "absolute", bottom: -20, right: -20,
                width: 100, height: 100,
                background: "linear-gradient(135deg, #c9a84c22, #c9a84c44)",
                border: "1px solid rgba(201,168,76,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "2.5rem",
              }}>🌾</div>
            </div>

            {/* Right: Text */}
            <div>
              <span className="section-tag">Our Story</span>
              <div className="divider" />
              <h2 className="display-font" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 400, lineHeight: 1.2, marginBottom: 24 }}>
                A Trusted Partner in Modern Agriculture
              </h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "rgba(240,237,230,0.65)", fontFamily: "'DM Sans', sans-serif", fontWeight: 300, marginBottom: 20 }}>
                Since 2007, Sai Sapthagiri Enterprises has been a trusted partner in modern agriculture and horticulture. We manufacture premium high and low EC coir pith products and seedling trays, while supplying top-tier shade nets and LD covers to support protected cultivation.
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "rgba(240,237,230,0.65)", fontFamily: "'DM Sans', sans-serif", fontWeight: 300, marginBottom: 36 }}>
                Driven by quality and years of expertise, we empower growers with the reliable solutions they need to thrive — from seed to harvest, we're with you every step of the way.
              </p>
              <div style={{ display: "flex", gap: 48 }}>
                <div>
                  <div className="display-font" style={{ fontSize: "2.2rem", color: "#c9a84c", fontWeight: 600 }}>Sri Satya Sai</div>
                  <div style={{ fontSize: "0.8rem", color: "rgba(240,237,230,0.45)", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.08em", marginTop: 4 }}>District, Andhra Pradesh</div>
                </div>
                <div>
                  <div className="display-font" style={{ fontSize: "2.2rem", color: "#c9a84c", fontWeight: 600 }}>ISO</div>
                  <div style={{ fontSize: "0.8rem", color: "rgba(240,237,230,0.45)", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.08em", marginTop: 4 }}>Quality Standards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* FOUNDER */}
<section
  id="founder"
  style={{
    padding: "120px 48px",
    background:
      "radial-gradient(circle at 85% 20%, rgba(201,168,76,0.08), transparent 35%), linear-gradient(145deg, #0d1a0f 0%, #081208 100%)",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* Decorative background */}
  <div
    style={{
      position: "absolute",
      width: 420,
      height: 420,
      borderRadius: "50%",
      background: "rgba(34,85,34,0.12)",
      filter: "blur(20px)",
      top: -180,
      right: -140,
      pointerEvents: "none",
    }}
  />

  <div
    style={{
      maxWidth: 1200,
      margin: "0 auto",
      position: "relative",
      zIndex: 1,
    }}
  >
    <div
      className="founder-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(300px, 0.9fr) minmax(380px, 1.1fr)",
        gap: 90,
        alignItems: "center",
      }}
    >
      {/* Founder image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 470,
          margin: "0 auto",
        }}
      >
        {/* Top-left gold corner */}
        <div
          style={{
            position: "absolute",
            top: -18,
            left: -18,
            width: 90,
            height: 90,
            borderTop: "2px solid #c9a84c",
            borderLeft: "2px solid #c9a84c",
            zIndex: 2,
          }}
        />

        {/* Bottom-right gold corner */}
        <div
          style={{
            position: "absolute",
            right: -18,
            bottom: -18,
            width: 90,
            height: 90,
            borderRight: "2px solid #c9a84c",
            borderBottom: "2px solid #c9a84c",
            zIndex: 2,
          }}
        />

        <div
          style={{
            padding: 14,
            border: "1px solid rgba(201,168,76,0.35)",
            background:
              "linear-gradient(145deg, rgba(201,168,76,0.12), rgba(34,85,34,0.18))",
            boxShadow: "0 30px 70px rgba(0,0,0,0.35)",
          }}
        >
          <div style={{ overflow: "hidden" }}>
            <img
              src={founderImg}
              alt="Founder of Sai Sapthagiri Enterprises"
              style={{
                width: "100%",
                height: 560,
                display: "block",
                objectFit: "cover",
                objectPosition: "center top",
                filter: "saturate(0.9) contrast(1.04)",
              }}
            />
          </div>
        </div>

        {/* Experience badge */}
        <div
          className="founder-badge"
          style={{
            position: "absolute",
            right: -38,
            bottom: 52,
            minWidth: 155,
            padding: "20px 24px",
            background: "linear-gradient(135deg, #c9a84c, #a8732a)",
            color: "#0a1508",
            textAlign: "center",
            boxShadow: "0 18px 45px rgba(0,0,0,0.4)",
            zIndex: 3,
          }}
        >
          <div
            className="display-font"
            style={{
              fontSize: "2.5rem",
              lineHeight: 1,
              fontWeight: 700,
            }}
          >
            17+
          </div>

          <div
            style={{
              marginTop: 7,
              fontSize: "0.67rem",
              lineHeight: 1.4,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Years of
            <br />
            Experience
          </div>
        </div>
      </div>

      {/* Founder content */}
      <div>
        <span className="section-tag">Meet Our Founder</span>

        <div className="divider" />

        <h2
          className="display-font"
          style={{
            fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
            fontWeight: 400,
            lineHeight: 1.12,
            marginBottom: 26,
          }}
        >
          A Vision Rooted in
          <br />
          <em
            style={{
              color: "#c9a84c",
              fontWeight: 400,
            }}
          >
            Agriculture
          </em>
        </h2>

        <p
          style={{
            fontSize: "0.97rem",
            lineHeight: 1.9,
            color: "rgba(240,237,230,0.65)",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            marginBottom: 20,
          }}
        >
          Founded with a deep understanding of agriculture and the challenges
          faced by growers, Sai Sapthagiri Enterprises was established to
          provide dependable, high-quality solutions for modern cultivation.
        </p>

        <p
          style={{
            fontSize: "0.97rem",
            lineHeight: 1.9,
            color: "rgba(240,237,230,0.65)",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            marginBottom: 34,
          }}
        >
          Through years of dedication, field experience and a commitment to
          quality, our founder has guided the company from a local agricultural
          enterprise into a trusted partner for growers across South India.
        </p>

        {/* Founder quote */}
        <div
          style={{
            position: "relative",
            padding: "28px 30px 28px 34px",
            background: "rgba(201,168,76,0.055)",
            borderLeft: "2px solid #c9a84c",
            marginBottom: 34,
          }}
        >
          <div
            className="display-font"
            style={{
              position: "absolute",
              top: -8,
              left: 18,
              fontSize: "4.5rem",
              lineHeight: 1,
              color: "rgba(201,168,76,0.18)",
            }}
          >
            “
          </div>

          <p
            className="display-font"
            style={{
              position: "relative",
              zIndex: 1,
              fontSize: "1.25rem",
              lineHeight: 1.65,
              fontStyle: "italic",
              color: "rgba(240,237,230,0.82)",
            }}
          >
            Our goal has always been simple — provide growers with products
            they can trust, season after season.
          </p>
        </div>

        {/* Founder name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div
            style={{
              width: 42,
              height: 1,
              background: "#c9a84c",
              flexShrink: 0,
            }}
          />

          <div>
            <h3
              className="display-font"
              style={{
                fontSize: "1.8rem",
                fontWeight: 600,
                color: "#f0ede6",
                marginBottom: 3,
              }}
            >
              Mr. Anjinappa
            </h3>

            <p
              style={{
                fontSize: "0.7rem",
                color: "#c9a84c",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Founder & Managing Director
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Responsive styles only for changing inline layout */}
  <style>{`
    @media (max-width: 900px) {
      .founder-grid {
        grid-template-columns: 1fr !important;
        gap: 70px !important;
      }

      .founder-badge {
        right: 18px !important;
        bottom: -28px !important;
      }
    }

    @media (max-width: 768px) {
      #founder {
        padding-top: 90px !important;
        padding-bottom: 90px !important;
      }

      #founder img {
        height: 460px !important;
      }
    }

    @media (max-width: 480px) {
      #founder img {
        height: 390px !important;
      }

      .founder-badge {
        min-width: 130px !important;
        padding: 16px 18px !important;
        right: 10px !important;
      }
    }
  `}</style>
</section>
      {/* PRODUCTS */}
      <section id="products" style={{ padding: "120px 48px", background: "#0d1a0f" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <span className="section-tag">What We Offer</span>
            <div style={{ width: 60, height: 1, background: "linear-gradient(90deg, transparent, #c9a84c, transparent)", margin: "20px auto" }} />
            <h2 className="display-font" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 400, lineHeight: 1.2 }}>
              Our Product Range
            </h2>
            <p style={{ fontSize: "0.95rem", color: "rgba(240,237,230,0.5)", maxWidth: 500, margin: "16px auto 0", lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
              From substrate to structure, everything your crop needs to flourish.
            </p>
          </div>

          <div className="products-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
            {PRODUCTS.map((p, i) => (
              <div
                key={i}
                ref={el => cardRefs.current[i] = el}
                data-idx={String(i)}
                className={`product-card card-animate${visibleCards.has(String(i)) ? " visible" : ""}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div style={{ fontSize: "2.2rem", marginBottom: 20 }}>{p.icon}</div>
                <div style={{
                  fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase",
                  color: "#c9a84c", fontFamily: "'DM Sans', sans-serif", marginBottom: 12, fontWeight: 500,
                }}>{p.tag}</div>
                <h3 className="display-font" style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: 14, color: "#f0ede6" }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: "0.87rem", lineHeight: 1.8, color: "rgba(240,237,230,0.55)", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="leaf-pattern" style={{ padding: "120px 48px", background: "#0a1508", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 72, flexWrap: "wrap", gap: 24 }}>
            <div>
              <span className="section-tag">Our Difference</span>
              <div className="divider" />
              <h2 className="display-font" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 400, lineHeight: 1.2, maxWidth: 500 }}>
                Why Growers Choose<br /><em style={{ color: "#c9a84c" }}>Sai Sapthagiri</em>
              </h2>
            </div>
            <button className="btn-primary" onClick={() => scrollTo("contact")}>
              <span>Partner With Us →</span>
            </button>
          </div>

          <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }}>
            {WHY_US.map((w, i) => (
              <div
                key={i}
                ref={el => cardRefs.current[PRODUCTS.length + i] = el}
                data-idx={String(PRODUCTS.length + i)}
                className={`card-animate${visibleCards.has(String(PRODUCTS.length + i)) ? " visible" : ""}`}
                style={{
                  padding: "44px 40px",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: 20 }}>{w.icon}</div>
                <h3 className="display-font" style={{ fontSize: "1.4rem", fontWeight: 600, marginBottom: 12 }}>{w.title}</h3>
                <p style={{ fontSize: "0.87rem", lineHeight: 1.8, color: "rgba(240,237,230,0.55)", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <div style={{
        background: "linear-gradient(135deg, #c9a84c 0%, #a8732a 100%)",
        padding: "60px 48px",
        textAlign: "center",
      }}>
        <h2 className="display-font" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#0a1508", fontWeight: 600, marginBottom: 12 }}>
          Ready to Elevate Your Harvest?
        </h2>
        <p style={{ fontSize: "1rem", color: "rgba(10,21,8,0.7)", marginBottom: 32, fontFamily: "'DM Sans', sans-serif" }}>
          Speak with our agricultural specialists today.
        </p>
        <a href="tel:+919676709969" style={{ textDecoration: "none" }}>
          <button style={{
            background: "#0a1508", color: "#c9a84c", border: "none", cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif", fontWeight: 500, letterSpacing: "0.08em",
            fontSize: "0.85rem", textTransform: "uppercase", padding: "16px 48px",
            transition: "all 0.3s",
          }}>
            +91 9676709969
          </button>
        </a>
      </div>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "120px 48px", background: "#0d1a0f" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <span className="section-tag">Get In Touch</span>
            <div style={{ width: 60, height: 1, background: "linear-gradient(90deg, transparent, #c9a84c, transparent)", margin: "20px auto" }} />
            <h2 className="display-font" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 400 }}>
              We're Here to Help
            </h2>
          </div>

          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
            {/* Contact Info */}
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
                {[
                  { icon: "📍", label: "Our Location", value: "Sy No: 92-2A & 92-1, Kadiri Road, Cheekatmanpalli, Sri Satya Sai Dist, AP – 515571" },
                  { icon: "📞", label: "Phone", value: "+91 9676709969", href: "tel:+919676709969" },
                  { icon: "✉️", label: "Email", value: "vijay@saisapthagiri.co.in", href: "mailto:vijay@saisapthagiri.co.in" },
                ].map((c, i) => (
                  <div key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                    <div style={{
                      width: 48, height: 48, flexShrink: 0,
                      background: "rgba(201,168,76,0.1)",
                      border: "1px solid rgba(201,168,76,0.3)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1.2rem",
                    }}>{c.icon}</div>
                    <div>
                      <div style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#c9a84c", fontFamily: "'DM Sans', sans-serif", marginBottom: 6 }}>
                        {c.label}
                      </div>
                      {c.href ? (
                        <a href={c.href} style={{ color: "#f0ede6", textDecoration: "none", fontSize: "0.95rem", fontFamily: "'DM Sans', sans-serif" }}>
                          {c.value}
                        </a>
                      ) : (
                        <p style={{ color: "rgba(240,237,230,0.75)", fontSize: "0.9rem", lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
                          {c.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="map-container" style={{ marginTop: 48 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866!2d78.2!3d14.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI0JzAwLjAiTiA3OMKwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="220"
                  style={{ border: 0, display: "block", filter: "invert(90%) hue-rotate(160deg) brightness(0.85)" }}
                  allowFullScreen
                  loading="lazy"
                  title="Sai Sapthagiri Location"
                />
              </div>
              <a
                href="https://maps.app.goo.gl/vj1N8zUbv4SHk9PRA"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8, marginTop: 12,
                  color: "#c9a84c", fontSize: "0.8rem", textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.05em",
                }}
              >
                Open in Google Maps →
              </a>
            </div>

            {/* Contact Form */}
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <input className="contact-field" placeholder="Your Name" type="text" />
                  <input className="contact-field" placeholder="Phone Number" type="tel" />
                </div>
                <input className="contact-field" placeholder="Email Address" type="email" />
                <select className="contact-field" style={{ cursor: "pointer" }}>
                  <option value="" style={{ background: "#0d1a0f" }}>Product Interest</option>
                  <option style={{ background: "#0d1a0f" }}>High EC Coir Pith</option>
                  <option style={{ background: "#0d1a0f" }}>Low EC Coir Pith</option>
                  <option style={{ background: "#0d1a0f" }}>Seedling Trays</option>
                  <option style={{ background: "#0d1a0f" }}>Shade Nets</option>
                  <option style={{ background: "#0d1a0f" }}>LD Covers</option>
                  <option style={{ background: "#0d1a0f" }}>General Inquiry</option>
                </select>
                <textarea className="contact-field" rows={5} placeholder="Tell us about your requirements..." style={{ resize: "vertical" }} />
                <button className="btn-primary" style={{ width: "100%", padding: "16px" }}>
                  <span>Send Inquiry →</span>
                </button>
              </div>

              <div style={{
                marginTop: 32, padding: "20px 24px",
                background: "rgba(201,168,76,0.06)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}>
                <div style={{ fontSize: "0.8rem", color: "rgba(240,237,230,0.5)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>
                  💬 <strong style={{ color: "#c9a84c" }}>Quick Response Guarantee</strong><br />
                  Our team typically responds within 4 business hours. For urgent inquiries, call us directly.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#070f08",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "60px 48px 32px",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 40, marginBottom: 48 }}>
            <div style={{ maxWidth: 320 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <img
                  src={logoImg}
                  alt="Sai Sapthagiri Enterprises"
                  style={{ width: 48, height: 48, objectFit: "contain", filter: "drop-shadow(0 0 6px rgba(201,168,76,0.25))" }}
                />
                <div className="display-font" style={{ fontSize: "1rem", fontWeight: 600 }}>Sai Sapthagiri Enterprises</div>
              </div>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "rgba(240,237,230,0.4)", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
                Premium agricultural inputs for modern protected cultivation. Trusted by growers since 2007.
              </p>
            </div>

            <div style={{ display: "flex", gap: 60, flexWrap: "wrap" }}>
              <div>
                <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", fontFamily: "'DM Sans', sans-serif", marginBottom: 16 }}>Products</div>
                {["High EC Coir Pith", "Low EC Coir Pith", "Seedling Trays", "Shade Nets", "LD Covers"].map(p => (
                  <div key={p} style={{ marginBottom: 10 }}>
                    <button className="footer-link" onClick={() => scrollTo("products")}>{p}</button>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", fontFamily: "'DM Sans', sans-serif", marginBottom: 16 }}>Company</div>
                {["About Us", "Why Us", "Contact"].map(p => (
                  <div key={p} style={{ marginBottom: 10 }}>
                    <button className="footer-link" onClick={() => scrollTo(p.toLowerCase().replace(" ", "-"))}>{p}</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 28,
            display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16,
          }}>
            <div style={{ fontSize: "0.78rem", color: "rgba(240,237,230,0.3)", fontFamily: "'DM Sans', sans-serif" }}>
              © {new Date().getFullYear()} Sai Sapthagiri Enterprises. All rights reserved.
            </div>
            <div style={{ fontSize: "0.78rem", color: "rgba(240,237,230,0.3)", fontFamily: "'DM Sans', sans-serif" }}>
              Cheekatmanpalli, Sri Satya Sai Dist, Andhra Pradesh
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile nav toggle CSS */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          nav { padding-left: 24px !important; padding-right: 24px !important; }
          section, footer { padding-left: 24px !important; padding-right: 24px !important; }
          .cta-band { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
      {/* WhatsApp Floating Button */}
<div
  style={{
    position: "fixed",
    right: "24px",
    bottom: "24px",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    gap: "12px",
  }}
>
  <div
    style={{
      background: "#ffffff",
      color: "#222",
      padding: "10px 16px",
      borderRadius: "30px",
      fontSize: "0.85rem",
      fontWeight: 500,
      fontFamily: "'DM Sans', sans-serif",
      boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
      whiteSpace: "nowrap",
    }}
  >
    Chat with us on WhatsApp
  </div>

  <a
    href="https://wa.me/919676709969?text=Hi%20Sai%20Sapthagiri%20Enterprises,%20I%20would%20like%20to%20know%20more%20about%20your%20products."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    style={{
      width: "55px",
      height: "55px",
      borderRadius: "50%",
      background: "#25D366",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      boxShadow: "0 10px 30px rgba(37, 211, 102, 0.45)",
      animation: "whatsappPulse 2s infinite",
    }}
  >
    <FaWhatsapp size={36} color="#fff" />
  </a>
</div>

<style>{`
  @keyframes whatsappPulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6);
    }
    70% {
      transform: scale(1.05);
      box-shadow: 0 0 0 18px rgba(37, 211, 102, 0);
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
    }
  }

  @media (max-width: 768px) {
    .whatsapp-label {
      display: none;
    }
  }
`}</style>
    </div>
    
  );
}