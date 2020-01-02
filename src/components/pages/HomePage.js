import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container justify="center">
        <Grid item>
          <Paper className={classes.root} elevation={24}>
            <img src="/images/gallery.jpg" class="gallery-image" />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
