"use client";

import { useState, useEffect } from "react";
import ToolLayout from "@/components/ToolLayout";
import AdSenseSlot from "@/components/AdSenseSlot";
import EventCountdown from "@/components/EventCountdown";

export default function WeddingPage() {
  const [day, setDay] = useState(new Date().getDate());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [targetDate, setTargetDate] = useState<Date | null>(null);

  useEffect(() => {
    const wedding = new Date(year, month - 1, day);
    setTargetDate(wedding);
  }, [day, month, year]);

  return (
    <ToolLayout 
      intro="Aftellen & Fun" topic="fun"
      title="Dagen tot Bruiloft"
      subtitle="Tel af naar de mooiste dag van je leven. Hoeveel nachtjes nog tot het ja-woord?"
    >
      
      <div className="card" style={{ marginBottom: "2rem" }}>
        <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>Wanneer is de grote dag?</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
          <input type="number" min="1" max="31" value={day} onChange={(e) => setDay(Number(e.target.value))} placeholder="Dag" />
          <input type="number" min="1" max="12" value={month} onChange={(e) => setMonth(Number(e.target.value))} placeholder="Maand" />
          <input type="number" min={new Date().getFullYear()} value={year} onChange={(e) => setYear(Number(e.target.value))} placeholder="Jaar" />
        </div>
      </div>

      {targetDate && <EventCountdown targetDate={targetDate} title="Wedding Countdown" />}

      
      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
