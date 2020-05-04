

export const Style = (theme) => ({
    formField: {
      width: "100%",
      marginBottom: 12,
      "& label": {
        fontSize: 20,
        color: theme.palette.primary.dark,
      },
    },
    formFieldCover: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    checkBoxLabel: {
      fontSize: 12,
      color: theme.palette.primary.dark,
    },
    logInButton: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.light,
      marginTop: 12,
      padding: "10px 50px",
    },
    forgot: {
      fontSize: 14,
      color: theme.palette.primary.dark,
      marginTop: 14,
      textDecoration: "none",
      fontFamily: "Josefin Sans, sans-serif",
    },
    checkBox: {
      padding: "2px 6px 6px",
      "& svg": {
        width: "22px",
        height: "22px",
        borderRadius: 5,
      },
    },
    checked: {
      color: `${theme.palette.secondary.dark} !important`,
    },
  });
  