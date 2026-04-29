"use client";

import React from "react";

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

export default function YouTubeEmbed({ videoId, title = "Uitleg video" }: YouTubeEmbedProps) {
  if (!videoId) return null;

  return (
    <div style={{
      margin: "3rem auto",
      width: "100%",
      maxWidth: "800px",
      borderRadius: "24px",
      overflow: "hidden",
      boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
      background: "black",
      position: "relative",
      paddingTop: "56.25%", /* 16:9 Aspect Ratio */
    }}>
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: 0,
        }}
        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
