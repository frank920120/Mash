import React, { Fragment } from "react";
import HomeBanner from "../../component/HomeBanner";
import HomeDes from "../../component/HomeDes";
import HomeMap from "../../component/HomeMap";
import { withTracker } from "meteor/react-meteor-data";
import { Artists } from "../../../api/artists";
import { Meteor } from "meteor/meteor";
const LandingPageContainer = ({ profile }) => {
  console.log(profile);
  return (
    <Fragment>
      <HomeBanner />
      <HomeDes />
      <HomeMap />
    </Fragment>
  );
};

export default withTracker(() => {
  Meteor.subscribe("profile");
  return {
    profile: Artists.find({}).fetch()
  };
})(LandingPageContainer);
