"use client";

import { useState, useEffect } from "react";
import ToolLayout from "@/components/ToolLayout";
import AdSenseSlot from "@/components/AdSenseSlot";
import AffiliateCTA from "@/components/AffiliateCTA";
import EventCountdown from "@/components/EventCountdown";

export default function AnniversaryPage() {
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [targetYear, setTargetYear] = useState(new Date().getFullYear() + 1);
  const [targetDate, setTargetDate] = useState<Date | null>(null);

  useEffect(() => {
    const anniversary = new Date(targetYear, month - 1, day);
    setTargetDate(anniversary);
  }, [day, month, targetYear]);

  return (
    <ToolLayout>
      <AdSenseSlot id="top-ad" format="rectangle" style={{ marginBottom: "2rem" }} />
      <h3>Mijlpalen & Vieringen</h3>
      <h1>Dagen tot ons <span style={{ color: "var(--primary-accent)" }}>Jubileum</span></h1>
      
      <div className="card" style={{ marginBottom: "2rem" }}>
        <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>Wanneer is jullie jubileum (bv. 50 jaar / Gouden Bruiloft)?</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
          <input type="number" min="1" max="31" value={day} onChange={(e) => setDay(Number(e.target.value))} placeholder="Dag" />
          <input type="number" min="1" max="12" value={month} onChange={(e) => setMonth(Number(e.target.value))} placeholder="Maand" />
          <input type="number" value={targetYear} onChange={(e) => setTargetYear(Number(e.target.value))} placeholder="Jaar" />
        </div>
      </div>

      {targetDate && <EventCountdown targetDate={targetDate} title="Jubileum Countdown" />}

      <AffiliateCTA 
        title="Een bijzonder cadeau?"
        description="Vier je Gouden Bruiloft of eerste jaar samen met een uniek en persoonlijk cadeau."
        buttonText="Bekijk Cadeaus"
        href="https://www.yoursurprise.nl/jubileum"
        badge="Cadeau Tip"
      />

      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
