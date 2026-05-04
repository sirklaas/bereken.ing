"use client";

import { useState, useCallback, useRef, useEffect } from "react";

interface Layer {
  id: string;
  label: string;
  color: string;
  delay: number;
  duration: number;
  description: string;
}

const TOTAL_TIME = 6; // seconds

const defaultLayers: Layer[] = [
  { id: "chars", label: "Letters bereken", color: "#0B1D3A", delay: 0, duration: 0.6, description: "Left-to-right character reveal" },
  { id: "diamond", label: "Diamond Dot", color: "#1d4ed8", delay: 0.42, duration: 0.6, description: "Spin-in diamond punctuation" },
  { id: "chars2", label: "Letters ing", color: "#0B1D3A", delay: 0.42, duration: 0.3, description: "Right side of wordmark" },
  { id: "eyeEnter", label: "Eye Entrance", color: "#0B1D3A", delay: 0.72, duration: 0.8, description: "Eye slides and rotates in" },
  { id: "eyeLook", label: "Eye Look", color: "#1d4ed8", delay: 1.4, duration: 2.0, description: "Iris glances left then right" },
  { id: "eyeBlink", label: "Eye Blink", color: "#334155", delay: 2.2, duration: 3.5, description: "Quick eyelid blink" },
  { id: "tagline", label: "Tagline", color: "#64748b", delay: 3.2, duration: 0.8, description: "'De slimste rekentools' reveal" },
  { id: "settle", label: "Settle Float", color: "#94a3b8", delay: 3.5, duration: 4.0, description: "Infinite gentle float loop" },
];

export default function TimelineEditor() {
  const [layers, setLayers] = useState<Layer[]>(defaultLayers);
  const [playKey, setPlayKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const rafRef = useRef<number | null>(null);

  const startTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setIsPlaying(true);
    const start = performance.now();
    const tick = () => {
      const elapsed = (performance.now() - start) / 1000;
      setCurrentTime(Math.min(elapsed, TOTAL_TIME));
      if (elapsed < TOTAL_TIME) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setIsPlaying(false);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const stopTimer = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setIsPlaying(false);
  }, []);

  const replay = useCallback(() => {
    setPlayKey((k) => k + 1);
    setCurrentTime(0);
    startTimer();
  }, [startTimer]);

  const updateLayer = useCallback((id: string, field: keyof Layer, value: number) => {
    setLayers((prev) => prev.map((l) => (l.id === id ? { ...l, [field]: Math.round(value * 100) / 100 } : l)));
  }, []);

  const getLayer = useCallback(
    (id: string) => layers.find((l) => l.id === id)!,
    [layers]
  );

  // Cleanup
  useEffect(() => () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); }, []);

  const formatTime = (t: number) => t.toFixed(2) + "s";

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", background: "#0a0a0f", color: "#e2e8f0", fontFamily: "'Plus Jakarta Sans', sans-serif", overflow: "hidden" }}>
      {/* Top bar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.75rem 1.5rem", borderBottom: "1px solid #1e293b", background: "#0f172a" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button
            onClick={replay}
            style={{
              background: "#1d4ed8",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "0.5rem 1.25rem",
              fontWeight: 700,
              fontSize: "0.9rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span style={{ fontSize: "1rem" }}>▶</span> Play
          </button>
          <button
            onClick={stopTimer}
            style={{
              background: "#334155",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "0.5rem 1.25rem",
              fontWeight: 600,
              fontSize: "0.9rem",
              cursor: "pointer",
            }}
          >
            ⏹ Stop
          </button>
        </div>
        <div style={{ fontVariantNumeric: "tabular-nums", fontSize: "1.1rem", fontWeight: 700, color: "#94a3b8" }}>
          {formatTime(currentTime)} / {TOTAL_TIME.toFixed(1)}s
        </div>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <ResetButton onClick={() => { setLayers(defaultLayers); replay(); }} />
          <a href="/endshot" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.85rem", border: "1px solid #334155", borderRadius: "6px", padding: "0.4rem 0.8rem" }}>
            View Endshot →
          </a>
        </div>
      </div>

      {/* Main area */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* Preview */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", borderRight: "1px solid #1e293b", position: "relative" }}>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "radial-gradient(circle at center, #0f172a 0%, #0a0a0f 100%)",
              position: "relative",
            }}
          >
            <EndshotPreview key={playKey} layers={layers} />
            {/* Time indicator overlay */}
            <div style={{ position: "absolute", top: "1rem", left: "1rem", fontSize: "0.75rem", color: "#475569", fontVariantNumeric: "tabular-nums" }}>
              Preview
            </div>
          </div>

          {/* Mini timeline scrubber */}
          <div style={{ padding: "0.75rem 1.5rem", borderTop: "1px solid #1e293b", background: "#0f172a" }}>
            <TimelineScrubber currentTime={currentTime} totalTime={TOTAL_TIME} layers={layers} onScrub={(t) => setCurrentTime(t)} />
          </div>
        </div>

        {/* Layer controls */}
        <div style={{ width: "420px", display: "flex", flexDirection: "column", background: "#0f172a", overflow: "auto" }}>
          <LayerPanel layers={layers} onUpdate={updateLayer} onReplay={replay} />
        </div>
      </div>
    </div>
  );
}

