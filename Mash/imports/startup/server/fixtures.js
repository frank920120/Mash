import { Meteor } from "meteor/meteor";
import { Artists } from "../../api/artists";
Meteor.startup(() => {
  if (Artists.find().count() === 0) {
    Artists.insert({
        fullname: 'Alice',
        description: 'Hi I am a singer.',
        email:'alice@red.com',
        location:{
            lat:null,
            lng:null
        }, 
        reviews: [{
            text: 'Good Job!',
            reviewer: 'Bob'
        }],
       //ie: guitar, drums 
        specialties: ['singing'],
        //ie: rock, classical 
        genre: ['rock'],
        musicWorks:[]
    });
    Artists.insert({
        fullname: 'Bob',
        description: 'Hi I am a drumer.',
        email:'bob@red.com',
        location:{
            lat:null,
            lng:null
        }, 
        reviews: [{
            text: 'Unbelievable!',
            reviewer: 'Alice'
        }],
       //ie: guitar, drums 
        specialties: ['drums'],
        //ie: rock, classical 
        genre: ['rock'],
        musicWorks:[]
    });
  }
});