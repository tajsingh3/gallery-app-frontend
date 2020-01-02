import React from "react";
import Typography from "@material-ui/core/Typography";

import InfiniteGalleryScroll from "../components/InfiniteGalleryScroll";
import { fetchCommunityArt } from "../../api/artwork";

const CommunityArtPage = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom color="secondary">
        Community Art
      </Typography>
      <InfiniteGalleryScroll
        fetchImages={fetchCommunityArt}
        isEditAndDeleteMenu={false}
      />
    </div>
  );
};

export default CommunityArtPage;
