"use client";

import { useState } from "react";

const HEXAGRAMS: Record<string, { name: string, meaning: string }> = {
  "111111": { name: "Ch'ien", meaning: "De Scheppende Kracht. Succes door volharding." },
  "000000": { name: "K'un", meaning: "De Ontvankelijkheid. Kracht door zachtheid." },
  "010001": { name: "Chun", meaning: "Beginmoeilijkheden. Groei is nabij." },
  "100010": { name: "Meng", meaning: "De Jeugdige Onwetendheid. Leer van ervaring." },
  // ... adding more or a fallback for demo
};

export default function IChing() {
  const [lines, setLines] = useState<number[]>([]);
  const [isCasting, setIsCasting] = useState(false);

  const castLine = () => {
    if (lines.length >= 6) return;
    setIsCasting(true);
    
    setTimeout(() => {
      // 3 coins: head=3, tail=2. Total 6,7,8,9
      // 7 or 9 = Yang (Solid line)
      // 6 or 8 = Yin (Broken line)
      const roll = Math.floor(Math.random() * 4) + 6;
      const type = roll % 2 === 0 ? 0 : 1; // 0=Yin, 1=Yang
      setLines([type, ...lines]);
      setIsCasting(false);
    }, 400);
  };

  const reset = () => setLines([]);

  const getResult = () => {
    const key = lines.join("");
    return HEXAGRAMS[key] || { name: "Hexagram " + key, meaning: "Een tijd van verandering en reflectie." };
  };

  return (
    <div className="card animate-in stagger-2" style={{ textAlign: "center" }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>I Ching (Itjing)</h2>
      <p style={{ fontSize: "0.9rem", marginBottom: "2rem" }}>Werp de munten 6 keer om je hexagram te bouwen.</p>

      <div style={{ display: "flex", flexDirection: "column-reverse", gap: "10px", minHeight: "120px", marginBottom: "2rem", alignItems: "center" }}>
        {lines.map((line, i) => (
          <div key={i} style={{ width: "120px", height: "12px", background: "var(--primary-accent)", position: "relative" }}>
            {line === 0 && <div style={{ position: "absolute", top: 0, left: "45%", width: "10%", height: "100%", background: "white" }} />}
          </div>
        ))}
      </div>

      {lines.length < 6 ? (
        <button className="button" onClick={castLine} disabled={isCasting}>
          {isCasting ? "Muntwerpen..." : `Werp Munten (${lines.length}/6)`}
        </button>
      ) : (
        <div className="animate-in" style={{ padding: "1.5rem", background: "#f8fafc", borderRadius: "12px" }}>
          <h3 style={{ margin: 0 }}>{getResult().name}</h3>
          <p style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>{getResult().meaning}</p>
          <button className="btn" onClick={reset} style={{ marginTop: "1rem", fontSize: "0.8rem", padding: "0.5rem 1rem" }}>Opnieuw</button>
        </div>
      )}
    </div>
  );
}
