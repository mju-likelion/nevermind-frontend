import React from "react";
import InfoPresenter from "./InfoPresenter";

export default class InfoContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return <InfoPresenter />;
  }
}
