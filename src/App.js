// import "./styles/App.scss";
import "./main.scss";
import "./styles.scss";
import React, { useState } from "react";
import Tile from "./components/Tile/Tile";
import useEvent from "./logic/hooks/useEvent";
import Cell from "./components/Cell/Cell";
import GameOver from "./components/GameOver/GameOver";
import { Board } from "./logic";

const App = () => {

    const [board, setBoard] = useState(new Board());
  
    const handlekeyDown = (event) => {
      if (event.keyCode === 78) {
        resetGame();
      }
  
      if (board.hasWon()) return;
  
      // console.log("Key ", event.keyCode);
      if (board.hasLost()) return;
  
      if (event.keyCode >= 37 && event.keyCode <= 40) {
        let direction = event.keyCode - 37;
  
        // deep clone of board object
        let boardClone = Object.assign(
          Object.create(Object.getPrototypeOf(board)),
          board
        );
  
        let newBoard = boardClone.move(direction);
        setBoard(newBoard);
      }
    };
  
    useEvent("keydown", handlekeyDown);
  
    const cells = board.cells.map((row, rowIndex) => {
      return (
        <div key={rowIndex}>
          {row.map((col, colIndex) => {
            return <Cell key={rowIndex * board.size + colIndex} />;
          })}
        </div>
      );
    });
  
    const tiles = board.tiles
      .filter((tile) => tile.value !== 0)
      .map((tile, index) => {
        return <Tile tile={tile} key={index} />;
      });
  
    const resetGame = () => {
      setBoard(new Board());
    };
  
    return (
      <div>
        <div className="details-box">
          <div className="resetButton" onClick={resetGame}>
            New Game
          </div>
  
          <div className="details-box">
            <div className="score-box">
              <div className="score-title">Score</div>
              <div className="">{board.score}</div>
            </div>
            {/* <div className="score-box">
              <div className="score-title">Max Score</div>
              <div className="">{board.score}</div>
            </div> */}
          </div>
        </div>
        <div className="board">
          {cells}
          {tiles}
        </div>
        <div>
          <GameOver onRestart={resetGame} board={board} />
        </div>
        <div>
          <br />
          🚀 Use Arrow Keys to move the tiles.
          <br />
          🚀 Press Key N for New Game.
        </div>
      </div>
    );
  };
  
export default App;
