import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "../shared/SharedComponents";
import "./Footer.component.css";
import { FiInstagram, FiTwitter, FiFacebook, FiLinkedin, FiSend } from "react-icons/fi";

const Footer = () => {
  const { addToast } = useToast();
  const [feedback, setFeedback] = useState("");

  const handleFeedback = (e) => {
    e.preventDefault();
    if (!feedback.trim()) {
      addToast("Please enter your feedback", "warning");
      return;
    }
    addToast("Thank you for your feedback! 🙏", "success");
    setFeedback("");
  };

  return (
    <footer className="sb-footer">
      <div className="sb-footer-inner">
        <div className="sb-footer-grid">
          {/* Brand */}
          <div className="sb-footer-brand">
            <div className="sb-footer-logo">
              <span className="sb-logo-icon-sm">SB</span>
              <span className="sb-footer-logo-text">StoneBeam-NH</span>
            </div>
            <p className="sb-footer-desc">
              India's trusted digital platform connecting construction professionals. Building trust, one project at a time.
            </p>
            <div className="sb-footer-socials">
              <a
                href="https://www.instagram.com/stone_beam.nh?igsh=Mmxta2M0dndjaDg4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                onClick={() => addToast('Opening Instagram...', 'info')}
              >
                <FiInstagram />
              </a>
              <a
                href="https://x.com/StonebeamNH2025"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                onClick={() => addToast('Opening Twitter...', 'info')}
              >
                <FiTwitter />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61585666420383"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                onClick={() => addToast('Opening Facebook...', 'info')}
              >
                <FiFacebook />
              </a>

              <a
                href="https://www.linkedin.com/in/stonebeam-nh-stonebeam-nh-44b4143a2/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
                onClick={() => addToast('Opening Linkedin...', 'info')}
              >
                <FiLinkedin />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="sb-footer-col">
            <h5>Company</h5>
            <ul>
              <li><Link to="/Aboutus">About Us</Link></li>
              <li><Link to="/Career">Careers</Link></li>
              <li><Link to="/Press">Press</Link></li>
              <li><Link to="/Blog">Blog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="sb-footer-col">
            <h5>Resources</h5>
            <ul>
              <li><Link to="/Guides">Guides</Link></li>
              <li><Link to="/HelpCenter">Help Center</Link></li>
              <li><Link to="/Blog">Articles</Link></li>
              <li><Link to="/Terms">Terms</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="sb-footer-col">
            <h5>Contact</h5>
            <ul>
              <li>
                <a href="mailto:stonebeamnh@gmail.com">
                  📧 stonebeamnh@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+917043297992">
                  📞 +91-7043297992
                </a>
              </li>
              <li>
                <a href="tel:+919106120047">
                  📞 +91-9106120047
                </a>
              </li>
              <li>
                <span>📍 Ahmedabad, Gujarat, India</span>
              </li>
            </ul>
          </div>

          {/* Feedback */}
          <div className="sb-footer-col sb-footer-feedback">
            <h5>💬 Feedback</h5>
            <p>Help us improve StoneBeam-NH</p>
            <form className="sb-feedback-form" onSubmit={handleFeedback}>
              <input type="text" placeholder="Your feedback..." value={feedback} onChange={e => setFeedback(e.target.value)} />
              <button type="submit"><FiSend /></button>
            </form>
          </div>
        </div>

        <div className="sb-footer-bottom">
          <p>© {new Date().getFullYear()} StoneBeam-NH. All rights reserved.</p>
          <div className="sb-footer-bottom-links">
            <Link to="/PrivacyPolicy">Privacy Policy</Link>
            <Link to="/Terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
