export const Style = (theme) => ({
  leftSideBar: {
    padding: "38px 0 38px 55px",
    borderRight: "1px solid #CCD4D8",
    width: "91%",
    height: 630,
  },
  welcome: {
    color: theme.palette.primary.dark,
    fontSize: 15,
    fontWeight: 600,
    opacity: 0.5,
  },
  saved: {
    marginTop: 14,
    fontSize: 30,
    fontWeight: 400,
    color: theme.palette.primary.dark,
    lineHeight: "32px",
    "& span": {
      color: theme.palette.secondary.main,
    },
  },
  create: {
    backgroundColor: theme.palette.secondary.main,
    marginTop: 32,
    color: theme.palette.secondary.light,
    fontSize: 16,
    fontWeight: 600,
    lineSpacing: 19,
  },
});
