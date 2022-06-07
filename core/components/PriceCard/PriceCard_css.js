import { S } from "../../styled/function";
import styled from "styled-components";

export const PriceCardContainer = styled.div`
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
  }

  header,
  .price {
    margin: 0 0 40px 0;
  }
  .cardContainer {
    ${S.size("350px", "407px")};
    ${S.flexCenter("column")};
    padding: 56px 40px 40px 40px;
    text-align: center;

    p {
      color: rgba(0, 0, 0, 0.6);
    }
  }

  .bigCard {
    ${S.size("350px", "470px")}
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
`;
