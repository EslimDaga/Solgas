import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from 'components';
import PropTypes from 'prop-types';
import { Grid,Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import axios from 'axios';
import cache from "../../../helpers/cache";

const baseUrl='http://checkpoint.segursat.com:8080/control/web/api/create-unit/'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const CreateDialog = ({ open, onClose }) => {

  const [data,setData] = useState([]);
  const [consolaSeleccionada, setConsolaSeleccionada] = useState({
    license_plate: "",
    logistic_operator: "",
    provider: "",
    service_type: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setConsolaSeleccionada(prevState => ({
      ...prevState,
      [name] : value
    }));
  }

  const peticionPost = async () => {
    await axios.post(baseUrl,consolaSeleccionada,{
      headers: {
        'Authorization': `JWT ${cache.getItem("user").token}`
      }})
    .then(response=>{
      setData(data.concat(response.data))
      window.location.reload();
    })
  }

  const classes = useStyles();
  return (
    <Modal open={open} fullWidth maxWidth="sm" title="Nueva unidad" close={onClose} handleConfirm={onClose}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl fullWidth className={classes.margin} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">Placa</InputLabel>
              <FilledInput
                name="license_plate"
                onChange = { handleChange }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth className={classes.margin} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">Operador Logistico</InputLabel>
              <FilledInput
                name="logistic_operator"
                onChange = { handleChange }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth className={classes.margin} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">Proveedor</InputLabel>
              <FilledInput
                name="provider"
                onChange = { handleChange }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth className={classes.margin} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">Tipo de servicio</InputLabel>
              <FilledInput
                name="service_type"
                onChange = { handleChange }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
          <Button fullWidth variant="contained" color="primary" onClick={peticionPost}>
            Guardar
          </Button>
          </Grid>
        </Grid>
      </div>
    </Modal>
  )
}

CreateDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    handleConfirm: PropTypes.func.isRequired
}


export default CreateDialog;