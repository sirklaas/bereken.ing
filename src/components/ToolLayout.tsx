"use client";

import React from "react";
import YouTubeEmbed from "./YouTubeEmbed";
import PartnerGrid from "./PartnerGrid";
import { getVideoIdByTopic } from "@/config/videoConfig";
import { getPartnersByTopic } from "@/config/partnerConfig";

interface ToolLayoutProps {
  children: React.ReactNode;
  intro?: string;
  title: string;
  subtitle?: string;
  topic?: string;
  youtubeId?: string;
}

export default function ToolLayout({ children, intro, title, subtitle, topic, youtubeId }: ToolLayoutProps) {
  // Automatically find a video and partners if a topic is provided
  const finalVideoId = youtubeId || (topic ? getVideoIdByTopic(topic) : null);
  const partners = topic ? getPartnersByTopic(topic) : [];

  return (
    <div id="main-content" className="fluid-container" style={{ paddingTop: "4rem", paddingBottom: "8rem" }}>
      
      {/* 1. Centered Header Section */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        {intro && (
          <h3 style={{ 
            marginBottom: "0.8rem", 
            color: "var(--primary-accent)", 
            letterSpacing: "0.2em", 
            fontWeight: 800, 
            fontSize: "0.8rem",
            textAlign: "center"
          }}>
            {intro.toUpperCase()}
          </h3>
        )}
        <h1 style={{ fontSize: "clamp(3rem, 10vw, 5rem)", marginBottom: "1rem", lineHeight: 1 }}>{title}</h1>
        {subtitle && <h2 style={{ fontSize: "1.4rem", fontWeight: 500, opacity: 0.5, maxWidth: "850px", margin: "0 auto", lineHeight: 1.4 }}>{subtitle}</h2>}
      </div>

      {/* 2. 3-Column Layout (Independent of fluid-grid to prevent overlap) */}
      <div className="main-tool-grid">
        {/* Left Side Slot */}
        <div className="side-slot left-slot" style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ 
            background: "#FF007F", 
            width: "300px", 
            height: "600px", 
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: 900,
            fontSize: "1.2rem"
          }}>
            RESERVED SLOT
          </div>
        </div>

        {/* Center: The actual Tool (Occupies more space on desktop) */}
        <main style={{ minWidth: 0, gridColumn: "span 1" }}>
          {children}

        </main>

        {/* Right Side Slot */}
        <div className="side-slot right-slot" style={{ display: "flex", flexDirection: "column", gap: "2rem", alignItems: "center" }}>
          <div style={{ background: "#FF007F", width: "300px", height: "250px", borderRadius: "20px" }} />
          <div style={{ background: "#FF007F", width: "300px", height: "600px", borderRadius: "20px" }} />
        </div>

        {/* Automated Partner Grid - Spanning Full Width */}
        {partners.length > 0 && (
          <div style={{ gridColumn: "1 / -1", marginTop: "4rem" }}>
            <PartnerGrid partners={partners} title={`Populaire partners voor ${title}`} />
          </div>
        )}

        {/* Automated YouTube Section - Spanning Full Width */}
        {finalVideoId && (
          <div style={{ gridColumn: "1 / -1", marginTop: "4rem", paddingTop: "4rem", borderTop: "1px solid var(--border)", textAlign: "center" }}>
            <h3 style={{ marginBottom: "2rem" }}>Video uitleg: {title}</h3>
            <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
              <YouTubeEmbed videoId={finalVideoId} title={title} />
              <p style={{ fontSize: "0.95rem", color: "var(--secondary)", lineHeight: 1.6, marginTop: "1.5rem" }}>
                Bekijk onze video voor een diepgaande uitleg over hoe deze berekening werkt en waar je op moet letten bij {title.toLowerCase()}.
              </p>
            </div>
          </div>
        )}

      </div>
      
      <style jsx>{`
        @media (min-width: 1280px) {
          .main-tool-grid {
            grid-template-columns: 300px 1fr 300px !important;
          }
        }
        @media (max-width: 1279px) and (min-width: 1024px) {
          .main-tool-grid {
            grid-template-columns: 1fr 300px !important;
          }
          .left-slot { display: none; }
        }
        @media (max-width: 1023px) {
          .main-tool-grid {
            grid-template-columns: 1fr !important;
          }
          .side-slot { display: none !important; }
        }
      `}</style>
    </div>
  );
}
