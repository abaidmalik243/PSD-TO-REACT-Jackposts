import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  HashRouter
} from "react-router-dom";
import App from "./MyApp";

export default class Navigation extends Component {
  render() {
    return (
      <Router>
        <HashRouter>
          {
            <Switch>
              <Route exact path="/" component={App} />
            </Switch>
          }
        </HashRouter>
      </Router>
    );
  }
}
