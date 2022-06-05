import { S } from "../../styled/function";
import styled from "styled-components";

export const StoriesContainer = styled.section`
  width: 25%;
  @media screen and (max-width: 960px) {
    width: 50%;
  }

  @media screen and (max-width: 520px) {
    width: 100%;
  }

  .stories {
    position: relative;

    &_mask {
      position: relative;
      top: 0;
      left: 0;
      transition: 0.5s;
      box-sizing: content-box;
      cursor: pointer;
      width: 100%;
      height: 100%;

      box-shadow: 0px 4px 4px -4px rgba(0, 0, 0, 0.25);
      overflow: hidden;

      &:hover {
        transition: 0.5s;
        transform: translate(0, -1.5rem);
        .emphasisColor {
          transition: 0.5s;
          opacity: 1;
        }
      }

      .emphasisColor {
        content: " ";
        height: 6px;
        width: 100%;
        display: block;
        z-index: 300;
        position: absolute;
        bottom: 0;
        opacity: 0;
        transition: 0.5s;
      }
    }

    &_content {
      position: absolute;
      bottom: 0;
      left: 0;
      color: white;
      padding: 40px;
      width: 100%;
      header {
        margin: 0 0 1rem 0;
      }
      footer {
        width: 100%;
        border-top: 1px solid rgba(189, 189, 189, 0.4);
        padding: 1.25rem 0 0 0;
        margin: 1rem 0 0 0;
      }
      .button {
        background-color: transparent;
        min-height: 20px;
        width: 100%;
        justify-content: space-between;
        .arrow,
        .arrow::before,
        .arrow:after {
          background-color: white;
        }
      }
    }

    &_gradient {
      ${S.fullAbsolute()}
      background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 31%, rgba(0,0,0,0.2) 65%, rgba(0,0,0,0.8) 100%);
    }
  }
`;
