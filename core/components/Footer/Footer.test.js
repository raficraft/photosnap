import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component and items is rendered", () => {
  test("Foouter should be rendered", () => {
    const { container } = render(<Footer />);
    expect(container).toBeInTheDocument();
  });

  test("Navigation should be rendered", () => {});

  test("Navigation Items should be rendered", () => {});
});
