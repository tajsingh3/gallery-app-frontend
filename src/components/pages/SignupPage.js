import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { TextField } from "formik-material-ui";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const SignupPage = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center" direction="column">
      <Typography variant="h5" gutterBottom color="secondary" align="center">
        Sign up
      </Typography>
      <Grid item xs={8}>
        <Paper className={classes.root} elevation={24}>
          <Formik
            initialValues={{
              email: "",
              password: "",
              passwordConfirmation: ""
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email")
                .required("Required"),
              password: Yup.string().required("Password required"),
              passwordConfirmation: Yup.string().oneOf(
                [Yup.ref("password"), null],
                "Passwords must match"
              )
            })}
            onSubmit={() => {
              console.log("submitted form");
            }}
          >
            <Form>
              <Field
                name="email"
                type="text"
                component={TextField}
                label="Email"
                fullWidth
                margin="normal"
              />
              <Field
                name="password"
                type="password"
                component={TextField}
                label="Password"
                fullWidth
                margin="normal"
              />
              <Field
                name="passwordConfirmation"
                type="password"
                component={TextField}
                label="Confirm password"
                fullWidth
                margin="normal"
              />
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                fullWidth
              >
                Sign up
              </Button>
            </Form>
          </Formik>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SignupPage;
