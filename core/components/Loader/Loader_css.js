import { S } from "../../styled/function";
import { anim } from "../../styled/animation";
import styled from "styled-components";

export const LoaderContainer = styled.div`
  position: relative;
  ${S.size("200px")};
  content: " ";
  margin: 120px auto;
  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(calc(18deg * var(--i)));
    &::before {
      ${S.emptyAbsolute()}
      top : 0;
      left: 0;
      ${S.size("25px")}
      border-radius: 50%;
      background-color: black;
      animation: ${anim.loader} 2s linear infinite;
      animation-delay: calc(0.1s * var(--i));
      transform: scale(0);
    }
  }
  .rocket {
    position: absolute;
    top: 0;
    left: 0;
    ${S.size("100%")};
    animation: ${anim.rotating} 2s linear infinite;
    animation-delay: -1s;
    &:before {
      position: absolute;
      bottom: -16px;
      right: -16px;
      content: " ";
      background-image: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='4em' height='4em' viewBox='0 0 512 512'%3E%3Cpath fill='black' d='M477.64 38.26a4.75 4.75 0 0 0-3.55-3.66c-58.57-14.32-193.9 36.71-267.22 110a317 317 0 0 0-35.63 42.1c-22.61-2-45.22-.33-64.49 8.07C52.38 218.7 36.55 281.14 32.14 308a9.64 9.64 0 0 0 10.55 11.2l87.31-9.63a194.1 194.1 0 0 0 1.19 19.7a19.53 19.53 0 0 0 5.7 12L170.7 375a19.59 19.59 0 0 0 12 5.7a193.53 193.53 0 0 0 19.59 1.19l-9.58 87.2a9.65 9.65 0 0 0 11.2 10.55c26.81-4.3 89.36-20.13 113.15-74.5c8.4-19.27 10.12-41.77 8.18-64.27a317.66 317.66 0 0 0 42.21-35.64C441 232.05 491.74 99.74 477.64 38.26ZM294.07 217.93a48 48 0 1 1 67.86 0a47.95 47.95 0 0 1-67.86 0Z' %3E%3C/path%3E%3Cpath fill='black' d='M168.4 399.43c-5.48 5.49-14.27 7.63-24.85 9.46c-23.77 4.05-44.76-16.49-40.49-40.52c1.63-9.11 6.45-21.88 9.45-24.88a4.37 4.37 0 0 0-3.65-7.45a60 60 0 0 0-35.13 17.12C50.22 376.69 48 464 48 464s87.36-2.22 110.87-25.75A59.69 59.69 0 0 0 176 403.09c.37-4.18-4.72-6.67-7.6-3.66Z' %3E%3C/path%3E%3C/svg%3E");
      ${S.size("4rem")}
      transform: rotate(180deg);
    }
  }
`;
