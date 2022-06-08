import Head from "next/head";
import ArticleAndImage from "../core/components/ArticleAndImage/ArticleAndImage";
import Btn from "../core/components/btn/Btn/Btn";
import DipatchImagesInChildren from "../core/components/DispatchImagesInChildren/DipatchImagesInChildren";
import EmphasisGradient from "../core/components/EmphasisGradient/EmphasisGradient";
import FeaturesCard from "../core/components/FeaturesCard/FeaturesCard";
import StoriesItems from "../core/components/StoriesItems/StoriesItems";
import {
  IconAvailableEmbed,
  IconNoLimit,
  IconResponsive,
} from "../core/data/features_svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="FrontEnd Mentor Challenge [4] - home page"
        />
        <title>FrontEnd Mentor Challenge [4] - Home page</title>
        <link rel="icon" href="/favicon.ico" />
        {/* Social Network Card */}
        <meta
          property="og:title"
          content="Front-end mentor challenge - Photosnap"
        />
        <meta
          property="og:description"
          content="Challenge de niveau avancé [4] du site frontend mentor.  Ce projet est un site marketing pour une application de partage de photos."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://photosnap-r-parodi.vercel.app/"
        />
        <meta property="og:locale" content="fr_fr" />
        <meta property="og:tag" content="Github" />
        <meta property="og:tag" content="Next" />
        <meta property="og:tag" content="Responsive" />
        <meta property="og:tag" content="TDD" />
        <meta property="og:tag" content="Testing Library" />
        <meta property="og:tag" content="Styled-components" />
        <meta
          property="og:image"
          content="../public/assets/socialCard/socialCard.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Front-end mentor challenge - Photosnap"
        />
        <meta
          name="twitter:description"
          content="Challenge de niveau avancé [4] du site frontend mentor.  Ce projet est un site marketing pour une application de partage de photos."
        />
        <meta
          name="twitter:url"
          content="https://photosnap-r-parodi.vercel.app/"
        />
        <meta
          name="twitter:image"
          content="../public/assets/socialCard/socialCard.jpg"
        />
      </Head>

      <section>
        <DipatchImagesInChildren dir={["home/desktop/"]}>
          <ArticleAndImage
            style="black"
            content={{
              title: "Create and share your photo stories.",
              text: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
              button: <Btn type="arrow_link" text="get an invite"></Btn>,
              emphasisGradient: true,
            }}
          ></ArticleAndImage>
          <ArticleAndImage
            style="whiteReverse"
            content={{
              title: "BEAUTIFUL STORIES every time",
              text: "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
              button: <Btn type="arrow_link" text="view the stories"></Btn>,
              emphasisGradient: false,
            }}
          ></ArticleAndImage>
          <ArticleAndImage
            style="white"
            content={{
              title: "Design for everyone",
              text: "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ",
              button: <Btn type="arrow_link" text="view the stories"></Btn>,
              emphasisGradient: false,
            }}
          ></ArticleAndImage>
        </DipatchImagesInChildren>
      </section>

      <section className="main_section">
        <DipatchImagesInChildren dir={["home/stories/"]}>
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

      <section className="main_section--features">
        <FeaturesCard
          content={{
            icon: <IconResponsive />,
            title: "100% responsive",
            text: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
          }}
        ></FeaturesCard>
        <FeaturesCard
          content={{
            icon: <IconNoLimit />,
            title: "No Photo Upload Limit",
            text: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
          }}
        ></FeaturesCard>
        <FeaturesCard
          content={{
            icon: <IconAvailableEmbed />,
            title: "Available to Embed",
            text: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
          }}
        ></FeaturesCard>
      </section>
    </>
  );
}
