import { nav_header } from "@/data/nav_header";
import Link from "next/link";
import React from "react";
import Btn from "../btn/Btn/Btn";
import Checkbox from "../btn/Checkbox/Checkbox";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

export default function Layout({ children }) {
  return (
    <main>
      <Header>
        <Navigation array={nav_header}></Navigation>
        <Btn type="dark_link" text="GET AN INVITE"></Btn>
      </Header>
      {children}
    </main>
  );
}
