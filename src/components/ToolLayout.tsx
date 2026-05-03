"use client";

import React from "react";
import YouTubeEmbed from "./YouTubeEmbed";
import PartnerGrid from "./PartnerGrid";
import AffiliateCTA from "./AffiliateCTA";
import AdSenseSlot from "./AdSenseSlot";
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
    <div id="main-content" className="page-shell" style={{ paddingTop: "4rem", paddingBottom: "8rem" }}>
      
      {/* 1. Majestic Hero Section */}
      <header className="page-shell" style={{ textAlign: "center", marginBottom: "4rem" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          {intro && (
            <h3 className="hero-eyebrow" style={{ textAlign: "center" }}>
              {intro.toUpperCase()}
            </h3>
          )}
          <h1 className="hero-title" style={{ fontSize: "clamp(3rem, 10vw, 5rem)", marginBottom: "1.5rem" }}>
            {title}
          </h1>
          {subtitle && (
            <h2 className="hero-subtitle" style={{ fontSize: "1.4rem", fontWeight: 500, opacity: 0.7, maxWidth: "800px", margin: "0 auto", lineHeight: 1.5 }}>
              {subtitle}
            </h2>
          )}
        </div>
      </header>

      {/* 2. Proportional Fluid Grid */}
      <div className="pristine-grid">
        {/* Left Side Slot (Skyscraper Ad) */}
        <div className="side-slot left-slot" style={{ display: "flex", justifyContent: "center" }}>
          <AdSenseSlot 
            id="sidebar-left" 
            format="vertical" 
            style={{ width: "100%", height: "600px", borderRadius: "24px", margin: 0 }} 
          />
        </div>

        {/* Center: The actual Tool (Occupies more space on desktop) */}
        <main>
          {children}

          {/* AUTO ADS WILL FILL THIS SPACE */}

          {/* AUTOMATED MAIN AFFILIATE CTA (The Money Maker) */}
          {topic && (
            <div style={{ marginTop: "3rem" }}>
              <AffiliateCTA topic={topic} />
            </div>
          )}
        </main>

        {/* Right Side Slot (Rectangle & Skyscraper) */}
        <div className="side-slot right-slot" style={{ display: "flex", flexDirection: "column", gap: "2rem", alignItems: "center", width: "100%" }}>
          <AdSenseSlot 
            id="sidebar-right-top" 
            format="rectangle" 
            style={{ width: "100%", height: "250px", borderRadius: "24px", margin: 0 }} 
          />
          <AdSenseSlot 
            id="sidebar-right-bottom" 
            format="vertical" 
            style={{ width: "100%", height: "600px", borderRadius: "24px", margin: 0 }} 
          />
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
    </div>
  );
}
