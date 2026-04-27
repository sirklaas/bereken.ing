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
      { name: "Isolatie", href: "/isolatie" },
    ]
  },
  { 
    name: "Geld", 
    links: [
      { name: "Verzekeringen", href: "/geld/autokosten" },
      { name: "Vaste Lasten", href: "/vaste-lasten" },
      { name: "Uurtarief", href: "/uurtarief" },
    ]
  },
  { 
    name: "Fun", 
    links: [
      { name: "Magische 8-Ball", href: "/fun/8ball" },
      { name: "Kerst Countdown", href: "/fun/kerst" },
      { name: "Death Clock", href: "/fun/dagentot" },
      { name: "I Ching", href: "/fun/iching" },
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
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center", 
        height: "100%"
      }}>
        
        {/* Left: Home */}
        <Link href="/" style={{ color: "white", textDecoration: "none", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.1em" }}>HOME</Link>

        {/* Center: Logo (Absolute Center) */}
        <div style={{ 
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center"
        }}>
          <Link href="/" style={{ 
            fontSize: "2.5rem", 
            fontWeight: 400, 
            textDecoration: "none", 
            fontFamily: "var(--font-heading)",
            letterSpacing: "-0.05em",
            color: "white"
          }}>
            bereken<span style={{ fontWeight: 800, color: "var(--primary-accent)" }}>.ing</span>
          </Link>
        </div>
        
        {/* Right: "Andere hulpjes:" + Dropdowns */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", fontWeight: 700 }}>Andere hulpjes:</span>
          
          <div style={{ display: "flex", gap: "0.8rem" }}>
            {CATEGORIES.map((cat) => (
              <div 
                key={cat.name} 
                onMouseEnter={() => setOpenDropdown(cat.name)}
                onMouseLeave={() => setOpenDropdown(null)}
                style={{ position: "relative" }}
              >
                <button style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "none",
                  color: "white",
                  fontSize: "0.8rem",
                  fontWeight: 800,
                  padding: "0.5rem 0.9rem",
                  borderRadius: "10px",
                  cursor: "pointer"
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
                    borderRadius: "14px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                    padding: "0.8rem",
                    marginTop: "0.5rem",
                    display: "grid",
                    gap: "0.2rem",
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
        .dropdown-item:hover {
          background: #f1f5f9;
          color: var(--primary-accent);
        }
      `}</style>
    </header>
  );
}
