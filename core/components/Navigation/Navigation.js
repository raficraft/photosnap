import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export default function Navigation({ array }) {
  const router = useRouter();
  return (
    <nav>
      {array &&
        array.map((el, key) => {
          return (
            <Link href={el.link} key={key}>
              <a
                className="nav_link"
                data-active={router.pathname == el.link ? "true" : "false"}
              >
                {el.text}
              </a>
            </Link>
          );
        })}
    </nav>
  );
}
