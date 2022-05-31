import { css } from "styled-components";

const space = 5;

export const S = {
  flex: (
    direction = "row",
    justify = "flex-start",
    align = "flex-start",
    wrap = "nowrap"
  ) => css`
    display: flex;
    flex-direction: ${direction};
    flex-wrap: ${wrap};
    justify-content: ${justify};
    align-content: ${align};
  `,

  size: (width, height = width) => css`
    width: ${width};
    height: ${height};
  `,

  emptyAbsolute: () => css`
    content: " ";
    position: absolute;
  `,

  flexCenter: (direction, wrap = "nowrap") => css`
    display: flex;
    flex-direction: ${direction};
    flex-wrap: ${wrap};
    justify-content: center;
    align-items: center;
  `,

  round: (radius) => css`
    border-radius: ${radius};
  `,
  responsiveContainer: (maxWidth = "100%") => css`
    max-width: ${maxWidth};
    width: 100%;
  `,

  spacing: (value) => {
    const val = value * space;
    return val + "px";
  },
  shadow: (color) => {
    return `box-shadow : 0 2px 4px ${color}`;
  },

  centerAbsolute: (size) => {
    return `calc(50% - ${size} / 2)`;
  },

  iframeResponsive: (height, width) => css`
    overflow: hidden;
    padding-top: percentage(height / width);
    position: relative;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  `,
};
