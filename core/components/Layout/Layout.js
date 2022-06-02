import React from "react";
import { nav_header } from "../../data/navigation_data";
import useMediaQuery from "../../hooks/useMediaQuery/useMediaQuery";
import Btn from "../btn/Btn/Btn";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

export default function Layout({ children }) {
  const isMobil = useMediaQuery("(max-width : 767px)");
  return (
    <main>
      <Header>
        {!isMobil && (
          <>
            <Navigation array={nav_header}></Navigation>
            <Btn type="dark_link" text="GET AN INVITE"></Btn>{" "}
          </>
        )}
      </Header>
      {isMobil && <BurgerMenu></BurgerMenu>}
      {children}
    </main>
  );
}
