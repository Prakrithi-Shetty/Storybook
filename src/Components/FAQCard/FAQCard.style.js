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
  }
});
