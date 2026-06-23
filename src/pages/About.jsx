import { Link } from "react-router-dom";

export default function About() {
  return (
    <section style={{ padding: "4rem 5%", maxWidth: "1200px", margin: "0 auto", minHeight: "70vh" }}>
      <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 4rem" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1.5rem", background: "linear-gradient(to right, var(--primary-color), #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Redefining Your Tech Experience
        </h1>
        <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", lineHeight: "1.8" }}>
          Founded in 2026, TechStore is the leading destination for premium technology products. We believe that everyone deserves access to high-quality, reliable tech that empowers their daily lives and professional endeavors.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", marginBottom: "5rem" }}>
        <div style={{ background: "var(--surface-color)", padding: "2.5rem", borderRadius: "16px", border: "1px solid var(--border-color)", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.5rem", color: "var(--primary-color)", margin: "0 0 0.5rem 0" }}>50K+</h2>
          <p style={{ margin: "0", color: "var(--text-color)", fontWeight: "600" }}>Happy Customers</p>
        </div>
        
        <div style={{ background: "var(--surface-color)", padding: "2.5rem", borderRadius: "16px", border: "1px solid var(--border-color)", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.5rem", color: "var(--primary-color)", margin: "0 0 0.5rem 0" }}>200+</h2>
          <p style={{ margin: "0", color: "var(--text-color)", fontWeight: "600" }}>Premium Products</p>
        </div>
        
        <div style={{ background: "var(--surface-color)", padding: "2.5rem", borderRadius: "16px", border: "1px solid var(--border-color)", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.5rem", color: "var(--primary-color)", margin: "0 0 0.5rem 0" }}>24/7</h2>
          <p style={{ margin: "0", color: "var(--text-color)", fontWeight: "600" }}>Expert Support</p>
        </div>
        
        <div style={{ background: "var(--surface-color)", padding: "2.5rem", borderRadius: "16px", border: "1px solid var(--border-color)", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.5rem", color: "var(--primary-color)", margin: "0 0 0.5rem 0" }}>99%</h2>
          <p style={{ margin: "0", color: "var(--text-color)", fontWeight: "600" }}>Satisfaction Rate</p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
        <div>
          <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Our Mission</h2>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "1.5rem" }}>
            We started TechStore with a simple idea: technology should be accessible, reliable, and backed by unparalleled customer service. Today, we're proud to be a trusted partner for thousands of professionals, gamers, and everyday users.
          </p>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "2rem" }}>
            We rigorously test every product we sell. If it doesn't meet our strict standards for quality and durability, it doesn't make it to our catalog.
          </p>
          <Link to="/products" className="btn-primary">Explore Our Catalog</Link>
        </div>
        
        <div style={{ background: "var(--surface-color)", borderRadius: "20px", padding: "2rem", border: "1px solid var(--border-color)", position: "relative", overflow: "hidden" }}>
          <div style={{ width: "100%", height: "300px", background: "linear-gradient(45deg, #1e1b4b, #4338ca)", borderRadius: "12px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <span style={{ fontSize: "4rem" }}>🚀</span>
          </div>
        </div>
      </div>
    </section>
  );
}
