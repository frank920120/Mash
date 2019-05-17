const styles = () => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: "white"
  },
  mainContainer: {},
  layoutBody: {
    marginTop: 60,
    marginBottom: 60,
    display: "flex",
    position: "relative",
    flexDirection: "column",
    alignItems: "center"
  },
  number: {
    fontSize: 24,
    color: "#4f4af6",
    fontWeight: 700,
    fontFamily: "Work Sans",
    paddingBottom: 10
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
  underline: {
    width: 55,
    height: 4,
    margin: "8px auto 0",
    display: "block",
    backgroundColor: "#4f4af6"
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    objectFit: "contain"
  },
  subpara: {
    fontWeight: 200,
    fontSize: "1.4rem"
  },
  header: {
    fontSize: 40,
    marginTop: 10
  }
});
export default styles;
