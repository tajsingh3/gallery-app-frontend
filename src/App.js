import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import CreateArtPage from "./components/pages/CreateArtPage";

import "./styles/style.scss";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#2c2c2c",
      main: "#000000",
      dark: "#000000",
      contrastText: "#ffffff"
    },
    secondary: {
      light: "#ff5c7c",
      main: "#ff0350",
      dark: "#c40028",
      contrastText: "#000000"
    },
    error: {
      main: "#18ffff"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid container justify={"center"}>
          <Grid item xs={6}>
            <CreateArtPage />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
