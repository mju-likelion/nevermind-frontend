import React, { Component } from "react";
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

import nevAxios from "Src/nev-axios";

const MainContainer = styled.div`
  margin-left: 5em;
  height: 100%;
`;

class Routers extends Component {
  constructor(props) {
    super(props);

    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  state = {
    isLogin: false,
  };

  async onLogin() {
    const sessionRes = await nevAxios.issession();
    if (sessionRes.data.is_session) {
      this.setState({ isLogin: true });
    }
  }

  async onLogout() {
    await nevAxios.logout();
    this.setState({ isLogin: false });
  }

  componentDidMount() {
    this.onLogin();
  }

  render() {
    return (
      <Router>
        <Navbar isLogin={this.state.isLogin} onLogout={this.onLogout} />
        <MainContainer>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/Signup" component={Signup} />
            <Route
              path="/Login"
              render={(props) => (
                <Login {...props} onLogin={this.onLogin} />
              )}
            />
            <Route path="/Service" component={Service} />
            <Redirect from="*" to="/" />
          </Switch>
        </MainContainer>
      </Router>
    );
  }
}

export default Routers;
