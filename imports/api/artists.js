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
  Meteor.publish("allusers", function profilePublication() {
    return Artists.find({},  { emails: 0, services: 0 });
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
Meteor.methods({
  "artists.getProfileContainName"(userName) {
    if (!this.userId) {
      throw new Meteor.Error("Please Login.");
    }
    find({ _id: { $regex: ".*o.*" } });
    return Artists.find(
      { fullname: { $regex: `.*${userName}.*` } },
      { services: 0 }
    ).fetch();
  }
});

/**
 * Get user information by user ID
 * Input: String userId
 * Call:  Meteor.call('artists.getProfileById', 'userId');
 */
Meteor.methods({
  "artists.getProfileById"(userId) {
    if (!this.userId) {
      throw new Meteor.Error("Please Login.");
    }
    return Artists.find({ _id: userId }, { emails: 0, services: 0 }).fetch();
  }
});

/**
 * Get user information by user specialties
 * Input: Object filter{
 *        specialties:[],
 *        genre:[],
 *      }
 * Call:  Meteor.call('artists.getProfileByFilter', 'userId');
 */
Meteor.methods({
  "artists.getProfileByFilter"(filter) {
    console.log("filter", filter);
    // if (!this.userId) {
    //   throw new Meteor.Error("Please Login.");
    // }

    return Artists.find(
      {
        specialties: { $all: filter.specialties },
        genre: { $all: filter.genre }
      },
      { emails: 0, services: 0 }
    ).fetch();
  }
});
/**
 * Get users by filter {specialties,genre,musicWorks number, review number, distance}
 */

/**
 * Get user by filter {musicWorks number}
 */

/**
 * Get user by filter {review number}
 */

/**
 * Get user by filter {distance}
 */

/**
 * Get all user Locations
 *
 */
Meteor.methods({
  "artists.getLocationsByFilter"() {
    if (!this.userId) {
      throw new Meteor.Error("Please Login.");
    }
    return Artists.find({}, { location: 1 }).fetch();
  }
});


/**
 * Get all users
 *
 */
Meteor.methods({
  "artists.getAllUsers"() {
    // if (!this.userId) {
    //   throw new Meteor.Error("Please Login.");
    // }
    return Artists.find({},  { emails: 0, services: 0 }).fetch();
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