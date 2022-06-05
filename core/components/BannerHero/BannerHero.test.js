import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import BannerHero from "./BannerHero";

describe("BannerHero component and items is rendered", () => {
  test("BannerHero should be rendered", () => {
    const { container } = render(<BannerHero />);

    expect(container).toBeInTheDocument();
  });

  test("BannerHero item should be rendered", () => {
    const { container, getByText, getByAltText } = render(
      <BannerHero
        content={{
          title: "features",
          text: "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.",
        }}
      />
    );

    expect(getByText(/features/i)).toBeInTheDocument();
    expect(getByText(/photograpers/i)).toBeInTheDocument();
    expect(getByAltText(/photosnap/i)).toBeInTheDocument();
  });
});
