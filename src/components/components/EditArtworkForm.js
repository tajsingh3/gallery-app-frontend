import React from "react";
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
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import FileDrop from "../components/FileDrop";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const EditArtworkForm = ({ name = "", description = "" }) => {
  const classes = useStyles();
  console.log("editing");

  const [addFileChecked, setAddFileChecked] = React.useState(false);

  const handleCheckboxChange = event => {
    setAddFileChecked(event.target.checked);
  };

  return (
    <Formik
      initialValues={{ name, description, artworkImage: "" }}
      validationSchema={Yup.object({
        name: Yup.string().required(),
        description: Yup.string()
          .max(50)
          .required()
        // artworkImage: Yup.mixed().required("artwork image is a required field")
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting, handleChange }) => (
        <>
          <Typography variant="h4" gutterBottom>
            Edit Artwork
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
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={addFileChecked}
                      onChange={handleCheckboxChange}
                      value="primary"
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />
                  }
                  label="Add new image"
                />
              </div>
              {addFileChecked && (
                <div className="file-drop">
                  <ImageIcon fontSize="large" />
                  <FileDrop handleChange={handleChange} />
                </div>
              )}
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

export default EditArtworkForm;
