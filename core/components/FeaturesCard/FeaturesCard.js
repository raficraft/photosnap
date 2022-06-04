import React from "react";

export default function FeaturesCard_css({ icon, title, text }) {
  return (
    <div>
      <div>{icon}</div>
      <header>
        <h4>{title}</h4>
      </header>
      <div>
        <p classNAme="text">{text}</p>
      </div>
    </div>
  );
}
