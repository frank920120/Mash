import { Meteor } from "meteor/meteor";
export const Artists = Meteor.users;

/**
 * Subscribe profile
 *  Meteor.subscribe('profile');
 */
if (Meteor.isServer) {
  Meteor.publish("profile", function profilePublication() {
    return Artists.find({ _id: this.userId }, { services: 0 });
  });
}

/**
 * Subscribe all users
 *  Meteor.subscribe('allusers');
 */
if (Meteor.isServer) {
  Meteor.publish("allusers", function allUsersPublication() {
    return Artists.find({}, { emails: 0, services: 0 });
  });
}
// import { withTracker } from "meteor/react-meteor-data";
// import {Artists} from "../../../api/artists";
// export default withTracker(() => {
//   Meteor.subscribe('allusers');
//   return {
//     allUsers: Artists.find({}).fetch(),
//   };
// })(App);

/**
 *  Updating profiles
 *  Input: Object user{
 *    description:'',
 *    imageurl:'',
 *    location:{
 *        lat:...,
 *        lng:...
 *     },
 *     reviews: ['','',....],
 *     specialties:[],
 *      genre:[],
 *      musicWorks:[],}
 *  Call:  Meteor.call('artists.updateProfile',user);
 */
Meteor.methods({
  "artists.updateProfile"(user) {
    if (!this.userId) {
      throw new Meteor.Error("Please Login.");
    }
    Artists.update(
      { _id: user._id },
      {
        $set: {
          ...user
        }
      }
    );
  }
});

/**
 * Get user information contain user name
 * Input: String userName
 * Call:  Meteor.call('artists.getProfileContainName', 'userName');
 */
// Meteor.methods({
//   "artists.getProfileContainName"(userName) {
//     if (!this.userId) {
//       throw new Meteor.Error("Please Login.");
//     }
//     find({ _id: { $regex: ".*o.*" } });
//     return Artists.find(
//       { fullname: { $regex: `.*${userName}.*` } },
//       { services: 0 }
//     ).fetch();
//   }
// });

/**
 * Get user information by user ID
 * Input: String userId
 * Call:  Meteor.call('artists.getProfileById', 'userId');
 */
// Meteor.methods({
//   "artists.getProfileById"(userId) {
//     if (!this.userId) {
//       throw new Meteor.Error("Please Login.");
//     }
//     return Artists.find({ _id: userId }, { emails: 0, services: 0 }).fetch();
//   }
// });

/**
 * Get all user Locations
 *
 */
// Meteor.methods({
//   "artists.getLocationsByFilter"() {
//     if (!this.userId) {
//       throw new Meteor.Error("Please Login.");
//     }
//     return Artists.find({}, { location: 1 }).fetch();
//   }
// });

/**
 * Get all users
 */
Meteor.methods({
  "artists.getAllUsers"() {
    // if (!this.userId) {
    //   throw new Meteor.Error("Please Login.");
    // }
    return Artists.find({}, { emails: 0, services: 0 }).fetch();
  }
});
//Example:
// import { Meteor } from "meteor/meteor";
// Meteor.call("artists.getAllUsers", null, (err, res) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     // success!
//     console.log("res", res);
//   }
// });

/**
 * Filter all users
 *  Meteor.subscribe('filterUsers');
 */
if (Meteor.isServer) {
  Meteor.publish("filterUsers", function profilePublication(filter) {
    console.log("filter", filter);
    const conditions = [];
    filter.fullname
      ? conditions.push({ fullname: { $regex: `.*${filter.fullname}.*` } })
      : null;
    filter.specialties
      ? conditions.push({ specialties: { $all: filter.specialties } })
      : null;
    filter.genre ? conditions.push({ genre: { $all: filter.genre } }) : null;
    const query =
      conditions.length === 0
        ? {}
        : {
            $and: conditions
          };
    console.log("conditions", conditions);
    return Artists.find(query, { emails: 0, services: 0 });
  });
}
/**
 * example for filter users
 */
// import { Meteor } from "meteor/meteor";
// import { Artists } from "../../../api/artists";
// export default withTracker(() => {
//   const filter = {
//     fullname: "Ali",  //find the name  contain the string
//     specialties:['dancing'],  // find specialties contain all strings in the array
//     genre:['rock'] // find genre contain all strings in the array
//   };
//   Meteor.subscribe("filterUsers", filter);
//   return {
//     filteredusers: Artists.find({}).fetch()
//   };
// })(ComponentName);
