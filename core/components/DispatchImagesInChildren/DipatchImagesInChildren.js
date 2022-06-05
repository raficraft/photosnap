import React, { useEffect, useState } from "react";

import useGetImages from "../../hooks/useGetImages/useGetImages";

export default function DipatchImagesInChildren({
  children = [],
  dir = [],
  call = 0,
}) {
  const [filesInfo, loading] = useGetImages(dir);
  const [error, setError] = useState(false);

  const childArray = React.Children.toArray(children);
  const newChildren = childArray.map((child, key) => {
    return React.cloneElement(child, {
      img: filesInfo.length === children.length ? filesInfo[key] : [],
    });
  });

  useEffect(() => {
    !loading && console.log(`callby ${call}`, filesInfo, dir);
    !loading && filesInfo.length !== children.length && setError(true);
  }, []);

  return <>{!error && !loading ? newChildren : <h1>Loading...</h1>}</>;
}
