const styles = {
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    flexGrow: 1,
    zIndex: 99999999
  },
  appbar: {
    position: "relative",
    background: "#9b42f4",
    height: 70
  },
  button: {
    backgroundColor: "#F50057",
    color: "white",
    "&:hover": {
      backgroundColor: "#4f4af6"
    }
  },
  cover: {
    position: "absolute",
    zIndex: -1,
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "0%",
    background:
      "linear-gradient(90deg, #5E239D 0%, rgba(196, 196, 196, 0) 56.77%);"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  logo: {
    width: 40,
    height: 40
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row"
  },
  button: {
    color: "white",
    fontWeight: 800
  },
  alertMessage: {
    backgroundColor: "#3ACBA6",
    color: "white"
  },
  link: {
    margin: 20,
    color: "white",
    fontWeight: "bold",
    textDecoration: "none",
    "&:hover": {
      color: "#3acba6"
    }
  }
};

export default styles;
