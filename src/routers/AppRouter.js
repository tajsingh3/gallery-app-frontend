import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../components/pages/HomePage";
import CommunityArtPage from "../components/pages/CommunityArtPage";
import MyArtPage from "../components/pages/MyArtPage";
import AddArtworkPage from "../components/pages/AddArtworkPage";
import EditArtworkPage from "../components/pages/EditArtworkPage";
import DeleteArtworkPage from "../components/pages/DeleteArtworkPage";
import ErrorPage from "../components/pages/ErrorPage";
import PrivateRoute from "../routers/PrivateRoute";
import LoginPage from "../components/pages/LoginPage";
import SignupPage from "../components/pages/SignupPage";

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
        <PrivateRoute path="/editartwork">
          <EditArtworkPage />
        </PrivateRoute>
        <PrivateRoute path="/deleteartwork">
          <DeleteArtworkPage />
        </PrivateRoute>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/error">
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  );
};

export default AppRouter;
