import Header from "./Components/Headers/Header";
import Dashboard from "./Components/Projects/Dashboard";
import "./App.css";

function App() {
  return (
    <div>
      <Header></Header>
      <h2 className="app-label-2"> Projects </h2>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
