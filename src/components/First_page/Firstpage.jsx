import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Firstpage.component.css";
import blogImg from "../../assets/blog.png";
import { FiArrowRight, FiShield, FiClock, FiDollarSign, FiUsers } from "react-icons/fi";

const roles = [
  { key: "Builder", path: "/builder", icon: "🏗", desc: "Manage construction projects and teams", color: "#7b2cbf" },
  { key: "Dealer", path: "/dealer", icon: "📦", desc: "Supply materials and manage inventory", color: "#e67e22" },
  { key: "Contractor", path: "/contractor", icon: "⚙️", desc: "Find projects and manage contracts", color: "#2ecc71" },
  { key: "Client", path: "/client", icon: "🏠", desc: "Post projects and hire professionals", color: "#3498db" },
  { key: "Skilled Labourer", path: "/skilledlabourer", icon: "🔧", desc: "Showcase skills and find work", color: "#e74c3c" },
  { key: "Labourer", path: "/labourer", icon: "👷", desc: "Track attendance and find contractors", color: "#9b59b6" },
];

const stats = [
  { num: "500+", label: "Verified Professionals" },
  { num: "200+", label: "Active Projects" },
  { num: "98%", label: "Satisfaction Rate" },
  { num: "12+", label: "Cities Covered" },
];

const features = [
  { icon: <FiShield />, title: "Verified Profiles", desc: "All professionals are thoroughly verified for authenticity." },
  { icon: <FiClock />, title: "On-Time Delivery", desc: "98% on-time project completion and material delivery." },
  { icon: <FiDollarSign />, title: "Transparent Pricing", desc: "No hidden costs. Clear quotation breakdowns." },
  { icon: <FiUsers />, title: "Trusted Network", desc: "Join thousands of construction professionals." },
];

const Firstpage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-pattern"></div>
        <div className="hero-content-wrapper">
          <div className="hero-text">
            <span className="hero-badge">🚀 Gujarat's #1 Construction Platform</span>
            <h1>Build Your Future with <span className="text-gradient">StoneBeam-NH</span></h1>
            <p>Connect with verified builders, contractors, and dealers. Manage projects, order materials, and grow your construction business — all in one platform.</p>
            <div className="hero-cta">
              <button className="btn-sb btn-sb-primary hero-btn" onClick={() => navigate("/signup")}>
                Get Started Free <FiArrowRight />
              </button>
              <button className="btn-sb btn-sb-outline hero-btn" onClick={() => navigate("/Aboutus")}>
                Learn More
              </button>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src={blogImg} alt="Construction Professional" className="hero-image" />
            <div className="hero-image-glow"></div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="landing-stats">
        {stats.map((s, i) => (
          <div key={i} className="landing-stat-item">
            <h3 className="text-gradient">{s.num}</h3>
            <p>{s.label}</p>
          </div>
        ))}
      </section>

      {/* Roles Grid */}
      <section className="roles-section">
        <div className="section-center">
          <h2>Choose Your Role</h2>
          <p className="section-subtitle">Select how you want to use StoneBeam-NH</p>
        </div>
        <div className="roles-grid">
          {roles.map(r => (
            <button key={r.key} className="role-card" onClick={() => navigate(r.path)}>
              <div className="role-icon" style={{ background: `${r.color}20`, color: r.color }}>{r.icon}</div>
              <h3>{r.key}</h3>
              <p>{r.desc}</p>
              <span className="role-arrow"><FiArrowRight /></span>
            </button>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="section-center">
          <h2>Why Choose StoneBeam-NH?</h2>
          <p className="section-subtitle">Everything you need to succeed in construction</p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Build Something Great?</h2>
          <p>Join thousands of construction professionals on StoneBeam-NH today.</p>
          <div className="cta-buttons">
            <button className="btn-sb btn-sb-primary hero-btn" onClick={() => navigate("/signup")}>Create Free Account</button>
            <button className="btn-sb btn-sb-outline hero-btn" onClick={() => navigate("/HelpCenter")}>Contact Us</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Firstpage;
