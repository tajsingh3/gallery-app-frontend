import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../components/pages/HomePage";
import CommunityArtPage from "../components/pages/CommunityArtPage";
import MyArtPage from "../components/pages/MyArtPage";
import AddArtworkPage from "../components/pages/AddArtworkPage";
import ErrorPage from "../components/pages/ErrorPage";
import PrivateRoute from "../routers/PrivateRoute";

const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/communityart">
          <CommunityArtPage />
        </Route>
        <PrivateRoute path="/myart">
          <MyArtPage />
        </PrivateRoute>
        <PrivateRoute path="/addartwork">
          <AddArtworkPage />
        </PrivateRoute>
        <Route path="/error">
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  );
};

export default AppRouter;
