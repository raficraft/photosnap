import React from "react";

export default function Btn({ type, text, link = "/" }) {
  switch (type) {
    case "dark":
      return (
        <button type="button" className="button button_dark">
          {text}
        </button>
      );
    case "light":
      return (
        <button type="button" className="button button_ligth">
          {text}
        </button>
      );
    case "arrow":
      return (
        <button type="button" className="button button_arrow">
          {text}
          <span type="button" className="arrow"></span>
        </button>
      );
    case "dark_link":
      return (
        <a href={link} className="button button_dark" role="button">
          {text}
        </a>
      );
    case "light_link":
      return (
        <a href="link" className="button button_ligth" role="button">
          {text}
        </a>
      );
    case "arrow_link":
      return (
        <a href={link} className="button button_arrow" role="button">
          <div className="button_content">{text}</div>
          <div className="arrow_container">
            <span type="button" className="arrow"></span>
          </div>
        </a>
      );
  }
}
