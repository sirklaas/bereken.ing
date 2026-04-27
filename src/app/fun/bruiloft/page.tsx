"use client";

import { useState, useEffect } from "react";
import ToolLayout from "@/components/ToolLayout";
import AdSenseSlot from "@/components/AdSenseSlot";
import AffiliateCTA from "@/components/AffiliateCTA";
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
      intro="Aftellen & Fun"
      title="Dagen tot Bruiloft"
      subtitle="Tel af naar de mooiste dag van je leven. Hoeveel nachtjes nog tot het ja-woord?"
    >
      <AdSenseSlot id="top-ad" format="rectangle" style={{ marginBottom: "2rem" }} />
      <h3>Liefde & Toekomst</h3>
      <h1>Dagen tot onze <span style={{ color: "var(--primary-accent)" }}>Bruiloft</span></h1>
      
      <div className="card" style={{ marginBottom: "2rem" }}>
        <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>Wanneer is de grote dag?</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
          <input type="number" min="1" max="31" value={day} onChange={(e) => setDay(Number(e.target.value))} placeholder="Dag" />
          <input type="number" min="1" max="12" value={month} onChange={(e) => setMonth(Number(e.target.value))} placeholder="Maand" />
          <input type="number" min={new Date().getFullYear()} value={year} onChange={(e) => setYear(Number(e.target.value))} placeholder="Jaar" />
        </div>
      </div>

      {targetDate && <EventCountdown targetDate={targetDate} title="Wedding Countdown" />}

      <AffiliateCTA 
        title="Alles voor je bruiloft"
        description="Van bedankjes tot decoratie en gastenboeken. Maak je bruiloft onvergetelijk met de mooiste extra's."
        buttonText="Bekijk Trouw Artikelen"
        href="https://www.weddingdeco.nl"
        badge="Inspiratie Tip"
      />

      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
