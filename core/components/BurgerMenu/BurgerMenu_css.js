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
    ${S.flex("column", "flex-start", "center", "wrap")}
    nav {
      ${S.flex("column", "flex-start", "center", "wrap")}
      z-index: 50;
    }
  }
`;

export const BurgerIcon = styled.span`
  content: " ";
  background-color: red;
  position: absolute;
  ${S.size("24px")};
  right: 40px;
  top: 28px;
  z-index: 500;
`;
