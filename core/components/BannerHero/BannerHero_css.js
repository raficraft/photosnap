import { S } from "../../styled/function";
import styled from "styled-components";

export const BannerHeroContainer = styled.section`
  background-color: black;
  color: white;
  ${S.flex("row", "space-between", "center", "nowrap")}

  @media screen and (max-width: 599px) {
    ${S.flex("column-reverse", "space-between", "center")}
  }

  .bannerHero_content {
    background-color: black;
    @media screen and (min-width: 961px) {
      ${S.responsiveContainer("42%")}
    }

    @media screen and (min-width: 601px) {
      ${S.responsiveContainer("64.5%")}
    }

    @media screen and (max-width: 600px) {
      ${S.responsiveContainer("100%")}
    }
  }

  .image_container {
    ${S.flex("row", "flex-end", "center", "nowrap")}
  }

  .image_0 {
    ${S.responsiveContainer("58%")}

    @media screen and (max-width: 961px) {
      display: none;
    }
  }
  .image_1 {
    ${S.responsiveContainer("35.5%")}
    @media screen and (min-width: 960px) {
      display: none;
    }
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
  .image_2 {
    background-color: green;
    ${S.flex("row", "center", "center")}
    ${S.responsiveContainer("100%")}

    span {
      flex: 1;
    }

    @media screen and (min-width: 599px) {
      display: none;
    }
  }
`;
