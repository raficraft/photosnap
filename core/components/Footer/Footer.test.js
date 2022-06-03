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
    const { getByText, getAllByText } = render(
      <Footer>
        <Navigation array={nav_footer}></Navigation>
      </Footer>
    );

    expect(nav_footer.length).not.toBe(0);
    expect(getAllByText(/home/i)[0]).toBeInTheDocument();
    expect(getAllByText(/home/i)[1]).toBeInTheDocument();
  });

  test("Items should be rendered", () => {
    const { getByText } = render(<Footer />);

    expect(getByText(/get an invite/i)).toBeInTheDocument();
    expect(getByText(/copyright 2019/i)).toBeInTheDocument();
  });

  test("Social should be rendered", () => {
    const { getAllByTitle } = render(<Footer />);

    expect(getAllByTitle(/facebook/i)[0]).toBeInTheDocument();
    expect(getAllByTitle(/youtube/i)[0]).toBeInTheDocument();
    expect(getAllByTitle(/instagram/i)[0]).toBeInTheDocument();
    expect(getAllByTitle(/pinterest/i)[0]).toBeInTheDocument();
    expect(getAllByTitle(/twitter/i)[0]).toBeInTheDocument();
  });
});
