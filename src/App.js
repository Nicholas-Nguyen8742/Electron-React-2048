import "./styles/App.scss";
import React, { useState } from "react";
import { useEvent } from "./utils/hooks";
import { Board } from "./utils/gameLogic";
import DarkToggle from "./components/DarkToggle/DarkToggle";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import InstructionsSection from "./components/InstructionsSection/InstructionsSection";
import GameCell from "./components/GameCell/GameCell"; 
import GameTile from "./components/GameCell/GameCell";

const App = () => {
  const [board, setBoard] = useState(new Board());

  const resetGame = () => {
    setBoard(new Board());
  };
  const updateBoard = (direction) => {
    const boardClone = Object.assign(
      Object.create(Object.getPrototypeOf(board)),
      board
    );
    const newBoard = boardClone.move(direction);
    setBoard(newBoard);
  };

  const handleKeyDown = (event) => {
    if (board.hasWon()) return;

    // keydown for: left, up, right, down
    if (event.keyCode >= 37 && event.keyCode <= 40) {
      const direction = event.keyCode - 37;
      updateBoard(direction);
    }
  };

  useEvent("keydown", handleKeyDown);

  const cells = board.cells.map((row, rowIndex) => {
    return (
      <div key={rowIndex}>
        {row.map((col, colIndex) => {
          return <GameCell key={rowIndex * board.size + colIndex} />;
        })}
      </div>
    );
  });

  const tiles = board.tiles
    .filter((tile) => tile.value !== 0)
    .map((tile, index) => {
      return <GameTile tile={tile} key={index} />;
    });

  return (
    <main className="container">
      <DarkToggle />
      <Scoreboard reset={resetGame} />
      <InstructionsSection />
      <div className="gamboard-wrapper">
        <section className="gameboard">
          <GameCell />
          <GameCell />
          <GameCell />
          <GameCell />
          <GameCell />
          <GameCell />
          <GameCell />
          <GameCell />
          <GameCell />
          <GameCell />
          <GameCell />
          <GameCell />
          <GameCell />
          <GameCell />
          <GameCell />
          <GameCell />
        </section>
      </div>
    </main>
  );
};

export default App;