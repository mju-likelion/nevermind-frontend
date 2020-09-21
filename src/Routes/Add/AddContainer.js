import React from "react";
import AddPresenter from "./AddPresenter";

export default class extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      appImg: null,
      appName: null,
      list: null,
      fee: 0,
      type: "all",
      startDate: new Date(),
      endDate: new Date(),
    };
  }

  handleStartDateChange = (startDate) => {
    this.setState({
      startDate,
    });
  };

  handleEndDateChange = (endDate) => {
    this.setState({
      endDate,
    });
  };

  handleAppSelect = (appImg, appName) => {
    let stateObj = { appName };
    if (appImg) stateObj["appImg"] = appImg;
    this.setState(stateObj);
  };

  handleSubmit = (appImg, appName, fee, type, startDate, endDate) => {
    // TODO: Send data to server using nev-axios
    //       & refresh ServiceContainer
    console.log({
      appImg,
      appName,
      fee,
      type,
      startDate,
      endDate,
    });
  };

  initForm = () => {
    this.setState({
      appImg: "",
      appName: "",
      fee: "",
      type: "",
    });
  };

  render() {
    const { appImg, appName, startDate, endDate } = this.state;
    return (
      <AddPresenter
        appImg={appImg}
        appName={appName}
        startDate={startDate}
        endDate={endDate}
        handleStartDateChange={this.handleStartDateChange}
        handleEndDateChange={this.handleEndDateChange}
        handleSubmit={this.handleSubmit}
        handleAppSelect={this.handleAppSelect}
        initForm={this.initForm}
      />
    );
  }
}
