import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Header from "./Header";
import Navigation from "../Navigation/Navigation";
import Btn from "../btn/Btn/Btn";
import { nav_header } from "../../data/navigation_data";

describe("header component and items is rendered", () => {
  test(" Header should be rendered", () => {
    const { container } = render(<Header></Header>);
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
        <Navigation array={nav_header}></Navigation>
      </Header>
    );

    expect(nav_header.length).not.toBeNull();
    expect(getByText(/stories/i)).toBeInTheDocument();
    expect(getByText(/pricing/i)).toBeInTheDocument();
    expect(getByText(/features/i)).toBeInTheDocument();
  });

  test(" Item boutton should be rendered", () => {
    const { getByText } = render(
      <Header>
        <Btn type="dark_link" text="GET AN INVITE"></Btn>
      </Header>
    );

    expect(getByText(/get an invite/i)).toBeInTheDocument();
  });
});
