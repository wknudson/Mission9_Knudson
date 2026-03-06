import React from "react";
import type { CSSProperties } from "react";

// This is the header that shows up at the top of the page.
// It displays the March Madness title and a short description of the site.
function Header(): React.JSX.Element {
  return (
    <header style={styles.wrapper}>
      {/* Blue bar at the very top with the NCAA label */}
      <div style={styles.topBar}>
        <span style={styles.ncaaLabel}>NCAA</span>
      </div>

      {/* Main hero section with the big title */}
      <div style={styles.hero}>
        <p style={styles.eyebrow}>DIVISION I</p>
        <h1 style={styles.title}>
          {/* "MARCH" is in blue, "MADNESS" is in white */}
          <span style={styles.titleMarch}>MARCH</span>
          <span style={styles.titleMadness}>MADNESS</span>
        </h1>
        {/* Just a little blue line to break up the title and subtitle */}
        <div style={styles.divider} />
        <p style={styles.subtitle}>
          Browse every college basketball program — school, mascot &amp; location
        </p>
      </div>
    </header>
  );
}

// All the styles for the header are kept down here to keep the HTML above clean
const styles: { [key: string]: CSSProperties } = {
  wrapper: {
    background: "#000",
    borderBottom: "4px solid #009DDC",
  },
  topBar: {
    background: "#009DDC",
    padding: "6px 32px",
    display: "flex",
    alignItems: "center",
  },
  ncaaLabel: {
    color: "#fff",
    fontFamily: "'Arial Black', 'Impact', sans-serif",
    fontWeight: 900,
    fontSize: "0.85rem",
    letterSpacing: "4px",
    textTransform: "uppercase",
  },
  hero: {
    padding: "52px 32px 48px",
    textAlign: "center",
  },
  eyebrow: {
    color: "#009DDC",
    fontFamily: "'Arial Black', 'Impact', sans-serif",
    fontWeight: 700,
    fontSize: "0.8rem",
    letterSpacing: "6px",
    textTransform: "uppercase",
    margin: "0 0 12px 0",
  },
  title: {
    margin: "0 0 16px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
  },
  titleMarch: {
    color: "#009DDC",
    fontFamily: "'Arial Black', 'Impact', sans-serif",
    fontWeight: 900,
    fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
    letterSpacing: "8px",
    textTransform: "uppercase",
    lineHeight: 1,
    transform: "skewX(-6deg)",
    display: "block",
  },
  titleMadness: {
    color: "#fff",
    fontFamily: "'Arial Black', 'Impact', sans-serif",
    fontWeight: 900,
    fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
    letterSpacing: "8px",
    textTransform: "uppercase",
    lineHeight: 1,
    transform: "skewX(-6deg)",
    display: "block",
  },
  divider: {
    width: "80px",
    height: "3px",
    background: "#009DDC",
    margin: "20px auto",
  },
  subtitle: {
    color: "#aaa",
    fontFamily: "'Arial', sans-serif",
    fontSize: "0.95rem",
    letterSpacing: "2px",
    textTransform: "uppercase",
    margin: 0,
  },
};

export default Header;