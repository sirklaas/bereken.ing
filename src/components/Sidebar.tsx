"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const categories = [
    { title: "Fun", links: [
      { name: "Magische 8-Ball", href: "/fun/8ball", icon: "🎱" },
      { name: "I Ching (Itjing)", href: "/fun/iching", icon: "🏯" },
      { name: "Dagentot", href: "/fun/dagentot", icon: "⏳" },
    ]},
    { title: "Wonen & Energie", links: [
      { name: "Maximale Hypotheek", href: "/hypotheek", icon: "🏠" },
      { name: "Warmtepomp Rendement", href: "/warmtepomp", icon: "🔥" },
      { name: "Isolatie Besparing", href: "/isolatie", icon: "🧱" },
    ]},
    { title: "Gezondheid", links: [
      { name: "BMI & Calorieën", href: "/gezondheid", icon: "🥗" },
      { name: "Eigen Risico", href: "/eigen-risico", icon: "⚕️" },
      { name: "Alcohol Promille", href: "/alcohol", icon: "🍷" },
    ]},
    { title: "Technologie & SaaS", links: [
      { name: "AI Besparing", href: "/ai", icon: "🤖" },
      { name: "Uurtarief Berekenen", href: "/uurtarief", icon: "💼" },
    ]},
    { title: "Business & ZZP", links: [
      { name: "Vaste Lasten", href: "/vaste-lasten", icon: "📊" },
      { name: "Pensioen Opbouwen", href: "/pensioen", icon: "🏦" },
      { name: "Studieschuld DUO", href: "/studentenlening", icon: "🎓" },
    ]},
  ];

  return (
    <aside style={{ position: "sticky", top: "100px", display: "grid", gap: "2rem" }}>
      {categories.map((cat) => (
        <div key={cat.title}>
          <h4 style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--secondary)", marginBottom: "0.8rem", paddingLeft: "1rem" }}>
            {cat.title}
          </h4>
          <nav style={{ display: "grid", gap: "0.2rem" }}>
            {cat.links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`sidebar-category ${pathname === link.href ? "active" : ""}`}
              >
                <span>{link.icon}</span>
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      ))}
      
      {/* Sidebar Ad Unit */}
      <div style={{ marginTop: "1rem", padding: "1rem", background: "#f8fafc", borderRadius: "12px", border: "1px solid #f1f5f9" }}>
        <p style={{ fontSize: "0.75rem", color: "var(--secondary)", textAlign: "center" }}>Advertentie</p>
        <div style={{ minHeight: "250px", display: "flex", alignItems: "center", justifyContent: "center", color: "#cbd5e1", fontSize: "0.7rem", fontWeight: 700 }}>
          SKYSCRAPER AD
        </div>
      </div>
    </aside>
  );
}
