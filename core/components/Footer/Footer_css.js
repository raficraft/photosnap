import { S } from "../../styled/function";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: black;
  padding: 64px 165px;
  ${S.flex("row", "space-between", "center")}

  .left {
    ${S.flex("column", "space-between", "flex-start")}
    margin : 0 100px 0 0;

    .logo {
      margin: 0 0.5rem 0 0;
    }

    nav {
      display: none;
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
    }
  }

  .right {
    ${S.flex("column", "space-between", "flex-end")}

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
