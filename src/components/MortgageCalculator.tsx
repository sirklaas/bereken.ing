"use client";

import { useState } from "react";

export default function MortgageCalculator() {
  const [step, setStep] = useState(1);
  const [income, setIncome] = useState<number>(50000);
  const [partnerIncome, setPartnerIncome] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(4.2);

  const calculateTotal = () => {
    return (income + partnerIncome) * 4.5; // Simplified for UI demonstration
  };

  const steps = [
    { id: 1, name: "Mijn Inkomen" },
    { id: 2, name: "Partner Inkomen" },
    { id: 3, name: "Hypotheekrente" },
    { id: 4, name: "Resultaat" }
  ];

  return (
    <div className="card" style={{ padding: 0, overflow: "hidden" }}>
      {/* Top Header inside card */}
      <div style={{ 
        padding: "1.5rem 2rem", 
        borderBottom: "1px solid var(--border)",
        background: "var(--input-bg)"
      }}>
        <h2 style={{ fontSize: "1.2rem", margin: 0, fontWeight: 700 }}>Hypotheek Calculator 2026</h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "250px 1fr" }}>
        
        {/* Left Side Options (as per wireframe) */}
        <div style={{ 
          background: "var(--input-bg)", 
          borderRight: "1px solid var(--border)",
          padding: "2rem 1rem"
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {steps.map((s) => (
              <button
                key={s.id}
                onClick={() => setStep(s.id)}
                style={{
                  padding: "0.8rem 1rem",
                  borderRadius: "8px",
                  border: "none",
                  textAlign: "left",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  background: step === s.id ? "var(--primary-accent)" : "transparent",
                  color: step === s.id ? "white" : "var(--secondary)",
                  transition: "var(--transition)"
                }}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right Work Area (the "Blue" area from wireframe) */}
        <div style={{ padding: "3rem", background: "white" }}>
          
          {step === 1 && (
            <div className="animate-in">
              <label>Wat is je bruto jaarinkomen?</label>
              <input 
                type="number" 
                value={income} 
                onChange={(e) => setIncome(Number(e.target.value))} 
                style={{ fontSize: "1.5rem", padding: "1.5rem" }}
              />
              <p style={{ marginTop: "1rem", fontSize: "0.9rem", opacity: 0.7 }}>Inclusief vakantiegeld en 13e maand.</p>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in">
              <label>Bruto jaarinkomen partner (optioneel)</label>
              <input 
                type="number" 
                value={partnerIncome} 
                onChange={(e) => setPartnerIncome(Number(e.target.value))} 
                style={{ fontSize: "1.5rem", padding: "1.5rem" }}
              />
            </div>
          )}

          {step === 3 && (
            <div className="animate-in">
              <label>Hypotheekrente (%)</label>
              <input 
                type="number" 
                step="0.1"
                value={interestRate} 
                onChange={(e) => setInterestRate(Number(e.target.value))} 
                style={{ fontSize: "1.5rem", padding: "1.5rem" }}
              />
            </div>
          )}

          {step === 4 && (
            <div className="animate-in" style={{ textAlign: "center" }}>
              <p style={{ fontSize: "1rem", color: "var(--secondary)", marginBottom: "0.5rem" }}>Je maximale hypotheek is ongeveer:</p>
              <div style={{ 
                fontSize: "3.5rem", 
                fontWeight: 800, 
                color: "var(--primary-accent)",
                letterSpacing: "-0.04em"
              }}>
                € {calculateTotal().toLocaleString()}
              </div>
              <button className="button" style={{ marginTop: "2rem" }}>Download Berekening (PDF)</button>
            </div>
          )}

          {/* Navigation Buttons */}
          <div style={{ marginTop: "3rem", display: "flex", justifyContent: "space-between" }}>
            <button 
              className="btn" 
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
              style={{ padding: "0.5rem 1rem" }}
            >
              Vorige
            </button>
            <button 
              className="button" 
              onClick={() => setStep(Math.min(4, step + 1))}
              style={{ padding: "0.8rem 2rem" }}
            >
              {step === 4 ? "Vergelijk Hypotheken" : "Volgende Stap"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
