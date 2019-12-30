import React from "react";
// import { Formik, Field, Form } from "formik";
// import * as Yup from "yup";
// import { TextField } from "formik-material-ui";
// import Typography from "@material-ui/core/Typography";
// import ImageIcon from "@material-ui/icons/Image";
// import Button from "@material-ui/core/Button";
// import Paper from "@material-ui/core/Paper";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "typeface-roboto";

import EditArtworkForm from "../components/EditArtworkForm";
import GalleryContext from "../../context/GalleryContext";

const EditArtworkPage = () => (
  <Grid container justify={"center"}>
    <Grid item xs={8}>
      <EditArtworkForm name="Taj" description="fuck my ass" />
    </Grid>
  </Grid>
);

export default EditArtworkPage;
