import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

export default function Settings() {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  if (!user) {
    return (
      <div style={{ textAlign: "center", padding: "5rem 2rem", minHeight: "60vh" }}>
        <h2>Please sign in to view settings</h2>
      </div>
    );
  }

  return (
    <section style={{ padding: "4rem 5%", maxWidth: "800px", margin: "0 auto", minHeight: "70vh" }}>
      <div className="section-header">
        <h2 className="section-title">Account Settings</h2>
      </div>

      <div style={{
        background: "var(--surface-color)",
        border: "1px solid var(--border-color)",
        borderRadius: "16px",
        padding: "2rem",
        marginTop: "2rem"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border-color)" }}>
          <img src={user.photoURL} alt="Avatar" style={{ width: "80px", height: "80px", borderRadius: "50%", background: "var(--primary-color)" }} />
          <div>
            <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.5rem" }}>{user.displayName.toUpperCase()}</h3>
            <p style={{ margin: "0", color: "var(--text-muted)" }}>{user.email}</p>
          </div>
        </div>

        <h4 style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>Preferences</h4>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
          <div>
            <h5 style={{ margin: "0 0 0.25rem 0", fontSize: "1rem" }}>Dark Mode</h5>
            <p style={{ margin: "0", color: "var(--text-muted)", fontSize: "0.9rem" }}>Switch between light and dark themes</p>
          </div>
          <button
            onClick={toggleTheme}
            style={{
              background: "var(--primary-color)",
              color: "blue",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600"
            }}
          >
            {theme === "dark" ? "Disable" : "Enable"}
          </button>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
          <div>
            <h5 style={{ margin: "0 0 0.25rem 0", fontSize: "1rem" }}>Email Notifications</h5>
            <p style={{ margin: "0", color: "var(--text-muted)", fontSize: "0.9rem" }}>Receive order updates and offers</p>
          </div>
          <label style={{ position: "relative", display: "inline-block", width: "50px", height: "24px" }}>
            <input type="checkbox" defaultChecked style={{ opacity: 0, width: 0, height: 0 }} />
            <span style={{
              position: "absolute", cursor: "pointer", top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: "#10b981", borderRadius: "34px"
            }}>
              <span style={{
                position: "absolute", height: "18px", width: "18px", left: "28px", bottom: "3px",
                backgroundColor: "white", borderRadius: "50%"
              }}></span>
            </span>
          </label>
        </div>

        <div style={{ marginTop: "3rem", display: "flex", justifyContent: "flex-end" }}>
          <button className="btn-primary">Save Changes</button>
        </div>
      </div>
    </section>
  );
}
