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
    ${S.responsiveContainer("42.5%")}
    ${S.flex("column", "center", "center")}

    @media screen and (max-width : 1280px) {
      ${S.responsiveContainer("56%")}
      padding : 5rem 1.5rem;
    }

    @media screen and (max-width: 600px) {
      ${S.responsiveContainer("100%")}
      padding: 4.125rem 1.5rem;
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
      margin: 0 0 3rem 0;
      @media screen and (max-width: 767px) {
        margin: 0 0 1.5rem 0;
      }
    }
  }

  .image_container {
    ${S.responsiveContainer("57.5%")}
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

  .articleAndImage--multi {
    @media screen and (max-width: 800px) {
      ${S.flex("row", "space-between", "center")}
    }
    @media screen and (max-width: 600px) {
      ${S.flex("column-reverse", "space-between", "center")}
    }
    .article_container {
      ${S.responsiveContainer("41.2%")}
      @media screen and (max-width: 800px) {
        ${S.responsiveContainer("64.3%")}
      }
      @media screen and (max-width: 600px) {
        ${S.responsiveContainer("100%")}
      }
    }
    .image_container {
      ${S.responsiveContainer("57.8%")}
      align-self: stretch;
      overflow: hidden;
      object-fit: cover;
      ${S.flex("row", "center", "center")}
      @media screen and (max-width: 800px) {
        height: 100%;
        ${S.responsiveContainer("35.7%")}
      }

      @media screen and (max-width: 600px) {
        ${S.responsiveContainer("100%")}
      }
    }
  }

  .articleAndImage--absolute {
    background-color: transparent;
    position: relative;
    .article_container {
      ${S.fullAbsolute()}
      ${S.responsiveContainer("100%")}
      padding : 0 165px;

      color: black;
      z-index: 300;
      ${S.flex("row", "space-between", "center")}

      article {
        ${S.flex("row", "space-between", "center")}
        ${S.responsiveContainer("100%")}
        header {
          ${S.responsiveContainer("400px")}
        }
      }
      footer {
        ${S.flexCenter()}
      }

      .button {
        background-color: transparent;
      }
    }
    .image_container {
      ${S.responsiveContainer("100%")}
    }
  }
`;
