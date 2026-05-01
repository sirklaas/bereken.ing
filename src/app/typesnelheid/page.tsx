"use client";

import ToolLayout from "@/components/ToolLayout";
import { useState, useEffect, useRef } from "react";

const SAMPLE_TEXT = "De toekomst van berekenen begint hier. Met behulp van kunstmatige intelligentie en vlijmscherpe algoritmes maken we complexe data begrijpelijk voor iedereen. Jouw snelheid en precisie bepalen het succes van de digitale transformatie.";

export default function TypeSpeedPage() {
  const [text, setText] = useState(SAMPLE_TEXT);
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [isFinished, setIsFinished] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (userInput.length === 1 && !startTime) {
      setStartTime(Date.now());
    }

    if (userInput.length > 0) {
      // Calculate WPM
      const timeElapsed = (Date.now() - (startTime || Date.now())) / 60000; // in minutes
      const wordsTyped = userInput.trim().split(/\s+/).length;
      setWpm(Math.round(wordsTyped / (timeElapsed || 1)) || 0);

      // Calculate Accuracy
      let correctChars = 0;
      for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] === text[i]) correctChars++;
      }
      setAccuracy(Math.round((correctChars / userInput.length) * 100));

      if (userInput === text) {
        setIsFinished(true);
      }
    }
  }, [userInput, text, startTime]);

  const resetGame = () => {
    setUserInput("");
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    setIsFinished(false);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  return (
    <ToolLayout
      title="Typemeter: Test je Typesnelheid"
      subtitle="Hoe snel typ jij werkelijk? Start met typen en zie real-time je WPM (woorden per minuut) en nauwkeurigheid."
      topic="fun"
    >
      <div className="card">
        <div className="stats-row">
          <div className="stat-item">
            <span className="stat-label">Snelheid</span>
            <span className="stat-value">{wpm} <small>WPM</small></span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Nauwkeurigheid</span>
            <span className="stat-value">{accuracy}%</span>
          </div>
        </div>

        <div className="text-display">
          {text.split("").map((char, index) => {
            let color = "rgba(255,255,255,0.4)";
            if (index < userInput.length) {
              color = userInput[index] === char ? "#4ade80" : "#ef4444";
            }
            return <span key={index} style={{ color, transition: "color 0.1s" }}>{char}</span>;
          })}
        </div>

        <textarea
          ref={inputRef}
          value={userInput}
          onChange={(e) => !isFinished && setUserInput(e.target.value)}
          placeholder="Begin hier met typen om de test te starten..."
          className="type-input"
          disabled={isFinished}
        ></textarea>

        {isFinished && (
          <div className="finish-overlay">
            <h3>Geweldig gedaan! 🚀</h3>
            <p>Je hebt een snelheid van <strong>{wpm} WPM</strong> behaald met <strong>{accuracy}%</strong> precisie.</p>
            <button className="button-primary" onClick={resetGame}>Probeer Opnieuw</button>
          </div>
        )}
      </div>

      <style jsx>{`
        .stats-row {
          display: flex;
          gap: 2rem;
          margin-bottom: 2rem;
          justify-content: center;
        }
        .stat-item {
          text-align: center;
        }
        .stat-label {
          display: block;
          font-size: 0.8rem;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          font-weight: 800;
          margin-bottom: 0.2rem;
        }
        .stat-value {
          font-size: 2.5rem;
          font-family: var(--font-fugaz);
          color: var(--primary-accent);
        }
        .text-display {
          background: rgba(0,0,0,0.2);
          padding: 2rem;
          border-radius: 16px;
          font-size: 1.4rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          font-family: 'Courier New', Courier, monospace;
        }
        .type-input {
          width: 100%;
          min-height: 100px;
          background: rgba(255,255,255,0.05);
          border: 2px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          color: white;
          padding: 1.5rem;
          font-size: 1.1rem;
          font-family: var(--font-jakarta);
          outline: none;
        }
        .type-input:focus {
          border-color: var(--primary-accent);
        }
        .finish-overlay {
          margin-top: 2rem;
          background: var(--primary-accent);
          padding: 2rem;
          border-radius: 20px;
          text-align: center;
          color: white;
        }
      `}</style>
    </ToolLayout>
  );
}
