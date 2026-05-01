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
          max-width: 700px;
          margin: 0 auto;
          background: rgba(240, 248, 255, 0.9);
          backdrop-filter: blur(15px);
          border: 2px solid #000;
          border-radius: 20px;
          padding: 1.5rem 2rem;
          z-index: 10000;
          box-shadow: 10px 10px 0px rgba(0, 0, 0, 1);
        }
        
        .animate-in {
          animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-out {
          animation: slideDown 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes slideUp {
          from { transform: translateY(100%) scale(0.9); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
        
        @keyframes slideDown {
          from { transform: translateY(0) scale(1); opacity: 1; }
          to { transform: translateY(120%) scale(0.9); opacity: 0; }
        }

        .consent-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
        }
        
        @media (min-width: 768px) {
          .consent-content {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
        }

        .consent-text h3 {
          font-family: var(--font-fugaz);
          font-size: 1.1rem;
          margin-bottom: 0.3rem;
          color: #000;
          letter-spacing: 0.05em;
        }
        
        .consent-text p {
          font-family: var(--font-jakarta);
          font-size: 0.85rem;
          line-height: 1.4;
          color: #334155;
          max-width: 450px;
        }

        .consent-actions {
          display: flex;
          gap: 0.8rem;
        }

        .button-primary {
          background: #000;
          color: #fff;
          border: 2px solid #000;
          padding: 0.7rem 1.5rem;
          border-radius: 12px;
          font-family: var(--font-jakarta);
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .button-secondary {
          background: transparent;
          color: #000;
          border: 2px solid #000;
          padding: 0.7rem 1.5rem;
          border-radius: 12px;
          font-family: var(--font-jakarta);
          font-weight: 700;
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
