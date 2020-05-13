export const Style = (theme) => ({
  contactCover: {
    padding: 25,
  },
  noPadding: {
    padding: 0,
  },
  contactLabel: {
    fontSize: 15,
    fontWeight: 600,
    opacity: 0.5,
    color: theme.palette.primary.dark,
  },
  icon: {
    color: theme.palette.secondary.main,
    marginBottom: -7,
    marginRight: 8,
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.dark,
    fontFamily: '"Josefin Sans", "sans-serif"',
  },
  email: {
    marginBottom: 34,
  },
});
