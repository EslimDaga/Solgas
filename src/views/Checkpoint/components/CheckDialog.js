import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Dialog, IconButton, Typography, DialogContent, Toolbar, Slide } from '@material-ui/core';
import { Close as DialogClose} from '@material-ui/icons'
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const useStyles = makeStyles((theme) => ({
    appBar: {
        position: "relative",
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
        color: "white",
    },
    marginX: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    responsive: {
        width: "100%",
        height: "auto",
    },
    padding: {
        padding: "0",
    },
    iframe: {
        display: "block",
        width: "100%",
        height: "100%",
        border: "none",
    }
}));
const CheckDialog = ({ open, title, url, onClose }) => {
    const classes = useStyles();
    return (
        <Dialog
            fullScreen
            open={open}
            onClose={onClose}
            aria-labelledby="form-dialog-title"
            TransitionComponent={Transition}
        >
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={onClose}
                        aria-label="close"
                    >
                        <DialogClose />
                    </IconButton>
                    <Typography variant="h3" className={classes.title}>
                        { title }
                   </Typography>
                </Toolbar>
            </AppBar>
            <DialogContent className={classes.padding}>
                <iframe className={classes.iframe} src={url} title="Checkpoint"></iframe>
            </DialogContent>
        </Dialog>
    )
}

CheckDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
}


export default CheckDialog;