import "@testing-library/jest-dom";
import { render, prettyDOM, waitFor } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Navigation from "./Navigation";
import { nav_header } from "../../data/nav_header";

describe("Navigation component and items is render", () => {
  test(" Navigation should be rendered", () => {
    const { container } = render(<Navigation array={nav_header} />);
    expect(container).toBeInTheDocument();
  });

  test(" Checks if the first item is correctly displayed", () => {
    const { container, getByText } = render(<Navigation array={nav_header} />);
    expect(container).toBeInTheDocument();
    expect(getByText(nav_header[0].text)).toBeInTheDocument();
  });
});
