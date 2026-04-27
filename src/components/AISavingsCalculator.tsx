"use client";

import { useState } from "react";

export default function AISavingsCalculator() {
  const [step, setStep] = useState(1);
  const [rate, setRate] = useState<number>(85);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(40);
  const [automationPercent, setAutomationPercent] = useState<number>(20);

  const calculateMonthlySavings = () => {
    return (hoursPerWeek * (automationPercent / 100)) * rate * 4.33;
  };

  const steps = [
    { id: 1, name: "Uurtarief" },
    { id: 2, name: "Werkweek" },
    { id: 3, name: "Automatisering" },
    { id: 4, name: "ROI Resultaat" }
  ];

  return (
    <div className="card" style={{ padding: 0, overflow: "hidden" }}>
      <div style={{ 
        padding: "1.5rem 2rem", 
        borderBottom: "1px solid var(--border)",
        background: "var(--input-bg)"
      }}>
        <h2 style={{ fontSize: "1.2rem", margin: 0, fontWeight: 700 }}>AI ROI Calculator 2026</h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "250px 1fr" }}>
        
        {/* Left Side Options */}
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

        {/* Right Work Area */}
        <div style={{ padding: "3rem", background: "white" }}>
          
          {step === 1 && (
            <div className="animate-in">
              <label>Wat is je uurtarief (€)?</label>
              <input 
                type="number" 
                value={rate} 
                onChange={(e) => setRate(Number(e.target.value))} 
                style={{ fontSize: "1.5rem", padding: "1.5rem" }}
              />
            </div>
          )}

          {step === 2 && (
            <div className="animate-in">
              <label>Hoeveel uur werk je per week?</label>
              <input 
                type="number" 
                value={hoursPerWeek} 
                onChange={(e) => setHoursPerWeek(Number(e.target.value))} 
                style={{ fontSize: "1.5rem", padding: "1.5rem" }}
              />
            </div>
          )}

          {step === 3 && (
            <div className="animate-in">
              <label>Schatting automatisering door AI (%)</label>
              <input 
                type="range"
                min="0"
                max="100"
                value={automationPercent} 
                onChange={(e) => setAutomationPercent(Number(e.target.value))} 
                style={{ width: "100%", margin: "2rem 0" }}
              />
              <p style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: 800 }}>{automationPercent}%</p>
            </div>
          )}

          {step === 4 && (
            <div className="animate-in" style={{ textAlign: "center" }}>
              <p style={{ fontSize: "1rem", color: "var(--secondary)", marginBottom: "0.5rem" }}>Geschatte besparing per maand:</p>
              <div style={{ 
                fontSize: "3.5rem", 
                fontWeight: 800, 
                color: "var(--primary-accent)",
                letterSpacing: "-0.04em"
              }}>
                € {calculateMonthlySavings().toFixed(0)}
              </div>
              <button className="button" style={{ marginTop: "2rem" }}>Ontdek de beste AI Tools</button>
            </div>
          )}

          {/* Navigation */}
          <div style={{ marginTop: "3rem", display: "flex", justifyContent: "space-between" }}>
            <button className="btn" onClick={() => setStep(Math.max(1, step - 1))} disabled={step === 1}>Vorige</button>
            <button className="button" onClick={() => setStep(Math.min(4, step + 1))}>
              {step === 4 ? "Bereken Opnieuw" : "Volgende Stap"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
