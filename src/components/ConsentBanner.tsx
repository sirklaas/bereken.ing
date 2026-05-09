"use client";

import React, { useState, useEffect } from "react";
import { useConsent } from "./ConsentContext";

export default function ConsentBanner() {
  const { consent, grantConsent, denyConsent } = useConsent();
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (consent === null) {
      const timer = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, [consent]);

  const handleGrant = () => {
    setExiting(true);
    setTimeout(() => {
      setVisible(false);
      grantConsent();
    }, 300);
  };

  const handleDeny = () => {
    setExiting(true);
    setTimeout(() => {
      setVisible(false);
      denyConsent();
    }, 300);
  };

  if (!visible || consent !== null) return null;

  return (
    <div className={`consent-overlay ${exiting ? "exiting" : ""}`}>
      <div className="consent-card">
        <div className="consent-body">
          <h4>Cookies &amp; Advertenties</h4>
          <p>
            Wij gebruiken cookies om onze website te verbeteren en gepersonaliseerde advertenties te tonen.
            Door op "Akkoord" te klikken, ga je akkoord met het gebruik van cookies door Google en onze partners.
          </p>
        </div>
        <div className="consent-actions">
          <button className="btn btn-secondary" onClick={handleDeny}>
            Alleen noodzakelijk
          </button>
          <button className="btn btn-primary" onClick={handleGrant}>
            Akkoord
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        .consent-overlay {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 99999;
          padding: 1rem;
          animation: slideIn 0.4s ease-out;
        }

        .consent-overlay.exiting {
          animation: fadeOut 0.3s ease-out forwards;
          pointer-events: none;
        }

        .consent-card {
          max-width: 720px;
          margin: 0 auto;
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 18px;
          padding: 1.5rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .consent-body h4 {
          font-family: var(--font-jakarta);
          font-weight: 800;
          font-size: 1rem;
          margin-bottom: 0.5rem;
          color: #1a1a1a;
        }

        .consent-body p {
          font-family: var(--font-jakarta);
          font-size: 0.85rem;
          line-height: 1.5;
          color: #555;
        }

        .consent-actions {
          display: flex;
          gap: 0.75rem;
          justify-content: flex-end;
        }

        .btn {
          font-family: var(--font-jakarta);
          font-weight: 700;
          font-size: 0.85rem;
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-primary {
          background: #1a1a1a;
          color: white;
        }

        .btn-primary:hover {
          background: #333;
          transform: translateY(-1px);
        }

        .btn-secondary {
          background: #f0f0f0;
          color: #1a1a1a;
        }

        .btn-secondary:hover {
          background: #e0e0e0;
        }

        @media (max-width: 480px) {
          .consent-card {
            padding: 1.25rem;
          }
          .consent-actions {
            flex-direction: column-reverse;
          }
          .btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
