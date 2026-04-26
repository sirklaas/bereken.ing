"use client";

import { useState, useEffect } from "react";

const INSULATION_TYPES = [
  { name: "Dakisolatie", savingsPerM2: 20, costPerM2: 50 },
  { name: "Spouwmuurisolatie", savingsPerM2: 12, costPerM2: 25 },
  { name: "Vloerisolatie", savingsPerM2: 10, costPerM2: 35 },
  { name: "HR++ Glas", savingsPerM2: 25, costPerM2: 150 },
];

export default function InsulationCalculator() {
  const [m2, setM2] = useState<number>(50);
  const [typeIndex, setTypeIndex] = useState<number>(0);
  const [subsidyPercentage, setSubsidyPercentage] = useState<number>(30);

  const [annualSavings, setAnnualSavings] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [paybackPeriod, setPaybackPeriod] = useState<number>(0);

  useEffect(() => {
    const type = INSULATION_TYPES[typeIndex];
    const rawCost = m2 * type.costPerM2;
    const savings = m2 * type.savingsPerM2;
    const netCost = rawCost * (1 - subsidyPercentage / 100);

    setTotalCost(netCost);
    setAnnualSavings(savings);
    setPaybackPeriod(netCost / savings);
  }, [m2, typeIndex, subsidyPercentage]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(value);
  };

  return (
    <div className="card animate-in stagger-2">
      <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Isolatie Besparing</h2>
      <p style={{ fontSize: "0.9rem", marginBottom: "1.5rem" }}>Bereken hoeveel je bespaart met woningisolatie en wat de terugverdientijd is.</p>

      <div style={{ display: "grid", gap: "1.2rem" }}>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, fontSize: "0.85rem" }}>Type Isolatie</label>
          <select 
            value={typeIndex} 
            onChange={(e) => setTypeIndex(Number(e.target.value))}
            style={{ width: "100%", padding: "0.8rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}
          >
            {INSULATION_TYPES.map((t, i) => (
              <option key={t.name} value={i}>{t.name}</option>
            ))}
          </select>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, fontSize: "0.85rem" }}>Oppervlakte (m2)</label>
            <input type="number" value={m2} onChange={(e) => setM2(Number(e.target.value))} />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, fontSize: "0.85rem" }}>Subsidie (%)</label>
            <input type="number" value={subsidyPercentage} onChange={(e) => setSubsidyPercentage(Number(e.target.value))} />
          </div>
        </div>
      </div>

      <div style={{ 
        marginTop: "2rem", 
        padding: "1.5rem", 
        background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)", 
        borderRadius: "12px", 
        color: "white"
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", textAlign: "center" }}>
          <div>
            <p style={{ fontSize: "0.75rem", opacity: 0.9, marginBottom: "0.2rem" }}>Jaarlijkse Besparing</p>
            <div style={{ fontSize: "1.4rem", fontWeight: 800 }}>{formatCurrency(annualSavings)}</div>
          </div>
          <div style={{ borderLeft: "1px solid rgba(255,255,255,0.2)" }}>
            <p style={{ fontSize: "0.75rem", opacity: 0.9, marginBottom: "0.2rem" }}>Netto Kosten</p>
            <div style={{ fontSize: "1.4rem", fontWeight: 800 }}>{formatCurrency(totalCost)}</div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <p style={{ fontSize: "0.75rem", opacity: 0.9 }}>Terugverdientijd</p>
          <div style={{ fontSize: "1.6rem", fontWeight: 800 }}>{paybackPeriod.toFixed(1)} jaar</div>
        </div>
      </div>
    </div>
  );
}
