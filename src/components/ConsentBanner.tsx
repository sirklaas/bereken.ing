"use client";

import React, { useState, useEffect } from "react";

export default function ConsentBanner() {
  const [show, setShow] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("google_consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleConsent = (type: "all" | "minimal") => {
    setIsExiting(true);
    
    // Wait for animation to finish
    setTimeout(() => {
      if (typeof window.gtag === "function") {
        if (type === "all") {
          window.gtag("consent", "update", {
            ad_storage: "granted",
            ad_user_data: "granted",
            ad_personalization: "granted",
            analytics_storage: "granted",
          });
        } else {
          window.gtag("consent", "update", {
            ad_storage: "denied",
            ad_user_data: "denied",
            ad_personalization: "denied",
            analytics_storage: "granted",
          });
        }
      }

      localStorage.setItem("google_consent", type);
      setShow(false);
    }, 500); // Animation duration
  };

  if (!show) return null;

  return (
    <div className={`consent-banner ${isExiting ? "animate-out" : "animate-in"}`}>
      <div className="consent-content">
        <div className="consent-text">
          <h3>JOUW PRIVACY BIJ BEREKEN.ING</h3>
          <p>
            Wij gebruiken cookies om onze website te verbeteren en advertenties te personaliseren. 
            In samenwerking met Google en onze partners verzamelen we gegevens om je de beste ervaring te bieden. 
          </p>
        </div>
        <div className="consent-actions">
          <button className="button-secondary" onClick={() => handleConsent("minimal")}>
            Instellingen
          </button>
          <button className="button-primary" onClick={() => handleConsent("all")}>
            Akkoord
          </button>
        </div>
      </div>

      <style jsx>{`
        .consent-banner {
          position: fixed;
          bottom: 2rem;
          left: 5%;
          right: 5%;
          width: 90%;
          max-width: 600px;
          margin: 0 auto;
          background: rgba(224, 242, 254, 0.5);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0, 0, 0, 0.85);
          border-radius: 24px;
          padding: 2.5rem 2rem;
          z-index: 10000;
          box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.85);
          text-align: center;
        }
        
        .animate-in {
          animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-out {
          animation: slideDown 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes slideUp {
          from { transform: translateY(100%) scale(0.95); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
        
        @keyframes slideDown {
          from { transform: translateY(0) scale(1); opacity: 1; }
          to { transform: translateY(120%) scale(0.95); opacity: 0; }
        }

        .consent-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          align-items: center;
        }

        .consent-text h3 {
          font-family: var(--font-jakarta);
          font-weight: 800;
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: rgba(0, 0, 0, 0.85);
          letter-spacing: -0.02em;
        }
        
        .consent-text p {
          font-family: var(--font-jakarta);
          font-size: 0.9rem;
          line-height: 1.6;
          color: rgba(30, 41, 59, 0.9);
          max-width: 100%;
        }

        .consent-actions {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          width: 100%;
        }
        
        @media (min-width: 480px) {
          .consent-actions {
            flex-direction: row;
            justify-content: center;
          }
        }

        .button-primary {
          background: rgba(0, 0, 0, 0.85);
          color: #fff;
          border: 1px solid rgba(0, 0, 0, 0.85);
          padding: 0.8rem 2.5rem;
          border-radius: 14px;
          font-family: var(--font-jakarta);
          font-weight: 800;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .button-secondary {
          background: transparent;
          color: rgba(0, 0, 0, 0.85);
          border: 1px solid rgba(0, 0, 0, 0.85);
          padding: 0.8rem 2rem;
          border-radius: 14px;
          font-family: var(--font-jakarta);
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .button-primary:hover { 
          background: var(--primary-accent);
          border-color: var(--primary-accent);
          transform: translateY(-2px); 
        }
        
        .button-secondary:hover { 
          background: rgba(0,0,0,0.05);
          transform: translateY(-2px); 
        }
      `}</style>
    </div>
  );
}
