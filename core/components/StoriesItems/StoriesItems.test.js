import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { IconResponsive } from "../../data/features_svg";
import Btn from "../btn/Btn/Btn";
import StoriesItems from "./StoriesItems";

describe("StoriesItems component and items is rendered", () => {
  test("StoriesItems should be rendered", () => {
    const { container } = render(<StoriesItems />);

    expect(container).toBeInTheDocument();
  });

  test("StoriesItems content should be rendered", () => {
    const { getByText } = render(
      <StoriesItems
        array={[""]}
        content={{
          title: "The Mountains",
          author: "Jhon Appleseed",
        }}
      >
        <Btn type="Arrow_link" text="Read story"></Btn>,
      </StoriesItems>
    );

    expect(getByText(/mountain/i)).toBeInTheDocument();
    expect(getByText(/appleseed/i)).toBeInTheDocument();
    expect(getByText(/story/i)).toBeInTheDocument();
  });
});
