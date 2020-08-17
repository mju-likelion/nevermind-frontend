import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Main from "Routes/Main";
import Signup from "Routes/Signup";

export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/Signup" component={Signup} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
