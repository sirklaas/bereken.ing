"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [hasShadow, setHasShadow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Hypotheek", href: "/hypotheek" },
    { name: "AI", href: "/ai" },
    { name: "Energie", href: "/wonen/zonnepanelen" },
    { name: "Fun", href: "/fun/8ball" },
  ];

  return (
    <header className={hasShadow ? "header-shadow" : ""} style={{
      position: "sticky",
      top: 0,
      zIndex: 1000,
      background: "rgba(159, 160, 195, 0.8)", // Frosted Header from wireframe
      backdropFilter: "blur(12px)",
      transition: "var(--transition)",
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
        
        {/* Left Spacing (to keep logo centered) */}
        <div />

        {/* Centered Logo */}
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
        
        {/* Right Categories */}
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "1rem" }}>
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase" }}>Catagorien:</span>
          <nav className="mobile-swipe-nav" style={{ display: "flex", gap: "1.5rem" }}>
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                style={{ 
                  textDecoration: "none", 
                  fontSize: "0.85rem", 
                  color: "white", 
                  fontWeight: 700,
                  opacity: pathname === link.href ? 1 : 0.7,
                  transition: "var(--transition)"
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
