# bereken.ing | Design System Blueprint 📐💎
**Version: 9.2 (Liquid Architecture)**

This document codifies the "Impeccable" design principles for `bereken.ing`. Every calculator and page component MUST adhere to these rules to maintain mathematical purity and visual authority.

---

## 1. The Liquid Grid System (1-3-1 Shell)
The site uses a purely fluid, proportional grid system that eliminates fixed pixel widths.

### Proportional Columns
*   **Left Sidebar**: `1fr` (Liquid ad/nav slot)
*   **Center Column**: `3fr` (The Calculator / Primary Content)
*   **Right Sidebar**: `1fr` (Liquid ad/nav slot)
*   **Unified Gap**: `var(--col-gap)` (Margin Left = Gap = Margin Right)

### Fluid Variables (The User Blueprint)
```css
--shell-padding: clamp(12px, 2.5vw, 40px);
--col-gap: clamp(12px, 2vw, 36px);
--max-width: clamp(1000px, 95vw, 1600px);
```

---

## 2. Calculator Design Standards 🧮
Every calculator is a "Liquid Citizen" that lives inside the `3fr` center column.

### The 20px Safe-Zone Rule
*   **Internal Margin**: Every calculator MUST have a minimum of **20px internal padding** (`var(--calc-padding)`) around its content to prevent visual cutoff.
*   **Fluidity**: The calculator must shrink and grow proportionally with the container. Never use fixed `px` widths for inputs or containers.

### Internal Layouts
Calculators can be structured in:
*   **1 Column**: Standard stack for simple tools.
*   **2 Columns**: Proportional split (e.g., Inputs | Results).
*   **3 Columns**: For advanced data-heavy tools.

---

## 3. Typography Scale (Impeccable Scale) 🖋️
We use a high-authority typography system to convey trust and precision.

*   **Main Font**: `Plus Jakarta Sans` (Professional, Geometric)
*   **Brand Font**: `Fugaz One` (Bold, Energetic)

### Font Scale
*   **H1 (Hero)**: `clamp(2.2rem, 6vw, 3.5rem)` | *Fugaz One*
*   **H2 (Section)**: `clamp(1.4rem, 4vw, 2rem)` | *Plus Jakarta Sans (800 weight)*
*   **H3 (Intro/Eyebrow)**: `0.7rem` | *Plus Jakarta Sans (900 weight, All Caps, 0.15em spacing)*
*   **Body**: `16px / 1.55 line-height` | *Plus Jakarta Sans*

---

## 4. UI Tokens & Colors 🎨
*   **Primary Accent**: `#6366f1` (Indigo Vibrant)
*   **Background**: `#fdfdfd` (Clean Surface)
*   **Borders**: `rgba(0, 0, 0, 0.05)` (Subtle, Modern)
*   **Border Radius**: `16px` (Standard for cards and inputs)

---

## 5. Mobile Behavior 📱
*   **Stacking**: Sidebars are hidden on mobile to prioritize the calculator.
*   **Internal Navigation**: Calculator steps convert to a horizontal scrolling bar (`mobile-swipe-nav`) to avoid vertical "squeezing."
*   **Proportional Shrink**: The calculator layout should remain identical to the web version but "proportionally shrunk" to the screen width.

---

## 6. Development Workflow 🛠️
1.  **Build**: Create calculator logic within the `ToolLayout` shell.
2.  **Test**: Validate on the **localserver (port 3008)**.
3.  **Approve**: Ensure "Mathematical Purity" and "20px Safe-Zone" are met.
4.  **Deploy**: Merge to `main` branch.
