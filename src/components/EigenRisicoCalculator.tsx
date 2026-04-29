"use client";

import { useState, useEffect } from "react";

export default function EigenRisicoCalculator() {
  const [expenses, setExpenses] = useState<number>(500); // average annual medical expenses
  const [deductible, setDeductible] = useState<number>(250); // eigen risico
  const [coverage, setCoverage] = useState<number>(80); // % covered after deductible

  const [outOfPocket, setOutOfPocket] = useState<number>(0);

  useEffect(() => {
    // Simple model: you pay deductible first, then insurance covers a percentage of the remainder
    const remaining = Math.max(0, expenses - deductible);
    const insured = remaining * (coverage / 100);
    const totalPaid = deductible + (remaining - insured);
    setOutOfPocket(totalPaid);
  }, [expenses, deductible, coverage]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(value);
  };

  return (
    <div className="card animate-in stagger-2">

      <div style={{ display: "grid", gap: "1rem" }}>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Jaarlijkse zorgkosten (€)</label>
          <input type="number" value={expenses} onChange={e => setExpenses(Number(e.target.value))} />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Eigen risico (€)</label>
          <input type="number" value={deductible} onChange={e => setDeductible(Number(e.target.value))} />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Verzekeringsdekking % (na eigen risico)</label>
          <input type="number" step="0.1" value={coverage} onChange={e => setCoverage(Number(e.target.value))} />
        </div>
      </div>

      <div style={{ marginTop: "2rem", padding: "1.5rem", background: "var(--primary-accent)", borderRadius: "12px", color: "white", textAlign: "center" }}>
        <p style={{ fontSize: "0.9rem", marginBottom: "0.5rem" }}>Jaarlijkse eigen kosten</p>
        <div style={{ fontSize: "2rem", fontWeight: 800 }}>{formatCurrency(outOfPocket)}</div>
      </div>
    </div>
  );
}
