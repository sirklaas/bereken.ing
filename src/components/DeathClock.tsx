"use client";

import { useState, useEffect } from "react";

export default function DeathClock() {
  const [birthYear, setBirthYear] = useState<number>(1990);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [smoking, setSmoking] = useState(false);
  const [exercise, setExercise] = useState(true);

  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    // Average life expectancy in NL: Male ~80, Female ~83
    let expectancy = gender === "male" ? 80 : 83;
    
    if (smoking) expectancy -= 10;
    if (exercise) expectancy += 5;
    
    const deathDate = new Date(birthYear + expectancy, 0, 1);
    const today = new Date();
    const diffTime = deathDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    setDaysLeft(diffDays > 0 ? diffDays : 0);
  }, [birthYear, gender, smoking, exercise]);

  return (
    <div className="card animate-in stagger-2" style={{ textAlign: "center" }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Dagentot (Death Clock)</h2>
      <p style={{ fontSize: "0.9rem", marginBottom: "2rem" }}>Hoeveel dagen heb je nog om het meeste uit het leven te halen?</p>

      <div style={{ display: "grid", gap: "1rem", marginBottom: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label>Geboortejaar</label>
            <input type="number" value={birthYear} onChange={(e) => setBirthYear(Number(e.target.value))} />
          </div>
          <div>
            <label>Geslacht</label>
            <select value={gender} onChange={(e) => setGender(e.target.value as any)}>
              <option value="male">Man</option>
              <option value="female">Vrouw</option>
            </select>
          </div>
        </div>
        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", fontSize: "0.9rem" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <input type="checkbox" checked={smoking} onChange={(e) => setSmoking(e.target.checked)} style={{ width: "auto" }} /> Roker
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <input type="checkbox" checked={exercise} onChange={(e) => setExercise(e.target.checked)} style={{ width: "auto" }} /> Sport regelmatig
          </label>
        </div>
      </div>

      <div style={{ 
        padding: "2rem", 
        background: "#0f172a", 
        borderRadius: "16px", 
        color: "white",
        boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
      }}>
        <p style={{ fontSize: "0.8rem", opacity: 0.7, marginBottom: "0.5rem" }}>GESCHATTE DAGEN RESTEREND</p>
        <div style={{ fontSize: "3rem", fontWeight: 800, letterSpacing: "0.1em" }}>
          {daysLeft?.toLocaleString() || "..."}
        </div>
        <p style={{ fontSize: "0.75rem", marginTop: "1rem", fontStyle: "italic", opacity: 0.6 }}>
          "Memento Mori" — Onthoud dat je sterfelijk bent. Gebruik je tijd goed.
        </p>
      </div>
    </div>
  );
}
