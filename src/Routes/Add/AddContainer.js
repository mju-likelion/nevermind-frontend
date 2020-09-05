import React from "react";
import AddPresenter from "./AddPresenter";
import nevAxios from "Src/nev-axios";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: null,
      fee: 0,
      type: "all",
      startDate: new Date(),
      endDate: new Date(),
    };
  }

  handleStartDateChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  handleEndDateChange = (date) => {
    this.setState({
      endDate: date,
    });
  };

  handleSubmit = (appName, fee, type) => {
    this.setState({
      appName: appName,
      fee: fee,
      type: type,
    });
  };

  render() {
    console.log(this.state);
    const { startDate, endDate } = this.state;
    return (
      <AddPresenter
        startDate={startDate}
        endDate={endDate}
        handleStartDateChange={this.handleStartDateChange}
        handleEndDateChange={this.handleEndDateChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
