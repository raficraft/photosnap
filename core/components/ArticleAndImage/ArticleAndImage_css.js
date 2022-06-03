import { S } from "../../styled/function";
import styled from "styled-components";

export const ArticleImage = styled.section`
  .articleAndImage--whiteReverse {
    ${S.flex("row-reverse", "flex-start", "flex-start")}
  }

  .articleAndImage--black {
    ${S.flex("row", "flex-start", "flex-start")}
    background-color: black;
    h1,
    .text {
      color: white;
    }
    .button {
      background-color: black;
      color: white;
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
    ${S.responsiveContainer("610px")}
    ${S.flex("column", "center", "center")}
  }

  article {
    ${S.responsiveContainer("387px")}
    h1 {
      margin: 0 0 1.5rem 0;
    }

    .text {
      margin: 0 0 48px 0;
    }
  }

  .image_container {
    width: 830px;
    margin-bottom: -4px;
  }
`;
