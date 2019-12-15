import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import Typography from "@material-ui/core/Typography";
import ImageIcon from "@material-ui/icons/Image";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import "typeface-roboto";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const AddArtworkForm = () => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{ name: "", description: "", artworkImage: "" }}
      validationSchema={Yup.object({
        name: Yup.string().required(),
        description: Yup.string()
          .max(50)
          .required(),
        artworkImage: Yup.mixed().required("Artwork Image file required")
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <>
          <Typography variant="h4" gutterBottom>
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
              />
              <Field
                name="description"
                type="text"
                multiline
                rowsMax="4"
                component={TextField}
                label="Description"
                fullWidth
              />
              <ImageIcon />
              <Field name="artworkImage" type="file" onBlur={null} />
              <Typography variant="caption" display="block" color="error">
                <ErrorMessage name="artworkImage" />
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                type="submit"
                disabled={isSubmitting}
              >
                submit
              </Button>
            </Form>
          </Paper>
        </>
      )}
    </Formik>
  );
};

export default AddArtworkForm;
