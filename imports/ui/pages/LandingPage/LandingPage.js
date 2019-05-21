import React, { Fragment } from "react";
import HomeBanner from "../../component/HomeBanner";
import HomeDes from "../../component/HomeDes";
import HomeMap from "../../component/HomeMap";
import Footer from "../../component/Footer";
import SmartContract from "../../component/SmartContract";
import { withTracker } from "meteor/react-meteor-data";
import { Collaborations } from "../../../api/collaborations";
import { Artists } from "../../../api/artists";
import SlideShow from "../../component/SlideShow";
const LandingPage = ({ collaborations, users }) => {
  return (
    <Fragment>
      <HomeBanner />
      <HomeDes />
      <SmartContract />
      <SlideShow media={collaborations} />
      <HomeMap users={users} />
      <Footer />
    </Fragment>
  );
};

export default withTracker(() => {
  Meteor.subscribe("allCollaborations");
  Meteor.subscribe("allArtists");
  return {
    collaborations: Collaborations.find({}).fetch(),
    users: Artists.find({}).fetch()
  };
})(LandingPage);
