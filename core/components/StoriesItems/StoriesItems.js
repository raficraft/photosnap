import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Btn from "../btn/Btn/Btn";
import { StoriesContainer } from "./Stories_css";

export default function StoriesItems({ img, content }) {
  const [parentHeight, setParentHeight] = useState(img.height + "px");

  const cardRef = useRef();

  function getHeight() {
    const currentCard = cardRef.current;

    const computedWidth = window.getComputedStyle(currentCard).width;
    const cardWidht = computedWidth.substring(0, computedWidth.length - 2);

    const ratio = img.width / img.height;
    const newHeight = cardWidht / ratio;
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
          <div className="stories_img">
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
