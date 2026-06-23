import { useParams, Link } from "react-router-dom";
import products from "../data.js";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <Link to="/products" className="btn-primary">Back to Products</Link>
      </div>
    );
  }

  const isWishlisted = wishlist.includes(product.id);

  return (
    <section className="product-details-section">
      <div className="product-details-container">
        <div className="product-details-image">
          <img src={product.image} alt={product.name} />
          {product.isBestSeller && <span className="pd-badge">Best Seller</span>}
        </div>
        <div className="product-details-info">
          <p className="pd-brand">{product.brand}</p>
          <h1 className="pd-title">{product.name}</h1>
          <div className="pd-rating">
            <span className="pd-star">★</span> {product.rating}
          </div>
          <div className="pd-price-container">
            <span className="pd-price">₹{product.price.toLocaleString("en-IN")}</span>
            {product.originalPrice && (
              <>
                <span className="pd-original-price">₹{product.originalPrice.toLocaleString("en-IN")}</span>
                <span className="pd-discount">{product.discount} off</span>
              </>
            )}
          </div>
          <p className="pd-description">
            Experience premium quality with the {product.name}. Designed for professionals and enthusiasts alike, this product from {product.brand} delivers exceptional performance and reliability.
          </p>
          <div className="pd-actions">
            <button className="btn-primary pd-add-cart" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            <button 
              className={`btn-secondary pd-wishlist ${isWishlisted ? 'active' : ''}`} 
              onClick={() => toggleWishlist(product.id)}
            >
              {isWishlisted ? '♥ Wishlisted' : '♡ Add to Wishlist'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
