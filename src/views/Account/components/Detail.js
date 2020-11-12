import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Print as PrintIcon } from "@material-ui/icons";
import { yourdate } from "common/decorator";

const Detail = ({ user }) => {

  return (
    <React.Fragment>
      <Card>
        <CardHeader
          title="Información del usuario"
          subheader={user.username}
          action={
            <IconButton
              aria-label="yup"
            >
              <PrintIcon />
            </IconButton>
          }
        />
        <Divider />
        <CardContent>
          <Grid container spacing={2} justify="flex-start" alignItems="flex-start">
            <Grid item xs={6}><Typography variant="body1"> <b>Nombre:</b></Typography></Grid>
            <Grid item xs={6}><Typography variant="body1"> {user.first_name} </Typography></Grid>
            <Grid item xs={6}><Typography variant="body1"> <b>Apellidos:</b></Typography></Grid>
            <Grid item xs={6}><Typography variant="body1"> {user.last_name} </Typography></Grid>
            <Grid item xs={6}><Typography variant="body1"> <b>Correo:</b></Typography></Grid>
            <Grid item xs={6}><Typography variant="body1"> {user.email} </Typography></Grid>
            <Grid item xs={6}><Typography variant="body1"> <b>Fecha de ingreso:</b></Typography></Grid>
            <Grid item xs={6}><Typography variant="body1"> {yourdate(user.date_joined)} </Typography></Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button color="secondary" >
            Guardar Cambios
          </Button>
        </CardActions>
      </Card>

    </React.Fragment>
  );
};

Detail.propTypes = {
  user: PropTypes.object
};

export default Detail;
