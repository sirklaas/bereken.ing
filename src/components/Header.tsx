"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const CATEGORIES = [
  { 
    name: "Aftellen & Fun", 
    links: [
      { name: "8-Ball", href: "/fun/8ball" },
      { name: "Kerst", href: "/fun/kerst" },
      { name: "Death Clock", href: "/fun/dagentot" },
      { name: "I Ching", href: "/fun/iching" },
    ]
  },
  { 
    name: "Wonen & Energie", 
    links: [
      { name: "Hypotheek", href: "/hypotheek" },
      { name: "Zonnepanelen", href: "/wonen/zonnepanelen" },
      { name: "Warmtepomp", href: "/warmtepomp" },
      { name: "Isolatie", href: "/isolatie" },
    ]
  },
  { 
    name: "Geld & Verzekeringen", 
    links: [
      { name: "Autoverzekering", href: "/geld/autokosten" },
      { name: "Inboedel", href: "/geld/inboedelverzekering" },
      { name: "Reisverzekering", href: "/geld/reisverzekering" },
      { name: "Levensverzekering", href: "/geld/levensverzekering" },
    ]
  }
];

export default function Header() {
  const [hasShadow, setHasShadow] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
      height: "100px"
    }}>
      <div className="container" style={{ 
        display: "grid", 
        gridTemplateColumns: "1fr auto 1fr", 
        alignItems: "center", 
        height: "100%",
        width: "100%"
      }}>
        
        {/* Left Side: Home link */}
        <div>
          <Link href="/" style={{ color: "white", textDecoration: "none", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.1em" }}>HOME</Link>
        </div>

        {/* Center Side: Logo (Absolute Center) */}
        <div style={{ textAlign: "center" }}>
          <Link href="/" style={{ 
            fontSize: "2.4rem", 
            fontWeight: 400, 
            textDecoration: "none", 
            fontFamily: "var(--font-heading)",
            letterSpacing: "-0.05em",
            color: "white"
          }}>
            bereken<span style={{ fontWeight: 800, color: "var(--primary-accent)" }}>.ing</span>
          </Link>
        </div>
        
        {/* Right Side: Dropdown Menu */}
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "1.5rem" }}>
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", fontWeight: 700 }}>Andere hulpjes:</span>
          
          <div style={{ display: "flex", gap: "1rem" }}>
            {CATEGORIES.map((cat) => (
              <div 
                key={cat.name} 
                onMouseEnter={() => setOpenDropdown(cat.name)}
                onMouseLeave={() => setOpenDropdown(null)}
                style={{ position: "relative" }}
              >
                <button 
                  onClick={() => setOpenDropdown(openDropdown === cat.name ? null : cat.name)}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "none",
                    color: "white",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    padding: "0.6rem 1rem",
                    borderRadius: "8px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem"
                  }}
                >
                  {cat.name.split(" ")[0]} <span style={{ fontSize: "0.6rem" }}>▼</span>
                </button>

                {openDropdown === cat.name && (
                  <div style={{
                    position: "absolute",
                    top: "100%",
                    right: 0,
                    width: "240px",
                    background: "white",
                    borderRadius: "12px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                    padding: "0.8rem",
                    marginTop: "0.5rem",
                    display: "grid",
                    gap: "0.3rem",
                    animation: "slideUp 0.2s ease-out"
                  }}>
                    {cat.links.map(link => (
                      <Link 
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpenDropdown(null)}
                        style={{
                          textDecoration: "none",
                          fontSize: "0.85rem",
                          color: "var(--heading-color)",
                          fontWeight: 600,
                          padding: "0.6rem 0.8rem",
                          borderRadius: "6px",
                          transition: "var(--transition)"
                        }}
                        className="dropdown-item"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .dropdown-item:hover {
          background: #f1f5f9;
          color: var(--primary-accent);
          transform: translateX(3px);
        }
      `}</style>
    </header>
  );
}
