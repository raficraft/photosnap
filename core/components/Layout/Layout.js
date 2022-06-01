import Link from "next/link";
import React from "react";
import Checkbox from "../btn/Checkbox/Checkbox";
import Header from "../Header/Header";

export default function Layout({ children }) {
  return (
    <main>
      <Header></Header>
      {children}
    </main>
  );
}
