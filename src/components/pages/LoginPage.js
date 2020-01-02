import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import Button from "@material-ui/core/Button";

import GallerContext from "../../context/GalleryContext";

const LoginPage = () => {
  const [didLogin, setDidLogin] = useState(false);

  const handleLogin = setUserId => {
    setUserId(1);
    setDidLogin(true);
  };

  return (
    <>
      {didLogin && <Redirect to="myart" />}

      <h1>Login page</h1>
      <GallerContext.Consumer>
        {({ setUserId }) => (
          <Button
            onClick={() => handleLogin(setUserId)}
            variant="contained"
            color="secondary"
          >
            Login
          </Button>
        )}
      </GallerContext.Consumer>
    </>
  );
};

export default LoginPage;
