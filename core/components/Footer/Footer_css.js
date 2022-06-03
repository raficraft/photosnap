import { S } from "../../styled/function";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: black;
  padding: 64px 165px;
  ${S.flex("row", "space-between", "center")}

  @media screen and (max-width: 1036px) {
    padding: 64px 100px;
  }

  @media screen and (max-width: 790px) {
    padding: 64px 40px;
  }

  @media screen and (max-width: 660px) {
    ${S.flex("column", "center", "center")}
  }

  .left {
    ${S.flex("column", "space-between", "flex-start")}
    margin : 0 100px 0 0;

    @media screen and (max-width: 1036px) {
      height: 156px;
      margin: 0;
    }

    @media screen and (max-width: 660px) {
      ${S.flex("column", "flex-start", "center")}
      height: 467px;

      header {
        ${S.flex("row", "center", "center")}
      }

      .social_icon {
        order: 1;
        margin: 32px 0 50px 0;
      }
    }

    .logo {
      margin: 0 0.5rem 0 0;
    }

    nav {
      display: none;

      @media screen and (max-width: 1036px) {
        display: flex;
        margin: 2rem 0;
        gap: 26px;
      }
      @media screen and (max-width: 790px) {
        .nav_link {
          font-size: 12px;
        }
      }

      @media screen and (max-width: 660px) {
        ${S.flex("column", "center", "center")}
        order: 2;
      }
    }

    .social_icon {
      gap: 1.5rem;
      ${S.flex("row", "flex-start", "flex-start")}

      .svgBox {
        ${S.size("1.5rem")};
        position: relative;
        cursor: pointer;

        .svg-icon {
          position: absolute;
          top: 0;
          left: 0;
          transition: 0.5s;

          &--hover {
            opacity: 0;
          }
        }

        &:hover {
          .svg-icon {
            opacity: 0;
          }

          .svg-icon--hover {
            opacity: 1;
          }
        }
      }

      svg {
        ${S.size("1.5rem")}/* margin-right: 0.875rem; */
      }
    }
  }

  .middle {
    flex: 1;
    nav {
      ${S.flex("column", "space-between", "flex-start")}
      gap : 1.25rem;

      @media screen and (max-width: 1036px) {
        display: none;
      }
    }
  }

  .right {
    ${S.flex("column", "space-between", "flex-end")}

    @media screen and (max-width: 660px) {
      ${S.flex("column", "center", "center")}
    }

    .button {
      align-self: flex-end;
      background-color: black;
      color: white;
      .arrow,
      .arrow:before,
      .arrow:after {
        background-color: white;
      }
    }
  }

  a {
    color: white;
    transition: 0.5s;

    &:hover {
      transition: 0.5s;
      color: rgba(76, 76, 76, 1);
    }
  }
`;
