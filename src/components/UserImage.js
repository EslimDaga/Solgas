import React from "react";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { getInitials } from "helpers";
import clsx from "clsx";
import { blue } from "@material-ui/core/colors";
import theme from "theme";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
    orange: {
        color: theme.palette.getContrastText(blue[400]),
        backgroundColor: blue[400],
    },
}))

const UserImage = ({ name, className }) => {
    const classes = useStyles();
    return <Avatar alt="yup" className={clsx(classes.orange, className)}>{getInitials(name)}</Avatar>
}

UserImage.defaultProps = {
    name: 'User'
}

UserImage.propTypes = {
    name: PropTypes.string,
    className: PropTypes.any
}

export default UserImage;