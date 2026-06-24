// import { useState } from 'react'
import "./App.css";
import DreamSmiles from "./components/DreamSmiles";
import Results from "./components/Results";
import WhyWhistle from "./components/WhyWhistle";

function App() {
  return (
    <main className="container">
      <DreamSmiles />
      <Results />
      <WhyWhistle />
    </main>
  );
}

export default App;
