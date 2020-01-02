import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import ArtworkCard from "./ArtworkCard";

// const userId = 1;

const InfiniteGalleryScroll = ({
  fetchImages,
  userId,
  isEditAndDeleteMenu
}) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [didMount, setDidMount] = useState(false);
  const [imagesDoNotExistMessage, setImagesDoNotExistMessage] = useState("");

  useEffect(() => {
    const fetchInitialData = async () => {
      const data = await fetchImages(page, userId);
      console.log(data);
      if (data && data.items.length !== 0) {
        setTotalItems(data.totalItems);
        setImages(data.items);
        setDidMount(true);
      } else {
        const message = (
          <Grid item>
            <Typography variant="h6" gutterBottom color="primary">
              There are no artworks yet...
            </Typography>
          </Grid>
        );
        setImagesDoNotExistMessage(message);
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
        {imagesDoNotExistMessage ||
          images.map((image, index) => (
            <Grid key={image.id} item>
              <ArtworkCard
                artworkId={image.id}
                imageName={image.name}
                description={image.description}
                imageUrl={image.imageUrl}
                isEditAndDeleteMenu={isEditAndDeleteMenu}
              />
            </Grid>
          ))}
      </Grid>
    </InfiniteScroll>
  );
};

export default InfiniteGalleryScroll;
