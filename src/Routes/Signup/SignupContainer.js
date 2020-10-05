import React from "react";
import SignupPresenter from "./SignupPresenter";

export default class extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      authnum: false,
    };
    this.handleEmailAuth = this.handleEmailAuth.bind(this);
  }

  handleEmailAuth(is_emailauth) {
    this.setState({ authnum: is_emailauth });
  }

  render() {
    const { authnum } = this.state;
    return (
      <SignupPresenter
        authnum={authnum}
        handleEmailAuth={this.handleEmailAuth}
      />
    );
  }
}
