import { S } from "../../styled/function";
import styled from "styled-components";

export const PriceCardContainer = styled.div`
  width: 350px;
  @media screen and (min-width: 600px) and (max-width: 1400px) {
    width: 100%;

    .card_content,
    .price_aside {
      width: 50%;
      align-self: stretch;
    }
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
  .cardContainer {
    ${S.size("100%", "407px")};
    ${S.flexCenter("column")};
    padding: 56px 40px 40px 40px;
    text-align: center;

    header,
    .price,
    footer,
    .button {
      width: 100%;
      ${S.flex("column", "center", "center")}
    }

    h3,
    h2 {
      margin: 0 0 18px 0;
      text-transform: capitalize;
    }

    header,
    .price {
      margin: 0 0 40px 0;
    }

    p {
      color: rgba(0, 0, 0, 0.6);
    }

    @media screen and (min-width: 600px) and (max-width: 1400px) {
      ${S.size("100%", "270px")};
      ${S.flex("row", "space-around", "flex-start")}
      .price {
        display: none;
      }
      h3,
      p {
        text-align: left;
        width: 100%;
      }
    }
  }

  .bigCard {
    ${S.size("350px", "470px")}
    @media screen and (min-width: 600px) and (max-width: 1400px) {
      ${S.size("100%", "270px")};
    }
    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }

  .light {
    background-color: #f5f5f5;
  }

  .dark {
    background-color: black;
    color: white;
    p {
      color: rgba(255, 255, 255, 0.6);
    }
  }

  .price_aside {
    display: none;
    @media screen and (min-width: 600px) and (max-width: 1400px) {
      display: block;
      align-self: flex-start;
      ${S.flex("row", "flex-end", "flex-start")}
    }
    &--content {
      ${S.flex("column", "flex-start", "flex-end")}
      p {
        width: 100%;
        text-align: right;
      }
    }
  }
`;
