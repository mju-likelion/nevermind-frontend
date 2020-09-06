import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { withRouter } from "react-router";
import styled from "styled-components";
import Main from "Routes/Main";
import Signup from "Routes/Signup";
import Login from "Routes/Login";
import Service from "Routes/Service";
import Navbar from "./Navbar";
import nevAxios from "Src/nev-axios";

const MainContainer = styled.div`
  margin-left: 5em;
  height: 100%;
`;

const Routers = () => {
  const [isSession, setSessionState] = useState(false);
  useEffect(() => {
    (async () => {
      const sessionRes = await nevAxios.issession();
      setSessionState(sessionRes.data.is_session);
    })();
  });
  return (
    <Router>
      <Navbar />
      <MainContainer>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Login" component={Login} />
          <Route
            path={isSession ? "/Service" : "/"}
            component={isSession ? Service : Main}
          />
          <Redirect from="*" to="/" />
        </Switch>
      </MainContainer>
    </Router>
  );
};

export default Routers;
