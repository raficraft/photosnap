import Image from "next/image";
import Btn from "../btn/Btn/Btn";

export default function StoriesItems({ img, content }) {
  return (
    <div>
      <div className="stories">
        <div className="stories_container">
          <div className="stories_img">
            <Image
              placeholder="blur"
              blurDataURL={img.blurDataURL}
              src={img.src}
              alt="PhotoSnap pictures"
              width={img.width}
              height={img.height}
            ></Image>
          </div>
          <div className="stories_content">
            <h4>{content.title}</h4>
            <p>by {content.author}</p>
            <Btn type="arrow_link" text="read story"></Btn>
          </div>
        </div>
        <span className="emphasisColor"></span>
      </div>
    </div>
  );
}
