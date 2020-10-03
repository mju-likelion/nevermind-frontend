import React, { Component, useEffect } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import $ from "jquery";

const SideBarContainer = styled.div`
  margin-top: 7%;
  background-color: white;
  width: 17%;
  display: flex;
  flex-direction: column;
`;
const SideBarItem = styled.div`
  height: 55px;
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-left: 5px solid white;
  cursor: pointer;
  transition: border-left-color 0.5s ease-in-out,
    background-color 0.5s ease-in-out;
`;

class Sidebar extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  componentDidMount() {
    $("#type-all").trigger("click");
  }

  componentDidUpdate() {
    const typeClicked = this.props.typeClicked;
    if (typeClicked) {
      $(`#${typeClicked}`).css({
        "border-left-color": "#7ba2e0",
        "background-color": "#ebebeb",
      });
      $("#sub_type").text($(`#${typeClicked}`).text());
    }
  }

  render() {
    return (
      <SideBarContainer>
        <SideBarItem
          className="sbitem"
          id="type-all"
          onClick={this.props.handleSidebarClick}
        >
          ALL
        </SideBarItem>
        <SideBarItem
          className="sbitem"
          id="type-week"
          onClick={this.props.handleSidebarClick}
        >
          Week
        </SideBarItem>
        <SideBarItem
          className="sbitem"
          id="type-month"
          onClick={this.props.handleSidebarClick}
        >
          Month
        </SideBarItem>
        <SideBarItem
          className="sbitem"
          id="type-year"
          onClick={this.props.handleSidebarClick}
        >
          Year
        </SideBarItem>
        <SideBarItem
          className="sbitem"
          id="type-lifetime"
          onClick={this.props.handleSidebarClick}
        >
          Life Time
        </SideBarItem>
      </SideBarContainer>
    );
  }
}

export default Sidebar;
