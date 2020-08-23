import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import styled from "styled-components";
import Main from "Routes/Main";
import Signup from "Routes/Signup";
import Login from "Routes/Login";
import Service from "Routes/Service";
import Navbar from "./Navbar";

const MainContainer = styled.div`
  margin-left: 5em;
  height: 100%;
`;

export default () => (
  <Router>
    <Navbar />
    <MainContainer>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Login" component={Login} />
        <Route path="/Service" component={Service} />
        <Redirect from="*" to="/" />
      </Switch>
    </MainContainer>
  </Router>
);