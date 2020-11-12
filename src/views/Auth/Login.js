import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Button,
  TextField,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { AuthContext, ToastContext } from "context/consumer";
import { Container } from "./components";
import authApi from "service/auth";
const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: theme.spacing(2),
  },
  signInButton: {
    margin: theme.spacing(2, 0),
  },
  center: {
    justifyContent: "center",
  },
}));

const Login = ({ history }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(AuthContext);
  const { show } = useContext(ToastContext);
  const { register, handleSubmit, errors } = useForm();

  const onSubmitForm = (data) => {
    setLoading(true);
    authApi.login(data).then(r => {
      show("¡Bienvenido!")
      setTimeout(() => {
        setUser(r);
        history.push("/events");
      }, 1000);
    }).catch(err => {
      show("Contraseña incorrecta", "error")
    })
  };

  return (
    <Container
      title="Iniciar Sesión"
      subtitle="Ingrese sus credenciales de autenticación para acceder"
      back="/recuperar"
      backname="Olvide mi Contraseña"
    >
      <form
        className={classes.form}
        onSubmit={handleSubmit(onSubmitForm)}
        autoComplete="off"
      >
        <TextField
          fullWidth
          variant="outlined"
          className={classes.textField}
          error={!!errors.username}
          helperText={errors.username && errors.username.message}
          label="Usuario"
          name="username"
          inputRef={register({
            required: "Este campo es requerido",
          })}
        />
        <TextField
          fullWidth
          variant="outlined"
          className={classes.textField}
          error={!!errors.password}
          helperText={errors.password && errors.password.message}
          label="Contraseña"
          name="password"
          type="password"
          inputRef={register({
            required: "Su contraseña es requerido",
            minLength: {
              value: 6,
              message: "contraseña posee mas caracteres",
            },
          })}
        />
        <Button
          className={classes.signInButton}
          color="primary"
          disabled={loading}
          fullWidth
          size="large"
          type="submit"
          variant="contained"
        >
          Iniciar Sesión
        </Button>
      </form>
    </Container>
  );
};

export default Login;
