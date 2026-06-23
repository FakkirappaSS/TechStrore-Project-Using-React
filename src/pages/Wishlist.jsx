import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import "./Wishlist.css";

function HeartIcon({ filled }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
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

function CartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

export default function Wishlist() {
  const { wishlistProducts, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  const moveToCart = (product) => {
    addToCart(product);
    toggleWishlist(product.id);
  };

  return (
    <section className="wishlist-page">
      <div className="section-header">
        <h2 className="section-title">
          <HeartIcon filled={true} /> My Wishlist
        </h2>
      </div>

      {wishlistProducts.length === 0 ? (
        <div className="empty-state">
          <HeartIcon filled={false} />
          <h3>Your wishlist is empty</h3>
          <p>Save items you like to your wishlist and buy them later.</p>
          <Link to="/products" className="btn-primary">Browse Products</Link>
        </div>
      ) : (
        <div className="wishlist-grid">
          {wishlistProducts.map((item) => (
            <div key={item.id} className="wishlist-card">
              <Link to={`/product/${item.id}`} className="wishlist-card-img">
                <img src={item.image} alt={item.name} />
              </Link>
              <div className="wishlist-card-details">
                <Link to={`/product/${item.id}`} className="wishlist-card-title">{item.name}</Link>
                <p className="wishlist-card-price">₹{item.price.toLocaleString("en-IN")}</p>
                <div className="wishlist-card-actions">
                  <button className="btn-primary flex-1" onClick={() => moveToCart(item)}>
                    <CartIcon /> Move to Cart
                  </button>
                  <button className="btn-icon" onClick={() => toggleWishlist(item.id)} title="Remove">
                    <TrashIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
