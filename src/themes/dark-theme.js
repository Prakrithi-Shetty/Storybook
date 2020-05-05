import { createMuiTheme } from "@material-ui/core/styles";
// import green from "@material-ui/core/colors/green";
// import purple from "@material-ui/core/colors/purple";

// const primaryGreen = green[500];
// const accentGreen = green.A200;
// const darkGreen = green[900];
// const primaryPurple = purple[500];
// const accentPurple = purple.A200;
// const darkPurple = purple[900];

export const overridings = {
  name: 'Light Theme',
  palette: {
    
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
      }
  },

  typography: {
    fontFamily: ["Josefin Sans", "sans-serif"].join(","),

    useNextVariants: true,
  },

};

export default createMuiTheme(overridings);