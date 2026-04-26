"use client";

import { useState, useEffect } from "react";

export default function MortgageCalculator() {
  const [income, setIncome] = useState<number>(45000);
  const [partnerIncome, setPartnerIncome] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(4.2);
  const [maxMortgage, setMaxMortgage] = useState<number>(0);

  useEffect(() => {
    // Simple rough Dutch mortgage rule of thumb: ~4.5x total income
    // Note: In reality, this is complex based on Nibud tables.
    const totalIncome = income + partnerIncome;
    const factor = 4.5; 
    setMaxMortgage(totalIncome * factor);
  }, [income, partnerIncome, interestRate]);

  return (
    <div className="card" style={{ maxWidth: "800px", margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
        <div>
          <div className="input-group">
            <label>Bruto Jaarinkomen (€)</label>
            <input 
              type="number" 
              value={income} 
              onChange={(e) => setIncome(Number(e.target.value))} 
            />
          </div>
          <div className="input-group">
            <label>Inkomen Partner (€)</label>
            <input 
              type="number" 
              value={partnerIncome} 
              onChange={(e) => setPartnerIncome(Number(e.target.value))} 
            />
          </div>
          <div className="input-group">
            <label>Rentepercentage (%)</label>
            <input 
              type="number" 
              step="0.1"
              value={interestRate} 
              onChange={(e) => setInterestRate(Number(e.target.value))} 
            />
          </div>
        </div>

        <div style={{ background: "var(--input-bg)", borderRadius: "12px", padding: "2rem", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: "0.9rem", color: "var(--secondary)", marginBottom: "0.5rem" }}>Geschatte Maximale Hypotheek</div>
          <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--primary-accent)", fontFamily: "var(--font-heading)" }}>
            €{maxMortgage.toLocaleString('nl-NL')}
          </div>
          <p style={{ fontSize: "0.8rem", marginTop: "1rem", color: "var(--secondary)" }}>
            Dit is een indicatie. Voor een exact bedrag adviseren we een gesprek met een adviseur.
          </p>
        </div>
      </div>
      
      <div style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
        <button className="btn btn-primary" style={{ width: "100%" }}>Download Volledig Rapport (PDF)</button>
      </div>
    </div>
  );
}
