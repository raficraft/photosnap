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
              date: "April 16th 2020",
              title: "The Mountain",
              author: "John appleseed",
            }}
          ></StoriesItems>
          <StoriesItems
            content={{
              date: "April 14th 2020",
              title: "Sunset Cityscapes",
              author: "Benjamin cruz",
            }}
          ></StoriesItems>
          <StoriesItems
            content={{
              date: "April 11th 2020",
              title: "18 Days Voyage",
              author: "Alexei Borodin",
            }}
          ></StoriesItems>
          <StoriesItems
            content={{
              date: "April 9th 2020",
              title: "Architecurals",
              author: "Samantha Brooke",
            }}
          ></StoriesItems>
          <StoriesItems
            content={{
              date: "April 7th 2020",
              title: "World Tour 2019",
              author: "Timothy Wagner",
            }}
          ></StoriesItems>
          <StoriesItems
            content={{
              date: "April 3rd 2020",
              title: "Unforeseen Corners",
              author: "William Malcolm",
            }}
          ></StoriesItems>
          <StoriesItems
            content={{
              date: "March 29th 2020",
              title: "The King on Africa: Part II",
              author: "Tim Hillenburg",
            }}
          ></StoriesItems>
          <StoriesItems
            content={{
              date: "March 21st 2020",
              title: "The The Trip to Nowhere",
              author: "Felicia Rourke",
            }}
          ></StoriesItems>
          <StoriesItems
            content={{
              date: "March 19th 2020",
              title: "The Rage of The Sea",
              author: "Mohammed Abdul",
            }}
          ></StoriesItems>
          <StoriesItems
            content={{
              date: "March 16th 2020",
              title: "Running Free",
              author: "Michelle",
            }}
          ></StoriesItems>
          <StoriesItems
            content={{
              date: "March 11th 2020",
              title: "Behind the Waves",
              author: "Lamar Wilson",
            }}
          ></StoriesItems>
          <StoriesItems
            content={{
              date: "March 5th 2020",
              title: "The Milky Way",
              author: "Benjamin Cruz",
            }}
          ></StoriesItems>
          <StoriesItems
            content={{
              date: "March 9th 2020",
              title: "The Mountain",
              author: "Jhon appleseed",
            }}
          ></StoriesItems>
          <StoriesItems
            content={{
              date: "March 4th 2020",
              title: "Night at The Dark Forest",
              author: "Mohammed Abdul",
            }}
          ></StoriesItems>
          <StoriesItems
            content={{
              date: "March 1st 2020",
              title: "Somwarpet’s Beauty",
              author: "Michelle",
            }}
          ></StoriesItems>
          <StoriesItems
            content={{
              date: "February 25th 2020",
              title: "Land of Dreams",
              author: "William Malcolm",
            }}
          ></StoriesItems>
        </DipatchImagesInChildren>
      </section>
    </>
  );
}
