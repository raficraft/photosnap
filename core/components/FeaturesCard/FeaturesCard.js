import React from "react";
import { FeaturesContainer } from "./FeaturesCard_css";

export default function FeaturesCard({ content }) {
  return (
    <FeaturesContainer>
      <div className="svgContainer">{content.icon}</div>
      <header>
        <h4>{content.title}</h4>
      </header>
      <div>
        <p className="text">{content.text}</p>
      </div>
    </FeaturesContainer>
  );
}
