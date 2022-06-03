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
    ${S.flex("row", "flex-start", "flex-start")}
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
    ${S.responsiveContainer("44%")}
    ${S.flex("column", "center", "center")}

    @media screen and (max-width : 1280px) {
      ${S.responsiveContainer("56%")}
      padding : 5rem 0;
    }

    @media screen and (max-width: 767px) {
      ${S.responsiveContainer("100%")}
      padding: 3rem 5rem;
    }
  }

  article {
    ${S.responsiveContainer("63%")}
    @media screen and (max-width: 767px) {
      ${S.responsiveContainer("100%")}
    }
    h1 {
      margin: 0 0 1.5rem 0;
    }
    .text {
      margin: 0 0 48px 0;
    }
  }

  .image_container {
    ${S.responsiveContainer("56%")}
    align-self: stretch;
    overflow: hidden;
    ${S.flex("row", "center", "center")}

    @media screen and (max-width: 1280px) {
      ${S.responsiveContainer("44%")}
    }
    @media screen and (max-width: 767px) {
      ${S.responsiveContainer("100%")}
      flex: 1;
    }
  }

  @media screen and (max-width: 767px) {
    .articleAndImage {
      ${S.flex("column-reverse", "center", "center")}
    }
  }
`;
