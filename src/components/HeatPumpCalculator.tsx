"use client";

import { useState } from "react";

export default function HeatPumpCalculator() {
  const [step, setStep] = useState(1);
  const [gasUsage, setGasUsage] = useState<number>(1500);
  const [gasPrice, setGasPrice] = useState<number>(1.35);
  const [electricityPrice, setElectricityPrice] = useState<number>(0.35);

  const calculateSavings = () => {
    return gasUsage * 0.7 * gasPrice; // Simplified ROI
  };

  const steps = [
    { id: 1, name: "Huidig Verbruik" },
    { id: 2, name: "Energieprijzen" },
    { id: 3, name: "Investering" },
    { id: 4, name: "Besparing" }
  ];

  return (
    <div className="card" style={{ padding: 0, overflow: "hidden" }}>
      <div style={{ 
        padding: "1.5rem 2rem", 
        borderBottom: "1px solid var(--border)",
        background: "var(--input-bg)"
      }}>
        <h2 style={{ fontSize: "1.2rem", margin: 0, fontWeight: 700 }}>Warmtepomp Calculator 2026</h2>
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
              <label>Jaarlijks gasverbruik (m³)</label>
              <input 
                type="number" 
                value={gasUsage} 
                onChange={(e) => setGasUsage(Number(e.target.value))} 
                style={{ fontSize: "1.5rem", padding: "1.5rem" }}
              />
              <p style={{ marginTop: "1rem", fontSize: "0.9rem", opacity: 0.7 }}>Gemiddeld verbruik in NL is ca. 1.200 m³.</p>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in">
              <label>Gas- en Stroomprijs</label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "1rem" }}>
                <div>
                  <label style={{ fontSize: "0.8rem" }}>Gas (€/m³)</label>
                  <input type="number" step="0.01" value={gasPrice} onChange={(e) => setGasPrice(Number(e.target.value))} />
                </div>
                <div>
                  <label style={{ fontSize: "0.8rem" }}>Stroom (€/kWh)</label>
                  <input type="number" step="0.01" value={electricityPrice} onChange={(e) => setElectricityPrice(Number(e.target.value))} />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in">
              <label>Geschatte investering (€)</label>
              <input 
                type="number" 
                defaultValue={5500}
                style={{ fontSize: "1.5rem", padding: "1.5rem" }}
              />
              <p style={{ marginTop: "1rem", fontSize: "0.9rem", opacity: 0.7 }}>Na aftrek van ISDE subsidie.</p>
            </div>
          )}

          {step === 4 && (
            <div className="animate-in" style={{ textAlign: "center" }}>
              <p style={{ fontSize: "1rem", color: "var(--secondary)", marginBottom: "0.5rem" }}>Jaarlijkse besparing:</p>
              <div style={{ 
                fontSize: "3.5rem", 
                fontWeight: 800, 
                color: "var(--primary-accent)",
                letterSpacing: "-0.04em"
              }}>
                € {calculateSavings().toLocaleString()}
              </div>
              <button className="button" style={{ marginTop: "2rem" }}>Ontvang Offertes (Gratis)</button>
            </div>
          )}

          {/* Navigation */}
          <div style={{ marginTop: "3rem", display: "flex", justifyContent: "space-between" }}>
            <button 
              className="btn" 
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
            >
              Vorige
            </button>
            <button 
              className="button" 
              onClick={() => setStep(Math.min(4, step + 1))}
            >
              {step === 4 ? "Bereken Opnieuw" : "Volgende Stap"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
