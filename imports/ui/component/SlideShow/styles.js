const styles = theme => ({
  SlideShowWrapper: {
    backgroundImage: 'url("/images/HomeDe.png")',
    position: "relative",
    padding: "60px 60px",
    paddingTop: 30,
    margin: "0 auto",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed"
  },

  underline: {
    width: 55,
    height: 4,
    margin: "8px auto 0",
    display: "block",
    backgroundColor: "#4f4af6"
  },
  CollaborationHeading: {
    color: "#0e0b16",
    marginBottom: 30,
    textAlign: "center",
    fontSize: 40
  },

  cover: {
    position: "absolute",
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "0%",
    background:
      "linear-gradient(90deg, #5E239D 0%, rgba(196, 196, 196, 0) 56.77%)"
  },
  SlideShowContainer: {
    overflow: "hidden"
  }
});
export default styles;
