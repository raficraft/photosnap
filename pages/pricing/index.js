import Head from "next/head";
import React from "react";
import BannerFooter from "../../core/components/BannerFooter/BannerFooter";
import BannerHero from "../../core/components/BannerHero/BannerHero";
import Btn from "../../core/components/btn/Btn/Btn";
import PriceInteract from "../../core/components/composed/PriceInteract/PriceInteract";
import Table from "../../core/components/Table/Table";
import TableMobile from "../../core/components/TableMobile/TableMobile";
import useMediaQuery from "../../core/hooks/useMediaQuery/useMediaQuery";

export default function Index() {
  const isMobil = useMediaQuery("(max-width : 720px)");
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="FrontEnd Mentor Challenge [4] - Pricing page"
        />
        <title>FrontEnd Mentor Challenge [4] - Pricing page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <BannerHero
          dir={["pricing/desktop/", "pricing/tablet/", "pricing/mobile/"]}
          content={{
            title: "pricing",
            text: "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.",
          }}
          height="490px"
        ></BannerHero>
      </section>
      <PriceInteract></PriceInteract>
      <section className="flexCenter table_container">
        {isMobil && <TableMobile></TableMobile>}
        {!isMobil && <Table></Table>}
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
