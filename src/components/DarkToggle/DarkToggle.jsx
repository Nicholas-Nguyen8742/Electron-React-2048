import "./DarkToggle.scss";
import React from "react";

export default function DarkToggle({ onClick }) {
  return (
    <article className="toggle">
      <label className="toggle__label" htmlFor="DarkToggle">
        Dark Mode
      </label>
      <div className="toggle-style">
        <input
          className="toggle__input"
          onClick={onClick}
          type="checkbox"
          name="DarkToggle"
          id="checkbox"
        />
        <span className="toggle-span"></span>
      </div>
    </article>
  );
}
