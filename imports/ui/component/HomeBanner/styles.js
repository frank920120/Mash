const styles = {
  bannerContainer: {
    width: "100%",
    height: "100vh"
  },
  imageContianer: {
    position: "relative",
    width: "100%",
    height: "100%"
  },
  bannerImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundrepeat: "no-repeat",
    backgroundSize: "cover",
    willChange: "opacity",
    backgroundAttachment: "fixed"
  },
  ContentContainer: {
    position: "absolute",
    zIndex: 99999,
    height: 150,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    top: "40%",
    left: "10%"
  },
  text: {
    color: "white",
    letterSpacing: 5,
    fontWeight: 900,
    fontSize: 155,
    lineHeight: "118.8%"
  },
  subtext: {
    color: "white",
    letterSpacing: 5,
    fontWeight: 800
  }
};

export default styles;
