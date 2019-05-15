import { Meteor } from "meteor/meteor";
import { Artists } from "../../api/artists";
import { Collaborations } from "../../api/collaborations";
Meteor.startup(() => {
  if (Artists.find().count() === 0) {
    Artists.insert({
      fullname: "Alice",
      email: "alice@red.com",
      imageurl: "https://loremflickr.com/320/240",
      description: "Hi I am a singer.",
      location: {
        lat: 49.263295,
        lng: -123.13729
      },
      reviews: [
        {
          text: "Good Job!",
          reviewer: "Bob"
        }
      ],
      //ie: guitar, drums
      specialties: ["Singer", "Keyboard", "Percussion", "Flute"],
      //ie: rock, classical
      genre: ["rock"],
      musicWorks: [
        {
          clientID: "5IHUoTCYwQmJR7RbijX9OigWp2zCoiyC",
          resolveURL:
            "https://soundcloud.com/vira-talisa-dharmawan/stars-fell-on-alabama"
        }
      ]
    });
    Artists.insert({
      fullname: "Bob",
      description: "Hi I am a drumer.",
      imageurl: "https://loremflickr.com/320/240",
      email: "bob@red.com",
      location: {
        lat: 49.26782,
        lng: -123.146216
      },
      reviews: [
        {
          text: "Unbelievable!",
          reviewer: "Alice"
        }
      ],
      //ie: guitar, drums
      specialties: ["Piano", "Violin", "Cello"],
      //ie: rock, classical
      genre: ["rock"],
      musicWorks: []
    });
    Artists.insert({
      fullname: "Cindy",
      description: "Hi I am a Cindy.",
      imageurl: "https://loremflickr.com/320/240",
      email: "cindy@red.com",
      location: {
        lat: 49.270425,
        lng: -123.133033
      },
      reviews: [
        {
          text: "amazing!",
          reviewer: "Bob"
        }
      ],
      //ie: guitar, drums
      specialties: ["Saxophone", "Electric Guitar", "Trumpet"],
      //ie: rock, classical
      genre: ["rock"],
      musicWorks: []
    });
    Artists.insert({
      fullname: "Dodge",
      description: "Hi I am Dodge.",
      imageurl: "https://loremflickr.com/320/240",
      email: "dodge@red.com",
      location: {
        lat: 49.273284,
        lng: -123.079001
      },
      reviews: [
        {
          text: "amazing!",
          reviewer: "Bob"
        }
      ],
      //ie: guitar, drums
      specialties: ["Singer", "Recorder"],
      //ie: rock, classical
      genre: ["rock"],
      musicWorks: []
    });
    Artists.insert({
      fullname: "Elena",
      description: "Hi I am Elena.",
      imageurl: "https://loremflickr.com/320/240",
      email: "elena@red.com",
      location: {
        lat: 49.283793,
        lng: -123.131142
      },
      reviews: [
        {
          text: "amazing!",
          reviewer: "Bob"
        }
      ],
      //ie: guitar, drums
      specialties: ["Percussion", "Saxophone", "Recorder"],
      //ie: rock, classical
      genre: ["rock"],
      musicWorks: []
    });
    Artists.insert({
      fullname: "Frank",
      description: "Hi I am Frank.",
      imageurl: "https://loremflickr.com/320/240",
      email: "frank@red.com",
      location: {
        lat: 49.26175,
        lng: -123.247995
      },
      reviews: [
        {
          text: "amazing!",
          reviewer: "Bob"
        }
      ],
      //ie: guitar, drums
      specialties: ["Drumset"],
      //ie: rock, classical
      genre: ["rock"],
      musicWorks: []
    });
    Artists.insert({
      fullname: "Gary",
      description: "Hi I am Gary.",
      imageurl: "https://loremflickr.com/320/240",
      email: "gary@red.com",
      location: {
        lat: 49.225476,
        lng: -123.160795
      },
      reviews: [
        {
          text: "amazing!",
          reviewer: "Bob"
        }
      ],
      //ie: guitar, drums
      specialties: ["Piano", "Recorder"],
      //ie: rock, classical
      genre: ["rock"],
      musicWorks: []
    });
  }
  if (Collaborations.find().count() === 0) {
    Collaborations.insert({
      musicurl: "https://soundcloud.com/stormzzzzz/touchdown"
    });
    Collaborations.insert({
      musicurl: "https://soundcloud.com/stormzzzzz/skrrt"
    });
    Collaborations.insert({
      musicurl: "https://soundcloud.com/stormzzzzz/gold-in-ma-mouth"
    });
    Collaborations.insert({
      musicurl: "https://soundcloud.com/stormzzzzz/peace-of-mind"
    });
    Collaborations.insert({
      musicurl: "https://soundcloud.com/stormzzzzz/cah-on-me"
    });
    Collaborations.insert({
      musicurl: "https://soundcloud.com/stormzzzzz/sposed-2-du"
    });
    Collaborations.insert({
      musicurl: "https://soundcloud.com/stormzzzzz/dripbeast"
    });
  }
});
