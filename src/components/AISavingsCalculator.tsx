"use client";

import { useState, useEffect } from "react";

export default function AISavingsCalculator() {
  const [hourlyRate, setHourlyRate] = useState<number>(75);
  const [tasksPerWeek, setTasksPerWeek] = useState<number>(10);
  const [timePerTask, setTimePerTask] = useState<number>(2); // hours
  const [aiEfficiency, setAiEfficiency] = useState<number>(60); // % faster
  const [aiCost, setAiCost] = useState<number>(20); // monthly subscription

  const [monthlySavings, setMonthlySavings] = useState<number>(0);
  const [hoursSaved, setHoursSaved] = useState<number>(0);
  const [roi, setRoi] = useState<number>(0);

  useEffect(() => {
    const totalHoursBefore = tasksPerWeek * timePerTask * 4.33; // monthly
    const hoursSavedMonthly = totalHoursBefore * (aiEfficiency / 100);
    const moneySavedMonthly = hoursSavedMonthly * hourlyRate;
    
    setHoursSaved(hoursSavedMonthly);
    setMonthlySavings(moneySavedMonthly);
    
    if (aiCost > 0) {
      setRoi(((moneySavedMonthly - aiCost) / aiCost) * 100);
    }
  }, [hourlyRate, tasksPerWeek, timePerTask, aiEfficiency, aiCost]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(value);
  };

  return (
    <div className="card animate-in stagger-2">
      <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>AI Productivity & ROI</h2>
      <p style={{ fontSize: "0.9rem", marginBottom: "1.5rem" }}>Bereken hoeveel tijd en geld AI jou bespaart op maandbasis.</p>

      <div style={{ display: "grid", gap: "1.2rem" }}>
        <div>
          <label>Uurtarief (€)</label>
          <input type="number" value={hourlyRate} onChange={(e) => setHourlyRate(Number(e.target.value))} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label>Taken / week</label>
            <input type="number" value={tasksPerWeek} onChange={(e) => setTasksPerWeek(Number(e.target.value))} />
          </div>
          <div>
            <label>Uur / taak</label>
            <input type="number" step="0.5" value={timePerTask} onChange={(e) => setTimePerTask(Number(e.target.value))} />
          </div>
        </div>

        <div>
          <label>AI Efficiëntie (%)</label>
          <input type="range" min="10" max="90" step="5" value={aiEfficiency} onChange={(e) => setAiEfficiency(Number(e.target.value))} />
          <div style={{ fontSize: "0.8rem", textAlign: "right", color: "var(--primary-accent)", fontWeight: 700 }}>{aiEfficiency}% sneller</div>
        </div>

        <div>
          <label>AI Kosten / maand (€)</label>
          <input type="number" value={aiCost} onChange={(e) => setAiCost(Number(e.target.value))} />
        </div>
      </div>

      <div style={{ 
        marginTop: "2rem", 
        padding: "1.5rem", 
        background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)", 
        borderRadius: "16px", 
        color: "white"
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", textAlign: "center" }}>
          <div>
            <p style={{ fontSize: "0.75rem", opacity: 0.9, marginBottom: "0.2rem" }}>Besparing / maand</p>
            <div style={{ fontSize: "1.4rem", fontWeight: 800 }}>{formatCurrency(monthlySavings)}</div>
          </div>
          <div style={{ borderLeft: "1px solid rgba(255,255,255,0.2)" }}>
            <p style={{ fontSize: "0.75rem", opacity: 0.9, marginBottom: "0.2rem" }}>Vrije tijd extra</p>
            <div style={{ fontSize: "1.4rem", fontWeight: 800 }}>{hoursSaved.toFixed(1)} uur</div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <p style={{ fontSize: "0.75rem", opacity: 0.9 }}>Return on Investment (ROI)</p>
          <div style={{ fontSize: "1.6rem", fontWeight: 800 }}>{roi.toLocaleString()} %</div>
        </div>
      </div>
    </div>
  );
}
