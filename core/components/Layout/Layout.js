import Link from "next/link";
import React from "react";
import Checkbox from "../btn/Checkbox/Checkbox";

export default function Layout({ children }) {
  return (
    <div>
      <Link href="/design">
        <a>Design</a>
      </Link>
      <Link href="/">
        <a>Home</a>
      </Link>
      {children}
    </div>
  );
}
