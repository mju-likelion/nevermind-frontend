import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.ul`
  margin-top: 7%;
  width: 17%;
  background-color: white;
`;

const Item = styled.li`
  padding: 25px;
`;

const Button = styled.button`
  all: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: #ebebeb;
  }
  width: 100%;
`;
const Sidebar = () => (
  <NavContainer>
    <Button>
      <Item>ALL</Item>
    </Button>
    <Button>
      <Item>WEEK</Item>
    </Button>
    <Button>
      <Item>MONTH</Item>
    </Button>
    <Button>
      <Item>YEAR</Item>
    </Button>
    <Button>
      <Item>LIFE TIME</Item>
    </Button>
  </NavContainer>
);

export default Sidebar;
