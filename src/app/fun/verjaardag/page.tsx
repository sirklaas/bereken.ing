"use client";

import { useState, useEffect } from "react";
import ToolLayout from "@/components/ToolLayout";
import AdSenseSlot from "@/components/AdSenseSlot";
import AffiliateCTA from "@/components/AffiliateCTA";
import EventCountdown from "@/components/EventCountdown";

export default function BirthdayPage() {
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [targetDate, setTargetDate] = useState<Date | null>(null);

  useEffect(() => {
    const today = new Date();
    let bday = new Date(today.getFullYear(), month - 1, day);
    if (bday < today) {
      bday.setFullYear(today.getFullYear() + 1);
    }
    setTargetDate(bday);
  }, [day, month]);

  return (
    <ToolLayout 
      intro="Aftellen & Fun"
      title="Dagen tot Verjaardag"
      subtitle="Tel af naar je eigen feestje of die van een vriend. Maak van elke verjaardag een hoogtepunt."
    >
      <AdSenseSlot id="top-ad" format="rectangle" style={{ marginBottom: "2rem" }} />
      
      <div className="card" style={{ marginBottom: "2rem" }}>
        <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>Wanneer ben je jarig?</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <input type="number" min="1" max="31" value={day} onChange={(e) => setDay(Number(e.target.value))} />
          <select value={month} onChange={(e) => setMonth(Number(e.target.value))}>
            <option value="1">Januari</option>
            <option value="2">Februari</option>
            <option value="3">Maart</option>
            <option value="4">April</option>
            <option value="5">Mei</option>
            <option value="6">Juni</option>
            <option value="7">Juli</option>
            <option value="8">Augustus</option>
            <option value="9">September</option>
            <option value="10">Oktober</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>

      {targetDate && <EventCountdown targetDate={targetDate} title="Jouw verjaardag countdown" />}

      <AffiliateCTA 
        title="Tijd voor een feestje?"
        description="Van versiering tot originele cadeaus: bekijk alles voor de perfecte verjaardag."
        buttonText="Feest Artikelen Bekijken"
        href="https://www.partywinkel.nl"
        badge="Party Tip"
      />

      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
