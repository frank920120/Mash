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
    fontSize: "7vw",
    textAlign: "center",
    color: "white"
  },
  guitor: {
    position: "absolute",
    bottom: 0,
    right: -20,
    height: "80vh"
  },
  submit: {
    zIndex: 99999999
  }
};

export default styles;
