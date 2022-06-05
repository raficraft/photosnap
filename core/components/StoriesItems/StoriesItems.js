import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Btn from "../btn/Btn/Btn";
import { StoriesContainer } from "./Stories_css";

export default function StoriesItems({ img, content }) {
  const [parentHeight, setParentHeight] = useState(img.height + "px");
  const [imageWidth, setImageWidth] = useState(img.width + "px");

  const maskRef = useRef();
  const cardRef = useRef();

  function getHeight() {
    const currentCard = cardRef.current;

    console.log("src", window.getComputedStyle(currentCard).width);
    const size = window.getComputedStyle(currentCard).width;
    const cardWidht = size.substring(0, size.length - 2);

    console.log("!!!!", cardWidht.substring(0, cardWidht.length - 2));

    console.log({ img });

    const currentImg = maskRef.current;
    const firstChild = currentImg.children[0];
    const imgHeight = window.getComputedStyle(firstChild).height;
    const ratio = img.width / img.height;

    console.log("ratio", ratio);
    console.log("container width", cardWidht);
    const newHeight = cardWidht / ratio;
    console.log("new", newHeight);
    setParentHeight(newHeight);
  }

  useLayoutEffect(() => {
    getHeight();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", getHeight);
    return () => window.removeEventListener("resize", getHeight);
  }, []);

  return (
    <StoriesContainer>
      <div className="stories" style={{ height: parentHeight }} ref={cardRef}>
        <div className="stories_mask">
          <div className="stories_img" ref={maskRef}>
            <Image
              placeholder="blur"
              blurDataURL={img.blurDataURL}
              src={img.src}
              alt="PhotoSnap pictures"
              width={img.width}
              height={img.height}
              objectFit="cover"
              layout="fill"
            ></Image>
          </div>
          <span className="stories_gradient"></span>
          <div className="stories_content">
            <header>
              {content.date && <p>{content.date}</p>}
              <h4>{content.title}</h4>
            </header>
            <p>by {content.author}</p>
            <footer>
              <Btn type="arrow_link" text="read story"></Btn>
            </footer>
          </div>
          <span className="emphasisColor"></span>
        </div>
      </div>
    </StoriesContainer>
  );
}

export const debounce = (callback, delay) => {
  var timer;
  return function () {
    var args = arguments;
    var context = this;
    clearTimeout(timer);
    timer = setTimeout(function () {
      callback.apply(context, args);
    }, delay);
  };
};
