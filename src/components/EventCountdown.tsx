"use client";

import { useState, useEffect } from "react";

export default function EventCountdown({ targetDate, title }: { targetDate: Date, title: string }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const Unit = ({ value, label }: { value: number, label: string }) => (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--primary-accent)" }}>{value}</div>
      <div style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", opacity: 0.6 }}>{label}</div>
    </div>
  );

  return (
    <div className="card animate-in">
      <h2 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", textAlign: "center" }}>{title}</h2>
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(4, 1fr)", 
        gap: "1rem",
        background: "#f8fafc",
        padding: "2rem",
        borderRadius: "16px"
      }}>
        <Unit value={timeLeft.days} label="Dagen" />
        <Unit value={timeLeft.hours} label="Uur" />
        <Unit value={timeLeft.minutes} label="Min" />
        <Unit value={timeLeft.seconds} label="Sec" />
      </div>
    </div>
  );
}
