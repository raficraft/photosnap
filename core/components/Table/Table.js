import React from "react";
import { IconCheck } from "../../data/features_svg";
import { TableContainer } from "./Table_css";

export default function Table() {
  return (
    <TableContainer>
      <caption>Compare</caption>
      <thead>
        <tr>
          <th scope="col" className="text_left first-col">
            The features
          </th>
          <th scope="col" className="next_col">
            basic
          </th>
          <th scope="col" className="next_col">
            pro
          </th>
          <th scope="col" className="next_col">
            Business
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" className="text_left">
            Unlimited story posting
          </th>
          <td>
            <IconCheck />
          </td>
          <td>
            <IconCheck />
          </td>
          <td>
            <IconCheck />
          </td>
        </tr>
        <tr>
          <th scope="row" className="text_left">
            Unlimited Photo upload
          </th>
          <td>
            <IconCheck />
          </td>
          <td>
            <IconCheck />
          </td>
          <td>
            <IconCheck />
          </td>
        </tr>
      </tbody>
    </TableContainer>
  );
}
