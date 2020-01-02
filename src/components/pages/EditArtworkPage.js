import React from "react";
import { useLocation } from "react-router-dom";
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

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const EditArtworkPage = () => {
  const query = useQuery();
  const name = query.get("name");
  const description = query.get("description");
  const artworkId = query.get("artworkId");

  return (
    <Grid container justify={"center"}>
      <Grid item xs={8}>
        <EditArtworkForm
          name={name}
          description={description}
          artworkId={artworkId}
        />
      </Grid>
    </Grid>
  );
};

export default EditArtworkPage;
