const styles = {
  formWrapper: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    background: "#9b42f4"
  },
  cover: {
    position: "absolute",
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "0%",
    background:
      "linear-gradient(90deg, #5E239D 0%, rgba(196, 196, 196, 0) 56.77%);"
  },
  formContainer: {
    width: "70%"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: "6.5vw",
    textAlign: "center",
    color: "white",
    margin: 0
  },
  skip: {
    position: "absolute",
    right: 20,
    top: 30,
    background: "transparent",
    outline: "none",
    border: "none",
    color: "white",
    fontSize: 30,
    cursor: "pointer",
    fontWeight: 500,
    zIndex: 999999999999
  },

  guitor: {
    position: "absolute",
    bottom: 0,
    right: -20,
    height: "85vh"
  },
  submit: {
    zIndex: 99999999,
    background: "transparent",
    color: "white",
    padding: 10,
    width: 200,
    marginTop: 20,
    fontWeight: 800,
    fontSize: 15,
    border: "3px solid white;",
    cursor: "pointer",
    outline: "none",
    transititon: "1s ease-in-out all",
    "&:hover": {
      opacity: 0.9
    }
  }
};

export default styles;
