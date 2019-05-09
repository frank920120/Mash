import { Meteor } from "meteor/meteor";
import { Artists } from "../../api/artists";
Meteor.startup(() => {
  if (Artists.find().count() === 0) {
    Artists.insert({
        fullname: '12345',
        description: '12345',
        email:'123456@red.com',
    
        // location:{
        //     coords:{
        //         //tbd from google maps api 
    
        //     }
        // },
        
        // reviews: {
        //     text: '',
        //     reviewer: ''
        // },
    
        // //ie: guitar, drums 
        // specialties: [],
        // //ie: rock, classical 
        // genre: [],
    });
  }
});