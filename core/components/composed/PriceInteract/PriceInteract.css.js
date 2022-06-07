import { S } from "../../../styled/function";
import styled from "styled-components";

export const PriceInteractContainer = styled.section`
  padding: 120px 39px;

  header {
    ${S.flexCenter()}
    margin : 0 0 3rem 0;
  }

  .contentPrice {
    ${S.flex("row", "center", "center")}
    align-items: center;
    gap: 30px;
    @media screen and (max-width: 1080px) {
      ${S.flex("column", "center", "center")}
    }
  }
`;
