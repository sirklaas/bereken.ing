"use client";

import { useEffect } from "react";

const fugazStyle: React.CSSProperties = {
  fontFamily: "'Fugaz One', sans-serif",
  fontWeight: 400,
};

export default function EndshotPage() {
  useEffect(() => {
    // Hide site chrome for clean recording
    document.querySelector("header")?.setAttribute("style", "display:none!important");
    document.querySelector("footer")?.setAttribute("style", "display:none!important");
    document.getElementById("consent-banner")?.setAttribute("style", "display:none!important");
    document.body.style.background = "transparent";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflow = "hidden";
    document.documentElement.style.background = "transparent";
    document.documentElement.style.overflow = "hidden";
  }, []);

  return (
    <div
      className="endshot-wrapper"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
        position: "relative",
      }}
    >
      <style>{`
        @keyframes charReveal {
          from {
            opacity: 0;
            transform: translateX(-12px) scale(0.95);
            filter: blur(4px);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes diamondReveal {
          from {
            opacity: 0;
            transform: rotate(-180deg) scale(0.2);
          }
          to {
            opacity: 1;
            transform: rotate(0deg) scale(1);
          }
        }

        @keyframes eyeEnter {
          from {
            opacity: 0;
            transform: translateX(30px) scale(0.85) rotate(-5deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1) rotate(0deg);
          }
        }

        @keyframes eyeLook {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-6px); }
          50% { transform: translateX(6px); }
          75% { transform: translateX(0); }
        }

        @keyframes eyeBlink {
          0%, 90%, 100% { transform: scaleY(1); }
          93% { transform: scaleY(0.08); }
          96% { transform: scaleY(1); }
        }

        @keyframes settleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        @keyframes taglineReveal {
          from {
            opacity: 0;
            transform: translateY(12px);
            filter: blur(3px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        .char {
          display: inline-block;
          opacity: 0;
          font-size: clamp(3rem, 10vw, 8rem);
          line-height: 1;
          color: #0B1D3A;
          animation: charReveal 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .diamond-dot {
          display: inline-block;
          width: clamp(0.6rem, 2vw, 1.2rem);
          height: clamp(0.6rem, 2vw, 1.2rem);
          margin: 0 clamp(0.15rem, 0.5vw, 0.3rem);
          vertical-align: middle;
          opacity: 0;
          animation: diamondReveal 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 0.42s;
        }

        .eye-container {
          display: inline-flex;
          align-items: center;
          opacity: 0;
          margin-left: clamp(1rem, 3vw, 2.5rem);
          animation: eyeEnter 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 0.72s;
        }

        .eye-svg-wrapper {
          width: clamp(100px, 18vw, 220px);
          height: auto;
          transform-origin: center center;
          animation:
            eyeBlink 3.5s ease-in-out 2.2s forwards,
            settleFloat 4s ease-in-out 3.5s infinite;
        }

        .eye-iris {
          animation: eyeLook 2s ease-in-out 1.4s forwards;
          transform-origin: center center;
        }

        .tagline-text {
          opacity: 0;
          animation: taglineReveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 3.2s;
        }
      `}</style>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", ...fugazStyle }}>
          {/* Text Assembly */}
          <div style={{ display: "inline-flex", alignItems: "baseline" }}>
            {"bereken".split("").map((c, i) => (
              <span key={i} className="char" style={{ animationDelay: `${i * 0.06}s` }}>
                {c}
              </span>
            ))}
            <svg
              className="diamond-dot"
              viewBox="0 0 20 20"
              style={{ overflow: "visible" }}
            >
              <rect
                x="3"
                y="3"
                width="14"
                height="14"
                rx="1"
                fill="#1d4ed8"
                transform="rotate(45 10 10)"
              />
            </svg>
            {"ing".split("").map((c, i) => (
              <span
                key={`ing-${i}`}
                className="char"
                style={{ animationDelay: `${(7 + i) * 0.06}s` }}
              >
                {c}
              </span>
            ))}
          </div>

          {/* Eye Icon */}
          <div className="eye-container">
            <svg
              className="eye-svg-wrapper"
              viewBox="0 0 220 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Eye outer shape (stylized almond with arrow points) */}
              <path
                d="M20 70 C20 70 55 10 110 10 C165 10 200 70 200 70 C200 70 165 130 110 130 C55 130 20 70 20 70 Z"
                stroke="#0B1D3A"
                strokeWidth="10"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Top-right arrow extension */}
              <path
                d="M160 32 L188 8 L178 42 Z"
                fill="#0B1D3A"
              />

              {/* Bottom-left arrow extension */}
              <path
                d="M60 108 L32 132 L42 98 Z"
                fill="#0B1D3A"
              />

              {/* Inner iris group */}
              <g className="eye-iris">
                {/* Blue iris */}
                <circle cx="110" cy="70" r="30" fill="#1d4ed8" />
                {/* White highlight crescent */}
                <path
                  d="M95 52 A 22 22 0 0 1 128 58 A 18 18 0 0 0 98 48 Z"
                  fill="white"
                  opacity="0.9"
                />
                {/* Small secondary highlight */}
                <circle cx="122" cy="60" r="4" fill="white" opacity="0.7" />
              </g>
            </svg>
          </div>
        </div>

        {/* Tagline */}
        <p
          className="tagline-text"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(1rem, 2.5vw, 1.6rem)",
            fontWeight: 600,
            color: "#64748b",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            margin: 0,
            padding: 0,
          }}
        >
          De slimste rekentools
        </p>
      </div>
    </div>
  );
}
