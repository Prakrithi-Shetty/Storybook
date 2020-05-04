import React from "react";
import "./App.css";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { theme } from "./constants/theme";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <AppRoutes />
    </MuiThemeProvider>
  );
}

export default App;
