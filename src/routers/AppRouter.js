import React from "react";
import createHistory from "history/createBrowserHistory";

import { Router, Route, Switch } from "react-router-dom";
import AddExpensePage from "../components/AddExpensePage";
import EditPage from "../components/EditPage";
import ErrorPage from "../components/ErrorPage";
import HomePage from "../components/HomePage";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={HomePage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
