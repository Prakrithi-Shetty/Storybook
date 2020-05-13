export const Style = (theme) => ({
  card: {
    width: "33%",
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
  icon:{
    color: theme.palette.secondary.dark,
    marginRight:12,
  },
  icons:{
    color:theme.palette.secondary.contrastText,
    opacity:0.5,
    marginRight:12,

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
  doneDeals: {
    backgroundColor: theme.palette.secondary.contrastText
  },
  doneDealsText: {
    color: theme.palette.primary.dark,
  },
  doneDealsIcon: {
    "& span": {
      color: theme.palette.primary.dark,
      opacity: 0.5,
    },
  },
  bidsIcon: {
    color: theme.palette.secondary.light,
  },
  bidsCount: {
    color: theme.palette.secondary.light,
    fontWeight: 400,
    fontSize: 18,
  },
  bidsText: {
    fontWeight: 400,
    fontSize: 12,
    color: theme.palette.secondary.light,
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
  titleName: {
    color: theme.palette.primary.dark,
    fontSize: 18,
    fontWeight: 400,
  },
  accepted: {
    color: theme.palette.primary.dark,
    fontSize: 12,
    fontWeight: 400,
    textAlign: "center",
    marginBottom: 14,
  },
  reference: {
    color: theme.palette.primary.dark,
    fontSize: 18,
    fontWeight: 400,
    textAlign: "center",
    opacity: 0.5,
    marginTop: 10,
  },
  ratingRoot: {
    marginBottom: 17,
    marginTop: -5,
  },
  ratingIcon: {
    color: theme.palette.primary.main,
    fontSize: 14,
  },
  ratingIconButton: {
    padding: "0 !important",
    paddingRight: "5px !important",
  },
  addOns: {
    fontSize: 10,
    backgroundColor:theme.palette.secondary.contrastText,
    color: "#fff",
    borderRadius: 50,
    width: 100,
    paddingTop: 1,
    textAlign: "center",
    marginLeft: 38,
    marginTop: -12,
    marginBottom: 16,
  },
  [theme.breakpoints.down("sm")]: {
    cardMedia: {
      height: 0,
    },
  },
});
