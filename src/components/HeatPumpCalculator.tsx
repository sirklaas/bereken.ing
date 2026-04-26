"use client";

import { useState, useEffect } from "react";

export default function HeatPumpCalculator() {
  const [gasUsage, setGasUsage] = useState<number>(1500);
  const [gasPrice, setGasPrice] = useState<number>(1.35);
  const [electricityPrice, setElectricityPrice] = useState<number>(0.35);
  const [investment, setInvestment] = useState<number>(8000);
  const [subsidy, setSubsidy] = useState<number>(2500);

  const [annualSavings, setAnnualSavings] = useState<number>(0);
  const [paybackPeriod, setPaybackPeriod] = useState<number>(0);

  useEffect(() => {
    // 1 m3 gas = approx 9.7 kWh heat
    // Heat pump Efficiency (COP) approx 4.0
    const heatNeededKWh = gasUsage * 9.7;
    const electricityNeededKWh = heatNeededKWh / 4.0;
    
    const currentGasCost = gasUsage * gasPrice;
    const newElectricityCost = electricityNeededKWh * electricityPrice;
    
    const savings = currentGasCost - newElectricityCost;
    const netInvestment = investment - subsidy;
    
    setAnnualSavings(savings);
    setPaybackPeriod(netInvestment / savings);
  }, [gasUsage, gasPrice, electricityPrice, investment, subsidy]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(value);
  };

  return (
    <div className="card animate-in stagger-2">
      <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Warmtepomp Rendement</h2>
      <p style={{ fontSize: "0.9rem", marginBottom: "1.5rem" }}>Bereken de besparing en terugverdientijd van een hybride of volledige warmtepomp.</p>

      <div style={{ display: "grid", gap: "1.2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, fontSize: "0.85rem" }}>Jaarlijks Gasverbruik (m3)</label>
            <input type="number" value={gasUsage} onChange={(e) => setGasUsage(Number(e.target.value))} />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, fontSize: "0.85rem" }}>Gasprijs (€/m3)</label>
            <input type="number" step="0.01" value={gasPrice} onChange={(e) => setGasPrice(Number(e.target.value))} />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, fontSize: "0.85rem" }}>Investering (€)</label>
            <input type="number" value={investment} onChange={(e) => setInvestment(Number(e.target.value))} />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, fontSize: "0.85rem" }}>Subsidie (ISDE) (€)</label>
            <input type="number" value={subsidy} onChange={(e) => setSubsidy(Number(e.target.value))} />
          </div>
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, fontSize: "0.85rem" }}>Stroomprijs (€/kWh)</label>
          <input type="number" step="0.01" value={electricityPrice} onChange={(e) => setElectricityPrice(Number(e.target.value))} />
        </div>
      </div>

      <div style={{ 
        marginTop: "2rem", 
        padding: "1.5rem", 
        background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)", 
        borderRadius: "12px", 
        color: "white"
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", textAlign: "center" }}>
          <div>
            <p style={{ fontSize: "0.75rem", opacity: 0.9, marginBottom: "0.2rem" }}>Besparing / jaar</p>
            <div style={{ fontSize: "1.4rem", fontWeight: 800 }}>{formatCurrency(annualSavings)}</div>
          </div>
          <div style={{ borderLeft: "1px solid rgba(255,255,255,0.2)" }}>
            <p style={{ fontSize: "0.75rem", opacity: 0.9, marginBottom: "0.2rem" }}>Terugverdientijd</p>
            <div style={{ fontSize: "1.4rem", fontWeight: 800 }}>{paybackPeriod.toFixed(1)} jaar</div>
          </div>
        </div>
      </div>
    </div>
  );
}
