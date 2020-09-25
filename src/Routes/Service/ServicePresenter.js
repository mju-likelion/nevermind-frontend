import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Logo from "Components/Logo";
import { Link } from "react-router-dom";
import AddContainer from "Routes/Add";
import $ from "jquery";

const SideBarContainer = styled.div`
  margin-top: 7%;
  background-color: white;
  width: 17%;
  display: flex;
  flex-direction: column;
`;
const SideBarItem = styled.ul`
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 5px solid ${(props) => (props.current ? "#7BA2E0" : "transparent")};
  transition: border-left 0.5s ease-in-out;
  background-color: ${(props) => (props.current ? "#ebebeb" : "transparent")};
  transition: border-left 0.5s ease-in-out;
`;

const Container = styled.div`
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  overflow: auto;
`;

const ViewContainer = styled.div`
  margin-top: 7%;
  margin-left: 0%;
  width: 100%;
  background-color: #ebebeb;
  display: flex;
`;

const AddButton = styled.button`
  display: flex;
  position: absolute;
  border-radius: 7px;
  margin-top: 3%;
  margin-left: 5.5%;
  background-color: #e65857;
  border: none;
  width: 70px;
  height: 30px;
  justify-content: center;
  color: white;
  text-align: center;
  line-height: 1.9em;
  :hover {
    background-color: white;
    border: 1px solid red;
    color: black;
  }
`;

const SubType = styled.div`
  margin-top: 3%;
  margin-left: 18%;
  display: flex;
  position: absolute;
  color: #669ed1;
  font-size: 30px;
`;

const EstiExpend = styled.div`
  padding: 10px;
  background-color: #ec8a7f;
  width: 43%;
  height: 25%;
  margin-left: 5%;
  margin-top: 2%;
  border-radius: 20px;
  display: flex;
`;

const AlreadyPaid = styled.div`
  padding: 10px;
  background-color: #5dbf5d;
  width: 30%;
  height: 25%;
  margin-left: 8%;
  margin-top: 2%;
  border-radius: 20px;
  display: flex;
`;

const SubItem = styled.div`
  padding: 10px;
  background-color: white;
  width: 69%;
  height: 23%;
  margin-left: 4.3%;
  margin-top: 15%;
  border-radius: 20px;
  position: absolute;
`;

const ServicePresenter = () => (
  <Container className="position-relative">
    <Helmet>
      <title>Service | Nevermind</title>
    </Helmet>
    <AddButton data-toggle="modal" data-target="#addForm">
      +ADD
    </AddButton>
    <AddContainer />
    <SideBarContainer>
      <button>
        <SideBarItem>ALL</SideBarItem>
      </button>
      <button>
        <SideBarItem>Week</SideBarItem>
      </button>
      <button>
        <SideBarItem>Month</SideBarItem>
      </button>
      <button>
        <SideBarItem>Life Time</SideBarItem>
      </button>
    </SideBarContainer>
    <SubType>ALL</SubType>
    <ViewContainer>
      <EstiExpend></EstiExpend>
      <AlreadyPaid></AlreadyPaid>
    </ViewContainer>
  </Container>
);

export default ServicePresenter;
