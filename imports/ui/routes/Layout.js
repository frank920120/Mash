import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router";
import DirectoryContainer from "../pages/Directory";
import LandingPageContainer from "../pages/LandingPage";
import Profile from "../pages/Profile";
import PreferenceContainer from "../pages/Preference";
import Menu from "../component/Menu";
import { withRouter } from "react-router";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";

const Layout = ({ match, location, history, currentUserId }) => {
  if (!currentUserId) {
    return (
      <Fragment>
        <Menu />
        <Switch>
          <Route
            exact
            path="/"
            name="landingpage"
            component={LandingPageContainer}
          />
          <Redirect from="*" to="/" />
        </Switch>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        {location.pathname !== "/preference" && <Menu />}
        <Switch>
          <Route
            exact
            path="/preference"
            name="preference"
            component={PreferenceContainer}
          />

          <Route
            exact
            path="/"
            name="landingpage"
            component={LandingPageContainer}
          />
          <Route
            exact
            path="/directory"
            name="directory"
            component={DirectoryContainer}
          />
          <Route
            exact
            path="/profile/:userId"
            name="profile"
            component={Profile}
          />
        </Switch>
      </Fragment>
    );
  }
};

export default withRouter(
  withTracker(() => {
    return {
      currentUserId: Meteor.userId()
    };
  })(Layout)
);
