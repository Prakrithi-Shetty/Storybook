export const Style = (theme) => ({
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
  signUpButton: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.light,
    marginTop: 17,
    padding: "10px 50px",
  },
  mobile: {
    marginTop: 5,
    width: "100%",
    "& label": {
      fontSize: 20,
      top: "-6px",
      color: theme.palette.primary.dark,
    },
    "& div": {
      backgroundColor: theme.palette.secondary.light,
      "&:before": {
        borderBottom: "none",
      },
    },
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
  red: {
    color: "red",
  },
  countrySelect: {
    width: "100%",
    margin: "10px 0",
    "& label": {
      fontSize: 20,
      color: `${theme.palette.primary.dark} !important`,
    },
  },
  selectOption: {},
});
