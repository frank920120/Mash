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
 *  Meteor.subscribe('allArtists');
 */
if (Meteor.isServer) {
  Meteor.publish("allArtists", function allUsersPublication() {
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
    // if (!this.userId) {
    //   throw new Meteor.Error("Please Login.");
    // }
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
if (Meteor.isServer) {
  Meteor.publish("getProfileById", function profilePublication(userIdString) {
    console.log(userIdString);
    return Artists.find({ _id: userIdString }, { emails: 0, services: 0 });
  });
}

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

//get the filter
if (Meteor.isServer) {
  Meteor.publish("getFilter", function profilePublication(userIdString) {
    console.log(userIdString);
    return Artists.find({ _id: this.userId }, { "profile.myFilter": 1 });
  });
}
/**
 * Filter all users
 *  Meteor.subscribe('filterUsers');
 */
if (Meteor.isServer) {
  Meteor.publish("filterUsers", function profilePublication(filter) {
    console.log("filter", filter);
    const conditions = [];
    filter.fullname && filter.fullname.length > 0
      ? conditions.push({
          "profile.fullname": { $regex: `.*${filter.fullname}.*` }
        })
      : null;
    filter.specialties && filter.specialties.length > 0
      ? conditions.push({ "profile.specialties": { $all: filter.specialties } })
      : null;
    filter.genres && filter.genres.length > 0
      ? conditions.push({ "profile.genres": { $all: filter.genre } })
      : null;
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
//     genres:['rock'] // find genres contain all strings in the array
//   };
//   Meteor.subscribe("filterUsers", filter);
//   return {
//     filteredusers: Artists.find({}).fetch()
//   };
// })(ComponentName);

//for sending message
// const message = {
//   toId: '',
//   text: '',
//   fromId: '',
//   from:''
// };
Meteor.methods({
  "artists.addMessage"(message) {
    // if (!this.userId) {
    //   throw new Meteor.Error("Please Login.");
    // }
    console.log(message);
    Artists.update(
      { _id: message.toId },
      {
        $push: {
          "profile.messages": {
            type: message.type,
            fromId: message.fromId,
            from: message.from,
            text: message.text
          }
        }
      }
    );
  }
});

// friend={
//   idA:'',
//   idB:''
// }
Meteor.methods({
  "artists.addFriend"(friend) {
    // if (!this.userId) {
    //   throw new Meteor.Error("Please Login.");
    // }
    Artists.update(
      { _id: friend.idA },
      {
        $push: {
          "profile.friends": friend.idB
        }
      }
    );
    Artists.update(
      { _id: friend.idA },
      {
        $set: {
          "profile.hasNewFriend": true
        }
      }
    );
    Artists.update(
      { _id: friend.idB },
      {
        $set: {
          "profile.hasNewFriend": true
        }
      }
    );
    Artists.update(
      { _id: friend.idB },
      {
        $push: {
          "profile.friends": friend.idA
        }
      }
    );
  }
});

Meteor.methods({
  "artists.removeNewFriendAlert"() {
    // if (!this.userId) {
    //   throw new Meteor.Error("Please Login.");
    // }
    Artists.update(
      { _id: this.userId },
      {
        $set: {
          "profile.hasNewFriend": false
        }
      }
    );
  }
});
