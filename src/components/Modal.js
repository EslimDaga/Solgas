import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  DialogActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.primary.main
  },
  padding: {
    padding: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      overflow: 'hidden'
    },

  }
}))

const nop = () => {
  // this is nop :)
}

const Modal = ({ open, close, title, children, handleConfirm, fullWidth, closeButton, maxWidth }) => {

  const classes = useStyles();
  return (
    <Dialog
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      open={open}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" className={classes.header}>{title}</DialogTitle>
      <DialogContent className={classes.padding}>{children}</DialogContent>
      <DialogActions>
        {closeButton && <Button onClick={close} color="secondary">
          Cancelar
        </Button>}
        <Button onClick={handleConfirm} color="secondary" autoFocus>
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

Modal.defaultProps = {
  fullWidth: false,
  fullScreen: false,
  closeButton: true,
  maxWidth: "sm",
  close: nop(),
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  fullWidth: PropTypes.bool,
  maxWidth: PropTypes.string,
  closeButton: PropTypes.bool,
  close: PropTypes.func,
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  handleConfirm: PropTypes.func.isRequired,
};

export default Modal;