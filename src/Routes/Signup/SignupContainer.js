import React from "react";
import nevAxios from "Src/nev-axios";
import SignupPresenter from "./SignupPresenter";

export default class extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      authnum: false,
    };
  }

  async componentDidMount() {
    try {
      //TODO: Fetch EmailAuth Data Using nev-Axios
    } catch {
      console.log("can't find Email verification success code ");
    }
  }

  render() {
    const { authnum } = this.state;
    return <SignupPresenter authnum={authnum} />;
  }
}
