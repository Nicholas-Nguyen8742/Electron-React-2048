import "./styles/App.scss";
import React from "react";
import Header from "./components/Header/Header";
import InstructionsSection from "./components/InstructionsSection/InstructionsSection";
import DarkToggle from "./components/DarkToggle/DarkToggle";

export default function App() {
  return (
    <main className="container">
      <DarkToggle />
      <Header />
      <InstructionsSection />
    </main>
  );
}
