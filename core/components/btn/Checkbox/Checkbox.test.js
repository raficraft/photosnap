import "@testing-library/jest-dom";
import { render, prettyDOM } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Checkbox from "./Checkbox";

describe("check render of the checkbox and its items", () => {
  test(" the header should be rendered", () => {
    const { container } = render(<Checkbox />);
    expect(container).toBeInTheDocument();
  });

  test("the label should be rendered", () => {
    const { getByText } = render(<Checkbox />);
    expect(getByText(/Monthly/i)).toBeInTheDocument();
    expect(getByText(/Yearly/i)).toBeInTheDocument();
  });

  test("the fakebox should be rendered", () => {
    const { getByTestId } = render(<Checkbox />);
    expect(getByTestId(/fake-box/i)).toBeInTheDocument();
  });
});
