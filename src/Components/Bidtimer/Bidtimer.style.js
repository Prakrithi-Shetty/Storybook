export const Style = (theme) => ({
    timer: {
      fontSize: 12,
      fontWeight: 400,
      textAlign: "center",
      color: theme.palette.primary.dark,
      backgroundColor: theme.palette.secondary.light,
      border: `2px solid ${theme.palette.secondary.main}`,
      borderRadius: 27.5,
      width: 185,
      margin: "12.5px auto",
      paddingTop: 7,
      "& span": {
        color: theme.palette.secondary.main,
        fontSize: 25,
        fontWeight: 400,
        display: "block",
        marginTop: -8,
      },
    },
  });
  