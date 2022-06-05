import Image from "next/image";
import React from "react";
import { ArticleImage } from "./ArticleAndImage_css";
import useMediaQuery from "../../hooks/useMediaQuery/useMediaQuery";

/**
 *
 * @param {obj} img Object passed by the DispatchImageInChildren component
 * @param {String} style
 * @param {obj} content
 * @returns
 */

export default function ArticleAndImage({ img, style = "", content = {} }) {
  const isMobil = useMediaQuery("(max-width : 767px)");
  const layout = isMobil ? "intrinsic" : "fixed";

  console.log(img);

  return (
    <ArticleImage>
      <div className={`articleAndImage articleAndImage--${style}`}>
        <div className="article_container">
          <article>
            <header>
              {content.subTilte && <h1>{content.subTitle}</h1>}
              {content.title && <h1>{content.title}</h1>}
              {content.fullData && content.author && (
                <h1>
                  {content.title} {`by ${content.author}`}
                </h1>
              )}
            </header>
            {content.text && <p className="text">{content.text}</p>}
            {content.button && <footer>{content.button}</footer>}
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
