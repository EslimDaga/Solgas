import React from 'react'
import { Modal } from 'components';
import PropTypes from 'prop-types';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Typography, Grid } from '@material-ui/core';
import { yourdate } from 'common/decorator';
const EventDialog = ({ open, item, onClose }) => {

    return (
        <Modal open={open} fullWidth maxWidth="lg" title="Detalle del evento" closeButton={false} handleConfirm={onClose}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} container spacing={1}>
                    <Grid item xs={6}><Typography variant="body1"> <b>Operador Logístico:</b></Typography></Grid>
                    <Grid item xs={6}><Typography variant="body1"> {item.unitid} </Typography></Grid>
                    <Grid item xs={6}><Typography variant="body1"> <b>Placa:</b></Typography></Grid>
                    <Grid item xs={6}><Typography variant="body1"> {item.logistic_operator} </Typography></Grid>
                    <Grid item xs={6}><Typography variant="body1"> <b>Tipo de Servicio:</b></Typography></Grid>
                    <Grid item xs={6}><Typography variant="body1"> {item.type_of_service} </Typography></Grid>
                    <Grid item xs={6}><Typography variant="body1"> <b>Conductor:</b></Typography></Grid>
                    <Grid item xs={6}><Typography variant="body1"> {item.driver_fullname} </Typography></Grid>
                    <Grid item xs={6}><Typography variant="body1"> <b>Fecha de Creación:</b></Typography></Grid>
                    <Grid item xs={6}><Typography variant="body1"> {yourdate(item.datetime)} </Typography></Grid>
                    <Grid item xs={6}><Typography variant="body1"> <b>Estado de ruta:</b></Typography></Grid>
                    <Grid item xs={6}><Typography variant="body1"> {item.route_status} </Typography></Grid>
                    <Grid item xs={6}><Typography variant="body1"> <b>Checkpoint:</b></Typography></Grid>
                    <Grid item xs={6}><Typography variant="body1"> {item.checkpoint} </Typography></Grid>
                    <Grid item xs={6}><Typography variant="body1"> <b>Puntaje:</b></Typography></Grid>
                    <Grid item xs={6}><Typography variant="body1"> {item.game_score} </Typography></Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <AwesomeSlider media={item.images} />
                </Grid>
            </Grid>
        </Modal>
    )
}

EventDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    item: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired
}


export default EventDialog;