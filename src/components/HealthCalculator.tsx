"use client";

import { useState, useEffect } from "react";

export default function HealthCalculator() {
  const [weight, setWeight] = useState<number>(75);
  const [height, setHeight] = useState<number>(180);
  const [age, setAge] = useState<number>(30);
  const [gender, setGender] = useState<string>("male");
  const [activity, setActivity] = useState<number>(1.2);
  
  const [bmi, setBmi] = useState<number>(0);
  const [tdee, setTdee] = useState<number>(0);

  useEffect(() => {
    // BMI Calculation
    const heightInMeters = height / 100;
    const bmiVal = weight / (heightInMeters * heightInMeters);
    setBmi(bmiVal);

    // TDEE Calculation (Mifflin-St Jeor Equation)
    let bmr = 10 * weight + 6.25 * height - 5 * age;
    if (gender === "male") {
      bmr += 5;
    } else {
      bmr -= 161;
    }
    setTdee(bmr * activity);
  }, [weight, height, age, gender, activity]);

  const getBmiCategory = (val: number) => {
    if (val < 18.5) return { label: "Ondergewicht", color: "#3b82f6" };
    if (val < 25) return { label: "Gezond gewicht", color: "#10b981" };
    if (val < 30) return { label: "Overgewicht", color: "#f59e0b" };
    return { label: "Obesitas", color: "#ef4444" };
  };

  const category = getBmiCategory(bmi);

  return (
    <div className="card animate-in stagger-2">

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Gewicht (kg)</label>
          <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Lengte (cm)</label>
          <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Leeftijd</label>
          <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Geslacht</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Man</option>
            <option value="female">Vrouw</option>
          </select>
        </div>
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Activiteitsniveau</label>
        <select value={activity} onChange={(e) => setActivity(Number(e.target.value))}>
          <option value={1.2}>Zittend (weinig beweging)</option>
          <option value={1.375}>Licht actief (1-3 dagen sport)</option>
          <option value={1.55}>Gemiddeld actief (3-5 dagen sport)</option>
          <option value={1.725}>Zeer actief (6-7 dagen sport)</option>
        </select>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "2rem" }}>
        <div style={{ padding: "1.5rem", background: "#f8fafc", borderRadius: "12px", border: "1px solid #e2e8f0", textAlign: "center" }}>
          <p style={{ fontSize: "0.8rem", opacity: 0.6, marginBottom: "0.2rem" }}>Jouw BMI</p>
          <div style={{ fontSize: "2rem", fontWeight: 800 }}>{bmi.toFixed(1)}</div>
          <div style={{ fontSize: "0.85rem", fontWeight: 700, color: category.color }}>{category.label}</div>
        </div>
        <div style={{ padding: "1.5rem", background: "var(--primary-accent)", borderRadius: "12px", color: "white", textAlign: "center" }}>
          <p style={{ fontSize: "0.8rem", opacity: 0.8, marginBottom: "0.2rem" }}>Caloriebehoefte</p>
          <div style={{ fontSize: "2rem", fontWeight: 800 }}>{Math.round(tdee)}</div>
          <div style={{ fontSize: "0.85rem", opacity: 0.8 }}>kcal per dag</div>
        </div>
      </div>
    </div>
  );
}
