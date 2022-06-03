import React, { useEffect } from "react";

/**
 *
 * @param {obj} img Object passed by the DispatchImageInChildren component
 * @returns
 */

export default function ArticleAndImage({ img }) {
  useEffect(() => {
    img ? console.log("yolo", img) : console.log("nothing");
  }, []);
  return (
    <div>
      <h1>ElEMENT ENFANTS</h1>
    </div>
  );
}

const articleANDimage_Data = {
  home: [
    {
      title: "Create and share your photo stories.",
      text: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
      buttonText: "GET AN INVITE",
    },
  ],
};
