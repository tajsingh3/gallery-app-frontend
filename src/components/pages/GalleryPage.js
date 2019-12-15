import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import ArtworkCard from "../ArtworkCard";

const GalleryPage = () => {
  let [images, setImages] = useState(Array.from({ length: 20 }));

  const fetchMoreData = () => {
    setTimeout(() => {
      // images = images.concat(Array.from({ length: 20 }));
      setImages(prevImages => images.concat(Array.from({ length: 20 })));
    }, 1500);
  };

  return (
    <InfiniteScroll
      dataLength={images.length}
      next={fetchMoreData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      {images.map((i, index) => (
        <ArtworkCard imageName={`image ${index}`} key={index} />
      ))}
    </InfiniteScroll>
  );
};

export default GalleryPage;
