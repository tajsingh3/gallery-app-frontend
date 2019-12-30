import React from "react";

import InfiniteGalleryScroll from "../components/InfiniteGalleryScroll";
import { fetchMyArt } from "../../api/artwork";
import GalleryContext from "../../context/GalleryContext";

const MyArtPage = () => {
  return (
    <GalleryContext.Consumer>
      {context => (
        <InfiniteGalleryScroll
          fetchImages={fetchMyArt}
          userId={context.userId}
        />
      )}
    </GalleryContext.Consumer>
  );
};

export default MyArtPage;
