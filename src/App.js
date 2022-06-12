import "./styles/App.scss";
import React from "react";
import DarkToggle from "./components/DarkToggle/DarkToggle";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import InstructionsSection from "./components/InstructionsSection/InstructionsSection";
import Gameboard from "./components/GameBoard/Gameboard";


export default function App() {
  return (
    <main className="container">
      <DarkToggle />
      <Scoreboard />
      <InstructionsSection />
      <Gameboard />
    </main>
  );
}
