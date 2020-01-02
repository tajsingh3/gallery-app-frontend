import React from "react";
import Typography from "@material-ui/core/Typography";

import InfiniteGalleryScroll from "../components/InfiniteGalleryScroll";
import { fetchMyArt } from "../../api/artwork";
import GalleryContext from "../../context/GalleryContext";

const MyArtPage = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom color="secondary">
        My Art
      </Typography>
      <GalleryContext.Consumer>
        {context => (
          <InfiniteGalleryScroll
            fetchImages={fetchMyArt}
            userId={context.userId}
            isEditAndDeleteMenu={true}
          />
        )}
      </GalleryContext.Consumer>
    </>
  );
};

export default MyArtPage;
