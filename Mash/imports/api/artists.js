import { Meteor } from "meteor/meteor";
export const Artists = Meteor.users;
/**
 *  Updating profiles
 *  Input: user{
 *    description:'',
 *    location:{
 *        lat:...,
 *        lng:...
 *     },
 *     reviews: ['','',....],
 *     specialties:[],
 *      genre:[],
 *      musicWorks:[]}
 *  Call:  Meteor.call('artists.updateProfile',user);
 */
  Meteor.methods({
    'artists.updateProfile'(user) {
        if (!this.userId) {
          throw new Meteor.Error(
           "Please Login."
          );
        }
        Artists.update({_id:user._id}, {
          $set: {
           ...user
          }
        });
      },
  });

 /**
  * Get user information by user name
  */


 /**
  * Get user by filter {specialties,genre,musicWorks number, review number, distance}
  */


  /**
  * Get user by filter {specialties}
  */



  /**
  * Get user by filter {genre}
  */



  /**
  * Get user by filter {musicWorks number}
  */


  /**
  * Get user by filter {review number, distance}
  */



  /**
  * Get user by filter {distance}
  */


  /**
   * 
  * Get all user Locations by filter {distance}
  */

