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
    try {
      // Trigger Google AdSense to push the ad
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense Error:", err);
    }
  }, []);

  // Use current production ID if available, otherwise show placeholder
  const pubId = "pub-6805783605124617";

  // Prevent rendering with placeholder IDs
  if (!slot || slot === "1234567890") {
    return <div className="ad-placeholder" style={{ display: "none" }} />;
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
