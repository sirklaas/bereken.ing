import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--primary)", color: "white", padding: "4rem 0", marginTop: "4rem" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem" }}>
          <div>
            <div style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1.5rem", fontFamily: "var(--font-heading)" }}>
              bereken<span style={{ color: "var(--primary-accent)" }}>.ing</span>
            </div>
            <p style={{ color: "var(--secondary)", fontSize: "0.9rem" }}>
              De meest betrouwbare rekentools voor al je financiële en dagelijkse vragen. Snel, simpel en accuraat.
            </p>
          </div>
          <div>
            <h4 style={{ marginBottom: "1.5rem" }}>Tools</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              <li><Link href="/hypotheek" style={{ color: "var(--secondary)", textDecoration: "none" }}>Hypotheek Berekenen</Link></li>
              <li><Link href="/studentenlening" style={{ color: "var(--secondary)", textDecoration: "none" }}>Studentenlening</Link></li>
              <li><Link href="/warmtepomp" style={{ color: "var(--secondary)", textDecoration: "none" }}>Warmtepomp ROI</Link></li>
              <li><Link href="/kattenchip" style={{ color: "var(--secondary)", textDecoration: "none" }}>Kattenchip</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: "1.5rem" }}>Over Ons</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              <li><Link href="/over" style={{ color: "var(--secondary)", textDecoration: "none" }}>Over bereken.ing</Link></li>
              <li><Link href="/privacy" style={{ color: "var(--secondary)", textDecoration: "none" }}>Privacybeleid</Link></li>
              <li><Link href="/contact" style={{ color: "var(--secondary)", textDecoration: "none" }}>Contact</Link></li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: "3rem", paddingTop: "2rem", textAlign: "center", color: "var(--secondary)", fontSize: "0.8rem" }}>
          &copy; {new Date().getFullYear()} bereken.ing. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
}
