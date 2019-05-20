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
        genres: ["Rock", "Pop", "Punk"],
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
        genres: ["Rock", "World", "Funk"],
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
        specialties: ["Electric Guitar", "Violin"],
        //ie: ROCK, classical
        genres: ["Country", "Folk", "Rock"],
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
        genres: ["Rock", "Blues", "Soul"],
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
            reviewer: "Cindy Louder"
          }
        ],
        //ie: guitar, drums
        specialties: ["Electric Guitar", "Piano", "Recorder"],
        //ie: ROCK, classical
        genres: ["Rock", "Dance", "Pop"],
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
        fullname: "Cindy Louder",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At elementum eu facilisis sed odio morbi quis commodo odio. Mattis enim ut tellus elementum sagittis vitae et leo. Pellentesque habitant morbi tristique senectus et netus et malesuada. Placerat orci nulla pellentesque dignissim enim sit amet venenatis. Odio eu feugiat pretium nibh ipsum consequat. Leo vel orci porta non. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Tellus pellentesque eu tincidunt tortor. Metus aliquam eleifend mi in nulla posuere. Porta nibh venenatis cras sed felis eget. Bibendum at varius vel pharetra vel. Condimentum vitae sapien pellentesque habitant morbi. Neque convallis a cras semper auctor neque vitae tempus. Metus vulputate eu scelerisque felis imperdiet. Sed sed risus pretium quam vulputate dignissim. Dui vivamus arcu felis bibendum ut. Eget gravida cum sociis natoque penatibus. Ultrices in iaculis nunc sed augue lacus. Porttitor rhoncus dolor purus non.",
        imageurl: "https://loremflickr.com/320/240",
        location: {
          lat: 49.270425,
          lng: -123.133033
        },
        reviews: [
          {
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi cras fermentum odio eu feugiat pretium nibh. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Etiam erat velit scelerisque in dictum non consectetur a.",
            reviewer: "Dodge DG"
          },
          {
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Varius sit amet mattis vulputate. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing.",
            reviewer: "Bob Harley"
          }
        ],
        //ie: guitar, drums
        specialties: ["Saxophone", "Electric Guitar", "Trumpet"],
        //ie: ROCK, classical
        genres: ["Blues", "Jazz", "Soul"],
        musicWorks: [
          "https://soundcloud.com/greg-chambers/all-of-me-saxophone-cover",
          "https://soundcloud.com/richardianjacinto/ed-sheeran-thinking-out-loud-saxophone-cover-by-ian-jacinto"
        ]
      }
    });
    Artists.insert({
      emails: [
        {
          address: "dodge@red.com"
        }
      ],
      profile: {
        fullname: "Dodge DG",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue. Laoreet suspendisse interdum consectetur libero id. Elementum nibh tellus molestie nunc non blandit massa. Augue lacus viverra vitae congue eu consequat ac felis. Viverra nibh cras pulvinar mattis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Faucibus interdum posuere lorem ipsum. Augue neque gravida in fermentum. Molestie a iaculis at erat pellentesque adipiscing. Cursus euismod quis viverra nibh cras. Lobortis mattis aliquam faucibus purus in. Arcu felis bibendum ut tristique et egestas quis. Ornare massa eget egestas purus viverra accumsan in.",
        imageurl: "https://loremflickr.com/320/240",
        location: {
          lat: 49.273284,
          lng: -123.079001
        },
        reviews: [
          {
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Consectetur a erat nam at lectus urna. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id.",
            reviewer: "Frank Zappier"
          },
          {
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu turpis egestas pretium aenean pharetra. Quis commodo odio aenean sed. Convallis tellus id interdum velit laoreet id donec ultrices.",
            reviewer: "Frank Zappier"
          }
        ],
        //ie: guitar, drums
        specialties: ["Singing"],
        //ie: ROCK, classical
        genres: ["Blues", "Soul", "Jazz"],
        musicWorks: [
          "https://soundcloud.com/therealbuddyguy/crawlin-kingsnake?in=therealbuddyguy/sets/blues-singer-1",
          "https://soundcloud.com/therealbuddyguy/lucy-mae-blues?in=therealbuddyguy/sets/blues-singer-1"
        ]
      }
    });
    Artists.insert({
      emails: [
        {
          address: "elena@red.com"
        }
      ],
      profile: {
        fullname: "Elena Desea",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Diam ut venenatis tellus in metus vulputate eu scelerisque felis. Consequat id porta nibh venenatis cras sed. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Sed nisi lacus sed viverra tellus in hac. Sit amet dictum sit amet justo donec enim diam vulputate. Lacus vel facilisis volutpat est velit egestas dui id ornare. Nulla at volutpat diam ut venenatis tellus in metus. Molestie nunc non blandit massa enim. Massa ultricies mi quis hendrerit dolor magna eget. Eget aliquet nibh praesent tristique magna sit amet. Aliquet eget sit amet tellus cras adipiscing enim. Odio facilisis mauris sit amet massa. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam.",
        imageurl: "https://loremflickr.com/320/240",
        location: {
          lat: 49.283793,
          lng: -123.131142
        },
        reviews: [
          {
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Phasellus egestas tellus rutrum tellus.",
            reviewer: "Gary Manilow"
          },
          {
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Eu tincidunt tortor aliquam nulla facilisi. Nisl rhoncus mattis rhoncus urna neque.",
            reviewer: "Frank Zappier"
          }
        ],
        //ie: guitar, drums
        specialties: ["Percussion", "Drums"],
        //ie: ROCK, classical
        genres: ["Rock", "Jazz", "R&B"],
        musicWorks: [
          "https://soundcloud.com/brutdeprod-recording/jazz-drums",
          "https://soundcloud.com/benbiver/jazz-drums"
        ]
      }
    });
    Artists.insert({
      emails: [
        {
          address: "frank@red.com"
        }
      ],
      profile: {
        fullname: "Frank Zappier",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum integer enim neque volutpat ac tincidunt vitae. Arcu bibendum at varius vel pharetra. Quisque non tellus orci ac auctor augue mauris augue neque. Neque vitae tempus quam pellentesque nec. Egestas maecenas pharetra convallis posuere morbi. Sit amet facilisis magna etiam. Vulputate ut pharetra sit amet. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Maecenas accumsan lacus vel facilisis volutpat est. Id neque aliquam vestibulum morbi. Scelerisque eu ultrices vitae auctor eu augue. Lectus magna fringilla urna porttitor rhoncus dolor. Id aliquet risus feugiat in ante metus dictum. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Sed pulvinar proin gravida hendrerit. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Arcu bibendum at varius vel pharetra vel turpis nunc. Sit amet tellus cras adipiscing enim eu turpis egestas pretium.",
        imageurl: "https://loremflickr.com/320/240",
        location: {
          lat: 49.26175,
          lng: -123.247995
        },
        reviews: [
          {
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas integer eget aliquet nibh praesent tristique magna. Venenatis lectus magna fringilla urna porttitor. Tortor pretium viverra suspendisse potenti nullam ac tortor. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.",
            reviewer: "Gary Manilow"
          },
          {
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue lacus viverra vitae congue eu consequat. Suspendisse ultrices gravida dictum fusce ut placerat orci. Ipsum nunc aliquet bibendum enim facilisis gravida.",
            reviewer: "Alice Mini"
          }
        ],
        //ie: guitar, drums
        specialties: ["Electric Guitar", "Acoustic Guitar"],
        //ie: ROCK, classical
        genres: ["Rock", "Pop", "Jazz"],
        musicWorks: [
          "https://soundcloud.com/nik_davies/autumn-leaves-solo-jazz-guitar",
          "https://soundcloud.com/hgascon/smooth-jazz-champ"
        ]
      }
    });
    Artists.insert({
      emails: [
        {
          address: "gary@red.com"
        }
      ],
      profile: {
        fullname: "Gary Manilow",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id cursus metus. At in tellus integer feugiat scelerisque varius morbi. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Pellentesque habitant morbi tristique senectus. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Tincidunt id aliquet risus feugiat in ante metus dictum at. Arcu dictum varius duis at consectetur lorem donec massa. At volutpat diam ut venenatis tellus. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Morbi blandit cursus risus at ultrices mi. Tellus orci ac auctor augue mauris augue neque gravida in. Pulvinar mattis nunc sed blandit libero volutpat. Malesuada nunc vel risus commodo viverra maecenas. Purus ut faucibus pulvinar elementum integer enim neque volutpat. Dui sapien eget mi proin. Nunc mattis enim ut tellus elementum sagittis vitae et.",
        imageurl: "https://loremflickr.com/320/240",
        location: {
          lat: 49.225476,
          lng: -123.160795
        },
        reviews: [
          {
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida neque convallis a cras semper auctor. Integer enim neque volutpat ac tincidunt vitae semper. Volutpat sed cras ornare arcu dui vivamus arcu felis.",
            reviewer: "Lady Baba"
          },
          {
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia quis vel eros donec. Lacus sed turpis tincidunt id. Sed viverra tellus in hac habitasse platea. Nascetur ridiculus mus mauris vitae.",
            reviewer: "Kate Berry"
          }
        ],
        //ie: guitar, drums
        specialties: ["Piano", "Keyboards"],
        //ie: ROCK, classical
        genres: ["Dance", "Pop", "Hip Hop"],
        musicWorks: [
          "https://soundcloud.com/izik-shtemer/roland-e-a7-dance-demo-with-slicer-effect",
          "https://soundcloud.com/pgorges/classic-keyboards-demo-roland"
        ]
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
