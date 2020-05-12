export const Style = (theme) => ({
  faqs: {
    backgroundColor: theme.palette.primary.light,
  },
  categoriesCover: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    color: theme.palette.primary.dark,
    marginBottom: 16,
  },
  subTitle: {
    fontSize: 15,
    color: theme.palette.primary.dark,
    marginBottom: 32,
  },
  faqLeft: {
    width: "65%",
    margin: "0 auto",
    paddingTop: 64,
    paddingBottom: 50,
  },
  faqRight: {
    paddingTop: 64,
  },
  bLeft: {
    borderLeft: `1px solid ${theme.palette.primary.contrastText}`,
    paddingBottom: 50,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  blur: {
    filter: "blur(5px)",
  },
});
