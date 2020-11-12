import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
  LinearProgress,
} from "@material-ui/core";
import { IMAGE } from "constants/global";

const useStyles = makeStyles((theme) => ({
  root: {},
  details: {
    display: "flex",
  },
  avatar: {
    marginLeft: "auto",
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0,
  },
  progress: {
    marginTop: theme.spacing(2),
  },
  uploadButton: {
    marginRight: theme.spacing(2),
  },
}));

const Profile = ({ user, className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <div className={classes.details}>
          <div>
            <Typography gutterBottom variant="h3">
              {user.username}
            </Typography>
            <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1"
            >
              ROL: {user.is_staff ? 'Admin' : 'Usuario'}
            </Typography>
          </div>
          <Avatar
            className={classes.avatar}
            src={IMAGE}
          />
        </div>
        <div className={classes.progress}>
          <Typography variant="body1">Perfil completado: 70%</Typography>
          <LinearProgress value={70} variant="determinate" />
        </div>
      </CardContent>
      <Divider />
      <CardActions>
        <Button className={classes.uploadButton} disabled>
          Cambiar Foto
        </Button>
      </CardActions>
    </Card>
  );
};

Profile.propTypes = {
  user: PropTypes.object,
  className: PropTypes.string,
};

export default Profile;
