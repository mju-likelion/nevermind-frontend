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
const SideBarItem = styled.button`
  height: 55px;
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.onClick ? "#7BA2E0" : "transparent")};
  border-left: 5px solid ${(props) => (props.onClick ? "#ebebeb" : "transparent")};
  transition: border-left 0.5s ease-in-out;
  transition: border-left 0.5s ease-in-out;
`;

class Sidebar extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <SideBarContainer>
        <SideBarItem>ALL</SideBarItem>
        <SideBarItem>Week</SideBarItem>
        <SideBarItem>Month</SideBarItem>
        <SideBarItem>Year</SideBarItem>
        <SideBarItem>Life Time</SideBarItem>
      </SideBarContainer>
    );
  }
}

export default Sidebar;
