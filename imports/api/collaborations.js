import { Meteor } from "meteor/meteor";
export const Collaborations = new Mongo.Collection("collaborations");

if (Meteor.isServer) {
  Meteor.publish("allCollaborations", function profilePublication() {
    return Collaborations.find({});
  });
}
// import { withTracker } from "meteor/react-meteor-data";
// import {Collaborations} from "../../../api/collaborations";
// export default withTracker(() => {
//   Meteor.subscribe('allCollaborations');
//   return {
//     allCollaborations: Collaborations.find({}).fetch(),
//   };
// })(...);
