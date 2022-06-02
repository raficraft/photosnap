import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { nav_footer } from "../../data/navigation_data";
import Navigation from "../Navigation/Navigation";
import Footer from "./Footer";

describe("Footer component and items is rendered", () => {
  test("Foouter should be rendered", () => {
    const { container } = render(<Footer />);
    expect(container).toBeInTheDocument();
  });

  test("Navigation should be rendered", () => {
    const { getByText } = render(
      <Footer>
        <Navigation array={nav_footer}></Navigation>
      </Footer>
    );

    expect(nav_footer.length).not.toBe(0);
    expect(getByText(/\//i)).toBeInTheDocument();
    expect(getByText(/stories/i)).toBeInTheDocument();
    expect(getByText(/features/i)).toBeInTheDocument();
    expect(getByText(/pricing/i)).toBeInTheDocument();
  });

  test("Items should be rendered", () => {
    const { container, getByText } = render(<Footer />);

    expect(getByText(/get an invite/i)).toBeInTheDocument();
    expect(getByText(/copyright 2019/i)).toBeInTheDocument();
  });

  test("Social should be rendered", () => {
    const { getByTitle } = render(<Footer />);

    expect(getByTitle(/facebook/i)).toBeInTheDocument();
    expect(getByTitle(/youtube/i)).toBeInTheDocument();
    expect(getByTitle(/instagram/i)).toBeInTheDocument();
    expect(getByTitle(/pinterest/i)).toBeInTheDocument();
    expect(getByTitle(/twitter/i)).toBeInTheDocument();
  });
});
