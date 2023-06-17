import Sidebar from "./Components/Sidebar/Sidebar";
import Moves from "./Components/Moves/Moves";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <Moves />
      </div>
    </div>
  );
}

export default App;
