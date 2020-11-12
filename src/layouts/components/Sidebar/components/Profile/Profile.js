import React, { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Typography, Button } from "@material-ui/core";

import { AuthContext } from "context/auth";
import { UserImage } from "components";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "fit-content",
  },
  avatar: {
    marginTop: theme.spacing(4),
    width: 70,
    height: 70,
  },
  upper: {
    textTransform: "uppercase",
    paddingTop : "10px"
  },
  pt : {
    paddingTop : "7px"
  }
}));

const Profile = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const { user } = useContext(AuthContext);
  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <UserImage className={classes.avatar} user={user.name}/>
      <Typography variant="h4" className={classes.upper}>{user.username}</Typography>
      <Typography variant="subtitle2" className={classes.pt}>
        {user.name || user.is_staff ? 'Admin' : 'Usuario'}
      </Typography>
      <Button color="secondary" component={RouterLink} to="/me">ver perfil</Button>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
};

export default Profile;
