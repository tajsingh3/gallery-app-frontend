import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
import { sendEditedArtworkData } from "../../api/artwork";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const EditArtworkForm = ({ artworkId, name = "", description = "" }) => {
  const classes = useStyles();
  const history = useHistory();

  const [addFileChecked, setAddFileChecked] = useState(false);
  const [fileInput, setFileInput] = useState(null);

  const handleCheckboxChange = event => {
    setAddFileChecked(event.target.checked);
  };

  return (
    <>
      <Formik
        initialValues={{ name, description, artworkImage: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required(),
          description: Yup.string()
            .max(50)
            .required()
        })}
        onSubmit={(values, { setSubmitting }) => {
          let formData = new FormData();
          formData.append("name", values.name);
          formData.append("description", values.description);
          formData.append("imageFile", fileInput);

          sendEditedArtworkData(artworkId, formData, setSubmitting)
            .then(isEditSuccess => {
              if (isEditSuccess) history.push("/myart");
            })
            .catch(error => {
              console.log(error);
            });
        }}
      >
        {({ isSubmitting, handleChange }) => (
          <>
            <Typography variant="h4" gutterBottom color="secondary">
              Edit Artwork
            </Typography>
            <Paper className={classes.root} elevation={24}>
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
                    <FileDrop
                      handleChange={handleChange}
                      setFileInput={setFileInput}
                    />
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
    </>
  );
};

export default EditArtworkForm;
