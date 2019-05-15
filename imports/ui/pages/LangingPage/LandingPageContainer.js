import React, { Fragment } from "react";
import HomeBanner from "../../component/HomeBanner";
import HomeDes from "../../component/HomeDes";
import HomeMap from "../../component/HomeMap";
import Footer from "../../component/Footer";
import SmartContract from "../../component/SmartContract";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { Collaborations } from "../../../api/collaborations";
import { Artists } from "../../../api/artists";
import SlideShow from "../../component/SlideShow";
const LandingPageContainer = ({ collaborations, users }) => {
  return (
    <Fragment>
      <HomeBanner />
      <HomeDes />
      <HomeMap users={users} />
      <SlideShow media={collaborations} />
      <SmartContract />
      <Footer />
    </Fragment>
  );
};

export default withTracker(() => {
  Meteor.subscribe("allCollaborations");
  Meteor.subscribe("allusers");
  return {
    collaborations: Collaborations.find({}).fetch(),
    users: Artists.find({}).fetch()
  };
})(LandingPageContainer);
