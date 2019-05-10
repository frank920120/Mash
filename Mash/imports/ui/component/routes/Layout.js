import React, { Fragment } from "react";
import { Route, Switch } from "react-router";
import DiretoryContainer from "../../pages/Directory";
import LandingPageContainer from "../../pages/LangingPage";
import ProfileContainer from "../../pages/Profile";
import PerferenceContainer from "../../pages/Perference";
import Menu from "../menu";

export default () => (
  <Fragment>
    <Menu />
    <Switch>
      <Route
        exact
        path="/directory"
        name="directory"
        component={DiretoryContainer}
      />
      <Route
        exact
        path="/perference"
        name="perference"
        component={PerferenceContainer}
      />
      <Route
        exact
        path="/profile"
        name="profile"
        component={ProfileContainer}
      />
      {/* <Route
              exact
              path="/profile/:userId"
              name="profile"
              component={ProfileContainer}
            /> */}
      <Route
        exact
        path="/"
        exact
        name="landingpage"
        component={LandingPageContainer}
      />
    </Switch>
  </Fragment>
);
