import React, { useEffect } from "react";

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
    <section>
      <article>
        <header>
          <h1>{content.title}</h1>
        </header>
        <p>{content.text}</p>
        <footer>{content.button}</footer>
      </article>
      <div></div>
    </section>
  );
}
