import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import fileMock from "../../../__mocks__/fileMock";
import Btn from "../btn/Btn/Btn";
import StoriesItems from "./StoriesItems";

describe("StoriesItems component and items is rendered", () => {
  test("StoriesItems should be rendered", () => {
    const { container } = render(
      <StoriesItems
        img={fileMock}
        content={{
          title: "The Mountains",
          author: "Jhon Appleseed",
          date: "April 7th 2020",
        }}
      >
        <Btn type="Arrow_link" text="Read story"></Btn>,
      </StoriesItems>
    );
    expect(container).toBeInTheDocument();
  });

  test("StoriesItems content should be rendered", () => {
    const { getByText } = render(
      <StoriesItems
        img={fileMock}
        content={{
          title: "The Mountains",
          author: "Jhon Appleseed",
          date: "April 7th 2020",
        }}
      >
        <Btn type="Arrow_link" text="Read story"></Btn>,
      </StoriesItems>
    );

    expect(getByText(/mountain/i)).toBeInTheDocument();
    expect(getByText(/april/i)).toBeInTheDocument();
    expect(getByText(/appleseed/i)).toBeInTheDocument();
    expect(getByText(/story/i)).toBeInTheDocument();
  });
});
