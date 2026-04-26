"use client";

import { useState, useEffect } from "react";

export default function FixedCostsCalculator() {
  const [rent, setRent] = useState<number>(800);
  const [utilities, setUtilities] = useState<number>(150);
  const [insurance, setInsurance] = useState<number>(100);
  const [phone, setPhone] = useState<number>(40);
  const [internet, setInternet] = useState<number>(45);
  const [other, setOther] = useState<number>(200);

  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const sum = rent + utilities + insurance + phone + internet + other;
    setTotal(sum);
  }, [rent, utilities, insurance, phone, internet, other]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("nl-NL", {
      style: "currency",
      currency: "EUR",
    }).format(value);
  };

  return (
    <div className="card animate-in stagger-2">
      <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Vaste Lasten Calculator</h2>
      <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>Voer je maandelijkse vaste kosten in voor een duidelijk overzicht.</p>

      <div style={{ display: "grid", gap: "1rem" }}>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Huur / hypotheek</label>
          <input type="number" value={rent} onChange={(e) => setRent(Number(e.target.value))} />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Gas, water, stroom</label>
          <input type="number" value={utilities} onChange={(e) => setUtilities(Number(e.target.value))} />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Verzekeringen</label>
          <input type="number" value={insurance} onChange={(e) => setInsurance(Number(e.target.value))} />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Telefoon</label>
          <input type="number" value={phone} onChange={(e) => setPhone(Number(e.target.value))} />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Internet</label>
          <input type="number" value={internet} onChange={(e) => setInternet(Number(e.target.value))} />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Overig (abonnementen, etc.)</label>
          <input type="number" value={other} onChange={(e) => setOther(Number(e.target.value))} />
        </div>
      </div>

      <div style={{ marginTop: "2rem", padding: "1.5rem", background: "var(--primary-accent)", borderRadius: "12px", color: "white", textAlign: "center" }}>
        <p style={{ fontSize: "0.9rem", marginBottom: "0.5rem" }}>Totale vaste lasten per maand</p>
        <div style={{ fontSize: "2rem", fontWeight: 800 }}>{formatCurrency(total)}</div>
      </div>
    </div>
  );
}
