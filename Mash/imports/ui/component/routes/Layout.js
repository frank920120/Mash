import React, { Fragment } from "react";
import { Route, Switch } from "react-router";
import DirectoryContainer from "../../pages/Directory";
import LandingPageContainer from "../../pages/LangingPage";
import ProfileContainer from "../../pages/Profile";
import PreferenceContainer from "../../pages/Preference";
import Menu from "../menu";

export default () => (
  <Fragment>
    <Menu />
    <Switch>
      <Route
        exact
        path="/directory"
        name="directory"
        component={DirectoryContainer}
      />
      <Route
        exact
        path="/preference"
        name="preference"
        component={PreferenceContainer}
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
