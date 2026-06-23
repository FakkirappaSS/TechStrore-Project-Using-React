import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./UserProfile.css";

export default function UserProfile() {
  const { user, login, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogin = async (provider) => {
    setIsLoggingIn(true);
    await login(provider);
    setIsLoggingIn(false);
  };

  if (!user) {
    return (
      <div className="user-profile-guest">
        <button
          className="nav-btn primary"
          onClick={() => handleLogin("Google")}
          disabled={isLoggingIn}
        >
          {isLoggingIn ? "Signing In..." : "Sign In"}
        </button>
      </div>
    );
  }

  return (
    <div className="user-profile" ref={dropdownRef}>
      <button className="user-profile-btn" onClick={() => setIsOpen(!isOpen)}>
        <img src={user.photoURL} alt={user.displayName} className="user-avatar" />
        <span className="user-name">{user.displayName.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className="user-dropdown">
          <div className="user-dropdown-header">
            <p className="user-email">{user.email}</p>
          </div>
          <ul className="user-dropdown-menu">
            <li>
              <Link to="/orders" className="dropdown-item" style={{ display: 'block', textDecoration: 'none' }} onClick={() => setIsOpen(false)}>My Orders</Link>
            </li>
            <li>
              <Link to="/settings" className="dropdown-item" style={{ display: 'block', textDecoration: 'none' }} onClick={() => setIsOpen(false)}>Settings</Link>
            </li>
            <li>
              <button
                className="dropdown-item logout-btn"
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
