import { Link } from "react-router-dom";

export default function MyOrders() {
  // Mock data for orders
  const orders = [
    {
      id: "ORD-2026-9081",
      date: "June 15, 2026",
      status: "Delivered",
      total: 124999,
      items: 2
    },
    {
      id: "ORD-2026-8832",
      date: "May 28, 2026",
      status: "Processing",
      total: 4500,
      items: 1
    }
  ];

  return (
    <section style={{ padding: "4rem 5%", maxWidth: "1000px", margin: "0 auto", minHeight: "70vh" }}>
      <div className="section-header">
        <h2 className="section-title">My Orders</h2>
        <p className="section-subtitle">View and track your recent purchases</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "2rem" }}>
        {orders.map((order) => (
          <div key={order.id} style={{ 
            border: "1px solid var(--border-color)", 
            borderRadius: "12px", 
            padding: "1.5rem", 
            background: "var(--surface-color)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem"
          }}>
            <div>
              <h3 style={{ margin: "0 0 0.5rem 0", color: "var(--text-color)" }}>{order.id}</h3>
              <p style={{ margin: "0", color: "var(--text-muted)", fontSize: "0.9rem" }}>Placed on {order.date} • {order.items} item(s)</p>
            </div>
            
            <div style={{ textAlign: "right" }}>
              <span style={{ 
                display: "inline-block", 
                padding: "0.25rem 0.75rem", 
                borderRadius: "20px", 
                fontSize: "0.85rem", 
                fontWeight: "600",
                background: order.status === "Delivered" ? "rgba(16, 185, 129, 0.1)" : "rgba(245, 158, 11, 0.1)",
                color: order.status === "Delivered" ? "#10b981" : "#f59e0b",
                marginBottom: "0.5rem"
              }}>
                {order.status}
              </span>
              <p style={{ margin: "0", fontWeight: "700", fontSize: "1.1rem" }}>₹{order.total.toLocaleString("en-IN")}</p>
            </div>
            
            <div style={{ width: "100%", borderTop: "1px solid var(--border-color)", paddingTop: "1rem", marginTop: "0.5rem", display: "flex", justifyContent: "flex-end" }}>
              <button className="btn-secondary" style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}>View Details</button>
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <Link to="/products" className="btn-primary">Continue Shopping</Link>
      </div>
    </section>
  );
}
