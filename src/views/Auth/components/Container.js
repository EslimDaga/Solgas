import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Divider,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "url(images/login.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  form: {
    flexBasis: 700,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  mycard: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "20%",
    },
  },
  head: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: "50%",
    marginBottom: theme.spacing(1),
  },
}));

const Container = ({ children, title, subtitle, back, backname }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.mycard} elevation={4}>
        <CardContent>
          <div className={classes.form}>
            <div className={classes.head}>
              <img
                src="/images/logo-solgas.png"
                alt="logo"
                className={classes.image}
              />
              <Typography variant="h2">{title}</Typography>
              <Typography color="textSecondary" gutterBottom>
                {subtitle}
              </Typography>
            </div>
            <Divider />
            {children}
          </div>
        </CardContent>
        <CardActions>
          <Button size="small" color="secondary" component={Link} to={back}>
            {backname}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

Container.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.any.isRequired
};

export default Container;
