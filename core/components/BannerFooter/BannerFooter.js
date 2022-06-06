import React from "react";
import Image from "next/image";
import useGetImages from "../../hooks/useGetImages/useGetImages";
import { BannerFooterContainer } from "./BannerFooter_css";

export default function BannerFooter({ dir = [], content = {} }) {
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
  return !loading ? (
    <BannerFooterContainer>
      {makeImages()}
      <div className="banner_content">
        {content.title && (
          <header>
            <h2>{content.title}</h2>
          </header>
        )}
        {content.button && <aside>{content.button}</aside>}
      </div>
    </BannerFooterContainer>
  ) : (
    <h1>Loading</h1>
  );
}
