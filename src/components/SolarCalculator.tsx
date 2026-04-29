"use client";

import { useState, useEffect } from "react";

export default function SolarCalculator() {
  const [panelCount, setPanelCount] = useState<number>(10);
  const [panelPower, setPanelPower] = useState<number>(400); // Wp per panel
  const [electricityPrice, setElectricityPrice] = useState<number>(0.35);
  const [investment, setInvestment] = useState<number>(5500);

  const [yearlyYield, setYearlyYield] = useState<number>(0);
  const [yearlySavings, setYearlySavings] = useState<number>(0);
  const [paybackPeriod, setPaybackPeriod] = useState<number>(0);

  useEffect(() => {
    // Average yield in NL is approx 0.85 kWh per Wp
    const totalWp = panelCount * panelPower;
    const yieldKwh = totalWp * 0.88; 
    const savings = yieldKwh * electricityPrice;
    
    setYearlyYield(yieldKwh);
    setYearlySavings(savings);
    setPaybackPeriod(investment / savings);
  }, [panelCount, panelPower, electricityPrice, investment]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(value);
  };

  return (
    <div className="card animate-in stagger-2">
      <div style={{ display: "grid", gap: "1.2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label>Aantal panelen</label>
            <input type="number" value={panelCount} onChange={(e) => setPanelCount(Number(e.target.value))} />
          </div>
          <div>
            <label>Wattpiek (Wp) / paneel</label>
            <input type="number" value={panelPower} onChange={(e) => setPanelPower(Number(e.target.value))} />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label>Stroomprijs (€/kWh)</label>
            <input type="number" step="0.01" value={electricityPrice} onChange={(e) => setElectricityPrice(Number(e.target.value))} />
          </div>
          <div>
            <label>Investering (€)</label>
            <input type="number" value={investment} onChange={(e) => setInvestment(Number(e.target.value))} />
          </div>
        </div>
      </div>

      <div style={{ 
        marginTop: "2rem", 
        padding: "2rem", 
        background: "var(--primary-accent)", 
        borderRadius: "16px", 
        color: "white",
        textAlign: "center"
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <p style={{ fontSize: "0.75rem", opacity: 0.8 }}>Opbrengst / jaar</p>
            <div style={{ fontSize: "1.5rem", fontWeight: 800 }}>{Math.round(yearlyYield)} kWh</div>
          </div>
          <div>
            <p style={{ fontSize: "0.75rem", opacity: 0.8 }}>Besparing / jaar</p>
            <div style={{ fontSize: "1.5rem", fontWeight: 800 }}>{formatCurrency(yearlySavings)}</div>
          </div>
        </div>
        <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <p style={{ fontSize: "0.75rem", opacity: 0.8 }}>Terugverdientijd</p>
          <div style={{ fontSize: "2rem", fontWeight: 800 }}>{paybackPeriod.toFixed(1)} jaar</div>
        </div>
      </div>
    </div>
  );
}
