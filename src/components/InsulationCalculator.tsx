"use client";

import { useState } from "react";

export default function InsulationCalculator() {
  const [step, setStep] = useState(1);
  const [area, setArea] = useState<number>(60); // m2
  const [gasPrice, setGasPrice] = useState<number>(1.35);

  const calculateSavings = (type: string) => {
    const factors: Record<string, number> = { spouw: 9, dak: 11, vloer: 7 };
    return area * (factors[type] || 0) * gasPrice;
  };

  const steps = [
    { id: 1, name: "Spouwmuur" },
    { id: 2, name: "Dakisolatie" },
    { id: 3, name: "Vloerisolatie" },
    { id: 4, name: "Totaaloverzicht" }
  ];

  return (
    <div className="card" style={{ padding: 0, overflow: "hidden" }}>
      <div style={{ 
        padding: "1.5rem 2rem", 
        borderBottom: "1px solid var(--border)",
        background: "var(--input-bg)"
      }}>
        <h2 style={{ fontSize: "1.2rem", margin: 0, fontWeight: 700 }}>Isolatie Calculator 2026</h2>
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
          
          {step <= 3 && (
            <div className="animate-in">
              <label>Oppervlakte in m²</label>
              <input 
                type="number" 
                value={area} 
                onChange={(e) => setArea(Number(e.target.value))} 
                style={{ fontSize: "1.5rem", padding: "1.5rem" }}
              />
              <div style={{ marginTop: "2rem", padding: "1.5rem", background: "#f1f5f9", borderRadius: "12px" }}>
                <p style={{ margin: 0, fontSize: "0.9rem", fontWeight: 700 }}>Jaarlijkse besparing:</p>
                <p style={{ margin: 0, fontSize: "2rem", fontWeight: 800, color: "var(--primary-accent)" }}>
                  € {calculateSavings(step === 1 ? "spouw" : step === 2 ? "dak" : "vloer").toFixed(0)}
                </p>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="animate-in" style={{ textAlign: "center" }}>
              <p style={{ fontSize: "1rem", color: "var(--secondary)", marginBottom: "0.5rem" }}>Totaal potentieel voordeel:</p>
              <div style={{ 
                fontSize: "3.5rem", 
                fontWeight: 800, 
                color: "var(--primary-accent)",
                letterSpacing: "-0.04em"
              }}>
                € {(calculateSavings("spouw") + calculateSavings("dak") + calculateSavings("vloer")).toFixed(0)}
              </div>
              <button className="button" style={{ marginTop: "2rem" }}>Vergelijk Isolatie Specialisten</button>
            </div>
          )}

          {/* Navigation */}
          <div style={{ marginTop: "3rem", display: "flex", justifyContent: "space-between" }}>
            <button className="btn" onClick={() => setStep(Math.max(1, step - 1))} disabled={step === 1}>Vorige</button>
            <button className="button" onClick={() => setStep(Math.min(4, step + 1))}>
              {step === 4 ? "Opnieuw" : "Volgende"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
