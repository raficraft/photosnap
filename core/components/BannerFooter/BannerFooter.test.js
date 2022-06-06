import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Btn from "../btn/Btn/Btn";
import BannerFooter from "./BannerFooter";

describe("BannerFooter component and items is rendered", () => {
  test("BannerFooter should be rendered", () => {
    const { container } = render(<BannerFooter />);

    expect(container).toBeInTheDocument();
  });

  test("BannerFooter item should be rendered", () => {
    const { getByText } = render(
      <BannerFooter
        content={{
          title: "We’re in beta. Get your invite today!",
          button: <Btn type="arrow_link" text="get an invite"></Btn>,
        }}
      />
    );

    expect(getByText(/today/i)).toBeInTheDocument();
    expect(getByText(/an/i)).toBeInTheDocument();
  });
});
