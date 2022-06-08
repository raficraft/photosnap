import { S } from "../../styled/function";
import styled from "styled-components";

export const ArticleImage = styled.section`
  .text {
    color: rgba(0, 0, 0, 0.6);
  }
  .articleAndImage--whiteReverse {
    ${S.flex("row-reverse", "space-between", "flex-start")}
  }

  .articleAndImage--black {
    ${S.flex("row", "space-between", "flex-start")}
    background-color: black;
    h1 {
      color: white;
    }
    .text {
      color: rgba(255, 255, 255, 0.6);
    }
    .button {
      background-color: black;
      color: rgba(255, 255, 255, 1);
    }
    .arrow,
    .arrow::before,
    .arrow:after {
      background-color: white;
    }
  }

  .articleAndImage--white {
    ${S.flex("row", "flex-start", "flex-start")}
  }

  .article_container {
    position: relative;
    ${S.responsiveContainer("42.5%")}
    ${S.flex("column", "center", "center")}

    @media screen and (max-width : 1280px) {
      ${S.responsiveContainer("56%")}
      padding : 5rem 1.5rem;
    }
    @media screen and (max-width: 840px) {
      ${S.responsiveContainer("64.5%")}
    }

    @media screen and (max-width: 600px) {
      ${S.responsiveContainer("100%")}
      padding: 4.125rem 1.5rem;
    }
  }

  article {
    ${S.responsiveContainer("63%")}
    @media screen and (max-width: 840px) {
      ${S.responsiveContainer("78%")}
    }
    @media screen and (max-width: 767px) {
      ${S.responsiveContainer("100%")}
    }
    h1 {
      margin: 0 0 1.5rem 0;
    }
    .text {
      margin: 0 0 3rem 0;
      @media screen and (max-width: 767px) {
        margin: 0 0 1.5rem 0;
      }
    }
  }

  .image_container {
    ${S.responsiveContainer("57.5%")}
    ${S.flex("row", "center", "center")}
    flex: 1;

    @media screen and (max-width: 1280px) {
      ${S.responsiveContainer("44%")}
    }
    @media screen and (max-width: 840px) {
      ${S.responsiveContainer("35.5%")}
    }
    @media screen and (max-width: 767px) {
      ${S.responsiveContainer("100%")}
    }
  }

  @media screen and (max-width: 767px) {
    .articleAndImage {
      ${S.flex("column-reverse", "center", "center")}
    }
  }

  .emphasisGradient {
    content: "";
    position: absolute;
    width: 6px;
    height: 304px;
    left: 0;
    top: ${S.centerAbsolute("304px")};
    background: linear-gradient(
      26.57deg,
      #ffc593 0%,
      #bc7198 43.29%,
      #5a77ff 83.33%
    );

    @media screen and (max-width: 767px) {
      width: 128px;
      height: 6px;
      top: 0;
      left: 30px;
      background: linear-gradient(
        4.57deg,
        #ffc593 0%,
        #bc7198 43.29%,
        #5a77ff 83.33%
      );
    }
  }
`;
