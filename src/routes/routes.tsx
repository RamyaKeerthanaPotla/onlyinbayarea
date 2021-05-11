import * as React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { Login } from "../components/login";

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
};

export default Routes();
