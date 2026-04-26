"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={hasShadow ? "header-shadow" : ""} style={{
      position: "sticky",
      top: 0,
      zIndex: 1000,
      background: "var(--header-bg)",
      transition: "background 0.3s ease, box-shadow 0.3s ease",
      borderBottom: "1px solid rgba(0,0,0,0.05)"
    }}>
      <div className="container" style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        height: "80px" 
      }}>
        <Link href="/" style={{ 
          fontSize: "1.8rem", 
          fontWeight: 400, 
          textDecoration: "none", 
          fontFamily: "var(--font-heading)",
          letterSpacing: "-0.05em",
          color: "var(--heading-color)"
        }}>
          bereken<span style={{ fontWeight: 800, color: "var(--primary-accent)" }}>.ing</span>
        </Link>
        
        <nav style={{ display: "flex", gap: "2.5rem" }}>
          <Link href="/hypotheek" style={{ textDecoration: "none", fontSize: "0.95rem", color: "var(--heading-color)", fontWeight: 600 }}>Hypotheek</Link>
          <Link href="/studentenlening" style={{ textDecoration: "none", fontSize: "0.95rem", color: "var(--heading-color)", fontWeight: 600 }}>DUO</Link>
          <Link href="/gezondheid" style={{ textDecoration: "none", fontSize: "0.95rem", color: "var(--heading-color)", fontWeight: 600 }}>Gezondheid</Link>
          <Link href="/uurtarief" style={{ textDecoration: "none", fontSize: "0.95rem", color: "var(--heading-color)", fontWeight: 600 }}>ZZP</Link>
        </nav>
      </div>
    </header>
  );
}
