import Link from "next/link";
import { ALL_TOOLS, FOOTER_LINKS } from "@/config/siteConfig";

export default function Footer() {
  // Group tools by category for the sitemap
  const categories = Array.from(new Set(ALL_TOOLS.map(t => t.category)));

  return (
    <footer style={{ 
      padding: "6rem 0", 
      background: "#f8fafc", 
      borderTop: "1px solid var(--border)",
      marginTop: "auto"
    }}>
      <div className="container" style={{ 
        display: "grid", 
        gridTemplateColumns: "1.5fr 3.5fr", 
        gap: "4rem" 
      }}>
        
        {/* About Column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <Link href="/">
            <img 
              src="/logo.png" 
              alt="bereken.ing" 
              style={{ height: "40px", width: "auto" }} 
            />
          </Link>
          <p style={{ fontSize: "0.9rem", color: "var(--secondary)", lineHeight: 1.6, maxWidth: "250px" }}>
            De slimste en vlijmscherpe rekentools voor al je dagelijkse vragen. Van financiën tot vrije tijd.
          </p>
          <div style={{ marginTop: "1rem" }}>
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

        {/* Sitemap Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", 
          gap: "3rem" 
        }}>
          {categories.map(cat => (
            <div key={cat}>
              <h4 style={{ 
                fontSize: "0.75rem", 
                textTransform: "uppercase", 
                letterSpacing: "0.15em", 
                marginBottom: "1.5rem",
                color: "var(--heading-color)",
                opacity: 0.6
              }}>{cat}</h4>
              <div style={{ display: "grid", gap: "0.8rem" }}>
                {ALL_TOOLS.filter(t => t.category === cat).map(tool => (
                  <Link 
                    key={tool.href} 
                    href={tool.href} 
                    style={{ fontSize: "0.85rem", color: "var(--secondary)", textDecoration: "none" }}
                  >
                    {tool.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Legal Column */}
          <div>
            <h4 style={{ 
              fontSize: "0.75rem", 
              textTransform: "uppercase", 
              letterSpacing: "0.15em", 
              marginBottom: "1.5rem",
              color: "var(--heading-color)",
              opacity: 0.6
            }}>Juridisch</h4>
            <div style={{ display: "grid", gap: "0.8rem" }}>
              {FOOTER_LINKS.legal.map(link => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  style={{ fontSize: "0.85rem", color: "var(--secondary)", textDecoration: "none" }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
      
      <div className="container" style={{ marginTop: "6rem", paddingTop: "2rem", borderTop: "1px solid #e2e8f0", textAlign: "center" }}>
        <p style={{ fontSize: "0.8rem", color: "var(--secondary)" }}>
          &copy; {new Date().getFullYear()} bereken.ing. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  );
}
