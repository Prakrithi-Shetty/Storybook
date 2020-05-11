export const Style = (theme) => ({
  card: {
    height: 417,
    backgroundSize: "cover",
    position: "relative",
    padding: 26,
    borderRadius: 10,
    width: 270,
    marginLeft: 25
  },
  textCover: {
    color: theme.palette.secondary.light,
    position: "absolute",
    bottom: "26px",
    width: "85%",
  },
  title: {
    fontSize: 35,
    fontWeight: 400,
  },
  subTitle: {
    fontSize: 15,
    fontWeight: 400,
  },
  [theme.breakpoints.down("sm")]: {
    card: {
      width: 270,
      marginLeft: 25,
    },
  },
});
