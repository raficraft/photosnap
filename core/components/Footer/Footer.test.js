import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { nav_footer } from "../../data/navigation_data";
import Footer from "./Footer";

describe("Footer component and items is rendered", () => {
  test("Foouter should be rendered", () => {
    const { container } = render(<Footer />);
    expect(container).toBeInTheDocument();
  });

  test("Navigation should be rendered", () => {
    const { container, getByText } = render(<Footer />);

    expect(nav_footer.length).not.toBe(0);
    expect(getByText(/home/i)).toBeInTheDocument();
    expect(getByText(/stories/i)).toBeInTheDocument();
    expect(getByText(/features/i)).toBeInTheDocument();
    expect(getByText(/pricing/i)).toBeInTheDocument();
  });

  test("Navigation Items should be rendered", () => {
    const { container, getByText } = render(<Footer />);

    expect(getByText(/get an invite/i)).toBeInTheDocument();
    expect(getByText(/copyright 2019/i)).toBeInTheDocument();
  });
});
