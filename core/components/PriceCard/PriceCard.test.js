import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import fileMock from "../../../__mocks__/fileMock";
import Btn from "../btn/Btn/Btn";
import PriceCard from "./PriceCard";
import StoriesItems from "./StoriesItems";

describe("PriceCard component and items is rendered", () => {
  test("PriceCard should be rendered", () => {
    const { container } = render(<PriceCard />);

    expect(container).toBeInTheDocument();
  });

  test("PriceCard should be rendered", () => {
    const { container, getByText } = render(
      <PriceCard
        theme="black"
        content={{
          title: "pro",
          text: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
          price: "19.00",
          duration: "per month",
          button: <Btn type="light" text="pick plan" />,
        }}
      />
    );

    expect(getByText(/pro/i)).toBeInTheDocument();
    expect(getByText(/platform/i)).toBeInTheDocument();
    expect(getByText(/19/i)).toBeInTheDocument();
    expect(getByText(/month/i)).toBeInTheDocument();
    expect(getByText(/plan/i)).toBeInTheDocument();
  });
});
