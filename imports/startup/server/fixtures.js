import { Meteor } from "meteor/meteor";
import { Artists } from "../../api/artists";
import { Collaborations } from "../../api/collaborations";
Meteor.startup(() => {
  if (Artists.find().count() === 0) {
    Artists.insert({
      emails: [
        {
          address: "alice@red.com"
        }
      ],
      profile: {
        fullname: "Alice Mini",
        imageurl: "https://randomuser.me/api/portraits/women/81.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna porttitor rhoncus dolor purus. Id nibh tortor id aliquet lectus proin. Et leo duis ut diam quam. Nisl nisi scelerisque eu ultrices vitae auctor eu. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Dui faucibus in ornare quam viverra. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Neque sodales ut etiam sit amet. Eu volutpat odio facilisis mauris sit amet. Dui accumsan sit amet nulla facilisi morbi tempus. Suspendisse ultrices gravida dictum fusce ut placerat. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Cras fermentum odio eu feugiat pretium nibh.",
        location: {
          lat: 49.260021,
          lng: -123.148652
        },
        reviews: [
          {
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget velit aliquet sagittis id. Neque egestas congue quisque egestas diam. Nulla at volutpat diam ut venenatis tellus in. Amet nulla facilisi morbi tempus iaculis urna id volutpat.",
            reviewer: "Bob Harley"
          },
          {
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus vestibulum lorem sed risus ultricies tristique. A scelerisque purus semper eget. Libero nunc consequat interdum varius sit amet mattis.",
            reviewer: "Justin Loglake"
          }
        ],
        //ie: guitar, drums
        specialties: ["Keyboard", "Percussion", "Flute"],
        //ie: ROCK, classical
        genres: ["ROCK", "pop", "punk"],
        musicWorks: [
          "https://soundcloud.com/markzubek/pop-female-tinah-frequency",
          "https://soundcloud.com/markzubek/pop-female-lauren-haze-broken-record"
        ]
      }
    });
    Artists.insert({
      emails: [
        {
          address: "bob@red.com"
        }
      ],
      profile: {
        fullname: "Bob Harley",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing at in tellus integer feugiat scelerisque varius. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Etiam erat velit scelerisque in dictum non consectetur. Purus in massa tempor nec feugiat nisl pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Ullamcorper eget nulla facilisi etiam dignissim diam quis. Tristique senectus et netus et malesuada fames ac turpis egestas. Enim eu turpis egestas pretium aenean pharetra magna ac. Pretium lectus quam id leo in. Sed risus pretium quam vulputate. Nec sagittis aliquam malesuada bibendum arcu. Semper eget duis at tellus at urna condimentum mattis pellentesque. Ac felis donec et odio pellentesque. Congue eu consequat ac felis donec. Eget nulla facilisi etiam dignissim diam quis. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Sed risus ultricies tristique nulla aliquet.",
        imageurl: "https://randomuser.me/api/portraits/men/15.jpg",
        location: {
          lat: 49.269108,
          lng: -123.156147
        },
        reviews: [
          {
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Nibh cras pulvinar mattis nunc. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper.",
            reviewer: "Alice Mini"
          },
          {
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean et tortor at risus viverra. Metus aliquam eleifend mi in nulla.",
            reviewer: "Justin Loglake"
          }
        ],
        //ie: guitar, drums
        specialties: ["Piano", "Violin", "Cello"],
        //ie: ROCK, classical
        genres: ["ROCK", "progressive ROCK", "funk"],
        musicWorks: [
          "https://soundcloud.com/ableton/omar-hakim-drums-ROCK",
          "https://soundcloud.com/pluginalliance/drums-ROCK"
        ]
      }
    });
    Artists.insert({
      emails: [
        {
          address: "justin@red.com"
        }
      ],
      profile: {
        fullname: "Justin Loglake",
        imageurl: "https://randomuser.me/api/portraits/men/76.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui ut ornare lectus sit amet est placerat. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Amet consectetur adipiscing elit ut. Posuere sollicitudin aliquam ultrices sagittis orci a. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Senectus et netus et malesuada fames ac turpis egestas. Mi eget mauris pharetra et. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Rutrum quisque non tellus orci ac auctor augue. Porttitor lacus luctus accumsan tortor posuere ac ut consequat. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Purus in massa tempor nec.",
        location: {
          lat: 49.286025,
          lng: -123.137772
        },
        reviews: [
          {
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices sagittis orci a scelerisque. Posuere morbi leo urna molestie at elementum eu facilisis. Arcu vitae elementum curabitur vitae. Id volutpat lacus laoreet non curabitur gravida arcu ac.",
            reviewer: "Bob Harley"
          },
          {
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget egestas purus viverra accumsan. Quam quisque id diam vel quam. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris.",
            reviewer: "Kate Berry"
          }
        ],
        //ie: guitar, drums
        specialties: ["Electric guitar", "Violin"],
        //ie: ROCK, classical
        genres: ["country", "folk", "ROCK"],
        musicWorks: [
          "https://soundcloud.com/ross-lee-shellard/mystery-train-guitar-instrumental-1",
          "https://soundcloud.com/ross-lee-shellard/12-st-rag-ukelele"
        ]
      }
    });
    Artists.insert({
      emails: [
        {
          address: "Kate@red.com"
        }
      ],
      profile: {
        fullname: "Kate Berry",
        imageurl: "https://randomuser.me/api/portraits/women/11.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium viverra suspendisse potenti nullam ac tortor vitae. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis. Integer eget aliquet nibh praesent tristique magna sit amet purus. Risus viverra adipiscing at in tellus. In fermentum et sollicitudin ac. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Commodo nulla facilisi nullam vehicula. Et malesuada fames ac turpis egestas integer eget. Etiam non quam lacus suspendisse faucibus. Sapien eget mi proin sed libero enim. Orci ac auctor augue mauris augue neque.",
        location: {
          lat: 49.259471,
          lng: -123.108904
        },
        reviews: [
          {
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Porttitor eget dolor morbi non arcu risus quis varius quam.",
            reviewer: "Justin Loglake"
          },
          {
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras fermentum odio eu feugiat pretium nibh. Porta non pulvinar neque laoreet suspendisse interdum. Mi sit amet mauris commodo quis. Sit amet consectetur adipiscing elit ut aliquam purus sit amet.",
            reviewer: "Alice Mini"
          }
        ],
        //ie: guitar, drums
        specialties: ["Electric Guitar", "Piano"],
        //ie: ROCK, classical
        genres: ["ROCK", "blues", "soul"],
        musicWorks: [
          "https://soundcloud.com/bassplayermag/eastwood-magnum-4-bridge",
          "https://soundcloud.com/bassplayermag/sets/soundblox-pro-bass-envelope"
        ]
      }
    });
    Artists.insert({
      emails: [
        {
          address: "lady@red.com"
        }
      ],
      profile: {
        fullname: "Lady Baba",
        imageurl: "https://randomuser.me/api/portraits/women/55.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium viverra suspendisse potenti nullam ac tortor vitae. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis. Integer eget aliquet nibh praesent tristique magna sit amet purus. Risus viverra adipiscing at in tellus. In fermentum et sollicitudin ac. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Commodo nulla facilisi nullam vehicula. Et malesuada fames ac turpis egestas integer eget. Etiam non quam lacus suspendisse faucibus. Sapien eget mi proin sed libero enim. Orci ac auctor augue mauris augue neque.",
        location: {
          lat: 49.257481,
          lng: -123.115805
        },
        reviews: [
          {
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Porttitor eget dolor morbi non arcu risus quis varius quam.",
            reviewer: "Kate Berry"
          },
          {
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras fermentum odio eu feugiat pretium nibh. Porta non pulvinar neque laoreet suspendisse interdum. Mi sit amet mauris commodo quis. Sit amet consectetur adipiscing elit ut aliquam purus sit amet.",
            reviewer: "Alice Mini"
          }
        ],
        //ie: guitar, drums
        specialties: ["Electric Guitar", "Piano", "Recorder"],
        //ie: ROCK, classical
        genres: ["ROCK", "blues", "soul"],
        musicWorks: [
          "https://soundcloud.com/angelo-di-marco/neo-soul-angelo-di-marco",
          "https://soundcloud.com/angelo-di-marco/zingarella-luigi-ingo"
        ]
      }
    });
    Artists.insert({
      emails: [
        {
          address: "cindy@red.com"
        }
      ],
      profile: {
        fullname: "Cindy",
        description: "Hi I am a Cindy.",
        imageurl: "https://loremflickr.com/320/240",
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
        //ie: ROCK, classical
        genres: ["ROCK"],
        musicWorks: []
      }
    });
    Artists.insert({
      emails: [
        {
          address: "dodge@red.com"
        }
      ],
      profile: {
        fullname: "Dodge",
        description: "Hi I am Dodge.",
        imageurl: "https://loremflickr.com/320/240",
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
        specialties: ["Singing", "Recorder"],
        //ie: ROCK, classical
        genres: ["ROCK"],
        musicWorks: []
      }
    });
    Artists.insert({
      emails: [
        {
          address: "elena@red.com"
        }
      ],
      profile: {
        fullname: "Elena",
        description: "Hi I am Elena.",
        imageurl: "https://loremflickr.com/320/240",
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
        //ie: ROCK, classical
        genres: ["ROCK"],
        musicWorks: []
      }
    });
    Artists.insert({
      emails: [
        {
          address: "frank@red.com"
        }
      ],
      profile: {
        fullname: "Frank",
        description: "Hi I am Frank.",
        imageurl: "https://loremflickr.com/320/240",
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
        specialties: ["Drums"],
        //ie: ROCK, classical
        genres: ["ROCK"],
        musicWorks: []
      }
    });
    Artists.insert({
      emails: [
        {
          address: "gary@red.com"
        }
      ],
      profile: {
        fullname: "Gary",
        description: "Hi I am Gary.",
        imageurl: "https://loremflickr.com/320/240",
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
        //ie: ROCK, classical
        genres: ["ROCK"],
        musicWorks: []
      }
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
