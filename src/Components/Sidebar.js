import React, { useEffect } from "react";
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
const SideBarItem = styled.ul`
  border-left: 5px solid ${(props) => (props.current ? "#7BA2E0" : "transparent")};
  transition: border-left 0.5s ease-in-out;
  background-color: ${(props) => (props.current ? "#ebebeb" : "transparent")};
  transition: border-left 0.5s ease-in-out;
`;
const SLink = styled(Link)`
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default withRouter(({ location: { pathname } }) => (
  <Container>
    <Item current={pathname === "/Service"}>
      <SLink to="/Service">ALL</SLink>
    </Item>
    <Item current={pathname === "/week"}>
      <SLink to="/week">WEEK</SLink>
    </Item>
    <Item current={pathname === "/month"}>
      <SLink to="/month">MONTH</SLink>
    </Item>
    <Item current={pathname === "/lifetime"}>
      <SLink to="/month">Life Time</SLink>
    </Item>
  </Container>
));
