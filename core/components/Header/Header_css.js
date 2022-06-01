import { S } from "../../styled/function";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  ${S.flex("row", "space-between", "center", "wrap")}
  opacity:1;
  width: 100%;
  padding: 16px 165px;
  background-color: white;

  @media screen and (max-width: 1023px) {
    padding: 16px 65px;
  }
  @media screen and (max-width: 800px) {
    padding: 16px 39px;
  }
  @media screen and (max-width: 767px) {
    ${S.flex("column", "flex-start", "flex-start", "wrap")}
    padding: 28px 0px;
    position: relative;
    z-index: 100;
  }

  .logo_container {
    ${S.flex("row", "space-between", "center")}
    transition: .5s;

    @media screen and (max-width: 767px) {
      ${S.flex("row", "flex-start", "flex-start", "no-wrap")}
      padding: 0px 24px;
    }

    &:hover {
      transition: 0.5s;
      transform: scale(1.1);
    }
    svg {
      margin: auto auto;
      @media screen and (max-width: 767px) {
        margin: 0;
      }
    }

    .logo {
      margin-right: 0.5rem;
    }
  }

  nav {
    ${S.flex("row", "space-between", "center")}
    gap : 2.5rem;
    a {
      ${S.flexCenter()}
      transition : .5s;

      &:hover {
        transition: 0.5s;
        color: var(--grey);
      }
    }
  }
`;
