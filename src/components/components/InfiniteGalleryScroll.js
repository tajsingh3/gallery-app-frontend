import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Grid from "@material-ui/core/Grid";
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
      loader={
        <Grid container justify="center">
          <Grid item>
            <h4>Loading...</h4>
          </Grid>
        </Grid>
      }
    >
      {/* {images.map((i, index) => (
        <ArtworkCard imageName={`image ${index}`} key={index} />
      ))} */}

      <Grid
        container
        direction="column"
        spacing={3}
        alignItems="center"
        justify="center"
      >
        {images.map((i, index) => (
          <Grid key={index} item>
            <ArtworkCard imageName={`image ${index}`} />
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  );
};

export default InfiniteGalleryScroll;
