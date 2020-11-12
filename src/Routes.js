import React, { useContext } from "react";
import { Switch, Redirect } from "react-router-dom";

import { AuthContext } from "./context/auth";
import { ProtectedRoute, PublicRoute } from "./components";
import * as v from "./views";

const Routes = () => {
  const { isAuthed } = useContext(AuthContext);

  return (
    <Switch>
      <ProtectedRoute
        exact
        path="/events"
        component={v.Event}
        title="Últimos eventos"
        isAuthed={isAuthed}
      />
      <ProtectedRoute
        exact
        path="/history-events"
        component={v.History}
        title="Histórico"
        isAuthed={isAuthed}
      />
      <ProtectedRoute
        exact
        path="/checkpoint"
        component={v.Checkpoint}
        title="Checkpoint"
        isAuthed={isAuthed}
      />
      <ProtectedRoute
        exact
        path="/drivers"
        component={v.Driver}
        title="Conductores"
        isAuthed={isAuthed}
      />
      <ProtectedRoute
        exact
        path="/units"
        component={v.Unit}
        title="Unidades"
        isAuthed={isAuthed}
      />

      <ProtectedRoute
        exact
        path="/me"
        component={v.Account}
        title="Mi perfil"
        isAuthed={isAuthed}
      />

      <PublicRoute
        exact
        path="/login"
        component={v.Login}
        isAuthed={isAuthed}
      />
      <PublicRoute
        exact
        path="/recuperar"
        component={v.Recover}
        isAuthed={isAuthed}
      />

      <ProtectedRoute
        path="/dashboard"
        component={v.Dashboard}
        title="Dashboard"
        isAuthed={isAuthed}
      />

      <Redirect from="/" to="/events" />

      <Redirect from="*" to="/desconocido" />

      <PublicRoute
        component={v.NotFound}
      />
    </Switch>
  );
};

export default Routes;
