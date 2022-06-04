import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { IconResponsive } from "../../data/features_svg";
import FeaturesCard_css from "./FeaturesCard_css";

describe("ArticleAndImage component and items is rendered", () => {
  test("ArticleAndImage should be rendered", () => {
    const { container } = render(
      <FeaturesCard_css
        content={{
          icon: <IconResponsive />,
          title: "100% responsive",
          text: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
        }}
      />
    );
    expect(container).toBeInTheDocument();
  });

  test("ArticleAndImage items should be rendered", () => {
    const { getByText, getByTitle } = render(
      <FeaturesCard_css
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
