import React, { useEffect, useState } from "react";

import useGetImages from "../../hooks/useGetImages/useGetImages";
import GradientLoader from "../Loader/GradientLoader/GradientLoader";
import Loader from "../Loader/Loader";

export default function DipatchImagesInChildren({
  children = [],
  dir = [],
  height = false,
}) {
  const [filesInfo, loading] = useGetImages(dir); /// context
  const [error, setError] = useState(false);

  const childArray = React.Children.toArray(children);
  const newChildren = childArray.map((child, key) => {
    return React.cloneElement(child, {
      img: filesInfo ? filesInfo[key] : [],
    });
  });

  useEffect(() => {
    !loading && filesInfo.length !== newChildren.length && setError(true);
  }, []);

  return (
    <>
      {!error && !loading
        ? newChildren
        : height && <GradientLoader height={height}></GradientLoader>}
    </>
  );
}
