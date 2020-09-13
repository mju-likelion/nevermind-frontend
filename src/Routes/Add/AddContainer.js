import React from "react";
import AddPresenter from "./AddPresenter";
import nevAxios from "Src/nev-axios";
import axios from "axios";

const api = axios.create({
  baseURL: "https://rss.itunes.apple.com/api/v1/kr/ios-apps/",
});

export default class extends React.Component {
  constructor(props) {
    this.state = {
      appName: null,
      list: null,
      fee: 0,
      type: "all",
      startDate: new Date(),
      endDate: new Date(),
    };
  }

  async componentDidMount() {
    try {
      const {
        results: { results: list },
      } = await api.get("top-free/all/100/explicit.json");
      console.log(list);
      this.setState(list);
    } catch {}
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
