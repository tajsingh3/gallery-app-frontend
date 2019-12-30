import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Grid from "@material-ui/core/Grid";

import ArtworkCard from "./ArtworkCard";

// const userId = 1;

const InfiniteGalleryScroll = ({ fetchImages, userId }) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    const fetchInitialData = async () => {
      const data = await fetchImages(page, userId);
      if (data && data.items) {
        setTotalItems(data.totalItems);
        setImages(data.items);
        setDidMount(true);
      }
    };
    fetchInitialData();
  }, []);

  useEffect(() => {
    const fetchDataAfterMount = async () => {
      const data = await fetchImages(page, userId);
      if (didMount && data.items) {
        setImages(prevImages => prevImages.concat(data.items));
      }
    };
    fetchDataAfterMount();
  }, [page]);

  const fetchMoreData = () => {
    setPage(prevPage => prevPage + 1);
  };
  console.log(userId);
  return (
    <InfiniteScroll
      height={600}
      dataLength={images.length}
      next={fetchMoreData}
      hasMore={images.length < totalItems}
      loader={
        <Grid container justify="center">
          <Grid item>
            <h4>Loading...</h4>
          </Grid>
        </Grid>
      }
    >
      <Grid
        container
        direction="column"
        spacing={3}
        alignItems="center"
        justify="center"
      >
        {images.map((image, index) => (
          <Grid key={image.id} item>
            <ArtworkCard
              artworkId={image.id}
              imageName={image.name}
              description={image.description}
            />
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  );
};

export default InfiniteGalleryScroll;
