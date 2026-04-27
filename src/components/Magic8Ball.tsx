"use client";

import { useState } from "react";

const ANSWERS = [
  "Het is zeker", "Zonder twijfel", "Ja, absoluut", "Je kunt erop rekenen", "Zover ik zie, ja",
  "Waarschijnlijk", "Ziet er goed uit", "Ja", "Tekenen wijzen op ja", "Vraag later opnieuw",
  "Beter nu niet vertellen", "Kan ik nu niet voorspellen", "Concentreer je en vraag opnieuw",
  "Reken er niet op", "Mijn antwoord is nee", "Mijn bronnen zeggen nee", "Ziet er niet goed uit", "Zeer twijfelachtig"
];

export default function Magic8Ball() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isShaking, setIsShaking] = useState(false);

  const ask = () => {
    if (!question) return;
    setIsShaking(true);
    setAnswer("");
    
    setTimeout(() => {
      const randomAnswer = ANSWERS[Math.floor(Math.random() * ANSWERS.length)];
      setAnswer(randomAnswer);
      setIsShaking(false);
    }, 800);
  };

  return (
    <div className="card animate-in stagger-2" style={{ textAlign: "center" }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Magische 8-Ball</h2>
      <p style={{ fontSize: "0.9rem", marginBottom: "2rem" }}>Stel een ja/nee vraag en schud de bal voor een antwoord.</p>

      <input 
        type="text" 
        placeholder="Stel je vraag hier..." 
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{ marginBottom: "2rem", textAlign: "center" }}
      />

      <div 
        className={isShaking ? "shake-animation" : ""}
        style={{
          width: "200px",
          height: "200px",
          background: "#0f172a",
          borderRadius: "50%",
          margin: "0 auto 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          boxShadow: "inset -10px -10px 30px rgba(0,0,0,0.5), 10px 10px 40px rgba(0,0,0,0.2)",
          cursor: "pointer"
        }}
        onClick={ask}
      >
        <div style={{
          width: "100px",
          height: "100px",
          background: "#1e293b",
          borderRadius: "50%",
          border: "4px solid #334155",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem"
        }}>
          {answer ? (
            <p style={{ color: "#60a5fa", fontSize: "0.75rem", fontWeight: 800, margin: 0, lineHeight: 1.2 }}>
              {answer.toUpperCase()}
            </p>
          ) : (
            <span style={{ color: "#94a3b8", fontSize: "2rem", fontWeight: 800 }}>8</span>
          )}
        </div>
      </div>

      <button 
        className="button" 
        onClick={ask}
        disabled={!question || isShaking}
        style={{ width: "100%" }}
      >
        {isShaking ? "Aan het schudden..." : "Schud de bal"}
      </button>

      <style jsx>{`
        .shake-animation {
          animation: shake 0.5s ease-in-out infinite;
        }
        @keyframes shake {
          0% { transform: translate(1px, 1px) rotate(0deg); }
          10% { transform: translate(-1px, -2px) rotate(-1deg); }
          20% { transform: translate(-3px, 0px) rotate(1deg); }
          30% { transform: translate(3px, 2px) rotate(0deg); }
          40% { transform: translate(1px, -1px) rotate(1deg); }
          50% { transform: translate(-1px, 2px) rotate(-1deg); }
          60% { transform: translate(-3px, 1px) rotate(0deg); }
          70% { transform: translate(3px, 1px) rotate(-1deg); }
          80% { transform: translate(-1px, -1px) rotate(1deg); }
          90% { transform: translate(1px, 2px) rotate(0deg); }
          100% { transform: translate(1px, -2px) rotate(-1deg); }
        }
      `}</style>
    </div>
  );
}
