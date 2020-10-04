/*
[ ServiceContainer States Outline ]

NOTE: Must considered as application-layer states

{
  type: $SUBSCRIPTION_TYPE, // Default: "ALL"
  expectedFee: {
    week: $WEEKLY_FEE,
    month: $MONTHLY_FEE,
    year: $YEARLY_FEE,
  },
  paidFee: $PAID_FEE,  // References "type"
  subscribedApps: [
    // From Server-Side, NOT by Client-Side 
    {
      app_name,
      app_img_url,
      sub_type,
      bill,
      startdate,
      enddate,
    }
  ],
}
*/

import React from "react";
import nevAxios from "../../nev-axios";
import ServicePresenter from "./ServicePresenter";
import $ from "jquery";


class ServiceContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      error: null,
      applist: [],
      renderedList: [],
      typeClicked: null,
    };

    this.calculateBill = this.calculateBill.bind(this);
    this.handleSidebarClick = this.handleSidebarClick.bind(this);
  }

  calculateBill() {
    const renderedList = this.state.renderedList;
    const calcBillByType = (bill_type) => {
      return renderedList.length > 0
        ? renderedList
            .map((item) => item[bill_type])
            .reduce((acc, curr) => acc + curr)
        : 0;
    };
    return {
      week_bill: calcBillByType("week_bill"),
      month_bill: calcBillByType("month_bill"),
      year_bill: calcBillByType("year_bill"),
    };
  }

  handleSidebarClick(e) {
    $(".sbitem").css({
      "border-left-color": "white",
      "background-color": "white",
    });
    const typeClicked = $(e.target).attr("id");
    const renderedList = this.state.applist.filter(
      (item) =>
        item.sub_type === typeClicked.split("-").pop()[0].toUpperCase() ||
        typeClicked === "type-all"
    );
    this.setState({ typeClicked, renderedList });
  }

  async componentDidMount() {
    try {
      const {
        data: { subscriptions: subList },
      } = await nevAxios.getsubscription();
      this.setState({ applist: subList, renderedList: subList });
    } catch {
      this.setState({
        error: "can't find subsciption information",
      });
    }
  }

  componentDidUpdate() {
    if (this.state.typeClicked) {
      console.log("sub_type:", this.state.typeClicked);
    } else {
      $("#sub_type").text("Loading...");
    }
  }

  render() {
    return (
      <ServicePresenter
        applist={this.state.renderedList}
        handleSidebarClick={this.handleSidebarClick}
        typeClicked={this.state.typeClicked}
        calculateBill={this.calculateBill}
      />
    );
  }
}

export default ServiceContainer;
