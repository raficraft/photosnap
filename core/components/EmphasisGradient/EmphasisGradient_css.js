import { S } from "../../styled/function";
import styled from "styled-components";

export const EmphasisContainer = styled.span`
  /* Rectangle */
  /* Rectangle */

  position: absolute;
  width: 6px;
  height: 304px;
  left: 0;
  top: ${S.centerAbsolute("304px")};
  background: linear-gradient(
    26.57deg,
    #ffc593 0%,
    #bc7198 43.29%,
    #5a77ff 83.33%
  );

  @media screen and (max-width: 767px) {
    width: 128px;
    height: 6px;
    top: 0;
    left: 30px;
  }
`;
