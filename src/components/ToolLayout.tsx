import React from "react";

interface ToolLayoutProps {
  children: React.ReactNode;
  intro?: string;
  title: string;
  subtitle?: string;
}

export default function ToolLayout({ children, intro, title, subtitle }: ToolLayoutProps) {
  return (
    <div className="fluid-container" style={{ paddingTop: "4rem", paddingBottom: "8rem" }}>
      
      {/* 1. Centered Header Section */}
      <div style={{ textAlign: "center", marginBottom: "6rem" }}>
        {intro && <h3 style={{ marginBottom: "0.8rem", color: "var(--primary-accent)", letterSpacing: "0.2em", fontWeight: 800, fontSize: "0.8rem" }}>{intro.toUpperCase()}</h3>}
        <h1 style={{ fontSize: "clamp(3rem, 10vw, 5rem)", marginBottom: "1rem", lineHeight: 1 }}>{title}</h1>
        {subtitle && <h2 style={{ fontSize: "1.4rem", fontWeight: 500, opacity: 0.5, maxWidth: "850px", margin: "0 auto", lineHeight: 1.4 }}>{subtitle}</h2>}
      </div>

      {/* 2. 3-Column Pristine Grid */}
      <div className="pristine-grid">
        
        {/* Left Ad Sidebar (Pink Placeholder) */}
        <div className="ad-sidebar left-ad">
          <div style={{ 
            background: "#FF007F", 
            width: "300px", 
            height: "600px", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            color: "white",
            fontWeight: 900,
            borderRadius: "20px"
          }}>
            ADSENSE 300x600
          </div>
        </div>

        {/* Center: The actual Tool */}
        <main style={{ minWidth: 0 }}>
          {children}
        </main>

        {/* Right Ad Sidebar (Pink Placeholder) */}
        <div className="ad-sidebar right-ad">
          <div style={{ 
            background: "#FF007F", 
            width: "300px", 
            height: "250px", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            color: "white",
            fontWeight: 900,
            borderRadius: "20px",
            marginBottom: "2rem"
          }}>
            ADSENSE 300x250
          </div>
          <div style={{ 
            background: "#FF007F", 
            width: "300px", 
            height: "600px", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            color: "white",
            fontWeight: 900,
            borderRadius: "20px"
          }}>
            ADSENSE 300x600
          </div>
        </div>

      </div>
    </div>
  );
}
