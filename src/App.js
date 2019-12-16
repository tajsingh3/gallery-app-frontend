import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import AddArtworkPage from "./components/pages/AddArtworkPage";
import Layout from "./components/components/Layout";
import GalleryPage from "./components/pages/GalleryPage";

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
      <Layout>
        <AddArtworkPage />
        <GalleryPage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
