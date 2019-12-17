import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import ArtworkCard from "./ArtworkCard";

const InfiniteGalleryScroll = ({ fetchImages }) => {
  let [images, setImages] = useState(Array.from({ length: 20 }));

  const fetchMoreData = () => {
    fetchImages(); //need to use promises here eventually or asyn await
    setTimeout(() => {
      setImages(prevImages => prevImages.concat(Array.from({ length: 20 })));
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

export default InfiniteGalleryScroll;
