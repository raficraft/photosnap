import { S } from "../../styled/function";
import styled from "styled-components";

export const FeaturesContainer = styled.section`
  ${S.flex("column", "flex-start", "flex-start")}
  ${S.responsiveContainer("350px")}
  padding : 0 0 80px 0;

  @media screen and (max-width: 1280px) {
    ${S.responsiveContainer("339px")}
  }

  .svgContainer {
    ${S.size("72px")}
    margin: 0 auto 3rem auto;
    ${S.flex("column", "flex-start", "center")}

    svg {
      margin: auto;
      ${S.size("72px")}
    }
  }

  header {
    margin: 0 0 1rem 0;
  }

  header,
  .text {
    text-align: center;
  }
`;
