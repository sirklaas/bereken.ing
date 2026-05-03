"use client";

import { useEffect } from "react";

interface AdSenseSlotProps {
  id: string;
  slot?: string;
  format?: "auto" | "fluid" | "rectangle";
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

  // Use current production ID if available, otherwise show placeholder
  const pubId = "pub-6805783605124617";

  // Check for debug mode in URL
  const isDebug = typeof window !== "undefined" && window.location.search.includes("debug=ads");

  // Prevent rendering with placeholder IDs
  if (!slot || slot === "1234567890") {
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
          <div style={{ marginTop: "1.5rem", fontSize: "0.8rem", background: "rgba(0,0,0,0.05)", padding: "0.5rem", borderRadius: "8px", display: "inline-block" }}>
            <code>ID: {id}</code> | <code>Format: {format}</code>
          </div>
        </div>
      );
    }
    return null; 
  }

  return (
    <div className="ad-container" id={id} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", ...style }}
        data-ad-client={`ca-${pubId}`}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
