import React from "react";
import PropTypes from "prop-types";
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  wrap: {
    textAlign: "center",
    margin: "auto",
    padding: theme.spacing(2),
  },
  icon: {
    fontSize: 50,
  },
}));
function Empty({ title }) {
  const classes = useStyles();
  return (
    <div className={classes.wrap}>
      <EmojiNatureIcon color="disabled" className={classes.icon} />
      <Typography variant="subtitle2">{title}</Typography>
    </div>
  );
}

Empty.defaultProps = {
  title: "No hay nada aqui por el momento"
}

Empty.propTypes = {
  title: PropTypes.string,
};

export default Empty;
