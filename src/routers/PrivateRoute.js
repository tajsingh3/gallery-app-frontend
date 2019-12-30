import React from "react";
import { Route, Redirect } from "react-router-dom";

import GalleryContext from "../context/GalleryContext";

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return (
          <GalleryContext.Consumer>
            {context => {
              const isAuth = !!context.userId;
              return isAuth ? children : <Redirect to="/" />;
            }}
          </GalleryContext.Consumer>
        );
      }}
    />
  );
};

export default PrivateRoute;
