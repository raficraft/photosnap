import React, { useEffect } from "react";

import useGetImages from "../../hooks/useGetImages/useGetImages";

export default function DipatchImagesInChildren({ children, dir }) {
  const [filesInfo, loading] = useGetImages(dir);

  const childArray = React.Children.toArray(children);
  const newChildren = childArray.map((child, key) => {
    return React.cloneElement(child, { img: filesInfo[key] });
  });

  useEffect(() => {
    console.log(children);
    !loading ? console.log(filesInfo) : console.log("wait");
  }, []);

  return <>{newChildren}</>;
}
