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
    
    // Wait for animation to finish (matching new 2.5s duration)
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
    }, 2500); // Matching the slideDown duration
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
          <button className="button-primary" onClick={() => handleConsent("all")}>
            Akkoord
          </button>
          <button className="link-secondary" onClick={() => handleConsent("minimal")}>
            Instellingen beheren
          </button>
        </div>
      </div>

      <style jsx>{`
        .consent-banner {
          position: fixed;
          bottom: 3rem;
          left: 5%;
          right: 5%;
          width: 90%;
          max-width: 720px;
          margin: 0 auto;
          background: rgba(224, 242, 254, 0.4);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(0, 0, 0, 0.85);
          border-radius: 32px;
          padding: 3.5rem 3rem;
          z-index: 10000;
          box-shadow: -10px 10px 20px rgba(0, 0, 0, 0.85);
          text-align: center;
        }
        
        .animate-in {
          animation: slideUp 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-out {
          animation: slideDown 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes slideUp {
          from { transform: translateY(120%) scale(0.9); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
        
        @keyframes slideDown {
          from { transform: translateY(0) scale(1); opacity: 1; }
          to { transform: translateY(150%) scale(0.9); opacity: 0; }
        }

        .consent-content {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
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
          gap: 1.2rem;
          align-items: center;
          width: 100%;
        }

        .button-primary {
          background: rgba(0, 0, 0, 0.85);
          color: #fff;
          border: 1px solid rgba(0, 0, 0, 0.85);
          padding: 1rem 3.5rem;
          border-radius: 16px;
          font-family: var(--font-jakarta);
          font-weight: 800;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s;
          width: 100%;
          max-width: 300px;
        }
        
        .link-secondary {
          background: transparent;
          color: rgba(0, 0, 0, 0.5);
          border: none;
          padding: 0;
          font-family: var(--font-jakarta);
          font-weight: 600;
          font-size: 0.8rem;
          cursor: pointer;
          text-decoration: underline;
          transition: color 0.2s;
        }
        
        .button-primary:hover { 
          background: var(--primary-accent);
          border-color: var(--primary-accent);
          transform: translateY(-2px); 
          box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
        }
        
        .link-secondary:hover { 
          color: rgba(0, 0, 0, 0.85);
        }
      `}</style>
    </div>
  );
}
