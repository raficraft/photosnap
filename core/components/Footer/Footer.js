import React from "react";
import { Logo, PhotosnapTitle } from "../../assets/svg/Logo/Logo";
import { nav_footer } from "../../data/navigation_data";
import {
  IconFacebook,
  IconFacebookColor,
  IconInstagram,
  IconInstagramColor,
  IconPinterest,
  IconPinterestColor,
  IconTwitter,
  IconTwitterColor,
  IconYoutubeCircle,
  IconYoutubeCircleColor,
} from "../../data/social_icon";
import Btn from "../btn/Btn/Btn";
import Navigation from "../Navigation/Navigation";
import { FooterContainer } from "./Footer_css";

export default function Footer() {
  return (
    <FooterContainer>
      <section className="left">
        <header>
          <Logo className="logo"></Logo>
          <PhotosnapTitle color="white"></PhotosnapTitle>
        </header>
        <Navigation array={nav_footer}></Navigation>
        <footer className="social_icon">
          <div className="svgBox">
            <IconFacebook className="svg-icon" color="white"></IconFacebook>
            <IconFacebookColor className="svg-icon svg-icon--hover"></IconFacebookColor>
          </div>
          <div className="svgBox">
            <IconYoutubeCircle
              className="svg-icon"
              color="white"
            ></IconYoutubeCircle>
            <IconYoutubeCircleColor className="svg-icon svg-icon--hover"></IconYoutubeCircleColor>
          </div>
          <div className="svgBox">
            <IconTwitter className="svg-icon" color="white"></IconTwitter>
            <IconTwitterColor className="svg-icon svg-icon--hover"></IconTwitterColor>
          </div>
          <div className="svgBox">
            <IconPinterest className="svg-icon" color="white"></IconPinterest>
            <IconPinterestColor className="svg-icon svg-icon--hover"></IconPinterestColor>
          </div>
          <div className="svgBox">
            <IconInstagram className="svg-icon" color="white"></IconInstagram>
            <IconInstagramColor className="svg-icon svg-icon--hover"></IconInstagramColor>
          </div>
        </footer>
      </section>
      <section className="middle">
        <Navigation array={nav_footer}></Navigation>
      </section>
      <section className="right">
        <Btn type="arrow_link" text="GET AN INVITE"></Btn>
        <p className="text grey">Copyright 2019. All Rights Reserved</p>
      </section>
    </FooterContainer>
  );
}
