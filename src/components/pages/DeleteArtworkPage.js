import React from "react";
import { useLocation } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const DeletArtworkPage = () => {
  const query = useQuery();
  const name = query.get("name");
  const description = query.get("description");

  return (
    <div>
      <Typography variant="h4" gutterBottom color="secondary">
        Artwork Deleted
      </Typography>
      <Grid container justify="center">
        <Grid item>
          <div>
            <Typography variant="b1" gutterBottom color="secondary">
              Name: {name}
            </Typography>
          </div>
          <div>
            <Typography variant="b1" gutterBottom color="secondary">
              Description: {description}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeletArtworkPage;
