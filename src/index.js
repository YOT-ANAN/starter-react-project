import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import PrivateRoute from "./contexts/PrivateRoute";

import Auth from "./layouts/Auth";

import "./styles/tailwind.css"

if (process.env.NODE_ENV === "production") {
  console.log = () => {};
}

ReactDOM.render(
  <Router>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/auth" component={Auth} />
      {/*PrivateRoute*/}
      <PrivateRoute>{/* <Redirect from="*" to="/" /> */}</PrivateRoute>
      {/* add redirect for NotFound page */}
      <Redirect from="*" to="/auth" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
