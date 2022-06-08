import React from "react";
import Image from "next/image";
import useGetImages from "../../hooks/useGetImages/useGetImages";
import { BannerHeroContainer } from "./BannerHero_css";
import Loader from "../Loader/Loader";
import GradientLoader from "../Loader/GradientLoader/GradientLoader";

export default function BannerHero({ dir = [], content = {}, height = false }) {
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
    <BannerHeroContainer>
      <div className="bannerHero_content">
        <span className="emphasisGradient"></span>
        <header>
          <h1>{content.title}</h1>
        </header>
        <p className="text grey">{content.text}</p>
      </div>

      {makeImages()}
    </BannerHeroContainer>
  ) : (
    height && <GradientLoader height={height} />
  );
}
