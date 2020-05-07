export const Style = (theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.light,
    fontSize: "14.11px",
    cursor: "pointer",
    marginRight: 8,
    "& span": {
      color: theme.palette.primary.main,
    },
    "&:hover": {
      border: `1px solid ${theme.palette.secondary.main}`,
      "& span": {
        color: theme.palette.secondary.main,
      },
    },
  },
  label: {
    paddingTop: 5,
  },
  icon:{
    color: theme.palette.primary.main,
    "icon:hover": {
      color: `1px solid ${theme.palette.secondary.main}`,
    }
  },
 

});
