import "./styles/App.scss";
import React from "react";
import Header from "./components/Header/Header";
import InstructionsSection from "./components/InstructionsSection/InstructionsSection";

export default function App() {
  return (
    <div className="container">
      <Header />
      <InstructionsSection />
    </div>
  );
}