/* ─── Sub-components ─── */

function EndshotPreview({ layers }: { layers: Layer[] }) {
  const get = (id: string) => layers.find((l) => l.id === id)!;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
      <style>{`
        @keyframes charRevealT {
          from { opacity: 0; transform: translateX(-12px) scale(0.95); filter: blur(4px); }
          to { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); }
        }
        @keyframes diamondRevealT {
          from { opacity: 0; transform: rotate(-180deg) scale(0.2); }
          to { opacity: 1; transform: rotate(0deg) scale(1); }
        }
        @keyframes eyeEnterT {
          from { opacity: 0; transform: translateX(30px) scale(0.85) rotate(-5deg); }
          to { opacity: 1; transform: translateX(0) scale(1) rotate(0deg); }
        }
        @keyframes eyeLookT {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-6px); }
          50% { transform: translateX(6px); }
          75% { transform: translateX(0); }
        }
        @keyframes eyeBlinkT {
          0%, 90%, 100% { transform: scaleY(1); }
          93% { transform: scaleY(0.08); }
          96% { transform: scaleY(1); }
        }
        @keyframes settleFloatT {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes taglineRevealT {
          from { opacity: 0; transform: translateY(12px); filter: blur(3px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
      `}</style>

      <div style={{ display: "flex", alignItems: "center", fontFamily: "'Fugaz One', sans-serif", fontWeight: 400 }}>
        <div style={{ display: "inline-flex", alignItems: "baseline" }}>
          {"bereken".split("").map((c, i) => (
            <span key={i} style={{
              display: "inline-block",
              fontSize: "clamp(3rem, 10vw, 7rem)",
              lineHeight: 1,
              color: "#0B1D3A",
              opacity: 0,
              animation: `charRevealT ${get("chars").duration}s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
              animationDelay: `${get("chars").delay + i * 0.06}s`,
            }}>
              {c}
            </span>
          ))}
          <svg viewBox="0 0 20 20" style={{
            width: "clamp(0.6rem, 2vw, 1.1rem)",
            height: "clamp(0.6rem, 2vw, 1.1rem)",
            margin: "0 clamp(0.15rem, 0.5vw, 0.3rem)",
            verticalAlign: "middle",
            overflow: "visible",
            opacity: 0,
            animation: `diamondRevealT ${get("diamond").duration}s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
            animationDelay: `${get("diamond").delay}s`,
          }}>
            <rect x="3" y="3" width="14" height="14" rx="1" fill="#1d4ed8" transform="rotate(45 10 10)" />
          </svg>
          {"ing".split("").map((c, i) => (
            <span key={`ing-${i}`} style={{
              display: "inline-block",
              fontSize: "clamp(3rem, 10vw, 7rem)",
              lineHeight: 1,
              color: "#0B1D3A",
              opacity: 0,
              animation: `charRevealT ${get("chars2").duration}s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
              animationDelay: `${get("chars2").delay + i * 0.06}s`,
            }}>
              {c}
            </span>
          ))}
        </div>

        <div style={{
          display: "inline-flex", alignItems: "center",
          opacity: 0,
          marginLeft: "clamp(1rem, 3vw, 2rem)",
          animation: `eyeEnterT ${get("eyeEnter").duration}s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
          animationDelay: `${get("eyeEnter").delay}s`,
        }}>
          <svg
            viewBox="0 0 220 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: "clamp(90px, 15vw, 180px)",
              height: "auto",
              transformOrigin: "center center",
              animation:
                `eyeBlinkT ${get("eyeBlink").duration}s ease-in-out ${get("eyeBlink").delay}s forwards, ` +
                `settleFloatT ${get("settle").duration}s ease-in-out ${get("settle").delay}s infinite`,
            }}
          >
            <path d="M20 70 C20 70 55 10 110 10 C165 10 200 70 200 70 C200 70 165 130 110 130 C55 130 20 70 20 70 Z" stroke="#0B1D3A" strokeWidth="10" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M160 32 L188 8 L178 42 Z" fill="#0B1D3A" />
            <path d="M60 108 L32 132 L42 98 Z" fill="#0B1D3A" />
            <g style={{
              transformOrigin: "center center",
              animation: `eyeLookT ${get("eyeLook").duration}s ease-in-out ${get("eyeLook").delay}s forwards`,
            }}>
              <circle cx="110" cy="70" r="30" fill="#1d4ed8" />
              <path d="M95 52 A 22 22 0 0 1 128 58 A 18 18 0 0 0 98 48 Z" fill="white" opacity="0.9" />
              <circle cx="122" cy="60" r="4" fill="white" opacity="0.7" />
            </g>
          </svg>
        </div>
      </div>

      <p style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: "clamp(0.9rem, 2.5vw, 1.4rem)",
        fontWeight: 600,
        color: "#94a3b8",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        margin: 0,
        opacity: 0,
        animation: `taglineRevealT ${get("tagline").duration}s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
        animationDelay: `${get("tagline").delay}s`,
      }}>
        De slimste rekentools
      </p>
    </div>
  );
}

/* ─── Timeline Scrubber ─── */

function TimelineScrubber({ currentTime, totalTime, layers, onScrub }: { currentTime: number; totalTime: number; layers: Layer[]; onScrub: (t: number) => void }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const scale = (t: number) => (t / totalTime) * 100;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    onScrub(pct * totalTime);
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Time ruler */}
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.6rem", color: "#475569", marginBottom: "0.25rem", padding: "0 0.25rem" }}>
        {Array.from({ length: totalTime + 1 }, (_, i) => (
          <span key={i}>{i}s</span>
        ))}
      </div>
      {/* Track */}
      <div
        ref={trackRef}
        onClick={handleClick}
        style={{
          height: "6px",
          background: "#1e293b",
          borderRadius: "3px",
          cursor: "crosshair",
          position: "relative",
          overflow: "visible",
        }}
      >
        {/* Layer bars */}
        {layers.map((l) => (
          <div
            key={l.id}
            style={{
              position: "absolute",
              left: `${scale(l.delay)}%`,
              width: `${scale(l.duration)}%`,
              top: "-2px",
              height: "10px",
              background: l.color,
              borderRadius: "2px",
              opacity: 0.5,
            }}
          />
        ))}
        {/* Playhead */}
        <div
          style={{
            position: "absolute",
            left: `${scale(currentTime)}%`,
            top: "-6px",
            width: "2px",
            height: "18px",
            background: "#ef4444",
            borderRadius: "1px",
            transform: "translateX(-50%)",
            pointerEvents: "none",
            boxShadow: "0 0 4px rgba(239,68,68,0.6)",
          }}
        />
      </div>
    </div>
  );
}

/* ─── Layer Panel ─── */

function LayerPanel({ layers, onUpdate, onReplay }: { layers: Layer[]; onUpdate: (id: string, field: keyof Layer, value: number) => void; onReplay: () => void }) {
  return (
    <div style={{ padding: "1rem" }}>
      <h3 style={{ margin: "0 0 1rem", fontSize: "0.9rem", fontWeight: 700, color: "#94a3b8", letterSpacing: "0.05em", textTransform: "uppercase" }}>
        Layers
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {layers.map((layer) => (
          <LayerRow key={layer.id} layer={layer} onUpdate={onUpdate} onReplay={onReplay} />
        ))}
      </div>
    </div>
  );
}

function LayerRow({ layer, onUpdate, onReplay }: { layer: Layer; onUpdate: (id: string, field: keyof Layer, value: number) => void; onReplay: () => void }) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragField, setDragField] = useState<keyof Layer | null>(null);
  const startX = useRef(0);
  const startVal = useRef(0);

  const handleMouseDown = (field: keyof Layer, e: React.MouseEvent) => {
    setIsDragging(true);
    setDragField(field);
    startX.current = e.clientX;
    startVal.current = layer[field] as number;
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !dragField) return;
    const deltaPx = e.clientX - startX.current;
    const deltaSec = deltaPx * 0.01; // 1px = 0.01s
    let newVal = Math.max(0, startVal.current + deltaSec);
    if (dragField === "duration") {
      newVal = Math.max(0.05, Math.min(6, newVal));
    } else {
      newVal = Math.max(0, Math.min(5, newVal));
    }
    onUpdate(layer.id, dragField, newVal);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragField(null);
    window.removeEventListener("mouseup", handleMouseUp);
    window.removeEventListener("mousemove", handleMouseMove);
    onReplay();
  };

  return (
    <div style={{ background: "#1e293b", borderRadius: "10px", padding: "0.75rem 1rem", borderLeft: `3px solid ${layer.color}` }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
        <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#e2e8f0" }}>{layer.label}</span>
        <span style={{ fontSize: "0.65rem", color: "#64748b" }}>{layer.description}</span>
      </div>

      {/* Delay */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.35rem" }}>
        <span style={{ fontSize: "0.68rem", color: "#94a3b8", width: "50px", flexShrink: 0 }}>Delay</span>
        <div
          onMouseDown={(e) => handleMouseDown("delay", e)}
          style={{
            flex: 1,
            height: "20px",
            background: "#334155",
            borderRadius: "4px",
            position: "relative",
            cursor: "ew-resize",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              width: `${Math.min((layer.delay / 6) * 100, 100)}%`,
              background: layer.color,
              borderRadius: "4px",
              opacity: 0.6,
            }}
          />
          <span style={{ position: "absolute", right: "6px", top: "50%", transform: "translateY(-50%)", fontSize: "0.6rem", color: "#e2e8f0", fontVariantNumeric: "tabular-nums" }}>
            {layer.delay.toFixed(2)}s
          </span>
        </div>
      </div>

      {/* Duration */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <span style={{ fontSize: "0.68rem", color: "#94a3b8", width: "50px", flexShrink: 0 }}>Duration</span>
        <div
          onMouseDown={(e) => handleMouseDown("duration", e)}
          style={{
            flex: 1,
            height: "20px",
            background: "#334155",
            borderRadius: "4px",
            position: "relative",
            cursor: "ew-resize",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              width: `${Math.min((layer.duration / 6) * 100, 100)}%`,
              background: layer.color,
              borderRadius: "4px",
              opacity: 0.8,
            }}
          />
          <span style={{ position: "absolute", right: "6px", top: "50%", transform: "translateY(-50%)", fontSize: "0.6rem", color: "#e2e8f0", fontVariantNumeric: "tabular-nums" }}>
            {layer.duration.toFixed(2)}s
          </span>
        </div>
      </div>
    </div>
  );
}

function ResetButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "transparent",
        color: "#94a3b8",
        border: "1px solid #334155",
        borderRadius: "6px",
        padding: "0.4rem 0.8rem",
        fontSize: "0.85rem",
        cursor: "pointer",
      }}
    >
      Reset Timing
    </button>
  );
}
