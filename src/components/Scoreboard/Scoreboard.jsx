import "./Scoreboard.scss";
import React from "react";
import logo from "../../assets/images/2048_logo.png";

export default function Scoreboard() {
  return (
    <section className="header">
      <img
        className="header__logo"
        src={logo}
        alt="The Number 2048 on Yellow Background Color"
      />
      <div className="header__scores">
        <article className="header__scores-container">
          <h4 className="header__scores__title">Score</h4>
          <h3>0</h3>
        </article>
        <article className="header__scores-container ">
          <h4 className="header__scores__title">Best</h4>
          <h3>0</h3>
        </article>
        <button className="header__button-new header__button">NEW</button>
        <button className="header__button-undo header__button">UNDO</button>
      </div>
    </section>
  );
}
