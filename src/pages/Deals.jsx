import { Link } from "react-router-dom";
import products from "../data.js";
import { useCart } from "../context/CartContext";
import "./Deals.css";

export default function Deals() {
  const { addToCart } = useCart();
  
  // Get highly discounted products
  const dealProducts = products.filter(p => p.discount && parseInt(p.discount) >= 20);

  return (
    <section className="deals-page">
      <div className="deals-hero">
        <div className="deals-hero-content">
          <span className="pulse-badge">Live Now</span>
          <h1 className="deals-title">Flash Sale Madness</h1>
          <p className="deals-subtitle">Up to 40% off on premium tech. Hurry, offers end soon!</p>
          
          <div className="countdown-timer">
            <div className="time-box">
              <span className="time-value">02</span>
              <span className="time-label">Days</span>
            </div>
            <span className="time-separator">:</span>
            <div className="time-box">
              <span className="time-value">14</span>
              <span className="time-label">Hours</span>
            </div>
            <span className="time-separator">:</span>
            <div className="time-box">
              <span className="time-value">45</span>
              <span className="time-label">Mins</span>
            </div>
          </div>
        </div>
      </div>

      <div className="deals-grid-container">
        <h2 className="deals-section-heading">Top Deals of the Day</h2>
        
        <div className="deals-grid">
          {dealProducts.map(product => (
            <div key={product.id} className="deal-card">
              <div className="deal-discount-tag">{product.discount} OFF</div>
              
              <Link to={`/product/${product.id}`} className="deal-image-wrapper">
                <img src={product.image} alt={product.name} />
              </Link>
              
              <div className="deal-info">
                <h3 className="deal-name">{product.name}</h3>
                <div className="deal-pricing">
                  <span className="deal-current-price">₹{product.price.toLocaleString("en-IN")}</span>
                  <span className="deal-original-price">₹{product.originalPrice.toLocaleString("en-IN")}</span>
                </div>
                
                <div className="deal-progress">
                  <div className="deal-progress-bar">
                    <div className="deal-progress-fill" style={{ width: `${Math.floor(Math.random() * 40) + 50}%` }}></div>
                  </div>
                  <span className="deal-claimed">Almost Sold Out!</span>
                </div>
                
                <button className="deal-add-btn" onClick={() => addToCart(product)}>
                  Grab Deal
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
