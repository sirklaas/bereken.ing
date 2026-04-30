"use client";

import React, { useState, useEffect } from "react";

export default function ConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem("google_consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleConsent = (type: "all" | "minimal") => {
    if (typeof window.gtag === "function") {
      if (type === "all") {
        window.gtag("consent", "update", {
          ad_storage: "granted",
          ad_user_data: "granted",
          ad_personalization: "granted",
          analytics_storage: "granted",
        });
      } else {
        // Minimal/Minimalist consent still allows basic analytics if needed
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
  };

  if (!show) return null;

  return (
    <div className="consent-banner animate-in">
      <div className="consent-content">
        <div className="consent-text">
          <h3>Jouw privacy bij Bereken.ing</h3>
          <p>
            Wij gebruiken cookies om onze website te verbeteren en advertenties te personaliseren. 
            In samenwerking met Google en onze partners verzamelen we gegevens om je de beste ervaring te bieden. 
            Je kunt je voorkeuren op elk moment aanpassen.
          </p>
        </div>
        <div className="consent-actions">
          <button className="button-secondary" onClick={() => handleConsent("minimal")}>
            Instellingen beheren
          </button>
          <button className="button-primary" onClick={() => handleConsent("all")}>
            Akkoord en doorgaan
          </button>
        </div>
      </div>

      <style jsx>{`
        .consent-banner {
          position: fixed;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 800px;
          background: rgba(15, 15, 20, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 2rem;
          z-index: 9999;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        }
        .consent-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .consent-content {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }
        .consent-text h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: white;
        }
        .consent-text p {
          font-size: 0.9rem;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.7);
          max-width: 500px;
        }
        .consent-actions {
          display: flex;
          gap: 1rem;
        }
        .button-primary {
          background: var(--primary-accent);
          color: white;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 12px;
          font-weight: 700;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s;
        }
        .button-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.8rem 1.5rem;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s;
        }
        .button-primary:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(99, 102, 241, 0.4); }
        .button-secondary:hover { background: rgba(255, 255, 255, 0.2); }
      `}</style>
    </div>
  );
}
