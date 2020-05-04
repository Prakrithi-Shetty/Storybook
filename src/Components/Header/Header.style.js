export const Style = (theme) => ({
    root: {
      backgroundColor: theme.palette.secondary.light,
      boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    },
    logo: {
      flexGrow: 1,
      fontSize: 35,
      color: theme.palette.primary.dark,
    },
    navItems: {
      "& a": {
        color: theme.palette.primary.dark,
        textDecoration: "none",
        margin: "0 20px",
        fontFamily: "Josefin Sans,sans-serif",
        fontSize: 15,
      },
    },
    button: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.light,
      borderRadius: 8,
    },
    toolBar: {
      minHeight: 50,
    },
  });
  