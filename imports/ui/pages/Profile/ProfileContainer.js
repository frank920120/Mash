import React from "react";
import Profile from "./Profile";
import { Meteor } from "meteor/meteor";

const ProfileContainer = () => {
  // const artist = Meteor.call("artists.getProfileByFilter", "Wbzru36tgHp6Pxwme");
  // console.log(artist);

  return <Profile />;
};

export default ProfileContainer;
