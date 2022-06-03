import React, { useEffect } from "react";
import Image from "next/image";
import { ArticleImage } from "./ArticleAndImage_css";
import useMediaQuery from "../../hooks/useMediaQuery/useMediaQuery";

/**
 *
 * @param {obj} img Object passed by the DispatchImageInChildren component
 * @param {String} style
 * @param {obj} content
 * @returns
 */

export default function ArticleAndImage({ img, style, content }) {
  const isMobil = useMediaQuery("(max-width : 767px)");
  const layout = isMobil ? "intrinsic" : "fixed";
  useEffect(() => {
    img ? console.log("yolo", img) : console.log("nothing");
  }, []);
  return (
    <ArticleImage>
      <div className={`articleAndImage articleAndImage--${style}`}>
        <div className="article_container">
          <article>
            <header>
              <h1>{content.title}</h1>
            </header>
            <p class="text">{content.text}</p>
            <footer>{content.button}</footer>
          </article>
        </div>
        <div className="image_container">
          <Image
            placeholder="blur"
            blurDataURL={img.blurDataURL}
            objectFit="cover"
            layout={layout}
            src={img.src}
            alt="PhotoSnap pictures"
            width={img.width}
            height={img.height}
          ></Image>
        </div>
      </div>
    </ArticleImage>
  );
}
