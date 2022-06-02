import { S } from "../../styled/function";
import styled from "styled-components";

export const BurgerContainer = styled.aside`
  ${S.flex("column", "flex-start", "flex-start", "wrap")}
  width: 100%;
  height: 100vh;
  transform: translateY(-140%);
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  transition: 1s;
  z-index: 20;
  padding: 72px 0 0 0;

  &[data-isopen="true"] {
    transition: 1s;
    transform: translateY(0px);
  }
  .nav_container {
    background-color: white;
    width: 100%;
    padding: 0 32px 32px 32px;
    ${S.flex("column", "flex-start", "center", "wrap")}
    nav {
      ${S.flex("column", "flex-start", "center", "wrap")}
      z-index: 50;
      gap: 20px;
      padding: 32px 0 20px 0;
      border-bottom: 1px solid var(--grey);
      width: 100%;
      margin: 0 0 20px 0;
    }

    .button {
      width: 100%;
    }
  }
`;

export const BurgerIcon = styled.span`
  content: " ";
  position: absolute;
  ${S.size("20px", "16px")};
  right: 26px;
  top: 28px;
  z-index: 500;

  .burger_item {
    ${S.emptyAbsolute()}
    ${S.size("100%", "1px")}
    background-color: black;
    transform-origin: center center;
    transition: 0.8s;

    &--top {
      top: 4px;
    }
    &--bottom {
      bottom: 4px;
    }
  }

  &[data-isopen="true"] {
    .burger_item {
      &--top {
        transition: 0.8s;
        transform: translateY(4px) rotate(45deg);
      }
      &--bottom {
        transition: 0.8s;
        transform: translateY(-4px) rotate(-45deg);
      }
    }
  }
`;
