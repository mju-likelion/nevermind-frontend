import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import styled from "styled-components";
import Main from "Routes/Main";
import Signup from "Routes/Signup";
import Login from "Routes/Login";
import Service from "Routes/Service";
import Navbar from "./Navbar";
import nevAxios from "../nev-axios";

const MainContainer = styled.div`
  margin-left: 5em;
  height: 100%;
`;

const Routers = () => (
  <Router>
    <Navbar nevAxios={nevAxios} />
    <MainContainer>
      <Switch>
        <Route path="/" exact render={(props) => <Main {...props} nevAxios={nevAxios} />} />
        <Route path="/Signup" render={(props) => <Signup {...props} nevAxios={nevAxios} />} />
        <Route path="/Login" render={(props) => <Login {...props} nevAxios={nevAxios} />} />
        <Route path="/Service" render={(props) => <Service {...props} nevAxios={nevAxios} />} />
        <Redirect from="*" to="/" />
      </Switch>
    </MainContainer>
  </Router>
);

export default Routers;
