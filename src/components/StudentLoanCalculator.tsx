"use client";

import { useState, useEffect } from "react";

export default function StudentLoanCalculator() {
  const [debt, setDebt] = useState<number>(25000);
  const [interestRate, setInterestRate] = useState<number>(2.56);
  const [years, setYears] = useState<number>(35);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalPaid, setTotalPaid] = useState<number>(0);

  useEffect(() => {
    const r = interestRate / 100 / 12;
    const n = years * 12;
    
    if (r === 0) {
      setMonthlyPayment(debt / n);
      setTotalPaid(debt);
    } else {
      const payment = (debt * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setMonthlyPayment(payment);
      setTotalPaid(payment * n);
    }
  }, [debt, interestRate, years]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("nl-NL", {
      style: "currency",
      currency: "EUR",
    }).format(value);
  };

  return (
    <div className="card animate-in stagger-2">
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Studieschuld Calculator</h2>
        <p style={{ fontSize: "0.9rem" }}>Bereken je maandbedrag op basis van de huidige DUO regels.</p>
      </div>

      <div style={{ display: "grid", gap: "1.5rem" }}>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Totale Studieschuld</label>
          <div style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: "1rem", top: "1rem", opacity: 0.5 }}>€</span>
            <input
              type="number"
              value={debt}
              onChange={(e) => setDebt(Number(e.target.value))}
              style={{ paddingLeft: "2.5rem" }}
            />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Rente (%)</label>
            <input
              type="number"
              step="0.01"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
            />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Looptijd</label>
            <select value={years} onChange={(e) => setYears(Number(e.target.value))}>
              <option value={35}>35 jaar (Nieuw)</option>
              <option value={15}>15 jaar (Oud)</option>
            </select>
          </div>
        </div>

        <div style={{ 
          marginTop: "2rem", 
          padding: "2rem", 
          background: "linear-gradient(135deg, var(--primary-accent) 0%, var(--primary-light) 100%)", 
          borderRadius: "12px",
          color: "white",
          textAlign: "center"
        }}>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", marginBottom: "0.5rem" }}>Geschat Maandbedrag</p>
          <div style={{ fontSize: "2.5rem", fontWeight: 800, fontFamily: "var(--font-heading)" }}>
            {formatCurrency(monthlyPayment)}
          </div>
          <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.2)", fontSize: "0.85rem" }}>
            Totaal terug te betalen: <strong>{formatCurrency(totalPaid)}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
