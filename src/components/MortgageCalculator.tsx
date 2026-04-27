"use client";

import { useState, useEffect } from "react";

export default function MortgageCalculator() {
  const [step, setStep] = useState(1);
  const [income, setIncome] = useState<number>(55000);
  const [partnerIncome, setPartnerIncome] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(3.8);

  const calculateTotal = () => {
    // Standard Dutch mortgage estimate: approx 4.5x gross income
    // Note: This is a simplified calculation for the UI demo
    const multiplier = 4.5;
    const base = (income + partnerIncome) * multiplier;
    // Adjustment for interest rate (very simplified)
    const rateFactor = 1 - ((interestRate - 3) * 0.02);
    return base * rateFactor;
  };

  const steps = [
    { id: 1, name: "Mijn Inkomen", icon: "👤" },
    { id: 2, name: "Partner Inkomen", icon: "👥" },
    { id: 3, name: "Rentepercentage", icon: "📉" },
    { id: 4, name: "Jouw Resultaat", icon: "✨" }
  ];

  return (
    <div className="card" style={{ padding: 0, overflow: "hidden", border: "1px solid rgba(0,0,0,0.05)" }}>
      
      {/* Progress Bar */}
      <div style={{ height: "4px", width: "100%", background: "#f1f5f9" }}>
        <div style={{ 
          height: "100%", 
          width: `${(step / steps.length) * 100}%`, 
          background: "var(--primary-accent)",
          transition: "width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"
        }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "280px 1fr" }}>
        
        {/* Left Side Navigation (Pristine Glass Sidebar) */}
        <div style={{ 
          background: "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)", 
          borderRight: "1px solid var(--border)",
          padding: "2.5rem 1.2rem"
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {steps.map((s) => (
              <button
                key={s.id}
                onClick={() => setStep(s.id)}
                style={{
                  padding: "1rem 1.2rem",
                  borderRadius: "12px",
                  border: "none",
                  textAlign: "left",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  background: step === s.id ? "white" : "transparent",
                  color: step === s.id ? "var(--primary-accent)" : "var(--secondary)",
                  boxShadow: step === s.id ? "0 4px 12px rgba(0,0,0,0.05)" : "none",
                  transform: step === s.id ? "translateX(5px)" : "none",
                  transition: "all 0.3s ease"
                }}
              >
                <span style={{ fontSize: "1.2rem" }}>{s.icon}</span>
                {s.name}
              </button>
            ))}
          </div>

          <div style={{ marginTop: "4rem", padding: "1.5rem", background: "rgba(99, 102, 241, 0.05)", borderRadius: "12px", border: "1px dashed var(--primary-accent)" }}>
            <p style={{ fontSize: "0.8rem", color: "var(--primary-accent)", fontWeight: 700, margin: 0 }}>TIP</p>
            <p style={{ fontSize: "0.75rem", margin: "0.5rem 0 0", lineHeight: 1.4 }}>
              De rente is momenteel stabiel. Dit is een gunstig moment voor een berekening.
            </p>
          </div>
        </div>

        {/* Right Work Area */}
        <div style={{ padding: "4rem", background: "white", minHeight: "500px", display: "flex", flexDirection: "column" }}>
          
          <div style={{ flex: 1 }}>
            {step === 1 && (
              <div className="animate-in">
                <p style={{ fontSize: "0.9rem", color: "var(--primary-accent)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>STAP 01</p>
                <h3 style={{ fontSize: "1.8rem", marginBottom: "2rem" }}>Wat is je bruto <span style={{ color: "var(--primary-accent)" }}>jaarinkomen</span>?</h3>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: "1.5rem", top: "50%", transform: "translateY(-50%)", fontSize: "1.5rem", fontWeight: 700, color: "var(--secondary)" }}>€</span>
                  <input 
                    type="number" 
                    value={income} 
                    onChange={(e) => setIncome(Number(e.target.value))} 
                    style={{ fontSize: "2rem", padding: "1.5rem 1.5rem 1.5rem 3.5rem", borderRadius: "16px" }}
                  />
                </div>
                <p style={{ marginTop: "1.5rem", fontSize: "0.9rem", color: "var(--secondary)" }}>Vul je bruto jaarinkomen in inclusief vakantiegeld (8%).</p>
              </div>
            )}

            {step === 2 && (
              <div className="animate-in">
                <p style={{ fontSize: "0.9rem", color: "var(--primary-accent)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>STAP 02</p>
                <h3 style={{ fontSize: "1.8rem", marginBottom: "2rem" }}>Inkomen van je <span style={{ color: "var(--primary-accent)" }}>partner</span></h3>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: "1.5rem", top: "50%", transform: "translateY(-50%)", fontSize: "1.5rem", fontWeight: 700, color: "var(--secondary)" }}>€</span>
                  <input 
                    type="number" 
                    value={partnerIncome} 
                    onChange={(e) => setPartnerIncome(Number(e.target.value))} 
                    style={{ fontSize: "2rem", padding: "1.5rem 1.5rem 1.5rem 3.5rem", borderRadius: "16px" }}
                  />
                </div>
                <p style={{ marginTop: "1.5rem", fontSize: "0.9rem", color: "var(--secondary)" }}>Laat leeg als je alleenstaand bent.</p>
              </div>
            )}

            {step === 3 && (
              <div className="animate-in">
                <p style={{ fontSize: "0.9rem", color: "var(--primary-accent)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>STAP 03</p>
                <h3 style={{ fontSize: "1.8rem", marginBottom: "2rem" }}>Huidige <span style={{ color: "var(--primary-accent)" }}>marktrente</span></h3>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", right: "1.5rem", top: "50%", transform: "translateY(-50%)", fontSize: "1.5rem", fontWeight: 700, color: "var(--secondary)" }}>%</span>
                  <input 
                    type="number" 
                    step="0.01"
                    value={interestRate} 
                    onChange={(e) => setInterestRate(Number(e.target.value))} 
                    style={{ fontSize: "2rem", padding: "1.5rem 3.5rem 1.5rem 1.5rem", borderRadius: "16px" }}
                  />
                </div>
                <p style={{ marginTop: "1.5rem", fontSize: "0.9rem", color: "var(--secondary)" }}>De gemiddelde rente voor 10 jaar vast is momenteel ca. 3,8%.</p>
              </div>
            )}

            {step === 4 && (
              <div className="animate-in" style={{ textAlign: "center" }}>
                <p style={{ fontSize: "1rem", color: "var(--secondary)", marginBottom: "1rem", fontWeight: 600 }}>Jouw maximale hypotheekindicatie:</p>
                <div style={{ 
                  fontSize: "4.5rem", 
                  fontWeight: 900, 
                  color: "var(--primary-accent)",
                  letterSpacing: "-0.05em",
                  lineHeight: 1
                }}>
                  € {calculateTotal().toLocaleString("nl-NL", { maximumFractionDigits: 0 })}
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "3rem" }}>
                  <div style={{ textAlign: "center", padding: "1.5rem", background: "#f8fafc", borderRadius: "16px", minWidth: "160px" }}>
                    <p style={{ fontSize: "0.75rem", opacity: 0.6, margin: 0 }}>Maandlasten</p>
                    <p style={{ fontSize: "1.2rem", fontWeight: 800, margin: "0.2rem 0 0" }}>€ {(calculateTotal() / 240).toFixed(0)}</p>
                  </div>
                  <div style={{ textAlign: "center", padding: "1.5rem", background: "#f8fafc", borderRadius: "16px", minWidth: "160px" }}>
                    <p style={{ fontSize: "0.75rem", opacity: 0.6, margin: 0 }}>LTV Ratio</p>
                    <p style={{ fontSize: "1.2rem", fontWeight: 800, margin: "0.2rem 0 0" }}>100%</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <div style={{ marginTop: "4rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <button 
              className="btn" 
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
              style={{ opacity: step === 1 ? 0 : 1 }}
            >
              ← Vorige stap
            </button>
            <div style={{ display: "flex", gap: "0.5rem" }}>
               {steps.map(s => (
                 <div key={s.id} style={{ width: "8px", height: "8px", borderRadius: "50%", background: step === s.id ? "var(--primary-accent)" : "#e2e8f0" }} />
               ))}
            </div>
            <button 
              className="button" 
              onClick={() => setStep(Math.min(4, step + 1))}
              style={{ padding: "1rem 2.5rem" }}
            >
              {step === 4 ? "Offerte Aanvragen" : "Volgende stap →"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
