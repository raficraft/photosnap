import React from "react";
import Link from "next/link";

import Btn from "@/components/btn/Btn/Btn";
import Navigation from "@/components/Navigation/Navigation";
import { HeaderContainer } from "./Header_css";
import { Logo, PhotosnapTitle } from "../../assets/svg/Logo/Logo";
import { nav_header } from "../../data/nav_header";

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
