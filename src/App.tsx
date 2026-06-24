import "./App.css";
import NavBar from "./components/NavBar";
import DreamSmiles from "./components/DreamSmiles";
import Results from "./components/Results";
import WhyWhistle from "./components/WhyWhistle";

function App() {
  return (
    <main className="container">
      <NavBar />
      <DreamSmiles />
      <Results />
      <WhyWhistle />
    </main>
  );
}

export default App;
