import React from "react";
import Image from "next/image";
import useGetImages from "../../hooks/useGetImages/useGetImages";
import { BannerFooterContainer } from "./BannerFooter_css";
import Loader from "../Loader/Loader";

export default function BannerFooter({
  dir = [],
  content = {},
  classCss = "hero",
}) {
  const [filesInfo, loading] = useGetImages(dir);

  function makeImages() {
    return filesInfo.map((img, key) => {
      return (
        <div className={`image_container image_${key}`} key={key}>
          <Image
            placeholder="blur"
            blurDataURL={img.blurDataURL}
            src={img.src}
            width={img.width}
            height={img.height}
            alt="photosnap hero banner illustration."
            layout="fixed"
            objectFit="cover"
            priority={key}
          ></Image>
        </div>
      );
    });
  }

  function footerItem() {
    return (
      <>
        {content.title && <header>{<h2>{content.title}</h2>}</header>}
        {content.button && <aside>{content.button}</aside>}
      </>
    );
  }

  function HeroItem() {
    return (
      <article>
        <header>
          {content.subtitle && (
            <h5 className="bold letter-spacing"> {content.subtitle}</h5>
          )}
          {content.title && <h1>{content.title}</h1>}
          {content.date && (
            <p className="text text-shadow">
              {content.date} by {content.author}
            </p>
          )}
        </header>
        {content.text && <p className="text">{content.text}</p>}
        {content.button && <footer>{content.button}</footer>}
      </article>
    );
  }
  return !loading ? (
    <BannerFooterContainer>
      {makeImages()}
      <div className={`banner_content banner_content--${classCss}`}>
        {classCss === "footer" && footerItem()}
        {classCss === "hero" && HeroItem()}
      </div>
    </BannerFooterContainer>
  ) : (
    <Loader></Loader>
  );
}
