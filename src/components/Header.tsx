"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const CATEGORIES = [
  { 
    name: "Wonen", 
    links: [
      { name: "Hypotheek", href: "/hypotheek" },
      { name: "Zonnepanelen", href: "/wonen/zonnepanelen" },
      { name: "Warmtepomp", href: "/warmtepomp" },
    ]
  },
  { 
    name: "Geld", 
    links: [
      { name: "Autoverzekering", href: "/geld/autokosten" },
      { name: "Vaste Lasten", href: "/vaste-lasten" },
      { name: "Uurtarief", href: "/uurtarief" },
    ]
  },
  { 
    name: "Fun", 
    links: [
      { name: "8-Ball", href: "/fun/8ball" },
      { name: "Kerst Countdown", href: "/fun/kerst" },
      { name: "Verjaardag", href: "/fun/verjaardag" },
      { name: "I Ching", href: "/fun/iching" },
      { name: "Death Clock", href: "/fun/dagentot" },
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
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 2000,
      background: "#9FA0C3", // Periwinkle from wireframe
      borderBottom: "1px solid rgba(255,255,255,0.2)",
      height: "100px",
      display: "flex",
      alignItems: "center"
    }}>
      <div className="container" style={{ 
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center", 
        width: "100%"
      }}>
        
        {/* Left: Home */}
        <Link href="/" style={{ color: "white", textDecoration: "none", fontWeight: 900, fontSize: "0.9rem" }}>HOME</Link>

        {/* Center: Logo (Absolute) */}
        <div style={{ 
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10
        }}>
          <Link href="/" style={{ 
            fontSize: "2.6rem", 
            fontWeight: 400, 
            textDecoration: "none", 
            fontFamily: "var(--font-heading)",
            color: "white"
          }}>
            bereken<span style={{ fontWeight: 800, color: "var(--primary-accent)" }}>.ing</span>
          </Link>
        </div>
        
        {/* Right: Dropdowns */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.75rem", fontWeight: 800 }}>ANDERE HULPJES:</span>
          
          <div style={{ display: "flex", gap: "0.5rem" }}>
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
                    background: "rgba(255,255,255,0.2)",
                    border: "none",
                    color: "white",
                    fontSize: "0.8rem",
                    fontWeight: 900,
                    padding: "0.5rem 1rem",
                    borderRadius: "8px",
                    cursor: "pointer",
                    textTransform: "uppercase"
                  }}>
                  {cat.name} ▾
                </button>

                {openDropdown === cat.name && (
                  <div style={{
                    position: "absolute",
                    top: "100%",
                    right: 0,
                    width: "220px",
                    background: "white",
                    borderRadius: "12px",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
                    padding: "0.8rem",
                    marginTop: "0.5rem",
                    display: "grid",
                    gap: "0.2rem"
                  }}>
                    {cat.links.map(link => (
                      <Link 
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpenDropdown(null)}
                        style={{
                          textDecoration: "none",
                          fontSize: "0.85rem",
                          color: "#1e293b",
                          fontWeight: 600,
                          padding: "0.7rem 1rem",
                          borderRadius: "8px"
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
        .dropdown-item:hover { background: #f1f5f9; color: var(--primary-accent); }
        @media (max-width: 1024px) {
          span { display: none; }
        }
      `}</style>
    </header>
  );
}
