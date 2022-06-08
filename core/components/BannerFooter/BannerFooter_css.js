import { S } from "../../styled/function";
import styled from "styled-components";

export const BannerFooterContainer = styled.section`
  position: relative;
  overflow: hidden;

  .banner_content {
    ${S.fullAbsolute()};

    h1,
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

  .banner_content--hero {
    padding: 122px 112px;
    @media screen and (max-width: 960px) {
      padding: 122px 39px;
    }

    article {
      color: white;
      ${S.responsiveContainer("387px")}

      p,h5 {
        margin: 0 0 1.5rem 0;
      }
      h1 {
        line-height: 3rem;
        width: 70%;
        margin: 0 0 1rem 0;
      }
    }
  }

  @media screen and (max-width: 500px) {
    .banner_content--hero {
      position: relative;
      background-color: black;
      padding: 48px 29px;
      .banner_content--hero {
        p,
        h1 {
          width: 100%;
        }
      }
    }
  }

  .banner_content--footer {
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

  .emphasisGradient {
    content: "";
    position: absolute;
    width: 6px;
    left: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(
      26.57deg,
      #ffc593 0%,
      #bc7198 43.29%,
      #5a77ff 83.33%
    );

    @media screen and (max-width: 500px) {
      width: 128px;
      height: 6px;
      top: 0;
      left: 30px;
      background: linear-gradient(
        4.57deg,
        #ffc593 0%,
        #bc7198 43.29%,
        #5a77ff 83.33%
      );
    }
  }
`;
