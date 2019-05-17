import React, { Fragment } from "react";
import { Route, Switch } from "react-router";
import DirectoryContainer from "../../pages/Directory";
import LandingPageContainer from "../../pages/LangingPage";
import Profile from "../../pages/Profile";
import PreferenceContainer from "../../pages/Preference";
import Menu from "../menu";
import { withRouter } from "react-router";
const Layout = ({ match, location, history }) => (
  <Fragment>
    {location.pathname == "/preference" ? (
      <Switch>
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
            path="/preference"
            name="preference"
            component={PreferenceContainer}
          />

          <Route
            exact
            path="/directory"
            name="directory"
            component={DirectoryContainer}
          />

          {/* <Route exact path="/profile" name="profile" component={Profile} /> */}

          <Route
            exact
            path="/profile/:userId"
            name="profile"
            component={Profile}
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
export default withRouter(Layout);
