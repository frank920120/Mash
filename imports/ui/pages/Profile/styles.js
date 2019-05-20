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
  },
  editTitle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  audioCard: {
    display: "flex",
    padding: 10,
    alignItems: "center",
    width: "100%",
    borderTopWidth: 2,
    borderColor: "#e7dfdd",
    backgroundColor: "#e7dfdd",
    height: 92,
    marginTop: 10
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
    marginTop: 30
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
    margin: 7,
    backgroundColor: "#3ACBA6",
    color: "white",
    fontWeight: "bold"
  },
  specialtyChip: {
    margin: 7,
    backgroundColor: "#3ACBA6",
    color: "white",
    fontWeight: "bold"
  },
  whiteText: {
    color: "white",
    fontWeight: "bold"
  },
  paper: {
    padding: 40,
    background: "linear-gradient(360deg, #7239c5, #4717f6)",
    borderRadius: 0
  },
  description: {
    fontSize: 18,
    paddingTop: 40,
    paddingBottom: 60,
    color: "white"
  },
  chips: {
    minHeight: 52
  },
  music: {
    backgroundColor: "white",
    opacity: 0.5,
    marginTop: 16
  }
};

export default styles;
