import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import {
  AppBar,
  Toolbar,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
/* import NotificationsIcon from "@material-ui/icons/NotificationsActive"; */
import AccountIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
  },
  flexGrow: {
    flexGrow: 1,
  },
  signOutButton: {
    marginLeft: theme.spacing(1),
  },
}));

const Topbar = (props) => {
  const { className, onSidebarOpen, handleSignOut, user, history, ...rest } = props;
  const classes = useStyles();
  /* const [notifications] = useState([]); */

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar>
        <RouterLink to="/">
          <img alt="Logo" width="120" src="/images/logo-solgas.png" />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <Button
            variant="text"
            color="inherit"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleMenuClick}
            startIcon={<AccountIcon />}
          >
            {`${user.username}`}
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem component={RouterLink} to="/me" >
              Mi Perfil
            </MenuItem>
            {/* <MenuItem component={RouterLink} to="/about" >
              Acerca de
            </MenuItem> */}
            <MenuItem onClick={handleSignOut}>Cerrar Session</MenuItem>
          </Menu>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onSidebarOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
  handleSignOut: PropTypes.func,
  user: PropTypes.object,
};

export default Topbar;
