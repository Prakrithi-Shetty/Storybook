export const Style = (theme) => ({
  modalCover: {
    width: 380,
    backgroundColor: theme.palette.secondary.light,
    position: "relative",
    borderRadius: 8,
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.09)",
  },
  title: {
    fontSize: 15,
    fontWeight: 600,
    opacity: 0.5,
    color: theme.palette.primary.dark,
    marginBottom: 8,
  },
  description: {
    color: theme.palette.primary.dark,
    fontSize: 15,
    lineHeight: 1.2,
  },
  contentCover: {
    padding: "25px",
    border: `1px solid ${theme.palette.primary.contrastText}`,
  },
  contactCover: {
    padding: 25,
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
  close: {
    position: "absolute",
    right: "5px",
    top: "5px",
    color: theme.palette.primary.dark,
    cursor: "pointer",
  },
});
