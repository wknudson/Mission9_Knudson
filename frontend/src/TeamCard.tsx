import React from "react";
import type { CSSProperties } from "react";

// This defines the shape of a single team object from the JSON file
interface Team {
  tid: number;
  school: string;
  name: string; // this is the mascot name in the JSON
  city: string;
  state: string;
}

// TeamCard takes one team as a prop and displays its info
interface TeamCardProps {
  team: Team;
}

// This component is a single card for one team.
// It shows the school name, mascot, and location.
function TeamCard({ team }: TeamCardProps): React.JSX.Element {
  return (
    <div style={styles.card}>
      {/* Blue stripe across the top of every card */}
      <div style={styles.accentBar} />

      <div style={styles.body}>
        <h2 style={styles.schoolName}>{team.school}</h2>

        {/* Small blue underline beneath the school name */}
        <div style={styles.divider} />

        {/* Mascot row — "name" in the JSON is actually the mascot */}
        <p style={styles.detail}>
          <span style={styles.label}>MASCOT</span>
          <span style={styles.value}>{team.name}</span>
        </p>

        {/* Location row */}
        <p style={styles.detail}>
          <span style={styles.label}>LOCATION</span>
          <span style={styles.value}>{team.city}, {team.state}</span>
        </p>
      </div>
    </div>
  );
}

// Styles for the card — keeping them here so the JSX above stays readable
const styles: { [key: string]: CSSProperties } = {
  card: {
    background: "#111",
    border: "1px solid #222",
    borderRadius: "4px",
    width: "280px",
    overflow: "hidden",
    transition: "transform 0.2s, border-color 0.2s",
  },
  accentBar: {
    height: "4px",
    background: "#009DDC",
    width: "100%",
  },
  body: {
    padding: "20px 22px 24px",
  },
  schoolName: {
    color: "#fff",
    fontFamily: "'Arial Black', 'Impact', sans-serif",
    fontWeight: 900,
    fontSize: "1.1rem",
    letterSpacing: "1px",
    textTransform: "uppercase",
    margin: "0 0 14px 0",
    lineHeight: 1.2,
  },
  divider: {
    width: "32px",
    height: "2px",
    background: "#009DDC",
    marginBottom: "14px",
  },
  detail: {
    display: "flex",
    flexDirection: "column",
    margin: "10px 0 0 0",
    gap: "2px",
  },
  label: {
    color: "#009DDC",
    fontFamily: "'Arial', sans-serif",
    fontWeight: 700,
    fontSize: "0.65rem",
    letterSpacing: "3px",
    textTransform: "uppercase",
  },
  value: {
    color: "#ccc",
    fontFamily: "'Arial', sans-serif",
    fontSize: "0.9rem",
    letterSpacing: "0.5px",
  },
};

export default TeamCard;