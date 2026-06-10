import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useToast } from "../shared/SharedComponents";
import "./Header.component.css";
import { FiSearch, FiMenu, FiX, FiUser, FiLogOut } from "react-icons/fi";
import { FaScrewdriverWrench } from "react-icons/fa6";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { currentUser, logout } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    addToast("Logged out successfully", "info");
    navigate("/");
    setShowUserMenu(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      addToast(`Search results for "${searchQuery}" — coming soon!`, "info");
      setSearchQuery("");
    }
  };

  return (
    <header className="sb-header">
      <div className="sb-header-inner">
        <Link to="/" className="sb-header-logo">
          <span className="sb-logo-icon">
            <FaScrewdriverWrench />
          </span>
          <span className="sb-logo-text">StoneBeam</span>
        </Link>

        <nav className={`sb-header-nav ${menuOpen ? "open" : ""}`}>
          <Link
            to="/"
            className="sb-nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/Aboutus"
            className="sb-nav-link"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/Blog"
            className="sb-nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/Career"
            className="sb-nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Careers
          </Link>
          <Link
            to="/HelpCenter"
            className="sb-nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Help
          </Link>
        </nav>

        <div className="sb-header-actions">
          <form className="sb-header-search" onSubmit={handleSearch}>
            <FiSearch className="sb-search-icon" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          {currentUser ? (
            <div className="sb-user-menu-wrapper">
              <button
                className="sb-user-btn"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <span className="sb-user-avatar">
                  {currentUser.name?.[0]?.toUpperCase() || "U"}
                </span>
                <span className="sb-user-name">
                  {currentUser.name?.split(" ")[0]}
                </span>
              </button>
              {showUserMenu && (
                <div className="sb-user-dropdown">
                  <div className="sb-dropdown-info">
                    <strong>{currentUser.name}</strong>
                    <span>{currentUser.role}</span>
                  </div>
                  <div className="sb-dropdown-divider"></div>
                  <button
                    onClick={() => {
                      setShowUserMenu(false);
                      navigate(
                        `/${currentUser.role?.toLowerCase().replace(/\s+/g, "")}`,
                      );
                    }}
                  >
                    <FiUser /> Dashboard
                  </button>
                  <button onClick={handleLogout}>
                    <FiLogOut /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="sb-auth-btns">
              <Link to="/login" className="sb-btn-login">
                Login
              </Link>
              <Link to="/signup" className="sb-btn-signup">
                Sign Up
              </Link>
            </div>
          )}

          <button
            className="sb-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
