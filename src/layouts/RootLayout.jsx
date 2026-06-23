import { Link, Outlet } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import UserProfile from "../components/UserProfile";

// Icons
function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function HeartIcon({ filled }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

export default function RootLayout() {
  const { theme, toggleTheme } = useTheme();
  const { wishlist } = useWishlist();
  const { cartCount, cartItems, cartTotal, removeFromCart, updateCartQuantity } = useCart();
  
  // We can keep the mini-cart dropdown in the layout for quick access, or rely entirely on pages.
  // The user requested: "Dedicated page for Checkout, replacing the inline modal."
  // For the cart, a quick dropdown is still useful, but they also asked for distinct, clean URLs.
  // Let's implement a quick drop-down here, which links to checkout.

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">
            <span className="logo-icon">◆</span>
            TechStore
          </Link>

          <ul className="nav-links">
            <li>
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>
            <li>
              <Link to="/deals" className="nav-link">
                Deals
              </Link>
            </li>
            <li>
              <Link to="/support" className="nav-link">
                Support
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>

          <div className="nav-actions">
            {/* Theme Toggle */}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              aria-label="Toggle theme"
            >
              <span className={`theme-icon ${theme === "dark" ? "active" : ""}`}>
                <MoonIcon />
              </span>
              <span className={`theme-icon ${theme === "light" ? "active" : ""}`}>
                <SunIcon />
              </span>
            </button>

            {/* Wishlist Link */}
            <Link to="/wishlist" className="nav-btn icon-btn wishlist-nav-btn" title="Wishlist">
              <HeartIcon filled={wishlist.length > 0} />
              {wishlist.length > 0 && (
                <span className="nav-badge wishlist-badge">{wishlist.length}</span>
              )}
            </Link>

            {/* Cart Link -> let's make it go to checkout for now as requested */}
            <Link to="/checkout" className="nav-btn icon-btn" title="Cart/Checkout">
              <CartIcon />
              {cartCount > 0 && (
                <span className="nav-badge cart-badge">{cartCount}</span>
              )}
            </Link>

            {/* User Profile / Auth */}
            <UserProfile />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 TechStore. All rights reserved.</p>
      </footer>
    </div>
  );
}
