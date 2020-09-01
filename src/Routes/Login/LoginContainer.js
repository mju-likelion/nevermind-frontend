import React from "react";
import LoginPresenter from "./LoginPresenter";
import nevAxios from "Src/nev-axios";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
    };
  }

  onSubmit = (email, password) => {
    (async (email, pwd) => {
      const res = await nevAxios.login({ email, pwd });
      console.log(res.data);
    })(email, password);
    this.setState({ email: email, password: password });
  };

  render() {
    return <LoginPresenter onSubmit={this.onSubmit} />;
  }
}
