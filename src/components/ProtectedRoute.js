import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Main } from "../layouts";

const ProtectedRoute = (props) => {
  const { isAuthed, component: Component, title, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(matchProps) => {
        if (isAuthed) {
          return (
            <Main title={title}>
              <Component {...matchProps} />
            </Main>
          );
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.any.isRequired,
  isAuthed: PropTypes.any.isRequired,
};

export default ProtectedRoute;
