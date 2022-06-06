import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { IconResponsive } from "../../data/features_svg";
import FeaturesCard from "./FeaturesCard";

describe("FeaturesCard component and items is rendered", () => {
  test("FeaturesCard should be rendered", () => {
    const { container } = render(
      <FeaturesCard
        content={{
          icon: <IconResponsive />,
          title: "100% responsive",
          text: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
        }}
      />
    );
    expect(container).toBeInTheDocument();
  });

  test("FeaturesCard items should be rendered", () => {
    const { getByText, getByTitle } = render(
      <FeaturesCard
        content={{
          icon: <IconResponsive />,
          title: "100% responsive",
          text: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
        }}
      />
    );

    expect(getByTitle(/responsive/i)).toBeInTheDocument();
    expect(getByText(/matter/i)).toBeInTheDocument();
  });
});
