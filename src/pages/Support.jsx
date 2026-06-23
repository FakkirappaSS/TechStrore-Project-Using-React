export default function Support() {
  return (
    <section style={{ padding: "4rem 5%", maxWidth: "1000px", margin: "0 auto", minHeight: "70vh" }}>
      <div className="section-header" style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h2 className="section-title">Help & Support</h2>
        <p className="section-subtitle">We're here to help you with anything you need</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "4rem" }}>
        <div style={{ background: "var(--surface-color)", padding: "2rem", borderRadius: "16px", border: "1px solid var(--border-color)", textAlign: "center" }}>
          <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>📞</div>
          <h3>Call Us</h3>
          <p style={{ color: "var(--text-muted)", margin: "1rem 0" }}>Available 24/7 for urgent queries</p>
          <p style={{ fontWeight: "bold", fontSize: "1.2rem", color: "var(--primary-color)" }}>1-800-TECH-STORE</p>
        </div>
        
        <div style={{ background: "var(--surface-color)", padding: "2rem", borderRadius: "16px", border: "1px solid var(--border-color)", textAlign: "center" }}>
          <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>✉️</div>
          <h3>Email Us</h3>
          <p style={{ color: "var(--text-muted)", margin: "1rem 0" }}>We'll respond within 24 hours</p>
          <p style={{ fontWeight: "bold", fontSize: "1.2rem", color: "var(--primary-color)" }}>support@techstore.com</p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
        <div>
          <h3 style={{ marginBottom: "2rem", fontSize: "1.5rem" }}>Frequently Asked Questions</h3>
          
          <div style={{ marginBottom: "1.5rem", paddingBottom: "1.5rem", borderBottom: "1px solid var(--border-color)" }}>
            <h4 style={{ marginBottom: "0.5rem" }}>How long does shipping take?</h4>
            <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>Standard shipping takes 3-5 business days. Express delivery is available at checkout for next-day delivery on eligible items.</p>
          </div>
          
          <div style={{ marginBottom: "1.5rem", paddingBottom: "1.5rem", borderBottom: "1px solid var(--border-color)" }}>
            <h4 style={{ marginBottom: "0.5rem" }}>What is your return policy?</h4>
            <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>We offer a 30-day no-questions-asked return policy for all sealed items. Open items may be subject to a restocking fee.</p>
          </div>
          
          <div>
            <h4 style={{ marginBottom: "0.5rem" }}>Do you offer international shipping?</h4>
            <p style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>Currently, we only ship within the country. We are working on expanding our logistics for international deliveries.</p>
          </div>
        </div>

        <div style={{ background: "var(--surface-color)", padding: "2.5rem", borderRadius: "16px", border: "1px solid var(--border-color)" }}>
          <h3 style={{ marginBottom: "2rem", fontSize: "1.5rem" }}>Send a Message</h3>
          
          <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label style={{ fontWeight: "600" }}>Name</label>
              <input type="text" placeholder="Your name" style={{ padding: "0.8rem", borderRadius: "8px", border: "1px solid var(--border-color)", background: "var(--bg-color)", color: "var(--text-color)" }} />
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label style={{ fontWeight: "600" }}>Email</label>
              <input type="email" placeholder="Your email address" style={{ padding: "0.8rem", borderRadius: "8px", border: "1px solid var(--border-color)", background: "var(--bg-color)", color: "var(--text-color)" }} />
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label style={{ fontWeight: "600" }}>Message</label>
              <textarea rows="4" placeholder="How can we help?" style={{ padding: "0.8rem", borderRadius: "8px", border: "1px solid var(--border-color)", background: "var(--bg-color)", color: "var(--text-color)", resize: "vertical" }}></textarea>
            </div>
            
            <button className="btn-primary" style={{ marginTop: "1rem" }}>Submit Request</button>
          </form>
        </div>
      </div>
    </section>
  );
}
