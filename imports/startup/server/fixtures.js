import { Meteor } from "meteor/meteor";
import { Artists } from "../../api/artists";
Meteor.startup(() => {
  if (Artists.find().count() === 0) {
    Artists.insert({
        fullname: 'Alice',
        email:'alice@red.com',
        imageurl:'https://loremflickr.com/320/240',
        description: 'Hi I am a singer.',
        location:{
            lat:null,
            lng:null
        }, 
        reviews: [{
            text: 'Good Job!',
            reviewer: 'Bob'
        }],
       //ie: guitar, drums 
        specialties: ['singing','dancing','b-box'],
        //ie: rock, classical 
        genre: ['rock'],
        musicWorks:[]
    });
    Artists.insert({
        fullname: 'Bob',
        description: 'Hi I am a drumer.',
        imageurl:'https://loremflickr.com/320/240',
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
        specialties: ['drums','dancing','reading'],
        //ie: rock, classical 
        genre: ['rock'],
        musicWorks:[]
    });
  }
});