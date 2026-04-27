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
      { name: "Autoverzekering", href: "/geld/autokosten" },
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 9999,
      background: "#9FA0C3", 
      borderBottom: "1px solid rgba(255,255,255,0.3)",
      height: "100px",
      display: "flex",
      alignItems: "center"
    }}>
      <div className="container" style={{ 
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center", 
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "0 2rem"
      }}>
        
        {/* Left: Logo & Version Stamp */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <Link href="/" style={{ 
            fontSize: "2.6rem", 
            fontWeight: 400, 
            textDecoration: "none", 
            fontFamily: "var(--font-heading)",
            color: "white",
            lineHeight: 1
          }}>
            bereken<span style={{ fontWeight: 800, color: "#FF007F" }}>.ing</span>
          </Link>
          <span style={{ fontSize: "0.5rem", color: "rgba(255,255,255,0.9)", fontWeight: 900, marginTop: "0.2rem", background: "#FF007F", padding: "2px 8px", borderRadius: "4px" }}>v2.3.0-ADS-FIX</span>
        </div>
        
        {/* Right: Dropdowns */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.75rem", fontWeight: 800 }}>ANDERE HULPJES:</span>
          
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {CATEGORIES.map((cat) => (
              <div 
                key={cat.name} 
                onMouseEnter={() => setOpenDropdown(cat.name)}
                onMouseLeave={() => setOpenDropdown(null)}
                style={{ position: "relative" }}
              >
                <button style={{
                  background: "rgba(255,255,255,0.25)",
                  border: "none",
                  color: "white",
                  fontSize: "0.85rem",
                  fontWeight: 900,
                  padding: "0.6rem 1rem",
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
                    borderRadius: "16px",
                    boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                    padding: "0.8rem",
                    marginTop: "0.5rem",
                    zIndex: 10000
                  }}>
                    {cat.links.map(link => (
                      <Link 
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpenDropdown(null)}
                        style={{
                          textDecoration: "none",
                          fontSize: "0.9rem",
                          color: "#0f172a",
                          fontWeight: 700,
                          padding: "0.7rem 1rem",
                          borderRadius: "8px",
                          display: "block"
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
          </div>
        </div>
      </div>
    </header>
  );
}
