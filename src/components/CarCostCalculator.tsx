"use client";

import { useState, useEffect } from "react";

export default function CarCostCalculator() {
  const [purchasePrice, setPurchasePrice] = useState<number>(25000);
  const [kmPerYear, setKmPerYear] = useState<number>(15000);
  const [fuelType, setFuelType] = useState<"petrol" | "diesel" | "electric">("petrol");
  const [consumption, setConsumption] = useState<number>(6.5); // L/100km or Wh/km
  const [fuelPrice, setFuelPrice] = useState<number>(1.95);
  const [insuranceMonthly, setInsuranceMonthly] = useState<number>(60);
  const [taxMonthly, setTaxMonthly] = useState<number>(55);
  const [maintenanceYearly, setMaintenanceYearly] = useState<number>(800);

  const [totalMonthly, setTotalMonthly] = useState<number>(0);
  const [costPerKm, setCostPerKm] = useState<number>(0);

  useEffect(() => {
    // 1. Fuel costs
    const monthlyKm = kmPerYear / 12;
    const fuelCostMonthly = (monthlyKm / 100) * consumption * fuelPrice;

    // 2. Depreciation (assume 12% per year)
    const depreciationMonthly = (purchasePrice * 0.12) / 12;

    // 3. Maintenance monthly
    const maintenanceMonthly = maintenanceYearly / 12;

    const total = fuelCostMonthly + depreciationMonthly + maintenanceMonthly + insuranceMonthly + taxMonthly;
    setTotalMonthly(total);
    setCostPerKm(total / monthlyKm);
  }, [purchasePrice, kmPerYear, fuelType, consumption, fuelPrice, insuranceMonthly, taxMonthly, maintenanceYearly]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(value);
  };

  return (
    <div className="card animate-in stagger-2">

      <div style={{ display: "grid", gap: "1.2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label>Aanschafprijs (€)</label>
            <input type="number" value={purchasePrice} onChange={(e) => setPurchasePrice(Number(e.target.value))} />
          </div>
          <div>
            <label>KM per jaar</label>
            <input type="number" value={kmPerYear} onChange={(e) => setKmPerYear(Number(e.target.value))} />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label>Verbruik (L/100km)</label>
            <input type="number" step="0.1" value={consumption} onChange={(e) => setConsumption(Number(e.target.value))} />
          </div>
          <div>
            <label>Brandstofprijs (€/L)</label>
            <input type="number" step="0.01" value={fuelPrice} onChange={(e) => setFuelPrice(Number(e.target.value))} />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label>Verzekering / mnd</label>
            <input type="number" value={insuranceMonthly} onChange={(e) => setInsuranceMonthly(Number(e.target.value))} />
          </div>
          <div>
            <label>Wegenbelasting / mnd</label>
            <input type="number" value={taxMonthly} onChange={(e) => setTaxMonthly(Number(e.target.value))} />
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
        <div style={{ fontSize: "0.8rem", opacity: 0.8, marginBottom: "0.5rem" }}>TOTAAL PER MAAND</div>
        <div style={{ fontSize: "2.5rem", fontWeight: 800 }}>{formatCurrency(totalMonthly)}</div>
        <div style={{ fontSize: "1rem", marginTop: "0.5rem", opacity: 0.9 }}>
          Dat is <strong>{formatCurrency(costPerKm)}</strong> per kilometer
        </div>
      </div>
    </div>
  );
}
