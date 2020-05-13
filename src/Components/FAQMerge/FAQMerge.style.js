export const Style = (theme) => ({
  paper: {
    borderLeft: `1px solid ${theme.palette.primary.contrastText}`,
    borderTop: `1px solid ${theme.palette.primary.contrastText}`,
    borderBottom: `1px solid ${theme.palette.primary.contrastText}`,
    backgroundColor: theme.palette.primary.light,
    padding: "13px 53px",
    borderRadius: 0,
    width: "80%",
    cursor: "pointer",
  },
  title: {
    fontSize: 15,
    fontWeight: 600,
    color: theme.palette.primary.dark,
    opacity: 0.5,
    textTransform: "uppercase",
    "& span": {
      marginBottom: -5,
      fontSize: 18,
      color: theme.palette.secondary.dark,
    },
  },
  description: {
    fontSize: 15,
    lineHeight: 1.2,
    marginTop: 6,
  },
  
  icon:{
    color:theme.palette.secondary.dark,
    fontSize:18,
    marginBottom:"-5px"
  },
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
    color: theme.palette.secondary.dark,
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
  icons: {
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
  blur: {
    filter: "blur(5px)",
  },
});
