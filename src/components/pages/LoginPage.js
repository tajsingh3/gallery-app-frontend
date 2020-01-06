import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { TextField } from "formik-material-ui";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import GallerContext from "../../context/GalleryContext";
import { sendLoginData } from "../../api/auth";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const LoginPage = () => {
  const classes = useStyles();

  const [didLogin, setDidLogin] = useState(false);

  const handleLogin = (userId, setUserId) => {
    setUserId(userId);
    setDidLogin(true);
  };

  return (
    <>
      {didLogin && <Redirect to="myart" />}

      <Grid container justify="center" alignItems="center" direction="column">
        <Typography variant="h5" gutterBottom color="secondary" align="center">
          Login
        </Typography>
        <Grid item xs={8}>
          <Paper className={classes.root} elevation={24}>
            <GallerContext.Consumer>
              {({ setUserId }) => (
                <Formik
                  initialValues={{
                    email: "",
                    password: ""
                  }}
                  validationSchema={Yup.object({
                    email: Yup.string()
                      .email("Invalid email")
                      .required("Required"),
                    password: Yup.string().required("Password required")
                  })}
                  onSubmit={values => {
                    let data = {
                      email: values.email,
                      password: values.password
                    };

                    sendLoginData(data)
                      .then(userId => {
                        if (userId) {
                          handleLogin(userId, setUserId);
                        } else {
                          console.log(
                            "userId does not exist push to error page"
                          );
                        }
                      })
                      .catch(error => console.log(error));
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
                    <Button
                      type="submit"
                      color="secondary"
                      variant="contained"
                      fullWidth
                    >
                      Login
                    </Button>
                  </Form>
                </Formik>
              )}
            </GallerContext.Consumer>
            {/* <Formik
              initialValues={{
                email: "",
                password: ""
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Invalid email")
                  .required("Required"),
                password: Yup.string().required("Password required")
              })}
              onSubmit={values => {
                let data = {
                  email: values.email,
                  password: values.password
                };

                sendLoginData(data)
                  .then(userId => {
                    if (userId) {
                      handleLogin(userId);
                    }
                  })
                  .catch(error => console.log(error));
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
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  fullWidth
                >
                  Login
                </Button>
              </Form>
            </Formik> */}
          </Paper>
        </Grid>
      </Grid>

      {/* <GallerContext.Consumer>
        {({ setUserId }) => (
          <Button
            onClick={() => handleLogin(setUserId)}
            variant="contained"
            color="secondary"
          >
            fake Login
          </Button>
        )}
      </GallerContext.Consumer> */}
    </>
  );
};

export default LoginPage;
