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
        lat: null,
        lng: null
      },
      reviews: [
        {
          text: "Good Job!",
          reviewer: "Bob"
        }
      ],
      //ie: guitar, drums
      specialties: ["singing", "dancing", "b-box"],
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
        lat: null,
        lng: null
      },
      reviews: [
        {
          text: "Unbelievable!",
          reviewer: "Alice"
        }
      ],
      //ie: guitar, drums
      specialties: ["drums", "dancing", "reading"],
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
