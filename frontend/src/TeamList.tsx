import React from "react";
import type { CSSProperties } from "react";
import TeamCard from "./TeamCard";

// Each team in the array looks like this
interface Team {
  tid: number;
  school: string;
  name: string;
  city: string;
  state: string;
}

// TeamList expects an array of teams passed in from App.tsx
interface TeamListProps {
  teams: Team[];
}

// This component takes the full list of teams and renders a card for each one.
// The cards are laid out in a responsive grid that wraps on smaller screens.
function TeamList({ teams }: TeamListProps): React.JSX.Element {
  return (
    <main style={styles.container}>
      {/* Shows the total number of teams at the top, e.g. "323 TEAMS" */}
      <p style={styles.count}>{teams.length} TEAMS</p>

      {/* Loop through every team and render a TeamCard for each */}
      <div style={styles.grid}>
        {teams.map((team) => (
          <TeamCard key={team.tid} team={team} />
        ))}
      </div>
    </main>
  );
}

// Styles for the background and grid layout
const styles: { [key: string]: CSSProperties } = {
  container: {
    background: "#0a0a0a",
    minHeight: "100vh",
    padding: "40px 32px 64px",
  },
  count: {
    color: "#444",
    fontFamily: "'Arial', sans-serif",
    fontWeight: 700,
    fontSize: "0.75rem",
    letterSpacing: "4px",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: "32px",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    maxWidth: "1300px",
    margin: "0 auto",
  },
};

export default TeamList;