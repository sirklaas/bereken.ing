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
      
      {/* Centered Heading Stack */}
      <div style={{ textAlign: "center", marginBottom: "5rem" }}>
        {intro && <h3 style={{ marginBottom: "0.5rem", color: "var(--primary-accent)", letterSpacing: "0.1em", fontWeight: 800 }}>{intro.toUpperCase()}</h3>}
        <h1 style={{ fontSize: "4.5rem", marginBottom: "1rem" }}>{title}</h1>
        {subtitle && <h2 style={{ fontSize: "1.4rem", fontWeight: 500, opacity: 0.6, maxWidth: "800px", margin: "0 auto" }}>{subtitle}</h2>}
      </div>

      {/* 3-Column Pristine Grid */}
      <div className="pristine-grid">
        
        {/* Left Ad Column (Standard Skyscraper 300x600) */}
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
            borderRadius: "12px"
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
            borderRadius: "12px"
          }}>
            AD 300x250
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
            height: "250px", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            color: "white",
            fontWeight: 800,
            borderRadius: "12px"
          }}>
            AD 300x250
          </div>
          <div className="ad-container" style={{ 
            background: "#f472b6", 
            width: "300px", 
            height: "600px", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            color: "white",
            fontWeight: 800,
            borderRadius: "12px"
          }}>
            AD 300x600
          </div>
        </div>

      </div>
    </div>
  );
}
