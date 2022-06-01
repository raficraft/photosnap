import React from "react";
import Link from "next/link";
import { HeaderContainer } from "./Header_css";
import { Logo, PhotosnapTitle } from "../../assets/svg/Logo/Logo";

export default function Header({ children }) {
  return (
    <HeaderContainer>
      <Link href="/">
        <a className="logo_container">
          <Logo className="logo"></Logo>
          <PhotosnapTitle></PhotosnapTitle>
        </a>
      </Link>
      {children}
    </HeaderContainer>
  );
}
