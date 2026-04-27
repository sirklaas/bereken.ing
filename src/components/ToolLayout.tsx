import React from "react";

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
      <div style={{ textAlign: "center", marginBottom: "5.5rem" }}>
        {intro && (
          <h3 style={{ 
            marginBottom: "0.8rem", 
            color: "var(--primary-accent)", 
            letterSpacing: "0.15em", 
            fontWeight: 800,
            fontSize: "0.8rem"
          }}>
            {intro.toUpperCase()}
          </h3>
        )}
        <h1 style={{ fontSize: "clamp(2.5rem, 8vw, 4.8rem)", marginBottom: "1rem", lineHeight: 1.1 }}>{title}</h1>
        {subtitle && (
          <h2 style={{ 
            fontSize: "1.4rem", 
            fontWeight: 500, 
            opacity: 0.5, 
            maxWidth: "800px", 
            margin: "0 auto",
            lineHeight: 1.4
          }}>
            {subtitle}
          </h2>
        )}
      </div>

      {/* 2. The 3-Column Pristine Grid (Sidebars are strictly for Ads) */}
      <div className="pristine-grid">
        
        {/* Left Ad Column */}
        <div className="ad-sidebar">
          <div className="ad-container" style={{ 
            background: "#f472b6", 
            width: "300px", 
            height: "600px", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            color: "white",
            fontWeight: 800,
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(244, 114, 182, 0.2)"
          }}>
            AD 300x600
          </div>
        </div>

        {/* Center Main Content */}
        <main style={{ minWidth: 0 }}>
          {children}
        </main>

        {/* Right Ad Column */}
        <div className="ad-sidebar">
          <div className="ad-container" style={{ 
            background: "#f472b6", 
            width: "300px", 
            height: "600px", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            color: "white",
            fontWeight: 800,
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(244, 114, 182, 0.2)"
          }}>
            AD 300x600
          </div>
          <div className="ad-container" style={{ 
            background: "#f472b6", 
            width: "300px", 
            height: "250px", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            color: "white",
            fontWeight: 800,
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(244, 114, 182, 0.2)",
            marginTop: "2rem"
          }}>
            AD 300x250
          </div>
        </div>

      </div>
    </div>
  );
}
