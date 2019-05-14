import React, { Fragment } from "react";
import { Route, Switch } from "react-router";
import DirectoryContainer from "../../pages/Directory";
import LandingPageContainer from "../../pages/LangingPage";
import ProfileContainer from "../../pages/Profile";
import PreferenceContainer from "../../pages/Preference";
import Menu from "../menu";

export default () => (
  <Fragment>
    {window.location.pathname === "/preference" ? (
      <Switch>
        {" "}
        <Route
          exact
          path="/preference"
          name="preference"
          component={PreferenceContainer}
        />
      </Switch>
    ) : (
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
            path="/profile"
            name="profile"
            component={ProfileContainer}
          />
          <Route
            exact
            path="/"
            exact
            name="landingpage"
            component={LandingPageContainer}
          />
        </Switch>
      </Fragment>
    )}
  </Fragment>
);
