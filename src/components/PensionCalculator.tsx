"use client";

import { useState, useEffect } from "react";

export default function PensionCalculator() {
  const [age, setAge] = useState<number>(30);
  const [retireAge, setRetireAge] = useState<number>(67);
  const [monthly, setMonthly] = useState<number>(300);
  const [employer, setEmployer] = useState<number>(150);
  const [rate, setRate] = useState<number>(5); // expected annual return %

  const [futureValue, setFutureValue] = useState<number>(0);

  useEffect(() => {
    const years = Math.max(0, retireAge - age);
    const totalMonthly = monthly + employer;
    // Convert annual rate to monthly factor
    const monthlyRate = Math.pow(1 + rate / 100, 1 / 12) - 1;
    // Future value of a series formula
    const fv = totalMonthly * ((Math.pow(1 + monthlyRate, years * 12) - 1) / monthlyRate);
    setFutureValue(fv);
  }, [age, retireAge, monthly, employer, rate]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("nl-NL", {
      style: "currency",
      currency: "EUR",
    }).format(value);
  };

  return (
    <div className="card animate-in stagger-2">

      <div style={{ display: "grid", gap: "1rem" }}>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Huidige leeftijd</label>
          <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Pensioenleeftijd</label>
          <input type="number" value={retireAge} onChange={(e) => setRetireAge(Number(e.target.value))} />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Eigen maandelijkse bijdrage (€)</label>
          <input type="number" value={monthly} onChange={(e) => setMonthly(Number(e.target.value))} />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Werkgeversbijdrage (€)</label>
          <input type="number" value={employer} onChange={(e) => setEmployer(Number(e.target.value))} />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Verwacht rendement % (jaarlijks)</label>
          <input type="number" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} />
        </div>
      </div>

      <div style={{ marginTop: "2rem", padding: "1.5rem", background: "var(--primary-accent)", borderRadius: "12px", color: "white", textAlign: "center" }}>
        <p style={{ fontSize: "0.9rem", marginBottom: "0.5rem" }}>Geschatte pensioenpot op leeftijd {retireAge}</p>
        <div style={{ fontSize: "2rem", fontWeight: 800 }}>{formatCurrency(futureValue)}</div>
      </div>
    </div>
  );
}
