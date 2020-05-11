export const Style = (theme) => ({
  categoryButton: {
    color: theme.palette.secondary.dark,
    border: "2px solid",
    backgroundColor: theme.palette.secondary.light,
    borderRadius: 8,
    marginBottom: 8,
    padding: "5px 75px",
    "&:hover": {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.secondary.light,
    },
  },
  selectedCategory: {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.secondary.light,
  },
});
