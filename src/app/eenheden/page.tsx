"use client";

import ToolLayout from "@/components/ToolLayout";
import { useState } from "react";

const UNITS: Record<string, Record<string, number>> = {
  Afstand: {
    Meter: 1,
    Centimeter: 100,
    Kilometer: 0.001,
    Inch: 39.3701,
    Voet: 3.28084,
    Mijl: 0.000621371,
  },
  Gewicht: {
    Gram: 1,
    Kilogram: 0.001,
    Milligram: 1000,
    Pond: 0.00220462,
    Ons: 0.035274,
  },
};

export default function UnitsPage() {
  const [category, setCategory] = useState("Afstand");
  const [amount, setAmount] = useState<number>(1);
  const [from, setFrom] = useState("Meter");
  const [to, setTo] = useState("Centimeter");

  const currentUnits = UNITS[category];

  const convert = (val: number) => {
    const inBase = val / currentUnits[from];
    return (inBase * currentUnits[to]).toFixed(4);
  };

  const handleCategoryChange = (cat: string) => {
    setCategory(cat);
    const keys = Object.keys(UNITS[cat]);
    setFrom(keys[0]);
    setTo(keys[1]);
  };

  return (
    <ToolLayout
      title="Eenheden Omrekenen"
      subtitle="Reken snel en eenvoudig eenheden om voor afstand, gewicht en meer. De meest complete tool voor al je berekeningen."
      topic="fun"
    >
      <div className="card converter-card">
        <div className="category-select-row">
          {Object.keys(UNITS).map(cat => (
            <button 
              key={cat} 
              className={`cat-chip ${category === cat ? 'active' : ''}`}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="input-row">
          <div className="input-box">
            <label>Van</label>
            <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} className="unit-input" />
            <select value={from} onChange={e => setFrom(e.target.value)} className="unit-select">
              {Object.keys(currentUnits).map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>

          <div className="swap-icon-vertical">⇌</div>

          <div className="input-box">
            <label>Naar</label>
            <input type="text" value={convert(amount)} readOnly className="unit-input result" />
            <select value={to} onChange={e => setTo(e.target.value)} className="unit-select">
              {Object.keys(currentUnits).map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
        </div>
      </div>

      <style jsx>{`
        .converter-card {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .category-select-row {
          display: flex;
          gap: 0.8rem;
          justify-content: center;
        }
        .cat-chip {
          padding: 10px 20px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          color: white;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s;
        }
        .cat-chip.active {
          background: var(--primary-accent);
          border-color: white;
        }
        .input-row {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        @media (min-width: 768px) {
          .input-row {
            flex-direction: row;
            align-items: flex-end;
          }
        }
        .input-box {
          flex: 1;
        }
        .input-box label {
          display: block;
          font-size: 0.7rem;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          font-weight: 900;
          margin-bottom: 0.5rem;
        }
        .unit-input {
          width: 100%;
          padding: 1.2rem;
          background: rgba(255,255,255,0.05);
          border: 2px solid rgba(255,255,255,0.1);
          border-radius: 16px 16px 0 0;
          color: white;
          font-size: 1.8rem;
          font-weight: 700;
          outline: none;
        }
        .unit-input.result {
          background: rgba(255,255,255,0.1);
          color: var(--primary-accent);
        }
        .unit-select {
          width: 100%;
          padding: 0.8rem;
          background: rgba(255,255,255,0.15);
          border: none;
          border-radius: 0 0 16px 16px;
          color: white;
          font-weight: 800;
          cursor: pointer;
        }
        .swap-icon-vertical {
          font-size: 2rem;
          color: var(--primary-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
      `}</style>
    </ToolLayout>
  );
}
