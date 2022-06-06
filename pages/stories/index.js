import Head from "next/head";
import React from "react";
import DipatchImagesInChildren from "../../core/components/DispatchImagesInChildren/DipatchImagesInChildren";
import StoriesItems from "../../core/components/StoriesItems/StoriesItems";

export default function index() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Pricing page - Photosnap" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="main_section">
        <DipatchImagesInChildren dir={["stories/galerie/"]}>
          <StoriesItems
            content={{
              title: "The Mountain",
              author: "Jhon appleseed",
            }}
          ></StoriesItems>
          <StoriesItems
            content={{
              title: "The Mountain",
              author: "Jhon appleseed",
            }}
          ></StoriesItems>
          <StoriesItems
            content={{
              title: "The Mountain",
              author: "Jhon appleseed",
            }}
          ></StoriesItems>
          <StoriesItems
            content={{
              title: "The Mountain",
              author: "Jhon appleseed",
            }}
          ></StoriesItems>
          <StoriesItems
            content={{
              title: "The Mountain",
              author: "Jhon appleseed",
            }}
          ></StoriesItems>
          <StoriesItems
            content={{
              title: "The Mountain",
              author: "Jhon appleseed",
            }}
          ></StoriesItems>
          <StoriesItems
            content={{
              title: "The Mountain",
              author: "Jhon appleseed",
            }}
          ></StoriesItems>
          <StoriesItems
            content={{
              title: "The Mountain",
              author: "Jhon appleseed",
            }}
          ></StoriesItems>
          <StoriesItems
            content={{
              title: "The Mountain",
              author: "Jhon appleseed",
            }}
          ></StoriesItems>
          <StoriesItems
            content={{
              title: "The Mountain",
              author: "Jhon appleseed",
            }}
          ></StoriesItems>
          <StoriesItems
            content={{
              title: "The Mountain",
              author: "Jhon appleseed",
            }}
          ></StoriesItems>
          <StoriesItems
            content={{
              title: "The Mountain",
              author: "Jhon appleseed",
            }}
          ></StoriesItems>
          <StoriesItems
            content={{
              title: "The Mountain",
              author: "Jhon appleseed",
            }}
          ></StoriesItems>
          <StoriesItems
            content={{
              title: "The Mountain",
              author: "Jhon appleseed",
            }}
          ></StoriesItems>
          <StoriesItems
            content={{
              title: "The Mountain",
              author: "Jhon appleseed",
            }}
          ></StoriesItems>
          <StoriesItems
            content={{
              title: "The Mountain",
              author: "Jhon appleseed",
            }}
          ></StoriesItems>
        </DipatchImagesInChildren>
      </section>
    </>
  );
}
