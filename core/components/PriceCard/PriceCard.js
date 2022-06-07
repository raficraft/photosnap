import React from "react";
import { PriceCardContainer } from "./PriceCard_css";

export default function PriceCard({ theme, content, multiple = 1 }) {
  return (
    <PriceCardContainer>
      <div className={`cardContainer ${theme}`}>
        <header>
          <h3>{content.title}</h3>
          <p>{content.text}</p>
        </header>
        <div className="price">
          <h2>${parseFloat(content.price * multiple).toFixed(2)}</h2>
          <p>{content.duration}</p>
        </div>
        <footer>{content.button}</footer>
      </div>
    </PriceCardContainer>
  );
}
