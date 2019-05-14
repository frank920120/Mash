import React, { Fragment } from "react";
import HomeBanner from "../../component/HomeBanner";
import HomeDes from "../../component/HomeDes";
import HomeMap from "../../component/HomeMap";
import Footer from "../../component/Footer";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { Collaborations } from "../../../api/collaborations";
import SlideShow from "../../component/SlideShow";
const LandingPageContainer = ({ collaborations }) => {
  return (
    <Fragment>
      <HomeBanner />
      <HomeDes />
      <HomeMap />
      <SlideShow media={collaborations} />
      <Footer />
    </Fragment>
  );
};

export default withTracker(() => {
  Meteor.subscribe("allCollaborations");
  return {
    collaborations: Collaborations.find({}).fetch()
  };
})(LandingPageContainer);
