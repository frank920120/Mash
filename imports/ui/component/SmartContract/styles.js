const styles = () => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: "white"
  },
  mainContainer: {
    marginTop: 40
  },
  layoutBody: {
    marginTop: 60,
    marginBottom: 60,
    display: "flex",
    position: "relative"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 60
  },
  image: {
    height: 55
  },
  title: {
    marginTop: 10,
    marginBottom: 10
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    objectFit: "contain"
  },
  subpara: {
    fontWeight: 200,
    fontSize: "1.4rem"
  }
});
export default styles;
