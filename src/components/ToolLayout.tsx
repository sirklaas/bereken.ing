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
      
      {/* 1. Simple, Proportional Header */}
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        {intro && <h3 className="hero-eyebrow">{intro.toUpperCase()}</h3>}
        <h1 style={{ marginBottom: "1rem" }}>{title}</h1>
        {subtitle && <h2 style={{ fontWeight: 500, opacity: 0.7, maxWidth: "800px", margin: "0 auto" }}>{subtitle}</h2>}
      </div>

      {/* 2. Pure 1-3-1 Grid */}
      <div className="pristine-grid">
        {/* Left Sidebar */}
        <aside className="side-slot left-slot">
          <AdSenseSlot id="sidebar-left" format="vertical" />
        </aside>

        {/* Center: The actual Tool */}
        <main>
          {children}

          {/* Automated Affiliate CTA */}
          {topic && (
            <div style={{ marginTop: "3rem" }}>
              <AffiliateCTA topic={topic} />
            </div>
          )}
        </main>

        {/* Right Sidebar */}
        <aside className="side-slot right-slot">
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <AdSenseSlot id="sidebar-right-top" format="rectangle" />
            <AdSenseSlot id="sidebar-right-bottom" format="vertical" />
          </div>
        </aside>

        {/* Spanning Footers */}
        {partners.length > 0 && (
          <div style={{ gridColumn: "1 / -1", marginTop: "4rem" }}>
            <PartnerGrid partners={partners} title={`Populaire partners voor ${title}`} />
          </div>
        )}

        {finalVideoId && (
          <div style={{ gridColumn: "1 / -1", marginTop: "4rem", paddingTop: "4rem", borderTop: "1px solid var(--border)", textAlign: "center" }}>
            <h3>Video uitleg: {title}</h3>
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
              <YouTubeEmbed videoId={finalVideoId} title={title} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
