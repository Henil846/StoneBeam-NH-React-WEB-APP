import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useToast } from "../shared/SharedComponents";
import { ROLES } from "../../data/mockData";
import "./Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Client");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email.trim()) {
      setError("Please enter your email");
      return;
    }
    if (!password.trim()) {
      setError("Please enter your password");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    try {
      const user = await login(email, password, role);
      addToast(`Welcome back, ${user.name}!`, "success");
      const roleRoutes = {
        Builder: "/builder",
        Dealer: "/dealer",
        Client: "/client",
        Contractor: "/contractor",
        Labourer: "/labourer",
        "Skilled Labourer": "/skilledlabourer",
      };
      navigate(roleRoutes[role] || "/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-brand">
          <span className="auth-brand-logo text-gradient">SB</span>
          <h2>Welcome to StoneBeam-NH</h2>
          <p>
            India's most trusted digital platform connecting construction
            professionals. Build with confidence.
          </p>
          <div className="auth-brand-features">
            <div className="auth-brand-feature">
              <span className="auth-brand-feature-icon">✓</span>
              <span>Verified contractors and builders</span>
            </div>
            <div className="auth-brand-feature">
              <span className="auth-brand-feature-icon">🔒</span>
              <span>Secure and transparent transactions</span>
            </div>
            <div className="auth-brand-feature">
              <span className="auth-brand-feature-icon">📊</span>
              <span>Real-time project tracking</span>
            </div>
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-form-container">
          <div className="auth-form-header">
            <h2>Sign In</h2>
            <p>
              Don't have an account? <Link to="/signup">Create one free</Link>
            </p>
          </div>

          {error && <div className="auth-error-msg">⚠ {error}</div>}

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="sb-form-group">
              <label>Email Address</label>
              <input
                className="sb-input"
                type="email"
                placeholder="xyz@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="sb-form-group">
              <label>Password</label>
              <input
                className="sb-input"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="sb-form-group">
              <label>Login as</label>
              <select
                className="sb-select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                {ROLES.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
            <div className="auth-remember-row">
              <label>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />{" "}
                Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <button
              className="auth-submit-btn"
              type="submit"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="auth-divider">or continue with</div>
          <div style={{ textAlign: "center" }}>
            <Link
              to="/"
              style={{ color: "var(--sb-text-accent)", fontSize: "14px" }}
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
