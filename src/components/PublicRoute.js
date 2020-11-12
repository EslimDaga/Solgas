import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const PublicRoute = props => {
  const { isAuthed, component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={matchProps =>
        !isAuthed ? <Component {...matchProps} /> : <Redirect to="/events" />
      }
    />
  );
};

PublicRoute.defaultProps = {
  isAuthed: false
}

PublicRoute.propTypes = {
  component: PropTypes.any.isRequired,
  isAuthed: PropTypes.any.isRequired
};

export default PublicRoute;
