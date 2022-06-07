import { S } from "../../styled/function";
import styled from "styled-components";

export const TableContainer = styled.table`
  margin: auto auto;
  font-weight: bold;
  ${S.responsiveContainer("731px")}
  text-transform: uppercase;
  font-size: 12px;
  tr th:nth-child(1) {
    text-indent: 1.5rem;
    flex: 1;
  }
  thead {
    border-bottom: 1px solid black;
    .next_col {
      width: 140px;
    }
  }
  caption {
    font-size: 40px;
    line-height: 3rem;
    letter-spacing: 4.17px;
    margin-bottom: 1.25rem;
  }
  th,
  td {
    padding: 25px 0;
  }
  tbody {
    th {
      ${S.flex("row", "flex-start", "center")}
    }
    tr {
      width: 100%;
      border-bottom: 1px solid #dfdfdf;

      td {
        flex: 1;
        text-align: center;
      }
    }
    svg {
      font-size: 1.25rem;
    }
  }
`;
