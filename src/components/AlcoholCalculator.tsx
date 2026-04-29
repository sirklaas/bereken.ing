"use client";

import { useState, useEffect } from "react";

export default function AlcoholCalculator() {
  const [weight, setWeight] = useState<number>(80);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [standardDrinks, setStandardDrinks] = useState<number>(3);
  const [hoursPassed, setHoursPassed] = useState<number>(1);

  const [bac, setBac] = useState<number>(0);
  const [soberTime, setSoberTime] = useState<number>(0);

  useEffect(() => {
    // Widmark Formula
    // BAC = [ (Alcohol in grams) / (Body weight in grams * r) ] * 1000
    // r: 0.68 for men, 0.55 for women
    // Standard drink in NL = approx 10 grams of alcohol
    
    const r = gender === "male" ? 0.68 : 0.55;
    const alcoholGrams = standardDrinks * 10;
    const bodyWeightGrams = weight * 1000;
    
    let result = (alcoholGrams / (bodyWeightGrams * r)) * 1000;
    
    // Alcohol breakdown rate: approx 0.15 promille per hour
    result = Math.max(0, result - (hoursPassed * 0.15));
    
    setBac(result);
    setSoberTime(result / 0.15);
  }, [weight, gender, standardDrinks, hoursPassed]);

  return (
    <div className="card animate-in stagger-2">

      <div style={{ display: "grid", gap: "1.2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, fontSize: "0.85rem" }}>Gewicht (kg)</label>
            <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, fontSize: "0.85rem" }}>Geslacht</label>
            <select 
              value={gender} 
              onChange={(e) => setGender(e.target.value as "male" | "female")}
              style={{ width: "100%", padding: "0.8rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}
            >
              <option value="male">Man</option>
              <option value="female">Vrouw</option>
            </select>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, fontSize: "0.85rem" }}>Aantal Glazen</label>
            <input type="number" value={standardDrinks} onChange={(e) => setStandardDrinks(Number(e.target.value))} />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, fontSize: "0.85rem" }}>Uur sinds start</label>
            <input type="number" value={hoursPassed} onChange={(e) => setHoursPassed(Number(e.target.value))} />
          </div>
        </div>
      </div>

      <div style={{ 
        marginTop: "2rem", 
        padding: "1.5rem", 
        background: bac > 0.5 ? "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)" : "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)", 
        borderRadius: "12px", 
        color: "white",
        transition: "background 0.3s ease"
      }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "0.75rem", opacity: 0.9, marginBottom: "0.2rem" }}>Geschat Promillage</p>
          <div style={{ fontSize: "2.4rem", fontWeight: 800 }}>{bac.toFixed(2)} ‰</div>
          {bac > 0.5 && <p style={{ fontSize: "0.8rem", fontWeight: 700, marginTop: "0.5rem" }}>⚠️ Boven de limiet voor autorijden!</p>}
        </div>
      </div>

      <div style={{ marginTop: "1rem", textAlign: "center", color: "var(--secondary)", fontSize: "0.85rem" }}>
        Het duurt nog ongeveer <strong>{soberTime.toFixed(1)} uur</strong> voordat je weer volledig nuchter bent.
      </div>
    </div>
  );
}
