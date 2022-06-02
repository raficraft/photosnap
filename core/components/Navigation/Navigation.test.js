import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Navigation from "./Navigation";
import { nav_header } from "../../data/navigation_data";
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
