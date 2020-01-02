import React from "react";
// import { Formik, Field, Form } from "formik";
// import * as Yup from "yup";
// import { TextField } from "formik-material-ui";
// import ImageIcon from "@material-ui/icons/Image";
// import Button from "@material-ui/core/Button";
// import Paper from "@material-ui/core/Paper";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "typeface-roboto";

import AddArtworkForm from "../components/AddArtworkForm";
import GalleryContext from "../../context/GalleryContext";

const AddArtworkPage = () => (
  <Grid container justify={"center"}>
    <Grid item xs={8}>
      <GalleryContext.Consumer>
        {context => <AddArtworkForm userId={context.userId} />}
      </GalleryContext.Consumer>
    </Grid>
  </Grid>
);

export default AddArtworkPage;
