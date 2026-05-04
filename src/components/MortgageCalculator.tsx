"use client";

import { useState } from "react";

export default function MortgageCalculator() {
  const [activeStep, setActiveStep] = useState(0); 
  const [situation, setSituation] = useState<"single" | "together" | null>(null);
  const [employment, setEmployment] = useState<"vast" | "tijdelijk" | "zelfstandig" | null>(null);
  const [yearsZzp, setYearsZzp] = useState<number>(3);
  const [income, setIncome] = useState<number | "">("");
  const [partnerIncome, setPartnerIncome] = useState<number | "">("");
  const [debts, setDebts] = useState<number | "">("");
  const [nhg, setNhg] = useState(true);
  const [result, setResult] = useState<number>(0);

  const calculateResult = () => {
    const inc1 = Number(income) || 0;
    const inc2 = Number(partnerIncome) || 0;
    const debt = Number(debts) || 0;
    
    if (inc1 === 0) return;

    let multiplier = nhg ? 4.75 : 4.45;
    
    if (employment === "zelfstandig") {
      if (yearsZzp < 3) multiplier *= 0.85;
    } else if (employment === "tijdelijk") {
      multiplier *= 0.95;
    }

    const totalIncome = inc1 + (inc2 * 0.9);
    const baseAmount = totalIncome * multiplier;
    const debtImpact = debt * 12 * 1.6;
    
    setResult(Math.max(0, baseAmount - debtImpact));
    setActiveStep(4);
  };

  const handleOfferteClick = () => {
    window.open("https://www.independer.nl/hypotheek", "_blank");
  };

  return (
    <div className="pristine-card" style={{ padding: 0, overflow: "hidden", minHeight: "550px" }}>
      
      <div className="journey-container">
        
        {/* Step 0: Situation */}
        {activeStep === 0 && (
          <div className="step-chapter animate-majestic">
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

        {/* Step 1: Employment */}
        {activeStep === 1 && (
          <div className="step-chapter animate-majestic">
            <h3 className="hero-eyebrow">STAP 2: DIENSTVERBAND</h3>
            <h2 style={{ marginBottom: "2rem" }}>Wat is je <span style={{ color: "var(--primary-accent)" }}>arbeidssituatie</span>?</h2>
            
            <div className="selector-grid-three">
              <button 
                className={`selector-btn small ${employment === "vast" ? "active" : ""}`}
                onClick={() => { setEmployment("vast"); setActiveStep(2); }}
              >
                <span className="label">Vast Contract</span>
              </button>
              <button 
                className={`selector-btn small ${employment === "tijdelijk" ? "active" : ""}`}
                onClick={() => { setEmployment("tijdelijk"); setActiveStep(2); }}
              >
                <span className="label">Tijdelijk</span>
              </button>
              <button 
                className={`selector-btn small ${employment === "zelfstandig" ? "active" : ""}`}
                onClick={() => setEmployment("zelfstandig")}
              >
                <span className="label">Zelfstandig</span>
              </button>
            </div>

            {employment === "zelfstandig" && (
              <div className="animate-majestic" style={{ marginTop: "2rem" }}>
                <label style={{ fontSize: "0.8rem", fontWeight: 700, marginBottom: "0.5rem", display: "block" }}>Aantal jaar ondernemer:</label>
                <div style={{ display: "flex", gap: "1rem" }}>
                  {[1, 2, 3].map(y => (
                    <button 
                      key={y}
                      className={`btn-toggle ${yearsZzp === y ? "active" : ""}`}
                      onClick={() => { setYearsZzp(y); setActiveStep(2); }}
                    >
                      {y === 3 ? "3+ jaar" : `${y} jaar`}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 2: Income */}
        {activeStep === 2 && (
          <div className="step-chapter animate-majestic">
            <h3 className="hero-eyebrow">STAP 3: INKOMEN</h3>
            <h2 style={{ marginBottom: "2rem" }}>Wat is het <span style={{ color: "var(--primary-accent)" }}>bruto inkomen</span>?</h2>
            
            <div className="input-stack">
              <div className="input-group">
                <label>Jouw jaarinkomen (incl. vakantiegeld)</label>
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
                <div className="input-group animate-majestic">
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
                onClick={() => setActiveStep(3)}
                disabled={!income}
              >
                VOLGENDE STAP →
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Debts & NHG */}
        {activeStep === 3 && (
          <div className="step-chapter animate-majestic">
            <h3 className="hero-eyebrow">STAP 4: LASTEN</h3>
            <h2 style={{ marginBottom: "2rem" }}>Zijn er nog <span style={{ color: "var(--primary-accent)" }}>verplichtingen</span>?</h2>
            
            <div className="input-stack">
              <div className="input-group">
                <label>Studieschuld of leningen (p/m)</label>
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

              <div className="nhg-selector" style={{ marginBottom: "2.5rem" }}>
                <p style={{ fontSize: "0.85rem", fontWeight: 700, marginBottom: "1rem" }}>Gebruik maken van NHG?</p>
                <div className="toggle-pill-container">
                  <button 
                    className={`pill-btn ${nhg ? "active" : ""}`}
                    onClick={() => setNhg(true)}
                  >
                    Met NHG
                  </button>
                  <button 
                    className={`pill-btn ${!nhg ? "active" : ""}`}
                    onClick={() => setNhg(false)}
                  >
                    Zonder NHG
                  </button>
                </div>
                <p style={{ fontSize: "0.7rem", marginTop: "0.8rem", opacity: 0.6 }}>NHG is mogelijk voor woningen tot € 435.000.</p>
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

        {/* Step 4: Result Revelation */}
        {activeStep === 4 && (
          <div className="result-revelation animate-majestic">
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
                <p>{nhg ? "3.78%" : "4.24%"}</p>
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
              <button 
                className="button" 
                style={{ flex: 1, background: "white", color: "var(--primary-accent)" }}
                onClick={handleOfferteClick}
              >
                GRATIS OFFERTE
              </button>
            </div>
          </div>
        )}

      </div>

      <style jsx>{`
        .journey-container {
          padding: var(--calc-padding);
          min-height: 550px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-chapter {
          width: 100%;
          max-width: 500px;
        }

        .animate-majestic {
          animation: majesticSlide 3.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        @keyframes majesticSlide {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .selector-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .selector-grid-three {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
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
          transition: 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .selector-btn.small {
          padding: 1.5rem 1rem;
        }

        .selector-btn:hover {
          border-color: var(--primary-accent);
          transform: translateY(-5px);
        }

        .selector-btn.active {
          border-color: var(--primary-accent);
          background: rgba(99, 102, 241, 0.05);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.1);
        }

        .selector-btn .icon { font-size: 2.5rem; }
        .selector-btn .label { font-weight: 800; font-size: 0.95rem; color: var(--primary); }

        .btn-toggle {
          flex: 1;
          padding: 0.8rem;
          border-radius: 12px;
          border: 1px solid var(--border);
          background: white;
          cursor: pointer;
          font-weight: 700;
          transition: 0.3s;
        }

        .btn-toggle.active {
          background: var(--primary-accent);
          color: white;
          border-color: var(--primary-accent);
        }

        .toggle-pill-container {
          display: flex;
          background: #f1f5f9;
          padding: 4px;
          border-radius: 14px;
          gap: 4px;
        }

        .pill-btn {
          flex: 1;
          padding: 0.8rem;
          border: none;
          border-radius: 10px;
          background: transparent;
          font-weight: 700;
          cursor: pointer;
          transition: 0.5s;
        }

        .pill-btn.active {
          background: white;
          color: var(--primary-accent);
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .input-stack { display: flex; flex-direction: column; gap: 1.5rem; }
        .input-wrapper { position: relative; }
        .currency { position: absolute; left: 1.2rem; top: 50%; transform: translateY(-50%); font-weight: 700; opacity: 0.4; }
        input[type="number"] { padding-left: 2.5rem; font-size: 1.2rem; }

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

        .result-details { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }
        .detail-card { background: rgba(255, 255, 255, 0.1); padding: 1.5rem; border-radius: 16px; text-align: left; }
        .detail-card label { color: white; opacity: 0.6; font-size: 0.75rem; margin-bottom: 0.4rem; }
        .detail-card p { font-size: 1.3rem; font-weight: 800; margin: 0; }
        .gauge-outer { height: 8px; background: rgba(255, 255, 255, 0.2); border-radius: 10px; overflow: hidden; }
        .gauge-inner { height: 100%; background: white; border-radius: 10px; transition: width 3.5s cubic-bezier(0.34, 1.56, 0.64, 1); }

        @media (max-width: 600px) {
          .selector-grid-three { grid-template-columns: 1fr; }
          .result-main { font-size: 2.5rem; }
          .result-details { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
