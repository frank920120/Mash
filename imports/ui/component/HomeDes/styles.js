const styles = {
  desContainer: {
    width: "100%",
    backgroundImage: "url('/images/HomeDes.png')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  parallax: {
    width: "100%",
    margin: 0,
    padding: 0
  },
  desContent: {
    paddingTop: 100,
    width: "80%"
  },
  highlight: {
    textDecoration: "underline"
  },
  desHeader: {
    color: "white",
    fontWeight: 800,
    fontSize: 60,
    letterSpacing: 5
  },
  desPara: {
    color: "white",
    fontWeight: 500,
    fontSize: 18,
    letterSpacing: 1
  },
  button: {
    marginTop: 50,
    marginBottom: 100,
    backgroundColor: "#4f4af6",
    color: "white",
    "&:hover": {
      backgroundColor: "#4f4af6"
    }
  }
};
export default styles;
