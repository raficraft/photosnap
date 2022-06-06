import { S } from "../../styled/function";
import styled from "styled-components";

export const BannerHeroContainer = styled.section`
  background-color: black;
  color: white;
  ${S.flex("row", "space-between", "center", "nowrap")}
  ${S.responsiveContainer("100%")}
 

  @media screen and (max-width: 599px) {
    ${S.flex("column-reverse", "space-between", "center")}
  }

  .bannerHero_content {
    background-color: black;
    padding: 173px 112px;
    max-height: 490px;
    h1 {
      margin: 0 0 1rem 0;
    }

    @media screen and (max-width: 1100px) {
      padding: 173px 54px;
    }

    @media screen and (max-width: 601px) {
      padding: 72px 28px;
    }
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
    object-fit:cover;
    span {
      align-self: stretch;
      flex: 1;
    }
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
    ${S.responsiveContainer("100%")}

    span {
      flex: 1;
    }

    @media screen and (min-width: 599px) {
      display: none;
    }
  }
`;
