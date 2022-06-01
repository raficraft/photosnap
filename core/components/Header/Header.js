import { nav_header } from "@/data/nav_header";
import Link from "next/link";
import { Logo, PhotosnapTitle } from "public/assets/svg/Logo/Logo";
import React from "react";
import Btn from "@/components/btn/Btn/Btn";
import Navigation from "@/components/Navigation/Navigation";
import { HeaderContainer } from "./Header_css";

export default function Header() {
  return (
    <HeaderContainer>
      <Link href="/">
        <a className="logo_container">
          <Logo className="logo"></Logo>
          <PhotosnapTitle></PhotosnapTitle>
        </a>
      </Link>
      <Navigation array={nav_header}></Navigation>
      <Btn type="dark_link" text="GET AN INVITE"></Btn>
    </HeaderContainer>
  );
}
