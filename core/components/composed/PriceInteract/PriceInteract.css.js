import { S } from "../../../styled/function";
import styled from "styled-components";

export const PriceInteractContainer = styled.section`
  padding: 120px 39px 0 39px;

  @media screen and (max-width: 1400px) {
    padding: 112px 39px;
  }

  @media screen and (max-width: 600px) {
    padding: 64px 29px;
  }

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
