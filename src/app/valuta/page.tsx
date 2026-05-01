"use client";

import ToolLayout from "@/components/ToolLayout";
import { useState } from "react";

const RATES: Record<string, number> = {
  EUR: 1,
  USD: 1.09,
  GBP: 0.85,
  JPY: 162.45,
  CHF: 0.95,
};

export default function ValutaPage() {
  const [amount, setAmount] = useState<number>(100);
  const [from, setFrom] = useState("EUR");
  const [to, setTo] = useState("USD");

  const convert = (val: number) => {
    const inEur = val / RATES[from];
    return (inEur * RATES[to]).toFixed(2);
  };

  return (
    <ToolLayout
      title="Valuta Converter"
      subtitle="Reken direct bedragen om tussen de meest gebruikte wereldvaluta's met actuele wisselkoersen."
      topic="vaste-lasten"
    >
      <div className="card converter-card">
        <div className="input-row">
          <div className="input-box">
            <label>Bedrag</label>
            <input 
              type="number" 
              value={amount} 
              onChange={e => setAmount(Number(e.target.value))}
              className="currency-input"
            />
          </div>
          <div className="input-box">
            <label>Van</label>
            <select value={from} onChange={e => setFrom(e.target.value)} className="currency-select">
              {Object.keys(RATES).map(curr => <option key={curr} value={curr}>{curr}</option>)}
            </select>
          </div>
        </div>

        <div className="swap-divider">
          <div className="swap-line"></div>
          <div className="swap-icon">⇌</div>
          <div className="swap-line"></div>
        </div>

        <div className="input-row">
          <div className="input-box">
            <label>Resultaat</label>
            <input 
              type="text" 
              value={convert(amount)} 
              readOnly 
              className="currency-input result"
            />
          </div>
          <div className="input-box">
            <label>Naar</label>
            <select value={to} onChange={e => setTo(e.target.value)} className="currency-select">
              {Object.keys(RATES).map(curr => <option key={curr} value={curr}>{curr}</option>)}
            </select>
          </div>
        </div>

        <div className="rate-info">
          1 {from} = {(RATES[to] / RATES[from]).toFixed(4)} {to}
        </div>
      </div>

      <style jsx>{`
        .converter-card {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 3rem;
        }
        .input-row {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 1rem;
        }
        .input-box label {
          display: block;
          font-size: 0.75rem;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          font-weight: 800;
          margin-bottom: 0.5rem;
        }
        .currency-input {
          width: 100%;
          padding: 1.2rem;
          background: rgba(255,255,255,0.05);
          border: 2px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          color: white;
          font-size: 1.5rem;
          font-weight: 700;
          outline: none;
        }
        .currency-input.result {
          background: rgba(255,255,255,0.1);
          color: var(--primary-accent);
          border-color: var(--primary-accent);
        }
        .currency-select {
          width: 100%;
          padding: 1.2rem;
          background: rgba(255,255,255,0.1);
          border: 2px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          color: white;
          font-size: 1.2rem;
          font-weight: 800;
          cursor: pointer;
        }
        .swap-divider {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 1rem 0;
        }
        .swap-line {
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.1);
        }
        .swap-icon {
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: var(--primary-accent);
        }
        .rate-info {
          text-align: center;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.4);
          font-weight: 600;
        }
      `}</style>
    </ToolLayout>
  );
}
