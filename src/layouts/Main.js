import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/styles";
import { useMediaQuery } from "@material-ui/core";

import { Sidebar, Topbar, Footer, Breadcrumb } from "./components";
import AuthService from "service/auth";
import { AuthContext } from "context/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    paddingTop: 64,
  },
  shiftContent: {
    paddingLeft: 240,
  },
  content: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(2),
    height: "100%",
  },
}));

const Main = (props) => {
  const { children, title } = props;

  const classes = useStyles();
  const theme = useTheme();
  const { user, setUser } = useContext(AuthContext);

  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const handleSignOut = () => {
    AuthService.logout();
    setUser({});
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop,
      })}
    >
      <Topbar
        onSidebarOpen={handleSidebarOpen}
        handleSignOut={handleSignOut}
        user={user}
      />
      {
        <Sidebar
          onClose={handleSidebarClose}
          open={shouldOpenSidebar}
          variant={isDesktop ? "persistent" : "temporary"}
          handleSignOut={handleSignOut}
        />
      }
      <main className={classes.content}>
        <Breadcrumb title={title} />
        {children}
        <Footer />
      </main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
