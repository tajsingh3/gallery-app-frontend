import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import Typography from "@material-ui/core/Typography";
import ImageIcon from "@material-ui/icons/Image";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import "typeface-roboto";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import FileDrop from "../components/FileDrop";
import { sendArtworkData } from "../../api/artwork";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const AddArtworkForm = ({ userId }) => {
  const classes = useStyles();

  const [fileInput, setFileInput] = useState(null);

  return (
    <Formik
      initialValues={{ name: "", description: "", artworkImage: "" }}
      validationSchema={Yup.object({
        name: Yup.string().required(),
        description: Yup.string()
          .max(50)
          .required(),
        artworkImage: Yup.mixed().required("artwork image is a required field")
      })}
      onSubmit={(values, { setSubmitting }) => {
        let formData = new FormData();
        formData.append("name", values.name);
        formData.append("description", values.description);
        formData.append("imageFile", fileInput);

        sendArtworkData(userId, formData, setSubmitting);
      }}
    >
      {({ isSubmitting, handleChange }) => (
        <>
          <Typography variant="h4" gutterBottom color="secondary">
            Add Artwork
          </Typography>
          <Paper className={classes.root}>
            <Form>
              <Field
                name="name"
                type="text"
                component={TextField}
                label="Name"
                fullWidth
                margin="normal"
              />
              <Field
                name="description"
                type="text"
                multiline
                rowsMax="4"
                component={TextField}
                label="Description"
                fullWidth
                margin="normal"
              />
              <div className="file-drop">
                <ImageIcon fontSize="large" />
                <FileDrop
                  handleChange={handleChange}
                  setFileInput={setFileInput}
                />
              </div>
              <Button
                variant="outlined"
                color="primary"
                type="submit"
                disabled={isSubmitting}
              >
                <AddCircleIcon />
              </Button>
            </Form>
          </Paper>
        </>
      )}
    </Formik>
  );
};

export default AddArtworkForm;
