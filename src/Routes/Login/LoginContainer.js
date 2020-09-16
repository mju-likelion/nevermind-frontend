import React from "react";
import LoginPresenter from "./LoginPresenter";
import nevAxios from "Src/nev-axios";

class LoginContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      email: null,
      password: null,
    };
  }

  onSubmit = (email, password) => {
    (async (email, pwd) => {
      const res = await nevAxios.login({ email, pwd });
      if (res.data.is_login) {
        this.props.onLogin();
        alert("로그인이 되어버렸습니다.");
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

export default LoginContainer;
