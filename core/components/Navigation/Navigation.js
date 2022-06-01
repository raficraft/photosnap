import Link from "next/link";
import React from "react";

export default function Navigation({ array }) {
  return (
    <nav>
      {array &&
        array.map((el, key) => {
          return (
            <Link href={el.link} key={key}>
              <a className="nav_link">{el.text}</a>
            </Link>
          );
        })}
    </nav>
  );
}
