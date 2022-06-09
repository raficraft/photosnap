import React from "react";
import Link from "next/link";
import { HeaderContainer } from "./Header_css";
import { Logo, PhotosnapTitle } from "../../assets/svg/Logo/Logo";
import { useRouter } from "next/router";

export default function Header({ children }) {
  const router = useRouter();
  return (
    <HeaderContainer>
      <Link href="/">
        <a
          className="logo_container"
          data-active={router.pathname == "/" ? "active" : ""}
        >
          <Logo className="logo"></Logo>
          <PhotosnapTitle></PhotosnapTitle>
        </a>
      </Link>

      {children}
    </HeaderContainer>
  );
}
