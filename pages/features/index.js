import Head from "next/head";
import React from "react";
import BannerFooter from "../../core/components/BannerFooter/BannerFooter";
import BannerHero from "../../core/components/BannerHero/BannerHero";
import Btn from "../../core/components/btn/Btn/Btn";
import FeaturesCard from "../../core/components/FeaturesCard/FeaturesCard";
import {
  IconAvailableEmbed,
  IconBoost,
  IconCustomDomain,
  IconDragAndDrop,
  IconNoLimit,
  IconResponsive,
} from "../../core/data/features_svg";
import { useRouter } from "next/router";

export default function Index() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="FrontEnd Mentor Challenge [4] - Features page"
        />
        <title>FrontEnd Mentor Challenge [4] - Features page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <BannerHero
          dir={["features/desktop/", "features/tablet/", "features/mobile/"]}
          content={{
            title: "features",
            text: "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.",
          }}
          height="490px"
        ></BannerHero>
      </section>

      <section className="main_section main_section--features">
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

        <FeaturesCard
          content={{
            icon: <IconCustomDomain />,
            title: "Custom Domain",
            text: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
          }}
        ></FeaturesCard>
        <FeaturesCard
          content={{
            icon: <IconBoost />,
            title: "Boost Your Exposure",
            text: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
          }}
        ></FeaturesCard>

        <FeaturesCard
          content={{
            icon: <IconDragAndDrop />,
            title: "Drag & drop Image",
            text: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
          }}
        ></FeaturesCard>
      </section>
      <section>
        <BannerFooter
          classCss="footer"
          dir={["shared/desktop/", "shared/tablet/", "shared/mobile/"]}
          content={{
            title: "We’re in beta. Get your invite today!",
            button: <Btn type="arrow_link" text="get an invite"></Btn>,
          }}
        ></BannerFooter>
      </section>
    </>
  );
}
