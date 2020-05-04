import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#1061AD",
      light: "#E4F6FF",
      dark: "#002345",


      
      contrastText: "rgba(0, 0, 0, 0.15000000596046448)",
    },
    secondary: {
      main: "#FF8E45",
      light: "#FFFFFF",
      dark: "#37B8FC",
      //contrastText: "#707070",
    },
  },

  typography: {
    fontFamily: ["Josefin Sans", "sans-serif"].join(","),

    useNextVariants: true,
  },

  //  direction: 'rtl',
});
