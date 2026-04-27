"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const CATEGORIES = [
  { 
    name: "Wonen & Energie", 
    links: [
      { name: "Hypotheek", href: "/hypotheek" },
      { name: "Zonnepanelen", href: "/wonen/zonnepanelen" },
      { name: "Warmtepomp", href: "/warmtepomp" },
    ]
  },
  { 
    name: "Geld & Werk", 
    links: [
      { name: "Uurtarief", href: "/uurtarief" },
      { name: "Autokosten", href: "/geld/autokosten" },
      { name: "Vaste Lasten", href: "/vaste-lasten" },
    ]
  },
  { 
    name: "Fun & Aftellen", 
    links: [
      { name: "8-Ball", href: "/fun/8ball" },
      { name: "Kerst Countdown", href: "/fun/kerst" },
      { name: "Death Clock", href: "/fun/dagentot" },
    ]
  }
];

export default function Header() {
  const [hasShadow, setHasShadow] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setHasShadow(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={hasShadow ? "header-shadow" : ""} style={{
      position: "sticky",
      top: 0,
      zIndex: 1000,
      background: "rgba(159, 160, 195, 0.95)", 
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(255,255,255,0.2)",
      height: "100px",
      display: "flex",
      alignItems: "center"
    }}>
      <div className="container" style={{ 
        display: "grid", 
        gridTemplateColumns: "1fr auto 1fr", 
        alignItems: "center", 
        width: "100%" 
      }}>
        
        {/* Left: Home Link / Logo Icon */}
        <div>
           <Link href="/" style={{ color: "white", textDecoration: "none", fontWeight: 800, fontSize: "0.9rem" }}>HOME</Link>
        </div>

        {/* Center: Logo (Pristine focus) */}
        <Link href="/" style={{ 
          fontSize: "2.4rem", 
          fontWeight: 400, 
          textDecoration: "none", 
          fontFamily: "var(--font-heading)",
          letterSpacing: "-0.05em",
          color: "white",
          textAlign: "center"
        }}>
          bereken<span style={{ fontWeight: 800, color: "var(--primary-accent)" }}>.ing</span>
        </Link>
        
        {/* Right: Dropdown Categories */}
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "2rem" }}>
          <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.75rem", fontWeight: 800 }}>CATAGORIEN:</span>
          
          <nav style={{ display: "flex", gap: "1.5rem" }}>
            {CATEGORIES.map((cat) => (
              <div 
                key={cat.name} 
                onMouseEnter={() => setActiveDropdown(cat.name)}
                onMouseLeave={() => setActiveDropdown(null)}
                style={{ position: "relative" }}
              >
                <button style={{
                  background: "none",
                  border: "none",
                  color: "white",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  opacity: activeDropdown === cat.name ? 1 : 0.8
                }}>
                  {cat.name} <span style={{ fontSize: "0.6rem" }}>▼</span>
                </button>

                {activeDropdown === cat.name && (
                  <div style={{
                    position: "absolute",
                    top: "100%",
                    right: 0,
                    width: "220px",
                    background: "white",
                    borderRadius: "12px",
                    boxShadow: "var(--shadow-lg)",
                    padding: "1rem",
                    marginTop: "0.5rem",
                    display: "grid",
                    gap: "0.5rem",
                    animation: "slideUp 0.3s ease"
                  }}>
                    {cat.links.map(link => (
                      <Link 
                        key={link.href}
                        href={link.href}
                        style={{
                          textDecoration: "none",
                          fontSize: "0.9rem",
                          color: "var(--heading-color)",
                          fontWeight: 600,
                          padding: "0.6rem 1rem",
                          borderRadius: "8px",
                          transition: "var(--transition)"
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "#f1f5f9")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
