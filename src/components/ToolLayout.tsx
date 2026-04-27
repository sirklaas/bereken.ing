import React from "react";
import Sidebar from "@/components/Sidebar";
import AdSenseSlot from "@/components/AdSenseSlot";

interface ToolLayoutProps {
  children: React.ReactNode;
  intro?: string;
  title: string;
  subtitle?: string;
}

export default function ToolLayout({ children, intro, title, subtitle }: ToolLayoutProps) {
  return (
    <div className="container" style={{ paddingTop: "4rem", paddingBottom: "8rem" }}>
      
      {/* 1. The Heading Stack (Centered) */}
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        {intro && <h3 style={{ marginBottom: "0.5rem" }}>{intro}</h3>}
        <h1>{title}</h1>
        {subtitle && <h2 style={{ fontSize: "1.2rem", fontWeight: 500, opacity: 0.7, marginTop: "-0.5rem" }}>{subtitle}</h2>}
      </div>

      {/* 2. The 3-Column Pristine Grid */}
      <div className="pristine-grid">
        
        {/* Left Ad Column */}
        <div className="ad-sidebar">
          <div className="ad-container" style={{ background: "#f472b6", height: "400px" }}>Advertentie 1</div>
          <div className="ad-container" style={{ background: "#f472b6", height: "400px" }}>Advertentie 2</div>
        </div>

        {/* Center Main Content */}
        <main>
          {children}
        </main>

        {/* Right Ad Column */}
        <div className="ad-sidebar">
          <div className="ad-container" style={{ background: "#f472b6", height: "400px" }}>Advertentie 3</div>
          <div className="ad-container" style={{ background: "#f472b6", height: "600px" }}>Advertentie 4 of YouTube Video</div>
        </div>

      </div>
    </div>
  );
}
