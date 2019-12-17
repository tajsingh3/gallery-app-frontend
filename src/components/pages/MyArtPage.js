import React from "react";

import InfiniteGalleryScroll from "../components/InfiniteGalleryScroll";
import { fetchMyArt } from "../../api/artwork";

const MyArtPage = () => {
  return <InfiniteGalleryScroll fetchImages={fetchMyArt} />;
};

export default MyArtPage;
