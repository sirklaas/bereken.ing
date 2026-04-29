"use client";

import { useState, useEffect } from "react";

export default function RateCalculator() {
  const [netIncome, setNetIncome] = useState<number>(4000);
  const [expenses, setExpenses] = useState<number>(500);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(32);
  const [vacationWeeks, setVacationWeeks] = useState<number>(6);
  
  const [hourlyRate, setHourlyRate] = useState<number>(0);
  const [annualRevenue, setAnnualRevenue] = useState<number>(0);

  useEffect(() => {
    // Basic freelance rate logic (NL context)
    // We assume 30% tax for a rough estimate to reach the 'net' goal
    const desiredGrossAnnual = (netIncome * 12) / 0.7;
    const totalAnnualNeeded = desiredGrossAnnual + (expenses * 12);
    
    const billableWeeks = 52 - vacationWeeks;
    const billableHours = billableWeeks * hoursPerWeek;
    
    const rate = totalAnnualNeeded / billableHours;
    setHourlyRate(rate);
    setAnnualRevenue(totalAnnualNeeded);
  }, [netIncome, expenses, hoursPerWeek, vacationWeeks]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("nl-NL", {
      style: "currency",
      currency: "EUR",
    }).format(value);
  };

  return (
    <div className="card animate-in stagger-2">

      <div style={{ display: "grid", gap: "1.5rem" }}>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Gewenst Netto Inkomen (p/m)</label>
          <div style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: "1rem", top: "1rem", opacity: 0.5 }}>€</span>
            <input type="number" value={netIncome} onChange={(e) => setNetIncome(Number(e.target.value))} style={{ paddingLeft: "2.5rem" }} />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Zakelijke Kosten (p/m)</label>
            <input type="number" value={expenses} onChange={(e) => setExpenses(Number(e.target.value))} />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Declarabele Uren (p/w)</label>
            <input type="number" value={hoursPerWeek} onChange={(e) => setHoursPerWeek(Number(e.target.value))} />
          </div>
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Vakantie & Ziekte (weken p/j)</label>
          <input type="number" value={vacationWeeks} onChange={(e) => setVacationWeeks(Number(e.target.value))} />
        </div>

        <div style={{ 
          marginTop: "2rem", 
          padding: "2rem", 
          background: "linear-gradient(135deg, var(--primary-accent) 0%, var(--primary-light) 100%)", 
          borderRadius: "12px",
          color: "white",
          textAlign: "center"
        }}>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", marginBottom: "0.5rem" }}>Aanbevolen Uurtarief (excl. btw)</p>
          <div style={{ fontSize: "2.5rem", fontWeight: 800, fontFamily: "var(--font-heading)" }}>
            {formatCurrency(hourlyRate)}
          </div>
          <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.2)", fontSize: "0.85rem" }}>
            Benodigde Jaaromzet: <strong>{formatCurrency(annualRevenue)}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
