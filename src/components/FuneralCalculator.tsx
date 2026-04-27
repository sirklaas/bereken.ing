"use client";

import { useState, useEffect } from "react";

const COST_ITEMS = [
  { name: "Basispakket uitvaartverzorger", burial: 2500, cremation: 2500 },
  { name: "Grafrechten / Crematiekosten", burial: 3500, cremation: 1500 },
  { name: "Kist (standaard)", burial: 1000, cremation: 1000 },
  { name: "Catering & Afscheid", burial: 1500, cremation: 1500 },
  { name: "Rouwkaarten & Bloemen", burial: 500, cremation: 500 },
];

export default function FuneralCalculator({ type }: { type: "burial" | "cremation" }) {
  const [attendees, setAttendees] = useState<number>(50);
  const [totalCost, setTotalCost] = useState<number>(0);

  useEffect(() => {
    let sum = 0;
    COST_ITEMS.forEach(item => {
      sum += type === "burial" ? item.burial : item.cremation;
    });
    
    // Dynamic catering based on attendees (approx €25 per person)
    sum += (attendees * 25);
    
    setTotalCost(sum);
  }, [type, attendees]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(value);
  };

  return (
    <div className="card animate-in stagger-2">
      <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
        {type === "burial" ? "Begrafenis" : "Crematie"} Kosten
      </h2>
      <p style={{ fontSize: "0.9rem", marginBottom: "2rem" }}>Bereken de geschatte kosten voor een waardig afscheid.</p>

      <div style={{ display: "grid", gap: "1.5rem" }}>
        <div>
          <label>Aantal verwachte gasten</label>
          <input type="number" value={attendees} onChange={(e) => setAttendees(Number(e.target.value))} />
          <div style={{ fontSize: "0.8rem", color: "var(--secondary)", marginTop: "0.5rem" }}>
            Catering wordt geschat op €25,- per persoon.
          </div>
        </div>

        <div style={{ display: "grid", gap: "0.8rem" }}>
          {COST_ITEMS.map(item => (
            <div key={item.name} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", borderBottom: "1px solid var(--border)", paddingBottom: "0.5rem" }}>
              <span style={{ color: "var(--secondary)" }}>{item.name}</span>
              <span style={{ fontWeight: 600 }}>{formatCurrency(type === "burial" ? item.burial : item.cremation)}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ 
        marginTop: "2rem", 
        padding: "1.5rem", 
        background: "var(--primary-accent)", 
        borderRadius: "16px", 
        color: "white",
        textAlign: "center"
      }}>
        <p style={{ fontSize: "0.8rem", opacity: 0.9, marginBottom: "0.5rem" }}>TOTAAL GESCHATTE KOSTEN</p>
        <div style={{ fontSize: "2.2rem", fontWeight: 800 }}>{formatCurrency(totalCost)}</div>
      </div>
    </div>
  );
}
