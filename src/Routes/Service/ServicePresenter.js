import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Sidebar from "Components/Sidebar";
import Helmet from "react-helmet";
import Logo from "Components/Logo";
import { Link } from "react-router-dom";

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
`;

const AddButton = styled.button`
  display: flex;
  position: absolute;
  border-radius: 7px;
  margin: 50px 90px;
  background-color: #e65857;
  border: none;
  color: white;
  :hover {
    background-color: white;
    border: 1px solid red;
    color: black;
  }
`;

const ServicePresenter = () => (
  <Container>
    <Helmet>
      <title>Service | Nevermind</title>
    </Helmet>
    <AddButton>+ADD</AddButton>
    <Sidebar></Sidebar>

    <ViewContainer></ViewContainer>
  </Container>
);

export default ServicePresenter;
