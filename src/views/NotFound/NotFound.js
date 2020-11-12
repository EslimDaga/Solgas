import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  content: {
    textAlign: "center",
  },
  image: {
    marginTop: 50,
    display: "inline-block",
    maxWidth: "100%",
    width: 600,
  },
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" spacing={4}>
      <Grid item lg={12} xs={12}>
        <div className={classes.content}>
          <Typography variant="h1">
            404: La página que estás buscando no está aquí.
          </Typography>
          <Typography variant="subtitle2">
            Intentaste alguna ruta turbia o viniste aquí por error. Cualquiera
            que sea, intente usar la navegación
          </Typography>
          <img
            alt="Under development"
            className={classes.image}
            src="/images/not_found.png"
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default NotFound;
