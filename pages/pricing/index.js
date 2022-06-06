import Head from "next/head";
import React from "react";
import BannerFooter from "../../core/components/BannerFooter/BannerFooter";
import BannerHero from "../../core/components/BannerHero/BannerHero";
import Btn from "../../core/components/btn/Btn/Btn";

export default function index() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <BannerHero
          dir={["pricing/desktop/", "pricing/tablet/", "pricing/mobile/"]}
          content={{
            title: "pricing",
            text: "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.",
          }}
        ></BannerHero>
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
