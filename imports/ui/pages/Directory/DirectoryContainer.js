import React, { Component } from "react";
import ArtistCard from "../../component/ArtistCard/ArtistCard";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Artists } from "../../../api/artists";

class DirectoryContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <p>This is DirectoryContainer</p>
        </div>
        {/* <ArtistCard /> */}
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("allusers");
  return {
    allUsers: Artists.find({}).fetch()
  };
})(DirectoryContainer);
