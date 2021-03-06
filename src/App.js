import React, { useState } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

// import AddArtworkPage from "./components/pages/AddArtworkPage";
import Layout from "./components/components/Layout";
// import GalleryPage from "./components/pages/GalleryPage";
// import CommunityArtPage from "./components/pages/CommunityArtPage";
// import MyArtPage from "./components/pages/MyArtPage";
// import AddArtworkForm from "./components/components/AddArtworkForm";
// import EditArtworkPage from "./components/pages/EditArtworkPage";
import GalleryContext from "./context/GalleryContext";
import AppRouter from "./routers/AppRouter";

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
  let [userId, setUserId] = useState(null);

  return (
    <GalleryContext.Provider value={{ userId, setUserId }}>
      <ThemeProvider theme={theme}>
        <Layout>
          {/* <CommunityArtPage /> */}
          {/* <MyArtPage /> */}
          {/* <EditArtworkPage /> */}
          {/* <AddArtworkPage /> */}
          <AppRouter />
        </Layout>
      </ThemeProvider>
    </GalleryContext.Provider>
  );
}

export default App;
