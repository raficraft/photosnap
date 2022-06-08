import { S } from "../../styled/function";
import styled from "styled-components";

export const TableMobileContainer = styled.div`
  width: 100%;

  h4 {
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 2px;
    padding: 0 0 1.5rem 0;
    margin: 0 0 1.5rem 0;
    border-bottom: 1px solid;
  }
  table {
    width: 100%;

    caption {
      margin: 0 0 1rem 0;
    }

    caption,
    th {
      text-align: left;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 12px;
    }
    th,
    td {
      width: 33%;
      padding: 0.25rem 0;
    }
    tr th {
      color: rgba(0, 0, 0, 0.6);
    }

    svg {
      font-size: 1rem;
    }
  }
  hr {
    height: 1px;
    width: 100%;
    background-color: #dfdfdf;
    margin: 1.5rem 0;
    border: none;
  }
`;
