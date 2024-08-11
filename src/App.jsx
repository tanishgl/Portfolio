import Header from "./Components/Headers/Header";
import Dashboard from "./Components/Projects/Dashboard";
import "./App.css";
import Social from "./Components/Socials/social";
import SkillTable from "./Components/Skill/skillTable";

function App() {
  return (
    <div>
      <Header></Header>
      <Dashboard></Dashboard>
      <SkillTable></SkillTable>
      <Social></Social>
    </div>
  );
}

export default App;
