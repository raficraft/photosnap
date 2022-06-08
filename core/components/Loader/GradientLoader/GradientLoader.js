import React, { useLayoutEffect, useRef, useState } from "react";
import { Logo, PhotosnapTitle } from "../../../assets/svg/Logo/Logo";
import Portal from "../../Portal/Portal";
import { FooterLoader, GradientLoaderContainer } from "./GradientLoader_css";

export default function GradientLoader({ height }) {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <GradientLoaderContainer>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </GradientLoaderContainer>
        <FooterLoader>
          <a className="logo_container">
            <Logo className="logo"></Logo>
            <PhotosnapTitle></PhotosnapTitle>
          </a>
        </FooterLoader>
      </div>
    </>
  );
}
