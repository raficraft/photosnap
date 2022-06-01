import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import BurgerMenu from "./BurgerMenu";

describe("", () => {
  test("", () => {
    const toto = 2;
    const { container } = render(<BurgerMenu></BurgerMenu>);

    expect(container).toBeInTheDocument();
  });
});
