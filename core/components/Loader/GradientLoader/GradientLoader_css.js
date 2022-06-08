import { S } from "../../../styled/function";
import { anim } from "../../../styled/animation";
import styled from "styled-components";

const border = "20px";

export const GradientLoaderContainer = styled.div`
  position: relative;
  ${S.size("300px")};
  content: " ";
  position: absolute;
  top: ${S.centerAbsolute("300px")};
  left: ${S.centerAbsolute("300px")};
  margin: auto auto;
  border-radius: 50%;
  background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
  animation: ${anim.rotateGradientLoader} 1s linear infinite;

  span {
    position: absolute;
    ${S.size("100%")};
    top: 0;
    left: 0;
    content: " ";
    margin: 20px auto;
    border-radius: 50%;
    background: linear-gradient(#ffc593, #bc7198, #5a77ff);
    margin: 0;
  }
  span:nth-child(1) {
    filter: blur(5px);
  }
  span:nth-child(2) {
    filter: blur(10px);
  }
  span:nth-child(3) {
    filter: blur(25px);
  }
  span:nth-child(4) {
    filter: blur(50px);
  }

  &:after {
    ${S.emptyAbsolute()}
    top : ${border};
    left: ${border};
    right: ${border};
    bottom: ${border};
    background-color: white;
    border-radius: 50%;
    box-shadow: 1px 1px 10px 4px inset rgba(124, 124, 124, 1);
  }
`;

export const WrapperLoader = styled.footer`
  height: 100vh;
  position: relative;
  ${S.flexCenter()}
  a {
    z-index: 100;
    opacity: 0.9;
    gap: 1rem;
    .logo {
      margin: 0 0.5rem 0 0;
    }
  }
`;
