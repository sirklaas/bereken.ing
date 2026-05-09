"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type ConsentValue = "granted" | "denied" | null;

interface ConsentContextType {
  consent: ConsentValue;
  grantConsent: () => void;
  denyConsent: () => void;
}

const ConsentContext = createContext<ConsentContextType>({
  consent: null,
  grantConsent: () => {},
  denyConsent: () => {},
});

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentValue>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const saved = localStorage.getItem("bereken_consent");
      if (saved === "granted" || saved === "denied") {
        setConsent(saved);
        if ((window as any).gtag) {
          (window as any).gtag("consent", "update", {
            ad_storage: saved,
            ad_user_data: saved,
            ad_personalization: saved,
            analytics_storage: saved,
          });
        }
      }
    } catch {
      // localStorage unavailable
    }
  }, []);

  const grantConsent = () => {
    if (typeof window === "undefined") return;
    setConsent("granted");
    try {
      localStorage.setItem("bereken_consent", "granted");
    } catch {
      // ignore
    }
    if ((window as any).gtag) {
      (window as any).gtag("consent", "update", {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
        analytics_storage: "granted",
      });
    }
  };

  const denyConsent = () => {
    if (typeof window === "undefined") return;
    setConsent("denied");
    try {
      localStorage.setItem("bereken_consent", "denied");
    } catch {
      // ignore
    }
    if ((window as any).gtag) {
      (window as any).gtag("consent", "update", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: "denied",
      });
    }
  };

  return (
    <ConsentContext.Provider value={{ consent, grantConsent, denyConsent }}>
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  return useContext(ConsentContext);
}
