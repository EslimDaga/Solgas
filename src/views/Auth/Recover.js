import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Container } from "./components";

const useStyles = makeStyles((theme) => ({
  mydiv: {
    margin: theme.spacing(5),
  },
}));

const Recover = () => {
  const classes = useStyles();

  return (
    <Container title="Recuperar Contraseña" back="/login" backname="Volver a Login">
      <div className={classes.mydiv}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e..</div>
    </Container>
  );
};

export default Recover;
