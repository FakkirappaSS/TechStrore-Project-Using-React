import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({
  id,
  image,
  name,
  price,
  originalPrice,
  discount,
  rating,
  isBestSeller,
  isWishlisted,
  onAddToCart,
  onToggleWishList,
}) {
  return (
    <div className="product-card">
      {/* Discount Badge */}
      {discount && <span className="discount-badge">{discount}</span>}

      <button
        className={`wishlist ${isWishlisted ? "active" : ""}`}
        onClick={onToggleWishList}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={isWishlisted ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>

      {/* Product Image */}
      <Link to={`/product/${id}`} className="image-container">
        <img src={image} alt={name} className="product-image" />
      </Link>

      {/* Content */}
      <div className="card-content">
        <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3 className="product-name">{name}</h3>
        </Link>

        {/* Rating */}
        <div className="rating">
          <span className="stars">
            {"★".repeat(Math.floor(rating))}
            {"☆".repeat(5 - Math.floor(rating))}
          </span>
          <span className="rating-value">{rating}</span>
          {isBestSeller && <span className="bestseller-tag">Best Seller</span>}
        </div>

        {/* Price */}
        <div className="price-row">
          <span className="price">₹{price.toLocaleString("en-IN")}</span>
          {originalPrice && (
            <span className="original-price">
              ₹{originalPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>

        {/* Button */}
        <button className="add-btn" onClick={onAddToCart}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginRight: "8px", verticalAlign: "middle" }}
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
