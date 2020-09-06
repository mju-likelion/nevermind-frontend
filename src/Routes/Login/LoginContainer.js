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
      if (res.data.is_login) {
        window.location.href = "/Service";
      } else {
        alert("아이디 또는 비밀번호를 좀 제대로 입력해보십시오.");
      }
    })(email, password);
    this.setState({ email: email, password: password });
  };

  render() {
    return <LoginPresenter onSubmit={this.onSubmit} />;
  }
}
