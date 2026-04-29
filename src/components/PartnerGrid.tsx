"use client";

import React from "react";

interface Partner {
  name: string;
  logo: string;
  href: string;
  description?: string;
}

interface PartnerGridProps {
  partners: Partner[];
  title?: string;
}

export default function PartnerGrid({ partners, title = "Onze Partners" }: PartnerGridProps) {
  if (!partners || partners.length === 0) return null;

  return (
    <div style={{ marginTop: "1rem", width: "100%" }}>
      <h3 style={{ marginBottom: "1rem", color: "var(--heading-color)", textAlign: "center", fontSize: "0.9rem", opacity: 0.7 }}>{title}</h3>
      <div style={{ 
        display: "flex", 
        flexWrap: "wrap",
        gap: "1rem",
        justifyContent: "center",
        width: "100%",
        padding: "1rem 0"
      }}>
        {partners.map((partner) => (
          <a
            key={partner.name}
            href={partner.href}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="partner-card"
            style={{
              flex: "0 1 auto",
              width: `clamp(160px, calc(100% / ${partners.length} - 1rem), 300px)`,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "0.8rem",
              padding: "0.5rem 1rem",
              background: "white",
              borderRadius: "12px",
              border: "1px solid var(--border)",
              textDecoration: "none",
              transition: "var(--transition)",
              boxShadow: "0 2px 4px rgba(0,0,0,0.02)"
            }}
          >
            <div style={{ 
              width: "32px",
              height: "32px",
              filter: "grayscale(100%)",
              transition: "filter 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            }} className="partner-logo">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                style={{ 
                  maxWidth: "100%", 
                  maxHeight: "100%", 
                  objectFit: "contain" 
                }} 
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", overflow: "hidden" }}>
              <span style={{ 
                fontSize: "0.85rem", 
                fontWeight: 700, 
                color: "var(--heading-color)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "100%"
              }}>{partner.name}</span>
              {partner.description && (
                <span style={{ 
                  fontSize: "0.65rem", 
                  color: "var(--secondary)",
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "100%"
                }}>{partner.description}</span>
              )}
            </div>
          </a>
        ))}
      </div>
      <style jsx>{`
        .partner-scroll-container::-webkit-scrollbar {
          display: none;
        }
        .partner-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          border-color: var(--primary-accent);
        }
        .partner-card:hover .partner-logo {
          filter: grayscale(0%) !important;
        }
      `}</style>
    </div>
  );
}
