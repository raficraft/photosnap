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
          title: "basic",
          text: "",
          price: "",
          button: <Btn />,
        }}
      />
    );

    expect(getByText(/basic/i)).toBeInTheDocument();
  });
});
