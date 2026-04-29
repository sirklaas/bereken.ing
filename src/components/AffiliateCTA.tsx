"use client";

import React from "react";
import { getOfferByTopic } from "@/config/affiliateOffers";

interface AffiliateCTAProps {
  topic?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  href?: string;
  badge?: string;
}

export default function AffiliateCTA({ 
  topic, 
  title, 
  description, 
  buttonText, 
  href, 
  badge 
}: AffiliateCTAProps) {
  // If a topic is provided, get the default offer for that topic
  const offer = topic ? getOfferByTopic(topic) : null;

  // Use provided props or fallback to the offer from the config
  const finalTitle = title || offer?.title || "Vergelijk & Bespaar";
  const finalDescription = description || offer?.description || "Bespaar op je vaste lasten via onze partners.";
  const finalButtonText = buttonText || offer?.buttonText || "Bekijk aanbod";
  const finalHref = href || offer?.href || "/";
  const finalBadge = badge || offer?.badge;

  return (
    <div className="affiliate-card animate-in" style={{
      marginTop: "2rem",
      padding: "2rem",
      background: "#fff",
      borderRadius: "16px",
      border: "2px solid var(--primary-accent)",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      position: "relative",
      overflow: "hidden"
    }}>
      {finalBadge && (
        <div style={{
          position: "absolute",
          top: "12px",
          right: "-35px",
          background: "var(--primary-accent)",
          color: "white",
          padding: "5px 40px",
          fontSize: "0.7rem",
          fontWeight: 800,
          transform: "rotate(45deg)",
          textTransform: "uppercase"
        }}>
          {finalBadge}
        </div>
      )}

      <div style={{ maxWidth: "80%" }}>
        <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "var(--heading-color)" }}>{finalTitle}</h3>
        <p style={{ fontSize: "0.9rem", color: "var(--secondary)", lineHeight: "1.5" }}>{finalDescription}</p>
      </div>

      <a 
        href={finalHref} 
        target="_blank" 
        rel="noopener noreferrer nofollow"
        className="button"
        style={{ 
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          width: "fit-content",
          padding: "0.8rem 2rem"
        }}
      >
        {finalButtonText}
      </a>

      <p style={{ fontSize: "0.7rem", color: "#94a3b8", marginTop: "0.5rem" }}>
        * Wij ontvangen mogelijk een commissie bij gebruik van deze link, dit kost jou niets extra.
      </p>
    </div>
  );
}
