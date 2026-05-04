"use client";

import { useState, useEffect } from "react";

export default function MortgageCalculator() {
  const [activeStep, setActiveStep] = useState(0); // 0: Situation, 1: Income, 2: Debts, 3: Result
  const [situation, setSituation] = useState<"single" | "together" | null>(null);
  const [income, setIncome] = useState<number | "">("");
  const [partnerIncome, setPartnerIncome] = useState<number | "">("");
  const [debts, setDebts] = useState<number | "">("");
  const [nhg, setNhg] = useState(true);
  const [result, setResult] = useState<number>(0);

  // Impeccable Logic Engine (v1.1.0)
  const calculateResult = () => {
    const inc1 = Number(income) || 0;
    const inc2 = Number(partnerIncome) || 0;
    const debt = Number(debts) || 0;
    
    if (inc1 === 0) return;

    // 2026 realistic math: 3.78% NHG average
    const totalIncome = inc1 + (inc2 * 0.9);
    const multiplier = nhg ? 4.7 : 4.4; // NHG allows slightly higher leverage
    const baseAmount = totalIncome * multiplier;
    const debtImpact = debt * 12 * 1.5;
    
    setResult(Math.max(0, baseAmount - debtImpact));
    setActiveStep(3);
  };

  return (
    <div className="pristine-card" style={{ padding: 0, overflow: "hidden", minHeight: "500px" }}>
      
      <div className="journey-container">
        
        {/* Step 0: The Situation Selector */}
        {activeStep === 0 && (
          <div className="step-chapter animate-in">
            <h3 className="hero-eyebrow">STAP 1: SITUATIE</h3>
            <h2 style={{ marginBottom: "2rem" }}>Hoe wil je gaan <span style={{ color: "var(--primary-accent)" }}>wonen</span>?</h2>
            
            <div className="selector-grid">
              <button 
                className={`selector-btn ${situation === "single" ? "active" : ""}`}
                onClick={() => { setSituation("single"); setActiveStep(1); }}
              >
                <span className="icon">👤</span>
                <span className="label">Alleen</span>
              </button>
              <button 
                className={`selector-btn ${situation === "together" ? "active" : ""}`}
                onClick={() => { setSituation("together"); setActiveStep(1); }}
              >
                <span className="icon">👥</span>
                <span className="label">Samen</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 1: Income Inputs */}
        {activeStep === 1 && (
          <div className="step-chapter animate-in">
            <h3 className="hero-eyebrow">STAP 2: INKOMEN</h3>
            <h2 style={{ marginBottom: "2rem" }}>Wat is het <span style={{ color: "var(--primary-accent)" }}>bruto inkomen</span>?</h2>
            
            <div className="input-stack">
              <div className="input-group">
                <label>Jouw jaarinkomen</label>
                <div className="input-wrapper">
                  <span className="currency">€</span>
                  <input 
                    type="number" 
                    placeholder="bijv. 45000"
                    value={income} 
                    onChange={(e) => setIncome(Number(e.target.value))} 
                    autoFocus
                  />
                </div>
              </div>

              {situation === "together" && (
                <div className="input-group animate-in">
                  <label>Jaarinkomen partner</label>
                  <div className="input-wrapper">
                    <span className="currency">€</span>
                    <input 
                      type="number" 
                      placeholder="bijv. 35000"
                      value={partnerIncome} 
                      onChange={(e) => setPartnerIncome(Number(e.target.value))} 
                    />
                  </div>
                </div>
              )}

              <button 
                className="button" 
                style={{ marginTop: "1rem" }}
                onClick={() => setActiveStep(2)}
                disabled={!income}
              >
                VOLGENDE STAP →
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Debts & NHG */}
        {activeStep === 2 && (
          <div className="step-chapter animate-in">
            <h3 className="hero-eyebrow">STAP 3: LASTEN</h3>
            <h2 style={{ marginBottom: "2rem" }}>Zijn er nog <span style={{ color: "var(--primary-accent)" }}>maandelijkse lasten</span>?</h2>
            
            <div className="input-stack">
              <div className="input-group">
                <label>Leningen of studieschuld (p/m)</label>
                <div className="input-wrapper">
                  <span className="currency">€</span>
                  <input 
                    type="number" 
                    placeholder="0"
                    value={debts} 
                    onChange={(e) => setDebts(Number(e.target.value))} 
                    autoFocus
                  />
                </div>
              </div>

              <div className="toggle-group" style={{ marginBottom: "2rem" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "0.8rem", cursor: "pointer" }}>
                  <input 
                    type="checkbox" 
                    checked={nhg} 
                    onChange={(e) => setNhg(e.target.checked)}
                    style={{ width: "20px", height: "20px" }}
                  />
                  <span>Berekenen met <strong>NHG</strong> (Nationale Hypotheek Garantie)</span>
                </label>
              </div>

              <button 
                className="button" 
                onClick={calculateResult}
              >
                BEREKEN MIJN MAXIMAAL →
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Result Revelation */}
        {activeStep === 3 && (
          <div className="result-revelation animate-in">
            <div className="result-header">
              <h3 className="hero-eyebrow" style={{ color: "white" }}>JOUW RESULTAAT</h3>
              <div className="result-main">
                <span className="symbol">€</span>
                <span className="value">{result.toLocaleString("nl-NL")}</span>
              </div>
            </div>

            <div className="result-details">
              <div className="detail-card">
                <label>Maandlasten (ca.)</label>
                <p>€ {(result / 240).toLocaleString("nl-NL", { maximumFractionDigits: 0 })}</p>
              </div>
              <div className="detail-card">
                <label>Rente (10j vast)</label>
                <p>3.78%</p>
              </div>
            </div>

            <div className="gauge-outer">
              <div className="gauge-inner" style={{ width: `${Math.min(100, (result / 500000) * 100)}%` }} />
            </div>

            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
              <button 
                className="btn btn-outline" 
                style={{ color: "white", borderColor: "rgba(255,255,255,0.3)" }}
                onClick={() => setActiveStep(0)}
              >
                Opnieuw
              </button>
              <button className="button" style={{ flex: 1, background: "white", color: "var(--primary-accent)" }}>
                GRATIS OFFERTE
              </button>
            </div>
          </div>
        )}

      </div>

      <style jsx>{`
        .journey-container {
          padding: var(--calc-padding);
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-chapter {
          width: 100%;
          max-width: 500px;
        }

        .selector-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .selector-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 2.5rem 1.5rem;
          background: white;
          border: 2px solid var(--border);
          border-radius: 20px;
          cursor: pointer;
          transition: var(--transition);
        }

        .selector-btn:hover {
          border-color: var(--primary-accent);
          background: rgba(99, 102, 241, 0.02);
          transform: translateY(-5px);
        }

        .selector-btn.active {
          border-color: var(--primary-accent);
          background: rgba(99, 102, 241, 0.05);
        }

        .selector-btn .icon {
          font-size: 2.5rem;
        }

        .selector-btn .label {
          font-weight: 800;
          font-size: 1.1rem;
          color: var(--primary);
        }

        .input-stack {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .input-wrapper {
          position: relative;
        }

        .currency {
          position: absolute;
          left: 1.2rem;
          top: 50%;
          transform: translateY(-50%);
          font-weight: 700;
          opacity: 0.4;
        }

        input[type="number"] {
          padding-left: 2.5rem;
          font-size: 1.2rem;
        }

        /* Result Revelation Styling */
        .result-revelation {
          width: 100%;
          background: var(--primary-accent);
          color: white;
          margin: -var(--calc-padding);
          padding: var(--calc-padding);
          text-align: center;
        }

        .result-main {
          font-family: var(--font-fugaz), cursive;
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          line-height: 1;
          margin: 1rem 0 2.5rem;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .result-main .symbol {
          font-size: 1.5rem;
          margin-top: 0.5rem;
        }

        .result-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .detail-card {
          background: rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
          border-radius: 16px;
          text-align: left;
        }

        .detail-card label {
          color: white;
          opacity: 0.6;
          font-size: 0.75rem;
          margin-bottom: 0.4rem;
        }

        .detail-card p {
          font-size: 1.3rem;
          font-weight: 800;
          margin: 0;
        }

        .gauge-outer {
          height: 8px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          overflow: hidden;
        }

        .gauge-inner {
          height: 100%;
          background: white;
          border-radius: 10px;
          transition: width 1.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @media (max-width: 600px) {
          .result-main {
            font-size: 2.5rem;
          }
          .result-details {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
