import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: grid;
`;

const NavContainer = styled.ul`
  margin-top: 5%;
  margin-left: 6%;
  width: 17%;
  background-color: white;
`;

const Item = styled.li`
  text-align: center;
  :visited {
    background-color: black;
    color: red;
  }
`;

const Button = styled.button`
  all: unset;
  display: flex;
  margin-top: 10%;

  :hover {
    background-color: #ebebeb;
  }
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
