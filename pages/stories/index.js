import Head from "next/head";
import React from "react";
import BannerFooter from "../../core/components/BannerFooter/BannerFooter";
import Btn from "../../core/components/btn/Btn/Btn";
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

      <section>
        <BannerFooter
          classCss="hero"
          dir={[
            "stories/hero/desktop/",
            "stories/hero/tablet/",
            "stories/hero/mobile/",
          ]}
          content={{
            subtitle: "LAST MONTH’S FEATURED STORY",
            title: "Hazy full moon of appalachia",
            date: "March 2nd 2020",
            author: "John Appleseed",
            text: 'The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.',
            button: <Btn type="arrow_link" text="Read the story"></Btn>,
          }}
        ></BannerFooter>
      </section>
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
