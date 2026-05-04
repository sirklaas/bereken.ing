"use client";

import { useState, useEffect } from "react";

export default function MortgageCalculator() {
  // State for Acts 1 & 2 (Questions & Engagement)
  const [income, setIncome] = useState<number>(65000);
  const [partnerIncome, setPartnerIncome] = useState<number>(0);
  const [debts, setDebts] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(3.92);
  const [result, setResult] = useState<number>(0);

  // Impeccable Logic Engine (Step 2: Answers)
  useEffect(() => {
    // 2026 Nibud-style approximate math
    const totalIncome = income + (partnerIncome * 0.9); // Partner income counts for 90% in 2026
    const multiplier = interestRate > 4 ? 4.2 : 4.6;
    const baseAmount = totalIncome * multiplier;
    const debtAdjustment = debts * 12 * 1.5; // Rough debt-to-loan impact
    
    setResult(Math.max(0, baseAmount - debtAdjustment));
  }, [income, partnerIncome, debts, interestRate]);

  return (
    <div className="pristine-card" style={{ padding: 0, overflow: "hidden" }}>
      
      {/* Act 1 & 2: The Engagement Grid */}
      <div className="internal-workspace">
        
        {/* Left: The Questions (Chapters) */}
        <div className="questions-side">
          <div className="chapter">
            <h3 className="hero-eyebrow">STAP 1: INKOMEN</h3>
            <div className="input-group">
              <label>Jouw bruto jaarinkomen</label>
              <div className="input-wrapper">
                <span className="currency">€</span>
                <input 
                  type="number" 
                  value={income} 
                  onChange={(e) => setIncome(Number(e.target.value))} 
                />
              </div>
            </div>

            <div className="input-group">
              <label>Jaarinkomen partner (optioneel)</label>
              <div className="input-wrapper">
                <span className="currency">€</span>
                <input 
                  type="number" 
                  value={partnerIncome} 
                  onChange={(e) => setPartnerIncome(Number(e.target.value))} 
                />
              </div>
            </div>
          </div>

          <div className="chapter" style={{ marginTop: "2.5rem" }}>
            <h3 className="hero-eyebrow">STAP 2: LASTEN & RENTE</h3>
            <div className="input-group">
              <label>Maandelijkse verplichtingen (DUO, leningen)</label>
              <div className="input-wrapper">
                <span className="currency">€</span>
                <input 
                  type="number" 
                  value={debts} 
                  onChange={(e) => setDebts(Number(e.target.value))} 
                />
              </div>
            </div>

            <div className="input-group">
              <label>Rentevaste periode (indicatie %)</label>
              <div className="input-wrapper">
                <span className="currency-right">%</span>
                <input 
                  type="number" 
                  step="0.01"
                  value={interestRate} 
                  onChange={(e) => setInterestRate(Number(e.target.value))} 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right: The revelation Summary (Act 3) */}
        <div className="result-side">
          <div className="result-card-inner">
            <h3 className="hero-eyebrow" style={{ color: "white", opacity: 0.6 }}>JOUW INDICATIE</h3>
            <div className="result-main">
              <span className="result-symbol">€</span>
              <span className="result-value">
                {result.toLocaleString("nl-NL", { maximumFractionDigits: 0 })}
              </span>
            </div>
            
            {/* Visual Evidence: The Borrowing Gauge */}
            <div className="gauge-container">
              <div className="gauge-track">
                <div 
                  className="gauge-fill" 
                  style={{ width: `${Math.min(100, (result / 600000) * 100)}%` }} 
                />
              </div>
              <div className="gauge-labels">
                <span>Veilig</span>
                <span>Maximaal</span>
              </div>
            </div>

            <div className="result-stats">
              <div className="stat">
                <label>Maandlast (ca.)</label>
                <p>€ {(result / 235).toLocaleString("nl-NL", { maximumFractionDigits: 0 })}</p>
              </div>
              <div className="stat">
                <label>LTV Ratio</label>
                <p>100%</p>
              </div>
            </div>

            <button className="button" style={{ 
              marginTop: "2rem", 
              width: "100%", 
              background: "white", 
              color: "var(--primary-accent)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
            }}>
              OFFERTE AANVRAGEN
            </button>
          </div>
        </div>

      </div>

      <style jsx>{`
        .internal-workspace {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          min-height: 500px;
        }

        .questions-side {
          padding: var(--calc-padding);
          background: white;
        }

        .result-side {
          padding: var(--calc-padding);
          background: var(--primary-accent);
          color: white;
          display: flex;
          align-items: center;
        }

        .result-card-inner {
          width: 100%;
        }

        .chapter h3 {
          margin-bottom: 1.5rem;
        }

        .input-group {
          margin-bottom: 1.5rem;
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
          color: var(--secondary);
          opacity: 0.5;
        }

        .currency-right {
          position: absolute;
          right: 1.2rem;
          top: 50%;
          transform: translateY(-50%);
          font-weight: 700;
          color: var(--secondary);
          opacity: 0.5;
        }

        input {
          padding-left: 2.8rem;
          font-size: 1.1rem;
          /* Impeccable OKLCH focus logic placeholder */
        }

        .result-main {
          font-family: var(--font-fugaz), cursive;
          font-size: clamp(2rem, 5vw, 3.2rem);
          line-height: 1;
          margin: 1rem 0 2rem;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .result-symbol {
          font-size: 1.5rem;
          margin-top: 0.5rem;
        }

        /* Gauge Styling */
        .gauge-container {
          margin: 2rem 0;
        }
        .gauge-track {
          height: 8px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          overflow: hidden;
        }
        .gauge-fill {
          height: 100%;
          background: white;
          border-radius: 10px;
          transition: width 1s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .gauge-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          margin-top: 0.8rem;
          opacity: 0.6;
        }

        .result-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stat label {
          color: white;
          opacity: 0.6;
          font-size: 0.75rem;
          margin-bottom: 0.3rem;
        }

        .stat p {
          font-size: 1.2rem;
          font-weight: 800;
          margin: 0;
        }

        @media (max-width: 900px) {
          .internal-workspace {
            grid-template-columns: 1fr;
          }
          .result-side {
            background: #4f46e5; /* Slightly different indigo for visual break */
          }
        }
      `}</style>
    </div>
  );
}
