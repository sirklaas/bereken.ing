"use client";

import React, { useEffect, useRef } from "react";

interface AdSenseSlotProps {
  id: string;
  slot?: string;
  format?: string;
  style?: React.CSSProperties;
}

export default function AdSenseSlot({
  id,
  slot,
  format = "auto",
  style,
}: AdSenseSlotProps) {
  const activeSlot = slot || "2654242201";
  const hasPushed = useRef(false);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !activeSlot ||
      activeSlot === "1234567890"
    ) {
      return;
    }
    if (hasPushed.current) return;

    // @ts-ignore
    const adsReady = !!(window.adsbygoogle && window.adsbygoogle.push);

    const pushAd = () => {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        hasPushed.current = true;
      } catch (err) {
        console.error("AdSense Error:", err);
      }
    };

    if (adsReady) {
      pushAd();
    } else {
      const timer = setTimeout(pushAd, 1000);
      return () => clearTimeout(timer);
    }
  }, [activeSlot]);

  if (!activeSlot || activeSlot === "1234567890") {
    return null;
  }

  const adFormat = format === "vertical" ? "auto" : format;
  const w = style?.width ?? "100%";
  const h = style?.height ?? (format === "rectangle" ? "250px" : "auto");

  return (
    <div
      id={id}
      style={{
        width: "100%",
        minHeight: typeof h === "number" ? h : undefined,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px dashed #94a3b8",
        borderRadius: "8px",
        background: "#f8fafc",
        ...style,
      }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: w, height: h }}
        data-ad-client="ca-pub-6805783605124617"
        data-ad-slot={activeSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
}
