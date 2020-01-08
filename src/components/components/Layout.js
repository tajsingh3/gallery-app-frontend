import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import PeopleIcon from "@material-ui/icons/People";
import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import GalleryContext from "../../context/GalleryContext";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleLogin = () => {
    history.push("/login");
  };

  const handleSignup = () => {
    history.push("/signup");
  };

  const handleLogout = setUserId => {
    localStorage.removeItem("token");
    setUserId(null);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className="appbar">
          <Typography variant="h6" noWrap color="secondary">
            Gallery App
          </Typography>
          <GalleryContext.Consumer>
            {context =>
              context.userId ? (
                <Button
                  color="secondary"
                  onClick={() => handleLogout(context.setUserId)}
                >
                  Logout
                </Button>
              ) : (
                <div>
                  <Button color="secondary" onClick={handleLogin}>
                    Login
                  </Button>
                  <Button
                    color="secondary"
                    variant="outlined"
                    onClick={handleSignup}
                  >
                    Sign up
                  </Button>
                </div>
              )
            }
          </GalleryContext.Consumer>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {
            <>
              <ListItem button key={"home"}>
                <ListItemIcon>
                  <HomeIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary={<Link to="/">Home</Link>} />
              </ListItem>
              <ListItem button key={"commart"}>
                <ListItemIcon>
                  <PeopleIcon color="secondary" />
                </ListItemIcon>
                <ListItemText
                  primary={<Link to="/communityart">Community art</Link>}
                />
              </ListItem>
              <GalleryContext.Consumer>
                {context =>
                  context.userId && (
                    <>
                      <ListItem button key={"myart"} component={Link}>
                        <ListItemIcon>
                          <PhotoLibraryIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText
                          primary={<Link to="/myart">My art</Link>}
                        />
                      </ListItem>
                      <ListItem button key={"addpic"}>
                        <ListItemIcon>
                          <AddAPhotoIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText
                          primary={<Link to="/addartwork">Add artwork</Link>}
                        />
                      </ListItem>
                    </>
                  )
                }
              </GalleryContext.Consumer>
              {/* <ListItem button key={"myart"} component={Link}>
                <ListItemIcon>
                  <PhotoLibraryIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary={<Link to="/myart">My art</Link>} />
              </ListItem>
              <ListItem button key={"addpic"}>
                <ListItemIcon>
                  <AddAPhotoIcon color="secondary" />
                </ListItemIcon>
                <ListItemText
                  primary={<Link to="/addartwork">Add artwork</Link>}
                />
              </ListItem> */}
            </>
          }
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
