import { Meteor } from "meteor/meteor";
export const Collaborations = new Mongo.Collection('collaborations');

Meteor.methods({
    "collaborations.getAllCollaborations"() {
      // if (!this.userId) {
      //   throw new Meteor.Error("Please Login.");
      // }
      return Collaborations.find({}).fetch();
    }
  });
//Example:
// import { Meteor } from "meteor/meteor";
// Meteor.call("collaborations.getAllCollaborations", null, (err, res) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     // success!
//     console.log("res", res);
//   }
// });