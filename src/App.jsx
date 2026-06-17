import ProductCard from "./components/ProductCard";
import "./App.css";
import products from "./data.js";
import { useState, useEffect } from "react";

// ─── SVG Icon Components (professional, no emojis) ─────────────────────────

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

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

// ─── App Component ──────────────────────────────────────────────────────────

function App() {
  //Brands
  const allBrands = [...new Set(products.map((p) => p.brand))];

  //States
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Theme State — reads from localStorage or defaults to dark
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("techstore-theme") || "dark";
  });

  // Apply theme to document root whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("techstore-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  // Close all dropdowns when one opens
  function openCart() {
    setShowWishlist(false);
    setShowCart(true);
  }
  function openWishlist() {
    setShowCart(false);
    setShowWishlist(true);
  }

  // Add to Cart
  function addToCart(product) {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  // Remove from Cart
  function removeFromCart(productId) {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  }

  // Update quantity in cart
  function updateCartQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item,
      ),
    );
  }

  //To calculate number of items in cart
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  //Total Price
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  //Wishlist Function
  function toggleWishlist(productID) {
    if (wishlist.includes(productID)) {
      setWishlist(wishlist.filter((id) => id !== productID));
    } else {
      setWishlist([...wishlist, productID]);
    }
  }

  // Get wishlist product objects
  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

  // Move from wishlist to cart
  function moveToCart(product) {
    addToCart(product);
    toggleWishlist(product.id);
  }

  // Checkout handler
  function handleCheckout() {
    setShowCart(false);
    setShowCheckout(true);
    setSelectedPayment("");
    setOrderPlaced(false);
  }

  // Place order
  function handlePlaceOrder() {
    if (!selectedPayment) return;
    setOrderPlaced(true);
    // Clear cart after 3 seconds
    setTimeout(() => {
      setCartItems([]);
      setShowCheckout(false);
      setOrderPlaced(false);
      setSelectedPayment("");
    }, 3000);
  }

  //1. Filter Based on Search (matches both name and brand)
  let filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      product.name.toLowerCase().includes(term) ||
      product.brand.toLowerCase().includes(term);
    const matchesBrand =
      selectedBrand === "All" || product.brand === selectedBrand;
    return matchesSearch && matchesBrand;
  });

  //3. Sort Products
  if (sortBy === "price-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.rating - a.rating,
    );
  } else if (sortBy === "name") {
    filteredProducts = [...filteredProducts].sort((a, b) =>
      a.name.localeCompare(b.name),
    );
  }

  // Close all panels
  function closeAll() {
    setShowCart(false);
    setShowWishlist(false);
    setShowCheckout(false);
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="logo">
            <span className="logo-icon">◆</span>
            TechStore
          </a>

          <ul className="nav-links">
            <li>
              <a href="#products" className="nav-link">Products</a>
            </li>
            <li>
              <a href="#" className="nav-link">Deals</a>
            </li>
            <li>
              <a href="#" className="nav-link">Support</a>
            </li>
            <li>
              <a href="#" className="nav-link">About</a>
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

            {/* Wishlist Icon */}
            <button
              className="nav-btn icon-btn wishlist-nav-btn"
              title="Wishlist"
              onClick={() => (showWishlist ? setShowWishlist(false) : openWishlist())}
            >
              <HeartIcon filled={wishlist.length > 0} />
              {wishlist.length > 0 && (
                <span className="nav-badge wishlist-badge">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Icon */}
            <button
              className="nav-btn icon-btn"
              title="Cart"
              onClick={() => (showCart ? setShowCart(false) : openCart())}
            >
              <CartIcon />
              {cartCount > 0 && (
                <span className="nav-badge cart-badge">{cartCount}</span>
              )}
            </button>

            {/* Shop Now — scrolls to products */}
            <a href="#products" className="nav-btn primary">
              Shop Now
            </a>
          </div>
        </div>
      </nav>

      {/* ─── Wishlist Dropdown ─────────────────────────────────────────── */}
      {showWishlist && (
        <div className="wishlist-dropdown">
          <div className="dropdown-header">
            <h3>
              <HeartIcon filled={true} /> Wishlist
            </h3>
            <button className="cart-close-btn" onClick={() => setShowWishlist(false)}>
              ✕
            </button>
          </div>

          {wishlistProducts.length === 0 ? (
            <div className="cart-empty">
              <HeartIcon filled={false} />
              <p>Your wishlist is empty</p>
              <a href="#products" className="empty-browse-btn" onClick={() => setShowWishlist(false)}>
                Browse Products
              </a>
            </div>
          ) : (
            <div className="wishlist-items-list">
              {wishlistProducts.map((item) => (
                <div key={item.id} className="wishlist-item">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-details">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">
                      ₹{item.price.toLocaleString("en-IN")}
                    </p>
                    <div className="wishlist-item-actions">
                      <button
                        className="wishlist-move-btn"
                        onClick={() => moveToCart(item)}
                      >
                        <CartIcon /> Move to Cart
                      </button>
                      <button
                        className="wishlist-remove-btn"
                        onClick={() => toggleWishlist(item.id)}
                      >
                        <TrashIcon />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ─── Cart Dropdown ─────────────────────────────────────────────── */}
      {showCart && (
        <div className="cart-dropdown">
          <div className="dropdown-header">
            <h3>
              <CartIcon /> Your Cart
            </h3>
            <button className="cart-close-btn" onClick={() => setShowCart(false)}>
              ✕
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <CartIcon />
              <p>Your cart is empty</p>
              <a href="#products" className="empty-browse-btn" onClick={() => setShowCart(false)}>
                Browse Products
              </a>
            </div>
          ) : (
            <>
              <div className="cart-items-list">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-img" />
                    <div className="cart-item-details">
                      <p className="cart-item-name">{item.name}</p>
                      <p className="cart-item-price">
                        ₹{item.price.toLocaleString("en-IN")}
                      </p>
                      <div className="cart-item-qty">
                        <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>
                          +
                        </button>
                      </div>
                    </div>
                    <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>
                      <TrashIcon />
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-dropdown-footer">
                <div className="cart-total">
                  <span>Total:</span>
                  <span className="cart-total-price">
                    ₹{cartTotal.toLocaleString("en-IN")}
                  </span>
                </div>
                <button className="checkout-btn" onClick={handleCheckout}>
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* ─── Checkout Modal ──────────────────────────────────────────── */}
      {showCheckout && (
        <div className="checkout-modal">
          <div className="checkout-panel">
            {!orderPlaced ? (
              <>
                <div className="dropdown-header">
                  <h3>Checkout</h3>
                  <button className="cart-close-btn" onClick={() => setShowCheckout(false)}>
                    ✕
                  </button>
                </div>

                {/* Order Summary */}
                <div className="checkout-summary">
                  <h4 className="checkout-section-title">Order Summary</h4>
                  <div className="checkout-items">
                    {cartItems.map((item) => (
                      <div key={item.id} className="checkout-item-row">
                        <img src={item.image} alt={item.name} className="checkout-item-img" />
                        <div className="checkout-item-info">
                          <span className="checkout-item-name">{item.name}</span>
                          <span className="checkout-item-meta">
                            Qty: {item.quantity} × ₹{item.price.toLocaleString("en-IN")}
                          </span>
                        </div>
                        <span className="checkout-item-subtotal">
                          ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="checkout-total-row">
                    <span>Total Amount</span>
                    <span className="checkout-grand-total">
                      ₹{cartTotal.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="checkout-payment">
                  <h4 className="checkout-section-title">Payment Method</h4>

                  <label className={`payment-option ${selectedPayment === "cod" ? "selected" : ""}`}>
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={selectedPayment === "cod"}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                    />
                    <div className="payment-option-icon">🏠</div>
                    <div className="payment-option-info">
                      <span className="payment-option-title">Cash on Delivery</span>
                      <span className="payment-option-desc">Pay when your order arrives</span>
                    </div>
                    <div className="payment-radio-check" />
                  </label>

                  <label className={`payment-option ${selectedPayment === "upi" ? "selected" : ""}`}>
                    <input
                      type="radio"
                      name="payment"
                      value="upi"
                      checked={selectedPayment === "upi"}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                    />
                    <div className="payment-option-icon">📱</div>
                    <div className="payment-option-info">
                      <span className="payment-option-title">UPI</span>
                      <span className="payment-option-desc">GPay, PhonePe, Paytm & more</span>
                    </div>
                    <div className="payment-radio-check" />
                  </label>

                  <label className={`payment-option ${selectedPayment === "card" ? "selected" : ""}`}>
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={selectedPayment === "card"}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                    />
                    <div className="payment-option-icon">💳</div>
                    <div className="payment-option-info">
                      <span className="payment-option-title">Credit / Debit Card</span>
                      <span className="payment-option-desc">Visa, Mastercard, Rupay</span>
                    </div>
                    <div className="payment-radio-check" />
                  </label>

                  <label className={`payment-option ${selectedPayment === "netbanking" ? "selected" : ""}`}>
                    <input
                      type="radio"
                      name="payment"
                      value="netbanking"
                      checked={selectedPayment === "netbanking"}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                    />
                    <div className="payment-option-icon">🏦</div>
                    <div className="payment-option-info">
                      <span className="payment-option-title">Net Banking</span>
                      <span className="payment-option-desc">All major banks supported</span>
                    </div>
                    <div className="payment-radio-check" />
                  </label>

                  <label className={`payment-option ${selectedPayment === "emi" ? "selected" : ""}`}>
                    <input
                      type="radio"
                      name="payment"
                      value="emi"
                      checked={selectedPayment === "emi"}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                    />
                    <div className="payment-option-icon">📋</div>
                    <div className="payment-option-info">
                      <span className="payment-option-title">EMI</span>
                      <span className="payment-option-desc">No-cost EMI available</span>
                    </div>
                    <div className="payment-radio-check" />
                  </label>
                </div>

                {/* Place Order */}
                <div className="checkout-footer">
                  <button
                    className={`place-order-btn ${selectedPayment ? "active" : ""}`}
                    onClick={handlePlaceOrder}
                    disabled={!selectedPayment}
                  >
                    Place Order — ₹{cartTotal.toLocaleString("en-IN")}
                  </button>
                </div>
              </>
            ) : (
              /* ─── Order Success Screen ─── */
              <div className="order-success">
                <div className="success-icon">
                  <CheckIcon />
                </div>
                <h2 className="success-title">Order Placed!</h2>
                <p className="success-msg">
                  Your order of <strong>₹{cartTotal.toLocaleString("en-IN")}</strong> has been
                  placed successfully via{" "}
                  <strong>
                    {selectedPayment === "cod" && "Cash on Delivery"}
                    {selectedPayment === "upi" && "UPI"}
                    {selectedPayment === "card" && "Credit / Debit Card"}
                    {selectedPayment === "netbanking" && "Net Banking"}
                    {selectedPayment === "emi" && "EMI"}
                  </strong>
                  .
                </p>
                <p className="success-sub">Redirecting you back...</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Click-away overlay for dropdowns */}
      {(showCart || showWishlist) && (
        <div className="cart-overlay" onClick={closeAll}></div>
      )}

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">New Arrivals 2026</p>
          <h1 className="hero-title">
            The Future of Tech
            <br />
            <span className="hero-highlight">Is Here.</span>
          </h1>
          <p className="hero-description">
            Discover the latest in premium technology. From powerful computers
            to cutting-edge smartphones, find everything you need in one place.
          </p>
          <div className="hero-cta">
            <a href="#products" className="btn-primary">
              Explore Products
            </a>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat">
            <span className="stat-number">200+</span>
            <span className="stat-label">Premium Products</span>
          </div>
          <div className="stat">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Customer Support</span>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section" id="products">
        <div className="section-header">
          <h2 className="section-title">Best Sellers</h2>
          <p className="section-subtitle">
            Our most popular products loved by customers
          </p>
        </div>

        {/* Filters & Search Bar */}
        <div className="filters-bar">
          <div className="search-wrapper">
            <span className="search-icon"><SearchIcon /></span>
            <input
              type="text"
              className="search-input"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button className="search-clear" onClick={() => setSearchTerm("")}>✕</button>
            )}
          </div>

          <div className="filter-group">
            <label className="filter-label">Brand</label>
            <select
              className="filter-select"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              <option value="All">All Brands</option>
              {allBrands.map((brand) => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Sort By</label>
            <select
              className="filter-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low → High</option>
              <option value="price-high">Price: High → Low</option>
              <option value="rating">Rating</option>
              <option value="name">Name (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Active Filters Display */}
        {(searchTerm || selectedBrand !== "All" || sortBy !== "default") && (
          <div className="active-filters">
            <span className="filter-results-count">
              {filteredProducts.length} product
              {filteredProducts.length !== 1 ? "s" : ""} found
            </span>
            <button
              className="clear-all-filters"
              onClick={() => {
                setSearchTerm("");
                setSelectedBrand("All");
                setSortBy("default");
              }}
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Product Grid */}
        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((data) => (
              <ProductCard
                key={data.id}
                image={data.image}
                name={data.name}
                price={data.price}
                originalPrice={data.originalPrice}
                discount={data.discount}
                rating={data.rating}
                isBestSeller={data.isBestSeller}
                isWishlisted={wishlist.includes(data.id)}
                onAddToCart={() => addToCart(data)}
                onToggleWishList={() => toggleWishlist(data.id)}
              />
            ))
          ) : (
            <div className="no-results">
              <span className="no-results-icon"><SearchIcon /></span>
              <h3>No products found</h3>
              <p>Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 TechStore. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
