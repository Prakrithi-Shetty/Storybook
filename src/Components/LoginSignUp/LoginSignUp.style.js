export const Style = (theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    height: "93vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  expansion: {
    backgroundColor: theme.palette.primary.light,
    margin: "12px 0",
    borderTopLeftRadius: "8px !important",
    borderTopRightRadius: "8px !important",
    borderBottomLeftRadius: "8px !important",
    borderBottomRightRadius: "8px !important",
  },
  content: {
    borderRadius: 8,
  },
  heading: {
    fontSize: 18,
    margin: "0 auto",
  },
  message: {
    fontSize: 25,
    color: theme.palette.secondary.light,
    textAlign: "center",
    margin: "0 auto",
    marginBottom: 20,
  },
});
 