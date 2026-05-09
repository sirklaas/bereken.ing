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
  const finalVideoId = youtubeId || (topic ? getVideoIdByTopic(topic) : null);
  const partners = topic ? getPartnersByTopic(topic) : [];

  return (
    <div id="main-content" className="page-shell" style={{ paddingTop: "4rem", paddingBottom: "8rem" }}>
      {/* Header */}
      <div className="pristine-grid" style={{ marginBottom: "4rem" }}>
        <div style={{ gridColumn: 2, textAlign: "center" }}>
          {intro && <h3 className="hero-eyebrow">{intro.toUpperCase()}</h3>}
          <h1 style={{ marginBottom: "1rem" }}>{title}</h1>
          {subtitle && <h2 style={{ fontWeight: 500, opacity: 0.7, maxWidth: "100%", margin: "0 auto" }}>{subtitle}</h2>}
        </div>
      </div>

      <div className="pristine-grid">
        {/* Center: The actual Tool */}
        <main style={{ gridColumn: "2 / 3" }}>
          {children}

          {topic && (
            <div style={{ marginTop: "3rem" }}>
              <AffiliateCTA topic={topic} />
            </div>
          )}
        </main>
      </div>

      {/* Single AdSense Slot below the tool */}
      <div style={{ marginTop: "4rem", maxWidth: "728px", marginLeft: "auto", marginRight: "auto" }}>
        <AdSenseSlot id="tool-inline" format="rectangle" style={{ width: "100%", height: "250px" }} />
      </div>

      {/* Spanning Footers */}
      {partners.length > 0 && (
        <div style={{ marginTop: "4rem" }}>
          <PartnerGrid partners={partners} title={`Populaire partners voor ${title}`} />
        </div>
      )}

      {finalVideoId && (
        <div style={{ marginTop: "4rem", paddingTop: "4rem", borderTop: "1px solid var(--border)", textAlign: "center" }}>
          <h3>Video uitleg: {title}</h3>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <YouTubeEmbed videoId={finalVideoId} title={title} />
          </div>
        </div>
      )}
    </div>
  );
}
