"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const CATEGORIES = [
  { 
    name: "Wonen", 
    links: [
      { name: "Hypotheek", href: "/hypotheek" },
      { name: "Zonnepanelen", href: "/wonen/zonnepanelen" },
      { name: "Warmtepomp", href: "/warmtepomp" },
      { name: "Isolatie", href: "/isolatie" },
      { name: "Thuisbatterij", href: "/wonen/thuisbatterij" },
    ]
  },
  { 
    name: "Geld", 
    links: [
      { name: "Studieschuld DUO", href: "/studentenlening" },
      { name: "Vaste Lasten", href: "/vaste-lasten" },
      { name: "Uurtarief ZZP", href: "/uurtarief" },
      { name: "Pensioen", href: "/pensioen" },
      { name: "Eigen Risico", href: "/eigen-risico" },
    ]
  },
  { 
    name: "Verzekering", 
    links: [
      { name: "Autoverzekering", href: "/geld/autokosten" },
      { name: "Begrafenis", href: "/geld/begrafenis" },
      { name: "Crematie", href: "/geld/crematie" },
      { name: "Inboedel", href: "/geld/inboedelverzekering" },
      { name: "Reisverzekering", href: "/geld/reisverzekering" },
    ]
  },
  { 
    name: "Gezondheid", 
    links: [
      { name: "BMI & Gezondheid", href: "/gezondheid" },
      { name: "Alcohol Promillage", href: "/alcohol" },
    ]
  },
  { 
    name: "Fun", 
    links: [
      { name: "Magische 8-Ball", href: "/fun/8ball" },
      { name: "Kerst Countdown", href: "/fun/kerst" },
      { name: "Death Clock", href: "/fun/dagentot" },
      { name: "I Ching", href: "/fun/iching" },
      { name: "AI Fun", href: "/ai" },
    ]
  }
];

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, []);

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
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image 
              src="/logo.png" 
              alt="bereken.ing" 
              width={220} 
              height={60} 
              style={{ objectFit: "contain" }}
              priority
            />
          </Link>
          <span style={{ fontSize: "0.5rem", color: "rgba(255,255,255,0.9)", fontWeight: 900, marginTop: "0.2rem", background: "#FF007F", padding: "2px 8px", borderRadius: "4px" }}>v3.0</span>
        </div>
        
        {/* Right: Desktop Navigation */}
        <nav className="desktop-nav" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.5rem" }}>
          <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.7rem", fontWeight: 900, letterSpacing: "0.05em" }}>ANDERE HANDIGE HULPJES</span>
          
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
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className="mobile-hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: "none",
            background: "rgba(255,255,255,0.25)",
            border: "none",
            color: "white",
            padding: "0.8rem",
            borderRadius: "12px",
            cursor: "pointer",
            zIndex: 10001
          }}
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay" style={{
            position: "fixed",
            top: "100px",
            left: 0,
            right: 0,
            bottom: 0,
            background: "#9FA0C3",
            padding: "2rem",
            overflowY: "auto",
            zIndex: 10000,
            display: "flex",
            flexDirection: "column",
            gap: "2rem"
          }}>
            {CATEGORIES.map((cat) => (
              <div key={cat.name}>
                <h3 style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", fontWeight: 900, marginBottom: "1rem", letterSpacing: "0.1em" }}>{cat.name.toUpperCase()}</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem" }}>
                  {cat.links.map(link => (
                    <Link 
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{
                        background: "rgba(255,255,255,0.15)",
                        color: "white",
                        textDecoration: "none",
                        padding: "0.8rem 1rem",
                        borderRadius: "10px",
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        textAlign: "center"
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-hamburger {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
