"use client";

import { useState, useEffect } from "react";

export default function BatteryCalculator() {
  const [batteryCapacity, setBatteryCapacity] = useState<number>(10); // kWh
  const [yearlyYield, setYearlyYield] = useState<number>(4000); // kWh from solar
  const [electricityPrice, setElectricityPrice] = useState<number>(0.35);
  const [feedInPrice, setFeedInPrice] = useState<number>(0.07);
  const [investment, setInvestment] = useState<number>(7500);

  const [yearlySavings, setYearlySavings] = useState<number>(0);
  const [paybackPeriod, setPaybackPeriod] = useState<number>(0);

  useEffect(() => {
    // Basic logic: a battery increases self-consumption by approx 30-40% of yield
    // (from ~30% to ~70% self-consumption)
    const extraSelfConsumptionKwh = yearlyYield * 0.35; 
    const savingsPerKwh = electricityPrice - feedInPrice;
    const savings = extraSelfConsumptionKwh * savingsPerKwh;
    
    setYearlySavings(savings);
    setPaybackPeriod(investment / savings);
  }, [batteryCapacity, yearlyYield, electricityPrice, feedInPrice, investment]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(value);
  };

  return (
    <div className="card animate-in stagger-2">

      <div style={{ display: "grid", gap: "1.2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label>Capaciteit (kWh)</label>
            <input type="number" value={batteryCapacity} onChange={(e) => setBatteryCapacity(Number(e.target.value))} />
          </div>
          <div>
            <label>Zon opbrengst / jr</label>
            <input type="number" value={yearlyYield} onChange={(e) => setYearlyYield(Number(e.target.value))} />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label>Stroomprijs (€/kWh)</label>
            <input type="number" step="0.01" value={electricityPrice} onChange={(e) => setElectricityPrice(Number(e.target.value))} />
          </div>
          <div>
            <label>Terugleverprijs (€/kWh)</label>
            <input type="number" step="0.01" value={feedInPrice} onChange={(e) => setFeedInPrice(Number(e.target.value))} />
          </div>
        </div>

        <div>
          <label>Investering (€)</label>
          <input type="number" value={investment} onChange={(e) => setInvestment(Number(e.target.value))} />
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
            <p style={{ fontSize: "0.75rem", opacity: 0.8 }}>Extra besparing / jaar</p>
            <div style={{ fontSize: "1.5rem", fontWeight: 800 }}>{formatCurrency(yearlySavings)}</div>
          </div>
          <div>
            <p style={{ fontSize: "0.75rem", opacity: 0.8 }}>Terugverdientijd</p>
            <div style={{ fontSize: "1.5rem", fontWeight: 800 }}>{paybackPeriod.toFixed(1)} jaar</div>
          </div>
        </div>
      </div>
    </div>
  );
}
