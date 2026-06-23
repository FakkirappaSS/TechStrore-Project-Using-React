import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Checkout.css";

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

export default function Checkout() {
  const { cartItems, cartTotal, updateCartQuantity, removeFromCart, clearCart } = useCart();
  const [selectedPayment, setSelectedPayment] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if (!selectedPayment) return;
    setOrderPlaced(true);
    
    // Clear cart and redirect after 3 seconds
    setTimeout(() => {
      clearCart();
      navigate("/");
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <section className="checkout-page">
        <div className="order-success-full">
          <div className="success-icon-large">
            <CheckIcon />
          </div>
          <h2 className="success-title">Order Placed Successfully!</h2>
          <p className="success-msg">
            Your order of <strong>₹{cartTotal.toLocaleString("en-IN")}</strong> has been placed via{" "}
            <strong>
              {selectedPayment === "cod" && "Cash on Delivery"}
              {selectedPayment === "upi" && "UPI"}
              {selectedPayment === "card" && "Credit / Debit Card"}
              {selectedPayment === "netbanking" && "Net Banking"}
              {selectedPayment === "emi" && "EMI"}
            </strong>.
          </p>
          <p className="success-sub">Redirecting to homepage...</p>
        </div>
      </section>
    );
  }

  if (cartItems.length === 0) {
    return (
      <section className="checkout-page">
        <div className="empty-state">
          <h3>Your cart is empty</h3>
          <p>Add some products to your cart before proceeding to checkout.</p>
          <Link to="/products" className="btn-primary">Browse Products</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="checkout-page">
      <div className="section-header">
        <h2 className="section-title">Checkout</h2>
      </div>

      <div className="checkout-grid">
        <div className="checkout-cart">
          <h3 className="checkout-section-title">Review Your Cart</h3>
          <div className="checkout-cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="checkout-cart-item">
                <img src={item.image} alt={item.name} className="cci-img" />
                <div className="cci-details">
                  <h4 className="cci-name">{item.name}</h4>
                  <p className="cci-price">₹{item.price.toLocaleString("en-IN")}</p>
                  <div className="cci-actions">
                    <div className="cci-qty">
                      <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <button className="cci-remove" onClick={() => removeFromCart(item.id)}>
                      <TrashIcon /> Remove
                    </button>
                  </div>
                </div>
                <div className="cci-subtotal">
                  ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="checkout-summary-panel">
          <h3 className="checkout-section-title">Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{cartTotal.toLocaleString("en-IN")}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span className="free">Free</span>
          </div>
          <div className="summary-row total-row">
            <span>Total</span>
            <span className="summary-total-price">₹{cartTotal.toLocaleString("en-IN")}</span>
          </div>

          <h3 className="checkout-section-title mt-4">Payment Method</h3>
          <div className="payment-options">
            <label className={`payment-option ${selectedPayment === "cod" ? "selected" : ""}`}>
              <input type="radio" name="payment" value="cod" checked={selectedPayment === "cod"} onChange={(e) => setSelectedPayment(e.target.value)} />
              <div className="payment-option-icon">🏠</div>
              <div className="payment-option-info">
                <span className="payment-option-title">Cash on Delivery</span>
              </div>
            </label>

            <label className={`payment-option ${selectedPayment === "upi" ? "selected" : ""}`}>
              <input type="radio" name="payment" value="upi" checked={selectedPayment === "upi"} onChange={(e) => setSelectedPayment(e.target.value)} />
              <div className="payment-option-icon">📱</div>
              <div className="payment-option-info">
                <span className="payment-option-title">UPI</span>
              </div>
            </label>

            <label className={`payment-option ${selectedPayment === "card" ? "selected" : ""}`}>
              <input type="radio" name="payment" value="card" checked={selectedPayment === "card"} onChange={(e) => setSelectedPayment(e.target.value)} />
              <div className="payment-option-icon">💳</div>
              <div className="payment-option-info">
                <span className="payment-option-title">Credit / Debit Card</span>
              </div>
            </label>
            
            <label className={`payment-option ${selectedPayment === "netbanking" ? "selected" : ""}`}>
              <input type="radio" name="payment" value="netbanking" checked={selectedPayment === "netbanking"} onChange={(e) => setSelectedPayment(e.target.value)} />
              <div className="payment-option-icon">🏦</div>
              <div className="payment-option-info">
                <span className="payment-option-title">Net Banking</span>
              </div>
            </label>
          </div>

          <button 
            className={`btn-primary place-order-btn-large ${selectedPayment ? "active" : ""}`}
            onClick={handlePlaceOrder}
            disabled={!selectedPayment}
          >
            Place Order • ₹{cartTotal.toLocaleString("en-IN")}
          </button>
        </div>
      </div>
    </section>
  );
}
