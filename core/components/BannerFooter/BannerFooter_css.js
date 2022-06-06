import { S } from "../../styled/function";
import styled from "styled-components";

export const BannerFooterContainer = styled.section`
  position: relative;
  overflow: hidden;

  .banner_content {
    ${S.fullAbsolute()};
    padding: 68px 165px;
    ${S.flex("row", "space-between", "center")}
    @media screen and (max-width: 1080px) {
      padding: 68px 40px;
    }
    @media screen and (max-width: 600px) {
      padding: 68px 30px;
      ${S.flex("row", "space-between", "center")}
    }

    header {
      ${S.responsiveContainer("400px")}
    }
    aside {
      ${S.flexCenter()}
    }
    h2,
    .button {
      color: white;
    }
    .arrow,
    .arrow:before,
    .arrow:after {
      background-color: white;
    }
  }
  .image_container {
    margin-bottom: -3px;
    ${S.flex("row", "center", "center")}
  }

  .image_0 {
    @media screen and (max-width: 769px) {
      display: none;
    }
  }
  .image_1 {
    @media screen and (min-width: 769px) {
      display: none;
    }
    @media screen and (max-width: 376px) {
      display: none;
    }
  }
  .image_2 {
    @media screen and (min-width: 376px) {
      display: none;
    }
  }
`;
