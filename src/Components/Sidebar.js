import React from "react";
import styled from "styled-components";

const Container = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 8%;
  background-color: #263d66;
  height: 100%;
  position: fixed;
  overflow: auto;
`;

const Sidebar = () => <Container></Container>;

export default Sidebar;
