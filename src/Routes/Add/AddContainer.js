import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import LoginPresenter from "./AddPresenter";
import nevAxios from "Src/nev-axios";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      appName: null,
      bill: 0,
      type: "all",
      startDay: undefined,
      endDay: undefined,
    };
  }

  handleStartDayChange = (day) => {
    this.setState({ startDay: day });
  };

  handleEndDayChange = (day) => {
    this.setState({ endDay: day });
  };

  onSubmit = (appName, bill, type, startDay, endDay) => {};

  render() {
    const { appName, bill, type, startDay, endDay } = this.state;
    return (
      <AddPresenter
        appName={appName}
        bill={bill}
        type={type}
        startDay={startDay}
        endDay={endDay}
        onSubmit={this.onSubmit}
        handleStartDayChange={this.handleStartDayChange}
        handleEndDayChange={this.handleEndDayChange}
      />
    );
  }
}
