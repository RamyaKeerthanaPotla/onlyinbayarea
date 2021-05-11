import * as React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { Login } from "../components/login";
import { Navbar } from "../components/navbar";
import { SignUp } from "../components/sign-up";

export const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
};

export default Routes;
