export const Style = (theme) => ({
  card: {
    width: 330,
    position: "relative",
    borderRadius: 8,
    boxShadow: "none",
  },
  cardMedia: {
    height: 140,
  },
  price: {
    fontSize: 18,
    fontWeight: 600,
    color: theme.palette.secondary.main,
    "& span": {
      display: "block",
      color: theme.palette.primary.dark,
      opacity: 0.5,
      fontSize: 10,
      textDecoration: "line-through",
    },
  },
  bestPrice: {
    fontSize: 10,
    fontWeight: 400,
    color: theme.palette.primary.dark,
  },
  details: {
    marginTop: 14,
  },
  detail: {
    display: "flex",
    marginBottom: 14,
    alignItems: "center",
    color: theme.palette.primary.dark,
    fontSize: 15,
    fontWeight: 400,
    "& span": {
      color: theme.palette.secondary.dark,
      marginRight: 12,
    },
  },
  bids: {
    backgroundColor: theme.palette.secondary.dark,
    top: 0,
    right: 25,
    position: "absolute",
    padding: 5,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  bidsIcon: {
    color: theme.palette.primary.light,
  },
  bidsCount: {
    color: theme.palette.primary.light,
    fontWeight: 400,
    fontSize: 18,
  },
  bidsText: {
    fontWeight: 400,
    fontSize: 12,
    color: theme.palette.primary.light,
  },
  cardContent: {
    padding: 0,
    "&:last-child": {
      paddingBottom: 0,
    },
  },
  cardCover: {
    padding: "20px 20px 0px",
    borderBottom: "1px solid #CCD4D8",
  },
});
