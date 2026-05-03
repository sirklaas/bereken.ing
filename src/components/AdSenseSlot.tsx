"use client";

import React, { useEffect } from "react";

interface AdSenseSlotProps {
  id: string;
  slot?: string;
  format?: string;
  style?: React.CSSProperties;
}

export default function AdSenseSlot({ id, slot, format = "auto", style }: AdSenseSlotProps) {
  useEffect(() => {
    // Only push if we have a valid slot and are in a client environment
    if (typeof window !== "undefined" && slot && slot !== "1234567890") {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error("AdSense Error:", err);
      }
    }
  }, [slot]);

  const [isDebug, setIsDebug] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined" && window.location.search.includes("debug=ads")) {
      setIsDebug(true);
    }
  }, []);

  // Use your new live Slot ID
  const defaultSlot = "2654242201";
  const activeSlot = slot || defaultSlot;
  const pubId = "ca-pub-6805783605124617";

  // Prevent rendering if both are missing
  if (!activeSlot || activeSlot === "1234567890") {
    if (isDebug) {
      return (
        <div style={{ 
          border: "4px dashed #FF007F", 
          padding: "3rem 1rem", 
          textAlign: "center", 
          borderRadius: "24px",
          background: "rgba(255, 0, 127, 0.08)",
          color: "#FF007F",
          fontWeight: 900,
          margin: "3rem 0",
          fontFamily: "var(--font-jakarta)",
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{ 
            position: "absolute", 
            top: 0, 
            left: 0, 
            background: "#FF007F", 
            color: "white", 
            padding: "0.4rem 1rem", 
            fontSize: "0.7rem",
            borderRadius: "0 0 12px 0"
          }}>
            DEBUG: ADSENSE
          </div>
          <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>⚠️ SLOT MISSING ID</div>
          <p style={{ fontWeight: 400, opacity: 0.8, fontSize: "0.9rem", maxWidth: "400px", margin: "0 auto" }}>
            This placeholder is ready for ads, but you haven't provided a 10-digit Slot ID in the code yet.
          </p>
        </div>
      );
    }
    return null; 
  }

  // Map 'vertical' to 'auto' for the actual AdSense attribute if needed, 
  // but keep our internal logic for sizing.
  const adFormat = format === "vertical" ? "auto" : format;

  return (
    <div className="ad-container" id={id} style={{ 
      width: "100%",
      minHeight: format === "rectangle" ? "250px" : "600px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: isDebug ? "rgba(255, 0, 127, 0.05)" : "rgba(0, 0, 0, 0.02)",
      border: isDebug ? "2px dashed rgba(255, 0, 127, 0.3)" : "1px solid rgba(0, 0, 0, 0.05)",
      borderRadius: "24px",
      margin: "0 0 2rem",
      transition: "all 0.3s ease",
      ...style 
    }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", ...style }}
        data-ad-client={pubId}
        data-ad-slot={activeSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
}
