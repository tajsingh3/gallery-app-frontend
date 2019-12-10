import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import Typography from "@material-ui/core/Typography";
import ImageIcon from "@material-ui/icons/Image";
import Button from "@material-ui/core/Button";

import "typeface-roboto";

const CreateArtForm = () => {
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
        <Form>
          {/* <label htmlFor="name">Art Name: </label> */}
          <Field
            name="name"
            type="text"
            component={TextField}
            label="Name"
            fullWidth
          />
          {/* <div className="error-message">
            <ErrorMessage name="name" />
          </div> */}
          {/* <label htmlFor="description">Description: </label> */}
          <Field
            name="description"
            type="text"
            component={TextField}
            label="Description"
            fullWidth
          />
          {/* <div className="error-message">
            <ErrorMessage name="description" />
          </div> */}
          {/* <label htmlFor="artworkImage">
            <Typography variant="body1">Artwork Image:</Typography>
          </label> */}
          <ImageIcon />
          <Field name="artworkImage" type="file" onBlur={null} />
          {/* <div className="error-message">
            <ErrorMessage name="artworkImage" />
          </div> */}
          <Typography
            variant="caption"
            display="block"
            // className="error-message"
            color="error"
          >
            <ErrorMessage name="artworkImage" />
          </Typography>
          {/* <button type="submit" disabled={isSubmitting}>
            Submit
          </button> */}
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            disabled={isSubmitting}
          >
            submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CreateArtForm;
