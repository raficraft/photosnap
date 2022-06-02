import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { nav_header } from "../../data/navigation_data";
import Btn from "../btn/Btn/Btn";
import Navigation from "../Navigation/Navigation";
import BurgerMenu from "./BurgerMenu";

describe("Burger menu and items is rendered", () => {
  test("", () => {
    const { container } = render(<BurgerMenu></BurgerMenu>);
    expect(container).toBeInTheDocument();
  });

  test("All nav item should be rendered", () => {
    const { getByText } = render(
      <BurgerMenu>
        <Navigation array={nav_header}></Navigation>
      </BurgerMenu>
    );

    expect(nav_header.length).not.toBeNull();
    expect(getByText(/stories/i)).toBeInTheDocument();
    expect(getByText(/pricing/i)).toBeInTheDocument();
    expect(getByText(/features/i)).toBeInTheDocument();
  });

  test("button should be rendered", () => {
    const { getByText } = render(
      <BurgerMenu>
        <Btn type="dark_link" text="GET AN INVITE"></Btn>
      </BurgerMenu>
    );

    expect(getByText(/get an invite/i)).toBeInTheDocument();
  });
});
