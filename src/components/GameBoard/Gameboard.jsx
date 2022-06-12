import "./GameBoard.scss";
import React from "react";
import GameTile from "../GameTile/GameTile";

export default function Gameboard() {
  return (
    <div className="gamboard-wrapper">
      <section className="gameboard">
        <GameTile />
        <GameTile />
        <GameTile />
        <GameTile />
        <GameTile />
        <GameTile />
        <GameTile />
        <GameTile />
        <GameTile />
        <GameTile />
        <GameTile />
        <GameTile />
        <GameTile />
        <GameTile />
        <GameTile />
        <GameTile />

      </section>
    </div>
  );
}
