import React from "react";

import InfiniteGalleryScroll from "../components/InfiniteGalleryScroll";
import { fetchCommunityArt } from "../../api/artwork";

const CommunityArtPage = () => {
  return <InfiniteGalleryScroll fetchImages={fetchCommunityArt} />;
};

export default CommunityArtPage;
