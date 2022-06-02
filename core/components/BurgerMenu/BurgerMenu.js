import React, { useState } from "react";
import { nav_header } from "../../data/navigation_data";
import Btn from "../btn/Btn/Btn";
import Navigation from "../Navigation/Navigation";
import { BurgerContainer, BurgerIcon } from "./BurgerMenu_css";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <BurgerContainer
        className="burgerMenu"
        data-isopen={isOpen}
        aria-label="Hide Navigation Menu"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className="nav_container">
          <Navigation array={nav_header}></Navigation>
          <Btn type="dark" text="get an invite"></Btn>
        </div>
      </BurgerContainer>
      <BurgerIcon
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        data-isopen={isOpen}
        aria-label="Show Navigation Menu"
        aria-expanded="false"
        tabindex="0"
      >
        <span className="burger_item burger_item--top"></span>
        <span className="burger_item burger_item--bottom"></span>
      </BurgerIcon>
    </>
  );
}
