import React, { useEffect } from "react";
import Image from "next/image";
import { ArticleImage } from "./ArticleAndImage_css";

/**
 *
 * @param {obj} img Object passed by the DispatchImageInChildren component
 * @param {String} style
 * @param {obj} content
 * @returns
 */

export default function ArticleAndImage({ img, style, content }) {
  useEffect(() => {
    img ? console.log("yolo", img) : console.log("nothing");
  }, []);
  return (
    <ArticleImage>
      <div className={`articleAndImage--${style}`}>
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
            src={img.src}
            alt="Picture of the author"
            width={img.width}
            height={img.height}
          ></Image>
        </div>
      </div>
    </ArticleImage>
  );
}
