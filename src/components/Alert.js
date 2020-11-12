import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { orange } from "@material-ui/core/colors";
import { Box, Typography } from "@material-ui/core";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
const useStyles = makeStyles((theme) => ({
  paper: {
    width: "100%",
    padding: theme.spacing(2),
    backgroundColor: orange[100],
    borderLeft: `5px solid ${orange[500]}`,
  },
}));

const Alert = ({title, children}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Box display="flex">
        <NotificationImportantIcon fontSize="large" color="action" />
        <div>
          <Typography variant="h5">{title}</Typography>
          {children}
        </div>
      </Box>
    </Paper>
  );
};

Alert.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default Alert;
