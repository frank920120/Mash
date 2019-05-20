import { Meteor } from "meteor/meteor";
export const Collaborations = new Mongo.Collection("collaborations");

if (Meteor.isServer) {
  Meteor.publish("allCollaborations", function profilePublication() {
    return Collaborations.find({});
  });
}
