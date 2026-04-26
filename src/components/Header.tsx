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
    { name: "Wonen", href: "/warmtepomp" },
    { name: "Hypotheek", href: "/hypotheek" },
    { name: "ZZP", href: "/uurtarief" },
    { name: "Gezondheid", href: "/gezondheid" },
    { name: "Over ons", href: "/over" }
  ];

  return (
    <header className={hasShadow ? "header-shadow" : ""} style={{
      position: "sticky",
      top: 0,
      zIndex: 1000,
      background: "var(--background)",
      transition: "all 0.3s ease",
      borderBottom: "1px solid var(--border)"
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
          color: "var(--heading-color)",
          flexShrink: 0
        }}>
          bereken<span style={{ fontWeight: 800, color: "var(--primary-accent)" }}>.ing</span>
        </Link>
        
        {/* Mobile Swipeable Nav / Desktop Flex Nav */}
        <nav className="mobile-swipe-nav" style={{ 
          display: "flex", 
          gap: "2rem",
          marginLeft: "2rem"
        }}>
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              style={{ 
                textDecoration: "none", 
                fontSize: "0.9rem", 
                color: pathname === link.href ? "var(--primary-accent)" : "var(--heading-color)", 
                fontWeight: pathname === link.href ? 800 : 600,
                opacity: pathname === link.href ? 1 : 0.7,
                transition: "var(--transition)"
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
