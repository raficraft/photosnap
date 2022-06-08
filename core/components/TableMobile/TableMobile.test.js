import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("PriceCard component and items is rendered", () => {
  test("PriceCard should be rendered", () => {
    const { container } = render(<Table />);

    expect(container).toBeInTheDocument();
  });

  test("PriceCard items should be rendered", () => {
    const { container, getByText } = render(<Table />);

    expect(getByText(/Basic/i)).toBeInTheDocument();
    expect(getByText(/story/i)).toBeInTheDocument();
  });
});
