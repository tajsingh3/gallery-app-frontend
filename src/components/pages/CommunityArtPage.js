import React from "react";

import InfiniteGalleryScroll from "../components/InfiniteGalleryScroll";
import { fetchCommunityArt } from "../../api/artwork";

const CommunityArtPage = () => {
  return (
    <div>
      <h1>Community Art Page</h1>
      <InfiniteGalleryScroll fetchImages={fetchCommunityArt} />
    </div>
  );
};

export default CommunityArtPage;
