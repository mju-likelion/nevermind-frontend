import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Main from "../Routes/Main";

export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={Main} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
