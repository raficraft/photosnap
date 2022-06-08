import React, { useLayoutEffect, useRef, useState } from "react";
import { Logo, PhotosnapTitle } from "../../../assets/svg/Logo/Logo";
import Portal from "../../Portal/Portal";
import {
  FooterLoader,
  GradientLoaderContainer,
  WrapperLoader,
} from "./GradientLoader_css";

export default function GradientLoader({ height }) {
  return (
    <WrapperLoader>
      <GradientLoaderContainer>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
      </GradientLoaderContainer>
      <footer>
        <a className="logo_container">
          <Logo className="logo"></Logo>
          <PhotosnapTitle></PhotosnapTitle>
        </a>
      </footer>
    </WrapperLoader>
  );
}
