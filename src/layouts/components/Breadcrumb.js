import React from "react";
import PropTypes from "prop-types";
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import { Breadcrumbs, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    link: {
        display: 'flex',
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
    bread: {
        marginBottom: theme.spacing(3),
        cursor: 'pointer',
    }
}));


const Breadcrumb = ({ title, history }) => {
    const classes = useStyles();

    const goHome = () => {
        console.log(history);
        history.push("/dashboard")
    }

    return (
        <Breadcrumbs aria-label="breadcrumb" className={classes.bread}>
            <Link color="inherit" tag="span" onClick={goHome} className={classes.link} >
                <HomeIcon className={classes.icon} />
                Inicio
            </Link>
            {history.location.pathname !== "/dashboard" && <Typography color="textPrimary"> {title}</Typography>}
        </Breadcrumbs>
    )
}

Breadcrumb.propTypes = {
    title: PropTypes.string.isRequired,
}

export default withRouter(Breadcrumb);