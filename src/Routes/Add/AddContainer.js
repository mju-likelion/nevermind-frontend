import React from "react";
import AddPresenter from "./AddPresenter";
import nevAxios from "Src/nev-axios";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: null,
      bill: 0,
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

  onSubmit = (appName, bill, type, startDate, endDate) => {};

  render() {
    const { appName, bill, type, startDate, endDate } = this.state;
    console.log(this.state);
    return (
      <AddPresenter
        appName={appName}
        bill={bill}
        type={type}
        startDate={startDate}
        endDate={endDate}
        handleStartDateChange={this.handleStartDateChange}
        handleEndDateChange={this.handleEndDateChange}
      />
    );
  }
}
