export const Style = (theme) => ({
  start: { display: "flex", alignItems: "center", justifyContent: "space-around", padding: "24px 0" },
  startText: { fontSize: 25, color: theme.palette.primary.dark },
  button: { backgroundColor: theme.palette.secondary.main, color: theme.palette.secondary.light, fontSize: "16pt" },
  buttonPrimary: { backgroundColor: theme.palette.secondary.dark },
  [theme.breakpoints.down("sm")]: {
    start: {
      flexDirection: "column",
      padding: "15px 20px",
    },
    startText: {
      textAlign: "center",
      marginBottom: 10,
      fontSize: 23,
    },
  },
});
