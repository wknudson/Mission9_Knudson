import Header from "./Header";
import TeamList from "./TeamList";
import data from "./CollegeBasketballTeams.json";

function App() {
  return (
    <div>
      <Header />
      <TeamList teams={data.teams} />
    </div>
  );
}

export default App;