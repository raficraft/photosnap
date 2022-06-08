import React from "react";
import { IconCheck } from "../../data/features_svg";
import { TableMobileContainer } from "./TableMobile_css";

export default function TableMobile() {
  return (
    <TableMobileContainer>
      <h4>the Features</h4>

      <table>
        <caption className="bold text_left">UNLIMITED STORY POSTING</caption>
        <thead>
          <tr>
            <th scope="col">basic</th>
            <th scope="col">pro</th>
            <th scope="col">business</th>
          </tr>
        </thead>
        <tbody>
          <tr>
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
      </table>

      <hr></hr>

      <table>
        <caption className="bold text_left">UNLIMITED PHOTO UPLOAD</caption>
        <thead>
          <tr>
            <th>basic</th>
            <th>pro</th>
            <th>business</th>
          </tr>
        </thead>
        <tbody>
          <tr>
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
      </table>

      <hr></hr>

      <table>
        <caption className="bold text_left">EMBEDDING CUSTOM CONTENT</caption>
        <thead>
          <tr>
            <th>basic</th>
            <th>pro</th>
            <th>business</th>
          </tr>
        </thead>
        <tbody>
          <tr>
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
      </table>

      <hr></hr>

      <table>
        <caption className="bold text_left">CUSTOMIZE METADATA</caption>
        <thead>
          <tr>
            <th>basic</th>
            <th>pro</th>
            <th>business</th>
          </tr>
        </thead>
        <tbody>
          <tr>
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
      </table>

      <hr></hr>

      <table>
        <caption className="bold text_left">ADVANCED METRICS</caption>
        <thead>
          <tr>
            <th>basic</th>
            <th>pro</th>
            <th>business</th>
          </tr>
        </thead>
        <tbody>
          <tr>
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
      </table>

      <hr></hr>

      <table>
        <caption className="bold text_left">PHOTO DOWNLOADS</caption>
        <thead>
          <tr>
            <th>basic</th>
            <th>pro</th>
            <th>business</th>
          </tr>
        </thead>
        <tbody>
          <tr>
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
      </table>

      <hr></hr>

      <table>
        <caption className="bold text_left">SEARCH ENGINE INDEXING</caption>
        <thead>
          <tr>
            <th>basic</th>
            <th>pro</th>
            <th>business</th>
          </tr>
        </thead>
        <tbody>
          <tr>
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
      </table>

      <hr></hr>

      <table>
        <caption className="bold text_left">SEARCH ENGINE INDEXING</caption>
        <thead>
          <tr>
            <th>basic</th>
            <th>pro</th>
            <th>business</th>
          </tr>
        </thead>
        <tbody>
          <tr>
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
      </table>

      <hr></hr>
    </TableMobileContainer>
  );
}
