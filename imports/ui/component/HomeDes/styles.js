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
    alignItems: "center",
    paddingBottom: 50
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
    textDecoration: "underline",
    textDecorationColor: "#4f4af6",
    textUnderlinePosition: "under"
  },
  desHeader: {
    color: "white",
    fontWeight: 800,
    fontSize: "5vw",
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
    marginBottom: 50,
    backgroundColor: "#F50057",
    color: "white",
    "&:hover": {
      backgroundColor: "#4f4af6"
    }
  }
};
export default styles;
