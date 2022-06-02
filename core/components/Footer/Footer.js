import React from "react";
import { Logo, PhotosnapTitle } from "../../assets/svg/Logo/Logo";
import { nav_footer } from "../../data/navigation_data";
import {
  IconFacebook,
  IconInstagram,
  IconPinterest,
  IconTwitter,
  IconYoutubeCircle,
} from "../../data/social_icon";
import Btn from "../btn/Btn/Btn";
import Navigation from "../Navigation/Navigation";
import { FooterContainer } from "./Footer_css";

export default function Footer() {
  return (
    <FooterContainer>
      <section>
        <header>
          <Logo></Logo>
          <PhotosnapTitle color="white"></PhotosnapTitle>
        </header>
        <footer>
          <IconFacebook color="white"></IconFacebook>
          <IconYoutubeCircle color="white"></IconYoutubeCircle>
          <IconTwitter color="white"></IconTwitter>
          <IconPinterest color="white"></IconPinterest>
          <IconInstagram color="white"></IconInstagram>
        </footer>
      </section>
      <section>
        <Navigation array={nav_footer}></Navigation>
      </section>
      <section>
        <Btn type="dark_link" text="GET AN INVITE"></Btn>
        <p className="text grey">Copyright 2019. All Rights Reserved</p>
      </section>
    </FooterContainer>
  );
}
