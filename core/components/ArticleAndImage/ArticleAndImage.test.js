import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Btn from "../btn/Btn/Btn";
import ArticleAndImage from "./ArticleAndImage";

describe("ArticleAndImage component and items is rendered", () => {
  test("ArticleAndImage should be rendered", () => {
    const { container } = render(
      <ArticleAndImage
        content={{
          title: "Create and share your photo stories.",
          text: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
          button: <Btn type="dark" text="get an invite"></Btn>,
        }}
      />
    );
    expect(container).toBeInTheDocument();
  });

  test("ArticleAndImage items should be rendered", () => {
    const { getByText } = render(
      <ArticleAndImage
        content={{
          title: "Create and share your photo stories.",
          text: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
          button: <Btn type="dark" text="get an invite"></Btn>,
        }}
      />
    );
    expect(getByText(/create/i)).toBeInTheDocument();
    expect(getByText(/make/i)).toBeInTheDocument();
    expect(getByText(/invite/i)).toBeInTheDocument();
  });
});
