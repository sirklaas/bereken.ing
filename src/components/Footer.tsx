import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ 
      padding: "6rem 0", 
      background: "#f8fafc", 
      borderTop: "1px solid var(--border)",
      marginTop: "auto"
    }}>
      <div className="container" style={{ 
        display: "grid", 
        gridTemplateColumns: "2fr 1fr 1fr", 
        gap: "4rem" 
      }}>
        
        {/* About Column */}
        <div>
          <h3 style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>bereken.ing</h3>
          <p style={{ fontSize: "0.9rem", color: "var(--secondary)", lineHeight: 1.6, maxWidth: "300px" }}>
            De slimste en vlijmscherpe rekentools voor al je dagelijkse vragen. Van financiën tot vrije tijd.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <Link href="/over" style={{ 
              fontSize: "0.9rem", 
              fontWeight: 700, 
              color: "var(--primary-accent)", 
              textDecoration: "none" 
            }}>
              Over ons & Contact →
            </Link>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h4 style={{ fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1.5rem" }}>Tools</h4>
          <div style={{ display: "grid", gap: "0.8rem" }}>
            <Link href="/hypotheek" style={{ fontSize: "0.9rem", color: "var(--secondary)", textDecoration: "none" }}>Hypotheek</Link>
            <Link href="/ai" style={{ fontSize: "0.9rem", color: "var(--secondary)", textDecoration: "none" }}>AI Besparing</Link>
            <Link href="/wonen/zonnepanelen" style={{ fontSize: "0.9rem", color: "var(--secondary)", textDecoration: "none" }}>Zonnepanelen</Link>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h4 style={{ fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1.5rem" }}>Juridisch</h4>
          <div style={{ display: "grid", gap: "0.8rem" }}>
            <Link href="/privacy" style={{ fontSize: "0.9rem", color: "var(--secondary)", textDecoration: "none" }}>Privacy</Link>
            <Link href="/voorwaarden" style={{ fontSize: "0.9rem", color: "var(--secondary)", textDecoration: "none" }}>Voorwaarden</Link>
          </div>
        </div>

      </div>
      
      <div className="container" style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid #e2e8f0", textAlign: "center" }}>
        <p style={{ fontSize: "0.8rem", color: "var(--secondary)" }}>
          &copy; {new Date().getFullYear()} bereken.ing. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  );
}
