import { S } from "../../styled/function";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  ${S.flex("row", "space-between", "center")}
  width : 1440px;
  padding: 16px 165px;

  .logo_container {
    ${S.flex("row", "space-between", "center")}
    transition: .5s;

    &:hover {
      transition: 0.5s;
      transform: scale(1.1);
    }
    svg {
      margin: auto auto;
      display: block;
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
