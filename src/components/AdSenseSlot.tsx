"use client";

import React, { useEffect, useRef } from "react";

const debugIngest = (body: Record<string, unknown>) => {
  const isDev = process.env.NODE_ENV === "development";
  let storageDebug = false;
  try {
    storageDebug =
      typeof window !== "undefined" && sessionStorage.getItem("DEBUG_ADSENSE") === "1";
  } catch {
    /* private mode */
  }
  const forceConsole =
    process.env.NEXT_PUBLIC_DEBUG_ADSENSE === "1" || storageDebug;
  if (!isDev && !forceConsole) return;

  const json = JSON.stringify(body);
  // Readable on production when NEXT_PUBLIC_DEBUG_ADSENSE=1 or sessionStorage DEBUG_ADSENSE=1
  // #region agent log
  console.info("__DEBUG_ADSENSE__", json);

  if (isDev) {
    fetch("http://127.0.0.1:7503/ingest/4b056281-6e59-4368-bf6a-7f008ed78acb", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "aba357" },
      body: json,
    }).catch(() => {});
    fetch("/api/debug-log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: json,
    }).catch(() => {});
  }
  // #endregion
};

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
    // #region agent log
    debugIngest({
      sessionId: "aba357",
      location: "AdSenseSlot.tsx:effect",
      message: "AdSense effect start",
      data: { slot: activeSlot, adsReady },
      hypothesisId: "H1",
      timestamp: Date.now(),
    });
    // #endregion

    const pushAd = (path: "immediate" | "timeout") => {
      // #region agent log
      debugIngest({
        sessionId: "aba357",
        location: "AdSenseSlot.tsx:pushAd",
        message: "before push",
        data: {
          path,
          // @ts-ignore
          adsReadyNow: !!(window.adsbygoogle && window.adsbygoogle.push),
        },
        hypothesisId: "H2",
        timestamp: Date.now(),
      });
      // #endregion
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        hasPushed.current = true;
        // #region agent log
        debugIngest({
          sessionId: "aba357",
          location: "AdSenseSlot.tsx:pushAd",
          message: "push ok",
          data: { path },
          hypothesisId: "H3",
          timestamp: Date.now(),
        });
        // #endregion
      } catch (err) {
        console.error("AdSense Error:", err);
        // #region agent log
        debugIngest({
          sessionId: "aba357",
          location: "AdSenseSlot.tsx:pushAd",
          message: "push threw",
          data: {
            path,
            err: err instanceof Error ? err.message : String(err),
          },
          hypothesisId: "H3",
          timestamp: Date.now(),
        });
        // #endregion
      }
    };

    // Push only when the script has had a chance to load.
    // If adsbygoogle is already present, push immediately.
    if (adsReady) {
      pushAd("immediate");
    } else {
      const timer = setTimeout(() => pushAd("timeout"), 1000);
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
