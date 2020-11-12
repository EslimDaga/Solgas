import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Divider, Drawer, Button, colors } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import EventIcon from '@material-ui/icons/Event';
import TimelineIcon from '@material-ui/icons/Timeline';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import PeopleIcon from '@material-ui/icons/People';
import DriveEtaIcon from '@material-ui/icons/DriveEta';

import { Profile, SidebarNav } from "./components";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up("lg")]: {
      marginTop: 64,
      height: "calc(100% - 64px)",
    },
  },
  root: {
    backgroundColor: theme.palette.white,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
  actions: {
    backgroundColor: colors.grey[50],
    padding: theme.spacing(2, 2),
    display: "flex",
    justifyContent: "center",
  },
}));

const Sidebar = ({ open, variant, onClose, className, handleSignOut, ...rest }) => {

  const classes = useStyles();

  const pages = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <DashboardIcon />,
    },
    {
      title: "Eventos",
      href: "/events",
      icon: <EventIcon />,
    },
    {
      title: "Historial",
      href: "/history-events",
      icon: <TimelineIcon />,
    },
    {
      title: "Checkpoint",
      href: "/checkpoint",
      icon: <AssignmentTurnedInIcon />,
    },
    {
      title: "Conductores",
      href: "/drivers",
      icon: <PeopleIcon />,
    },
    {
      title: "Unidades",
      href: "/units",
      icon: <DriveEtaIcon />,
    },
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
        <div className={classes.actions}>
          <Button
            color="secondary"
            variant="outlined"
            size="small"
            onClick={handleSignOut}
          >
            Cerrar Sesión
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
  handleSignOut: PropTypes.func,
};

export default Sidebar;
