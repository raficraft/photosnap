import "@testing-library/jest-dom";
import { render, prettyDOM, waitFor } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Header from "./Header";
import Navigation from "../Navigation/Navigation";

describe("header component and items is render", () => {
  test(" Header should be rendered", () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });

  test(" Logo and Title Logo should be rendered", () => {
    const { getByTitle } = render(<Header />);
    expect(getByTitle(/logo/i)).toBeInTheDocument();
    expect(getByTitle(/title/i)).toBeInTheDocument();
  });

  test(" All Nav item should be rendered", () => {
    const { getByText } = render(
      <Header>
        <Navigation></Navigation>
      </Header>
    );

    expect(getByText(/stories/i)).toBeInTheDocument();
    expect(getByText(/pricing/i)).toBeInTheDocument();
    expect(getByText(/features/i)).toBeInTheDocument();
  });

  test(" All Nav item should be rendered", () => {
    const { getByText } = render(<Header />);

    expect(getByText(/get an invite/i)).toBeInTheDocument();
  });
});
