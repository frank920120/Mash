const styles = {
  profile: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    backgroundColor: "#0E0B16"
  },
  card: {
    marginTop: 100,
    marginBottom: 100,
    maxWidth: "80%",
    borderStyle: "solid",
    borderWidth: 3,
    borderRadius: 4,
    borderColor: "#4717F6",
    backgroundColor: "#0E0B16"

    // background: "linear-gradient(90deg, #5E239D 0%, rgba(196, 196, 196, 0) 70%);"
  },
  cover: {
    zIndex: -1,
    padding: 30,
    background: "linear-gradient(0deg, #5E239D 0%, rgba(196, 196, 196, 0) 70%);"
  },

  picButton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  artistInfo: {
    display: "flex",
    flexDirection: "column",
    marginTop: 20
  },
  button: {
    marginTop: 30
  },
  media: {
    height: 140
  },
  avatar: {
    width: 230,
    height: 230
  },
  genreChip: {
    margin: 10
  },
  specialtyChip: {
    margin: 10
  },
  whiteText: {
    color: "white"
  },
  paper: {
    padding: 40,
    backgroundColor: "#3acba6",
    borderRadius: 0
  },
  description: {
    paddingTop: 40,
    paddingBottom: 40
  },
  chips: {
    height: 52
  }
};

export default styles;
