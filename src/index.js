import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// import PrivateRoute from "contexts/PrivateRoute";


if (process.env.NODE_ENV === "production") {
  console.log = () => {};
}
ReactDOM.render(
  <Router>
    
  </Router>,
  document.getElementById("root")
);
